import * as es from "../../scripts/app.js";
import { app as zn } from "../../scripts/app.js";
import { api as wn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Vu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pt = {}, Ji = [], ar = () => {
}, kh = () => !1, Os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fs = (e) => e.startsWith("onUpdate:"), an = Object.assign, ju = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, sb = Object.prototype.hasOwnProperty, ot = (e, t) => sb.call(e, t), Ke = Array.isArray, Zi = (e) => to(e) === "[object Map]", Ph = (e) => to(e) === "[object Set]", Wf = (e) => to(e) === "[object Date]", We = (e) => typeof e == "function", Tt = (e) => typeof e == "string", or = (e) => typeof e == "symbol", ct = (e) => e !== null && typeof e == "object", Ah = (e) => (ct(e) || We(e)) && We(e.then) && We(e.catch), Ch = Object.prototype.toString, to = (e) => Ch.call(e), lb = (e) => to(e).slice(8, -1), Th = (e) => to(e) === "[object Object]", Hu = (e) => Tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ra = /* @__PURE__ */ Vu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ub = /-\w/g, fn = Rs(
  (e) => e.replace(ub, (t) => t.slice(1).toUpperCase())
), cb = /\B([A-Z])/g, pi = Rs(
  (e) => e.replace(cb, "-$1").toLowerCase()
), Ls = Rs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ll = Rs(
  (e) => e ? `on${Ls(e)}` : ""
), er = (e, t) => !Object.is(e, t), ts = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ih = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Uu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Yf;
const zs = () => Yf || (Yf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ot(e) {
  if (Ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = Tt(i) ? mb(i) : Ot(i);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (Tt(e) || ct(e))
    return e;
}
const fb = /;(?![^(]*\))/g, db = /:([^]+)/, hb = /\/\*[^]*?\*\//g;
function mb(e) {
  const t = {};
  return e.replace(hb, "").split(fb).forEach((n) => {
    if (n) {
      const i = n.split(db);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if (Tt(e))
    t = e;
  else if (Ke(e))
    for (let n = 0; n < e.length; n++) {
      const i = st(e[n]);
      i && (t += i + " ");
    }
  else if (ct(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const pb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gb = /* @__PURE__ */ Vu(pb);
function Eh(e) {
  return !!e || e === "";
}
function bb(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Gu(e[i], t[i]);
  return n;
}
function Gu(e, t) {
  if (e === t) return !0;
  let n = Wf(e), i = Wf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = or(e), i = or(t), n || i)
    return e === t;
  if (n = Ke(e), i = Ke(t), n || i)
    return n && i ? bb(e, t) : !1;
  if (n = ct(e), i = ct(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(t).length;
    if (a !== l)
      return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c), m = t.hasOwnProperty(c);
      if (f && !m || !f && m || !Gu(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Dh = (e) => !!(e && e.__v_isRef === !0), lt = (e) => Tt(e) ? e : e == null ? "" : Ke(e) || ct(e) && (e.toString === Ch || !We(e.toString)) ? Dh(e) ? lt(e.value) : JSON.stringify(e, Oh, 2) : String(e), Oh = (e, t) => Dh(t) ? Oh(e, t.value) : Zi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], l) => (n[zl(i, l) + " =>"] = a, n),
    {}
  )
} : Ph(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => zl(n))
} : or(t) ? zl(t) : ct(t) && !Ke(t) && !Th(t) ? String(t) : t, zl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    or(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bn;
class yb {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = bn, !t && bn && (this.index = (bn.scopes || (bn.scopes = [])).push(
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
      const n = bn;
      try {
        return bn = this, t();
      } finally {
        bn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = bn, bn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (bn = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, i = this.scopes.length; n < i; n++)
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
function vb() {
  return bn;
}
let yt;
const $l = /* @__PURE__ */ new WeakSet();
class Fh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, bn && bn.active && bn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, $l.has(this) && ($l.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Lh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, qf(this), zh(this);
    const t = yt, n = $n;
    yt = this, $n = !0;
    try {
      return this.fn();
    } finally {
      $h(this), yt = t, $n = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Wu(t);
      this.deps = this.depsTail = void 0, qf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? $l.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    cu(this) && this.run();
  }
  get dirty() {
    return cu(this);
  }
}
let Rh = 0, La, za;
function Lh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = za, za = e;
    return;
  }
  e.next = La, La = e;
}
function Bu() {
  Rh++;
}
function Ku() {
  if (--Rh > 0)
    return;
  if (za) {
    let t = za;
    for (za = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; La; ) {
    let t = La;
    for (La = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function zh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $h(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Wu(i), _b(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function cu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Vh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Vh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ka) || (e.globalVersion = Ka, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !cu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = yt, i = $n;
  yt = e, $n = !0;
  try {
    zh(e);
    const a = e.fn(e._value);
    (t.version === 0 || er(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    yt = n, $n = i, $h(e), e.flags &= -3;
  }
}
function Wu(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Wu(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function _b(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $n = !0;
const jh = [];
function Mr() {
  jh.push($n), $n = !1;
}
function kr() {
  const e = jh.pop();
  $n = e === void 0 ? !0 : e;
}
function qf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = yt;
    yt = void 0;
    try {
      t();
    } finally {
      yt = n;
    }
  }
}
let Ka = 0;
class xb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Yu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!yt || !$n || yt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== yt)
      n = this.activeLink = new xb(yt, this), yt.deps ? (n.prevDep = yt.depsTail, yt.depsTail.nextDep = n, yt.depsTail = n) : yt.deps = yt.depsTail = n, Hh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = yt.depsTail, n.nextDep = void 0, yt.depsTail.nextDep = n, yt.depsTail = n, yt.deps === n && (yt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ka++, this.notify(t);
  }
  notify(t) {
    Bu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ku();
    }
  }
}
function Hh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Hh(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const fu = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ Symbol(
  ""
), du = /* @__PURE__ */ Symbol(
  ""
), Wa = /* @__PURE__ */ Symbol(
  ""
);
function tn(e, t, n) {
  if ($n && yt) {
    let i = fu.get(e);
    i || fu.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Yu()), a.map = i, a.key = n), a.track();
  }
}
function wr(e, t, n, i, a, l) {
  const c = fu.get(e);
  if (!c) {
    Ka++;
    return;
  }
  const f = (m) => {
    m && m.trigger();
  };
  if (Bu(), t === "clear")
    c.forEach(f);
  else {
    const m = Ke(e), b = m && Hu(n);
    if (m && n === "length") {
      const v = Number(i);
      c.forEach((_, S) => {
        (S === "length" || S === Wa || !or(S) && S >= v) && f(_);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && f(c.get(n)), b && f(c.get(Wa)), t) {
        case "add":
          m ? b && f(c.get("length")) : (f(c.get(ii)), Zi(e) && f(c.get(du)));
          break;
        case "delete":
          m || (f(c.get(ii)), Zi(e) && f(c.get(du)));
          break;
        case "set":
          Zi(e) && f(c.get(ii));
          break;
      }
  }
  Ku();
}
function Li(e) {
  const t = /* @__PURE__ */ at(e);
  return t === e ? t : (tn(t, "iterate", Wa), /* @__PURE__ */ An(e) ? t : t.map(Vn));
}
function $s(e) {
  return tn(e = /* @__PURE__ */ at(e), "iterate", Wa), e;
}
function Jn(e, t) {
  return /* @__PURE__ */ Pr(e) ? sa(/* @__PURE__ */ ai(e) ? Vn(t) : t) : Vn(t);
}
const wb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Vl(this, Symbol.iterator, (e) => Jn(this, e));
  },
  concat(...e) {
    return Li(this).concat(
      ...e.map((t) => Ke(t) ? Li(t) : t)
    );
  },
  entries() {
    return Vl(this, "entries", (e) => (e[1] = Jn(this, e[1]), e));
  },
  every(e, t) {
    return hr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return hr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Jn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return hr(
      this,
      "find",
      e,
      t,
      (n) => Jn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return hr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return hr(
      this,
      "findLast",
      e,
      t,
      (n) => Jn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return hr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return hr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return jl(this, "includes", e);
  },
  indexOf(...e) {
    return jl(this, "indexOf", e);
  },
  join(e) {
    return Li(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return jl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return hr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Na(this, "pop");
  },
  push(...e) {
    return Na(this, "push", e);
  },
  reduce(e, ...t) {
    return Xf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Xf(this, "reduceRight", e, t);
  },
  shift() {
    return Na(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return hr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Na(this, "splice", e);
  },
  toReversed() {
    return Li(this).toReversed();
  },
  toSorted(e) {
    return Li(this).toSorted(e);
  },
  toSpliced(...e) {
    return Li(this).toSpliced(...e);
  },
  unshift(...e) {
    return Na(this, "unshift", e);
  },
  values() {
    return Vl(this, "values", (e) => Jn(this, e));
  }
};
function Vl(e, t, n) {
  const i = $s(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ An(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.done || (l.value = n(l.value)), l;
  }), a;
}
const Sb = Array.prototype;
function hr(e, t, n, i, a, l) {
  const c = $s(e), f = c !== e && !/* @__PURE__ */ An(e), m = c[t];
  if (m !== Sb[t]) {
    const _ = m.apply(e, l);
    return f ? Vn(_) : _;
  }
  let b = n;
  c !== e && (f ? b = function(_, S) {
    return n.call(this, Jn(e, _), S, e);
  } : n.length > 2 && (b = function(_, S) {
    return n.call(this, _, S, e);
  }));
  const v = m.call(c, b, i);
  return f && a ? a(v) : v;
}
function Xf(e, t, n, i) {
  const a = $s(e), l = a !== e && !/* @__PURE__ */ An(e);
  let c = n, f = !1;
  a !== e && (l ? (f = i.length === 0, c = function(b, v, _) {
    return f && (f = !1, b = Jn(e, b)), n.call(this, b, Jn(e, v), _, e);
  }) : n.length > 3 && (c = function(b, v, _) {
    return n.call(this, b, v, _, e);
  }));
  const m = a[t](c, ...i);
  return f ? Jn(e, m) : m;
}
function jl(e, t, n) {
  const i = /* @__PURE__ */ at(e);
  tn(i, "iterate", Wa);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Ju(n[0]) ? (n[0] = /* @__PURE__ */ at(n[0]), i[t](...n)) : a;
}
function Na(e, t, n = []) {
  Mr(), Bu();
  const i = (/* @__PURE__ */ at(e))[t].apply(e, n);
  return Ku(), kr(), i;
}
const Nb = /* @__PURE__ */ Vu("__proto__,__v_isRef,__isVue"), Uh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(or)
);
function Mb(e) {
  or(e) || (e = String(e));
  const t = /* @__PURE__ */ at(this);
  return tn(t, "has", e), t.hasOwnProperty(e);
}
class Gh {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return i === (a ? l ? Fb : Yh : l ? Wh : Kh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const c = Ke(t);
    if (!a) {
      let m;
      if (c && (m = wb[n]))
        return m;
      if (n === "hasOwnProperty")
        return Mb;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ rn(t) ? t : i
    );
    if ((or(n) ? Uh.has(n) : Nb(n)) || (a || tn(t, "get", n), l))
      return f;
    if (/* @__PURE__ */ rn(f)) {
      const m = c && Hu(n) ? f : f.value;
      return a && ct(m) ? /* @__PURE__ */ mu(m) : m;
    }
    return ct(f) ? a ? /* @__PURE__ */ mu(f) : /* @__PURE__ */ da(f) : f;
  }
}
class Bh extends Gh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let l = t[n];
    const c = Ke(t) && Hu(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ Pr(l);
      if (!/* @__PURE__ */ An(i) && !/* @__PURE__ */ Pr(i) && (l = /* @__PURE__ */ at(l), i = /* @__PURE__ */ at(i)), !c && /* @__PURE__ */ rn(l) && !/* @__PURE__ */ rn(i))
        return b || (l.value = i), !0;
    }
    const f = c ? Number(n) < t.length : ot(t, n), m = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ rn(t) ? t : a
    );
    return t === /* @__PURE__ */ at(a) && (f ? er(i, l) && wr(t, "set", n, i) : wr(t, "add", n, i)), m;
  }
  deleteProperty(t, n) {
    const i = ot(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && wr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!or(n) || !Uh.has(n)) && tn(t, "has", n), i;
  }
  ownKeys(t) {
    return tn(
      t,
      "iterate",
      Ke(t) ? "length" : ii
    ), Reflect.ownKeys(t);
  }
}
class kb extends Gh {
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
const Pb = /* @__PURE__ */ new Bh(), Ab = /* @__PURE__ */ new kb(), Cb = /* @__PURE__ */ new Bh(!0);
const hu = (e) => e, To = (e) => Reflect.getPrototypeOf(e);
function Tb(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, l = /* @__PURE__ */ at(a), c = Zi(l), f = e === "entries" || e === Symbol.iterator && c, m = e === "keys" && c, b = a[e](...i), v = n ? hu : t ? sa : Vn;
    return !t && tn(
      l,
      "iterate",
      m ? du : ii
    ), an(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: _, done: S } = b.next();
          return S ? { value: _, done: S } : {
            value: f ? [v(_[0]), v(_[1])] : v(_),
            done: S
          };
        }
      }
    );
  };
}
function Io(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ib(e, t) {
  const n = {
    get(a) {
      const l = this.__v_raw, c = /* @__PURE__ */ at(l), f = /* @__PURE__ */ at(a);
      e || (er(a, f) && tn(c, "get", a), tn(c, "get", f));
      const { has: m } = To(c), b = t ? hu : e ? sa : Vn;
      if (m.call(c, a))
        return b(l.get(a));
      if (m.call(c, f))
        return b(l.get(f));
      l !== c && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && tn(/* @__PURE__ */ at(a), "iterate", ii), a.size;
    },
    has(a) {
      const l = this.__v_raw, c = /* @__PURE__ */ at(l), f = /* @__PURE__ */ at(a);
      return e || (er(a, f) && tn(c, "has", a), tn(c, "has", f)), a === f ? l.has(a) : l.has(a) || l.has(f);
    },
    forEach(a, l) {
      const c = this, f = c.__v_raw, m = /* @__PURE__ */ at(f), b = t ? hu : e ? sa : Vn;
      return !e && tn(m, "iterate", ii), f.forEach((v, _) => a.call(l, b(v), b(_), c));
    }
  };
  return an(
    n,
    e ? {
      add: Io("add"),
      set: Io("set"),
      delete: Io("delete"),
      clear: Io("clear")
    } : {
      add(a) {
        const l = /* @__PURE__ */ at(this), c = To(l), f = /* @__PURE__ */ at(a), m = !t && !/* @__PURE__ */ An(a) && !/* @__PURE__ */ Pr(a) ? f : a;
        return c.has.call(l, m) || er(a, m) && c.has.call(l, a) || er(f, m) && c.has.call(l, f) || (l.add(m), wr(l, "add", m, m)), this;
      },
      set(a, l) {
        !t && !/* @__PURE__ */ An(l) && !/* @__PURE__ */ Pr(l) && (l = /* @__PURE__ */ at(l));
        const c = /* @__PURE__ */ at(this), { has: f, get: m } = To(c);
        let b = f.call(c, a);
        b || (a = /* @__PURE__ */ at(a), b = f.call(c, a));
        const v = m.call(c, a);
        return c.set(a, l), b ? er(l, v) && wr(c, "set", a, l) : wr(c, "add", a, l), this;
      },
      delete(a) {
        const l = /* @__PURE__ */ at(this), { has: c, get: f } = To(l);
        let m = c.call(l, a);
        m || (a = /* @__PURE__ */ at(a), m = c.call(l, a)), f && f.call(l, a);
        const b = l.delete(a);
        return m && wr(l, "delete", a, void 0), b;
      },
      clear() {
        const a = /* @__PURE__ */ at(this), l = a.size !== 0, c = a.clear();
        return l && wr(
          a,
          "clear",
          void 0,
          void 0
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = Tb(a, e, t);
  }), n;
}
function qu(e, t) {
  const n = Ib(e, t);
  return (i, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    ot(n, a) && a in i ? n : i,
    a,
    l
  );
}
const Eb = {
  get: /* @__PURE__ */ qu(!1, !1)
}, Db = {
  get: /* @__PURE__ */ qu(!1, !0)
}, Ob = {
  get: /* @__PURE__ */ qu(!0, !1)
};
const Kh = /* @__PURE__ */ new WeakMap(), Wh = /* @__PURE__ */ new WeakMap(), Yh = /* @__PURE__ */ new WeakMap(), Fb = /* @__PURE__ */ new WeakMap();
function Rb(e) {
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
function Lb(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Rb(lb(e));
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return /* @__PURE__ */ Pr(e) ? e : Xu(
    e,
    !1,
    Pb,
    Eb,
    Kh
  );
}
// @__NO_SIDE_EFFECTS__
function zb(e) {
  return Xu(
    e,
    !1,
    Cb,
    Db,
    Wh
  );
}
// @__NO_SIDE_EFFECTS__
function mu(e) {
  return Xu(
    e,
    !0,
    Ab,
    Ob,
    Yh
  );
}
function Xu(e, t, n, i, a) {
  if (!ct(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = Lb(e);
  if (l === 0)
    return e;
  const c = a.get(e);
  if (c)
    return c;
  const f = new Proxy(
    e,
    l === 2 ? i : n
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  return /* @__PURE__ */ Pr(e) ? /* @__PURE__ */ ai(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Pr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ju(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ at(t) : e;
}
function $b(e) {
  return !ot(e, "__v_skip") && Object.isExtensible(e) && Ih(e, "__v_skip", !0), e;
}
const Vn = (e) => ct(e) ? /* @__PURE__ */ da(e) : e, sa = (e) => ct(e) ? /* @__PURE__ */ mu(e) : e;
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return Vb(e, !1);
}
function Vb(e, t) {
  return /* @__PURE__ */ rn(e) ? e : new jb(e, t);
}
class jb {
  constructor(t, n) {
    this.dep = new Yu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ at(t), this._value = n ? t : Vn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ An(t) || /* @__PURE__ */ Pr(t);
    t = i ? t : /* @__PURE__ */ at(t), er(t, n) && (this._rawValue = t, this._value = i ? t : Vn(t), this.dep.trigger());
  }
}
function Rt(e) {
  return /* @__PURE__ */ rn(e) ? e.value : e;
}
const Hb = {
  get: (e, t, n) => t === "__v_raw" ? e : Rt(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ rn(a) && !/* @__PURE__ */ rn(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function qh(e) {
  return /* @__PURE__ */ ai(e) ? e : new Proxy(e, Hb);
}
class Ub {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Yu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ka - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    yt !== this)
      return Lh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Vh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Gb(e, t, n = !1) {
  let i, a;
  return We(e) ? i = e : (i = e.get, a = e.set), new Ub(i, a, n);
}
const Eo = {}, ms = /* @__PURE__ */ new WeakMap();
let ti;
function Bb(e, t = !1, n = ti) {
  if (n) {
    let i = ms.get(n);
    i || ms.set(n, i = []), i.push(e);
  }
}
function Kb(e, t, n = pt) {
  const { immediate: i, deep: a, once: l, scheduler: c, augmentJob: f, call: m } = n, b = (E) => a ? E : /* @__PURE__ */ An(E) || a === !1 || a === 0 ? Sr(E, 1) : Sr(E);
  let v, _, S, I, x = !1, L = !1;
  if (/* @__PURE__ */ rn(e) ? (_ = () => e.value, x = /* @__PURE__ */ An(e)) : /* @__PURE__ */ ai(e) ? (_ = () => b(e), x = !0) : Ke(e) ? (L = !0, x = e.some((E) => /* @__PURE__ */ ai(E) || /* @__PURE__ */ An(E)), _ = () => e.map((E) => {
    if (/* @__PURE__ */ rn(E))
      return E.value;
    if (/* @__PURE__ */ ai(E))
      return b(E);
    if (We(E))
      return m ? m(E, 2) : E();
  })) : We(e) ? t ? _ = m ? () => m(e, 2) : e : _ = () => {
    if (S) {
      Mr();
      try {
        S();
      } finally {
        kr();
      }
    }
    const E = ti;
    ti = v;
    try {
      return m ? m(e, 3, [I]) : e(I);
    } finally {
      ti = E;
    }
  } : _ = ar, t && a) {
    const E = _, D = a === !0 ? 1 / 0 : a;
    _ = () => Sr(E(), D);
  }
  const O = vb(), z = () => {
    v.stop(), O && O.active && ju(O.effects, v);
  };
  if (l && t) {
    const E = t;
    t = (...D) => {
      E(...D), z();
    };
  }
  let P = L ? new Array(e.length).fill(Eo) : Eo;
  const $ = (E) => {
    if (!(!(v.flags & 1) || !v.dirty && !E))
      if (t) {
        const D = v.run();
        if (a || x || (L ? D.some((H, Z) => er(H, P[Z])) : er(D, P))) {
          S && S();
          const H = ti;
          ti = v;
          try {
            const Z = [
              D,
              // pass undefined as the old value when it's changed for the first time
              P === Eo ? void 0 : L && P[0] === Eo ? [] : P,
              I
            ];
            P = D, m ? m(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            );
          } finally {
            ti = H;
          }
        }
      } else
        v.run();
  };
  return f && f($), v = new Fh(_), v.scheduler = c ? () => c($, !1) : $, I = (E) => Bb(E, !1, v), S = v.onStop = () => {
    const E = ms.get(v);
    if (E) {
      if (m)
        m(E, 4);
      else
        for (const D of E) D();
      ms.delete(v);
    }
  }, t ? i ? $(!0) : P = v.run() : c ? c($.bind(null, !0), !0) : v.run(), z.pause = v.pause.bind(v), z.resume = v.resume.bind(v), z.stop = z, z;
}
function Sr(e, t = 1 / 0, n) {
  if (t <= 0 || !ct(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ rn(e))
    Sr(e.value, t, n);
  else if (Ke(e))
    for (let i = 0; i < e.length; i++)
      Sr(e[i], t, n);
  else if (Ph(e) || Zi(e))
    e.forEach((i) => {
      Sr(i, t, n);
    });
  else if (Th(e)) {
    for (const i in e)
      Sr(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Sr(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function no(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Vs(a, t, n);
  }
}
function sr(e, t, n, i) {
  if (We(e)) {
    const a = no(e, t, n, i);
    return a && Ah(a) && a.catch((l) => {
      Vs(l, t, n);
    }), a;
  }
  if (Ke(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(sr(e[l], t, n, i));
    return a;
  }
}
function Vs(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: c } = t && t.appContext.config || pt;
  if (t) {
    let f = t.parent;
    const m = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const v = f.ec;
      if (v) {
        for (let _ = 0; _ < v.length; _++)
          if (v[_](e, m, b) === !1)
            return;
      }
      f = f.parent;
    }
    if (l) {
      Mr(), no(l, null, 10, [
        e,
        m,
        b
      ]), kr();
      return;
    }
  }
  Wb(e, n, a, i, c);
}
function Wb(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const cn = [];
let Xn = -1;
const Qi = [];
let Lr = null, Gi = 0;
const Xh = /* @__PURE__ */ Promise.resolve();
let ps = null;
function Zu(e) {
  const t = ps || Xh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yb(e) {
  let t = Xn + 1, n = cn.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = cn[i], l = Ya(a);
    l < e || l === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Qu(e) {
  if (!(e.flags & 1)) {
    const t = Ya(e), n = cn[cn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ya(n) ? cn.push(e) : cn.splice(Yb(t), 0, e), e.flags |= 1, Jh();
  }
}
function Jh() {
  ps || (ps = Xh.then(Qh));
}
function qb(e) {
  Ke(e) ? Qi.push(...e) : Lr && e.id === -1 ? Lr.splice(Gi + 1, 0, e) : e.flags & 1 || (Qi.push(e), e.flags |= 1), Jh();
}
function Jf(e, t, n = Xn + 1) {
  for (; n < cn.length; n++) {
    const i = cn[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      cn.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Zh(e) {
  if (Qi.length) {
    const t = [...new Set(Qi)].sort(
      (n, i) => Ya(n) - Ya(i)
    );
    if (Qi.length = 0, Lr) {
      Lr.push(...t);
      return;
    }
    for (Lr = t, Gi = 0; Gi < Lr.length; Gi++) {
      const n = Lr[Gi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Lr = null, Gi = 0;
  }
}
const Ya = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qh(e) {
  try {
    for (Xn = 0; Xn < cn.length; Xn++) {
      const t = cn[Xn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), no(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Xn < cn.length; Xn++) {
      const t = cn[Xn];
      t && (t.flags &= -2);
    }
    Xn = -1, cn.length = 0, Zh(), ps = null, (cn.length || Qi.length) && Qh();
  }
}
let Sn = null, em = null;
function gs(e) {
  const t = Sn;
  return Sn = e, em = e && e.type.__scopeId || null, t;
}
function tm(e, t = Sn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && ud(-1);
    const l = gs(t);
    let c;
    try {
      c = e(...a);
    } finally {
      gs(l), i._d && ud(1);
    }
    return c;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function oi(e, t) {
  if (Sn === null)
    return e;
  const n = Bs(Sn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [l, c, f, m = pt] = t[a];
    l && (We(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Sr(c), i.push({
      dir: l,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: f,
      modifiers: m
    }));
  }
  return e;
}
function Xr(e, t, n, i) {
  const a = e.dirs, l = t && t.dirs;
  for (let c = 0; c < a.length; c++) {
    const f = a[c];
    l && (f.oldValue = l[c].value);
    let m = f.dir[i];
    m && (Mr(), sr(m, n, 8, [
      e.el,
      f,
      e,
      t
    ]), kr());
  }
}
function Xb(e, t) {
  if (nn) {
    let n = nn.provides;
    const i = nn.parent && nn.parent.provides;
    i === n && (n = nn.provides = Object.create(i)), n[e] = t;
  }
}
function ns(e, t, n = !1) {
  const i = qy();
  if (i || ea) {
    let a = ea ? ea._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && We(t) ? t.call(i && i.proxy) : t;
  }
}
const Jb = /* @__PURE__ */ Symbol.for("v-scx"), Zb = () => ns(Jb);
function si(e, t, n) {
  return nm(e, t, n);
}
function nm(e, t, n = pt) {
  const { immediate: i, deep: a, flush: l, once: c } = n, f = an({}, n), m = t && i || !t && l !== "post";
  let b;
  if (Xa) {
    if (l === "sync") {
      const I = Zb();
      b = I.__watcherHandles || (I.__watcherHandles = []);
    } else if (!m) {
      const I = () => {
      };
      return I.stop = ar, I.resume = ar, I.pause = ar, I;
    }
  }
  const v = nn;
  f.call = (I, x, L) => sr(I, v, x, L);
  let _ = !1;
  l === "post" ? f.scheduler = (I) => {
    gn(I, v && v.suspense);
  } : l !== "sync" && (_ = !0, f.scheduler = (I, x) => {
    x ? I() : Qu(I);
  }), f.augmentJob = (I) => {
    t && (I.flags |= 4), _ && (I.flags |= 2, v && (I.id = v.uid, I.i = v));
  };
  const S = Kb(e, t, f);
  return Xa && (b ? b.push(S) : m && S()), S;
}
function Qb(e, t, n) {
  const i = this.proxy, a = Tt(e) ? e.includes(".") ? rm(i, e) : () => i[e] : e.bind(i, i);
  let l;
  We(t) ? l = t : (l = t.handler, n = t);
  const c = ro(this), f = nm(a, l.bind(i), n);
  return c(), f;
}
function rm(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const ey = /* @__PURE__ */ Symbol("_vte"), ty = (e) => e.__isTeleport, ny = /* @__PURE__ */ Symbol("_leaveCb");
function ec(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ec(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function im(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Zf(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const bs = /* @__PURE__ */ new WeakMap();
function $a(e, t, n, i, a = !1) {
  if (Ke(e)) {
    e.forEach(
      (L, O) => $a(
        L,
        t && (Ke(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Va(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && $a(e, t, n, i.component.subTree);
    return;
  }
  const l = i.shapeFlag & 4 ? Bs(i.component) : i.el, c = a ? null : l, { i: f, r: m } = e, b = t && t.r, v = f.refs === pt ? f.refs = {} : f.refs, _ = f.setupState, S = /* @__PURE__ */ at(_), I = _ === pt ? kh : (L) => Zf(v, L) ? !1 : ot(S, L), x = (L, O) => !(O && Zf(v, O));
  if (b != null && b !== m) {
    if (Qf(t), Tt(b))
      v[b] = null, I(b) && (_[b] = null);
    else if (/* @__PURE__ */ rn(b)) {
      const L = t;
      x(b, L.k) && (b.value = null), L.k && (v[L.k] = null);
    }
  }
  if (We(m))
    no(m, f, 12, [c, v]);
  else {
    const L = Tt(m), O = /* @__PURE__ */ rn(m);
    if (L || O) {
      const z = () => {
        if (e.f) {
          const P = L ? I(m) ? _[m] : v[m] : x() || !e.k ? m.value : v[e.k];
          if (a)
            Ke(P) && ju(P, l);
          else if (Ke(P))
            P.includes(l) || P.push(l);
          else if (L)
            v[m] = [l], I(m) && (_[m] = v[m]);
          else {
            const $ = [l];
            x(m, e.k) && (m.value = $), e.k && (v[e.k] = $);
          }
        } else L ? (v[m] = c, I(m) && (_[m] = c)) : O && (x(m, e.k) && (m.value = c), e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          z(), bs.delete(e);
        };
        P.id = -1, bs.set(e, P), gn(P, n);
      } else
        Qf(e), z();
    }
  }
}
function Qf(e) {
  const t = bs.get(e);
  t && (t.flags |= 8, bs.delete(e));
}
zs().requestIdleCallback;
zs().cancelIdleCallback;
const Va = (e) => !!e.type.__asyncLoader, am = (e) => e.type.__isKeepAlive;
function ry(e, t) {
  om(e, "a", t);
}
function iy(e, t) {
  om(e, "da", t);
}
function om(e, t, n = nn) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (js(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      am(a.parent.vnode) && ay(i, t, n, a), a = a.parent;
  }
}
function ay(e, t, n, i) {
  const a = js(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  sm(() => {
    ju(i[t], a);
  }, n);
}
function js(e, t, n = nn, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...c) => {
      Mr();
      const f = ro(n), m = sr(t, n, e, c);
      return f(), kr(), m;
    });
    return i ? a.unshift(l) : a.push(l), l;
  }
}
const Tr = (e) => (t, n = nn) => {
  (!Xa || e === "sp") && js(e, (...i) => t(...i), n);
}, oy = Tr("bm"), tc = Tr("m"), sy = Tr(
  "bu"
), ly = Tr("u"), Hs = Tr(
  "bum"
), sm = Tr("um"), uy = Tr(
  "sp"
), cy = Tr("rtg"), fy = Tr("rtc");
function dy(e, t = nn) {
  js("ec", e, t);
}
const hy = "components", lm = /* @__PURE__ */ Symbol.for("v-ndc");
function my(e) {
  return Tt(e) ? py(hy, e, !1) || e : e || lm;
}
function py(e, t, n = !0, i = !1) {
  const a = Sn || nn;
  if (a) {
    const l = a.type;
    {
      const f = ev(
        l,
        !1
      );
      if (f && (f === t || f === fn(t) || f === Ls(fn(t))))
        return l;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      ed(a[e] || l[e], t) || // global registration
      ed(a.appContext[e], t)
    );
    return !c && i ? l : c;
  }
}
function ed(e, t) {
  return e && (e[t] || e[fn(t)] || e[Ls(fn(t))]);
}
function Ft(e, t, n, i) {
  let a;
  const l = n, c = Ke(e);
  if (c || Tt(e)) {
    const f = c && /* @__PURE__ */ ai(e);
    let m = !1, b = !1;
    f && (m = !/* @__PURE__ */ An(e), b = /* @__PURE__ */ Pr(e), e = $s(e)), a = new Array(e.length);
    for (let v = 0, _ = e.length; v < _; v++)
      a[v] = t(
        m ? b ? sa(Vn(e[v])) : Vn(e[v]) : e[v],
        v,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, l);
  } else if (ct(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, m) => t(f, m, void 0, l)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let m = 0, b = f.length; m < b; m++) {
        const v = f[m];
        a[m] = t(e[v], v, m, l);
      }
    }
  else
    a = [];
  return a;
}
const pu = (e) => e ? Cm(e) ? Bs(e) : pu(e.parent) : null, ja = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ an(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pu(e.parent),
    $root: (e) => pu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => cm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zu.bind(e.proxy)),
    $watch: (e) => Qb.bind(e)
  })
), Hl = (e, t) => e !== pt && !e.__isScriptSetup && ot(e, t), gy = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: l, accessCache: c, type: f, appContext: m } = e;
    if (t[0] !== "$") {
      const S = c[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return i[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return l[t];
        }
      else {
        if (Hl(i, t))
          return c[t] = 1, i[t];
        if (a !== pt && ot(a, t))
          return c[t] = 2, a[t];
        if (ot(l, t))
          return c[t] = 3, l[t];
        if (n !== pt && ot(n, t))
          return c[t] = 4, n[t];
        gu && (c[t] = 0);
      }
    }
    const b = ja[t];
    let v, _;
    if (b)
      return t === "$attrs" && tn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (v = f.__cssModules) && (v = v[t])
    )
      return v;
    if (n !== pt && ot(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      _ = m.config.globalProperties, ot(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: l } = e;
    return Hl(a, t) ? (a[t] = n, !0) : i !== pt && ot(i, t) ? (i[t] = n, !0) : ot(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: l, type: c }
  }, f) {
    let m;
    return !!(n[f] || e !== pt && f[0] !== "$" && ot(e, f) || Hl(t, f) || ot(l, f) || ot(i, f) || ot(ja, f) || ot(a.config.globalProperties, f) || (m = c.__cssModules) && m[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ot(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function td(e) {
  return Ke(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let gu = !0;
function by(e) {
  const t = cm(e), n = e.proxy, i = e.ctx;
  gu = !1, t.beforeCreate && nd(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: c,
    watch: f,
    provide: m,
    inject: b,
    // lifecycle
    created: v,
    beforeMount: _,
    mounted: S,
    beforeUpdate: I,
    updated: x,
    activated: L,
    deactivated: O,
    beforeDestroy: z,
    beforeUnmount: P,
    destroyed: $,
    unmounted: E,
    render: D,
    renderTracked: H,
    renderTriggered: Z,
    errorCaptured: X,
    serverPrefetch: W,
    // public API
    expose: A,
    inheritAttrs: Q,
    // assets
    components: ae,
    directives: fe,
    filters: me
  } = t;
  if (b && yy(b, i, null), c)
    for (const k in c) {
      const de = c[k];
      We(de) && (i[k] = de.bind(n));
    }
  if (a) {
    const k = a.call(n, n);
    ct(k) && (e.data = /* @__PURE__ */ da(k));
  }
  if (gu = !0, l)
    for (const k in l) {
      const de = l[k], Se = We(de) ? de.bind(n, n) : We(de.get) ? de.get.bind(n, n) : ar, ke = !We(de) && We(de.set) ? de.set.bind(n) : ar, B = mt({
        get: Se,
        set: ke
      });
      Object.defineProperty(i, k, {
        enumerable: !0,
        configurable: !0,
        get: () => B.value,
        set: (Re) => B.value = Re
      });
    }
  if (f)
    for (const k in f)
      um(f[k], i, n, k);
  if (m) {
    const k = We(m) ? m.call(n) : m;
    Reflect.ownKeys(k).forEach((de) => {
      Xb(de, k[de]);
    });
  }
  v && nd(v, e, "c");
  function ue(k, de) {
    Ke(de) ? de.forEach((Se) => k(Se.bind(n))) : de && k(de.bind(n));
  }
  if (ue(oy, _), ue(tc, S), ue(sy, I), ue(ly, x), ue(ry, L), ue(iy, O), ue(dy, X), ue(fy, H), ue(cy, Z), ue(Hs, P), ue(sm, E), ue(uy, W), Ke(A))
    if (A.length) {
      const k = e.exposed || (e.exposed = {});
      A.forEach((de) => {
        Object.defineProperty(k, de, {
          get: () => n[de],
          set: (Se) => n[de] = Se,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === ar && (e.render = D), Q != null && (e.inheritAttrs = Q), ae && (e.components = ae), fe && (e.directives = fe), W && im(e);
}
function yy(e, t, n = ar) {
  Ke(e) && (e = bu(e));
  for (const i in e) {
    const a = e[i];
    let l;
    ct(a) ? "default" in a ? l = ns(
      a.from || i,
      a.default,
      !0
    ) : l = ns(a.from || i) : l = ns(a), /* @__PURE__ */ rn(l) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (c) => l.value = c
    }) : t[i] = l;
  }
}
function nd(e, t, n) {
  sr(
    Ke(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function um(e, t, n, i) {
  let a = i.includes(".") ? rm(n, i) : () => n[i];
  if (Tt(e)) {
    const l = t[e];
    We(l) && si(a, l);
  } else if (We(e))
    si(a, e.bind(n));
  else if (ct(e))
    if (Ke(e))
      e.forEach((l) => um(l, t, n, i));
    else {
      const l = We(e.handler) ? e.handler.bind(n) : t[e.handler];
      We(l) && si(a, l, e);
    }
}
function cm(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: c }
  } = e.appContext, f = l.get(t);
  let m;
  return f ? m = f : !a.length && !n && !i ? m = t : (m = {}, a.length && a.forEach(
    (b) => ys(m, b, c, !0)
  ), ys(m, t, c)), ct(t) && l.set(t, m), m;
}
function ys(e, t, n, i = !1) {
  const { mixins: a, extends: l } = t;
  l && ys(e, l, n, !0), a && a.forEach(
    (c) => ys(e, c, n, !0)
  );
  for (const c in t)
    if (!(i && c === "expose")) {
      const f = vy[c] || n && n[c];
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const vy = {
  data: rd,
  props: id,
  emits: id,
  // objects
  methods: Ea,
  computed: Ea,
  // lifecycle
  beforeCreate: un,
  created: un,
  beforeMount: un,
  mounted: un,
  beforeUpdate: un,
  updated: un,
  beforeDestroy: un,
  beforeUnmount: un,
  destroyed: un,
  unmounted: un,
  activated: un,
  deactivated: un,
  errorCaptured: un,
  serverPrefetch: un,
  // assets
  components: Ea,
  directives: Ea,
  // watch
  watch: xy,
  // provide / inject
  provide: rd,
  inject: _y
};
function rd(e, t) {
  return t ? e ? function() {
    return an(
      We(e) ? e.call(this, this) : e,
      We(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _y(e, t) {
  return Ea(bu(e), bu(t));
}
function bu(e) {
  if (Ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function un(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ea(e, t) {
  return e ? an(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function id(e, t) {
  return e ? Ke(e) && Ke(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : an(
    /* @__PURE__ */ Object.create(null),
    td(e),
    td(t ?? {})
  ) : t;
}
function xy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = an(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = un(e[i], t[i]);
  return n;
}
function fm() {
  return {
    app: null,
    config: {
      isNativeTag: kh,
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
let wy = 0;
function Sy(e, t) {
  return function(i, a = null) {
    We(i) || (i = an({}, i)), a != null && !ct(a) && (a = null);
    const l = fm(), c = /* @__PURE__ */ new WeakSet(), f = [];
    let m = !1;
    const b = l.app = {
      _uid: wy++,
      _component: i,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: nv,
      get config() {
        return l.config;
      },
      set config(v) {
      },
      use(v, ..._) {
        return c.has(v) || (v && We(v.install) ? (c.add(v), v.install(b, ..._)) : We(v) && (c.add(v), v(b, ..._))), b;
      },
      mixin(v) {
        return l.mixins.includes(v) || l.mixins.push(v), b;
      },
      component(v, _) {
        return _ ? (l.components[v] = _, b) : l.components[v];
      },
      directive(v, _) {
        return _ ? (l.directives[v] = _, b) : l.directives[v];
      },
      mount(v, _, S) {
        if (!m) {
          const I = b._ceVNode || Ve(i, a);
          return I.appContext = l, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(I, v, S), m = !0, b._container = v, v.__vue_app__ = b, Bs(I.component);
        }
      },
      onUnmount(v) {
        f.push(v);
      },
      unmount() {
        m && (sr(
          f,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(v, _) {
        return l.provides[v] = _, b;
      },
      runWithContext(v) {
        const _ = ea;
        ea = b;
        try {
          return v();
        } finally {
          ea = _;
        }
      }
    };
    return b;
  };
}
let ea = null;
const Ny = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${fn(t)}Modifiers`] || e[`${pi(t)}Modifiers`];
function My(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || pt;
  let a = n;
  const l = t.startsWith("update:"), c = l && Ny(i, t.slice(7));
  c && (c.trim && (a = n.map((v) => Tt(v) ? v.trim() : v)), c.number && (a = n.map(Uu)));
  let f, m = i[f = Ll(t)] || // also try camelCase event handler (#2249)
  i[f = Ll(fn(t))];
  !m && l && (m = i[f = Ll(pi(t))]), m && sr(
    m,
    e,
    6,
    a
  );
  const b = i[f + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, sr(
      b,
      e,
      6,
      a
    );
  }
}
const ky = /* @__PURE__ */ new WeakMap();
function dm(e, t, n = !1) {
  const i = n ? ky : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let c = {}, f = !1;
  if (!We(e)) {
    const m = (b) => {
      const v = dm(b, t, !0);
      v && (f = !0, an(c, v));
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !l && !f ? (ct(e) && i.set(e, null), null) : (Ke(l) ? l.forEach((m) => c[m] = null) : an(c, l), ct(e) && i.set(e, c), c);
}
function Us(e, t) {
  return !e || !Os(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ot(e, t[0].toLowerCase() + t.slice(1)) || ot(e, pi(t)) || ot(e, t));
}
function ad(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [l],
    slots: c,
    attrs: f,
    emit: m,
    render: b,
    renderCache: v,
    props: _,
    data: S,
    setupState: I,
    ctx: x,
    inheritAttrs: L
  } = e, O = gs(e);
  let z, P;
  try {
    if (n.shapeFlag & 4) {
      const E = a || i, D = E;
      z = Zn(
        b.call(
          D,
          E,
          v,
          _,
          I,
          S,
          x
        )
      ), P = f;
    } else {
      const E = t;
      z = Zn(
        E.length > 1 ? E(
          _,
          { attrs: f, slots: c, emit: m }
        ) : E(
          _,
          null
        )
      ), P = t.props ? f : Py(f);
    }
  } catch (E) {
    Ha.length = 0, Vs(E, e, 1), z = Ve(jr);
  }
  let $ = z;
  if (P && L !== !1) {
    const E = Object.keys(P), { shapeFlag: D } = $;
    E.length && D & 7 && (l && E.some(Fs) && (P = Ay(
      P,
      l
    )), $ = la($, P, !1, !0));
  }
  return n.dirs && ($ = la($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && ec($, n.transition), z = $, gs(O), z;
}
const Py = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Os(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ay = (e, t) => {
  const n = {};
  for (const i in e)
    (!Fs(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Cy(e, t, n) {
  const { props: i, children: a, component: l } = e, { props: c, children: f, patchFlag: m } = t, b = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return i ? od(i, c, b) : !!c;
    if (m & 8) {
      const v = t.dynamicProps;
      for (let _ = 0; _ < v.length; _++) {
        const S = v[_];
        if (hm(c, i, S) && !Us(b, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : i === c ? !1 : i ? c ? od(i, c, b) : !0 : !!c;
  return !1;
}
function od(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const l = i[a];
    if (hm(t, e, l) && !Us(n, l))
      return !0;
  }
  return !1;
}
function hm(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && ct(i) && ct(a) ? !Gu(i, a) : i !== a;
}
function Ty({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const mm = {}, pm = () => Object.create(mm), gm = (e) => Object.getPrototypeOf(e) === mm;
function Iy(e, t, n, i = !1) {
  const a = {}, l = pm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), bm(e, t, a, l);
  for (const c in e.propsOptions[0])
    c in a || (a[c] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ zb(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function Ey(e, t, n, i) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: c }
  } = e, f = /* @__PURE__ */ at(a), [m] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const v = e.vnode.dynamicProps;
      for (let _ = 0; _ < v.length; _++) {
        let S = v[_];
        if (Us(e.emitsOptions, S))
          continue;
        const I = t[S];
        if (m)
          if (ot(l, S))
            I !== l[S] && (l[S] = I, b = !0);
          else {
            const x = fn(S);
            a[x] = yu(
              m,
              f,
              x,
              I,
              e,
              !1
            );
          }
        else
          I !== l[S] && (l[S] = I, b = !0);
      }
    }
  } else {
    bm(e, t, a, l) && (b = !0);
    let v;
    for (const _ in f)
      (!t || // for camelCase
      !ot(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = pi(_)) === _ || !ot(t, v))) && (m ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[v] !== void 0) && (a[_] = yu(
        m,
        f,
        _,
        void 0,
        e,
        !0
      )) : delete a[_]);
    if (l !== f)
      for (const _ in l)
        (!t || !ot(t, _)) && (delete l[_], b = !0);
  }
  b && wr(e.attrs, "set", "");
}
function bm(e, t, n, i) {
  const [a, l] = e.propsOptions;
  let c = !1, f;
  if (t)
    for (let m in t) {
      if (Ra(m))
        continue;
      const b = t[m];
      let v;
      a && ot(a, v = fn(m)) ? !l || !l.includes(v) ? n[v] = b : (f || (f = {}))[v] = b : Us(e.emitsOptions, m) || (!(m in i) || b !== i[m]) && (i[m] = b, c = !0);
    }
  if (l) {
    const m = /* @__PURE__ */ at(n), b = f || pt;
    for (let v = 0; v < l.length; v++) {
      const _ = l[v];
      n[_] = yu(
        a,
        m,
        _,
        b[_],
        e,
        !ot(b, _)
      );
    }
  }
  return c;
}
function yu(e, t, n, i, a, l) {
  const c = e[n];
  if (c != null) {
    const f = ot(c, "default");
    if (f && i === void 0) {
      const m = c.default;
      if (c.type !== Function && !c.skipFactory && We(m)) {
        const { propsDefaults: b } = a;
        if (n in b)
          i = b[n];
        else {
          const v = ro(a);
          i = b[n] = m.call(
            null,
            t
          ), v();
        }
      } else
        i = m;
      a.ce && a.ce._setProp(n, i);
    }
    c[
      0
      /* shouldCast */
    ] && (l && !f ? i = !1 : c[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === pi(n)) && (i = !0));
  }
  return i;
}
const Dy = /* @__PURE__ */ new WeakMap();
function ym(e, t, n = !1) {
  const i = n ? Dy : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const l = e.props, c = {}, f = [];
  let m = !1;
  if (!We(e)) {
    const v = (_) => {
      m = !0;
      const [S, I] = ym(_, t, !0);
      an(c, S), I && f.push(...I);
    };
    !n && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!l && !m)
    return ct(e) && i.set(e, Ji), Ji;
  if (Ke(l))
    for (let v = 0; v < l.length; v++) {
      const _ = fn(l[v]);
      sd(_) && (c[_] = pt);
    }
  else if (l)
    for (const v in l) {
      const _ = fn(v);
      if (sd(_)) {
        const S = l[v], I = c[_] = Ke(S) || We(S) ? { type: S } : an({}, S), x = I.type;
        let L = !1, O = !0;
        if (Ke(x))
          for (let z = 0; z < x.length; ++z) {
            const P = x[z], $ = We(P) && P.name;
            if ($ === "Boolean") {
              L = !0;
              break;
            } else $ === "String" && (O = !1);
          }
        else
          L = We(x) && x.name === "Boolean";
        I[
          0
          /* shouldCast */
        ] = L, I[
          1
          /* shouldCastTrue */
        ] = O, (L || ot(I, "default")) && f.push(_);
      }
    }
  const b = [c, f];
  return ct(e) && i.set(e, b), b;
}
function sd(e) {
  return e[0] !== "$" && !Ra(e);
}
const nc = (e) => e === "_" || e === "_ctx" || e === "$stable", rc = (e) => Ke(e) ? e.map(Zn) : [Zn(e)], Oy = (e, t, n) => {
  if (t._n)
    return t;
  const i = tm((...a) => rc(t(...a)), n);
  return i._c = !1, i;
}, vm = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (nc(a)) continue;
    const l = e[a];
    if (We(l))
      t[a] = Oy(a, l, i);
    else if (l != null) {
      const c = rc(l);
      t[a] = () => c;
    }
  }
}, _m = (e, t) => {
  const n = rc(t);
  e.slots.default = () => n;
}, xm = (e, t, n) => {
  for (const i in t)
    (n || !nc(i)) && (e[i] = t[i]);
}, Fy = (e, t, n) => {
  const i = e.slots = pm();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (xm(i, t, n), n && Ih(i, "_", a, !0)) : vm(t, i);
  } else t && _m(e, t);
}, Ry = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let l = !0, c = pt;
  if (i.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? l = !1 : xm(a, t, n) : (l = !t.$stable, vm(t, a)), c = t;
  } else t && (_m(e, t), c = { default: 1 });
  if (l)
    for (const f in a)
      !nc(f) && c[f] == null && delete a[f];
}, gn = jy;
function Ly(e) {
  return zy(e);
}
function zy(e, t) {
  const n = zs();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: l,
    createElement: c,
    createText: f,
    createComment: m,
    setText: b,
    setElementText: v,
    parentNode: _,
    nextSibling: S,
    setScopeId: I = ar,
    insertStaticContent: x
  } = e, L = (R, U, oe, xe = null, be = null, M = null, G = void 0, Y = null, re = !!U.dynamicChildren) => {
    if (R === U)
      return;
    R && !Ma(R, U) && (xe = Gt(R), Re(R, be, M, !0), R = null), U.patchFlag === -2 && (re = !1, U.dynamicChildren = null);
    const { type: J, ref: ge, shapeFlag: pe } = U;
    switch (J) {
      case Gs:
        O(R, U, oe, xe);
        break;
      case jr:
        z(R, U, oe, xe);
        break;
      case Gl:
        R == null && P(U, oe, xe, G);
        break;
      case Ze:
        ae(
          R,
          U,
          oe,
          xe,
          be,
          M,
          G,
          Y,
          re
        );
        break;
      default:
        pe & 1 ? D(
          R,
          U,
          oe,
          xe,
          be,
          M,
          G,
          Y,
          re
        ) : pe & 6 ? fe(
          R,
          U,
          oe,
          xe,
          be,
          M,
          G,
          Y,
          re
        ) : (pe & 64 || pe & 128) && J.process(
          R,
          U,
          oe,
          xe,
          be,
          M,
          G,
          Y,
          re,
          Pt
        );
    }
    ge != null && be ? $a(ge, R && R.ref, M, U || R, !U) : ge == null && R && R.ref != null && $a(R.ref, null, M, R, !0);
  }, O = (R, U, oe, xe) => {
    if (R == null)
      i(
        U.el = f(U.children),
        oe,
        xe
      );
    else {
      const be = U.el = R.el;
      U.children !== R.children && b(be, U.children);
    }
  }, z = (R, U, oe, xe) => {
    R == null ? i(
      U.el = m(U.children || ""),
      oe,
      xe
    ) : U.el = R.el;
  }, P = (R, U, oe, xe) => {
    [R.el, R.anchor] = x(
      R.children,
      U,
      oe,
      xe,
      R.el,
      R.anchor
    );
  }, $ = ({ el: R, anchor: U }, oe, xe) => {
    let be;
    for (; R && R !== U; )
      be = S(R), i(R, oe, xe), R = be;
    i(U, oe, xe);
  }, E = ({ el: R, anchor: U }) => {
    let oe;
    for (; R && R !== U; )
      oe = S(R), a(R), R = oe;
    a(U);
  }, D = (R, U, oe, xe, be, M, G, Y, re) => {
    if (U.type === "svg" ? G = "svg" : U.type === "math" && (G = "mathml"), R == null)
      H(
        U,
        oe,
        xe,
        be,
        M,
        G,
        Y,
        re
      );
    else {
      const J = R.el && R.el._isVueCE ? R.el : null;
      try {
        J && J._beginPatch(), W(
          R,
          U,
          be,
          M,
          G,
          Y,
          re
        );
      } finally {
        J && J._endPatch();
      }
    }
  }, H = (R, U, oe, xe, be, M, G, Y) => {
    let re, J;
    const { props: ge, shapeFlag: pe, transition: Ae, dirs: d } = R;
    if (re = R.el = c(
      R.type,
      M,
      ge && ge.is,
      ge
    ), pe & 8 ? v(re, R.children) : pe & 16 && X(
      R.children,
      re,
      null,
      xe,
      be,
      Ul(R, M),
      G,
      Y
    ), d && Xr(R, null, xe, "created"), Z(re, R, R.scopeId, G, xe), ge) {
      for (const Oe in ge)
        Oe !== "value" && !Ra(Oe) && l(re, Oe, null, ge[Oe], M, xe);
      "value" in ge && l(re, "value", null, ge.value, M), (J = ge.onVnodeBeforeMount) && Bn(J, xe, R);
    }
    d && Xr(R, null, xe, "beforeMount");
    const Ce = $y(be, Ae);
    Ce && Ae.beforeEnter(re), i(re, U, oe), ((J = ge && ge.onVnodeMounted) || Ce || d) && gn(() => {
      try {
        J && Bn(J, xe, R), Ce && Ae.enter(re), d && Xr(R, null, xe, "mounted");
      } finally {
      }
    }, be);
  }, Z = (R, U, oe, xe, be) => {
    if (oe && I(R, oe), xe)
      for (let M = 0; M < xe.length; M++)
        I(R, xe[M]);
    if (be) {
      let M = be.subTree;
      if (U === M || Mm(M.type) && (M.ssContent === U || M.ssFallback === U)) {
        const G = be.vnode;
        Z(
          R,
          G,
          G.scopeId,
          G.slotScopeIds,
          be.parent
        );
      }
    }
  }, X = (R, U, oe, xe, be, M, G, Y, re = 0) => {
    for (let J = re; J < R.length; J++) {
      const ge = R[J] = Y ? _r(R[J]) : Zn(R[J]);
      L(
        null,
        ge,
        U,
        oe,
        xe,
        be,
        M,
        G,
        Y
      );
    }
  }, W = (R, U, oe, xe, be, M, G) => {
    const Y = U.el = R.el;
    let { patchFlag: re, dynamicChildren: J, dirs: ge } = U;
    re |= R.patchFlag & 16;
    const pe = R.props || pt, Ae = U.props || pt;
    let d;
    if (oe && Jr(oe, !1), (d = Ae.onVnodeBeforeUpdate) && Bn(d, oe, U, R), ge && Xr(U, R, oe, "beforeUpdate"), oe && Jr(oe, !0), (pe.innerHTML && Ae.innerHTML == null || pe.textContent && Ae.textContent == null) && v(Y, ""), J ? A(
      R.dynamicChildren,
      J,
      Y,
      oe,
      xe,
      Ul(U, be),
      M
    ) : G || de(
      R,
      U,
      Y,
      null,
      oe,
      xe,
      Ul(U, be),
      M,
      !1
    ), re > 0) {
      if (re & 16)
        Q(Y, pe, Ae, oe, be);
      else if (re & 2 && pe.class !== Ae.class && l(Y, "class", null, Ae.class, be), re & 4 && l(Y, "style", pe.style, Ae.style, be), re & 8) {
        const Ce = U.dynamicProps;
        for (let Oe = 0; Oe < Ce.length; Oe++) {
          const Le = Ce[Oe], Be = pe[Le], bt = Ae[Le];
          (bt !== Be || Le === "value") && l(Y, Le, Be, bt, be, oe);
        }
      }
      re & 1 && R.children !== U.children && v(Y, U.children);
    } else !G && J == null && Q(Y, pe, Ae, oe, be);
    ((d = Ae.onVnodeUpdated) || ge) && gn(() => {
      d && Bn(d, oe, U, R), ge && Xr(U, R, oe, "updated");
    }, xe);
  }, A = (R, U, oe, xe, be, M, G) => {
    for (let Y = 0; Y < U.length; Y++) {
      const re = R[Y], J = U[Y], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (re.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ma(re, J) || // - In the case of a component, it could contain anything.
        re.shapeFlag & 198) ? _(re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          oe
        )
      );
      L(
        re,
        J,
        ge,
        null,
        xe,
        be,
        M,
        G,
        !0
      );
    }
  }, Q = (R, U, oe, xe, be) => {
    if (U !== oe) {
      if (U !== pt)
        for (const M in U)
          !Ra(M) && !(M in oe) && l(
            R,
            M,
            U[M],
            null,
            be,
            xe
          );
      for (const M in oe) {
        if (Ra(M)) continue;
        const G = oe[M], Y = U[M];
        G !== Y && M !== "value" && l(R, M, Y, G, be, xe);
      }
      "value" in oe && l(R, "value", U.value, oe.value, be);
    }
  }, ae = (R, U, oe, xe, be, M, G, Y, re) => {
    const J = U.el = R ? R.el : f(""), ge = U.anchor = R ? R.anchor : f("");
    let { patchFlag: pe, dynamicChildren: Ae, slotScopeIds: d } = U;
    d && (Y = Y ? Y.concat(d) : d), R == null ? (i(J, oe, xe), i(ge, oe, xe), X(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      U.children || [],
      oe,
      ge,
      be,
      M,
      G,
      Y,
      re
    )) : pe > 0 && pe & 64 && Ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === Ae.length ? (A(
      R.dynamicChildren,
      Ae,
      oe,
      be,
      M,
      G,
      Y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (U.key != null || be && U === be.subTree) && wm(
      R,
      U,
      !0
      /* shallow */
    )) : de(
      R,
      U,
      oe,
      ge,
      be,
      M,
      G,
      Y,
      re
    );
  }, fe = (R, U, oe, xe, be, M, G, Y, re) => {
    U.slotScopeIds = Y, R == null ? U.shapeFlag & 512 ? be.ctx.activate(
      U,
      oe,
      xe,
      G,
      re
    ) : me(
      U,
      oe,
      xe,
      be,
      M,
      G,
      re
    ) : ee(R, U, re);
  }, me = (R, U, oe, xe, be, M, G) => {
    const Y = R.component = Yy(
      R,
      xe,
      be
    );
    if (am(R) && (Y.ctx.renderer = Pt), Xy(Y, !1, G), Y.asyncDep) {
      if (be && be.registerDep(Y, ue, G), !R.el) {
        const re = Y.subTree = Ve(jr);
        z(null, re, U, oe), R.placeholder = re.el;
      }
    } else
      ue(
        Y,
        R,
        U,
        oe,
        be,
        M,
        G
      );
  }, ee = (R, U, oe) => {
    const xe = U.component = R.component;
    if (Cy(R, U, oe))
      if (xe.asyncDep && !xe.asyncResolved) {
        k(xe, U, oe);
        return;
      } else
        xe.next = U, xe.update();
    else
      U.el = R.el, xe.vnode = U;
  }, ue = (R, U, oe, xe, be, M, G) => {
    const Y = () => {
      if (R.isMounted) {
        let { next: pe, bu: Ae, u: d, parent: Ce, vnode: Oe } = R;
        {
          const ce = Sm(R);
          if (ce) {
            pe && (pe.el = Oe.el, k(R, pe, G)), ce.asyncDep.then(() => {
              gn(() => {
                R.isUnmounted || J();
              }, be);
            });
            return;
          }
        }
        let Le = pe, Be;
        Jr(R, !1), pe ? (pe.el = Oe.el, k(R, pe, G)) : pe = Oe, Ae && ts(Ae), (Be = pe.props && pe.props.onVnodeBeforeUpdate) && Bn(Be, Ce, pe, Oe), Jr(R, !0);
        const bt = ad(R), et = R.subTree;
        R.subTree = bt, L(
          et,
          bt,
          // parent may have changed if it's in a teleport
          _(et.el),
          // anchor may have changed if it's in a fragment
          Gt(et),
          R,
          be,
          M
        ), pe.el = bt.el, Le === null && Ty(R, bt.el), d && gn(d, be), (Be = pe.props && pe.props.onVnodeUpdated) && gn(
          () => Bn(Be, Ce, pe, Oe),
          be
        );
      } else {
        let pe;
        const { el: Ae, props: d } = U, { bm: Ce, m: Oe, parent: Le, root: Be, type: bt } = R, et = Va(U);
        Jr(R, !1), Ce && ts(Ce), !et && (pe = d && d.onVnodeBeforeMount) && Bn(pe, Le, U), Jr(R, !0);
        {
          Be.ce && Be.ce._hasShadowRoot() && Be.ce._injectChildStyle(
            bt,
            R.parent ? R.parent.type : void 0
          );
          const ce = R.subTree = ad(R);
          L(
            null,
            ce,
            oe,
            xe,
            R,
            be,
            M
          ), U.el = ce.el;
        }
        if (Oe && gn(Oe, be), !et && (pe = d && d.onVnodeMounted)) {
          const ce = U;
          gn(
            () => Bn(pe, Le, ce),
            be
          );
        }
        (U.shapeFlag & 256 || Le && Va(Le.vnode) && Le.vnode.shapeFlag & 256) && R.a && gn(R.a, be), R.isMounted = !0, U = oe = xe = null;
      }
    };
    R.scope.on();
    const re = R.effect = new Fh(Y);
    R.scope.off();
    const J = R.update = re.run.bind(re), ge = R.job = re.runIfDirty.bind(re);
    ge.i = R, ge.id = R.uid, re.scheduler = () => Qu(ge), Jr(R, !0), J();
  }, k = (R, U, oe) => {
    U.component = R;
    const xe = R.vnode.props;
    R.vnode = U, R.next = null, Ey(R, U.props, xe, oe), Ry(R, U.children, oe), Mr(), Jf(R), kr();
  }, de = (R, U, oe, xe, be, M, G, Y, re = !1) => {
    const J = R && R.children, ge = R ? R.shapeFlag : 0, pe = U.children, { patchFlag: Ae, shapeFlag: d } = U;
    if (Ae > 0) {
      if (Ae & 128) {
        ke(
          J,
          pe,
          oe,
          xe,
          be,
          M,
          G,
          Y,
          re
        );
        return;
      } else if (Ae & 256) {
        Se(
          J,
          pe,
          oe,
          xe,
          be,
          M,
          G,
          Y,
          re
        );
        return;
      }
    }
    d & 8 ? (ge & 16 && Ge(J, be, M), pe !== J && v(oe, pe)) : ge & 16 ? d & 16 ? ke(
      J,
      pe,
      oe,
      xe,
      be,
      M,
      G,
      Y,
      re
    ) : Ge(J, be, M, !0) : (ge & 8 && v(oe, ""), d & 16 && X(
      pe,
      oe,
      xe,
      be,
      M,
      G,
      Y,
      re
    ));
  }, Se = (R, U, oe, xe, be, M, G, Y, re) => {
    R = R || Ji, U = U || Ji;
    const J = R.length, ge = U.length, pe = Math.min(J, ge);
    let Ae;
    for (Ae = 0; Ae < pe; Ae++) {
      const d = U[Ae] = re ? _r(U[Ae]) : Zn(U[Ae]);
      L(
        R[Ae],
        d,
        oe,
        null,
        be,
        M,
        G,
        Y,
        re
      );
    }
    J > ge ? Ge(
      R,
      be,
      M,
      !0,
      !1,
      pe
    ) : X(
      U,
      oe,
      xe,
      be,
      M,
      G,
      Y,
      re,
      pe
    );
  }, ke = (R, U, oe, xe, be, M, G, Y, re) => {
    let J = 0;
    const ge = U.length;
    let pe = R.length - 1, Ae = ge - 1;
    for (; J <= pe && J <= Ae; ) {
      const d = R[J], Ce = U[J] = re ? _r(U[J]) : Zn(U[J]);
      if (Ma(d, Ce))
        L(
          d,
          Ce,
          oe,
          null,
          be,
          M,
          G,
          Y,
          re
        );
      else
        break;
      J++;
    }
    for (; J <= pe && J <= Ae; ) {
      const d = R[pe], Ce = U[Ae] = re ? _r(U[Ae]) : Zn(U[Ae]);
      if (Ma(d, Ce))
        L(
          d,
          Ce,
          oe,
          null,
          be,
          M,
          G,
          Y,
          re
        );
      else
        break;
      pe--, Ae--;
    }
    if (J > pe) {
      if (J <= Ae) {
        const d = Ae + 1, Ce = d < ge ? U[d].el : xe;
        for (; J <= Ae; )
          L(
            null,
            U[J] = re ? _r(U[J]) : Zn(U[J]),
            oe,
            Ce,
            be,
            M,
            G,
            Y,
            re
          ), J++;
      }
    } else if (J > Ae)
      for (; J <= pe; )
        Re(R[J], be, M, !0), J++;
    else {
      const d = J, Ce = J, Oe = /* @__PURE__ */ new Map();
      for (J = Ce; J <= Ae; J++) {
        const He = U[J] = re ? _r(U[J]) : Zn(U[J]);
        He.key != null && Oe.set(He.key, J);
      }
      let Le, Be = 0;
      const bt = Ae - Ce + 1;
      let et = !1, ce = 0;
      const sn = new Array(bt);
      for (J = 0; J < bt; J++) sn[J] = 0;
      for (J = d; J <= pe; J++) {
        const He = R[J];
        if (Be >= bt) {
          Re(He, be, M, !0);
          continue;
        }
        let At;
        if (He.key != null)
          At = Oe.get(He.key);
        else
          for (Le = Ce; Le <= Ae; Le++)
            if (sn[Le - Ce] === 0 && Ma(He, U[Le])) {
              At = Le;
              break;
            }
        At === void 0 ? Re(He, be, M, !0) : (sn[At - Ce] = J + 1, At >= ce ? ce = At : et = !0, L(
          He,
          U[At],
          oe,
          null,
          be,
          M,
          G,
          Y,
          re
        ), Be++);
      }
      const Mt = et ? Vy(sn) : Ji;
      for (Le = Mt.length - 1, J = bt - 1; J >= 0; J--) {
        const He = Ce + J, At = U[He], Ne = U[He + 1], oo = He + 1 < ge ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ne.el || Nm(Ne)
        ) : xe;
        sn[J] === 0 ? L(
          null,
          At,
          oe,
          oo,
          be,
          M,
          G,
          Y,
          re
        ) : et && (Le < 0 || J !== Mt[Le] ? B(At, oe, oo, 2) : Le--);
      }
    }
  }, B = (R, U, oe, xe, be = null) => {
    const { el: M, type: G, transition: Y, children: re, shapeFlag: J } = R;
    if (J & 6) {
      B(R.component.subTree, U, oe, xe);
      return;
    }
    if (J & 128) {
      R.suspense.move(U, oe, xe);
      return;
    }
    if (J & 64) {
      G.move(R, U, oe, Pt);
      return;
    }
    if (G === Ze) {
      i(M, U, oe);
      for (let pe = 0; pe < re.length; pe++)
        B(re[pe], U, oe, xe);
      i(R.anchor, U, oe);
      return;
    }
    if (G === Gl) {
      $(R, U, oe);
      return;
    }
    if (xe !== 2 && J & 1 && Y)
      if (xe === 0)
        Y.beforeEnter(M), i(M, U, oe), gn(() => Y.enter(M), be);
      else {
        const { leave: pe, delayLeave: Ae, afterLeave: d } = Y, Ce = () => {
          R.ctx.isUnmounted ? a(M) : i(M, U, oe);
        }, Oe = () => {
          M._isLeaving && M[ny](
            !0
            /* cancelled */
          ), pe(M, () => {
            Ce(), d && d();
          });
        };
        Ae ? Ae(M, Ce, Oe) : Oe();
      }
    else
      i(M, U, oe);
  }, Re = (R, U, oe, xe = !1, be = !1) => {
    const {
      type: M,
      props: G,
      ref: Y,
      children: re,
      dynamicChildren: J,
      shapeFlag: ge,
      patchFlag: pe,
      dirs: Ae,
      cacheIndex: d,
      memo: Ce
    } = R;
    if (pe === -2 && (be = !1), Y != null && (Mr(), $a(Y, null, oe, R, !0), kr()), d != null && (U.renderCache[d] = void 0), ge & 256) {
      U.ctx.deactivate(R);
      return;
    }
    const Oe = ge & 1 && Ae, Le = !Va(R);
    let Be;
    if (Le && (Be = G && G.onVnodeBeforeUnmount) && Bn(Be, U, R), ge & 6)
      gt(R.component, oe, xe);
    else {
      if (ge & 128) {
        R.suspense.unmount(oe, xe);
        return;
      }
      Oe && Xr(R, null, U, "beforeUnmount"), ge & 64 ? R.type.remove(
        R,
        U,
        oe,
        Pt,
        xe
      ) : J && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !J.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Ze || pe > 0 && pe & 64) ? Ge(
        J,
        U,
        oe,
        !1,
        !0
      ) : (M === Ze && pe & 384 || !be && ge & 16) && Ge(re, U, oe), xe && Je(R);
    }
    const bt = Ce != null && d == null;
    (Le && (Be = G && G.onVnodeUnmounted) || Oe || bt) && gn(() => {
      Be && Bn(Be, U, R), Oe && Xr(R, null, U, "unmounted"), bt && (R.el = null);
    }, oe);
  }, Je = (R) => {
    const { type: U, el: oe, anchor: xe, transition: be } = R;
    if (U === Ze) {
      nt(oe, xe);
      return;
    }
    if (U === Gl) {
      E(R);
      return;
    }
    const M = () => {
      a(oe), be && !be.persisted && be.afterLeave && be.afterLeave();
    };
    if (R.shapeFlag & 1 && be && !be.persisted) {
      const { leave: G, delayLeave: Y } = be, re = () => G(oe, M);
      Y ? Y(R.el, M, re) : re();
    } else
      M();
  }, nt = (R, U) => {
    let oe;
    for (; R !== U; )
      oe = S(R), a(R), R = oe;
    a(U);
  }, gt = (R, U, oe) => {
    const { bum: xe, scope: be, job: M, subTree: G, um: Y, m: re, a: J } = R;
    ld(re), ld(J), xe && ts(xe), be.stop(), M && (M.flags |= 8, Re(G, R, U, oe)), Y && gn(Y, U), gn(() => {
      R.isUnmounted = !0;
    }, U);
  }, Ge = (R, U, oe, xe = !1, be = !1, M = 0) => {
    for (let G = M; G < R.length; G++)
      Re(R[G], U, oe, xe, be);
  }, Gt = (R) => {
    if (R.shapeFlag & 6)
      return Gt(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const U = S(R.anchor || R.el), oe = U && U[ey];
    return oe ? S(oe) : U;
  };
  let on = !1;
  const It = (R, U, oe) => {
    let xe;
    R == null ? U._vnode && (Re(U._vnode, null, null, !0), xe = U._vnode.component) : L(
      U._vnode || null,
      R,
      U,
      null,
      null,
      null,
      oe
    ), U._vnode = R, on || (on = !0, Jf(xe), Zh(), on = !1);
  }, Pt = {
    p: L,
    um: Re,
    m: B,
    r: Je,
    mt: me,
    mc: X,
    pc: de,
    pbc: A,
    n: Gt,
    o: e
  };
  return {
    render: It,
    hydrate: void 0,
    createApp: Sy(It)
  };
}
function Ul({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $y(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wm(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Ke(i) && Ke(a))
    for (let l = 0; l < i.length; l++) {
      const c = i[l];
      let f = a[l];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[l] = _r(a[l]), f.el = c.el), !n && f.patchFlag !== -2 && wm(c, f)), f.type === Gs && (f.patchFlag === -1 && (f = a[l] = _r(f)), f.el = c.el), f.type === jr && !f.el && (f.el = c.el);
    }
}
function Vy(e) {
  const t = e.slice(), n = [0];
  let i, a, l, c, f;
  const m = e.length;
  for (i = 0; i < m; i++) {
    const b = e[i];
    if (b !== 0) {
      if (a = n[n.length - 1], e[a] < b) {
        t[i] = a, n.push(i);
        continue;
      }
      for (l = 0, c = n.length - 1; l < c; )
        f = l + c >> 1, e[n[f]] < b ? l = f + 1 : c = f;
      b < e[n[l]] && (l > 0 && (t[i] = n[l - 1]), n[l] = i);
    }
  }
  for (l = n.length, c = n[l - 1]; l-- > 0; )
    n[l] = c, c = t[c];
  return n;
}
function Sm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Sm(t);
}
function ld(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Nm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Nm(t.subTree) : null;
}
const Mm = (e) => e.__isSuspense;
function jy(e, t) {
  t && t.pendingBranch ? Ke(e) ? t.effects.push(...e) : t.effects.push(e) : qb(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Gs = /* @__PURE__ */ Symbol.for("v-txt"), jr = /* @__PURE__ */ Symbol.for("v-cmt"), Gl = /* @__PURE__ */ Symbol.for("v-stc"), Ha = [];
let Nn = null;
function Me(e = !1) {
  Ha.push(Nn = e ? null : []);
}
function Hy() {
  Ha.pop(), Nn = Ha[Ha.length - 1] || null;
}
let qa = 1;
function ud(e, t = !1) {
  qa += e, e < 0 && Nn && t && (Nn.hasOnce = !0);
}
function km(e) {
  return e.dynamicChildren = qa > 0 ? Nn || Ji : null, Hy(), qa > 0 && Nn && Nn.push(e), e;
}
function Pe(e, t, n, i, a, l) {
  return km(
    ie(
      e,
      t,
      n,
      i,
      a,
      l,
      !0
    )
  );
}
function gi(e, t, n, i, a) {
  return km(
    Ve(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Pm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ma(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Am = ({ key: e }) => e ?? null, rs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Tt(e) || /* @__PURE__ */ rn(e) || We(e) ? { i: Sn, r: e, k: t, f: !!n } : e : null);
function ie(e, t = null, n = null, i = 0, a = null, l = e === Ze ? 0 : 1, c = !1, f = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Am(t),
    ref: t && rs(t),
    scopeId: em,
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
    shapeFlag: l,
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Sn
  };
  return f ? (ic(m, n), l & 128 && e.normalize(m)) : n && (m.shapeFlag |= Tt(n) ? 8 : 16), qa > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Nn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && Nn.push(m), m;
}
const Ve = Uy;
function Uy(e, t = null, n = null, i = 0, a = null, l = !1) {
  if ((!e || e === lm) && (e = jr), Pm(e)) {
    const f = la(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ic(f, n), qa > 0 && !l && Nn && (f.shapeFlag & 6 ? Nn[Nn.indexOf(e)] = f : Nn.push(f)), f.patchFlag = -2, f;
  }
  if (tv(e) && (e = e.__vccOpts), t) {
    t = Gy(t);
    let { class: f, style: m } = t;
    f && !Tt(f) && (t.class = st(f)), ct(m) && (/* @__PURE__ */ Ju(m) && !Ke(m) && (m = an({}, m)), t.style = Ot(m));
  }
  const c = Tt(e) ? 1 : Mm(e) ? 128 : ty(e) ? 64 : ct(e) ? 4 : We(e) ? 2 : 0;
  return ie(
    e,
    t,
    n,
    i,
    a,
    c,
    l,
    !0
  );
}
function Gy(e) {
  return e ? /* @__PURE__ */ Ju(e) || gm(e) ? an({}, e) : e : null;
}
function la(e, t, n = !1, i = !1) {
  const { props: a, ref: l, patchFlag: c, children: f, transition: m } = e, b = t ? zr(a || {}, t) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Am(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? Ke(l) ? l.concat(rs(t)) : [l, rs(t)] : rs(t)
    ) : l,
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
    patchFlag: t && e.type !== Ze ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: m,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && la(e.ssContent),
    ssFallback: e.ssFallback && la(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && i && ec(
    v,
    m.clone(v)
  ), v;
}
function By(e = " ", t = 0) {
  return Ve(Gs, null, e, t);
}
function Dt(e = "", t = !1) {
  return t ? (Me(), gi(jr, null, e)) : Ve(jr, null, e);
}
function Zn(e) {
  return e == null || typeof e == "boolean" ? Ve(jr) : Ke(e) ? Ve(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Pm(e) ? _r(e) : Ve(Gs, null, String(e));
}
function _r(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : la(e);
}
function ic(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Ke(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), ic(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !gm(t) ? t._ctx = Sn : a === 3 && Sn && (Sn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else We(t) ? (t = { default: t, _ctx: Sn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [By(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function zr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = st([t.class, i.class]));
      else if (a === "style")
        t.style = Ot([t.style, i.style]);
      else if (Os(a)) {
        const l = t[a], c = i[a];
        c && l !== c && !(Ke(l) && l.includes(c)) ? t[a] = l ? [].concat(l, c) : c : c == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Fs(a) && (t[a] = c);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Bn(e, t, n, i = null) {
  sr(e, t, 7, [
    n,
    i
  ]);
}
const Ky = fm();
let Wy = 0;
function Yy(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Ky, l = {
    uid: Wy++,
    vnode: e,
    type: i,
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
    scope: new yb(
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
    propsOptions: ym(i, a),
    emitsOptions: dm(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: pt,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: pt,
    data: pt,
    props: pt,
    attrs: pt,
    slots: pt,
    refs: pt,
    setupState: pt,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = My.bind(null, l), e.ce && e.ce(l), l;
}
let nn = null;
const qy = () => nn || Sn;
let vs, vu;
{
  const e = zs(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (l) => {
      a.length > 1 ? a.forEach((c) => c(l)) : a[0](l);
    };
  };
  vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => nn = n
  ), vu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xa = n
  );
}
const ro = (e) => {
  const t = nn;
  return vs(e), e.scope.on(), () => {
    e.scope.off(), vs(t);
  };
}, cd = () => {
  nn && nn.scope.off(), vs(null);
};
function Cm(e) {
  return e.vnode.shapeFlag & 4;
}
let Xa = !1;
function Xy(e, t = !1, n = !1) {
  t && vu(t);
  const { props: i, children: a } = e.vnode, l = Cm(e);
  Iy(e, i, l, t), Fy(e, a, n || t);
  const c = l ? Jy(e, t) : void 0;
  return t && vu(!1), c;
}
function Jy(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gy);
  const { setup: i } = n;
  if (i) {
    Mr();
    const a = e.setupContext = i.length > 1 ? Qy(e) : null, l = ro(e), c = no(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = Ah(c);
    if (kr(), l(), (f || e.sp) && !Va(e) && im(e), f) {
      if (c.then(cd, cd), t)
        return c.then((m) => {
          fd(e, m);
        }).catch((m) => {
          Vs(m, e, 0);
        });
      e.asyncDep = c;
    } else
      fd(e, c);
  } else
    Tm(e);
}
function fd(e, t, n) {
  We(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ct(t) && (e.setupState = qh(t)), Tm(e);
}
function Tm(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || ar);
  {
    const a = ro(e);
    Mr();
    try {
      by(e);
    } finally {
      kr(), a();
    }
  }
}
const Zy = {
  get(e, t) {
    return tn(e, "get", ""), e[t];
  }
};
function Qy(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Zy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(qh($b(e.exposed)), {
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
function ev(e, t = !0) {
  return We(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function tv(e) {
  return We(e) && "__vccOpts" in e;
}
const mt = (e, t) => /* @__PURE__ */ Gb(e, t, Xa), nv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _u;
const dd = typeof window < "u" && window.trustedTypes;
if (dd)
  try {
    _u = /* @__PURE__ */ dd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Im = _u ? (e) => _u.createHTML(e) : (e) => e, rv = "http://www.w3.org/2000/svg", iv = "http://www.w3.org/1998/Math/MathML", gr = typeof document < "u" ? document : null, hd = gr && /* @__PURE__ */ gr.createElement("template"), av = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? gr.createElementNS(rv, e) : t === "mathml" ? gr.createElementNS(iv, e) : n ? gr.createElement(e, { is: n }) : gr.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => gr.createTextNode(e),
  createComment: (e) => gr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => gr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, l) {
    const c = n ? n.previousSibling : t.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      hd.innerHTML = Im(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const f = hd.content;
      if (i === "svg" || i === "mathml") {
        const m = f.firstChild;
        for (; m.firstChild; )
          f.appendChild(m.firstChild);
        f.removeChild(m);
      }
      t.insertBefore(f, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ov = /* @__PURE__ */ Symbol("_vtc");
function sv(e, t, n) {
  const i = e[ov];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const _s = /* @__PURE__ */ Symbol("_vod"), Em = /* @__PURE__ */ Symbol("_vsh"), io = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[_s] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ka(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), ka(e, !0), i.enter(e)) : i.leave(e, () => {
      ka(e, !1);
    }) : ka(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ka(e, t);
  }
};
function ka(e, t) {
  e.style.display = t ? e[_s] : "none", e[Em] = !t;
}
const lv = /* @__PURE__ */ Symbol(""), uv = /(?:^|;)\s*display\s*:/;
function cv(e, t, n) {
  const i = e.style, a = Tt(n);
  let l = !1;
  if (n && !a) {
    if (t)
      if (Tt(t))
        for (const c of t.split(";")) {
          const f = c.slice(0, c.indexOf(":")).trim();
          n[f] == null && is(i, f, "");
        }
      else
        for (const c in t)
          n[c] == null && is(i, c, "");
    for (const c in n)
      c === "display" && (l = !0), is(i, c, n[c]);
  } else if (a) {
    if (t !== n) {
      const c = i[lv];
      c && (n += ";" + c), i.cssText = n, l = uv.test(n);
    }
  } else t && e.removeAttribute("style");
  _s in e && (e[_s] = l ? i.display : "", e[Em] && (i.display = "none"));
}
const md = /\s*!important$/;
function is(e, t, n) {
  if (Ke(n))
    n.forEach((i) => is(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = fv(e, t);
    md.test(n) ? e.setProperty(
      pi(i),
      n.replace(md, ""),
      "important"
    ) : e[i] = n;
  }
}
const pd = ["Webkit", "Moz", "ms"], Bl = {};
function fv(e, t) {
  const n = Bl[t];
  if (n)
    return n;
  let i = fn(t);
  if (i !== "filter" && i in e)
    return Bl[t] = i;
  i = Ls(i);
  for (let a = 0; a < pd.length; a++) {
    const l = pd[a] + i;
    if (l in e)
      return Bl[t] = l;
  }
  return t;
}
const gd = "http://www.w3.org/1999/xlink";
function bd(e, t, n, i, a, l = gb(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(gd, t.slice(6, t.length)) : e.setAttributeNS(gd, t, n) : n == null || l && !Eh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : or(n) ? String(n) : n
  );
}
function yd(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Im(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const f = l === "OPTION" ? e.getAttribute("value") || "" : e.value, m = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== m || !("_value" in e)) && (e.value = m), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = Eh(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(a || t);
}
function Bi(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function dv(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const vd = /* @__PURE__ */ Symbol("_vei");
function hv(e, t, n, i, a = null) {
  const l = e[vd] || (e[vd] = {}), c = l[t];
  if (i && c)
    c.value = i;
  else {
    const [f, m] = mv(t);
    if (i) {
      const b = l[t] = bv(
        i,
        a
      );
      Bi(e, f, b, m);
    } else c && (dv(e, f, c, m), l[t] = void 0);
  }
}
const _d = /(?:Once|Passive|Capture)$/;
function mv(e) {
  let t;
  if (_d.test(e)) {
    t = {};
    let i;
    for (; i = e.match(_d); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : pi(e.slice(2)), t];
}
let Kl = 0;
const pv = /* @__PURE__ */ Promise.resolve(), gv = () => Kl || (pv.then(() => Kl = 0), Kl = Date.now());
function bv(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    sr(
      yv(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = gv(), n;
}
function yv(e, t) {
  if (Ke(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const xd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vv = (e, t, n, i, a, l) => {
  const c = a === "svg";
  t === "class" ? sv(e, i, c) : t === "style" ? cv(e, n, i) : Os(t) ? Fs(t) || hv(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _v(e, t, i, c)) ? (yd(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bd(e, t, i, c, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (xv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Tt(i))) ? yd(e, fn(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), bd(e, t, i, c));
};
function _v(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && xd(t) && We(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return xd(t) && Tt(n) ? !1 : t in e;
}
function xv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = fn(t);
  return Array.isArray(n) ? n.some((a) => fn(a) === i) : Object.keys(n).some((a) => fn(a) === i);
}
const wd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ke(t) ? (n) => ts(t, n) : t;
};
function wv(e) {
  e.target.composing = !0;
}
function Sd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Wl = /* @__PURE__ */ Symbol("_assign");
function Nd(e, t, n) {
  return t && (e = e.trim()), n && (e = Uu(e)), e;
}
const Md = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e[Wl] = wd(a);
    const l = i || a.props && a.props.type === "number";
    Bi(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Wl](Nd(e.value, n, l));
    }), (n || l) && Bi(e, "change", () => {
      e.value = Nd(e.value, n, l);
    }), t || (Bi(e, "compositionstart", wv), Bi(e, "compositionend", Sd), Bi(e, "change", Sd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: l } }, c) {
    if (e[Wl] = wd(c), e.composing) return;
    const f = (l || e.type === "number") && !/^0\d/.test(e.value) ? Uu(e.value) : e.value, m = t ?? "";
    if (f === m)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === m) || (e.value = m);
  }
}, Sv = ["ctrl", "shift", "alt", "meta"], Nv = {
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
  exact: (e, t) => Sv.some((n) => e[`${n}Key`] && !t.includes(n))
}, Vr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...l) => {
    for (let c = 0; c < t.length; c++) {
      const f = Nv[t[c]];
      if (f && f(a, t)) return;
    }
    return e(a, ...l);
  }));
}, Mv = /* @__PURE__ */ an({ patchProp: vv }, av);
let kd;
function kv() {
  return kd || (kd = Ly(Mv));
}
const ac = ((...e) => {
  const t = kv().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Av(i);
    if (!a) return;
    const l = t._component;
    !We(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const c = n(a, !1, Pv(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), c;
  }, t;
});
function Pv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Av(e) {
  return Tt(e) ? document.querySelector(e) : e;
}
const kt = Math.PI / 180, Dm = Math.PI * 2, Cv = 2048;
function ht(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Hr(e, t, n) {
  return { x: e, y: t, z: n };
}
function xs(e, t) {
  return Hr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function qi(e, t) {
  return Hr(e.x * t, e.y * t, e.z * t);
}
function as(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Pd(e, t) {
  return Hr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Da(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Hr(e.x / t, e.y / t, e.z / t);
}
function Tv(e, t) {
  const n = Number(e || 0) * kt, i = Number(t || 0) * kt, a = Math.cos(i);
  return Hr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function os(e, t, n = 0) {
  const i = Tv(e, t);
  let a = Hr(0, 1, 0);
  Math.abs(as(i, a)) > 0.999 && (a = Hr(0, 0, 1));
  let l = Da(Pd(a, i)), c = Da(Pd(i, l));
  const f = Number(n || 0) * kt, m = Math.cos(f), b = Math.sin(f), v = xs(qi(l, m), qi(c, b)), _ = xs(qi(l, -b), qi(c, m));
  return l = Da(v), c = Da(_), { fwd: i, right: l, up: c };
}
function Iv(e, t) {
  const n = (Number(e || 0) - 0.5) * Dm, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Hr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Ad(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), l = Math.max(1, Number(n || 1)), c = Math.max(512, Cv), f = Math.min(1, c / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: l,
    renderScale: f,
    width: Math.max(1, Math.round(i * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function Cd(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function Yl(e, t, n) {
  const i = Cd(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = Cd(e, e.FRAGMENT_SHADER, n);
  } catch (c) {
    throw e.deleteShader(i), c;
  }
  const l = e.createProgram();
  if (e.attachShader(l, i), e.attachShader(l, a), e.linkProgram(l), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(l, e.LINK_STATUS)) {
    const c = e.getProgramInfoLog(l) || "program link failed";
    throw e.deleteProgram(l), new Error(c);
  }
  return l;
}
const ql = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, Ev = `#version 300 es
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
}`, Dv = `#version 300 es
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
}`, Ov = `#version 300 es
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
function Pa(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(ht(i, 1, 179) * kt * 0.5) * (n / Math.max(t, 1))) / kt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: ht(i, 1, 179),
    vFovDeg: ht(a, 0.1, 179)
  };
}
function Fv(e) {
  const t = os(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(ht(Number(e.hFovDeg), 0.1, 179) * 0.5 * kt),
    tanY: Math.tan(ht(Number(e.vFovDeg), 0.1, 179) * 0.5 * kt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: ht(Number(e.opacity ?? 1), 0, 1)
  };
}
function Rv(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, l = null, c = null, f = null, m = null, b = null, v = null, _ = null, S = null, I = !1, x = Ad(1, 1, 1), L = null, O = null, z = null, P = null, $ = null;
  const E = /* @__PURE__ */ new Map();
  let D = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, H = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, Z = {
    paint: !1,
    mask: !1
  };
  function X(M = null, G = null) {
    const Y = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, Y), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, M ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, G ?? n.CLAMP_TO_EDGE), Y;
  }
  function W() {
    if (I) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = Yl(n, ql, Ev), a = Yl(n, ql, Dv), l = Yl(n, ql, Ov), L = {
        mode: n.getUniformLocation(i, "u_mode"),
        yaw: n.getUniformLocation(i, "u_yaw"),
        pitch: n.getUniformLocation(i, "u_pitch"),
        roll: n.getUniformLocation(i, "u_roll"),
        hFov: n.getUniformLocation(i, "u_hfov"),
        vFov: n.getUniformLocation(i, "u_vfov"),
        viewport: n.getUniformLocation(i, "u_viewport"),
        opacity: n.getUniformLocation(i, "u_opacity"),
        coverage: n.getUniformLocation(i, "u_coverage"),
        background: n.getUniformLocation(i, "u_background")
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
      }, z = {
        texture: n.getUniformLocation(l, "u_texture"),
        mode: n.getUniformLocation(l, "u_mode"),
        viewRight: n.getUniformLocation(l, "u_viewRight"),
        viewUp: n.getUniformLocation(l, "u_viewUp"),
        viewFwd: n.getUniformLocation(l, "u_viewFwd"),
        viewHfov: n.getUniformLocation(l, "u_viewHfov"),
        viewVfov: n.getUniformLocation(l, "u_viewVfov"),
        stickerRight: n.getUniformLocation(l, "u_stickerRight"),
        stickerUp: n.getUniformLocation(l, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(l, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(l, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(l, "u_stickerTanY"),
        crop: n.getUniformLocation(l, "u_crop"),
        opacity: n.getUniformLocation(l, "u_opacity")
      }, c = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, c), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
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
      ]), n.STATIC_DRAW), f = X(n.REPEAT, n.CLAMP_TO_EDGE), m = X(n.REPEAT, n.CLAMP_TO_EDGE), b = X(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), I = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function A() {
    var M;
    if (n) {
      try {
        c && n.deleteBuffer(c), f && n.deleteTexture(f), m && n.deleteTexture(m), b && n.deleteTexture(b), E.forEach((G) => {
          ke(G);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), l && n.deleteProgram(l), (M = n.getExtension("WEBGL_lose_context")) == null || M.loseContext();
      } catch {
      }
      n = null, i = null, a = null, l = null, c = null, f = null, m = null, b = null, E.clear(), v = null, _ = null, S = null, H = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, Z = {
        paint: !1,
        mask: !1
      }, P = null, $ = null, I = !1;
    }
  }
  function Q(M, G, Y = 1) {
    x = Ad(M, G, Y), (t.width !== x.width || t.height !== x.height) && (t.width = x.width, t.height = x.height);
  }
  function ae(M) {
    M === "background" ? v = null : M === "paint" ? _ = null : S = null, H[M] && (H[M].width = 0, H[M].height = 0);
  }
  function fe() {
    Z.paint = !1, Z.mask = !1;
  }
  function me(M) {
    fe(), M === "paint" ? Z.paint = !0 : M === "mask" && (Z.mask = !0);
  }
  function ee(M, G, Y = [], re = { width: 0, height: 0 }, J = !1) {
    if (!n || !M || !G) return !1;
    const ge = Number(G.width || G.videoWidth || G.naturalWidth || 0), pe = Number(G.height || G.videoHeight || G.naturalHeight || 0);
    if (!(ge > 1) || !(pe > 1)) return !1;
    const Ae = Array.isArray(Y) ? Y.filter((d) => d && d.w > 0 && d.h > 0) : [];
    if (!Ae.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, M), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, J ? 1 : 0), re.width !== ge || re.height !== pe)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), re.width = ge, re.height = pe, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), $ = P.getContext("2d")), !$)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const d of Ae) {
      const Ce = Math.max(0, Math.floor(Number(d.x || 0))), Oe = Math.max(0, Math.floor(Number(d.y || 0))), Le = Math.min(ge - Ce, Math.ceil(Number(d.w || 0))), Be = Math.min(pe - Oe, Math.ceil(Number(d.h || 0)));
      if (!(Le <= 0 || Be <= 0)) {
        if (P.width !== Le || P.height !== Be) {
          if (P.width = Le, P.height = Be, $ = P.getContext("2d"), !$)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          $.clearRect(0, 0, Le, Be);
        $.drawImage(G, Ce, Oe, Le, Be, 0, 0, Le, Be), n.texSubImage2D(n.TEXTURE_2D, 0, Ce, Oe, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function ue(M, G, Y, re, J = null, ge = !1) {
    if (!W()) return !1;
    if (!Y)
      return ae(M), !1;
    const pe = String(re ?? ""), Ae = M === "background" ? v : M === "paint" ? _ : S, d = H[M], Ce = Number(Y.width || Y.videoWidth || Y.naturalWidth || 0), Oe = Number(Y.height || Y.videoHeight || Y.naturalHeight || 0), Le = d.width !== Ce || d.height !== Oe;
    if (Ae === pe && !Le && !(Array.isArray(J) && J.length)) return !0;
    if (!(Ce > 0) || !(Oe > 0))
      return ae(M), !1;
    if (n.bindTexture(n.TEXTURE_2D, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ge ? 1 : 0), !(Array.isArray(J) && J.length ? ee(G, Y, J, d, ge) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Y), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ae(M), !1;
      d.width = Ce, d.height = Oe;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), M === "background" ? v = pe : M === "paint" ? _ = pe : S = pe, !0;
  }
  function k(M, G) {
    return ue("background", f, M, G, null, !0);
  }
  function de(M, G, Y = null) {
    return ue("paint", m, M, G, Y, !0);
  }
  function Se(M, G, Y = null) {
    return ue("mask", b, M, G, Y, !0);
  }
  function ke(M) {
    M != null && M.texture && n && n.deleteTexture(M.texture);
  }
  function B(M = /* @__PURE__ */ new Set()) {
    E.forEach((G, Y) => {
      M.has(Y) || (ke(G), E.delete(Y));
    });
  }
  function Re(M) {
    if (!n || !(M != null && M.assetId) || !(M != null && M.source)) return null;
    const G = String(M.assetId), Y = String(M.revision ?? ""), re = M.source, J = Number(re.width || re.naturalWidth || re.videoWidth || 0), ge = Number(re.height || re.naturalHeight || re.videoHeight || 0);
    if (J <= 0 || ge <= 0) return null;
    let pe = E.get(G);
    if (pe || (pe = {
      texture: X(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, E.set(G, pe)), pe.revision !== Y || pe.width !== J || pe.height !== ge) {
      if (n.bindTexture(n.TEXTURE_2D, pe.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, re), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), pe.revision = Y, pe.width = J, pe.height = ge;
    }
    return pe.texture;
  }
  function Je(M = []) {
    if (!W()) return !1;
    const G = /* @__PURE__ */ new Set();
    return M.forEach((Y) => {
      !(Y != null && Y.assetId) || !(Y != null && Y.source) || (G.add(String(Y.assetId)), Re(Y));
    }), B(G), !0;
  }
  function nt() {
    return W() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function gt(M) {
    n.useProgram(M), n.bindBuffer(n.ARRAY_BUFFER, c), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Ge(M, G = {}) {
    if (!v) return null;
    n.disable(n.BLEND), gt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(L.background, 0), n.uniform2f(L.viewport, Math.max(1, x.width), Math.max(1, x.height)), n.uniform1i(L.mode, (M == null ? void 0 : M.mode) === "unwrap" ? 0 : (M == null ? void 0 : M.mode) === "cutout" ? 2 : 1);
    const Y = Pa(M, x.width, x.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(L.yaw, Number(Y.yawDeg || 0) * kt), n.uniform1f(L.pitch, Number(Y.pitchDeg || 0) * kt), n.uniform1f(L.roll, Number(Y.rollDeg || 0) * kt), n.uniform1f(L.hFov, ht(Number(Y.hFovDeg || 90), 0.1, 179) * kt), n.uniform1f(L.vFov, ht(Number(Y.vFovDeg || 60), 0.1, 179) * kt), n.uniform1f(L.opacity, ht(Number(G.backgroundOpacity ?? 1), 0, 1));
    const re = Number((M == null ? void 0 : M.coverageDeg) || (G == null ? void 0 : G.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(L.coverage, re), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Gt(M, G = {}) {
    const Y = Z.paint && _ != null, re = Z.mask && S != null;
    if (!Y && !re) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), gt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, m), n.uniform1i(O.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, b), n.uniform1i(O.mask, 1), n.uniform1i(O.mode, (M == null ? void 0 : M.mode) === "unwrap" ? 0 : (M == null ? void 0 : M.mode) === "cutout" ? 2 : 1);
    const J = Pa(M, x.width, x.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(O.yaw, Number(J.yawDeg || 0) * kt), n.uniform1f(O.pitch, Number(J.pitchDeg || 0) * kt), n.uniform1f(O.roll, Number(J.rollDeg || 0) * kt), n.uniform1f(O.hFov, ht(Number(J.hFovDeg || 90), 0.1, 179) * kt), n.uniform1f(O.vFov, ht(Number(J.vFovDeg || 60), 0.1, 179) * kt), n.uniform1f(O.paintOpacity, ht(Number(G.paintOpacity ?? 1), 0, 1)), n.uniform1f(O.maskOpacity, ht(Number(G.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(O.hasPaint, Y ? 1 : 0), n.uniform1i(O.hasMask, re ? 1 : 0), n.uniform1i(O.showMaskTint, G.showMaskTint === !1 ? 0 : 1), n.uniform3f(O.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function on(M, G) {
    var d, Ce, Oe, Le, Be, bt, et;
    const Y = Array.isArray(M == null ? void 0 : M.objects) ? M.objects : [];
    if (!Y.length) {
      fe(), B(/* @__PURE__ */ new Set());
      return;
    }
    const re = (G == null ? void 0 : G.mode) === "unwrap" ? 0 : (G == null ? void 0 : G.mode) === "cutout" ? 2 : 1, J = Pa(G, x.width, x.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, ge = os(J.yawDeg, J.pitchDeg, J.rollDeg), pe = Y.slice().sort((ce, sn) => Number((ce == null ? void 0 : ce.zIndex) || 0) - Number((sn == null ? void 0 : sn.zIndex) || 0)), Ae = /* @__PURE__ */ new Set();
    fe();
    for (const ce of pe)
      if (!(!ce || ce.visible === !1)) {
        if (ce.type === "sticker") {
          const sn = String(((d = ce == null ? void 0 : ce.params) == null ? void 0 : d.assetId) || (ce == null ? void 0 : ce.id) || "");
          if (!sn) continue;
          Ae.add(sn);
          const Mt = Re({
            assetId: sn,
            source: ce.source,
            revision: ce.revision
          });
          if (!Mt) continue;
          const He = Fv({
            yawDeg: ((Ce = ce == null ? void 0 : ce.transform) == null ? void 0 : Ce.yawDeg) || 0,
            pitchDeg: ((Oe = ce == null ? void 0 : ce.transform) == null ? void 0 : Oe.pitchDeg) || 0,
            rollDeg: ((Le = ce == null ? void 0 : ce.transform) == null ? void 0 : Le.rollDeg) || 0,
            hFovDeg: ((Be = ce == null ? void 0 : ce.transform) == null ? void 0 : Be.hFovDeg) || 30,
            vFovDeg: ((bt = ce == null ? void 0 : ce.transform) == null ? void 0 : bt.vFovDeg) || 30,
            crop: ((et = ce == null ? void 0 : ce.params) == null ? void 0 : et.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (ce == null ? void 0 : ce.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), gt(l), n.uniform1i(z.texture, 0), n.uniform1i(z.mode, re), n.uniform3f(z.viewRight, ge.right.x, ge.right.y, ge.right.z), n.uniform3f(z.viewUp, ge.up.x, ge.up.y, ge.up.z), n.uniform3f(z.viewFwd, ge.fwd.x, ge.fwd.y, ge.fwd.z), n.uniform1f(z.viewHfov, ht(Number(J.hFovDeg || 90), 0.1, 179) * kt), n.uniform1f(z.viewVfov, ht(Number(J.vFovDeg || 60), 0.1, 179) * kt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, Mt), n.uniform3f(z.stickerRight, He.right.x, He.right.y, He.right.z), n.uniform3f(z.stickerUp, He.up.x, He.up.y, He.up.z), n.uniform3f(z.stickerFwd, He.fwd.x, He.fwd.y, He.fwd.z), n.uniform1f(z.stickerTanX, Math.max(1e-6, He.tanX)), n.uniform1f(z.stickerTanY, Math.max(1e-6, He.tanY)), n.uniform4f(
            z.crop,
            ht(Number(He.crop.x0 ?? 0), 0, 1),
            ht(Number(He.crop.y0 ?? 0), 0, 1),
            ht(Number(He.crop.x1 ?? 1), 0, 1),
            ht(Number(He.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(z.opacity, He.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (ce.type === "paint" || ce.type === "raster") {
          if (!de(ce.source, ce.revision ?? "")) continue;
          me("paint"), Gt(G, {
            paintOpacity: Number(ce.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (ce.type === "mask") {
          if (!Se(ce.source, ce.revision ?? "")) continue;
          me("mask"), Gt(G, {
            paintOpacity: 0,
            maskOpacity: Number(ce.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    B(Ae), fe();
  }
  function It(M) {
    return !nt() || !v ? null : (Ge({
      mode: "panorama",
      yawDeg: (M == null ? void 0 : M.yawDeg) || 0,
      pitchDeg: (M == null ? void 0 : M.pitchDeg) || 0,
      fovDeg: (M == null ? void 0 : M.fovDeg) || 100
    }, M), t);
  }
  function Pt(M) {
    return !nt() || !v ? null : (Ge({ mode: "unwrap" }, M), t);
  }
  function $t(M) {
    return !nt() || !v ? null : (Ge({
      mode: "cutout",
      yawDeg: (M == null ? void 0 : M.yawDeg) || 0,
      pitchDeg: (M == null ? void 0 : M.pitchDeg) || 0,
      rollDeg: (M == null ? void 0 : M.rollDeg) || 0,
      hFovDeg: (M == null ? void 0 : M.hFovDeg) || 90,
      vFovDeg: (M == null ? void 0 : M.vFovDeg) || 60
    }, M), t);
  }
  function R(M = {}) {
    if (!W()) return !1;
    const G = Object.prototype.hasOwnProperty.call(M, "backgroundSource"), Y = Object.prototype.hasOwnProperty.call(M, "paintSource"), re = Object.prototype.hasOwnProperty.call(M, "maskSource"), J = Object.prototype.hasOwnProperty.call(M, "textures"), ge = Object.prototype.hasOwnProperty.call(M, "scene");
    return G && k(M.backgroundSource, M.backgroundRevision ?? ""), Y && de(M.paintSource, M.paintRevision ?? ""), re && Se(M.maskSource, M.maskRevision ?? ""), J && (Je(M.textures || []), D.textures = M.textures || []), ge && (D.scene = M.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(M, "objectPass") && (D.objectPass = M.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(M, "backgroundOpacity") && (D.backgroundOpacity = Number(M.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(M, "showMaskTint") && (D.showMaskTint = M.showMaskTint === !0), Object.prototype.hasOwnProperty.call(M, "coverageDeg") && (D.coverageDeg = Number(M.coverageDeg || 360) === 180 ? 180 : 360), !0;
  }
  function U(M = {}) {
    return !W() || (Q(M.width, M.height, M.dpr || 1), !nt()) || !R(M) ? null : (v && Ge(M.view, {
      ...M,
      backgroundOpacity: Number(M.backgroundOpacity ?? D.backgroundOpacity ?? 1),
      coverageDeg: Number(M.coverageDeg || D.coverageDeg || 360) === 180 ? 180 : 360
    }), on(
      D.objectPass || { objects: [] },
      M.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function oe(M = {}) {
    return R(M);
  }
  function xe(M, G, Y) {
    const re = Math.max(1, Number((M == null ? void 0 : M.viewportWidth) || x.sourceWidth || x.width || 1)), J = Math.max(1, Number((M == null ? void 0 : M.viewportHeight) || x.sourceHeight || x.height || 1)), ge = Number(G), pe = Number(Y);
    if (!Number.isFinite(ge) || !Number.isFinite(pe)) return null;
    if ((M == null ? void 0 : M.mode) === "unwrap")
      return { u: (ge / re % 1 + 1) % 1, v: ht(pe / J, 0, 1) };
    const Ae = Pa(M, re, J);
    if (!Ae) return null;
    const d = os(Ae.yawDeg, Ae.pitchDeg, Ae.rollDeg), Ce = (ge - re * 0.5) / (re * 0.5) * Math.tan(ht(Ae.hFovDeg, 1, 179) * kt * 0.5), Oe = (J * 0.5 - pe) / (J * 0.5) * Math.tan(ht(Ae.vFovDeg, 0.1, 179) * kt * 0.5), Le = Da(xs(xs(qi(d.right, Ce), qi(d.up, Oe)), d.fwd));
    return {
      u: (Math.atan2(Le.x, Le.z) / Dm + 0.5 + 1) % 1,
      v: ht(0.5 - Math.asin(ht(Le.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function be(M, G, Y) {
    const re = Math.max(1, Number((M == null ? void 0 : M.viewportWidth) || x.sourceWidth || x.width || 1)), J = Math.max(1, Number((M == null ? void 0 : M.viewportHeight) || x.sourceHeight || x.height || 1));
    if ((M == null ? void 0 : M.mode) === "unwrap")
      return {
        x: (Number(G || 0) % 1 + 1) % 1 * re,
        y: ht(Number(Y || 0), 0, 1) * J,
        visible: !0
      };
    const ge = Pa(M, re, J);
    if (!ge)
      return { x: re * 0.5, y: J * 0.5, visible: !1 };
    const pe = os(ge.yawDeg, ge.pitchDeg, ge.rollDeg), Ae = Iv(G, Y), d = as(Ae, pe.right), Ce = as(Ae, pe.up), Oe = as(Ae, pe.fwd);
    if (Oe <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Le = re * 0.5 + d / Oe * (re * 0.5 / Math.tan(ht(ge.hFovDeg, 1, 179) * kt * 0.5)), Be = J * 0.5 - Ce / Oe * (J * 0.5 / Math.tan(ht(ge.vFovDeg, 0.1, 179) * kt * 0.5));
    return { x: Le, y: Be, visible: Le >= 0 && Le <= re && Be >= 0 && Be <= J };
  }
  return {
    init: W,
    dispose: A,
    setViewport: Q,
    setBackgroundErp: k,
    setPaintErp: de,
    setMaskErp: Se,
    renderPanorama: It,
    renderUnwrap: Pt,
    renderCutout: $t,
    renderScene: U,
    syncState: oe,
    screenToErpUv: xe,
    erpUvToScreen: be,
    getCanvas() {
      return t;
    },
    isSupported() {
      return W();
    },
    getViewport() {
      return { ...x };
    }
  };
}
function Td(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Lv() {
  const e = /* @__PURE__ */ new Map();
  function t(c) {
    return c != null ? String(c) : "default";
  }
  function n(c, f, m) {
    const b = t(c);
    let v = e.get(b) || null;
    if (!v) {
      const I = document.createElement("canvas"), x = I.getContext("2d");
      if (!x) return null;
      v = {
        id: b,
        canvas: I,
        ctx: x,
        width: 0,
        height: 0
      }, e.set(b, v);
    }
    const _ = Td(f), S = Td(m);
    return v.width !== _ && (v.canvas.width = _, v.width = _), v.height !== S && (v.canvas.height = S, v.height = S), v;
  }
  function i(c) {
    return e.get(t(c)) || null;
  }
  function a(c) {
    const f = i(c);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
  }
  function l() {
    e.clear();
  }
  return {
    ensureTarget: n,
    getTarget: i,
    clearTarget: a,
    dispose: l
  };
}
const zv = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), $v = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Om(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Vv(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function jv(e = {}) {
  const t = $v.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Om(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Hv(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!zv.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Om(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: Vv(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Uv(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => Hv(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const l = Number((i == null ? void 0 : i.zIndex) || 0), c = Number((a == null ? void 0 : a.zIndex) || 0);
      return l !== c ? l - c : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function ua(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: jv((e == null ? void 0 : e.background) || {}),
    objectPass: Uv((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function Gv(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function oc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? Gv(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Bv(e, t, n = {}) {
  return e ? oc({
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
function Kv(e, t, n = {}) {
  return e ? oc({
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
function Wv(e, t, n = {}) {
  return e ? oc({
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
function Fm(e = {}) {
  const t = [], n = Bv(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = Kv(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((l, c) => {
    const f = Wv(
      (l == null ? void 0 : l.source) || null,
      (l == null ? void 0 : l.revision) || "",
      {
        id: String((l == null ? void 0 : l.id) || `raster_layer_${c}`),
        zIndex: Number((l == null ? void 0 : l.zIndex) ?? (l == null ? void 0 : l.z_index) ?? 90),
        opacity: Number((l == null ? void 0 : l.opacity) ?? 1),
        visible: (l == null ? void 0 : l.visible) !== !1,
        transform: (l == null ? void 0 : l.transform) || null,
        params: (l == null ? void 0 : l.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((l, c) => {
    const f = Number((l == null ? void 0 : l.zIndex) || 0), m = Number((c == null ? void 0 : c.zIndex) || 0);
    return f !== m ? f - m : String((l == null ? void 0 : l.id) || "").localeCompare(String((c == null ? void 0 : c.id) || ""));
  });
}
function sc(e, t) {
  const n = new Map(
    (Array.isArray(t) ? t : []).map((i) => [String((i == null ? void 0 : i.assetId) || ""), i]).filter(([i, a]) => i && (a == null ? void 0 : a.source))
  );
  return Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers.map((i) => {
    const a = n.get(String((i == null ? void 0 : i.assetId) || ""));
    return a ? {
      id: String((i == null ? void 0 : i.id) || ""),
      type: "sticker",
      source: a.source,
      revision: a.revision,
      zIndex: Number((i == null ? void 0 : i.zIndex) || 0),
      opacity: Number((i == null ? void 0 : i.opacity) ?? 1),
      visible: (i == null ? void 0 : i.visible) !== !1,
      transform: {
        yawDeg: Number((i == null ? void 0 : i.yawDeg) || 0),
        pitchDeg: Number((i == null ? void 0 : i.pitchDeg) || 0),
        rollDeg: Number((i == null ? void 0 : i.rollDeg) || 0),
        hFovDeg: Number((i == null ? void 0 : i.hFovDeg) || 30),
        vFovDeg: Number((i == null ? void 0 : i.vFovDeg) || 30)
      },
      params: {
        assetId: String((i == null ? void 0 : i.assetId) || ""),
        crop: (i == null ? void 0 : i.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
      }
    } : null;
  }).filter(Boolean) : [];
}
function Ks(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, l = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], c = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return ua({
    stateRevision: i,
    background: {
      type: "erp_image",
      source: t,
      revision: c,
      coverageDeg: n,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: sc(a, l)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Oa(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = sc(t, n), a = Fm({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return ua({
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
      objects: [...i, ...a]
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Yv(e = {}) {
  var l, c, f, m, b, v, _, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const I = ua(e), x = Array.isArray((l = I.objectPass) == null ? void 0 : l.objects) ? I.objectPass.objects : [], L = {
      stickers: x.filter(($) => $.type === "sticker").map(($) => {
        var E, D, H, Z, X, W, A, Q, ae, fe, me, ee, ue;
        return {
          id: $.id,
          assetId: String(((E = $ == null ? void 0 : $.params) == null ? void 0 : E.assetId) || ((D = $ == null ? void 0 : $.params) == null ? void 0 : D.asset_id) || ($ == null ? void 0 : $.id) || ""),
          yawDeg: Number(((H = $ == null ? void 0 : $.transform) == null ? void 0 : H.yawDeg) ?? ((Z = $ == null ? void 0 : $.params) == null ? void 0 : Z.yawDeg) ?? 0),
          pitchDeg: Number(((X = $ == null ? void 0 : $.transform) == null ? void 0 : X.pitchDeg) ?? ((W = $ == null ? void 0 : $.params) == null ? void 0 : W.pitchDeg) ?? 0),
          rollDeg: Number(((A = $ == null ? void 0 : $.transform) == null ? void 0 : A.rollDeg) ?? ((Q = $ == null ? void 0 : $.params) == null ? void 0 : Q.rollDeg) ?? 0),
          hFovDeg: Number(((ae = $ == null ? void 0 : $.transform) == null ? void 0 : ae.hFovDeg) ?? ((fe = $ == null ? void 0 : $.params) == null ? void 0 : fe.hFovDeg) ?? 30),
          vFovDeg: Number(((me = $ == null ? void 0 : $.transform) == null ? void 0 : me.vFovDeg) ?? ((ee = $ == null ? void 0 : $.params) == null ? void 0 : ee.vFovDeg) ?? 30),
          crop: ((ue = $ == null ? void 0 : $.params) == null ? void 0 : ue.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number(($ == null ? void 0 : $.opacity) ?? 1),
          visible: ($ == null ? void 0 : $.visible) !== !1,
          zIndex: Number(($ == null ? void 0 : $.zIndex) ?? 0)
        };
      }),
      selectedId: ((c = I.objectPass) == null ? void 0 : c.selectedId) ?? null,
      hoveredId: ((f = I.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, O = x.filter(($) => $.type === "sticker").map(($) => {
      var E, D;
      return {
        assetId: String(((E = $ == null ? void 0 : $.params) == null ? void 0 : E.assetId) || ((D = $ == null ? void 0 : $.params) == null ? void 0 : D.asset_id) || ($ == null ? void 0 : $.id) || ""),
        source: $.source || null,
        revision: String(($ == null ? void 0 : $.revision) || "")
      };
    }).filter(($) => $.assetId && $.source), z = x.find(($) => $.type === "paint") || null, P = x.find(($) => $.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((m = I.background) == null ? void 0 : m.source) || null,
      backgroundRevision: String(((b = I.background) == null ? void 0 : b.revision) || ""),
      coverageDeg: Number(((v = I.background) == null ? void 0 : v.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (z == null ? void 0 : z.source) || null,
      paintRevision: String((z == null ? void 0 : z.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: O,
      scene: L,
      objectPass: I.objectPass,
      backgroundOpacity: Number(((_ = I.background) == null ? void 0 : _.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = ua({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...sc(t, n),
        ...Fm({
          paintSource: e.paintSource || i.paintSource || null,
          paintRevision: e.paintRevision || i.paintRevision || "",
          paintOptions: e.paintOptions || null,
          maskSource: e.maskSource || i.maskSource || null,
          maskRevision: e.maskRevision || i.maskRevision || "",
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
    paintSource: i.paintSource || null,
    paintRevision: String(i.paintRevision || ""),
    maskSource: i.maskSource || null,
    maskRevision: String(i.maskRevision || ""),
    textures: n,
    scene: t,
    objectPass: a,
    backgroundOpacity: Number(e.backgroundOpacity ?? 1),
    showMaskTint: e.showMaskTint === !0
  };
}
function qv(e) {
  let t = null;
  function n(l = {}) {
    const c = Yv(l);
    return e.syncState({
      stateRevision: c.stateRevision,
      backgroundSource: c.backgroundSource,
      backgroundRevision: c.backgroundRevision,
      coverageDeg: c.coverageDeg,
      paintSource: c.paintSource,
      paintRevision: c.paintRevision,
      maskSource: c.maskSource,
      maskRevision: c.maskRevision,
      textures: c.textures,
      scene: c.scene,
      objectPass: c.objectPass,
      backgroundOpacity: c.backgroundOpacity,
      showMaskTint: c.showMaskTint
    }) ? (t = c, !0) : !1;
  }
  function i() {
    return t;
  }
  function a() {
    t = null;
  }
  return {
    sync: n,
    snapshot: i,
    clear: a
  };
}
function bi(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (O) => Rv(O), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Lv(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (O) => qv(O), a = t(e), l = (e == null ? void 0 : e.targetCanvas) || null, c = n();
  let f = null;
  const m = i({
    syncState(O = {}) {
      if (typeof a.syncState == "function") {
        const z = { ...O }, P = a.syncState(z);
        return P && (f = z, P);
      }
      return f = { ...O }, !0;
    }
  });
  function b(O = {}) {
    return m.sync(O);
  }
  function v(O = {}, z = {}) {
    return f ? a.renderScene({
      ...f,
      view: O,
      width: z.width,
      height: z.height,
      dpr: z.dpr,
      backgroundOpacity: z.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: z.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function _(O, z, P = {}, $ = {}) {
    if (!z) return !1;
    const E = Math.min(1, Math.max(0.1, Number($.renderScale ?? 1))), D = v(P, {
      ...$,
      width: Math.max(1, Math.round(z.w * E)),
      height: Math.max(1, Math.round(z.h * E))
    });
    return D ? O ? (O.canvas && D === O.canvas || O.drawImage(D, z.x, z.y, z.w, z.h), !0) : !!l && D === l : !1;
  }
  function S(O, z = {}, P = {}) {
    const $ = Number(P.width || 0), E = Number(P.height || 0);
    if (!($ > 0) || !(E > 0)) return null;
    const D = c.ensureTarget(O, $, E);
    if (!D) return null;
    const H = v(z, {
      ...P,
      width: $,
      height: E
    });
    return H ? (D.ctx.clearRect(0, 0, D.canvas.width, D.canvas.height), D.ctx.drawImage(H, 0, 0, D.canvas.width, D.canvas.height), D.canvas) : null;
  }
  function I(O) {
    c.clearTarget(O);
  }
  function x() {
    var O;
    c.dispose(), (O = a.dispose) == null || O.call(a), f = null;
  }
  function L() {
    f = null, m.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: b,
    renderView: v,
    renderToContext: _,
    renderToTarget: S,
    clearTarget: I,
    snapshotState: m.snapshot,
    clearState: L,
    dispose: x
  };
}
function Ki(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function Xv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Id(e, t = 8) {
  var v;
  const n = (v = e == null ? void 0 : e.getContext) == null ? void 0 : v.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const l = n.getImageData(0, 0, i, a).data;
  let c = i, f = a, m = -1, b = -1;
  for (let _ = 0; _ < a; _ += 1)
    for (let S = 0; S < i; S += 1)
      l[(_ * i + S) * 4 + 3] <= t || (S < c && (c = S), _ < f && (f = _), S > m && (m = S), _ > b && (b = _));
  return m < c || b < f ? null : {
    minX: c,
    minY: f,
    maxX: m,
    maxY: b,
    width: m - c + 1,
    height: b - f + 1,
    aspect: Number(((m - c + 1) / Math.max(1, b - f + 1)).toFixed(4))
  };
}
function lc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function br(e, t, n) {
  if (!e) return Ki(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function St(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Xl = null, Jl = null, Ed = null, Dd = null, Ct = null, Aa = null, ln = null, Fr = null;
function Jv() {
  if (Jl) return Jl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), Jl = n, n;
}
function Zl(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  Xl = br(Xl, n, i);
  const a = Xl;
  St(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Dd !== a.ctx && (Ed = a.ctx.createPattern(Jv(), "repeat"), Dd = a.ctx), a.ctx.fillStyle = Ed, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function Zv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Qv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function e1(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function t1(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Nt = /* @__PURE__ */ new Map(), uc = 128;
function n1(e, t, n, i, a, l) {
  const c = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), m = `${c}:${f.toFixed(2)}:${n}:${i}:${a}:${l.toFixed(3)}`;
  if (Nt.has(m)) {
    const P = Nt.get(m);
    return Nt.delete(m), Nt.set(m, P), P;
  }
  Nt.size >= uc && Nt.delete(Nt.keys().next().value);
  const b = c * 2 + 2, v = c + 1, _ = lc(b, b), S = _.getContext("2d"), I = f * c, x = c + 1, L = `rgba(${n},${i},${a},${l})`, O = `rgba(${n},${i},${a},0)`, z = S.createRadialGradient(v, v, I, v, v, x);
  return z.addColorStop(0, L), z.addColorStop(1, O), S.fillStyle = z, S.fillRect(0, 0, b, b), Nt.set(m, _), _;
}
function r1(e, t, n, i, a, l, c) {
  const { r: f, g: m, b, a: v } = i, _ = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), I = Math.max(0, a), x = Math.max(0, Math.min(0.99, l)), L = Math.max(0, Math.min(1, c ?? 0)), O = `chisel:${_}:${S}:${n.toFixed(2)}:${f}:${m}:${b}:${v.toFixed(3)}:${I.toFixed(2)}:${x.toFixed(2)}:${L.toFixed(2)}`;
  if (Nt.has(O)) {
    const X = Nt.get(O);
    return Nt.delete(O), Nt.set(O, X), X;
  }
  Nt.size >= uc && Nt.delete(Nt.keys().next().value);
  const z = lc(_, S), P = z.getContext("2d"), $ = P.createImageData(_, S), E = $.data, D = Math.max(0, e - t), H = Math.max(0, Math.min(1, n)), Z = 1 + I;
  for (let X = 0; X < S; X++)
    for (let W = 0; W < _; W++) {
      const A = W + 0.5 - e, Q = X + 0.5 - t, ae = Math.max(Math.abs(A) - D, 0), me = Math.hypot(ae, Q) / t;
      if (me >= 1) continue;
      const ee = me <= H ? 1 : Math.max(0, (1 - me) / Math.max(1e-4, 1 - H)), ue = 1 - me, k = 1 + I * (1 - ue) * (1 - ue), de = 1 - x * ue * ue, Se = k * de / Z;
      let ke = 1;
      if (L > 0) {
        const Je = Math.floor((Q + t) / 1.5), nt = Math.floor((A + e) / 8), gt = li(ta(Je * 41 + 500, nt * 19 + 300));
        ke = 1 - L * 0.42 * gt;
      }
      const B = Math.round(255 * Math.min(1, v * ee * Se * ke));
      if (B <= 0) continue;
      const Re = (X * _ + W) * 4;
      E[Re] = f, E[Re + 1] = m, E[Re + 2] = b, E[Re + 3] = B;
    }
  return P.putImageData($, 0, 0), Nt.set(O, z), z;
}
function ta(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function li(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function i1(e, t, n, i, a, l, c) {
  const f = e + 0.5 - n, m = t + 0.5 - i, b = Math.max(0, n - i), v = Math.max(Math.abs(f) - b, 0), _ = Math.hypot(v, m) / i;
  if (_ >= 1) return 0;
  const S = li(ta(e * 17 + 3, t * 13 + 7)), I = _ + l * 0.22 * (S - 0.5);
  if (I >= 1) return 0;
  const x = I <= a ? 1 : Math.max(0, (1 - I) / Math.max(1e-4, 1 - a)), L = a1(e, t, f, m, n, i), O = l * 0.55;
  if (L < O) return 0;
  const P = 0.45 + 0.55 * ((L - O) / Math.max(1e-4, 1 - O));
  return Math.round(255 * Math.min(1, c * x * P));
}
function a1(e, t, n, i, a, l) {
  const c = Math.floor((n + a) / 3), f = Math.floor((i + l) / 2), m = li(ta(c * 13 + 700, f * 17 + 400)), b = Math.floor((n + a) / 1.5), v = Math.floor((i + l) / 1.5), _ = li(ta(b * 23 + 800, v * 29 + 500)), S = li(ta(e * 3 + 100, t * 5 + 200));
  return m * 0.55 + _ * 0.3 + S * 0.15;
}
function o1(e, t, n, i, a) {
  const { r: l, g: c, b: f, a: m } = i, b = Math.max(2, Math.ceil(e) * 2), v = Math.max(2, Math.ceil(t) * 2), _ = Math.max(0, Math.min(1, a)), S = `crayon:${b}:${v}:${n.toFixed(2)}:${l}:${c}:${f}:${m.toFixed(3)}:${_.toFixed(2)}`;
  if (Nt.has(S)) {
    const P = Nt.get(S);
    return Nt.delete(S), Nt.set(S, P), P;
  }
  Nt.size >= uc && Nt.delete(Nt.keys().next().value);
  const I = lc(b, v), x = I.getContext("2d"), L = x.createImageData(b, v), O = L.data, z = Math.max(0, Math.min(1, n));
  for (let P = 0; P < v; P++)
    for (let $ = 0; $ < b; $++) {
      const E = i1($, P, e, t, z, _, m);
      if (E <= 0) continue;
      const D = (P * b + $) * 4;
      O[D] = l, O[D + 1] = c, O[D + 2] = f, O[D + 3] = E;
    }
  return x.putImageData(L, 0, 0), Nt.set(S, I), I;
}
function Rm(e, t, n) {
  var L, O;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = e1(t, n), l = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = s1(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), m = Number(((L = t == null ? void 0 : t.angle) == null ? void 0 : L.value) ?? 0), b = t1(t, a), v = String(((O = t == null ? void 0 : t.targetSpace) == null ? void 0 : O.viewMode) || ""), _ = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && v !== "unwrap", S = t == null ? void 0 : t.scatter, I = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let x;
  if (i === "chisel") {
    const z = a * f, P = a, $ = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), E = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), D = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    x = r1(z, P, l, c, $, E, D);
  } else if (i === "crayon") {
    const z = a * f, P = a, $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    x = o1(z, P, l, c, $);
  } else
    x = n1(a, l, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: x, radiusPx: a, spacingPx: b, desc: n, aspect: f, angle: m, stampKind: i, scatter: I, latitudeCorrection: _ };
}
function s1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), l = Math.max(0, Math.min(1, Number(i.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(i.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(i.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(i.b || 0))) * 255),
    a: l
  };
}
function l1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function Od(e, t, n, i, a) {
  const l = e.angle, c = e.desc.width;
  function f(b, v) {
    l === 0 ? e.ctx.drawImage(e.stampTex, b - a, v - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(b, v), e.ctx.rotate(l), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  f(t, n);
  const m = l === 0 ? a : a * Math.abs(Math.cos(l)) + i * Math.abs(Math.sin(l));
  t - m < 0 && f(t + c, n), t + m > c && f(t - c, n);
}
function cc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: b, count: v } = e.scatter, _ = b * e.radiusPx * a, S = ta(t, n);
    for (let I = 0; I < v; I++) {
      const x = li(S + I * 2) * Math.PI * 2, L = Math.sqrt(li(S + I * 2 + 1)) * _, O = t + Math.cos(x) * L, z = n + Math.sin(x) * L, P = Math.max(0.5, e.radiusPx * a * 0.48), $ = (0.5 - z / Math.max(1, e.desc.height)) * Math.PI, E = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos($)) : 1, D = P * e.aspect * E;
      Od(e, O, z, P, D);
    }
    return;
  }
  const l = Math.max(0.5, e.radiusPx * a), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, m = l * e.aspect * f;
  Od(e, t, n, l, m);
}
function Fd(e, t, n) {
  const i = Qv(t);
  if (!e || i.length === 0) return;
  const a = n.width, l = n.height, c = Rm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < i.length; S++) {
    let I = Number(i[S].u || 0) * a;
    const x = Number(i[S].v || 0) * l;
    S > 0 && Math.abs(I - f[S - 1].x) > a * 0.5 && (I += I < f[S - 1].x ? a : -a), f.push({ x: I, y: x });
  }
  if (cc(c, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let m = f[0], b = f[0], v = f[0], _ = 0;
  for (let S = 1; S < f.length; S++) {
    const I = f[S], x = { x: (b.x + I.x) * 0.5, y: (b.y + I.y) * 0.5 };
    S === 1 ? _ = Ja(c, v.x, v.y, x.x, x.y, _) : _ = ws(c, m, v, x, I, _), m = b, b = I, v = x;
  }
  f.length === 2 ? Ja(c, v.x, v.y, b.x, b.y, _) : ws(c, m, v, b, b, _), e.restore();
}
function ss(e, t, n) {
  var _;
  const i = Array.isArray((_ = t == null ? void 0 : t.geometry) == null ? void 0 : _.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, l = n.height, c = l1(t), f = [];
  let m = 1 / 0, b = -1 / 0;
  for (let S = 0; S < i.length; S++) {
    const I = Zv(i[S]);
    let x = Number(I.x || 0) * a;
    S > 0 && Math.abs(x - f[S - 1].x) > a * 0.5 && (x += x < f[S - 1].x ? a : -a), f.push({ x, y: Number(I.y || 0) * l }), x < m && (m = x), x > b && (b = x);
  }
  function v(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let I = 1; I < f.length; I++) e.lineTo(f[I].x + S, f[I].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, v(0), m < 0 && v(a), b > a && v(-a), e.restore();
}
function Do(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    ss(e, t, n);
    return;
  }
  const l = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  l >= 0.999 ? Fd(e, t, n) : (Aa = br(Aa, n.width, n.height), St(Aa), Fd(Aa.ctx, t, n), e.save(), e.globalAlpha = l, e.drawImage(Aa.canvas, 0, 0), e.restore());
}
function Zr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ja(e, t, n, i, a, l) {
  const c = i - t, f = a - n, m = Math.hypot(c, f);
  if (m < 1e-9) return l;
  let b = e.spacingPx - l;
  for (; b <= m; ) {
    const v = b / m;
    cc(e, t + c * v, n + f * v, 1), b += e.spacingPx;
  }
  return m - b + e.spacingPx;
}
function ws(e, t, n, i, a, l) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, m = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, v = 0, _ = f, S = _ + m, I = S + b, x = S - _, L = 16;
  let O = l, z = n.x, P = n.y;
  for (let $ = 1; $ <= L; $++) {
    const E = _ + x * $ / L, D = ((_ - E) * t.x + (E - v) * n.x) / (_ - v), H = ((_ - E) * t.y + (E - v) * n.y) / (_ - v), Z = ((S - E) * n.x + (E - _) * i.x) / (S - _), X = ((S - E) * n.y + (E - _) * i.y) / (S - _), W = ((I - E) * i.x + (E - S) * a.x) / (I - S), A = ((I - E) * i.y + (E - S) * a.y) / (I - S), Q = ((S - E) * D + (E - v) * Z) / (S - v), ae = ((S - E) * H + (E - v) * X) / (S - v), fe = ((I - E) * Z + (E - _) * W) / (I - _), me = ((I - E) * X + (E - _) * A) / (I - _), ee = ((S - E) * Q + (E - _) * fe) / (S - _), ue = ((S - E) * ae + (E - _) * me) / (S - _);
    O = Ja(e, z, P, ee, ue, O), z = ee, P = ue;
  }
  return O;
}
function u1(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const l = e.descriptor, c = l.width, f = n * l.height, m = e.activeStroke;
  let b = t * c;
  if (m && Math.abs(b - m.prev.x) > c * 0.5 && (b += b < m.prev.x ? c : -c), !m) {
    const I = Rm(a, i, l), x = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), L = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), O = String((i == null ? void 0 : i.toolKind) || "") === "eraser", z = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", cc(I, b, f, 1), e.activeStroke = {
      pprev: { x: b, y: f },
      prev: { x: b, y: f },
      lastMidX: b,
      lastMidY: f,
      stampTex: I.stampTex,
      radiusPx: I.radiusPx,
      spacingPx: I.spacingPx,
      aspect: I.aspect,
      angle: I.angle,
      stampKind: I.stampKind,
      scatter: I.scatter,
      latitudeCorrection: I.latitudeCorrection,
      strokeOpacity: x,
      velocityWidthFactor: L,
      distSinceStamp: 0,
      isEraser: O,
      layerKind: z,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const v = (m.prev.x + b) * 0.5, _ = (m.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const S = {
    ctx: a,
    stampTex: m.stampTex,
    radiusPx: m.radiusPx,
    spacingPx: m.spacingPx,
    desc: l,
    aspect: m.aspect,
    angle: m.angle,
    stampKind: m.stampKind,
    scatter: m.scatter,
    latitudeCorrection: m.latitudeCorrection
  };
  m.pointCount === 1 ? m.distSinceStamp = Ja(S, m.lastMidX, m.lastMidY, v, _, m.distSinceStamp) : m.distSinceStamp = ws(
    S,
    m.pprev,
    { x: m.lastMidX, y: m.lastMidY },
    { x: v, y: _ },
    { x: b, y: f },
    m.distSinceStamp
  ), m.pprev = m.prev, m.prev = { x: b, y: f }, m.lastMidX = v, m.lastMidY = _, m.pointCount++, e.displayDirty = !0;
}
function xu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), l = Ki(t, n), c = {
    descriptor: i,
    committedMask: Ki(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: Ki(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, m = Ki(t, n);
  let b = null, v = "", _ = null;
  function S(A) {
    return {
      actionGroupId: A,
      descriptor: i,
      committedPaint: Ki(t, n),
      currentStroke: l,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function I(A) {
    let Q = a.get(A);
    return Q || (Q = S(A), a.set(A, Q)), Q;
  }
  function x(A) {
    return v === "mask" ? c : b ? I(b) : f;
  }
  function L(A) {
    var ue;
    const Q = !_ || _.length !== A.length || A.some((k, de) => k !== _[de]), ae = v === "paint" && ((ue = b ? a.get(b) : f) == null ? void 0 : ue.activeStroke) || null;
    let fe = c.displayDirty || f.displayDirty || Q;
    for (const k of A) {
      const de = a.get(k);
      if (de != null && de.displayDirty) {
        fe = !0;
        break;
      }
    }
    if (ae && (fe = !0), !fe) return;
    c.displayDirty = !1, f.displayDirty = !1;
    for (const k of A) {
      const de = a.get(k);
      de && (de.displayDirty = !1);
    }
    _ = [...A];
    const me = m.ctx;
    St(m);
    const ee = !!(ae != null && ae.isEraser);
    for (const k of A) {
      const de = a.get(k);
      if (!de) continue;
      const ke = b === de.actionGroupId && v === "paint" ? de.activeStroke : null;
      if (ee)
        Ct = br(Ct, t, n), St(Ct), Ct.ctx.drawImage(de.committedPaint.canvas, 0, 0), Zr(Ct.ctx, l.canvas), me.drawImage(Ct.canvas, 0, 0);
      else if (me.drawImage(de.committedPaint.canvas, 0, 0), ke) {
        const B = de.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ke.strokeOpacity ?? 1));
        me.save(), me.globalAlpha = B, me.drawImage(l.canvas, 0, 0), me.restore();
      }
    }
  }
  function O(A) {
    var ae, fe, me, ee, ue;
    for (const k of a.values())
      St(k.committedPaint), St(k.currentStroke), k.activeStroke = null, k.displayDirty = !0;
    St(c.committedMask), St(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, f.displayDirty = !0, _ = null;
    const Q = [
      ...Array.isArray((fe = (ae = A == null ? void 0 : A.painting) == null ? void 0 : ae.paint) == null ? void 0 : fe.strokes) ? A.painting.paint.strokes : [],
      ...Array.isArray((ee = (me = A == null ? void 0 : A.painting) == null ? void 0 : me.mask) == null ? void 0 : ee.strokes) ? A.painting.mask.strokes : []
    ];
    for (const k of Q) {
      if (((ue = k == null ? void 0 : k.targetSpace) == null ? void 0 : ue.kind) !== "ERP_GLOBAL") continue;
      const de = String((k == null ? void 0 : k.layerKind) || "paint"), ke = String((k == null ? void 0 : k.toolKind) || "pen") === "eraser";
      if (de === "mask") {
        const B = c.descriptor;
        ke ? (Ct = br(Ct, B.width, B.height), St(Ct), Do(Ct.ctx, k, B), Zr(c.committedMask.ctx, Ct.canvas)) : Do(c.committedMask.ctx, k, B);
        continue;
      }
      if (ke) {
        Ct = br(Ct, i.width, i.height), St(Ct), Do(Ct.ctx, k, i);
        for (const B of a.values())
          Zr(B.committedPaint.ctx, Ct.canvas), B.displayDirty = !0;
      } else {
        const B = String((k == null ? void 0 : k.actionGroupId) || "__default__"), Re = I(B), Je = Re.descriptor;
        Do(Re.committedPaint.ctx, k, Je), Re.displayDirty = !0;
      }
    }
    L([...a.keys()]);
  }
  function z(A, Q) {
    v = String((A == null ? void 0 : A.layerKind) || "");
    const ae = String((A == null ? void 0 : A.toolKind) || "") === "eraser";
    if (v === "mask")
      b = null, St(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const fe = ae ? f : I(String((A == null ? void 0 : A.actionGroupId) || "__default__"));
      b = ae ? "" : String((A == null ? void 0 : A.actionGroupId) || "__default__"), St(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0;
    }
  }
  function P(A, Q) {
    var de;
    const ae = String((A == null ? void 0 : A.layerKind) || "paint"), fe = String((A == null ? void 0 : A.toolKind) || "") === "eraser", me = ae === "mask" ? c : fe ? f : I(String((A == null ? void 0 : A.actionGroupId) || b || "__default__")), ee = me.activeStroke, ue = me.descriptor;
    if (ee && ee.pointCount > 1) {
      const Se = me.currentStroke.ctx;
      Se.globalCompositeOperation = "source-over";
      const ke = {
        ctx: Se,
        stampTex: ee.stampTex,
        radiusPx: ee.radiusPx,
        spacingPx: ee.spacingPx,
        desc: ue,
        aspect: ee.aspect,
        angle: ee.angle,
        stampKind: ee.stampKind,
        scatter: ee.scatter,
        latitudeCorrection: ee.latitudeCorrection
      };
      ee.pointCount === 2 ? Ja(ke, ee.lastMidX, ee.lastMidY, ee.prev.x, ee.prev.y, ee.distSinceStamp) : ws(ke, ee.pprev, { x: ee.lastMidX, y: ee.lastMidY }, ee.prev, ee.prev, ee.distSinceStamp);
    }
    me.lassoPreviewActive && (St(me.currentStroke), ss(me.currentStroke.ctx, A, ue), me.lassoPreviewActive = !1);
    const k = ae === "mask" ? c.committedMask : me.committedPaint;
    if (fe && ae === "paint")
      for (const Se of a.values())
        Zr(Se.committedPaint.ctx, me.currentStroke.canvas), Se.displayDirty = !0;
    else if (fe)
      Zr(k.ctx, me.currentStroke.canvas);
    else {
      const Se = Math.max(0, Math.min(1, (ee == null ? void 0 : ee.strokeOpacity) ?? 1));
      k.ctx.save(), k.ctx.globalAlpha = Se, k.ctx.drawImage(me.currentStroke.canvas, 0, 0), k.ctx.restore();
    }
    Xv() && (String((A == null ? void 0 : A.toolKind) || ""), String((ue == null ? void 0 : ue.kind) || ""), Number((ue == null ? void 0 : ue.width) || 0), Number((ue == null ? void 0 : ue.height) || 0), String(((de = A == null ? void 0 : A.targetSpace) == null ? void 0 : de.viewMode) || ""), Number((A == null ? void 0 : A.aspect) ?? 1), Id(me.currentStroke.canvas), Id(k.canvas), void 0), St(me.currentStroke), me.activeStroke = null, me.displayDirty = !0, b = null, v = "", L([...a.keys()]);
  }
  function $(A) {
    if (v === "mask")
      St(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (v === "paint" && !b)
      St(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (b) {
      const Q = a.get(b);
      Q && (St(Q.currentStroke), Q.activeStroke = null, Q.lassoPreviewActive = !1, Q.displayDirty = !0);
    }
    b = null, v = "", L([...a.keys()]);
  }
  function E(A, Q) {
    var fe;
    if (v = String((A == null ? void 0 : A.layerKind) || ""), String(((fe = A == null ? void 0 : A.geometry) == null ? void 0 : fe.geometryKind) || "") === "lasso_fill") {
      if (v === "mask")
        St(c.currentStroke), ss(c.currentStroke.ctx, A, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const me = String((A == null ? void 0 : A.toolKind) || "") === "eraser", ee = me ? f : I(String((A == null ? void 0 : A.actionGroupId) || b || "__default__"));
        b = me ? "" : String((A == null ? void 0 : A.actionGroupId) || b || "__default__"), St(ee.currentStroke), ss(ee.currentStroke.ctx, A, ee.descriptor), ee.lassoPreviewActive = !0, ee.displayDirty = !0;
      }
      L([...a.keys()]);
    }
  }
  function D(A) {
    return L(A ?? [...a.keys()]), {
      displayPaint: m,
      committedMask: c.committedMask,
      descriptor: i
    };
  }
  function H(A) {
    return a.get(String(A)) ?? null;
  }
  function Z() {
    return [...a.keys()];
  }
  function X(A) {
    var ue;
    const Q = a.get(String(A));
    if (!Q) return null;
    const ae = v === "paint" && b === Q.actionGroupId, fe = v === "paint" && ((ue = b ? a.get(b) : f) == null ? void 0 : ue.activeStroke) || null;
    if (fe != null && fe.isEraser)
      return ln = br(ln, t, n), St(ln), ln.ctx.drawImage(Q.committedPaint.canvas, 0, 0), Zr(ln.ctx, l.canvas), ln.canvas;
    const me = ae ? Q.activeStroke : null;
    if (!me) return Q.committedPaint.canvas;
    ln = br(ln, t, n), St(ln), ln.ctx.drawImage(Q.committedPaint.canvas, 0, 0);
    const ee = Q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, me.strokeOpacity ?? 1));
    return ln.ctx.save(), ln.ctx.globalAlpha = ee, ln.ctx.drawImage(l.canvas, 0, 0), ln.ctx.restore(), ln.canvas;
  }
  function W() {
    return Fr = br(Fr, t, n), St(Fr), Zl(Fr.ctx, c.committedMask.canvas), v === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (Ct = br(Ct, t, n), St(Ct), Ct.ctx.drawImage(c.committedMask.canvas, 0, 0), Zr(Ct.ctx, l.canvas), St(Fr), Zl(Fr.ctx, Ct.canvas)) : Zl(Fr.ctx, l.canvas)), Fr.canvas;
  }
  return {
    rebuildCommitted: O,
    beginStroke: z,
    appendStrokePoint: u1,
    updateActiveStroke: E,
    commitActiveStroke: P,
    cancelActiveStroke: $,
    getErpTarget: D,
    ensureTarget: x,
    getGroupTarget: H,
    getGroupDisplayCanvas: X,
    getMaskDisplayCanvas: W,
    getAllGroupIds: Z
  };
}
function q(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ql(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function Ut(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function c1(e, t) {
  let n = Ut(t) - Ut(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const wu = 3;
function Ca(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function fc(e, t = 0) {
  const n = Ca(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const i = Ca(e == null ? void 0 : e.wheelDeltaY);
  if (i != null) return Math.sign(-i);
  const a = Ca(e == null ? void 0 : e.wheelDelta);
  if (a != null) return Math.sign(-a);
  const l = Ca(e == null ? void 0 : e.detail);
  return l != null ? Math.sign(l) : Math.sign(Ca(t) || 0);
}
function Lm(e) {
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
const Rd = Math.PI / 180, Ld = 0.12, f1 = wu, d1 = 35, h1 = 140, Fa = 100, m1 = 20, zd = 0.8;
function p1(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), l = q(Number(e || Fa), 1, 179) * Rd;
  return 2 * Math.atan(Math.tan(l * 0.5) * (a / i)) / Rd;
}
function Ws(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Fa })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), l = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, m = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(z, P = null) {
    f && f(z, P);
  }
  function v(z, P, $ = null, E = performance.now()) {
    return m.drag.active = !0, m.drag.lastX = Number(z || 0), m.drag.lastY = Number(P || 0), m.drag.lastTs = Number(E || performance.now()), m.drag.pointerId = $, m.inertia.active = !1, m.inertia.vx = 0, m.inertia.vy = 0, m.inertia.lastTs = m.drag.lastTs, m.velHistory = [], b("drag", { phase: "start", x: m.drag.lastX, y: m.drag.lastY, pointerId: $ }), !0;
  }
  function _(z, P, $ = "pano", E = performance.now()) {
    if (!m.drag.active) return !1;
    const D = Number(E || performance.now()), H = Number(z), Z = Number(P), X = H - m.drag.lastX, W = Z - m.drag.lastY;
    m.drag.lastX = H, m.drag.lastY = Z, m.drag.lastTs = D;
    const A = i() || { x: 1, y: 1 }, Q = Number(A.x || 1), ae = Number(A.y || 1), fe = { ...t() };
    let me = 0, ee = 0;
    if ($ === "unwrap") {
      const k = a() || { w: 1, h: 1 }, de = Math.max(1, Number(k.w || 1)), Se = Math.max(1, Number(k.h || 1)), ke = X / de, B = W / Se;
      me = -ke * 360 * Q, ee = B * 180 * ae;
    } else {
      const k = l() || { w: 0, h: 0 }, de = Math.max(1, Number(k.w || 0)), Se = Math.max(1, Number(k.h || 0));
      if (de > 1 && Se > 1) {
        const ke = q(Number(fe.fov || Fa), 1, 179), B = q(p1(ke, de, Se), 0.1, 179);
        me = -(X / de) * ke * Q, ee = W / Se * B * ae;
      } else
        me = -X * Ld * Q, ee = W * Ld * ae;
    }
    fe.yaw = Ut(Number(fe.yaw || 0) + me), fe.pitch = q(Number(fe.pitch || 0) + ee, -89.9, 89.9), n(fe), m.velHistory.push({ ts: D, yaw: fe.yaw, pitch: fe.pitch });
    let ue = 0;
    for (; ue < m.velHistory.length - 1 && m.velHistory[ue].ts < D - 100; ) ue++;
    return ue > 0 && m.velHistory.splice(0, ue), m.inertia.active = !1, m.inertia.lastTs = D, c(), b("drag", { phase: "move", dx: X, dy: W, dYaw: me, dPitch: ee }), !0;
  }
  function S(z = performance.now()) {
    if (!m.drag.active) return !1;
    m.drag.active = !1;
    const P = Number(z || performance.now());
    m.drag.lastTs = P;
    const $ = m.velHistory.filter((D) => P - D.ts <= 80);
    if ($.length >= 2) {
      const D = $[0], H = $.at(-1), Z = Math.max(1e-3, (H.ts - D.ts) / 1e3);
      let X = H.yaw - D.yaw;
      X > 180 && (X -= 360), X < -180 && (X += 360), m.inertia.vx = X / Z, m.inertia.vy = (H.pitch - D.pitch) / Z;
    } else
      m.inertia.vx = 0, m.inertia.vy = 0;
    m.velHistory = [];
    const E = Math.hypot(m.inertia.vx, m.inertia.vy);
    return m.inertia.active = E > m1, m.inertia.lastTs = P, b("drag", { phase: "end", speed: E, inertiaActive: m.inertia.active }), !0;
  }
  function I(z = performance.now()) {
    if (!m.inertia.active) return !1;
    const P = Number(z || performance.now()), $ = Math.max(1e-3, (P - (m.inertia.lastTs || P)) / 1e3);
    m.inertia.lastTs = P;
    const E = { ...t() };
    E.yaw = Ut(Number(E.yaw || 0) + m.inertia.vx * $), E.pitch = q(Number(E.pitch || 0) + m.inertia.vy * $, -89.9, 89.9);
    const D = Math.exp(-5.5 * $);
    return m.inertia.vx *= D, m.inertia.vy *= D, Math.abs(m.inertia.vx) < zd && Math.abs(m.inertia.vy) < zd && (m.inertia.vx = 0, m.inertia.vy = 0, m.inertia.active = !1), n(E), c(), m.inertia.active;
  }
  function x(z) {
    const P = Math.sign(Number(z || 0));
    if (!P) return !1;
    const $ = { ...t() }, E = Number($.fov || Fa);
    return $.fov = q(E + P * f1, d1, h1), n($), c(), b("wheel", { deltaSign: P, fovBefore: E, fovAfter: $.fov }), !0;
  }
  function L(z, P = 0) {
    return x(fc(z, P));
  }
  function O() {
    n({ yaw: 0, pitch: 0, fov: Fa }), m.inertia.active = !1, m.inertia.vx = 0, m.inertia.vy = 0, c();
  }
  return {
    state: m,
    startDrag: v,
    moveDrag: _,
    endDrag: S,
    stepInertia: I,
    applyWheel: x,
    applyWheelEvent: L,
    resetView: O
  };
}
function Ss(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const $d = Math.PI / 180;
function Ta(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function g1(e) {
  const t = e || {}, n = Ta(t.yaw_deg, 0), i = Ta(t.pitch_deg, 0), a = Ta(t.roll_deg ?? t.rot_deg, 0), l = Ql(Ta(t.hFOV_deg, 90), 1, 179), c = Ql(Ta(t.vFOV_deg, 60), 1, 179), f = Math.tan(l * $d * 0.5) / Math.max(1e-6, Math.tan(c * $d * 0.5)), m = Ql(f, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: l,
    vfov: c,
    aspect: m
  };
}
const zm = 0.28;
function b1(e) {
  const t = e && typeof e == "object" ? e : {}, n = q(Number(t.x0 ?? 0), 0, 1), i = q(Number(t.y0 ?? 0), 0, 1), a = q(Number(t.x1 ?? 1), 0, 1), l = q(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, l),
    x1: Math.max(n, a),
    y1: Math.max(i, l)
  };
}
function y1(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), l = t.includeHidden === !0, c = e.visible === !1, f = l && i && c;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: q(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: q(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: b1(e.crop),
    opacity: f ? zm : q(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: i
  };
}
function Ys(e, t = {}) {
  var l;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((c) => y1(c, { includeHidden: i })).filter((c) => c && (i || c.visible !== !1)).sort((c, f) => Number(c.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((l = e == null ? void 0 : e.active) == null ? void 0 : l.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function $m(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || Ys(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, l = [], c = /* @__PURE__ */ new Set();
  return i.stickers.forEach((f) => {
    var x;
    const m = String((f == null ? void 0 : f.assetId) || "").trim(), b = m || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!b || c.has(b)) return;
    const v = m ? a[m] : null, _ = t(b, v, f);
    if (_ instanceof HTMLImageElement && !_.complete) return;
    const S = Number((_ == null ? void 0 : _.naturalWidth) || (_ == null ? void 0 : _.videoWidth) || (_ == null ? void 0 : _.width) || 0), I = Number((_ == null ? void 0 : _.naturalHeight) || (_ == null ? void 0 : _.videoHeight) || (_ == null ? void 0 : _.height) || 0);
    !_ || S <= 0 || I <= 0 || (c.add(b), l.push({
      assetId: b,
      source: _,
      revision: String(((x = n.revisionFor) == null ? void 0 : x.call(n, b, v, _)) ?? [
        b,
        Number(_.naturalWidth || _.videoWidth || _.width || 0),
        Number(_.naturalHeight || _.videoHeight || _.height || 0),
        String(_.currentSrc || _.src || "")
      ].join("|"))
    }));
  }), l;
}
function Ns(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: q(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function v1(e, t = 360) {
  return Ns(e, t);
}
function ir(e) {
  const t = g1(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const jn = Math.PI / 180, ca = 180 / Math.PI;
function fi(e, t, n) {
  return { x: e, y: t, z: n };
}
function Vd(e, t) {
  return fi(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Oo(e, t) {
  return fi(e.x * t, e.y * t, e.z * t);
}
function jd(e, t) {
  return fi(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Fo(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return fi(e.x / t, e.y / t, e.z / t);
}
function _1(e, t) {
  const n = e * jn, i = t * jn, a = Math.cos(i);
  return fi(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function x1(e, t, n = 0) {
  const i = _1(e, t), a = fi(0, 1, 0);
  let l = jd(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = fi(1, 0, 0)), l = Fo(l);
  const c = Fo(jd(i, l)), f = n * jn, m = Math.cos(f), b = Math.sin(f), v = Vd(Oo(l, m), Oo(c, b)), _ = Vd(Oo(l, -b), Oo(c, m));
  return { fwd: i, right: Fo(v), up: Fo(_) };
}
const Ar = 1, Cr = 179, Su = 85;
function Vm(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function jm(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Hm(e, t, { shiftKey: n = !1 } = {}) {
  let i = Qe(e, 0) + Qe(t, 0) * ca;
  return n && (i = Math.round(i / 15) * 15), Vm(i);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function ao(e = {}) {
  const t = q(Qe(e.hFOV_deg, 90), Ar, Cr), n = q(Qe(e.vFOV_deg, 60), Ar, Cr), i = Math.tan(t * jn * 0.5), a = Math.tan(n * jn * 0.5);
  return {
    yawDeg: Qe(e.yaw_deg, 0),
    pitchDeg: Qe(e.pitch_deg, 0),
    rollDeg: Qe(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: i,
    tanHalfY: a,
    aspect: i / Math.max(1e-12, a)
  };
}
function na(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = ao(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    i / (2 * a.tanHalfY)
  ));
}
function dc(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, Qe(t, 1)), l = Math.min(n, i * a);
  return { width: l, height: l / a };
}
function Um(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), i = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), l = q(2 * Math.atan(i / (2 * n)) * ca, Ar, Cr), c = q(2 * Math.atan(a / (2 * n)) * ca, Ar, Cr);
  return { hFOV_deg: l, vFOV_deg: c };
}
function w1(e, t, n) {
  const i = Qe(e == null ? void 0 : e.x, 0), a = Qe(e == null ? void 0 : e.y, 0), l = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = ao(t), m = Math.max(1e-12, Qe(n, 1)), b = 2 * m * f.tanHalfX, v = 2 * m * f.tanHalfY;
  return {
    x: i + (l - b) * 0.5,
    y: a + (c - v) * 0.5,
    w: b,
    h: v,
    focalPx: m
  };
}
function Nu(e, t, n = Su) {
  const i = Math.max(1e-12, Qe(t, 1)), a = q(Qe(n, Su), 1, 89.999), l = i * Math.tan(a * jn), c = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, l),
    halfH: Math.min(f * 0.5, l)
  };
}
function ls(e, t) {
  const n = q(Qe(e, 60), Ar, Cr), i = Math.max(1e-6, Qe(t, 1));
  return q(
    2 * Math.atan(Math.tan(n * jn * 0.5) * i) * ca,
    Ar,
    Cr
  );
}
function Hd(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function S1(e, t) {
  const n = Hd(e, 1), i = Hd(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, l = Math.max(1, Math.round(n * a)), c = Math.max(1, Math.round(i * a)), f = (b, v) => v ? f(v, b % v) : b, m = f(l, c) || 1;
  return `${Math.max(1, Math.round(l / m))}:${Math.max(1, Math.round(c / m))}`;
}
function ra(e) {
  const t = q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * jn, n = q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * jn;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function ri(e) {
  const t = ra(e), i = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, a]) => Math.abs(t - a) <= 0.015);
  return (i == null ? void 0 : i[0]) || S1(t, 1);
}
function Gm(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = ri(t), t;
}
function Bm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  viewFovDeg: i = 100
} = {}) {
  const a = q(Math.min(42, Qe(i, 100) * 0.42), 8, 96);
  return Gm({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: q(Qe(n, 0), -89.9, 89.9),
    roll_deg: 0,
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function yr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : ri(e);
}
function Km(e, t) {
  const n = ao(e), i = Qe(t, 1);
  if (!(i > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * i) * ca, l = 2 * Math.atan(n.tanHalfY * i) * ca;
  return a < Ar || a > Cr || l < Ar || l > Cr ? null : { hFOV_deg: a, vFOV_deg: l };
}
function Wm(e, t, n = wu) {
  const i = Math.sign(Qe(t, 0)), a = Math.abs(Qe(n, wu));
  if (!i || !(a > 0)) return null;
  const l = ao(e), c = l.hFovDeg + i * a;
  if (c < Ar || c > Cr) return null;
  const f = Math.tan(c * jn * 0.5);
  return Km(e, f / l.tanHalfX);
}
const Mu = Math.PI / 180, Xi = 180 / Math.PI, N1 = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), M1 = 260;
function Ud(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Ym(e, t) {
  return t ? Ym(t, e % t) : e;
}
function k1(e, t) {
  const i = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, a = i ? 1e3 : 1e6, l = i ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / l * a)), f = Math.max(1, Math.round(t / l * a)), m = Ym(c, f) || 1;
  return `${Math.round(c / m)}:${Math.round(f / m)}`;
}
function Za(e, t) {
  const n = Ud(e), i = Ud(t);
  if (n == null || i == null) return null;
  const a = n / i;
  return !Number.isFinite(a) || a <= 0 ? null : { width: n, height: i, ratio: a, label: k1(n, i) };
}
function ui(e) {
  var i;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((i = e == null ? void 0 : e.active) == null ? void 0 : i.selected_shot_id) || "");
  return t.find((a) => String((a == null ? void 0 : a.id) || "") === n) || t[0] || null;
}
function ku(e) {
  const t = ui(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), i = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? yr(t) : "",
    rollDeg: n,
    rollLabel: `${i.toFixed(1)}°`
  };
}
function P1(e, t, n = N1) {
  const i = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), l = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), m = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (O, z, P) => {
    const $ = O + z, E = Math.max(0, P - 1), D = $ > E && $ > 0 ? E / $ : 1;
    return [O * D, z * D];
  }, [v, _] = b(m, c, i), [S, I] = b(l, f, a), x = {
    x: v,
    y: S,
    w: Math.max(1, i - v - _),
    h: Math.max(1, a - S - I)
  }, L = dc(x, t);
  return {
    x: x.x + (x.w - L.width) * 0.5,
    y: x.y + (x.h - L.height) * 0.5,
    w: L.width,
    h: L.height,
    safeRect: x
  };
}
function A1(e, t, n) {
  const i = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), l = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = na(t, n), m = {
    width: Math.max(l, i - l) * 2,
    height: Math.max(c, a - c) * 2
  }, { halfW: b, halfH: v } = Nu(m, f), _ = {
    x: l - b,
    y: c - v,
    w: b * 2,
    h: v * 2
  }, S = _.x <= 0 && _.y <= 0 && _.x + _.w >= i && _.y + _.h >= a, I = i / a, x = Math.tan(Su * Mu), L = I >= 1 ? x : x * I, O = I >= 1 ? x / I : x;
  return {
    focalPx: f,
    rect: _,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / f) * Xi,
      vFOV_deg: 2 * Math.atan(v / f) * Xi
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: i, h: a },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(L) * Xi,
        vFOV_deg: 2 * Math.atan(O) * Xi
      }
    }
  };
}
function zi(e, t) {
  const n = ui(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const i = t(n);
  return !i || i === n ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((a) => a === n ? i : a)
    },
    changed: !0
  };
}
function C1(e, t, n) {
  const i = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), a = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(i) && i > 0 && Number.isFinite(a) && a > 0) {
    const c = na(n, e);
    return Um(dc(n, t), c);
  }
  const l = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: l, hFOV_deg: ls(l, t) };
}
function Gd(e, t, n, { preserveOrientation: i = !1, safeRect: a = null } = {}) {
  let l = Za(t, n);
  if (!l) return e;
  const c = ra(e) >= 1;
  i && l.ratio >= 1 !== c && (l = Za(l.height, l.width));
  const f = C1(e, l.ratio, a);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === l.label ? e : { ...e, ...f, aspect_id: l.label };
}
function Pu(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ui(e)) return { state: e, changed: !1 };
    const i = String(t.id || `frame_${Date.now().toString(36)}`), a = Bm({
      id: i,
      yawDeg: t.yawDeg,
      pitchDeg: t.pitchDeg,
      viewFovDeg: t.viewFovDeg
    });
    return {
      state: {
        ...e,
        shots: [a],
        active: { ...e.active || {}, selected_shot_id: i }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const i = ui(e);
    if (!i) return { state: e, changed: !1 };
    const a = (Array.isArray(e.shots) ? e.shots : []).filter((c) => c !== i), l = ((n = a[0]) == null ? void 0 : n.id) == null ? null : String(a[0].id);
    return {
      state: {
        ...e,
        shots: a,
        active: { ...e.active || {}, selected_shot_id: l }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return zi(e, (i) => Gd(
      i,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return zi(e, (i) => {
      const l = String(yr(i) || "").match(/^([0-9.]+):([0-9.]+)$/), c = l ? Za(l[1], l[2]) : Za(ra(i), 1);
      return c ? Gd(i, c.height, c.width, { safeRect: t.safeRect }) : i;
    });
  if (t.type === "set-roll") {
    const i = Number(t.value);
    return Number.isFinite(i) ? zi(e, (a) => {
      const l = Vm(i), c = Number(a.roll_deg ?? a.rot_deg ?? 0);
      if (Math.abs(c - l) <= 1e-12) return a;
      const f = { ...a, roll_deg: l };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? zi(e, (i) => {
    const a = Km(i, t.scale);
    return a ? { ...i, ...a } : i;
  }) : t.type === "step-fov" ? zi(e, (i) => {
    const a = Wm(i, t.direction);
    return a ? { ...i, ...a } : i;
  }) : t.type === "pan-camera" ? zi(e, (i) => {
    const a = Jm(t.startShot || i, t);
    return Math.abs(Number(a.yaw_deg) - Number(i.yaw_deg || 0)) > 1e-12 || Math.abs(Number(a.pitch_deg) - Number(i.pitch_deg || 0)) > 1e-12 ? { ...i, yaw_deg: a.yaw_deg, pitch_deg: a.pitch_deg } : i;
  }) : { state: e, changed: !1 };
}
function qm({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: i = !1,
  altKey: a = !1,
  allowAlt: l = !1,
  deadZoneRatio: c = 0.05
} = {}) {
  const f = l && a ? "alt" : i ? "shift" : "";
  if (!f || !e || !t) return null;
  const m = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, b = {
    x: m.x + m.w * 0.5,
    y: m.y + m.h * 0.5
  }, v = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (f === "shift" && v < Math.min(m.w, m.h) * c) return null;
  const _ = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: f,
    frame: m,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: _,
    accumulatedRad: 0
  };
}
function Xm(e, t, n = {}) {
  var c, f;
  if (!e || !t) return null;
  const i = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), a = Number(e.accumulatedRad || 0) + jm(i, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: i, accumulatedRad: a },
    rollDeg: Hm(e.startRollDeg, a, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Jm(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), i = t.invertX === !0 ? -1 : 1, a = t.invertY === !0 ? -1 : 1, l = Number(t.dx || 0) * i, c = Number(t.dy || 0) * a, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * Mu, m = Math.cos(f), b = Math.sin(f), v = l / n, _ = -c / n, S = v * m - _ * b, I = v * b + _ * m, x = Number(e.pitch_deg || 0) * Mu, L = Math.max(0.25, Math.abs(Math.cos(x)));
  return {
    ...e,
    yaw_deg: Ut(Number(e.yaw_deg || 0) - Math.atan(S) / L * Xi),
    pitch_deg: q(Number(e.pitch_deg || 0) - Math.atan(I) * Xi, -90, 90)
  };
}
function T1({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: i = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof n != "function")
    throw new TypeError("Cutout node surface requires readState and commitState.");
  let a = null, l = !1;
  const c = () => a || e(), f = () => i(ku(c()));
  return {
    model: () => ku(c()),
    refresh() {
      return f(), this.model();
    },
    beginGesture() {
      return a ? !1 : (a = e(), l = !1, f(), !0);
    },
    updateGesture(m) {
      a || this.beginGesture();
      const b = Pu(a, m);
      return b.changed ? (a = b.state, l = !0, t(a), f(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && l;
    },
    commitGesture() {
      if (!a) return !1;
      const m = l;
      return m && n(a), a = null, l = !1, t(null), f(), m;
    },
    cancelGesture() {
      return a ? (a = null, l = !1, t(null), f(), !0) : !1;
    },
    apply(m) {
      a && this.cancelGesture();
      const b = Pu(e(), m);
      return b.changed ? (n(b.state), f(), !0) : !1;
    },
    destroy() {
      a && (a = null, l = !1, t(null));
    }
  };
}
const De = Object.freeze({
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
}), I1 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, E1 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: I1(t[2])
})), D1 = {
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
}, Bd = Object.fromEntries(
  Object.entries(D1).map(([e, t]) => [e, {
    name: t.name,
    elements: E1(t.body)
  }])
), en = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = mt(() => {
      const i = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Bd, i) ? Bd[i] : null;
    });
    return (i, a) => n.value ? (Me(), Pe("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: st(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Me(!0), Pe(Ze, null, Ft(n.value.elements, (l, c) => (Me(), Pe(Ze, {
        key: `${n.value.name || e.icon || "icon"}-${l.tag}-${c}`
      }, [
        l.tag === "path" ? (Me(), Pe("path", zr({
          key: 0,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "circle" ? (Me(), Pe("circle", zr({
          key: 1,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "rect" ? (Me(), Pe("rect", zr({
          key: 2,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "line" ? (Me(), Pe("line", zr({
          key: 3,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polyline" ? (Me(), Pe("polyline", zr({
          key: 4,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polygon" ? (Me(), Pe("polygon", zr({
          key: 5,
          ref_for: !0
        }, l.attrs), null, 16)) : Dt("", !0)
      ], 64))), 128))
    ], 2)) : Dt("", !0);
  }
}, Mn = {
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
    const t = e, n = mt(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (Me(), gi(my(e.tag), zr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: tm(() => [
        Ve(en, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, O1 = ["aria-expanded", "disabled"], F1 = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, R1 = ["data-aspect", "disabled", "onClick"], L1 = { class: "pano-cutout-aspect-custom" }, z1 = ["disabled"], $1 = ["disabled"], V1 = ["disabled"], Zm = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, i = t, a = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), l = /* @__PURE__ */ yn("1"), c = /* @__PURE__ */ yn("1"), f = /* @__PURE__ */ yn(null), m = mt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = mt(() => {
      const L = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], O = String(n.model.aspectLabel || "");
      return L.length ? L.map((z) => {
        const P = typeof z == "string" ? z : String((z == null ? void 0 : z.value) || ""), $ = typeof z == "string" ? z : String((z == null ? void 0 : z.label) || P);
        return {
          ...typeof z == "object" && z ? z : {},
          value: P,
          label: $,
          active: O ? P === O : (z == null ? void 0 : z.active) === !0
        };
      }) : a.map((z) => ({
        ...z,
        active: z.value === O
      }));
    }), v = mt(() => {
      var O;
      const L = String(n.model.aspectLabel || "").trim();
      return L || String(((O = b.value.find((z) => z.active === !0)) == null ? void 0 : O.label) || "Aspect");
    });
    si(v, (L) => {
      const O = String(L || "").match(/^([0-9.]+):([0-9.]+)$/);
      O && (l.value = O[1], c.value = O[2]);
    }, { immediate: !0 });
    function _(L) {
      i("action", L);
    }
    function S(L) {
      var O;
      n.model.aspectOpen === !0 && ((O = f.value) != null && O.contains(L.target) || _({ type: "close-aspect" }));
    }
    tc(() => {
      document.addEventListener("pointerdown", S, !0);
    }), Hs(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function I(L) {
      const [O, z] = String(L.value || "").split(":");
      _({
        type: "set-aspect",
        width: O,
        height: z,
        preserveOrientation: !0
      });
    }
    function x() {
      _({
        type: "set-aspect",
        width: l.value,
        height: c.value,
        preserveOrientation: !1
      });
    }
    return (L, O) => (Me(), Pe("div", {
      ref_key: "rootElement",
      ref: f,
      class: st(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Me(), gi(Mn, {
        key: 0,
        icon: e.model.aspectIcon || Rt(De).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: m.value },
        onClick: O[0] || (O[0] = (z) => _({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Me(), Pe("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: m.value,
        onClick: O[1] || (O[1] = (z) => _({ type: "toggle-aspect" }))
      }, [
        Ve(en, {
          icon: e.model.aspectIcon || Rt(De).aspect
        }, null, 8, ["icon"]),
        ie("span", null, lt(v.value), 1),
        Ve(en, {
          icon: Rt(De).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, O1)),
      oi(ie("div", F1, [
        (Me(!0), Pe(Ze, null, Ft(b.value, (z) => (Me(), Pe("button", {
          key: z.value,
          class: st(["pano-btn pano-frame-aspect-choice", { active: z.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": z.value,
          disabled: m.value,
          onClick: (P) => I(z)
        }, lt(z.label), 11, R1))), 128)),
        ie("div", L1, [
          oi(ie("input", {
            "onUpdate:modelValue": O[2] || (O[2] = (z) => l.value = z),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: m.value
          }, null, 8, z1), [
            [Md, l.value]
          ]),
          O[4] || (O[4] = ie("span", { "aria-hidden": "true" }, ":", -1)),
          oi(ie("input", {
            "onUpdate:modelValue": O[3] || (O[3] = (z) => c.value = z),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: m.value
          }, null, 8, $1), [
            [Md, c.value]
          ]),
          ie("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            disabled: m.value,
            onClick: x
          }, "Apply", 8, V1)
        ])
      ], 512), [
        [io, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, j1 = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, H1 = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ yn(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (i, a) => (Me(), Pe("div", {
      class: st(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = Vr(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = Vr(() => {
      }, ["stop"]))
    }, [
      Ve(Mn, {
        icon: Rt(De).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: a[0] || (a[0] = Vr((l) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ie("div", j1, [
        a[3] || (a[3] = ie("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Me(!0), Pe(Ze, null, Ft(Rt(n), (l) => (Me(), Pe("div", {
          key: l[0],
          class: "pano-cutout-node-help-row"
        }, [
          ie("kbd", null, lt(l[0]), 1),
          ie("span", null, lt(l[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, U1 = { class: "pano-cutout-node-surface" }, G1 = ["title", "disabled"], B1 = { class: "value" }, K1 = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, W1 = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function n(i) {
      var a;
      (a = t.onAction) == null || a.call(t, i);
    }
    return (i, a) => (Me(), Pe("div", U1, [
      ie("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: a[4] || (a[4] = Vr(() => {
        }, ["stop"])),
        onWheel: a[5] || (a[5] = Vr(() => {
        }, ["stop"]))
      }, [
        ie("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ve(en, {
            icon: Rt(De).fullscreen
          }, null, 8, ["icon"]),
          a[6] || (a[6] = ie("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ve(Mn, {
          icon: e.model.hasShot ? Rt(De).delete : Rt(De).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: a[1] || (a[1] = (l) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ve(Zm, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        ie("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: a[2] || (a[2] = Vr((l) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ve(en, {
            icon: Rt(De).roll
          }, null, 8, ["icon"]),
          ie("span", B1, lt(e.model.rollLabel || "0.0°"), 1)
        ], 40, G1),
        Ve(Mn, {
          icon: Rt(De).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: a[3] || (a[3] = (l) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ve(H1)
      ], 32),
      e.model.hasShot === !1 ? (Me(), Pe("div", K1, " Choose a view · + Add Frame ")) : Dt("", !0)
    ]));
  }
};
let Ro = null;
function hc() {
  return Ro || (Ro = new Promise((e) => {
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
  }), Ro);
}
function Qm(e) {
  return (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
}
function Y1(e) {
  e && (e.__panoNodeOutputMediaCurrent = !1);
}
function q1(e) {
  e && (e.__panoNodeOutputMediaCurrent = !0);
}
function X1(e, t, n, i = ["erp_image", "bg_erp"]) {
  const a = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || a === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return i.includes(String((c == null ? void 0 : c.name) || ""));
}
function J1(e, t = [], n = null) {
  var a;
  const i = typeof n == "function" ? n : (l) => String((l == null ? void 0 : l.src) || (l == null ? void 0 : l.url) || l || "").trim();
  for (const l of t) {
    const c = [(a = e == null ? void 0 : e.ui) == null ? void 0 : a[l], e == null ? void 0 : e[l]];
    for (const f of c)
      if (Array.isArray(f))
        for (const m of f) {
          const b = i(m);
          if (b && (/\.mp4(\?|$)/i.test(b) || String((m == null ? void 0 : m.format) || "").toLowerCase() === "video/mp4"))
            return b;
        }
  }
  return "";
}
function Z1({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var x;
  const i = ((x = e == null ? void 0 : e.createElement) == null ? void 0 : x.call(e, "video")) || null;
  if (!i || !t) return null;
  const a = typeof n == "function" ? n : () => {
  };
  let l = !1, c = 0;
  const f = typeof i.requestVideoFrameCallback == "function", m = () => {
    l || !f || c || i.paused || i.ended || (c = i.requestVideoFrameCallback(() => {
      c = 0, !l && (a(), m());
    }));
  }, b = () => {
    if (!l) {
      a();
      try {
        Promise.resolve(i.play()).then(m).catch(() => {
        });
      } catch {
      }
    }
  }, v = () => a(), _ = () => {
    a(), m();
  }, S = () => a();
  return i.muted = !0, i.loop = !0, i.autoplay = !0, i.playsInline = !0, i.crossOrigin = "anonymous", i.addEventListener("loadedmetadata", b, { once: !0 }), i.addEventListener("canplay", b, { once: !0 }), f || i.addEventListener("timeupdate", v), i.addEventListener("play", _), i.addEventListener("pause", S), i.src = t, i.load(), { video: i, destroy: () => {
    var L, O;
    l || (l = !0, c && typeof i.cancelVideoFrameCallback == "function" && (i.cancelVideoFrameCallback(c), c = 0), i.removeEventListener("loadedmetadata", b), i.removeEventListener("canplay", b), i.removeEventListener("timeupdate", v), i.removeEventListener("play", _), i.removeEventListener("pause", S), i.pause(), (L = i.removeAttribute) == null || L.call(i, "src"), (O = i.load) == null || O.call(i));
  } };
}
const { app: xt } = es;
function Au() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (es == null ? void 0 : es.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const di = Math.PI / 180, Ms = {}, Q1 = { Nu: 24, Nv: 14 }, e_ = 10, t_ = "pano_suite.ui_settings.v1", n_ = 120;
function Kd() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(t_)) || "").trim();
    if (!n) return e;
    const i = JSON.parse(n), a = String((i == null ? void 0 : i.preview_quality) || "balanced");
    return {
      invert_view_x: !!(i != null && i.invert_view_x),
      invert_view_y: !!(i != null && i.invert_view_y),
      preview_quality: a === "draft" || a === "high" ? a : "balanced"
    };
  } catch {
    return e;
  }
}
function r_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ia(e) {
  var n, i, a, l, c;
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
    styleHeight: String(((i = e.style) == null ? void 0 : i.height) || ""),
    styleWidth: String(((a = e.style) == null ? void 0 : a.width) || ""),
    stylePos: String(((l = e.style) == null ? void 0 : l.position) || ""),
    styleTransform: String(((c = e.style) == null ? void 0 : c.transform) || "")
  };
}
function i_() {
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
function hi(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (i, a) => {
    const l = Number(i), c = Number(a);
    return !Number.isFinite(l) || !Number.isFinite(c) ? null : [l, c];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const i = n(t[0], t[1]);
      if (i) return i;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const i = n(t.width, t.height);
      if (i) return i;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const i = n(t.w, t.h);
      if (i) return i;
    }
  }
  return null;
}
function ep(e) {
  const t = hi(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function tp(e, t, n) {
  ep(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function Cu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function mc(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function np(e) {
  return Ss(mc(e));
}
function ci(e = null) {
  var l, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((c = (l = xt == null ? void 0 : xt.canvas) == null ? void 0 : l.constructor) == null ? void 0 : c.name) || "");
  return [t, i, n, a].join("|");
}
function rp(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: ci(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: ci(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: ci(t)
  };
}
const Ua = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = ci(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = ci(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, pc(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function pc(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : rp(i, e).chosenPath, l = Cu(e);
      this.activeBackend = l;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, m = n.noPreview === !0;
      if (l === a && l !== "none" && c === i && f === m) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = m, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      l !== "none" && ia(e, { keepMonitor: i === "stickers" }), G_(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = Cu(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ia(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      ia(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function a_(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ia(e, t = {}) {
  var i, a, l, c, f;
  if (!e) return;
  Ps.unregister(e), a_(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  try {
    (i = e.__panoDomRestore) == null || i.call(e);
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
      (l = n.state) != null && l.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (f = (c = n.root) == null ? void 0 : c.remove) == null || f.call(c);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((m) => {
      if (m === (n == null ? void 0 : n.widget)) return !1;
      const b = String((m == null ? void 0 : m.name) || ""), v = String((m == null ? void 0 : m.type) || ""), _ = Au();
      return !(b === _ || v === _ || b === "pano_preview" || v === "pano_preview" || b === "preview" && v === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || Ua.unregister(e);
}
function mi(e, t, n) {
  return { x: e, y: t, z: n };
}
function Wd(e, t) {
  return mi(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Lo(e, t) {
  return mi(e.x * t, e.y * t, e.z * t);
}
function eu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Yd(e, t) {
  return mi(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function zo(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return mi(e.x / t, e.y / t, e.z / t);
}
function ni(e, t) {
  const n = e * di, i = t * di, a = Math.cos(i);
  return mi(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function gc(e, t, n = 0) {
  const i = ni(e, t), a = mi(0, 1, 0);
  let l = Yd(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = mi(1, 0, 0)), l = zo(l);
  let c = zo(Yd(i, l));
  const f = n * di, m = Math.cos(f), b = Math.sin(f), v = Wd(Lo(l, m), Lo(c, b)), _ = Wd(Lo(l, -b), Lo(c, m));
  return { fwd: i, right: zo(v), up: zo(_) };
}
function o_(e, t = "#00ff00") {
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
  let i = null;
  if (e && typeof e == "object")
    i = e;
  else if (typeof e == "string") {
    const a = e.trim();
    if (!a) return n;
    try {
      i = JSON.parse(a);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const a = i;
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
function s_(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = aa(e, "state_json")) == null ? void 0 : n.value) || "");
}
function xr(e) {
  var f, m;
  const t = s_(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((f = aa(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((m = aa(e, "coverage")) == null ? void 0 : m.value) || 360) === 180 ? 180 : 360, l = e.__panoStateCache;
  if (l && l.source === t && l.liveVersion === n && l.bg === i && l.coverage === a)
    return l.parsed;
  const c = o_(t, i);
  return c.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: c }, c;
}
function aa(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function qd(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function ip(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function l_(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function ap(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function op(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = c ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(c.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = l_(e == null ? void 0 : e.graph, n)), i;
}
function u_(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function bc(e, t = []) {
  const n = u_(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function Xd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function ks(e, t) {
  const n = Xd(e), i = Xd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function c_(e, t = ["erp_image", "bg_erp"]) {
  var m;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = bc(e, t).map((b) => n.findIndex((v) => String((v == null ? void 0 : v.name) || "") === String(b))).filter((b) => b >= 0), l = n.map((b, v) => ({ input: b, idx: v })).filter(({ input: b }) => String((b == null ? void 0 : b.type) || "").toUpperCase() === "IMAGE").map(({ idx: b }) => b), c = [.../* @__PURE__ */ new Set([...a, ...l])], f = [];
  for (const b of c) {
    const v = op(e, b);
    if ((v == null ? void 0 : v.id) != null) {
      f.push(String(v.id));
      continue;
    }
    const _ = (m = n[b]) == null ? void 0 : m.link;
    if (_ == null) continue;
    const S = ip(e == null ? void 0 : e.graph, _), { originId: I } = ap(S);
    I != null && f.push(String(I));
  }
  return [...new Set(f)];
}
const Ps = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = wn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((l) => {
        var b, v, _, S, I;
        if (!l) return;
        const c = ks(i, l == null ? void 0 : l.id);
        c_(l, ["erp_image", "bg_erp"]).some((x) => ks(i, x)), !(String(l.__panoPreviewMode || "") === "cutout" && !c) && (Eu(l), (v = (b = l.__panoDomPreview) == null ? void 0 : b.requestDraw) == null || v.call(b), (_ = l.setDirtyCanvas) == null || _.call(l, !0, !0), (I = (S = l.graph) == null ? void 0 : S.setDirtyCanvas) == null || I.call(S, !0, !0), String(l.__panoPreviewMode || ""), String(l.__panoPreviewMode || ""), void 0);
      });
    }, wn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = wn) != null && e.removeEventListener) || (wn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function As(e) {
  var l;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const i = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", i), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((l = wn) == null ? void 0 : l.apiURL) == "function" ? wn.apiURL(a) : a;
}
function f_(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function d_(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function h_(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function m_(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (f_(t)) return [t];
  const { filename: n, subfolder: i } = d_(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => As({
    filename: n,
    subfolder: i,
    type: l
  }));
  return h_([...a, t]);
}
function p_(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? As({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Tu(e) {
  const t = xt == null ? void 0 : xt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (ks(l, a)) return t.get(l);
  } else {
    const l = Object.keys(t);
    for (const c of l)
      if (ks(c, a)) return t[c];
  }
  return null;
}
function tr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return tr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return As({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = tr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : As(e);
}
function g_(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function sp(e) {
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
function lp(e, t) {
  var i;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((i = window == null ? void 0 : window.location) != null && i.href) ? window.location.href : "http://127.0.0.1/", l = new URL(n, a);
    return t > 0 && l.searchParams.set("pano_rev", String(t)), l.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${a}pano_rev=${t}` : n;
  }
}
function b_(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (l) => {
    Array.isArray(l) && l.forEach((c) => t.push(c));
  }, a = (l, c = 0) => {
    !l || c > 3 || n.has(l) || typeof l == "object" && (n.add(l), i(l.images), a(l.output, c + 1), a(l.ui, c + 1), a(l.data, c + 1), a(l.result, c + 1));
  };
  return a(e, 0), t;
}
function y_(e, t) {
  try {
    const n = b_(t);
    let i = "";
    for (const a of n)
      if (i = tr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), lp(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Ga(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function v_(e, t = ["pano_videos"], n = null) {
  const i = e == null ? void 0 : e.id;
  if (i == null) return null;
  if (!Qm(e))
    return Ga(e), null;
  const a = Tu(i), l = J1(a, t, tr);
  if (!l)
    return Ga(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = lp(l, c), m = `${t.join("|")}:${f}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === m) return b.video;
  Ga(e);
  const v = Z1({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return v ? (e.__panoOwnOutputVideoCache = { key: m, ...v }, v.video) : null;
}
function __(e, t = []) {
  var b, v;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = bc(e, t).map((_) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(_))).filter((_) => _ >= 0), l = n.map((_, S) => ({ input: _, idx: S })).filter(({ input: _ }) => String((_ == null ? void 0 : _.type) || "").toUpperCase() === "IMAGE").map(({ idx: _ }) => _), c = [.../* @__PURE__ */ new Set([...a, ...l])];
  for (const _ of c) {
    const S = n[_], I = S == null ? void 0 : S.link;
    if (I == null) continue;
    const x = ip(e.graph, I), { originId: L, originSlot: O } = ap(x);
    if (L == null) continue;
    const z = op(e, _, L);
    if (!z) continue;
    const P = Number(O || 0), $ = Tu((z == null ? void 0 : z.id) ?? L), E = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (E.length) {
      const X = [];
      P >= 0 && P < E.length && X.push(E[P]), X.push(...E);
      for (const W of X) {
        const A = tr(W);
        if (A)
          return String((S == null ? void 0 : S.name) || ""), { src: A, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let D = [];
    try {
      D = typeof (xt == null ? void 0 : xt.getNodeImageUrls) == "function" ? xt.getNodeImageUrls(z) || [] : [];
    } catch {
      D = [];
    }
    if (Array.isArray(D) && D.length) {
      const X = [];
      P >= 0 && P < D.length && X.push(D[P]), X.push(...D);
      for (const W of X) {
        const A = tr(W);
        if (A)
          return String((S == null ? void 0 : S.name) || ""), { src: A, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const H = Array.isArray(z == null ? void 0 : z.imgs) ? z.imgs : [];
    if (H.length) {
      const X = [];
      P >= 0 && P < H.length && X.push(H[P]), X.push(...H);
      for (const W of X) {
        const A = tr(W);
        if (A)
          return String((S == null ? void 0 : S.name) || ""), { src: A, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const Z = (b = z == null ? void 0 : z.widgets) == null ? void 0 : b.find((X) => String((X == null ? void 0 : X.name) || "").toLowerCase() === "image");
    if (Z) {
      let X = tr(Z.value);
      if (X && !X.includes("/") && !X.includes(":") && (z.comfyClass === "LoadImage" || z.type === "LoadImage") && (X = wn.apiURL(`/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`)), X)
        return String((S == null ? void 0 : S.name) || ""), { src: X, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = Qm(e) ? Tu(e == null ? void 0 : e.id) : null, m = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && m.push(...f.pano_input_images), Array.isArray((v = f == null ? void 0 : f.ui) == null ? void 0 : v.pano_input_images) && m.push(...f.ui.pano_input_images), m.length > 0)
    for (const _ of m) {
      const S = tr(_);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function x_(e, t = [], n = {}) {
  const i = __(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const l = m_(a);
  if (!l.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", m = e.__panoLinkedInputImageCache.get(f);
  if (m && m.srcRaw === a && m.img) return m.img;
  if (m && m.pendingSrcRaw === a && m.pendingImg)
    return c && m.img && (m.img.complete || m.img.naturalWidth || m.img.width) ? m.img : m.pendingImg;
  const b = new Image(), v = m || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  v.pendingSrcRaw = a, v.pendingResolvedSrc = "", v.pendingImg = b, e.__panoLinkedInputImageCache.set(f, v);
  let _ = -1;
  const S = () => {
    var x, L, O, z;
    if (_ += 1, _ >= l.length) {
      if (((L = (x = e.__panoLinkedInputImageCache) == null ? void 0 : x.get) == null ? void 0 : L.call(x, f)) === v && v.pendingImg === b && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
        try {
          (z = (O = e.__panoLinkedInputImageCache) == null ? void 0 : O.delete) == null || z.call(O, f);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), l.length;
      return;
    }
    const I = l[_];
    v.pendingResolvedSrc = I, b.src = I;
  };
  return b.onload = () => {
    var I, x, L;
    ((x = (I = e.__panoLinkedInputImageCache) == null ? void 0 : I.get) == null ? void 0 : x.call(I, f)) === v && v.pendingImg === b && (v.srcRaw = a, v.resolvedSrc = String(v.pendingResolvedSrc || b.src || ""), v.img = b, v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null), String(v.pendingResolvedSrc || v.resolvedSrc || b.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (L = e.setDirtyCanvas) == null || L.call(e, !0, !0);
  }, b.onerror = (I) => {
    var x, L, O, z;
    if (_ + 1 < l.length) {
      S();
      return;
    }
    if (((L = (x = e.__panoLinkedInputImageCache) == null ? void 0 : x.get) == null ? void 0 : L.call(x, f)) === v && v.pendingImg === b && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
      try {
        (z = (O = e.__panoLinkedInputImageCache) == null ? void 0 : O.delete) == null || z.call(O, f);
      } catch {
      }
    String(v.pendingResolvedSrc || v.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((I == null ? void 0 : I.type) || "error");
  }, S(), c && v.img && (v.img.complete || v.img.naturalWidth || v.img.width) ? v.img : b;
}
function Iu(e, t = [], n = null, i = {}) {
  const a = x_(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function Eu(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Ga(e), e.__panoWrappedErpCache = null;
  }
}
function up(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Qr(e, t, n = "") {
  const i = up(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < n_ ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function Du(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), l = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), c = n / a, f = i / l, m = Math.min(c, f);
  return Number.isFinite(m) && m > 0 ? m : 1;
}
function w_(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), l = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (l <= 0 || c <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), m = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), l * 0.44)), b = Math.max(Math.round(34 * n), f + Math.round(14 * n)), v = i + (l - m) * 0.5, _ = a + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(v, _, m, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", v + m * 0.5, _ + b * 0.5 + 0.5), e.restore();
}
function $o(e, t, n = "Connect ERP image") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Connect ERP image"), i.style.display = t ? "flex" : "none");
}
function S_(e) {
  var i;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((i = e == null ? void 0 : e.active) == null ? void 0 : i.selected_shot_id) || "");
  if (n) {
    const a = t.find((l) => String((l == null ? void 0 : l.id) || "") === n);
    if (a) return a;
  }
  return t[0] || null;
}
function N_(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((l) => {
    var f;
    if (l === t || !l || l.hidden || l.type === "hidden") return;
    let c = 22;
    try {
      const m = typeof l.computeSize == "function" ? l.computeSize(((f = hi(e)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(m) && Number.isFinite(Number(m[1])) && (c = Number(m[1]));
    } catch {
      c = 22;
    }
    a += c;
  }), a;
}
function us(e) {
  const n = N_(e) + 2, i = 8, a = hi(e), l = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), c = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return c < 40 || l < 80 ? null : { x: i, y: n, w: l, h: c };
}
function cp(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = p_(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const l = window.__panoSharedImageCache.get(a);
  if (l != null && l.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: l.img }), l.img;
  const c = e.__panoPreviewImageCache.get(i);
  if (c && c.src === a) return c.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var m, b, v;
    (b = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || b.call(m), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), e.__panoPreviewImageCache.set(i, { src: a, img: f }), f;
}
function M_(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((l, c) => Number((l == null ? void 0 : l.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function yc(e, t) {
  return Ys(t, {
    selectedId: null,
    hoveredId: null
  });
}
function vc(e, t, n) {
  return $m(t, (i, a) => cp(e, i, a), { scene: n });
}
function k_(e, t) {
  var c;
  const n = hp(e, t);
  if (!n) return [];
  const i = mp(t), a = Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.groups) ? t.painting.groups : [], l = new Map(
    a.filter((f) => f && typeof f == "object").map((f) => [String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim(), Number((f == null ? void 0 : f.z_index) || 0)])
  );
  return i.map((f) => {
    const m = n.getGroupDisplayCanvas(f);
    return m ? {
      id: `paint_group:${f}`,
      source: m,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${f}`,
      zIndex: Number(l.get(f) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function Jd(e, t, n, i = "") {
  const a = yc(e, t), l = vc(e, t, a), c = k_(e, t), f = sp(n), m = _c(n), b = Oa({
    stateRevision: [
      "runtime_cutout_scene",
      f,
      m.width,
      m.height,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      String(i || ""),
      Array.isArray(l) ? l.map((v) => `${String((v == null ? void 0 : v.assetId) || "")}:${String((v == null ? void 0 : v.revision) || "")}`).join(",") : "",
      Array.isArray(c) ? c.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${String((v == null ? void 0 : v.revision) || "")}:${Number((v == null ? void 0 : v.zIndex) || 0)}`).join(",") : ""
    ].join("|"),
    backgroundSource: n,
    backgroundRevision: f,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: a,
    textures: l,
    rasterEntries: c,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  return e.__panoRuntimeCore || (e.__panoRuntimeCore = bi()), e.__panoRuntimeCore.syncState(b), e.__panoRuntimeCore;
}
function P_(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, l = (e.y + t.y + n.y) / 3, c = (f) => {
    const m = f.x - a, b = f.y - l, v = Math.hypot(m, b) || 1;
    return { x: f.x + m / v * i, y: f.y + b / v * i };
  };
  return [c(e), c(t), c(n)];
}
function Zd(e, t, n, i, a, l, c, f) {
  const m = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(m) < 1e-6) return;
  const [b, v, _] = P_(l, c, f, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(b.x, b.y), e.lineTo(v.x, v.y), e.lineTo(_.x, _.y), e.closePath(), e.clip();
  const S = (l.x * (i.y - a.y) + c.x * (a.y - n.y) + f.x * (n.y - i.y)) / m, I = (l.x * (a.x - i.x) + c.x * (n.x - a.x) + f.x * (i.x - n.x)) / m, x = (l.x * (i.x * a.y - a.x * i.y) + c.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * i.y - i.x * n.y)) / m, L = (l.y * (i.y - a.y) + c.y * (a.y - n.y) + f.y * (n.y - i.y)) / m, O = (l.y * (a.x - i.x) + c.y * (n.x - a.x) + f.y * (i.x - n.x)) / m, z = (l.y * (i.x * a.y - a.x * i.y) + c.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * i.y - i.x * n.y)) / m;
  e.transform(S, L, I, O, x, z), e.drawImage(t, 0, 0), e.restore();
}
function fp(e, t, n, i) {
  const a = eu(e, t.right), l = eu(e, t.up), c = eu(e, t.fwd);
  if (c <= 1e-4) return null;
  const f = l / c / i, m = a / c / i;
  return { x: n.x + n.w * 0.5 + m * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function dp(e, t, n, i, a, l, c, f = 12, m = 9) {
  var me;
  const b = q(Number(c.hFOV_deg || 30), 1, 179) * di, v = q(Number(c.vFOV_deg || 30), 1, 179) * di, _ = Math.tan(b * 0.5), S = Math.tan(v * 0.5), I = c.crop || {}, x = q(Number(I.x0 ?? 0), 0, 1), L = q(Number(I.y0 ?? 0), 0, 1), O = q(Number(I.x1 ?? 1), 0, 1), z = q(Number(I.y1 ?? 1), 0, 1), P = Math.max(1e-4, O - x), $ = Math.max(1e-4, z - L), E = gc(Number(c.yaw_deg || 0), Number(c.pitch_deg || 0), Number(c.rot_deg || c.roll_deg || 0)), D = [], H = [], Z = [], X = [];
  for (let ee = 0; ee <= m; ee++) {
    const ue = ee / m, de = (1 - (L + ue * $) * 2) * S;
    for (let Se = 0; Se <= f; Se++) {
      const ke = Se / f, Re = ((x + ke * P) * 2 - 1) * _, Je = E.fwd.x + E.right.x * Re + E.up.x * de, nt = E.fwd.y + E.right.y * Re + E.up.y * de, gt = E.fwd.z + E.right.z * Re + E.up.z * de, Ge = Math.hypot(Je, nt, gt) || 1e-8, Gt = Je / Ge, on = nt / Ge, It = gt / Ge, Pt = Gt * i.right.x + on * i.right.y + It * i.right.z, $t = Gt * i.up.x + on * i.up.y + It * i.up.z, R = Gt * i.fwd.x + on * i.fwd.y + It * i.fwd.z;
      if (R <= 1e-4)
        D[ee] || (D[ee] = []), H[ee] || (H[ee] = []), D[ee][Se] = null, H[ee][Se] = null;
      else {
        const U = $t / R / a, oe = Pt / R / a;
        D[ee] || (D[ee] = []), H[ee] || (H[ee] = []), D[ee][Se] = n.x + n.w * 0.5 + oe * n.h * 0.5, H[ee][Se] = n.y + n.h * 0.5 - U * n.h * 0.5;
      }
      Z[ee] || (Z[ee] = []), X[ee] || (X[ee] = []), Z[ee][Se] = ke, X[ee][Se] = ue;
    }
  }
  const W = (me = l.assets) == null ? void 0 : me[c.asset_id], A = cp(t, c.asset_id, W);
  if (!A || !A.complete || !A.naturalWidth) return;
  const Q = Number(A.naturalWidth || A.width || 1), ae = Number(A.naturalHeight || A.height || 1), fe = f < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = fe;
  for (let ee = 0; ee < m; ee++)
    for (let ue = 0; ue < f; ue++) {
      const k = D[ee][ue], de = H[ee][ue], Se = D[ee][ue + 1], ke = H[ee][ue + 1], B = D[ee + 1][ue], Re = H[ee + 1][ue], Je = D[ee + 1][ue + 1], nt = H[ee + 1][ue + 1];
      if (k === null || Se === null || B === null || Je === null) continue;
      const gt = Z[ee][ue] * Q, Ge = X[ee][ue] * ae, Gt = Z[ee][ue + 1] * Q, on = X[ee][ue + 1] * ae, It = Z[ee + 1][ue] * Q, Pt = X[ee + 1][ue] * ae, $t = Z[ee + 1][ue + 1] * Q, R = X[ee + 1][ue + 1] * ae;
      Zd(e, A, { x: gt, y: Ge }, { x: Gt, y: on }, { x: $t, y: R }, { x: k, y: de }, { x: Se, y: ke }, { x: Je, y: nt }), Zd(e, A, { x: gt, y: Ge }, { x: $t, y: R }, { x: It, y: Pt }, { x: k, y: de }, { x: Je, y: nt }, { x: B, y: Re });
    }
}
function A_(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = xr(e), a = us(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const l = gc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), c = Math.tan(Number(e.__panoPreviewView.fov || 100) * di * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const f = Iu(
    e,
    bc(e, ["erp_image", "bg_erp"]),
    () => {
      var E, D, H;
      (D = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null || D.call(E), (H = e.setDirtyCanvas) == null || H.call(e, !0, !1);
    }
  ), m = !!(f && f.complete && (f.naturalWidth || f.width)), b = bp(e), v = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, _ = b || v, S = Ms, I = yc(e, i), x = vc(e, i, I), L = Ns(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let O = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = bi()), m) {
    const E = Ks({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(x) ? x.map((Z) => `${String((Z == null ? void 0 : Z.assetId) || "")}:${String((Z == null ? void 0 : Z.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: I,
      textures: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), H = e.__panoRuntimeCore.syncState(E) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", L, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    O = !!H, H && t.drawImage(H, a.x, a.y, a.w, a.h);
  }
  const z = _ ? 8 : 12, P = _ ? 6 : 9, $ = M_(e, i);
  if (!m || $.length === 0) {
    const E = Du(t == null ? void 0 : t.canvas, a);
    pp(t, a, l, c, E);
  }
  !O && m && Cs(e, t, a, l, c, f, S), !O && $.length > 0 && $.forEach((E) => dp(t, e, a, l, c, i, E, z, P)), t.restore();
}
function C_(e, t, n, i, a = "preview_scene", l = "") {
  const c = String(
    l || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return Ks({
    stateRevision: [
      a,
      c,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: e,
    backgroundRevision: c,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: i,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function cs(e, t, n, i) {
  var l, c, f, m, b, v;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && t)
    try {
      const _ = i.convertEventToCanvasOffset(t);
      if (Array.isArray(_) && _.length >= 2)
        return {
          x: Number(_[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(_[1]) - Number(((m = e == null ? void 0 : e.pos) == null ? void 0 : m[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[1]) || 0)
    };
  const a = I_(e, t, i);
  return a || null;
}
function T_(e, t) {
  var _, S;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, l = (_ = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : _.call(a), c = (t == null ? void 0 : t.ds) || ((S = xt == null ? void 0 : xt.canvas) == null ? void 0 : S.ds);
  if (!l || !c) return null;
  const f = Number(c.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const m = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(l.left || 0)) / f - Number(m[0] || 0), v = (i - Number(l.top || 0)) / f - Number(m[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(v) ? null : { x: b, y: v };
}
function I_(e, t, n) {
  var a, l;
  const i = T_(t, n || (xt == null ? void 0 : xt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
  } : null;
}
function Vo(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), hi(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", tp(e, 320, 180), Wi(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var S, I;
    const _ = t ? t.apply(this, arguments) : void 0;
    try {
      const x = arguments[0];
      x && !((S = this.flags) != null && S.collapsed) && (i.stepInertia(performance.now()) && ((I = this.setDirtyCanvas) == null || I.call(this, !0, !1)), A_(this, x, i));
    } catch {
    }
    return _;
  }, e.onResize = function() {
    var S;
    const _ = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ts(this, 150), (S = this.setDirtyCanvas) == null || S.call(this, !0, !0), vp(this, 220, null), _;
  };
  const i = Ws({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (_) => {
      e.__panoPreviewView = _;
    },
    getViewportSize: () => {
      const _ = us(e);
      return {
        w: Math.max(1, Number((_ == null ? void 0 : _.w) || 0)),
        h: Math.max(1, Number((_ == null ? void 0 : _.h) || 0))
      };
    },
    onInteraction: () => {
      var _;
      gp(e), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(_, S, I) {
    var x;
    try {
      if (!((x = this.flags) != null && x.collapsed)) {
        const L = cs(this, _, S, I) || { x: 0, y: 0 }, O = hi(this), z = Number((O == null ? void 0 : O[0]) || 0), P = Number((O == null ? void 0 : O[1]) || 0);
        if (L.x >= z - 20 && L.y >= P - 20)
          return a ? a.apply(this, arguments) : void 0;
        const E = us(this);
        if (qd(L.x, L.y, E))
          return (_ == null ? void 0 : _.button) === 0 && i.startDrag(L.x, L.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const l = e.onMouseMove;
  e.onMouseMove = function(_, S, I) {
    try {
      const x = cs(this, _, S, I);
      if (i.state.drag.active) {
        if (typeof (_ == null ? void 0 : _.buttons) == "number" && (_.buttons & 1) === 0)
          return i.endDrag(), !0;
        const L = x || i.state.drag;
        return i.moveDrag(L.x, L.y, "pano"), !0;
      }
    } catch {
    }
    return l ? l.apply(this, arguments) : void 0;
  };
  const c = e.onMouseUp;
  e.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : c ? c.apply(this, arguments) : void 0;
  };
  const f = e.onMouseLeave;
  e.onMouseLeave = function() {
    const _ = f ? f.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), _;
  };
  const m = e.onMouseWheel;
  e.onMouseWheel = function(_, S, I) {
    var x, L;
    try {
      if ((x = this.flags) != null && x.collapsed) return m ? m.apply(this, arguments) : void 0;
      const O = cs(this, _, S, I), z = us(this);
      return !O || !qd(O.x, O.y, z) ? m ? m.apply(this, arguments) : void 0 : (i.applyWheelEvent(_, typeof S == "number" ? S : 0) && ((L = this.setDirtyCanvas) == null || L.call(this, !0, !1)), typeof (_ == null ? void 0 : _.preventDefault) == "function" && _.preventDefault(), typeof (_ == null ? void 0 : _.stopPropagation) == "function" && _.stopPropagation(), !0);
    } catch {
      return m ? m.apply(this, arguments) : void 0;
    }
  };
  const b = e.onRemoved, v = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = l, e.onMouseUp = c, e.onMouseLeave = f, e.onMouseWheel = m, e.onRemoved = b, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = v, e.onRemoved = function() {
    return v(), Ua.unregister(this), Ps.unregister(this), b ? b.apply(this, arguments) : void 0;
  };
}
function E_(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function hp(e, t) {
  var b, v, _, S, I, x, L, O, z, P, $, E;
  const n = (v = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : v.strokes, i = (S = (_ = t == null ? void 0 : t.painting) == null ? void 0 : _.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, l = Array.isArray(i) && i.length > 0;
  if (!a && !l) return null;
  const c = E_(e, t), f = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = xu(c), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const m = {
    paint: n || null,
    mask: i || null,
    groups: ((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) || null,
    rasterObjects: ((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) || null
  };
  return (((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.paint) !== m.paint || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.mask) !== m.mask || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.groups) !== m.groups || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== m.rasterObjects) && (e.__panoPreviewPaintRevision = m, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    l ? "m1" : "m0",
    String(Array.isArray(($ = t == null ? void 0 : t.painting) == null ? void 0 : $.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function mp(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function D_(e, t) {
  const n = hp(e, t);
  if (!n) return null;
  const i = mp(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function O_(e, t, n = null) {
  var f;
  const i = (f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.paint, a = tr(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const l = e.__panoPaintingLayerImageCache;
  if (l.img && l.src === a) return l.img;
  const c = new Image();
  return c.onload = () => {
    var m;
    n == null || n(), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
  }, c.onerror = () => {
    var m;
    ((m = e.__panoPaintingLayerImageCache) == null ? void 0 : m.img) === c && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, c.src = a, e.__panoPaintingLayerImageCache = { src: a, img: c }, c;
}
function F_(e, t) {
  var l, c;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((l = t == null ? void 0 : t.painting) == null ? void 0 : l.raster_objects) && t.painting.raster_objects.length > 0) {
    const f = O_(e, t, () => {
      var m, b;
      return (b = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : b.call(m);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((c = t == null ? void 0 : t.painting_layer) == null ? void 0 : c.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = D_(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function _c(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function R_(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function L_(e, t, n, i, a, l) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const c = _c(n);
  if (c.width === i && c.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const m = R_(e, l, c.width, c.height).getContext("2d", { willReadFrequently: !0 });
  if (!m) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    m.clearRect(0, 0, c.width, c.height), m.drawImage(n, 0, 0, c.width, c.height);
    const b = m.getImageData(0, 0, c.width, c.height).data, v = t.getImageData(0, 0, i, a), _ = v.data, S = Math.max(0, c.width - 1), I = Math.max(0, c.height - 1);
    for (let x = 0; x < a; x += 1) {
      const L = (x + 0.5) * c.height / a - 0.5, O = q(Math.floor(L), 0, I), z = q(O + 1, 0, I), P = q(L - O, 0, 1);
      for (let $ = 0; $ < i; $ += 1) {
        const E = ($ + 0.5) * c.width / i - 0.5, D = q(Math.floor(E), 0, S), H = q(D + 1, 0, S), Z = q(E - D, 0, 1);
        let X = 0, W = 0, A = 0, Q = 0;
        const ae = (ee, ue, k) => {
          const de = (ue * c.width + ee) * 4, Se = (b[de + 3] || 0) / 255;
          X += Se * k, W += (b[de] || 0) / 255 * Se * k, A += (b[de + 1] || 0) / 255 * Se * k, Q += (b[de + 2] || 0) / 255 * Se * k;
        };
        if (ae(D, O, (1 - Z) * (1 - P)), ae(H, O, Z * (1 - P)), ae(D, z, (1 - Z) * P), ae(H, z, Z * P), X <= 1e-6) continue;
        const fe = (x * i + $) * 4, me = 1 - X;
        _[fe] = Math.round(q((W + _[fe] / 255 * me) * 255, 0, 255)), _[fe + 1] = Math.round(q((A + _[fe + 1] / 255 * me) * 255, 0, 255)), _[fe + 2] = Math.round(q((Q + _[fe + 2] / 255 * me) * 255, 0, 255)), _[fe + 3] = 255;
      }
    }
    t.putImageData(v, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function z_(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0)), f = `${String(t.currentSrc || t.src || "")}|${a}x${l}|${i}`;
  let m = e.__panoPreviewBgPaint;
  if (!m || m.__revKey !== f || m.width !== a || m.height !== l) {
    (!m || m.width !== a || m.height !== l) && (m = document.createElement("canvas"), m.width = a, m.height = l, e.__panoPreviewBgPaint = m);
    const b = m.getContext("2d");
    b.clearRect(0, 0, a, l), b.drawImage(t, 0, 0, a, l), L_(e, b, n, a, l, "__panoPreviewOverlayScratch"), m.__revKey = f;
  }
  return m;
}
function $_(e, t, n, i = null) {
  var I, x, L, O, z, P, $;
  const a = String(e.__panoPreviewMode || "stickers");
  up(e, a);
  const l = xr(e);
  a === "cutout" && e.__panoCutoutNodeSurfaceState !== l && (e.__panoCutoutNodeSurfaceState = l, (L = (x = (I = e.__panoCutoutNodeSurface) == null ? void 0 : I.session) == null ? void 0 : x.refresh) == null || L.call(x));
  const c = t.parentElement, f = 1, m = Math.max(1, Number((c == null ? void 0 : c.clientWidth) || t.clientWidth || 0)), b = Math.max(1, Number((c == null ? void 0 : c.clientHeight) || t.clientHeight || 0)), v = Math.max(64, Math.round(m * f)), _ = Math.max(64, Math.round(b * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const E = S_(l), D = v_(
        e,
        ["pano_input_videos"],
        () => {
          var ue, k;
          return (k = (ue = e.__panoDomPreview) == null ? void 0 : ue.requestDraw) == null ? void 0 : k.call(ue);
        }
      ) || Iu(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var ue, k;
          return (k = (ue = e.__panoDomPreview) == null ? void 0 : ue.requestDraw) == null ? void 0 : k.call(ue);
        },
        { preserveReadyWhilePending: !1 }
      ), H = g_(D);
      (t.width !== v || t.height !== _) && (t.width = v, t.height = _);
      const Z = { x: 0, y: 0, w: v, h: _ }, X = _c(D), W = H ? q(Number(X.width / X.height), 0.05, 20) : 1, A = E ? ir(E) : null, Q = q(Number((A == null ? void 0 : A.aspect) || W || 1), 0.05, 20), ae = P1(Z, Q);
      e.__panoCutoutNodeFrame = ae, Du(t, Z), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, v, _);
      let fe = "none", me = "Connect ERP image", ee = "";
      if (ee = String((D == null ? void 0 : D.currentSrc) || (D == null ? void 0 : D.src) || ""), E)
        if (D && !H)
          fe = "loading";
        else if (H) {
          const ue = Jd(e, l, D, (E == null ? void 0 : E.id) || ""), k = A1({ width: v, height: _ }, ae, E), de = k.rect, Se = ir(k.shot);
          let ke = !0;
          if (k.fallback) {
            const Je = k.fallback.rect, nt = ir(k.fallback.shot);
            ke = ue.renderToContext(
              S,
              Je,
              nt,
              { width: Je.w, height: Je.h, dpr: 1 }
            );
          }
          const B = ue.renderToContext(
            S,
            de,
            Se,
            { width: de.w, height: de.h, dpr: 1 }
          );
          let Re = !0;
          k.fallback && (Re = ue.renderToContext(
            S,
            ae,
            ir(E),
            { width: ae.w, height: ae.h, dpr: 1 }
          )), (!ke || !B || !Re) && (fe = "empty", me = "Open editor or run node");
        } else
          fe = "empty", me = "Connect ERP image";
      else {
        const ue = e.__panoLastCutoutShot;
        if (e.__panoPreviewView || (e.__panoPreviewView = ue ? {
          yaw: Number(ue.yaw_deg || 0),
          pitch: Number(ue.pitch_deg || 0),
          fov: 100
        } : { yaw: 0, pitch: 0, fov: 100 }), H) {
          const k = Jd(e, l, D, "zero_shot_viewer"), de = ((z = (O = i == null ? void 0 : i.state) == null ? void 0 : O.drag) == null ? void 0 : z.active) === !0 || (($ = (P = i == null ? void 0 : i.state) == null ? void 0 : P.inertia) == null ? void 0 : $.active) === !0 ? 0.5 : 1;
          k.renderToContext(
            S,
            Z,
            Ns(e.__panoPreviewView, l == null ? void 0 : l.coverage),
            { width: Z.w, height: Z.h, dpr: 1, renderScale: de }
          ) || (fe = "empty", me = "Open editor or run node");
        } else D ? fe = "loading" : (fe = "empty", me = "Connect ERP image");
      }
      E && (e.__panoLastCutoutShot = { ...E }, S.save(), S.fillStyle = "rgba(0,0,0,0.58)", S.beginPath(), S.rect(0, 0, v, _), S.rect(ae.x, ae.y, ae.w, ae.h), S.fill("evenodd"), S.restore(), S.save(), S.strokeStyle = "rgba(255,221,87,0.72)", S.lineWidth = 2, S.strokeRect(ae.x + 0.5, ae.y + 0.5, Math.max(0, ae.w - 1), Math.max(0, ae.h - 1)), S.restore()), fe === "loading" ? ($o(e, !1), Qr(e, !0, ee)) : fe === "empty" ? ($o(e, !0, me), Qr(e, !1, "")) : ($o(e, !1), Qr(e, !1, ""));
    } else {
      $o(e, !1), (t.width !== v || t.height !== _) && (t.width = v, t.height = _);
      const E = { x: 0, y: 0, w: v, h: _ }, D = Du(t, E);
      S.setTransform(1, 0, 0, 1, 0, 0), S.clearRect(0, 0, v, _), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const H = gc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), Z = Math.tan(Number(e.__panoPreviewView.fov || 100) * di * 0.5), X = Iu(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Se, ke;
          return (ke = (Se = e.__panoDomPreview) == null ? void 0 : Se.requestDraw) == null ? void 0 : ke.call(Se);
        }
      ), W = !!(X && X.complete && (X.naturalWidth || X.width));
      S.fillStyle = "#1a1a1e", S.fillRect(0, 0, v, _);
      const A = yc(e, l), Q = vc(e, l, A), ae = Ns(e.__panoPreviewView, l == null ? void 0 : l.coverage), fe = F_(e, l), me = (fe == null ? void 0 : fe.source) || null, ee = W && me ? z_(e, X, me, (fe == null ? void 0 : fe.revision) || "") : X, ue = ee !== X ? String(ee.__revKey || "") : X ? [
        String(X.currentSrc || X.src || ""),
        Number(X.naturalWidth || X.width || 0),
        Number(X.naturalHeight || X.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = bi());
      let k = !1;
      if (W) {
        const ke = e.__panoDomRuntimeCore.syncState(
          C_(ee, l, A, Q, "runtime_dom_scene", ue)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", ae, {
          width: E.w,
          height: E.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        ke && (S.drawImage(ke, E.x, E.y, E.w, E.h), k = !0);
      }
      const de = A.stickers;
      if (W && k)
        Qr(e, !1, "");
      else if (W)
        Cs(e, S, E, H, Z, ee, Ms), Qr(e, !1, "");
      else if (me)
        Cs(e, S, E, H, Z, me, Ms), Qr(e, !!X && !W, String((X == null ? void 0 : X.src) || ""));
      else {
        const Se = !!X && !W;
        Qr(e, Se, String((X == null ? void 0 : X.src) || "")), Se && w_(S, E, D);
      }
      if ((!W || de.length === 0) && pp(S, E, H, Z, D), !k && de.length > 0) {
        const Se = bp(e), ke = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, B = Se || ke, Re = B ? 8 : 12, Je = B ? 6 : 9;
        de.forEach((nt) => dp(S, e, E, H, Z, l, nt, Re, Je));
      } else if (!X || !W) {
        const Se = Math.max(14, Math.round(16 * D));
        S.fillStyle = "rgba(212,212,216,0.85)", S.font = `600 ${Se}px Plus Jakarta Sans, Geist, sans-serif`, S.textAlign = "center", S.fillText("Open editor to add stickers", v * 0.5, _ * 0.5 + 24 * D);
      }
    }
}
function Cs(e, t, n, i, a, l, c = Q1) {
  const f = xr(e), m = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = bi());
  const b = sp(l), v = Ks({
    stateRevision: [
      "runtime_bg_only",
      b,
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: b,
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(v)) return;
  const S = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(m.yaw || 0),
    pitchDeg: Number(m.pitch || 0),
    fovDeg: Number(m.fov || 100),
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
function Qd(e, t, n, i, a, l, c = 1) {
  let f = !1;
  e.strokeStyle = l, e.lineWidth = c, e.beginPath();
  for (const m of t) {
    const b = fp(m, n, i, a);
    if (!b) {
      f = !1;
      continue;
    }
    f ? e.lineTo(b.x, b.y) : (e.moveTo(b.x, b.y), f = !0);
  }
  e.stroke();
}
function pp(e, t, n, i, a = 1) {
  e.save();
  const l = "rgba(63, 63, 70, 0.5)", c = "rgba(250, 250, 250, 0.35)";
  for (let b = -75; b <= 75; b += 15) {
    const v = [];
    for (let _ = -180; _ <= 180; _ += 15) v.push(ni(_, b));
    Qd(e, v, n, t, i, b === 0 ? c : l, b === 0 ? 1.5 : 1);
  }
  for (let b = -180; b <= 180; b += 45) {
    const v = [];
    for (let _ = -89; _ <= 89; _ += 15) v.push(ni(b, _));
    Qd(e, v, n, t, i, b % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : l, b % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: ni(0, 0) },
    { name: "Right", dir: ni(90, 0) },
    { name: "Back", dir: ni(180, 0) },
    { name: "Left", dir: ni(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const m = Math.max(9, Math.round(11 * a));
  e.font = `500 ${m}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((b) => {
    const v = fp(b.dir, n, t, i);
    v && e.fillText(b.name, v.x, v.y + 20 * a);
  }), e.restore();
}
function V_(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function gp(e) {
  const t = V_(e);
  t.dragging = !1, t.hqFrames = e_;
}
function Ts(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function bp(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function yp(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function j_(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), l = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && l >= i.height - n;
}
function Kn(e, t) {
  return j_(e, t) ? !1 : (yp(e), !0);
}
function eh() {
  var n;
  const e = (n = xt == null ? void 0 : xt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function th(e) {
  var n;
  if (!e) return;
  const t = (n = xt == null ? void 0 : xt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function H_(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !ep(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function U_(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var l, c;
    e.__panoBootMinHeightTimer = null, (l = e == null ? void 0 : e.__panoDomPreview) != null && l.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function nh(e, t = null, n = 0, i = 0, a = !0) {
  const l = Math.max(0, Number(i || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(l, Math.max(0, Number(n || 0))) : l;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(l, Math.max(0, Number(n || 0))) : l > 0 ? l : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, Ts(e, 150), t == null || t(), a && vp(e, 180, t);
    }
  };
}
function vp(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Wi(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function G_(e, t = {}) {
  var be;
  const n = t.__allowStandalone === !0, i = np(e);
  if (i && !n) {
    mc(e);
    return;
  }
  i && H_(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", Ps.register(e);
  const a = e.__panoPreviewMode === "stickers", l = t.__noLegacyFallback === !0, c = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || Ua.unregister(e);
  const f = String(t.__panoForcedPath || "").trim(), m = a ? rp(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: ci(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (m.chosenPath = f, m.reason = "controller_target_backend");
  const b = a ? m.chosenPath : "dom", v = m.signature || ci(e);
  if (Number(e.__panoRebindGeneration || 0), Cu(e), e == null || e.id, e.__panoPreviewMode, m.reason, m.frontendVersionRaw, e.addDOMWidget, hi(e), e.__panoFrontendSig = v, e.__panoStickersPath = b, a && Ua.register(e), a && b === "legacy_draw") {
    if (l) return;
    ia(e, { keepMonitor: !0 }), Vo(e);
    return;
  }
  if ((be = e.__panoDomPreview) != null && be.widget) return;
  if (e.__panoLegacyPreviewHooked && ia(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !l && Vo(e);
    return;
  }
  const _ = t.noPreview === !0, S = a || _ ? 0 : 56, I = a || _ ? 0 : M1, x = document.createElement("div");
  if (i_(), x.className = "pano-node-preview-dom", x.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), _ && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
    "width:100%",
    _ ? "height:auto" : "height:100%",
    I > 0 ? `min-height:${I}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), _) {
    const M = e.addDOMWidget(Au(), "preview", x, nh(e, null));
    Wi(e), e.__panoDomPreview = { widget: M, root: x, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const L = document.createElement("div");
  L.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const O = document.createElement("canvas");
  O.style.cssText = [
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
  ].join(";"), z.textContent = "Connect ERP image", L.appendChild(O), L.appendChild(z), x.appendChild(L);
  const P = Lm(x), $ = a ? null : document.createElement("div");
  $ && ($.className = "pano-cutout-node-surface-host", $.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild($)), tp(e, 120, 120), Wi(e);
  let E = null;
  try {
    U_(e, S, () => {
      var M, G;
      return (G = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null ? void 0 : G.call(M);
    }), E = e.addDOMWidget(
      Au(),
      "preview",
      x,
      nh(
        e,
        () => {
          var M, G;
          return (G = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null ? void 0 : G.call(M);
        },
        S,
        I,
        a
      )
    );
  } catch {
    a && Vo(e);
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
  }, H = () => {
    D.destroyed || (D.needsDraw = !0, !D.inTick && !D.raf && (D.raf = requestAnimationFrame(ke)));
  }, Z = $ ? /* @__PURE__ */ da({
    ...ku(xr(e)),
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((M) => ({ value: M, label: M }))
  }) : null;
  let X = null;
  const W = $ ? T1({
    readState: () => xr(e),
    publishLiveState: (M) => {
      M ? (X = M, e.__panoLiveStateOverride = M) : (e.__panoLiveStateOverride === X && (e.__panoLiveStateOverride = null), X = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, H();
    },
    commitState: (M) => {
      var re, J, ge, pe;
      const G = aa(e, "state_json");
      if (!G) return;
      const Y = JSON.stringify(M);
      G.value = Y, (re = G.callback) == null || re.call(G, Y), e.__panoStateCache = null, (J = e.setDirtyCanvas) == null || J.call(e, !0, !0), (pe = (ge = e.graph) == null ? void 0 : ge.setDirtyCanvas) == null || pe.call(ge, !0, !0);
    },
    onChange: (M) => Object.assign(Z, M)
  }) : null;
  let A = null, Q = null, ae = !1;
  const fe = () => {
    var M;
    return Q && (clearTimeout(Q), Q = null), ae ? (ae = !1, ((M = W == null ? void 0 : W.commitGesture) == null ? void 0 : M.call(W)) ?? !1) : !1;
  }, me = () => {
    var re, J, ge;
    const M = fe(), G = A == null ? void 0 : A.pointerId;
    if (A = null, G != null) {
      try {
        (re = O.hasPointerCapture) != null && re.call(O, G) && ((J = O.releasePointerCapture) == null || J.call(O, G));
      } catch {
      }
      O.style.cursor = "grab";
    }
    const Y = ((ge = W == null ? void 0 : W.commitGesture) == null ? void 0 : ge.call(W)) ?? !1;
    return M || Y;
  }, ee = () => me();
  W && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(ee));
  let ue = null, k = !1;
  if ($ && W)
    try {
      hc(), ue = ac(W1, {
        model: Z,
        onAction: (M) => {
          var re, J;
          if ((M == null ? void 0 : M.type) === "toggle-aspect") {
            Z.aspectOpen = !Z.aspectOpen;
            return;
          }
          if ((M == null ? void 0 : M.type) === "close-aspect") {
            Z.aspectOpen = !1;
            return;
          }
          if ((M == null ? void 0 : M.type) === "open-editor") {
            me(), Z.aspectOpen = !1, (re = e.__panoOpenEditor) == null || re.call(e);
            return;
          }
          let G = M;
          if ((M == null ? void 0 : M.type) === "add-frame") {
            const ge = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            G = {
              ...M,
              yawDeg: Number(ge.yaw || 0),
              pitchDeg: Number(ge.pitch || 0),
              viewFovDeg: 100
            };
          } else if ((M == null ? void 0 : M.type) === "delete-frame") {
            const ge = ui(xr(e));
            ge && (e.__panoPreviewView = {
              yaw: Number(ge.yaw_deg || 0),
              pitch: Number(ge.pitch_deg || 0),
              fov: 100
            });
          }
          const Y = ((J = e.__panoCutoutNodeFrame) == null ? void 0 : J.safeRect) || null;
          Z.aspectOpen = !1, W.apply({ ...G, safeRect: Y }) && H();
        }
      }), ue.mount($), k = !0;
    } catch {
      ue = null, k = !1;
    }
  const de = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Ts(e, 150), H();
  }) : null;
  de == null || de.observe(L);
  const Se = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const M = 3, G = (Y) => {
      requestAnimationFrame(() => {
        var J;
        const re = !!(x != null && x.isConnected && (L != null && L.isConnected) && (O != null && O.isConnected) && Number(L.clientHeight || 0) > 0 && Number(O.clientHeight || 0) > 0);
        if (!re && Y < M) {
          G(Y + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((L == null ? void 0 : L.clientHeight) || 0), Number((O == null ? void 0 : O.clientHeight) || 0), !re) {
          if (l) {
            e.__panoPreviewMode, Number((L == null ? void 0 : L.clientHeight) || 0), Number((O == null ? void 0 : O.clientHeight) || 0);
            return;
          }
          ia(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", Vo(e), (J = e.setDirtyCanvas) == null || J.call(e, !0, !0);
        }
      });
    };
    G(1);
  }, ke = (M) => {
    var Y, re;
    D.raf = 0, D.inTick = !0;
    let G = !1;
    try {
      G = B.stepInertia(M), (D.needsDraw || G) && (D.needsDraw = !1, (Y = e.flags) != null && Y.collapsed || $_(e, O, null, B));
    } finally {
      D.inTick = !1;
    }
    (G || D.needsDraw) && !D.raf && (D.raf = requestAnimationFrame(ke)), r_() && (!e.__panoDebugLastTs || M - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = M, e.__panoPreviewMode, hi(e), Ia(x), Ia(L), Ia(O), Ia(x.parentElement), Ia((re = x.parentElement) == null ? void 0 : re.parentElement), Number(O.width || 0), Number(O.height || 0), void 0);
  }, B = Ws({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (M) => {
      e.__panoPreviewView = M;
    },
    ...a ? {} : {
      getViewportSize: () => {
        const M = O.getBoundingClientRect();
        return {
          w: Math.max(1, Number(M.width || O.clientWidth || 0)),
          h: Math.max(1, Number(M.height || O.clientHeight || 0))
        };
      },
      getInvert: () => {
        const M = Kd();
        return {
          x: M.invert_view_x ? -1 : 1,
          y: M.invert_view_y ? -1 : 1
        };
      }
    },
    onInteraction: () => {
      H();
    }
  }), Re = a ? L : x, Je = (M) => {
    const G = O.getBoundingClientRect();
    return {
      x: (Number(M.clientX) - G.left) * (O.width / Math.max(1, G.width)),
      y: (Number(M.clientY) - G.top) * (O.height / Math.max(1, G.height))
    };
  };
  O.addEventListener("pointerdown", (M) => {
    var G, Y, re, J, ge, pe, Ae;
    if (Kn(M, Re) && M.button === 0) {
      if (!a) {
        const d = ui(xr(e)), Ce = e.__panoCutoutNodeFrame;
        if (!d) {
          (G = x.focus) == null || G.call(x, { preventScroll: !0 }), (Y = O.setPointerCapture) == null || Y.call(O, M.pointerId), O.style.cursor = "grabbing", B.startDrag(M.clientX, M.clientY, M.pointerId);
          return;
        }
        if (d.locked === !0 || !Ce || !W) return;
        const Oe = Je(M);
        let Le;
        if (M.shiftKey) {
          const Be = qm({
            frame: Ce,
            point: Oe,
            startRollDeg: Number(d.roll_deg ?? d.rot_deg ?? 0),
            shiftKey: !0
          });
          if (!Be) return;
          Le = { kind: "roll", pointerId: M.pointerId, rollGesture: Be };
        } else {
          const Be = ((re = xr(e)) == null ? void 0 : re.ui_settings) || Kd();
          Le = {
            kind: "pan",
            pointerId: M.pointerId,
            startPoint: Oe,
            startShot: { ...d },
            focalPx: na(Ce, d),
            invertX: Be.invert_view_x === !0,
            invertY: Be.invert_view_y === !0
          };
        }
        me(), (J = x.focus) == null || J.call(x, { preventScroll: !0 }), (ge = O.setPointerCapture) == null || ge.call(O, M.pointerId), O.style.cursor = "grabbing", W.beginGesture(), A = Le;
        return;
      }
      c && ((pe = x.focus) == null || pe.call(x), (Ae = O.setPointerCapture) == null || Ae.call(O, M.pointerId), O.style.cursor = "grabbing", B.startDrag(M.clientX, M.clientY, M.pointerId));
    }
  }), O.addEventListener("pointermove", (M) => {
    if (!a) {
      if (!A) {
        if (!B.state.drag.active) return;
        Kn(M, Re), B.moveDrag(M.clientX, M.clientY, "pano");
        return;
      }
      if (A.pointerId !== M.pointerId || !W) return;
      if (Kn(M, Re), A.kind === "pan") {
        const Y = Je(M);
        W.updateGesture({
          type: "pan-camera",
          startShot: A.startShot,
          dx: Y.x - A.startPoint.x,
          dy: Y.y - A.startPoint.y,
          focalPx: A.focalPx,
          invertX: A.invertX,
          invertY: A.invertY
        });
        return;
      }
      const G = Xm(A.rollGesture, Je(M), M);
      if (!G) return;
      A.rollGesture = G.gesture, W.updateGesture({ type: "set-roll", value: G.rollDeg });
      return;
    }
    !c || !B.state.drag.active || (Kn(M, Re), B.moveDrag(M.clientX, M.clientY, "pano"));
  });
  const nt = () => {
    var G, Y;
    if (!A) {
      if (!B.state.drag.active) return;
      B.endDrag(), O.style.cursor = "grab", H();
      return;
    }
    if (!W) return;
    const M = A.pointerId;
    A = null;
    try {
      (G = O.hasPointerCapture) != null && G.call(O, M) && ((Y = O.releasePointerCapture) == null || Y.call(O, M));
    } catch {
    }
    W.cancelGesture(), O.style.cursor = "grab", H();
  }, gt = (M, G = !1) => {
    var Y, re, J;
    if (!a) {
      if (!A) {
        if (!B.state.drag.active) return;
        Kn(M, Re), (Y = O.releasePointerCapture) == null || Y.call(O, M.pointerId), O.style.cursor = "grab", B.endDrag(), H();
        return;
      }
      if (A.pointerId !== M.pointerId || !W) return;
      Kn(M, Re), A = null, (re = O.releasePointerCapture) == null || re.call(O, M.pointerId), O.style.cursor = "grab", G ? W.cancelGesture() : W.commitGesture(), H();
      return;
    }
    !c || !B.state.drag.active || (Kn(M, Re), (J = O.releasePointerCapture) == null || J.call(O, M.pointerId), O.style.cursor = "grab", B.endDrag(), gp(e), H());
  };
  O.addEventListener("pointerup", gt), O.addEventListener("pointercancel", (M) => gt(M, !0)), O.addEventListener("lostpointercapture", nt), O.addEventListener("pointerleave", (M) => {
    !a && A || B.state.drag.active && gt(M);
  });
  const Ge = (M) => {
    M.key !== "Escape" || !A || !W || (nt(), yp(M));
  };
  x.addEventListener("keydown", Ge);
  const Gt = (M) => {
    var Y, re, J, ge, pe, Ae;
    if (!Kn(M, Re)) return;
    if (!a) {
      const d = ui(xr(e));
      if (d && d.locked !== !0 && W) {
        const Ce = fc(M);
        Ce !== 0 && (ae || (me(), W.beginGesture(), ae = !0), W.updateGesture({
          type: "step-fov",
          direction: Ce
        }) ? (Q && clearTimeout(Q), Q = setTimeout(fe, 180), H()) : W.hasGestureChanges() || (W.cancelGesture(), ae = !1));
      } else if (!d) {
        const Ce = eh();
        B.applyWheelEvent(M) && H(), requestAnimationFrame(() => {
          th(Ce);
        });
      }
      (Y = M.preventDefault) == null || Y.call(M), (re = M.stopPropagation) == null || re.call(M), (J = M.stopImmediatePropagation) == null || J.call(M);
      return;
    }
    if (!c) return;
    const G = eh();
    B.applyWheelEvent(M) && H(), (ge = M.preventDefault) == null || ge.call(M), (pe = M.stopPropagation) == null || pe.call(M), (Ae = M.stopImmediatePropagation) == null || Ae.call(M), requestAnimationFrame(() => {
      var d, Ce;
      th(G), (Ce = (d = xt == null ? void 0 : xt.canvas) == null ? void 0 : d.setDirty) == null || Ce.call(d, !0, !0);
    });
  }, on = a ? [L, O] : [L];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((M) => {
    on.forEach((G) => G.addEventListener(M, Gt, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((M) => {
    O.addEventListener(M, (G) => Kn(G, Re)), L.addEventListener(M, (G) => Kn(G, Re));
  });
  const It = aa(e, "state_json");
  if (It && !It.__panoPreviewPatchedCb) {
    It.__panoPreviewPatchedCb = !0;
    const M = It.callback;
    It.callback = (G) => {
      const Y = M ? M(G) : void 0;
      return H(), Y;
    };
  }
  const Pt = aa(e, "bg_color");
  if (Pt && !Pt.__panoPreviewPatchedCb) {
    Pt.__panoPreviewPatchedCb = !0;
    const M = Pt.callback;
    Pt.callback = (G) => {
      const Y = M ? M(G) : void 0;
      return H(), Y;
    };
  }
  const $t = e.onRemoved, R = e.onResize, U = e.onExecuted;
  e.onExecuted = function(M) {
    y_(e, M), Eu(e), q1(e), Wi(e), H();
    const G = U ? U.apply(this, arguments) : void 0;
    return Wi(e), G;
  };
  const oe = e.onConnectionsChange;
  e.onConnectionsChange = function(M, G) {
    return X1(e, M, G) && (Y1(e), Eu(e)), Wi(e), H(), oe ? oe.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var G;
    const M = R ? R.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ts(this, 150), H(), a && ((G = this.setDirtyCanvas) == null || G.call(this, !0, !1)), M;
  }, e.onRemoved = function() {
    return xe(), Ua.unregister(this), Ps.unregister(this), $t ? $t.apply(this, arguments) : void 0;
  };
  const xe = () => {
    var M, G, Y, re, J, ge;
    D.destroyed = !0, (M = de == null ? void 0 : de.disconnect) == null || M.call(de), nt(), me(), O.removeEventListener("lostpointercapture", nt), P(), x.removeEventListener("keydown", Ge), (Y = (G = e.__panoStateFlushers) == null ? void 0 : G.delete) == null || Y.call(G, ee), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (re = W == null ? void 0 : W.destroy) == null || re.call(W), (J = ue == null ? void 0 : ue.unmount) == null || J.call(ue), Ga(e), D.raf && cancelAnimationFrame(D.raf), D.raf = 0, ((ge = e.__panoCutoutNodeSurface) == null ? void 0 : ge.session) === W && (e.__panoCutoutNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = R, e.onExecuted = U, e.onConnectionsChange = oe, e.onRemoved = $t;
  };
  e.__panoDomRestore = xe, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = W && k ? { session: W, model: Z } : null, e.__panoDomPreview = {
    widget: E,
    root: x,
    canvas: O,
    requestDraw: H,
    state: D,
    emptyHintEl: z,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Se(), H();
}
function rh(e, t = {}) {
  pc(e).attach({
    ...t,
    mode: "cutout"
  });
}
function ih(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (np(e) && !n) {
    mc(e);
    return;
  }
  pc(e).attach(t);
}
function B_(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function K_(e, t = 1) {
  const n = Number(t), i = Number.isFinite(n) && n > 0 ? n : 1, a = Number(e == null ? void 0 : e.width), l = Number(e == null ? void 0 : e.height);
  return {
    width: Math.max(1, Math.round((Number.isFinite(a) ? a : 0) * i)),
    height: Math.max(1, Math.round((Number.isFinite(l) ? l : 0) * i))
  };
}
function W_({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: i = null
} = {}) {
  var I;
  const a = typeof n == "function" ? n : () => {
  }, l = typeof i == "function" ? i : () => {
  };
  let c = !1, f = null;
  const m = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const x = m();
    return x === f || (f = x, a(x)), x;
  }, v = () => b();
  return (I = t == null ? void 0 : t.addEventListener) == null || I.call(t, "fullscreenchange", v), b(), { toggle: async () => {
    var x;
    if (c || !e || !t) return !1;
    if (m()) {
      try {
        await ((x = t.exitFullscreen) == null ? void 0 : x.call(t));
      } catch {
      }
      return b(), m();
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), m())
          return b(), !0;
      } catch {
      }
    return l(), b(), !1;
  }, isActive: m, destroy: () => {
    var x, L, O;
    if (!c) {
      if (c = !0, (x = t == null ? void 0 : t.removeEventListener) == null || x.call(t, "fullscreenchange", v), m())
        try {
          const z = (L = t.exitFullscreen) == null ? void 0 : L.call(t);
          (O = z == null ? void 0 : z.catch) == null || O.call(z, () => {
          });
        } catch {
        }
      f = !1, a(!1);
    }
  } };
}
const Y_ = { class: "pano-preview-node-surface" }, q_ = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, i) => (Me(), Pe("div", Y_, [
      Ve(Mn, {
        icon: e.model.fullscreen ? Rt(De).fullscreen_close : Rt(De).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: i[0] || (i[0] = (a) => {
          var l;
          return (l = t.onAction) == null ? void 0 : l.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"])
    ]));
  }
}, jo = 140, X_ = 180, ah = 40, tu = 10;
function oh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function sh(e, t) {
  const n = oh(e), i = oh(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function lh(e) {
  var l;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const i = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", i), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((l = wn) == null ? void 0 : l.apiURL) == "function" ? wn.apiURL(a) : a;
}
function oa(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return oa(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return lh({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const i = oa(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : lh(e);
}
function _p(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function J_(e) {
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
function Ou(e) {
  var a;
  const t = (a = zn) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (sh(l, n)) return t.get(l);
  } else
    for (const l of Object.keys(t))
      if (sh(l, n)) return t[l];
  return null;
}
function Z_(e) {
  var i, a;
  const t = Ou(e == null ? void 0 : e.id), n = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const l of n)
    if (Array.isArray(l))
      for (const c of l) {
        const f = oa(c);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function Q_(e, t = "erp_image") {
  var x, L, O, z, P, $, E, D, H, Z, X, W;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = n.find((A) => String((A == null ? void 0 : A.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const A = n.find((Q) => String((Q == null ? void 0 : Q.type) || "").toUpperCase() === "IMAGE" && (Q == null ? void 0 : Q.link) != null);
    (A == null ? void 0 : A.link) != null && (i = A.link);
  }
  if (i == null) return "";
  const l = ((L = (x = e == null ? void 0 : e.graph) == null ? void 0 : x.links) == null ? void 0 : L[i]) || ((P = (z = (O = zn) == null ? void 0 : O.graph) == null ? void 0 : z.links) == null ? void 0 : P[i]);
  if (!l) return "";
  const c = Number(l.origin_id);
  if (!Number.isFinite(c)) return "";
  const f = (D = (E = ($ = zn) == null ? void 0 : $.graph) == null ? void 0 : E.getNodeById) == null ? void 0 : D.call(E, c), m = Ou(c), b = Ou(e == null ? void 0 : e.id), v = [
    (H = b == null ? void 0 : b.ui) == null ? void 0 : H.pano_input_images,
    b == null ? void 0 : b.pano_input_images,
    m == null ? void 0 : m.images,
    (Z = m == null ? void 0 : m.ui) == null ? void 0 : Z.pano_input_images,
    m == null ? void 0 : m.pano_input_images
  ];
  for (const A of v)
    if (Array.isArray(A))
      for (const Q of A) {
        const ae = oa(Q);
        if (ae) return ae;
      }
  let _ = [];
  try {
    _ = typeof ((X = zn) == null ? void 0 : X.getNodeImageUrls) == "function" ? zn.getNodeImageUrls(f) || [] : [];
  } catch {
    _ = [];
  }
  if (Array.isArray(_) && _.length > 0)
    for (const A of _) {
      const Q = oa(A);
      if (Q) return Q;
    }
  if (f) {
    const A = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const Q of A) {
      const ae = oa(Q);
      if (ae) return ae;
    }
  }
  const S = (W = f == null ? void 0 : f.widgets) == null ? void 0 : W.find((A) => String((A == null ? void 0 : A.name) || "").toLowerCase() === "image"), I = String((S == null ? void 0 : S.value) || "").trim();
  return I ? wn.apiURL(`/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`) : "";
}
function uh(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function ch(e, t, n, i, a, l) {
  var S, I, x;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !_p(l) || n <= 1 || i <= 1) {
    uh(t, n, i);
    return;
  }
  const c = x1(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * jn * 0.5), m = Number(((x = (I = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : I.call(S, (L) => (L == null ? void 0 : L.name) === "coverage")) == null ? void 0 : x.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = bi());
  const b = J_(l), v = Ks({
    stateRevision: [
      "standalone_preview_scene",
      b,
      m
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: b,
    coverageDeg: m,
    scene: Ys(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(v) && (() => {
    const L = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      v1(a, m),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return L ? (t.drawImage(L, 0, 0, n, i), !0) : !1;
  })() || (Cs(e, t, { x: 0, y: 0, w: n, h: i }, c, f, l, Ms), uh(t, n, i));
}
function fh(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class ex {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Ws({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: Ut(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: q(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: q(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, l, c, f;
        const i = (l = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : l.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((c = this.canvas) == null ? void 0 : c.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((f = this.canvas) == null ? void 0 : f.clientHeight) || 0))
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
    var i, a, l;
    const t = this;
    this.node.onExecuted = function() {
      const c = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), c;
    }, this.node.onConnectionsChange = function() {
      const c = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), c;
    }, this.node.onResize = function() {
      const c = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), c;
    }, this.node.onRemoved = function() {
      const c = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), c;
    };
    const n = ((l = (a = (i = this.node) == null ? void 0 : i.widgets) == null ? void 0 : a.find) == null ? void 0 : l.call(a, (c) => (c == null ? void 0 : c.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...c) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...c) : void 0;
      return t.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var l;
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (l = this.flags) != null && l.collapsed || !t.errorText) return i;
      const a = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(a.x, a.y, a.w, a.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, a.x + a.w * 0.5, a.y + a.h * 0.5), n.restore(), i;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${jo}px`,
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
          return jo;
        },
        getHeight() {
          return jo;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const i = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const l = i ? i(a) || {} : {};
          return {
            ...l,
            minHeight: Math.max(jo, Number(l.minHeight || 0)),
            minWidth: Math.max(X_, Number(l.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, i, a, l, c;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return hc(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ da({ fullscreen: !1 }), this.fullscreenController = W_({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, m;
          return (m = (f = this.options).onOpen) == null ? void 0 : m.call(f, this.node);
        }
      }), this.surfaceApp = ac(q_, {
        model: this.surfaceModel,
        onAction: (f) => {
          var m, b;
          (f == null ? void 0 : f.type) === "toggle-fullscreen" && ((b = (m = this.fullscreenController) == null ? void 0 : m.toggle) == null || b.call(m));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var f, m;
          return (m = (f = this.fullscreenController) == null ? void 0 : f.toggle) == null ? void 0 : m.call(f);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (a = (i = this.surfaceApp) == null ? void 0 : i.unmount) == null || a.call(i), this.surfaceApp = null, (c = (l = this.surfaceHost) == null ? void 0 : l.remove) == null || c.call(l), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var a;
    (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = Lm(n), t.addEventListener("pointerdown", (l) => {
      var c, f, m;
      l.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, l.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(l.clientX, l.clientY, l.pointerId), l.preventDefault(), l.stopPropagation(), (m = l.stopImmediatePropagation) == null || m.call(l));
    }), t.addEventListener("pointermove", (l) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(l.clientX, l.clientY, "pano"), l.preventDefault(), l.stopPropagation(), (c = l.stopImmediatePropagation) == null || c.call(l));
    });
    const i = (l) => {
      var c, f;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, l.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), l.preventDefault(), l.stopPropagation(), (f = l.stopImmediatePropagation) == null || f.call(l));
    };
    t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i), n.addEventListener("wheel", (l) => {
      var c;
      this.controller.applyWheelEvent(l), l.preventDefault(), l.stopPropagation(), (c = l.stopImmediatePropagation) == null || c.call(l);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (l) => {
      var c;
      this.togglePlayback(), l.preventDefault(), l.stopPropagation(), (c = l.stopImmediatePropagation) == null || c.call(l);
    }), n.addEventListener("keydown", (l) => {
      var c;
      B_(l, n) && (this.togglePlayback(), l.preventDefault(), l.stopPropagation(), (c = l.stopImmediatePropagation) == null || c.call(l));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !_p(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), i;
    }, this.node.onMouseDown = function(n, i) {
      var c;
      const a = t.localPoint(i);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const l = t.getLegacyPreviewRect();
      return fh(a.x, a.y, l) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - l.x, a.y - l.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, i) {
      var c;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(i);
      if (!a) return !0;
      const l = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - l.x, a.y - l.y, "pano"), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, i, a) {
      var m, b, v, _, S, I;
      const l = cs(this, n, i, a), c = t.getLegacyPreviewRect();
      if (!l || !fh(l.x, l.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((m = t.view) == null ? void 0 : m.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof i == "number" ? i : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), f && ((v = this.setDirtyCanvas) == null || v.call(this, !0, !1)), (_ = n == null ? void 0 : n.preventDefault) == null || _.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (I = n == null ? void 0 : n.stopImmediatePropagation) == null || I.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, l, c;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - tu * 2), n = Math.max(60, Number(((c = (l = this.node) == null ? void 0 : l.size) == null ? void 0 : c[1]) || 0) - ah - tu);
    return { x: tu, y: ah, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), ch(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: i } = K_(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== i ? (this.canvas.width = n, this.canvas.height = i, !0) : !1;
  }
  refreshImage() {
    var a, l, c;
    const t = Z_(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const m = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, b = () => this.requestDraw();
      f.addEventListener("loadedmetadata", m), f.addEventListener("canplay", m), f.addEventListener("timeupdate", b), f.addEventListener("play", b), f.addEventListener("pause", b), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", m), f.removeEventListener("canplay", m), f.removeEventListener("timeupdate", b), f.removeEventListener("play", b), f.removeEventListener("pause", b);
      };
      return;
    }
    const n = Q_(this.node, this.imageInputName);
    if (!n) {
      (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null, this.imgSrc = n;
    const i = new Image();
    i.onload = () => {
      this.imgSrc === n && (this.img = i, this.requestDraw());
    }, i.onerror = () => {
      this.imgSrc === n && (this.img = null, this.requestDraw());
    }, i.src = n;
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
    var a, l;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), ch(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (l = (a = this.node).setDirtyCanvas) == null || l.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, i, a, l, c, f, m, b, v, _, S, I, x, L, O, z, P, $, E;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (c = (l = this.fullscreenController) == null ? void 0 : l.destroy) == null || c.call(l), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (b = (m = this.surfaceApp) == null ? void 0 : m.unmount) == null || b.call(m), this.surfaceApp = null, (_ = (v = this.surfaceHost) == null ? void 0 : v.remove) == null || _.call(v), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null;
    try {
      (x = (I = this.root) == null ? void 0 : I.remove) == null || x.call(I);
    } catch {
    }
    if (Array.isArray((L = this.node) == null ? void 0 : L.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((D) => D !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((P = (z = (O = this.node) == null ? void 0 : O.widgets) == null ? void 0 : z.find) == null ? void 0 : P.call(z, (D) => (D == null ? void 0 : D.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (E = ($ = this.node.__panoStandaloneCore) == null ? void 0 : $.dispose) == null || E.call($), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function tx(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new ex(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function xp(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[i]) return;
  e[i] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const l = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = l ? l.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const c = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const f = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
}
function xc(e) {
  return !!(e != null && e.prototype);
}
function Qa(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function nx(e, t = {}) {
  xc(e) || tx(e, {
    ...t,
    onOpen: Qa(e, t.onOpen)
  });
}
function rx(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, i = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!xc(e)) {
    ih(e, {
      ...i,
      onOpen: Qa(e, t.onOpen)
    });
    return;
  }
  xp(e, "stickers_node_preview", (a) => {
    ih(a, {
      ...i,
      onOpen: Qa(a, t.onOpen)
    });
  });
}
function ix(e, t = {}) {
  if (!xc(e)) {
    rh(e, {
      ...t,
      onOpen: Qa(e, t.onOpen)
    });
    return;
  }
  xp(e, "cutout_preview", (n) => {
    rh(n, {
      ...t,
      onOpen: Qa(n, t.onOpen)
    });
  });
}
const pn = {
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
}, mr = "pen";
function dh(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function ax(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const l = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function f(b) {
    if (i.splice(0, i.length), a = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((_) => {
      i.push(String(_ || ""));
    }), !i.length)) return;
    const v = Number(b.index);
    Number.isInteger(v) ? v === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, v)) : a = i.length - 1;
  }
  function m(b) {
    i[a] !== b && (i.splice(a + 1), i.push(b), i.length > l && i.shift(), a = i.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      m(String(b || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const b = a - 1;
      return b < 0 || b >= i.length ? null : (a = b, i[a]);
    },
    redo() {
      const b = a + 1;
      return b < 0 || b >= i.length ? null : (a = b, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const b = i.length, v = Math.max(0, b - c), _ = a >= 0 ? Math.max(0, Math.min(a, v)) : v, S = i.slice(_, _ + c), I = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - _));
      return {
        version: 1,
        entries: S,
        index: I
      };
    },
    hydrate: f
  };
}
function ut(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function ox() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function sx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const l = ut(i.z_index ?? i.zIndex, t.length);
    t.push({
      id: String(i.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(l ?? t.length)),
      locked: i.locked === !0
    });
  }
  return t;
}
function lx(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function ux(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = ut(e.t, 0), i = ut(e.widthScale, null), a = ut(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const l = ut(e.u, null), c = ut(e.v, null);
    if (l == null || c == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (l % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, c)),
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const l = ut(e.u, null), c = ut(e.v, null);
    if (l == null || c == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: l,
      v: c,
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function Ho(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const l = ux(a, t);
    if (!l) return null;
    i.push(l);
  }
  return i.length >= n ? i : null;
}
function cx(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const m = Ho(e.points, t, 3);
    return m ? { geometryKind: a, points: m } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const l = Ho(e.points, t, 1);
  if (!l) return null;
  const c = Ho(e.rawPoints, t, 1), f = Ho(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: l,
    rawPoints: c || l.map((m) => ({ ...m })),
    processedPoints: f || l.map((m) => ({ ...m }))
  };
}
function fx(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = lx(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = cx(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const l = ut(e.size, null), c = ut(e.opacity, null);
  if (l == null || c == null) return null;
  const f = String(e.id || "").trim(), m = String(e.actionGroupId || "").trim();
  if (!f || !m) return null;
  const b = ut(e.radiusValue, null), v = String(e.radiusModel || "").trim() || null;
  let _ = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    _ = {
      r: Math.max(0, Math.min(1, ut(S.r, 0))),
      g: Math.max(0, Math.min(1, ut(S.g, 0))),
      b: Math.max(0, Math.min(1, ut(S.b, 0))),
      a: Math.max(0, Math.min(1, ut(S.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: m,
    targetSpace: n,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, l),
    opacity: Math.max(0, Math.min(1, c)),
    hardness: ut(e.hardness, null),
    flow: ut(e.flow, null),
    spacing: ut(e.spacing, null),
    createdAt: Math.trunc(ut(e.createdAt, 0)),
    color: _,
    radiusModel: v,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: a
  };
}
function hh(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = fx(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function dx(e) {
  if (!e || typeof e != "object") return null;
  const t = ut(e.u0, null), n = ut(e.v0, null), i = ut(e.u1, null), a = ut(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const l = (f) => Math.max(0, Math.min(1, f)), c = { u0: l(t), v0: l(n), u1: l(i), v1: l(a) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function hx(e) {
  const t = e || {};
  return {
    du: ut(t.du, 0) ?? 0,
    dv: ut(t.dv, 0) ?? 0,
    rot_deg: ut(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ut(t.scale, 1) ?? 1)
  };
}
function mx(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const l = dx(e.bbox);
  return l ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, ut(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: l,
    rasterDataUrl: a,
    transform: hx(e.transform)
  } : null;
}
function px(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = mx(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function Ba(e) {
  const t = ox();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: sx(e.groups),
    paint: hh(e.paint, "paint"),
    mask: hh(e.mask, "mask"),
    raster_objects: px(e.raster_objects)
  };
}
let Uo = { text: null, parsed: null };
function Yt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Fu(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function gx({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: i = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Yt(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Ba(null),
    painting_layer: null,
    ui_settings: Fu(i),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function bx(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function yx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function vx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function _x(e) {
  return Array.isArray(e) ? e.map((t) => Gm(t)) : [];
}
function xx(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const i = String(t || ""), a = n.find((c) => String((c == null ? void 0 : c.id) || "") === i) || n[0], l = String((a == null ? void 0 : a.id) || "") || null;
  return { shots: [a], selectedShotId: l };
}
function wp(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, i = gx(n), a = String(e || "").trim();
  if (!a) return i;
  try {
    let l = null;
    if (Uo.text === a ? l = Uo.parsed : (l = JSON.parse(a), Uo = { text: a, parsed: l }), !l || typeof l != "object" || Array.isArray(l)) return i;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...i,
      ...l,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: yx(l.assets),
      stickers: vx(l.stickers),
      shots: _x(l.shots),
      painting: Ba(l.painting),
      painting_layer: l.painting_layer && typeof l.painting_layer == "object" ? l.painting_layer : null,
      ui_settings: Fu(l.ui_settings),
      active: l.active && typeof l.active == "object" ? { ...l.active } : { ...i.active }
    };
    return c && (f.ui_settings = Fu({ ...f.ui_settings, ...c })), f.output_preset = bx(
      n.outputPreset,
      Number(f.output_preset || i.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || i.bg_color), f.coverage = Yt(n.coverage), delete f.editor_history, f;
  } catch {
    return Uo = { text: a, parsed: null }, i;
  }
}
function mh(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function ph(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function wx(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: q(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: q(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function gh(e = {}, t = 0) {
  var a;
  const n = String((e == null ? void 0 : e.type) || "");
  if (!n) return null;
  const i = {
    id: String((e == null ? void 0 : e.id) || `${n}_${t}`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    zIndex: Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? t)
  };
  return n === "sticker" ? (i.transform = wx((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function Sx(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return ua({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: ph((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((l, c) => gh(l, c)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = ph((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((l, c) => gh(l, c)).filter(Boolean);
  return ua({
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
function eo(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: q(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: q(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: q(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: q(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function Is(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function Nx(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || bi((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function l(_) {
    var S;
    return JSON.stringify({
      stateRevision: (_ == null ? void 0 : _.stateRevision) || "",
      background: (_ == null ? void 0 : _.background) || null,
      objects: Array.isArray((S = _ == null ? void 0 : _.objectPass) == null ? void 0 : S.objects) ? _.objectPass.objects.map((I) => ({
        id: (I == null ? void 0 : I.id) || "",
        type: (I == null ? void 0 : I.type) || "",
        revision: (I == null ? void 0 : I.revision) || "",
        visible: (I == null ? void 0 : I.visible) !== !1,
        opacity: Number((I == null ? void 0 : I.opacity) ?? 1),
        zIndex: Number((I == null ? void 0 : I.zIndex) ?? 0),
        transform: (I == null ? void 0 : I.transform) || null,
        params: (I == null ? void 0 : I.params) || null
      })) : [],
      overlay: (_ == null ? void 0 : _.overlay) || {}
    });
  }
  function c(_ = {}) {
    const S = Sx(_), I = l(S);
    return a === I || !n.syncState(S) ? !1 : (i = S, a = I, !0);
  }
  function f(_ = {}, S = {}) {
    if (!i) return null;
    const I = eo(_), x = Is(S);
    return n.renderToTarget(t, I, x);
  }
  function m(_, S, I = {}, x = {}) {
    if (!_ || !S || !i) return !1;
    const L = eo(I), O = Is({
      ...x,
      width: Number((S == null ? void 0 : S.w) || (x == null ? void 0 : x.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (x == null ? void 0 : x.height) || 1)
    });
    return n.renderToContext(_, S, L, O);
  }
  function b() {
    var _;
    i = null, a = "", (_ = n.clearState) == null || _.call(n);
  }
  function v() {
    var _;
    b(), (_ = n.dispose) == null || _.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: c,
    renderFrame: f,
    renderToContext: m,
    snapshotScene: () => i,
    clearScene: b,
    dispose: v
  };
}
function Mx(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((l) => {
      l ? i(l) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function kx(e, t = {}) {
  var m, b;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = eo((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((m = t == null ? void 0 : t.camera) == null ? void 0 : m.output) || ((b = t == null ? void 0 : t.view) == null ? void 0 : b.output) || null, a = Is(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), l = e.renderFrame(n, a);
  if (!l) throw new Error("Panorama scene camera render returned null.");
  const c = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return Mx(l, c, f);
}
function Px(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let l = eo((n == null ? void 0 : n.view) || {}), c = !1, f = 0;
  function m() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), I = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), x = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), L = Is({ width: S, height: I, dpr: x });
    return i.width = Math.max(1, Math.round(L.width * L.dpr)), i.height = Math.max(1, Math.round(L.height * L.dpr)), i.style.width = `${L.width}px`, i.style.height = `${L.height}px`, L;
  }
  function b() {
    if (c || !a) return !1;
    const S = m();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      l,
      { ...S, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function v() {
    c || f || (f = requestAnimationFrame(() => {
      f = 0, b();
    }));
  }
  const _ = typeof ResizeObserver == "function" ? new ResizeObserver(() => v()) : null;
  return _ == null || _.observe(t), v(), {
    canvas: i,
    setView(S) {
      l = eo(S || {}), v();
    },
    getView() {
      return { ...l };
    },
    present: b,
    requestRender: v,
    unmount() {
      c = !0, f && cancelAnimationFrame(f), _ == null || _.disconnect(), i.remove();
    }
  };
}
function Ax(e = {}) {
  const t = Nx({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(ir(n), i);
    },
    renderShotToContext(n, i, a, l = {}) {
      return t.renderToContext(n, i, ir(a), l);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? ir(i.shot) : i == null ? void 0 : i.view;
      return Px(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: ir(n.shot) } : n;
      return kx(t, i);
    }
  };
}
function $i(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((l) => String((l == null ? void 0 : l[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function Cx(e = {}) {
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
    qualityLabel: (n.find((i) => i.value === t) || n[1]).label,
    qualityOptions: n.map((i) => ({ ...i, active: i.value === t }))
  };
}
function Tx({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: l,
  hsv01ToRgb: c,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: m
}) {
  var $, E;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", v = {
    visible: b,
    activePane: b ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: b ? !!n : !1,
    pickerHueColor: i({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (D, H) => ({ index: H, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return v;
  const _ = (($ = t.find((D) => a(e.paintColor, D.color))) == null ? void 0 : $.id) || "", S = !_, I = l(e.customPaintColor), x = Math.round(Math.max(0, Math.min(1, Number(((E = e.customPaintColor) == null ? void 0 : E.a) ?? 1))) * 100), L = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), O = e.brushSizes[L] ?? 10, z = m(), P = Array.from({ length: 8 }, (D, H) => e.customPaintHistory[H] || null);
  return {
    ...v,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: _,
    customColorActive: S,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...c(I.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, I.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, I.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, I.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, I.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, I.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, I.h)) * 100}%`,
    alphaValue: x,
    alphaText: `${x}%`,
    historyEntries: P.map((D, H) => ({
      index: H,
      color: D ? { cssColor: i(D, 1) } : null
    })),
    sizeValue: O,
    sizeText: String(O),
    sizeFill: `${Math.max(0, Math.min(100, (O - 1) / 119 * 100))}%`,
    sizeDisabled: z,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function Ix({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function Ex({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: l,
  params: c,
  notes: f,
  visibilityRows: m,
  uiSettings: b,
  normalizeCoverageValue: v
}) {
  return {
    coverage: { value: v(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !i || a === "stroke" || l.length > 1,
      label: "Copy State"
    },
    params: c,
    notes: f,
    paramsDisabled: !i,
    visibilityRows: m,
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function Dx({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: l,
  selectedLocked: c,
  activeAspect: f,
  cutoutAspectOpen: m,
  isExternalSticker: b,
  isStickerHidden: v,
  canRestoreSelectedToInitial: _,
  iconSet: S
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let I = [];
  if (n.length > 1)
    I = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (i === "stroke")
    I = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (I = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back }
    ], b(t) || (I.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: S.duplicate }), I.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: S.replace_image })), b(t)) {
      const D = _(), H = v(t);
      I.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: D ? "Back to initial position" : "Already at initial position",
        icon: S.back_initial,
        disabled: !D
      }), I.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: H ? "Show" : "Hide",
        tip: H ? "Show input image" : "Hide input image",
        icon: H ? S.eye : S.eye_dashed
      });
    }
    I.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? S.lock_open : S.lock_closed }), b(t) || I.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
  } else
    I = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!m,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((D) => ({ value: D, label: D, active: f === D }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: S.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  const x = a.corners.map((D) => ({ x: Number(D == null ? void 0 : D.x), y: Number(D == null ? void 0 : D.y) })).filter((D) => Number.isFinite(D.x) && Number.isFinite(D.y));
  if (!x.length) return { visible: !1, left: 0, top: 0, items: [] };
  const L = x.map((D) => D.x), O = x.map((D) => D.y), z = Math.min(...L), P = Math.max(...L), $ = Math.min(...O), E = Math.max(...O);
  return {
    visible: !0,
    left: (z + P) * 0.5,
    top: E + 18,
    items: I,
    anchor: { minX: z, maxX: P, minY: $, maxY: E }
  };
}
const Ox = { class: "pano-floating-right" }, Fx = ["data-settled"], Rx = ["data-ready", "data-settled"], Lx = ["aria-label", "data-tip"], zx = {
  key: 1,
  class: "pano-camera-preview-label"
}, $x = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe(Ze, null, [
      ie("div", Ox, [
        (Me(!0), Pe(Ze, null, Ft(e.buttons, (i) => (Me(), gi(Mn, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      oi(ie("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ie("div", {
          class: st(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Ot({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = ie("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Me(), Pe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ve(en, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Lx)) : Dt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), Pe("div", zx, lt(e.preview.label || "Preview unavailable"), 1)) : Dt("", !0)
        ], 14, Rx)
      ], 8, Fx), [
        [io, e.preview.visible]
      ])
    ], 64));
  }
}, Vx = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, jx = ["y2", "transform"], Hx = ["transform"], Ux = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, l) => l * 15), i = mt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, l) => oi((Me(), Pe("div", {
      class: st(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Me(), Pe("svg", Vx, [
        l[1] || (l[1] = ie("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Me(!0), Pe(Ze, null, Ft(Rt(n), (c) => (Me(), Pe("line", {
          key: c,
          class: st(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, jx))), 128)),
        ie("g", { transform: i.value }, [...l[0] || (l[0] = [
          ie("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Hx),
        l[2] || (l[2] = ie("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [io, e.model.visible === !0]
    ]);
  }
}, Gx = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: st(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ve(Zm, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ve(Mn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ve(Ux, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Bx = ["aria-label"], Kx = { class: "pano-canvas-confirm-title" }, Wx = { class: "pano-canvas-confirm-text" }, Yx = { class: "pano-canvas-confirm-actions" }, qx = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Xx = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ yn(null), i = /* @__PURE__ */ yn(null);
    let a = null;
    function l() {
      const _ = i.value;
      return _ ? Array.from(_.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function c(_) {
      const S = i.value;
      if (!S) return;
      const I = S.querySelector(`[data-action='${_}']`);
      I instanceof HTMLButtonElement && I.click();
    }
    function f() {
      var L;
      const _ = i.value;
      if (!_) return;
      const S = _.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const x = l()[0] || _;
      (L = x == null ? void 0 : x.focus) == null || L.call(x);
    }
    function m() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function b(_) {
      var z;
      if (_.defaultPrevented) return;
      if (_.key === "Escape") {
        _.preventDefault(), _.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (_.key !== "Tab") return;
      const S = l(), I = i.value;
      if (!S.length) {
        _.preventDefault(), (z = I == null ? void 0 : I.focus) == null || z.call(I);
        return;
      }
      const x = S[0], L = S[S.length - 1], O = document.activeElement;
      if (_.shiftKey) {
        (O === x || O === I || !(I != null && I.contains(O))) && (_.preventDefault(), L.focus());
        return;
      }
      (O === L || !(I != null && I.contains(O))) && (_.preventDefault(), x.focus());
    }
    function v(_) {
      _.target === n.value && c("confirm-cancel");
    }
    return si(() => t.model.visible, (_, S) => {
      if (_) {
        a = document.activeElement, Zu(() => {
          f();
        });
        return;
      }
      S && m();
    }, { immediate: !0 }), Hs(() => {
      m();
    }), (_, S) => e.model.visible === !0 ? (Me(), Pe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Vr(v, ["self"])
    }, [
      ie("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        ie("div", Kx, lt(e.model.title), 1),
        ie("div", Wx, lt(e.model.text), 1),
        ie("div", Yx, [
          S[0] || (S[0] = ie("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ie("button", qx, lt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Bx)
    ], 512)) : Dt("", !0);
  }
}, Jx = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const i = n, a = /* @__PURE__ */ yn(null);
    let l, c = !1;
    function f() {
      if (!c) return { active: !1, intent: void 0 };
      const _ = l;
      return l = void 0, c = !1, { active: !0, intent: _ };
    }
    function m(_) {
      const S = a.value;
      return S instanceof HTMLInputElement ? (l = _, c = !0, S.value = "", S.click(), !0) : !1;
    }
    function b(_) {
      var L, O;
      const { active: S, intent: I } = f();
      if (!S) return;
      const x = ((O = (L = _.target) == null ? void 0 : L.files) == null ? void 0 : O[0]) || null;
      if (x) {
        i("file-selected", { intent: I, file: x });
        return;
      }
      i("file-cancelled", { intent: I });
    }
    function v() {
      const { active: _, intent: S } = f();
      _ && i("file-cancelled", { intent: S });
    }
    return t({ open: m }), (_, S) => (Me(), Pe("input", {
      ref_key: "inputRef",
      ref: a,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: b,
      onCancel: v
    }, null, 544));
  }
}, Zx = ["data-paint-pane"], Qx = ["hidden"], ew = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], tw = ["aria-pressed", "disabled"], nw = ["hidden"], rw = { class: "pano-paint-color-pop-head" }, iw = { class: "pano-paint-color-field" }, aw = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, ow = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, sw = { class: "pano-paint-color-field" }, lw = { class: "pano-paint-alpha-wrap" }, uw = ["value"], cw = { "data-paint-alpha-value": "" }, fw = ["hidden"], dw = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, hw = ["data-paint-history-index", "aria-label", "disabled"], mw = ["data-paint-footer"], pw = ["data-paint-group"], gw = ["hidden"], bw = ["value", "disabled"], yw = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, vw = ["hidden"], _w = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(i) {
      return { "--swatch": String((i == null ? void 0 : i.cssColor) || "") };
    }
    function n(i) {
      return i ? { "--swatch": String(i.cssColor || "") } : {};
    }
    return (i, a) => (Me(), Pe("div", {
      class: st(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Me(!0), Pe(Ze, null, Ft(e.panes, (l) => {
        var c;
        return Me(), Pe("div", {
          key: l.key,
          class: st(["pano-paint-pane", { "is-active": e.state.activePane === l.key }]),
          "data-paint-pane": l.key
        }, [
          l.showColorFloat ? (Me(), Pe("div", {
            key: 0,
            class: st(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Me(!0), Pe(Ze, null, Ft(e.paintSwatches, (f) => (Me(), Pe("button", {
              key: f.id,
              class: st(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Ot(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, ew))), 128)),
            ie("button", {
              class: st(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Ot({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, tw),
            ie("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Ot({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              ie("div", rw, [
                ie("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ot({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ie("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ie("div", iw, [
                ie("div", aw, [
                  ie("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ot({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ie("div", ow, [
                  ie("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ot({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ie("label", sw, [
                a[1] || (a[1] = ie("span", null, "Opacity", -1)),
                ie("div", lw, [
                  ie("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, uw),
                  ie("span", cw, lt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ie("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ie("div", dw, [
                  (Me(!0), Pe(Ze, null, Ft(e.state.historyEntries || [], (f) => (Me(), Pe("button", {
                    key: f.index,
                    class: st(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Ot(n(f.color))
                  }, null, 14, hw))), 128))
                ])
              ], 8, fw)
            ], 12, nw)
          ], 10, Qx)) : Dt("", !0),
          ie("div", {
            class: "pano-paint-footer",
            "data-paint-footer": l.footer
          }, [
            ie("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": l.group
            }, [
              (Me(!0), Pe(Ze, null, Ft(l.tools, (f) => {
                var m;
                return Me(), gi(Mn, {
                  key: `${l.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((m = e.state.activeTools) == null ? void 0 : m[l.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, pw),
            ie("div", {
              class: st(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ie("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Ot({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, bw),
              ie("span", yw, lt(e.state.sizeText || "10"), 1)
            ], 10, gw),
            ie("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[l.key]) ?? !l.clearHidden)
            }, [
              Ve(Mn, {
                icon: Rt(De).clear,
                label: l.clearLabel,
                tip: l.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": l.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, vw)
          ], 8, mw)
        ], 10, Zx);
      }), 128))
    ], 2));
  }
}, xw = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ yn(null), i = /* @__PURE__ */ yn(null), a = /* @__PURE__ */ yn(null);
    function l() {
      return {
        cursor: n.value,
        sizePreview: i.value,
        sizeSample: a.value
      };
    }
    return t({ getRefs: l }), (c, f) => (Me(), Pe(Ze, null, [
      ie("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      ie("div", {
        ref_key: "sizePreviewRef",
        ref: i,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        ie("div", {
          ref_key: "sizeSampleRef",
          ref: a,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, ww = {
  key: 0,
  class: "pano-cutout-menu"
}, Sw = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, Nw = ["data-aspect"], Mw = ["data-action", "aria-label", "data-tip", "disabled"], kw = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Ot({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Me(!0), Pe(Ze, null, Ft(e.model.items || [], (i) => (Me(), Pe(Ze, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Me(), Pe("div", ww, [
          ie("button", Sw, [
            Ve(en, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          ie("div", {
            class: st(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Me(!0), Pe(Ze, null, Ft(i.choices || [], (a) => (Me(), Pe("button", {
              key: a.value,
              class: st(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, lt(a.label), 11, Nw))), 128))
          ], 2)
        ])) : (Me(), Pe("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0
        }, [
          Ve(en, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, Mw))
      ], 64))), 128))
    ], 4));
  }
}, Pw = {
  class: "pano-side",
  "data-side": ""
}, Aw = { class: "pano-side-head" }, Cw = { class: "pano-side-title" }, Tw = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Iw = {
  key: 0,
  class: "pano-side-scroll"
}, Ew = { class: "pano-inspector" }, Dw = { class: "pano-ui-row pano-coverage-row" }, Ow = ["data-selected"], Fw = ["aria-pressed", "disabled"], Rw = ["aria-pressed", "disabled"], Lw = {
  key: 0,
  class: "pano-section-title"
}, zw = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, $w = {
  class: "pano-picker",
  "data-picker": "selection"
}, Vw = ["disabled"], jw = { class: "pano-picker-label" }, Hw = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Uw = ["hidden"], Gw = ["data-selection-id"], Bw = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Kw = {
  key: 2,
  class: "pano-state-actions"
}, Ww = ["disabled"], Yw = ["data-key"], qw = ["min", "max", "step", "value", "disabled", "data-param-key"], Xw = ["min", "max", "step", "value", "disabled", "data-param-key"], Jw = { class: "pano-visibility-section" }, Zw = { class: "pano-visibility-stack" }, Qw = ["data-visibility-row"], eS = { class: "pano-visibility-name" }, tS = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, nS = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], rS = ["open"], iS = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, aS = { class: "pano-ui-settings-body" }, oS = { class: "pano-ui-row" }, sS = ["data-selected"], lS = ["aria-pressed"], uS = ["aria-pressed"], cS = { class: "pano-ui-row" }, fS = ["data-selected"], dS = ["aria-pressed"], hS = ["aria-pressed"], mS = { class: "pano-ui-row" }, pS = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, gS = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, bS = { class: "pano-picker-label" }, yS = ["hidden"], vS = ["data-quality"], _S = {
  key: 1,
  class: "pano-side-footer"
}, xS = ["data-action"], wS = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = mt(() => {
      const l = t.model;
      return !l || typeof l != "object" ? !1 : Object.keys(l).length > 0 && !!l.coverage;
    });
    function i(l) {
      return { "--v": `${Number((l == null ? void 0 : l.fillPct) || 0)}%` };
    }
    function a(l, c) {
      return (c == null ? void 0 : c.paramsDisabled) === !0 || (l == null ? void 0 : l.enabled) === !1;
    }
    return (l, c) => {
      var f, m, b, v, _;
      return Me(), Pe("div", Pw, [
        ie("div", Aw, [
          ie("div", Cw, [
            ie("span", Tw, [
              Ve(en, {
                icon: Rt(De).globe
              }, null, 8, ["icon"])
            ]),
            ie("span", null, lt(e.nodeTitle), 1)
          ]),
          c[0] || (c[0] = ie("div", { class: "pano-side-actions" }, null, -1))
        ]),
        c[13] || (c[13] = ie("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), Pe("div", Iw, [
          ie("div", Ew, [
            c[12] || (c[12] = ie("div", { class: "pano-section-title" }, [
              ie("span", null, "Scene")
            ], -1)),
            ie("div", Dw, [
              c[1] || (c[1] = ie("label", null, "Coverage", -1)),
              ie("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((f = e.model.coverage) == null ? void 0 : f.value) === 180 ? "1" : "0"
              }, [
                ie("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((m = e.model.coverage) == null ? void 0 : m.value) === 360 ? "true" : "false",
                  disabled: ((b = e.model.coverage) == null ? void 0 : b.disabled) === !0
                }, "360", 8, Fw),
                ie("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "180", 8, Rw)
              ], 8, Ow)
            ]),
            e.model.transformTitle !== !1 ? (Me(), Pe("div", Lw, [...c[2] || (c[2] = [
              ie("span", null, "Transform", -1)
            ])])) : Dt("", !0),
            e.model.selectionPicker ? (Me(), Pe("div", zw, [
              ie("label", null, lt(e.model.selectionPicker.label), 1),
              ie("div", $w, [
                ie("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ie("span", jw, [
                    e.model.selectionPicker.currentIcon ? (Me(), Pe("span", Hw, [
                      Ve(en, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Dt("", !0),
                    ie("span", null, lt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  c[3] || (c[3] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Vw),
                ie("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Me(!0), Pe(Ze, null, Ft(e.model.selectionPicker.items || [], (S) => (Me(), Pe("button", {
                    key: S.id,
                    type: "button",
                    class: st(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Me(), Pe("span", Bw, [
                      Ve(en, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Dt("", !0),
                    ie("span", null, lt(S.label), 1)
                  ], 10, Gw))), 128))
                ], 8, Uw)
              ])
            ])) : Dt("", !0),
            e.model.copyStateButton ? (Me(), Pe("div", Kw, [
              ie("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ve(en, {
                  icon: Rt(De).copy
                }, null, 8, ["icon"]),
                ie("span", null, lt(e.model.copyStateButton.label), 1)
              ], 8, Ww)
            ])) : Dt("", !0),
            ie("div", {
              class: st(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Me(!0), Pe(Ze, { key: 0 }, Ft(e.model.notes, (S) => (Me(), Pe("div", {
                key: S,
                class: "pano-param-note"
              }, lt(S), 1))), 128)) : (Me(!0), Pe(Ze, { key: 1 }, Ft(e.model.params || [], (S) => (Me(), Pe("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                ie("label", null, lt(S.label), 1),
                ie("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: a(S, e.model),
                  style: Ot(i(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, qw),
                ie("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: a(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, Xw)
              ], 8, Yw))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), Pe(Ze, { key: 3 }, [
              c[5] || (c[5] = ie("div", { class: "pano-divider" }, null, -1)),
              ie("div", Jw, [
                c[4] || (c[4] = ie("div", { class: "pano-section-title" }, [
                  ie("span", null, "Layers")
                ], -1)),
                ie("div", Zw, [
                  (Me(!0), Pe(Ze, null, Ft(e.model.visibilityRows, (S) => (Me(), Pe("div", {
                    key: S.key,
                    class: st(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    ie("span", eS, [
                      ie("span", tS, [
                        Ve(en, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      ie("span", null, lt(S.label), 1)
                    ]),
                    ie("button", {
                      class: st(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      Ve(en, {
                        icon: S.visible === !0 ? Rt(De).eye : Rt(De).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, nS)
                  ], 10, Qw))), 128))
                ])
              ])
            ], 64)) : Dt("", !0),
            e.model.uiSettings ? (Me(), Pe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ie("summary", null, [
                c[6] || (c[6] = ie("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ie("span", iS, [
                  Ve(en, {
                    icon: Rt(De).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ie("div", aS, [
                ie("div", oS, [
                  c[7] || (c[7] = ie("label", null, "Drag X", -1)),
                  ie("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, lS),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, uS)
                  ], 8, sS)
                ]),
                ie("div", cS, [
                  c[8] || (c[8] = ie("label", null, "Drag Y", -1)),
                  ie("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, dS),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, hS)
                  ], 8, fS)
                ]),
                ie("div", mS, [
                  c[10] || (c[10] = ie("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ie("div", pS, [
                    ie("button", gS, [
                      ie("span", bS, lt(e.model.uiSettings.qualityLabel), 1),
                      c[9] || (c[9] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ie("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Me(!0), Pe(Ze, null, Ft(e.model.uiSettings.qualityOptions || [], (S) => (Me(), Pe("button", {
                        key: S.value,
                        type: "button",
                        class: st(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, lt(S.label), 11, vS))), 128))
                    ], 8, yS)
                  ])
                ]),
                c[11] || (c[11] = ie("div", { class: "pano-ui-row" }, [
                  ie("span"),
                  ie("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, rS)) : Dt("", !0)
          ])
        ])) : Dt("", !0),
        (e.model.footerButtons || []).length ? (Me(), Pe("div", _S, [
          (Me(!0), Pe(Ze, null, Ft(e.model.footerButtons, (S) => (Me(), Pe("button", {
            key: S.action,
            class: st(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, lt(S.label), 11, xS))), 128))
        ])) : Dt("", !0)
      ]);
    };
  }
}, SS = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: st(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Ot({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, lt(e.model.text || ""), 7));
  }
}, NS = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, MS = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", NS, [
      (Me(!0), Pe(Ze, null, Ft(e.buttons, (i) => oi((Me(), gi(Mn, {
        key: i.key,
        "extra-class": {
          active: i.active,
          "pano-btn-icon-accent": i.accent
        },
        icon: i.icon,
        label: i.label,
        tip: i.tip,
        pressed: i.pressed,
        attrs: { [i.attr]: i.value, disabled: i.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [io, i.visible !== !1]
      ])), 128))
    ]));
  }
}, kS = ["data-video-ready"], PS = { class: "pano-video-transport-shell" }, AS = { class: "pano-video-controls-left" }, CS = { class: "pano-video-filmstrip" }, TS = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, IS = ["src", "onLoad"], ES = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, DS = ["max", "value", "disabled"], OS = { class: "pano-video-controls-right" }, FS = ["data-has-audio"], RS = { class: "pano-video-volume-pop" }, LS = ["value", "disabled"], zS = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = mt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.playing) === !0 ? "Pause" : "Play";
    }), i = mt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.playing) === !0 ? "Pause video" : "Play video";
    }), a = mt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.playing) === !0 ? De.pause : De.play;
    }), l = mt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = mt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = mt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.loop) === !1 ? De.loop_off : De.loop;
    }), m = mt(() => {
      var D, H;
      return ((D = t.state) == null ? void 0 : D.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = mt(() => {
      var D, H, Z;
      return ((D = t.state) == null ? void 0 : D.hasAudio) !== !0 ? De.volume : ((H = t.state) == null ? void 0 : H.muted) === !0 || Number(((Z = t.state) == null ? void 0 : Z.volume) ?? 1) <= 0 ? De.volume_muted : De.volume2;
    }), v = mt(() => {
      var D;
      return Math.max(0, Math.min(100, Number(((D = t.state) == null ? void 0 : D.progressPct) || 0)));
    }), _ = mt(() => ({ left: `${v.value}%` })), S = mt(() => {
      var X, W;
      const D = (X = t.state) == null ? void 0 : X.volumePct, H = Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) * 100, Z = Number(D ?? H ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, Z))}%`
      };
    }), I = mt(() => {
      var Z, X;
      const H = [
        String(((Z = t.state) == null ? void 0 : Z.currentTimeLabel) || "0:00"),
        String(((X = t.state) == null ? void 0 : X.durationLabel) || "0:00")
      ].reduce((W, A) => Math.max(W, A.length), 4);
      return `${Math.max(4, H)}ch`;
    }), x = mt(() => ({ "--pano-video-time-ch": I.value })), L = mt(() => {
      var Z, X;
      const D = Array.isArray((Z = t.state) == null ? void 0 : Z.thumbnails) ? t.state.thumbnails : [];
      if (D.length) return D;
      const H = Math.max(7, Number(((X = t.state) == null ? void 0 : X.thumbnailCount) || 9));
      return Array.from({ length: H }, (W, A) => ({
        id: `placeholder-${A}`,
        src: "",
        label: ""
      }));
    }), O = /* @__PURE__ */ yn(/* @__PURE__ */ new Set()), z = (D) => String((D == null ? void 0 : D.id) || (D == null ? void 0 : D.src) || (D == null ? void 0 : D.label) || ""), P = (D) => O.value.has(z(D)), $ = (D) => {
      const H = new Set(O.value);
      H.add(z(D)), O.value = H;
    };
    si(L, (D) => {
      const H = new Set(D.map(z)), Z = /* @__PURE__ */ new Set();
      for (const X of O.value)
        H.has(X) && Z.add(X);
      O.value = Z;
    }, { immediate: !0 });
    const E = mt(() => {
      var D;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((D = t.state) == null ? void 0 : D.shellMaxWidthPx) || 640))}px`
      };
    });
    return (D, H) => (Me(), Pe("div", {
      class: st(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Ot(E.value)
    }, [
      H[1] || (H[1] = ie("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ie("div", PS, [
        ie("div", AS, [
          Ve(Mn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: a.value,
            label: n.value,
            tip: i.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ie("div", {
            class: "pano-video-time pano-video-time-start",
            style: Ot(x.value)
          }, lt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ie("div", CS, [
          ie("div", TS, [
            (Me(!0), Pe(Ze, null, Ft(L.value, (Z) => (Me(), Pe("div", {
              key: z(Z),
              class: st(["pano-video-thumb", {
                "is-placeholder": !Z.src,
                "is-loaded": Z.src && P(Z)
              }])
            }, [
              Z.src ? (Me(), Pe("img", {
                key: 0,
                src: Z.src,
                alt: "",
                draggable: "false",
                onLoad: (X) => $(Z)
              }, null, 40, IS)) : (Me(), Pe("span", ES))
            ], 2))), 128))
          ]),
          ie("div", {
            class: "pano-video-playhead",
            style: Ot(_.value),
            "aria-hidden": "true"
          }, [...H[0] || (H[0] = [
            ie("span", { class: "pano-video-playhead-line" }, null, -1),
            ie("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ie("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, DS)
        ]),
        ie("div", OS, [
          ie("div", {
            class: "pano-video-time pano-video-time-end",
            style: Ot(x.value)
          }, lt(e.state.durationLabel || "0:00"), 5),
          Ve(Mn, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: l.value,
            tip: c.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          ie("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ie("div", RS, [
              ie("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Ot(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, LS)
            ]),
            Ve(Mn, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: m.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, FS)
        ])
      ])
    ], 14, kS));
  }
}, $S = { class: "pano-floating-top" }, VS = ["data-selected", "data-view-count"], jS = ["data-view", "aria-pressed", "aria-label", "disabled"], HS = { class: "label" }, US = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Me(), Pe("div", $S, [
        ie("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), Pe(Ze, null, Ft(e.buttons, (a) => oi((Me(), Pe("button", {
            key: a.key,
            class: st(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            Ve(en, {
              icon: a.icon
            }, null, 8, ["icon"]),
            ie("span", HS, lt(a.label), 1)
          ], 10, jS)), [
            [io, a.visible !== !1]
          ])), 128))
        ], 8, VS)
      ]);
    };
  }
};
function Sp(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: De.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: De.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: De.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: De.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: De.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: De.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: De.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: De.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: De.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: De.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: De.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: De.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: De.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: De.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: De.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: De.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: De.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: De.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: De.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: De.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: De.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: De.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: De.lasso_tool }
        ]
      }
    ]
  };
}
const GS = ["aria-label"], BS = { class: "pano-stage-wrap" }, KS = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, WS = {
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
    const i = e, a = n;
    let l = "", c = !1, f = null;
    const m = /* @__PURE__ */ yn(null), b = /* @__PURE__ */ yn(null), v = /* @__PURE__ */ yn(null);
    function _() {
      var A, Q;
      return ((Q = (A = v.value) == null ? void 0 : A.getRefs) == null ? void 0 : Q.call(A)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(A) {
      var Q, ae;
      return ((ae = (Q = b.value) == null ? void 0 : Q.open) == null ? void 0 : ae.call(Q, A)) === !0;
    }
    function I(A) {
      a("image-file-selected", A);
    }
    function x(A) {
      a("image-file-cancelled", A);
    }
    t({ getPaintOverlayRefs: _, openImagePicker: S });
    const L = mt(() => i.readOnly === !0), O = mt(() => i.shellPreset || Sp(i.type)), z = mt(() => {
      var Q, ae, fe;
      const A = String((((Q = i.uiState) == null ? void 0 : Q.stageStatus) === "failed" ? (ae = i.uiState) == null ? void 0 : ae.stageStatusDetail : (fe = i.uiState) == null ? void 0 : fe.stageWarningDetail) ?? "");
      return A === "background" ? "Background preview unavailable. Re-run the node to refresh it." : A === "stickers" ? "One or more sticker previews are unavailable." : A === "frame" ? "The editor hit a rendering error. Check the browser console for details." : A.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), P = mt(() => {
      var Q;
      const A = Array.isArray((Q = O.value) == null ? void 0 : Q.floatingButtons) ? O.value.floatingButtons.slice() : [];
      return L.value && A.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: De.fullscreen
      }), A;
    });
    function $() {
      const A = m.value;
      return A ? Array.from(A.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((Q) => Q instanceof HTMLElement ? !Q.hidden && Q.tabIndex >= 0 && Q.offsetParent !== null : !1) : [];
    }
    function E() {
      var ae;
      const Q = $()[0] || m.value;
      (ae = Q == null ? void 0 : Q.focus) == null || ae.call(Q);
    }
    function D() {
      var A;
      f != null && f.isConnected && ((A = f.focus) == null || A.call(f)), f = null;
    }
    function H(A) {
      var Q, ae, fe, me;
      if (!A.defaultPrevented) {
        if (A.key === "Tab") {
          const ee = $();
          if (!ee.length) {
            A.preventDefault(), (ae = (Q = m.value) == null ? void 0 : Q.focus) == null || ae.call(Q);
            return;
          }
          const ue = ee[0], k = ee[ee.length - 1], de = document.activeElement;
          if (A.shiftKey) {
            (de === ue || de === m.value || !((fe = m.value) != null && fe.contains(de))) && (A.preventDefault(), k.focus());
            return;
          }
          (de === k || !((me = m.value) != null && me.contains(de))) && (A.preventDefault(), ue.focus());
          return;
        }
        A.key === "Escape" && a("close");
      }
    }
    function Z() {
      c || (l = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function X() {
      c && (document.body.style.overflow = l, c = !1);
    }
    function W(A) {
      document.removeEventListener("keydown", H), A ? (f || (f = document.activeElement), Z(), document.addEventListener("keydown", H), Zu(() => {
        E();
      })) : (X(), D());
    }
    return tc(() => {
      W(i.open);
    }), Hs(() => {
      X(), document.removeEventListener("keydown", H), D();
    }), si(() => i.open, (A) => {
      W(A);
    }), (A, Q) => e.open ? (Me(), Pe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: Q[0] || (Q[0] = Vr((ae) => a("close"), ["self"]))
    }, [
      ie("section", {
        ref_key: "modalRef",
        ref: m,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ie("div", BS, [
          Q[1] || (Q[1] = ie("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          Q[2] || (Q[2] = ie("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          Q[3] || (Q[3] = ie("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Me(), Pe("div", KS, lt(z.value), 1)) : Dt("", !0),
          Q[4] || (Q[4] = ie("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            ie("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          Ve(xw, {
            ref_key: "paintOverlaysRef",
            ref: v
          }, null, 512),
          Ve(Jx, {
            ref_key: "imageFilePickerRef",
            ref: b,
            onFileSelected: I,
            onFileCancelled: x
          }, null, 512),
          L.value ? Dt("", !0) : (Me(), Pe(Ze, { key: 1 }, [
            Ve(MS, {
              buttons: e.uiState.toolButtons || O.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Ve(Gx, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            Ve(_w, {
              "paint-swatches": e.paintSwatches,
              panes: O.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Ve(zS, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          Ve(US, {
            buttons: e.uiState.viewButtons || O.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Ve($x, {
            buttons: e.uiState.floatingButtons || P.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Ve(kw, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Ve(SS, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Ve(Xx, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Dt("", !0) : (Me(), gi(wS, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, GS)
    ])) : Dt("", !0);
  }
}, Qn = "loading", fa = "ready", nr = "failed";
function Np(e, t = "") {
  return e && (e.__panoLoadState = Qn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Mp(e, t = "") {
  return e && (e.__panoLoadState = fa, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function kp(e, t = "") {
  return e && (e.__panoLoadState = nr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Ru(e, t) {
  return e ? e.__panoLoadState === nr ? nr : typeof t == "function" && t(e) ? fa : Qn : fa;
}
function Lu(e) {
  return Ru(e) === nr;
}
function YS({ presented: e, background: t = fa, stickers: n = [] } = {}) {
  if (!e) return { status: Qn, detail: "boot" };
  const i = Array.isArray(n) ? n : [], a = t === Qn, l = i.includes(Qn);
  if (a && l) return { status: Qn, detail: "mixed" };
  if (a) return { status: Qn, detail: "background" };
  if (l) return { status: Qn, detail: "stickers" };
  const c = t === nr, f = i.includes(nr);
  return c && f ? { status: nr, detail: "mixed" } : c ? { status: nr, detail: "background" } : f ? { status: nr, detail: "stickers" } : { status: fa, detail: "" };
}
function Vi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const i = new URLSearchParams();
  i.set("filename", n), i.set("type", String(t.type || "output")), t.subfolder && i.set("subfolder", String(t.subfolder));
  const a = `/view?${i.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(a) : a;
}
function bh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function qS(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function yh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function XS(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = c ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(c.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = qS(e == null ? void 0 : e.graph, n)), i;
}
function JS(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function ZS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  return i.length ? { filename: String(i.pop() || "").trim(), subfolder: i.join("/") } : { filename: "", subfolder: "" };
}
function QS(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const i of t)
    n ^= i.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function eN({ app: e, api: t, ImageCtor: n, imageState: i } = {}) {
  const a = (E) => {
    if (!E) return "";
    if (typeof E == "string") return String(E || "").trim();
    if (Array.isArray(E)) {
      if (E.length === 0) return "";
      if (E.length === 1) return a(E[0]);
      const D = String(E[0] || "").trim();
      if (D)
        return Vi(t, {
          filename: D,
          subfolder: String(E[1] || "").trim(),
          type: String(E[2] || "output").trim() || "output"
        });
      for (const H of E) {
        const Z = a(H);
        if (Z) return Z;
      }
      return "";
    }
    return typeof (E == null ? void 0 : E.src) == "string" && E.src ? E.src : typeof (E == null ? void 0 : E.url) == "string" && E.url ? E.url : Vi(t, E);
  }, l = (E) => {
    if (!E || typeof E != "object") return "";
    const D = String(E.type || "").trim().toLowerCase();
    if (D === "dataurl") return String(E.value || "");
    if (D !== "comfy_image") return "";
    const H = String(E.filename || "").trim();
    return H ? Vi(t, {
      filename: H,
      subfolder: String(E.subfolder || ""),
      type: String(E.storage || "input")
    }) : "";
  }, c = (E) => {
    const D = e == null ? void 0 : e.nodeOutputs;
    if (!D || E == null) return null;
    const H = String(E);
    return D instanceof Map ? D.get(E) || D.get(H) || D.get(Number(H)) || null : D[E] || D[H] || null;
  }, f = (E, D) => {
    var Z;
    const H = c(E == null ? void 0 : E.id);
    return Array.isArray((Z = H == null ? void 0 : H.ui) == null ? void 0 : Z[D]) ? H.ui[D] : Array.isArray(H == null ? void 0 : H[D]) ? H[D] : [];
  }, m = (E, D) => {
    const H = c(E == null ? void 0 : E.id);
    return H != null && H.ui && Object.prototype.hasOwnProperty.call(H.ui, D) ? H.ui[D] : H && Object.prototype.hasOwnProperty.call(H, D) ? H[D] : null;
  }, b = (E, D) => {
    const H = m(E, "pano_sticker_input_state_hash"), Z = Array.isArray(H) ? H[0] : H;
    return String(Z ?? "").trim() || QS(D);
  }, v = (E) => {
    const D = [], H = /* @__PURE__ */ new Set();
    for (const Z of E || []) {
      const X = a(Z);
      !X || H.has(X) || (H.add(X), D.push(X));
    }
    return D;
  }, _ = (E, D) => {
    var X;
    const H = [];
    Array.isArray(E == null ? void 0 : E.images) && E.images.length && H.push(E.images), Array.isArray((X = E == null ? void 0 : E.ui) == null ? void 0 : X.images) && E.ui.images.length && H.push(E.ui.images);
    const Z = [];
    for (const W of H)
      D >= 0 && D < W.length && Z.push(W[D]), Z.push(...W);
    return Z;
  }, S = (E, D) => {
    var Se;
    const H = String(D || "").trim();
    if (!H) return { src: "", sourceType: "", inputName: "" };
    const Z = Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs : [], X = Z.findIndex((ke) => String((ke == null ? void 0 : ke.name) || "") === H);
    if (X < 0) return { src: "", sourceType: "", inputName: H };
    const W = Z[X], A = W == null ? void 0 : W.link;
    if (A == null) return { src: "", sourceType: "", inputName: H };
    const { originId: Q, originSlot: ae } = yh(bh(E == null ? void 0 : E.graph, A));
    if (Q == null) return { src: "", sourceType: "", inputName: H };
    const fe = XS(E, X, Q);
    if (!fe) return { src: "", sourceType: "", inputName: H };
    const me = Number(ae || 0);
    let ee = [];
    try {
      ee = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(fe) || [] : [];
    } catch {
      ee = [];
    }
    if (Array.isArray(ee) && ee.length) {
      const ke = [];
      me >= 0 && me < ee.length && ke.push(ee[me]), ke.push(...ee);
      const B = v(ke);
      if (B.length)
        return { src: B[0], srcCandidates: B, sourceType: "appNodeImageUrls", inputName: H };
    }
    const ue = v(_(c((fe == null ? void 0 : fe.id) ?? Q), me));
    if (ue.length)
      return { src: ue[0], srcCandidates: ue, sourceType: "nodeOutputs", inputName: H };
    const k = Array.isArray(fe == null ? void 0 : fe.imgs) ? fe.imgs : [];
    if (k.length) {
      const ke = [];
      me >= 0 && me < k.length && ke.push(k[me]), ke.push(...k);
      const B = v(ke);
      if (B.length)
        return { src: B[0], srcCandidates: B, sourceType: "nodeImgs", inputName: H };
    }
    const de = (Se = fe == null ? void 0 : fe.widgets) == null ? void 0 : Se.find((ke) => String((ke == null ? void 0 : ke.name) || "").toLowerCase() === "image");
    if (de) {
      let ke = a(de.value);
      if (ke && !ke.includes("/") && !ke.includes(":") && (fe.comfyClass === "LoadImage" || fe.type === "LoadImage") && (ke = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(ke)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(ke)}&type=input&subfolder=`), ke) return { src: ke, sourceType: "widget", inputName: H };
    }
    return { src: "", sourceType: "", inputName: H };
  }, I = (E, D = []) => {
    const H = Array.isArray(D) ? D : [D];
    for (const Z of H) {
      const X = S(E, Z);
      if (String((X == null ? void 0 : X.src) || "").trim()) return X;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, x = (E) => {
    const D = String(E || "").trim();
    if (!D) return [];
    if (JS(D)) return [D];
    const { filename: H, subfolder: Z } = ZS(D);
    return H ? v([
      Vi(t, { filename: H, subfolder: Z, type: "temp" }),
      Vi(t, { filename: H, subfolder: Z, type: "output" }),
      Vi(t, { filename: H, subfolder: Z, type: "input" }),
      D
    ]) : [D];
  };
  return {
    assetSource: l,
    clearFailedLinkedImages: (E) => {
      var D, H;
      try {
        (H = (D = E == null ? void 0 : E.__panoLinkedInputImageCache) == null ? void 0 : D.forEach) == null || H.call(D, (Z, X, W) => {
          var A;
          Z != null && Z.img && ((A = i == null ? void 0 : i.isImageLoadFailed) != null && A.call(i, Z.img)) && W.delete(X);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (E, D) => {
      var H;
      (H = E == null ? void 0 : E.delete) == null || H.call(E, `__ui__${String(D || "")}`);
    },
    linkedValue: (E, D) => {
      var W, A, Q, ae;
      const H = String(D || ""), Z = Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs.find((fe) => String((fe == null ? void 0 : fe.name) || "") === H) : null;
      if ((Z == null ? void 0 : Z.link) != null) {
        const { originId: fe, originSlot: me } = yh(bh(E == null ? void 0 : E.graph, Z.link)), ee = c(fe), ue = [
          ee == null ? void 0 : ee.output,
          ee == null ? void 0 : ee.result,
          (W = ee == null ? void 0 : ee.data) == null ? void 0 : W.output,
          (A = ee == null ? void 0 : ee.data) == null ? void 0 : A.result,
          (Q = ee == null ? void 0 : ee.ui) == null ? void 0 : Q.output,
          (ae = ee == null ? void 0 : ee.ui) == null ? void 0 : ae.result
        ];
        for (const k of ue) {
          if (!Array.isArray(k)) continue;
          const de = k[Number(me || 0)];
          if (typeof de == "string" && de.trim()) return de;
        }
      }
      const X = Array.isArray(E == null ? void 0 : E.widgets) ? E.widgets.find((fe) => String((fe == null ? void 0 : fe.name) || "") === H) : null;
      return String((X == null ? void 0 : X.value) || "");
    },
    loadPreferredExactLinkedImage: (E, D = [], H = null, Z = "") => {
      var Re;
      const X = Array.isArray(D) ? D : [D], W = I(E, X), Q = (Array.isArray(W == null ? void 0 : W.srcCandidates) && W.srcCandidates.length ? W.srcCandidates : [W == null ? void 0 : W.src]).map((Je) => String(Je || "").trim()).filter(Boolean);
      if (!Q.length) return null;
      const ae = v(Q.flatMap((Je) => x(Je)));
      if (!ae.length) return null;
      E.__panoLinkedInputImageCache || (E.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const fe = String(Z || X.join("|") || "image_exact"), me = Q.join(`
`), ee = E.__panoLinkedInputImageCache.get(fe);
      if (ee && ee.srcRaw === me && ee.img) return ee.img;
      const ue = n || globalThis.Image;
      if (typeof ue != "function") return null;
      const k = new ue();
      (Re = i == null ? void 0 : i.markImageLoading) == null || Re.call(i, k, me);
      const de = { srcRaw: me, resolvedSrc: "", img: k };
      E.__panoLinkedInputImageCache.set(fe, de);
      let Se = -1;
      const ke = (Je) => {
        var nt, gt, Ge;
        Je === "ready" ? (nt = i == null ? void 0 : i.markImageReady) == null || nt.call(i, k, me) : (gt = i == null ? void 0 : i.markImageFailed) == null || gt.call(i, k, me), H == null || H(k), (Ge = E.setDirtyCanvas) == null || Ge.call(E, !0, !0);
      }, B = () => {
        if (Se += 1, Se >= ae.length) {
          ke("failed");
          return;
        }
        de.resolvedSrc = ae[Se], k.src = de.resolvedSrc;
      };
      return k.onload = () => ke("ready"), k.onerror = () => {
        if (Se + 1 < ae.length) {
          B();
          return;
        }
        ke("failed");
      }, B(), k;
    },
    output: c,
    resolvePreferredExactLinkedSource: I,
    source: a,
    uiImage: (E, D, H, Z = null) => {
      var me, ee, ue;
      const X = f(E, D)[0] || null, W = a(X);
      if (!W) return null;
      const A = `__ui__${D}`, Q = (me = H == null ? void 0 : H.get) == null ? void 0 : me.call(H, A);
      if (Q && Q.__panoSrc === W) return Q;
      const ae = n || globalThis.Image;
      if (typeof ae != "function") return null;
      const fe = new ae();
      return fe.__panoSrc = W, (ee = i == null ? void 0 : i.markImageLoading) == null || ee.call(i, fe, W), fe.onload = () => {
        var k;
        (k = i == null ? void 0 : i.markImageReady) == null || k.call(i, fe, W), Z == null || Z(fe);
      }, fe.onerror = () => {
        var k;
        (k = i == null ? void 0 : i.markImageFailed) == null || k.call(i, fe, W), Z == null || Z(fe);
      }, fe.src = W, (ue = H == null ? void 0 : H.set) == null || ue.call(H, A, fe), fe;
    },
    uiList: f,
    uiValue: m
  };
}
const Es = "state_json";
function Nr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((i) => (i == null ? void 0 : i.name) === t)) || null;
}
function tN(e) {
  var c, f;
  const t = Nr(e, Es);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const i = wp(n, {
    coverage: (c = Nr(e, "coverage")) == null ? void 0 : c.value
  }), a = Pu(i, { type: "add-frame" });
  if (!a.changed) return !1;
  const l = JSON.stringify(a.state);
  return t.value = l, (f = t.callback) == null || f.call(t, l), !0;
}
function wc(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Nr(e, "coverage");
  if (!n) return;
  const i = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...a) {
    var c, f, m, b, v, _, S, I, x;
    const l = i ? i(...a) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (b = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || b.call(m), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), (S = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || S.call(_, !0, !0), (x = (I = t == null ? void 0 : t.canvas) == null ? void 0 : I.setDirty) == null || x.call(I, !0, !0), l;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function nN(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function vh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function rN(e) {
  var v, _, S, I, x, L;
  if (!e) return;
  const t = Nr(e, "coverage"), n = Nr(e, "bg_color"), i = Nr(e, Es), a = Nr(e, "sticker_state");
  if (!t || !n || !i) return;
  const l = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), f = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(l) && nN(l) && (vh(c) || c === ""))) return;
  let b = "360";
  if (vh(c))
    try {
      b = String(Yt((v = JSON.parse(c)) == null ? void 0 : v.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (_ = t.callback) == null || _.call(t, b), n.value = l, (S = n.callback) == null || S.call(n, l), i.value = c, (I = i.callback) == null || I.call(i, c), a && (a.value = f, (x = a.callback) == null || x.call(a, f)), (L = e.setDirtyCanvas) == null || L.call(e, !0, !0);
}
function zu(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var l, c;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.__panoComputeSizeBeforeHide = i.computeSize, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (l = i.element) != null && l.style && (i.element.style.display = "none"), (c = i.parentEl) != null && c.style && (i.parentEl.style.display = "none")));
  });
}
function $u(e, t, n) {
  var l, c;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  if (a) {
    a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", a.options = { ...a.options || {}, hidden: !1 }, typeof a.__panoComputeSizeBeforeHide == "function" && (a.computeSize = a.__panoComputeSizeBeforeHide), delete a.__panoComputeSizeBeforeHide, (l = a.element) != null && l.style && (a.element.style.display = ""), (c = a.parentEl) != null && c.style && (a.parentEl.style.display = "");
    const f = typeof a.computeSize == "function" ? a.computeSize() : null;
    return (!Array.isArray(f) || Number(f[0] || 0) <= 0 || Number(f[1] || 0) <= 0) && (a.computeSize = () => {
      var m;
      return [Math.max(120, Number(((m = e == null ? void 0 : e.size) == null ? void 0 : m[0]) || 0) - 20), 30];
    }), a;
  }
  return a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a;
}
async function iN(e) {
  const t = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (t instanceof Map)
    for (; t.size > 0; ) {
      const n = Array.from(t.entries());
      await Promise.all(n.map(([, i]) => i)), n.forEach(([i, a]) => {
        t.get(i) === a && t.delete(i);
      });
    }
}
function _h(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const i = e.__panoStickerOperationTail, l = (i && typeof i.then == "function" ? i.catch(() => {
  }) : Promise.resolve()).then(() => n()), c = l.catch(() => {
  });
  e.__panoStickerOperationTail = c, e.__panoPendingStickerUploads.set(t, l);
  const f = () => {
    var m, b;
    ((b = (m = e.__panoPendingStickerUploads) == null ? void 0 : m.get) == null ? void 0 : b.call(m, t)) === l && e.__panoPendingStickerUploads.delete(t);
  };
  return l.then(f, f), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), l;
}
async function Pp(e) {
  var n;
  const t = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of t) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function aN(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...i) {
    return await iN(e), await Pp(e), n ? n.apply(this, i) : this.value;
  };
}
function oN(e) {
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
function xh(e, {
  app: t,
  matchType: n,
  buttonText: i,
  openEditor: a,
  attachStickers: l,
  attachCutout: c,
  enableStickersPreview: f
}) {
  if (!(e != null && e.prototype)) return;
  function m(b) {
    var S;
    const v = `editor_btn|${n}`;
    if (b.__panoPreviewAttached === !0 && b.__panoPreviewMountKey === v) return;
    oN(b), wc(b, t), zu(b, Es);
    const _ = Nr(b, Es);
    if (aN(b, _), _ && !_.__panoPreviewPatchedCb) {
      _.__panoPreviewPatchedCb = !0;
      const I = _.callback;
      _.callback = (x) => {
        var O;
        const L = I ? I(x) : void 0;
        return (O = b.setDirtyCanvas) == null || O.call(b, !0, !1), L;
      };
    }
    if (n === "PanoramaStickers") {
      const I = Nr(b, "bg_color");
      I && (I.value == null || String(I.value).trim() === "" || String(I.value).toLowerCase() === "#000000") && (I.value = "#00ff00", (S = I.callback) == null || S.call(I, "#00ff00")), $u(b, i, () => a(b, "stickers")), f && (l(b, {
        enabled: !0,
        buttonText: i,
        onOpen: () => a(b, "stickers")
      }), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260])), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = v;
      return;
    }
    $u(b, i, () => a(b, "cutout")), c(b, {
      buttonText: i,
      onOpen: () => a(b, "cutout")
    }), b.__panoCutoutNodeSurface && zu(b, i), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260]), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = v;
  }
  for (const b of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const v = e.prototype[b];
    e.prototype[b] = function() {
      const _ = v ? v.apply(this, arguments) : void 0;
      return b === "onNodeCreated" && n === "PanoramaCutout" && tN(this), b === "onConfigure" && n === "PanoramaStickers" && this.widgets && rN(this), (b === "onNodeCreated" || this.widgets) && m(this), _;
    };
  }
}
function sN(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
}
function lN(e, {
  app: t,
  openEditor: n,
  attachPreview: i,
  requestFrame: a
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const l = () => {
    const c = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), f = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = f, !c && f < 40) {
      a(l);
      return;
    }
    wc(e, t);
    const m = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    $u(e, "Open Preview", () => m(e)), i(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: m
    }), e.__panoPreviewNodeSurface && zu(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  a(l);
}
function uN({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: i,
  attachPreview: a,
  requestFrame: l,
  enableStickersPreview: c = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    beforeRegisterNodeDef(f, m) {
      const b = String((m == null ? void 0 : m.name) || "");
      (b === "PanoramaStickers" || b === "Panorama Stickers") && xh(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: i,
        enableStickersPreview: c
      }), (b === "PanoramaCutout" || b === "Panorama Cutout") && xh(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: i,
        enableStickersPreview: c
      }), Ss(b) && sN(f);
    },
    nodeCreated(f) {
      const m = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      wc(f, e), Ss(m) && lN(f, { app: e, openEditor: t, attachPreview: a, requestFrame: l });
    }
  };
}
const cN = "state_json", ei = "sticker_image_1", nu = "external_image", Go = "pano_sticker_input_images", fN = !1, fs = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Qt = Math.PI / 180, vr = 180 / Math.PI, ru = 1, dN = "rgb(255, 221, 87)", hN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, mN = 64, wh = 40, iu = 16, pN = 0.45, Sh = 180, gN = 160, Ds = 24, bN = 4, yN = 4, Bo = /* @__PURE__ */ new Map(), Nh = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), vN = 12, Ln = eN({
  app: zn,
  api: wn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Lu,
    markImageFailed: kp,
    markImageLoading: Np,
    markImageReady: Mp
  }
}), _N = Ln.assetSource, xN = Ln.source, au = Ln.uiImage, wN = Ln.invalidateUiImage, SN = Ln.resolvePreferredExactLinkedSource, ou = Ln.loadPreferredExactLinkedImage;
function Ko(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function NN(e) {
  return 1 - Math.pow(1 - e, 3);
}
function MN(e, t, n) {
  const i = q((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return i * i * (3 - 2 * i);
}
function kN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = $r.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : ($r.delete(t), $r.set(t, n), n);
}
function PN(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for ($r.delete(n), $r.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); $r.size > vN; ) {
      const a = $r.keys().next().value;
      if (!a) break;
      $r.delete(a);
    }
}
function AN(e) {
  return e * e * e;
}
function rr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Wo(e, t) {
  return rr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Yo(e, t) {
  return rr(e.x * t, e.y * t, e.z * t);
}
function Rn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function qo(e, t) {
  return rr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ji(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return rr(e.x / t, e.y / t, e.z / t);
}
function Wn(e, t) {
  const n = e * Qt, i = t * Qt, a = Math.cos(i);
  return rr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Xo(e) {
  return {
    yaw: Ut(Math.atan2(e.x, e.z) * vr),
    pitch: q(Math.asin(q(e.y, -1, 1)) * vr, -90, 90)
  };
}
function pr(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i].x, c = t[i].y, f = t[a].x, m = t[a].y;
    c > e.y != m > e.y && e.x < (f - l) * (e.y - c) / (m - c || 1e-6) + l && (n = !n);
  }
  return n;
}
function Rr(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function su(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), l = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), f = i * i + a * a;
  if (f <= 1e-6) return Rr(e, t);
  const m = q((l * i + c * a) / f, 0, 1), b = Number(t.x || 0) + i * m, v = Number(t.y || 0) + a * m, _ = Number(e.x || 0) - b, S = Number(e.y || 0) - v;
  return _ * _ + S * S;
}
function Pn(e, t, n) {
  return e + (t - e) * n;
}
function Yn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${q(n, 0, 1)})`;
}
function CN(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Jo = { fillStyle: "", url: "" };
function TN(e, t, n) {
  if (Jo.url && Jo.fillStyle === String(e || ""))
    return Jo.url;
  const i = CN(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Ds}" height="${Ds}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Jo = { fillStyle: String(e || ""), url: i }, i;
}
function ds(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function xn(e) {
  return {
    r: q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: q(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Zt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function IN(e) {
  return fs.some((t) => ds(e, t.color));
}
function lu(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = q(Number(t), 0, 1), l = q(Number(n), 0, 1);
  if (a <= 1e-6) return { r: l, g: l, b: l };
  const c = Math.floor(i * 6), f = i * 6 - c, m = l * (1 - a), b = l * (1 - f * a), v = l * (1 - (1 - f) * a);
  switch (c % 6) {
    case 0:
      return { r: l, g: v, b: m };
    case 1:
      return { r: b, g: l, b: m };
    case 2:
      return { r: m, g: l, b: v };
    case 3:
      return { r: m, g: b, b: l };
    case 4:
      return { r: v, g: m, b: l };
    default:
      return { r: l, g: m, b };
  }
}
function uu(e) {
  const t = q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), l = Math.min(t, n, i), c = a - l;
  let f = 0;
  c > 1e-6 && (a === t ? f = ((n - i) / c + (n < i ? 6 : 0)) / 6 : a === n ? f = ((i - t) / c + 2) / 6 : f = ((t - n) / c + 4) / 6);
  const m = a <= 1e-6 ? 0 : c / a;
  return { h: f, s: m, v: a };
}
function Hi(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const Ap = "pano_suite.ui_settings.v1", Cp = "pano_suite.node_grid_visibility.v1";
let Yi = null, qn = null;
function hs(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function EN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ap)) || "").trim();
    if (!t) return Yi ? hs(Yi) : null;
    const n = JSON.parse(t), i = hs(n);
    return Yi = i, i;
  } catch {
    return Yi ? hs(Yi) : null;
  }
}
function DN(e) {
  var n;
  const t = hs(e);
  Yi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Ap, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Tp() {
  var e;
  if (qn && typeof qn == "object")
    return qn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Cp)) || "").trim();
    if (!t)
      return qn = {}, qn;
    const n = JSON.parse(t);
    return qn = n && typeof n == "object" ? n : {}, qn;
  } catch {
    return qn = {}, qn;
  }
}
function ON(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Tp()[n];
  return typeof a == "boolean" ? a : !!t;
}
function FN(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = Tp();
  i[n] = !!t, qn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Cp, JSON.stringify(i));
  } catch {
  }
}
function RN(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Mh(e) {
  const { paintCount: t, maskCount: n } = RN(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, l = 0;
  return i.forEach((c) => {
    String((c == null ? void 0 : c.layerKind) || "paint") === "mask" ? l += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: l,
    totalPaintCount: t + a,
    totalMaskCount: n + l
  };
}
function Ui(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Zo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function LN(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), i = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return i[n] ? i[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Qo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function zN(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function $N(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function VN(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function jN(e, t, n = {}) {
  var Gf;
  await Pp(e), Ln.clearFailedLinkedImages(e);
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, l = i, c = LN(e, t);
  await hc();
  const f = Zo(e, "output_preset"), m = Zo(e, "coverage"), b = Zo(e, "bg_color"), v = Zo(e, cN), _ = () => {
    const r = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return ou(
      e,
      r,
      () => ve(),
      `background:size:${r.join("|")}`
    );
  }, S = () => {
    const r = _();
    return VN(r);
  }, I = (r = 2048) => {
    const o = f == null ? void 0 : f.value;
    return $N(o) ? S() || Math.max(1, Math.round(Number(r || 2048))) : zN(o, r);
  }, x = wp(String((v == null ? void 0 : v.value) || ""), {
    outputPreset: I(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Yt(m == null ? void 0 : m.value),
    sharedUiSettings: EN()
  });
  e.__panoLiveStateOverride = x, e.__panoLiveStateVersion = 0, t === "cutout" && (x.shots = Array.isArray(x.shots) ? x.shots.slice(0, 1) : [], x.shots.length || (x.active.selected_shot_id = null));
  const L = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(x.shots) ? x.shots : [], o = String(((s = x == null ? void 0 : x.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((u) => String((u == null ? void 0 : u.id) || "") === o) || r[0] || null;
  })() : null, O = L ? of(L, !1) : { width: 220, height: 132 }, z = Sp(t), P = /* @__PURE__ */ da({
    stageStatus: Qn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (z.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (z.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(z.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...l ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: De.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: i,
      aspectOpen: !1,
      aspectIcon: De.aspect,
      rotateIcon: De.rotate_90,
      aspectChoices: [],
      rollKnob: null
    },
    frameRollKnob: {
      visible: !1,
      disabled: i,
      rollDeg: 0,
      displayValue: "0",
      dragging: !1,
      armed: !1
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: De.fullscreen,
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
      customColorCss: Yn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Yn({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (r, o) => ({ index: o, color: null })),
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
      width: O.width,
      height: O.height,
      label: L ? "Loading preview" : "Add Frame to preview"
    }
  }), $ = document.createElement("div");
  document.body.appendChild($);
  const E = ({ intent: r, file: o } = {}) => {
    if (wa(o)) {
      if (r === "add") {
        pf(o);
        return;
      }
      r === "replace" && M0(o);
    }
  }, D = ({ intent: r } = {}) => {
  }, H = ac(WS, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: c,
    shellPreset: z,
    paintSwatches: fs.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Yn(r.color, 1)
    })),
    uiState: P,
    onClose: () => {
      Ri();
    },
    onImageFileSelected: E,
    onImageFileCancelled: D
  });
  let Z = null;
  try {
    Z = H.mount($);
  } catch (r) {
    try {
      H.unmount();
    } catch {
    }
    throw $.remove(), r;
  }
  const X = $.querySelector(".pano-modal-overlay"), W = $.querySelector(".pano-modal"), A = W == null ? void 0 : W.querySelector("[data-stage-overlay]"), Q = W == null ? void 0 : W.querySelector("[data-stage-background]"), ae = W == null ? void 0 : W.querySelector(".pano-stage-wrap"), fe = ((Gf = Z == null ? void 0 : Z.getPaintOverlayRefs) == null ? void 0 : Gf.call(Z)) || {}, me = fe.cursor || null, ee = fe.sizePreview || null, ue = fe.sizeSample || null;
  if (!X || !W || !A || !Q || !ae || !me || !ee || !ue)
    throw H.unmount(), $.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const k = A.getContext("2d"), de = bi(), Se = t === "cutout" ? Ax({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, ke = W.querySelector("[data-side]"), B = W.querySelector("[data-video-element]"), Re = W.querySelector(".pano-floating-right"), Je = W.querySelector(".pano-floating-top"), nt = W.querySelector("[data-tool-rail]"), gt = W.querySelector("[data-frame-rail]"), Ge = W.querySelector("[data-frame-roll-knob]"), Gt = W.querySelector("[data-paint-dock]"), on = W.querySelector(".pano-video-transport"), It = W.querySelector("[data-selection-menu]"), Pt = W.querySelector("[data-tooltip]"), $t = W.querySelector("[data-camera-preview-host]"), R = W.querySelector("[data-paint-color-row]"), U = W.querySelector("[data-paint-color-pop]"), oe = W.querySelector("[data-paint-color-sv]"), xe = W.querySelector("[data-paint-color-sv-cursor]"), be = W.querySelector("[data-paint-hue-strip]"), M = W.querySelector("[data-paint-hue-handle]");
  let G = 0, Y = 0;
  ae == null || ae.removeAttribute("data-stage-ready"), ae == null || ae.setAttribute("data-stage-loading-kind", "boot"), A.style.opacity = "1", Q.style.opacity = "0", a && (ke == null || ke.remove(), W.classList.add("pano-modal-readonly"));
  const re = () => {
    if (!d.customPaintSessionStart) return;
    if (ds(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (IN(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const r = [
      xn(d.customPaintColor),
      ...d.customPaintHistory.filter((o) => !ds(o, d.customPaintColor))
    ];
    d.customPaintHistory = r.slice(0, 8), d.customPaintSessionStart = null;
  }, J = (r = !1) => {
    !U || U.hidden || (r ? re() : d.customPaintSessionStart = null, U.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, ge = () => {
    U && (U.hidden && (d.customPaintSessionStart = xn(d.customPaintColor)), U.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  W.addEventListener("pointerdown", (r) => {
    var o;
    r.target.closest("[data-frame-roll-knob]") || Yr(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (W.querySelectorAll(".pano-picker-pop").forEach((s) => {
      s.hidden = !0;
    }), J(!0), t === "cutout" && d.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, Ye(), ve()), (o = P.frameRail) != null && o.aspectOpen && !r.target.closest(".pano-frame-aspect-control") && (P.frameRail.aspectOpen = !1)));
  });
  const pe = t === "stickers" ? x.active.selected_sticker_id : x.active.selected_shot_id, Ae = JSON.stringify(mh(x)), d = {
    mode: "pano",
    selectedId: pe,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Yt(x.coverage),
    historyController: ax(80, { entries: [Ae], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: mr,
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
    showGrid: ON(e == null ? void 0 : e.id, !0),
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
    paintEngine: xu(),
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
  }, Ce = Se && $t ? Se.mount($t, { shot: null }) : null;
  t === "stickers" && (d.selectedId = null, x.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const Oe = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map(), et = document.createElement("canvas");
  et.__panoFrameIdx = 0;
  const ce = {
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
  }, sn = Number.parseFloat(
    getComputedStyle(W).getPropertyValue("--pano-float-radius")
  ) || 10, Mt = (r) => {
    const o = String(r || "default");
    A.style.cursor !== o && (A.style.cursor = o);
  }, He = {
    timer: 0,
    target: null
  }, At = {
    active: !1,
    depth: 0
  }, Ne = {
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
  }, oo = 4, Ur = 9, Hn = [];
  let yi = 0;
  const Ip = () => {
    var N, T;
    const r = (N = ae == null ? void 0 : ae.getBoundingClientRect) == null ? void 0 : N.call(ae), o = (T = Re == null ? void 0 : Re.getBoundingClientRect) == null ? void 0 : T.call(Re), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), u = o ? Math.max(0, Number(o.width || 0)) : 0, y = u > 0 ? u + 14 + 12 : 72, g = Math.max(280, Math.floor(s - y * 2)), w = d.fullscreen ? Math.min(1200, g) : g;
    P.videoTransport.shellMaxWidthPx = w;
  }, qs = () => {
    yi || (yi = window.requestAnimationFrame(() => {
      yi = 0, Ip();
    }));
  }, Xs = () => {
    const r = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, Sc = (r) => {
    if (!(r instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(r.audioTracks) && r.audioTracks.length > 0 || r.audioTracks && typeof r.audioTracks.length == "number" && r.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof r.mozHasAudio == "boolean") return r.mozHasAudio;
    } catch {
    }
    try {
      if (Number(r.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!P.videoTransport.hasAudio;
  }, Cn = typeof ResizeObserver < "u" ? new ResizeObserver(() => qs()) : null;
  Cn == null || Cn.observe(ae), Re && (Cn == null || Cn.observe(Re)), Hn.push(() => {
    var r;
    yi && (window.cancelAnimationFrame(yi), yi = 0), (r = Cn == null ? void 0 : Cn.disconnect) == null || r.call(Cn);
  }), qs();
  const so = () => {
    Ne.thumbnailJobId += 1, Ne.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Ur;
  }, Nc = async (r, o, s) => {
    const u = String(r || "").trim();
    if (!u) {
      so();
      return;
    }
    const h = kN(u);
    if (h) {
      Ne.thumbnailSrc = u, P.videoTransport.thumbnails = h.thumbnails, P.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (Ne.thumbnailSrc === u && Array.isArray(P.videoTransport.thumbnails) && P.videoTransport.thumbnails.length)
      return;
    const p = ++Ne.thumbnailJobId;
    Ne.thumbnailSrc = u, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Ur;
    const y = document.createElement("video");
    if (y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous", !await new Promise((ne) => {
      let he = !1;
      const le = (we) => {
        he || (he = !0, ne(we));
      };
      y.addEventListener("loadedmetadata", () => le(!0), { once: !0 }), y.addEventListener("canplay", () => le(!0), { once: !0 }), y.addEventListener("error", () => le(!1), { once: !0 }), y.src = u, y.load();
    }) || Ne.thumbnailJobId !== p) return;
    const w = Math.max(1, Number(y.videoWidth || 0)), N = Math.max(1, Number(y.videoHeight || 0));
    if (w < 1 || N < 1) return;
    const T = Math.max(0, Number(y.duration || o || 0)), C = document.createElement("canvas"), F = 46, j = Math.max(72, Math.round(w / N * F));
    C.width = j, C.height = F;
    const te = C.getContext("2d");
    if (!te) return;
    const K = [], V = (ne) => new Promise((he) => {
      let le = !1;
      const we = () => {
        le || (le = !0, he());
      };
      y.addEventListener("seeked", we, { once: !0 }), y.addEventListener("error", we, { once: !0 });
      try {
        y.currentTime = ne;
      } catch {
        we();
      }
    });
    for (let ne = 0; ne < Ur; ne += 1) {
      if (Ne.thumbnailJobId !== p) return;
      const he = ne / (Ur - 1), le = T > 0 ? Math.max(0, Math.min(T - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), T * he)) : 0;
      if (await V(le), Ne.thumbnailJobId !== p) return;
      te.clearRect(0, 0, j, F), te.drawImage(y, 0, 0, j, F), K.push({
        id: `thumb-${ne}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: le,
        label: sl(le)
      });
    }
    Ne.thumbnailJobId === p && (P.videoTransport.thumbnails = K, P.videoTransport.thumbnailCount = K.length || Ur, PN(u, {
      thumbnails: K,
      thumbnailCount: K.length || Ur,
      duration: T,
      fps: s
    }));
  }, Mc = (r) => {
    const o = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, kc = (r) => {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return null;
    const o = Number(B.videoWidth || 0), s = Number(B.videoHeight || 0), u = document.createElement("canvas");
    u.width = o, u.height = s, u.__panoFrameIdx = Number(u.__panoFrameIdx || 0) + 1;
    const h = u.getContext("2d");
    if (!h) return null;
    for (h.drawImage(B, 0, 0, o, s), Ne.frameCache.set(r, u), Ne.frameCacheOrder = Ne.frameCacheOrder.filter((p) => p !== r), Ne.frameCacheOrder.push(r); Ne.frameCacheOrder.length > oo; ) {
      const p = Ne.frameCacheOrder.shift();
      p != null && Ne.frameCache.delete(p);
    }
    return u;
  }, Ep = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), u = Number(r.height || 0);
    if (s < 1 || u < 1) return !1;
    (et.width !== s || et.height !== u) && (et.width = s, et.height = u);
    const h = et.getContext("2d");
    return h ? (h.clearRect(0, 0, s, u), h.drawImage(r, 0, 0, s, u), et.__panoFrameIdx = Number(et.__panoFrameIdx || 0) + 1, o != null && (Ne.presentedTime = Number(o || 0)), !0) : !1;
  }, Pc = (r) => {
    const o = Mc(r), s = Ne.frameCache.get(o) || null;
    return s ? (Ne.currentFrameNumber = o, Ep(s, r)) : !1;
  };
  if (Hn.push(() => {
    so();
  }), B instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof B.requestVideoFrameCallback != "function" || B.__panoFramePumpActive) return;
      B.__panoFramePumpActive = !0;
      const g = (w, N) => {
        B.__panoFramePumpActive = !1;
        const T = Number((N == null ? void 0 : N.mediaTime) ?? B.currentTime ?? 0), C = Mc(T), F = Xs();
        Ne.mode === "scrub" ? Math.abs(T - Number(Ne.editorTime || 0)) <= F && (kc(C), Pc(Ne.editorTime), ce.backgroundDirty = !0, ce.dirty = !0, Un({
          ready: !0,
          playing: !1,
          visible: ur(),
          currentTime: Ne.editorTime,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "scrub"
        }), ve({ cause: "frame_view", localOnly: !0 })) : (Ne.editorTime = T, Ne.presentedTime = T, Ne.requestedTime = null, Ne.currentFrameNumber = C, kc(C), Ne.frameCounter += 1, B.dataset.panoFrameIdx = String(Ne.frameCounter), ce.backgroundDirty = !0, ce.dirty = !0, Un({
          ready: !0,
          playing: !B.paused && !B.ended,
          visible: ur(),
          currentTime: T,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "playback"
        }), ve({ cause: "frame_view", localOnly: !0 })), ce.running && (!B.paused || Ne.mode === "scrub") && r();
      };
      try {
        B.requestVideoFrameCallback(g);
      } catch {
        B.__panoFramePumpActive = !1;
      }
    }, o = () => {
      Ne.pendingPlaybackResume && (Ne.pendingPlaybackResume = !1, Ne.mode = "playback", Ne.requestedTime = null, Mi() && (ce.backgroundDirty = !0, ce.dirty = !0), B.play().catch(() => {
      }));
    }, s = () => {
      Ne.editorTime = Number(B.currentTime || 0), Number(B.readyState || 0) >= 2 && Mi() && (ce.backgroundDirty = !0, ce.dirty = !0), ki(), r(), ve({ cause: "frame_view", localOnly: !0 });
    }, u = () => {
      Ne.mode = "playback", Ne.seeking = !1, Ne.requestedTime = null, ki(), r(), ve({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      Ne.mode === "playback" && Mi() && (ce.backgroundDirty = !0, ce.dirty = !0), ki(), ve({ cause: "frame_view", localOnly: !0 });
    }, p = () => {
      Un({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: ur(),
        currentTime: Ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: Ne.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: B.muted,
        volume: Number(B.volume ?? P.videoTransport.volume ?? 1)
      });
    }, y = () => {
      const g = Ne.seeking || Ne.pendingPlaybackResume || Ne.mode === "scrub";
      if (Ne.seeking = !1, !g) {
        Ne.requestedTime = null, r();
        return;
      }
      const w = Number(Ne.requestedTime ?? Ne.editorTime ?? 0), N = Number(B.currentTime || 0);
      if (Math.abs(N - w) > Xs()) {
        ll(w);
        return;
      }
      Ne.mode === "scrub" && (Mi(), ce.backgroundDirty = !0, ce.dirty = !0, ve({ cause: "frame_view", localOnly: !0 })), Ne.requestedTime = null, o(), r();
    };
    B.addEventListener("loadedmetadata", s), B.addEventListener("loadeddata", s), B.addEventListener("canplay", s), B.addEventListener("play", u), B.addEventListener("pause", h), B.addEventListener("volumechange", p), B.addEventListener("seeked", y), Hn.push(() => B.removeEventListener("loadedmetadata", s)), Hn.push(() => B.removeEventListener("loadeddata", s)), Hn.push(() => B.removeEventListener("canplay", s)), Hn.push(() => B.removeEventListener("play", u)), Hn.push(() => B.removeEventListener("pause", h)), Hn.push(() => B.removeEventListener("volumechange", p)), Hn.push(() => B.removeEventListener("seeked", y));
  }
  function Dp() {
    P.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", u = r.attr === "data-mask-tool";
      r.active = o ? r.value === d.primaryTool : s ? r.key === d.paintTool : u ? r.key === d.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function Js(r) {
    const o = r == null ? void 0 : r.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const s of o.items) {
        if (!s || s.kind !== "file") continue;
        const u = String(s.type || "").toLowerCase();
        if (!u || u.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((s) => wa(s)) : !1;
  }
  function Gr(r) {
    const o = !!r;
    At.active !== o && (At.active = o, ae.classList.toggle("drop-active", o));
  }
  function Zs(r, o, s = d.viewFov, u = 140, h = 620) {
    const p = c1(d.viewYaw, r), y = o - d.viewPitch, g = s - d.viewFov, w = Math.hypot(p, y) + Math.abs(g) * 0.6, N = Math.round(q(u + w * 2.2, u, h));
    d.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: d.viewYaw,
      startPitch: d.viewPitch,
      startFov: d.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: p
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, ve();
  }
  ug();
  function lr() {
    return t === "stickers" ? x.stickers : x.shots;
  }
  function qt() {
    const r = x.painting || (x.painting = Ba(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Op(r = "paint") {
    var h, p;
    const o = Array.isArray((p = (h = x.painting) == null ? void 0 : h[r]) == null ? void 0 : p.strokes) ? x.painting[r].strokes : [], s = [], u = /* @__PURE__ */ new Set();
    for (const y of o) {
      const g = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !g || u.has(g) || (u.add(g), s.push(g));
    }
    return s;
  }
  function Fp() {
    return Op("paint");
  }
  function ha(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function ma(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Vt(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function pa(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const u = s.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Qs() {
    var o;
    let r = -1;
    for (const s of Array.isArray(x.stickers) ? x.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of qt())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = x.painting) == null ? void 0 : o.raster_objects) ? x.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function Ac(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const u = qt();
    let h = u.find((p) => String((p == null ? void 0 : p.actionGroupId) || "") === s);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? Qs() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, u.push(h)), h;
  }
  function Rp(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), u = Number(r.halfW || 0), h = Number(r.halfH || 0);
    return [
      {
        u: ((o - u) % 1 + 1) % 1,
        v: q(s - h, 0, 1)
      },
      {
        u: ((o + u) % 1 + 1) % 1,
        v: q(s - h, 0, 1)
      },
      {
        u: ((o + u) % 1 + 1) % 1,
        v: q(s + h, 0, 1)
      },
      {
        u: ((o - u) % 1 + 1) % 1,
        v: q(s + h, 0, 1)
      }
    ];
  }
  function Lp() {
    const r = new Set(Fp()), s = qt().filter((u) => r.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return r.forEach((u) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === u) || s.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: Qs(),
        locked: !1,
        frame: null
      });
    }), s.sort((u, h) => Number((u == null ? void 0 : u.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), x.painting.groups = s, s;
  }
  function zp(r, o, s) {
    var K;
    const u = (V) => (Number(V || 0) % 1 + 1) % 1, h = [];
    for (const V of s) {
      const ne = V == null ? void 0 : V.geometry, he = (ne == null ? void 0 : ne.geometryKind) === "lasso_fill" ? ne == null ? void 0 : ne.points : (ne == null ? void 0 : ne.processedPoints) || (ne == null ? void 0 : ne.rawPoints) || (ne == null ? void 0 : ne.points) || [];
      Array.isArray(he) && h.push(...he);
    }
    if (!h.length) return null;
    const p = u(((K = h[0]) == null ? void 0 : K.u) || 0);
    let y = 0, g = 0;
    h.forEach((V) => {
      const ne = u((V == null ? void 0 : V.u) || 0);
      y += p + kn(ne, p), g += Number((V == null ? void 0 : V.v) || 0);
    });
    const w = (y / h.length % 1 + 1) % 1;
    let N = 1 / 0, T = -1 / 0, C = 1 / 0, F = -1 / 0;
    h.forEach((V) => {
      const ne = u((V == null ? void 0 : V.u) || 0), he = kn(ne, w);
      N = Math.min(N, he), T = Math.max(T, he);
      const le = Number((V == null ? void 0 : V.v) || 0);
      C = Math.min(C, le), F = Math.max(F, le);
    });
    const j = s.reduce((V, ne) => {
      const he = Or(String((ne == null ? void 0 : ne.toolKind) || "pen")), le = pn[he] || pn[mr], we = Math.max(1, Number((ne == null ? void 0 : ne.size) || 10)) * Math.max(0.1, Number((le == null ? void 0 : le.sizeScale) ?? 1));
      return Math.max(V, we);
    }, 0), te = Math.max(35e-4, j / 2048);
    return {
      centerUv: { u: ((w + (N + T) * 0.5) % 1 + 1) % 1, v: q((C + F) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (T - N) * 0.5 + te,
      halfH: (F - C) * 0.5 + te,
      uvPad: te
    };
  }
  function Ir(r, o, s) {
    const u = String(r || "").trim();
    if (!u) return null;
    const h = qt().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === u);
    if (!h) return null;
    const p = s || Tn(u, o);
    return h.frame = zp(u, o, p), h.frame;
  }
  function vi() {
    var u;
    const r = (Array.isArray(x.stickers) ? x.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = Lp().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = (Array.isArray((u = x.painting) == null ? void 0 : u.raster_objects) ? x.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...r, ...o, ...s].sort((h, p) => Number(h.z_index || 0) - Number(p.z_index || 0));
  }
  function el(r = !0) {
    var s, u, h, p, y, g;
    const o = vi().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (r) {
      const w = String(((u = (s = d.interaction) == null ? void 0 : s.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), N = String(((p = (h = d.interaction) == null ? void 0 : h.stroke) == null ? void 0 : p.layerKind) || "").trim(), T = String(((g = (y = d.interaction) == null ? void 0 : y.stroke) == null ? void 0 : g.toolKind) || "").trim();
      w && N === "paint" && T !== "eraser" && !o.includes(w) && o.push(w);
    }
    return o;
  }
  function tl(r = !0) {
    var g, w, N, T, C, F;
    const o = vi();
    if (!r) return o;
    const s = String(((w = (g = d.interaction) == null ? void 0 : g.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), u = String(((T = (N = d.interaction) == null ? void 0 : N.stroke) == null ? void 0 : T.layerKind) || "").trim(), h = String(((F = (C = d.interaction) == null ? void 0 : C.stroke) == null ? void 0 : F.toolKind) || "").trim();
    if (!s || u !== "paint" || h === "eraser" || o.some((j) => j.type === "strokeGroup" && String(j.actionGroupId || "") === s))
      return o;
    const p = wt();
    let y = o.reduce((j, te) => Math.max(j, Number((te == null ? void 0 : te.z_index) || 0)), -1) + 1;
    return p && Lt(p) && String(p.actionGroupId || "") === s && (y = Number(p.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: y,
        item: null
      }
    ].sort((j, te) => Number((j == null ? void 0 : j.z_index) || 0) - Number((te == null ? void 0 : te.z_index) || 0));
  }
  function $p() {
    return qt().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => xi(ha("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function Vp() {
    var r;
    return (Array.isArray((r = x.painting) == null ? void 0 : r.raster_objects) ? x.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => _i(ma((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Cc(r = d.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, u = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || u;
    }
    return !1;
  }
  function jp() {
    var o, s, u, h;
    let r = null;
    try {
      const p = el(), y = ((h = (u = (s = (o = d.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, p)) == null ? void 0 : u.displayPaint) == null ? void 0 : h.canvas) || null;
      y && (r = {
        source: y,
        revision: `${Ii()}:${lo()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function lo() {
    var h, p, y, g, w, N, T;
    const r = d.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!Cc(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const C = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, F = String(((p = r == null ? void 0 : r.stroke) == null ? void 0 : p.layerKind) || ""), j = ((y = C == null ? void 0 : C.rawPoints) == null ? void 0 : y.length) ?? ((g = C == null ? void 0 : C.points) == null ? void 0 : g.length) ?? 0, te = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${F || "paint"}_${o}_live${te}_${j}_${d.livePaintInteractionRevision}`;
    }
    const s = String(((w = r == null ? void 0 : r.item) == null ? void 0 : w.actionGroupId) || ""), u = String(((N = r == null ? void 0 : r.item) == null ? void 0 : N.rasterObjectId) || ((T = r == null ? void 0 : r.item) == null ? void 0 : T.id) || "");
    return `_${o}_${s || u || "active"}_${d.livePaintInteractionRevision}`;
  }
  function nl() {
    const r = Array.isArray(x.shots) ? x.shots : [], o = Array.isArray(x.stickers) ? x.stickers : [];
    return [...r, ...o];
  }
  function vn(r) {
    return !!r && Array.isArray(x.shots) && x.shots.includes(r);
  }
  function vt(r) {
    return !!r && Array.isArray(x.stickers) && x.stickers.includes(r);
  }
  function dn() {
    var r;
    return Array.isArray((r = x.painting) == null ? void 0 : r.raster_objects) ? x.painting.raster_objects : [];
  }
  function _i(r) {
    const o = Vt(r);
    if (!o) return null;
    const s = dn().find((u) => String((u == null ? void 0 : u.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: ma(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Xt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = Vt(r.rasterObjectId || r.id || "");
    return !!o && !!_i(ma(o));
  }
  function xi(r) {
    const o = pa(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const u = qt().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return u ? {
      ...u,
      id: ha("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Lt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!xi(ha(s, o));
  }
  function Tn(r, o = null) {
    const s = pa(r, o), u = String(s.actionGroupId || "").trim();
    return u ? Oi(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === u) : [];
  }
  function Hp(r, o = "paint") {
    const s = String(r || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${d.mode}:${_a()}`;
    if (d.mode === "frame") {
      const p = ze(), y = String((p == null ? void 0 : p.id) || ""), g = p ? zt(p) : null;
      return `${h}:frame:${y}:${Math.round(Number((p == null ? void 0 : p.yaw_deg) || 0) * 1e3)}:${Math.round(Number((p == null ? void 0 : p.pitch_deg) || 0) * 1e3)}:${Math.round(Number((p == null ? void 0 : p.roll_deg) ?? (p == null ? void 0 : p.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((p == null ? void 0 : p.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((p == null ? void 0 : p.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function uo(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: q(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function kn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function rl(r, o = null, s = null) {
    var N;
    const u = pa(r, o), h = Array.isArray(s) ? s : Tn(u.actionGroupId, u.layerKind), p = [];
    if (h.forEach((T) => {
      const C = (T == null ? void 0 : T.geometry) || null, F = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(F) && p.push(...F);
    }), !p.length) return { u: 0.5, v: 0.5 };
    const y = Number(((N = p[0]) == null ? void 0 : N.u) || 0);
    let g = 0, w = 0;
    return p.forEach((T) => {
      g += y + kn(Number((T == null ? void 0 : T.u) || 0), y), w += Number((T == null ? void 0 : T.v) || 0);
    }), {
      u: (g / p.length % 1 + 1) % 1,
      v: q(w / p.length, 0, 1)
    };
  }
  function co(r, o, s = 1, u = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), y = kn(Number(r.u || 0), h), g = Number(r.v || 0) - p, w = Number(u || 0) * Qt, N = Math.cos(w), T = Math.sin(w), C = Math.max(0.02, Number(s || 1)), F = (y * N - g * T) * C, j = (y * T + g * N) * C;
    return {
      ...r,
      u: ((h + F) % 1 + 1) % 1,
      v: q(p + j, 0, 1)
    };
  }
  function Tc(r, o, s, u = null, h = null, p = null) {
    const y = pa(r, h), g = String(y.actionGroupId || "").trim();
    if (!g) return !1;
    const w = Oi(y.layerKind), N = Array.isArray(u) ? new Map(u.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let T = !1;
    if (w.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== g) return;
      const F = (N == null ? void 0 : N.get(String((C == null ? void 0 : C.id) || ""))) || C, j = C == null ? void 0 : C.geometry, te = F == null ? void 0 : F.geometry;
      !j || !te || (Array.isArray(te.points) && (j.points = te.points.map((K) => uo(K, o, s)), T = !0), Array.isArray(te.rawPoints) && (j.rawPoints = te.rawPoints.map((K) => uo(K, o, s)), T = !0), Array.isArray(te.processedPoints) && (j.processedPoints = te.processedPoints.map((K) => uo(K, o, s)), T = !0));
    }), T && p) {
      const C = qt().find((F) => String((F == null ? void 0 : F.actionGroupId) || "") === g);
      C && (C.frame = null);
    }
    return T;
  }
  function Ic(r, o = 1, s = 0, u = null, h = null, p = null) {
    const y = pa(r, h), g = String(y.actionGroupId || "").trim();
    if (!g) return !1;
    const w = Oi(y.layerKind), N = Array.isArray(u) ? u : Tn(g, y.layerKind), T = Array.isArray(N) ? new Map(N.map((j) => [String((j == null ? void 0 : j.id) || ""), j])) : null, C = (p == null ? void 0 : p.centerUv) ?? rl(g, y.layerKind, N);
    let F = !1;
    if (w.forEach((j) => {
      if (String((j == null ? void 0 : j.actionGroupId) || "").trim() !== g) return;
      const te = (T == null ? void 0 : T.get(String((j == null ? void 0 : j.id) || ""))) || j, K = j == null ? void 0 : j.geometry, V = te == null ? void 0 : te.geometry;
      !K || !V || (Array.isArray(V.points) && (K.points = V.points.map((ne) => co(ne, C, o, s)), F = !0), Array.isArray(V.rawPoints) && (K.rawPoints = V.rawPoints.map((ne) => co(ne, C, o, s)), F = !0), Array.isArray(V.processedPoints) && (K.processedPoints = V.processedPoints.map((ne) => co(ne, C, o, s)), F = !0));
    }), F && p) {
      const j = qt().find((te) => String((te == null ? void 0 : te.actionGroupId) || "") === g);
      j && (j.frame = null);
    }
    return F;
  }
  function Ec(r, o, s, u = null) {
    const h = Vt(r);
    if (!h) return !1;
    const p = dn().find((T) => String((T == null ? void 0 : T.id) || "").trim() === h);
    if (!p) return !1;
    const y = u && typeof u == "object" ? u : p, g = (y == null ? void 0 : y.transform) || {}, w = Number(g.du || 0) + Number(o || 0), N = q(Number(g.dv || 0) + Number(s || 0), -1, 1);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.du = w, p.transform.dv = N, !0;
  }
  function Up(r, o = 1, s = null) {
    const u = Vt(r);
    if (!u) return !1;
    const h = dn().find((N) => String((N == null ? void 0 : N.id) || "").trim() === u);
    if (!h) return !1;
    const p = s && typeof s == "object" ? s : h, y = (p == null ? void 0 : p.transform) || {}, g = Math.max(0.01, Number(y.scale || 1)), w = q(g * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = w, !0;
  }
  function wt() {
    const r = String(d.selectedId || "");
    if (!r) return null;
    const o = xi(r);
    if (o) return o;
    const s = _i(r);
    return s || (t === "cutout" ? nl().find((u) => String((u == null ? void 0 : u.id) || "") === r) || null : lr().find((u) => String((u == null ? void 0 : u.id) || "") === r) || null);
  }
  function In() {
    const r = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((u) => {
      const h = String(u || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const p = h === String(d.selectedId || "") ? wt() : xi(h) || _i(h) || (t === "cutout" ? nl().find((y) => String((y == null ? void 0 : y.id) || "") === h) : lr().find((y) => String((y == null ? void 0 : y.id) || "") === h));
      p && o.push(p);
    }), o;
  }
  function il(r = null) {
    const o = Array.isArray(r) ? r : In();
    if (!o || o.length < 2) return null;
    const s = o.map((N) => Ht(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!s.length) return null;
    const u = s.flatMap((N) => N.corners.map((T) => Number((T == null ? void 0 : T.x) || 0))), h = s.flatMap((N) => N.corners.map((T) => Number((T == null ? void 0 : T.y) || 0))), p = Math.min(...u), y = Math.max(...u), g = Math.min(...h), w = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (p + y) * 0.5, y: (g + w) * 0.5 },
      corners: [
        { x: p, y: g },
        { x: y, y: g },
        { x: y, y: w },
        { x: p, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (p + y) * 0.5, y: g, a: { x: p, y: g }, b: { x: y, y: g } },
        { edge: "right", x: y, y: (g + w) * 0.5, a: { x: y, y: g }, b: { x: y, y: w } },
        { edge: "bottom", x: (p + y) * 0.5, y: w, a: { x: y, y: w }, b: { x: p, y: w } },
        { edge: "left", x: p, y: (g + w) * 0.5, a: { x: p, y: w }, b: { x: p, y: g } }
      ],
      rotateStemBase: { x: (p + y) * 0.5, y: g },
      rotateHandle: { x: (p + y) * 0.5, y: g - 30 }
    };
  }
  function Dc(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(d.selectedIds) && d.selectedIds.includes(o);
  }
  function fo() {
    const r = wt();
    return r ? Lt(r) || Xt(r) ? "stroke" : vn(r) ? "frame" : "image" : null;
  }
  function En(r) {
    if (!r || typeof r != "object") return !1;
    if (Lt(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = qt().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Xt(r)) {
      const o = Vt(r.rasterObjectId || r.id || ""), s = dn().find((u) => String((u == null ? void 0 : u.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function al(r = null) {
    const o = Array.isArray(r) ? r : In();
    return o.length > 0 && o.every((s) => En(s));
  }
  function Gp(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Lt(r)) {
      const u = String(r.actionGroupId || r.id || "").trim(), h = qt().find((p) => String((p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || "").trim() === u);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (Xt(r)) {
      const u = Vt(r.rasterObjectId || r.id || ""), h = dn().find((p) => String((p == null ? void 0 : p.id) || "").trim() === u);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function Bp() {
    if (i) return;
    const r = In();
    if (!r.length) return;
    const o = !al(r);
    let s = !1;
    r.forEach((u) => {
      Gp(u, o) && (s = !0);
    }), s && (tt(), rt(), Ye(), ve());
  }
  function wi(r) {
    d.selectedId = (r == null ? void 0 : r.id) || null, d.selectedIds = r != null && r.id ? [r.id] : [], r && vt(r) ? x.active.selected_sticker_id = r.id || null : x.active.selected_sticker_id = null, r && vn(r) ? x.active.selected_shot_id = r.id || null : r ? vn(r) || (x.active.selected_shot_id = x.active.selected_shot_id) : x.active.selected_shot_id = null;
  }
  function Kp(r, o = null) {
    const s = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((y) => {
      const g = String((y == null ? void 0 : y.id) || "").trim();
      !g || u.has(g) || (u.add(g), s.push(g));
    }), d.selectedIds = s;
    const h = String(o || "").trim();
    d.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const p = wt();
    x.active.selected_sticker_id = p && vt(p) && p.id || null, p && vn(p) ? x.active.selected_shot_id = p.id || null : s.length || (x.active.selected_shot_id = null);
  }
  function Oc() {
    const r = (Array.isArray(x.shots) ? x.shots : []).map((s, u) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${u + 1}`)
    })), o = (Array.isArray(x.stickers) ? x.stickers : []).map((s, u) => {
      var p, y;
      const h = jt(s) ? String(s.id || ei) : String(((y = (p = x.assets) == null ? void 0 : p[s.asset_id]) == null ? void 0 : y.name) || s.asset_id || s.id || `Image ${u + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...r, ...o];
  }
  function Wp(r) {
    return r === "frame" ? De.camera : r === "stroke" ? De.paintbrush_vertical_tool : De.image;
  }
  function ol(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: Wp(r.kind)
    };
  }
  function Fc() {
    return Qs();
  }
  function jt(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === ei || String(r.source_kind || "") === nu;
  }
  function Si(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function Yp(r) {
    return jt(r) && Si(r) ? zm : 1;
  }
  function qp() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function Xp() {
    return String(qp() || "") === "lasso_fill";
  }
  function Jp() {
    if (i) return;
    const r = wt();
    !r || !jt(r) || (r.visible = Si(r), Bt(), tt(), rt(), je(), Ye(), ve());
  }
  function Zp() {
    if (i || t !== "stickers") return;
    const r = wt();
    if (!r || !jt(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = ul(Go, () => {
      ve();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Br(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), tt(), rt(), je(), Ye(), ve();
  }
  function Qp(r) {
    if (!r || !jt(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, u = ul(Go, () => {
      ve();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (s.vFOV_deg = Br(
      s.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), s;
  }
  function eg() {
    const r = wt();
    if (!r || !jt(r)) return !1;
    const o = Qp(r);
    if (!o) return !1;
    const s = (u, h) => Math.abs(Number(u || 0) - Number(h || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Rc(r) {
    return Ln.uiList(e, r);
  }
  function Lc(r) {
    return Ln.uiValue(e, r);
  }
  function zc() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Ss(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function tg() {
    const { metaKey: r } = zc(), o = Lc(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function Ni(r) {
    var o;
    return r ? r instanceof HTMLVideoElement ? [
      String(r.currentSrc || r.src || ""),
      Number(r.videoWidth || 0),
      Number(r.videoHeight || 0),
      String(((o = r.dataset) == null ? void 0 : o.panoFrameIdx) || "0")
    ].join("|") : r instanceof HTMLCanvasElement ? [
      "canvas",
      Number(r.width || 0),
      Number(r.height || 0),
      String(r.__panoFrameIdx || 0)
    ].join("|") : [
      String(r.currentSrc || r.src || ""),
      Number(r.naturalWidth || r.width || 0),
      Number(r.naturalHeight || r.height || 0)
    ].join("|") : "none";
  }
  function sl(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), u = o % 60;
    return `${s}:${String(u).padStart(2, "0")}`;
  }
  function Un(r = {}) {
    const o = Number(r.currentTime ?? Ne.editorTime ?? 0), s = Number(r.duration ?? P.videoTransport.duration ?? 0), u = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!P.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!P.videoTransport.playing, p = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!P.videoTransport.visible, y = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(B instanceof HTMLVideoElement ? B.muted : P.videoTransport.muted), g = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : B instanceof HTMLVideoElement ? B.volume : P.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Sc(B), N = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: u,
      playing: h,
      visible: p,
      loop: N,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: sl(o),
      durationLabel: sl(s),
      frameCount: Math.max(0, Number(r.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? P.videoTransport.fps ?? 24)),
      mode: String(r.mode || Ne.mode || "playback"),
      hasAudio: w,
      muted: y,
      volume: Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? P.videoTransport.thumbnailCount ?? Ur))
    });
  }
  function ur() {
    return !!(B instanceof HTMLVideoElement && B.getAttribute("src") && d.primaryTool !== "paint" && d.primaryTool !== "mask");
  }
  function ng() {
    Un({
      visible: ur()
    });
  }
  function Mi() {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return !1;
    const r = Number(B.videoWidth || 0), o = Number(B.videoHeight || 0);
    (et.width !== r || et.height !== o) && (et.width = r, et.height = o);
    const s = et.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(B, 0, 0, r, o), et.__panoFrameIdx = Number(et.__panoFrameIdx || 0) + 1, Ne.presentedTime = Number(Ne.editorTime || B.currentTime || 0), !0) : !1;
  }
  function $c() {
    return Ne.mode === "scrub" && Number(et.width || 0) > 0 && Number(et.height || 0) > 0 && Number(et.__panoFrameIdx || 0) > 0 ? et : B instanceof HTMLVideoElement && Number(B.videoWidth || 0) > 0 && Number(B.videoHeight || 0) > 0 && Number(B.readyState || 0) >= 2 ? B : null;
  }
  function ll(r) {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (Ne.requestedTime = o, !Ne.seeking && !(Math.abs(Number(B.currentTime || 0) - o) <= 5e-4)) {
      Ne.seeking = !0;
      try {
        B.currentTime = o;
      } catch {
        Ne.seeking = !1;
      }
    }
  }
  function ki() {
    if (!(B instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = zc(), o = Rc(r)[0] || null, s = xN(o), u = tg(), h = Math.max(0, Number((u == null ? void 0 : u.frames) || 0)), p = Math.max(1, Number((u == null ? void 0 : u.fps) || 24)), y = Number((u == null ? void 0 : u.duration) || (h > 0 ? h / p : 0)), g = !!(u != null && u.has_audio) || Sc(B);
    return s && B.dataset.panoSrc !== s ? (B.pause(), B.dataset.panoSrc = s, B.dataset.panoFrameIdx = "0", B.loop = !!P.videoTransport.loop, B.muted = !!P.videoTransport.muted, B.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), B.src = s, B.load(), Nc(s, y, p)) : !s && B.getAttribute("src") && (B.pause(), B.removeAttribute("src"), B.load(), so()), B.loop !== !!P.videoTransport.loop && (B.loop = !!P.videoTransport.loop), s && (!Array.isArray(P.videoTransport.thumbnails) || P.videoTransport.thumbnails.length === 0) && Nc(s, y, p), s || so(), Un({
      ready: !!s,
      playing: !B.paused && !B.ended,
      visible: !!s && d.primaryTool !== "paint" && d.primaryTool !== "mask",
      currentTime: Ne.editorTime,
      duration: y,
      frameCount: h,
      fps: p,
      mode: Ne.mode,
      hasAudio: g,
      loop: !!B.loop,
      muted: !!B.muted,
      volume: Number(B.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), s || null;
  }
  function rg(r, o = null) {
    var s;
    if (r && typeof r == "object" && !Array.isArray(r)) return r;
    if (Array.isArray(r) && r.length > 0) {
      const u = r[0];
      if (u && typeof u == "object" && !Array.isArray(u)) return u;
    }
    if (Array.isArray(o) && o.length > 0) {
      const u = (s = o[0]) == null ? void 0 : s.parsed_state;
      if (u && typeof u == "object" && !Array.isArray(u))
        return {
          yaw_deg: Number(u.yaw_deg || 0),
          pitch_deg: Number(u.pitch_deg || 0),
          hFOV_deg: Number(u.hFOV_deg || 30),
          rot_deg: Number(u.roll_deg || 0)
        };
    }
    return null;
  }
  function ul(r, o = null) {
    return au(e, r, Oe, o || (() => ve()));
  }
  function Vc(r = null) {
    return ul(Go, r);
  }
  function Br(r, o, s) {
    const u = Math.max(1, Number(o || 1)), h = Math.max(1, Number(s || 1)), p = q(Number(r || 30), 0.1, 179) * Qt, y = 2 * Math.atan(Math.tan(p * 0.5) * (h / u));
    return q(y * vr, 0.1, 179);
  }
  function ig(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const u = s.version;
      let h = null;
      if (typeof u == "number" && Number.isInteger(u) ? h = u : typeof u == "string" && /^\d+$/.test(u) && (h = Number.parseInt(u, 10)), h !== 1) return null;
      const p = s.pose;
      if (!p || typeof p != "object") return null;
      const y = Number(p.yaw_deg), g = Number(p.pitch_deg), w = Number(p.roll_deg), N = Number(p.hFOV_deg);
      if (![y, g, w, N].every((j) => Number.isFinite(j))) return null;
      let T = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(T, -0) && (T = 0);
      const C = {
        yaw_deg: T,
        pitch_deg: q(g, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: q(N, 0.1, 179)
      }, F = Number(s.source_aspect);
      return Number.isFinite(F) && F > 0 && (C.source_aspect = F), C;
    } catch {
      return null;
    }
  }
  function jc(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), u = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), p = ra(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(o) ? o : 0),
        pitch_deg: q(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: q(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: p
    };
  }
  function ag(r) {
    var g;
    if (!r || typeof r != "object") return jc(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), u = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), p = Number(r == null ? void 0 : r.vFOV_deg);
    let y = 1;
    if (Number.isFinite(h) && Number.isFinite(p)) {
      const w = q(h, 0.1, 179) * Qt, N = q(p, 0.1, 179) * Qt, T = Math.tan(N * 0.5);
      if (Math.abs(T) > 1e-6) {
        const C = Math.tan(w * 0.5) / T;
        Number.isFinite(C) && C > 0 && (y = C);
      }
    }
    if (r != null && r.asset_id && ((g = x == null ? void 0 : x.assets) != null && g[r.asset_id])) {
      const w = x.assets[r.asset_id], N = Number((w == null ? void 0 : w.w) || 0), T = Number((w == null ? void 0 : w.h) || 0);
      N > 0 && T > 0 && (y = N / T);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(o) ? o : 0),
        pitch_deg: q(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: q(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function og(r) {
    return Ln.linkedValue(e, r);
  }
  function sg(r, o, s) {
    const u = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : ig(o);
    if (u) {
      const y = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || u.source_aspect || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(u.yaw_deg || 0),
        pitch_deg: Number(u.pitch_deg || 0),
        hFOV_deg: Number(u.hFOV_deg || 30),
        vFOV_deg: Br(u.hFOV_deg, y, g),
        rot_deg: Number(u.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), p = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Br(30, h, p),
      rot_deg: 0
    };
  }
  function Hc(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((j) => String((j == null ? void 0 : j.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, u = Vc(() => {
      var j;
      (j = e.__panoExternalStickerSync) == null || j.call(e, "image-loaded");
    }), h = rg(Lc("pano_sticker_input_pose"), null), p = og("sticker_state"), y = Ln.externalStateHash(e, p), g = Array.isArray(x.stickers) ? x.stickers : x.stickers = [], w = g.findIndex((j) => String((j == null ? void 0 : j.id) || "") === ei);
    if (s == null) {
      w >= 0 && (g.splice(w, 1), d.selectedId === ei && (d.selectedId = null, d.selectedIds = [], x.active.selected_sticker_id = null), rt(), je(), Ye(), ve());
      return;
    }
    const N = g.reduce((j, te) => Math.max(j, Number((te == null ? void 0 : te.z_index) || 0)), -1);
    let T = w >= 0 ? g[w] : null;
    const C = !T || Number(T.source_link_id ?? -1) !== Number(s) || String(T.source_state_hash || "") !== y;
    T || (T = {
      id: ei,
      source_kind: nu
    }, g.push(T)), T.id = ei, T.source_kind = nu, T.source_link_id = Number(s), T.source_state_hash = y, T.visible = T.visible !== !1;
    let F = !1;
    if (C) {
      const j = sg(h, p, u);
      Object.assign(T, j, {
        initial_pose: { ...j },
        visible: !0,
        z_index: N + 1
      }), F = !0;
    } else if (u && (u.complete || u.naturalWidth || u.width)) {
      const j = Br(
        Number(T.hFOV_deg || 30),
        Number(u.naturalWidth || u.width || 1),
        Number(u.naturalHeight || u.height || 1)
      );
      Math.abs(Number(T.vFOV_deg || 0) - j) > 1e-6 && (T.vFOV_deg = j, F = !0);
    }
    F && (rt(), je(), Ye()), ve();
  }
  function ga(r = {}) {
    const s = r.preservePanelValues !== !1 ? wt() : null;
    s && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: yr(s)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, x.active.selected_sticker_id = null, x.active.selected_shot_id = null;
  }
  function lg() {
    if (t !== "cutout") return;
    const r = ze();
    r && (d.selectedId = String(r.id || "") || null, d.selectedIds = d.selectedId ? [d.selectedId] : []);
  }
  function cl() {
    if (t !== "cutout") return;
    const r = ze();
    $i(P.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? De.camera : De.plus_circle
    });
  }
  function Uc() {
    const r = t === "cutout" && d.mode === "frame", o = !r && !!d.showGrid;
    $i(P.floatingButtons, "action", "reset-view", {
      disabled: i || r
    }), $i(P.floatingButtons, "action", "toggle-grid", {
      icon: o ? De.eye : De.eye_dashed,
      pressed: o ? "true" : "false",
      label: o ? "Hide Grid" : "Show Grid",
      tip: o ? "Hide grid" : "Show grid",
      disabled: i || r
    });
  }
  function cr() {
    var s;
    const r = !!ze();
    d.mode === "frame" && !r && (d.mode = "pano"), d.outputPreviewRect = null, P.viewButtons.forEach((u) => {
      const h = u.key === d.mode;
      u.pressed = h ? "true" : "false", u.visible = !(u.key === "frame" && t !== "cutout"), u.disabled = u.key === "frame" ? !r : !1;
    });
    const o = t === "cutout" && d.mode === "frame" ? ze() : null;
    P.frameRail.visible = !!o, P.frameRail.disabled = i || (o == null ? void 0 : o.locked) === !0, P.frameRollKnob.visible = !!o && !i && o.locked !== !0, P.frameRollKnob.disabled = i || (o == null ? void 0 : o.locked) === !0, P.frameRollKnob.rollDeg = Number((o == null ? void 0 : o.roll_deg) ?? (o == null ? void 0 : o.rot_deg) ?? 0), P.frameRollKnob.displayValue = Hi(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((s = d.interaction) == null ? void 0 : s.kind) === "roll_frame", P.frameRollKnob.armed = !!o && d.altModifier === !0, P.frameRail.rollKnob = P.frameRollKnob, P.frameRail.aspectLabel = o ? yr(o) : "", P.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((u) => ({
      value: u,
      label: u,
      active: !!o && String(yr(o)) === u
    })), o || (P.frameRail.aspectOpen = !1), P.outputPreviewToggle.visible = t === "cutout" && d.mode !== "frame" && !!ze(), t === "cutout" && P.cameraPreview && (P.cameraPreview.visible = d.mode !== "frame", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && ce.pendingStableLayoutFrames <= 0 && ce.hasPresentedFrame), Uc(), Sf() ? ft(d.pointerPos) : Mt(d.mode === "pano" ? "grab" : "default");
  }
  function ug() {
    const o = Xc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function fl() {
    const r = Wn(d.viewYaw, d.viewPitch);
    let o = rr(0, 1, 0);
    Math.abs(Rn(r, o)) > 0.999 && (o = rr(0, 0, 1));
    const s = ji(qo(o, r)), u = ji(qo(r, s));
    return { right: s, up: u, fwd: r };
  }
  function ba(r) {
    const { right: o, up: s, fwd: u } = fl(), h = Rn(r, o), p = Rn(r, s), y = Rn(r, u);
    if (y <= 1e-5) return null;
    const g = A.width, w = A.height, N = d.viewFov * Qt, T = 2 * Math.atan(Math.tan(N / 2) * (w / g)), C = g / 2 / Math.tan(N / 2), F = w / 2 / Math.tan(T / 2);
    return {
      x: g / 2 + h / y * C,
      y: w / 2 - p / y * F,
      z: y
    };
  }
  function dl(r, o) {
    const { right: s, up: u, fwd: h } = fl(), p = A.width, y = A.height, g = d.viewFov * Qt, w = 2 * Math.atan(Math.tan(g / 2) * (y / p)), N = (r - p / 2) / (p / 2) * Math.tan(g / 2), T = (y / 2 - o) / (y / 2) * Math.tan(w / 2), C = Wo(Wo(Yo(s, N), Yo(u, T)), h);
    return ji(C);
  }
  function Er() {
    const r = A.width, o = A.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const g = o, w = g * s;
      return { x: (r - w) * 0.5, y: 0, w, h: g };
    }
    const h = r, p = h / s;
    return { x: 0, y: (o - p) * 0.5, w: h, h: p };
  }
  function Gc(r) {
    var y;
    if (r && typeof r == "object" && (jt(r) || r.external === !0))
      return Vc(() => {
        var g;
        (g = e.__panoExternalStickerSync) == null || g.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = Oe.get(o);
    if (s) return s;
    const u = (y = x.assets) == null ? void 0 : y[o], h = _N(u);
    if (!h) return null;
    const p = new Image();
    return Np(p, h), p.onload = () => {
      Mp(p, h), ve();
    }, p.onerror = () => {
      kp(p, h), ve();
    }, p.src = h, Oe.set(o, p), p;
  }
  function Bc(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const u = Le.get(s);
    if (u)
      return u.complete || u.width || u.naturalWidth, u;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = s, Le.set(s, h), h;
  }
  function cg(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = Be.get(o);
    if (s) return s.ready ? s : null;
    const u = Bc(r, () => {
      const T = Be.get(o);
      T && (T.ready = !1), ve({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const h = Number(u.naturalWidth || u.width || 0), p = Number(u.naturalHeight || u.height || 0);
    if (h < 1 || p < 1) return null;
    const y = document.createElement("canvas");
    y.width = h, y.height = p;
    const g = y.getContext("2d", { willReadFrequently: !0 });
    if (!g) return null;
    g.clearRect(0, 0, h, p), g.drawImage(u, 0, 0, h, p);
    const w = g.getImageData(0, 0, h, p).data, N = { canvas: y, width: h, height: p, alpha: w, ready: !0 };
    return Be.set(o, N), N;
  }
  function fg(r, o, s = 1, u = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), y = kn(Number(r.u || 0), h), g = Number(r.v || 0) - p, w = Math.max(0.02, Number(s || 1)), N = Number(u || 0) * Qt, T = Math.cos(N), C = Math.sin(N), F = y / w, j = g / w, te = F * T + j * C, K = -F * C + j * T;
    return {
      ...r,
      u: ((h + te) % 1 + 1) % 1,
      v: p + K
    };
  }
  function dg(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const u = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, p = {
      u: ((Number(o.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(u.dv || 0)
    }, y = fg(
      p,
      h,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), g = Number(s.u1 || 0) - Number(s.u0 || 0), w = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(g > 1e-6) || !(w > 1e-6)) return null;
    const N = kn(Number(y.u || 0), Number(s.u0 || 0)) / g, T = (Number(y.v || 0) - Number(s.v0 || 0)) / w;
    if (N < 0 || N > 1 || T < 0 || T > 1) return 0;
    const C = cg(r);
    if (!C) return null;
    const F = q(Math.floor(N * C.width), 0, C.width - 1), j = q(Math.floor(T * C.height), 0, C.height - 1);
    return Number(C.alpha[(j * C.width + F) * 4 + 3] || 0);
  }
  function Kc(r, o, s, u = null) {
    if (!(o != null && o.visible) || !pr(s, o.corners)) return !1;
    const h = u || On(s, performance.now()), p = dg(r, h);
    return p === null ? !0 : p > 8;
  }
  function hg() {
    var u, h, p, y, g, w, N, T;
    const r = ((h = (u = d.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : h.call(u, el(!1))) || null, o = Math.max(1, Number(((p = r == null ? void 0 : r.descriptor) == null ? void 0 : p.width) || ((g = (y = r == null ? void 0 : r.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : g.width) || 2048)), s = Math.max(1, Number(((w = r == null ? void 0 : r.descriptor) == null ? void 0 : w.height) || ((T = (N = r == null ? void 0 : r.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : T.height) || 1024));
    return { width: o, height: s };
  }
  function mg() {
    var j, te, K;
    const r = d.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = _n(), u = `${lo()}:${s.width}:${s.height}`;
    if (((j = d._activePaintEraserPreviewInfo) == null ? void 0 : j.cacheKey) === u)
      return d._activePaintEraserPreviewInfo.value || null;
    const h = Zt(o), p = (h == null ? void 0 : h.geometry) || null;
    if (p && String(p.geometryKind || "") !== "lasso_fill") {
      const V = Array.isArray(p.rawPoints) && p.rawPoints.length ? p.rawPoints : Array.isArray(p.points) ? p.points : [];
      p.processedPoints = _l(V, h.targetSpace, !0);
    }
    const y = va(s.width, s.height, { readback: !0 });
    if (!cf(y, h, { w: s.width, h: s.height })) return null;
    const g = ((K = (te = y.ctx) == null ? void 0 : te.getImageData(0, 0, s.width, s.height)) == null ? void 0 : K.data) || null;
    if (!g) return null;
    let w = s.width, N = s.height, T = -1, C = -1;
    for (let V = 0; V < s.height; V += 1)
      for (let ne = 0; ne < s.width; ne += 1)
        g[(V * s.width + ne) * 4 + 3] <= 8 || (ne < w && (w = ne), V < N && (N = V), ne > T && (T = ne), V > C && (C = V));
    if (T < w || C < N)
      return d._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const F = {
      surface: y,
      bounds: { minX: w, minY: N, maxX: T, maxY: C },
      key: `${u}:${w}:${N}:${T}:${C}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: u, value: F }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), F;
  }
  function Pi() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function pg(r, o, s) {
    var u, h;
    if (!r) return null;
    if (r.type === "rasterObject" && ((u = r.item) != null && u.bbox)) {
      const p = r.item.bbox, y = ((h = r.item) == null ? void 0 : h.transform) || {}, g = Number(p.u0 || 0) + Number(y.du || 0), w = Number(p.u1 || 0) + Number(y.du || 0), N = Number(p.v0 || 0) + Number(y.dv || 0), T = Number(p.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(q(N, 0, 1) * s),
        maxY: Math.ceil(q(T, 0, 1) * s),
        wraps: w - g >= 1 || g < 0 || w > 1
      };
    }
    if (r.type === "strokeGroup") {
      const p = Tn(r.actionGroupId, "paint"), y = Ir(r.actionGroupId, "paint", p);
      if (!y) return null;
      const g = y.centerUv.u - y.halfW, w = y.centerUv.u + y.halfW, N = y.centerUv.v - y.halfH, T = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(q(N, 0, 1) * s),
        maxY: Math.ceil(q(T, 0, 1) * s),
        wraps: w - g >= 1 || g < 0 || w > 1
      };
    }
    return null;
  }
  function gg(r, o, s) {
    if (!r || !o) return !1;
    const u = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: s - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], h = u(r), p = u(o);
    return h.some((y) => p.some((g) => !(y.maxX < g.minX || g.maxX < y.minX || y.maxY < g.minY || g.maxY < y.minY)));
  }
  function bg(r, o, s) {
    var we, Fe, $e, Xe, _e, se, ye;
    if (!r || !o || !((we = s == null ? void 0 : s.surface) != null && we.canvas) || o.type !== "rasterObject") return r;
    const u = Number(r.width || s.surface.canvas.width || 0), h = Number(r.height || s.surface.canvas.height || 0);
    if (u < 1 || h < 1) return r;
    const p = pg(o, u, h);
    if (p && !gg(p, s.bounds, u)) return r;
    const y = String(((Fe = o.item) == null ? void 0 : Fe.id) || o.id || ""), g = (($e = o.item) == null ? void 0 : $e.transform) || {}, w = `${s.key}:${y}:${u}:${h}:${Number(g.du || 0).toFixed(6)}:${Number(g.dv || 0).toFixed(6)}:${Number(g.rot_deg || 0).toFixed(3)}:${Number(g.scale || 1).toFixed(4)}`, N = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(w)) return N.get(w);
    const T = q(Math.floor(Number(((Xe = s.bounds) == null ? void 0 : Xe.minX) || 0)), 0, Math.max(0, u - 1)), C = q(Math.floor(Number(((_e = s.bounds) == null ? void 0 : _e.minY) || 0)), 0, Math.max(0, h - 1)), F = q(Math.ceil(Number(((se = s.bounds) == null ? void 0 : se.maxX) || 0)), T, Math.max(0, u - 1)), j = q(Math.ceil(Number(((ye = s.bounds) == null ? void 0 : ye.maxY) || 0)), C, Math.max(0, h - 1)), te = Math.max(1, F - T + 1), K = Math.max(1, j - C + 1), V = va(u, h, { readback: !0 });
    V.ctx.clearRect(0, 0, u, h), V.ctx.drawImage(r, 0, 0);
    const ne = V.ctx.getImageData(T, C, te, K);
    V.ctx.save(), V.ctx.globalCompositeOperation = "destination-out", V.ctx.drawImage(s.surface.canvas, 0, 0), V.ctx.restore();
    const he = V.ctx.getImageData(T, C, te, K);
    let le = !1;
    for (let Ie = 0; Ie < te * K; Ie += 1) {
      const Ee = ne.data[Ie * 4 + 3], Te = he.data[Ie * 4 + 3];
      if (Ee > Te) {
        le = !0;
        break;
      }
    }
    return le ? (N.size > 64 && N.clear(), N.set(w, V.canvas), V.canvas) : (N.set(w, r), r);
  }
  function Wc(r, o = null) {
    const s = Vt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), u = (r == null ? void 0 : r.bbox) || null;
    if (!s || !u) return null;
    const h = Bc(r, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: p, height: y } = hg(), g = (r == null ? void 0 : r.transform) || {}, w = [
      s,
      p,
      y,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      g.du,
      g.dv,
      g.rot_deg,
      g.scale,
      _a()
    ].join(":"), N = bt.get(w);
    if (N) return N;
    bt.size > 64 && bt.clear();
    const T = document.createElement("canvas");
    T.width = p, T.height = y;
    const C = T.getContext("2d");
    if (!C) return null;
    const F = Number(u.u0 || 0) * p, j = Number(u.v0 || 0) * y, te = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * p), K = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * y), V = F + te * 0.5 + Number(g.du || 0) * p, ne = j + K * 0.5 + Number(g.dv || 0) * y, he = Number(g.rot_deg || 0) * Qt, le = Math.max(0.01, Number(g.scale || 1));
    for (const we of [-p, 0, p])
      C.save(), C.translate(V + we, ne), C.rotate(he), C.scale(le, le), C.drawImage(h, -te * 0.5, -K * 0.5, te, K), C.restore();
    return bt.set(w, T), T;
  }
  function yg() {
    return Ys(x, {
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function vg(r) {
    return $m(
      x,
      (o, s, u) => Gc(u || o),
      { scene: r }
    );
  }
  function Yc(r, o, s, u, h = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const p = Kr(u);
    if (ef(o, s))
      return Ag(
        o,
        s,
        p && d.showPanorama ? u : null,
        `${h}_bg_gl`
      );
    const g = go(), w = bo(g), N = d.showObjects ? yo() : ya([]), C = Oa({
      stateRevision: [
        h,
        p ? Ni(u) : "no_bg",
        Array.isArray(w) ? w.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        N.length ? N.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: p && d.showPanorama ? u : null,
      backgroundRevision: p ? `${h}:${Ni(u)}` : "",
      coverageDeg: Yt(x.coverage),
      scene: g,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: N,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), F = de;
    if (!F.syncState(C)) return !1;
    const te = F.renderToTarget(`${h}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return te ? (r.drawImage(te, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function hl(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const u = await wn.fetchApi("/upload/image", { method: "POST", body: s });
    if (!u || u.status !== 200)
      throw new Error(`upload failed (${(u == null ? void 0 : u.status) || "no-response"})`);
    const h = await u.json(), p = String((h == null ? void 0 : h.name) || "").trim();
    if (!p)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: p,
      subfolder: String((h == null ? void 0 : h.subfolder) || "panorama_stickers"),
      storage: String((h == null ? void 0 : h.type) || "input"),
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function ml(r, o) {
    const s = await new Promise((g) => r.toBlob(g, "image/png")), u = new FormData();
    u.append("image", s, o), u.append("type", "input"), u.append("subfolder", "panorama_stickers"), u.append("overwrite", "1");
    const h = await wn.fetchApi("/upload/image", { method: "POST", body: u });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const p = await h.json(), y = String((p == null ? void 0 : p.name) || "").trim();
    if (!y) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: y,
      subfolder: String((p == null ? void 0 : p.subfolder) || "panorama_stickers"),
      storage: String((p == null ? void 0 : p.type) || "input")
    };
  }
  let ho = null, mo = !1;
  function _g() {
    const r = Mh(x.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = x.painting_layer, s = Ii();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function qc() {
    const r = String(e.id ?? "0"), o = Bo.get(r);
    if (mo && o) return o;
    const s = (async () => {
      var p, y, g, w, N, T, C, F, j, te, K, V;
      const u = Ii(), h = Mh(x.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        x.painting_layer !== null && (x.painting_layer = null, ho = u, mn());
        return;
      }
      if (ho !== u && !mo) {
        mo = !0;
        try {
          wo();
          const ne = el(!1), he = ((y = (p = d.paintEngine) == null ? void 0 : p.getErpTarget) == null ? void 0 : y.call(p, ne)) || null, le = ((g = he == null ? void 0 : he.displayPaint) == null ? void 0 : g.canvas) || null, we = ((w = he == null ? void 0 : he.committedMask) == null ? void 0 : w.canvas) || null, Fe = Math.max(1, Number(((N = he == null ? void 0 : he.descriptor) == null ? void 0 : N.width) || (le == null ? void 0 : le.width) || (we == null ? void 0 : we.width) || 2048)), $e = Math.max(1, Number(((T = he == null ? void 0 : he.descriptor) == null ? void 0 : T.height) || (le == null ? void 0 : le.height) || (we == null ? void 0 : we.height) || 1024));
          (!le && h.totalPaintCount > 0 || !we && h.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((C = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== Fe || Number(((F = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : F.height) || 0) !== $e) && (d._paintLayerSyncBlankSurface = va(Fe, $e)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Fe, $e));
          const Xe = le || h.totalPaintCount > 0 && ((j = d._paintLayerSyncBlankSurface) == null ? void 0 : j.canvas) || null, _e = we || h.totalMaskCount > 0 && ((te = d._paintLayerSyncBlankSurface) == null ? void 0 : te.canvas) || null;
          if (!Xe && !_e) return;
          let se = null, ye = null;
          const Ie = [];
          if (h.totalPaintCount > 0) {
            se = await ml(Xe, `pano_paint_${r}.png`);
            for (const Ee of ne) {
              const Te = String(Ee || "").trim();
              if (!Te) continue;
              const Ue = ((V = (K = d.paintEngine) == null ? void 0 : K.getGroupDisplayCanvas) == null ? void 0 : V.call(K, Te)) || null;
              if (!Ue) continue;
              const it = Te.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await ml(Ue, `pano_group_${r}_${it}.png`);
              qe && Ie.push({
                id: Te,
                actionGroupId: Te,
                image: qe
              });
            }
          }
          h.totalMaskCount > 0 && (ye = await ml(_e, `pano_mask_${r}.png`)), u === Ii() && (x.painting_layer = {
            paint: se,
            mask: ye,
            groups: Ie,
            revision: u
          }, ho = u, mn());
        } catch (ne) {
          throw ne;
        } finally {
          mo = !1;
        }
      }
    })();
    return Bo.set(r, s), s.finally(() => {
      Bo.get(r) === s && Bo.delete(r);
    }), s;
  }
  function Ai() {
    if (t === "cutout") {
      const g = $c();
      if (g) return g;
      const w = ou(
        e,
        ["erp_image", "bg_erp"],
        () => ve(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !Lu(w) ? w : au(e, "pano_input_images", Oe, () => ve()) || w || null;
    }
    const r = $c();
    if (r) return r;
    const o = au(e, "pano_input_images", Oe, () => ve());
    if (o && !Lu(o)) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((g) => String((g == null ? void 0 : g.name) || "")) : [], u = s.includes("erp_image"), h = s.includes("bg_erp");
    let p = [];
    return i && (u || h) ? p = u ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : p = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], ou(e, p, () => ve(), `background:${p.join("|")}`) || o || null;
  }
  function Kr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function xg() {
    let r = fa;
    const o = [];
    if (d.showPanorama) {
      const s = Ai();
      r = Ru(s, Kr);
    }
    if (d.showObjects) {
      const s = Array.isArray(x.stickers) ? x.stickers : [];
      for (const u of s) {
        if ((u == null ? void 0 : u.visible) === !1) continue;
        const h = Gc(u);
        o.push(Ru(h, Kr));
      }
    }
    return YS({
      presented: ce.hasPresentedFrame,
      background: r,
      stickers: o
    });
  }
  function Ci() {
    const r = new Set(
      (x.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(x.assets || {}).forEach((o) => {
      r.has(o) || (delete x.assets[o], Oe.delete(o));
    });
  }
  function pl(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(q(r.y, -1, 1))
    };
  }
  function gl(r, o = null) {
    const { lon: s, lat: u } = pl(r), h = Er();
    let p = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const y = h.y + (0.5 - u / Math.PI) * h.h;
    if (o !== null) {
      for (; p - o > h.w / 2; ) p -= h.w;
      for (; p - o < -h.w / 2; ) p += h.w;
    }
    return { x: p, y, z: 1 };
  }
  function po(r) {
    const o = Wn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = rr(0, 1, 0);
    Math.abs(Rn(o, s)) > 0.999 && (s = rr(0, 0, 1));
    const u = ji(qo(s, o)), h = ji(qo(o, u)), p = Math.tan(q(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Qt), y = Math.tan(q(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Qt), g = Number(r.rot_deg || r.roll_deg || 0) * Qt, w = Math.cos(g), N = Math.sin(g);
    return {
      centerDir: o,
      right: u,
      up: h,
      tanX: p,
      tanY: y,
      cr: w,
      sr: N
    };
  }
  function Dr(r, o, s) {
    const u = o * r.cr - s * r.sr, h = o * r.sr + s * r.cr;
    return ji(Wo(Wo(r.centerDir, Yo(r.right, u)), Yo(r.up, h)));
  }
  function Xc(r) {
    const o = po(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: h }) => Dr(o, u * o.tanX, h * o.tanY));
  }
  function Jc(r, o, s) {
    const u = po(r), h = (o * 2 - 1) * u.tanX, p = (1 - s * 2) * u.tanY;
    return Dr(u, h, p);
  }
  function Zc(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: q((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function wg(r) {
    var w, N, T, C;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, u = Math.max(0.01, Number(((w = r == null ? void 0 : r.transform) == null ? void 0 : w.scale) || 1)), h = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.rot_deg) || 0), p = Number(((T = r == null ? void 0 : r.transform) == null ? void 0 : T.du) || 0), y = Number(((C = r == null ? void 0 : r.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((F) => uo(co(F, s, u, h), p, y));
  }
  function Sg(r) {
    const o = Vt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, u = (r == null ? void 0 : r.bbox) || {}, h = `${o}:${d.mode}:${_a()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (d.mode === "frame") {
      const p = ze(), y = p ? zt(p) : null;
      return `${h}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Ng(r) {
    const o = String((r == null ? void 0 : r.id) || ""), u = [
      vn(r) ? "frame" : vt(r) ? "sticker" : "item",
      o,
      d.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      yr(r)
    ].join(":");
    if (d.mode === "frame") {
      const h = ze(), p = h ? zt(h) : null;
      return `${u}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((p == null ? void 0 : p.x) || 0))}:${Math.round(Number((p == null ? void 0 : p.y) || 0))}:${Math.round(Number((p == null ? void 0 : p.w) || 0))}:${Math.round(Number((p == null ? void 0 : p.h) || 0))}`;
    }
    return `${u}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Mg() {
    var o;
    const r = String(((o = x.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : r === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function Qc() {
    var r;
    return !!Q && !!((r = de == null ? void 0 : de.isSupported) != null && r.call(de));
  }
  function ef(r, o) {
    return !Qc() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((A == null ? void 0 : A.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((A == null ? void 0 : A.height) || 0));
  }
  function go() {
    return d.showObjects ? yg() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function bo(r) {
    return !d.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : vg(r);
  }
  function tf() {
    var r, o;
    return ((o = (r = d.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function kg() {
    return tf() ? `${xl()}:mask_display` : "";
  }
  function ya(r) {
    if (!d.showMask) return r;
    const o = tf();
    if (!o) return r;
    const s = kg(), u = r.reduce((y, g) => Math.max(y, Number((g == null ? void 0 : g.zIndex) || 0)), -1), h = (Array.isArray(x.stickers) ? x.stickers : []).reduce((y, g) => Math.max(y, Number((g == null ? void 0 : g.z_index) || 0)), -1), p = Math.max(u, h);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: p + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function yo() {
    var u, h;
    const r = tl(!0), o = mg(), s = [];
    for (const p of r) {
      if ((p == null ? void 0 : p.type) === "strokeGroup") {
        const y = String(p.actionGroupId || p.id || "");
        if (!y) continue;
        const g = ((h = (u = d.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : h.call(u, y)) || null;
        if (!g) continue;
        s.push({
          id: `paint_group:${y}`,
          source: g,
          revision: `${xl()}:${y}`,
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((p == null ? void 0 : p.type) === "rasterObject") {
        const y = p.item || null, g = Vt((y == null ? void 0 : y.id) || p.id || "");
        if (!g) continue;
        const w = Wc(y, () => ve());
        if (!w) continue;
        const N = bg(w, p, o), T = (y == null ? void 0 : y.transform) || {};
        s.push({
          id: `raster:${g}`,
          source: N,
          revision: [
            Ii(),
            (o == null ? void 0 : o.key) || "",
            g,
            Number(T.du || 0).toFixed(6),
            Number(T.dv || 0).toFixed(6),
            Number(T.rot_deg || 0).toFixed(3),
            Number(T.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return ya(s);
  }
  function Pg(r, o = "modal_bg_gl") {
    const s = go(), u = bo(s), h = Kr(r), p = h ? Ni(r) : "none", y = d.showObjects ? yo() : ya([]), g = null, w = [
      o,
      p,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((N) => String((N == null ? void 0 : N.id) || "")).join(",") : "none",
      Array.isArray(u) ? u.map((N) => `${String((N == null ? void 0 : N.assetId) || "")}:${String((N == null ? void 0 : N.revision) || "")}`).join(",") : "none",
      y.length ? y.map((N) => `${String((N == null ? void 0 : N.id) || "")}:${String((N == null ? void 0 : N.revision) || "")}:${Number((N == null ? void 0 : N.zIndex) || 0)}`).join(",") : "paint:none",
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Oa({
        stateRevision: w,
        backgroundSource: h ? r : null,
        backgroundRevision: h ? `${o}:${p}` : "",
        coverageDeg: Yt(x.coverage),
        scene: s,
        textures: u,
        paintSource: g,
        paintRevision: "",
        rasterEntries: y,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || u.length > 0 || y.length > 0
    };
  }
  function bl() {
    if (!Q) return;
    const r = Q.getContext("webgl2");
    if (r)
      r.viewport(0, 0, Q.width, Q.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = Q.getContext("2d");
      o && (o.clearRect(0, 0, Q.width, Q.height), o.fillStyle = "#070707", o.fillRect(0, 0, Q.width, Q.height));
    }
    ce.backgroundWasVisible = !1, ce.backgroundDirty = !1;
  }
  function Ag(r, o, s, u = "modal_bg_gl") {
    var N;
    if (!ef(r, o)) return !1;
    if (!ce.backgroundDirty && ce.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: p } = Pg(s, u);
    if (!p || !de.syncState(h))
      return bl(), !1;
    const g = de.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (N = Q == null ? void 0 : Q.getContext) == null ? void 0 : N.call(Q, "2d");
    return !g || !w ? (bl(), !1) : (w.clearRect(0, 0, Q.width, Q.height), w.drawImage(g, 0, 0, Q.width, Q.height), ce.backgroundWasVisible = !0, ce.backgroundDirty = !1, !0);
  }
  function Cg(r = !1) {
    const o = A.width, s = A.height, u = Er();
    if (k.globalAlpha = 1, k.lineWidth = 1, r || (k.fillStyle = "#070707", k.fillRect(0, 0, o, s), k.fillStyle = "#070707", k.fillRect(u.x, u.y, u.w, u.h)), wo(), Yc(
      k,
      { x: u.x, y: u.y, w: u.w, h: u.h },
      { mode: "unwrap" },
      Ai(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      k.strokeStyle = "#3f3f46";
      for (let p = 0; p <= 16; p += 1) {
        const y = u.x + u.w * p / 16;
        k.beginPath(), k.moveTo(y, u.y), k.lineTo(y, u.y + u.h), k.stroke();
      }
      for (let p = 0; p <= 8; p += 1) {
        const y = u.y + u.h * p / 8;
        k.beginPath(), k.moveTo(u.x, y), k.lineTo(u.x + u.w, y), k.stroke();
      }
      k.strokeStyle = "rgba(250, 250, 250, 0.86)", k.lineWidth = 1.2, k.beginPath(), k.moveTo(u.x, u.y + u.h / 2), k.lineTo(u.x + u.w, u.y + u.h / 2), k.stroke(), k.fillStyle = "rgba(250, 250, 250, 0.42)", k.font = "500 11px Geist, sans-serif", k.textAlign = "center";
      const h = u.y + u.h * 0.57;
      k.fillText("Left", u.x + u.w * 0.25, h), k.fillText("Front", u.x + u.w * 0.5, h), k.fillText("Right", u.x + u.w * 0.75, h), k.fillText("Back", u.x + 38, h), k.fillText("Back", u.x + u.w - 38, h);
    }
  }
  function nf(r, o, s = 1) {
    let u = !1;
    k.strokeStyle = o, k.lineWidth = s, k.beginPath();
    for (const h of r) {
      const p = ba(h);
      if (!p) {
        u = !1;
        continue;
      }
      u ? k.lineTo(p.x, p.y) : (k.moveTo(p.x, p.y), u = !0);
    }
    k.stroke();
  }
  function Tg(r = !1) {
    const o = A.width, s = A.height;
    if (r || (Qc() ? k.clearRect(0, 0, o, s) : (k.fillStyle = "#070707", k.fillRect(0, 0, o, s))), wo(), Yc(
      k,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov,
        coverageDeg: Yt(x.coverage)
      },
      Ai(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const p = [];
        for (let y = -89; y <= 89; y += 4) p.push(Wn(h, y));
        nf(p, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const p = [];
        for (let y = -180; y <= 180; y += 4) p.push(Wn(y, h));
        nf(p, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: Wn(-90, 0) },
        { name: "Front", dir: Wn(0, 0) },
        { name: "Right", dir: Wn(90, 0) },
        { name: "Back", dir: Wn(180, 0) }
      ];
      k.fillStyle = "rgba(250, 250, 250, 0.42)", k.font = "500 11px Geist, sans-serif", k.textAlign = "center", u.forEach((h) => {
        const p = ba(h.dir);
        p && k.fillText(h.name, p.x, p.y + 24);
      });
    }
  }
  function Ig(r, o = null, s = null, u = null) {
    if (d.mode === "frame") {
      const h = o || ze();
      if (!h) return [];
      const p = s || zt(h);
      return d0(r, h, p);
    }
    return ff(r, u);
  }
  function vo(r, o = null, s = null, u = null, h = null) {
    if (!r) return null;
    if (d.mode === "unwrap") {
      const y = ff([r], h);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const p = Ti(r);
    return p ? fr(p, o, s, u) : null;
  }
  function Eg(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), u = Tn(s, r.layerKind), h = Ir(s, r.layerKind, u), p = (h == null ? void 0 : h.centerUv) || rl(s, r.layerKind, u), y = d.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = [], w = d.mode === "frame" ? ze() : null, N = w ? zt(w) : null;
    for (const le of u) {
      const we = (le == null ? void 0 : le.geometry) || null, Fe = (we == null ? void 0 : we.geometryKind) === "lasso_fill" ? we == null ? void 0 : we.points : (we == null ? void 0 : we.processedPoints) || (we == null ? void 0 : we.rawPoints) || (we == null ? void 0 : we.points) || [], $e = Ig(Fe, w, N, y).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y));
      if (!$e.length) continue;
      const Xe = Or(String((le == null ? void 0 : le.toolKind) || "pen")), _e = pn[Xe] || pn[mr];
      g.push({
        points: $e,
        closed: String((we == null ? void 0 : we.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((le == null ? void 0 : le.size) || 10) * Math.max(0.1, Number((_e == null ? void 0 : _e.sizeScale) ?? 1)) + 10),
        layerKind: String((le == null ? void 0 : le.layerKind) || r.layerKind || "paint")
      });
    }
    const T = vo(p, null, w, N, y);
    if (!T) {
      const le = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(o, le), le;
    }
    const F = Rp(h).map((le) => vo(le, T.x, w, N, y)).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y)).map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) }));
    if (F.length < 4) {
      const le = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(o, le), le;
    }
    const j = (le, we) => ({
      x: (Number((le == null ? void 0 : le.x) || 0) + Number((we == null ? void 0 : we.x) || 0)) * 0.5,
      y: (Number((le == null ? void 0 : le.y) || 0) + Number((we == null ? void 0 : we.y) || 0)) * 0.5,
      a: le,
      b: we
    }), te = j(F[0], F[1]), K = j(F[1], F[2]), V = j(F[2], F[3]), ne = j(F[3], F[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(T.x || 0), y: Number(T.y || 0) },
      corners: F,
      edgeMidpoints: [
        { edge: "top", ...te },
        { edge: "right", ...K },
        { edge: "bottom", ...V },
        { edge: "left", ...ne }
      ],
      rotateStemBase: { x: te.x, y: te.y },
      rotateHandle: { x: te.x, y: te.y - 30 },
      strokePaths: g,
      visible: !0
    };
    return d._strokeGeomCache.set(o, he), he;
  }
  function Dg(r, o) {
    const s = d.mode === "frame" ? ze() : null, u = s ? zt(s) : null, h = Zc(r), p = d.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, y = vo(h, null, s, u, p), w = wg(r).map((F) => vo(F, (y == null ? void 0 : y.x) ?? null, s, u, p)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
    if (!Array.isArray(w) || w.length < 4) {
      const F = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(o, F), F;
    }
    const N = w.slice(0, 4).map((F) => ({ x: Number((F == null ? void 0 : F.x) || 0), y: Number((F == null ? void 0 : F.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: N.reduce((F, j) => F + Number(j.x || 0), 0) / N.length,
        y: N.reduce((F, j) => F + Number(j.y || 0), 0) / N.length
      },
      corners: N,
      visible: !0
    };
    return d._strokeGeomCache.set(o, C), C;
  }
  function fr(r, o = null, s = null, u = null, h = {}) {
    if (d.mode === "frame") {
      const we = s || ze(), Fe = u || zt(we);
      if (!we || !Fe) return null;
      const $e = we ? xa(we, r) : null;
      return $e ? {
        x: Number(Fe.x || 0) + Number($e.x || 0) * Number(Fe.w || 0),
        y: Number(Fe.y || 0) + Number($e.y || 0) * Number(Fe.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return gl(r, o);
    const { right: p, up: y, fwd: g } = fl(), w = Rn(r, p), N = Rn(r, y), T = Rn(r, g), C = 1e-4;
    if (!Number.isFinite(T) || T <= C && !(h != null && h.clipBehind)) return null;
    const F = Math.max(T, C), j = A.width, te = A.height, K = d.viewFov * Qt, V = 2 * Math.atan(Math.tan(K / 2) * (te / Math.max(j, 1))), ne = j / 2 / Math.tan(K / 2), he = te / 2 / Math.tan(V / 2), le = Math.max(j, te) * 2;
    return {
      x: q(j / 2 + w / F * ne, -le, j + le),
      y: q(te / 2 - N / F * he, -le, te + le),
      z: F,
      rawZ: T,
      clipped: T <= C
    };
  }
  function Og(r, o = []) {
    if (d.mode !== "pano" || vt(r)) return 1;
    const s = o.map((u) => Number((u == null ? void 0 : u.rawZ) ?? (u == null ? void 0 : u.z))).filter((u) => Number.isFinite(u));
    return s.length ? MN(0.035, 0.2, Math.min(...s)) : 1;
  }
  function Fg(r) {
    const o = Wn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = d.mode === "frame" ? ze() : null, u = s ? zt(s) : null, h = d.mode === "pano" && (vt(r) || vn(r)), p = h ? { clipBehind: !0 } : null, y = fr(o, null, s, u, p);
    if (!y) return { visible: !1 };
    const g = po(r), N = Xc(r).map((se) => fr(se, y.x, s, u, p)).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y));
    if (N.length < 4) return { visible: !1 };
    const T = Dr(g, 0, g.tanY), C = Dr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), F = fr(T, y.x, s, u, p);
    if (!F) return { visible: !1 };
    const j = fr(C, (F == null ? void 0 : F.x) ?? y.x, s, u, p), te = ((j == null ? void 0 : j.x) ?? F.x) - F.x, K = ((j == null ? void 0 : j.y) ?? F.y) - F.y, V = Math.hypot(te, K) || 1, ne = {
      x: F.x + te / V * 30,
      y: F.y + K / V * 30
    }, he = fr(Dr(g, 0, g.tanY), y.x, s, u, p), le = fr(Dr(g, g.tanX, 0), y.x, s, u, p), we = fr(Dr(g, 0, -g.tanY), y.x, s, u, p), Fe = fr(Dr(g, -g.tanX, 0), y.x, s, u, p);
    if (!he || !le || !we || !Fe) return { visible: !1 };
    const $e = [
      y,
      ...N,
      F,
      j,
      he,
      le,
      we,
      Fe
    ];
    if (h && !$e.some((se) => Number((se == null ? void 0 : se.rawZ) ?? (se == null ? void 0 : se.z)) > 1e-4)) return { visible: !1 };
    const Xe = Og(r, $e), _e = [
      {
        edge: "top",
        x: he.x,
        y: he.y,
        a: { x: N[0].x, y: N[0].y },
        b: { x: N[1].x, y: N[1].y }
      },
      {
        edge: "right",
        x: le.x,
        y: le.y,
        a: { x: N[1].x, y: N[1].y },
        b: { x: N[2].x, y: N[2].y }
      },
      {
        edge: "bottom",
        x: we.x,
        y: we.y,
        a: { x: N[2].x, y: N[2].y },
        b: { x: N[3].x, y: N[3].y }
      },
      {
        edge: "left",
        x: Fe.x,
        y: Fe.y,
        a: { x: N[3].x, y: N[3].y },
        b: { x: N[0].x, y: N[0].y }
      }
    ];
    return {
      center: { x: y.x, y: y.y },
      corners: N.map((se) => ({ x: se.x, y: se.y })),
      edgeMidpoints: _e,
      rotateStemBase: { x: F.x, y: F.y },
      rotateHandle: ne,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: Xe,
      visible: !0
    };
  }
  function Ht(r) {
    if (Lt(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), p = Hp(h, r.layerKind), y = d._strokeGeomCache.get(p);
      return y || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Eg(r, p));
    }
    if (Xt(r)) {
      const h = Sg(r), p = d._strokeGeomCache.get(h);
      return p || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Dg(r, h));
    }
    const o = Ng(r), s = d._strokeGeomCache.get(o);
    if (s) return s;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const u = Fg(r);
    return d._strokeGeomCache.set(o, u), u;
  }
  function _o(r, o, s, u = null) {
    const h = [];
    for (let p = 0; p <= s; p += 1) {
      const y = p / s;
      let g = 0, w = 0;
      o === 0 ? (g = y, w = 0) : o === 1 ? (g = 1, w = y) : o === 2 ? (g = 1 - y, w = 1) : (g = 0, w = 1 - y);
      const N = Jc(r, g, w), T = d.mode === "unwrap" ? gl(N, u) : ba(N);
      T && h.push(T);
    }
    return h;
  }
  function Rg(r, o) {
    const s = Wn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), u = d.mode === "unwrap" ? gl(s) : null, h = u ? u.x : null, p = d.mode === "pano" ? 28 : 20, y = [
      _o(r, 0, p, h),
      _o(r, 1, p, h),
      _o(r, 2, p, h),
      _o(r, 3, p, h)
    ];
    k.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", k.lineWidth = o ? 2 : 1, k.beginPath();
    let g = !1;
    for (const w of y)
      for (const N of w)
        g ? k.lineTo(N.x, N.y) : (k.moveTo(N.x, N.y), g = !0);
    k.closePath(), k.stroke();
  }
  function Lg() {
    const r = [...Array.isArray(x.shots) ? x.shots : []], o = [...Array.isArray(x.stickers) ? x.stickers : []].sort((s, u) => Number(s.z_index || 0) - Number(u.z_index || 0));
    return [...r, ...o];
  }
  function yl() {
    const r = [...Array.isArray(x.shots) ? x.shots : []];
    return [...[...Array.isArray(x.stickers) ? x.stickers : []].sort((s, u) => Number(u.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function xo(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function rf(r, o, s) {
    const u = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (u.length < 4) return;
    const h = q(Number((r == null ? void 0 : r.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const p = k.globalAlpha;
    k.globalAlpha = p * h;
    const y = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = o ? 3.2 : 2.6;
    xo(k, u), k.fillStyle = g, k.fill(), k.strokeStyle = y, k.lineWidth = w, k.stroke(), k.save(), k.strokeStyle = y, k.lineWidth = o ? 3.2 : 2.6, k.lineCap = "round";
    const N = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (u[0].x + u[1].x) * 0.5, y: (u[0].y + u[1].y) * 0.5 },
      { edge: "right", x: (u[1].x + u[2].x) * 0.5, y: (u[1].y + u[2].y) * 0.5 },
      { edge: "bottom", x: (u[2].x + u[3].x) * 0.5, y: (u[2].y + u[3].y) * 0.5 },
      { edge: "left", x: (u[3].x + u[0].x) * 0.5, y: (u[3].y + u[0].y) * 0.5 }
    ], T = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = o ? 12 : 9;
    N.forEach((F) => {
      const te = N.find((he) => (he == null ? void 0 : he.edge) === T[F == null ? void 0 : F.edge]) || {
        x: (u[0].x + u[1].x + u[2].x + u[3].x) * 0.25,
        y: (u[0].y + u[1].y + u[2].y + u[3].y) * 0.25
      }, K = te.x - F.x, V = te.y - F.y, ne = Math.hypot(K, V) || 1;
      k.beginPath(), k.moveTo(F.x, F.y), k.lineTo(F.x + K / ne * C, F.y + V / ne * C), k.stroke();
    }), k.restore(), k.globalAlpha = p;
  }
  function zg(r, o, s, u) {
    const h = q(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (vn(r)) {
      rf(o, s, u);
      return;
    }
    if (vt(r)) {
      const y = k.globalAlpha;
      k.globalAlpha = y * Yp(r) * h, d.mode === "frame" ? (k.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", k.lineWidth = s ? 2 : 1, xo(k, o.corners), k.stroke()) : Rg(r, s), k.globalAlpha = y;
      return;
    }
    const p = k.globalAlpha;
    k.globalAlpha = p * h, k.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", xo(k, o.corners), k.fill(), k.strokeStyle = s ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", k.lineWidth = s ? 2.8 : 1.9, xo(k, o.corners), k.stroke(), k.globalAlpha = p;
  }
  function af(r, o, s) {
    k.fillStyle = s, o.corners.forEach((u) => {
      k.beginPath(), k.arc(u.x, u.y, 6.5, 0, Math.PI * 2), k.fill();
    }), vn(r) && (k.strokeStyle = s, k.lineCap = "round", k.lineWidth = 4, o.edgeMidpoints.forEach((u) => {
      var T, C, F, j;
      const h = (((T = u.b) == null ? void 0 : T.x) ?? u.x) - (((C = u.a) == null ? void 0 : C.x) ?? u.x), p = (((F = u.b) == null ? void 0 : F.y) ?? u.y) - (((j = u.a) == null ? void 0 : j.y) ?? u.y), y = Math.hypot(h, p) || 1, g = h / y, w = p / y, N = 10;
      k.beginPath(), k.moveTo(u.x - g * N, u.y - w * N), k.lineTo(u.x + g * N, u.y + w * N), k.stroke();
    }), k.lineCap = "butt"), Lt(r) || (k.strokeStyle = "rgba(250, 250, 250, 0.9)", k.lineWidth = 1.8, k.beginPath(), k.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), k.lineTo(o.rotateHandle.x, o.rotateHandle.y), k.stroke(), k.fillStyle = s, k.beginPath(), k.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), k.fill());
  }
  function $g() {
    var g;
    const [r, o] = Mg(), s = d.mode === "frame" ? [] : In(), u = s.length > 1, h = t === "cutout" ? Lg() : lr(), p = h.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${vn(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== h || d._sortedItemsCache.orderKey !== p) && (d._sortedItemsCache = {
      src: h,
      orderKey: p,
      sorted: [...h]
    });
    const y = d._sortedItemsCache.sorted;
    for (const w of y) {
      const N = d.mode !== "frame" && !u && Dc(w);
      if (d.mode === "frame" && !N || !d.showObjects && !vn(w)) continue;
      const T = vt(w), C = vn(w), F = En(w);
      if (!T && !C)
        continue;
      const j = Ht(w);
      if (t !== "stickers" && !j.visible)
        continue;
      const te = q(Number((j == null ? void 0 : j.visibilityAlpha) ?? 1), 0, 1);
      if (te <= 0.01) continue;
      const K = C && t === "cutout" && d.mode === "pano" ? q(Number(d.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (k.save(), k.globalAlpha *= K, zg(w, j, N, F), N && j.visible) {
        const V = F ? "#ff4d4f" : T && jt(w) ? "#f59e0b" : "#0070f3", ne = k.globalAlpha;
        k.globalAlpha = ne * te, af(w, j, V), k.globalAlpha = ne;
      }
      k.restore();
    }
    if (t === "cutout" && d.mode === "pano" && !ze() && d.cutoutPanoFrameVisual && d.cutoutPanoFrameAlpha > 1e-4) {
      const w = d.cutoutPanoFrameVisual, N = q(Number(d.cutoutPanoFrameAlpha || 0), 0, 1);
      k.save(), k.globalAlpha *= N, rf(w.geom, w.selected, w.locked), w.selected && af(
        w.item,
        w.geom,
        w.locked ? "#ff4d4f" : "#0070f3"
      ), k.restore();
    }
    if (u) {
      const w = il(s);
      if (w != null && w.visible) {
        const N = al(s) ? "#ff4d4f" : "#0070f3";
        k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.95)", k.lineWidth = 2, k.setLineDash([6, 4]), k.beginPath(), k.moveTo(w.corners[0].x, w.corners[0].y);
        for (let T = 1; T < w.corners.length; T += 1) k.lineTo(w.corners[T].x, w.corners[T].y);
        k.closePath(), k.stroke(), k.setLineDash([]), k.fillStyle = N, w.corners.forEach((T) => {
          k.beginPath(), k.arc(T.x, T.y, 6.5, 0, Math.PI * 2), k.fill();
        }), k.restore();
      }
    } else
      s.forEach((w) => {
        if (!Lt(w) && !Xt(w)) return;
        const N = Ht(w);
        if (!(N != null && N.visible)) return;
        const T = En(w) ? "#ff4d4f" : "#0070f3";
        k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.95)", k.lineWidth = 2, k.setLineDash([6, 4]), k.beginPath(), k.moveTo(N.corners[0].x, N.corners[0].y);
        for (let C = 1; C < N.corners.length; C += 1) k.lineTo(N.corners[C].x, N.corners[C].y);
        k.closePath(), k.stroke(), k.setLineDash([]), k.fillStyle = T, N.corners.forEach((C) => {
          k.beginPath(), k.arc(C.x, C.y, 6.5, 0, Math.PI * 2), k.fill();
        }), k.restore();
      });
    if (((g = d.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const w = Af(d.interaction.start, d.interaction.current);
      k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.9)", k.fillStyle = "rgba(255, 255, 255, 0.08)", k.lineWidth = 1, k.setLineDash([5, 4]), k.beginPath(), k.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), k.fill(), k.stroke(), k.restore();
    }
    d.hqFrames && r >= 40 && o >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && ve());
  }
  function Vg(r) {
    const o = ir(r), s = q(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), u = 320;
    return s >= 1 ? { width: u, height: Math.max(1, Math.round(u / s)) } : { width: Math.max(1, Math.round(u * s)), height: u };
  }
  function of(r, o = !1) {
    const s = q(ra(r), 0.05, 20), u = o ? 320 : 220;
    return s >= 1 ? { width: u, height: Math.max(1, Math.round(u / s)) } : { width: Math.max(1, Math.round(u * s)), height: u };
  }
  function jg(r) {
    if (!$t || !r) return !1;
    const o = $t.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || $t.clientWidth || 0)), u = Math.round(Number(o.clientHeight || $t.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(u - Number(r.height || 0)) <= 1;
  }
  function Hg() {
    return `obj:${Number(d.objectVisualRevision || 0)}`;
  }
  function Ug(r, o = {}) {
    if (!r) return "";
    const s = Ai(), u = s && Kr(s) ? Ni(s) : "no_bg", h = Vg(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      xl(),
      Hg(),
      lo(),
      u,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function Gg() {
    var F, j, te, K;
    if (d.outputPreviewRect = null, P.outputPreviewToggle.visible = d.mode !== "frame" && !!ze(), t !== "cutout" || !P.cameraPreview) return;
    if (d.mode === "frame") {
      P.cameraPreview.visible = !1, P.cameraPreview.settled = !1;
      return;
    }
    const r = ze();
    if (!r) {
      P.cameraPreview.visible = !0, P.cameraPreview.ready = !1, P.cameraPreview.settled = !1, P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.width = 220, P.cameraPreview.height = 132, P.cameraPreview.label = "Add Frame to preview", (F = Se == null ? void 0 : Se.clearScene) == null || F.call(Se), (j = Ce == null ? void 0 : Ce.requestRender) == null || j.call(Ce);
      return;
    }
    P.cameraPreview.visible = !0;
    const o = Ai();
    if (!r || !Se || !Ce) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, (te = Se == null ? void 0 : Se.clearScene) == null || te.call(Se), (K = Ce == null ? void 0 : Ce.requestRender) == null || K.call(Ce);
      return;
    }
    const s = of(r, !!d.outputPreviewExpanded);
    P.cameraPreview.width = s.width, P.cameraPreview.height = s.height, P.cameraPreview.expanded = !!d.outputPreviewExpanded;
    const u = go(), h = bo(u), p = Kr(o), y = p ? Ni(o) : "none", g = d.showObjects ? yo() : ya([]), w = Oa({
      stateRevision: [
        "cutout_preview_camera",
        y,
        Array.isArray(u == null ? void 0 : u.stickers) ? u.stickers.map((V) => String((V == null ? void 0 : V.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((V) => `${String((V == null ? void 0 : V.assetId) || "")}:${String((V == null ? void 0 : V.revision) || "")}`).join(",") : "none",
        g.length ? g.map((V) => `${String((V == null ? void 0 : V.id) || "")}:${String((V == null ? void 0 : V.revision) || "")}:${Number((V == null ? void 0 : V.zIndex) || 0)}`).join(",") : "paint:none",
        d.showPanorama ? "panorama:1" : "panorama:0",
        d.showObjects ? "objects:1" : "objects:0",
        d.showMask ? "showMask:1" : "showMask:0",
        Yt(x.coverage)
      ].join("|"),
      backgroundSource: p && d.showPanorama ? o : null,
      backgroundRevision: p ? `cutout_preview:${y}` : "",
      coverageDeg: Yt(x.coverage),
      scene: u,
      textures: h,
      rasterEntries: g,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(p || h.length > 0 || g.length > 0)) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = "Connect ERP image", P.cameraPreview.settled = !1, Se.clearScene(), Ce.requestRender();
      return;
    }
    if (d.showPanorama && !p && h.length === 0 && g.length === 0) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", P.cameraPreview.settled = !1, Se.clearScene(), Ce.requestRender();
      return;
    }
    Se.syncScene(w), Ce.setView(ir(r));
    const T = jg(s), C = T ? Ce.present() : !1;
    T || Ce.requestRender(), P.cameraPreview.ready = !0, P.cameraPreview.label = T && C ? "" : "Loading preview", P.cameraPreview.settled = T && C && ce.pendingStableLayoutFrames <= 0 && ce.hasPresentedFrame;
  }
  function Bg(r, o, s, u = {}) {
    if (!Se || !s) return !1;
    const h = Ai(), p = go(), y = bo(p), g = Kr(h), w = d.showObjects ? yo() : ya([]);
    return g || y.length > 0 || w.length > 0 ? (Se.syncScene(Oa({
      stateRevision: Ug(s, u),
      backgroundSource: g && d.showPanorama ? h : null,
      backgroundRevision: g ? `cutout_frame:${Ni(h)}` : "",
      coverageDeg: Yt(x.coverage),
      scene: p,
      textures: y,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), Se.renderShotToContext(r, o, s, u)) : !1;
  }
  function vl(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), u = Number(o.y || 0);
    return Jc(r, s, u);
  }
  function Ti(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, u = Math.cos(s);
    return rr(u * Math.sin(o), Math.sin(s), u * Math.cos(o));
  }
  function Kg(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function Wg(r, o, s, u = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Jt(r, "widthScale", 1),
      pressureLike: Jt(r, "pressureLike", 1)
    }, ...u, u: o, v: s };
  }
  function Yg(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function _l(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const u = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (u) {
      let K = null;
      r.forEach((V) => {
        const ne = Number((V == null ? void 0 : V.u) || 0), he = Number((V == null ? void 0 : V.v) || 0), le = (ne % 1 + 1) % 1, we = K == null ? le : K + kn(le, (K % 1 + 1) % 1);
        h.set(V, { x: we, y: he }), K = we;
      });
    }
    const p = (K) => !K || typeof K != "object" ? { x: 0, y: 0 } : h.get(K) || Kg(K), y = (K, V, ne, he = {}) => {
      const le = u ? (Number(V) % 1 + 1) % 1 : Number(V), we = Wg(K, le, ne, he);
      return h.set(we, { x: Number(V), y: Number(ne) }), we;
    }, g = (K, V, ne) => {
      const he = p(K), le = p(V);
      return y(K, Pn(he.x, le.x, ne), Pn(he.y, le.y, ne), {
        t: Pn(Number((K == null ? void 0 : K.t) || 0), Number((V == null ? void 0 : V.t) || 0), ne),
        widthScale: Pn(Jt(K, "widthScale", 1), Jt(V, "widthScale", 1), ne),
        pressureLike: Pn(Jt(K, "pressureLike", 1), Jt(V, "pressureLike", 1), ne)
      });
    };
    if (r.length === 1) {
      const K = p(r[0]);
      return [y(r[0], K.x, K.y)];
    }
    const w = Yg(o, s), N = (K, V) => {
      const ne = [0];
      for (let se = 1; se < K.length; se += 1) {
        const ye = p(K[se - 1]), Ie = p(K[se]);
        ne.push(ne[se - 1] + Math.hypot(Ie.x - ye.x, Ie.y - ye.y));
      }
      const he = ne[ne.length - 1] || 0;
      if (he <= 1e-8) {
        const se = K[0], ye = p(se);
        return [y(se, ye.x, ye.y)];
      }
      const le = [];
      let we = 0;
      for (let se = 0; se <= he + 1e-9; se += V) {
        for (; we < ne.length - 2 && ne[we + 1] < se; ) we += 1;
        const ye = ne[we], Ie = ne[we + 1], Ee = Math.max(1e-8, Ie - ye);
        le.push(g(K[we], K[we + 1], q((se - ye) / Ee, 0, 1)));
      }
      const Fe = K[K.length - 1], $e = p(Fe), Xe = le[le.length - 1], _e = Xe ? p(Xe) : null;
      return (!_e || Math.hypot(_e.x - $e.x, _e.y - $e.y) > V * 0.35) && le.push(y(Fe, $e.x, $e.y)), le;
    }, T = (K) => {
      if (!Array.isArray(K) || K.length < 3) return K ? K.slice() : [];
      const V = p(K[0]), ne = [y(K[0], V.x, V.y)];
      for (let we = 0; we < K.length - 1; we += 1) {
        const Fe = K[we], $e = K[we + 1], Xe = p(Fe), _e = p($e), se = y(
          Fe,
          Xe.x * 0.75 + _e.x * 0.25,
          Xe.y * 0.75 + _e.y * 0.25,
          {
            t: Number(Fe.t || 0) * 0.75 + Number($e.t || 0) * 0.25,
            widthScale: Jt(Fe, "widthScale", 1) * 0.75 + Jt($e, "widthScale", 1) * 0.25,
            pressureLike: Jt(Fe, "pressureLike", 1) * 0.75 + Jt($e, "pressureLike", 1) * 0.25
          }
        ), ye = y(
          Fe,
          Xe.x * 0.25 + _e.x * 0.75,
          Xe.y * 0.25 + _e.y * 0.75,
          {
            t: Number(Fe.t || 0) * 0.25 + Number($e.t || 0) * 0.75,
            widthScale: Jt(Fe, "widthScale", 1) * 0.25 + Jt($e, "widthScale", 1) * 0.75,
            pressureLike: Jt(Fe, "pressureLike", 1) * 0.25 + Jt($e, "pressureLike", 1) * 0.75
          }
        );
        ne.push(se, ye);
      }
      const he = K[K.length - 1], le = p(he);
      return ne.push(y(he, le.x, le.y)), ne;
    }, C = N(r, w);
    if (C.length < 3) return C;
    const F = s ? 2 : 1;
    let j = C.slice();
    for (let K = 0; K < F; K += 1) j = T(j);
    return N(j, Math.max(w * 0.75, 55e-5));
  }
  function Jt(r, o, s = 1) {
    const u = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(u) ? Math.max(0, u) : s;
  }
  function qg(r) {
    const o = Number(r == null ? void 0 : r.radiusValue);
    if (Number.isFinite(o) && o > 0) {
      const s = String((r == null ? void 0 : r.radiusModel) || "").trim() || "erp_uv_norm";
      return s === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
      } : {
        model: s,
        value: o
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
    };
  }
  function va(r, o, s = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(r)), u.height = Math.max(1, Math.round(o));
    const h = u.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, u.width, u.height), h.imageSmoothingEnabled = !0), { canvas: u, ctx: h };
  }
  function _a() {
    const r = So();
    return `${String(d.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function Ii() {
    const r = So();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function xl() {
    const r = lo(), o = Ii();
    return r ? `${o}:${r}` : o;
  }
  function Xg() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function Jg() {
    d.paintCompositeRevision += 1;
  }
  function Zg() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function sf() {
    var r, o;
    d.paintEngineRevisionKey = null, (o = (r = d.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, x), d.paintEngineRevisionKey = _a();
  }
  function lf() {
    x.painting_layer !== null && (x.painting_layer = null), ho = "";
  }
  function Bt() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, Zg(), ce.backgroundDirty = !0, ce.dirty = !0;
  }
  function Dn({ rebuildPaintEngine: r = !1 } = {}) {
    lf(), Xg(), Bt(), r && sf();
  }
  function Ei() {
    lf(), Jg(), Bt();
  }
  function wo() {
    var u;
    const r = So(), o = `${r.width}x${r.height}`;
    d.paintEngineDescriptorKey !== o && (d.paintEngine = xu(r), d.paintEngineDescriptorKey = o, d.paintEngineRevisionKey = "");
    const s = _a();
    d.paintEngineRevisionKey !== s && (d.paintEngineRevisionKey = s, (u = d.paintEngine) == null || u.rebuildCommitted(x));
  }
  function So() {
    const r = Math.max(1, I(Number((x == null ? void 0 : x.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function _n() {
    return So();
  }
  function Qg(r, o, s, u, h = null) {
    const p = qg(r), y = Jt(o, "widthScale", 1) * Jt(o, "pressureLike", 1);
    return p.model === "erp_uv_norm" ? Math.max(0.5, p.value * s * y) : p.model === "world_angle" ? h ? Math.max(0.5, p.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Qt) * s * y) : Math.max(0.5, p.value / (2 * Math.PI) * s * y) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * y);
  }
  function e0(r, o, s = {}) {
    const u = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), p = s.preview === !0, y = p ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * y : 1, u === "mask") {
      r.fillStyle = p ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const g = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = p ? Math.max(0.28, Number(g.a ?? 1) * 0.88) : Math.max(0.12, Number(g.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(g.r || 0) * 255)}, ${Math.round(Number(g.g || 0) * 255)}, ${Math.round(Number(g.b || 0) * 255)}, ${w})`;
  }
  function t0(r, o, s) {
    const u = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(u) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), u, 0, Math.PI * 2), r.fill());
  }
  function n0(r, o, s, u, h = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const p = Math.max(u.w, u.h) * 0.25;
    r.save(), e0(r, s, h);
    const y = (g) => t0(r, g, p);
    if (o.length === 1) {
      y(o[0]), r.restore();
      return;
    }
    for (let g = 0; g < o.length - 1; g += 1) {
      const w = o[g], N = o[g + 1];
      if (!w || !N) continue;
      const T = Number(w.x || 0), C = Number(w.y || 0), F = Number(N.x || 0), j = Number(N.y || 0), te = Math.max(0.5, Math.min(p, Number(w.radiusPx || 0.5))), K = Math.max(0.5, Math.min(p, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(T) || !Number.isFinite(C) || !Number.isFinite(F) || !Number.isFinite(j) || !Number.isFinite(te) || !Number.isFinite(K)) continue;
      const V = F - T, ne = j - C, he = Math.hypot(V, ne);
      if (!Number.isFinite(he) || he < 1e-6) {
        y(w);
        continue;
      }
      if (he > Math.max(u.w, u.h) * 0.5) continue;
      const le = Math.max(0.5, Math.min(te, K)), we = Math.max(0.35, Math.min(le * 0.4, 2.25)), Fe = Math.max(1, Math.ceil(he / we));
      for (let $e = 0; $e <= Fe; $e += 1) {
        const Xe = $e / Fe;
        y({
          x: Pn(T, F, Xe),
          y: Pn(C, j, Xe),
          radiusPx: Pn(te, K, Xe)
        });
      }
    }
    y(o[o.length - 1]), r.restore();
  }
  function r0(r, o, s, u) {
    n0(r, o, s, u, { preview: !1 });
  }
  function i0(r, o, s, u, h) {
    var g, w, N, T;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const p = "u", y = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const C = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(C.r || 0) * 255)}, ${Math.round(Number(C.g || 0) * 255)}, ${Math.round(Number(C.b || 0) * 255)}, ${Number(C.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((g = o[0]) == null ? void 0 : g[p]) || 0) * u.w, Number(((w = o[0]) == null ? void 0 : w[y]) || 0) * u.h);
    for (let C = 1; C < o.length; C += 1)
      r.lineTo(Number(((N = o[C]) == null ? void 0 : N[p]) || 0) * u.w, Number(((T = o[C]) == null ? void 0 : T[y]) || 0) * u.h);
    r.closePath(), r.fill(), r.restore();
  }
  function uf(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function a0(r, o) {
    const s = uf(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: Qg(r, u, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function cf(r, o, s = null) {
    var g, w, N, T;
    if (!(r != null && r.ctx) || !o) return !1;
    const u = s || { w: Number(((g = r.canvas) == null ? void 0 : g.width) || 0), h: Number(((w = r.canvas) == null ? void 0 : w.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((T = o == null ? void 0 : o.geometry) == null ? void 0 : T.geometryKind) || "") === "lasso_fill")
      return i0(r.ctx, uf(h), h, u), !0;
    const y = a0(h, u);
    return y.length ? (r0(r.ctx, y, h, u), !0) : !1;
  }
  function o0(r, o, s, u = 8) {
    const h = new Uint8Array(o * s), p = [], y = new Int32Array(o * s), g = new Int32Array(o * s);
    for (let w = 0; w < s; w += 1)
      for (let N = 0; N < o; N += 1) {
        const T = w * o + N;
        if (h[T] || r[T] <= u) continue;
        let C = 0, F = 0;
        y[F] = N, g[F] = w, F += 1, h[T] = 1;
        const j = [];
        let te = N, K = w, V = N, ne = w;
        for (; C < F; ) {
          const he = y[C], le = g[C];
          C += 1, j.push({ x: he, y: le }), he < te && (te = he), le < K && (K = le), he > V && (V = he), le > ne && (ne = le);
          const we = [
            [(he - 1 + o) % o, le],
            [(he + 1) % o, le],
            [he, le - 1],
            [he, le + 1]
          ];
          for (const [Fe, $e] of we) {
            if ($e < 0 || $e >= s) continue;
            const Xe = $e * o + Fe;
            h[Xe] || r[Xe] <= u || (h[Xe] = 1, y[F] = Fe, g[F] = $e, F += 1);
          }
        }
        p.push({ pixels: j, minX: te, minY: K, maxX: V, maxY: ne });
      }
    return p;
  }
  function s0(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, N) => w - N);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let u = -1, h = 0;
    for (let w = 0; w < s.length; w += 1) {
      const N = s[w], C = (w === s.length - 1 ? s[0] + o : s[w + 1]) - N - 1;
      C > u && (u = C, h = w);
    }
    const p = (s[(h + 1) % s.length] + o) % o;
    let y = 1 / 0, g = -1 / 0;
    for (const w of s) {
      const N = (w - p + o) % o;
      y = Math.min(y, N), g = Math.max(g, N);
    }
    return {
      startX: p,
      widthPx: Math.max(1, g - y + 1)
    };
  }
  function l0(r, o, s = {}) {
    var N;
    const u = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), p = (N = r == null ? void 0 : r.getContext) == null ? void 0 : N.call(r, "2d");
    if (!p || u < 1 || h < 1) return [];
    const y = p.getImageData(0, 0, u, h), g = new Uint8Array(u * h);
    for (let T = 0; T < g.length; T += 1) g[T] = y.data[T * 4 + 3];
    return o0(g, u, h, 8).map((T, C) => {
      const F = s0(T, u);
      if (!F) return null;
      const j = Number(F.widthPx || 0), te = T.maxY - T.minY + 1, K = Number(F.startX || 0), V = document.createElement("canvas");
      V.width = j, V.height = te;
      const ne = V.getContext("2d");
      if (!ne) return null;
      const he = ne.createImageData(j, te);
      return T.pixels.forEach(({ x: le, y: we }) => {
        const Fe = (we * u + le) * 4, $e = (Number(le || 0) - K + u) % u, Xe = ((we - T.minY) * j + $e) * 4;
        he.data[Xe + 0] = y.data[Fe + 0], he.data[Xe + 1] = y.data[Fe + 1], he.data[Xe + 2] = y.data[Fe + 2], he.data[Xe + 3] = y.data[Fe + 3];
      }), ne.putImageData(he, 0, 0), {
        id: Ui("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + C * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: T.minY / h,
          u1: j / u,
          v1: (T.maxY + 1) / h
        },
        rasterDataUrl: V.toDataURL("image/png"),
        transform: {
          du: K / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function xa(r, o) {
    if (!r || !o) return null;
    const s = po(r), u = Rn(o, s.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const h = Rn(o, s.right) / u, p = Rn(o, s.up) / u, y = h * s.cr + p * s.sr, g = -h * s.sr + p * s.cr;
    return {
      x: (y / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - g / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function u0(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (d.mode === "unwrap") {
      const s = Er();
      return r.map((u) => ({
        x: s.x + Number(u.u || 0) * s.w,
        y: s.y + Number(u.v || 0) * s.h
      }));
    }
    const o = r.map((s) => ba(Ti(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function ff(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (d.mode === "unwrap") {
      const u = Er();
      return r.map((h) => {
        const p = (Number(h.u || 0) % 1 + 1) % 1, y = o == null ? p : Number(o || 0) + kn(p, o);
        return {
          x: u.x + y * u.w,
          y: u.y + Number(h.v || 0) * u.h
        };
      });
    }
    const s = r.map((u) => ba(Ti(u))).filter(Boolean);
    return s.every((u) => Number(u.z || 0) > 0) ? s.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function c0(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const u = r[s], h = r[(s + 1) % r.length];
      if (!u || !h || !Number.isFinite(u.x) || !Number.isFinite(u.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(u.x), Number(h.y) - Number(u.y)) > o) return !1;
    }
    return !0;
  }
  function f0(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const u = [];
    for (const h of r) {
      const p = Ti(h), y = xa(o, p);
      if (!y) return [];
      u.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return c0(u, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? u : [];
  }
  function d0(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const u = [];
    for (const h of r) {
      const p = Ti(h), y = xa(o, p);
      y && u.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return u;
  }
  function h0() {
    var j;
    const r = ze(), o = Ml(r);
    if (!r || !o) return !1;
    const s = { x: o.x, y: o.y, w: o.w, h: o.h }, u = Math.max(1, Number(o.focalPx || 1)), h = s.x + s.w * 0.5, p = s.y + s.h * 0.5, { halfW: y, halfH: g } = Nu(
      { width: A.width, height: A.height },
      u
    ), w = { x: h - y, y: p - g, w: y * 2, h: g * 2 }, N = {
      ...r,
      hFOV_deg: 2 * Math.atan(y / u) * vr,
      vFOV_deg: 2 * Math.atan(g / u) * vr
    }, T = m0(s);
    k.save(), k.fillStyle = "#0a0a0a", k.fillRect(0, 0, A.width, A.height);
    const C = d.interaction ? "draft" : String(((j = x.ui_settings) == null ? void 0 : j.preview_quality) || "balanced");
    return Bg(k, w, N, { quality: C }) === !0 || (k.fillStyle = "rgba(255, 255, 255, 0.03)", k.fillRect(w.x, w.y, w.w, w.h)), k.restore(), k.save(), k.fillStyle = "rgba(0, 0, 0, 0.58)", k.beginPath(), k.rect(0, 0, A.width, A.height), k.roundRect(s.x, s.y, s.w, s.h, T), k.fill("evenodd"), k.restore(), k.save(), k.strokeStyle = dN, k.globalAlpha = 0.62, k.lineWidth = 2, k.beginPath(), k.roundRect(s.x + 1, s.y + 1, s.w - 2, s.h - 2, Math.max(0, T - 1)), k.stroke(), k.restore(), !0;
  }
  function m0(r) {
    const o = Math.max(1e-6, Number(ce.frameCanvasScale || 1));
    return Math.min(sn * o, Number((r == null ? void 0 : r.w) || 0) * 0.5, Number((r == null ? void 0 : r.h) || 0) * 0.5);
  }
  function dr() {
    var o;
    const r = d.mode === "frame" ? ze() : null;
    P.frameRollKnob.visible = !!r && !i, P.frameRollKnob.rollDeg = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg) ?? 0), P.frameRollKnob.displayValue = Hi(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((o = d.interaction) == null ? void 0 : o.kind) === "roll_frame", P.frameRollKnob.armed = !!r && d.altModifier === !0;
  }
  function p0() {
    var w, N;
    if (((w = d.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const r = d.interaction.stroke, o = (N = r == null ? void 0 : r.geometry) == null ? void 0 : N.points;
    let s;
    if (d.mode === "frame") {
      const T = ze(), C = zt(T);
      s = f0(o, T, C);
    } else
      s = u0(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const u = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, p = Math.round(Number(h.r || 0) * 255), y = Math.round(Number(h.g || 0) * 255), g = Math.round(Number(h.b || 0) * 255);
    k.save(), k.beginPath(), k.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let T = 1; T < s.length; T++) k.lineTo(Number(s[T].x || 0), Number(s[T].y || 0));
    k.closePath(), u ? (k.lineWidth = 2, k.setLineDash([6, 6]), k.lineDashOffset = 0, k.strokeStyle = "rgba(0,0,0,0.96)", k.stroke(), k.lineDashOffset = -6, k.strokeStyle = "rgba(255,255,255,0.96)", k.stroke(), k.setLineDash([]), k.lineDashOffset = 0) : (k.lineWidth = 1.5, k.setLineDash([6, 4]), k.strokeStyle = `rgba(${p},${y},${g},1)`, k.stroke(), k.setLineDash([])), k.restore();
  }
  function g0() {
    const r = d.frameRollOverlayVisual, o = q(Number(d.frameRollOverlayAlpha || 0), 0, 1);
    if (d.mode !== "frame" || !(r != null && r.shot) || o <= 1e-4) return;
    const s = zt(r.shot);
    if (!s) return;
    const u = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = Number(r.shot.roll_deg ?? r.shot.rot_deg ?? 0) * Qt, p = Math.hypot(s.w, s.h) * 0.55, y = Math.cos(h) * p, g = Math.sin(h) * p;
    k.save(), k.globalAlpha *= o, k.beginPath(), k.rect(s.x, s.y, s.w, s.h), k.clip(), k.translate(u.x, u.y), k.rotate(h);
    const w = Math.max(12, Math.min(s.w, s.h) / 6);
    k.beginPath();
    for (let N = -p; N <= p; N += w)
      k.moveTo(N, -p), k.lineTo(N, p);
    for (let N = -p; N <= p; N += w)
      k.moveTo(-p, N), k.lineTo(p, N);
    k.lineWidth = 1, k.strokeStyle = "rgba(255, 255, 255, 0.22)", k.stroke(), k.setTransform(1, 0, 0, 1, 0, 0), k.beginPath(), k.moveTo(u.x - y, u.y - g), k.lineTo(u.x + y, u.y + g), k.lineWidth = 1.5, k.setLineDash([8, 6]), k.strokeStyle = "rgba(255, 255, 255, 0.92)", k.shadowColor = "rgba(0, 0, 0, 0.8)", k.shadowBlur = 3, k.stroke(), k.setLineDash([]), k.restore();
  }
  function b0() {
    return t !== "cutout" || !ze() ? 0 : pN;
  }
  function y0() {
    const r = q(Number(d.cutoutPanoDimAlpha || 0), 0, 1);
    if (r <= 1e-4 || t !== "cutout" || d.mode !== "pano") return;
    const o = ze(), s = o ? Ht(o) : null, u = Array.isArray(s == null ? void 0 : s.corners) && s.corners.length >= 4 ? s.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    s != null && s.visible && u && (d.cutoutPanoDimCorners = u), o && (s != null && s.visible) && u && (d.cutoutPanoFrameVisual = {
      item: o,
      geom: s,
      selected: Dc(o),
      locked: En(o)
    });
    const h = Number(d.cutoutPanoDimTarget || 0) <= 1e-6, p = s != null && s.visible ? u : h ? d.cutoutPanoDimCorners || [] : [];
    if (k.save(), k.fillStyle = `rgba(0, 0, 0, ${r})`, k.beginPath(), k.rect(0, 0, A.width, A.height), p.length >= 4) {
      k.moveTo(p[0].x, p[0].y);
      for (let y = 1; y < 4; y += 1) k.lineTo(p[y].x, p[y].y);
      k.closePath();
    }
    k.fill("evenodd"), k.restore();
  }
  function v0() {
    d.mode === "frame" ? (ce.frameSafeRect = V0(), h0()) : d.mode === "unwrap" ? Cg(!1) : Tg(!1), y0(), t === "cutout" && Gg(), $g(), dr(), p0(), g0(), P.fovValue = `${Math.round(d.viewFov)}°`, Math.abs(Number(d.outputPreviewAnim || 0) - Number(d.outputPreviewAnimTo || 0)) < 1e-6 && Ye(), ce.hasPresentedFrame || (ce.hasPresentedFrame = !0, Q.style.opacity = "1"), t === "cutout" && P.cameraPreview && (P.cameraPreview.settled = ce.pendingStableLayoutFrames <= 0 && ce.hasPresentedFrame && d.mode !== "frame");
    const r = xg();
    P.stageStatus = r.status, P.stageStatusDetail = r.detail, r.status === Qn ? (ae == null || ae.removeAttribute("data-stage-ready"), ae == null || ae.setAttribute("data-stage-loading-kind", r.detail)) : (ae == null || ae.setAttribute("data-stage-ready", ""), ae == null || ae.removeAttribute("data-stage-loading-kind"));
  }
  function _0(r = d.interaction) {
    if (t !== "stickers" || d.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function x0() {
    e.__panoLiveStateOverride = x, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = jp();
  }
  function ve(r = {}) {
    var g, w, N, T, C, F, j, te, K, V;
    const o = !!r.localOnly, s = r.externalSync === !0, u = String(r.cause || ""), h = String(((g = d.interaction) == null ? void 0 : g.kind) || "");
    (!o || h === "view" || h === "pan_frame" || _0() || !!((w = d.viewTween) != null && w.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (ce.backgroundDirty = !0), o && Cc() && (d.livePaintInteractionRevision += 1, ce.backgroundDirty = !0), (!o || u === "selection" || u === "mode" || u === "cutout_frame") && (cl(), cr()), x0(), s && ((T = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || T.call(N), (C = e.setDirtyCanvas) == null || C.call(e, !0, !1)), s && !o && ((j = (F = e.graph) == null ? void 0 : F.setDirtyCanvas) == null || j.call(F, !0, !0), (V = (K = (te = zn) == null ? void 0 : te.canvas) == null ? void 0 : K.setDirty) == null || V.call(K, !0, !0)), ce.dirty = !0;
  }
  function df() {
    const r = A.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return A.width !== o || A.height !== s || Q.width !== o || Q.height !== s ? (A.width = o, A.height = s, Q.width = o, Q.height = s, ce.backgroundDirty = !0, ce.dirty = !0, t === "cutout" && (ce.pendingStableLayoutFrames = Math.max(Number(ce.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function w0(r = performance.now()) {
    var p, y;
    ce.lastTickTs = r;
    const o = d.mode === "frame" && ((p = d.interaction) == null ? void 0 : p.kind) === "roll_frame" ? d.interaction : null;
    o != null && o.shot && (d.frameRollOverlayVisual = { shot: o.shot });
    const s = o ? 1 : 0;
    if (Math.abs(s - Number(d.frameRollOverlayTarget || 0)) > 1e-6 && (d.frameRollOverlayFrom = Number(d.frameRollOverlayAlpha || 0), d.frameRollOverlayTarget = s, d.frameRollOverlayStartTs = r), Math.abs(Number(d.frameRollOverlayAlpha || 0) - s) > 1e-6) {
      const g = q(
        (r - Number(d.frameRollOverlayStartTs || r)) / gN,
        0,
        1
      );
      d.frameRollOverlayAlpha = Pn(
        Number(d.frameRollOverlayFrom || 0),
        s,
        Ko(g)
      ), g >= 1 && (d.frameRollOverlayAlpha = s, s === 0 && (d.frameRollOverlayVisual = null)), ce.dirty = !0;
    }
    const u = b0();
    if (Math.abs(u - Number(d.cutoutPanoDimTarget || 0)) > 1e-6 && (d.cutoutPanoDimFrom = Number(d.cutoutPanoDimAlpha || 0), d.cutoutPanoDimTarget = u, d.cutoutPanoDimStartTs = r), Math.abs(Number(d.cutoutPanoDimAlpha || 0) - u) > 1e-6) {
      const g = q(
        (r - Number(d.cutoutPanoDimStartTs || r)) / Sh,
        0,
        1
      );
      d.cutoutPanoDimAlpha = Pn(
        Number(d.cutoutPanoDimFrom || 0),
        u,
        Ko(g)
      ), g >= 1 && (d.cutoutPanoDimAlpha = u), g >= 1 && u === 0 && (d.cutoutPanoDimCorners = null), ce.dirty = !0;
    }
    const h = t === "cutout" && ze() ? 1 : 0;
    if (Math.abs(h - Number(d.cutoutPanoFrameTarget || 0)) > 1e-6 && (d.cutoutPanoFrameFrom = Number(d.cutoutPanoFrameAlpha || 0), d.cutoutPanoFrameTarget = h, d.cutoutPanoFrameStartTs = r), Math.abs(Number(d.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const g = q(
        (r - Number(d.cutoutPanoFrameStartTs || r)) / Sh,
        0,
        1
      );
      d.cutoutPanoFrameAlpha = Pn(
        Number(d.cutoutPanoFrameFrom || 0),
        h,
        Ko(g)
      ), g >= 1 && (d.cutoutPanoFrameAlpha = h, h === 0 && (d.cutoutPanoFrameVisual = null)), ce.dirty = !0;
    }
    if (d.outputPreviewAnim !== d.outputPreviewAnimTo) {
      const g = Math.max(1, Number(d.outputPreviewAnimDurationMs)), w = q((r - Number(d.outputPreviewAnimStartTs || 0)) / g, 0, 1), T = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? NN(w) : AN(w);
      d.outputPreviewAnim = Pn(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, T), ce.dirty = !0, w >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
    }
    if ((y = d.viewTween) != null && y.active) {
      const g = d.viewTween, w = q((r - g.startTs) / g.durationMs, 0, 1), N = Ko(w);
      d.viewYaw = Ut(g.startYaw + g.deltaYaw * N), d.viewPitch = g.startPitch + (g.targetPitch - g.startPitch) * N, d.viewFov = g.startFov + (g.targetFov - g.startFov) * N, ce.backgroundDirty = !0, ce.dirty = !0, w >= 1 && (d.viewTween = null);
    }
    if (d.viewInertia.vx = Number(Kt.state.inertia.vx || 0), d.viewInertia.vy = Number(Kt.state.inertia.vy || 0), d.viewInertia.active = !!Kt.state.inertia.active, Kt.stepInertia(r) && (d.viewInertia.vx = Number(Kt.state.inertia.vx || 0), d.viewInertia.vy = Number(Kt.state.inertia.vy || 0), d.viewInertia.active = !!Kt.state.inertia.active, ce.backgroundDirty = !0, ce.dirty = !0), (ce.dirty || r - ce.lastSizeCheckTs >= 220) && (df(), ce.lastSizeCheckTs = r), ce.pendingStableLayoutFrames > 0 && (ce.pendingStableLayoutFrames -= 1, ce.dirty = !0), ce.dirty) {
      if (ce.pendingStableLayoutFrames > 0)
        return;
      ce.dirty = !1, v0();
    }
  }
  function hf(r = performance.now()) {
    if (ce.running)
      try {
        w0(r);
      } catch (o) {
        const s = String((o == null ? void 0 : o.stack) || (o == null ? void 0 : o.message) || o || "unknown editor frame error");
        ce.tickErrorSignature !== s && (ce.tickErrorSignature = s, console.error("[PanoramaStickers] editor frame failed", o)), P.stageStatus = nr, P.stageStatusDetail = "frame", ae == null || ae.setAttribute("data-stage-ready", ""), ae == null || ae.removeAttribute("data-stage-loading-kind");
      } finally {
        ce.running && (ce.rafId = requestAnimationFrame(hf));
      }
  }
  function S0() {
    ce.running = !1, ce.rafId && cancelAnimationFrame(ce.rafId), ce.rafId = 0;
  }
  function tt() {
    i || (d.historyController.commitActionGroup(JSON.stringify(mh(x))), Tl());
  }
  function wl(r) {
    if (i) return;
    const o = r < 0 ? d.historyController.undo() : d.historyController.redo();
    if (Tl(), !o) return;
    const s = JSON.parse(o);
    Object.keys(x).forEach((u) => delete x[u]), Object.assign(x, s), d.selectedId = t === "stickers" || t === "cutout" ? x.active.selected_sticker_id : x.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], Dn(), hn(), je(), mn(), ve({ cause: "cutout_frame" });
  }
  function mf() {
    var s, u;
    const r = Array.isArray((s = d.historyController) == null ? void 0 : s.entries) ? d.historyController.entries : [], o = Number((u = d.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function hn() {
    Dp();
    const r = Tx({
      editor: d,
      swatches: fs,
      paintColorPopOpen: U ? !U.hidden : !1,
      colorToCss: Yn,
      colorsApproximatelyEqual: ds,
      rgb01ToHsv: uu,
      hsv01ToRgb: lu,
      getBrushPresetIdForTool: Or,
      isActiveLassoTool: Xp
    });
    if (Object.assign(P.paintDock, r), ng(), !r.visible) {
      U && (U.hidden = !0);
      return;
    }
    Y && (clearTimeout(Y), Y = 0), R && (!r.colorEnabled && U && !U.hidden && (Y = window.setTimeout(() => {
      U.hidden = !0, P.paintDock.colorPopOpen = !1, Y = 0;
    }, 170)), U && (U.style.setProperty("--picker-hue-color", r.pickerHueColor), U.style.setProperty("--picker-sat", r.pickerSat), U.style.setProperty("--picker-val", r.pickerVal), U.style.setProperty("--picker-hue", r.pickerHue)), xe && (xe.style.left = r.pickerSvLeft, xe.style.top = r.pickerSvTop), M && (M.style.left = r.pickerHueLeft));
  }
  function Di() {
    const r = t === "cutout" && d.mode === "frame" ? ze() : wt();
    r && (d.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: yr(r)
    }, je());
  }
  function je() {
    var $e, Xe, _e, se;
    if (a) return;
    x.ui_settings = x.ui_settings || {};
    const r = Cx(x.ui_settings);
    if (l) {
      P.sidePanel = Ix({
        coverage: x.coverage,
        uiSettings: r,
        normalizeCoverageValue: Yt
      });
      return;
    }
    const o = wt(), s = t === "cutout" && d.mode === "frame" ? ze() : null, u = s || o, h = s ? [s] : In(), p = s ? "shot" : fo();
    h.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), u && p !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(u.yaw_deg || 0),
      pitch_deg: Number(u.pitch_deg || 0),
      hFOV_deg: Number(u.hFOV_deg || (p === "image" ? 30 : 90)),
      vFOV_deg: Number(u.vFOV_deg || (p === "image" ? 30 : 60)),
      rot_deg: Number(u.rot_deg || 0),
      roll_deg: Number(u.roll_deg || 0),
      aspect_id: yr(u)
    });
    const y = d.panelLastValues || (t === "stickers" || p === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = p === "stroke" ? null : u, w = g || y, N = !!g && !En(g);
    d.panelWasEnabled = N, cl();
    let T = null;
    if (s) {
      const ye = ol({ item: s, kind: "shot", label: "Frame" });
      T = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ye.label,
        currentIcon: ye.icon || null,
        items: [{
          id: String(s.id || ""),
          label: ye.label,
          icon: ye.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const ye = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? lr().forEach((Te, Ue) => {
        var Wt, _t;
        if (!Te) return;
        const it = jt(Te) ? String(Te.id || ei) : String(((_t = (Wt = x.assets) == null ? void 0 : Wt[Te.asset_id]) == null ? void 0 : _t.name) || Te.asset_id || Te.id), qe = `${Ue + 1}. ${it}${jt(Te) && Si(Te) ? " (hidden)" : ""}`, dt = ol({ item: Te, label: qe, kind: "image" });
        ye.push({ id: Te.id, label: dt.label, icon: dt.icon, item: Te, kind: "image" });
      }) : Oc().forEach((Te) => {
        if (!(Te != null && Te.item)) return;
        const Ue = ol(Te);
        ye.push({ id: Te.item.id, label: Ue.label, icon: Ue.icon, item: Te.item, kind: Te.kind });
      });
      const Ie = (g == null ? void 0 : g.id) || "", Ee = ye.find((Te) => Te.id === Ie) || ye[0];
      T = {
        label: "Selection",
        open: !1,
        disabled: ye.length <= 1,
        currentLabel: Ee.label,
        currentIcon: Ee.icon || null,
        items: ye.map((Te) => ({
          id: Te.id,
          label: Te.label,
          icon: Te.icon || null,
          active: Te.id === Ie
        }))
      };
    }
    const C = [], F = (ye, Ie, Ee, Te, Ue) => {
      const it = q(Number(w[ye] || 0), Ee, Te);
      C.push({
        key: ye,
        label: Ie,
        min: Ee,
        max: Te,
        step: Ue,
        value: it,
        displayValue: Hi(it),
        fillPct: q((it - Ee) / Math.max(1e-6, Te - Ee) * 100, 0, 100),
        enabled: N && !i
      });
    }, j = [];
    h.length > 1 ? (j.push(`Selected objects: ${h.length}`), j.push("Multi-selection supports z-order and delete.")) : (F("yaw_deg", "Yaw", -180, 180, 0.1), F("pitch_deg", "Pitch", -90, 90, 0.1), F("hFOV_deg", "H FOV", 1, 179, 0.1), F("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || p === "image" ? F("rot_deg", "Rotation", -180, 180, 0.1) : F("roll_deg", "Roll", -180, 180, 0.1));
    const te = Array.isArray((Xe = ($e = x == null ? void 0 : x.painting) == null ? void 0 : $e.paint) == null ? void 0 : Xe.strokes) ? x.painting.paint.strokes.length : 0, K = Array.isArray((se = (_e = x == null ? void 0 : x.painting) == null ? void 0 : _e.mask) == null ? void 0 : se.strokes) ? x.painting.mask.strokes.length : 0, V = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((ye) => String((ye == null ? void 0 : ye.name) || "")) : [], ne = SN(
      e,
      V.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), he = !!String((ne == null ? void 0 : ne.src) || "").trim() || Rc("pano_input_images").length > 0, le = Array.isArray(lr()) && lr().length > 0 || te > 0, we = K > 0, Fe = [
      { key: "mask", label: "Mask", icon: De.circle_dashed_tool, visible: !!d.showMask, enabled: we },
      { key: "objects", label: "Paint / Images", icon: De.image, visible: !!d.showObjects, enabled: le },
      { key: "panorama", label: "Panorama", icon: De.globe, visible: !!d.showPanorama, enabled: he }
    ].map((ye) => ({
      ...ye,
      ariaLabel: `Toggle ${ye.label.toLowerCase()}`,
      tip: ye.visible ? "Hide" : "Show"
    }));
    P.sidePanel = Ex({
      coverage: x.coverage,
      readOnly: i,
      selectionPicker: T,
      enabled: N,
      selectedKind: p,
      selectedItems: h,
      params: C,
      notes: j,
      visibilityRows: Fe,
      uiSettings: r,
      normalizeCoverageValue: Yt
    });
  }
  function wa(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function pf(r) {
    if (i || t !== "stickers" && t !== "cutout" || !wa(r)) return;
    const o = Qo("asset"), s = _h(e, `add:${o}`, async () => {
      const u = URL.createObjectURL(r);
      try {
        const h = await new Promise((N, T) => {
          const C = new Image();
          C.onload = () => N(C), C.onerror = () => T(new Error("image load failed")), C.src = u;
        });
        Oe.set(o, h);
        const p = Qo("st");
        x.stickers.push({
          id: p,
          asset_id: o,
          yaw_deg: d.viewYaw,
          pitch_deg: d.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Br(30, Number(h.naturalWidth || h.width || 1), Number(h.naturalHeight || h.height || 1)),
          rot_deg: 0,
          z_index: Fc()
        }), wi(x.stickers[x.stickers.length - 1]), Nl(), tt(), je(), Ye(), ve();
        const y = await hl(r, String(r.name || o));
        if (!(Array.isArray(x.stickers) ? x.stickers : []).filter((N) => String((N == null ? void 0 : N.asset_id) || "") === o).length) return;
        x.assets[o] = y, Ci(), rt(), je(), Ye(), ve();
      } catch (h) {
        delete x.assets[o], Oe.delete(o);
        const p = Array.isArray(x.stickers) ? x.stickers : [], y = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === o);
        throw y.length && (x.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== o), y.some((g) => {
          var w;
          return String((g == null ? void 0 : g.id) || "") === String(((w = d.selection) == null ? void 0 : w.id) || "");
        }) && wi(null), je(), Ye(), ve(), rt()), h;
      } finally {
        URL.revokeObjectURL(u);
      }
    });
    try {
      await s;
    } catch {
    }
  }
  function N0() {
    var r;
    i || t !== "stickers" && t !== "cutout" || (r = Z == null ? void 0 : Z.openImagePicker) == null || r.call(Z, "add");
  }
  async function M0(r) {
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = wt();
    if (!o || !vt(o) || jt(o) || !wa(r)) return;
    const s = String(o.id || ""), u = Qo("asset"), h = _h(e, `replace:${s}:${u}`, async () => {
      var C;
      const p = (Array.isArray(x.stickers) ? x.stickers : []).find((F) => String((F == null ? void 0 : F.id) || "") === s) || null;
      if (!p || !vt(p) || jt(p)) return;
      const y = String(p.asset_id || ""), g = y ? Zt(((C = x.assets) == null ? void 0 : C[y]) || null) : null, w = Number(p.vFOV_deg || 0), N = p.crop && typeof p.crop == "object" ? { ...p.crop } : null, T = URL.createObjectURL(r);
      try {
        const F = await new Promise((K, V) => {
          const ne = new Image();
          ne.onload = () => K(ne), ne.onerror = () => V(new Error("image load failed")), ne.src = T;
        });
        Oe.set(u, F), p.asset_id = u, p.vFOV_deg = Br(
          Number(p.hFOV_deg || 30),
          Number(F.naturalWidth || F.width || 1),
          Number(F.naturalHeight || F.height || 1)
        ), p.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Bt(), tt(), je(), Ye(), ve();
        const j = await hl(r, String(r.name || u)), te = (Array.isArray(x.stickers) ? x.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === s) || null;
        if (!te || String(te.asset_id || "") !== u) return;
        x.assets[u] = j, Ci(), rt(), je(), Ye(), ve();
      } catch (F) {
        delete x.assets[u], Oe.delete(u);
        const j = (Array.isArray(x.stickers) ? x.stickers : []).find((te) => String((te == null ? void 0 : te.id) || "") === s) || null;
        throw j && String(j.asset_id || "") === u && (y && g && (x.assets[y] = g), j.asset_id = y, j.vFOV_deg = w, j.crop = N ? { ...N } : null), Bt(), rt(), je(), Ye(), ve(), F;
      } finally {
        URL.revokeObjectURL(T);
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function k0() {
    var o;
    if (i) return;
    const r = wt();
    !r || !vt(r) || jt(r) || (o = Z == null ? void 0 : Z.openImagePicker) == null || o.call(Z, "replace");
  }
  async function P0() {
    if (i || t !== "stickers") return;
    const r = x.assets && typeof x.assets == "object" ? x.assets : {}, o = Object.entries(r).filter(([, u]) => {
      const h = String((u == null ? void 0 : u.type) || "").toLowerCase(), p = String((u == null ? void 0 : u.value) || "");
      return h === "dataurl" && p.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [u, h] of o)
      try {
        const p = String((h == null ? void 0 : h.value) || "");
        if (!p) continue;
        const y = await fetch(p).then((C) => C.blob()), g = String(y.type || "image/png").split("/")[1] || "png", w = String((h == null ? void 0 : h.name) || `${u}.${g}`), N = new File([y], w, { type: y.type || "image/png" }), T = await hl(N, w);
        x.assets[u] = {
          ...T,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (rt(), ve());
  }
  function A0() {
    if (i || t !== "cutout") return;
    const r = ze();
    if (r) {
      wi(r), d.mode = "pano", Zs(
        Ut(Number(r.yaw_deg || 0)),
        q(Number(r.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), je(), Ye(), ve({ cause: "cutout_frame" });
      return;
    }
    const o = Bm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ut(Number(d.viewYaw || 0)),
      pitchDeg: Number(d.viewPitch || 0),
      viewFovDeg: Number(d.viewFov || 90)
    });
    x.shots = [o], wi(o), Nl(), d.mode = "pano", tt(), rt(), je(), Ye(), ve({ cause: "cutout_frame" });
  }
  function C0() {
    i || t !== "cutout" || (x.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, x.active.selected_shot_id = null, tt(), rt(), je(), Ye(), ve());
  }
  function T0() {
    const r = Array.isArray(x.stickers) ? x.stickers : [], o = [];
    for (const s of r)
      jt(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function gf(r, o, s = "Clear") {
    return new Promise((u) => {
      P.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: u
      };
    });
  }
  async function I0() {
    var s, u;
    if (i || !await gf(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    x.painting = Ba(null), Dn();
    const o = T0();
    if (t === "stickers")
      x.stickers = o, x.assets = {}, d.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], x.active.selected_sticker_id = ((u = o[0]) == null ? void 0 : u.id) || null, Ci();
    else {
      const h = xx(x.shots, x.active.selected_shot_id);
      x.stickers = o, x.assets = {}, x.shots = h.shots, d.selectedId = h.selectedShotId, d.selectedIds = d.selectedId ? [d.selectedId] : [], x.active.selected_sticker_id = null, x.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, Ci();
    }
    tt(), rt(), je(), Ye(), ve();
  }
  async function E0(r) {
    var p, y, g, w;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", u = Oi(o);
    if (!(!u.length && !(((p = d.interaction) == null ? void 0 : p.kind) === "draw" && ((y = d.interaction) == null ? void 0 : y.layerKind) === o) || !await gf(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((g = d.interaction) == null ? void 0 : g.kind) === "draw" && ((w = d.interaction) == null ? void 0 : w.layerKind) === o) {
        const N = _n();
        N && d.paintEngine.cancelActiveStroke(N), d.interaction = null;
      }
      u.length = 0, x.painting.raster_objects = dn().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== o), o === "paint" && (qt().length = 0), Dn(), tt(), rt(), je(), Ye(), hn(), ve();
    }
  }
  function D0() {
    if (i) return;
    const r = wt();
    if (!r || !vt(r) || jt(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = Qo("st"), o.yaw_deg = Ut((o.yaw_deg || 0) + 8), o.z_index = Fc(), x.stickers.push(o), x.active.selected_sticker_id = o.id, d.selectedId = o.id, d.selectedIds = [o.id], Bt(), tt(), rt(), Ye(), je(), ve();
  }
  function bf() {
    var s, u, h, p, y, g;
    if (i) return;
    const r = In(), o = wt();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const w = new Set(r.filter((C) => Lt(C)).map((C) => String(C.actionGroupId || C.id || ""))), N = new Set(r.filter((C) => Xt(C)).map((C) => Vt(C.rasterObjectId || C.id || ""))), T = new Set(r.filter(vt).map((C) => String(C.id || "")));
        w.size > 0 && (x.painting.paint.strokes = (Array.isArray((u = (s = x.painting) == null ? void 0 : s.paint) == null ? void 0 : u.strokes) ? x.painting.paint.strokes : []).filter((C) => !w.has(String((C == null ? void 0 : C.actionGroupId) || ""))), x.painting.groups = qt().filter((C) => !w.has(String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || ""))), Dn()), N.size > 0 && (x.painting.raster_objects = dn().filter((C) => !N.has(String((C == null ? void 0 : C.id) || ""))), Ei()), T.size > 0 && (x.stickers = (Array.isArray(x.stickers) ? x.stickers : []).filter((C) => T.has(String((C == null ? void 0 : C.id) || "")) ? jt(C) ? (Si(C) || (C.visible = !1), !0) : !1 : !0), Ci(), Bt()), d.selectedId = null, d.selectedIds = [], tt(), rt(), je(), Ye(), ve();
        return;
      }
      if (Lt(o)) {
        const w = String(o.actionGroupId || o.id || "").trim();
        x.painting.paint.strokes = (Array.isArray((p = (h = x.painting) == null ? void 0 : h.paint) == null ? void 0 : p.strokes) ? x.painting.paint.strokes : []).filter((N) => String((N == null ? void 0 : N.actionGroupId) || "").trim() !== w), x.painting.groups = qt().filter((N) => String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim() !== w), Dn(), d.selectedId = null, d.selectedIds = [], tt(), rt(), je(), Ye(), ve();
        return;
      }
      if (Xt(o)) {
        const w = Vt(o.rasterObjectId || o.id || "");
        x.painting.raster_objects = dn().filter((N) => String((N == null ? void 0 : N.id) || "").trim() !== w), Ei(), d.selectedId = null, d.selectedIds = [], tt(), rt(), je(), Ye(), ve();
        return;
      }
      if (t === "stickers" || vt(o)) {
        if (jt(o)) {
          if (Si(o)) return;
          o.visible = !1, Bt(), tt(), rt(), je(), Ye(), ve();
          return;
        }
        x.stickers = x.stickers.filter((w) => w.id !== o.id), Ci(), Bt(), d.selectedId = ((y = x.stickers[0]) == null ? void 0 : y.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], x.active.selected_sticker_id = ((g = x.stickers[0]) == null ? void 0 : g.id) || null, tt(), rt(), je(), Ye(), ve();
        return;
      }
      C0();
    }
  }
  function Sl(r, o) {
    const s = ce.frameSafeRect;
    if (!r || !s || d.mode !== "frame") return !1;
    const u = ru * na(s, r), h = Um(dc(s, o), u);
    return r.hFOV_deg = h.hFOV_deg, r.vFOV_deg = h.vFOV_deg, !0;
  }
  function yf(r, o) {
    if (!r || r.locked === !0) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const g = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(g)) {
        const [T, C] = g.split(":").map((F) => Number(F));
        if (Number.isFinite(T) && Number.isFinite(C)) return T >= C;
      }
      const w = Number(r.hFOV_deg || 64), N = Number(r.vFOV_deg || 40);
      return Math.abs(w - N) > 1e-6 ? w >= N : ra(r) >= 1;
    })();
    let [h, p] = s[String(o)] || s["1:1"];
    h >= p !== u && ([h, p] = [p, h]);
    const y = h / p;
    if (!Sl(r, y)) {
      const g = q(Number(r.vFOV_deg || 40), 1, 179);
      r.vFOV_deg = g, r.hFOV_deg = ls(g, y);
    }
    r.aspect_id = `${h}:${p}`;
  }
  function O0(r, o, s) {
    if (!r || r.locked === !0) return !1;
    const u = Za(o, s);
    if (!u) return !1;
    const h = u.ratio;
    if (!Sl(r, h)) {
      const p = q(Number(r.vFOV_deg || 40), 1, 179);
      r.vFOV_deg = p, r.hFOV_deg = ls(p, h);
    }
    return r.aspect_id = u.label, !0;
  }
  function vf(r) {
    if (!r || r.locked === !0) return;
    const o = String(r.aspect_id || "").trim(), s = ao(r), u = s.tanHalfX / Math.max(1e-12, s.tanHalfY), h = 1 / Math.max(1e-12, u);
    if (!Sl(r, h)) {
      const p = q(Number(r.vFOV_deg || 60), 1, 179);
      r.vFOV_deg = p, r.hFOV_deg = ls(p, h);
    }
    if (/^\d+:\d+$/.test(o)) {
      const [p, y] = o.split(":");
      r.aspect_id = `${y}:${p}`;
    } else
      r.aspect_id = ri(r);
  }
  function _f() {
    vi().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function F0() {
    if (i) return;
    const r = In();
    if (!wt() || r.length === 0) return;
    _f();
    const s = vi(), u = new Set(r.map((g) => vt(g) ? `sticker:${String(g.id || "")}` : Xt(g) ? `rasterObject:${Vt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], p = [];
    if (s.forEach((g) => {
      var N, T;
      const w = g.type === "sticker" ? `sticker:${String(((N = g.item) == null ? void 0 : N.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((T = g.item) == null ? void 0 : T.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      u.has(w) ? h.push(g) : p.push(g);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...p, ...h].forEach((g, w) => {
      g.type === "sticker" && g.item && (g.item.z_index = w), g.type === "strokeGroup" && g.item && (g.item.z_index = w), g.type === "rasterObject" && g.item && (g.item.z_index = w);
    }), Bt(), tt(), rt(), Ye(), ve();
  }
  function R0() {
    if (i) return;
    const r = In();
    if (!wt() || r.length === 0) return;
    _f();
    const s = vi(), u = new Set(r.map((g) => vt(g) ? `sticker:${String(g.id || "")}` : Xt(g) ? `rasterObject:${Vt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], p = [];
    if (s.forEach((g) => {
      var N, T;
      const w = g.type === "sticker" ? `sticker:${String(((N = g.item) == null ? void 0 : N.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((T = g.item) == null ? void 0 : T.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      u.has(w) ? h.push(g) : p.push(g);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...p].forEach((g, w) => {
      g.type === "sticker" && g.item && (g.item.z_index = w), g.type === "strokeGroup" && g.item && (g.item.z_index = w), g.type === "rasterObject" && g.item && (g.item.z_index = w);
    }), Bt(), tt(), rt(), Ye(), ve();
  }
  function L0() {
    i || (x.projection_model = "pinhole_rectilinear", x.alpha_mode = "straight", f && (x.output_preset = I(Number(x.output_preset || 2048))), m && (x.coverage = Yt(m.value)), b && (x.bg_color = String(b.value || x.bg_color || "#00ff00")), mn(), e.setDirtyCanvas(!0, !0));
  }
  function mn() {
    var o;
    if (i) return;
    x.coverage = Yt(x.coverage);
    const r = JSON.stringify(x);
    v && (v.value = r, (o = v.callback) == null || o.call(v, r));
  }
  const xf = () => mn();
  i || (e.__panoFlushStateBeforeQueue = xf);
  function No() {
    x.ui_settings = DN(x.ui_settings), i || mn();
  }
  function rt() {
    var r;
    i || (mn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function z0() {
    i || _g() && qc().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function $0(r = {}) {
    var u, h, p, y, g, w, N, T, C, F;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((h = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || h.call(u), (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || y.call(p), (g = e.setDirtyCanvas) == null || g.call(e, !0, !1)), s && ((N = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || N.call(w, !0, !0), (F = (C = (T = zn) == null ? void 0 : T.canvas) == null ? void 0 : C.setDirty) == null || F.call(C, !0, !0));
  }
  function Nl() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", hn(), je());
  }
  function Wr(r) {
    const o = A.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * A.width,
      y: (r.clientY - o.top) / o.height * A.height
    };
  }
  function Mo(r) {
    const o = A.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function wf() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function ze() {
    if (t !== "cutout") return null;
    const r = Array.isArray(x.shots) ? x.shots : [];
    if (!r.length) return null;
    const o = String(x.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function V0() {
    var j, te, K, V, ne;
    if (!A) return null;
    const r = (j = A.getBoundingClientRect) == null ? void 0 : j.call(A), o = Number((r == null ? void 0 : r.width) || 0) > 0 ? A.width / r.width : 1, s = Number((r == null ? void 0 : r.height) || 0) > 0 ? A.height / r.height : 1;
    ce.frameCanvasScale = Math.min(o, s);
    let u = 24, h = 24;
    const p = Math.max(u + 1, A.width - 24);
    let y = Math.max(h + 1, A.height - 24);
    const g = (te = nt == null ? void 0 : nt.getBoundingClientRect) == null ? void 0 : te.call(nt), w = (K = gt == null ? void 0 : gt.getBoundingClientRect) == null ? void 0 : K.call(gt);
    let N = 24;
    g && r && g.width > 0 && g.height > 0 && (N = Math.max(N, (g.right - r.left) * o + wh)), w && r && w.width > 0 && w.height > 0 && ((V = P.frameRail) == null ? void 0 : V.visible) === !0 && (N = Math.max(N, (r.right - w.left) * o + wh)), u = Math.max(u, N);
    const T = Math.min(p, A.width - N);
    let C = 24;
    const F = (ne = Je == null ? void 0 : Je.getBoundingClientRect) == null ? void 0 : ne.call(Je);
    if (F && r && F.width > 0 && F.height > 0 && (C = Math.max(C, (F.bottom - r.top) * s + iu)), [Gt, on].forEach((he) => {
      var Fe;
      if (!he || !r) return;
      const le = getComputedStyle(he);
      if (le.display === "none" || le.visibility === "hidden" || Number(le.opacity) <= 0) return;
      const we = (Fe = he.getBoundingClientRect) == null ? void 0 : Fe.call(he);
      !we || we.width <= 0 || we.height <= 0 || (C = Math.max(C, (r.bottom - we.top) * s + iu));
    }), Re && r) {
      const he = getComputedStyle(Re);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (C = Math.max(C, (mN + iu) * s));
    }
    return h = Math.max(h, C), y = Math.max(h + 1, Math.min(y, A.height - C)), {
      x: u,
      y: h,
      w: Math.max(1, T - u),
      h: Math.max(1, y - h)
    };
  }
  function Ml(r = ze()) {
    if (!r || !A) return null;
    const o = ce.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, A.width - 48),
      h: Math.max(1, A.height - 48)
    };
    return w1(o, r, ru * na(o, r));
  }
  function zt(r = ze()) {
    const o = Ml(r);
    return o ? { x: o.x, y: o.y, w: o.w, h: o.h } : null;
  }
  function kl() {
    return t === "cutout" && !!ze();
  }
  function On(r, o = performance.now()) {
    if (d.mode === "unwrap") {
      const p = Er(), y = (r.x - p.x) / Math.max(1, p.w), g = (r.y - p.y) / Math.max(1, p.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: q(g, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = dl(r.x, r.y), { lon: u, lat: h } = pl(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Fn(r, o, s = performance.now()) {
    const u = zt(o);
    if (!u) return null;
    const h = {
      x: (Number(r.x) - u.x) / Math.max(1, u.w),
      y: (Number(r.y) - u.y) / Math.max(1, u.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const p = vl(o, h);
    if (!p) return null;
    const { lon: y, lat: g } = pl(p);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - g / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function j0(r, o) {
    const s = ze();
    if (!s || s.locked === !0) return !1;
    const u = Number(o) > 0, h = Wm(s, o);
    if (!h) return !1;
    if (u) {
      const p = ru * na(
        ce.frameSafeRect || { w: A.width, h: A.height },
        h
      ), y = Nu({ width: A.width, height: A.height }, p);
      if (y.halfW < A.width * 0.5 - 1e-6 || y.halfH < A.height * 0.5 - 1e-6) return !1;
    }
    return s.hFOV_deg = h.hFOV_deg, s.vFOV_deg = h.vFOV_deg, d.frameWheelChanged = !0, d.frameWheelCommitTimer && window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = window.setTimeout(() => {
      d.frameWheelCommitTimer = 0, d.frameWheelChanged && (d.frameWheelChanged = !1, tt(), rt(), je());
    }, 180), je(), !0;
  }
  function H0() {
    return d.frameWheelCommitTimer && (window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = 0), d.frameWheelChanged ? (d.frameWheelChanged = !1, tt(), rt(), je(), !0) : !1;
  }
  function Sa() {
    const r = d.interaction;
    if (!(r != null && r.shot) || !r.start || r.kind !== "pan_frame" && r.kind !== "roll_frame") return !1;
    const o = r.kind === "roll_frame";
    return r.kind === "pan_frame" ? (r.shot.yaw_deg = r.start.yaw_deg, r.shot.pitch_deg = r.start.pitch_deg) : r.shot.roll_deg = r.start.roll_deg, o && Yr(), d.interaction = null, Pi(), cr(), je(), ft(d.pointerPos), ve({ localOnly: !0 }), !0;
  }
  function U0(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function Or(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? mr : pn[o] ? o : d.activeBrushPresetId || mr;
  }
  function Sf() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (wf() || kl());
  }
  function Nf() {
    var r;
    return Sf() && ((r = d.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function ko(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), u = Number((r == null ? void 0 : r.y) || 0), h = o !== !1, p = d.pointerPos || { x: 0, y: 0, inside: !1 }, y = p.inside !== h || Math.abs(p.x - s) > 0.01 || Math.abs(p.y - u) > 0.01;
    return d.pointerPos = { x: s, y: u, inside: h }, y;
  }
  function G0() {
    var T, C;
    if (!Nf()) return null;
    const r = d.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? d.maskTool : d.paintTool, s = Or(o), u = pn[s] || pn[mr], h = Number(d.brushSizes[s] ?? 10), p = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(3, p * 0.5), g = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : xn(d.paintColor), w = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : q(Math.max(0.16, Number(g.a ?? 1) * 0.3), 0.16, 0.52), N = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : q(Math.max(0.46, Number(g.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: u,
      radius: y,
      fillStyle: Yn(g, w),
      strokeStyle: Yn(g, N),
      x: Number(((T = d.pointerPos) == null ? void 0 : T.x) || 0),
      y: Number(((C = d.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function B0() {
    var F, j, te;
    const r = G0();
    if (!me) return;
    if (!r) {
      me.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, u = "999px", h = 0, p = r.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", g = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let T = Number(r.hotspotX ?? o * 0.5), C = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = Ds, s = Ds, u = "0", y = "0", g = "none", T = bN, C = yN, p = TN(r.fillStyle, N, w);
    else if (r.layerKind === "mask")
      p = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const K = Math.max(1, Number(((F = r.preset) == null ? void 0 : F.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * K), s = Math.max(6, r.radius * 2), u = `${Math.min(6, s * 0.42)}px`, h = Number(((te = (j = r.preset) == null ? void 0 : j.angle) == null ? void 0 : te.value) || 0) * vr;
    } else r.toolKind === "brush" ? p = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (p = "rgba(255,255,255,0.14)");
    me.style.display = "block", me.style.width = `${Math.round(o)}px`, me.style.height = `${Math.round(s)}px`, me.style.borderRadius = u, me.style.border = y, me.style.boxShadow = g, me.style.background = p, me.style.backgroundRepeat = "no-repeat", me.style.backgroundPosition = "center", me.style.backgroundSize = "contain", me.style.transform = `translate(${Math.round(r.x - T)}px, ${Math.round(r.y - C)}px) rotate(${h}deg)`;
  }
  function K0() {
    var he;
    if (!ee || !ue) return;
    const r = d.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? d.maskTool : d.paintTool;
    if (o === "lasso_fill") return;
    const s = Or(o), u = pn[s] || pn[mr], h = Number(d.brushSizes[s] ?? 10), p = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(6, p * 0.5), g = o === "eraser", w = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : g ? { r: 1, g: 1, b: 1, a: 0.22 } : xn(d.paintColor), N = r === "mask" ? Yn(w, 0.22) : g ? "rgba(255,255,255,0.14)" : Yn(w, q(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), T = r === "mask" ? Yn(w, 0.96) : g ? "rgba(255,255,255,0.72)" : Yn(w, q(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let C = y * 2, F = y * 2, j = "999px", te = 0, K = N;
    const V = "rgba(222, 222, 222, 0.72)", ne = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      K = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const le = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      C = Math.max(16, y * 2 * le), F = Math.max(10, y * 2), j = `${Math.min(8, F * 0.42)}px`, te = Number(((he = u == null ? void 0 : u.angle) == null ? void 0 : he.value) || 0) * vr;
    } else o === "brush" ? K = `radial-gradient(circle at 50% 50%, ${T} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (C = Math.max(18, y * 1.8), F = C, K = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${T} 43%, ${T} 58%, rgba(0,0,0,0) 59%)`) : g && (K = "rgba(255,255,255,0.12)");
    ue.style.width = `${Math.round(C)}px`, ue.style.height = `${Math.round(F)}px`, ue.style.borderRadius = j, ue.style.background = K, ue.style.border = `1px solid ${V}`, ue.style.boxShadow = `0 0 0 1px ${ne}`, ue.style.transform = `rotate(${te}deg)`, G && (clearTimeout(G), G = 0), ee.classList.remove("fade-out"), ee.classList.add("show");
  }
  function Po() {
    !ee || !ee.classList.contains("show") || (ee.classList.add("fade-out"), G && clearTimeout(G), G = window.setTimeout(() => {
      ee.classList.remove("show", "fade-out"), G = 0;
    }, 180));
  }
  function Mf(r, o, s, u) {
    const h = Or(o), p = pn[h] || pn[mr], y = d.brushSizes[h] ?? 10, g = Math.max(1, y) * Math.max(0.1, p.sizeScale ?? 1), w = U0(u, g), N = s.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), T = {
      id: Ui(r),
      actionGroupId: Ui("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: g,
      createdAt: Date.now(),
      color: r === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: w.radiusModel,
      radiusValue: w.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((C) => ({ ...C })),
        points: N.map((C) => ({ ...C }))
      }
    };
    return dh(T, p), Number(p.aspect ?? 1), Number(T.aspect ?? 1), String(T.stampKind || ""), Number(T.size || 0), String(T.radiusModel || ""), Number(T.radiusValue || 0), { ...T.targetSpace }, T;
  }
  function kf(r, o, s, u) {
    const h = s.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), p = Or(o), y = pn[p] || pn[mr], g = {
      id: Ui(r),
      actionGroupId: Ui("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((w) => ({ ...w }))
      }
    };
    return dh(g, y), Number(y.aspect ?? 1), Number(g.aspect ?? 1), String(g.stampKind || ""), { ...g.targetSpace }, g;
  }
  function Oi(r) {
    const o = x.painting || (x.painting = Ba(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function W0(r, o, s = performance.now()) {
    let u;
    if (d.mode === "frame") {
      const N = ze();
      if (!N || (u = Fn(o, N, s), !u)) return !1;
    } else
      u = On(o, s);
    if (!u) return !1;
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, p = r.stroke.geometry.points, y = h[h.length - 1];
    if (y) {
      const N = Math.abs(Number(u.u ?? u.x ?? 0) - Number(y.u ?? y.x ?? 0)), T = Math.abs(Number(u.v ?? u.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (N < 15e-4 && T < 15e-4) return !1;
    }
    const g = {
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...g }), p.push({ ...g });
    const w = _n();
    if (w) {
      const N = d.paintEngine.ensureTarget(w);
      d.paintEngine.appendStrokePoint(N, Number(g.u ?? 0), Number(g.v ?? 0), r.stroke);
    }
    return !0;
  }
  function Y0(r, o, s = performance.now()) {
    var y, g;
    let u;
    if (d.mode === "frame") {
      const w = ze();
      if (!w) return !1;
      u = Fn(o, w, s);
    } else
      u = On(o, s);
    const h = (g = (y = r == null ? void 0 : r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.points;
    if (!u || !Array.isArray(h)) return !1;
    const p = h[h.length - 1];
    if (p) {
      const w = Math.abs(Number(u.u ?? u.x ?? 0) - Number(p.u ?? p.x ?? 0)), N = Math.abs(Number(u.v ?? u.y ?? 0) - Number(p.v ?? p.y ?? 0));
      if (w < 15e-4 && N < 15e-4) return !1;
    }
    return h.push({
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function q0(r) {
    var le, we, Fe, $e, Xe;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    wo();
    const s = _n(), u = va(s.width, s.height);
    if (!cf(u, o, { w: s.width, h: s.height })) return !1;
    const h = ((we = (le = u.ctx) == null ? void 0 : le.getImageData(0, 0, s.width, s.height)) == null ? void 0 : we.data) || null;
    if (!h) return !1;
    const p = new Map(qt().map((_e) => [String((_e == null ? void 0 : _e.actionGroupId) || (_e == null ? void 0 : _e.id) || "").trim(), _e ? { ..._e } : null])), y = [], g = [], w = [...dn().filter((_e) => String((_e == null ? void 0 : _e.layerKind) || "paint") !== "paint")];
    let N = !1, T = vi().reduce((_e, se) => Math.max(_e, Number((se == null ? void 0 : se.z_index) || 0)), -1) + 1;
    function C(_e, se, ye, Ie = 8) {
      let Ee = se, Te = ye, Ue = -1, it = -1;
      for (let qe = 0; qe < ye; qe += 1)
        for (let dt = 0; dt < se; dt += 1)
          _e[(qe * se + dt) * 4 + 3] <= Ie || (dt < Ee && (Ee = dt), qe < Te && (Te = qe), dt > Ue && (Ue = dt), qe > it && (it = qe));
      return Ue < Ee || it < Te ? null : { minX: Ee, minY: Te, maxX: Ue, maxY: it };
    }
    const F = C(h, s.width, s.height, 8);
    if (!F) return !1;
    function j(_e, se) {
      return !_e || !se ? !1 : !(_e.maxX < se.minX || se.maxX < _e.minX || _e.maxY < se.minY || se.maxY < _e.minY);
    }
    function te(_e, se) {
      const ye = Ir((_e == null ? void 0 : _e.actionGroupId) || (_e == null ? void 0 : _e.id) || "", "paint", se);
      if (!ye) return null;
      const Ie = ye.centerUv.u - ye.halfW, Ee = ye.centerUv.u + ye.halfW, Te = ye.centerUv.v - ye.halfH, Ue = ye.centerUv.v + ye.halfH, it = s.width, qe = s.height;
      return {
        minX: Math.floor((Ie % 1 + 1) % 1 * it),
        maxX: Math.ceil((Ee % 1 + 1) % 1 * it),
        minY: Math.floor(q(Te, 0, 1) * qe),
        maxY: Math.ceil(q(Ue, 0, 1) * qe),
        wraps: Ee - Ie >= 1 || Ie < 0 || Ee > 1
      };
    }
    function K(_e) {
      const se = (_e == null ? void 0 : _e.bbox) || null;
      if (!se) return null;
      const ye = (_e == null ? void 0 : _e.transform) || {}, Ie = s.width, Ee = s.height, Te = Number(se.u0 || 0) + Number(ye.du || 0), Ue = Number(se.u1 || 0) + Number(ye.du || 0), it = Number(se.v0 || 0) + Number(ye.dv || 0), qe = Number(se.v1 || 0) + Number(ye.dv || 0);
      return {
        minX: Math.floor((Te % 1 + 1) % 1 * Ie),
        maxX: Math.ceil((Ue % 1 + 1) % 1 * Ie),
        minY: Math.floor(q(it, 0, 1) * Ee),
        maxY: Math.ceil(q(qe, 0, 1) * Ee),
        wraps: Ue - Te >= 1 || Te < 0 || Ue > 1
      };
    }
    function V(_e) {
      return _e ? _e.wraps ? j(F, { minX: 0, maxX: _e.maxX, minY: _e.minY, maxY: _e.maxY }) || j(F, { minX: _e.minX, maxX: s.width - 1, minY: _e.minY, maxY: _e.maxY }) : j(F, _e) : !0;
    }
    function ne(_e) {
      if (!_e) return { touched: !1, canvas: null };
      const se = va(s.width, s.height, { readback: !0 });
      se.ctx.drawImage(_e, 0, 0);
      const ye = se.ctx.getImageData(0, 0, s.width, s.height);
      se.ctx.save(), se.ctx.globalCompositeOperation = "destination-out", se.ctx.drawImage(u.canvas, 0, 0), se.ctx.restore();
      const Ie = se.ctx.getImageData(0, 0, s.width, s.height);
      for (let Ee = 0; Ee < s.width * s.height; Ee += 1) {
        if (h[Ee * 4 + 3] <= 8) continue;
        const Ue = ye.data[Ee * 4 + 3], it = Ie.data[Ee * 4 + 3];
        if (Ue > it)
          return { touched: !0, canvas: se.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(_e, se, ye) {
      const Ie = Number(ye == null ? void 0 : ye.z_index), Ee = l0(_e, se, ye).map((Te, Ue) => ({
        ...Te,
        z_index: Number.isFinite(Ie) ? Ie + Ue * 1e-3 : T + Ue * 1e-3
      }));
      return Ee.length && (T = Math.max(T, ...Ee.map((Te) => Number((Te == null ? void 0 : Te.z_index) || 0))) + 1), Ee;
    }
    for (const _e of qt()) {
      const se = String((_e == null ? void 0 : _e.actionGroupId) || (_e == null ? void 0 : _e.id) || "").trim();
      if (!se) continue;
      const ye = Tn(se, "paint");
      if (!V(te(_e, ye))) {
        g.push(_e), y.push(...ye);
        continue;
      }
      const Ie = (($e = (Fe = d.paintEngine) == null ? void 0 : Fe.getGroupTarget) == null ? void 0 : $e.call(Fe, se)) || null, Ee = ((Xe = Ie == null ? void 0 : Ie.committedPaint) == null ? void 0 : Xe.canvas) || null;
      if (!Ee) {
        g.push(_e), y.push(...ye);
        continue;
      }
      const Te = ne(Ee);
      if (!Te.touched || !Te.canvas) {
        g.push(_e), y.push(...ye);
        continue;
      }
      N = !0;
      const Ue = he(Te.canvas, "paint", p.get(se) || _e || {});
      w.push(...Ue);
    }
    for (const _e of dn().filter((se) => String((se == null ? void 0 : se.layerKind) || "paint") === "paint")) {
      if (!V(K(_e))) {
        w.push(_e);
        continue;
      }
      const se = Wc(_e, null);
      if (!se) {
        w.push(_e);
        continue;
      }
      const ye = ne(se);
      if (!ye.touched || !ye.canvas) {
        w.push(_e);
        continue;
      }
      N = !0;
      const Ie = he(ye.canvas, "paint", _e);
      w.push(...Ie);
    }
    return N ? (x.painting.paint.strokes = y, x.painting.groups = g.sort((_e, se) => Number((_e == null ? void 0 : _e.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), x.painting.raster_objects = w.sort((_e, se) => Number((_e == null ? void 0 : _e.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), ga({ preservePanelValues: !1 }), !0) : !1;
  }
  function X0(r) {
    var y, g, w, N, T;
    if ((((g = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.rawPoints) || ((N = (w = r.stroke) == null ? void 0 : w.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      Pl(r);
      const C = _n();
      C && (String(((T = r.stroke) == null ? void 0 : T.toolKind) || "") === "eraser" ? d.paintEngine.cancelActiveStroke(C) : d.paintEngine.commitActiveStroke(r.stroke, C)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, h = Mf(r.layerKind, s.toolKind, [], u);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const p = _n();
    p && d.paintEngine.beginStroke(h, p);
  }
  function J0(r) {
    var y, g;
    if ((((g = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.points) || []).length >= 3) {
      Pl(r);
      const w = _n();
      w && d.paintEngine.commitActiveStroke(r.stroke, w), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, h = kf(r.layerKind, s.toolKind, [], u);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const p = _n();
    p && d.paintEngine.beginStroke(h, p);
  }
  function Pl(r) {
    var p, y, g, w;
    const o = ((p = r == null ? void 0 : r.stroke) == null ? void 0 : p.geometry) || null;
    if (!o) return !1;
    const s = String(((y = r == null ? void 0 : r.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = _l(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), q0(r);
    const u = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (u && Ac((g = r.stroke) == null ? void 0 : g.actionGroupId), Oi(r.layerKind).push(r.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = _l(h, r.stroke.targetSpace, !0), u && Ac((w = r.stroke) == null ? void 0 : w.actionGroupId), Oi(r.layerKind).push(r.stroke), !0);
  }
  function Pf(r) {
    var s;
    if (t === "cutout" && d.mode === "frame") {
      const u = ze(), h = zt(u);
      if (!u || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const y = Fn(r, u, performance.now()), g = y ? Ti(y) : null;
      if (g)
        for (const N of yl()) {
          if (!vt(N)) continue;
          const T = xa(N, g);
          if (T && Number(T.x) >= 0 && Number(T.x) <= 1 && Number(T.y) >= 0 && Number(T.y) <= 1) {
            const C = Ht(N);
            if (C != null && C.visible) return { item: N, geom: C };
          }
        }
      const w = tl(!1).slice().sort((N, T) => Number((T == null ? void 0 : T.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of w) {
        if (N.type === "strokeGroup") {
          const F = xi(ha("paint", N.actionGroupId || N.id || ""));
          if (!F) continue;
          const j = Ht(F);
          if (!(j != null && j.visible)) continue;
          const te = Array.isArray(j.strokePaths) ? j.strokePaths : [];
          for (const K of te) {
            const V = Array.isArray(K == null ? void 0 : K.points) ? K.points : [];
            if (!V.length) continue;
            if (K.closed && V.length >= 3 && pr(r, V)) return { item: F, geom: j };
            const ne = Math.max(8, Number((K == null ? void 0 : K.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < V.length - 1; he += 1)
              if (su(r, V[he], V[he + 1]) <= ne * ne) return { item: F, geom: j };
            if (V.length === 1 && Rr(r, V[0]) <= ne * ne) return { item: F, geom: j };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const F = _i(ma(((s = N.item) == null ? void 0 : s.id) || N.id || ""));
          if (!F) continue;
          const j = Ht(F);
          if (Kc(F, j, r, y)) return { item: F, geom: j };
          continue;
        }
        const T = N.item;
        if (!T || !vt(T) || !g) continue;
        const C = xa(T, g);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const F = Ht(T);
          if (F != null && F.visible) return { item: T, geom: F };
        }
      }
      return null;
    }
    const o = [
      ...tl(!1).slice().sort((u, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((u) => {
        var h;
        return u.type === "strokeGroup" ? xi(ha("paint", u.actionGroupId || u.id || "")) : u.type === "rasterObject" ? _i(ma(((h = u.item) == null ? void 0 : h.id) || u.id || "")) : u.item;
      }).filter(Boolean),
      ...t === "cutout" ? yl().filter((u) => vn(u)) : []
    ];
    for (const u of o) {
      if (Lt(u)) {
        const p = Ht(u);
        if (!(p != null && p.visible)) continue;
        const y = Array.isArray(p.strokePaths) ? p.strokePaths : [];
        for (const g of y) {
          const w = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
          if (!w.length) continue;
          if (g.closed && w.length >= 3 && pr(r, w)) return { item: u, geom: p };
          const N = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
          for (let T = 0; T < w.length - 1; T += 1)
            if (su(r, w[T], w[T + 1]) <= N * N) return { item: u, geom: p };
          if (w.length === 1 && Rr(r, w[0]) <= N * N) return { item: u, geom: p };
        }
        continue;
      }
      if (Xt(u)) {
        const p = Ht(u);
        if (!(p != null && p.visible)) continue;
        if (Kc(u, p, r)) return { item: u, geom: p };
        continue;
      }
      const h = Ht(u);
      if (h.visible && pr(r, h.corners))
        return { item: u, geom: h };
    }
    return null;
  }
  function Al(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const u = r.corners.findIndex((p) => Rr(p, o) <= 121);
      if (u >= 0) {
        const p = r.corners[u], y = p.x - r.center.x, g = p.y - r.center.y, w = y * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: u, cursor: w };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const p of h) {
        const y = Array.isArray(p == null ? void 0 : p.points) ? p.points : [];
        if (p.closed && y.length >= 3 && pr(o, y)) return { kind: "move", cursor: "default" };
        const g = Math.max(8, Number((p == null ? void 0 : p.lineWidth) || 0) * 0.5 + 6);
        for (let w = 0; w < y.length - 1; w += 1)
          if (su(o, y[w], y[w + 1]) <= g * g) return { kind: "move", cursor: "default" };
      }
      return pr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const u = r.corners.findIndex((h) => Rr(h, o) <= 121);
      if (u >= 0) {
        const h = r.corners[u], p = h.x - r.center.x, y = h.y - r.center.y, g = p * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: u, cursor: g };
      }
      return pr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const u = r.edgeMidpoints.find((h) => Rr(h, o) <= 169);
      if (u) {
        const h = u.edge === "left" || u.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: u.edge, mid: u };
      }
    }
    const s = r.corners.findIndex((u) => Rr(u, o) <= 121);
    if (s >= 0) {
      const u = r.corners[s], h = u.x - r.center.x, p = u.y - r.center.y, y = h * p >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: y };
    }
    return Rr(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : pr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function Af(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function Z0(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function Q0(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => Z0(r, h))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, u = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!pr({ x: s, y: u }, o.corners);
  }
  function ft(r) {
    if (B0(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? Mt("none") : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" || d.interaction.kind === "roll_frame" ? Mt("grabbing") : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? Mt("move") : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" || d.interaction.kind === "scale_raster_object" ? Mt(d.interaction.cursor || "nwse-resize") : d.interaction.kind === "rotate" ? Mt("grabbing") : Mt("default");
      return;
    }
    if (Nf()) {
      Mt("none");
      return;
    }
    if (d.mode === "frame") {
      if (d.altModifier && !i) {
        Mt(hN);
        return;
      }
      if (d.primaryTool !== "cursor") {
        Mt("default");
        return;
      }
      Mt("grab");
      return;
    }
    if (d.primaryTool === "cursor" && d.marqueeModifier) {
      Mt("default");
      return;
    }
    const o = wt(), s = o ? Ht(o) : null, u = o ? En(o) : !1, h = u ? { kind: "none", cursor: "default" } : Al(s, r);
    if (!u && h.kind !== "none") {
      Mt(h.cursor);
      return;
    }
    if (d.primaryTool === "cursor" && Pf(r)) {
      Mt("default");
      return;
    }
    Mt(d.mode === "pano" ? "grab" : "default");
  }
  function Ye() {
    var w, N;
    if (!It) return;
    if (d.mode === "frame") {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const r = wt(), o = In();
    if (!r && o.length === 0 || d.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = fo(), u = Dx({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? il(o) : Ht(r),
      allLocked: al(o),
      selectedLocked: En(r),
      activeAspect: yr(r),
      cutoutAspectOpen: d.cutoutAspectOpen,
      isExternalSticker: jt,
      isStickerHidden: Si,
      canRestoreSelectedToInitial: eg,
      iconSet: De
    });
    if (!u.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (T, C, { requireFitsBelow: F = !0 } = {}) => {
      var we, Fe, $e;
      const te = Number((we = u.anchor) == null ? void 0 : we.minX), K = Number((Fe = u.anchor) == null ? void 0 : Fe.maxX), V = Number(($e = u.anchor) == null ? void 0 : $e.maxY);
      if (![te, K, V].every(Number.isFinite)) return null;
      const ne = Math.max(14, A.width - T - 14), he = q((te + K) * 0.5 - T * 0.5, 14, ne), le = V + 18;
      return !Number.isFinite(he) || !Number.isFinite(le) || F && le + C > A.height - 14 ? null : { left: he, top: le };
    }, p = Math.max(1, Number(((w = d.menuSize) == null ? void 0 : w.w) || 220)), y = Math.max(1, Number(((N = d.menuSize) == null ? void 0 : N.h) || 40)), g = h(p, y, { requireFitsBelow: !1 });
    if (!g) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: g.left,
      top: g.top,
      items: u.items
    }, requestAnimationFrame(() => {
      if (!It || P.selectionMenu.visible !== !0) return;
      const T = It.getBoundingClientRect(), C = Math.round(Number((T == null ? void 0 : T.width) || 0)) || 220, F = Math.round(Number((T == null ? void 0 : T.height) || 0)) || 40;
      d.menuSize = { w: C, h: F, measured: !0 };
      const j = h(C, F);
      if (!j) {
        P.selectionMenu.visible = !1;
        return;
      }
      P.selectionMenu.left = j.left, P.selectionMenu.top = j.top;
    });
  }
  function Yr() {
    He.timer && (clearTimeout(He.timer), He.timer = 0), He.target = null, P.tooltip.visible = !1;
  }
  function eb(r) {
    if (!Pt || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    P.tooltip.text = o, P.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var K, V;
      if (He.target !== s || !Pt || !(s != null && s.isConnected)) return;
      const u = ae.getBoundingClientRect(), h = s.getBoundingClientRect(), p = 8, y = 12, g = Math.round(Number(((K = Pt.getBoundingClientRect()) == null ? void 0 : K.width) || 0)) || 100, w = Math.round(Number(((V = Pt.getBoundingClientRect()) == null ? void 0 : V.height) || 0)) || 24, N = !!s.closest(".pano-floating-left"), T = !!s.closest(".pano-frame-rail"), C = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let F = "", j = h.left - u.left + h.width * 0.5 - g * 0.5, te = h.top - u.top - w - y;
      if (N)
        F = "tool-rail", j = h.right - u.left + 10, te = h.top - u.top + h.height * 0.5 - w * 0.5, j = q(j, p, Math.max(p, u.width - g - p)), te = q(te, p, Math.max(p, u.height - w - p));
      else if (T)
        F = "frame-rail", j = h.left - u.left - g - 10, te = h.top - u.top + h.height * 0.5 - w * 0.5, j = q(j, p, Math.max(p, u.width - g - p)), te = q(te, p, Math.max(p, u.height - w - p));
      else if (C) {
        F = "footer";
        const ne = s.closest(".pano-paint-footer"), he = ne ? ne.getBoundingClientRect() : h;
        j = he.left - u.left + he.width * 0.5 - g * 0.5, te = he.bottom - u.top + 5, j = q(j, p, Math.max(p, u.width - g - p)), te = Math.max(p, te);
      }
      j = q(j, p, Math.max(p, u.width - g - p)), te = Math.max(p, te), P.tooltip.left = j, P.tooltip.top = te, P.tooltip.variant = F, P.tooltip.visible = !0;
    });
  }
  const Kt = Ws({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (r) => {
      d.viewYaw = Ut(Number(r.yaw || 0)), d.viewPitch = q(Number(r.pitch || 0), -89.9, 89.9), d.viewFov = q(Number(r.fov || d.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = A.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || A.clientWidth || 0)),
        h: Math.max(1, Number(r.height || A.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = x.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = x.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Er,
    onInteraction: () => {
      ce.backgroundDirty = !0, ce.dirty = !0;
    }
  });
  function tb(r, o, s = {}) {
    var p;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    r.accumulatedRad += jm(o, r.lastAngle), r.lastAngle = o;
    const u = Hm(r.start.roll_deg, r.accumulatedRad, {
      shiftKey: s.shiftKey,
      altKey: r.altStarted ? !1 : s.altKey
    });
    r.shot.roll_deg = u, r.changed = r.changed || Math.abs(r.accumulatedRad) > 1e-9;
    const h = (((p = P.sidePanel) == null ? void 0 : p.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u, h.displayValue = Hi(u), h.fillPct = (u + 180) / 360 * 100), dr(), Cl(r), ve({ localOnly: !0 });
  }
  function nb(r, o, s = {}) {
    var p;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot || !r.rollGesture) return;
    const u = Xm(r.rollGesture, o, s);
    if (!u) return;
    r.rollGesture = u.gesture, r.center = u.gesture.center, r.lastAngle = u.gesture.lastAngle, r.accumulatedRad = u.gesture.accumulatedRad, r.shot.roll_deg = u.rollDeg, r.changed = r.changed || Math.abs(u.gesture.accumulatedRad) > 1e-9;
    const h = (((p = P.sidePanel) == null ? void 0 : p.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u.rollDeg, h.displayValue = Hi(u.rollDeg), h.fillPct = (u.rollDeg + 180) / 360 * 100), dr(), Cl(r), ve({ localOnly: !0 });
  }
  const Cf = (r, o) => {
    const s = Wr(r);
    return Math.atan2(s.y - o.y, s.x - o.x);
  };
  function Cl(r) {
    var y, g;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    He.timer && (clearTimeout(He.timer), He.timer = 0), He.target = null;
    const o = zt(r.shot), s = (y = A.getBoundingClientRect) == null ? void 0 : y.call(A), u = (g = ae.getBoundingClientRect) == null ? void 0 : g.call(ae);
    if (!o || !s || !u || A.width <= 0 || A.height <= 0) return;
    const h = s.width / A.width, p = s.height / A.height;
    P.tooltip.text = `${Hi(r.shot.roll_deg)}°`, P.tooltip.left = s.left - u.left + (o.x + o.w * 0.5) * h, P.tooltip.top = s.top - u.top + (o.y + o.h * 0.5) * p + 12, P.tooltip.variant = "roll", P.tooltip.visible = !0;
  }
  Ge == null || Ge.addEventListener("pointerdown", (r) => {
    var p;
    if (r.button !== 0 || i || d.mode !== "frame") return;
    const o = ze();
    if (!o || o.locked === !0) return;
    const s = zt(o);
    if (!s) return;
    const u = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = Cf(r, u);
    d.interaction = {
      kind: "roll_frame",
      shot: o,
      center: u,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(o.roll_deg ?? o.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (p = Ge.setPointerCapture) == null || p.call(Ge, r.pointerId), r.preventDefault(), dr(), Cl(d.interaction), ve({ localOnly: !0 });
  }), Ge == null || Ge.addEventListener("pointermove", (r) => {
    var o;
    ((o = d.interaction) == null ? void 0 : o.kind) !== "roll_frame" || d.interaction.source !== "knob" || tb(
      d.interaction,
      Cf(r, d.interaction.center),
      r
    );
  });
  const rb = () => {
    const r = d.interaction;
    (r == null ? void 0 : r.kind) !== "roll_frame" || r.source !== "knob" || (r.changed && (tt(), rt(), je()), d.interaction = null, Yr(), cr(), dr(), ve());
  };
  Ge == null || Ge.addEventListener("pointerup", rb), Ge == null || Ge.addEventListener("pointercancel", () => Sa()), Ge == null || Ge.addEventListener("lostpointercapture", () => {
    var r;
    ((r = d.interaction) == null ? void 0 : r.source) === "knob" && Sa();
  }), Ge == null || Ge.addEventListener("dblclick", (r) => {
    const o = d.mode === "frame" && !i ? ze() : null;
    !o || o.locked === !0 || Math.abs(Number(o.roll_deg ?? o.rot_deg ?? 0)) <= 1e-9 || (o.roll_deg = 0, tt(), rt(), je(), dr(), ve(), r.preventDefault());
  }), A.onpointerdown = (r) => {
    const o = Wr(r);
    if (ko(o, !0), d.viewTween = null, Kt.state.inertia.active = !1, Kt.state.inertia.vx = 0, Kt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), d.mode === "frame") {
        const g = ze();
        if (!g || i || g.locked === !0) return;
        d.interaction = {
          kind: "pan_frame",
          shot: g,
          last: o,
          start: {
            yaw_deg: Number(g.yaw_deg || 0),
            pitch_deg: Number(g.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const g = d.mode === "unwrap" ? o : Mo(r);
        d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Kt.startDrag(g.x, g.y, r.pointerId, performance.now());
      }
      ft(o), A.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (d.mode === "frame" && (r.altKey || r.shiftKey) && !i) {
      const g = ze(), w = zt(g);
      if (!g || g.locked === !0 || !w) return;
      const N = qm({
        frame: w,
        point: o,
        startRollDeg: Number(g.roll_deg ?? g.rot_deg ?? 0),
        shiftKey: r.shiftKey,
        altKey: r.altKey,
        allowAlt: !0
      });
      if (!N) return;
      d.interaction = {
        kind: "roll_frame",
        shot: g,
        center: N.center,
        lastAngle: N.lastAngle,
        accumulatedRad: N.accumulatedRad,
        rollGesture: N,
        start: { roll_deg: Number(g.roll_deg ?? g.rot_deg ?? 0) },
        changed: !1,
        altStarted: N.source === "alt",
        source: N.source
      }, A.setPointerCapture(r.pointerId), r.preventDefault(), dr(), ve({ localOnly: !0 });
      return;
    }
    if (d.mode === "frame" && d.primaryTool === "cursor") {
      const g = ze();
      if (!g || i || g.locked === !0) return;
      d.interaction = {
        kind: "pan_frame",
        shot: g,
        last: o,
        start: { yaw_deg: Number(g.yaw_deg || 0), pitch_deg: Number(g.pitch_deg || 0) },
        changed: !1
      }, ft(o), A.setPointerCapture(r.pointerId), r.preventDefault();
      return;
    }
    if (i) {
      if (d.mode === "pano") {
        const g = Mo(r);
        d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Kt.startDrag(g.x, g.y, r.pointerId, performance.now()), ft(o), A.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (U && !U.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (wf() || kl())) {
      const g = d.primaryTool === "mask" ? "mask" : "paint", w = d.primaryTool === "mask" ? d.maskTool : d.paintTool, N = d.mode === "frame" && kl() ? ze() : null, T = { kind: "ERP_GLOBAL" }, C = N ? Fn(o, N, performance.now()) : On(o, performance.now());
      if (!C) {
        ft(o);
        return;
      }
      d.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: g,
        _livePreviewToken: Ui("live"),
        stroke: w === "lasso_fill" ? kf(g, w, [C], T) : Mf(g, w, [C], T)
      }, Pi();
      const F = _n();
      if (F)
        if (d.paintEngine.beginStroke(d.interaction.stroke, F), d.interaction.kind === "paint_stroke") {
          const j = d.paintEngine.ensureTarget(F), te = Number((C == null ? void 0 : C.u) ?? (C == null ? void 0 : C.x) ?? 0), K = Number((C == null ? void 0 : C.v) ?? (C == null ? void 0 : C.y) ?? 0);
          d.paintEngine.appendStrokePoint(j, te, K, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, F);
      ft(o), A.setPointerCapture(r.pointerId), ve();
      return;
    }
    const s = In(), u = wt(), h = s.length > 1 ? il(s) : u ? Ht(u) : null;
    if (d.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      d.interaction = { kind: "marquee_select", start: o, current: o }, ft(o), A.setPointerCapture(r.pointerId), ve({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((w) => En(w)) ? { kind: "none" } : Al(h, o)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: s.map((w) => w),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((w) => vt(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(w.yaw_deg || 0),
            pitch_deg: Number(w.pitch_deg || 0),
            center: (() => {
              var T, C;
              const N = Ht(w);
              return N != null && N.visible ? { x: Number(((T = N.center) == null ? void 0 : T.x) || 0), y: Number(((C = N.center) == null ? void 0 : C.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((w) => Lt(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: Zt(Tn(w.actionGroupId, w.layerKind)),
            frameSnapshot: Zt(Ir(w.actionGroupId, w.layerKind)),
            center: (() => {
              var T, C;
              const N = Ht(w);
              return N != null && N.visible ? { x: Number(((T = N.center) == null ? void 0 : T.x) || 0), y: Number(((C = N.center) == null ? void 0 : C.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: rl(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: s.filter((w) => Xt(w)).map((w) => ({
            id: Vt(w.rasterObjectId || w.id || ""),
            snapshot: Zt(dn().find((N) => String((N == null ? void 0 : N.id) || "") === Vt(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var T, C;
              const N = Ht(w);
              return N != null && N.visible ? { x: Number(((T = N.center) == null ? void 0 : T.x) || 0), y: Number(((C = N.center) == null ? void 0 : C.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Zc(w)
          }))
        }, ft(o), A.setPointerCapture(r.pointerId);
        return;
      }
    } else if (u && (h != null && h.visible)) {
      const g = En(u) ? { kind: "none" } : Al(h, o);
      if (g.kind === "scale") {
        d.interaction = Lt(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Zt(Tn(u.actionGroupId, u.layerKind)),
          frameSnapshot: Zt(Ir(u.actionGroupId, u.layerKind)),
          cursor: g.cursor
        } : Xt(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Zt(dn().find((w) => String((w == null ? void 0 : w.id) || "") === Vt(u.rasterObjectId || u.id || ""))),
          cursor: g.cursor
        } : {
          kind: "scale",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: g.cursor
        }, ft(o), A.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "scale_x" || g.kind === "scale_y") {
        d.interaction = {
          kind: g.kind,
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: g.cursor,
          edge: g.edge
        }, ft(o), A.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "rotate") {
        d.interaction = Lt(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: Zt(Tn(u.actionGroupId, u.layerKind)),
          frameSnapshot: Zt(Ir(u.actionGroupId, u.layerKind))
        } : {
          kind: "rotate",
          item: u,
          center: h.center,
          startRot: Number(u.rot_deg || u.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ft(o), A.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "move") {
        if (Lt(u)) {
          const w = d.mode === "frame" ? (() => {
            const N = ze();
            return N ? Fn(o, N, performance.now()) : null;
          })() : On(o, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: w,
            snapshot: Zt(Tn(u.actionGroupId, u.layerKind)),
            frameSnapshot: Zt(Ir(u.actionGroupId, u.layerKind))
          }, ft(o), A.setPointerCapture(r.pointerId);
          return;
        }
        if (Xt(u)) {
          const w = d.mode === "frame" ? (() => {
            const N = ze();
            return N ? Fn(o, N, performance.now()) : null;
          })() : On(o, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: w,
            snapshot: Zt(dn().find((N) => String((N == null ? void 0 : N.id) || "") === Vt(u.rasterObjectId || u.id || "")))
          }, ft(o), A.setPointerCapture(r.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: u,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ft(o), A.setPointerCapture(r.pointerId);
        return;
      }
    }
    const p = Pf(o);
    if (p) {
      const g = d.selectedId !== p.item.id;
      if (g && d.selectedId && (tt(), mn()), wi(p.item), t === "cutout" && g && (d.cutoutAspectOpen = !1), g && je(), Ye(), ve(), En(p.item)) {
        ft(o);
        return;
      }
      d.interaction = {
        kind: Lt(p.item) ? "move_stroke_group" : Xt(p.item) ? "move_raster_object" : "move",
        item: p.item,
        offset: { x: o.x - p.geom.center.x, y: o.y - p.geom.center.y },
        startUv: Lt(p.item) || Xt(p.item) ? d.mode === "frame" ? (() => {
          const w = ze();
          return w ? Fn(o, w, performance.now()) : null;
        })() : On(o, performance.now()) : null,
        snapshot: Lt(p.item) ? Zt(Tn(p.item.actionGroupId, p.item.layerKind)) : Xt(p.item) ? Zt(dn().find((w) => String((w == null ? void 0 : w.id) || "") === Vt(p.item.rasterObjectId || p.item.id || ""))) : null,
        frameSnapshot: Lt(p.item) ? Zt(Ir(p.item.actionGroupId, p.item.layerKind)) : null
      }, ft(o), A.setPointerCapture(r.pointerId);
      return;
    }
    const y = !!d.selectedId;
    if (y && (tt(), mn()), ga(), y && je(), Ye(), ve(), d.mode === "pano") {
      const g = Mo(r);
      d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Kt.startDrag(g.x, g.y, r.pointerId, performance.now()), ft(o), A.setPointerCapture(r.pointerId);
    }
  }, A.onpointermove = (r) => {
    var u, h, p, y, g, w, N, T, C, F, j, te, K, V, ne, he, le, we, Fe, $e, Xe, _e;
    const o = Wr(r);
    if (ko(o, !0), !d.interaction) {
      ft(o);
      return;
    }
    ft(o);
    const s = d.interaction;
    if (s.kind === "paint_stroke") {
      const se = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let ye = !1;
      se.forEach((Ie) => {
        const Ee = Wr(Ie);
        if (d.mode === "frame") {
          const Te = ze(), Ue = Te ? zt(Te) : null;
          if (Ue) {
            const it = (Ee.x - Ue.x) / Math.max(1, Ue.w), qe = (Ee.y - Ue.y) / Math.max(1, Ue.h);
            if (!(it >= 0 && it <= 1 && qe >= 0 && qe <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, X0(s));
          }
        }
        W0(s, Ee, performance.now()) && (ye = !0);
      }), ye && ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const se = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let ye = !1;
      if (se.forEach((Ie) => {
        const Ee = Wr(Ie);
        if (d.mode === "frame") {
          const Te = ze(), Ue = Te ? zt(Te) : null;
          if (Ue) {
            const it = (Ee.x - Ue.x) / Math.max(1, Ue.w), qe = (Ee.y - Ue.y) / Math.max(1, Ue.h);
            if (!(it >= 0 && it <= 1 && qe >= 0 && qe <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, J0(s));
          }
        }
        Y0(s, Ee, performance.now()) && (ye = !0);
      }), ye) {
        const Ie = _n();
        Ie && d.paintEngine.updateActiveStroke(s.stroke, Ie), ve({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const se = performance.now(), ye = d.mode === "unwrap" ? o : Mo(r);
      Kt.moveDrag(ye.x, ye.y, d.mode === "unwrap" ? "unwrap" : "pano", se), s.lastTs = se, s.last = ye, ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      const se = Ml(s.shot);
      if (!se || !s.shot) return;
      const ye = o.x - s.last.x, Ie = o.y - s.last.y, Ee = Jm(s.shot, {
        dx: ye,
        dy: Ie,
        focalPx: se.focalPx,
        invertX: ((u = x.ui_settings) == null ? void 0 : u.invert_view_x) === !0,
        invertY: ((h = x.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      s.shot.yaw_deg = Ee.yaw_deg, s.shot.pitch_deg = Ee.pitch_deg, s.changed = s.changed || Math.abs(ye) > 0 || Math.abs(Ie) > 0, s.last = o, ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "roll_frame") {
      if (s.source === "knob") return;
      nb(s, o, r);
      return;
    }
    if (s.kind === "move") {
      const se = o.x - s.offset.x, ye = o.y - s.offset.y;
      if (d.mode === "frame" && t === "cutout") {
        const Ie = ze(), Ee = zt(Ie);
        if (!Ie || !Ee) return;
        const Te = {
          x: q((se - Ee.x) / Math.max(1, Ee.w), 0, 1),
          y: q((ye - Ee.y) / Math.max(1, Ee.h), 0, 1)
        }, Ue = vl(Ie, Te);
        if (!Ue) return;
        const it = Xo(Ue);
        s.item.yaw_deg = it.yaw, s.item.pitch_deg = it.pitch;
      } else if (d.mode === "unwrap") {
        const Ie = Er(), Ee = q((se - Ie.x) / Math.max(Ie.w, 1), 0, 1), Te = q((ye - Ie.y) / Math.max(Ie.h, 1), 0, 1);
        s.item.yaw_deg = Ut(Ee * 360 - 180), s.item.pitch_deg = q(90 - Te * 180, -90, 90);
      } else {
        const Ie = dl(se, ye), Ee = Xo(Ie);
        s.item.yaw_deg = Ee.yaw, s.item.pitch_deg = Ee.pitch;
      }
      vt(s.item) && Bt(), ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const se = d.mode === "frame" ? (() => {
        const Ee = ze();
        return Ee ? Fn(o, Ee, performance.now()) : null;
      })() : On(o, performance.now());
      if (!se || !s.startUv) return;
      const ye = kn(Number(se.u || 0), Number(s.startUv.u || 0)), Ie = Number(se.v || 0) - Number(s.startUv.v || 0);
      Tc((p = s.item) == null ? void 0 : p.actionGroupId, ye, Ie, s.snapshot, (y = s.item) == null ? void 0 : y.layerKind, s.frameSnapshot) && (Dn({ rebuildPaintEngine: !1 }), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const se = d.mode === "frame" ? (() => {
        const Ee = ze();
        return Ee ? Fn(o, Ee, performance.now()) : null;
      })() : On(o, performance.now());
      if (!se || !s.startUv) return;
      const ye = kn(Number(se.u || 0), Number(s.startUv.u || 0)), Ie = Number(se.v || 0) - Number(s.startUv.v || 0);
      Ec(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((w = s.item) == null ? void 0 : w.id) || "", ye, Ie, s.snapshot) && (Ei(), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Up(((N = s.item) == null ? void 0 : N.rasterObjectId) || ((T = s.item) == null ? void 0 : T.id) || "", ye, s.snapshot) && (Ei(), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const se = o.x - Number(((C = s.offset) == null ? void 0 : C.x) || 0), ye = o.y - Number(((F = s.offset) == null ? void 0 : F.y) || 0);
      let Ie = !1, Ee = !1, Te = !1;
      const Ue = se - Number(((j = s.startCenter) == null ? void 0 : j.x) || se), it = ye - Number(((te = s.startCenter) == null ? void 0 : te.y) || ye);
      for (const qe of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const dt = (t === "cutout" ? nl() : lr()).find((_t) => String((_t == null ? void 0 : _t.id) || "") === String(qe.id || ""));
        if (!dt || !vt(dt)) continue;
        const Wt = {
          x: Number(((K = qe.center) == null ? void 0 : K.x) || 0) + Ue,
          y: Number(((V = qe.center) == null ? void 0 : V.y) || 0) + it
        };
        if (d.mode === "frame" && t === "cutout") {
          const _t = ze(), Et = zt(_t);
          if (!_t || !Et) continue;
          const qr = {
            x: q((Wt.x - Et.x) / Math.max(1, Et.w), 0, 1),
            y: q((Wt.y - Et.y) / Math.max(1, Et.h), 0, 1)
          }, Bf = vl(_t, qr);
          if (!Bf) continue;
          const Kf = Xo(Bf);
          dt.yaw_deg = Kf.yaw, dt.pitch_deg = Kf.pitch;
        } else if (d.mode === "unwrap") {
          const _t = Er(), Et = q((Wt.x - _t.x) / Math.max(_t.w, 1), 0, 1), qr = q((Wt.y - _t.y) / Math.max(_t.h, 1), 0, 1);
          dt.yaw_deg = Ut(Et * 360 - 180), dt.pitch_deg = q(90 - qr * 180, -90, 90);
        } else {
          const _t = dl(Wt.x, Wt.y), Et = Xo(_t);
          dt.yaw_deg = Et.yaw, dt.pitch_deg = Et.pitch;
        }
        Ie = !0;
      }
      for (const qe of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const dt = {
          x: Number(((ne = qe.center) == null ? void 0 : ne.x) || 0) + Ue,
          y: Number(((he = qe.center) == null ? void 0 : he.y) || 0) + it
        }, Wt = d.mode === "frame" ? (() => {
          const Et = ze();
          return Et ? Fn(dt, Et, performance.now()) : null;
        })() : On(dt, performance.now()), _t = qe.centerUv || null;
        if (Wt && _t) {
          const Et = kn(Number(Wt.u || 0), Number(_t.u || 0)), qr = Number(Wt.v || 0) - Number(_t.v || 0);
          Tc(qe.id, Et, qr, qe.snapshot, qe.layerKind, qe.frameSnapshot) && (Ie = !0, Ee = !0);
        }
      }
      for (const qe of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const dt = {
          x: Number(((le = qe.center) == null ? void 0 : le.x) || 0) + Ue,
          y: Number(((we = qe.center) == null ? void 0 : we.y) || 0) + it
        }, Wt = d.mode === "frame" ? (() => {
          const Et = ze();
          return Et ? Fn(dt, Et, performance.now()) : null;
        })() : On(dt, performance.now()), _t = qe.centerUv || null;
        if (Wt && _t) {
          const Et = kn(Number(Wt.u || 0), Number(_t.u || 0)), qr = Number(Wt.v || 0) - Number(_t.v || 0);
          Ec(qe.id, Et, qr, qe.snapshot) && (Ie = !0, Te = !0);
        }
      }
      Ie && (Ee ? Dn({ rebuildPaintEngine: !1 }) : Te ? Ei() : Bt(), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Ic((Fe = s.item) == null ? void 0 : Fe.actionGroupId, ye, 0, s.snapshot, ($e = s.item) == null ? void 0 : $e.layerKind, s.frameSnapshot) && (Dn({ rebuildPaintEngine: !1 }), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let se = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * vr;
      r.shiftKey && (se = Math.round(se / 45) * 45), Ic((Xe = s.item) == null ? void 0 : Xe.actionGroupId, 1, se, s.snapshot, (_e = s.item) == null ? void 0 : _e.layerKind, s.frameSnapshot) && (Dn({ rebuildPaintEngine: !1 }), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = q(s.startHFOV * ye, 1, 179), s.item.vFOV_deg = q(s.startVFOV * ye, 1, 179), s.item.aspect_id = ri(s.item), vt(s.item) && Bt(), ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = q(s.startHFOV * ye, 1, 179), s.item.aspect_id = ri(s.item), vt(s.item) && Bt(), ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = q(s.startVFOV * ye, 1, 179), s.item.aspect_id = ri(s.item), vt(s.item) && Bt(), ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let ye = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * vr, Ie = s.startRot - ye;
      r.shiftKey && (Ie = Math.round(Ie / 45) * 45);
      const Ee = vt(s.item) ? "rot_deg" : "roll_deg";
      s.item[Ee] = Ie, vt(s.item) && Bt(), ve({ localOnly: !0 });
    }
  }, A.onpointerup = () => {
    var o, s, u, h, p, y, g, w;
    const r = d.interaction;
    if (!((r == null ? void 0 : r.kind) === "roll_frame" && r.source === "knob")) {
      if (((o = d.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        Pi();
        const N = Pl(d.interaction), T = !!d.interaction._hasCommittedSegments;
        if (N || T) {
          Dn();
          const C = String(((u = d.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
          if (C) {
            const j = qt().find((te) => String((te == null ? void 0 : te.actionGroupId) || "") === C);
            j && (j.frame = null);
          }
          const F = _n();
          F && (N ? String(((h = d.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(F), sf()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, F) : d.paintEngine.cancelActiveStroke(F)), tt(), mn(), je(), Ye(), e.setDirtyCanvas(!0, !0), ve();
        } else {
          const C = _n();
          C && d.paintEngine.cancelActiveStroke(C);
        }
      } else if (((p = d.interaction) == null ? void 0 : p.kind) === "marquee_select") {
        const N = Af(d.interaction.start, d.interaction.current), C = [
          ...t === "cutout" ? yl().filter((F) => !vn(F)) : [...lr()],
          ...$p(),
          ...Vp()
        ].filter((F) => Q0(N, Ht(F)));
        Kp(C, ((y = C[C.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && C.length && (d.cutoutAspectOpen = !1), je(), Ye(), ve();
      } else if (((g = d.interaction) == null ? void 0 : g.kind) === "pan_frame" || ((w = d.interaction) == null ? void 0 : w.kind) === "roll_frame")
        d.interaction.changed && (tt(), rt(), je());
      else if (d.interaction && d.interaction.kind !== "view") {
        let N = !1;
        (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (N = !0), (d.interaction.kind === "move_raster_object" || d.interaction.kind === "scale_raster_object") && (N = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (N = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (N = !0), N && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(d.interaction.kind) || d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length ? Dn({ rebuildPaintEngine: !0 }) : Ei()), tt(), mn(), e.setDirtyCanvas(!0, !0), Di(), d.hqFrames = 1, Ye(), ve();
      }
      d.interaction = null, (r == null ? void 0 : r.kind) === "roll_frame" && Yr(), Pi(), r && r.kind === "view" && Kt.endDrag(performance.now()), cr(), Ye(), ft(d.pointerPos), ve();
    }
  }, A.onpointercancel = () => {
    var r, o, s;
    if (!Sa()) {
      if (((r = d.interaction) == null ? void 0 : r.kind) === "view" && Kt.endDrag(performance.now()), ((o = d.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        Pi();
        const u = _n();
        u && d.paintEngine.cancelActiveStroke(u);
      }
      d.interaction = null, Pi(), cr(), ft(d.pointerPos), ve({ localOnly: !0 });
    }
  }, A.onlostpointercapture = () => {
    Sa();
  }, A.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, A.onmousemove = (r) => {
    const o = Wr(r), s = ko(o, !0);
    d.interaction || (ft(o), s && d.mode === "frame" && d.primaryTool === "cursor" && ve({ localOnly: !0 }));
  }, A.onmouseleave = () => {
    ko(d.pointerPos, !1), ft(d.pointerPos), d.mode === "frame" && d.primaryTool === "cursor" && ve({ localOnly: !0 });
  }, A.onwheel = (r) => {
    if (d.mode === "frame") {
      const o = Wr(r), s = fc(r);
      s && j0(o, s) && ve({ localOnly: !0 }), r.preventDefault();
      return;
    }
    d.mode === "pano" && (Kt.applyWheelEvent(r) && ve({ localOnly: !0 }), r.preventDefault());
  }, A.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), Gr(!0));
  }, A.ondrop = (r) => {
    var u;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), At.depth = 0, Gr(!1);
    const s = Array.from(((u = r.dataTransfer) == null ? void 0 : u.files) || []).find((h) => wa(h));
    s && pf(s);
  };
  const Tf = (r) => {
    t !== "stickers" && t !== "cutout" || i || Js(r) && (At.depth += 1, Gr(!0), r.preventDefault());
  }, If = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!At.active && Js(r) && Gr(!0), At.active && r.preventDefault());
  }, Ef = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !At.active) return;
    At.depth = Math.max(0, At.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (At.depth === 0 || o) && Gr(!1);
  }, Df = (r) => {
    t !== "stickers" && t !== "cutout" || i || (At.depth = 0, Gr(!1), Js(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", Tf, !0), window.addEventListener("dragover", If, !0), window.addEventListener("dragleave", Ef, !0), window.addEventListener("drop", Df, !0);
  function Tl() {
    const { canUndo: r, canRedo: o } = mf();
    $i(P.toolButtons, "value", "undo", { disabled: !r }), $i(P.toolButtons, "value", "redo", { disabled: !o });
  }
  const Of = (r, o, s = !1) => {
    var w;
    const u = t === "cutout" && d.mode === "frame" ? ze() : null, h = u || wt(), p = u ? "shot" : fo();
    if (!h || p === "stroke" || En(h)) return;
    const y = (((w = P.sidePanel) == null ? void 0 : w.params) || []).find((N) => N.key === r);
    if (!y || y.enabled === !1) return;
    let g = Number(o);
    Number.isNaN(g) && (g = 0), g = q(g, Number(y.min), Number(y.max)), r === "yaw_deg" && (g = Ut(g)), h[r] = g, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (h.aspect_id = ri(h)), je(), ve(), s && tt();
  };
  ke == null || ke.addEventListener("click", async (r) => {
    var u, h, p, y, g, w, N, T, C;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const F = Yt(o.getAttribute("data-coverage"));
      if (F === Yt(x.coverage)) return;
      x.coverage = F, d.coverage = F, m && (m.value = String(F)), l ? ce.backgroundDirty = !0 : (mn(), $0({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), je(), Ye(), ve();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((h = (u = P.sidePanel) == null ? void 0 : u.selectionPicker) != null && h.disabled) return;
      P.sidePanel.selectionPicker.open = !P.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      P.sidePanel.selectionPicker.open = !1;
      const F = String(o.getAttribute("data-selection-id") || "");
      let j = null;
      F && (t === "stickers" ? j = lr().find((te) => String((te == null ? void 0 : te.id) || "") === F) || null : j = ((p = Oc().find((te) => {
        var K;
        return String(((K = te == null ? void 0 : te.item) == null ? void 0 : K.id) || "") === F;
      })) == null ? void 0 : p.item) || null), wi(j || null), j && !Lt(j) && Zs(
        Ut(Number(j.yaw_deg || 0)),
        q(Number(j.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), je(), Ye(), ve();
      return;
    }
    if (s === "copy-state-inline") {
      const F = wt(), j = fo();
      if (!F || j === "stroke" || In().length > 1) return;
      const te = JSON.stringify(t === "cutout" && j !== "image" ? jc(F) : ag(F));
      try {
        await navigator.clipboard.writeText(te), (y = P.sidePanel) != null && y.copyStateButton && (P.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var K;
          (K = P.sidePanel) != null && K.copyStateButton && (P.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const F = String(o.getAttribute("data-visibility") || "");
      F === "panorama" ? d.showPanorama = !d.showPanorama : F === "objects" ? d.showObjects = !d.showObjects : F === "mask" && (d.showMask = !d.showMask), je(), ve();
      return;
    }
    if (s === "set-invert-x") {
      x.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", No(), je(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), ve();
      return;
    }
    if (s === "set-invert-y") {
      x.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", No(), je(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ve();
      return;
    }
    if (s === "toggle-quality-picker") {
      (N = P.sidePanel) != null && N.uiSettings && (P.sidePanel.uiSettings.qualityOpen = !P.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const F = String(o.getAttribute("data-quality") || "balanced");
      x.ui_settings.preview_quality = F === "draft" || F === "high" ? F : "balanced", No(), je(), (T = e.setDirtyCanvas) == null || T.call(e, !0, !0), ve();
      return;
    }
    if (s === "ui-reset-defaults") {
      x.ui_settings.invert_view_x = !1, x.ui_settings.invert_view_y = !1, x.ui_settings.preview_quality = "balanced", No(), je(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), ve();
      return;
    }
    if (s === "close-preview") {
      Ri();
      return;
    }
    if (s === "cancel-close") {
      Ri();
      return;
    }
    s === "save-close" && (L0(), Ri());
  }), ke == null || ke.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Of(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), ke == null || ke.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Of(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const Il = () => Uc();
  Il(), W.addEventListener("click", (r) => {
    var g, w, N, T, C, F, j, te, K;
    if ((w = (g = r.target) == null ? void 0 : g.matches) != null && w.call(g, "[data-confirm-overlay]")) {
      const V = (N = P.confirmDialog) == null ? void 0 : N.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, V == null || V(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      const V = d.mode;
      d.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && d.mode === "frame" && (V !== "frame" && (ce.frameSafeRect = null), je(), Ye()), Nl(), cr(), ve();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const V = String(s.getAttribute("data-tool-mode") || "cursor");
        d.primaryTool = V, (V === "paint" || V === "mask") && ga({ preservePanelValues: !0 }), hn(), je(), Ye(), ve();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const V = String(s.getAttribute("data-tool-ui-action") || "");
        if ((V === "undo" || V === "redo") && s.disabled) return;
        V === "undo" ? wl(-1) : V === "redo" ? wl(1) : V === "clear" ? I0() : V === "add" || V === "add-image" ? N0() : V === "add-or-look" && A0();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        d.primaryTool = "paint";
        const V = String(s.getAttribute("data-paint-tool") || "pen");
        d.paintTool = V, ga({ preservePanelValues: !0 }), pn[V] && (d.activeBrushPresetId = V), hn(), je(), Ye(), ve();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        d.primaryTool = "mask", d.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), ga({ preservePanelValues: !0 }), hn(), je(), Ye(), ve();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const V = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        E0(V);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const V = fs.find((ne) => ne.id === s.getAttribute("data-paint-color-swatch"));
        if (!V) return;
        d.paintColor = xn(V.color), J(!0), hn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), U && !U.hidden ? J(!0) : ge(), hn();
        return;
      }
    }
    const u = String(((T = s == null ? void 0 : s.getAttribute) == null ? void 0 : T.call(s, "data-action")) || "");
    if (u === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(B instanceof HTMLVideoElement)) return;
      if (ki(), B.paused) {
        Ne.mode = "playback", Ne.pendingPlaybackResume = !1, Ne.resumeAfterScrub = !1;
        const V = Number(P.videoTransport.duration || B.duration || 0), ne = Number(B.currentTime || Ne.editorTime || 0), he = V > 0 && ne >= V - 1e-3 ? 0 : Number(Ne.editorTime || ne || 0), le = Math.max(Xs(), 0.04);
        Ne.editorTime = he, Math.abs(ne - he) > le ? (Ne.seeking = !1, Ne.pendingPlaybackResume = !0, ll(he)) : B.play().catch(() => {
        });
      } else
        B.pause(), Ne.mode = "scrub", Ne.resumeAfterScrub = !1, Ne.pendingPlaybackResume = !1, Ne.editorTime = Number(B.currentTime || 0), Mi();
      Un({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: ur(),
        currentTime: Ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: Ne.mode
      }), ve({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (u === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(B instanceof HTMLVideoElement) || !P.videoTransport.hasAudio) return;
      const V = !B.muted;
      B.muted = V, !V && Number(B.volume || 0) <= 0 && (B.volume = Math.max(0.01, Number(P.videoTransport.volume || 1))), Un({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: ur(),
        currentTime: Ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: Ne.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: B.muted,
        volume: Number(B.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (u === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(B instanceof HTMLVideoElement)) return;
      const V = !P.videoTransport.loop;
      P.videoTransport.loop = V, B.loop = V, Un({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: ur(),
        currentTime: Ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: Ne.mode,
        hasAudio: P.videoTransport.hasAudio,
        loop: V,
        muted: B.muted,
        volume: Number(B.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (u === "frame-aspect") {
        P.frameRail.aspectOpen = !P.frameRail.aspectOpen;
        return;
      }
      if (u === "frame-aspect-set") {
        const V = d.mode === "frame" ? ze() : null;
        if (!V || V.locked === !0) return;
        yf(V, String(s.getAttribute("data-aspect") || "1:1")), P.frameRail.aspectOpen = !1, Di(), tt(), rt(), cr(), ve();
        return;
      }
      if (u === "frame-aspect-custom") {
        const V = d.mode === "frame" ? ze() : null, ne = (C = s.closest) == null ? void 0 : C.call(s, ".pano-frame-aspect-popover"), he = (j = (F = ne == null ? void 0 : ne.querySelector) == null ? void 0 : F.call(ne, 'input[name="customWidth"]')) == null ? void 0 : j.value, le = (K = (te = ne == null ? void 0 : ne.querySelector) == null ? void 0 : te.call(ne, 'input[name="customHeight"]')) == null ? void 0 : K.value;
        if (!V || !O0(V, he, le)) return;
        P.frameRail.aspectOpen = !1, Di(), tt(), rt(), cr(), ve();
        return;
      }
      if (u === "frame-rotate-90") {
        const V = d.mode === "frame" ? ze() : null;
        if (!V || V.locked === !0) return;
        vf(V), P.frameRail.aspectOpen = !1, Di(), tt(), rt(), cr(), ve();
        return;
      }
      if (u === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, Ye(), ve();
        return;
      }
      if (u === "aspect-set") {
        const V = wt();
        if (!V) return;
        const ne = String(s.getAttribute("data-aspect") || "1:1");
        yf(V, ne), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Di(), tt(), rt(), Ye(), ve();
        return;
      }
      if (u === "rotate-90") {
        const V = wt();
        if (!V) return;
        vf(V), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Di(), tt(), rt(), Ye(), ve();
        return;
      }
      if (u === "bring-front") {
        F0();
        return;
      }
      if (u === "send-back") {
        R0();
        return;
      }
      if (u === "duplicate") {
        D0();
        return;
      }
      if (u === "replace-image") {
        k0();
        return;
      }
      if (u === "toggle-lock") {
        Bp();
        return;
      }
      if (u === "back-initial") {
        Zp();
        return;
      }
      if (u === "toggle-visible") {
        Jp();
        return;
      }
      if (u === "delete") {
        bf();
        return;
      }
    }
    if (u === "reset-view") {
      if (d.mode === "frame") return;
      Zs(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      if (d.mode === "frame") return;
      d.showGrid = !d.showGrid, FN(e == null ? void 0 : e.id, d.showGrid), Il(), ve();
      return;
    }
    if (u === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), ob();
      return;
    }
    if (u === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const V = !d.outputPreviewExpanded;
      d.outputPreviewExpanded = V, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = V ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), $f(), ve();
      return;
    }
    const h = r.target.closest("[data-paint-history-index]");
    if (!h) return;
    const p = Number(h.getAttribute("data-paint-history-index")), y = d.customPaintHistory[p];
    y && (d.customPaintColor = xn(y), d.paintColor = xn(y), hn());
  }), W.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(B instanceof HTMLVideoElement)) return;
      ki();
      const p = q(Number(o.value || 0), 0, Number(P.videoTransport.duration || 0));
      Ne.mode = "scrub", !Ne.seeking && !B.paused && !B.ended && (Ne.resumeAfterScrub = !0, B.pause()), Ne.editorTime = p, Pc(p), Un({
        ready: !!B.getAttribute("src"),
        playing: !1,
        visible: ur(),
        currentTime: p,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: "scrub"
      }), Number(et.__panoFrameIdx || 0) > 0 && (ce.backgroundDirty = !0, ce.dirty = !0, ve({ cause: "frame_view", localOnly: !0 })), ll(p);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(B instanceof HTMLVideoElement)) return;
      const p = q(Number(s.value || 0), 0, 1);
      B.volume = p, B.muted = p <= 1e-4, Un({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: ur(),
        currentTime: Ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: Ne.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: B.muted,
        volume: p
      });
      return;
    }
    const u = r.target.closest("[data-paint-size-slider]");
    if (u) {
      if (u.disabled) return;
      const p = Math.max(1, Math.min(120, Math.round(Number(u.value)))), y = Or(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[y] = p, hn(), K0();
      return;
    }
    const h = r.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const p = { ...d.customPaintColor, a: q(Number(h.value) / 100, 0, 1) };
      d.customPaintColor = xn(p), d.paintColor = xn(p), hn();
    }
  }), W.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!(B instanceof HTMLVideoElement)) return;
      Ne.pendingPlaybackResume = !!Ne.resumeAfterScrub, Ne.resumeAfterScrub = !1, Ne.pendingPlaybackResume || (Ne.mode = "scrub"), Ne.seeking || (Ne.pendingPlaybackResume ? (Ne.pendingPlaybackResume = !1, Ne.mode = "playback", B.play().catch(() => {
      })) : (Mi(), ve({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Po();
  }), W.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Po();
  }), W.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Po();
  }), W.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && Po();
  }), W.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !W.contains(o) || He.target !== o && (He.target = o, He.timer && clearTimeout(He.timer), He.timer = window.setTimeout(() => {
      He.target === o && eb(o);
    }, 220));
  }), W.addEventListener("pointerout", (r) => {
    var u, h;
    const o = r.target.closest("[data-tip]");
    !o || He.target !== o || (r.relatedTarget instanceof Element ? (h = (u = r.relatedTarget).closest) == null ? void 0 : h.call(u, "[data-tip]") : null) === o || Yr();
  }), W.addEventListener("pointerdown", (r) => {
    r.target.closest("[data-frame-roll-knob]") || Yr();
  });
  const ib = (r, o) => {
    var g;
    if (!oe) return;
    const s = oe.getBoundingClientRect(), u = q((r - s.left) / Math.max(1, s.width), 0, 1), h = 1 - q((o - s.top) / Math.max(1, s.height), 0, 1), p = uu(d.customPaintColor), y = { ...lu(p.h, u, h), a: Number(((g = d.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    d.customPaintColor = xn(y), d.paintColor = xn(y), hn();
  }, ab = (r) => {
    var p;
    if (!be) return;
    const o = be.getBoundingClientRect(), s = q((r - o.left) / Math.max(1, o.width), 0, 1), u = uu(d.customPaintColor), h = { ...lu(s, u.s, u.v), a: Number(((p = d.customPaintColor) == null ? void 0 : p.a) ?? 1) };
    d.customPaintColor = xn(h), d.paintColor = xn(h), hn();
  }, Ff = (r, o) => {
    const s = r.pointerId;
    o(r);
    const u = (p) => {
      p.pointerId === s && o(p);
    }, h = (p) => {
      p.pointerId === s && (window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  oe && (oe.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Ff(r, (o) => ib(o.clientX, o.clientY));
  }), be && (be.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Ff(r, (o) => ab(o.clientX));
  }), W.addEventListener("click", (r) => {
    var h;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", u = (h = P.confirmDialog) == null ? void 0 : h.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(s);
  });
  const Rf = () => {
    const r = !!d.fullscreen;
    $i(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? De.fullscreen_close : De.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ao = (r) => {
    const o = !!r;
    d.fullscreen !== o && (d.fullscreen = o, W.classList.toggle("pano-modal-fullscreen", o), o ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), Il(), Rf(), qs(), ve());
  }, Lf = () => document.fullscreenElement === X, ob = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        Ao(!d.fullscreen);
        return;
      }
      Lf() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = X.requestFullscreen) == null ? void 0 : r.call(X));
    } catch {
      Ao(!d.fullscreen);
    }
  }, zf = () => {
    document.fullscreenEnabled && Ao(Lf());
  };
  document.addEventListener("fullscreenchange", zf), Rf();
  const $f = () => {
    const r = !!d.outputPreviewExpanded;
    P.outputPreviewToggle.icon = r ? De.fullscreen_close : De.fullscreen, P.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  $f();
  const El = e.onExecuted, Dl = e.onConnectionsChange;
  let Ol = null, Fl = null, Rl = null;
  !i && t === "stickers" && (Rl = (r = "sync") => {
    Hc(r);
  }, e.__panoExternalStickerSync = Rl, Ol = function(...o) {
    var s;
    typeof El == "function" && El.apply(this, o), wN(Oe, Go), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = Ol, Fl = function(...o) {
    var s;
    typeof Dl == "function" && Dl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = Fl), i || Nh.set(String(e.id ?? "0"), () => qc());
  let Fi = null;
  const Ri = async () => Fi || (Fi = (async () => {
    var r, o, s, u, h, p, y, g, w, N, T;
    return Nh.delete(String(e.id ?? "0")), H0(), i || mn(), document.fullscreenElement === X && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", zf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === xf && (e.__panoFlushStateBeforeQueue = null), (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (h = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || h.call(u, !0, !0), (g = (y = (p = zn) == null ? void 0 : p.canvas) == null ? void 0 : y.setDirty) == null || g.call(y, !0, !0), Yr(), S0(), B instanceof HTMLVideoElement && B.pause(), Hn.forEach((C) => {
      try {
        C();
      } catch {
      }
    }), (w = de == null ? void 0 : de.dispose) == null || w.call(de), (N = Ce == null ? void 0 : Ce.unmount) == null || N.call(Ce), (T = Se == null ? void 0 : Se.dispose) == null || T.call(Se), Gr(!1), window.removeEventListener("keydown", Vf, !0), window.removeEventListener("keydown", jf, !0), window.removeEventListener("keydown", Co, !0), window.removeEventListener("keyup", Co, !0), window.removeEventListener("blur", Hf), window.removeEventListener("keydown", Uf, !0), window.removeEventListener("dragenter", Tf, !0), window.removeEventListener("dragover", If, !0), window.removeEventListener("dragleave", Ef, !0), window.removeEventListener("drop", Df, !0), !i && t === "stickers" && (e.onExecuted === Ol && (e.onExecuted = El), e.onConnectionsChange === Fl && (e.onConnectionsChange = Dl), e.__panoExternalStickerSync === Rl && (e.__panoExternalStickerSync = null)), H.unmount(), $.remove(), z0(), Fi = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), Fi = null, !1)), Fi), Vf = (r) => {
    var o, s, u, h, p;
    if (r.key === "Escape") {
      if (Sa()) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r);
        return;
      }
      if (d.fullscreen && document.fullscreenElement === X) {
        r.preventDefault(), r.stopPropagation(), (s = r.stopImmediatePropagation) == null || s.call(r), (u = document.exitFullscreen) == null || u.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), Ao(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (p = r.stopImmediatePropagation) == null || p.call(r), Ri();
    }
  }, jf = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), u = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || u === 46) && !(o === "Backspace" || s === "Backspace" || u === 8)) return;
    const y = r.target, g = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    g === "INPUT" || g === "TEXTAREA" || y != null && y.isContentEditable || !wt() || (bf(), r.preventDefault(), r.stopPropagation());
  }, Co = (r) => {
    const o = !!(r.ctrlKey || r.metaKey), s = !!r.altKey;
    d.marqueeModifier === o && d.altModifier === s || (d.marqueeModifier = o, d.altModifier = s, dr(), ft(d.pointerPos));
  }, Hf = () => {
    d.marqueeModifier = !1, d.altModifier = !1, dr(), ft(d.pointerPos);
  }, Uf = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const u = r.target, h = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: p, canRedo: y } = mf();
    r.shiftKey && !y || !r.shiftKey && !p || (wl(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", Vf, !0), window.addEventListener("keydown", jf, !0), window.addEventListener("keydown", Co, !0), window.addEventListener("keyup", Co, !0), window.addEventListener("blur", Hf), window.addEventListener("keydown", Uf, !0), X.addEventListener("pointerdown", (r) => {
    r.target === X && Ri();
  });
  function Gn(r, o, { rollbackState: s = !1 } = {}) {
    let u = "";
    try {
      s && (u = JSON.stringify(x)), o();
    } catch (h) {
      if (u)
        try {
          const p = JSON.parse(u);
          Object.keys(x).forEach((y) => delete x[y]), Object.assign(x, p), i || mn();
        } catch (p) {
          console.error(`[PanoramaStickers] editor boot step "${r}" rollback failed`, p);
        }
      P.stageWarningDetail = `boot:${r}`, console.error(`[PanoramaStickers] editor boot step "${r}" failed`, h);
    }
  }
  Gn("cutout-focus", lg), !i && t === "stickers" && Gn("external-sticker-sync", () => Hc("open"), { rollbackState: !0 }), P0().catch((r) => {
    P.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', r);
  }), Gn("history", tt), Gn("undo-redo", Tl), Gn("paint-ui", hn), Gn("side-panel", je), Gn("look-at-frame", cl), Gn("video-source", ki), Gn("canvas-size", df), Gn("cursor", () => ft(d.pointerPos)), ve(), ce.rafId = requestAnimationFrame(hf);
}
zn.registerExtension(uN({
  app: zn,
  openEditor: jN,
  attachStickers: rx,
  attachCutout: ix,
  attachPreview: nx,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: fN
}));
