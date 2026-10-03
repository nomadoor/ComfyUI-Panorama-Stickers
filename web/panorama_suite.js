import * as Us from "../../scripts/app.js";
import { app as Or } from "../../scripts/app.js";
import { api as Ht } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function mf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = {}, jo = [], Fr = () => {
}, Cm = () => !1, zl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), jl = (e) => e.startsWith("onUpdate:"), wn = Object.assign, gf = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, pv = Object.prototype.hasOwnProperty, ht = (e, t) => pv.call(e, t), Je = Array.isArray, Ho = (e) => ts(e) === "[object Map]", Im = (e) => ts(e) === "[object Set]", Gh = (e) => ts(e) === "[object Date]", et = (e) => typeof e == "function", Ut = (e) => typeof e == "string", Tr = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", Em = (e) => (vt(e) || et(e)) && et(e.then) && et(e.catch), Om = Object.prototype.toString, ts = (e) => Om.call(e), mv = (e) => ts(e).slice(8, -1), Fm = (e) => ts(e) === "[object Object]", yf = (e) => Ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, La = /* @__PURE__ */ mf(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Hl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, gv = /-\w/g, An = Hl(
  (e) => e.replace(gv, (t) => t.slice(1).toUpperCase())
), yv = /\B([A-Z])/g, lo = Hl(
  (e) => e.replace(yv, "-$1").toLowerCase()
), Gl = Hl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kc = Hl(
  (e) => e ? `on${Gl(e)}` : ""
), Cr = (e, t) => !Object.is(e, t), Ys = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Tm = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, bf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Kh;
const Kl = () => Kh || (Kh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wt(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Ut(r) ? wv(r) : wt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (Ut(e) || vt(e))
    return e;
}
const bv = /;(?![^(]*\))/g, vv = /:([^]+)/, _v = /\/\*[^]*?\*\//g;
function wv(e) {
  const t = {};
  return e.replace(_v, "").split(bv).forEach((n) => {
    if (n) {
      const r = n.split(vv);
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
const xv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Sv = /* @__PURE__ */ mf(xv);
function Dm(e) {
  return !!e || e === "";
}
function kv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = vf(e[r], t[r]);
  return n;
}
function vf(e, t) {
  if (e === t) return !0;
  let n = Gh(e), r = Gh(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Tr(e), r = Tr(t), n || r)
    return e === t;
  if (n = Je(e), r = Je(t), n || r)
    return n && r ? kv(e, t) : !1;
  if (n = vt(e), r = vt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const l in e) {
      const u = e.hasOwnProperty(l), d = t.hasOwnProperty(l);
      if (u && !d || !u && d || !vf(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Lm = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Ut(e) ? e : e == null ? "" : Je(e) || vt(e) && (e.toString === Om || !et(e.toString)) ? Lm(e) ? rt(e.value) : JSON.stringify(e, Rm, 2) : String(e), Rm = (e, t) => Lm(t) ? Rm(e, t.value) : Ho(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Bc(r, a) + " =>"] = o, n),
    {}
  )
} : Im(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Bc(n))
} : Tr(t) ? Bc(t) : vt(t) && !Je(t) && !Fm(t) ? String(t) : t, Bc = (e, t = "") => {
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
class Mv {
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
function Nv() {
  return Rn;
}
let Mt;
const Wc = /* @__PURE__ */ new WeakSet();
class $m {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Rn && Rn.active && Rn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Wc.has(this) && (Wc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zm(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bh(this), jm(this);
    const t = Mt, n = mr;
    Mt = this, mr = !0;
    try {
      return this.fn();
    } finally {
      Hm(this), Mt = t, mr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        xf(t);
      this.deps = this.depsTail = void 0, Bh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Iu(this) && this.run();
  }
  get dirty() {
    return Iu(this);
  }
}
let Vm = 0, Ra, $a;
function zm(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $a, $a = e;
    return;
  }
  e.next = Ra, Ra = e;
}
function _f() {
  Vm++;
}
function wf() {
  if (--Vm > 0)
    return;
  if ($a) {
    let t = $a;
    for ($a = void 0; t; ) {
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
function jm(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hm(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), xf(r), Pv(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Iu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Gm(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Gm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ka) || (e.globalVersion = Ka, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Iu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Mt, r = mr;
  Mt = e, mr = !0;
  try {
    jm(e);
    const o = e.fn(e._value);
    (t.version === 0 || Cr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Mt = n, mr = r, Hm(e), e.flags &= -3;
  }
}
function xf(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      xf(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Pv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let mr = !0;
const Km = [];
function ii() {
  Km.push(mr), mr = !1;
}
function oi() {
  const e = Km.pop();
  mr = e === void 0 ? !0 : e;
}
function Bh(e) {
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
class Av {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Sf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Mt || !mr || Mt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Mt)
      n = this.activeLink = new Av(Mt, this), Mt.deps ? (n.prevDep = Mt.depsTail, Mt.depsTail.nextDep = n, Mt.depsTail = n) : Mt.deps = Mt.depsTail = n, Bm(n);
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
    _f();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      wf();
    }
  }
}
function Bm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Bm(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Eu = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ Symbol(
  ""
), Ou = /* @__PURE__ */ Symbol(
  ""
), Ba = /* @__PURE__ */ Symbol(
  ""
);
function yn(e, t, n) {
  if (mr && Mt) {
    let r = Eu.get(e);
    r || Eu.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Sf()), o.map = r, o.key = n), o.track();
  }
}
function Qr(e, t, n, r, o, a) {
  const l = Eu.get(e);
  if (!l) {
    Ka++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (_f(), t === "clear")
    l.forEach(u);
  else {
    const d = Je(e), b = d && yf(n);
    if (d && n === "length") {
      const g = Number(r);
      l.forEach((w, x) => {
        (x === "length" || x === Ba || !Tr(x) && x >= g) && u(w);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && u(l.get(n)), b && u(l.get(Ba)), t) {
        case "add":
          d ? b && u(l.get("length")) : (u(l.get(Ji)), Ho(e) && u(l.get(Ou)));
          break;
        case "delete":
          d || (u(l.get(Ji)), Ho(e) && u(l.get(Ou)));
          break;
        case "set":
          Ho(e) && u(l.get(Ji));
          break;
      }
  }
  wf();
}
function Co(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (yn(t, "iterate", Ba), /* @__PURE__ */ rr(e) ? t : t.map(gr));
}
function Bl(e) {
  return yn(e = /* @__PURE__ */ dt(e), "iterate", Ba), e;
}
function Pr(e, t) {
  return /* @__PURE__ */ ai(e) ? Zo(/* @__PURE__ */ Zi(e) ? gr(t) : t) : gr(t);
}
const Cv = {
  __proto__: null,
  [Symbol.iterator]() {
    return Uc(this, Symbol.iterator, (e) => Pr(this, e));
  },
  concat(...e) {
    return Co(this).concat(
      ...e.map((t) => Je(t) ? Co(t) : t)
    );
  },
  entries() {
    return Uc(this, "entries", (e) => (e[1] = Pr(this, e[1]), e));
  },
  every(e, t) {
    return Br(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Br(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Pr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Br(
      this,
      "find",
      e,
      t,
      (n) => Pr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Br(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Br(
      this,
      "findLast",
      e,
      t,
      (n) => Pr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Br(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Br(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Yc(this, "includes", e);
  },
  indexOf(...e) {
    return Yc(this, "indexOf", e);
  },
  join(e) {
    return Co(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Yc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Br(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xa(this, "pop");
  },
  push(...e) {
    return xa(this, "push", e);
  },
  reduce(e, ...t) {
    return Wh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Wh(this, "reduceRight", e, t);
  },
  shift() {
    return xa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Br(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xa(this, "splice", e);
  },
  toReversed() {
    return Co(this).toReversed();
  },
  toSorted(e) {
    return Co(this).toSorted(e);
  },
  toSpliced(...e) {
    return Co(this).toSpliced(...e);
  },
  unshift(...e) {
    return xa(this, "unshift", e);
  },
  values() {
    return Uc(this, "values", (e) => Pr(this, e));
  }
};
function Uc(e, t, n) {
  const r = Bl(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ rr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const Iv = Array.prototype;
function Br(e, t, n, r, o, a) {
  const l = Bl(e), u = l !== e && !/* @__PURE__ */ rr(e), d = l[t];
  if (d !== Iv[t]) {
    const w = d.apply(e, a);
    return u ? gr(w) : w;
  }
  let b = n;
  l !== e && (u ? b = function(w, x) {
    return n.call(this, Pr(e, w), x, e);
  } : n.length > 2 && (b = function(w, x) {
    return n.call(this, w, x, e);
  }));
  const g = d.call(l, b, r);
  return u && o ? o(g) : g;
}
function Wh(e, t, n, r) {
  const o = Bl(e), a = o !== e && !/* @__PURE__ */ rr(e);
  let l = n, u = !1;
  o !== e && (a ? (u = r.length === 0, l = function(b, g, w) {
    return u && (u = !1, b = Pr(e, b)), n.call(this, b, Pr(e, g), w, e);
  }) : n.length > 3 && (l = function(b, g, w) {
    return n.call(this, b, g, w, e);
  }));
  const d = o[t](l, ...r);
  return u ? Pr(e, d) : d;
}
function Yc(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  yn(r, "iterate", Ba);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Nf(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : o;
}
function xa(e, t, n = []) {
  ii(), _f();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return wf(), oi(), r;
}
const Ev = /* @__PURE__ */ mf("__proto__,__v_isRef,__isVue"), Wm = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Tr)
);
function Ov(e) {
  Tr(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return yn(t, "has", e), t.hasOwnProperty(e);
}
class Um {
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
      return r === (o ? a ? Hv : Jm : a ? qm : Xm).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const l = Je(t);
    if (!o) {
      let d;
      if (l && (d = Cv[n]))
        return d;
      if (n === "hasOwnProperty")
        return Ov;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ vn(t) ? t : r
    );
    if ((Tr(n) ? Wm.has(n) : Ev(n)) || (o || yn(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ vn(u)) {
      const d = l && yf(n) ? u : u.value;
      return o && vt(d) ? /* @__PURE__ */ Tu(d) : d;
    }
    return vt(u) ? o ? /* @__PURE__ */ Tu(u) : /* @__PURE__ */ ia(u) : u;
  }
}
class Ym extends Um {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const l = Je(t) && yf(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ ai(a);
      if (!/* @__PURE__ */ rr(r) && !/* @__PURE__ */ ai(r) && (a = /* @__PURE__ */ dt(a), r = /* @__PURE__ */ dt(r)), !l && /* @__PURE__ */ vn(a) && !/* @__PURE__ */ vn(r))
        return b || (a.value = r), !0;
    }
    const u = l ? Number(n) < t.length : ht(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ vn(t) ? t : o
    );
    return t === /* @__PURE__ */ dt(o) && (u ? Cr(r, a) && Qr(t, "set", n, r) : Qr(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Qr(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Tr(n) || !Wm.has(n)) && yn(t, "has", n), r;
  }
  ownKeys(t) {
    return yn(
      t,
      "iterate",
      Je(t) ? "length" : Ji
    ), Reflect.ownKeys(t);
  }
}
class Fv extends Um {
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
const Tv = /* @__PURE__ */ new Ym(), Dv = /* @__PURE__ */ new Fv(), Lv = /* @__PURE__ */ new Ym(!0);
const Fu = (e) => e, As = (e) => Reflect.getPrototypeOf(e);
function Rv(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ dt(o), l = Ho(a), u = e === "entries" || e === Symbol.iterator && l, d = e === "keys" && l, b = o[e](...r), g = n ? Fu : t ? Zo : gr;
    return !t && yn(
      a,
      "iterate",
      d ? Ou : Ji
    ), wn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: w, done: x } = b.next();
          return x ? { value: w, done: x } : {
            value: u ? [g(w[0]), g(w[1])] : g(w),
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
function $v(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ dt(a), u = /* @__PURE__ */ dt(o);
      e || (Cr(o, u) && yn(l, "get", o), yn(l, "get", u));
      const { has: d } = As(l), b = t ? Fu : e ? Zo : gr;
      if (d.call(l, o))
        return b(a.get(o));
      if (d.call(l, u))
        return b(a.get(u));
      a !== l && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && yn(/* @__PURE__ */ dt(o), "iterate", Ji), o.size;
    },
    has(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ dt(a), u = /* @__PURE__ */ dt(o);
      return e || (Cr(o, u) && yn(l, "has", o), yn(l, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const l = this, u = l.__v_raw, d = /* @__PURE__ */ dt(u), b = t ? Fu : e ? Zo : gr;
      return !e && yn(d, "iterate", Ji), u.forEach((g, w) => o.call(a, b(g), b(w), l));
    }
  };
  return wn(
    n,
    e ? {
      add: Cs("add"),
      set: Cs("set"),
      delete: Cs("delete"),
      clear: Cs("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ dt(this), l = As(a), u = /* @__PURE__ */ dt(o), d = !t && !/* @__PURE__ */ rr(o) && !/* @__PURE__ */ ai(o) ? u : o;
        return l.has.call(a, d) || Cr(o, d) && l.has.call(a, o) || Cr(u, d) && l.has.call(a, u) || (a.add(d), Qr(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ rr(a) && !/* @__PURE__ */ ai(a) && (a = /* @__PURE__ */ dt(a));
        const l = /* @__PURE__ */ dt(this), { has: u, get: d } = As(l);
        let b = u.call(l, o);
        b || (o = /* @__PURE__ */ dt(o), b = u.call(l, o));
        const g = d.call(l, o);
        return l.set(o, a), b ? Cr(a, g) && Qr(l, "set", o, a) : Qr(l, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ dt(this), { has: l, get: u } = As(a);
        let d = l.call(a, o);
        d || (o = /* @__PURE__ */ dt(o), d = l.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && Qr(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ dt(this), a = o.size !== 0, l = o.clear();
        return a && Qr(
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
    n[o] = Rv(o, e, t);
  }), n;
}
function kf(e, t) {
  const n = $v(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ht(n, o) && o in r ? n : r,
    o,
    a
  );
}
const Vv = {
  get: /* @__PURE__ */ kf(!1, !1)
}, zv = {
  get: /* @__PURE__ */ kf(!1, !0)
}, jv = {
  get: /* @__PURE__ */ kf(!0, !1)
};
const Xm = /* @__PURE__ */ new WeakMap(), qm = /* @__PURE__ */ new WeakMap(), Jm = /* @__PURE__ */ new WeakMap(), Hv = /* @__PURE__ */ new WeakMap();
function Gv(e) {
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
function Kv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gv(mv(e));
}
// @__NO_SIDE_EFFECTS__
function ia(e) {
  return /* @__PURE__ */ ai(e) ? e : Mf(
    e,
    !1,
    Tv,
    Vv,
    Xm
  );
}
// @__NO_SIDE_EFFECTS__
function Bv(e) {
  return Mf(
    e,
    !1,
    Lv,
    zv,
    qm
  );
}
// @__NO_SIDE_EFFECTS__
function Tu(e) {
  return Mf(
    e,
    !0,
    Dv,
    jv,
    Jm
  );
}
function Mf(e, t, n, r, o) {
  if (!vt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = Kv(e);
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
  return /* @__PURE__ */ ai(e) ? /* @__PURE__ */ Zi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Nf(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function Wv(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && Tm(e, "__v_skip", !0), e;
}
const gr = (e) => vt(e) ? /* @__PURE__ */ ia(e) : e, Zo = (e) => vt(e) ? /* @__PURE__ */ Tu(e) : e;
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return Uv(e, !1);
}
function Uv(e, t) {
  return /* @__PURE__ */ vn(e) ? e : new Yv(e, t);
}
class Yv {
  constructor(t, n) {
    this.dep = new Sf(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : gr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ rr(t) || /* @__PURE__ */ ai(t);
    t = r ? t : /* @__PURE__ */ dt(t), Cr(t, n) && (this._rawValue = t, this._value = r ? t : gr(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ vn(e) ? e.value : e;
}
const Xv = {
  get: (e, t, n) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ vn(o) && !/* @__PURE__ */ vn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Zm(e) {
  return /* @__PURE__ */ Zi(e) ? e : new Proxy(e, Xv);
}
class qv {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Sf(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ka - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Mt !== this)
      return zm(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Gm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Jv(e, t, n = !1) {
  let r, o;
  return et(e) ? r = e : (r = e.get, o = e.set), new qv(r, o, n);
}
const Is = {}, fl = /* @__PURE__ */ new WeakMap();
let Ki;
function Zv(e, t = !1, n = Ki) {
  if (n) {
    let r = fl.get(n);
    r || fl.set(n, r = []), r.push(e);
  }
}
function Qv(e, t, n = _t) {
  const { immediate: r, deep: o, once: a, scheduler: l, augmentJob: u, call: d } = n, b = (R) => o ? R : /* @__PURE__ */ rr(R) || o === !1 || o === 0 ? ei(R, 1) : ei(R);
  let g, w, x, M, S = !1, v = !1;
  if (/* @__PURE__ */ vn(e) ? (w = () => e.value, S = /* @__PURE__ */ rr(e)) : /* @__PURE__ */ Zi(e) ? (w = () => b(e), S = !0) : Je(e) ? (v = !0, S = e.some((R) => /* @__PURE__ */ Zi(R) || /* @__PURE__ */ rr(R)), w = () => e.map((R) => {
    if (/* @__PURE__ */ vn(R))
      return R.value;
    if (/* @__PURE__ */ Zi(R))
      return b(R);
    if (et(R))
      return d ? d(R, 2) : R();
  })) : et(e) ? t ? w = d ? () => d(e, 2) : e : w = () => {
    if (x) {
      ii();
      try {
        x();
      } finally {
        oi();
      }
    }
    const R = Ki;
    Ki = g;
    try {
      return d ? d(e, 3, [M]) : e(M);
    } finally {
      Ki = R;
    }
  } : w = Fr, t && o) {
    const R = w, O = o === !0 ? 1 / 0 : o;
    w = () => ei(R(), O);
  }
  const F = Nv(), V = () => {
    g.stop(), F && F.active && gf(F.effects, g);
  };
  if (a && t) {
    const R = t;
    t = (...O) => {
      R(...O), V();
    };
  }
  let G = v ? new Array(e.length).fill(Is) : Is;
  const E = (R) => {
    if (!(!(g.flags & 1) || !g.dirty && !R))
      if (t) {
        const O = g.run();
        if (o || S || (v ? O.some(($, H) => Cr($, G[H])) : Cr(O, G))) {
          x && x();
          const $ = Ki;
          Ki = g;
          try {
            const H = [
              O,
              // pass undefined as the old value when it's changed for the first time
              G === Is ? void 0 : v && G[0] === Is ? [] : G,
              M
            ];
            G = O, d ? d(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            Ki = $;
          }
        }
      } else
        g.run();
  };
  return u && u(E), g = new $m(w), g.scheduler = l ? () => l(E, !1) : E, M = (R) => Zv(R, !1, g), x = g.onStop = () => {
    const R = fl.get(g);
    if (R) {
      if (d)
        d(R, 4);
      else
        for (const O of R) O();
      fl.delete(g);
    }
  }, t ? r ? E(!0) : G = g.run() : l ? l(E.bind(null, !0), !0) : g.run(), V.pause = g.pause.bind(g), V.resume = g.resume.bind(g), V.stop = V, V;
}
function ei(e, t = 1 / 0, n) {
  if (t <= 0 || !vt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ vn(e))
    ei(e.value, t, n);
  else if (Je(e))
    for (let r = 0; r < e.length; r++)
      ei(e[r], t, n);
  else if (Im(e) || Ho(e))
    e.forEach((r) => {
      ei(r, t, n);
    });
  else if (Fm(e)) {
    for (const r in e)
      ei(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ei(e[r], t, n);
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
    return o && Em(o) && o.catch((a) => {
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
        for (let w = 0; w < g.length; w++)
          if (g[w](e, d, b) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      ii(), ns(a, null, 10, [
        e,
        d,
        b
      ]), oi();
      return;
    }
  }
  e_(e, n, o, r, l);
}
function e_(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Nn = [];
let Nr = -1;
const Go = [];
let _i = null, To = 0;
const Qm = /* @__PURE__ */ Promise.resolve();
let dl = null;
function Ul(e) {
  const t = dl || Qm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function t_(e) {
  let t = Nr + 1, n = Nn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Nn[r], a = Wa(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Pf(e) {
  if (!(e.flags & 1)) {
    const t = Wa(e), n = Nn[Nn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wa(n) ? Nn.push(e) : Nn.splice(t_(t), 0, e), e.flags |= 1, eg();
  }
}
function eg() {
  dl || (dl = Qm.then(ng));
}
function n_(e) {
  Je(e) ? Go.push(...e) : _i && e.id === -1 ? _i.splice(To + 1, 0, e) : e.flags & 1 || (Go.push(e), e.flags |= 1), eg();
}
function Uh(e, t, n = Nr + 1) {
  for (; n < Nn.length; n++) {
    const r = Nn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Nn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function tg(e) {
  if (Go.length) {
    const t = [...new Set(Go)].sort(
      (n, r) => Wa(n) - Wa(r)
    );
    if (Go.length = 0, _i) {
      _i.push(...t);
      return;
    }
    for (_i = t, To = 0; To < _i.length; To++) {
      const n = _i[To];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    _i = null, To = 0;
  }
}
const Wa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ng(e) {
  try {
    for (Nr = 0; Nr < Nn.length; Nr++) {
      const t = Nn[Nr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ns(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nr < Nn.length; Nr++) {
      const t = Nn[Nr];
      t && (t.flags &= -2);
    }
    Nr = -1, Nn.length = 0, tg(), dl = null, (Nn.length || Go.length) && ng();
  }
}
let Wn = null, rg = null;
function hl(e) {
  const t = Wn;
  return Wn = e, rg = e && e.type.__scopeId || null, t;
}
function ig(e, t = Wn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && op(-1);
    const a = hl(t);
    let l;
    try {
      l = e(...o);
    } finally {
      hl(a), r._d && op(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ri(e, t) {
  if (Wn === null)
    return e;
  const n = Zl(Wn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, l, u, d = _t] = t[o];
    a && (et(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && ei(l), r.push({
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
function Li(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    a && (u.oldValue = a[l].value);
    let d = u.dir[r];
    d && (ii(), Dr(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), oi());
  }
}
function r_(e, t) {
  if (bn) {
    let n = bn.provides;
    const r = bn.parent && bn.parent.provides;
    r === n && (n = bn.provides = Object.create(r)), n[e] = t;
  }
}
function Xs(e, t, n = !1) {
  const r = tw();
  if (r || Ko) {
    let o = Ko ? Ko._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && et(t) ? t.call(r && r.proxy) : t;
  }
}
const i_ = /* @__PURE__ */ Symbol.for("v-scx"), o_ = () => Xs(i_);
function Qi(e, t, n) {
  return og(e, t, n);
}
function og(e, t, n = _t) {
  const { immediate: r, deep: o, flush: a, once: l } = n, u = wn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Ya) {
    if (a === "sync") {
      const M = o_();
      b = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!d) {
      const M = () => {
      };
      return M.stop = Fr, M.resume = Fr, M.pause = Fr, M;
    }
  }
  const g = bn;
  u.call = (M, S, v) => Dr(M, g, S, v);
  let w = !1;
  a === "post" ? u.scheduler = (M) => {
    Ln(M, g && g.suspense);
  } : a !== "sync" && (w = !0, u.scheduler = (M, S) => {
    S ? M() : Pf(M);
  }), u.augmentJob = (M) => {
    t && (M.flags |= 4), w && (M.flags |= 2, g && (M.id = g.uid, M.i = g));
  };
  const x = Qv(e, t, u);
  return Ya && (b ? b.push(x) : d && x()), x;
}
function a_(e, t, n) {
  const r = this.proxy, o = Ut(e) ? e.includes(".") ? ag(r, e) : () => r[e] : e.bind(r, r);
  let a;
  et(t) ? a = t : (a = t.handler, n = t);
  const l = is(this), u = og(o, a.bind(r), n);
  return l(), u;
}
function ag(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const s_ = /* @__PURE__ */ Symbol("_vte"), l_ = (e) => e.__isTeleport, c_ = /* @__PURE__ */ Symbol("_leaveCb");
function Af(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Af(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function sg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Yh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const pl = /* @__PURE__ */ new WeakMap();
function Va(e, t, n, r, o = !1) {
  if (Je(e)) {
    e.forEach(
      (v, F) => Va(
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
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Va(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Zl(r.component) : r.el, l = o ? null : a, { i: u, r: d } = e, b = t && t.r, g = u.refs === _t ? u.refs = {} : u.refs, w = u.setupState, x = /* @__PURE__ */ dt(w), M = w === _t ? Cm : (v) => Yh(g, v) ? !1 : ht(x, v), S = (v, F) => !(F && Yh(g, F));
  if (b != null && b !== d) {
    if (Xh(t), Ut(b))
      g[b] = null, M(b) && (w[b] = null);
    else if (/* @__PURE__ */ vn(b)) {
      const v = t;
      S(b, v.k) && (b.value = null), v.k && (g[v.k] = null);
    }
  }
  if (et(d))
    ns(d, u, 12, [l, g]);
  else {
    const v = Ut(d), F = /* @__PURE__ */ vn(d);
    if (v || F) {
      const V = () => {
        if (e.f) {
          const G = v ? M(d) ? w[d] : g[d] : S() || !e.k ? d.value : g[e.k];
          if (o)
            Je(G) && gf(G, a);
          else if (Je(G))
            G.includes(a) || G.push(a);
          else if (v)
            g[d] = [a], M(d) && (w[d] = g[d]);
          else {
            const E = [a];
            S(d, e.k) && (d.value = E), e.k && (g[e.k] = E);
          }
        } else v ? (g[d] = l, M(d) && (w[d] = l)) : F && (S(d, e.k) && (d.value = l), e.k && (g[e.k] = l));
      };
      if (l) {
        const G = () => {
          V(), pl.delete(e);
        };
        G.id = -1, pl.set(e, G), Ln(G, n);
      } else
        Xh(e), V();
    }
  }
}
function Xh(e) {
  const t = pl.get(e);
  t && (t.flags |= 8, pl.delete(e));
}
Kl().requestIdleCallback;
Kl().cancelIdleCallback;
const za = (e) => !!e.type.__asyncLoader, lg = (e) => e.type.__isKeepAlive;
function u_(e, t) {
  cg(e, "a", t);
}
function f_(e, t) {
  cg(e, "da", t);
}
function cg(e, t, n = bn) {
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
      lg(o.parent.vnode) && d_(r, t, n, o), o = o.parent;
  }
}
function d_(e, t, n, r) {
  const o = Yl(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ug(() => {
    gf(r[t], o);
  }, n);
}
function Yl(e, t, n = bn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...l) => {
      ii();
      const u = is(n), d = Dr(t, n, e, l);
      return u(), oi(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const li = (e) => (t, n = bn) => {
  (!Ya || e === "sp") && Yl(e, (...r) => t(...r), n);
}, h_ = li("bm"), Xl = li("m"), p_ = li(
  "bu"
), m_ = li("u"), rs = li(
  "bum"
), ug = li("um"), g_ = li(
  "sp"
), y_ = li("rtg"), b_ = li("rtc");
function v_(e, t = bn) {
  Yl("ec", e, t);
}
const __ = "components", fg = /* @__PURE__ */ Symbol.for("v-ndc");
function w_(e) {
  return Ut(e) ? x_(__, e, !1) || e : e || fg;
}
function x_(e, t, n = !0, r = !1) {
  const o = Wn || bn;
  if (o) {
    const a = o.type;
    {
      const u = aw(
        a,
        !1
      );
      if (u && (u === t || u === An(t) || u === Gl(An(t))))
        return a;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      qh(o[e] || a[e], t) || // global registration
      qh(o.appContext[e], t)
    );
    return !l && r ? a : l;
  }
}
function qh(e, t) {
  return e && (e[t] || e[An(t)] || e[Gl(An(t))]);
}
function xt(e, t, n, r) {
  let o;
  const a = n, l = Je(e);
  if (l || Ut(e)) {
    const u = l && /* @__PURE__ */ Zi(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ rr(e), b = /* @__PURE__ */ ai(e), e = Bl(e)), o = new Array(e.length);
    for (let g = 0, w = e.length; g < w; g++)
      o[g] = t(
        d ? b ? Zo(gr(e[g])) : gr(e[g]) : e[g],
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
const Du = (e) => e ? Og(e) ? Zl(e) : Du(e.parent) : null, ja = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ wn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Du(e.parent),
    $root: (e) => Du(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => hg(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Pf(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ul.bind(e.proxy)),
    $watch: (e) => a_.bind(e)
  })
), Xc = (e, t) => e !== _t && !e.__isScriptSetup && ht(e, t), S_ = {
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
        if (Xc(r, t))
          return l[t] = 1, r[t];
        if (o !== _t && ht(o, t))
          return l[t] = 2, o[t];
        if (ht(a, t))
          return l[t] = 3, a[t];
        if (n !== _t && ht(n, t))
          return l[t] = 4, n[t];
        Lu && (l[t] = 0);
      }
    }
    const b = ja[t];
    let g, w;
    if (b)
      return t === "$attrs" && yn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (g = u.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== _t && ht(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      w = d.config.globalProperties, ht(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Xc(o, t) ? (o[t] = n, !0) : r !== _t && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: l }
  }, u) {
    let d;
    return !!(n[u] || e !== _t && u[0] !== "$" && ht(e, u) || Xc(t, u) || ht(a, u) || ht(r, u) || ht(ja, u) || ht(o.config.globalProperties, u) || (d = l.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Jh(e) {
  return Je(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Lu = !0;
function k_(e) {
  const t = hg(e), n = e.proxy, r = e.ctx;
  Lu = !1, t.beforeCreate && Zh(t.beforeCreate, e, "bc");
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
    beforeMount: w,
    mounted: x,
    beforeUpdate: M,
    updated: S,
    activated: v,
    deactivated: F,
    beforeDestroy: V,
    beforeUnmount: G,
    destroyed: E,
    unmounted: R,
    render: O,
    renderTracked: $,
    renderTriggered: H,
    errorCaptured: Q,
    serverPrefetch: _e,
    // public API
    expose: T,
    inheritAttrs: I,
    // assets
    components: se,
    directives: le,
    filters: ue
  } = t;
  if (b && M_(b, r, null), l)
    for (const j in l) {
      const N = l[j];
      et(N) && (r[j] = N.bind(n));
    }
  if (o) {
    const j = o.call(n, n);
    vt(j) && (e.data = /* @__PURE__ */ ia(j));
  }
  if (Lu = !0, a)
    for (const j in a) {
      const N = a[j], ee = et(N) ? N.bind(n, n) : et(N.get) ? N.get.bind(n, n) : Fr, Y = !et(N) && et(N.set) ? N.set.bind(n) : Fr, Ie = ut({
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
      dg(u[j], r, n, j);
  if (d) {
    const j = et(d) ? d.call(n) : d;
    Reflect.ownKeys(j).forEach((N) => {
      r_(N, j[N]);
    });
  }
  g && Zh(g, e, "c");
  function X(j, N) {
    Je(N) ? N.forEach((ee) => j(ee.bind(n))) : N && j(N.bind(n));
  }
  if (X(h_, w), X(Xl, x), X(p_, M), X(m_, S), X(u_, v), X(f_, F), X(v_, Q), X(b_, $), X(y_, H), X(rs, G), X(ug, R), X(g_, _e), Je(T))
    if (T.length) {
      const j = e.exposed || (e.exposed = {});
      T.forEach((N) => {
        Object.defineProperty(j, N, {
          get: () => n[N],
          set: (ee) => n[N] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Fr && (e.render = O), I != null && (e.inheritAttrs = I), se && (e.components = se), le && (e.directives = le), _e && sg(e);
}
function M_(e, t, n = Fr) {
  Je(e) && (e = Ru(e));
  for (const r in e) {
    const o = e[r];
    let a;
    vt(o) ? "default" in o ? a = Xs(
      o.from || r,
      o.default,
      !0
    ) : a = Xs(o.from || r) : a = Xs(o), /* @__PURE__ */ vn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : t[r] = a;
  }
}
function Zh(e, t, n) {
  Dr(
    Je(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function dg(e, t, n, r) {
  let o = r.includes(".") ? ag(n, r) : () => n[r];
  if (Ut(e)) {
    const a = t[e];
    et(a) && Qi(o, a);
  } else if (et(e))
    Qi(o, e.bind(n));
  else if (vt(e))
    if (Je(e))
      e.forEach((a) => dg(a, t, n, r));
    else {
      const a = et(e.handler) ? e.handler.bind(n) : t[e.handler];
      et(a) && Qi(o, a, e);
    }
}
function hg(e) {
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
      const u = N_[l] || n && n[l];
      e[l] = u ? u(e[l], t[l]) : t[l];
    }
  return e;
}
const N_ = {
  data: Qh,
  props: ep,
  emits: ep,
  // objects
  methods: Ca,
  computed: Ca,
  // lifecycle
  beforeCreate: Mn,
  created: Mn,
  beforeMount: Mn,
  mounted: Mn,
  beforeUpdate: Mn,
  updated: Mn,
  beforeDestroy: Mn,
  beforeUnmount: Mn,
  destroyed: Mn,
  unmounted: Mn,
  activated: Mn,
  deactivated: Mn,
  errorCaptured: Mn,
  serverPrefetch: Mn,
  // assets
  components: Ca,
  directives: Ca,
  // watch
  watch: A_,
  // provide / inject
  provide: Qh,
  inject: P_
};
function Qh(e, t) {
  return t ? e ? function() {
    return wn(
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function P_(e, t) {
  return Ca(Ru(e), Ru(t));
}
function Ru(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Mn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ca(e, t) {
  return e ? wn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ep(e, t) {
  return e ? Je(e) && Je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : wn(
    /* @__PURE__ */ Object.create(null),
    Jh(e),
    Jh(t ?? {})
  ) : t;
}
function A_(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = wn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Mn(e[r], t[r]);
  return n;
}
function pg() {
  return {
    app: null,
    config: {
      isNativeTag: Cm,
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
let C_ = 0;
function I_(e, t) {
  return function(r, o = null) {
    et(r) || (r = wn({}, r)), o != null && !vt(o) && (o = null);
    const a = pg(), l = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: C_++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: lw,
      get config() {
        return a.config;
      },
      set config(g) {
      },
      use(g, ...w) {
        return l.has(g) || (g && et(g.install) ? (l.add(g), g.install(b, ...w)) : et(g) && (l.add(g), g(b, ...w))), b;
      },
      mixin(g) {
        return a.mixins.includes(g) || a.mixins.push(g), b;
      },
      component(g, w) {
        return w ? (a.components[g] = w, b) : a.components[g];
      },
      directive(g, w) {
        return w ? (a.directives[g] = w, b) : a.directives[g];
      },
      mount(g, w, x) {
        if (!d) {
          const M = b._ceVNode || De(r, o);
          return M.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(M, g, x), d = !0, b._container = g, g.__vue_app__ = b, Zl(M.component);
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
      provide(g, w) {
        return a.provides[g] = w, b;
      },
      runWithContext(g) {
        const w = Ko;
        Ko = b;
        try {
          return g();
        } finally {
          Ko = w;
        }
      }
    };
    return b;
  };
}
let Ko = null;
const E_ = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${An(t)}Modifiers`] || e[`${lo(t)}Modifiers`];
function O_(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _t;
  let o = n;
  const a = t.startsWith("update:"), l = a && E_(r, t.slice(7));
  l && (l.trim && (o = n.map((g) => Ut(g) ? g.trim() : g)), l.number && (o = n.map(bf)));
  let u, d = r[u = Kc(t)] || // also try camelCase event handler (#2249)
  r[u = Kc(An(t))];
  !d && a && (d = r[u = Kc(lo(t))]), d && Dr(
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
const F_ = /* @__PURE__ */ new WeakMap();
function mg(e, t, n = !1) {
  const r = n ? F_ : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let l = {}, u = !1;
  if (!et(e)) {
    const d = (b) => {
      const g = mg(b, t, !0);
      g && (u = !0, wn(l, g));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (vt(e) && r.set(e, null), null) : (Je(a) ? a.forEach((d) => l[d] = null) : wn(l, a), vt(e) && r.set(e, l), l);
}
function ql(e, t) {
  return !e || !zl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, lo(t)) || ht(e, t));
}
function tp(e) {
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
    props: w,
    data: x,
    setupState: M,
    ctx: S,
    inheritAttrs: v
  } = e, F = hl(e);
  let V, G;
  try {
    if (n.shapeFlag & 4) {
      const R = o || r, O = R;
      V = Ar(
        b.call(
          O,
          R,
          g,
          w,
          M,
          x,
          S
        )
      ), G = u;
    } else {
      const R = t;
      V = Ar(
        R.length > 1 ? R(
          w,
          { attrs: u, slots: l, emit: d }
        ) : R(
          w,
          null
        )
      ), G = t.props ? u : T_(u);
    }
  } catch (R) {
    Ha.length = 0, Wl(R, e, 1), V = De(ki);
  }
  let E = V;
  if (G && v !== !1) {
    const R = Object.keys(G), { shapeFlag: O } = E;
    R.length && O & 7 && (a && R.some(jl) && (G = D_(
      G,
      a
    )), E = Qo(E, G, !1, !0));
  }
  return n.dirs && (E = Qo(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && Af(E, n.transition), V = E, hl(F), V;
}
const T_ = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, D_ = (e, t) => {
  const n = {};
  for (const r in e)
    (!jl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function L_(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: l, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? np(r, l, b) : !!l;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        const x = g[w];
        if (gg(l, r, x) && !ql(b, x))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === l ? !1 : r ? l ? np(r, l, b) : !0 : !!l;
  return !1;
}
function np(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (gg(t, e, a) && !ql(n, a))
      return !0;
  }
  return !1;
}
function gg(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && vt(r) && vt(o) ? !vf(r, o) : r !== o;
}
function R_({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const yg = {}, bg = () => Object.create(yg), vg = (e) => Object.getPrototypeOf(e) === yg;
function $_(e, t, n, r = !1) {
  const o = {}, a = bg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), _g(e, t, o, a);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ Bv(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function V_(e, t, n, r) {
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
      for (let w = 0; w < g.length; w++) {
        let x = g[w];
        if (ql(e.emitsOptions, x))
          continue;
        const M = t[x];
        if (d)
          if (ht(a, x))
            M !== a[x] && (a[x] = M, b = !0);
          else {
            const S = An(x);
            o[S] = $u(
              d,
              u,
              S,
              M,
              e,
              !1
            );
          }
        else
          M !== a[x] && (a[x] = M, b = !0);
      }
    }
  } else {
    _g(e, t, o, a) && (b = !0);
    let g;
    for (const w in u)
      (!t || // for camelCase
      !ht(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = lo(w)) === w || !ht(t, g))) && (d ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[g] !== void 0) && (o[w] = $u(
        d,
        u,
        w,
        void 0,
        e,
        !0
      )) : delete o[w]);
    if (a !== u)
      for (const w in a)
        (!t || !ht(t, w)) && (delete a[w], b = !0);
  }
  b && Qr(e.attrs, "set", "");
}
function _g(e, t, n, r) {
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
      const w = a[g];
      n[w] = $u(
        o,
        d,
        w,
        b[w],
        e,
        !ht(b, w)
      );
    }
  }
  return l;
}
function $u(e, t, n, r, o, a) {
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
const z_ = /* @__PURE__ */ new WeakMap();
function wg(e, t, n = !1) {
  const r = n ? z_ : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, l = {}, u = [];
  let d = !1;
  if (!et(e)) {
    const g = (w) => {
      d = !0;
      const [x, M] = wg(w, t, !0);
      wn(l, x), M && u.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!a && !d)
    return vt(e) && r.set(e, jo), jo;
  if (Je(a))
    for (let g = 0; g < a.length; g++) {
      const w = An(a[g]);
      rp(w) && (l[w] = _t);
    }
  else if (a)
    for (const g in a) {
      const w = An(g);
      if (rp(w)) {
        const x = a[g], M = l[w] = Je(x) || et(x) ? { type: x } : wn({}, x), S = M.type;
        let v = !1, F = !0;
        if (Je(S))
          for (let V = 0; V < S.length; ++V) {
            const G = S[V], E = et(G) && G.name;
            if (E === "Boolean") {
              v = !0;
              break;
            } else E === "String" && (F = !1);
          }
        else
          v = et(S) && S.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = v, M[
          1
          /* shouldCastTrue */
        ] = F, (v || ht(M, "default")) && u.push(w);
      }
    }
  const b = [l, u];
  return vt(e) && r.set(e, b), b;
}
function rp(e) {
  return e[0] !== "$" && !La(e);
}
const Cf = (e) => e === "_" || e === "_ctx" || e === "$stable", If = (e) => Je(e) ? e.map(Ar) : [Ar(e)], j_ = (e, t, n) => {
  if (t._n)
    return t;
  const r = ig((...o) => If(t(...o)), n);
  return r._c = !1, r;
}, xg = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Cf(o)) continue;
    const a = e[o];
    if (et(a))
      t[o] = j_(o, a, r);
    else if (a != null) {
      const l = If(a);
      t[o] = () => l;
    }
  }
}, Sg = (e, t) => {
  const n = If(t);
  e.slots.default = () => n;
}, kg = (e, t, n) => {
  for (const r in t)
    (n || !Cf(r)) && (e[r] = t[r]);
}, H_ = (e, t, n) => {
  const r = e.slots = bg();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (kg(r, t, n), n && Tm(r, "_", o, !0)) : xg(t, r);
  } else t && Sg(e, t);
}, G_ = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, l = _t;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : kg(o, t, n) : (a = !t.$stable, xg(t, o)), l = t;
  } else t && (Sg(e, t), l = { default: 1 });
  if (a)
    for (const u in o)
      !Cf(u) && l[u] == null && delete o[u];
}, Ln = Y_;
function K_(e) {
  return B_(e);
}
function B_(e, t) {
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
    parentNode: w,
    nextSibling: x,
    setScopeId: M = Fr,
    insertStaticContent: S
  } = e, v = (L, B, q, be = null, me = null, ge = null, Me = void 0, Ne = null, xe = !!B.dynamicChildren) => {
    if (L === B)
      return;
    L && !Sa(L, B) && (be = Yn(L), Fe(L, me, ge, !0), L = null), B.patchFlag === -2 && (xe = !1, B.dynamicChildren = null);
    const { type: fe, ref: $e, shapeFlag: Ee } = B;
    switch (fe) {
      case Jl:
        F(L, B, q, be);
        break;
      case ki:
        V(L, B, q, be);
        break;
      case Jc:
        L == null && G(B, q, be, Me);
        break;
      case Ye:
        se(
          L,
          B,
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
          B,
          q,
          be,
          me,
          ge,
          Me,
          Ne,
          xe
        ) : Ee & 6 ? le(
          L,
          B,
          q,
          be,
          me,
          ge,
          Me,
          Ne,
          xe
        ) : (Ee & 64 || Ee & 128) && fe.process(
          L,
          B,
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
    $e != null && me ? Va($e, L && L.ref, ge, B || L, !B) : $e == null && L && L.ref != null && Va(L.ref, null, ge, L, !0);
  }, F = (L, B, q, be) => {
    if (L == null)
      r(
        B.el = u(B.children),
        q,
        be
      );
    else {
      const me = B.el = L.el;
      B.children !== L.children && b(me, B.children);
    }
  }, V = (L, B, q, be) => {
    L == null ? r(
      B.el = d(B.children || ""),
      q,
      be
    ) : B.el = L.el;
  }, G = (L, B, q, be) => {
    [L.el, L.anchor] = S(
      L.children,
      B,
      q,
      be,
      L.el,
      L.anchor
    );
  }, E = ({ el: L, anchor: B }, q, be) => {
    let me;
    for (; L && L !== B; )
      me = x(L), r(L, q, be), L = me;
    r(B, q, be);
  }, R = ({ el: L, anchor: B }) => {
    let q;
    for (; L && L !== B; )
      q = x(L), o(L), L = q;
    o(B);
  }, O = (L, B, q, be, me, ge, Me, Ne, xe) => {
    if (B.type === "svg" ? Me = "svg" : B.type === "math" && (Me = "mathml"), L == null)
      $(
        B,
        q,
        be,
        me,
        ge,
        Me,
        Ne,
        xe
      );
    else {
      const fe = L.el && L.el._isVueCE ? L.el : null;
      try {
        fe && fe._beginPatch(), _e(
          L,
          B,
          me,
          ge,
          Me,
          Ne,
          xe
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, $ = (L, B, q, be, me, ge, Me, Ne) => {
    let xe, fe;
    const { props: $e, shapeFlag: Ee, transition: Ve, dirs: Ke } = L;
    if (xe = L.el = l(
      L.type,
      ge,
      $e && $e.is,
      $e
    ), Ee & 8 ? g(xe, L.children) : Ee & 16 && Q(
      L.children,
      xe,
      null,
      be,
      me,
      qc(L, ge),
      Me,
      Ne
    ), Ke && Li(L, null, be, "created"), H(xe, L, L.scopeId, Me, be), $e) {
      for (const Le in $e)
        Le !== "value" && !La(Le) && a(xe, Le, null, $e[Le], ge, be);
      "value" in $e && a(xe, "value", null, $e.value, ge), (fe = $e.onVnodeBeforeMount) && xr(fe, be, L);
    }
    Ke && Li(L, null, be, "beforeMount");
    const p = W_(me, Ve);
    p && Ve.beforeEnter(xe), r(xe, B, q), ((fe = $e && $e.onVnodeMounted) || p || Ke) && Ln(() => {
      try {
        fe && xr(fe, be, L), p && Ve.enter(xe), Ke && Li(L, null, be, "mounted");
      } finally {
      }
    }, me);
  }, H = (L, B, q, be, me) => {
    if (q && M(L, q), be)
      for (let ge = 0; ge < be.length; ge++)
        M(L, be[ge]);
    if (me) {
      let ge = me.subTree;
      if (B === ge || Ag(ge.type) && (ge.ssContent === B || ge.ssFallback === B)) {
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
  }, Q = (L, B, q, be, me, ge, Me, Ne, xe = 0) => {
    for (let fe = xe; fe < L.length; fe++) {
      const $e = L[fe] = Ne ? Zr(L[fe]) : Ar(L[fe]);
      v(
        null,
        $e,
        B,
        q,
        be,
        me,
        ge,
        Me,
        Ne
      );
    }
  }, _e = (L, B, q, be, me, ge, Me) => {
    const Ne = B.el = L.el;
    let { patchFlag: xe, dynamicChildren: fe, dirs: $e } = B;
    xe |= L.patchFlag & 16;
    const Ee = L.props || _t, Ve = B.props || _t;
    let Ke;
    if (q && Ri(q, !1), (Ke = Ve.onVnodeBeforeUpdate) && xr(Ke, q, B, L), $e && Li(B, L, q, "beforeUpdate"), q && Ri(q, !0), (Ee.innerHTML && Ve.innerHTML == null || Ee.textContent && Ve.textContent == null) && g(Ne, ""), fe ? T(
      L.dynamicChildren,
      fe,
      Ne,
      q,
      be,
      qc(B, me),
      ge
    ) : Me || N(
      L,
      B,
      Ne,
      null,
      q,
      be,
      qc(B, me),
      ge,
      !1
    ), xe > 0) {
      if (xe & 16)
        I(Ne, Ee, Ve, q, me);
      else if (xe & 2 && Ee.class !== Ve.class && a(Ne, "class", null, Ve.class, me), xe & 4 && a(Ne, "style", Ee.style, Ve.style, me), xe & 8) {
        const p = B.dynamicProps;
        for (let Le = 0; Le < p.length; Le++) {
          const st = p[Le], Be = Ee[st], Tt = Ve[st];
          (Tt !== Be || st === "value") && a(Ne, st, Be, Tt, me, q);
        }
      }
      xe & 1 && L.children !== B.children && g(Ne, B.children);
    } else !Me && fe == null && I(Ne, Ee, Ve, q, me);
    ((Ke = Ve.onVnodeUpdated) || $e) && Ln(() => {
      Ke && xr(Ke, q, B, L), $e && Li(B, L, q, "updated");
    }, be);
  }, T = (L, B, q, be, me, ge, Me) => {
    for (let Ne = 0; Ne < B.length; Ne++) {
      const xe = L[Ne], fe = B[Ne], $e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        xe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (xe.type === Ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Sa(xe, fe) || // - In the case of a component, it could contain anything.
        xe.shapeFlag & 198) ? w(xe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      v(
        xe,
        fe,
        $e,
        null,
        be,
        me,
        ge,
        Me,
        !0
      );
    }
  }, I = (L, B, q, be, me) => {
    if (B !== q) {
      if (B !== _t)
        for (const ge in B)
          !La(ge) && !(ge in q) && a(
            L,
            ge,
            B[ge],
            null,
            me,
            be
          );
      for (const ge in q) {
        if (La(ge)) continue;
        const Me = q[ge], Ne = B[ge];
        Me !== Ne && ge !== "value" && a(L, ge, Ne, Me, me, be);
      }
      "value" in q && a(L, "value", B.value, q.value, me);
    }
  }, se = (L, B, q, be, me, ge, Me, Ne, xe) => {
    const fe = B.el = L ? L.el : u(""), $e = B.anchor = L ? L.anchor : u("");
    let { patchFlag: Ee, dynamicChildren: Ve, slotScopeIds: Ke } = B;
    Ke && (Ne = Ne ? Ne.concat(Ke) : Ke), L == null ? (r(fe, q, be), r($e, q, be), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      q,
      $e,
      me,
      ge,
      Me,
      Ne,
      xe
    )) : Ee > 0 && Ee & 64 && Ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren && L.dynamicChildren.length === Ve.length ? (T(
      L.dynamicChildren,
      Ve,
      q,
      me,
      ge,
      Me,
      Ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || me && B === me.subTree) && Mg(
      L,
      B,
      !0
      /* shallow */
    )) : N(
      L,
      B,
      q,
      $e,
      me,
      ge,
      Me,
      Ne,
      xe
    );
  }, le = (L, B, q, be, me, ge, Me, Ne, xe) => {
    B.slotScopeIds = Ne, L == null ? B.shapeFlag & 512 ? me.ctx.activate(
      B,
      q,
      be,
      Me,
      xe
    ) : ue(
      B,
      q,
      be,
      me,
      ge,
      Me,
      xe
    ) : U(L, B, xe);
  }, ue = (L, B, q, be, me, ge, Me) => {
    const Ne = L.component = ew(
      L,
      be,
      me
    );
    if (lg(L) && (Ne.ctx.renderer = cn), nw(Ne, !1, Me), Ne.asyncDep) {
      if (me && me.registerDep(Ne, X, Me), !L.el) {
        const xe = Ne.subTree = De(ki);
        V(null, xe, B, q), L.placeholder = xe.el;
      }
    } else
      X(
        Ne,
        L,
        B,
        q,
        me,
        ge,
        Me
      );
  }, U = (L, B, q) => {
    const be = B.component = L.component;
    if (L_(L, B, q))
      if (be.asyncDep && !be.asyncResolved) {
        j(be, B, q);
        return;
      } else
        be.next = B, be.update();
    else
      B.el = L.el, be.vnode = B;
  }, X = (L, B, q, be, me, ge, Me) => {
    const Ne = () => {
      if (L.isMounted) {
        let { next: Ee, bu: Ve, u: Ke, parent: p, vnode: Le } = L;
        {
          const rn = Ng(L);
          if (rn) {
            Ee && (Ee.el = Le.el, j(L, Ee, Me)), rn.asyncDep.then(() => {
              Ln(() => {
                L.isUnmounted || fe();
              }, me);
            });
            return;
          }
        }
        let st = Ee, Be;
        Ri(L, !1), Ee ? (Ee.el = Le.el, j(L, Ee, Me)) : Ee = Le, Ve && Ys(Ve), (Be = Ee.props && Ee.props.onVnodeBeforeUpdate) && xr(Be, p, Ee, Le), Ri(L, !0);
        const Tt = tp(L), un = L.subTree;
        L.subTree = Tt, v(
          un,
          Tt,
          // parent may have changed if it's in a teleport
          w(un.el),
          // anchor may have changed if it's in a fragment
          Yn(un),
          L,
          me,
          ge
        ), Ee.el = Tt.el, st === null && R_(L, Tt.el), Ke && Ln(Ke, me), (Be = Ee.props && Ee.props.onVnodeUpdated) && Ln(
          () => xr(Be, p, Ee, Le),
          me
        );
      } else {
        let Ee;
        const { el: Ve, props: Ke } = B, { bm: p, m: Le, parent: st, root: Be, type: Tt } = L, un = za(B);
        Ri(L, !1), p && Ys(p), !un && (Ee = Ke && Ke.onVnodeBeforeMount) && xr(Ee, st, B), Ri(L, !0);
        {
          Be.ce && Be.ce._hasShadowRoot() && Be.ce._injectChildStyle(
            Tt,
            L.parent ? L.parent.type : void 0
          );
          const rn = L.subTree = tp(L);
          v(
            null,
            rn,
            q,
            be,
            L,
            me,
            ge
          ), B.el = rn.el;
        }
        if (Le && Ln(Le, me), !un && (Ee = Ke && Ke.onVnodeMounted)) {
          const rn = B;
          Ln(
            () => xr(Ee, st, rn),
            me
          );
        }
        (B.shapeFlag & 256 || st && za(st.vnode) && st.vnode.shapeFlag & 256) && L.a && Ln(L.a, me), L.isMounted = !0, B = q = be = null;
      }
    };
    L.scope.on();
    const xe = L.effect = new $m(Ne);
    L.scope.off();
    const fe = L.update = xe.run.bind(xe), $e = L.job = xe.runIfDirty.bind(xe);
    $e.i = L, $e.id = L.uid, xe.scheduler = () => Pf($e), Ri(L, !0), fe();
  }, j = (L, B, q) => {
    B.component = L;
    const be = L.vnode.props;
    L.vnode = B, L.next = null, V_(L, B.props, be, q), G_(L, B.children, q), ii(), Uh(L), oi();
  }, N = (L, B, q, be, me, ge, Me, Ne, xe = !1) => {
    const fe = L && L.children, $e = L ? L.shapeFlag : 0, Ee = B.children, { patchFlag: Ve, shapeFlag: Ke } = B;
    if (Ve > 0) {
      if (Ve & 128) {
        Y(
          fe,
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
      } else if (Ve & 256) {
        ee(
          fe,
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
    Ke & 8 ? ($e & 16 && it(fe, me, ge), Ee !== fe && g(q, Ee)) : $e & 16 ? Ke & 16 ? Y(
      fe,
      Ee,
      q,
      be,
      me,
      ge,
      Me,
      Ne,
      xe
    ) : it(fe, me, ge, !0) : ($e & 8 && g(q, ""), Ke & 16 && Q(
      Ee,
      q,
      be,
      me,
      ge,
      Me,
      Ne,
      xe
    ));
  }, ee = (L, B, q, be, me, ge, Me, Ne, xe) => {
    L = L || jo, B = B || jo;
    const fe = L.length, $e = B.length, Ee = Math.min(fe, $e);
    let Ve;
    for (Ve = 0; Ve < Ee; Ve++) {
      const Ke = B[Ve] = xe ? Zr(B[Ve]) : Ar(B[Ve]);
      v(
        L[Ve],
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
    fe > $e ? it(
      L,
      me,
      ge,
      !0,
      !1,
      Ee
    ) : Q(
      B,
      q,
      be,
      me,
      ge,
      Me,
      Ne,
      xe,
      Ee
    );
  }, Y = (L, B, q, be, me, ge, Me, Ne, xe) => {
    let fe = 0;
    const $e = B.length;
    let Ee = L.length - 1, Ve = $e - 1;
    for (; fe <= Ee && fe <= Ve; ) {
      const Ke = L[fe], p = B[fe] = xe ? Zr(B[fe]) : Ar(B[fe]);
      if (Sa(Ke, p))
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
      fe++;
    }
    for (; fe <= Ee && fe <= Ve; ) {
      const Ke = L[Ee], p = B[Ve] = xe ? Zr(B[Ve]) : Ar(B[Ve]);
      if (Sa(Ke, p))
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
      Ee--, Ve--;
    }
    if (fe > Ee) {
      if (fe <= Ve) {
        const Ke = Ve + 1, p = Ke < $e ? B[Ke].el : be;
        for (; fe <= Ve; )
          v(
            null,
            B[fe] = xe ? Zr(B[fe]) : Ar(B[fe]),
            q,
            p,
            me,
            ge,
            Me,
            Ne,
            xe
          ), fe++;
      }
    } else if (fe > Ve)
      for (; fe <= Ee; )
        Fe(L[fe], me, ge, !0), fe++;
    else {
      const Ke = fe, p = fe, Le = /* @__PURE__ */ new Map();
      for (fe = p; fe <= Ve; fe++) {
        const Ce = B[fe] = xe ? Zr(B[fe]) : Ar(B[fe]);
        Ce.key != null && Le.set(Ce.key, fe);
      }
      let st, Be = 0;
      const Tt = Ve - p + 1;
      let un = !1, rn = 0;
      const $t = new Array(Tt);
      for (fe = 0; fe < Tt; fe++) $t[fe] = 0;
      for (fe = Ke; fe <= Ee; fe++) {
        const Ce = L[fe];
        if (Be >= Tt) {
          Fe(Ce, me, ge, !0);
          continue;
        }
        let Bt;
        if (Ce.key != null)
          Bt = Le.get(Ce.key);
        else
          for (st = p; st <= Ve; st++)
            if ($t[st - p] === 0 && Sa(Ce, B[st])) {
              Bt = st;
              break;
            }
        Bt === void 0 ? Fe(Ce, me, ge, !0) : ($t[Bt - p] = fe + 1, Bt >= rn ? rn = Bt : un = !0, v(
          Ce,
          B[Bt],
          q,
          null,
          me,
          ge,
          Me,
          Ne,
          xe
        ), Be++);
      }
      const Xn = un ? U_($t) : jo;
      for (st = Xn.length - 1, fe = Tt - 1; fe >= 0; fe--) {
        const Ce = p + fe, Bt = B[Ce], zr = B[Ce + 1], yr = Ce + 1 < $e ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          zr.el || Pg(zr)
        ) : be;
        $t[fe] === 0 ? v(
          null,
          Bt,
          q,
          yr,
          me,
          ge,
          Me,
          Ne,
          xe
        ) : un && (st < 0 || fe !== Xn[st] ? Ie(Bt, q, yr, 2) : st--);
      }
    }
  }, Ie = (L, B, q, be, me = null) => {
    const { el: ge, type: Me, transition: Ne, children: xe, shapeFlag: fe } = L;
    if (fe & 6) {
      Ie(L.component.subTree, B, q, be);
      return;
    }
    if (fe & 128) {
      L.suspense.move(B, q, be);
      return;
    }
    if (fe & 64) {
      Me.move(L, B, q, cn);
      return;
    }
    if (Me === Ye) {
      r(ge, B, q);
      for (let Ee = 0; Ee < xe.length; Ee++)
        Ie(xe[Ee], B, q, be);
      r(L.anchor, B, q);
      return;
    }
    if (Me === Jc) {
      E(L, B, q);
      return;
    }
    if (be !== 2 && fe & 1 && Ne)
      if (be === 0)
        Ne.beforeEnter(ge), r(ge, B, q), Ln(() => Ne.enter(ge), me);
      else {
        const { leave: Ee, delayLeave: Ve, afterLeave: Ke } = Ne, p = () => {
          L.ctx.isUnmounted ? o(ge) : r(ge, B, q);
        }, Le = () => {
          ge._isLeaving && ge[c_](
            !0
            /* cancelled */
          ), Ee(ge, () => {
            p(), Ke && Ke();
          });
        };
        Ve ? Ve(ge, p, Le) : Le();
      }
    else
      r(ge, B, q);
  }, Fe = (L, B, q, be = !1, me = !1) => {
    const {
      type: ge,
      props: Me,
      ref: Ne,
      children: xe,
      dynamicChildren: fe,
      shapeFlag: $e,
      patchFlag: Ee,
      dirs: Ve,
      cacheIndex: Ke,
      memo: p
    } = L;
    if (Ee === -2 && (me = !1), Ne != null && (ii(), Va(Ne, null, q, L, !0), oi()), Ke != null && (B.renderCache[Ke] = void 0), $e & 256) {
      B.ctx.deactivate(L);
      return;
    }
    const Le = $e & 1 && Ve, st = !za(L);
    let Be;
    if (st && (Be = Me && Me.onVnodeBeforeUnmount) && xr(Be, B, L), $e & 6)
      ln(L.component, q, be);
    else {
      if ($e & 128) {
        L.suspense.unmount(q, be);
        return;
      }
      Le && Li(L, null, B, "beforeUnmount"), $e & 64 ? L.type.remove(
        L,
        B,
        q,
        cn,
        be
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ge !== Ye || Ee > 0 && Ee & 64) ? it(
        fe,
        B,
        q,
        !1,
        !0
      ) : (ge === Ye && Ee & 384 || !me && $e & 16) && it(xe, B, q), be && St(L);
    }
    const Tt = p != null && Ke == null;
    (st && (Be = Me && Me.onVnodeUnmounted) || Le || Tt) && Ln(() => {
      Be && xr(Be, B, L), Le && Li(L, null, B, "unmounted"), Tt && (L.el = null);
    }, q);
  }, St = (L) => {
    const { type: B, el: q, anchor: be, transition: me } = L;
    if (B === Ye) {
      pt(q, be);
      return;
    }
    if (B === Jc) {
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
  }, pt = (L, B) => {
    let q;
    for (; L !== B; )
      q = x(L), o(L), L = q;
    o(B);
  }, ln = (L, B, q) => {
    const { bum: be, scope: me, job: ge, subTree: Me, um: Ne, m: xe, a: fe } = L;
    ip(xe), ip(fe), be && Ys(be), me.stop(), ge && (ge.flags |= 8, Fe(Me, L, B, q)), Ne && Ln(Ne, B), Ln(() => {
      L.isUnmounted = !0;
    }, B);
  }, it = (L, B, q, be = !1, me = !1, ge = 0) => {
    for (let Me = ge; Me < L.length; Me++)
      Fe(L[Me], B, q, be, me);
  }, Yn = (L) => {
    if (L.shapeFlag & 6)
      return Yn(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const B = x(L.anchor || L.el), q = B && B[s_];
    return q ? x(q) : B;
  };
  let It = !1;
  const Qt = (L, B, q) => {
    let be;
    L == null ? B._vnode && (Fe(B._vnode, null, null, !0), be = B._vnode.component) : v(
      B._vnode || null,
      L,
      B,
      null,
      null,
      null,
      q
    ), B._vnode = L, It || (It = !0, Uh(be), tg(), It = !1);
  }, cn = {
    p: v,
    um: Fe,
    m: Ie,
    r: St,
    mt: ue,
    mc: Q,
    pc: N,
    pbc: T,
    n: Yn,
    o: e
  };
  return {
    render: Qt,
    hydrate: void 0,
    createApp: I_(Qt)
  };
}
function qc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ri({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function W_(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mg(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Je(r) && Je(o))
    for (let a = 0; a < r.length; a++) {
      const l = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = Zr(o[a]), u.el = l.el), !n && u.patchFlag !== -2 && Mg(l, u)), u.type === Jl && (u.patchFlag === -1 && (u = o[a] = Zr(u)), u.el = l.el), u.type === ki && !u.el && (u.el = l.el);
    }
}
function U_(e) {
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
function Ng(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ng(t);
}
function ip(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Pg(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Pg(t.subTree) : null;
}
const Ag = (e) => e.__isSuspense;
function Y_(e, t) {
  t && t.pendingBranch ? Je(e) ? t.effects.push(...e) : t.effects.push(e) : n_(e);
}
const Ye = /* @__PURE__ */ Symbol.for("v-fgt"), Jl = /* @__PURE__ */ Symbol.for("v-txt"), ki = /* @__PURE__ */ Symbol.for("v-cmt"), Jc = /* @__PURE__ */ Symbol.for("v-stc"), Ha = [];
let Un = null;
function oe(e = !1) {
  Ha.push(Un = e ? null : []);
}
function X_() {
  Ha.pop(), Un = Ha[Ha.length - 1] || null;
}
let Ua = 1;
function op(e, t = !1) {
  Ua += e, e < 0 && Un && t && (Un.hasOnce = !0);
}
function Cg(e) {
  return e.dynamicChildren = Ua > 0 ? Un || jo : null, X_(), Ua > 0 && Un && Un.push(e), e;
}
function ce(e, t, n, r, o, a) {
  return Cg(
    K(
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
function Vr(e, t, n, r, o) {
  return Cg(
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
function Ig(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Sa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Eg = ({ key: e }) => e ?? null, qs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ut(e) || /* @__PURE__ */ vn(e) || et(e) ? { i: Wn, r: e, k: t, f: !!n } : e : null);
function K(e, t = null, n = null, r = 0, o = null, a = e === Ye ? 0 : 1, l = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Eg(t),
    ref: t && qs(t),
    scopeId: rg,
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
  return u ? (Ef(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= Ut(n) ? 8 : 16), Ua > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Un && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Un.push(d), d;
}
const De = q_;
function q_(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === fg) && (e = ki), Ig(e)) {
    const u = Qo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ef(u, n), Ua > 0 && !a && Un && (u.shapeFlag & 6 ? Un[Un.indexOf(e)] = u : Un.push(u)), u.patchFlag = -2, u;
  }
  if (sw(e) && (e = e.__vccOpts), t) {
    t = J_(t);
    let { class: u, style: d } = t;
    u && !Ut(u) && (t.class = at(u)), vt(d) && (/* @__PURE__ */ Nf(d) && !Je(d) && (d = wn({}, d)), t.style = wt(d));
  }
  const l = Ut(e) ? 1 : Ag(e) ? 128 : l_(e) ? 64 : vt(e) ? 4 : et(e) ? 2 : 0;
  return K(
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
function J_(e) {
  return e ? /* @__PURE__ */ Nf(e) || vg(e) ? wn({}, e) : e : null;
}
function Qo(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: l, children: u, transition: d } = e, b = t ? wi(o || {}, t) : o, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Eg(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Je(a) ? a.concat(qs(t)) : [a, qs(t)] : qs(t)
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
    ssContent: e.ssContent && Qo(e.ssContent),
    ssFallback: e.ssFallback && Qo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && Af(
    g,
    d.clone(g)
  ), g;
}
function Ia(e = " ", t = 0) {
  return De(Jl, null, e, t);
}
function ct(e = "", t = !1) {
  return t ? (oe(), Vr(ki, null, e)) : De(ki, null, e);
}
function Ar(e) {
  return e == null || typeof e == "boolean" ? De(ki) : Je(e) ? De(
    Ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ig(e) ? Zr(e) : De(Jl, null, String(e));
}
function Zr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qo(e);
}
function Ef(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Je(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ef(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !vg(t) ? t._ctx = Wn : o === 3 && Wn && (Wn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Wn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ia(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wi(...e) {
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
function xr(e, t, n, r = null) {
  Dr(e, t, 7, [
    n,
    r
  ]);
}
const Z_ = pg();
let Q_ = 0;
function ew(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Z_, a = {
    uid: Q_++,
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
    scope: new Mv(
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
    propsOptions: wg(r, o),
    emitsOptions: mg(r, o),
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = O_.bind(null, a), e.ce && e.ce(a), a;
}
let bn = null;
const tw = () => bn || Wn;
let gl, Vu;
{
  const e = Kl(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((l) => l(a)) : o[0](a);
    };
  };
  gl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => bn = n
  ), Vu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ya = n
  );
}
const is = (e) => {
  const t = bn;
  return gl(e), e.scope.on(), () => {
    e.scope.off(), gl(t);
  };
}, ap = () => {
  bn && bn.scope.off(), gl(null);
};
function Og(e) {
  return e.vnode.shapeFlag & 4;
}
let Ya = !1;
function nw(e, t = !1, n = !1) {
  t && Vu(t);
  const { props: r, children: o } = e.vnode, a = Og(e);
  $_(e, r, a, t), H_(e, o, n || t);
  const l = a ? rw(e, t) : void 0;
  return t && Vu(!1), l;
}
function rw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, S_);
  const { setup: r } = n;
  if (r) {
    ii();
    const o = e.setupContext = r.length > 1 ? ow(e) : null, a = is(e), l = ns(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = Em(l);
    if (oi(), a(), (u || e.sp) && !za(e) && sg(e), u) {
      if (l.then(ap, ap), t)
        return l.then((d) => {
          sp(e, d);
        }).catch((d) => {
          Wl(d, e, 0);
        });
      e.asyncDep = l;
    } else
      sp(e, l);
  } else
    Fg(e);
}
function sp(e, t, n) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) && (e.setupState = Zm(t)), Fg(e);
}
function Fg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Fr);
  {
    const o = is(e);
    ii();
    try {
      k_(e);
    } finally {
      oi(), o();
    }
  }
}
const iw = {
  get(e, t) {
    return yn(e, "get", ""), e[t];
  }
};
function ow(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, iw),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zm(Wv(e.exposed)), {
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
function aw(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sw(e) {
  return et(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ Jv(e, t, Ya), lw = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zu;
const lp = typeof window < "u" && window.trustedTypes;
if (lp)
  try {
    zu = /* @__PURE__ */ lp.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Tg = zu ? (e) => zu.createHTML(e) : (e) => e, cw = "http://www.w3.org/2000/svg", uw = "http://www.w3.org/1998/Math/MathML", Xr = typeof document < "u" ? document : null, cp = Xr && /* @__PURE__ */ Xr.createElement("template"), fw = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Xr.createElementNS(cw, e) : t === "mathml" ? Xr.createElementNS(uw, e) : n ? Xr.createElement(e, { is: n }) : Xr.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Xr.createTextNode(e),
  createComment: (e) => Xr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xr.querySelector(e),
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
      cp.innerHTML = Tg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = cp.content;
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
}, dw = /* @__PURE__ */ Symbol("_vtc");
function hw(e, t, n) {
  const r = e[dw];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yl = /* @__PURE__ */ Symbol("_vod"), Dg = /* @__PURE__ */ Symbol("_vsh"), ao = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[yl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ka(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), ka(e, !0), r.enter(e)) : r.leave(e, () => {
      ka(e, !1);
    }) : ka(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ka(e, t);
  }
};
function ka(e, t) {
  e.style.display = t ? e[yl] : "none", e[Dg] = !t;
}
const pw = /* @__PURE__ */ Symbol(""), mw = /(?:^|;)\s*display\s*:/;
function gw(e, t, n) {
  const r = e.style, o = Ut(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (Ut(t))
        for (const l of t.split(";")) {
          const u = l.slice(0, l.indexOf(":")).trim();
          n[u] == null && Js(r, u, "");
        }
      else
        for (const l in t)
          n[l] == null && Js(r, l, "");
    for (const l in n)
      l === "display" && (a = !0), Js(r, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = r[pw];
      l && (n += ";" + l), r.cssText = n, a = mw.test(n);
    }
  } else t && e.removeAttribute("style");
  yl in e && (e[yl] = a ? r.display : "", e[Dg] && (r.display = "none"));
}
const up = /\s*!important$/;
function Js(e, t, n) {
  if (Je(n))
    n.forEach((r) => Js(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = yw(e, t);
    up.test(n) ? e.setProperty(
      lo(r),
      n.replace(up, ""),
      "important"
    ) : e[r] = n;
  }
}
const fp = ["Webkit", "Moz", "ms"], Zc = {};
function yw(e, t) {
  const n = Zc[t];
  if (n)
    return n;
  let r = An(t);
  if (r !== "filter" && r in e)
    return Zc[t] = r;
  r = Gl(r);
  for (let o = 0; o < fp.length; o++) {
    const a = fp[o] + r;
    if (a in e)
      return Zc[t] = a;
  }
  return t;
}
const dp = "http://www.w3.org/1999/xlink";
function hp(e, t, n, r, o, a = Sv(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(dp, t.slice(6, t.length)) : e.setAttributeNS(dp, t, n) : n == null || a && !Dm(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Tr(n) ? String(n) : n
  );
}
function pp(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Tg(n) : n);
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
    u === "boolean" ? n = Dm(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function Do(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function bw(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const mp = /* @__PURE__ */ Symbol("_vei");
function vw(e, t, n, r, o = null) {
  const a = e[mp] || (e[mp] = {}), l = a[t];
  if (r && l)
    l.value = r;
  else {
    const [u, d] = _w(t);
    if (r) {
      const b = a[t] = Sw(
        r,
        o
      );
      Do(e, u, b, d);
    } else l && (bw(e, u, l, d), a[t] = void 0);
  }
}
const gp = /(?:Once|Passive|Capture)$/;
function _w(e) {
  let t;
  if (gp.test(e)) {
    t = {};
    let r;
    for (; r = e.match(gp); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : lo(e.slice(2)), t];
}
let Qc = 0;
const ww = /* @__PURE__ */ Promise.resolve(), xw = () => Qc || (ww.then(() => Qc = 0), Qc = Date.now());
function Sw(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Dr(
      kw(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = xw(), n;
}
function kw(e, t) {
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
const yp = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Mw = (e, t, n, r, o, a) => {
  const l = o === "svg";
  t === "class" ? hw(e, r, l) : t === "style" ? gw(e, n, r) : zl(t) ? jl(t) || vw(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nw(e, t, r, l)) ? (pp(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && hp(e, t, r, l, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Pw(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ut(r))) ? pp(e, An(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), hp(e, t, r, l));
};
function Nw(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yp(t) && et(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return yp(t) && Ut(n) ? !1 : t in e;
}
function Pw(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = An(t);
  return Array.isArray(n) ? n.some((o) => An(o) === r) : Object.keys(n).some((o) => An(o) === r);
}
const bp = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Je(t) ? (n) => Ys(t, n) : t;
};
function Aw(e) {
  e.target.composing = !0;
}
function vp(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const eu = /* @__PURE__ */ Symbol("_assign");
function _p(e, t, n) {
  return t && (e = e.trim()), n && (e = bf(e)), e;
}
const wp = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[eu] = bp(o);
    const a = r || o.props && o.props.type === "number";
    Do(e, t ? "change" : "input", (l) => {
      l.target.composing || e[eu](_p(e.value, n, a));
    }), (n || a) && Do(e, "change", () => {
      e.value = _p(e.value, n, a);
    }), t || (Do(e, "compositionstart", Aw), Do(e, "compositionend", vp), Do(e, "change", vp));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, l) {
    if (e[eu] = bp(l), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? bf(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, Cw = ["ctrl", "shift", "alt", "meta"], Iw = {
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
  exact: (e, t) => Cw.some((n) => e[`${n}Key`] && !t.includes(n))
}, At = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let l = 0; l < t.length; l++) {
      const u = Iw[t[l]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, Ew = /* @__PURE__ */ wn({ patchProp: Mw }, fw);
let xp;
function Ow() {
  return xp || (xp = K_(Ew));
}
const Of = ((...e) => {
  const t = Ow().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Tw(r);
    if (!o) return;
    const a = t._component;
    !et(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, Fw(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
});
function Fw(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Tw(e) {
  return Ut(e) ? document.querySelector(e) : e;
}
function Lo(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Dw() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Sp(e, t = 8) {
  var g;
  const n = (g = e == null ? void 0 : e.getContext) == null ? void 0 : g.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let l = r, u = o, d = -1, b = -1;
  for (let w = 0; w < o; w += 1)
    for (let x = 0; x < r; x += 1)
      a[(w * r + x) * 4 + 3] <= t || (x < l && (l = x), w < u && (u = w), x > d && (d = x), w > b && (b = w));
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
function Ff(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function qr(e, t, n) {
  if (!e) return Lo(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Et(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let tu = null, nu = null, kp = null, Mp = null, zt = null, Ma = null, kn = null, bi = null;
function Lw() {
  if (nu) return nu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), nu = n, n;
}
function ru(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  tu = qr(tu, n, r);
  const o = tu;
  Et(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", Mp !== o.ctx && (kp = o.ctx.createPattern(Lw(), "repeat"), Mp = o.ctx), o.ctx.fillStyle = kp, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function Rw(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function $w(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Vw(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function zw(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ot = /* @__PURE__ */ new Map(), Tf = 128;
function jw(e, t, n, r, o, a) {
  const l = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${l}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Ot.has(d)) {
    const G = Ot.get(d);
    return Ot.delete(d), Ot.set(d, G), G;
  }
  Ot.size >= Tf && Ot.delete(Ot.keys().next().value);
  const b = l * 2 + 2, g = l + 1, w = Ff(b, b), x = w.getContext("2d"), M = u * l, S = l + 1, v = `rgba(${n},${r},${o},${a})`, F = `rgba(${n},${r},${o},0)`, V = x.createRadialGradient(g, g, M, g, g, S);
  return V.addColorStop(0, v), V.addColorStop(1, F), x.fillStyle = V, x.fillRect(0, 0, b, b), Ot.set(d, w), w;
}
function Hw(e, t, n, r, o, a, l) {
  const { r: u, g: d, b, a: g } = r, w = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, o), S = Math.max(0, Math.min(0.99, a)), v = Math.max(0, Math.min(1, l ?? 0)), F = `chisel:${w}:${x}:${n.toFixed(2)}:${u}:${d}:${b}:${g.toFixed(3)}:${M.toFixed(2)}:${S.toFixed(2)}:${v.toFixed(2)}`;
  if (Ot.has(F)) {
    const Q = Ot.get(F);
    return Ot.delete(F), Ot.set(F, Q), Q;
  }
  Ot.size >= Tf && Ot.delete(Ot.keys().next().value);
  const V = Ff(w, x), G = V.getContext("2d"), E = G.createImageData(w, x), R = E.data, O = Math.max(0, e - t), $ = Math.max(0, Math.min(1, n)), H = 1 + M;
  for (let Q = 0; Q < x; Q++)
    for (let _e = 0; _e < w; _e++) {
      const T = _e + 0.5 - e, I = Q + 0.5 - t, se = Math.max(Math.abs(T) - O, 0), ue = Math.hypot(se, I) / t;
      if (ue >= 1) continue;
      const U = ue <= $ ? 1 : Math.max(0, (1 - ue) / Math.max(1e-4, 1 - $)), X = 1 - ue, j = 1 + M * (1 - X) * (1 - X), N = 1 - S * X * X, ee = j * N / H;
      let Y = 1;
      if (v > 0) {
        const St = Math.floor((I + t) / 1.5), pt = Math.floor((T + e) / 8), ln = eo(Bo(St * 41 + 500, pt * 19 + 300));
        Y = 1 - v * 0.42 * ln;
      }
      const Ie = Math.round(255 * Math.min(1, g * U * ee * Y));
      if (Ie <= 0) continue;
      const Fe = (Q * w + _e) * 4;
      R[Fe] = u, R[Fe + 1] = d, R[Fe + 2] = b, R[Fe + 3] = Ie;
    }
  return G.putImageData(E, 0, 0), Ot.set(F, V), V;
}
function Bo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function eo(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Gw(e, t, n, r, o, a, l) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), g = Math.max(Math.abs(u) - b, 0), w = Math.hypot(g, d) / r;
  if (w >= 1) return 0;
  const x = eo(Bo(e * 17 + 3, t * 13 + 7)), M = w + a * 0.22 * (x - 0.5);
  if (M >= 1) return 0;
  const S = M <= o ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - o)), v = Kw(e, t, u, d, n, r), F = a * 0.55;
  if (v < F) return 0;
  const G = 0.45 + 0.55 * ((v - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, l * S * G));
}
function Kw(e, t, n, r, o, a) {
  const l = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = eo(Bo(l * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), g = Math.floor((r + a) / 1.5), w = eo(Bo(b * 23 + 800, g * 29 + 500)), x = eo(Bo(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + w * 0.3 + x * 0.15;
}
function Bw(e, t, n, r, o) {
  const { r: a, g: l, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${g}:${n.toFixed(2)}:${a}:${l}:${u}:${d.toFixed(3)}:${w.toFixed(2)}`;
  if (Ot.has(x)) {
    const G = Ot.get(x);
    return Ot.delete(x), Ot.set(x, G), G;
  }
  Ot.size >= Tf && Ot.delete(Ot.keys().next().value);
  const M = Ff(b, g), S = M.getContext("2d"), v = S.createImageData(b, g), F = v.data, V = Math.max(0, Math.min(1, n));
  for (let G = 0; G < g; G++)
    for (let E = 0; E < b; E++) {
      const R = Gw(E, G, e, t, V, w, d);
      if (R <= 0) continue;
      const O = (G * b + E) * 4;
      F[O] = a, F[O + 1] = l, F[O + 2] = u, F[O + 3] = R;
    }
  return S.putImageData(v, 0, 0), Ot.set(x, M), M;
}
function Lg(e, t, n) {
  var v, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = Vw(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), l = Ww(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((v = t == null ? void 0 : t.angle) == null ? void 0 : v.value) ?? 0), b = zw(t, o), g = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", x = t == null ? void 0 : t.scatter, M = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const V = o * u, G = o, E = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), R = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = Hw(V, G, a, l, E, R, O);
  } else if (r === "crayon") {
    const V = o * u, G = o, E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = Bw(V, G, a, l, E);
  } else
    S = jw(o, a, l.r, l.g, l.b, l.a);
  return { ctx: e, stampTex: S, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: M, latitudeCorrection: w };
}
function Ww(e) {
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
function Uw(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Np(e, t, n, r, o) {
  const a = e.angle, l = e.desc.width;
  function u(b, g) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, g - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, g), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + l, n), t + d > l && u(t - l, n);
}
function Df(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: g } = e.scatter, w = b * e.radiusPx * o, x = Bo(t, n);
    for (let M = 0; M < g; M++) {
      const S = eo(x + M * 2) * Math.PI * 2, v = Math.sqrt(eo(x + M * 2 + 1)) * w, F = t + Math.cos(S) * v, V = n + Math.sin(S) * v, G = Math.max(0.5, e.radiusPx * o * 0.48), E = (0.5 - V / Math.max(1, e.desc.height)) * Math.PI, R = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(E)) : 1, O = G * e.aspect * R;
      Np(e, F, V, G, O);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), l = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(l)) : 1, d = a * e.aspect * u;
  Np(e, t, n, a, d);
}
function Pp(e, t, n) {
  const r = $w(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, l = Lg(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let x = 0; x < r.length; x++) {
    let M = Number(r[x].u || 0) * o;
    const S = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(M - u[x - 1].x) > o * 0.5 && (M += M < u[x - 1].x ? o : -o), u.push({ x: M, y: S });
  }
  if (Df(l, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], g = u[0], w = 0;
  for (let x = 1; x < u.length; x++) {
    const M = u[x], S = { x: (b.x + M.x) * 0.5, y: (b.y + M.y) * 0.5 };
    x === 1 ? w = Xa(l, g.x, g.y, S.x, S.y, w) : w = bl(l, d, g, S, M, w), d = b, b = M, g = S;
  }
  u.length === 2 ? Xa(l, g.x, g.y, b.x, b.y, w) : bl(l, d, g, b, b, w), e.restore();
}
function Zs(e, t, n) {
  var w;
  const r = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, l = Uw(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const M = Rw(r[x]);
    let S = Number(M.x || 0) * o;
    x > 0 && Math.abs(S - u[x - 1].x) > o * 0.5 && (S += S < u[x - 1].x ? o : -o), u.push({ x: S, y: Number(M.y || 0) * a }), S < d && (d = S), S > b && (b = S);
  }
  function g(x) {
    e.beginPath(), e.moveTo(u[0].x + x, u[0].y);
    for (let M = 1; M < u.length; M++) e.lineTo(u[M].x + x, u[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = l, g(0), d < 0 && g(o), b > o && g(-o), e.restore();
}
function Es(e, t, n) {
  var l;
  if (String(((l = t == null ? void 0 : t.geometry) == null ? void 0 : l.geometryKind) || "") === "lasso_fill") {
    Zs(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Pp(e, t, n) : (Ma = qr(Ma, n.width, n.height), Et(Ma), Pp(Ma.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(Ma.canvas, 0, 0), e.restore());
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
    Df(e, t + l * g, n + u * g, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function bl(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, g = 0, w = u, x = w + d, M = x + b, S = x - w, v = 16;
  let F = a, V = n.x, G = n.y;
  for (let E = 1; E <= v; E++) {
    const R = w + S * E / v, O = ((w - R) * t.x + (R - g) * n.x) / (w - g), $ = ((w - R) * t.y + (R - g) * n.y) / (w - g), H = ((x - R) * n.x + (R - w) * r.x) / (x - w), Q = ((x - R) * n.y + (R - w) * r.y) / (x - w), _e = ((M - R) * r.x + (R - x) * o.x) / (M - x), T = ((M - R) * r.y + (R - x) * o.y) / (M - x), I = ((x - R) * O + (R - g) * H) / (x - g), se = ((x - R) * $ + (R - g) * Q) / (x - g), le = ((M - R) * H + (R - w) * _e) / (M - w), ue = ((M - R) * Q + (R - w) * T) / (M - w), U = ((x - R) * I + (R - w) * le) / (x - w), X = ((x - R) * se + (R - w) * ue) / (x - w);
    F = Xa(e, V, G, U, X, F), V = U, G = X;
  }
  return F;
}
function Yw(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, l = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * l;
  if (d && Math.abs(b - d.prev.x) > l * 0.5 && (b += b < d.prev.x ? l : -l), !d) {
    const M = Lg(o, r, a), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), v = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", V = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", Df(M, b, u, 1), e.activeStroke = {
      pprev: { x: b, y: u },
      prev: { x: b, y: u },
      lastMidX: b,
      lastMidY: u,
      stampTex: M.stampTex,
      radiusPx: M.radiusPx,
      spacingPx: M.spacingPx,
      aspect: M.aspect,
      angle: M.angle,
      stampKind: M.stampKind,
      scatter: M.scatter,
      latitudeCorrection: M.latitudeCorrection,
      strokeOpacity: S,
      velocityWidthFactor: v,
      distSinceStamp: 0,
      isEraser: F,
      layerKind: V,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const g = (d.prev.x + b) * 0.5, w = (d.prev.y + u) * 0.5;
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
  d.pointCount === 1 ? d.distSinceStamp = Xa(x, d.lastMidX, d.lastMidY, g, w, d.distSinceStamp) : d.distSinceStamp = bl(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: g, y: w },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = g, d.lastMidY = w, d.pointCount++, e.displayDirty = !0;
}
function ju(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = Lo(t, n), l = {
    descriptor: r,
    committedMask: Lo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Lo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = Lo(t, n);
  let b = null, g = "", w = null;
  function x(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: Lo(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(T) {
    let I = o.get(T);
    return I || (I = x(T), o.set(T, I)), I;
  }
  function S(T) {
    return g === "mask" ? l : b ? M(b) : u;
  }
  function v(T) {
    var X;
    const I = !w || w.length !== T.length || T.some((j, N) => j !== w[N]), se = g === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    let le = l.displayDirty || u.displayDirty || I;
    for (const j of T) {
      const N = o.get(j);
      if (N != null && N.displayDirty) {
        le = !0;
        break;
      }
    }
    if (se && (le = !0), !le) return;
    l.displayDirty = !1, u.displayDirty = !1;
    for (const j of T) {
      const N = o.get(j);
      N && (N.displayDirty = !1);
    }
    w = [...T];
    const ue = d.ctx;
    Et(d);
    const U = !!(se != null && se.isEraser);
    for (const j of T) {
      const N = o.get(j);
      if (!N) continue;
      const Y = b === N.actionGroupId && g === "paint" ? N.activeStroke : null;
      if (U)
        zt = qr(zt, t, n), Et(zt), zt.ctx.drawImage(N.committedPaint.canvas, 0, 0), $i(zt.ctx, a.canvas), ue.drawImage(zt.canvas, 0, 0);
      else if (ue.drawImage(N.committedPaint.canvas, 0, 0), Y) {
        const Ie = N.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Y.strokeOpacity ?? 1));
        ue.save(), ue.globalAlpha = Ie, ue.drawImage(a.canvas, 0, 0), ue.restore();
      }
    }
  }
  function F(T) {
    var se, le, ue, U, X;
    for (const j of o.values())
      Et(j.committedPaint), Et(j.currentStroke), j.activeStroke = null, j.displayDirty = !0;
    Et(l.committedMask), Et(l.currentStroke), l.activeStroke = null, l.displayDirty = !0, u.displayDirty = !0, w = null;
    const I = [
      ...Array.isArray((le = (se = T == null ? void 0 : T.painting) == null ? void 0 : se.paint) == null ? void 0 : le.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((U = (ue = T == null ? void 0 : T.painting) == null ? void 0 : ue.mask) == null ? void 0 : U.strokes) ? T.painting.mask.strokes : []
    ];
    for (const j of I) {
      if (((X = j == null ? void 0 : j.targetSpace) == null ? void 0 : X.kind) !== "ERP_GLOBAL") continue;
      const N = String((j == null ? void 0 : j.layerKind) || "paint"), Y = String((j == null ? void 0 : j.toolKind) || "pen") === "eraser";
      if (N === "mask") {
        const Ie = l.descriptor;
        Y ? (zt = qr(zt, Ie.width, Ie.height), Et(zt), Es(zt.ctx, j, Ie), $i(l.committedMask.ctx, zt.canvas)) : Es(l.committedMask.ctx, j, Ie);
        continue;
      }
      if (Y) {
        zt = qr(zt, r.width, r.height), Et(zt), Es(zt.ctx, j, r);
        for (const Ie of o.values())
          $i(Ie.committedPaint.ctx, zt.canvas), Ie.displayDirty = !0;
      } else {
        const Ie = String((j == null ? void 0 : j.actionGroupId) || "__default__"), Fe = M(Ie), St = Fe.descriptor;
        Es(Fe.committedPaint.ctx, j, St), Fe.displayDirty = !0;
      }
    }
    v([...o.keys()]);
  }
  function V(T, I) {
    g = String((T == null ? void 0 : T.layerKind) || "");
    const se = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (g === "mask")
      b = null, Et(l.currentStroke), l.activeStroke = null, l.displayDirty = !0;
    else {
      const le = se ? u : M(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      b = se ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Et(le.currentStroke), le.activeStroke = null, le.displayDirty = !0;
    }
  }
  function G(T, I) {
    var N;
    const se = String((T == null ? void 0 : T.layerKind) || "paint"), le = String((T == null ? void 0 : T.toolKind) || "") === "eraser", ue = se === "mask" ? l : le ? u : M(String((T == null ? void 0 : T.actionGroupId) || b || "__default__")), U = ue.activeStroke, X = ue.descriptor;
    if (U && U.pointCount > 1) {
      const ee = ue.currentStroke.ctx;
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
    ue.lassoPreviewActive && (Et(ue.currentStroke), Zs(ue.currentStroke.ctx, T, X), ue.lassoPreviewActive = !1);
    const j = se === "mask" ? l.committedMask : ue.committedPaint;
    if (le && se === "paint")
      for (const ee of o.values())
        $i(ee.committedPaint.ctx, ue.currentStroke.canvas), ee.displayDirty = !0;
    else if (le)
      $i(j.ctx, ue.currentStroke.canvas);
    else {
      const ee = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      j.ctx.save(), j.ctx.globalAlpha = ee, j.ctx.drawImage(ue.currentStroke.canvas, 0, 0), j.ctx.restore();
    }
    Dw() && (String((T == null ? void 0 : T.toolKind) || ""), String((X == null ? void 0 : X.kind) || ""), Number((X == null ? void 0 : X.width) || 0), Number((X == null ? void 0 : X.height) || 0), String(((N = T == null ? void 0 : T.targetSpace) == null ? void 0 : N.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), Sp(ue.currentStroke.canvas), Sp(j.canvas), void 0), Et(ue.currentStroke), ue.activeStroke = null, ue.displayDirty = !0, b = null, g = "", v([...o.keys()]);
  }
  function E(T) {
    if (g === "mask")
      Et(l.currentStroke), l.activeStroke = null, l.lassoPreviewActive = !1, l.displayDirty = !0;
    else if (g === "paint" && !b)
      Et(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const I = o.get(b);
      I && (Et(I.currentStroke), I.activeStroke = null, I.lassoPreviewActive = !1, I.displayDirty = !0);
    }
    b = null, g = "", v([...o.keys()]);
  }
  function R(T, I) {
    var le;
    if (g = String((T == null ? void 0 : T.layerKind) || ""), String(((le = T == null ? void 0 : T.geometry) == null ? void 0 : le.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        Et(l.currentStroke), Zs(l.currentStroke.ctx, T, l.descriptor), l.lassoPreviewActive = !0, l.displayDirty = !0;
      else {
        const ue = String((T == null ? void 0 : T.toolKind) || "") === "eraser", U = ue ? u : M(String((T == null ? void 0 : T.actionGroupId) || b || "__default__"));
        b = ue ? "" : String((T == null ? void 0 : T.actionGroupId) || b || "__default__"), Et(U.currentStroke), Zs(U.currentStroke.ctx, T, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
      }
      v([...o.keys()]);
    }
  }
  function O(T) {
    return v(T ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: l.committedMask,
      descriptor: r
    };
  }
  function $(T) {
    return o.get(String(T)) ?? null;
  }
  function H() {
    return [...o.keys()];
  }
  function Q(T) {
    var X;
    const I = o.get(String(T));
    if (!I) return null;
    const se = g === "paint" && b === I.actionGroupId, le = g === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    if (le != null && le.isEraser)
      return kn = qr(kn, t, n), Et(kn), kn.ctx.drawImage(I.committedPaint.canvas, 0, 0), $i(kn.ctx, a.canvas), kn.canvas;
    const ue = se ? I.activeStroke : null;
    if (!ue) return I.committedPaint.canvas;
    kn = qr(kn, t, n), Et(kn), kn.ctx.drawImage(I.committedPaint.canvas, 0, 0);
    const U = I.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ue.strokeOpacity ?? 1));
    return kn.ctx.save(), kn.ctx.globalAlpha = U, kn.ctx.drawImage(a.canvas, 0, 0), kn.ctx.restore(), kn.canvas;
  }
  function _e() {
    return bi = qr(bi, t, n), Et(bi), ru(bi.ctx, l.committedMask.canvas), g === "mask" && l.activeStroke && (l.activeStroke.isEraser ? (zt = qr(zt, t, n), Et(zt), zt.ctx.drawImage(l.committedMask.canvas, 0, 0), $i(zt.ctx, a.canvas), Et(bi), ru(bi.ctx, zt.canvas)) : ru(bi.ctx, a.canvas)), bi.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: V,
    appendStrokePoint: Yw,
    updateActiveStroke: R,
    commitActiveStroke: G,
    cancelActiveStroke: E,
    getErpTarget: O,
    ensureTarget: S,
    getGroupTarget: $,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: H
  };
}
function J(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function jt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Xw(e, t) {
  let n = jt(t) - jt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Hu = 3;
function Na(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function vl(e, t = 0) {
  const n = Na(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Na(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = Na(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = Na(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(Na(t) || 0);
}
function Rg(e) {
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
const Ap = Math.PI / 180, Cp = 0.12, qw = Hu, Jw = 35, Zw = 140, Ea = 100, Qw = 20, Ip = 0.8;
function ex(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = J(Number(e || Ea), 1, 179) * Ap;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / Ap;
}
function Lf(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ea })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), l = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(G, E = null) {
    u && u(G, E);
  }
  function g(G, E, R = null, O = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(G || 0), d.drag.lastY = Number(E || 0), d.drag.lastTs = Number(O || performance.now()), d.drag.pointerId = R, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: R }), !0;
  }
  function w(G, E, R = "pano", O = performance.now()) {
    if (!d.drag.active) return !1;
    const $ = Number(O || performance.now()), H = Number(G), Q = Number(E), _e = H - d.drag.lastX, T = Q - d.drag.lastY;
    d.drag.lastX = H, d.drag.lastY = Q, d.drag.lastTs = $;
    const I = r() || { x: 1, y: 1 }, se = Number(I.x || 1), le = Number(I.y || 1), ue = { ...t() };
    let U = 0, X = 0;
    if (R === "unwrap") {
      const N = o() || { w: 1, h: 1 }, ee = Math.max(1, Number(N.w || 1)), Y = Math.max(1, Number(N.h || 1)), Ie = _e / ee, Fe = T / Y;
      U = -Ie * 360 * se, X = Fe * 180 * le;
    } else {
      const N = a() || { w: 0, h: 0 }, ee = Math.max(1, Number(N.w || 0)), Y = Math.max(1, Number(N.h || 0));
      if (ee > 1 && Y > 1) {
        const Ie = J(Number(ue.fov || Ea), 1, 179), Fe = J(ex(Ie, ee, Y), 0.1, 179);
        U = -(_e / ee) * Ie * se, X = T / Y * Fe * le;
      } else
        U = -_e * Cp * se, X = T * Cp * le;
    }
    ue.yaw = jt(Number(ue.yaw || 0) + U), ue.pitch = J(Number(ue.pitch || 0) + X, -89.9, 89.9), n(ue), d.velHistory.push({ ts: $, yaw: ue.yaw, pitch: ue.pitch });
    let j = 0;
    for (; j < d.velHistory.length - 1 && d.velHistory[j].ts < $ - 100; ) j++;
    return j > 0 && d.velHistory.splice(0, j), d.inertia.active = !1, d.inertia.lastTs = $, l(), b("drag", { phase: "move", dx: _e, dy: T, dYaw: U, dPitch: X }), !0;
  }
  function x(G = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const E = Number(G || performance.now());
    d.drag.lastTs = E;
    const R = d.velHistory.filter(($) => E - $.ts <= 80);
    if (R.length >= 2) {
      const $ = R[0], H = R.at(-1), Q = Math.max(1e-3, (H.ts - $.ts) / 1e3);
      let _e = H.yaw - $.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / Q, d.inertia.vy = (H.pitch - $.pitch) / Q;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const O = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = O > Qw, d.inertia.lastTs = E, b("drag", { phase: "end", speed: O, inertiaActive: d.inertia.active }), !0;
  }
  function M(G = performance.now()) {
    if (!d.inertia.active) return !1;
    const E = Number(G || performance.now()), R = Math.max(1e-3, (E - (d.inertia.lastTs || E)) / 1e3);
    d.inertia.lastTs = E;
    const O = { ...t() };
    O.yaw = jt(Number(O.yaw || 0) + d.inertia.vx * R), O.pitch = J(Number(O.pitch || 0) + d.inertia.vy * R, -89.9, 89.9);
    const $ = Math.exp(-5.5 * R);
    return d.inertia.vx *= $, d.inertia.vy *= $, Math.abs(d.inertia.vx) < Ip && Math.abs(d.inertia.vy) < Ip && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(O), l(), d.inertia.active;
  }
  function S() {
    const G = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], G;
  }
  function v(G) {
    const E = Math.sign(Number(G || 0));
    if (!E) return !1;
    const R = { ...t() }, O = Number(R.fov || Ea);
    return R.fov = J(O + E * qw, Jw, Zw), n(R), l(), b("wheel", { deltaSign: E, fovBefore: O, fovAfter: R.fov }), !0;
  }
  function F(G, E = 0) {
    return v(vl(G, E));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: Ea }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, l();
  }
  return {
    state: d,
    startDrag: g,
    moveDrag: w,
    endDrag: x,
    stepInertia: M,
    stopMotion: S,
    applyWheel: v,
    applyWheelEvent: F,
    resetView: V
  };
}
const Zt = Math.PI / 180, _n = 180 / Math.PI;
function ir(e, t, n) {
  return { x: e, y: t, z: n };
}
function _l(e, t) {
  return ir(e.x + t.x, e.y + t.y, e.z + t.z);
}
function wl(e, t) {
  return ir(e.x * t, e.y * t, e.z * t);
}
function iu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Rf(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ir(e.x / t, e.y / t, e.z / t);
}
function $n(e, t) {
  const n = e * Zt, r = t * Zt, o = Math.cos(r);
  return ir(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function oa(e, t, n = 0) {
  const r = Number(e || 0) * Zt, o = Number(t || 0) * Zt, a = n * Zt, l = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), g = Math.cos(a), w = Math.sin(a);
  return {
    right: ir(
      l * g - u * b * w,
      d * w,
      -u * g - l * b * w
    ),
    up: ir(
      -l * w - u * b * g,
      d * g,
      u * w - l * b * g
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
function tx() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function nx(e) {
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
function rx(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function ix(e, t) {
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
    const a = ix(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function ox(e, t, n, r) {
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
function ax(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = rx(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = ox(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = bt(e.size, null), l = bt(e.opacity, null);
  if (a == null || l == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = bt(e.radiusValue, null), g = String(e.radiusModel || "").trim() || null;
  let w = null;
  if (t === "paint") {
    const x = e.color;
    if (!x || typeof x != "object") return null;
    w = {
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
    color: w,
    radiusModel: g,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function Ep(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = ax(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function sx(e) {
  if (!e || typeof e != "object") return null;
  const t = bt(e.u0, null), n = bt(e.v0, null), r = bt(e.u1, null), o = bt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), l = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return l.u1 <= l.u0 || l.v1 <= l.v0 ? null : l;
}
function lx(e) {
  const t = e || {};
  return {
    du: bt(t.du, 0) ?? 0,
    dv: bt(t.dv, 0) ?? 0,
    rot_deg: bt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, bt(t.scale, 1) ?? 1)
  };
}
function cx(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = sx(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, bt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: lx(e.transform)
  } : null;
}
function ux(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = cx(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function Wo(e) {
  const t = tx();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: nx(e.groups),
    paint: Ep(e.paint, "paint"),
    mask: Ep(e.mask, "mask"),
    raster_objects: ux(e.raster_objects)
  };
}
const Lr = 1, Rr = 179, Gu = 85;
function Ql(e) {
  const t = ((tt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function $g(e, t) {
  let n = tt(e, 0) - tt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Vg(e, t, { shiftKey: n = !1 } = {}) {
  let r = tt(e, 0) + tt(t, 0) * _n;
  return n && (r = Math.round(r / 15) * 15), Ql(r);
}
function tt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function si(e = {}) {
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
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = si(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function $f(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, tt(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function Vf(e, t) {
  const n = Math.max(1e-12, tt(t, 1)), r = Math.max(1e-6, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = J(2 * Math.atan(r / (2 * n)) * _n, Lr, Rr), l = J(2 * Math.atan(o / (2 * n)) * _n, Lr, Rr);
  return { hFOV_deg: a, vFOV_deg: l };
}
function fx(e, t, n) {
  const r = tt(e == null ? void 0 : e.x, 0), o = tt(e == null ? void 0 : e.y, 0), a = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), l = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = si(t), d = Math.max(1e-12, tt(n, 1)), b = 2 * d * u.tanHalfX, g = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (l - g) * 0.5,
    w: b,
    h: g,
    focalPx: d
  };
}
function zf(e, t, n = Gu) {
  const r = Math.max(1e-12, tt(t, 1)), o = J(tt(n, Gu), 1, 89.999), a = r * Math.tan(o * Zt), l = Math.max(1, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(l * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function zg(e, t, n) {
  const r = Math.max(1e-12, tt(t, 1));
  return {
    x: (tt(n == null ? void 0 : n.x, 0) - tt(e == null ? void 0 : e.x, 0)) / r,
    y: -(tt(n == null ? void 0 : n.y, 0) - tt(e == null ? void 0 : e.y, 0)) / r
  };
}
function Qs(e, t) {
  const n = J(tt(e, 60), Lr, Rr), r = Math.max(1e-6, tt(t, 1));
  return J(
    2 * Math.atan(Math.tan(n * Zt * 0.5) * r) * _n,
    Lr,
    Rr
  );
}
function Op(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function dx(e, t) {
  const n = Op(e, 1), r = Op(t, 1);
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
  return (r == null ? void 0 : r[0]) || dx(t, 1);
}
function jg(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ui(t), t;
}
function Hg({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const l = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(l) ? J(l, Lr, Rr) : J(Math.min(42, tt(o, 100) * 0.42), 8, 96);
  return jg({
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
function Jr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ui(e);
}
function Gg(e, t) {
  const n = si(e), r = tt(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * _n, a = 2 * Math.atan(n.tanHalfY * r) * _n;
  return o < Lr || o > Rr || a < Lr || a > Rr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function Kg(e, t, n = Hu) {
  const r = Math.sign(tt(t, 0)), o = Math.abs(tt(n, Hu));
  if (!r || !(o > 0)) return null;
  const a = si(e), l = a.hFovDeg + r * o;
  if (l < Lr || l > Rr) return null;
  const u = Math.tan(l * Zt * 0.5);
  return Gg(e, u / a.tanHalfX);
}
function Bg(e, t) {
  const n = si(e), r = oa(n.yawDeg, n.pitchDeg, n.rollDeg), o = tt(t == null ? void 0 : t.x, 0), a = tt(t == null ? void 0 : t.y, 0);
  return Rf(_l(_l(r.fwd, wl(r.right, o)), wl(r.up, a)));
}
function hx(e) {
  return ir(e.x, e.y, -e.z);
}
function el(e) {
  return ir(e.x, e.y, -e.z);
}
function $r(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = oa(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function px(e) {
  const t = el(ir(e[0][0], e[1][0], e[2][0])), n = el(ir(e[0][1], e[1][1], e[2][1])), r = el(ir(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), l = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - l * n.x, l * t.x - u * t.z);
  return { yawDeg: o * _n, pitchDeg: a * _n, rollDeg: d * _n };
}
function jf(e) {
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
  const w = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / w, y: (l + d) / w, z: 0.25 * w, w: (o - n) / w };
}
function Fs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Xi = 1e-6, Ku = 1e-6, mx = 1e-9;
function qa(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function gx(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let l = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (l + u);
    qa(0, n, o, 1, b) < t ? l = b : u = b;
  }
  return qa(0, r, a, 1, 0.5 * (l + u));
}
function ea(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function ta(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], l = n.map((x) => -x / o), u = r.map((x) => x / a);
  if (l.reduce((x, M, S) => x + M * u[S], 0) < 0) return n.map(() => 0);
  const d = l.map((x, M) => (x * a + u[M] * o) / (o + a)), b = (x) => Math.sqrt(x.reduce((M, S) => M + S * S, 0)), g = 3 * Math.min(b(l), b(u)), w = b(d);
  return w <= g ? d : d.map((x) => x * g / w);
}
function Wg(e, t, n, r) {
  const o = n[r], a = n[r + 1], l = t[r + 1] - t[r], u = o.map((g, w) => a[w] - g);
  let d = u;
  ea(e, r) && (d = ta(t, r, n[r - 1].map((g, w) => g - o[w]), u).map((g) => g * l));
  let b = u;
  return ea(e, r + 1) && (b = ta(t, r + 1, u.map((g) => -g), n[r + 2].map((g, w) => g - a[w])).map((g) => g * l)), [d.map((g) => g / 3), b.map((g) => -g / 3)];
}
function Ug(e, t, n, r, o) {
  const [[a], [l]] = Wg(e, t, n.map((u) => [u]), r);
  return qa(n[r], n[r] + a, n[r + 1] + l, n[r + 1], o);
}
function yx(e, t, n, r) {
  var b, g;
  const o = e.map((w) => w.value);
  let [a, l] = Wg(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, l = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? l;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((w) => qa(u[w], u[w] + a[w], d[w] + l[w], d[w], r));
}
function Sl([e, t, n, r], [o, a, l, u]) {
  return [
    r * o + e * u + t * l - n * a,
    r * a - e * l + t * u + n * o,
    r * l + e * a - t * o + n * u,
    r * u - e * o - t * a - n * l
  ];
}
function bx(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function ou(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function vx([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function Bu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function zo(e, t) {
  return vx(Sl([-e[0], -e[1], -e[2], e[3]], t));
}
function au(e, t, n) {
  return Sl(e, Bu(zo(e, t).map((r) => n * r)));
}
function su(e, t) {
  const n = bx(e, t);
  if (Math.abs(n) > Ku) return n < 0;
  const [r, o, a] = zo(e, t);
  for (const l of [-o, r, a])
    if (Math.abs(l) > Ku) return l < 0;
  return !1;
}
function Ts(e) {
  const { x: t, y: n, z: r, w: o } = co($r(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Wu(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function _x(e, t, n, r) {
  const o = Ts(e[n].value);
  let a = Ts(e[n + 1].value);
  su(o, a) && (a = ou(a));
  const l = t[n + 1] - t[n], u = zo(o, a);
  let d = u;
  if (ea(e, n)) {
    let O = Ts(e[n - 1].value);
    su(O, o) && (O = ou(O)), d = ta(t, n, zo(o, O), u).map(($) => $ * l);
  }
  let b = u;
  if (ea(e, n + 1)) {
    let O = Ts(e[n + 2].value);
    su(a, O) && (O = ou(O)), b = ta(t, n + 1, zo(a, o), zo(a, O)).map(($) => $ * l);
  }
  const g = Sl(o, Bu(d.map((O, $) => 0.5 * (O - u[$])))), w = Sl(a, Bu(u.map((O, $) => 0.5 * (O - b[$])))), [x, M, S, v] = au(au(o, a, r), au(g, w, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: V, rollDeg: G } = px(jf({ x, y: M, z: S, w: v })), E = e[n].value, R = e[n + 1].value;
  return {
    yaw_deg: Wu(F, E.yaw_deg, R.yaw_deg, r),
    pitch_deg: V,
    roll_deg: Wu(G, E.roll_deg, R.roll_deg, r)
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
function Yg(e, t) {
  const n = Ja(e, t), r = t.map((l, u) => l - n * e[u]), o = kl(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((l) => l * a);
}
function Ro(e, t) {
  const n = kl(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Ds(e, t, n) {
  return Ro(e, Yg(e, t).map((r) => n * r));
}
function lu(e, t) {
  const n = Ml(e[t].value), r = Ml(e[t + 1].value), o = Ja(n, r), a = o < 0 && kl(r.map((d, b) => d - o * n[b])) <= Ku;
  let l;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    l = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    l = Yg(n, r);
  const u = kl(l);
  return [l, l.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function wx(e, t, n, r) {
  const o = Ml(e[n].value), a = Ml(e[n + 1].value), [l, u, d] = lu(e, n);
  let b = l, g = u;
  const w = t[n + 1] - t[n];
  ea(e, n) && (b = ta(t, n, lu(e, n - 1)[1].map((E) => -E), b).map((E) => E * w)), ea(e, n + 1) && (g = ta(t, n + 1, g.map((E) => -E), lu(e, n + 1)[0]).map((E) => E * w));
  let x, M, S;
  if (d) {
    const E = Math.PI, R = qa(0, Ja(b, l) / E / 3, E - Ja(g, u) / E / 3, E, r);
    [x, M, S] = Ro(o, l.map((O) => R * O / E));
  } else {
    const E = Ds(Ro(o, b.map(($) => $ / 3)), Ro(a, g.map(($) => -$ / 3)), r), R = Ds(Ro(o, b.map(($) => r * $ / 3)), E, r), O = Ds(E, Ro(a, g.map(($) => -(1 - r) * $ / 3)), r);
    [x, M, S] = Ds(R, O, r);
  }
  const v = Math.hypot(x, S), F = e[n].value.yaw_deg, V = e[n + 1].value.yaw_deg;
  return { yaw_deg: v <= mx ? F + (V - F) * r : Wu(Math.atan2(x, S) * 180 / Math.PI, F, V, r), pitch_deg: Math.atan2(M, v) * 180 / Math.PI };
}
function xx(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = Ug(e, t, e.map((l) => l.value[a]), n, r);
  return o;
}
function Sx(e, t, n, r) {
  return Ug(e, t, e.map((o) => o.value), n, r);
}
const kx = { position: yx, rotation: _x, direction: wx, size: xx };
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
  const u = r.map((b) => b.frame), d = gx(l.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (kx[t] ?? Sx)(r, u, a, d);
}
function Uu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Mx(e) {
  return Math.min(1, Math.max(0, e));
}
function Xg(e) {
  return Math.max(1e-6, e);
}
function qg(e, t) {
  return t - (e.start - e.in);
}
function xi(e, t) {
  return t >= e.start - Xi && (e.duration === null || t < e.start + e.duration - Xi);
}
function Hf(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = qg(o.clip, n);
  return {
    frame: n,
    camera: {
      position: Jt(r, "position", n),
      ...Jt(r, "rotation", n),
      hFOV_deg: Uu(Jt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: xi(o.clip, n),
      clip_frame: a,
      position: Jt(o, "position", a),
      ...Jt(o, "rotation", a),
      scale: Xg(Jt(o, "scale", a))
    },
    stickers: e.stickers.map((l) => ec(l, n))
  };
}
function Nx(e, t) {
  if (e.placement === "world")
    return {
      position: Jt(e, "position", t),
      ...Jt(e, "rotation", t),
      scale: Xg(Jt(e, "scale", t))
    };
  const n = Jt(e, "size", t);
  return {
    ...Jt(e, "direction", t),
    roll_deg: Jt(e, "roll", t),
    hFOV_deg: Uu(n.hFOV_deg),
    vFOV_deg: Uu(n.vFOV_deg)
  };
}
function ec(e, t) {
  const n = qg(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && xi(e.clip, t),
    clip_frame: n,
    ...Nx(e, n),
    opacity: Mx(Jt(e, "opacity", n))
  };
}
const Px = 2, Ax = ["sky", "world"], Cx = ["input", "output", "temp"], Jg = [0.42, 0, 0.58, 1];
function nn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Kt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Nl(e, t) {
  const n = Kt(e, t);
  return n !== null && n > 0 ? n : t;
}
function nr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ro(e) {
  const t = Kt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Fp(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Zg(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Kt(n, null));
  return t.includes(null) ? null : t;
}
function Qg(e) {
  return Zg(e) || [0, 0, 0];
}
function e0(e) {
  const t = nn(e) ? e : {};
  return {
    yaw_deg: Kt(t.yaw_deg, 0),
    pitch_deg: nr(Kt(t.pitch_deg, 0), -90, 90),
    roll_deg: Kt(t.roll_deg, 0)
  };
}
function Ix(e) {
  return nr(Kt(e, 90), 0.1, 179);
}
function Ex(e) {
  return Nl(e, 1);
}
function Ox(e) {
  const t = nn(e) ? e : {};
  return {
    yaw_deg: Kt(t.yaw_deg, 0),
    pitch_deg: nr(Kt(t.pitch_deg, 0), -90, 90)
  };
}
function Fx(e) {
  return Kt(e, 0);
}
function Tx(e) {
  const t = nn(e) ? e : {};
  return {
    hFOV_deg: nr(Kt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: nr(Kt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function t0(e) {
  return nr(Kt(e, 1), 0, 1);
}
const Gf = [["position", Qg], ["rotation", e0], ["fov", Ix]], tc = [["position", Qg], ["rotation", e0], ["scale", Ex]], Kf = [["direction", Ox], ["roll", Fx], ["size", Tx], ["opacity", t0]], Bf = [...tc, ["opacity", t0]];
function Dx(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Kt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...Jg];
}
function Lx(e) {
  if (!nn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Zg(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function Rx(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!nn(o)) continue;
    const a = ro(o.frame);
    if (a === null) continue;
    const l = { frame: a, value: t(o.value), easing: Dx(o.easing) }, u = n ? Lx(o.handles) : null;
    u && (l.handles = u), r.set(a, l);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function Yu(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = nn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: Rx(a.keyframes, o, r === "position") };
  }
  return n;
}
function n0(e) {
  const t = nn(e) ? e : {}, n = ro(t.start), r = ro(t.in), o = ro(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function $x(e) {
  const t = nn(e) ? e : {}, n = nr(Kt(t.x0, 0), 0, 1), r = nr(Kt(t.y0, 0), 0, 1), o = nr(Kt(t.x1, 1), 0, 1), a = nr(Kt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function Vx(e) {
  if (!nn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Cx.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function zx(e) {
  const t = Vx(e.source);
  if (!t) return null;
  const n = Ax.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: n0(e.clip),
    visible: Fp(e.visible, !0),
    locked: Fp(e.locked, !1),
    crop: $x(e.crop),
    ...Yu(e, r ? Bf : Kf)
  };
  return r || (o.z_index = ro(e.z_index) ?? 0), o;
}
function jx(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const l = nn(a) ? zx(a) : null;
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
    version: Px,
    timeline: {
      fps: Nl(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: Nl(n.aspect, 1), ...Yu(n, Gf) },
    scene: { clip: n0(r.clip), ...Yu(r, tc) },
    stickers: jx(e.stickers),
    painting: Wo(e.painting),
    painting_layer: nn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function Hx(e, t) {
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
function Gx(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!nn(t)) return {};
  const n = nr(Kt(t.hFOV_deg, 90), 1, 179), r = nr(Kt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function Kx(e) {
  const t = nn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(nn) : [];
  return n.sort((r, o) => Kt(r.z_index, 0) - Kt(o.z_index, 0)), Pl({
    camera: Gx(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: Hx(r, t),
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
  return n === 1 ? Kx(t) : Pl(t);
}
function cu(e, t, n, r, o) {
  const a = {};
  for (const [l] of t)
    a[l] = {
      value: e[l].value,
      keyframes: e[l].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function Tp(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function r0(e, t) {
  if (Nl(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (l) => ro(l * n), { length: o } = e.timeline, a = Tp(e.scene.clip, r);
  return Pl({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: { aspect: e.camera.aspect, ...cu(e.camera, Gf, r, 0, 0) },
    scene: { clip: a.clip, ...cu(e.scene, tc, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((l) => {
      const { clip: u, anchor: d, newAnchor: b } = Tp(l.clip, r), g = l.placement === "world" ? Bf : Kf;
      return { ...l, clip: u, ...cu(l, g, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function uu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function i0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Wf(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= Xi);
}
function o0(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? i0(e.keyframes[r - 1].easing) : [...Jg];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function io(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = uu(o.value, r);
    return;
  }
  const a = Wf(o, n);
  a ? a.value = uu(a.value, r) : o0(o, n, uu(Jt(e, t, n), r));
}
function uo(e) {
  return e.placement === "world" ? Bf.map(([t]) => t) : e.placement === "sky" ? Kf.map(([t]) => t) : (e.clip ? tc : Gf).map(([t]) => t);
}
function Bx(e, t) {
  for (const n of uo(e))
    Wf(e[n], t) || o0(e[n], t, Jt(e, n, t));
}
function Wx(e) {
  const t = uo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function Ux(e, t) {
  return uo(e).every((n) => !!Wf(e[n], t));
}
function Yx(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const l = e[a];
    if (!l.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Jt(e, a, r);
    l.keyframes = l.keyframes.filter((d) => !o.has(d.frame)), l.keyframes.length || (l.value = u);
  }
}
function Xx(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const l of t) {
    const u = e[l], d = u.keyframes.filter((g) => a.has(g.frame)).map((g) => ({ ...g, frame: g.frame + r })), b = new Set(d.map((g) => g.frame));
    u.keyframes = [
      ...u.keyframes.filter((g) => !a.has(g.frame) && !b.has(g.frame)),
      ...d
    ].sort((g, w) => g.frame - w.frame);
  }
  return r;
}
function a0(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((l) => n.length > 1 ? l.frame >= r && l.frame < o : l.frame === r));
}
function qx(e, t, n) {
  const r = a0(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function Jx(e, t, n, r) {
  for (const o of a0(e, t, n)) o.easing = i0(r);
}
function Zx(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Qx(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function eS(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function Dp(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Xu(e) {
  return uo(e).map((t) => e[t]);
}
function qu(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => Xu(t).some((n) => n.keyframes.length > 0)) || !Dp(e.scene.clip) || e.stickers.some((t) => !Dp(t.clip));
}
function s0(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = e.timeline.length ?? Math.max(t, n);
  for (const a of Xu(e.camera))
    for (const l of a.keyframes) o = Math.max(o, l.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: l } = a;
    o = Math.max(o, l.duration === null || l === r ? l.start + 1 : l.start + l.duration);
    for (const u of Xu(a))
      for (const d of u.keyframes) o = Math.max(o, l.start - l.in + d.frame + 1);
  }
  return o;
}
function tS(e, t) {
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
function nS({
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
    painting: Wo(null),
    painting_layer: null,
    ui_settings: Al(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function l0(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function rS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function iS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function oS(e) {
  return Array.isArray(e) ? e.map((t) => jg(t)) : [];
}
function aS(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((l) => String((l == null ? void 0 : l.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function c0(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = nS(n), o = String(e || "").trim();
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
      assets: rS(a.assets),
      stickers: iS(a.stickers),
      shots: oS(a.shots),
      painting: Wo(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: Al(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return l && (u.ui_settings = Al({ ...u.ui_settings, ...l })), u.output_preset = l0(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Gn(n.coverage), delete u.editor_history, u;
  } catch {
    return Ls = { text: o, parsed: null }, r;
  }
}
function Lp(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function sS(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function lS(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function u0(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: l, fps: u = null } = t;
  let d;
  try {
    d = so(e);
  } catch {
    d = so(null);
  }
  return u && u !== d.timeline.fps && (d = r0(d, u)), {
    ...d,
    coverage: Gn(o),
    bg_color: r,
    output_preset: l0(n),
    ui_settings: Al(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...l }
  };
}
function cS(e, t) {
  const n = r0(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, l] of o)
    if (l) {
      a.clip && (a.clip = l.clip);
      for (const u of uo(a)) a[u].keyframes = l[u].keyframes;
    }
}
function Uf(e, t) {
  const n = ec(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const uS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Rp(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function fS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[uS[n]].keyframes.length));
}
function f0(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = Rp(n, ["yaw_deg", "pitch_deg"]), a = Rp(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && io(e, "direction", r, o), n.rot_deg !== void 0 && io(e, "roll", r, n.rot_deg), Object.keys(a).length && io(e, "size", r, a);
}
const d0 = ["position_x", "position_y", "position_z"];
function dS(e, t) {
  const n = Jt(e, "position", t), r = Jt(e, "rotation", t);
  return {
    ...Object.fromEntries(d0.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Jt(e, "fov", t)
  };
}
function hS(e, t, n, r) {
  const o = d0.indexOf(n);
  if (o >= 0) {
    const a = Jt(e, "position", t);
    a[o] = r, io(e, "position", t, a);
  } else n === "hFOV_deg" ? io(e, "fov", t, r) : io(e, "rotation", t, { [n]: r });
}
function pS(e, t, n) {
  io(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function tl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function h0(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Yf(e, t, n, r) {
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
function mS(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = jt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function p0(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function m0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function g0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function y0(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? so(t) : t);
}
function b0(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(so(n)) === t;
  } catch {
    return !1;
  }
}
const gS = 0.15, yS = 0.01, qi = 1, bS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Mi(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Uo(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function v0(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function os(e, t, n = 0) {
  const r = $r(e, t, n), o = Uo(r, 2);
  return { right: Uo(r, 0), up: Uo(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function vS(e) {
  return Mi(e.position, os(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Xf(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Zt);
  return { tanX: r, tanY: r * n / t };
}
function _S(e, t, n, r) {
  const o = vS(e), a = jt(e.yaw_deg + t / r * 360), l = J(e.pitch_deg - n / r * 360, -89.9, 89.9), { forward: u } = os(a, l);
  return { ...e, yaw_deg: a, pitch_deg: l, position: Mi(o, u, -e.distance) };
}
const wS = 0.05;
function xS(e, t, n, r, o, a = qi) {
  const { right: l, up: u } = os(e.yaw_deg, e.pitch_deg), b = 2 * Math.max(e.distance, a * wS) * Xf(e, r, o).tanY / o;
  return { ...e, position: Mi(Mi(e.position, l, -t * b), u, n * b) };
}
function SS(e, t, n = qi) {
  const r = Math.max(n, 1e-6) * yS, o = Math.max(e.distance * gS, r) * Math.sign(t), { forward: a } = os(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Mi(e.position, a, o), distance: Math.max(e.distance - o, r) };
}
function kS(e, t, n, r) {
  const { tanX: o, tanY: a } = Xf(e, n, r), l = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(l) * 1.1, { forward: d } = os(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Mi(t.center, d, -u), distance: u };
}
function $p(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: qi }, l = Math.hypot(o[0] - e.position[0], o[1] - e.position[1], o[2] - e.position[2]), u = Math.max(l + a, Math.hypot(...e.position) + 6 * a);
  return {
    position: [...e.position],
    quaternion: co($r(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Xf(e, t, n).tanY) * _n,
    aspect: t / n,
    near: Math.max(e.distance * 0.01, a * 1e-4),
    far: u * 2
  };
}
function MS(e, t, n, r) {
  const { right: o, up: a, forward: l } = NS(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * l[0] + u[1] * l[1] + u[2] * l[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Zt), g = b * e.aspect, w = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], x = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + w / d / g), y: r * 0.5 * (1 - x / d / b), z: d };
}
function NS(e) {
  const t = jf(e.quaternion), n = Uo(t, 2);
  return { right: Uo(t, 0), up: Uo(t, 1), forward: n.map((r) => -r) };
}
function PS(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function AS({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function CS(e, t) {
  if (!e || !t.active) return null;
  const n = IS(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: ES(t),
    itemQuaternion: e.kind === "splat" ? bS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function IS(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function ES(e) {
  return {
    position: [...e.position],
    quaternion: co($r(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function OS(e, t) {
  return Mi(e.position, v0($r(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function FS(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function TS({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function DS(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((l) => l[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((l) => l[a]))), r = t.map((a, l) => (a + n[l]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function LS(e, t, n) {
  const r = [];
  t && e.scene.active && r.push(...TS(t).map((o) => OS(e.scene, o)));
  for (const o of n) r.push(...$S(o));
  return r;
}
function RS(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: co($r(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: $r(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function $S(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => Mi(e.position, v0(e.rotation, [r, o, 0])));
}
function VS(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
const Vp = 2048, _0 = 0.28;
function w0(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Zt);
  return {
    quaternion: co($r(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * _n,
    aspect: r
  };
}
function nl(e) {
  const t = si(e);
  return {
    quaternion: co($r(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function zS(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = zf(n, r), l = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: l - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * _n,
      vFOV_deg: 2 * Math.atan(a / r) * _n
    }
  };
}
function x0(e, t, n) {
  const [[r, o, a], [l, u, d], [b, g, w]] = jf(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * Zt), M = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, v = 1e-4) {
      const F = hx(S), V = r * F.x + l * F.y + b * F.z, G = o * F.x + u * F.y + g * F.z, E = -(a * F.x + d * F.y + w * F.z), R = Math.max(E, v);
      return {
        x: t * 0.5 * (1 + V / R / M),
        y: n * 0.5 * (1 - G / R / x),
        z: E
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, v) {
      const F = (S / t * 2 - 1) * M, V = (1 - v / n * 2) * x;
      return Rf(el({
        x: r * F + o * V - a,
        y: l * F + u * V - d,
        z: b * F + g * V - w
      }));
    }
  };
}
function jS(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = Hf(e, t), l = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const g = u.source.kind === "port" && !u.visible;
    if (!b.active && !g) return;
    const w = n(u);
    if (!w) return;
    const x = Math.tan(b.hFOV_deg * 0.5 * Zt), M = Math.tan(b.vFOV_deg * 0.5 * Zt), { crop: S } = u;
    l.push({
      kind: "sticker",
      id: u.id,
      media: w.media,
      revision: w.revision,
      source: w.source,
      opacity: g ? _0 : b.opacity,
      zIndex: r(u),
      quaternion: co($r(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * S.x0 - 1) * x,
        x1: (2 * S.x1 - 1) * x,
        y0: (1 - 2 * S.y1) * M,
        y1: (1 - 2 * S.y0) * M
      }
    });
  });
  for (const u of o) l.push({ kind: "erp", ...u });
  return l.sort((u, d) => u.zIndex - d.zIndex);
}
function S0(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !a.has(l.id) && a.set(l.id, l);
  return jS(e, t, {
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
function HS(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function GS(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = Hf(e, t), l = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const g = o.get(u.id), w = g ? r(g) : null;
    if (!w) return;
    const { width: x, height: M } = HS(w.media), S = RS(b, u.crop, x, M);
    S && l.push({
      id: u.id,
      media: w.media,
      revision: w.revision,
      source: w.source,
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
const fu = /* @__PURE__ */ new WeakMap();
let KS = 1;
function Ju(e) {
  return fu.has(e) || fu.set(e, KS++), fu.get(e);
}
function zp(e) {
  return e && typeof e == "object" ? Ju(e) : e;
}
function jp({ background: e, layers: t }) {
  return JSON.stringify([
    e && [Ju(e.media), zp(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, Ju(n.media), zp(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function BS({ onReady: e, onFailed: t, onUpdate: n = () => {
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
  return import("./.lazy/pano_three_view-D_Zw7Oif.js").then((l) => l.$).then((l) => {
    o || (r = l.createThreeView({ onUpdate: n }), a.ready = !0, e());
  }).catch((l) => {
    console.error("[PanoramaStickers] three.js view is unavailable", l), a.failed = !0, t();
  }), a;
}
const k0 = "3D view unavailable. Check the browser console.";
function Cl(e, t, n) {
  return w0({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function WS(e) {
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
const M0 = WS(
  () => import("./.lazy/pano_three_view-D_Zw7Oif.js").then((e) => e.$).then((e) => e.createThreeView())
), Ai = ["erp_image", "bg_erp", "bg_media"], qf = ["sticker_image", "sticker"], N0 = ["scene"], US = {
  background: Ai,
  "external-sticker": qf,
  scene: N0
};
function P0(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function A0(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = P0(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function YS(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function C0(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const l = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!l || a === n.length - 1) return { graph: r, entry: l };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === l.type);
  }
}
function XS(e, t) {
  const { graph: n, entry: r } = C0(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((l) => Array.isArray(l) ? [l[0], { origin_id: l[1], origin_slot: l[2] }] : [l == null ? void 0 : l.id, l])), a = {};
  for (const l of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = P0(o.get(l == null ? void 0 : l.link));
    u && (a[String((l == null ? void 0 : l.name) || "")] = u);
  }
  return a;
}
const I0 = [...Ai, ...qf, ...N0], qS = 256, $o = /* @__PURE__ */ new Map(), du = /* @__PURE__ */ new WeakMap();
let E0 = () => null;
function O0(e) {
  return du.has(e) || du.set(e, JSON.stringify(e)), du.get(e);
}
function JS(e) {
  E0 = e;
}
function Il(e, t) {
  const n = O0(e);
  $o.delete(n), $o.set(n, t), $o.size > qS && $o.delete($o.keys().next().value);
}
function Pn(e, t) {
  var a;
  const n = e ? E0(e) : null;
  if (!n) return !0;
  const r = A0(e);
  let o = $o.get(O0(n));
  if (o)
    Il(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((l) => I0.includes(l == null ? void 0 : l.name)))) return !0;
    Il(n, r), o = r;
  }
  return US[t].every((l) => o[l] === r[l]);
}
const El = /* @__PURE__ */ new WeakSet();
async function Zu(e, t) {
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
function F0(e, t) {
  var a, l, u, d, b;
  const n = (u = (l = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : l.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = C0(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((g) => I0.includes(g == null ? void 0 : g.name))) ? null : { output: o, inputs: XS(n, t) };
}
const rl = /* @__PURE__ */ new Map();
function ZS(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && rl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await Zu(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const l = F0(o, a);
        l && Il(l.output, l.inputs);
      }
    });
}
const QS = 5;
function ek(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${QS}`, r = Zu(e, `/jobs?${n}`).then((l) => (l == null ? void 0 : l.jobs) || []), o = /* @__PURE__ */ new Map(), a = (l) => (o.has(l) || o.set(l, Zu(e, `/jobs/${encodeURIComponent(l)}`)), o.get(l));
  return {
    async lastNodeOutput(l, u) {
      var b, g, w, x;
      const d = String(l.id);
      for (const { id: M } of await r) {
        if (!u()) return null;
        const S = await a(M);
        if ((b = S == null ? void 0 : S.outputs) != null && b[d])
          return ((x = (w = (g = S.workflow) == null ? void 0 : g.prompt) == null ? void 0 : w[d]) == null ? void 0 : x.class_type) !== l.comfyClass ? null : F0(S, d);
      }
      return null;
    }
  };
}
function tk(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, l;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((l = o.changeTracker) == null ? void 0 : l.nodeOutputs);
  });
}
let Io = null;
async function nk(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || El.has(n) || (u = rl.get(o)) != null && u.has(r) || tk(t)) return null;
  (Io == null ? void 0 : Io.workflowId) !== o && (Io = { workflowId: o, history: ek(n, o) }, queueMicrotask(() => {
    Io = null;
  }));
  const l = await Io.history.lastNodeOutput(e, a);
  return a() ? l ? (Il(l.output, l.inputs), t.nodeOutputs[r] = l.output, l.output) : (El.has(n) || rl.set(o, (rl.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Hp(e, t, n, r = Ai) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((l == null ? void 0 : l.name) || ""));
}
const Gp = /\.(mp4|webm|mov|m4v|mkv)$/i;
function il(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Gp.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Gp.test(String((e == null ? void 0 : e.filename) || ""));
}
const hu = /* @__PURE__ */ new WeakMap();
function rk(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Qu(e) {
  return rk(e) ? (hu.has(e) || hu.set(e, Math.random().toString(36).slice(2, 10)), hu.get(e)) : "run";
}
function T0(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function ik(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, l) => {
    for (const u of l) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, g) => g)));
    }
  };
  return o(e, t), r;
}
function Jf(e, t = [], n = null) {
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
function ok({
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
  }, g = () => o(), w = () => {
    o(), d();
  }, x = () => o();
  let M = !1;
  const S = () => {
    M = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", g), r.addEventListener("play", w), r.addEventListener("pause", x), r.addEventListener("error", S), r.src = t, r.load(), { video: r, destroy: () => {
    var V, G;
    a || (a = !0, l && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(l), l = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", g), r.removeEventListener("play", w), r.removeEventListener("pause", x), r.removeEventListener("error", S), r.pause(), (V = r.removeAttribute) == null || V.call(r, "src"), (G = r.load) == null || G.call(r));
  }, failed: () => M };
}
function Vi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function ak(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Kp(e, t, n = null) {
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
  return !r && n != null && (r = ak(e == null ? void 0 : e.graph, n)), r;
}
function sk(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function lk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function ck(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function D0({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const $ = String(O[0] || "").trim();
      if ($)
        return Vi(t, {
          filename: $,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const H of O) {
        const Q = o(H);
        if (Q) return Q;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : Vi(t, O);
  }, a = (O) => {
    if (!O || typeof O != "object") return "";
    const $ = String(O.type || "").trim().toLowerCase();
    if ($ === "dataurl") return String(O.value || "");
    if ($ !== "comfy_image") return "";
    const H = String(O.filename || "").trim();
    return H ? Vi(t, {
      filename: H,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, l = (O) => {
    const $ = e == null ? void 0 : e.nodeOutputs;
    if (!$ || O == null) return null;
    const H = String(O);
    return $ instanceof Map ? $.get(O) || $.get(H) || $.get(Number(H)) || null : $[O] || $[H] || null;
  }, u = (O, $) => {
    var Q;
    const H = l(O == null ? void 0 : O.id);
    return Array.isArray((Q = H == null ? void 0 : H.ui) == null ? void 0 : Q[$]) ? H.ui[$] : Array.isArray(H == null ? void 0 : H[$]) ? H[$] : [];
  }, d = (O, $) => {
    const H = l(O == null ? void 0 : O.id);
    return H != null && H.ui && Object.prototype.hasOwnProperty.call(H.ui, $) ? H.ui[$] : H && Object.prototype.hasOwnProperty.call(H, $) ? H[$] : null;
  }, b = (O, $) => {
    const H = d(O, "pano_sticker_input_state_hash"), Q = Array.isArray(H) ? H[0] : H;
    return String(Q ?? "").trim() || ck($);
  }, g = (O) => {
    const $ = [], H = /* @__PURE__ */ new Set();
    for (const Q of O || []) {
      const _e = o(Q);
      !_e || H.has(_e) || (H.add(_e), $.push(_e));
    }
    return $;
  }, w = (O, $) => {
    var _e;
    const H = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && H.push(O.images), Array.isArray((_e = O == null ? void 0 : O.ui) == null ? void 0 : _e.images) && O.ui.images.length && H.push(O.ui.images);
    const Q = [];
    for (const T of H)
      $ >= 0 && $ < T.length && Q.push(T[$]), Q.push(...T);
    return Q;
  }, x = (O, $) => {
    var ee;
    const H = String($ || "").trim();
    if (!H) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : []).findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === H);
    if (_e < 0) return { src: "", sourceType: "", inputName: H };
    const T = O.graph ? O.getInputLink(_e) : null;
    if ((T == null ? void 0 : T.origin_id) == null) return { src: "", sourceType: "", inputName: H };
    const I = T.origin_id, se = Kp(O, _e, I);
    if (!se) return { src: "", sourceType: "", inputName: H };
    const le = Number(T.origin_slot ?? 0);
    let ue = [];
    try {
      ue = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(se) || [] : [];
    } catch {
      ue = [];
    }
    if (Array.isArray(ue) && ue.length) {
      const Y = [];
      le >= 0 && le < ue.length && Y.push(ue[le]), Y.push(...ue);
      const Ie = g(Y.filter((Fe) => !il(Fe)));
      if (Ie.length)
        return { src: Ie[0], srcCandidates: Ie, sourceType: "appNodeImageUrls", inputName: H };
    }
    const U = l((se == null ? void 0 : se.id) ?? I), X = g(w(U, le).filter((Y) => !il(Y))).map((Y) => `${Y}&pano_src=${Qu(U)}`);
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
    const N = (ee = se == null ? void 0 : se.widgets) == null ? void 0 : ee.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (N) {
      let Y = o(N.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (se.comfyClass === "LoadImage" || se.type === "LoadImage") && (Y = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`), Y) return { src: Y, sourceType: "widget", inputName: H };
    }
    return { src: "", sourceType: "", inputName: H };
  }, M = (O, $ = []) => {
    var Q;
    const H = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [];
    for (const _e of $) {
      const T = H.findIndex((ue) => String((ue == null ? void 0 : ue.name) || "") === _e), I = T >= 0 && O.graph ? O.getInputLink(T) : null;
      if ((I == null ? void 0 : I.origin_id) == null) continue;
      const se = l(((Q = Kp(O, T, I.origin_id)) == null ? void 0 : Q.id) ?? I.origin_id), le = (Array.isArray(se == null ? void 0 : se.images) ? se.images : []).find(il);
      return le ? `${Vi(t, le)}&pano_src=${Qu(se)}` : "";
    }
    return "";
  }, S = (O, $ = []) => {
    const H = Array.isArray($) ? $ : [$];
    for (const Q of H) {
      const _e = x(O, Q);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, v = (O) => {
    const $ = String(O || "").trim();
    if (!$) return [];
    if (sk($)) return [$];
    const { filename: H, subfolder: Q } = lk($);
    return H ? g([
      Vi(t, { filename: H, subfolder: Q, type: "temp" }),
      Vi(t, { filename: H, subfolder: Q, type: "output" }),
      Vi(t, { filename: H, subfolder: Q, type: "input" }),
      $
    ]) : [$];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (O) => {
      var $, H;
      try {
        (H = ($ = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : $.forEach) == null || H.call($, (Q, _e, T) => {
          var I;
          Q != null && Q.img && ((I = r == null ? void 0 : r.isImageLoadFailed) != null && I.call(r, Q.img)) && T.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (O, $) => {
      var H;
      (H = O == null ? void 0 : O.delete) == null || H.call(O, `__ui__${String($ || "")}`);
    },
    linkedValue: (O, $) => {
      var I, se, le, ue;
      const H = String($ || ""), Q = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === H) : -1, _e = Q >= 0 && O.graph ? O.getInputLink(Q) : null;
      if (_e) {
        const U = l(_e.origin_id), X = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (I = U == null ? void 0 : U.data) == null ? void 0 : I.output,
          (se = U == null ? void 0 : U.data) == null ? void 0 : se.result,
          (le = U == null ? void 0 : U.ui) == null ? void 0 : le.output,
          (ue = U == null ? void 0 : U.ui) == null ? void 0 : ue.result
        ];
        for (const j of X) {
          if (!Array.isArray(j)) continue;
          const N = j[Number(_e.origin_slot || 0)];
          if (typeof N == "string" && N.trim()) return N;
        }
      }
      const T = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === H) : null;
      return String((T == null ? void 0 : T.value) || "");
    },
    linkedVideoFile: M,
    loadPreferredExactLinkedImage: (O, $ = [], H = null, Q = "") => {
      var St;
      const _e = Array.isArray($) ? $ : [$], T = S(O, _e), se = (Array.isArray(T == null ? void 0 : T.srcCandidates) && T.srcCandidates.length ? T.srcCandidates : [T == null ? void 0 : T.src]).map((pt) => String(pt || "").trim()).filter(Boolean);
      if (!se.length) return null;
      const le = g(se.flatMap((pt) => v(pt)));
      if (!le.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const ue = String(Q || _e.join("|") || "image_exact"), U = se.join(`
`), X = O.__panoLinkedInputImageCache.get(ue);
      if (X && X.srcRaw === U && X.img) return X.img;
      const j = n || globalThis.Image;
      if (typeof j != "function") return null;
      const N = new j();
      (St = r == null ? void 0 : r.markImageLoading) == null || St.call(r, N, U);
      const ee = { srcRaw: U, resolvedSrc: "", img: N };
      O.__panoLinkedInputImageCache.set(ue, ee);
      let Y = -1;
      const Ie = (pt) => {
        var ln, it, Yn;
        pt === "ready" ? (ln = r == null ? void 0 : r.markImageReady) == null || ln.call(r, N, U) : (it = r == null ? void 0 : r.markImageFailed) == null || it.call(r, N, U), H == null || H(N), (Yn = O.setDirtyCanvas) == null || Yn.call(O, !0, !0);
      }, Fe = () => {
        if (Y += 1, Y >= le.length) {
          Ie("failed");
          return;
        }
        ee.resolvedSrc = le[Y], N.src = ee.resolvedSrc;
      };
      return N.onload = () => Ie("ready"), N.onerror = () => {
        if (Y + 1 < le.length) {
          Fe();
          return;
        }
        Ie("failed");
      }, Fe(), N;
    },
    output: l,
    resolvePreferredExactLinkedSource: S,
    source: o,
    uiImage: (O, $, H, Q = null) => {
      var U, X, j;
      const _e = u(O, $)[0] || null, T = o(_e);
      if (!T) return null;
      const I = `__ui__${$}`, se = (U = H == null ? void 0 : H.get) == null ? void 0 : U.call(H, I);
      if (se && se.__panoSrc === T) return se;
      const le = n || globalThis.Image;
      if (typeof le != "function") return null;
      const ue = new le();
      return ue.__panoSrc = T, (X = r == null ? void 0 : r.markImageLoading) == null || X.call(r, ue, T), ue.onload = () => {
        var N;
        (N = r == null ? void 0 : r.markImageReady) == null || N.call(r, ue, T), Q == null || Q(ue);
      }, ue.onerror = () => {
        var N;
        (N = r == null ? void 0 : r.markImageFailed) == null || N.call(r, ue, T), Q == null || Q(ue);
      }, ue.src = T, (j = H == null ? void 0 : H.set) == null || j.call(H, I, ue), ue;
    },
    uiList: u,
    uiValue: d
  };
}
const uk = 1e-3;
function L0(e, t, n, r) {
  if (!xi(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const l = Math.floor(o + 0.5);
    return l >= 0 && l < r.frames ? (l + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(uk / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function R0(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function fk(e, t) {
  return Math.floor(e * t.fps);
}
function $0(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Bp = 4;
function V0({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(l) {
    return r.has(l) || r.set(l, e(n[l], t)), r.get(l);
  }
  return {
    picture(l, u, d, b) {
      if ((l.length !== n.length || l.some((x, M) => x !== n[M])) && (n = l, r.clear(), o = null), u === null) return null;
      const g = fk(u, d);
      for (let x = g; x < Math.min(n.length, g + Bp + 1); x += 1) a(x);
      for (const x of r.keys())
        (x < g || x > g + Bp) && x !== o && r.delete(x);
      const w = r.get(g);
      return w != null && w.complete && w.naturalWidth > 0 && (o !== null && o !== g && r.delete(o), o = g), o === null ? b : r.get(o);
    }
  };
}
function z0({
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
    updateGesture(w) {
      if (d) return !1;
      l || this.beginGesture();
      const x = t(l, w);
      return x.changed ? (l = x.state, u = !0, r(l), g(), !0) : !1;
    },
    hasGestureChanges() {
      return l != null && u;
    },
    commitGesture() {
      if (d || !l) return !1;
      const w = u;
      return w && o(l), l = null, u = !1, r(null), g(), w;
    },
    cancelGesture() {
      return d || !l ? !1 : (l = null, u = !1, r(null), g(), !0);
    },
    apply(w) {
      if (d) return !1;
      l && this.commitGesture();
      const x = t(e(), w);
      return x.changed ? (o(x.state), g(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const w = l != null;
      l = null, u = !1, w && r(null);
    }
  };
}
const ol = "sticker_image_1", j0 = "external_image", na = 0;
function Yo(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function pu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Ni(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function ef(e, t = na) {
  return (e == null ? void 0 : e.version) !== 2 ? Ni(e) : Ni(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: ec(n, t).active,
    external: n.source.kind === "port",
    ...Uf(n, t)
  }));
}
function Zf(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Ni(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function H0(e) {
  return String((e == null ? void 0 : e.id) || "") === ol || String((e == null ? void 0 : e.source_kind) || "") === j0;
}
function Qf(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : H0(t);
}
const G0 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function K0(e) {
  return !H0(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(G0.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function B0(e) {
  const t = K0(e);
  return t ? G0.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function W0(e, t = {}) {
  var R, O, $;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((H) => String((H == null ? void 0 : H.id) || "") === ol);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const H = String(((R = e.active) == null ? void 0 : R.selected_sticker_id) || "") === ol;
    return {
      state: {
        ...e,
        stickers: n.filter((Q, _e) => _e !== r),
        active: H ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), l = r >= 0 ? n[r] : null, u = !l || Number(l.source_link_id ?? -1) !== o || String(l.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), g = d > 0 && b > 0, w = Math.max(1, d), x = Math.max(1, b), M = t.pose && typeof t.pose == "object" ? t.pose : {}, S = u ? M.hFOV_deg || (l == null ? void 0 : l.hFOV_deg) || 30 : (l == null ? void 0 : l.hFOV_deg) || M.hFOV_deg || 30, v = Math.min(179, Math.max(0.1, Number(S)));
  if (!u) {
    if (!g) return { state: e, changed: !1 };
    const H = Yo(v, w, x), Q = Number(((O = l == null ? void 0 : l.initial_pose) == null ? void 0 : O.hFOV_deg) ?? v), _e = Yo(Q, w, x), T = Number((($ = l == null ? void 0 : l.initial_pose) == null ? void 0 : $.vFOV_deg) ?? _e);
    return Math.abs(Number((l == null ? void 0 : l.vFOV_deg) || 0) - H) <= 1e-6 && Math.abs(T - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((I, se) => se === r ? {
          ...I,
          vFOV_deg: H,
          initial_pose: I.initial_pose && typeof I.initial_pose == "object" ? { ...I.initial_pose, vFOV_deg: _e } : I.initial_pose
        } : I)
      },
      changed: !0
    };
  }
  const F = n.reduce((H, Q) => Math.max(H, Number((Q == null ? void 0 : Q.z_index) || 0)), -1), V = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: v,
    vFOV_deg: g ? Yo(v, w, x) : Number(M.vFOV_deg || (l == null ? void 0 : l.vFOV_deg) || v),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, G = {
    ...l || {},
    id: ol,
    source_kind: j0,
    source_link_id: o,
    source_state_hash: a,
    ...V,
    initial_pose: { ...V },
    visible: !0,
    z_index: F + 1
  }, E = r >= 0 ? n.map((H, Q) => Q === r ? G : H) : [...n, G];
  return { state: { ...e, stickers: E }, changed: !0 };
}
function Wp(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const dk = ["IMAGE", "VIDEO"];
function Up(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => dk.includes(n)) ? "2d" : null;
}
function hk(e, t) {
  var o, a, l, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((g) => (g == null ? void 0 : g.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? Up(r.type) ?? Up((b = (d = (u = (l = (a = e.graph).getNodeById) == null ? void 0 : l.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function U0(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Wp(e, "sticker"),
    awaitingPose: !t && (Wp(e, "sticker_state") || hk(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Yp(e, t) {
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
function Y0(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var v;
  const l = e.stickers.findIndex((F) => Qf(e, F)), u = l >= 0 ? e.stickers[l] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const F = ((v = e.active) == null ? void 0 : v.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((V, G) => G !== l),
        active: F ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const F = { ...Yp(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((V, G) => G === l ? F : V) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const F = [u.size.value, ...u.size.keyframes.map((E) => E.value)], V = F.map((E) => Yo(E.hFOV_deg, o, a));
    if (F.every((E, R) => Math.abs(E.vFOV_deg - V[R]) <= 1e-6)) return { state: e, changed: !1 };
    const G = {
      value: { ...u.size.value, vFOV_deg: V[0] },
      keyframes: u.size.keyframes.map((E, R) => ({ ...E, value: { ...E.value, vFOV_deg: V[R + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((E, R) => R === l ? { ...E, size: G } : E) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((F) => F.id));
  let g = 1;
  for (; b.has(`sticker_${g}`); ) g += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Yp(`sticker_${g}`, r)] }, changed: !0 };
  const w = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = (F) => d ? Yo(F, o, a) : F, M = Yf(`sticker_${g}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: w,
    vFOV_deg: x(w)
  }, Ni(e).reduce((F, V) => Math.max(F, V.z_index), -1) + 1), S = (r == null ? void 0 : r.keyframes) ?? {};
  return M.direction.keyframes = S.direction ?? [], M.roll.keyframes = S.roll ?? [], M.size.keyframes = (S.size ?? []).map((F) => ({ ...F, value: { ...F.value, vFOV_deg: x(F.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, M] }, changed: !0 };
}
function ed(e) {
  const t = Ni(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: pu(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: pu(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: pu(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, l) => a.z_index - l.z_index);
}
function X0(e) {
  const t = Zf(e), n = Qf(e, t), r = Ni(e).some((u) => u && u.visible !== !1), o = ed(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, l = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: B0(t),
    selectedId: t ? String(t.id || "") : null,
    locked: l,
    canDelete: !!t && !l,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function pk(e) {
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
function Xp(e, t) {
  const n = Zf(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = pk(e), o = String(n.id || ""), a = ed(r), l = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (l < 0) return { state: e, changed: !1 };
  if (t === "front" && l === a.length - 1 || t === "back" && l === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(l, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function mk(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function gk(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return W0(e, t.value);
  if (t.type === "sync-port") return Y0(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), l = String(o.assetId || "").trim();
    if (!a || !l || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = ed(e).reduce((x, M) => Math.max(x, Number(M.z_index || 0)), -1), b = 30, g = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: Yo(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Yf(a, tl(o.asset), g, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const w = { id: a, asset_id: l, ...g, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [l]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], w],
        active: { ...e.active || {}, selected_sticker_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !Ni(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = Zf(e);
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
    const o = K0(n);
    return !o || !B0(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Xp(e, "front");
  if (t.type === "send-back") return Xp(e, "back");
  if (t.type === "delete-selected") {
    if (Qf(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Ni({ ...e, stickers: o })[0], l = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: l }
    };
    return e.version !== 2 && (u.assets = mk(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], l = e.version === 2 ? Uf(n, na) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(l[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = fS(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return f0(b, na, d), { state: { ...e, stickers: e.stickers.map((g) => g === n ? b : g) }, changed: !0 };
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
function yk(e = {}) {
  return z0({
    ...e,
    reduce: gk,
    projectModel: X0
  });
}
const tf = 2;
function Bi(e, t) {
  return Math.floor(e * t + 0.5);
}
function bk(e, t) {
  return Math.floor(e * t + 1e-3);
}
function q0({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: l, onChange: u }) {
  let d = 0, b = !1, g = !1, w = { name: "idle" }, x = [];
  const M = () => b && !g, S = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const ee of x) ee();
    x = [];
  }
  function F(ee, Y = {}) {
    return v(), w = { name: ee, ...Y }, u(), w;
  }
  function V(ee, Y, Ie) {
    const Fe = () => {
      w === ee && Ie();
    };
    e.addEventListener(Y, Fe), x.push(() => e.removeEventListener(Y, Fe));
  }
  function G(ee, Y) {
    let Ie = t.requestFrame(function Fe(St) {
      w === ee && (Y(St), w === ee && (Ie = t.requestFrame(Fe)));
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
  function $() {
    const { seekable: ee } = e, Y = ee != null && ee.length ? ee.end(ee.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Y) ? Y : 1 / 0));
  }
  function H(ee) {
    if (!M()) return ee === "play" ? se() : R();
    if (e.readyState < tf) {
      const Y = F("loading", { then: ee });
      return V(Y, "loadeddata", () => H(Y.then)), V(Y, "error", O), Y;
    }
    return ee === "play" && d / n() >= Number(e.duration) ? se() : Q(ee, !1);
  }
  function Q(ee, Y) {
    const Ie = $();
    if (!e.ended && Bi(Number(e.currentTime), n()) === Bi(Ie, n())) return _e(ee);
    const Fe = F("seeking", { then: ee, frame: d, retried: Y });
    return V(Fe, "seeked", () => {
      const St = Bi(Number(e.currentTime), n()) === Bi($(), n()), pt = d === Fe.frame;
      St || pt && Fe.retried ? _e(Fe.then) : Q(Fe.then, pt);
    }), V(Fe, "error", O), e.currentTime = Ie, Fe;
  }
  function _e(ee) {
    return ee === "play" ? T() : (l(), R());
  }
  function T() {
    const ee = F("playingVideo", { shown: !1 });
    if (V(ee, "pause", () => e.ended ? I() : U()), V(ee, "ended", I), V(ee, "error", O), o() && Bi(Number(e.duration), n()) >= r()) {
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
        w === ee && (Y(Number(pt.mediaTime), !0), w === ee && (Ie = e.requestVideoFrameCallback(Fe)));
      });
      x.push(() => {
        var Fe;
        return (Fe = e.cancelVideoFrameCallback) == null ? void 0 : Fe.call(e, Ie);
      });
    } else
      G(ee, () => Y(Number(e.currentTime), e.readyState >= tf));
    return Promise.resolve(e.play()).catch(() => {
      w === ee && U();
    }), ee;
  }
  function I() {
    l(), se();
  }
  function se() {
    const ee = F("playingClock", { startTs: t.now(), startFrame: d });
    return G(ee, (Y) => le(ee.startFrame + Math.floor((Y - ee.startTs) / 1e3 * n()))), ee;
  }
  function le(ee) {
    if (ee < r()) {
      E(ee);
      return;
    }
    if (!o()) {
      ue(r() - 1);
      return;
    }
    w.name === "playingVideo" && (v(), e.pause()), E(0), H("play");
  }
  function ue(ee) {
    w.name === "playingVideo" ? (v(), e.pause(), E(Math.max(0, ee)), l()) : E(Math.max(0, ee)), H("still");
  }
  function U() {
    if (w.name === "loading" || w.name === "seeking")
      w.then = "still", u();
    else if (w.name === "playingVideo") {
      v(), e.pause();
      const ee = bk(Number(e.currentTime), n());
      E(Math.min(ee, r() - 1)), l(), d === ee ? R() : H("still");
    } else w.name === "playingClock" && ue(Math.min(d, r() - 1));
  }
  function X() {
    if (!N()) {
      if (d >= r() - 1 && E(0), w.name === "loading" || w.name === "seeking") {
        w.then = "play", u();
        return;
      }
      H("play");
    }
  }
  function j(ee) {
    const Y = Math.max(0, Math.round(ee));
    if (w.name === "loading" || w.name === "seeking") {
      w.then = "still", E(Y), u();
      return;
    }
    w.name === "playingVideo" && (v(), e.pause()), E(Y), H("still");
  }
  function N() {
    return w.name === "playingVideo" || w.name === "playingClock" || w.then === "play";
  }
  return {
    get frame() {
      return d;
    },
    get state() {
      return w.name;
    },
    get playing() {
      return N();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return w.name === "playingVideo" || w.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return w.name === "playingVideo" && w.shown;
    },
    play: X,
    stop: U,
    seek: j,
    toggle() {
      N() ? U() : X();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(ee) {
      v(), b = !!ee, g = !1, H("still");
    },
    dispose() {
      v(), b = !1, w = { name: "idle" };
    }
  };
}
function J0({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, l = null, u = null, d = !1;
  function b(v) {
    u = v, t();
  }
  function g(v) {
    l = v, e.currentTime = v;
  }
  function w() {
    const v = d;
    x(), d !== v && n();
  }
  function x() {
    if (!r || o || e.readyState < tf) return;
    const { time: v, playing: F, fps: V } = a;
    if (v === null) {
      e.pause(), d = !1;
      return;
    }
    if (F) {
      if (l !== null) return;
      const G = Number(e.duration), E = Number.isFinite(G) ? Math.min(v, G) : v, R = Math.abs(Number(e.currentTime) - E) > 1.5 / V;
      if (e.ended && !R) return;
      R && g(E), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(l !== null || u === v) && (Number(e.currentTime) === v ? b(v) : g(v));
  }
  const M = {
    loadeddata: w,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: w,
    seeked: () => {
      const v = l;
      l = null, !a.playing && v === a.time ? b(v) : w();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [v, F] of Object.entries(M)) e.addEventListener(v, F);
  function S(v) {
    r = v, o = !1, l = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: v = "", time: F = null, playing: V = !1, fps: G }) {
      v !== r && (S(v), n()), a = { time: F, playing: V, fps: G }, w();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(v, F) {
      return !r || o ? F : a.time === null ? null : a.playing && d ? e : u === null ? F : v;
    },
    dispose() {
      for (const [v, F] of Object.entries(M)) e.removeEventListener(v, F);
      S("");
    }
  };
}
function vk(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function _k({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: l, onStickerCapture: u, onChange: d }) {
  let b = "", g = "", w = 0;
  const x = /* @__PURE__ */ new Set();
  let M = null, S = null;
  const v = () => o().timeline.fps, F = (T) => T.stickers.find((I) => I.source.kind === "port"), V = () => {
    const T = o(), I = F(T);
    return s0(T, {
      minimum: Math.round(v() * 5),
      frames: Math.max(
        b ? Math.round(w * v()) : 0,
        M && I ? R0(I.clip, v(), M.meta) : 0
      )
    });
  }, G = q0({
    video: e,
    clock: r,
    fps: v,
    span: V,
    loop: () => !0,
    onFrame: a,
    onCapture: l,
    onChange: d
  }), E = () => {
    g === b && Number.isFinite(e.duration) && (w = e.duration);
  }, R = () => {
    g && (x.add(g), d());
  }, O = J0({ video: t, onCapture: u, onChange: d }), $ = V0({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", E), e.addEventListener("error", R);
  function H(T) {
    T !== g && (g = T, e.pause(), T ? e.src = T : e.removeAttribute("src"), e.load(), G.setSource(!!T));
  }
  function Q() {
    G.playing && G.stop();
  }
  function _e(T) {
    const I = F(T);
    S = M && I ? L0(I.clip, G.frame, T.timeline.fps, M.meta) : null, O.follow({
      src: (M == null ? void 0 : M.src) || "",
      time: S,
      playing: G.advancing,
      fps: T.timeline.fps
    });
  }
  return {
    get frame() {
      return G.frame;
    },
    get playing() {
      return G.playing;
    },
    get showsVideo() {
      return G.showsVideo;
    },
    get source() {
      return g;
    },
    pause: Q,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return M;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(T, I) {
      return M != null && M.frames ? $.picture(M.frames, S, M.meta, I) : O.picture(T, I);
    },
    toggle() {
      G.playing ? G.stop() : G.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: T, sources: I, state: se, sticker: le = null }) {
      if (M = T ? le : null, !T)
        return Q(), H(""), _e(se), !1;
      for (const N of x)
        I.includes(N) || x.delete(N);
      const ue = I.find((N) => N && !x.has(N)) || "", U = ue !== b;
      U && (b = ue, w = 0), H(b);
      const X = qu(se) || !!b && G.state !== "error" || !!M;
      return X || Q(), (U || !X || !G.playing && G.frame >= V()) && G.frame !== na && G.seek(na), _e(se), X;
    },
    dispose() {
      G.dispose(), O.dispose(), e.removeEventListener("loadedmetadata", E), e.removeEventListener("error", R), e.pause(), e.removeAttribute("src"), e.load(), g = "";
    }
  };
}
const Ol = Math.PI / 180, Ir = 180 / Math.PI, wk = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), xk = 260;
function qp(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Z0(e, t) {
  return t ? Z0(t, e % t) : e;
}
function Sk(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), l = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = Z0(l, u) || 1;
  return `${Math.round(l / d)}:${Math.round(u / d)}`;
}
function Za(e, t) {
  const n = qp(e), r = qp(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: Sk(n, r) };
}
function oo(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function Q0(e) {
  const t = oo(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Jr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function td(e, t, n = wk) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (F, V, G) => {
    const E = F + V, R = Math.max(0, G - 1), O = E > R && E > 0 ? R / E : 1;
    return [F * O, V * O];
  }, [g, w] = b(d, l, r), [x, M] = b(a, u, o), S = {
    x: g,
    y: x,
    w: Math.max(1, r - g - w),
    h: Math.max(1, o - x - M)
  }, v = $f(S, t);
  return {
    x: S.x + (S.w - v.width) * 0.5,
    y: S.y + (S.h - v.height) * 0.5,
    w: v.width,
    h: v.height,
    safeRect: S
  };
}
function kk(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = td({ width: n, height: r }, 1), a = J(Number((e == null ? void 0 : e.fov) || 100), 1, 179), l = n / (2 * Math.tan(a * Ol * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = Bg(d, zg(
    { x: n * 0.5, y: r * 0.5 },
    l,
    u
  )), g = Mk(b, oa(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), w = Vf({ width: o.w, height: o.h }, l);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: w.hFOV_deg
  };
}
function ey(e) {
  return {
    yaw: jt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Ir),
    pitch: J(Math.asin(J(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Ir, -89.9, 89.9)
  };
}
function Mk(e, t) {
  const n = ey(e), r = oa(n.yaw, n.pitch, 0), o = iu(t, e), a = {
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
      iu(u, r.up),
      iu(u, r.right)
    ) * Ir)
  };
}
function ty(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = td({ width: n, height: r }, no(e)), a = to(o, e), l = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = Bg(e, zg(
    l,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = ey(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: J(2 * Math.atan(n / (2 * a)) * Ir, 1, 179)
  };
}
function Nk(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, l = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = to(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(l, o - l) * 2
  }, { halfW: b, halfH: g } = zf(d, u), w = {
    x: a - b,
    y: l - g,
    w: b * 2,
    h: g * 2
  }, x = w.x <= 0 && w.y <= 0 && w.x + w.w >= r && w.y + w.h >= o, M = r / o, S = Math.tan(Gu * Ol), v = M >= 1 ? S : S * M, F = M >= 1 ? S / M : S;
  return {
    focalPx: u,
    rect: w,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * Ir,
      vFOV_deg: 2 * Math.atan(g / u) * Ir
    },
    fallback: x ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(v) * Ir,
        vFOV_deg: 2 * Math.atan(F) * Ir
      }
    }
  };
}
function Eo(e, t) {
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
function Pk(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const l = to(n, e);
    return Vf($f(n, t), l);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Qs(a, t) };
}
function Jp(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Za(t, n);
  if (!a) return e;
  const l = no(e) >= 1;
  r && a.ratio >= 1 !== l && (a = Za(a.height, a.width));
  const u = Pk(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function ny(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (oo(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = Hg({
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
    return Eo(e, (r) => Jp(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Eo(e, (r) => {
      const a = String(Jr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), l = a ? Za(a[1], a[2]) : Za(no(r), 1);
      return l ? Jp(r, l.height, l.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Eo(e, (o) => {
      const a = Ql(r), l = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(l - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Eo(e, (r) => {
    const o = Gg(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? Eo(e, (r) => {
    const o = Kg(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? Eo(e, (r) => {
    const o = oy(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function ry({
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
  const w = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: u,
    frame: d,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: w,
    accumulatedRad: 0
  };
}
function iy(e, t, n = {}) {
  var l, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((l = e.center) == null ? void 0 : l.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + $g(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: Vg(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function oy(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, l = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ol, d = Math.cos(u), b = Math.sin(u), g = a / n, w = -l / n, x = g * d - w * b, M = g * b + w * d, S = Number(e.pitch_deg || 0) * Ol, v = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: jt(Number(e.yaw_deg || 0) - Math.atan(x) / v * Ir),
    pitch_deg: J(Number(e.pitch_deg || 0) - Math.atan(M) * Ir, -90, 90)
  };
}
function Ak({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return z0({
    readState: e,
    reduce: ny,
    projectModel: Q0,
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
}), Ck = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, Ik = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: Ck(t[2])
})), Ek = {
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
  keyframe: { name: "keyframe", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248' />" }
}, Zp = Object.fromEntries(
  Object.entries(Ek).map(([e, t]) => [e, {
    name: t.name,
    elements: Ik(t.body)
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
      return Object.prototype.hasOwnProperty.call(Zp, r) ? Zp[r] : null;
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
        a.tag === "path" ? (oe(), ce("path", wi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (oe(), ce("circle", wi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (oe(), ce("rect", wi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (oe(), ce("line", wi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (oe(), ce("polyline", wi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (oe(), ce("polygon", wi({
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
    return (r, o) => (oe(), Vr(w_(e.tag), wi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: ig(() => [
        De(Ct, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, Ok = ["aria-expanded", "disabled"], Fk = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Tk = ["data-aspect", "disabled", "onClick"], Dk = { class: "pano-cutout-aspect-custom" }, Lk = ["disabled"], Rk = ["disabled"], $k = ["data-custom-width", "data-custom-height", "disabled"], ay = {
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
    ]), a = /* @__PURE__ */ Gt("1"), l = /* @__PURE__ */ Gt("1"), u = /* @__PURE__ */ Gt(null), d = ut(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = ut(() => {
      const v = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], F = String(n.model.aspectLabel || "");
      return v.length ? v.map((V) => {
        const G = typeof V == "string" ? V : String((V == null ? void 0 : V.value) || ""), E = typeof V == "string" ? V : String((V == null ? void 0 : V.label) || G);
        return {
          ...typeof V == "object" && V ? V : {},
          value: G,
          label: E,
          active: F ? G === F : (V == null ? void 0 : V.active) === !0
        };
      }) : o.map((V) => ({
        ...V,
        active: V.value === F
      }));
    }), g = ut(() => {
      var F;
      const v = String(n.model.aspectLabel || "").trim();
      return v || String(((F = b.value.find((V) => V.active === !0)) == null ? void 0 : F.label) || "Aspect");
    });
    Qi(g, (v) => {
      const F = String(v || "").match(/^([0-9.]+):([0-9.]+)$/);
      F && (a.value = F[1], l.value = F[2]);
    }, { immediate: !0 });
    function w(v) {
      r("action", v);
    }
    function x(v) {
      var F;
      n.model.aspectOpen === !0 && ((F = u.value) != null && F.contains(v.target) || w({ type: "close-aspect" }));
    }
    Xl(() => {
      document.addEventListener("pointerdown", x, !0);
    }), rs(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function M(v) {
      const [F, V] = String(v.value || "").split(":");
      w({
        type: "set-aspect",
        width: F,
        height: V,
        preserveOrientation: !0
      });
    }
    function S() {
      w({
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
      e.mode === "rail" ? (oe(), Vr(sn, {
        key: 0,
        icon: e.model.aspectIcon || Qe(Pe).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: F[0] || (F[0] = (V) => w({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (oe(), ce("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: F[1] || (F[1] = (V) => w({ type: "toggle-aspect" }))
      }, [
        De(Ct, {
          icon: e.model.aspectIcon || Qe(Pe).aspect
        }, null, 8, ["icon"]),
        K("span", null, rt(g.value), 1),
        De(Ct, {
          icon: Qe(Pe).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, Ok)),
      ri(K("div", Fk, [
        (oe(!0), ce(Ye, null, xt(b.value, (V) => (oe(), ce("button", {
          key: V.value,
          class: at(["pano-btn pano-frame-aspect-choice", { active: V.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": V.value,
          disabled: d.value,
          onClick: (G) => M(V)
        }, rt(V.label), 11, Tk))), 128)),
        K("div", Dk, [
          ri(K("input", {
            "onUpdate:modelValue": F[2] || (F[2] = (V) => a.value = V),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, Lk), [
            [wp, a.value]
          ]),
          F[4] || (F[4] = K("span", { "aria-hidden": "true" }, ":", -1)),
          ri(K("input", {
            "onUpdate:modelValue": F[3] || (F[3] = (V) => l.value = V),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, Rk), [
            [wp, l.value]
          ]),
          K("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": l.value,
            disabled: d.value,
            onClick: S
          }, "Apply", 8, $k)
        ])
      ], 512), [
        [ao, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Vk = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, zk = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Gt(!1), n = Object.freeze([
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
      K("div", Vk, [
        o[3] || (o[3] = K("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (oe(!0), ce(Ye, null, xt(Qe(n), (a) => (oe(), ce("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          K("kbd", null, rt(a[0]), 1),
          K("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, jk = {
  class: "pano-view-unavailable",
  role: "status"
}, nd = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (oe(), ce("div", jk, rt(Qe(k0)), 1));
  }
}, Hk = { class: "pano-cutout-node-surface" }, Gk = ["title", "disabled"], Kk = { class: "value" }, Bk = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, Wk = {
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
    return (r, o) => (oe(), ce("div", Hk, [
      K("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = At(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = At(() => {
        }, ["stop"]))
      }, [
        K("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          De(Ct, {
            icon: Qe(Pe).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = K("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(sn, {
          icon: e.model.hasShot ? Qe(Pe).delete : Qe(Pe).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(ay, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        K("button", {
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
          K("span", Kk, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, Gk),
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
        De(zk)
      ], 32),
      e.model.hasShot === !1 ? (oe(), ce("div", Bk, " Choose a view · + Add Frame ")) : ct("", !0),
      e.model.viewUnavailable ? (oe(), Vr(nd, { key: 1 })) : ct("", !0)
    ]));
  }
}, sy = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Gt(null);
    let a, l = !1;
    function u() {
      if (!l) return { active: !1, intent: void 0 };
      const w = a;
      return a = void 0, l = !1, { active: !0, intent: w };
    }
    function d(w) {
      const x = o.value;
      return x instanceof HTMLInputElement ? (a = w, l = !0, x.value = "", x.click(), !0) : !1;
    }
    function b(w) {
      var v, F;
      const { active: x, intent: M } = u();
      if (!x) return;
      const S = ((F = (v = w.target) == null ? void 0 : v.files) == null ? void 0 : F[0]) || null;
      if (S) {
        r("file-selected", { intent: M, file: S });
        return;
      }
      r("file-cancelled", { intent: M });
    }
    function g() {
      const { active: w, intent: x } = u();
      w && r("file-cancelled", { intent: x });
    }
    return t({ open: d }), (w, x) => (oe(), ce("input", {
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
}, Uk = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Yk = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Gt(!1), n = Object.freeze([
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
      K("div", Uk, [
        o[3] || (o[3] = K("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (oe(!0), ce(Ye, null, xt(Qe(n), (a) => (oe(), ce("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          K("kbd", null, rt(a[0]), 1),
          K("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Xk = { class: "pano-stickers-node-surface" }, qk = ["disabled"], Jk = ["aria-label", "data-tip"], Zk = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Qk = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, eM = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Gt(null);
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
    return (l, u) => (oe(), ce("div", Xk, [
      K("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = At(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = At(() => {
        }, ["stop"]))
      }, [
        K("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          De(Ct, {
            icon: Qe(Pe).fullscreen
          }, null, 8, ["icon"]),
          u[10] || (u[10] = K("span", { class: "label" }, "Full Editor", -1))
        ]),
        K("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          De(Ct, {
            icon: Qe(Pe).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = K("span", { class: "label" }, "Add Image", -1))
        ], 8, qk),
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
        De(Yk)
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
      ], 40, Jk)) : ct("", !0),
      e.model.hasStickers === !1 ? (oe(), ce("div", Zk, " Add Image to place a sticker ")) : ct("", !0),
      e.model.dropActive === !0 ? (oe(), ce("div", Qk, "Drop image to add")) : ct("", !0),
      De(sy, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (oe(), Vr(nd, { key: 3 })) : ct("", !0)
    ]));
  }
}, Qp = 24;
function tM(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function em(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function nM(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], l = t[o];
    a.y > e.y != l.y > e.y && e.x < (l.x - a.x) * (e.y - a.y) / (l.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function nf(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => em(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return em(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : nM(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function rd(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function ly(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Pa(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: J(n.x, -r, t.width + r),
    y: J(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function rM(e) {
  const t = oa(
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
function zi(e, t, n) {
  return Rf(_l(
    _l(e.centerDir, wl(e.right, t)),
    wl(e.up, n)
  ));
}
function id(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = rM(e), r = Pa(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    zi(n, -n.tanX, n.tanY),
    zi(n, n.tanX, n.tanY),
    zi(n, n.tanX, -n.tanY),
    zi(n, -n.tanX, -n.tanY)
  ].map((x) => Pa(x, t)), a = Array.from({ length: 4 }, (x, M) => {
    const S = [];
    for (let v = 0; v <= 28; v += 1) {
      const F = v / 28;
      let V, G;
      M === 0 ? (V = -n.tanX + 2 * n.tanX * F, G = n.tanY) : M === 1 ? (V = n.tanX, G = n.tanY - 2 * n.tanY * F) : M === 2 ? (V = n.tanX - 2 * n.tanX * F, G = -n.tanY) : (V = -n.tanX, G = -n.tanY + 2 * n.tanY * F);
      const E = Pa(zi(n, V, G), t);
      E && S.push({ x: E.x, y: E.y });
    }
    return S;
  }), l = Pa(zi(n, 0, n.tanY), t), u = Pa(
    zi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, l, u];
  if (d.some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    return { visible: !1 };
  if (!d.some((x) => x.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - l.x, g = u.y - l.y, w = Math.hypot(b, g) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((x) => ({ x: x.x, y: x.y })),
    boundaryEdges: a,
    rotateStemBase: { x: l.x, y: l.y },
    rotateHandle: {
      x: l.x + b / w * Qp,
      y: l.y + g / w * Qp
    },
    visible: !0
  };
}
function tm(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((l) => l && l.visible !== !1).map((l) => ({ item: l, geometry: id(l, r) })).filter((l) => l.geometry.visible).sort((l, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = l.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((l) => {
    var u;
    return String(((u = l.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const l = nf(a.geometry, n);
    if (l.kind === "scale" || l.kind === "rotate") return { ...a, hit: l };
  }
  for (const l of o) {
    const u = nf(l.geometry, n);
    if (u.kind !== "none") return { ...l, hit: u };
  }
  return null;
}
function iM(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: jt(Math.atan2(r.x, r.z) * _n),
    pitch_deg: Math.asin(J(r.y, -1, 1)) * _n
  };
}
function oM(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: J(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: J(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function aM(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * _n;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Rs = null;
function od() {
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
function sM(e, t = 1024) {
  const n = Math.max(1, Math.round(er(e, 2048))), r = Math.min(n, Math.max(1, Math.round(er(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function lM(e, t, n) {
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
function cM(e, t, n) {
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
function uM() {
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
      u.listeners.clear(), g.forEach((w) => w()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, l, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), g = lM(a, l, u);
    if (!b.startsWith("data:") || !g) return null;
    const w = cM(a, l, u), x = String((a == null ? void 0 : a.id) || "").trim() || w, M = t.get(x);
    if ((M == null ? void 0 : M.revision) === w) return { source: M.source, revision: w };
    const S = r(b, d), v = Number(S.naturalWidth || S.width || 0), F = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || v < 1 || F < 1) return null;
    const V = document.createElement("canvas");
    V.width = Math.max(1, Math.round(l)), V.height = Math.max(1, Math.round(u));
    const G = V.getContext("2d");
    return G ? (g.wrapOffsets.forEach((E) => {
      G.save(), G.translate(g.centerX + E, g.centerY), G.rotate(g.rotationRad), G.scale(g.scale, g.scale), G.drawImage(
        S,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), G.restore();
    }), t.set(x, { revision: w, source: V }), { source: V, revision: w }) : null;
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
function fM(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function dM(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function hM({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(w) {
    if (!w) return;
    w.entry.listeners.delete(w);
    const x = r.get(w.owner);
    (x == null ? void 0 : x.get(w.key)) === w && x.delete(w.key);
  }
  function l(w, x, M, S) {
    if (!w || typeof S != "function" || M.settled) return;
    let v = r.get(w);
    v || (v = /* @__PURE__ */ new Map(), r.set(w, v));
    const F = v.get(x);
    if ((F == null ? void 0 : F.entry) === M) {
      F.callback = S;
      return;
    }
    a(F);
    const V = { owner: w, key: x, entry: M, callback: S };
    v.set(x, V), M.listeners.add(V);
  }
  function u(w, x) {
    w.settled || (w.settled = !0, w.image.onload = null, w.image.onerror = null, !x && n.get(w.key) === w && n.delete(w.key), [...w.listeners].forEach((M) => {
      a(M);
      try {
        M.callback(w.image, x);
      } catch {
      }
    }), d(o));
  }
  function d(w) {
    if (!(n.size <= w))
      for (const [x, M] of n) {
        if (n.size <= w) break;
        !M.settled || M.listeners.size > 0 || (M.image.onload = null, M.image.onerror = null, n.delete(x));
      }
  }
  function b(w, x, M, S = null) {
    const v = String(x || ""), F = String(M || "");
    if (!v || !F) return null;
    let V = n.get(v);
    if (V)
      n.delete(v), n.set(v, V);
    else {
      d(o - 1);
      const E = e || globalThis.Image;
      if (typeof E != "function") return null;
      const R = new E();
      V = { key: v, image: R, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(v, V), R.onload = () => u(V, !0), R.onerror = () => u(V, !1), R.src = F;
    }
    return V.settled || V.image.complete && Number(V.image.naturalWidth || V.image.width || 0) > 0 || l(w, v, V, S), V.image;
  }
  function g(w) {
    const x = r.get(w);
    x && ([...x.values()].forEach(a), r.delete(w), d(o));
  }
  return { get: b, disposeOwner: g };
}
const Oa = /* @__PURE__ */ new WeakMap();
function cy(e, t, { editor: n = !1 } = {}) {
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
function ti(e, ...t) {
  const n = Oa.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Fl = "state_json";
function ni(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function pM(e) {
  var l, u;
  const t = ni(e, Fl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = c0(n, {
    coverage: (l = ni(e, "coverage")) == null ? void 0 : l.value
  }), o = ny(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function ad(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = ni(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var l, u, d, b, g, w, x, M, S;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (x = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), (S = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || S.call(M, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function mM(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function nm(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function gM(e) {
  var g, w, x, M, S, v;
  if (!e) return;
  const t = ni(e, "coverage"), n = ni(e, "bg_color"), r = ni(e, Fl), o = ni(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), l = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && mM(a) && (nm(l) || l === ""))) return;
  let b = "360";
  if (nm(l))
    try {
      b = String(Gn((g = JSON.parse(l)) == null ? void 0 : g.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (w = t.callback) == null || w.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = l, (M = r.callback) == null || M.call(r, l), o && (o.value = u, (S = o.callback) == null || S.call(o, u)), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
}
function al(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, l;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (l = r.parentEl) != null && l.style && (r.parentEl.style.display = "none")));
  });
}
function rf(e, t, n) {
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
async function yM(e, { tolerateOperationFailure: t = !1 } = {}) {
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
async function uy(e, t = {}) {
  var r;
  await yM(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function bM(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await uy(e), n ? n.apply(this, r) : this.value;
  };
}
function vM(e) {
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
function _M(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function mu(e, {
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
    var M;
    const w = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === w) return;
    vM(g), ad(g, t), al(g, Fl);
    const x = ni(g, Fl);
    if (bM(g, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const S = x.callback;
      x.callback = (v) => {
        var V;
        const F = S ? S(v) : void 0;
        return (V = g.setDirtyCanvas) == null || V.call(g, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      g.__panoSceneStateV2 = d;
      const S = ni(g, "bg_color");
      !d && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (M = S.callback) == null || M.call(S, "#00ff00")), rf(g, r, () => o(g, "stickers")), u && (a(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(g, "stickers")
      }), g.__panoStickersNodeSurface && al(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = w;
      return;
    }
    rf(g, r, () => o(g, "cutout")), l(g, {
      buttonText: r,
      onOpen: () => o(g, "cutout")
    }), g.__panoCutoutNodeSurface && al(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = w;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const w = e.prototype[g];
    e.prototype[g] = function() {
      const x = w ? w.apply(this, arguments) : void 0;
      g === "onNodeCreated" && n === "PanoramaCutout" && pM(this), g === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && gM(this);
      const M = !!this.__panoPreviewAttached;
      return (g === "onNodeCreated" || this.widgets) && b(this), g === "onAdded" && M && ti(this, "attach"), x;
    };
  }
}
function wM(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return _M(this), r;
  };
}
function xM(e, {
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
    ad(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    rf(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && al(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function SM({
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
    beforeRegisterNodeDef(d, b) {
      const g = String((b == null ? void 0 : b.name) || "");
      (g === "PanoramaStickers" || g === "Panorama Stickers") && mu(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), g === "PanoramaStickersNode" && mu(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && mu(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), xl(g) && wM(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      ad(d, e), xl(b) && xM(d, { app: e, openEditor: t, attachPreview: o, requestFrame: l });
    }
  };
}
const kM = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Er(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : kM.test(String(e.name || "")) : !1;
}
function sd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Er(n)) : !1;
}
function MM(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, g, w;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (g = d == null ? void 0 : d.stopPropagation) == null || g.call(d), (w = d == null ? void 0 : d.stopImmediatePropagation) == null || w.call(d);
  }, a = (d) => {
    if (sd(d == null ? void 0 : d.dataTransfer)) {
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
    const b = Array.from(((g = d == null ? void 0 : d.dataTransfer) == null ? void 0 : g.files) || []).find((w) => Er(w));
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
  if (!Er(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (l = globalThis.URL) == null ? void 0 : l.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const g = await new Promise((w, x) => {
      const M = new n();
      M.onload = () => w(M), M.onerror = () => x(new Error("image load failed")), M.src = a;
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
  if (!Er(e)) throw new TypeError("A supported image file is required.");
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
const rm = /* @__PURE__ */ new WeakSet(), im = /* @__PURE__ */ new WeakSet();
let om = 0;
function of(e) {
  if (!e || typeof e != "object" || im.has(e)) return e;
  const t = String(e.type || "preview");
  return om += 1, e.type = `${t}:pano-${om}`, im.add(e), e;
}
function Tl(e) {
  if (!e || typeof e != "object" || rm.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, rm.add(e), e;
}
function fy(e, t) {
  var r, o;
  if (!t || ((o = (r = Tl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function NM({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Ft } = Us;
JS((e) => Pi(e.id));
ZS(Ht);
const ld = hM(), { linkedVideoFile: PM } = D0({ app: Ft, api: Ht });
function af() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Us == null ? void 0 : Us.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const AM = "pano_suite.ui_settings.v1", CM = 120, IM = 2048;
function am() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(AM)) || "").trim();
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
function EM() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Aa(e) {
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
function OM() {
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
function sf(e) {
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
function dy(e) {
  const t = sf(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function FM(e, t, n) {
  dy(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function lf(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function cd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function hy(e) {
  return xl(cd(e));
}
function sm(e = null) {
  var a, l;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((l = (a = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : a.constructor) == null ? void 0 : l.name) || "");
  return [t, r, n, o].join("|");
}
function py(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = lf(e);
      this.activeBackend = a;
      const l = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && l === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && sl(e), kN(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = lf(e);
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
function TM(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function sl(e, t = {}) {
  var r, o, a, l, u;
  if (!e) return;
  cf.unregister(e), TM(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const g = String((b == null ? void 0 : b.name) || ""), w = String((b == null ? void 0 : b.type) || ""), x = af();
      return g === x || w === x || g === "pano_preview" || w === "pano_preview" ? !0 : g === "preview" && w === "pano_preview";
    }).forEach((b) => tN(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function DM(e, t = "#00ff00") {
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
function LM(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Xo(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Dn(e) {
  var u, d;
  const t = LM(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = Xo(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = Xo(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const l = e.__panoSceneStateV2 && typeof t == "string" ? u0(t, { backgroundColor: r, coverage: o, active: m0(e) }) : DM(t, r);
  return l.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: l }, l;
}
function Xo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function RM(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function my(e, t, n = null) {
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
  return !r && n != null && (r = RM(e == null ? void 0 : e.graph, n)), r;
}
function $M(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function gy(e, t = []) {
  const n = $M(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Ai.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function lm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Dl(e, t) {
  const n = lm(e), r = lm(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function VM(e, t) {
  var n;
  return my(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function zM(e, t = Ai) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = gy(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  return ik(e, l, VM);
}
const cf = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Ht) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, g, w, x;
        if (!a) return;
        const l = Dl(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !l || !l && ![...zM(a)].some((M) => Dl(r, M)) || T0(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (yy(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = a.setDirtyCanvas) == null || g.call(a, !0, !0), (x = (w = a.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Ht.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Ht) != null && e.removeEventListener) || (Ht.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
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
  return typeof ((a = Ht) == null ? void 0 : a.apiURL) == "function" ? Ht.apiURL(o) : o;
}
function jM(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function HM(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function GM(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function KM(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (jM(t)) return [t];
  const { filename: n, subfolder: r } = HM(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Ll({
    filename: n,
    subfolder: r,
    type: a
  }));
  return GM([...o, t]);
}
function BM(e) {
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
function Pi(e) {
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
  const r = n || Pi(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
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
function gu(e) {
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
function ud(e, t) {
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
function WM(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((l) => t.push(l));
  }, o = (a, l = 0) => {
    !a || l > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, l + 1), o(a.ui, l + 1), o(a.data, l + 1), o(a.result, l + 1));
  };
  return o(e, 0), t;
}
function UM(e, t) {
  try {
    e.__panoOwnOutputRev = fM(e.__panoOwnOutputRev);
    const n = WM(t);
    let r = "";
    for (const o of n)
      if (r = Bn(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), ud(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function qo(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function YM(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!Pn(e, "background"))
    return qo(e), null;
  const o = Pi(r), a = Jf(o, t, Bn);
  if (!a)
    return qo(e), null;
  const l = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = ud(a, l), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  qo(e);
  const g = ok({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: d, ...g }, g.video) : null;
}
function XM(e, t = []) {
  var b, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = gy(e, t).map((w) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(w))).filter((w) => w >= 0), a = n.map((w, x) => ({ input: w, idx: x })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const w of l) {
    const x = n[w], M = e.graph ? e.getInputLink(w) : null;
    if ((M == null ? void 0 : M.origin_id) == null) continue;
    const S = M.origin_id, v = my(e, w, S);
    if (!v) continue;
    const F = Number(M.origin_slot ?? 0), V = Pi((v == null ? void 0 : v.id) ?? S), G = Array.isArray(V == null ? void 0 : V.images) ? V.images : [];
    if (G.length) {
      const $ = [];
      F >= 0 && F < G.length && $.push(G[F]), $.push(...G);
      for (const H of $.filter((Q) => !il(Q))) {
        const Q = Bn(H);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: `${Q}&pano_src=${Qu(V)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let E = [];
    try {
      E = typeof (Ft == null ? void 0 : Ft.getNodeImageUrls) == "function" ? Ft.getNodeImageUrls(v) || [] : [];
    } catch {
      E = [];
    }
    if (Array.isArray(E) && E.length) {
      const $ = [];
      F >= 0 && F < E.length && $.push(E[F]), $.push(...E);
      for (const H of $) {
        const Q = Bn(H);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: Q, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const R = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
    if (R.length) {
      const $ = [];
      F >= 0 && F < R.length && $.push(R[F]), $.push(...R);
      for (const H of $) {
        const Q = Bn(H);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: Q, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const O = (b = v == null ? void 0 : v.widgets) == null ? void 0 : b.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image");
    if (O) {
      let $ = Bn(O.value);
      if ($ && !$.includes("/") && !$.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && ($ = Ht.apiURL(`/view?filename=${encodeURIComponent($)}&type=input&subfolder=`)), $)
        return String((x == null ? void 0 : x.name) || ""), { src: $, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const u = Pn(e, "background") ? Pi(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((g = u == null ? void 0 : u.ui) == null ? void 0 : g.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const w of d) {
      const x = Bn(w);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function qM(e, t = [], n = {}) {
  const r = XM(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = KM(o);
  if (!a.length) return null;
  const l = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return l && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), g = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  g.pendingSrcRaw = o, g.pendingResolvedSrc = "", g.pendingImg = b, e.__panoLinkedInputImageCache.set(u, g);
  let w = -1;
  const x = () => {
    var S, v, F, V;
    if (w += 1, w >= a.length) {
      if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          (V = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || V.call(F, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const M = a[w];
    g.pendingResolvedSrc = M, b.src = M;
  };
  return b.onload = () => {
    var M, S, v;
    ((S = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : S.call(M, u)) === g && g.pendingImg === b && (g.srcRaw = o, g.resolvedSrc = String(g.pendingResolvedSrc || b.src || ""), g.img = b, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, b.onerror = (M) => {
    var S, v, F, V;
    if (w + 1 < a.length) {
      x();
      return;
    }
    if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        (V = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || V.call(F, u);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, x(), l && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : b;
}
function JM(e, t = [], n = null, r = {}) {
  const o = qM(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function yy(e) {
  var t, n;
  if (e) {
    ld.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, qo(e), e.__panoWrappedErpCache = null;
  }
}
function ZM(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, qo(e), e.__panoWrappedErpCache = null;
  }
}
function by(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function $s(e, t, n = "") {
  const r = by(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < CM ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function cm(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), l = n / o, u = r / a, d = Math.min(l, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function QM(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), l = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || l <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), g = r + (a - d) * 0.5, w = o + (l - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, w, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + d * 0.5, w + b * 0.5 + 0.5), e.restore();
}
function yu(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function eN(e) {
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
function tN(e, t) {
  return fy(e, t);
}
function Qa(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = BM(n);
  if (!a && (r != null && r.external)) {
    if (!Pn(e, "external-sticker")) return null;
    const M = Pi(e == null ? void 0 : e.id), S = ((x = M == null ? void 0 : M.ui) == null ? void 0 : x.pano_sticker_input_images) || (M == null ? void 0 : M.pano_sticker_input_images) || [];
    for (const v of Array.isArray(S) ? S : [S])
      if (a = Bn(v), a) break;
  }
  if (!a) return null;
  const l = Ga(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(l ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? ud(a, d) : a, g = dM(a, u, d);
  return ld.get(e, g, b, (M, S) => {
    var v, F;
    S && (r != null && r.external && e.__panoOutputFromRun && ti(e, "image-loaded"), (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || F.call(v));
  }) || null;
}
function nN(e, t) {
  var w, x, M, S;
  const n = sN(e, t), r = lN(t), o = Array.isArray((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) ? t.painting.groups : [], a = new Map(
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
    return (S = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || S.call(M, []), l;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = uM()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var v, F;
    return (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null ? void 0 : F.call(v);
  });
  const d = sM(t == null ? void 0 : t.output_preset), b = u.filter((v) => (v == null ? void 0 : v.visible) !== !1 && String((v == null ? void 0 : v.layerKind) || "paint") === "paint").map((v) => String((v == null ? void 0 : v.id) || ""));
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
function rN(e, t, n, r) {
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
      const w = r.convertEventToCanvasOffset(t);
      if (Array.isArray(w) && w.length >= 2)
        return {
          x: Number(w[0]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[0]) || 0),
          y: Number(w[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
    };
  const o = oN(e, t, r);
  return o || null;
}
function iN(e, t) {
  var w, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (w = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : w.call(o), l = (t == null ? void 0 : t.ds) || ((x = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : x.ds);
  if (!a || !l) return null;
  const u = Number(l.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(l.offset) ? l.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), g = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(g) ? null : { x: b, y: g };
}
function oN(e, t, n) {
  var o, a;
  const r = iN(t, n || (Ft == null ? void 0 : Ft.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function aN(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function sN(e, t) {
  var b, g, w, x, M, S, v, F, V, G, E, R;
  const n = (g = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : g.strokes, r = (x = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const l = aN(e, t), u = `${l.width}x${l.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = ju(l), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) || null
  };
  return (((v = e.__panoPreviewPaintRevision) == null ? void 0 : v.paint) !== d.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== d.mask || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.groups) !== d.groups || ((G = e.__panoPreviewPaintRevision) == null ? void 0 : G.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((R = t == null ? void 0 : t.painting) == null ? void 0 : R.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function lN(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function cN(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function uN(e, t, n) {
  const r = id(t, n);
  r.visible && rd(e, r.boundaryEdges, { selected: !1 });
}
function fN(e, t, n) {
  const r = id(t, n);
  r.visible && (e.save(), rd(e, r.boundaryEdges, { selected: !0 }), ly(e, r, { accent: tM(t) }), e.restore());
}
function uf(e, t, n) {
  return x0(Cl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function $l(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? na;
}
function dN(e) {
  return [Pn(e, "background") ? Jf(Pi(e.id), ["pano_input_videos"], Bn) : "", PM(e, Ai)];
}
function hN(e) {
  var a;
  if (!Pn(e, "external-sticker")) return null;
  const t = Pi(e.id), n = Ga(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Bn), meta: n };
  const o = Jf(t, ["pano_sticker_input_videos"], Bn);
  return o ? { src: o, meta: n } : null;
}
function pN({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function um(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: so({ ...t, painting: null }) });
  const r = (l) => {
    var d;
    if (l.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = Qa(e, l.id, h0(l.source), { external: l.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (l.source.kind === "port" && b) {
        const g = b.playback.stickerPicture(b.stickerStill, u), w = $0(b.playback.stickerMedia, u);
        return g ? { media: g, revision: gu(g), source: w } : null;
      }
    } else {
      const b = l.type === "external_image" || l.source_kind === "external_image", g = String(l.asset_id || "") || (b ? String(l.id || "") : "");
      u = Qa(e, g, (d = t.assets) == null ? void 0 : d[l.asset_id], { external: b });
    }
    return Rl(u) ? { media: u, revision: gu(u) } : null;
  }, o = nN(e, t).filter((l) => l.visible !== !1).map((l) => ({ id: l.id, media: l.source, revision: l.revision, opacity: l.opacity, zIndex: l.zIndex }));
  return {
    background: Rl(n) ? { media: n, revision: gu(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: S0(e.__panoSurfaceScene.sceneState, $l(e), t.stickers, { media: r, paintLayers: o })
  };
}
function mN(e, t, n) {
  var R, O, $, H, Q, _e, T;
  const r = String(e.__panoPreviewMode || "stickers");
  by(e, r);
  const o = Dn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, ($ = (O = (R = e.__panoCutoutNodeSurface) == null ? void 0 : R.session) == null ? void 0 : O.refresh) == null || $.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (Q = (H = e.__panoStickersNodeSurface) == null ? void 0 : H.session) == null ? void 0 : Q.refresh) == null || _e.call(Q));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== u) && (t.width = l, t.height = u);
  const b = { x: 0, y: 0, w: l, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, u);
  const g = (e.__panoSurfacePlayback ? pN(e.__panoSurfacePlayback) : YM(e, ["pano_input_videos"], () => {
    var I, se;
    return (se = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : se.call(I);
  })) || JM(
    e,
    Ai,
    () => {
      var I, se;
      return (se = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : se.call(I);
    },
    { preserveReadyWhilePending: !1 }
  ), w = Rl(g);
  let x = null;
  const M = (I, se) => {
    x || (x = um(e, o, g));
    const le = n.render({ width: I.w, height: I.h, camera: se, ...x });
    return le && d.drawImage(le.canvas, le.x, le.y, le.width, le.height, I.x, I.y, I.w, I.h), !!le;
  };
  if (r === "cutout") {
    const I = eN(o), se = cN(g), le = I ? J(si(I).aspect, 0.1, 10) : w ? J(Number(se.width / se.height), 0.05, 20) : 1, ue = td(b, le);
    e.__panoCutoutNodeFrame = ue;
    let U = "none";
    const X = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (I)
      if (g && !w)
        U = "loading";
      else if (w) {
        const j = Nk({ width: l, height: u }, ue, I);
        [
          !j.fallback || M(j.fallback.rect, nl(j.fallback.shot)),
          M(j.rect, nl(j.shot)),
          !j.fallback || M(ue, nl(I))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const j = e.__panoLastCutoutShot;
      j ? (e.__panoPreviewView = ty(j, { width: l, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), w ? M(b, Cl(e.__panoPreviewView, l, u)) || (U = "loading") : g ? U = "loading" : U = "empty";
    }
    w || n.release(), n.failed && U === "loading" && (U = "none"), I && (e.__panoLastCutoutShot = { ...I }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, u), d.rect(ue.x, ue.y, ue.w, ue.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(ue.x + 0.5, ue.y + 0.5, Math.max(0, ue.w - 1), Math.max(0, ue.h - 1)), d.restore()), U === "loading" ? (yu(e, !1), $s(e, !0, X)) : U === "empty" ? (yu(e, !0), $s(e, !1, "")) : (yu(e, !1), $s(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let S = !1;
  (!g || w) && (x = um(e, o, g), !x.background && !x.layers.length ? (n.release(), S = !0) : S = M(b, Cl(e.__panoPreviewView, l, u)));
  const v = !S && !n.failed;
  $s(e, v, v ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), v && QM(d, b, cm(t, b));
  const F = uf(e, l, u);
  !g && S && gN(d, F, cm(t, b));
  const V = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), G = ef(o, $l(e)), E = S ? G.find((I) => String((I == null ? void 0 : I.id) || "") === V && (I == null ? void 0 : I.visible) !== !1) : null;
  S && G.filter((I) => I !== E && (I == null ? void 0 : I.visible) !== !1 && (I.external || I.source_kind === "external_image")).filter((I) => !Rl(Qa(e, I.id, null, { external: !0 }))).forEach((I) => uN(d, I, F)), E && fN(d, E, F);
}
function fm(e, t, n, r, o = 1) {
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
function gN(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push($n(b, u));
    fm(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push($n(u, b));
    fm(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: $n(0, 0) },
    { name: "Right", dir: $n(90, 0) },
    { name: "Back", dir: $n(180, 0) },
    { name: "Left", dir: $n(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const l = Math.max(9, Math.round(11 * n));
  e.font = `500 ${l}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function ff(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function yN(e, t, n = 20) {
  var l;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (l = t.getBoundingClientRect) == null ? void 0 : l.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function Zn(e, t) {
  return yN(e, t) ? !1 : (ff(e), !0);
}
function dm() {
  var n;
  const e = (n = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function bN(e) {
  var n;
  if (!e) return;
  const t = (n = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function vN(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !dy(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function _N(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, l;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (l = e.setDirtyCanvas) == null || l.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function hm(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && wN(e, 180, t);
    }
  };
}
function wN(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Da(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const xN = /* @__PURE__ */ new WeakMap();
function vy(e, t) {
  return T0(xN, e, t) ? !1 : (UM(e, t), yy(e), Da(e), !0);
}
async function SN(e) {
  var n, r;
  const t = await nk(e, Ft, Ht);
  t && (vy(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function kN(e, t = {}) {
  var ho;
  const n = t.__allowStandalone === !0, r = hy(e);
  if (r && !n) {
    cd(e);
    return;
  }
  r && vN(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: sm(e)
  }, u = "dom", d = l.signature || sm(e);
  if (Number(e.__panoRebindGeneration || 0), lf(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, sf(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (ho = e.__panoDomPreview) != null && ho.widget || (e.__panoLegacyPreviewHooked && sl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, g = b ? 0 : 56, w = b ? 0 : xk, x = document.createElement("div");
  if (OM(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
    "width:100%",
    b ? "height:auto" : "height:100%",
    w > 0 ? `min-height:${w}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), b) {
    const z = Tl(of(
      e.addDOMWidget(af(), "preview", x, hm(e, null))
    ));
    Da(e), e.__panoDomPreview = { widget: z, root: x, requestDraw: () => {
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
  ].join(";"), v.textContent = "Connect ERP image", M.appendChild(S), M.appendChild(v), x.appendChild(M);
  const F = Rg(x), V = document.createElement("div");
  V && (V.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", V.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild(V)), FM(e, 120, 120), Da(e);
  let G = null;
  try {
    _N(e, g, () => {
      var z, ve;
      return (ve = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ve.call(z);
    }), G = Tl(of(e.addDOMWidget(
      af(),
      "preview",
      x,
      hm(
        e,
        () => {
          var z, ve;
          return (ve = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ve.call(z);
        },
        g,
        w,
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
  }, O = M0(R), $ = /* @__PURE__ */ ia(o ? { ...X0(Dn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Q0(Dn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((z) => ({ value: z, label: z }))
  });
  let H = null;
  if (o && e.__panoSceneStateV2) {
    const [z, ve] = [0, 1].map(() => {
      const Ae = document.createElement("video");
      return Ae.playsInline = !0, Ae.preload = "auto", Ae.crossOrigin = "anonymous", Ae.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", M.appendChild(Ae), Ae;
    }), ke = document.createElement("canvas");
    ke.__panoFrameIdx = 0;
    const Oe = document.createElement("canvas");
    Oe.__panoFrameIdx = 0;
    const je = _k({
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
        const Ae = Math.min(1, IM / z.videoWidth);
        ke.width = Math.round(z.videoWidth * Ae), ke.height = Math.round(z.videoHeight * Ae), (Ze = ke.getContext("2d")) == null || Ze.drawImage(z, 0, 0, ke.width, ke.height), ke.__panoFrameIdx += 1, R();
      },
      onStickerCapture: () => {
        var Ae;
        ve.videoWidth > 0 && ve.videoHeight > 0 && (Oe.width = ve.videoWidth, Oe.height = ve.videoHeight, (Ae = Oe.getContext("2d")) == null || Ae.drawImage(ve, 0, 0), Oe.__panoFrameIdx += 1, R());
      },
      onChange: () => {
        $.playing = je.playing, R();
      }
    });
    H = { playback: je, video: z, still: ke, stickerVideo: ve, stickerStill: Oe, stickerSource: "" }, e.__panoSurfacePlayback = H;
  }
  const Q = () => {
    var gt;
    const { playback: z, still: ve, stickerStill: ke } = H, Oe = vk(M, !!((gt = e.flags) != null && gt.collapsed)), je = z.source, Ae = Oe ? hN(e) : null, Ze = z.follow({
      shown: Oe,
      sources: Oe ? dN(e) : [],
      state: Dn(e),
      sticker: Ae
    });
    ((Ae == null ? void 0 : Ae.src) || "") !== H.stickerSource && (H.stickerSource = (Ae == null ? void 0 : Ae.src) || "", ke.width = 0), z.source !== je && (ve.width = 0, ve.__panoFrameIdx = 0), $.playable = Ze, $.playing = z.playing;
  }, _e = () => H == null ? void 0 : H.playback.pause();
  let T = null;
  const I = (o ? yk : Ak)({
    readState: () => Dn(e),
    publishLiveState: (z) => {
      z ? (T = z, e.__panoLiveStateOverride = z) : (e.__panoLiveStateOverride === T && (e.__panoLiveStateOverride = null), T = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, R();
    },
    commitState: (z) => {
      var Oe, je, Ae, Ze;
      const ve = Xo(e, "state_json");
      if (!ve) return;
      g0(e, z.active);
      const ke = y0(e, z);
      b0(e, ke, String(ve.value ?? "")) || (ve.value = ke, (Oe = ve.callback) == null || Oe.call(ve, ke), e.__panoStateCache = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Ze = (Ae = e.graph) == null ? void 0 : Ae.setDirtyCanvas) == null || Ze.call(Ae, !0, !0));
    },
    onChange: (z) => Object.assign($, z)
  }), le = o ? cy(e, (z = "sync", ve = null) => {
    var br;
    if (!o || !e.graph || !I || I.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Cn = Pn(e, "external-sticker"), kt = Dn(e).stickers.find((ar) => ar.source.kind === "port");
      return I.apply({
        type: "sync-port",
        value: U0(e, {
          pose: Cn ? Ga(e, "pano_sticker_input_pose", ve) : null,
          image: kt ? Qa(e, kt.id, null, { external: !0 }) : null
        })
      });
    }
    const ke = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Cn) => String((Cn == null ? void 0 : Cn.name) || "") === "sticker_image") : -1, Oe = ke >= 0 ? ((br = e.getInputLink(ke)) == null ? void 0 : br.id) ?? null : null;
    if (Oe == null)
      return I.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Pn(e, "external-sticker")) return !1;
    const je = Ga(e, "pano_sticker_input_pose", ve), Ae = Array.isArray(je) ? je[0] : je, Ze = String(Ga(e, "pano_sticker_input_state_hash", ve) ?? ""), gt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Dt = Dn(e), or = (Array.isArray(Dt == null ? void 0 : Dt.stickers) ? Dt.stickers : []).find((Cn) => String((Cn == null ? void 0 : Cn.id) || "") === "sticker_image_1"), Yt = Qa(e, "sticker_image_1", null, { external: !0 }), Ci = Ae && typeof Ae == "object" ? Ae : or || { yaw_deg: gt.yaw, pitch_deg: gt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return I.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Oe,
        stateHash: Ze,
        pose: Ci,
        imageWidth: Number((Yt == null ? void 0 : Yt.naturalWidth) || (Yt == null ? void 0 : Yt.width) || 0),
        imageHeight: Number((Yt == null ? void 0 : Yt.naturalHeight) || (Yt == null ? void 0 : Yt.height) || 0)
      }
    });
  }) : () => {
  };
  let ue = 0;
  const U = async (z) => {
    if (!o || !I || !Er(z)) return !1;
    _e();
    const ve = `asset_${Math.random().toString(16).slice(2, 10)}`, ke = `st_${Math.random().toString(16).slice(2, 10)}`, Oe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    ue += 1, $.importing = !0;
    const je = Fa(e, `add:${ve}`, async () => {
      const Ae = await Ta(z), Ze = await Wi(z, {
        fetchApi: (gt, Dt) => Ht.fetchApi(gt, Dt)
      });
      return Ie(), I.apply({
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
      ue = Math.max(0, ue - 1), $.importing = ue > 0, R();
    }
  };
  let X = null, j = null, N = null, ee = !1;
  const Y = () => {
    var z;
    return N && (clearTimeout(N), N = null), ee ? (ee = !1, ((z = I == null ? void 0 : I.commitGesture) == null ? void 0 : z.call(I)) ?? !1) : !1;
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
    const ke = ((Ae = I == null ? void 0 : I.commitGesture) == null ? void 0 : Ae.call(I)) ?? !1;
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
    const ke = ((Ae = I == null ? void 0 : I.cancelGesture) == null ? void 0 : Ae.call(I)) ?? !1;
    return z || ke;
  }, St = () => Ie();
  I && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(St));
  let pt = null, ln = !1;
  if (V && I)
    try {
      od(), pt = Of(o ? eM : Wk, {
        model: $,
        onAction: (z) => {
          var Oe, je;
          if ((z == null ? void 0 : z.type) === "toggle-playback") {
            Ie(), H == null || H.playback.toggle();
            return;
          }
          if (_e(), (z == null ? void 0 : z.type) === "open-editor") {
            Ie(), o || ($.aspectOpen = !1), (Oe = e.__panoOpenEditor) == null || Oe.call(e);
            return;
          }
          if (o) {
            if ((z == null ? void 0 : z.type) === "add-image-file") {
              U(z.file);
              return;
            }
            I.apply(z) && R();
            return;
          }
          if ((z == null ? void 0 : z.type) === "toggle-aspect") {
            $.aspectOpen = !$.aspectOpen;
            return;
          }
          if ((z == null ? void 0 : z.type) === "close-aspect") {
            $.aspectOpen = !1;
            return;
          }
          let ve = z;
          if ((z == null ? void 0 : z.type) === "add-frame") {
            const Ae = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ve = {
              ...z,
              ...kk(Ae, {
                width: S.width,
                height: S.height
              })
            };
          } else if ((z == null ? void 0 : z.type) === "delete-frame") {
            const Ae = oo(Dn(e));
            Ae && (e.__panoPreviewView = ty(Ae, {
              width: S.width,
              height: S.height
            }));
          }
          const ke = ((je = e.__panoCutoutNodeFrame) == null ? void 0 : je.safeRect) || null;
          $.aspectOpen = !1, I.apply({ ...ve, safeRect: ke }) && R();
        }
      }), pt.mount(V), ln = !0;
    } catch {
      pt = null, ln = !1;
    }
  const it = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    H && Q(), R();
  }) : null;
  it == null || it.observe(M);
  const Yn = (z) => {
    var ke, Oe;
    E.raf = 0, E.inTick = !0;
    let ve = !1;
    try {
      ve = It.stepInertia(z), (E.needsDraw || ve) && (E.needsDraw = !1, H && Q(), (ke = e.flags) != null && ke.collapsed || mN(e, S, O), $.viewUnavailable = O.failed);
    } finally {
      E.inTick = !1;
    }
    (ve || E.needsDraw) && !E.raf && (E.raf = requestAnimationFrame(Yn)), EM() && (!e.__panoDebugLastTs || z - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = z, e.__panoPreviewMode, sf(e), Aa(x), Aa(M), Aa(S), Aa(x.parentElement), Aa((Oe = x.parentElement) == null ? void 0 : Oe.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, It = Lf({
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
      const z = am();
      return {
        x: z.invert_view_x ? -1 : 1,
        y: z.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      R();
    }
  }), Qt = o ? M : x, cn = (z) => {
    const ve = S.getBoundingClientRect();
    return {
      x: (Number(z.clientX) - ve.left) * (S.width / Math.max(1, ve.width)),
      y: (Number(z.clientY) - ve.top) * (S.height / Math.max(1, ve.height))
    };
  }, ci = (z) => {
    var Oe, je;
    if (!o || !a) return;
    const ve = Dn(e), ke = tm(
      ef(ve, $l(e)),
      String(((Oe = ve == null ? void 0 : ve.active) == null ? void 0 : Oe.selected_sticker_id) || ""),
      cn(z),
      uf(e, S.width, S.height)
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
    var gt, Dt, or, Yt, Ci, xn, br, Cn, kt, ar, as;
    if (!Zn(z, Qt) || z.button !== 0) return;
    if (!o) {
      const In = oo(Dn(e)), Vn = e.__panoCutoutNodeFrame;
      if (!In) {
        (gt = x.focus) == null || gt.call(x, { preventScroll: !0 }), (Dt = S.setPointerCapture) == null || Dt.call(S, z.pointerId), S.style.cursor = "grabbing", It.startDrag(z.clientX, z.clientY, z.pointerId);
        return;
      }
      if (In.locked === !0 || !Vn || !I) return;
      const vr = cn(z);
      let Ii;
      if (z.shiftKey) {
        const dn = ry({
          frame: Vn,
          point: vr,
          startRollDeg: Number(In.roll_deg ?? In.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!dn) return;
        Ii = { kind: "roll", pointerId: z.pointerId, rollGesture: dn };
      } else {
        const dn = ((or = Dn(e)) == null ? void 0 : or.ui_settings) || am();
        Ii = {
          kind: "pan",
          pointerId: z.pointerId,
          startPoint: vr,
          startShot: { ...In },
          focalPx: to(Vn, In),
          invertX: dn.invert_view_x === !0,
          invertY: dn.invert_view_y === !0
        };
      }
      Ie(), (Yt = x.focus) == null || Yt.call(x, { preventScroll: !0 }), (Ci = S.setPointerCapture) == null || Ci.call(S, z.pointerId), S.style.cursor = "grabbing", I.beginGesture(), X = Ii;
      return;
    }
    if (!a) return;
    const ve = cn(z), ke = Dn(e), Oe = String(((xn = ke == null ? void 0 : ke.active) == null ? void 0 : xn.selected_sticker_id) || ""), je = uf(e, S.width, S.height);
    (br = x.focus) == null || br.call(x, { preventScroll: !0 });
    const Ae = () => tm(ef(ke, $l(e)), Oe, ve, je);
    let Ze = Ae();
    if (Ze && (H != null && H.playback.playing) && (_e(), Ze = Ae()), Ze && I) {
      if (It.stopMotion(), Ie(), String(((Cn = Ze.item) == null ? void 0 : Cn.id) || "") !== Oe && I.apply({ type: "select-sticker", id: Ze.item.id }), ((kt = Ze.item) == null ? void 0 : kt.locked) === !0) {
        R();
        return;
      }
      const In = ve, Vn = Ze.geometry.center;
      j = {
        active: !0,
        kind: Ze.hit.kind,
        pointerId: z.pointerId,
        startPoint: In,
        startCenter: { ...Vn },
        startSticker: { ...Ze.item },
        startDistance: Math.max(1, Math.hypot(In.x - Vn.x, In.y - Vn.y)),
        startAngle: Math.atan2(In.y - Vn.y, In.x - Vn.x),
        projection: je
      }, I.beginGesture(), (ar = S.setPointerCapture) == null || ar.call(S, z.pointerId), S.style.cursor = Ze.hit.kind === "rotate" ? "grabbing" : Ze.hit.kind === "move" ? "move" : Ze.hit.cursor, R();
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
      if (X.pointerId !== z.pointerId || !I) return;
      if (Zn(z, Qt), X.kind === "pan") {
        const ke = cn(z);
        I.updateGesture({
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
      const ve = iy(X.rollGesture, cn(z), z);
      if (!ve) return;
      X.rollGesture = ve.gesture, I.updateGesture({ type: "set-roll", value: ve.rollDeg });
      return;
    }
    if (!j && !It.state.drag.active) {
      ci(z);
      return;
    }
    if (j) {
      if (j.pointerId !== z.pointerId || !I) return;
      Zn(z, Qt);
      const ve = cn(z);
      let ke = j.startSticker;
      if (j.kind === "move")
        ke = iM(
          j.startSticker,
          {
            x: j.startCenter.x + ve.x - j.startPoint.x,
            y: j.startCenter.y + ve.y - j.startPoint.y
          },
          j.projection
        );
      else if (j.kind === "scale") {
        const Oe = Math.hypot(ve.x - j.startCenter.x, ve.y - j.startCenter.y);
        ke = oM(j.startSticker, j.startDistance, Oe);
      } else if (j.kind === "rotate") {
        const Oe = Math.atan2(ve.y - j.startCenter.y, ve.x - j.startCenter.x);
        ke = aM(j.startSticker, j.startAngle, Oe, z.shiftKey === !0);
      }
      I.updateGesture({ type: "set-transform", value: ke }), R();
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
    if (!I) return;
    const z = (X == null ? void 0 : X.pointerId) ?? (j == null ? void 0 : j.pointerId);
    X = null, j = null;
    try {
      (ve = S.hasPointerCapture) != null && ve.call(S, z) && ((ke = S.releasePointerCapture) == null || ke.call(S, z));
    } catch {
    }
    I.cancelGesture(), S.style.cursor = "grab", R();
  }, B = (z, ve = !1) => {
    var ke, Oe, je, Ae;
    if (!o) {
      if (!X) {
        if (!It.state.drag.active) return;
        Zn(z, Qt), (ke = S.releasePointerCapture) == null || ke.call(S, z.pointerId), S.style.cursor = "grab", It.endDrag(), R();
        return;
      }
      if (X.pointerId !== z.pointerId || !I) return;
      Zn(z, Qt), X = null, (Oe = S.releasePointerCapture) == null || Oe.call(S, z.pointerId), S.style.cursor = "grab", ve ? I.cancelGesture() : I.commitGesture(), ci(z), R();
      return;
    }
    if (j) {
      if (j.pointerId !== z.pointerId || !I) return;
      Zn(z, Qt), j = null, (je = S.releasePointerCapture) == null || je.call(S, z.pointerId), S.style.cursor = "grab", ve ? I.cancelGesture() : I.commitGesture(), R();
      return;
    }
    !a || !It.state.drag.active || (Zn(z, Qt), (Ae = S.releasePointerCapture) == null || Ae.call(S, z.pointerId), S.style.cursor = "grab", It.endDrag(), R());
  };
  S.addEventListener("pointerup", B), S.addEventListener("pointercancel", (z) => B(z, !0)), S.addEventListener("lostpointercapture", L), S.addEventListener("pointerleave", (z) => {
    !o && X || j || It.state.drag.active && B(z);
  });
  const q = (z) => {
    const ve = document.activeElement;
    if (ve !== x && !x.contains(ve)) return;
    if (z.key === "Escape" && (X || j) && I) {
      L(), ff(z);
      return;
    }
    if (!o || z.key !== "Delete" && z.key !== "Backspace" || !I) return;
    const ke = z.target, Oe = String((ke == null ? void 0 : ke.tagName) || "").toUpperCase();
    Oe === "INPUT" || Oe === "TEXTAREA" || ke != null && ke.isContentEditable || $.canDelete === !0 && (_e(), Ie(), I.apply({ type: "delete-selected" }) && R(), ff(z));
  };
  window.addEventListener("keydown", q, !0);
  const be = NM({
    requestFrame: (z) => requestAnimationFrame(z),
    cancelFrame: (z) => cancelAnimationFrame(z),
    restore: (z) => bN(z)
  }), me = (z) => {
    var ke, Oe, je, Ae, Ze, gt;
    if (!Zn(z, Qt)) return;
    if (!o) {
      const Dt = oo(Dn(e));
      if (Dt && Dt.locked !== !0 && I) {
        const or = vl(z);
        or !== 0 && (ee || (Ie(), I.beginGesture(), ee = !0), I.updateGesture({
          type: "step-fov",
          direction: or
        }) ? (N && clearTimeout(N), N = setTimeout(Y, 180), R()) : I.hasGestureChanges() || (I.cancelGesture(), ee = !1));
      } else if (!Dt) {
        const or = dm();
        It.applyWheelEvent(z) && R(), be.schedule(or);
      }
      (ke = z.preventDefault) == null || ke.call(z), (Oe = z.stopPropagation) == null || Oe.call(z), (je = z.stopImmediatePropagation) == null || je.call(z);
      return;
    }
    if (!a) return;
    const ve = dm();
    It.applyWheelEvent(z) && R(), (Ae = z.preventDefault) == null || Ae.call(z), (Ze = z.stopPropagation) == null || Ze.call(z), (gt = z.stopImmediatePropagation) == null || gt.call(z), be.schedule(ve);
  }, ge = o ? [M, S] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((z) => {
    ge.forEach((ve) => ve.addEventListener(z, me, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((z) => {
    S.addEventListener(z, (ve) => Zn(ve, Qt)), M.addEventListener(z, (ve) => Zn(ve, Qt));
  });
  const Me = Xo(e, "state_json");
  let Ne = null, xe = null;
  Me && !Me.__panoPreviewPatchedCb && (Ne = Me.callback, xe = (z) => {
    const ve = Ne ? Ne(z) : void 0;
    return R(), ve;
  }, Me.callback = xe, Me.__panoPreviewPatchedCb = xe);
  const fe = Xo(e, "bg_color");
  let $e = null, Ee = null;
  fe && !fe.__panoPreviewPatchedCb && ($e = fe.callback, Ee = (z) => {
    const ve = $e ? $e(z) : void 0;
    return R(), ve;
  }, fe.callback = Ee, fe.__panoPreviewPatchedCb = Ee);
  const Ve = e.onRemoved, Ke = e.onResize, p = e.onExecuted, Le = e.onDragOver, st = e.onDragDrop;
  let Be = null;
  const Tt = () => {
    o && ($.dropActive = !0, Be && clearTimeout(Be), Be = setTimeout(() => {
      Be = null, $.dropActive = !1;
    }, 140));
  }, un = o ? function(z) {
    return (Le ? Le.apply(this, arguments) : !1) === !0 ? !0 : sd(z == null ? void 0 : z.dataTransfer) ? (Tt(), !0) : !1;
  } : null, rn = o ? function(z) {
    var Oe;
    if ((st ? st.apply(this, arguments) : !1) === !0) return !0;
    const ke = Array.from(((Oe = z == null ? void 0 : z.dataTransfer) == null ? void 0 : Oe.files) || []).find((je) => Er(je));
    return ke ? (Be && clearTimeout(Be), Be = null, $.dropActive = !1, U(ke), !0) : !1;
  } : null;
  o && (e.onDragOver = un, e.onDragDrop = rn);
  const $t = o ? MM(x, {
    onActive: (z) => {
      if (z) {
        Tt();
        return;
      }
      Be && clearTimeout(Be), Be = null, $.dropActive = !1;
    },
    onDrop: (z) => {
      U(z);
    }
  }) : () => {
  }, Xn = function(z) {
    e.__panoOutputFromRun = !0;
    const ve = vy(e, z);
    ti(e, ve ? "executed" : "sync", z), R();
    const ke = p ? p.apply(this, arguments) : void 0;
    return Da(e), ke;
  };
  e.onExecuted = Xn;
  const Ce = e.onConnectionsChange, Bt = function(z, ve) {
    const ke = Hp(e, z, ve, qf), Oe = Hp(e, z, ve, Ai), je = arguments, Ae = Ce ? Ce.apply(this, je) : void 0, Ze = () => {
      E.destroyed || (Oe && ZM(e), ke && ti(e, "connection-change"), Da(e), R());
    };
    return Ze(), queueMicrotask(Ze), Ae;
  };
  e.onConnectionsChange = Bt;
  const zr = function() {
    const z = Ke ? Ke.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, R(), z;
  };
  e.onResize = zr;
  const yr = function() {
    return fo(), cf.unregister(this), Ve ? Ve.apply(this, arguments) : void 0;
  };
  e.onRemoved = yr;
  const fo = () => {
    var z, ve, ke, Oe, je, Ae, Ze, gt, Dt;
    E.destroyed = !0, (z = it == null ? void 0 : it.disconnect) == null || z.call(it), o ? Ie() : Fe(), S.removeEventListener("lostpointercapture", L), $t(), F(), window.removeEventListener("keydown", q, !0), (ke = (ve = e.__panoStateFlushers) == null ? void 0 : ve.delete) == null || ke.call(ve, St), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Oe = I == null ? void 0 : I.destroy) == null || Oe.call(I), (je = pt == null ? void 0 : pt.unmount) == null || je.call(pt), H && (H.playback.dispose(), H.video.remove(), H.stickerVideo.remove(), e.__panoSurfacePlayback === H && (e.__panoSurfacePlayback = null)), O.dispose(), e.__panoSurfaceScene = null, (Ze = (Ae = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ae.dispose) == null || Ze.call(Ae), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, le(), be.dispose(), Be && clearTimeout(Be), Be = null, ld.disposeOwner(e), qo(e), E.raf && cancelAnimationFrame(E.raf), E.raf = 0, ((gt = e.__panoCutoutNodeSurface) == null ? void 0 : gt.session) === I && (e.__panoCutoutNodeSurface = null), ((Dt = e.__panoStickersNodeSurface) == null ? void 0 : Dt.session) === I && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === zr && (e.onResize = Ke), e.onExecuted === Xn && (e.onExecuted = p), e.onConnectionsChange === Bt && (e.onConnectionsChange = Ce), xe && (Me == null ? void 0 : Me.callback) === xe && (Me.callback = Ne), xe && (Me == null ? void 0 : Me.__panoPreviewPatchedCb) === xe && delete Me.__panoPreviewPatchedCb, Ee && (fe == null ? void 0 : fe.callback) === Ee && (fe.callback = $e), Ee && (fe == null ? void 0 : fe.__panoPreviewPatchedCb) === Ee && delete fe.__panoPreviewPatchedCb, e.onDragOver === un && (e.onDragOver = Le), e.onDragDrop === rn && (e.onDragDrop = st), e.onRemoved === yr && (e.onRemoved = Ve);
  };
  e.__panoDomRestore = fo, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = I && ln && !o ? { session: I, model: $ } : null, e.__panoStickersNodeSurface = I && ln && o ? { session: I, model: $ } : null, e.__panoDomPreview = {
    widget: G,
    root: x,
    canvas: S,
    requestDraw: R,
    state: E,
    emptyHintEl: v,
    nodeSurface: e.__panoCutoutNodeSurface
  }, cf.register(e), e.graph && ti(e, "attach"), R();
}
function pm(e, t = {}) {
  py(e).attach({
    ...t,
    mode: "cutout"
  });
}
function mm(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (hy(e) && !n) {
    cd(e);
    return;
  }
  py(e).attach(t);
}
function MN(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function NN(e, t = 1, n = Vp) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), l = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(l) ? l : 0) * o, b = Number(n), g = Number.isFinite(b) && b > 0 ? b : Vp, w = Math.max(u, d), x = w > 0 ? Math.min(1, g / w) : 1;
  return {
    width: Math.max(1, Math.round(u * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function PN({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var M;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let l = !1, u = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const S = d();
    return S === u || (u = S, o(S)), S;
  }, g = () => b();
  return (M = t == null ? void 0 : t.addEventListener) == null || M.call(t, "fullscreenchange", g), b(), { toggle: async () => {
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
          const V = (v = t.exitFullscreen) == null ? void 0 : v.call(t);
          (F = V == null ? void 0 : V.catch) == null || F.call(V, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const AN = { class: "pano-preview-node-surface" }, CN = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (oe(), ce("div", AN, [
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
      e.model.viewUnavailable ? (oe(), Vr(nd, { key: 0 })) : ct("", !0)
    ]));
  }
}, Vs = 140, IN = 180, gm = 40, bu = 10;
function ym(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function bm(e, t) {
  const n = ym(e), r = ym(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function vm(e) {
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
  return typeof ((a = Ht) == null ? void 0 : a.apiURL) == "function" ? Ht.apiURL(o) : o;
}
function Jo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Jo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return vm({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Jo(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : vm(e);
}
function _y(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function EN(e) {
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
function df(e) {
  var o;
  const t = (o = Or) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (bm(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (bm(a, n)) return t[a];
  return null;
}
function ON(e) {
  var r, o;
  const t = df(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const l of a) {
        const u = Jo(l);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function FN(e, t = "erp_image") {
  var M, S, v, F, V, G, E;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((R) => String((R == null ? void 0 : R.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((R, O) => String((R == null ? void 0 : R.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(O))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const l = (v = (S = (M = Or) == null ? void 0 : M.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : v.call(S, a), u = df(a), d = df(e == null ? void 0 : e.id), b = [
    (F = d == null ? void 0 : d.ui) == null ? void 0 : F.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (V = u == null ? void 0 : u.ui) == null ? void 0 : V.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const R of b)
    if (Array.isArray(R))
      for (const O of R) {
        const $ = Jo(O);
        if ($) return $;
      }
  let g = [];
  try {
    g = typeof ((G = Or) == null ? void 0 : G.getNodeImageUrls) == "function" ? Or.getNodeImageUrls(l) || [] : [];
  } catch {
    g = [];
  }
  if (Array.isArray(g) && g.length > 0)
    for (const R of g) {
      const O = Jo(R);
      if (O) return O;
    }
  if (l) {
    const R = Array.isArray(l == null ? void 0 : l.imgs) ? l.imgs : [];
    for (const O of R) {
      const $ = Jo(O);
      if ($) return $;
    }
  }
  const w = (E = l == null ? void 0 : l.widgets) == null ? void 0 : E.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image"), x = String((w == null ? void 0 : w.value) || "").trim();
  return x ? Ht.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function vu(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function _m(e, t, n, r, o, a, l) {
  var b, g, w;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !_y(a) || n <= 1 || r <= 1) {
    vu(t, n, r);
    return;
  }
  if (l.failed) {
    vu(t, n, r);
    return;
  }
  const u = Number(((w = (g = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : g.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : w.value) || 360) === 180 ? 180 : 360, d = l.render({
    width: n,
    height: r,
    camera: Cl(o, n, r),
    background: { media: a, revision: EN(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : vu(t, n, r);
}
function wm(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class TN {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = M0(() => this.requestDraw()), this.controller = Lf({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: jt(Number((r == null ? void 0 : r.yaw) || 0)),
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
        `min-height:${Vs}px`,
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
          return Vs;
        },
        getHeight() {
          return Vs;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Tl(of(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Vs, Number(a.minHeight || 0)),
            minWidth: Math.max(IN, Number(a.minWidth || 0))
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
      return od(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ia({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = PN({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = Of(CN, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = Rg(n), t.addEventListener("pointerdown", (a) => {
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
      MN(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !_y(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return wm(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, g, w, x, M;
      const a = rN(this, n, r, o), l = t.getLegacyPreviewRect();
      if (!a || !wm(a.x, a.y, l))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((g = this.setDirtyCanvas) == null || g.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (x = n == null ? void 0 : n.stopPropagation) == null || x.call(n), (M = n == null ? void 0 : n.stopImmediatePropagation) == null || M.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, l;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - bu * 2), n = Math.max(60, Number(((l = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : l[1]) || 0) - gm - bu);
    return { x: bu, y: gm, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), _m(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? k0 : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = NN(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, l;
    const t = ON(this.node);
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
    const n = FN(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), _m(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, l, u, d, b, g, w, x, M, S, v, F, V;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (l = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || l.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (w = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || w.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (M = this.root) == null ? void 0 : M.remove) == null || S.call(M);
    } catch {
    }
    try {
      fy(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((V = (F = (v = this.node) == null ? void 0 : v.widgets) == null ? void 0 : F.find) == null ? void 0 : V.call(F, (G) => (G == null ? void 0 : G.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function DN(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new TN(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function wy(e, t, n) {
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
function fd(e) {
  return !!(e != null && e.prototype);
}
function es(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function LN(e, t = {}) {
  fd(e) || DN(e, {
    ...t,
    onOpen: es(e, t.onOpen)
  });
}
function RN(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!fd(e)) {
    mm(e, {
      ...r,
      onOpen: es(e, t.onOpen)
    });
    return;
  }
  wy(e, "stickers_node_preview", (o) => {
    mm(o, {
      ...r,
      onOpen: es(o, t.onOpen)
    });
  });
}
function $N(e, t = {}) {
  if (!fd(e)) {
    pm(e, {
      ...t,
      onOpen: es(e, t.onOpen)
    });
    return;
  }
  wy(e, "cutout_preview", (n) => {
    pm(n, {
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
}, Wr = "pen";
function xm(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function VN(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), l = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((w) => {
      r.push(String(w || ""));
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
      const b = r.length, g = Math.max(0, b - l), w = o >= 0 ? Math.max(0, Math.min(o, g)) : g, x = r.slice(w, w + l), M = o < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, o - w));
      return {
        version: 1,
        entries: x,
        index: M
      };
    },
    hydrate: u
  };
}
function ji(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function zN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function jN({
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
    historyEntries: Array.from({ length: 8 }, (O, $) => ({ index: $, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return g;
  const w = ((E = t.find((O) => o(e.paintColor, O.color))) == null ? void 0 : E.id) || "", x = !w, M = a(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((R = e.customPaintColor) == null ? void 0 : R.a) ?? 1))) * 100), v = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[v] ?? 10, V = d(), G = Array.from({ length: 8 }, (O, $) => e.customPaintHistory[$] || null);
  return {
    ...g,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: w,
    customColorActive: x,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...l(M.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    alphaValue: S,
    alphaText: `${S}%`,
    historyEntries: G.map((O, $) => ({
      index: $,
      color: O ? { cssColor: r(O, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: V,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function HN({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function GN({
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
function KN({
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
  isStickerHidden: w,
  canRestoreSelectedToInitial: x,
  iconSet: M
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let S = [];
  if (n.length > 1)
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!l },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!l },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!l }
    ];
  else if (r === "stroke")
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u }
    ];
  else if (e === "stickers" || r === "image") {
    if (S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!u }
    ], g(t) || (S.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), S.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), g(t)) {
      const $ = x(), H = w(t);
      S.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: $ ? "Back to initial position" : "Already at initial position",
        icon: M.back_initial,
        disabled: !$
      }), S.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: H ? "Show" : "Hide",
        tip: H ? "Show input image" : "Hide input image",
        icon: H ? M.eye : M.eye_dashed
      });
    }
    S.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed }), g(t) || S.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u });
  } else
    S = [
      {
        key: "aspect",
        kind: "aspect",
        icon: M.aspect,
        open: !!b,
        choices: ["1:1", "4:3", "3:2", "16:9"].map(($) => ({ value: $, label: $, active: d === $ }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: M.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u }
    ];
  const v = o.corners.map(($) => ({ x: Number($ == null ? void 0 : $.x), y: Number($ == null ? void 0 : $.y) })).filter(($) => Number.isFinite($.x) && Number.isFinite($.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = v.map(($) => $.x), V = v.map(($) => $.y), G = Math.min(...F), E = Math.max(...F), R = Math.min(...V), O = Math.max(...V);
  return {
    visible: !0,
    left: (G + E) * 0.5,
    top: O + 18,
    items: S,
    anchor: { minX: G, maxX: E, minY: R, maxY: O }
  };
}
const BN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function WN(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: l, playing: u, label: d, audio: b = null, fpsLocked: g = !1 }) {
  const w = (S, v, F, V, G) => {
    const E = (R) => (r == null ? void 0 : r.owner) === S && r.lane === R ? r.frames.map((O) => O + G) : [];
    return {
      id: S,
      label: F,
      clip: V,
      selected: S === o,
      open: l.has(S),
      keyed: Ux(v, t - G),
      keys: Wx(v).map((R) => ({ frame: R.frame + G, full: R.full })),
      selectedFrames: E(null),
      lanes: uo(v).map((R) => ({
        key: `${S}:${R}`,
        lane: R,
        label: BN[R],
        frames: v[R].keyframes.map((O) => O.frame + G),
        selectedFrames: E(R)
      }))
    };
  }, x = e.stickers.filter((S) => S.placement === "sky").sort((S, v) => v.z_index - S.z_index), M = e.stickers.filter((S) => S.placement === "world");
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
      w("camera", e.camera, "Camera", null, 0),
      ...[...x, ...M].map((S) => {
        const { start: v, in: F, duration: V } = S.clip;
        return w(S.id, S, p0(S), { start: v, end: V === null ? null : v + V }, v - F);
      })
    ]
  };
}
function UN(e, t, n, r) {
  const o = qx(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, l = Math.max(...n) + r;
  return { label: a === l ? `Frame ${a}` : `${a} – ${l}`, ...o };
}
const YN = { class: "pano-floating-right" }, XN = ["data-settled"], qN = ["data-ready", "data-settled"], JN = ["aria-label", "data-tip"], ZN = {
  key: 1,
  class: "pano-camera-preview-label"
}, QN = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), ce(Ye, null, [
      K("div", YN, [
        (oe(!0), ce(Ye, null, xt(e.buttons, (r) => ri((oe(), Vr(sn, {
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
      ri(K("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        K("div", {
          class: at(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: wt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = K("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            K("canvas", { "data-camera-preview-canvas": "" })
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
          ], 8, JN)) : ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (oe(), ce("div", ZN, rt(e.preview.label || "Preview unavailable"), 1)) : ct("", !0)
        ], 14, qN)
      ], 8, XN), [
        [ao, e.preview.visible]
      ])
    ], 64));
  }
}, e2 = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, t2 = ["y2", "transform"], n2 = ["transform"], r2 = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => ri((oe(), ce("div", {
      class: at(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (oe(), ce("svg", e2, [
        a[1] || (a[1] = K("circle", {
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
        }, null, 10, t2))), 128)),
        K("g", { transform: r.value }, [...a[0] || (a[0] = [
          K("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, n2),
        a[2] || (a[2] = K("circle", {
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
}, i2 = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), ce("div", {
      class: at(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(ay, {
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
      De(r2, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, o2 = ["aria-label"], a2 = { class: "pano-canvas-confirm-title" }, s2 = { class: "pano-canvas-confirm-text" }, l2 = { class: "pano-canvas-confirm-actions" }, c2 = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, u2 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Gt(null), r = /* @__PURE__ */ Gt(null);
    let o = null;
    function a() {
      const w = r.value;
      return w ? Array.from(w.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((x) => x instanceof HTMLElement ? !x.hidden && x.tabIndex >= 0 && x.offsetParent !== null : !1) : [];
    }
    function l(w) {
      const x = r.value;
      if (!x) return;
      const M = x.querySelector(`[data-action='${w}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function u() {
      var v;
      const w = r.value;
      if (!w) return;
      const x = w.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const S = a()[0] || w;
      (v = S == null ? void 0 : S.focus) == null || v.call(S);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(w) {
      var V;
      if (w.defaultPrevented) return;
      if (w.key === "Escape") {
        w.preventDefault(), w.stopPropagation(), l("confirm-cancel");
        return;
      }
      if (w.key !== "Tab") return;
      const x = a(), M = r.value;
      if (!x.length) {
        w.preventDefault(), (V = M == null ? void 0 : M.focus) == null || V.call(M);
        return;
      }
      const S = x[0], v = x[x.length - 1], F = document.activeElement;
      if (w.shiftKey) {
        (F === S || F === M || !(M != null && M.contains(F))) && (w.preventDefault(), v.focus());
        return;
      }
      (F === v || !(M != null && M.contains(F))) && (w.preventDefault(), S.focus());
    }
    function g(w) {
      w.target === n.value && l("confirm-cancel");
    }
    return Qi(() => t.model.visible, (w, x) => {
      if (w) {
        o = document.activeElement, Ul(() => {
          u();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), rs(() => {
      d();
    }), (w, x) => e.model.visible === !0 ? (oe(), ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: At(g, ["self"])
    }, [
      K("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        K("div", a2, rt(e.model.title), 1),
        K("div", s2, rt(e.model.text), 1),
        K("div", l2, [
          x[0] || (x[0] = K("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          K("button", c2, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, o2)
    ], 512)) : ct("", !0);
  }
}, f2 = ["data-paint-pane"], d2 = ["hidden"], h2 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], p2 = ["aria-pressed", "disabled"], m2 = ["hidden"], g2 = { class: "pano-paint-color-pop-head" }, y2 = { class: "pano-paint-color-field" }, b2 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, v2 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, _2 = { class: "pano-paint-color-field" }, w2 = { class: "pano-paint-alpha-wrap" }, x2 = ["value"], S2 = { "data-paint-alpha-value": "" }, k2 = ["hidden"], M2 = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, N2 = ["data-paint-history-index", "aria-label", "disabled"], P2 = ["data-paint-footer"], A2 = ["data-paint-group"], C2 = ["hidden"], I2 = ["value", "disabled"], E2 = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, O2 = ["hidden"], F2 = {
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
            }, null, 14, h2))), 128)),
            K("button", {
              class: at(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: wt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, p2),
            K("div", {
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
              K("div", g2, [
                K("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: wt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = K("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              K("div", y2, [
                K("div", b2, [
                  K("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: wt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                K("div", v2, [
                  K("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: wt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              K("label", _2, [
                o[1] || (o[1] = K("span", null, "Opacity", -1)),
                K("div", w2, [
                  K("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, x2),
                  K("span", S2, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              K("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                K("div", M2, [
                  (oe(!0), ce(Ye, null, xt(e.state.historyEntries || [], (u) => (oe(), ce("button", {
                    key: u.index,
                    class: at(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: wt(n(u.color))
                  }, null, 14, N2))), 128))
                ])
              ], 8, k2)
            ], 12, m2)
          ], 10, d2)) : ct("", !0),
          K("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            K("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (oe(!0), ce(Ye, null, xt(a.tools, (u) => {
                var d;
                return oe(), Vr(sn, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, A2),
            K("div", {
              class: at(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              K("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: wt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, I2),
              K("span", E2, rt(e.state.sizeText || "10"), 1)
            ], 10, C2),
            K("div", {
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
            ], 8, O2)
          ], 8, P2)
        ], 10, f2);
      }), 128))
    ], 2));
  }
}, T2 = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Gt(null), r = /* @__PURE__ */ Gt(null), o = /* @__PURE__ */ Gt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (l, u) => (oe(), ce(Ye, null, [
      K("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      K("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        K("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, D2 = {
  key: 0,
  class: "pano-cutout-menu"
}, L2 = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, R2 = ["data-aspect"], $2 = ["data-action", "aria-label", "data-tip", "disabled"], V2 = {
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
        r.kind === "aspect" ? (oe(), ce("div", D2, [
          K("button", L2, [
            De(Ct, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          K("div", {
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
            }, rt(o.label), 11, R2))), 128))
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
        ], 8, $2))
      ], 64))), 128))
    ], 4));
  }
}, z2 = {
  key: 0,
  class: "pano-easing"
}, j2 = { class: "pano-section-title" }, H2 = { class: "pano-easing-range" }, G2 = { class: "pano-easing-modes" }, K2 = ["aria-pressed", "onClick"], B2 = ["viewBox"], W2 = ["x", "y"], U2 = ["x1", "y1", "x2", "y2"], Y2 = ["d"], X2 = ["x1", "y1", "x2", "y2"], q2 = ["x1", "y1", "x2", "y2"], J2 = ["cx", "cy"], Z2 = ["cx", "cy"], Q2 = { class: "pano-easing-note" }, Ur = 132, Hi = 14, eP = {
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
    ], a = /* @__PURE__ */ Gt(null), l = ut(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), u = (S) => Hi + S * Ur, d = (S) => Hi + (1 - S) * Ur, b = ut(() => {
      var G;
      if (((G = n.model) == null ? void 0 : G.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [S, v, F, V] = l.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(S)} ${d(v)} ${u(F)} ${d(V)} ${u(1)} ${d(1)}`;
    }), g = ut(() => l.value ? l.value.map((S) => S.toFixed(2)).join(", ") : "");
    function w(S) {
      var v;
      return JSON.stringify(S.easing) === JSON.stringify((v = n.model) == null ? void 0 : v.easing);
    }
    function x(S, v) {
      r("timeline", { type: "easing", easing: S, commit: v });
    }
    function M(S, v) {
      var R;
      if (S.button !== 0 || !l.value) return;
      const F = S.currentTarget;
      (R = F.setPointerCapture) == null || R.call(F, S.pointerId);
      let V = null;
      const G = (O) => {
        const $ = a.value.getBoundingClientRect(), H = $.width / (Ur + Hi * 2), Q = ((O.clientX - $.left) / H - Hi) / Ur, _e = 1 - ((O.clientY - $.top) / H - Hi) / Ur;
        V = [...V || l.value], V[v] = Math.round(Math.min(1, Math.max(0, Q)) * 100) / 100, V[v + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, x(V, !1);
      }, E = () => {
        F.removeEventListener("pointermove", G), F.removeEventListener("pointerup", E), F.removeEventListener("pointercancel", E), V && x(V, !0);
      };
      F.addEventListener("pointermove", G), F.addEventListener("pointerup", E), F.addEventListener("pointercancel", E);
    }
    return (S, v) => e.model ? (oe(), ce("div", z2, [
      K("div", j2, [
        v[2] || (v[2] = K("span", null, "Easing", -1)),
        K("span", H2, rt(e.model.label), 1)
      ]),
      K("div", G2, [
        (oe(), ce(Ye, null, xt(o, (F) => K("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": w(F) ? "true" : "false",
          onClick: (V) => x(F.easing, !0)
        }, rt(F.label), 9, K2)), 64))
      ]),
      l.value || e.model.easing === "hold" ? (oe(), ce("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Ur + Hi * 2} ${Ur + Hi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        K("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: Ur,
          height: Ur
        }, null, 8, W2),
        K("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, U2),
        K("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, Y2),
        l.value ? (oe(), ce(Ye, { key: 0 }, [
          K("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(l.value[0]),
            y2: d(l.value[1])
          }, null, 8, X2),
          K("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(l.value[2]),
            y2: d(l.value[3])
          }, null, 8, q2),
          K("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[0]),
            cy: d(l.value[1]),
            r: "6",
            onPointerdown: v[0] || (v[0] = (F) => M(F, 0))
          }, null, 40, J2),
          K("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[2]),
            cy: d(l.value[3]),
            r: "6",
            onPointerdown: v[1] || (v[1] = (F) => M(F, 2))
          }, null, 40, Z2)
        ], 64)) : ct("", !0)
      ], 8, B2)) : ct("", !0),
      K("div", Q2, [
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
}, tP = {
  class: "pano-side",
  "data-side": ""
}, nP = { class: "pano-side-head" }, rP = { class: "pano-side-title" }, iP = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, oP = {
  key: 0,
  class: "pano-side-scroll"
}, aP = { class: "pano-inspector" }, sP = { class: "pano-ui-row pano-coverage-row" }, lP = ["data-selected"], cP = ["aria-pressed", "disabled"], uP = ["aria-pressed", "disabled"], fP = {
  key: 0,
  class: "pano-section-title"
}, dP = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, hP = {
  class: "pano-picker",
  "data-picker": "selection"
}, pP = ["disabled"], mP = { class: "pano-picker-label" }, gP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, yP = ["hidden"], bP = ["data-selection-id"], vP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, _P = {
  key: 2,
  class: "pano-state-actions"
}, wP = ["disabled"], xP = ["data-key"], SP = ["min", "max", "step", "value", "disabled", "data-param-key"], kP = ["min", "max", "step", "value", "disabled", "data-param-key"], MP = { class: "pano-visibility-section" }, NP = { class: "pano-visibility-stack" }, PP = ["data-visibility-row"], AP = { class: "pano-visibility-name" }, CP = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, IP = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], EP = ["open"], OP = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, FP = { class: "pano-ui-settings-body" }, TP = { class: "pano-ui-row" }, DP = ["data-selected"], LP = ["aria-pressed"], RP = ["aria-pressed"], $P = { class: "pano-ui-row" }, VP = ["data-selected"], zP = ["aria-pressed"], jP = ["aria-pressed"], HP = {
  key: 1,
  class: "pano-side-footer"
}, GP = ["data-action"], KP = {
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
      var b, g, w, x, M;
      return oe(), ce("div", tP, [
        K("div", nP, [
          K("div", rP, [
            K("span", iP, [
              De(Ct, {
                icon: Qe(Pe).globe
              }, null, 8, ["icon"])
            ]),
            K("span", null, rt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = K("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = K("div", { class: "pano-divider" }, null, -1)),
        o.value ? (oe(), ce("div", oP, [
          K("div", aP, [
            d[11] || (d[11] = K("div", { class: "pano-section-title" }, [
              K("span", null, "Scene")
            ], -1)),
            K("div", sP, [
              d[2] || (d[2] = K("label", null, "Coverage", -1)),
              K("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "1" : "0"
              }, [
                K("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 360 ? "true" : "false",
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "360", 8, cP),
                K("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((M = e.model.coverage) == null ? void 0 : M.disabled) === !0
                }, "180", 8, uP)
              ], 8, lP)
            ]),
            e.model.transformTitle !== !1 ? (oe(), ce("div", fP, [...d[3] || (d[3] = [
              K("span", null, "Transform", -1)
            ])])) : ct("", !0),
            e.model.selectionPicker ? (oe(), ce("div", dP, [
              K("label", null, rt(e.model.selectionPicker.label), 1),
              K("div", hP, [
                K("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  K("span", mP, [
                    e.model.selectionPicker.currentIcon ? (oe(), ce("span", gP, [
                      De(Ct, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    K("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = K("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, pP),
                K("div", {
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
                    S.icon ? (oe(), ce("span", vP, [
                      De(Ct, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    K("span", null, rt(S.label), 1)
                  ], 10, bP))), 128))
                ], 8, yP)
              ])
            ])) : ct("", !0),
            e.model.copyStateButton ? (oe(), ce("div", _P, [
              K("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(Ct, {
                  icon: Qe(Pe).copy
                }, null, 8, ["icon"]),
                K("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, wP)
            ])) : ct("", !0),
            K("div", {
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
                K("label", null, rt(S.label), 1),
                K("input", {
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
                }, null, 12, SP),
                K("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: l(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, kP)
              ], 8, xP))), 128))
            ], 2),
            De(eP, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (S) => r("timeline", S))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (oe(), ce(Ye, { key: 3 }, [
              d[6] || (d[6] = K("div", { class: "pano-divider" }, null, -1)),
              K("div", MP, [
                d[5] || (d[5] = K("div", { class: "pano-section-title" }, [
                  K("span", null, "Layers")
                ], -1)),
                K("div", NP, [
                  (oe(!0), ce(Ye, null, xt(e.model.visibilityRows, (S) => (oe(), ce("div", {
                    key: S.key,
                    class: at(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    K("span", AP, [
                      K("span", CP, [
                        De(Ct, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      K("span", null, rt(S.label), 1)
                    ]),
                    K("button", {
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
                    ], 10, IP)
                  ], 10, PP))), 128))
                ])
              ])
            ], 64)) : ct("", !0),
            e.model.uiSettings ? (oe(), ce("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              K("summary", null, [
                d[7] || (d[7] = K("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                K("span", OP, [
                  De(Ct, {
                    icon: Qe(Pe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              K("div", FP, [
                K("div", TP, [
                  d[8] || (d[8] = K("label", null, "Drag X", -1)),
                  K("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, LP),
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, RP)
                  ], 8, DP)
                ]),
                K("div", $P, [
                  d[9] || (d[9] = K("label", null, "Drag Y", -1)),
                  K("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, zP),
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, jP)
                  ], 8, VP)
                ]),
                d[10] || (d[10] = K("div", { class: "pano-ui-row" }, [
                  K("span"),
                  K("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, EP)) : ct("", !0)
          ])
        ])) : ct("", !0),
        (e.model.footerButtons || []).length ? (oe(), ce("div", HP, [
          (oe(!0), ce(Ye, null, xt(e.model.footerButtons, (S) => (oe(), ce("button", {
            key: S.action,
            class: at(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, rt(S.label), 11, GP))), 128))
        ])) : ct("", !0)
      ]);
    };
  }
}, BP = { class: "pano-timeline-bar" }, WP = ["aria-label", "data-tip"], UP = ["aria-label", "data-tip"], YP = { class: "pano-timeline-time" }, XP = ["data-tip"], qP = { key: 0 }, JP = ["value"], ZP = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, QP = ["value"], eA = ["aria-expanded"], tA = ["inert"], nA = { class: "pano-timeline-name" }, rA = ["aria-expanded", "aria-label", "onClick"], iA = ["title", "aria-current", "onClick"], oA = ["data-keyed", "aria-label", "onClick"], aA = ["onPointerdown"], sA = ["onPointerdown"], lA = ["onPointerdown"], cA = ["onPointerdown"], uA = ["aria-label", "data-tip", "onPointerdown"], fA = { key: 0 }, dA = ["onPointerdown"], hA = ["aria-label", "data-tip", "onPointerdown"], pA = { key: 0 }, mA = 10, gA = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Gt(null), l = /* @__PURE__ */ Gt(null), u = /* @__PURE__ */ Gt(1), d = /* @__PURE__ */ Gt(0), b = /* @__PURE__ */ Gt(!1);
    let g = null, w = null, x = null;
    Xl(() => {
      g = new ResizeObserver(([U]) => {
        u.value = Math.max(1, U.contentRect.width);
      }), a.value && g.observe(a.value), w = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), l.value && w.observe(l.value);
    }), rs(() => {
      g == null || g.disconnect(), w == null || w.disconnect(), x == null || x();
    });
    const M = ut(() => Math.max(1, Number(n.model.span || 1))), S = ut(() => u.value / M.value), v = (U) => `${U / M.value * 100}%`, F = ut(() => {
      const U = o.find((j) => j * S.value >= 56) || o[o.length - 1], X = [];
      for (let j = 0; j < M.value; j += U) X.push(j);
      return X;
    });
    function V(U) {
      const X = a.value.getBoundingClientRect(), j = Math.floor((U - X.left) / Math.max(1, X.width) * M.value);
      return Math.min(M.value - 1, Math.max(0, j));
    }
    function G(U, X, j) {
      const N = Math.ceil(mA / Math.max(1e-6, S.value)), ee = new Map(X.map((Y) => [Y.frame, Y.full]));
      return tS(X.map((Y) => Y.frame), N).map((Y, Ie) => ({
        ...Y,
        key: `${U}:${Ie}`,
        partial: Y.frames.some((Fe) => !ee.get(Fe)),
        selected: Y.frames.some((Fe) => j.includes(Fe))
      }));
    }
    function E(U) {
      return G(U.id, U.keys, U.selectedFrames);
    }
    function R(U) {
      return G(U.key, U.frames.map((X) => ({ frame: X, full: !0 })), U.selectedFrames);
    }
    function O(U) {
      const X = U.end === null ? M.value : U.end;
      return { left: v(U.start), width: v(Math.max(0, X - U.start)) };
    }
    function $(U, X) {
      const j = U.clientX, N = Math.max(1e-6, S.value);
      let ee = 0;
      X("start", 0, U);
      const Y = (Fe) => {
        if (Fe.pointerId !== U.pointerId) return;
        const St = Math.round((Fe.clientX - j) / N);
        St !== ee && (ee = St, X("move", ee, Fe));
      }, Ie = (Fe) => {
        Fe.pointerId === U.pointerId && (x(), X("end", ee, Fe));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", Y), window.removeEventListener("pointerup", Ie), window.removeEventListener("pointercancel", Ie), x = null;
      }, window.addEventListener("pointermove", Y), window.addEventListener("pointerup", Ie), window.addEventListener("pointercancel", Ie);
    }
    function H(U) {
      U.button === 0 && $(U, (X, j, N) => r("action", { type: "seek", frame: V(N.clientX), phase: X }));
    }
    function Q(U, X, j) {
      U.button === 0 && (r("action", { type: "select-row", id: X.id }), $(U, (N, ee) => r("action", { type: "clip", id: X.id, mode: j, delta: ee, phase: N })));
    }
    function _e(U, X, j, N, ee) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: j, frames: N.frames, additive: !0 });
          return;
        }
        N.frames.every((Y) => ee.includes(Y)) || r("action", { type: "select-keys", owner: X.id, lane: j, frames: N.frames, additive: !1 }), $(U, (Y, Ie) => r("action", { type: "move-keys", delta: Ie, phase: Y }));
      }
    }
    const T = ut(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function I(U, X, j) {
      r("action", X), await Ul(), U.target.value = j();
    }
    function se(U) {
      I(U, { type: "fps", fps: Number(U.target.value) }, () => T.value);
    }
    function le(U) {
      const X = U.target.value.trim();
      I(U, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function ue(U, X, j) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: j, frames: [], additive: !1 });
    }
    return (U, X) => ri((oe(), ce("section", {
      class: at(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      K("div", BP, [
        K("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (j) => r("action", { type: "play" }))
        }, [
          De(Ct, {
            icon: e.model.playing ? Qe(Pe).pause : Qe(Pe).play
          }, null, 8, ["icon"])
        ], 8, WP),
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
        ], 8, UP)) : ct("", !0),
        K("span", YP, rt(e.model.label), 1),
        K("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (oe(), ce("span", qP, rt(T.value), 1)) : (oe(), ce("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: T.value,
            "aria-label": "Timeline fps",
            onChange: se
          }, null, 40, JP)),
          X[6] || (X[6] = K("span", null, "fps", -1))
        ], 8, XP),
        K("label", ZP, [
          X[7] || (X[7] = K("span", null, "Length", -1)),
          K("input", {
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: le
          }, null, 40, QP)
        ]),
        K("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (j) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = K("span", null, "Timeline", -1)),
          De(Ct, {
            icon: Qe(Pe).chevron
          }, null, 8, ["icon"])
        ], 8, eA)
      ]),
      K("div", {
        class: at(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: wt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = At((j) => b.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = At((j) => b.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = At((j) => b.value = !1, ["self"]))
      }, [
        K("div", {
          ref_key: "gridRef",
          ref: l,
          class: "pano-timeline-grid"
        }, [
          X[9] || (X[9] = K("div", { class: "pano-timeline-corner" }, null, -1)),
          K("div", {
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
            K("span", {
              class: "pano-timeline-playhead",
              style: wt({ left: v(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (oe(!0), ce(Ye, null, xt(e.model.rows || [], (j) => (oe(), ce(Ye, {
            key: j.id
          }, [
            K("div", {
              class: at(["pano-timeline-head", { selected: j.selected }])
            }, [
              K("div", nA, [
                K("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": j.open ? "true" : "false",
                  "aria-label": j.open ? `Hide ${j.label} parameters` : `Show ${j.label} parameters`,
                  onClick: At((N) => r("action", { type: "toggle-row", id: j.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Pe).chevron
                  }, null, 8, ["icon"])
                ], 8, rA),
                K("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: j.label,
                  "aria-current": j.selected ? "true" : void 0,
                  onClick: (N) => r("action", { type: "select-row", id: j.id })
                }, [
                  De(Ct, {
                    icon: j.clip ? Qe(Pe).image : Qe(Pe).camera
                  }, null, 8, ["icon"]),
                  K("span", null, rt(j.label), 1)
                ], 8, iA),
                K("button", {
                  class: at(["pano-timeline-key", { keyed: j.keyed }]),
                  type: "button",
                  "data-keyed": j.keyed ? "true" : "false",
                  "aria-label": j.keyed ? `Every ${j.label} parameter has a keyframe here; update them` : `Add keyframes for every ${j.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: At((N) => r("action", { type: "key-row", owner: j.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Pe).keyframe
                  }, null, 8, ["icon"])
                ], 10, oA)
              ]),
              j.open ? (oe(!0), ce(Ye, { key: 0 }, xt(j.lanes, (N) => (oe(), ce("div", {
                key: N.key,
                class: "pano-timeline-lane-head"
              }, rt(N.label), 1))), 128)) : ct("", !0)
            ], 2),
            K("div", {
              class: at(["pano-timeline-track", { selected: j.selected }])
            }, [
              K("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (N) => ue(N, j, null)
              }, [
                j.clip ? (oe(), ce("div", {
                  key: 0,
                  class: at(["pano-timeline-clip", { open: j.clip.end === null }]),
                  style: wt(O(j.clip)),
                  onPointerdown: At((N) => Q(N, j, "move"), ["stop"])
                }, [
                  K("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: At((N) => Q(N, j, "start"), ["stop"])
                  }, null, 40, lA),
                  K("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: At((N) => Q(N, j, "end"), ["stop"])
                  }, null, 40, cA)
                ], 46, sA)) : ct("", !0),
                (oe(!0), ce(Ye, null, xt(E(j), (N) => (oe(), ce("button", {
                  key: N.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: N.selected, cluster: N.frames.length > 1, partial: N.partial }]),
                  style: wt({ left: v(N.frame + 0.5) }),
                  "aria-label": `${j.label}: ${N.frames.length > 1 ? `${N.frames.length} keyframes` : `keyframe at frame ${N.frames[0]}`}`,
                  "data-tip": N.frames.length > 1 ? `${N.frames.length} keyframes` : `Frame ${N.frames[0]}`,
                  onPointerdown: At((ee) => _e(ee, j, null, N, j.selectedFrames), ["stop"])
                }, [
                  N.frames.length > 1 ? (oe(), ce("span", fA, rt(N.frames.length), 1)) : ct("", !0)
                ], 46, uA))), 128))
              ], 40, aA),
              j.open ? (oe(!0), ce(Ye, { key: 0 }, xt(j.lanes, (N) => (oe(), ce("div", {
                key: N.key,
                class: "pano-timeline-lane",
                onPointerdown: (ee) => ue(ee, j, N.lane)
              }, [
                (oe(!0), ce(Ye, null, xt(R(N), (ee) => (oe(), ce("button", {
                  key: ee.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: ee.selected, cluster: ee.frames.length > 1 }]),
                  style: wt({ left: v(ee.frame + 0.5) }),
                  "aria-label": `${N.label}: ${ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `keyframe at frame ${ee.frames[0]}`}`,
                  "data-tip": ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `Frame ${ee.frames[0]}`,
                  onPointerdown: At((Y) => _e(Y, j, N.lane, ee, N.selectedFrames), ["stop"])
                }, [
                  ee.frames.length > 1 ? (oe(), ce("span", pA, rt(ee.frames.length), 1)) : ct("", !0)
                ], 46, hA))), 128))
              ], 40, dA))), 128)) : ct("", !0),
              K("span", {
                class: "pano-timeline-playhead",
                style: wt({ left: v(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, tA)
    ], 2)), [
      [ao, e.model.visible]
    ]);
  }
}, yA = {
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
}, bA = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, vA = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (oe(), ce("div", bA, [
      (oe(!0), ce(Ye, null, xt(e.buttons, (r) => ri((oe(), Vr(sn, {
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
}, _A = ["data-video-ready"], wA = { class: "pano-video-transport-shell" }, xA = { class: "pano-video-controls-left" }, SA = { class: "pano-video-filmstrip" }, kA = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, MA = ["src", "onLoad"], NA = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, PA = ["max", "value", "disabled"], AA = { class: "pano-video-controls-right" }, CA = ["data-has-audio"], IA = { class: "pano-video-volume-pop" }, EA = ["value", "disabled"], OA = {
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
      var O, $;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = ut(() => {
      var O, $, H;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? Pe.volume : (($ = t.state) == null ? void 0 : $.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? Pe.volume_muted : Pe.volume2;
    }), g = ut(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), w = ut(() => ({ left: `${g.value}%` })), x = ut(() => {
      var Q, _e;
      const O = (Q = t.state) == null ? void 0 : Q.volumePct, $ = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, H = Number(O ?? $ ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, H))}%`
      };
    }), M = ut(() => {
      var H, Q;
      const $ = [
        String(((H = t.state) == null ? void 0 : H.currentTimeLabel) || "0:00"),
        String(((Q = t.state) == null ? void 0 : Q.durationLabel) || "0:00")
      ].reduce((_e, T) => Math.max(_e, T.length), 4);
      return `${Math.max(4, $)}ch`;
    }), S = ut(() => ({ "--pano-video-time-ch": M.value })), v = ut(() => {
      var H, Q;
      const O = Array.isArray((H = t.state) == null ? void 0 : H.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const $ = Math.max(7, Number(((Q = t.state) == null ? void 0 : Q.thumbnailCount) || 9));
      return Array.from({ length: $ }, (_e, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ Gt(/* @__PURE__ */ new Set()), V = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), G = (O) => F.value.has(V(O)), E = (O) => {
      const $ = new Set(F.value);
      $.add(V(O)), F.value = $;
    };
    Qi(v, (O) => {
      const $ = new Set(O.map(V)), H = /* @__PURE__ */ new Set();
      for (const Q of F.value)
        $.has(Q) && H.add(Q);
      F.value = H;
    }, { immediate: !0 });
    const R = ut(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, $) => (oe(), ce("div", {
      class: at(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: wt(R.value)
    }, [
      $[1] || ($[1] = K("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      $[2] || ($[2] = K("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      K("div", wA, [
        K("div", xA, [
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
          K("div", {
            class: "pano-video-time pano-video-time-start",
            style: wt(S.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        K("div", SA, [
          K("div", kA, [
            (oe(!0), ce(Ye, null, xt(v.value, (H) => (oe(), ce("div", {
              key: V(H),
              class: at(["pano-video-thumb", {
                "is-placeholder": !H.src,
                "is-loaded": H.src && G(H)
              }])
            }, [
              H.src ? (oe(), ce("img", {
                key: 0,
                src: H.src,
                alt: "",
                draggable: "false",
                onLoad: (Q) => E(H)
              }, null, 40, MA)) : (oe(), ce("span", NA))
            ], 2))), 128))
          ]),
          K("div", {
            class: "pano-video-playhead",
            style: wt(w.value),
            "aria-hidden": "true"
          }, [...$[0] || ($[0] = [
            K("span", { class: "pano-video-playhead-line" }, null, -1),
            K("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          K("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, PA)
        ]),
        K("div", AA, [
          K("div", {
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
          K("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            K("div", IA, [
              K("input", {
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
              }, null, 12, EA)
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
          ], 8, CA)
        ])
      ])
    ], 14, _A));
  }
}, FA = { class: "pano-floating-top" }, TA = ["data-selected", "data-view-count"], DA = ["data-view", "aria-pressed", "aria-label", "disabled"], LA = { class: "label" }, RA = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return oe(), ce("div", FA, [
        K("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (oe(!0), ce(Ye, null, xt(e.buttons, (o) => ri((oe(), ce("button", {
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
            K("span", LA, rt(o.label), 1)
          ], 10, DA)), [
            [ao, o.visible !== !1]
          ])), 128))
        ], 8, TA)
      ]);
    };
  }
};
function xy(e = "stickers") {
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
      // Shown only while the panorama view is in space (#71).
      ...t ? [] : [{ action: "frame-view", label: "Frame Content", tip: "Frame content", pressed: null, icon: Pe.focus, visible: !1 }],
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
const $A = ["aria-label"], VA = { class: "pano-stage-column" }, zA = { class: "pano-stage-wrap" }, jA = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, HA = {
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
    const d = /* @__PURE__ */ Gt(null), b = /* @__PURE__ */ Gt(null), g = /* @__PURE__ */ Gt(null);
    function w() {
      var T, I;
      return ((I = (T = g.value) == null ? void 0 : T.getRefs) == null ? void 0 : I.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(T) {
      var I, se;
      return ((se = (I = b.value) == null ? void 0 : I.open) == null ? void 0 : se.call(I, T)) === !0;
    }
    function M(T) {
      o("image-file-selected", T);
    }
    function S(T) {
      o("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: w, openImagePicker: x });
    const v = ut(() => r.readOnly === !0), F = ut(() => r.shellPreset || xy(r.type)), V = ut(() => {
      var I, se, le;
      const T = String((((I = r.uiState) == null ? void 0 : I.stageStatus) === "failed" ? (se = r.uiState) == null ? void 0 : se.stageStatusDetail : (le = r.uiState) == null ? void 0 : le.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), G = ut(() => {
      var I;
      const T = Array.isArray((I = F.value) == null ? void 0 : I.floatingButtons) ? F.value.floatingButtons.slice() : [];
      return v.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Pe.fullscreen
      }), T;
    });
    function E() {
      const T = d.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((I) => I instanceof HTMLElement ? !I.hidden && I.tabIndex >= 0 && I.offsetParent !== null : !1) : [];
    }
    function R() {
      var se;
      const I = E()[0] || d.value;
      (se = I == null ? void 0 : I.focus) == null || se.call(I);
    }
    function O() {
      var T;
      u != null && u.isConnected && ((T = u.focus) == null || T.call(u)), u = null;
    }
    function $(T) {
      var I, se, le, ue;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const U = E();
          if (!U.length) {
            T.preventDefault(), (se = (I = d.value) == null ? void 0 : I.focus) == null || se.call(I);
            return;
          }
          const X = U[0], j = U[U.length - 1], N = document.activeElement;
          if (T.shiftKey) {
            (N === X || N === d.value || !((le = d.value) != null && le.contains(N))) && (T.preventDefault(), j.focus());
            return;
          }
          (N === j || !((ue = d.value) != null && ue.contains(N))) && (T.preventDefault(), X.focus());
          return;
        }
        T.key === "Escape" && o("close");
      }
    }
    function H() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function Q() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function _e(T) {
      document.removeEventListener("keydown", $), T ? (u || (u = document.activeElement), H(), document.addEventListener("keydown", $), Ul(() => {
        R();
      })) : (Q(), O());
    }
    return Xl(() => {
      _e(r.open);
    }), rs(() => {
      Q(), document.removeEventListener("keydown", $), O();
    }), Qi(() => r.open, (T) => {
      _e(T);
    }), (T, I) => e.open ? (oe(), ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: I[2] || (I[2] = At((se) => o("close"), ["self"]))
    }, [
      K("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        K("div", VA, [
          K("div", zA, [
            I[3] || (I[3] = K("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            I[4] || (I[4] = K("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            I[5] || (I[5] = K("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (oe(), ce("div", jA, rt(V.value), 1)) : ct("", !0),
            I[6] || (I[6] = K("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              K("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(T2, {
              ref_key: "paintOverlaysRef",
              ref: g
            }, null, 512),
            De(sy, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: M,
              onFileCancelled: S
            }, null, 512),
            v.value ? ct("", !0) : (oe(), ce(Ye, { key: 1 }, [
              De(vA, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De(i2, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(F2, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(OA, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(RA, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || []
            }, null, 8, ["buttons"]),
            De(QN, {
              buttons: e.uiState.floatingButtons || G.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            De(V2, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(yA, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(u2, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De(gA, {
            model: e.uiState.timeline || {},
            onAction: I[0] || (I[0] = (se) => o("timeline", se))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ct("", !0) : (oe(), Vr(KP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: I[1] || (I[1] = (se) => o("timeline", se))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, $A)
    ])) : ct("", !0);
  }
}, pr = "loading", ra = "ready", tr = "failed";
function Sy(e, t = "") {
  return e && (e.__panoLoadState = pr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ky(e, t = "") {
  return e && (e.__panoLoadState = ra, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function My(e, t = "") {
  return e && (e.__panoLoadState = tr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function hf(e, t) {
  return e ? e.__panoLoadState === tr ? tr : typeof t == "function" && t(e) ? ra : pr : ra;
}
function pf(e) {
  return hf(e) === tr;
}
function GA({ presented: e, background: t = ra, stickers: n = [] } = {}) {
  if (!e) return { status: pr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === pr, a = r.includes(pr);
  if (o && a) return { status: pr, detail: "mixed" };
  if (o) return { status: pr, detail: "background" };
  if (a) return { status: pr, detail: "stickers" };
  const l = t === tr, u = r.includes(tr);
  return l && u ? { status: tr, detail: "mixed" } : l ? { status: tr, detail: "background" } : u ? { status: tr, detail: "stickers" } : { status: ra, detail: "" };
}
const KA = "state_json", BA = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), _u = "sticker_image_1", WA = "external_image", zs = "pano_sticker_input_images", UA = "pano_sticker_input_videos", YA = "pano_sticker_input_frames", XA = "pano_sticker_input_video_meta", qA = !0, ll = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Sr = Math.PI / 180, Yi = 180 / Math.PI, wu = 1, JA = "rgb(255, 221, 87)", ZA = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, QA = 64, Sm = 40, xu = 16, eC = 0.45, km = 180, tC = 160, Vl = 24, nC = 4, rC = 4, js = /* @__PURE__ */ new Map(), Mm = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new Map(), iC = 12, Kn = D0({
  app: Or,
  api: Ht,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: pf,
    markImageFailed: My,
    markImageLoading: Sy,
    markImageReady: ky
  }
});
function Su(e) {
  if (!Pn(e, "background") || !Pn(e, "external-sticker")) return null;
  const t = Kn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const oC = Kn.assetSource, Hs = Kn.source, ku = Kn.uiImage, aC = Kn.invalidateUiImage, sC = Kn.resolvePreferredExactLinkedSource, Mu = Kn.loadPreferredExactLinkedImage;
function Gs(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function lC(e) {
  return 1 - Math.pow(1 - e, 3);
}
function cC(e, t, n) {
  const r = J((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function uC(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Si.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Si.delete(t), Si.set(t, n), n);
}
function fC(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Si.delete(n), Si.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Si.size > iC; ) {
      const o = Si.keys().next().value;
      if (!o) break;
      Si.delete(o);
    }
}
function dC(e) {
  return e * e * e;
}
function nc(e, t, n) {
  return { x: e, y: t, z: n };
}
function Nm(e, t) {
  return nc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Pm(e, t) {
  return nc(e.x * t, e.y * t, e.z * t);
}
function Nu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function hC(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return nc(e.x / t, e.y / t, e.z / t);
}
function Ks(e) {
  return {
    yaw: jt(Math.atan2(e.x, e.z) * Yi),
    pitch: J(Math.asin(J(e.y, -1, 1)) * Yi, -90, 90)
  };
}
function Yr(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, l = t[r].y, u = t[o].x, d = t[o].y;
    l > e.y != d > e.y && e.x < (u - a) * (e.y - l) / (d - l || 1e-6) + a && (n = !n);
  }
  return n;
}
function vi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Pu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), l = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return vi(e, t);
  const d = J((a * r + l * o) / u, 0, 1), b = Number(t.x || 0) + r * d, g = Number(t.y || 0) + o * d, w = Number(e.x || 0) - b, x = Number(e.y || 0) - g;
  return w * w + x * x;
}
function Qn(e, t, n) {
  return e + (t - e) * n;
}
function kr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${J(n, 0, 1)})`;
}
function pC(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Bs = { fillStyle: "", url: "" };
function mC(e, t, n) {
  if (Bs.url && Bs.fillStyle === String(e || ""))
    return Bs.url;
  const r = pC(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Vl}" height="${Vl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Bs = { fillStyle: String(e || ""), url: r }, r;
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
function gC(e) {
  return ll.some((t) => cl(e, t.color));
}
function Au(e, t, n) {
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
function Cu(e) {
  const t = J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), l = o - a;
  let u = 0;
  l > 1e-6 && (o === t ? u = ((n - r) / l + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / l + 2) / 6 : u = ((t - n) / l + 4) / 6);
  const d = o <= 1e-6 ? 0 : l / o;
  return { h: u, s: d, v: o };
}
function Oo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const Ny = "pano_suite.ui_settings.v1", Py = "pano_suite.node_grid_visibility.v1";
let Vo = null, Mr = null;
function ul(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function yC() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ny)) || "").trim();
    if (!t) return Vo ? ul(Vo) : null;
    const n = JSON.parse(t), r = ul(n);
    return Vo = r, r;
  } catch {
    return Vo ? ul(Vo) : null;
  }
}
function bC(e) {
  var n;
  const t = ul(e);
  Vo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Ny, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Ay() {
  var e;
  if (Mr && typeof Mr == "object")
    return Mr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Py)) || "").trim();
    if (!t)
      return Mr = {}, Mr;
    const n = JSON.parse(t);
    return Mr = n && typeof n == "object" ? n : {}, Mr;
  } catch {
    return Mr = {}, Mr;
  }
}
function vC(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = Ay()[n];
  return typeof o == "boolean" ? o : !!t;
}
function _C(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = Ay();
  r[n] = !!t, Mr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(Py, JSON.stringify(r));
  } catch {
  }
}
function wC(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Am(e) {
  const { paintCount: t, maskCount: n } = wC(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Fo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ws(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function xC(e, t) {
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
function SC(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function kC(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function MC(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function NC(e, t, n = {}) {
  var zh;
  await uy(e, { tolerateOperationFailure: !0 }), Kn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, l = xC(e, t);
  await od();
  const u = Ws(e, "output_preset"), d = Ws(e, "coverage"), b = Ws(e, "bg_color"), g = Ws(e, KA), w = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Mu(
      e,
      i,
      () => de(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = w();
    return MC(i);
  }, M = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return kC(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : SC(s, i);
  }, S = t === "stickers" && e.__panoSceneStateV2 === !0, v = (S ? u0 : c0)(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Gn(d == null ? void 0 : d.value),
    sharedUiSettings: yC(),
    active: m0(e),
    fps: S ? Su(e) : null
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var c;
    const i = Array.isArray(v.shots) ? v.shots : [], s = String(((c = v == null ? void 0 : v.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, V = F ? Wd(F, !1) : { width: 220, height: 132 }, G = xy(t), E = /* @__PURE__ */ ia({
    stageStatus: pr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (G.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (G.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(G.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
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
      customColorCss: kr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: kr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: V.width,
      height: V.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), R = document.createElement("div");
  document.body.appendChild(R);
  const O = ({ intent: i, file: s } = {}) => {
    if (Er(s)) {
      if (i === "add") {
        sh(s);
        return;
      }
      i === "replace" && I1(s);
    }
  }, $ = ({ intent: i } = {}) => {
  }, H = Of(HA, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: l,
    shellPreset: G,
    paintSwatches: ll.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: kr(i.color, 1)
    })),
    uiState: E,
    onClose: () => {
      Ao();
    },
    onTimeline: (i) => N1(i),
    onImageFileSelected: O,
    onImageFileCancelled: $
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
  const _e = R.querySelector(".pano-modal-overlay"), T = R.querySelector(".pano-modal"), I = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), se = T == null ? void 0 : T.querySelector("[data-stage-background]"), le = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), ue = ((zh = Q == null ? void 0 : Q.getPaintOverlayRefs) == null ? void 0 : zh.call(Q)) || {}, U = ue.cursor || null, X = ue.sizePreview || null, j = ue.sizeSample || null;
  if (!_e || !T || !I || !se || !le || !U || !X || !j)
    throw H.unmount(), R.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const N = I.getContext("2d"), ee = T.querySelector("[data-side]"), Y = T.querySelector("[data-video-element]"), Ie = T.querySelector("[data-port-video-element]"), Fe = T.querySelector(".pano-floating-right"), St = T.querySelector(".pano-floating-top"), pt = T.querySelector("[data-tool-rail]"), ln = T.querySelector("[data-frame-rail]"), it = T.querySelector("[data-frame-roll-knob]"), Yn = T.querySelector("[data-paint-dock]"), It = T.querySelector(".pano-video-transport"), Qt = T.querySelector("[data-selection-menu]"), cn = T.querySelector("[data-tooltip]"), ci = T.querySelector("[data-camera-preview-host]"), L = T.querySelector("[data-camera-preview-canvas]"), B = T.querySelector("[data-paint-color-row]"), q = T.querySelector("[data-paint-color-pop]"), be = T.querySelector("[data-paint-color-sv]"), me = T.querySelector("[data-paint-color-sv-cursor]"), ge = T.querySelector("[data-paint-hue-strip]"), Me = T.querySelector("[data-paint-hue-handle]");
  let Ne = 0, xe = 0;
  le == null || le.removeAttribute("data-stage-ready"), le == null || le.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", se.style.opacity = "0", o && (ee == null || ee.remove(), T.classList.add("pano-modal-readonly"));
  const fe = () => {
    if (!p.customPaintSessionStart) return;
    if (cl(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (gC(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      Hn(p.customPaintColor),
      ...p.customPaintHistory.filter((s) => !cl(s, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, $e = (i = !1) => {
    !q || q.hidden || (i ? fe() : p.customPaintSessionStart = null, q.hidden = !0, E.paintDock.colorPopOpen = !1);
  }, Ee = () => {
    q && (q.hidden && (p.customPaintSessionStart = Hn(p.customPaintColor)), q.hidden = !1, E.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Ti(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((c) => {
      c.hidden = !0;
    }), $e(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Xe(), de()), (s = E.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (E.frameRail.aspectOpen = !1)));
  });
  const Ve = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, Ke = JSON.stringify(Lp(v)), p = {
    mode: "pano",
    selectedId: Ve,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: qi,
    viewMoved: !1,
    coverage: Gn(v.coverage),
    historyController: VN(80, { entries: [Ke], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Wr,
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
    showGrid: vC(e == null ? void 0 : e.id, !0),
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
    paintEngine: ju(),
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
  const Be = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), $t = document.createElement("canvas");
  $t.__panoFrameIdx = 0;
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
  }, Bt = BS({
    onReady: () => de(),
    onFailed: () => de(),
    onUpdate: () => {
      Ce.backgroundDirty = !0, de({ localOnly: !0 });
    }
  });
  let zr = { key: "", projection: null }, yr = { key: null, sceneState: null }, fo = null, ho = null, z = null;
  const ve = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, ke = (i) => {
    const s = String(i || "default");
    I.style.cursor !== s && (I.style.cursor = s);
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
    var A, C;
    const i = (A = le == null ? void 0 : le.getBoundingClientRect) == null ? void 0 : A.call(le), s = (C = Fe == null ? void 0 : Fe.getBoundingClientRect) == null ? void 0 : C.call(Fe), c = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, y = f > 0 ? f + 14 + 12 : 72, _ = Math.max(280, Math.floor(c - y * 2)), k = p.fullscreen ? Math.min(1200, _) : _;
    E.videoTransport.shellMaxWidthPx = k;
  }, Yt = () => {
    Dt || (Dt = window.requestAnimationFrame(() => {
      Dt = 0, or();
    }));
  }, Ci = (i) => {
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
  }, xn = typeof ResizeObserver < "u" ? new ResizeObserver(() => Yt()) : null;
  xn == null || xn.observe(le), Fe && (xn == null || xn.observe(Fe)), gt.push(() => {
    var i;
    Dt && (window.cancelAnimationFrame(Dt), Dt = 0), (i = xn == null ? void 0 : xn.disconnect) == null || i.call(xn);
  }), Yt();
  const br = () => {
    Ae.thumbnailJobId += 1, Ae.thumbnailSrc = "", E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = Ze;
  }, Cn = async (i, s, c) => {
    const f = String(i || "").trim();
    if (!f) {
      br();
      return;
    }
    const h = uC(f);
    if (h) {
      Ae.thumbnailSrc = f, E.videoTransport.thumbnails = h.thumbnails, E.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    const m = ++Ae.thumbnailJobId;
    Ae.thumbnailSrc = f, E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = Ze;
    const y = document.createElement("video");
    y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous";
    const _ = await new Promise((ae) => {
      let he = !1;
      const re = (Se) => {
        he || (he = !0, ae(Se));
      };
      y.addEventListener("loadedmetadata", () => re(!0), { once: !0 }), y.addEventListener("canplay", () => re(!0), { once: !0 }), y.addEventListener("error", () => re(!1), { once: !0 }), y.src = f, y.load();
    });
    if (Ae.thumbnailJobId !== m) return;
    const k = Number(y.videoWidth || 0), A = Number(y.videoHeight || 0);
    if (!_ || k < 1 || A < 1) {
      Ae.thumbnailFailedSrcs.add(f);
      return;
    }
    const C = Math.max(0, Number(y.duration || s || 0)), P = document.createElement("canvas"), D = 46, W = Math.max(72, Math.round(k / A * D));
    P.width = W, P.height = D;
    const ne = P.getContext("2d");
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
      const he = ae / (Ze - 1), re = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(c || 24))), C * he)) : 0;
      if (await te(re), Ae.thumbnailJobId !== m) return;
      ne.clearRect(0, 0, W, D), ne.drawImage(y, 0, 0, W, D), Z.push({
        id: `thumb-${ae}`,
        src: P.toDataURL("image/jpeg", 0.72),
        time: re,
        label: pc(re)
      });
    }
    Ae.thumbnailJobId === m && (E.videoTransport.thumbnails = Z, E.videoTransport.thumbnailCount = Z.length || Ze, fC(f, {
      thumbnails: Z,
      thumbnailCount: Z.length || Ze,
      duration: C,
      fps: c
    }));
  };
  gt.push(() => {
    br();
  });
  const kt = q0({
    video: Y instanceof HTMLVideoElement ? Y : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: hs,
    span: () => {
      if (S) return Ec();
      const i = Math.round(Number(E.videoTransport.duration || 0) * hs());
      return Y.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => S,
    onFrame: (i) => {
      S ? w1(i) : fi(), de({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      Zy() && (Ce.backgroundDirty = !0);
    },
    onChange: () => {
      fi(), Kr(), de({ cause: "frame_view", localOnly: !0 });
    }
  });
  gt.push(() => kt.dispose());
  const ar = S && Ie instanceof HTMLVideoElement ? J0({
    video: Ie,
    onCapture: () => {
      var c;
      const i = Number(Ie.videoWidth || 0), s = Number(Ie.videoHeight || 0);
      i < 1 || s < 1 || (Xn.width = i, Xn.height = s, (c = Xn.getContext("2d")) == null || c.drawImage(Ie, 0, 0), Xn.__panoFrameIdx += 1, de({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => de({ cause: "frame_view", localOnly: !0 })
  }) : null;
  ar && gt.push(() => ar.dispose());
  const as = S ? V0({
    createImage: (i, s) => {
      const c = new Image();
      return c.onload = s, c.onerror = s, c.src = i, c;
    },
    onLoad: () => de({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Y instanceof HTMLVideoElement) {
    const i = () => {
      di(), de({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      fi({
        hasAudio: E.videoTransport.hasAudio,
        muted: Y.muted,
        volume: Number(Y.volume ?? E.videoTransport.volume ?? 1)
      });
    }, c = () => {
      const f = Y.dataset.panoSrc;
      f && (Ae.failedSrcs.add(f), di(), de());
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
  function Vn(i) {
    return sd(i == null ? void 0 : i.dataTransfer);
  }
  function vr(i) {
    const s = !!i;
    je.active !== s && (je.active = s, le.classList.toggle("drop-active", s));
  }
  function Ii(i, s, c = p.viewFov, f = 140, h = 620) {
    const m = Xw(p.viewYaw, i), y = s - p.viewPitch, _ = c - p.viewFov, k = Math.hypot(m, y) + Math.abs(_) * 0.6, A = Math.round(J(f + k * 2.2, f, h));
    p.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: A,
      startYaw: p.viewYaw,
      startPitch: p.viewPitch,
      startFov: p.viewFov,
      targetPitch: s,
      targetFov: c,
      deltaYaw: m
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, de();
  }
  sb();
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
    return sr(i) ? Uf(i, p.frame) : i;
  }
  function lr(i, s) {
    sr(i) ? f0(i, p.frame, s) : Object.assign(i, s);
  }
  function hn() {
    const i = v.painting || (v.painting = Wo(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Cy(i = "paint") {
    var h, m;
    const s = Array.isArray((m = (h = v.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? v.painting[i].strokes : [], c = [], f = /* @__PURE__ */ new Set();
    for (const y of s) {
      const _ = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !_ || f.has(_) || (f.add(_), c.push(_));
    }
    return c;
  }
  function Iy() {
    return Cy("paint");
  }
  function aa(i, s) {
    const c = String(s || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function sa(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function on(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const c = s.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : s).trim();
  }
  function la(i, s = null) {
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
  function dd(i, s = null) {
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
  function Ey(i) {
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
  function Oy() {
    const i = new Set(Iy()), c = hn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
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
  function Fy(i, s, c) {
    var Z;
    const f = (te) => (Number(te || 0) % 1 + 1) % 1, h = [];
    for (const te of c) {
      const ae = te == null ? void 0 : te.geometry, he = (ae == null ? void 0 : ae.geometryKind) === "lasso_fill" ? ae == null ? void 0 : ae.points : (ae == null ? void 0 : ae.processedPoints) || (ae == null ? void 0 : ae.rawPoints) || (ae == null ? void 0 : ae.points) || [];
      Array.isArray(he) && h.push(...he);
    }
    if (!h.length) return null;
    const m = f(((Z = h[0]) == null ? void 0 : Z.u) || 0);
    let y = 0, _ = 0;
    h.forEach((te) => {
      const ae = f((te == null ? void 0 : te.u) || 0);
      y += m + qn(ae, m), _ += Number((te == null ? void 0 : te.v) || 0);
    });
    const k = (y / h.length % 1 + 1) % 1;
    let A = 1 / 0, C = -1 / 0, P = 1 / 0, D = -1 / 0;
    h.forEach((te) => {
      const ae = f((te == null ? void 0 : te.u) || 0), he = qn(ae, k);
      A = Math.min(A, he), C = Math.max(C, he);
      const re = Number((te == null ? void 0 : te.v) || 0);
      P = Math.min(P, re), D = Math.max(D, re);
    });
    const W = c.reduce((te, ae) => {
      const he = yi(String((ae == null ? void 0 : ae.toolKind) || "pen")), re = Tn[he] || Tn[Wr], Se = Math.max(1, Number((ae == null ? void 0 : ae.size) || 10)) * Math.max(0.1, Number((re == null ? void 0 : re.sizeScale) ?? 1));
      return Math.max(te, Se);
    }, 0), ne = Math.max(35e-4, W / 2048);
    return {
      centerUv: { u: ((k + (A + C) * 0.5) % 1 + 1) % 1, v: J((P + D) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - A) * 0.5 + ne,
      halfH: (D - P) * 0.5 + ne,
      uvPad: ne
    };
  }
  function ui(i, s, c) {
    const f = String(i || "").trim();
    if (!f) return null;
    const h = hn().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === f);
    if (!h) return null;
    const m = c || cr(f, s);
    return h.frame = Fy(f, s, m), h.frame;
  }
  function po() {
    var f;
    const i = ss().map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = Oy().map((h) => ({
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
    var c, f, h, m, y, _;
    const s = po().filter((k) => k.type === "strokeGroup").map((k) => String(k.actionGroupId || "")).filter((k) => !!k);
    if (i) {
      const k = String(((f = (c = p.interaction) == null ? void 0 : c.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), A = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), C = String(((_ = (y = p.interaction) == null ? void 0 : y.stroke) == null ? void 0 : _.toolKind) || "").trim();
      k && A === "paint" && C !== "eraser" && !s.includes(k) && s.push(k);
    }
    return s;
  }
  function ac(i = !0) {
    var _, k, A, C, P, D;
    const s = po();
    if (!i) return s;
    const c = String(((k = (_ = p.interaction) == null ? void 0 : _.stroke) == null ? void 0 : k.actionGroupId) || "").trim(), f = String(((C = (A = p.interaction) == null ? void 0 : A.stroke) == null ? void 0 : C.layerKind) || "").trim(), h = String(((D = (P = p.interaction) == null ? void 0 : P.stroke) == null ? void 0 : D.toolKind) || "").trim();
    if (!c || f !== "paint" || h === "eraser" || s.some((W) => W.type === "strokeGroup" && String(W.actionGroupId || "") === c))
      return s;
    const m = Nt();
    let y = s.reduce((W, ne) => Math.max(W, Number((ne == null ? void 0 : ne.z_index) || 0)), -1) + 1;
    return m && en(m) && String(m.actionGroupId || "") === c && (y = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: y,
        item: null
      }
    ].sort((W, ne) => Number((W == null ? void 0 : W.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0));
  }
  function Ty() {
    return hn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => go(aa("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Dy() {
    var i;
    return (Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, c) => Number((s == null ? void 0 : s.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((s) => mo(sa((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function hd(i = p.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || f;
    }
    return !1;
  }
  function Ly() {
    var s, c, f, h;
    let i = null;
    try {
      const m = oc(), y = ((h = (f = (c = (s = p.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : c.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : h.canvas) || null;
      y && (i = {
        source: y,
        revision: `${ma()}:${sc()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function sc() {
    var h, m, y, _, k, A, C;
    const i = p.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!hd(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const P = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, D = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), W = ((y = P == null ? void 0 : P.rawPoints) == null ? void 0 : y.length) ?? ((_ = P == null ? void 0 : P.points) == null ? void 0 : _.length) ?? 0, ne = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${D || "paint"}_${s}_live${ne}_${W}_${p.livePaintInteractionRevision}`;
    }
    const c = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.actionGroupId) || ""), f = String(((A = i == null ? void 0 : i.item) == null ? void 0 : A.rasterObjectId) || ((C = i == null ? void 0 : i.item) == null ? void 0 : C.id) || "");
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
      id: sa(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function pn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = on(i.rasterObjectId || i.id || "");
    return !!s && !!mo(sa(s));
  }
  function go(i) {
    const s = la(i), c = String(s.actionGroupId || "").trim();
    if (!c) return null;
    const f = hn().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === c || String((h == null ? void 0 : h.actionGroupId) || "") === c);
    return f ? {
      ...f,
      id: aa("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function en(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!go(aa(c, s));
  }
  function cr(i, s = null) {
    const c = la(i, s), f = String(c.actionGroupId || "").trim();
    return f ? No(c.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === f) : [];
  }
  function Ry(i, s = "paint") {
    const c = String(i || "").trim(), h = `geomv5:${String(s || "paint").trim() || "paint"}:${c}:${p.mode}:${pa()}`;
    if (p.mode === "frame") {
      const m = He(), y = String((m == null ? void 0 : m.id) || ""), _ = m ? tn(m) : null;
      return `${h}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
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
    var A;
    const f = la(i, s), h = Array.isArray(c) ? c : cr(f.actionGroupId, f.layerKind), m = [];
    if (h.forEach((C) => {
      const P = (C == null ? void 0 : C.geometry) || null, D = (P == null ? void 0 : P.geometryKind) === "lasso_fill" ? P == null ? void 0 : P.points : (P == null ? void 0 : P.processedPoints) || (P == null ? void 0 : P.rawPoints) || (P == null ? void 0 : P.points) || [];
      Array.isArray(D) && m.push(...D);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((A = m[0]) == null ? void 0 : A.u) || 0);
    let _ = 0, k = 0;
    return m.forEach((C) => {
      _ += y + qn(Number((C == null ? void 0 : C.u) || 0), y), k += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (_ / m.length % 1 + 1) % 1,
      v: J(k / m.length, 0, 1)
    };
  }
  function cs(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = qn(Number(i.u || 0), h), _ = Number(i.v || 0) - m, k = Number(f || 0) * Sr, A = Math.cos(k), C = Math.sin(k), P = Math.max(0.02, Number(c || 1)), D = (y * A - _ * C) * P, W = (y * C + _ * A) * P;
    return {
      ...i,
      u: ((h + D) % 1 + 1) % 1,
      v: J(m + W, 0, 1)
    };
  }
  function pd(i, s, c, f = null, h = null, m = null) {
    const y = la(i, h), _ = String(y.actionGroupId || "").trim();
    if (!_) return !1;
    const k = No(y.layerKind), A = Array.isArray(f) ? new Map(f.map((P) => [String((P == null ? void 0 : P.id) || ""), P])) : null;
    let C = !1;
    if (k.forEach((P) => {
      if (String((P == null ? void 0 : P.actionGroupId) || "").trim() !== _) return;
      const D = (A == null ? void 0 : A.get(String((P == null ? void 0 : P.id) || ""))) || P, W = P == null ? void 0 : P.geometry, ne = D == null ? void 0 : D.geometry;
      !W || !ne || (Array.isArray(ne.points) && (W.points = ne.points.map((Z) => ls(Z, s, c)), C = !0), Array.isArray(ne.rawPoints) && (W.rawPoints = ne.rawPoints.map((Z) => ls(Z, s, c)), C = !0), Array.isArray(ne.processedPoints) && (W.processedPoints = ne.processedPoints.map((Z) => ls(Z, s, c)), C = !0));
    }), C && m) {
      const P = hn().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === _);
      P && (P.frame = null);
    }
    return C;
  }
  function md(i, s = 1, c = 0, f = null, h = null, m = null) {
    const y = la(i, h), _ = String(y.actionGroupId || "").trim();
    if (!_) return !1;
    const k = No(y.layerKind), A = Array.isArray(f) ? f : cr(_, y.layerKind), C = Array.isArray(A) ? new Map(A.map((W) => [String((W == null ? void 0 : W.id) || ""), W])) : null, P = (m == null ? void 0 : m.centerUv) ?? cc(_, y.layerKind, A);
    let D = !1;
    if (k.forEach((W) => {
      if (String((W == null ? void 0 : W.actionGroupId) || "").trim() !== _) return;
      const ne = (C == null ? void 0 : C.get(String((W == null ? void 0 : W.id) || ""))) || W, Z = W == null ? void 0 : W.geometry, te = ne == null ? void 0 : ne.geometry;
      !Z || !te || (Array.isArray(te.points) && (Z.points = te.points.map((ae) => cs(ae, P, s, c)), D = !0), Array.isArray(te.rawPoints) && (Z.rawPoints = te.rawPoints.map((ae) => cs(ae, P, s, c)), D = !0), Array.isArray(te.processedPoints) && (Z.processedPoints = te.processedPoints.map((ae) => cs(ae, P, s, c)), D = !0));
    }), D && m) {
      const W = hn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === _);
      W && (W.frame = null);
    }
    return D;
  }
  function gd(i, s, c, f = null) {
    const h = on(i);
    if (!h) return !1;
    const m = En().find((C) => String((C == null ? void 0 : C.id) || "").trim() === h);
    if (!m) return !1;
    const y = f && typeof f == "object" ? f : m, _ = (y == null ? void 0 : y.transform) || {}, k = Number(_.du || 0) + Number(s || 0), A = J(Number(_.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = k, m.transform.dv = A, !0;
  }
  function $y(i, s = 1, c = null) {
    const f = on(i);
    if (!f) return !1;
    const h = En().find((A) => String((A == null ? void 0 : A.id) || "").trim() === f);
    if (!h) return !1;
    const m = c && typeof c == "object" ? c : h, y = (m == null ? void 0 : m.transform) || {}, _ = Math.max(0.01, Number(y.scale || 1)), k = J(_ * Math.max(0.01, Number(s || 1)), 0.01, 100);
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
    const c = s.map((A) => qt(A)).filter((A) => (A == null ? void 0 : A.visible) && Array.isArray(A.corners) && A.corners.length);
    if (!c.length) return null;
    const f = c.flatMap((A) => A.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), h = c.flatMap((A) => A.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), m = Math.min(...f), y = Math.max(...f), _ = Math.min(...h), k = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (_ + k) * 0.5 },
      corners: [
        { x: m, y: _ },
        { x: y, y: _ },
        { x: y, y: k },
        { x: m, y: k }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: _, a: { x: m, y: _ }, b: { x: y, y: _ } },
        { edge: "right", x: y, y: (_ + k) * 0.5, a: { x: y, y: _ }, b: { x: y, y: k } },
        { edge: "bottom", x: (m + y) * 0.5, y: k, a: { x: y, y: k }, b: { x: m, y: k } },
        { edge: "left", x: m, y: (_ + k) * 0.5, a: { x: m, y: k }, b: { x: m, y: _ } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: _ },
      rotateHandle: { x: (m + y) * 0.5, y: _ - 30 }
    };
  }
  function yd(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(p.selectedIds) && p.selectedIds.includes(s);
  }
  function fs() {
    const i = Nt();
    return i ? en(i) || pn(i) ? "stroke" : zn(i) ? "frame" : "image" : null;
  }
  function Sn(i) {
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
    return s.length > 0 && s.every((c) => Sn(c));
  }
  function Vy(i, s) {
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
  function zy() {
    if (r) return;
    const i = ur();
    if (!i.length) return;
    const s = !uc(i);
    let c = !1;
    i.forEach((f) => {
      Vy(f, s) && (c = !0);
    }), c && (ot(), lt(), Xe(), ze(), de());
  }
  function _r(i) {
    p.inspectCamera = !1, Le.selection = null, p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && yt(i) ? v.active.selected_sticker_id = i.id || null : v.active.selected_sticker_id = null, i && zn(i) ? v.active.selected_shot_id = i.id || null : i ? zn(i) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function jy(i, s = null) {
    const c = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((y) => {
      const _ = String((y == null ? void 0 : y.id) || "").trim();
      !_ || f.has(_) || (f.add(_), c.push(_));
    }), p.selectedIds = c, p.inspectCamera = !1, Le.selection = null;
    const h = String(s || "").trim();
    p.selectedId = h && c.includes(h) ? h : c[c.length - 1] || null;
    const m = Nt();
    v.active.selected_sticker_id = m && yt(m) && m.id || null, m && zn(m) ? v.active.selected_shot_id = m.id || null : c.length || (v.active.selected_shot_id = null);
  }
  function bd() {
    const i = (Array.isArray(v.shots) ? v.shots : []).map((c, f) => ({
      kind: "frame",
      item: c,
      label: String((c == null ? void 0 : c.label) || `Frame ${f + 1}`)
    })), s = (Array.isArray(v.stickers) ? v.stickers : []).map((c, f) => {
      var m, y;
      const h = Vt(c) ? String(c.id || _u) : String(((y = (m = v.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : y.name) || c.asset_id || c.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: c,
        label: h
      };
    });
    return [...i, ...s];
  }
  function Hy(i) {
    return i === "frame" ? Pe.camera : i === "stroke" ? Pe.paintbrush_vertical_tool : Pe.image;
  }
  function fc(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Hy(i.kind)
    };
  }
  function ds() {
    return ic();
  }
  function Vt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : S ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === _u || String(i.source_kind || "") === WA;
  }
  function yo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Gy(i) {
    return Vt(i) && yo(i) ? _0 : 1;
  }
  function Ky() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function By() {
    return String(Ky() || "") === "lasso_fill";
  }
  function Wy() {
    if (r) return;
    const i = Nt();
    !i || !Vt(i) || (i.visible = yo(i), Wt(), ot(), lt(), ze(), Xe(), de());
  }
  function Uy() {
    if (r || t !== "stickers") return;
    const i = Nt();
    if (!i || !Vt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = mc(zs, () => {
      de();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = hi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), ot(), lt(), ze(), Xe(), de();
  }
  function Yy(i) {
    if (!i || !Vt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const c = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = mc(zs, () => {
      de();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (c.vFOV_deg = hi(
      c.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), c;
  }
  function Xy() {
    const i = Nt();
    if (!i || !Vt(i)) return !1;
    const s = Yy(i);
    if (!s) return !1;
    const c = (f, h) => Math.abs(Number(f || 0) - Number(h || 0)) <= 1e-4;
    return !(c(i.yaw_deg, s.yaw_deg) && c(i.pitch_deg, s.pitch_deg) && c(i.hFOV_deg, s.hFOV_deg) && c(i.vFOV_deg, s.vFOV_deg) && c(i.rot_deg, s.rot_deg));
  }
  function Ei(i) {
    return Kn.uiList(e, i);
  }
  function dc(i) {
    return Kn.uiValue(e, i);
  }
  function vd() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return xl(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function qy() {
    const { metaKey: i } = vd(), s = dc(i);
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
  function fi(i = {}) {
    const s = Number(i.duration ?? E.videoTransport.duration ?? 0), c = Math.max(1, Number(i.fps ?? E.videoTransport.fps ?? 24)), f = kt.frame / hs(), h = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!E.videoTransport.ready, m = kt.playing, y = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!E.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Y instanceof HTMLVideoElement ? Y.muted : E.videoTransport.muted), k = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Y instanceof HTMLVideoElement ? Y.volume : E.videoTransport.volume
    ), A = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Ci(Y), C = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!E.videoTransport.loop;
    Object.assign(E.videoTransport, {
      ready: h,
      playing: m,
      visible: y,
      loop: C,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: pc(f),
      durationLabel: pc(s),
      frameCount: Math.max(0, Number(i.frameCount ?? E.videoTransport.frameCount ?? 0)),
      fps: c,
      hasAudio: A,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : E.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? E.videoTransport.thumbnailCount ?? Ze))
    });
  }
  function _d() {
    return !!(Y instanceof HTMLVideoElement && !S && Y.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function wd() {
    if (!(Y instanceof HTMLVideoElement) || !E.videoTransport.hasAudio) return;
    const i = !Y.muted;
    Y.muted = i, !i && Number(Y.volume || 0) <= 0 && (Y.volume = Math.max(0.01, Number(E.videoTransport.volume || 1))), fi({
      hasAudio: E.videoTransport.hasAudio,
      muted: Y.muted,
      volume: Number(Y.volume ?? E.videoTransport.volume ?? 1)
    });
  }
  function Jy() {
    fi({
      visible: _d()
    });
  }
  function Zy() {
    if (!(Y instanceof HTMLVideoElement) || Number(Y.videoWidth || 0) < 1 || Number(Y.videoHeight || 0) < 1) return !1;
    const i = Number(Y.videoWidth || 0), s = Number(Y.videoHeight || 0);
    ($t.width !== i || $t.height !== s) && ($t.width = i, $t.height = s);
    const c = $t.getContext("2d");
    return c ? (c.clearRect(0, 0, i, s), c.drawImage(Y, 0, 0, i, s), $t.__panoFrameIdx = Number($t.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function xd() {
    return !kt.showsVideo && Number($t.width || 0) > 0 && Number($t.height || 0) > 0 && Number($t.__panoFrameIdx || 0) > 0 ? $t : Y instanceof HTMLVideoElement && Number(Y.videoWidth || 0) > 0 && Number(Y.videoHeight || 0) > 0 && Number(Y.readyState || 0) >= 2 ? Y : null;
  }
  function Sd() {
    $t.__panoFrameIdx = 0, Ce.backgroundDirty = !0;
  }
  function di() {
    if (!(Y instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = vd(), s = Pn(e, "background") && Ei(i)[0] || null, c = Hs(s), f = [c, Kn.linkedVideoFile(e, Ld())].filter(Boolean), h = f.find((P) => !Ae.failedSrcs.has(P)) || "";
    Ae.videoFailed = !h && f.length > 0;
    const m = h && h === c ? qy() : null;
    Ae.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const y = Math.max(1, Number((m == null ? void 0 : m.fps) || (S ? v.timeline.fps : 24))), _ = Y.dataset.panoSrc === h && Number.isFinite(Y.duration) ? Y.duration : 0, k = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / y : _)), A = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(k * y))), C = !!(m != null && m.has_audio) || Ci(Y);
    return h && Y.dataset.panoSrc !== h ? (Y.pause(), Sd(), Y.dataset.panoSrc = h, Y.loop = !S && !!E.videoTransport.loop, Y.muted = !!E.videoTransport.muted, Y.volume = Math.max(0, Math.min(1, Number(E.videoTransport.volume ?? 1))), Y.src = h, Y.load(), kt.setSource(!0), S || kt.seek(0)) : !h && Y.getAttribute("src") && (Y.pause(), Y.removeAttribute("src"), delete Y.dataset.panoSrc, Y.load(), Sd(), br(), kt.setSource(!1)), S || (Y.loop = !!E.videoTransport.loop), h && !S && Ae.thumbnailSrc !== h && !Ae.thumbnailFailedSrcs.has(h) && Cn(h, k, y), h || br(), fi({
      ready: !!h,
      visible: !!h && _d(),
      duration: k,
      frameCount: A,
      fps: y,
      hasAudio: C,
      loop: !!Y.loop,
      muted: !!Y.muted,
      volume: Number(Y.volume ?? E.videoTransport.volume ?? 1),
      thumbnailCount: E.videoTransport.thumbnailCount
    }), h || null;
  }
  function kd(i, s = null) {
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
    return ku(e, i, Be, s || (() => de()));
  }
  function gc(i = null) {
    return Pn(e, "external-sticker") ? mc(zs, i) : null;
  }
  function Md() {
    if (!Pn(e, "external-sticker")) return null;
    const i = Ei(XA)[0];
    if (!i || typeof i != "object") return null;
    const s = Ei(YA).map(Hs).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const c = Hs(Ei(UA)[0] || null);
    return c ? { src: c, meta: i } : null;
  }
  function Qy() {
    const i = v.stickers.find(Vt), s = i ? Md() : null, c = s ? L0(i.clip, p.frame, v.timeline.fps, s.meta) : null;
    ar.follow({ src: (s == null ? void 0 : s.src) || "", time: c, playing: kt.advancing, fps: v.timeline.fps });
    const f = i ? wc(i) : null, h = s != null && s.frames ? as.picture(s.frames, c, s.meta, f) : ar.picture(Xn, f);
    return h ? { media: h, revision: hc(h), source: $0(s, f) } : null;
  }
  function hi(i, s, c) {
    const f = Math.max(1, Number(s || 1)), h = Math.max(1, Number(c || 1)), m = J(Number(i || 30), 0.1, 179) * Sr, y = 2 * Math.atan(Math.tan(m * 0.5) * (h / f));
    return J(y * Yi, 0.1, 179);
  }
  function eb(i) {
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
      const y = Number(m.yaw_deg), _ = Number(m.pitch_deg), k = Number(m.roll_deg), A = Number(m.hFOV_deg);
      if (![y, _, k, A].every((W) => Number.isFinite(W))) return null;
      let C = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(C, -0) && (C = 0);
      const P = {
        yaw_deg: C,
        pitch_deg: J(_, -89.9, 89.9),
        roll_deg: k,
        hFOV_deg: J(A, 0.1, 179)
      }, D = Number(c.source_aspect);
      return Number.isFinite(D) && D > 0 && (P.source_aspect = D), P;
    } catch {
      return null;
    }
  }
  function Nd(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = no(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(s) ? s : 0),
        pitch_deg: J(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function tb(i) {
    var _;
    if (!i || typeof i != "object") return Nd(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let y = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const k = J(h, 0.1, 179) * Sr, A = J(m, 0.1, 179) * Sr, C = Math.tan(A * 0.5);
      if (Math.abs(C) > 1e-6) {
        const P = Math.tan(k * 0.5) / C;
        Number.isFinite(P) && P > 0 && (y = P);
      }
    }
    if (i != null && i.asset_id && ((_ = v == null ? void 0 : v.assets) != null && _[i.asset_id])) {
      const k = v.assets[i.asset_id], A = Number((k == null ? void 0 : k.w) || 0), C = Number((k == null ? void 0 : k.h) || 0);
      A > 0 && C > 0 && (y = A / C);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(s) ? s : 0),
        pitch_deg: J(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function nb(i) {
    return Kn.linkedValue(e, i);
  }
  function rb(i, s, c) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : eb(s);
    if (f) {
      const y = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || f.source_aspect || 1), _ = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: hi(f.hFOV_deg, y, _),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const h = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: hi(30, h, m),
      rot_deg: 0
    };
  }
  function ib() {
    const i = gc(() => {
      ti(e, "image-loaded");
    }), s = Pn(e, "external-sticker") ? kd(dc("pano_sticker_input_pose"), null) : null;
    return Y0(v, U0(e, { pose: s, image: i }));
  }
  function ob() {
    var _;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((_ = e.getInputLink(i)) == null ? void 0 : _.id) ?? null : null, c = gc(() => {
      ti(e, "image-loaded");
    }), f = kd(dc("pano_sticker_input_pose"), null), h = nb("sticker_state"), m = Kn.externalStateHash(e, h), y = s == null ? null : rb(f, h, c);
    return W0(v, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: y,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
  }
  function Pd(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? ib() : ob();
    if (s.changed) {
      const c = v.stickers.find(Vt);
      v.stickers = s.state.stickers, v.active = s.state.active, c && p.selectedId === c.id && !v.stickers.some((f) => f.id === c.id) && (p.selectedId = null, p.selectedIds = []), lt(), ze(), Xe();
    }
    de();
  }
  function ca(i = {}) {
    const c = i.preservePanelValues !== !1 ? Xt(Nt()) : null;
    c && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: Jr(c)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function ab() {
    if (t !== "cutout") return;
    const i = He();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function yc() {
    if (t !== "cutout") return;
    const i = He();
    ji(E.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Pe.camera : Pe.plus_circle
    });
  }
  function Ad() {
    const i = t === "cutout" && p.mode === "frame", s = !i && !!p.showGrid;
    ji(E.floatingButtons, "action", "reset-view", {
      disabled: r || i
    });
    const c = bo();
    ji(E.floatingButtons, "action", "frame-view", {
      visible: c,
      disabled: r || !c
    }), ji(E.floatingButtons, "action", "toggle-grid", {
      icon: s ? Pe.eye : Pe.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function jr() {
    var c;
    const i = !!He();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, E.viewButtons.forEach((f) => {
      const h = f.key === p.mode;
      f.pressed = h ? "true" : "false", f.visible = !(f.key === "frame" && t !== "cutout"), f.disabled = f.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && p.mode === "frame" ? He() : null;
    E.frameRail.visible = !!s, E.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, E.frameRollKnob.visible = !!s && !r && s.locked !== !0, E.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, E.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), E.frameRollKnob.displayValue = Oo(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((c = p.interaction) == null ? void 0 : c.kind) === "roll_frame", E.frameRollKnob.armed = !!s && p.altModifier === !0, E.frameRail.rollKnob = E.frameRollKnob, E.frameRail.aspectLabel = s ? Jr(s) : "", E.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((f) => ({
      value: f,
      label: f,
      active: !!s && String(Jr(s)) === f
    })), s || (E.frameRail.aspectOpen = !1), E.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!He(), t === "cutout" && E.cameraPreview && (E.cameraPreview.visible = p.mode !== "frame", E.cameraPreview.expanded = !!p.outputPreviewExpanded, E.cameraPreview.settled = E.cameraPreview.settled === !0 && Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame), Ad(), mh() ? mt(p.pointerPos) : ke(p.mode === "pano" ? "grab" : "default");
  }
  function sb() {
    const s = Rd({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Cd() {
    return w0({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, I.width, I.height);
  }
  function Id() {
    return !S || !Pn(e, "scene") ? null : PS(Ei("pano_scene_files"), Ei("pano_scene_meta"), Hs);
  }
  function bo() {
    return !S || p.mode !== "pano" ? !1 : AS({ sceneLinked: !!A0(e).scene, files: Id(), stickers: v.stickers });
  }
  function ua() {
    var s;
    const i = p.viewMoved ? p.viewDistance : ((s = ps()) == null ? void 0 : s.radius) || qi;
    return { position: p.viewPosition, yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, hFOV_deg: p.viewFov, distance: i };
  }
  function ps() {
    var i;
    return ((i = wo().space) == null ? void 0 : i.sphere) ?? null;
  }
  function bc(i) {
    p.viewPosition = i.position, p.viewYaw = i.yaw_deg, p.viewPitch = i.pitch_deg, p.viewDistance = i.distance, p.viewMoved = !0, Ce.backgroundDirty = !0, de({ localOnly: !0 });
  }
  function Ed() {
    var i;
    return ((i = ps()) == null ? void 0 : i.radius) || qi;
  }
  function lb() {
    const i = ps();
    i && bc(kS(ua(), i, I.width, I.height));
  }
  function vc() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${I.width}|${I.height}`;
    return zr.key !== i && (zr = { key: i, projection: x0(Cd(), I.width, I.height) }), zr.projection;
  }
  function fa(i) {
    const s = vc().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function _c(i, s) {
    return vc().ray(i, s);
  }
  function pi() {
    const i = I.width, s = I.height, c = 2;
    if (i / Math.max(s, 1) >= c) {
      const _ = s, k = _ * c;
      return { x: (i - k) * 0.5, y: 0, w: k, h: _ };
    }
    const h = i, m = h / c;
    return { x: 0, y: (s - m) * 0.5, w: h, h: m };
  }
  function wc(i) {
    var y;
    if (i && typeof i == "object" && (Vt(i) || i.external === !0))
      return gc(() => {
        ti(e, "image-loaded");
      });
    const s = S ? da(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const c = Be.get(s);
    if (c) return c;
    const f = S ? h0(i.source) : (y = v.assets) == null ? void 0 : y[s], h = oC(f);
    if (!h) return null;
    const m = new Image();
    return Sy(m, h), m.onload = () => {
      ky(m, h), de();
    }, m.onerror = () => {
      My(m, h), de();
    }, m.src = h, Be.set(s, m), m;
  }
  function da(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function Od(i, s = null) {
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
  function cb(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = un.get(s);
    if (c) return c.ready ? c : null;
    const f = Od(i, () => {
      const C = un.get(s);
      C && (C.ready = !1), de({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const h = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (h < 1 || m < 1) return null;
    const y = document.createElement("canvas");
    y.width = h, y.height = m;
    const _ = y.getContext("2d", { willReadFrequently: !0 });
    if (!_) return null;
    _.clearRect(0, 0, h, m), _.drawImage(f, 0, 0, h, m);
    const k = _.getImageData(0, 0, h, m).data, A = { canvas: y, width: h, height: m, alpha: k, ready: !0 };
    return un.set(s, A), A;
  }
  function ub(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = qn(Number(i.u || 0), h), _ = Number(i.v || 0) - m, k = Math.max(0.02, Number(c || 1)), A = Number(f || 0) * Sr, C = Math.cos(A), P = Math.sin(A), D = y / k, W = _ / k, ne = D * C + W * P, Z = -D * P + W * C;
    return {
      ...i,
      u: ((h + ne) % 1 + 1) % 1,
      v: m + Z
    };
  }
  function fb(i, s) {
    if (!i || !s) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const f = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, y = ub(
      m,
      h,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), _ = Number(c.u1 || 0) - Number(c.u0 || 0), k = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(_ > 1e-6) || !(k > 1e-6)) return null;
    const A = qn(Number(y.u || 0), Number(c.u0 || 0)) / _, C = (Number(y.v || 0) - Number(c.v0 || 0)) / k;
    if (A < 0 || A > 1 || C < 0 || C > 1) return 0;
    const P = cb(i);
    if (!P) return null;
    const D = J(Math.floor(A * P.width), 0, P.width - 1), W = J(Math.floor(C * P.height), 0, P.height - 1);
    return Number(P.alpha[(W * P.width + D) * 4 + 3] || 0);
  }
  function Fd(i, s, c, f = null) {
    if (!(s != null && s.visible) || !Yr(c, s.corners)) return !1;
    const h = f || dr(c, performance.now()), m = fb(i, h);
    return m === null ? !0 : m > 8;
  }
  function db() {
    var f, h, m, y, _, k, A, C;
    const i = ((h = (f = p.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : h.call(f, oc(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((_ = (y = i == null ? void 0 : i.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : _.width) || 2048)), c = Math.max(1, Number(((k = i == null ? void 0 : i.descriptor) == null ? void 0 : k.height) || ((C = (A = i == null ? void 0 : i.displayPaint) == null ? void 0 : A.canvas) == null ? void 0 : C.height) || 1024));
    return { width: s, height: c };
  }
  function hb() {
    var W, ne, Z;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const c = jn(), f = `${sc()}:${c.width}:${c.height}`;
    if (((W = p._activePaintEraserPreviewInfo) == null ? void 0 : W.cacheKey) === f)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = gn(s), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const te = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Cc(te, h.targetSpace, !0);
    }
    const y = ha(c.width, c.height, { readback: !0 });
    if (!Jd(y, h, { w: c.width, h: c.height })) return null;
    const _ = ((Z = (ne = y.ctx) == null ? void 0 : ne.getImageData(0, 0, c.width, c.height)) == null ? void 0 : Z.data) || null;
    if (!_) return null;
    let k = c.width, A = c.height, C = -1, P = -1;
    for (let te = 0; te < c.height; te += 1)
      for (let ae = 0; ae < c.width; ae += 1)
        _[(te * c.width + ae) * 4 + 3] <= 8 || (ae < k && (k = ae), te < A && (A = te), ae > C && (C = ae), te > P && (P = te));
    if (C < k || P < A)
      return p._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const D = {
      surface: y,
      bounds: { minX: k, minY: A, maxX: C, maxY: P },
      key: `${f}:${k}:${A}:${C}:${P}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: f, value: D }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), D;
  }
  function vo() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function pb(i, s, c) {
    var f, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, y = ((h = i.item) == null ? void 0 : h.transform) || {}, _ = Number(m.u0 || 0) + Number(y.du || 0), k = Number(m.u1 || 0) + Number(y.du || 0), A = Number(m.v0 || 0) + Number(y.dv || 0), C = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(J(A, 0, 1) * c),
        maxY: Math.ceil(J(C, 0, 1) * c),
        wraps: k - _ >= 1 || _ < 0 || k > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = cr(i.actionGroupId, "paint"), y = ui(i.actionGroupId, "paint", m);
      if (!y) return null;
      const _ = y.centerUv.u - y.halfW, k = y.centerUv.u + y.halfW, A = y.centerUv.v - y.halfH, C = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(J(A, 0, 1) * c),
        maxY: Math.ceil(J(C, 0, 1) * c),
        wraps: k - _ >= 1 || _ < 0 || k > 1
      };
    }
    return null;
  }
  function mb(i, s, c) {
    if (!i || !s) return !1;
    const f = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: c - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], h = f(i), m = f(s);
    return h.some((y) => m.some((_) => !(y.maxX < _.minX || _.maxX < y.minX || y.maxY < _.minY || _.maxY < y.minY)));
  }
  function gb(i, s, c) {
    var Se, Ge, Ue, nt, ye, ie, pe;
    if (!i || !s || !((Se = c == null ? void 0 : c.surface) != null && Se.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || c.surface.canvas.width || 0), h = Number(i.height || c.surface.canvas.height || 0);
    if (f < 1 || h < 1) return i;
    const m = pb(s, f, h);
    if (m && !mb(m, c.bounds, f)) return i;
    const y = String(((Ge = s.item) == null ? void 0 : Ge.id) || s.id || ""), _ = ((Ue = s.item) == null ? void 0 : Ue.transform) || {}, k = `${c.key}:${y}:${f}:${h}:${Number(_.du || 0).toFixed(6)}:${Number(_.dv || 0).toFixed(6)}:${Number(_.rot_deg || 0).toFixed(3)}:${Number(_.scale || 1).toFixed(4)}`, A = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (A.has(k)) return A.get(k);
    const C = J(Math.floor(Number(((nt = c.bounds) == null ? void 0 : nt.minX) || 0)), 0, Math.max(0, f - 1)), P = J(Math.floor(Number(((ye = c.bounds) == null ? void 0 : ye.minY) || 0)), 0, Math.max(0, h - 1)), D = J(Math.ceil(Number(((ie = c.bounds) == null ? void 0 : ie.maxX) || 0)), C, Math.max(0, f - 1)), W = J(Math.ceil(Number(((pe = c.bounds) == null ? void 0 : pe.maxY) || 0)), P, Math.max(0, h - 1)), ne = Math.max(1, D - C + 1), Z = Math.max(1, W - P + 1), te = ha(f, h, { readback: !0 });
    te.ctx.clearRect(0, 0, f, h), te.ctx.drawImage(i, 0, 0);
    const ae = te.ctx.getImageData(C, P, ne, Z);
    te.ctx.save(), te.ctx.globalCompositeOperation = "destination-out", te.ctx.drawImage(c.surface.canvas, 0, 0), te.ctx.restore();
    const he = te.ctx.getImageData(C, P, ne, Z);
    let re = !1;
    for (let we = 0; we < ne * Z; we += 1) {
      const Re = ae.data[we * 4 + 3], We = he.data[we * 4 + 3];
      if (Re > We) {
        re = !0;
        break;
      }
    }
    return re ? (A.size > 64 && A.clear(), A.set(k, te.canvas), te.canvas) : (A.set(k, i), i);
  }
  function Td(i, s = null) {
    const c = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!c || !f) return null;
    const h = Od(i, s);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: y } = db(), _ = (i == null ? void 0 : i.transform) || {}, k = [
      c,
      m,
      y,
      f.u0,
      f.v0,
      f.u1,
      f.v1,
      _.du,
      _.dv,
      _.rot_deg,
      _.scale,
      pa()
    ].join(":"), A = rn.get(k);
    if (A) return A;
    rn.size > 64 && rn.clear();
    const C = document.createElement("canvas");
    C.width = m, C.height = y;
    const P = C.getContext("2d");
    if (!P) return null;
    const D = Number(f.u0 || 0) * m, W = Number(f.v0 || 0) * y, ne = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), Z = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * y), te = D + ne * 0.5 + Number(_.du || 0) * m, ae = W + Z * 0.5 + Number(_.dv || 0) * y, he = Number(_.rot_deg || 0) * Sr, re = Math.max(0.01, Number(_.scale || 1));
    for (const Se of [-m, 0, m])
      P.save(), P.translate(te + Se, ae), P.rotate(he), P.scale(re, re), P.drawImage(h, -ne * 0.5, -Z * 0.5, ne, Z), P.restore();
    return rn.set(k, C), C;
  }
  async function xc(i, s) {
    const c = await new Promise((_) => i.toBlob(_, "image/png")), f = new FormData();
    f.append("image", c, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const h = await Ht.fetchApi("/upload/image", { method: "POST", body: f });
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
  function yb() {
    const i = Am(v.painting), { width: s, height: c } = ga();
    return lS(v.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: c, nodeId: String(e.id ?? "0") });
  }
  function Dd() {
    const i = String(e.id ?? "0"), s = js.get(i);
    if (gs && s) return s;
    const c = (async () => {
      var m, y, _, k, A, C, P, D, W, ne, Z, te;
      const f = ma(), h = Am(v.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, ms = f, Fn());
        return;
      }
      if (ms !== f && !gs) {
        gs = !0;
        try {
          ws();
          const ae = oc(!1), he = ((y = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, ae)) || null, re = ((_ = he == null ? void 0 : he.displayPaint) == null ? void 0 : _.canvas) || null, Se = ((k = he == null ? void 0 : he.committedMask) == null ? void 0 : k.canvas) || null, Ge = Math.max(1, Number(((A = he == null ? void 0 : he.descriptor) == null ? void 0 : A.width) || (re == null ? void 0 : re.width) || (Se == null ? void 0 : Se.width) || 2048)), Ue = Math.max(1, Number(((C = he == null ? void 0 : he.descriptor) == null ? void 0 : C.height) || (re == null ? void 0 : re.height) || (Se == null ? void 0 : Se.height) || 1024));
          (!re && h.totalPaintCount > 0 || !Se && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((P = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : P.width) || 0) !== Ge || Number(((D = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : D.height) || 0) !== Ue) && (p._paintLayerSyncBlankSurface = ha(Ge, Ue)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ge, Ue));
          const nt = re || h.totalPaintCount > 0 && ((W = p._paintLayerSyncBlankSurface) == null ? void 0 : W.canvas) || null, ye = Se || h.totalMaskCount > 0 && ((ne = p._paintLayerSyncBlankSurface) == null ? void 0 : ne.canvas) || null;
          if (!nt && !ye) return;
          let ie = null, pe = null;
          const we = [];
          if (h.totalPaintCount > 0) {
            ie = await xc(nt, `pano_paint_${i}.png`);
            for (const Re of ae) {
              const We = String(Re || "").trim();
              if (!We) continue;
              const Te = ((te = (Z = p.paintEngine) == null ? void 0 : Z.getGroupDisplayCanvas) == null ? void 0 : te.call(Z, We)) || null;
              if (!Te) continue;
              const ft = We.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await xc(Te, `pano_group_${i}_${ft}.png`);
              qe && we.push({
                id: We,
                actionGroupId: We,
                image: qe
              });
            }
          }
          h.totalMaskCount > 0 && (pe = await xc(ye, `pano_mask_${i}.png`)), f === ma() && (v.painting_layer = {
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
  function Sc() {
    if (t === "cutout") {
      const h = xd();
      if (h) return h;
      const m = Mu(
        e,
        ["erp_image", "bg_erp"],
        () => de(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !pf(m) ? m : ku(e, "pano_input_images", Be, () => de()) || m || null;
    }
    const i = xd();
    if (i) return i;
    const s = Pn(e, "background") ? ku(e, "pano_input_images", Be, () => de()) : null;
    if (s && !pf(s)) return s;
    if (Y instanceof HTMLVideoElement && Y.dataset.panoSrc) return Y;
    const c = Ld();
    return Mu(e, c, () => de(), `background:${c.join("|")}`) || s || null;
  }
  function Ld() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), c = i.includes("bg_erp");
    return r && (s || c) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function kc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function bb() {
    if (Bt.failed) return { status: tr, detail: "renderer" };
    if (!Bt.ready) return { status: pr, detail: "boot" };
    let i = ra;
    const s = [];
    if (p.showPanorama) {
      const c = Sc();
      i = Ae.videoFailed ? tr : hf(c, kc);
    }
    if (p.showObjects)
      for (const c of ss()) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const f = wc(c);
        s.push(hf(f, kc));
      }
    return GA({
      presented: Ce.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function _o() {
    const i = new Set(
      (v.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(v.assets || {}).forEach((s) => {
      i.has(s) || (delete v.assets[s], Be.delete(s));
    });
  }
  function Mc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(J(i.y, -1, 1))
    };
  }
  function Nc(i, s = null) {
    const { lon: c, lat: f } = Mc(i), h = pi();
    let m = h.x + (c / (2 * Math.PI) + 0.5) * h.w;
    const y = h.y + (0.5 - f / Math.PI) * h.h;
    if (s !== null) {
      for (; m - s > h.w / 2; ) m -= h.w;
      for (; m - s < -h.w / 2; ) m += h.w;
    }
    return { x: m, y, z: 1 };
  }
  function ys(i) {
    const s = Xt(i), c = oa(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(J(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * Sr), h = Math.tan(J(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * Sr);
    return {
      centerDir: c.fwd,
      right: c.right,
      up: c.up,
      tanX: f,
      tanY: h
    };
  }
  function mi(i, s, c) {
    return hC(Nm(Nm(i.centerDir, Pm(i.right, s)), Pm(i.up, c)));
  }
  function Rd(i) {
    const s = ys(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: h }) => mi(s, f * s.tanX, h * s.tanY));
  }
  function $d(i, s, c) {
    const f = ys(i), h = (s * 2 - 1) * f.tanX, m = (1 - c * 2) * f.tanY;
    return mi(f, h, m);
  }
  function Vd(i) {
    const s = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: J((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function vb(i) {
    var k, A, C, P;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const c = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.scale) || 1)), h = Number(((A = i == null ? void 0 : i.transform) == null ? void 0 : A.rot_deg) || 0), m = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.du) || 0), y = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((D) => ls(cs(D, c, f, h), m, y));
  }
  function _b(i) {
    const s = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, h = `${s}:${p.mode}:${pa()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (p.mode === "frame") {
      const m = He(), y = m ? tn(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function wb(i) {
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
      Jr(f),
      sr(i) && xi(i.clip, p.frame)
    ].join(":");
    if (p.mode === "frame") {
      const m = He(), y = m ? tn(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function zd() {
    var i, s;
    return ((s = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function xb() {
    return zd() ? `${Ud()}:mask_display` : "";
  }
  function jd(i) {
    if (!p.showMask) return i;
    const s = zd();
    if (!s) return i;
    const c = xb(), f = i.reduce((y, _) => Math.max(y, Number((_ == null ? void 0 : _.zIndex) || 0)), -1), h = (Array.isArray(v.stickers) ? v.stickers : []).reduce((y, _) => Math.max(y, Number((_ == null ? void 0 : _.z_index) || 0)), -1), m = Math.max(f, h);
    return i.push({
      id: "mask_display",
      source: s,
      revision: c,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Sb() {
    var f, h;
    const i = ac(!0), s = hb(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const _ = ((h = (f = p.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : h.call(f, y)) || null;
        if (!_) continue;
        c.push({
          id: `paint_group:${y}`,
          source: _,
          revision: `${Ud()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, _ = on((y == null ? void 0 : y.id) || m.id || "");
        if (!_) continue;
        const k = Td(y, () => de());
        if (!k) continue;
        const A = gb(k, m, s), C = (y == null ? void 0 : y.transform) || {};
        c.push({
          id: `raster:${_}`,
          source: A,
          revision: [
            ma(),
            (s == null ? void 0 : s.key) || "",
            _,
            Number(C.du || 0).toFixed(6),
            Number(C.dv || 0).toFixed(6),
            Number(C.rot_deg || 0).toFixed(3),
            Number(C.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return jd(c);
  }
  function kb() {
    return (p.showObjects ? Sb() : jd([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function wo() {
    return fo || (fo = Mb()), fo;
  }
  function Mb() {
    const i = Sc(), s = kb(), c = { ...v.assets };
    for (const P of S ? [] : v.stickers) {
      const D = String((P == null ? void 0 : P.asset_id) || "");
      D && !c[D] && Be.has(D) && (c[D] = { type: "comfy_image", filename: D });
    }
    const f = S ? v.stickers.map((P) => rc(P) ? { ...P, source: { kind: "file", filename: da(P) } } : P) : v.stickers, h = JSON.stringify([f, Object.keys(c), v.scene]);
    yr.key !== h && (yr = { key: h, sceneState: so({ ...v, stickers: f, assets: c, painting: null }) });
    const m = ar ? Qy() : null, y = (P) => {
      if (ar && Vt(P)) return m;
      const D = wc(P);
      return D ? { media: D, revision: hc(D) } : null;
    }, _ = p.showObjects ? S0(yr.sceneState, p.frame, v.stickers, { media: y, paintLayers: s }) : s.map((P) => ({ kind: "erp", ...P })), k = i && (i === Y || i === $t) ? Y.dataset.panoSrc : i, A = p.showPanorama && kc(i) ? { media: i, revision: hc(i), coverage: Gn(v.coverage), source: k } : null, C = bo() ? Nb(yr.sceneState, y) : null;
    return { background: A, layers: _, space: C };
  }
  function Nb(i, s) {
    const c = Hf(i, p.frame), f = Id(), h = CS(f, c.scene), m = h != null && h.url ? Bt.sceneBox(h.url) : null, y = m && FS(h.kind, m), _ = p.showObjects ? GS(i, p.frame, v.stickers, { media: s }) : [], k = DS(LS(c, y, _));
    return { grid: p.showGrid && !p.fullscreen ? VS((k == null ? void 0 : k.radius) || qi) : null, sceneUrls: f ? f.urls.filter(Boolean) : [], scene: h, stickers: _, sphere: k };
  }
  function Pb() {
    if (!Ce.backgroundDirty && Ce.backgroundWasVisible) return;
    const { background: i, layers: s, space: c } = wo(), f = se.width, h = se.height, m = Bt.render({
      width: f,
      height: h,
      camera: c ? $p(ua(), f, h, c.sphere) : Cd(),
      background: i,
      layers: s,
      space: c
    }), y = se.getContext("2d");
    y.clearRect(0, 0, f, h), !i && !s.length && !c ? (y.fillStyle = "#070707", y.fillRect(0, 0, f, h)) : m && y.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, h), Ce.backgroundWasVisible = !!m, Ce.backgroundDirty = !1, z = null;
  }
  function Hd(i, s, c, f) {
    const { background: h, layers: m } = wo();
    if (!h && !m.length) return !1;
    const y = Bt.render({ width: s.w, height: s.h, camera: nl(c), background: h, layers: m, owner: f });
    return y ? (i.drawImage(y.canvas, y.x, y.y, y.width, y.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function Ab(i) {
    const s = wo(), c = JSON.stringify([i, se.width, se.height, jp(s)]);
    if (c === z) return;
    const f = Bt.renderUnwrap({ width: i.w, height: i.h, ...s }), h = se.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, se.width, se.height), f && h.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), z = f ? c : null, Ce.backgroundWasVisible = !1;
  }
  function Cb(i = !1) {
    const s = I.width, c = I.height, f = pi();
    if (N.globalAlpha = 1, N.lineWidth = 1, i || N.clearRect(0, 0, s, c), ws(), Ab(f), p.showGrid && !p.fullscreen) {
      N.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = f.x + f.w * m / 16;
        N.beginPath(), N.moveTo(y, f.y), N.lineTo(y, f.y + f.h), N.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = f.y + f.h * m / 8;
        N.beginPath(), N.moveTo(f.x, y), N.lineTo(f.x + f.w, y), N.stroke();
      }
      N.strokeStyle = "rgba(250, 250, 250, 0.86)", N.lineWidth = 1.2, N.beginPath(), N.moveTo(f.x, f.y + f.h / 2), N.lineTo(f.x + f.w, f.y + f.h / 2), N.stroke(), N.fillStyle = "rgba(250, 250, 250, 0.42)", N.font = "500 11px Geist, sans-serif", N.textAlign = "center";
      const h = f.y + f.h * 0.57;
      N.fillText("Left", f.x + f.w * 0.25, h), N.fillText("Front", f.x + f.w * 0.5, h), N.fillText("Right", f.x + f.w * 0.75, h), N.fillText("Back", f.x + 38, h), N.fillText("Back", f.x + f.w - 38, h);
    }
  }
  function Gd(i, s, c = 1) {
    let f = !1;
    N.strokeStyle = s, N.lineWidth = c, N.beginPath();
    for (const h of i) {
      const m = fa(h);
      if (!m) {
        f = !1;
        continue;
      }
      f ? N.lineTo(m.x, m.y) : (N.moveTo(m.x, m.y), f = !0);
    }
    N.stroke();
  }
  function Ib(i = !1) {
    const s = I.width, c = I.height;
    if (i || N.clearRect(0, 0, s, c), ws(), Pb(), p.showGrid && !p.fullscreen && wo().space)
      Eb();
    else if (p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push($n(h, y));
        Gd(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push($n(y, h));
        Gd(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: $n(-90, 0) },
        { name: "Front", dir: $n(0, 0) },
        { name: "Right", dir: $n(90, 0) },
        { name: "Back", dir: $n(180, 0) }
      ];
      N.fillStyle = "rgba(250, 250, 250, 0.42)", N.font = "500 11px Geist, sans-serif", N.textAlign = "center", f.forEach((h) => {
        const m = fa(h.dir);
        m && N.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function Eb() {
    const i = $p(ua(), I.width, I.height, ps()), s = MS(i, [0, 0, 0], I.width, I.height);
    s && (N.fillStyle = "rgba(255, 221, 87, 0.9)", N.font = "500 11px Geist, sans-serif", N.textAlign = "center", N.fillText("ERP origin", s.x, s.y - 12));
  }
  function Ob(i, s = null, c = null, f = null) {
    if (p.mode === "frame") {
      const h = s || He();
      if (!h) return [];
      const m = c || tn(h);
      return c1(i, h, m);
    }
    return Zd(i, f);
  }
  function bs(i, s = null, c = null, f = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const y = Zd([i], h);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = xo(i);
    return m ? Hr(m, s, c, f) : null;
  }
  function Fb(i, s) {
    const c = String(i.actionGroupId || i.id || "").trim(), f = cr(c, i.layerKind), h = ui(c, i.layerKind, f), m = (h == null ? void 0 : h.centerUv) || cc(c, i.layerKind, f), y = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = [], k = p.mode === "frame" ? He() : null, A = k ? tn(k) : null;
    for (const re of f) {
      const Se = (re == null ? void 0 : re.geometry) || null, Ge = (Se == null ? void 0 : Se.geometryKind) === "lasso_fill" ? Se == null ? void 0 : Se.points : (Se == null ? void 0 : Se.processedPoints) || (Se == null ? void 0 : Se.rawPoints) || (Se == null ? void 0 : Se.points) || [], Ue = Ob(Ge, k, A, y).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y));
      if (!Ue.length) continue;
      const nt = yi(String((re == null ? void 0 : re.toolKind) || "pen")), ye = Tn[nt] || Tn[Wr];
      _.push({
        points: Ue,
        closed: String((Se == null ? void 0 : Se.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((re == null ? void 0 : re.size) || 10) * Math.max(0.1, Number((ye == null ? void 0 : ye.sizeScale) ?? 1)) + 10),
        layerKind: String((re == null ? void 0 : re.layerKind) || i.layerKind || "paint")
      });
    }
    const C = bs(m, null, k, A, y);
    if (!C) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const D = Ey(h).map((re) => bs(re, C.x, k, A, y)).filter((re) => Number.isFinite(re == null ? void 0 : re.x) && Number.isFinite(re == null ? void 0 : re.y)).map((re) => ({ x: Number(re.x || 0), y: Number(re.y || 0) }));
    if (D.length < 4) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const W = (re, Se) => ({
      x: (Number((re == null ? void 0 : re.x) || 0) + Number((Se == null ? void 0 : Se.x) || 0)) * 0.5,
      y: (Number((re == null ? void 0 : re.y) || 0) + Number((Se == null ? void 0 : Se.y) || 0)) * 0.5,
      a: re,
      b: Se
    }), ne = W(D[0], D[1]), Z = W(D[1], D[2]), te = W(D[2], D[3]), ae = W(D[3], D[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(C.x || 0), y: Number(C.y || 0) },
      corners: D,
      edgeMidpoints: [
        { edge: "top", ...ne },
        { edge: "right", ...Z },
        { edge: "bottom", ...te },
        { edge: "left", ...ae }
      ],
      rotateStemBase: { x: ne.x, y: ne.y },
      rotateHandle: { x: ne.x, y: ne.y - 30 },
      strokePaths: _,
      visible: !0
    };
    return p._strokeGeomCache.set(s, he), he;
  }
  function Tb(i, s) {
    const c = p.mode === "frame" ? He() : null, f = c ? tn(c) : null, h = Vd(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, y = bs(h, null, c, f, m), k = vb(i).map((D) => bs(D, (y == null ? void 0 : y.x) ?? null, c, f, m)).filter((D) => Number.isFinite(D == null ? void 0 : D.x) && Number.isFinite(D == null ? void 0 : D.y));
    if (!Array.isArray(k) || k.length < 4) {
      const D = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(s, D), D;
    }
    const A = k.slice(0, 4).map((D) => ({ x: Number((D == null ? void 0 : D.x) || 0), y: Number((D == null ? void 0 : D.y) || 0) })), P = {
      kind: "rasterObject",
      center: {
        x: A.reduce((D, W) => D + Number(W.x || 0), 0) / A.length,
        y: A.reduce((D, W) => D + Number(W.y || 0), 0) / A.length
      },
      corners: A,
      visible: !0
    };
    return p._strokeGeomCache.set(s, P), P;
  }
  function Hr(i, s = null, c = null, f = null, h = {}) {
    if (p.mode === "frame") {
      const C = c || He(), P = f || tn(C);
      if (!C || !P) return null;
      const D = C ? ya(C, i) : null;
      return D ? {
        x: Number(P.x || 0) + Number(D.x || 0) * Number(P.w || 0),
        y: Number(P.y || 0) + Number(D.y || 0) * Number(P.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return Nc(i, s);
    const m = 1e-4, y = vc().project(i, m);
    if (!Number.isFinite(y.z) || y.z <= m && !(h != null && h.clipBehind)) return null;
    const _ = I.width, k = I.height, A = Math.max(_, k) * 2;
    return {
      x: J(y.x, -A, _ + A),
      y: J(y.y, -A, k + A),
      z: Math.max(y.z, m),
      rawZ: y.z,
      clipped: y.z <= m
    };
  }
  function Db(i, s = []) {
    if (p.mode !== "pano" || yt(i)) return 1;
    const c = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return c.length ? cC(0.035, 0.2, Math.min(...c)) : 1;
  }
  function Lb(i) {
    if (sr(i) && !xi(i.clip, p.frame)) return { visible: !1 };
    const s = Xt(i), c = $n(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = p.mode === "frame" ? He() : null, h = f ? tn(f) : null, m = p.mode === "pano" && (yt(i) || zn(i)), y = m ? { clipBehind: !0 } : null, _ = Hr(c, null, f, h, y);
    if (!_) return { visible: !1 };
    const k = ys(i), C = Rd(i).map((pe) => Hr(pe, _.x, f, h, y)).filter((pe) => Number.isFinite(pe == null ? void 0 : pe.x) && Number.isFinite(pe == null ? void 0 : pe.y));
    if (C.length < 4) return { visible: !1 };
    const P = mi(k, 0, k.tanY), D = mi(k, 0, k.tanY + Math.max(k.tanY * 0.43, 0.053)), W = Hr(P, _.x, f, h, y);
    if (!W) return { visible: !1 };
    const ne = Hr(D, (W == null ? void 0 : W.x) ?? _.x, f, h, y), Z = ((ne == null ? void 0 : ne.x) ?? W.x) - W.x, te = ((ne == null ? void 0 : ne.y) ?? W.y) - W.y, ae = Math.hypot(Z, te) || 1, he = {
      x: W.x + Z / ae * 30,
      y: W.y + te / ae * 30
    }, re = Hr(mi(k, 0, k.tanY), _.x, f, h, y), Se = Hr(mi(k, k.tanX, 0), _.x, f, h, y), Ge = Hr(mi(k, 0, -k.tanY), _.x, f, h, y), Ue = Hr(mi(k, -k.tanX, 0), _.x, f, h, y);
    if (!re || !Se || !Ge || !Ue) return { visible: !1 };
    const nt = [
      _,
      ...C,
      W,
      ne,
      re,
      Se,
      Ge,
      Ue
    ];
    if (m && !nt.some((pe) => Number((pe == null ? void 0 : pe.rawZ) ?? (pe == null ? void 0 : pe.z)) > 1e-4)) return { visible: !1 };
    const ye = Db(i, nt), ie = [
      {
        edge: "top",
        x: re.x,
        y: re.y,
        a: { x: C[0].x, y: C[0].y },
        b: { x: C[1].x, y: C[1].y }
      },
      {
        edge: "right",
        x: Se.x,
        y: Se.y,
        a: { x: C[1].x, y: C[1].y },
        b: { x: C[2].x, y: C[2].y }
      },
      {
        edge: "bottom",
        x: Ge.x,
        y: Ge.y,
        a: { x: C[2].x, y: C[2].y },
        b: { x: C[3].x, y: C[3].y }
      },
      {
        edge: "left",
        x: Ue.x,
        y: Ue.y,
        a: { x: C[3].x, y: C[3].y },
        b: { x: C[0].x, y: C[0].y }
      }
    ];
    return {
      center: { x: _.x, y: _.y },
      corners: C.map((pe) => ({ x: pe.x, y: pe.y })),
      edgeMidpoints: ie,
      rotateStemBase: { x: W.x, y: W.y },
      rotateHandle: he,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ye,
      visible: !0
    };
  }
  function qt(i) {
    if (en(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = Ry(h, i.layerKind), y = p._strokeGeomCache.get(m);
      return y || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Fb(i, m));
    }
    if (pn(i)) {
      const h = _b(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Tb(i, h));
    }
    const s = wb(i), c = p._strokeGeomCache.get(s);
    if (c) return c;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const f = Lb(i);
    return p._strokeGeomCache.set(s, f), f;
  }
  function vs(i, s, c, f = null) {
    const h = [];
    for (let m = 0; m <= c; m += 1) {
      const y = m / c;
      let _ = 0, k = 0;
      s === 0 ? (_ = y, k = 0) : s === 1 ? (_ = 1, k = y) : s === 2 ? (_ = 1 - y, k = 1) : (_ = 0, k = 1 - y);
      const A = $d(i, _, k), C = p.mode === "unwrap" ? Nc(A, f) : fa(A);
      C && h.push(C);
    }
    return h;
  }
  function Rb(i, s) {
    const c = Xt(i), f = $n(Number(c.yaw_deg || 0), Number(c.pitch_deg || 0)), h = p.mode === "unwrap" ? Nc(f) : null, m = h ? h.x : null, y = p.mode === "pano" ? 28 : 20, _ = [
      vs(i, 0, y, m),
      vs(i, 1, y, m),
      vs(i, 2, y, m),
      vs(i, 3, y, m)
    ];
    rd(N, _, { selected: s });
  }
  function $b() {
    const i = [...Array.isArray(v.shots) ? v.shots : []], s = [...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(c.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Pc() {
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
  function Kd(i, s, c) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const h = J(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = N.globalAlpha;
    N.globalAlpha = m * h;
    const y = c ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", _ = c ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", k = s ? 3.2 : 2.6;
    _s(N, f), N.fillStyle = _, N.fill(), N.strokeStyle = y, N.lineWidth = k, N.stroke(), N.save(), N.strokeStyle = y, N.lineWidth = s ? 3.2 : 2.6, N.lineCap = "round";
    const A = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], C = { top: "bottom", right: "left", bottom: "top", left: "right" }, P = s ? 12 : 9;
    A.forEach((D) => {
      const ne = A.find((he) => (he == null ? void 0 : he.edge) === C[D == null ? void 0 : D.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, Z = ne.x - D.x, te = ne.y - D.y, ae = Math.hypot(Z, te) || 1;
      N.beginPath(), N.moveTo(D.x, D.y), N.lineTo(D.x + Z / ae * P, D.y + te / ae * P), N.stroke();
    }), N.restore(), N.globalAlpha = m;
  }
  function Vb(i, s, c, f) {
    const h = J(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (zn(i)) {
      Kd(s, c, f);
      return;
    }
    if (yt(i)) {
      const y = N.globalAlpha;
      N.globalAlpha = y * Gy(i) * h, p.mode === "frame" ? (N.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", N.lineWidth = c ? 2 : 1, _s(N, s.corners), N.stroke()) : Rb(i, c), N.globalAlpha = y;
      return;
    }
    const m = N.globalAlpha;
    N.globalAlpha = m * h, N.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", _s(N, s.corners), N.fill(), N.strokeStyle = c ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", N.lineWidth = c ? 2.8 : 1.9, _s(N, s.corners), N.stroke(), N.globalAlpha = m;
  }
  function Bd(i, s, c) {
    if (yt(i)) {
      ly(N, s, { accent: c });
      return;
    }
    N.fillStyle = c, s.corners.forEach((f) => {
      N.beginPath(), N.arc(f.x, f.y, 6.5, 0, Math.PI * 2), N.fill();
    }), zn(i) && (N.strokeStyle = c, N.lineCap = "round", N.lineWidth = 4, s.edgeMidpoints.forEach((f) => {
      var C, P, D, W;
      const h = (((C = f.b) == null ? void 0 : C.x) ?? f.x) - (((P = f.a) == null ? void 0 : P.x) ?? f.x), m = (((D = f.b) == null ? void 0 : D.y) ?? f.y) - (((W = f.a) == null ? void 0 : W.y) ?? f.y), y = Math.hypot(h, m) || 1, _ = h / y, k = m / y, A = 10;
      N.beginPath(), N.moveTo(f.x - _ * A, f.y - k * A), N.lineTo(f.x + _ * A, f.y + k * A), N.stroke();
    }), N.lineCap = "butt"), en(i) || (N.strokeStyle = "rgba(250, 250, 250, 0.9)", N.lineWidth = 1.8, N.beginPath(), N.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), N.lineTo(s.rotateHandle.x, s.rotateHandle.y), N.stroke(), N.fillStyle = c, N.beginPath(), N.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), N.fill());
  }
  function zb() {
    var m;
    const i = p.mode === "frame" ? [] : ur(), s = i.length > 1, c = t === "cutout" ? $b() : dn(), f = c.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${zn(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== c || p._sortedItemsCache.orderKey !== f) && (p._sortedItemsCache = {
      src: c,
      orderKey: f,
      sorted: [...c]
    });
    const h = p._sortedItemsCache.sorted;
    for (const y of h) {
      const _ = p.mode !== "frame" && !s && yd(y);
      if (p.mode === "frame" && !_ || !p.showObjects && !zn(y)) continue;
      const k = yt(y), A = zn(y), C = Sn(y);
      if (!k && !A || sr(y) && !xi(y.clip, p.frame)) continue;
      const P = qt(y);
      if (t !== "stickers" && !P.visible)
        continue;
      const D = J(Number((P == null ? void 0 : P.visibilityAlpha) ?? 1), 0, 1);
      if (D <= 0.01) continue;
      const W = A && t === "cutout" && p.mode === "pano" ? J(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (N.save(), N.globalAlpha *= W, Vb(y, P, _, C), _ && P.visible) {
        const ne = C ? "#ff4d4f" : k && Vt(y) ? "#f59e0b" : "#0070f3", Z = N.globalAlpha;
        N.globalAlpha = Z * D, Bd(y, P, ne), N.globalAlpha = Z;
      }
      N.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !He() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const y = p.cutoutPanoFrameVisual, _ = J(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      N.save(), N.globalAlpha *= _, Kd(y.geom, y.selected, y.locked), y.selected && Bd(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), N.restore();
    }
    if (s) {
      const y = us(i);
      if (y != null && y.visible) {
        const _ = uc(i) ? "#ff4d4f" : "#0070f3";
        N.save(), N.strokeStyle = "rgba(255, 255, 255, 0.95)", N.lineWidth = 2, N.setLineDash([6, 4]), N.beginPath(), N.moveTo(y.corners[0].x, y.corners[0].y);
        for (let k = 1; k < y.corners.length; k += 1) N.lineTo(y.corners[k].x, y.corners[k].y);
        N.closePath(), N.stroke(), N.setLineDash([]), N.fillStyle = _, y.corners.forEach((k) => {
          N.beginPath(), N.arc(k.x, k.y, 6.5, 0, Math.PI * 2), N.fill();
        }), N.restore();
      }
    } else
      i.forEach((y) => {
        if (!en(y) && !pn(y)) return;
        const _ = qt(y);
        if (!(_ != null && _.visible)) return;
        const k = Sn(y) ? "#ff4d4f" : "#0070f3";
        N.save(), N.strokeStyle = "rgba(255, 255, 255, 0.95)", N.lineWidth = 2, N.setLineDash([6, 4]), N.beginPath(), N.moveTo(_.corners[0].x, _.corners[0].y);
        for (let A = 1; A < _.corners.length; A += 1) N.lineTo(_.corners[A].x, _.corners[A].y);
        N.closePath(), N.stroke(), N.setLineDash([]), N.fillStyle = k, _.corners.forEach((A) => {
          N.beginPath(), N.arc(A.x, A.y, 6.5, 0, Math.PI * 2), N.fill();
        }), N.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = _h(p.interaction.start, p.interaction.current);
      N.save(), N.strokeStyle = "rgba(255, 255, 255, 0.9)", N.fillStyle = "rgba(255, 255, 255, 0.08)", N.lineWidth = 1, N.setLineDash([5, 4]), N.beginPath(), N.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), N.fill(), N.stroke(), N.restore();
    }
  }
  function Wd(i, s = !1) {
    const c = J(no(i), 0.05, 20), f = s ? 320 : 220;
    return c >= 1 ? { width: f, height: Math.max(1, Math.round(f / c)) } : { width: Math.max(1, Math.round(f * c)), height: f };
  }
  function jb(i) {
    if (!ci || !i) return !1;
    const s = ci.closest(".pano-camera-preview");
    if (!s) return !1;
    const c = Math.round(Number(s.clientWidth || ci.clientWidth || 0)), f = Math.round(Number(s.clientHeight || ci.clientHeight || 0));
    return Math.abs(c - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function Hb() {
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
    const c = Wd(i, !!p.outputPreviewExpanded);
    E.cameraPreview.width = c.width, E.cameraPreview.height = c.height;
    const f = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(c.width * f)), h: Math.max(1, Math.round(c.height * f)) };
    (L.width !== h.w || L.height !== h.h) && (L.width = h.w, L.height = h.h);
    const m = JSON.stringify([h, si(i), jp(wo())]);
    let y = m === ho;
    if (y || (s.clearRect(0, 0, h.w, h.h), y = Hd(s, h, i, "camera_preview"), ho = y ? m : null), !y) {
      E.cameraPreview.ready = !1, E.cameraPreview.label = Sc() ? "Loading preview" : "Connect ERP image", E.cameraPreview.settled = !1;
      return;
    }
    const _ = jb(c);
    E.cameraPreview.ready = !0, E.cameraPreview.label = _ ? "" : "Loading preview", E.cameraPreview.settled = _ && Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame;
  }
  function Ac(i, s) {
    if (!i || !s) return null;
    const c = Number(s.x || 0), f = Number(s.y || 0);
    return $d(i, c, f);
  }
  function xo(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(c);
    return nc(f * Math.sin(s), Math.sin(c), f * Math.cos(s));
  }
  function Gb(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function Kb(i, s, c, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: mn(i, "widthScale", 1),
      pressureLike: mn(i, "pressureLike", 1)
    }, ...f, u: s, v: c };
  }
  function Bb(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Cc(i, s, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (f) {
      let Z = null;
      i.forEach((te) => {
        const ae = Number((te == null ? void 0 : te.u) || 0), he = Number((te == null ? void 0 : te.v) || 0), re = (ae % 1 + 1) % 1, Se = Z == null ? re : Z + qn(re, (Z % 1 + 1) % 1);
        h.set(te, { x: Se, y: he }), Z = Se;
      });
    }
    const m = (Z) => !Z || typeof Z != "object" ? { x: 0, y: 0 } : h.get(Z) || Gb(Z), y = (Z, te, ae, he = {}) => {
      const re = f ? (Number(te) % 1 + 1) % 1 : Number(te), Se = Kb(Z, re, ae, he);
      return h.set(Se, { x: Number(te), y: Number(ae) }), Se;
    }, _ = (Z, te, ae) => {
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
    const k = Bb(s, c), A = (Z, te) => {
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
        re.push(_(Z[Se], Z[Se + 1], J((ie - pe) / Re, 0, 1)));
      }
      const Ge = Z[Z.length - 1], Ue = m(Ge), nt = re[re.length - 1], ye = nt ? m(nt) : null;
      return (!ye || Math.hypot(ye.x - Ue.x, ye.y - Ue.y) > te * 0.35) && re.push(y(Ge, Ue.x, Ue.y)), re;
    }, C = (Z) => {
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
    }, P = A(i, k);
    if (P.length < 3) return P;
    const D = c ? 2 : 1;
    let W = P.slice();
    for (let Z = 0; Z < D; Z += 1) W = C(W);
    return A(W, Math.max(k * 0.75, 55e-5));
  }
  function mn(i, s, c = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : c;
  }
  function Wb(i) {
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
  function ha(i, s, c = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const h = f.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, f.width, f.height), h.imageSmoothingEnabled = !0), { canvas: f, ctx: h };
  }
  function pa() {
    const i = ga();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ma() {
    const i = ga();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Ud() {
    const i = sc(), s = ma();
    return i ? `${s}:${i}` : s;
  }
  function Ub() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function Yb() {
    p.paintCompositeRevision += 1;
  }
  function Xb() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function Yd() {
    var i, s;
    p.paintEngineRevisionKey = null, (s = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, v), p.paintEngineRevisionKey = pa();
  }
  function Xd() {
    v.painting_layer !== null && (v.painting_layer = null), ms = "";
  }
  function Wt() {
    Xb(), Ce.backgroundDirty = !0, Ce.dirty = !0;
  }
  function fr({ rebuildPaintEngine: i = !1 } = {}) {
    Xd(), Ub(), Wt(), i && Yd();
  }
  function So() {
    Xd(), Yb(), Wt();
  }
  function ws() {
    var f;
    const i = ga(), s = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== s && (p.paintEngine = ju(i), p.paintEngineDescriptorKey = s, p.paintEngineRevisionKey = "");
    const c = pa();
    p.paintEngineRevisionKey !== c && (p.paintEngineRevisionKey = c, (f = p.paintEngine) == null || f.rebuildCommitted(v));
  }
  function ga() {
    const i = Math.max(1, M(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function jn() {
    return ga();
  }
  function qb(i, s, c, f, h = null) {
    const m = Wb(i), y = mn(s, "widthScale", 1) * mn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * y) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Sr) * c * y) : Math.max(0.5, m.value / (2 * Math.PI) * c * y) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * y);
  }
  function Jb(i, s, c = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), h = String((s == null ? void 0 : s.toolKind) || "pen"), m = c.preview === !0, y = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * y : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const _ = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, k = m ? Math.max(0.28, Number(_.a ?? 1) * 0.88) : Math.max(0.12, Number(_.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(_.r || 0) * 255)}, ${Math.round(Number(_.g || 0) * 255)}, ${Math.round(Number(_.b || 0) * 255)}, ${k})`;
  }
  function Zb(i, s, c) {
    const f = Math.max(0.5, Math.min(c, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function Qb(i, s, c, f, h = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), Jb(i, c, h);
    const y = (_) => Zb(i, _, m);
    if (s.length === 1) {
      y(s[0]), i.restore();
      return;
    }
    for (let _ = 0; _ < s.length - 1; _ += 1) {
      const k = s[_], A = s[_ + 1];
      if (!k || !A) continue;
      const C = Number(k.x || 0), P = Number(k.y || 0), D = Number(A.x || 0), W = Number(A.y || 0), ne = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5))), Z = Math.max(0.5, Math.min(m, Number(A.radiusPx || 0.5)));
      if (!Number.isFinite(C) || !Number.isFinite(P) || !Number.isFinite(D) || !Number.isFinite(W) || !Number.isFinite(ne) || !Number.isFinite(Z)) continue;
      const te = D - C, ae = W - P, he = Math.hypot(te, ae);
      if (!Number.isFinite(he) || he < 1e-6) {
        y(k);
        continue;
      }
      if (he > Math.max(f.w, f.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(ne, Z)), Se = Math.max(0.35, Math.min(re * 0.4, 2.25)), Ge = Math.max(1, Math.ceil(he / Se));
      for (let Ue = 0; Ue <= Ge; Ue += 1) {
        const nt = Ue / Ge;
        y({
          x: Qn(C, D, nt),
          y: Qn(P, W, nt),
          radiusPx: Qn(ne, Z, nt)
        });
      }
    }
    y(s[s.length - 1]), i.restore();
  }
  function e1(i, s, c, f) {
    Qb(i, s, c, f, { preview: !1 });
  }
  function t1(i, s, c, f, h) {
    var _, k, A, C;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", y = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const P = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(P.r || 0) * 255)}, ${Math.round(Number(P.g || 0) * 255)}, ${Math.round(Number(P.b || 0) * 255)}, ${Number(P.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((_ = s[0]) == null ? void 0 : _[m]) || 0) * f.w, Number(((k = s[0]) == null ? void 0 : k[y]) || 0) * f.h);
    for (let P = 1; P < s.length; P += 1)
      i.lineTo(Number(((A = s[P]) == null ? void 0 : A[m]) || 0) * f.w, Number(((C = s[P]) == null ? void 0 : C[y]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function qd(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function n1(i, s) {
    const c = qd(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: qb(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Jd(i, s, c = null) {
    var _, k, A, C;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = c || { w: Number(((_ = i.canvas) == null ? void 0 : _.width) || 0), h: Number(((k = i.canvas) == null ? void 0 : k.height) || 0) }, h = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((A = s == null ? void 0 : s.geometry) == null ? void 0 : A.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((C = s == null ? void 0 : s.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill")
      return t1(i.ctx, qd(h), h, f), !0;
    const y = n1(h, f);
    return y.length ? (e1(i.ctx, y, h, f), !0) : !1;
  }
  function r1(i, s, c, f = 8) {
    const h = new Uint8Array(s * c), m = [], y = new Int32Array(s * c), _ = new Int32Array(s * c);
    for (let k = 0; k < c; k += 1)
      for (let A = 0; A < s; A += 1) {
        const C = k * s + A;
        if (h[C] || i[C] <= f) continue;
        let P = 0, D = 0;
        y[D] = A, _[D] = k, D += 1, h[C] = 1;
        const W = [];
        let ne = A, Z = k, te = A, ae = k;
        for (; P < D; ) {
          const he = y[P], re = _[P];
          P += 1, W.push({ x: he, y: re }), he < ne && (ne = he), re < Z && (Z = re), he > te && (te = he), re > ae && (ae = re);
          const Se = [
            [(he - 1 + s) % s, re],
            [(he + 1) % s, re],
            [he, re - 1],
            [he, re + 1]
          ];
          for (const [Ge, Ue] of Se) {
            if (Ue < 0 || Ue >= c) continue;
            const nt = Ue * s + Ge;
            h[nt] || i[nt] <= f || (h[nt] = 1, y[D] = Ge, _[D] = Ue, D += 1);
          }
        }
        m.push({ pixels: W, minX: ne, minY: Z, maxX: te, maxY: ae });
      }
    return m;
  }
  function i1(i, s) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((k) => Number((k == null ? void 0 : k.x) || 0)).filter((k) => Number.isFinite(k)))].sort((k, A) => k - A);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let f = -1, h = 0;
    for (let k = 0; k < c.length; k += 1) {
      const A = c[k], P = (k === c.length - 1 ? c[0] + s : c[k + 1]) - A - 1;
      P > f && (f = P, h = k);
    }
    const m = (c[(h + 1) % c.length] + s) % s;
    let y = 1 / 0, _ = -1 / 0;
    for (const k of c) {
      const A = (k - m + s) % s;
      y = Math.min(y, A), _ = Math.max(_, A);
    }
    return {
      startX: m,
      widthPx: Math.max(1, _ - y + 1)
    };
  }
  function o1(i, s, c = {}) {
    var A;
    const f = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (A = i == null ? void 0 : i.getContext) == null ? void 0 : A.call(i, "2d");
    if (!m || f < 1 || h < 1) return [];
    const y = m.getImageData(0, 0, f, h), _ = new Uint8Array(f * h);
    for (let C = 0; C < _.length; C += 1) _[C] = y.data[C * 4 + 3];
    return r1(_, f, h, 8).map((C, P) => {
      const D = i1(C, f);
      if (!D) return null;
      const W = Number(D.widthPx || 0), ne = C.maxY - C.minY + 1, Z = Number(D.startX || 0), te = document.createElement("canvas");
      te.width = W, te.height = ne;
      const ae = te.getContext("2d");
      if (!ae) return null;
      const he = ae.createImageData(W, ne);
      return C.pixels.forEach(({ x: re, y: Se }) => {
        const Ge = (Se * f + re) * 4, Ue = (Number(re || 0) - Z + f) % f, nt = ((Se - C.minY) * W + Ue) * 4;
        he.data[nt + 0] = y.data[Ge + 0], he.data[nt + 1] = y.data[Ge + 1], he.data[nt + 2] = y.data[Ge + 2], he.data[nt + 3] = y.data[Ge + 3];
      }), ae.putImageData(he, 0, 0), {
        id: Fo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + P * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: C.minY / h,
          u1: W / f,
          v1: (C.maxY + 1) / h
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
  function ya(i, s) {
    if (!i || !s) return null;
    const c = ys(i), f = Nu(s, c.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const h = Nu(s, c.right) / f, m = Nu(s, c.up) / f;
    return {
      x: (h / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function a1(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const c = pi();
      return i.map((f) => ({
        x: c.x + Number(f.u || 0) * c.w,
        y: c.y + Number(f.v || 0) * c.h
      }));
    }
    const s = i.map((c) => fa(xo(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Zd(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const f = pi();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, y = s == null ? m : Number(s || 0) + qn(m, s);
        return {
          x: f.x + y * f.w,
          y: f.y + Number(h.v || 0) * f.h
        };
      });
    }
    const c = i.map((f) => fa(xo(f))).filter(Boolean);
    return c.every((f) => Number(f.z || 0) > 0) ? c.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function s1(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const f = i[c], h = i[(c + 1) % i.length];
      if (!f || !h || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(f.x), Number(h.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function l1(i, s, c) {
    if (!Array.isArray(i) || i.length < 3 || !s || !c) return [];
    const f = [];
    for (const h of i) {
      const m = xo(h), y = ya(s, m);
      if (!y) return [];
      f.push({
        x: Number(c.x || 0) + Number(y.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(y.y || 0) * Number(c.h || 0)
      });
    }
    return s1(f, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? f : [];
  }
  function c1(i, s, c) {
    if (!Array.isArray(i) || i.length < 1 || !s || !c) return [];
    const f = [];
    for (const h of i) {
      const m = xo(h), y = ya(s, m);
      y && f.push({
        x: Number(c.x || 0) + Number(y.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(y.y || 0) * Number(c.h || 0)
      });
    }
    return f;
  }
  function u1() {
    const i = He(), s = Dc(i);
    if (!i || !s) return !1;
    const c = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: h } = zS(i, s, { width: I.width, height: I.height }), m = f1(c);
    return N.save(), N.fillStyle = "#0a0a0a", N.fillRect(0, 0, I.width, I.height), Hd(N, f, h) || (N.fillStyle = "rgba(255, 255, 255, 0.03)", N.fillRect(f.x, f.y, f.w, f.h)), N.restore(), N.save(), N.fillStyle = "rgba(0, 0, 0, 0.58)", N.beginPath(), N.rect(0, 0, I.width, I.height), N.roundRect(c.x, c.y, c.w, c.h, m), N.fill("evenodd"), N.restore(), N.save(), N.strokeStyle = JA, N.globalAlpha = 0.62, N.lineWidth = 2, N.beginPath(), N.roundRect(c.x + 1, c.y + 1, c.w - 2, c.h - 2, Math.max(0, m - 1)), N.stroke(), N.restore(), !0;
  }
  function f1(i) {
    const s = Math.max(1e-6, Number(Ce.frameCanvasScale || 1));
    return Math.min(ve * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Gr() {
    var s;
    const i = p.mode === "frame" ? He() : null;
    E.frameRollKnob.visible = !!i && !r && i.locked !== !0, E.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), E.frameRollKnob.displayValue = Oo(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((s = p.interaction) == null ? void 0 : s.kind) === "roll_frame", E.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function d1() {
    var k, A;
    if (((k = p.interaction) == null ? void 0 : k.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, s = (A = i == null ? void 0 : i.geometry) == null ? void 0 : A.points;
    let c;
    if (p.mode === "frame") {
      const C = He(), P = tn(C);
      c = l1(s, C, P);
    } else
      c = a1(s);
    if (!Array.isArray(c) || c.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), y = Math.round(Number(h.g || 0) * 255), _ = Math.round(Number(h.b || 0) * 255);
    N.save(), N.beginPath(), N.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let C = 1; C < c.length; C++) N.lineTo(Number(c[C].x || 0), Number(c[C].y || 0));
    N.closePath(), f ? (N.lineWidth = 2, N.setLineDash([6, 6]), N.lineDashOffset = 0, N.strokeStyle = "rgba(0,0,0,0.96)", N.stroke(), N.lineDashOffset = -6, N.strokeStyle = "rgba(255,255,255,0.96)", N.stroke(), N.setLineDash([]), N.lineDashOffset = 0) : (N.lineWidth = 1.5, N.setLineDash([6, 4]), N.strokeStyle = `rgba(${m},${y},${_},1)`, N.stroke(), N.setLineDash([])), N.restore();
  }
  function h1() {
    const i = p.frameRollOverlayVisual, s = J(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const c = tn(i.shot);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * Sr, m = Math.hypot(c.w, c.h) * 0.55, y = Math.cos(h) * m, _ = Math.sin(h) * m;
    N.save(), N.globalAlpha *= s, N.beginPath(), N.rect(c.x, c.y, c.w, c.h), N.clip(), N.translate(f.x, f.y), N.rotate(h);
    const k = Math.max(12, Math.min(c.w, c.h) / 6);
    N.beginPath();
    for (let A = -m; A <= m; A += k)
      N.moveTo(A, -m), N.lineTo(A, m);
    for (let A = -m; A <= m; A += k)
      N.moveTo(-m, A), N.lineTo(m, A);
    N.lineWidth = 1, N.strokeStyle = "rgba(255, 255, 255, 0.22)", N.stroke(), N.setTransform(1, 0, 0, 1, 0, 0), N.beginPath(), N.moveTo(f.x - y, f.y - _), N.lineTo(f.x + y, f.y + _), N.lineWidth = 1.5, N.setLineDash([8, 6]), N.strokeStyle = "rgba(255, 255, 255, 0.92)", N.shadowColor = "rgba(0, 0, 0, 0.8)", N.shadowBlur = 3, N.stroke(), N.setLineDash([]), N.restore();
  }
  function p1() {
    return t !== "cutout" || !He() ? 0 : eC;
  }
  function m1() {
    const i = J(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const s = He(), c = s ? qt(s) : null, f = Array.isArray(c == null ? void 0 : c.corners) && c.corners.length >= 4 ? c.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    c != null && c.visible && f && (p.cutoutPanoDimCorners = f), s && (c != null && c.visible) && f && (p.cutoutPanoFrameVisual = {
      item: s,
      geom: c,
      selected: yd(s),
      locked: Sn(s)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = c != null && c.visible ? f : h ? p.cutoutPanoDimCorners || [] : [];
    if (N.save(), N.fillStyle = `rgba(0, 0, 0, ${i})`, N.beginPath(), N.rect(0, 0, I.width, I.height), m.length >= 4) {
      N.moveTo(m[0].x, m[0].y);
      for (let y = 1; y < 4; y += 1) N.lineTo(m[y].x, m[y].y);
      N.closePath();
    }
    N.fill("evenodd"), N.restore();
  }
  function Qd() {
    fo = null, p.mode === "frame" ? (Ce.frameSafeRect = W1(), u1()) : p.mode === "unwrap" ? Cb(!1) : Ib(!1), m1(), t === "cutout" && Hb(), zb(), Gr(), d1(), h1(), E.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Xe(), Ce.hasPresentedFrame || (Ce.hasPresentedFrame = !0, se.style.opacity = "1"), t === "cutout" && E.cameraPreview && (E.cameraPreview.settled = Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame && p.mode !== "frame");
    const i = bb();
    E.stageStatus = i.status, E.stageStatusDetail = i.detail, i.status === pr ? (le == null || le.removeAttribute("data-stage-ready"), le == null || le.setAttribute("data-stage-loading-kind", i.detail)) : (le == null || le.setAttribute("data-stage-ready", ""), le == null || le.removeAttribute("data-stage-loading-kind"));
  }
  function g1(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function y1() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Ly();
  }
  function de(i = {}) {
    var _, k, A, C, P, D, W, ne, Z, te;
    const s = !!i.localOnly, c = i.externalSync === !0, f = String(i.cause || ""), h = String(((_ = p.interaction) == null ? void 0 : _.kind) || "");
    (!s || h === "view" || h === "pan_frame" || g1() || !!((k = p.viewTween) != null && k.active) || f === "mode" || f === "frame_view" || f === "cutout_frame") && (Ce.backgroundDirty = !0), s && hd() && (p.livePaintInteractionRevision += 1, Ce.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (yc(), jr()), y1(), c && ((C = (A = e.__panoDomPreview) == null ? void 0 : A.requestDraw) == null || C.call(A), (P = e.setDirtyCanvas) == null || P.call(e, !0, !1)), c && !s && ((W = (D = e.graph) == null ? void 0 : D.setDirtyCanvas) == null || W.call(D, !0, !0), (te = (Z = (ne = Or) == null ? void 0 : ne.canvas) == null ? void 0 : Z.setDirty) == null || te.call(Z, !0, !0)), Ce.dirty = !0;
  }
  function eh() {
    const i = I.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return I.width !== s || I.height !== c || se.width !== s || se.height !== c ? (I.width = s, I.height = c, se.width = s, se.height = c, Ce.backgroundDirty = !0, Ce.dirty = !0, t === "cutout" && (Ce.pendingStableLayoutFrames = Math.max(Number(Ce.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function b1(i = performance.now()) {
    var m, y;
    Ce.lastTickTs = i;
    const s = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    s != null && s.shot && (p.frameRollOverlayVisual = { shot: s.shot });
    const c = s ? 1 : 0;
    if (Math.abs(c - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = c, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - c) > 1e-6) {
      const _ = J(
        (i - Number(p.frameRollOverlayStartTs || i)) / tC,
        0,
        1
      );
      p.frameRollOverlayAlpha = Qn(
        Number(p.frameRollOverlayFrom || 0),
        c,
        Gs(_)
      ), _ >= 1 && (p.frameRollOverlayAlpha = c, c === 0 && (p.frameRollOverlayVisual = null)), Ce.dirty = !0;
    }
    const f = p1();
    if (Math.abs(f - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = f, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const _ = J(
        (i - Number(p.cutoutPanoDimStartTs || i)) / km,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Qn(
        Number(p.cutoutPanoDimFrom || 0),
        f,
        Gs(_)
      ), _ >= 1 && (p.cutoutPanoDimAlpha = f), _ >= 1 && f === 0 && (p.cutoutPanoDimCorners = null), Ce.dirty = !0;
    }
    const h = t === "cutout" && He() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const _ = J(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / km,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Qn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        Gs(_)
      ), _ >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), Ce.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const _ = Math.max(1, Number(p.outputPreviewAnimDurationMs)), k = J((i - Number(p.outputPreviewAnimStartTs || 0)) / _, 0, 1), C = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? lC(k) : dC(k);
      p.outputPreviewAnim = Qn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, C), Ce.dirty = !0, k >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((y = p.viewTween) != null && y.active) {
      const _ = p.viewTween, k = J((i - _.startTs) / _.durationMs, 0, 1), A = Gs(k);
      p.viewYaw = jt(_.startYaw + _.deltaYaw * A), p.viewPitch = _.startPitch + (_.targetPitch - _.startPitch) * A, p.viewFov = _.startFov + (_.targetFov - _.startFov) * A, Ce.backgroundDirty = !0, Ce.dirty = !0, k >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(an.state.inertia.vx || 0), p.viewInertia.vy = Number(an.state.inertia.vy || 0), p.viewInertia.active = !!an.state.inertia.active, an.stepInertia(i) && (p.viewInertia.vx = Number(an.state.inertia.vx || 0), p.viewInertia.vy = Number(an.state.inertia.vy || 0), p.viewInertia.active = !!an.state.inertia.active, Ce.backgroundDirty = !0, Ce.dirty = !0), Ce.pendingStableLayoutFrames > 0 && (Ce.pendingStableLayoutFrames -= 1, Ce.dirty = !0), Ce.dirty) {
      if (Ce.pendingStableLayoutFrames > 0)
        return;
      Ce.dirty = !1, Qd();
    }
  }
  function th(i) {
    try {
      i();
    } catch (s) {
      const c = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Ce.tickErrorSignature !== c && (Ce.tickErrorSignature = c, console.error("[PanoramaStickers] editor frame failed", s)), E.stageStatus = tr, E.stageStatusDetail = "frame", le == null || le.setAttribute("data-stage-ready", ""), le == null || le.removeAttribute("data-stage-loading-kind");
    }
  }
  function nh(i = performance.now()) {
    Ce.running && (th(() => b1(i)), Ce.running && (Ce.rafId = requestAnimationFrame(nh)));
  }
  function v1() {
    !Ce.running || !eh() || th(() => {
      Ce.dirty = !1, Qd();
    });
  }
  const rh = new ResizeObserver(v1);
  rh.observe(I);
  function _1() {
    Ce.running = !1, Ce.rafId && cancelAnimationFrame(Ce.rafId), Ce.rafId = 0, rh.disconnect();
  }
  function ot() {
    r || S && v.stickers.some(rc) || (p.historyController.commitActionGroup(JSON.stringify(Lp(v))), zc());
  }
  function Ic(i) {
    var h;
    if (r) return;
    Jn();
    const s = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (zc(), !s) return;
    const c = sS(v, s), f = (h = v.timeline) == null ? void 0 : h.fps;
    Object.keys(v).forEach((m) => delete v[m]), Object.assign(v, c.state), S && v.timeline.fps !== f && kt.seek(Math.round(p.frame * v.timeline.fps / f)), p.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], c.paintingChanged ? fr() : Wt(), On(), ze(), Fn(), de({ cause: "cutout_frame" });
  }
  function ih() {
    var c, f;
    const i = Array.isArray((c = p.historyController) == null ? void 0 : c.entries) ? p.historyController.entries : [], s = Number((f = p.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function On() {
    In();
    const i = jN({
      editor: p,
      swatches: ll,
      paintColorPopOpen: q ? !q.hidden : !1,
      colorToCss: kr,
      colorsApproximatelyEqual: cl,
      rgb01ToHsv: Cu,
      hsv01ToRgb: Au,
      getBrushPresetIdForTool: yi,
      isActiveLassoTool: By
    });
    if (Object.assign(E.paintDock, i), Jy(), !i.visible) {
      q && (q.hidden = !0);
      return;
    }
    xe && (clearTimeout(xe), xe = 0), B && (!i.colorEnabled && q && !q.hidden && (xe = window.setTimeout(() => {
      q.hidden = !0, E.paintDock.colorPopOpen = !1, xe = 0;
    }, 170)), q && (q.style.setProperty("--picker-hue-color", i.pickerHueColor), q.style.setProperty("--picker-sat", i.pickerSat), q.style.setProperty("--picker-val", i.pickerVal), q.style.setProperty("--picker-hue", i.pickerHue)), me && (me.style.left = i.pickerSvLeft, me.style.top = i.pickerSvTop), Me && (Me.style.left = i.pickerHueLeft));
  }
  function ko() {
    const i = Xt(t === "cutout" && p.mode === "frame" ? He() : Nt());
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Jr(i)
    }, ze());
  }
  function ze() {
    var nt, ye, ie, pe;
    if (Kr(), o) return;
    v.ui_settings = v.ui_settings || {};
    const i = zN(v.ui_settings);
    if (a) {
      E.sidePanel = HN({
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
        aspect_id: Jr(we)
      }, sr(f) && (p.panelLastValues.opacity = ec(f, p.frame).opacity * 100);
    }
    const y = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = m === "stroke" ? null : f, k = S && p.inspectCamera, A = k ? dS(v.camera, p.frame) : sr(_) ? p.panelLastValues : _ || y, C = k || !!_ && !Sn(_);
    p.panelWasEnabled = C, yc();
    let P = null;
    if (c) {
      const we = fc({ item: c, kind: "shot", label: "Frame" });
      P = {
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
        const qe = S ? p0(Te) : Vt(Te) ? String(Te.id || _u) : String(((Rt = (Pt = v.assets) == null ? void 0 : Pt[Te.asset_id]) == null ? void 0 : Rt.name) || Te.asset_id || Te.id), Lt = `${ft + 1}. ${qe}${Vt(Te) && yo(Te) ? " (hidden)" : ""}`, fn = fc({ item: Te, label: Lt, kind: "image" });
        we.push({ id: Te.id, label: fn.label, icon: fn.icon, item: Te, kind: "image" });
      }) : bd().forEach((Te) => {
        if (!(Te != null && Te.item)) return;
        const ft = fc(Te);
        we.push({ id: Te.item.id, label: ft.label, icon: ft.icon, item: Te.item, kind: Te.kind });
      });
      const Re = (_ == null ? void 0 : _.id) || "", We = k ? { label: "Camera", icon: Pe.camera } : we.find((Te) => Te.id === Re) || we[0];
      P = {
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
    const D = [], W = (we, Re, We, Te, ft) => {
      const qe = J(Number(A[we] || 0), We, Te);
      D.push({
        key: we,
        label: Re,
        min: We,
        max: Te,
        step: ft,
        value: qe,
        displayValue: Oo(qe),
        fillPct: J((qe - We) / Math.max(1e-6, Te - We) * 100, 0, 100),
        enabled: C && !r
      });
    }, ne = [];
    k ? (W("position_x", "X", -100, 100, 0.01), W("position_y", "Y", -100, 100, 0.01), W("position_z", "Z", -100, 100, 0.01), W("yaw_deg", "Yaw", -180, 180, 0.1), W("pitch_deg", "Pitch", -90, 90, 0.1), W("roll_deg", "Roll", -180, 180, 0.1), W("hFOV_deg", "FOV", 1, 179, 0.1)) : h.length > 1 ? (ne.push(`Selected objects: ${h.length}`), ne.push("Multi-selection supports z-order and delete.")) : (W("yaw_deg", "Yaw", -180, 180, 0.1), W("pitch_deg", "Pitch", -90, 90, 0.1), W("hFOV_deg", "H FOV", 1, 179, 0.1), W("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? W("rot_deg", "Rotation", -180, 180, 0.1) : W("roll_deg", "Roll", -180, 180, 0.1), S && W("opacity", "Opacity", 0, 100, 1));
    const Z = Array.isArray((ye = (nt = v == null ? void 0 : v.painting) == null ? void 0 : nt.paint) == null ? void 0 : ye.strokes) ? v.painting.paint.strokes.length : 0, te = Array.isArray((pe = (ie = v == null ? void 0 : v.painting) == null ? void 0 : ie.mask) == null ? void 0 : pe.strokes) ? v.painting.mask.strokes.length : 0, ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((we) => String((we == null ? void 0 : we.name) || "")) : [], he = sC(
      e,
      ae.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), re = !!String((he == null ? void 0 : he.src) || "").trim() || Ei("pano_input_images").length > 0, Se = dn().length > 0 || Z > 0, Ge = te > 0, Ue = [
      { key: "mask", label: "Mask", icon: Pe.circle_dashed_tool, visible: !!p.showMask, enabled: Ge },
      { key: "objects", label: "Paint / Images", icon: Pe.image, visible: !!p.showObjects, enabled: Se },
      { key: "panorama", label: "Panorama", icon: Pe.globe, visible: !!p.showPanorama, enabled: re }
    ].map((we) => ({
      ...we,
      ariaLabel: `Toggle ${we.label.toLowerCase()}`,
      tip: we.visible ? "Hide" : "Show"
    }));
    E.sidePanel = GN({
      coverage: v.coverage,
      readOnly: r,
      selectionPicker: P,
      enabled: C,
      selectedKind: k ? "camera" : m,
      selectedItems: h,
      params: D,
      notes: ne,
      visibilityRows: Ue,
      uiSettings: i,
      normalizeCoverageValue: Gn
    });
  }
  function Kr() {
    if (!S || r) return;
    const i = Ec(), s = Le.selection, c = s && gi(s.owner);
    if (s) {
      const h = c ? ba(s) : [];
      s.frames = s.frames.filter((m) => h.some((y) => c[y].keyframes.some((_) => _.frame === m))), s.frames.length || (Le.selection = null);
    }
    const f = v.timeline.fps;
    E.timeline = WN(v, {
      frame: p.frame,
      span: i,
      selection: Le.selection,
      selectedId: p.inspectCamera ? "camera" : p.selectedId,
      expanded: Le.expanded ?? qu(v),
      openRows: Le.openRows,
      audio: x1() && E.videoTransport.hasAudio ? { muted: Y.muted } : null,
      playing: kt.playing,
      label: `${p.frame}f · ${(p.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: Su(e) !== null || YS(e, ["bg_media", "sticker"])
    }), E.easing = Le.selection ? UN(c, ba(Le.selection), Le.selection.frames, va(Le.selection.owner)) : null;
  }
  function Ec(i = null) {
    const s = v.timeline.fps, c = v.stickers.find(Vt), f = c ? Md() : null, h = Math.max(
      E.videoTransport.ready ? Math.round(Number(E.videoTransport.duration || 0) * s) : 0,
      f ? R0(c.clip, s, f.meta) : 0
    );
    return s0(v, { minimum: Math.round(s * 5), frames: h, openClip: i });
  }
  function gi(i) {
    return i === "camera" ? v.camera : v.stickers.find((s) => s.id === i) || null;
  }
  function ba(i) {
    return i.lane ? [i.lane] : uo(gi(i.owner));
  }
  function va(i) {
    if (i === "camera") return 0;
    const { clip: s } = gi(i);
    return s.start - s.in;
  }
  function xs(i) {
    const s = gi(i);
    return !!s && s.locked !== !0;
  }
  function oh() {
    const i = Nt();
    sr(i) && !xi(i.clip, p.frame) && _r(null);
  }
  function w1(i) {
    const s = Math.max(0, Math.round(i));
    s !== p.frame && (p.frame = s, oh(), Wt(), ze(), Xe(), de());
  }
  function x1() {
    return Y instanceof HTMLVideoElement && !!Y.getAttribute("src");
  }
  function S1(i) {
    di(), kt.seek(i);
  }
  function Jn() {
    S && kt.stop();
  }
  function Oc() {
    di(), kt.toggle();
  }
  function Mo() {
    Wt(), ze(), Xe(), de();
  }
  function Oi() {
    ot(), lt(), Mo();
  }
  function k1() {
    const { selection: i } = Le;
    xs(i.owner) && (Jn(), Yx(gi(i.owner), ba(i), i.frames, p.frame - va(i.owner)), Le.selection = null, Oi());
  }
  function ah(i) {
    Jn();
    const s = Math.round(p.frame * i / v.timeline.fps);
    cS(v, i), Le.selection = null, kt.seek(s), Oi();
  }
  function M1() {
    const i = Su(e);
    i !== null && i !== v.timeline.fps && ah(i);
  }
  function N1(i) {
    if (!(r || !S)) {
      if (i.type === "seek") {
        i.phase === "start" && di(), kt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Oc();
        return;
      }
      if (i.type === "mute") {
        wd(), Kr();
        return;
      }
      if (i.type === "toggle-expanded") {
        Le.expanded = !(Le.expanded ?? qu(v)), Le.selection = null, Kr();
        return;
      }
      if (i.type === "toggle-row") {
        Le.openRows.has(i.id) ? Le.openRows.delete(i.id) : Le.openRows.add(i.id), Kr();
        return;
      }
      if (i.type === "select-row") {
        const s = v.stickers.find((c) => c.id === i.id);
        s && !xi(s.clip, p.frame) && S1(s.clip.start), _r(dn().find((c) => c.id === i.id) || null), p.inspectCamera = i.id === "camera", Le.selection = null, ze(), Xe(), de();
        return;
      }
      if (i.type === "select-keys") {
        const s = va(i.owner), c = i.frames.map((m) => m - s), f = Le.selection, h = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && h) {
          const m = new Set(f.frames);
          for (const y of c)
            m.has(y) ? m.delete(y) : m.add(y);
          f.frames = [...m].sort((y, _) => y - _);
        } else
          Le.selection = c.length ? { owner: i.owner, lane: i.lane, frames: c } : null;
        Kr();
        return;
      }
      if (i.type === "move-keys") {
        const s = Le.selection;
        if (!s || !xs(s.owner)) return;
        const c = gi(s.owner), f = ba(s);
        if (i.phase === "start") {
          Jn(), Le.drag = { keyframes: f.map((y) => structuredClone(c[y].keyframes)), frames: s.frames };
          return;
        }
        const { drag: h } = Le;
        if (!(h != null && h.keyframes)) return;
        f.forEach((y, _) => {
          c[y].keyframes = structuredClone(h.keyframes[_]);
        });
        const m = Xx(c, f, h.frames, i.delta, -va(s.owner));
        if (s.frames = h.frames.map((y) => y + m), i.phase !== "end") {
          Mo();
          return;
        }
        Le.drag = null, m ? Oi() : Mo();
        return;
      }
      if (i.type === "clip") {
        const s = v.stickers.find((h) => h.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Jn(), Le.drag = { clip: { ...s.clip }, span: Ec(s.clip) };
          return;
        }
        const { drag: c } = Le;
        if (!(c != null && c.clip)) return;
        const f = c.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? Zx(s.clip, i.delta) : i.delta && i.mode === "start" ? Qx(s.clip, f.start + i.delta) : i.delta && eS(s.clip, (f.duration === null ? c.span : f.start + f.duration) + i.delta, c.span), i.phase !== "end") {
          Mo();
          return;
        }
        Le.drag = null, oh(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Oi() : Mo();
        return;
      }
      if (i.type === "key-row") {
        if (!xs(i.owner)) return;
        Jn(), Bx(gi(i.owner), p.frame - va(i.owner)), Oi();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === v.timeline.fps || E.timeline.fpsLocked) {
          Kr();
          return;
        }
        ah(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === v.timeline.length) {
          Kr();
          return;
        }
        Jn(), v.timeline.length = s, Oi();
        return;
      }
      if (i.type === "easing") {
        const s = Le.selection;
        if (!s || !xs(s.owner)) return;
        Jn(), Jx(gi(s.owner), ba(s), s.frames, i.easing), i.commit ? Oi() : Mo();
      }
    }
  }
  async function sh(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Er(i)) return;
    if (S) {
      Jn(), await A1(i);
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
          vFOV_deg: hi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: ds()
        }), _r(v.stickers[v.stickers.length - 1]), Ss(), ze(), Xe(), de();
        const m = await Wi(i, {
          fetchApi: (k, A) => Ht.fetchApi(k, A)
        });
        if (!(Array.isArray(v.stickers) ? v.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === s).length) return;
        v.assets[s] = m, _o(), ot(), lt(), ze(), Xe(), de();
      } catch (f) {
        delete v.assets[s], Be.delete(s);
        const h = Array.isArray(v.stickers) ? v.stickers : [], m = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") === s);
        throw m.length && (v.stickers = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") !== s), m.some((y) => String((y == null ? void 0 : y.id) || "") === String(p.selectedId || "")) && _r(null), ze(), Xe(), de(), lt()), f;
      }
    });
    try {
      await c;
    } catch {
    }
  }
  function P1() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = Q == null ? void 0 : Q.openImagePicker) == null || i.call(Q, "add");
  }
  async function A1(i) {
    const s = Gi("st"), c = Fa(e, `add:${s}`, async () => {
      const { image: f } = await Ta(i), h = {
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: hi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
        rot_deg: 0
      }, m = Yf(s, { kind: "file", filename: "" }, h, ds());
      Be.set(da(m), f), v.stickers.push(m), _r(m), Ss(), ze(), Xe(), de();
      try {
        const y = await Wi(i, {
          fetchApi: (k, A) => Ht.fetchApi(k, A)
        }), _ = v.stickers.find((k) => k.id === s);
        if (!_) return;
        _.source = tl(y), Be.set(da(_), f), ot(), lt();
      } catch (y) {
        throw v.stickers = v.stickers.filter((_) => _.id !== s), p.selectedId === s && _r(null), ot(), lt(), y;
      } finally {
        ze(), Xe(), de();
      }
    });
    try {
      await c;
    } catch {
    }
  }
  async function C1(i, s) {
    const c = Fa(e, `replace:${s}:${Gi("asset")}`, async () => {
      const { image: f } = await Ta(i), h = await Wi(i, {
        fetchApi: (y, _) => Ht.fetchApi(y, _)
      }), m = v.stickers.find((y) => y.id === s);
      if (m) {
        m.source = tl(h), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const y of [m.size.value, ...m.size.keyframes.map((_) => _.value)])
          y.vFOV_deg = hi(y.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        Be.set(da(m), f), Wt(), ot(), lt(), ze(), Xe(), de();
      }
    });
    try {
      await c;
    } catch {
    }
  }
  async function I1(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Nt();
    if (!s || !yt(s) || Vt(s) || !Er(i)) return;
    if (S) {
      await C1(i, s.id);
      return;
    }
    const c = String(s.id || ""), f = Gi("asset"), h = Fa(e, `replace:${c}:${f}`, async () => {
      var C;
      const m = (Array.isArray(v.stickers) ? v.stickers : []).find((P) => String((P == null ? void 0 : P.id) || "") === c) || null;
      if (!m || !yt(m) || Vt(m)) return;
      const y = String(m.asset_id || ""), _ = y ? gn(((C = v.assets) == null ? void 0 : C[y]) || null) : null, k = Number(m.vFOV_deg || 0), A = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: P } = await Ta(i);
        Be.set(f, P), m.asset_id = f, m.vFOV_deg = hi(
          Number(m.hFOV_deg || 30),
          Number(P.naturalWidth || P.width || 1),
          Number(P.naturalHeight || P.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Wt(), ze(), Xe(), de();
        const D = await Wi(i, {
          fetchApi: (ne, Z) => Ht.fetchApi(ne, Z)
        }), W = (Array.isArray(v.stickers) ? v.stickers : []).find((ne) => String((ne == null ? void 0 : ne.id) || "") === c) || null;
        if (!W || String(W.asset_id || "") !== f) return;
        v.assets[f] = D, _o(), ot(), lt(), ze(), Xe(), de();
      } catch (P) {
        delete v.assets[f], Be.delete(f);
        const D = (Array.isArray(v.stickers) ? v.stickers : []).find((W) => String((W == null ? void 0 : W.id) || "") === c) || null;
        throw D && String(D.asset_id || "") === f && (y && _ && (v.assets[y] = _), D.asset_id = y, D.vFOV_deg = k, D.crop = A ? { ...A } : null), Wt(), lt(), ze(), Xe(), de(), P;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function E1() {
    var s;
    if (r) return;
    const i = Nt();
    !i || !yt(i) || Vt(i) || (s = Q == null ? void 0 : Q.openImagePicker) == null || s.call(Q, "replace");
  }
  async function O1() {
    if (r || t !== "stickers") return;
    if (S) {
      await F1();
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
        const y = await fetch(m).then((P) => P.blob()), _ = String(y.type || "image/png").split("/")[1] || "png", k = String((h == null ? void 0 : h.name) || `${f}.${_}`), A = new File([y], k, { type: y.type || "image/png" }), C = await Wi(A, {
          fetchApi: (P, D) => Ht.fetchApi(P, D)
        });
        v.assets[f] = {
          ...C,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (lt(), de());
  }
  async function F1() {
    let i = !1;
    for (const s of v.stickers) {
      const c = s.source.data_url;
      if (c)
        try {
          const f = await fetch(c).then((_) => _.blob()), h = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${h}`, { type: f.type || "image/png" }), y = await Wi(m, {
            fetchApi: (_, k) => Ht.fetchApi(_, k)
          });
          s.source = tl(y), i = !0;
        } catch {
        }
    }
    i && (lt(), de());
  }
  function T1() {
    if (r || t !== "cutout") return;
    const i = He();
    if (i) {
      _r(i), p.mode = "pano", Ii(
        jt(Number(i.yaw_deg || 0)),
        J(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), ze(), Xe(), de({ cause: "cutout_frame" });
      return;
    }
    const s = Hg({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: jt(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    v.shots = [s], _r(s), Ss(), p.mode = "pano", ot(), lt(), ze(), Xe(), de({ cause: "cutout_frame" });
  }
  function D1() {
    r || t !== "cutout" || (v.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, v.active.selected_shot_id = null, ot(), lt(), ze(), Xe(), de());
  }
  function L1() {
    const i = Array.isArray(v.stickers) ? v.stickers : [], s = [];
    for (const c of i)
      Vt(c) && (c.visible = !1, s.push(c));
    return s;
  }
  function lh(i, s, c = "Clear") {
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
  async function R1() {
    var c, f;
    if (r || !await lh(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    v.painting = Wo(null), fr();
    const s = L1();
    if (t === "stickers")
      v.stickers = S ? v.stickers.filter((h) => h.placement === "world" || s.includes(h)) : s, S || (v.assets = {}), p.selectedId = ((c = s[0]) == null ? void 0 : c.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, _o();
    else {
      const h = aS(v.shots, v.active.selected_shot_id);
      v.stickers = s, v.assets = {}, v.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = null, v.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, _o();
    }
    ot(), lt(), ze(), Xe(), de();
  }
  async function $1(i) {
    var m, y, _, k;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", c = s === "mask" ? "Mask" : "Paint", f = No(s);
    if (!(!f.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((y = p.interaction) == null ? void 0 : y.layerKind) === s) || !await lh(
      `Clear ${c}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((_ = p.interaction) == null ? void 0 : _.kind) === "draw" && ((k = p.interaction) == null ? void 0 : k.layerKind) === s) {
        const A = jn();
        A && p.paintEngine.cancelActiveStroke(A), p.interaction = null;
      }
      f.length = 0, v.painting.raster_objects = En().filter((A) => String((A == null ? void 0 : A.layerKind) || "paint") !== s), s === "paint" && (hn().length = 0), fr(), ot(), lt(), ze(), Xe(), On(), de();
    }
  }
  function V1() {
    if (r) return;
    const i = Nt();
    if (!i || !yt(i) || Vt(i) || S && rc(i)) return;
    let s;
    S ? s = mS(i, Gi("st"), ds()) : (s = JSON.parse(JSON.stringify(i)), s.id = Gi("st"), s.yaw_deg = jt((s.yaw_deg || 0) + 8), s.z_index = ds()), v.stickers.push(s), v.active.selected_sticker_id = s.id, p.selectedId = s.id, p.selectedIds = [s.id], Wt(), ot(), lt(), Xe(), ze(), de();
  }
  function ch() {
    var c, f, h, m, y;
    if (r) return;
    const i = ur(), s = Nt();
    if (!(!s && i.length === 0) && !i.some((_) => Sn(_))) {
      if (Jn(), i.length > 1) {
        const _ = new Set(i.filter((C) => en(C)).map((C) => String(C.actionGroupId || C.id || ""))), k = new Set(i.filter((C) => pn(C)).map((C) => on(C.rasterObjectId || C.id || ""))), A = new Set(i.filter(yt).map((C) => String(C.id || "")));
        _.size > 0 && (v.painting.paint.strokes = (Array.isArray((f = (c = v.painting) == null ? void 0 : c.paint) == null ? void 0 : f.strokes) ? v.painting.paint.strokes : []).filter((C) => !_.has(String((C == null ? void 0 : C.actionGroupId) || ""))), v.painting.groups = hn().filter((C) => !_.has(String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || ""))), fr()), k.size > 0 && (v.painting.raster_objects = En().filter((C) => !k.has(String((C == null ? void 0 : C.id) || ""))), So()), A.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((C) => A.has(String((C == null ? void 0 : C.id) || "")) ? Vt(C) ? (yo(C) || (C.visible = !1), !0) : !1 : !0), _o(), Wt()), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Xe(), de();
        return;
      }
      if (en(s)) {
        const _ = String(s.actionGroupId || s.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (h = v.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== _), v.painting.groups = hn().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== _), fr(), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Xe(), de();
        return;
      }
      if (pn(s)) {
        const _ = on(s.rasterObjectId || s.id || "");
        v.painting.raster_objects = En().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== _), So(), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Xe(), de();
        return;
      }
      if (t === "stickers" || yt(s)) {
        if (Vt(s)) {
          if (yo(s)) return;
          s.visible = !1, Wt(), ot(), lt(), ze(), Xe(), de();
          return;
        }
        v.stickers = v.stickers.filter((_) => _.id !== s.id), _o(), Wt(), p.selectedId = ((y = dn()[0]) == null ? void 0 : y.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = p.selectedId, ot(), lt(), ze(), Xe(), de();
        return;
      }
      D1();
    }
  }
  function Fc(i, s) {
    const c = Ce.frameSafeRect;
    if (!i || !c || p.mode !== "frame") return !1;
    const f = wu * to(c, i), h = Vf($f(c, s), f);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function uh(i, s) {
    if (!i || i.locked === !0) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const _ = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(_)) {
        const [C, P] = _.split(":").map((D) => Number(D));
        if (Number.isFinite(C) && Number.isFinite(P)) return C >= P;
      }
      const k = Number(i.hFOV_deg || 64), A = Number(i.vFOV_deg || 40);
      return Math.abs(k - A) > 1e-6 ? k >= A : no(i) >= 1;
    })();
    let [h, m] = c[String(s)] || c["1:1"];
    h >= m !== f && ([h, m] = [m, h]);
    const y = h / m;
    if (!Fc(i, y)) {
      const _ = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = _, i.hFOV_deg = Qs(_, y);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function z1(i, s, c) {
    if (!i || i.locked === !0) return !1;
    const f = Za(s, c);
    if (!f) return !1;
    const h = f.ratio;
    if (!Fc(i, h)) {
      const m = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Qs(m, h);
    }
    return i.aspect_id = f.label, !0;
  }
  function fh(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), c = si(i), f = c.tanHalfX / Math.max(1e-12, c.tanHalfY), h = 1 / Math.max(1e-12, f);
    if (!Fc(i, h)) {
      const m = J(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Qs(m, h);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, y] = s.split(":");
      i.aspect_id = `${y}:${m}`;
    } else
      i.aspect_id = Ui(i);
  }
  function dh() {
    po().forEach((s, c) => {
      s.type === "sticker" && s.item && (s.item.z_index = c), s.type === "strokeGroup" && s.item && (s.item.z_index = c), s.type === "rasterObject" && s.item && (s.item.z_index = c);
    });
  }
  function j1() {
    if (r) return;
    const i = ur();
    if (!Nt() || i.length === 0 || i.some((_) => Sn(_))) return;
    dh();
    const c = po(), f = new Set(i.map((_) => yt(_) ? `sticker:${String(_.id || "")}` : pn(_) ? `rasterObject:${on(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), h = [], m = [];
    if (c.forEach((_) => {
      var A, C;
      const k = _.type === "sticker" ? `sticker:${String(((A = _.item) == null ? void 0 : A.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((C = _.item) == null ? void 0 : C.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(k) ? h.push(_) : m.push(_);
    }), !h.length || h[h.length - 1] === c[c.length - 1]) return;
    [...m, ...h].forEach((_, k) => {
      _.type === "sticker" && _.item && (_.item.z_index = k), _.type === "strokeGroup" && _.item && (_.item.z_index = k), _.type === "rasterObject" && _.item && (_.item.z_index = k);
    }), Wt(), ot(), lt(), Xe(), de();
  }
  function H1() {
    if (r) return;
    const i = ur();
    if (!Nt() || i.length === 0 || i.some((_) => Sn(_))) return;
    dh();
    const c = po(), f = new Set(i.map((_) => yt(_) ? `sticker:${String(_.id || "")}` : pn(_) ? `rasterObject:${on(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), h = [], m = [];
    if (c.forEach((_) => {
      var A, C;
      const k = _.type === "sticker" ? `sticker:${String(((A = _.item) == null ? void 0 : A.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((C = _.item) == null ? void 0 : C.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(k) ? h.push(_) : m.push(_);
    }), !h.length || h[0] === c[0]) return;
    [...h, ...m].forEach((_, k) => {
      _.type === "sticker" && _.item && (_.item.z_index = k), _.type === "strokeGroup" && _.item && (_.item.z_index = k), _.type === "rasterObject" && _.item && (_.item.z_index = k);
    }), Wt(), ot(), lt(), Xe(), de();
  }
  function G1() {
    r || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", u && (v.output_preset = M(Number(v.output_preset || 2048))), d && (v.coverage = Gn(d.value)), b && (v.bg_color = String(b.value || v.bg_color || "#00ff00")), Fn(), e.setDirtyCanvas(!0, !0));
  }
  function Fn() {
    var s;
    if (r) return;
    v.coverage = Gn(v.coverage), g0(e, v.active);
    const i = y0(e, v);
    g && !b0(e, i, String(g.value ?? "")) && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const hh = () => Fn();
  r || (e.__panoFlushStateBeforeQueue = hh);
  function Tc() {
    v.ui_settings = bC(v.ui_settings), r || Fn();
  }
  function lt() {
    var i;
    r || (Fn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function K1() {
    r || yb() && Dd().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function B1(i = {}) {
    var f, h, m, y, _, k, A, C, P, D;
    const s = i.syncPreview !== !1, c = i.syncGraph !== !1;
    s && ((h = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || h.call(f), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !1)), c && ((A = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || A.call(k, !0, !0), (D = (P = (C = Or) == null ? void 0 : C.canvas) == null ? void 0 : P.setDirty) == null || D.call(P, !0, !0));
  }
  function Ss() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", On(), ze());
  }
  function Fi(i) {
    const s = I.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * I.width,
      y: (i.clientY - s.top) / s.height * I.height
    };
  }
  function _a(i) {
    const s = I.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function ph() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function He() {
    if (t !== "cutout") return null;
    const i = Array.isArray(v.shots) ? v.shots : [];
    if (!i.length) return null;
    const s = String(v.active.selected_shot_id || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === s) || i[0] || null;
  }
  function W1() {
    var W, ne, Z, te, ae;
    if (!I) return null;
    const i = (W = I.getBoundingClientRect) == null ? void 0 : W.call(I), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? I.width / i.width : 1, c = Number((i == null ? void 0 : i.height) || 0) > 0 ? I.height / i.height : 1;
    Ce.frameCanvasScale = Math.min(s, c);
    let f = 24, h = 24;
    const m = Math.max(f + 1, I.width - 24);
    let y = Math.max(h + 1, I.height - 24);
    const _ = (ne = pt == null ? void 0 : pt.getBoundingClientRect) == null ? void 0 : ne.call(pt), k = (Z = ln == null ? void 0 : ln.getBoundingClientRect) == null ? void 0 : Z.call(ln);
    let A = 24;
    _ && i && _.width > 0 && _.height > 0 && (A = Math.max(A, (_.right - i.left) * s + Sm)), k && i && k.width > 0 && k.height > 0 && ((te = E.frameRail) == null ? void 0 : te.visible) === !0 && (A = Math.max(A, (i.right - k.left) * s + Sm)), f = Math.max(f, A);
    const C = Math.min(m, I.width - A);
    let P = 24;
    const D = (ae = St == null ? void 0 : St.getBoundingClientRect) == null ? void 0 : ae.call(St);
    if (D && i && D.width > 0 && D.height > 0 && (P = Math.max(P, (D.bottom - i.top) * c + xu)), [Yn, It].forEach((he) => {
      var Ge;
      if (!he || !i) return;
      const re = getComputedStyle(he);
      if (re.display === "none" || re.visibility === "hidden" || Number(re.opacity) <= 0) return;
      const Se = (Ge = he.getBoundingClientRect) == null ? void 0 : Ge.call(he);
      !Se || Se.width <= 0 || Se.height <= 0 || (P = Math.max(P, (i.bottom - Se.top) * c + xu));
    }), Fe && i) {
      const he = getComputedStyle(Fe);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (P = Math.max(P, (QA + xu) * c));
    }
    return h = Math.max(h, P), y = Math.max(h + 1, Math.min(y, I.height - P)), {
      x: f,
      y: h,
      w: Math.max(1, C - f),
      h: Math.max(1, y - h)
    };
  }
  function Dc(i = He()) {
    if (!i || !I) return null;
    const s = Ce.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, I.width - 48),
      h: Math.max(1, I.height - 48)
    };
    return fx(s, i, wu * to(s, i));
  }
  function tn(i = He()) {
    const s = Dc(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Lc() {
    return t === "cutout" && !!He();
  }
  function dr(i, s = performance.now()) {
    if (p.mode === "unwrap") {
      const m = pi(), y = (i.x - m.x) / Math.max(1, m.w), _ = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: J(_, 0, 1),
        t: Number(s || 0)
      };
    }
    const c = _c(i.x, i.y), { lon: f, lat: h } = Mc(c);
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
    const m = Ac(s, h);
    if (!m) return null;
    const { lon: y, lat: _ } = Mc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - _ / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function U1(i, s) {
    const c = He();
    if (!c || c.locked === !0) return !1;
    const f = Number(s) > 0, h = Kg(c, s);
    if (!h) return !1;
    if (f) {
      const m = wu * to(
        Ce.frameSafeRect || { w: I.width, h: I.height },
        h
      ), y = zf({ width: I.width, height: I.height }, m);
      if (y.halfW < I.width * 0.5 - 1e-6 || y.halfH < I.height * 0.5 - 1e-6) return !1;
    }
    return c.hFOV_deg = h.hFOV_deg, c.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, ot(), lt(), ze());
    }, 180), ze(), !0;
  }
  function Y1() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, ot(), lt(), ze(), !0) : !1;
  }
  function wa() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Ti(), p.interaction = null, vo(), jr(), ze(), mt(p.pointerPos), de({ localOnly: !0 }), !0;
  }
  function X1(i, s) {
    const c = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function yi(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Wr : Tn[s] ? s : p.activeBrushPresetId || Wr;
  }
  function mh() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (ph() || Lc());
  }
  function gh() {
    var i;
    return mh() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function ks(i, s = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), h = s !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== h || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - f) > 0.01;
    return p.pointerPos = { x: c, y: f, inside: h }, y;
  }
  function q1() {
    var C, P;
    if (!gh()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool, c = yi(s), f = Tn[c] || Tn[Wr], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(3, m * 0.5), _ = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(p.paintColor), k = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : J(Math.max(0.16, Number(_.a ?? 1) * 0.3), 0.16, 0.52), A = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : J(Math.max(0.46, Number(_.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: y,
      fillStyle: kr(_, k),
      strokeStyle: kr(_, A),
      x: Number(((C = p.pointerPos) == null ? void 0 : C.x) || 0),
      y: Number(((P = p.pointerPos) == null ? void 0 : P.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function J1() {
    var D, W, ne;
    const i = q1();
    if (!U) return;
    if (!i) {
      U.style.display = "none";
      return;
    }
    let s = i.radius * 2, c = i.radius * 2, f = "999px", h = 0, m = i.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", _ = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const k = "rgba(222, 222, 222, 0.72)", A = "rgba(52, 52, 52, 0.72)";
    let C = Number(i.hotspotX ?? s * 0.5), P = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Vl, c = Vl, f = "0", y = "0", _ = "none", C = nC, P = rC, m = mC(i.fillStyle, A, k);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Z = Math.max(1, Number(((D = i.preset) == null ? void 0 : D.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * Z), c = Math.max(6, i.radius * 2), f = `${Math.min(6, c * 0.42)}px`, h = Number(((ne = (W = i.preset) == null ? void 0 : W.angle) == null ? void 0 : ne.value) || 0) * Yi;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(s)}px`, U.style.height = `${Math.round(c)}px`, U.style.borderRadius = f, U.style.border = y, U.style.boxShadow = _, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(i.x - C)}px, ${Math.round(i.y - P)}px) rotate(${h}deg)`;
  }
  function Z1() {
    var he;
    if (!X || !j) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool;
    if (s === "lasso_fill") return;
    const c = yi(s), f = Tn[c] || Tn[Wr], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(6, m * 0.5), _ = s === "eraser", k = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : _ ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(p.paintColor), A = i === "mask" ? kr(k, 0.22) : _ ? "rgba(255,255,255,0.14)" : kr(k, J(Math.max(0.18, Number(k.a ?? 1) * 0.34), 0.18, 0.56)), C = i === "mask" ? kr(k, 0.96) : _ ? "rgba(255,255,255,0.72)" : kr(k, J(Math.max(0.56, Number(k.a ?? 1) * 0.96), 0.56, 1));
    let P = y * 2, D = y * 2, W = "999px", ne = 0, Z = A;
    const te = "rgba(222, 222, 222, 0.72)", ae = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const re = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      P = Math.max(16, y * 2 * re), D = Math.max(10, y * 2), W = `${Math.min(8, D * 0.42)}px`, ne = Number(((he = f == null ? void 0 : f.angle) == null ? void 0 : he.value) || 0) * Yi;
    } else s === "brush" ? Z = `radial-gradient(circle at 50% 50%, ${C} 0%, ${A} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (P = Math.max(18, y * 1.8), D = P, Z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${C} 43%, ${C} 58%, rgba(0,0,0,0) 59%)`) : _ && (Z = "rgba(255,255,255,0.12)");
    j.style.width = `${Math.round(P)}px`, j.style.height = `${Math.round(D)}px`, j.style.borderRadius = W, j.style.background = Z, j.style.border = `1px solid ${te}`, j.style.boxShadow = `0 0 0 1px ${ae}`, j.style.transform = `rotate(${ne}deg)`, Ne && (clearTimeout(Ne), Ne = 0), X.classList.remove("fade-out"), X.classList.add("show");
  }
  function Ms() {
    !X || !X.classList.contains("show") || (X.classList.add("fade-out"), Ne && clearTimeout(Ne), Ne = window.setTimeout(() => {
      X.classList.remove("show", "fade-out"), Ne = 0;
    }, 180));
  }
  function yh(i, s, c, f) {
    const h = yi(s), m = Tn[h] || Tn[Wr], y = p.brushSizes[h] ?? 10, _ = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), k = X1(f, _), A = c.map((P) => ({
      ...P,
      t: Number((P == null ? void 0 : P.t) || 0),
      widthScale: Number.isFinite(Number(P == null ? void 0 : P.widthScale)) ? Math.max(0, Number(P.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(P == null ? void 0 : P.pressureLike)) ? Math.max(0, Number(P.pressureLike)) : 1
    })), C = {
      id: Fo(i),
      actionGroupId: Fo("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: _,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: k.radiusModel,
      radiusValue: k.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: A.map((P) => ({ ...P })),
        points: A.map((P) => ({ ...P }))
      }
    };
    return xm(C, m), Number(m.aspect ?? 1), Number(C.aspect ?? 1), String(C.stampKind || ""), Number(C.size || 0), String(C.radiusModel || ""), Number(C.radiusValue || 0), { ...C.targetSpace }, C;
  }
  function bh(i, s, c, f) {
    const h = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), m = yi(s), y = Tn[m] || Tn[Wr], _ = {
      id: Fo(i),
      actionGroupId: Fo("ag"),
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
    return xm(_, y), Number(y.aspect ?? 1), Number(_.aspect ?? 1), String(_.stampKind || ""), { ..._.targetSpace }, _;
  }
  function No(i) {
    const s = v.painting || (v.painting = Wo(null)), c = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function Q1(i, s, c = performance.now()) {
    let f;
    if (p.mode === "frame") {
      const A = He();
      if (!A || (f = hr(s, A, c), !f)) return !1;
    } else
      f = dr(s, c);
    if (!f) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, y = h[h.length - 1];
    if (y) {
      const A = Math.abs(Number(f.u ?? f.x ?? 0) - Number(y.u ?? y.x ?? 0)), C = Math.abs(Number(f.v ?? f.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (A < 15e-4 && C < 15e-4) return !1;
    }
    const _ = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ..._ }), m.push({ ..._ });
    const k = jn();
    if (k) {
      const A = p.paintEngine.ensureTarget(k);
      p.paintEngine.appendStrokePoint(A, Number(_.u ?? 0), Number(_.v ?? 0), i.stroke);
    }
    return !0;
  }
  function ev(i, s, c = performance.now()) {
    var y, _;
    let f;
    if (p.mode === "frame") {
      const k = He();
      if (!k) return !1;
      f = hr(s, k, c);
    } else
      f = dr(s, c);
    const h = (_ = (y = i == null ? void 0 : i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : _.points;
    if (!f || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const k = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), A = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (k < 15e-4 && A < 15e-4) return !1;
    }
    return h.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function tv(i) {
    var re, Se, Ge, Ue, nt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    ws();
    const c = jn(), f = ha(c.width, c.height);
    if (!Jd(f, s, { w: c.width, h: c.height })) return !1;
    const h = ((Se = (re = f.ctx) == null ? void 0 : re.getImageData(0, 0, c.width, c.height)) == null ? void 0 : Se.data) || null;
    if (!h) return !1;
    const m = new Map(hn().map((ye) => [String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim(), ye ? { ...ye } : null])), y = [], _ = [], k = [...En().filter((ye) => String((ye == null ? void 0 : ye.layerKind) || "paint") !== "paint")];
    let A = !1, C = po().reduce((ye, ie) => Math.max(ye, Number((ie == null ? void 0 : ie.z_index) || 0)), -1) + 1;
    function P(ye, ie, pe, we = 8) {
      let Re = ie, We = pe, Te = -1, ft = -1;
      for (let qe = 0; qe < pe; qe += 1)
        for (let Lt = 0; Lt < ie; Lt += 1)
          ye[(qe * ie + Lt) * 4 + 3] <= we || (Lt < Re && (Re = Lt), qe < We && (We = qe), Lt > Te && (Te = Lt), qe > ft && (ft = qe));
      return Te < Re || ft < We ? null : { minX: Re, minY: We, maxX: Te, maxY: ft };
    }
    const D = P(h, c.width, c.height, 8);
    if (!D) return !1;
    function W(ye, ie) {
      return !ye || !ie ? !1 : !(ye.maxX < ie.minX || ie.maxX < ye.minX || ye.maxY < ie.minY || ie.maxY < ye.minY);
    }
    function ne(ye, ie) {
      const pe = ui((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "", "paint", ie);
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
      return ye ? ye.wraps ? W(D, { minX: 0, maxX: ye.maxX, minY: ye.minY, maxY: ye.maxY }) || W(D, { minX: ye.minX, maxX: c.width - 1, minY: ye.minY, maxY: ye.maxY }) : W(D, ye) : !0;
    }
    function ae(ye) {
      if (!ye) return { touched: !1, canvas: null };
      const ie = ha(c.width, c.height, { readback: !0 });
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
      const we = Number(pe == null ? void 0 : pe.z_index), Re = o1(ye, ie, pe).map((We, Te) => ({
        ...We,
        z_index: Number.isFinite(we) ? we + Te * 1e-3 : C + Te * 1e-3
      }));
      return Re.length && (C = Math.max(C, ...Re.map((We) => Number((We == null ? void 0 : We.z_index) || 0))) + 1), Re;
    }
    for (const ye of hn()) {
      const ie = String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim();
      if (!ie) continue;
      const pe = cr(ie, "paint");
      if (!te(ne(ye, pe))) {
        _.push(ye), y.push(...pe);
        continue;
      }
      const we = ((Ue = (Ge = p.paintEngine) == null ? void 0 : Ge.getGroupTarget) == null ? void 0 : Ue.call(Ge, ie)) || null, Re = ((nt = we == null ? void 0 : we.committedPaint) == null ? void 0 : nt.canvas) || null;
      if (!Re) {
        _.push(ye), y.push(...pe);
        continue;
      }
      const We = ae(Re);
      if (!We.touched || !We.canvas) {
        _.push(ye), y.push(...pe);
        continue;
      }
      A = !0;
      const Te = he(We.canvas, "paint", m.get(ie) || ye || {});
      k.push(...Te);
    }
    for (const ye of En().filter((ie) => String((ie == null ? void 0 : ie.layerKind) || "paint") === "paint")) {
      if (!te(Z(ye))) {
        k.push(ye);
        continue;
      }
      const ie = Td(ye, null);
      if (!ie) {
        k.push(ye);
        continue;
      }
      const pe = ae(ie);
      if (!pe.touched || !pe.canvas) {
        k.push(ye);
        continue;
      }
      A = !0;
      const we = he(pe.canvas, "paint", ye);
      k.push(...we);
    }
    return A ? (v.painting.paint.strokes = y, v.painting.groups = _.sort((ye, ie) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0)), v.painting.raster_objects = k.sort((ye, ie) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0)), ca({ preservePanelValues: !1 }), !0) : !1;
  }
  function nv(i) {
    var y, _, k, A, C;
    if ((((_ = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : _.rawPoints) || ((A = (k = i.stroke) == null ? void 0 : k.geometry) == null ? void 0 : A.points) || []).length >= 1) {
      Rc(i);
      const P = jn();
      P && (String(((C = i.stroke) == null ? void 0 : C.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(P) : p.paintEngine.commitActiveStroke(i.stroke, P)), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = yh(i.layerKind, c.toolKind, [], f);
    h.actionGroupId = c.actionGroupId, i.stroke = h;
    const m = jn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function rv(i) {
    var y, _;
    if ((((_ = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : _.points) || []).length >= 3) {
      Rc(i);
      const k = jn();
      k && p.paintEngine.commitActiveStroke(i.stroke, k), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = bh(i.layerKind, c.toolKind, [], f);
    h.actionGroupId = c.actionGroupId, i.stroke = h;
    const m = jn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function Rc(i) {
    var m, y, _, k;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const c = String(((y = i == null ? void 0 : i.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Cc(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), tv(i);
    const f = i.layerKind === "paint" && c !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && dd((_ = i.stroke) == null ? void 0 : _.actionGroupId), No(i.layerKind).push(i.stroke), !0);
    const h = s.rawPoints || s.points || [];
    return h.length < 1 ? !1 : (s.processedPoints = Cc(h, i.stroke.targetSpace, !0), f && dd((k = i.stroke) == null ? void 0 : k.actionGroupId), No(i.layerKind).push(i.stroke), !0);
  }
  function vh(i) {
    var c;
    if (t === "cutout" && p.mode === "frame") {
      const f = He(), h = tn(f);
      if (!f || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const y = hr(i, f, performance.now()), _ = y ? xo(y) : null;
      if (_)
        for (const A of Pc()) {
          if (!yt(A)) continue;
          const C = ya(A, _);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const P = qt(A);
            if (P != null && P.visible) return { item: A, geom: P };
          }
        }
      const k = ac(!1).slice().sort((A, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((A == null ? void 0 : A.z_index) || 0));
      for (const A of k) {
        if (A.type === "strokeGroup") {
          const D = go(aa("paint", A.actionGroupId || A.id || ""));
          if (!D) continue;
          const W = qt(D);
          if (!(W != null && W.visible)) continue;
          const ne = Array.isArray(W.strokePaths) ? W.strokePaths : [];
          for (const Z of ne) {
            const te = Array.isArray(Z == null ? void 0 : Z.points) ? Z.points : [];
            if (!te.length) continue;
            if (Z.closed && te.length >= 3 && Yr(i, te)) return { item: D, geom: W };
            const ae = Math.max(8, Number((Z == null ? void 0 : Z.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < te.length - 1; he += 1)
              if (Pu(i, te[he], te[he + 1]) <= ae * ae) return { item: D, geom: W };
            if (te.length === 1 && vi(i, te[0]) <= ae * ae) return { item: D, geom: W };
          }
          continue;
        }
        if (A.type === "rasterObject") {
          const D = mo(sa(((c = A.item) == null ? void 0 : c.id) || A.id || ""));
          if (!D) continue;
          const W = qt(D);
          if (Fd(D, W, i, y)) return { item: D, geom: W };
          continue;
        }
        const C = A.item;
        if (!C || !yt(C) || !_) continue;
        const P = ya(C, _);
        if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
          const D = qt(C);
          if (D != null && D.visible) return { item: C, geom: D };
        }
      }
      return null;
    }
    const s = [
      ...ac(!1).slice().sort((f, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var h;
        return f.type === "strokeGroup" ? go(aa("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? mo(sa(((h = f.item) == null ? void 0 : h.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...t === "cutout" ? Pc().filter((f) => zn(f)) : []
    ];
    for (const f of s) {
      if (en(f)) {
        const m = qt(f);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const _ of y) {
          const k = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
          if (!k.length) continue;
          if (_.closed && k.length >= 3 && Yr(i, k)) return { item: f, geom: m };
          const A = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < k.length - 1; C += 1)
            if (Pu(i, k[C], k[C + 1]) <= A * A) return { item: f, geom: m };
          if (k.length === 1 && vi(i, k[0]) <= A * A) return { item: f, geom: m };
        }
        continue;
      }
      if (pn(f)) {
        const m = qt(f);
        if (!(m != null && m.visible)) continue;
        if (Fd(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const h = qt(f);
      if (h.visible && Yr(i, h.corners))
        return { item: f, geom: h };
    }
    return null;
  }
  function $c(i, s, c = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (yt(c)) return nf(i, s);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((y) => vi(y, s) <= 121);
      if (h >= 0) {
        const y = i.corners[h], _ = y.x - i.center.x, k = y.y - i.center.y, A = _ * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: A };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const y of m) {
        const _ = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
        if (y.closed && _.length >= 3 && Yr(s, _)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
        for (let A = 0; A < _.length - 1; A += 1)
          if (Pu(s, _[A], _[A + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return Yr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => vi(m, s) <= 121);
      if (h >= 0) {
        const m = i.corners[h], y = m.x - i.center.x, _ = m.y - i.center.y, k = y * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: k };
      }
      return Yr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => vi(m, s) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const f = i.corners.findIndex((h) => vi(h, s) <= 121);
    if (f >= 0) {
      const h = i.corners[f], m = h.x - i.center.x, y = h.y - i.center.y, _ = m * y >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: f, cursor: _ };
    }
    return vi(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Yr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function _h(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function iv(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function ov(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((h) => iv(i, h))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Yr({ x: c, y: f }, s.corners);
  }
  function mt(i) {
    if (J1(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? ke("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" ? ke("grabbing") : p.interaction.kind === "space_pan" ? ke("move") : p.interaction.kind === "space_orbit" || p.interaction.kind === "roll_frame" ? ke("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? ke("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? ke(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? ke("grabbing") : ke("default");
      return;
    }
    if (gh()) {
      ke("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        ke(ZA);
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
    const s = Nt(), c = s ? qt(s) : null, f = s ? Sn(s) : !1, h = f ? { kind: "none", cursor: "default" } : $c(c, i, s);
    if (!f && h.kind !== "none") {
      ke(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && vh(i)) {
      ke("default");
      return;
    }
    ke(p.mode === "pano" ? "grab" : "default");
  }
  function Xe() {
    var k, A;
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
    const c = fs(), f = KN({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: c,
      geom: s.length > 1 ? us(s) : qt(i),
      allLocked: uc(s),
      anyLocked: s.some((C) => Sn(C)),
      selectedLocked: Sn(i),
      activeAspect: Jr(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: Vt,
      isStickerHidden: yo,
      canRestoreSelectedToInitial: Xy,
      iconSet: Pe
    });
    if (!f.visible) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (C, P, { requireFitsBelow: D = !0 } = {}) => {
      var Se, Ge, Ue;
      const ne = Number((Se = f.anchor) == null ? void 0 : Se.minX), Z = Number((Ge = f.anchor) == null ? void 0 : Ge.maxX), te = Number((Ue = f.anchor) == null ? void 0 : Ue.maxY);
      if (![ne, Z, te].every(Number.isFinite)) return null;
      const ae = Math.max(14, I.width - C - 14), he = J((ne + Z) * 0.5 - C * 0.5, 14, ae), re = te + 18;
      return !Number.isFinite(he) || !Number.isFinite(re) || D && re + P > I.height - 14 ? null : { left: he, top: re };
    }, m = Math.max(1, Number(((k = p.menuSize) == null ? void 0 : k.w) || 220)), y = Math.max(1, Number(((A = p.menuSize) == null ? void 0 : A.h) || 40)), _ = h(m, y, { requireFitsBelow: !1 });
    if (!_) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    E.selectionMenu = {
      visible: !0,
      left: _.left,
      top: _.top,
      items: f.items
    }, requestAnimationFrame(() => {
      if (!Qt || E.selectionMenu.visible !== !0) return;
      const C = Qt.getBoundingClientRect(), P = Math.round(Number((C == null ? void 0 : C.width) || 0)) || 220, D = Math.round(Number((C == null ? void 0 : C.height) || 0)) || 40;
      p.menuSize = { w: P, h: D, measured: !0 };
      const W = h(P, D);
      if (!W) {
        E.selectionMenu.visible = !1;
        return;
      }
      E.selectionMenu.left = W.left, E.selectionMenu.top = W.top;
    });
  }
  function Ti() {
    Oe.timer && (clearTimeout(Oe.timer), Oe.timer = 0), Oe.target = null, E.tooltip.visible = !1;
  }
  function av(i) {
    if (!cn || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    E.tooltip.text = s, E.tooltip.visible = !0;
    const c = i;
    requestAnimationFrame(() => {
      var Z, te;
      if (Oe.target !== c || !cn || !(c != null && c.isConnected)) return;
      const f = le.getBoundingClientRect(), h = c.getBoundingClientRect(), m = 8, y = 12, _ = Math.round(Number(((Z = cn.getBoundingClientRect()) == null ? void 0 : Z.width) || 0)) || 100, k = Math.round(Number(((te = cn.getBoundingClientRect()) == null ? void 0 : te.height) || 0)) || 24, A = !!c.closest(".pano-floating-left"), C = !!c.closest(".pano-frame-rail"), P = !!c.closest(".pano-paint-footer") || !!c.closest(".pano-paint-color-float");
      let D = "", W = h.left - f.left + h.width * 0.5 - _ * 0.5, ne = h.top - f.top - k - y;
      if (A)
        D = "tool-rail", W = h.right - f.left + 10, ne = h.top - f.top + h.height * 0.5 - k * 0.5, W = J(W, m, Math.max(m, f.width - _ - m)), ne = J(ne, m, Math.max(m, f.height - k - m));
      else if (C)
        D = "frame-rail", W = h.left - f.left - _ - 10, ne = h.top - f.top + h.height * 0.5 - k * 0.5, W = J(W, m, Math.max(m, f.width - _ - m)), ne = J(ne, m, Math.max(m, f.height - k - m));
      else if (P) {
        D = "footer";
        const ae = c.closest(".pano-paint-footer"), he = ae ? ae.getBoundingClientRect() : h;
        W = he.left - f.left + he.width * 0.5 - _ * 0.5, ne = he.bottom - f.top + 5, W = J(W, m, Math.max(m, f.width - _ - m)), ne = Math.max(m, ne);
      }
      W = J(W, m, Math.max(m, f.width - _ - m)), ne = Math.max(m, ne), E.tooltip.left = W, E.tooltip.top = ne, E.tooltip.variant = D, E.tooltip.visible = !0;
    });
  }
  const an = Lf({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = jt(Number(i.yaw || 0)), p.viewPitch = J(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = J(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = I.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || I.clientWidth || 0)),
        h: Math.max(1, Number(i.height || I.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = v.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = v.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: pi,
    onInteraction: () => {
      Ce.backgroundDirty = !0, Ce.dirty = !0;
    }
  });
  function sv(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += $g(s, i.lastAngle), i.lastAngle = s;
    const f = Vg(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: c.shiftKey,
      altKey: i.altStarted ? !1 : c.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = E.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = f, h.displayValue = Oo(f), h.fillPct = (f + 180) / 360 * 100), Gr(), Vc(i), de({ localOnly: !0 });
  }
  function lv(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = iy(i.rollGesture, s, c);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const h = (((m = E.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = f.rollDeg, h.displayValue = Oo(f.rollDeg), h.fillPct = (f.rollDeg + 180) / 360 * 100), Gr(), Vc(i), de({ localOnly: !0 });
  }
  const wh = (i, s) => {
    const c = Fi(i);
    return Math.atan2(c.y - s.y, c.x - s.x);
  };
  function Vc(i) {
    var y, _;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Oe.timer && (clearTimeout(Oe.timer), Oe.timer = 0), Oe.target = null;
    const s = tn(i.shot), c = (y = I.getBoundingClientRect) == null ? void 0 : y.call(I), f = (_ = le.getBoundingClientRect) == null ? void 0 : _.call(le);
    if (!s || !c || !f || I.width <= 0 || I.height <= 0) return;
    const h = c.width / I.width, m = c.height / I.height;
    E.tooltip.text = `${Oo(i.shot.roll_deg)}°`, E.tooltip.left = c.left - f.left + (s.x + s.w * 0.5) * h, E.tooltip.top = c.top - f.top + (s.y + s.h * 0.5) * m + 12, E.tooltip.variant = "roll", E.tooltip.visible = !0;
  }
  it == null || it.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const s = He();
    if (!s || s.locked === !0) return;
    const c = tn(s);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, h = wh(i, f);
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
    }, (m = it.setPointerCapture) == null || m.call(it, i.pointerId), i.preventDefault(), Gr(), Vc(p.interaction), de({ localOnly: !0 });
  }), it == null || it.addEventListener("pointermove", (i) => {
    var s;
    ((s = p.interaction) == null ? void 0 : s.kind) !== "roll_frame" || p.interaction.source !== "knob" || sv(
      p.interaction,
      wh(i, p.interaction.center),
      i
    );
  });
  const cv = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (ot(), lt(), ze()), p.interaction = null, Ti(), jr(), Gr(), de());
  };
  it == null || it.addEventListener("pointerup", cv), it == null || it.addEventListener("pointercancel", () => wa()), it == null || it.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && wa();
  }), it == null || it.addEventListener("dblclick", (i) => {
    const s = p.mode === "frame" && !r ? He() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, ot(), lt(), ze(), Gr(), de(), i.preventDefault());
  }), I.onpointerdown = (i) => {
    Le.selection && (Le.selection = null, Kr());
    const s = Fi(i);
    if (st = s, ks(s, !0), p.viewTween = null, an.state.inertia.active = !1, an.state.inertia.vx = 0, an.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const _ = He();
        if (!_ || r || _.locked === !0) return;
        p.interaction = {
          kind: "pan_frame",
          shot: _,
          last: s,
          start: {
            yaw_deg: Number(_.yaw_deg || 0),
            pitch_deg: Number(_.pitch_deg || 0)
          },
          changed: !1
        };
      } else if (bo())
        p.interaction = { kind: "space_pan", last: s };
      else {
        const _ = p.mode === "unwrap" ? s : _a(i);
        p.interaction = { kind: "view", last: _, lastTs: performance.now() }, an.startDrag(_.x, _.y, i.pointerId, performance.now());
      }
      mt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    if (bo() && (i.button === 2 || i.button === 0 && i.altKey)) {
      if (i.preventDefault(), i.button === 2) {
        const _ = _a(i);
        p.interaction = { kind: "view", last: _, lastTs: performance.now() }, an.startDrag(_.x, _.y, i.pointerId, performance.now());
      } else
        p.interaction = { kind: "space_orbit", last: s };
      mt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const _ = He(), k = tn(_);
      if (!_ || _.locked === !0 || !k) return;
      const A = ry({
        frame: k,
        point: s,
        startRollDeg: Number(_.roll_deg ?? _.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!A) return;
      p.interaction = {
        kind: "roll_frame",
        shot: _,
        center: A.center,
        lastAngle: A.lastAngle,
        accumulatedRad: A.accumulatedRad,
        rollGesture: A,
        start: { roll_deg: Number(_.roll_deg ?? _.rot_deg ?? 0) },
        changed: !1,
        altStarted: A.source === "alt",
        source: A.source
      }, I.setPointerCapture(i.pointerId), i.preventDefault(), Gr(), de({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const _ = He();
      if (!_ || r || _.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: _,
        last: s,
        start: { yaw_deg: Number(_.yaw_deg || 0), pitch_deg: Number(_.pitch_deg || 0) },
        changed: !1
      }, mt(s), I.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const _ = _a(i);
        p.interaction = { kind: "view", last: _, lastTs: performance.now() }, an.startDrag(_.x, _.y, i.pointerId, performance.now()), mt(s), I.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (q && !q.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (ph() || Lc())) {
      Jn();
      const _ = p.primaryTool === "mask" ? "mask" : "paint", k = p.primaryTool === "mask" ? p.maskTool : p.paintTool, A = p.mode === "frame" && Lc() ? He() : null, C = { kind: "ERP_GLOBAL" }, P = A ? hr(s, A, performance.now()) : dr(s, performance.now());
      if (!P) {
        mt(s);
        return;
      }
      p.interaction = {
        kind: k === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: _,
        _livePreviewToken: Fo("live"),
        stroke: k === "lasso_fill" ? bh(_, k, [P], C) : yh(_, k, [P], C)
      }, vo();
      const D = jn();
      if (D)
        if (p.paintEngine.beginStroke(p.interaction.stroke, D), p.interaction.kind === "paint_stroke") {
          const W = p.paintEngine.ensureTarget(D), ne = Number((P == null ? void 0 : P.u) ?? (P == null ? void 0 : P.x) ?? 0), Z = Number((P == null ? void 0 : P.v) ?? (P == null ? void 0 : P.y) ?? 0);
          p.paintEngine.appendStrokePoint(W, ne, Z, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, D);
      mt(s), I.setPointerCapture(i.pointerId), de();
      return;
    }
    const c = ur(), f = Nt(), h = c.length > 1 ? us(c) : f ? qt(f) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: s, current: s }, mt(s), I.setPointerCapture(i.pointerId), de({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (h != null && h.visible)) {
      if ((c.some((k) => Sn(k)) ? { kind: "none" } : $c(h, s)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: c.map((k) => k),
          offset: { x: s.x - h.center.x, y: s.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: c.filter((k) => yt(k)).map((k) => ({
            id: String(k.id || ""),
            yaw_deg: Number(Xt(k).yaw_deg || 0),
            pitch_deg: Number(Xt(k).pitch_deg || 0),
            center: (() => {
              var C, P;
              const A = qt(k);
              return A != null && A.visible ? { x: Number(((C = A.center) == null ? void 0 : C.x) || 0), y: Number(((P = A.center) == null ? void 0 : P.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: c.filter((k) => en(k)).map((k) => ({
            id: String(k.actionGroupId || k.id || ""),
            layerKind: String(k.layerKind || "paint"),
            snapshot: gn(cr(k.actionGroupId, k.layerKind)),
            frameSnapshot: gn(ui(k.actionGroupId, k.layerKind)),
            center: (() => {
              var C, P;
              const A = qt(k);
              return A != null && A.visible ? { x: Number(((C = A.center) == null ? void 0 : C.x) || 0), y: Number(((P = A.center) == null ? void 0 : P.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: cc(k.actionGroupId, k.layerKind)
          })),
          rasterSnapshots: c.filter((k) => pn(k)).map((k) => ({
            id: on(k.rasterObjectId || k.id || ""),
            snapshot: gn(En().find((A) => String((A == null ? void 0 : A.id) || "") === on(k.rasterObjectId || k.id || ""))),
            center: (() => {
              var C, P;
              const A = qt(k);
              return A != null && A.visible ? { x: Number(((C = A.center) == null ? void 0 : C.x) || 0), y: Number(((P = A.center) == null ? void 0 : P.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Vd(k)
          }))
        }, mt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    } else if (f && (h != null && h.visible)) {
      const _ = Sn(f) ? { kind: "none" } : $c(h, s, f);
      if (_.kind === "scale") {
        p.interaction = en(f) ? {
          kind: "scale_stroke_group",
          item: f,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: gn(cr(f.actionGroupId, f.layerKind)),
          frameSnapshot: gn(ui(f.actionGroupId, f.layerKind)),
          cursor: _.cursor
        } : pn(f) ? {
          kind: "scale_raster_object",
          item: f,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: gn(En().find((k) => String((k == null ? void 0 : k.id) || "") === on(f.rasterObjectId || f.id || ""))),
          cursor: _.cursor
        } : {
          kind: "scale",
          item: f,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Xt(f).hFOV_deg || 20),
          startVFOV: Number(Xt(f).vFOV_deg || 20),
          cursor: _.cursor
        }, mt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (_.kind === "scale_x" || _.kind === "scale_y") {
        p.interaction = {
          kind: _.kind,
          item: f,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Xt(f).hFOV_deg || 20),
          startVFOV: Number(Xt(f).vFOV_deg || 20),
          cursor: _.cursor,
          edge: _.edge
        }, mt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (_.kind === "rotate") {
        p.interaction = en(f) ? {
          kind: "rotate_stroke_group",
          item: f,
          center: h.center,
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x),
          snapshot: gn(cr(f.actionGroupId, f.layerKind)),
          frameSnapshot: gn(ui(f.actionGroupId, f.layerKind))
        } : {
          kind: "rotate",
          item: f,
          center: h.center,
          startRot: Number(Xt(f).rot_deg || Xt(f).roll_deg || 0),
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x)
        }, mt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (_.kind === "move") {
        if (en(f)) {
          const k = p.mode === "frame" ? (() => {
            const A = He();
            return A ? hr(s, A, performance.now()) : null;
          })() : dr(s, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: f,
            startUv: k,
            snapshot: gn(cr(f.actionGroupId, f.layerKind)),
            frameSnapshot: gn(ui(f.actionGroupId, f.layerKind))
          }, mt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        if (pn(f)) {
          const k = p.mode === "frame" ? (() => {
            const A = He();
            return A ? hr(s, A, performance.now()) : null;
          })() : dr(s, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: f,
            startUv: k,
            snapshot: gn(En().find((A) => String((A == null ? void 0 : A.id) || "") === on(f.rasterObjectId || f.id || "")))
          }, mt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: f,
          offset: { x: s.x - h.center.x, y: s.y - h.center.y }
        }, mt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = vh(s);
    if (m) {
      const _ = p.selectedId !== m.item.id;
      if (_ && p.selectedId && (ot(), Fn()), _r(m.item), t === "cutout" && _ && (p.cutoutAspectOpen = !1), _ && ze(), Xe(), de(), Sn(m.item)) {
        mt(s);
        return;
      }
      p.interaction = {
        kind: en(m.item) ? "move_stroke_group" : pn(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: en(m.item) || pn(m.item) ? p.mode === "frame" ? (() => {
          const k = He();
          return k ? hr(s, k, performance.now()) : null;
        })() : dr(s, performance.now()) : null,
        snapshot: en(m.item) ? gn(cr(m.item.actionGroupId, m.item.layerKind)) : pn(m.item) ? gn(En().find((k) => String((k == null ? void 0 : k.id) || "") === on(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: en(m.item) ? gn(ui(m.item.actionGroupId, m.item.layerKind)) : null
      }, mt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    const y = !!p.selectedId;
    if (y && (ot(), Fn()), ca(), y && ze(), Xe(), de(), p.mode === "pano") {
      const _ = _a(i);
      p.interaction = { kind: "view", last: _, lastTs: performance.now() }, an.startDrag(_.x, _.y, i.pointerId, performance.now()), mt(s), I.setPointerCapture(i.pointerId);
    }
  };
  function uv(i, s) {
    if (!S || !kt.playing) return;
    if (kt.stop(), i.kind === "move_multi") {
      const h = us(i.items);
      if (!(h != null && h.visible)) return;
      i.offset = { x: s.x - h.center.x, y: s.y - h.center.y }, i.startCenter = { x: h.center.x, y: h.center.y };
      for (const m of i.stickerSnapshots) {
        const y = i.items.find((k) => String((k == null ? void 0 : k.id) || "") === m.id), _ = y ? qt(y) : null;
        _ != null && _.visible && (m.yaw_deg = Number(Xt(y).yaw_deg || 0), m.pitch_deg = Number(Xt(y).pitch_deg || 0), m.center = { x: _.center.x, y: _.center.y });
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
  I.onpointermove = (i) => {
    var f, h, m, y, _, k, A, C, P, D, W, ne, Z, te, ae, he, re, Se, Ge, Ue, nt, ye;
    const s = Fi(i);
    if (ks(s, !0), !p.interaction) {
      mt(s);
      return;
    }
    mt(s);
    const c = p.interaction;
    if (st && (s.x !== st.x || s.y !== st.y)) {
      const ie = st;
      st = null, ["view", "marquee_select", "space_pan", "space_orbit"].includes(c.kind) || uv(c, ie);
    }
    if (c.kind === "paint_stroke") {
      const ie = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      ie.forEach((we) => {
        const Re = Fi(we);
        if (p.mode === "frame") {
          const We = He(), Te = We ? tn(We) : null;
          if (Te) {
            const ft = (Re.x - Te.x) / Math.max(1, Te.w), qe = (Re.y - Te.y) / Math.max(1, Te.h);
            if (!(ft >= 0 && ft <= 1 && qe >= 0 && qe <= 1)) {
              c._outOfFrame = !0;
              return;
            }
            c._outOfFrame && (c._outOfFrame = !1, nv(c));
          }
        }
        Q1(c, Re, performance.now()) && (pe = !0);
      }), pe && de({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const ie = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      if (ie.forEach((we) => {
        const Re = Fi(we);
        if (p.mode === "frame") {
          const We = He(), Te = We ? tn(We) : null;
          if (Te) {
            const ft = (Re.x - Te.x) / Math.max(1, Te.w), qe = (Re.y - Te.y) / Math.max(1, Te.h);
            if (!(ft >= 0 && ft <= 1 && qe >= 0 && qe <= 1)) {
              c._outOfFrame = !0;
              return;
            }
            c._outOfFrame && (c._outOfFrame = !1, rv(c));
          }
        }
        ev(c, Re, performance.now()) && (pe = !0);
      }), pe) {
        const we = jn();
        we && p.paintEngine.updateActiveStroke(c.stroke, we), de({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const ie = performance.now(), pe = p.mode === "unwrap" ? s : _a(i);
      an.moveDrag(pe.x, pe.y, p.mode === "unwrap" ? "unwrap" : "pano", ie), c.lastTs = ie, c.last = pe, de({ localOnly: !0 });
      return;
    }
    if (c.kind === "space_pan" || c.kind === "space_orbit") {
      const ie = ua();
      bc(c.kind === "space_pan" ? xS(ie, s.x - c.last.x, s.y - c.last.y, I.width, I.height, Ed()) : _S(ie, s.x - c.last.x, s.y - c.last.y, I.height)), c.last = s;
      return;
    }
    if (c.kind === "pan_frame") {
      const ie = Dc(c.shot);
      if (!ie || !c.shot) return;
      const pe = s.x - c.last.x, we = s.y - c.last.y, Re = oy(c.shot, {
        dx: pe,
        dy: we,
        focalPx: ie.focalPx,
        invertX: ((f = v.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
        invertY: ((h = v.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      c.shot.yaw_deg = Re.yaw_deg, c.shot.pitch_deg = Re.pitch_deg, c.changed = c.changed || Math.abs(pe) > 0 || Math.abs(we) > 0, c.last = s, de({ localOnly: !0 });
      return;
    }
    if (c.kind === "roll_frame") {
      if (c.source === "knob") return;
      lv(c, s, i);
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
        }, Te = Ac(we, We);
        if (!Te) return;
        const ft = Ks(Te);
        lr(c.item, { yaw_deg: ft.yaw, pitch_deg: ft.pitch });
      } else if (p.mode === "unwrap") {
        const we = pi(), Re = J((ie - we.x) / Math.max(we.w, 1), 0, 1), We = J((pe - we.y) / Math.max(we.h, 1), 0, 1);
        lr(c.item, { yaw_deg: jt(Re * 360 - 180), pitch_deg: J(90 - We * 180, -90, 90) });
      } else {
        const we = _c(ie, pe), Re = Ks(we);
        lr(c.item, { yaw_deg: Re.yaw, pitch_deg: Re.pitch });
      }
      yt(c.item) && Wt(), de({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const ie = p.mode === "frame" ? (() => {
        const Re = He();
        return Re ? hr(s, Re, performance.now()) : null;
      })() : dr(s, performance.now());
      if (!ie || !c.startUv) return;
      const pe = qn(Number(ie.u || 0), Number(c.startUv.u || 0)), we = Number(ie.v || 0) - Number(c.startUv.v || 0);
      pd((m = c.item) == null ? void 0 : m.actionGroupId, pe, we, c.snapshot, (y = c.item) == null ? void 0 : y.layerKind, c.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const ie = p.mode === "frame" ? (() => {
        const Re = He();
        return Re ? hr(s, Re, performance.now()) : null;
      })() : dr(s, performance.now());
      if (!ie || !c.startUv) return;
      const pe = qn(Number(ie.u || 0), Number(c.startUv.u || 0)), we = Number(ie.v || 0) - Number(c.startUv.v || 0);
      gd(((_ = c.item) == null ? void 0 : _.rasterObjectId) || ((k = c.item) == null ? void 0 : k.id) || "", pe, we, c.snapshot) && (So(), de({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_raster_object") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      $y(((A = c.item) == null ? void 0 : A.rasterObjectId) || ((C = c.item) == null ? void 0 : C.id) || "", pe, c.snapshot) && (So(), de({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const ie = s.x - Number(((P = c.offset) == null ? void 0 : P.x) || 0), pe = s.y - Number(((D = c.offset) == null ? void 0 : D.y) || 0);
      let we = !1, Re = !1, We = !1;
      const Te = ie - Number(((W = c.startCenter) == null ? void 0 : W.x) || ie), ft = pe - Number(((ne = c.startCenter) == null ? void 0 : ne.y) || pe);
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
          const Di = {
            x: J((fn.x - Rt.x) / Math.max(1, Rt.w), 0, 1),
            y: J((fn.y - Rt.y) / Math.max(1, Rt.h), 0, 1)
          }, jh = Ac(Pt, Di);
          if (!jh) continue;
          const Hh = Ks(jh);
          lr(Lt, { yaw_deg: Hh.yaw, pitch_deg: Hh.pitch });
        } else if (p.mode === "unwrap") {
          const Pt = pi(), Rt = J((fn.x - Pt.x) / Math.max(Pt.w, 1), 0, 1), Di = J((fn.y - Pt.y) / Math.max(Pt.h, 1), 0, 1);
          lr(Lt, { yaw_deg: jt(Rt * 360 - 180), pitch_deg: J(90 - Di * 180, -90, 90) });
        } else {
          const Pt = _c(fn.x, fn.y), Rt = Ks(Pt);
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
          const Rt = qn(Number(fn.u || 0), Number(Pt.u || 0)), Di = Number(fn.v || 0) - Number(Pt.v || 0);
          pd(qe.id, Rt, Di, qe.snapshot, qe.layerKind, qe.frameSnapshot) && (we = !0, Re = !0);
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
          const Rt = qn(Number(fn.u || 0), Number(Pt.u || 0)), Di = Number(fn.v || 0) - Number(Pt.v || 0);
          gd(qe.id, Rt, Di, qe.snapshot) && (we = !0, We = !0);
        }
      }
      we && (Re ? fr({ rebuildPaintEngine: !1 }) : We ? So() : Wt(), de({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      md((Ge = c.item) == null ? void 0 : Ge.actionGroupId, pe, 0, c.snapshot, (Ue = c.item) == null ? void 0 : Ue.layerKind, c.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let ie = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - Number(c.startAng || 0)) * Yi;
      i.shiftKey && (ie = Math.round(ie / 45) * 45), md((nt = c.item) == null ? void 0 : nt.actionGroupId, 1, ie, c.snapshot, (ye = c.item) == null ? void 0 : ye.layerKind, c.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = s, de({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
      lr(c.item, { hFOV_deg: J(c.startHFOV * pe, 1, 179), vFOV_deg: J(c.startVFOV * pe, 1, 179) }), sr(c.item) || (c.item.aspect_id = Ui(c.item)), yt(c.item) && Wt(), de({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
      lr(c.item, { hFOV_deg: J(c.startHFOV * pe, 1, 179) }), sr(c.item) || (c.item.aspect_id = Ui(c.item)), yt(c.item) && Wt(), de({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
      lr(c.item, { vFOV_deg: J(c.startVFOV * pe, 1, 179) }), sr(c.item) || (c.item.aspect_id = Ui(c.item)), yt(c.item) && Wt(), de({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let pe = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - c.startAng) * Yi, we = c.startRot - pe;
      i.shiftKey && (we = Math.round(we / 45) * 45), lr(c.item, { [yt(c.item) ? "rot_deg" : "roll_deg"]: we }), yt(c.item) && Wt(), de({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var s, c, f, h, m, y, _, k;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        p.interaction = null, mt(p.pointerPos);
        return;
      }
      if (((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
        vo();
        const A = Rc(p.interaction), C = !!p.interaction._hasCommittedSegments;
        if (A || C) {
          fr();
          const P = String(((f = p.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (P) {
            const W = hn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === P);
            W && (W.frame = null);
          }
          const D = jn();
          D && (A ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(D), Yd()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, D) : p.paintEngine.cancelActiveStroke(D)), ot(), Fn(), ze(), Xe(), e.setDirtyCanvas(!0, !0), de();
        } else {
          const P = jn();
          P && p.paintEngine.cancelActiveStroke(P);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const A = _h(p.interaction.start, p.interaction.current), P = [
          ...t === "cutout" ? Pc().filter((D) => !zn(D)) : [...dn()],
          ...Ty(),
          ...Dy()
        ].filter((D) => ov(A, qt(D)));
        jy(P, ((y = P[P.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && P.length && (p.cutoutAspectOpen = !1), ze(), Xe(), de();
      } else if (((_ = p.interaction) == null ? void 0 : _.kind) === "pan_frame" || ((k = p.interaction) == null ? void 0 : k.kind) === "roll_frame")
        p.interaction.changed && (ot(), lt(), ze());
      else if (p.interaction && p.interaction.kind !== "view") {
        let A = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (A = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (A = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (A = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (A = !0), A && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? fr({ rebuildPaintEngine: !0 }) : So()), ot(), Fn(), e.setDirtyCanvas(!0, !0), ko(), Xe(), de();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Ti(), vo(), i && i.kind === "view" && an.endDrag(performance.now()), jr(), Xe(), mt(p.pointerPos), de();
    }
  }, I.onpointercancel = () => {
    var i, s, c;
    if (!wa()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && an.endDrag(performance.now()), ((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
        vo();
        const f = jn();
        f && p.paintEngine.cancelActiveStroke(f);
      }
      p.interaction = null, vo(), jr(), mt(p.pointerPos), de({ localOnly: !0 });
    }
  }, I.onlostpointercapture = () => {
    wa();
  }, I.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, I.oncontextmenu = (i) => {
    bo() && i.preventDefault();
  }, I.onmousemove = (i) => {
    const s = Fi(i), c = ks(s, !0);
    p.interaction || (mt(s), c && p.mode === "frame" && p.primaryTool === "cursor" && de({ localOnly: !0 }));
  }, I.onmouseleave = () => {
    ks(p.pointerPos, !1), mt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && de({ localOnly: !0 });
  }, I.onwheel = (i) => {
    if (p.mode === "frame") {
      const s = Fi(i), c = vl(i);
      c && U1(s, c) && de({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (p.mode === "pano") {
      if (bo()) {
        const s = vl(i);
        s && bc(SS(ua(), -s, Ed()));
      } else an.applyWheelEvent(i) && de({ localOnly: !0 });
      i.preventDefault();
    }
  }, I.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), vr(!0));
  }, I.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), je.depth = 0, vr(!1);
    const c = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((h) => Er(h));
    c && sh(c);
  };
  const xh = (i) => {
    t !== "stickers" && t !== "cutout" || r || Vn(i) && (je.depth += 1, vr(!0), i.preventDefault());
  }, Sh = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!je.active && Vn(i) && vr(!0), je.active && i.preventDefault());
  }, kh = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !je.active) return;
    je.depth = Math.max(0, je.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (je.depth === 0 || s) && vr(!1);
  }, Mh = (i) => {
    t !== "stickers" && t !== "cutout" || r || (je.depth = 0, vr(!1), Vn(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", xh, !0), window.addEventListener("dragover", Sh, !0), window.addEventListener("dragleave", kh, !0), window.addEventListener("drop", Mh, !0);
  function zc() {
    const { canUndo: i, canRedo: s } = ih();
    ji(E.toolButtons, "value", "undo", { disabled: !i }), ji(E.toolButtons, "value", "redo", { disabled: !s });
  }
  const Nh = (i, s, c = !1) => {
    var A;
    Jn();
    const f = t === "cutout" && p.mode === "frame" ? He() : null, h = f || Nt(), m = f ? "shot" : fs(), y = S && p.inspectCamera;
    if (!y && (!h || m === "stroke" || Sn(h))) return;
    const _ = (((A = E.sidePanel) == null ? void 0 : A.params) || []).find((C) => C.key === i);
    if (!_ || _.enabled === !1) return;
    let k = Number(s);
    if (Number.isNaN(k) && (k = 0), k = J(k, Number(_.min), Number(_.max)), i === "yaw_deg" && (k = jt(k)), y) {
      hS(v.camera, p.frame, i, k), ze(), c && ot();
      return;
    }
    i === "opacity" ? pS(h, p.frame, k / 100) : lr(h, { [i]: k }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = Ui(h)), ze(), de(), c && ot();
  };
  ee == null || ee.addEventListener("click", async (i) => {
    var f, h, m, y, _, k, A;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const c = String(s.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const C = Gn(s.getAttribute("data-coverage"));
      if (C === Gn(v.coverage)) return;
      v.coverage = C, p.coverage = C, d && (d.value = String(C)), a ? Ce.backgroundDirty = !0 : (Fn(), B1({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), Xe(), de();
      return;
    }
    if (c === "toggle-selection-picker") {
      if ((h = (f = E.sidePanel) == null ? void 0 : f.selectionPicker) != null && h.disabled) return;
      E.sidePanel.selectionPicker.open = !E.sidePanel.selectionPicker.open;
      return;
    }
    if (c === "select-picker-item") {
      E.sidePanel.selectionPicker.open = !1;
      const C = String(s.getAttribute("data-selection-id") || "");
      let P = null;
      if (C && (t === "stickers" ? P = dn().find((D) => String((D == null ? void 0 : D.id) || "") === C) || null : P = ((m = bd().find((D) => {
        var W;
        return String(((W = D == null ? void 0 : D.item) == null ? void 0 : W.id) || "") === C;
      })) == null ? void 0 : m.item) || null), _r(P || null), P && !en(P)) {
        const D = Xt(P);
        Ii(
          jt(Number(D.yaw_deg || 0)),
          J(Number(D.pitch_deg || 0), -89.9, 89.9),
          p.viewFov
        );
      }
      ze(), Xe(), de();
      return;
    }
    if (c === "copy-state-inline") {
      const C = Nt(), P = fs();
      if (!C || P === "stroke" || ur().length > 1) return;
      const D = JSON.stringify(t === "cutout" && P !== "image" ? Nd(C) : tb(Xt(C)));
      try {
        await navigator.clipboard.writeText(D), (y = E.sidePanel) != null && y.copyStateButton && (E.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var W;
          (W = E.sidePanel) != null && W.copyStateButton && (E.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (c === "toggle-visibility") {
      const C = String(s.getAttribute("data-visibility") || "");
      C === "panorama" ? p.showPanorama = !p.showPanorama : C === "objects" ? p.showObjects = !p.showObjects : C === "mask" && (p.showMask = !p.showMask), ze(), de();
      return;
    }
    if (c === "set-invert-x") {
      v.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Tc(), ze(), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0), de();
      return;
    }
    if (c === "set-invert-y") {
      v.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Tc(), ze(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), de();
      return;
    }
    if (c === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, Tc(), ze(), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0), de();
      return;
    }
    if (c === "close-preview") {
      Ao();
      return;
    }
    if (c === "cancel-close") {
      Ao();
      return;
    }
    c === "save-close" && (G1(), Ao());
  }), ee == null || ee.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Nh(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), ee == null || ee.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Nh(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const jc = () => Ad();
  jc(), T.addEventListener("click", (i) => {
    var _, k, A, C;
    if ((k = (_ = i.target) == null ? void 0 : _.matches) != null && k.call(_, "[data-confirm-overlay]")) {
      const P = (A = E.confirmDialog) == null ? void 0 : A.resolve;
      E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, P == null || P(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const P = p.mode;
      p.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (P !== "frame" && (Ce.frameSafeRect = null), ze(), Xe()), Ss(), jr(), de();
      return;
    }
    const c = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (c && !r) {
      if (c.matches("[data-tool-mode]")) {
        const P = String(c.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = P, (P === "paint" || P === "mask") && ca({ preservePanelValues: !0 }), On(), ze(), Xe(), de();
        return;
      }
      if (c.matches("[data-tool-ui-action]")) {
        const P = String(c.getAttribute("data-tool-ui-action") || "");
        if ((P === "undo" || P === "redo") && c.disabled) return;
        P === "undo" ? Ic(-1) : P === "redo" ? Ic(1) : P === "clear" ? R1() : P === "add" || P === "add-image" ? P1() : P === "add-or-look" && T1();
        return;
      }
      if (c.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const P = String(c.getAttribute("data-paint-tool") || "pen");
        p.paintTool = P, ca({ preservePanelValues: !0 }), Tn[P] && (p.activeBrushPresetId = P), On(), ze(), Xe(), de();
        return;
      }
      if (c.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(c.getAttribute("data-mask-tool") || "pen"), ca({ preservePanelValues: !0 }), On(), ze(), Xe(), de();
        return;
      }
      if (c.matches("[data-paint-layer-clear-current]")) {
        const P = String(c.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        $1(P);
        return;
      }
      if (c.matches("[data-paint-color-swatch]")) {
        const P = ll.find((D) => D.id === c.getAttribute("data-paint-color-swatch"));
        if (!P) return;
        p.paintColor = Hn(P.color), $e(!0), On();
        return;
      }
      if (c.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), q && !q.hidden ? $e(!0) : Ee(), On();
        return;
      }
    }
    const f = String(((C = c == null ? void 0 : c.getAttribute) == null ? void 0 : C.call(c, "data-action")) || "");
    if (f === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      Ae.resumeAfterScrub = !1, Oc();
      return;
    }
    if (f === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), wd(), typeof (c == null ? void 0 : c.blur) == "function" && c.blur();
      return;
    }
    if (f === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      const P = !E.videoTransport.loop;
      E.videoTransport.loop = P, Y.loop = P, fi({
        hasAudio: E.videoTransport.hasAudio,
        loop: P,
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
        const P = p.mode === "frame" ? He() : null;
        if (!P || P.locked === !0) return;
        uh(P, String(c.getAttribute("data-aspect") || "1:1")), E.frameRail.aspectOpen = !1, ko(), ot(), lt(), jr(), de();
        return;
      }
      if (f === "frame-aspect-custom") {
        const P = p.mode === "frame" ? He() : null, D = c.getAttribute("data-custom-width"), W = c.getAttribute("data-custom-height");
        if (!P || !z1(P, D, W)) return;
        E.frameRail.aspectOpen = !1, ko(), ot(), lt(), jr(), de();
        return;
      }
      if (f === "frame-rotate-90") {
        const P = p.mode === "frame" ? He() : null;
        if (!P || P.locked === !0) return;
        fh(P), E.frameRail.aspectOpen = !1, ko(), ot(), lt(), jr(), de();
        return;
      }
      if (f === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Xe(), de();
        return;
      }
      if (f === "aspect-set") {
        const P = Nt();
        if (!P) return;
        const D = String(c.getAttribute("data-aspect") || "1:1");
        uh(P, D), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, ko(), ot(), lt(), Xe(), de();
        return;
      }
      if (f === "rotate-90") {
        const P = Nt();
        if (!P) return;
        fh(P), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, ko(), ot(), lt(), Xe(), de();
        return;
      }
      if (f === "bring-front") {
        j1();
        return;
      }
      if (f === "send-back") {
        H1();
        return;
      }
      if (f === "duplicate") {
        V1();
        return;
      }
      if (f === "replace-image") {
        E1();
        return;
      }
      if (f === "toggle-lock") {
        zy();
        return;
      }
      if (f === "back-initial") {
        Uy();
        return;
      }
      if (f === "toggle-visible") {
        Wy();
        return;
      }
      if (f === "delete") {
        ch();
        return;
      }
    }
    if (f === "reset-view") {
      if (p.mode === "frame") return;
      Ii(0, 0, 100, 180, 680), p.viewPosition = [0, 0, 0], p.viewMoved = !1;
      return;
    }
    if (f === "frame-view") {
      lb();
      return;
    }
    if (f === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, _C(e == null ? void 0 : e.id, p.showGrid), jc(), de();
      return;
    }
    if (f === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), hv();
      return;
    }
    if (f === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const P = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = P, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = P ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Eh(), de();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), y = p.customPaintHistory[m];
    y && (p.customPaintColor = Hn(y), p.paintColor = Hn(y), On());
  }), T.addEventListener("input", (i) => {
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
      Y.volume = m, Y.muted = m <= 1e-4, fi({
        hasAudio: E.videoTransport.hasAudio,
        muted: Y.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), y = yi(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[y] = m, On(), Z1();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: J(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = Hn(m), p.paintColor = Hn(m), On();
    }
  }), T.addEventListener("change", (i) => {
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
  }), T.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ms();
  }), T.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ms();
  }), T.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Ms();
  }), T.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !T.contains(s) || Oe.target !== s && (Oe.target = s, Oe.timer && clearTimeout(Oe.timer), Oe.timer = window.setTimeout(() => {
      Oe.target === s && av(s);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var f, h;
    const s = i.target.closest("[data-tip]");
    !s || Oe.target !== s || (i.relatedTarget instanceof Element ? (h = (f = i.relatedTarget).closest) == null ? void 0 : h.call(f, "[data-tip]") : null) === s || Ti();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Ti();
  });
  const fv = (i, s) => {
    var _;
    if (!be) return;
    const c = be.getBoundingClientRect(), f = J((i - c.left) / Math.max(1, c.width), 0, 1), h = 1 - J((s - c.top) / Math.max(1, c.height), 0, 1), m = Cu(p.customPaintColor), y = { ...Au(m.h, f, h), a: Number(((_ = p.customPaintColor) == null ? void 0 : _.a) ?? 1) };
    p.customPaintColor = Hn(y), p.paintColor = Hn(y), On();
  }, dv = (i) => {
    var m;
    if (!ge) return;
    const s = ge.getBoundingClientRect(), c = J((i - s.left) / Math.max(1, s.width), 0, 1), f = Cu(p.customPaintColor), h = { ...Au(c, f.s, f.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = Hn(h), p.paintColor = Hn(h), On();
  }, Ph = (i, s) => {
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
    i.preventDefault(), i.stopPropagation(), Ph(i, (s) => fv(s.clientX, s.clientY));
  }), ge && (ge.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Ph(i, (s) => dv(s.clientX));
  }), T.addEventListener("click", (i) => {
    var h;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const c = s.getAttribute("data-action") === "confirm-accept", f = (h = E.confirmDialog) == null ? void 0 : h.resolve;
    E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(c);
  });
  const Ah = () => {
    const i = !!p.fullscreen;
    ji(E.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Pe.fullscreen_close : Pe.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ns = (i) => {
    const s = !!i;
    p.fullscreen !== s && (p.fullscreen = s, T.classList.toggle("pano-modal-fullscreen", s), s ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), jc(), Ah(), Yt(), de());
  }, Ch = () => document.fullscreenElement === _e, hv = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Ns(!p.fullscreen);
        return;
      }
      Ch() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = _e.requestFullscreen) == null ? void 0 : i.call(_e));
    } catch {
      Ns(!p.fullscreen);
    }
  }, Ih = () => {
    document.fullscreenEnabled && Ns(Ch());
  };
  document.addEventListener("fullscreenchange", Ih), Ah();
  const Eh = () => {
    const i = !!p.outputPreviewExpanded;
    E.outputPreviewToggle.icon = i ? Pe.fullscreen_close : Pe.fullscreen, E.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", E.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Eh();
  const Hc = e.onConnectionsChange;
  let Gc = null, Oh = () => {
  };
  !r && t === "stickers" && (Oh = cy(e, (i = "sync") => {
    i === "executed" && (aC(Be, zs), di(), S && M1()), Pd(i);
  }, { editor: !0 }), Gc = function(...s) {
    typeof Hc == "function" && Hc.apply(this, s), di(), ti(this, "connections");
  }, e.onConnectionsChange = Gc), r || Mm.set(String(e.id ?? "0"), () => Dd());
  let Po = null;
  const Ao = async () => Po || (Po = (async () => {
    var i, s, c, f, h, m, y, _;
    return Mm.delete(String(e.id ?? "0")), Y1(), r || Fn(), document.fullscreenElement === _e && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Ih), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === hh && (e.__panoFlushStateBeforeQueue = null), (c = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || c.call(s), (h = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), (_ = (y = (m = Or) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || _.call(y, !0, !0), Ti(), _1(), Y instanceof HTMLVideoElement && Y.pause(), gt.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), Bt.dispose(), vr(!1), window.removeEventListener("keydown", Fh, !0), window.removeEventListener("keydown", Th, !0), window.removeEventListener("keydown", Lh, !0), window.removeEventListener("keyup", Rh, !0), window.removeEventListener("keydown", Ps, !0), window.removeEventListener("keyup", Ps, !0), window.removeEventListener("blur", $h), window.removeEventListener("keydown", Vh, !0), window.removeEventListener("dragenter", xh, !0), window.removeEventListener("dragover", Sh, !0), window.removeEventListener("dragleave", kh, !0), window.removeEventListener("drop", Mh, !0), !r && t === "stickers" && (e.onConnectionsChange === Gc && (e.onConnectionsChange = Hc), Oh()), H.unmount(), R.remove(), K1(), Po = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Po = null, !1)), Po), Fh = (i) => {
    var s, c, f, h, m;
    if (i.key === "Escape") {
      if (wa()) {
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
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Ao();
    }
  }, Th = (i) => {
    const s = String(i.key || ""), c = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || c === "Delete" || f === 46) && !(s === "Backspace" || c === "Backspace" || f === 8)) return;
    const y = i.target, _ = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    if (_ === "INPUT" || _ === "TEXTAREA" || y != null && y.isContentEditable) return;
    if (Le.selection) {
      k1(), i.preventDefault(), i.stopPropagation();
      return;
    }
    Nt() && (ch(), i.preventDefault(), i.stopPropagation());
  }, Dh = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !S || !E.timeline.visible || E.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !_e.contains(s)) return !1;
    const c = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return c === "INPUT" ? !BA.has(String(s.type || "text").toLowerCase()) : c !== "TEXTAREA" && c !== "SELECT" && !(s != null && s.isContentEditable);
  }, Lh = (i) => {
    Dh(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Oc());
  }, Rh = (i) => {
    Dh(i) && (i.preventDefault(), i.stopPropagation());
  }, Ps = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), c = !!i.altKey;
    p.marqueeModifier === s && p.altModifier === c || (p.marqueeModifier = s, p.altModifier = c, Gr(), mt(p.pointerPos));
  }, $h = () => {
    p.marqueeModifier = !1, p.altModifier = !1, Gr(), mt(p.pointerPos);
  }, Vh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (s !== "z" && c !== "KeyZ") return;
    const f = i.target, h = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: y } = ih();
    i.shiftKey && !y || !i.shiftKey && !m || (Ic(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Fh, !0), window.addEventListener("keydown", Th, !0), window.addEventListener("keydown", Lh, !0), window.addEventListener("keyup", Rh, !0), window.addEventListener("keydown", Ps, !0), window.addEventListener("keyup", Ps, !0), window.addEventListener("blur", $h), window.addEventListener("keydown", Vh, !0), _e.addEventListener("pointerdown", (i) => {
    i.target === _e && Ao();
  });
  function wr(i, s, { rollbackState: c = !1 } = {}) {
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
  wr("cutout-focus", ab), !r && t === "stickers" && wr("external-sticker-sync", () => Pd("open"), { rollbackState: !0 }), O1().catch((i) => {
    E.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), wr("history", ot), wr("undo-redo", zc), wr("paint-ui", On), wr("side-panel", ze), wr("look-at-frame", yc), wr("video-source", di), wr("canvas-size", eh), wr("cursor", () => mt(p.pointerPos)), de(), Ce.rafId = requestAnimationFrame(nh);
}
Or.registerExtension(SM({
  app: Or,
  openEditor: NC,
  attachStickers: RN,
  attachCutout: $N,
  attachPreview: LN,
  restoreOutput: SN,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: qA
}));
