import * as Ws from "../../scripts/app.js";
import { app as mr } from "../../scripts/app.js";
import { api as Gt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function bf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = {}, zo = [], Fr = () => {
}, Lm = () => !1, zl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), jl = (e) => e.startsWith("onUpdate:"), xn = Object.assign, vf = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mv = Object.prototype.hasOwnProperty, ht = (e, t) => Mv.call(e, t), Je = Array.isArray, jo = (e) => ts(e) === "[object Map]", Rm = (e) => ts(e) === "[object Set]", Wh = (e) => ts(e) === "[object Date]", et = (e) => typeof e == "function", Ut = (e) => typeof e == "string", Tr = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", Vm = (e) => (vt(e) || et(e)) && et(e.then) && et(e.catch), $m = Object.prototype.toString, ts = (e) => $m.call(e), Nv = (e) => ts(e).slice(8, -1), zm = (e) => ts(e) === "[object Object]", _f = (e) => Ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, La = /* @__PURE__ */ bf(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Hl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Pv = /-\w/g, An = Hl(
  (e) => e.replace(Pv, (t) => t.slice(1).toUpperCase())
), Av = /\B([A-Z])/g, lo = Hl(
  (e) => e.replace(Av, "-$1").toLowerCase()
), Gl = Hl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Uc = Hl(
  (e) => e ? `on${Gl(e)}` : ""
), Ir = (e, t) => !Object.is(e, t), Us = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, jm = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, wf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Uh;
const Kl = () => Uh || (Uh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wt(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Ut(r) ? Ov(r) : wt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (Ut(e) || vt(e))
    return e;
}
const Cv = /;(?![^(]*\))/g, Iv = /:([^]+)/, Ev = /\/\*[^]*?\*\//g;
function Ov(e) {
  const t = {};
  return e.replace(Ev, "").split(Cv).forEach((n) => {
    if (n) {
      const r = n.split(Iv);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function at(e) {
  let t = "";
  if (Ut(e))
    t = e;
  else if (Je(e))
    for (let n = 0; n < e.length; n++) {
      const r = at(e[n]);
      r && (t += r + " ");
    }
  else if (vt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Fv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tv = /* @__PURE__ */ bf(Fv);
function Hm(e) {
  return !!e || e === "";
}
function Dv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = xf(e[r], t[r]);
  return n;
}
function xf(e, t) {
  if (e === t) return !0;
  let n = Wh(e), r = Wh(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Tr(e), r = Tr(t), n || r)
    return e === t;
  if (n = Je(e), r = Je(t), n || r)
    return n && r ? Dv(e, t) : !1;
  if (n = vt(e), r = vt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const l in e) {
      const u = e.hasOwnProperty(l), d = t.hasOwnProperty(l);
      if (u && !d || !u && d || !xf(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Gm = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Ut(e) ? e : e == null ? "" : Je(e) || vt(e) && (e.toString === $m || !et(e.toString)) ? Gm(e) ? rt(e.value) : JSON.stringify(e, Km, 2) : String(e), Km = (e, t) => Gm(t) ? Km(e, t.value) : jo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Yc(r, a) + " =>"] = o, n),
    {}
  )
} : Rm(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yc(n))
} : Tr(t) ? Yc(t) : vt(t) && !Je(t) && !zm(t) ? String(t) : t, Yc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Tr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Rn;
class Lv {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Rn, !t && Rn && (this.index = (Rn.scopes || (Rn.scopes = [])).push(
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
      const n = Rn;
      try {
        return Rn = this, t();
      } finally {
        Rn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Rn, Rn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Rn = this.prevScope, this.prevScope = void 0);
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
function Rv() {
  return Rn;
}
let Mt;
const Xc = /* @__PURE__ */ new WeakSet();
class Bm {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Rn && Rn.active && Rn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xc.has(this) && (Xc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Um(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Yh(this), Ym(this);
    const t = Mt, n = gr;
    Mt = this, gr = !0;
    try {
      return this.fn();
    } finally {
      Xm(this), Mt = t, gr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mf(t);
      this.deps = this.depsTail = void 0, Yh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Fu(this) && this.run();
  }
  get dirty() {
    return Fu(this);
  }
}
let Wm = 0, Ra, Va;
function Um(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Va, Va = e;
    return;
  }
  e.next = Ra, Ra = e;
}
function Sf() {
  Wm++;
}
function kf() {
  if (--Wm > 0)
    return;
  if (Va) {
    let t = Va;
    for (Va = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ra; ) {
    let t = Ra;
    for (Ra = void 0; t; ) {
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
function Ym(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xm(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Mf(r), Vv(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Fu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qm(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ka) || (e.globalVersion = Ka, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Fu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Mt, r = gr;
  Mt = e, gr = !0;
  try {
    Ym(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ir(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Mt = n, gr = r, Xm(e), e.flags &= -3;
  }
}
function Mf(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Mf(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let gr = !0;
const Jm = [];
function oi() {
  Jm.push(gr), gr = !1;
}
function ai() {
  const e = Jm.pop();
  gr = e === void 0 ? !0 : e;
}
function Yh(e) {
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
let Ka = 0;
class $v {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Nf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Mt || !gr || Mt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Mt)
      n = this.activeLink = new $v(Mt, this), Mt.deps ? (n.prevDep = Mt.depsTail, Mt.depsTail.nextDep = n, Mt.depsTail = n) : Mt.deps = Mt.depsTail = n, Zm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Mt.depsTail, n.nextDep = void 0, Mt.depsTail.nextDep = n, Mt.depsTail = n, Mt.deps === n && (Mt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ka++, this.notify(t);
  }
  notify(t) {
    Sf();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      kf();
    }
  }
}
function Zm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Zm(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Tu = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ Symbol(
  ""
), Du = /* @__PURE__ */ Symbol(
  ""
), Ba = /* @__PURE__ */ Symbol(
  ""
);
function bn(e, t, n) {
  if (gr && Mt) {
    let r = Tu.get(e);
    r || Tu.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Nf()), o.map = r, o.key = n), o.track();
  }
}
function ei(e, t, n, r, o, a) {
  const l = Tu.get(e);
  if (!l) {
    Ka++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Sf(), t === "clear")
    l.forEach(u);
  else {
    const d = Je(e), b = d && _f(n);
    if (d && n === "length") {
      const g = Number(r);
      l.forEach((_, x) => {
        (x === "length" || x === Ba || !Tr(x) && x >= g) && u(_);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && u(l.get(n)), b && u(l.get(Ba)), t) {
        case "add":
          d ? b && u(l.get("length")) : (u(l.get(Ji)), jo(e) && u(l.get(Du)));
          break;
        case "delete":
          d || (u(l.get(Ji)), jo(e) && u(l.get(Du)));
          break;
        case "set":
          jo(e) && u(l.get(Ji));
          break;
      }
  }
  kf();
}
function Ao(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (bn(t, "iterate", Ba), /* @__PURE__ */ rr(e) ? t : t.map(yr));
}
function Bl(e) {
  return bn(e = /* @__PURE__ */ dt(e), "iterate", Ba), e;
}
function Ar(e, t) {
  return /* @__PURE__ */ si(e) ? Jo(/* @__PURE__ */ Zi(e) ? yr(t) : t) : yr(t);
}
const zv = {
  __proto__: null,
  [Symbol.iterator]() {
    return qc(this, Symbol.iterator, (e) => Ar(this, e));
  },
  concat(...e) {
    return Ao(this).concat(
      ...e.map((t) => Je(t) ? Ao(t) : t)
    );
  },
  entries() {
    return qc(this, "entries", (e) => (e[1] = Ar(this, e[1]), e));
  },
  every(e, t) {
    return Wr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Wr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Ar(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Wr(
      this,
      "find",
      e,
      t,
      (n) => Ar(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Wr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Wr(
      this,
      "findLast",
      e,
      t,
      (n) => Ar(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Wr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Wr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Jc(this, "includes", e);
  },
  indexOf(...e) {
    return Jc(this, "indexOf", e);
  },
  join(e) {
    return Ao(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Wr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wa(this, "pop");
  },
  push(...e) {
    return wa(this, "push", e);
  },
  reduce(e, ...t) {
    return Xh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Xh(this, "reduceRight", e, t);
  },
  shift() {
    return wa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Wr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wa(this, "splice", e);
  },
  toReversed() {
    return Ao(this).toReversed();
  },
  toSorted(e) {
    return Ao(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ao(this).toSpliced(...e);
  },
  unshift(...e) {
    return wa(this, "unshift", e);
  },
  values() {
    return qc(this, "values", (e) => Ar(this, e));
  }
};
function qc(e, t, n) {
  const r = Bl(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ rr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const jv = Array.prototype;
function Wr(e, t, n, r, o, a) {
  const l = Bl(e), u = l !== e && !/* @__PURE__ */ rr(e), d = l[t];
  if (d !== jv[t]) {
    const _ = d.apply(e, a);
    return u ? yr(_) : _;
  }
  let b = n;
  l !== e && (u ? b = function(_, x) {
    return n.call(this, Ar(e, _), x, e);
  } : n.length > 2 && (b = function(_, x) {
    return n.call(this, _, x, e);
  }));
  const g = d.call(l, b, r);
  return u && o ? o(g) : g;
}
function Xh(e, t, n, r) {
  const o = Bl(e), a = o !== e && !/* @__PURE__ */ rr(e);
  let l = n, u = !1;
  o !== e && (a ? (u = r.length === 0, l = function(b, g, _) {
    return u && (u = !1, b = Ar(e, b)), n.call(this, b, Ar(e, g), _, e);
  }) : n.length > 3 && (l = function(b, g, _) {
    return n.call(this, b, g, _, e);
  }));
  const d = o[t](l, ...r);
  return u ? Ar(e, d) : d;
}
function Jc(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  bn(r, "iterate", Ba);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Cf(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : o;
}
function wa(e, t, n = []) {
  oi(), Sf();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return kf(), ai(), r;
}
const Hv = /* @__PURE__ */ bf("__proto__,__v_isRef,__isVue"), Qm = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Tr)
);
function Gv(e) {
  Tr(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return bn(t, "has", e), t.hasOwnProperty(e);
}
class eg {
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
      return r === (o ? a ? Qv : ig : a ? rg : ng).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const l = Je(t);
    if (!o) {
      let d;
      if (l && (d = zv[n]))
        return d;
      if (n === "hasOwnProperty")
        return Gv;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ _n(t) ? t : r
    );
    if ((Tr(n) ? Qm.has(n) : Hv(n)) || (o || bn(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ _n(u)) {
      const d = l && _f(n) ? u : u.value;
      return o && vt(d) ? /* @__PURE__ */ Ru(d) : d;
    }
    return vt(u) ? o ? /* @__PURE__ */ Ru(u) : /* @__PURE__ */ ra(u) : u;
  }
}
class tg extends eg {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const l = Je(t) && _f(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ si(a);
      if (!/* @__PURE__ */ rr(r) && !/* @__PURE__ */ si(r) && (a = /* @__PURE__ */ dt(a), r = /* @__PURE__ */ dt(r)), !l && /* @__PURE__ */ _n(a) && !/* @__PURE__ */ _n(r))
        return b || (a.value = r), !0;
    }
    const u = l ? Number(n) < t.length : ht(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ _n(t) ? t : o
    );
    return t === /* @__PURE__ */ dt(o) && (u ? Ir(r, a) && ei(t, "set", n, r) : ei(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && ei(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Tr(n) || !Qm.has(n)) && bn(t, "has", n), r;
  }
  ownKeys(t) {
    return bn(
      t,
      "iterate",
      Je(t) ? "length" : Ji
    ), Reflect.ownKeys(t);
  }
}
class Kv extends eg {
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
const Bv = /* @__PURE__ */ new tg(), Wv = /* @__PURE__ */ new Kv(), Uv = /* @__PURE__ */ new tg(!0);
const Lu = (e) => e, As = (e) => Reflect.getPrototypeOf(e);
function Yv(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ dt(o), l = jo(a), u = e === "entries" || e === Symbol.iterator && l, d = e === "keys" && l, b = o[e](...r), g = n ? Lu : t ? Jo : yr;
    return !t && bn(
      a,
      "iterate",
      d ? Du : Ji
    ), xn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: _, done: x } = b.next();
          return x ? { value: _, done: x } : {
            value: u ? [g(_[0]), g(_[1])] : g(_),
            done: x
          };
        }
      }
    );
  };
}
function Cs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xv(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ dt(a), u = /* @__PURE__ */ dt(o);
      e || (Ir(o, u) && bn(l, "get", o), bn(l, "get", u));
      const { has: d } = As(l), b = t ? Lu : e ? Jo : yr;
      if (d.call(l, o))
        return b(a.get(o));
      if (d.call(l, u))
        return b(a.get(u));
      a !== l && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && bn(/* @__PURE__ */ dt(o), "iterate", Ji), o.size;
    },
    has(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ dt(a), u = /* @__PURE__ */ dt(o);
      return e || (Ir(o, u) && bn(l, "has", o), bn(l, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const l = this, u = l.__v_raw, d = /* @__PURE__ */ dt(u), b = t ? Lu : e ? Jo : yr;
      return !e && bn(d, "iterate", Ji), u.forEach((g, _) => o.call(a, b(g), b(_), l));
    }
  };
  return xn(
    n,
    e ? {
      add: Cs("add"),
      set: Cs("set"),
      delete: Cs("delete"),
      clear: Cs("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ dt(this), l = As(a), u = /* @__PURE__ */ dt(o), d = !t && !/* @__PURE__ */ rr(o) && !/* @__PURE__ */ si(o) ? u : o;
        return l.has.call(a, d) || Ir(o, d) && l.has.call(a, o) || Ir(u, d) && l.has.call(a, u) || (a.add(d), ei(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ rr(a) && !/* @__PURE__ */ si(a) && (a = /* @__PURE__ */ dt(a));
        const l = /* @__PURE__ */ dt(this), { has: u, get: d } = As(l);
        let b = u.call(l, o);
        b || (o = /* @__PURE__ */ dt(o), b = u.call(l, o));
        const g = d.call(l, o);
        return l.set(o, a), b ? Ir(a, g) && ei(l, "set", o, a) : ei(l, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ dt(this), { has: l, get: u } = As(a);
        let d = l.call(a, o);
        d || (o = /* @__PURE__ */ dt(o), d = l.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && ei(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ dt(this), a = o.size !== 0, l = o.clear();
        return a && ei(
          o,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Yv(o, e, t);
  }), n;
}
function Pf(e, t) {
  const n = Xv(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ht(n, o) && o in r ? n : r,
    o,
    a
  );
}
const qv = {
  get: /* @__PURE__ */ Pf(!1, !1)
}, Jv = {
  get: /* @__PURE__ */ Pf(!1, !0)
}, Zv = {
  get: /* @__PURE__ */ Pf(!0, !1)
};
const ng = /* @__PURE__ */ new WeakMap(), rg = /* @__PURE__ */ new WeakMap(), ig = /* @__PURE__ */ new WeakMap(), Qv = /* @__PURE__ */ new WeakMap();
function e_(e) {
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
function t_(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : e_(Nv(e));
}
// @__NO_SIDE_EFFECTS__
function ra(e) {
  return /* @__PURE__ */ si(e) ? e : Af(
    e,
    !1,
    Bv,
    qv,
    ng
  );
}
// @__NO_SIDE_EFFECTS__
function n_(e) {
  return Af(
    e,
    !1,
    Uv,
    Jv,
    rg
  );
}
// @__NO_SIDE_EFFECTS__
function Ru(e) {
  return Af(
    e,
    !0,
    Wv,
    Zv,
    ig
  );
}
function Af(e, t, n, r, o) {
  if (!vt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = t_(e);
  if (a === 0)
    return e;
  const l = o.get(e);
  if (l)
    return l;
  const u = new Proxy(
    e,
    a === 2 ? r : n
  );
  return o.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function Zi(e) {
  return /* @__PURE__ */ si(e) ? /* @__PURE__ */ Zi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function si(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Cf(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function r_(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && jm(e, "__v_skip", !0), e;
}
const yr = (e) => vt(e) ? /* @__PURE__ */ ra(e) : e, Jo = (e) => vt(e) ? /* @__PURE__ */ Ru(e) : e;
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return i_(e, !1);
}
function i_(e, t) {
  return /* @__PURE__ */ _n(e) ? e : new o_(e, t);
}
class o_ {
  constructor(t, n) {
    this.dep = new Nf(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : yr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ rr(t) || /* @__PURE__ */ si(t);
    t = r ? t : /* @__PURE__ */ dt(t), Ir(t, n) && (this._rawValue = t, this._value = r ? t : yr(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ _n(e) ? e.value : e;
}
const a_ = {
  get: (e, t, n) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ _n(o) && !/* @__PURE__ */ _n(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function og(e) {
  return /* @__PURE__ */ Zi(e) ? e : new Proxy(e, a_);
}
class s_ {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Nf(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ka - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Mt !== this)
      return Um(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function l_(e, t, n = !1) {
  let r, o;
  return et(e) ? r = e : (r = e.get, o = e.set), new s_(r, o, n);
}
const Is = {}, fl = /* @__PURE__ */ new WeakMap();
let Ki;
function c_(e, t = !1, n = Ki) {
  if (n) {
    let r = fl.get(n);
    r || fl.set(n, r = []), r.push(e);
  }
}
function u_(e, t, n = _t) {
  const { immediate: r, deep: o, once: a, scheduler: l, augmentJob: u, call: d } = n, b = (R) => o ? R : /* @__PURE__ */ rr(R) || o === !1 || o === 0 ? ti(R, 1) : ti(R);
  let g, _, x, N, S = !1, v = !1;
  if (/* @__PURE__ */ _n(e) ? (_ = () => e.value, S = /* @__PURE__ */ rr(e)) : /* @__PURE__ */ Zi(e) ? (_ = () => b(e), S = !0) : Je(e) ? (v = !0, S = e.some((R) => /* @__PURE__ */ Zi(R) || /* @__PURE__ */ rr(R)), _ = () => e.map((R) => {
    if (/* @__PURE__ */ _n(R))
      return R.value;
    if (/* @__PURE__ */ Zi(R))
      return b(R);
    if (et(R))
      return d ? d(R, 2) : R();
  })) : et(e) ? t ? _ = d ? () => d(e, 2) : e : _ = () => {
    if (x) {
      oi();
      try {
        x();
      } finally {
        ai();
      }
    }
    const R = Ki;
    Ki = g;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      Ki = R;
    }
  } : _ = Fr, t && o) {
    const R = _, O = o === !0 ? 1 / 0 : o;
    _ = () => ti(R(), O);
  }
  const F = Rv(), $ = () => {
    g.stop(), F && F.active && vf(F.effects, g);
  };
  if (a && t) {
    const R = t;
    t = (...O) => {
      R(...O), $();
    };
  }
  let K = v ? new Array(e.length).fill(Is) : Is;
  const E = (R) => {
    if (!(!(g.flags & 1) || !g.dirty && !R))
      if (t) {
        const O = g.run();
        if (o || S || (v ? O.some((V, H) => Ir(V, K[H])) : Ir(O, K))) {
          x && x();
          const V = Ki;
          Ki = g;
          try {
            const H = [
              O,
              // pass undefined as the old value when it's changed for the first time
              K === Is ? void 0 : v && K[0] === Is ? [] : K,
              N
            ];
            K = O, d ? d(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            Ki = V;
          }
        }
      } else
        g.run();
  };
  return u && u(E), g = new Bm(_), g.scheduler = l ? () => l(E, !1) : E, N = (R) => c_(R, !1, g), x = g.onStop = () => {
    const R = fl.get(g);
    if (R) {
      if (d)
        d(R, 4);
      else
        for (const O of R) O();
      fl.delete(g);
    }
  }, t ? r ? E(!0) : K = g.run() : l ? l(E.bind(null, !0), !0) : g.run(), $.pause = g.pause.bind(g), $.resume = g.resume.bind(g), $.stop = $, $;
}
function ti(e, t = 1 / 0, n) {
  if (t <= 0 || !vt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ _n(e))
    ti(e.value, t, n);
  else if (Je(e))
    for (let r = 0; r < e.length; r++)
      ti(e[r], t, n);
  else if (Rm(e) || jo(e))
    e.forEach((r) => {
      ti(r, t, n);
    });
  else if (zm(e)) {
    for (const r in e)
      ti(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ti(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ns(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Wl(o, t, n);
  }
}
function Dr(e, t, n, r) {
  if (et(e)) {
    const o = ns(e, t, n, r);
    return o && Vm(o) && o.catch((a) => {
      Wl(a, t, n);
    }), o;
  }
  if (Je(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Dr(e[a], t, n, r));
    return o;
  }
}
function Wl(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: l } = t && t.appContext.config || _t;
  if (t) {
    let u = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const g = u.ec;
      if (g) {
        for (let _ = 0; _ < g.length; _++)
          if (g[_](e, d, b) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      oi(), ns(a, null, 10, [
        e,
        d,
        b
      ]), ai();
      return;
    }
  }
  f_(e, n, o, r, l);
}
function f_(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Pn = [];
let Pr = -1;
const Ho = [];
let xi = null, Fo = 0;
const ag = /* @__PURE__ */ Promise.resolve();
let dl = null;
function Ul(e) {
  const t = dl || ag;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function d_(e) {
  let t = Pr + 1, n = Pn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Pn[r], a = Wa(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function If(e) {
  if (!(e.flags & 1)) {
    const t = Wa(e), n = Pn[Pn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wa(n) ? Pn.push(e) : Pn.splice(d_(t), 0, e), e.flags |= 1, sg();
  }
}
function sg() {
  dl || (dl = ag.then(cg));
}
function h_(e) {
  Je(e) ? Ho.push(...e) : xi && e.id === -1 ? xi.splice(Fo + 1, 0, e) : e.flags & 1 || (Ho.push(e), e.flags |= 1), sg();
}
function qh(e, t, n = Pr + 1) {
  for (; n < Pn.length; n++) {
    const r = Pn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Pn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function lg(e) {
  if (Ho.length) {
    const t = [...new Set(Ho)].sort(
      (n, r) => Wa(n) - Wa(r)
    );
    if (Ho.length = 0, xi) {
      xi.push(...t);
      return;
    }
    for (xi = t, Fo = 0; Fo < xi.length; Fo++) {
      const n = xi[Fo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    xi = null, Fo = 0;
  }
}
const Wa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cg(e) {
  try {
    for (Pr = 0; Pr < Pn.length; Pr++) {
      const t = Pn[Pr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ns(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Pr < Pn.length; Pr++) {
      const t = Pn[Pr];
      t && (t.flags &= -2);
    }
    Pr = -1, Pn.length = 0, lg(), dl = null, (Pn.length || Ho.length) && cg();
  }
}
let Wn = null, ug = null;
function hl(e) {
  const t = Wn;
  return Wn = e, ug = e && e.type.__scopeId || null, t;
}
function fg(e, t = Wn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && lp(-1);
    const a = hl(t);
    let l;
    try {
      l = e(...o);
    } finally {
      hl(a), r._d && lp(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ii(e, t) {
  if (Wn === null)
    return e;
  const n = Zl(Wn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, l, u, d = _t] = t[o];
    a && (et(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && ti(l), r.push({
      dir: a,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function Ri(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    a && (u.oldValue = a[l].value);
    let d = u.dir[r];
    d && (oi(), Dr(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), ai());
  }
}
function p_(e, t) {
  if (vn) {
    let n = vn.provides;
    const r = vn.parent && vn.parent.provides;
    r === n && (n = vn.provides = Object.create(r)), n[e] = t;
  }
}
function Ys(e, t, n = !1) {
  const r = dw();
  if (r || Go) {
    let o = Go ? Go._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && et(t) ? t.call(r && r.proxy) : t;
  }
}
const m_ = /* @__PURE__ */ Symbol.for("v-scx"), g_ = () => Ys(m_);
function Qi(e, t, n) {
  return dg(e, t, n);
}
function dg(e, t, n = _t) {
  const { immediate: r, deep: o, flush: a, once: l } = n, u = xn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Ya) {
    if (a === "sync") {
      const N = g_();
      b = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = Fr, N.resume = Fr, N.pause = Fr, N;
    }
  }
  const g = vn;
  u.call = (N, S, v) => Dr(N, g, S, v);
  let _ = !1;
  a === "post" ? u.scheduler = (N) => {
    Ln(N, g && g.suspense);
  } : a !== "sync" && (_ = !0, u.scheduler = (N, S) => {
    S ? N() : If(N);
  }), u.augmentJob = (N) => {
    t && (N.flags |= 4), _ && (N.flags |= 2, g && (N.id = g.uid, N.i = g));
  };
  const x = u_(e, t, u);
  return Ya && (b ? b.push(x) : d && x()), x;
}
function y_(e, t, n) {
  const r = this.proxy, o = Ut(e) ? e.includes(".") ? hg(r, e) : () => r[e] : e.bind(r, r);
  let a;
  et(t) ? a = t : (a = t.handler, n = t);
  const l = is(this), u = dg(o, a.bind(r), n);
  return l(), u;
}
function hg(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const b_ = /* @__PURE__ */ Symbol("_vte"), v_ = (e) => e.__isTeleport, __ = /* @__PURE__ */ Symbol("_leaveCb");
function Ef(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ef(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function pg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Jh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const pl = /* @__PURE__ */ new WeakMap();
function $a(e, t, n, r, o = !1) {
  if (Je(e)) {
    e.forEach(
      (v, F) => $a(
        v,
        t && (Je(t) ? t[F] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (za(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && $a(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Zl(r.component) : r.el, l = o ? null : a, { i: u, r: d } = e, b = t && t.r, g = u.refs === _t ? u.refs = {} : u.refs, _ = u.setupState, x = /* @__PURE__ */ dt(_), N = _ === _t ? Lm : (v) => Jh(g, v) ? !1 : ht(x, v), S = (v, F) => !(F && Jh(g, F));
  if (b != null && b !== d) {
    if (Zh(t), Ut(b))
      g[b] = null, N(b) && (_[b] = null);
    else if (/* @__PURE__ */ _n(b)) {
      const v = t;
      S(b, v.k) && (b.value = null), v.k && (g[v.k] = null);
    }
  }
  if (et(d))
    ns(d, u, 12, [l, g]);
  else {
    const v = Ut(d), F = /* @__PURE__ */ _n(d);
    if (v || F) {
      const $ = () => {
        if (e.f) {
          const K = v ? N(d) ? _[d] : g[d] : S() || !e.k ? d.value : g[e.k];
          if (o)
            Je(K) && vf(K, a);
          else if (Je(K))
            K.includes(a) || K.push(a);
          else if (v)
            g[d] = [a], N(d) && (_[d] = g[d]);
          else {
            const E = [a];
            S(d, e.k) && (d.value = E), e.k && (g[e.k] = E);
          }
        } else v ? (g[d] = l, N(d) && (_[d] = l)) : F && (S(d, e.k) && (d.value = l), e.k && (g[e.k] = l));
      };
      if (l) {
        const K = () => {
          $(), pl.delete(e);
        };
        K.id = -1, pl.set(e, K), Ln(K, n);
      } else
        Zh(e), $();
    }
  }
}
function Zh(e) {
  const t = pl.get(e);
  t && (t.flags |= 8, pl.delete(e));
}
Kl().requestIdleCallback;
Kl().cancelIdleCallback;
const za = (e) => !!e.type.__asyncLoader, mg = (e) => e.type.__isKeepAlive;
function w_(e, t) {
  gg(e, "a", t);
}
function x_(e, t) {
  gg(e, "da", t);
}
function gg(e, t, n = vn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Yl(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      mg(o.parent.vnode) && S_(r, t, n, o), o = o.parent;
  }
}
function S_(e, t, n, r) {
  const o = Yl(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  yg(() => {
    vf(r[t], o);
  }, n);
}
function Yl(e, t, n = vn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...l) => {
      oi();
      const u = is(n), d = Dr(t, n, e, l);
      return u(), ai(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const ci = (e) => (t, n = vn) => {
  (!Ya || e === "sp") && Yl(e, (...r) => t(...r), n);
}, k_ = ci("bm"), Xl = ci("m"), M_ = ci(
  "bu"
), N_ = ci("u"), rs = ci(
  "bum"
), yg = ci("um"), P_ = ci(
  "sp"
), A_ = ci("rtg"), C_ = ci("rtc");
function I_(e, t = vn) {
  Yl("ec", e, t);
}
const E_ = "components", bg = /* @__PURE__ */ Symbol.for("v-ndc");
function O_(e) {
  return Ut(e) ? F_(E_, e, !1) || e : e || bg;
}
function F_(e, t, n = !0, r = !1) {
  const o = Wn || vn;
  if (o) {
    const a = o.type;
    {
      const u = yw(
        a,
        !1
      );
      if (u && (u === t || u === An(t) || u === Gl(An(t))))
        return a;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      Qh(o[e] || a[e], t) || // global registration
      Qh(o.appContext[e], t)
    );
    return !l && r ? a : l;
  }
}
function Qh(e, t) {
  return e && (e[t] || e[An(t)] || e[Gl(An(t))]);
}
function xt(e, t, n, r) {
  let o;
  const a = n, l = Je(e);
  if (l || Ut(e)) {
    const u = l && /* @__PURE__ */ Zi(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ rr(e), b = /* @__PURE__ */ si(e), e = Bl(e)), o = new Array(e.length);
    for (let g = 0, _ = e.length; g < _; g++)
      o[g] = t(
        d ? b ? Jo(yr(e[g])) : yr(e[g]) : e[g],
        g,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (vt(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (u, d) => t(u, d, void 0, a)
      );
    else {
      const u = Object.keys(e);
      o = new Array(u.length);
      for (let d = 0, b = u.length; d < b; d++) {
        const g = u[d];
        o[d] = t(e[g], g, d, a);
      }
    }
  else
    o = [];
  return o;
}
const Vu = (e) => e ? $g(e) ? Zl(e) : Vu(e.parent) : null, ja = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Vu(e.parent),
    $root: (e) => Vu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => _g(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      If(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ul.bind(e.proxy)),
    $watch: (e) => y_.bind(e)
  })
), Zc = (e, t) => e !== _t && !e.__isScriptSetup && ht(e, t), T_ = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: l, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const x = l[t];
      if (x !== void 0)
        switch (x) {
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
        if (Zc(r, t))
          return l[t] = 1, r[t];
        if (o !== _t && ht(o, t))
          return l[t] = 2, o[t];
        if (ht(a, t))
          return l[t] = 3, a[t];
        if (n !== _t && ht(n, t))
          return l[t] = 4, n[t];
        $u && (l[t] = 0);
      }
    }
    const b = ja[t];
    let g, _;
    if (b)
      return t === "$attrs" && bn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (g = u.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== _t && ht(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      _ = d.config.globalProperties, ht(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Zc(o, t) ? (o[t] = n, !0) : r !== _t && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: l }
  }, u) {
    let d;
    return !!(n[u] || e !== _t && u[0] !== "$" && ht(e, u) || Zc(t, u) || ht(a, u) || ht(r, u) || ht(ja, u) || ht(o.config.globalProperties, u) || (d = l.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ep(e) {
  return Je(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let $u = !0;
function D_(e) {
  const t = _g(e), n = e.proxy, r = e.ctx;
  $u = !1, t.beforeCreate && tp(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: l,
    watch: u,
    provide: d,
    inject: b,
    // lifecycle
    created: g,
    beforeMount: _,
    mounted: x,
    beforeUpdate: N,
    updated: S,
    activated: v,
    deactivated: F,
    beforeDestroy: $,
    beforeUnmount: K,
    destroyed: E,
    unmounted: R,
    render: O,
    renderTracked: V,
    renderTriggered: H,
    errorCaptured: Q,
    serverPrefetch: _e,
    // public API
    expose: D,
    inheritAttrs: C,
    // assets
    components: se,
    directives: le,
    filters: fe
  } = t;
  if (b && L_(b, r, null), l)
    for (const j in l) {
      const A = l[j];
      et(A) && (r[j] = A.bind(n));
    }
  if (o) {
    const j = o.call(n, n);
    vt(j) && (e.data = /* @__PURE__ */ ra(j));
  }
  if ($u = !0, a)
    for (const j in a) {
      const A = a[j], ee = et(A) ? A.bind(n, n) : et(A.get) ? A.get.bind(n, n) : Fr, Y = !et(A) && et(A.set) ? A.set.bind(n) : Fr, Ie = ut({
        get: ee,
        set: Y
      });
      Object.defineProperty(r, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (Fe) => Ie.value = Fe
      });
    }
  if (u)
    for (const j in u)
      vg(u[j], r, n, j);
  if (d) {
    const j = et(d) ? d.call(n) : d;
    Reflect.ownKeys(j).forEach((A) => {
      p_(A, j[A]);
    });
  }
  g && tp(g, e, "c");
  function X(j, A) {
    Je(A) ? A.forEach((ee) => j(ee.bind(n))) : A && j(A.bind(n));
  }
  if (X(k_, _), X(Xl, x), X(M_, N), X(N_, S), X(w_, v), X(x_, F), X(I_, Q), X(C_, V), X(A_, H), X(rs, K), X(yg, R), X(P_, _e), Je(D))
    if (D.length) {
      const j = e.exposed || (e.exposed = {});
      D.forEach((A) => {
        Object.defineProperty(j, A, {
          get: () => n[A],
          set: (ee) => n[A] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Fr && (e.render = O), C != null && (e.inheritAttrs = C), se && (e.components = se), le && (e.directives = le), _e && pg(e);
}
function L_(e, t, n = Fr) {
  Je(e) && (e = zu(e));
  for (const r in e) {
    const o = e[r];
    let a;
    vt(o) ? "default" in o ? a = Ys(
      o.from || r,
      o.default,
      !0
    ) : a = Ys(o.from || r) : a = Ys(o), /* @__PURE__ */ _n(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : t[r] = a;
  }
}
function tp(e, t, n) {
  Dr(
    Je(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function vg(e, t, n, r) {
  let o = r.includes(".") ? hg(n, r) : () => n[r];
  if (Ut(e)) {
    const a = t[e];
    et(a) && Qi(o, a);
  } else if (et(e))
    Qi(o, e.bind(n));
  else if (vt(e))
    if (Je(e))
      e.forEach((a) => vg(a, t, n, r));
    else {
      const a = et(e.handler) ? e.handler.bind(n) : t[e.handler];
      et(a) && Qi(o, a, e);
    }
}
function _g(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: l }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => ml(d, b, l, !0)
  ), ml(d, t, l)), vt(t) && a.set(t, d), d;
}
function ml(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && ml(e, a, n, !0), o && o.forEach(
    (l) => ml(e, l, n, !0)
  );
  for (const l in t)
    if (!(r && l === "expose")) {
      const u = R_[l] || n && n[l];
      e[l] = u ? u(e[l], t[l]) : t[l];
    }
  return e;
}
const R_ = {
  data: np,
  props: rp,
  emits: rp,
  // objects
  methods: Ca,
  computed: Ca,
  // lifecycle
  beforeCreate: Nn,
  created: Nn,
  beforeMount: Nn,
  mounted: Nn,
  beforeUpdate: Nn,
  updated: Nn,
  beforeDestroy: Nn,
  beforeUnmount: Nn,
  destroyed: Nn,
  unmounted: Nn,
  activated: Nn,
  deactivated: Nn,
  errorCaptured: Nn,
  serverPrefetch: Nn,
  // assets
  components: Ca,
  directives: Ca,
  // watch
  watch: $_,
  // provide / inject
  provide: np,
  inject: V_
};
function np(e, t) {
  return t ? e ? function() {
    return xn(
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function V_(e, t) {
  return Ca(zu(e), zu(t));
}
function zu(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Nn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ca(e, t) {
  return e ? xn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function rp(e, t) {
  return e ? Je(e) && Je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xn(
    /* @__PURE__ */ Object.create(null),
    ep(e),
    ep(t ?? {})
  ) : t;
}
function $_(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = xn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Nn(e[r], t[r]);
  return n;
}
function wg() {
  return {
    app: null,
    config: {
      isNativeTag: Lm,
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
let z_ = 0;
function j_(e, t) {
  return function(r, o = null) {
    et(r) || (r = xn({}, r)), o != null && !vt(o) && (o = null);
    const a = wg(), l = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: z_++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: vw,
      get config() {
        return a.config;
      },
      set config(g) {
      },
      use(g, ..._) {
        return l.has(g) || (g && et(g.install) ? (l.add(g), g.install(b, ..._)) : et(g) && (l.add(g), g(b, ..._))), b;
      },
      mixin(g) {
        return a.mixins.includes(g) || a.mixins.push(g), b;
      },
      component(g, _) {
        return _ ? (a.components[g] = _, b) : a.components[g];
      },
      directive(g, _) {
        return _ ? (a.directives[g] = _, b) : a.directives[g];
      },
      mount(g, _, x) {
        if (!d) {
          const N = b._ceVNode || De(r, o);
          return N.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(N, g, x), d = !0, b._container = g, g.__vue_app__ = b, Zl(N.component);
        }
      },
      onUnmount(g) {
        u.push(g);
      },
      unmount() {
        d && (Dr(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(g, _) {
        return a.provides[g] = _, b;
      },
      runWithContext(g) {
        const _ = Go;
        Go = b;
        try {
          return g();
        } finally {
          Go = _;
        }
      }
    };
    return b;
  };
}
let Go = null;
const H_ = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${An(t)}Modifiers`] || e[`${lo(t)}Modifiers`];
function G_(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _t;
  let o = n;
  const a = t.startsWith("update:"), l = a && H_(r, t.slice(7));
  l && (l.trim && (o = n.map((g) => Ut(g) ? g.trim() : g)), l.number && (o = n.map(wf)));
  let u, d = r[u = Uc(t)] || // also try camelCase event handler (#2249)
  r[u = Uc(An(t))];
  !d && a && (d = r[u = Uc(lo(t))]), d && Dr(
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
    e.emitted[u] = !0, Dr(
      b,
      e,
      6,
      o
    );
  }
}
const K_ = /* @__PURE__ */ new WeakMap();
function xg(e, t, n = !1) {
  const r = n ? K_ : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let l = {}, u = !1;
  if (!et(e)) {
    const d = (b) => {
      const g = xg(b, t, !0);
      g && (u = !0, xn(l, g));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (vt(e) && r.set(e, null), null) : (Je(a) ? a.forEach((d) => l[d] = null) : xn(l, a), vt(e) && r.set(e, l), l);
}
function ql(e, t) {
  return !e || !zl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, lo(t)) || ht(e, t));
}
function ip(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [a],
    slots: l,
    attrs: u,
    emit: d,
    render: b,
    renderCache: g,
    props: _,
    data: x,
    setupState: N,
    ctx: S,
    inheritAttrs: v
  } = e, F = hl(e);
  let $, K;
  try {
    if (n.shapeFlag & 4) {
      const R = o || r, O = R;
      $ = Cr(
        b.call(
          O,
          R,
          g,
          _,
          N,
          x,
          S
        )
      ), K = u;
    } else {
      const R = t;
      $ = Cr(
        R.length > 1 ? R(
          _,
          { attrs: u, slots: l, emit: d }
        ) : R(
          _,
          null
        )
      ), K = t.props ? u : B_(u);
    }
  } catch (R) {
    Ha.length = 0, Wl(R, e, 1), $ = De(Ni);
  }
  let E = $;
  if (K && v !== !1) {
    const R = Object.keys(K), { shapeFlag: O } = E;
    R.length && O & 7 && (a && R.some(jl) && (K = W_(
      K,
      a
    )), E = Zo(E, K, !1, !0));
  }
  return n.dirs && (E = Zo(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && Ef(E, n.transition), $ = E, hl(F), $;
}
const B_ = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, W_ = (e, t) => {
  const n = {};
  for (const r in e)
    (!jl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function U_(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: l, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? op(r, l, b) : !!l;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let _ = 0; _ < g.length; _++) {
        const x = g[_];
        if (Sg(l, r, x) && !ql(b, x))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === l ? !1 : r ? l ? op(r, l, b) : !0 : !!l;
  return !1;
}
function op(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Sg(t, e, a) && !ql(n, a))
      return !0;
  }
  return !1;
}
function Sg(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && vt(r) && vt(o) ? !xf(r, o) : r !== o;
}
function Y_({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const kg = {}, Mg = () => Object.create(kg), Ng = (e) => Object.getPrototypeOf(e) === kg;
function X_(e, t, n, r = !1) {
  const o = {}, a = Mg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Pg(e, t, o, a);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ n_(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function q_(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: l }
  } = e, u = /* @__PURE__ */ dt(o), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const g = e.vnode.dynamicProps;
      for (let _ = 0; _ < g.length; _++) {
        let x = g[_];
        if (ql(e.emitsOptions, x))
          continue;
        const N = t[x];
        if (d)
          if (ht(a, x))
            N !== a[x] && (a[x] = N, b = !0);
          else {
            const S = An(x);
            o[S] = ju(
              d,
              u,
              S,
              N,
              e,
              !1
            );
          }
        else
          N !== a[x] && (a[x] = N, b = !0);
      }
    }
  } else {
    Pg(e, t, o, a) && (b = !0);
    let g;
    for (const _ in u)
      (!t || // for camelCase
      !ht(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = lo(_)) === _ || !ht(t, g))) && (d ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[g] !== void 0) && (o[_] = ju(
        d,
        u,
        _,
        void 0,
        e,
        !0
      )) : delete o[_]);
    if (a !== u)
      for (const _ in a)
        (!t || !ht(t, _)) && (delete a[_], b = !0);
  }
  b && ei(e.attrs, "set", "");
}
function Pg(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let l = !1, u;
  if (t)
    for (let d in t) {
      if (La(d))
        continue;
      const b = t[d];
      let g;
      o && ht(o, g = An(d)) ? !a || !a.includes(g) ? n[g] = b : (u || (u = {}))[g] = b : ql(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, l = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ dt(n), b = u || _t;
    for (let g = 0; g < a.length; g++) {
      const _ = a[g];
      n[_] = ju(
        o,
        d,
        _,
        b[_],
        e,
        !ht(b, _)
      );
    }
  }
  return l;
}
function ju(e, t, n, r, o, a) {
  const l = e[n];
  if (l != null) {
    const u = ht(l, "default");
    if (u && r === void 0) {
      const d = l.default;
      if (l.type !== Function && !l.skipFactory && et(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const g = is(o);
          r = b[n] = d.call(
            null,
            t
          ), g();
        }
      } else
        r = d;
      o.ce && o.ce._setProp(n, r);
    }
    l[
      0
      /* shouldCast */
    ] && (a && !u ? r = !1 : l[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === lo(n)) && (r = !0));
  }
  return r;
}
const J_ = /* @__PURE__ */ new WeakMap();
function Ag(e, t, n = !1) {
  const r = n ? J_ : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, l = {}, u = [];
  let d = !1;
  if (!et(e)) {
    const g = (_) => {
      d = !0;
      const [x, N] = Ag(_, t, !0);
      xn(l, x), N && u.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!a && !d)
    return vt(e) && r.set(e, zo), zo;
  if (Je(a))
    for (let g = 0; g < a.length; g++) {
      const _ = An(a[g]);
      ap(_) && (l[_] = _t);
    }
  else if (a)
    for (const g in a) {
      const _ = An(g);
      if (ap(_)) {
        const x = a[g], N = l[_] = Je(x) || et(x) ? { type: x } : xn({}, x), S = N.type;
        let v = !1, F = !0;
        if (Je(S))
          for (let $ = 0; $ < S.length; ++$) {
            const K = S[$], E = et(K) && K.name;
            if (E === "Boolean") {
              v = !0;
              break;
            } else E === "String" && (F = !1);
          }
        else
          v = et(S) && S.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = v, N[
          1
          /* shouldCastTrue */
        ] = F, (v || ht(N, "default")) && u.push(_);
      }
    }
  const b = [l, u];
  return vt(e) && r.set(e, b), b;
}
function ap(e) {
  return e[0] !== "$" && !La(e);
}
const Of = (e) => e === "_" || e === "_ctx" || e === "$stable", Ff = (e) => Je(e) ? e.map(Cr) : [Cr(e)], Z_ = (e, t, n) => {
  if (t._n)
    return t;
  const r = fg((...o) => Ff(t(...o)), n);
  return r._c = !1, r;
}, Cg = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Of(o)) continue;
    const a = e[o];
    if (et(a))
      t[o] = Z_(o, a, r);
    else if (a != null) {
      const l = Ff(a);
      t[o] = () => l;
    }
  }
}, Ig = (e, t) => {
  const n = Ff(t);
  e.slots.default = () => n;
}, Eg = (e, t, n) => {
  for (const r in t)
    (n || !Of(r)) && (e[r] = t[r]);
}, Q_ = (e, t, n) => {
  const r = e.slots = Mg();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Eg(r, t, n), n && jm(r, "_", o, !0)) : Cg(t, r);
  } else t && Ig(e, t);
}, ew = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, l = _t;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : Eg(o, t, n) : (a = !t.$stable, Cg(t, o)), l = t;
  } else t && (Ig(e, t), l = { default: 1 });
  if (a)
    for (const u in o)
      !Of(u) && l[u] == null && delete o[u];
}, Ln = ow;
function tw(e) {
  return nw(e);
}
function nw(e, t) {
  const n = Kl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: l,
    createText: u,
    createComment: d,
    setText: b,
    setElementText: g,
    parentNode: _,
    nextSibling: x,
    setScopeId: N = Fr,
    insertStaticContent: S
  } = e, v = (L, W, q, be = null, me = null, ge = null, Me = void 0, Ne = null, xe = !!W.dynamicChildren) => {
    if (L === W)
      return;
    L && !xa(L, W) && (be = Yn(L), Fe(L, me, ge, !0), L = null), W.patchFlag === -2 && (xe = !1, W.dynamicChildren = null);
    const { type: de, ref: Ve, shapeFlag: Ee } = W;
    switch (de) {
      case Jl:
        F(L, W, q, be);
        break;
      case Ni:
        $(L, W, q, be);
        break;
      case eu:
        L == null && K(W, q, be, Me);
        break;
      case Ye:
        se(
          L,
          W,
          q,
          be,
          me,
          ge,
          Me,
          Ne,
          xe
        );
        break;
      default:
        Ee & 1 ? O(
          L,
          W,
          q,
          be,
          me,
          ge,
          Me,
          Ne,
          xe
        ) : Ee & 6 ? le(
          L,
          W,
          q,
          be,
          me,
          ge,
          Me,
          Ne,
          xe
        ) : (Ee & 64 || Ee & 128) && de.process(
          L,
          W,
          q,
          be,
          me,
          ge,
          Me,
          Ne,
          xe,
          cn
        );
    }
    Ve != null && me ? $a(Ve, L && L.ref, ge, W || L, !W) : Ve == null && L && L.ref != null && $a(L.ref, null, ge, L, !0);
  }, F = (L, W, q, be) => {
    if (L == null)
      r(
        W.el = u(W.children),
        q,
        be
      );
    else {
      const me = W.el = L.el;
      W.children !== L.children && b(me, W.children);
    }
  }, $ = (L, W, q, be) => {
    L == null ? r(
      W.el = d(W.children || ""),
      q,
      be
    ) : W.el = L.el;
  }, K = (L, W, q, be) => {
    [L.el, L.anchor] = S(
      L.children,
      W,
      q,
      be,
      L.el,
      L.anchor
    );
  }, E = ({ el: L, anchor: W }, q, be) => {
    let me;
    for (; L && L !== W; )
      me = x(L), r(L, q, be), L = me;
    r(W, q, be);
  }, R = ({ el: L, anchor: W }) => {
    let q;
    for (; L && L !== W; )
      q = x(L), o(L), L = q;
    o(W);
  }, O = (L, W, q, be, me, ge, Me, Ne, xe) => {
    if (W.type === "svg" ? Me = "svg" : W.type === "math" && (Me = "mathml"), L == null)
      V(
        W,
        q,
        be,
        me,
        ge,
        Me,
        Ne,
        xe
      );
    else {
      const de = L.el && L.el._isVueCE ? L.el : null;
      try {
        de && de._beginPatch(), _e(
          L,
          W,
          me,
          ge,
          Me,
          Ne,
          xe
        );
      } finally {
        de && de._endPatch();
      }
    }
  }, V = (L, W, q, be, me, ge, Me, Ne) => {
    let xe, de;
    const { props: Ve, shapeFlag: Ee, transition: $e, dirs: Ke } = L;
    if (xe = L.el = l(
      L.type,
      ge,
      Ve && Ve.is,
      Ve
    ), Ee & 8 ? g(xe, L.children) : Ee & 16 && Q(
      L.children,
      xe,
      null,
      be,
      me,
      Qc(L, ge),
      Me,
      Ne
    ), Ke && Ri(L, null, be, "created"), H(xe, L, L.scopeId, Me, be), Ve) {
      for (const Le in Ve)
        Le !== "value" && !La(Le) && a(xe, Le, null, Ve[Le], ge, be);
      "value" in Ve && a(xe, "value", null, Ve.value, ge), (de = Ve.onVnodeBeforeMount) && Sr(de, be, L);
    }
    Ke && Ri(L, null, be, "beforeMount");
    const p = rw(me, $e);
    p && $e.beforeEnter(xe), r(xe, W, q), ((de = Ve && Ve.onVnodeMounted) || p || Ke) && Ln(() => {
      try {
        de && Sr(de, be, L), p && $e.enter(xe), Ke && Ri(L, null, be, "mounted");
      } finally {
      }
    }, me);
  }, H = (L, W, q, be, me) => {
    if (q && N(L, q), be)
      for (let ge = 0; ge < be.length; ge++)
        N(L, be[ge]);
    if (me) {
      let ge = me.subTree;
      if (W === ge || Dg(ge.type) && (ge.ssContent === W || ge.ssFallback === W)) {
        const Me = me.vnode;
        H(
          L,
          Me,
          Me.scopeId,
          Me.slotScopeIds,
          me.parent
        );
      }
    }
  }, Q = (L, W, q, be, me, ge, Me, Ne, xe = 0) => {
    for (let de = xe; de < L.length; de++) {
      const Ve = L[de] = Ne ? Qr(L[de]) : Cr(L[de]);
      v(
        null,
        Ve,
        W,
        q,
        be,
        me,
        ge,
        Me,
        Ne
      );
    }
  }, _e = (L, W, q, be, me, ge, Me) => {
    const Ne = W.el = L.el;
    let { patchFlag: xe, dynamicChildren: de, dirs: Ve } = W;
    xe |= L.patchFlag & 16;
    const Ee = L.props || _t, $e = W.props || _t;
    let Ke;
    if (q && Vi(q, !1), (Ke = $e.onVnodeBeforeUpdate) && Sr(Ke, q, W, L), Ve && Ri(W, L, q, "beforeUpdate"), q && Vi(q, !0), (Ee.innerHTML && $e.innerHTML == null || Ee.textContent && $e.textContent == null) && g(Ne, ""), de ? D(
      L.dynamicChildren,
      de,
      Ne,
      q,
      be,
      Qc(W, me),
      ge
    ) : Me || A(
      L,
      W,
      Ne,
      null,
      q,
      be,
      Qc(W, me),
      ge,
      !1
    ), xe > 0) {
      if (xe & 16)
        C(Ne, Ee, $e, q, me);
      else if (xe & 2 && Ee.class !== $e.class && a(Ne, "class", null, $e.class, me), xe & 4 && a(Ne, "style", Ee.style, $e.style, me), xe & 8) {
        const p = W.dynamicProps;
        for (let Le = 0; Le < p.length; Le++) {
          const st = p[Le], Be = Ee[st], Tt = $e[st];
          (Tt !== Be || st === "value") && a(Ne, st, Be, Tt, me, q);
        }
      }
      xe & 1 && L.children !== W.children && g(Ne, W.children);
    } else !Me && de == null && C(Ne, Ee, $e, q, me);
    ((Ke = $e.onVnodeUpdated) || Ve) && Ln(() => {
      Ke && Sr(Ke, q, W, L), Ve && Ri(W, L, q, "updated");
    }, be);
  }, D = (L, W, q, be, me, ge, Me) => {
    for (let Ne = 0; Ne < W.length; Ne++) {
      const xe = L[Ne], de = W[Ne], Ve = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        xe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (xe.type === Ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xa(xe, de) || // - In the case of a component, it could contain anything.
        xe.shapeFlag & 198) ? _(xe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      v(
        xe,
        de,
        Ve,
        null,
        be,
        me,
        ge,
        Me,
        !0
      );
    }
  }, C = (L, W, q, be, me) => {
    if (W !== q) {
      if (W !== _t)
        for (const ge in W)
          !La(ge) && !(ge in q) && a(
            L,
            ge,
            W[ge],
            null,
            me,
            be
          );
      for (const ge in q) {
        if (La(ge)) continue;
        const Me = q[ge], Ne = W[ge];
        Me !== Ne && ge !== "value" && a(L, ge, Ne, Me, me, be);
      }
      "value" in q && a(L, "value", W.value, q.value, me);
    }
  }, se = (L, W, q, be, me, ge, Me, Ne, xe) => {
    const de = W.el = L ? L.el : u(""), Ve = W.anchor = L ? L.anchor : u("");
    let { patchFlag: Ee, dynamicChildren: $e, slotScopeIds: Ke } = W;
    Ke && (Ne = Ne ? Ne.concat(Ke) : Ke), L == null ? (r(de, q, be), r(Ve, q, be), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      W.children || [],
      q,
      Ve,
      me,
      ge,
      Me,
      Ne,
      xe
    )) : Ee > 0 && Ee & 64 && $e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren && L.dynamicChildren.length === $e.length ? (D(
      L.dynamicChildren,
      $e,
      q,
      me,
      ge,
      Me,
      Ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (W.key != null || me && W === me.subTree) && Og(
      L,
      W,
      !0
      /* shallow */
    )) : A(
      L,
      W,
      q,
      Ve,
      me,
      ge,
      Me,
      Ne,
      xe
    );
  }, le = (L, W, q, be, me, ge, Me, Ne, xe) => {
    W.slotScopeIds = Ne, L == null ? W.shapeFlag & 512 ? me.ctx.activate(
      W,
      q,
      be,
      Me,
      xe
    ) : fe(
      W,
      q,
      be,
      me,
      ge,
      Me,
      xe
    ) : U(L, W, xe);
  }, fe = (L, W, q, be, me, ge, Me) => {
    const Ne = L.component = fw(
      L,
      be,
      me
    );
    if (mg(L) && (Ne.ctx.renderer = cn), hw(Ne, !1, Me), Ne.asyncDep) {
      if (me && me.registerDep(Ne, X, Me), !L.el) {
        const xe = Ne.subTree = De(Ni);
        $(null, xe, W, q), L.placeholder = xe.el;
      }
    } else
      X(
        Ne,
        L,
        W,
        q,
        me,
        ge,
        Me
      );
  }, U = (L, W, q) => {
    const be = W.component = L.component;
    if (U_(L, W, q))
      if (be.asyncDep && !be.asyncResolved) {
        j(be, W, q);
        return;
      } else
        be.next = W, be.update();
    else
      W.el = L.el, be.vnode = W;
  }, X = (L, W, q, be, me, ge, Me) => {
    const Ne = () => {
      if (L.isMounted) {
        let { next: Ee, bu: $e, u: Ke, parent: p, vnode: Le } = L;
        {
          const rn = Fg(L);
          if (rn) {
            Ee && (Ee.el = Le.el, j(L, Ee, Me)), rn.asyncDep.then(() => {
              Ln(() => {
                L.isUnmounted || de();
              }, me);
            });
            return;
          }
        }
        let st = Ee, Be;
        Vi(L, !1), Ee ? (Ee.el = Le.el, j(L, Ee, Me)) : Ee = Le, $e && Us($e), (Be = Ee.props && Ee.props.onVnodeBeforeUpdate) && Sr(Be, p, Ee, Le), Vi(L, !0);
        const Tt = ip(L), un = L.subTree;
        L.subTree = Tt, v(
          un,
          Tt,
          // parent may have changed if it's in a teleport
          _(un.el),
          // anchor may have changed if it's in a fragment
          Yn(un),
          L,
          me,
          ge
        ), Ee.el = Tt.el, st === null && Y_(L, Tt.el), Ke && Ln(Ke, me), (Be = Ee.props && Ee.props.onVnodeUpdated) && Ln(
          () => Sr(Be, p, Ee, Le),
          me
        );
      } else {
        let Ee;
        const { el: $e, props: Ke } = W, { bm: p, m: Le, parent: st, root: Be, type: Tt } = L, un = za(W);
        Vi(L, !1), p && Us(p), !un && (Ee = Ke && Ke.onVnodeBeforeMount) && Sr(Ee, st, W), Vi(L, !0);
        {
          Be.ce && Be.ce._hasShadowRoot() && Be.ce._injectChildStyle(
            Tt,
            L.parent ? L.parent.type : void 0
          );
          const rn = L.subTree = ip(L);
          v(
            null,
            rn,
            q,
            be,
            L,
            me,
            ge
          ), W.el = rn.el;
        }
        if (Le && Ln(Le, me), !un && (Ee = Ke && Ke.onVnodeMounted)) {
          const rn = W;
          Ln(
            () => Sr(Ee, st, rn),
            me
          );
        }
        (W.shapeFlag & 256 || st && za(st.vnode) && st.vnode.shapeFlag & 256) && L.a && Ln(L.a, me), L.isMounted = !0, W = q = be = null;
      }
    };
    L.scope.on();
    const xe = L.effect = new Bm(Ne);
    L.scope.off();
    const de = L.update = xe.run.bind(xe), Ve = L.job = xe.runIfDirty.bind(xe);
    Ve.i = L, Ve.id = L.uid, xe.scheduler = () => If(Ve), Vi(L, !0), de();
  }, j = (L, W, q) => {
    W.component = L;
    const be = L.vnode.props;
    L.vnode = W, L.next = null, q_(L, W.props, be, q), ew(L, W.children, q), oi(), qh(L), ai();
  }, A = (L, W, q, be, me, ge, Me, Ne, xe = !1) => {
    const de = L && L.children, Ve = L ? L.shapeFlag : 0, Ee = W.children, { patchFlag: $e, shapeFlag: Ke } = W;
    if ($e > 0) {
      if ($e & 128) {
        Y(
          de,
          Ee,
          q,
          be,
          me,
          ge,
          Me,
          Ne,
          xe
        );
        return;
      } else if ($e & 256) {
        ee(
          de,
          Ee,
          q,
          be,
          me,
          ge,
          Me,
          Ne,
          xe
        );
        return;
      }
    }
    Ke & 8 ? (Ve & 16 && it(de, me, ge), Ee !== de && g(q, Ee)) : Ve & 16 ? Ke & 16 ? Y(
      de,
      Ee,
      q,
      be,
      me,
      ge,
      Me,
      Ne,
      xe
    ) : it(de, me, ge, !0) : (Ve & 8 && g(q, ""), Ke & 16 && Q(
      Ee,
      q,
      be,
      me,
      ge,
      Me,
      Ne,
      xe
    ));
  }, ee = (L, W, q, be, me, ge, Me, Ne, xe) => {
    L = L || zo, W = W || zo;
    const de = L.length, Ve = W.length, Ee = Math.min(de, Ve);
    let $e;
    for ($e = 0; $e < Ee; $e++) {
      const Ke = W[$e] = xe ? Qr(W[$e]) : Cr(W[$e]);
      v(
        L[$e],
        Ke,
        q,
        null,
        me,
        ge,
        Me,
        Ne,
        xe
      );
    }
    de > Ve ? it(
      L,
      me,
      ge,
      !0,
      !1,
      Ee
    ) : Q(
      W,
      q,
      be,
      me,
      ge,
      Me,
      Ne,
      xe,
      Ee
    );
  }, Y = (L, W, q, be, me, ge, Me, Ne, xe) => {
    let de = 0;
    const Ve = W.length;
    let Ee = L.length - 1, $e = Ve - 1;
    for (; de <= Ee && de <= $e; ) {
      const Ke = L[de], p = W[de] = xe ? Qr(W[de]) : Cr(W[de]);
      if (xa(Ke, p))
        v(
          Ke,
          p,
          q,
          null,
          me,
          ge,
          Me,
          Ne,
          xe
        );
      else
        break;
      de++;
    }
    for (; de <= Ee && de <= $e; ) {
      const Ke = L[Ee], p = W[$e] = xe ? Qr(W[$e]) : Cr(W[$e]);
      if (xa(Ke, p))
        v(
          Ke,
          p,
          q,
          null,
          me,
          ge,
          Me,
          Ne,
          xe
        );
      else
        break;
      Ee--, $e--;
    }
    if (de > Ee) {
      if (de <= $e) {
        const Ke = $e + 1, p = Ke < Ve ? W[Ke].el : be;
        for (; de <= $e; )
          v(
            null,
            W[de] = xe ? Qr(W[de]) : Cr(W[de]),
            q,
            p,
            me,
            ge,
            Me,
            Ne,
            xe
          ), de++;
      }
    } else if (de > $e)
      for (; de <= Ee; )
        Fe(L[de], me, ge, !0), de++;
    else {
      const Ke = de, p = de, Le = /* @__PURE__ */ new Map();
      for (de = p; de <= $e; de++) {
        const Ce = W[de] = xe ? Qr(W[de]) : Cr(W[de]);
        Ce.key != null && Le.set(Ce.key, de);
      }
      let st, Be = 0;
      const Tt = $e - p + 1;
      let un = !1, rn = 0;
      const Vt = new Array(Tt);
      for (de = 0; de < Tt; de++) Vt[de] = 0;
      for (de = Ke; de <= Ee; de++) {
        const Ce = L[de];
        if (Be >= Tt) {
          Fe(Ce, me, ge, !0);
          continue;
        }
        let $t;
        if (Ce.key != null)
          $t = Le.get(Ce.key);
        else
          for (st = p; st <= $e; st++)
            if (Vt[st - p] === 0 && xa(Ce, W[st])) {
              $t = st;
              break;
            }
        $t === void 0 ? Fe(Ce, me, ge, !0) : (Vt[$t - p] = de + 1, $t >= rn ? rn = $t : un = !0, v(
          Ce,
          W[$t],
          q,
          null,
          me,
          ge,
          Me,
          Ne,
          xe
        ), Be++);
      }
      const Xn = un ? iw(Vt) : zo;
      for (st = Xn.length - 1, de = Tt - 1; de >= 0; de--) {
        const Ce = p + de, $t = W[Ce], zr = W[Ce + 1], br = Ce + 1 < Ve ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          zr.el || Tg(zr)
        ) : be;
        Vt[de] === 0 ? v(
          null,
          $t,
          q,
          br,
          me,
          ge,
          Me,
          Ne,
          xe
        ) : un && (st < 0 || de !== Xn[st] ? Ie($t, q, br, 2) : st--);
      }
    }
  }, Ie = (L, W, q, be, me = null) => {
    const { el: ge, type: Me, transition: Ne, children: xe, shapeFlag: de } = L;
    if (de & 6) {
      Ie(L.component.subTree, W, q, be);
      return;
    }
    if (de & 128) {
      L.suspense.move(W, q, be);
      return;
    }
    if (de & 64) {
      Me.move(L, W, q, cn);
      return;
    }
    if (Me === Ye) {
      r(ge, W, q);
      for (let Ee = 0; Ee < xe.length; Ee++)
        Ie(xe[Ee], W, q, be);
      r(L.anchor, W, q);
      return;
    }
    if (Me === eu) {
      E(L, W, q);
      return;
    }
    if (be !== 2 && de & 1 && Ne)
      if (be === 0)
        Ne.beforeEnter(ge), r(ge, W, q), Ln(() => Ne.enter(ge), me);
      else {
        const { leave: Ee, delayLeave: $e, afterLeave: Ke } = Ne, p = () => {
          L.ctx.isUnmounted ? o(ge) : r(ge, W, q);
        }, Le = () => {
          ge._isLeaving && ge[__](
            !0
            /* cancelled */
          ), Ee(ge, () => {
            p(), Ke && Ke();
          });
        };
        $e ? $e(ge, p, Le) : Le();
      }
    else
      r(ge, W, q);
  }, Fe = (L, W, q, be = !1, me = !1) => {
    const {
      type: ge,
      props: Me,
      ref: Ne,
      children: xe,
      dynamicChildren: de,
      shapeFlag: Ve,
      patchFlag: Ee,
      dirs: $e,
      cacheIndex: Ke,
      memo: p
    } = L;
    if (Ee === -2 && (me = !1), Ne != null && (oi(), $a(Ne, null, q, L, !0), ai()), Ke != null && (W.renderCache[Ke] = void 0), Ve & 256) {
      W.ctx.deactivate(L);
      return;
    }
    const Le = Ve & 1 && $e, st = !za(L);
    let Be;
    if (st && (Be = Me && Me.onVnodeBeforeUnmount) && Sr(Be, W, L), Ve & 6)
      ln(L.component, q, be);
    else {
      if (Ve & 128) {
        L.suspense.unmount(q, be);
        return;
      }
      Le && Ri(L, null, W, "beforeUnmount"), Ve & 64 ? L.type.remove(
        L,
        W,
        q,
        cn,
        be
      ) : de && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !de.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ge !== Ye || Ee > 0 && Ee & 64) ? it(
        de,
        W,
        q,
        !1,
        !0
      ) : (ge === Ye && Ee & 384 || !me && Ve & 16) && it(xe, W, q), be && St(L);
    }
    const Tt = p != null && Ke == null;
    (st && (Be = Me && Me.onVnodeUnmounted) || Le || Tt) && Ln(() => {
      Be && Sr(Be, W, L), Le && Ri(L, null, W, "unmounted"), Tt && (L.el = null);
    }, q);
  }, St = (L) => {
    const { type: W, el: q, anchor: be, transition: me } = L;
    if (W === Ye) {
      pt(q, be);
      return;
    }
    if (W === eu) {
      R(L);
      return;
    }
    const ge = () => {
      o(q), me && !me.persisted && me.afterLeave && me.afterLeave();
    };
    if (L.shapeFlag & 1 && me && !me.persisted) {
      const { leave: Me, delayLeave: Ne } = me, xe = () => Me(q, ge);
      Ne ? Ne(L.el, ge, xe) : xe();
    } else
      ge();
  }, pt = (L, W) => {
    let q;
    for (; L !== W; )
      q = x(L), o(L), L = q;
    o(W);
  }, ln = (L, W, q) => {
    const { bum: be, scope: me, job: ge, subTree: Me, um: Ne, m: xe, a: de } = L;
    sp(xe), sp(de), be && Us(be), me.stop(), ge && (ge.flags |= 8, Fe(Me, L, W, q)), Ne && Ln(Ne, W), Ln(() => {
      L.isUnmounted = !0;
    }, W);
  }, it = (L, W, q, be = !1, me = !1, ge = 0) => {
    for (let Me = ge; Me < L.length; Me++)
      Fe(L[Me], W, q, be, me);
  }, Yn = (L) => {
    if (L.shapeFlag & 6)
      return Yn(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const W = x(L.anchor || L.el), q = W && W[b_];
    return q ? x(q) : W;
  };
  let It = !1;
  const Qt = (L, W, q) => {
    let be;
    L == null ? W._vnode && (Fe(W._vnode, null, null, !0), be = W._vnode.component) : v(
      W._vnode || null,
      L,
      W,
      null,
      null,
      null,
      q
    ), W._vnode = L, It || (It = !0, qh(be), lg(), It = !1);
  }, cn = {
    p: v,
    um: Fe,
    m: Ie,
    r: St,
    mt: fe,
    mc: Q,
    pc: A,
    pbc: D,
    n: Yn,
    o: e
  };
  return {
    render: Qt,
    hydrate: void 0,
    createApp: j_(Qt)
  };
}
function Qc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Vi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Og(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Je(r) && Je(o))
    for (let a = 0; a < r.length; a++) {
      const l = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = Qr(o[a]), u.el = l.el), !n && u.patchFlag !== -2 && Og(l, u)), u.type === Jl && (u.patchFlag === -1 && (u = o[a] = Qr(u)), u.el = l.el), u.type === Ni && !u.el && (u.el = l.el);
    }
}
function iw(e) {
  const t = e.slice(), n = [0];
  let r, o, a, l, u;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const b = e[r];
    if (b !== 0) {
      if (o = n[n.length - 1], e[o] < b) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, l = n.length - 1; a < l; )
        u = a + l >> 1, e[n[u]] < b ? a = u + 1 : l = u;
      b < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, l = n[a - 1]; a-- > 0; )
    n[a] = l, l = t[l];
  return n;
}
function Fg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fg(t);
}
function sp(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Tg(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Tg(t.subTree) : null;
}
const Dg = (e) => e.__isSuspense;
function ow(e, t) {
  t && t.pendingBranch ? Je(e) ? t.effects.push(...e) : t.effects.push(e) : h_(e);
}
const Ye = /* @__PURE__ */ Symbol.for("v-fgt"), Jl = /* @__PURE__ */ Symbol.for("v-txt"), Ni = /* @__PURE__ */ Symbol.for("v-cmt"), eu = /* @__PURE__ */ Symbol.for("v-stc"), Ha = [];
let Un = null;
function oe(e = !1) {
  Ha.push(Un = e ? null : []);
}
function aw() {
  Ha.pop(), Un = Ha[Ha.length - 1] || null;
}
let Ua = 1;
function lp(e, t = !1) {
  Ua += e, e < 0 && Un && t && (Un.hasOnce = !0);
}
function Lg(e) {
  return e.dynamicChildren = Ua > 0 ? Un || zo : null, aw(), Ua > 0 && Un && Un.push(e), e;
}
function ce(e, t, n, r, o, a) {
  return Lg(
    B(
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
function $r(e, t, n, r, o) {
  return Lg(
    De(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Rg(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vg = ({ key: e }) => e ?? null, Xs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ut(e) || /* @__PURE__ */ _n(e) || et(e) ? { i: Wn, r: e, k: t, f: !!n } : e : null);
function B(e, t = null, n = null, r = 0, o = null, a = e === Ye ? 0 : 1, l = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vg(t),
    ref: t && Xs(t),
    scopeId: ug,
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
    ctx: Wn
  };
  return u ? (Tf(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= Ut(n) ? 8 : 16), Ua > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Un && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Un.push(d), d;
}
const De = sw;
function sw(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === bg) && (e = Ni), Rg(e)) {
    const u = Zo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tf(u, n), Ua > 0 && !a && Un && (u.shapeFlag & 6 ? Un[Un.indexOf(e)] = u : Un.push(u)), u.patchFlag = -2, u;
  }
  if (bw(e) && (e = e.__vccOpts), t) {
    t = lw(t);
    let { class: u, style: d } = t;
    u && !Ut(u) && (t.class = at(u)), vt(d) && (/* @__PURE__ */ Cf(d) && !Je(d) && (d = xn({}, d)), t.style = wt(d));
  }
  const l = Ut(e) ? 1 : Dg(e) ? 128 : v_(e) ? 64 : vt(e) ? 4 : et(e) ? 2 : 0;
  return B(
    e,
    t,
    n,
    r,
    o,
    l,
    a,
    !0
  );
}
function lw(e) {
  return e ? /* @__PURE__ */ Cf(e) || Ng(e) ? xn({}, e) : e : null;
}
function Zo(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: l, children: u, transition: d } = e, b = t ? Si(o || {}, t) : o, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Vg(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Je(a) ? a.concat(Xs(t)) : [a, Xs(t)] : Xs(t)
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
    patchFlag: t && e.type !== Ye ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && Zo(e.ssContent),
    ssFallback: e.ssFallback && Zo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && Ef(
    g,
    d.clone(g)
  ), g;
}
function Ia(e = " ", t = 0) {
  return De(Jl, null, e, t);
}
function ct(e = "", t = !1) {
  return t ? (oe(), $r(Ni, null, e)) : De(Ni, null, e);
}
function Cr(e) {
  return e == null || typeof e == "boolean" ? De(Ni) : Je(e) ? De(
    Ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rg(e) ? Qr(e) : De(Jl, null, String(e));
}
function Qr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zo(e);
}
function Tf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Je(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Tf(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ng(t) ? t._ctx = Wn : o === 3 && Wn && (Wn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Wn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ia(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Si(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = at([t.class, r.class]));
      else if (o === "style")
        t.style = wt([t.style, r.style]);
      else if (zl(o)) {
        const a = t[o], l = r[o];
        l && a !== l && !(Je(a) && a.includes(l)) ? t[o] = a ? [].concat(a, l) : l : l == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !jl(o) && (t[o] = l);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Sr(e, t, n, r = null) {
  Dr(e, t, 7, [
    n,
    r
  ]);
}
const cw = wg();
let uw = 0;
function fw(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || cw, a = {
    uid: uw++,
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
    scope: new Lv(
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
    propsOptions: Ag(r, o),
    emitsOptions: xg(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _t,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: _t,
    data: _t,
    props: _t,
    attrs: _t,
    slots: _t,
    refs: _t,
    setupState: _t,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = G_.bind(null, a), e.ce && e.ce(a), a;
}
let vn = null;
const dw = () => vn || Wn;
let gl, Hu;
{
  const e = Kl(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((l) => l(a)) : o[0](a);
    };
  };
  gl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => vn = n
  ), Hu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ya = n
  );
}
const is = (e) => {
  const t = vn;
  return gl(e), e.scope.on(), () => {
    e.scope.off(), gl(t);
  };
}, cp = () => {
  vn && vn.scope.off(), gl(null);
};
function $g(e) {
  return e.vnode.shapeFlag & 4;
}
let Ya = !1;
function hw(e, t = !1, n = !1) {
  t && Hu(t);
  const { props: r, children: o } = e.vnode, a = $g(e);
  X_(e, r, a, t), Q_(e, o, n || t);
  const l = a ? pw(e, t) : void 0;
  return t && Hu(!1), l;
}
function pw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, T_);
  const { setup: r } = n;
  if (r) {
    oi();
    const o = e.setupContext = r.length > 1 ? gw(e) : null, a = is(e), l = ns(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = Vm(l);
    if (ai(), a(), (u || e.sp) && !za(e) && pg(e), u) {
      if (l.then(cp, cp), t)
        return l.then((d) => {
          up(e, d);
        }).catch((d) => {
          Wl(d, e, 0);
        });
      e.asyncDep = l;
    } else
      up(e, l);
  } else
    zg(e);
}
function up(e, t, n) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) && (e.setupState = og(t)), zg(e);
}
function zg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Fr);
  {
    const o = is(e);
    oi();
    try {
      D_(e);
    } finally {
      ai(), o();
    }
  }
}
const mw = {
  get(e, t) {
    return bn(e, "get", ""), e[t];
  }
};
function gw(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, mw),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(og(r_(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ja)
        return ja[n](e);
    },
    has(t, n) {
      return n in t || n in ja;
    }
  })) : e.proxy;
}
function yw(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function bw(e) {
  return et(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ l_(e, t, Ya), vw = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Gu;
const fp = typeof window < "u" && window.trustedTypes;
if (fp)
  try {
    Gu = /* @__PURE__ */ fp.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jg = Gu ? (e) => Gu.createHTML(e) : (e) => e, _w = "http://www.w3.org/2000/svg", ww = "http://www.w3.org/1998/Math/MathML", qr = typeof document < "u" ? document : null, dp = qr && /* @__PURE__ */ qr.createElement("template"), xw = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? qr.createElementNS(_w, e) : t === "mathml" ? qr.createElementNS(ww, e) : n ? qr.createElement(e, { is: n }) : qr.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => qr.createTextNode(e),
  createComment: (e) => qr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, a) {
    const l = n ? n.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      dp.innerHTML = jg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = dp.content;
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
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Sw = /* @__PURE__ */ Symbol("_vtc");
function kw(e, t, n) {
  const r = e[Sw];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yl = /* @__PURE__ */ Symbol("_vod"), Hg = /* @__PURE__ */ Symbol("_vsh"), ao = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[yl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Sa(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Sa(e, !0), r.enter(e)) : r.leave(e, () => {
      Sa(e, !1);
    }) : Sa(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Sa(e, t);
  }
};
function Sa(e, t) {
  e.style.display = t ? e[yl] : "none", e[Hg] = !t;
}
const Mw = /* @__PURE__ */ Symbol(""), Nw = /(?:^|;)\s*display\s*:/;
function Pw(e, t, n) {
  const r = e.style, o = Ut(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (Ut(t))
        for (const l of t.split(";")) {
          const u = l.slice(0, l.indexOf(":")).trim();
          n[u] == null && qs(r, u, "");
        }
      else
        for (const l in t)
          n[l] == null && qs(r, l, "");
    for (const l in n)
      l === "display" && (a = !0), qs(r, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = r[Mw];
      l && (n += ";" + l), r.cssText = n, a = Nw.test(n);
    }
  } else t && e.removeAttribute("style");
  yl in e && (e[yl] = a ? r.display : "", e[Hg] && (r.display = "none"));
}
const hp = /\s*!important$/;
function qs(e, t, n) {
  if (Je(n))
    n.forEach((r) => qs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Aw(e, t);
    hp.test(n) ? e.setProperty(
      lo(r),
      n.replace(hp, ""),
      "important"
    ) : e[r] = n;
  }
}
const pp = ["Webkit", "Moz", "ms"], tu = {};
function Aw(e, t) {
  const n = tu[t];
  if (n)
    return n;
  let r = An(t);
  if (r !== "filter" && r in e)
    return tu[t] = r;
  r = Gl(r);
  for (let o = 0; o < pp.length; o++) {
    const a = pp[o] + r;
    if (a in e)
      return tu[t] = a;
  }
  return t;
}
const mp = "http://www.w3.org/1999/xlink";
function gp(e, t, n, r, o, a = Tv(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(mp, t.slice(6, t.length)) : e.setAttributeNS(mp, t, n) : n == null || a && !Hm(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Tr(n) ? String(n) : n
  );
}
function yp(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? jg(n) : n);
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
  let l = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Hm(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function To(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Cw(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const bp = /* @__PURE__ */ Symbol("_vei");
function Iw(e, t, n, r, o = null) {
  const a = e[bp] || (e[bp] = {}), l = a[t];
  if (r && l)
    l.value = r;
  else {
    const [u, d] = Ew(t);
    if (r) {
      const b = a[t] = Tw(
        r,
        o
      );
      To(e, u, b, d);
    } else l && (Cw(e, u, l, d), a[t] = void 0);
  }
}
const vp = /(?:Once|Passive|Capture)$/;
function Ew(e) {
  let t;
  if (vp.test(e)) {
    t = {};
    let r;
    for (; r = e.match(vp); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : lo(e.slice(2)), t];
}
let nu = 0;
const Ow = /* @__PURE__ */ Promise.resolve(), Fw = () => nu || (Ow.then(() => nu = 0), nu = Date.now());
function Tw(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Dr(
      Dw(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Fw(), n;
}
function Dw(e, t) {
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
const _p = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Lw = (e, t, n, r, o, a) => {
  const l = o === "svg";
  t === "class" ? kw(e, r, l) : t === "style" ? Pw(e, n, r) : zl(t) ? jl(t) || Iw(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Rw(e, t, r, l)) ? (yp(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && gp(e, t, r, l, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Vw(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ut(r))) ? yp(e, An(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), gp(e, t, r, l));
};
function Rw(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && _p(t) && et(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return _p(t) && Ut(n) ? !1 : t in e;
}
function Vw(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = An(t);
  return Array.isArray(n) ? n.some((o) => An(o) === r) : Object.keys(n).some((o) => An(o) === r);
}
const wp = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Je(t) ? (n) => Us(t, n) : t;
};
function $w(e) {
  e.target.composing = !0;
}
function xp(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ru = /* @__PURE__ */ Symbol("_assign");
function Sp(e, t, n) {
  return t && (e = e.trim()), n && (e = wf(e)), e;
}
const kp = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[ru] = wp(o);
    const a = r || o.props && o.props.type === "number";
    To(e, t ? "change" : "input", (l) => {
      l.target.composing || e[ru](Sp(e.value, n, a));
    }), (n || a) && To(e, "change", () => {
      e.value = Sp(e.value, n, a);
    }), t || (To(e, "compositionstart", $w), To(e, "compositionend", xp), To(e, "change", xp));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, l) {
    if (e[ru] = wp(l), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? wf(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, zw = ["ctrl", "shift", "alt", "meta"], jw = {
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
  exact: (e, t) => zw.some((n) => e[`${n}Key`] && !t.includes(n))
}, At = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let l = 0; l < t.length; l++) {
      const u = jw[t[l]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, Hw = /* @__PURE__ */ xn({ patchProp: Lw }, xw);
let Mp;
function Gw() {
  return Mp || (Mp = tw(Hw));
}
const Df = ((...e) => {
  const t = Gw().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Bw(r);
    if (!o) return;
    const a = t._component;
    !et(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, Kw(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
});
function Kw(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Bw(e) {
  return Ut(e) ? document.querySelector(e) : e;
}
function Do(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Ww() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Np(e, t = 8) {
  var g;
  const n = (g = e == null ? void 0 : e.getContext) == null ? void 0 : g.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let l = r, u = o, d = -1, b = -1;
  for (let _ = 0; _ < o; _ += 1)
    for (let x = 0; x < r; x += 1)
      a[(_ * r + x) * 4 + 3] <= t || (x < l && (l = x), _ < u && (u = _), x > d && (d = x), _ > b && (b = _));
  return d < l || b < u ? null : {
    minX: l,
    minY: u,
    maxX: d,
    maxY: b,
    width: d - l + 1,
    height: b - u + 1,
    aspect: Number(((d - l + 1) / Math.max(1, b - u + 1)).toFixed(4))
  };
}
function Lf(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Jr(e, t, n) {
  if (!e) return Do(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Et(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let iu = null, ou = null, Pp = null, Ap = null, jt = null, ka = null, Mn = null, vi = null;
function Uw() {
  if (ou) return ou;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), ou = n, n;
}
function au(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  iu = Jr(iu, n, r);
  const o = iu;
  Et(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", Ap !== o.ctx && (Pp = o.ctx.createPattern(Uw(), "repeat"), Ap = o.ctx), o.ctx.fillStyle = Pp, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function Yw(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Xw(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function qw(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Jw(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ot = /* @__PURE__ */ new Map(), Rf = 128;
function Zw(e, t, n, r, o, a) {
  const l = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${l}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Ot.has(d)) {
    const K = Ot.get(d);
    return Ot.delete(d), Ot.set(d, K), K;
  }
  Ot.size >= Rf && Ot.delete(Ot.keys().next().value);
  const b = l * 2 + 2, g = l + 1, _ = Lf(b, b), x = _.getContext("2d"), N = u * l, S = l + 1, v = `rgba(${n},${r},${o},${a})`, F = `rgba(${n},${r},${o},0)`, $ = x.createRadialGradient(g, g, N, g, g, S);
  return $.addColorStop(0, v), $.addColorStop(1, F), x.fillStyle = $, x.fillRect(0, 0, b, b), Ot.set(d, _), _;
}
function Qw(e, t, n, r, o, a, l) {
  const { r: u, g: d, b, a: g } = r, _ = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), S = Math.max(0, Math.min(0.99, a)), v = Math.max(0, Math.min(1, l ?? 0)), F = `chisel:${_}:${x}:${n.toFixed(2)}:${u}:${d}:${b}:${g.toFixed(3)}:${N.toFixed(2)}:${S.toFixed(2)}:${v.toFixed(2)}`;
  if (Ot.has(F)) {
    const Q = Ot.get(F);
    return Ot.delete(F), Ot.set(F, Q), Q;
  }
  Ot.size >= Rf && Ot.delete(Ot.keys().next().value);
  const $ = Lf(_, x), K = $.getContext("2d"), E = K.createImageData(_, x), R = E.data, O = Math.max(0, e - t), V = Math.max(0, Math.min(1, n)), H = 1 + N;
  for (let Q = 0; Q < x; Q++)
    for (let _e = 0; _e < _; _e++) {
      const D = _e + 0.5 - e, C = Q + 0.5 - t, se = Math.max(Math.abs(D) - O, 0), fe = Math.hypot(se, C) / t;
      if (fe >= 1) continue;
      const U = fe <= V ? 1 : Math.max(0, (1 - fe) / Math.max(1e-4, 1 - V)), X = 1 - fe, j = 1 + N * (1 - X) * (1 - X), A = 1 - S * X * X, ee = j * A / H;
      let Y = 1;
      if (v > 0) {
        const St = Math.floor((C + t) / 1.5), pt = Math.floor((D + e) / 8), ln = eo(Ko(St * 41 + 500, pt * 19 + 300));
        Y = 1 - v * 0.42 * ln;
      }
      const Ie = Math.round(255 * Math.min(1, g * U * ee * Y));
      if (Ie <= 0) continue;
      const Fe = (Q * _ + _e) * 4;
      R[Fe] = u, R[Fe + 1] = d, R[Fe + 2] = b, R[Fe + 3] = Ie;
    }
  return K.putImageData(E, 0, 0), Ot.set(F, $), $;
}
function Ko(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function eo(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function ex(e, t, n, r, o, a, l) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), g = Math.max(Math.abs(u) - b, 0), _ = Math.hypot(g, d) / r;
  if (_ >= 1) return 0;
  const x = eo(Ko(e * 17 + 3, t * 13 + 7)), N = _ + a * 0.22 * (x - 0.5);
  if (N >= 1) return 0;
  const S = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), v = tx(e, t, u, d, n, r), F = a * 0.55;
  if (v < F) return 0;
  const K = 0.45 + 0.55 * ((v - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, l * S * K));
}
function tx(e, t, n, r, o, a) {
  const l = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = eo(Ko(l * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), g = Math.floor((r + a) / 1.5), _ = eo(Ko(b * 23 + 800, g * 29 + 500)), x = eo(Ko(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + _ * 0.3 + x * 0.15;
}
function nx(e, t, n, r, o) {
  const { r: a, g: l, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), _ = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${g}:${n.toFixed(2)}:${a}:${l}:${u}:${d.toFixed(3)}:${_.toFixed(2)}`;
  if (Ot.has(x)) {
    const K = Ot.get(x);
    return Ot.delete(x), Ot.set(x, K), K;
  }
  Ot.size >= Rf && Ot.delete(Ot.keys().next().value);
  const N = Lf(b, g), S = N.getContext("2d"), v = S.createImageData(b, g), F = v.data, $ = Math.max(0, Math.min(1, n));
  for (let K = 0; K < g; K++)
    for (let E = 0; E < b; E++) {
      const R = ex(E, K, e, t, $, _, d);
      if (R <= 0) continue;
      const O = (K * b + E) * 4;
      F[O] = a, F[O + 1] = l, F[O + 2] = u, F[O + 3] = R;
    }
  return S.putImageData(v, 0, 0), Ot.set(x, N), N;
}
function Gg(e, t, n) {
  var v, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = qw(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), l = rx(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((v = t == null ? void 0 : t.angle) == null ? void 0 : v.value) ?? 0), b = Jw(t, o), g = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), _ = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", x = t == null ? void 0 : t.scatter, N = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const $ = o * u, K = o, E = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), R = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = Qw($, K, a, l, E, R, O);
  } else if (r === "crayon") {
    const $ = o * u, K = o, E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = nx($, K, a, l, E);
  } else
    S = Zw(o, a, l.r, l.g, l.b, l.a);
  return { ctx: e, stampTex: S, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: N, latitudeCorrection: _ };
}
function rx(e) {
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
function ix(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Cp(e, t, n, r, o) {
  const a = e.angle, l = e.desc.width;
  function u(b, g) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, g - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, g), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + l, n), t + d > l && u(t - l, n);
}
function Vf(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: g } = e.scatter, _ = b * e.radiusPx * o, x = Ko(t, n);
    for (let N = 0; N < g; N++) {
      const S = eo(x + N * 2) * Math.PI * 2, v = Math.sqrt(eo(x + N * 2 + 1)) * _, F = t + Math.cos(S) * v, $ = n + Math.sin(S) * v, K = Math.max(0.5, e.radiusPx * o * 0.48), E = (0.5 - $ / Math.max(1, e.desc.height)) * Math.PI, R = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(E)) : 1, O = K * e.aspect * R;
      Cp(e, F, $, K, O);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), l = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(l)) : 1, d = a * e.aspect * u;
  Cp(e, t, n, a, d);
}
function Ip(e, t, n) {
  const r = Xw(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, l = Gg(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let x = 0; x < r.length; x++) {
    let N = Number(r[x].u || 0) * o;
    const S = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(N - u[x - 1].x) > o * 0.5 && (N += N < u[x - 1].x ? o : -o), u.push({ x: N, y: S });
  }
  if (Vf(l, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], g = u[0], _ = 0;
  for (let x = 1; x < u.length; x++) {
    const N = u[x], S = { x: (b.x + N.x) * 0.5, y: (b.y + N.y) * 0.5 };
    x === 1 ? _ = Xa(l, g.x, g.y, S.x, S.y, _) : _ = bl(l, d, g, S, N, _), d = b, b = N, g = S;
  }
  u.length === 2 ? Xa(l, g.x, g.y, b.x, b.y, _) : bl(l, d, g, b, b, _), e.restore();
}
function Js(e, t, n) {
  var _;
  const r = Array.isArray((_ = t == null ? void 0 : t.geometry) == null ? void 0 : _.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, l = ix(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const N = Yw(r[x]);
    let S = Number(N.x || 0) * o;
    x > 0 && Math.abs(S - u[x - 1].x) > o * 0.5 && (S += S < u[x - 1].x ? o : -o), u.push({ x: S, y: Number(N.y || 0) * a }), S < d && (d = S), S > b && (b = S);
  }
  function g(x) {
    e.beginPath(), e.moveTo(u[0].x + x, u[0].y);
    for (let N = 1; N < u.length; N++) e.lineTo(u[N].x + x, u[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = l, g(0), d < 0 && g(o), b > o && g(-o), e.restore();
}
function Es(e, t, n) {
  var l;
  if (String(((l = t == null ? void 0 : t.geometry) == null ? void 0 : l.geometryKind) || "") === "lasso_fill") {
    Js(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Ip(e, t, n) : (ka = Jr(ka, n.width, n.height), Et(ka), Ip(ka.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(ka.canvas, 0, 0), e.restore());
}
function $i(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Xa(e, t, n, r, o, a) {
  const l = r - t, u = o - n, d = Math.hypot(l, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const g = b / d;
    Vf(e, t + l * g, n + u * g, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function bl(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, g = 0, _ = u, x = _ + d, N = x + b, S = x - _, v = 16;
  let F = a, $ = n.x, K = n.y;
  for (let E = 1; E <= v; E++) {
    const R = _ + S * E / v, O = ((_ - R) * t.x + (R - g) * n.x) / (_ - g), V = ((_ - R) * t.y + (R - g) * n.y) / (_ - g), H = ((x - R) * n.x + (R - _) * r.x) / (x - _), Q = ((x - R) * n.y + (R - _) * r.y) / (x - _), _e = ((N - R) * r.x + (R - x) * o.x) / (N - x), D = ((N - R) * r.y + (R - x) * o.y) / (N - x), C = ((x - R) * O + (R - g) * H) / (x - g), se = ((x - R) * V + (R - g) * Q) / (x - g), le = ((N - R) * H + (R - _) * _e) / (N - _), fe = ((N - R) * Q + (R - _) * D) / (N - _), U = ((x - R) * C + (R - _) * le) / (x - _), X = ((x - R) * se + (R - _) * fe) / (x - _);
    F = Xa(e, $, K, U, X, F), $ = U, K = X;
  }
  return F;
}
function ox(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, l = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * l;
  if (d && Math.abs(b - d.prev.x) > l * 0.5 && (b += b < d.prev.x ? l : -l), !d) {
    const N = Gg(o, r, a), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), v = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", $ = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", Vf(N, b, u, 1), e.activeStroke = {
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
      strokeOpacity: S,
      velocityWidthFactor: v,
      distSinceStamp: 0,
      isEraser: F,
      layerKind: $,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const g = (d.prev.x + b) * 0.5, _ = (d.prev.y + u) * 0.5;
  o.globalCompositeOperation = "source-over";
  const x = {
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
  d.pointCount === 1 ? d.distSinceStamp = Xa(x, d.lastMidX, d.lastMidY, g, _, d.distSinceStamp) : d.distSinceStamp = bl(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: g, y: _ },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = g, d.lastMidY = _, d.pointCount++, e.displayDirty = !0;
}
function Ku(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = Do(t, n), l = {
    descriptor: r,
    committedMask: Do(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Do(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = Do(t, n);
  let b = null, g = "", _ = null;
  function x(D) {
    return {
      actionGroupId: D,
      descriptor: r,
      committedPaint: Do(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(D) {
    let C = o.get(D);
    return C || (C = x(D), o.set(D, C)), C;
  }
  function S(D) {
    return g === "mask" ? l : b ? N(b) : u;
  }
  function v(D) {
    var X;
    const C = !_ || _.length !== D.length || D.some((j, A) => j !== _[A]), se = g === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    let le = l.displayDirty || u.displayDirty || C;
    for (const j of D) {
      const A = o.get(j);
      if (A != null && A.displayDirty) {
        le = !0;
        break;
      }
    }
    if (se && (le = !0), !le) return;
    l.displayDirty = !1, u.displayDirty = !1;
    for (const j of D) {
      const A = o.get(j);
      A && (A.displayDirty = !1);
    }
    _ = [...D];
    const fe = d.ctx;
    Et(d);
    const U = !!(se != null && se.isEraser);
    for (const j of D) {
      const A = o.get(j);
      if (!A) continue;
      const Y = b === A.actionGroupId && g === "paint" ? A.activeStroke : null;
      if (U)
        jt = Jr(jt, t, n), Et(jt), jt.ctx.drawImage(A.committedPaint.canvas, 0, 0), $i(jt.ctx, a.canvas), fe.drawImage(jt.canvas, 0, 0);
      else if (fe.drawImage(A.committedPaint.canvas, 0, 0), Y) {
        const Ie = A.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Y.strokeOpacity ?? 1));
        fe.save(), fe.globalAlpha = Ie, fe.drawImage(a.canvas, 0, 0), fe.restore();
      }
    }
  }
  function F(D) {
    var se, le, fe, U, X;
    for (const j of o.values())
      Et(j.committedPaint), Et(j.currentStroke), j.activeStroke = null, j.displayDirty = !0;
    Et(l.committedMask), Et(l.currentStroke), l.activeStroke = null, l.displayDirty = !0, u.displayDirty = !0, _ = null;
    const C = [
      ...Array.isArray((le = (se = D == null ? void 0 : D.painting) == null ? void 0 : se.paint) == null ? void 0 : le.strokes) ? D.painting.paint.strokes : [],
      ...Array.isArray((U = (fe = D == null ? void 0 : D.painting) == null ? void 0 : fe.mask) == null ? void 0 : U.strokes) ? D.painting.mask.strokes : []
    ];
    for (const j of C) {
      if (((X = j == null ? void 0 : j.targetSpace) == null ? void 0 : X.kind) !== "ERP_GLOBAL") continue;
      const A = String((j == null ? void 0 : j.layerKind) || "paint"), Y = String((j == null ? void 0 : j.toolKind) || "pen") === "eraser";
      if (A === "mask") {
        const Ie = l.descriptor;
        Y ? (jt = Jr(jt, Ie.width, Ie.height), Et(jt), Es(jt.ctx, j, Ie), $i(l.committedMask.ctx, jt.canvas)) : Es(l.committedMask.ctx, j, Ie);
        continue;
      }
      if (Y) {
        jt = Jr(jt, r.width, r.height), Et(jt), Es(jt.ctx, j, r);
        for (const Ie of o.values())
          $i(Ie.committedPaint.ctx, jt.canvas), Ie.displayDirty = !0;
      } else {
        const Ie = String((j == null ? void 0 : j.actionGroupId) || "__default__"), Fe = N(Ie), St = Fe.descriptor;
        Es(Fe.committedPaint.ctx, j, St), Fe.displayDirty = !0;
      }
    }
    v([...o.keys()]);
  }
  function $(D, C) {
    g = String((D == null ? void 0 : D.layerKind) || "");
    const se = String((D == null ? void 0 : D.toolKind) || "") === "eraser";
    if (g === "mask")
      b = null, Et(l.currentStroke), l.activeStroke = null, l.displayDirty = !0;
    else {
      const le = se ? u : N(String((D == null ? void 0 : D.actionGroupId) || "__default__"));
      b = se ? "" : String((D == null ? void 0 : D.actionGroupId) || "__default__"), Et(le.currentStroke), le.activeStroke = null, le.displayDirty = !0;
    }
  }
  function K(D, C) {
    var A;
    const se = String((D == null ? void 0 : D.layerKind) || "paint"), le = String((D == null ? void 0 : D.toolKind) || "") === "eraser", fe = se === "mask" ? l : le ? u : N(String((D == null ? void 0 : D.actionGroupId) || b || "__default__")), U = fe.activeStroke, X = fe.descriptor;
    if (U && U.pointCount > 1) {
      const ee = fe.currentStroke.ctx;
      ee.globalCompositeOperation = "source-over";
      const Y = {
        ctx: ee,
        stampTex: U.stampTex,
        radiusPx: U.radiusPx,
        spacingPx: U.spacingPx,
        desc: X,
        aspect: U.aspect,
        angle: U.angle,
        stampKind: U.stampKind,
        scatter: U.scatter,
        latitudeCorrection: U.latitudeCorrection
      };
      U.pointCount === 2 ? Xa(Y, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : bl(Y, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    fe.lassoPreviewActive && (Et(fe.currentStroke), Js(fe.currentStroke.ctx, D, X), fe.lassoPreviewActive = !1);
    const j = se === "mask" ? l.committedMask : fe.committedPaint;
    if (le && se === "paint")
      for (const ee of o.values())
        $i(ee.committedPaint.ctx, fe.currentStroke.canvas), ee.displayDirty = !0;
    else if (le)
      $i(j.ctx, fe.currentStroke.canvas);
    else {
      const ee = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      j.ctx.save(), j.ctx.globalAlpha = ee, j.ctx.drawImage(fe.currentStroke.canvas, 0, 0), j.ctx.restore();
    }
    Ww() && (String((D == null ? void 0 : D.toolKind) || ""), String((X == null ? void 0 : X.kind) || ""), Number((X == null ? void 0 : X.width) || 0), Number((X == null ? void 0 : X.height) || 0), String(((A = D == null ? void 0 : D.targetSpace) == null ? void 0 : A.viewMode) || ""), Number((D == null ? void 0 : D.aspect) ?? 1), Np(fe.currentStroke.canvas), Np(j.canvas), void 0), Et(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0, b = null, g = "", v([...o.keys()]);
  }
  function E(D) {
    if (g === "mask")
      Et(l.currentStroke), l.activeStroke = null, l.lassoPreviewActive = !1, l.displayDirty = !0;
    else if (g === "paint" && !b)
      Et(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const C = o.get(b);
      C && (Et(C.currentStroke), C.activeStroke = null, C.lassoPreviewActive = !1, C.displayDirty = !0);
    }
    b = null, g = "", v([...o.keys()]);
  }
  function R(D, C) {
    var le;
    if (g = String((D == null ? void 0 : D.layerKind) || ""), String(((le = D == null ? void 0 : D.geometry) == null ? void 0 : le.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        Et(l.currentStroke), Js(l.currentStroke.ctx, D, l.descriptor), l.lassoPreviewActive = !0, l.displayDirty = !0;
      else {
        const fe = String((D == null ? void 0 : D.toolKind) || "") === "eraser", U = fe ? u : N(String((D == null ? void 0 : D.actionGroupId) || b || "__default__"));
        b = fe ? "" : String((D == null ? void 0 : D.actionGroupId) || b || "__default__"), Et(U.currentStroke), Js(U.currentStroke.ctx, D, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
      }
      v([...o.keys()]);
    }
  }
  function O(D) {
    return v(D ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: l.committedMask,
      descriptor: r
    };
  }
  function V(D) {
    return o.get(String(D)) ?? null;
  }
  function H() {
    return [...o.keys()];
  }
  function Q(D) {
    var X;
    const C = o.get(String(D));
    if (!C) return null;
    const se = g === "paint" && b === C.actionGroupId, le = g === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    if (le != null && le.isEraser)
      return Mn = Jr(Mn, t, n), Et(Mn), Mn.ctx.drawImage(C.committedPaint.canvas, 0, 0), $i(Mn.ctx, a.canvas), Mn.canvas;
    const fe = se ? C.activeStroke : null;
    if (!fe) return C.committedPaint.canvas;
    Mn = Jr(Mn, t, n), Et(Mn), Mn.ctx.drawImage(C.committedPaint.canvas, 0, 0);
    const U = C.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, fe.strokeOpacity ?? 1));
    return Mn.ctx.save(), Mn.ctx.globalAlpha = U, Mn.ctx.drawImage(a.canvas, 0, 0), Mn.ctx.restore(), Mn.canvas;
  }
  function _e() {
    return vi = Jr(vi, t, n), Et(vi), au(vi.ctx, l.committedMask.canvas), g === "mask" && l.activeStroke && (l.activeStroke.isEraser ? (jt = Jr(jt, t, n), Et(jt), jt.ctx.drawImage(l.committedMask.canvas, 0, 0), $i(jt.ctx, a.canvas), Et(vi), au(vi.ctx, jt.canvas)) : au(vi.ctx, a.canvas)), vi.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: $,
    appendStrokePoint: ox,
    updateActiveStroke: R,
    commitActiveStroke: K,
    cancelActiveStroke: E,
    getErpTarget: O,
    ensureTarget: S,
    getGroupTarget: V,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: H
  };
}
function J(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function ax(e, t) {
  let n = Ht(t) - Ht(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Bu = 3;
function Ma(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function vl(e, t = 0) {
  const n = Ma(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Ma(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = Ma(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = Ma(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(Ma(t) || 0);
}
function Kg(e) {
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
const Ep = Math.PI / 180, Op = 0.12, sx = Bu, lx = 35, cx = 140, Ea = 100, ux = 20, Fp = 0.8;
function fx(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = J(Number(e || Ea), 1, 179) * Ep;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / Ep;
}
function $f(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ea })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), l = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(K, E = null) {
    u && u(K, E);
  }
  function g(K, E, R = null, O = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(K || 0), d.drag.lastY = Number(E || 0), d.drag.lastTs = Number(O || performance.now()), d.drag.pointerId = R, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: R }), !0;
  }
  function _(K, E, R = "pano", O = performance.now()) {
    if (!d.drag.active) return !1;
    const V = Number(O || performance.now()), H = Number(K), Q = Number(E), _e = H - d.drag.lastX, D = Q - d.drag.lastY;
    d.drag.lastX = H, d.drag.lastY = Q, d.drag.lastTs = V;
    const C = r() || { x: 1, y: 1 }, se = Number(C.x || 1), le = Number(C.y || 1), fe = { ...t() };
    let U = 0, X = 0;
    if (R === "unwrap") {
      const A = o() || { w: 1, h: 1 }, ee = Math.max(1, Number(A.w || 1)), Y = Math.max(1, Number(A.h || 1)), Ie = _e / ee, Fe = D / Y;
      U = -Ie * 360 * se, X = Fe * 180 * le;
    } else {
      const A = a() || { w: 0, h: 0 }, ee = Math.max(1, Number(A.w || 0)), Y = Math.max(1, Number(A.h || 0));
      if (ee > 1 && Y > 1) {
        const Ie = J(Number(fe.fov || Ea), 1, 179), Fe = J(fx(Ie, ee, Y), 0.1, 179);
        U = -(_e / ee) * Ie * se, X = D / Y * Fe * le;
      } else
        U = -_e * Op * se, X = D * Op * le;
    }
    fe.yaw = Ht(Number(fe.yaw || 0) + U), fe.pitch = J(Number(fe.pitch || 0) + X, -89.9, 89.9), n(fe), d.velHistory.push({ ts: V, yaw: fe.yaw, pitch: fe.pitch });
    let j = 0;
    for (; j < d.velHistory.length - 1 && d.velHistory[j].ts < V - 100; ) j++;
    return j > 0 && d.velHistory.splice(0, j), d.inertia.active = !1, d.inertia.lastTs = V, l(), b("drag", { phase: "move", dx: _e, dy: D, dYaw: U, dPitch: X }), !0;
  }
  function x(K = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const E = Number(K || performance.now());
    d.drag.lastTs = E;
    const R = d.velHistory.filter((V) => E - V.ts <= 80);
    if (R.length >= 2) {
      const V = R[0], H = R.at(-1), Q = Math.max(1e-3, (H.ts - V.ts) / 1e3);
      let _e = H.yaw - V.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / Q, d.inertia.vy = (H.pitch - V.pitch) / Q;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const O = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = O > ux, d.inertia.lastTs = E, b("drag", { phase: "end", speed: O, inertiaActive: d.inertia.active }), !0;
  }
  function N(K = performance.now()) {
    if (!d.inertia.active) return !1;
    const E = Number(K || performance.now()), R = Math.max(1e-3, (E - (d.inertia.lastTs || E)) / 1e3);
    d.inertia.lastTs = E;
    const O = { ...t() };
    O.yaw = Ht(Number(O.yaw || 0) + d.inertia.vx * R), O.pitch = J(Number(O.pitch || 0) + d.inertia.vy * R, -89.9, 89.9);
    const V = Math.exp(-5.5 * R);
    return d.inertia.vx *= V, d.inertia.vy *= V, Math.abs(d.inertia.vx) < Fp && Math.abs(d.inertia.vy) < Fp && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(O), l(), d.inertia.active;
  }
  function S() {
    const K = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], K;
  }
  function v(K) {
    const E = Math.sign(Number(K || 0));
    if (!E) return !1;
    const R = { ...t() }, O = Number(R.fov || Ea);
    return R.fov = J(O + E * sx, lx, cx), n(R), l(), b("wheel", { deltaSign: E, fovBefore: O, fovAfter: R.fov }), !0;
  }
  function F(K, E = 0) {
    return v(vl(K, E));
  }
  function $() {
    n({ yaw: 0, pitch: 0, fov: Ea }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, l();
  }
  return {
    state: d,
    startDrag: g,
    moveDrag: _,
    endDrag: x,
    stepInertia: N,
    stopMotion: S,
    applyWheel: v,
    applyWheelEvent: F,
    resetView: $
  };
}
const Zt = Math.PI / 180, wn = 180 / Math.PI;
function ir(e, t, n) {
  return { x: e, y: t, z: n };
}
function _l(e, t) {
  return ir(e.x + t.x, e.y + t.y, e.z + t.z);
}
function wl(e, t) {
  return ir(e.x * t, e.y * t, e.z * t);
}
function su(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function zf(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ir(e.x / t, e.y / t, e.z / t);
}
function Vn(e, t) {
  const n = e * Zt, r = t * Zt, o = Math.cos(r);
  return ir(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function ia(e, t, n = 0) {
  const r = Number(e || 0) * Zt, o = Number(t || 0) * Zt, a = n * Zt, l = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), g = Math.cos(a), _ = Math.sin(a);
  return {
    right: ir(
      l * g - u * b * _,
      d * _,
      -u * g - l * b * _
    ),
    up: ir(
      -l * _ - u * b * g,
      d * g,
      u * _ - l * b * g
    ),
    fwd: ir(u * d, b, l * d)
  };
}
function xl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function bt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function dx() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function hx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = bt(r.z_index ?? r.zIndex, t.length);
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
function px(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function mx(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = bt(e.t, 0), r = bt(e.widthScale, null), o = bt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = bt(e.u, null), l = bt(e.v, null);
    if (a == null || l == null) return null;
    const u = {
      targetKind: "ERP_GLOBAL",
      u: (a % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, l)),
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  if (t.kind === "FRAME_LOCAL") {
    const a = bt(e.u, null), l = bt(e.v, null);
    if (a == null || l == null) return null;
    const u = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: a,
      v: l,
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  return null;
}
function Os(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = mx(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function gx(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Os(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = Os(e.points, t, 1);
  if (!a) return null;
  const l = Os(e.rawPoints, t, 1), u = Os(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: l || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function yx(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = px(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = gx(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = bt(e.size, null), l = bt(e.opacity, null);
  if (a == null || l == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = bt(e.radiusValue, null), g = String(e.radiusModel || "").trim() || null;
  let _ = null;
  if (t === "paint") {
    const x = e.color;
    if (!x || typeof x != "object") return null;
    _ = {
      r: Math.max(0, Math.min(1, bt(x.r, 0))),
      g: Math.max(0, Math.min(1, bt(x.g, 0))),
      b: Math.max(0, Math.min(1, bt(x.b, 0))),
      a: Math.max(0, Math.min(1, bt(x.a, 1)))
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
    opacity: Math.max(0, Math.min(1, l)),
    hardness: bt(e.hardness, null),
    flow: bt(e.flow, null),
    spacing: bt(e.spacing, null),
    createdAt: Math.trunc(bt(e.createdAt, 0)),
    color: _,
    radiusModel: g,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function Tp(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = yx(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function bx(e) {
  if (!e || typeof e != "object") return null;
  const t = bt(e.u0, null), n = bt(e.v0, null), r = bt(e.u1, null), o = bt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), l = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return l.u1 <= l.u0 || l.v1 <= l.v0 ? null : l;
}
function vx(e) {
  const t = e || {};
  return {
    du: bt(t.du, 0) ?? 0,
    dv: bt(t.dv, 0) ?? 0,
    rot_deg: bt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, bt(t.scale, 1) ?? 1)
  };
}
function _x(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = bx(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, bt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: vx(e.transform)
  } : null;
}
function wx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = _x(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function Bo(e) {
  const t = dx();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: hx(e.groups),
    paint: Tp(e.paint, "paint"),
    mask: Tp(e.mask, "mask"),
    raster_objects: wx(e.raster_objects)
  };
}
const Lr = 1, Rr = 179, Wu = 85;
function Ql(e) {
  const t = ((tt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Bg(e, t) {
  let n = tt(e, 0) - tt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Wg(e, t, { shiftKey: n = !1 } = {}) {
  let r = tt(e, 0) + tt(t, 0) * wn;
  return n && (r = Math.round(r / 15) * 15), Ql(r);
}
function tt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function li(e = {}) {
  const t = J(tt(e.hFOV_deg || 90, 90), Lr, Rr), n = J(tt(e.vFOV_deg || 60, 60), Lr, Rr), r = Math.tan(t * Zt * 0.5), o = Math.tan(n * Zt * 0.5);
  return {
    yawDeg: tt(e.yaw_deg, 0),
    pitchDeg: tt(e.pitch_deg, 0),
    rollDeg: tt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function to(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = li(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function jf(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, tt(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function Hf(e, t) {
  const n = Math.max(1e-12, tt(t, 1)), r = Math.max(1e-6, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = J(2 * Math.atan(r / (2 * n)) * wn, Lr, Rr), l = J(2 * Math.atan(o / (2 * n)) * wn, Lr, Rr);
  return { hFOV_deg: a, vFOV_deg: l };
}
function xx(e, t, n) {
  const r = tt(e == null ? void 0 : e.x, 0), o = tt(e == null ? void 0 : e.y, 0), a = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), l = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = li(t), d = Math.max(1e-12, tt(n, 1)), b = 2 * d * u.tanHalfX, g = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (l - g) * 0.5,
    w: b,
    h: g,
    focalPx: d
  };
}
function Gf(e, t, n = Wu) {
  const r = Math.max(1e-12, tt(t, 1)), o = J(tt(n, Wu), 1, 89.999), a = r * Math.tan(o * Zt), l = Math.max(1, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(l * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function Ug(e, t, n) {
  const r = Math.max(1e-12, tt(t, 1));
  return {
    x: (tt(n == null ? void 0 : n.x, 0) - tt(e == null ? void 0 : e.x, 0)) / r,
    y: -(tt(n == null ? void 0 : n.y, 0) - tt(e == null ? void 0 : e.y, 0)) / r
  };
}
function Zs(e, t) {
  const n = J(tt(e, 60), Lr, Rr), r = Math.max(1e-6, tt(t, 1));
  return J(
    2 * Math.atan(Math.tan(n * Zt * 0.5) * r) * wn,
    Lr,
    Rr
  );
}
function Dp(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Sx(e, t) {
  const n = Dp(e, 1), r = Dp(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), l = Math.max(1, Math.round(r * o)), u = (b, g) => g ? u(g, b % g) : b, d = u(a, l) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(l / d))}`;
}
function no(e) {
  const t = J(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Zt, n = J(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Zt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Ui(e) {
  const t = no(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || Sx(t, 1);
}
function Yg(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ui(t), t;
}
function Xg({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const l = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(l) ? J(l, Lr, Rr) : J(Math.min(42, tt(o, 100) * 0.42), 8, 96);
  return Yg({
    id: String(e),
    label: "Frame 1",
    yaw_deg: tt(t, 0),
    pitch_deg: J(tt(n, 0), -89.9, 89.9),
    roll_deg: Ql(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function Zr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ui(e);
}
function qg(e, t) {
  const n = li(e), r = tt(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * wn, a = 2 * Math.atan(n.tanHalfY * r) * wn;
  return o < Lr || o > Rr || a < Lr || a > Rr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function Jg(e, t, n = Bu) {
  const r = Math.sign(tt(t, 0)), o = Math.abs(tt(n, Bu));
  if (!r || !(o > 0)) return null;
  const a = li(e), l = a.hFovDeg + r * o;
  if (l < Lr || l > Rr) return null;
  const u = Math.tan(l * Zt * 0.5);
  return qg(e, u / a.tanHalfX);
}
function Zg(e, t) {
  const n = li(e), r = ia(n.yawDeg, n.pitchDeg, n.rollDeg), o = tt(t == null ? void 0 : t.x, 0), a = tt(t == null ? void 0 : t.y, 0);
  return zf(_l(_l(r.fwd, wl(r.right, o)), wl(r.up, a)));
}
function kx(e) {
  return ir(e.x, e.y, -e.z);
}
function Qs(e) {
  return ir(e.x, e.y, -e.z);
}
function Vr(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = ia(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function Mx(e) {
  const t = Qs(ir(e[0][0], e[1][0], e[2][0])), n = Qs(ir(e[0][1], e[1][1], e[2][1])), r = Qs(ir(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), l = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - l * n.x, l * t.x - u * t.z);
  return { yawDeg: o * wn, pitchDeg: a * wn, rollDeg: d * wn };
}
function Kf(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function co(e) {
  const [[t, n, r], [o, a, l], [u, d, b]] = e, g = t + a + b;
  if (g > 0) {
    const x = 0.5 / Math.sqrt(g + 1);
    return { x: (d - l) * x, y: (r - u) * x, z: (o - n) * x, w: 0.25 / x };
  }
  if (t > a && t > b) {
    const x = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * x, y: (n + o) / x, z: (r + u) / x, w: (d - l) / x };
  }
  if (a > b) {
    const x = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / x, y: 0.25 * x, z: (l + d) / x, w: (r - u) / x };
  }
  const _ = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / _, y: (l + d) / _, z: 0.25 * _, w: (o - n) / _ };
}
function Fs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Xi = 1e-6, Uu = 1e-6, Nx = 1e-9;
function qa(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Px(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let l = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (l + u);
    qa(0, n, o, 1, b) < t ? l = b : u = b;
  }
  return qa(0, r, a, 1, 0.5 * (l + u));
}
function Qo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function ea(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], l = n.map((x) => -x / o), u = r.map((x) => x / a);
  if (l.reduce((x, N, S) => x + N * u[S], 0) < 0) return n.map(() => 0);
  const d = l.map((x, N) => (x * a + u[N] * o) / (o + a)), b = (x) => Math.sqrt(x.reduce((N, S) => N + S * S, 0)), g = 3 * Math.min(b(l), b(u)), _ = b(d);
  return _ <= g ? d : d.map((x) => x * g / _);
}
function Qg(e, t, n, r) {
  const o = n[r], a = n[r + 1], l = t[r + 1] - t[r], u = o.map((g, _) => a[_] - g);
  let d = u;
  Qo(e, r) && (d = ea(t, r, n[r - 1].map((g, _) => g - o[_]), u).map((g) => g * l));
  let b = u;
  return Qo(e, r + 1) && (b = ea(t, r + 1, u.map((g) => -g), n[r + 2].map((g, _) => g - a[_])).map((g) => g * l)), [d.map((g) => g / 3), b.map((g) => -g / 3)];
}
function e0(e, t, n, r, o) {
  const [[a], [l]] = Qg(e, t, n.map((u) => [u]), r);
  return qa(n[r], n[r] + a, n[r + 1] + l, n[r + 1], o);
}
function Ax(e, t, n, r) {
  var b, g;
  const o = e.map((_) => _.value);
  let [a, l] = Qg(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, l = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? l;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((_) => qa(u[_], u[_] + a[_], d[_] + l[_], d[_], r));
}
function Sl([e, t, n, r], [o, a, l, u]) {
  return [
    r * o + e * u + t * l - n * a,
    r * a - e * l + t * u + n * o,
    r * l + e * a - t * o + n * u,
    r * u - e * o - t * a - n * l
  ];
}
function Cx(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function lu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Ix([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function Yu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function $o(e, t) {
  return Ix(Sl([-e[0], -e[1], -e[2], e[3]], t));
}
function cu(e, t, n) {
  return Sl(e, Yu($o(e, t).map((r) => n * r)));
}
function uu(e, t) {
  const n = Cx(e, t);
  if (Math.abs(n) > Uu) return n < 0;
  const [r, o, a] = $o(e, t);
  for (const l of [-o, r, a])
    if (Math.abs(l) > Uu) return l < 0;
  return !1;
}
function Ts(e) {
  const { x: t, y: n, z: r, w: o } = co(Vr(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Xu(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function Ex(e, t, n, r) {
  const o = Ts(e[n].value);
  let a = Ts(e[n + 1].value);
  uu(o, a) && (a = lu(a));
  const l = t[n + 1] - t[n], u = $o(o, a);
  let d = u;
  if (Qo(e, n)) {
    let O = Ts(e[n - 1].value);
    uu(O, o) && (O = lu(O)), d = ea(t, n, $o(o, O), u).map((V) => V * l);
  }
  let b = u;
  if (Qo(e, n + 1)) {
    let O = Ts(e[n + 2].value);
    uu(a, O) && (O = lu(O)), b = ea(t, n + 1, $o(a, o), $o(a, O)).map((V) => V * l);
  }
  const g = Sl(o, Yu(d.map((O, V) => 0.5 * (O - u[V])))), _ = Sl(a, Yu(u.map((O, V) => 0.5 * (O - b[V])))), [x, N, S, v] = cu(cu(o, a, r), cu(g, _, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: $, rollDeg: K } = Mx(Kf({ x, y: N, z: S, w: v })), E = e[n].value, R = e[n + 1].value;
  return {
    yaw_deg: Xu(F, E.yaw_deg, R.yaw_deg, r),
    pitch_deg: $,
    roll_deg: Xu(K, E.roll_deg, R.roll_deg, r)
  };
}
function Ja(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function kl(e) {
  return Math.sqrt(Ja(e, e));
}
function Ml(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function t0(e, t) {
  const n = Ja(e, t), r = t.map((l, u) => l - n * e[u]), o = kl(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((l) => l * a);
}
function Lo(e, t) {
  const n = kl(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Ds(e, t, n) {
  return Lo(e, t0(e, t).map((r) => n * r));
}
function fu(e, t) {
  const n = Ml(e[t].value), r = Ml(e[t + 1].value), o = Ja(n, r), a = o < 0 && kl(r.map((d, b) => d - o * n[b])) <= Uu;
  let l;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    l = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    l = t0(n, r);
  const u = kl(l);
  return [l, l.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function Ox(e, t, n, r) {
  const o = Ml(e[n].value), a = Ml(e[n + 1].value), [l, u, d] = fu(e, n);
  let b = l, g = u;
  const _ = t[n + 1] - t[n];
  Qo(e, n) && (b = ea(t, n, fu(e, n - 1)[1].map((E) => -E), b).map((E) => E * _)), Qo(e, n + 1) && (g = ea(t, n + 1, g.map((E) => -E), fu(e, n + 1)[0]).map((E) => E * _));
  let x, N, S;
  if (d) {
    const E = Math.PI, R = qa(0, Ja(b, l) / E / 3, E - Ja(g, u) / E / 3, E, r);
    [x, N, S] = Lo(o, l.map((O) => R * O / E));
  } else {
    const E = Ds(Lo(o, b.map((V) => V / 3)), Lo(a, g.map((V) => -V / 3)), r), R = Ds(Lo(o, b.map((V) => r * V / 3)), E, r), O = Ds(E, Lo(a, g.map((V) => -(1 - r) * V / 3)), r);
    [x, N, S] = Ds(R, O, r);
  }
  const v = Math.hypot(x, S), F = e[n].value.yaw_deg, $ = e[n + 1].value.yaw_deg;
  return { yaw_deg: v <= Nx ? F + ($ - F) * r : Xu(Math.atan2(x, S) * 180 / Math.PI, F, $, r), pitch_deg: Math.atan2(N, v) * 180 / Math.PI };
}
function Fx(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = e0(e, t, e.map((l) => l.value[a]), n, r);
  return o;
}
function Tx(e, t, n, r) {
  return e0(e, t, e.map((o) => o.value), n, r);
}
const Dx = { position: Ax, rotation: Ex, direction: Ox, size: Fx };
function Jt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Fs(e[t].value);
  if (n <= r[0].frame + Xi) return Fs(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - Xi) return Fs(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + Xi; ) a += 1;
  const l = r[a];
  if (Math.abs(n - l.frame) <= Xi || l.easing === "hold") return Fs(l.value);
  const u = r.map((b) => b.frame), d = Px(l.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (Dx[t] ?? Tx)(r, u, a, d);
}
function qu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Lx(e) {
  return Math.min(1, Math.max(0, e));
}
function n0(e) {
  return Math.max(1e-6, e);
}
function r0(e, t) {
  return t - (e.start - e.in);
}
function ki(e, t) {
  return t >= e.start - Xi && (e.duration === null || t < e.start + e.duration - Xi);
}
function Bf(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = r0(o.clip, n);
  return {
    frame: n,
    camera: {
      position: Jt(r, "position", n),
      ...Jt(r, "rotation", n),
      hFOV_deg: qu(Jt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: ki(o.clip, n),
      clip_frame: a,
      position: Jt(o, "position", a),
      ...Jt(o, "rotation", a),
      scale: n0(Jt(o, "scale", a))
    },
    stickers: e.stickers.map((l) => ec(l, n))
  };
}
function Rx(e, t) {
  if (e.placement === "world")
    return {
      position: Jt(e, "position", t),
      ...Jt(e, "rotation", t),
      scale: n0(Jt(e, "scale", t))
    };
  const n = Jt(e, "size", t);
  return {
    ...Jt(e, "direction", t),
    roll_deg: Jt(e, "roll", t),
    hFOV_deg: qu(n.hFOV_deg),
    vFOV_deg: qu(n.vFOV_deg)
  };
}
function ec(e, t) {
  const n = r0(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ki(e.clip, t),
    clip_frame: n,
    ...Rx(e, n),
    opacity: Lx(Jt(e, "opacity", n))
  };
}
const Vx = 2, $x = ["sky", "world"], zx = ["input", "output", "temp"], i0 = [0.42, 0, 0.58, 1];
function nn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Bt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Nl(e, t) {
  const n = Bt(e, t);
  return n !== null && n > 0 ? n : t;
}
function nr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ro(e) {
  const t = Bt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Lp(e, t) {
  return typeof e == "boolean" ? e : t;
}
function o0(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Bt(n, null));
  return t.includes(null) ? null : t;
}
function a0(e) {
  return o0(e) || [0, 0, 0];
}
function s0(e) {
  const t = nn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: nr(Bt(t.pitch_deg, 0), -90, 90),
    roll_deg: Bt(t.roll_deg, 0)
  };
}
function jx(e) {
  return nr(Bt(e, 90), 0.1, 179);
}
function Hx(e) {
  return Nl(e, 1);
}
function Gx(e) {
  const t = nn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: nr(Bt(t.pitch_deg, 0), -90, 90)
  };
}
function Kx(e) {
  return Bt(e, 0);
}
function Bx(e) {
  const t = nn(e) ? e : {};
  return {
    hFOV_deg: nr(Bt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: nr(Bt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function l0(e) {
  return nr(Bt(e, 1), 0, 1);
}
const Wf = [["position", a0], ["rotation", s0], ["fov", jx]], tc = [["position", a0], ["rotation", s0], ["scale", Hx]], Uf = [["direction", Gx], ["roll", Kx], ["size", Bx], ["opacity", l0]], Yf = [...tc, ["opacity", l0]];
function Wx(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Bt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...i0];
}
function Ux(e) {
  if (!nn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = o0(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function Yx(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!nn(o)) continue;
    const a = ro(o.frame);
    if (a === null) continue;
    const l = { frame: a, value: t(o.value), easing: Wx(o.easing) }, u = n ? Ux(o.handles) : null;
    u && (l.handles = u), r.set(a, l);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function Ju(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = nn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: Yx(a.keyframes, o, r === "position") };
  }
  return n;
}
function c0(e) {
  const t = nn(e) ? e : {}, n = ro(t.start), r = ro(t.in), o = ro(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function Xx(e) {
  const t = nn(e) ? e : {}, n = nr(Bt(t.x0, 0), 0, 1), r = nr(Bt(t.y0, 0), 0, 1), o = nr(Bt(t.x1, 1), 0, 1), a = nr(Bt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function qx(e) {
  if (!nn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: zx.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Jx(e) {
  const t = qx(e.source);
  if (!t) return null;
  const n = $x.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: c0(e.clip),
    visible: Lp(e.visible, !0),
    locked: Lp(e.locked, !1),
    crop: Xx(e.crop),
    ...Ju(e, r ? Yf : Uf)
  };
  return r || (o.z_index = ro(e.z_index) ?? 0), o;
}
function Zx(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const l = nn(a) ? Jx(a) : null;
    if (l) {
      if (l.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(l);
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
function Pl(e) {
  const t = nn(e.timeline) ? e.timeline : {}, n = nn(e.camera) ? e.camera : {}, r = nn(e.scene) ? e.scene : {}, o = ro(t.length);
  return {
    version: Vx,
    timeline: {
      fps: Nl(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: Nl(n.aspect, 1), ...Ju(n, Wf) },
    scene: { clip: c0(r.clip), ...Ju(r, tc) },
    stickers: Zx(e.stickers),
    painting: Bo(e.painting),
    painting_layer: nn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function Qx(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!nn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function eS(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!nn(t)) return {};
  const n = nr(Bt(t.hFOV_deg, 90), 1, 179), r = nr(Bt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function tS(e) {
  const t = nn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(nn) : [];
  return n.sort((r, o) => Bt(r.z_index, 0) - Bt(o.z_index, 0)), Pl({
    camera: eS(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: Qx(r, t),
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
function so(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Pl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!nn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? tS(t) : Pl(t);
}
function du(e, t, n, r, o) {
  const a = {};
  for (const [l] of t)
    a[l] = {
      value: e[l].value,
      keyframes: e[l].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function Rp(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function u0(e, t) {
  if (Nl(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (l) => ro(l * n), { length: o } = e.timeline, a = Rp(e.scene.clip, r);
  return Pl({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: { aspect: e.camera.aspect, ...du(e.camera, Wf, r, 0, 0) },
    scene: { clip: a.clip, ...du(e.scene, tc, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((l) => {
      const { clip: u, anchor: d, newAnchor: b } = Rp(l.clip, r), g = l.placement === "world" ? Yf : Uf;
      return { ...l, clip: u, ...du(l, g, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function hu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function f0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Xf(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= Xi);
}
function d0(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? f0(e.keyframes[r - 1].easing) : [...i0];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function io(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = hu(o.value, r);
    return;
  }
  const a = Xf(o, n);
  a ? a.value = hu(a.value, r) : d0(o, n, hu(Jt(e, t, n), r));
}
function uo(e) {
  return e.placement === "world" ? Yf.map(([t]) => t) : e.placement === "sky" ? Uf.map(([t]) => t) : (e.clip ? tc : Wf).map(([t]) => t);
}
function nS(e, t) {
  for (const n of uo(e))
    Xf(e[n], t) || d0(e[n], t, Jt(e, n, t));
}
function rS(e) {
  const t = uo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function iS(e, t) {
  return uo(e).every((n) => !!Xf(e[n], t));
}
function oS(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const l = e[a];
    if (!l.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Jt(e, a, r);
    l.keyframes = l.keyframes.filter((d) => !o.has(d.frame)), l.keyframes.length || (l.value = u);
  }
}
function aS(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const l of t) {
    const u = e[l], d = u.keyframes.filter((g) => a.has(g.frame)).map((g) => ({ ...g, frame: g.frame + r })), b = new Set(d.map((g) => g.frame));
    u.keyframes = [
      ...u.keyframes.filter((g) => !a.has(g.frame) && !b.has(g.frame)),
      ...d
    ].sort((g, _) => g.frame - _.frame);
  }
  return r;
}
function h0(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((l) => n.length > 1 ? l.frame >= r && l.frame < o : l.frame === r));
}
function sS(e, t, n) {
  const r = h0(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function lS(e, t, n, r) {
  for (const o of h0(e, t, n)) o.easing = f0(r);
}
function cS(e, t) {
  e.start = Math.max(0, e.start + t);
}
function uS(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function fS(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function Vp(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Zu(e) {
  return uo(e).map((t) => e[t]);
}
function Qu(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => Zu(t).some((n) => n.keyframes.length > 0)) || !Vp(e.scene.clip) || e.stickers.some((t) => !Vp(t.clip));
}
function p0(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = e.timeline.length ?? Math.max(t, n);
  for (const a of Zu(e.camera))
    for (const l of a.keyframes) o = Math.max(o, l.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: l } = a;
    o = Math.max(o, l.duration === null || l === r ? l.start + 1 : l.start + l.duration);
    for (const u of Zu(a))
      for (const d of u.keyframes) o = Math.max(o, l.start - l.in + d.frame + 1);
  }
  return o;
}
function dS(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Ls = { text: null, parsed: null };
function Gn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Al(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function hS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Gn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Bo(null),
    painting_layer: null,
    ui_settings: Al(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function m0(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function pS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function mS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function gS(e) {
  return Array.isArray(e) ? e.map((t) => Yg(t)) : [];
}
function yS(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((l) => String((l == null ? void 0 : l.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function g0(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = hS(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Ls.text === o ? a = Ls.parsed : (a = JSON.parse(o), Ls = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const l = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: pS(a.assets),
      stickers: mS(a.stickers),
      shots: gS(a.shots),
      painting: Bo(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: Al(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return l && (u.ui_settings = Al({ ...u.ui_settings, ...l })), u.output_preset = m0(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Gn(n.coverage), delete u.editor_history, u;
  } catch {
    return Ls = { text: o, parsed: null }, r;
  }
}
function $p(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function bS(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function vS(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function y0(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: l, fps: u = null } = t;
  let d;
  try {
    d = so(e);
  } catch {
    d = so(null);
  }
  return u && u !== d.timeline.fps && (d = u0(d, u)), {
    ...d,
    coverage: Gn(o),
    bg_color: r,
    output_preset: m0(n),
    ui_settings: Al(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...l }
  };
}
function _S(e, t) {
  const n = u0(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, l] of o)
    if (l) {
      a.clip && (a.clip = l.clip);
      for (const u of uo(a)) a[u].keyframes = l[u].keyframes;
    }
}
function qf(e, t) {
  const n = ec(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const wS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function zp(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function xS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[wS[n]].keyframes.length));
}
function b0(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = zp(n, ["yaw_deg", "pitch_deg"]), a = zp(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && io(e, "direction", r, o), n.rot_deg !== void 0 && io(e, "roll", r, n.rot_deg), Object.keys(a).length && io(e, "size", r, a);
}
const v0 = ["position_x", "position_y", "position_z"];
function SS(e, t) {
  const n = Jt(e, "position", t), r = Jt(e, "rotation", t);
  return {
    ...Object.fromEntries(v0.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Jt(e, "fov", t)
  };
}
function kS(e, t, n, r) {
  const o = v0.indexOf(n);
  if (o >= 0) {
    const a = Jt(e, "position", t);
    a[o] = r, io(e, "position", t, a);
  } else n === "hFOV_deg" ? io(e, "fov", t, r) : io(e, "rotation", t, { [n]: r });
}
function MS(e, t, n) {
  io(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function el(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function _0(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Jf(e, t, n, r) {
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
function NS(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Ht(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function w0(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function x0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function S0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function k0(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? so(t) : t);
}
function M0(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(so(n)) === t;
  } catch {
    return !1;
  }
}
const PS = 0.15, AS = 0.01, qi = 1, CS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Pi(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Wo(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function N0(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function os(e, t, n = 0) {
  const r = Vr(e, t, n), o = Wo(r, 2);
  return { right: Wo(r, 0), up: Wo(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function IS(e, t) {
  return e === "6dof" ? t : { ...t, position: [0, 0, 0] };
}
function ES(e) {
  return Pi(e.position, os(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Zf(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Zt);
  return { tanX: r, tanY: r * n / t };
}
function OS(e, t, n, r) {
  const o = ES(e), a = Ht(e.yaw_deg + t / r * 360), l = J(e.pitch_deg - n / r * 360, -89.9, 89.9), { forward: u } = os(a, l);
  return { ...e, yaw_deg: a, pitch_deg: l, position: Pi(o, u, -e.distance) };
}
const FS = 0.05;
function TS(e, t, n, r, o, a = qi) {
  const { right: l, up: u } = os(e.yaw_deg, e.pitch_deg), b = 2 * Math.max(e.distance, a * FS) * Zf(e, r, o).tanY / o;
  return { ...e, position: Pi(Pi(e.position, l, -t * b), u, n * b) };
}
function DS(e, t, n = qi) {
  const r = Math.max(n, 1e-6) * AS, o = Math.max(e.distance * PS, r) * Math.sign(t), { forward: a } = os(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Pi(e.position, a, o), distance: Math.max(e.distance - o, r) };
}
function LS(e, t, n, r) {
  const { tanX: o, tanY: a } = Zf(e, n, r), l = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(l) * 1.1, { forward: d } = os(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Pi(t.center, d, -u), distance: u };
}
function jp(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: qi }, l = Math.hypot(o[0] - e.position[0], o[1] - e.position[1], o[2] - e.position[2]), u = Math.max(l + a, Math.hypot(...e.position) + 6 * a);
  return {
    position: [...e.position],
    quaternion: co(Vr(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Zf(e, t, n).tanY) * wn,
    aspect: t / n,
    near: Math.max(e.distance * 0.01, a * 1e-4),
    far: u * 2
  };
}
function RS(e, t, n, r) {
  const { right: o, up: a, forward: l } = VS(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * l[0] + u[1] * l[1] + u[2] * l[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Zt), g = b * e.aspect, _ = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], x = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + _ / d / g), y: r * 0.5 * (1 - x / d / b), z: d };
}
function VS(e) {
  const t = Kf(e.quaternion), n = Wo(t, 2);
  return { right: Wo(t, 0), up: Wo(t, 1), forward: n.map((r) => -r) };
}
function Hp(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function $S({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function P0(e, t) {
  if (!e || !t.active) return null;
  const n = jS(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: HS(t),
    itemQuaternion: e.kind === "splat" ? CS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function zS(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], l = P0(e, a);
  return l && { ...l, id: o.id, opacity: a.opacity, value: a };
}
function jS(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function HS(e) {
  return {
    position: [...e.position],
    quaternion: co(Vr(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Gp(e, t) {
  return Pi(e.position, N0(Vr(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Kp(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Bp({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function GS(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((l) => l[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((l) => l[a]))), r = t.map((a, l) => (a + n[l]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function KS(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...Bp(t).map((a) => Gp(e.scene, a)));
  for (const a of n) o.push(...WS(a));
  for (const { box: a, value: l } of r) o.push(...Bp(a).map((u) => Gp(l, u)));
  return o;
}
function BS(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: co(Vr(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Vr(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function WS(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => Pi(e.position, N0(e.rotation, [r, o, 0])));
}
function US(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
const Wp = 2048, A0 = 0.28;
function C0(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Zt);
  return {
    quaternion: co(Vr(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * wn,
    aspect: r
  };
}
function tl(e) {
  const t = li(e);
  return {
    quaternion: co(Vr(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function YS(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = Gf(n, r), l = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: l - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * wn,
      vFOV_deg: 2 * Math.atan(a / r) * wn
    }
  };
}
function I0(e, t, n) {
  const [[r, o, a], [l, u, d], [b, g, _]] = Kf(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * Zt), N = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, v = 1e-4) {
      const F = kx(S), $ = r * F.x + l * F.y + b * F.z, K = o * F.x + u * F.y + g * F.z, E = -(a * F.x + d * F.y + _ * F.z), R = Math.max(E, v);
      return {
        x: t * 0.5 * (1 + $ / R / N),
        y: n * 0.5 * (1 - K / R / x),
        z: E
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, v) {
      const F = (S / t * 2 - 1) * N, $ = (1 - v / n * 2) * x;
      return zf(Qs({
        x: r * F + o * $ - a,
        y: l * F + u * $ - d,
        z: b * F + g * $ - _
      }));
    }
  };
}
function XS(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = Bf(e, t), l = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const g = u.source.kind === "port" && !u.visible;
    if (!b.active && !g) return;
    const _ = n(u);
    if (!_) return;
    const x = Math.tan(b.hFOV_deg * 0.5 * Zt), N = Math.tan(b.vFOV_deg * 0.5 * Zt), { crop: S } = u;
    l.push({
      kind: "sticker",
      id: u.id,
      media: _.media,
      revision: _.revision,
      source: _.source,
      opacity: g ? A0 : b.opacity,
      zIndex: r(u),
      quaternion: co(Vr(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * S.x0 - 1) * x,
        x1: (2 * S.x1 - 1) * x,
        y0: (1 - 2 * S.y1) * N,
        y1: (1 - 2 * S.y0) * N
      }
    });
  });
  for (const u of o) l.push({ kind: "erp", ...u });
  return l.sort((u, d) => u.zIndex - d.zIndex);
}
function E0(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !a.has(l.id) && a.set(l.id, l);
  return XS(e, t, {
    media: (l) => {
      const u = a.get(l.id);
      return u ? r(u) : null;
    },
    zIndex: (l) => {
      var u;
      return Number(((u = a.get(l.id)) == null ? void 0 : u.z_index) || 0);
    },
    paintLayers: o
  });
}
function qS(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function JS(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = Bf(e, t), l = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const g = o.get(u.id), _ = g ? r(g) : null;
    if (!_) return;
    const { width: x, height: N } = qS(_.media), S = BS(b, u.crop, x, N);
    S && l.push({
      id: u.id,
      media: _.media,
      revision: _.revision,
      source: _.source,
      opacity: b.opacity,
      position: S.position,
      quaternion: S.quaternion,
      rotation: S.rotation,
      width: S.width,
      height: S.height,
      crop: u.crop
    });
  }), l;
}
const pu = /* @__PURE__ */ new WeakMap();
let ZS = 1;
function ef(e) {
  return pu.has(e) || pu.set(e, ZS++), pu.get(e);
}
function Up(e) {
  return e && typeof e == "object" ? ef(e) : e;
}
function Yp({ background: e, layers: t }) {
  return JSON.stringify([
    e && [ef(e.media), Up(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, ef(n.media), Up(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function QS({ onReady: e, onFailed: t, onUpdate: n = () => {
} }) {
  let r = null, o = !1;
  const a = {
    ready: !1,
    failed: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(l) {
      return r ? r.render(l) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(l) {
      return r ? r.renderUnwrap(l) : null;
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(l) {
      return r ? r.sceneBox(l) : null;
    },
    dispose() {
      o = !0, r == null || r.dispose(), r = null;
    }
  };
  return import("./.lazy/pano_three_view-DIRCG12_.js").then((l) => l.$).then((l) => {
    o || (r = l.createThreeView({ onUpdate: n }), a.ready = !0, e());
  }).catch((l) => {
    console.error("[PanoramaStickers] three.js view is unavailable", l), a.failed = !0, t();
  }), a;
}
const O0 = "3D view unavailable. Check the browser console.";
function Cl(e, t, n) {
  return C0({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function ek(e) {
  let t = null, n = !1, r = !1;
  const o = /* @__PURE__ */ new Set();
  function a() {
    t || n || r || (n = !0, e().then((l) => {
      if (n = !1, !o.size) {
        l.dispose();
        return;
      }
      t = l, o.forEach((u) => u.onChange());
    }).catch((l) => {
      n = !1, o.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", l), o.forEach((u) => u.onChange()));
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
      render(g) {
        return b ? null : (a(), t ? t.render({ ...g, owner: d }) : null);
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
const F0 = ek(
  () => import("./.lazy/pano_three_view-DIRCG12_.js").then((e) => e.$).then((e) => e.createThreeView())
), Ii = ["erp_image", "bg_erp", "bg_media"], Qf = ["sticker_image", "sticker"], T0 = ["scene"], tk = {
  background: Ii,
  "external-sticker": Qf,
  scene: T0
};
function D0(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function L0(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = D0(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function nk(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function R0(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const l = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!l || a === n.length - 1) return { graph: r, entry: l };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === l.type);
  }
}
function rk(e, t) {
  const { graph: n, entry: r } = R0(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((l) => Array.isArray(l) ? [l[0], { origin_id: l[1], origin_slot: l[2] }] : [l == null ? void 0 : l.id, l])), a = {};
  for (const l of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = D0(o.get(l == null ? void 0 : l.link));
    u && (a[String((l == null ? void 0 : l.name) || "")] = u);
  }
  return a;
}
const V0 = [...Ii, ...Qf, ...T0], ik = 256, Ro = /* @__PURE__ */ new Map(), mu = /* @__PURE__ */ new WeakMap();
let $0 = () => null;
function z0(e) {
  return mu.has(e) || mu.set(e, JSON.stringify(e)), mu.get(e);
}
function ok(e) {
  $0 = e;
}
function Il(e, t) {
  const n = z0(e);
  Ro.delete(n), Ro.set(n, t), Ro.size > ik && Ro.delete(Ro.keys().next().value);
}
function yn(e, t) {
  var a;
  const n = e ? $0(e) : null;
  if (!n) return !0;
  const r = L0(e);
  let o = Ro.get(z0(n));
  if (o)
    Il(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((l) => V0.includes(l == null ? void 0 : l.name)))) return !0;
    Il(n, r), o = r;
  }
  return tk[t].every((l) => o[l] === r[l]);
}
const El = /* @__PURE__ */ new WeakSet();
async function tf(e, t) {
  if (El.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && El.add(e), n.ok && r !== void 0 ? r : null;
}
function j0(e, t) {
  var a, l, u, d, b;
  const n = (u = (l = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : l.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = R0(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((g) => V0.includes(g == null ? void 0 : g.name))) ? null : { output: o, inputs: rk(n, t) };
}
const nl = /* @__PURE__ */ new Map();
function ak(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && nl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await tf(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const l = j0(o, a);
        l && Il(l.output, l.inputs);
      }
    });
}
const sk = 5;
function lk(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${sk}`, r = tf(e, `/jobs?${n}`).then((l) => (l == null ? void 0 : l.jobs) || []), o = /* @__PURE__ */ new Map(), a = (l) => (o.has(l) || o.set(l, tf(e, `/jobs/${encodeURIComponent(l)}`)), o.get(l));
  return {
    async lastNodeOutput(l, u) {
      var b, g, _, x;
      const d = String(l.id);
      for (const { id: N } of await r) {
        if (!u()) return null;
        const S = await a(N);
        if ((b = S == null ? void 0 : S.outputs) != null && b[d])
          return ((x = (_ = (g = S.workflow) == null ? void 0 : g.prompt) == null ? void 0 : _[d]) == null ? void 0 : x.class_type) !== l.comfyClass ? null : j0(S, d);
      }
      return null;
    }
  };
}
function ck(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, l;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((l = o.changeTracker) == null ? void 0 : l.nodeOutputs);
  });
}
let Co = null;
async function uk(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || El.has(n) || (u = nl.get(o)) != null && u.has(r) || ck(t)) return null;
  (Co == null ? void 0 : Co.workflowId) !== o && (Co = { workflowId: o, history: lk(n, o) }, queueMicrotask(() => {
    Co = null;
  }));
  const l = await Co.history.lastNodeOutput(e, a);
  return a() ? l ? (Il(l.output, l.inputs), t.nodeOutputs[r] = l.output, l.output) : (El.has(n) || nl.set(o, (nl.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Xp(e, t, n, r = Ii) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((l == null ? void 0 : l.name) || ""));
}
const qp = /\.(mp4|webm|mov|m4v|mkv)$/i;
function rl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return qp.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return qp.test(String((e == null ? void 0 : e.filename) || ""));
}
const gu = /* @__PURE__ */ new WeakMap();
function fk(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function nf(e) {
  return fk(e) ? (gu.has(e) || gu.set(e, Math.random().toString(36).slice(2, 10)), gu.get(e)) : "run";
}
function H0(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function dk(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, l) => {
    for (const u of l) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, g) => g)));
    }
  };
  return o(e, t), r;
}
function ed(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (a) => String((a == null ? void 0 : a.src) || (a == null ? void 0 : a.url) || a || "").trim();
  for (const a of t) {
    const l = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[a], e == null ? void 0 : e[a]];
    for (const u of l)
      if (Array.isArray(u))
        for (const d of u) {
          const b = r(d);
          if (b && (/\.mp4(\?|$)/i.test(b) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return b;
        }
  }
  return "";
}
function hk({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var F;
  const r = ((F = e == null ? void 0 : e.createElement) == null ? void 0 : F.call(e, "video")) || null;
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let a = !1, l = 0;
  const u = typeof r.requestVideoFrameCallback == "function", d = () => {
    a || !u || l || r.paused || r.ended || (l = r.requestVideoFrameCallback(() => {
      l = 0, !a && (o(), d());
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
  }, g = () => o(), _ = () => {
    o(), d();
  }, x = () => o();
  let N = !1;
  const S = () => {
    N = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", g), r.addEventListener("play", _), r.addEventListener("pause", x), r.addEventListener("error", S), r.src = t, r.load(), { video: r, destroy: () => {
    var $, K;
    a || (a = !0, l && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(l), l = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", g), r.removeEventListener("play", _), r.removeEventListener("pause", x), r.removeEventListener("error", S), r.pause(), ($ = r.removeAttribute) == null || $.call(r, "src"), (K = r.load) == null || K.call(r));
  }, failed: () => N };
}
function zi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function pk(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Jp(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const l = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = l ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(l.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = pk(e == null ? void 0 : e.graph, n)), r;
}
function mk(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function gk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function yk(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function G0({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const V = String(O[0] || "").trim();
      if (V)
        return zi(t, {
          filename: V,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const H of O) {
        const Q = o(H);
        if (Q) return Q;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : zi(t, O);
  }, a = (O) => {
    if (!O || typeof O != "object") return "";
    const V = String(O.type || "").trim().toLowerCase();
    if (V === "dataurl") return String(O.value || "");
    if (V !== "comfy_image") return "";
    const H = String(O.filename || "").trim();
    return H ? zi(t, {
      filename: H,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, l = (O) => {
    const V = e == null ? void 0 : e.nodeOutputs;
    if (!V || O == null) return null;
    const H = String(O);
    return V instanceof Map ? V.get(O) || V.get(H) || V.get(Number(H)) || null : V[O] || V[H] || null;
  }, u = (O, V) => {
    var Q;
    const H = l(O == null ? void 0 : O.id);
    return Array.isArray((Q = H == null ? void 0 : H.ui) == null ? void 0 : Q[V]) ? H.ui[V] : Array.isArray(H == null ? void 0 : H[V]) ? H[V] : [];
  }, d = (O, V) => {
    const H = l(O == null ? void 0 : O.id);
    return H != null && H.ui && Object.prototype.hasOwnProperty.call(H.ui, V) ? H.ui[V] : H && Object.prototype.hasOwnProperty.call(H, V) ? H[V] : null;
  }, b = (O, V) => {
    const H = d(O, "pano_sticker_input_state_hash"), Q = Array.isArray(H) ? H[0] : H;
    return String(Q ?? "").trim() || yk(V);
  }, g = (O) => {
    const V = [], H = /* @__PURE__ */ new Set();
    for (const Q of O || []) {
      const _e = o(Q);
      !_e || H.has(_e) || (H.add(_e), V.push(_e));
    }
    return V;
  }, _ = (O, V) => {
    var _e;
    const H = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && H.push(O.images), Array.isArray((_e = O == null ? void 0 : O.ui) == null ? void 0 : _e.images) && O.ui.images.length && H.push(O.ui.images);
    const Q = [];
    for (const D of H)
      V >= 0 && V < D.length && Q.push(D[V]), Q.push(...D);
    return Q;
  }, x = (O, V) => {
    var ee;
    const H = String(V || "").trim();
    if (!H) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : []).findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === H);
    if (_e < 0) return { src: "", sourceType: "", inputName: H };
    const D = O.graph ? O.getInputLink(_e) : null;
    if ((D == null ? void 0 : D.origin_id) == null) return { src: "", sourceType: "", inputName: H };
    const C = D.origin_id, se = Jp(O, _e, C);
    if (!se) return { src: "", sourceType: "", inputName: H };
    const le = Number(D.origin_slot ?? 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(se) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const Y = [];
      le >= 0 && le < fe.length && Y.push(fe[le]), Y.push(...fe);
      const Ie = g(Y.filter((Fe) => !rl(Fe)));
      if (Ie.length)
        return { src: Ie[0], srcCandidates: Ie, sourceType: "appNodeImageUrls", inputName: H };
    }
    const U = l((se == null ? void 0 : se.id) ?? C), X = g(_(U, le).filter((Y) => !rl(Y))).map((Y) => `${Y}&pano_src=${nf(U)}`);
    if (X.length)
      return { src: X[0], srcCandidates: X, sourceType: "nodeOutputs", inputName: H };
    const j = Array.isArray(se == null ? void 0 : se.imgs) ? se.imgs : [];
    if (j.length) {
      const Y = [];
      le >= 0 && le < j.length && Y.push(j[le]), Y.push(...j);
      const Ie = g(Y);
      if (Ie.length)
        return { src: Ie[0], srcCandidates: Ie, sourceType: "nodeImgs", inputName: H };
    }
    const A = (ee = se == null ? void 0 : se.widgets) == null ? void 0 : ee.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (A) {
      let Y = o(A.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (se.comfyClass === "LoadImage" || se.type === "LoadImage") && (Y = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`), Y) return { src: Y, sourceType: "widget", inputName: H };
    }
    return { src: "", sourceType: "", inputName: H };
  }, N = (O, V = []) => {
    var Q;
    const H = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [];
    for (const _e of V) {
      const D = H.findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === _e), C = D >= 0 && O.graph ? O.getInputLink(D) : null;
      if ((C == null ? void 0 : C.origin_id) == null) continue;
      const se = l(((Q = Jp(O, D, C.origin_id)) == null ? void 0 : Q.id) ?? C.origin_id), le = (Array.isArray(se == null ? void 0 : se.images) ? se.images : []).find(rl);
      return le ? `${zi(t, le)}&pano_src=${nf(se)}` : "";
    }
    return "";
  }, S = (O, V = []) => {
    const H = Array.isArray(V) ? V : [V];
    for (const Q of H) {
      const _e = x(O, Q);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, v = (O) => {
    const V = String(O || "").trim();
    if (!V) return [];
    if (mk(V)) return [V];
    const { filename: H, subfolder: Q } = gk(V);
    return H ? g([
      zi(t, { filename: H, subfolder: Q, type: "temp" }),
      zi(t, { filename: H, subfolder: Q, type: "output" }),
      zi(t, { filename: H, subfolder: Q, type: "input" }),
      V
    ]) : [V];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (O) => {
      var V, H;
      try {
        (H = (V = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : V.forEach) == null || H.call(V, (Q, _e, D) => {
          var C;
          Q != null && Q.img && ((C = r == null ? void 0 : r.isImageLoadFailed) != null && C.call(r, Q.img)) && D.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (O, V) => {
      var H;
      (H = O == null ? void 0 : O.delete) == null || H.call(O, `__ui__${String(V || "")}`);
    },
    linkedValue: (O, V) => {
      var C, se, le, fe;
      const H = String(V || ""), Q = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === H) : -1, _e = Q >= 0 && O.graph ? O.getInputLink(Q) : null;
      if (_e) {
        const U = l(_e.origin_id), X = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (C = U == null ? void 0 : U.data) == null ? void 0 : C.output,
          (se = U == null ? void 0 : U.data) == null ? void 0 : se.result,
          (le = U == null ? void 0 : U.ui) == null ? void 0 : le.output,
          (fe = U == null ? void 0 : U.ui) == null ? void 0 : fe.result
        ];
        for (const j of X) {
          if (!Array.isArray(j)) continue;
          const A = j[Number(_e.origin_slot || 0)];
          if (typeof A == "string" && A.trim()) return A;
        }
      }
      const D = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === H) : null;
      return String((D == null ? void 0 : D.value) || "");
    },
    linkedVideoFile: N,
    loadPreferredExactLinkedImage: (O, V = [], H = null, Q = "") => {
      var St;
      const _e = Array.isArray(V) ? V : [V], D = S(O, _e), se = (Array.isArray(D == null ? void 0 : D.srcCandidates) && D.srcCandidates.length ? D.srcCandidates : [D == null ? void 0 : D.src]).map((pt) => String(pt || "").trim()).filter(Boolean);
      if (!se.length) return null;
      const le = g(se.flatMap((pt) => v(pt)));
      if (!le.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const fe = String(Q || _e.join("|") || "image_exact"), U = se.join(`
`), X = O.__panoLinkedInputImageCache.get(fe);
      if (X && X.srcRaw === U && X.img) return X.img;
      const j = n || globalThis.Image;
      if (typeof j != "function") return null;
      const A = new j();
      (St = r == null ? void 0 : r.markImageLoading) == null || St.call(r, A, U);
      const ee = { srcRaw: U, resolvedSrc: "", img: A };
      O.__panoLinkedInputImageCache.set(fe, ee);
      let Y = -1;
      const Ie = (pt) => {
        var ln, it, Yn;
        pt === "ready" ? (ln = r == null ? void 0 : r.markImageReady) == null || ln.call(r, A, U) : (it = r == null ? void 0 : r.markImageFailed) == null || it.call(r, A, U), H == null || H(A), (Yn = O.setDirtyCanvas) == null || Yn.call(O, !0, !0);
      }, Fe = () => {
        if (Y += 1, Y >= le.length) {
          Ie("failed");
          return;
        }
        ee.resolvedSrc = le[Y], A.src = ee.resolvedSrc;
      };
      return A.onload = () => Ie("ready"), A.onerror = () => {
        if (Y + 1 < le.length) {
          Fe();
          return;
        }
        Ie("failed");
      }, Fe(), A;
    },
    output: l,
    resolvePreferredExactLinkedSource: S,
    source: o,
    uiImage: (O, V, H, Q = null) => {
      var U, X, j;
      const _e = u(O, V)[0] || null, D = o(_e);
      if (!D) return null;
      const C = `__ui__${V}`, se = (U = H == null ? void 0 : H.get) == null ? void 0 : U.call(H, C);
      if (se && se.__panoSrc === D) return se;
      const le = n || globalThis.Image;
      if (typeof le != "function") return null;
      const fe = new le();
      return fe.__panoSrc = D, (X = r == null ? void 0 : r.markImageLoading) == null || X.call(r, fe, D), fe.onload = () => {
        var A;
        (A = r == null ? void 0 : r.markImageReady) == null || A.call(r, fe, D), Q == null || Q(fe);
      }, fe.onerror = () => {
        var A;
        (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, fe, D), Q == null || Q(fe);
      }, fe.src = D, (j = H == null ? void 0 : H.set) == null || j.call(H, C, fe), fe;
    },
    uiList: u,
    uiValue: d
  };
}
const bk = 1e-3;
function K0(e, t, n, r) {
  if (!ki(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const l = Math.floor(o + 0.5);
    return l >= 0 && l < r.frames ? (l + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(bk / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function B0(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function vk(e, t) {
  return Math.floor(e * t.fps);
}
function W0(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Zp = 4;
function U0({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(l) {
    return r.has(l) || r.set(l, e(n[l], t)), r.get(l);
  }
  return {
    picture(l, u, d, b) {
      if ((l.length !== n.length || l.some((x, N) => x !== n[N])) && (n = l, r.clear(), o = null), u === null) return null;
      const g = vk(u, d);
      for (let x = g; x < Math.min(n.length, g + Zp + 1); x += 1) a(x);
      for (const x of r.keys())
        (x < g || x > g + Zp) && x !== o && r.delete(x);
      const _ = r.get(g);
      return _ != null && _.complete && _.naturalWidth > 0 && (o !== null && o !== g && r.delete(o), o = g), o === null ? b : r.get(o);
    }
  };
}
function Y0({
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
  let l = null, u = !1, d = !1;
  const b = () => l || e(), g = () => a(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (g(), this.model());
    },
    beginGesture() {
      return d || l ? !1 : (l = e(), u = !1, g(), !0);
    },
    updateGesture(_) {
      if (d) return !1;
      l || this.beginGesture();
      const x = t(l, _);
      return x.changed ? (l = x.state, u = !0, r(l), g(), !0) : !1;
    },
    hasGestureChanges() {
      return l != null && u;
    },
    commitGesture() {
      if (d || !l) return !1;
      const _ = u;
      return _ && o(l), l = null, u = !1, r(null), g(), _;
    },
    cancelGesture() {
      return d || !l ? !1 : (l = null, u = !1, r(null), g(), !0);
    },
    apply(_) {
      if (d) return !1;
      l && this.commitGesture();
      const x = t(e(), _);
      return x.changed ? (o(x.state), g(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const _ = l != null;
      l = null, u = !1, _ && r(null);
    }
  };
}
const il = "sticker_image_1", X0 = "external_image", ta = 0;
function Uo(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function yu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Ai(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function rf(e, t = ta) {
  return (e == null ? void 0 : e.version) !== 2 ? Ai(e) : Ai(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: ec(n, t).active,
    external: n.source.kind === "port",
    ...qf(n, t)
  }));
}
function td(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Ai(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function q0(e) {
  return String((e == null ? void 0 : e.id) || "") === il || String((e == null ? void 0 : e.source_kind) || "") === X0;
}
function nd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : q0(t);
}
const J0 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Z0(e) {
  return !q0(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(J0.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function Q0(e) {
  const t = Z0(e);
  return t ? J0.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function ey(e, t = {}) {
  var R, O, V;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((H) => String((H == null ? void 0 : H.id) || "") === il);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const H = String(((R = e.active) == null ? void 0 : R.selected_sticker_id) || "") === il;
    return {
      state: {
        ...e,
        stickers: n.filter((Q, _e) => _e !== r),
        active: H ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), l = r >= 0 ? n[r] : null, u = !l || Number(l.source_link_id ?? -1) !== o || String(l.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), g = d > 0 && b > 0, _ = Math.max(1, d), x = Math.max(1, b), N = t.pose && typeof t.pose == "object" ? t.pose : {}, S = u ? N.hFOV_deg || (l == null ? void 0 : l.hFOV_deg) || 30 : (l == null ? void 0 : l.hFOV_deg) || N.hFOV_deg || 30, v = Math.min(179, Math.max(0.1, Number(S)));
  if (!u) {
    if (!g) return { state: e, changed: !1 };
    const H = Uo(v, _, x), Q = Number(((O = l == null ? void 0 : l.initial_pose) == null ? void 0 : O.hFOV_deg) ?? v), _e = Uo(Q, _, x), D = Number(((V = l == null ? void 0 : l.initial_pose) == null ? void 0 : V.vFOV_deg) ?? _e);
    return Math.abs(Number((l == null ? void 0 : l.vFOV_deg) || 0) - H) <= 1e-6 && Math.abs(D - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((C, se) => se === r ? {
          ...C,
          vFOV_deg: H,
          initial_pose: C.initial_pose && typeof C.initial_pose == "object" ? { ...C.initial_pose, vFOV_deg: _e } : C.initial_pose
        } : C)
      },
      changed: !0
    };
  }
  const F = n.reduce((H, Q) => Math.max(H, Number((Q == null ? void 0 : Q.z_index) || 0)), -1), $ = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: v,
    vFOV_deg: g ? Uo(v, _, x) : Number(N.vFOV_deg || (l == null ? void 0 : l.vFOV_deg) || v),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, K = {
    ...l || {},
    id: il,
    source_kind: X0,
    source_link_id: o,
    source_state_hash: a,
    ...$,
    initial_pose: { ...$ },
    visible: !0,
    z_index: F + 1
  }, E = r >= 0 ? n.map((H, Q) => Q === r ? K : H) : [...n, K];
  return { state: { ...e, stickers: E }, changed: !0 };
}
function Qp(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const _k = ["IMAGE", "VIDEO"];
function em(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => _k.includes(n)) ? "2d" : null;
}
function wk(e, t) {
  var o, a, l, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((g) => (g == null ? void 0 : g.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? em(r.type) ?? em((b = (d = (u = (l = (a = e.graph).getNodeById) == null ? void 0 : l.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function ty(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Qp(e, "sticker"),
    awaitingPose: !t && (Qp(e, "sticker_state") || wk(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function tm(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return so({ version: 2, stickers: [n] }).stickers[0];
}
function ny(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var v;
  const l = e.stickers.findIndex((F) => nd(e, F)), u = l >= 0 ? e.stickers[l] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const F = ((v = e.active) == null ? void 0 : v.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter(($, K) => K !== l),
        active: F ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const F = { ...tm(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map(($, K) => K === l ? F : $) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const F = [u.size.value, ...u.size.keyframes.map((E) => E.value)], $ = F.map((E) => Uo(E.hFOV_deg, o, a));
    if (F.every((E, R) => Math.abs(E.vFOV_deg - $[R]) <= 1e-6)) return { state: e, changed: !1 };
    const K = {
      value: { ...u.size.value, vFOV_deg: $[0] },
      keyframes: u.size.keyframes.map((E, R) => ({ ...E, value: { ...E.value, vFOV_deg: $[R + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((E, R) => R === l ? { ...E, size: K } : E) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((F) => F.id));
  let g = 1;
  for (; b.has(`sticker_${g}`); ) g += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, tm(`sticker_${g}`, r)] }, changed: !0 };
  const _ = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = (F) => d ? Uo(F, o, a) : F, N = Jf(`sticker_${g}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: _,
    vFOV_deg: x(_)
  }, Ai(e).reduce((F, $) => Math.max(F, $.z_index), -1) + 1), S = (r == null ? void 0 : r.keyframes) ?? {};
  return N.direction.keyframes = S.direction ?? [], N.roll.keyframes = S.roll ?? [], N.size.keyframes = (S.size ?? []).map((F) => ({ ...F, value: { ...F.value, vFOV_deg: x(F.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, N] }, changed: !0 };
}
function rd(e) {
  const t = Ai(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: yu(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: yu(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: yu(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, l) => a.z_index - l.z_index);
}
function ry(e) {
  const t = td(e), n = nd(e, t), r = Ai(e).some((u) => u && u.visible !== !1), o = rd(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, l = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Q0(t),
    selectedId: t ? String(t.id || "") : null,
    locked: l,
    canDelete: !!t && !l,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function xk(e) {
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
function nm(e, t) {
  const n = td(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = xk(e), o = String(n.id || ""), a = rd(r), l = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (l < 0) return { state: e, changed: !1 };
  if (t === "front" && l === a.length - 1 || t === "back" && l === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(l, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function Sk(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function kk(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return ey(e, t.value);
  if (t.type === "sync-port") return ny(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), l = String(o.assetId || "").trim();
    if (!a || !l || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = rd(e).reduce((x, N) => Math.max(x, Number(N.z_index || 0)), -1), b = 30, g = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: Uo(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Jf(a, el(o.asset), g, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const _ = { id: a, asset_id: l, ...g, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [l]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], _],
        active: { ...e.active || {}, selected_sticker_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !Ai(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = td(e);
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
    const o = Z0(n);
    return !o || !Q0(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return nm(e, "front");
  if (t.type === "send-back") return nm(e, "back");
  if (t.type === "delete-selected") {
    if (nd(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Ai({ ...e, stickers: o })[0], l = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: l }
    };
    return e.version !== 2 && (u.assets = Sk(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], l = e.version === 2 ? qf(n, ta) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(l[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = xS(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return b0(b, ta, d), { state: { ...e, stickers: e.stickers.map((g) => g === n ? b : g) }, changed: !0 };
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
function Mk(e = {}) {
  return Y0({
    ...e,
    reduce: kk,
    projectModel: ry
  });
}
const of = 2;
function Bi(e, t) {
  return Math.floor(e * t + 0.5);
}
function Nk(e, t) {
  return Math.floor(e * t + 1e-3);
}
function iy({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: l, onChange: u }) {
  let d = 0, b = !1, g = !1, _ = { name: "idle" }, x = [];
  const N = () => b && !g, S = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const ee of x) ee();
    x = [];
  }
  function F(ee, Y = {}) {
    return v(), _ = { name: ee, ...Y }, u(), _;
  }
  function $(ee, Y, Ie) {
    const Fe = () => {
      _ === ee && Ie();
    };
    e.addEventListener(Y, Fe), x.push(() => e.removeEventListener(Y, Fe));
  }
  function K(ee, Y) {
    let Ie = t.requestFrame(function Fe(St) {
      _ === ee && (Y(St), _ === ee && (Ie = t.requestFrame(Fe)));
    });
    x.push(() => t.cancelFrame(Ie));
  }
  function E(ee) {
    d = ee, a(d);
  }
  function R() {
    return F(g ? "error" : "idle");
  }
  function O() {
    g = !0, R();
  }
  function V() {
    const { seekable: ee } = e, Y = ee != null && ee.length ? ee.end(ee.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Y) ? Y : 1 / 0));
  }
  function H(ee) {
    if (!N()) return ee === "play" ? se() : R();
    if (e.readyState < of) {
      const Y = F("loading", { then: ee });
      return $(Y, "loadeddata", () => H(Y.then)), $(Y, "error", O), Y;
    }
    return ee === "play" && d / n() >= Number(e.duration) ? se() : Q(ee, !1);
  }
  function Q(ee, Y) {
    const Ie = V();
    if (!e.ended && Bi(Number(e.currentTime), n()) === Bi(Ie, n())) return _e(ee);
    const Fe = F("seeking", { then: ee, frame: d, retried: Y });
    return $(Fe, "seeked", () => {
      const St = Bi(Number(e.currentTime), n()) === Bi(V(), n()), pt = d === Fe.frame;
      St || pt && Fe.retried ? _e(Fe.then) : Q(Fe.then, pt);
    }), $(Fe, "error", O), e.currentTime = Ie, Fe;
  }
  function _e(ee) {
    return ee === "play" ? D() : (l(), R());
  }
  function D() {
    const ee = F("playingVideo", { shown: !1 });
    if ($(ee, "pause", () => e.ended ? C() : U()), $(ee, "ended", C), $(ee, "error", O), o() && Bi(Number(e.duration), n()) >= r()) {
      const Ie = e.loop;
      e.loop = !0, x.push(() => {
        e.loop = Ie;
      });
    }
    const Y = (Ie, Fe) => {
      Fe && !ee.shown && (ee.shown = !0, u()), le(Bi(Ie, n()));
    };
    if (S()) {
      let Ie = e.requestVideoFrameCallback(function Fe(St, pt) {
        _ === ee && (Y(Number(pt.mediaTime), !0), _ === ee && (Ie = e.requestVideoFrameCallback(Fe)));
      });
      x.push(() => {
        var Fe;
        return (Fe = e.cancelVideoFrameCallback) == null ? void 0 : Fe.call(e, Ie);
      });
    } else
      K(ee, () => Y(Number(e.currentTime), e.readyState >= of));
    return Promise.resolve(e.play()).catch(() => {
      _ === ee && U();
    }), ee;
  }
  function C() {
    l(), se();
  }
  function se() {
    const ee = F("playingClock", { startTs: t.now(), startFrame: d });
    return K(ee, (Y) => le(ee.startFrame + Math.floor((Y - ee.startTs) / 1e3 * n()))), ee;
  }
  function le(ee) {
    if (ee < r()) {
      E(ee);
      return;
    }
    if (!o()) {
      fe(r() - 1);
      return;
    }
    _.name === "playingVideo" && (v(), e.pause()), E(0), H("play");
  }
  function fe(ee) {
    _.name === "playingVideo" ? (v(), e.pause(), E(Math.max(0, ee)), l()) : E(Math.max(0, ee)), H("still");
  }
  function U() {
    if (_.name === "loading" || _.name === "seeking")
      _.then = "still", u();
    else if (_.name === "playingVideo") {
      v(), e.pause();
      const ee = Nk(Number(e.currentTime), n());
      E(Math.min(ee, r() - 1)), l(), d === ee ? R() : H("still");
    } else _.name === "playingClock" && fe(Math.min(d, r() - 1));
  }
  function X() {
    if (!A()) {
      if (d >= r() - 1 && E(0), _.name === "loading" || _.name === "seeking") {
        _.then = "play", u();
        return;
      }
      H("play");
    }
  }
  function j(ee) {
    const Y = Math.max(0, Math.round(ee));
    if (_.name === "loading" || _.name === "seeking") {
      _.then = "still", E(Y), u();
      return;
    }
    _.name === "playingVideo" && (v(), e.pause()), E(Y), H("still");
  }
  function A() {
    return _.name === "playingVideo" || _.name === "playingClock" || _.then === "play";
  }
  return {
    get frame() {
      return d;
    },
    get state() {
      return _.name;
    },
    get playing() {
      return A();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return _.name === "playingVideo" || _.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return _.name === "playingVideo" && _.shown;
    },
    play: X,
    stop: U,
    seek: j,
    toggle() {
      A() ? U() : X();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(ee) {
      v(), b = !!ee, g = !1, H("still");
    },
    dispose() {
      v(), b = !1, _ = { name: "idle" };
    }
  };
}
function oy({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, l = null, u = null, d = !1;
  function b(v) {
    u = v, t();
  }
  function g(v) {
    l = v, e.currentTime = v;
  }
  function _() {
    const v = d;
    x(), d !== v && n();
  }
  function x() {
    if (!r || o || e.readyState < of) return;
    const { time: v, playing: F, fps: $ } = a;
    if (v === null) {
      e.pause(), d = !1;
      return;
    }
    if (F) {
      if (l !== null) return;
      const K = Number(e.duration), E = Number.isFinite(K) ? Math.min(v, K) : v, R = Math.abs(Number(e.currentTime) - E) > 1.5 / $;
      if (e.ended && !R) return;
      R && g(E), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(l !== null || u === v) && (Number(e.currentTime) === v ? b(v) : g(v));
  }
  const N = {
    loadeddata: _,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: _,
    seeked: () => {
      const v = l;
      l = null, !a.playing && v === a.time ? b(v) : _();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [v, F] of Object.entries(N)) e.addEventListener(v, F);
  function S(v) {
    r = v, o = !1, l = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: v = "", time: F = null, playing: $ = !1, fps: K }) {
      v !== r && (S(v), n()), a = { time: F, playing: $, fps: K }, _();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(v, F) {
      return !r || o ? F : a.time === null ? null : a.playing && d ? e : u === null ? F : v;
    },
    dispose() {
      for (const [v, F] of Object.entries(N)) e.removeEventListener(v, F);
      S("");
    }
  };
}
function Pk(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function Ak({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: l, onStickerCapture: u, onChange: d }) {
  let b = "", g = "", _ = 0;
  const x = /* @__PURE__ */ new Set();
  let N = null, S = null;
  const v = () => o().timeline.fps, F = (D) => D.stickers.find((C) => C.source.kind === "port"), $ = () => {
    const D = o(), C = F(D);
    return p0(D, {
      minimum: Math.round(v() * 5),
      frames: Math.max(
        b ? Math.round(_ * v()) : 0,
        N && C ? B0(C.clip, v(), N.meta) : 0
      )
    });
  }, K = iy({
    video: e,
    clock: r,
    fps: v,
    span: $,
    loop: () => !0,
    onFrame: a,
    onCapture: l,
    onChange: d
  }), E = () => {
    g === b && Number.isFinite(e.duration) && (_ = e.duration);
  }, R = () => {
    g && (x.add(g), d());
  }, O = oy({ video: t, onCapture: u, onChange: d }), V = U0({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", E), e.addEventListener("error", R);
  function H(D) {
    D !== g && (g = D, e.pause(), D ? e.src = D : e.removeAttribute("src"), e.load(), K.setSource(!!D));
  }
  function Q() {
    K.playing && K.stop();
  }
  function _e(D) {
    const C = F(D);
    S = N && C ? K0(C.clip, K.frame, D.timeline.fps, N.meta) : null, O.follow({
      src: (N == null ? void 0 : N.src) || "",
      time: S,
      playing: K.advancing,
      fps: D.timeline.fps
    });
  }
  return {
    get frame() {
      return K.frame;
    },
    get playing() {
      return K.playing;
    },
    get showsVideo() {
      return K.showsVideo;
    },
    get source() {
      return g;
    },
    pause: Q,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return N;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(D, C) {
      return N != null && N.frames ? V.picture(N.frames, S, N.meta, C) : O.picture(D, C);
    },
    toggle() {
      K.playing ? K.stop() : K.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: D, sources: C, state: se, sticker: le = null }) {
      if (N = D ? le : null, !D)
        return Q(), H(""), _e(se), !1;
      for (const A of x)
        C.includes(A) || x.delete(A);
      const fe = C.find((A) => A && !x.has(A)) || "", U = fe !== b;
      U && (b = fe, _ = 0), H(b);
      const X = Qu(se) || !!b && K.state !== "error" || !!N;
      return X || Q(), (U || !X || !K.playing && K.frame >= $()) && K.frame !== ta && K.seek(ta), _e(se), X;
    },
    dispose() {
      K.dispose(), O.dispose(), e.removeEventListener("loadedmetadata", E), e.removeEventListener("error", R), e.pause(), e.removeAttribute("src"), e.load(), g = "";
    }
  };
}
const Ol = Math.PI / 180, Er = 180 / Math.PI, Ck = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), Ik = 260;
function rm(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function ay(e, t) {
  return t ? ay(t, e % t) : e;
}
function Ek(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), l = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = ay(l, u) || 1;
  return `${Math.round(l / d)}:${Math.round(u / d)}`;
}
function Za(e, t) {
  const n = rm(e), r = rm(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: Ek(n, r) };
}
function oo(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function sy(e) {
  const t = oo(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Zr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function id(e, t, n = Ck) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (F, $, K) => {
    const E = F + $, R = Math.max(0, K - 1), O = E > R && E > 0 ? R / E : 1;
    return [F * O, $ * O];
  }, [g, _] = b(d, l, r), [x, N] = b(a, u, o), S = {
    x: g,
    y: x,
    w: Math.max(1, r - g - _),
    h: Math.max(1, o - x - N)
  }, v = jf(S, t);
  return {
    x: S.x + (S.w - v.width) * 0.5,
    y: S.y + (S.h - v.height) * 0.5,
    w: v.width,
    h: v.height,
    safeRect: S
  };
}
function Ok(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = id({ width: n, height: r }, 1), a = J(Number((e == null ? void 0 : e.fov) || 100), 1, 179), l = n / (2 * Math.tan(a * Ol * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = Zg(d, Ug(
    { x: n * 0.5, y: r * 0.5 },
    l,
    u
  )), g = Fk(b, ia(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), _ = Hf({ width: o.w, height: o.h }, l);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: _.hFOV_deg
  };
}
function ly(e) {
  return {
    yaw: Ht(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Er),
    pitch: J(Math.asin(J(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Er, -89.9, 89.9)
  };
}
function Fk(e, t) {
  const n = ly(e), r = ia(n.yaw, n.pitch, 0), o = su(t, e), a = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * o,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * o,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * o
  }, l = Math.hypot(a.x, a.y, a.z);
  if (!(l > 1e-8)) return { ...n, roll: 0 };
  const u = {
    x: a.x / l,
    y: a.y / l,
    z: a.z / l
  };
  return {
    ...n,
    roll: Ql(Math.atan2(
      su(u, r.up),
      su(u, r.right)
    ) * Er)
  };
}
function cy(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = id({ width: n, height: r }, no(e)), a = to(o, e), l = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = Zg(e, Ug(
    l,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = ly(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: J(2 * Math.atan(n / (2 * a)) * Er, 1, 179)
  };
}
function Tk(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, l = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = to(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(l, o - l) * 2
  }, { halfW: b, halfH: g } = Gf(d, u), _ = {
    x: a - b,
    y: l - g,
    w: b * 2,
    h: g * 2
  }, x = _.x <= 0 && _.y <= 0 && _.x + _.w >= r && _.y + _.h >= o, N = r / o, S = Math.tan(Wu * Ol), v = N >= 1 ? S : S * N, F = N >= 1 ? S / N : S;
  return {
    focalPx: u,
    rect: _,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * Er,
      vFOV_deg: 2 * Math.atan(g / u) * Er
    },
    fallback: x ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(v) * Er,
        vFOV_deg: 2 * Math.atan(F) * Er
      }
    }
  };
}
function Io(e, t) {
  const n = oo(e);
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
function Dk(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const l = to(n, e);
    return Hf(jf(n, t), l);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Zs(a, t) };
}
function im(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Za(t, n);
  if (!a) return e;
  const l = no(e) >= 1;
  r && a.ratio >= 1 !== l && (a = Za(a.height, a.width));
  const u = Dk(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function uy(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (oo(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = Xg({
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
    const r = oo(e);
    if (!r) return { state: e, changed: !1 };
    const o = (Array.isArray(e.shots) ? e.shots : []).filter((l) => l !== r), a = ((n = o[0]) == null ? void 0 : n.id) == null ? null : String(o[0].id);
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
    return Io(e, (r) => im(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Io(e, (r) => {
      const a = String(Zr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), l = a ? Za(a[1], a[2]) : Za(no(r), 1);
      return l ? im(r, l.height, l.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Io(e, (o) => {
      const a = Ql(r), l = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(l - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Io(e, (r) => {
    const o = qg(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? Io(e, (r) => {
    const o = Jg(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? Io(e, (r) => {
    const o = hy(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function fy({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: o = !1,
  allowAlt: a = !1,
  deadZoneRatio: l = 0.05
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
  }, g = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (u === "shift" && g < Math.min(d.w, d.h) * l) return null;
  const _ = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: u,
    frame: d,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: _,
    accumulatedRad: 0
  };
}
function dy(e, t, n = {}) {
  var l, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((l = e.center) == null ? void 0 : l.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + Bg(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: Wg(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function hy(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, l = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ol, d = Math.cos(u), b = Math.sin(u), g = a / n, _ = -l / n, x = g * d - _ * b, N = g * b + _ * d, S = Number(e.pitch_deg || 0) * Ol, v = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(x) / v * Er),
    pitch_deg: J(Number(e.pitch_deg || 0) - Math.atan(N) * Er, -90, 90)
  };
}
function Lk({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Y0({
    readState: e,
    reduce: uy,
    projectModel: sy,
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
  space: "space",
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
  keyframe: "keyframe"
}), Rk = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, Vk = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: Rk(t[2])
})), $k = {
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
  space: { name: "3d-cube-sphere", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 17.6l-2 -1.1v-2.5' /><path d='M4 10v-2.5l2 -1.1' /><path d='M10 4.1l2 -1.1l2 1.1' /><path d='M18 6.4l2 1.1v2.5' /><path d='M20 14v2.5l-2 1.12' /><path d='M14 19.9l-2 1.1l-2 -1.1' /><path d='M12 12l2 -1.1' /><path d='M18 8.6l2 -1.1' /><path d='M12 12l0 2.5' /><path d='M12 18.5l0 2.5' /><path d='M12 12l-2 -1.12' /><path d='M6 8.6l-2 -1.1' />" },
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
  keyframe: { name: "keyframe", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248' />" }
}, om = Object.fromEntries(
  Object.entries($k).map(([e, t]) => [e, {
    name: t.name,
    elements: Vk(t.body)
  }])
), Ct = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ut(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(om, r) ? om[r] : null;
    });
    return (r, o) => n.value ? (oe(), ce("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: at(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (oe(!0), ce(Ye, null, xt(n.value.elements, (a, l) => (oe(), ce(Ye, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${l}`
      }, [
        a.tag === "path" ? (oe(), ce("path", Si({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (oe(), ce("circle", Si({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (oe(), ce("rect", Si({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (oe(), ce("line", Si({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (oe(), ce("polyline", Si({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (oe(), ce("polygon", Si({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ct("", !0)
      ], 64))), 128))
    ], 2)) : ct("", !0);
  }
}, sn = {
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
    const t = e, n = ut(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (oe(), $r(O_(e.tag), Si({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: fg(() => [
        De(Ct, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, zk = ["aria-expanded", "disabled"], jk = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Hk = ["data-aspect", "disabled", "onClick"], Gk = { class: "pano-cutout-aspect-custom" }, Kk = ["disabled"], Bk = ["disabled"], Wk = ["data-custom-width", "data-custom-height", "disabled"], py = {
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
    ]), a = /* @__PURE__ */ Kt("1"), l = /* @__PURE__ */ Kt("1"), u = /* @__PURE__ */ Kt(null), d = ut(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = ut(() => {
      const v = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], F = String(n.model.aspectLabel || "");
      return v.length ? v.map(($) => {
        const K = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.value) || ""), E = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.label) || K);
        return {
          ...typeof $ == "object" && $ ? $ : {},
          value: K,
          label: E,
          active: F ? K === F : ($ == null ? void 0 : $.active) === !0
        };
      }) : o.map(($) => ({
        ...$,
        active: $.value === F
      }));
    }), g = ut(() => {
      var F;
      const v = String(n.model.aspectLabel || "").trim();
      return v || String(((F = b.value.find(($) => $.active === !0)) == null ? void 0 : F.label) || "Aspect");
    });
    Qi(g, (v) => {
      const F = String(v || "").match(/^([0-9.]+):([0-9.]+)$/);
      F && (a.value = F[1], l.value = F[2]);
    }, { immediate: !0 });
    function _(v) {
      r("action", v);
    }
    function x(v) {
      var F;
      n.model.aspectOpen === !0 && ((F = u.value) != null && F.contains(v.target) || _({ type: "close-aspect" }));
    }
    Xl(() => {
      document.addEventListener("pointerdown", x, !0);
    }), rs(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function N(v) {
      const [F, $] = String(v.value || "").split(":");
      _({
        type: "set-aspect",
        width: F,
        height: $,
        preserveOrientation: !0
      });
    }
    function S() {
      _({
        type: "set-aspect",
        width: a.value,
        height: l.value,
        preserveOrientation: !1
      });
    }
    return (v, F) => (oe(), ce("div", {
      ref_key: "rootElement",
      ref: u,
      class: at(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (oe(), $r(sn, {
        key: 0,
        icon: e.model.aspectIcon || Qe(Pe).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: F[0] || (F[0] = ($) => _({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (oe(), ce("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: F[1] || (F[1] = ($) => _({ type: "toggle-aspect" }))
      }, [
        De(Ct, {
          icon: e.model.aspectIcon || Qe(Pe).aspect
        }, null, 8, ["icon"]),
        B("span", null, rt(g.value), 1),
        De(Ct, {
          icon: Qe(Pe).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, zk)),
      ii(B("div", jk, [
        (oe(!0), ce(Ye, null, xt(b.value, ($) => (oe(), ce("button", {
          key: $.value,
          class: at(["pano-btn pano-frame-aspect-choice", { active: $.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": $.value,
          disabled: d.value,
          onClick: (K) => N($)
        }, rt($.label), 11, Hk))), 128)),
        B("div", Gk, [
          ii(B("input", {
            "onUpdate:modelValue": F[2] || (F[2] = ($) => a.value = $),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, Kk), [
            [kp, a.value]
          ]),
          F[4] || (F[4] = B("span", { "aria-hidden": "true" }, ":", -1)),
          ii(B("input", {
            "onUpdate:modelValue": F[3] || (F[3] = ($) => l.value = $),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, Bk), [
            [kp, l.value]
          ]),
          B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": l.value,
            disabled: d.value,
            onClick: S
          }, "Apply", 8, Wk)
        ])
      ], 512), [
        [ao, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Uk = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Yk = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Kt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (oe(), ce("div", {
      class: at(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = At(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = At(() => {
      }, ["stop"]))
    }, [
      De(sn, {
        icon: Qe(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = At((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", Uk, [
        o[3] || (o[3] = B("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (oe(!0), ce(Ye, null, xt(Qe(n), (a) => (oe(), ce("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          B("kbd", null, rt(a[0]), 1),
          B("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Xk = {
  class: "pano-view-unavailable",
  role: "status"
}, od = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (oe(), ce("div", Xk, rt(Qe(O0)), 1));
  }
}, qk = { class: "pano-cutout-node-surface" }, Jk = ["title", "disabled"], Zk = { class: "value" }, Qk = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, eM = {
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
    return (r, o) => (oe(), ce("div", qk, [
      B("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = At(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = At(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          De(Ct, {
            icon: Qe(Pe).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(sn, {
          icon: e.model.hasShot ? Qe(Pe).delete : Qe(Pe).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(py, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        B("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = At((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          De(Ct, {
            icon: Qe(Pe).roll
          }, null, 8, ["icon"]),
          B("span", Zk, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, Jk),
        De(sn, {
          icon: Qe(Pe).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        De(Yk)
      ], 32),
      e.model.hasShot === !1 ? (oe(), ce("div", Qk, " Choose a view · + Add Frame ")) : ct("", !0),
      e.model.viewUnavailable ? (oe(), $r(od, { key: 1 })) : ct("", !0)
    ]));
  }
}, my = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Kt(null);
    let a, l = !1;
    function u() {
      if (!l) return { active: !1, intent: void 0 };
      const _ = a;
      return a = void 0, l = !1, { active: !0, intent: _ };
    }
    function d(_) {
      const x = o.value;
      return x instanceof HTMLInputElement ? (a = _, l = !0, x.value = "", x.click(), !0) : !1;
    }
    function b(_) {
      var v, F;
      const { active: x, intent: N } = u();
      if (!x) return;
      const S = ((F = (v = _.target) == null ? void 0 : v.files) == null ? void 0 : F[0]) || null;
      if (S) {
        r("file-selected", { intent: N, file: S });
        return;
      }
      r("file-cancelled", { intent: N });
    }
    function g() {
      const { active: _, intent: x } = u();
      _ && r("file-cancelled", { intent: x });
    }
    return t({ open: d }), (_, x) => (oe(), ce("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: b,
      onCancel: g
    }, null, 544));
  }
}, tM = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, nM = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Kt(!1), n = Object.freeze([
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
    return (r, o) => (oe(), ce("div", {
      class: at(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = At(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = At(() => {
      }, ["stop"]))
    }, [
      De(sn, {
        icon: Qe(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = At((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", tM, [
        o[3] || (o[3] = B("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (oe(!0), ce(Ye, null, xt(Qe(n), (a) => (oe(), ce("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          B("kbd", null, rt(a[0]), 1),
          B("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, rM = { class: "pano-stickers-node-surface" }, iM = ["disabled"], oM = ["aria-label", "data-tip"], aM = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, sM = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, lM = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Kt(null);
    function r(l) {
      var u;
      (u = t.onAction) == null || u.call(t, l);
    }
    function o() {
      var l, u;
      (u = (l = n.value) == null ? void 0 : l.open) == null || u.call(l, "add");
    }
    function a(l) {
      r({ type: "add-image-file", file: (l == null ? void 0 : l.file) || null });
    }
    return (l, u) => (oe(), ce("div", rM, [
      B("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = At(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = At(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          De(Ct, {
            icon: Qe(Pe).fullscreen
          }, null, 8, ["icon"]),
          u[10] || (u[10] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          De(Ct, {
            icon: Qe(Pe).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = B("span", { class: "label" }, "Add Image", -1))
        ], 8, iM),
        De(sn, {
          icon: e.model.locked ? Qe(Pe).lock_closed : Qe(Pe).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        De(sn, {
          icon: Qe(Pe).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        De(sn, {
          icon: Qe(Pe).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        De(sn, {
          icon: e.model.isExternalSelection ? Qe(Pe).back_initial : Qe(Pe).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(nM)
      ], 32),
      e.model.playable === !0 ? (oe(), ce("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = At(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = At(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        De(Ct, {
          icon: e.model.playing ? Qe(Pe).pause : Qe(Pe).play
        }, null, 8, ["icon"])
      ], 40, oM)) : ct("", !0),
      e.model.hasStickers === !1 ? (oe(), ce("div", aM, " Add Image to place a sticker ")) : ct("", !0),
      e.model.dropActive === !0 ? (oe(), ce("div", sM, "Drop image to add")) : ct("", !0),
      De(my, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (oe(), $r(od, { key: 3 })) : ct("", !0)
    ]));
  }
}, am = 24;
function cM(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function sm(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function uM(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], l = t[o];
    a.y > e.y != l.y > e.y && e.x < (l.x - a.x) * (e.y - a.y) / (l.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function af(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => sm(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return sm(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : uM(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function ad(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function gy(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Na(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: J(n.x, -r, t.width + r),
    y: J(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function fM(e) {
  const t = ia(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(J(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Zt * 0.5),
    tanY: Math.tan(J(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Zt * 0.5)
  };
}
function ji(e, t, n) {
  return zf(_l(
    _l(e.centerDir, wl(e.right, t)),
    wl(e.up, n)
  ));
}
function sd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = fM(e), r = Na(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    ji(n, -n.tanX, n.tanY),
    ji(n, n.tanX, n.tanY),
    ji(n, n.tanX, -n.tanY),
    ji(n, -n.tanX, -n.tanY)
  ].map((x) => Na(x, t)), a = Array.from({ length: 4 }, (x, N) => {
    const S = [];
    for (let v = 0; v <= 28; v += 1) {
      const F = v / 28;
      let $, K;
      N === 0 ? ($ = -n.tanX + 2 * n.tanX * F, K = n.tanY) : N === 1 ? ($ = n.tanX, K = n.tanY - 2 * n.tanY * F) : N === 2 ? ($ = n.tanX - 2 * n.tanX * F, K = -n.tanY) : ($ = -n.tanX, K = -n.tanY + 2 * n.tanY * F);
      const E = Na(ji(n, $, K), t);
      E && S.push({ x: E.x, y: E.y });
    }
    return S;
  }), l = Na(ji(n, 0, n.tanY), t), u = Na(
    ji(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, l, u];
  if (d.some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    return { visible: !1 };
  if (!d.some((x) => x.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - l.x, g = u.y - l.y, _ = Math.hypot(b, g) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((x) => ({ x: x.x, y: x.y })),
    boundaryEdges: a,
    rotateStemBase: { x: l.x, y: l.y },
    rotateHandle: {
      x: l.x + b / _ * am,
      y: l.y + g / _ * am
    },
    visible: !0
  };
}
function lm(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((l) => l && l.visible !== !1).map((l) => ({ item: l, geometry: sd(l, r) })).filter((l) => l.geometry.visible).sort((l, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = l.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((l) => {
    var u;
    return String(((u = l.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const l = af(a.geometry, n);
    if (l.kind === "scale" || l.kind === "rotate") return { ...a, hit: l };
  }
  for (const l of o) {
    const u = af(l.geometry, n);
    if (u.kind !== "none") return { ...l, hit: u };
  }
  return null;
}
function dM(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ht(Math.atan2(r.x, r.z) * wn),
    pitch_deg: Math.asin(J(r.y, -1, 1)) * wn
  };
}
function hM(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: J(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: J(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function pM(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * wn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Rs = null;
function ld() {
  return Rs || (Rs = new Promise((e) => {
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
  }), Rs);
}
function er(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function mM(e, t = 1024) {
  const n = Math.max(1, Math.round(er(e, 2048))), r = Math.min(n, Math.max(1, Math.round(er(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function gM(e, t, n) {
  const r = er(t), o = er(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const l = er(a.u0), u = er(a.v0), d = er(a.u1), b = er(a.v1);
  if (d <= l || b <= u) return null;
  const g = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((l + d) * 0.5 + er(g.du)) * r,
    centerY: ((u + b) * 0.5 + er(g.dv)) * o,
    width: (d - l) * r,
    height: (b - u) * o,
    rotationRad: er(g.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, er(g.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function yM(e, t, n) {
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
function bM() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [a, l] of e) {
        if (e.size <= 16) break;
        l.settled && (l.image.onload = null, l.image.onerror = null, e.delete(a));
      }
  }
  function r(a, l) {
    let u = e.get(a);
    if (u)
      return e.delete(a), e.set(a, u), !u.settled && typeof l == "function" && u.listeners.add(l), u.image;
    const d = new Image();
    u = { image: d, listeners: new Set(typeof l == "function" ? [l] : []), settled: !1 }, e.set(a, u);
    const b = () => {
      u.settled = !0;
      const g = [...u.listeners];
      u.listeners.clear(), g.forEach((_) => _()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, l, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), g = gM(a, l, u);
    if (!b.startsWith("data:") || !g) return null;
    const _ = yM(a, l, u), x = String((a == null ? void 0 : a.id) || "").trim() || _, N = t.get(x);
    if ((N == null ? void 0 : N.revision) === _) return { source: N.source, revision: _ };
    const S = r(b, d), v = Number(S.naturalWidth || S.width || 0), F = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || v < 1 || F < 1) return null;
    const $ = document.createElement("canvas");
    $.width = Math.max(1, Math.round(l)), $.height = Math.max(1, Math.round(u));
    const K = $.getContext("2d");
    return K ? (g.wrapOffsets.forEach((E) => {
      K.save(), K.translate(g.centerX + E, g.centerY), K.rotate(g.rotationRad), K.scale(g.scale, g.scale), K.drawImage(
        S,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), K.restore();
    }), t.set(x, { revision: _, source: $ }), { source: $, revision: _ }) : null;
  }
  return {
    get: o,
    retain(a = []) {
      const l = new Set(Array.from(a, (u) => String(u || "").trim()).filter(Boolean));
      for (const u of t.keys())
        l.has(u) || t.delete(u);
    },
    dispose() {
      e.forEach((a) => {
        a.listeners.clear(), a.image.onload = null, a.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function vM(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function _M(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function wM({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(_) {
    if (!_) return;
    _.entry.listeners.delete(_);
    const x = r.get(_.owner);
    (x == null ? void 0 : x.get(_.key)) === _ && x.delete(_.key);
  }
  function l(_, x, N, S) {
    if (!_ || typeof S != "function" || N.settled) return;
    let v = r.get(_);
    v || (v = /* @__PURE__ */ new Map(), r.set(_, v));
    const F = v.get(x);
    if ((F == null ? void 0 : F.entry) === N) {
      F.callback = S;
      return;
    }
    a(F);
    const $ = { owner: _, key: x, entry: N, callback: S };
    v.set(x, $), N.listeners.add($);
  }
  function u(_, x) {
    _.settled || (_.settled = !0, _.image.onload = null, _.image.onerror = null, !x && n.get(_.key) === _ && n.delete(_.key), [..._.listeners].forEach((N) => {
      a(N);
      try {
        N.callback(_.image, x);
      } catch {
      }
    }), d(o));
  }
  function d(_) {
    if (!(n.size <= _))
      for (const [x, N] of n) {
        if (n.size <= _) break;
        !N.settled || N.listeners.size > 0 || (N.image.onload = null, N.image.onerror = null, n.delete(x));
      }
  }
  function b(_, x, N, S = null) {
    const v = String(x || ""), F = String(N || "");
    if (!v || !F) return null;
    let $ = n.get(v);
    if ($)
      n.delete(v), n.set(v, $);
    else {
      d(o - 1);
      const E = e || globalThis.Image;
      if (typeof E != "function") return null;
      const R = new E();
      $ = { key: v, image: R, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(v, $), R.onload = () => u($, !0), R.onerror = () => u($, !1), R.src = F;
    }
    return $.settled || $.image.complete && Number($.image.naturalWidth || $.image.width || 0) > 0 || l(_, v, $, S), $.image;
  }
  function g(_) {
    const x = r.get(_);
    x && ([...x.values()].forEach(a), r.delete(_), d(o));
  }
  return { get: b, disposeOwner: g };
}
const Oa = /* @__PURE__ */ new WeakMap();
function yy(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = Oa.get(e);
  r || (r = [], Oa.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const l = Oa.get(e);
    if (!l) return;
    const u = l.indexOf(o);
    u >= 0 && l.splice(u, 1), l.length === 0 && Oa.delete(e);
  };
}
function ni(e, ...t) {
  const n = Oa.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const ol = Object.freeze({
  default: {
    label: "Default",
    bindings: [
      { button: 1, action: "look" },
      { button: 1, shift: !0, action: "pan" },
      { button: 2, action: "orbit" },
      { button: 2, shift: !0, action: "pan" }
    ]
  },
  blender: {
    label: "Blender-like",
    bindings: [
      { button: 1, action: "orbit" },
      { button: 1, shift: !0, action: "pan" },
      { button: 2, action: "look" }
    ]
  },
  unity: {
    label: "Unity-like",
    bindings: [
      { button: 2, action: "look" },
      { button: 0, alt: !0, action: "orbit" },
      { button: 1, action: "pan" }
    ]
  }
}), by = "PanoramaSuite.Editor.ViewControls", xM = {
  id: by,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. Dragging on empty space with the left button always looks around.",
  type: "combo",
  options: Object.entries(ol).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function SM(e) {
  return Object.hasOwn(ol, e) ? ol[e] : ol.default;
}
function kM(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const l = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (l == null ? void 0 : l.action) ?? null;
}
function MM(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Fl = "state_json";
function ri(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function NM(e) {
  var l, u;
  const t = ri(e, Fl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = g0(n, {
    coverage: (l = ri(e, "coverage")) == null ? void 0 : l.value
  }), o = uy(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function cd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = ri(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var l, u, d, b, g, _, x, N, S;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (x = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || x.call(_, !0, !0), (S = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || S.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function PM(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function cm(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function AM(e) {
  var g, _, x, N, S, v;
  if (!e) return;
  const t = ri(e, "coverage"), n = ri(e, "bg_color"), r = ri(e, Fl), o = ri(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), l = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && PM(a) && (cm(l) || l === ""))) return;
  let b = "360";
  if (cm(l))
    try {
      b = String(Gn((g = JSON.parse(l)) == null ? void 0 : g.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (_ = t.callback) == null || _.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = l, (N = r.callback) == null || N.call(r, l), o && (o.value = u, (S = o.callback) == null || S.call(o, u)), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
}
function al(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, l;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (l = r.parentEl) != null && l.style && (r.parentEl.style.display = "none")));
  });
}
function sf(e, t, n) {
  var a, l;
  if (!e || typeof e.addWidget != "function") return null;
  let o = (Array.isArray(e.widgets) ? e.widgets : []).find((u) => String((u == null ? void 0 : u.name) || "") === String(t));
  if (o) {
    o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", o.options = { ...o.options || {}, hidden: !1 }, typeof o.__panoComputeSizeBeforeHide == "function" && (o.computeSize = o.__panoComputeSizeBeforeHide), delete o.__panoComputeSizeBeforeHide, (a = o.element) != null && a.style && (o.element.style.display = ""), (l = o.parentEl) != null && l.style && (o.parentEl.style.display = "");
    const u = typeof o.computeSize == "function" ? o.computeSize() : null;
    return (!Array.isArray(u) || Number(u[0] || 0) <= 0 || Number(u[1] || 0) <= 0) && (o.computeSize = () => {
      var d;
      return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
    }), o;
  }
  return o = e.addWidget("button", t, null, n), o && (o.serialize = !1), o;
}
async function CM(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function Fa(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, a = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), l = a.catch(() => {
  });
  e.__panoStickerOperationTail = l, e.__panoPendingStickerUploads.set(t, a);
  const u = () => {
    var d, b;
    ((b = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : b.call(d, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(u, u), l.then(() => {
    e.__panoStickerOperationTail === l && (e.__panoStickerOperationTail = null);
  }), a;
}
async function vy(e, t = {}) {
  var r;
  await CM(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function IM(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await vy(e), n ? n.apply(this, r) : this.value;
  };
}
function EM(e) {
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
function OM(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function bu(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: a,
  attachCutout: l,
  enableStickersPreview: u,
  sceneStateV2: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function b(g) {
    var N;
    const _ = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === _) return;
    EM(g), cd(g, t), al(g, Fl);
    const x = ri(g, Fl);
    if (IM(g, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const S = x.callback;
      x.callback = (v) => {
        var $;
        const F = S ? S(v) : void 0;
        return ($ = g.setDirtyCanvas) == null || $.call(g, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      g.__panoSceneStateV2 = d;
      const S = ri(g, "bg_color");
      !d && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (N = S.callback) == null || N.call(S, "#00ff00")), sf(g, r, () => o(g, "stickers")), u && (a(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(g, "stickers")
      }), g.__panoStickersNodeSurface && al(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = _;
      return;
    }
    sf(g, r, () => o(g, "cutout")), l(g, {
      buttonText: r,
      onOpen: () => o(g, "cutout")
    }), g.__panoCutoutNodeSurface && al(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = _;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const _ = e.prototype[g];
    e.prototype[g] = function() {
      const x = _ ? _.apply(this, arguments) : void 0;
      g === "onNodeCreated" && n === "PanoramaCutout" && NM(this), g === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && AM(this);
      const N = !!this.__panoPreviewAttached;
      return (g === "onNodeCreated" || this.widgets) && b(this), g === "onAdded" && N && ni(this, "attach"), x;
    };
  }
}
function FM(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return OM(this), r;
  };
}
function TM(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: o
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const a = () => {
    const l = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), u = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = u, !l && u < 40) {
      o(a);
      return;
    }
    cd(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    sf(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && al(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function DM({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: o,
  restoreOutput: a,
  requestFrame: l,
  enableStickersPreview: u = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [xM],
    beforeRegisterNodeDef(d, b) {
      const g = String((b == null ? void 0 : b.name) || "");
      (g === "PanoramaStickers" || g === "Panorama Stickers") && bu(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), g === "PanoramaStickersNode" && bu(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && bu(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), xl(g) && FM(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      cd(d, e), xl(b) && TM(d, { app: e, openEditor: t, attachPreview: o, requestFrame: l });
    }
  };
}
const LM = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Or(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : LM.test(String(e.name || "")) : !1;
}
function ud(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Or(n)) : !1;
}
function RM(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, g, _;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (g = d == null ? void 0 : d.stopPropagation) == null || g.call(d), (_ = d == null ? void 0 : d.stopImmediatePropagation) == null || _.call(d);
  }, a = (d) => {
    if (ud(d == null ? void 0 : d.dataTransfer)) {
      o(d);
      try {
        d.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, l = (d) => {
    var b;
    d != null && d.relatedTarget && ((b = e.contains) != null && b.call(e, d.relatedTarget)) || n(!1);
  }, u = (d) => {
    var g;
    const b = Array.from(((g = d == null ? void 0 : d.dataTransfer) == null ? void 0 : g.files) || []).find((_) => Or(_));
    if (!b) {
      n(!1);
      return;
    }
    o(d), n(!1), r(b);
  };
  return e.addEventListener("dragenter", a, !0), e.addEventListener("dragover", a, !0), e.addEventListener("dragleave", l, !0), e.addEventListener("drop", u, !0), () => {
    e.removeEventListener("dragenter", a, !0), e.removeEventListener("dragover", a, !0), e.removeEventListener("dragleave", l, !0), e.removeEventListener("drop", u, !0), n(!1);
  };
}
async function Ta(e, t = {}) {
  var l, u, d, b;
  if (!Or(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (l = globalThis.URL) == null ? void 0 : l.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const g = await new Promise((_, x) => {
      const N = new n();
      N.onload = () => _(N), N.onerror = () => x(new Error("image load failed")), N.src = a;
    });
    return {
      image: g,
      width: Math.max(1, Number(g.naturalWidth || g.width || 1)),
      height: Math.max(1, Number(g.naturalHeight || g.height || 1))
    };
  } finally {
    o == null || o(a);
  }
}
async function Wi(e, { fetchApi: t } = {}) {
  if (!Or(e)) throw new TypeError("A supported image file is required.");
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
const um = /* @__PURE__ */ new WeakSet(), fm = /* @__PURE__ */ new WeakSet();
let dm = 0;
function lf(e) {
  if (!e || typeof e != "object" || fm.has(e)) return e;
  const t = String(e.type || "preview");
  return dm += 1, e.type = `${t}:pano-${dm}`, fm.add(e), e;
}
function Tl(e) {
  if (!e || typeof e != "object" || um.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, um.add(e), e;
}
function _y(e, t) {
  var r, o;
  if (!t || ((o = (r = Tl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function VM({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Ft } = Ws;
ok((e) => Ci(e.id));
ak(Gt);
const fd = wM(), { linkedVideoFile: $M } = G0({ app: Ft, api: Gt });
function cf() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ws == null ? void 0 : Ws.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const zM = "pano_suite.ui_settings.v1", jM = 120, HM = 2048;
function hm() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(zM)) || "").trim();
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
function GM() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Pa(e) {
  var n, r, o, a, l;
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
    styleTransform: String(((l = e.style) == null ? void 0 : l.transform) || "")
  };
}
function KM() {
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
function uf(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, o) => {
    const a = Number(r), l = Number(o);
    return !Number.isFinite(a) || !Number.isFinite(l) ? null : [a, l];
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
function wy(e) {
  const t = uf(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function BM(e, t, n) {
  wy(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function ff(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function dd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function xy(e) {
  return xl(dd(e));
}
function pm(e = null) {
  var a, l;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((l = (a = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : a.constructor) == null ? void 0 : l.name) || "");
  return [t, r, n, o].join("|");
}
function Sy(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = ff(e);
      this.activeBackend = a;
      const l = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && l === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && sl(e), LN(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = ff(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      sl(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      sl(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function WM(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function sl(e, t = {}) {
  var r, o, a, l, u;
  if (!e) return;
  df.unregister(e), WM(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (u = (l = n.root) == null ? void 0 : l.remove) == null || u.call(l);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((b) => {
      if (b === (n == null ? void 0 : n.widget)) return !0;
      const g = String((b == null ? void 0 : b.name) || ""), _ = String((b == null ? void 0 : b.type) || ""), x = cf();
      return g === x || _ === x || g === "pano_preview" || _ === "pano_preview" ? !0 : g === "preview" && _ === "pano_preview";
    }).forEach((b) => hN(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function UM(e, t = "#00ff00") {
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
function YM(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Yo(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Dn(e) {
  var u, d;
  const t = YM(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = Yo(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = Yo(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const l = e.__panoSceneStateV2 && typeof t == "string" ? y0(t, { backgroundColor: r, coverage: o, active: x0(e) }) : UM(t, r);
  return l.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: l }, l;
}
function Yo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function XM(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function ky(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const l = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = l ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(l.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = XM(e == null ? void 0 : e.graph, n)), r;
}
function qM(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function My(e, t = []) {
  const n = qM(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Ii.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function mm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Dl(e, t) {
  const n = mm(e), r = mm(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function JM(e, t) {
  var n;
  return ky(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function ZM(e, t = Ii) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = My(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  return dk(e, l, JM);
}
const df = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Gt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, g, _, x;
        if (!a) return;
        const l = Dl(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !l || !l && ![...ZM(a)].some((N) => Dl(r, N)) || H0(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (Ny(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = a.setDirtyCanvas) == null || g.call(a, !0, !0), (x = (_ = a.graph) == null ? void 0 : _.setDirtyCanvas) == null || x.call(_, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Gt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Gt) != null && e.removeEventListener) || (Gt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Ll(e) {
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
  return typeof ((a = Gt) == null ? void 0 : a.apiURL) == "function" ? Gt.apiURL(o) : o;
}
function QM(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function eN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function tN(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function nN(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (QM(t)) return [t];
  const { filename: n, subfolder: r } = eN(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Ll({
    filename: n,
    subfolder: r,
    type: a
  }));
  return tN([...o, t]);
}
function rN(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Ll({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ci(e) {
  const t = Ft == null ? void 0 : Ft.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Dl(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const l of a)
      if (Dl(l, o)) return t[l];
  }
  return null;
}
function Ga(e, t, n = null) {
  const r = n || Ci(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function Bn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Bn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Ll({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Bn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ll(e);
}
function Rl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function vu(e) {
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
function hd(e, t) {
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
function iN(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((l) => t.push(l));
  }, o = (a, l = 0) => {
    !a || l > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, l + 1), o(a.ui, l + 1), o(a.data, l + 1), o(a.result, l + 1));
  };
  return o(e, 0), t;
}
function oN(e, t) {
  try {
    e.__panoOwnOutputRev = vM(e.__panoOwnOutputRev);
    const n = iN(t);
    let r = "";
    for (const o of n)
      if (r = Bn(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), hd(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Xo(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function aN(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!yn(e, "background"))
    return Xo(e), null;
  const o = Ci(r), a = ed(o, t, Bn);
  if (!a)
    return Xo(e), null;
  const l = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = hd(a, l), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  Xo(e);
  const g = hk({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: d, ...g }, g.video) : null;
}
function sN(e, t = []) {
  var b, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = My(e, t).map((_) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(_))).filter((_) => _ >= 0), a = n.map((_, x) => ({ input: _, idx: x })).filter(({ input: _ }) => String((_ == null ? void 0 : _.type) || "").toUpperCase() === "IMAGE").map(({ idx: _ }) => _), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const _ of l) {
    const x = n[_], N = e.graph ? e.getInputLink(_) : null;
    if ((N == null ? void 0 : N.origin_id) == null) continue;
    const S = N.origin_id, v = ky(e, _, S);
    if (!v) continue;
    const F = Number(N.origin_slot ?? 0), $ = Ci((v == null ? void 0 : v.id) ?? S), K = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (K.length) {
      const V = [];
      F >= 0 && F < K.length && V.push(K[F]), V.push(...K);
      for (const H of V.filter((Q) => !rl(Q))) {
        const Q = Bn(H);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: `${Q}&pano_src=${nf($)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let E = [];
    try {
      E = typeof (Ft == null ? void 0 : Ft.getNodeImageUrls) == "function" ? Ft.getNodeImageUrls(v) || [] : [];
    } catch {
      E = [];
    }
    if (Array.isArray(E) && E.length) {
      const V = [];
      F >= 0 && F < E.length && V.push(E[F]), V.push(...E);
      for (const H of V) {
        const Q = Bn(H);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: Q, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const R = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
    if (R.length) {
      const V = [];
      F >= 0 && F < R.length && V.push(R[F]), V.push(...R);
      for (const H of V) {
        const Q = Bn(H);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: Q, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const O = (b = v == null ? void 0 : v.widgets) == null ? void 0 : b.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image");
    if (O) {
      let V = Bn(O.value);
      if (V && !V.includes("/") && !V.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (V = Gt.apiURL(`/view?filename=${encodeURIComponent(V)}&type=input&subfolder=`)), V)
        return String((x == null ? void 0 : x.name) || ""), { src: V, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const u = yn(e, "background") ? Ci(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((g = u == null ? void 0 : u.ui) == null ? void 0 : g.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const _ of d) {
      const x = Bn(_);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function lN(e, t = [], n = {}) {
  const r = sN(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = nN(o);
  if (!a.length) return null;
  const l = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return l && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), g = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  g.pendingSrcRaw = o, g.pendingResolvedSrc = "", g.pendingImg = b, e.__panoLinkedInputImageCache.set(u, g);
  let _ = -1;
  const x = () => {
    var S, v, F, $;
    if (_ += 1, _ >= a.length) {
      if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const N = a[_];
    g.pendingResolvedSrc = N, b.src = N;
  };
  return b.onload = () => {
    var N, S, v;
    ((S = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : S.call(N, u)) === g && g.pendingImg === b && (g.srcRaw = o, g.resolvedSrc = String(g.pendingResolvedSrc || b.src || ""), g.img = b, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, b.onerror = (N) => {
    var S, v, F, $;
    if (_ + 1 < a.length) {
      x();
      return;
    }
    if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, u);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, x(), l && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : b;
}
function cN(e, t = [], n = null, r = {}) {
  const o = lN(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function Ny(e) {
  var t, n;
  if (e) {
    fd.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Xo(e), e.__panoWrappedErpCache = null;
  }
}
function uN(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Xo(e), e.__panoWrappedErpCache = null;
  }
}
function Py(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Vs(e, t, n = "") {
  const r = Py(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < jM ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function gm(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), l = n / o, u = r / a, d = Math.min(l, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function fN(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), l = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || l <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), g = r + (a - d) * 0.5, _ = o + (l - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, _, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + d * 0.5, _ + b * 0.5 + 0.5), e.restore();
}
function _u(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function dN(e) {
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
function hN(e, t) {
  return _y(e, t);
}
function Qa(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = rN(n);
  if (!a && (r != null && r.external)) {
    if (!yn(e, "external-sticker")) return null;
    const N = Ci(e == null ? void 0 : e.id), S = ((x = N == null ? void 0 : N.ui) == null ? void 0 : x.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const v of Array.isArray(S) ? S : [S])
      if (a = Bn(v), a) break;
  }
  if (!a) return null;
  const l = Ga(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(l ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? hd(a, d) : a, g = _M(a, u, d);
  return fd.get(e, g, b, (N, S) => {
    var v, F;
    S && (r != null && r.external && e.__panoOutputFromRun && ni(e, "image-loaded"), (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || F.call(v));
  }) || null;
}
function pN(e, t) {
  var _, x, N, S;
  const n = vN(e, t), r = _N(t), o = Array.isArray((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.groups) ? t.painting.groups : [], a = new Map(
    o.filter((v) => v && typeof v == "object").map((v) => [String((v == null ? void 0 : v.actionGroupId) || (v == null ? void 0 : v.id) || "").trim(), Number((v == null ? void 0 : v.z_index) || 0)])
  ), l = n ? r.map((v) => {
    const F = n.getGroupDisplayCanvas(v);
    return F ? {
      id: `paint_group:${v}`,
      source: F,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${v}`,
      zIndex: Number(a.get(v) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (S = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || S.call(N, []), l;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = bM()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var v, F;
    return (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null ? void 0 : F.call(v);
  });
  const d = mM(t == null ? void 0 : t.output_preset), b = u.filter((v) => (v == null ? void 0 : v.visible) !== !1 && String((v == null ? void 0 : v.layerKind) || "paint") === "paint").map((v) => String((v == null ? void 0 : v.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const g = u.map((v) => {
    const F = e.__panoRasterObjectSurfaceCache.get(
      v,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return F ? {
      id: `raster:${String((v == null ? void 0 : v.id) || "")}`,
      source: F.source,
      revision: F.revision,
      zIndex: Number((v == null ? void 0 : v.z_index) || 0),
      opacity: 1,
      visible: (v == null ? void 0 : v.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...l, ...g];
}
function mN(e, t, n, r) {
  var a, l, u, d, b, g;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const _ = r.convertEventToCanvasOffset(t);
      if (Array.isArray(_) && _.length >= 2)
        return {
          x: Number(_[0]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[0]) || 0),
          y: Number(_[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
    };
  const o = yN(e, t, r);
  return o || null;
}
function gN(e, t) {
  var _, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (_ = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : _.call(o), l = (t == null ? void 0 : t.ds) || ((x = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : x.ds);
  if (!a || !l) return null;
  const u = Number(l.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(l.offset) ? l.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), g = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(g) ? null : { x: b, y: g };
}
function yN(e, t, n) {
  var o, a;
  const r = gN(t, n || (Ft == null ? void 0 : Ft.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function bN(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function vN(e, t) {
  var b, g, _, x, N, S, v, F, $, K, E, R;
  const n = (g = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : g.strokes, r = (x = (_ = t == null ? void 0 : t.painting) == null ? void 0 : _.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const l = bN(e, t), u = `${l.width}x${l.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = Ku(l), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) || null
  };
  return (((v = e.__panoPreviewPaintRevision) == null ? void 0 : v.paint) !== d.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== d.mask || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.groups) !== d.groups || ((K = e.__panoPreviewPaintRevision) == null ? void 0 : K.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((R = t == null ? void 0 : t.painting) == null ? void 0 : R.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function _N(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function wN(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function xN(e, t, n) {
  const r = sd(t, n);
  r.visible && ad(e, r.boundaryEdges, { selected: !1 });
}
function SN(e, t, n) {
  const r = sd(t, n);
  r.visible && (e.save(), ad(e, r.boundaryEdges, { selected: !0 }), gy(e, r, { accent: cM(t) }), e.restore());
}
function hf(e, t, n) {
  return I0(Cl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Vl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ta;
}
function kN(e) {
  return [yn(e, "background") ? ed(Ci(e.id), ["pano_input_videos"], Bn) : "", $M(e, Ii)];
}
function MN(e) {
  var a;
  if (!yn(e, "external-sticker")) return null;
  const t = Ci(e.id), n = Ga(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Bn), meta: n };
  const o = ed(t, ["pano_sticker_input_videos"], Bn);
  return o ? { src: o, meta: n } : null;
}
function NN({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function ym(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: so({ ...t, painting: null }) });
  const r = (l) => {
    var d;
    if (l.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = Qa(e, l.id, _0(l.source), { external: l.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (l.source.kind === "port" && b) {
        const g = b.playback.stickerPicture(b.stickerStill, u), _ = W0(b.playback.stickerMedia, u);
        return g ? { media: g, revision: vu(g), source: _ } : null;
      }
    } else {
      const b = l.type === "external_image" || l.source_kind === "external_image", g = String(l.asset_id || "") || (b ? String(l.id || "") : "");
      u = Qa(e, g, (d = t.assets) == null ? void 0 : d[l.asset_id], { external: b });
    }
    return Rl(u) ? { media: u, revision: vu(u) } : null;
  }, o = pN(e, t).filter((l) => l.visible !== !1).map((l) => ({ id: l.id, media: l.source, revision: l.revision, opacity: l.opacity, zIndex: l.zIndex }));
  return {
    background: Rl(n) ? { media: n, revision: vu(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: E0(e.__panoSurfaceScene.sceneState, Vl(e), t.stickers, { media: r, paintLayers: o })
  };
}
function PN(e, t, n) {
  var R, O, V, H, Q, _e, D;
  const r = String(e.__panoPreviewMode || "stickers");
  Py(e, r);
  const o = Dn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (V = (O = (R = e.__panoCutoutNodeSurface) == null ? void 0 : R.session) == null ? void 0 : O.refresh) == null || V.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (Q = (H = e.__panoStickersNodeSurface) == null ? void 0 : H.session) == null ? void 0 : Q.refresh) == null || _e.call(Q));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== u) && (t.width = l, t.height = u);
  const b = { x: 0, y: 0, w: l, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, u);
  const g = (e.__panoSurfacePlayback ? NN(e.__panoSurfacePlayback) : aN(e, ["pano_input_videos"], () => {
    var C, se;
    return (se = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : se.call(C);
  })) || cN(
    e,
    Ii,
    () => {
      var C, se;
      return (se = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : se.call(C);
    },
    { preserveReadyWhilePending: !1 }
  ), _ = Rl(g);
  let x = null;
  const N = (C, se) => {
    x || (x = ym(e, o, g));
    const le = n.render({ width: C.w, height: C.h, camera: se, ...x });
    return le && d.drawImage(le.canvas, le.x, le.y, le.width, le.height, C.x, C.y, C.w, C.h), !!le;
  };
  if (r === "cutout") {
    const C = dN(o), se = wN(g), le = C ? J(li(C).aspect, 0.1, 10) : _ ? J(Number(se.width / se.height), 0.05, 20) : 1, fe = id(b, le);
    e.__panoCutoutNodeFrame = fe;
    let U = "none";
    const X = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (C)
      if (g && !_)
        U = "loading";
      else if (_) {
        const j = Tk({ width: l, height: u }, fe, C);
        [
          !j.fallback || N(j.fallback.rect, tl(j.fallback.shot)),
          N(j.rect, tl(j.shot)),
          !j.fallback || N(fe, tl(C))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const j = e.__panoLastCutoutShot;
      j ? (e.__panoPreviewView = cy(j, { width: l, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), _ ? N(b, Cl(e.__panoPreviewView, l, u)) || (U = "loading") : g ? U = "loading" : U = "empty";
    }
    _ || n.release(), n.failed && U === "loading" && (U = "none"), C && (e.__panoLastCutoutShot = { ...C }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, u), d.rect(fe.x, fe.y, fe.w, fe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(fe.x + 0.5, fe.y + 0.5, Math.max(0, fe.w - 1), Math.max(0, fe.h - 1)), d.restore()), U === "loading" ? (_u(e, !1), Vs(e, !0, X)) : U === "empty" ? (_u(e, !0), Vs(e, !1, "")) : (_u(e, !1), Vs(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let S = !1;
  (!g || _) && (x = ym(e, o, g), !x.background && !x.layers.length ? (n.release(), S = !0) : S = N(b, Cl(e.__panoPreviewView, l, u)));
  const v = !S && !n.failed;
  Vs(e, v, v ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), v && fN(d, b, gm(t, b));
  const F = hf(e, l, u);
  !g && S && AN(d, F, gm(t, b));
  const $ = String(((D = o == null ? void 0 : o.active) == null ? void 0 : D.selected_sticker_id) || ""), K = rf(o, Vl(e)), E = S ? K.find((C) => String((C == null ? void 0 : C.id) || "") === $ && (C == null ? void 0 : C.visible) !== !1) : null;
  S && K.filter((C) => C !== E && (C == null ? void 0 : C.visible) !== !1 && (C.external || C.source_kind === "external_image")).filter((C) => !Rl(Qa(e, C.id, null, { external: !0 }))).forEach((C) => xN(d, C, F)), E && SN(d, E, F);
}
function bm(e, t, n, r, o = 1) {
  let a = !1;
  e.strokeStyle = r, e.lineWidth = o, e.beginPath();
  for (const l of t) {
    const u = n.project(l);
    if (u.z <= 1e-4) {
      a = !1;
      continue;
    }
    a ? e.lineTo(u.x, u.y) : (e.moveTo(u.x, u.y), a = !0);
  }
  e.stroke();
}
function AN(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(Vn(b, u));
    bm(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(Vn(u, b));
    bm(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: Vn(0, 0) },
    { name: "Right", dir: Vn(90, 0) },
    { name: "Back", dir: Vn(180, 0) },
    { name: "Left", dir: Vn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const l = Math.max(9, Math.round(11 * n));
  e.font = `500 ${l}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function pf(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function CN(e, t, n = 20) {
  var l;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (l = t.getBoundingClientRect) == null ? void 0 : l.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function Zn(e, t) {
  return CN(e, t) ? !1 : (pf(e), !0);
}
function vm() {
  var n;
  const e = (n = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function IN(e) {
  var n;
  if (!e) return;
  const t = (n = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function EN(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !wy(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function ON(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, l;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (l = e.setDirtyCanvas) == null || l.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function _m(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && FN(e, 180, t);
    }
  };
}
function FN(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Da(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const TN = /* @__PURE__ */ new WeakMap();
function Ay(e, t) {
  return H0(TN, e, t) ? !1 : (oN(e, t), Ny(e), Da(e), !0);
}
async function DN(e) {
  var n, r;
  const t = await uk(e, Ft, Gt);
  t && (Ay(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function LN(e, t = {}) {
  var ho;
  const n = t.__allowStandalone === !0, r = xy(e);
  if (r && !n) {
    dd(e);
    return;
  }
  r && EN(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: pm(e)
  }, u = "dom", d = l.signature || pm(e);
  if (Number(e.__panoRebindGeneration || 0), ff(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, uf(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (ho = e.__panoDomPreview) != null && ho.widget || (e.__panoLegacyPreviewHooked && sl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, g = b ? 0 : 56, _ = b ? 0 : Ik, x = document.createElement("div");
  if (KM(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
    "width:100%",
    b ? "height:auto" : "height:100%",
    _ > 0 ? `min-height:${_}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), b) {
    const z = Tl(lf(
      e.addDOMWidget(cf(), "preview", x, _m(e, null))
    ));
    Da(e), e.__panoDomPreview = { widget: z, root: x, requestDraw: () => {
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
  const S = document.createElement("canvas");
  S.style.cssText = [
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
  const v = document.createElement("div");
  v.style.cssText = [
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
  ].join(";"), v.textContent = "Connect ERP image", N.appendChild(S), N.appendChild(v), x.appendChild(N);
  const F = Kg(x), $ = document.createElement("div");
  $ && ($.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", $.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild($)), BM(e, 120, 120), Da(e);
  let K = null;
  try {
    ON(e, g, () => {
      var z, ve;
      return (ve = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ve.call(z);
    }), K = Tl(lf(e.addDOMWidget(
      cf(),
      "preview",
      x,
      _m(
        e,
        () => {
          var z, ve;
          return (ve = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ve.call(z);
        },
        g,
        _,
        !1
      )
    )));
  } catch {
    return;
  }
  const E = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, R = () => {
    E.destroyed || (E.needsDraw = !0, !E.inTick && !E.raf && (E.raf = requestAnimationFrame(Yn)));
  }, O = F0(R), V = /* @__PURE__ */ ra(o ? { ...ry(Dn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...sy(Dn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((z) => ({ value: z, label: z }))
  });
  let H = null;
  if (o && e.__panoSceneStateV2) {
    const [z, ve] = [0, 1].map(() => {
      const Ae = document.createElement("video");
      return Ae.playsInline = !0, Ae.preload = "auto", Ae.crossOrigin = "anonymous", Ae.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", N.appendChild(Ae), Ae;
    }), ke = document.createElement("canvas");
    ke.__panoFrameIdx = 0;
    const Oe = document.createElement("canvas");
    Oe.__panoFrameIdx = 0;
    const je = Ak({
      video: z,
      stickerVideo: ve,
      createImage: (Ae, Ze) => {
        const gt = new Image();
        return gt.onload = Ze, gt.onerror = Ze, gt.src = Ae, gt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ae) => requestAnimationFrame(Ae),
        cancelFrame: (Ae) => cancelAnimationFrame(Ae)
      },
      readState: () => Dn(e),
      onFrame: R,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ze;
        if (!(z.videoWidth > 0 && z.videoHeight > 0)) return;
        const Ae = Math.min(1, HM / z.videoWidth);
        ke.width = Math.round(z.videoWidth * Ae), ke.height = Math.round(z.videoHeight * Ae), (Ze = ke.getContext("2d")) == null || Ze.drawImage(z, 0, 0, ke.width, ke.height), ke.__panoFrameIdx += 1, R();
      },
      onStickerCapture: () => {
        var Ae;
        ve.videoWidth > 0 && ve.videoHeight > 0 && (Oe.width = ve.videoWidth, Oe.height = ve.videoHeight, (Ae = Oe.getContext("2d")) == null || Ae.drawImage(ve, 0, 0), Oe.__panoFrameIdx += 1, R());
      },
      onChange: () => {
        V.playing = je.playing, R();
      }
    });
    H = { playback: je, video: z, still: ke, stickerVideo: ve, stickerStill: Oe, stickerSource: "" }, e.__panoSurfacePlayback = H;
  }
  const Q = () => {
    var gt;
    const { playback: z, still: ve, stickerStill: ke } = H, Oe = Pk(N, !!((gt = e.flags) != null && gt.collapsed)), je = z.source, Ae = Oe ? MN(e) : null, Ze = z.follow({
      shown: Oe,
      sources: Oe ? kN(e) : [],
      state: Dn(e),
      sticker: Ae
    });
    ((Ae == null ? void 0 : Ae.src) || "") !== H.stickerSource && (H.stickerSource = (Ae == null ? void 0 : Ae.src) || "", ke.width = 0), z.source !== je && (ve.width = 0, ve.__panoFrameIdx = 0), V.playable = Ze, V.playing = z.playing;
  }, _e = () => H == null ? void 0 : H.playback.pause();
  let D = null;
  const C = (o ? Mk : Lk)({
    readState: () => Dn(e),
    publishLiveState: (z) => {
      z ? (D = z, e.__panoLiveStateOverride = z) : (e.__panoLiveStateOverride === D && (e.__panoLiveStateOverride = null), D = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, R();
    },
    commitState: (z) => {
      var Oe, je, Ae, Ze;
      const ve = Yo(e, "state_json");
      if (!ve) return;
      S0(e, z.active);
      const ke = k0(e, z);
      M0(e, ke, String(ve.value ?? "")) || (ve.value = ke, (Oe = ve.callback) == null || Oe.call(ve, ke), e.__panoStateCache = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Ze = (Ae = e.graph) == null ? void 0 : Ae.setDirtyCanvas) == null || Ze.call(Ae, !0, !0));
    },
    onChange: (z) => Object.assign(V, z)
  }), le = o ? yy(e, (z = "sync", ve = null) => {
    var vr;
    if (!o || !e.graph || !C || C.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Cn = yn(e, "external-sticker"), kt = Dn(e).stickers.find((ar) => ar.source.kind === "port");
      return C.apply({
        type: "sync-port",
        value: ty(e, {
          pose: Cn ? Ga(e, "pano_sticker_input_pose", ve) : null,
          image: kt ? Qa(e, kt.id, null, { external: !0 }) : null
        })
      });
    }
    const ke = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Cn) => String((Cn == null ? void 0 : Cn.name) || "") === "sticker_image") : -1, Oe = ke >= 0 ? ((vr = e.getInputLink(ke)) == null ? void 0 : vr.id) ?? null : null;
    if (Oe == null)
      return C.apply({ type: "sync-external", value: { connected: !1 } });
    if (!yn(e, "external-sticker")) return !1;
    const je = Ga(e, "pano_sticker_input_pose", ve), Ae = Array.isArray(je) ? je[0] : je, Ze = String(Ga(e, "pano_sticker_input_state_hash", ve) ?? ""), gt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Dt = Dn(e), or = (Array.isArray(Dt == null ? void 0 : Dt.stickers) ? Dt.stickers : []).find((Cn) => String((Cn == null ? void 0 : Cn.id) || "") === "sticker_image_1"), Yt = Qa(e, "sticker_image_1", null, { external: !0 }), Ei = Ae && typeof Ae == "object" ? Ae : or || { yaw_deg: gt.yaw, pitch_deg: gt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return C.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Oe,
        stateHash: Ze,
        pose: Ei,
        imageWidth: Number((Yt == null ? void 0 : Yt.naturalWidth) || (Yt == null ? void 0 : Yt.width) || 0),
        imageHeight: Number((Yt == null ? void 0 : Yt.naturalHeight) || (Yt == null ? void 0 : Yt.height) || 0)
      }
    });
  }) : () => {
  };
  let fe = 0;
  const U = async (z) => {
    if (!o || !C || !Or(z)) return !1;
    _e();
    const ve = `asset_${Math.random().toString(16).slice(2, 10)}`, ke = `st_${Math.random().toString(16).slice(2, 10)}`, Oe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    fe += 1, V.importing = !0;
    const je = Fa(e, `add:${ve}`, async () => {
      const Ae = await Ta(z), Ze = await Wi(z, {
        fetchApi: (gt, Dt) => Gt.fetchApi(gt, Dt)
      });
      return Ie(), C.apply({
        type: "add-sticker",
        value: {
          stickerId: ke,
          assetId: ve,
          asset: Ze,
          imageWidth: Ae.width,
          imageHeight: Ae.height,
          yaw_deg: Number(Oe.yaw || 0),
          pitch_deg: Number(Oe.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      fe = Math.max(0, fe - 1), V.importing = fe > 0, R();
    }
  };
  let X = null, j = null, A = null, ee = !1;
  const Y = () => {
    var z;
    return A && (clearTimeout(A), A = null), ee ? (ee = !1, ((z = C == null ? void 0 : C.commitGesture) == null ? void 0 : z.call(C)) ?? !1) : !1;
  }, Ie = () => {
    var Oe, je, Ae;
    const z = Y(), ve = (X == null ? void 0 : X.pointerId) ?? (j == null ? void 0 : j.pointerId);
    if (X = null, j = null, ve != null) {
      try {
        (Oe = S.hasPointerCapture) != null && Oe.call(S, ve) && ((je = S.releasePointerCapture) == null || je.call(S, ve));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const ke = ((Ae = C == null ? void 0 : C.commitGesture) == null ? void 0 : Ae.call(C)) ?? !1;
    return z || ke;
  }, Fe = () => {
    var Oe, je, Ae;
    const z = Y(), ve = X == null ? void 0 : X.pointerId;
    if (X = null, ve != null) {
      try {
        (Oe = S.hasPointerCapture) != null && Oe.call(S, ve) && ((je = S.releasePointerCapture) == null || je.call(S, ve));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const ke = ((Ae = C == null ? void 0 : C.cancelGesture) == null ? void 0 : Ae.call(C)) ?? !1;
    return z || ke;
  }, St = () => Ie();
  C && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(St));
  let pt = null, ln = !1;
  if ($ && C)
    try {
      ld(), pt = Df(o ? lM : eM, {
        model: V,
        onAction: (z) => {
          var Oe, je;
          if ((z == null ? void 0 : z.type) === "toggle-playback") {
            Ie(), H == null || H.playback.toggle();
            return;
          }
          if (_e(), (z == null ? void 0 : z.type) === "open-editor") {
            Ie(), o || (V.aspectOpen = !1), (Oe = e.__panoOpenEditor) == null || Oe.call(e);
            return;
          }
          if (o) {
            if ((z == null ? void 0 : z.type) === "add-image-file") {
              U(z.file);
              return;
            }
            C.apply(z) && R();
            return;
          }
          if ((z == null ? void 0 : z.type) === "toggle-aspect") {
            V.aspectOpen = !V.aspectOpen;
            return;
          }
          if ((z == null ? void 0 : z.type) === "close-aspect") {
            V.aspectOpen = !1;
            return;
          }
          let ve = z;
          if ((z == null ? void 0 : z.type) === "add-frame") {
            const Ae = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ve = {
              ...z,
              ...Ok(Ae, {
                width: S.width,
                height: S.height
              })
            };
          } else if ((z == null ? void 0 : z.type) === "delete-frame") {
            const Ae = oo(Dn(e));
            Ae && (e.__panoPreviewView = cy(Ae, {
              width: S.width,
              height: S.height
            }));
          }
          const ke = ((je = e.__panoCutoutNodeFrame) == null ? void 0 : je.safeRect) || null;
          V.aspectOpen = !1, C.apply({ ...ve, safeRect: ke }) && R();
        }
      }), pt.mount($), ln = !0;
    } catch {
      pt = null, ln = !1;
    }
  const it = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    H && Q(), R();
  }) : null;
  it == null || it.observe(N);
  const Yn = (z) => {
    var ke, Oe;
    E.raf = 0, E.inTick = !0;
    let ve = !1;
    try {
      ve = It.stepInertia(z), (E.needsDraw || ve) && (E.needsDraw = !1, H && Q(), (ke = e.flags) != null && ke.collapsed || PN(e, S, O), V.viewUnavailable = O.failed);
    } finally {
      E.inTick = !1;
    }
    (ve || E.needsDraw) && !E.raf && (E.raf = requestAnimationFrame(Yn)), GM() && (!e.__panoDebugLastTs || z - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = z, e.__panoPreviewMode, uf(e), Pa(x), Pa(N), Pa(S), Pa(x.parentElement), Pa((Oe = x.parentElement) == null ? void 0 : Oe.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, It = $f({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (z) => {
      e.__panoPreviewView = z;
    },
    getViewportSize: () => {
      const z = S.getBoundingClientRect();
      return {
        w: Math.max(1, Number(z.width || S.clientWidth || 0)),
        h: Math.max(1, Number(z.height || S.clientHeight || 0))
      };
    },
    getInvert: () => {
      const z = hm();
      return {
        x: z.invert_view_x ? -1 : 1,
        y: z.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      R();
    }
  }), Qt = o ? N : x, cn = (z) => {
    const ve = S.getBoundingClientRect();
    return {
      x: (Number(z.clientX) - ve.left) * (S.width / Math.max(1, ve.width)),
      y: (Number(z.clientY) - ve.top) * (S.height / Math.max(1, ve.height))
    };
  }, ui = (z) => {
    var Oe, je;
    if (!o || !a) return;
    const ve = Dn(e), ke = lm(
      rf(ve, Vl(e)),
      String(((Oe = ve == null ? void 0 : ve.active) == null ? void 0 : Oe.selected_sticker_id) || ""),
      cn(z),
      hf(e, S.width, S.height)
    );
    if (!ke) {
      S.style.cursor = "grab";
      return;
    }
    if (((je = ke.item) == null ? void 0 : je.locked) === !0) {
      S.style.cursor = "default";
      return;
    }
    S.style.cursor = ke.hit.cursor || "default";
  };
  S.addEventListener("pointerdown", (z) => {
    var gt, Dt, or, Yt, Ei, Sn, vr, Cn, kt, ar, as;
    if (!Zn(z, Qt) || z.button !== 0) return;
    if (!o) {
      const In = oo(Dn(e)), $n = e.__panoCutoutNodeFrame;
      if (!In) {
        (gt = x.focus) == null || gt.call(x, { preventScroll: !0 }), (Dt = S.setPointerCapture) == null || Dt.call(S, z.pointerId), S.style.cursor = "grabbing", It.startDrag(z.clientX, z.clientY, z.pointerId);
        return;
      }
      if (In.locked === !0 || !$n || !C) return;
      const _r = cn(z);
      let Oi;
      if (z.shiftKey) {
        const dn = fy({
          frame: $n,
          point: _r,
          startRollDeg: Number(In.roll_deg ?? In.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!dn) return;
        Oi = { kind: "roll", pointerId: z.pointerId, rollGesture: dn };
      } else {
        const dn = ((or = Dn(e)) == null ? void 0 : or.ui_settings) || hm();
        Oi = {
          kind: "pan",
          pointerId: z.pointerId,
          startPoint: _r,
          startShot: { ...In },
          focalPx: to($n, In),
          invertX: dn.invert_view_x === !0,
          invertY: dn.invert_view_y === !0
        };
      }
      Ie(), (Yt = x.focus) == null || Yt.call(x, { preventScroll: !0 }), (Ei = S.setPointerCapture) == null || Ei.call(S, z.pointerId), S.style.cursor = "grabbing", C.beginGesture(), X = Oi;
      return;
    }
    if (!a) return;
    const ve = cn(z), ke = Dn(e), Oe = String(((Sn = ke == null ? void 0 : ke.active) == null ? void 0 : Sn.selected_sticker_id) || ""), je = hf(e, S.width, S.height);
    (vr = x.focus) == null || vr.call(x, { preventScroll: !0 });
    const Ae = () => lm(rf(ke, Vl(e)), Oe, ve, je);
    let Ze = Ae();
    if (Ze && (H != null && H.playback.playing) && (_e(), Ze = Ae()), Ze && C) {
      if (It.stopMotion(), Ie(), String(((Cn = Ze.item) == null ? void 0 : Cn.id) || "") !== Oe && C.apply({ type: "select-sticker", id: Ze.item.id }), ((kt = Ze.item) == null ? void 0 : kt.locked) === !0) {
        R();
        return;
      }
      const In = ve, $n = Ze.geometry.center;
      j = {
        active: !0,
        kind: Ze.hit.kind,
        pointerId: z.pointerId,
        startPoint: In,
        startCenter: { ...$n },
        startSticker: { ...Ze.item },
        startDistance: Math.max(1, Math.hypot(In.x - $n.x, In.y - $n.y)),
        startAngle: Math.atan2(In.y - $n.y, In.x - $n.x),
        projection: je
      }, C.beginGesture(), (ar = S.setPointerCapture) == null || ar.call(S, z.pointerId), S.style.cursor = Ze.hit.kind === "rotate" ? "grabbing" : Ze.hit.kind === "move" ? "move" : Ze.hit.cursor, R();
      return;
    }
    (as = S.setPointerCapture) == null || as.call(S, z.pointerId), S.style.cursor = "grabbing", It.startDrag(z.clientX, z.clientY, z.pointerId);
  }), S.addEventListener("pointermove", (z) => {
    if (!o) {
      if (!X) {
        if (!It.state.drag.active) return;
        Zn(z, Qt), It.moveDrag(z.clientX, z.clientY, "pano");
        return;
      }
      if (X.pointerId !== z.pointerId || !C) return;
      if (Zn(z, Qt), X.kind === "pan") {
        const ke = cn(z);
        C.updateGesture({
          type: "pan-camera",
          startShot: X.startShot,
          dx: ke.x - X.startPoint.x,
          dy: ke.y - X.startPoint.y,
          focalPx: X.focalPx,
          invertX: X.invertX,
          invertY: X.invertY
        });
        return;
      }
      const ve = dy(X.rollGesture, cn(z), z);
      if (!ve) return;
      X.rollGesture = ve.gesture, C.updateGesture({ type: "set-roll", value: ve.rollDeg });
      return;
    }
    if (!j && !It.state.drag.active) {
      ui(z);
      return;
    }
    if (j) {
      if (j.pointerId !== z.pointerId || !C) return;
      Zn(z, Qt);
      const ve = cn(z);
      let ke = j.startSticker;
      if (j.kind === "move")
        ke = dM(
          j.startSticker,
          {
            x: j.startCenter.x + ve.x - j.startPoint.x,
            y: j.startCenter.y + ve.y - j.startPoint.y
          },
          j.projection
        );
      else if (j.kind === "scale") {
        const Oe = Math.hypot(ve.x - j.startCenter.x, ve.y - j.startCenter.y);
        ke = hM(j.startSticker, j.startDistance, Oe);
      } else if (j.kind === "rotate") {
        const Oe = Math.atan2(ve.y - j.startCenter.y, ve.x - j.startCenter.x);
        ke = pM(j.startSticker, j.startAngle, Oe, z.shiftKey === !0);
      }
      C.updateGesture({ type: "set-transform", value: ke }), R();
      return;
    }
    !a || !It.state.drag.active || (Zn(z, Qt), It.moveDrag(z.clientX, z.clientY, "pano"));
  });
  const L = () => {
    var ve, ke;
    if (!X && !j) {
      if (!It.state.drag.active) return;
      It.endDrag(), S.style.cursor = "grab", R();
      return;
    }
    if (!C) return;
    const z = (X == null ? void 0 : X.pointerId) ?? (j == null ? void 0 : j.pointerId);
    X = null, j = null;
    try {
      (ve = S.hasPointerCapture) != null && ve.call(S, z) && ((ke = S.releasePointerCapture) == null || ke.call(S, z));
    } catch {
    }
    C.cancelGesture(), S.style.cursor = "grab", R();
  }, W = (z, ve = !1) => {
    var ke, Oe, je, Ae;
    if (!o) {
      if (!X) {
        if (!It.state.drag.active) return;
        Zn(z, Qt), (ke = S.releasePointerCapture) == null || ke.call(S, z.pointerId), S.style.cursor = "grab", It.endDrag(), R();
        return;
      }
      if (X.pointerId !== z.pointerId || !C) return;
      Zn(z, Qt), X = null, (Oe = S.releasePointerCapture) == null || Oe.call(S, z.pointerId), S.style.cursor = "grab", ve ? C.cancelGesture() : C.commitGesture(), ui(z), R();
      return;
    }
    if (j) {
      if (j.pointerId !== z.pointerId || !C) return;
      Zn(z, Qt), j = null, (je = S.releasePointerCapture) == null || je.call(S, z.pointerId), S.style.cursor = "grab", ve ? C.cancelGesture() : C.commitGesture(), R();
      return;
    }
    !a || !It.state.drag.active || (Zn(z, Qt), (Ae = S.releasePointerCapture) == null || Ae.call(S, z.pointerId), S.style.cursor = "grab", It.endDrag(), R());
  };
  S.addEventListener("pointerup", W), S.addEventListener("pointercancel", (z) => W(z, !0)), S.addEventListener("lostpointercapture", L), S.addEventListener("pointerleave", (z) => {
    !o && X || j || It.state.drag.active && W(z);
  });
  const q = (z) => {
    const ve = document.activeElement;
    if (ve !== x && !x.contains(ve)) return;
    if (z.key === "Escape" && (X || j) && C) {
      L(), pf(z);
      return;
    }
    if (!o || z.key !== "Delete" && z.key !== "Backspace" || !C) return;
    const ke = z.target, Oe = String((ke == null ? void 0 : ke.tagName) || "").toUpperCase();
    Oe === "INPUT" || Oe === "TEXTAREA" || ke != null && ke.isContentEditable || V.canDelete === !0 && (_e(), Ie(), C.apply({ type: "delete-selected" }) && R(), pf(z));
  };
  window.addEventListener("keydown", q, !0);
  const be = VM({
    requestFrame: (z) => requestAnimationFrame(z),
    cancelFrame: (z) => cancelAnimationFrame(z),
    restore: (z) => IN(z)
  }), me = (z) => {
    var ke, Oe, je, Ae, Ze, gt;
    if (!Zn(z, Qt)) return;
    if (!o) {
      const Dt = oo(Dn(e));
      if (Dt && Dt.locked !== !0 && C) {
        const or = vl(z);
        or !== 0 && (ee || (Ie(), C.beginGesture(), ee = !0), C.updateGesture({
          type: "step-fov",
          direction: or
        }) ? (A && clearTimeout(A), A = setTimeout(Y, 180), R()) : C.hasGestureChanges() || (C.cancelGesture(), ee = !1));
      } else if (!Dt) {
        const or = vm();
        It.applyWheelEvent(z) && R(), be.schedule(or);
      }
      (ke = z.preventDefault) == null || ke.call(z), (Oe = z.stopPropagation) == null || Oe.call(z), (je = z.stopImmediatePropagation) == null || je.call(z);
      return;
    }
    if (!a) return;
    const ve = vm();
    It.applyWheelEvent(z) && R(), (Ae = z.preventDefault) == null || Ae.call(z), (Ze = z.stopPropagation) == null || Ze.call(z), (gt = z.stopImmediatePropagation) == null || gt.call(z), be.schedule(ve);
  }, ge = o ? [N, S] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((z) => {
    ge.forEach((ve) => ve.addEventListener(z, me, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((z) => {
    S.addEventListener(z, (ve) => Zn(ve, Qt)), N.addEventListener(z, (ve) => Zn(ve, Qt));
  });
  const Me = Yo(e, "state_json");
  let Ne = null, xe = null;
  Me && !Me.__panoPreviewPatchedCb && (Ne = Me.callback, xe = (z) => {
    const ve = Ne ? Ne(z) : void 0;
    return R(), ve;
  }, Me.callback = xe, Me.__panoPreviewPatchedCb = xe);
  const de = Yo(e, "bg_color");
  let Ve = null, Ee = null;
  de && !de.__panoPreviewPatchedCb && (Ve = de.callback, Ee = (z) => {
    const ve = Ve ? Ve(z) : void 0;
    return R(), ve;
  }, de.callback = Ee, de.__panoPreviewPatchedCb = Ee);
  const $e = e.onRemoved, Ke = e.onResize, p = e.onExecuted, Le = e.onDragOver, st = e.onDragDrop;
  let Be = null;
  const Tt = () => {
    o && (V.dropActive = !0, Be && clearTimeout(Be), Be = setTimeout(() => {
      Be = null, V.dropActive = !1;
    }, 140));
  }, un = o ? function(z) {
    return (Le ? Le.apply(this, arguments) : !1) === !0 ? !0 : ud(z == null ? void 0 : z.dataTransfer) ? (Tt(), !0) : !1;
  } : null, rn = o ? function(z) {
    var Oe;
    if ((st ? st.apply(this, arguments) : !1) === !0) return !0;
    const ke = Array.from(((Oe = z == null ? void 0 : z.dataTransfer) == null ? void 0 : Oe.files) || []).find((je) => Or(je));
    return ke ? (Be && clearTimeout(Be), Be = null, V.dropActive = !1, U(ke), !0) : !1;
  } : null;
  o && (e.onDragOver = un, e.onDragDrop = rn);
  const Vt = o ? RM(x, {
    onActive: (z) => {
      if (z) {
        Tt();
        return;
      }
      Be && clearTimeout(Be), Be = null, V.dropActive = !1;
    },
    onDrop: (z) => {
      U(z);
    }
  }) : () => {
  }, Xn = function(z) {
    e.__panoOutputFromRun = !0;
    const ve = Ay(e, z);
    ni(e, ve ? "executed" : "sync", z), R();
    const ke = p ? p.apply(this, arguments) : void 0;
    return Da(e), ke;
  };
  e.onExecuted = Xn;
  const Ce = e.onConnectionsChange, $t = function(z, ve) {
    const ke = Xp(e, z, ve, Qf), Oe = Xp(e, z, ve, Ii), je = arguments, Ae = Ce ? Ce.apply(this, je) : void 0, Ze = () => {
      E.destroyed || (Oe && uN(e), ke && ni(e, "connection-change"), Da(e), R());
    };
    return Ze(), queueMicrotask(Ze), Ae;
  };
  e.onConnectionsChange = $t;
  const zr = function() {
    const z = Ke ? Ke.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, R(), z;
  };
  e.onResize = zr;
  const br = function() {
    return fo(), df.unregister(this), $e ? $e.apply(this, arguments) : void 0;
  };
  e.onRemoved = br;
  const fo = () => {
    var z, ve, ke, Oe, je, Ae, Ze, gt, Dt;
    E.destroyed = !0, (z = it == null ? void 0 : it.disconnect) == null || z.call(it), o ? Ie() : Fe(), S.removeEventListener("lostpointercapture", L), Vt(), F(), window.removeEventListener("keydown", q, !0), (ke = (ve = e.__panoStateFlushers) == null ? void 0 : ve.delete) == null || ke.call(ve, St), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Oe = C == null ? void 0 : C.destroy) == null || Oe.call(C), (je = pt == null ? void 0 : pt.unmount) == null || je.call(pt), H && (H.playback.dispose(), H.video.remove(), H.stickerVideo.remove(), e.__panoSurfacePlayback === H && (e.__panoSurfacePlayback = null)), O.dispose(), e.__panoSurfaceScene = null, (Ze = (Ae = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ae.dispose) == null || Ze.call(Ae), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, le(), be.dispose(), Be && clearTimeout(Be), Be = null, fd.disposeOwner(e), Xo(e), E.raf && cancelAnimationFrame(E.raf), E.raf = 0, ((gt = e.__panoCutoutNodeSurface) == null ? void 0 : gt.session) === C && (e.__panoCutoutNodeSurface = null), ((Dt = e.__panoStickersNodeSurface) == null ? void 0 : Dt.session) === C && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === zr && (e.onResize = Ke), e.onExecuted === Xn && (e.onExecuted = p), e.onConnectionsChange === $t && (e.onConnectionsChange = Ce), xe && (Me == null ? void 0 : Me.callback) === xe && (Me.callback = Ne), xe && (Me == null ? void 0 : Me.__panoPreviewPatchedCb) === xe && delete Me.__panoPreviewPatchedCb, Ee && (de == null ? void 0 : de.callback) === Ee && (de.callback = Ve), Ee && (de == null ? void 0 : de.__panoPreviewPatchedCb) === Ee && delete de.__panoPreviewPatchedCb, e.onDragOver === un && (e.onDragOver = Le), e.onDragDrop === rn && (e.onDragDrop = st), e.onRemoved === br && (e.onRemoved = $e);
  };
  e.__panoDomRestore = fo, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = C && ln && !o ? { session: C, model: V } : null, e.__panoStickersNodeSurface = C && ln && o ? { session: C, model: V } : null, e.__panoDomPreview = {
    widget: K,
    root: x,
    canvas: S,
    requestDraw: R,
    state: E,
    emptyHintEl: v,
    nodeSurface: e.__panoCutoutNodeSurface
  }, df.register(e), e.graph && ni(e, "attach"), R();
}
function wm(e, t = {}) {
  Sy(e).attach({
    ...t,
    mode: "cutout"
  });
}
function xm(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (xy(e) && !n) {
    dd(e);
    return;
  }
  Sy(e).attach(t);
}
function RN(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function VN(e, t = 1, n = Wp) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), l = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(l) ? l : 0) * o, b = Number(n), g = Number.isFinite(b) && b > 0 ? b : Wp, _ = Math.max(u, d), x = _ > 0 ? Math.min(1, g / _) : 1;
  return {
    width: Math.max(1, Math.round(u * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function $N({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var N;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let l = !1, u = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const S = d();
    return S === u || (u = S, o(S)), S;
  }, g = () => b();
  return (N = t == null ? void 0 : t.addEventListener) == null || N.call(t, "fullscreenchange", g), b(), { toggle: async () => {
    var S;
    if (l || !e || !t) return !1;
    if (d()) {
      try {
        await ((S = t.exitFullscreen) == null ? void 0 : S.call(t));
      } catch {
      }
      return l ? !1 : (b(), d());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), l) return !1;
        if (d())
          return b(), !0;
      } catch {
      }
    return l || (a(), b()), !1;
  }, isActive: d, destroy: () => {
    var S, v, F;
    if (!l) {
      if (l = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", g), d())
        try {
          const $ = (v = t.exitFullscreen) == null ? void 0 : v.call(t);
          (F = $ == null ? void 0 : $.catch) == null || F.call($, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const zN = { class: "pano-preview-node-surface" }, jN = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (oe(), ce("div", zN, [
      De(sn, {
        icon: e.model.fullscreen ? Qe(Pe).fullscreen_close : Qe(Pe).fullscreen,
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
      e.model.viewUnavailable ? (oe(), $r(od, { key: 0 })) : ct("", !0)
    ]));
  }
}, $s = 140, HN = 180, Sm = 40, wu = 10;
function km(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Mm(e, t) {
  const n = km(e), r = km(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Nm(e) {
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
  return typeof ((a = Gt) == null ? void 0 : a.apiURL) == "function" ? Gt.apiURL(o) : o;
}
function qo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return qo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Nm({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = qo(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Nm(e);
}
function Cy(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function GN(e) {
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
function mf(e) {
  var o;
  const t = (o = mr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Mm(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (Mm(a, n)) return t[a];
  return null;
}
function KN(e) {
  var r, o;
  const t = mf(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const l of a) {
        const u = qo(l);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function BN(e, t = "erp_image") {
  var N, S, v, F, $, K, E;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((R) => String((R == null ? void 0 : R.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((R, O) => String((R == null ? void 0 : R.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(O))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const l = (v = (S = (N = mr) == null ? void 0 : N.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : v.call(S, a), u = mf(a), d = mf(e == null ? void 0 : e.id), b = [
    (F = d == null ? void 0 : d.ui) == null ? void 0 : F.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    ($ = u == null ? void 0 : u.ui) == null ? void 0 : $.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const R of b)
    if (Array.isArray(R))
      for (const O of R) {
        const V = qo(O);
        if (V) return V;
      }
  let g = [];
  try {
    g = typeof ((K = mr) == null ? void 0 : K.getNodeImageUrls) == "function" ? mr.getNodeImageUrls(l) || [] : [];
  } catch {
    g = [];
  }
  if (Array.isArray(g) && g.length > 0)
    for (const R of g) {
      const O = qo(R);
      if (O) return O;
    }
  if (l) {
    const R = Array.isArray(l == null ? void 0 : l.imgs) ? l.imgs : [];
    for (const O of R) {
      const V = qo(O);
      if (V) return V;
    }
  }
  const _ = (E = l == null ? void 0 : l.widgets) == null ? void 0 : E.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image"), x = String((_ == null ? void 0 : _.value) || "").trim();
  return x ? Gt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function xu(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Pm(e, t, n, r, o, a, l) {
  var b, g, _;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !Cy(a) || n <= 1 || r <= 1) {
    xu(t, n, r);
    return;
  }
  if (l.failed) {
    xu(t, n, r);
    return;
  }
  const u = Number(((_ = (g = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : g.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : _.value) || 360) === 180 ? 180 : 360, d = l.render({
    width: n,
    height: r,
    camera: Cl(o, n, r),
    background: { media: a, revision: GN(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : xu(t, n, r);
}
function Am(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class WN {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = F0(() => this.requestDraw()), this.controller = $f({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ht(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: J(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: J(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, a, l, u;
        const r = (a = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : a.call(o);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((l = this.canvas) == null ? void 0 : l.clientWidth) || 0)),
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
      const l = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), l;
    }, this.node.onConnectionsChange = function() {
      const l = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), l;
    }, this.node.onResize = function() {
      const l = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), l;
    }, this.node.onRemoved = function() {
      const l = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), l;
    };
    const n = ((a = (o = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : o.find) == null ? void 0 : a.call(o, (l) => (l == null ? void 0 : l.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...l) => {
      const u = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...l) : void 0;
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
        `min-height:${$s}px`,
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
          return $s;
        },
        getHeight() {
          return $s;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Tl(lf(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max($s, Number(a.minHeight || 0)),
            minWidth: Math.max(HN, Number(a.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, o, a, l;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return ld(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ra({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = $N({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = Df(jN, {
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
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (o = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || o.call(r), this.surfaceApp = null, (l = (a = this.surfaceHost) == null ? void 0 : a.remove) == null || l.call(a), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var o;
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = Kg(n), t.addEventListener("pointerdown", (a) => {
      var l, u, d;
      a.button === 0 && ((l = n.focus) == null || l.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var l;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
    const r = (a) => {
      var l, u;
      this.controller.state.drag.active && ((l = t.releasePointerCapture) == null || l.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var l;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var l;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }), n.addEventListener("keydown", (a) => {
      var l;
      RN(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Cy(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var l;
      const o = t.localPoint(r);
      if (!o) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const a = t.getLegacyPreviewRect();
      return Am(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var l;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const o = t.localPoint(r);
      if (!o) return !0;
      const a = t.getLegacyPreviewRect();
      return t.controller.moveDrag(o.x - a.x, o.y - a.y, "pano"), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, o) {
      var d, b, g, _, x, N;
      const a = mN(this, n, r, o), l = t.getLegacyPreviewRect();
      if (!a || !Am(a.x, a.y, l))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((g = this.setDirtyCanvas) == null || g.call(this, !0, !1)), (_ = n == null ? void 0 : n.preventDefault) == null || _.call(n), (x = n == null ? void 0 : n.stopPropagation) == null || x.call(n), (N = n == null ? void 0 : n.stopImmediatePropagation) == null || N.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, l;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - wu * 2), n = Math.max(60, Number(((l = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : l[1]) || 0) - Sm - wu);
    return { x: wu, y: Sm, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), Pm(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? O0 : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = VN(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, l;
    const t = KN(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t, this.videoPaused = !1;
      const u = document.createElement("video");
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
    const n = BN(this.node, this.imageInputName);
    if (!n) {
      (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Pm(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, l, u, d, b, g, _, x, N, S, v, F, $;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (l = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || l.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (_ = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || _.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (N = this.root) == null ? void 0 : N.remove) == null || S.call(N);
    } catch {
    }
    try {
      _y(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = (($ = (F = (v = this.node) == null ? void 0 : v.widgets) == null ? void 0 : F.find) == null ? void 0 : $.call(F, (K) => (K == null ? void 0 : K.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function UN(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new WN(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function Iy(e, t, n) {
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
  const l = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const u = l ? l.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
}
function pd(e) {
  return !!(e != null && e.prototype);
}
function es(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function YN(e, t = {}) {
  pd(e) || UN(e, {
    ...t,
    onOpen: es(e, t.onOpen)
  });
}
function XN(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!pd(e)) {
    xm(e, {
      ...r,
      onOpen: es(e, t.onOpen)
    });
    return;
  }
  Iy(e, "stickers_node_preview", (o) => {
    xm(o, {
      ...r,
      onOpen: es(o, t.onOpen)
    });
  });
}
function qN(e, t = {}) {
  if (!pd(e)) {
    wm(e, {
      ...t,
      onOpen: es(e, t.onOpen)
    });
    return;
  }
  Iy(e, "cutout_preview", (n) => {
    wm(n, {
      ...t,
      onOpen: es(n, t.onOpen)
    });
  });
}
const Tn = {
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
}, Ur = "pen";
function Cm(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function JN(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), l = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((_) => {
      r.push(String(_ || ""));
    }), !r.length)) return;
    const g = Number(b.index);
    Number.isInteger(g) ? g === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, g)) : o = r.length - 1;
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
      const b = r.length, g = Math.max(0, b - l), _ = o >= 0 ? Math.max(0, Math.min(o, g)) : g, x = r.slice(_, _ + l), N = o < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, o - _));
      return {
        version: 1,
        entries: x,
        index: N
      };
    },
    hydrate: u
  };
}
function _i(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function ZN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function QN({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: o,
  rgb01ToHsv: a,
  hsv01ToRgb: l,
  getBrushPresetIdForTool: u,
  isActiveLassoTool: d
}) {
  var E, R;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", g = {
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
    historyEntries: Array.from({ length: 8 }, (O, V) => ({ index: V, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return g;
  const _ = ((E = t.find((O) => o(e.paintColor, O.color))) == null ? void 0 : E.id) || "", x = !_, N = a(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((R = e.customPaintColor) == null ? void 0 : R.a) ?? 1))) * 100), v = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[v] ?? 10, $ = d(), K = Array.from({ length: 8 }, (O, V) => e.customPaintHistory[V] || null);
  return {
    ...g,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: _,
    customColorActive: x,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...l(N.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    alphaValue: S,
    alphaText: `${S}%`,
    historyEntries: K.map((O, V) => ({
      index: V,
      color: O ? { cssColor: r(O, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: $,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function e2({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function t2({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: l,
  notes: u,
  visibilityRows: d,
  uiSettings: b,
  normalizeCoverageValue: g
}) {
  return {
    coverage: { value: g(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || o === "stroke" || o === "camera" || a.length > 1,
      label: "Copy State"
    },
    params: l,
    notes: u,
    paramsDisabled: !r,
    visibilityRows: d,
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function n2({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: a,
  anyLocked: l,
  selectedLocked: u,
  activeAspect: d,
  cutoutAspectOpen: b,
  isExternalSticker: g,
  isStickerHidden: _,
  canRestoreSelectedToInitial: x,
  iconSet: N
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let S = [];
  if (n.length > 1)
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!l },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!l },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!l }
    ];
  else if (r === "stroke")
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  else if (e === "stickers" || r === "image") {
    if (S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u }
    ], g(t) || (S.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: N.duplicate }), S.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: N.replace_image })), g(t)) {
      const V = x(), H = _(t);
      S.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: V ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !V
      }), S.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: H ? "Show" : "Hide",
        tip: H ? "Show input image" : "Hide input image",
        icon: H ? N.eye : N.eye_dashed
      });
    }
    S.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed }), g(t) || S.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u });
  } else
    S = [
      {
        key: "aspect",
        kind: "aspect",
        icon: N.aspect,
        open: !!b,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((V) => ({ value: V, label: V, active: d === V }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  const v = o.corners.map((V) => ({ x: Number(V == null ? void 0 : V.x), y: Number(V == null ? void 0 : V.y) })).filter((V) => Number.isFinite(V.x) && Number.isFinite(V.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = v.map((V) => V.x), $ = v.map((V) => V.y), K = Math.min(...F), E = Math.max(...F), R = Math.min(...$), O = Math.max(...$);
  return {
    visible: !0,
    left: (K + E) * 0.5,
    top: O + 18,
    items: S,
    anchor: { minX: K, maxX: E, minY: R, maxY: O }
  };
}
const r2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function i2(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: l, playing: u, label: d, audio: b = null, fpsLocked: g = !1 }) {
  const _ = (S, v, F, $, K) => {
    const E = (R) => (r == null ? void 0 : r.owner) === S && r.lane === R ? r.frames.map((O) => O + K) : [];
    return {
      id: S,
      label: F,
      clip: $,
      selected: S === o,
      open: l.has(S),
      keyed: iS(v, t - K),
      keys: rS(v).map((R) => ({ frame: R.frame + K, full: R.full })),
      selectedFrames: E(null),
      lanes: uo(v).map((R) => ({
        key: `${S}:${R}`,
        lane: R,
        label: r2[R],
        frames: v[R].keyframes.map((O) => O.frame + K),
        selectedFrames: E(R)
      }))
    };
  }, x = e.stickers.filter((S) => S.placement === "sky").sort((S, v) => v.z_index - S.z_index), N = e.stickers.filter((S) => S.placement === "world");
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
    fpsLocked: g,
    length: e.timeline.length,
    rows: [
      _("camera", e.camera, "Camera", null, 0),
      ...[...x, ...N].map((S) => {
        const { start: v, in: F, duration: $ } = S.clip;
        return _(S.id, S, w0(S), { start: v, end: $ === null ? null : v + $ }, v - F);
      })
    ]
  };
}
function o2(e, t, n, r) {
  const o = sS(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, l = Math.max(...n) + r;
  return { label: a === l ? `Frame ${a}` : `${a} – ${l}`, ...o };
}
const a2 = { class: "pano-floating-right" }, s2 = ["data-settled"], l2 = ["data-ready", "data-settled"], c2 = ["aria-label", "data-tip"], u2 = {
  key: 1,
  class: "pano-camera-preview-label"
}, f2 = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), ce(Ye, null, [
      B("div", a2, [
        (oe(!0), ce(Ye, null, xt(e.buttons, (r) => ii((oe(), $r(sn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"])), [
          [ao, r.visible !== !1]
        ])), 128))
      ]),
      ii(B("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        B("div", {
          class: at(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: wt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = B("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            B("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (oe(), ce("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            De(Ct, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, c2)) : ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (oe(), ce("div", u2, rt(e.preview.label || "Preview unavailable"), 1)) : ct("", !0)
        ], 14, l2)
      ], 8, s2), [
        [ao, e.preview.visible]
      ])
    ], 64));
  }
}, d2 = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, h2 = ["y2", "transform"], p2 = ["transform"], m2 = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => ii((oe(), ce("div", {
      class: at(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (oe(), ce("svg", d2, [
        a[1] || (a[1] = B("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (oe(!0), ce(Ye, null, xt(Qe(n), (l) => (oe(), ce("line", {
          key: l,
          class: at(["pano-frame-roll-knob-tick", { zero: l === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: l % 45 === 0 ? 7 : 6,
          transform: `rotate(${l} 20 20)`
        }, null, 10, h2))), 128)),
        B("g", { transform: r.value }, [...a[0] || (a[0] = [
          B("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, p2),
        a[2] || (a[2] = B("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [ao, e.model.visible === !0]
    ]);
  }
}, g2 = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), ce("div", {
      class: at(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(py, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      De(sn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      De(m2, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, y2 = ["aria-label"], b2 = { class: "pano-canvas-confirm-title" }, v2 = { class: "pano-canvas-confirm-text" }, _2 = { class: "pano-canvas-confirm-actions" }, w2 = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, x2 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Kt(null), r = /* @__PURE__ */ Kt(null);
    let o = null;
    function a() {
      const _ = r.value;
      return _ ? Array.from(_.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((x) => x instanceof HTMLElement ? !x.hidden && x.tabIndex >= 0 && x.offsetParent !== null : !1) : [];
    }
    function l(_) {
      const x = r.value;
      if (!x) return;
      const N = x.querySelector(`[data-action='${_}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function u() {
      var v;
      const _ = r.value;
      if (!_) return;
      const x = _.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const S = a()[0] || _;
      (v = S == null ? void 0 : S.focus) == null || v.call(S);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(_) {
      var $;
      if (_.defaultPrevented) return;
      if (_.key === "Escape") {
        _.preventDefault(), _.stopPropagation(), l("confirm-cancel");
        return;
      }
      if (_.key !== "Tab") return;
      const x = a(), N = r.value;
      if (!x.length) {
        _.preventDefault(), ($ = N == null ? void 0 : N.focus) == null || $.call(N);
        return;
      }
      const S = x[0], v = x[x.length - 1], F = document.activeElement;
      if (_.shiftKey) {
        (F === S || F === N || !(N != null && N.contains(F))) && (_.preventDefault(), v.focus());
        return;
      }
      (F === v || !(N != null && N.contains(F))) && (_.preventDefault(), S.focus());
    }
    function g(_) {
      _.target === n.value && l("confirm-cancel");
    }
    return Qi(() => t.model.visible, (_, x) => {
      if (_) {
        o = document.activeElement, Ul(() => {
          u();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), rs(() => {
      d();
    }), (_, x) => e.model.visible === !0 ? (oe(), ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: At(g, ["self"])
    }, [
      B("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        B("div", b2, rt(e.model.title), 1),
        B("div", v2, rt(e.model.text), 1),
        B("div", _2, [
          x[0] || (x[0] = B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          B("button", w2, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, y2)
    ], 512)) : ct("", !0);
  }
}, S2 = ["data-paint-pane"], k2 = ["hidden"], M2 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], N2 = ["aria-pressed", "disabled"], P2 = ["hidden"], A2 = { class: "pano-paint-color-pop-head" }, C2 = { class: "pano-paint-color-field" }, I2 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, E2 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, O2 = { class: "pano-paint-color-field" }, F2 = { class: "pano-paint-alpha-wrap" }, T2 = ["value"], D2 = { "data-paint-alpha-value": "" }, L2 = ["hidden"], R2 = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, V2 = ["data-paint-history-index", "aria-label", "disabled"], $2 = ["data-paint-footer"], z2 = ["data-paint-group"], j2 = ["hidden"], H2 = ["value", "disabled"], G2 = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, K2 = ["hidden"], B2 = {
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
    return (r, o) => (oe(), ce("div", {
      class: at(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (oe(!0), ce(Ye, null, xt(e.panes, (a) => {
        var l;
        return oe(), ce("div", {
          key: a.key,
          class: at(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (oe(), ce("div", {
            key: 0,
            class: at(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (oe(!0), ce(Ye, null, xt(e.paintSwatches, (u) => (oe(), ce("button", {
              key: u.id,
              class: at(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: wt(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, M2))), 128)),
            B("button", {
              class: at(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: wt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, N2),
            B("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: wt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              B("div", A2, [
                B("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: wt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = B("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              B("div", C2, [
                B("div", I2, [
                  B("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: wt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                B("div", E2, [
                  B("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: wt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              B("label", O2, [
                o[1] || (o[1] = B("span", null, "Opacity", -1)),
                B("div", F2, [
                  B("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, T2),
                  B("span", D2, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              B("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                B("div", R2, [
                  (oe(!0), ce(Ye, null, xt(e.state.historyEntries || [], (u) => (oe(), ce("button", {
                    key: u.index,
                    class: at(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: wt(n(u.color))
                  }, null, 14, V2))), 128))
                ])
              ], 8, L2)
            ], 12, P2)
          ], 10, k2)) : ct("", !0),
          B("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            B("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (oe(!0), ce(Ye, null, xt(a.tools, (u) => {
                var d;
                return oe(), $r(sn, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, z2),
            B("div", {
              class: at(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              B("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: wt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, H2),
              B("span", G2, rt(e.state.sizeText || "10"), 1)
            ], 10, j2),
            B("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((l = e.state.clearVisible) == null ? void 0 : l[a.key]) ?? !a.clearHidden)
            }, [
              De(sn, {
                icon: Qe(Pe).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, K2)
          ], 8, $2)
        ], 10, S2);
      }), 128))
    ], 2));
  }
}, W2 = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Kt(null), r = /* @__PURE__ */ Kt(null), o = /* @__PURE__ */ Kt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (l, u) => (oe(), ce(Ye, null, [
      B("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      B("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        B("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, U2 = {
  key: 0,
  class: "pano-cutout-menu"
}, Y2 = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, X2 = ["data-aspect"], q2 = ["data-action", "aria-label", "data-tip", "disabled"], J2 = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), ce("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: wt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (oe(!0), ce(Ye, null, xt(e.model.items || [], (r) => (oe(), ce(Ye, {
        key: r.key
      }, [
        r.kind === "aspect" ? (oe(), ce("div", U2, [
          B("button", Y2, [
            De(Ct, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          B("div", {
            class: at(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (oe(!0), ce(Ye, null, xt(r.choices || [], (o) => (oe(), ce("button", {
              key: o.value,
              class: at(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, rt(o.label), 11, X2))), 128))
          ], 2)
        ])) : (oe(), ce("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          De(Ct, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, q2))
      ], 64))), 128))
    ], 4));
  }
}, Z2 = {
  key: 0,
  class: "pano-easing"
}, Q2 = { class: "pano-section-title" }, eP = { class: "pano-easing-range" }, tP = { class: "pano-easing-modes" }, nP = ["aria-pressed", "onClick"], rP = ["viewBox"], iP = ["x", "y"], oP = ["x1", "y1", "x2", "y2"], aP = ["d"], sP = ["x1", "y1", "x2", "y2"], lP = ["x1", "y1", "x2", "y2"], cP = ["cx", "cy"], uP = ["cx", "cy"], fP = { class: "pano-easing-note" }, Yr = 132, Hi = 14, dP = {
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
    ], a = /* @__PURE__ */ Kt(null), l = ut(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), u = (S) => Hi + S * Yr, d = (S) => Hi + (1 - S) * Yr, b = ut(() => {
      var K;
      if (((K = n.model) == null ? void 0 : K.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [S, v, F, $] = l.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(S)} ${d(v)} ${u(F)} ${d($)} ${u(1)} ${d(1)}`;
    }), g = ut(() => l.value ? l.value.map((S) => S.toFixed(2)).join(", ") : "");
    function _(S) {
      var v;
      return JSON.stringify(S.easing) === JSON.stringify((v = n.model) == null ? void 0 : v.easing);
    }
    function x(S, v) {
      r("timeline", { type: "easing", easing: S, commit: v });
    }
    function N(S, v) {
      var R;
      if (S.button !== 0 || !l.value) return;
      const F = S.currentTarget;
      (R = F.setPointerCapture) == null || R.call(F, S.pointerId);
      let $ = null;
      const K = (O) => {
        const V = a.value.getBoundingClientRect(), H = V.width / (Yr + Hi * 2), Q = ((O.clientX - V.left) / H - Hi) / Yr, _e = 1 - ((O.clientY - V.top) / H - Hi) / Yr;
        $ = [...$ || l.value], $[v] = Math.round(Math.min(1, Math.max(0, Q)) * 100) / 100, $[v + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, x($, !1);
      }, E = () => {
        F.removeEventListener("pointermove", K), F.removeEventListener("pointerup", E), F.removeEventListener("pointercancel", E), $ && x($, !0);
      };
      F.addEventListener("pointermove", K), F.addEventListener("pointerup", E), F.addEventListener("pointercancel", E);
    }
    return (S, v) => e.model ? (oe(), ce("div", Z2, [
      B("div", Q2, [
        v[2] || (v[2] = B("span", null, "Easing", -1)),
        B("span", eP, rt(e.model.label), 1)
      ]),
      B("div", tP, [
        (oe(), ce(Ye, null, xt(o, (F) => B("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": _(F) ? "true" : "false",
          onClick: ($) => x(F.easing, !0)
        }, rt(F.label), 9, nP)), 64))
      ]),
      l.value || e.model.easing === "hold" ? (oe(), ce("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Yr + Hi * 2} ${Yr + Hi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        B("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: Yr,
          height: Yr
        }, null, 8, iP),
        B("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, oP),
        B("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, aP),
        l.value ? (oe(), ce(Ye, { key: 0 }, [
          B("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(l.value[0]),
            y2: d(l.value[1])
          }, null, 8, sP),
          B("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(l.value[2]),
            y2: d(l.value[3])
          }, null, 8, lP),
          B("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[0]),
            cy: d(l.value[1]),
            r: "6",
            onPointerdown: v[0] || (v[0] = (F) => N(F, 0))
          }, null, 40, cP),
          B("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[2]),
            cy: d(l.value[3]),
            r: "6",
            onPointerdown: v[1] || (v[1] = (F) => N(F, 2))
          }, null, 40, uP)
        ], 64)) : ct("", !0)
      ], 8, rP)) : ct("", !0),
      B("div", fP, [
        e.model.mixed ? (oe(), ce(Ye, { key: 0 }, [
          Ia("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (oe(), ce(Ye, { key: 1 }, [
          Ia("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (oe(), ce(Ye, { key: 2 }, [
          Ia("Holds the value, then jumps to the next keyframe.")
        ], 64)) : l.value ? (oe(), ce(Ye, { key: 3 }, [
          Ia("cubic-bezier(" + rt(g.value) + ")", 1)
        ], 64)) : ct("", !0)
      ])
    ])) : ct("", !0);
  }
}, hP = {
  class: "pano-side",
  "data-side": ""
}, pP = { class: "pano-side-head" }, mP = { class: "pano-side-title" }, gP = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, yP = {
  key: 0,
  class: "pano-side-scroll"
}, bP = { class: "pano-inspector" }, vP = { class: "pano-ui-row pano-coverage-row" }, _P = ["data-selected"], wP = ["aria-pressed", "disabled"], xP = ["aria-pressed", "disabled"], SP = {
  key: 0,
  class: "pano-section-title"
}, kP = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, MP = {
  class: "pano-picker",
  "data-picker": "selection"
}, NP = ["disabled"], PP = { class: "pano-picker-label" }, AP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, CP = ["hidden"], IP = ["data-selection-id"], EP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, OP = {
  key: 2,
  class: "pano-state-actions"
}, FP = ["disabled"], TP = ["data-key"], DP = ["min", "max", "step", "value", "disabled", "data-param-key"], LP = ["min", "max", "step", "value", "disabled", "data-param-key"], RP = { class: "pano-visibility-section" }, VP = { class: "pano-visibility-stack" }, $P = ["data-visibility-row"], zP = { class: "pano-visibility-name" }, jP = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, HP = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], GP = ["open"], KP = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, BP = { class: "pano-ui-settings-body" }, WP = { class: "pano-ui-row" }, UP = ["data-selected"], YP = ["aria-pressed"], XP = ["aria-pressed"], qP = { class: "pano-ui-row" }, JP = ["data-selected"], ZP = ["aria-pressed"], QP = ["aria-pressed"], eA = {
  key: 1,
  class: "pano-side-footer"
}, tA = ["data-action"], nA = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ut(() => {
      const u = n.model;
      return !u || typeof u != "object" ? !1 : Object.keys(u).length > 0 && !!u.coverage;
    });
    function a(u) {
      return { "--v": `${Number((u == null ? void 0 : u.fillPct) || 0)}%` };
    }
    function l(u, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (u == null ? void 0 : u.enabled) === !1;
    }
    return (u, d) => {
      var b, g, _, x, N;
      return oe(), ce("div", hP, [
        B("div", pP, [
          B("div", mP, [
            B("span", gP, [
              De(Ct, {
                icon: Qe(Pe).globe
              }, null, 8, ["icon"])
            ]),
            B("span", null, rt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = B("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = B("div", { class: "pano-divider" }, null, -1)),
        o.value ? (oe(), ce("div", yP, [
          B("div", bP, [
            d[11] || (d[11] = B("div", { class: "pano-section-title" }, [
              B("span", null, "Scene")
            ], -1)),
            B("div", vP, [
              d[2] || (d[2] = B("label", null, "Coverage", -1)),
              B("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "1" : "0"
              }, [
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 360 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "360", 8, wP),
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, xP)
              ], 8, _P)
            ]),
            e.model.transformTitle !== !1 ? (oe(), ce("div", SP, [...d[3] || (d[3] = [
              B("span", null, "Transform", -1)
            ])])) : ct("", !0),
            e.model.selectionPicker ? (oe(), ce("div", kP, [
              B("label", null, rt(e.model.selectionPicker.label), 1),
              B("div", MP, [
                B("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  B("span", PP, [
                    e.model.selectionPicker.currentIcon ? (oe(), ce("span", AP, [
                      De(Ct, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    B("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = B("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, NP),
                B("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (oe(!0), ce(Ye, null, xt(e.model.selectionPicker.items || [], (S) => (oe(), ce("button", {
                    key: S.id,
                    type: "button",
                    class: at(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (oe(), ce("span", EP, [
                      De(Ct, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    B("span", null, rt(S.label), 1)
                  ], 10, IP))), 128))
                ], 8, CP)
              ])
            ])) : ct("", !0),
            e.model.copyStateButton ? (oe(), ce("div", OP, [
              B("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(Ct, {
                  icon: Qe(Pe).copy
                }, null, 8, ["icon"]),
                B("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, FP)
            ])) : ct("", !0),
            B("div", {
              class: at(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (oe(!0), ce(Ye, { key: 0 }, xt(e.model.notes, (S) => (oe(), ce("div", {
                key: S,
                class: "pano-param-note"
              }, rt(S), 1))), 128)) : (oe(!0), ce(Ye, { key: 1 }, xt(e.model.params || [], (S) => (oe(), ce("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                B("label", null, rt(S.label), 1),
                B("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: l(S, e.model),
                  style: wt(a(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, DP),
                B("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: l(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, LP)
              ], 8, TP))), 128))
            ], 2),
            De(dP, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (S) => r("timeline", S))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (oe(), ce(Ye, { key: 3 }, [
              d[6] || (d[6] = B("div", { class: "pano-divider" }, null, -1)),
              B("div", RP, [
                d[5] || (d[5] = B("div", { class: "pano-section-title" }, [
                  B("span", null, "Layers")
                ], -1)),
                B("div", VP, [
                  (oe(!0), ce(Ye, null, xt(e.model.visibilityRows, (S) => (oe(), ce("div", {
                    key: S.key,
                    class: at(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    B("span", zP, [
                      B("span", jP, [
                        De(Ct, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      B("span", null, rt(S.label), 1)
                    ]),
                    B("button", {
                      class: at(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      De(Ct, {
                        icon: S.visible === !0 ? Qe(Pe).eye : Qe(Pe).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, HP)
                  ], 10, $P))), 128))
                ])
              ])
            ], 64)) : ct("", !0),
            e.model.uiSettings ? (oe(), ce("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              B("summary", null, [
                d[7] || (d[7] = B("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                B("span", KP, [
                  De(Ct, {
                    icon: Qe(Pe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              B("div", BP, [
                B("div", WP, [
                  d[8] || (d[8] = B("label", null, "Drag X", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, YP),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, XP)
                  ], 8, UP)
                ]),
                B("div", qP, [
                  d[9] || (d[9] = B("label", null, "Drag Y", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, ZP),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, QP)
                  ], 8, JP)
                ]),
                d[10] || (d[10] = B("div", { class: "pano-ui-row" }, [
                  B("span"),
                  B("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, GP)) : ct("", !0)
          ])
        ])) : ct("", !0),
        (e.model.footerButtons || []).length ? (oe(), ce("div", eA, [
          (oe(!0), ce(Ye, null, xt(e.model.footerButtons, (S) => (oe(), ce("button", {
            key: S.action,
            class: at(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, rt(S.label), 11, tA))), 128))
        ])) : ct("", !0)
      ]);
    };
  }
}, rA = { class: "pano-timeline-bar" }, iA = ["aria-label", "data-tip"], oA = ["aria-label", "data-tip"], aA = { class: "pano-timeline-time" }, sA = ["data-tip"], lA = { key: 0 }, cA = ["value"], uA = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, fA = ["value"], dA = ["aria-expanded"], hA = ["inert"], pA = { class: "pano-timeline-name" }, mA = ["aria-expanded", "aria-label", "onClick"], gA = ["title", "aria-current", "onClick"], yA = ["data-keyed", "aria-label", "onClick"], bA = ["onPointerdown"], vA = ["onPointerdown"], _A = ["onPointerdown"], wA = ["onPointerdown"], xA = ["aria-label", "data-tip", "onPointerdown"], SA = { key: 0 }, kA = ["onPointerdown"], MA = ["aria-label", "data-tip", "onPointerdown"], NA = { key: 0 }, PA = 10, AA = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Kt(null), l = /* @__PURE__ */ Kt(null), u = /* @__PURE__ */ Kt(1), d = /* @__PURE__ */ Kt(0), b = /* @__PURE__ */ Kt(!1);
    let g = null, _ = null, x = null;
    Xl(() => {
      g = new ResizeObserver(([U]) => {
        u.value = Math.max(1, U.contentRect.width);
      }), a.value && g.observe(a.value), _ = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), l.value && _.observe(l.value);
    }), rs(() => {
      g == null || g.disconnect(), _ == null || _.disconnect(), x == null || x();
    });
    const N = ut(() => Math.max(1, Number(n.model.span || 1))), S = ut(() => u.value / N.value), v = (U) => `${U / N.value * 100}%`, F = ut(() => {
      const U = o.find((j) => j * S.value >= 56) || o[o.length - 1], X = [];
      for (let j = 0; j < N.value; j += U) X.push(j);
      return X;
    });
    function $(U) {
      const X = a.value.getBoundingClientRect(), j = Math.floor((U - X.left) / Math.max(1, X.width) * N.value);
      return Math.min(N.value - 1, Math.max(0, j));
    }
    function K(U, X, j) {
      const A = Math.ceil(PA / Math.max(1e-6, S.value)), ee = new Map(X.map((Y) => [Y.frame, Y.full]));
      return dS(X.map((Y) => Y.frame), A).map((Y, Ie) => ({
        ...Y,
        key: `${U}:${Ie}`,
        partial: Y.frames.some((Fe) => !ee.get(Fe)),
        selected: Y.frames.some((Fe) => j.includes(Fe))
      }));
    }
    function E(U) {
      return K(U.id, U.keys, U.selectedFrames);
    }
    function R(U) {
      return K(U.key, U.frames.map((X) => ({ frame: X, full: !0 })), U.selectedFrames);
    }
    function O(U) {
      const X = U.end === null ? N.value : U.end;
      return { left: v(U.start), width: v(Math.max(0, X - U.start)) };
    }
    function V(U, X) {
      const j = U.clientX, A = Math.max(1e-6, S.value);
      let ee = 0;
      X("start", 0, U);
      const Y = (Fe) => {
        if (Fe.pointerId !== U.pointerId) return;
        const St = Math.round((Fe.clientX - j) / A);
        St !== ee && (ee = St, X("move", ee, Fe));
      }, Ie = (Fe) => {
        Fe.pointerId === U.pointerId && (x(), X("end", ee, Fe));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", Y), window.removeEventListener("pointerup", Ie), window.removeEventListener("pointercancel", Ie), x = null;
      }, window.addEventListener("pointermove", Y), window.addEventListener("pointerup", Ie), window.addEventListener("pointercancel", Ie);
    }
    function H(U) {
      U.button === 0 && V(U, (X, j, A) => r("action", { type: "seek", frame: $(A.clientX), phase: X }));
    }
    function Q(U, X, j) {
      U.button === 0 && (r("action", { type: "select-row", id: X.id }), V(U, (A, ee) => r("action", { type: "clip", id: X.id, mode: j, delta: ee, phase: A })));
    }
    function _e(U, X, j, A, ee) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: j, frames: A.frames, additive: !0 });
          return;
        }
        A.frames.every((Y) => ee.includes(Y)) || r("action", { type: "select-keys", owner: X.id, lane: j, frames: A.frames, additive: !1 }), V(U, (Y, Ie) => r("action", { type: "move-keys", delta: Ie, phase: Y }));
      }
    }
    const D = ut(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function C(U, X, j) {
      r("action", X), await Ul(), U.target.value = j();
    }
    function se(U) {
      C(U, { type: "fps", fps: Number(U.target.value) }, () => D.value);
    }
    function le(U) {
      const X = U.target.value.trim();
      C(U, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function fe(U, X, j) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: j, frames: [], additive: !1 });
    }
    return (U, X) => ii((oe(), ce("section", {
      class: at(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      B("div", rA, [
        B("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (j) => r("action", { type: "play" }))
        }, [
          De(Ct, {
            icon: e.model.playing ? Qe(Pe).pause : Qe(Pe).play
          }, null, 8, ["icon"])
        ], 8, iA),
        e.model.hasAudio ? (oe(), ce("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (j) => r("action", { type: "mute" }))
        }, [
          De(Ct, {
            icon: e.model.muted ? Qe(Pe).volume_muted : Qe(Pe).volume2
          }, null, 8, ["icon"])
        ], 8, oA)) : ct("", !0),
        B("span", aA, rt(e.model.label), 1),
        B("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (oe(), ce("span", lA, rt(D.value), 1)) : (oe(), ce("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: D.value,
            "aria-label": "Timeline fps",
            onChange: se
          }, null, 40, cA)),
          X[6] || (X[6] = B("span", null, "fps", -1))
        ], 8, sA),
        B("label", uA, [
          X[7] || (X[7] = B("span", null, "Length", -1)),
          B("input", {
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: le
          }, null, 40, fA)
        ]),
        B("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (j) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = B("span", null, "Timeline", -1)),
          De(Ct, {
            icon: Qe(Pe).chevron
          }, null, 8, ["icon"])
        ], 8, dA)
      ]),
      B("div", {
        class: at(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: wt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = At((j) => b.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = At((j) => b.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = At((j) => b.value = !1, ["self"]))
      }, [
        B("div", {
          ref_key: "gridRef",
          ref: l,
          class: "pano-timeline-grid"
        }, [
          X[9] || (X[9] = B("div", { class: "pano-timeline-corner" }, null, -1)),
          B("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: H
          }, [
            (oe(!0), ce(Ye, null, xt(F.value, (j) => (oe(), ce("span", {
              key: j,
              class: "pano-timeline-tick",
              style: wt({ left: v(j) })
            }, rt(j), 5))), 128)),
            B("span", {
              class: "pano-timeline-playhead",
              style: wt({ left: v(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (oe(!0), ce(Ye, null, xt(e.model.rows || [], (j) => (oe(), ce(Ye, {
            key: j.id
          }, [
            B("div", {
              class: at(["pano-timeline-head", { selected: j.selected }])
            }, [
              B("div", pA, [
                B("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": j.open ? "true" : "false",
                  "aria-label": j.open ? `Hide ${j.label} parameters` : `Show ${j.label} parameters`,
                  onClick: At((A) => r("action", { type: "toggle-row", id: j.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Pe).chevron
                  }, null, 8, ["icon"])
                ], 8, mA),
                B("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: j.label,
                  "aria-current": j.selected ? "true" : void 0,
                  onClick: (A) => r("action", { type: "select-row", id: j.id })
                }, [
                  De(Ct, {
                    icon: j.clip ? Qe(Pe).image : Qe(Pe).camera
                  }, null, 8, ["icon"]),
                  B("span", null, rt(j.label), 1)
                ], 8, gA),
                B("button", {
                  class: at(["pano-timeline-key", { keyed: j.keyed }]),
                  type: "button",
                  "data-keyed": j.keyed ? "true" : "false",
                  "aria-label": j.keyed ? `Every ${j.label} parameter has a keyframe here; update them` : `Add keyframes for every ${j.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: At((A) => r("action", { type: "key-row", owner: j.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Pe).keyframe
                  }, null, 8, ["icon"])
                ], 10, yA)
              ]),
              j.open ? (oe(!0), ce(Ye, { key: 0 }, xt(j.lanes, (A) => (oe(), ce("div", {
                key: A.key,
                class: "pano-timeline-lane-head"
              }, rt(A.label), 1))), 128)) : ct("", !0)
            ], 2),
            B("div", {
              class: at(["pano-timeline-track", { selected: j.selected }])
            }, [
              B("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (A) => fe(A, j, null)
              }, [
                j.clip ? (oe(), ce("div", {
                  key: 0,
                  class: at(["pano-timeline-clip", { open: j.clip.end === null }]),
                  style: wt(O(j.clip)),
                  onPointerdown: At((A) => Q(A, j, "move"), ["stop"])
                }, [
                  B("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: At((A) => Q(A, j, "start"), ["stop"])
                  }, null, 40, _A),
                  B("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: At((A) => Q(A, j, "end"), ["stop"])
                  }, null, 40, wA)
                ], 46, vA)) : ct("", !0),
                (oe(!0), ce(Ye, null, xt(E(j), (A) => (oe(), ce("button", {
                  key: A.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: A.selected, cluster: A.frames.length > 1, partial: A.partial }]),
                  style: wt({ left: v(A.frame + 0.5) }),
                  "aria-label": `${j.label}: ${A.frames.length > 1 ? `${A.frames.length} keyframes` : `keyframe at frame ${A.frames[0]}`}`,
                  "data-tip": A.frames.length > 1 ? `${A.frames.length} keyframes` : `Frame ${A.frames[0]}`,
                  onPointerdown: At((ee) => _e(ee, j, null, A, j.selectedFrames), ["stop"])
                }, [
                  A.frames.length > 1 ? (oe(), ce("span", SA, rt(A.frames.length), 1)) : ct("", !0)
                ], 46, xA))), 128))
              ], 40, bA),
              j.open ? (oe(!0), ce(Ye, { key: 0 }, xt(j.lanes, (A) => (oe(), ce("div", {
                key: A.key,
                class: "pano-timeline-lane",
                onPointerdown: (ee) => fe(ee, j, A.lane)
              }, [
                (oe(!0), ce(Ye, null, xt(R(A), (ee) => (oe(), ce("button", {
                  key: ee.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: ee.selected, cluster: ee.frames.length > 1 }]),
                  style: wt({ left: v(ee.frame + 0.5) }),
                  "aria-label": `${A.label}: ${ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `keyframe at frame ${ee.frames[0]}`}`,
                  "data-tip": ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `Frame ${ee.frames[0]}`,
                  onPointerdown: At((Y) => _e(Y, j, A.lane, ee, A.selectedFrames), ["stop"])
                }, [
                  ee.frames.length > 1 ? (oe(), ce("span", NA, rt(ee.frames.length), 1)) : ct("", !0)
                ], 46, MA))), 128))
              ], 40, kA))), 128)) : ct("", !0),
              B("span", {
                class: "pano-timeline-playhead",
                style: wt({ left: v(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, hA)
    ], 2)), [
      [ao, e.model.visible]
    ]);
  }
}, CA = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), ce("div", {
      class: at(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: wt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, IA = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, EA = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (oe(), ce("div", IA, [
      (oe(!0), ce(Ye, null, xt(e.buttons, (r) => ii((oe(), $r(sn, {
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
        [ao, r.visible !== !1]
      ])), 128))
    ]));
  }
}, OA = ["data-video-ready"], FA = { class: "pano-video-transport-shell" }, TA = { class: "pano-video-controls-left" }, DA = { class: "pano-video-filmstrip" }, LA = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, RA = ["src", "onLoad"], VA = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, $A = ["max", "value", "disabled"], zA = { class: "pano-video-controls-right" }, jA = ["data-has-audio"], HA = { class: "pano-video-volume-pop" }, GA = ["value", "disabled"], KA = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause" : "Play";
    }), r = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause video" : "Play video";
    }), o = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? Pe.pause : Pe.play;
    }), a = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop" : "Disable loop";
    }), l = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? Pe.loop_off : Pe.loop;
    }), d = ut(() => {
      var O, V;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number(((V = t.state) == null ? void 0 : V.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = ut(() => {
      var O, V, H;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? Pe.volume : ((V = t.state) == null ? void 0 : V.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? Pe.volume_muted : Pe.volume2;
    }), g = ut(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), _ = ut(() => ({ left: `${g.value}%` })), x = ut(() => {
      var Q, _e;
      const O = (Q = t.state) == null ? void 0 : Q.volumePct, V = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, H = Number(O ?? V ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, H))}%`
      };
    }), N = ut(() => {
      var H, Q;
      const V = [
        String(((H = t.state) == null ? void 0 : H.currentTimeLabel) || "0:00"),
        String(((Q = t.state) == null ? void 0 : Q.durationLabel) || "0:00")
      ].reduce((_e, D) => Math.max(_e, D.length), 4);
      return `${Math.max(4, V)}ch`;
    }), S = ut(() => ({ "--pano-video-time-ch": N.value })), v = ut(() => {
      var H, Q;
      const O = Array.isArray((H = t.state) == null ? void 0 : H.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const V = Math.max(7, Number(((Q = t.state) == null ? void 0 : Q.thumbnailCount) || 9));
      return Array.from({ length: V }, (_e, D) => ({
        id: `placeholder-${D}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ Kt(/* @__PURE__ */ new Set()), $ = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), K = (O) => F.value.has($(O)), E = (O) => {
      const V = new Set(F.value);
      V.add($(O)), F.value = V;
    };
    Qi(v, (O) => {
      const V = new Set(O.map($)), H = /* @__PURE__ */ new Set();
      for (const Q of F.value)
        V.has(Q) && H.add(Q);
      F.value = H;
    }, { immediate: !0 });
    const R = ut(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, V) => (oe(), ce("div", {
      class: at(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: wt(R.value)
    }, [
      V[1] || (V[1] = B("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      V[2] || (V[2] = B("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      B("div", FA, [
        B("div", TA, [
          De(sn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          B("div", {
            class: "pano-video-time pano-video-time-start",
            style: wt(S.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        B("div", DA, [
          B("div", LA, [
            (oe(!0), ce(Ye, null, xt(v.value, (H) => (oe(), ce("div", {
              key: $(H),
              class: at(["pano-video-thumb", {
                "is-placeholder": !H.src,
                "is-loaded": H.src && K(H)
              }])
            }, [
              H.src ? (oe(), ce("img", {
                key: 0,
                src: H.src,
                alt: "",
                draggable: "false",
                onLoad: (Q) => E(H)
              }, null, 40, RA)) : (oe(), ce("span", VA))
            ], 2))), 128))
          ]),
          B("div", {
            class: "pano-video-playhead",
            style: wt(_.value),
            "aria-hidden": "true"
          }, [...V[0] || (V[0] = [
            B("span", { class: "pano-video-playhead-line" }, null, -1),
            B("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          B("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, $A)
        ]),
        B("div", zA, [
          B("div", {
            class: "pano-video-time pano-video-time-end",
            style: wt(S.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          De(sn, {
            "extra-class": "pano-video-control",
            icon: u.value,
            label: a.value,
            tip: l.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          B("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            B("div", HA, [
              B("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: wt(x.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, GA)
            ]),
            De(sn, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, jA)
        ])
      ])
    ], 14, OA));
  }
}, BA = { class: "pano-floating-top" }, WA = ["data-selected", "data-view-count"], UA = ["data-view", "aria-pressed", "aria-label", "disabled"], YA = { class: "label" }, XA = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return oe(), ce("div", BA, [
        B("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (oe(!0), ce(Ye, null, xt(e.buttons, (o) => ii((oe(), ce("button", {
            key: o.key,
            class: at(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            De(Ct, {
              icon: o.icon
            }, null, 8, ["icon"]),
            B("span", YA, rt(o.label), 1)
          ], 10, UA)), [
            [ao, o.visible !== !1]
          ])), 128))
        ], 8, WA)
      ]);
    };
  }
};
function Ey(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Pe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Pe.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Pe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Pe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Pe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Pe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Pe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Pe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Pe.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Pe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Pe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Pe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Pe.reset },
      // Shown only while the panorama view is in space (#71): the 3DoF / 6DoF switch, and Frame Content
      // in 6DoF.
      ...t ? [] : [
        { action: "space-mode", label: "6DoF View", tip: "Move freely in space (6DoF)", pressed: "false", icon: Pe.space, visible: !1 },
        { action: "frame-view", label: "Frame Content", tip: "Frame content", pressed: null, icon: Pe.focus, visible: !1 }
      ],
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
const qA = ["aria-label"], JA = { class: "pano-stage-column" }, ZA = { class: "pano-stage-wrap" }, QA = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, eC = {
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
    let a = "", l = !1, u = null;
    const d = /* @__PURE__ */ Kt(null), b = /* @__PURE__ */ Kt(null), g = /* @__PURE__ */ Kt(null);
    function _() {
      var D, C;
      return ((C = (D = g.value) == null ? void 0 : D.getRefs) == null ? void 0 : C.call(D)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(D) {
      var C, se;
      return ((se = (C = b.value) == null ? void 0 : C.open) == null ? void 0 : se.call(C, D)) === !0;
    }
    function N(D) {
      o("image-file-selected", D);
    }
    function S(D) {
      o("image-file-cancelled", D);
    }
    t({ getPaintOverlayRefs: _, openImagePicker: x });
    const v = ut(() => r.readOnly === !0), F = ut(() => r.shellPreset || Ey(r.type)), $ = ut(() => {
      var C, se, le;
      const D = String((((C = r.uiState) == null ? void 0 : C.stageStatus) === "failed" ? (se = r.uiState) == null ? void 0 : se.stageStatusDetail : (le = r.uiState) == null ? void 0 : le.stageWarningDetail) ?? "");
      return D === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : D === "stickers" ? "One or more sticker previews are unavailable." : D === "frame" ? "The editor hit a rendering error. Check the browser console for details." : D === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : D.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), K = ut(() => {
      var C;
      const D = Array.isArray((C = F.value) == null ? void 0 : C.floatingButtons) ? F.value.floatingButtons.slice() : [];
      return v.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Pe.fullscreen
      }), D;
    });
    function E() {
      const D = d.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((C) => C instanceof HTMLElement ? !C.hidden && C.tabIndex >= 0 && C.offsetParent !== null : !1) : [];
    }
    function R() {
      var se;
      const C = E()[0] || d.value;
      (se = C == null ? void 0 : C.focus) == null || se.call(C);
    }
    function O() {
      var D;
      u != null && u.isConnected && ((D = u.focus) == null || D.call(u)), u = null;
    }
    function V(D) {
      var C, se, le, fe;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const U = E();
          if (!U.length) {
            D.preventDefault(), (se = (C = d.value) == null ? void 0 : C.focus) == null || se.call(C);
            return;
          }
          const X = U[0], j = U[U.length - 1], A = document.activeElement;
          if (D.shiftKey) {
            (A === X || A === d.value || !((le = d.value) != null && le.contains(A))) && (D.preventDefault(), j.focus());
            return;
          }
          (A === j || !((fe = d.value) != null && fe.contains(A))) && (D.preventDefault(), X.focus());
          return;
        }
        D.key === "Escape" && o("close");
      }
    }
    function H() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function Q() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function _e(D) {
      document.removeEventListener("keydown", V), D ? (u || (u = document.activeElement), H(), document.addEventListener("keydown", V), Ul(() => {
        R();
      })) : (Q(), O());
    }
    return Xl(() => {
      _e(r.open);
    }), rs(() => {
      Q(), document.removeEventListener("keydown", V), O();
    }), Qi(() => r.open, (D) => {
      _e(D);
    }), (D, C) => e.open ? (oe(), ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: C[2] || (C[2] = At((se) => o("close"), ["self"]))
    }, [
      B("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        B("div", JA, [
          B("div", ZA, [
            C[3] || (C[3] = B("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            C[4] || (C[4] = B("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            C[5] || (C[5] = B("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (oe(), ce("div", QA, rt($.value), 1)) : ct("", !0),
            C[6] || (C[6] = B("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              B("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(W2, {
              ref_key: "paintOverlaysRef",
              ref: g
            }, null, 512),
            De(my, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: N,
              onFileCancelled: S
            }, null, 512),
            v.value ? ct("", !0) : (oe(), ce(Ye, { key: 1 }, [
              De(EA, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De(g2, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(B2, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(KA, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(XA, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || []
            }, null, 8, ["buttons"]),
            De(f2, {
              buttons: e.uiState.floatingButtons || K.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            De(J2, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(CA, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(x2, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De(AA, {
            model: e.uiState.timeline || {},
            onAction: C[0] || (C[0] = (se) => o("timeline", se))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ct("", !0) : (oe(), $r(nA, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: C[1] || (C[1] = (se) => o("timeline", se))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, qA)
    ])) : ct("", !0);
  }
}, pr = "loading", na = "ready", tr = "failed";
function Oy(e, t = "") {
  return e && (e.__panoLoadState = pr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Fy(e, t = "") {
  return e && (e.__panoLoadState = na, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Ty(e, t = "") {
  return e && (e.__panoLoadState = tr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function gf(e, t) {
  return e ? e.__panoLoadState === tr ? tr : typeof t == "function" && t(e) ? na : pr : na;
}
function yf(e) {
  return gf(e) === tr;
}
function tC({ presented: e, background: t = na, stickers: n = [] } = {}) {
  if (!e) return { status: pr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === pr, a = r.includes(pr);
  if (o && a) return { status: pr, detail: "mixed" };
  if (o) return { status: pr, detail: "background" };
  if (a) return { status: pr, detail: "stickers" };
  const l = t === tr, u = r.includes(tr);
  return l && u ? { status: tr, detail: "mixed" } : l ? { status: tr, detail: "background" } : u ? { status: tr, detail: "stickers" } : { status: na, detail: "" };
}
const nC = "state_json", rC = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Su = "sticker_image_1", iC = "external_image", zs = "pano_sticker_input_images", oC = "pano_sticker_input_videos", aC = "pano_sticker_input_frames", sC = "pano_sticker_input_video_meta", lC = !0, ll = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], kr = Math.PI / 180, Yi = 180 / Math.PI, ku = 1, cC = "rgb(255, 221, 87)", uC = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, fC = 64, Im = 40, Mu = 16, dC = 0.45, Em = 180, hC = 160, $l = 24, pC = 4, mC = 4, js = /* @__PURE__ */ new Map(), Om = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), gC = 12, Kn = G0({
  app: mr,
  api: Gt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: yf,
    markImageFailed: Ty,
    markImageLoading: Oy,
    markImageReady: Fy
  }
});
function Nu(e) {
  if (!yn(e, "background") || !yn(e, "external-sticker")) return null;
  const t = Kn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const yC = Kn.assetSource, Aa = Kn.source, Pu = Kn.uiImage, bC = Kn.invalidateUiImage, vC = Kn.resolvePreferredExactLinkedSource, Au = Kn.loadPreferredExactLinkedImage;
function Hs(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function _C(e) {
  return 1 - Math.pow(1 - e, 3);
}
function wC(e, t, n) {
  const r = J((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function xC(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Mi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Mi.delete(t), Mi.set(t, n), n);
}
function SC(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Mi.delete(n), Mi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Mi.size > gC; ) {
      const o = Mi.keys().next().value;
      if (!o) break;
      Mi.delete(o);
    }
}
function kC(e) {
  return e * e * e;
}
function nc(e, t, n) {
  return { x: e, y: t, z: n };
}
function Fm(e, t) {
  return nc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Tm(e, t) {
  return nc(e.x * t, e.y * t, e.z * t);
}
function Cu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function MC(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return nc(e.x / t, e.y / t, e.z / t);
}
function Gs(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * Yi),
    pitch: J(Math.asin(J(e.y, -1, 1)) * Yi, -90, 90)
  };
}
function Xr(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, l = t[r].y, u = t[o].x, d = t[o].y;
    l > e.y != d > e.y && e.x < (u - a) * (e.y - l) / (d - l || 1e-6) + a && (n = !n);
  }
  return n;
}
function wi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Iu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), l = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return wi(e, t);
  const d = J((a * r + l * o) / u, 0, 1), b = Number(t.x || 0) + r * d, g = Number(t.y || 0) + o * d, _ = Number(e.x || 0) - b, x = Number(e.y || 0) - g;
  return _ * _ + x * x;
}
function Qn(e, t, n) {
  return e + (t - e) * n;
}
function Mr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${J(n, 0, 1)})`;
}
function NC(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ks = { fillStyle: "", url: "" };
function PC(e, t, n) {
  if (Ks.url && Ks.fillStyle === String(e || ""))
    return Ks.url;
  const r = NC(`
<svg xmlns="http://www.w3.org/2000/svg" width="${$l}" height="${$l}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ks = { fillStyle: String(e || ""), url: r }, r;
}
function cl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Hn(e) {
  return {
    r: J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: J(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function gn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function AC(e) {
  return ll.some((t) => cl(e, t.color));
}
function Eu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = J(Number(t), 0, 1), a = J(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const l = Math.floor(r * 6), u = r * 6 - l, d = a * (1 - o), b = a * (1 - u * o), g = a * (1 - (1 - u) * o);
  switch (l % 6) {
    case 0:
      return { r: a, g, b: d };
    case 1:
      return { r: b, g: a, b: d };
    case 2:
      return { r: d, g: a, b: g };
    case 3:
      return { r: d, g: b, b: a };
    case 4:
      return { r: g, g: d, b: a };
    default:
      return { r: a, g: d, b };
  }
}
function Ou(e) {
  const t = J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), l = o - a;
  let u = 0;
  l > 1e-6 && (o === t ? u = ((n - r) / l + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / l + 2) / 6 : u = ((t - n) / l + 4) / 6);
  const d = o <= 1e-6 ? 0 : l / o;
  return { h: u, s: d, v: o };
}
function Eo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const Dy = "pano_suite.ui_settings.v1", Ly = "pano_suite.node_grid_visibility.v1";
let Vo = null, Nr = null;
function ul(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function CC() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Dy)) || "").trim();
    if (!t) return Vo ? ul(Vo) : null;
    const n = JSON.parse(t), r = ul(n);
    return Vo = r, r;
  } catch {
    return Vo ? ul(Vo) : null;
  }
}
function IC(e) {
  var n;
  const t = ul(e);
  Vo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Dy, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Ry() {
  var e;
  if (Nr && typeof Nr == "object")
    return Nr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ly)) || "").trim();
    if (!t)
      return Nr = {}, Nr;
    const n = JSON.parse(t);
    return Nr = n && typeof n == "object" ? n : {}, Nr;
  } catch {
    return Nr = {}, Nr;
  }
}
function EC(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = Ry()[n];
  return typeof o == "boolean" ? o : !!t;
}
function OC(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = Ry();
  r[n] = !!t, Nr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(Ly, JSON.stringify(r));
  } catch {
  }
}
function FC(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Dm(e) {
  const { paintCount: t, maskCount: n } = FC(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let o = 0, a = 0;
  return r.forEach((l) => {
    String((l == null ? void 0 : l.layerKind) || "paint") === "mask" ? a += 1 : o += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: o,
    maskRasterCount: a,
    totalPaintCount: t + o,
    totalMaskCount: n + a
  };
}
function Oo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Bs(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function TC(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Gi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function DC(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function LC(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function RC(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function VC(e, t, n = {}) {
  var Gh;
  await vy(e, { tolerateOperationFailure: !0 }), Kn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, l = TC(e, t);
  await ld();
  const u = Bs(e, "output_preset"), d = Bs(e, "coverage"), b = Bs(e, "bg_color"), g = Bs(e, nC), _ = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Au(
      e,
      i,
      () => ue(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = _();
    return RC(i);
  }, N = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return LC(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : DC(s, i);
  }, S = t === "stickers" && e.__panoSceneStateV2 === !0, v = (S ? y0 : g0)(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Gn(d == null ? void 0 : d.value),
    sharedUiSettings: CC(),
    active: x0(e),
    fps: S ? Nu(e) : null
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var c;
    const i = Array.isArray(v.shots) ? v.shots : [], s = String(((c = v == null ? void 0 : v.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, $ = F ? Xd(F, !1) : { width: 220, height: 132 }, K = Ey(t), E = /* @__PURE__ */ ra({
    stageStatus: pr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (K.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (K.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(K.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
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
      customColorCss: Mr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Mr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: $.width,
      height: $.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), R = document.createElement("div");
  document.body.appendChild(R);
  const O = ({ intent: i, file: s } = {}) => {
    if (Or(s)) {
      if (i === "add") {
        uh(s);
        return;
      }
      i === "replace" && j1(s);
    }
  }, V = ({ intent: i } = {}) => {
  }, H = Df(eC, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: l,
    shellPreset: K,
    paintSwatches: ll.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Mr(i.color, 1)
    })),
    uiState: E,
    onClose: () => {
      Po();
    },
    onTimeline: (i) => R1(i),
    onImageFileSelected: O,
    onImageFileCancelled: V
  });
  let Q = null;
  try {
    Q = H.mount(R);
  } catch (i) {
    try {
      H.unmount();
    } catch {
    }
    throw R.remove(), i;
  }
  const _e = R.querySelector(".pano-modal-overlay"), D = R.querySelector(".pano-modal"), C = D == null ? void 0 : D.querySelector("[data-stage-overlay]"), se = D == null ? void 0 : D.querySelector("[data-stage-background]"), le = D == null ? void 0 : D.querySelector(".pano-stage-wrap"), fe = ((Gh = Q == null ? void 0 : Q.getPaintOverlayRefs) == null ? void 0 : Gh.call(Q)) || {}, U = fe.cursor || null, X = fe.sizePreview || null, j = fe.sizeSample || null;
  if (!_e || !D || !C || !se || !le || !U || !X || !j)
    throw H.unmount(), R.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = C.getContext("2d"), ee = D.querySelector("[data-side]"), Y = D.querySelector("[data-video-element]"), Ie = D.querySelector("[data-port-video-element]"), Fe = D.querySelector(".pano-floating-right"), St = D.querySelector(".pano-floating-top"), pt = D.querySelector("[data-tool-rail]"), ln = D.querySelector("[data-frame-rail]"), it = D.querySelector("[data-frame-roll-knob]"), Yn = D.querySelector("[data-paint-dock]"), It = D.querySelector(".pano-video-transport"), Qt = D.querySelector("[data-selection-menu]"), cn = D.querySelector("[data-tooltip]"), ui = D.querySelector("[data-camera-preview-host]"), L = D.querySelector("[data-camera-preview-canvas]"), W = D.querySelector("[data-paint-color-row]"), q = D.querySelector("[data-paint-color-pop]"), be = D.querySelector("[data-paint-color-sv]"), me = D.querySelector("[data-paint-color-sv-cursor]"), ge = D.querySelector("[data-paint-hue-strip]"), Me = D.querySelector("[data-paint-hue-handle]");
  let Ne = 0, xe = 0;
  le == null || le.removeAttribute("data-stage-ready"), le == null || le.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", se.style.opacity = "0", o && (ee == null || ee.remove(), D.classList.add("pano-modal-readonly"));
  const de = () => {
    if (!p.customPaintSessionStart) return;
    if (cl(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (AC(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      Hn(p.customPaintColor),
      ...p.customPaintHistory.filter((s) => !cl(s, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, Ve = (i = !1) => {
    !q || q.hidden || (i ? de() : p.customPaintSessionStart = null, q.hidden = !0, E.paintDock.colorPopOpen = !1);
  }, Ee = () => {
    q && (q.hidden && (p.customPaintSessionStart = Hn(p.customPaintColor)), q.hidden = !1, E.paintDock.colorPopOpen = !0);
  };
  D.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Di(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (D.querySelectorAll(".pano-picker-pop").forEach((c) => {
      c.hidden = !0;
    }), Ve(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Xe(), ue()), (s = E.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (E.frameRail.aspectOpen = !1)));
  });
  const $e = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, Ke = JSON.stringify($p(v)), p = {
    mode: "pano",
    selectedId: $e,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: qi,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Gn(v.coverage),
    historyController: JN(80, { entries: [Ke], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Ur,
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
    showGrid: EC(e == null ? void 0 : e.id, !0),
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
    paintEngine: Ku(),
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
    // PanoramaStickersNode: the Camera row of the Timeline is selected, so the inspector edits the Camera.
    inspectCamera: !1,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, Le = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let st = null;
  t === "stickers" && (p.selectedId = null, v.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const Be = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), Vt = document.createElement("canvas");
  Vt.__panoFrameIdx = 0;
  const Xn = document.createElement("canvas");
  Xn.__panoFrameIdx = 0;
  const Ce = {
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
    tickErrorSignature: ""
  }, $t = QS({
    onReady: () => ue(),
    onFailed: () => ue(),
    onUpdate: () => {
      Ce.backgroundDirty = !0, ue({ localOnly: !0 });
    }
  });
  let zr = { key: "", projection: null }, br = { key: null, sceneState: null }, fo = null, ho = null, z = null;
  const ve = Number.parseFloat(
    getComputedStyle(D).getPropertyValue("--pano-float-radius")
  ) || 10, ke = (i) => {
    const s = String(i || "default");
    C.style.cursor !== s && (C.style.cursor = s);
  }, Oe = {
    timer: 0,
    target: null
  }, je = {
    active: !1,
    depth: 0
  }, Ae = {
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
  }, Ze = 9, gt = [];
  let Dt = 0;
  const or = () => {
    var P, M;
    const i = (P = le == null ? void 0 : le.getBoundingClientRect) == null ? void 0 : P.call(le), s = (M = Fe == null ? void 0 : Fe.getBoundingClientRect) == null ? void 0 : M.call(Fe), c = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, y = f > 0 ? f + 14 + 12 : 72, w = Math.max(280, Math.floor(c - y * 2)), k = p.fullscreen ? Math.min(1200, w) : w;
    E.videoTransport.shellMaxWidthPx = k;
  }, Yt = () => {
    Dt || (Dt = window.requestAnimationFrame(() => {
      Dt = 0, or();
    }));
  }, Ei = (i) => {
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
  }, Sn = typeof ResizeObserver < "u" ? new ResizeObserver(() => Yt()) : null;
  Sn == null || Sn.observe(le), Fe && (Sn == null || Sn.observe(Fe)), gt.push(() => {
    var i;
    Dt && (window.cancelAnimationFrame(Dt), Dt = 0), (i = Sn == null ? void 0 : Sn.disconnect) == null || i.call(Sn);
  }), Yt();
  const vr = () => {
    Ae.thumbnailJobId += 1, Ae.thumbnailSrc = "", E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = Ze;
  }, Cn = async (i, s, c) => {
    const f = String(i || "").trim();
    if (!f) {
      vr();
      return;
    }
    const h = xC(f);
    if (h) {
      Ae.thumbnailSrc = f, E.videoTransport.thumbnails = h.thumbnails, E.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    const m = ++Ae.thumbnailJobId;
    Ae.thumbnailSrc = f, E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = Ze;
    const y = document.createElement("video");
    y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous";
    const w = await new Promise((ae) => {
      let he = !1;
      const re = (Se) => {
        he || (he = !0, ae(Se));
      };
      y.addEventListener("loadedmetadata", () => re(!0), { once: !0 }), y.addEventListener("canplay", () => re(!0), { once: !0 }), y.addEventListener("error", () => re(!1), { once: !0 }), y.src = f, y.load();
    });
    if (Ae.thumbnailJobId !== m) return;
    const k = Number(y.videoWidth || 0), P = Number(y.videoHeight || 0);
    if (!w || k < 1 || P < 1) {
      Ae.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(y.duration || s || 0)), I = document.createElement("canvas"), T = 46, G = Math.max(72, Math.round(k / P * T));
    I.width = G, I.height = T;
    const ne = I.getContext("2d");
    if (!ne) return;
    const Z = [], te = (ae) => new Promise((he) => {
      let re = !1;
      const Se = () => {
        re || (re = !0, he());
      };
      y.addEventListener("seeked", Se, { once: !0 }), y.addEventListener("error", Se, { once: !0 });
      try {
        y.currentTime = ae;
      } catch {
        Se();
      }
    });
    for (let ae = 0; ae < Ze; ae += 1) {
      if (Ae.thumbnailJobId !== m) return;
      const he = ae / (Ze - 1), re = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(c || 24))), M * he)) : 0;
      if (await te(re), Ae.thumbnailJobId !== m) return;
      ne.clearRect(0, 0, G, T), ne.drawImage(y, 0, 0, G, T), Z.push({
        id: `thumb-${ae}`,
        src: I.toDataURL("image/jpeg", 0.72),
        time: re,
        label: pc(re)
      });
    }
    Ae.thumbnailJobId === m && (E.videoTransport.thumbnails = Z, E.videoTransport.thumbnailCount = Z.length || Ze, SC(f, {
      thumbnails: Z,
      thumbnailCount: Z.length || Ze,
      duration: M,
      fps: c
    }));
  };
  gt.push(() => {
    vr();
  });
  const kt = iy({
    video: Y instanceof HTMLVideoElement ? Y : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: hs,
    span: () => {
      if (S) return Tc();
      const i = Math.round(Number(E.videoTransport.duration || 0) * hs());
      return Y.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => S,
    onFrame: (i) => {
      S ? O1(i) : di(), ue({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      sb() && (Ce.backgroundDirty = !0);
    },
    onChange: () => {
      di(), Br(), ue({ cause: "frame_view", localOnly: !0 });
    }
  });
  gt.push(() => kt.dispose());
  const ar = S && Ie instanceof HTMLVideoElement ? oy({
    video: Ie,
    onCapture: () => {
      var c;
      const i = Number(Ie.videoWidth || 0), s = Number(Ie.videoHeight || 0);
      i < 1 || s < 1 || (Xn.width = i, Xn.height = s, (c = Xn.getContext("2d")) == null || c.drawImage(Ie, 0, 0), Xn.__panoFrameIdx += 1, ue({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => ue({ cause: "frame_view", localOnly: !0 })
  }) : null;
  ar && gt.push(() => ar.dispose());
  const as = S ? U0({
    createImage: (i, s) => {
      const c = new Image();
      return c.onload = s, c.onerror = s, c.src = i, c;
    },
    onLoad: () => ue({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Y instanceof HTMLVideoElement) {
    const i = () => {
      hi(), ue({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      di({
        hasAudio: E.videoTransport.hasAudio,
        muted: Y.muted,
        volume: Number(Y.volume ?? E.videoTransport.volume ?? 1)
      });
    }, c = () => {
      const f = Y.dataset.panoSrc;
      f && (Ae.failedSrcs.add(f), hi(), ue());
    };
    for (const [f, h] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", c]
    ])
      Y.addEventListener(f, h), gt.push(() => Y.removeEventListener(f, h));
  }
  function In() {
    E.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", c = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === p.primaryTool : c ? i.key === p.paintTool : f ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function $n(i) {
    return ud(i == null ? void 0 : i.dataTransfer);
  }
  function _r(i) {
    const s = !!i;
    je.active !== s && (je.active = s, le.classList.toggle("drop-active", s));
  }
  function Oi(i, s, c = p.viewFov, f = 140, h = 620) {
    const m = ax(p.viewYaw, i), y = s - p.viewPitch, w = c - p.viewFov, k = Math.hypot(m, y) + Math.abs(w) * 0.6, P = Math.round(J(f + k * 2.2, f, h));
    p.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: P,
      startYaw: p.viewYaw,
      startPitch: p.viewPitch,
      startFov: p.viewFov,
      targetPitch: s,
      targetFov: c,
      deltaYaw: m
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, ue();
  }
  gb();
  function dn() {
    return t === "stickers" ? ss() : v.shots;
  }
  function ss() {
    return S ? v.stickers.filter((i) => i.placement === "sky") : v.stickers;
  }
  function sr(i) {
    return S && yt(i);
  }
  function rc(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function Xt(i) {
    return sr(i) ? qf(i, p.frame) : i;
  }
  function lr(i, s) {
    sr(i) ? b0(i, p.frame, s) : Object.assign(i, s);
  }
  function hn() {
    const i = v.painting || (v.painting = Bo(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Vy(i = "paint") {
    var h, m;
    const s = Array.isArray((m = (h = v.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? v.painting[i].strokes : [], c = [], f = /* @__PURE__ */ new Set();
    for (const y of s) {
      const w = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !w || f.has(w) || (f.add(w), c.push(w));
    }
    return c;
  }
  function $y() {
    return Vy("paint");
  }
  function oa(i, s) {
    const c = String(s || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function aa(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function on(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const c = s.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : s).trim();
  }
  function sa(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const f = c.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function ic() {
    var s;
    let i = -1;
    for (const c of ss())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of hn())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((s = v.painting) == null ? void 0 : s.raster_objects) ? v.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function md(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const f = hn();
    let h = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return h ? s != null && (h.z_index = Math.max(0, Number(s || 0))) : (h = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: s == null ? ic() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(h)), h;
  }
  function zy(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: J(c - h, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: J(c - h, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: J(c + h, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: J(c + h, 0, 1)
      }
    ];
  }
  function jy() {
    const i = new Set($y()), c = hn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      c.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === f) || c.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: ic(),
        locked: !1,
        frame: null
      });
    }), c.sort((f, h) => Number((f == null ? void 0 : f.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), v.painting.groups = c, c;
  }
  function Hy(i, s, c) {
    var Z;
    const f = (te) => (Number(te || 0) % 1 + 1) % 1, h = [];
    for (const te of c) {
      const ae = te == null ? void 0 : te.geometry, he = (ae == null ? void 0 : ae.geometryKind) === "lasso_fill" ? ae == null ? void 0 : ae.points : (ae == null ? void 0 : ae.processedPoints) || (ae == null ? void 0 : ae.rawPoints) || (ae == null ? void 0 : ae.points) || [];
      Array.isArray(he) && h.push(...he);
    }
    if (!h.length) return null;
    const m = f(((Z = h[0]) == null ? void 0 : Z.u) || 0);
    let y = 0, w = 0;
    h.forEach((te) => {
      const ae = f((te == null ? void 0 : te.u) || 0);
      y += m + qn(ae, m), w += Number((te == null ? void 0 : te.v) || 0);
    });
    const k = (y / h.length % 1 + 1) % 1;
    let P = 1 / 0, M = -1 / 0, I = 1 / 0, T = -1 / 0;
    h.forEach((te) => {
      const ae = f((te == null ? void 0 : te.u) || 0), he = qn(ae, k);
      P = Math.min(P, he), M = Math.max(M, he);
      const re = Number((te == null ? void 0 : te.v) || 0);
      I = Math.min(I, re), T = Math.max(T, re);
    });
    const G = c.reduce((te, ae) => {
      const he = bi(String((ae == null ? void 0 : ae.toolKind) || "pen")), re = Tn[he] || Tn[Ur], Se = Math.max(1, Number((ae == null ? void 0 : ae.size) || 10)) * Math.max(0.1, Number((re == null ? void 0 : re.sizeScale) ?? 1));
      return Math.max(te, Se);
    }, 0), ne = Math.max(35e-4, G / 2048);
    return {
      centerUv: { u: ((k + (P + M) * 0.5) % 1 + 1) % 1, v: J((I + T) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - P) * 0.5 + ne,
      halfH: (T - I) * 0.5 + ne,
      uvPad: ne
    };
  }
  function fi(i, s, c) {
    const f = String(i || "").trim();
    if (!f) return null;
    const h = hn().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === f);
    if (!h) return null;
    const m = c || cr(f, s);
    return h.frame = Hy(f, s, m), h.frame;
  }
  function po() {
    var f;
    const i = ss().map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = jy().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), c = (Array.isArray((f = v.painting) == null ? void 0 : f.raster_objects) ? v.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...s, ...c].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function oc(i = !0) {
    var c, f, h, m, y, w;
    const s = po().filter((k) => k.type === "strokeGroup").map((k) => String(k.actionGroupId || "")).filter((k) => !!k);
    if (i) {
      const k = String(((f = (c = p.interaction) == null ? void 0 : c.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), P = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((w = (y = p.interaction) == null ? void 0 : y.stroke) == null ? void 0 : w.toolKind) || "").trim();
      k && P === "paint" && M !== "eraser" && !s.includes(k) && s.push(k);
    }
    return s;
  }
  function ac(i = !0) {
    var w, k, P, M, I, T;
    const s = po();
    if (!i) return s;
    const c = String(((k = (w = p.interaction) == null ? void 0 : w.stroke) == null ? void 0 : k.actionGroupId) || "").trim(), f = String(((M = (P = p.interaction) == null ? void 0 : P.stroke) == null ? void 0 : M.layerKind) || "").trim(), h = String(((T = (I = p.interaction) == null ? void 0 : I.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!c || f !== "paint" || h === "eraser" || s.some((G) => G.type === "strokeGroup" && String(G.actionGroupId || "") === c))
      return s;
    const m = Nt();
    let y = s.reduce((G, ne) => Math.max(G, Number((ne == null ? void 0 : ne.z_index) || 0)), -1) + 1;
    return m && en(m) && String(m.actionGroupId || "") === c && (y = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: y,
        item: null
      }
    ].sort((G, ne) => Number((G == null ? void 0 : G.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0));
  }
  function Gy() {
    return hn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => go(oa("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Ky() {
    var i;
    return (Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, c) => Number((s == null ? void 0 : s.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((s) => mo(aa((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function gd(i = p.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || f;
    }
    return !1;
  }
  function By() {
    var s, c, f, h;
    let i = null;
    try {
      const m = oc(), y = ((h = (f = (c = (s = p.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : c.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : h.canvas) || null;
      y && (i = {
        source: y,
        revision: `${pa()}:${sc()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function sc() {
    var h, m, y, w, k, P, M;
    const i = p.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!gd(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const I = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, T = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), G = ((y = I == null ? void 0 : I.rawPoints) == null ? void 0 : y.length) ?? ((w = I == null ? void 0 : I.points) == null ? void 0 : w.length) ?? 0, ne = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${T || "paint"}_${s}_live${ne}_${G}_${p.livePaintInteractionRevision}`;
    }
    const c = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.actionGroupId) || ""), f = String(((P = i == null ? void 0 : i.item) == null ? void 0 : P.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${c || f || "active"}_${p.livePaintInteractionRevision}`;
  }
  function lc() {
    const i = Array.isArray(v.shots) ? v.shots : [], s = Array.isArray(v.stickers) ? v.stickers : [];
    return [...i, ...s];
  }
  function zn(i) {
    return !!i && Array.isArray(v.shots) && v.shots.includes(i);
  }
  function yt(i) {
    return !!i && Array.isArray(v.stickers) && v.stickers.includes(i);
  }
  function En() {
    var i;
    return Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : [];
  }
  function mo(i) {
    const s = on(i);
    if (!s) return null;
    const c = En().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: aa(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function pn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = on(i.rasterObjectId || i.id || "");
    return !!s && !!mo(aa(s));
  }
  function go(i) {
    const s = sa(i), c = String(s.actionGroupId || "").trim();
    if (!c) return null;
    const f = hn().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === c || String((h == null ? void 0 : h.actionGroupId) || "") === c);
    return f ? {
      ...f,
      id: oa("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function en(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!go(oa(c, s));
  }
  function cr(i, s = null) {
    const c = sa(i, s), f = String(c.actionGroupId || "").trim();
    return f ? Mo(c.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === f) : [];
  }
  function Wy(i, s = "paint") {
    const c = String(i || "").trim(), h = `geomv5:${String(s || "paint").trim() || "paint"}:${c}:${p.mode}:${ha()}`;
    if (p.mode === "frame") {
      const m = He(), y = String((m == null ? void 0 : m.id) || ""), w = m ? tn(m) : null;
      return `${h}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function ls(i, s, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: J(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function qn(i, s) {
    let c = Number(i || 0) - Number(s || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function cc(i, s = null, c = null) {
    var P;
    const f = sa(i, s), h = Array.isArray(c) ? c : cr(f.actionGroupId, f.layerKind), m = [];
    if (h.forEach((M) => {
      const I = (M == null ? void 0 : M.geometry) || null, T = (I == null ? void 0 : I.geometryKind) === "lasso_fill" ? I == null ? void 0 : I.points : (I == null ? void 0 : I.processedPoints) || (I == null ? void 0 : I.rawPoints) || (I == null ? void 0 : I.points) || [];
      Array.isArray(T) && m.push(...T);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((P = m[0]) == null ? void 0 : P.u) || 0);
    let w = 0, k = 0;
    return m.forEach((M) => {
      w += y + qn(Number((M == null ? void 0 : M.u) || 0), y), k += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (w / m.length % 1 + 1) % 1,
      v: J(k / m.length, 0, 1)
    };
  }
  function cs(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = qn(Number(i.u || 0), h), w = Number(i.v || 0) - m, k = Number(f || 0) * kr, P = Math.cos(k), M = Math.sin(k), I = Math.max(0.02, Number(c || 1)), T = (y * P - w * M) * I, G = (y * M + w * P) * I;
    return {
      ...i,
      u: ((h + T) % 1 + 1) % 1,
      v: J(m + G, 0, 1)
    };
  }
  function yd(i, s, c, f = null, h = null, m = null) {
    const y = sa(i, h), w = String(y.actionGroupId || "").trim();
    if (!w) return !1;
    const k = Mo(y.layerKind), P = Array.isArray(f) ? new Map(f.map((I) => [String((I == null ? void 0 : I.id) || ""), I])) : null;
    let M = !1;
    if (k.forEach((I) => {
      if (String((I == null ? void 0 : I.actionGroupId) || "").trim() !== w) return;
      const T = (P == null ? void 0 : P.get(String((I == null ? void 0 : I.id) || ""))) || I, G = I == null ? void 0 : I.geometry, ne = T == null ? void 0 : T.geometry;
      !G || !ne || (Array.isArray(ne.points) && (G.points = ne.points.map((Z) => ls(Z, s, c)), M = !0), Array.isArray(ne.rawPoints) && (G.rawPoints = ne.rawPoints.map((Z) => ls(Z, s, c)), M = !0), Array.isArray(ne.processedPoints) && (G.processedPoints = ne.processedPoints.map((Z) => ls(Z, s, c)), M = !0));
    }), M && m) {
      const I = hn().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === w);
      I && (I.frame = null);
    }
    return M;
  }
  function bd(i, s = 1, c = 0, f = null, h = null, m = null) {
    const y = sa(i, h), w = String(y.actionGroupId || "").trim();
    if (!w) return !1;
    const k = Mo(y.layerKind), P = Array.isArray(f) ? f : cr(w, y.layerKind), M = Array.isArray(P) ? new Map(P.map((G) => [String((G == null ? void 0 : G.id) || ""), G])) : null, I = (m == null ? void 0 : m.centerUv) ?? cc(w, y.layerKind, P);
    let T = !1;
    if (k.forEach((G) => {
      if (String((G == null ? void 0 : G.actionGroupId) || "").trim() !== w) return;
      const ne = (M == null ? void 0 : M.get(String((G == null ? void 0 : G.id) || ""))) || G, Z = G == null ? void 0 : G.geometry, te = ne == null ? void 0 : ne.geometry;
      !Z || !te || (Array.isArray(te.points) && (Z.points = te.points.map((ae) => cs(ae, I, s, c)), T = !0), Array.isArray(te.rawPoints) && (Z.rawPoints = te.rawPoints.map((ae) => cs(ae, I, s, c)), T = !0), Array.isArray(te.processedPoints) && (Z.processedPoints = te.processedPoints.map((ae) => cs(ae, I, s, c)), T = !0));
    }), T && m) {
      const G = hn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === w);
      G && (G.frame = null);
    }
    return T;
  }
  function vd(i, s, c, f = null) {
    const h = on(i);
    if (!h) return !1;
    const m = En().find((M) => String((M == null ? void 0 : M.id) || "").trim() === h);
    if (!m) return !1;
    const y = f && typeof f == "object" ? f : m, w = (y == null ? void 0 : y.transform) || {}, k = Number(w.du || 0) + Number(s || 0), P = J(Number(w.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = k, m.transform.dv = P, !0;
  }
  function Uy(i, s = 1, c = null) {
    const f = on(i);
    if (!f) return !1;
    const h = En().find((P) => String((P == null ? void 0 : P.id) || "").trim() === f);
    if (!h) return !1;
    const m = c && typeof c == "object" ? c : h, y = (m == null ? void 0 : m.transform) || {}, w = Math.max(0.01, Number(y.scale || 1)), k = J(w * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = k, !0;
  }
  function Nt() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const s = go(i);
    if (s) return s;
    const c = mo(i);
    return c || (t === "cutout" ? lc().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : dn().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function ur() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], s = [], c = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const h = String(f || "").trim();
      if (!h || c.has(h)) return;
      c.add(h);
      const m = h === String(p.selectedId || "") ? Nt() : go(h) || mo(h) || (t === "cutout" ? lc().find((y) => String((y == null ? void 0 : y.id) || "") === h) : dn().find((y) => String((y == null ? void 0 : y.id) || "") === h));
      m && s.push(m);
    }), s;
  }
  function us(i = null) {
    const s = Array.isArray(i) ? i : ur();
    if (!s || s.length < 2) return null;
    const c = s.map((P) => qt(P)).filter((P) => (P == null ? void 0 : P.visible) && Array.isArray(P.corners) && P.corners.length);
    if (!c.length) return null;
    const f = c.flatMap((P) => P.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), h = c.flatMap((P) => P.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), y = Math.max(...f), w = Math.min(...h), k = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (w + k) * 0.5 },
      corners: [
        { x: m, y: w },
        { x: y, y: w },
        { x: y, y: k },
        { x: m, y: k }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: w, a: { x: m, y: w }, b: { x: y, y: w } },
        { edge: "right", x: y, y: (w + k) * 0.5, a: { x: y, y: w }, b: { x: y, y: k } },
        { edge: "bottom", x: (m + y) * 0.5, y: k, a: { x: y, y: k }, b: { x: m, y: k } },
        { edge: "left", x: m, y: (w + k) * 0.5, a: { x: m, y: k }, b: { x: m, y: w } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: w },
      rotateHandle: { x: (m + y) * 0.5, y: w - 30 }
    };
  }
  function _d(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(p.selectedIds) && p.selectedIds.includes(s);
  }
  function fs() {
    const i = Nt();
    return i ? en(i) || pn(i) ? "stroke" : zn(i) ? "frame" : "image" : null;
  }
  function kn(i) {
    if (!i || typeof i != "object") return !1;
    if (en(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), c = hn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (pn(i)) {
      const s = on(i.rasterObjectId || i.id || ""), c = En().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function uc(i = null) {
    const s = Array.isArray(i) ? i : ur();
    return s.length > 0 && s.every((c) => kn(c));
  }
  function Yy(i, s) {
    const c = s === !0;
    if (!i || typeof i != "object") return !1;
    if (en(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), h = hn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    if (pn(i)) {
      const f = on(i.rasterObjectId || i.id || ""), h = En().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function Xy() {
    if (r) return;
    const i = ur();
    if (!i.length) return;
    const s = !uc(i);
    let c = !1;
    i.forEach((f) => {
      Yy(f, s) && (c = !0);
    }), c && (ot(), lt(), Xe(), ze(), ue());
  }
  function wr(i) {
    p.inspectCamera = !1, Le.selection = null, p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && yt(i) ? v.active.selected_sticker_id = i.id || null : v.active.selected_sticker_id = null, i && zn(i) ? v.active.selected_shot_id = i.id || null : i ? zn(i) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function qy(i, s = null) {
    const c = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((y) => {
      const w = String((y == null ? void 0 : y.id) || "").trim();
      !w || f.has(w) || (f.add(w), c.push(w));
    }), p.selectedIds = c, p.inspectCamera = !1, Le.selection = null;
    const h = String(s || "").trim();
    p.selectedId = h && c.includes(h) ? h : c[c.length - 1] || null;
    const m = Nt();
    v.active.selected_sticker_id = m && yt(m) && m.id || null, m && zn(m) ? v.active.selected_shot_id = m.id || null : c.length || (v.active.selected_shot_id = null);
  }
  function wd() {
    const i = (Array.isArray(v.shots) ? v.shots : []).map((c, f) => ({
      kind: "frame",
      item: c,
      label: String((c == null ? void 0 : c.label) || `Frame ${f + 1}`)
    })), s = (Array.isArray(v.stickers) ? v.stickers : []).map((c, f) => {
      var m, y;
      const h = zt(c) ? String(c.id || Su) : String(((y = (m = v.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : y.name) || c.asset_id || c.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: c,
        label: h
      };
    });
    return [...i, ...s];
  }
  function Jy(i) {
    return i === "frame" ? Pe.camera : i === "stroke" ? Pe.paintbrush_vertical_tool : Pe.image;
  }
  function fc(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Jy(i.kind)
    };
  }
  function ds() {
    return ic();
  }
  function zt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : S ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === Su || String(i.source_kind || "") === iC;
  }
  function yo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Zy(i) {
    return zt(i) && yo(i) ? A0 : 1;
  }
  function Qy() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function eb() {
    return String(Qy() || "") === "lasso_fill";
  }
  function tb() {
    if (r) return;
    const i = Nt();
    !i || !zt(i) || (i.visible = yo(i), Wt(), ot(), lt(), ze(), Xe(), ue());
  }
  function nb() {
    if (r || t !== "stickers") return;
    const i = Nt();
    if (!i || !zt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = mc(zs, () => {
      ue();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = pi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), ot(), lt(), ze(), Xe(), ue();
  }
  function rb(i) {
    if (!i || !zt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const c = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = mc(zs, () => {
      ue();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (c.vFOV_deg = pi(
      c.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), c;
  }
  function ib() {
    const i = Nt();
    if (!i || !zt(i)) return !1;
    const s = rb(i);
    if (!s) return !1;
    const c = (f, h) => Math.abs(Number(f || 0) - Number(h || 0)) <= 1e-4;
    return !(c(i.yaw_deg, s.yaw_deg) && c(i.pitch_deg, s.pitch_deg) && c(i.hFOV_deg, s.hFOV_deg) && c(i.vFOV_deg, s.vFOV_deg) && c(i.rot_deg, s.rot_deg));
  }
  function jr(i) {
    return Kn.uiList(e, i);
  }
  function dc(i) {
    return Kn.uiValue(e, i);
  }
  function xd() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return xl(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function ob() {
    const { metaKey: i } = xd(), s = dc(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function hc(i) {
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
  function pc(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), c = Math.floor(s / 60), f = s % 60;
    return `${c}:${String(f).padStart(2, "0")}`;
  }
  function hs() {
    return S ? v.timeline.fps : Ae.metaFps || 1e3;
  }
  function di(i = {}) {
    const s = Number(i.duration ?? E.videoTransport.duration ?? 0), c = Math.max(1, Number(i.fps ?? E.videoTransport.fps ?? 24)), f = kt.frame / hs(), h = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!E.videoTransport.ready, m = kt.playing, y = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!E.videoTransport.visible, w = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Y instanceof HTMLVideoElement ? Y.muted : E.videoTransport.muted), k = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Y instanceof HTMLVideoElement ? Y.volume : E.videoTransport.volume
    ), P = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Ei(Y), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!E.videoTransport.loop;
    Object.assign(E.videoTransport, {
      ready: h,
      playing: m,
      visible: y,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: pc(f),
      durationLabel: pc(s),
      frameCount: Math.max(0, Number(i.frameCount ?? E.videoTransport.frameCount ?? 0)),
      fps: c,
      hasAudio: P,
      muted: w,
      volume: Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : E.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? E.videoTransport.thumbnailCount ?? Ze))
    });
  }
  function Sd() {
    return !!(Y instanceof HTMLVideoElement && !S && Y.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function kd() {
    if (!(Y instanceof HTMLVideoElement) || !E.videoTransport.hasAudio) return;
    const i = !Y.muted;
    Y.muted = i, !i && Number(Y.volume || 0) <= 0 && (Y.volume = Math.max(0.01, Number(E.videoTransport.volume || 1))), di({
      hasAudio: E.videoTransport.hasAudio,
      muted: Y.muted,
      volume: Number(Y.volume ?? E.videoTransport.volume ?? 1)
    });
  }
  function ab() {
    di({
      visible: Sd()
    });
  }
  function sb() {
    if (!(Y instanceof HTMLVideoElement) || Number(Y.videoWidth || 0) < 1 || Number(Y.videoHeight || 0) < 1) return !1;
    const i = Number(Y.videoWidth || 0), s = Number(Y.videoHeight || 0);
    (Vt.width !== i || Vt.height !== s) && (Vt.width = i, Vt.height = s);
    const c = Vt.getContext("2d");
    return c ? (c.clearRect(0, 0, i, s), c.drawImage(Y, 0, 0, i, s), Vt.__panoFrameIdx = Number(Vt.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Md() {
    return !kt.showsVideo && Number(Vt.width || 0) > 0 && Number(Vt.height || 0) > 0 && Number(Vt.__panoFrameIdx || 0) > 0 ? Vt : Y instanceof HTMLVideoElement && Number(Y.videoWidth || 0) > 0 && Number(Y.videoHeight || 0) > 0 && Number(Y.readyState || 0) >= 2 ? Y : null;
  }
  function Nd() {
    Vt.__panoFrameIdx = 0, Ce.backgroundDirty = !0;
  }
  function hi() {
    if (!(Y instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = xd(), s = yn(e, "background") && jr(i)[0] || null, c = Aa(s), f = [c, Kn.linkedVideoFile(e, $d())].filter(Boolean), h = f.find((I) => !Ae.failedSrcs.has(I)) || "";
    Ae.videoFailed = !h && f.length > 0;
    const m = h && h === c ? ob() : null;
    Ae.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const y = Math.max(1, Number((m == null ? void 0 : m.fps) || (S ? v.timeline.fps : 24))), w = Y.dataset.panoSrc === h && Number.isFinite(Y.duration) ? Y.duration : 0, k = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / y : w)), P = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(k * y))), M = !!(m != null && m.has_audio) || Ei(Y);
    return h && Y.dataset.panoSrc !== h ? (Y.pause(), Nd(), Y.dataset.panoSrc = h, Y.loop = !S && !!E.videoTransport.loop, Y.muted = !!E.videoTransport.muted, Y.volume = Math.max(0, Math.min(1, Number(E.videoTransport.volume ?? 1))), Y.src = h, Y.load(), kt.setSource(!0), S || kt.seek(0)) : !h && Y.getAttribute("src") && (Y.pause(), Y.removeAttribute("src"), delete Y.dataset.panoSrc, Y.load(), Nd(), vr(), kt.setSource(!1)), S || (Y.loop = !!E.videoTransport.loop), h && !S && Ae.thumbnailSrc !== h && !Ae.thumbnailFailedSrcs.has(h) && Cn(h, k, y), h || vr(), di({
      ready: !!h,
      visible: !!h && Sd(),
      duration: k,
      frameCount: P,
      fps: y,
      hasAudio: M,
      loop: !!Y.loop,
      muted: !!Y.muted,
      volume: Number(Y.volume ?? E.videoTransport.volume ?? 1),
      thumbnailCount: E.videoTransport.thumbnailCount
    }), h || null;
  }
  function Pd(i, s = null) {
    var c;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const f = i[0];
      if (f && typeof f == "object" && !Array.isArray(f)) return f;
    }
    if (Array.isArray(s) && s.length > 0) {
      const f = (c = s[0]) == null ? void 0 : c.parsed_state;
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
  function mc(i, s = null) {
    return Pu(e, i, Be, s || (() => ue()));
  }
  function gc(i = null) {
    return yn(e, "external-sticker") ? mc(zs, i) : null;
  }
  function Ad() {
    if (!yn(e, "external-sticker")) return null;
    const i = jr(sC)[0];
    if (!i || typeof i != "object") return null;
    const s = jr(aC).map(Aa).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const c = Aa(jr(oC)[0] || null);
    return c ? { src: c, meta: i } : null;
  }
  function lb() {
    const i = v.stickers.find(zt), s = i ? Ad() : null, c = s ? K0(i.clip, p.frame, v.timeline.fps, s.meta) : null;
    ar.follow({ src: (s == null ? void 0 : s.src) || "", time: c, playing: kt.advancing, fps: v.timeline.fps });
    const f = i ? kc(i) : null, h = s != null && s.frames ? as.picture(s.frames, c, s.meta, f) : ar.picture(Xn, f);
    return h ? { media: h, revision: hc(h), source: W0(s, f) } : null;
  }
  function pi(i, s, c) {
    const f = Math.max(1, Number(s || 1)), h = Math.max(1, Number(c || 1)), m = J(Number(i || 30), 0.1, 179) * kr, y = 2 * Math.atan(Math.tan(m * 0.5) * (h / f));
    return J(y * Yi, 0.1, 179);
  }
  function cb(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const c = JSON.parse(s);
      if (!c || typeof c != "object" || String(c.kind || "") !== "pano_sticker_state") return null;
      const f = c.version;
      let h = null;
      if (typeof f == "number" && Number.isInteger(f) ? h = f : typeof f == "string" && /^\d+$/.test(f) && (h = Number.parseInt(f, 10)), h !== 1) return null;
      const m = c.pose;
      if (!m || typeof m != "object") return null;
      const y = Number(m.yaw_deg), w = Number(m.pitch_deg), k = Number(m.roll_deg), P = Number(m.hFOV_deg);
      if (![y, w, k, P].every((G) => Number.isFinite(G))) return null;
      let M = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const I = {
        yaw_deg: M,
        pitch_deg: J(w, -89.9, 89.9),
        roll_deg: k,
        hFOV_deg: J(P, 0.1, 179)
      }, T = Number(c.source_aspect);
      return Number.isFinite(T) && T > 0 && (I.source_aspect = T), I;
    } catch {
      return null;
    }
  }
  function Cd(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = no(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: J(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function ub(i) {
    var w;
    if (!i || typeof i != "object") return Cd(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let y = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const k = J(h, 0.1, 179) * kr, P = J(m, 0.1, 179) * kr, M = Math.tan(P * 0.5);
      if (Math.abs(M) > 1e-6) {
        const I = Math.tan(k * 0.5) / M;
        Number.isFinite(I) && I > 0 && (y = I);
      }
    }
    if (i != null && i.asset_id && ((w = v == null ? void 0 : v.assets) != null && w[i.asset_id])) {
      const k = v.assets[i.asset_id], P = Number((k == null ? void 0 : k.w) || 0), M = Number((k == null ? void 0 : k.h) || 0);
      P > 0 && M > 0 && (y = P / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: J(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function fb(i) {
    return Kn.linkedValue(e, i);
  }
  function db(i, s, c) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : cb(s);
    if (f) {
      const y = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || f.source_aspect || 1), w = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: pi(f.hFOV_deg, y, w),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const h = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: pi(30, h, m),
      rot_deg: 0
    };
  }
  function hb() {
    const i = gc(() => {
      ni(e, "image-loaded");
    }), s = yn(e, "external-sticker") ? Pd(dc("pano_sticker_input_pose"), null) : null;
    return ny(v, ty(e, { pose: s, image: i }));
  }
  function pb() {
    var w;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((w = e.getInputLink(i)) == null ? void 0 : w.id) ?? null : null, c = gc(() => {
      ni(e, "image-loaded");
    }), f = Pd(dc("pano_sticker_input_pose"), null), h = fb("sticker_state"), m = Kn.externalStateHash(e, h), y = s == null ? null : db(f, h, c);
    return ey(v, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: y,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
  }
  function Id(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? hb() : pb();
    if (s.changed) {
      const c = v.stickers.find(zt);
      v.stickers = s.state.stickers, v.active = s.state.active, c && p.selectedId === c.id && !v.stickers.some((f) => f.id === c.id) && (p.selectedId = null, p.selectedIds = []), lt(), ze(), Xe();
    }
    ue();
  }
  function la(i = {}) {
    const c = i.preservePanelValues !== !1 ? Xt(Nt()) : null;
    c && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: Zr(c)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function mb() {
    if (t !== "cutout") return;
    const i = He();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function yc() {
    if (t !== "cutout") return;
    const i = He();
    _i(E.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Pe.camera : Pe.plus_circle
    });
  }
  function bc() {
    const i = t === "cutout" && p.mode === "frame", s = !i && !!p.showGrid;
    _i(E.floatingButtons, "action", "reset-view", {
      disabled: r || i
    });
    const c = vc(), f = c && p.spaceMode === "6dof";
    _i(E.floatingButtons, "action", "space-mode", {
      visible: c,
      pressed: f ? "true" : "false",
      label: f ? "3DoF View" : "6DoF View",
      tip: f ? "Back to the ERP origin (3DoF)" : "Move freely in space (6DoF)"
    }), _i(E.floatingButtons, "action", "frame-view", {
      visible: f,
      disabled: r || !f
    }), _i(E.floatingButtons, "action", "toggle-grid", {
      icon: s ? Pe.eye : Pe.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Hr() {
    var c;
    const i = !!He();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, E.viewButtons.forEach((f) => {
      const h = f.key === p.mode;
      f.pressed = h ? "true" : "false", f.visible = !(f.key === "frame" && t !== "cutout"), f.disabled = f.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && p.mode === "frame" ? He() : null;
    E.frameRail.visible = !!s, E.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, E.frameRollKnob.visible = !!s && !r && s.locked !== !0, E.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, E.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), E.frameRollKnob.displayValue = Eo(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((c = p.interaction) == null ? void 0 : c.kind) === "roll_frame", E.frameRollKnob.armed = !!s && p.altModifier === !0, E.frameRail.rollKnob = E.frameRollKnob, E.frameRail.aspectLabel = s ? Zr(s) : "", E.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((f) => ({
      value: f,
      label: f,
      active: !!s && String(Zr(s)) === f
    })), s || (E.frameRail.aspectOpen = !1), E.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!He(), t === "cutout" && E.cameraPreview && (E.cameraPreview.visible = p.mode !== "frame", E.cameraPreview.expanded = !!p.outputPreviewExpanded, E.cameraPreview.settled = E.cameraPreview.settled === !0 && Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame), bc(), bh() ? mt(p.pointerPos) : ke(p.mode === "pano" ? "grab" : "default");
  }
  function gb() {
    const s = zd({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Ed() {
    return C0({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, C.width, C.height);
  }
  function Od() {
    return !S || !yn(e, "scene") ? null : Hp(jr("pano_scene_files"), jr("pano_scene_meta"), Aa);
  }
  function yb() {
    return !S || !yn(e, "external-sticker") ? null : Hp(jr("pano_sticker_files"), jr("pano_sticker_meta"), Aa);
  }
  function vc() {
    return !S || p.mode !== "pano" ? !1 : $S({ sceneLinked: !!L0(e).scene, files: Od(), stickers: v.stickers });
  }
  function _c() {
    return p.spaceMode === "6dof" && vc();
  }
  function Fd() {
    var i, s, c;
    return SM((c = (s = (i = mr.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : c.call(s, by));
  }
  function bb(i) {
    i === "3dof" && (p.viewPosition = [0, 0, 0], p.viewMoved = !1), p.spaceMode = i, Ce.backgroundDirty = !0, bc(), ue({ localOnly: !0 });
  }
  function ca() {
    var c;
    const i = p.viewMoved ? p.viewDistance : ((c = ps()) == null ? void 0 : c.radius) || qi, s = { position: p.viewPosition, yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, hFOV_deg: p.viewFov, distance: i };
    return IS(p.spaceMode, s);
  }
  function ps() {
    var i;
    return ((i = _o().space) == null ? void 0 : i.sphere) ?? null;
  }
  function wc(i) {
    p.viewPosition = i.position, p.viewYaw = i.yaw_deg, p.viewPitch = i.pitch_deg, p.viewDistance = i.distance, p.viewMoved = !0, Ce.backgroundDirty = !0, ue({ localOnly: !0 });
  }
  function Td() {
    var i;
    return ((i = ps()) == null ? void 0 : i.radius) || qi;
  }
  function vb() {
    const i = ps();
    i && wc(LS(ca(), i, C.width, C.height));
  }
  function xc() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${C.width}|${C.height}`;
    return zr.key !== i && (zr = { key: i, projection: I0(Ed(), C.width, C.height) }), zr.projection;
  }
  function ua(i) {
    const s = xc().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function Sc(i, s) {
    return xc().ray(i, s);
  }
  function mi() {
    const i = C.width, s = C.height, c = 2;
    if (i / Math.max(s, 1) >= c) {
      const w = s, k = w * c;
      return { x: (i - k) * 0.5, y: 0, w: k, h: w };
    }
    const h = i, m = h / c;
    return { x: 0, y: (s - m) * 0.5, w: h, h: m };
  }
  function kc(i) {
    var y;
    if (i && typeof i == "object" && (zt(i) || i.external === !0))
      return gc(() => {
        ni(e, "image-loaded");
      });
    const s = S ? fa(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const c = Be.get(s);
    if (c) return c;
    const f = S ? _0(i.source) : (y = v.assets) == null ? void 0 : y[s], h = yC(f);
    if (!h) return null;
    const m = new Image();
    return Oy(m, h), m.onload = () => {
      Fy(m, h), ue();
    }, m.onerror = () => {
      Ty(m, h), ue();
    }, m.src = h, Be.set(s, m), m;
  }
  function fa(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function Dd(i, s = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const f = Tt.get(c);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const h = new Image();
    return h.onload = () => {
      typeof s == "function" && s();
    }, h.src = c, Tt.set(c, h), h;
  }
  function _b(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = un.get(s);
    if (c) return c.ready ? c : null;
    const f = Dd(i, () => {
      const M = un.get(s);
      M && (M.ready = !1), ue({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const h = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (h < 1 || m < 1) return null;
    const y = document.createElement("canvas");
    y.width = h, y.height = m;
    const w = y.getContext("2d", { willReadFrequently: !0 });
    if (!w) return null;
    w.clearRect(0, 0, h, m), w.drawImage(f, 0, 0, h, m);
    const k = w.getImageData(0, 0, h, m).data, P = { canvas: y, width: h, height: m, alpha: k, ready: !0 };
    return un.set(s, P), P;
  }
  function wb(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = qn(Number(i.u || 0), h), w = Number(i.v || 0) - m, k = Math.max(0.02, Number(c || 1)), P = Number(f || 0) * kr, M = Math.cos(P), I = Math.sin(P), T = y / k, G = w / k, ne = T * M + G * I, Z = -T * I + G * M;
    return {
      ...i,
      u: ((h + ne) % 1 + 1) % 1,
      v: m + Z
    };
  }
  function xb(i, s) {
    if (!i || !s) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const f = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, y = wb(
      m,
      h,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), w = Number(c.u1 || 0) - Number(c.u0 || 0), k = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(w > 1e-6) || !(k > 1e-6)) return null;
    const P = qn(Number(y.u || 0), Number(c.u0 || 0)) / w, M = (Number(y.v || 0) - Number(c.v0 || 0)) / k;
    if (P < 0 || P > 1 || M < 0 || M > 1) return 0;
    const I = _b(i);
    if (!I) return null;
    const T = J(Math.floor(P * I.width), 0, I.width - 1), G = J(Math.floor(M * I.height), 0, I.height - 1);
    return Number(I.alpha[(G * I.width + T) * 4 + 3] || 0);
  }
  function Ld(i, s, c, f = null) {
    if (!(s != null && s.visible) || !Xr(c, s.corners)) return !1;
    const h = f || dr(c, performance.now()), m = xb(i, h);
    return m === null ? !0 : m > 8;
  }
  function Sb() {
    var f, h, m, y, w, k, P, M;
    const i = ((h = (f = p.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : h.call(f, oc(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((w = (y = i == null ? void 0 : i.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : w.width) || 2048)), c = Math.max(1, Number(((k = i == null ? void 0 : i.descriptor) == null ? void 0 : k.height) || ((M = (P = i == null ? void 0 : i.displayPaint) == null ? void 0 : P.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: c };
  }
  function kb() {
    var G, ne, Z;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const c = jn(), f = `${sc()}:${c.width}:${c.height}`;
    if (((G = p._activePaintEraserPreviewInfo) == null ? void 0 : G.cacheKey) === f)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = gn(s), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const te = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Oc(te, h.targetSpace, !0);
    }
    const y = da(c.width, c.height, { readback: !0 });
    if (!eh(y, h, { w: c.width, h: c.height })) return null;
    const w = ((Z = (ne = y.ctx) == null ? void 0 : ne.getImageData(0, 0, c.width, c.height)) == null ? void 0 : Z.data) || null;
    if (!w) return null;
    let k = c.width, P = c.height, M = -1, I = -1;
    for (let te = 0; te < c.height; te += 1)
      for (let ae = 0; ae < c.width; ae += 1)
        w[(te * c.width + ae) * 4 + 3] <= 8 || (ae < k && (k = ae), te < P && (P = te), ae > M && (M = ae), te > I && (I = te));
    if (M < k || I < P)
      return p._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const T = {
      surface: y,
      bounds: { minX: k, minY: P, maxX: M, maxY: I },
      key: `${f}:${k}:${P}:${M}:${I}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: f, value: T }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), T;
  }
  function bo() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Mb(i, s, c) {
    var f, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, y = ((h = i.item) == null ? void 0 : h.transform) || {}, w = Number(m.u0 || 0) + Number(y.du || 0), k = Number(m.u1 || 0) + Number(y.du || 0), P = Number(m.v0 || 0) + Number(y.dv || 0), M = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(J(P, 0, 1) * c),
        maxY: Math.ceil(J(M, 0, 1) * c),
        wraps: k - w >= 1 || w < 0 || k > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = cr(i.actionGroupId, "paint"), y = fi(i.actionGroupId, "paint", m);
      if (!y) return null;
      const w = y.centerUv.u - y.halfW, k = y.centerUv.u + y.halfW, P = y.centerUv.v - y.halfH, M = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(J(P, 0, 1) * c),
        maxY: Math.ceil(J(M, 0, 1) * c),
        wraps: k - w >= 1 || w < 0 || k > 1
      };
    }
    return null;
  }
  function Nb(i, s, c) {
    if (!i || !s) return !1;
    const f = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: c - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], h = f(i), m = f(s);
    return h.some((y) => m.some((w) => !(y.maxX < w.minX || w.maxX < y.minX || y.maxY < w.minY || w.maxY < y.minY)));
  }
  function Pb(i, s, c) {
    var Se, Ge, Ue, nt, ye, ie, pe;
    if (!i || !s || !((Se = c == null ? void 0 : c.surface) != null && Se.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || c.surface.canvas.width || 0), h = Number(i.height || c.surface.canvas.height || 0);
    if (f < 1 || h < 1) return i;
    const m = Mb(s, f, h);
    if (m && !Nb(m, c.bounds, f)) return i;
    const y = String(((Ge = s.item) == null ? void 0 : Ge.id) || s.id || ""), w = ((Ue = s.item) == null ? void 0 : Ue.transform) || {}, k = `${c.key}:${y}:${f}:${h}:${Number(w.du || 0).toFixed(6)}:${Number(w.dv || 0).toFixed(6)}:${Number(w.rot_deg || 0).toFixed(3)}:${Number(w.scale || 1).toFixed(4)}`, P = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (P.has(k)) return P.get(k);
    const M = J(Math.floor(Number(((nt = c.bounds) == null ? void 0 : nt.minX) || 0)), 0, Math.max(0, f - 1)), I = J(Math.floor(Number(((ye = c.bounds) == null ? void 0 : ye.minY) || 0)), 0, Math.max(0, h - 1)), T = J(Math.ceil(Number(((ie = c.bounds) == null ? void 0 : ie.maxX) || 0)), M, Math.max(0, f - 1)), G = J(Math.ceil(Number(((pe = c.bounds) == null ? void 0 : pe.maxY) || 0)), I, Math.max(0, h - 1)), ne = Math.max(1, T - M + 1), Z = Math.max(1, G - I + 1), te = da(f, h, { readback: !0 });
    te.ctx.clearRect(0, 0, f, h), te.ctx.drawImage(i, 0, 0);
    const ae = te.ctx.getImageData(M, I, ne, Z);
    te.ctx.save(), te.ctx.globalCompositeOperation = "destination-out", te.ctx.drawImage(c.surface.canvas, 0, 0), te.ctx.restore();
    const he = te.ctx.getImageData(M, I, ne, Z);
    let re = !1;
    for (let we = 0; we < ne * Z; we += 1) {
      const Re = ae.data[we * 4 + 3], We = he.data[we * 4 + 3];
      if (Re > We) {
        re = !0;
        break;
      }
    }
    return re ? (P.size > 64 && P.clear(), P.set(k, te.canvas), te.canvas) : (P.set(k, i), i);
  }
  function Rd(i, s = null) {
    const c = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!c || !f) return null;
    const h = Dd(i, s);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: y } = Sb(), w = (i == null ? void 0 : i.transform) || {}, k = [
      c,
      m,
      y,
      f.u0,
      f.v0,
      f.u1,
      f.v1,
      w.du,
      w.dv,
      w.rot_deg,
      w.scale,
      ha()
    ].join(":"), P = rn.get(k);
    if (P) return P;
    rn.size > 64 && rn.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = y;
    const I = M.getContext("2d");
    if (!I) return null;
    const T = Number(f.u0 || 0) * m, G = Number(f.v0 || 0) * y, ne = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), Z = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * y), te = T + ne * 0.5 + Number(w.du || 0) * m, ae = G + Z * 0.5 + Number(w.dv || 0) * y, he = Number(w.rot_deg || 0) * kr, re = Math.max(0.01, Number(w.scale || 1));
    for (const Se of [-m, 0, m])
      I.save(), I.translate(te + Se, ae), I.rotate(he), I.scale(re, re), I.drawImage(h, -ne * 0.5, -Z * 0.5, ne, Z), I.restore();
    return rn.set(k, M), M;
  }
  async function Mc(i, s) {
    const c = await new Promise((w) => i.toBlob(w, "image/png")), f = new FormData();
    f.append("image", c, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const h = await Gt.fetchApi("/upload/image", { method: "POST", body: f });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), y = String((m == null ? void 0 : m.name) || "").trim();
    if (!y) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: y,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let ms = null, gs = !1;
  function Ab() {
    const i = Dm(v.painting), { width: s, height: c } = ma();
    return vS(v.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: c, nodeId: String(e.id ?? "0") });
  }
  function Vd() {
    const i = String(e.id ?? "0"), s = js.get(i);
    if (gs && s) return s;
    const c = (async () => {
      var m, y, w, k, P, M, I, T, G, ne, Z, te;
      const f = pa(), h = Dm(v.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, ms = f, Fn());
        return;
      }
      if (ms !== f && !gs) {
        gs = !0;
        try {
          ws();
          const ae = oc(!1), he = ((y = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, ae)) || null, re = ((w = he == null ? void 0 : he.displayPaint) == null ? void 0 : w.canvas) || null, Se = ((k = he == null ? void 0 : he.committedMask) == null ? void 0 : k.canvas) || null, Ge = Math.max(1, Number(((P = he == null ? void 0 : he.descriptor) == null ? void 0 : P.width) || (re == null ? void 0 : re.width) || (Se == null ? void 0 : Se.width) || 2048)), Ue = Math.max(1, Number(((M = he == null ? void 0 : he.descriptor) == null ? void 0 : M.height) || (re == null ? void 0 : re.height) || (Se == null ? void 0 : Se.height) || 1024));
          (!re && h.totalPaintCount > 0 || !Se && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((I = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : I.width) || 0) !== Ge || Number(((T = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== Ue) && (p._paintLayerSyncBlankSurface = da(Ge, Ue)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ge, Ue));
          const nt = re || h.totalPaintCount > 0 && ((G = p._paintLayerSyncBlankSurface) == null ? void 0 : G.canvas) || null, ye = Se || h.totalMaskCount > 0 && ((ne = p._paintLayerSyncBlankSurface) == null ? void 0 : ne.canvas) || null;
          if (!nt && !ye) return;
          let ie = null, pe = null;
          const we = [];
          if (h.totalPaintCount > 0) {
            ie = await Mc(nt, `pano_paint_${i}.png`);
            for (const Re of ae) {
              const We = String(Re || "").trim();
              if (!We) continue;
              const Te = ((te = (Z = p.paintEngine) == null ? void 0 : Z.getGroupDisplayCanvas) == null ? void 0 : te.call(Z, We)) || null;
              if (!Te) continue;
              const ft = We.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await Mc(Te, `pano_group_${i}_${ft}.png`);
              qe && we.push({
                id: We,
                actionGroupId: We,
                image: qe
              });
            }
          }
          h.totalMaskCount > 0 && (pe = await Mc(ye, `pano_mask_${i}.png`)), f === pa() && (v.painting_layer = {
            paint: ie,
            mask: pe,
            groups: we,
            revision: f
          }, ms = f, Fn());
        } catch (ae) {
          throw ae;
        } finally {
          gs = !1;
        }
      }
    })();
    return js.set(i, c), c.finally(() => {
      js.get(i) === c && js.delete(i);
    }), c;
  }
  function Nc() {
    if (t === "cutout") {
      const h = Md();
      if (h) return h;
      const m = Au(
        e,
        ["erp_image", "bg_erp"],
        () => ue(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !yf(m) ? m : Pu(e, "pano_input_images", Be, () => ue()) || m || null;
    }
    const i = Md();
    if (i) return i;
    const s = yn(e, "background") ? Pu(e, "pano_input_images", Be, () => ue()) : null;
    if (s && !yf(s)) return s;
    if (Y instanceof HTMLVideoElement && Y.dataset.panoSrc) return Y;
    const c = $d();
    return Au(e, c, () => ue(), `background:${c.join("|")}`) || s || null;
  }
  function $d() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), c = i.includes("bg_erp");
    return r && (s || c) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Pc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Cb() {
    if ($t.failed) return { status: tr, detail: "renderer" };
    if (!$t.ready) return { status: pr, detail: "boot" };
    let i = na;
    const s = [];
    if (p.showPanorama) {
      const c = Nc();
      i = Ae.videoFailed ? tr : gf(c, Pc);
    }
    if (p.showObjects)
      for (const c of ss()) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const f = kc(c);
        s.push(gf(f, Pc));
      }
    return tC({
      presented: Ce.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function vo() {
    const i = new Set(
      (v.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(v.assets || {}).forEach((s) => {
      i.has(s) || (delete v.assets[s], Be.delete(s));
    });
  }
  function Ac(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(J(i.y, -1, 1))
    };
  }
  function Cc(i, s = null) {
    const { lon: c, lat: f } = Ac(i), h = mi();
    let m = h.x + (c / (2 * Math.PI) + 0.5) * h.w;
    const y = h.y + (0.5 - f / Math.PI) * h.h;
    if (s !== null) {
      for (; m - s > h.w / 2; ) m -= h.w;
      for (; m - s < -h.w / 2; ) m += h.w;
    }
    return { x: m, y, z: 1 };
  }
  function ys(i) {
    const s = Xt(i), c = ia(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(J(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * kr), h = Math.tan(J(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * kr);
    return {
      centerDir: c.fwd,
      right: c.right,
      up: c.up,
      tanX: f,
      tanY: h
    };
  }
  function gi(i, s, c) {
    return MC(Fm(Fm(i.centerDir, Tm(i.right, s)), Tm(i.up, c)));
  }
  function zd(i) {
    const s = ys(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: h }) => gi(s, f * s.tanX, h * s.tanY));
  }
  function jd(i, s, c) {
    const f = ys(i), h = (s * 2 - 1) * f.tanX, m = (1 - c * 2) * f.tanY;
    return gi(f, h, m);
  }
  function Hd(i) {
    const s = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: J((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Ib(i) {
    var k, P, M, I;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const c = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.scale) || 1)), h = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), y = Number(((I = i == null ? void 0 : i.transform) == null ? void 0 : I.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((T) => ls(cs(T, c, f, h), m, y));
  }
  function Eb(i) {
    const s = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, h = `${s}:${p.mode}:${ha()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (p.mode === "frame") {
      const m = He(), y = m ? tn(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Ob(i) {
    const s = String((i == null ? void 0 : i.id) || ""), c = zn(i) ? "frame" : yt(i) ? "sticker" : "item", f = Xt(i), h = [
      c,
      s,
      p.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      Zr(f),
      sr(i) && ki(i.clip, p.frame)
    ].join(":");
    if (p.mode === "frame") {
      const m = He(), y = m ? tn(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Gd() {
    var i, s;
    return ((s = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function Fb() {
    return Gd() ? `${qd()}:mask_display` : "";
  }
  function Kd(i) {
    if (!p.showMask) return i;
    const s = Gd();
    if (!s) return i;
    const c = Fb(), f = i.reduce((y, w) => Math.max(y, Number((w == null ? void 0 : w.zIndex) || 0)), -1), h = (Array.isArray(v.stickers) ? v.stickers : []).reduce((y, w) => Math.max(y, Number((w == null ? void 0 : w.z_index) || 0)), -1), m = Math.max(f, h);
    return i.push({
      id: "mask_display",
      source: s,
      revision: c,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Tb() {
    var f, h;
    const i = ac(!0), s = kb(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const w = ((h = (f = p.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : h.call(f, y)) || null;
        if (!w) continue;
        c.push({
          id: `paint_group:${y}`,
          source: w,
          revision: `${qd()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, w = on((y == null ? void 0 : y.id) || m.id || "");
        if (!w) continue;
        const k = Rd(y, () => ue());
        if (!k) continue;
        const P = Pb(k, m, s), M = (y == null ? void 0 : y.transform) || {};
        c.push({
          id: `raster:${w}`,
          source: P,
          revision: [
            pa(),
            (s == null ? void 0 : s.key) || "",
            w,
            Number(M.du || 0).toFixed(6),
            Number(M.dv || 0).toFixed(6),
            Number(M.rot_deg || 0).toFixed(3),
            Number(M.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return Kd(c);
  }
  function Db() {
    return (p.showObjects ? Tb() : Kd([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function _o() {
    return fo || (fo = Lb()), fo;
  }
  function Lb() {
    const i = Nc(), s = Db(), c = { ...v.assets };
    for (const I of S ? [] : v.stickers) {
      const T = String((I == null ? void 0 : I.asset_id) || "");
      T && !c[T] && Be.has(T) && (c[T] = { type: "comfy_image", filename: T });
    }
    const f = S ? v.stickers.map((I) => rc(I) ? { ...I, source: { kind: "file", filename: fa(I) } } : I) : v.stickers, h = JSON.stringify([f, Object.keys(c), v.scene]);
    br.key !== h && (br = { key: h, sceneState: so({ ...v, stickers: f, assets: c, painting: null }) });
    const m = ar ? lb() : null, y = (I) => {
      if (ar && zt(I)) return m;
      const T = kc(I);
      return T ? { media: T, revision: hc(T) } : null;
    }, w = p.showObjects ? E0(br.sceneState, p.frame, v.stickers, { media: y, paintLayers: s }) : s.map((I) => ({ kind: "erp", ...I })), k = i && (i === Y || i === Vt) ? Y.dataset.panoSrc : i, P = p.showPanorama && Pc(i) ? { media: i, revision: hc(i), coverage: Gn(v.coverage), source: k } : null, M = vc() ? Rb(br.sceneState, y) : null;
    return { background: P, layers: w, space: M };
  }
  function Rb(i, s) {
    const c = Bf(i, p.frame), f = Od(), h = P0(f, c.scene), m = h != null && h.url ? $t.sceneBox(h.url) : null, y = m && Kp(h.kind, m), w = yb(), k = p.showObjects ? zS(w, i, c) : null, P = k != null && k.url ? $t.sceneBox(k.url) : null, M = P ? [{ box: Kp(k.kind, P), value: k.value }] : [], I = p.showObjects ? JS(i, p.frame, v.stickers, { media: s }) : [], T = GS(KS(c, y, I, M));
    return {
      grid: p.showGrid && !p.fullscreen ? US((T == null ? void 0 : T.radius) || qi) : null,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: h,
      stickerUrls: w ? w.urls.filter(Boolean) : [],
      sticker: k,
      stickers: I,
      sphere: T
    };
  }
  function Vb() {
    if (!Ce.backgroundDirty && Ce.backgroundWasVisible) return;
    const { background: i, layers: s, space: c } = _o(), f = se.width, h = se.height, m = $t.render({
      width: f,
      height: h,
      camera: c ? jp(ca(), f, h, c.sphere) : Ed(),
      background: i,
      layers: s,
      space: c
    }), y = se.getContext("2d");
    y.clearRect(0, 0, f, h), !i && !s.length && !c ? (y.fillStyle = "#070707", y.fillRect(0, 0, f, h)) : m && y.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, h), Ce.backgroundWasVisible = !!m, Ce.backgroundDirty = !1, z = null;
  }
  function Bd(i, s, c, f) {
    const { background: h, layers: m } = _o();
    if (!h && !m.length) return !1;
    const y = $t.render({ width: s.w, height: s.h, camera: tl(c), background: h, layers: m, owner: f });
    return y ? (i.drawImage(y.canvas, y.x, y.y, y.width, y.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function $b(i) {
    const s = _o(), c = JSON.stringify([i, se.width, se.height, Yp(s)]);
    if (c === z) return;
    const f = $t.renderUnwrap({ width: i.w, height: i.h, ...s }), h = se.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, se.width, se.height), f && h.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), z = f ? c : null, Ce.backgroundWasVisible = !1;
  }
  function zb(i = !1) {
    const s = C.width, c = C.height, f = mi();
    if (A.globalAlpha = 1, A.lineWidth = 1, i || A.clearRect(0, 0, s, c), ws(), $b(f), p.showGrid && !p.fullscreen) {
      A.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = f.x + f.w * m / 16;
        A.beginPath(), A.moveTo(y, f.y), A.lineTo(y, f.y + f.h), A.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = f.y + f.h * m / 8;
        A.beginPath(), A.moveTo(f.x, y), A.lineTo(f.x + f.w, y), A.stroke();
      }
      A.strokeStyle = "rgba(250, 250, 250, 0.86)", A.lineWidth = 1.2, A.beginPath(), A.moveTo(f.x, f.y + f.h / 2), A.lineTo(f.x + f.w, f.y + f.h / 2), A.stroke(), A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center";
      const h = f.y + f.h * 0.57;
      A.fillText("Left", f.x + f.w * 0.25, h), A.fillText("Front", f.x + f.w * 0.5, h), A.fillText("Right", f.x + f.w * 0.75, h), A.fillText("Back", f.x + 38, h), A.fillText("Back", f.x + f.w - 38, h);
    }
  }
  function Wd(i, s, c = 1) {
    let f = !1;
    A.strokeStyle = s, A.lineWidth = c, A.beginPath();
    for (const h of i) {
      const m = ua(h);
      if (!m) {
        f = !1;
        continue;
      }
      f ? A.lineTo(m.x, m.y) : (A.moveTo(m.x, m.y), f = !0);
    }
    A.stroke();
  }
  function jb(i = !1) {
    const s = C.width, c = C.height;
    if (i || A.clearRect(0, 0, s, c), ws(), Vb(), p.showGrid && !p.fullscreen && _o().space)
      Hb();
    else if (p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push(Vn(h, y));
        Wd(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push(Vn(y, h));
        Wd(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: Vn(-90, 0) },
        { name: "Front", dir: Vn(0, 0) },
        { name: "Right", dir: Vn(90, 0) },
        { name: "Back", dir: Vn(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", f.forEach((h) => {
        const m = ua(h.dir);
        m && A.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function Hb() {
    const i = jp(ca(), C.width, C.height, ps()), s = RS(i, [0, 0, 0], C.width, C.height);
    s && (A.fillStyle = "rgba(255, 221, 87, 0.9)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", A.fillText("ERP origin", s.x, s.y - 12));
  }
  function Gb(i, s = null, c = null, f = null) {
    if (p.mode === "frame") {
      const h = s || He();
      if (!h) return [];
      const m = c || tn(h);
      return _1(i, h, m);
    }
    return th(i, f);
  }
  function bs(i, s = null, c = null, f = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const y = th([i], h);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = wo(i);
    return m ? Gr(m, s, c, f) : null;
  }
  function Kb(i, s) {
    const c = String(i.actionGroupId || i.id || "").trim(), f = cr(c, i.layerKind), h = fi(c, i.layerKind, f), m = (h == null ? void 0 : h.centerUv) || cc(c, i.layerKind, f), y = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, w = [], k = p.mode === "frame" ? He() : null, P = k ? tn(k) : null;
    for (const re of f) {
      const Se = (re == null ? void 0 : re.geometry) || null, Ge = (Se == null ? void 0 : Se.geometryKind) === "lasso_fill" ? Se == null ? void 0 : Se.points : (Se == null ? void 0 : Se.processedPoints) || (Se == null ? void 0 : Se.rawPoints) || (Se == null ? void 0 : Se.points) || [], Ue = Gb(Ge, k, P, y).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y));
      if (!Ue.length) continue;
      const nt = bi(String((re == null ? void 0 : re.toolKind) || "pen")), ye = Tn[nt] || Tn[Ur];
      w.push({
        points: Ue,
        closed: String((Se == null ? void 0 : Se.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((re == null ? void 0 : re.size) || 10) * Math.max(0.1, Number((ye == null ? void 0 : ye.sizeScale) ?? 1)) + 10),
        layerKind: String((re == null ? void 0 : re.layerKind) || i.layerKind || "paint")
      });
    }
    const M = bs(m, null, k, P, y);
    if (!M) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const T = zy(h).map((re) => bs(re, M.x, k, P, y)).filter((re) => Number.isFinite(re == null ? void 0 : re.x) && Number.isFinite(re == null ? void 0 : re.y)).map((re) => ({ x: Number(re.x || 0), y: Number(re.y || 0) }));
    if (T.length < 4) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const G = (re, Se) => ({
      x: (Number((re == null ? void 0 : re.x) || 0) + Number((Se == null ? void 0 : Se.x) || 0)) * 0.5,
      y: (Number((re == null ? void 0 : re.y) || 0) + Number((Se == null ? void 0 : Se.y) || 0)) * 0.5,
      a: re,
      b: Se
    }), ne = G(T[0], T[1]), Z = G(T[1], T[2]), te = G(T[2], T[3]), ae = G(T[3], T[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: T,
      edgeMidpoints: [
        { edge: "top", ...ne },
        { edge: "right", ...Z },
        { edge: "bottom", ...te },
        { edge: "left", ...ae }
      ],
      rotateStemBase: { x: ne.x, y: ne.y },
      rotateHandle: { x: ne.x, y: ne.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return p._strokeGeomCache.set(s, he), he;
  }
  function Bb(i, s) {
    const c = p.mode === "frame" ? He() : null, f = c ? tn(c) : null, h = Hd(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, y = bs(h, null, c, f, m), k = Ib(i).map((T) => bs(T, (y == null ? void 0 : y.x) ?? null, c, f, m)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
    if (!Array.isArray(k) || k.length < 4) {
      const T = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(s, T), T;
    }
    const P = k.slice(0, 4).map((T) => ({ x: Number((T == null ? void 0 : T.x) || 0), y: Number((T == null ? void 0 : T.y) || 0) })), I = {
      kind: "rasterObject",
      center: {
        x: P.reduce((T, G) => T + Number(G.x || 0), 0) / P.length,
        y: P.reduce((T, G) => T + Number(G.y || 0), 0) / P.length
      },
      corners: P,
      visible: !0
    };
    return p._strokeGeomCache.set(s, I), I;
  }
  function Gr(i, s = null, c = null, f = null, h = {}) {
    if (p.mode === "frame") {
      const M = c || He(), I = f || tn(M);
      if (!M || !I) return null;
      const T = M ? ga(M, i) : null;
      return T ? {
        x: Number(I.x || 0) + Number(T.x || 0) * Number(I.w || 0),
        y: Number(I.y || 0) + Number(T.y || 0) * Number(I.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return Cc(i, s);
    const m = 1e-4, y = xc().project(i, m);
    if (!Number.isFinite(y.z) || y.z <= m && !(h != null && h.clipBehind)) return null;
    const w = C.width, k = C.height, P = Math.max(w, k) * 2;
    return {
      x: J(y.x, -P, w + P),
      y: J(y.y, -P, k + P),
      z: Math.max(y.z, m),
      rawZ: y.z,
      clipped: y.z <= m
    };
  }
  function Wb(i, s = []) {
    if (p.mode !== "pano" || yt(i)) return 1;
    const c = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return c.length ? wC(0.035, 0.2, Math.min(...c)) : 1;
  }
  function Ub(i) {
    if (sr(i) && !ki(i.clip, p.frame)) return { visible: !1 };
    const s = Xt(i), c = Vn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = p.mode === "frame" ? He() : null, h = f ? tn(f) : null, m = p.mode === "pano" && (yt(i) || zn(i)), y = m ? { clipBehind: !0 } : null, w = Gr(c, null, f, h, y);
    if (!w) return { visible: !1 };
    const k = ys(i), M = zd(i).map((pe) => Gr(pe, w.x, f, h, y)).filter((pe) => Number.isFinite(pe == null ? void 0 : pe.x) && Number.isFinite(pe == null ? void 0 : pe.y));
    if (M.length < 4) return { visible: !1 };
    const I = gi(k, 0, k.tanY), T = gi(k, 0, k.tanY + Math.max(k.tanY * 0.43, 0.053)), G = Gr(I, w.x, f, h, y);
    if (!G) return { visible: !1 };
    const ne = Gr(T, (G == null ? void 0 : G.x) ?? w.x, f, h, y), Z = ((ne == null ? void 0 : ne.x) ?? G.x) - G.x, te = ((ne == null ? void 0 : ne.y) ?? G.y) - G.y, ae = Math.hypot(Z, te) || 1, he = {
      x: G.x + Z / ae * 30,
      y: G.y + te / ae * 30
    }, re = Gr(gi(k, 0, k.tanY), w.x, f, h, y), Se = Gr(gi(k, k.tanX, 0), w.x, f, h, y), Ge = Gr(gi(k, 0, -k.tanY), w.x, f, h, y), Ue = Gr(gi(k, -k.tanX, 0), w.x, f, h, y);
    if (!re || !Se || !Ge || !Ue) return { visible: !1 };
    const nt = [
      w,
      ...M,
      G,
      ne,
      re,
      Se,
      Ge,
      Ue
    ];
    if (m && !nt.some((pe) => Number((pe == null ? void 0 : pe.rawZ) ?? (pe == null ? void 0 : pe.z)) > 1e-4)) return { visible: !1 };
    const ye = Wb(i, nt), ie = [
      {
        edge: "top",
        x: re.x,
        y: re.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: Se.x,
        y: Se.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: Ge.x,
        y: Ge.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: Ue.x,
        y: Ue.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: M.map((pe) => ({ x: pe.x, y: pe.y })),
      edgeMidpoints: ie,
      rotateStemBase: { x: G.x, y: G.y },
      rotateHandle: he,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ye,
      visible: !0
    };
  }
  function qt(i) {
    if (en(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = Wy(h, i.layerKind), y = p._strokeGeomCache.get(m);
      return y || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Kb(i, m));
    }
    if (pn(i)) {
      const h = Eb(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Bb(i, h));
    }
    const s = Ob(i), c = p._strokeGeomCache.get(s);
    if (c) return c;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const f = Ub(i);
    return p._strokeGeomCache.set(s, f), f;
  }
  function vs(i, s, c, f = null) {
    const h = [];
    for (let m = 0; m <= c; m += 1) {
      const y = m / c;
      let w = 0, k = 0;
      s === 0 ? (w = y, k = 0) : s === 1 ? (w = 1, k = y) : s === 2 ? (w = 1 - y, k = 1) : (w = 0, k = 1 - y);
      const P = jd(i, w, k), M = p.mode === "unwrap" ? Cc(P, f) : ua(P);
      M && h.push(M);
    }
    return h;
  }
  function Yb(i, s) {
    const c = Xt(i), f = Vn(Number(c.yaw_deg || 0), Number(c.pitch_deg || 0)), h = p.mode === "unwrap" ? Cc(f) : null, m = h ? h.x : null, y = p.mode === "pano" ? 28 : 20, w = [
      vs(i, 0, y, m),
      vs(i, 1, y, m),
      vs(i, 2, y, m),
      vs(i, 3, y, m)
    ];
    ad(A, w, { selected: s });
  }
  function Xb() {
    const i = [...Array.isArray(v.shots) ? v.shots : []], s = [...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(c.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Ic() {
    const i = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(f.z_index || 0) - Number(c.z_index || 0)), ...i];
  }
  function _s(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(s[c].x, s[c].y);
      i.closePath();
    }
  }
  function Ud(i, s, c) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const h = J(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = A.globalAlpha;
    A.globalAlpha = m * h;
    const y = c ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = c ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", k = s ? 3.2 : 2.6;
    _s(A, f), A.fillStyle = w, A.fill(), A.strokeStyle = y, A.lineWidth = k, A.stroke(), A.save(), A.strokeStyle = y, A.lineWidth = s ? 3.2 : 2.6, A.lineCap = "round";
    const P = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, I = s ? 12 : 9;
    P.forEach((T) => {
      const ne = P.find((he) => (he == null ? void 0 : he.edge) === M[T == null ? void 0 : T.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, Z = ne.x - T.x, te = ne.y - T.y, ae = Math.hypot(Z, te) || 1;
      A.beginPath(), A.moveTo(T.x, T.y), A.lineTo(T.x + Z / ae * I, T.y + te / ae * I), A.stroke();
    }), A.restore(), A.globalAlpha = m;
  }
  function qb(i, s, c, f) {
    const h = J(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (zn(i)) {
      Ud(s, c, f);
      return;
    }
    if (yt(i)) {
      const y = A.globalAlpha;
      A.globalAlpha = y * Zy(i) * h, p.mode === "frame" ? (A.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = c ? 2 : 1, _s(A, s.corners), A.stroke()) : Yb(i, c), A.globalAlpha = y;
      return;
    }
    const m = A.globalAlpha;
    A.globalAlpha = m * h, A.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", _s(A, s.corners), A.fill(), A.strokeStyle = c ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = c ? 2.8 : 1.9, _s(A, s.corners), A.stroke(), A.globalAlpha = m;
  }
  function Yd(i, s, c) {
    if (yt(i)) {
      gy(A, s, { accent: c });
      return;
    }
    A.fillStyle = c, s.corners.forEach((f) => {
      A.beginPath(), A.arc(f.x, f.y, 6.5, 0, Math.PI * 2), A.fill();
    }), zn(i) && (A.strokeStyle = c, A.lineCap = "round", A.lineWidth = 4, s.edgeMidpoints.forEach((f) => {
      var M, I, T, G;
      const h = (((M = f.b) == null ? void 0 : M.x) ?? f.x) - (((I = f.a) == null ? void 0 : I.x) ?? f.x), m = (((T = f.b) == null ? void 0 : T.y) ?? f.y) - (((G = f.a) == null ? void 0 : G.y) ?? f.y), y = Math.hypot(h, m) || 1, w = h / y, k = m / y, P = 10;
      A.beginPath(), A.moveTo(f.x - w * P, f.y - k * P), A.lineTo(f.x + w * P, f.y + k * P), A.stroke();
    }), A.lineCap = "butt"), en(i) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), A.lineTo(s.rotateHandle.x, s.rotateHandle.y), A.stroke(), A.fillStyle = c, A.beginPath(), A.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function Jb() {
    var m;
    const i = p.mode === "frame" ? [] : ur(), s = i.length > 1, c = t === "cutout" ? Xb() : dn(), f = c.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${zn(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== c || p._sortedItemsCache.orderKey !== f) && (p._sortedItemsCache = {
      src: c,
      orderKey: f,
      sorted: [...c]
    });
    const h = p._sortedItemsCache.sorted;
    for (const y of h) {
      const w = p.mode !== "frame" && !s && _d(y);
      if (p.mode === "frame" && !w || !p.showObjects && !zn(y)) continue;
      const k = yt(y), P = zn(y), M = kn(y);
      if (!k && !P || sr(y) && !ki(y.clip, p.frame)) continue;
      const I = qt(y);
      if (t !== "stickers" && !I.visible)
        continue;
      const T = J(Number((I == null ? void 0 : I.visibilityAlpha) ?? 1), 0, 1);
      if (T <= 0.01) continue;
      const G = P && t === "cutout" && p.mode === "pano" ? J(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= G, qb(y, I, w, M), w && I.visible) {
        const ne = M ? "#ff4d4f" : k && zt(y) ? "#f59e0b" : "#0070f3", Z = A.globalAlpha;
        A.globalAlpha = Z * T, Yd(y, I, ne), A.globalAlpha = Z;
      }
      A.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !He() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const y = p.cutoutPanoFrameVisual, w = J(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= w, Ud(y.geom, y.selected, y.locked), y.selected && Yd(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (s) {
      const y = us(i);
      if (y != null && y.visible) {
        const w = uc(i) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(y.corners[0].x, y.corners[0].y);
        for (let k = 1; k < y.corners.length; k += 1) A.lineTo(y.corners[k].x, y.corners[k].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = w, y.corners.forEach((k) => {
          A.beginPath(), A.arc(k.x, k.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      i.forEach((y) => {
        if (!en(y) && !pn(y)) return;
        const w = qt(y);
        if (!(w != null && w.visible)) return;
        const k = kn(y) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(w.corners[0].x, w.corners[0].y);
        for (let P = 1; P < w.corners.length; P += 1) A.lineTo(w.corners[P].x, w.corners[P].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = k, w.corners.forEach((P) => {
          A.beginPath(), A.arc(P.x, P.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = Sh(p.interaction.start, p.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), A.fill(), A.stroke(), A.restore();
    }
  }
  function Xd(i, s = !1) {
    const c = J(no(i), 0.05, 20), f = s ? 320 : 220;
    return c >= 1 ? { width: f, height: Math.max(1, Math.round(f / c)) } : { width: Math.max(1, Math.round(f * c)), height: f };
  }
  function Zb(i) {
    if (!ui || !i) return !1;
    const s = ui.closest(".pano-camera-preview");
    if (!s) return !1;
    const c = Math.round(Number(s.clientWidth || ui.clientWidth || 0)), f = Math.round(Number(s.clientHeight || ui.clientHeight || 0));
    return Math.abs(c - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function Qb() {
    if (p.outputPreviewRect = null, E.outputPreviewToggle.visible = p.mode !== "frame" && !!He(), t !== "cutout" || !E.cameraPreview) return;
    if (p.mode === "frame") {
      E.cameraPreview.visible = !1, E.cameraPreview.settled = !1;
      return;
    }
    const i = He();
    E.cameraPreview.visible = !0, E.cameraPreview.expanded = !!p.outputPreviewExpanded;
    const s = L == null ? void 0 : L.getContext("2d");
    if (!i || !s) {
      E.cameraPreview.ready = !1, E.cameraPreview.settled = !1, E.cameraPreview.width = 220, E.cameraPreview.height = 132, E.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, L.width, L.height), ho = null;
      return;
    }
    const c = Xd(i, !!p.outputPreviewExpanded);
    E.cameraPreview.width = c.width, E.cameraPreview.height = c.height;
    const f = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(c.width * f)), h: Math.max(1, Math.round(c.height * f)) };
    (L.width !== h.w || L.height !== h.h) && (L.width = h.w, L.height = h.h);
    const m = JSON.stringify([h, li(i), Yp(_o())]);
    let y = m === ho;
    if (y || (s.clearRect(0, 0, h.w, h.h), y = Bd(s, h, i, "camera_preview"), ho = y ? m : null), !y) {
      E.cameraPreview.ready = !1, E.cameraPreview.label = Nc() ? "Loading preview" : "Connect ERP image", E.cameraPreview.settled = !1;
      return;
    }
    const w = Zb(c);
    E.cameraPreview.ready = !0, E.cameraPreview.label = w ? "" : "Loading preview", E.cameraPreview.settled = w && Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame;
  }
  function Ec(i, s) {
    if (!i || !s) return null;
    const c = Number(s.x || 0), f = Number(s.y || 0);
    return jd(i, c, f);
  }
  function wo(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(c);
    return nc(f * Math.sin(s), Math.sin(c), f * Math.cos(s));
  }
  function e1(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function t1(i, s, c, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: mn(i, "widthScale", 1),
      pressureLike: mn(i, "pressureLike", 1)
    }, ...f, u: s, v: c };
  }
  function n1(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Oc(i, s, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (f) {
      let Z = null;
      i.forEach((te) => {
        const ae = Number((te == null ? void 0 : te.u) || 0), he = Number((te == null ? void 0 : te.v) || 0), re = (ae % 1 + 1) % 1, Se = Z == null ? re : Z + qn(re, (Z % 1 + 1) % 1);
        h.set(te, { x: Se, y: he }), Z = Se;
      });
    }
    const m = (Z) => !Z || typeof Z != "object" ? { x: 0, y: 0 } : h.get(Z) || e1(Z), y = (Z, te, ae, he = {}) => {
      const re = f ? (Number(te) % 1 + 1) % 1 : Number(te), Se = t1(Z, re, ae, he);
      return h.set(Se, { x: Number(te), y: Number(ae) }), Se;
    }, w = (Z, te, ae) => {
      const he = m(Z), re = m(te);
      return y(Z, Qn(he.x, re.x, ae), Qn(he.y, re.y, ae), {
        t: Qn(Number((Z == null ? void 0 : Z.t) || 0), Number((te == null ? void 0 : te.t) || 0), ae),
        widthScale: Qn(mn(Z, "widthScale", 1), mn(te, "widthScale", 1), ae),
        pressureLike: Qn(mn(Z, "pressureLike", 1), mn(te, "pressureLike", 1), ae)
      });
    };
    if (i.length === 1) {
      const Z = m(i[0]);
      return [y(i[0], Z.x, Z.y)];
    }
    const k = n1(s, c), P = (Z, te) => {
      const ae = [0];
      for (let ie = 1; ie < Z.length; ie += 1) {
        const pe = m(Z[ie - 1]), we = m(Z[ie]);
        ae.push(ae[ie - 1] + Math.hypot(we.x - pe.x, we.y - pe.y));
      }
      const he = ae[ae.length - 1] || 0;
      if (he <= 1e-8) {
        const ie = Z[0], pe = m(ie);
        return [y(ie, pe.x, pe.y)];
      }
      const re = [];
      let Se = 0;
      for (let ie = 0; ie <= he + 1e-9; ie += te) {
        for (; Se < ae.length - 2 && ae[Se + 1] < ie; ) Se += 1;
        const pe = ae[Se], we = ae[Se + 1], Re = Math.max(1e-8, we - pe);
        re.push(w(Z[Se], Z[Se + 1], J((ie - pe) / Re, 0, 1)));
      }
      const Ge = Z[Z.length - 1], Ue = m(Ge), nt = re[re.length - 1], ye = nt ? m(nt) : null;
      return (!ye || Math.hypot(ye.x - Ue.x, ye.y - Ue.y) > te * 0.35) && re.push(y(Ge, Ue.x, Ue.y)), re;
    }, M = (Z) => {
      if (!Array.isArray(Z) || Z.length < 3) return Z ? Z.slice() : [];
      const te = m(Z[0]), ae = [y(Z[0], te.x, te.y)];
      for (let Se = 0; Se < Z.length - 1; Se += 1) {
        const Ge = Z[Se], Ue = Z[Se + 1], nt = m(Ge), ye = m(Ue), ie = y(
          Ge,
          nt.x * 0.75 + ye.x * 0.25,
          nt.y * 0.75 + ye.y * 0.25,
          {
            t: Number(Ge.t || 0) * 0.75 + Number(Ue.t || 0) * 0.25,
            widthScale: mn(Ge, "widthScale", 1) * 0.75 + mn(Ue, "widthScale", 1) * 0.25,
            pressureLike: mn(Ge, "pressureLike", 1) * 0.75 + mn(Ue, "pressureLike", 1) * 0.25
          }
        ), pe = y(
          Ge,
          nt.x * 0.25 + ye.x * 0.75,
          nt.y * 0.25 + ye.y * 0.75,
          {
            t: Number(Ge.t || 0) * 0.25 + Number(Ue.t || 0) * 0.75,
            widthScale: mn(Ge, "widthScale", 1) * 0.25 + mn(Ue, "widthScale", 1) * 0.75,
            pressureLike: mn(Ge, "pressureLike", 1) * 0.25 + mn(Ue, "pressureLike", 1) * 0.75
          }
        );
        ae.push(ie, pe);
      }
      const he = Z[Z.length - 1], re = m(he);
      return ae.push(y(he, re.x, re.y)), ae;
    }, I = P(i, k);
    if (I.length < 3) return I;
    const T = c ? 2 : 1;
    let G = I.slice();
    for (let Z = 0; Z < T; Z += 1) G = M(G);
    return P(G, Math.max(k * 0.75, 55e-5));
  }
  function mn(i, s, c = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : c;
  }
  function r1(i) {
    const s = Number(i == null ? void 0 : i.radiusValue);
    if (Number.isFinite(s) && s > 0) {
      const c = String((i == null ? void 0 : i.radiusModel) || "").trim() || "erp_uv_norm";
      return c === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
      } : {
        model: c,
        value: s
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
    };
  }
  function da(i, s, c = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const h = f.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, f.width, f.height), h.imageSmoothingEnabled = !0), { canvas: f, ctx: h };
  }
  function ha() {
    const i = ma();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function pa() {
    const i = ma();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function qd() {
    const i = sc(), s = pa();
    return i ? `${s}:${i}` : s;
  }
  function i1() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function o1() {
    p.paintCompositeRevision += 1;
  }
  function a1() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function Jd() {
    var i, s;
    p.paintEngineRevisionKey = null, (s = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, v), p.paintEngineRevisionKey = ha();
  }
  function Zd() {
    v.painting_layer !== null && (v.painting_layer = null), ms = "";
  }
  function Wt() {
    a1(), Ce.backgroundDirty = !0, Ce.dirty = !0;
  }
  function fr({ rebuildPaintEngine: i = !1 } = {}) {
    Zd(), i1(), Wt(), i && Jd();
  }
  function xo() {
    Zd(), o1(), Wt();
  }
  function ws() {
    var f;
    const i = ma(), s = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== s && (p.paintEngine = Ku(i), p.paintEngineDescriptorKey = s, p.paintEngineRevisionKey = "");
    const c = ha();
    p.paintEngineRevisionKey !== c && (p.paintEngineRevisionKey = c, (f = p.paintEngine) == null || f.rebuildCommitted(v));
  }
  function ma() {
    const i = Math.max(1, N(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function jn() {
    return ma();
  }
  function s1(i, s, c, f, h = null) {
    const m = r1(i), y = mn(s, "widthScale", 1) * mn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * y) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * kr) * c * y) : Math.max(0.5, m.value / (2 * Math.PI) * c * y) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * y);
  }
  function l1(i, s, c = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), h = String((s == null ? void 0 : s.toolKind) || "pen"), m = c.preview === !0, y = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * y : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const w = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, k = m ? Math.max(0.28, Number(w.a ?? 1) * 0.88) : Math.max(0.12, Number(w.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(w.r || 0) * 255)}, ${Math.round(Number(w.g || 0) * 255)}, ${Math.round(Number(w.b || 0) * 255)}, ${k})`;
  }
  function c1(i, s, c) {
    const f = Math.max(0.5, Math.min(c, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function u1(i, s, c, f, h = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), l1(i, c, h);
    const y = (w) => c1(i, w, m);
    if (s.length === 1) {
      y(s[0]), i.restore();
      return;
    }
    for (let w = 0; w < s.length - 1; w += 1) {
      const k = s[w], P = s[w + 1];
      if (!k || !P) continue;
      const M = Number(k.x || 0), I = Number(k.y || 0), T = Number(P.x || 0), G = Number(P.y || 0), ne = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5))), Z = Math.max(0.5, Math.min(m, Number(P.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(I) || !Number.isFinite(T) || !Number.isFinite(G) || !Number.isFinite(ne) || !Number.isFinite(Z)) continue;
      const te = T - M, ae = G - I, he = Math.hypot(te, ae);
      if (!Number.isFinite(he) || he < 1e-6) {
        y(k);
        continue;
      }
      if (he > Math.max(f.w, f.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(ne, Z)), Se = Math.max(0.35, Math.min(re * 0.4, 2.25)), Ge = Math.max(1, Math.ceil(he / Se));
      for (let Ue = 0; Ue <= Ge; Ue += 1) {
        const nt = Ue / Ge;
        y({
          x: Qn(M, T, nt),
          y: Qn(I, G, nt),
          radiusPx: Qn(ne, Z, nt)
        });
      }
    }
    y(s[s.length - 1]), i.restore();
  }
  function f1(i, s, c, f) {
    u1(i, s, c, f, { preview: !1 });
  }
  function d1(i, s, c, f, h) {
    var w, k, P, M;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", y = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const I = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(I.r || 0) * 255)}, ${Math.round(Number(I.g || 0) * 255)}, ${Math.round(Number(I.b || 0) * 255)}, ${Number(I.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((w = s[0]) == null ? void 0 : w[m]) || 0) * f.w, Number(((k = s[0]) == null ? void 0 : k[y]) || 0) * f.h);
    for (let I = 1; I < s.length; I += 1)
      i.lineTo(Number(((P = s[I]) == null ? void 0 : P[m]) || 0) * f.w, Number(((M = s[I]) == null ? void 0 : M[y]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Qd(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function h1(i, s) {
    const c = Qd(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: s1(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function eh(i, s, c = null) {
    var w, k, P, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = c || { w: Number(((w = i.canvas) == null ? void 0 : w.width) || 0), h: Number(((k = i.canvas) == null ? void 0 : k.height) || 0) }, h = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((P = s == null ? void 0 : s.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return d1(i.ctx, Qd(h), h, f), !0;
    const y = h1(h, f);
    return y.length ? (f1(i.ctx, y, h, f), !0) : !1;
  }
  function p1(i, s, c, f = 8) {
    const h = new Uint8Array(s * c), m = [], y = new Int32Array(s * c), w = new Int32Array(s * c);
    for (let k = 0; k < c; k += 1)
      for (let P = 0; P < s; P += 1) {
        const M = k * s + P;
        if (h[M] || i[M] <= f) continue;
        let I = 0, T = 0;
        y[T] = P, w[T] = k, T += 1, h[M] = 1;
        const G = [];
        let ne = P, Z = k, te = P, ae = k;
        for (; I < T; ) {
          const he = y[I], re = w[I];
          I += 1, G.push({ x: he, y: re }), he < ne && (ne = he), re < Z && (Z = re), he > te && (te = he), re > ae && (ae = re);
          const Se = [
            [(he - 1 + s) % s, re],
            [(he + 1) % s, re],
            [he, re - 1],
            [he, re + 1]
          ];
          for (const [Ge, Ue] of Se) {
            if (Ue < 0 || Ue >= c) continue;
            const nt = Ue * s + Ge;
            h[nt] || i[nt] <= f || (h[nt] = 1, y[T] = Ge, w[T] = Ue, T += 1);
          }
        }
        m.push({ pixels: G, minX: ne, minY: Z, maxX: te, maxY: ae });
      }
    return m;
  }
  function m1(i, s) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((k) => Number((k == null ? void 0 : k.x) || 0)).filter((k) => Number.isFinite(k)))].sort((k, P) => k - P);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let f = -1, h = 0;
    for (let k = 0; k < c.length; k += 1) {
      const P = c[k], I = (k === c.length - 1 ? c[0] + s : c[k + 1]) - P - 1;
      I > f && (f = I, h = k);
    }
    const m = (c[(h + 1) % c.length] + s) % s;
    let y = 1 / 0, w = -1 / 0;
    for (const k of c) {
      const P = (k - m + s) % s;
      y = Math.min(y, P), w = Math.max(w, P);
    }
    return {
      startX: m,
      widthPx: Math.max(1, w - y + 1)
    };
  }
  function g1(i, s, c = {}) {
    var P;
    const f = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (P = i == null ? void 0 : i.getContext) == null ? void 0 : P.call(i, "2d");
    if (!m || f < 1 || h < 1) return [];
    const y = m.getImageData(0, 0, f, h), w = new Uint8Array(f * h);
    for (let M = 0; M < w.length; M += 1) w[M] = y.data[M * 4 + 3];
    return p1(w, f, h, 8).map((M, I) => {
      const T = m1(M, f);
      if (!T) return null;
      const G = Number(T.widthPx || 0), ne = M.maxY - M.minY + 1, Z = Number(T.startX || 0), te = document.createElement("canvas");
      te.width = G, te.height = ne;
      const ae = te.getContext("2d");
      if (!ae) return null;
      const he = ae.createImageData(G, ne);
      return M.pixels.forEach(({ x: re, y: Se }) => {
        const Ge = (Se * f + re) * 4, Ue = (Number(re || 0) - Z + f) % f, nt = ((Se - M.minY) * G + Ue) * 4;
        he.data[nt + 0] = y.data[Ge + 0], he.data[nt + 1] = y.data[Ge + 1], he.data[nt + 2] = y.data[Ge + 2], he.data[nt + 3] = y.data[Ge + 3];
      }), ae.putImageData(he, 0, 0), {
        id: Oo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + I * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / h,
          u1: G / f,
          v1: (M.maxY + 1) / h
        },
        rasterDataUrl: te.toDataURL("image/png"),
        transform: {
          du: Z / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ga(i, s) {
    if (!i || !s) return null;
    const c = ys(i), f = Cu(s, c.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const h = Cu(s, c.right) / f, m = Cu(s, c.up) / f;
    return {
      x: (h / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function y1(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const c = mi();
      return i.map((f) => ({
        x: c.x + Number(f.u || 0) * c.w,
        y: c.y + Number(f.v || 0) * c.h
      }));
    }
    const s = i.map((c) => ua(wo(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function th(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const f = mi();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, y = s == null ? m : Number(s || 0) + qn(m, s);
        return {
          x: f.x + y * f.w,
          y: f.y + Number(h.v || 0) * f.h
        };
      });
    }
    const c = i.map((f) => ua(wo(f))).filter(Boolean);
    return c.every((f) => Number(f.z || 0) > 0) ? c.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function b1(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const f = i[c], h = i[(c + 1) % i.length];
      if (!f || !h || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(f.x), Number(h.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function v1(i, s, c) {
    if (!Array.isArray(i) || i.length < 3 || !s || !c) return [];
    const f = [];
    for (const h of i) {
      const m = wo(h), y = ga(s, m);
      if (!y) return [];
      f.push({
        x: Number(c.x || 0) + Number(y.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(y.y || 0) * Number(c.h || 0)
      });
    }
    return b1(f, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? f : [];
  }
  function _1(i, s, c) {
    if (!Array.isArray(i) || i.length < 1 || !s || !c) return [];
    const f = [];
    for (const h of i) {
      const m = wo(h), y = ga(s, m);
      y && f.push({
        x: Number(c.x || 0) + Number(y.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(y.y || 0) * Number(c.h || 0)
      });
    }
    return f;
  }
  function w1() {
    const i = He(), s = Vc(i);
    if (!i || !s) return !1;
    const c = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: h } = YS(i, s, { width: C.width, height: C.height }), m = x1(c);
    return A.save(), A.fillStyle = "#0a0a0a", A.fillRect(0, 0, C.width, C.height), Bd(A, f, h) || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(f.x, f.y, f.w, f.h)), A.restore(), A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, C.width, C.height), A.roundRect(c.x, c.y, c.w, c.h, m), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = cC, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(c.x + 1, c.y + 1, c.w - 2, c.h - 2, Math.max(0, m - 1)), A.stroke(), A.restore(), !0;
  }
  function x1(i) {
    const s = Math.max(1e-6, Number(Ce.frameCanvasScale || 1));
    return Math.min(ve * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Kr() {
    var s;
    const i = p.mode === "frame" ? He() : null;
    E.frameRollKnob.visible = !!i && !r && i.locked !== !0, E.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), E.frameRollKnob.displayValue = Eo(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((s = p.interaction) == null ? void 0 : s.kind) === "roll_frame", E.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function S1() {
    var k, P;
    if (((k = p.interaction) == null ? void 0 : k.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, s = (P = i == null ? void 0 : i.geometry) == null ? void 0 : P.points;
    let c;
    if (p.mode === "frame") {
      const M = He(), I = tn(M);
      c = v1(s, M, I);
    } else
      c = y1(s);
    if (!Array.isArray(c) || c.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), y = Math.round(Number(h.g || 0) * 255), w = Math.round(Number(h.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let M = 1; M < c.length; M++) A.lineTo(Number(c[M].x || 0), Number(c[M].y || 0));
    A.closePath(), f ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${m},${y},${w},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function k1() {
    const i = p.frameRollOverlayVisual, s = J(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const c = tn(i.shot);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * kr, m = Math.hypot(c.w, c.h) * 0.55, y = Math.cos(h) * m, w = Math.sin(h) * m;
    A.save(), A.globalAlpha *= s, A.beginPath(), A.rect(c.x, c.y, c.w, c.h), A.clip(), A.translate(f.x, f.y), A.rotate(h);
    const k = Math.max(12, Math.min(c.w, c.h) / 6);
    A.beginPath();
    for (let P = -m; P <= m; P += k)
      A.moveTo(P, -m), A.lineTo(P, m);
    for (let P = -m; P <= m; P += k)
      A.moveTo(-m, P), A.lineTo(m, P);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(f.x - y, f.y - w), A.lineTo(f.x + y, f.y + w), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function M1() {
    return t !== "cutout" || !He() ? 0 : dC;
  }
  function N1() {
    const i = J(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const s = He(), c = s ? qt(s) : null, f = Array.isArray(c == null ? void 0 : c.corners) && c.corners.length >= 4 ? c.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    c != null && c.visible && f && (p.cutoutPanoDimCorners = f), s && (c != null && c.visible) && f && (p.cutoutPanoFrameVisual = {
      item: s,
      geom: c,
      selected: _d(s),
      locked: kn(s)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = c != null && c.visible ? f : h ? p.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${i})`, A.beginPath(), A.rect(0, 0, C.width, C.height), m.length >= 4) {
      A.moveTo(m[0].x, m[0].y);
      for (let y = 1; y < 4; y += 1) A.lineTo(m[y].x, m[y].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function nh() {
    fo = null, p.mode === "frame" ? (Ce.frameSafeRect = rv(), w1()) : p.mode === "unwrap" ? zb(!1) : jb(!1), N1(), t === "cutout" && Qb(), Jb(), Kr(), S1(), k1(), E.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Xe(), Ce.hasPresentedFrame || (Ce.hasPresentedFrame = !0, se.style.opacity = "1"), t === "cutout" && E.cameraPreview && (E.cameraPreview.settled = Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame && p.mode !== "frame");
    const i = Cb();
    E.stageStatus = i.status, E.stageStatusDetail = i.detail, i.status === pr ? (le == null || le.removeAttribute("data-stage-ready"), le == null || le.setAttribute("data-stage-loading-kind", i.detail)) : (le == null || le.setAttribute("data-stage-ready", ""), le == null || le.removeAttribute("data-stage-loading-kind"));
  }
  function P1(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function A1() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = By();
  }
  function ue(i = {}) {
    var w, k, P, M, I, T, G, ne, Z, te;
    const s = !!i.localOnly, c = i.externalSync === !0, f = String(i.cause || ""), h = String(((w = p.interaction) == null ? void 0 : w.kind) || "");
    (!s || h === "view" || h === "pan_frame" || P1() || !!((k = p.viewTween) != null && k.active) || f === "mode" || f === "frame_view" || f === "cutout_frame") && (Ce.backgroundDirty = !0), s && gd() && (p.livePaintInteractionRevision += 1, Ce.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (yc(), Hr()), A1(), c && ((M = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || M.call(P), (I = e.setDirtyCanvas) == null || I.call(e, !0, !1)), c && !s && ((G = (T = e.graph) == null ? void 0 : T.setDirtyCanvas) == null || G.call(T, !0, !0), (te = (Z = (ne = mr) == null ? void 0 : ne.canvas) == null ? void 0 : Z.setDirty) == null || te.call(Z, !0, !0)), Ce.dirty = !0;
  }
  function rh() {
    const i = C.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return C.width !== s || C.height !== c || se.width !== s || se.height !== c ? (C.width = s, C.height = c, se.width = s, se.height = c, Ce.backgroundDirty = !0, Ce.dirty = !0, t === "cutout" && (Ce.pendingStableLayoutFrames = Math.max(Number(Ce.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function C1(i = performance.now()) {
    var m, y;
    Ce.lastTickTs = i;
    const s = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    s != null && s.shot && (p.frameRollOverlayVisual = { shot: s.shot });
    const c = s ? 1 : 0;
    if (Math.abs(c - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = c, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - c) > 1e-6) {
      const w = J(
        (i - Number(p.frameRollOverlayStartTs || i)) / hC,
        0,
        1
      );
      p.frameRollOverlayAlpha = Qn(
        Number(p.frameRollOverlayFrom || 0),
        c,
        Hs(w)
      ), w >= 1 && (p.frameRollOverlayAlpha = c, c === 0 && (p.frameRollOverlayVisual = null)), Ce.dirty = !0;
    }
    const f = M1();
    if (Math.abs(f - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = f, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const w = J(
        (i - Number(p.cutoutPanoDimStartTs || i)) / Em,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Qn(
        Number(p.cutoutPanoDimFrom || 0),
        f,
        Hs(w)
      ), w >= 1 && (p.cutoutPanoDimAlpha = f), w >= 1 && f === 0 && (p.cutoutPanoDimCorners = null), Ce.dirty = !0;
    }
    const h = t === "cutout" && He() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const w = J(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / Em,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Qn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        Hs(w)
      ), w >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), Ce.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const w = Math.max(1, Number(p.outputPreviewAnimDurationMs)), k = J((i - Number(p.outputPreviewAnimStartTs || 0)) / w, 0, 1), M = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? _C(k) : kC(k);
      p.outputPreviewAnim = Qn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, M), Ce.dirty = !0, k >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((y = p.viewTween) != null && y.active) {
      const w = p.viewTween, k = J((i - w.startTs) / w.durationMs, 0, 1), P = Hs(k);
      p.viewYaw = Ht(w.startYaw + w.deltaYaw * P), p.viewPitch = w.startPitch + (w.targetPitch - w.startPitch) * P, p.viewFov = w.startFov + (w.targetFov - w.startFov) * P, Ce.backgroundDirty = !0, Ce.dirty = !0, k >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(an.state.inertia.vx || 0), p.viewInertia.vy = Number(an.state.inertia.vy || 0), p.viewInertia.active = !!an.state.inertia.active, an.stepInertia(i) && (p.viewInertia.vx = Number(an.state.inertia.vx || 0), p.viewInertia.vy = Number(an.state.inertia.vy || 0), p.viewInertia.active = !!an.state.inertia.active, Ce.backgroundDirty = !0, Ce.dirty = !0), Ce.pendingStableLayoutFrames > 0 && (Ce.pendingStableLayoutFrames -= 1, Ce.dirty = !0), Ce.dirty) {
      if (Ce.pendingStableLayoutFrames > 0)
        return;
      Ce.dirty = !1, nh();
    }
  }
  function ih(i) {
    try {
      i();
    } catch (s) {
      const c = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Ce.tickErrorSignature !== c && (Ce.tickErrorSignature = c, console.error("[PanoramaStickers] editor frame failed", s)), E.stageStatus = tr, E.stageStatusDetail = "frame", le == null || le.setAttribute("data-stage-ready", ""), le == null || le.removeAttribute("data-stage-loading-kind");
    }
  }
  function oh(i = performance.now()) {
    Ce.running && (ih(() => C1(i)), Ce.running && (Ce.rafId = requestAnimationFrame(oh)));
  }
  function I1() {
    !Ce.running || !rh() || ih(() => {
      Ce.dirty = !1, nh();
    });
  }
  const ah = new ResizeObserver(I1);
  ah.observe(C);
  function E1() {
    Ce.running = !1, Ce.rafId && cancelAnimationFrame(Ce.rafId), Ce.rafId = 0, ah.disconnect();
  }
  function ot() {
    r || S && v.stickers.some(rc) || (p.historyController.commitActionGroup(JSON.stringify($p(v))), Gc());
  }
  function Fc(i) {
    var h;
    if (r) return;
    Jn();
    const s = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (Gc(), !s) return;
    const c = bS(v, s), f = (h = v.timeline) == null ? void 0 : h.fps;
    Object.keys(v).forEach((m) => delete v[m]), Object.assign(v, c.state), S && v.timeline.fps !== f && kt.seek(Math.round(p.frame * v.timeline.fps / f)), p.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], c.paintingChanged ? fr() : Wt(), On(), ze(), Fn(), ue({ cause: "cutout_frame" });
  }
  function sh() {
    var c, f;
    const i = Array.isArray((c = p.historyController) == null ? void 0 : c.entries) ? p.historyController.entries : [], s = Number((f = p.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function On() {
    In();
    const i = QN({
      editor: p,
      swatches: ll,
      paintColorPopOpen: q ? !q.hidden : !1,
      colorToCss: Mr,
      colorsApproximatelyEqual: cl,
      rgb01ToHsv: Ou,
      hsv01ToRgb: Eu,
      getBrushPresetIdForTool: bi,
      isActiveLassoTool: eb
    });
    if (Object.assign(E.paintDock, i), ab(), !i.visible) {
      q && (q.hidden = !0);
      return;
    }
    xe && (clearTimeout(xe), xe = 0), W && (!i.colorEnabled && q && !q.hidden && (xe = window.setTimeout(() => {
      q.hidden = !0, E.paintDock.colorPopOpen = !1, xe = 0;
    }, 170)), q && (q.style.setProperty("--picker-hue-color", i.pickerHueColor), q.style.setProperty("--picker-sat", i.pickerSat), q.style.setProperty("--picker-val", i.pickerVal), q.style.setProperty("--picker-hue", i.pickerHue)), me && (me.style.left = i.pickerSvLeft, me.style.top = i.pickerSvTop), Me && (Me.style.left = i.pickerHueLeft));
  }
  function So() {
    const i = Xt(t === "cutout" && p.mode === "frame" ? He() : Nt());
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Zr(i)
    }, ze());
  }
  function ze() {
    var nt, ye, ie, pe;
    if (Br(), o) return;
    v.ui_settings = v.ui_settings || {};
    const i = ZN(v.ui_settings);
    if (a) {
      E.sidePanel = e2({
        coverage: v.coverage,
        uiSettings: i,
        normalizeCoverageValue: Gn
      });
      return;
    }
    const s = Nt(), c = t === "cutout" && p.mode === "frame" ? He() : null, f = c || s, h = c ? [c] : ur(), m = c ? "shot" : fs();
    if (h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const we = Xt(f);
      p.panelLastValues = {
        yaw_deg: Number(we.yaw_deg || 0),
        pitch_deg: Number(we.pitch_deg || 0),
        hFOV_deg: Number(we.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(we.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(we.rot_deg || 0),
        roll_deg: Number(we.roll_deg || 0),
        aspect_id: Zr(we)
      }, sr(f) && (p.panelLastValues.opacity = ec(f, p.frame).opacity * 100);
    }
    const y = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = m === "stroke" ? null : f, k = S && p.inspectCamera, P = k ? SS(v.camera, p.frame) : sr(w) ? p.panelLastValues : w || y, M = k || !!w && !kn(w);
    p.panelWasEnabled = M, yc();
    let I = null;
    if (c) {
      const we = fc({ item: c, kind: "shot", label: "Frame" });
      I = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: we.label,
        currentIcon: we.icon || null,
        items: [{
          id: String(c.id || ""),
          label: we.label,
          icon: we.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const we = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? dn().forEach((Te, ft) => {
        var Pt, Rt;
        if (!Te) return;
        const qe = S ? w0(Te) : zt(Te) ? String(Te.id || Su) : String(((Rt = (Pt = v.assets) == null ? void 0 : Pt[Te.asset_id]) == null ? void 0 : Rt.name) || Te.asset_id || Te.id), Lt = `${ft + 1}. ${qe}${zt(Te) && yo(Te) ? " (hidden)" : ""}`, fn = fc({ item: Te, label: Lt, kind: "image" });
        we.push({ id: Te.id, label: fn.label, icon: fn.icon, item: Te, kind: "image" });
      }) : wd().forEach((Te) => {
        if (!(Te != null && Te.item)) return;
        const ft = fc(Te);
        we.push({ id: Te.item.id, label: ft.label, icon: ft.icon, item: Te.item, kind: Te.kind });
      });
      const Re = (w == null ? void 0 : w.id) || "", We = k ? { label: "Camera", icon: Pe.camera } : we.find((Te) => Te.id === Re) || we[0];
      I = {
        label: "Selection",
        open: !1,
        disabled: we.length <= 1,
        currentLabel: We.label,
        currentIcon: We.icon || null,
        items: we.map((Te) => ({
          id: Te.id,
          label: Te.label,
          icon: Te.icon || null,
          active: Te.id === Re
        }))
      };
    }
    const T = [], G = (we, Re, We, Te, ft) => {
      const qe = J(Number(P[we] || 0), We, Te);
      T.push({
        key: we,
        label: Re,
        min: We,
        max: Te,
        step: ft,
        value: qe,
        displayValue: Eo(qe),
        fillPct: J((qe - We) / Math.max(1e-6, Te - We) * 100, 0, 100),
        enabled: M && !r
      });
    }, ne = [];
    k ? (G("position_x", "X", -100, 100, 0.01), G("position_y", "Y", -100, 100, 0.01), G("position_z", "Z", -100, 100, 0.01), G("yaw_deg", "Yaw", -180, 180, 0.1), G("pitch_deg", "Pitch", -90, 90, 0.1), G("roll_deg", "Roll", -180, 180, 0.1), G("hFOV_deg", "FOV", 1, 179, 0.1)) : h.length > 1 ? (ne.push(`Selected objects: ${h.length}`), ne.push("Multi-selection supports z-order and delete.")) : (G("yaw_deg", "Yaw", -180, 180, 0.1), G("pitch_deg", "Pitch", -90, 90, 0.1), G("hFOV_deg", "H FOV", 1, 179, 0.1), G("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? G("rot_deg", "Rotation", -180, 180, 0.1) : G("roll_deg", "Roll", -180, 180, 0.1), S && G("opacity", "Opacity", 0, 100, 1));
    const Z = Array.isArray((ye = (nt = v == null ? void 0 : v.painting) == null ? void 0 : nt.paint) == null ? void 0 : ye.strokes) ? v.painting.paint.strokes.length : 0, te = Array.isArray((pe = (ie = v == null ? void 0 : v.painting) == null ? void 0 : ie.mask) == null ? void 0 : pe.strokes) ? v.painting.mask.strokes.length : 0, ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((we) => String((we == null ? void 0 : we.name) || "")) : [], he = vC(
      e,
      ae.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), re = !!String((he == null ? void 0 : he.src) || "").trim() || jr("pano_input_images").length > 0, Se = dn().length > 0 || Z > 0, Ge = te > 0, Ue = [
      { key: "mask", label: "Mask", icon: Pe.circle_dashed_tool, visible: !!p.showMask, enabled: Ge },
      { key: "objects", label: "Paint / Images", icon: Pe.image, visible: !!p.showObjects, enabled: Se },
      { key: "panorama", label: "Panorama", icon: Pe.globe, visible: !!p.showPanorama, enabled: re }
    ].map((we) => ({
      ...we,
      ariaLabel: `Toggle ${we.label.toLowerCase()}`,
      tip: we.visible ? "Hide" : "Show"
    }));
    E.sidePanel = t2({
      coverage: v.coverage,
      readOnly: r,
      selectionPicker: I,
      enabled: M,
      selectedKind: k ? "camera" : m,
      selectedItems: h,
      params: T,
      notes: ne,
      visibilityRows: Ue,
      uiSettings: i,
      normalizeCoverageValue: Gn
    });
  }
  function Br() {
    if (!S || r) return;
    const i = Tc(), s = Le.selection, c = s && yi(s.owner);
    if (s) {
      const h = c ? ya(s) : [];
      s.frames = s.frames.filter((m) => h.some((y) => c[y].keyframes.some((w) => w.frame === m))), s.frames.length || (Le.selection = null);
    }
    const f = v.timeline.fps;
    E.timeline = i2(v, {
      frame: p.frame,
      span: i,
      selection: Le.selection,
      selectedId: p.inspectCamera ? "camera" : p.selectedId,
      expanded: Le.expanded ?? Qu(v),
      openRows: Le.openRows,
      audio: F1() && E.videoTransport.hasAudio ? { muted: Y.muted } : null,
      playing: kt.playing,
      label: `${p.frame}f · ${(p.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: Nu(e) !== null || nk(e, ["bg_media", "sticker"])
    }), E.easing = Le.selection ? o2(c, ya(Le.selection), Le.selection.frames, ba(Le.selection.owner)) : null;
  }
  function Tc(i = null) {
    const s = v.timeline.fps, c = v.stickers.find(zt), f = c ? Ad() : null, h = Math.max(
      E.videoTransport.ready ? Math.round(Number(E.videoTransport.duration || 0) * s) : 0,
      f ? B0(c.clip, s, f.meta) : 0
    );
    return p0(v, { minimum: Math.round(s * 5), frames: h, openClip: i });
  }
  function yi(i) {
    return i === "camera" ? v.camera : v.stickers.find((s) => s.id === i) || null;
  }
  function ya(i) {
    return i.lane ? [i.lane] : uo(yi(i.owner));
  }
  function ba(i) {
    if (i === "camera") return 0;
    const { clip: s } = yi(i);
    return s.start - s.in;
  }
  function xs(i) {
    const s = yi(i);
    return !!s && s.locked !== !0;
  }
  function lh() {
    const i = Nt();
    sr(i) && !ki(i.clip, p.frame) && wr(null);
  }
  function O1(i) {
    const s = Math.max(0, Math.round(i));
    s !== p.frame && (p.frame = s, lh(), Wt(), ze(), Xe(), ue());
  }
  function F1() {
    return Y instanceof HTMLVideoElement && !!Y.getAttribute("src");
  }
  function T1(i) {
    hi(), kt.seek(i);
  }
  function Jn() {
    S && kt.stop();
  }
  function Dc() {
    hi(), kt.toggle();
  }
  function ko() {
    Wt(), ze(), Xe(), ue();
  }
  function Fi() {
    ot(), lt(), ko();
  }
  function D1() {
    const { selection: i } = Le;
    xs(i.owner) && (Jn(), oS(yi(i.owner), ya(i), i.frames, p.frame - ba(i.owner)), Le.selection = null, Fi());
  }
  function ch(i) {
    Jn();
    const s = Math.round(p.frame * i / v.timeline.fps);
    _S(v, i), Le.selection = null, kt.seek(s), Fi();
  }
  function L1() {
    const i = Nu(e);
    i !== null && i !== v.timeline.fps && ch(i);
  }
  function R1(i) {
    if (!(r || !S)) {
      if (i.type === "seek") {
        i.phase === "start" && hi(), kt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Dc();
        return;
      }
      if (i.type === "mute") {
        kd(), Br();
        return;
      }
      if (i.type === "toggle-expanded") {
        Le.expanded = !(Le.expanded ?? Qu(v)), Le.selection = null, Br();
        return;
      }
      if (i.type === "toggle-row") {
        Le.openRows.has(i.id) ? Le.openRows.delete(i.id) : Le.openRows.add(i.id), Br();
        return;
      }
      if (i.type === "select-row") {
        const s = v.stickers.find((c) => c.id === i.id);
        s && !ki(s.clip, p.frame) && T1(s.clip.start), wr(dn().find((c) => c.id === i.id) || null), p.inspectCamera = i.id === "camera", Le.selection = null, ze(), Xe(), ue();
        return;
      }
      if (i.type === "select-keys") {
        const s = ba(i.owner), c = i.frames.map((m) => m - s), f = Le.selection, h = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && h) {
          const m = new Set(f.frames);
          for (const y of c)
            m.has(y) ? m.delete(y) : m.add(y);
          f.frames = [...m].sort((y, w) => y - w);
        } else
          Le.selection = c.length ? { owner: i.owner, lane: i.lane, frames: c } : null;
        Br();
        return;
      }
      if (i.type === "move-keys") {
        const s = Le.selection;
        if (!s || !xs(s.owner)) return;
        const c = yi(s.owner), f = ya(s);
        if (i.phase === "start") {
          Jn(), Le.drag = { keyframes: f.map((y) => structuredClone(c[y].keyframes)), frames: s.frames };
          return;
        }
        const { drag: h } = Le;
        if (!(h != null && h.keyframes)) return;
        f.forEach((y, w) => {
          c[y].keyframes = structuredClone(h.keyframes[w]);
        });
        const m = aS(c, f, h.frames, i.delta, -ba(s.owner));
        if (s.frames = h.frames.map((y) => y + m), i.phase !== "end") {
          ko();
          return;
        }
        Le.drag = null, m ? Fi() : ko();
        return;
      }
      if (i.type === "clip") {
        const s = v.stickers.find((h) => h.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Jn(), Le.drag = { clip: { ...s.clip }, span: Tc(s.clip) };
          return;
        }
        const { drag: c } = Le;
        if (!(c != null && c.clip)) return;
        const f = c.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? cS(s.clip, i.delta) : i.delta && i.mode === "start" ? uS(s.clip, f.start + i.delta) : i.delta && fS(s.clip, (f.duration === null ? c.span : f.start + f.duration) + i.delta, c.span), i.phase !== "end") {
          ko();
          return;
        }
        Le.drag = null, lh(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Fi() : ko();
        return;
      }
      if (i.type === "key-row") {
        if (!xs(i.owner)) return;
        Jn(), nS(yi(i.owner), p.frame - ba(i.owner)), Fi();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === v.timeline.fps || E.timeline.fpsLocked) {
          Br();
          return;
        }
        ch(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === v.timeline.length) {
          Br();
          return;
        }
        Jn(), v.timeline.length = s, Fi();
        return;
      }
      if (i.type === "easing") {
        const s = Le.selection;
        if (!s || !xs(s.owner)) return;
        Jn(), lS(yi(s.owner), ya(s), s.frames, i.easing), i.commit ? Fi() : ko();
      }
    }
  }
  async function uh(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Or(i)) return;
    if (S) {
      Jn(), await $1(i);
      return;
    }
    const s = Gi("asset"), c = Fa(e, `add:${s}`, async () => {
      try {
        const { image: f } = await Ta(i);
        Be.set(s, f);
        const h = Gi("st");
        v.stickers.push({
          id: h,
          asset_id: s,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: pi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: ds()
        }), wr(v.stickers[v.stickers.length - 1]), Ss(), ze(), Xe(), ue();
        const m = await Wi(i, {
          fetchApi: (k, P) => Gt.fetchApi(k, P)
        });
        if (!(Array.isArray(v.stickers) ? v.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === s).length) return;
        v.assets[s] = m, vo(), ot(), lt(), ze(), Xe(), ue();
      } catch (f) {
        delete v.assets[s], Be.delete(s);
        const h = Array.isArray(v.stickers) ? v.stickers : [], m = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") === s);
        throw m.length && (v.stickers = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") !== s), m.some((y) => String((y == null ? void 0 : y.id) || "") === String(p.selectedId || "")) && wr(null), ze(), Xe(), ue(), lt()), f;
      }
    });
    try {
      await c;
    } catch {
    }
  }
  function V1() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = Q == null ? void 0 : Q.openImagePicker) == null || i.call(Q, "add");
  }
  async function $1(i) {
    const s = Gi("st"), c = Fa(e, `add:${s}`, async () => {
      const { image: f } = await Ta(i), h = {
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: pi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
        rot_deg: 0
      }, m = Jf(s, { kind: "file", filename: "" }, h, ds());
      Be.set(fa(m), f), v.stickers.push(m), wr(m), Ss(), ze(), Xe(), ue();
      try {
        const y = await Wi(i, {
          fetchApi: (k, P) => Gt.fetchApi(k, P)
        }), w = v.stickers.find((k) => k.id === s);
        if (!w) return;
        w.source = el(y), Be.set(fa(w), f), ot(), lt();
      } catch (y) {
        throw v.stickers = v.stickers.filter((w) => w.id !== s), p.selectedId === s && wr(null), ot(), lt(), y;
      } finally {
        ze(), Xe(), ue();
      }
    });
    try {
      await c;
    } catch {
    }
  }
  async function z1(i, s) {
    const c = Fa(e, `replace:${s}:${Gi("asset")}`, async () => {
      const { image: f } = await Ta(i), h = await Wi(i, {
        fetchApi: (y, w) => Gt.fetchApi(y, w)
      }), m = v.stickers.find((y) => y.id === s);
      if (m) {
        m.source = el(h), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const y of [m.size.value, ...m.size.keyframes.map((w) => w.value)])
          y.vFOV_deg = pi(y.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        Be.set(fa(m), f), Wt(), ot(), lt(), ze(), Xe(), ue();
      }
    });
    try {
      await c;
    } catch {
    }
  }
  async function j1(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Nt();
    if (!s || !yt(s) || zt(s) || !Or(i)) return;
    if (S) {
      await z1(i, s.id);
      return;
    }
    const c = String(s.id || ""), f = Gi("asset"), h = Fa(e, `replace:${c}:${f}`, async () => {
      var M;
      const m = (Array.isArray(v.stickers) ? v.stickers : []).find((I) => String((I == null ? void 0 : I.id) || "") === c) || null;
      if (!m || !yt(m) || zt(m)) return;
      const y = String(m.asset_id || ""), w = y ? gn(((M = v.assets) == null ? void 0 : M[y]) || null) : null, k = Number(m.vFOV_deg || 0), P = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: I } = await Ta(i);
        Be.set(f, I), m.asset_id = f, m.vFOV_deg = pi(
          Number(m.hFOV_deg || 30),
          Number(I.naturalWidth || I.width || 1),
          Number(I.naturalHeight || I.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Wt(), ze(), Xe(), ue();
        const T = await Wi(i, {
          fetchApi: (ne, Z) => Gt.fetchApi(ne, Z)
        }), G = (Array.isArray(v.stickers) ? v.stickers : []).find((ne) => String((ne == null ? void 0 : ne.id) || "") === c) || null;
        if (!G || String(G.asset_id || "") !== f) return;
        v.assets[f] = T, vo(), ot(), lt(), ze(), Xe(), ue();
      } catch (I) {
        delete v.assets[f], Be.delete(f);
        const T = (Array.isArray(v.stickers) ? v.stickers : []).find((G) => String((G == null ? void 0 : G.id) || "") === c) || null;
        throw T && String(T.asset_id || "") === f && (y && w && (v.assets[y] = w), T.asset_id = y, T.vFOV_deg = k, T.crop = P ? { ...P } : null), Wt(), lt(), ze(), Xe(), ue(), I;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function H1() {
    var s;
    if (r) return;
    const i = Nt();
    !i || !yt(i) || zt(i) || (s = Q == null ? void 0 : Q.openImagePicker) == null || s.call(Q, "replace");
  }
  async function G1() {
    if (r || t !== "stickers") return;
    if (S) {
      await K1();
      return;
    }
    const i = v.assets && typeof v.assets == "object" ? v.assets : {}, s = Object.entries(i).filter(([, f]) => {
      const h = String((f == null ? void 0 : f.type) || "").toLowerCase(), m = String((f == null ? void 0 : f.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let c = !1;
    for (const [f, h] of s)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const y = await fetch(m).then((I) => I.blob()), w = String(y.type || "image/png").split("/")[1] || "png", k = String((h == null ? void 0 : h.name) || `${f}.${w}`), P = new File([y], k, { type: y.type || "image/png" }), M = await Wi(P, {
          fetchApi: (I, T) => Gt.fetchApi(I, T)
        });
        v.assets[f] = {
          ...M,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (lt(), ue());
  }
  async function K1() {
    let i = !1;
    for (const s of v.stickers) {
      const c = s.source.data_url;
      if (c)
        try {
          const f = await fetch(c).then((w) => w.blob()), h = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${h}`, { type: f.type || "image/png" }), y = await Wi(m, {
            fetchApi: (w, k) => Gt.fetchApi(w, k)
          });
          s.source = el(y), i = !0;
        } catch {
        }
    }
    i && (lt(), ue());
  }
  function B1() {
    if (r || t !== "cutout") return;
    const i = He();
    if (i) {
      wr(i), p.mode = "pano", Oi(
        Ht(Number(i.yaw_deg || 0)),
        J(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), ze(), Xe(), ue({ cause: "cutout_frame" });
      return;
    }
    const s = Xg({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    v.shots = [s], wr(s), Ss(), p.mode = "pano", ot(), lt(), ze(), Xe(), ue({ cause: "cutout_frame" });
  }
  function W1() {
    r || t !== "cutout" || (v.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, v.active.selected_shot_id = null, ot(), lt(), ze(), Xe(), ue());
  }
  function U1() {
    const i = Array.isArray(v.stickers) ? v.stickers : [], s = [];
    for (const c of i)
      zt(c) && (c.visible = !1, s.push(c));
    return s;
  }
  function fh(i, s, c = "Clear") {
    return new Promise((f) => {
      E.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(c || "Confirm"),
        resolve: f
      };
    });
  }
  async function Y1() {
    var c, f;
    if (r || !await fh(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    v.painting = Bo(null), fr();
    const s = U1();
    if (t === "stickers")
      v.stickers = S ? v.stickers.filter((h) => h.placement === "world" || s.includes(h)) : s, S || (v.assets = {}), p.selectedId = ((c = s[0]) == null ? void 0 : c.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, vo();
    else {
      const h = yS(v.shots, v.active.selected_shot_id);
      v.stickers = s, v.assets = {}, v.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = null, v.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, vo();
    }
    ot(), lt(), ze(), Xe(), ue();
  }
  async function X1(i) {
    var m, y, w, k;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", c = s === "mask" ? "Mask" : "Paint", f = Mo(s);
    if (!(!f.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((y = p.interaction) == null ? void 0 : y.layerKind) === s) || !await fh(
      `Clear ${c}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((w = p.interaction) == null ? void 0 : w.kind) === "draw" && ((k = p.interaction) == null ? void 0 : k.layerKind) === s) {
        const P = jn();
        P && p.paintEngine.cancelActiveStroke(P), p.interaction = null;
      }
      f.length = 0, v.painting.raster_objects = En().filter((P) => String((P == null ? void 0 : P.layerKind) || "paint") !== s), s === "paint" && (hn().length = 0), fr(), ot(), lt(), ze(), Xe(), On(), ue();
    }
  }
  function q1() {
    if (r) return;
    const i = Nt();
    if (!i || !yt(i) || zt(i) || S && rc(i)) return;
    let s;
    S ? s = NS(i, Gi("st"), ds()) : (s = JSON.parse(JSON.stringify(i)), s.id = Gi("st"), s.yaw_deg = Ht((s.yaw_deg || 0) + 8), s.z_index = ds()), v.stickers.push(s), v.active.selected_sticker_id = s.id, p.selectedId = s.id, p.selectedIds = [s.id], Wt(), ot(), lt(), Xe(), ze(), ue();
  }
  function dh() {
    var c, f, h, m, y;
    if (r) return;
    const i = ur(), s = Nt();
    if (!(!s && i.length === 0) && !i.some((w) => kn(w))) {
      if (Jn(), i.length > 1) {
        const w = new Set(i.filter((M) => en(M)).map((M) => String(M.actionGroupId || M.id || ""))), k = new Set(i.filter((M) => pn(M)).map((M) => on(M.rasterObjectId || M.id || ""))), P = new Set(i.filter(yt).map((M) => String(M.id || "")));
        w.size > 0 && (v.painting.paint.strokes = (Array.isArray((f = (c = v.painting) == null ? void 0 : c.paint) == null ? void 0 : f.strokes) ? v.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), v.painting.groups = hn().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), fr()), k.size > 0 && (v.painting.raster_objects = En().filter((M) => !k.has(String((M == null ? void 0 : M.id) || ""))), xo()), P.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => P.has(String((M == null ? void 0 : M.id) || "")) ? zt(M) ? (yo(M) || (M.visible = !1), !0) : !1 : !0), vo(), Wt()), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Xe(), ue();
        return;
      }
      if (en(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (h = v.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== w), v.painting.groups = hn().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== w), fr(), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Xe(), ue();
        return;
      }
      if (pn(s)) {
        const w = on(s.rasterObjectId || s.id || "");
        v.painting.raster_objects = En().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== w), xo(), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Xe(), ue();
        return;
      }
      if (t === "stickers" || yt(s)) {
        if (zt(s)) {
          if (yo(s)) return;
          s.visible = !1, Wt(), ot(), lt(), ze(), Xe(), ue();
          return;
        }
        v.stickers = v.stickers.filter((w) => w.id !== s.id), vo(), Wt(), p.selectedId = ((y = dn()[0]) == null ? void 0 : y.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = p.selectedId, ot(), lt(), ze(), Xe(), ue();
        return;
      }
      W1();
    }
  }
  function Lc(i, s) {
    const c = Ce.frameSafeRect;
    if (!i || !c || p.mode !== "frame") return !1;
    const f = ku * to(c, i), h = Hf(jf(c, s), f);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function hh(i, s) {
    if (!i || i.locked === !0) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const w = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(w)) {
        const [M, I] = w.split(":").map((T) => Number(T));
        if (Number.isFinite(M) && Number.isFinite(I)) return M >= I;
      }
      const k = Number(i.hFOV_deg || 64), P = Number(i.vFOV_deg || 40);
      return Math.abs(k - P) > 1e-6 ? k >= P : no(i) >= 1;
    })();
    let [h, m] = c[String(s)] || c["1:1"];
    h >= m !== f && ([h, m] = [m, h]);
    const y = h / m;
    if (!Lc(i, y)) {
      const w = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = w, i.hFOV_deg = Zs(w, y);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function J1(i, s, c) {
    if (!i || i.locked === !0) return !1;
    const f = Za(s, c);
    if (!f) return !1;
    const h = f.ratio;
    if (!Lc(i, h)) {
      const m = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Zs(m, h);
    }
    return i.aspect_id = f.label, !0;
  }
  function ph(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), c = li(i), f = c.tanHalfX / Math.max(1e-12, c.tanHalfY), h = 1 / Math.max(1e-12, f);
    if (!Lc(i, h)) {
      const m = J(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Zs(m, h);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, y] = s.split(":");
      i.aspect_id = `${y}:${m}`;
    } else
      i.aspect_id = Ui(i);
  }
  function mh() {
    po().forEach((s, c) => {
      s.type === "sticker" && s.item && (s.item.z_index = c), s.type === "strokeGroup" && s.item && (s.item.z_index = c), s.type === "rasterObject" && s.item && (s.item.z_index = c);
    });
  }
  function Z1() {
    if (r) return;
    const i = ur();
    if (!Nt() || i.length === 0 || i.some((w) => kn(w))) return;
    mh();
    const c = po(), f = new Set(i.map((w) => yt(w) ? `sticker:${String(w.id || "")}` : pn(w) ? `rasterObject:${on(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), h = [], m = [];
    if (c.forEach((w) => {
      var P, M;
      const k = w.type === "sticker" ? `sticker:${String(((P = w.item) == null ? void 0 : P.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(k) ? h.push(w) : m.push(w);
    }), !h.length || h[h.length - 1] === c[c.length - 1]) return;
    [...m, ...h].forEach((w, k) => {
      w.type === "sticker" && w.item && (w.item.z_index = k), w.type === "strokeGroup" && w.item && (w.item.z_index = k), w.type === "rasterObject" && w.item && (w.item.z_index = k);
    }), Wt(), ot(), lt(), Xe(), ue();
  }
  function Q1() {
    if (r) return;
    const i = ur();
    if (!Nt() || i.length === 0 || i.some((w) => kn(w))) return;
    mh();
    const c = po(), f = new Set(i.map((w) => yt(w) ? `sticker:${String(w.id || "")}` : pn(w) ? `rasterObject:${on(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), h = [], m = [];
    if (c.forEach((w) => {
      var P, M;
      const k = w.type === "sticker" ? `sticker:${String(((P = w.item) == null ? void 0 : P.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(k) ? h.push(w) : m.push(w);
    }), !h.length || h[0] === c[0]) return;
    [...h, ...m].forEach((w, k) => {
      w.type === "sticker" && w.item && (w.item.z_index = k), w.type === "strokeGroup" && w.item && (w.item.z_index = k), w.type === "rasterObject" && w.item && (w.item.z_index = k);
    }), Wt(), ot(), lt(), Xe(), ue();
  }
  function ev() {
    r || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", u && (v.output_preset = N(Number(v.output_preset || 2048))), d && (v.coverage = Gn(d.value)), b && (v.bg_color = String(b.value || v.bg_color || "#00ff00")), Fn(), e.setDirtyCanvas(!0, !0));
  }
  function Fn() {
    var s;
    if (r) return;
    v.coverage = Gn(v.coverage), S0(e, v.active);
    const i = k0(e, v);
    g && !M0(e, i, String(g.value ?? "")) && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const gh = () => Fn();
  r || (e.__panoFlushStateBeforeQueue = gh);
  function Rc() {
    v.ui_settings = IC(v.ui_settings), r || Fn();
  }
  function lt() {
    var i;
    r || (Fn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function tv() {
    r || Ab() && Vd().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function nv(i = {}) {
    var f, h, m, y, w, k, P, M, I, T;
    const s = i.syncPreview !== !1, c = i.syncGraph !== !1;
    s && ((h = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || h.call(f), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1)), c && ((P = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || P.call(k, !0, !0), (T = (I = (M = mr) == null ? void 0 : M.canvas) == null ? void 0 : I.setDirty) == null || T.call(I, !0, !0));
  }
  function Ss() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", On(), ze());
  }
  function Ti(i) {
    const s = C.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * C.width,
      y: (i.clientY - s.top) / s.height * C.height
    };
  }
  function va(i) {
    const s = C.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function yh() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function He() {
    if (t !== "cutout") return null;
    const i = Array.isArray(v.shots) ? v.shots : [];
    if (!i.length) return null;
    const s = String(v.active.selected_shot_id || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === s) || i[0] || null;
  }
  function rv() {
    var G, ne, Z, te, ae;
    if (!C) return null;
    const i = (G = C.getBoundingClientRect) == null ? void 0 : G.call(C), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? C.width / i.width : 1, c = Number((i == null ? void 0 : i.height) || 0) > 0 ? C.height / i.height : 1;
    Ce.frameCanvasScale = Math.min(s, c);
    let f = 24, h = 24;
    const m = Math.max(f + 1, C.width - 24);
    let y = Math.max(h + 1, C.height - 24);
    const w = (ne = pt == null ? void 0 : pt.getBoundingClientRect) == null ? void 0 : ne.call(pt), k = (Z = ln == null ? void 0 : ln.getBoundingClientRect) == null ? void 0 : Z.call(ln);
    let P = 24;
    w && i && w.width > 0 && w.height > 0 && (P = Math.max(P, (w.right - i.left) * s + Im)), k && i && k.width > 0 && k.height > 0 && ((te = E.frameRail) == null ? void 0 : te.visible) === !0 && (P = Math.max(P, (i.right - k.left) * s + Im)), f = Math.max(f, P);
    const M = Math.min(m, C.width - P);
    let I = 24;
    const T = (ae = St == null ? void 0 : St.getBoundingClientRect) == null ? void 0 : ae.call(St);
    if (T && i && T.width > 0 && T.height > 0 && (I = Math.max(I, (T.bottom - i.top) * c + Mu)), [Yn, It].forEach((he) => {
      var Ge;
      if (!he || !i) return;
      const re = getComputedStyle(he);
      if (re.display === "none" || re.visibility === "hidden" || Number(re.opacity) <= 0) return;
      const Se = (Ge = he.getBoundingClientRect) == null ? void 0 : Ge.call(he);
      !Se || Se.width <= 0 || Se.height <= 0 || (I = Math.max(I, (i.bottom - Se.top) * c + Mu));
    }), Fe && i) {
      const he = getComputedStyle(Fe);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (I = Math.max(I, (fC + Mu) * c));
    }
    return h = Math.max(h, I), y = Math.max(h + 1, Math.min(y, C.height - I)), {
      x: f,
      y: h,
      w: Math.max(1, M - f),
      h: Math.max(1, y - h)
    };
  }
  function Vc(i = He()) {
    if (!i || !C) return null;
    const s = Ce.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, C.width - 48),
      h: Math.max(1, C.height - 48)
    };
    return xx(s, i, ku * to(s, i));
  }
  function tn(i = He()) {
    const s = Vc(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function $c() {
    return t === "cutout" && !!He();
  }
  function dr(i, s = performance.now()) {
    if (p.mode === "unwrap") {
      const m = mi(), y = (i.x - m.x) / Math.max(1, m.w), w = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: J(w, 0, 1),
        t: Number(s || 0)
      };
    }
    const c = Sc(i.x, i.y), { lon: f, lat: h } = Ac(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - h / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function hr(i, s, c = performance.now()) {
    const f = tn(s);
    if (!f) return null;
    const h = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = Ec(s, h);
    if (!m) return null;
    const { lon: y, lat: w } = Ac(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - w / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function iv(i, s) {
    const c = He();
    if (!c || c.locked === !0) return !1;
    const f = Number(s) > 0, h = Jg(c, s);
    if (!h) return !1;
    if (f) {
      const m = ku * to(
        Ce.frameSafeRect || { w: C.width, h: C.height },
        h
      ), y = Gf({ width: C.width, height: C.height }, m);
      if (y.halfW < C.width * 0.5 - 1e-6 || y.halfH < C.height * 0.5 - 1e-6) return !1;
    }
    return c.hFOV_deg = h.hFOV_deg, c.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, ot(), lt(), ze());
    }, 180), ze(), !0;
  }
  function ov() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, ot(), lt(), ze(), !0) : !1;
  }
  function _a() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Di(), p.interaction = null, bo(), Hr(), ze(), mt(p.pointerPos), ue({ localOnly: !0 }), !0;
  }
  function av(i, s) {
    const c = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function bi(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Ur : Tn[s] ? s : p.activeBrushPresetId || Ur;
  }
  function bh() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (yh() || $c());
  }
  function vh() {
    var i;
    return bh() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function ks(i, s = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), h = s !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== h || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - f) > 0.01;
    return p.pointerPos = { x: c, y: f, inside: h }, y;
  }
  function sv() {
    var M, I;
    if (!vh()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool, c = bi(s), f = Tn[c] || Tn[Ur], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(3, m * 0.5), w = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(p.paintColor), k = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : J(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), P = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : J(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: y,
      fillStyle: Mr(w, k),
      strokeStyle: Mr(w, P),
      x: Number(((M = p.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((I = p.pointerPos) == null ? void 0 : I.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function lv() {
    var T, G, ne;
    const i = sv();
    if (!U) return;
    if (!i) {
      U.style.display = "none";
      return;
    }
    let s = i.radius * 2, c = i.radius * 2, f = "999px", h = 0, m = i.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const k = "rgba(222, 222, 222, 0.72)", P = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), I = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      s = $l, c = $l, f = "0", y = "0", w = "none", M = pC, I = mC, m = PC(i.fillStyle, P, k);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Z = Math.max(1, Number(((T = i.preset) == null ? void 0 : T.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * Z), c = Math.max(6, i.radius * 2), f = `${Math.min(6, c * 0.42)}px`, h = Number(((ne = (G = i.preset) == null ? void 0 : G.angle) == null ? void 0 : ne.value) || 0) * Yi;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(s)}px`, U.style.height = `${Math.round(c)}px`, U.style.borderRadius = f, U.style.border = y, U.style.boxShadow = w, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - I)}px) rotate(${h}deg)`;
  }
  function cv() {
    var he;
    if (!X || !j) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool;
    if (s === "lasso_fill") return;
    const c = bi(s), f = Tn[c] || Tn[Ur], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(6, m * 0.5), w = s === "eraser", k = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(p.paintColor), P = i === "mask" ? Mr(k, 0.22) : w ? "rgba(255,255,255,0.14)" : Mr(k, J(Math.max(0.18, Number(k.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? Mr(k, 0.96) : w ? "rgba(255,255,255,0.72)" : Mr(k, J(Math.max(0.56, Number(k.a ?? 1) * 0.96), 0.56, 1));
    let I = y * 2, T = y * 2, G = "999px", ne = 0, Z = P;
    const te = "rgba(222, 222, 222, 0.72)", ae = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const re = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      I = Math.max(16, y * 2 * re), T = Math.max(10, y * 2), G = `${Math.min(8, T * 0.42)}px`, ne = Number(((he = f == null ? void 0 : f.angle) == null ? void 0 : he.value) || 0) * Yi;
    } else s === "brush" ? Z = `radial-gradient(circle at 50% 50%, ${M} 0%, ${P} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (I = Math.max(18, y * 1.8), T = I, Z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : w && (Z = "rgba(255,255,255,0.12)");
    j.style.width = `${Math.round(I)}px`, j.style.height = `${Math.round(T)}px`, j.style.borderRadius = G, j.style.background = Z, j.style.border = `1px solid ${te}`, j.style.boxShadow = `0 0 0 1px ${ae}`, j.style.transform = `rotate(${ne}deg)`, Ne && (clearTimeout(Ne), Ne = 0), X.classList.remove("fade-out"), X.classList.add("show");
  }
  function Ms() {
    !X || !X.classList.contains("show") || (X.classList.add("fade-out"), Ne && clearTimeout(Ne), Ne = window.setTimeout(() => {
      X.classList.remove("show", "fade-out"), Ne = 0;
    }, 180));
  }
  function _h(i, s, c, f) {
    const h = bi(s), m = Tn[h] || Tn[Ur], y = p.brushSizes[h] ?? 10, w = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), k = av(f, w), P = c.map((I) => ({
      ...I,
      t: Number((I == null ? void 0 : I.t) || 0),
      widthScale: Number.isFinite(Number(I == null ? void 0 : I.widthScale)) ? Math.max(0, Number(I.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(I == null ? void 0 : I.pressureLike)) ? Math.max(0, Number(I.pressureLike)) : 1
    })), M = {
      id: Oo(i),
      actionGroupId: Oo("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: w,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: k.radiusModel,
      radiusValue: k.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: P.map((I) => ({ ...I })),
        points: P.map((I) => ({ ...I }))
      }
    };
    return Cm(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function wh(i, s, c, f) {
    const h = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), m = bi(s), y = Tn[m] || Tn[Ur], w = {
      id: Oo(i),
      actionGroupId: Oo("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((k) => ({ ...k }))
      }
    };
    return Cm(w, y), Number(y.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Mo(i) {
    const s = v.painting || (v.painting = Bo(null)), c = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function uv(i, s, c = performance.now()) {
    let f;
    if (p.mode === "frame") {
      const P = He();
      if (!P || (f = hr(s, P, c), !f)) return !1;
    } else
      f = dr(s, c);
    if (!f) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, y = h[h.length - 1];
    if (y) {
      const P = Math.abs(Number(f.u ?? f.x ?? 0) - Number(y.u ?? y.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (P < 15e-4 && M < 15e-4) return !1;
    }
    const w = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...w }), m.push({ ...w });
    const k = jn();
    if (k) {
      const P = p.paintEngine.ensureTarget(k);
      p.paintEngine.appendStrokePoint(P, Number(w.u ?? 0), Number(w.v ?? 0), i.stroke);
    }
    return !0;
  }
  function fv(i, s, c = performance.now()) {
    var y, w;
    let f;
    if (p.mode === "frame") {
      const k = He();
      if (!k) return !1;
      f = hr(s, k, c);
    } else
      f = dr(s, c);
    const h = (w = (y = i == null ? void 0 : i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : w.points;
    if (!f || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const k = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), P = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (k < 15e-4 && P < 15e-4) return !1;
    }
    return h.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function dv(i) {
    var re, Se, Ge, Ue, nt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    ws();
    const c = jn(), f = da(c.width, c.height);
    if (!eh(f, s, { w: c.width, h: c.height })) return !1;
    const h = ((Se = (re = f.ctx) == null ? void 0 : re.getImageData(0, 0, c.width, c.height)) == null ? void 0 : Se.data) || null;
    if (!h) return !1;
    const m = new Map(hn().map((ye) => [String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim(), ye ? { ...ye } : null])), y = [], w = [], k = [...En().filter((ye) => String((ye == null ? void 0 : ye.layerKind) || "paint") !== "paint")];
    let P = !1, M = po().reduce((ye, ie) => Math.max(ye, Number((ie == null ? void 0 : ie.z_index) || 0)), -1) + 1;
    function I(ye, ie, pe, we = 8) {
      let Re = ie, We = pe, Te = -1, ft = -1;
      for (let qe = 0; qe < pe; qe += 1)
        for (let Lt = 0; Lt < ie; Lt += 1)
          ye[(qe * ie + Lt) * 4 + 3] <= we || (Lt < Re && (Re = Lt), qe < We && (We = qe), Lt > Te && (Te = Lt), qe > ft && (ft = qe));
      return Te < Re || ft < We ? null : { minX: Re, minY: We, maxX: Te, maxY: ft };
    }
    const T = I(h, c.width, c.height, 8);
    if (!T) return !1;
    function G(ye, ie) {
      return !ye || !ie ? !1 : !(ye.maxX < ie.minX || ie.maxX < ye.minX || ye.maxY < ie.minY || ie.maxY < ye.minY);
    }
    function ne(ye, ie) {
      const pe = fi((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "", "paint", ie);
      if (!pe) return null;
      const we = pe.centerUv.u - pe.halfW, Re = pe.centerUv.u + pe.halfW, We = pe.centerUv.v - pe.halfH, Te = pe.centerUv.v + pe.halfH, ft = c.width, qe = c.height;
      return {
        minX: Math.floor((we % 1 + 1) % 1 * ft),
        maxX: Math.ceil((Re % 1 + 1) % 1 * ft),
        minY: Math.floor(J(We, 0, 1) * qe),
        maxY: Math.ceil(J(Te, 0, 1) * qe),
        wraps: Re - we >= 1 || we < 0 || Re > 1
      };
    }
    function Z(ye) {
      const ie = (ye == null ? void 0 : ye.bbox) || null;
      if (!ie) return null;
      const pe = (ye == null ? void 0 : ye.transform) || {}, we = c.width, Re = c.height, We = Number(ie.u0 || 0) + Number(pe.du || 0), Te = Number(ie.u1 || 0) + Number(pe.du || 0), ft = Number(ie.v0 || 0) + Number(pe.dv || 0), qe = Number(ie.v1 || 0) + Number(pe.dv || 0);
      return {
        minX: Math.floor((We % 1 + 1) % 1 * we),
        maxX: Math.ceil((Te % 1 + 1) % 1 * we),
        minY: Math.floor(J(ft, 0, 1) * Re),
        maxY: Math.ceil(J(qe, 0, 1) * Re),
        wraps: Te - We >= 1 || We < 0 || Te > 1
      };
    }
    function te(ye) {
      return ye ? ye.wraps ? G(T, { minX: 0, maxX: ye.maxX, minY: ye.minY, maxY: ye.maxY }) || G(T, { minX: ye.minX, maxX: c.width - 1, minY: ye.minY, maxY: ye.maxY }) : G(T, ye) : !0;
    }
    function ae(ye) {
      if (!ye) return { touched: !1, canvas: null };
      const ie = da(c.width, c.height, { readback: !0 });
      ie.ctx.drawImage(ye, 0, 0);
      const pe = ie.ctx.getImageData(0, 0, c.width, c.height);
      ie.ctx.save(), ie.ctx.globalCompositeOperation = "destination-out", ie.ctx.drawImage(f.canvas, 0, 0), ie.ctx.restore();
      const we = ie.ctx.getImageData(0, 0, c.width, c.height);
      for (let Re = 0; Re < c.width * c.height; Re += 1) {
        if (h[Re * 4 + 3] <= 8) continue;
        const Te = pe.data[Re * 4 + 3], ft = we.data[Re * 4 + 3];
        if (Te > ft)
          return { touched: !0, canvas: ie.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(ye, ie, pe) {
      const we = Number(pe == null ? void 0 : pe.z_index), Re = g1(ye, ie, pe).map((We, Te) => ({
        ...We,
        z_index: Number.isFinite(we) ? we + Te * 1e-3 : M + Te * 1e-3
      }));
      return Re.length && (M = Math.max(M, ...Re.map((We) => Number((We == null ? void 0 : We.z_index) || 0))) + 1), Re;
    }
    for (const ye of hn()) {
      const ie = String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim();
      if (!ie) continue;
      const pe = cr(ie, "paint");
      if (!te(ne(ye, pe))) {
        w.push(ye), y.push(...pe);
        continue;
      }
      const we = ((Ue = (Ge = p.paintEngine) == null ? void 0 : Ge.getGroupTarget) == null ? void 0 : Ue.call(Ge, ie)) || null, Re = ((nt = we == null ? void 0 : we.committedPaint) == null ? void 0 : nt.canvas) || null;
      if (!Re) {
        w.push(ye), y.push(...pe);
        continue;
      }
      const We = ae(Re);
      if (!We.touched || !We.canvas) {
        w.push(ye), y.push(...pe);
        continue;
      }
      P = !0;
      const Te = he(We.canvas, "paint", m.get(ie) || ye || {});
      k.push(...Te);
    }
    for (const ye of En().filter((ie) => String((ie == null ? void 0 : ie.layerKind) || "paint") === "paint")) {
      if (!te(Z(ye))) {
        k.push(ye);
        continue;
      }
      const ie = Rd(ye, null);
      if (!ie) {
        k.push(ye);
        continue;
      }
      const pe = ae(ie);
      if (!pe.touched || !pe.canvas) {
        k.push(ye);
        continue;
      }
      P = !0;
      const we = he(pe.canvas, "paint", ye);
      k.push(...we);
    }
    return P ? (v.painting.paint.strokes = y, v.painting.groups = w.sort((ye, ie) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0)), v.painting.raster_objects = k.sort((ye, ie) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0)), la({ preservePanelValues: !1 }), !0) : !1;
  }
  function hv(i) {
    var y, w, k, P, M;
    if ((((w = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : w.rawPoints) || ((P = (k = i.stroke) == null ? void 0 : k.geometry) == null ? void 0 : P.points) || []).length >= 1) {
      zc(i);
      const I = jn();
      I && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(I) : p.paintEngine.commitActiveStroke(i.stroke, I)), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = _h(i.layerKind, c.toolKind, [], f);
    h.actionGroupId = c.actionGroupId, i.stroke = h;
    const m = jn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function pv(i) {
    var y, w;
    if ((((w = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      zc(i);
      const k = jn();
      k && p.paintEngine.commitActiveStroke(i.stroke, k), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = wh(i.layerKind, c.toolKind, [], f);
    h.actionGroupId = c.actionGroupId, i.stroke = h;
    const m = jn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function zc(i) {
    var m, y, w, k;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const c = String(((y = i == null ? void 0 : i.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Oc(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), dv(i);
    const f = i.layerKind === "paint" && c !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && md((w = i.stroke) == null ? void 0 : w.actionGroupId), Mo(i.layerKind).push(i.stroke), !0);
    const h = s.rawPoints || s.points || [];
    return h.length < 1 ? !1 : (s.processedPoints = Oc(h, i.stroke.targetSpace, !0), f && md((k = i.stroke) == null ? void 0 : k.actionGroupId), Mo(i.layerKind).push(i.stroke), !0);
  }
  function xh(i) {
    var c;
    if (t === "cutout" && p.mode === "frame") {
      const f = He(), h = tn(f);
      if (!f || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const y = hr(i, f, performance.now()), w = y ? wo(y) : null;
      if (w)
        for (const P of Ic()) {
          if (!yt(P)) continue;
          const M = ga(P, w);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const I = qt(P);
            if (I != null && I.visible) return { item: P, geom: I };
          }
        }
      const k = ac(!1).slice().sort((P, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0));
      for (const P of k) {
        if (P.type === "strokeGroup") {
          const T = go(oa("paint", P.actionGroupId || P.id || ""));
          if (!T) continue;
          const G = qt(T);
          if (!(G != null && G.visible)) continue;
          const ne = Array.isArray(G.strokePaths) ? G.strokePaths : [];
          for (const Z of ne) {
            const te = Array.isArray(Z == null ? void 0 : Z.points) ? Z.points : [];
            if (!te.length) continue;
            if (Z.closed && te.length >= 3 && Xr(i, te)) return { item: T, geom: G };
            const ae = Math.max(8, Number((Z == null ? void 0 : Z.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < te.length - 1; he += 1)
              if (Iu(i, te[he], te[he + 1]) <= ae * ae) return { item: T, geom: G };
            if (te.length === 1 && wi(i, te[0]) <= ae * ae) return { item: T, geom: G };
          }
          continue;
        }
        if (P.type === "rasterObject") {
          const T = mo(aa(((c = P.item) == null ? void 0 : c.id) || P.id || ""));
          if (!T) continue;
          const G = qt(T);
          if (Ld(T, G, i, y)) return { item: T, geom: G };
          continue;
        }
        const M = P.item;
        if (!M || !yt(M) || !w) continue;
        const I = ga(M, w);
        if (I && Number(I.x) >= 0 && Number(I.x) <= 1 && Number(I.y) >= 0 && Number(I.y) <= 1) {
          const T = qt(M);
          if (T != null && T.visible) return { item: M, geom: T };
        }
      }
      return null;
    }
    const s = [
      ...ac(!1).slice().sort((f, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var h;
        return f.type === "strokeGroup" ? go(oa("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? mo(aa(((h = f.item) == null ? void 0 : h.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...t === "cutout" ? Ic().filter((f) => zn(f)) : []
    ];
    for (const f of s) {
      if (en(f)) {
        const m = qt(f);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const w of y) {
          const k = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!k.length) continue;
          if (w.closed && k.length >= 3 && Xr(i, k)) return { item: f, geom: m };
          const P = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < k.length - 1; M += 1)
            if (Iu(i, k[M], k[M + 1]) <= P * P) return { item: f, geom: m };
          if (k.length === 1 && wi(i, k[0]) <= P * P) return { item: f, geom: m };
        }
        continue;
      }
      if (pn(f)) {
        const m = qt(f);
        if (!(m != null && m.visible)) continue;
        if (Ld(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const h = qt(f);
      if (h.visible && Xr(i, h.corners))
        return { item: f, geom: h };
    }
    return null;
  }
  function jc(i, s, c = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (yt(c)) return af(i, s);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((y) => wi(y, s) <= 121);
      if (h >= 0) {
        const y = i.corners[h], w = y.x - i.center.x, k = y.y - i.center.y, P = w * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: P };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const y of m) {
        const w = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
        if (y.closed && w.length >= 3 && Xr(s, w)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
        for (let P = 0; P < w.length - 1; P += 1)
          if (Iu(s, w[P], w[P + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return Xr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => wi(m, s) <= 121);
      if (h >= 0) {
        const m = i.corners[h], y = m.x - i.center.x, w = m.y - i.center.y, k = y * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: k };
      }
      return Xr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => wi(m, s) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const f = i.corners.findIndex((h) => wi(h, s) <= 121);
    if (f >= 0) {
      const h = i.corners[f], m = h.x - i.center.x, y = h.y - i.center.y, w = m * y >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: f, cursor: w };
    }
    return wi(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Xr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function Sh(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function mv(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function gv(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((h) => mv(i, h))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Xr({ x: c, y: f }, s.corners);
  }
  function mt(i) {
    if (lv(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? ke("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" ? ke("grabbing") : p.interaction.kind === "space_pan" ? ke("move") : p.interaction.kind === "space_orbit" || p.interaction.kind === "roll_frame" ? ke("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? ke("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? ke(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? ke("grabbing") : ke("default");
      return;
    }
    if (vh()) {
      ke("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        ke(uC);
        return;
      }
      if (p.primaryTool !== "cursor") {
        ke("default");
        return;
      }
      ke("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      ke("default");
      return;
    }
    const s = Nt(), c = s ? qt(s) : null, f = s ? kn(s) : !1, h = f ? { kind: "none", cursor: "default" } : jc(c, i, s);
    if (!f && h.kind !== "none") {
      ke(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && xh(i)) {
      ke("default");
      return;
    }
    ke(p.mode === "pano" ? "grab" : "default");
  }
  function Xe() {
    var k, P;
    if (!Qt) return;
    if (p.mode === "frame") {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Nt(), s = ur();
    if (!i && s.length === 0 || p.interaction) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = fs(), f = n2({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: c,
      geom: s.length > 1 ? us(s) : qt(i),
      allLocked: uc(s),
      anyLocked: s.some((M) => kn(M)),
      selectedLocked: kn(i),
      activeAspect: Zr(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: zt,
      isStickerHidden: yo,
      canRestoreSelectedToInitial: ib,
      iconSet: Pe
    });
    if (!f.visible) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (M, I, { requireFitsBelow: T = !0 } = {}) => {
      var Se, Ge, Ue;
      const ne = Number((Se = f.anchor) == null ? void 0 : Se.minX), Z = Number((Ge = f.anchor) == null ? void 0 : Ge.maxX), te = Number((Ue = f.anchor) == null ? void 0 : Ue.maxY);
      if (![ne, Z, te].every(Number.isFinite)) return null;
      const ae = Math.max(14, C.width - M - 14), he = J((ne + Z) * 0.5 - M * 0.5, 14, ae), re = te + 18;
      return !Number.isFinite(he) || !Number.isFinite(re) || T && re + I > C.height - 14 ? null : { left: he, top: re };
    }, m = Math.max(1, Number(((k = p.menuSize) == null ? void 0 : k.w) || 220)), y = Math.max(1, Number(((P = p.menuSize) == null ? void 0 : P.h) || 40)), w = h(m, y, { requireFitsBelow: !1 });
    if (!w) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    E.selectionMenu = {
      visible: !0,
      left: w.left,
      top: w.top,
      items: f.items
    }, requestAnimationFrame(() => {
      if (!Qt || E.selectionMenu.visible !== !0) return;
      const M = Qt.getBoundingClientRect(), I = Math.round(Number((M == null ? void 0 : M.width) || 0)) || 220, T = Math.round(Number((M == null ? void 0 : M.height) || 0)) || 40;
      p.menuSize = { w: I, h: T, measured: !0 };
      const G = h(I, T);
      if (!G) {
        E.selectionMenu.visible = !1;
        return;
      }
      E.selectionMenu.left = G.left, E.selectionMenu.top = G.top;
    });
  }
  function Di() {
    Oe.timer && (clearTimeout(Oe.timer), Oe.timer = 0), Oe.target = null, E.tooltip.visible = !1;
  }
  function yv(i) {
    if (!cn || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    E.tooltip.text = s, E.tooltip.visible = !0;
    const c = i;
    requestAnimationFrame(() => {
      var Z, te;
      if (Oe.target !== c || !cn || !(c != null && c.isConnected)) return;
      const f = le.getBoundingClientRect(), h = c.getBoundingClientRect(), m = 8, y = 12, w = Math.round(Number(((Z = cn.getBoundingClientRect()) == null ? void 0 : Z.width) || 0)) || 100, k = Math.round(Number(((te = cn.getBoundingClientRect()) == null ? void 0 : te.height) || 0)) || 24, P = !!c.closest(".pano-floating-left"), M = !!c.closest(".pano-frame-rail"), I = !!c.closest(".pano-paint-footer") || !!c.closest(".pano-paint-color-float");
      let T = "", G = h.left - f.left + h.width * 0.5 - w * 0.5, ne = h.top - f.top - k - y;
      if (P)
        T = "tool-rail", G = h.right - f.left + 10, ne = h.top - f.top + h.height * 0.5 - k * 0.5, G = J(G, m, Math.max(m, f.width - w - m)), ne = J(ne, m, Math.max(m, f.height - k - m));
      else if (M)
        T = "frame-rail", G = h.left - f.left - w - 10, ne = h.top - f.top + h.height * 0.5 - k * 0.5, G = J(G, m, Math.max(m, f.width - w - m)), ne = J(ne, m, Math.max(m, f.height - k - m));
      else if (I) {
        T = "footer";
        const ae = c.closest(".pano-paint-footer"), he = ae ? ae.getBoundingClientRect() : h;
        G = he.left - f.left + he.width * 0.5 - w * 0.5, ne = he.bottom - f.top + 5, G = J(G, m, Math.max(m, f.width - w - m)), ne = Math.max(m, ne);
      }
      G = J(G, m, Math.max(m, f.width - w - m)), ne = Math.max(m, ne), E.tooltip.left = G, E.tooltip.top = ne, E.tooltip.variant = T, E.tooltip.visible = !0;
    });
  }
  const an = $f({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Ht(Number(i.yaw || 0)), p.viewPitch = J(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = J(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = C.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || C.clientWidth || 0)),
        h: Math.max(1, Number(i.height || C.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = v.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = v.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: mi,
    onInteraction: () => {
      Ce.backgroundDirty = !0, Ce.dirty = !0;
    }
  });
  function bv(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += Bg(s, i.lastAngle), i.lastAngle = s;
    const f = Wg(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: c.shiftKey,
      altKey: i.altStarted ? !1 : c.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = E.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = f, h.displayValue = Eo(f), h.fillPct = (f + 180) / 360 * 100), Kr(), Hc(i), ue({ localOnly: !0 });
  }
  function vv(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = dy(i.rollGesture, s, c);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const h = (((m = E.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = f.rollDeg, h.displayValue = Eo(f.rollDeg), h.fillPct = (f.rollDeg + 180) / 360 * 100), Kr(), Hc(i), ue({ localOnly: !0 });
  }
  const kh = (i, s) => {
    const c = Ti(i);
    return Math.atan2(c.y - s.y, c.x - s.x);
  };
  function Hc(i) {
    var y, w;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Oe.timer && (clearTimeout(Oe.timer), Oe.timer = 0), Oe.target = null;
    const s = tn(i.shot), c = (y = C.getBoundingClientRect) == null ? void 0 : y.call(C), f = (w = le.getBoundingClientRect) == null ? void 0 : w.call(le);
    if (!s || !c || !f || C.width <= 0 || C.height <= 0) return;
    const h = c.width / C.width, m = c.height / C.height;
    E.tooltip.text = `${Eo(i.shot.roll_deg)}°`, E.tooltip.left = c.left - f.left + (s.x + s.w * 0.5) * h, E.tooltip.top = c.top - f.top + (s.y + s.h * 0.5) * m + 12, E.tooltip.variant = "roll", E.tooltip.visible = !0;
  }
  it == null || it.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const s = He();
    if (!s || s.locked === !0) return;
    const c = tn(s);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, h = kh(i, f);
    p.interaction = {
      kind: "roll_frame",
      shot: s,
      center: f,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = it.setPointerCapture) == null || m.call(it, i.pointerId), i.preventDefault(), Kr(), Hc(p.interaction), ue({ localOnly: !0 });
  }), it == null || it.addEventListener("pointermove", (i) => {
    var s;
    ((s = p.interaction) == null ? void 0 : s.kind) !== "roll_frame" || p.interaction.source !== "knob" || bv(
      p.interaction,
      kh(i, p.interaction.center),
      i
    );
  });
  const _v = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (ot(), lt(), ze()), p.interaction = null, Di(), Hr(), Kr(), ue());
  };
  it == null || it.addEventListener("pointerup", _v), it == null || it.addEventListener("pointercancel", () => _a()), it == null || it.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && _a();
  }), it == null || it.addEventListener("dblclick", (i) => {
    const s = p.mode === "frame" && !r ? He() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, ot(), lt(), ze(), Kr(), ue(), i.preventDefault());
  }), C.onpointerdown = (i) => {
    Le.selection && (Le.selection = null, Br());
    const s = Ti(i);
    st = s, ks(s, !0), p.viewTween = null, an.state.inertia.active = !1, an.state.inertia.vx = 0, an.state.inertia.vy = 0;
    const c = _c() ? kM(Fd(), i) : null;
    if (c) {
      if (i.preventDefault(), c === "look") {
        const k = va(i);
        p.interaction = { kind: "view", last: k, lastTs: performance.now() }, an.startDrag(k.x, k.y, i.pointerId, performance.now());
      } else
        p.interaction = { kind: `space_${c}`, last: s };
      mt(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const k = He();
        if (!k || r || k.locked === !0) return;
        p.interaction = {
          kind: "pan_frame",
          shot: k,
          last: s,
          start: {
            yaw_deg: Number(k.yaw_deg || 0),
            pitch_deg: Number(k.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const k = p.mode === "unwrap" ? s : va(i);
        p.interaction = { kind: "view", last: k, lastTs: performance.now() }, an.startDrag(k.x, k.y, i.pointerId, performance.now());
      }
      mt(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const k = He(), P = tn(k);
      if (!k || k.locked === !0 || !P) return;
      const M = fy({
        frame: P,
        point: s,
        startRollDeg: Number(k.roll_deg ?? k.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!M) return;
      p.interaction = {
        kind: "roll_frame",
        shot: k,
        center: M.center,
        lastAngle: M.lastAngle,
        accumulatedRad: M.accumulatedRad,
        rollGesture: M,
        start: { roll_deg: Number(k.roll_deg ?? k.rot_deg ?? 0) },
        changed: !1,
        altStarted: M.source === "alt",
        source: M.source
      }, C.setPointerCapture(i.pointerId), i.preventDefault(), Kr(), ue({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const k = He();
      if (!k || r || k.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: k,
        last: s,
        start: { yaw_deg: Number(k.yaw_deg || 0), pitch_deg: Number(k.pitch_deg || 0) },
        changed: !1
      }, mt(s), C.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const k = va(i);
        p.interaction = { kind: "view", last: k, lastTs: performance.now() }, an.startDrag(k.x, k.y, i.pointerId, performance.now()), mt(s), C.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (q && !q.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (yh() || $c())) {
      Jn();
      const k = p.primaryTool === "mask" ? "mask" : "paint", P = p.primaryTool === "mask" ? p.maskTool : p.paintTool, M = p.mode === "frame" && $c() ? He() : null, I = { kind: "ERP_GLOBAL" }, T = M ? hr(s, M, performance.now()) : dr(s, performance.now());
      if (!T) {
        mt(s);
        return;
      }
      p.interaction = {
        kind: P === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: k,
        _livePreviewToken: Oo("live"),
        stroke: P === "lasso_fill" ? wh(k, P, [T], I) : _h(k, P, [T], I)
      }, bo();
      const G = jn();
      if (G)
        if (p.paintEngine.beginStroke(p.interaction.stroke, G), p.interaction.kind === "paint_stroke") {
          const ne = p.paintEngine.ensureTarget(G), Z = Number((T == null ? void 0 : T.u) ?? (T == null ? void 0 : T.x) ?? 0), te = Number((T == null ? void 0 : T.v) ?? (T == null ? void 0 : T.y) ?? 0);
          p.paintEngine.appendStrokePoint(ne, Z, te, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, G);
      mt(s), C.setPointerCapture(i.pointerId), ue();
      return;
    }
    const f = ur(), h = Nt(), m = f.length > 1 ? us(f) : h ? qt(h) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: s, current: s }, mt(s), C.setPointerCapture(i.pointerId), ue({ localOnly: !0 });
      return;
    }
    if (f.length > 1 && (m != null && m.visible)) {
      if ((f.some((P) => kn(P)) ? { kind: "none" } : jc(m, s)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: f.map((P) => P),
          offset: { x: s.x - m.center.x, y: s.y - m.center.y },
          startCenter: { x: m.center.x, y: m.center.y },
          stickerSnapshots: f.filter((P) => yt(P)).map((P) => ({
            id: String(P.id || ""),
            yaw_deg: Number(Xt(P).yaw_deg || 0),
            pitch_deg: Number(Xt(P).pitch_deg || 0),
            center: (() => {
              var I, T;
              const M = qt(P);
              return M != null && M.visible ? { x: Number(((I = M.center) == null ? void 0 : I.x) || 0), y: Number(((T = M.center) == null ? void 0 : T.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: f.filter((P) => en(P)).map((P) => ({
            id: String(P.actionGroupId || P.id || ""),
            layerKind: String(P.layerKind || "paint"),
            snapshot: gn(cr(P.actionGroupId, P.layerKind)),
            frameSnapshot: gn(fi(P.actionGroupId, P.layerKind)),
            center: (() => {
              var I, T;
              const M = qt(P);
              return M != null && M.visible ? { x: Number(((I = M.center) == null ? void 0 : I.x) || 0), y: Number(((T = M.center) == null ? void 0 : T.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: cc(P.actionGroupId, P.layerKind)
          })),
          rasterSnapshots: f.filter((P) => pn(P)).map((P) => ({
            id: on(P.rasterObjectId || P.id || ""),
            snapshot: gn(En().find((M) => String((M == null ? void 0 : M.id) || "") === on(P.rasterObjectId || P.id || ""))),
            center: (() => {
              var I, T;
              const M = qt(P);
              return M != null && M.visible ? { x: Number(((I = M.center) == null ? void 0 : I.x) || 0), y: Number(((T = M.center) == null ? void 0 : T.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Hd(P)
          }))
        }, mt(s), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (h && (m != null && m.visible)) {
      const k = kn(h) ? { kind: "none" } : jc(m, s, h);
      if (k.kind === "scale") {
        p.interaction = en(h) ? {
          kind: "scale_stroke_group",
          item: h,
          center: m.center,
          startDist: Math.max(1, Math.hypot(s.x - m.center.x, s.y - m.center.y)),
          snapshot: gn(cr(h.actionGroupId, h.layerKind)),
          frameSnapshot: gn(fi(h.actionGroupId, h.layerKind)),
          cursor: k.cursor
        } : pn(h) ? {
          kind: "scale_raster_object",
          item: h,
          center: m.center,
          startDist: Math.max(1, Math.hypot(s.x - m.center.x, s.y - m.center.y)),
          snapshot: gn(En().find((P) => String((P == null ? void 0 : P.id) || "") === on(h.rasterObjectId || h.id || ""))),
          cursor: k.cursor
        } : {
          kind: "scale",
          item: h,
          center: m.center,
          startDist: Math.max(1, Math.hypot(s.x - m.center.x, s.y - m.center.y)),
          startHFOV: Number(Xt(h).hFOV_deg || 20),
          startVFOV: Number(Xt(h).vFOV_deg || 20),
          cursor: k.cursor
        }, mt(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (k.kind === "scale_x" || k.kind === "scale_y") {
        p.interaction = {
          kind: k.kind,
          item: h,
          center: m.center,
          startDist: Math.max(1, Math.hypot(s.x - m.center.x, s.y - m.center.y)),
          startHFOV: Number(Xt(h).hFOV_deg || 20),
          startVFOV: Number(Xt(h).vFOV_deg || 20),
          cursor: k.cursor,
          edge: k.edge
        }, mt(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (k.kind === "rotate") {
        p.interaction = en(h) ? {
          kind: "rotate_stroke_group",
          item: h,
          center: m.center,
          startAng: Math.atan2(s.y - m.center.y, s.x - m.center.x),
          snapshot: gn(cr(h.actionGroupId, h.layerKind)),
          frameSnapshot: gn(fi(h.actionGroupId, h.layerKind))
        } : {
          kind: "rotate",
          item: h,
          center: m.center,
          startRot: Number(Xt(h).rot_deg || Xt(h).roll_deg || 0),
          startAng: Math.atan2(s.y - m.center.y, s.x - m.center.x)
        }, mt(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (k.kind === "move") {
        if (en(h)) {
          const P = p.mode === "frame" ? (() => {
            const M = He();
            return M ? hr(s, M, performance.now()) : null;
          })() : dr(s, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: h,
            startUv: P,
            snapshot: gn(cr(h.actionGroupId, h.layerKind)),
            frameSnapshot: gn(fi(h.actionGroupId, h.layerKind))
          }, mt(s), C.setPointerCapture(i.pointerId);
          return;
        }
        if (pn(h)) {
          const P = p.mode === "frame" ? (() => {
            const M = He();
            return M ? hr(s, M, performance.now()) : null;
          })() : dr(s, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: h,
            startUv: P,
            snapshot: gn(En().find((M) => String((M == null ? void 0 : M.id) || "") === on(h.rasterObjectId || h.id || "")))
          }, mt(s), C.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: h,
          offset: { x: s.x - m.center.x, y: s.y - m.center.y }
        }, mt(s), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const y = xh(s);
    if (y) {
      const k = p.selectedId !== y.item.id;
      if (k && p.selectedId && (ot(), Fn()), wr(y.item), t === "cutout" && k && (p.cutoutAspectOpen = !1), k && ze(), Xe(), ue(), kn(y.item)) {
        mt(s);
        return;
      }
      p.interaction = {
        kind: en(y.item) ? "move_stroke_group" : pn(y.item) ? "move_raster_object" : "move",
        item: y.item,
        offset: { x: s.x - y.geom.center.x, y: s.y - y.geom.center.y },
        startUv: en(y.item) || pn(y.item) ? p.mode === "frame" ? (() => {
          const P = He();
          return P ? hr(s, P, performance.now()) : null;
        })() : dr(s, performance.now()) : null,
        snapshot: en(y.item) ? gn(cr(y.item.actionGroupId, y.item.layerKind)) : pn(y.item) ? gn(En().find((P) => String((P == null ? void 0 : P.id) || "") === on(y.item.rasterObjectId || y.item.id || ""))) : null,
        frameSnapshot: en(y.item) ? gn(fi(y.item.actionGroupId, y.item.layerKind)) : null
      }, mt(s), C.setPointerCapture(i.pointerId);
      return;
    }
    const w = !!p.selectedId;
    if (w && (ot(), Fn()), la(), w && ze(), Xe(), ue(), p.mode === "pano") {
      const k = va(i);
      p.interaction = { kind: "view", last: k, lastTs: performance.now() }, an.startDrag(k.x, k.y, i.pointerId, performance.now()), mt(s), C.setPointerCapture(i.pointerId);
    }
  };
  function wv(i, s) {
    if (!S || !kt.playing) return;
    if (kt.stop(), i.kind === "move_multi") {
      const h = us(i.items);
      if (!(h != null && h.visible)) return;
      i.offset = { x: s.x - h.center.x, y: s.y - h.center.y }, i.startCenter = { x: h.center.x, y: h.center.y };
      for (const m of i.stickerSnapshots) {
        const y = i.items.find((k) => String((k == null ? void 0 : k.id) || "") === m.id), w = y ? qt(y) : null;
        w != null && w.visible && (m.yaw_deg = Number(Xt(y).yaw_deg || 0), m.pitch_deg = Number(Xt(y).pitch_deg || 0), m.center = { x: w.center.x, y: w.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const c = qt(i.item);
    if (!(c != null && c.visible)) return;
    const f = Xt(i.item);
    if (i.kind === "move") {
      i.offset = { x: s.x - c.center.x, y: s.y - c.center.y };
      return;
    }
    if (i.center = c.center, i.kind === "rotate") {
      i.startRot = Number(f.rot_deg || f.roll_deg || 0), i.startAng = Math.atan2(s.y - c.center.y, s.x - c.center.x);
      return;
    }
    i.startDist = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)), i.startHFOV = Number(f.hFOV_deg || 20), i.startVFOV = Number(f.vFOV_deg || 20);
  }
  C.onpointermove = (i) => {
    var f, h, m, y, w, k, P, M, I, T, G, ne, Z, te, ae, he, re, Se, Ge, Ue, nt, ye;
    const s = Ti(i);
    if (ks(s, !0), !p.interaction) {
      mt(s);
      return;
    }
    mt(s);
    const c = p.interaction;
    if (st && (s.x !== st.x || s.y !== st.y)) {
      const ie = st;
      st = null, ["view", "marquee_select", "space_pan", "space_orbit"].includes(c.kind) || wv(c, ie);
    }
    if (c.kind === "paint_stroke") {
      const ie = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      ie.forEach((we) => {
        const Re = Ti(we);
        if (p.mode === "frame") {
          const We = He(), Te = We ? tn(We) : null;
          if (Te) {
            const ft = (Re.x - Te.x) / Math.max(1, Te.w), qe = (Re.y - Te.y) / Math.max(1, Te.h);
            if (!(ft >= 0 && ft <= 1 && qe >= 0 && qe <= 1)) {
              c._outOfFrame = !0;
              return;
            }
            c._outOfFrame && (c._outOfFrame = !1, hv(c));
          }
        }
        uv(c, Re, performance.now()) && (pe = !0);
      }), pe && ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const ie = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      if (ie.forEach((we) => {
        const Re = Ti(we);
        if (p.mode === "frame") {
          const We = He(), Te = We ? tn(We) : null;
          if (Te) {
            const ft = (Re.x - Te.x) / Math.max(1, Te.w), qe = (Re.y - Te.y) / Math.max(1, Te.h);
            if (!(ft >= 0 && ft <= 1 && qe >= 0 && qe <= 1)) {
              c._outOfFrame = !0;
              return;
            }
            c._outOfFrame && (c._outOfFrame = !1, pv(c));
          }
        }
        fv(c, Re, performance.now()) && (pe = !0);
      }), pe) {
        const we = jn();
        we && p.paintEngine.updateActiveStroke(c.stroke, we), ue({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const ie = performance.now(), pe = p.mode === "unwrap" ? s : va(i);
      an.moveDrag(pe.x, pe.y, p.mode === "unwrap" ? "unwrap" : "pano", ie), c.lastTs = ie, c.last = pe, ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "space_pan" || c.kind === "space_orbit") {
      const ie = ca();
      wc(c.kind === "space_pan" ? TS(ie, s.x - c.last.x, s.y - c.last.y, C.width, C.height, Td()) : OS(ie, s.x - c.last.x, s.y - c.last.y, C.height)), c.last = s;
      return;
    }
    if (c.kind === "pan_frame") {
      const ie = Vc(c.shot);
      if (!ie || !c.shot) return;
      const pe = s.x - c.last.x, we = s.y - c.last.y, Re = hy(c.shot, {
        dx: pe,
        dy: we,
        focalPx: ie.focalPx,
        invertX: ((f = v.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
        invertY: ((h = v.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      c.shot.yaw_deg = Re.yaw_deg, c.shot.pitch_deg = Re.pitch_deg, c.changed = c.changed || Math.abs(pe) > 0 || Math.abs(we) > 0, c.last = s, ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "roll_frame") {
      if (c.source === "knob") return;
      vv(c, s, i);
      return;
    }
    if (c.kind === "move") {
      const ie = s.x - c.offset.x, pe = s.y - c.offset.y;
      if (p.mode === "frame" && t === "cutout") {
        const we = He(), Re = tn(we);
        if (!we || !Re) return;
        const We = {
          x: J((ie - Re.x) / Math.max(1, Re.w), 0, 1),
          y: J((pe - Re.y) / Math.max(1, Re.h), 0, 1)
        }, Te = Ec(we, We);
        if (!Te) return;
        const ft = Gs(Te);
        lr(c.item, { yaw_deg: ft.yaw, pitch_deg: ft.pitch });
      } else if (p.mode === "unwrap") {
        const we = mi(), Re = J((ie - we.x) / Math.max(we.w, 1), 0, 1), We = J((pe - we.y) / Math.max(we.h, 1), 0, 1);
        lr(c.item, { yaw_deg: Ht(Re * 360 - 180), pitch_deg: J(90 - We * 180, -90, 90) });
      } else {
        const we = Sc(ie, pe), Re = Gs(we);
        lr(c.item, { yaw_deg: Re.yaw, pitch_deg: Re.pitch });
      }
      yt(c.item) && Wt(), ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const ie = p.mode === "frame" ? (() => {
        const Re = He();
        return Re ? hr(s, Re, performance.now()) : null;
      })() : dr(s, performance.now());
      if (!ie || !c.startUv) return;
      const pe = qn(Number(ie.u || 0), Number(c.startUv.u || 0)), we = Number(ie.v || 0) - Number(c.startUv.v || 0);
      yd((m = c.item) == null ? void 0 : m.actionGroupId, pe, we, c.snapshot, (y = c.item) == null ? void 0 : y.layerKind, c.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const ie = p.mode === "frame" ? (() => {
        const Re = He();
        return Re ? hr(s, Re, performance.now()) : null;
      })() : dr(s, performance.now());
      if (!ie || !c.startUv) return;
      const pe = qn(Number(ie.u || 0), Number(c.startUv.u || 0)), we = Number(ie.v || 0) - Number(c.startUv.v || 0);
      vd(((w = c.item) == null ? void 0 : w.rasterObjectId) || ((k = c.item) == null ? void 0 : k.id) || "", pe, we, c.snapshot) && (xo(), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_raster_object") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Uy(((P = c.item) == null ? void 0 : P.rasterObjectId) || ((M = c.item) == null ? void 0 : M.id) || "", pe, c.snapshot) && (xo(), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const ie = s.x - Number(((I = c.offset) == null ? void 0 : I.x) || 0), pe = s.y - Number(((T = c.offset) == null ? void 0 : T.y) || 0);
      let we = !1, Re = !1, We = !1;
      const Te = ie - Number(((G = c.startCenter) == null ? void 0 : G.x) || ie), ft = pe - Number(((ne = c.startCenter) == null ? void 0 : ne.y) || pe);
      for (const qe of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const Lt = (t === "cutout" ? lc() : dn()).find((Pt) => String((Pt == null ? void 0 : Pt.id) || "") === String(qe.id || ""));
        if (!Lt || !yt(Lt)) continue;
        const fn = {
          x: Number(((Z = qe.center) == null ? void 0 : Z.x) || 0) + Te,
          y: Number(((te = qe.center) == null ? void 0 : te.y) || 0) + ft
        };
        if (p.mode === "frame" && t === "cutout") {
          const Pt = He(), Rt = tn(Pt);
          if (!Pt || !Rt) continue;
          const Li = {
            x: J((fn.x - Rt.x) / Math.max(1, Rt.w), 0, 1),
            y: J((fn.y - Rt.y) / Math.max(1, Rt.h), 0, 1)
          }, Kh = Ec(Pt, Li);
          if (!Kh) continue;
          const Bh = Gs(Kh);
          lr(Lt, { yaw_deg: Bh.yaw, pitch_deg: Bh.pitch });
        } else if (p.mode === "unwrap") {
          const Pt = mi(), Rt = J((fn.x - Pt.x) / Math.max(Pt.w, 1), 0, 1), Li = J((fn.y - Pt.y) / Math.max(Pt.h, 1), 0, 1);
          lr(Lt, { yaw_deg: Ht(Rt * 360 - 180), pitch_deg: J(90 - Li * 180, -90, 90) });
        } else {
          const Pt = Sc(fn.x, fn.y), Rt = Gs(Pt);
          lr(Lt, { yaw_deg: Rt.yaw, pitch_deg: Rt.pitch });
        }
        we = !0;
      }
      for (const qe of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const Lt = {
          x: Number(((ae = qe.center) == null ? void 0 : ae.x) || 0) + Te,
          y: Number(((he = qe.center) == null ? void 0 : he.y) || 0) + ft
        }, fn = p.mode === "frame" ? (() => {
          const Rt = He();
          return Rt ? hr(Lt, Rt, performance.now()) : null;
        })() : dr(Lt, performance.now()), Pt = qe.centerUv || null;
        if (fn && Pt) {
          const Rt = qn(Number(fn.u || 0), Number(Pt.u || 0)), Li = Number(fn.v || 0) - Number(Pt.v || 0);
          yd(qe.id, Rt, Li, qe.snapshot, qe.layerKind, qe.frameSnapshot) && (we = !0, Re = !0);
        }
      }
      for (const qe of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const Lt = {
          x: Number(((re = qe.center) == null ? void 0 : re.x) || 0) + Te,
          y: Number(((Se = qe.center) == null ? void 0 : Se.y) || 0) + ft
        }, fn = p.mode === "frame" ? (() => {
          const Rt = He();
          return Rt ? hr(Lt, Rt, performance.now()) : null;
        })() : dr(Lt, performance.now()), Pt = qe.centerUv || null;
        if (fn && Pt) {
          const Rt = qn(Number(fn.u || 0), Number(Pt.u || 0)), Li = Number(fn.v || 0) - Number(Pt.v || 0);
          vd(qe.id, Rt, Li, qe.snapshot) && (we = !0, We = !0);
        }
      }
      we && (Re ? fr({ rebuildPaintEngine: !1 }) : We ? xo() : Wt(), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      bd((Ge = c.item) == null ? void 0 : Ge.actionGroupId, pe, 0, c.snapshot, (Ue = c.item) == null ? void 0 : Ue.layerKind, c.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let ie = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - Number(c.startAng || 0)) * Yi;
      i.shiftKey && (ie = Math.round(ie / 45) * 45), bd((nt = c.item) == null ? void 0 : nt.actionGroupId, 1, ie, c.snapshot, (ye = c.item) == null ? void 0 : ye.layerKind, c.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = s, ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
      lr(c.item, { hFOV_deg: J(c.startHFOV * pe, 1, 179), vFOV_deg: J(c.startVFOV * pe, 1, 179) }), sr(c.item) || (c.item.aspect_id = Ui(c.item)), yt(c.item) && Wt(), ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
      lr(c.item, { hFOV_deg: J(c.startHFOV * pe, 1, 179) }), sr(c.item) || (c.item.aspect_id = Ui(c.item)), yt(c.item) && Wt(), ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
      lr(c.item, { vFOV_deg: J(c.startVFOV * pe, 1, 179) }), sr(c.item) || (c.item.aspect_id = Ui(c.item)), yt(c.item) && Wt(), ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let pe = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - c.startAng) * Yi, we = c.startRot - pe;
      i.shiftKey && (we = Math.round(we / 45) * 45), lr(c.item, { [yt(c.item) ? "rot_deg" : "roll_deg"]: we }), yt(c.item) && Wt(), ue({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var s, c, f, h, m, y, w, k;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        p.interaction = null, mt(p.pointerPos);
        return;
      }
      if (((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
        bo();
        const P = zc(p.interaction), M = !!p.interaction._hasCommittedSegments;
        if (P || M) {
          fr();
          const I = String(((f = p.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (I) {
            const G = hn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === I);
            G && (G.frame = null);
          }
          const T = jn();
          T && (P ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(T), Jd()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, T) : p.paintEngine.cancelActiveStroke(T)), ot(), Fn(), ze(), Xe(), e.setDirtyCanvas(!0, !0), ue();
        } else {
          const I = jn();
          I && p.paintEngine.cancelActiveStroke(I);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const P = Sh(p.interaction.start, p.interaction.current), I = [
          ...t === "cutout" ? Ic().filter((T) => !zn(T)) : [...dn()],
          ...Gy(),
          ...Ky()
        ].filter((T) => gv(P, qt(T)));
        qy(I, ((y = I[I.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && I.length && (p.cutoutAspectOpen = !1), ze(), Xe(), ue();
      } else if (((w = p.interaction) == null ? void 0 : w.kind) === "pan_frame" || ((k = p.interaction) == null ? void 0 : k.kind) === "roll_frame")
        p.interaction.changed && (ot(), lt(), ze());
      else if (p.interaction && p.interaction.kind !== "view") {
        let P = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (P = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (P = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (P = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (P = !0), P && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? fr({ rebuildPaintEngine: !0 }) : xo()), ot(), Fn(), e.setDirtyCanvas(!0, !0), So(), Xe(), ue();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Di(), bo(), i && i.kind === "view" && an.endDrag(performance.now()), Hr(), Xe(), mt(p.pointerPos), ue();
    }
  }, C.onpointercancel = () => {
    var i, s, c;
    if (!_a()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && an.endDrag(performance.now()), ((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
        bo();
        const f = jn();
        f && p.paintEngine.cancelActiveStroke(f);
      }
      p.interaction = null, bo(), Hr(), mt(p.pointerPos), ue({ localOnly: !0 });
    }
  }, C.onlostpointercapture = () => {
    _a();
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.oncontextmenu = (i) => {
    _c() && MM(Fd(), 2) && i.preventDefault();
  }, C.onmousemove = (i) => {
    const s = Ti(i), c = ks(s, !0);
    p.interaction || (mt(s), c && p.mode === "frame" && p.primaryTool === "cursor" && ue({ localOnly: !0 }));
  }, C.onmouseleave = () => {
    ks(p.pointerPos, !1), mt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && ue({ localOnly: !0 });
  }, C.onwheel = (i) => {
    if (p.mode === "frame") {
      const s = Ti(i), c = vl(i);
      c && iv(s, c) && ue({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (p.mode === "pano") {
      if (_c()) {
        const s = vl(i);
        s && wc(DS(ca(), -s, Td()));
      } else an.applyWheelEvent(i) && ue({ localOnly: !0 });
      i.preventDefault();
    }
  }, C.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), _r(!0));
  }, C.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), je.depth = 0, _r(!1);
    const c = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((h) => Or(h));
    c && uh(c);
  };
  const Mh = (i) => {
    t !== "stickers" && t !== "cutout" || r || $n(i) && (je.depth += 1, _r(!0), i.preventDefault());
  }, Nh = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!je.active && $n(i) && _r(!0), je.active && i.preventDefault());
  }, Ph = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !je.active) return;
    je.depth = Math.max(0, je.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (je.depth === 0 || s) && _r(!1);
  }, Ah = (i) => {
    t !== "stickers" && t !== "cutout" || r || (je.depth = 0, _r(!1), $n(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Mh, !0), window.addEventListener("dragover", Nh, !0), window.addEventListener("dragleave", Ph, !0), window.addEventListener("drop", Ah, !0);
  function Gc() {
    const { canUndo: i, canRedo: s } = sh();
    _i(E.toolButtons, "value", "undo", { disabled: !i }), _i(E.toolButtons, "value", "redo", { disabled: !s });
  }
  const Ch = (i, s, c = !1) => {
    var P;
    Jn();
    const f = t === "cutout" && p.mode === "frame" ? He() : null, h = f || Nt(), m = f ? "shot" : fs(), y = S && p.inspectCamera;
    if (!y && (!h || m === "stroke" || kn(h))) return;
    const w = (((P = E.sidePanel) == null ? void 0 : P.params) || []).find((M) => M.key === i);
    if (!w || w.enabled === !1) return;
    let k = Number(s);
    if (Number.isNaN(k) && (k = 0), k = J(k, Number(w.min), Number(w.max)), i === "yaw_deg" && (k = Ht(k)), y) {
      kS(v.camera, p.frame, i, k), ze(), c && ot();
      return;
    }
    i === "opacity" ? MS(h, p.frame, k / 100) : lr(h, { [i]: k }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = Ui(h)), ze(), ue(), c && ot();
  };
  ee == null || ee.addEventListener("click", async (i) => {
    var f, h, m, y, w, k, P;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const c = String(s.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const M = Gn(s.getAttribute("data-coverage"));
      if (M === Gn(v.coverage)) return;
      v.coverage = M, p.coverage = M, d && (d.value = String(M)), a ? Ce.backgroundDirty = !0 : (Fn(), nv({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), Xe(), ue();
      return;
    }
    if (c === "toggle-selection-picker") {
      if ((h = (f = E.sidePanel) == null ? void 0 : f.selectionPicker) != null && h.disabled) return;
      E.sidePanel.selectionPicker.open = !E.sidePanel.selectionPicker.open;
      return;
    }
    if (c === "select-picker-item") {
      E.sidePanel.selectionPicker.open = !1;
      const M = String(s.getAttribute("data-selection-id") || "");
      let I = null;
      if (M && (t === "stickers" ? I = dn().find((T) => String((T == null ? void 0 : T.id) || "") === M) || null : I = ((m = wd().find((T) => {
        var G;
        return String(((G = T == null ? void 0 : T.item) == null ? void 0 : G.id) || "") === M;
      })) == null ? void 0 : m.item) || null), wr(I || null), I && !en(I)) {
        const T = Xt(I);
        Oi(
          Ht(Number(T.yaw_deg || 0)),
          J(Number(T.pitch_deg || 0), -89.9, 89.9),
          p.viewFov
        );
      }
      ze(), Xe(), ue();
      return;
    }
    if (c === "copy-state-inline") {
      const M = Nt(), I = fs();
      if (!M || I === "stroke" || ur().length > 1) return;
      const T = JSON.stringify(t === "cutout" && I !== "image" ? Cd(M) : ub(Xt(M)));
      try {
        await navigator.clipboard.writeText(T), (y = E.sidePanel) != null && y.copyStateButton && (E.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var G;
          (G = E.sidePanel) != null && G.copyStateButton && (E.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (c === "toggle-visibility") {
      const M = String(s.getAttribute("data-visibility") || "");
      M === "panorama" ? p.showPanorama = !p.showPanorama : M === "objects" ? p.showObjects = !p.showObjects : M === "mask" && (p.showMask = !p.showMask), ze(), ue();
      return;
    }
    if (c === "set-invert-x") {
      v.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Rc(), ze(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ue();
      return;
    }
    if (c === "set-invert-y") {
      v.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Rc(), ze(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), ue();
      return;
    }
    if (c === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, Rc(), ze(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), ue();
      return;
    }
    if (c === "close-preview") {
      Po();
      return;
    }
    if (c === "cancel-close") {
      Po();
      return;
    }
    c === "save-close" && (ev(), Po());
  }), ee == null || ee.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Ch(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), ee == null || ee.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Ch(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Kc = () => bc();
  Kc(), D.addEventListener("click", (i) => {
    var w, k, P, M;
    if ((k = (w = i.target) == null ? void 0 : w.matches) != null && k.call(w, "[data-confirm-overlay]")) {
      const I = (P = E.confirmDialog) == null ? void 0 : P.resolve;
      E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, I == null || I(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const I = p.mode;
      p.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (I !== "frame" && (Ce.frameSafeRect = null), ze(), Xe()), Ss(), Hr(), ue();
      return;
    }
    const c = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (c && !r) {
      if (c.matches("[data-tool-mode]")) {
        const I = String(c.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = I, (I === "paint" || I === "mask") && la({ preservePanelValues: !0 }), On(), ze(), Xe(), ue();
        return;
      }
      if (c.matches("[data-tool-ui-action]")) {
        const I = String(c.getAttribute("data-tool-ui-action") || "");
        if ((I === "undo" || I === "redo") && c.disabled) return;
        I === "undo" ? Fc(-1) : I === "redo" ? Fc(1) : I === "clear" ? Y1() : I === "add" || I === "add-image" ? V1() : I === "add-or-look" && B1();
        return;
      }
      if (c.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const I = String(c.getAttribute("data-paint-tool") || "pen");
        p.paintTool = I, la({ preservePanelValues: !0 }), Tn[I] && (p.activeBrushPresetId = I), On(), ze(), Xe(), ue();
        return;
      }
      if (c.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(c.getAttribute("data-mask-tool") || "pen"), la({ preservePanelValues: !0 }), On(), ze(), Xe(), ue();
        return;
      }
      if (c.matches("[data-paint-layer-clear-current]")) {
        const I = String(c.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        X1(I);
        return;
      }
      if (c.matches("[data-paint-color-swatch]")) {
        const I = ll.find((T) => T.id === c.getAttribute("data-paint-color-swatch"));
        if (!I) return;
        p.paintColor = Hn(I.color), Ve(!0), On();
        return;
      }
      if (c.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), q && !q.hidden ? Ve(!0) : Ee(), On();
        return;
      }
    }
    const f = String(((M = c == null ? void 0 : c.getAttribute) == null ? void 0 : M.call(c, "data-action")) || "");
    if (f === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      Ae.resumeAfterScrub = !1, Dc();
      return;
    }
    if (f === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), kd(), typeof (c == null ? void 0 : c.blur) == "function" && c.blur();
      return;
    }
    if (f === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      const I = !E.videoTransport.loop;
      E.videoTransport.loop = I, Y.loop = I, di({
        hasAudio: E.videoTransport.hasAudio,
        loop: I,
        muted: Y.muted,
        volume: Number(Y.volume ?? E.videoTransport.volume ?? 1)
      }), typeof (c == null ? void 0 : c.blur) == "function" && c.blur();
      return;
    }
    if (!r) {
      if (f === "frame-aspect") {
        E.frameRail.aspectOpen = !E.frameRail.aspectOpen;
        return;
      }
      if (f === "frame-aspect-set") {
        const I = p.mode === "frame" ? He() : null;
        if (!I || I.locked === !0) return;
        hh(I, String(c.getAttribute("data-aspect") || "1:1")), E.frameRail.aspectOpen = !1, So(), ot(), lt(), Hr(), ue();
        return;
      }
      if (f === "frame-aspect-custom") {
        const I = p.mode === "frame" ? He() : null, T = c.getAttribute("data-custom-width"), G = c.getAttribute("data-custom-height");
        if (!I || !J1(I, T, G)) return;
        E.frameRail.aspectOpen = !1, So(), ot(), lt(), Hr(), ue();
        return;
      }
      if (f === "frame-rotate-90") {
        const I = p.mode === "frame" ? He() : null;
        if (!I || I.locked === !0) return;
        ph(I), E.frameRail.aspectOpen = !1, So(), ot(), lt(), Hr(), ue();
        return;
      }
      if (f === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Xe(), ue();
        return;
      }
      if (f === "aspect-set") {
        const I = Nt();
        if (!I) return;
        const T = String(c.getAttribute("data-aspect") || "1:1");
        hh(I, T), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, So(), ot(), lt(), Xe(), ue();
        return;
      }
      if (f === "rotate-90") {
        const I = Nt();
        if (!I) return;
        ph(I), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, So(), ot(), lt(), Xe(), ue();
        return;
      }
      if (f === "bring-front") {
        Z1();
        return;
      }
      if (f === "send-back") {
        Q1();
        return;
      }
      if (f === "duplicate") {
        q1();
        return;
      }
      if (f === "replace-image") {
        H1();
        return;
      }
      if (f === "toggle-lock") {
        Xy();
        return;
      }
      if (f === "back-initial") {
        nb();
        return;
      }
      if (f === "toggle-visible") {
        tb();
        return;
      }
      if (f === "delete") {
        dh();
        return;
      }
    }
    if (f === "reset-view") {
      if (p.mode === "frame") return;
      Oi(0, 0, 100, 180, 680), p.viewPosition = [0, 0, 0], p.viewMoved = !1;
      return;
    }
    if (f === "frame-view") {
      vb();
      return;
    }
    if (f === "space-mode") {
      bb(p.spaceMode === "6dof" ? "3dof" : "6dof");
      return;
    }
    if (f === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, OC(e == null ? void 0 : e.id, p.showGrid), Kc(), ue();
      return;
    }
    if (f === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), kv();
      return;
    }
    if (f === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const I = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = I, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = I ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Th(), ue();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), y = p.customPaintHistory[m];
    y && (p.customPaintColor = Hn(y), p.paintColor = Hn(y), On());
  }), D.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Y instanceof HTMLVideoElement)) return;
      kt.playing && (Ae.resumeAfterScrub = !0), kt.seek(Bi(Number(s.value || 0), hs()));
      return;
    }
    const c = i.target.closest("[data-video-volume]");
    if (c) {
      if (!(Y instanceof HTMLVideoElement)) return;
      const m = J(Number(c.value || 0), 0, 1);
      Y.volume = m, Y.muted = m <= 1e-4, di({
        hasAudio: E.videoTransport.hasAudio,
        muted: Y.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), y = bi(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[y] = m, On(), cv();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: J(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = Hn(m), p.paintColor = Hn(m), On();
    }
  }), D.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Y instanceof HTMLVideoElement)) return;
      Ae.resumeAfterScrub && kt.play(), Ae.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ms();
  }), D.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ms();
  }), D.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ms();
  }), D.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Ms();
  }), D.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !D.contains(s) || Oe.target !== s && (Oe.target = s, Oe.timer && clearTimeout(Oe.timer), Oe.timer = window.setTimeout(() => {
      Oe.target === s && yv(s);
    }, 220));
  }), D.addEventListener("pointerout", (i) => {
    var f, h;
    const s = i.target.closest("[data-tip]");
    !s || Oe.target !== s || (i.relatedTarget instanceof Element ? (h = (f = i.relatedTarget).closest) == null ? void 0 : h.call(f, "[data-tip]") : null) === s || Di();
  }), D.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Di();
  });
  const xv = (i, s) => {
    var w;
    if (!be) return;
    const c = be.getBoundingClientRect(), f = J((i - c.left) / Math.max(1, c.width), 0, 1), h = 1 - J((s - c.top) / Math.max(1, c.height), 0, 1), m = Ou(p.customPaintColor), y = { ...Eu(m.h, f, h), a: Number(((w = p.customPaintColor) == null ? void 0 : w.a) ?? 1) };
    p.customPaintColor = Hn(y), p.paintColor = Hn(y), On();
  }, Sv = (i) => {
    var m;
    if (!ge) return;
    const s = ge.getBoundingClientRect(), c = J((i - s.left) / Math.max(1, s.width), 0, 1), f = Ou(p.customPaintColor), h = { ...Eu(c, f.s, f.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = Hn(h), p.paintColor = Hn(h), On();
  }, Ih = (i, s) => {
    const c = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === c && s(m);
    }, h = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  be && (be.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Ih(i, (s) => xv(s.clientX, s.clientY));
  }), ge && (ge.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Ih(i, (s) => Sv(s.clientX));
  }), D.addEventListener("click", (i) => {
    var h;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const c = s.getAttribute("data-action") === "confirm-accept", f = (h = E.confirmDialog) == null ? void 0 : h.resolve;
    E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(c);
  });
  const Eh = () => {
    const i = !!p.fullscreen;
    _i(E.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Pe.fullscreen_close : Pe.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ns = (i) => {
    const s = !!i;
    p.fullscreen !== s && (p.fullscreen = s, D.classList.toggle("pano-modal-fullscreen", s), s ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), Kc(), Eh(), Yt(), ue());
  }, Oh = () => document.fullscreenElement === _e, kv = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Ns(!p.fullscreen);
        return;
      }
      Oh() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = _e.requestFullscreen) == null ? void 0 : i.call(_e));
    } catch {
      Ns(!p.fullscreen);
    }
  }, Fh = () => {
    document.fullscreenEnabled && Ns(Oh());
  };
  document.addEventListener("fullscreenchange", Fh), Eh();
  const Th = () => {
    const i = !!p.outputPreviewExpanded;
    E.outputPreviewToggle.icon = i ? Pe.fullscreen_close : Pe.fullscreen, E.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", E.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Th();
  const Bc = e.onConnectionsChange;
  let Wc = null, Dh = () => {
  };
  !r && t === "stickers" && (Dh = yy(e, (i = "sync") => {
    i === "executed" && (bC(Be, zs), hi(), S && L1()), Id(i);
  }, { editor: !0 }), Wc = function(...s) {
    typeof Bc == "function" && Bc.apply(this, s), hi(), ni(this, "connections");
  }, e.onConnectionsChange = Wc), r || Om.set(String(e.id ?? "0"), () => Vd());
  let No = null;
  const Po = async () => No || (No = (async () => {
    var i, s, c, f, h, m, y, w;
    return Om.delete(String(e.id ?? "0")), ov(), r || Fn(), document.fullscreenElement === _e && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Fh), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === gh && (e.__panoFlushStateBeforeQueue = null), (c = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || c.call(s), (h = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), (w = (y = (m = mr) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || w.call(y, !0, !0), Di(), E1(), Y instanceof HTMLVideoElement && Y.pause(), gt.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), $t.dispose(), _r(!1), window.removeEventListener("keydown", Lh, !0), window.removeEventListener("keydown", Rh, !0), window.removeEventListener("keydown", $h, !0), window.removeEventListener("keyup", zh, !0), window.removeEventListener("keydown", Ps, !0), window.removeEventListener("keyup", Ps, !0), window.removeEventListener("blur", jh), window.removeEventListener("keydown", Hh, !0), window.removeEventListener("dragenter", Mh, !0), window.removeEventListener("dragover", Nh, !0), window.removeEventListener("dragleave", Ph, !0), window.removeEventListener("drop", Ah, !0), !r && t === "stickers" && (e.onConnectionsChange === Wc && (e.onConnectionsChange = Bc), Dh()), H.unmount(), R.remove(), tv(), No = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), No = null, !1)), No), Lh = (i) => {
    var s, c, f, h, m;
    if (i.key === "Escape") {
      if (_a()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === _e) {
        i.preventDefault(), i.stopPropagation(), (c = i.stopImmediatePropagation) == null || c.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), Ns(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Po();
    }
  }, Rh = (i) => {
    const s = String(i.key || ""), c = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || c === "Delete" || f === 46) && !(s === "Backspace" || c === "Backspace" || f === 8)) return;
    const y = i.target, w = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || y != null && y.isContentEditable) return;
    if (Le.selection) {
      D1(), i.preventDefault(), i.stopPropagation();
      return;
    }
    Nt() && (dh(), i.preventDefault(), i.stopPropagation());
  }, Vh = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !S || !E.timeline.visible || E.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !_e.contains(s)) return !1;
    const c = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return c === "INPUT" ? !rC.has(String(s.type || "text").toLowerCase()) : c !== "TEXTAREA" && c !== "SELECT" && !(s != null && s.isContentEditable);
  }, $h = (i) => {
    Vh(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Dc());
  }, zh = (i) => {
    Vh(i) && (i.preventDefault(), i.stopPropagation());
  }, Ps = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), c = !!i.altKey;
    p.marqueeModifier === s && p.altModifier === c || (p.marqueeModifier = s, p.altModifier = c, Kr(), mt(p.pointerPos));
  }, jh = () => {
    p.marqueeModifier = !1, p.altModifier = !1, Kr(), mt(p.pointerPos);
  }, Hh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (s !== "z" && c !== "KeyZ") return;
    const f = i.target, h = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: y } = sh();
    i.shiftKey && !y || !i.shiftKey && !m || (Fc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Lh, !0), window.addEventListener("keydown", Rh, !0), window.addEventListener("keydown", $h, !0), window.addEventListener("keyup", zh, !0), window.addEventListener("keydown", Ps, !0), window.addEventListener("keyup", Ps, !0), window.addEventListener("blur", jh), window.addEventListener("keydown", Hh, !0), _e.addEventListener("pointerdown", (i) => {
    i.target === _e && Po();
  });
  function xr(i, s, { rollbackState: c = !1 } = {}) {
    let f = "";
    try {
      c && (f = JSON.stringify(v)), s();
    } catch (h) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(v).forEach((y) => delete v[y]), Object.assign(v, m), r || Fn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      E.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, h);
    }
  }
  xr("cutout-focus", mb), !r && t === "stickers" && xr("external-sticker-sync", () => Id("open"), { rollbackState: !0 }), G1().catch((i) => {
    E.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), xr("history", ot), xr("undo-redo", Gc), xr("paint-ui", On), xr("side-panel", ze), xr("look-at-frame", yc), xr("video-source", hi), xr("canvas-size", rh), xr("cursor", () => mt(p.pointerPos)), ue(), Ce.rafId = requestAnimationFrame(oh);
}
mr.registerExtension(DM({
  app: mr,
  openEditor: VC,
  attachStickers: XN,
  attachCutout: qN,
  attachPreview: YN,
  restoreOutput: DN,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: lC
}));
