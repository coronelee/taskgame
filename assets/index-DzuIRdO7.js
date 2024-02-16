(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = s(r);
    fetch(r.href, i);
  }
})();
/**
 * @vue/shared v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function _s(e, t) {
  const s = new Set(e.split(","));
  return t ? (n) => s.has(n.toLowerCase()) : (n) => s.has(n);
}
const U = {},
  Ge = [],
  ie = () => {},
  mr = () => !1,
  Ft = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ms = (e) => e.startsWith("onUpdate:"),
  X = Object.assign,
  bs = (e, t) => {
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1);
  },
  br = Object.prototype.hasOwnProperty,
  R = (e, t) => br.call(e, t),
  I = Array.isArray,
  ze = (e) => Lt(e) === "[object Map]",
  yn = (e) => Lt(e) === "[object Set]",
  P = (e) => typeof e == "function",
  q = (e) => typeof e == "string",
  Qe = (e) => typeof e == "symbol",
  B = (e) => e !== null && typeof e == "object",
  vn = (e) => (B(e) || P(e)) && P(e.then) && P(e.catch),
  wn = Object.prototype.toString,
  Lt = (e) => wn.call(e),
  xr = (e) => Lt(e).slice(8, -1),
  En = (e) => Lt(e) === "[object Object]",
  xs = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  rt = _s(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Nt = (e) => {
    const t = Object.create(null);
    return (s) => t[s] || (t[s] = e(s));
  },
  yr = /-(\w)/g,
  Ye = Nt((e) => e.replace(yr, (t, s) => (s ? s.toUpperCase() : ""))),
  vr = /\B([A-Z])/g,
  ke = Nt((e) => e.replace(vr, "-$1").toLowerCase()),
  Cn = Nt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Jt = Nt((e) => (e ? `on${Cn(e)}` : "")),
  Pe = (e, t) => !Object.is(e, t),
  Yt = (e, t) => {
    for (let s = 0; s < e.length; s++) e[s](t);
  },
  It = (e, t, s) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: s });
  },
  wr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Vs;
const On = () =>
  Vs ||
  (Vs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function ys(e) {
  if (I(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        r = q(n) ? Tr(n) : ys(n);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (q(e) || B(e)) return e;
}
const Er = /;(?![^(]*\))/g,
  Cr = /:([^]+)/,
  Or = /\/\*[^]*?\*\//g;
function Tr(e) {
  const t = {};
  return (
    e
      .replace(Or, "")
      .split(Er)
      .forEach((s) => {
        if (s) {
          const n = s.split(Cr);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function vs(e) {
  let t = "";
  if (q(e)) t = e;
  else if (I(e))
    for (let s = 0; s < e.length; s++) {
      const n = vs(e[s]);
      n && (t += n + " ");
    }
  else if (B(e)) for (const s in e) e[s] && (t += s + " ");
  return t.trim();
}
const Sr =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ir = _s(Sr);
function Tn(e) {
  return !!e || e === "";
}
const Pr = (e) =>
    q(e)
      ? e
      : e == null
        ? ""
        : I(e) || (B(e) && (e.toString === wn || !P(e.toString)))
          ? JSON.stringify(e, Sn, 2)
          : String(e),
  Sn = (e, t) =>
    t && t.__v_isRef
      ? Sn(e, t.value)
      : ze(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (s, [n, r], i) => ((s[Xt(n, i) + " =>"] = r), s),
              {}
            ),
          }
        : yn(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((s) => Xt(s)) }
          : Qe(t)
            ? Xt(t)
            : B(t) && !I(t) && !En(t)
              ? String(t)
              : t,
  Xt = (e, t = "") => {
    var s;
    return Qe(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
  };
/**
 * @vue/reactivity v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let le;
class Ar {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = le),
      !t && le && (this.index = (le.scopes || (le.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = le;
      try {
        return (le = this), t();
      } finally {
        le = s;
      }
    }
  }
  on() {
    le = this;
  }
  off() {
    le = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Rr(e, t = le) {
  t && t.active && t.effects.push(e);
}
function Mr() {
  return le;
}
let $e;
class ws {
  constructor(t, s, n, r) {
    (this.fn = t),
      (this.trigger = s),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Rr(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), Ue();
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t];
        if (s.computed && (Fr(s.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ke();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Se,
      s = $e;
    try {
      return (Se = !0), ($e = this), this._runnings++, Ds(this), this.fn();
    } finally {
      Ws(this), this._runnings--, ($e = s), (Se = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (Ds(this),
      Ws(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function Fr(e) {
  return e.value;
}
function Ds(e) {
  e._trackId++, (e._depsLength = 0);
}
function Ws(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) In(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function In(e, t) {
  const s = e.get(t);
  s !== void 0 &&
    t._trackId !== s &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Se = !0,
  rs = 0;
const Pn = [];
function Ue() {
  Pn.push(Se), (Se = !1);
}
function Ke() {
  const e = Pn.pop();
  Se = e === void 0 ? !0 : e;
}
function Es() {
  rs++;
}
function Cs() {
  for (rs--; !rs && is.length; ) is.shift()();
}
function An(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && In(n, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const is = [];
function Rn(e, t, s) {
  Es();
  for (const n of e.keys()) {
    let r;
    n._dirtyLevel < t &&
      (r ?? (r = e.get(n) === n._trackId)) &&
      (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0),
      (n._dirtyLevel = t)),
      n._shouldSchedule &&
        (r ?? (r = e.get(n) === n._trackId)) &&
        (n.trigger(),
        (!n._runnings || n.allowRecurse) &&
          n._dirtyLevel !== 2 &&
          ((n._shouldSchedule = !1), n.scheduler && is.push(n.scheduler)));
  }
  Cs();
}
const Mn = (e, t) => {
    const s = new Map();
    return (s.cleanup = e), (s.computed = t), s;
  },
  os = new WeakMap(),
  je = Symbol(""),
  ls = Symbol("");
function te(e, t, s) {
  if (Se && $e) {
    let n = os.get(e);
    n || os.set(e, (n = new Map()));
    let r = n.get(s);
    r || n.set(s, (r = Mn(() => n.delete(s)))), An($e, r);
  }
}
function ve(e, t, s, n, r, i) {
  const l = os.get(e);
  if (!l) return;
  let f = [];
  if (t === "clear") f = [...l.values()];
  else if (s === "length" && I(e)) {
    const u = Number(n);
    l.forEach((d, h) => {
      (h === "length" || (!Qe(h) && h >= u)) && f.push(d);
    });
  } else
    switch ((s !== void 0 && f.push(l.get(s)), t)) {
      case "add":
        I(e)
          ? xs(s) && f.push(l.get("length"))
          : (f.push(l.get(je)), ze(e) && f.push(l.get(ls)));
        break;
      case "delete":
        I(e) || (f.push(l.get(je)), ze(e) && f.push(l.get(ls)));
        break;
      case "set":
        ze(e) && f.push(l.get(je));
        break;
    }
  Es();
  for (const u of f) u && Rn(u, 4);
  Cs();
}
const Lr = _s("__proto__,__v_isRef,__isVue"),
  Fn = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Qe)
  ),
  Gs = Nr();
function Nr() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...s) {
        const n = F(this);
        for (let i = 0, l = this.length; i < l; i++) te(n, "get", i + "");
        const r = n[t](...s);
        return r === -1 || r === !1 ? n[t](...s.map(F)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...s) {
        Ue(), Es();
        const n = F(this)[t].apply(this, s);
        return Cs(), Ke(), n;
      };
    }),
    e
  );
}
function $r(e) {
  const t = F(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class Ln {
  constructor(t = !1, s = !1) {
    (this._isReadonly = t), (this._shallow = s);
  }
  get(t, s, n) {
    const r = this._isReadonly,
      i = this._shallow;
    if (s === "__v_isReactive") return !r;
    if (s === "__v_isReadonly") return r;
    if (s === "__v_isShallow") return i;
    if (s === "__v_raw")
      return n === (r ? (i ? Yr : Hn) : i ? jn : $n).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0;
    const l = I(t);
    if (!r) {
      if (l && R(Gs, s)) return Reflect.get(Gs, s, n);
      if (s === "hasOwnProperty") return $r;
    }
    const f = Reflect.get(t, s, n);
    return (Qe(s) ? Fn.has(s) : Lr(s)) || (r || te(t, "get", s), i)
      ? f
      : se(f)
        ? l && xs(s)
          ? f
          : f.value
        : B(f)
          ? r
            ? Un(f)
            : Ss(f)
          : f;
  }
}
class Nn extends Ln {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    if (!this._shallow) {
      const u = Xe(i);
      if (
        (!Pt(n) && !Xe(n) && ((i = F(i)), (n = F(n))), !I(t) && se(i) && !se(n))
      )
        return u ? !1 : ((i.value = n), !0);
    }
    const l = I(t) && xs(s) ? Number(s) < t.length : R(t, s),
      f = Reflect.set(t, s, n, r);
    return (
      t === F(r) && (l ? Pe(n, i) && ve(t, "set", s, n) : ve(t, "add", s, n)), f
    );
  }
  deleteProperty(t, s) {
    const n = R(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && ve(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Qe(s) || !Fn.has(s)) && te(t, "has", s), n;
  }
  ownKeys(t) {
    return te(t, "iterate", I(t) ? "length" : je), Reflect.ownKeys(t);
  }
}
class jr extends Ln {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Hr = new Nn(),
  Ur = new jr(),
  Kr = new Nn(!0),
  Os = (e) => e,
  $t = (e) => Reflect.getPrototypeOf(e);
function bt(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const r = F(e),
    i = F(t);
  s || (Pe(t, i) && te(r, "get", t), te(r, "get", i));
  const { has: l } = $t(r),
    f = n ? Os : s ? Ps : ct;
  if (l.call(r, t)) return f(e.get(t));
  if (l.call(r, i)) return f(e.get(i));
  e !== r && e.get(t);
}
function xt(e, t = !1) {
  const s = this.__v_raw,
    n = F(s),
    r = F(e);
  return (
    t || (Pe(e, r) && te(n, "has", e), te(n, "has", r)),
    e === r ? s.has(e) : s.has(e) || s.has(r)
  );
}
function yt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && te(F(e), "iterate", je), Reflect.get(e, "size", e)
  );
}
function zs(e) {
  e = F(e);
  const t = F(this);
  return $t(t).has.call(t, e) || (t.add(e), ve(t, "add", e, e)), this;
}
function qs(e, t) {
  t = F(t);
  const s = F(this),
    { has: n, get: r } = $t(s);
  let i = n.call(s, e);
  i || ((e = F(e)), (i = n.call(s, e)));
  const l = r.call(s, e);
  return (
    s.set(e, t), i ? Pe(t, l) && ve(s, "set", e, t) : ve(s, "add", e, t), this
  );
}
function Js(e) {
  const t = F(this),
    { has: s, get: n } = $t(t);
  let r = s.call(t, e);
  r || ((e = F(e)), (r = s.call(t, e))), n && n.call(t, e);
  const i = t.delete(e);
  return r && ve(t, "delete", e, void 0), i;
}
function Ys() {
  const e = F(this),
    t = e.size !== 0,
    s = e.clear();
  return t && ve(e, "clear", void 0, void 0), s;
}
function vt(e, t) {
  return function (n, r) {
    const i = this,
      l = i.__v_raw,
      f = F(l),
      u = t ? Os : e ? Ps : ct;
    return (
      !e && te(f, "iterate", je), l.forEach((d, h) => n.call(r, u(d), u(h), i))
    );
  };
}
function wt(e, t, s) {
  return function (...n) {
    const r = this.__v_raw,
      i = F(r),
      l = ze(i),
      f = e === "entries" || (e === Symbol.iterator && l),
      u = e === "keys" && l,
      d = r[e](...n),
      h = s ? Os : t ? Ps : ct;
    return (
      !t && te(i, "iterate", u ? ls : je),
      {
        next() {
          const { value: x, done: w } = d.next();
          return w
            ? { value: x, done: w }
            : { value: f ? [h(x[0]), h(x[1])] : h(x), done: w };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ee(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Br() {
  const e = {
      get(i) {
        return bt(this, i);
      },
      get size() {
        return yt(this);
      },
      has: xt,
      add: zs,
      set: qs,
      delete: Js,
      clear: Ys,
      forEach: vt(!1, !1),
    },
    t = {
      get(i) {
        return bt(this, i, !1, !0);
      },
      get size() {
        return yt(this);
      },
      has: xt,
      add: zs,
      set: qs,
      delete: Js,
      clear: Ys,
      forEach: vt(!1, !0),
    },
    s = {
      get(i) {
        return bt(this, i, !0);
      },
      get size() {
        return yt(this, !0);
      },
      has(i) {
        return xt.call(this, i, !0);
      },
      add: Ee("add"),
      set: Ee("set"),
      delete: Ee("delete"),
      clear: Ee("clear"),
      forEach: vt(!0, !1),
    },
    n = {
      get(i) {
        return bt(this, i, !0, !0);
      },
      get size() {
        return yt(this, !0);
      },
      has(i) {
        return xt.call(this, i, !0);
      },
      add: Ee("add"),
      set: Ee("set"),
      delete: Ee("delete"),
      clear: Ee("clear"),
      forEach: vt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = wt(i, !1, !1)),
        (s[i] = wt(i, !0, !1)),
        (t[i] = wt(i, !1, !0)),
        (n[i] = wt(i, !0, !0));
    }),
    [e, s, t, n]
  );
}
const [Vr, Dr, Wr, Gr] = Br();
function Ts(e, t) {
  const s = t ? (e ? Gr : Wr) : e ? Dr : Vr;
  return (n, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? n
          : Reflect.get(R(s, r) && r in n ? s : n, r, i);
}
const zr = { get: Ts(!1, !1) },
  qr = { get: Ts(!1, !0) },
  Jr = { get: Ts(!0, !1) },
  $n = new WeakMap(),
  jn = new WeakMap(),
  Hn = new WeakMap(),
  Yr = new WeakMap();
function Xr(e) {
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
function Zr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xr(xr(e));
}
function Ss(e) {
  return Xe(e) ? e : Is(e, !1, Hr, zr, $n);
}
function Qr(e) {
  return Is(e, !1, Kr, qr, jn);
}
function Un(e) {
  return Is(e, !0, Ur, Jr, Hn);
}
function Is(e, t, s, n, r) {
  if (!B(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const l = Zr(e);
  if (l === 0) return e;
  const f = new Proxy(e, l === 2 ? n : s);
  return r.set(e, f), f;
}
function qe(e) {
  return Xe(e) ? qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
function Pt(e) {
  return !!(e && e.__v_isShallow);
}
function Kn(e) {
  return qe(e) || Xe(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function Bn(e) {
  return Object.isExtensible(e) && It(e, "__v_skip", !0), e;
}
const ct = (e) => (B(e) ? Ss(e) : e),
  Ps = (e) => (B(e) ? Un(e) : e);
class Vn {
  constructor(t, s, n, r) {
    (this._setter = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ws(
        () => t(this._value),
        () => Ct(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = n);
  }
  get value() {
    const t = F(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Pe(t._value, (t._value = t.effect.run())) &&
        Ct(t, 4),
      Dn(t),
      t.effect._dirtyLevel >= 2 && Ct(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function kr(e, t, s = !1) {
  let n, r;
  const i = P(e);
  return (
    i ? ((n = e), (r = ie)) : ((n = e.get), (r = e.set)),
    new Vn(n, r, i || !r, s)
  );
}
function Dn(e) {
  var t;
  Se &&
    $e &&
    ((e = F(e)),
    An(
      $e,
      (t = e.dep) != null
        ? t
        : (e.dep = Mn(() => (e.dep = void 0), e instanceof Vn ? e : void 0))
    ));
}
function Ct(e, t = 4, s) {
  e = F(e);
  const n = e.dep;
  n && Rn(n, t);
}
function se(e) {
  return !!(e && e.__v_isRef === !0);
}
function De(e) {
  return ei(e, !1);
}
function ei(e, t) {
  return se(e) ? e : new ti(e, t);
}
class ti {
  constructor(t, s) {
    (this.__v_isShallow = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = s ? t : F(t)),
      (this._value = s ? t : ct(t));
  }
  get value() {
    return Dn(this), this._value;
  }
  set value(t) {
    const s = this.__v_isShallow || Pt(t) || Xe(t);
    (t = s ? t : F(t)),
      Pe(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = s ? t : ct(t)), Ct(this, 4));
  }
}
function si(e) {
  return se(e) ? e.value : e;
}
const ni = {
  get: (e, t, s) => si(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return se(r) && !se(s) ? ((r.value = s), !0) : Reflect.set(e, t, s, n);
  },
};
function Wn(e) {
  return qe(e) ? e : new Proxy(e, ni);
}
/**
 * @vue/runtime-core v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ie(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    jt(r, t, s);
  }
}
function fe(e, t, s, n) {
  if (P(e)) {
    const i = Ie(e, t, s, n);
    return (
      i &&
        vn(i) &&
        i.catch((l) => {
          jt(l, t, s);
        }),
      i
    );
  }
  const r = [];
  for (let i = 0; i < e.length; i++) r.push(fe(e[i], t, s, n));
  return r;
}
function jt(e, t, s, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const l = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let h = 0; h < d.length; h++) if (d[h](e, l, f) === !1) return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ie(u, null, 10, [e, l, f]);
      return;
    }
  }
  ri(e, s, r, n);
}
function ri(e, t, s, n = !0) {
  console.error(e);
}
let ft = !1,
  cs = !1;
const Y = [];
let _e = 0;
const Je = [];
let Ce = null,
  Ne = 0;
const Gn = Promise.resolve();
let As = null;
function ii(e) {
  const t = As || Gn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function oi(e) {
  let t = _e + 1,
    s = Y.length;
  for (; t < s; ) {
    const n = (t + s) >>> 1,
      r = Y[n],
      i = ut(r);
    i < e || (i === e && r.pre) ? (t = n + 1) : (s = n);
  }
  return t;
}
function Rs(e) {
  (!Y.length || !Y.includes(e, ft && e.allowRecurse ? _e + 1 : _e)) &&
    (e.id == null ? Y.push(e) : Y.splice(oi(e.id), 0, e), zn());
}
function zn() {
  !ft && !cs && ((cs = !0), (As = Gn.then(Jn)));
}
function li(e) {
  const t = Y.indexOf(e);
  t > _e && Y.splice(t, 1);
}
function ci(e) {
  I(e)
    ? Je.push(...e)
    : (!Ce || !Ce.includes(e, e.allowRecurse ? Ne + 1 : Ne)) && Je.push(e),
    zn();
}
function Xs(e, t, s = ft ? _e + 1 : 0) {
  for (; s < Y.length; s++) {
    const n = Y[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid) continue;
      Y.splice(s, 1), s--, n();
    }
  }
}
function qn(e) {
  if (Je.length) {
    const t = [...new Set(Je)].sort((s, n) => ut(s) - ut(n));
    if (((Je.length = 0), Ce)) {
      Ce.push(...t);
      return;
    }
    for (Ce = t, Ne = 0; Ne < Ce.length; Ne++) Ce[Ne]();
    (Ce = null), (Ne = 0);
  }
}
const ut = (e) => (e.id == null ? 1 / 0 : e.id),
  fi = (e, t) => {
    const s = ut(e) - ut(t);
    if (s === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return s;
  };
function Jn(e) {
  (cs = !1), (ft = !0), Y.sort(fi);
  try {
    for (_e = 0; _e < Y.length; _e++) {
      const t = Y[_e];
      t && t.active !== !1 && Ie(t, null, 14);
    }
  } finally {
    (_e = 0),
      (Y.length = 0),
      qn(),
      (ft = !1),
      (As = null),
      (Y.length || Je.length) && Jn();
  }
}
function ui(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || U;
  let r = s;
  const i = t.startsWith("update:"),
    l = i && t.slice(7);
  if (l && l in n) {
    const h = `${l === "modelValue" ? "model" : l}Modifiers`,
      { number: x, trim: w } = n[h] || U;
    w && (r = s.map((S) => (q(S) ? S.trim() : S))), x && (r = s.map(wr));
  }
  let f,
    u = n[(f = Jt(t))] || n[(f = Jt(Ye(t)))];
  !u && i && (u = n[(f = Jt(ke(t)))]), u && fe(u, e, 6, r);
  const d = n[f + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[f]) return;
    (e.emitted[f] = !0), fe(d, e, 6, r);
  }
}
function Yn(e, t, s = !1) {
  const n = t.emitsCache,
    r = n.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let l = {},
    f = !1;
  if (!P(e)) {
    const u = (d) => {
      const h = Yn(d, t, !0);
      h && ((f = !0), X(l, h));
    };
    !s && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !i && !f
    ? (B(e) && n.set(e, null), null)
    : (I(i) ? i.forEach((u) => (l[u] = null)) : X(l, i),
      B(e) && n.set(e, l),
      l);
}
function Ht(e, t) {
  return !e || !Ft(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      R(e, t[0].toLowerCase() + t.slice(1)) || R(e, ke(t)) || R(e, t));
}
let me = null,
  Xn = null;
function At(e) {
  const t = me;
  return (me = e), (Xn = (e && e.type.__scopeId) || null), t;
}
function ai(e, t = me, s) {
  if (!t || e._n) return e;
  const n = (...r) => {
    n._d && ln(-1);
    const i = At(t);
    let l;
    try {
      l = e(...r);
    } finally {
      At(i), n._d && ln(1);
    }
    return l;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function Zt(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    props: i,
    propsOptions: [l],
    slots: f,
    attrs: u,
    emit: d,
    render: h,
    renderCache: x,
    data: w,
    setupState: S,
    ctx: V,
    inheritAttrs: L,
  } = e;
  let W, D;
  const ue = At(e);
  try {
    if (s.shapeFlag & 4) {
      const G = r || n,
        re = G;
      (W = ge(h.call(re, G, x, i, S, w, V))), (D = u);
    } else {
      const G = t;
      (W = ge(
        G.length > 1 ? G(i, { attrs: u, slots: f, emit: d }) : G(i, null)
      )),
        (D = t.props ? u : di(u));
    }
  } catch (G) {
    (lt.length = 0), jt(G, e, 1), (W = He(at));
  }
  let $ = W;
  if (D && L !== !1) {
    const G = Object.keys(D),
      { shapeFlag: re } = $;
    G.length && re & 7 && (l && G.some(ms) && (D = hi(D, l)), ($ = Ze($, D)));
  }
  return (
    s.dirs && (($ = Ze($)), ($.dirs = $.dirs ? $.dirs.concat(s.dirs) : s.dirs)),
    s.transition && ($.transition = s.transition),
    (W = $),
    At(ue),
    W
  );
}
const di = (e) => {
    let t;
    for (const s in e)
      (s === "class" || s === "style" || Ft(s)) && ((t || (t = {}))[s] = e[s]);
    return t;
  },
  hi = (e, t) => {
    const s = {};
    for (const n in e) (!ms(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s;
  };
function pi(e, t, s) {
  const { props: n, children: r, component: i } = e,
    { props: l, children: f, patchFlag: u } = t,
    d = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (s && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return n ? Zs(n, l, d) : !!l;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let x = 0; x < h.length; x++) {
        const w = h[x];
        if (l[w] !== n[w] && !Ht(d, w)) return !0;
      }
    }
  } else
    return (r || f) && (!f || !f.$stable)
      ? !0
      : n === l
        ? !1
        : n
          ? l
            ? Zs(n, l, d)
            : !0
          : !!l;
  return !1;
}
function Zs(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !Ht(s, i)) return !0;
  }
  return !1;
}
function gi({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      ((e = t.vnode).el = s), (t = t.parent);
    else break;
  }
}
const _i = Symbol.for("v-ndc"),
  mi = (e) => e.__isSuspense;
function bi(e, t) {
  t && t.pendingBranch
    ? I(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ci(e);
}
const xi = Symbol.for("v-scx"),
  yi = () => Tt(xi),
  Et = {};
function Qt(e, t, s) {
  return Zn(e, t, s);
}
function Zn(
  e,
  t,
  { immediate: s, deep: n, flush: r, once: i, onTrack: l, onTrigger: f } = U
) {
  if (t && i) {
    const M = t;
    t = (...be) => {
      M(...be), re();
    };
  }
  const u = k,
    d = (M) => (n === !0 ? M : We(M, n === !1 ? 1 : void 0));
  let h,
    x = !1,
    w = !1;
  if (
    (se(e)
      ? ((h = () => e.value), (x = Pt(e)))
      : qe(e)
        ? ((h = () => d(e)), (x = !0))
        : I(e)
          ? ((w = !0),
            (x = e.some((M) => qe(M) || Pt(M))),
            (h = () =>
              e.map((M) => {
                if (se(M)) return M.value;
                if (qe(M)) return d(M);
                if (P(M)) return Ie(M, u, 2);
              })))
          : P(e)
            ? t
              ? (h = () => Ie(e, u, 2))
              : (h = () => (S && S(), fe(e, u, 3, [V])))
            : (h = ie),
    t && n)
  ) {
    const M = h;
    h = () => We(M());
  }
  let S,
    V = (M) => {
      S = $.onStop = () => {
        Ie(M, u, 4), (S = $.onStop = void 0);
      };
    },
    L;
  if (Vt)
    if (
      ((V = ie),
      t ? s && fe(t, u, 3, [h(), w ? [] : void 0, V]) : h(),
      r === "sync")
    ) {
      const M = yi();
      L = M.__watcherHandles || (M.__watcherHandles = []);
    } else return ie;
  let W = w ? new Array(e.length).fill(Et) : Et;
  const D = () => {
    if (!(!$.active || !$.dirty))
      if (t) {
        const M = $.run();
        (n || x || (w ? M.some((be, ae) => Pe(be, W[ae])) : Pe(M, W))) &&
          (S && S(),
          fe(t, u, 3, [M, W === Et ? void 0 : w && W[0] === Et ? [] : W, V]),
          (W = M));
      } else $.run();
  };
  D.allowRecurse = !!t;
  let ue;
  r === "sync"
    ? (ue = D)
    : r === "post"
      ? (ue = () => ee(D, u && u.suspense))
      : ((D.pre = !0), u && (D.id = u.uid), (ue = () => Rs(D)));
  const $ = new ws(h, ie, ue),
    G = Mr(),
    re = () => {
      $.stop(), G && bs(G.effects, $);
    };
  return (
    t
      ? s
        ? D()
        : (W = $.run())
      : r === "post"
        ? ee($.run.bind($), u && u.suspense)
        : $.run(),
    L && L.push(re),
    re
  );
}
function vi(e, t, s) {
  const n = this.proxy,
    r = q(e) ? (e.includes(".") ? Qn(n, e) : () => n[e]) : e.bind(n, n);
  let i;
  P(t) ? (i = t) : ((i = t.handler), (s = t));
  const l = ht(this),
    f = Zn(r, i.bind(n), s);
  return l(), f;
}
function Qn(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++) n = n[s[r]];
    return n;
  };
}
function We(e, t, s = 0, n) {
  if (!B(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (s >= t) return e;
    s++;
  }
  if (((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), se(e))) We(e.value, t, s, n);
  else if (I(e)) for (let r = 0; r < e.length; r++) We(e[r], t, s, n);
  else if (yn(e) || ze(e))
    e.forEach((r) => {
      We(r, t, s, n);
    });
  else if (En(e)) for (const r in e) We(e[r], t, s, n);
  return e;
}
function Fe(e, t, s, n) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const f = r[l];
    i && (f.oldValue = i[l].value);
    let u = f.dir[n];
    u && (Ue(), fe(u, s, 8, [e.el, f, e, t]), Ke());
  }
}
const Ot = (e) => !!e.type.__asyncLoader,
  kn = (e) => e.type.__isKeepAlive;
function wi(e, t) {
  er(e, "a", t);
}
function Ei(e, t) {
  er(e, "da", t);
}
function er(e, t, s = k) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let r = s;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Ut(t, n, s), s)) {
    let r = s.parent;
    for (; r && r.parent; )
      kn(r.parent.vnode) && Ci(n, t, s, r), (r = r.parent);
  }
}
function Ci(e, t, s, n) {
  const r = Ut(t, e, n, !0);
  sr(() => {
    bs(n[t], r);
  }, s);
}
function Ut(e, t, s = k, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...l) => {
          if (s.isUnmounted) return;
          Ue();
          const f = ht(s),
            u = fe(t, s, e, l);
          return f(), Ke(), u;
        });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const we =
    (e) =>
    (t, s = k) =>
      (!Vt || e === "sp") && Ut(e, (...n) => t(...n), s),
  Oi = we("bm"),
  tr = we("m"),
  Ti = we("bu"),
  Si = we("u"),
  Ii = we("bum"),
  sr = we("um"),
  Pi = we("sp"),
  Ai = we("rtg"),
  Ri = we("rtc");
function Mi(e, t = k) {
  Ut("ec", e, t);
}
const fs = (e) => (e ? (hr(e) ? Ns(e) || e.proxy : fs(e.parent)) : null),
  it = X(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fs(e.parent),
    $root: (e) => fs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ms(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Rs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ii.bind(e.proxy)),
    $watch: (e) => vi.bind(e),
  }),
  kt = (e, t) => e !== U && !e.__isScriptSetup && R(e, t),
  Fi = {
    get({ _: e }, t) {
      const {
        ctx: s,
        setupState: n,
        data: r,
        props: i,
        accessCache: l,
        type: f,
        appContext: u,
      } = e;
      let d;
      if (t[0] !== "$") {
        const S = l[t];
        if (S !== void 0)
          switch (S) {
            case 1:
              return n[t];
            case 2:
              return r[t];
            case 4:
              return s[t];
            case 3:
              return i[t];
          }
        else {
          if (kt(n, t)) return (l[t] = 1), n[t];
          if (r !== U && R(r, t)) return (l[t] = 2), r[t];
          if ((d = e.propsOptions[0]) && R(d, t)) return (l[t] = 3), i[t];
          if (s !== U && R(s, t)) return (l[t] = 4), s[t];
          us && (l[t] = 0);
        }
      }
      const h = it[t];
      let x, w;
      if (h) return t === "$attrs" && te(e, "get", t), h(e);
      if ((x = f.__cssModules) && (x = x[t])) return x;
      if (s !== U && R(s, t)) return (l[t] = 4), s[t];
      if (((w = u.config.globalProperties), R(w, t))) return w[t];
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: r, ctx: i } = e;
      return kt(r, t)
        ? ((r[t] = s), !0)
        : n !== U && R(n, t)
          ? ((n[t] = s), !0)
          : R(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((i[t] = s), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: s,
          ctx: n,
          appContext: r,
          propsOptions: i,
        },
      },
      l
    ) {
      let f;
      return (
        !!s[l] ||
        (e !== U && R(e, l)) ||
        kt(t, l) ||
        ((f = i[0]) && R(f, l)) ||
        R(n, l) ||
        R(it, l) ||
        R(r.config.globalProperties, l)
      );
    },
    defineProperty(e, t, s) {
      return (
        s.get != null
          ? (e._.accessCache[t] = 0)
          : R(s, "value") && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
      );
    },
  };
function Qs(e) {
  return I(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
}
let us = !0;
function Li(e) {
  const t = Ms(e),
    s = e.proxy,
    n = e.ctx;
  (us = !1), t.beforeCreate && ks(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: l,
    watch: f,
    provide: u,
    inject: d,
    created: h,
    beforeMount: x,
    mounted: w,
    beforeUpdate: S,
    updated: V,
    activated: L,
    deactivated: W,
    beforeDestroy: D,
    beforeUnmount: ue,
    destroyed: $,
    unmounted: G,
    render: re,
    renderTracked: M,
    renderTriggered: be,
    errorCaptured: ae,
    serverPrefetch: Dt,
    expose: Ae,
    inheritAttrs: et,
    components: pt,
    directives: gt,
    filters: Wt,
  } = t;
  if ((d && Ni(d, n, null), l))
    for (const K in l) {
      const j = l[K];
      P(j) && (n[K] = j.bind(s));
    }
  if (r) {
    const K = r.call(s, s);
    B(K) && (e.data = Ss(K));
  }
  if (((us = !0), i))
    for (const K in i) {
      const j = i[K],
        Re = P(j) ? j.bind(s, s) : P(j.get) ? j.get.bind(s, s) : ie,
        _t = !P(j) && P(j.set) ? j.set.bind(s) : ie,
        Me = _o({ get: Re, set: _t });
      Object.defineProperty(n, K, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (de) => (Me.value = de),
      });
    }
  if (f) for (const K in f) nr(f[K], n, s, K);
  if (u) {
    const K = P(u) ? u.call(s) : u;
    Reflect.ownKeys(K).forEach((j) => {
      Bi(j, K[j]);
    });
  }
  h && ks(h, e, "c");
  function Z(K, j) {
    I(j) ? j.forEach((Re) => K(Re.bind(s))) : j && K(j.bind(s));
  }
  if (
    (Z(Oi, x),
    Z(tr, w),
    Z(Ti, S),
    Z(Si, V),
    Z(wi, L),
    Z(Ei, W),
    Z(Mi, ae),
    Z(Ri, M),
    Z(Ai, be),
    Z(Ii, ue),
    Z(sr, G),
    Z(Pi, Dt),
    I(Ae))
  )
    if (Ae.length) {
      const K = e.exposed || (e.exposed = {});
      Ae.forEach((j) => {
        Object.defineProperty(K, j, {
          get: () => s[j],
          set: (Re) => (s[j] = Re),
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === ie && (e.render = re),
    et != null && (e.inheritAttrs = et),
    pt && (e.components = pt),
    gt && (e.directives = gt);
}
function Ni(e, t, s = ie) {
  I(e) && (e = as(e));
  for (const n in e) {
    const r = e[n];
    let i;
    B(r)
      ? "default" in r
        ? (i = Tt(r.from || n, r.default, !0))
        : (i = Tt(r.from || n))
      : (i = Tt(r)),
      se(i)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[n] = i);
  }
}
function ks(e, t, s) {
  fe(I(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
}
function nr(e, t, s, n) {
  const r = n.includes(".") ? Qn(s, n) : () => s[n];
  if (q(e)) {
    const i = t[e];
    P(i) && Qt(r, i);
  } else if (P(e)) Qt(r, e.bind(s));
  else if (B(e))
    if (I(e)) e.forEach((i) => nr(i, t, s, n));
    else {
      const i = P(e.handler) ? e.handler.bind(s) : t[e.handler];
      P(i) && Qt(r, i, e);
    }
}
function Ms(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    f = i.get(t);
  let u;
  return (
    f
      ? (u = f)
      : !r.length && !s && !n
        ? (u = t)
        : ((u = {}),
          r.length && r.forEach((d) => Rt(u, d, l, !0)),
          Rt(u, t, l)),
    B(t) && i.set(t, u),
    u
  );
}
function Rt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && Rt(e, i, s, !0), r && r.forEach((l) => Rt(e, l, s, !0));
  for (const l in t)
    if (!(n && l === "expose")) {
      const f = $i[l] || (s && s[l]);
      e[l] = f ? f(e[l], t[l]) : t[l];
    }
  return e;
}
const $i = {
  data: en,
  props: tn,
  emits: tn,
  methods: nt,
  computed: nt,
  beforeCreate: Q,
  created: Q,
  beforeMount: Q,
  mounted: Q,
  beforeUpdate: Q,
  updated: Q,
  beforeDestroy: Q,
  beforeUnmount: Q,
  destroyed: Q,
  unmounted: Q,
  activated: Q,
  deactivated: Q,
  errorCaptured: Q,
  serverPrefetch: Q,
  components: nt,
  directives: nt,
  watch: Hi,
  provide: en,
  inject: ji,
};
function en(e, t) {
  return t
    ? e
      ? function () {
          return X(
            P(e) ? e.call(this, this) : e,
            P(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function ji(e, t) {
  return nt(as(e), as(t));
}
function as(e) {
  if (I(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Q(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nt(e, t) {
  return e ? X(Object.create(null), e, t) : t;
}
function tn(e, t) {
  return e
    ? I(e) && I(t)
      ? [...new Set([...e, ...t])]
      : X(Object.create(null), Qs(e), Qs(t ?? {}))
    : t;
}
function Hi(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = X(Object.create(null), e);
  for (const n in t) s[n] = Q(e[n], t[n]);
  return s;
}
function rr() {
  return {
    app: null,
    config: {
      isNativeTag: mr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Ui = 0;
function Ki(e, t) {
  return function (n, r = null) {
    P(n) || (n = X({}, n)), r != null && !B(r) && (r = null);
    const i = rr(),
      l = new WeakSet();
    let f = !1;
    const u = (i.app = {
      _uid: Ui++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: mo,
      get config() {
        return i.config;
      },
      set config(d) {},
      use(d, ...h) {
        return (
          l.has(d) ||
            (d && P(d.install)
              ? (l.add(d), d.install(u, ...h))
              : P(d) && (l.add(d), d(u, ...h))),
          u
        );
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), u;
      },
      component(d, h) {
        return h ? ((i.components[d] = h), u) : i.components[d];
      },
      directive(d, h) {
        return h ? ((i.directives[d] = h), u) : i.directives[d];
      },
      mount(d, h, x) {
        if (!f) {
          const w = He(n, r);
          return (
            (w.appContext = i),
            x === !0 ? (x = "svg") : x === !1 && (x = void 0),
            h && t ? t(w, d) : e(w, d, x),
            (f = !0),
            (u._container = d),
            (d.__vue_app__ = u),
            Ns(w.component) || w.component.proxy
          );
        }
      },
      unmount() {
        f && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(d, h) {
        return (i.provides[d] = h), u;
      },
      runWithContext(d) {
        const h = ot;
        ot = u;
        try {
          return d();
        } finally {
          ot = h;
        }
      },
    });
    return u;
  };
}
let ot = null;
function Bi(e, t) {
  if (k) {
    let s = k.provides;
    const n = k.parent && k.parent.provides;
    n === s && (s = k.provides = Object.create(n)), (s[e] = t);
  }
}
function Tt(e, t, s = !1) {
  const n = k || me;
  if (n || ot) {
    const r = n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : ot._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return s && P(t) ? t.call(n && n.proxy) : t;
  }
}
function Vi(e, t, s, n = !1) {
  const r = {},
    i = {};
  It(i, Bt, 1), (e.propsDefaults = Object.create(null)), ir(e, t, r, i);
  for (const l in e.propsOptions[0]) l in r || (r[l] = void 0);
  s ? (e.props = n ? r : Qr(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function Di(e, t, s, n) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: l },
    } = e,
    f = F(r),
    [u] = e.propsOptions;
  let d = !1;
  if ((n || l > 0) && !(l & 16)) {
    if (l & 8) {
      const h = e.vnode.dynamicProps;
      for (let x = 0; x < h.length; x++) {
        let w = h[x];
        if (Ht(e.emitsOptions, w)) continue;
        const S = t[w];
        if (u)
          if (R(i, w)) S !== i[w] && ((i[w] = S), (d = !0));
          else {
            const V = Ye(w);
            r[V] = ds(u, f, V, S, e, !1);
          }
        else S !== i[w] && ((i[w] = S), (d = !0));
      }
    }
  } else {
    ir(e, t, r, i) && (d = !0);
    let h;
    for (const x in f)
      (!t || (!R(t, x) && ((h = ke(x)) === x || !R(t, h)))) &&
        (u
          ? s &&
            (s[x] !== void 0 || s[h] !== void 0) &&
            (r[x] = ds(u, f, x, void 0, e, !0))
          : delete r[x]);
    if (i !== f) for (const x in i) (!t || !R(t, x)) && (delete i[x], (d = !0));
  }
  d && ve(e, "set", "$attrs");
}
function ir(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let l = !1,
    f;
  if (t)
    for (let u in t) {
      if (rt(u)) continue;
      const d = t[u];
      let h;
      r && R(r, (h = Ye(u)))
        ? !i || !i.includes(h)
          ? (s[h] = d)
          : ((f || (f = {}))[h] = d)
        : Ht(e.emitsOptions, u) ||
          ((!(u in n) || d !== n[u]) && ((n[u] = d), (l = !0)));
    }
  if (i) {
    const u = F(s),
      d = f || U;
    for (let h = 0; h < i.length; h++) {
      const x = i[h];
      s[x] = ds(r, u, x, d[x], e, !R(d, x));
    }
  }
  return l;
}
function ds(e, t, s, n, r, i) {
  const l = e[s];
  if (l != null) {
    const f = R(l, "default");
    if (f && n === void 0) {
      const u = l.default;
      if (l.type !== Function && !l.skipFactory && P(u)) {
        const { propsDefaults: d } = r;
        if (s in d) n = d[s];
        else {
          const h = ht(r);
          (n = d[s] = u.call(null, t)), h();
        }
      } else n = u;
    }
    l[0] &&
      (i && !f ? (n = !1) : l[1] && (n === "" || n === ke(s)) && (n = !0));
  }
  return n;
}
function or(e, t, s = !1) {
  const n = t.propsCache,
    r = n.get(e);
  if (r) return r;
  const i = e.props,
    l = {},
    f = [];
  let u = !1;
  if (!P(e)) {
    const h = (x) => {
      u = !0;
      const [w, S] = or(x, t, !0);
      X(l, w), S && f.push(...S);
    };
    !s && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!i && !u) return B(e) && n.set(e, Ge), Ge;
  if (I(i))
    for (let h = 0; h < i.length; h++) {
      const x = Ye(i[h]);
      sn(x) && (l[x] = U);
    }
  else if (i)
    for (const h in i) {
      const x = Ye(h);
      if (sn(x)) {
        const w = i[h],
          S = (l[x] = I(w) || P(w) ? { type: w } : X({}, w));
        if (S) {
          const V = on(Boolean, S.type),
            L = on(String, S.type);
          (S[0] = V > -1),
            (S[1] = L < 0 || V < L),
            (V > -1 || R(S, "default")) && f.push(x);
        }
      }
    }
  const d = [l, f];
  return B(e) && n.set(e, d), d;
}
function sn(e) {
  return e[0] !== "$" && !rt(e);
}
function nn(e) {
  return e === null
    ? "null"
    : typeof e == "function"
      ? e.name || ""
      : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function rn(e, t) {
  return nn(e) === nn(t);
}
function on(e, t) {
  return I(t) ? t.findIndex((s) => rn(s, e)) : P(t) && rn(t, e) ? 0 : -1;
}
const lr = (e) => e[0] === "_" || e === "$stable",
  Fs = (e) => (I(e) ? e.map(ge) : [ge(e)]),
  Wi = (e, t, s) => {
    if (t._n) return t;
    const n = ai((...r) => Fs(t(...r)), s);
    return (n._c = !1), n;
  },
  cr = (e, t, s) => {
    const n = e._ctx;
    for (const r in e) {
      if (lr(r)) continue;
      const i = e[r];
      if (P(i)) t[r] = Wi(r, i, n);
      else if (i != null) {
        const l = Fs(i);
        t[r] = () => l;
      }
    }
  },
  fr = (e, t) => {
    const s = Fs(t);
    e.slots.default = () => s;
  },
  Gi = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? ((e.slots = F(t)), It(t, "_", s)) : cr(t, (e.slots = {}));
    } else (e.slots = {}), t && fr(e, t);
    It(e.slots, Bt, 1);
  },
  zi = (e, t, s) => {
    const { vnode: n, slots: r } = e;
    let i = !0,
      l = U;
    if (n.shapeFlag & 32) {
      const f = t._;
      f
        ? s && f === 1
          ? (i = !1)
          : (X(r, t), !s && f === 1 && delete r._)
        : ((i = !t.$stable), cr(t, r)),
        (l = t);
    } else t && (fr(e, t), (l = { default: 1 }));
    if (i) for (const f in r) !lr(f) && l[f] == null && delete r[f];
  };
function hs(e, t, s, n, r = !1) {
  if (I(e)) {
    e.forEach((w, S) => hs(w, t && (I(t) ? t[S] : t), s, n, r));
    return;
  }
  if (Ot(n) && !r) return;
  const i = n.shapeFlag & 4 ? Ns(n.component) || n.component.proxy : n.el,
    l = r ? null : i,
    { i: f, r: u } = e,
    d = t && t.r,
    h = f.refs === U ? (f.refs = {}) : f.refs,
    x = f.setupState;
  if (
    (d != null &&
      d !== u &&
      (q(d)
        ? ((h[d] = null), R(x, d) && (x[d] = null))
        : se(d) && (d.value = null)),
    P(u))
  )
    Ie(u, f, 12, [l, h]);
  else {
    const w = q(u),
      S = se(u);
    if (w || S) {
      const V = () => {
        if (e.f) {
          const L = w ? (R(x, u) ? x[u] : h[u]) : u.value;
          r
            ? I(L) && bs(L, i)
            : I(L)
              ? L.includes(i) || L.push(i)
              : w
                ? ((h[u] = [i]), R(x, u) && (x[u] = h[u]))
                : ((u.value = [i]), e.k && (h[e.k] = u.value));
        } else
          w
            ? ((h[u] = l), R(x, u) && (x[u] = l))
            : S && ((u.value = l), e.k && (h[e.k] = l));
      };
      l ? ((V.id = -1), ee(V, s)) : V();
    }
  }
}
const ee = bi;
function qi(e) {
  return Ji(e);
}
function Ji(e, t) {
  const s = On();
  s.__VUE__ = !0;
  const {
      insert: n,
      remove: r,
      patchProp: i,
      createElement: l,
      createText: f,
      createComment: u,
      setText: d,
      setElementText: h,
      parentNode: x,
      nextSibling: w,
      setScopeId: S = ie,
      insertStaticContent: V,
    } = e,
    L = (
      o,
      c,
      a,
      p = null,
      g = null,
      b = null,
      v = void 0,
      m = null,
      y = !!c.dynamicChildren
    ) => {
      if (o === c) return;
      o && !st(o, c) && ((p = mt(o)), de(o, g, b, !0), (o = null)),
        c.patchFlag === -2 && ((y = !1), (c.dynamicChildren = null));
      const { type: _, ref: E, shapeFlag: O } = c;
      switch (_) {
        case Kt:
          W(o, c, a, p);
          break;
        case at:
          D(o, c, a, p);
          break;
        case ts:
          o == null && ue(c, a, p, v);
          break;
        case ye:
          pt(o, c, a, p, g, b, v, m, y);
          break;
        default:
          O & 1
            ? re(o, c, a, p, g, b, v, m, y)
            : O & 6
              ? gt(o, c, a, p, g, b, v, m, y)
              : (O & 64 || O & 128) && _.process(o, c, a, p, g, b, v, m, y, Be);
      }
      E != null && g && hs(E, o && o.ref, b, c || o, !c);
    },
    W = (o, c, a, p) => {
      if (o == null) n((c.el = f(c.children)), a, p);
      else {
        const g = (c.el = o.el);
        c.children !== o.children && d(g, c.children);
      }
    },
    D = (o, c, a, p) => {
      o == null ? n((c.el = u(c.children || "")), a, p) : (c.el = o.el);
    },
    ue = (o, c, a, p) => {
      [o.el, o.anchor] = V(o.children, c, a, p, o.el, o.anchor);
    },
    $ = ({ el: o, anchor: c }, a, p) => {
      let g;
      for (; o && o !== c; ) (g = w(o)), n(o, a, p), (o = g);
      n(c, a, p);
    },
    G = ({ el: o, anchor: c }) => {
      let a;
      for (; o && o !== c; ) (a = w(o)), r(o), (o = a);
      r(c);
    },
    re = (o, c, a, p, g, b, v, m, y) => {
      c.type === "svg" ? (v = "svg") : c.type === "math" && (v = "mathml"),
        o == null ? M(c, a, p, g, b, v, m, y) : Dt(o, c, g, b, v, m, y);
    },
    M = (o, c, a, p, g, b, v, m) => {
      let y, _;
      const { props: E, shapeFlag: O, transition: C, dirs: T } = o;
      if (
        ((y = o.el = l(o.type, b, E && E.is, E)),
        O & 8
          ? h(y, o.children)
          : O & 16 && ae(o.children, y, null, p, g, es(o, b), v, m),
        T && Fe(o, null, p, "created"),
        be(y, o, o.scopeId, v, p),
        E)
      ) {
        for (const N in E)
          N !== "value" &&
            !rt(N) &&
            i(y, N, null, E[N], b, o.children, p, g, xe);
        "value" in E && i(y, "value", null, E.value, b),
          (_ = E.onVnodeBeforeMount) && pe(_, p, o);
      }
      T && Fe(o, null, p, "beforeMount");
      const A = Yi(g, C);
      A && C.beforeEnter(y),
        n(y, c, a),
        ((_ = E && E.onVnodeMounted) || A || T) &&
          ee(() => {
            _ && pe(_, p, o), A && C.enter(y), T && Fe(o, null, p, "mounted");
          }, g);
    },
    be = (o, c, a, p, g) => {
      if ((a && S(o, a), p)) for (let b = 0; b < p.length; b++) S(o, p[b]);
      if (g) {
        let b = g.subTree;
        if (c === b) {
          const v = g.vnode;
          be(o, v, v.scopeId, v.slotScopeIds, g.parent);
        }
      }
    },
    ae = (o, c, a, p, g, b, v, m, y = 0) => {
      for (let _ = y; _ < o.length; _++) {
        const E = (o[_] = m ? Oe(o[_]) : ge(o[_]));
        L(null, E, c, a, p, g, b, v, m);
      }
    },
    Dt = (o, c, a, p, g, b, v) => {
      const m = (c.el = o.el);
      let { patchFlag: y, dynamicChildren: _, dirs: E } = c;
      y |= o.patchFlag & 16;
      const O = o.props || U,
        C = c.props || U;
      let T;
      if (
        (a && Le(a, !1),
        (T = C.onVnodeBeforeUpdate) && pe(T, a, c, o),
        E && Fe(c, o, a, "beforeUpdate"),
        a && Le(a, !0),
        _
          ? Ae(o.dynamicChildren, _, m, a, p, es(c, g), b)
          : v || j(o, c, m, null, a, p, es(c, g), b, !1),
        y > 0)
      ) {
        if (y & 16) et(m, c, O, C, a, p, g);
        else if (
          (y & 2 && O.class !== C.class && i(m, "class", null, C.class, g),
          y & 4 && i(m, "style", O.style, C.style, g),
          y & 8)
        ) {
          const A = c.dynamicProps;
          for (let N = 0; N < A.length; N++) {
            const H = A[N],
              z = O[H],
              oe = C[H];
            (oe !== z || H === "value") &&
              i(m, H, z, oe, g, o.children, a, p, xe);
          }
        }
        y & 1 && o.children !== c.children && h(m, c.children);
      } else !v && _ == null && et(m, c, O, C, a, p, g);
      ((T = C.onVnodeUpdated) || E) &&
        ee(() => {
          T && pe(T, a, c, o), E && Fe(c, o, a, "updated");
        }, p);
    },
    Ae = (o, c, a, p, g, b, v) => {
      for (let m = 0; m < c.length; m++) {
        const y = o[m],
          _ = c[m],
          E =
            y.el && (y.type === ye || !st(y, _) || y.shapeFlag & 70)
              ? x(y.el)
              : a;
        L(y, _, E, null, p, g, b, v, !0);
      }
    },
    et = (o, c, a, p, g, b, v) => {
      if (a !== p) {
        if (a !== U)
          for (const m in a)
            !rt(m) && !(m in p) && i(o, m, a[m], null, v, c.children, g, b, xe);
        for (const m in p) {
          if (rt(m)) continue;
          const y = p[m],
            _ = a[m];
          y !== _ && m !== "value" && i(o, m, _, y, v, c.children, g, b, xe);
        }
        "value" in p && i(o, "value", a.value, p.value, v);
      }
    },
    pt = (o, c, a, p, g, b, v, m, y) => {
      const _ = (c.el = o ? o.el : f("")),
        E = (c.anchor = o ? o.anchor : f(""));
      let { patchFlag: O, dynamicChildren: C, slotScopeIds: T } = c;
      T && (m = m ? m.concat(T) : T),
        o == null
          ? (n(_, a, p), n(E, a, p), ae(c.children || [], a, E, g, b, v, m, y))
          : O > 0 && O & 64 && C && o.dynamicChildren
            ? (Ae(o.dynamicChildren, C, a, g, b, v, m),
              (c.key != null || (g && c === g.subTree)) && ur(o, c, !0))
            : j(o, c, a, E, g, b, v, m, y);
    },
    gt = (o, c, a, p, g, b, v, m, y) => {
      (c.slotScopeIds = m),
        o == null
          ? c.shapeFlag & 512
            ? g.ctx.activate(c, a, p, v, y)
            : Wt(c, a, p, g, b, v, y)
          : $s(o, c, y);
    },
    Wt = (o, c, a, p, g, b, v) => {
      const m = (o.component = fo(o, p, g));
      if ((kn(o) && (m.ctx.renderer = Be), uo(m), m.asyncDep)) {
        if ((g && g.registerDep(m, Z), !o.el)) {
          const y = (m.subTree = He(at));
          D(null, y, c, a);
        }
      } else Z(m, o, c, a, g, b, v);
    },
    $s = (o, c, a) => {
      const p = (c.component = o.component);
      if (pi(o, c, a))
        if (p.asyncDep && !p.asyncResolved) {
          K(p, c, a);
          return;
        } else (p.next = c), li(p.update), (p.effect.dirty = !0), p.update();
      else (c.el = o.el), (p.vnode = c);
    },
    Z = (o, c, a, p, g, b, v) => {
      const m = () => {
          if (o.isMounted) {
            let { next: E, bu: O, u: C, parent: T, vnode: A } = o;
            {
              const Ve = ar(o);
              if (Ve) {
                E && ((E.el = A.el), K(o, E, v)),
                  Ve.asyncDep.then(() => {
                    o.isUnmounted || m();
                  });
                return;
              }
            }
            let N = E,
              H;
            Le(o, !1),
              E ? ((E.el = A.el), K(o, E, v)) : (E = A),
              O && Yt(O),
              (H = E.props && E.props.onVnodeBeforeUpdate) && pe(H, T, E, A),
              Le(o, !0);
            const z = Zt(o),
              oe = o.subTree;
            (o.subTree = z),
              L(oe, z, x(oe.el), mt(oe), o, g, b),
              (E.el = z.el),
              N === null && gi(o, z.el),
              C && ee(C, g),
              (H = E.props && E.props.onVnodeUpdated) &&
                ee(() => pe(H, T, E, A), g);
          } else {
            let E;
            const { el: O, props: C } = c,
              { bm: T, m: A, parent: N } = o,
              H = Ot(c);
            if (
              (Le(o, !1),
              T && Yt(T),
              !H && (E = C && C.onVnodeBeforeMount) && pe(E, N, c),
              Le(o, !0),
              O && qt)
            ) {
              const z = () => {
                (o.subTree = Zt(o)), qt(O, o.subTree, o, g, null);
              };
              H
                ? c.type.__asyncLoader().then(() => !o.isUnmounted && z())
                : z();
            } else {
              const z = (o.subTree = Zt(o));
              L(null, z, a, p, o, g, b), (c.el = z.el);
            }
            if ((A && ee(A, g), !H && (E = C && C.onVnodeMounted))) {
              const z = c;
              ee(() => pe(E, N, z), g);
            }
            (c.shapeFlag & 256 ||
              (N && Ot(N.vnode) && N.vnode.shapeFlag & 256)) &&
              o.a &&
              ee(o.a, g),
              (o.isMounted = !0),
              (c = a = p = null);
          }
        },
        y = (o.effect = new ws(m, ie, () => Rs(_), o.scope)),
        _ = (o.update = () => {
          y.dirty && y.run();
        });
      (_.id = o.uid), Le(o, !0), _();
    },
    K = (o, c, a) => {
      c.component = o;
      const p = o.vnode.props;
      (o.vnode = c),
        (o.next = null),
        Di(o, c.props, p, a),
        zi(o, c.children, a),
        Ue(),
        Xs(o),
        Ke();
    },
    j = (o, c, a, p, g, b, v, m, y = !1) => {
      const _ = o && o.children,
        E = o ? o.shapeFlag : 0,
        O = c.children,
        { patchFlag: C, shapeFlag: T } = c;
      if (C > 0) {
        if (C & 128) {
          _t(_, O, a, p, g, b, v, m, y);
          return;
        } else if (C & 256) {
          Re(_, O, a, p, g, b, v, m, y);
          return;
        }
      }
      T & 8
        ? (E & 16 && xe(_, g, b), O !== _ && h(a, O))
        : E & 16
          ? T & 16
            ? _t(_, O, a, p, g, b, v, m, y)
            : xe(_, g, b, !0)
          : (E & 8 && h(a, ""), T & 16 && ae(O, a, p, g, b, v, m, y));
    },
    Re = (o, c, a, p, g, b, v, m, y) => {
      (o = o || Ge), (c = c || Ge);
      const _ = o.length,
        E = c.length,
        O = Math.min(_, E);
      let C;
      for (C = 0; C < O; C++) {
        const T = (c[C] = y ? Oe(c[C]) : ge(c[C]));
        L(o[C], T, a, null, g, b, v, m, y);
      }
      _ > E ? xe(o, g, b, !0, !1, O) : ae(c, a, p, g, b, v, m, y, O);
    },
    _t = (o, c, a, p, g, b, v, m, y) => {
      let _ = 0;
      const E = c.length;
      let O = o.length - 1,
        C = E - 1;
      for (; _ <= O && _ <= C; ) {
        const T = o[_],
          A = (c[_] = y ? Oe(c[_]) : ge(c[_]));
        if (st(T, A)) L(T, A, a, null, g, b, v, m, y);
        else break;
        _++;
      }
      for (; _ <= O && _ <= C; ) {
        const T = o[O],
          A = (c[C] = y ? Oe(c[C]) : ge(c[C]));
        if (st(T, A)) L(T, A, a, null, g, b, v, m, y);
        else break;
        O--, C--;
      }
      if (_ > O) {
        if (_ <= C) {
          const T = C + 1,
            A = T < E ? c[T].el : p;
          for (; _ <= C; )
            L(null, (c[_] = y ? Oe(c[_]) : ge(c[_])), a, A, g, b, v, m, y), _++;
        }
      } else if (_ > C) for (; _ <= O; ) de(o[_], g, b, !0), _++;
      else {
        const T = _,
          A = _,
          N = new Map();
        for (_ = A; _ <= C; _++) {
          const ne = (c[_] = y ? Oe(c[_]) : ge(c[_]));
          ne.key != null && N.set(ne.key, _);
        }
        let H,
          z = 0;
        const oe = C - A + 1;
        let Ve = !1,
          Us = 0;
        const tt = new Array(oe);
        for (_ = 0; _ < oe; _++) tt[_] = 0;
        for (_ = T; _ <= O; _++) {
          const ne = o[_];
          if (z >= oe) {
            de(ne, g, b, !0);
            continue;
          }
          let he;
          if (ne.key != null) he = N.get(ne.key);
          else
            for (H = A; H <= C; H++)
              if (tt[H - A] === 0 && st(ne, c[H])) {
                he = H;
                break;
              }
          he === void 0
            ? de(ne, g, b, !0)
            : ((tt[he - A] = _ + 1),
              he >= Us ? (Us = he) : (Ve = !0),
              L(ne, c[he], a, null, g, b, v, m, y),
              z++);
        }
        const Ks = Ve ? Xi(tt) : Ge;
        for (H = Ks.length - 1, _ = oe - 1; _ >= 0; _--) {
          const ne = A + _,
            he = c[ne],
            Bs = ne + 1 < E ? c[ne + 1].el : p;
          tt[_] === 0
            ? L(null, he, a, Bs, g, b, v, m, y)
            : Ve && (H < 0 || _ !== Ks[H] ? Me(he, a, Bs, 2) : H--);
        }
      }
    },
    Me = (o, c, a, p, g = null) => {
      const { el: b, type: v, transition: m, children: y, shapeFlag: _ } = o;
      if (_ & 6) {
        Me(o.component.subTree, c, a, p);
        return;
      }
      if (_ & 128) {
        o.suspense.move(c, a, p);
        return;
      }
      if (_ & 64) {
        v.move(o, c, a, Be);
        return;
      }
      if (v === ye) {
        n(b, c, a);
        for (let O = 0; O < y.length; O++) Me(y[O], c, a, p);
        n(o.anchor, c, a);
        return;
      }
      if (v === ts) {
        $(o, c, a);
        return;
      }
      if (p !== 2 && _ & 1 && m)
        if (p === 0) m.beforeEnter(b), n(b, c, a), ee(() => m.enter(b), g);
        else {
          const { leave: O, delayLeave: C, afterLeave: T } = m,
            A = () => n(b, c, a),
            N = () => {
              O(b, () => {
                A(), T && T();
              });
            };
          C ? C(b, A, N) : N();
        }
      else n(b, c, a);
    },
    de = (o, c, a, p = !1, g = !1) => {
      const {
        type: b,
        props: v,
        ref: m,
        children: y,
        dynamicChildren: _,
        shapeFlag: E,
        patchFlag: O,
        dirs: C,
      } = o;
      if ((m != null && hs(m, null, a, o, !0), E & 256)) {
        c.ctx.deactivate(o);
        return;
      }
      const T = E & 1 && C,
        A = !Ot(o);
      let N;
      if ((A && (N = v && v.onVnodeBeforeUnmount) && pe(N, c, o), E & 6))
        _r(o.component, a, p);
      else {
        if (E & 128) {
          o.suspense.unmount(a, p);
          return;
        }
        T && Fe(o, null, c, "beforeUnmount"),
          E & 64
            ? o.type.remove(o, c, a, g, Be, p)
            : _ && (b !== ye || (O > 0 && O & 64))
              ? xe(_, c, a, !1, !0)
              : ((b === ye && O & 384) || (!g && E & 16)) && xe(y, c, a),
          p && js(o);
      }
      ((A && (N = v && v.onVnodeUnmounted)) || T) &&
        ee(() => {
          N && pe(N, c, o), T && Fe(o, null, c, "unmounted");
        }, a);
    },
    js = (o) => {
      const { type: c, el: a, anchor: p, transition: g } = o;
      if (c === ye) {
        gr(a, p);
        return;
      }
      if (c === ts) {
        G(o);
        return;
      }
      const b = () => {
        r(a), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (o.shapeFlag & 1 && g && !g.persisted) {
        const { leave: v, delayLeave: m } = g,
          y = () => v(a, b);
        m ? m(o.el, b, y) : y();
      } else b();
    },
    gr = (o, c) => {
      let a;
      for (; o !== c; ) (a = w(o)), r(o), (o = a);
      r(c);
    },
    _r = (o, c, a) => {
      const { bum: p, scope: g, update: b, subTree: v, um: m } = o;
      p && Yt(p),
        g.stop(),
        b && ((b.active = !1), de(v, o, c, a)),
        m && ee(m, c),
        ee(() => {
          o.isUnmounted = !0;
        }, c),
        c &&
          c.pendingBranch &&
          !c.isUnmounted &&
          o.asyncDep &&
          !o.asyncResolved &&
          o.suspenseId === c.pendingId &&
          (c.deps--, c.deps === 0 && c.resolve());
    },
    xe = (o, c, a, p = !1, g = !1, b = 0) => {
      for (let v = b; v < o.length; v++) de(o[v], c, a, p, g);
    },
    mt = (o) =>
      o.shapeFlag & 6
        ? mt(o.component.subTree)
        : o.shapeFlag & 128
          ? o.suspense.next()
          : w(o.anchor || o.el);
  let Gt = !1;
  const Hs = (o, c, a) => {
      o == null
        ? c._vnode && de(c._vnode, null, null, !0)
        : L(c._vnode || null, o, c, null, null, null, a),
        Gt || ((Gt = !0), Xs(), qn(), (Gt = !1)),
        (c._vnode = o);
    },
    Be = {
      p: L,
      um: de,
      m: Me,
      r: js,
      mt: Wt,
      mc: ae,
      pc: j,
      pbc: Ae,
      n: mt,
      o: e,
    };
  let zt, qt;
  return (
    t && ([zt, qt] = t(Be)), { render: Hs, hydrate: zt, createApp: Ki(Hs, zt) }
  );
}
function es({ type: e, props: t }, s) {
  return (s === "svg" && e === "foreignObject") ||
    (s === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : s;
}
function Le({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function Yi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ur(e, t, s = !1) {
  const n = e.children,
    r = t.children;
  if (I(n) && I(r))
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      let f = r[i];
      f.shapeFlag & 1 &&
        !f.dynamicChildren &&
        ((f.patchFlag <= 0 || f.patchFlag === 32) &&
          ((f = r[i] = Oe(r[i])), (f.el = l.el)),
        s || ur(l, f)),
        f.type === Kt && (f.el = l.el);
    }
}
function Xi(e) {
  const t = e.slice(),
    s = [0];
  let n, r, i, l, f;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const d = e[n];
    if (d !== 0) {
      if (((r = s[s.length - 1]), e[r] < d)) {
        (t[n] = r), s.push(n);
        continue;
      }
      for (i = 0, l = s.length - 1; i < l; )
        (f = (i + l) >> 1), e[s[f]] < d ? (i = f + 1) : (l = f);
      d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), (s[i] = n));
    }
  }
  for (i = s.length, l = s[i - 1]; i-- > 0; ) (s[i] = l), (l = t[l]);
  return s;
}
function ar(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ar(t);
}
const Zi = (e) => e.__isTeleport,
  ye = Symbol.for("v-fgt"),
  Kt = Symbol.for("v-txt"),
  at = Symbol.for("v-cmt"),
  ts = Symbol.for("v-stc"),
  lt = [];
let ce = null;
function Qi(e = !1) {
  lt.push((ce = e ? null : []));
}
function ki() {
  lt.pop(), (ce = lt[lt.length - 1] || null);
}
let dt = 1;
function ln(e) {
  dt += e;
}
function eo(e) {
  return (
    (e.dynamicChildren = dt > 0 ? ce || Ge : null),
    ki(),
    dt > 0 && ce && ce.push(e),
    e
  );
}
function to(e, t, s, n, r, i) {
  return eo(J(e, t, s, n, r, i, !0));
}
function so(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function st(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Bt = "__vInternal",
  dr = ({ key: e }) => e ?? null,
  St = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? q(e) || se(e) || P(e)
        ? { i: me, r: e, k: t, f: !!s }
        : e
      : null
  );
function J(
  e,
  t = null,
  s = null,
  n = 0,
  r = null,
  i = e === ye ? 0 : 1,
  l = !1,
  f = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dr(t),
    ref: t && St(t),
    scopeId: Xn,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: me,
  };
  return (
    f
      ? (Ls(u, s), i & 128 && e.normalize(u))
      : s && (u.shapeFlag |= q(s) ? 8 : 16),
    dt > 0 &&
      !l &&
      ce &&
      (u.patchFlag > 0 || i & 6) &&
      u.patchFlag !== 32 &&
      ce.push(u),
    u
  );
}
const He = no;
function no(e, t = null, s = null, n = 0, r = null, i = !1) {
  if (((!e || e === _i) && (e = at), so(e))) {
    const f = Ze(e, t, !0);
    return (
      s && Ls(f, s),
      dt > 0 &&
        !i &&
        ce &&
        (f.shapeFlag & 6 ? (ce[ce.indexOf(e)] = f) : ce.push(f)),
      (f.patchFlag |= -2),
      f
    );
  }
  if ((go(e) && (e = e.__vccOpts), t)) {
    t = ro(t);
    let { class: f, style: u } = t;
    f && !q(f) && (t.class = vs(f)),
      B(u) && (Kn(u) && !I(u) && (u = X({}, u)), (t.style = ys(u)));
  }
  const l = q(e) ? 1 : mi(e) ? 128 : Zi(e) ? 64 : B(e) ? 4 : P(e) ? 2 : 0;
  return J(e, t, s, n, r, l, i, !0);
}
function ro(e) {
  return e ? (Kn(e) || Bt in e ? X({}, e) : e) : null;
}
function Ze(e, t, s = !1) {
  const { props: n, ref: r, patchFlag: i, children: l } = e,
    f = t ? oo(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && dr(f),
    ref:
      t && t.ref ? (s && r ? (I(r) ? r.concat(St(t)) : [r, St(t)]) : St(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ye ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function io(e = " ", t = 0) {
  return He(Kt, null, e, t);
}
function ge(e) {
  return e == null || typeof e == "boolean"
    ? He(at)
    : I(e)
      ? He(ye, null, e.slice())
      : typeof e == "object"
        ? Oe(e)
        : He(Kt, null, String(e));
}
function Oe(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ze(e);
}
function Ls(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (I(t)) s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ls(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !(Bt in t)
        ? (t._ctx = me)
        : r === 3 &&
          me &&
          (me.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    P(t)
      ? ((t = { default: t, _ctx: me }), (s = 32))
      : ((t = String(t)), n & 64 ? ((s = 16), (t = [io(t)])) : (s = 8));
  (e.children = t), (e.shapeFlag |= s);
}
function oo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = vs([t.class, n.class]));
      else if (r === "style") t.style = ys([t.style, n.style]);
      else if (Ft(r)) {
        const i = t[r],
          l = n[r];
        l &&
          i !== l &&
          !(I(i) && i.includes(l)) &&
          (t[r] = i ? [].concat(i, l) : l);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function pe(e, t, s, n = null) {
  fe(e, t, 7, [s, n]);
}
const lo = rr();
let co = 0;
function fo(e, t, s) {
  const n = e.type,
    r = (t ? t.appContext : e.appContext) || lo,
    i = {
      uid: co++,
      vnode: e,
      type: n,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ar(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: or(n, r),
      emitsOptions: Yn(n, r),
      emit: null,
      emitted: null,
      propsDefaults: U,
      inheritAttrs: n.inheritAttrs,
      ctx: U,
      data: U,
      props: U,
      attrs: U,
      slots: U,
      refs: U,
      setupState: U,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
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
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = ui.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let k = null,
  Mt,
  ps;
{
  const e = On(),
    t = (s, n) => {
      let r;
      return (
        (r = e[s]) || (r = e[s] = []),
        r.push(n),
        (i) => {
          r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
        }
      );
    };
  (Mt = t("__VUE_INSTANCE_SETTERS__", (s) => (k = s))),
    (ps = t("__VUE_SSR_SETTERS__", (s) => (Vt = s)));
}
const ht = (e) => {
    const t = k;
    return (
      Mt(e),
      e.scope.on(),
      () => {
        e.scope.off(), Mt(t);
      }
    );
  },
  cn = () => {
    k && k.scope.off(), Mt(null);
  };
function hr(e) {
  return e.vnode.shapeFlag & 4;
}
let Vt = !1;
function uo(e, t = !1) {
  t && ps(t);
  const { props: s, children: n } = e.vnode,
    r = hr(e);
  Vi(e, s, r, t), Gi(e, n);
  const i = r ? ao(e, t) : void 0;
  return t && ps(!1), i;
}
function ao(e, t) {
  const s = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Bn(new Proxy(e.ctx, Fi)));
  const { setup: n } = s;
  if (n) {
    const r = (e.setupContext = n.length > 1 ? po(e) : null),
      i = ht(e);
    Ue();
    const l = Ie(n, e, 0, [e.props, r]);
    if ((Ke(), i(), vn(l))) {
      if ((l.then(cn, cn), t))
        return l
          .then((f) => {
            fn(e, f, t);
          })
          .catch((f) => {
            jt(f, e, 0);
          });
      e.asyncDep = l;
    } else fn(e, l, t);
  } else pr(e, t);
}
function fn(e, t, s) {
  P(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : B(t) && (e.setupState = Wn(t)),
    pr(e, s);
}
let un;
function pr(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && un && !n.render) {
      const r = n.template || Ms(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: l } = e.appContext.config,
          { delimiters: f, compilerOptions: u } = n,
          d = X(X({ isCustomElement: i, delimiters: f }, l), u);
        n.render = un(r, d);
      }
    }
    e.render = n.render || ie;
  }
  {
    const r = ht(e);
    Ue();
    try {
      Li(e);
    } finally {
      Ke(), r();
    }
  }
}
function ho(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, s) {
        return te(e, "get", "$attrs"), t[s];
      },
    }))
  );
}
function po(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    get attrs() {
      return ho(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Ns(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Wn(Bn(e.exposed)), {
        get(t, s) {
          if (s in t) return t[s];
          if (s in it) return it[s](e);
        },
        has(t, s) {
          return s in t || s in it;
        },
      }))
    );
}
function go(e) {
  return P(e) && "__vccOpts" in e;
}
const _o = (e, t) => kr(e, t, Vt),
  mo = "3.4.19";
/**
 * @vue/runtime-dom v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const bo = "http://www.w3.org/2000/svg",
  xo = "http://www.w3.org/1998/Math/MathML",
  Te = typeof document < "u" ? document : null,
  an = Te && Te.createElement("template"),
  yo = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, s, n) => {
      const r =
        t === "svg"
          ? Te.createElementNS(bo, e)
          : t === "mathml"
            ? Te.createElementNS(xo, e)
            : Te.createElement(e, s ? { is: s } : void 0);
      return (
        e === "select" &&
          n &&
          n.multiple != null &&
          r.setAttribute("multiple", n.multiple),
        r
      );
    },
    createText: (e) => Te.createTextNode(e),
    createComment: (e) => Te.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Te.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, s, n, r, i) {
      const l = s ? s.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), s),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        an.innerHTML =
          n === "svg"
            ? `<svg>${e}</svg>`
            : n === "mathml"
              ? `<math>${e}</math>`
              : e;
        const f = an.content;
        if (n === "svg" || n === "mathml") {
          const u = f.firstChild;
          for (; u.firstChild; ) f.appendChild(u.firstChild);
          f.removeChild(u);
        }
        t.insertBefore(f, s);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        s ? s.previousSibling : t.lastChild,
      ];
    },
  },
  vo = Symbol("_vtc");
function wo(e, t, s) {
  const n = e[vo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : s
        ? e.setAttribute("class", t)
        : (e.className = t);
}
const dn = Symbol("_vod"),
  Eo = Symbol(""),
  Co = /(^|;)\s*display\s*:/;
function Oo(e, t, s) {
  const n = e.style,
    r = q(s),
    i = n.display;
  let l = !1;
  if (s && !r) {
    if (t && !q(t)) for (const f in t) s[f] == null && gs(n, f, "");
    for (const f in s) f === "display" && (l = !0), gs(n, f, s[f]);
  } else if (r) {
    if (t !== s) {
      const f = n[Eo];
      f && (s += ";" + f), (n.cssText = s), (l = Co.test(s));
    }
  } else t && e.removeAttribute("style");
  dn in e && ((e[dn] = l ? n.display : ""), (n.display = i));
}
const hn = /\s*!important$/;
function gs(e, t, s) {
  if (I(s)) s.forEach((n) => gs(e, t, n));
  else if ((s == null && (s = ""), t.startsWith("--"))) e.setProperty(t, s);
  else {
    const n = To(e, t);
    hn.test(s)
      ? e.setProperty(ke(n), s.replace(hn, ""), "important")
      : (e[n] = s);
  }
}
const pn = ["Webkit", "Moz", "ms"],
  ss = {};
function To(e, t) {
  const s = ss[t];
  if (s) return s;
  let n = Ye(t);
  if (n !== "filter" && n in e) return (ss[t] = n);
  n = Cn(n);
  for (let r = 0; r < pn.length; r++) {
    const i = pn[r] + n;
    if (i in e) return (ss[t] = i);
  }
  return t;
}
const gn = "http://www.w3.org/1999/xlink";
function So(e, t, s, n, r) {
  if (n && t.startsWith("xlink:"))
    s == null
      ? e.removeAttributeNS(gn, t.slice(6, t.length))
      : e.setAttributeNS(gn, t, s);
  else {
    const i = Ir(t);
    s == null || (i && !Tn(s))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : s);
  }
}
function Io(e, t, s, n, r, i, l) {
  if (t === "innerHTML" || t === "textContent") {
    n && l(n, r, i), (e[t] = s ?? "");
    return;
  }
  const f = e.tagName;
  if (t === "value" && f !== "PROGRESS" && !f.includes("-")) {
    e._value = s;
    const d = f === "OPTION" ? e.getAttribute("value") : e.value,
      h = s ?? "";
    d !== h && (e.value = h), s == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (s === "" || s == null) {
    const d = typeof e[t];
    d === "boolean"
      ? (s = Tn(s))
      : s == null && d === "string"
        ? ((s = ""), (u = !0))
        : d === "number" && ((s = 0), (u = !0));
  }
  try {
    e[t] = s;
  } catch {}
  u && e.removeAttribute(t);
}
function Po(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ao(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const _n = Symbol("_vei");
function Ro(e, t, s, n, r = null) {
  const i = e[_n] || (e[_n] = {}),
    l = i[t];
  if (n && l) l.value = n;
  else {
    const [f, u] = Mo(t);
    if (n) {
      const d = (i[t] = No(n, r));
      Po(e, f, d, u);
    } else l && (Ao(e, f, l, u), (i[t] = void 0));
  }
}
const mn = /(?:Once|Passive|Capture)$/;
function Mo(e) {
  let t;
  if (mn.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(mn)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : ke(e.slice(2)), t];
}
let ns = 0;
const Fo = Promise.resolve(),
  Lo = () => ns || (Fo.then(() => (ns = 0)), (ns = Date.now()));
function No(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= s.attached) return;
    fe($o(n, s.value), t, 5, [n]);
  };
  return (s.value = e), (s.attached = Lo()), s;
}
function $o(e, t) {
  if (I(t)) {
    const s = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        s.call(e), (e._stopped = !0);
      }),
      t.map((n) => (r) => !r._stopped && n && n(r))
    );
  } else return t;
}
const bn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  jo = (e, t, s, n, r, i, l, f, u) => {
    const d = r === "svg";
    t === "class"
      ? wo(e, n, d)
      : t === "style"
        ? Oo(e, s, n)
        : Ft(t)
          ? ms(t) || Ro(e, t, s, n, l)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Ho(e, t, n, d)
              )
            ? Io(e, t, n, i, l, f, u)
            : (t === "true-value"
                ? (e._trueValue = n)
                : t === "false-value" && (e._falseValue = n),
              So(e, t, n, d));
  };
function Ho(e, t, s, n) {
  if (n)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && bn(t) && P(s))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return bn(t) && q(s) ? !1 : t in e;
}
const Uo = X({ patchProp: jo }, yo);
let xn;
function Ko() {
  return xn || (xn = qi(Uo));
}
const Bo = (...e) => {
  const t = Ko().createApp(...e),
    { mount: s } = t;
  return (
    (t.mount = (n) => {
      const r = Do(n);
      if (!r) return;
      const i = t._component;
      !P(i) && !i.render && !i.template && (i.template = r.innerHTML),
        (r.innerHTML = "");
      const l = s(r, !1, Vo(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        l
      );
    }),
    t
  );
};
function Vo(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Do(e) {
  return q(e) ? document.querySelector(e) : e;
}
const Wo = {
    class:
      "bg-slate-800 w-screen h-screen flex justify-center items-center flex-col relative",
  },
  Go = J(
    "h1",
    { class: "text-white font-sans text-5xl absolute top-10" },
    "Simon Says",
    -1
  ),
  zo = {
    class:
      "flex items-center gap-20 max-[620px]:gap-5 max-[620px]:flex-col max-[620px]:h-3/4 max-[620px]:w-full p-5",
  },
  qo = { class: "flex flex-col items-center" },
  Jo = { class: "text-white text-3xl font-sans font-bold" },
  Yo = J("option", { value: "1500" }, "Легкий", -1),
  Xo = J("option", { value: "1000" }, "Средний", -1),
  Zo = J("option", { value: "400" }, "Сложный", -1),
  Qo = [Yo, Xo, Zo],
  ko = {
    __name: "App",
    setup(e) {
      const t = (x) => {
          new Audio(`/musicEffects/${x}.mp3`).play();
        },
        s = De(1500),
        n = De(!1),
        r = De(0),
        i = De([]),
        l = De([]),
        f = De(0);
      tr(() => {
        u();
      });
      const u = () => {
          setTimeout(() => {
            if (n.value) (r.value = 0), (i.value.length = 0), (n.value = !1);
            else {
              r.value++, (l.value = []), (f.value = 0);
              for (let x = 0; x < 1; x++) {
                i.value.push(Math.floor(Math.random() * 4));
                for (let w = 0; w < r.value; w++)
                  setTimeout(() => {
                    t(i.value[w]),
                      document
                        .getElementById(i.value[w])
                        .classList.add("brightness-200"),
                      setTimeout(() => {
                        document
                          .getElementById(i.value[w])
                          .classList.remove("brightness-200");
                      }, 200);
                  }, w * s.value);
              }
            }
          }, 500);
        },
        d = (x) => {
          t(x.target.id),
            f.value++,
            l.value.push(x.target.id),
            String(f.value) > String(r.value)
              ? ((r.value = 0), (i.value.length = 0), (n.value = !1))
              : String(f.value) == String(r.value) &&
                (String(l.value) === String(i.value)
                  ? (u(), (n.value = !1))
                  : ((r.value = 0), (i.value.length = 0), (n.value = !1)));
        },
        h = (x) => {
          (s.value = x.target.value), console.log(s.value);
        };
      return (x, w) => (
        Qi(),
        to("div", Wo, [
          Go,
          J("div", zo, [
            J(
              "div",
              {
                class:
                  "rounded-full bg-white w-96 h-96 grid grid-cols-2 grid-rows-2 overflow-hidden shadow-cyan-500 shadow-md [&>*]:transition-[0.3s] max-[620px]:w-64 max-[620px]:h-64",
              },
              [
                J("div", {
                  class: "bg-cyan-500 hover:brightness-200 cursor-pointer",
                  onClick: d,
                  id: "0",
                }),
                J("div", {
                  class: "bg-red-500 hover:brightness-200 cursor-pointer",
                  onClick: d,
                  id: "1",
                }),
                J("div", {
                  class: "bg-yellow-500 hover:brightness-200 cursor-pointer",
                  onClick: d,
                  id: "2",
                }),
                J("div", {
                  class: "bg-lime-500 hover:brightness-200 cursor-pointer",
                  onClick: d,
                  id: "3",
                }),
              ]
            ),
            J("div", qo, [
              J("span", Jo, Pr(r.value), 1),
              J(
                "button",
                {
                  class:
                    "text-white mt-10 text-3xl font-sans font-bold bg-slate-700 px-4 py-2 rounded-xl",
                  onClick: u,
                },
                " Play "
              ),
              J(
                "select",
                {
                  class:
                    "mt-10 font-sans font-bold bg-slate-700 px-4 py-2 rounded-xl text-white",
                  defaultValue: "1500",
                  onClick: w[0] || (w[0] = (S) => h(S)),
                },
                Qo
              ),
            ]),
          ]),
        ])
      );
    },
  };
Bo(ko).mount("#app");
