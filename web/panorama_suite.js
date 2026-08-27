import * as Jo from "../../scripts/app.js";
import { app as zn } from "../../scripts/app.js";
import { api as wn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ru(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pt = {}, Xi = [], rr = () => {
}, vh = () => !1, Is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ds = (e) => e.startsWith("onUpdate:"), an = Object.assign, Fu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, J0 = Object.prototype.hasOwnProperty, ot = (e, t) => J0.call(e, t), Ke = Array.isArray, Ji = (e) => Za(e) === "[object Map]", _h = (e) => Za(e) === "[object Set]", zf = (e) => Za(e) === "[object Date]", We = (e) => typeof e == "function", Tt = (e) => typeof e == "string", ir = (e) => typeof e == "symbol", ct = (e) => e !== null && typeof e == "object", xh = (e) => (ct(e) || We(e)) && We(e.then) && We(e.catch), wh = Object.prototype.toString, Za = (e) => wh.call(e), Z0 = (e) => Za(e).slice(8, -1), Sh = (e) => Za(e) === "[object Object]", Lu = (e) => Tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Oa = /* @__PURE__ */ Ru(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Es = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Q0 = /-\w/g, fn = Es(
  (e) => e.replace(Q0, (t) => t.slice(1).toUpperCase())
), eb = /\B([A-Z])/g, pi = Es(
  (e) => e.replace(eb, "-$1").toLowerCase()
), Os = Es((e) => e.charAt(0).toUpperCase() + e.slice(1)), Rl = Es(
  (e) => e ? `on${Os(e)}` : ""
), Qn = (e, t) => !Object.is(e, t), Zo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Nh = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, zu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let $f;
const Rs = () => $f || ($f = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ot(e) {
  if (Ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = Tt(i) ? ib(i) : Ot(i);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (Tt(e) || ct(e))
    return e;
}
const tb = /;(?![^(]*\))/g, nb = /:([^]+)/, rb = /\/\*[^]*?\*\//g;
function ib(e) {
  const t = {};
  return e.replace(rb, "").split(tb).forEach((n) => {
    if (n) {
      const i = n.split(nb);
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
const ab = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ob = /* @__PURE__ */ Ru(ab);
function Mh(e) {
  return !!e || e === "";
}
function sb(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = $u(e[i], t[i]);
  return n;
}
function $u(e, t) {
  if (e === t) return !0;
  let n = zf(e), i = zf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = ir(e), i = ir(t), n || i)
    return e === t;
  if (n = Ke(e), i = Ke(t), n || i)
    return n && i ? sb(e, t) : !1;
  if (n = ct(e), i = ct(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(t).length;
    if (a !== l)
      return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c), p = t.hasOwnProperty(c);
      if (f && !p || !f && p || !$u(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const kh = (e) => !!(e && e.__v_isRef === !0), lt = (e) => Tt(e) ? e : e == null ? "" : Ke(e) || ct(e) && (e.toString === wh || !We(e.toString)) ? kh(e) ? lt(e.value) : JSON.stringify(e, Ph, 2) : String(e), Ph = (e, t) => kh(t) ? Ph(e, t.value) : Ji(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], l) => (n[Fl(i, l) + " =>"] = a, n),
    {}
  )
} : _h(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fl(n))
} : ir(t) ? Fl(t) : ct(t) && !Ke(t) && !Sh(t) ? String(t) : t, Fl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ir(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bn;
class lb {
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
function ub() {
  return bn;
}
let yt;
const Ll = /* @__PURE__ */ new WeakSet();
class Ah {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, bn && bn.active && bn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ll.has(this) && (Ll.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Th(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vf(this), Ih(this);
    const t = yt, n = $n;
    yt = this, $n = !0;
    try {
      return this.fn();
    } finally {
      Dh(this), yt = t, $n = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hu(t);
      this.deps = this.depsTail = void 0, Vf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ll.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    lu(this) && this.run();
  }
  get dirty() {
    return lu(this);
  }
}
let Ch = 0, Ra, Fa;
function Th(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Fa, Fa = e;
    return;
  }
  e.next = Ra, Ra = e;
}
function Vu() {
  Ch++;
}
function ju() {
  if (--Ch > 0)
    return;
  if (Fa) {
    let t = Fa;
    for (Fa = void 0; t; ) {
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
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ih(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Dh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Hu(i), cb(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function lu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Eh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Eh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ua) || (e.globalVersion = Ua, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !lu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = yt, i = $n;
  yt = e, $n = !0;
  try {
    Ih(e);
    const a = e.fn(e._value);
    (t.version === 0 || Qn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    yt = n, $n = i, Dh(e), e.flags &= -3;
  }
}
function Hu(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Hu(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function cb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $n = !0;
const Oh = [];
function Mr() {
  Oh.push($n), $n = !1;
}
function kr() {
  const e = Oh.pop();
  $n = e === void 0 ? !0 : e;
}
function Vf(e) {
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
let Ua = 0;
class fb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Uu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!yt || !$n || yt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== yt)
      n = this.activeLink = new fb(yt, this), yt.deps ? (n.prevDep = yt.depsTail, yt.depsTail.nextDep = n, yt.depsTail = n) : yt.deps = yt.depsTail = n, Rh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = yt.depsTail, n.nextDep = void 0, yt.depsTail.nextDep = n, yt.depsTail = n, yt.deps === n && (yt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ua++, this.notify(t);
  }
  notify(t) {
    Vu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ju();
    }
  }
}
function Rh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Rh(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const uu = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ Symbol(
  ""
), cu = /* @__PURE__ */ Symbol(
  ""
), Ga = /* @__PURE__ */ Symbol(
  ""
);
function tn(e, t, n) {
  if ($n && yt) {
    let i = uu.get(e);
    i || uu.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Uu()), a.map = i, a.key = n), a.track();
  }
}
function xr(e, t, n, i, a, l) {
  const c = uu.get(e);
  if (!c) {
    Ua++;
    return;
  }
  const f = (p) => {
    p && p.trigger();
  };
  if (Vu(), t === "clear")
    c.forEach(f);
  else {
    const p = Ke(e), b = p && Lu(n);
    if (p && n === "length") {
      const w = Number(i);
      c.forEach((v, S) => {
        (S === "length" || S === Ga || !ir(S) && S >= w) && f(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && f(c.get(n)), b && f(c.get(Ga)), t) {
        case "add":
          p ? b && f(c.get("length")) : (f(c.get(ii)), Ji(e) && f(c.get(cu)));
          break;
        case "delete":
          p || (f(c.get(ii)), Ji(e) && f(c.get(cu)));
          break;
        case "set":
          Ji(e) && f(c.get(ii));
          break;
      }
  }
  ju();
}
function Li(e) {
  const t = /* @__PURE__ */ at(e);
  return t === e ? t : (tn(t, "iterate", Ga), /* @__PURE__ */ Pn(e) ? t : t.map(Vn));
}
function Fs(e) {
  return tn(e = /* @__PURE__ */ at(e), "iterate", Ga), e;
}
function Xn(e, t) {
  return /* @__PURE__ */ Pr(e) ? oa(/* @__PURE__ */ ai(e) ? Vn(t) : t) : Vn(t);
}
const db = {
  __proto__: null,
  [Symbol.iterator]() {
    return zl(this, Symbol.iterator, (e) => Xn(this, e));
  },
  concat(...e) {
    return Li(this).concat(
      ...e.map((t) => Ke(t) ? Li(t) : t)
    );
  },
  entries() {
    return zl(this, "entries", (e) => (e[1] = Xn(this, e[1]), e));
  },
  every(e, t) {
    return dr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return dr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Xn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return dr(
      this,
      "find",
      e,
      t,
      (n) => Xn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return dr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return dr(
      this,
      "findLast",
      e,
      t,
      (n) => Xn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return dr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return dr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $l(this, "includes", e);
  },
  indexOf(...e) {
    return $l(this, "indexOf", e);
  },
  join(e) {
    return Li(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return $l(this, "lastIndexOf", e);
  },
  map(e, t) {
    return dr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wa(this, "pop");
  },
  push(...e) {
    return wa(this, "push", e);
  },
  reduce(e, ...t) {
    return jf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return jf(this, "reduceRight", e, t);
  },
  shift() {
    return wa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return dr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wa(this, "splice", e);
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
    return wa(this, "unshift", e);
  },
  values() {
    return zl(this, "values", (e) => Xn(this, e));
  }
};
function zl(e, t, n) {
  const i = Fs(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ Pn(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.done || (l.value = n(l.value)), l;
  }), a;
}
const hb = Array.prototype;
function dr(e, t, n, i, a, l) {
  const c = Fs(e), f = c !== e && !/* @__PURE__ */ Pn(e), p = c[t];
  if (p !== hb[t]) {
    const v = p.apply(e, l);
    return f ? Vn(v) : v;
  }
  let b = n;
  c !== e && (f ? b = function(v, S) {
    return n.call(this, Xn(e, v), S, e);
  } : n.length > 2 && (b = function(v, S) {
    return n.call(this, v, S, e);
  }));
  const w = p.call(c, b, i);
  return f && a ? a(w) : w;
}
function jf(e, t, n, i) {
  const a = Fs(e), l = a !== e && !/* @__PURE__ */ Pn(e);
  let c = n, f = !1;
  a !== e && (l ? (f = i.length === 0, c = function(b, w, v) {
    return f && (f = !1, b = Xn(e, b)), n.call(this, b, Xn(e, w), v, e);
  }) : n.length > 3 && (c = function(b, w, v) {
    return n.call(this, b, w, v, e);
  }));
  const p = a[t](c, ...i);
  return f ? Xn(e, p) : p;
}
function $l(e, t, n) {
  const i = /* @__PURE__ */ at(e);
  tn(i, "iterate", Ga);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Ku(n[0]) ? (n[0] = /* @__PURE__ */ at(n[0]), i[t](...n)) : a;
}
function wa(e, t, n = []) {
  Mr(), Vu();
  const i = (/* @__PURE__ */ at(e))[t].apply(e, n);
  return ju(), kr(), i;
}
const mb = /* @__PURE__ */ Ru("__proto__,__v_isRef,__isVue"), Fh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ir)
);
function pb(e) {
  ir(e) || (e = String(e));
  const t = /* @__PURE__ */ at(this);
  return tn(t, "has", e), t.hasOwnProperty(e);
}
class Lh {
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
      return i === (a ? l ? Mb : jh : l ? Vh : $h).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const c = Ke(t);
    if (!a) {
      let p;
      if (c && (p = db[n]))
        return p;
      if (n === "hasOwnProperty")
        return pb;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ rn(t) ? t : i
    );
    if ((ir(n) ? Fh.has(n) : mb(n)) || (a || tn(t, "get", n), l))
      return f;
    if (/* @__PURE__ */ rn(f)) {
      const p = c && Lu(n) ? f : f.value;
      return a && ct(p) ? /* @__PURE__ */ du(p) : p;
    }
    return ct(f) ? a ? /* @__PURE__ */ du(f) : /* @__PURE__ */ Qa(f) : f;
  }
}
class zh extends Lh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let l = t[n];
    const c = Ke(t) && Lu(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ Pr(l);
      if (!/* @__PURE__ */ Pn(i) && !/* @__PURE__ */ Pr(i) && (l = /* @__PURE__ */ at(l), i = /* @__PURE__ */ at(i)), !c && /* @__PURE__ */ rn(l) && !/* @__PURE__ */ rn(i))
        return b || (l.value = i), !0;
    }
    const f = c ? Number(n) < t.length : ot(t, n), p = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ rn(t) ? t : a
    );
    return t === /* @__PURE__ */ at(a) && (f ? Qn(i, l) && xr(t, "set", n, i) : xr(t, "add", n, i)), p;
  }
  deleteProperty(t, n) {
    const i = ot(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && xr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!ir(n) || !Fh.has(n)) && tn(t, "has", n), i;
  }
  ownKeys(t) {
    return tn(
      t,
      "iterate",
      Ke(t) ? "length" : ii
    ), Reflect.ownKeys(t);
  }
}
class gb extends Lh {
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
const bb = /* @__PURE__ */ new zh(), yb = /* @__PURE__ */ new gb(), vb = /* @__PURE__ */ new zh(!0);
const fu = (e) => e, Po = (e) => Reflect.getPrototypeOf(e);
function _b(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, l = /* @__PURE__ */ at(a), c = Ji(l), f = e === "entries" || e === Symbol.iterator && c, p = e === "keys" && c, b = a[e](...i), w = n ? fu : t ? oa : Vn;
    return !t && tn(
      l,
      "iterate",
      p ? cu : ii
    ), an(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: v, done: S } = b.next();
          return S ? { value: v, done: S } : {
            value: f ? [w(v[0]), w(v[1])] : w(v),
            done: S
          };
        }
      }
    );
  };
}
function Ao(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xb(e, t) {
  const n = {
    get(a) {
      const l = this.__v_raw, c = /* @__PURE__ */ at(l), f = /* @__PURE__ */ at(a);
      e || (Qn(a, f) && tn(c, "get", a), tn(c, "get", f));
      const { has: p } = Po(c), b = t ? fu : e ? oa : Vn;
      if (p.call(c, a))
        return b(l.get(a));
      if (p.call(c, f))
        return b(l.get(f));
      l !== c && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && tn(/* @__PURE__ */ at(a), "iterate", ii), a.size;
    },
    has(a) {
      const l = this.__v_raw, c = /* @__PURE__ */ at(l), f = /* @__PURE__ */ at(a);
      return e || (Qn(a, f) && tn(c, "has", a), tn(c, "has", f)), a === f ? l.has(a) : l.has(a) || l.has(f);
    },
    forEach(a, l) {
      const c = this, f = c.__v_raw, p = /* @__PURE__ */ at(f), b = t ? fu : e ? oa : Vn;
      return !e && tn(p, "iterate", ii), f.forEach((w, v) => a.call(l, b(w), b(v), c));
    }
  };
  return an(
    n,
    e ? {
      add: Ao("add"),
      set: Ao("set"),
      delete: Ao("delete"),
      clear: Ao("clear")
    } : {
      add(a) {
        const l = /* @__PURE__ */ at(this), c = Po(l), f = /* @__PURE__ */ at(a), p = !t && !/* @__PURE__ */ Pn(a) && !/* @__PURE__ */ Pr(a) ? f : a;
        return c.has.call(l, p) || Qn(a, p) && c.has.call(l, a) || Qn(f, p) && c.has.call(l, f) || (l.add(p), xr(l, "add", p, p)), this;
      },
      set(a, l) {
        !t && !/* @__PURE__ */ Pn(l) && !/* @__PURE__ */ Pr(l) && (l = /* @__PURE__ */ at(l));
        const c = /* @__PURE__ */ at(this), { has: f, get: p } = Po(c);
        let b = f.call(c, a);
        b || (a = /* @__PURE__ */ at(a), b = f.call(c, a));
        const w = p.call(c, a);
        return c.set(a, l), b ? Qn(l, w) && xr(c, "set", a, l) : xr(c, "add", a, l), this;
      },
      delete(a) {
        const l = /* @__PURE__ */ at(this), { has: c, get: f } = Po(l);
        let p = c.call(l, a);
        p || (a = /* @__PURE__ */ at(a), p = c.call(l, a)), f && f.call(l, a);
        const b = l.delete(a);
        return p && xr(l, "delete", a, void 0), b;
      },
      clear() {
        const a = /* @__PURE__ */ at(this), l = a.size !== 0, c = a.clear();
        return l && xr(
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
    n[a] = _b(a, e, t);
  }), n;
}
function Gu(e, t) {
  const n = xb(e, t);
  return (i, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    ot(n, a) && a in i ? n : i,
    a,
    l
  );
}
const wb = {
  get: /* @__PURE__ */ Gu(!1, !1)
}, Sb = {
  get: /* @__PURE__ */ Gu(!1, !0)
}, Nb = {
  get: /* @__PURE__ */ Gu(!0, !1)
};
const $h = /* @__PURE__ */ new WeakMap(), Vh = /* @__PURE__ */ new WeakMap(), jh = /* @__PURE__ */ new WeakMap(), Mb = /* @__PURE__ */ new WeakMap();
function kb(e) {
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
function Pb(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kb(Z0(e));
}
// @__NO_SIDE_EFFECTS__
function Qa(e) {
  return /* @__PURE__ */ Pr(e) ? e : Bu(
    e,
    !1,
    bb,
    wb,
    $h
  );
}
// @__NO_SIDE_EFFECTS__
function Ab(e) {
  return Bu(
    e,
    !1,
    vb,
    Sb,
    Vh
  );
}
// @__NO_SIDE_EFFECTS__
function du(e) {
  return Bu(
    e,
    !0,
    yb,
    Nb,
    jh
  );
}
function Bu(e, t, n, i, a) {
  if (!ct(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = Pb(e);
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
function Pn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ku(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ at(t) : e;
}
function Cb(e) {
  return !ot(e, "__v_skip") && Object.isExtensible(e) && Nh(e, "__v_skip", !0), e;
}
const Vn = (e) => ct(e) ? /* @__PURE__ */ Qa(e) : e, oa = (e) => ct(e) ? /* @__PURE__ */ du(e) : e;
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return Tb(e, !1);
}
function Tb(e, t) {
  return /* @__PURE__ */ rn(e) ? e : new Ib(e, t);
}
class Ib {
  constructor(t, n) {
    this.dep = new Uu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ at(t), this._value = n ? t : Vn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Pn(t) || /* @__PURE__ */ Pr(t);
    t = i ? t : /* @__PURE__ */ at(t), Qn(t, n) && (this._rawValue = t, this._value = i ? t : Vn(t), this.dep.trigger());
  }
}
function Ut(e) {
  return /* @__PURE__ */ rn(e) ? e.value : e;
}
const Db = {
  get: (e, t, n) => t === "__v_raw" ? e : Ut(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ rn(a) && !/* @__PURE__ */ rn(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Hh(e) {
  return /* @__PURE__ */ ai(e) ? e : new Proxy(e, Db);
}
class Eb {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Uu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ua - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    yt !== this)
      return Th(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Eh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ob(e, t, n = !1) {
  let i, a;
  return We(e) ? i = e : (i = e.get, a = e.set), new Eb(i, a, n);
}
const Co = {}, fs = /* @__PURE__ */ new WeakMap();
let ti;
function Rb(e, t = !1, n = ti) {
  if (n) {
    let i = fs.get(n);
    i || fs.set(n, i = []), i.push(e);
  }
}
function Fb(e, t, n = pt) {
  const { immediate: i, deep: a, once: l, scheduler: c, augmentJob: f, call: p } = n, b = (D) => a ? D : /* @__PURE__ */ Pn(D) || a === !1 || a === 0 ? wr(D, 1) : wr(D);
  let w, v, S, I, _ = !1, L = !1;
  if (/* @__PURE__ */ rn(e) ? (v = () => e.value, _ = /* @__PURE__ */ Pn(e)) : /* @__PURE__ */ ai(e) ? (v = () => b(e), _ = !0) : Ke(e) ? (L = !0, _ = e.some((D) => /* @__PURE__ */ ai(D) || /* @__PURE__ */ Pn(D)), v = () => e.map((D) => {
    if (/* @__PURE__ */ rn(D))
      return D.value;
    if (/* @__PURE__ */ ai(D))
      return b(D);
    if (We(D))
      return p ? p(D, 2) : D();
  })) : We(e) ? t ? v = p ? () => p(e, 2) : e : v = () => {
    if (S) {
      Mr();
      try {
        S();
      } finally {
        kr();
      }
    }
    const D = ti;
    ti = w;
    try {
      return p ? p(e, 3, [I]) : e(I);
    } finally {
      ti = D;
    }
  } : v = rr, t && a) {
    const D = v, E = a === !0 ? 1 / 0 : a;
    v = () => wr(D(), E);
  }
  const O = ub(), U = () => {
    w.stop(), O && O.active && Fu(O.effects, w);
  };
  if (l && t) {
    const D = t;
    t = (...E) => {
      D(...E), U();
    };
  }
  let k = L ? new Array(e.length).fill(Co) : Co;
  const $ = (D) => {
    if (!(!(w.flags & 1) || !w.dirty && !D))
      if (t) {
        const E = w.run();
        if (a || _ || (L ? E.some((j, ee) => Qn(j, k[ee])) : Qn(E, k))) {
          S && S();
          const j = ti;
          ti = w;
          try {
            const ee = [
              E,
              // pass undefined as the old value when it's changed for the first time
              k === Co ? void 0 : L && k[0] === Co ? [] : k,
              I
            ];
            k = E, p ? p(t, 3, ee) : (
              // @ts-expect-error
              t(...ee)
            );
          } finally {
            ti = j;
          }
        }
      } else
        w.run();
  };
  return f && f($), w = new Ah(v), w.scheduler = c ? () => c($, !1) : $, I = (D) => Rb(D, !1, w), S = w.onStop = () => {
    const D = fs.get(w);
    if (D) {
      if (p)
        p(D, 4);
      else
        for (const E of D) E();
      fs.delete(w);
    }
  }, t ? i ? $(!0) : k = w.run() : c ? c($.bind(null, !0), !0) : w.run(), U.pause = w.pause.bind(w), U.resume = w.resume.bind(w), U.stop = U, U;
}
function wr(e, t = 1 / 0, n) {
  if (t <= 0 || !ct(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ rn(e))
    wr(e.value, t, n);
  else if (Ke(e))
    for (let i = 0; i < e.length; i++)
      wr(e[i], t, n);
  else if (_h(e) || Ji(e))
    e.forEach((i) => {
      wr(i, t, n);
    });
  else if (Sh(e)) {
    for (const i in e)
      wr(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && wr(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function eo(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Ls(a, t, n);
  }
}
function ar(e, t, n, i) {
  if (We(e)) {
    const a = eo(e, t, n, i);
    return a && xh(a) && a.catch((l) => {
      Ls(l, t, n);
    }), a;
  }
  if (Ke(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(ar(e[l], t, n, i));
    return a;
  }
}
function Ls(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: c } = t && t.appContext.config || pt;
  if (t) {
    let f = t.parent;
    const p = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const w = f.ec;
      if (w) {
        for (let v = 0; v < w.length; v++)
          if (w[v](e, p, b) === !1)
            return;
      }
      f = f.parent;
    }
    if (l) {
      Mr(), eo(l, null, 10, [
        e,
        p,
        b
      ]), kr();
      return;
    }
  }
  Lb(e, n, a, i, c);
}
function Lb(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const cn = [];
let qn = -1;
const Zi = [];
let Rr = null, Ui = 0;
const Uh = /* @__PURE__ */ Promise.resolve();
let ds = null;
function Wu(e) {
  const t = ds || Uh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zb(e) {
  let t = qn + 1, n = cn.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = cn[i], l = Ba(a);
    l < e || l === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Yu(e) {
  if (!(e.flags & 1)) {
    const t = Ba(e), n = cn[cn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ba(n) ? cn.push(e) : cn.splice(zb(t), 0, e), e.flags |= 1, Gh();
  }
}
function Gh() {
  ds || (ds = Uh.then(Kh));
}
function $b(e) {
  Ke(e) ? Zi.push(...e) : Rr && e.id === -1 ? Rr.splice(Ui + 1, 0, e) : e.flags & 1 || (Zi.push(e), e.flags |= 1), Gh();
}
function Hf(e, t, n = qn + 1) {
  for (; n < cn.length; n++) {
    const i = cn[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      cn.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Bh(e) {
  if (Zi.length) {
    const t = [...new Set(Zi)].sort(
      (n, i) => Ba(n) - Ba(i)
    );
    if (Zi.length = 0, Rr) {
      Rr.push(...t);
      return;
    }
    for (Rr = t, Ui = 0; Ui < Rr.length; Ui++) {
      const n = Rr[Ui];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Rr = null, Ui = 0;
  }
}
const Ba = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Kh(e) {
  try {
    for (qn = 0; qn < cn.length; qn++) {
      const t = cn[qn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), eo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; qn < cn.length; qn++) {
      const t = cn[qn];
      t && (t.flags &= -2);
    }
    qn = -1, cn.length = 0, Bh(), ds = null, (cn.length || Zi.length) && Kh();
  }
}
let Sn = null, Wh = null;
function hs(e) {
  const t = Sn;
  return Sn = e, Wh = e && e.type.__scopeId || null, t;
}
function Yh(e, t = Sn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && ed(-1);
    const l = hs(t);
    let c;
    try {
      c = e(...a);
    } finally {
      hs(l), i._d && ed(1);
    }
    return c;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function oi(e, t) {
  if (Sn === null)
    return e;
  const n = Hs(Sn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [l, c, f, p = pt] = t[a];
    l && (We(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && wr(c), i.push({
      dir: l,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: f,
      modifiers: p
    }));
  }
  return e;
}
function Xr(e, t, n, i) {
  const a = e.dirs, l = t && t.dirs;
  for (let c = 0; c < a.length; c++) {
    const f = a[c];
    l && (f.oldValue = l[c].value);
    let p = f.dir[i];
    p && (Mr(), ar(p, n, 8, [
      e.el,
      f,
      e,
      t
    ]), kr());
  }
}
function Vb(e, t) {
  if (nn) {
    let n = nn.provides;
    const i = nn.parent && nn.parent.provides;
    i === n && (n = nn.provides = Object.create(i)), n[e] = t;
  }
}
function Qo(e, t, n = !1) {
  const i = $y();
  if (i || Qi) {
    let a = Qi ? Qi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && We(t) ? t.call(i && i.proxy) : t;
  }
}
const jb = /* @__PURE__ */ Symbol.for("v-scx"), Hb = () => Qo(jb);
function si(e, t, n) {
  return qh(e, t, n);
}
function qh(e, t, n = pt) {
  const { immediate: i, deep: a, flush: l, once: c } = n, f = an({}, n), p = t && i || !t && l !== "post";
  let b;
  if (Wa) {
    if (l === "sync") {
      const I = Hb();
      b = I.__watcherHandles || (I.__watcherHandles = []);
    } else if (!p) {
      const I = () => {
      };
      return I.stop = rr, I.resume = rr, I.pause = rr, I;
    }
  }
  const w = nn;
  f.call = (I, _, L) => ar(I, w, _, L);
  let v = !1;
  l === "post" ? f.scheduler = (I) => {
    gn(I, w && w.suspense);
  } : l !== "sync" && (v = !0, f.scheduler = (I, _) => {
    _ ? I() : Yu(I);
  }), f.augmentJob = (I) => {
    t && (I.flags |= 4), v && (I.flags |= 2, w && (I.id = w.uid, I.i = w));
  };
  const S = Fb(e, t, f);
  return Wa && (b ? b.push(S) : p && S()), S;
}
function Ub(e, t, n) {
  const i = this.proxy, a = Tt(e) ? e.includes(".") ? Xh(i, e) : () => i[e] : e.bind(i, i);
  let l;
  We(t) ? l = t : (l = t.handler, n = t);
  const c = to(this), f = qh(a, l.bind(i), n);
  return c(), f;
}
function Xh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Gb = /* @__PURE__ */ Symbol("_vte"), Bb = (e) => e.__isTeleport, Kb = /* @__PURE__ */ Symbol("_leaveCb");
function qu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, qu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Jh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Uf(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ms = /* @__PURE__ */ new WeakMap();
function La(e, t, n, i, a = !1) {
  if (Ke(e)) {
    e.forEach(
      (L, O) => La(
        L,
        t && (Ke(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (za(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && La(e, t, n, i.component.subTree);
    return;
  }
  const l = i.shapeFlag & 4 ? Hs(i.component) : i.el, c = a ? null : l, { i: f, r: p } = e, b = t && t.r, w = f.refs === pt ? f.refs = {} : f.refs, v = f.setupState, S = /* @__PURE__ */ at(v), I = v === pt ? vh : (L) => Uf(w, L) ? !1 : ot(S, L), _ = (L, O) => !(O && Uf(w, O));
  if (b != null && b !== p) {
    if (Gf(t), Tt(b))
      w[b] = null, I(b) && (v[b] = null);
    else if (/* @__PURE__ */ rn(b)) {
      const L = t;
      _(b, L.k) && (b.value = null), L.k && (w[L.k] = null);
    }
  }
  if (We(p))
    eo(p, f, 12, [c, w]);
  else {
    const L = Tt(p), O = /* @__PURE__ */ rn(p);
    if (L || O) {
      const U = () => {
        if (e.f) {
          const k = L ? I(p) ? v[p] : w[p] : _() || !e.k ? p.value : w[e.k];
          if (a)
            Ke(k) && Fu(k, l);
          else if (Ke(k))
            k.includes(l) || k.push(l);
          else if (L)
            w[p] = [l], I(p) && (v[p] = w[p]);
          else {
            const $ = [l];
            _(p, e.k) && (p.value = $), e.k && (w[e.k] = $);
          }
        } else L ? (w[p] = c, I(p) && (v[p] = c)) : O && (_(p, e.k) && (p.value = c), e.k && (w[e.k] = c));
      };
      if (c) {
        const k = () => {
          U(), ms.delete(e);
        };
        k.id = -1, ms.set(e, k), gn(k, n);
      } else
        Gf(e), U();
    }
  }
}
function Gf(e) {
  const t = ms.get(e);
  t && (t.flags |= 8, ms.delete(e));
}
Rs().requestIdleCallback;
Rs().cancelIdleCallback;
const za = (e) => !!e.type.__asyncLoader, Zh = (e) => e.type.__isKeepAlive;
function Wb(e, t) {
  Qh(e, "a", t);
}
function Yb(e, t) {
  Qh(e, "da", t);
}
function Qh(e, t, n = nn) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (zs(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Zh(a.parent.vnode) && qb(i, t, n, a), a = a.parent;
  }
}
function qb(e, t, n, i) {
  const a = zs(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  em(() => {
    Fu(i[t], a);
  }, n);
}
function zs(e, t, n = nn, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...c) => {
      Mr();
      const f = to(n), p = ar(t, n, e, c);
      return f(), kr(), p;
    });
    return i ? a.unshift(l) : a.push(l), l;
  }
}
const Ar = (e) => (t, n = nn) => {
  (!Wa || e === "sp") && zs(e, (...i) => t(...i), n);
}, Xb = Ar("bm"), Xu = Ar("m"), Jb = Ar(
  "bu"
), Zb = Ar("u"), $s = Ar(
  "bum"
), em = Ar("um"), Qb = Ar(
  "sp"
), ey = Ar("rtg"), ty = Ar("rtc");
function ny(e, t = nn) {
  zs("ec", e, t);
}
const ry = "components", tm = /* @__PURE__ */ Symbol.for("v-ndc");
function iy(e) {
  return Tt(e) ? ay(ry, e, !1) || e : e || tm;
}
function ay(e, t, n = !0, i = !1) {
  const a = Sn || nn;
  if (a) {
    const l = a.type;
    {
      const f = Gy(
        l,
        !1
      );
      if (f && (f === t || f === fn(t) || f === Os(fn(t))))
        return l;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bf(a[e] || l[e], t) || // global registration
      Bf(a.appContext[e], t)
    );
    return !c && i ? l : c;
  }
}
function Bf(e, t) {
  return e && (e[t] || e[fn(t)] || e[Os(fn(t))]);
}
function Rt(e, t, n, i) {
  let a;
  const l = n, c = Ke(e);
  if (c || Tt(e)) {
    const f = c && /* @__PURE__ */ ai(e);
    let p = !1, b = !1;
    f && (p = !/* @__PURE__ */ Pn(e), b = /* @__PURE__ */ Pr(e), e = Fs(e)), a = new Array(e.length);
    for (let w = 0, v = e.length; w < v; w++)
      a[w] = t(
        p ? b ? oa(Vn(e[w])) : Vn(e[w]) : e[w],
        w,
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
        (f, p) => t(f, p, void 0, l)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let p = 0, b = f.length; p < b; p++) {
        const w = f[p];
        a[p] = t(e[w], w, p, l);
      }
    }
  else
    a = [];
  return a;
}
const hu = (e) => e ? wm(e) ? Hs(e) : hu(e.parent) : null, $a = (
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
    $parent: (e) => hu(e.parent),
    $root: (e) => hu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => rm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Wu.bind(e.proxy)),
    $watch: (e) => Ub.bind(e)
  })
), Vl = (e, t) => e !== pt && !e.__isScriptSetup && ot(e, t), oy = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: l, accessCache: c, type: f, appContext: p } = e;
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
        if (Vl(i, t))
          return c[t] = 1, i[t];
        if (a !== pt && ot(a, t))
          return c[t] = 2, a[t];
        if (ot(l, t))
          return c[t] = 3, l[t];
        if (n !== pt && ot(n, t))
          return c[t] = 4, n[t];
        mu && (c[t] = 0);
      }
    }
    const b = $a[t];
    let w, v;
    if (b)
      return t === "$attrs" && tn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (w = f.__cssModules) && (w = w[t])
    )
      return w;
    if (n !== pt && ot(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = p.config.globalProperties, ot(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: l } = e;
    return Vl(a, t) ? (a[t] = n, !0) : i !== pt && ot(i, t) ? (i[t] = n, !0) : ot(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: l, type: c }
  }, f) {
    let p;
    return !!(n[f] || e !== pt && f[0] !== "$" && ot(e, f) || Vl(t, f) || ot(l, f) || ot(i, f) || ot($a, f) || ot(a.config.globalProperties, f) || (p = c.__cssModules) && p[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ot(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Kf(e) {
  return Ke(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let mu = !0;
function sy(e) {
  const t = rm(e), n = e.proxy, i = e.ctx;
  mu = !1, t.beforeCreate && Wf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: c,
    watch: f,
    provide: p,
    inject: b,
    // lifecycle
    created: w,
    beforeMount: v,
    mounted: S,
    beforeUpdate: I,
    updated: _,
    activated: L,
    deactivated: O,
    beforeDestroy: U,
    beforeUnmount: k,
    destroyed: $,
    unmounted: D,
    render: E,
    renderTracked: j,
    renderTriggered: ee,
    errorCaptured: Z,
    serverPrefetch: W,
    // public API
    expose: A,
    inheritAttrs: Y,
    // assets
    components: ue,
    directives: fe,
    filters: me
  } = t;
  if (b && ly(b, i, null), c)
    for (const P in c) {
      const de = c[P];
      We(de) && (i[P] = de.bind(n));
    }
  if (a) {
    const P = a.call(n, n);
    ct(P) && (e.data = /* @__PURE__ */ Qa(P));
  }
  if (mu = !0, l)
    for (const P in l) {
      const de = l[P], Se = We(de) ? de.bind(n, n) : We(de.get) ? de.get.bind(n, n) : rr, ke = !We(de) && We(de.set) ? de.set.bind(n) : rr, B = mt({
        get: Se,
        set: ke
      });
      Object.defineProperty(i, P, {
        enumerable: !0,
        configurable: !0,
        get: () => B.value,
        set: (Fe) => B.value = Fe
      });
    }
  if (f)
    for (const P in f)
      nm(f[P], i, n, P);
  if (p) {
    const P = We(p) ? p.call(n) : p;
    Reflect.ownKeys(P).forEach((de) => {
      Vb(de, P[de]);
    });
  }
  w && Wf(w, e, "c");
  function ce(P, de) {
    Ke(de) ? de.forEach((Se) => P(Se.bind(n))) : de && P(de.bind(n));
  }
  if (ce(Xb, v), ce(Xu, S), ce(Jb, I), ce(Zb, _), ce(Wb, L), ce(Yb, O), ce(ny, Z), ce(ty, j), ce(ey, ee), ce($s, k), ce(em, D), ce(Qb, W), Ke(A))
    if (A.length) {
      const P = e.exposed || (e.exposed = {});
      A.forEach((de) => {
        Object.defineProperty(P, de, {
          get: () => n[de],
          set: (Se) => n[de] = Se,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === rr && (e.render = E), Y != null && (e.inheritAttrs = Y), ue && (e.components = ue), fe && (e.directives = fe), W && Jh(e);
}
function ly(e, t, n = rr) {
  Ke(e) && (e = pu(e));
  for (const i in e) {
    const a = e[i];
    let l;
    ct(a) ? "default" in a ? l = Qo(
      a.from || i,
      a.default,
      !0
    ) : l = Qo(a.from || i) : l = Qo(a), /* @__PURE__ */ rn(l) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (c) => l.value = c
    }) : t[i] = l;
  }
}
function Wf(e, t, n) {
  ar(
    Ke(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function nm(e, t, n, i) {
  let a = i.includes(".") ? Xh(n, i) : () => n[i];
  if (Tt(e)) {
    const l = t[e];
    We(l) && si(a, l);
  } else if (We(e))
    si(a, e.bind(n));
  else if (ct(e))
    if (Ke(e))
      e.forEach((l) => nm(l, t, n, i));
    else {
      const l = We(e.handler) ? e.handler.bind(n) : t[e.handler];
      We(l) && si(a, l, e);
    }
}
function rm(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: c }
  } = e.appContext, f = l.get(t);
  let p;
  return f ? p = f : !a.length && !n && !i ? p = t : (p = {}, a.length && a.forEach(
    (b) => ps(p, b, c, !0)
  ), ps(p, t, c)), ct(t) && l.set(t, p), p;
}
function ps(e, t, n, i = !1) {
  const { mixins: a, extends: l } = t;
  l && ps(e, l, n, !0), a && a.forEach(
    (c) => ps(e, c, n, !0)
  );
  for (const c in t)
    if (!(i && c === "expose")) {
      const f = uy[c] || n && n[c];
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const uy = {
  data: Yf,
  props: qf,
  emits: qf,
  // objects
  methods: Ta,
  computed: Ta,
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
  components: Ta,
  directives: Ta,
  // watch
  watch: fy,
  // provide / inject
  provide: Yf,
  inject: cy
};
function Yf(e, t) {
  return t ? e ? function() {
    return an(
      We(e) ? e.call(this, this) : e,
      We(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cy(e, t) {
  return Ta(pu(e), pu(t));
}
function pu(e) {
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
function Ta(e, t) {
  return e ? an(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qf(e, t) {
  return e ? Ke(e) && Ke(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : an(
    /* @__PURE__ */ Object.create(null),
    Kf(e),
    Kf(t ?? {})
  ) : t;
}
function fy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = an(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = un(e[i], t[i]);
  return n;
}
function im() {
  return {
    app: null,
    config: {
      isNativeTag: vh,
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
let dy = 0;
function hy(e, t) {
  return function(i, a = null) {
    We(i) || (i = an({}, i)), a != null && !ct(a) && (a = null);
    const l = im(), c = /* @__PURE__ */ new WeakSet(), f = [];
    let p = !1;
    const b = l.app = {
      _uid: dy++,
      _component: i,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: Ky,
      get config() {
        return l.config;
      },
      set config(w) {
      },
      use(w, ...v) {
        return c.has(w) || (w && We(w.install) ? (c.add(w), w.install(b, ...v)) : We(w) && (c.add(w), w(b, ...v))), b;
      },
      mixin(w) {
        return l.mixins.includes(w) || l.mixins.push(w), b;
      },
      component(w, v) {
        return v ? (l.components[w] = v, b) : l.components[w];
      },
      directive(w, v) {
        return v ? (l.directives[w] = v, b) : l.directives[w];
      },
      mount(w, v, S) {
        if (!p) {
          const I = b._ceVNode || je(i, a);
          return I.appContext = l, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(I, w, S), p = !0, b._container = w, w.__vue_app__ = b, Hs(I.component);
        }
      },
      onUnmount(w) {
        f.push(w);
      },
      unmount() {
        p && (ar(
          f,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(w, v) {
        return l.provides[w] = v, b;
      },
      runWithContext(w) {
        const v = Qi;
        Qi = b;
        try {
          return w();
        } finally {
          Qi = v;
        }
      }
    };
    return b;
  };
}
let Qi = null;
const my = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${fn(t)}Modifiers`] || e[`${pi(t)}Modifiers`];
function py(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || pt;
  let a = n;
  const l = t.startsWith("update:"), c = l && my(i, t.slice(7));
  c && (c.trim && (a = n.map((w) => Tt(w) ? w.trim() : w)), c.number && (a = n.map(zu)));
  let f, p = i[f = Rl(t)] || // also try camelCase event handler (#2249)
  i[f = Rl(fn(t))];
  !p && l && (p = i[f = Rl(pi(t))]), p && ar(
    p,
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
    e.emitted[f] = !0, ar(
      b,
      e,
      6,
      a
    );
  }
}
const gy = /* @__PURE__ */ new WeakMap();
function am(e, t, n = !1) {
  const i = n ? gy : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let c = {}, f = !1;
  if (!We(e)) {
    const p = (b) => {
      const w = am(b, t, !0);
      w && (f = !0, an(c, w));
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !l && !f ? (ct(e) && i.set(e, null), null) : (Ke(l) ? l.forEach((p) => c[p] = null) : an(c, l), ct(e) && i.set(e, c), c);
}
function Vs(e, t) {
  return !e || !Is(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ot(e, t[0].toLowerCase() + t.slice(1)) || ot(e, pi(t)) || ot(e, t));
}
function Xf(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [l],
    slots: c,
    attrs: f,
    emit: p,
    render: b,
    renderCache: w,
    props: v,
    data: S,
    setupState: I,
    ctx: _,
    inheritAttrs: L
  } = e, O = hs(e);
  let U, k;
  try {
    if (n.shapeFlag & 4) {
      const D = a || i, E = D;
      U = Jn(
        b.call(
          E,
          D,
          w,
          v,
          I,
          S,
          _
        )
      ), k = f;
    } else {
      const D = t;
      U = Jn(
        D.length > 1 ? D(
          v,
          { attrs: f, slots: c, emit: p }
        ) : D(
          v,
          null
        )
      ), k = t.props ? f : by(f);
    }
  } catch (D) {
    Va.length = 0, Ls(D, e, 1), U = je($r);
  }
  let $ = U;
  if (k && L !== !1) {
    const D = Object.keys(k), { shapeFlag: E } = $;
    D.length && E & 7 && (l && D.some(Ds) && (k = yy(
      k,
      l
    )), $ = sa($, k, !1, !0));
  }
  return n.dirs && ($ = sa($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && qu($, n.transition), U = $, hs(O), U;
}
const by = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Is(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, yy = (e, t) => {
  const n = {};
  for (const i in e)
    (!Ds(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function vy(e, t, n) {
  const { props: i, children: a, component: l } = e, { props: c, children: f, patchFlag: p } = t, b = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return i ? Jf(i, c, b) : !!c;
    if (p & 8) {
      const w = t.dynamicProps;
      for (let v = 0; v < w.length; v++) {
        const S = w[v];
        if (om(c, i, S) && !Vs(b, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : i === c ? !1 : i ? c ? Jf(i, c, b) : !0 : !!c;
  return !1;
}
function Jf(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const l = i[a];
    if (om(t, e, l) && !Vs(n, l))
      return !0;
  }
  return !1;
}
function om(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && ct(i) && ct(a) ? !$u(i, a) : i !== a;
}
function _y({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const sm = {}, lm = () => Object.create(sm), um = (e) => Object.getPrototypeOf(e) === sm;
function xy(e, t, n, i = !1) {
  const a = {}, l = lm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), cm(e, t, a, l);
  for (const c in e.propsOptions[0])
    c in a || (a[c] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Ab(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function wy(e, t, n, i) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: c }
  } = e, f = /* @__PURE__ */ at(a), [p] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const w = e.vnode.dynamicProps;
      for (let v = 0; v < w.length; v++) {
        let S = w[v];
        if (Vs(e.emitsOptions, S))
          continue;
        const I = t[S];
        if (p)
          if (ot(l, S))
            I !== l[S] && (l[S] = I, b = !0);
          else {
            const _ = fn(S);
            a[_] = gu(
              p,
              f,
              _,
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
    cm(e, t, a, l) && (b = !0);
    let w;
    for (const v in f)
      (!t || // for camelCase
      !ot(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((w = pi(v)) === v || !ot(t, w))) && (p ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[w] !== void 0) && (a[v] = gu(
        p,
        f,
        v,
        void 0,
        e,
        !0
      )) : delete a[v]);
    if (l !== f)
      for (const v in l)
        (!t || !ot(t, v)) && (delete l[v], b = !0);
  }
  b && xr(e.attrs, "set", "");
}
function cm(e, t, n, i) {
  const [a, l] = e.propsOptions;
  let c = !1, f;
  if (t)
    for (let p in t) {
      if (Oa(p))
        continue;
      const b = t[p];
      let w;
      a && ot(a, w = fn(p)) ? !l || !l.includes(w) ? n[w] = b : (f || (f = {}))[w] = b : Vs(e.emitsOptions, p) || (!(p in i) || b !== i[p]) && (i[p] = b, c = !0);
    }
  if (l) {
    const p = /* @__PURE__ */ at(n), b = f || pt;
    for (let w = 0; w < l.length; w++) {
      const v = l[w];
      n[v] = gu(
        a,
        p,
        v,
        b[v],
        e,
        !ot(b, v)
      );
    }
  }
  return c;
}
function gu(e, t, n, i, a, l) {
  const c = e[n];
  if (c != null) {
    const f = ot(c, "default");
    if (f && i === void 0) {
      const p = c.default;
      if (c.type !== Function && !c.skipFactory && We(p)) {
        const { propsDefaults: b } = a;
        if (n in b)
          i = b[n];
        else {
          const w = to(a);
          i = b[n] = p.call(
            null,
            t
          ), w();
        }
      } else
        i = p;
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
const Sy = /* @__PURE__ */ new WeakMap();
function fm(e, t, n = !1) {
  const i = n ? Sy : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const l = e.props, c = {}, f = [];
  let p = !1;
  if (!We(e)) {
    const w = (v) => {
      p = !0;
      const [S, I] = fm(v, t, !0);
      an(c, S), I && f.push(...I);
    };
    !n && t.mixins.length && t.mixins.forEach(w), e.extends && w(e.extends), e.mixins && e.mixins.forEach(w);
  }
  if (!l && !p)
    return ct(e) && i.set(e, Xi), Xi;
  if (Ke(l))
    for (let w = 0; w < l.length; w++) {
      const v = fn(l[w]);
      Zf(v) && (c[v] = pt);
    }
  else if (l)
    for (const w in l) {
      const v = fn(w);
      if (Zf(v)) {
        const S = l[w], I = c[v] = Ke(S) || We(S) ? { type: S } : an({}, S), _ = I.type;
        let L = !1, O = !0;
        if (Ke(_))
          for (let U = 0; U < _.length; ++U) {
            const k = _[U], $ = We(k) && k.name;
            if ($ === "Boolean") {
              L = !0;
              break;
            } else $ === "String" && (O = !1);
          }
        else
          L = We(_) && _.name === "Boolean";
        I[
          0
          /* shouldCast */
        ] = L, I[
          1
          /* shouldCastTrue */
        ] = O, (L || ot(I, "default")) && f.push(v);
      }
    }
  const b = [c, f];
  return ct(e) && i.set(e, b), b;
}
function Zf(e) {
  return e[0] !== "$" && !Oa(e);
}
const Ju = (e) => e === "_" || e === "_ctx" || e === "$stable", Zu = (e) => Ke(e) ? e.map(Jn) : [Jn(e)], Ny = (e, t, n) => {
  if (t._n)
    return t;
  const i = Yh((...a) => Zu(t(...a)), n);
  return i._c = !1, i;
}, dm = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Ju(a)) continue;
    const l = e[a];
    if (We(l))
      t[a] = Ny(a, l, i);
    else if (l != null) {
      const c = Zu(l);
      t[a] = () => c;
    }
  }
}, hm = (e, t) => {
  const n = Zu(t);
  e.slots.default = () => n;
}, mm = (e, t, n) => {
  for (const i in t)
    (n || !Ju(i)) && (e[i] = t[i]);
}, My = (e, t, n) => {
  const i = e.slots = lm();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (mm(i, t, n), n && Nh(i, "_", a, !0)) : dm(t, i);
  } else t && hm(e, t);
}, ky = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let l = !0, c = pt;
  if (i.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? l = !1 : mm(a, t, n) : (l = !t.$stable, dm(t, a)), c = t;
  } else t && (hm(e, t), c = { default: 1 });
  if (l)
    for (const f in a)
      !Ju(f) && c[f] == null && delete a[f];
}, gn = Iy;
function Py(e) {
  return Ay(e);
}
function Ay(e, t) {
  const n = Rs();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: l,
    createElement: c,
    createText: f,
    createComment: p,
    setText: b,
    setElementText: w,
    parentNode: v,
    nextSibling: S,
    setScopeId: I = rr,
    insertStaticContent: _
  } = e, L = (F, H, ae, xe = null, be = null, M = null, G = void 0, q = null, re = !!H.dynamicChildren) => {
    if (F === H)
      return;
    F && !Sa(F, H) && (xe = Gt(F), Fe(F, be, M, !0), F = null), H.patchFlag === -2 && (re = !1, H.dynamicChildren = null);
    const { type: Q, ref: ge, shapeFlag: pe } = H;
    switch (Q) {
      case js:
        O(F, H, ae, xe);
        break;
      case $r:
        U(F, H, ae, xe);
        break;
      case Hl:
        F == null && k(H, ae, xe, G);
        break;
      case Ze:
        ue(
          F,
          H,
          ae,
          xe,
          be,
          M,
          G,
          q,
          re
        );
        break;
      default:
        pe & 1 ? E(
          F,
          H,
          ae,
          xe,
          be,
          M,
          G,
          q,
          re
        ) : pe & 6 ? fe(
          F,
          H,
          ae,
          xe,
          be,
          M,
          G,
          q,
          re
        ) : (pe & 64 || pe & 128) && Q.process(
          F,
          H,
          ae,
          xe,
          be,
          M,
          G,
          q,
          re,
          Pt
        );
    }
    ge != null && be ? La(ge, F && F.ref, M, H || F, !H) : ge == null && F && F.ref != null && La(F.ref, null, M, F, !0);
  }, O = (F, H, ae, xe) => {
    if (F == null)
      i(
        H.el = f(H.children),
        ae,
        xe
      );
    else {
      const be = H.el = F.el;
      H.children !== F.children && b(be, H.children);
    }
  }, U = (F, H, ae, xe) => {
    F == null ? i(
      H.el = p(H.children || ""),
      ae,
      xe
    ) : H.el = F.el;
  }, k = (F, H, ae, xe) => {
    [F.el, F.anchor] = _(
      F.children,
      H,
      ae,
      xe,
      F.el,
      F.anchor
    );
  }, $ = ({ el: F, anchor: H }, ae, xe) => {
    let be;
    for (; F && F !== H; )
      be = S(F), i(F, ae, xe), F = be;
    i(H, ae, xe);
  }, D = ({ el: F, anchor: H }) => {
    let ae;
    for (; F && F !== H; )
      ae = S(F), a(F), F = ae;
    a(H);
  }, E = (F, H, ae, xe, be, M, G, q, re) => {
    if (H.type === "svg" ? G = "svg" : H.type === "math" && (G = "mathml"), F == null)
      j(
        H,
        ae,
        xe,
        be,
        M,
        G,
        q,
        re
      );
    else {
      const Q = F.el && F.el._isVueCE ? F.el : null;
      try {
        Q && Q._beginPatch(), W(
          F,
          H,
          be,
          M,
          G,
          q,
          re
        );
      } finally {
        Q && Q._endPatch();
      }
    }
  }, j = (F, H, ae, xe, be, M, G, q) => {
    let re, Q;
    const { props: ge, shapeFlag: pe, transition: Ae, dirs: d } = F;
    if (re = F.el = c(
      F.type,
      M,
      ge && ge.is,
      ge
    ), pe & 8 ? w(re, F.children) : pe & 16 && Z(
      F.children,
      re,
      null,
      xe,
      be,
      jl(F, M),
      G,
      q
    ), d && Xr(F, null, xe, "created"), ee(re, F, F.scopeId, G, xe), ge) {
      for (const Oe in ge)
        Oe !== "value" && !Oa(Oe) && l(re, Oe, null, ge[Oe], M, xe);
      "value" in ge && l(re, "value", null, ge.value, M), (Q = ge.onVnodeBeforeMount) && Gn(Q, xe, F);
    }
    d && Xr(F, null, xe, "beforeMount");
    const Ce = Cy(be, Ae);
    Ce && Ae.beforeEnter(re), i(re, H, ae), ((Q = ge && ge.onVnodeMounted) || Ce || d) && gn(() => {
      try {
        Q && Gn(Q, xe, F), Ce && Ae.enter(re), d && Xr(F, null, xe, "mounted");
      } finally {
      }
    }, be);
  }, ee = (F, H, ae, xe, be) => {
    if (ae && I(F, ae), xe)
      for (let M = 0; M < xe.length; M++)
        I(F, xe[M]);
    if (be) {
      let M = be.subTree;
      if (H === M || ym(M.type) && (M.ssContent === H || M.ssFallback === H)) {
        const G = be.vnode;
        ee(
          F,
          G,
          G.scopeId,
          G.slotScopeIds,
          be.parent
        );
      }
    }
  }, Z = (F, H, ae, xe, be, M, G, q, re = 0) => {
    for (let Q = re; Q < F.length; Q++) {
      const ge = F[Q] = q ? vr(F[Q]) : Jn(F[Q]);
      L(
        null,
        ge,
        H,
        ae,
        xe,
        be,
        M,
        G,
        q
      );
    }
  }, W = (F, H, ae, xe, be, M, G) => {
    const q = H.el = F.el;
    let { patchFlag: re, dynamicChildren: Q, dirs: ge } = H;
    re |= F.patchFlag & 16;
    const pe = F.props || pt, Ae = H.props || pt;
    let d;
    if (ae && Jr(ae, !1), (d = Ae.onVnodeBeforeUpdate) && Gn(d, ae, H, F), ge && Xr(H, F, ae, "beforeUpdate"), ae && Jr(ae, !0), (pe.innerHTML && Ae.innerHTML == null || pe.textContent && Ae.textContent == null) && w(q, ""), Q ? A(
      F.dynamicChildren,
      Q,
      q,
      ae,
      xe,
      jl(H, be),
      M
    ) : G || de(
      F,
      H,
      q,
      null,
      ae,
      xe,
      jl(H, be),
      M,
      !1
    ), re > 0) {
      if (re & 16)
        Y(q, pe, Ae, ae, be);
      else if (re & 2 && pe.class !== Ae.class && l(q, "class", null, Ae.class, be), re & 4 && l(q, "style", pe.style, Ae.style, be), re & 8) {
        const Ce = H.dynamicProps;
        for (let Oe = 0; Oe < Ce.length; Oe++) {
          const Le = Ce[Oe], Be = pe[Le], bt = Ae[Le];
          (bt !== Be || Le === "value") && l(q, Le, Be, bt, be, ae);
        }
      }
      re & 1 && F.children !== H.children && w(q, H.children);
    } else !G && Q == null && Y(q, pe, Ae, ae, be);
    ((d = Ae.onVnodeUpdated) || ge) && gn(() => {
      d && Gn(d, ae, H, F), ge && Xr(H, F, ae, "updated");
    }, xe);
  }, A = (F, H, ae, xe, be, M, G) => {
    for (let q = 0; q < H.length; q++) {
      const re = F[q], Q = H[q], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (re.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Sa(re, Q) || // - In the case of a component, it could contain anything.
        re.shapeFlag & 198) ? v(re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      L(
        re,
        Q,
        ge,
        null,
        xe,
        be,
        M,
        G,
        !0
      );
    }
  }, Y = (F, H, ae, xe, be) => {
    if (H !== ae) {
      if (H !== pt)
        for (const M in H)
          !Oa(M) && !(M in ae) && l(
            F,
            M,
            H[M],
            null,
            be,
            xe
          );
      for (const M in ae) {
        if (Oa(M)) continue;
        const G = ae[M], q = H[M];
        G !== q && M !== "value" && l(F, M, q, G, be, xe);
      }
      "value" in ae && l(F, "value", H.value, ae.value, be);
    }
  }, ue = (F, H, ae, xe, be, M, G, q, re) => {
    const Q = H.el = F ? F.el : f(""), ge = H.anchor = F ? F.anchor : f("");
    let { patchFlag: pe, dynamicChildren: Ae, slotScopeIds: d } = H;
    d && (q = q ? q.concat(d) : d), F == null ? (i(Q, ae, xe), i(ge, ae, xe), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      ae,
      ge,
      be,
      M,
      G,
      q,
      re
    )) : pe > 0 && pe & 64 && Ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    F.dynamicChildren && F.dynamicChildren.length === Ae.length ? (A(
      F.dynamicChildren,
      Ae,
      ae,
      be,
      M,
      G,
      q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (H.key != null || be && H === be.subTree) && pm(
      F,
      H,
      !0
      /* shallow */
    )) : de(
      F,
      H,
      ae,
      ge,
      be,
      M,
      G,
      q,
      re
    );
  }, fe = (F, H, ae, xe, be, M, G, q, re) => {
    H.slotScopeIds = q, F == null ? H.shapeFlag & 512 ? be.ctx.activate(
      H,
      ae,
      xe,
      G,
      re
    ) : me(
      H,
      ae,
      xe,
      be,
      M,
      G,
      re
    ) : X(F, H, re);
  }, me = (F, H, ae, xe, be, M, G) => {
    const q = F.component = zy(
      F,
      xe,
      be
    );
    if (Zh(F) && (q.ctx.renderer = Pt), Vy(q, !1, G), q.asyncDep) {
      if (be && be.registerDep(q, ce, G), !F.el) {
        const re = q.subTree = je($r);
        U(null, re, H, ae), F.placeholder = re.el;
      }
    } else
      ce(
        q,
        F,
        H,
        ae,
        be,
        M,
        G
      );
  }, X = (F, H, ae) => {
    const xe = H.component = F.component;
    if (vy(F, H, ae))
      if (xe.asyncDep && !xe.asyncResolved) {
        P(xe, H, ae);
        return;
      } else
        xe.next = H, xe.update();
    else
      H.el = F.el, xe.vnode = H;
  }, ce = (F, H, ae, xe, be, M, G) => {
    const q = () => {
      if (F.isMounted) {
        let { next: pe, bu: Ae, u: d, parent: Ce, vnode: Oe } = F;
        {
          const le = gm(F);
          if (le) {
            pe && (pe.el = Oe.el, P(F, pe, G)), le.asyncDep.then(() => {
              gn(() => {
                F.isUnmounted || Q();
              }, be);
            });
            return;
          }
        }
        let Le = pe, Be;
        Jr(F, !1), pe ? (pe.el = Oe.el, P(F, pe, G)) : pe = Oe, Ae && Zo(Ae), (Be = pe.props && pe.props.onVnodeBeforeUpdate) && Gn(Be, Ce, pe, Oe), Jr(F, !0);
        const bt = Xf(F), Qe = F.subTree;
        F.subTree = bt, L(
          Qe,
          bt,
          // parent may have changed if it's in a teleport
          v(Qe.el),
          // anchor may have changed if it's in a fragment
          Gt(Qe),
          F,
          be,
          M
        ), pe.el = bt.el, Le === null && _y(F, bt.el), d && gn(d, be), (Be = pe.props && pe.props.onVnodeUpdated) && gn(
          () => Gn(Be, Ce, pe, Oe),
          be
        );
      } else {
        let pe;
        const { el: Ae, props: d } = H, { bm: Ce, m: Oe, parent: Le, root: Be, type: bt } = F, Qe = za(H);
        Jr(F, !1), Ce && Zo(Ce), !Qe && (pe = d && d.onVnodeBeforeMount) && Gn(pe, Le, H), Jr(F, !0);
        {
          Be.ce && Be.ce._hasShadowRoot() && Be.ce._injectChildStyle(
            bt,
            F.parent ? F.parent.type : void 0
          );
          const le = F.subTree = Xf(F);
          L(
            null,
            le,
            ae,
            xe,
            F,
            be,
            M
          ), H.el = le.el;
        }
        if (Oe && gn(Oe, be), !Qe && (pe = d && d.onVnodeMounted)) {
          const le = H;
          gn(
            () => Gn(pe, Le, le),
            be
          );
        }
        (H.shapeFlag & 256 || Le && za(Le.vnode) && Le.vnode.shapeFlag & 256) && F.a && gn(F.a, be), F.isMounted = !0, H = ae = xe = null;
      }
    };
    F.scope.on();
    const re = F.effect = new Ah(q);
    F.scope.off();
    const Q = F.update = re.run.bind(re), ge = F.job = re.runIfDirty.bind(re);
    ge.i = F, ge.id = F.uid, re.scheduler = () => Yu(ge), Jr(F, !0), Q();
  }, P = (F, H, ae) => {
    H.component = F;
    const xe = F.vnode.props;
    F.vnode = H, F.next = null, wy(F, H.props, xe, ae), ky(F, H.children, ae), Mr(), Hf(F), kr();
  }, de = (F, H, ae, xe, be, M, G, q, re = !1) => {
    const Q = F && F.children, ge = F ? F.shapeFlag : 0, pe = H.children, { patchFlag: Ae, shapeFlag: d } = H;
    if (Ae > 0) {
      if (Ae & 128) {
        ke(
          Q,
          pe,
          ae,
          xe,
          be,
          M,
          G,
          q,
          re
        );
        return;
      } else if (Ae & 256) {
        Se(
          Q,
          pe,
          ae,
          xe,
          be,
          M,
          G,
          q,
          re
        );
        return;
      }
    }
    d & 8 ? (ge & 16 && Ge(Q, be, M), pe !== Q && w(ae, pe)) : ge & 16 ? d & 16 ? ke(
      Q,
      pe,
      ae,
      xe,
      be,
      M,
      G,
      q,
      re
    ) : Ge(Q, be, M, !0) : (ge & 8 && w(ae, ""), d & 16 && Z(
      pe,
      ae,
      xe,
      be,
      M,
      G,
      q,
      re
    ));
  }, Se = (F, H, ae, xe, be, M, G, q, re) => {
    F = F || Xi, H = H || Xi;
    const Q = F.length, ge = H.length, pe = Math.min(Q, ge);
    let Ae;
    for (Ae = 0; Ae < pe; Ae++) {
      const d = H[Ae] = re ? vr(H[Ae]) : Jn(H[Ae]);
      L(
        F[Ae],
        d,
        ae,
        null,
        be,
        M,
        G,
        q,
        re
      );
    }
    Q > ge ? Ge(
      F,
      be,
      M,
      !0,
      !1,
      pe
    ) : Z(
      H,
      ae,
      xe,
      be,
      M,
      G,
      q,
      re,
      pe
    );
  }, ke = (F, H, ae, xe, be, M, G, q, re) => {
    let Q = 0;
    const ge = H.length;
    let pe = F.length - 1, Ae = ge - 1;
    for (; Q <= pe && Q <= Ae; ) {
      const d = F[Q], Ce = H[Q] = re ? vr(H[Q]) : Jn(H[Q]);
      if (Sa(d, Ce))
        L(
          d,
          Ce,
          ae,
          null,
          be,
          M,
          G,
          q,
          re
        );
      else
        break;
      Q++;
    }
    for (; Q <= pe && Q <= Ae; ) {
      const d = F[pe], Ce = H[Ae] = re ? vr(H[Ae]) : Jn(H[Ae]);
      if (Sa(d, Ce))
        L(
          d,
          Ce,
          ae,
          null,
          be,
          M,
          G,
          q,
          re
        );
      else
        break;
      pe--, Ae--;
    }
    if (Q > pe) {
      if (Q <= Ae) {
        const d = Ae + 1, Ce = d < ge ? H[d].el : xe;
        for (; Q <= Ae; )
          L(
            null,
            H[Q] = re ? vr(H[Q]) : Jn(H[Q]),
            ae,
            Ce,
            be,
            M,
            G,
            q,
            re
          ), Q++;
      }
    } else if (Q > Ae)
      for (; Q <= pe; )
        Fe(F[Q], be, M, !0), Q++;
    else {
      const d = Q, Ce = Q, Oe = /* @__PURE__ */ new Map();
      for (Q = Ce; Q <= Ae; Q++) {
        const He = H[Q] = re ? vr(H[Q]) : Jn(H[Q]);
        He.key != null && Oe.set(He.key, Q);
      }
      let Le, Be = 0;
      const bt = Ae - Ce + 1;
      let Qe = !1, le = 0;
      const sn = new Array(bt);
      for (Q = 0; Q < bt; Q++) sn[Q] = 0;
      for (Q = d; Q <= pe; Q++) {
        const He = F[Q];
        if (Be >= bt) {
          Fe(He, be, M, !0);
          continue;
        }
        let At;
        if (He.key != null)
          At = Oe.get(He.key);
        else
          for (Le = Ce; Le <= Ae; Le++)
            if (sn[Le - Ce] === 0 && Sa(He, H[Le])) {
              At = Le;
              break;
            }
        At === void 0 ? Fe(He, be, M, !0) : (sn[At - Ce] = Q + 1, At >= le ? le = At : Qe = !0, L(
          He,
          H[At],
          ae,
          null,
          be,
          M,
          G,
          q,
          re
        ), Be++);
      }
      const Mt = Qe ? Ty(sn) : Xi;
      for (Le = Mt.length - 1, Q = bt - 1; Q >= 0; Q--) {
        const He = Ce + Q, At = H[He], Ne = H[He + 1], ro = He + 1 < ge ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ne.el || bm(Ne)
        ) : xe;
        sn[Q] === 0 ? L(
          null,
          At,
          ae,
          ro,
          be,
          M,
          G,
          q,
          re
        ) : Qe && (Le < 0 || Q !== Mt[Le] ? B(At, ae, ro, 2) : Le--);
      }
    }
  }, B = (F, H, ae, xe, be = null) => {
    const { el: M, type: G, transition: q, children: re, shapeFlag: Q } = F;
    if (Q & 6) {
      B(F.component.subTree, H, ae, xe);
      return;
    }
    if (Q & 128) {
      F.suspense.move(H, ae, xe);
      return;
    }
    if (Q & 64) {
      G.move(F, H, ae, Pt);
      return;
    }
    if (G === Ze) {
      i(M, H, ae);
      for (let pe = 0; pe < re.length; pe++)
        B(re[pe], H, ae, xe);
      i(F.anchor, H, ae);
      return;
    }
    if (G === Hl) {
      $(F, H, ae);
      return;
    }
    if (xe !== 2 && Q & 1 && q)
      if (xe === 0)
        q.beforeEnter(M), i(M, H, ae), gn(() => q.enter(M), be);
      else {
        const { leave: pe, delayLeave: Ae, afterLeave: d } = q, Ce = () => {
          F.ctx.isUnmounted ? a(M) : i(M, H, ae);
        }, Oe = () => {
          M._isLeaving && M[Kb](
            !0
            /* cancelled */
          ), pe(M, () => {
            Ce(), d && d();
          });
        };
        Ae ? Ae(M, Ce, Oe) : Oe();
      }
    else
      i(M, H, ae);
  }, Fe = (F, H, ae, xe = !1, be = !1) => {
    const {
      type: M,
      props: G,
      ref: q,
      children: re,
      dynamicChildren: Q,
      shapeFlag: ge,
      patchFlag: pe,
      dirs: Ae,
      cacheIndex: d,
      memo: Ce
    } = F;
    if (pe === -2 && (be = !1), q != null && (Mr(), La(q, null, ae, F, !0), kr()), d != null && (H.renderCache[d] = void 0), ge & 256) {
      H.ctx.deactivate(F);
      return;
    }
    const Oe = ge & 1 && Ae, Le = !za(F);
    let Be;
    if (Le && (Be = G && G.onVnodeBeforeUnmount) && Gn(Be, H, F), ge & 6)
      gt(F.component, ae, xe);
    else {
      if (ge & 128) {
        F.suspense.unmount(ae, xe);
        return;
      }
      Oe && Xr(F, null, H, "beforeUnmount"), ge & 64 ? F.type.remove(
        F,
        H,
        ae,
        Pt,
        xe
      ) : Q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Ze || pe > 0 && pe & 64) ? Ge(
        Q,
        H,
        ae,
        !1,
        !0
      ) : (M === Ze && pe & 384 || !be && ge & 16) && Ge(re, H, ae), xe && Je(F);
    }
    const bt = Ce != null && d == null;
    (Le && (Be = G && G.onVnodeUnmounted) || Oe || bt) && gn(() => {
      Be && Gn(Be, H, F), Oe && Xr(F, null, H, "unmounted"), bt && (F.el = null);
    }, ae);
  }, Je = (F) => {
    const { type: H, el: ae, anchor: xe, transition: be } = F;
    if (H === Ze) {
      it(ae, xe);
      return;
    }
    if (H === Hl) {
      D(F);
      return;
    }
    const M = () => {
      a(ae), be && !be.persisted && be.afterLeave && be.afterLeave();
    };
    if (F.shapeFlag & 1 && be && !be.persisted) {
      const { leave: G, delayLeave: q } = be, re = () => G(ae, M);
      q ? q(F.el, M, re) : re();
    } else
      M();
  }, it = (F, H) => {
    let ae;
    for (; F !== H; )
      ae = S(F), a(F), F = ae;
    a(H);
  }, gt = (F, H, ae) => {
    const { bum: xe, scope: be, job: M, subTree: G, um: q, m: re, a: Q } = F;
    Qf(re), Qf(Q), xe && Zo(xe), be.stop(), M && (M.flags |= 8, Fe(G, F, H, ae)), q && gn(q, H), gn(() => {
      F.isUnmounted = !0;
    }, H);
  }, Ge = (F, H, ae, xe = !1, be = !1, M = 0) => {
    for (let G = M; G < F.length; G++)
      Fe(F[G], H, ae, xe, be);
  }, Gt = (F) => {
    if (F.shapeFlag & 6)
      return Gt(F.component.subTree);
    if (F.shapeFlag & 128)
      return F.suspense.next();
    const H = S(F.anchor || F.el), ae = H && H[Gb];
    return ae ? S(ae) : H;
  };
  let on = !1;
  const It = (F, H, ae) => {
    let xe;
    F == null ? H._vnode && (Fe(H._vnode, null, null, !0), xe = H._vnode.component) : L(
      H._vnode || null,
      F,
      H,
      null,
      null,
      null,
      ae
    ), H._vnode = F, on || (on = !0, Hf(xe), Bh(), on = !1);
  }, Pt = {
    p: L,
    um: Fe,
    m: B,
    r: Je,
    mt: me,
    mc: Z,
    pc: de,
    pbc: A,
    n: Gt,
    o: e
  };
  return {
    render: It,
    hydrate: void 0,
    createApp: hy(It)
  };
}
function jl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Cy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pm(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Ke(i) && Ke(a))
    for (let l = 0; l < i.length; l++) {
      const c = i[l];
      let f = a[l];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[l] = vr(a[l]), f.el = c.el), !n && f.patchFlag !== -2 && pm(c, f)), f.type === js && (f.patchFlag === -1 && (f = a[l] = vr(f)), f.el = c.el), f.type === $r && !f.el && (f.el = c.el);
    }
}
function Ty(e) {
  const t = e.slice(), n = [0];
  let i, a, l, c, f;
  const p = e.length;
  for (i = 0; i < p; i++) {
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
function gm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : gm(t);
}
function Qf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function bm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? bm(t.subTree) : null;
}
const ym = (e) => e.__isSuspense;
function Iy(e, t) {
  t && t.pendingBranch ? Ke(e) ? t.effects.push(...e) : t.effects.push(e) : $b(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), js = /* @__PURE__ */ Symbol.for("v-txt"), $r = /* @__PURE__ */ Symbol.for("v-cmt"), Hl = /* @__PURE__ */ Symbol.for("v-stc"), Va = [];
let Nn = null;
function Me(e = !1) {
  Va.push(Nn = e ? null : []);
}
function Dy() {
  Va.pop(), Nn = Va[Va.length - 1] || null;
}
let Ka = 1;
function ed(e, t = !1) {
  Ka += e, e < 0 && Nn && t && (Nn.hasOnce = !0);
}
function vm(e) {
  return e.dynamicChildren = Ka > 0 ? Nn || Xi : null, Dy(), Ka > 0 && Nn && Nn.push(e), e;
}
function Pe(e, t, n, i, a, l) {
  return vm(
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
  return vm(
    je(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function _m(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Sa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xm = ({ key: e }) => e ?? null, es = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Tt(e) || /* @__PURE__ */ rn(e) || We(e) ? { i: Sn, r: e, k: t, f: !!n } : e : null);
function ie(e, t = null, n = null, i = 0, a = null, l = e === Ze ? 0 : 1, c = !1, f = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xm(t),
    ref: t && es(t),
    scopeId: Wh,
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
  return f ? (Qu(p, n), l & 128 && e.normalize(p)) : n && (p.shapeFlag |= Tt(n) ? 8 : 16), Ka > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Nn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && Nn.push(p), p;
}
const je = Ey;
function Ey(e, t = null, n = null, i = 0, a = null, l = !1) {
  if ((!e || e === tm) && (e = $r), _m(e)) {
    const f = sa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Qu(f, n), Ka > 0 && !l && Nn && (f.shapeFlag & 6 ? Nn[Nn.indexOf(e)] = f : Nn.push(f)), f.patchFlag = -2, f;
  }
  if (By(e) && (e = e.__vccOpts), t) {
    t = Oy(t);
    let { class: f, style: p } = t;
    f && !Tt(f) && (t.class = st(f)), ct(p) && (/* @__PURE__ */ Ku(p) && !Ke(p) && (p = an({}, p)), t.style = Ot(p));
  }
  const c = Tt(e) ? 1 : ym(e) ? 128 : Bb(e) ? 64 : ct(e) ? 4 : We(e) ? 2 : 0;
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
function Oy(e) {
  return e ? /* @__PURE__ */ Ku(e) || um(e) ? an({}, e) : e : null;
}
function sa(e, t, n = !1, i = !1) {
  const { props: a, ref: l, patchFlag: c, children: f, transition: p } = e, b = t ? Fr(a || {}, t) : a, w = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && xm(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? Ke(l) ? l.concat(es(t)) : [l, es(t)] : es(t)
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
    transition: p,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && sa(e.ssContent),
    ssFallback: e.ssFallback && sa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && i && qu(
    w,
    p.clone(w)
  ), w;
}
function Ry(e = " ", t = 0) {
  return je(js, null, e, t);
}
function Et(e = "", t = !1) {
  return t ? (Me(), gi($r, null, e)) : je($r, null, e);
}
function Jn(e) {
  return e == null || typeof e == "boolean" ? je($r) : Ke(e) ? je(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _m(e) ? vr(e) : je(js, null, String(e));
}
function vr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : sa(e);
}
function Qu(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Ke(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Qu(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !um(t) ? t._ctx = Sn : a === 3 && Sn && (Sn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else We(t) ? (t = { default: t, _ctx: Sn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Ry(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Fr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = st([t.class, i.class]));
      else if (a === "style")
        t.style = Ot([t.style, i.style]);
      else if (Is(a)) {
        const l = t[a], c = i[a];
        c && l !== c && !(Ke(l) && l.includes(c)) ? t[a] = l ? [].concat(l, c) : c : c == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ds(a) && (t[a] = c);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Gn(e, t, n, i = null) {
  ar(e, t, 7, [
    n,
    i
  ]);
}
const Fy = im();
let Ly = 0;
function zy(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Fy, l = {
    uid: Ly++,
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
    scope: new lb(
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
    propsOptions: fm(i, a),
    emitsOptions: am(i, a),
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = py.bind(null, l), e.ce && e.ce(l), l;
}
let nn = null;
const $y = () => nn || Sn;
let gs, bu;
{
  const e = Rs(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (l) => {
      a.length > 1 ? a.forEach((c) => c(l)) : a[0](l);
    };
  };
  gs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => nn = n
  ), bu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Wa = n
  );
}
const to = (e) => {
  const t = nn;
  return gs(e), e.scope.on(), () => {
    e.scope.off(), gs(t);
  };
}, td = () => {
  nn && nn.scope.off(), gs(null);
};
function wm(e) {
  return e.vnode.shapeFlag & 4;
}
let Wa = !1;
function Vy(e, t = !1, n = !1) {
  t && bu(t);
  const { props: i, children: a } = e.vnode, l = wm(e);
  xy(e, i, l, t), My(e, a, n || t);
  const c = l ? jy(e, t) : void 0;
  return t && bu(!1), c;
}
function jy(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, oy);
  const { setup: i } = n;
  if (i) {
    Mr();
    const a = e.setupContext = i.length > 1 ? Uy(e) : null, l = to(e), c = eo(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = xh(c);
    if (kr(), l(), (f || e.sp) && !za(e) && Jh(e), f) {
      if (c.then(td, td), t)
        return c.then((p) => {
          nd(e, p);
        }).catch((p) => {
          Ls(p, e, 0);
        });
      e.asyncDep = c;
    } else
      nd(e, c);
  } else
    Sm(e);
}
function nd(e, t, n) {
  We(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ct(t) && (e.setupState = Hh(t)), Sm(e);
}
function Sm(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || rr);
  {
    const a = to(e);
    Mr();
    try {
      sy(e);
    } finally {
      kr(), a();
    }
  }
}
const Hy = {
  get(e, t) {
    return tn(e, "get", ""), e[t];
  }
};
function Uy(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hh(Cb(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in $a)
        return $a[n](e);
    },
    has(t, n) {
      return n in t || n in $a;
    }
  })) : e.proxy;
}
function Gy(e, t = !0) {
  return We(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function By(e) {
  return We(e) && "__vccOpts" in e;
}
const mt = (e, t) => /* @__PURE__ */ Ob(e, t, Wa), Ky = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yu;
const rd = typeof window < "u" && window.trustedTypes;
if (rd)
  try {
    yu = /* @__PURE__ */ rd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Nm = yu ? (e) => yu.createHTML(e) : (e) => e, Wy = "http://www.w3.org/2000/svg", Yy = "http://www.w3.org/1998/Math/MathML", pr = typeof document < "u" ? document : null, id = pr && /* @__PURE__ */ pr.createElement("template"), qy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? pr.createElementNS(Wy, e) : t === "mathml" ? pr.createElementNS(Yy, e) : n ? pr.createElement(e, { is: n }) : pr.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => pr.createTextNode(e),
  createComment: (e) => pr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => pr.querySelector(e),
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
      id.innerHTML = Nm(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const f = id.content;
      if (i === "svg" || i === "mathml") {
        const p = f.firstChild;
        for (; p.firstChild; )
          f.appendChild(p.firstChild);
        f.removeChild(p);
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
}, Xy = /* @__PURE__ */ Symbol("_vtc");
function Jy(e, t, n) {
  const i = e[Xy];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const bs = /* @__PURE__ */ Symbol("_vod"), Mm = /* @__PURE__ */ Symbol("_vsh"), no = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[bs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Na(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Na(e, !0), i.enter(e)) : i.leave(e, () => {
      Na(e, !1);
    }) : Na(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Na(e, t);
  }
};
function Na(e, t) {
  e.style.display = t ? e[bs] : "none", e[Mm] = !t;
}
const Zy = /* @__PURE__ */ Symbol(""), Qy = /(?:^|;)\s*display\s*:/;
function ev(e, t, n) {
  const i = e.style, a = Tt(n);
  let l = !1;
  if (n && !a) {
    if (t)
      if (Tt(t))
        for (const c of t.split(";")) {
          const f = c.slice(0, c.indexOf(":")).trim();
          n[f] == null && ts(i, f, "");
        }
      else
        for (const c in t)
          n[c] == null && ts(i, c, "");
    for (const c in n)
      c === "display" && (l = !0), ts(i, c, n[c]);
  } else if (a) {
    if (t !== n) {
      const c = i[Zy];
      c && (n += ";" + c), i.cssText = n, l = Qy.test(n);
    }
  } else t && e.removeAttribute("style");
  bs in e && (e[bs] = l ? i.display : "", e[Mm] && (i.display = "none"));
}
const ad = /\s*!important$/;
function ts(e, t, n) {
  if (Ke(n))
    n.forEach((i) => ts(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = tv(e, t);
    ad.test(n) ? e.setProperty(
      pi(i),
      n.replace(ad, ""),
      "important"
    ) : e[i] = n;
  }
}
const od = ["Webkit", "Moz", "ms"], Ul = {};
function tv(e, t) {
  const n = Ul[t];
  if (n)
    return n;
  let i = fn(t);
  if (i !== "filter" && i in e)
    return Ul[t] = i;
  i = Os(i);
  for (let a = 0; a < od.length; a++) {
    const l = od[a] + i;
    if (l in e)
      return Ul[t] = l;
  }
  return t;
}
const sd = "http://www.w3.org/1999/xlink";
function ld(e, t, n, i, a, l = ob(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(sd, t.slice(6, t.length)) : e.setAttributeNS(sd, t, n) : n == null || l && !Mh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : ir(n) ? String(n) : n
  );
}
function ud(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Nm(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const f = l === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = Mh(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(a || t);
}
function Gi(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function nv(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const cd = /* @__PURE__ */ Symbol("_vei");
function rv(e, t, n, i, a = null) {
  const l = e[cd] || (e[cd] = {}), c = l[t];
  if (i && c)
    c.value = i;
  else {
    const [f, p] = iv(t);
    if (i) {
      const b = l[t] = sv(
        i,
        a
      );
      Gi(e, f, b, p);
    } else c && (nv(e, f, c, p), l[t] = void 0);
  }
}
const fd = /(?:Once|Passive|Capture)$/;
function iv(e) {
  let t;
  if (fd.test(e)) {
    t = {};
    let i;
    for (; i = e.match(fd); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : pi(e.slice(2)), t];
}
let Gl = 0;
const av = /* @__PURE__ */ Promise.resolve(), ov = () => Gl || (av.then(() => Gl = 0), Gl = Date.now());
function sv(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    ar(
      lv(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = ov(), n;
}
function lv(e, t) {
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
const dd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uv = (e, t, n, i, a, l) => {
  const c = a === "svg";
  t === "class" ? Jy(e, i, c) : t === "style" ? ev(e, n, i) : Is(t) ? Ds(t) || rv(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cv(e, t, i, c)) ? (ud(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ld(e, t, i, c, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Tt(i))) ? ud(e, fn(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ld(e, t, i, c));
};
function cv(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && dd(t) && We(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return dd(t) && Tt(n) ? !1 : t in e;
}
function fv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = fn(t);
  return Array.isArray(n) ? n.some((a) => fn(a) === i) : Object.keys(n).some((a) => fn(a) === i);
}
const hd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ke(t) ? (n) => Zo(t, n) : t;
};
function dv(e) {
  e.target.composing = !0;
}
function md(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Bl = /* @__PURE__ */ Symbol("_assign");
function pd(e, t, n) {
  return t && (e = e.trim()), n && (e = zu(e)), e;
}
const gd = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e[Bl] = hd(a);
    const l = i || a.props && a.props.type === "number";
    Gi(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Bl](pd(e.value, n, l));
    }), (n || l) && Gi(e, "change", () => {
      e.value = pd(e.value, n, l);
    }), t || (Gi(e, "compositionstart", dv), Gi(e, "compositionend", md), Gi(e, "change", md));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: l } }, c) {
    if (e[Bl] = hd(c), e.composing) return;
    const f = (l || e.type === "number") && !/^0\d/.test(e.value) ? zu(e.value) : e.value, p = t ?? "";
    if (f === p)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === p) || (e.value = p);
  }
}, hv = ["ctrl", "shift", "alt", "meta"], mv = {
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
  exact: (e, t) => hv.some((n) => e[`${n}Key`] && !t.includes(n))
}, zr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...l) => {
    for (let c = 0; c < t.length; c++) {
      const f = mv[t[c]];
      if (f && f(a, t)) return;
    }
    return e(a, ...l);
  }));
}, pv = /* @__PURE__ */ an({ patchProp: uv }, qy);
let bd;
function gv() {
  return bd || (bd = Py(pv));
}
const km = ((...e) => {
  const t = gv().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = yv(i);
    if (!a) return;
    const l = t._component;
    !We(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const c = n(a, !1, bv(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), c;
  }, t;
});
function bv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function yv(e) {
  return Tt(e) ? document.querySelector(e) : e;
}
const kt = Math.PI / 180, Pm = Math.PI * 2, vv = 2048;
function ht(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Vr(e, t, n) {
  return { x: e, y: t, z: n };
}
function ys(e, t) {
  return Vr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Yi(e, t) {
  return Vr(e.x * t, e.y * t, e.z * t);
}
function ns(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function yd(e, t) {
  return Vr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ia(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Vr(e.x / t, e.y / t, e.z / t);
}
function _v(e, t) {
  const n = Number(e || 0) * kt, i = Number(t || 0) * kt, a = Math.cos(i);
  return Vr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function rs(e, t, n = 0) {
  const i = _v(e, t);
  let a = Vr(0, 1, 0);
  Math.abs(ns(i, a)) > 0.999 && (a = Vr(0, 0, 1));
  let l = Ia(yd(a, i)), c = Ia(yd(i, l));
  const f = Number(n || 0) * kt, p = Math.cos(f), b = Math.sin(f), w = ys(Yi(l, p), Yi(c, b)), v = ys(Yi(l, -b), Yi(c, p));
  return l = Ia(w), c = Ia(v), { fwd: i, right: l, up: c };
}
function xv(e, t) {
  const n = (Number(e || 0) - 0.5) * Pm, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Vr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function vd(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), l = Math.max(1, Number(n || 1)), c = Math.max(512, vv), f = Math.min(1, c / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: l,
    renderScale: f,
    width: Math.max(1, Math.round(i * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function _d(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function Kl(e, t, n) {
  const i = _d(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = _d(e, e.FRAGMENT_SHADER, n);
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
const Wl = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, wv = `#version 300 es
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
}`, Sv = `#version 300 es
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
}`, Nv = `#version 300 es
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
function Ma(e, t, n) {
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
function Mv(e) {
  const t = rs(
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
function kv(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, l = null, c = null, f = null, p = null, b = null, w = null, v = null, S = null, I = !1, _ = vd(1, 1, 1), L = null, O = null, U = null, k = null, $ = null;
  const D = /* @__PURE__ */ new Map();
  let E = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, j = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, ee = {
    paint: !1,
    mask: !1
  };
  function Z(M = null, G = null) {
    const q = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, q), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, M ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, G ?? n.CLAMP_TO_EDGE), q;
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
      }), n ? (i = Kl(n, Wl, wv), a = Kl(n, Wl, Sv), l = Kl(n, Wl, Nv), L = {
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
      }, U = {
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
      ]), n.STATIC_DRAW), f = Z(n.REPEAT, n.CLAMP_TO_EDGE), p = Z(n.REPEAT, n.CLAMP_TO_EDGE), b = Z(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), I = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function A() {
    var M;
    if (n) {
      try {
        c && n.deleteBuffer(c), f && n.deleteTexture(f), p && n.deleteTexture(p), b && n.deleteTexture(b), D.forEach((G) => {
          ke(G);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), l && n.deleteProgram(l), (M = n.getExtension("WEBGL_lose_context")) == null || M.loseContext();
      } catch {
      }
      n = null, i = null, a = null, l = null, c = null, f = null, p = null, b = null, D.clear(), w = null, v = null, S = null, j = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, ee = {
        paint: !1,
        mask: !1
      }, k = null, $ = null, I = !1;
    }
  }
  function Y(M, G, q = 1) {
    _ = vd(M, G, q), (t.width !== _.width || t.height !== _.height) && (t.width = _.width, t.height = _.height);
  }
  function ue(M) {
    M === "background" ? w = null : M === "paint" ? v = null : S = null, j[M] && (j[M].width = 0, j[M].height = 0);
  }
  function fe() {
    ee.paint = !1, ee.mask = !1;
  }
  function me(M) {
    fe(), M === "paint" ? ee.paint = !0 : M === "mask" && (ee.mask = !0);
  }
  function X(M, G, q = [], re = { width: 0, height: 0 }, Q = !1) {
    if (!n || !M || !G) return !1;
    const ge = Number(G.width || G.videoWidth || G.naturalWidth || 0), pe = Number(G.height || G.videoHeight || G.naturalHeight || 0);
    if (!(ge > 1) || !(pe > 1)) return !1;
    const Ae = Array.isArray(q) ? q.filter((d) => d && d.w > 0 && d.h > 0) : [];
    if (!Ae.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, M), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Q ? 1 : 0), re.width !== ge || re.height !== pe)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), re.width = ge, re.height = pe, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (k || (k = document.createElement("canvas"), $ = k.getContext("2d")), !$)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const d of Ae) {
      const Ce = Math.max(0, Math.floor(Number(d.x || 0))), Oe = Math.max(0, Math.floor(Number(d.y || 0))), Le = Math.min(ge - Ce, Math.ceil(Number(d.w || 0))), Be = Math.min(pe - Oe, Math.ceil(Number(d.h || 0)));
      if (!(Le <= 0 || Be <= 0)) {
        if (k.width !== Le || k.height !== Be) {
          if (k.width = Le, k.height = Be, $ = k.getContext("2d"), !$)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          $.clearRect(0, 0, Le, Be);
        $.drawImage(G, Ce, Oe, Le, Be, 0, 0, Le, Be), n.texSubImage2D(n.TEXTURE_2D, 0, Ce, Oe, n.RGBA, n.UNSIGNED_BYTE, k);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function ce(M, G, q, re, Q = null, ge = !1) {
    if (!W()) return !1;
    if (!q)
      return ue(M), !1;
    const pe = String(re ?? ""), Ae = M === "background" ? w : M === "paint" ? v : S, d = j[M], Ce = Number(q.width || q.videoWidth || q.naturalWidth || 0), Oe = Number(q.height || q.videoHeight || q.naturalHeight || 0), Le = d.width !== Ce || d.height !== Oe;
    if (Ae === pe && !Le && !(Array.isArray(Q) && Q.length)) return !0;
    if (!(Ce > 0) || !(Oe > 0))
      return ue(M), !1;
    if (n.bindTexture(n.TEXTURE_2D, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ge ? 1 : 0), !(Array.isArray(Q) && Q.length ? X(G, q, Q, d, ge) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, q), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ue(M), !1;
      d.width = Ce, d.height = Oe;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), M === "background" ? w = pe : M === "paint" ? v = pe : S = pe, !0;
  }
  function P(M, G) {
    return ce("background", f, M, G, null, !0);
  }
  function de(M, G, q = null) {
    return ce("paint", p, M, G, q, !0);
  }
  function Se(M, G, q = null) {
    return ce("mask", b, M, G, q, !0);
  }
  function ke(M) {
    M != null && M.texture && n && n.deleteTexture(M.texture);
  }
  function B(M = /* @__PURE__ */ new Set()) {
    D.forEach((G, q) => {
      M.has(q) || (ke(G), D.delete(q));
    });
  }
  function Fe(M) {
    if (!n || !(M != null && M.assetId) || !(M != null && M.source)) return null;
    const G = String(M.assetId), q = String(M.revision ?? ""), re = M.source, Q = Number(re.width || re.naturalWidth || re.videoWidth || 0), ge = Number(re.height || re.naturalHeight || re.videoHeight || 0);
    if (Q <= 0 || ge <= 0) return null;
    let pe = D.get(G);
    if (pe || (pe = {
      texture: Z(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, D.set(G, pe)), pe.revision !== q || pe.width !== Q || pe.height !== ge) {
      if (n.bindTexture(n.TEXTURE_2D, pe.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, re), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), pe.revision = q, pe.width = Q, pe.height = ge;
    }
    return pe.texture;
  }
  function Je(M = []) {
    if (!W()) return !1;
    const G = /* @__PURE__ */ new Set();
    return M.forEach((q) => {
      !(q != null && q.assetId) || !(q != null && q.source) || (G.add(String(q.assetId)), Fe(q));
    }), B(G), !0;
  }
  function it() {
    return W() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function gt(M) {
    n.useProgram(M), n.bindBuffer(n.ARRAY_BUFFER, c), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Ge(M, G = {}) {
    if (!w) return null;
    n.disable(n.BLEND), gt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(L.background, 0), n.uniform2f(L.viewport, Math.max(1, _.width), Math.max(1, _.height)), n.uniform1i(L.mode, (M == null ? void 0 : M.mode) === "unwrap" ? 0 : (M == null ? void 0 : M.mode) === "cutout" ? 2 : 1);
    const q = Ma(M, _.width, _.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(L.yaw, Number(q.yawDeg || 0) * kt), n.uniform1f(L.pitch, Number(q.pitchDeg || 0) * kt), n.uniform1f(L.roll, Number(q.rollDeg || 0) * kt), n.uniform1f(L.hFov, ht(Number(q.hFovDeg || 90), 0.1, 179) * kt), n.uniform1f(L.vFov, ht(Number(q.vFovDeg || 60), 0.1, 179) * kt), n.uniform1f(L.opacity, ht(Number(G.backgroundOpacity ?? 1), 0, 1));
    const re = Number((M == null ? void 0 : M.coverageDeg) || (G == null ? void 0 : G.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(L.coverage, re), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Gt(M, G = {}) {
    const q = ee.paint && v != null, re = ee.mask && S != null;
    if (!q && !re) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), gt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, p), n.uniform1i(O.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, b), n.uniform1i(O.mask, 1), n.uniform1i(O.mode, (M == null ? void 0 : M.mode) === "unwrap" ? 0 : (M == null ? void 0 : M.mode) === "cutout" ? 2 : 1);
    const Q = Ma(M, _.width, _.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(O.yaw, Number(Q.yawDeg || 0) * kt), n.uniform1f(O.pitch, Number(Q.pitchDeg || 0) * kt), n.uniform1f(O.roll, Number(Q.rollDeg || 0) * kt), n.uniform1f(O.hFov, ht(Number(Q.hFovDeg || 90), 0.1, 179) * kt), n.uniform1f(O.vFov, ht(Number(Q.vFovDeg || 60), 0.1, 179) * kt), n.uniform1f(O.paintOpacity, ht(Number(G.paintOpacity ?? 1), 0, 1)), n.uniform1f(O.maskOpacity, ht(Number(G.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(O.hasPaint, q ? 1 : 0), n.uniform1i(O.hasMask, re ? 1 : 0), n.uniform1i(O.showMaskTint, G.showMaskTint === !1 ? 0 : 1), n.uniform3f(O.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function on(M, G) {
    var d, Ce, Oe, Le, Be, bt, Qe;
    const q = Array.isArray(M == null ? void 0 : M.objects) ? M.objects : [];
    if (!q.length) {
      fe(), B(/* @__PURE__ */ new Set());
      return;
    }
    const re = (G == null ? void 0 : G.mode) === "unwrap" ? 0 : (G == null ? void 0 : G.mode) === "cutout" ? 2 : 1, Q = Ma(G, _.width, _.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, ge = rs(Q.yawDeg, Q.pitchDeg, Q.rollDeg), pe = q.slice().sort((le, sn) => Number((le == null ? void 0 : le.zIndex) || 0) - Number((sn == null ? void 0 : sn.zIndex) || 0)), Ae = /* @__PURE__ */ new Set();
    fe();
    for (const le of pe)
      if (!(!le || le.visible === !1)) {
        if (le.type === "sticker") {
          const sn = String(((d = le == null ? void 0 : le.params) == null ? void 0 : d.assetId) || (le == null ? void 0 : le.id) || "");
          if (!sn) continue;
          Ae.add(sn);
          const Mt = Fe({
            assetId: sn,
            source: le.source,
            revision: le.revision
          });
          if (!Mt) continue;
          const He = Mv({
            yawDeg: ((Ce = le == null ? void 0 : le.transform) == null ? void 0 : Ce.yawDeg) || 0,
            pitchDeg: ((Oe = le == null ? void 0 : le.transform) == null ? void 0 : Oe.pitchDeg) || 0,
            rollDeg: ((Le = le == null ? void 0 : le.transform) == null ? void 0 : Le.rollDeg) || 0,
            hFovDeg: ((Be = le == null ? void 0 : le.transform) == null ? void 0 : Be.hFovDeg) || 30,
            vFovDeg: ((bt = le == null ? void 0 : le.transform) == null ? void 0 : bt.vFovDeg) || 30,
            crop: ((Qe = le == null ? void 0 : le.params) == null ? void 0 : Qe.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (le == null ? void 0 : le.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), gt(l), n.uniform1i(U.texture, 0), n.uniform1i(U.mode, re), n.uniform3f(U.viewRight, ge.right.x, ge.right.y, ge.right.z), n.uniform3f(U.viewUp, ge.up.x, ge.up.y, ge.up.z), n.uniform3f(U.viewFwd, ge.fwd.x, ge.fwd.y, ge.fwd.z), n.uniform1f(U.viewHfov, ht(Number(Q.hFovDeg || 90), 0.1, 179) * kt), n.uniform1f(U.viewVfov, ht(Number(Q.vFovDeg || 60), 0.1, 179) * kt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, Mt), n.uniform3f(U.stickerRight, He.right.x, He.right.y, He.right.z), n.uniform3f(U.stickerUp, He.up.x, He.up.y, He.up.z), n.uniform3f(U.stickerFwd, He.fwd.x, He.fwd.y, He.fwd.z), n.uniform1f(U.stickerTanX, Math.max(1e-6, He.tanX)), n.uniform1f(U.stickerTanY, Math.max(1e-6, He.tanY)), n.uniform4f(
            U.crop,
            ht(Number(He.crop.x0 ?? 0), 0, 1),
            ht(Number(He.crop.y0 ?? 0), 0, 1),
            ht(Number(He.crop.x1 ?? 1), 0, 1),
            ht(Number(He.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(U.opacity, He.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (le.type === "paint" || le.type === "raster") {
          if (!de(le.source, le.revision ?? "")) continue;
          me("paint"), Gt(G, {
            paintOpacity: Number(le.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (le.type === "mask") {
          if (!Se(le.source, le.revision ?? "")) continue;
          me("mask"), Gt(G, {
            paintOpacity: 0,
            maskOpacity: Number(le.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    B(Ae), fe();
  }
  function It(M) {
    return !it() || !w ? null : (Ge({
      mode: "panorama",
      yawDeg: (M == null ? void 0 : M.yawDeg) || 0,
      pitchDeg: (M == null ? void 0 : M.pitchDeg) || 0,
      fovDeg: (M == null ? void 0 : M.fovDeg) || 100
    }, M), t);
  }
  function Pt(M) {
    return !it() || !w ? null : (Ge({ mode: "unwrap" }, M), t);
  }
  function zt(M) {
    return !it() || !w ? null : (Ge({
      mode: "cutout",
      yawDeg: (M == null ? void 0 : M.yawDeg) || 0,
      pitchDeg: (M == null ? void 0 : M.pitchDeg) || 0,
      rollDeg: (M == null ? void 0 : M.rollDeg) || 0,
      hFovDeg: (M == null ? void 0 : M.hFovDeg) || 90,
      vFovDeg: (M == null ? void 0 : M.vFovDeg) || 60
    }, M), t);
  }
  function F(M = {}) {
    if (!W()) return !1;
    const G = Object.prototype.hasOwnProperty.call(M, "backgroundSource"), q = Object.prototype.hasOwnProperty.call(M, "paintSource"), re = Object.prototype.hasOwnProperty.call(M, "maskSource"), Q = Object.prototype.hasOwnProperty.call(M, "textures"), ge = Object.prototype.hasOwnProperty.call(M, "scene");
    return G && P(M.backgroundSource, M.backgroundRevision ?? ""), q && de(M.paintSource, M.paintRevision ?? ""), re && Se(M.maskSource, M.maskRevision ?? ""), Q && (Je(M.textures || []), E.textures = M.textures || []), ge && (E.scene = M.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(M, "objectPass") && (E.objectPass = M.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(M, "backgroundOpacity") && (E.backgroundOpacity = Number(M.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(M, "showMaskTint") && (E.showMaskTint = M.showMaskTint === !0), Object.prototype.hasOwnProperty.call(M, "coverageDeg") && (E.coverageDeg = Number(M.coverageDeg || 360) === 180 ? 180 : 360), !0;
  }
  function H(M = {}) {
    return !W() || (Y(M.width, M.height, M.dpr || 1), !it()) || !F(M) ? null : (w && Ge(M.view, {
      ...M,
      backgroundOpacity: Number(M.backgroundOpacity ?? E.backgroundOpacity ?? 1),
      coverageDeg: Number(M.coverageDeg || E.coverageDeg || 360) === 180 ? 180 : 360
    }), on(
      E.objectPass || { objects: [] },
      M.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function ae(M = {}) {
    return F(M);
  }
  function xe(M, G, q) {
    const re = Math.max(1, Number((M == null ? void 0 : M.viewportWidth) || _.sourceWidth || _.width || 1)), Q = Math.max(1, Number((M == null ? void 0 : M.viewportHeight) || _.sourceHeight || _.height || 1)), ge = Number(G), pe = Number(q);
    if (!Number.isFinite(ge) || !Number.isFinite(pe)) return null;
    if ((M == null ? void 0 : M.mode) === "unwrap")
      return { u: (ge / re % 1 + 1) % 1, v: ht(pe / Q, 0, 1) };
    const Ae = Ma(M, re, Q);
    if (!Ae) return null;
    const d = rs(Ae.yawDeg, Ae.pitchDeg, Ae.rollDeg), Ce = (ge - re * 0.5) / (re * 0.5) * Math.tan(ht(Ae.hFovDeg, 1, 179) * kt * 0.5), Oe = (Q * 0.5 - pe) / (Q * 0.5) * Math.tan(ht(Ae.vFovDeg, 0.1, 179) * kt * 0.5), Le = Ia(ys(ys(Yi(d.right, Ce), Yi(d.up, Oe)), d.fwd));
    return {
      u: (Math.atan2(Le.x, Le.z) / Pm + 0.5 + 1) % 1,
      v: ht(0.5 - Math.asin(ht(Le.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function be(M, G, q) {
    const re = Math.max(1, Number((M == null ? void 0 : M.viewportWidth) || _.sourceWidth || _.width || 1)), Q = Math.max(1, Number((M == null ? void 0 : M.viewportHeight) || _.sourceHeight || _.height || 1));
    if ((M == null ? void 0 : M.mode) === "unwrap")
      return {
        x: (Number(G || 0) % 1 + 1) % 1 * re,
        y: ht(Number(q || 0), 0, 1) * Q,
        visible: !0
      };
    const ge = Ma(M, re, Q);
    if (!ge)
      return { x: re * 0.5, y: Q * 0.5, visible: !1 };
    const pe = rs(ge.yawDeg, ge.pitchDeg, ge.rollDeg), Ae = xv(G, q), d = ns(Ae, pe.right), Ce = ns(Ae, pe.up), Oe = ns(Ae, pe.fwd);
    if (Oe <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Le = re * 0.5 + d / Oe * (re * 0.5 / Math.tan(ht(ge.hFovDeg, 1, 179) * kt * 0.5)), Be = Q * 0.5 - Ce / Oe * (Q * 0.5 / Math.tan(ht(ge.vFovDeg, 0.1, 179) * kt * 0.5));
    return { x: Le, y: Be, visible: Le >= 0 && Le <= re && Be >= 0 && Be <= Q };
  }
  return {
    init: W,
    dispose: A,
    setViewport: Y,
    setBackgroundErp: P,
    setPaintErp: de,
    setMaskErp: Se,
    renderPanorama: It,
    renderUnwrap: Pt,
    renderCutout: zt,
    renderScene: H,
    syncState: ae,
    screenToErpUv: xe,
    erpUvToScreen: be,
    getCanvas() {
      return t;
    },
    isSupported() {
      return W();
    },
    getViewport() {
      return { ..._ };
    }
  };
}
function xd(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Pv() {
  const e = /* @__PURE__ */ new Map();
  function t(c) {
    return c != null ? String(c) : "default";
  }
  function n(c, f, p) {
    const b = t(c);
    let w = e.get(b) || null;
    if (!w) {
      const I = document.createElement("canvas"), _ = I.getContext("2d");
      if (!_) return null;
      w = {
        id: b,
        canvas: I,
        ctx: _,
        width: 0,
        height: 0
      }, e.set(b, w);
    }
    const v = xd(f), S = xd(p);
    return w.width !== v && (w.canvas.width = v, w.width = v), w.height !== S && (w.canvas.height = S, w.height = S), w;
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
const Av = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), Cv = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Am(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Tv(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function Iv(e = {}) {
  const t = Cv.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Am(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Dv(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Av.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Am(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: Tv(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Ev(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => Dv(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const l = Number((i == null ? void 0 : i.zIndex) || 0), c = Number((a == null ? void 0 : a.zIndex) || 0);
      return l !== c ? l - c : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function la(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: Iv((e == null ? void 0 : e.background) || {}),
    objectPass: Ev((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function Ov(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ec(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? Ov(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Rv(e, t, n = {}) {
  return e ? ec({
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
function Fv(e, t, n = {}) {
  return e ? ec({
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
function Lv(e, t, n = {}) {
  return e ? ec({
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
function Cm(e = {}) {
  const t = [], n = Rv(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = Fv(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((l, c) => {
    const f = Lv(
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
    const f = Number((l == null ? void 0 : l.zIndex) || 0), p = Number((c == null ? void 0 : c.zIndex) || 0);
    return f !== p ? f - p : String((l == null ? void 0 : l.id) || "").localeCompare(String((c == null ? void 0 : c.id) || ""));
  });
}
function tc(e, t) {
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
function Us(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, l = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], c = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return la({
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
      objects: tc(a, l)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Da(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = tc(t, n), a = Cm({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return la({
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
function zv(e = {}) {
  var l, c, f, p, b, w, v, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const I = la(e), _ = Array.isArray((l = I.objectPass) == null ? void 0 : l.objects) ? I.objectPass.objects : [], L = {
      stickers: _.filter(($) => $.type === "sticker").map(($) => {
        var D, E, j, ee, Z, W, A, Y, ue, fe, me, X, ce;
        return {
          id: $.id,
          assetId: String(((D = $ == null ? void 0 : $.params) == null ? void 0 : D.assetId) || ((E = $ == null ? void 0 : $.params) == null ? void 0 : E.asset_id) || ($ == null ? void 0 : $.id) || ""),
          yawDeg: Number(((j = $ == null ? void 0 : $.transform) == null ? void 0 : j.yawDeg) ?? ((ee = $ == null ? void 0 : $.params) == null ? void 0 : ee.yawDeg) ?? 0),
          pitchDeg: Number(((Z = $ == null ? void 0 : $.transform) == null ? void 0 : Z.pitchDeg) ?? ((W = $ == null ? void 0 : $.params) == null ? void 0 : W.pitchDeg) ?? 0),
          rollDeg: Number(((A = $ == null ? void 0 : $.transform) == null ? void 0 : A.rollDeg) ?? ((Y = $ == null ? void 0 : $.params) == null ? void 0 : Y.rollDeg) ?? 0),
          hFovDeg: Number(((ue = $ == null ? void 0 : $.transform) == null ? void 0 : ue.hFovDeg) ?? ((fe = $ == null ? void 0 : $.params) == null ? void 0 : fe.hFovDeg) ?? 30),
          vFovDeg: Number(((me = $ == null ? void 0 : $.transform) == null ? void 0 : me.vFovDeg) ?? ((X = $ == null ? void 0 : $.params) == null ? void 0 : X.vFovDeg) ?? 30),
          crop: ((ce = $ == null ? void 0 : $.params) == null ? void 0 : ce.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number(($ == null ? void 0 : $.opacity) ?? 1),
          visible: ($ == null ? void 0 : $.visible) !== !1,
          zIndex: Number(($ == null ? void 0 : $.zIndex) ?? 0)
        };
      }),
      selectedId: ((c = I.objectPass) == null ? void 0 : c.selectedId) ?? null,
      hoveredId: ((f = I.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, O = _.filter(($) => $.type === "sticker").map(($) => {
      var D, E;
      return {
        assetId: String(((D = $ == null ? void 0 : $.params) == null ? void 0 : D.assetId) || ((E = $ == null ? void 0 : $.params) == null ? void 0 : E.asset_id) || ($ == null ? void 0 : $.id) || ""),
        source: $.source || null,
        revision: String(($ == null ? void 0 : $.revision) || "")
      };
    }).filter(($) => $.assetId && $.source), U = _.find(($) => $.type === "paint") || null, k = _.find(($) => $.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((p = I.background) == null ? void 0 : p.source) || null,
      backgroundRevision: String(((b = I.background) == null ? void 0 : b.revision) || ""),
      coverageDeg: Number(((w = I.background) == null ? void 0 : w.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (U == null ? void 0 : U.source) || null,
      paintRevision: String((U == null ? void 0 : U.revision) || ""),
      maskSource: (k == null ? void 0 : k.source) || null,
      maskRevision: String((k == null ? void 0 : k.revision) || ""),
      textures: O,
      scene: L,
      objectPass: I.objectPass,
      backgroundOpacity: Number(((v = I.background) == null ? void 0 : v.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = la({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...tc(t, n),
        ...Cm({
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
function $v(e) {
  let t = null;
  function n(l = {}) {
    const c = zv(l);
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
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (O) => kv(O), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Pv(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (O) => $v(O), a = t(e), l = (e == null ? void 0 : e.targetCanvas) || null, c = n();
  let f = null;
  const p = i({
    syncState(O = {}) {
      if (typeof a.syncState == "function") {
        const U = { ...O }, k = a.syncState(U);
        return k && (f = U, k);
      }
      return f = { ...O }, !0;
    }
  });
  function b(O = {}) {
    return p.sync(O);
  }
  function w(O = {}, U = {}) {
    return f ? a.renderScene({
      ...f,
      view: O,
      width: U.width,
      height: U.height,
      dpr: U.dpr,
      backgroundOpacity: U.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: U.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function v(O, U, k = {}, $ = {}) {
    if (!U) return !1;
    const D = Math.min(1, Math.max(0.1, Number($.renderScale ?? 1))), E = w(k, {
      ...$,
      width: Math.max(1, Math.round(U.w * D)),
      height: Math.max(1, Math.round(U.h * D))
    });
    return E ? O ? (O.canvas && E === O.canvas || O.drawImage(E, U.x, U.y, U.w, U.h), !0) : !!l && E === l : !1;
  }
  function S(O, U = {}, k = {}) {
    const $ = Number(k.width || 0), D = Number(k.height || 0);
    if (!($ > 0) || !(D > 0)) return null;
    const E = c.ensureTarget(O, $, D);
    if (!E) return null;
    const j = w(U, {
      ...k,
      width: $,
      height: D
    });
    return j ? (E.ctx.clearRect(0, 0, E.canvas.width, E.canvas.height), E.ctx.drawImage(j, 0, 0, E.canvas.width, E.canvas.height), E.canvas) : null;
  }
  function I(O) {
    c.clearTarget(O);
  }
  function _() {
    var O;
    c.dispose(), (O = a.dispose) == null || O.call(a), f = null;
  }
  function L() {
    f = null, p.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: b,
    renderView: w,
    renderToContext: v,
    renderToTarget: S,
    clearTarget: I,
    snapshotState: p.snapshot,
    clearState: L,
    dispose: _
  };
}
function Bi(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function Vv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function wd(e, t = 8) {
  var w;
  const n = (w = e == null ? void 0 : e.getContext) == null ? void 0 : w.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const l = n.getImageData(0, 0, i, a).data;
  let c = i, f = a, p = -1, b = -1;
  for (let v = 0; v < a; v += 1)
    for (let S = 0; S < i; S += 1)
      l[(v * i + S) * 4 + 3] <= t || (S < c && (c = S), v < f && (f = v), S > p && (p = S), v > b && (b = v));
  return p < c || b < f ? null : {
    minX: c,
    minY: f,
    maxX: p,
    maxY: b,
    width: p - c + 1,
    height: b - f + 1,
    aspect: Number(((p - c + 1) / Math.max(1, b - f + 1)).toFixed(4))
  };
}
function nc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function gr(e, t, n) {
  if (!e) return Bi(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function St(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Yl = null, ql = null, Sd = null, Nd = null, Ct = null, ka = null, ln = null, Er = null;
function jv() {
  if (ql) return ql;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), ql = n, n;
}
function Xl(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  Yl = gr(Yl, n, i);
  const a = Yl;
  St(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Nd !== a.ctx && (Sd = a.ctx.createPattern(jv(), "repeat"), Nd = a.ctx), a.ctx.fillStyle = Sd, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function Hv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Uv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Gv(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Bv(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Nt = /* @__PURE__ */ new Map(), rc = 128;
function Kv(e, t, n, i, a, l) {
  const c = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), p = `${c}:${f.toFixed(2)}:${n}:${i}:${a}:${l.toFixed(3)}`;
  if (Nt.has(p)) {
    const k = Nt.get(p);
    return Nt.delete(p), Nt.set(p, k), k;
  }
  Nt.size >= rc && Nt.delete(Nt.keys().next().value);
  const b = c * 2 + 2, w = c + 1, v = nc(b, b), S = v.getContext("2d"), I = f * c, _ = c + 1, L = `rgba(${n},${i},${a},${l})`, O = `rgba(${n},${i},${a},0)`, U = S.createRadialGradient(w, w, I, w, w, _);
  return U.addColorStop(0, L), U.addColorStop(1, O), S.fillStyle = U, S.fillRect(0, 0, b, b), Nt.set(p, v), v;
}
function Wv(e, t, n, i, a, l, c) {
  const { r: f, g: p, b, a: w } = i, v = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), I = Math.max(0, a), _ = Math.max(0, Math.min(0.99, l)), L = Math.max(0, Math.min(1, c ?? 0)), O = `chisel:${v}:${S}:${n.toFixed(2)}:${f}:${p}:${b}:${w.toFixed(3)}:${I.toFixed(2)}:${_.toFixed(2)}:${L.toFixed(2)}`;
  if (Nt.has(O)) {
    const Z = Nt.get(O);
    return Nt.delete(O), Nt.set(O, Z), Z;
  }
  Nt.size >= rc && Nt.delete(Nt.keys().next().value);
  const U = nc(v, S), k = U.getContext("2d"), $ = k.createImageData(v, S), D = $.data, E = Math.max(0, e - t), j = Math.max(0, Math.min(1, n)), ee = 1 + I;
  for (let Z = 0; Z < S; Z++)
    for (let W = 0; W < v; W++) {
      const A = W + 0.5 - e, Y = Z + 0.5 - t, ue = Math.max(Math.abs(A) - E, 0), me = Math.hypot(ue, Y) / t;
      if (me >= 1) continue;
      const X = me <= j ? 1 : Math.max(0, (1 - me) / Math.max(1e-4, 1 - j)), ce = 1 - me, P = 1 + I * (1 - ce) * (1 - ce), de = 1 - _ * ce * ce, Se = P * de / ee;
      let ke = 1;
      if (L > 0) {
        const Je = Math.floor((Y + t) / 1.5), it = Math.floor((A + e) / 8), gt = li(ea(Je * 41 + 500, it * 19 + 300));
        ke = 1 - L * 0.42 * gt;
      }
      const B = Math.round(255 * Math.min(1, w * X * Se * ke));
      if (B <= 0) continue;
      const Fe = (Z * v + W) * 4;
      D[Fe] = f, D[Fe + 1] = p, D[Fe + 2] = b, D[Fe + 3] = B;
    }
  return k.putImageData($, 0, 0), Nt.set(O, U), U;
}
function ea(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function li(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Yv(e, t, n, i, a, l, c) {
  const f = e + 0.5 - n, p = t + 0.5 - i, b = Math.max(0, n - i), w = Math.max(Math.abs(f) - b, 0), v = Math.hypot(w, p) / i;
  if (v >= 1) return 0;
  const S = li(ea(e * 17 + 3, t * 13 + 7)), I = v + l * 0.22 * (S - 0.5);
  if (I >= 1) return 0;
  const _ = I <= a ? 1 : Math.max(0, (1 - I) / Math.max(1e-4, 1 - a)), L = qv(e, t, f, p, n, i), O = l * 0.55;
  if (L < O) return 0;
  const k = 0.45 + 0.55 * ((L - O) / Math.max(1e-4, 1 - O));
  return Math.round(255 * Math.min(1, c * _ * k));
}
function qv(e, t, n, i, a, l) {
  const c = Math.floor((n + a) / 3), f = Math.floor((i + l) / 2), p = li(ea(c * 13 + 700, f * 17 + 400)), b = Math.floor((n + a) / 1.5), w = Math.floor((i + l) / 1.5), v = li(ea(b * 23 + 800, w * 29 + 500)), S = li(ea(e * 3 + 100, t * 5 + 200));
  return p * 0.55 + v * 0.3 + S * 0.15;
}
function Xv(e, t, n, i, a) {
  const { r: l, g: c, b: f, a: p } = i, b = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, a)), S = `crayon:${b}:${w}:${n.toFixed(2)}:${l}:${c}:${f}:${p.toFixed(3)}:${v.toFixed(2)}`;
  if (Nt.has(S)) {
    const k = Nt.get(S);
    return Nt.delete(S), Nt.set(S, k), k;
  }
  Nt.size >= rc && Nt.delete(Nt.keys().next().value);
  const I = nc(b, w), _ = I.getContext("2d"), L = _.createImageData(b, w), O = L.data, U = Math.max(0, Math.min(1, n));
  for (let k = 0; k < w; k++)
    for (let $ = 0; $ < b; $++) {
      const D = Yv($, k, e, t, U, v, p);
      if (D <= 0) continue;
      const E = (k * b + $) * 4;
      O[E] = l, O[E + 1] = c, O[E + 2] = f, O[E + 3] = D;
    }
  return _.putImageData(L, 0, 0), Nt.set(S, I), I;
}
function Tm(e, t, n) {
  var L, O;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = Gv(t, n), l = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = Jv(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), p = Number(((L = t == null ? void 0 : t.angle) == null ? void 0 : L.value) ?? 0), b = Bv(t, a), w = String(((O = t == null ? void 0 : t.targetSpace) == null ? void 0 : O.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && w !== "unwrap", S = t == null ? void 0 : t.scatter, I = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let _;
  if (i === "chisel") {
    const U = a * f, k = a, $ = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = Wv(U, k, l, c, $, D, E);
  } else if (i === "crayon") {
    const U = a * f, k = a, $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = Xv(U, k, l, c, $);
  } else
    _ = Kv(a, l, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: _, radiusPx: a, spacingPx: b, desc: n, aspect: f, angle: p, stampKind: i, scatter: I, latitudeCorrection: v };
}
function Jv(e) {
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
function Zv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function Md(e, t, n, i, a) {
  const l = e.angle, c = e.desc.width;
  function f(b, w) {
    l === 0 ? e.ctx.drawImage(e.stampTex, b - a, w - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(b, w), e.ctx.rotate(l), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  f(t, n);
  const p = l === 0 ? a : a * Math.abs(Math.cos(l)) + i * Math.abs(Math.sin(l));
  t - p < 0 && f(t + c, n), t + p > c && f(t - c, n);
}
function ic(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: b, count: w } = e.scatter, v = b * e.radiusPx * a, S = ea(t, n);
    for (let I = 0; I < w; I++) {
      const _ = li(S + I * 2) * Math.PI * 2, L = Math.sqrt(li(S + I * 2 + 1)) * v, O = t + Math.cos(_) * L, U = n + Math.sin(_) * L, k = Math.max(0.5, e.radiusPx * a * 0.48), $ = (0.5 - U / Math.max(1, e.desc.height)) * Math.PI, D = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos($)) : 1, E = k * e.aspect * D;
      Md(e, O, U, k, E);
    }
    return;
  }
  const l = Math.max(0.5, e.radiusPx * a), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, p = l * e.aspect * f;
  Md(e, t, n, l, p);
}
function kd(e, t, n) {
  const i = Uv(t);
  if (!e || i.length === 0) return;
  const a = n.width, l = n.height, c = Tm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < i.length; S++) {
    let I = Number(i[S].u || 0) * a;
    const _ = Number(i[S].v || 0) * l;
    S > 0 && Math.abs(I - f[S - 1].x) > a * 0.5 && (I += I < f[S - 1].x ? a : -a), f.push({ x: I, y: _ });
  }
  if (ic(c, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let p = f[0], b = f[0], w = f[0], v = 0;
  for (let S = 1; S < f.length; S++) {
    const I = f[S], _ = { x: (b.x + I.x) * 0.5, y: (b.y + I.y) * 0.5 };
    S === 1 ? v = Ya(c, w.x, w.y, _.x, _.y, v) : v = vs(c, p, w, _, I, v), p = b, b = I, w = _;
  }
  f.length === 2 ? Ya(c, w.x, w.y, b.x, b.y, v) : vs(c, p, w, b, b, v), e.restore();
}
function is(e, t, n) {
  var v;
  const i = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, l = n.height, c = Zv(t), f = [];
  let p = 1 / 0, b = -1 / 0;
  for (let S = 0; S < i.length; S++) {
    const I = Hv(i[S]);
    let _ = Number(I.x || 0) * a;
    S > 0 && Math.abs(_ - f[S - 1].x) > a * 0.5 && (_ += _ < f[S - 1].x ? a : -a), f.push({ x: _, y: Number(I.y || 0) * l }), _ < p && (p = _), _ > b && (b = _);
  }
  function w(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let I = 1; I < f.length; I++) e.lineTo(f[I].x + S, f[I].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, w(0), p < 0 && w(a), b > a && w(-a), e.restore();
}
function To(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    is(e, t, n);
    return;
  }
  const l = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  l >= 0.999 ? kd(e, t, n) : (ka = gr(ka, n.width, n.height), St(ka), kd(ka.ctx, t, n), e.save(), e.globalAlpha = l, e.drawImage(ka.canvas, 0, 0), e.restore());
}
function Zr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ya(e, t, n, i, a, l) {
  const c = i - t, f = a - n, p = Math.hypot(c, f);
  if (p < 1e-9) return l;
  let b = e.spacingPx - l;
  for (; b <= p; ) {
    const w = b / p;
    ic(e, t + c * w, n + f * w, 1), b += e.spacingPx;
  }
  return p - b + e.spacingPx;
}
function vs(e, t, n, i, a, l) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, w = 0, v = f, S = v + p, I = S + b, _ = S - v, L = 16;
  let O = l, U = n.x, k = n.y;
  for (let $ = 1; $ <= L; $++) {
    const D = v + _ * $ / L, E = ((v - D) * t.x + (D - w) * n.x) / (v - w), j = ((v - D) * t.y + (D - w) * n.y) / (v - w), ee = ((S - D) * n.x + (D - v) * i.x) / (S - v), Z = ((S - D) * n.y + (D - v) * i.y) / (S - v), W = ((I - D) * i.x + (D - S) * a.x) / (I - S), A = ((I - D) * i.y + (D - S) * a.y) / (I - S), Y = ((S - D) * E + (D - w) * ee) / (S - w), ue = ((S - D) * j + (D - w) * Z) / (S - w), fe = ((I - D) * ee + (D - v) * W) / (I - v), me = ((I - D) * Z + (D - v) * A) / (I - v), X = ((S - D) * Y + (D - v) * fe) / (S - v), ce = ((S - D) * ue + (D - v) * me) / (S - v);
    O = Ya(e, U, k, X, ce, O), U = X, k = ce;
  }
  return O;
}
function Qv(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const l = e.descriptor, c = l.width, f = n * l.height, p = e.activeStroke;
  let b = t * c;
  if (p && Math.abs(b - p.prev.x) > c * 0.5 && (b += b < p.prev.x ? c : -c), !p) {
    const I = Tm(a, i, l), _ = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), L = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), O = String((i == null ? void 0 : i.toolKind) || "") === "eraser", U = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", ic(I, b, f, 1), e.activeStroke = {
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
      strokeOpacity: _,
      velocityWidthFactor: L,
      distSinceStamp: 0,
      isEraser: O,
      layerKind: U,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const w = (p.prev.x + b) * 0.5, v = (p.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const S = {
    ctx: a,
    stampTex: p.stampTex,
    radiusPx: p.radiusPx,
    spacingPx: p.spacingPx,
    desc: l,
    aspect: p.aspect,
    angle: p.angle,
    stampKind: p.stampKind,
    scatter: p.scatter,
    latitudeCorrection: p.latitudeCorrection
  };
  p.pointCount === 1 ? p.distSinceStamp = Ya(S, p.lastMidX, p.lastMidY, w, v, p.distSinceStamp) : p.distSinceStamp = vs(
    S,
    p.pprev,
    { x: p.lastMidX, y: p.lastMidY },
    { x: w, y: v },
    { x: b, y: f },
    p.distSinceStamp
  ), p.pprev = p.prev, p.prev = { x: b, y: f }, p.lastMidX = w, p.lastMidY = v, p.pointCount++, e.displayDirty = !0;
}
function vu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), l = Bi(t, n), c = {
    descriptor: i,
    committedMask: Bi(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: Bi(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, p = Bi(t, n);
  let b = null, w = "", v = null;
  function S(A) {
    return {
      actionGroupId: A,
      descriptor: i,
      committedPaint: Bi(t, n),
      currentStroke: l,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function I(A) {
    let Y = a.get(A);
    return Y || (Y = S(A), a.set(A, Y)), Y;
  }
  function _(A) {
    return w === "mask" ? c : b ? I(b) : f;
  }
  function L(A) {
    var ce;
    const Y = !v || v.length !== A.length || A.some((P, de) => P !== v[de]), ue = w === "paint" && ((ce = b ? a.get(b) : f) == null ? void 0 : ce.activeStroke) || null;
    let fe = c.displayDirty || f.displayDirty || Y;
    for (const P of A) {
      const de = a.get(P);
      if (de != null && de.displayDirty) {
        fe = !0;
        break;
      }
    }
    if (ue && (fe = !0), !fe) return;
    c.displayDirty = !1, f.displayDirty = !1;
    for (const P of A) {
      const de = a.get(P);
      de && (de.displayDirty = !1);
    }
    v = [...A];
    const me = p.ctx;
    St(p);
    const X = !!(ue != null && ue.isEraser);
    for (const P of A) {
      const de = a.get(P);
      if (!de) continue;
      const ke = b === de.actionGroupId && w === "paint" ? de.activeStroke : null;
      if (X)
        Ct = gr(Ct, t, n), St(Ct), Ct.ctx.drawImage(de.committedPaint.canvas, 0, 0), Zr(Ct.ctx, l.canvas), me.drawImage(Ct.canvas, 0, 0);
      else if (me.drawImage(de.committedPaint.canvas, 0, 0), ke) {
        const B = de.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ke.strokeOpacity ?? 1));
        me.save(), me.globalAlpha = B, me.drawImage(l.canvas, 0, 0), me.restore();
      }
    }
  }
  function O(A) {
    var ue, fe, me, X, ce;
    for (const P of a.values())
      St(P.committedPaint), St(P.currentStroke), P.activeStroke = null, P.displayDirty = !0;
    St(c.committedMask), St(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, f.displayDirty = !0, v = null;
    const Y = [
      ...Array.isArray((fe = (ue = A == null ? void 0 : A.painting) == null ? void 0 : ue.paint) == null ? void 0 : fe.strokes) ? A.painting.paint.strokes : [],
      ...Array.isArray((X = (me = A == null ? void 0 : A.painting) == null ? void 0 : me.mask) == null ? void 0 : X.strokes) ? A.painting.mask.strokes : []
    ];
    for (const P of Y) {
      if (((ce = P == null ? void 0 : P.targetSpace) == null ? void 0 : ce.kind) !== "ERP_GLOBAL") continue;
      const de = String((P == null ? void 0 : P.layerKind) || "paint"), ke = String((P == null ? void 0 : P.toolKind) || "pen") === "eraser";
      if (de === "mask") {
        const B = c.descriptor;
        ke ? (Ct = gr(Ct, B.width, B.height), St(Ct), To(Ct.ctx, P, B), Zr(c.committedMask.ctx, Ct.canvas)) : To(c.committedMask.ctx, P, B);
        continue;
      }
      if (ke) {
        Ct = gr(Ct, i.width, i.height), St(Ct), To(Ct.ctx, P, i);
        for (const B of a.values())
          Zr(B.committedPaint.ctx, Ct.canvas), B.displayDirty = !0;
      } else {
        const B = String((P == null ? void 0 : P.actionGroupId) || "__default__"), Fe = I(B), Je = Fe.descriptor;
        To(Fe.committedPaint.ctx, P, Je), Fe.displayDirty = !0;
      }
    }
    L([...a.keys()]);
  }
  function U(A, Y) {
    w = String((A == null ? void 0 : A.layerKind) || "");
    const ue = String((A == null ? void 0 : A.toolKind) || "") === "eraser";
    if (w === "mask")
      b = null, St(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const fe = ue ? f : I(String((A == null ? void 0 : A.actionGroupId) || "__default__"));
      b = ue ? "" : String((A == null ? void 0 : A.actionGroupId) || "__default__"), St(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0;
    }
  }
  function k(A, Y) {
    var de;
    const ue = String((A == null ? void 0 : A.layerKind) || "paint"), fe = String((A == null ? void 0 : A.toolKind) || "") === "eraser", me = ue === "mask" ? c : fe ? f : I(String((A == null ? void 0 : A.actionGroupId) || b || "__default__")), X = me.activeStroke, ce = me.descriptor;
    if (X && X.pointCount > 1) {
      const Se = me.currentStroke.ctx;
      Se.globalCompositeOperation = "source-over";
      const ke = {
        ctx: Se,
        stampTex: X.stampTex,
        radiusPx: X.radiusPx,
        spacingPx: X.spacingPx,
        desc: ce,
        aspect: X.aspect,
        angle: X.angle,
        stampKind: X.stampKind,
        scatter: X.scatter,
        latitudeCorrection: X.latitudeCorrection
      };
      X.pointCount === 2 ? Ya(ke, X.lastMidX, X.lastMidY, X.prev.x, X.prev.y, X.distSinceStamp) : vs(ke, X.pprev, { x: X.lastMidX, y: X.lastMidY }, X.prev, X.prev, X.distSinceStamp);
    }
    me.lassoPreviewActive && (St(me.currentStroke), is(me.currentStroke.ctx, A, ce), me.lassoPreviewActive = !1);
    const P = ue === "mask" ? c.committedMask : me.committedPaint;
    if (fe && ue === "paint")
      for (const Se of a.values())
        Zr(Se.committedPaint.ctx, me.currentStroke.canvas), Se.displayDirty = !0;
    else if (fe)
      Zr(P.ctx, me.currentStroke.canvas);
    else {
      const Se = Math.max(0, Math.min(1, (X == null ? void 0 : X.strokeOpacity) ?? 1));
      P.ctx.save(), P.ctx.globalAlpha = Se, P.ctx.drawImage(me.currentStroke.canvas, 0, 0), P.ctx.restore();
    }
    Vv() && (String((A == null ? void 0 : A.toolKind) || ""), String((ce == null ? void 0 : ce.kind) || ""), Number((ce == null ? void 0 : ce.width) || 0), Number((ce == null ? void 0 : ce.height) || 0), String(((de = A == null ? void 0 : A.targetSpace) == null ? void 0 : de.viewMode) || ""), Number((A == null ? void 0 : A.aspect) ?? 1), wd(me.currentStroke.canvas), wd(P.canvas), void 0), St(me.currentStroke), me.activeStroke = null, me.displayDirty = !0, b = null, w = "", L([...a.keys()]);
  }
  function $(A) {
    if (w === "mask")
      St(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (w === "paint" && !b)
      St(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (b) {
      const Y = a.get(b);
      Y && (St(Y.currentStroke), Y.activeStroke = null, Y.lassoPreviewActive = !1, Y.displayDirty = !0);
    }
    b = null, w = "", L([...a.keys()]);
  }
  function D(A, Y) {
    var fe;
    if (w = String((A == null ? void 0 : A.layerKind) || ""), String(((fe = A == null ? void 0 : A.geometry) == null ? void 0 : fe.geometryKind) || "") === "lasso_fill") {
      if (w === "mask")
        St(c.currentStroke), is(c.currentStroke.ctx, A, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const me = String((A == null ? void 0 : A.toolKind) || "") === "eraser", X = me ? f : I(String((A == null ? void 0 : A.actionGroupId) || b || "__default__"));
        b = me ? "" : String((A == null ? void 0 : A.actionGroupId) || b || "__default__"), St(X.currentStroke), is(X.currentStroke.ctx, A, X.descriptor), X.lassoPreviewActive = !0, X.displayDirty = !0;
      }
      L([...a.keys()]);
    }
  }
  function E(A) {
    return L(A ?? [...a.keys()]), {
      displayPaint: p,
      committedMask: c.committedMask,
      descriptor: i
    };
  }
  function j(A) {
    return a.get(String(A)) ?? null;
  }
  function ee() {
    return [...a.keys()];
  }
  function Z(A) {
    var ce;
    const Y = a.get(String(A));
    if (!Y) return null;
    const ue = w === "paint" && b === Y.actionGroupId, fe = w === "paint" && ((ce = b ? a.get(b) : f) == null ? void 0 : ce.activeStroke) || null;
    if (fe != null && fe.isEraser)
      return ln = gr(ln, t, n), St(ln), ln.ctx.drawImage(Y.committedPaint.canvas, 0, 0), Zr(ln.ctx, l.canvas), ln.canvas;
    const me = ue ? Y.activeStroke : null;
    if (!me) return Y.committedPaint.canvas;
    ln = gr(ln, t, n), St(ln), ln.ctx.drawImage(Y.committedPaint.canvas, 0, 0);
    const X = Y.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, me.strokeOpacity ?? 1));
    return ln.ctx.save(), ln.ctx.globalAlpha = X, ln.ctx.drawImage(l.canvas, 0, 0), ln.ctx.restore(), ln.canvas;
  }
  function W() {
    return Er = gr(Er, t, n), St(Er), Xl(Er.ctx, c.committedMask.canvas), w === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (Ct = gr(Ct, t, n), St(Ct), Ct.ctx.drawImage(c.committedMask.canvas, 0, 0), Zr(Ct.ctx, l.canvas), St(Er), Xl(Er.ctx, Ct.canvas)) : Xl(Er.ctx, l.canvas)), Er.canvas;
  }
  return {
    rebuildCommitted: O,
    beginStroke: U,
    appendStrokePoint: Qv,
    updateActiveStroke: D,
    commitActiveStroke: k,
    cancelActiveStroke: $,
    getErpTarget: E,
    ensureTarget: _,
    getGroupTarget: j,
    getGroupDisplayCanvas: Z,
    getMaskDisplayCanvas: W,
    getAllGroupIds: ee
  };
}
function J(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Jl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function e1(e, t) {
  let n = Ht(t) - Ht(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Pd = Math.PI / 180, Ad = 0.12, t1 = 3, n1 = 35, r1 = 140, Ea = 100, i1 = 20, Cd = 0.8;
function a1(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), l = J(Number(e || Ea), 1, 179) * Pd;
  return 2 * Math.atan(Math.tan(l * 0.5) * (a / i)) / Pd;
}
function o1(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function Gs(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ea })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), l = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, p = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(U, k = null) {
    f && f(U, k);
  }
  function w(U, k, $ = null, D = performance.now()) {
    return p.drag.active = !0, p.drag.lastX = Number(U || 0), p.drag.lastY = Number(k || 0), p.drag.lastTs = Number(D || performance.now()), p.drag.pointerId = $, p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.lastTs = p.drag.lastTs, p.velHistory = [], b("drag", { phase: "start", x: p.drag.lastX, y: p.drag.lastY, pointerId: $ }), !0;
  }
  function v(U, k, $ = "pano", D = performance.now()) {
    if (!p.drag.active) return !1;
    const E = Number(D || performance.now()), j = Number(U), ee = Number(k), Z = j - p.drag.lastX, W = ee - p.drag.lastY;
    p.drag.lastX = j, p.drag.lastY = ee, p.drag.lastTs = E;
    const A = i() || { x: 1, y: 1 }, Y = Number(A.x || 1), ue = Number(A.y || 1), fe = { ...t() };
    let me = 0, X = 0;
    if ($ === "unwrap") {
      const P = a() || { w: 1, h: 1 }, de = Math.max(1, Number(P.w || 1)), Se = Math.max(1, Number(P.h || 1)), ke = Z / de, B = W / Se;
      me = -ke * 360 * Y, X = B * 180 * ue;
    } else {
      const P = l() || { w: 0, h: 0 }, de = Math.max(1, Number(P.w || 0)), Se = Math.max(1, Number(P.h || 0));
      if (de > 1 && Se > 1) {
        const ke = J(Number(fe.fov || Ea), 1, 179), B = J(a1(ke, de, Se), 0.1, 179);
        me = -(Z / de) * ke * Y, X = W / Se * B * ue;
      } else
        me = -Z * Ad * Y, X = W * Ad * ue;
    }
    fe.yaw = Ht(Number(fe.yaw || 0) + me), fe.pitch = J(Number(fe.pitch || 0) + X, -89.9, 89.9), n(fe), p.velHistory.push({ ts: E, yaw: fe.yaw, pitch: fe.pitch });
    let ce = 0;
    for (; ce < p.velHistory.length - 1 && p.velHistory[ce].ts < E - 100; ) ce++;
    return ce > 0 && p.velHistory.splice(0, ce), p.inertia.active = !1, p.inertia.lastTs = E, c(), b("drag", { phase: "move", dx: Z, dy: W, dYaw: me, dPitch: X }), !0;
  }
  function S(U = performance.now()) {
    if (!p.drag.active) return !1;
    p.drag.active = !1;
    const k = Number(U || performance.now());
    p.drag.lastTs = k;
    const $ = p.velHistory.filter((E) => k - E.ts <= 80);
    if ($.length >= 2) {
      const E = $[0], j = $.at(-1), ee = Math.max(1e-3, (j.ts - E.ts) / 1e3);
      let Z = j.yaw - E.yaw;
      Z > 180 && (Z -= 360), Z < -180 && (Z += 360), p.inertia.vx = Z / ee, p.inertia.vy = (j.pitch - E.pitch) / ee;
    } else
      p.inertia.vx = 0, p.inertia.vy = 0;
    p.velHistory = [];
    const D = Math.hypot(p.inertia.vx, p.inertia.vy);
    return p.inertia.active = D > i1, p.inertia.lastTs = k, b("drag", { phase: "end", speed: D, inertiaActive: p.inertia.active }), !0;
  }
  function I(U = performance.now()) {
    if (!p.inertia.active) return !1;
    const k = Number(U || performance.now()), $ = Math.max(1e-3, (k - (p.inertia.lastTs || k)) / 1e3);
    p.inertia.lastTs = k;
    const D = { ...t() };
    D.yaw = Ht(Number(D.yaw || 0) + p.inertia.vx * $), D.pitch = J(Number(D.pitch || 0) + p.inertia.vy * $, -89.9, 89.9);
    const E = Math.exp(-5.5 * $);
    return p.inertia.vx *= E, p.inertia.vy *= E, Math.abs(p.inertia.vx) < Cd && Math.abs(p.inertia.vy) < Cd && (p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.active = !1), n(D), c(), p.inertia.active;
  }
  function _(U) {
    const k = Math.sign(Number(U || 0));
    if (!k) return !1;
    const $ = { ...t() }, D = Number($.fov || Ea);
    return $.fov = J(D + k * t1, n1, r1), n($), c(), b("wheel", { deltaSign: k, fovBefore: D, fovAfter: $.fov }), !0;
  }
  function L(U) {
    return _(Math.sign(o1(U)));
  }
  function O() {
    n({ yaw: 0, pitch: 0, fov: Ea }), p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, c();
  }
  return {
    state: p,
    startDrag: w,
    moveDrag: v,
    endDrag: S,
    stepInertia: I,
    applyWheel: _,
    applyWheelEvent: L,
    resetView: O
  };
}
function _s(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const Td = Math.PI / 180;
function Pa(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function s1(e) {
  const t = e || {}, n = Pa(t.yaw_deg, 0), i = Pa(t.pitch_deg, 0), a = Pa(t.roll_deg ?? t.rot_deg, 0), l = Jl(Pa(t.hFOV_deg, 90), 1, 179), c = Jl(Pa(t.vFOV_deg, 60), 1, 179), f = Math.tan(l * Td * 0.5) / Math.max(1e-6, Math.tan(c * Td * 0.5)), p = Jl(f, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: l,
    vfov: c,
    aspect: p
  };
}
const Im = 0.28;
function l1(e) {
  const t = e && typeof e == "object" ? e : {}, n = J(Number(t.x0 ?? 0), 0, 1), i = J(Number(t.y0 ?? 0), 0, 1), a = J(Number(t.x1 ?? 1), 0, 1), l = J(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, l),
    x1: Math.max(n, a),
    y1: Math.max(i, l)
  };
}
function u1(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), l = t.includeHidden === !0, c = e.visible === !1, f = l && i && c;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: J(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: J(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: l1(e.crop),
    opacity: f ? Im : J(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: i
  };
}
function Bs(e, t = {}) {
  var l;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((c) => u1(c, { includeHidden: i })).filter((c) => c && (i || c.visible !== !1)).sort((c, f) => Number(c.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((l = e == null ? void 0 : e.active) == null ? void 0 : l.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function Dm(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || Bs(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, l = [], c = /* @__PURE__ */ new Set();
  return i.stickers.forEach((f) => {
    var _;
    const p = String((f == null ? void 0 : f.assetId) || "").trim(), b = p || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!b || c.has(b)) return;
    const w = p ? a[p] : null, v = t(b, w, f);
    if (v instanceof HTMLImageElement && !v.complete) return;
    const S = Number((v == null ? void 0 : v.naturalWidth) || (v == null ? void 0 : v.videoWidth) || (v == null ? void 0 : v.width) || 0), I = Number((v == null ? void 0 : v.naturalHeight) || (v == null ? void 0 : v.videoHeight) || (v == null ? void 0 : v.height) || 0);
    !v || S <= 0 || I <= 0 || (c.add(b), l.push({
      assetId: b,
      source: v,
      revision: String(((_ = n.revisionFor) == null ? void 0 : _.call(n, b, w, v)) ?? [
        b,
        Number(v.naturalWidth || v.videoWidth || v.width || 0),
        Number(v.naturalHeight || v.videoHeight || v.height || 0),
        String(v.currentSrc || v.src || "")
      ].join("|"))
    }));
  }), l;
}
function xs(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: J(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function c1(e, t = 360) {
  return xs(e, t);
}
function nr(e) {
  const t = s1(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: J(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: J(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const or = Math.PI / 180, ua = 180 / Math.PI;
function fi(e, t, n) {
  return { x: e, y: t, z: n };
}
function Id(e, t) {
  return fi(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Io(e, t) {
  return fi(e.x * t, e.y * t, e.z * t);
}
function Dd(e, t) {
  return fi(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Do(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return fi(e.x / t, e.y / t, e.z / t);
}
function f1(e, t) {
  const n = e * or, i = t * or, a = Math.cos(i);
  return fi(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function d1(e, t, n = 0) {
  const i = f1(e, t), a = fi(0, 1, 0);
  let l = Dd(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = fi(1, 0, 0)), l = Do(l);
  const c = Do(Dd(i, l)), f = n * or, p = Math.cos(f), b = Math.sin(f), w = Id(Io(l, p), Io(c, b)), v = Id(Io(l, -b), Io(c, p));
  return { fwd: i, right: Do(w), up: Do(v) };
}
const jr = 1, Hr = 179, _u = 85;
function Em(e) {
  const t = ((tt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Om(e, t) {
  let n = tt(e, 0) - tt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Rm(e, t, { shiftKey: n = !1 } = {}) {
  let i = tt(e, 0) + tt(t, 0) * ua;
  return n && (i = Math.round(i / 15) * 15), Em(i);
}
function tt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Ks(e = {}) {
  const t = J(tt(e.hFOV_deg, 90), jr, Hr), n = J(tt(e.vFOV_deg, 60), jr, Hr), i = Math.tan(t * or * 0.5), a = Math.tan(n * or * 0.5);
  return {
    yawDeg: tt(e.yaw_deg, 0),
    pitchDeg: tt(e.pitch_deg, 0),
    rollDeg: tt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: i,
    tanHalfY: a,
    aspect: i / Math.max(1e-12, a)
  };
}
function ta(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Ks(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    i / (2 * a.tanHalfY)
  ));
}
function ac(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, tt(t, 1)), l = Math.min(n, i * a);
  return { width: l, height: l / a };
}
function Fm(e, t) {
  const n = Math.max(1e-12, tt(t, 1)), i = Math.max(1e-6, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), l = J(2 * Math.atan(i / (2 * n)) * ua, jr, Hr), c = J(2 * Math.atan(a / (2 * n)) * ua, jr, Hr);
  return { hFOV_deg: l, vFOV_deg: c };
}
function h1(e, t, n) {
  const i = tt(e == null ? void 0 : e.x, 0), a = tt(e == null ? void 0 : e.y, 0), l = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = Ks(t), p = Math.max(1e-12, tt(n, 1)), b = 2 * p * f.tanHalfX, w = 2 * p * f.tanHalfY;
  return {
    x: i + (l - b) * 0.5,
    y: a + (c - w) * 0.5,
    w: b,
    h: w,
    focalPx: p
  };
}
function xu(e, t, n = _u) {
  const i = Math.max(1e-12, tt(t, 1)), a = J(tt(n, _u), 1, 89.999), l = i * Math.tan(a * or), c = Math.max(1, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, l),
    halfH: Math.min(f * 0.5, l)
  };
}
function as(e, t) {
  const n = J(tt(e, 60), jr, Hr), i = Math.max(1e-6, tt(t, 1));
  return J(
    2 * Math.atan(Math.tan(n * or * 0.5) * i) * ua,
    jr,
    Hr
  );
}
function Ed(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function m1(e, t) {
  const n = Ed(e, 1), i = Ed(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, l = Math.max(1, Math.round(n * a)), c = Math.max(1, Math.round(i * a)), f = (b, w) => w ? f(w, b % w) : b, p = f(l, c) || 1;
  return `${Math.max(1, Math.round(l / p))}:${Math.max(1, Math.round(c / p))}`;
}
function na(e) {
  const t = J(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * or, n = J(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * or;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function ri(e) {
  const t = na(e), i = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, a]) => Math.abs(t - a) <= 0.015);
  return (i == null ? void 0 : i[0]) || m1(t, 1);
}
function Lm(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = ri(t), t;
}
function zm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  viewFovDeg: i = 100
} = {}) {
  const a = J(Math.min(42, tt(i, 100) * 0.42), 8, 96);
  return Lm({
    id: String(e),
    label: "Frame 1",
    yaw_deg: tt(t, 0),
    pitch_deg: J(tt(n, 0), -89.9, 89.9),
    roll_deg: 0,
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function br(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : ri(e);
}
function $m(e, t) {
  const n = Ks(e), i = tt(t, 1);
  if (!(i > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * i) * ua, l = 2 * Math.atan(n.tanHalfY * i) * ua;
  return a < jr || a > Hr || l < jr || l > Hr ? null : { hFOV_deg: a, vFOV_deg: l };
}
const wu = Math.PI / 180, qi = 180 / Math.PI, p1 = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), g1 = 260;
function Od(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Vm(e, t) {
  return t ? Vm(t, e % t) : e;
}
function b1(e, t) {
  const i = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, a = i ? 1e3 : 1e6, l = i ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / l * a)), f = Math.max(1, Math.round(t / l * a)), p = Vm(c, f) || 1;
  return `${Math.round(c / p)}:${Math.round(f / p)}`;
}
function qa(e, t) {
  const n = Od(e), i = Od(t);
  if (n == null || i == null) return null;
  const a = n / i;
  return !Number.isFinite(a) || a <= 0 ? null : { width: n, height: i, ratio: a, label: b1(n, i) };
}
function ui(e) {
  var i;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((i = e == null ? void 0 : e.active) == null ? void 0 : i.selected_shot_id) || "");
  return t.find((a) => String((a == null ? void 0 : a.id) || "") === n) || t[0] || null;
}
function Su(e) {
  const t = ui(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), i = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? br(t) : "",
    rollDeg: n,
    rollLabel: `${i.toFixed(1)}°`
  };
}
function y1(e, t, n = p1) {
  const i = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), l = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), p = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (O, U, k) => {
    const $ = O + U, D = Math.max(0, k - 1), E = $ > D && $ > 0 ? D / $ : 1;
    return [O * E, U * E];
  }, [w, v] = b(p, c, i), [S, I] = b(l, f, a), _ = {
    x: w,
    y: S,
    w: Math.max(1, i - w - v),
    h: Math.max(1, a - S - I)
  }, L = ac(_, t);
  return {
    x: _.x + (_.w - L.width) * 0.5,
    y: _.y + (_.h - L.height) * 0.5,
    w: L.width,
    h: L.height,
    safeRect: _
  };
}
function v1(e, t, n) {
  const i = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), l = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = ta(t, n), p = {
    width: Math.max(l, i - l) * 2,
    height: Math.max(c, a - c) * 2
  }, { halfW: b, halfH: w } = xu(p, f), v = {
    x: l - b,
    y: c - w,
    w: b * 2,
    h: w * 2
  }, S = v.x <= 0 && v.y <= 0 && v.x + v.w >= i && v.y + v.h >= a, I = i / a, _ = Math.tan(_u * wu), L = I >= 1 ? _ : _ * I, O = I >= 1 ? _ / I : _;
  return {
    focalPx: f,
    rect: v,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / f) * qi,
      vFOV_deg: 2 * Math.atan(w / f) * qi
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: i, h: a },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(L) * qi,
        vFOV_deg: 2 * Math.atan(O) * qi
      }
    }
  };
}
function Aa(e, t) {
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
function _1(e, t, n) {
  const i = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), a = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(i) && i > 0 && Number.isFinite(a) && a > 0) {
    const c = ta(n, e);
    return Fm(ac(n, t), c);
  }
  const l = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: l, hFOV_deg: as(l, t) };
}
function Rd(e, t, n, { preserveOrientation: i = !1, safeRect: a = null } = {}) {
  let l = qa(t, n);
  if (!l) return e;
  const c = na(e) >= 1;
  i && l.ratio >= 1 !== c && (l = qa(l.height, l.width));
  const f = _1(e, l.ratio, a);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === l.label ? e : { ...e, ...f, aspect_id: l.label };
}
function Nu(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ui(e)) return { state: e, changed: !1 };
    const i = String(t.id || `frame_${Date.now().toString(36)}`), a = zm({
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
    return Aa(e, (i) => Rd(
      i,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Aa(e, (i) => {
      const l = String(br(i) || "").match(/^([0-9.]+):([0-9.]+)$/), c = l ? qa(l[1], l[2]) : qa(na(i), 1);
      return c ? Rd(i, c.height, c.width, { safeRect: t.safeRect }) : i;
    });
  if (t.type === "set-roll") {
    const i = Number(t.value);
    return Number.isFinite(i) ? Aa(e, (a) => {
      const l = Em(i), c = Number(a.roll_deg ?? a.rot_deg ?? 0);
      if (Math.abs(c - l) <= 1e-12) return a;
      const f = { ...a, roll_deg: l };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Aa(e, (i) => {
    const a = $m(i, t.scale);
    return a ? { ...i, ...a } : i;
  }) : t.type === "pan-camera" ? Aa(e, (i) => {
    const a = Um(t.startShot || i, t);
    return Math.abs(Number(a.yaw_deg) - Number(i.yaw_deg || 0)) > 1e-12 || Math.abs(Number(a.pitch_deg) - Number(i.pitch_deg || 0)) > 1e-12 ? { ...i, yaw_deg: a.yaw_deg, pitch_deg: a.pitch_deg } : i;
  }) : { state: e, changed: !1 };
}
function jm({
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
  const p = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, b = {
    x: p.x + p.w * 0.5,
    y: p.y + p.h * 0.5
  }, w = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (f === "shift" && w < Math.min(p.w, p.h) * c) return null;
  const v = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: f,
    frame: p,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: v,
    accumulatedRad: 0
  };
}
function Hm(e, t, n = {}) {
  var c, f;
  if (!e || !t) return null;
  const i = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), a = Number(e.accumulatedRad || 0) + Om(i, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: i, accumulatedRad: a },
    rollDeg: Rm(e.startRollDeg, a, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Um(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), i = t.invertX === !0 ? -1 : 1, a = t.invertY === !0 ? -1 : 1, l = Number(t.dx || 0) * i, c = Number(t.dy || 0) * a, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * wu, p = Math.cos(f), b = Math.sin(f), w = l / n, v = -c / n, S = w * p - v * b, I = w * b + v * p, _ = Number(e.pitch_deg || 0) * wu, L = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(S) / L * qi),
    pitch_deg: J(Number(e.pitch_deg || 0) - Math.atan(I) * qi, -90, 90)
  };
}
function x1({
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
  const c = () => a || e(), f = () => i(Su(c()));
  return {
    model: () => Su(c()),
    refresh() {
      return f(), this.model();
    },
    beginGesture() {
      return a ? !1 : (a = e(), l = !1, f(), !0);
    },
    updateGesture(p) {
      a || this.beginGesture();
      const b = Nu(a, p);
      return b.changed ? (a = b.state, l = !0, t(a), f(), !0) : !1;
    },
    commitGesture() {
      if (!a) return !1;
      const p = l;
      return p && n(a), a = null, l = !1, t(null), f(), p;
    },
    cancelGesture() {
      return a ? (a = null, l = !1, t(null), f(), !0) : !1;
    },
    apply(p) {
      a && this.cancelGesture();
      const b = Nu(e(), p);
      return b.changed ? (n(b.state), f(), !0) : !1;
    },
    destroy() {
      a && (a = null, l = !1, t(null));
    }
  };
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
}), w1 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, S1 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: w1(t[2])
})), N1 = {
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
}, Fd = Object.fromEntries(
  Object.entries(N1).map(([e, t]) => [e, {
    name: t.name,
    elements: S1(t.body)
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
      return Object.prototype.hasOwnProperty.call(Fd, i) ? Fd[i] : null;
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
      (Me(!0), Pe(Ze, null, Rt(n.value.elements, (l, c) => (Me(), Pe(Ze, {
        key: `${n.value.name || e.icon || "icon"}-${l.tag}-${c}`
      }, [
        l.tag === "path" ? (Me(), Pe("path", Fr({
          key: 0,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "circle" ? (Me(), Pe("circle", Fr({
          key: 1,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "rect" ? (Me(), Pe("rect", Fr({
          key: 2,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "line" ? (Me(), Pe("line", Fr({
          key: 3,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polyline" ? (Me(), Pe("polyline", Fr({
          key: 4,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polygon" ? (Me(), Pe("polygon", Fr({
          key: 5,
          ref_for: !0
        }, l.attrs), null, 16)) : Et("", !0)
      ], 64))), 128))
    ], 2)) : Et("", !0);
  }
}, An = {
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
    return (i, a) => (Me(), gi(iy(e.tag), Fr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Yh(() => [
        je(en, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, M1 = ["aria-expanded", "disabled"], k1 = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, P1 = ["data-aspect", "disabled", "onClick"], A1 = { class: "pano-cutout-aspect-custom" }, C1 = ["disabled"], T1 = ["disabled"], I1 = ["disabled"], Gm = {
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
    ]), l = /* @__PURE__ */ yn("1"), c = /* @__PURE__ */ yn("1"), f = /* @__PURE__ */ yn(null), p = mt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = mt(() => {
      const L = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], O = String(n.model.aspectLabel || "");
      return L.length ? L.map((U) => {
        const k = typeof U == "string" ? U : String((U == null ? void 0 : U.value) || ""), $ = typeof U == "string" ? U : String((U == null ? void 0 : U.label) || k);
        return {
          ...typeof U == "object" && U ? U : {},
          value: k,
          label: $,
          active: O ? k === O : (U == null ? void 0 : U.active) === !0
        };
      }) : a.map((U) => ({
        ...U,
        active: U.value === O
      }));
    }), w = mt(() => {
      var O;
      const L = String(n.model.aspectLabel || "").trim();
      return L || String(((O = b.value.find((U) => U.active === !0)) == null ? void 0 : O.label) || "Aspect");
    });
    si(w, (L) => {
      const O = String(L || "").match(/^([0-9.]+):([0-9.]+)$/);
      O && (l.value = O[1], c.value = O[2]);
    }, { immediate: !0 });
    function v(L) {
      i("action", L);
    }
    function S(L) {
      var O;
      n.model.aspectOpen === !0 && ((O = f.value) != null && O.contains(L.target) || v({ type: "close-aspect" }));
    }
    Xu(() => {
      document.addEventListener("pointerdown", S, !0);
    }), $s(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function I(L) {
      const [O, U] = String(L.value || "").split(":");
      v({
        type: "set-aspect",
        width: O,
        height: U,
        preserveOrientation: !0
      });
    }
    function _() {
      v({
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
      e.mode === "rail" ? (Me(), gi(An, {
        key: 0,
        icon: e.model.aspectIcon || Ut(Ee).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: p.value },
        onClick: O[0] || (O[0] = (U) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Me(), Pe("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: p.value,
        onClick: O[1] || (O[1] = (U) => v({ type: "toggle-aspect" }))
      }, [
        je(en, {
          icon: e.model.aspectIcon || Ut(Ee).aspect
        }, null, 8, ["icon"]),
        ie("span", null, lt(w.value), 1),
        je(en, {
          icon: Ut(Ee).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, M1)),
      oi(ie("div", k1, [
        (Me(!0), Pe(Ze, null, Rt(b.value, (U) => (Me(), Pe("button", {
          key: U.value,
          class: st(["pano-btn pano-frame-aspect-choice", { active: U.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": U.value,
          disabled: p.value,
          onClick: (k) => I(U)
        }, lt(U.label), 11, P1))), 128)),
        ie("div", A1, [
          oi(ie("input", {
            "onUpdate:modelValue": O[2] || (O[2] = (U) => l.value = U),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: p.value
          }, null, 8, C1), [
            [gd, l.value]
          ]),
          O[4] || (O[4] = ie("span", { "aria-hidden": "true" }, ":", -1)),
          oi(ie("input", {
            "onUpdate:modelValue": O[3] || (O[3] = (U) => c.value = U),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: p.value
          }, null, 8, T1), [
            [gd, c.value]
          ]),
          ie("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            disabled: p.value,
            onClick: _
          }, "Apply", 8, I1)
        ])
      ], 512), [
        [no, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, D1 = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, E1 = {
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
      onPointerdown: a[1] || (a[1] = zr(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = zr(() => {
      }, ["stop"]))
    }, [
      je(An, {
        icon: Ut(Ee).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: a[0] || (a[0] = zr((l) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ie("div", D1, [
        a[3] || (a[3] = ie("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Me(!0), Pe(Ze, null, Rt(Ut(n), (l) => (Me(), Pe("div", {
          key: l[0],
          class: "pano-cutout-node-help-row"
        }, [
          ie("kbd", null, lt(l[0]), 1),
          ie("span", null, lt(l[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, O1 = { class: "pano-cutout-node-surface" }, R1 = ["title", "disabled"], F1 = { class: "value" }, L1 = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, z1 = {
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
    return (i, a) => (Me(), Pe("div", O1, [
      ie("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: a[4] || (a[4] = zr(() => {
        }, ["stop"])),
        onWheel: a[5] || (a[5] = zr(() => {
        }, ["stop"]))
      }, [
        ie("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          je(en, {
            icon: Ut(Ee).fullscreen
          }, null, 8, ["icon"]),
          a[6] || (a[6] = ie("span", { class: "label" }, "Full Editor", -1))
        ]),
        je(An, {
          icon: e.model.hasShot ? Ut(Ee).delete : Ut(Ee).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: a[1] || (a[1] = (l) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        je(Gm, {
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
          onDblclick: a[2] || (a[2] = zr((l) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          je(en, {
            icon: Ut(Ee).roll
          }, null, 8, ["icon"]),
          ie("span", F1, lt(e.model.rollLabel || "0.0°"), 1)
        ], 40, R1),
        je(An, {
          icon: Ut(Ee).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: a[3] || (a[3] = (l) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        je(E1)
      ], 32),
      e.model.hasShot === !1 ? (Me(), Pe("div", L1, " Choose a view · + Add Frame ")) : Et("", !0)
    ]));
  }
};
let Eo = null;
function Bm() {
  return Eo || (Eo = new Promise((e) => {
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
  }), Eo);
}
const { app: xt } = Jo;
function Mu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Jo == null ? void 0 : Jo.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const di = Math.PI / 180, ws = {}, $1 = { Nu: 24, Nv: 14 }, V1 = 10, j1 = "pano_suite.ui_settings.v1", H1 = 120;
function Ld() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(j1)) || "").trim();
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
function U1() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ca(e) {
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
function G1() {
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
function Km(e) {
  const t = hi(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Wm(e, t, n) {
  Km(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function ku(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function oc(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Ym(e) {
  return _s(oc(e));
}
function ci(e = null) {
  var l, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((c = (l = xt == null ? void 0 : xt.canvas) == null ? void 0 : l.constructor) == null ? void 0 : c.name) || "");
  return [t, i, n, a].join("|");
}
function qm(e, t = null) {
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
const ja = {
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
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, sc(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function sc(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : qm(i, e).chosenPath, l = ku(e);
      this.activeBackend = l;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, p = n.noPreview === !0;
      if (l === a && l !== "none" && c === i && f === p) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = p, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      l !== "none" && ra(e, { keepMonitor: i === "stickers" }), D_(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = ku(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ra(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      ra(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function B1(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ra(e, t = {}) {
  var i, a, l, c, f;
  if (!e) return;
  Ns.unregister(e), B1(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((p) => {
      if (p === (n == null ? void 0 : n.widget)) return !1;
      const b = String((p == null ? void 0 : p.name) || ""), w = String((p == null ? void 0 : p.type) || ""), v = Mu();
      return !(b === v || w === v || b === "pano_preview" || w === "pano_preview" || b === "preview" && w === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || ja.unregister(e);
}
function mi(e, t, n) {
  return { x: e, y: t, z: n };
}
function zd(e, t) {
  return mi(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Oo(e, t) {
  return mi(e.x * t, e.y * t, e.z * t);
}
function Zl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function $d(e, t) {
  return mi(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ro(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return mi(e.x / t, e.y / t, e.z / t);
}
function ni(e, t) {
  const n = e * di, i = t * di, a = Math.cos(i);
  return mi(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function lc(e, t, n = 0) {
  const i = ni(e, t), a = mi(0, 1, 0);
  let l = $d(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = mi(1, 0, 0)), l = Ro(l);
  let c = Ro($d(i, l));
  const f = n * di, p = Math.cos(f), b = Math.sin(f), w = zd(Oo(l, p), Oo(c, b)), v = zd(Oo(l, -b), Oo(c, p));
  return { fwd: i, right: Ro(w), up: Ro(v) };
}
function K1(e, t = "#00ff00") {
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
function W1(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ia(e, "state_json")) == null ? void 0 : n.value) || "");
}
function _r(e) {
  var f, p;
  const t = W1(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((f = ia(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((p = ia(e, "coverage")) == null ? void 0 : p.value) || 360) === 180 ? 180 : 360, l = e.__panoStateCache;
  if (l && l.source === t && l.liveVersion === n && l.bg === i && l.coverage === a)
    return l.parsed;
  const c = K1(t, i);
  return c.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: c }, c;
}
function ia(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Vd(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function Xm(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Y1(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function Jm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Zm(e, t, n = null) {
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
  return !i && n != null && (i = Y1(e == null ? void 0 : e.graph, n)), i;
}
function q1(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function uc(e, t = []) {
  const n = q1(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function jd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Ss(e, t) {
  const n = jd(e), i = jd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function X1(e, t = ["erp_image", "bg_erp"]) {
  var p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = uc(e, t).map((b) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(b))).filter((b) => b >= 0), l = n.map((b, w) => ({ input: b, idx: w })).filter(({ input: b }) => String((b == null ? void 0 : b.type) || "").toUpperCase() === "IMAGE").map(({ idx: b }) => b), c = [.../* @__PURE__ */ new Set([...a, ...l])], f = [];
  for (const b of c) {
    const w = Zm(e, b);
    if ((w == null ? void 0 : w.id) != null) {
      f.push(String(w.id));
      continue;
    }
    const v = (p = n[b]) == null ? void 0 : p.link;
    if (v == null) continue;
    const S = Xm(e == null ? void 0 : e.graph, v), { originId: I } = Jm(S);
    I != null && f.push(String(I));
  }
  return [...new Set(f)];
}
const Ns = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = wn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((l) => {
        var b, w, v, S, I;
        if (!l) return;
        const c = Ss(i, l == null ? void 0 : l.id);
        X1(l, ["erp_image", "bg_erp"]).some((_) => Ss(i, _)), !(String(l.__panoPreviewMode || "") === "cutout" && !c) && (Au(l), (w = (b = l.__panoDomPreview) == null ? void 0 : b.requestDraw) == null || w.call(b), (v = l.setDirtyCanvas) == null || v.call(l, !0, !0), (I = (S = l.graph) == null ? void 0 : S.setDirtyCanvas) == null || I.call(S, !0, !0), String(l.__panoPreviewMode || ""), String(l.__panoPreviewMode || ""), void 0);
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
function Ms(e) {
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
function J1(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Z1(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function Q1(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function e_(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (J1(t)) return [t];
  const { filename: n, subfolder: i } = Z1(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => Ms({
    filename: n,
    subfolder: i,
    type: l
  }));
  return Q1([...a, t]);
}
function t_(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Ms({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Hd(e) {
  const t = xt == null ? void 0 : xt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (Ss(l, a)) return t.get(l);
  } else {
    const l = Object.keys(t);
    for (const c of l)
      if (Ss(c, a)) return t[c];
  }
  return null;
}
function Sr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Sr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Ms({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Sr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ms(e);
}
function n_(e) {
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
function r_(e, t) {
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
function i_(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (l) => {
    Array.isArray(l) && l.forEach((c) => t.push(c));
  }, a = (l, c = 0) => {
    !l || c > 3 || n.has(l) || typeof l == "object" && (n.add(l), i(l.images), a(l.output, c + 1), a(l.ui, c + 1), a(l.data, c + 1), a(l.result, c + 1));
  };
  return a(e, 0), t;
}
function a_(e, t) {
  try {
    const n = i_(t);
    let i = "";
    for (const a of n)
      if (i = Sr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), r_(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function o_(e, t = []) {
  var b, w;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = uc(e, t).map((v) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(v))).filter((v) => v >= 0), l = n.map((v, S) => ({ input: v, idx: S })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), c = [.../* @__PURE__ */ new Set([...a, ...l])];
  for (const v of c) {
    const S = n[v], I = S == null ? void 0 : S.link;
    if (I == null) continue;
    const _ = Xm(e.graph, I), { originId: L, originSlot: O } = Jm(_);
    if (L == null) continue;
    const U = Zm(e, v, L);
    if (!U) continue;
    const k = Number(O || 0), $ = Hd((U == null ? void 0 : U.id) ?? L), D = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (D.length) {
      const Z = [];
      k >= 0 && k < D.length && Z.push(D[k]), Z.push(...D);
      for (const W of Z) {
        const A = Sr(W);
        if (A)
          return String((S == null ? void 0 : S.name) || ""), { src: A, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let E = [];
    try {
      E = typeof (xt == null ? void 0 : xt.getNodeImageUrls) == "function" ? xt.getNodeImageUrls(U) || [] : [];
    } catch {
      E = [];
    }
    if (Array.isArray(E) && E.length) {
      const Z = [];
      k >= 0 && k < E.length && Z.push(E[k]), Z.push(...E);
      for (const W of Z) {
        const A = Sr(W);
        if (A)
          return String((S == null ? void 0 : S.name) || ""), { src: A, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const j = Array.isArray(U == null ? void 0 : U.imgs) ? U.imgs : [];
    if (j.length) {
      const Z = [];
      k >= 0 && k < j.length && Z.push(j[k]), Z.push(...j);
      for (const W of Z) {
        const A = Sr(W);
        if (A)
          return String((S == null ? void 0 : S.name) || ""), { src: A, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const ee = (b = U == null ? void 0 : U.widgets) == null ? void 0 : b.find((Z) => String((Z == null ? void 0 : Z.name) || "").toLowerCase() === "image");
    if (ee) {
      let Z = Sr(ee.value);
      if (Z && !Z.includes("/") && !Z.includes(":") && (U.comfyClass === "LoadImage" || U.type === "LoadImage") && (Z = wn.apiURL(`/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`)), Z)
        return String((S == null ? void 0 : S.name) || ""), { src: Z, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = Hd(e == null ? void 0 : e.id), p = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && p.push(...f.pano_input_images), Array.isArray((w = f == null ? void 0 : f.ui) == null ? void 0 : w.pano_input_images) && p.push(...f.ui.pano_input_images), p.length > 0)
    for (const v of p) {
      const S = Sr(v);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function s_(e, t = [], n = {}) {
  const i = o_(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const l = e_(a);
  if (!l.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", p = e.__panoLinkedInputImageCache.get(f);
  if (p && p.srcRaw === a && p.img) return p.img;
  if (p && p.pendingSrcRaw === a && p.pendingImg)
    return c && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : p.pendingImg;
  const b = new Image(), w = p || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  w.pendingSrcRaw = a, w.pendingResolvedSrc = "", w.pendingImg = b, e.__panoLinkedInputImageCache.set(f, w);
  let v = -1;
  const S = () => {
    var _, L, O, U;
    if (v += 1, v >= l.length) {
      if (((L = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : L.call(_, f)) === w && w.pendingImg === b && (w.pendingSrcRaw = "", w.pendingResolvedSrc = "", w.pendingImg = null, !w.img))
        try {
          (U = (O = e.__panoLinkedInputImageCache) == null ? void 0 : O.delete) == null || U.call(O, f);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), l.length;
      return;
    }
    const I = l[v];
    w.pendingResolvedSrc = I, b.src = I;
  };
  return b.onload = () => {
    var I, _, L;
    ((_ = (I = e.__panoLinkedInputImageCache) == null ? void 0 : I.get) == null ? void 0 : _.call(I, f)) === w && w.pendingImg === b && (w.srcRaw = a, w.resolvedSrc = String(w.pendingResolvedSrc || b.src || ""), w.img = b, w.pendingSrcRaw = "", w.pendingResolvedSrc = "", w.pendingImg = null), String(w.pendingResolvedSrc || w.resolvedSrc || b.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (L = e.setDirtyCanvas) == null || L.call(e, !0, !0);
  }, b.onerror = (I) => {
    var _, L, O, U;
    if (v + 1 < l.length) {
      S();
      return;
    }
    if (((L = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : L.call(_, f)) === w && w.pendingImg === b && (w.pendingSrcRaw = "", w.pendingResolvedSrc = "", w.pendingImg = null, !w.img))
      try {
        (U = (O = e.__panoLinkedInputImageCache) == null ? void 0 : O.delete) == null || U.call(O, f);
      } catch {
      }
    String(w.pendingResolvedSrc || w.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((I == null ? void 0 : I.type) || "error");
  }, S(), c && w.img && (w.img.complete || w.img.naturalWidth || w.img.width) ? w.img : b;
}
function Pu(e, t = [], n = null, i = {}) {
  const a = s_(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function Au(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function Qm(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Qr(e, t, n = "") {
  const i = Qm(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < H1 ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function Cu(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), l = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), c = n / a, f = i / l, p = Math.min(c, f);
  return Number.isFinite(p) && p > 0 ? p : 1;
}
function l_(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), l = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (l <= 0 || c <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), p = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), l * 0.44)), b = Math.max(Math.round(34 * n), f + Math.round(14 * n)), w = i + (l - p) * 0.5, v = a + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(w, v, p, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", w + p * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function Fo(e, t, n = "Connect ERP image") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Connect ERP image"), i.style.display = t ? "flex" : "none");
}
function u_(e) {
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
function c_(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((l) => {
    var f;
    if (l === t || !l || l.hidden || l.type === "hidden") return;
    let c = 22;
    try {
      const p = typeof l.computeSize == "function" ? l.computeSize(((f = hi(e)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(p) && Number.isFinite(Number(p[1])) && (c = Number(p[1]));
    } catch {
      c = 22;
    }
    a += c;
  }), a;
}
function os(e) {
  const n = c_(e) + 2, i = 8, a = hi(e), l = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), c = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return c < 40 || l < 80 ? null : { x: i, y: n, w: l, h: c };
}
function ep(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = t_(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const l = window.__panoSharedImageCache.get(a);
  if (l != null && l.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: l.img }), l.img;
  const c = e.__panoPreviewImageCache.get(i);
  if (c && c.src === a) return c.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var p, b, w;
    (b = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || b.call(p), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), e.__panoPreviewImageCache.set(i, { src: a, img: f }), f;
}
function f_(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((l, c) => Number((l == null ? void 0 : l.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function cc(e, t) {
  return Bs(t, {
    selectedId: null,
    hoveredId: null
  });
}
function fc(e, t, n) {
  return Dm(t, (i, a) => ep(e, i, a), { scene: n });
}
function d_(e, t) {
  var c;
  const n = rp(e, t);
  if (!n) return [];
  const i = ip(t), a = Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.groups) ? t.painting.groups : [], l = new Map(
    a.filter((f) => f && typeof f == "object").map((f) => [String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim(), Number((f == null ? void 0 : f.z_index) || 0)])
  );
  return i.map((f) => {
    const p = n.getGroupDisplayCanvas(f);
    return p ? {
      id: `paint_group:${f}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${f}`,
      zIndex: Number(l.get(f) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function Ud(e, t, n, i = "") {
  const a = cc(e, t), l = fc(e, t, a), c = d_(e, t), f = Da({
    stateRevision: [
      "runtime_cutout_scene",
      String(n.currentSrc || n.src || ""),
      Number(n.naturalWidth || n.width || 0),
      Number(n.naturalHeight || n.height || 0),
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      String(i || ""),
      Array.isArray(l) ? l.map((p) => `${String((p == null ? void 0 : p.assetId) || "")}:${String((p == null ? void 0 : p.revision) || "")}`).join(",") : "",
      Array.isArray(c) ? c.map((p) => `${String((p == null ? void 0 : p.id) || "")}:${String((p == null ? void 0 : p.revision) || "")}:${Number((p == null ? void 0 : p.zIndex) || 0)}`).join(",") : ""
    ].join("|"),
    backgroundSource: n,
    backgroundRevision: String(n.currentSrc || n.src || ""),
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: a,
    textures: l,
    rasterEntries: c,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  return e.__panoRuntimeCore || (e.__panoRuntimeCore = bi()), e.__panoRuntimeCore.syncState(f), e.__panoRuntimeCore;
}
function h_(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, l = (e.y + t.y + n.y) / 3, c = (f) => {
    const p = f.x - a, b = f.y - l, w = Math.hypot(p, b) || 1;
    return { x: f.x + p / w * i, y: f.y + b / w * i };
  };
  return [c(e), c(t), c(n)];
}
function Gd(e, t, n, i, a, l, c, f) {
  const p = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(p) < 1e-6) return;
  const [b, w, v] = h_(l, c, f, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(b.x, b.y), e.lineTo(w.x, w.y), e.lineTo(v.x, v.y), e.closePath(), e.clip();
  const S = (l.x * (i.y - a.y) + c.x * (a.y - n.y) + f.x * (n.y - i.y)) / p, I = (l.x * (a.x - i.x) + c.x * (n.x - a.x) + f.x * (i.x - n.x)) / p, _ = (l.x * (i.x * a.y - a.x * i.y) + c.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * i.y - i.x * n.y)) / p, L = (l.y * (i.y - a.y) + c.y * (a.y - n.y) + f.y * (n.y - i.y)) / p, O = (l.y * (a.x - i.x) + c.y * (n.x - a.x) + f.y * (i.x - n.x)) / p, U = (l.y * (i.x * a.y - a.x * i.y) + c.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * i.y - i.x * n.y)) / p;
  e.transform(S, L, I, O, _, U), e.drawImage(t, 0, 0), e.restore();
}
function tp(e, t, n, i) {
  const a = Zl(e, t.right), l = Zl(e, t.up), c = Zl(e, t.fwd);
  if (c <= 1e-4) return null;
  const f = l / c / i, p = a / c / i;
  return { x: n.x + n.w * 0.5 + p * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function np(e, t, n, i, a, l, c, f = 12, p = 9) {
  var me;
  const b = J(Number(c.hFOV_deg || 30), 1, 179) * di, w = J(Number(c.vFOV_deg || 30), 1, 179) * di, v = Math.tan(b * 0.5), S = Math.tan(w * 0.5), I = c.crop || {}, _ = J(Number(I.x0 ?? 0), 0, 1), L = J(Number(I.y0 ?? 0), 0, 1), O = J(Number(I.x1 ?? 1), 0, 1), U = J(Number(I.y1 ?? 1), 0, 1), k = Math.max(1e-4, O - _), $ = Math.max(1e-4, U - L), D = lc(Number(c.yaw_deg || 0), Number(c.pitch_deg || 0), Number(c.rot_deg || c.roll_deg || 0)), E = [], j = [], ee = [], Z = [];
  for (let X = 0; X <= p; X++) {
    const ce = X / p, de = (1 - (L + ce * $) * 2) * S;
    for (let Se = 0; Se <= f; Se++) {
      const ke = Se / f, Fe = ((_ + ke * k) * 2 - 1) * v, Je = D.fwd.x + D.right.x * Fe + D.up.x * de, it = D.fwd.y + D.right.y * Fe + D.up.y * de, gt = D.fwd.z + D.right.z * Fe + D.up.z * de, Ge = Math.hypot(Je, it, gt) || 1e-8, Gt = Je / Ge, on = it / Ge, It = gt / Ge, Pt = Gt * i.right.x + on * i.right.y + It * i.right.z, zt = Gt * i.up.x + on * i.up.y + It * i.up.z, F = Gt * i.fwd.x + on * i.fwd.y + It * i.fwd.z;
      if (F <= 1e-4)
        E[X] || (E[X] = []), j[X] || (j[X] = []), E[X][Se] = null, j[X][Se] = null;
      else {
        const H = zt / F / a, ae = Pt / F / a;
        E[X] || (E[X] = []), j[X] || (j[X] = []), E[X][Se] = n.x + n.w * 0.5 + ae * n.h * 0.5, j[X][Se] = n.y + n.h * 0.5 - H * n.h * 0.5;
      }
      ee[X] || (ee[X] = []), Z[X] || (Z[X] = []), ee[X][Se] = ke, Z[X][Se] = ce;
    }
  }
  const W = (me = l.assets) == null ? void 0 : me[c.asset_id], A = ep(t, c.asset_id, W);
  if (!A || !A.complete || !A.naturalWidth) return;
  const Y = Number(A.naturalWidth || A.width || 1), ue = Number(A.naturalHeight || A.height || 1), fe = f < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = fe;
  for (let X = 0; X < p; X++)
    for (let ce = 0; ce < f; ce++) {
      const P = E[X][ce], de = j[X][ce], Se = E[X][ce + 1], ke = j[X][ce + 1], B = E[X + 1][ce], Fe = j[X + 1][ce], Je = E[X + 1][ce + 1], it = j[X + 1][ce + 1];
      if (P === null || Se === null || B === null || Je === null) continue;
      const gt = ee[X][ce] * Y, Ge = Z[X][ce] * ue, Gt = ee[X][ce + 1] * Y, on = Z[X][ce + 1] * ue, It = ee[X + 1][ce] * Y, Pt = Z[X + 1][ce] * ue, zt = ee[X + 1][ce + 1] * Y, F = Z[X + 1][ce + 1] * ue;
      Gd(e, A, { x: gt, y: Ge }, { x: Gt, y: on }, { x: zt, y: F }, { x: P, y: de }, { x: Se, y: ke }, { x: Je, y: it }), Gd(e, A, { x: gt, y: Ge }, { x: zt, y: F }, { x: It, y: Pt }, { x: P, y: de }, { x: Je, y: it }, { x: B, y: Fe });
    }
}
function m_(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = _r(e), a = os(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const l = lc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), c = Math.tan(Number(e.__panoPreviewView.fov || 100) * di * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const f = Pu(
    e,
    uc(e, ["erp_image", "bg_erp"]),
    () => {
      var D, E, j;
      (E = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null || E.call(D), (j = e.setDirtyCanvas) == null || j.call(e, !0, !1);
    }
  ), p = !!(f && f.complete && (f.naturalWidth || f.width)), b = sp(e), w = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, v = b || w, S = ws, I = cc(e, i), _ = fc(e, i, I), L = xs(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let O = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = bi()), p) {
    const D = Us({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(_) ? _.map((ee) => `${String((ee == null ? void 0 : ee.assetId) || "")}:${String((ee == null ? void 0 : ee.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: I,
      textures: _,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), j = e.__panoRuntimeCore.syncState(D) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", L, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    O = !!j, j && t.drawImage(j, a.x, a.y, a.w, a.h);
  }
  const U = v ? 8 : 12, k = v ? 6 : 9, $ = f_(e, i);
  if (!p || $.length === 0) {
    const D = Cu(t == null ? void 0 : t.canvas, a);
    ap(t, a, l, c, D);
  }
  !O && p && ks(e, t, a, l, c, f, S), !O && $.length > 0 && $.forEach((D) => np(t, e, a, l, c, i, D, U, k)), t.restore();
}
function p_(e, t, n, i, a = "preview_scene", l = "") {
  const c = String(
    l || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return Us({
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
function ss(e, t, n, i) {
  var l, c, f, p, b, w;
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
      const v = i.convertEventToCanvasOffset(t);
      if (Array.isArray(v) && v.length >= 2)
        return {
          x: Number(v[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(v[1]) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((w = e == null ? void 0 : e.pos) == null ? void 0 : w[1]) || 0)
    };
  const a = b_(e, t, i);
  return a || null;
}
function g_(e, t) {
  var v, S;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, l = (v = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : v.call(a), c = (t == null ? void 0 : t.ds) || ((S = xt == null ? void 0 : xt.canvas) == null ? void 0 : S.ds);
  if (!l || !c) return null;
  const f = Number(c.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const p = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(l.left || 0)) / f - Number(p[0] || 0), w = (i - Number(l.top || 0)) / f - Number(p[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(w) ? null : { x: b, y: w };
}
function b_(e, t, n) {
  var a, l;
  const i = g_(t, n || (xt == null ? void 0 : xt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
  } : null;
}
function Lo(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), hi(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", Wm(e, 320, 180), Ki(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var S, I;
    const v = t ? t.apply(this, arguments) : void 0;
    try {
      const _ = arguments[0];
      _ && !((S = this.flags) != null && S.collapsed) && (i.stepInertia(performance.now()) && ((I = this.setDirtyCanvas) == null || I.call(this, !0, !1)), m_(this, _, i));
    } catch {
    }
    return v;
  }, e.onResize = function() {
    var S;
    const v = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ps(this, 150), (S = this.setDirtyCanvas) == null || S.call(this, !0, !0), up(this, 220, null), v;
  };
  const i = Gs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (v) => {
      e.__panoPreviewView = v;
    },
    getViewportSize: () => {
      const v = os(e);
      return {
        w: Math.max(1, Number((v == null ? void 0 : v.w) || 0)),
        h: Math.max(1, Number((v == null ? void 0 : v.h) || 0))
      };
    },
    onInteraction: () => {
      var v;
      op(e), (v = e.setDirtyCanvas) == null || v.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(v, S, I) {
    var _;
    try {
      if (!((_ = this.flags) != null && _.collapsed)) {
        const L = ss(this, v, S, I) || { x: 0, y: 0 }, O = hi(this), U = Number((O == null ? void 0 : O[0]) || 0), k = Number((O == null ? void 0 : O[1]) || 0);
        if (L.x >= U - 20 && L.y >= k - 20)
          return a ? a.apply(this, arguments) : void 0;
        const D = os(this);
        if (Vd(L.x, L.y, D))
          return (v == null ? void 0 : v.button) === 0 && i.startDrag(L.x, L.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const l = e.onMouseMove;
  e.onMouseMove = function(v, S, I) {
    try {
      const _ = ss(this, v, S, I);
      if (i.state.drag.active) {
        if (typeof (v == null ? void 0 : v.buttons) == "number" && (v.buttons & 1) === 0)
          return i.endDrag(), !0;
        const L = _ || i.state.drag;
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
    const v = f ? f.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), v;
  };
  const p = e.onMouseWheel;
  e.onMouseWheel = function(v, S, I) {
    var _, L;
    try {
      if ((_ = this.flags) != null && _.collapsed) return p ? p.apply(this, arguments) : void 0;
      const O = ss(this, v, S, I), U = os(this);
      if (!O || !Vd(O.x, O.y, U)) return p ? p.apply(this, arguments) : void 0;
      const k = Number((v == null ? void 0 : v.deltaY) ?? (v == null ? void 0 : v.wheelDeltaY) ?? (typeof S == "number" ? S : 0));
      return i.applyWheel(Math.sign(k)) && ((L = this.setDirtyCanvas) == null || L.call(this, !0, !1)), typeof (v == null ? void 0 : v.preventDefault) == "function" && v.preventDefault(), typeof (v == null ? void 0 : v.stopPropagation) == "function" && v.stopPropagation(), !0;
    } catch {
      return p ? p.apply(this, arguments) : void 0;
    }
  };
  const b = e.onRemoved, w = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = l, e.onMouseUp = c, e.onMouseLeave = f, e.onMouseWheel = p, e.onRemoved = b, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = w, e.onRemoved = function() {
    return w(), ja.unregister(this), Ns.unregister(this), b ? b.apply(this, arguments) : void 0;
  };
}
function y_(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function rp(e, t) {
  var b, w, v, S, I, _, L, O, U, k, $, D;
  const n = (w = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : w.strokes, i = (S = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, l = Array.isArray(i) && i.length > 0;
  if (!a && !l) return null;
  const c = y_(e, t), f = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = vu(c), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const p = {
    paint: n || null,
    mask: i || null,
    groups: ((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) || null,
    rasterObjects: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.raster_objects) || null
  };
  return (((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.paint) !== p.paint || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.mask) !== p.mask || ((U = e.__panoPreviewPaintRevision) == null ? void 0 : U.groups) !== p.groups || ((k = e.__panoPreviewPaintRevision) == null ? void 0 : k.rasterObjects) !== p.rasterObjects) && (e.__panoPreviewPaintRevision = p, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    l ? "m1" : "m0",
    String(Array.isArray(($ = t == null ? void 0 : t.painting) == null ? void 0 : $.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function ip(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function v_(e, t) {
  const n = rp(e, t);
  if (!n) return null;
  const i = ip(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function __(e, t, n = null) {
  var f;
  const i = (f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.paint, a = Sr(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const l = e.__panoPaintingLayerImageCache;
  if (l.img && l.src === a) return l.img;
  const c = new Image();
  return c.onload = () => {
    var p;
    n == null || n(), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0);
  }, c.onerror = () => {
    var p;
    ((p = e.__panoPaintingLayerImageCache) == null ? void 0 : p.img) === c && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, c.src = a, e.__panoPaintingLayerImageCache = { src: a, img: c }, c;
}
function x_(e, t) {
  var l, c;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((l = t == null ? void 0 : t.painting) == null ? void 0 : l.raster_objects) && t.painting.raster_objects.length > 0) {
    const f = __(e, t, () => {
      var p, b;
      return (b = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null ? void 0 : b.call(p);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((c = t == null ? void 0 : t.painting_layer) == null ? void 0 : c.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = v_(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function w_(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function S_(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function N_(e, t, n, i, a, l) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const c = w_(n);
  if (c.width === i && c.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const p = S_(e, l, c.width, c.height).getContext("2d", { willReadFrequently: !0 });
  if (!p) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    p.clearRect(0, 0, c.width, c.height), p.drawImage(n, 0, 0, c.width, c.height);
    const b = p.getImageData(0, 0, c.width, c.height).data, w = t.getImageData(0, 0, i, a), v = w.data, S = Math.max(0, c.width - 1), I = Math.max(0, c.height - 1);
    for (let _ = 0; _ < a; _ += 1) {
      const L = (_ + 0.5) * c.height / a - 0.5, O = J(Math.floor(L), 0, I), U = J(O + 1, 0, I), k = J(L - O, 0, 1);
      for (let $ = 0; $ < i; $ += 1) {
        const D = ($ + 0.5) * c.width / i - 0.5, E = J(Math.floor(D), 0, S), j = J(E + 1, 0, S), ee = J(D - E, 0, 1);
        let Z = 0, W = 0, A = 0, Y = 0;
        const ue = (X, ce, P) => {
          const de = (ce * c.width + X) * 4, Se = (b[de + 3] || 0) / 255;
          Z += Se * P, W += (b[de] || 0) / 255 * Se * P, A += (b[de + 1] || 0) / 255 * Se * P, Y += (b[de + 2] || 0) / 255 * Se * P;
        };
        if (ue(E, O, (1 - ee) * (1 - k)), ue(j, O, ee * (1 - k)), ue(E, U, (1 - ee) * k), ue(j, U, ee * k), Z <= 1e-6) continue;
        const fe = (_ * i + $) * 4, me = 1 - Z;
        v[fe] = Math.round(J((W + v[fe] / 255 * me) * 255, 0, 255)), v[fe + 1] = Math.round(J((A + v[fe + 1] / 255 * me) * 255, 0, 255)), v[fe + 2] = Math.round(J((Y + v[fe + 2] / 255 * me) * 255, 0, 255)), v[fe + 3] = 255;
      }
    }
    t.putImageData(w, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function M_(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0)), f = `${String(t.currentSrc || t.src || "")}|${a}x${l}|${i}`;
  let p = e.__panoPreviewBgPaint;
  if (!p || p.__revKey !== f || p.width !== a || p.height !== l) {
    (!p || p.width !== a || p.height !== l) && (p = document.createElement("canvas"), p.width = a, p.height = l, e.__panoPreviewBgPaint = p);
    const b = p.getContext("2d");
    b.clearRect(0, 0, a, l), b.drawImage(t, 0, 0, a, l), N_(e, b, n, a, l, "__panoPreviewOverlayScratch"), p.__revKey = f;
  }
  return p;
}
function k_(e, t, n, i = null) {
  var I, _, L, O, U, k, $;
  const a = String(e.__panoPreviewMode || "stickers");
  Qm(e, a);
  const l = _r(e);
  a === "cutout" && e.__panoCutoutNodeSurfaceState !== l && (e.__panoCutoutNodeSurfaceState = l, (L = (_ = (I = e.__panoCutoutNodeSurface) == null ? void 0 : I.session) == null ? void 0 : _.refresh) == null || L.call(_));
  const c = t.parentElement, f = 1, p = Math.max(1, Number((c == null ? void 0 : c.clientWidth) || t.clientWidth || 0)), b = Math.max(1, Number((c == null ? void 0 : c.clientHeight) || t.clientHeight || 0)), w = Math.max(64, Math.round(p * f)), v = Math.max(64, Math.round(b * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const D = u_(l), E = Pu(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var X, ce;
          return (ce = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : ce.call(X);
        },
        { preserveReadyWhilePending: !1 }
      ), j = !!(E && E.complete && (E.naturalWidth || E.width));
      (t.width !== w || t.height !== v) && (t.width = w, t.height = v);
      const ee = { x: 0, y: 0, w, h: v }, Z = j ? J(Number((E.naturalWidth || E.width) / Math.max(1, Number(E.naturalHeight || E.height || 1))), 0.05, 20) : 1, W = D ? nr(D) : null, A = J(Number((W == null ? void 0 : W.aspect) || Z || 1), 0.05, 20), Y = y1(ee, A);
      e.__panoCutoutNodeFrame = Y, Cu(t, ee), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, w, v);
      let ue = "none", fe = "Connect ERP image", me = "";
      if (me = String((E == null ? void 0 : E.src) || ""), D)
        if (E && !j)
          ue = "loading";
        else if (j) {
          const X = Ud(e, l, E, (D == null ? void 0 : D.id) || ""), ce = v1({ width: w, height: v }, Y, D), P = ce.rect, de = nr(ce.shot);
          let Se = !0;
          if (ce.fallback) {
            const Fe = ce.fallback.rect, Je = nr(ce.fallback.shot);
            Se = X.renderToContext(
              S,
              Fe,
              Je,
              { width: Fe.w, height: Fe.h, dpr: 1 }
            );
          }
          const ke = X.renderToContext(
            S,
            P,
            de,
            { width: P.w, height: P.h, dpr: 1 }
          );
          let B = !0;
          ce.fallback && (B = X.renderToContext(
            S,
            Y,
            nr(D),
            { width: Y.w, height: Y.h, dpr: 1 }
          )), (!Se || !ke || !B) && (ue = "empty", fe = "Open editor or run node");
        } else
          ue = "empty", fe = "Connect ERP image";
      else {
        const X = e.__panoLastCutoutShot;
        if (e.__panoPreviewView || (e.__panoPreviewView = X ? {
          yaw: Number(X.yaw_deg || 0),
          pitch: Number(X.pitch_deg || 0),
          fov: 100
        } : { yaw: 0, pitch: 0, fov: 100 }), j) {
          const ce = Ud(e, l, E, "zero_shot_viewer"), P = ((U = (O = i == null ? void 0 : i.state) == null ? void 0 : O.drag) == null ? void 0 : U.active) === !0 || (($ = (k = i == null ? void 0 : i.state) == null ? void 0 : k.inertia) == null ? void 0 : $.active) === !0 ? 0.5 : 1;
          ce.renderToContext(
            S,
            ee,
            xs(e.__panoPreviewView, l == null ? void 0 : l.coverage),
            { width: ee.w, height: ee.h, dpr: 1, renderScale: P }
          ) || (ue = "empty", fe = "Open editor or run node");
        } else E ? ue = "loading" : (ue = "empty", fe = "Connect ERP image");
      }
      D && (e.__panoLastCutoutShot = { ...D }, S.save(), S.fillStyle = "rgba(0,0,0,0.58)", S.beginPath(), S.rect(0, 0, w, v), S.rect(Y.x, Y.y, Y.w, Y.h), S.fill("evenodd"), S.restore(), S.save(), S.strokeStyle = "rgba(255,221,87,0.72)", S.lineWidth = 2, S.strokeRect(Y.x + 0.5, Y.y + 0.5, Math.max(0, Y.w - 1), Math.max(0, Y.h - 1)), S.restore()), ue === "loading" ? (Fo(e, !1), Qr(e, !0, me)) : ue === "empty" ? (Fo(e, !0, fe), Qr(e, !1, "")) : (Fo(e, !1), Qr(e, !1, ""));
    } else {
      Fo(e, !1), (t.width !== w || t.height !== v) && (t.width = w, t.height = v);
      const D = { x: 0, y: 0, w, h: v }, E = Cu(t, D);
      S.setTransform(1, 0, 0, 1, 0, 0), S.clearRect(0, 0, w, v), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const j = lc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), ee = Math.tan(Number(e.__panoPreviewView.fov || 100) * di * 0.5), Z = Pu(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Se, ke;
          return (ke = (Se = e.__panoDomPreview) == null ? void 0 : Se.requestDraw) == null ? void 0 : ke.call(Se);
        }
      ), W = !!(Z && Z.complete && (Z.naturalWidth || Z.width));
      S.fillStyle = "#1a1a1e", S.fillRect(0, 0, w, v);
      const A = cc(e, l), Y = fc(e, l, A), ue = xs(e.__panoPreviewView, l == null ? void 0 : l.coverage), fe = x_(e, l), me = (fe == null ? void 0 : fe.source) || null, X = W && me ? M_(e, Z, me, (fe == null ? void 0 : fe.revision) || "") : Z, ce = X !== Z ? String(X.__revKey || "") : Z ? [
        String(Z.currentSrc || Z.src || ""),
        Number(Z.naturalWidth || Z.width || 0),
        Number(Z.naturalHeight || Z.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = bi());
      let P = !1;
      if (W) {
        const ke = e.__panoDomRuntimeCore.syncState(
          p_(X, l, A, Y, "runtime_dom_scene", ce)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", ue, {
          width: D.w,
          height: D.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        ke && (S.drawImage(ke, D.x, D.y, D.w, D.h), P = !0);
      }
      const de = A.stickers;
      if (W && P)
        Qr(e, !1, "");
      else if (W)
        ks(e, S, D, j, ee, X, ws), Qr(e, !1, "");
      else if (me)
        ks(e, S, D, j, ee, me, ws), Qr(e, !!Z && !W, String((Z == null ? void 0 : Z.src) || ""));
      else {
        const Se = !!Z && !W;
        Qr(e, Se, String((Z == null ? void 0 : Z.src) || "")), Se && l_(S, D, E);
      }
      if ((!W || de.length === 0) && ap(S, D, j, ee, E), !P && de.length > 0) {
        const Se = sp(e), ke = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, B = Se || ke, Fe = B ? 8 : 12, Je = B ? 6 : 9;
        de.forEach((it) => np(S, e, D, j, ee, l, it, Fe, Je));
      } else if (!Z || !W) {
        const Se = Math.max(14, Math.round(16 * E));
        S.fillStyle = "rgba(212,212,216,0.85)", S.font = `600 ${Se}px Plus Jakarta Sans, Geist, sans-serif`, S.textAlign = "center", S.fillText("Open editor to add stickers", w * 0.5, v * 0.5 + 24 * E);
      }
    }
}
function ks(e, t, n, i, a, l, c = $1) {
  const f = _r(e), p = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = bi());
  const b = n_(l), w = Us({
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
  if (!e.__panoBackgroundCore.syncState(w)) return;
  const S = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(p.yaw || 0),
    pitchDeg: Number(p.pitch || 0),
    fovDeg: Number(p.fov || 100),
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
function Bd(e, t, n, i, a, l, c = 1) {
  let f = !1;
  e.strokeStyle = l, e.lineWidth = c, e.beginPath();
  for (const p of t) {
    const b = tp(p, n, i, a);
    if (!b) {
      f = !1;
      continue;
    }
    f ? e.lineTo(b.x, b.y) : (e.moveTo(b.x, b.y), f = !0);
  }
  e.stroke();
}
function ap(e, t, n, i, a = 1) {
  e.save();
  const l = "rgba(63, 63, 70, 0.5)", c = "rgba(250, 250, 250, 0.35)";
  for (let b = -75; b <= 75; b += 15) {
    const w = [];
    for (let v = -180; v <= 180; v += 15) w.push(ni(v, b));
    Bd(e, w, n, t, i, b === 0 ? c : l, b === 0 ? 1.5 : 1);
  }
  for (let b = -180; b <= 180; b += 45) {
    const w = [];
    for (let v = -89; v <= 89; v += 15) w.push(ni(b, v));
    Bd(e, w, n, t, i, b % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : l, b % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: ni(0, 0) },
    { name: "Right", dir: ni(90, 0) },
    { name: "Back", dir: ni(180, 0) },
    { name: "Left", dir: ni(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const p = Math.max(9, Math.round(11 * a));
  e.font = `500 ${p}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((b) => {
    const w = tp(b.dir, n, t, i);
    w && e.fillText(b.name, w.x, w.y + 20 * a);
  }), e.restore();
}
function P_(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function op(e) {
  const t = P_(e);
  t.dragging = !1, t.hqFrames = V1;
}
function Ps(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function sp(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function lp(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function A_(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), l = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && l >= i.height - n;
}
function Bn(e, t) {
  return A_(e, t) ? !1 : (lp(e), !0);
}
function C_(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function Kd() {
  var n;
  const e = (n = xt == null ? void 0 : xt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Wd(e) {
  var n;
  if (!e) return;
  const t = (n = xt == null ? void 0 : xt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function T_(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Km(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function I_(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var l, c;
    e.__panoBootMinHeightTimer = null, (l = e == null ? void 0 : e.__panoDomPreview) != null && l.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function Yd(e, t = null, n = 0, i = 0) {
  const a = Math.max(0, Number(i || 0));
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
      e.__panoUserResized = !0, Ps(e, 150), t == null || t(), up(e, 180, t);
    }
  };
}
function up(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ki(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function D_(e, t = {}) {
  var be;
  const n = t.__allowStandalone === !0, i = Ym(e);
  if (i && !n) {
    oc(e);
    return;
  }
  i && T_(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", Ns.register(e);
  const a = e.__panoPreviewMode === "stickers", l = t.__noLegacyFallback === !0, c = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || ja.unregister(e);
  const f = String(t.__panoForcedPath || "").trim(), p = a ? qm(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: ci(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (p.chosenPath = f, p.reason = "controller_target_backend");
  const b = a ? p.chosenPath : "dom", w = p.signature || ci(e);
  if (Number(e.__panoRebindGeneration || 0), ku(e), e == null || e.id, e.__panoPreviewMode, p.reason, p.frontendVersionRaw, e.addDOMWidget, hi(e), e.__panoFrontendSig = w, e.__panoStickersPath = b, a && ja.register(e), a && b === "legacy_draw") {
    if (l) return;
    ra(e, { keepMonitor: !0 }), Lo(e);
    return;
  }
  if ((be = e.__panoDomPreview) != null && be.widget) return;
  if (e.__panoLegacyPreviewHooked && ra(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !l && Lo(e);
    return;
  }
  const v = t.noPreview === !0, S = a || v ? 0 : 56, I = a || v ? 0 : g1, _ = document.createElement("div");
  if (G1(), _.className = "pano-node-preview-dom", _.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), v && _.classList.add("pano-node-preview--no-preview"), _.setAttribute("data-capture-wheel", "true"), _.tabIndex = 0, _.style.cssText = [
    "width:100%",
    v ? "height:auto" : "height:100%",
    I > 0 ? `min-height:${I}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), v) {
    const M = e.addDOMWidget(Mu(), "preview", _, Yd(e, null));
    Ki(e), e.__panoDomPreview = { widget: M, root: _, requestDraw: () => {
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
  const U = document.createElement("div");
  U.style.cssText = [
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
  ].join(";"), U.textContent = "Connect ERP image", L.appendChild(O), L.appendChild(U), _.appendChild(L);
  const k = () => {
    _.focus({ preventScroll: !0 });
  };
  L.addEventListener("pointerenter", k);
  const $ = a ? null : document.createElement("div");
  $ && ($.className = "pano-cutout-node-surface-host", $.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", _.appendChild($)), Wm(e, 120, 120), Ki(e);
  let D = null;
  try {
    I_(e, S, () => {
      var M, G;
      return (G = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null ? void 0 : G.call(M);
    }), D = e.addDOMWidget(
      Mu(),
      "preview",
      _,
      Yd(
        e,
        () => {
          var M, G;
          return (G = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null ? void 0 : G.call(M);
        },
        S,
        I
      )
    );
  } catch {
    a && Lo(e);
    return;
  }
  const E = {
    raf: 0,
    inTick: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, j = () => {
    E.needsDraw = !0, !E.inTick && !E.raf && (E.raf = requestAnimationFrame(ke));
  }, ee = $ ? /* @__PURE__ */ Qa({
    ...Su(_r(e)),
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((M) => ({ value: M, label: M }))
  }) : null;
  let Z = null;
  const W = $ ? x1({
    readState: () => _r(e),
    publishLiveState: (M) => {
      M ? (Z = M, e.__panoLiveStateOverride = M) : (e.__panoLiveStateOverride === Z && (e.__panoLiveStateOverride = null), Z = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, j();
    },
    commitState: (M) => {
      var re, Q, ge, pe;
      const G = ia(e, "state_json");
      if (!G) return;
      const q = JSON.stringify(M);
      G.value = q, (re = G.callback) == null || re.call(G, q), e.__panoStateCache = null, (Q = e.setDirtyCanvas) == null || Q.call(e, !0, !0), (pe = (ge = e.graph) == null ? void 0 : ge.setDirtyCanvas) == null || pe.call(ge, !0, !0);
    },
    onChange: (M) => Object.assign(ee, M)
  }) : null;
  let A = null, Y = null, ue = !1;
  const fe = () => {
    var M;
    return Y && (clearTimeout(Y), Y = null), ue ? (ue = !1, ((M = W == null ? void 0 : W.commitGesture) == null ? void 0 : M.call(W)) ?? !1) : !1;
  }, me = () => {
    var re, Q, ge;
    const M = fe(), G = A == null ? void 0 : A.pointerId;
    if (A = null, G != null) {
      try {
        (re = O.hasPointerCapture) != null && re.call(O, G) && ((Q = O.releasePointerCapture) == null || Q.call(O, G));
      } catch {
      }
      O.style.cursor = "grab";
    }
    const q = ((ge = W == null ? void 0 : W.commitGesture) == null ? void 0 : ge.call(W)) ?? !1;
    return M || q;
  }, X = () => me();
  W && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(X));
  let ce = null, P = !1;
  if ($ && W)
    try {
      Bm(), ce = km(z1, {
        model: ee,
        onAction: (M) => {
          var re, Q;
          if ((M == null ? void 0 : M.type) === "toggle-aspect") {
            ee.aspectOpen = !ee.aspectOpen;
            return;
          }
          if ((M == null ? void 0 : M.type) === "close-aspect") {
            ee.aspectOpen = !1;
            return;
          }
          if ((M == null ? void 0 : M.type) === "open-editor") {
            me(), ee.aspectOpen = !1, (re = e.__panoOpenEditor) == null || re.call(e);
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
            const ge = ui(_r(e));
            ge && (e.__panoPreviewView = {
              yaw: Number(ge.yaw_deg || 0),
              pitch: Number(ge.pitch_deg || 0),
              fov: 100
            });
          }
          const q = ((Q = e.__panoCutoutNodeFrame) == null ? void 0 : Q.safeRect) || null;
          ee.aspectOpen = !1, W.apply({ ...G, safeRect: q }) && j();
        }
      }), ce.mount($), P = !0;
    } catch {
      ce = null, P = !1;
    }
  const de = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Ps(e, 150), j();
  }) : null;
  de == null || de.observe(L);
  const Se = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const M = 3, G = (q) => {
      requestAnimationFrame(() => {
        var Q;
        const re = !!(_ != null && _.isConnected && (L != null && L.isConnected) && (O != null && O.isConnected) && Number(L.clientHeight || 0) > 0 && Number(O.clientHeight || 0) > 0);
        if (!re && q < M) {
          G(q + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((L == null ? void 0 : L.clientHeight) || 0), Number((O == null ? void 0 : O.clientHeight) || 0), !re) {
          if (l) {
            e.__panoPreviewMode, Number((L == null ? void 0 : L.clientHeight) || 0), Number((O == null ? void 0 : O.clientHeight) || 0);
            return;
          }
          ra(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", Lo(e), (Q = e.setDirtyCanvas) == null || Q.call(e, !0, !0);
        }
      });
    };
    G(1);
  }, ke = (M) => {
    var q, re;
    E.raf = 0, E.inTick = !0;
    let G = !1;
    try {
      G = B.stepInertia(M), (E.needsDraw || G) && (E.needsDraw = !1, (q = e.flags) != null && q.collapsed || k_(e, O, null, B));
    } finally {
      E.inTick = !1;
    }
    (G || E.needsDraw) && !E.raf && (E.raf = requestAnimationFrame(ke)), U1() && (!e.__panoDebugLastTs || M - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = M, e.__panoPreviewMode, hi(e), Ca(_), Ca(L), Ca(O), Ca(_.parentElement), Ca((re = _.parentElement) == null ? void 0 : re.parentElement), Number(O.width || 0), Number(O.height || 0), void 0);
  }, B = Gs({
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
        const M = Ld();
        return {
          x: M.invert_view_x ? -1 : 1,
          y: M.invert_view_y ? -1 : 1
        };
      }
    },
    onInteraction: () => {
      j();
    }
  }), Fe = a ? L : _, Je = (M) => {
    const G = O.getBoundingClientRect();
    return {
      x: (Number(M.clientX) - G.left) * (O.width / Math.max(1, G.width)),
      y: (Number(M.clientY) - G.top) * (O.height / Math.max(1, G.height))
    };
  };
  O.addEventListener("pointerdown", (M) => {
    var G, q, re, Q, ge, pe, Ae;
    if (Bn(M, Fe) && M.button === 0) {
      if (!a) {
        const d = ui(_r(e)), Ce = e.__panoCutoutNodeFrame;
        if (!d) {
          (G = _.focus) == null || G.call(_, { preventScroll: !0 }), (q = O.setPointerCapture) == null || q.call(O, M.pointerId), O.style.cursor = "grabbing", B.startDrag(M.clientX, M.clientY, M.pointerId);
          return;
        }
        if (d.locked === !0 || !Ce || !W) return;
        const Oe = Je(M);
        let Le;
        if (M.shiftKey) {
          const Be = jm({
            frame: Ce,
            point: Oe,
            startRollDeg: Number(d.roll_deg ?? d.rot_deg ?? 0),
            shiftKey: !0
          });
          if (!Be) return;
          Le = { kind: "roll", pointerId: M.pointerId, rollGesture: Be };
        } else {
          const Be = ((re = _r(e)) == null ? void 0 : re.ui_settings) || Ld();
          Le = {
            kind: "pan",
            pointerId: M.pointerId,
            startPoint: Oe,
            startShot: { ...d },
            focalPx: ta(Ce, d),
            invertX: Be.invert_view_x === !0,
            invertY: Be.invert_view_y === !0
          };
        }
        me(), (Q = _.focus) == null || Q.call(_, { preventScroll: !0 }), (ge = O.setPointerCapture) == null || ge.call(O, M.pointerId), O.style.cursor = "grabbing", W.beginGesture(), A = Le;
        return;
      }
      c && ((pe = _.focus) == null || pe.call(_), (Ae = O.setPointerCapture) == null || Ae.call(O, M.pointerId), O.style.cursor = "grabbing", B.startDrag(M.clientX, M.clientY, M.pointerId));
    }
  }), O.addEventListener("pointermove", (M) => {
    if (!a) {
      if (!A) {
        if (!B.state.drag.active) return;
        Bn(M, Fe), B.moveDrag(M.clientX, M.clientY, "pano");
        return;
      }
      if (A.pointerId !== M.pointerId || !W) return;
      if (Bn(M, Fe), A.kind === "pan") {
        const q = Je(M);
        W.updateGesture({
          type: "pan-camera",
          startShot: A.startShot,
          dx: q.x - A.startPoint.x,
          dy: q.y - A.startPoint.y,
          focalPx: A.focalPx,
          invertX: A.invertX,
          invertY: A.invertY
        });
        return;
      }
      const G = Hm(A.rollGesture, Je(M), M);
      if (!G) return;
      A.rollGesture = G.gesture, W.updateGesture({ type: "set-roll", value: G.rollDeg });
      return;
    }
    !c || !B.state.drag.active || (Bn(M, Fe), B.moveDrag(M.clientX, M.clientY, "pano"));
  });
  const it = () => {
    var G, q;
    if (!A) {
      if (!B.state.drag.active) return;
      B.endDrag(), O.style.cursor = "grab", j();
      return;
    }
    if (!W) return;
    const M = A.pointerId;
    A = null;
    try {
      (G = O.hasPointerCapture) != null && G.call(O, M) && ((q = O.releasePointerCapture) == null || q.call(O, M));
    } catch {
    }
    W.cancelGesture(), O.style.cursor = "grab", j();
  }, gt = (M, G = !1) => {
    var q, re, Q;
    if (!a) {
      if (!A) {
        if (!B.state.drag.active) return;
        Bn(M, Fe), (q = O.releasePointerCapture) == null || q.call(O, M.pointerId), O.style.cursor = "grab", B.endDrag(), j();
        return;
      }
      if (A.pointerId !== M.pointerId || !W) return;
      Bn(M, Fe), A = null, (re = O.releasePointerCapture) == null || re.call(O, M.pointerId), O.style.cursor = "grab", G ? W.cancelGesture() : W.commitGesture(), j();
      return;
    }
    !c || !B.state.drag.active || (Bn(M, Fe), (Q = O.releasePointerCapture) == null || Q.call(O, M.pointerId), O.style.cursor = "grab", B.endDrag(), op(e), j());
  };
  O.addEventListener("pointerup", gt), O.addEventListener("pointercancel", (M) => gt(M, !0)), O.addEventListener("lostpointercapture", it), O.addEventListener("pointerleave", (M) => {
    !a && A || B.state.drag.active && gt(M);
  });
  const Ge = (M) => {
    M.key !== "Escape" || !A || !W || (it(), lp(M));
  };
  _.addEventListener("keydown", Ge);
  const Gt = (M) => {
    var q, re, Q, ge, pe, Ae;
    if (!Bn(M, Fe)) return;
    if (!a) {
      const d = ui(_r(e));
      if (d && d.locked !== !0 && W) {
        const Ce = C_(M);
        Ce !== 0 && (ue || (me(), W.beginGesture(), ue = !0), W.updateGesture({
          type: "scale-fov",
          scale: Ce < 0 ? 1 / 1.1 : 1.1
        }) ? (Y && clearTimeout(Y), Y = setTimeout(fe, 180), j()) : (W.cancelGesture(), ue = !1));
      } else if (!d) {
        const Ce = Kd();
        B.applyWheelEvent(M) && j(), requestAnimationFrame(() => {
          Wd(Ce);
        });
      }
      (q = M.preventDefault) == null || q.call(M), (re = M.stopPropagation) == null || re.call(M), (Q = M.stopImmediatePropagation) == null || Q.call(M);
      return;
    }
    if (!c) return;
    const G = Kd();
    B.applyWheelEvent(M) && j(), (ge = M.preventDefault) == null || ge.call(M), (pe = M.stopPropagation) == null || pe.call(M), (Ae = M.stopImmediatePropagation) == null || Ae.call(M), requestAnimationFrame(() => {
      var d, Ce;
      Wd(G), (Ce = (d = xt == null ? void 0 : xt.canvas) == null ? void 0 : d.setDirty) == null || Ce.call(d, !0, !0);
    });
  }, on = a ? [L, O] : [L];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((M) => {
    on.forEach((G) => G.addEventListener(M, Gt, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((M) => {
    O.addEventListener(M, (G) => Bn(G, Fe)), L.addEventListener(M, (G) => Bn(G, Fe));
  });
  const It = ia(e, "state_json");
  if (It && !It.__panoPreviewPatchedCb) {
    It.__panoPreviewPatchedCb = !0;
    const M = It.callback;
    It.callback = (G) => {
      const q = M ? M(G) : void 0;
      return j(), q;
    };
  }
  const Pt = ia(e, "bg_color");
  if (Pt && !Pt.__panoPreviewPatchedCb) {
    Pt.__panoPreviewPatchedCb = !0;
    const M = Pt.callback;
    Pt.callback = (G) => {
      const q = M ? M(G) : void 0;
      return j(), q;
    };
  }
  const zt = e.onRemoved, F = e.onResize, H = e.onExecuted;
  e.onExecuted = function(M) {
    a_(e, M), Au(e), Ki(e), j();
    const G = H ? H.apply(this, arguments) : void 0;
    return Ki(e), G;
  };
  const ae = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return Au(e), Ki(e), j(), ae ? ae.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var G;
    const M = F ? F.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ps(this, 150), j(), (G = this.setDirtyCanvas) == null || G.call(this, !0, !1), M;
  }, e.onRemoved = function() {
    return xe(), ja.unregister(this), Ns.unregister(this), zt ? zt.apply(this, arguments) : void 0;
  };
  const xe = () => {
    var M, G, q, re, Q, ge;
    (M = de == null ? void 0 : de.disconnect) == null || M.call(de), it(), me(), O.removeEventListener("lostpointercapture", it), L.removeEventListener("pointerenter", k), _.removeEventListener("keydown", Ge), (q = (G = e.__panoStateFlushers) == null ? void 0 : G.delete) == null || q.call(G, X), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (re = W == null ? void 0 : W.destroy) == null || re.call(W), (Q = ce == null ? void 0 : ce.unmount) == null || Q.call(ce), E.raf && cancelAnimationFrame(E.raf), E.raf = 0, ((ge = e.__panoCutoutNodeSurface) == null ? void 0 : ge.session) === W && (e.__panoCutoutNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = F, e.onExecuted = H, e.onConnectionsChange = ae, e.onRemoved = zt;
  };
  e.__panoDomRestore = xe, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = W && P ? { session: W, model: ee } : null, e.__panoDomPreview = {
    widget: D,
    root: _,
    canvas: O,
    requestDraw: j,
    state: E,
    emptyHintEl: U,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Se(), j();
}
function qd(e, t = {}) {
  sc(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Xd(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (Ym(e) && !n) {
    oc(e);
    return;
  }
  sc(e).attach(t);
}
const zo = 140, E_ = 180, Jd = 40, Ql = 10;
function Zd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Qd(e, t) {
  const n = Zd(e), i = Zd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function eh(e) {
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
function aa(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return aa(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return eh({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const i = aa(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : eh(e);
}
function cp(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function O_(e) {
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
function Tu(e) {
  var a;
  const t = (a = zn) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (Qd(l, n)) return t.get(l);
  } else
    for (const l of Object.keys(t))
      if (Qd(l, n)) return t[l];
  return null;
}
function R_(e) {
  var i, a;
  const t = Tu(e == null ? void 0 : e.id), n = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const l of n)
    if (Array.isArray(l))
      for (const c of l) {
        const f = aa(c);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function F_(e, t = "erp_image") {
  var _, L, O, U, k, $, D, E, j, ee, Z, W;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = n.find((A) => String((A == null ? void 0 : A.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const A = n.find((Y) => String((Y == null ? void 0 : Y.type) || "").toUpperCase() === "IMAGE" && (Y == null ? void 0 : Y.link) != null);
    (A == null ? void 0 : A.link) != null && (i = A.link);
  }
  if (i == null) return "";
  const l = ((L = (_ = e == null ? void 0 : e.graph) == null ? void 0 : _.links) == null ? void 0 : L[i]) || ((k = (U = (O = zn) == null ? void 0 : O.graph) == null ? void 0 : U.links) == null ? void 0 : k[i]);
  if (!l) return "";
  const c = Number(l.origin_id);
  if (!Number.isFinite(c)) return "";
  const f = (E = (D = ($ = zn) == null ? void 0 : $.graph) == null ? void 0 : D.getNodeById) == null ? void 0 : E.call(D, c), p = Tu(c), b = Tu(e == null ? void 0 : e.id), w = [
    (j = b == null ? void 0 : b.ui) == null ? void 0 : j.pano_input_images,
    b == null ? void 0 : b.pano_input_images,
    p == null ? void 0 : p.images,
    (ee = p == null ? void 0 : p.ui) == null ? void 0 : ee.pano_input_images,
    p == null ? void 0 : p.pano_input_images
  ];
  for (const A of w)
    if (Array.isArray(A))
      for (const Y of A) {
        const ue = aa(Y);
        if (ue) return ue;
      }
  let v = [];
  try {
    v = typeof ((Z = zn) == null ? void 0 : Z.getNodeImageUrls) == "function" ? zn.getNodeImageUrls(f) || [] : [];
  } catch {
    v = [];
  }
  if (Array.isArray(v) && v.length > 0)
    for (const A of v) {
      const Y = aa(A);
      if (Y) return Y;
    }
  if (f) {
    const A = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const Y of A) {
      const ue = aa(Y);
      if (ue) return ue;
    }
  }
  const S = (W = f == null ? void 0 : f.widgets) == null ? void 0 : W.find((A) => String((A == null ? void 0 : A.name) || "").toLowerCase() === "image"), I = String((S == null ? void 0 : S.value) || "").trim();
  return I ? wn.apiURL(`/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`) : "";
}
function th(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function nh(e, t, n, i, a, l) {
  var S, I, _;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !cp(l) || n <= 1 || i <= 1) {
    th(t, n, i);
    return;
  }
  const c = d1(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * or * 0.5), p = Number(((_ = (I = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : I.call(S, (L) => (L == null ? void 0 : L.name) === "coverage")) == null ? void 0 : _.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = bi());
  const b = O_(l), w = Us({
    stateRevision: [
      "standalone_preview_scene",
      b,
      p
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: b,
    coverageDeg: p,
    scene: Bs(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(w) && (() => {
    const L = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      c1(a, p),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return L ? (t.drawImage(L, 0, 0, n, i), !0) : !1;
  })() || (ks(e, t, { x: 0, y: 0, w: n, h: i }, c, f, l, ws), th(t, n, i));
}
function rh(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class L_ {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Gs({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: Ht(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: J(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: J(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
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
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${zo}px`,
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
          return zo;
        },
        getHeight() {
          return zo;
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
            minHeight: Math.max(zo, Number(l.minHeight || 0)),
            minWidth: Math.max(E_, Number(l.minWidth || 0))
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
      var l, c, f;
      a.button === 0 && ((l = n.focus) == null || l.call(n, { preventScroll: !0 }), (c = t.setPointerCapture) == null || c.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var l;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
    const i = (a) => {
      var l, c;
      this.controller.state.drag.active && ((l = t.releasePointerCapture) == null || l.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    };
    t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i), n.addEventListener("wheel", (a) => {
      var l;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var l;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }), n.addEventListener("keydown", (a) => {
      var l;
      a.key !== " " && a.key !== "Spacebar" || (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !cp(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return rh(a.x, a.y, l) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - l.x, a.y - l.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var b, w, v, S, I, _;
      const l = ss(this, n, i, a), c = t.getLegacyPreviewRect();
      if (!l || !rh(l.x, l.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((b = t.view) == null ? void 0 : b.fov) || 100);
      const p = t.controller.applyWheel(Math.sign(f));
      return Number(((w = t.view) == null ? void 0 : w.fov) || 100), p && ((v = this.setDirtyCanvas) == null || v.call(this, !0, !1)), (S = n == null ? void 0 : n.preventDefault) == null || S.call(n), (I = n == null ? void 0 : n.stopPropagation) == null || I.call(n), (_ = n == null ? void 0 : n.stopImmediatePropagation) == null || _.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, l, c;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - Ql * 2), n = Math.max(60, Number(((c = (l = this.node) == null ? void 0 : l.size) == null ? void 0 : c[1]) || 0) - Jd - Ql);
    return { x: Ql, y: Jd, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), nh(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, i = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    var a, l, c;
    const t = R_(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const p = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, b = () => this.requestDraw();
      f.addEventListener("loadedmetadata", p), f.addEventListener("canplay", p), f.addEventListener("timeupdate", b), f.addEventListener("play", b), f.addEventListener("pause", b), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", p), f.removeEventListener("canplay", p), f.removeEventListener("timeupdate", b), f.removeEventListener("play", b), f.removeEventListener("pause", b);
      };
      return;
    }
    const n = F_(this.node, this.imageInputName);
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
    if (this.needsDraw = !0, this.inTick) {
      this.queuedDuringTick = !0;
      return;
    }
    this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (n = (t = this.node).setDirtyCanvas) == null || n.call(t, !0, !1);
  }
  tick(t = performance.now()) {
    var a, l;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (nh(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (l = (a = this.node).setDirtyCanvas) == null || l.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, i, a, l, c, f, p, b, w, v, S, I;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null;
    try {
      (f = (c = this.root) == null ? void 0 : c.remove) == null || f.call(c);
    } catch {
    }
    if (Array.isArray((p = this.node) == null ? void 0 : p.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((_) => _ !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((v = (w = (b = this.node) == null ? void 0 : b.widgets) == null ? void 0 : w.find) == null ? void 0 : v.call(w, (_) => (_ == null ? void 0 : _.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (I = (S = this.node.__panoStandaloneCore) == null ? void 0 : S.dispose) == null || I.call(S), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function z_(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new L_(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function fp(e, t, n) {
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
function dc(e) {
  return !!(e != null && e.prototype);
}
function Xa(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function $_(e, t = {}) {
  dc(e) || z_(e, {
    ...t,
    onOpen: Xa(e, t.onOpen)
  });
}
function V_(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, i = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!dc(e)) {
    Xd(e, {
      ...i,
      onOpen: Xa(e, t.onOpen)
    });
    return;
  }
  fp(e, "stickers_node_preview", (a) => {
    Xd(a, {
      ...i,
      onOpen: Xa(a, t.onOpen)
    });
  });
}
function j_(e, t = {}) {
  if (!dc(e)) {
    qd(e, {
      ...t,
      onOpen: Xa(e, t.onOpen)
    });
    return;
  }
  fp(e, "cutout_preview", (n) => {
    qd(n, {
      ...t,
      onOpen: Xa(n, t.onOpen)
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
}, hr = "pen";
function ih(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function H_(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const l = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function f(b) {
    if (i.splice(0, i.length), a = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((v) => {
      i.push(String(v || ""));
    }), !i.length)) return;
    const w = Number(b.index);
    Number.isInteger(w) ? w === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, w)) : a = i.length - 1;
  }
  function p(b) {
    i[a] !== b && (i.splice(a + 1), i.push(b), i.length > l && i.shift(), a = i.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      p(String(b || ""));
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
      const b = i.length, w = Math.max(0, b - c), v = a >= 0 ? Math.max(0, Math.min(a, w)) : w, S = i.slice(v, v + c), I = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - v));
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
function U_() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function G_(e) {
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
function B_(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function K_(e, t) {
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
function $o(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const l = K_(a, t);
    if (!l) return null;
    i.push(l);
  }
  return i.length >= n ? i : null;
}
function W_(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const p = $o(e.points, t, 3);
    return p ? { geometryKind: a, points: p } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const l = $o(e.points, t, 1);
  if (!l) return null;
  const c = $o(e.rawPoints, t, 1), f = $o(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: l,
    rawPoints: c || l.map((p) => ({ ...p })),
    processedPoints: f || l.map((p) => ({ ...p }))
  };
}
function Y_(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = B_(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = W_(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const l = ut(e.size, null), c = ut(e.opacity, null);
  if (l == null || c == null) return null;
  const f = String(e.id || "").trim(), p = String(e.actionGroupId || "").trim();
  if (!f || !p) return null;
  const b = ut(e.radiusValue, null), w = String(e.radiusModel || "").trim() || null;
  let v = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    v = {
      r: Math.max(0, Math.min(1, ut(S.r, 0))),
      g: Math.max(0, Math.min(1, ut(S.g, 0))),
      b: Math.max(0, Math.min(1, ut(S.b, 0))),
      a: Math.max(0, Math.min(1, ut(S.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: p,
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
    color: v,
    radiusModel: w,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: a
  };
}
function ah(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = Y_(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function q_(e) {
  if (!e || typeof e != "object") return null;
  const t = ut(e.u0, null), n = ut(e.v0, null), i = ut(e.u1, null), a = ut(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const l = (f) => Math.max(0, Math.min(1, f)), c = { u0: l(t), v0: l(n), u1: l(i), v1: l(a) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function X_(e) {
  const t = e || {};
  return {
    du: ut(t.du, 0) ?? 0,
    dv: ut(t.dv, 0) ?? 0,
    rot_deg: ut(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ut(t.scale, 1) ?? 1)
  };
}
function J_(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const l = q_(e.bbox);
  return l ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, ut(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: l,
    rasterDataUrl: a,
    transform: X_(e.transform)
  } : null;
}
function Z_(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = J_(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function Ha(e) {
  const t = U_();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: G_(e.groups),
    paint: ah(e.paint, "paint"),
    mask: ah(e.mask, "mask"),
    raster_objects: Z_(e.raster_objects)
  };
}
let Vo = { text: null, parsed: null };
function Yt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Iu(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Q_({
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
    painting: Ha(null),
    painting_layer: null,
    ui_settings: Iu(i),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function ex(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function tx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function nx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function rx(e) {
  return Array.isArray(e) ? e.map((t) => Lm(t)) : [];
}
function ix(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const i = String(t || ""), a = n.find((c) => String((c == null ? void 0 : c.id) || "") === i) || n[0], l = String((a == null ? void 0 : a.id) || "") || null;
  return { shots: [a], selectedShotId: l };
}
function dp(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, i = Q_(n), a = String(e || "").trim();
  if (!a) return i;
  try {
    let l = null;
    if (Vo.text === a ? l = Vo.parsed : (l = JSON.parse(a), Vo = { text: a, parsed: l }), !l || typeof l != "object" || Array.isArray(l)) return i;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...i,
      ...l,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: tx(l.assets),
      stickers: nx(l.stickers),
      shots: rx(l.shots),
      painting: Ha(l.painting),
      painting_layer: l.painting_layer && typeof l.painting_layer == "object" ? l.painting_layer : null,
      ui_settings: Iu(l.ui_settings),
      active: l.active && typeof l.active == "object" ? { ...l.active } : { ...i.active }
    };
    return c && (f.ui_settings = Iu({ ...f.ui_settings, ...c })), f.output_preset = ex(
      n.outputPreset,
      Number(f.output_preset || i.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || i.bg_color), f.coverage = Yt(n.coverage), delete f.editor_history, f;
  } catch {
    return Vo = { text: a, parsed: null }, i;
  }
}
function oh(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function sh(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function ax(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: J(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: J(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function lh(e = {}, t = 0) {
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
  return n === "sticker" ? (i.transform = ax((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function ox(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return la({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: sh((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((l, c) => lh(l, c)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = sh((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((l, c) => lh(l, c)).filter(Boolean);
  return la({
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
function Ja(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: J(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: J(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: J(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: J(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function As(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function sx(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || bi((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function l(v) {
    var S;
    return JSON.stringify({
      stateRevision: (v == null ? void 0 : v.stateRevision) || "",
      background: (v == null ? void 0 : v.background) || null,
      objects: Array.isArray((S = v == null ? void 0 : v.objectPass) == null ? void 0 : S.objects) ? v.objectPass.objects.map((I) => ({
        id: (I == null ? void 0 : I.id) || "",
        type: (I == null ? void 0 : I.type) || "",
        revision: (I == null ? void 0 : I.revision) || "",
        visible: (I == null ? void 0 : I.visible) !== !1,
        opacity: Number((I == null ? void 0 : I.opacity) ?? 1),
        zIndex: Number((I == null ? void 0 : I.zIndex) ?? 0),
        transform: (I == null ? void 0 : I.transform) || null,
        params: (I == null ? void 0 : I.params) || null
      })) : [],
      overlay: (v == null ? void 0 : v.overlay) || {}
    });
  }
  function c(v = {}) {
    const S = ox(v), I = l(S);
    return a === I || !n.syncState(S) ? !1 : (i = S, a = I, !0);
  }
  function f(v = {}, S = {}) {
    if (!i) return null;
    const I = Ja(v), _ = As(S);
    return n.renderToTarget(t, I, _);
  }
  function p(v, S, I = {}, _ = {}) {
    if (!v || !S || !i) return !1;
    const L = Ja(I), O = As({
      ..._,
      width: Number((S == null ? void 0 : S.w) || (_ == null ? void 0 : _.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (_ == null ? void 0 : _.height) || 1)
    });
    return n.renderToContext(v, S, L, O);
  }
  function b() {
    var v;
    i = null, a = "", (v = n.clearState) == null || v.call(n);
  }
  function w() {
    var v;
    b(), (v = n.dispose) == null || v.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: c,
    renderFrame: f,
    renderToContext: p,
    snapshotScene: () => i,
    clearScene: b,
    dispose: w
  };
}
function lx(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((l) => {
      l ? i(l) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function ux(e, t = {}) {
  var p, b;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = Ja((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((p = t == null ? void 0 : t.camera) == null ? void 0 : p.output) || ((b = t == null ? void 0 : t.view) == null ? void 0 : b.output) || null, a = As(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), l = e.renderFrame(n, a);
  if (!l) throw new Error("Panorama scene camera render returned null.");
  const c = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return lx(l, c, f);
}
function cx(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let l = Ja((n == null ? void 0 : n.view) || {}), c = !1, f = 0;
  function p() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), I = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), _ = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), L = As({ width: S, height: I, dpr: _ });
    return i.width = Math.max(1, Math.round(L.width * L.dpr)), i.height = Math.max(1, Math.round(L.height * L.dpr)), i.style.width = `${L.width}px`, i.style.height = `${L.height}px`, L;
  }
  function b() {
    if (c || !a) return !1;
    const S = p();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      l,
      { ...S, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function w() {
    c || f || (f = requestAnimationFrame(() => {
      f = 0, b();
    }));
  }
  const v = typeof ResizeObserver == "function" ? new ResizeObserver(() => w()) : null;
  return v == null || v.observe(t), w(), {
    canvas: i,
    setView(S) {
      l = Ja(S || {}), w();
    },
    getView() {
      return { ...l };
    },
    present: b,
    requestRender: w,
    unmount() {
      c = !0, f && cancelAnimationFrame(f), v == null || v.disconnect(), i.remove();
    }
  };
}
function fx(e = {}) {
  const t = sx({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(nr(n), i);
    },
    renderShotToContext(n, i, a, l = {}) {
      return t.renderToContext(n, i, nr(a), l);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? nr(i.shot) : i == null ? void 0 : i.view;
      return cx(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: nr(n.shot) } : n;
      return ux(t, i);
    }
  };
}
function zi(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((l) => String((l == null ? void 0 : l[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function dx(e = {}) {
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
function hx({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: l,
  hsv01ToRgb: c,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: p
}) {
  var $, D;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", w = {
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
    historyEntries: Array.from({ length: 8 }, (E, j) => ({ index: j, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return w;
  const v = (($ = t.find((E) => a(e.paintColor, E.color))) == null ? void 0 : $.id) || "", S = !v, I = l(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((D = e.customPaintColor) == null ? void 0 : D.a) ?? 1))) * 100), L = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), O = e.brushSizes[L] ?? 10, U = p(), k = Array.from({ length: 8 }, (E, j) => e.customPaintHistory[j] || null);
  return {
    ...w,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: v,
    customColorActive: S,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...c(I.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, I.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, I.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, I.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, I.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, I.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, I.h)) * 100}%`,
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: k.map((E, j) => ({
      index: j,
      color: E ? { cssColor: i(E, 1) } : null
    })),
    sizeValue: O,
    sizeText: String(O),
    sizeFill: `${Math.max(0, Math.min(100, (O - 1) / 119 * 100))}%`,
    sizeDisabled: U,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function mx({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function px({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: l,
  params: c,
  notes: f,
  visibilityRows: p,
  uiSettings: b,
  normalizeCoverageValue: w
}) {
  return {
    coverage: { value: w(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !i || a === "stroke" || l.length > 1,
      label: "Copy State"
    },
    params: c,
    notes: f,
    paramsDisabled: !i,
    visibilityRows: p,
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function gx({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: l,
  selectedLocked: c,
  activeAspect: f,
  cutoutAspectOpen: p,
  isExternalSticker: b,
  isStickerHidden: w,
  canRestoreSelectedToInitial: v,
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
      const E = v(), j = w(t);
      I.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: E ? "Back to initial position" : "Already at initial position",
        icon: S.back_initial,
        disabled: !E
      }), I.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: j ? "Show" : "Hide",
        tip: j ? "Show input image" : "Hide input image",
        icon: j ? S.eye : S.eye_dashed
      });
    }
    I.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? S.lock_open : S.lock_closed }), b(t) || I.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
  } else
    I = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!p,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((E) => ({ value: E, label: E, active: f === E }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: S.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  const _ = a.corners.map((E) => ({ x: Number(E == null ? void 0 : E.x), y: Number(E == null ? void 0 : E.y) })).filter((E) => Number.isFinite(E.x) && Number.isFinite(E.y));
  if (!_.length) return { visible: !1, left: 0, top: 0, items: [] };
  const L = _.map((E) => E.x), O = _.map((E) => E.y), U = Math.min(...L), k = Math.max(...L), $ = Math.min(...O), D = Math.max(...O);
  return {
    visible: !0,
    left: (U + k) * 0.5,
    top: D + 18,
    items: I,
    anchor: { minX: U, maxX: k, minY: $, maxY: D }
  };
}
const bx = { class: "pano-floating-right" }, yx = ["data-settled"], vx = ["data-ready", "data-settled"], _x = ["aria-label", "data-tip"], xx = {
  key: 1,
  class: "pano-camera-preview-label"
}, wx = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe(Ze, null, [
      ie("div", bx, [
        (Me(!0), Pe(Ze, null, Rt(e.buttons, (i) => (Me(), gi(An, {
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
            je(en, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, _x)) : Et("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), Pe("div", xx, lt(e.preview.label || "Preview unavailable"), 1)) : Et("", !0)
        ], 14, vx)
      ], 8, yx), [
        [no, e.preview.visible]
      ])
    ], 64));
  }
}, Sx = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Nx = ["y2", "transform"], Mx = ["transform"], kx = {
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
      (Me(), Pe("svg", Sx, [
        l[1] || (l[1] = ie("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Me(!0), Pe(Ze, null, Rt(Ut(n), (c) => (Me(), Pe("line", {
          key: c,
          class: st(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, Nx))), 128)),
        ie("g", { transform: i.value }, [...l[0] || (l[0] = [
          ie("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Mx),
        l[2] || (l[2] = ie("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [no, e.model.visible === !0]
    ]);
  }
}, Px = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: st(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      je(Gm, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      je(An, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      je(kx, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Ax = ["aria-label"], Cx = { class: "pano-canvas-confirm-title" }, Tx = { class: "pano-canvas-confirm-text" }, Ix = { class: "pano-canvas-confirm-actions" }, Dx = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Ex = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ yn(null), i = /* @__PURE__ */ yn(null);
    let a = null;
    function l() {
      const v = i.value;
      return v ? Array.from(v.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function c(v) {
      const S = i.value;
      if (!S) return;
      const I = S.querySelector(`[data-action='${v}']`);
      I instanceof HTMLButtonElement && I.click();
    }
    function f() {
      var L;
      const v = i.value;
      if (!v) return;
      const S = v.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const _ = l()[0] || v;
      (L = _ == null ? void 0 : _.focus) == null || L.call(_);
    }
    function p() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function b(v) {
      var U;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const S = l(), I = i.value;
      if (!S.length) {
        v.preventDefault(), (U = I == null ? void 0 : I.focus) == null || U.call(I);
        return;
      }
      const _ = S[0], L = S[S.length - 1], O = document.activeElement;
      if (v.shiftKey) {
        (O === _ || O === I || !(I != null && I.contains(O))) && (v.preventDefault(), L.focus());
        return;
      }
      (O === L || !(I != null && I.contains(O))) && (v.preventDefault(), _.focus());
    }
    function w(v) {
      v.target === n.value && c("confirm-cancel");
    }
    return si(() => t.model.visible, (v, S) => {
      if (v) {
        a = document.activeElement, Wu(() => {
          f();
        });
        return;
      }
      S && p();
    }, { immediate: !0 }), $s(() => {
      p();
    }), (v, S) => e.model.visible === !0 ? (Me(), Pe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: zr(w, ["self"])
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
        ie("div", Cx, lt(e.model.title), 1),
        ie("div", Tx, lt(e.model.text), 1),
        ie("div", Ix, [
          S[0] || (S[0] = ie("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ie("button", Dx, lt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Ax)
    ], 512)) : Et("", !0);
  }
}, Ox = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const i = n, a = /* @__PURE__ */ yn(null);
    let l, c = !1;
    function f() {
      if (!c) return { active: !1, intent: void 0 };
      const v = l;
      return l = void 0, c = !1, { active: !0, intent: v };
    }
    function p(v) {
      const S = a.value;
      return S instanceof HTMLInputElement ? (l = v, c = !0, S.value = "", S.click(), !0) : !1;
    }
    function b(v) {
      var L, O;
      const { active: S, intent: I } = f();
      if (!S) return;
      const _ = ((O = (L = v.target) == null ? void 0 : L.files) == null ? void 0 : O[0]) || null;
      if (_) {
        i("file-selected", { intent: I, file: _ });
        return;
      }
      i("file-cancelled", { intent: I });
    }
    function w() {
      const { active: v, intent: S } = f();
      v && i("file-cancelled", { intent: S });
    }
    return t({ open: p }), (v, S) => (Me(), Pe("input", {
      ref_key: "inputRef",
      ref: a,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: b,
      onCancel: w
    }, null, 544));
  }
}, Rx = ["data-paint-pane"], Fx = ["hidden"], Lx = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], zx = ["aria-pressed", "disabled"], $x = ["hidden"], Vx = { class: "pano-paint-color-pop-head" }, jx = { class: "pano-paint-color-field" }, Hx = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Ux = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Gx = { class: "pano-paint-color-field" }, Bx = { class: "pano-paint-alpha-wrap" }, Kx = ["value"], Wx = { "data-paint-alpha-value": "" }, Yx = ["hidden"], qx = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Xx = ["data-paint-history-index", "aria-label", "disabled"], Jx = ["data-paint-footer"], Zx = ["data-paint-group"], Qx = ["hidden"], ew = ["value", "disabled"], tw = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, nw = ["hidden"], rw = {
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
      (Me(!0), Pe(Ze, null, Rt(e.panes, (l) => {
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
            (Me(!0), Pe(Ze, null, Rt(e.paintSwatches, (f) => (Me(), Pe("button", {
              key: f.id,
              class: st(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Ot(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Lx))), 128)),
            ie("button", {
              class: st(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Ot({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, zx),
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
              ie("div", Vx, [
                ie("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ot({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ie("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ie("div", jx, [
                ie("div", Hx, [
                  ie("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ot({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ie("div", Ux, [
                  ie("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ot({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ie("label", Gx, [
                a[1] || (a[1] = ie("span", null, "Opacity", -1)),
                ie("div", Bx, [
                  ie("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Kx),
                  ie("span", Wx, lt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ie("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ie("div", qx, [
                  (Me(!0), Pe(Ze, null, Rt(e.state.historyEntries || [], (f) => (Me(), Pe("button", {
                    key: f.index,
                    class: st(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Ot(n(f.color))
                  }, null, 14, Xx))), 128))
                ])
              ], 8, Yx)
            ], 12, $x)
          ], 10, Fx)) : Et("", !0),
          ie("div", {
            class: "pano-paint-footer",
            "data-paint-footer": l.footer
          }, [
            ie("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": l.group
            }, [
              (Me(!0), Pe(Ze, null, Rt(l.tools, (f) => {
                var p;
                return Me(), gi(An, {
                  key: `${l.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((p = e.state.activeTools) == null ? void 0 : p[l.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Zx),
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
              }, null, 12, ew),
              ie("span", tw, lt(e.state.sizeText || "10"), 1)
            ], 10, Qx),
            ie("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[l.key]) ?? !l.clearHidden)
            }, [
              je(An, {
                icon: Ut(Ee).clear,
                label: l.clearLabel,
                tip: l.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": l.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, nw)
          ], 8, Jx)
        ], 10, Rx);
      }), 128))
    ], 2));
  }
}, iw = {
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
}, aw = {
  key: 0,
  class: "pano-cutout-menu"
}, ow = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, sw = ["data-aspect"], lw = ["data-action", "aria-label", "data-tip", "disabled"], uw = {
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
      (Me(!0), Pe(Ze, null, Rt(e.model.items || [], (i) => (Me(), Pe(Ze, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Me(), Pe("div", aw, [
          ie("button", ow, [
            je(en, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          ie("div", {
            class: st(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Me(!0), Pe(Ze, null, Rt(i.choices || [], (a) => (Me(), Pe("button", {
              key: a.value,
              class: st(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, lt(a.label), 11, sw))), 128))
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
          je(en, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, lw))
      ], 64))), 128))
    ], 4));
  }
}, cw = {
  class: "pano-side",
  "data-side": ""
}, fw = { class: "pano-side-head" }, dw = { class: "pano-side-title" }, hw = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, mw = {
  key: 0,
  class: "pano-side-scroll"
}, pw = { class: "pano-inspector" }, gw = { class: "pano-ui-row pano-coverage-row" }, bw = ["data-selected"], yw = ["aria-pressed", "disabled"], vw = ["aria-pressed", "disabled"], _w = {
  key: 0,
  class: "pano-section-title"
}, xw = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, ww = {
  class: "pano-picker",
  "data-picker": "selection"
}, Sw = ["disabled"], Nw = { class: "pano-picker-label" }, Mw = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, kw = ["hidden"], Pw = ["data-selection-id"], Aw = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Cw = {
  key: 2,
  class: "pano-state-actions"
}, Tw = ["disabled"], Iw = ["data-key"], Dw = ["min", "max", "step", "value", "disabled", "data-param-key"], Ew = ["min", "max", "step", "value", "disabled", "data-param-key"], Ow = { class: "pano-visibility-section" }, Rw = { class: "pano-visibility-stack" }, Fw = ["data-visibility-row"], Lw = { class: "pano-visibility-name" }, zw = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, $w = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], Vw = ["open"], jw = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, Hw = { class: "pano-ui-settings-body" }, Uw = { class: "pano-ui-row" }, Gw = ["data-selected"], Bw = ["aria-pressed"], Kw = ["aria-pressed"], Ww = { class: "pano-ui-row" }, Yw = ["data-selected"], qw = ["aria-pressed"], Xw = ["aria-pressed"], Jw = { class: "pano-ui-row" }, Zw = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, Qw = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, eS = { class: "pano-picker-label" }, tS = ["hidden"], nS = ["data-quality"], rS = {
  key: 1,
  class: "pano-side-footer"
}, iS = ["data-action"], aS = {
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
      var f, p, b, w, v;
      return Me(), Pe("div", cw, [
        ie("div", fw, [
          ie("div", dw, [
            ie("span", hw, [
              je(en, {
                icon: Ut(Ee).globe
              }, null, 8, ["icon"])
            ]),
            ie("span", null, lt(e.nodeTitle), 1)
          ]),
          c[0] || (c[0] = ie("div", { class: "pano-side-actions" }, null, -1))
        ]),
        c[13] || (c[13] = ie("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), Pe("div", mw, [
          ie("div", pw, [
            c[12] || (c[12] = ie("div", { class: "pano-section-title" }, [
              ie("span", null, "Scene")
            ], -1)),
            ie("div", gw, [
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
                  "aria-pressed": ((p = e.model.coverage) == null ? void 0 : p.value) === 360 ? "true" : "false",
                  disabled: ((b = e.model.coverage) == null ? void 0 : b.disabled) === !0
                }, "360", 8, yw),
                ie("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((v = e.model.coverage) == null ? void 0 : v.disabled) === !0
                }, "180", 8, vw)
              ], 8, bw)
            ]),
            e.model.transformTitle !== !1 ? (Me(), Pe("div", _w, [...c[2] || (c[2] = [
              ie("span", null, "Transform", -1)
            ])])) : Et("", !0),
            e.model.selectionPicker ? (Me(), Pe("div", xw, [
              ie("label", null, lt(e.model.selectionPicker.label), 1),
              ie("div", ww, [
                ie("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ie("span", Nw, [
                    e.model.selectionPicker.currentIcon ? (Me(), Pe("span", Mw, [
                      je(en, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Et("", !0),
                    ie("span", null, lt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  c[3] || (c[3] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Sw),
                ie("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Me(!0), Pe(Ze, null, Rt(e.model.selectionPicker.items || [], (S) => (Me(), Pe("button", {
                    key: S.id,
                    type: "button",
                    class: st(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Me(), Pe("span", Aw, [
                      je(en, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Et("", !0),
                    ie("span", null, lt(S.label), 1)
                  ], 10, Pw))), 128))
                ], 8, kw)
              ])
            ])) : Et("", !0),
            e.model.copyStateButton ? (Me(), Pe("div", Cw, [
              ie("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                je(en, {
                  icon: Ut(Ee).copy
                }, null, 8, ["icon"]),
                ie("span", null, lt(e.model.copyStateButton.label), 1)
              ], 8, Tw)
            ])) : Et("", !0),
            ie("div", {
              class: st(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Me(!0), Pe(Ze, { key: 0 }, Rt(e.model.notes, (S) => (Me(), Pe("div", {
                key: S,
                class: "pano-param-note"
              }, lt(S), 1))), 128)) : (Me(!0), Pe(Ze, { key: 1 }, Rt(e.model.params || [], (S) => (Me(), Pe("div", {
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
                }, null, 12, Dw),
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
                }, null, 8, Ew)
              ], 8, Iw))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), Pe(Ze, { key: 3 }, [
              c[5] || (c[5] = ie("div", { class: "pano-divider" }, null, -1)),
              ie("div", Ow, [
                c[4] || (c[4] = ie("div", { class: "pano-section-title" }, [
                  ie("span", null, "Layers")
                ], -1)),
                ie("div", Rw, [
                  (Me(!0), Pe(Ze, null, Rt(e.model.visibilityRows, (S) => (Me(), Pe("div", {
                    key: S.key,
                    class: st(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    ie("span", Lw, [
                      ie("span", zw, [
                        je(en, {
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
                      je(en, {
                        icon: S.visible === !0 ? Ut(Ee).eye : Ut(Ee).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, $w)
                  ], 10, Fw))), 128))
                ])
              ])
            ], 64)) : Et("", !0),
            e.model.uiSettings ? (Me(), Pe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ie("summary", null, [
                c[6] || (c[6] = ie("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ie("span", jw, [
                  je(en, {
                    icon: Ut(Ee).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ie("div", Hw, [
                ie("div", Uw, [
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
                    }, "Normal", 8, Bw),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, Kw)
                  ], 8, Gw)
                ]),
                ie("div", Ww, [
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
                    }, "Normal", 8, qw),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, Xw)
                  ], 8, Yw)
                ]),
                ie("div", Jw, [
                  c[10] || (c[10] = ie("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ie("div", Zw, [
                    ie("button", Qw, [
                      ie("span", eS, lt(e.model.uiSettings.qualityLabel), 1),
                      c[9] || (c[9] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ie("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Me(!0), Pe(Ze, null, Rt(e.model.uiSettings.qualityOptions || [], (S) => (Me(), Pe("button", {
                        key: S.value,
                        type: "button",
                        class: st(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, lt(S.label), 11, nS))), 128))
                    ], 8, tS)
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
            ], 8, Vw)) : Et("", !0)
          ])
        ])) : Et("", !0),
        (e.model.footerButtons || []).length ? (Me(), Pe("div", rS, [
          (Me(!0), Pe(Ze, null, Rt(e.model.footerButtons, (S) => (Me(), Pe("button", {
            key: S.action,
            class: st(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, lt(S.label), 11, iS))), 128))
        ])) : Et("", !0)
      ]);
    };
  }
}, oS = {
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
}, sS = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, lS = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", sS, [
      (Me(!0), Pe(Ze, null, Rt(e.buttons, (i) => oi((Me(), gi(An, {
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
        [no, i.visible !== !1]
      ])), 128))
    ]));
  }
}, uS = ["data-video-ready"], cS = { class: "pano-video-transport-shell" }, fS = { class: "pano-video-controls-left" }, dS = { class: "pano-video-filmstrip" }, hS = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, mS = ["src", "onLoad"], pS = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, gS = ["max", "value", "disabled"], bS = { class: "pano-video-controls-right" }, yS = ["data-has-audio"], vS = { class: "pano-video-volume-pop" }, _S = ["value", "disabled"], xS = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = mt(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.playing) === !0 ? "Pause" : "Play";
    }), i = mt(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.playing) === !0 ? "Pause video" : "Play video";
    }), a = mt(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.playing) === !0 ? Ee.pause : Ee.play;
    }), l = mt(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = mt(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = mt(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.loop) === !1 ? Ee.loop_off : Ee.loop;
    }), p = mt(() => {
      var E, j;
      return ((E = t.state) == null ? void 0 : E.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = mt(() => {
      var E, j, ee;
      return ((E = t.state) == null ? void 0 : E.hasAudio) !== !0 ? Ee.volume : ((j = t.state) == null ? void 0 : j.muted) === !0 || Number(((ee = t.state) == null ? void 0 : ee.volume) ?? 1) <= 0 ? Ee.volume_muted : Ee.volume2;
    }), w = mt(() => {
      var E;
      return Math.max(0, Math.min(100, Number(((E = t.state) == null ? void 0 : E.progressPct) || 0)));
    }), v = mt(() => ({ left: `${w.value}%` })), S = mt(() => {
      var Z, W;
      const E = (Z = t.state) == null ? void 0 : Z.volumePct, j = Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) * 100, ee = Number(E ?? j ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, ee))}%`
      };
    }), I = mt(() => {
      var ee, Z;
      const j = [
        String(((ee = t.state) == null ? void 0 : ee.currentTimeLabel) || "0:00"),
        String(((Z = t.state) == null ? void 0 : Z.durationLabel) || "0:00")
      ].reduce((W, A) => Math.max(W, A.length), 4);
      return `${Math.max(4, j)}ch`;
    }), _ = mt(() => ({ "--pano-video-time-ch": I.value })), L = mt(() => {
      var ee, Z;
      const E = Array.isArray((ee = t.state) == null ? void 0 : ee.thumbnails) ? t.state.thumbnails : [];
      if (E.length) return E;
      const j = Math.max(7, Number(((Z = t.state) == null ? void 0 : Z.thumbnailCount) || 9));
      return Array.from({ length: j }, (W, A) => ({
        id: `placeholder-${A}`,
        src: "",
        label: ""
      }));
    }), O = /* @__PURE__ */ yn(/* @__PURE__ */ new Set()), U = (E) => String((E == null ? void 0 : E.id) || (E == null ? void 0 : E.src) || (E == null ? void 0 : E.label) || ""), k = (E) => O.value.has(U(E)), $ = (E) => {
      const j = new Set(O.value);
      j.add(U(E)), O.value = j;
    };
    si(L, (E) => {
      const j = new Set(E.map(U)), ee = /* @__PURE__ */ new Set();
      for (const Z of O.value)
        j.has(Z) && ee.add(Z);
      O.value = ee;
    }, { immediate: !0 });
    const D = mt(() => {
      var E;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((E = t.state) == null ? void 0 : E.shellMaxWidthPx) || 640))}px`
      };
    });
    return (E, j) => (Me(), Pe("div", {
      class: st(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Ot(D.value)
    }, [
      j[1] || (j[1] = ie("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ie("div", cS, [
        ie("div", fS, [
          je(An, {
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
            style: Ot(_.value)
          }, lt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ie("div", dS, [
          ie("div", hS, [
            (Me(!0), Pe(Ze, null, Rt(L.value, (ee) => (Me(), Pe("div", {
              key: U(ee),
              class: st(["pano-video-thumb", {
                "is-placeholder": !ee.src,
                "is-loaded": ee.src && k(ee)
              }])
            }, [
              ee.src ? (Me(), Pe("img", {
                key: 0,
                src: ee.src,
                alt: "",
                draggable: "false",
                onLoad: (Z) => $(ee)
              }, null, 40, mS)) : (Me(), Pe("span", pS))
            ], 2))), 128))
          ]),
          ie("div", {
            class: "pano-video-playhead",
            style: Ot(v.value),
            "aria-hidden": "true"
          }, [...j[0] || (j[0] = [
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
          }, null, 8, gS)
        ]),
        ie("div", bS, [
          ie("div", {
            class: "pano-video-time pano-video-time-end",
            style: Ot(_.value)
          }, lt(e.state.durationLabel || "0:00"), 5),
          je(An, {
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
            ie("div", vS, [
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
              }, null, 12, _S)
            ]),
            je(An, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: p.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, yS)
        ])
      ])
    ], 14, uS));
  }
}, wS = { class: "pano-floating-top" }, SS = ["data-selected", "data-view-count"], NS = ["data-view", "aria-pressed", "aria-label", "disabled"], MS = { class: "label" }, kS = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Me(), Pe("div", wS, [
        ie("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), Pe(Ze, null, Rt(e.buttons, (a) => oi((Me(), Pe("button", {
            key: a.key,
            class: st(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            je(en, {
              icon: a.icon
            }, null, 8, ["icon"]),
            ie("span", MS, lt(a.label), 1)
          ], 10, NS)), [
            [no, a.visible !== !1]
          ])), 128))
        ], 8, SS)
      ]);
    };
  }
};
function hp(e = "stickers") {
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
const PS = ["aria-label"], AS = { class: "pano-stage-wrap" }, CS = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, TS = {
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
    const p = /* @__PURE__ */ yn(null), b = /* @__PURE__ */ yn(null), w = /* @__PURE__ */ yn(null);
    function v() {
      var A, Y;
      return ((Y = (A = w.value) == null ? void 0 : A.getRefs) == null ? void 0 : Y.call(A)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(A) {
      var Y, ue;
      return ((ue = (Y = b.value) == null ? void 0 : Y.open) == null ? void 0 : ue.call(Y, A)) === !0;
    }
    function I(A) {
      a("image-file-selected", A);
    }
    function _(A) {
      a("image-file-cancelled", A);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: S });
    const L = mt(() => i.readOnly === !0), O = mt(() => i.shellPreset || hp(i.type)), U = mt(() => {
      var Y, ue, fe;
      const A = String((((Y = i.uiState) == null ? void 0 : Y.stageStatus) === "failed" ? (ue = i.uiState) == null ? void 0 : ue.stageStatusDetail : (fe = i.uiState) == null ? void 0 : fe.stageWarningDetail) ?? "");
      return A === "background" ? "Background preview unavailable. Re-run the node to refresh it." : A === "stickers" ? "One or more sticker previews are unavailable." : A === "frame" ? "The editor hit a rendering error. Check the browser console for details." : A.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), k = mt(() => {
      var Y;
      const A = Array.isArray((Y = O.value) == null ? void 0 : Y.floatingButtons) ? O.value.floatingButtons.slice() : [];
      return L.value && A.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ee.fullscreen
      }), A;
    });
    function $() {
      const A = p.value;
      return A ? Array.from(A.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((Y) => Y instanceof HTMLElement ? !Y.hidden && Y.tabIndex >= 0 && Y.offsetParent !== null : !1) : [];
    }
    function D() {
      var ue;
      const Y = $()[0] || p.value;
      (ue = Y == null ? void 0 : Y.focus) == null || ue.call(Y);
    }
    function E() {
      var A;
      f != null && f.isConnected && ((A = f.focus) == null || A.call(f)), f = null;
    }
    function j(A) {
      var Y, ue, fe, me;
      if (!A.defaultPrevented) {
        if (A.key === "Tab") {
          const X = $();
          if (!X.length) {
            A.preventDefault(), (ue = (Y = p.value) == null ? void 0 : Y.focus) == null || ue.call(Y);
            return;
          }
          const ce = X[0], P = X[X.length - 1], de = document.activeElement;
          if (A.shiftKey) {
            (de === ce || de === p.value || !((fe = p.value) != null && fe.contains(de))) && (A.preventDefault(), P.focus());
            return;
          }
          (de === P || !((me = p.value) != null && me.contains(de))) && (A.preventDefault(), ce.focus());
          return;
        }
        A.key === "Escape" && a("close");
      }
    }
    function ee() {
      c || (l = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function Z() {
      c && (document.body.style.overflow = l, c = !1);
    }
    function W(A) {
      document.removeEventListener("keydown", j), A ? (f || (f = document.activeElement), ee(), document.addEventListener("keydown", j), Wu(() => {
        D();
      })) : (Z(), E());
    }
    return Xu(() => {
      W(i.open);
    }), $s(() => {
      Z(), document.removeEventListener("keydown", j), E();
    }), si(() => i.open, (A) => {
      W(A);
    }), (A, Y) => e.open ? (Me(), Pe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: Y[0] || (Y[0] = zr((ue) => a("close"), ["self"]))
    }, [
      ie("section", {
        ref_key: "modalRef",
        ref: p,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ie("div", AS, [
          Y[1] || (Y[1] = ie("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          Y[2] || (Y[2] = ie("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          Y[3] || (Y[3] = ie("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Me(), Pe("div", CS, lt(U.value), 1)) : Et("", !0),
          Y[4] || (Y[4] = ie("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            ie("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          je(iw, {
            ref_key: "paintOverlaysRef",
            ref: w
          }, null, 512),
          je(Ox, {
            ref_key: "imageFilePickerRef",
            ref: b,
            onFileSelected: I,
            onFileCancelled: _
          }, null, 512),
          L.value ? Et("", !0) : (Me(), Pe(Ze, { key: 1 }, [
            je(lS, {
              buttons: e.uiState.toolButtons || O.value.toolButtons || []
            }, null, 8, ["buttons"]),
            je(Px, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            je(rw, {
              "paint-swatches": e.paintSwatches,
              panes: O.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          je(xS, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          je(kS, {
            buttons: e.uiState.viewButtons || O.value.viewButtons || []
          }, null, 8, ["buttons"]),
          je(wx, {
            buttons: e.uiState.floatingButtons || k.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          je(uw, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          je(oS, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          je(Ex, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Et("", !0) : (Me(), gi(aS, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, PS)
    ])) : Et("", !0);
  }
}, Zn = "loading", ca = "ready", er = "failed";
function mp(e, t = "") {
  return e && (e.__panoLoadState = Zn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function pp(e, t = "") {
  return e && (e.__panoLoadState = ca, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function gp(e, t = "") {
  return e && (e.__panoLoadState = er, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Du(e, t) {
  return e ? e.__panoLoadState === er ? er : typeof t == "function" && t(e) ? ca : Zn : ca;
}
function Eu(e) {
  return Du(e) === er;
}
function IS({ presented: e, background: t = ca, stickers: n = [] } = {}) {
  if (!e) return { status: Zn, detail: "boot" };
  const i = Array.isArray(n) ? n : [], a = t === Zn, l = i.includes(Zn);
  if (a && l) return { status: Zn, detail: "mixed" };
  if (a) return { status: Zn, detail: "background" };
  if (l) return { status: Zn, detail: "stickers" };
  const c = t === er, f = i.includes(er);
  return c && f ? { status: er, detail: "mixed" } : c ? { status: er, detail: "background" } : f ? { status: er, detail: "stickers" } : { status: ca, detail: "" };
}
function $i(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const i = new URLSearchParams();
  i.set("filename", n), i.set("type", String(t.type || "output")), t.subfolder && i.set("subfolder", String(t.subfolder));
  const a = `/view?${i.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(a) : a;
}
function uh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function DS(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
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
function ES(e, t, n = null) {
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
  return !i && n != null && (i = DS(e == null ? void 0 : e.graph, n)), i;
}
function OS(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function RS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  return i.length ? { filename: String(i.pop() || "").trim(), subfolder: i.join("/") } : { filename: "", subfolder: "" };
}
function FS(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const i of t)
    n ^= i.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function LS({ app: e, api: t, ImageCtor: n, imageState: i } = {}) {
  const a = (D) => {
    if (!D) return "";
    if (typeof D == "string") return String(D || "").trim();
    if (Array.isArray(D)) {
      if (D.length === 0) return "";
      if (D.length === 1) return a(D[0]);
      const E = String(D[0] || "").trim();
      if (E)
        return $i(t, {
          filename: E,
          subfolder: String(D[1] || "").trim(),
          type: String(D[2] || "output").trim() || "output"
        });
      for (const j of D) {
        const ee = a(j);
        if (ee) return ee;
      }
      return "";
    }
    return typeof (D == null ? void 0 : D.src) == "string" && D.src ? D.src : typeof (D == null ? void 0 : D.url) == "string" && D.url ? D.url : $i(t, D);
  }, l = (D) => {
    if (!D || typeof D != "object") return "";
    const E = String(D.type || "").trim().toLowerCase();
    if (E === "dataurl") return String(D.value || "");
    if (E !== "comfy_image") return "";
    const j = String(D.filename || "").trim();
    return j ? $i(t, {
      filename: j,
      subfolder: String(D.subfolder || ""),
      type: String(D.storage || "input")
    }) : "";
  }, c = (D) => {
    const E = e == null ? void 0 : e.nodeOutputs;
    if (!E || D == null) return null;
    const j = String(D);
    return E instanceof Map ? E.get(D) || E.get(j) || E.get(Number(j)) || null : E[D] || E[j] || null;
  }, f = (D, E) => {
    var ee;
    const j = c(D == null ? void 0 : D.id);
    return Array.isArray((ee = j == null ? void 0 : j.ui) == null ? void 0 : ee[E]) ? j.ui[E] : Array.isArray(j == null ? void 0 : j[E]) ? j[E] : [];
  }, p = (D, E) => {
    const j = c(D == null ? void 0 : D.id);
    return j != null && j.ui && Object.prototype.hasOwnProperty.call(j.ui, E) ? j.ui[E] : j && Object.prototype.hasOwnProperty.call(j, E) ? j[E] : null;
  }, b = (D, E) => {
    const j = p(D, "pano_sticker_input_state_hash"), ee = Array.isArray(j) ? j[0] : j;
    return String(ee ?? "").trim() || FS(E);
  }, w = (D) => {
    const E = [], j = /* @__PURE__ */ new Set();
    for (const ee of D || []) {
      const Z = a(ee);
      !Z || j.has(Z) || (j.add(Z), E.push(Z));
    }
    return E;
  }, v = (D, E) => {
    var Z;
    const j = [];
    Array.isArray(D == null ? void 0 : D.images) && D.images.length && j.push(D.images), Array.isArray((Z = D == null ? void 0 : D.ui) == null ? void 0 : Z.images) && D.ui.images.length && j.push(D.ui.images);
    const ee = [];
    for (const W of j)
      E >= 0 && E < W.length && ee.push(W[E]), ee.push(...W);
    return ee;
  }, S = (D, E) => {
    var Se;
    const j = String(E || "").trim();
    if (!j) return { src: "", sourceType: "", inputName: "" };
    const ee = Array.isArray(D == null ? void 0 : D.inputs) ? D.inputs : [], Z = ee.findIndex((ke) => String((ke == null ? void 0 : ke.name) || "") === j);
    if (Z < 0) return { src: "", sourceType: "", inputName: j };
    const W = ee[Z], A = W == null ? void 0 : W.link;
    if (A == null) return { src: "", sourceType: "", inputName: j };
    const { originId: Y, originSlot: ue } = ch(uh(D == null ? void 0 : D.graph, A));
    if (Y == null) return { src: "", sourceType: "", inputName: j };
    const fe = ES(D, Z, Y);
    if (!fe) return { src: "", sourceType: "", inputName: j };
    const me = Number(ue || 0);
    let X = [];
    try {
      X = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(fe) || [] : [];
    } catch {
      X = [];
    }
    if (Array.isArray(X) && X.length) {
      const ke = [];
      me >= 0 && me < X.length && ke.push(X[me]), ke.push(...X);
      const B = w(ke);
      if (B.length)
        return { src: B[0], srcCandidates: B, sourceType: "appNodeImageUrls", inputName: j };
    }
    const ce = w(v(c((fe == null ? void 0 : fe.id) ?? Y), me));
    if (ce.length)
      return { src: ce[0], srcCandidates: ce, sourceType: "nodeOutputs", inputName: j };
    const P = Array.isArray(fe == null ? void 0 : fe.imgs) ? fe.imgs : [];
    if (P.length) {
      const ke = [];
      me >= 0 && me < P.length && ke.push(P[me]), ke.push(...P);
      const B = w(ke);
      if (B.length)
        return { src: B[0], srcCandidates: B, sourceType: "nodeImgs", inputName: j };
    }
    const de = (Se = fe == null ? void 0 : fe.widgets) == null ? void 0 : Se.find((ke) => String((ke == null ? void 0 : ke.name) || "").toLowerCase() === "image");
    if (de) {
      let ke = a(de.value);
      if (ke && !ke.includes("/") && !ke.includes(":") && (fe.comfyClass === "LoadImage" || fe.type === "LoadImage") && (ke = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(ke)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(ke)}&type=input&subfolder=`), ke) return { src: ke, sourceType: "widget", inputName: j };
    }
    return { src: "", sourceType: "", inputName: j };
  }, I = (D, E = []) => {
    const j = Array.isArray(E) ? E : [E];
    for (const ee of j) {
      const Z = S(D, ee);
      if (String((Z == null ? void 0 : Z.src) || "").trim()) return Z;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, _ = (D) => {
    const E = String(D || "").trim();
    if (!E) return [];
    if (OS(E)) return [E];
    const { filename: j, subfolder: ee } = RS(E);
    return j ? w([
      $i(t, { filename: j, subfolder: ee, type: "temp" }),
      $i(t, { filename: j, subfolder: ee, type: "output" }),
      $i(t, { filename: j, subfolder: ee, type: "input" }),
      E
    ]) : [E];
  };
  return {
    assetSource: l,
    clearFailedLinkedImages: (D) => {
      var E, j;
      try {
        (j = (E = D == null ? void 0 : D.__panoLinkedInputImageCache) == null ? void 0 : E.forEach) == null || j.call(E, (ee, Z, W) => {
          var A;
          ee != null && ee.img && ((A = i == null ? void 0 : i.isImageLoadFailed) != null && A.call(i, ee.img)) && W.delete(Z);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (D, E) => {
      var j;
      (j = D == null ? void 0 : D.delete) == null || j.call(D, `__ui__${String(E || "")}`);
    },
    linkedValue: (D, E) => {
      var W, A, Y, ue;
      const j = String(E || ""), ee = Array.isArray(D == null ? void 0 : D.inputs) ? D.inputs.find((fe) => String((fe == null ? void 0 : fe.name) || "") === j) : null;
      if ((ee == null ? void 0 : ee.link) != null) {
        const { originId: fe, originSlot: me } = ch(uh(D == null ? void 0 : D.graph, ee.link)), X = c(fe), ce = [
          X == null ? void 0 : X.output,
          X == null ? void 0 : X.result,
          (W = X == null ? void 0 : X.data) == null ? void 0 : W.output,
          (A = X == null ? void 0 : X.data) == null ? void 0 : A.result,
          (Y = X == null ? void 0 : X.ui) == null ? void 0 : Y.output,
          (ue = X == null ? void 0 : X.ui) == null ? void 0 : ue.result
        ];
        for (const P of ce) {
          if (!Array.isArray(P)) continue;
          const de = P[Number(me || 0)];
          if (typeof de == "string" && de.trim()) return de;
        }
      }
      const Z = Array.isArray(D == null ? void 0 : D.widgets) ? D.widgets.find((fe) => String((fe == null ? void 0 : fe.name) || "") === j) : null;
      return String((Z == null ? void 0 : Z.value) || "");
    },
    loadPreferredExactLinkedImage: (D, E = [], j = null, ee = "") => {
      var Fe;
      const Z = Array.isArray(E) ? E : [E], W = I(D, Z), Y = (Array.isArray(W == null ? void 0 : W.srcCandidates) && W.srcCandidates.length ? W.srcCandidates : [W == null ? void 0 : W.src]).map((Je) => String(Je || "").trim()).filter(Boolean);
      if (!Y.length) return null;
      const ue = w(Y.flatMap((Je) => _(Je)));
      if (!ue.length) return null;
      D.__panoLinkedInputImageCache || (D.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const fe = String(ee || Z.join("|") || "image_exact"), me = Y.join(`
`), X = D.__panoLinkedInputImageCache.get(fe);
      if (X && X.srcRaw === me && X.img) return X.img;
      const ce = n || globalThis.Image;
      if (typeof ce != "function") return null;
      const P = new ce();
      (Fe = i == null ? void 0 : i.markImageLoading) == null || Fe.call(i, P, me);
      const de = { srcRaw: me, resolvedSrc: "", img: P };
      D.__panoLinkedInputImageCache.set(fe, de);
      let Se = -1;
      const ke = (Je) => {
        var it, gt, Ge;
        Je === "ready" ? (it = i == null ? void 0 : i.markImageReady) == null || it.call(i, P, me) : (gt = i == null ? void 0 : i.markImageFailed) == null || gt.call(i, P, me), j == null || j(P), (Ge = D.setDirtyCanvas) == null || Ge.call(D, !0, !0);
      }, B = () => {
        if (Se += 1, Se >= ue.length) {
          ke("failed");
          return;
        }
        de.resolvedSrc = ue[Se], P.src = de.resolvedSrc;
      };
      return P.onload = () => ke("ready"), P.onerror = () => {
        if (Se + 1 < ue.length) {
          B();
          return;
        }
        ke("failed");
      }, B(), P;
    },
    output: c,
    resolvePreferredExactLinkedSource: I,
    source: a,
    uiImage: (D, E, j, ee = null) => {
      var me, X, ce;
      const Z = f(D, E)[0] || null, W = a(Z);
      if (!W) return null;
      const A = `__ui__${E}`, Y = (me = j == null ? void 0 : j.get) == null ? void 0 : me.call(j, A);
      if (Y && Y.__panoSrc === W) return Y;
      const ue = n || globalThis.Image;
      if (typeof ue != "function") return null;
      const fe = new ue();
      return fe.__panoSrc = W, (X = i == null ? void 0 : i.markImageLoading) == null || X.call(i, fe, W), fe.onload = () => {
        var P;
        (P = i == null ? void 0 : i.markImageReady) == null || P.call(i, fe, W), ee == null || ee(fe);
      }, fe.onerror = () => {
        var P;
        (P = i == null ? void 0 : i.markImageFailed) == null || P.call(i, fe, W), ee == null || ee(fe);
      }, fe.src = W, (ce = j == null ? void 0 : j.set) == null || ce.call(j, A, fe), fe;
    },
    uiList: f,
    uiValue: p
  };
}
const Cs = "state_json";
function Nr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((i) => (i == null ? void 0 : i.name) === t)) || null;
}
function zS(e) {
  var c, f;
  const t = Nr(e, Cs);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const i = dp(n, {
    coverage: (c = Nr(e, "coverage")) == null ? void 0 : c.value
  }), a = Nu(i, { type: "add-frame" });
  if (!a.changed) return !1;
  const l = JSON.stringify(a.state);
  return t.value = l, (f = t.callback) == null || f.call(t, l), !0;
}
function hc(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Nr(e, "coverage");
  if (!n) return;
  const i = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...a) {
    var c, f, p, b, w, v, S, I, _;
    const l = i ? i(...a) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (b = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || b.call(p), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), (S = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || S.call(v, !0, !0), (_ = (I = t == null ? void 0 : t.canvas) == null ? void 0 : I.setDirty) == null || _.call(I, !0, !0), l;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function $S(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function fh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function VS(e) {
  var w, v, S, I, _, L;
  if (!e) return;
  const t = Nr(e, "coverage"), n = Nr(e, "bg_color"), i = Nr(e, Cs), a = Nr(e, "sticker_state");
  if (!t || !n || !i) return;
  const l = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), f = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(l) && $S(l) && (fh(c) || c === ""))) return;
  let b = "360";
  if (fh(c))
    try {
      b = String(Yt((w = JSON.parse(c)) == null ? void 0 : w.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = l, (S = n.callback) == null || S.call(n, l), i.value = c, (I = i.callback) == null || I.call(i, c), a && (a.value = f, (_ = a.callback) == null || _.call(a, f)), (L = e.setDirtyCanvas) == null || L.call(e, !0, !0);
}
function dh(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var l, c;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.__panoComputeSizeBeforeHide = i.computeSize, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (l = i.element) != null && l.style && (i.element.style.display = "none"), (c = i.parentEl) != null && c.style && (i.parentEl.style.display = "none")));
  });
}
function Ou(e, t, n) {
  var l, c;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  if (a) {
    a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", a.options = { ...a.options || {}, hidden: !1 }, typeof a.__panoComputeSizeBeforeHide == "function" && (a.computeSize = a.__panoComputeSizeBeforeHide), delete a.__panoComputeSizeBeforeHide, (l = a.element) != null && l.style && (a.element.style.display = ""), (c = a.parentEl) != null && c.style && (a.parentEl.style.display = "");
    const f = typeof a.computeSize == "function" ? a.computeSize() : null;
    return (!Array.isArray(f) || Number(f[0] || 0) <= 0 || Number(f[1] || 0) <= 0) && (a.computeSize = () => {
      var p;
      return [Math.max(120, Number(((p = e == null ? void 0 : e.size) == null ? void 0 : p[0]) || 0) - 20), 30];
    }), a;
  }
  return a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a;
}
async function jS(e) {
  const t = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (t instanceof Map)
    for (; t.size > 0; ) {
      const n = Array.from(t.entries());
      await Promise.all(n.map(([, i]) => i)), n.forEach(([i, a]) => {
        t.get(i) === a && t.delete(i);
      });
    }
}
function hh(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const i = e.__panoStickerOperationTail, l = (i && typeof i.then == "function" ? i.catch(() => {
  }) : Promise.resolve()).then(() => n()), c = l.catch(() => {
  });
  e.__panoStickerOperationTail = c, e.__panoPendingStickerUploads.set(t, l);
  const f = () => {
    var p, b;
    ((b = (p = e.__panoPendingStickerUploads) == null ? void 0 : p.get) == null ? void 0 : b.call(p, t)) === l && e.__panoPendingStickerUploads.delete(t);
  };
  return l.then(f, f), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), l;
}
async function bp(e) {
  var n;
  const t = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of t) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function HS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...i) {
    return await jS(e), await bp(e), n ? n.apply(this, i) : this.value;
  };
}
function US(e) {
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
function mh(e, {
  app: t,
  matchType: n,
  buttonText: i,
  openEditor: a,
  attachStickers: l,
  attachCutout: c,
  enableStickersPreview: f
}) {
  if (!(e != null && e.prototype)) return;
  function p(b) {
    var S;
    const w = `editor_btn|${n}`;
    if (b.__panoPreviewAttached === !0 && b.__panoPreviewMountKey === w) return;
    US(b), hc(b, t), dh(b, Cs);
    const v = Nr(b, Cs);
    if (HS(b, v), v && !v.__panoPreviewPatchedCb) {
      v.__panoPreviewPatchedCb = !0;
      const I = v.callback;
      v.callback = (_) => {
        var O;
        const L = I ? I(_) : void 0;
        return (O = b.setDirtyCanvas) == null || O.call(b, !0, !1), L;
      };
    }
    if (n === "PanoramaStickers") {
      const I = Nr(b, "bg_color");
      I && (I.value == null || String(I.value).trim() === "" || String(I.value).toLowerCase() === "#000000") && (I.value = "#00ff00", (S = I.callback) == null || S.call(I, "#00ff00")), Ou(b, i, () => a(b, "stickers")), f && (l(b, {
        enabled: !0,
        buttonText: i,
        onOpen: () => a(b, "stickers")
      }), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260])), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = w;
      return;
    }
    Ou(b, i, () => a(b, "cutout")), c(b, {
      buttonText: i,
      onOpen: () => a(b, "cutout")
    }), b.__panoCutoutNodeSurface && dh(b, i), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260]), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = w;
  }
  for (const b of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const w = e.prototype[b];
    e.prototype[b] = function() {
      const v = w ? w.apply(this, arguments) : void 0;
      return b === "onNodeCreated" && n === "PanoramaCutout" && zS(this), b === "onConfigure" && n === "PanoramaStickers" && this.widgets && VS(this), (b === "onNodeCreated" || this.widgets) && p(this), v;
    };
  }
}
function GS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
}
function BS(e, {
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
    hc(e, t);
    const p = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    Ou(e, "Open Preview", () => p(e)), i(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: p
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  a(l);
}
function KS({
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
    beforeRegisterNodeDef(f, p) {
      const b = String((p == null ? void 0 : p.name) || "");
      (b === "PanoramaStickers" || b === "Panorama Stickers") && mh(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: i,
        enableStickersPreview: c
      }), (b === "PanoramaCutout" || b === "Panorama Cutout") && mh(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: i,
        enableStickersPreview: c
      }), _s(b) && GS(f);
    },
    nodeCreated(f) {
      const p = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      hc(f, e), _s(p) && BS(f, { app: e, openEditor: t, attachPreview: a, requestFrame: l });
    }
  };
}
const WS = "state_json", ei = "sticker_image_1", eu = "external_image", jo = "pano_sticker_input_images", YS = !1, ls = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Qt = Math.PI / 180, yr = 180 / Math.PI, tu = 1, qS = "rgb(255, 221, 87)", XS = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, JS = 64, ph = 40, nu = 16, ZS = 0.45, gh = 180, QS = 160, Ts = 24, eN = 4, tN = 4, Ho = /* @__PURE__ */ new Map(), bh = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), nN = 12, Ln = LS({
  app: zn,
  api: wn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Eu,
    markImageFailed: gp,
    markImageLoading: mp,
    markImageReady: pp
  }
}), rN = Ln.assetSource, iN = Ln.source, ru = Ln.uiImage, aN = Ln.invalidateUiImage, oN = Ln.resolvePreferredExactLinkedSource, iu = Ln.loadPreferredExactLinkedImage;
function Uo(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function sN(e) {
  return 1 - Math.pow(1 - e, 3);
}
function lN(e, t, n) {
  const i = J((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return i * i * (3 - 2 * i);
}
function uN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Lr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Lr.delete(t), Lr.set(t, n), n);
}
function cN(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (Lr.delete(n), Lr.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Lr.size > nN; ) {
      const a = Lr.keys().next().value;
      if (!a) break;
      Lr.delete(a);
    }
}
function fN(e) {
  return e * e * e;
}
function tr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Go(e, t) {
  return tr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Bo(e, t) {
  return tr(e.x * t, e.y * t, e.z * t);
}
function Fn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Ko(e, t) {
  return tr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Vi(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return tr(e.x / t, e.y / t, e.z / t);
}
function Kn(e, t) {
  const n = e * Qt, i = t * Qt, a = Math.cos(i);
  return tr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Wo(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * yr),
    pitch: J(Math.asin(J(e.y, -1, 1)) * yr, -90, 90)
  };
}
function mr(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i].x, c = t[i].y, f = t[a].x, p = t[a].y;
    c > e.y != p > e.y && e.x < (f - l) * (e.y - c) / (p - c || 1e-6) + l && (n = !n);
  }
  return n;
}
function Or(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function au(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), l = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), f = i * i + a * a;
  if (f <= 1e-6) return Or(e, t);
  const p = J((l * i + c * a) / f, 0, 1), b = Number(t.x || 0) + i * p, w = Number(t.y || 0) + a * p, v = Number(e.x || 0) - b, S = Number(e.y || 0) - w;
  return v * v + S * S;
}
function kn(e, t, n) {
  return e + (t - e) * n;
}
function Wn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${J(n, 0, 1)})`;
}
function dN(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Yo = { fillStyle: "", url: "" };
function hN(e, t, n) {
  if (Yo.url && Yo.fillStyle === String(e || ""))
    return Yo.url;
  const i = dN(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Ts}" height="${Ts}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Yo = { fillStyle: String(e || ""), url: i }, i;
}
function us(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function xn(e) {
  return {
    r: J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: J(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Zt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function mN(e) {
  return ls.some((t) => us(e, t.color));
}
function ou(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = J(Number(t), 0, 1), l = J(Number(n), 0, 1);
  if (a <= 1e-6) return { r: l, g: l, b: l };
  const c = Math.floor(i * 6), f = i * 6 - c, p = l * (1 - a), b = l * (1 - f * a), w = l * (1 - (1 - f) * a);
  switch (c % 6) {
    case 0:
      return { r: l, g: w, b: p };
    case 1:
      return { r: b, g: l, b: p };
    case 2:
      return { r: p, g: l, b: w };
    case 3:
      return { r: p, g: b, b: l };
    case 4:
      return { r: w, g: p, b: l };
    default:
      return { r: l, g: p, b };
  }
}
function su(e) {
  const t = J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), l = Math.min(t, n, i), c = a - l;
  let f = 0;
  c > 1e-6 && (a === t ? f = ((n - i) / c + (n < i ? 6 : 0)) / 6 : a === n ? f = ((i - t) / c + 2) / 6 : f = ((t - n) / c + 4) / 6);
  const p = a <= 1e-6 ? 0 : c / a;
  return { h: f, s: p, v: a };
}
function ji(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const yp = "pano_suite.ui_settings.v1", vp = "pano_suite.node_grid_visibility.v1";
let Wi = null, Yn = null;
function cs(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function pN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(yp)) || "").trim();
    if (!t) return Wi ? cs(Wi) : null;
    const n = JSON.parse(t), i = cs(n);
    return Wi = i, i;
  } catch {
    return Wi ? cs(Wi) : null;
  }
}
function gN(e) {
  var n;
  const t = cs(e);
  Wi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(yp, JSON.stringify(t));
  } catch {
  }
  return t;
}
function _p() {
  var e;
  if (Yn && typeof Yn == "object")
    return Yn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(vp)) || "").trim();
    if (!t)
      return Yn = {}, Yn;
    const n = JSON.parse(t);
    return Yn = n && typeof n == "object" ? n : {}, Yn;
  } catch {
    return Yn = {}, Yn;
  }
}
function bN(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = _p()[n];
  return typeof a == "boolean" ? a : !!t;
}
function yN(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = _p();
  i[n] = !!t, Yn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(vp, JSON.stringify(i));
  } catch {
  }
}
function vN(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function yh(e) {
  const { paintCount: t, maskCount: n } = vN(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Hi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function qo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function _N(e, t) {
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
function Xo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function xN(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function wN(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function SN(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function NN(e, t, n = {}) {
  var Rf;
  await bp(e), Ln.clearFailedLinkedImages(e);
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, l = i, c = _N(e, t);
  await Bm();
  const f = qo(e, "output_preset"), p = qo(e, "coverage"), b = qo(e, "bg_color"), w = qo(e, WS), v = () => {
    const r = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return iu(
      e,
      r,
      () => ve(),
      `background:size:${r.join("|")}`
    );
  }, S = () => {
    const r = v();
    return SN(r);
  }, I = (r = 2048) => {
    const o = f == null ? void 0 : f.value;
    return wN(o) ? S() || Math.max(1, Math.round(Number(r || 2048))) : xN(o, r);
  }, _ = dp(String((w == null ? void 0 : w.value) || ""), {
    outputPreset: I(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Yt(p == null ? void 0 : p.value),
    sharedUiSettings: pN()
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0, t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const L = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(_.shots) ? _.shots : [], o = String(((s = _ == null ? void 0 : _.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((u) => String((u == null ? void 0 : u.id) || "") === o) || r[0] || null;
  })() : null, O = L ? Xc(L, !1) : { width: 220, height: 132 }, U = hp(t), k = /* @__PURE__ */ Qa({
    stageStatus: Zn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (U.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (U.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(U.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...l ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ee.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: i,
      aspectOpen: !1,
      aspectIcon: Ee.aspect,
      rotateIcon: Ee.rotate_90,
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
      customColorCss: Wn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Wn({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
  const D = ({ intent: r, file: o } = {}) => {
    if (_a(o)) {
      if (r === "add") {
        of(o);
        return;
      }
      r === "replace" && p0(o);
    }
  }, E = ({ intent: r } = {}) => {
  }, j = km(TS, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: c,
    shellPreset: U,
    paintSwatches: ls.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Wn(r.color, 1)
    })),
    uiState: k,
    onClose: () => {
      Fi();
    },
    onImageFileSelected: D,
    onImageFileCancelled: E
  });
  let ee = null;
  try {
    ee = j.mount($);
  } catch (r) {
    try {
      j.unmount();
    } catch {
    }
    throw $.remove(), r;
  }
  const Z = $.querySelector(".pano-modal-overlay"), W = $.querySelector(".pano-modal"), A = W == null ? void 0 : W.querySelector("[data-stage-overlay]"), Y = W == null ? void 0 : W.querySelector("[data-stage-background]"), ue = W == null ? void 0 : W.querySelector(".pano-stage-wrap"), fe = ((Rf = ee == null ? void 0 : ee.getPaintOverlayRefs) == null ? void 0 : Rf.call(ee)) || {}, me = fe.cursor || null, X = fe.sizePreview || null, ce = fe.sizeSample || null;
  if (!Z || !W || !A || !Y || !ue || !me || !X || !ce)
    throw j.unmount(), $.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const P = A.getContext("2d"), de = bi(), Se = t === "cutout" ? fx({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, ke = W.querySelector("[data-side]"), B = W.querySelector("[data-video-element]"), Fe = W.querySelector(".pano-floating-right"), Je = W.querySelector(".pano-floating-top"), it = W.querySelector("[data-tool-rail]"), gt = W.querySelector("[data-frame-rail]"), Ge = W.querySelector("[data-frame-roll-knob]"), Gt = W.querySelector("[data-paint-dock]"), on = W.querySelector(".pano-video-transport"), It = W.querySelector("[data-selection-menu]"), Pt = W.querySelector("[data-tooltip]"), zt = W.querySelector("[data-camera-preview-host]"), F = W.querySelector("[data-paint-color-row]"), H = W.querySelector("[data-paint-color-pop]"), ae = W.querySelector("[data-paint-color-sv]"), xe = W.querySelector("[data-paint-color-sv-cursor]"), be = W.querySelector("[data-paint-hue-strip]"), M = W.querySelector("[data-paint-hue-handle]");
  let G = 0, q = 0;
  ue == null || ue.removeAttribute("data-stage-ready"), ue == null || ue.setAttribute("data-stage-loading-kind", "boot"), A.style.opacity = "1", Y.style.opacity = "0", a && (ke == null || ke.remove(), W.classList.add("pano-modal-readonly"));
  const re = () => {
    if (!d.customPaintSessionStart) return;
    if (us(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (mN(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const r = [
      xn(d.customPaintColor),
      ...d.customPaintHistory.filter((o) => !us(o, d.customPaintColor))
    ];
    d.customPaintHistory = r.slice(0, 8), d.customPaintSessionStart = null;
  }, Q = (r = !1) => {
    !H || H.hidden || (r ? re() : d.customPaintSessionStart = null, H.hidden = !0, k.paintDock.colorPopOpen = !1);
  }, ge = () => {
    H && (H.hidden && (d.customPaintSessionStart = xn(d.customPaintColor)), H.hidden = !1, k.paintDock.colorPopOpen = !0);
  };
  W.addEventListener("pointerdown", (r) => {
    var o;
    r.target.closest("[data-frame-roll-knob]") || Yr(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (W.querySelectorAll(".pano-picker-pop").forEach((s) => {
      s.hidden = !0;
    }), Q(!0), t === "cutout" && d.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, Ye(), ve()), (o = k.frameRail) != null && o.aspectOpen && !r.target.closest(".pano-frame-aspect-control") && (k.frameRail.aspectOpen = !1)));
  });
  const pe = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, Ae = JSON.stringify(oh(_)), d = {
    mode: "pano",
    selectedId: pe,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Yt(_.coverage),
    historyController: H_(80, { entries: [Ae], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: hr,
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
    showGrid: bN(e == null ? void 0 : e.id, !0),
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
    paintEngine: vu(),
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
  }, Ce = Se && zt ? Se.mount(zt, { shot: null }) : null;
  t === "stickers" && (d.selectedId = null, _.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const Oe = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map(), Qe = document.createElement("canvas");
  Qe.__panoFrameIdx = 0;
  const le = {
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
  }, ro = 4, Ur = 9, jn = [];
  let yi = 0;
  const xp = () => {
    var N, T;
    const r = (N = ue == null ? void 0 : ue.getBoundingClientRect) == null ? void 0 : N.call(ue), o = (T = Fe == null ? void 0 : Fe.getBoundingClientRect) == null ? void 0 : T.call(Fe), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), u = o ? Math.max(0, Number(o.width || 0)) : 0, y = u > 0 ? u + 14 + 12 : 72, g = Math.max(280, Math.floor(s - y * 2)), x = d.fullscreen ? Math.min(1200, g) : g;
    k.videoTransport.shellMaxWidthPx = x;
  }, Ws = () => {
    yi || (yi = window.requestAnimationFrame(() => {
      yi = 0, xp();
    }));
  }, Ys = () => {
    const r = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, mc = (r) => {
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
    return !!k.videoTransport.hasAudio;
  }, Cn = typeof ResizeObserver < "u" ? new ResizeObserver(() => Ws()) : null;
  Cn == null || Cn.observe(ue), Fe && (Cn == null || Cn.observe(Fe)), jn.push(() => {
    var r;
    yi && (window.cancelAnimationFrame(yi), yi = 0), (r = Cn == null ? void 0 : Cn.disconnect) == null || r.call(Cn);
  }), Ws();
  const io = () => {
    Ne.thumbnailJobId += 1, Ne.thumbnailSrc = "", k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = Ur;
  }, pc = async (r, o, s) => {
    const u = String(r || "").trim();
    if (!u) {
      io();
      return;
    }
    const h = uN(u);
    if (h) {
      Ne.thumbnailSrc = u, k.videoTransport.thumbnails = h.thumbnails, k.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (Ne.thumbnailSrc === u && Array.isArray(k.videoTransport.thumbnails) && k.videoTransport.thumbnails.length)
      return;
    const m = ++Ne.thumbnailJobId;
    Ne.thumbnailSrc = u, k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = Ur;
    const y = document.createElement("video");
    if (y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous", !await new Promise((ne) => {
      let he = !1;
      const se = (we) => {
        he || (he = !0, ne(we));
      };
      y.addEventListener("loadedmetadata", () => se(!0), { once: !0 }), y.addEventListener("canplay", () => se(!0), { once: !0 }), y.addEventListener("error", () => se(!1), { once: !0 }), y.src = u, y.load();
    }) || Ne.thumbnailJobId !== m) return;
    const x = Math.max(1, Number(y.videoWidth || 0)), N = Math.max(1, Number(y.videoHeight || 0));
    if (x < 1 || N < 1) return;
    const T = Math.max(0, Number(y.duration || o || 0)), C = document.createElement("canvas"), R = 46, V = Math.max(72, Math.round(x / N * R));
    C.width = V, C.height = R;
    const te = C.getContext("2d");
    if (!te) return;
    const K = [], z = (ne) => new Promise((he) => {
      let se = !1;
      const we = () => {
        se || (se = !0, he());
      };
      y.addEventListener("seeked", we, { once: !0 }), y.addEventListener("error", we, { once: !0 });
      try {
        y.currentTime = ne;
      } catch {
        we();
      }
    });
    for (let ne = 0; ne < Ur; ne += 1) {
      if (Ne.thumbnailJobId !== m) return;
      const he = ne / (Ur - 1), se = T > 0 ? Math.max(0, Math.min(T - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), T * he)) : 0;
      if (await z(se), Ne.thumbnailJobId !== m) return;
      te.clearRect(0, 0, V, R), te.drawImage(y, 0, 0, V, R), K.push({
        id: `thumb-${ne}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: se,
        label: al(se)
      });
    }
    Ne.thumbnailJobId === m && (k.videoTransport.thumbnails = K, k.videoTransport.thumbnailCount = K.length || Ur, cN(u, {
      thumbnails: K,
      thumbnailCount: K.length || Ur,
      duration: T,
      fps: s
    }));
  }, gc = (r) => {
    const o = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, bc = (r) => {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return null;
    const o = Number(B.videoWidth || 0), s = Number(B.videoHeight || 0), u = document.createElement("canvas");
    u.width = o, u.height = s, u.__panoFrameIdx = Number(u.__panoFrameIdx || 0) + 1;
    const h = u.getContext("2d");
    if (!h) return null;
    for (h.drawImage(B, 0, 0, o, s), Ne.frameCache.set(r, u), Ne.frameCacheOrder = Ne.frameCacheOrder.filter((m) => m !== r), Ne.frameCacheOrder.push(r); Ne.frameCacheOrder.length > ro; ) {
      const m = Ne.frameCacheOrder.shift();
      m != null && Ne.frameCache.delete(m);
    }
    return u;
  }, wp = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), u = Number(r.height || 0);
    if (s < 1 || u < 1) return !1;
    (Qe.width !== s || Qe.height !== u) && (Qe.width = s, Qe.height = u);
    const h = Qe.getContext("2d");
    return h ? (h.clearRect(0, 0, s, u), h.drawImage(r, 0, 0, s, u), Qe.__panoFrameIdx = Number(Qe.__panoFrameIdx || 0) + 1, o != null && (Ne.presentedTime = Number(o || 0)), !0) : !1;
  }, yc = (r) => {
    const o = gc(r), s = Ne.frameCache.get(o) || null;
    return s ? (Ne.currentFrameNumber = o, wp(s, r)) : !1;
  };
  if (jn.push(() => {
    io();
  }), B instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof B.requestVideoFrameCallback != "function" || B.__panoFramePumpActive) return;
      B.__panoFramePumpActive = !0;
      const g = (x, N) => {
        B.__panoFramePumpActive = !1;
        const T = Number((N == null ? void 0 : N.mediaTime) ?? B.currentTime ?? 0), C = gc(T), R = Ys();
        Ne.mode === "scrub" ? Math.abs(T - Number(Ne.editorTime || 0)) <= R && (bc(C), yc(Ne.editorTime), le.backgroundDirty = !0, le.dirty = !0, Hn({
          ready: !0,
          playing: !1,
          visible: lr(),
          currentTime: Ne.editorTime,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "scrub"
        }), ve({ cause: "frame_view", localOnly: !0 })) : (Ne.editorTime = T, Ne.presentedTime = T, Ne.requestedTime = null, Ne.currentFrameNumber = C, bc(C), Ne.frameCounter += 1, B.dataset.panoFrameIdx = String(Ne.frameCounter), le.backgroundDirty = !0, le.dirty = !0, Hn({
          ready: !0,
          playing: !B.paused && !B.ended,
          visible: lr(),
          currentTime: T,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "playback"
        }), ve({ cause: "frame_view", localOnly: !0 })), le.running && (!B.paused || Ne.mode === "scrub") && r();
      };
      try {
        B.requestVideoFrameCallback(g);
      } catch {
        B.__panoFramePumpActive = !1;
      }
    }, o = () => {
      Ne.pendingPlaybackResume && (Ne.pendingPlaybackResume = !1, Ne.mode = "playback", Ne.requestedTime = null, Mi() && (le.backgroundDirty = !0, le.dirty = !0), B.play().catch(() => {
      }));
    }, s = () => {
      Ne.editorTime = Number(B.currentTime || 0), Number(B.readyState || 0) >= 2 && Mi() && (le.backgroundDirty = !0, le.dirty = !0), ki(), r(), ve({ cause: "frame_view", localOnly: !0 });
    }, u = () => {
      Ne.mode = "playback", Ne.seeking = !1, Ne.requestedTime = null, ki(), r(), ve({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      Ne.mode === "playback" && Mi() && (le.backgroundDirty = !0, le.dirty = !0), ki(), ve({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      Hn({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: lr(),
        currentTime: Ne.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: Ne.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: B.muted,
        volume: Number(B.volume ?? k.videoTransport.volume ?? 1)
      });
    }, y = () => {
      const g = Ne.seeking || Ne.pendingPlaybackResume || Ne.mode === "scrub";
      if (Ne.seeking = !1, !g) {
        Ne.requestedTime = null, r();
        return;
      }
      const x = Number(Ne.requestedTime ?? Ne.editorTime ?? 0), N = Number(B.currentTime || 0);
      if (Math.abs(N - x) > Ys()) {
        ol(x);
        return;
      }
      Ne.mode === "scrub" && (Mi(), le.backgroundDirty = !0, le.dirty = !0, ve({ cause: "frame_view", localOnly: !0 })), Ne.requestedTime = null, o(), r();
    };
    B.addEventListener("loadedmetadata", s), B.addEventListener("loadeddata", s), B.addEventListener("canplay", s), B.addEventListener("play", u), B.addEventListener("pause", h), B.addEventListener("volumechange", m), B.addEventListener("seeked", y), jn.push(() => B.removeEventListener("loadedmetadata", s)), jn.push(() => B.removeEventListener("loadeddata", s)), jn.push(() => B.removeEventListener("canplay", s)), jn.push(() => B.removeEventListener("play", u)), jn.push(() => B.removeEventListener("pause", h)), jn.push(() => B.removeEventListener("volumechange", m)), jn.push(() => B.removeEventListener("seeked", y));
  }
  function Sp() {
    k.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", u = r.attr === "data-mask-tool";
      r.active = o ? r.value === d.primaryTool : s ? r.key === d.paintTool : u ? r.key === d.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function qs(r) {
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
    return o.files && o.files.length ? Array.from(o.files).some((s) => _a(s)) : !1;
  }
  function Gr(r) {
    const o = !!r;
    At.active !== o && (At.active = o, ue.classList.toggle("drop-active", o));
  }
  function Xs(r, o, s = d.viewFov, u = 140, h = 620) {
    const m = e1(d.viewYaw, r), y = o - d.viewPitch, g = s - d.viewFov, x = Math.hypot(m, y) + Math.abs(g) * 0.6, N = Math.round(J(u + x * 2.2, u, h));
    d.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: d.viewYaw,
      startPitch: d.viewPitch,
      startFov: d.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: m
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, ve();
  }
  Qp();
  function sr() {
    return t === "stickers" ? _.stickers : _.shots;
  }
  function qt() {
    const r = _.painting || (_.painting = Ha(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Np(r = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = _.painting) == null ? void 0 : h[r]) == null ? void 0 : m.strokes) ? _.painting[r].strokes : [], s = [], u = /* @__PURE__ */ new Set();
    for (const y of o) {
      const g = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !g || u.has(g) || (u.add(g), s.push(g));
    }
    return s;
  }
  function Mp() {
    return Np("paint");
  }
  function fa(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function da(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function $t(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function ha(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const u = s.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Js() {
    var o;
    let r = -1;
    for (const s of Array.isArray(_.stickers) ? _.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of qt())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = _.painting) == null ? void 0 : o.raster_objects) ? _.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function vc(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const u = qt();
    let h = u.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? Js() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, u.push(h)), h;
  }
  function kp(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), u = Number(r.halfW || 0), h = Number(r.halfH || 0);
    return [
      {
        u: ((o - u) % 1 + 1) % 1,
        v: J(s - h, 0, 1)
      },
      {
        u: ((o + u) % 1 + 1) % 1,
        v: J(s - h, 0, 1)
      },
      {
        u: ((o + u) % 1 + 1) % 1,
        v: J(s + h, 0, 1)
      },
      {
        u: ((o - u) % 1 + 1) % 1,
        v: J(s + h, 0, 1)
      }
    ];
  }
  function Pp() {
    const r = new Set(Mp()), s = qt().filter((u) => r.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return r.forEach((u) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === u) || s.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: Js(),
        locked: !1,
        frame: null
      });
    }), s.sort((u, h) => Number((u == null ? void 0 : u.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), _.painting.groups = s, s;
  }
  function Ap(r, o, s) {
    var K;
    const u = (z) => (Number(z || 0) % 1 + 1) % 1, h = [];
    for (const z of s) {
      const ne = z == null ? void 0 : z.geometry, he = (ne == null ? void 0 : ne.geometryKind) === "lasso_fill" ? ne == null ? void 0 : ne.points : (ne == null ? void 0 : ne.processedPoints) || (ne == null ? void 0 : ne.rawPoints) || (ne == null ? void 0 : ne.points) || [];
      Array.isArray(he) && h.push(...he);
    }
    if (!h.length) return null;
    const m = u(((K = h[0]) == null ? void 0 : K.u) || 0);
    let y = 0, g = 0;
    h.forEach((z) => {
      const ne = u((z == null ? void 0 : z.u) || 0);
      y += m + Mn(ne, m), g += Number((z == null ? void 0 : z.v) || 0);
    });
    const x = (y / h.length % 1 + 1) % 1;
    let N = 1 / 0, T = -1 / 0, C = 1 / 0, R = -1 / 0;
    h.forEach((z) => {
      const ne = u((z == null ? void 0 : z.u) || 0), he = Mn(ne, x);
      N = Math.min(N, he), T = Math.max(T, he);
      const se = Number((z == null ? void 0 : z.v) || 0);
      C = Math.min(C, se), R = Math.max(R, se);
    });
    const V = s.reduce((z, ne) => {
      const he = Dr(String((ne == null ? void 0 : ne.toolKind) || "pen")), se = pn[he] || pn[hr], we = Math.max(1, Number((ne == null ? void 0 : ne.size) || 10)) * Math.max(0.1, Number((se == null ? void 0 : se.sizeScale) ?? 1));
      return Math.max(z, we);
    }, 0), te = Math.max(35e-4, V / 2048);
    return {
      centerUv: { u: ((x + (N + T) * 0.5) % 1 + 1) % 1, v: J((C + R) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (T - N) * 0.5 + te,
      halfH: (R - C) * 0.5 + te,
      uvPad: te
    };
  }
  function Cr(r, o, s) {
    const u = String(r || "").trim();
    if (!u) return null;
    const h = qt().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === u);
    if (!h) return null;
    const m = s || Tn(u, o);
    return h.frame = Ap(u, o, m), h.frame;
  }
  function vi() {
    var u;
    const r = (Array.isArray(_.stickers) ? _.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = Pp().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = (Array.isArray((u = _.painting) == null ? void 0 : u.raster_objects) ? _.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...r, ...o, ...s].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Zs(r = !0) {
    var s, u, h, m, y, g;
    const o = vi().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (r) {
      const x = String(((u = (s = d.interaction) == null ? void 0 : s.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), N = String(((m = (h = d.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), T = String(((g = (y = d.interaction) == null ? void 0 : y.stroke) == null ? void 0 : g.toolKind) || "").trim();
      x && N === "paint" && T !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function Qs(r = !0) {
    var g, x, N, T, C, R;
    const o = vi();
    if (!r) return o;
    const s = String(((x = (g = d.interaction) == null ? void 0 : g.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), u = String(((T = (N = d.interaction) == null ? void 0 : N.stroke) == null ? void 0 : T.layerKind) || "").trim(), h = String(((R = (C = d.interaction) == null ? void 0 : C.stroke) == null ? void 0 : R.toolKind) || "").trim();
    if (!s || u !== "paint" || h === "eraser" || o.some((V) => V.type === "strokeGroup" && String(V.actionGroupId || "") === s))
      return o;
    const m = wt();
    let y = o.reduce((V, te) => Math.max(V, Number((te == null ? void 0 : te.z_index) || 0)), -1) + 1;
    return m && Ft(m) && String(m.actionGroupId || "") === s && (y = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: y,
        item: null
      }
    ].sort((V, te) => Number((V == null ? void 0 : V.z_index) || 0) - Number((te == null ? void 0 : te.z_index) || 0));
  }
  function Cp() {
    return qt().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => xi(fa("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function Tp() {
    var r;
    return (Array.isArray((r = _.painting) == null ? void 0 : r.raster_objects) ? _.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => _i(da((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function _c(r = d.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, u = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || u;
    }
    return !1;
  }
  function Ip() {
    var o, s, u, h;
    let r = null;
    try {
      const m = Zs(), y = ((h = (u = (s = (o = d.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, m)) == null ? void 0 : u.displayPaint) == null ? void 0 : h.canvas) || null;
      y && (r = {
        source: y,
        revision: `${Ii()}:${ao()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function ao() {
    var h, m, y, g, x, N, T;
    const r = d.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!_c(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const C = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, R = String(((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.layerKind) || ""), V = ((y = C == null ? void 0 : C.rawPoints) == null ? void 0 : y.length) ?? ((g = C == null ? void 0 : C.points) == null ? void 0 : g.length) ?? 0, te = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${R || "paint"}_${o}_live${te}_${V}_${d.livePaintInteractionRevision}`;
    }
    const s = String(((x = r == null ? void 0 : r.item) == null ? void 0 : x.actionGroupId) || ""), u = String(((N = r == null ? void 0 : r.item) == null ? void 0 : N.rasterObjectId) || ((T = r == null ? void 0 : r.item) == null ? void 0 : T.id) || "");
    return `_${o}_${s || u || "active"}_${d.livePaintInteractionRevision}`;
  }
  function el() {
    const r = Array.isArray(_.shots) ? _.shots : [], o = Array.isArray(_.stickers) ? _.stickers : [];
    return [...r, ...o];
  }
  function vn(r) {
    return !!r && Array.isArray(_.shots) && _.shots.includes(r);
  }
  function vt(r) {
    return !!r && Array.isArray(_.stickers) && _.stickers.includes(r);
  }
  function dn() {
    var r;
    return Array.isArray((r = _.painting) == null ? void 0 : r.raster_objects) ? _.painting.raster_objects : [];
  }
  function _i(r) {
    const o = $t(r);
    if (!o) return null;
    const s = dn().find((u) => String((u == null ? void 0 : u.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: da(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Xt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = $t(r.rasterObjectId || r.id || "");
    return !!o && !!_i(da(o));
  }
  function xi(r) {
    const o = ha(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const u = qt().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return u ? {
      ...u,
      id: fa("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Ft(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!xi(fa(s, o));
  }
  function Tn(r, o = null) {
    const s = ha(r, o), u = String(s.actionGroupId || "").trim();
    return u ? Oi(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === u) : [];
  }
  function Dp(r, o = "paint") {
    const s = String(r || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${d.mode}:${ya()}`;
    if (d.mode === "frame") {
      const m = ze(), y = String((m == null ? void 0 : m.id) || ""), g = m ? Lt(m) : null;
      return `${h}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function oo(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: J(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function Mn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function tl(r, o = null, s = null) {
    var N;
    const u = ha(r, o), h = Array.isArray(s) ? s : Tn(u.actionGroupId, u.layerKind), m = [];
    if (h.forEach((T) => {
      const C = (T == null ? void 0 : T.geometry) || null, R = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(R) && m.push(...R);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let g = 0, x = 0;
    return m.forEach((T) => {
      g += y + Mn(Number((T == null ? void 0 : T.u) || 0), y), x += Number((T == null ? void 0 : T.v) || 0);
    }), {
      u: (g / m.length % 1 + 1) % 1,
      v: J(x / m.length, 0, 1)
    };
  }
  function so(r, o, s = 1, u = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), y = Mn(Number(r.u || 0), h), g = Number(r.v || 0) - m, x = Number(u || 0) * Qt, N = Math.cos(x), T = Math.sin(x), C = Math.max(0.02, Number(s || 1)), R = (y * N - g * T) * C, V = (y * T + g * N) * C;
    return {
      ...r,
      u: ((h + R) % 1 + 1) % 1,
      v: J(m + V, 0, 1)
    };
  }
  function xc(r, o, s, u = null, h = null, m = null) {
    const y = ha(r, h), g = String(y.actionGroupId || "").trim();
    if (!g) return !1;
    const x = Oi(y.layerKind), N = Array.isArray(u) ? new Map(u.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let T = !1;
    if (x.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== g) return;
      const R = (N == null ? void 0 : N.get(String((C == null ? void 0 : C.id) || ""))) || C, V = C == null ? void 0 : C.geometry, te = R == null ? void 0 : R.geometry;
      !V || !te || (Array.isArray(te.points) && (V.points = te.points.map((K) => oo(K, o, s)), T = !0), Array.isArray(te.rawPoints) && (V.rawPoints = te.rawPoints.map((K) => oo(K, o, s)), T = !0), Array.isArray(te.processedPoints) && (V.processedPoints = te.processedPoints.map((K) => oo(K, o, s)), T = !0));
    }), T && m) {
      const C = qt().find((R) => String((R == null ? void 0 : R.actionGroupId) || "") === g);
      C && (C.frame = null);
    }
    return T;
  }
  function wc(r, o = 1, s = 0, u = null, h = null, m = null) {
    const y = ha(r, h), g = String(y.actionGroupId || "").trim();
    if (!g) return !1;
    const x = Oi(y.layerKind), N = Array.isArray(u) ? u : Tn(g, y.layerKind), T = Array.isArray(N) ? new Map(N.map((V) => [String((V == null ? void 0 : V.id) || ""), V])) : null, C = (m == null ? void 0 : m.centerUv) ?? tl(g, y.layerKind, N);
    let R = !1;
    if (x.forEach((V) => {
      if (String((V == null ? void 0 : V.actionGroupId) || "").trim() !== g) return;
      const te = (T == null ? void 0 : T.get(String((V == null ? void 0 : V.id) || ""))) || V, K = V == null ? void 0 : V.geometry, z = te == null ? void 0 : te.geometry;
      !K || !z || (Array.isArray(z.points) && (K.points = z.points.map((ne) => so(ne, C, o, s)), R = !0), Array.isArray(z.rawPoints) && (K.rawPoints = z.rawPoints.map((ne) => so(ne, C, o, s)), R = !0), Array.isArray(z.processedPoints) && (K.processedPoints = z.processedPoints.map((ne) => so(ne, C, o, s)), R = !0));
    }), R && m) {
      const V = qt().find((te) => String((te == null ? void 0 : te.actionGroupId) || "") === g);
      V && (V.frame = null);
    }
    return R;
  }
  function Sc(r, o, s, u = null) {
    const h = $t(r);
    if (!h) return !1;
    const m = dn().find((T) => String((T == null ? void 0 : T.id) || "").trim() === h);
    if (!m) return !1;
    const y = u && typeof u == "object" ? u : m, g = (y == null ? void 0 : y.transform) || {}, x = Number(g.du || 0) + Number(o || 0), N = J(Number(g.dv || 0) + Number(s || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = x, m.transform.dv = N, !0;
  }
  function Ep(r, o = 1, s = null) {
    const u = $t(r);
    if (!u) return !1;
    const h = dn().find((N) => String((N == null ? void 0 : N.id) || "").trim() === u);
    if (!h) return !1;
    const m = s && typeof s == "object" ? s : h, y = (m == null ? void 0 : m.transform) || {}, g = Math.max(0.01, Number(y.scale || 1)), x = J(g * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = x, !0;
  }
  function wt() {
    const r = String(d.selectedId || "");
    if (!r) return null;
    const o = xi(r);
    if (o) return o;
    const s = _i(r);
    return s || (t === "cutout" ? el().find((u) => String((u == null ? void 0 : u.id) || "") === r) || null : sr().find((u) => String((u == null ? void 0 : u.id) || "") === r) || null);
  }
  function In() {
    const r = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((u) => {
      const h = String(u || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const m = h === String(d.selectedId || "") ? wt() : xi(h) || _i(h) || (t === "cutout" ? el().find((y) => String((y == null ? void 0 : y.id) || "") === h) : sr().find((y) => String((y == null ? void 0 : y.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function nl(r = null) {
    const o = Array.isArray(r) ? r : In();
    if (!o || o.length < 2) return null;
    const s = o.map((N) => jt(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!s.length) return null;
    const u = s.flatMap((N) => N.corners.map((T) => Number((T == null ? void 0 : T.x) || 0))), h = s.flatMap((N) => N.corners.map((T) => Number((T == null ? void 0 : T.y) || 0))), m = Math.min(...u), y = Math.max(...u), g = Math.min(...h), x = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (g + x) * 0.5 },
      corners: [
        { x: m, y: g },
        { x: y, y: g },
        { x: y, y: x },
        { x: m, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: g, a: { x: m, y: g }, b: { x: y, y: g } },
        { edge: "right", x: y, y: (g + x) * 0.5, a: { x: y, y: g }, b: { x: y, y: x } },
        { edge: "bottom", x: (m + y) * 0.5, y: x, a: { x: y, y: x }, b: { x: m, y: x } },
        { edge: "left", x: m, y: (g + x) * 0.5, a: { x: m, y: x }, b: { x: m, y: g } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: g },
      rotateHandle: { x: (m + y) * 0.5, y: g - 30 }
    };
  }
  function Nc(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(d.selectedIds) && d.selectedIds.includes(o);
  }
  function lo() {
    const r = wt();
    return r ? Ft(r) || Xt(r) ? "stroke" : vn(r) ? "frame" : "image" : null;
  }
  function Dn(r) {
    if (!r || typeof r != "object") return !1;
    if (Ft(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = qt().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Xt(r)) {
      const o = $t(r.rasterObjectId || r.id || ""), s = dn().find((u) => String((u == null ? void 0 : u.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function rl(r = null) {
    const o = Array.isArray(r) ? r : In();
    return o.length > 0 && o.every((s) => Dn(s));
  }
  function Op(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Ft(r)) {
      const u = String(r.actionGroupId || r.id || "").trim(), h = qt().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (Xt(r)) {
      const u = $t(r.rasterObjectId || r.id || ""), h = dn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function Rp() {
    if (i) return;
    const r = In();
    if (!r.length) return;
    const o = !rl(r);
    let s = !1;
    r.forEach((u) => {
      Op(u, o) && (s = !0);
    }), s && (et(), nt(), Ye(), ve());
  }
  function wi(r) {
    d.selectedId = (r == null ? void 0 : r.id) || null, d.selectedIds = r != null && r.id ? [r.id] : [], r && vt(r) ? _.active.selected_sticker_id = r.id || null : _.active.selected_sticker_id = null, r && vn(r) ? _.active.selected_shot_id = r.id || null : r ? vn(r) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function Fp(r, o = null) {
    const s = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((y) => {
      const g = String((y == null ? void 0 : y.id) || "").trim();
      !g || u.has(g) || (u.add(g), s.push(g));
    }), d.selectedIds = s;
    const h = String(o || "").trim();
    d.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const m = wt();
    _.active.selected_sticker_id = m && vt(m) && m.id || null, m && vn(m) ? _.active.selected_shot_id = m.id || null : s.length || (_.active.selected_shot_id = null);
  }
  function Mc() {
    const r = (Array.isArray(_.shots) ? _.shots : []).map((s, u) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${u + 1}`)
    })), o = (Array.isArray(_.stickers) ? _.stickers : []).map((s, u) => {
      var m, y;
      const h = Vt(s) ? String(s.id || ei) : String(((y = (m = _.assets) == null ? void 0 : m[s.asset_id]) == null ? void 0 : y.name) || s.asset_id || s.id || `Image ${u + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...r, ...o];
  }
  function Lp(r) {
    return r === "frame" ? Ee.camera : r === "stroke" ? Ee.paintbrush_vertical_tool : Ee.image;
  }
  function il(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: Lp(r.kind)
    };
  }
  function kc() {
    return Js();
  }
  function Vt(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === ei || String(r.source_kind || "") === eu;
  }
  function Si(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function zp(r) {
    return Vt(r) && Si(r) ? Im : 1;
  }
  function $p() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function Vp() {
    return String($p() || "") === "lasso_fill";
  }
  function jp() {
    if (i) return;
    const r = wt();
    !r || !Vt(r) || (r.visible = Si(r), Bt(), et(), nt(), Ve(), Ye(), ve());
  }
  function Hp() {
    if (i || t !== "stickers") return;
    const r = wt();
    if (!r || !Vt(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = sl(jo, () => {
      ve();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Br(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), et(), nt(), Ve(), Ye(), ve();
  }
  function Up(r) {
    if (!r || !Vt(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, u = sl(jo, () => {
      ve();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (s.vFOV_deg = Br(
      s.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), s;
  }
  function Gp() {
    const r = wt();
    if (!r || !Vt(r)) return !1;
    const o = Up(r);
    if (!o) return !1;
    const s = (u, h) => Math.abs(Number(u || 0) - Number(h || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Pc(r) {
    return Ln.uiList(e, r);
  }
  function Ac(r) {
    return Ln.uiValue(e, r);
  }
  function Cc() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return _s(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Bp() {
    const { metaKey: r } = Cc(), o = Ac(r);
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
  function al(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), u = o % 60;
    return `${s}:${String(u).padStart(2, "0")}`;
  }
  function Hn(r = {}) {
    const o = Number(r.currentTime ?? Ne.editorTime ?? 0), s = Number(r.duration ?? k.videoTransport.duration ?? 0), u = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!k.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!k.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!k.videoTransport.visible, y = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(B instanceof HTMLVideoElement ? B.muted : k.videoTransport.muted), g = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : B instanceof HTMLVideoElement ? B.volume : k.videoTransport.volume
    ), x = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : mc(B), N = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!k.videoTransport.loop;
    Object.assign(k.videoTransport, {
      ready: u,
      playing: h,
      visible: m,
      loop: N,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: al(o),
      durationLabel: al(s),
      frameCount: Math.max(0, Number(r.frameCount ?? k.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? k.videoTransport.fps ?? 24)),
      mode: String(r.mode || Ne.mode || "playback"),
      hasAudio: x,
      muted: y,
      volume: Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : k.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? k.videoTransport.thumbnailCount ?? Ur))
    });
  }
  function lr() {
    return !!(B instanceof HTMLVideoElement && B.getAttribute("src") && d.primaryTool !== "paint" && d.primaryTool !== "mask");
  }
  function Kp() {
    Hn({
      visible: lr()
    });
  }
  function Mi() {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return !1;
    const r = Number(B.videoWidth || 0), o = Number(B.videoHeight || 0);
    (Qe.width !== r || Qe.height !== o) && (Qe.width = r, Qe.height = o);
    const s = Qe.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(B, 0, 0, r, o), Qe.__panoFrameIdx = Number(Qe.__panoFrameIdx || 0) + 1, Ne.presentedTime = Number(Ne.editorTime || B.currentTime || 0), !0) : !1;
  }
  function Tc() {
    return Ne.mode === "scrub" && Number(Qe.width || 0) > 0 && Number(Qe.height || 0) > 0 && Number(Qe.__panoFrameIdx || 0) > 0 ? Qe : B instanceof HTMLVideoElement && Number(B.videoWidth || 0) > 0 && Number(B.videoHeight || 0) > 0 && Number(B.readyState || 0) >= 2 ? B : null;
  }
  function ol(r) {
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
    const { videoKey: r } = Cc(), o = Pc(r)[0] || null, s = iN(o), u = Bp(), h = Math.max(0, Number((u == null ? void 0 : u.frames) || 0)), m = Math.max(1, Number((u == null ? void 0 : u.fps) || 24)), y = Number((u == null ? void 0 : u.duration) || (h > 0 ? h / m : 0)), g = !!(u != null && u.has_audio) || mc(B);
    return s && B.dataset.panoSrc !== s ? (B.pause(), B.dataset.panoSrc = s, B.dataset.panoFrameIdx = "0", B.loop = !!k.videoTransport.loop, B.muted = !!k.videoTransport.muted, B.volume = Math.max(0, Math.min(1, Number(k.videoTransport.volume ?? 1))), B.src = s, B.load(), pc(s, y, m)) : !s && B.getAttribute("src") && (B.pause(), B.removeAttribute("src"), B.load(), io()), B.loop !== !!k.videoTransport.loop && (B.loop = !!k.videoTransport.loop), s && (!Array.isArray(k.videoTransport.thumbnails) || k.videoTransport.thumbnails.length === 0) && pc(s, y, m), s || io(), Hn({
      ready: !!s,
      playing: !B.paused && !B.ended,
      visible: !!s && d.primaryTool !== "paint" && d.primaryTool !== "mask",
      currentTime: Ne.editorTime,
      duration: y,
      frameCount: h,
      fps: m,
      mode: Ne.mode,
      hasAudio: g,
      loop: !!B.loop,
      muted: !!B.muted,
      volume: Number(B.volume ?? k.videoTransport.volume ?? 1),
      thumbnailCount: k.videoTransport.thumbnailCount
    }), s || null;
  }
  function Wp(r, o = null) {
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
  function sl(r, o = null) {
    return ru(e, r, Oe, o || (() => ve()));
  }
  function Ic(r = null) {
    return sl(jo, r);
  }
  function Br(r, o, s) {
    const u = Math.max(1, Number(o || 1)), h = Math.max(1, Number(s || 1)), m = J(Number(r || 30), 0.1, 179) * Qt, y = 2 * Math.atan(Math.tan(m * 0.5) * (h / u));
    return J(y * yr, 0.1, 179);
  }
  function Yp(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const u = s.version;
      let h = null;
      if (typeof u == "number" && Number.isInteger(u) ? h = u : typeof u == "string" && /^\d+$/.test(u) && (h = Number.parseInt(u, 10)), h !== 1) return null;
      const m = s.pose;
      if (!m || typeof m != "object") return null;
      const y = Number(m.yaw_deg), g = Number(m.pitch_deg), x = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![y, g, x, N].every((V) => Number.isFinite(V))) return null;
      let T = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(T, -0) && (T = 0);
      const C = {
        yaw_deg: T,
        pitch_deg: J(g, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: J(N, 0.1, 179)
      }, R = Number(s.source_aspect);
      return Number.isFinite(R) && R > 0 && (C.source_aspect = R), C;
    } catch {
      return null;
    }
  }
  function Dc(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), u = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = na(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(o) ? o : 0),
        pitch_deg: J(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function qp(r) {
    var g;
    if (!r || typeof r != "object") return Dc(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), u = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Number(r == null ? void 0 : r.vFOV_deg);
    let y = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const x = J(h, 0.1, 179) * Qt, N = J(m, 0.1, 179) * Qt, T = Math.tan(N * 0.5);
      if (Math.abs(T) > 1e-6) {
        const C = Math.tan(x * 0.5) / T;
        Number.isFinite(C) && C > 0 && (y = C);
      }
    }
    if (r != null && r.asset_id && ((g = _ == null ? void 0 : _.assets) != null && g[r.asset_id])) {
      const x = _.assets[r.asset_id], N = Number((x == null ? void 0 : x.w) || 0), T = Number((x == null ? void 0 : x.h) || 0);
      N > 0 && T > 0 && (y = N / T);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(o) ? o : 0),
        pitch_deg: J(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function Xp(r) {
    return Ln.linkedValue(e, r);
  }
  function Jp(r, o, s) {
    const u = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : Yp(o);
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
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), m = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Br(30, h, m),
      rot_deg: 0
    };
  }
  function Ec(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((V) => String((V == null ? void 0 : V.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, u = Ic(() => {
      var V;
      (V = e.__panoExternalStickerSync) == null || V.call(e, "image-loaded");
    }), h = Wp(Ac("pano_sticker_input_pose"), null), m = Xp("sticker_state"), y = Ln.externalStateHash(e, m), g = Array.isArray(_.stickers) ? _.stickers : _.stickers = [], x = g.findIndex((V) => String((V == null ? void 0 : V.id) || "") === ei);
    if (s == null) {
      x >= 0 && (g.splice(x, 1), d.selectedId === ei && (d.selectedId = null, d.selectedIds = [], _.active.selected_sticker_id = null), nt(), Ve(), Ye(), ve());
      return;
    }
    const N = g.reduce((V, te) => Math.max(V, Number((te == null ? void 0 : te.z_index) || 0)), -1);
    let T = x >= 0 ? g[x] : null;
    const C = !T || Number(T.source_link_id ?? -1) !== Number(s) || String(T.source_state_hash || "") !== y;
    T || (T = {
      id: ei,
      source_kind: eu
    }, g.push(T)), T.id = ei, T.source_kind = eu, T.source_link_id = Number(s), T.source_state_hash = y, T.visible = T.visible !== !1;
    let R = !1;
    if (C) {
      const V = Jp(h, m, u);
      Object.assign(T, V, {
        initial_pose: { ...V },
        visible: !0,
        z_index: N + 1
      }), R = !0;
    } else if (u && (u.complete || u.naturalWidth || u.width)) {
      const V = Br(
        Number(T.hFOV_deg || 30),
        Number(u.naturalWidth || u.width || 1),
        Number(u.naturalHeight || u.height || 1)
      );
      Math.abs(Number(T.vFOV_deg || 0) - V) > 1e-6 && (T.vFOV_deg = V, R = !0);
    }
    R && (nt(), Ve(), Ye()), ve();
  }
  function ma(r = {}) {
    const s = r.preservePanelValues !== !1 ? wt() : null;
    s && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: br(s)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function Zp() {
    if (t !== "cutout") return;
    const r = ze();
    r && (d.selectedId = String(r.id || "") || null, d.selectedIds = d.selectedId ? [d.selectedId] : []);
  }
  function ll() {
    if (t !== "cutout") return;
    const r = ze();
    zi(k.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Ee.camera : Ee.plus_circle
    });
  }
  function Oc() {
    const r = t === "cutout" && d.mode === "frame", o = !r && !!d.showGrid;
    zi(k.floatingButtons, "action", "reset-view", {
      disabled: i || r
    }), zi(k.floatingButtons, "action", "toggle-grid", {
      icon: o ? Ee.eye : Ee.eye_dashed,
      pressed: o ? "true" : "false",
      label: o ? "Hide Grid" : "Show Grid",
      tip: o ? "Hide grid" : "Show grid",
      disabled: i || r
    });
  }
  function ur() {
    var s;
    const r = !!ze();
    d.mode === "frame" && !r && (d.mode = "pano"), d.outputPreviewRect = null, k.viewButtons.forEach((u) => {
      const h = u.key === d.mode;
      u.pressed = h ? "true" : "false", u.visible = !(u.key === "frame" && t !== "cutout"), u.disabled = u.key === "frame" ? !r : !1;
    });
    const o = t === "cutout" && d.mode === "frame" ? ze() : null;
    k.frameRail.visible = !!o, k.frameRail.disabled = i || (o == null ? void 0 : o.locked) === !0, k.frameRollKnob.visible = !!o && !i && o.locked !== !0, k.frameRollKnob.disabled = i || (o == null ? void 0 : o.locked) === !0, k.frameRollKnob.rollDeg = Number((o == null ? void 0 : o.roll_deg) ?? (o == null ? void 0 : o.rot_deg) ?? 0), k.frameRollKnob.displayValue = ji(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((s = d.interaction) == null ? void 0 : s.kind) === "roll_frame", k.frameRollKnob.armed = !!o && d.altModifier === !0, k.frameRail.rollKnob = k.frameRollKnob, k.frameRail.aspectLabel = o ? br(o) : "", k.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((u) => ({
      value: u,
      label: u,
      active: !!o && String(br(o)) === u
    })), o || (k.frameRail.aspectOpen = !1), k.outputPreviewToggle.visible = t === "cutout" && d.mode !== "frame" && !!ze(), t === "cutout" && k.cameraPreview && (k.cameraPreview.visible = d.mode !== "frame", k.cameraPreview.expanded = !!d.outputPreviewExpanded, k.cameraPreview.settled = k.cameraPreview.settled === !0 && le.pendingStableLayoutFrames <= 0 && le.hasPresentedFrame), Oc(), mf() ? ft(d.pointerPos) : Mt(d.mode === "pano" ? "grab" : "default");
  }
  function Qp() {
    const o = jc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function ul() {
    const r = Kn(d.viewYaw, d.viewPitch);
    let o = tr(0, 1, 0);
    Math.abs(Fn(r, o)) > 0.999 && (o = tr(0, 0, 1));
    const s = Vi(Ko(o, r)), u = Vi(Ko(r, s));
    return { right: s, up: u, fwd: r };
  }
  function pa(r) {
    const { right: o, up: s, fwd: u } = ul(), h = Fn(r, o), m = Fn(r, s), y = Fn(r, u);
    if (y <= 1e-5) return null;
    const g = A.width, x = A.height, N = d.viewFov * Qt, T = 2 * Math.atan(Math.tan(N / 2) * (x / g)), C = g / 2 / Math.tan(N / 2), R = x / 2 / Math.tan(T / 2);
    return {
      x: g / 2 + h / y * C,
      y: x / 2 - m / y * R,
      z: y
    };
  }
  function cl(r, o) {
    const { right: s, up: u, fwd: h } = ul(), m = A.width, y = A.height, g = d.viewFov * Qt, x = 2 * Math.atan(Math.tan(g / 2) * (y / m)), N = (r - m / 2) / (m / 2) * Math.tan(g / 2), T = (y / 2 - o) / (y / 2) * Math.tan(x / 2), C = Go(Go(Bo(s, N), Bo(u, T)), h);
    return Vi(C);
  }
  function Tr() {
    const r = A.width, o = A.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const g = o, x = g * s;
      return { x: (r - x) * 0.5, y: 0, w: x, h: g };
    }
    const h = r, m = h / s;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function Rc(r) {
    var y;
    if (r && typeof r == "object" && (Vt(r) || r.external === !0))
      return Ic(() => {
        var g;
        (g = e.__panoExternalStickerSync) == null || g.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = Oe.get(o);
    if (s) return s;
    const u = (y = _.assets) == null ? void 0 : y[o], h = rN(u);
    if (!h) return null;
    const m = new Image();
    return mp(m, h), m.onload = () => {
      pp(m, h), ve();
    }, m.onerror = () => {
      gp(m, h), ve();
    }, m.src = h, Oe.set(o, m), m;
  }
  function Fc(r, o = null) {
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
  function eg(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = Be.get(o);
    if (s) return s.ready ? s : null;
    const u = Fc(r, () => {
      const T = Be.get(o);
      T && (T.ready = !1), ve({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const h = Number(u.naturalWidth || u.width || 0), m = Number(u.naturalHeight || u.height || 0);
    if (h < 1 || m < 1) return null;
    const y = document.createElement("canvas");
    y.width = h, y.height = m;
    const g = y.getContext("2d", { willReadFrequently: !0 });
    if (!g) return null;
    g.clearRect(0, 0, h, m), g.drawImage(u, 0, 0, h, m);
    const x = g.getImageData(0, 0, h, m).data, N = { canvas: y, width: h, height: m, alpha: x, ready: !0 };
    return Be.set(o, N), N;
  }
  function tg(r, o, s = 1, u = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), y = Mn(Number(r.u || 0), h), g = Number(r.v || 0) - m, x = Math.max(0.02, Number(s || 1)), N = Number(u || 0) * Qt, T = Math.cos(N), C = Math.sin(N), R = y / x, V = g / x, te = R * T + V * C, K = -R * C + V * T;
    return {
      ...r,
      u: ((h + te) % 1 + 1) % 1,
      v: m + K
    };
  }
  function ng(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const u = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(u.dv || 0)
    }, y = tg(
      m,
      h,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), g = Number(s.u1 || 0) - Number(s.u0 || 0), x = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(g > 1e-6) || !(x > 1e-6)) return null;
    const N = Mn(Number(y.u || 0), Number(s.u0 || 0)) / g, T = (Number(y.v || 0) - Number(s.v0 || 0)) / x;
    if (N < 0 || N > 1 || T < 0 || T > 1) return 0;
    const C = eg(r);
    if (!C) return null;
    const R = J(Math.floor(N * C.width), 0, C.width - 1), V = J(Math.floor(T * C.height), 0, C.height - 1);
    return Number(C.alpha[(V * C.width + R) * 4 + 3] || 0);
  }
  function Lc(r, o, s, u = null) {
    if (!(o != null && o.visible) || !mr(s, o.corners)) return !1;
    const h = u || On(s, performance.now()), m = ng(r, h);
    return m === null ? !0 : m > 8;
  }
  function rg() {
    var u, h, m, y, g, x, N, T;
    const r = ((h = (u = d.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : h.call(u, Zs(!1))) || null, o = Math.max(1, Number(((m = r == null ? void 0 : r.descriptor) == null ? void 0 : m.width) || ((g = (y = r == null ? void 0 : r.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : g.width) || 2048)), s = Math.max(1, Number(((x = r == null ? void 0 : r.descriptor) == null ? void 0 : x.height) || ((T = (N = r == null ? void 0 : r.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : T.height) || 1024));
    return { width: o, height: s };
  }
  function ig() {
    var V, te, K;
    const r = d.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = _n(), u = `${ao()}:${s.width}:${s.height}`;
    if (((V = d._activePaintEraserPreviewInfo) == null ? void 0 : V.cacheKey) === u)
      return d._activePaintEraserPreviewInfo.value || null;
    const h = Zt(o), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const z = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = yl(z, h.targetSpace, !0);
    }
    const y = ba(s.width, s.height, { readback: !0 });
    if (!ef(y, h, { w: s.width, h: s.height })) return null;
    const g = ((K = (te = y.ctx) == null ? void 0 : te.getImageData(0, 0, s.width, s.height)) == null ? void 0 : K.data) || null;
    if (!g) return null;
    let x = s.width, N = s.height, T = -1, C = -1;
    for (let z = 0; z < s.height; z += 1)
      for (let ne = 0; ne < s.width; ne += 1)
        g[(z * s.width + ne) * 4 + 3] <= 8 || (ne < x && (x = ne), z < N && (N = z), ne > T && (T = ne), z > C && (C = z));
    if (T < x || C < N)
      return d._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const R = {
      surface: y,
      bounds: { minX: x, minY: N, maxX: T, maxY: C },
      key: `${u}:${x}:${N}:${T}:${C}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: u, value: R }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), R;
  }
  function Pi() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function ag(r, o, s) {
    var u, h;
    if (!r) return null;
    if (r.type === "rasterObject" && ((u = r.item) != null && u.bbox)) {
      const m = r.item.bbox, y = ((h = r.item) == null ? void 0 : h.transform) || {}, g = Number(m.u0 || 0) + Number(y.du || 0), x = Number(m.u1 || 0) + Number(y.du || 0), N = Number(m.v0 || 0) + Number(y.dv || 0), T = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(J(N, 0, 1) * s),
        maxY: Math.ceil(J(T, 0, 1) * s),
        wraps: x - g >= 1 || g < 0 || x > 1
      };
    }
    if (r.type === "strokeGroup") {
      const m = Tn(r.actionGroupId, "paint"), y = Cr(r.actionGroupId, "paint", m);
      if (!y) return null;
      const g = y.centerUv.u - y.halfW, x = y.centerUv.u + y.halfW, N = y.centerUv.v - y.halfH, T = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(J(N, 0, 1) * s),
        maxY: Math.ceil(J(T, 0, 1) * s),
        wraps: x - g >= 1 || g < 0 || x > 1
      };
    }
    return null;
  }
  function og(r, o, s) {
    if (!r || !o) return !1;
    const u = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: s - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], h = u(r), m = u(o);
    return h.some((y) => m.some((g) => !(y.maxX < g.minX || g.maxX < y.minX || y.maxY < g.minY || g.maxY < y.minY)));
  }
  function sg(r, o, s) {
    var we, Re, $e, Xe, _e, oe, ye;
    if (!r || !o || !((we = s == null ? void 0 : s.surface) != null && we.canvas) || o.type !== "rasterObject") return r;
    const u = Number(r.width || s.surface.canvas.width || 0), h = Number(r.height || s.surface.canvas.height || 0);
    if (u < 1 || h < 1) return r;
    const m = ag(o, u, h);
    if (m && !og(m, s.bounds, u)) return r;
    const y = String(((Re = o.item) == null ? void 0 : Re.id) || o.id || ""), g = (($e = o.item) == null ? void 0 : $e.transform) || {}, x = `${s.key}:${y}:${u}:${h}:${Number(g.du || 0).toFixed(6)}:${Number(g.dv || 0).toFixed(6)}:${Number(g.rot_deg || 0).toFixed(3)}:${Number(g.scale || 1).toFixed(4)}`, N = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(x)) return N.get(x);
    const T = J(Math.floor(Number(((Xe = s.bounds) == null ? void 0 : Xe.minX) || 0)), 0, Math.max(0, u - 1)), C = J(Math.floor(Number(((_e = s.bounds) == null ? void 0 : _e.minY) || 0)), 0, Math.max(0, h - 1)), R = J(Math.ceil(Number(((oe = s.bounds) == null ? void 0 : oe.maxX) || 0)), T, Math.max(0, u - 1)), V = J(Math.ceil(Number(((ye = s.bounds) == null ? void 0 : ye.maxY) || 0)), C, Math.max(0, h - 1)), te = Math.max(1, R - T + 1), K = Math.max(1, V - C + 1), z = ba(u, h, { readback: !0 });
    z.ctx.clearRect(0, 0, u, h), z.ctx.drawImage(r, 0, 0);
    const ne = z.ctx.getImageData(T, C, te, K);
    z.ctx.save(), z.ctx.globalCompositeOperation = "destination-out", z.ctx.drawImage(s.surface.canvas, 0, 0), z.ctx.restore();
    const he = z.ctx.getImageData(T, C, te, K);
    let se = !1;
    for (let Ie = 0; Ie < te * K; Ie += 1) {
      const De = ne.data[Ie * 4 + 3], Te = he.data[Ie * 4 + 3];
      if (De > Te) {
        se = !0;
        break;
      }
    }
    return se ? (N.size > 64 && N.clear(), N.set(x, z.canvas), z.canvas) : (N.set(x, r), r);
  }
  function zc(r, o = null) {
    const s = $t((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), u = (r == null ? void 0 : r.bbox) || null;
    if (!s || !u) return null;
    const h = Fc(r, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: y } = rg(), g = (r == null ? void 0 : r.transform) || {}, x = [
      s,
      m,
      y,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      g.du,
      g.dv,
      g.rot_deg,
      g.scale,
      ya()
    ].join(":"), N = bt.get(x);
    if (N) return N;
    bt.size > 64 && bt.clear();
    const T = document.createElement("canvas");
    T.width = m, T.height = y;
    const C = T.getContext("2d");
    if (!C) return null;
    const R = Number(u.u0 || 0) * m, V = Number(u.v0 || 0) * y, te = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * m), K = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * y), z = R + te * 0.5 + Number(g.du || 0) * m, ne = V + K * 0.5 + Number(g.dv || 0) * y, he = Number(g.rot_deg || 0) * Qt, se = Math.max(0.01, Number(g.scale || 1));
    for (const we of [-m, 0, m])
      C.save(), C.translate(z + we, ne), C.rotate(he), C.scale(se, se), C.drawImage(h, -te * 0.5, -K * 0.5, te, K), C.restore();
    return bt.set(x, T), T;
  }
  function lg() {
    return Bs(_, {
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function ug(r) {
    return Dm(
      _,
      (o, s, u) => Rc(u || o),
      { scene: r }
    );
  }
  function $c(r, o, s, u, h = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const m = Kr(u);
    if (Bc(o, s))
      return yg(
        o,
        s,
        m && d.showPanorama ? u : null,
        `${h}_bg_gl`
      );
    const g = ho(), x = mo(g), N = d.showObjects ? po() : ga([]), C = Da({
      stateRevision: [
        h,
        m ? Ni(u) : "no_bg",
        Array.isArray(x) ? x.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        N.length ? N.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && d.showPanorama ? u : null,
      backgroundRevision: m ? `${h}:${Ni(u)}` : "",
      coverageDeg: Yt(_.coverage),
      scene: g,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: N,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), R = de;
    if (!R.syncState(C)) return !1;
    const te = R.renderToTarget(`${h}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return te ? (r.drawImage(te, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function fl(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const u = await wn.fetchApi("/upload/image", { method: "POST", body: s });
    if (!u || u.status !== 200)
      throw new Error(`upload failed (${(u == null ? void 0 : u.status) || "no-response"})`);
    const h = await u.json(), m = String((h == null ? void 0 : h.name) || "").trim();
    if (!m)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: m,
      subfolder: String((h == null ? void 0 : h.subfolder) || "panorama_stickers"),
      storage: String((h == null ? void 0 : h.type) || "input"),
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function dl(r, o) {
    const s = await new Promise((g) => r.toBlob(g, "image/png")), u = new FormData();
    u.append("image", s, o), u.append("type", "input"), u.append("subfolder", "panorama_stickers"), u.append("overwrite", "1");
    const h = await wn.fetchApi("/upload/image", { method: "POST", body: u });
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
  let uo = null, co = !1;
  function cg() {
    const r = yh(_.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = _.painting_layer, s = Ii();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Vc() {
    const r = String(e.id ?? "0"), o = Ho.get(r);
    if (co && o) return o;
    const s = (async () => {
      var m, y, g, x, N, T, C, R, V, te, K, z;
      const u = Ii(), h = yh(_.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, uo = u, mn());
        return;
      }
      if (uo !== u && !co) {
        co = !0;
        try {
          vo();
          const ne = Zs(!1), he = ((y = (m = d.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, ne)) || null, se = ((g = he == null ? void 0 : he.displayPaint) == null ? void 0 : g.canvas) || null, we = ((x = he == null ? void 0 : he.committedMask) == null ? void 0 : x.canvas) || null, Re = Math.max(1, Number(((N = he == null ? void 0 : he.descriptor) == null ? void 0 : N.width) || (se == null ? void 0 : se.width) || (we == null ? void 0 : we.width) || 2048)), $e = Math.max(1, Number(((T = he == null ? void 0 : he.descriptor) == null ? void 0 : T.height) || (se == null ? void 0 : se.height) || (we == null ? void 0 : we.height) || 1024));
          (!se && h.totalPaintCount > 0 || !we && h.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((C = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== Re || Number(((R = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : R.height) || 0) !== $e) && (d._paintLayerSyncBlankSurface = ba(Re, $e)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Re, $e));
          const Xe = se || h.totalPaintCount > 0 && ((V = d._paintLayerSyncBlankSurface) == null ? void 0 : V.canvas) || null, _e = we || h.totalMaskCount > 0 && ((te = d._paintLayerSyncBlankSurface) == null ? void 0 : te.canvas) || null;
          if (!Xe && !_e) return;
          let oe = null, ye = null;
          const Ie = [];
          if (h.totalPaintCount > 0) {
            oe = await dl(Xe, `pano_paint_${r}.png`);
            for (const De of ne) {
              const Te = String(De || "").trim();
              if (!Te) continue;
              const Ue = ((z = (K = d.paintEngine) == null ? void 0 : K.getGroupDisplayCanvas) == null ? void 0 : z.call(K, Te)) || null;
              if (!Ue) continue;
              const rt = Te.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await dl(Ue, `pano_group_${r}_${rt}.png`);
              qe && Ie.push({
                id: Te,
                actionGroupId: Te,
                image: qe
              });
            }
          }
          h.totalMaskCount > 0 && (ye = await dl(_e, `pano_mask_${r}.png`)), u === Ii() && (_.painting_layer = {
            paint: oe,
            mask: ye,
            groups: Ie,
            revision: u
          }, uo = u, mn());
        } catch (ne) {
          throw ne;
        } finally {
          co = !1;
        }
      }
    })();
    return Ho.set(r, s), s.finally(() => {
      Ho.get(r) === s && Ho.delete(r);
    }), s;
  }
  function Ai() {
    if (t === "cutout") {
      const g = Tc();
      if (g) return g;
      const x = iu(
        e,
        ["erp_image", "bg_erp"],
        () => ve(),
        "background:cutout:erp_image|bg_erp"
      );
      return x && !Eu(x) ? x : ru(e, "pano_input_images", Oe, () => ve()) || x || null;
    }
    const r = Tc();
    if (r) return r;
    const o = ru(e, "pano_input_images", Oe, () => ve());
    if (o && !Eu(o)) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((g) => String((g == null ? void 0 : g.name) || "")) : [], u = s.includes("erp_image"), h = s.includes("bg_erp");
    let m = [];
    return i && (u || h) ? m = u ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], iu(e, m, () => ve(), `background:${m.join("|")}`) || o || null;
  }
  function Kr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function fg() {
    let r = ca;
    const o = [];
    if (d.showPanorama) {
      const s = Ai();
      r = Du(s, Kr);
    }
    if (d.showObjects) {
      const s = Array.isArray(_.stickers) ? _.stickers : [];
      for (const u of s) {
        if ((u == null ? void 0 : u.visible) === !1) continue;
        const h = Rc(u);
        o.push(Du(h, Kr));
      }
    }
    return IS({
      presented: le.hasPresentedFrame,
      background: r,
      stickers: o
    });
  }
  function Ci() {
    const r = new Set(
      (_.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(_.assets || {}).forEach((o) => {
      r.has(o) || (delete _.assets[o], Oe.delete(o));
    });
  }
  function hl(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(J(r.y, -1, 1))
    };
  }
  function ml(r, o = null) {
    const { lon: s, lat: u } = hl(r), h = Tr();
    let m = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const y = h.y + (0.5 - u / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y, z: 1 };
  }
  function fo(r) {
    const o = Kn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = tr(0, 1, 0);
    Math.abs(Fn(o, s)) > 0.999 && (s = tr(0, 0, 1));
    const u = Vi(Ko(s, o)), h = Vi(Ko(o, u)), m = Math.tan(J(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Qt), y = Math.tan(J(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Qt), g = Number(r.rot_deg || r.roll_deg || 0) * Qt, x = Math.cos(g), N = Math.sin(g);
    return {
      centerDir: o,
      right: u,
      up: h,
      tanX: m,
      tanY: y,
      cr: x,
      sr: N
    };
  }
  function Ir(r, o, s) {
    const u = o * r.cr - s * r.sr, h = o * r.sr + s * r.cr;
    return Vi(Go(Go(r.centerDir, Bo(r.right, u)), Bo(r.up, h)));
  }
  function jc(r) {
    const o = fo(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: h }) => Ir(o, u * o.tanX, h * o.tanY));
  }
  function Hc(r, o, s) {
    const u = fo(r), h = (o * 2 - 1) * u.tanX, m = (1 - s * 2) * u.tanY;
    return Ir(u, h, m);
  }
  function Uc(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: J((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function dg(r) {
    var x, N, T, C;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, u = Math.max(0.01, Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.scale) || 1)), h = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((T = r == null ? void 0 : r.transform) == null ? void 0 : T.du) || 0), y = Number(((C = r == null ? void 0 : r.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((R) => oo(so(R, s, u, h), m, y));
  }
  function hg(r) {
    const o = $t((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, u = (r == null ? void 0 : r.bbox) || {}, h = `${o}:${d.mode}:${ya()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (d.mode === "frame") {
      const m = ze(), y = m ? Lt(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function mg(r) {
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
      br(r)
    ].join(":");
    if (d.mode === "frame") {
      const h = ze(), m = h ? Lt(h) : null;
      return `${u}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${u}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function pg() {
    var o;
    const r = String(((o = _.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : r === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function Gc() {
    var r;
    return !!Y && !!((r = de == null ? void 0 : de.isSupported) != null && r.call(de));
  }
  function Bc(r, o) {
    return !Gc() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((A == null ? void 0 : A.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((A == null ? void 0 : A.height) || 0));
  }
  function ho() {
    return d.showObjects ? lg() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function mo(r) {
    return !d.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : ug(r);
  }
  function Kc() {
    var r, o;
    return ((o = (r = d.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function gg() {
    return Kc() ? `${vl()}:mask_display` : "";
  }
  function ga(r) {
    if (!d.showMask) return r;
    const o = Kc();
    if (!o) return r;
    const s = gg(), u = r.reduce((y, g) => Math.max(y, Number((g == null ? void 0 : g.zIndex) || 0)), -1), h = (Array.isArray(_.stickers) ? _.stickers : []).reduce((y, g) => Math.max(y, Number((g == null ? void 0 : g.z_index) || 0)), -1), m = Math.max(u, h);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function po() {
    var u, h;
    const r = Qs(!0), o = ig(), s = [];
    for (const m of r) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const g = ((h = (u = d.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : h.call(u, y)) || null;
        if (!g) continue;
        s.push({
          id: `paint_group:${y}`,
          source: g,
          revision: `${vl()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, g = $t((y == null ? void 0 : y.id) || m.id || "");
        if (!g) continue;
        const x = zc(y, () => ve());
        if (!x) continue;
        const N = sg(x, m, o), T = (y == null ? void 0 : y.transform) || {};
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
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return ga(s);
  }
  function bg(r, o = "modal_bg_gl") {
    const s = ho(), u = mo(s), h = Kr(r), m = h ? Ni(r) : "none", y = d.showObjects ? po() : ga([]), g = null, x = [
      o,
      m,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((N) => String((N == null ? void 0 : N.id) || "")).join(",") : "none",
      Array.isArray(u) ? u.map((N) => `${String((N == null ? void 0 : N.assetId) || "")}:${String((N == null ? void 0 : N.revision) || "")}`).join(",") : "none",
      y.length ? y.map((N) => `${String((N == null ? void 0 : N.id) || "")}:${String((N == null ? void 0 : N.revision) || "")}:${Number((N == null ? void 0 : N.zIndex) || 0)}`).join(",") : "paint:none",
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Da({
        stateRevision: x,
        backgroundSource: h ? r : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: Yt(_.coverage),
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
  function pl() {
    if (!Y) return;
    const r = Y.getContext("webgl2");
    if (r)
      r.viewport(0, 0, Y.width, Y.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = Y.getContext("2d");
      o && (o.clearRect(0, 0, Y.width, Y.height), o.fillStyle = "#070707", o.fillRect(0, 0, Y.width, Y.height));
    }
    le.backgroundWasVisible = !1, le.backgroundDirty = !1;
  }
  function yg(r, o, s, u = "modal_bg_gl") {
    var N;
    if (!Bc(r, o)) return !1;
    if (!le.backgroundDirty && le.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = bg(s, u);
    if (!m || !de.syncState(h))
      return pl(), !1;
    const g = de.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (N = Y == null ? void 0 : Y.getContext) == null ? void 0 : N.call(Y, "2d");
    return !g || !x ? (pl(), !1) : (x.clearRect(0, 0, Y.width, Y.height), x.drawImage(g, 0, 0, Y.width, Y.height), le.backgroundWasVisible = !0, le.backgroundDirty = !1, !0);
  }
  function vg(r = !1) {
    const o = A.width, s = A.height, u = Tr();
    if (P.globalAlpha = 1, P.lineWidth = 1, r || (P.fillStyle = "#070707", P.fillRect(0, 0, o, s), P.fillStyle = "#070707", P.fillRect(u.x, u.y, u.w, u.h)), vo(), $c(
      P,
      { x: u.x, y: u.y, w: u.w, h: u.h },
      { mode: "unwrap" },
      Ai(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      P.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = u.x + u.w * m / 16;
        P.beginPath(), P.moveTo(y, u.y), P.lineTo(y, u.y + u.h), P.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = u.y + u.h * m / 8;
        P.beginPath(), P.moveTo(u.x, y), P.lineTo(u.x + u.w, y), P.stroke();
      }
      P.strokeStyle = "rgba(250, 250, 250, 0.86)", P.lineWidth = 1.2, P.beginPath(), P.moveTo(u.x, u.y + u.h / 2), P.lineTo(u.x + u.w, u.y + u.h / 2), P.stroke(), P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center";
      const h = u.y + u.h * 0.57;
      P.fillText("Left", u.x + u.w * 0.25, h), P.fillText("Front", u.x + u.w * 0.5, h), P.fillText("Right", u.x + u.w * 0.75, h), P.fillText("Back", u.x + 38, h), P.fillText("Back", u.x + u.w - 38, h);
    }
  }
  function Wc(r, o, s = 1) {
    let u = !1;
    P.strokeStyle = o, P.lineWidth = s, P.beginPath();
    for (const h of r) {
      const m = pa(h);
      if (!m) {
        u = !1;
        continue;
      }
      u ? P.lineTo(m.x, m.y) : (P.moveTo(m.x, m.y), u = !0);
    }
    P.stroke();
  }
  function _g(r = !1) {
    const o = A.width, s = A.height;
    if (r || (Gc() ? P.clearRect(0, 0, o, s) : (P.fillStyle = "#070707", P.fillRect(0, 0, o, s))), vo(), $c(
      P,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov,
        coverageDeg: Yt(_.coverage)
      },
      Ai(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push(Kn(h, y));
        Wc(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push(Kn(y, h));
        Wc(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: Kn(-90, 0) },
        { name: "Front", dir: Kn(0, 0) },
        { name: "Right", dir: Kn(90, 0) },
        { name: "Back", dir: Kn(180, 0) }
      ];
      P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center", u.forEach((h) => {
        const m = pa(h.dir);
        m && P.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function xg(r, o = null, s = null, u = null) {
    if (d.mode === "frame") {
      const h = o || ze();
      if (!h) return [];
      const m = s || Lt(h);
      return n0(r, h, m);
    }
    return tf(r, u);
  }
  function go(r, o = null, s = null, u = null, h = null) {
    if (!r) return null;
    if (d.mode === "unwrap") {
      const y = tf([r], h);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = Ti(r);
    return m ? cr(m, o, s, u) : null;
  }
  function wg(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), u = Tn(s, r.layerKind), h = Cr(s, r.layerKind, u), m = (h == null ? void 0 : h.centerUv) || tl(s, r.layerKind, u), y = d.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, g = [], x = d.mode === "frame" ? ze() : null, N = x ? Lt(x) : null;
    for (const se of u) {
      const we = (se == null ? void 0 : se.geometry) || null, Re = (we == null ? void 0 : we.geometryKind) === "lasso_fill" ? we == null ? void 0 : we.points : (we == null ? void 0 : we.processedPoints) || (we == null ? void 0 : we.rawPoints) || (we == null ? void 0 : we.points) || [], $e = xg(Re, x, N, y).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y));
      if (!$e.length) continue;
      const Xe = Dr(String((se == null ? void 0 : se.toolKind) || "pen")), _e = pn[Xe] || pn[hr];
      g.push({
        points: $e,
        closed: String((we == null ? void 0 : we.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((se == null ? void 0 : se.size) || 10) * Math.max(0.1, Number((_e == null ? void 0 : _e.sizeScale) ?? 1)) + 10),
        layerKind: String((se == null ? void 0 : se.layerKind) || r.layerKind || "paint")
      });
    }
    const T = go(m, null, x, N, y);
    if (!T) {
      const se = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(o, se), se;
    }
    const R = kp(h).map((se) => go(se, T.x, x, N, y)).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y)).map((se) => ({ x: Number(se.x || 0), y: Number(se.y || 0) }));
    if (R.length < 4) {
      const se = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(o, se), se;
    }
    const V = (se, we) => ({
      x: (Number((se == null ? void 0 : se.x) || 0) + Number((we == null ? void 0 : we.x) || 0)) * 0.5,
      y: (Number((se == null ? void 0 : se.y) || 0) + Number((we == null ? void 0 : we.y) || 0)) * 0.5,
      a: se,
      b: we
    }), te = V(R[0], R[1]), K = V(R[1], R[2]), z = V(R[2], R[3]), ne = V(R[3], R[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(T.x || 0), y: Number(T.y || 0) },
      corners: R,
      edgeMidpoints: [
        { edge: "top", ...te },
        { edge: "right", ...K },
        { edge: "bottom", ...z },
        { edge: "left", ...ne }
      ],
      rotateStemBase: { x: te.x, y: te.y },
      rotateHandle: { x: te.x, y: te.y - 30 },
      strokePaths: g,
      visible: !0
    };
    return d._strokeGeomCache.set(o, he), he;
  }
  function Sg(r, o) {
    const s = d.mode === "frame" ? ze() : null, u = s ? Lt(s) : null, h = Uc(r), m = d.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, y = go(h, null, s, u, m), x = dg(r).map((R) => go(R, (y == null ? void 0 : y.x) ?? null, s, u, m)).filter((R) => Number.isFinite(R == null ? void 0 : R.x) && Number.isFinite(R == null ? void 0 : R.y));
    if (!Array.isArray(x) || x.length < 4) {
      const R = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(o, R), R;
    }
    const N = x.slice(0, 4).map((R) => ({ x: Number((R == null ? void 0 : R.x) || 0), y: Number((R == null ? void 0 : R.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: N.reduce((R, V) => R + Number(V.x || 0), 0) / N.length,
        y: N.reduce((R, V) => R + Number(V.y || 0), 0) / N.length
      },
      corners: N,
      visible: !0
    };
    return d._strokeGeomCache.set(o, C), C;
  }
  function cr(r, o = null, s = null, u = null, h = {}) {
    if (d.mode === "frame") {
      const we = s || ze(), Re = u || Lt(we);
      if (!we || !Re) return null;
      const $e = we ? va(we, r) : null;
      return $e ? {
        x: Number(Re.x || 0) + Number($e.x || 0) * Number(Re.w || 0),
        y: Number(Re.y || 0) + Number($e.y || 0) * Number(Re.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return ml(r, o);
    const { right: m, up: y, fwd: g } = ul(), x = Fn(r, m), N = Fn(r, y), T = Fn(r, g), C = 1e-4;
    if (!Number.isFinite(T) || T <= C && !(h != null && h.clipBehind)) return null;
    const R = Math.max(T, C), V = A.width, te = A.height, K = d.viewFov * Qt, z = 2 * Math.atan(Math.tan(K / 2) * (te / Math.max(V, 1))), ne = V / 2 / Math.tan(K / 2), he = te / 2 / Math.tan(z / 2), se = Math.max(V, te) * 2;
    return {
      x: J(V / 2 + x / R * ne, -se, V + se),
      y: J(te / 2 - N / R * he, -se, te + se),
      z: R,
      rawZ: T,
      clipped: T <= C
    };
  }
  function Ng(r, o = []) {
    if (d.mode !== "pano" || vt(r)) return 1;
    const s = o.map((u) => Number((u == null ? void 0 : u.rawZ) ?? (u == null ? void 0 : u.z))).filter((u) => Number.isFinite(u));
    return s.length ? lN(0.035, 0.2, Math.min(...s)) : 1;
  }
  function Mg(r) {
    const o = Kn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = d.mode === "frame" ? ze() : null, u = s ? Lt(s) : null, h = d.mode === "pano" && (vt(r) || vn(r)), m = h ? { clipBehind: !0 } : null, y = cr(o, null, s, u, m);
    if (!y) return { visible: !1 };
    const g = fo(r), N = jc(r).map((oe) => cr(oe, y.x, s, u, m)).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y));
    if (N.length < 4) return { visible: !1 };
    const T = Ir(g, 0, g.tanY), C = Ir(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), R = cr(T, y.x, s, u, m);
    if (!R) return { visible: !1 };
    const V = cr(C, (R == null ? void 0 : R.x) ?? y.x, s, u, m), te = ((V == null ? void 0 : V.x) ?? R.x) - R.x, K = ((V == null ? void 0 : V.y) ?? R.y) - R.y, z = Math.hypot(te, K) || 1, ne = {
      x: R.x + te / z * 30,
      y: R.y + K / z * 30
    }, he = cr(Ir(g, 0, g.tanY), y.x, s, u, m), se = cr(Ir(g, g.tanX, 0), y.x, s, u, m), we = cr(Ir(g, 0, -g.tanY), y.x, s, u, m), Re = cr(Ir(g, -g.tanX, 0), y.x, s, u, m);
    if (!he || !se || !we || !Re) return { visible: !1 };
    const $e = [
      y,
      ...N,
      R,
      V,
      he,
      se,
      we,
      Re
    ];
    if (h && !$e.some((oe) => Number((oe == null ? void 0 : oe.rawZ) ?? (oe == null ? void 0 : oe.z)) > 1e-4)) return { visible: !1 };
    const Xe = Ng(r, $e), _e = [
      {
        edge: "top",
        x: he.x,
        y: he.y,
        a: { x: N[0].x, y: N[0].y },
        b: { x: N[1].x, y: N[1].y }
      },
      {
        edge: "right",
        x: se.x,
        y: se.y,
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
        x: Re.x,
        y: Re.y,
        a: { x: N[3].x, y: N[3].y },
        b: { x: N[0].x, y: N[0].y }
      }
    ];
    return {
      center: { x: y.x, y: y.y },
      corners: N.map((oe) => ({ x: oe.x, y: oe.y })),
      edgeMidpoints: _e,
      rotateStemBase: { x: R.x, y: R.y },
      rotateHandle: ne,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: Xe,
      visible: !0
    };
  }
  function jt(r) {
    if (Ft(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), m = Dp(h, r.layerKind), y = d._strokeGeomCache.get(m);
      return y || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), wg(r, m));
    }
    if (Xt(r)) {
      const h = hg(r), m = d._strokeGeomCache.get(h);
      return m || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Sg(r, h));
    }
    const o = mg(r), s = d._strokeGeomCache.get(o);
    if (s) return s;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const u = Mg(r);
    return d._strokeGeomCache.set(o, u), u;
  }
  function bo(r, o, s, u = null) {
    const h = [];
    for (let m = 0; m <= s; m += 1) {
      const y = m / s;
      let g = 0, x = 0;
      o === 0 ? (g = y, x = 0) : o === 1 ? (g = 1, x = y) : o === 2 ? (g = 1 - y, x = 1) : (g = 0, x = 1 - y);
      const N = Hc(r, g, x), T = d.mode === "unwrap" ? ml(N, u) : pa(N);
      T && h.push(T);
    }
    return h;
  }
  function kg(r, o) {
    const s = Kn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), u = d.mode === "unwrap" ? ml(s) : null, h = u ? u.x : null, m = d.mode === "pano" ? 28 : 20, y = [
      bo(r, 0, m, h),
      bo(r, 1, m, h),
      bo(r, 2, m, h),
      bo(r, 3, m, h)
    ];
    P.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", P.lineWidth = o ? 2 : 1, P.beginPath();
    let g = !1;
    for (const x of y)
      for (const N of x)
        g ? P.lineTo(N.x, N.y) : (P.moveTo(N.x, N.y), g = !0);
    P.closePath(), P.stroke();
  }
  function Pg() {
    const r = [...Array.isArray(_.shots) ? _.shots : []], o = [...Array.isArray(_.stickers) ? _.stickers : []].sort((s, u) => Number(s.z_index || 0) - Number(u.z_index || 0));
    return [...r, ...o];
  }
  function gl() {
    const r = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Array.isArray(_.stickers) ? _.stickers : []].sort((s, u) => Number(u.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function yo(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function Yc(r, o, s) {
    const u = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (u.length < 4) return;
    const h = J(Number((r == null ? void 0 : r.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = P.globalAlpha;
    P.globalAlpha = m * h;
    const y = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", x = o ? 3.2 : 2.6;
    yo(P, u), P.fillStyle = g, P.fill(), P.strokeStyle = y, P.lineWidth = x, P.stroke(), P.save(), P.strokeStyle = y, P.lineWidth = o ? 3.2 : 2.6, P.lineCap = "round";
    const N = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (u[0].x + u[1].x) * 0.5, y: (u[0].y + u[1].y) * 0.5 },
      { edge: "right", x: (u[1].x + u[2].x) * 0.5, y: (u[1].y + u[2].y) * 0.5 },
      { edge: "bottom", x: (u[2].x + u[3].x) * 0.5, y: (u[2].y + u[3].y) * 0.5 },
      { edge: "left", x: (u[3].x + u[0].x) * 0.5, y: (u[3].y + u[0].y) * 0.5 }
    ], T = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = o ? 12 : 9;
    N.forEach((R) => {
      const te = N.find((he) => (he == null ? void 0 : he.edge) === T[R == null ? void 0 : R.edge]) || {
        x: (u[0].x + u[1].x + u[2].x + u[3].x) * 0.25,
        y: (u[0].y + u[1].y + u[2].y + u[3].y) * 0.25
      }, K = te.x - R.x, z = te.y - R.y, ne = Math.hypot(K, z) || 1;
      P.beginPath(), P.moveTo(R.x, R.y), P.lineTo(R.x + K / ne * C, R.y + z / ne * C), P.stroke();
    }), P.restore(), P.globalAlpha = m;
  }
  function Ag(r, o, s, u) {
    const h = J(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (vn(r)) {
      Yc(o, s, u);
      return;
    }
    if (vt(r)) {
      const y = P.globalAlpha;
      P.globalAlpha = y * zp(r) * h, d.mode === "frame" ? (P.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", P.lineWidth = s ? 2 : 1, yo(P, o.corners), P.stroke()) : kg(r, s), P.globalAlpha = y;
      return;
    }
    const m = P.globalAlpha;
    P.globalAlpha = m * h, P.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", yo(P, o.corners), P.fill(), P.strokeStyle = s ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", P.lineWidth = s ? 2.8 : 1.9, yo(P, o.corners), P.stroke(), P.globalAlpha = m;
  }
  function qc(r, o, s) {
    P.fillStyle = s, o.corners.forEach((u) => {
      P.beginPath(), P.arc(u.x, u.y, 6.5, 0, Math.PI * 2), P.fill();
    }), vn(r) && (P.strokeStyle = s, P.lineCap = "round", P.lineWidth = 4, o.edgeMidpoints.forEach((u) => {
      var T, C, R, V;
      const h = (((T = u.b) == null ? void 0 : T.x) ?? u.x) - (((C = u.a) == null ? void 0 : C.x) ?? u.x), m = (((R = u.b) == null ? void 0 : R.y) ?? u.y) - (((V = u.a) == null ? void 0 : V.y) ?? u.y), y = Math.hypot(h, m) || 1, g = h / y, x = m / y, N = 10;
      P.beginPath(), P.moveTo(u.x - g * N, u.y - x * N), P.lineTo(u.x + g * N, u.y + x * N), P.stroke();
    }), P.lineCap = "butt"), Ft(r) || (P.strokeStyle = "rgba(250, 250, 250, 0.9)", P.lineWidth = 1.8, P.beginPath(), P.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), P.lineTo(o.rotateHandle.x, o.rotateHandle.y), P.stroke(), P.fillStyle = s, P.beginPath(), P.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), P.fill());
  }
  function Cg() {
    var g;
    const [r, o] = pg(), s = d.mode === "frame" ? [] : In(), u = s.length > 1, h = t === "cutout" ? Pg() : sr(), m = h.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${vn(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== h || d._sortedItemsCache.orderKey !== m) && (d._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const y = d._sortedItemsCache.sorted;
    for (const x of y) {
      const N = d.mode !== "frame" && !u && Nc(x);
      if (d.mode === "frame" && !N || !d.showObjects && !vn(x)) continue;
      const T = vt(x), C = vn(x), R = Dn(x);
      if (!T && !C)
        continue;
      const V = jt(x);
      if (t !== "stickers" && !V.visible)
        continue;
      const te = J(Number((V == null ? void 0 : V.visibilityAlpha) ?? 1), 0, 1);
      if (te <= 0.01) continue;
      const K = C && t === "cutout" && d.mode === "pano" ? J(Number(d.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (P.save(), P.globalAlpha *= K, Ag(x, V, N, R), N && V.visible) {
        const z = R ? "#ff4d4f" : T && Vt(x) ? "#f59e0b" : "#0070f3", ne = P.globalAlpha;
        P.globalAlpha = ne * te, qc(x, V, z), P.globalAlpha = ne;
      }
      P.restore();
    }
    if (t === "cutout" && d.mode === "pano" && !ze() && d.cutoutPanoFrameVisual && d.cutoutPanoFrameAlpha > 1e-4) {
      const x = d.cutoutPanoFrameVisual, N = J(Number(d.cutoutPanoFrameAlpha || 0), 0, 1);
      P.save(), P.globalAlpha *= N, Yc(x.geom, x.selected, x.locked), x.selected && qc(
        x.item,
        x.geom,
        x.locked ? "#ff4d4f" : "#0070f3"
      ), P.restore();
    }
    if (u) {
      const x = nl(s);
      if (x != null && x.visible) {
        const N = rl(s) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(x.corners[0].x, x.corners[0].y);
        for (let T = 1; T < x.corners.length; T += 1) P.lineTo(x.corners[T].x, x.corners[T].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = N, x.corners.forEach((T) => {
          P.beginPath(), P.arc(T.x, T.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      }
    } else
      s.forEach((x) => {
        if (!Ft(x) && !Xt(x)) return;
        const N = jt(x);
        if (!(N != null && N.visible)) return;
        const T = Dn(x) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(N.corners[0].x, N.corners[0].y);
        for (let C = 1; C < N.corners.length; C += 1) P.lineTo(N.corners[C].x, N.corners[C].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = T, N.corners.forEach((C) => {
          P.beginPath(), P.arc(C.x, C.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      });
    if (((g = d.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const x = vf(d.interaction.start, d.interaction.current);
      P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.9)", P.fillStyle = "rgba(255, 255, 255, 0.08)", P.lineWidth = 1, P.setLineDash([5, 4]), P.beginPath(), P.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), P.fill(), P.stroke(), P.restore();
    }
    d.hqFrames && r >= 40 && o >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && ve());
  }
  function Tg(r) {
    const o = nr(r), s = J(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), u = 320;
    return s >= 1 ? { width: u, height: Math.max(1, Math.round(u / s)) } : { width: Math.max(1, Math.round(u * s)), height: u };
  }
  function Xc(r, o = !1) {
    const s = J(na(r), 0.05, 20), u = o ? 320 : 220;
    return s >= 1 ? { width: u, height: Math.max(1, Math.round(u / s)) } : { width: Math.max(1, Math.round(u * s)), height: u };
  }
  function Ig(r) {
    if (!zt || !r) return !1;
    const o = zt.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || zt.clientWidth || 0)), u = Math.round(Number(o.clientHeight || zt.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(u - Number(r.height || 0)) <= 1;
  }
  function Dg() {
    return `obj:${Number(d.objectVisualRevision || 0)}`;
  }
  function Eg(r, o = {}) {
    if (!r) return "";
    const s = Ai(), u = s && Kr(s) ? Ni(s) : "no_bg", h = Tg(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      vl(),
      Dg(),
      ao(),
      u,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function Og() {
    var R, V, te, K;
    if (d.outputPreviewRect = null, k.outputPreviewToggle.visible = d.mode !== "frame" && !!ze(), t !== "cutout" || !k.cameraPreview) return;
    if (d.mode === "frame") {
      k.cameraPreview.visible = !1, k.cameraPreview.settled = !1;
      return;
    }
    const r = ze();
    if (!r) {
      k.cameraPreview.visible = !0, k.cameraPreview.ready = !1, k.cameraPreview.settled = !1, k.cameraPreview.expanded = !!d.outputPreviewExpanded, k.cameraPreview.width = 220, k.cameraPreview.height = 132, k.cameraPreview.label = "Add Frame to preview", (R = Se == null ? void 0 : Se.clearScene) == null || R.call(Se), (V = Ce == null ? void 0 : Ce.requestRender) == null || V.call(Ce);
      return;
    }
    k.cameraPreview.visible = !0;
    const o = Ai();
    if (!r || !Se || !Ce) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", k.cameraPreview.expanded = !!d.outputPreviewExpanded, k.cameraPreview.settled = !1, k.cameraPreview.width = 220, k.cameraPreview.height = 132, (te = Se == null ? void 0 : Se.clearScene) == null || te.call(Se), (K = Ce == null ? void 0 : Ce.requestRender) == null || K.call(Ce);
      return;
    }
    const s = Xc(r, !!d.outputPreviewExpanded);
    k.cameraPreview.width = s.width, k.cameraPreview.height = s.height, k.cameraPreview.expanded = !!d.outputPreviewExpanded;
    const u = ho(), h = mo(u), m = Kr(o), y = m ? Ni(o) : "none", g = d.showObjects ? po() : ga([]), x = Da({
      stateRevision: [
        "cutout_preview_camera",
        y,
        Array.isArray(u == null ? void 0 : u.stickers) ? u.stickers.map((z) => String((z == null ? void 0 : z.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((z) => `${String((z == null ? void 0 : z.assetId) || "")}:${String((z == null ? void 0 : z.revision) || "")}`).join(",") : "none",
        g.length ? g.map((z) => `${String((z == null ? void 0 : z.id) || "")}:${String((z == null ? void 0 : z.revision) || "")}:${Number((z == null ? void 0 : z.zIndex) || 0)}`).join(",") : "paint:none",
        d.showPanorama ? "panorama:1" : "panorama:0",
        d.showObjects ? "objects:1" : "objects:0",
        d.showMask ? "showMask:1" : "showMask:0",
        Yt(_.coverage)
      ].join("|"),
      backgroundSource: m && d.showPanorama ? o : null,
      backgroundRevision: m ? `cutout_preview:${y}` : "",
      coverageDeg: Yt(_.coverage),
      scene: u,
      textures: h,
      rasterEntries: g,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || h.length > 0 || g.length > 0)) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = "Connect ERP image", k.cameraPreview.settled = !1, Se.clearScene(), Ce.requestRender();
      return;
    }
    if (d.showPanorama && !m && h.length === 0 && g.length === 0) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", k.cameraPreview.settled = !1, Se.clearScene(), Ce.requestRender();
      return;
    }
    Se.syncScene(x), Ce.setView(nr(r));
    const T = Ig(s), C = T ? Ce.present() : !1;
    T || Ce.requestRender(), k.cameraPreview.ready = !0, k.cameraPreview.label = T && C ? "" : "Loading preview", k.cameraPreview.settled = T && C && le.pendingStableLayoutFrames <= 0 && le.hasPresentedFrame;
  }
  function Rg(r, o, s, u = {}) {
    if (!Se || !s) return !1;
    const h = Ai(), m = ho(), y = mo(m), g = Kr(h), x = d.showObjects ? po() : ga([]);
    return g || y.length > 0 || x.length > 0 ? (Se.syncScene(Da({
      stateRevision: Eg(s, u),
      backgroundSource: g && d.showPanorama ? h : null,
      backgroundRevision: g ? `cutout_frame:${Ni(h)}` : "",
      coverageDeg: Yt(_.coverage),
      scene: m,
      textures: y,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), Se.renderShotToContext(r, o, s, u)) : !1;
  }
  function bl(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), u = Number(o.y || 0);
    return Hc(r, s, u);
  }
  function Ti(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, u = Math.cos(s);
    return tr(u * Math.sin(o), Math.sin(s), u * Math.cos(o));
  }
  function Fg(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function Lg(r, o, s, u = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Jt(r, "widthScale", 1),
      pressureLike: Jt(r, "pressureLike", 1)
    }, ...u, u: o, v: s };
  }
  function zg(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function yl(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const u = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (u) {
      let K = null;
      r.forEach((z) => {
        const ne = Number((z == null ? void 0 : z.u) || 0), he = Number((z == null ? void 0 : z.v) || 0), se = (ne % 1 + 1) % 1, we = K == null ? se : K + Mn(se, (K % 1 + 1) % 1);
        h.set(z, { x: we, y: he }), K = we;
      });
    }
    const m = (K) => !K || typeof K != "object" ? { x: 0, y: 0 } : h.get(K) || Fg(K), y = (K, z, ne, he = {}) => {
      const se = u ? (Number(z) % 1 + 1) % 1 : Number(z), we = Lg(K, se, ne, he);
      return h.set(we, { x: Number(z), y: Number(ne) }), we;
    }, g = (K, z, ne) => {
      const he = m(K), se = m(z);
      return y(K, kn(he.x, se.x, ne), kn(he.y, se.y, ne), {
        t: kn(Number((K == null ? void 0 : K.t) || 0), Number((z == null ? void 0 : z.t) || 0), ne),
        widthScale: kn(Jt(K, "widthScale", 1), Jt(z, "widthScale", 1), ne),
        pressureLike: kn(Jt(K, "pressureLike", 1), Jt(z, "pressureLike", 1), ne)
      });
    };
    if (r.length === 1) {
      const K = m(r[0]);
      return [y(r[0], K.x, K.y)];
    }
    const x = zg(o, s), N = (K, z) => {
      const ne = [0];
      for (let oe = 1; oe < K.length; oe += 1) {
        const ye = m(K[oe - 1]), Ie = m(K[oe]);
        ne.push(ne[oe - 1] + Math.hypot(Ie.x - ye.x, Ie.y - ye.y));
      }
      const he = ne[ne.length - 1] || 0;
      if (he <= 1e-8) {
        const oe = K[0], ye = m(oe);
        return [y(oe, ye.x, ye.y)];
      }
      const se = [];
      let we = 0;
      for (let oe = 0; oe <= he + 1e-9; oe += z) {
        for (; we < ne.length - 2 && ne[we + 1] < oe; ) we += 1;
        const ye = ne[we], Ie = ne[we + 1], De = Math.max(1e-8, Ie - ye);
        se.push(g(K[we], K[we + 1], J((oe - ye) / De, 0, 1)));
      }
      const Re = K[K.length - 1], $e = m(Re), Xe = se[se.length - 1], _e = Xe ? m(Xe) : null;
      return (!_e || Math.hypot(_e.x - $e.x, _e.y - $e.y) > z * 0.35) && se.push(y(Re, $e.x, $e.y)), se;
    }, T = (K) => {
      if (!Array.isArray(K) || K.length < 3) return K ? K.slice() : [];
      const z = m(K[0]), ne = [y(K[0], z.x, z.y)];
      for (let we = 0; we < K.length - 1; we += 1) {
        const Re = K[we], $e = K[we + 1], Xe = m(Re), _e = m($e), oe = y(
          Re,
          Xe.x * 0.75 + _e.x * 0.25,
          Xe.y * 0.75 + _e.y * 0.25,
          {
            t: Number(Re.t || 0) * 0.75 + Number($e.t || 0) * 0.25,
            widthScale: Jt(Re, "widthScale", 1) * 0.75 + Jt($e, "widthScale", 1) * 0.25,
            pressureLike: Jt(Re, "pressureLike", 1) * 0.75 + Jt($e, "pressureLike", 1) * 0.25
          }
        ), ye = y(
          Re,
          Xe.x * 0.25 + _e.x * 0.75,
          Xe.y * 0.25 + _e.y * 0.75,
          {
            t: Number(Re.t || 0) * 0.25 + Number($e.t || 0) * 0.75,
            widthScale: Jt(Re, "widthScale", 1) * 0.25 + Jt($e, "widthScale", 1) * 0.75,
            pressureLike: Jt(Re, "pressureLike", 1) * 0.25 + Jt($e, "pressureLike", 1) * 0.75
          }
        );
        ne.push(oe, ye);
      }
      const he = K[K.length - 1], se = m(he);
      return ne.push(y(he, se.x, se.y)), ne;
    }, C = N(r, x);
    if (C.length < 3) return C;
    const R = s ? 2 : 1;
    let V = C.slice();
    for (let K = 0; K < R; K += 1) V = T(V);
    return N(V, Math.max(x * 0.75, 55e-5));
  }
  function Jt(r, o, s = 1) {
    const u = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(u) ? Math.max(0, u) : s;
  }
  function $g(r) {
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
  function ba(r, o, s = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(r)), u.height = Math.max(1, Math.round(o));
    const h = u.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, u.width, u.height), h.imageSmoothingEnabled = !0), { canvas: u, ctx: h };
  }
  function ya() {
    const r = _o();
    return `${String(d.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function Ii() {
    const r = _o();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function vl() {
    const r = ao(), o = Ii();
    return r ? `${o}:${r}` : o;
  }
  function Vg() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function jg() {
    d.paintCompositeRevision += 1;
  }
  function Hg() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function Jc() {
    var r, o;
    d.paintEngineRevisionKey = null, (o = (r = d.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, _), d.paintEngineRevisionKey = ya();
  }
  function Zc() {
    _.painting_layer !== null && (_.painting_layer = null), uo = "";
  }
  function Bt() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, Hg(), le.backgroundDirty = !0, le.dirty = !0;
  }
  function En({ rebuildPaintEngine: r = !1 } = {}) {
    Zc(), Vg(), Bt(), r && Jc();
  }
  function Di() {
    Zc(), jg(), Bt();
  }
  function vo() {
    var u;
    const r = _o(), o = `${r.width}x${r.height}`;
    d.paintEngineDescriptorKey !== o && (d.paintEngine = vu(r), d.paintEngineDescriptorKey = o, d.paintEngineRevisionKey = "");
    const s = ya();
    d.paintEngineRevisionKey !== s && (d.paintEngineRevisionKey = s, (u = d.paintEngine) == null || u.rebuildCommitted(_));
  }
  function _o() {
    const r = Math.max(1, I(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function _n() {
    return _o();
  }
  function Ug(r, o, s, u, h = null) {
    const m = $g(r), y = Jt(o, "widthScale", 1) * Jt(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * s * y) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Qt) * s * y) : Math.max(0.5, m.value / (2 * Math.PI) * s * y) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * y);
  }
  function Gg(r, o, s = {}) {
    const u = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = s.preview === !0, y = m ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * y : 1, u === "mask") {
      r.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const g = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = m ? Math.max(0.28, Number(g.a ?? 1) * 0.88) : Math.max(0.12, Number(g.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(g.r || 0) * 255)}, ${Math.round(Number(g.g || 0) * 255)}, ${Math.round(Number(g.b || 0) * 255)}, ${x})`;
  }
  function Bg(r, o, s) {
    const u = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(u) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), u, 0, Math.PI * 2), r.fill());
  }
  function Kg(r, o, s, u, h = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const m = Math.max(u.w, u.h) * 0.25;
    r.save(), Gg(r, s, h);
    const y = (g) => Bg(r, g, m);
    if (o.length === 1) {
      y(o[0]), r.restore();
      return;
    }
    for (let g = 0; g < o.length - 1; g += 1) {
      const x = o[g], N = o[g + 1];
      if (!x || !N) continue;
      const T = Number(x.x || 0), C = Number(x.y || 0), R = Number(N.x || 0), V = Number(N.y || 0), te = Math.max(0.5, Math.min(m, Number(x.radiusPx || 0.5))), K = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(T) || !Number.isFinite(C) || !Number.isFinite(R) || !Number.isFinite(V) || !Number.isFinite(te) || !Number.isFinite(K)) continue;
      const z = R - T, ne = V - C, he = Math.hypot(z, ne);
      if (!Number.isFinite(he) || he < 1e-6) {
        y(x);
        continue;
      }
      if (he > Math.max(u.w, u.h) * 0.5) continue;
      const se = Math.max(0.5, Math.min(te, K)), we = Math.max(0.35, Math.min(se * 0.4, 2.25)), Re = Math.max(1, Math.ceil(he / we));
      for (let $e = 0; $e <= Re; $e += 1) {
        const Xe = $e / Re;
        y({
          x: kn(T, R, Xe),
          y: kn(C, V, Xe),
          radiusPx: kn(te, K, Xe)
        });
      }
    }
    y(o[o.length - 1]), r.restore();
  }
  function Wg(r, o, s, u) {
    Kg(r, o, s, u, { preview: !1 });
  }
  function Yg(r, o, s, u, h) {
    var g, x, N, T;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const m = "u", y = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const C = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(C.r || 0) * 255)}, ${Math.round(Number(C.g || 0) * 255)}, ${Math.round(Number(C.b || 0) * 255)}, ${Number(C.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((g = o[0]) == null ? void 0 : g[m]) || 0) * u.w, Number(((x = o[0]) == null ? void 0 : x[y]) || 0) * u.h);
    for (let C = 1; C < o.length; C += 1)
      r.lineTo(Number(((N = o[C]) == null ? void 0 : N[m]) || 0) * u.w, Number(((T = o[C]) == null ? void 0 : T[y]) || 0) * u.h);
    r.closePath(), r.fill(), r.restore();
  }
  function Qc(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function qg(r, o) {
    const s = Qc(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: Ug(r, u, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function ef(r, o, s = null) {
    var g, x, N, T;
    if (!(r != null && r.ctx) || !o) return !1;
    const u = s || { w: Number(((g = r.canvas) == null ? void 0 : g.width) || 0), h: Number(((x = r.canvas) == null ? void 0 : x.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((T = o == null ? void 0 : o.geometry) == null ? void 0 : T.geometryKind) || "") === "lasso_fill")
      return Yg(r.ctx, Qc(h), h, u), !0;
    const y = qg(h, u);
    return y.length ? (Wg(r.ctx, y, h, u), !0) : !1;
  }
  function Xg(r, o, s, u = 8) {
    const h = new Uint8Array(o * s), m = [], y = new Int32Array(o * s), g = new Int32Array(o * s);
    for (let x = 0; x < s; x += 1)
      for (let N = 0; N < o; N += 1) {
        const T = x * o + N;
        if (h[T] || r[T] <= u) continue;
        let C = 0, R = 0;
        y[R] = N, g[R] = x, R += 1, h[T] = 1;
        const V = [];
        let te = N, K = x, z = N, ne = x;
        for (; C < R; ) {
          const he = y[C], se = g[C];
          C += 1, V.push({ x: he, y: se }), he < te && (te = he), se < K && (K = se), he > z && (z = he), se > ne && (ne = se);
          const we = [
            [(he - 1 + o) % o, se],
            [(he + 1) % o, se],
            [he, se - 1],
            [he, se + 1]
          ];
          for (const [Re, $e] of we) {
            if ($e < 0 || $e >= s) continue;
            const Xe = $e * o + Re;
            h[Xe] || r[Xe] <= u || (h[Xe] = 1, y[R] = Re, g[R] = $e, R += 1);
          }
        }
        m.push({ pixels: V, minX: te, minY: K, maxX: z, maxY: ne });
      }
    return m;
  }
  function Jg(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, N) => x - N);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let u = -1, h = 0;
    for (let x = 0; x < s.length; x += 1) {
      const N = s[x], C = (x === s.length - 1 ? s[0] + o : s[x + 1]) - N - 1;
      C > u && (u = C, h = x);
    }
    const m = (s[(h + 1) % s.length] + o) % o;
    let y = 1 / 0, g = -1 / 0;
    for (const x of s) {
      const N = (x - m + o) % o;
      y = Math.min(y, N), g = Math.max(g, N);
    }
    return {
      startX: m,
      widthPx: Math.max(1, g - y + 1)
    };
  }
  function Zg(r, o, s = {}) {
    var N;
    const u = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), m = (N = r == null ? void 0 : r.getContext) == null ? void 0 : N.call(r, "2d");
    if (!m || u < 1 || h < 1) return [];
    const y = m.getImageData(0, 0, u, h), g = new Uint8Array(u * h);
    for (let T = 0; T < g.length; T += 1) g[T] = y.data[T * 4 + 3];
    return Xg(g, u, h, 8).map((T, C) => {
      const R = Jg(T, u);
      if (!R) return null;
      const V = Number(R.widthPx || 0), te = T.maxY - T.minY + 1, K = Number(R.startX || 0), z = document.createElement("canvas");
      z.width = V, z.height = te;
      const ne = z.getContext("2d");
      if (!ne) return null;
      const he = ne.createImageData(V, te);
      return T.pixels.forEach(({ x: se, y: we }) => {
        const Re = (we * u + se) * 4, $e = (Number(se || 0) - K + u) % u, Xe = ((we - T.minY) * V + $e) * 4;
        he.data[Xe + 0] = y.data[Re + 0], he.data[Xe + 1] = y.data[Re + 1], he.data[Xe + 2] = y.data[Re + 2], he.data[Xe + 3] = y.data[Re + 3];
      }), ne.putImageData(he, 0, 0), {
        id: Hi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + C * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: T.minY / h,
          u1: V / u,
          v1: (T.maxY + 1) / h
        },
        rasterDataUrl: z.toDataURL("image/png"),
        transform: {
          du: K / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function va(r, o) {
    if (!r || !o) return null;
    const s = fo(r), u = Fn(o, s.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const h = Fn(o, s.right) / u, m = Fn(o, s.up) / u, y = h * s.cr + m * s.sr, g = -h * s.sr + m * s.cr;
    return {
      x: (y / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - g / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function Qg(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (d.mode === "unwrap") {
      const s = Tr();
      return r.map((u) => ({
        x: s.x + Number(u.u || 0) * s.w,
        y: s.y + Number(u.v || 0) * s.h
      }));
    }
    const o = r.map((s) => pa(Ti(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function tf(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (d.mode === "unwrap") {
      const u = Tr();
      return r.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, y = o == null ? m : Number(o || 0) + Mn(m, o);
        return {
          x: u.x + y * u.w,
          y: u.y + Number(h.v || 0) * u.h
        };
      });
    }
    const s = r.map((u) => pa(Ti(u))).filter(Boolean);
    return s.every((u) => Number(u.z || 0) > 0) ? s.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function e0(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const u = r[s], h = r[(s + 1) % r.length];
      if (!u || !h || !Number.isFinite(u.x) || !Number.isFinite(u.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(u.x), Number(h.y) - Number(u.y)) > o) return !1;
    }
    return !0;
  }
  function t0(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const u = [];
    for (const h of r) {
      const m = Ti(h), y = va(o, m);
      if (!y) return [];
      u.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return e0(u, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? u : [];
  }
  function n0(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const u = [];
    for (const h of r) {
      const m = Ti(h), y = va(o, m);
      y && u.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return u;
  }
  function r0() {
    var V;
    const r = ze(), o = Sl(r);
    if (!r || !o) return !1;
    const s = { x: o.x, y: o.y, w: o.w, h: o.h }, u = Math.max(1, Number(o.focalPx || 1)), h = s.x + s.w * 0.5, m = s.y + s.h * 0.5, { halfW: y, halfH: g } = xu(
      { width: A.width, height: A.height },
      u
    ), x = { x: h - y, y: m - g, w: y * 2, h: g * 2 }, N = {
      ...r,
      hFOV_deg: 2 * Math.atan(y / u) * yr,
      vFOV_deg: 2 * Math.atan(g / u) * yr
    }, T = i0(s);
    P.save(), P.fillStyle = "#0a0a0a", P.fillRect(0, 0, A.width, A.height);
    const C = d.interaction ? "draft" : String(((V = _.ui_settings) == null ? void 0 : V.preview_quality) || "balanced");
    return Rg(P, x, N, { quality: C }) === !0 || (P.fillStyle = "rgba(255, 255, 255, 0.03)", P.fillRect(x.x, x.y, x.w, x.h)), P.restore(), P.save(), P.fillStyle = "rgba(0, 0, 0, 0.58)", P.beginPath(), P.rect(0, 0, A.width, A.height), P.roundRect(s.x, s.y, s.w, s.h, T), P.fill("evenodd"), P.restore(), P.save(), P.strokeStyle = qS, P.globalAlpha = 0.62, P.lineWidth = 2, P.beginPath(), P.roundRect(s.x + 1, s.y + 1, s.w - 2, s.h - 2, Math.max(0, T - 1)), P.stroke(), P.restore(), !0;
  }
  function i0(r) {
    const o = Math.max(1e-6, Number(le.frameCanvasScale || 1));
    return Math.min(sn * o, Number((r == null ? void 0 : r.w) || 0) * 0.5, Number((r == null ? void 0 : r.h) || 0) * 0.5);
  }
  function fr() {
    var o;
    const r = d.mode === "frame" ? ze() : null;
    k.frameRollKnob.visible = !!r && !i, k.frameRollKnob.rollDeg = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg) ?? 0), k.frameRollKnob.displayValue = ji(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((o = d.interaction) == null ? void 0 : o.kind) === "roll_frame", k.frameRollKnob.armed = !!r && d.altModifier === !0;
  }
  function a0() {
    var x, N;
    if (((x = d.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const r = d.interaction.stroke, o = (N = r == null ? void 0 : r.geometry) == null ? void 0 : N.points;
    let s;
    if (d.mode === "frame") {
      const T = ze(), C = Lt(T);
      s = t0(o, T, C);
    } else
      s = Qg(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const u = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), y = Math.round(Number(h.g || 0) * 255), g = Math.round(Number(h.b || 0) * 255);
    P.save(), P.beginPath(), P.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let T = 1; T < s.length; T++) P.lineTo(Number(s[T].x || 0), Number(s[T].y || 0));
    P.closePath(), u ? (P.lineWidth = 2, P.setLineDash([6, 6]), P.lineDashOffset = 0, P.strokeStyle = "rgba(0,0,0,0.96)", P.stroke(), P.lineDashOffset = -6, P.strokeStyle = "rgba(255,255,255,0.96)", P.stroke(), P.setLineDash([]), P.lineDashOffset = 0) : (P.lineWidth = 1.5, P.setLineDash([6, 4]), P.strokeStyle = `rgba(${m},${y},${g},1)`, P.stroke(), P.setLineDash([])), P.restore();
  }
  function o0() {
    const r = d.frameRollOverlayVisual, o = J(Number(d.frameRollOverlayAlpha || 0), 0, 1);
    if (d.mode !== "frame" || !(r != null && r.shot) || o <= 1e-4) return;
    const s = Lt(r.shot);
    if (!s) return;
    const u = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = Number(r.shot.roll_deg ?? r.shot.rot_deg ?? 0) * Qt, m = Math.hypot(s.w, s.h) * 0.55, y = Math.cos(h) * m, g = Math.sin(h) * m;
    P.save(), P.globalAlpha *= o, P.beginPath(), P.rect(s.x, s.y, s.w, s.h), P.clip(), P.translate(u.x, u.y), P.rotate(h);
    const x = Math.max(12, Math.min(s.w, s.h) / 6);
    P.beginPath();
    for (let N = -m; N <= m; N += x)
      P.moveTo(N, -m), P.lineTo(N, m);
    for (let N = -m; N <= m; N += x)
      P.moveTo(-m, N), P.lineTo(m, N);
    P.lineWidth = 1, P.strokeStyle = "rgba(255, 255, 255, 0.22)", P.stroke(), P.setTransform(1, 0, 0, 1, 0, 0), P.beginPath(), P.moveTo(u.x - y, u.y - g), P.lineTo(u.x + y, u.y + g), P.lineWidth = 1.5, P.setLineDash([8, 6]), P.strokeStyle = "rgba(255, 255, 255, 0.92)", P.shadowColor = "rgba(0, 0, 0, 0.8)", P.shadowBlur = 3, P.stroke(), P.setLineDash([]), P.restore();
  }
  function s0() {
    return t !== "cutout" || !ze() ? 0 : ZS;
  }
  function l0() {
    const r = J(Number(d.cutoutPanoDimAlpha || 0), 0, 1);
    if (r <= 1e-4 || t !== "cutout" || d.mode !== "pano") return;
    const o = ze(), s = o ? jt(o) : null, u = Array.isArray(s == null ? void 0 : s.corners) && s.corners.length >= 4 ? s.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    s != null && s.visible && u && (d.cutoutPanoDimCorners = u), o && (s != null && s.visible) && u && (d.cutoutPanoFrameVisual = {
      item: o,
      geom: s,
      selected: Nc(o),
      locked: Dn(o)
    });
    const h = Number(d.cutoutPanoDimTarget || 0) <= 1e-6, m = s != null && s.visible ? u : h ? d.cutoutPanoDimCorners || [] : [];
    if (P.save(), P.fillStyle = `rgba(0, 0, 0, ${r})`, P.beginPath(), P.rect(0, 0, A.width, A.height), m.length >= 4) {
      P.moveTo(m[0].x, m[0].y);
      for (let y = 1; y < 4; y += 1) P.lineTo(m[y].x, m[y].y);
      P.closePath();
    }
    P.fill("evenodd"), P.restore();
  }
  function u0() {
    d.mode === "frame" ? (le.frameSafeRect = T0(), r0()) : d.mode === "unwrap" ? vg(!1) : _g(!1), l0(), t === "cutout" && Og(), Cg(), fr(), a0(), o0(), k.fovValue = `${Math.round(d.viewFov)}°`, Math.abs(Number(d.outputPreviewAnim || 0) - Number(d.outputPreviewAnimTo || 0)) < 1e-6 && Ye(), le.hasPresentedFrame || (le.hasPresentedFrame = !0, Y.style.opacity = "1"), t === "cutout" && k.cameraPreview && (k.cameraPreview.settled = le.pendingStableLayoutFrames <= 0 && le.hasPresentedFrame && d.mode !== "frame");
    const r = fg();
    k.stageStatus = r.status, k.stageStatusDetail = r.detail, r.status === Zn ? (ue == null || ue.removeAttribute("data-stage-ready"), ue == null || ue.setAttribute("data-stage-loading-kind", r.detail)) : (ue == null || ue.setAttribute("data-stage-ready", ""), ue == null || ue.removeAttribute("data-stage-loading-kind"));
  }
  function c0(r = d.interaction) {
    if (t !== "stickers" || d.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function f0() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Ip();
  }
  function ve(r = {}) {
    var g, x, N, T, C, R, V, te, K, z;
    const o = !!r.localOnly, s = r.externalSync === !0, u = String(r.cause || ""), h = String(((g = d.interaction) == null ? void 0 : g.kind) || "");
    (!o || h === "view" || h === "pan_frame" || c0() || !!((x = d.viewTween) != null && x.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (le.backgroundDirty = !0), o && _c() && (d.livePaintInteractionRevision += 1, le.backgroundDirty = !0), (!o || u === "selection" || u === "mode" || u === "cutout_frame") && (ll(), ur()), f0(), s && ((T = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || T.call(N), (C = e.setDirtyCanvas) == null || C.call(e, !0, !1)), s && !o && ((V = (R = e.graph) == null ? void 0 : R.setDirtyCanvas) == null || V.call(R, !0, !0), (z = (K = (te = zn) == null ? void 0 : te.canvas) == null ? void 0 : K.setDirty) == null || z.call(K, !0, !0)), le.dirty = !0;
  }
  function nf() {
    const r = A.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return A.width !== o || A.height !== s || Y.width !== o || Y.height !== s ? (A.width = o, A.height = s, Y.width = o, Y.height = s, le.backgroundDirty = !0, le.dirty = !0, t === "cutout" && (le.pendingStableLayoutFrames = Math.max(Number(le.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function d0(r = performance.now()) {
    var m, y;
    le.lastTickTs = r;
    const o = d.mode === "frame" && ((m = d.interaction) == null ? void 0 : m.kind) === "roll_frame" ? d.interaction : null;
    o != null && o.shot && (d.frameRollOverlayVisual = { shot: o.shot });
    const s = o ? 1 : 0;
    if (Math.abs(s - Number(d.frameRollOverlayTarget || 0)) > 1e-6 && (d.frameRollOverlayFrom = Number(d.frameRollOverlayAlpha || 0), d.frameRollOverlayTarget = s, d.frameRollOverlayStartTs = r), Math.abs(Number(d.frameRollOverlayAlpha || 0) - s) > 1e-6) {
      const g = J(
        (r - Number(d.frameRollOverlayStartTs || r)) / QS,
        0,
        1
      );
      d.frameRollOverlayAlpha = kn(
        Number(d.frameRollOverlayFrom || 0),
        s,
        Uo(g)
      ), g >= 1 && (d.frameRollOverlayAlpha = s, s === 0 && (d.frameRollOverlayVisual = null)), le.dirty = !0;
    }
    const u = s0();
    if (Math.abs(u - Number(d.cutoutPanoDimTarget || 0)) > 1e-6 && (d.cutoutPanoDimFrom = Number(d.cutoutPanoDimAlpha || 0), d.cutoutPanoDimTarget = u, d.cutoutPanoDimStartTs = r), Math.abs(Number(d.cutoutPanoDimAlpha || 0) - u) > 1e-6) {
      const g = J(
        (r - Number(d.cutoutPanoDimStartTs || r)) / gh,
        0,
        1
      );
      d.cutoutPanoDimAlpha = kn(
        Number(d.cutoutPanoDimFrom || 0),
        u,
        Uo(g)
      ), g >= 1 && (d.cutoutPanoDimAlpha = u), g >= 1 && u === 0 && (d.cutoutPanoDimCorners = null), le.dirty = !0;
    }
    const h = t === "cutout" && ze() ? 1 : 0;
    if (Math.abs(h - Number(d.cutoutPanoFrameTarget || 0)) > 1e-6 && (d.cutoutPanoFrameFrom = Number(d.cutoutPanoFrameAlpha || 0), d.cutoutPanoFrameTarget = h, d.cutoutPanoFrameStartTs = r), Math.abs(Number(d.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const g = J(
        (r - Number(d.cutoutPanoFrameStartTs || r)) / gh,
        0,
        1
      );
      d.cutoutPanoFrameAlpha = kn(
        Number(d.cutoutPanoFrameFrom || 0),
        h,
        Uo(g)
      ), g >= 1 && (d.cutoutPanoFrameAlpha = h, h === 0 && (d.cutoutPanoFrameVisual = null)), le.dirty = !0;
    }
    if (d.outputPreviewAnim !== d.outputPreviewAnimTo) {
      const g = Math.max(1, Number(d.outputPreviewAnimDurationMs)), x = J((r - Number(d.outputPreviewAnimStartTs || 0)) / g, 0, 1), T = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? sN(x) : fN(x);
      d.outputPreviewAnim = kn(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, T), le.dirty = !0, x >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
    }
    if ((y = d.viewTween) != null && y.active) {
      const g = d.viewTween, x = J((r - g.startTs) / g.durationMs, 0, 1), N = Uo(x);
      d.viewYaw = Ht(g.startYaw + g.deltaYaw * N), d.viewPitch = g.startPitch + (g.targetPitch - g.startPitch) * N, d.viewFov = g.startFov + (g.targetFov - g.startFov) * N, le.backgroundDirty = !0, le.dirty = !0, x >= 1 && (d.viewTween = null);
    }
    if (d.viewInertia.vx = Number(Kt.state.inertia.vx || 0), d.viewInertia.vy = Number(Kt.state.inertia.vy || 0), d.viewInertia.active = !!Kt.state.inertia.active, Kt.stepInertia(r) && (d.viewInertia.vx = Number(Kt.state.inertia.vx || 0), d.viewInertia.vy = Number(Kt.state.inertia.vy || 0), d.viewInertia.active = !!Kt.state.inertia.active, le.backgroundDirty = !0, le.dirty = !0), (le.dirty || r - le.lastSizeCheckTs >= 220) && (nf(), le.lastSizeCheckTs = r), le.pendingStableLayoutFrames > 0 && (le.pendingStableLayoutFrames -= 1, le.dirty = !0), le.dirty) {
      if (le.pendingStableLayoutFrames > 0)
        return;
      le.dirty = !1, u0();
    }
  }
  function rf(r = performance.now()) {
    if (le.running)
      try {
        d0(r);
      } catch (o) {
        const s = String((o == null ? void 0 : o.stack) || (o == null ? void 0 : o.message) || o || "unknown editor frame error");
        le.tickErrorSignature !== s && (le.tickErrorSignature = s, console.error("[PanoramaStickers] editor frame failed", o)), k.stageStatus = er, k.stageStatusDetail = "frame", ue == null || ue.setAttribute("data-stage-ready", ""), ue == null || ue.removeAttribute("data-stage-loading-kind");
      } finally {
        le.running && (le.rafId = requestAnimationFrame(rf));
      }
  }
  function h0() {
    le.running = !1, le.rafId && cancelAnimationFrame(le.rafId), le.rafId = 0;
  }
  function et() {
    i || (d.historyController.commitActionGroup(JSON.stringify(oh(_))), Al());
  }
  function _l(r) {
    if (i) return;
    const o = r < 0 ? d.historyController.undo() : d.historyController.redo();
    if (Al(), !o) return;
    const s = JSON.parse(o);
    Object.keys(_).forEach((u) => delete _[u]), Object.assign(_, s), d.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], En(), hn(), Ve(), mn(), ve({ cause: "cutout_frame" });
  }
  function af() {
    var s, u;
    const r = Array.isArray((s = d.historyController) == null ? void 0 : s.entries) ? d.historyController.entries : [], o = Number((u = d.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function hn() {
    Sp();
    const r = hx({
      editor: d,
      swatches: ls,
      paintColorPopOpen: H ? !H.hidden : !1,
      colorToCss: Wn,
      colorsApproximatelyEqual: us,
      rgb01ToHsv: su,
      hsv01ToRgb: ou,
      getBrushPresetIdForTool: Dr,
      isActiveLassoTool: Vp
    });
    if (Object.assign(k.paintDock, r), Kp(), !r.visible) {
      H && (H.hidden = !0);
      return;
    }
    q && (clearTimeout(q), q = 0), F && (!r.colorEnabled && H && !H.hidden && (q = window.setTimeout(() => {
      H.hidden = !0, k.paintDock.colorPopOpen = !1, q = 0;
    }, 170)), H && (H.style.setProperty("--picker-hue-color", r.pickerHueColor), H.style.setProperty("--picker-sat", r.pickerSat), H.style.setProperty("--picker-val", r.pickerVal), H.style.setProperty("--picker-hue", r.pickerHue)), xe && (xe.style.left = r.pickerSvLeft, xe.style.top = r.pickerSvTop), M && (M.style.left = r.pickerHueLeft));
  }
  function Ei() {
    const r = t === "cutout" && d.mode === "frame" ? ze() : wt();
    r && (d.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: br(r)
    }, Ve());
  }
  function Ve() {
    var $e, Xe, _e, oe;
    if (a) return;
    _.ui_settings = _.ui_settings || {};
    const r = dx(_.ui_settings);
    if (l) {
      k.sidePanel = mx({
        coverage: _.coverage,
        uiSettings: r,
        normalizeCoverageValue: Yt
      });
      return;
    }
    const o = wt(), s = t === "cutout" && d.mode === "frame" ? ze() : null, u = s || o, h = s ? [s] : In(), m = s ? "shot" : lo();
    h.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), u && m !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(u.yaw_deg || 0),
      pitch_deg: Number(u.pitch_deg || 0),
      hFOV_deg: Number(u.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(u.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(u.rot_deg || 0),
      roll_deg: Number(u.roll_deg || 0),
      aspect_id: br(u)
    });
    const y = d.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = m === "stroke" ? null : u, x = g || y, N = !!g && !Dn(g);
    d.panelWasEnabled = N, ll();
    let T = null;
    if (s) {
      const ye = il({ item: s, kind: "shot", label: "Frame" });
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
      t === "stickers" ? sr().forEach((Te, Ue) => {
        var Wt, _t;
        if (!Te) return;
        const rt = Vt(Te) ? String(Te.id || ei) : String(((_t = (Wt = _.assets) == null ? void 0 : Wt[Te.asset_id]) == null ? void 0 : _t.name) || Te.asset_id || Te.id), qe = `${Ue + 1}. ${rt}${Vt(Te) && Si(Te) ? " (hidden)" : ""}`, dt = il({ item: Te, label: qe, kind: "image" });
        ye.push({ id: Te.id, label: dt.label, icon: dt.icon, item: Te, kind: "image" });
      }) : Mc().forEach((Te) => {
        if (!(Te != null && Te.item)) return;
        const Ue = il(Te);
        ye.push({ id: Te.item.id, label: Ue.label, icon: Ue.icon, item: Te.item, kind: Te.kind });
      });
      const Ie = (g == null ? void 0 : g.id) || "", De = ye.find((Te) => Te.id === Ie) || ye[0];
      T = {
        label: "Selection",
        open: !1,
        disabled: ye.length <= 1,
        currentLabel: De.label,
        currentIcon: De.icon || null,
        items: ye.map((Te) => ({
          id: Te.id,
          label: Te.label,
          icon: Te.icon || null,
          active: Te.id === Ie
        }))
      };
    }
    const C = [], R = (ye, Ie, De, Te, Ue) => {
      const rt = J(Number(x[ye] || 0), De, Te);
      C.push({
        key: ye,
        label: Ie,
        min: De,
        max: Te,
        step: Ue,
        value: rt,
        displayValue: ji(rt),
        fillPct: J((rt - De) / Math.max(1e-6, Te - De) * 100, 0, 100),
        enabled: N && !i
      });
    }, V = [];
    h.length > 1 ? (V.push(`Selected objects: ${h.length}`), V.push("Multi-selection supports z-order and delete.")) : (R("yaw_deg", "Yaw", -180, 180, 0.1), R("pitch_deg", "Pitch", -90, 90, 0.1), R("hFOV_deg", "H FOV", 1, 179, 0.1), R("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? R("rot_deg", "Rotation", -180, 180, 0.1) : R("roll_deg", "Roll", -180, 180, 0.1));
    const te = Array.isArray((Xe = ($e = _ == null ? void 0 : _.painting) == null ? void 0 : $e.paint) == null ? void 0 : Xe.strokes) ? _.painting.paint.strokes.length : 0, K = Array.isArray((oe = (_e = _ == null ? void 0 : _.painting) == null ? void 0 : _e.mask) == null ? void 0 : oe.strokes) ? _.painting.mask.strokes.length : 0, z = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((ye) => String((ye == null ? void 0 : ye.name) || "")) : [], ne = oN(
      e,
      z.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), he = !!String((ne == null ? void 0 : ne.src) || "").trim() || Pc("pano_input_images").length > 0, se = Array.isArray(sr()) && sr().length > 0 || te > 0, we = K > 0, Re = [
      { key: "mask", label: "Mask", icon: Ee.circle_dashed_tool, visible: !!d.showMask, enabled: we },
      { key: "objects", label: "Paint / Images", icon: Ee.image, visible: !!d.showObjects, enabled: se },
      { key: "panorama", label: "Panorama", icon: Ee.globe, visible: !!d.showPanorama, enabled: he }
    ].map((ye) => ({
      ...ye,
      ariaLabel: `Toggle ${ye.label.toLowerCase()}`,
      tip: ye.visible ? "Hide" : "Show"
    }));
    k.sidePanel = px({
      coverage: _.coverage,
      readOnly: i,
      selectionPicker: T,
      enabled: N,
      selectedKind: m,
      selectedItems: h,
      params: C,
      notes: V,
      visibilityRows: Re,
      uiSettings: r,
      normalizeCoverageValue: Yt
    });
  }
  function _a(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function of(r) {
    if (i || t !== "stickers" && t !== "cutout" || !_a(r)) return;
    const o = Xo("asset"), s = hh(e, `add:${o}`, async () => {
      const u = URL.createObjectURL(r);
      try {
        const h = await new Promise((N, T) => {
          const C = new Image();
          C.onload = () => N(C), C.onerror = () => T(new Error("image load failed")), C.src = u;
        });
        Oe.set(o, h);
        const m = Xo("st");
        _.stickers.push({
          id: m,
          asset_id: o,
          yaw_deg: d.viewYaw,
          pitch_deg: d.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Br(30, Number(h.naturalWidth || h.width || 1), Number(h.naturalHeight || h.height || 1)),
          rot_deg: 0,
          z_index: kc()
        }), wi(_.stickers[_.stickers.length - 1]), wl(), et(), Ve(), Ye(), ve();
        const y = await fl(r, String(r.name || o));
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((N) => String((N == null ? void 0 : N.asset_id) || "") === o).length) return;
        _.assets[o] = y, Ci(), nt(), Ve(), Ye(), ve();
      } catch (h) {
        delete _.assets[o], Oe.delete(o);
        const m = Array.isArray(_.stickers) ? _.stickers : [], y = m.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === o);
        throw y.length && (_.stickers = m.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== o), y.some((g) => {
          var x;
          return String((g == null ? void 0 : g.id) || "") === String(((x = d.selection) == null ? void 0 : x.id) || "");
        }) && wi(null), Ve(), Ye(), ve(), nt()), h;
      } finally {
        URL.revokeObjectURL(u);
      }
    });
    try {
      await s;
    } catch {
    }
  }
  function m0() {
    var r;
    i || t !== "stickers" && t !== "cutout" || (r = ee == null ? void 0 : ee.openImagePicker) == null || r.call(ee, "add");
  }
  async function p0(r) {
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = wt();
    if (!o || !vt(o) || Vt(o) || !_a(r)) return;
    const s = String(o.id || ""), u = Xo("asset"), h = hh(e, `replace:${s}:${u}`, async () => {
      var C;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((R) => String((R == null ? void 0 : R.id) || "") === s) || null;
      if (!m || !vt(m) || Vt(m)) return;
      const y = String(m.asset_id || ""), g = y ? Zt(((C = _.assets) == null ? void 0 : C[y]) || null) : null, x = Number(m.vFOV_deg || 0), N = m.crop && typeof m.crop == "object" ? { ...m.crop } : null, T = URL.createObjectURL(r);
      try {
        const R = await new Promise((K, z) => {
          const ne = new Image();
          ne.onload = () => K(ne), ne.onerror = () => z(new Error("image load failed")), ne.src = T;
        });
        Oe.set(u, R), m.asset_id = u, m.vFOV_deg = Br(
          Number(m.hFOV_deg || 30),
          Number(R.naturalWidth || R.width || 1),
          Number(R.naturalHeight || R.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Bt(), et(), Ve(), Ye(), ve();
        const V = await fl(r, String(r.name || u)), te = (Array.isArray(_.stickers) ? _.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === s) || null;
        if (!te || String(te.asset_id || "") !== u) return;
        _.assets[u] = V, Ci(), nt(), Ve(), Ye(), ve();
      } catch (R) {
        delete _.assets[u], Oe.delete(u);
        const V = (Array.isArray(_.stickers) ? _.stickers : []).find((te) => String((te == null ? void 0 : te.id) || "") === s) || null;
        throw V && String(V.asset_id || "") === u && (y && g && (_.assets[y] = g), V.asset_id = y, V.vFOV_deg = x, V.crop = N ? { ...N } : null), Bt(), nt(), Ve(), Ye(), ve(), R;
      } finally {
        URL.revokeObjectURL(T);
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function g0() {
    var o;
    if (i) return;
    const r = wt();
    !r || !vt(r) || Vt(r) || (o = ee == null ? void 0 : ee.openImagePicker) == null || o.call(ee, "replace");
  }
  async function b0() {
    if (i || t !== "stickers") return;
    const r = _.assets && typeof _.assets == "object" ? _.assets : {}, o = Object.entries(r).filter(([, u]) => {
      const h = String((u == null ? void 0 : u.type) || "").toLowerCase(), m = String((u == null ? void 0 : u.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [u, h] of o)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const y = await fetch(m).then((C) => C.blob()), g = String(y.type || "image/png").split("/")[1] || "png", x = String((h == null ? void 0 : h.name) || `${u}.${g}`), N = new File([y], x, { type: y.type || "image/png" }), T = await fl(N, x);
        _.assets[u] = {
          ...T,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (nt(), ve());
  }
  function y0() {
    if (i || t !== "cutout") return;
    const r = ze();
    if (r) {
      wi(r), d.mode = "pano", Xs(
        Ht(Number(r.yaw_deg || 0)),
        J(Number(r.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ve(), Ye(), ve({ cause: "cutout_frame" });
      return;
    }
    const o = zm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(d.viewYaw || 0)),
      pitchDeg: Number(d.viewPitch || 0),
      viewFovDeg: Number(d.viewFov || 90)
    });
    _.shots = [o], wi(o), wl(), d.mode = "pano", et(), nt(), Ve(), Ye(), ve({ cause: "cutout_frame" });
  }
  function v0() {
    i || t !== "cutout" || (_.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, _.active.selected_shot_id = null, et(), nt(), Ve(), Ye(), ve());
  }
  function _0() {
    const r = Array.isArray(_.stickers) ? _.stickers : [], o = [];
    for (const s of r)
      Vt(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function sf(r, o, s = "Clear") {
    return new Promise((u) => {
      k.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: u
      };
    });
  }
  async function x0() {
    var s, u;
    if (i || !await sf(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = Ha(null), En();
    const o = _0();
    if (t === "stickers")
      _.stickers = o, _.assets = {}, d.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], _.active.selected_sticker_id = ((u = o[0]) == null ? void 0 : u.id) || null, Ci();
    else {
      const h = ix(_.shots, _.active.selected_shot_id);
      _.stickers = o, _.assets = {}, _.shots = h.shots, d.selectedId = h.selectedShotId, d.selectedIds = d.selectedId ? [d.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, Ci();
    }
    et(), nt(), Ve(), Ye(), ve();
  }
  async function w0(r) {
    var m, y, g, x;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", u = Oi(o);
    if (!(!u.length && !(((m = d.interaction) == null ? void 0 : m.kind) === "draw" && ((y = d.interaction) == null ? void 0 : y.layerKind) === o) || !await sf(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((g = d.interaction) == null ? void 0 : g.kind) === "draw" && ((x = d.interaction) == null ? void 0 : x.layerKind) === o) {
        const N = _n();
        N && d.paintEngine.cancelActiveStroke(N), d.interaction = null;
      }
      u.length = 0, _.painting.raster_objects = dn().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== o), o === "paint" && (qt().length = 0), En(), et(), nt(), Ve(), Ye(), hn(), ve();
    }
  }
  function S0() {
    if (i) return;
    const r = wt();
    if (!r || !vt(r) || Vt(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = Xo("st"), o.yaw_deg = Ht((o.yaw_deg || 0) + 8), o.z_index = kc(), _.stickers.push(o), _.active.selected_sticker_id = o.id, d.selectedId = o.id, d.selectedIds = [o.id], Bt(), et(), nt(), Ye(), Ve(), ve();
  }
  function lf() {
    var s, u, h, m, y, g;
    if (i) return;
    const r = In(), o = wt();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const x = new Set(r.filter((C) => Ft(C)).map((C) => String(C.actionGroupId || C.id || ""))), N = new Set(r.filter((C) => Xt(C)).map((C) => $t(C.rasterObjectId || C.id || ""))), T = new Set(r.filter(vt).map((C) => String(C.id || "")));
        x.size > 0 && (_.painting.paint.strokes = (Array.isArray((u = (s = _.painting) == null ? void 0 : s.paint) == null ? void 0 : u.strokes) ? _.painting.paint.strokes : []).filter((C) => !x.has(String((C == null ? void 0 : C.actionGroupId) || ""))), _.painting.groups = qt().filter((C) => !x.has(String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || ""))), En()), N.size > 0 && (_.painting.raster_objects = dn().filter((C) => !N.has(String((C == null ? void 0 : C.id) || ""))), Di()), T.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((C) => T.has(String((C == null ? void 0 : C.id) || "")) ? Vt(C) ? (Si(C) || (C.visible = !1), !0) : !1 : !0), Ci(), Bt()), d.selectedId = null, d.selectedIds = [], et(), nt(), Ve(), Ye(), ve();
        return;
      }
      if (Ft(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (h = _.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((N) => String((N == null ? void 0 : N.actionGroupId) || "").trim() !== x), _.painting.groups = qt().filter((N) => String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim() !== x), En(), d.selectedId = null, d.selectedIds = [], et(), nt(), Ve(), Ye(), ve();
        return;
      }
      if (Xt(o)) {
        const x = $t(o.rasterObjectId || o.id || "");
        _.painting.raster_objects = dn().filter((N) => String((N == null ? void 0 : N.id) || "").trim() !== x), Di(), d.selectedId = null, d.selectedIds = [], et(), nt(), Ve(), Ye(), ve();
        return;
      }
      if (t === "stickers" || vt(o)) {
        if (Vt(o)) {
          if (Si(o)) return;
          o.visible = !1, Bt(), et(), nt(), Ve(), Ye(), ve();
          return;
        }
        _.stickers = _.stickers.filter((x) => x.id !== o.id), Ci(), Bt(), d.selectedId = ((y = _.stickers[0]) == null ? void 0 : y.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], _.active.selected_sticker_id = ((g = _.stickers[0]) == null ? void 0 : g.id) || null, et(), nt(), Ve(), Ye(), ve();
        return;
      }
      v0();
    }
  }
  function xl(r, o) {
    const s = le.frameSafeRect;
    if (!r || !s || d.mode !== "frame") return !1;
    const u = tu * ta(s, r), h = Fm(ac(s, o), u);
    return r.hFOV_deg = h.hFOV_deg, r.vFOV_deg = h.vFOV_deg, !0;
  }
  function uf(r, o) {
    if (!r || r.locked === !0) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const g = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(g)) {
        const [T, C] = g.split(":").map((R) => Number(R));
        if (Number.isFinite(T) && Number.isFinite(C)) return T >= C;
      }
      const x = Number(r.hFOV_deg || 64), N = Number(r.vFOV_deg || 40);
      return Math.abs(x - N) > 1e-6 ? x >= N : na(r) >= 1;
    })();
    let [h, m] = s[String(o)] || s["1:1"];
    h >= m !== u && ([h, m] = [m, h]);
    const y = h / m;
    if (!xl(r, y)) {
      const g = J(Number(r.vFOV_deg || 40), 1, 179);
      r.vFOV_deg = g, r.hFOV_deg = as(g, y);
    }
    r.aspect_id = `${h}:${m}`;
  }
  function N0(r, o, s) {
    if (!r || r.locked === !0) return !1;
    const u = qa(o, s);
    if (!u) return !1;
    const h = u.ratio;
    if (!xl(r, h)) {
      const m = J(Number(r.vFOV_deg || 40), 1, 179);
      r.vFOV_deg = m, r.hFOV_deg = as(m, h);
    }
    return r.aspect_id = u.label, !0;
  }
  function cf(r) {
    if (!r || r.locked === !0) return;
    const o = String(r.aspect_id || "").trim(), s = Ks(r), u = s.tanHalfX / Math.max(1e-12, s.tanHalfY), h = 1 / Math.max(1e-12, u);
    if (!xl(r, h)) {
      const m = J(Number(r.vFOV_deg || 60), 1, 179);
      r.vFOV_deg = m, r.hFOV_deg = as(m, h);
    }
    if (/^\d+:\d+$/.test(o)) {
      const [m, y] = o.split(":");
      r.aspect_id = `${y}:${m}`;
    } else
      r.aspect_id = ri(r);
  }
  function ff() {
    vi().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function M0() {
    if (i) return;
    const r = In();
    if (!wt() || r.length === 0) return;
    ff();
    const s = vi(), u = new Set(r.map((g) => vt(g) ? `sticker:${String(g.id || "")}` : Xt(g) ? `rasterObject:${$t(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var N, T;
      const x = g.type === "sticker" ? `sticker:${String(((N = g.item) == null ? void 0 : N.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((T = g.item) == null ? void 0 : T.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      u.has(x) ? h.push(g) : m.push(g);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...m, ...h].forEach((g, x) => {
      g.type === "sticker" && g.item && (g.item.z_index = x), g.type === "strokeGroup" && g.item && (g.item.z_index = x), g.type === "rasterObject" && g.item && (g.item.z_index = x);
    }), Bt(), et(), nt(), Ye(), ve();
  }
  function k0() {
    if (i) return;
    const r = In();
    if (!wt() || r.length === 0) return;
    ff();
    const s = vi(), u = new Set(r.map((g) => vt(g) ? `sticker:${String(g.id || "")}` : Xt(g) ? `rasterObject:${$t(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var N, T;
      const x = g.type === "sticker" ? `sticker:${String(((N = g.item) == null ? void 0 : N.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((T = g.item) == null ? void 0 : T.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      u.has(x) ? h.push(g) : m.push(g);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...m].forEach((g, x) => {
      g.type === "sticker" && g.item && (g.item.z_index = x), g.type === "strokeGroup" && g.item && (g.item.z_index = x), g.type === "rasterObject" && g.item && (g.item.z_index = x);
    }), Bt(), et(), nt(), Ye(), ve();
  }
  function P0() {
    i || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", f && (_.output_preset = I(Number(_.output_preset || 2048))), p && (_.coverage = Yt(p.value)), b && (_.bg_color = String(b.value || _.bg_color || "#00ff00")), mn(), e.setDirtyCanvas(!0, !0));
  }
  function mn() {
    var o;
    if (i) return;
    _.coverage = Yt(_.coverage);
    const r = JSON.stringify(_);
    w && (w.value = r, (o = w.callback) == null || o.call(w, r));
  }
  const df = () => mn();
  i || (e.__panoFlushStateBeforeQueue = df);
  function xo() {
    _.ui_settings = gN(_.ui_settings), i || mn();
  }
  function nt() {
    var r;
    i || (mn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function A0() {
    i || cg() && Vc().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function C0(r = {}) {
    var u, h, m, y, g, x, N, T, C, R;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((h = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || h.call(u), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (g = e.setDirtyCanvas) == null || g.call(e, !0, !1)), s && ((N = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || N.call(x, !0, !0), (R = (C = (T = zn) == null ? void 0 : T.canvas) == null ? void 0 : C.setDirty) == null || R.call(C, !0, !0));
  }
  function wl() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", hn(), Ve());
  }
  function Wr(r) {
    const o = A.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * A.width,
      y: (r.clientY - o.top) / o.height * A.height
    };
  }
  function wo(r) {
    const o = A.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function hf() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function ze() {
    if (t !== "cutout") return null;
    const r = Array.isArray(_.shots) ? _.shots : [];
    if (!r.length) return null;
    const o = String(_.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function T0() {
    var V, te, K, z, ne;
    if (!A) return null;
    const r = (V = A.getBoundingClientRect) == null ? void 0 : V.call(A), o = Number((r == null ? void 0 : r.width) || 0) > 0 ? A.width / r.width : 1, s = Number((r == null ? void 0 : r.height) || 0) > 0 ? A.height / r.height : 1;
    le.frameCanvasScale = Math.min(o, s);
    let u = 24, h = 24;
    const m = Math.max(u + 1, A.width - 24);
    let y = Math.max(h + 1, A.height - 24);
    const g = (te = it == null ? void 0 : it.getBoundingClientRect) == null ? void 0 : te.call(it), x = (K = gt == null ? void 0 : gt.getBoundingClientRect) == null ? void 0 : K.call(gt);
    let N = 24;
    g && r && g.width > 0 && g.height > 0 && (N = Math.max(N, (g.right - r.left) * o + ph)), x && r && x.width > 0 && x.height > 0 && ((z = k.frameRail) == null ? void 0 : z.visible) === !0 && (N = Math.max(N, (r.right - x.left) * o + ph)), u = Math.max(u, N);
    const T = Math.min(m, A.width - N);
    let C = 24;
    const R = (ne = Je == null ? void 0 : Je.getBoundingClientRect) == null ? void 0 : ne.call(Je);
    if (R && r && R.width > 0 && R.height > 0 && (C = Math.max(C, (R.bottom - r.top) * s + nu)), [Gt, on].forEach((he) => {
      var Re;
      if (!he || !r) return;
      const se = getComputedStyle(he);
      if (se.display === "none" || se.visibility === "hidden" || Number(se.opacity) <= 0) return;
      const we = (Re = he.getBoundingClientRect) == null ? void 0 : Re.call(he);
      !we || we.width <= 0 || we.height <= 0 || (C = Math.max(C, (r.bottom - we.top) * s + nu));
    }), Fe && r) {
      const he = getComputedStyle(Fe);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (C = Math.max(C, (JS + nu) * s));
    }
    return h = Math.max(h, C), y = Math.max(h + 1, Math.min(y, A.height - C)), {
      x: u,
      y: h,
      w: Math.max(1, T - u),
      h: Math.max(1, y - h)
    };
  }
  function Sl(r = ze()) {
    if (!r || !A) return null;
    const o = le.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, A.width - 48),
      h: Math.max(1, A.height - 48)
    };
    return h1(o, r, tu * ta(o, r));
  }
  function Lt(r = ze()) {
    const o = Sl(r);
    return o ? { x: o.x, y: o.y, w: o.w, h: o.h } : null;
  }
  function Nl() {
    return t === "cutout" && !!ze();
  }
  function On(r, o = performance.now()) {
    if (d.mode === "unwrap") {
      const m = Tr(), y = (r.x - m.x) / Math.max(1, m.w), g = (r.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: J(g, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = cl(r.x, r.y), { lon: u, lat: h } = hl(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Rn(r, o, s = performance.now()) {
    const u = Lt(o);
    if (!u) return null;
    const h = {
      x: (Number(r.x) - u.x) / Math.max(1, u.w),
      y: (Number(r.y) - u.y) / Math.max(1, u.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = bl(o, h);
    if (!m) return null;
    const { lon: y, lat: g } = hl(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - g / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function I0(r, o) {
    const s = ze();
    if (!s) return !1;
    const u = Number(o) < 1, h = $m(s, 1 / Number(o));
    if (!h) return !1;
    if (u) {
      const m = tu * ta(
        le.frameSafeRect || { w: A.width, h: A.height },
        h
      ), y = xu({ width: A.width, height: A.height }, m);
      if (y.halfW < A.width * 0.5 - 1e-6 || y.halfH < A.height * 0.5 - 1e-6) return !1;
    }
    return s.hFOV_deg = h.hFOV_deg, s.vFOV_deg = h.vFOV_deg, d.frameWheelChanged = !0, d.frameWheelCommitTimer && window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = window.setTimeout(() => {
      d.frameWheelCommitTimer = 0, d.frameWheelChanged && (d.frameWheelChanged = !1, et(), nt(), Ve());
    }, 180), Ve(), !0;
  }
  function D0() {
    return d.frameWheelCommitTimer && (window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = 0), d.frameWheelChanged ? (d.frameWheelChanged = !1, et(), nt(), Ve(), !0) : !1;
  }
  function xa() {
    const r = d.interaction;
    if (!(r != null && r.shot) || !r.start || r.kind !== "pan_frame" && r.kind !== "roll_frame") return !1;
    const o = r.kind === "roll_frame";
    return r.kind === "pan_frame" ? (r.shot.yaw_deg = r.start.yaw_deg, r.shot.pitch_deg = r.start.pitch_deg) : r.shot.roll_deg = r.start.roll_deg, o && Yr(), d.interaction = null, Pi(), ur(), Ve(), ft(d.pointerPos), ve({ localOnly: !0 }), !0;
  }
  function E0(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function Dr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? hr : pn[o] ? o : d.activeBrushPresetId || hr;
  }
  function mf() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (hf() || Nl());
  }
  function pf() {
    var r;
    return mf() && ((r = d.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function So(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), u = Number((r == null ? void 0 : r.y) || 0), h = o !== !1, m = d.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== h || Math.abs(m.x - s) > 0.01 || Math.abs(m.y - u) > 0.01;
    return d.pointerPos = { x: s, y: u, inside: h }, y;
  }
  function O0() {
    var T, C;
    if (!pf()) return null;
    const r = d.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? d.maskTool : d.paintTool, s = Dr(o), u = pn[s] || pn[hr], h = Number(d.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(3, m * 0.5), g = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : xn(d.paintColor), x = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : J(Math.max(0.16, Number(g.a ?? 1) * 0.3), 0.16, 0.52), N = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : J(Math.max(0.46, Number(g.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: u,
      radius: y,
      fillStyle: Wn(g, x),
      strokeStyle: Wn(g, N),
      x: Number(((T = d.pointerPos) == null ? void 0 : T.x) || 0),
      y: Number(((C = d.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function R0() {
    var R, V, te;
    const r = O0();
    if (!me) return;
    if (!r) {
      me.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, u = "999px", h = 0, m = r.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", g = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let T = Number(r.hotspotX ?? o * 0.5), C = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = Ts, s = Ts, u = "0", y = "0", g = "none", T = eN, C = tN, m = hN(r.fillStyle, N, x);
    else if (r.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const K = Math.max(1, Number(((R = r.preset) == null ? void 0 : R.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * K), s = Math.max(6, r.radius * 2), u = `${Math.min(6, s * 0.42)}px`, h = Number(((te = (V = r.preset) == null ? void 0 : V.angle) == null ? void 0 : te.value) || 0) * yr;
    } else r.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    me.style.display = "block", me.style.width = `${Math.round(o)}px`, me.style.height = `${Math.round(s)}px`, me.style.borderRadius = u, me.style.border = y, me.style.boxShadow = g, me.style.background = m, me.style.backgroundRepeat = "no-repeat", me.style.backgroundPosition = "center", me.style.backgroundSize = "contain", me.style.transform = `translate(${Math.round(r.x - T)}px, ${Math.round(r.y - C)}px) rotate(${h}deg)`;
  }
  function F0() {
    var he;
    if (!X || !ce) return;
    const r = d.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? d.maskTool : d.paintTool;
    if (o === "lasso_fill") return;
    const s = Dr(o), u = pn[s] || pn[hr], h = Number(d.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(6, m * 0.5), g = o === "eraser", x = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : g ? { r: 1, g: 1, b: 1, a: 0.22 } : xn(d.paintColor), N = r === "mask" ? Wn(x, 0.22) : g ? "rgba(255,255,255,0.14)" : Wn(x, J(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), T = r === "mask" ? Wn(x, 0.96) : g ? "rgba(255,255,255,0.72)" : Wn(x, J(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let C = y * 2, R = y * 2, V = "999px", te = 0, K = N;
    const z = "rgba(222, 222, 222, 0.72)", ne = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      K = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const se = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      C = Math.max(16, y * 2 * se), R = Math.max(10, y * 2), V = `${Math.min(8, R * 0.42)}px`, te = Number(((he = u == null ? void 0 : u.angle) == null ? void 0 : he.value) || 0) * yr;
    } else o === "brush" ? K = `radial-gradient(circle at 50% 50%, ${T} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (C = Math.max(18, y * 1.8), R = C, K = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${T} 43%, ${T} 58%, rgba(0,0,0,0) 59%)`) : g && (K = "rgba(255,255,255,0.12)");
    ce.style.width = `${Math.round(C)}px`, ce.style.height = `${Math.round(R)}px`, ce.style.borderRadius = V, ce.style.background = K, ce.style.border = `1px solid ${z}`, ce.style.boxShadow = `0 0 0 1px ${ne}`, ce.style.transform = `rotate(${te}deg)`, G && (clearTimeout(G), G = 0), X.classList.remove("fade-out"), X.classList.add("show");
  }
  function No() {
    !X || !X.classList.contains("show") || (X.classList.add("fade-out"), G && clearTimeout(G), G = window.setTimeout(() => {
      X.classList.remove("show", "fade-out"), G = 0;
    }, 180));
  }
  function gf(r, o, s, u) {
    const h = Dr(o), m = pn[h] || pn[hr], y = d.brushSizes[h] ?? 10, g = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), x = E0(u, g), N = s.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), T = {
      id: Hi(r),
      actionGroupId: Hi("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: g,
      createdAt: Date.now(),
      color: r === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((C) => ({ ...C })),
        points: N.map((C) => ({ ...C }))
      }
    };
    return ih(T, m), Number(m.aspect ?? 1), Number(T.aspect ?? 1), String(T.stampKind || ""), Number(T.size || 0), String(T.radiusModel || ""), Number(T.radiusValue || 0), { ...T.targetSpace }, T;
  }
  function bf(r, o, s, u) {
    const h = s.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), m = Dr(o), y = pn[m] || pn[hr], g = {
      id: Hi(r),
      actionGroupId: Hi("ag"),
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
        points: h.map((x) => ({ ...x }))
      }
    };
    return ih(g, y), Number(y.aspect ?? 1), Number(g.aspect ?? 1), String(g.stampKind || ""), { ...g.targetSpace }, g;
  }
  function Oi(r) {
    const o = _.painting || (_.painting = Ha(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function L0(r, o, s = performance.now()) {
    let u;
    if (d.mode === "frame") {
      const N = ze();
      if (!N || (u = Rn(o, N, s), !u)) return !1;
    } else
      u = On(o, s);
    if (!u) return !1;
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, m = r.stroke.geometry.points, y = h[h.length - 1];
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
    h.push({ ...g }), m.push({ ...g });
    const x = _n();
    if (x) {
      const N = d.paintEngine.ensureTarget(x);
      d.paintEngine.appendStrokePoint(N, Number(g.u ?? 0), Number(g.v ?? 0), r.stroke);
    }
    return !0;
  }
  function z0(r, o, s = performance.now()) {
    var y, g;
    let u;
    if (d.mode === "frame") {
      const x = ze();
      if (!x) return !1;
      u = Rn(o, x, s);
    } else
      u = On(o, s);
    const h = (g = (y = r == null ? void 0 : r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.points;
    if (!u || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const x = Math.abs(Number(u.u ?? u.x ?? 0) - Number(m.u ?? m.x ?? 0)), N = Math.abs(Number(u.v ?? u.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (x < 15e-4 && N < 15e-4) return !1;
    }
    return h.push({
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function $0(r) {
    var se, we, Re, $e, Xe;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    vo();
    const s = _n(), u = ba(s.width, s.height);
    if (!ef(u, o, { w: s.width, h: s.height })) return !1;
    const h = ((we = (se = u.ctx) == null ? void 0 : se.getImageData(0, 0, s.width, s.height)) == null ? void 0 : we.data) || null;
    if (!h) return !1;
    const m = new Map(qt().map((_e) => [String((_e == null ? void 0 : _e.actionGroupId) || (_e == null ? void 0 : _e.id) || "").trim(), _e ? { ..._e } : null])), y = [], g = [], x = [...dn().filter((_e) => String((_e == null ? void 0 : _e.layerKind) || "paint") !== "paint")];
    let N = !1, T = vi().reduce((_e, oe) => Math.max(_e, Number((oe == null ? void 0 : oe.z_index) || 0)), -1) + 1;
    function C(_e, oe, ye, Ie = 8) {
      let De = oe, Te = ye, Ue = -1, rt = -1;
      for (let qe = 0; qe < ye; qe += 1)
        for (let dt = 0; dt < oe; dt += 1)
          _e[(qe * oe + dt) * 4 + 3] <= Ie || (dt < De && (De = dt), qe < Te && (Te = qe), dt > Ue && (Ue = dt), qe > rt && (rt = qe));
      return Ue < De || rt < Te ? null : { minX: De, minY: Te, maxX: Ue, maxY: rt };
    }
    const R = C(h, s.width, s.height, 8);
    if (!R) return !1;
    function V(_e, oe) {
      return !_e || !oe ? !1 : !(_e.maxX < oe.minX || oe.maxX < _e.minX || _e.maxY < oe.minY || oe.maxY < _e.minY);
    }
    function te(_e, oe) {
      const ye = Cr((_e == null ? void 0 : _e.actionGroupId) || (_e == null ? void 0 : _e.id) || "", "paint", oe);
      if (!ye) return null;
      const Ie = ye.centerUv.u - ye.halfW, De = ye.centerUv.u + ye.halfW, Te = ye.centerUv.v - ye.halfH, Ue = ye.centerUv.v + ye.halfH, rt = s.width, qe = s.height;
      return {
        minX: Math.floor((Ie % 1 + 1) % 1 * rt),
        maxX: Math.ceil((De % 1 + 1) % 1 * rt),
        minY: Math.floor(J(Te, 0, 1) * qe),
        maxY: Math.ceil(J(Ue, 0, 1) * qe),
        wraps: De - Ie >= 1 || Ie < 0 || De > 1
      };
    }
    function K(_e) {
      const oe = (_e == null ? void 0 : _e.bbox) || null;
      if (!oe) return null;
      const ye = (_e == null ? void 0 : _e.transform) || {}, Ie = s.width, De = s.height, Te = Number(oe.u0 || 0) + Number(ye.du || 0), Ue = Number(oe.u1 || 0) + Number(ye.du || 0), rt = Number(oe.v0 || 0) + Number(ye.dv || 0), qe = Number(oe.v1 || 0) + Number(ye.dv || 0);
      return {
        minX: Math.floor((Te % 1 + 1) % 1 * Ie),
        maxX: Math.ceil((Ue % 1 + 1) % 1 * Ie),
        minY: Math.floor(J(rt, 0, 1) * De),
        maxY: Math.ceil(J(qe, 0, 1) * De),
        wraps: Ue - Te >= 1 || Te < 0 || Ue > 1
      };
    }
    function z(_e) {
      return _e ? _e.wraps ? V(R, { minX: 0, maxX: _e.maxX, minY: _e.minY, maxY: _e.maxY }) || V(R, { minX: _e.minX, maxX: s.width - 1, minY: _e.minY, maxY: _e.maxY }) : V(R, _e) : !0;
    }
    function ne(_e) {
      if (!_e) return { touched: !1, canvas: null };
      const oe = ba(s.width, s.height, { readback: !0 });
      oe.ctx.drawImage(_e, 0, 0);
      const ye = oe.ctx.getImageData(0, 0, s.width, s.height);
      oe.ctx.save(), oe.ctx.globalCompositeOperation = "destination-out", oe.ctx.drawImage(u.canvas, 0, 0), oe.ctx.restore();
      const Ie = oe.ctx.getImageData(0, 0, s.width, s.height);
      for (let De = 0; De < s.width * s.height; De += 1) {
        if (h[De * 4 + 3] <= 8) continue;
        const Ue = ye.data[De * 4 + 3], rt = Ie.data[De * 4 + 3];
        if (Ue > rt)
          return { touched: !0, canvas: oe.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(_e, oe, ye) {
      const Ie = Number(ye == null ? void 0 : ye.z_index), De = Zg(_e, oe, ye).map((Te, Ue) => ({
        ...Te,
        z_index: Number.isFinite(Ie) ? Ie + Ue * 1e-3 : T + Ue * 1e-3
      }));
      return De.length && (T = Math.max(T, ...De.map((Te) => Number((Te == null ? void 0 : Te.z_index) || 0))) + 1), De;
    }
    for (const _e of qt()) {
      const oe = String((_e == null ? void 0 : _e.actionGroupId) || (_e == null ? void 0 : _e.id) || "").trim();
      if (!oe) continue;
      const ye = Tn(oe, "paint");
      if (!z(te(_e, ye))) {
        g.push(_e), y.push(...ye);
        continue;
      }
      const Ie = (($e = (Re = d.paintEngine) == null ? void 0 : Re.getGroupTarget) == null ? void 0 : $e.call(Re, oe)) || null, De = ((Xe = Ie == null ? void 0 : Ie.committedPaint) == null ? void 0 : Xe.canvas) || null;
      if (!De) {
        g.push(_e), y.push(...ye);
        continue;
      }
      const Te = ne(De);
      if (!Te.touched || !Te.canvas) {
        g.push(_e), y.push(...ye);
        continue;
      }
      N = !0;
      const Ue = he(Te.canvas, "paint", m.get(oe) || _e || {});
      x.push(...Ue);
    }
    for (const _e of dn().filter((oe) => String((oe == null ? void 0 : oe.layerKind) || "paint") === "paint")) {
      if (!z(K(_e))) {
        x.push(_e);
        continue;
      }
      const oe = zc(_e, null);
      if (!oe) {
        x.push(_e);
        continue;
      }
      const ye = ne(oe);
      if (!ye.touched || !ye.canvas) {
        x.push(_e);
        continue;
      }
      N = !0;
      const Ie = he(ye.canvas, "paint", _e);
      x.push(...Ie);
    }
    return N ? (_.painting.paint.strokes = y, _.painting.groups = g.sort((_e, oe) => Number((_e == null ? void 0 : _e.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), _.painting.raster_objects = x.sort((_e, oe) => Number((_e == null ? void 0 : _e.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), ma({ preservePanelValues: !1 }), !0) : !1;
  }
  function V0(r) {
    var y, g, x, N, T;
    if ((((g = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.rawPoints) || ((N = (x = r.stroke) == null ? void 0 : x.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      Ml(r);
      const C = _n();
      C && (String(((T = r.stroke) == null ? void 0 : T.toolKind) || "") === "eraser" ? d.paintEngine.cancelActiveStroke(C) : d.paintEngine.commitActiveStroke(r.stroke, C)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, h = gf(r.layerKind, s.toolKind, [], u);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = _n();
    m && d.paintEngine.beginStroke(h, m);
  }
  function j0(r) {
    var y, g;
    if ((((g = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.points) || []).length >= 3) {
      Ml(r);
      const x = _n();
      x && d.paintEngine.commitActiveStroke(r.stroke, x), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, h = bf(r.layerKind, s.toolKind, [], u);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = _n();
    m && d.paintEngine.beginStroke(h, m);
  }
  function Ml(r) {
    var m, y, g, x;
    const o = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const s = String(((y = r == null ? void 0 : r.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = yl(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), $0(r);
    const u = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (u && vc((g = r.stroke) == null ? void 0 : g.actionGroupId), Oi(r.layerKind).push(r.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = yl(h, r.stroke.targetSpace, !0), u && vc((x = r.stroke) == null ? void 0 : x.actionGroupId), Oi(r.layerKind).push(r.stroke), !0);
  }
  function yf(r) {
    var s;
    if (t === "cutout" && d.mode === "frame") {
      const u = ze(), h = Lt(u);
      if (!u || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const y = Rn(r, u, performance.now()), g = y ? Ti(y) : null;
      if (g)
        for (const N of gl()) {
          if (!vt(N)) continue;
          const T = va(N, g);
          if (T && Number(T.x) >= 0 && Number(T.x) <= 1 && Number(T.y) >= 0 && Number(T.y) <= 1) {
            const C = jt(N);
            if (C != null && C.visible) return { item: N, geom: C };
          }
        }
      const x = Qs(!1).slice().sort((N, T) => Number((T == null ? void 0 : T.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of x) {
        if (N.type === "strokeGroup") {
          const R = xi(fa("paint", N.actionGroupId || N.id || ""));
          if (!R) continue;
          const V = jt(R);
          if (!(V != null && V.visible)) continue;
          const te = Array.isArray(V.strokePaths) ? V.strokePaths : [];
          for (const K of te) {
            const z = Array.isArray(K == null ? void 0 : K.points) ? K.points : [];
            if (!z.length) continue;
            if (K.closed && z.length >= 3 && mr(r, z)) return { item: R, geom: V };
            const ne = Math.max(8, Number((K == null ? void 0 : K.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < z.length - 1; he += 1)
              if (au(r, z[he], z[he + 1]) <= ne * ne) return { item: R, geom: V };
            if (z.length === 1 && Or(r, z[0]) <= ne * ne) return { item: R, geom: V };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const R = _i(da(((s = N.item) == null ? void 0 : s.id) || N.id || ""));
          if (!R) continue;
          const V = jt(R);
          if (Lc(R, V, r, y)) return { item: R, geom: V };
          continue;
        }
        const T = N.item;
        if (!T || !vt(T) || !g) continue;
        const C = va(T, g);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const R = jt(T);
          if (R != null && R.visible) return { item: T, geom: R };
        }
      }
      return null;
    }
    const o = [
      ...Qs(!1).slice().sort((u, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((u) => {
        var h;
        return u.type === "strokeGroup" ? xi(fa("paint", u.actionGroupId || u.id || "")) : u.type === "rasterObject" ? _i(da(((h = u.item) == null ? void 0 : h.id) || u.id || "")) : u.item;
      }).filter(Boolean),
      ...t === "cutout" ? gl().filter((u) => vn(u)) : []
    ];
    for (const u of o) {
      if (Ft(u)) {
        const m = jt(u);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const g of y) {
          const x = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
          if (!x.length) continue;
          if (g.closed && x.length >= 3 && mr(r, x)) return { item: u, geom: m };
          const N = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
          for (let T = 0; T < x.length - 1; T += 1)
            if (au(r, x[T], x[T + 1]) <= N * N) return { item: u, geom: m };
          if (x.length === 1 && Or(r, x[0]) <= N * N) return { item: u, geom: m };
        }
        continue;
      }
      if (Xt(u)) {
        const m = jt(u);
        if (!(m != null && m.visible)) continue;
        if (Lc(u, m, r)) return { item: u, geom: m };
        continue;
      }
      const h = jt(u);
      if (h.visible && mr(r, h.corners))
        return { item: u, geom: h };
    }
    return null;
  }
  function kl(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const u = r.corners.findIndex((m) => Or(m, o) <= 121);
      if (u >= 0) {
        const m = r.corners[u], y = m.x - r.center.x, g = m.y - r.center.y, x = y * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: u, cursor: x };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const m of h) {
        const y = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && y.length >= 3 && mr(o, y)) return { kind: "move", cursor: "default" };
        const g = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < y.length - 1; x += 1)
          if (au(o, y[x], y[x + 1]) <= g * g) return { kind: "move", cursor: "default" };
      }
      return mr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const u = r.corners.findIndex((h) => Or(h, o) <= 121);
      if (u >= 0) {
        const h = r.corners[u], m = h.x - r.center.x, y = h.y - r.center.y, g = m * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: u, cursor: g };
      }
      return mr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const u = r.edgeMidpoints.find((h) => Or(h, o) <= 169);
      if (u) {
        const h = u.edge === "left" || u.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: u.edge, mid: u };
      }
    }
    const s = r.corners.findIndex((u) => Or(u, o) <= 121);
    if (s >= 0) {
      const u = r.corners[s], h = u.x - r.center.x, m = u.y - r.center.y, y = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: y };
    }
    return Or(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : mr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function vf(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function H0(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function U0(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => H0(r, h))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, u = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!mr({ x: s, y: u }, o.corners);
  }
  function ft(r) {
    if (R0(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? Mt("none") : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" || d.interaction.kind === "roll_frame" ? Mt("grabbing") : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? Mt("move") : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" || d.interaction.kind === "scale_raster_object" ? Mt(d.interaction.cursor || "nwse-resize") : d.interaction.kind === "rotate" ? Mt("grabbing") : Mt("default");
      return;
    }
    if (pf()) {
      Mt("none");
      return;
    }
    if (d.mode === "frame") {
      if (d.altModifier && !i) {
        Mt(XS);
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
    const o = wt(), s = o ? jt(o) : null, u = o ? Dn(o) : !1, h = u ? { kind: "none", cursor: "default" } : kl(s, r);
    if (!u && h.kind !== "none") {
      Mt(h.cursor);
      return;
    }
    if (d.primaryTool === "cursor" && yf(r)) {
      Mt("default");
      return;
    }
    Mt(d.mode === "pano" ? "grab" : "default");
  }
  function Ye() {
    var x, N;
    if (!It) return;
    if (d.mode === "frame") {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const r = wt(), o = In();
    if (!r && o.length === 0 || d.interaction) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = lo(), u = gx({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? nl(o) : jt(r),
      allLocked: rl(o),
      selectedLocked: Dn(r),
      activeAspect: br(r),
      cutoutAspectOpen: d.cutoutAspectOpen,
      isExternalSticker: Vt,
      isStickerHidden: Si,
      canRestoreSelectedToInitial: Gp,
      iconSet: Ee
    });
    if (!u.visible) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (T, C, { requireFitsBelow: R = !0 } = {}) => {
      var we, Re, $e;
      const te = Number((we = u.anchor) == null ? void 0 : we.minX), K = Number((Re = u.anchor) == null ? void 0 : Re.maxX), z = Number(($e = u.anchor) == null ? void 0 : $e.maxY);
      if (![te, K, z].every(Number.isFinite)) return null;
      const ne = Math.max(14, A.width - T - 14), he = J((te + K) * 0.5 - T * 0.5, 14, ne), se = z + 18;
      return !Number.isFinite(he) || !Number.isFinite(se) || R && se + C > A.height - 14 ? null : { left: he, top: se };
    }, m = Math.max(1, Number(((x = d.menuSize) == null ? void 0 : x.w) || 220)), y = Math.max(1, Number(((N = d.menuSize) == null ? void 0 : N.h) || 40)), g = h(m, y, { requireFitsBelow: !1 });
    if (!g) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    k.selectionMenu = {
      visible: !0,
      left: g.left,
      top: g.top,
      items: u.items
    }, requestAnimationFrame(() => {
      if (!It || k.selectionMenu.visible !== !0) return;
      const T = It.getBoundingClientRect(), C = Math.round(Number((T == null ? void 0 : T.width) || 0)) || 220, R = Math.round(Number((T == null ? void 0 : T.height) || 0)) || 40;
      d.menuSize = { w: C, h: R, measured: !0 };
      const V = h(C, R);
      if (!V) {
        k.selectionMenu.visible = !1;
        return;
      }
      k.selectionMenu.left = V.left, k.selectionMenu.top = V.top;
    });
  }
  function Yr() {
    He.timer && (clearTimeout(He.timer), He.timer = 0), He.target = null, k.tooltip.visible = !1;
  }
  function G0(r) {
    if (!Pt || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    k.tooltip.text = o, k.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var K, z;
      if (He.target !== s || !Pt || !(s != null && s.isConnected)) return;
      const u = ue.getBoundingClientRect(), h = s.getBoundingClientRect(), m = 8, y = 12, g = Math.round(Number(((K = Pt.getBoundingClientRect()) == null ? void 0 : K.width) || 0)) || 100, x = Math.round(Number(((z = Pt.getBoundingClientRect()) == null ? void 0 : z.height) || 0)) || 24, N = !!s.closest(".pano-floating-left"), T = !!s.closest(".pano-frame-rail"), C = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let R = "", V = h.left - u.left + h.width * 0.5 - g * 0.5, te = h.top - u.top - x - y;
      if (N)
        R = "tool-rail", V = h.right - u.left + 10, te = h.top - u.top + h.height * 0.5 - x * 0.5, V = J(V, m, Math.max(m, u.width - g - m)), te = J(te, m, Math.max(m, u.height - x - m));
      else if (T)
        R = "frame-rail", V = h.left - u.left - g - 10, te = h.top - u.top + h.height * 0.5 - x * 0.5, V = J(V, m, Math.max(m, u.width - g - m)), te = J(te, m, Math.max(m, u.height - x - m));
      else if (C) {
        R = "footer";
        const ne = s.closest(".pano-paint-footer"), he = ne ? ne.getBoundingClientRect() : h;
        V = he.left - u.left + he.width * 0.5 - g * 0.5, te = he.bottom - u.top + 5, V = J(V, m, Math.max(m, u.width - g - m)), te = Math.max(m, te);
      }
      V = J(V, m, Math.max(m, u.width - g - m)), te = Math.max(m, te), k.tooltip.left = V, k.tooltip.top = te, k.tooltip.variant = R, k.tooltip.visible = !0;
    });
  }
  const Kt = Gs({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (r) => {
      d.viewYaw = Ht(Number(r.yaw || 0)), d.viewPitch = J(Number(r.pitch || 0), -89.9, 89.9), d.viewFov = J(Number(r.fov || d.viewFov || 100), 35, 140);
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
        x: (r = _.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = _.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Tr,
    onInteraction: () => {
      le.backgroundDirty = !0, le.dirty = !0;
    }
  });
  function B0(r, o, s = {}) {
    var m;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    r.accumulatedRad += Om(o, r.lastAngle), r.lastAngle = o;
    const u = Rm(r.start.roll_deg, r.accumulatedRad, {
      shiftKey: s.shiftKey,
      altKey: r.altStarted ? !1 : s.altKey
    });
    r.shot.roll_deg = u, r.changed = r.changed || Math.abs(r.accumulatedRad) > 1e-9;
    const h = (((m = k.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u, h.displayValue = ji(u), h.fillPct = (u + 180) / 360 * 100), fr(), Pl(r), ve({ localOnly: !0 });
  }
  function K0(r, o, s = {}) {
    var m;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot || !r.rollGesture) return;
    const u = Hm(r.rollGesture, o, s);
    if (!u) return;
    r.rollGesture = u.gesture, r.center = u.gesture.center, r.lastAngle = u.gesture.lastAngle, r.accumulatedRad = u.gesture.accumulatedRad, r.shot.roll_deg = u.rollDeg, r.changed = r.changed || Math.abs(u.gesture.accumulatedRad) > 1e-9;
    const h = (((m = k.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u.rollDeg, h.displayValue = ji(u.rollDeg), h.fillPct = (u.rollDeg + 180) / 360 * 100), fr(), Pl(r), ve({ localOnly: !0 });
  }
  const _f = (r, o) => {
    const s = Wr(r);
    return Math.atan2(s.y - o.y, s.x - o.x);
  };
  function Pl(r) {
    var y, g;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    He.timer && (clearTimeout(He.timer), He.timer = 0), He.target = null;
    const o = Lt(r.shot), s = (y = A.getBoundingClientRect) == null ? void 0 : y.call(A), u = (g = ue.getBoundingClientRect) == null ? void 0 : g.call(ue);
    if (!o || !s || !u || A.width <= 0 || A.height <= 0) return;
    const h = s.width / A.width, m = s.height / A.height;
    k.tooltip.text = `${ji(r.shot.roll_deg)}°`, k.tooltip.left = s.left - u.left + (o.x + o.w * 0.5) * h, k.tooltip.top = s.top - u.top + (o.y + o.h * 0.5) * m + 12, k.tooltip.variant = "roll", k.tooltip.visible = !0;
  }
  Ge == null || Ge.addEventListener("pointerdown", (r) => {
    var m;
    if (r.button !== 0 || i || d.mode !== "frame") return;
    const o = ze();
    if (!o || o.locked === !0) return;
    const s = Lt(o);
    if (!s) return;
    const u = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = _f(r, u);
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
    }, (m = Ge.setPointerCapture) == null || m.call(Ge, r.pointerId), r.preventDefault(), fr(), Pl(d.interaction), ve({ localOnly: !0 });
  }), Ge == null || Ge.addEventListener("pointermove", (r) => {
    var o;
    ((o = d.interaction) == null ? void 0 : o.kind) !== "roll_frame" || d.interaction.source !== "knob" || B0(
      d.interaction,
      _f(r, d.interaction.center),
      r
    );
  });
  const W0 = () => {
    const r = d.interaction;
    (r == null ? void 0 : r.kind) !== "roll_frame" || r.source !== "knob" || (r.changed && (et(), nt(), Ve()), d.interaction = null, Yr(), ur(), fr(), ve());
  };
  Ge == null || Ge.addEventListener("pointerup", W0), Ge == null || Ge.addEventListener("pointercancel", () => xa()), Ge == null || Ge.addEventListener("lostpointercapture", () => {
    var r;
    ((r = d.interaction) == null ? void 0 : r.source) === "knob" && xa();
  }), Ge == null || Ge.addEventListener("dblclick", (r) => {
    const o = d.mode === "frame" && !i ? ze() : null;
    !o || o.locked === !0 || Math.abs(Number(o.roll_deg ?? o.rot_deg ?? 0)) <= 1e-9 || (o.roll_deg = 0, et(), nt(), Ve(), fr(), ve(), r.preventDefault());
  }), A.onpointerdown = (r) => {
    const o = Wr(r);
    if (So(o, !0), d.viewTween = null, Kt.state.inertia.active = !1, Kt.state.inertia.vx = 0, Kt.state.inertia.vy = 0, r.button === 1) {
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
        const g = d.mode === "unwrap" ? o : wo(r);
        d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Kt.startDrag(g.x, g.y, r.pointerId, performance.now());
      }
      ft(o), A.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (d.mode === "frame" && (r.altKey || r.shiftKey) && !i) {
      const g = ze(), x = Lt(g);
      if (!g || g.locked === !0 || !x) return;
      const N = jm({
        frame: x,
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
      }, A.setPointerCapture(r.pointerId), r.preventDefault(), fr(), ve({ localOnly: !0 });
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
        const g = wo(r);
        d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Kt.startDrag(g.x, g.y, r.pointerId, performance.now()), ft(o), A.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (H && !H.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (hf() || Nl())) {
      const g = d.primaryTool === "mask" ? "mask" : "paint", x = d.primaryTool === "mask" ? d.maskTool : d.paintTool, N = d.mode === "frame" && Nl() ? ze() : null, T = { kind: "ERP_GLOBAL" }, C = N ? Rn(o, N, performance.now()) : On(o, performance.now());
      if (!C) {
        ft(o);
        return;
      }
      d.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: g,
        _livePreviewToken: Hi("live"),
        stroke: x === "lasso_fill" ? bf(g, x, [C], T) : gf(g, x, [C], T)
      }, Pi();
      const R = _n();
      if (R)
        if (d.paintEngine.beginStroke(d.interaction.stroke, R), d.interaction.kind === "paint_stroke") {
          const V = d.paintEngine.ensureTarget(R), te = Number((C == null ? void 0 : C.u) ?? (C == null ? void 0 : C.x) ?? 0), K = Number((C == null ? void 0 : C.v) ?? (C == null ? void 0 : C.y) ?? 0);
          d.paintEngine.appendStrokePoint(V, te, K, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, R);
      ft(o), A.setPointerCapture(r.pointerId), ve();
      return;
    }
    const s = In(), u = wt(), h = s.length > 1 ? nl(s) : u ? jt(u) : null;
    if (d.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      d.interaction = { kind: "marquee_select", start: o, current: o }, ft(o), A.setPointerCapture(r.pointerId), ve({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((x) => Dn(x)) ? { kind: "none" } : kl(h, o)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: s.map((x) => x),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((x) => vt(x)).map((x) => ({
            id: String(x.id || ""),
            yaw_deg: Number(x.yaw_deg || 0),
            pitch_deg: Number(x.pitch_deg || 0),
            center: (() => {
              var T, C;
              const N = jt(x);
              return N != null && N.visible ? { x: Number(((T = N.center) == null ? void 0 : T.x) || 0), y: Number(((C = N.center) == null ? void 0 : C.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((x) => Ft(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Zt(Tn(x.actionGroupId, x.layerKind)),
            frameSnapshot: Zt(Cr(x.actionGroupId, x.layerKind)),
            center: (() => {
              var T, C;
              const N = jt(x);
              return N != null && N.visible ? { x: Number(((T = N.center) == null ? void 0 : T.x) || 0), y: Number(((C = N.center) == null ? void 0 : C.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: tl(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: s.filter((x) => Xt(x)).map((x) => ({
            id: $t(x.rasterObjectId || x.id || ""),
            snapshot: Zt(dn().find((N) => String((N == null ? void 0 : N.id) || "") === $t(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var T, C;
              const N = jt(x);
              return N != null && N.visible ? { x: Number(((T = N.center) == null ? void 0 : T.x) || 0), y: Number(((C = N.center) == null ? void 0 : C.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Uc(x)
          }))
        }, ft(o), A.setPointerCapture(r.pointerId);
        return;
      }
    } else if (u && (h != null && h.visible)) {
      const g = Dn(u) ? { kind: "none" } : kl(h, o);
      if (g.kind === "scale") {
        d.interaction = Ft(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Zt(Tn(u.actionGroupId, u.layerKind)),
          frameSnapshot: Zt(Cr(u.actionGroupId, u.layerKind)),
          cursor: g.cursor
        } : Xt(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Zt(dn().find((x) => String((x == null ? void 0 : x.id) || "") === $t(u.rasterObjectId || u.id || ""))),
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
        d.interaction = Ft(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: Zt(Tn(u.actionGroupId, u.layerKind)),
          frameSnapshot: Zt(Cr(u.actionGroupId, u.layerKind))
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
        if (Ft(u)) {
          const x = d.mode === "frame" ? (() => {
            const N = ze();
            return N ? Rn(o, N, performance.now()) : null;
          })() : On(o, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: x,
            snapshot: Zt(Tn(u.actionGroupId, u.layerKind)),
            frameSnapshot: Zt(Cr(u.actionGroupId, u.layerKind))
          }, ft(o), A.setPointerCapture(r.pointerId);
          return;
        }
        if (Xt(u)) {
          const x = d.mode === "frame" ? (() => {
            const N = ze();
            return N ? Rn(o, N, performance.now()) : null;
          })() : On(o, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: x,
            snapshot: Zt(dn().find((N) => String((N == null ? void 0 : N.id) || "") === $t(u.rasterObjectId || u.id || "")))
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
    const m = yf(o);
    if (m) {
      const g = d.selectedId !== m.item.id;
      if (g && d.selectedId && (et(), mn()), wi(m.item), t === "cutout" && g && (d.cutoutAspectOpen = !1), g && Ve(), Ye(), ve(), Dn(m.item)) {
        ft(o);
        return;
      }
      d.interaction = {
        kind: Ft(m.item) ? "move_stroke_group" : Xt(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Ft(m.item) || Xt(m.item) ? d.mode === "frame" ? (() => {
          const x = ze();
          return x ? Rn(o, x, performance.now()) : null;
        })() : On(o, performance.now()) : null,
        snapshot: Ft(m.item) ? Zt(Tn(m.item.actionGroupId, m.item.layerKind)) : Xt(m.item) ? Zt(dn().find((x) => String((x == null ? void 0 : x.id) || "") === $t(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Ft(m.item) ? Zt(Cr(m.item.actionGroupId, m.item.layerKind)) : null
      }, ft(o), A.setPointerCapture(r.pointerId);
      return;
    }
    const y = !!d.selectedId;
    if (y && (et(), mn()), ma(), y && Ve(), Ye(), ve(), d.mode === "pano") {
      const g = wo(r);
      d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Kt.startDrag(g.x, g.y, r.pointerId, performance.now()), ft(o), A.setPointerCapture(r.pointerId);
    }
  }, A.onpointermove = (r) => {
    var u, h, m, y, g, x, N, T, C, R, V, te, K, z, ne, he, se, we, Re, $e, Xe, _e;
    const o = Wr(r);
    if (So(o, !0), !d.interaction) {
      ft(o);
      return;
    }
    ft(o);
    const s = d.interaction;
    if (s.kind === "paint_stroke") {
      const oe = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let ye = !1;
      oe.forEach((Ie) => {
        const De = Wr(Ie);
        if (d.mode === "frame") {
          const Te = ze(), Ue = Te ? Lt(Te) : null;
          if (Ue) {
            const rt = (De.x - Ue.x) / Math.max(1, Ue.w), qe = (De.y - Ue.y) / Math.max(1, Ue.h);
            if (!(rt >= 0 && rt <= 1 && qe >= 0 && qe <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, V0(s));
          }
        }
        L0(s, De, performance.now()) && (ye = !0);
      }), ye && ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const oe = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let ye = !1;
      if (oe.forEach((Ie) => {
        const De = Wr(Ie);
        if (d.mode === "frame") {
          const Te = ze(), Ue = Te ? Lt(Te) : null;
          if (Ue) {
            const rt = (De.x - Ue.x) / Math.max(1, Ue.w), qe = (De.y - Ue.y) / Math.max(1, Ue.h);
            if (!(rt >= 0 && rt <= 1 && qe >= 0 && qe <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, j0(s));
          }
        }
        z0(s, De, performance.now()) && (ye = !0);
      }), ye) {
        const Ie = _n();
        Ie && d.paintEngine.updateActiveStroke(s.stroke, Ie), ve({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const oe = performance.now(), ye = d.mode === "unwrap" ? o : wo(r);
      Kt.moveDrag(ye.x, ye.y, d.mode === "unwrap" ? "unwrap" : "pano", oe), s.lastTs = oe, s.last = ye, ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      const oe = Sl(s.shot);
      if (!oe || !s.shot) return;
      const ye = o.x - s.last.x, Ie = o.y - s.last.y, De = Um(s.shot, {
        dx: ye,
        dy: Ie,
        focalPx: oe.focalPx,
        invertX: ((u = _.ui_settings) == null ? void 0 : u.invert_view_x) === !0,
        invertY: ((h = _.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      s.shot.yaw_deg = De.yaw_deg, s.shot.pitch_deg = De.pitch_deg, s.changed = s.changed || Math.abs(ye) > 0 || Math.abs(Ie) > 0, s.last = o, ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "roll_frame") {
      if (s.source === "knob") return;
      K0(s, o, r);
      return;
    }
    if (s.kind === "move") {
      const oe = o.x - s.offset.x, ye = o.y - s.offset.y;
      if (d.mode === "frame" && t === "cutout") {
        const Ie = ze(), De = Lt(Ie);
        if (!Ie || !De) return;
        const Te = {
          x: J((oe - De.x) / Math.max(1, De.w), 0, 1),
          y: J((ye - De.y) / Math.max(1, De.h), 0, 1)
        }, Ue = bl(Ie, Te);
        if (!Ue) return;
        const rt = Wo(Ue);
        s.item.yaw_deg = rt.yaw, s.item.pitch_deg = rt.pitch;
      } else if (d.mode === "unwrap") {
        const Ie = Tr(), De = J((oe - Ie.x) / Math.max(Ie.w, 1), 0, 1), Te = J((ye - Ie.y) / Math.max(Ie.h, 1), 0, 1);
        s.item.yaw_deg = Ht(De * 360 - 180), s.item.pitch_deg = J(90 - Te * 180, -90, 90);
      } else {
        const Ie = cl(oe, ye), De = Wo(Ie);
        s.item.yaw_deg = De.yaw, s.item.pitch_deg = De.pitch;
      }
      vt(s.item) && Bt(), ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const oe = d.mode === "frame" ? (() => {
        const De = ze();
        return De ? Rn(o, De, performance.now()) : null;
      })() : On(o, performance.now());
      if (!oe || !s.startUv) return;
      const ye = Mn(Number(oe.u || 0), Number(s.startUv.u || 0)), Ie = Number(oe.v || 0) - Number(s.startUv.v || 0);
      xc((m = s.item) == null ? void 0 : m.actionGroupId, ye, Ie, s.snapshot, (y = s.item) == null ? void 0 : y.layerKind, s.frameSnapshot) && (En({ rebuildPaintEngine: !1 }), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const oe = d.mode === "frame" ? (() => {
        const De = ze();
        return De ? Rn(o, De, performance.now()) : null;
      })() : On(o, performance.now());
      if (!oe || !s.startUv) return;
      const ye = Mn(Number(oe.u || 0), Number(s.startUv.u || 0)), Ie = Number(oe.v || 0) - Number(s.startUv.v || 0);
      Sc(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((x = s.item) == null ? void 0 : x.id) || "", ye, Ie, s.snapshot) && (Di(), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Ep(((N = s.item) == null ? void 0 : N.rasterObjectId) || ((T = s.item) == null ? void 0 : T.id) || "", ye, s.snapshot) && (Di(), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const oe = o.x - Number(((C = s.offset) == null ? void 0 : C.x) || 0), ye = o.y - Number(((R = s.offset) == null ? void 0 : R.y) || 0);
      let Ie = !1, De = !1, Te = !1;
      const Ue = oe - Number(((V = s.startCenter) == null ? void 0 : V.x) || oe), rt = ye - Number(((te = s.startCenter) == null ? void 0 : te.y) || ye);
      for (const qe of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const dt = (t === "cutout" ? el() : sr()).find((_t) => String((_t == null ? void 0 : _t.id) || "") === String(qe.id || ""));
        if (!dt || !vt(dt)) continue;
        const Wt = {
          x: Number(((K = qe.center) == null ? void 0 : K.x) || 0) + Ue,
          y: Number(((z = qe.center) == null ? void 0 : z.y) || 0) + rt
        };
        if (d.mode === "frame" && t === "cutout") {
          const _t = ze(), Dt = Lt(_t);
          if (!_t || !Dt) continue;
          const qr = {
            x: J((Wt.x - Dt.x) / Math.max(1, Dt.w), 0, 1),
            y: J((Wt.y - Dt.y) / Math.max(1, Dt.h), 0, 1)
          }, Ff = bl(_t, qr);
          if (!Ff) continue;
          const Lf = Wo(Ff);
          dt.yaw_deg = Lf.yaw, dt.pitch_deg = Lf.pitch;
        } else if (d.mode === "unwrap") {
          const _t = Tr(), Dt = J((Wt.x - _t.x) / Math.max(_t.w, 1), 0, 1), qr = J((Wt.y - _t.y) / Math.max(_t.h, 1), 0, 1);
          dt.yaw_deg = Ht(Dt * 360 - 180), dt.pitch_deg = J(90 - qr * 180, -90, 90);
        } else {
          const _t = cl(Wt.x, Wt.y), Dt = Wo(_t);
          dt.yaw_deg = Dt.yaw, dt.pitch_deg = Dt.pitch;
        }
        Ie = !0;
      }
      for (const qe of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const dt = {
          x: Number(((ne = qe.center) == null ? void 0 : ne.x) || 0) + Ue,
          y: Number(((he = qe.center) == null ? void 0 : he.y) || 0) + rt
        }, Wt = d.mode === "frame" ? (() => {
          const Dt = ze();
          return Dt ? Rn(dt, Dt, performance.now()) : null;
        })() : On(dt, performance.now()), _t = qe.centerUv || null;
        if (Wt && _t) {
          const Dt = Mn(Number(Wt.u || 0), Number(_t.u || 0)), qr = Number(Wt.v || 0) - Number(_t.v || 0);
          xc(qe.id, Dt, qr, qe.snapshot, qe.layerKind, qe.frameSnapshot) && (Ie = !0, De = !0);
        }
      }
      for (const qe of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const dt = {
          x: Number(((se = qe.center) == null ? void 0 : se.x) || 0) + Ue,
          y: Number(((we = qe.center) == null ? void 0 : we.y) || 0) + rt
        }, Wt = d.mode === "frame" ? (() => {
          const Dt = ze();
          return Dt ? Rn(dt, Dt, performance.now()) : null;
        })() : On(dt, performance.now()), _t = qe.centerUv || null;
        if (Wt && _t) {
          const Dt = Mn(Number(Wt.u || 0), Number(_t.u || 0)), qr = Number(Wt.v || 0) - Number(_t.v || 0);
          Sc(qe.id, Dt, qr, qe.snapshot) && (Ie = !0, Te = !0);
        }
      }
      Ie && (De ? En({ rebuildPaintEngine: !1 }) : Te ? Di() : Bt(), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      wc((Re = s.item) == null ? void 0 : Re.actionGroupId, ye, 0, s.snapshot, ($e = s.item) == null ? void 0 : $e.layerKind, s.frameSnapshot) && (En({ rebuildPaintEngine: !1 }), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let oe = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * yr;
      r.shiftKey && (oe = Math.round(oe / 45) * 45), wc((Xe = s.item) == null ? void 0 : Xe.actionGroupId, 1, oe, s.snapshot, (_e = s.item) == null ? void 0 : _e.layerKind, s.frameSnapshot) && (En({ rebuildPaintEngine: !1 }), ve({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = J(s.startHFOV * ye, 1, 179), s.item.vFOV_deg = J(s.startVFOV * ye, 1, 179), s.item.aspect_id = ri(s.item), vt(s.item) && Bt(), ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = J(s.startHFOV * ye, 1, 179), s.item.aspect_id = ri(s.item), vt(s.item) && Bt(), ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const ye = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = J(s.startVFOV * ye, 1, 179), s.item.aspect_id = ri(s.item), vt(s.item) && Bt(), ve({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let ye = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * yr, Ie = s.startRot - ye;
      r.shiftKey && (Ie = Math.round(Ie / 45) * 45);
      const De = vt(s.item) ? "rot_deg" : "roll_deg";
      s.item[De] = Ie, vt(s.item) && Bt(), ve({ localOnly: !0 });
    }
  }, A.onpointerup = () => {
    var o, s, u, h, m, y, g, x;
    const r = d.interaction;
    if (!((r == null ? void 0 : r.kind) === "roll_frame" && r.source === "knob")) {
      if (((o = d.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        Pi();
        const N = Ml(d.interaction), T = !!d.interaction._hasCommittedSegments;
        if (N || T) {
          En();
          const C = String(((u = d.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
          if (C) {
            const V = qt().find((te) => String((te == null ? void 0 : te.actionGroupId) || "") === C);
            V && (V.frame = null);
          }
          const R = _n();
          R && (N ? String(((h = d.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(R), Jc()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, R) : d.paintEngine.cancelActiveStroke(R)), et(), mn(), Ve(), Ye(), e.setDirtyCanvas(!0, !0), ve();
        } else {
          const C = _n();
          C && d.paintEngine.cancelActiveStroke(C);
        }
      } else if (((m = d.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const N = vf(d.interaction.start, d.interaction.current), C = [
          ...t === "cutout" ? gl().filter((R) => !vn(R)) : [...sr()],
          ...Cp(),
          ...Tp()
        ].filter((R) => U0(N, jt(R)));
        Fp(C, ((y = C[C.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && C.length && (d.cutoutAspectOpen = !1), Ve(), Ye(), ve();
      } else if (((g = d.interaction) == null ? void 0 : g.kind) === "pan_frame" || ((x = d.interaction) == null ? void 0 : x.kind) === "roll_frame")
        d.interaction.changed && (et(), nt(), Ve());
      else if (d.interaction && d.interaction.kind !== "view") {
        let N = !1;
        (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (N = !0), (d.interaction.kind === "move_raster_object" || d.interaction.kind === "scale_raster_object") && (N = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (N = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (N = !0), N && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(d.interaction.kind) || d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length ? En({ rebuildPaintEngine: !0 }) : Di()), et(), mn(), e.setDirtyCanvas(!0, !0), Ei(), d.hqFrames = 1, Ye(), ve();
      }
      d.interaction = null, (r == null ? void 0 : r.kind) === "roll_frame" && Yr(), Pi(), r && r.kind === "view" && Kt.endDrag(performance.now()), ur(), Ye(), ft(d.pointerPos), ve();
    }
  }, A.onpointercancel = () => {
    var r, o, s;
    if (!xa()) {
      if (((r = d.interaction) == null ? void 0 : r.kind) === "view" && Kt.endDrag(performance.now()), ((o = d.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        Pi();
        const u = _n();
        u && d.paintEngine.cancelActiveStroke(u);
      }
      d.interaction = null, Pi(), ur(), ft(d.pointerPos), ve({ localOnly: !0 });
    }
  }, A.onlostpointercapture = () => {
    xa();
  }, A.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, A.onmousemove = (r) => {
    const o = Wr(r), s = So(o, !0);
    d.interaction || (ft(o), s && d.mode === "frame" && d.primaryTool === "cursor" && ve({ localOnly: !0 }));
  }, A.onmouseleave = () => {
    So(d.pointerPos, !1), ft(d.pointerPos), d.mode === "frame" && d.primaryTool === "cursor" && ve({ localOnly: !0 });
  }, A.onwheel = (r) => {
    if (d.mode === "frame") {
      const o = Wr(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      I0(o, s) && ve({ localOnly: !0 }), r.preventDefault();
      return;
    }
    d.mode === "pano" && (Kt.applyWheelEvent(r) && ve({ localOnly: !0 }), r.preventDefault());
  }, A.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), Gr(!0));
  }, A.ondrop = (r) => {
    var u;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), At.depth = 0, Gr(!1);
    const s = Array.from(((u = r.dataTransfer) == null ? void 0 : u.files) || []).find((h) => _a(h));
    s && of(s);
  };
  const xf = (r) => {
    t !== "stickers" && t !== "cutout" || i || qs(r) && (At.depth += 1, Gr(!0), r.preventDefault());
  }, wf = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!At.active && qs(r) && Gr(!0), At.active && r.preventDefault());
  }, Sf = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !At.active) return;
    At.depth = Math.max(0, At.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (At.depth === 0 || o) && Gr(!1);
  }, Nf = (r) => {
    t !== "stickers" && t !== "cutout" || i || (At.depth = 0, Gr(!1), qs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", xf, !0), window.addEventListener("dragover", wf, !0), window.addEventListener("dragleave", Sf, !0), window.addEventListener("drop", Nf, !0);
  function Al() {
    const { canUndo: r, canRedo: o } = af();
    zi(k.toolButtons, "value", "undo", { disabled: !r }), zi(k.toolButtons, "value", "redo", { disabled: !o });
  }
  const Mf = (r, o, s = !1) => {
    var x;
    const u = t === "cutout" && d.mode === "frame" ? ze() : null, h = u || wt(), m = u ? "shot" : lo();
    if (!h || m === "stroke" || Dn(h)) return;
    const y = (((x = k.sidePanel) == null ? void 0 : x.params) || []).find((N) => N.key === r);
    if (!y || y.enabled === !1) return;
    let g = Number(o);
    Number.isNaN(g) && (g = 0), g = J(g, Number(y.min), Number(y.max)), r === "yaw_deg" && (g = Ht(g)), h[r] = g, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (h.aspect_id = ri(h)), Ve(), ve(), s && et();
  };
  ke == null || ke.addEventListener("click", async (r) => {
    var u, h, m, y, g, x, N, T, C;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const R = Yt(o.getAttribute("data-coverage"));
      if (R === Yt(_.coverage)) return;
      _.coverage = R, d.coverage = R, p && (p.value = String(R)), l ? le.backgroundDirty = !0 : (mn(), C0({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), Ye(), ve();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((h = (u = k.sidePanel) == null ? void 0 : u.selectionPicker) != null && h.disabled) return;
      k.sidePanel.selectionPicker.open = !k.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      k.sidePanel.selectionPicker.open = !1;
      const R = String(o.getAttribute("data-selection-id") || "");
      let V = null;
      R && (t === "stickers" ? V = sr().find((te) => String((te == null ? void 0 : te.id) || "") === R) || null : V = ((m = Mc().find((te) => {
        var K;
        return String(((K = te == null ? void 0 : te.item) == null ? void 0 : K.id) || "") === R;
      })) == null ? void 0 : m.item) || null), wi(V || null), V && !Ft(V) && Xs(
        Ht(Number(V.yaw_deg || 0)),
        J(Number(V.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ve(), Ye(), ve();
      return;
    }
    if (s === "copy-state-inline") {
      const R = wt(), V = lo();
      if (!R || V === "stroke" || In().length > 1) return;
      const te = JSON.stringify(t === "cutout" && V !== "image" ? Dc(R) : qp(R));
      try {
        await navigator.clipboard.writeText(te), (y = k.sidePanel) != null && y.copyStateButton && (k.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var K;
          (K = k.sidePanel) != null && K.copyStateButton && (k.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const R = String(o.getAttribute("data-visibility") || "");
      R === "panorama" ? d.showPanorama = !d.showPanorama : R === "objects" ? d.showObjects = !d.showObjects : R === "mask" && (d.showMask = !d.showMask), Ve(), ve();
      return;
    }
    if (s === "set-invert-x") {
      _.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", xo(), Ve(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), ve();
      return;
    }
    if (s === "set-invert-y") {
      _.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", xo(), Ve(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), ve();
      return;
    }
    if (s === "toggle-quality-picker") {
      (N = k.sidePanel) != null && N.uiSettings && (k.sidePanel.uiSettings.qualityOpen = !k.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const R = String(o.getAttribute("data-quality") || "balanced");
      _.ui_settings.preview_quality = R === "draft" || R === "high" ? R : "balanced", xo(), Ve(), (T = e.setDirtyCanvas) == null || T.call(e, !0, !0), ve();
      return;
    }
    if (s === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, _.ui_settings.preview_quality = "balanced", xo(), Ve(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), ve();
      return;
    }
    if (s === "close-preview") {
      Fi();
      return;
    }
    if (s === "cancel-close") {
      Fi();
      return;
    }
    s === "save-close" && (P0(), Fi());
  }), ke == null || ke.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Mf(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), ke == null || ke.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Mf(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const Cl = () => Oc();
  Cl(), W.addEventListener("click", (r) => {
    var g, x, N, T, C, R, V, te, K;
    if ((x = (g = r.target) == null ? void 0 : g.matches) != null && x.call(g, "[data-confirm-overlay]")) {
      const z = (N = k.confirmDialog) == null ? void 0 : N.resolve;
      k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, z == null || z(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      const z = d.mode;
      d.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && d.mode === "frame" && (z !== "frame" && (le.frameSafeRect = null), Ve(), Ye()), wl(), ur(), ve();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const z = String(s.getAttribute("data-tool-mode") || "cursor");
        d.primaryTool = z, (z === "paint" || z === "mask") && ma({ preservePanelValues: !0 }), hn(), Ve(), Ye(), ve();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const z = String(s.getAttribute("data-tool-ui-action") || "");
        if ((z === "undo" || z === "redo") && s.disabled) return;
        z === "undo" ? _l(-1) : z === "redo" ? _l(1) : z === "clear" ? x0() : z === "add" || z === "add-image" ? m0() : z === "add-or-look" && y0();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        d.primaryTool = "paint";
        const z = String(s.getAttribute("data-paint-tool") || "pen");
        d.paintTool = z, ma({ preservePanelValues: !0 }), pn[z] && (d.activeBrushPresetId = z), hn(), Ve(), Ye(), ve();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        d.primaryTool = "mask", d.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), ma({ preservePanelValues: !0 }), hn(), Ve(), Ye(), ve();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const z = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        w0(z);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const z = ls.find((ne) => ne.id === s.getAttribute("data-paint-color-swatch"));
        if (!z) return;
        d.paintColor = xn(z.color), Q(!0), hn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), H && !H.hidden ? Q(!0) : ge(), hn();
        return;
      }
    }
    const u = String(((T = s == null ? void 0 : s.getAttribute) == null ? void 0 : T.call(s, "data-action")) || "");
    if (u === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(B instanceof HTMLVideoElement)) return;
      if (ki(), B.paused) {
        Ne.mode = "playback", Ne.pendingPlaybackResume = !1, Ne.resumeAfterScrub = !1;
        const z = Number(k.videoTransport.duration || B.duration || 0), ne = Number(B.currentTime || Ne.editorTime || 0), he = z > 0 && ne >= z - 1e-3 ? 0 : Number(Ne.editorTime || ne || 0), se = Math.max(Ys(), 0.04);
        Ne.editorTime = he, Math.abs(ne - he) > se ? (Ne.seeking = !1, Ne.pendingPlaybackResume = !0, ol(he)) : B.play().catch(() => {
        });
      } else
        B.pause(), Ne.mode = "scrub", Ne.resumeAfterScrub = !1, Ne.pendingPlaybackResume = !1, Ne.editorTime = Number(B.currentTime || 0), Mi();
      Hn({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: lr(),
        currentTime: Ne.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: Ne.mode
      }), ve({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (u === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(B instanceof HTMLVideoElement) || !k.videoTransport.hasAudio) return;
      const z = !B.muted;
      B.muted = z, !z && Number(B.volume || 0) <= 0 && (B.volume = Math.max(0.01, Number(k.videoTransport.volume || 1))), Hn({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: lr(),
        currentTime: Ne.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: Ne.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: B.muted,
        volume: Number(B.volume ?? k.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (u === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(B instanceof HTMLVideoElement)) return;
      const z = !k.videoTransport.loop;
      k.videoTransport.loop = z, B.loop = z, Hn({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: lr(),
        currentTime: Ne.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: Ne.mode,
        hasAudio: k.videoTransport.hasAudio,
        loop: z,
        muted: B.muted,
        volume: Number(B.volume ?? k.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (u === "frame-aspect") {
        k.frameRail.aspectOpen = !k.frameRail.aspectOpen;
        return;
      }
      if (u === "frame-aspect-set") {
        const z = d.mode === "frame" ? ze() : null;
        if (!z || z.locked === !0) return;
        uf(z, String(s.getAttribute("data-aspect") || "1:1")), k.frameRail.aspectOpen = !1, Ei(), et(), nt(), ur(), ve();
        return;
      }
      if (u === "frame-aspect-custom") {
        const z = d.mode === "frame" ? ze() : null, ne = (C = s.closest) == null ? void 0 : C.call(s, ".pano-frame-aspect-popover"), he = (V = (R = ne == null ? void 0 : ne.querySelector) == null ? void 0 : R.call(ne, 'input[name="customWidth"]')) == null ? void 0 : V.value, se = (K = (te = ne == null ? void 0 : ne.querySelector) == null ? void 0 : te.call(ne, 'input[name="customHeight"]')) == null ? void 0 : K.value;
        if (!z || !N0(z, he, se)) return;
        k.frameRail.aspectOpen = !1, Ei(), et(), nt(), ur(), ve();
        return;
      }
      if (u === "frame-rotate-90") {
        const z = d.mode === "frame" ? ze() : null;
        if (!z || z.locked === !0) return;
        cf(z), k.frameRail.aspectOpen = !1, Ei(), et(), nt(), ur(), ve();
        return;
      }
      if (u === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, Ye(), ve();
        return;
      }
      if (u === "aspect-set") {
        const z = wt();
        if (!z) return;
        const ne = String(s.getAttribute("data-aspect") || "1:1");
        uf(z, ne), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Ei(), et(), nt(), Ye(), ve();
        return;
      }
      if (u === "rotate-90") {
        const z = wt();
        if (!z) return;
        cf(z), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Ei(), et(), nt(), Ye(), ve();
        return;
      }
      if (u === "bring-front") {
        M0();
        return;
      }
      if (u === "send-back") {
        k0();
        return;
      }
      if (u === "duplicate") {
        S0();
        return;
      }
      if (u === "replace-image") {
        g0();
        return;
      }
      if (u === "toggle-lock") {
        Rp();
        return;
      }
      if (u === "back-initial") {
        Hp();
        return;
      }
      if (u === "toggle-visible") {
        jp();
        return;
      }
      if (u === "delete") {
        lf();
        return;
      }
    }
    if (u === "reset-view") {
      if (d.mode === "frame") return;
      Xs(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      if (d.mode === "frame") return;
      d.showGrid = !d.showGrid, yN(e == null ? void 0 : e.id, d.showGrid), Cl(), ve();
      return;
    }
    if (u === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), X0();
      return;
    }
    if (u === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const z = !d.outputPreviewExpanded;
      d.outputPreviewExpanded = z, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = z ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), Tf(), ve();
      return;
    }
    const h = r.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), y = d.customPaintHistory[m];
    y && (d.customPaintColor = xn(y), d.paintColor = xn(y), hn());
  }), W.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(B instanceof HTMLVideoElement)) return;
      ki();
      const m = J(Number(o.value || 0), 0, Number(k.videoTransport.duration || 0));
      Ne.mode = "scrub", !Ne.seeking && !B.paused && !B.ended && (Ne.resumeAfterScrub = !0, B.pause()), Ne.editorTime = m, yc(m), Hn({
        ready: !!B.getAttribute("src"),
        playing: !1,
        visible: lr(),
        currentTime: m,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: "scrub"
      }), Number(Qe.__panoFrameIdx || 0) > 0 && (le.backgroundDirty = !0, le.dirty = !0, ve({ cause: "frame_view", localOnly: !0 })), ol(m);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(B instanceof HTMLVideoElement)) return;
      const m = J(Number(s.value || 0), 0, 1);
      B.volume = m, B.muted = m <= 1e-4, Hn({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: lr(),
        currentTime: Ne.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: Ne.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: B.muted,
        volume: m
      });
      return;
    }
    const u = r.target.closest("[data-paint-size-slider]");
    if (u) {
      if (u.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(u.value)))), y = Dr(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[y] = m, hn(), F0();
      return;
    }
    const h = r.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...d.customPaintColor, a: J(Number(h.value) / 100, 0, 1) };
      d.customPaintColor = xn(m), d.paintColor = xn(m), hn();
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
    r.target.closest("[data-paint-size-slider]") && No();
  }), W.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && No();
  }), W.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && No();
  }), W.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && No();
  }), W.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !W.contains(o) || He.target !== o && (He.target = o, He.timer && clearTimeout(He.timer), He.timer = window.setTimeout(() => {
      He.target === o && G0(o);
    }, 220));
  }), W.addEventListener("pointerout", (r) => {
    var u, h;
    const o = r.target.closest("[data-tip]");
    !o || He.target !== o || (r.relatedTarget instanceof Element ? (h = (u = r.relatedTarget).closest) == null ? void 0 : h.call(u, "[data-tip]") : null) === o || Yr();
  }), W.addEventListener("pointerdown", (r) => {
    r.target.closest("[data-frame-roll-knob]") || Yr();
  });
  const Y0 = (r, o) => {
    var g;
    if (!ae) return;
    const s = ae.getBoundingClientRect(), u = J((r - s.left) / Math.max(1, s.width), 0, 1), h = 1 - J((o - s.top) / Math.max(1, s.height), 0, 1), m = su(d.customPaintColor), y = { ...ou(m.h, u, h), a: Number(((g = d.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    d.customPaintColor = xn(y), d.paintColor = xn(y), hn();
  }, q0 = (r) => {
    var m;
    if (!be) return;
    const o = be.getBoundingClientRect(), s = J((r - o.left) / Math.max(1, o.width), 0, 1), u = su(d.customPaintColor), h = { ...ou(s, u.s, u.v), a: Number(((m = d.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    d.customPaintColor = xn(h), d.paintColor = xn(h), hn();
  }, kf = (r, o) => {
    const s = r.pointerId;
    o(r);
    const u = (m) => {
      m.pointerId === s && o(m);
    }, h = (m) => {
      m.pointerId === s && (window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  ae && (ae.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), kf(r, (o) => Y0(o.clientX, o.clientY));
  }), be && (be.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), kf(r, (o) => q0(o.clientX));
  }), W.addEventListener("click", (r) => {
    var h;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", u = (h = k.confirmDialog) == null ? void 0 : h.resolve;
    k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(s);
  });
  const Pf = () => {
    const r = !!d.fullscreen;
    zi(k.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Ee.fullscreen_close : Ee.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, Mo = (r) => {
    const o = !!r;
    d.fullscreen !== o && (d.fullscreen = o, W.classList.toggle("pano-modal-fullscreen", o), o ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), Cl(), Pf(), Ws(), ve());
  }, Af = () => document.fullscreenElement === Z, X0 = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        Mo(!d.fullscreen);
        return;
      }
      Af() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = Z.requestFullscreen) == null ? void 0 : r.call(Z));
    } catch {
      Mo(!d.fullscreen);
    }
  }, Cf = () => {
    document.fullscreenEnabled && Mo(Af());
  };
  document.addEventListener("fullscreenchange", Cf), Pf();
  const Tf = () => {
    const r = !!d.outputPreviewExpanded;
    k.outputPreviewToggle.icon = r ? Ee.fullscreen_close : Ee.fullscreen, k.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", k.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  Tf();
  const Tl = e.onExecuted, Il = e.onConnectionsChange;
  let Dl = null, El = null, Ol = null;
  !i && t === "stickers" && (Ol = (r = "sync") => {
    Ec(r);
  }, e.__panoExternalStickerSync = Ol, Dl = function(...o) {
    var s;
    typeof Tl == "function" && Tl.apply(this, o), aN(Oe, jo), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = Dl, El = function(...o) {
    var s;
    typeof Il == "function" && Il.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = El), i || bh.set(String(e.id ?? "0"), () => Vc());
  let Ri = null;
  const Fi = async () => Ri || (Ri = (async () => {
    var r, o, s, u, h, m, y, g, x, N, T;
    return bh.delete(String(e.id ?? "0")), D0(), i || mn(), document.fullscreenElement === Z && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Cf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === df && (e.__panoFlushStateBeforeQueue = null), (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (h = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || h.call(u, !0, !0), (g = (y = (m = zn) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || g.call(y, !0, !0), Yr(), h0(), B instanceof HTMLVideoElement && B.pause(), jn.forEach((C) => {
      try {
        C();
      } catch {
      }
    }), (x = de == null ? void 0 : de.dispose) == null || x.call(de), (N = Ce == null ? void 0 : Ce.unmount) == null || N.call(Ce), (T = Se == null ? void 0 : Se.dispose) == null || T.call(Se), Gr(!1), window.removeEventListener("keydown", If, !0), window.removeEventListener("keydown", Df, !0), window.removeEventListener("keydown", ko, !0), window.removeEventListener("keyup", ko, !0), window.removeEventListener("blur", Ef), window.removeEventListener("keydown", Of, !0), window.removeEventListener("dragenter", xf, !0), window.removeEventListener("dragover", wf, !0), window.removeEventListener("dragleave", Sf, !0), window.removeEventListener("drop", Nf, !0), !i && t === "stickers" && (e.onExecuted === Dl && (e.onExecuted = Tl), e.onConnectionsChange === El && (e.onConnectionsChange = Il), e.__panoExternalStickerSync === Ol && (e.__panoExternalStickerSync = null)), j.unmount(), $.remove(), A0(), Ri = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), Ri = null, !1)), Ri), If = (r) => {
    var o, s, u, h, m;
    if (r.key === "Escape") {
      if (xa()) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r);
        return;
      }
      if (d.fullscreen && document.fullscreenElement === Z) {
        r.preventDefault(), r.stopPropagation(), (s = r.stopImmediatePropagation) == null || s.call(r), (u = document.exitFullscreen) == null || u.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), Mo(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (m = r.stopImmediatePropagation) == null || m.call(r), Fi();
    }
  }, Df = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), u = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || u === 46) && !(o === "Backspace" || s === "Backspace" || u === 8)) return;
    const y = r.target, g = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    g === "INPUT" || g === "TEXTAREA" || y != null && y.isContentEditable || !wt() || (lf(), r.preventDefault(), r.stopPropagation());
  }, ko = (r) => {
    const o = !!(r.ctrlKey || r.metaKey), s = !!r.altKey;
    d.marqueeModifier === o && d.altModifier === s || (d.marqueeModifier = o, d.altModifier = s, fr(), ft(d.pointerPos));
  }, Ef = () => {
    d.marqueeModifier = !1, d.altModifier = !1, fr(), ft(d.pointerPos);
  }, Of = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const u = r.target, h = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: m, canRedo: y } = af();
    r.shiftKey && !y || !r.shiftKey && !m || (_l(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", If, !0), window.addEventListener("keydown", Df, !0), window.addEventListener("keydown", ko, !0), window.addEventListener("keyup", ko, !0), window.addEventListener("blur", Ef), window.addEventListener("keydown", Of, !0), Z.addEventListener("pointerdown", (r) => {
    r.target === Z && Fi();
  });
  function Un(r, o, { rollbackState: s = !1 } = {}) {
    let u = "";
    try {
      s && (u = JSON.stringify(_)), o();
    } catch (h) {
      if (u)
        try {
          const m = JSON.parse(u);
          Object.keys(_).forEach((y) => delete _[y]), Object.assign(_, m), i || mn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${r}" rollback failed`, m);
        }
      k.stageWarningDetail = `boot:${r}`, console.error(`[PanoramaStickers] editor boot step "${r}" failed`, h);
    }
  }
  Un("cutout-focus", Zp), !i && t === "stickers" && Un("external-sticker-sync", () => Ec("open"), { rollbackState: !0 }), b0().catch((r) => {
    k.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', r);
  }), Un("history", et), Un("undo-redo", Al), Un("paint-ui", hn), Un("side-panel", Ve), Un("look-at-frame", ll), Un("video-source", ki), Un("canvas-size", nf), Un("cursor", () => ft(d.pointerPos)), ve(), le.rafId = requestAnimationFrame(rf);
}
zn.registerExtension(KS({
  app: zn,
  openEditor: NN,
  attachStickers: V_,
  attachCutout: j_,
  attachPreview: $_,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: YS
}));
