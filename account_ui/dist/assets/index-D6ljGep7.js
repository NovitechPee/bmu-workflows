(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const s of l)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const s = {};
    return (
      l.integrity && (s.integrity = l.integrity),
      l.referrerPolicy && (s.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const s = n(l);
    fetch(l.href, s);
  }
})();
function Bc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var xa = { exports: {} },
  hl = {},
  ya = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for('react.element'),
  Vc = Symbol.for('react.portal'),
  Uc = Symbol.for('react.fragment'),
  Qc = Symbol.for('react.strict_mode'),
  Hc = Symbol.for('react.profiler'),
  Wc = Symbol.for('react.provider'),
  bc = Symbol.for('react.context'),
  Kc = Symbol.for('react.forward_ref'),
  Gc = Symbol.for('react.suspense'),
  Yc = Symbol.for('react.memo'),
  Xc = Symbol.for('react.lazy'),
  Zo = Symbol.iterator;
function Zc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Zo && e[Zo]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var va = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  wa = Object.assign,
  ka = {};
function Nn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ka),
    (this.updater = n || va);
}
Nn.prototype.isReactComponent = {};
Nn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Nn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Sa() {}
Sa.prototype = Nn.prototype;
function no(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ka),
    (this.updater = n || va);
}
var ro = (no.prototype = new Sa());
ro.constructor = no;
wa(ro, Nn.prototype);
ro.isPureReactComponent = !0;
var Jo = Array.isArray,
  Na = Object.prototype.hasOwnProperty,
  lo = { current: null },
  ja = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ca(e, t, n) {
  var r,
    l = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = '' + t.key),
    t))
      Na.call(t, r) && !ja.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), d = 0; d < a; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: cr,
    type: e,
    key: s,
    ref: o,
    props: l,
    _owner: lo.current,
  };
}
function Jc(e, t) {
  return {
    $$typeof: cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function so(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === cr;
}
function qc(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qo = /\/+/g;
function Tl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? qc('' + e.key)
    : t.toString(36);
}
function Tr(e, t, n, r, l) {
  var s = typeof e;
  (s === 'undefined' || s === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case cr:
          case Vc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + Tl(o, 0) : r),
      Jo(l)
        ? ((n = ''),
          e != null && (n = e.replace(qo, '$&/') + '/'),
          Tr(l, t, n, '', function (d) {
            return d;
          }))
        : l != null &&
          (so(l) &&
            (l = Jc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(qo, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Jo(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var u = r + Tl(s, a);
      o += Tr(s, t, n, u, l);
    }
  else if (((u = Zc(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (u = r + Tl(s, a++)), (o += Tr(s, t, n, u, l));
  else if (s === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function hr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tr(e, r, '', '', function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function ed(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  Ir = { transition: null },
  td = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: lo,
  };
function _a() {
  throw Error('act(...) is not supported in production builds of React.');
}
V.Children = {
  map: hr,
  forEach: function (e, t, n) {
    hr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      hr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!so(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
V.Component = Nn;
V.Fragment = Uc;
V.Profiler = Hc;
V.PureComponent = no;
V.StrictMode = Qc;
V.Suspense = Gc;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = td;
V.act = _a;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = wa({}, e.props),
    l = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = lo.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Na.call(t, u) &&
        !ja.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var d = 0; d < u; d++) a[d] = arguments[d + 2];
    r.children = a;
  }
  return { $$typeof: cr, type: e.type, key: l, ref: s, props: r, _owner: o };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: bc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Wc, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Ca;
V.createFactory = function (e) {
  var t = Ca.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Kc, render: e };
};
V.isValidElement = so;
V.lazy = function (e) {
  return { $$typeof: Xc, _payload: { _status: -1, _result: e }, _init: ed };
};
V.memo = function (e, t) {
  return { $$typeof: Yc, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Ir.transition;
  Ir.transition = {};
  try {
    e();
  } finally {
    Ir.transition = t;
  }
};
V.unstable_act = _a;
V.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
V.useContext = function (e) {
  return ye.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
V.useId = function () {
  return ye.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return ye.current.useRef(e);
};
V.useState = function (e) {
  return ye.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return ye.current.useTransition();
};
V.version = '18.3.1';
ya.exports = V;
var B = ya.exports;
const te = Bc(B);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd = B,
  rd = Symbol.for('react.element'),
  ld = Symbol.for('react.fragment'),
  sd = Object.prototype.hasOwnProperty,
  od = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  id = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ea(e, t, n) {
  var r,
    l = {},
    s = null,
    o = null;
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) sd.call(t, r) && !id.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: rd,
    type: e,
    key: s,
    ref: o,
    props: l,
    _owner: od.current,
  };
}
hl.Fragment = ld;
hl.jsx = Ea;
hl.jsxs = Ea;
xa.exports = hl;
var i = xa.exports,
  ss = {},
  Pa = { exports: {} },
  Ie = {},
  Fa = { exports: {} },
  Da = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, O) {
    var M = D.length;
    D.push(O);
    e: for (; 0 < M; ) {
      var h = (M - 1) >>> 1,
        j = D[h];
      if (0 < l(j, O)) (D[h] = O), (D[M] = j), (M = h);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var O = D[0],
      M = D.pop();
    if (M !== O) {
      D[0] = M;
      e: for (var h = 0, j = D.length, P = j >>> 1; h < P; ) {
        var I = 2 * (h + 1) - 1,
          z = D[I],
          R = I + 1,
          $ = D[R];
        if (0 > l(z, M))
          R < j && 0 > l($, z)
            ? ((D[h] = $), (D[R] = M), (h = R))
            : ((D[h] = z), (D[I] = M), (h = I));
        else if (R < j && 0 > l($, M)) (D[h] = $), (D[R] = M), (h = R);
        else break e;
      }
    }
    return O;
  }
  function l(D, O) {
    var M = D.sortIndex - O.sortIndex;
    return M !== 0 ? M : D.id - O.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    d = [],
    v = 1,
    x = null,
    p = 3,
    y = !1,
    k = !1,
    N = !1,
    T = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(D) {
    for (var O = n(d); O !== null; ) {
      if (O.callback === null) r(d);
      else if (O.startTime <= D)
        r(d), (O.sortIndex = O.expirationTime), t(u, O);
      else break;
      O = n(d);
    }
  }
  function g(D) {
    if (((N = !1), m(D), !k))
      if (n(u) !== null) (k = !0), ke(w);
      else {
        var O = n(d);
        O !== null && Ye(g, O.startTime - D);
      }
  }
  function w(D, O) {
    (k = !1), N && ((N = !1), f(_), (_ = -1)), (y = !0);
    var M = p;
    try {
      for (
        m(O), x = n(u);
        x !== null && (!(x.expirationTime > O) || (D && !W()));

      ) {
        var h = x.callback;
        if (typeof h == 'function') {
          (x.callback = null), (p = x.priorityLevel);
          var j = h(x.expirationTime <= O);
          (O = e.unstable_now()),
            typeof j == 'function' ? (x.callback = j) : x === n(u) && r(u),
            m(O);
        } else r(u);
        x = n(u);
      }
      if (x !== null) var P = !0;
      else {
        var I = n(d);
        I !== null && Ye(g, I.startTime - O), (P = !1);
      }
      return P;
    } finally {
      (x = null), (p = M), (y = !1);
    }
  }
  var C = !1,
    S = null,
    _ = -1,
    F = 5,
    A = -1;
  function W() {
    return !(e.unstable_now() - A < F);
  }
  function de() {
    if (S !== null) {
      var D = e.unstable_now();
      A = D;
      var O = !0;
      try {
        O = S(!0, D);
      } finally {
        O ? we() : ((C = !1), (S = null));
      }
    } else C = !1;
  }
  var we;
  if (typeof c == 'function')
    we = function () {
      c(de);
    };
  else if (typeof MessageChannel < 'u') {
    var Ge = new MessageChannel(),
      Pe = Ge.port2;
    (Ge.port1.onmessage = de),
      (we = function () {
        Pe.postMessage(null);
      });
  } else
    we = function () {
      T(de, 0);
    };
  function ke(D) {
    (S = D), C || ((C = !0), we());
  }
  function Ye(D, O) {
    _ = T(function () {
      D(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || y || ((k = !0), ke(w));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (F = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = p;
      }
      var M = p;
      p = O;
      try {
        return D();
      } finally {
        p = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, O) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var M = p;
      p = D;
      try {
        return O();
      } finally {
        p = M;
      }
    }),
    (e.unstable_scheduleCallback = function (D, O, M) {
      var h = e.unstable_now();
      switch (
        (typeof M == 'object' && M !== null
          ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? h + M : h))
          : (M = h),
        D)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = M + j),
        (D = {
          id: v++,
          callback: O,
          priorityLevel: D,
          startTime: M,
          expirationTime: j,
          sortIndex: -1,
        }),
        M > h
          ? ((D.sortIndex = M),
            t(d, D),
            n(u) === null &&
              D === n(d) &&
              (N ? (f(_), (_ = -1)) : (N = !0), Ye(g, M - h)))
          : ((D.sortIndex = j), t(u, D), k || y || ((k = !0), ke(w))),
        D
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (D) {
      var O = p;
      return function () {
        var M = p;
        p = O;
        try {
          return D.apply(this, arguments);
        } finally {
          p = M;
        }
      };
    });
})(Da);
Fa.exports = Da;
var ad = Fa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud = B,
  Te = ad;
function E(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var La = new Set(),
  Kn = {};
function Ht(e, t) {
  gn(e, t), gn(e + 'Capture', t);
}
function gn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) La.add(t[e]);
}
var it = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  os = Object.prototype.hasOwnProperty,
  cd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ei = {},
  ti = {};
function dd(e) {
  return os.call(ti, e)
    ? !0
    : os.call(ei, e)
      ? !1
      : cd.test(e)
        ? (ti[e] = !0)
        : ((ei[e] = !0), !1);
}
function fd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function pd(e, t, n, r) {
  if (t === null || typeof t > 'u' || fd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, l, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ue = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ue[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ue[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ue[e] = new ve(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ue[e] = new ve(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ue[e] = new ve(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ue[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oo = /[\-:]([a-z])/g;
function io(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(oo, io);
    ue[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(oo, io);
    ue[t] = new ve(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(oo, io);
  ue[t] = new ve(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ve(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ao(e, t, n, r) {
  var l = ue.hasOwnProperty(t) ? ue[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (pd(t, n, l, r) && (n = null),
    r || l === null
      ? dd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dt = ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for('react.element'),
  Zt = Symbol.for('react.portal'),
  Jt = Symbol.for('react.fragment'),
  uo = Symbol.for('react.strict_mode'),
  is = Symbol.for('react.profiler'),
  Ta = Symbol.for('react.provider'),
  Ia = Symbol.for('react.context'),
  co = Symbol.for('react.forward_ref'),
  as = Symbol.for('react.suspense'),
  us = Symbol.for('react.suspense_list'),
  fo = Symbol.for('react.memo'),
  pt = Symbol.for('react.lazy'),
  za = Symbol.for('react.offscreen'),
  ni = Symbol.iterator;
function _n(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ni && e[ni]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var J = Object.assign,
  Il;
function zn(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || '';
    }
  return (
    `
` +
    Il +
    e
  );
}
var zl = !1;
function Rl(e, t) {
  if (!e || zl) return '';
  zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == 'string') {
      for (
        var l = d.stack.split(`
`),
          s = r.stack.split(`
`),
          o = l.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && l[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== s[a])) {
                var u =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? zn(e) : '';
}
function md(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn('Lazy');
    case 13:
      return zn('Suspense');
    case 19:
      return zn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Rl(e.type, !1)), e;
    case 11:
      return (e = Rl(e.type.render, !1)), e;
    case 1:
      return (e = Rl(e.type, !0)), e;
    default:
      return '';
  }
}
function cs(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Jt:
      return 'Fragment';
    case Zt:
      return 'Portal';
    case is:
      return 'Profiler';
    case uo:
      return 'StrictMode';
    case as:
      return 'Suspense';
    case us:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ia:
        return (e.displayName || 'Context') + '.Consumer';
      case Ta:
        return (e._context.displayName || 'Context') + '.Provider';
      case co:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case fo:
        return (
          (t = e.displayName || null), t !== null ? t : cs(e.type) || 'Memo'
        );
      case pt:
        (t = e._payload), (e = e._init);
        try {
          return cs(e(t));
        } catch {}
    }
  return null;
}
function hd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return cs(t);
    case 8:
      return t === uo ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Et(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ra(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function gd(e) {
  var t = Ra(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = gd(e));
}
function Aa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ra(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ds(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ri(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Et(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function $a(e, t) {
  (t = t.checked), t != null && ao(e, 'checked', t, !1);
}
function fs(e, t) {
  $a(e, t);
  var n = Et(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? ps(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ps(e, t.type, Et(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function li(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function ps(e, t, n) {
  (t !== 'number' || Hr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Rn = Array.isArray;
function cn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Et(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ms(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function si(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Et(n) };
}
function Oa(e, t) {
  var n = Et(t.value),
    r = Et(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function oi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Ma(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function hs(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ma(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var yr,
  Ba = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        yr = yr || document.createElement('div'),
          yr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = yr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var On = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  xd = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(On).forEach(function (e) {
  xd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]);
  });
});
function Va(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (On.hasOwnProperty(e) && On[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Ua(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Va(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var yd = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function gs(e, t) {
  if (t) {
    if (yd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(E(62));
  }
}
function xs(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ys = null;
function po(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vs = null,
  dn = null,
  fn = null;
function ii(e) {
  if ((e = pr(e))) {
    if (typeof vs != 'function') throw Error(E(280));
    var t = e.stateNode;
    t && ((t = wl(t)), vs(e.stateNode, e.type, t));
  }
}
function Qa(e) {
  dn ? (fn ? fn.push(e) : (fn = [e])) : (dn = e);
}
function Ha() {
  if (dn) {
    var e = dn,
      t = fn;
    if (((fn = dn = null), ii(e), t)) for (e = 0; e < t.length; e++) ii(t[e]);
  }
}
function Wa(e, t) {
  return e(t);
}
function ba() {}
var Al = !1;
function Ka(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return Wa(e, t, n);
  } finally {
    (Al = !1), (dn !== null || fn !== null) && (ba(), Ha());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(E(231, t, typeof n));
  return n;
}
var ws = !1;
if (it)
  try {
    var En = {};
    Object.defineProperty(En, 'passive', {
      get: function () {
        ws = !0;
      },
    }),
      window.addEventListener('test', En, En),
      window.removeEventListener('test', En, En);
  } catch {
    ws = !1;
  }
function vd(e, t, n, r, l, s, o, a, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var Mn = !1,
  Wr = null,
  br = !1,
  ks = null,
  wd = {
    onError: function (e) {
      (Mn = !0), (Wr = e);
    },
  };
function kd(e, t, n, r, l, s, o, a, u) {
  (Mn = !1), (Wr = null), vd.apply(wd, arguments);
}
function Sd(e, t, n, r, l, s, o, a, u) {
  if ((kd.apply(this, arguments), Mn)) {
    if (Mn) {
      var d = Wr;
      (Mn = !1), (Wr = null);
    } else throw Error(E(198));
    br || ((br = !0), (ks = d));
  }
}
function Wt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ga(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ai(e) {
  if (Wt(e) !== e) throw Error(E(188));
}
function Nd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var s = l.alternate;
    if (s === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === s.child) {
      for (s = l.child; s; ) {
        if (s === n) return ai(l), e;
        if (s === r) return ai(l), t;
        s = s.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = l), (r = s);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Ya(e) {
  return (e = Nd(e)), e !== null ? Xa(e) : null;
}
function Xa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Za = Te.unstable_scheduleCallback,
  ui = Te.unstable_cancelCallback,
  jd = Te.unstable_shouldYield,
  Cd = Te.unstable_requestPaint,
  ee = Te.unstable_now,
  _d = Te.unstable_getCurrentPriorityLevel,
  mo = Te.unstable_ImmediatePriority,
  Ja = Te.unstable_UserBlockingPriority,
  Kr = Te.unstable_NormalPriority,
  Ed = Te.unstable_LowPriority,
  qa = Te.unstable_IdlePriority,
  gl = null,
  qe = null;
function Pd(e) {
  if (qe && typeof qe.onCommitFiberRoot == 'function')
    try {
      qe.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var We = Math.clz32 ? Math.clz32 : Ld,
  Fd = Math.log,
  Dd = Math.LN2;
function Ld(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Fd(e) / Dd) | 0)) | 0;
}
var vr = 64,
  wr = 4194304;
function An(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = An(a)) : ((s &= o), s !== 0 && (r = An(s)));
  } else (o = n & ~l), o !== 0 ? (r = An(o)) : s !== 0 && (r = An(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - We(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Td(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Id(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - We(s),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = Td(a, t))
      : u <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function Ss(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function eu() {
  var e = vr;
  return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - We(t)),
    (e[t] = n);
}
function zd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - We(n),
      s = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
  }
}
function ho(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var H = 0;
function tu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nu,
  go,
  ru,
  lu,
  su,
  Ns = !1,
  kr = [],
  vt = null,
  wt = null,
  kt = null,
  Xn = new Map(),
  Zn = new Map(),
  ht = [],
  Rd =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function ci(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      vt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      wt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      kt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Xn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Zn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = pr(t)), t !== null && go(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ad(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (vt = Pn(vt, e, t, n, r, l)), !0;
    case 'dragenter':
      return (wt = Pn(wt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (kt = Pn(kt, e, t, n, r, l)), !0;
    case 'pointerover':
      var s = l.pointerId;
      return Xn.set(s, Pn(Xn.get(s) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (s = l.pointerId), Zn.set(s, Pn(Zn.get(s) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ou(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ga(n)), t !== null)) {
          (e.blockedOn = t),
            su(e.priority, function () {
              ru(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ys = r), n.target.dispatchEvent(r), (ys = null);
    } else return (t = pr(n)), t !== null && go(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function di(e, t, n) {
  zr(e) && n.delete(t);
}
function $d() {
  (Ns = !1),
    vt !== null && zr(vt) && (vt = null),
    wt !== null && zr(wt) && (wt = null),
    kt !== null && zr(kt) && (kt = null),
    Xn.forEach(di),
    Zn.forEach(di);
}
function Fn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ns ||
      ((Ns = !0),
      Te.unstable_scheduleCallback(Te.unstable_NormalPriority, $d)));
}
function Jn(e) {
  function t(l) {
    return Fn(l, e);
  }
  if (0 < kr.length) {
    Fn(kr[0], e);
    for (var n = 1; n < kr.length; n++) {
      var r = kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vt !== null && Fn(vt, e),
      wt !== null && Fn(wt, e),
      kt !== null && Fn(kt, e),
      Xn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < ht.length;
    n++
  )
    (r = ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ht.length && ((n = ht[0]), n.blockedOn === null); )
    ou(n), n.blockedOn === null && ht.shift();
}
var pn = dt.ReactCurrentBatchConfig,
  Yr = !0;
function Od(e, t, n, r) {
  var l = H,
    s = pn.transition;
  pn.transition = null;
  try {
    (H = 1), xo(e, t, n, r);
  } finally {
    (H = l), (pn.transition = s);
  }
}
function Md(e, t, n, r) {
  var l = H,
    s = pn.transition;
  pn.transition = null;
  try {
    (H = 4), xo(e, t, n, r);
  } finally {
    (H = l), (pn.transition = s);
  }
}
function xo(e, t, n, r) {
  if (Yr) {
    var l = js(e, t, n, r);
    if (l === null) Kl(e, t, r, Xr, n), ci(e, r);
    else if (Ad(l, e, t, n, r)) r.stopPropagation();
    else if ((ci(e, r), t & 4 && -1 < Rd.indexOf(e))) {
      for (; l !== null; ) {
        var s = pr(l);
        if (
          (s !== null && nu(s),
          (s = js(e, t, n, r)),
          s === null && Kl(e, t, r, Xr, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else Kl(e, t, r, null, n);
  }
}
var Xr = null;
function js(e, t, n, r) {
  if (((Xr = null), (e = po(r)), (e = zt(e)), e !== null))
    if (((t = Wt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ga(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xr = e), null;
}
function iu(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (_d()) {
        case mo:
          return 1;
        case Ja:
          return 4;
        case Kr:
        case Ed:
          return 16;
        case qa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xt = null,
  yo = null,
  Rr = null;
function au() {
  if (Rr) return Rr;
  var e,
    t = yo,
    n = t.length,
    r,
    l = 'value' in xt ? xt.value : xt.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[s - r]; r++);
  return (Rr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ar(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Sr() {
  return !0;
}
function fi() {
  return !1;
}
function ze(e) {
  function t(n, r, l, s, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Sr
        : fi),
      (this.isPropagationStopped = fi),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Sr));
      },
      persist: function () {},
      isPersistent: Sr,
    }),
    t
  );
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vo = ze(jn),
  fr = J({}, jn, { view: 0, detail: 0 }),
  Bd = ze(fr),
  Ol,
  Ml,
  Dn,
  xl = J({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Dn &&
            (Dn && e.type === 'mousemove'
              ? ((Ol = e.screenX - Dn.screenX), (Ml = e.screenY - Dn.screenY))
              : (Ml = Ol = 0),
            (Dn = e)),
          Ol);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ml;
    },
  }),
  pi = ze(xl),
  Vd = J({}, xl, { dataTransfer: 0 }),
  Ud = ze(Vd),
  Qd = J({}, fr, { relatedTarget: 0 }),
  Bl = ze(Qd),
  Hd = J({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wd = ze(Hd),
  bd = J({}, jn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Kd = ze(bd),
  Gd = J({}, jn, { data: 0 }),
  mi = ze(Gd),
  Yd = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Xd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Zd = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Jd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zd[e]) ? !!t[e] : !1;
}
function wo() {
  return Jd;
}
var qd = J({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = Yd[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ar(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Xd[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wo,
    charCode: function (e) {
      return e.type === 'keypress' ? Ar(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ar(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  ef = ze(qd),
  tf = J({}, xl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  hi = ze(tf),
  nf = J({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wo,
  }),
  rf = ze(nf),
  lf = J({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sf = ze(lf),
  of = J({}, xl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  af = ze(of),
  uf = [9, 13, 27, 32],
  ko = it && 'CompositionEvent' in window,
  Bn = null;
it && 'documentMode' in document && (Bn = document.documentMode);
var cf = it && 'TextEvent' in window && !Bn,
  uu = it && (!ko || (Bn && 8 < Bn && 11 >= Bn)),
  gi = ' ',
  xi = !1;
function cu(e, t) {
  switch (e) {
    case 'keyup':
      return uf.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function du(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var qt = !1;
function df(e, t) {
  switch (e) {
    case 'compositionend':
      return du(t);
    case 'keypress':
      return t.which !== 32 ? null : ((xi = !0), gi);
    case 'textInput':
      return (e = t.data), e === gi && xi ? null : e;
    default:
      return null;
  }
}
function ff(e, t) {
  if (qt)
    return e === 'compositionend' || (!ko && cu(e, t))
      ? ((e = au()), (Rr = yo = xt = null), (qt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return uu && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var pf = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!pf[e.type] : t === 'textarea';
}
function fu(e, t, n, r) {
  Qa(r),
    (t = Zr(t, 'onChange')),
    0 < t.length &&
      ((n = new vo('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vn = null,
  qn = null;
function mf(e) {
  Nu(e, 0);
}
function yl(e) {
  var t = nn(e);
  if (Aa(t)) return e;
}
function hf(e, t) {
  if (e === 'change') return t;
}
var pu = !1;
if (it) {
  var Vl;
  if (it) {
    var Ul = 'oninput' in document;
    if (!Ul) {
      var vi = document.createElement('div');
      vi.setAttribute('oninput', 'return;'),
        (Ul = typeof vi.oninput == 'function');
    }
    Vl = Ul;
  } else Vl = !1;
  pu = Vl && (!document.documentMode || 9 < document.documentMode);
}
function wi() {
  Vn && (Vn.detachEvent('onpropertychange', mu), (qn = Vn = null));
}
function mu(e) {
  if (e.propertyName === 'value' && yl(qn)) {
    var t = [];
    fu(t, qn, e, po(e)), Ka(mf, t);
  }
}
function gf(e, t, n) {
  e === 'focusin'
    ? (wi(), (Vn = t), (qn = n), Vn.attachEvent('onpropertychange', mu))
    : e === 'focusout' && wi();
}
function xf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return yl(qn);
}
function yf(e, t) {
  if (e === 'click') return yl(t);
}
function vf(e, t) {
  if (e === 'input' || e === 'change') return yl(t);
}
function wf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == 'function' ? Object.is : wf;
function er(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!os.call(t, l) || !Ke(e[l], t[l])) return !1;
  }
  return !0;
}
function ki(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Si(e, t) {
  var n = ki(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ki(n);
  }
}
function hu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? hu(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function gu() {
  for (var e = window, t = Hr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hr(e.document);
  }
  return t;
}
function So(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function kf(e) {
  var t = gu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    hu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && So(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          s = Math.min(r.start, l);
        (r = r.end === void 0 ? s : Math.min(r.end, l)),
          !e.extend && s > r && ((l = r), (r = s), (s = l)),
          (l = Si(n, s));
        var o = Si(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Sf = it && 'documentMode' in document && 11 >= document.documentMode,
  en = null,
  Cs = null,
  Un = null,
  _s = !1;
function Ni(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _s ||
    en == null ||
    en !== Hr(r) ||
    ((r = en),
    'selectionStart' in r && So(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && er(Un, r)) ||
      ((Un = r),
      (r = Zr(Cs, 'onSelect')),
      0 < r.length &&
        ((t = new vo('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = en))));
}
function Nr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var tn = {
    animationend: Nr('Animation', 'AnimationEnd'),
    animationiteration: Nr('Animation', 'AnimationIteration'),
    animationstart: Nr('Animation', 'AnimationStart'),
    transitionend: Nr('Transition', 'TransitionEnd'),
  },
  Ql = {},
  xu = {};
it &&
  ((xu = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete tn.animationend.animation,
    delete tn.animationiteration.animation,
    delete tn.animationstart.animation),
  'TransitionEvent' in window || delete tn.transitionend.transition);
function vl(e) {
  if (Ql[e]) return Ql[e];
  if (!tn[e]) return e;
  var t = tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xu) return (Ql[e] = t[n]);
  return e;
}
var yu = vl('animationend'),
  vu = vl('animationiteration'),
  wu = vl('animationstart'),
  ku = vl('transitionend'),
  Su = new Map(),
  ji =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Ft(e, t) {
  Su.set(e, t), Ht(t, [e]);
}
for (var Hl = 0; Hl < ji.length; Hl++) {
  var Wl = ji[Hl],
    Nf = Wl.toLowerCase(),
    jf = Wl[0].toUpperCase() + Wl.slice(1);
  Ft(Nf, 'on' + jf);
}
Ft(yu, 'onAnimationEnd');
Ft(vu, 'onAnimationIteration');
Ft(wu, 'onAnimationStart');
Ft('dblclick', 'onDoubleClick');
Ft('focusin', 'onFocus');
Ft('focusout', 'onBlur');
Ft(ku, 'onTransitionEnd');
gn('onMouseEnter', ['mouseout', 'mouseover']);
gn('onMouseLeave', ['mouseout', 'mouseover']);
gn('onPointerEnter', ['pointerout', 'pointerover']);
gn('onPointerLeave', ['pointerout', 'pointerover']);
Ht(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Ht(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Ht('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Ht(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Ht(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Ht(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var $n =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Cf = new Set('cancel close invalid load scroll toggle'.split(' ').concat($n));
function Ci(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Sd(r, t, void 0, e), (e.currentTarget = null);
}
function Nu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            d = a.currentTarget;
          if (((a = a.listener), u !== s && l.isPropagationStopped())) break e;
          Ci(l, a, d), (s = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (d = a.currentTarget),
            (a = a.listener),
            u !== s && l.isPropagationStopped())
          )
            break e;
          Ci(l, a, d), (s = u);
        }
    }
  }
  if (br) throw ((e = ks), (br = !1), (ks = null), e);
}
function K(e, t) {
  var n = t[Ls];
  n === void 0 && (n = t[Ls] = new Set());
  var r = e + '__bubble';
  n.has(r) || (ju(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), ju(n, e, r, t);
}
var jr = '_reactListening' + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[jr]) {
    (e[jr] = !0),
      La.forEach(function (n) {
        n !== 'selectionchange' && (Cf.has(n) || bl(n, !1, e), bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jr] || ((t[jr] = !0), bl('selectionchange', !1, t));
  }
}
function ju(e, t, n, r) {
  switch (iu(t)) {
    case 1:
      var l = Od;
      break;
    case 4:
      l = Md;
      break;
    default:
      l = xo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ws ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Kl(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = zt(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ka(function () {
    var d = s,
      v = po(n),
      x = [];
    e: {
      var p = Su.get(e);
      if (p !== void 0) {
        var y = vo,
          k = e;
        switch (e) {
          case 'keypress':
            if (Ar(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            y = ef;
            break;
          case 'focusin':
            (k = 'focus'), (y = Bl);
            break;
          case 'focusout':
            (k = 'blur'), (y = Bl);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = Bl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = pi;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Ud;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = rf;
            break;
          case yu:
          case vu:
          case wu:
            y = Wd;
            break;
          case ku:
            y = sf;
            break;
          case 'scroll':
            y = Bd;
            break;
          case 'wheel':
            y = af;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = Kd;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = hi;
        }
        var N = (t & 4) !== 0,
          T = !N && e === 'scroll',
          f = N ? (p !== null ? p + 'Capture' : null) : p;
        N = [];
        for (var c = d, m; c !== null; ) {
          m = c;
          var g = m.stateNode;
          if (
            (m.tag === 5 &&
              g !== null &&
              ((m = g),
              f !== null && ((g = Yn(c, f)), g != null && N.push(nr(c, g, m)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < N.length &&
          ((p = new y(p, k, null, n, v)), x.push({ event: p, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== ys &&
            (k = n.relatedTarget || n.fromElement) &&
            (zt(k) || k[at]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            v.window === v
              ? v
              : (p = v.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((k = n.relatedTarget || n.toElement),
              (y = d),
              (k = k ? zt(k) : null),
              k !== null &&
                ((T = Wt(k)), k !== T || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((y = null), (k = d)),
          y !== k)
        ) {
          if (
            ((N = pi),
            (g = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((N = hi),
              (g = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (T = y == null ? p : nn(y)),
            (m = k == null ? p : nn(k)),
            (p = new N(g, c + 'leave', y, n, v)),
            (p.target = T),
            (p.relatedTarget = m),
            (g = null),
            zt(v) === d &&
              ((N = new N(f, c + 'enter', k, n, v)),
              (N.target = m),
              (N.relatedTarget = T),
              (g = N)),
            (T = g),
            y && k)
          )
            t: {
              for (N = y, f = k, c = 0, m = N; m; m = Gt(m)) c++;
              for (m = 0, g = f; g; g = Gt(g)) m++;
              for (; 0 < c - m; ) (N = Gt(N)), c--;
              for (; 0 < m - c; ) (f = Gt(f)), m--;
              for (; c--; ) {
                if (N === f || (f !== null && N === f.alternate)) break t;
                (N = Gt(N)), (f = Gt(f));
              }
              N = null;
            }
          else N = null;
          y !== null && _i(x, p, y, N, !1),
            k !== null && T !== null && _i(x, T, k, N, !0);
        }
      }
      e: {
        if (
          ((p = d ? nn(d) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var w = hf;
        else if (yi(p))
          if (pu) w = vf;
          else {
            w = xf;
            var C = gf;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (w = yf);
        if (w && (w = w(e, d))) {
          fu(x, w, n, v);
          break e;
        }
        C && C(e, p, d),
          e === 'focusout' &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === 'number' &&
            ps(p, 'number', p.value);
      }
      switch (((C = d ? nn(d) : window), e)) {
        case 'focusin':
          (yi(C) || C.contentEditable === 'true') &&
            ((en = C), (Cs = d), (Un = null));
          break;
        case 'focusout':
          Un = Cs = en = null;
          break;
        case 'mousedown':
          _s = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (_s = !1), Ni(x, n, v);
          break;
        case 'selectionchange':
          if (Sf) break;
        case 'keydown':
        case 'keyup':
          Ni(x, n, v);
      }
      var S;
      if (ko)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart';
              break e;
            case 'compositionend':
              _ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              _ = 'onCompositionUpdate';
              break e;
          }
          _ = void 0;
        }
      else
        qt
          ? cu(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      _ &&
        (uu &&
          n.locale !== 'ko' &&
          (qt || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && qt && (S = au())
            : ((xt = v),
              (yo = 'value' in xt ? xt.value : xt.textContent),
              (qt = !0))),
        (C = Zr(d, _)),
        0 < C.length &&
          ((_ = new mi(_, e, null, n, v)),
          x.push({ event: _, listeners: C }),
          S ? (_.data = S) : ((S = du(n)), S !== null && (_.data = S)))),
        (S = cf ? df(e, n) : ff(e, n)) &&
          ((d = Zr(d, 'onBeforeInput')),
          0 < d.length &&
            ((v = new mi('onBeforeInput', 'beforeinput', null, n, v)),
            x.push({ event: v, listeners: d }),
            (v.data = S)));
    }
    Nu(x, t);
  });
}
function nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = Yn(e, n)),
      s != null && r.unshift(nr(e, s, l)),
      (s = Yn(e, t)),
      s != null && r.push(nr(e, s, l))),
      (e = e.return);
  }
  return r;
}
function Gt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _i(e, t, n, r, l) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      d = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      d !== null &&
      ((a = d),
      l
        ? ((u = Yn(n, s)), u != null && o.unshift(nr(n, u, a)))
        : l || ((u = Yn(n, s)), u != null && o.push(nr(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _f = /\r\n?/g,
  Ef = /\u0000|\uFFFD/g;
function Ei(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      _f,
      `
`
    )
    .replace(Ef, '');
}
function Cr(e, t, n) {
  if (((t = Ei(t)), Ei(e) !== t && n)) throw Error(E(425));
}
function Jr() {}
var Es = null,
  Ps = null;
function Fs(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ds = typeof setTimeout == 'function' ? setTimeout : void 0,
  Pf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Pi = typeof Promise == 'function' ? Promise : void 0,
  Ff =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Pi < 'u'
        ? function (e) {
            return Pi.resolve(null).then(e).catch(Df);
          }
        : Ds;
function Df(e) {
  setTimeout(function () {
    throw e;
  });
}
function Gl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Jn(t);
}
function St(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Fi(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Cn = Math.random().toString(36).slice(2),
  Je = '__reactFiber$' + Cn,
  rr = '__reactProps$' + Cn,
  at = '__reactContainer$' + Cn,
  Ls = '__reactEvents$' + Cn,
  Lf = '__reactListeners$' + Cn,
  Tf = '__reactHandles$' + Cn;
function zt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fi(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = Fi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pr(e) {
  return (
    (e = e[Je] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function wl(e) {
  return e[rr] || null;
}
var Ts = [],
  rn = -1;
function Dt(e) {
  return { current: e };
}
function G(e) {
  0 > rn || ((e.current = Ts[rn]), (Ts[rn] = null), rn--);
}
function b(e, t) {
  rn++, (Ts[rn] = e.current), (e.current = t);
}
var Pt = {},
  he = Dt(Pt),
  Ce = Dt(!1),
  Mt = Pt;
function xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    s;
  for (s in n) l[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function _e(e) {
  return (e = e.childContextTypes), e != null;
}
function qr() {
  G(Ce), G(he);
}
function Di(e, t, n) {
  if (he.current !== Pt) throw Error(E(168));
  b(he, t), b(Ce, n);
}
function Cu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, hd(e) || 'Unknown', l));
  return J({}, n, r);
}
function el(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pt),
    (Mt = he.current),
    b(he, e),
    b(Ce, Ce.current),
    !0
  );
}
function Li(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Cu(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Ce),
      G(he),
      b(he, e))
    : G(Ce),
    b(Ce, n);
}
var nt = null,
  kl = !1,
  Yl = !1;
function _u(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
function If(e) {
  (kl = !0), _u(e);
}
function Lt() {
  if (!Yl && nt !== null) {
    Yl = !0;
    var e = 0,
      t = H;
    try {
      var n = nt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (nt = null), (kl = !1);
    } catch (l) {
      throw (nt !== null && (nt = nt.slice(e + 1)), Za(mo, Lt), l);
    } finally {
      (H = t), (Yl = !1);
    }
  }
  return null;
}
var ln = [],
  sn = 0,
  tl = null,
  nl = 0,
  Re = [],
  Ae = 0,
  Bt = null,
  lt = 1,
  st = '';
function Tt(e, t) {
  (ln[sn++] = nl), (ln[sn++] = tl), (tl = e), (nl = t);
}
function Eu(e, t, n) {
  (Re[Ae++] = lt), (Re[Ae++] = st), (Re[Ae++] = Bt), (Bt = e);
  var r = lt;
  e = st;
  var l = 32 - We(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var s = 32 - We(t) + l;
  if (30 < s) {
    var o = l - (l % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (lt = (1 << (32 - We(t) + l)) | (n << l) | r),
      (st = s + e);
  } else (lt = (1 << s) | (n << l) | r), (st = e);
}
function No(e) {
  e.return !== null && (Tt(e, 1), Eu(e, 1, 0));
}
function jo(e) {
  for (; e === tl; )
    (tl = ln[--sn]), (ln[sn] = null), (nl = ln[--sn]), (ln[sn] = null);
  for (; e === Bt; )
    (Bt = Re[--Ae]),
      (Re[Ae] = null),
      (st = Re[--Ae]),
      (Re[Ae] = null),
      (lt = Re[--Ae]),
      (Re[Ae] = null);
}
var Le = null,
  De = null,
  Y = !1,
  He = null;
function Pu(e, t) {
  var n = $e(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ti(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (De = St(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Bt !== null ? { id: lt, overflow: st } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Is(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zs(e) {
  if (Y) {
    var t = De;
    if (t) {
      var n = t;
      if (!Ti(e, t)) {
        if (Is(e)) throw Error(E(418));
        t = St(n.nextSibling);
        var r = Le;
        t && Ti(e, t)
          ? Pu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Le = e));
      }
    } else {
      if (Is(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (Le = e);
    }
  }
}
function Ii(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function _r(e) {
  if (e !== Le) return !1;
  if (!Y) return Ii(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Fs(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (Is(e)) throw (Fu(), Error(E(418)));
    for (; t; ) Pu(e, t), (t = St(t.nextSibling));
  }
  if ((Ii(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              De = St(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Le ? St(e.stateNode.nextSibling) : null;
  return !0;
}
function Fu() {
  for (var e = De; e; ) e = St(e.nextSibling);
}
function yn() {
  (De = Le = null), (Y = !1);
}
function Co(e) {
  He === null ? (He = [e]) : He.push(e);
}
var zf = dt.ReactCurrentBatchConfig;
function Ln(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r,
        s = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != 'string') throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Er(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function zi(e) {
  var t = e._init;
  return t(e._payload);
}
function Du(e) {
  function t(f, c) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = _t(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function s(f, c, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, c, m, g) {
    return c === null || c.tag !== 6
      ? ((c = ns(m, f.mode, g)), (c.return = f), c)
      : ((c = l(c, m)), (c.return = f), c);
  }
  function u(f, c, m, g) {
    var w = m.type;
    return w === Jt
      ? v(f, c, m.props.children, g, m.key)
      : c !== null &&
          (c.elementType === w ||
            (typeof w == 'object' &&
              w !== null &&
              w.$$typeof === pt &&
              zi(w) === c.type))
        ? ((g = l(c, m.props)), (g.ref = Ln(f, c, m)), (g.return = f), g)
        : ((g = Qr(m.type, m.key, m.props, null, f.mode, g)),
          (g.ref = Ln(f, c, m)),
          (g.return = f),
          g);
  }
  function d(f, c, m, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = rs(m, f.mode, g)), (c.return = f), c)
      : ((c = l(c, m.children || [])), (c.return = f), c);
  }
  function v(f, c, m, g, w) {
    return c === null || c.tag !== 7
      ? ((c = Ot(m, f.mode, g, w)), (c.return = f), c)
      : ((c = l(c, m)), (c.return = f), c);
  }
  function x(f, c, m) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = ns('' + c, f.mode, m)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case gr:
          return (
            (m = Qr(c.type, c.key, c.props, null, f.mode, m)),
            (m.ref = Ln(f, null, c)),
            (m.return = f),
            m
          );
        case Zt:
          return (c = rs(c, f.mode, m)), (c.return = f), c;
        case pt:
          var g = c._init;
          return x(f, g(c._payload), m);
      }
      if (Rn(c) || _n(c))
        return (c = Ot(c, f.mode, m, null)), (c.return = f), c;
      Er(f, c);
    }
    return null;
  }
  function p(f, c, m, g) {
    var w = c !== null ? c.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return w !== null ? null : a(f, c, '' + m, g);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case gr:
          return m.key === w ? u(f, c, m, g) : null;
        case Zt:
          return m.key === w ? d(f, c, m, g) : null;
        case pt:
          return (w = m._init), p(f, c, w(m._payload), g);
      }
      if (Rn(m) || _n(m)) return w !== null ? null : v(f, c, m, g, null);
      Er(f, m);
    }
    return null;
  }
  function y(f, c, m, g, w) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (f = f.get(m) || null), a(c, f, '' + g, w);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case gr:
          return (f = f.get(g.key === null ? m : g.key) || null), u(c, f, g, w);
        case Zt:
          return (f = f.get(g.key === null ? m : g.key) || null), d(c, f, g, w);
        case pt:
          var C = g._init;
          return y(f, c, m, C(g._payload), w);
      }
      if (Rn(g) || _n(g)) return (f = f.get(m) || null), v(c, f, g, w, null);
      Er(c, g);
    }
    return null;
  }
  function k(f, c, m, g) {
    for (
      var w = null, C = null, S = c, _ = (c = 0), F = null;
      S !== null && _ < m.length;
      _++
    ) {
      S.index > _ ? ((F = S), (S = null)) : (F = S.sibling);
      var A = p(f, S, m[_], g);
      if (A === null) {
        S === null && (S = F);
        break;
      }
      e && S && A.alternate === null && t(f, S),
        (c = s(A, c, _)),
        C === null ? (w = A) : (C.sibling = A),
        (C = A),
        (S = F);
    }
    if (_ === m.length) return n(f, S), Y && Tt(f, _), w;
    if (S === null) {
      for (; _ < m.length; _++)
        (S = x(f, m[_], g)),
          S !== null &&
            ((c = s(S, c, _)), C === null ? (w = S) : (C.sibling = S), (C = S));
      return Y && Tt(f, _), w;
    }
    for (S = r(f, S); _ < m.length; _++)
      (F = y(S, f, _, m[_], g)),
        F !== null &&
          (e && F.alternate !== null && S.delete(F.key === null ? _ : F.key),
          (c = s(F, c, _)),
          C === null ? (w = F) : (C.sibling = F),
          (C = F));
    return (
      e &&
        S.forEach(function (W) {
          return t(f, W);
        }),
      Y && Tt(f, _),
      w
    );
  }
  function N(f, c, m, g) {
    var w = _n(m);
    if (typeof w != 'function') throw Error(E(150));
    if (((m = w.call(m)), m == null)) throw Error(E(151));
    for (
      var C = (w = null), S = c, _ = (c = 0), F = null, A = m.next();
      S !== null && !A.done;
      _++, A = m.next()
    ) {
      S.index > _ ? ((F = S), (S = null)) : (F = S.sibling);
      var W = p(f, S, A.value, g);
      if (W === null) {
        S === null && (S = F);
        break;
      }
      e && S && W.alternate === null && t(f, S),
        (c = s(W, c, _)),
        C === null ? (w = W) : (C.sibling = W),
        (C = W),
        (S = F);
    }
    if (A.done) return n(f, S), Y && Tt(f, _), w;
    if (S === null) {
      for (; !A.done; _++, A = m.next())
        (A = x(f, A.value, g)),
          A !== null &&
            ((c = s(A, c, _)), C === null ? (w = A) : (C.sibling = A), (C = A));
      return Y && Tt(f, _), w;
    }
    for (S = r(f, S); !A.done; _++, A = m.next())
      (A = y(S, f, _, A.value, g)),
        A !== null &&
          (e && A.alternate !== null && S.delete(A.key === null ? _ : A.key),
          (c = s(A, c, _)),
          C === null ? (w = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        S.forEach(function (de) {
          return t(f, de);
        }),
      Y && Tt(f, _),
      w
    );
  }
  function T(f, c, m, g) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Jt &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case gr:
          e: {
            for (var w = m.key, C = c; C !== null; ) {
              if (C.key === w) {
                if (((w = m.type), w === Jt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (c = l(C, m.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  C.elementType === w ||
                  (typeof w == 'object' &&
                    w !== null &&
                    w.$$typeof === pt &&
                    zi(w) === C.type)
                ) {
                  n(f, C.sibling),
                    (c = l(C, m.props)),
                    (c.ref = Ln(f, C, m)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            m.type === Jt
              ? ((c = Ot(m.props.children, f.mode, g, m.key)),
                (c.return = f),
                (f = c))
              : ((g = Qr(m.type, m.key, m.props, null, f.mode, g)),
                (g.ref = Ln(f, c, m)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Zt:
          e: {
            for (C = m.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, m.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = rs(m, f.mode, g)), (c.return = f), (f = c);
          }
          return o(f);
        case pt:
          return (C = m._init), T(f, c, C(m._payload), g);
      }
      if (Rn(m)) return k(f, c, m, g);
      if (_n(m)) return N(f, c, m, g);
      Er(f, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, m)), (c.return = f), (f = c))
          : (n(f, c), (c = ns(m, f.mode, g)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return T;
}
var vn = Du(!0),
  Lu = Du(!1),
  rl = Dt(null),
  ll = null,
  on = null,
  _o = null;
function Eo() {
  _o = on = ll = null;
}
function Po(e) {
  var t = rl.current;
  G(rl), (e._currentValue = t);
}
function Rs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mn(e, t) {
  (ll = e),
    (_o = on = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (_o !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), on === null)) {
      if (ll === null) throw Error(E(308));
      (on = e), (ll.dependencies = { lanes: 0, firstContext: e });
    } else on = on.next = e;
  return t;
}
var Rt = null;
function Fo(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function Tu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Fo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ut(e, r)
  );
}
function ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function Do(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Iu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ut(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Fo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n);
  }
}
function Ri(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (l = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (l = s = t) : (s = s.next = t);
    } else l = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function sl(e, t, n, r) {
  var l = e.updateQueue;
  mt = !1;
  var s = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      d = u.next;
    (u.next = null), o === null ? (s = d) : (o.next = d), (o = u);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (a = v.lastBaseUpdate),
      a !== o &&
        (a === null ? (v.firstBaseUpdate = d) : (a.next = d),
        (v.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var x = l.baseState;
    (o = 0), (v = d = u = null), (a = s);
    do {
      var p = a.lane,
        y = a.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var k = e,
            N = a;
          switch (((p = t), (y = n), N.tag)) {
            case 1:
              if (((k = N.payload), typeof k == 'function')) {
                x = k.call(y, x, p);
                break e;
              }
              x = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = N.payload),
                (p = typeof k == 'function' ? k.call(y, x, p) : k),
                p == null)
              )
                break e;
              x = J({}, x, p);
              break e;
            case 2:
              mt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          v === null ? ((d = v = y), (u = x)) : (v = v.next = y),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (u = x),
      (l.baseState = u),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    (Ut |= o), (e.lanes = o), (e.memoizedState = x);
  }
}
function Ai(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var mr = {},
  et = Dt(mr),
  lr = Dt(mr),
  sr = Dt(mr);
function At(e) {
  if (e === mr) throw Error(E(174));
  return e;
}
function Lo(e, t) {
  switch ((b(sr, t), b(lr, e), b(et, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hs(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = hs(t, e));
  }
  G(et), b(et, t);
}
function wn() {
  G(et), G(lr), G(sr);
}
function zu(e) {
  At(sr.current);
  var t = At(et.current),
    n = hs(t, e.type);
  t !== n && (b(lr, e), b(et, n));
}
function To(e) {
  lr.current === e && (G(et), G(lr));
}
var X = Dt(0);
function ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Xl = [];
function Io() {
  for (var e = 0; e < Xl.length; e++)
    Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Or = dt.ReactCurrentDispatcher,
  Zl = dt.ReactCurrentBatchConfig,
  Vt = 0,
  Z = null,
  re = null,
  se = null,
  il = !1,
  Qn = !1,
  or = 0,
  Rf = 0;
function fe() {
  throw Error(E(321));
}
function zo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ke(e[n], t[n])) return !1;
  return !0;
}
function Ro(e, t, n, r, l, s) {
  if (
    ((Vt = s),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Or.current = e === null || e.memoizedState === null ? Mf : Bf),
    (e = n(r, l)),
    Qn)
  ) {
    s = 0;
    do {
      if (((Qn = !1), (or = 0), 25 <= s)) throw Error(E(301));
      (s += 1),
        (se = re = null),
        (t.updateQueue = null),
        (Or.current = Vf),
        (e = n(r, l));
    } while (Qn);
  }
  if (
    ((Or.current = al),
    (t = re !== null && re.next !== null),
    (Vt = 0),
    (se = re = Z = null),
    (il = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Ao() {
  var e = or !== 0;
  return (or = 0), e;
}
function Ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (Z.memoizedState = se = e) : (se = se.next = e), se;
}
function Be() {
  if (re === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? Z.memoizedState : se.next;
  if (t !== null) (se = t), (re = e);
  else {
    if (e === null) throw Error(E(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      se === null ? (Z.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function ir(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Jl(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = re,
    l = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = s.next), (s.next = o);
    }
    (r.baseQueue = l = s), (n.pending = null);
  }
  if (l !== null) {
    (s = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      d = s;
    do {
      var v = d.lane;
      if ((Vt & v) === v)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var x = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        u === null ? ((a = u = x), (o = r)) : (u = u.next = x),
          (Z.lanes |= v),
          (Ut |= v);
      }
      d = d.next;
    } while (d !== null && d !== s);
    u === null ? (o = r) : (u.next = a),
      Ke(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (s = l.lane), (Z.lanes |= s), (Ut |= s), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ql(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== l);
    Ke(s, t.memoizedState) || (je = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Ru() {}
function Au(e, t) {
  var n = Z,
    r = Be(),
    l = t(),
    s = !Ke(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (je = !0)),
    (r = r.queue),
    $o(Mu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ar(9, Ou.bind(null, n, r, l, t), void 0, null),
      oe === null)
    )
      throw Error(E(349));
    Vt & 30 || $u(n, t, l);
  }
  return l;
}
function $u(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ou(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bu(t) && Vu(e);
}
function Mu(e, t, n) {
  return n(function () {
    Bu(t) && Vu(e);
  });
}
function Bu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ke(e, n);
  } catch {
    return !0;
  }
}
function Vu(e) {
  var t = ut(e, 1);
  t !== null && be(t, e, 1, -1);
}
function $i(e) {
  var t = Ze();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Of.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Uu() {
  return Be().memoizedState;
}
function Mr(e, t, n, r) {
  var l = Ze();
  (Z.flags |= e),
    (l.memoizedState = ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function Sl(e, t, n, r) {
  var l = Be();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (re !== null) {
    var o = re.memoizedState;
    if (((s = o.destroy), r !== null && zo(r, o.deps))) {
      l.memoizedState = ar(t, n, s, r);
      return;
    }
  }
  (Z.flags |= e), (l.memoizedState = ar(1 | t, n, s, r));
}
function Oi(e, t) {
  return Mr(8390656, 8, e, t);
}
function $o(e, t) {
  return Sl(2048, 8, e, t);
}
function Qu(e, t) {
  return Sl(4, 2, e, t);
}
function Hu(e, t) {
  return Sl(4, 4, e, t);
}
function Wu(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Sl(4, 4, Wu.bind(null, t, e), n)
  );
}
function Oo() {}
function Ku(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Gu(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Yu(e, t, n) {
  return Vt & 21
    ? (Ke(n, t) || ((n = eu()), (Z.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function Af(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zl.transition;
  Zl.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (Zl.transition = r);
  }
}
function Xu() {
  return Be().memoizedState;
}
function $f(e, t, n) {
  var r = Ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zu(e))
  )
    Ju(t, n);
  else if (((n = Tu(e, t, n, r)), n !== null)) {
    var l = xe();
    be(n, e, r, l), qu(n, t, r);
  }
}
function Of(e, t, n) {
  var r = Ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zu(e)) Ju(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Ke(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Fo(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Tu(e, t, l, r)),
      n !== null && ((l = xe()), be(n, e, r, l), qu(n, t, r));
  }
}
function Zu(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function Ju(e, t) {
  Qn = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function qu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n);
  }
}
var al = {
    readContext: Me,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  Mf = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Ze().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: Oi,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mr(4194308, 4, Wu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ze();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ze();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = $f.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ze();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $i,
    useDebugValue: Oo,
    useDeferredValue: function (e) {
      return (Ze().memoizedState = e);
    },
    useTransition: function () {
      var e = $i(!1),
        t = e[0];
      return (e = Af.bind(null, e[1])), (Ze().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        l = Ze();
      if (Y) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(E(349));
        Vt & 30 || $u(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        Oi(Mu.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ar(9, Ou.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ze(),
        t = oe.identifierPrefix;
      if (Y) {
        var n = st,
          r = lt;
        (n = (r & ~(1 << (32 - We(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = or++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Rf++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Bf = {
    readContext: Me,
    useCallback: Ku,
    useContext: Me,
    useEffect: $o,
    useImperativeHandle: bu,
    useInsertionEffect: Qu,
    useLayoutEffect: Hu,
    useMemo: Gu,
    useReducer: Jl,
    useRef: Uu,
    useState: function () {
      return Jl(ir);
    },
    useDebugValue: Oo,
    useDeferredValue: function (e) {
      var t = Be();
      return Yu(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(ir)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Ru,
    useSyncExternalStore: Au,
    useId: Xu,
    unstable_isNewReconciler: !1,
  },
  Vf = {
    readContext: Me,
    useCallback: Ku,
    useContext: Me,
    useEffect: $o,
    useImperativeHandle: bu,
    useInsertionEffect: Qu,
    useLayoutEffect: Hu,
    useMemo: Gu,
    useReducer: ql,
    useRef: Uu,
    useState: function () {
      return ql(ir);
    },
    useDebugValue: Oo,
    useDeferredValue: function (e) {
      var t = Be();
      return re === null ? (t.memoizedState = e) : Yu(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = ql(ir)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Ru,
    useSyncExternalStore: Au,
    useId: Xu,
    unstable_isNewReconciler: !1,
  };
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function As(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      l = Ct(e),
      s = ot(r, l);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Nt(e, s, l)),
      t !== null && (be(t, e, l, r), $r(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      l = Ct(e),
      s = ot(r, l);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Nt(e, s, l)),
      t !== null && (be(t, e, l, r), $r(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = Ct(e),
      l = ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Nt(e, l, r)),
      t !== null && (be(t, e, r, n), $r(t, e, r));
  },
};
function Mi(e, t, n, r, l, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !er(n, r) || !er(l, s)
        : !0
  );
}
function ec(e, t, n) {
  var r = !1,
    l = Pt,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Me(s))
      : ((l = _e(t) ? Mt : he.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? xn(e, l) : Pt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Nl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Bi(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
}
function $s(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Do(e);
  var s = t.contextType;
  typeof s == 'object' && s !== null
    ? (l.context = Me(s))
    : ((s = _e(t) ? Mt : he.current), (l.context = xn(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (As(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Nl.enqueueReplaceState(l, l.state, null),
      sl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function kn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += md(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (s) {
    l =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function es(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Os(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Uf = typeof WeakMap == 'function' ? WeakMap : Map;
function tc(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      cl || ((cl = !0), (Gs = r)), Os(e, t);
    }),
    n
  );
}
function nc(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Os(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        Os(e, t),
          typeof r != 'function' &&
            (jt === null ? (jt = new Set([this])) : jt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function Vi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = np.bind(null, e, t, n)), t.then(e, e));
}
function Ui(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qi(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ot(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Qf = dt.ReactCurrentOwner,
  je = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Lu(t, null, n, r) : vn(t, e.child, n, r);
}
function Hi(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    mn(t, l),
    (r = Ro(e, t, n, r, s, l)),
    (n = Ao()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (Y && n && No(t), (t.flags |= 1), ge(e, t, r, l), t.child)
  );
}
function Wi(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !bo(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), rc(e, t, s, r, l))
      : ((e = Qr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : er), n(o, r) && e.ref === t.ref)
    )
      return ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = _t(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function rc(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (er(s, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (je = !0);
      else return (t.lanes = e.lanes), ct(e, t, l);
  }
  return Ms(e, t, n, r, l);
}
function lc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(un, Fe),
        (Fe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(un, Fe),
          (Fe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        b(un, Fe),
        (Fe |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(un, Fe),
      (Fe |= r);
  return ge(e, t, l, n), t.child;
}
function sc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ms(e, t, n, r, l) {
  var s = _e(n) ? Mt : he.current;
  return (
    (s = xn(t, s)),
    mn(t, l),
    (n = Ro(e, t, n, r, s, l)),
    (r = Ao()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (Y && r && No(t), (t.flags |= 1), ge(e, t, n, l), t.child)
  );
}
function bi(e, t, n, r, l) {
  if (_e(n)) {
    var s = !0;
    el(t);
  } else s = !1;
  if ((mn(t, l), t.stateNode === null))
    Br(e, t), ec(t, n, r), $s(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      d = n.contextType;
    typeof d == 'object' && d !== null
      ? (d = Me(d))
      : ((d = _e(n) ? Mt : he.current), (d = xn(t, d)));
    var v = n.getDerivedStateFromProps,
      x =
        typeof v == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    x ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== d) && Bi(t, o, r, d)),
      (mt = !1);
    var p = t.memoizedState;
    (o.state = p),
      sl(t, r, o, l),
      (u = t.memoizedState),
      a !== r || p !== u || Ce.current || mt
        ? (typeof v == 'function' && (As(t, n, v, r), (u = t.memoizedState)),
          (a = mt || Mi(t, n, a, r, p, u, d))
            ? (x ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = d),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Iu(e, t),
      (a = t.memoizedProps),
      (d = t.type === t.elementType ? a : Ue(t.type, a)),
      (o.props = d),
      (x = t.pendingProps),
      (p = o.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = Me(u))
        : ((u = _e(n) ? Mt : he.current), (u = xn(t, u)));
    var y = n.getDerivedStateFromProps;
    (v =
      typeof y == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== x || p !== u) && Bi(t, o, r, u)),
      (mt = !1),
      (p = t.memoizedState),
      (o.state = p),
      sl(t, r, o, l);
    var k = t.memoizedState;
    a !== x || p !== k || Ce.current || mt
      ? (typeof y == 'function' && (As(t, n, y, r), (k = t.memoizedState)),
        (d = mt || Mi(t, n, d, r, p, k, u) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, k, u),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, k, u)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = u),
        (r = d))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bs(e, t, n, r, s, l);
}
function Bs(e, t, n, r, l, s) {
  sc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Li(t, n, !1), ct(e, t, s);
  (r = t.stateNode), (Qf.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = vn(t, e.child, null, s)), (t.child = vn(t, null, a, s)))
      : ge(e, t, a, s),
    (t.memoizedState = r.state),
    l && Li(t, n, !0),
    t.child
  );
}
function oc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Di(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Di(e, t.context, !1),
    Lo(e, t.containerInfo);
}
function Ki(e, t, n, r, l) {
  return yn(), Co(l), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var Vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Us(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ic(e, t, n) {
  var r = t.pendingProps,
    l = X.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(X, l & 1),
    e === null)
  )
    return (
      zs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = _l(o, r, 0, null)),
              (e = Ot(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Us(n)),
              (t.memoizedState = Vs),
              e)
            : Mo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Hf(e, t, o, r, a, l, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = _t(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (s = _t(a, s)) : ((s = Ot(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Us(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vs),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = _t(s, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Mo(e, t) {
  return (
    (t = _l({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pr(e, t, n, r) {
  return (
    r !== null && Co(r),
    vn(t, e.child, null, n),
    (e = Mo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Hf(e, t, n, r, l, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = es(Error(E(422)))), Pr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (l = t.mode),
          (r = _l({ mode: 'visible', children: r.children }, l, 0, null)),
          (s = Ot(s, l, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && vn(t, e.child, null, o),
          (t.child.memoizedState = Us(o)),
          (t.memoizedState = Vs),
          s);
  if (!(t.mode & 1)) return Pr(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(E(419))), (r = es(s, r, void 0)), Pr(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), je || a)) {
    if (((r = oe), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== s.retryLane &&
          ((s.retryLane = l), ut(e, l), be(r, e, l, -1));
    }
    return Wo(), (r = es(Error(E(421)))), Pr(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (De = St(l.nextSibling)),
      (Le = t),
      (Y = !0),
      (He = null),
      e !== null &&
        ((Re[Ae++] = lt),
        (Re[Ae++] = st),
        (Re[Ae++] = Bt),
        (lt = e.id),
        (st = e.overflow),
        (Bt = t)),
      (t = Mo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Gi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Rs(e.return, t, n);
}
function ts(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = l));
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((ge(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gi(e, n, t);
        else if (e.tag === 19) Gi(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ol(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ts(t, !1, l, n, s);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ol(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ts(t, !0, n, null, s);
        break;
      case 'together':
        ts(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Br(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wf(e, t, n) {
  switch (t.tag) {
    case 3:
      oc(t), yn();
      break;
    case 5:
      zu(t);
      break;
    case 1:
      _e(t.type) && el(t);
      break;
    case 4:
      Lo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(rl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ic(e, t, n)
            : (b(X, X.current & 1),
              (e = ct(e, t, n)),
              e !== null ? e.sibling : null);
      b(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ac(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), lc(e, t, n);
  }
  return ct(e, t, n);
}
var uc, Qs, cc, dc;
uc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Qs = function () {};
cc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), At(et.current);
    var s = null;
    switch (n) {
      case 'input':
        (l = ds(e, l)), (r = ds(e, r)), (s = []);
        break;
      case 'select':
        (l = J({}, l, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (s = []);
        break;
      case 'textarea':
        (l = ms(e, l)), (r = ms(e, r)), (s = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Jr);
    }
    gs(n, r);
    var o;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === 'style') {
          var a = l[d];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          d !== 'dangerouslySetInnerHTML' &&
            d !== 'children' &&
            d !== 'suppressContentEditableWarning' &&
            d !== 'suppressHydrationWarning' &&
            d !== 'autoFocus' &&
            (Kn.hasOwnProperty(d)
              ? s || (s = [])
              : (s = s || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (
        ((a = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && u !== a && (u != null || a != null))
      )
        if (d === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (s || (s = []), s.push(d, n)), (n = u);
        else
          d === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (s = s || []).push(d, u))
            : d === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (s = s || []).push(d, '' + u)
              : d !== 'suppressContentEditableWarning' &&
                d !== 'suppressHydrationWarning' &&
                (Kn.hasOwnProperty(d)
                  ? (u != null && d === 'onScroll' && K('scroll', e),
                    s || a === u || (s = []))
                  : (s = s || []).push(d, u));
    }
    n && (s = s || []).push('style', n);
    var d = s;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
dc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bf(e, t, n) {
  var r = t.pendingProps;
  switch ((jo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return _e(t.type) && qr(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wn(),
        G(Ce),
        G(he),
        Io(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), He !== null && (Zs(He), (He = null)))),
        Qs(e, t),
        pe(t),
        null
      );
    case 5:
      To(t);
      var l = At(sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        cc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return pe(t), null;
        }
        if (((e = At(et.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Je] = t), (r[rr] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              K('cancel', r), K('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              K('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < $n.length; l++) K($n[l], r);
              break;
            case 'source':
              K('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              K('error', r), K('load', r);
              break;
            case 'details':
              K('toggle', r);
              break;
            case 'input':
              ri(r, s), K('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                K('invalid', r);
              break;
            case 'textarea':
              si(r, s), K('invalid', r);
          }
          gs(n, s), (l = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : Kn.hasOwnProperty(o) &&
                  a != null &&
                  o === 'onScroll' &&
                  K('scroll', r);
            }
          switch (n) {
            case 'input':
              xr(r), li(r, s, !0);
              break;
            case 'textarea':
              xr(r), oi(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = Jr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ma(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Je] = t),
            (e[rr] = r),
            uc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = xs(n, r)), n)) {
              case 'dialog':
                K('cancel', e), K('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                K('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < $n.length; l++) K($n[l], e);
                l = r;
                break;
              case 'source':
                K('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                K('error', e), K('load', e), (l = r);
                break;
              case 'details':
                K('toggle', e), (l = r);
                break;
              case 'input':
                ri(e, r), (l = ds(e, r)), K('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = J({}, r, { value: void 0 })),
                  K('invalid', e);
                break;
              case 'textarea':
                si(e, r), (l = ms(e, r)), K('invalid', e);
                break;
              default:
                l = r;
            }
            gs(n, l), (a = l);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var u = a[s];
                s === 'style'
                  ? Ua(e, u)
                  : s === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Ba(e, u))
                    : s === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && Gn(e, u)
                        : typeof u == 'number' && Gn(e, '' + u)
                      : s !== 'suppressContentEditableWarning' &&
                        s !== 'suppressHydrationWarning' &&
                        s !== 'autoFocus' &&
                        (Kn.hasOwnProperty(s)
                          ? u != null && s === 'onScroll' && K('scroll', e)
                          : u != null && ao(e, s, u, o));
              }
            switch (n) {
              case 'input':
                xr(e), li(e, r, !1);
                break;
              case 'textarea':
                xr(e), oi(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Et(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? cn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      cn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Jr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(E(166));
        if (((n = At(sr.current)), At(et.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (s = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (G(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && De !== null && t.mode & 1 && !(t.flags & 128))
          Fu(), yn(), (t.flags |= 98560), (s = !1);
        else if (((s = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(E(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(E(317));
            s[Je] = t;
          } else
            yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (s = !1);
        } else He !== null && (Zs(He), (He = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? le === 0 && (le = 3) : Wo())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        wn(), Qs(e, t), e === null && tr(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return Po(t.type._context), pe(t), null;
    case 17:
      return _e(t.type) && qr(), pe(t), null;
    case 19:
      if ((G(X), (s = t.memoizedState), s === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Tn(s, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ol(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Tn(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ee() > Sn &&
            ((t.flags |= 128), (r = !0), Tn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ol(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !Y)
            )
              return pe(t), null;
          } else
            2 * ee() - s.renderingStartTime > Sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ee()),
          (t.sibling = null),
          (n = X.current),
          b(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Ho(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Fe & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Kf(e, t) {
  switch ((jo(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wn(),
        G(Ce),
        G(he),
        Io(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return To(t), null;
    case 13:
      if ((G(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(X), null;
    case 4:
      return wn(), null;
    case 10:
      return Po(t.type._context), null;
    case 22:
    case 23:
      return Ho(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fr = !1,
  me = !1,
  Gf = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function Hs(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Yi = !1;
function Yf(e, t) {
  if (((Es = Yr), (e = gu()), So(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            d = 0,
            v = 0,
            x = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              x !== n || (l !== 0 && x.nodeType !== 3) || (a = o + l),
                x !== s || (r !== 0 && x.nodeType !== 3) || (u = o + r),
                x.nodeType === 3 && (o += x.nodeValue.length),
                (y = x.firstChild) !== null;

            )
              (p = x), (x = y);
            for (;;) {
              if (x === e) break t;
              if (
                (p === n && ++d === l && (a = o),
                p === s && ++v === r && (u = o),
                (y = x.nextSibling) !== null)
              )
                break;
              (x = p), (p = x.parentNode);
            }
            x = y;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ps = { focusedElem: e, selectionRange: n }, Yr = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var N = k.memoizedProps,
                    T = k.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : Ue(t.type, N),
                      T
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (g) {
          q(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (k = Yi), (Yi = !1), k;
}
function Hn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        (l.destroy = void 0), s !== void 0 && Hs(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ws(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function fc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[rr], delete t[Ls], delete t[Lf], delete t[Tf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xi(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bs(e, t, n), e = e.sibling; e !== null; ) bs(e, t, n), (e = e.sibling);
}
function Ks(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ks(e, t, n), e = e.sibling; e !== null; ) Ks(e, t, n), (e = e.sibling);
}
var ie = null,
  Qe = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) mc(e, t, n), (n = n.sibling);
}
function mc(e, t, n) {
  if (qe && typeof qe.onCommitFiberUnmount == 'function')
    try {
      qe.onCommitFiberUnmount(gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || an(n, t);
    case 6:
      var r = ie,
        l = Qe;
      (ie = null),
        ft(e, t, n),
        (ie = r),
        (Qe = l),
        ie !== null &&
          (Qe
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ie.removeChild(n.stateNode));
      break;
    case 18:
      ie !== null &&
        (Qe
          ? ((e = ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? Gl(e.parentNode, n)
              : e.nodeType === 1 && Gl(e, n),
            Jn(e))
          : Gl(ie, n.stateNode));
      break;
    case 4:
      (r = ie),
        (l = Qe),
        (ie = n.stateNode.containerInfo),
        (Qe = !0),
        ft(e, t, n),
        (ie = r),
        (Qe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Hs(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      ft(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (an(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          q(n, t, a);
        }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), ft(e, t, n), (me = r))
        : ft(e, t, n);
      break;
    default:
      ft(e, t, n);
  }
}
function Zi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gf()),
      t.forEach(function (r) {
        var l = lp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ie = a.stateNode), (Qe = !1);
              break e;
            case 3:
              (ie = a.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ie = a.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          a = a.return;
        }
        if (ie === null) throw Error(E(160));
        mc(s, o, l), (ie = null), (Qe = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (d) {
        q(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hc(t, e), (t = t.sibling);
}
function hc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), Xe(e), r & 4)) {
        try {
          Hn(3, e, e.return), jl(3, e);
        } catch (N) {
          q(e, e.return, N);
        }
        try {
          Hn(5, e, e.return);
        } catch (N) {
          q(e, e.return, N);
        }
      }
      break;
    case 1:
      Ve(t, e), Xe(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (
        (Ve(t, e),
        Xe(e),
        r & 512 && n !== null && an(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Gn(l, '');
        } catch (N) {
          q(e, e.return, N);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && $a(l, s),
              xs(a, o);
            var d = xs(a, s);
            for (o = 0; o < u.length; o += 2) {
              var v = u[o],
                x = u[o + 1];
              v === 'style'
                ? Ua(l, x)
                : v === 'dangerouslySetInnerHTML'
                  ? Ba(l, x)
                  : v === 'children'
                    ? Gn(l, x)
                    : ao(l, v, x, d);
            }
            switch (a) {
              case 'input':
                fs(l, s);
                break;
              case 'textarea':
                Oa(l, s);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? cn(l, !!s.multiple, y, !1)
                  : p !== !!s.multiple &&
                    (s.defaultValue != null
                      ? cn(l, !!s.multiple, s.defaultValue, !0)
                      : cn(l, !!s.multiple, s.multiple ? [] : '', !1));
            }
            l[rr] = s;
          } catch (N) {
            q(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((Ve(t, e), Xe(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (s = e.memoizedProps);
        try {
          l.nodeValue = s;
        } catch (N) {
          q(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        (Ve(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (N) {
          q(e, e.return, N);
        }
      break;
    case 4:
      Ve(t, e), Xe(e);
      break;
    case 13:
      Ve(t, e),
        Xe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Uo = ee())),
        r & 4 && Zi(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (d = me) || v), Ve(t, e), (me = d)) : Ve(t, e),
        Xe(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (L = e, v = e.child; v !== null; ) {
            for (x = L = v; L !== null; ) {
              switch (((p = L), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hn(4, p, p.return);
                  break;
                case 1:
                  an(p, p.return);
                  var k = p.stateNode;
                  if (typeof k.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (N) {
                      q(r, n, N);
                    }
                  }
                  break;
                case 5:
                  an(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    qi(x);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (L = y)) : qi(x);
            }
            v = v.sibling;
          }
        e: for (v = null, x = e; ; ) {
          if (x.tag === 5) {
            if (v === null) {
              v = x;
              try {
                (l = x.stateNode),
                  d
                    ? ((s = l.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((a = x.stateNode),
                      (u = x.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (a.style.display = Va('display', o)));
              } catch (N) {
                q(e, e.return, N);
              }
            }
          } else if (x.tag === 6) {
            if (v === null)
              try {
                x.stateNode.nodeValue = d ? '' : x.memoizedProps;
              } catch (N) {
                q(e, e.return, N);
              }
          } else if (
            ((x.tag !== 22 && x.tag !== 23) ||
              x.memoizedState === null ||
              x === e) &&
            x.child !== null
          ) {
            (x.child.return = x), (x = x.child);
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            v === x && (v = null), (x = x.return);
          }
          v === x && (v = null), (x.sibling.return = x.return), (x = x.sibling);
        }
      }
      break;
    case 19:
      Ve(t, e), Xe(e), r & 4 && Zi(e);
      break;
    case 21:
      break;
    default:
      Ve(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Gn(l, ''), (r.flags &= -33));
          var s = Xi(e);
          Ks(e, s, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Xi(e);
          bs(e, a, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xf(e, t, n) {
  (L = e), gc(e);
}
function gc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var l = L,
      s = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Fr;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || me;
        a = Fr;
        var d = me;
        if (((Fr = o), (me = u) && !d))
          for (L = l; L !== null; )
            (o = L),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ea(l)
                : u !== null
                  ? ((u.return = o), (L = u))
                  : ea(l);
        for (; s !== null; ) (L = s), gc(s), (s = s.sibling);
        (L = l), (Fr = a), (me = d);
      }
      Ji(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (L = s)) : Ji(e);
  }
}
function Ji(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ue(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Ai(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ai(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var x = v.dehydrated;
                    x !== null && Jn(x);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        me || (t.flags & 512 && Ws(t));
      } catch (p) {
        q(t, t.return, p);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function qi(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function ea(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, l, u);
            }
          }
          var s = t.return;
          try {
            Ws(t);
          } catch (u) {
            q(t, s, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ws(t);
          } catch (u) {
            q(t, o, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var Zf = Math.ceil,
  ul = dt.ReactCurrentDispatcher,
  Bo = dt.ReactCurrentOwner,
  Oe = dt.ReactCurrentBatchConfig,
  U = 0,
  oe = null,
  ne = null,
  ae = 0,
  Fe = 0,
  un = Dt(0),
  le = 0,
  ur = null,
  Ut = 0,
  Cl = 0,
  Vo = 0,
  Wn = null,
  Ne = null,
  Uo = 0,
  Sn = 1 / 0,
  tt = null,
  cl = !1,
  Gs = null,
  jt = null,
  Dr = !1,
  yt = null,
  dl = 0,
  bn = 0,
  Ys = null,
  Vr = -1,
  Ur = 0;
function xe() {
  return U & 6 ? ee() : Vr !== -1 ? Vr : (Vr = ee());
}
function Ct(e) {
  return e.mode & 1
    ? U & 2 && ae !== 0
      ? ae & -ae
      : zf.transition !== null
        ? (Ur === 0 && (Ur = eu()), Ur)
        : ((e = H),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : iu(e.type))),
          e)
    : 1;
}
function be(e, t, n, r) {
  if (50 < bn) throw ((bn = 0), (Ys = null), Error(E(185)));
  dr(e, n, r),
    (!(U & 2) || e !== oe) &&
      (e === oe && (!(U & 2) && (Cl |= n), le === 4 && gt(e, ae)),
      Ee(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((Sn = ee() + 500), kl && Lt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Id(e, t);
  var r = Gr(e, e === oe ? ae : 0);
  if (r === 0)
    n !== null && ui(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ui(n), t === 1))
      e.tag === 0 ? If(ta.bind(null, e)) : _u(ta.bind(null, e)),
        Ff(function () {
          !(U & 6) && Lt();
        }),
        (n = null);
    else {
      switch (tu(r)) {
        case 1:
          n = mo;
          break;
        case 4:
          n = Ja;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = qa;
          break;
        default:
          n = Kr;
      }
      n = jc(n, xc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xc(e, t) {
  if (((Vr = -1), (Ur = 0), U & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (hn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === oe ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var s = vc();
    (oe !== e || ae !== t) && ((tt = null), (Sn = ee() + 500), $t(e, t));
    do
      try {
        ep();
        break;
      } catch (a) {
        yc(e, a);
      }
    while (!0);
    Eo(),
      (ul.current = s),
      (U = l),
      ne !== null ? (t = 0) : ((oe = null), (ae = 0), (t = le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ss(e)), l !== 0 && ((r = l), (t = Xs(e, l)))), t === 1)
    )
      throw ((n = ur), $t(e, 0), gt(e, r), Ee(e, ee()), n);
    if (t === 6) gt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Jf(l) &&
          ((t = fl(e, r)),
          t === 2 && ((s = Ss(e)), s !== 0 && ((r = s), (t = Xs(e, s)))),
          t === 1))
      )
        throw ((n = ur), $t(e, 0), gt(e, r), Ee(e, ee()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          It(e, Ne, tt);
          break;
        case 3:
          if (
            (gt(e, r), (r & 130023424) === r && ((t = Uo + 500 - ee()), 10 < t))
          ) {
            if (Gr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ds(It.bind(null, e, Ne, tt), t);
            break;
          }
          It(e, Ne, tt);
          break;
        case 4:
          if ((gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - We(r);
            (s = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~s);
          }
          if (
            ((r = l),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Zf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ds(It.bind(null, e, Ne, tt), r);
            break;
          }
          It(e, Ne, tt);
          break;
        case 5:
          It(e, Ne, tt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ee(e, ee()), e.callbackNode === n ? xc.bind(null, e) : null;
}
function Xs(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && Zs(t)),
    e
  );
}
function Zs(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Jf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!Ke(s(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gt(e, t) {
  for (
    t &= ~Vo,
      t &= ~Cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - We(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ta(e) {
  if (U & 6) throw Error(E(327));
  hn();
  var t = Gr(e, 0);
  if (!(t & 1)) return Ee(e, ee()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ss(e);
    r !== 0 && ((t = r), (n = Xs(e, r)));
  }
  if (n === 1) throw ((n = ur), $t(e, 0), gt(e, t), Ee(e, ee()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, Ne, tt),
    Ee(e, ee()),
    null
  );
}
function Qo(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((Sn = ee() + 500), kl && Lt());
  }
}
function Qt(e) {
  yt !== null && yt.tag === 0 && !(U & 6) && hn();
  var t = U;
  U |= 1;
  var n = Oe.transition,
    r = H;
  try {
    if (((Oe.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (Oe.transition = n), (U = t), !(U & 6) && Lt();
  }
}
function Ho() {
  (Fe = un.current), G(un);
}
function $t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Pf(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((jo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qr();
          break;
        case 3:
          wn(), G(Ce), G(he), Io();
          break;
        case 5:
          To(r);
          break;
        case 4:
          wn();
          break;
        case 13:
          G(X);
          break;
        case 19:
          G(X);
          break;
        case 10:
          Po(r.type._context);
          break;
        case 22:
        case 23:
          Ho();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (ne = e = _t(e.current, null)),
    (ae = Fe = t),
    (le = 0),
    (ur = null),
    (Vo = Cl = Ut = 0),
    (Ne = Wn = null),
    Rt !== null)
  ) {
    for (t = 0; t < Rt.length; t++)
      if (((n = Rt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Rt = null;
  }
  return e;
}
function yc(e, t) {
  do {
    var n = ne;
    try {
      if ((Eo(), (Or.current = al), il)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Vt = 0),
        (se = re = Z = null),
        (Qn = !1),
        (or = 0),
        (Bo.current = null),
        n === null || n.return === null)
      ) {
        (le = 1), (ur = t), (ne = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = ae),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var d = u,
            v = a,
            x = v.tag;
          if (!(v.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var y = Ui(o);
          if (y !== null) {
            (y.flags &= -257),
              Qi(y, o, a, s, t),
              y.mode & 1 && Vi(s, d, t),
              (t = y),
              (u = d);
            var k = t.updateQueue;
            if (k === null) {
              var N = new Set();
              N.add(u), (t.updateQueue = N);
            } else k.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Vi(s, d, t), Wo();
              break e;
            }
            u = Error(E(426));
          }
        } else if (Y && a.mode & 1) {
          var T = Ui(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              Qi(T, o, a, s, t),
              Co(kn(u, a));
            break e;
          }
        }
        (s = u = kn(u, a)),
          le !== 4 && (le = 2),
          Wn === null ? (Wn = [s]) : Wn.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var f = tc(s, u, t);
              Ri(s, f);
              break e;
            case 1:
              a = u;
              var c = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (jt === null || !jt.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var g = nc(s, a, t);
                Ri(s, g);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      kc(n);
    } catch (w) {
      (t = w), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vc() {
  var e = ul.current;
  return (ul.current = al), e === null ? al : e;
}
function Wo() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    oe === null || (!(Ut & 268435455) && !(Cl & 268435455)) || gt(oe, ae);
}
function fl(e, t) {
  var n = U;
  U |= 2;
  var r = vc();
  (oe !== e || ae !== t) && ((tt = null), $t(e, t));
  do
    try {
      qf();
      break;
    } catch (l) {
      yc(e, l);
    }
  while (!0);
  if ((Eo(), (U = n), (ul.current = r), ne !== null)) throw Error(E(261));
  return (oe = null), (ae = 0), le;
}
function qf() {
  for (; ne !== null; ) wc(ne);
}
function ep() {
  for (; ne !== null && !jd(); ) wc(ne);
}
function wc(e) {
  var t = Nc(e.alternate, e, Fe);
  (e.memoizedProps = e.pendingProps),
    t === null ? kc(e) : (ne = t),
    (Bo.current = null);
}
function kc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Kf(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (ne = null);
        return;
      }
    } else if (((n = bf(n, t, Fe)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function It(e, t, n) {
  var r = H,
    l = Oe.transition;
  try {
    (Oe.transition = null), (H = 1), tp(e, t, n, r);
  } finally {
    (Oe.transition = l), (H = r);
  }
  return null;
}
function tp(e, t, n, r) {
  do hn();
  while (yt !== null);
  if (U & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (zd(e, s),
    e === oe && ((ne = oe = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      jc(Kr, function () {
        return hn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Oe.transition), (Oe.transition = null);
    var o = H;
    H = 1;
    var a = U;
    (U |= 4),
      (Bo.current = null),
      Yf(e, n),
      hc(n, e),
      kf(Ps),
      (Yr = !!Es),
      (Ps = Es = null),
      (e.current = n),
      Xf(n),
      Cd(),
      (U = a),
      (H = o),
      (Oe.transition = s);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (yt = e), (dl = l)),
    (s = e.pendingLanes),
    s === 0 && (jt = null),
    Pd(n.stateNode),
    Ee(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw ((cl = !1), (e = Gs), (Gs = null), e);
  return (
    dl & 1 && e.tag !== 0 && hn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ys ? bn++ : ((bn = 0), (Ys = e))) : (bn = 0),
    Lt(),
    null
  );
}
function hn() {
  if (yt !== null) {
    var e = tu(dl),
      t = Oe.transition,
      n = H;
    try {
      if (((Oe.transition = null), (H = 16 > e ? 16 : e), yt === null))
        var r = !1;
      else {
        if (((e = yt), (yt = null), (dl = 0), U & 6)) throw Error(E(331));
        var l = U;
        for (U |= 4, L = e.current; L !== null; ) {
          var s = L,
            o = s.child;
          if (L.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var d = a[u];
                for (L = d; L !== null; ) {
                  var v = L;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hn(8, v, s);
                  }
                  var x = v.child;
                  if (x !== null) (x.return = v), (L = x);
                  else
                    for (; L !== null; ) {
                      v = L;
                      var p = v.sibling,
                        y = v.return;
                      if ((fc(v), v === d)) {
                        L = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (L = p);
                        break;
                      }
                      L = y;
                    }
                }
              }
              var k = s.alternate;
              if (k !== null) {
                var N = k.child;
                if (N !== null) {
                  k.child = null;
                  do {
                    var T = N.sibling;
                    (N.sibling = null), (N = T);
                  } while (N !== null);
                }
              }
              L = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (L = o);
          else
            e: for (; L !== null; ) {
              if (((s = L), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hn(9, s, s.return);
                }
              var f = s.sibling;
              if (f !== null) {
                (f.return = s.return), (L = f);
                break e;
              }
              L = s.return;
            }
        }
        var c = e.current;
        for (L = c; L !== null; ) {
          o = L;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (L = m);
          else
            e: for (o = c; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, a);
                  }
                } catch (w) {
                  q(a, a.return, w);
                }
              if (a === o) {
                L = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (L = g);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((U = l), Lt(), qe && typeof qe.onPostCommitFiberRoot == 'function')
        )
          try {
            qe.onPostCommitFiberRoot(gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (Oe.transition = t);
    }
  }
  return !1;
}
function na(e, t, n) {
  (t = kn(n, t)),
    (t = tc(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = xe()),
    e !== null && (dr(e, 1, t), Ee(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) na(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        na(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (jt === null || !jt.has(r)))
        ) {
          (e = kn(n, e)),
            (e = nc(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = xe()),
            t !== null && (dr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function np(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ae & n) === n &&
      (le === 4 || (le === 3 && (ae & 130023424) === ae && 500 > ee() - Uo)
        ? $t(e, 0)
        : (Vo |= n)),
    Ee(e, t);
}
function Sc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = xe();
  (e = ut(e, t)), e !== null && (dr(e, t, n), Ee(e, n));
}
function rp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Sc(e, n);
}
function lp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Sc(e, n);
}
var Nc;
Nc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (je = !1), Wf(e, t, n);
      je = !!(e.flags & 131072);
    }
  else (je = !1), Y && t.flags & 1048576 && Eu(t, nl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Br(e, t), (e = t.pendingProps);
      var l = xn(t, he.current);
      mn(t, n), (l = Ro(null, t, r, e, l, n));
      var s = Ao();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((s = !0), el(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Do(t),
            (l.updater = Nl),
            (t.stateNode = l),
            (l._reactInternals = t),
            $s(t, r, e, n),
            (t = Bs(null, t, r, !0, s, n)))
          : ((t.tag = 0), Y && s && No(t), ge(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Br(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = op(r)),
          (e = Ue(r, e)),
          l)
        ) {
          case 0:
            t = Ms(null, t, r, e, n);
            break e;
          case 1:
            t = bi(null, t, r, e, n);
            break e;
          case 11:
            t = Hi(null, t, r, e, n);
            break e;
          case 14:
            t = Wi(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        Ms(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        bi(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((oc(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          Iu(e, t),
          sl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (l = kn(Error(E(423)), t)), (t = Ki(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = kn(Error(E(424)), t)), (t = Ki(e, t, r, n, l));
            break e;
          } else
            for (
              De = St(t.stateNode.containerInfo.firstChild),
                Le = t,
                Y = !0,
                He = null,
                n = Lu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zu(t),
        e === null && zs(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Fs(r, l) ? (o = null) : s !== null && Fs(r, s) && (t.flags |= 32),
        sc(e, t),
        ge(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && zs(t), null;
    case 13:
      return ic(e, t, n);
    case 4:
      return (
        Lo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        Hi(e, t, r, l, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (o = l.value),
          b(rl, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ke(s.value, o)) {
            if (s.children === l.children && !Ce.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      (u = ot(-1, n & -n)), (u.tag = 2);
                      var d = s.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (u.next = u)
                          : ((u.next = v.next), (v.next = u)),
                          (d.pending = u);
                      }
                    }
                    (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      Rs(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(E(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Rs(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        ge(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        mn(t, n),
        (l = Me(l)),
        (r = r(l)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ue(r, t.pendingProps)),
        (l = Ue(r.type, l)),
        Wi(e, t, r, l, n)
      );
    case 15:
      return rc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        Br(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), el(t)) : (e = !1),
        mn(t, n),
        ec(t, r, l),
        $s(t, r, l, n),
        Bs(null, t, r, !0, e, n)
      );
    case 19:
      return ac(e, t, n);
    case 22:
      return lc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function jc(e, t) {
  return Za(e, t);
}
function sp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $e(e, t, n, r) {
  return new sp(e, t, n, r);
}
function bo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function op(e) {
  if (typeof e == 'function') return bo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === co)) return 11;
    if (e === fo) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qr(e, t, n, r, l, s) {
  var o = 2;
  if (((r = e), typeof e == 'function')) bo(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Jt:
        return Ot(n.children, l, s, t);
      case uo:
        (o = 8), (l |= 8);
        break;
      case is:
        return (
          (e = $e(12, n, t, l | 2)), (e.elementType = is), (e.lanes = s), e
        );
      case as:
        return (e = $e(13, n, t, l)), (e.elementType = as), (e.lanes = s), e;
      case us:
        return (e = $e(19, n, t, l)), (e.elementType = us), (e.lanes = s), e;
      case za:
        return _l(n, l, s, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ta:
              o = 10;
              break e;
            case Ia:
              o = 9;
              break e;
            case co:
              o = 11;
              break e;
            case fo:
              o = 14;
              break e;
            case pt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = $e(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Ot(e, t, n, r) {
  return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function _l(e, t, n, r) {
  return (
    (e = $e(22, e, r, t)),
    (e.elementType = za),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ns(e, t, n) {
  return (e = $e(6, e, null, t)), (e.lanes = n), e;
}
function rs(e, t, n) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ip(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ko(e, t, n, r, l, s, o, a, u) {
  return (
    (e = new ip(e, t, n, a, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = $e(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Do(s),
    e
  );
}
function ap(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cc(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return Cu(e, n, t);
  }
  return t;
}
function _c(e, t, n, r, l, s, o, a, u) {
  return (
    (e = Ko(n, r, !0, e, l, s, o, a, u)),
    (e.context = Cc(null)),
    (n = e.current),
    (r = xe()),
    (l = Ct(n)),
    (s = ot(r, l)),
    (s.callback = t ?? null),
    Nt(n, s, l),
    (e.current.lanes = l),
    dr(e, l, r),
    Ee(e, r),
    e
  );
}
function El(e, t, n, r) {
  var l = t.current,
    s = xe(),
    o = Ct(l);
  return (
    (n = Cc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(l, t, o)),
    e !== null && (be(e, l, o, s), $r(e, l, o)),
    o
  );
}
function pl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ra(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Go(e, t) {
  ra(e, t), (e = e.alternate) && ra(e, t);
}
function up() {
  return null;
}
var Ec =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yo(e) {
  this._internalRoot = e;
}
Pl.prototype.render = Yo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  El(e, t, null, null);
};
Pl.prototype.unmount = Yo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function () {
      El(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = lu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++);
    ht.splice(n, 0, e), n === 0 && ou(e);
  }
};
function Xo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function la() {}
function cp(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var d = pl(o);
        s.call(d);
      };
    }
    var o = _c(t, r, e, 0, null, !1, !1, '', la);
    return (
      (e._reactRootContainer = o),
      (e[at] = o.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      Qt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var d = pl(u);
      a.call(d);
    };
  }
  var u = Ko(e, 0, !1, null, null, !1, !1, '', la);
  return (
    (e._reactRootContainer = u),
    (e[at] = u.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    Qt(function () {
      El(t, u, n, r);
    }),
    u
  );
}
function Dl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = pl(o);
        a.call(u);
      };
    }
    El(t, o, e, l);
  } else o = cp(n, t, e, l, r);
  return pl(o);
}
nu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 &&
          (ho(t, n | 1), Ee(t, ee()), !(U & 6) && ((Sn = ee() + 500), Lt()));
      }
      break;
    case 13:
      Qt(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var l = xe();
          be(r, e, 1, l);
        }
      }),
        Go(e, 1);
  }
};
go = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = xe();
      be(t, e, 134217728, n);
    }
    Go(e, 134217728);
  }
};
ru = function (e) {
  if (e.tag === 13) {
    var t = Ct(e),
      n = ut(e, t);
    if (n !== null) {
      var r = xe();
      be(n, e, t, r);
    }
    Go(e, t);
  }
};
lu = function () {
  return H;
};
su = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
vs = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((fs(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wl(r);
            if (!l) throw Error(E(90));
            Aa(r), fs(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Oa(e, n);
      break;
    case 'select':
      (t = n.value), t != null && cn(e, !!n.multiple, t, !1);
  }
};
Wa = Qo;
ba = Qt;
var dp = { usingClientEntryPoint: !1, Events: [pr, nn, wl, Qa, Ha, Qo] },
  In = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  fp = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ya(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance || up,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lr.isDisabled && Lr.supportsFiber)
    try {
      (gl = Lr.inject(fp)), (qe = Lr);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xo(t)) throw Error(E(200));
  return ap(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!Xo(e)) throw Error(E(299));
  var n = !1,
    r = '',
    l = Ec;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ko(e, 1, !1, null, null, n, !1, r, l)),
    (e[at] = t.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    new Yo(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(E(188))
      : ((e = Object.keys(e).join(',')), Error(E(268, e)));
  return (e = Ya(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return Qt(e);
};
Ie.hydrate = function (e, t, n) {
  if (!Fl(t)) throw Error(E(200));
  return Dl(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!Xo(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = '',
    o = Ec;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = _c(t, null, e, 1, n ?? null, l, !1, s, o)),
    (e[at] = t.current),
    tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Pl(t);
};
Ie.render = function (e, t, n) {
  if (!Fl(t)) throw Error(E(200));
  return Dl(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!Fl(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Qt(function () {
        Dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = Qo;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Dl(e, t, n, !1, r);
};
Ie.version = '18.3.1-next-f1338f8080-20240426';
function Pc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc);
    } catch (e) {
      console.error(e);
    }
}
Pc(), (Pa.exports = Ie);
var pp = Pa.exports,
  sa = pp;
(ss.createRoot = sa.createRoot), (ss.hydrateRoot = sa.hydrateRoot);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var mp = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  ce = (e, t) => {
    const n = B.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: o,
          className: a = '',
          children: u,
          ...d
        },
        v
      ) =>
        B.createElement(
          'svg',
          {
            ref: v,
            ...mp,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? (Number(s) * 24) / Number(l) : s,
            className: ['lucide', `lucide-${hp(e)}`, a].join(' '),
            ...d,
          },
          [
            ...t.map(([x, p]) => B.createElement(x, p)),
            ...(Array.isArray(u) ? u : [u]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Js = ce('AlertCircle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rt = ce('CheckCircle', [
  ['path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', key: 'g774vq' }],
  ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qs = ce('ChevronDown', [
  ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oa = ce('ChevronUp', [
  ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ml = ce('Columns', [
  [
    'rect',
    {
      width: '18',
      height: '18',
      x: '3',
      y: '3',
      rx: '2',
      ry: '2',
      key: '1m3agn',
    },
  ],
  ['line', { x1: '12', x2: '12', y1: '3', y2: '21', key: '1efggb' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fc = ce('Download', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
  ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ia = ce('FileSpreadsheet', [
  [
    'path',
    {
      d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
      key: '1nnpy2',
    },
  ],
  ['polyline', { points: '14 2 14 8 20 8', key: '1ew0cm' }],
  ['path', { d: 'M8 13h2', key: 'yr2amv' }],
  ['path', { d: 'M8 17h2', key: '2yhykz' }],
  ['path', { d: 'M14 13h2', key: 'un5t4a' }],
  ['path', { d: 'M14 17h2', key: '10kma7' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aa = ce('FileText', [
  [
    'path',
    {
      d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
      key: '1nnpy2',
    },
  ],
  ['polyline', { points: '14 2 14 8 20 8', key: '1ew0cm' }],
  ['line', { x1: '16', x2: '8', y1: '13', y2: '13', key: '14keom' }],
  ['line', { x1: '16', x2: '8', y1: '17', y2: '17', key: '17nazh' }],
  ['line', { x1: '10', x2: '8', y1: '9', y2: '9', key: '1a5vjj' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ua = ce('Filter', [
  [
    'polygon',
    { points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3', key: '1yg77f' },
  ],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ls = ce('Folder', [
  [
    'path',
    {
      d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
      key: '1kt360',
    },
  ],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gp = ce('GitCompare', [
  ['circle', { cx: '18', cy: '18', r: '3', key: '1xkwt0' }],
  ['circle', { cx: '6', cy: '6', r: '3', key: '1lh9wr' }],
  ['path', { d: 'M13 6h3a2 2 0 0 1 2 2v7', key: '1yeb86' }],
  ['path', { d: 'M11 18H8a2 2 0 0 1-2-2V9', key: '19pyzm' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xp = ce('Layout', [
  [
    'rect',
    {
      width: '18',
      height: '18',
      x: '3',
      y: '3',
      rx: '2',
      ry: '2',
      key: '1m3agn',
    },
  ],
  ['line', { x1: '3', x2: '21', y1: '9', y2: '9', key: '1vqk6q' }],
  ['line', { x1: '9', x2: '9', y1: '21', y2: '9', key: 'wpwpyp' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ca = ce('Loader', [
  ['line', { x1: '12', x2: '12', y1: '2', y2: '6', key: 'gza1u7' }],
  ['line', { x1: '12', x2: '12', y1: '18', y2: '22', key: '1qhbu9' }],
  ['line', { x1: '4.93', x2: '7.76', y1: '4.93', y2: '7.76', key: 'xae44r' }],
  [
    'line',
    { x1: '16.24', x2: '19.07', y1: '16.24', y2: '19.07', key: 'bxnmvf' },
  ],
  ['line', { x1: '2', x2: '6', y1: '12', y2: '12', key: '89khin' }],
  ['line', { x1: '18', x2: '22', y1: '12', y2: '12', key: 'pb8tfm' }],
  ['line', { x1: '4.93', x2: '7.76', y1: '19.07', y2: '16.24', key: '1uxjnu' }],
  ['line', { x1: '16.24', x2: '19.07', y1: '7.76', y2: '4.93', key: '6duxfx' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yp = ce('Package', [
  ['path', { d: 'm7.5 4.27 9 5.15', key: '1c824w' }],
  [
    'path',
    {
      d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z',
      key: 'hh9hay',
    },
  ],
  ['path', { d: 'm3.3 7 8.7 5 8.7-5', key: 'g66t2b' }],
  ['path', { d: 'M12 22V12', key: 'd0xqtd' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dc = ce('Settings', [
  [
    'path',
    {
      d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
      key: '1qme2f',
    },
  ],
  ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const da = ce('Upload', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ['polyline', { points: '17 8 12 3 7 8', key: 't8dd8p' }],
  ['line', { x1: '12', x2: '12', y1: '3', y2: '15', key: 'widbto' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eo = ce('XCircle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
  ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
]);
function vp({
  section1Name: e,
  section2Name: t,
  showSettings: n,
  setShowSettings: r,
}) {
  return i.jsx('div', {
    className: 'bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30',
    children: i.jsx('div', {
      className: 'max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4',
      children: i.jsxs('div', {
        className: 'flex items-center justify-between gap-2',
        children: [
          i.jsxs('div', {
            className: 'flex items-center gap-2 md:gap-3 min-w-0',
            children: [
              i.jsx('div', {
                className:
                  'p-1.5 md:p-2.5 bg-blue-600 rounded-lg shadow-lg shadow-blue-200 flex-shrink-0',
                children: i.jsx(gp, {
                  className: 'w-4 h-4 md:w-6 md:h-6 text-white',
                }),
              }),
              i.jsxs('div', {
                className: 'min-w-0',
                children: [
                  i.jsx('h1', {
                    className:
                      'text-base md:text-2xl font-bold text-gray-900 tracking-tight truncate',
                    children: 'VAT Comparison Tool',
                  }),
                  i.jsxs('p', {
                    className:
                      'text-[10px] md:text-xs text-gray-500 font-medium truncate hidden sm:block',
                    children: [e, ' vs ', t],
                  }),
                ],
              }),
            ],
          }),
          i.jsxs('button', {
            onClick: () => r(!n),
            className: `flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg transition-all text-xs md:text-sm font-medium flex-shrink-0 ${
              n
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`,
            children: [
              i.jsx(Dc, { className: 'w-3 h-3 md:w-4 md:h-4' }),
              i.jsx('span', {
                className: 'hidden sm:inline',
                children: 'ตั้งค่า',
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const wp = (e) => {
    const t = [];
    let n = '',
      r = !1;
    for (let l = 0; l < e.length; l++) {
      const s = e[l];
      s === '"'
        ? (r = !r)
        : s === ',' && !r
          ? (t.push(n.trim().replace(/^"|"$/g, '')), (n = ''))
          : (n += s);
    }
    return t.push(n.trim().replace(/^"|"$/g, '')), t;
  },
  kp = (e) =>
    e
      .split(/\r?\n/)
      .filter((n) => n.trim())
      .map((n) => wp(n)),
  to = (e) => (e ? String(e).replace(/,/g, '').trim() : ''),
  Sp = (e) => {
    if (!e) return '0.00';
    const t = to(e);
    if (!t) return '0.00';
    const n = parseFloat(t);
    return isNaN(n)
      ? '0.00'
      : new Intl.NumberFormat('th-TH', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(n);
  };
function Np({
  showSettings: e,
  section1Name: t,
  setSection1Name: n,
  section2Name: r,
  setSection2Name: l,
  sectionBLStart: s,
  setSectionBLStart: o,
  sectionBLEnd: a,
  setSectionBLEnd: u,
  sectionQAAStart: d,
  setSectionQAAStart: v,
  sectionQAAEnd: x,
  setSectionQAAEnd: p,
  s1BgColor: y,
  setS1BgColor: k,
  s1TextColor: N,
  setS1TextColor: T,
  s2BgColor: f,
  setS2BgColor: c,
  s2TextColor: m,
  setS2TextColor: g,
  matchedRowBgColor: w,
  setMatchedRowBgColor: C,
  mismatchedRowBgColor: S,
  setMismatchedRowBgColor: _,
}) {
  return e
    ? i.jsxs('div', {
        className:
          'bg-white rounded-2xl shadow-xl p-6 border border-blue-100 animate-in fade-in slide-in-from-top-4 duration-300',
        children: [
          i.jsxs('div', {
            className:
              'flex items-center gap-2 mb-6 pb-4 border-b border-gray-100',
            children: [
              i.jsx(Dc, { className: 'w-5 h-5 text-blue-600' }),
              i.jsx('h2', {
                className: 'text-lg font-bold text-gray-900',
                children: 'ตั้งค่าการเปรียบเทียบ (Configuration)',
              }),
            ],
          }),
          i.jsxs('div', {
            className: 'grid md:grid-cols-2 gap-8',
            children: [
              i.jsxs('div', {
                className: 'rounded-xl p-5 border',
                style: { backgroundColor: y, borderColor: N + '40' },
                children: [
                  i.jsxs('h3', {
                    className: 'font-bold mb-4 flex items-center gap-2',
                    style: { color: N },
                    children: [
                      i.jsx(ml, { className: 'w-4 h-4' }),
                      ' Section 1 (Excel/A-K)',
                    ],
                  }),
                  i.jsxs('div', {
                    className: 'space-y-4',
                    children: [
                      i.jsx('input', {
                        type: 'text',
                        value: t,
                        onChange: (F) => n(F.target.value),
                        className:
                          'w-full px-3 py-2 text-sm border rounded-md bg-white',
                        placeholder: 'Name',
                      }),
                      i.jsxs('div', {
                        className: 'grid grid-cols-2 gap-4',
                        children: [
                          i.jsxs('div', {
                            children: [
                              i.jsx('label', {
                                className:
                                  'text-xs font-semibold mb-1 block opacity-70',
                                children: 'Start Col (0=A)',
                              }),
                              i.jsx('input', {
                                type: 'number',
                                min: '0',
                                value: s,
                                onChange: (F) =>
                                  o(parseInt(F.target.value) || 0),
                                className:
                                  'w-full px-3 py-2 text-sm border rounded-md',
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            children: [
                              i.jsx('label', {
                                className:
                                  'text-xs font-semibold mb-1 block opacity-70',
                                children: 'End Col (Excl, 11=K)',
                              }),
                              i.jsx('input', {
                                type: 'number',
                                min: s + 1,
                                value: a,
                                onChange: (F) =>
                                  u(parseInt(F.target.value) || s + 1),
                                className:
                                  'w-full px-3 py-2 text-sm border rounded-md',
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        className: 'flex gap-2',
                        children: [
                          i.jsx('input', {
                            type: 'color',
                            value: y,
                            onChange: (F) => k(F.target.value),
                            className: 'h-8 w-8 rounded cursor-pointer',
                          }),
                          i.jsx('input', {
                            type: 'color',
                            value: N,
                            onChange: (F) => T(F.target.value),
                            className: 'h-8 w-8 rounded cursor-pointer',
                          }),
                          i.jsx('span', {
                            className: 'text-xs self-center opacity-60',
                            children: 'Theme Colors',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs('div', {
                className: 'rounded-xl p-5 border',
                style: { backgroundColor: f, borderColor: m + '40' },
                children: [
                  i.jsxs('h3', {
                    className: 'font-bold mb-4 flex items-center gap-2',
                    style: { color: m },
                    children: [
                      i.jsx(ml, { className: 'w-4 h-4' }),
                      ' Section 2 (PDF/L-U)',
                    ],
                  }),
                  i.jsxs('div', {
                    className: 'space-y-4',
                    children: [
                      i.jsx('input', {
                        type: 'text',
                        value: r,
                        onChange: (F) => l(F.target.value),
                        className:
                          'w-full px-3 py-2 text-sm border rounded-md bg-white',
                        placeholder: 'Name',
                      }),
                      i.jsxs('div', {
                        className: 'grid grid-cols-2 gap-4',
                        children: [
                          i.jsxs('div', {
                            children: [
                              i.jsx('label', {
                                className:
                                  'text-xs font-semibold mb-1 block opacity-70',
                                children: 'Start Col (11=L)',
                              }),
                              i.jsx('input', {
                                type: 'number',
                                min: '0',
                                value: d,
                                onChange: (F) =>
                                  v(parseInt(F.target.value) || 0),
                                className:
                                  'w-full px-3 py-2 text-sm border rounded-md',
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            children: [
                              i.jsx('label', {
                                className:
                                  'text-xs font-semibold mb-1 block opacity-70',
                                children: 'End Col (Excl, 22=V)',
                              }),
                              i.jsx('input', {
                                type: 'number',
                                min: d + 1,
                                value: x,
                                onChange: (F) =>
                                  p(parseInt(F.target.value) || d + 1),
                                className:
                                  'w-full px-3 py-2 text-sm border rounded-md',
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        className: 'flex gap-2',
                        children: [
                          i.jsx('input', {
                            type: 'color',
                            value: f,
                            onChange: (F) => c(F.target.value),
                            className: 'h-8 w-8 rounded cursor-pointer',
                          }),
                          i.jsx('input', {
                            type: 'color',
                            value: m,
                            onChange: (F) => g(F.target.value),
                            className: 'h-8 w-8 rounded cursor-pointer',
                          }),
                          i.jsx('span', {
                            className: 'text-xs self-center opacity-60',
                            children: 'Theme Colors',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsxs('div', {
            className: 'mt-6 pt-6 border-t border-gray-100',
            children: [
              i.jsx('h3', {
                className: 'text-sm font-bold text-gray-700 mb-4',
                children: 'การแสดงผล (Display)',
              }),
              i.jsxs('div', {
                className: 'grid md:grid-cols-2 gap-4',
                children: [
                  i.jsxs('div', {
                    children: [
                      i.jsx('label', {
                        className:
                          'block text-xs font-medium text-gray-500 mb-1',
                        children: 'Match BG',
                      }),
                      i.jsx('input', {
                        type: 'color',
                        value: w,
                        onChange: (F) => C(F.target.value),
                        className: 'h-8 w-full rounded cursor-pointer',
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    children: [
                      i.jsx('label', {
                        className:
                          'block text-xs font-medium text-gray-500 mb-1',
                        children: 'Mismatch BG',
                      }),
                      i.jsx('input', {
                        type: 'color',
                        value: S,
                        onChange: (F) => _(F.target.value),
                        className: 'h-8 w-full rounded cursor-pointer',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : null;
}
function jp({
  excelFolder: e,
  setExcelFolder: t,
  pdfFolder: n,
  setPdfFolder: r,
  outputCsvName: l,
  setOutputCsvName: s,
  onStart: o,
}) {
  const [a, u] = te.useState({ name: '', path: '' }),
    [d, v] = te.useState({ name: '', path: '' }),
    [x, p] = te.useState({ name: '', path: '' }),
    [y, k] = te.useState(''),
    [N, T] = te.useState(''),
    [f, c] = te.useState(!1),
    [m, g] = te.useState(0),
    [w, C] = te.useState(!1),
    [S, _] = te.useState(!1),
    F = () => {
      const h = new Date(),
        j = String(h.getFullYear()).slice(-2),
        P = String(h.getMonth() + 1).padStart(2, '0'),
        I = String(h.getDate()).padStart(2, '0'),
        z = String(h.getHours()).padStart(2, '0'),
        R = String(h.getMinutes()).padStart(2, '0');
      return `${j}${P}${I}_${z}${R}.csv`;
    },
    A = async () => {
      var h;
      (h = document.getElementById('excel-file-input')) == null || h.click();
    },
    W = async () => {
      var h;
      (h = document.getElementById('excel-folder-input')) == null || h.click();
    },
    de = async () => {
      var h;
      (h = document.getElementById('pdf-folder-input')) == null || h.click();
    },
    we = async () => {
      var h;
      try {
        if ('showSaveFilePicker' in window) {
          const j = F(),
            P = await window.showSaveFilePicker({
              types: [
                { description: 'CSV Files', accept: { 'text/csv': ['.csv'] } },
              ],
              suggestedName: j,
            }),
            I = n ? `${n}/${P.name}` : P.name;
          p({ name: P.name, path: I }), s(I);
        } else
          (h = document.getElementById('output-csv-input')) == null ||
            h.click();
      } catch {
        console.log('File save dialog cancelled');
      }
    },
    Ge = (h) => {
      const j = h.target.files;
      if (j && j.length > 0) {
        const R = (j[0].webkitRelativePath || '')
          .split('/')
          .slice(0, -1)
          .join('\\');
        k(R), console.log('Excel Folder Path:', R);
      }
    },
    Pe = (h) => {
      var P;
      const j = (P = h.target.files) == null ? void 0 : P[0];
      if (j) {
        const I = j.name;
        T(I);
        let z = I;
        y && (z = `${y}\\${I}`);
        const R = z.split(/[\\\/]/).filter((Kt) => Kt.length > 0),
          $ = R.findIndex((Kt) => Kt === 'n8n-files');
        let Q;
        $ !== -1 && $ < R.length - 1
          ? (Q = `/home/node/.n8n-files/${R.slice($ + 1).join('/')}`)
          : (Q = `/home/node/.n8n-files/${R.join('/')}`);
        const Ll = `${Q.split('/').slice(0, -1).join('/')}/**/*.xlsx`;
        console.log('=== Excel File Debug ==='),
          console.log('fileName:', I),
          console.log('excelFolderPath (from step 1):', y),
          console.log('Merged Path (Windows):', z),
          console.log('Converted Linux Path:', Q),
          console.log('Excel Folder Pattern:', Ll),
          console.log('======================='),
          u({ name: I, path: Q }),
          t(Q);
      }
    },
    ke = (h) => {
      const j = h.target.files;
      if (j && j.length > 0) {
        const P = j[0];
        let I = '';
        P.path
          ? (I = P.path
              .split(/[\/\\]/)
              .slice(0, -1)
              .join('\\'))
          : P.webkitRelativePath &&
            (I = P.webkitRelativePath.split('/').slice(0, -1).join('\\')),
          I || (I = P.name);
        const z = I.split(/[\/\\]/).pop() || 'Folder';
        console.log('PDF Folder - Windows Path:', I),
          console.log('PDF Folder - Folder Name:', z);
        const R = I.split(/[\\\/]/).filter((Se) => Se.length > 0),
          $ = R.findIndex((Se) => Se === 'n8n-files');
        let Q;
        $ !== -1 && $ < R.length - 1
          ? (Q = `/home/node/.n8n-files/${R.slice($ + 1).join('/')}`)
          : (Q = `/home/node/.n8n-files/${R.join('/')}`),
          console.log('PDF Folder - Converted Linux Path:', Q),
          v({ name: z, path: Q }),
          (l === '' || l === n) && s(Q),
          r(Q);
      }
    },
    Ye = (h) => {
      var P;
      const j = (P = h.target.files) == null ? void 0 : P[0];
      if (j) {
        const I = j.path || j.name;
        p({ name: j.name, path: I }), s(I);
      }
    },
    D = e && n && l,
    O = te.useCallback(async () => {
      if (!e || !n) {
        console.error('Excel folder or PDF folder not selected');
        return;
      }
      C(!0);
      let h = e;
      e.startsWith('/') || (h = `/home/node/.n8n-files/${e}`);
      let j = n;
      n.startsWith('/') || (j = `/home/node/.n8n-files/${n}`);
      const z = `${h.split('/').slice(0, -1).join('/')}/**/*.xlsx`,
        R = j;
      console.log('Excel Path (original):', e),
        console.log('Excel Path (converted):', h),
        console.log('Excel Folder Pattern:', z),
        console.log('PDF Path (original):', n),
        console.log('PDF Path (converted):', j),
        console.log('Schema Pattern:', R);
      const $ = { excelFolder: z, schema: R };
      try {
        const Q = await fetch('http://localhost:5678/webhook/compare', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify($),
        });
        if (!Q.ok) throw new Error('Comparison failed');
        const Se = await Q.json();
        console.log('Comparison Result:', Se), _(!0), C(!1);
      } catch (Q) {
        console.error('Comparison Error:', Q), C(!1);
      }
    }, [e, n]),
    M = async () => {
      if (!n) {
        console.error('PDF folder not selected');
        return;
      }
      c(!0);
      let h = n;
      n.startsWith('/') || (h = `/home/node/.n8n-files/${n}`);
      const j = `${h}/**/*.pdf`;
      console.log('=== PDF Folder Debug ==='),
        console.log('pdfFolder (original):', n),
        console.log('fullPath (converted):', h),
        console.log('Final pdfFolderPattern:', j),
        console.log('======================');
      let P = { excelFolder: e, schema: j };
      try {
        const I = await fetch('http://localhost:5678/webhook/insert', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(P),
        });
        if (!I.ok) throw new Error('OCR processing failed');
        const z = await I.json();
        console.log('OCR Result:', z),
          console.log(
            'OCR Result Type:',
            typeof z,
            'Is Array:',
            Array.isArray(z)
          );
        let R = !1;
        if (
          (Array.isArray(z) && z.length > 0
            ? (console.log('First item:', z[0]),
              'success' in z[0] ? (R = z[0].success === !0) : (R = !0))
            : z && typeof z == 'object' && (R = z.success !== !1),
          console.log('Is Success:', R),
          R)
        )
          console.log('Transitioning to comparison...'), c(!1), await O();
        else
          throw (
            (console.error('OCR returned unsuccessful result:', z),
            new Error('OCR returned unsuccessful result'))
          );
        o && o({ excelFile: e, pdfFolder: n, resultFile: l, ocrResult: z });
      } catch (I) {
        console.error('OCR Error:', I), c(!1);
      }
    };
  return i.jsxs('div', {
    className:
      'bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden',
    children: [
      i.jsxs('div', {
        className:
          'px-4 md:px-6 py-3 md:py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-2 md:gap-3',
        children: [
          i.jsx('div', {
            className:
              'bg-white p-1.5 rounded-md shadow-sm border border-gray-200',
            children: i.jsx(ls, {
              className: 'w-4 h-4 md:w-5 md:h-5 text-blue-600',
            }),
          }),
          i.jsx('h2', {
            className: 'text-sm md:text-lg font-bold text-gray-900',
            children: 'Step 1: Select Files & Folders',
          }),
        ],
      }),
      i.jsx('input', {
        id: 'excel-folder-input',
        type: 'file',
        webkitdirectory: 'true',
        onChange: Ge,
        className: 'hidden',
      }),
      i.jsx('input', {
        id: 'excel-file-input',
        type: 'file',
        accept: '.xlsx,.xls',
        onChange: Pe,
        className: 'hidden',
      }),
      i.jsx('input', {
        id: 'pdf-folder-input',
        type: 'file',
        webkitdirectory: 'true',
        directory: 'true',
        onChange: ke,
        className: 'hidden',
      }),
      i.jsx('input', {
        id: 'output-csv-input',
        type: 'file',
        onChange: Ye,
        className: 'hidden',
      }),
      i.jsxs('div', {
        className: 'p-3 md:p-4',
        children: [
          i.jsxs('div', {
            className: 'flex flex-col md:flex-row gap-2 md:gap-3',
            children: [
              i.jsxs('div', {
                className: 'flex-1 min-w-0 flex flex-col gap-2',
                children: [
                  i.jsx('div', {
                    onClick: W,
                    className: `border-2 border-dashed rounded-lg p-2 text-center transition-all cursor-pointer group ${
                      y
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                    }`,
                    title: y,
                    children: i.jsxs('div', {
                      className: 'pointer-events-none flex items-center gap-2',
                      children: [
                        y
                          ? i.jsx(rt, {
                              className: 'w-4 h-4 text-blue-600 flex-shrink-0',
                            })
                          : i.jsx(ls, {
                              className:
                                'w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0',
                            }),
                        i.jsxs('div', {
                          className: 'flex-1 text-left min-w-0',
                          children: [
                            i.jsx('span', {
                              className: 'text-xs text-gray-600 block',
                              children: '1. Excel Folder',
                            }),
                            y &&
                              i.jsx('span', {
                                className:
                                  'text-xs font-medium text-blue-700 truncate block',
                                children: y,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx('div', {
                    onClick: A,
                    className: `border-2 border-dashed rounded-lg p-2 text-center transition-all cursor-pointer group ${
                      e
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                    }`,
                    title: a.path,
                    children: i.jsxs('div', {
                      className: 'pointer-events-none flex items-center gap-2',
                      children: [
                        e
                          ? i.jsx(rt, {
                              className: 'w-4 h-4 text-green-600 flex-shrink-0',
                            })
                          : i.jsx(ia, {
                              className:
                                'w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0',
                            }),
                        i.jsxs('div', {
                          className: 'flex-1 text-left min-w-0',
                          children: [
                            i.jsx('span', {
                              className: 'text-xs text-gray-600 block',
                              children: '2. Excel File',
                            }),
                            e &&
                              i.jsx('span', {
                                className:
                                  'text-xs font-medium text-green-700 truncate block',
                                children: a.name || 'File selected',
                              }),
                            e &&
                              i.jsx('span', {
                                className:
                                  'text-xs text-gray-500 truncate block',
                                children: e,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              i.jsx('div', {
                className: 'flex-1 min-w-0',
                children: i.jsx('div', {
                  onClick: de,
                  className: `border-2 border-dashed rounded-lg p-2 md:p-3 text-center transition-all cursor-pointer group relative h-full flex items-center justify-center ${
                    n
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-purple-500 hover:bg-purple-50'
                  }`,
                  title: d.path,
                  children: i.jsxs('div', {
                    className:
                      'pointer-events-none flex flex-col gap-1 w-full px-1',
                    children: [
                      i.jsxs('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          n
                            ? i.jsx(rt, {
                                className:
                                  'w-4 h-4 text-green-600 flex-shrink-0',
                              })
                            : i.jsx(ls, {
                                className:
                                  'w-4 h-4 text-gray-300 group-hover:text-purple-500 transition-colors flex-shrink-0',
                              }),
                          n
                            ? i.jsx('span', {
                                className:
                                  'text-xs font-medium text-green-700 truncate',
                                children: d.name || 'Folder selected',
                              })
                            : i.jsx('span', {
                                className: 'text-xs text-gray-600',
                                children: 'PDF folder',
                              }),
                        ],
                      }),
                      n &&
                        i.jsx('span', {
                          className: 'text-xs text-gray-500 truncate ml-6',
                          children: n,
                        }),
                    ],
                  }),
                }),
              }),
              i.jsx('div', {
                className: 'flex-1 min-w-0',
                children: i.jsx('div', {
                  onClick: we,
                  className: `border-2 border-dashed rounded-lg p-2 md:p-3 text-center transition-all cursor-pointer group relative h-full flex items-center justify-center ${
                    l
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
                  }`,
                  title: x.path,
                  children: i.jsxs('div', {
                    className:
                      'pointer-events-none flex flex-col gap-1 w-full px-1',
                    children: [
                      i.jsxs('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          l
                            ? i.jsx(rt, {
                                className:
                                  'w-4 h-4 text-green-600 flex-shrink-0',
                              })
                            : i.jsx(ia, {
                                className:
                                  'w-4 h-4 text-gray-300 group-hover:text-green-500 transition-colors flex-shrink-0',
                              }),
                          l
                            ? i.jsx('span', {
                                className:
                                  'text-xs font-medium text-green-700 truncate',
                                children: x.name || 'File selected',
                              })
                            : i.jsx('span', {
                                className: 'text-xs text-gray-600',
                                children: 'Result',
                              }),
                        ],
                      }),
                      l &&
                        i.jsx('span', {
                          className: 'text-xs text-gray-500 truncate ml-6',
                          children: l,
                        }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          i.jsx('div', {
            className: 'mt-3 flex justify-center',
            children: i.jsx('button', {
              onClick: M,
              disabled: !D || f || w || S,
              className: `px-6 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                S
                  ? 'bg-green-600 text-white cursor-default'
                  : w
                    ? 'bg-orange-600 text-white cursor-wait animate-pulse'
                    : f
                      ? 'bg-purple-600 text-white cursor-wait animate-pulse'
                      : D
                        ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`,
              children: S
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(rt, { className: 'w-4 h-4' }),
                      i.jsx('span', { children: 'Finish' }),
                    ],
                  })
                : w
                  ? i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(ca, { className: 'w-4 h-4 animate-spin' }),
                        i.jsx('span', { children: 'Comparisioning' }),
                      ],
                    })
                  : f
                    ? i.jsxs(i.Fragment, {
                        children: [
                          i.jsx(ca, { className: 'w-4 h-4 animate-spin' }),
                          i.jsx('span', { children: 'OCR processing' }),
                        ],
                      })
                    : 'OCR',
            }),
          }),
        ],
      }),
    ],
  });
}
function Cp({
  file: e,
  loading: t,
  error: n,
  handleFileUpload: r,
  loadSampleData: l,
  outputCsvName: s,
}) {
  return i.jsxs('div', {
    className:
      'bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden',
    children: [
      i.jsxs('div', {
        className:
          'px-4 md:px-6 py-3 md:py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-2 md:gap-3',
        children: [
          i.jsx('div', {
            className:
              'bg-white p-1.5 rounded-md shadow-sm border border-gray-200',
            children: i.jsx(da, {
              className: 'w-4 h-4 md:w-5 md:h-5 text-blue-600',
            }),
          }),
          i.jsx('h2', {
            className: 'text-sm md:text-lg font-bold text-gray-900',
            children: 'Step 2: Upload CSV (Comparison Result)',
          }),
        ],
      }),
      i.jsxs('div', {
        className: 'p-3 md:p-4',
        children: [
          i.jsxs('div', {
            className: `border-2 border-dashed rounded-lg p-3 md:p-4 text-center transition-all cursor-pointer group relative flex items-center justify-center gap-3 ${
              e
                ? 'border-green-500 bg-green-50'
                : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
            }`,
            title: s,
            children: [
              i.jsx('input', {
                type: 'file',
                accept: '.csv',
                onChange: r,
                className:
                  'absolute inset-0 w-full h-full opacity-0 cursor-pointer',
              }),
              i.jsxs('div', {
                className: 'pointer-events-none flex items-center gap-3',
                children: [
                  e
                    ? i.jsx(rt, {
                        className:
                          'w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0',
                      })
                    : i.jsx(da, {
                        className:
                          'w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0',
                      }),
                  i.jsxs('div', {
                    className: 'text-left',
                    children: [
                      i.jsx('p', {
                        className:
                          'text-xs md:text-sm font-semibold text-gray-700',
                        children: e ? e.name : 'Click to upload CSV',
                      }),
                      !e &&
                        s &&
                        i.jsx('p', {
                          className: 'text-xs text-gray-500',
                          children: s,
                        }),
                      !e &&
                        !s &&
                        i.jsx('p', {
                          className: 'text-xs text-gray-500',
                          children: 'or drag and drop',
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsx('div', {
            className: 'mt-2 text-center',
            children: i.jsx('button', {
              onClick: l,
              className:
                'text-xs text-blue-600 hover:text-blue-800 underline underline-offset-1',
              children: 'Load sample data',
            }),
          }),
          t &&
            i.jsxs('div', {
              className:
                'mt-4 md:mt-6 flex items-center justify-center gap-2 md:gap-3',
              children: [
                i.jsx('div', {
                  className:
                    'animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-2 border-blue-600 border-t-transparent',
                }),
                i.jsx('span', {
                  className: 'text-sm md:text-base text-gray-600 font-medium',
                  children: 'Processing CSV...',
                }),
              ],
            }),
          n &&
            i.jsxs('div', {
              className:
                'mt-4 md:mt-6 bg-red-50 border border-red-200 rounded-lg p-3 md:p-4 flex items-start gap-2 md:gap-3 text-sm text-red-700',
              children: [
                i.jsx(Js, { className: 'w-4 h-4 md:w-5 md:h-5 flex-shrink-0' }),
                i.jsx('span', { className: 'break-words', children: n }),
              ],
            }),
        ],
      }),
    ],
  });
}
function _p({
  isVisible: e,
  fields: t,
  selectedField: n,
  onFieldSelect: r,
  onClose: l,
  activeCard: s,
}) {
  const o = B.useRef(null);
  return (
    B.useEffect(() => {
      const a = (u) => {
        o.current && !o.current.contains(u.target) && l();
      };
      return (
        e && document.addEventListener('mousedown', a),
        () => {
          document.removeEventListener('mousedown', a);
        }
      );
    }, [e, l]),
    e
      ? i.jsx('div', {
          ref: o,
          className:
            'w-full md:w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200',
          onClick: (a) => a.stopPropagation(),
          children: i.jsx('div', {
            children: i.jsx('div', {
              className: 'max-h-64 overflow-y-auto',
              children:
                t && t.length > 0
                  ? i.jsx('div', {
                      className: 'flex flex-wrap gap-2',
                      children: t.map((a) =>
                        i.jsxs(
                          'button',
                          {
                            onClick: () => r(a.name),
                            className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                              n === a.name
                                ? 'bg-red-500 text-white shadow-md hover:bg-red-600'
                                : 'bg-white text-red-600 hover:bg-red-50 border border-red-400'
                            }`,
                            children: [
                              i.jsx('span', { children: a.name }),
                              i.jsx('span', {
                                className: `text-xs px-1.5 py-0.5 rounded-full ${
                                  n === a.name
                                    ? 'bg-red-600 text-white'
                                    : 'bg-red-100 text-red-700'
                                }`,
                                children: a.count,
                              }),
                            ],
                          },
                          a.name
                        )
                      ),
                    })
                  : i.jsxs('div', {
                      className: 'px-4 py-6 text-center',
                      children: [
                        i.jsx(qs, {
                          className:
                            'w-8 h-8 text-gray-300 mx-auto mb-2 opacity-50',
                        }),
                        i.jsx('p', {
                          className: 'text-sm text-gray-500',
                          children: 'No fields available',
                        }),
                      ],
                    }),
            }),
          }),
        })
      : null
  );
}
function Ep({
  totalCount: e,
  identicalCount: t,
  differentCount: n,
  onCardClick: r,
  activeCard: l,
  availableFields: s,
  selectedField: o,
  onFieldSelect: a,
  onCloseDropdown: u,
}) {
  const [d, v] = B.useState(!1),
    x = (k) => {
      l === k ? (r(null), v(!1)) : (r(k), v(!0));
    },
    p = () => {
      v(!1);
    },
    y = (k) => {
      a(o === k ? null : k);
    };
  return i.jsx('div', {
    children: i.jsxs('div', {
      className:
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative',
      children: [
        i.jsxs('div', {
          onClick: () => x('total'),
          className: `bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer ${
            l === 'total' ? 'ring-4 ring-blue-200 shadow-md' : ''
          }`,
          children: [
            i.jsxs('div', {
              className: 'flex items-center justify-between mb-3 md:mb-4',
              children: [
                i.jsx('p', {
                  className: 'text-xs md:text-sm font-medium text-gray-500',
                  children: 'Total Records',
                }),
                i.jsx(yp, {
                  className:
                    'w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0',
                }),
              ],
            }),
            i.jsxs('div', {
              children: [
                i.jsx('p', {
                  className: 'text-2xl md:text-3xl font-bold text-gray-900',
                  children: e,
                }),
                i.jsx('p', {
                  className: 'text-[10px] md:text-xs text-gray-400 mt-1',
                  children: 'Items processed',
                }),
              ],
            }),
          ],
        }),
        i.jsxs('div', {
          onClick: () => x('identical'),
          className: `bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 flex flex-col justify-between hover:shadow-md transition-all border-l-4 border-l-green-500 cursor-pointer ${
            l === 'identical' ? 'ring-4 ring-green-200 shadow-md' : ''
          }`,
          children: [
            i.jsxs('div', {
              className: 'flex items-center justify-between mb-3 md:mb-4',
              children: [
                i.jsx('p', {
                  className: 'text-xs md:text-sm font-medium text-gray-500',
                  children: 'Identical',
                }),
                i.jsx(rt, {
                  className:
                    'w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0',
                }),
              ],
            }),
            i.jsxs('div', {
              children: [
                i.jsx('p', {
                  className: 'text-2xl md:text-3xl font-bold text-green-600',
                  children: t,
                }),
                i.jsxs('p', {
                  className: 'text-[10px] md:text-xs text-gray-500 mt-1',
                  children: [
                    e > 0 ? ((t / e) * 100).toFixed(1) : 0,
                    '% Accuracy',
                  ],
                }),
              ],
            }),
          ],
        }),
        i.jsxs('div', {
          onClick: () => x('discrepancies'),
          className: `bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 flex flex-col justify-between hover:shadow-md transition-all border-l-4 border-l-red-500 sm:col-span-2 md:col-span-1 cursor-pointer relative ${
            l === 'discrepancies' ? 'ring-4 ring-red-200 shadow-md' : ''
          }`,
          children: [
            i.jsxs('div', {
              className: 'flex items-center justify-between mb-3 md:mb-4',
              children: [
                i.jsx('p', {
                  className: 'text-xs md:text-sm font-medium text-gray-500',
                  children: 'Discrepancies',
                }),
                i.jsx(eo, {
                  className: 'w-4 h-4 md:w-5 md:h-5 text-red-500 flex-shrink-0',
                }),
              ],
            }),
            i.jsxs('div', {
              children: [
                i.jsx('p', {
                  className: 'text-2xl md:text-3xl font-bold text-red-600',
                  children: n,
                }),
                i.jsxs('p', {
                  className: 'text-[10px] md:text-xs text-gray-500 mt-1',
                  children: [
                    e > 0 ? ((n / e) * 100).toFixed(1) : 0,
                    '% Error Rate',
                  ],
                }),
              ],
            }),
            i.jsx('div', {
              className: 'absolute top-full left-0 right-0 mt-2 z-50',
              children: i.jsx(_p, {
                isVisible: l === 'discrepancies',
                fields: s || [],
                selectedField: o,
                onFieldSelect: y,
                onClose: p,
                activeCard: l,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const Yt = (e, t) =>
    !e.differences || e.differences.length === 0
      ? ''
      : e.differences.find((r) => r.field === t)
        ? 'bg-red-50 font-bold'
        : '',
  Xt = (e, t, n) => {
    const r = {};
    return n && ((r.border = '3px solid #dc2626'), (r.color = '#b91c1c')), r;
  },
  Pp = (e, t, n, r, l = 'paired', s = {}) => {
    if (!e || e.length === 0) return;
    const o = Object.keys(e[0].rowBL),
      a = Object.keys(e[0].rowQAA),
      u = [
        'PDF Created At',
        'ID',
        'PDF ID',
        'Excel Name',
        'Created At',
        'PDF Name',
        'Report Company',
        'Report Tax Form',
        'Source ID',
        'Status',
      ],
      d = (g) => {
        const w = g.filter((F) => !u.includes(F)),
          C = [
            'Invoice No',
            'Date',
            'ref_doc',
            'Doc Type',
            'Vendor Name',
            'Tax ID',
            'Branch',
            'Net Amount',
            'VAT Amount',
            'Grand Total',
            'PDF Name',
            'PDF Path',
          ],
          S = w
            .filter((F) => C.includes(F))
            .sort((F, A) => C.indexOf(F) - C.indexOf(A)),
          _ = w.filter((F) => !C.includes(F)).sort();
        return [...S, ..._];
      },
      v = (g) => {
        const w = Object.keys(g.rowBL).filter((_) => !u.includes(_)),
          C = Object.keys(g.rowQAA)
            .filter((_) => !u.includes(_))
            .map((_) => _.replace(/^PDF /, '')),
          S = [...new Set([...w, ...C])];
        return d(S);
      },
      x = (g, w) => {
        if (g[w] !== void 0) return g[w];
        if (g[`PDF ${w}`] !== void 0) return g[`PDF ${w}`];
      },
      p = (g) => {
        const w = g['Report Company'] || '',
          C = g['Report Tax Form'] || '',
          S = g['Source ID'] || '',
          _ = [];
        return (
          w && _.push(`Business Name:${w}`),
          C && _.push(`Code:${C}`),
          S && _.push(`Tax Number:${S}`),
          _.join(`
`)
        );
      },
      y = d([...new Set([...o, ...a])]),
      k = y.filter((g) => g !== 'PDF Path'),
      N = v(e[0]).filter((g) => g !== 'Path');
    let T;
    if (l === 'alternating') {
      const g = ['ลำดับ', 'สถานะ'];
      y.forEach((w) => {
        w !== 'PDF Path' && g.push(`${t}-${w}`), g.push(`${n}-${w}`);
      }),
        g.push('ฟิลด์ที่แตกต่าง'),
        g.push('Notes'),
        g.push('Details'),
        (T = [
          g.join(','),
          ...e.map((w, C) => {
            const S = [w.index + 1, w.isIdentical ? 'เหมือนกัน' : 'แตกต่าง'];
            y.forEach((F) => {
              F !== 'PDF Path' && S.push(`"${w.rowBL[F] || ''}"`),
                S.push(`"${w.rowQAA[F] || ''}"`);
            });
            const _ =
              w.differences.length > 0
                ? w.differences.map((F) => `• ${F.field}`).join(`
`)
                : 'ข้อมูลถูกต้อง';
            return (
              S.push(`"${_}"`),
              S.push(`"${s[w.index] || ''}"`),
              S.push(C === 0 ? `"${p(w.rowBL)}"` : ''),
              S.join(',')
            );
          }),
        ].join(`
`));
    } else if (l === 'paired') {
      const g = ['ลำดับ', 'สถานะ'];
      k.forEach((w) => {
        g.push(`${t}-${w}`);
      }),
        y.forEach((w) => {
          g.push(`${n}-${w}`);
        }),
        g.push('ฟิลด์ที่แตกต่าง'),
        g.push('Notes'),
        g.push('Details'),
        (T = [
          g.join(','),
          ...e.map((w, C) => {
            const S = [w.index + 1, w.isIdentical ? 'เหมือนกัน' : 'แตกต่าง'];
            k.forEach((F) => {
              S.push(`"${w.rowBL[F] || ''}"`);
            }),
              y.forEach((F) => {
                S.push(`"${w.rowQAA[F] || ''}"`);
              });
            const _ =
              w.differences.length > 0
                ? w.differences.map((F) => `• ${F.field}`).join(`
`)
                : 'ข้อมูลถูกต้อง';
            return (
              S.push(`"${_}"`),
              S.push(`"${s[w.index] || ''}"`),
              S.push(C === 0 ? `"${p(w.rowBL)}"` : ''),
              S.join(',')
            );
          }),
        ].join(`
`));
    } else if (l === 'separated') {
      const g = ['ลำดับ', 'แหล่งข้อมูล'];
      N.forEach((C) => {
        g.push(C);
      }),
        g.push('ฟิลด์ที่แตกต่าง'),
        g.push('Notes'),
        g.push('Details');
      const w = [];
      w.push(g.join(',')),
        e.forEach((C, S) => {
          const _ = [C.index + 1, `"${t}"`];
          N.forEach((W) => {
            const de = x(C.rowBL, W);
            _.push(`"${de || ''}"`);
          });
          const F =
            C.differences.length > 0
              ? C.differences.map((W) => `• ${W.field}`).join(`
`)
              : 'ข้อมูลถูกต้อง';
          _.push(`"${F}"`),
            _.push(`"${s[C.index] || ''}"`),
            _.push(S === 0 ? `"${p(C.rowBL)}"` : ''),
            w.push(_.join(','));
          const A = ['', `"${n}"`];
          N.forEach((W) => {
            const de = x(C.rowQAA, W);
            A.push(`"${de || ''}"`);
          }),
            A.push(''),
            A.push(''),
            A.push(''),
            w.push(A.join(','));
        }),
        (T = w.join(`
`));
    } else {
      const g = ['ลำดับ', 'สถานะ'];
      k.forEach((w) => {
        g.push(`${t}-${w}`);
      }),
        y.forEach((w) => {
          g.push(`${n}-${w}`);
        }),
        g.push('ฟิลด์ที่แตกต่าง'),
        g.push('Notes'),
        g.push('Details'),
        (T = [
          g.join(','),
          ...e.map((w, C) => {
            const S = [w.index + 1, w.isIdentical ? 'เหมือนกัน' : 'แตกต่าง'];
            k.forEach((F) => {
              S.push(`"${w.rowBL[F] || ''}"`);
            }),
              y.forEach((F) => {
                S.push(`"${w.rowQAA[F] || ''}"`);
              });
            const _ =
              w.differences.length > 0
                ? w.differences.map((F) => `• ${F.field}`).join(`
`)
                : 'ข้อมูลถูกต้อง';
            return (
              S.push(`"${_}"`),
              S.push(`"${s[w.index] || ''}"`),
              S.push(C === 0 ? `"${p(w.rowBL)}"` : ''),
              S.join(',')
            );
          }),
        ].join(`
`));
    }
    const f = new Blob(['\uFEFF' + T], { type: 'text/csv;charset=utf-8;' }),
      c = document.createElement('a');
    c.href = URL.createObjectURL(f);
    const m = r === 'all' ? 'all' : r === 'identical' ? 'matched' : 'different';
    (c.download = `vat_comparison_${l}_${m}.csv`), c.click();
  };
function fa({
  comparison: e,
  rowIndex: t,
  dismissedIssues: n,
  onDismissIssue: r,
  rowSpan: l,
}) {
  var y;
  const s = [];
  (y = e.differences) == null ||
    y.forEach((k, N) => {
      s.push({ key: `diff-${k.statusColumn}-${N}`, text: k.statusColumn });
    });
  const o = n[t] || {},
    a = s.filter((k) => !o[k.key]);
  let u = '',
    d = '';
  s.length === 0
    ? ((u = ''), (d = ''))
    : a.length === 0
      ? ((u = 'bg-green-50'), (d = ''))
      : ((u = 'bg-red-600'), (d = 'text-white'));
  const [v, x] = B.useState(!1),
    p = () => x(!v);
  return i.jsx('td', {
    className: `px-2 py-2 text-xs border border-gray-200 ${u} ${d}`,
    rowSpan: l,
    children:
      s.length === 0
        ? i.jsx('span', { className: 'text-gray-400', children: 'OK' })
        : s.length === 1
          ? i.jsxs('label', {
              className: 'flex items-center gap-2 cursor-pointer',
              children: [
                i.jsx('input', {
                  type: 'checkbox',
                  checked: o[s[0].key] || !1,
                  onChange: () => r(t, s[0].key),
                  className: 'w-3 h-3 cursor-pointer',
                }),
                i.jsx('span', {
                  className: o[s[0].key]
                    ? 'line-through text-gray-300'
                    : a.length > 0
                      ? 'text-white'
                      : '',
                  children: s[0].text,
                }),
              ],
            })
          : i.jsxs('div', {
              className: 'space-y-1',
              children: [
                i.jsxs('button', {
                  onClick: p,
                  className: `flex items-center gap-1 text-xs font-semibold hover:underline ${
                    a.length > 0 ? 'text-white' : ''
                  }`,
                  children: [
                    i.jsxs('span', { children: [s.length, ' issues'] }),
                    i.jsx('span', { children: v ? '▲' : '▼' }),
                  ],
                }),
                v &&
                  i.jsx('div', {
                    className: 'space-y-1 mt-2',
                    children: s.map((k) => {
                      const N = o[k.key];
                      return i.jsxs(
                        'label',
                        {
                          className: 'flex items-center gap-2 cursor-pointer',
                          children: [
                            i.jsx('input', {
                              type: 'checkbox',
                              checked: N || !1,
                              onChange: () => r(t, k.key),
                              className: 'w-3 h-3 cursor-pointer',
                            }),
                            i.jsx('span', {
                              className: N
                                ? 'line-through text-gray-300'
                                : a.length > 0
                                  ? 'text-white'
                                  : '',
                              children: k.text,
                            }),
                          ],
                        },
                        k.key
                      );
                    }),
                  }),
              ],
            }),
  });
}
function pa({ rowIndex: e, notes: t, onNotesChange: n, rowSpan: r }) {
  const [l, s] = B.useState(!1),
    o = (v) => {
      n(e, v.target.value);
    },
    a = t[e] || '',
    d =
      a.split(`
`).length > 1;
  return i.jsx('td', {
    className: 'px-2 py-2 text-xs border border-gray-200 bg-white',
    rowSpan: r,
    children: i.jsxs('div', {
      className: 'space-y-1',
      children: [
        i.jsx('textarea', {
          value: a,
          onChange: o,
          placeholder: 'Add notes...',
          className: `w-full px-0 py-0 border-none bg-transparent text-xs focus:outline-none resize-none ${
            l ? 'h-24' : 'h-5'
          }`,
          style: { overflow: 'hidden' },
        }),
        d &&
          !l &&
          i.jsx('button', {
            onClick: () => s(!0),
            className: 'text-blue-600 text-xs font-medium hover:underline',
            children: 'Show all',
          }),
        l &&
          i.jsx('button', {
            onClick: () => s(!1),
            className: 'text-blue-600 text-xs font-medium hover:underline',
            children: 'Show less',
          }),
      ],
    }),
  });
}
function Fp({ filePath: e }) {
  const [t, n] = B.useState(!1),
    [r, l] = B.useState(!1);
  if (!e || e.trim() === '')
    return i.jsx('span', { className: 'text-gray-400', children: '-' });
  const s = (p) => {
      const y = p.replace(/\\/g, '/').split('/');
      return y[y.length - 1] || p;
    },
    o = (p) => s(p).split('.').pop().toLowerCase(),
    a = s(e),
    u = o(e),
    d = (p) =>
      /^[A-Za-z]:\\/.test(p) || (p.startsWith('/') && !p.startsWith('//')),
    v = () => {
      if (d(e)) {
        const p = encodeURIComponent(e);
        window.open(`/api/file?path=${p}`, '_blank');
      } else window.open(e, '_blank');
    },
    x = () => {
      if (!t) return null;
      const p = u === 'pdf',
        y = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(u);
      return i.jsxs('div', {
        className:
          'absolute z-[9999] top-full left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 min-w-max max-w-md pointer-events-auto',
        onMouseEnter: () => n(!0),
        onMouseLeave: () => n(!1),
        children: [
          i.jsxs('div', {
            className: 'flex items-center justify-between mb-3',
            children: [
              i.jsx('span', {
                className: 'text-xs font-semibold text-gray-700 truncate',
                children: a,
              }),
              i.jsx('button', {
                onClick: () => n(!1),
                className: 'text-gray-400 hover:text-gray-600 text-lg',
                children: '×',
              }),
            ],
          }),
          p
            ? i.jsx('div', {
                className: 'bg-gray-100 rounded overflow-hidden',
                style: { width: '800px', height: '600px' },
                children: i.jsx('iframe', {
                  src: d(e) ? `/api/file?path=${encodeURIComponent(e)}` : e,
                  className: 'w-full h-full border-0',
                  title: a,
                  onError: (k) => {
                    (k.target.style.display = 'none'),
                      (k.target.parentElement.innerHTML =
                        '<div class="h-full flex flex-col items-center justify-center text-center"><svg class="w-12 h-12 text-red-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><p class="text-xs text-gray-600">Failed to load PDF</p></div>');
                  },
                }),
              })
            : y
              ? i.jsx('div', {
                  className: 'bg-gray-100 rounded overflow-hidden',
                  children: i.jsx('img', {
                    src: d(e) ? `/api/file?path=${encodeURIComponent(e)}` : e,
                    alt: a,
                    className: 'max-h-64 max-w-md object-contain',
                    onError: (k) => {
                      (k.target.style.display = 'none'),
                        (k.target.parentElement.innerHTML =
                          '<div class="h-48 flex items-center justify-center text-xs text-gray-500">Failed to load image</div>');
                    },
                  }),
                })
              : i.jsxs('div', {
                  className:
                    'bg-gray-100 rounded p-3 h-48 flex flex-col items-center justify-center text-center',
                  children: [
                    i.jsx(aa, { className: 'w-12 h-12 text-gray-400 mb-2' }),
                    i.jsxs('p', {
                      className: 'text-xs text-gray-600 mb-2',
                      children: [u.toUpperCase(), ' File'],
                    }),
                    i.jsxs('button', {
                      onClick: v,
                      className:
                        'flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700',
                      children: [i.jsx(Fc, { className: 'w-3 h-3' }), 'Open'],
                    }),
                  ],
                }),
        ],
      });
    };
  return i.jsxs('div', {
    className: 'relative inline-block whitespace-nowrap',
    children: [
      i.jsxs('button', {
        onClick: v,
        onMouseEnter: () => n(!0),
        onMouseLeave: () => n(!1),
        className:
          'flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors group whitespace-nowrap',
        children: [
          i.jsx(aa, { className: 'w-3 h-3 flex-shrink-0' }),
          i.jsx('span', {
            className:
              'max-w-[100px] underline overflow-ellipsis overflow-hidden',
            children: a,
          }),
        ],
      }),
      x(),
    ],
  });
}
function Dp({
  filteredComparison: e,
  fullComparison: t,
  displayMode: n,
  setDisplayMode: r,
  filterMode: l,
  setFilterMode: s,
  expandedRow: o,
  setExpandedRow: a,
  section1Name: u,
  section2Name: d,
  s1TextColor: v,
  s1BgColor: x,
  s2TextColor: p,
  s2BgColor: y,
  matchedRowBgColor: k,
  mismatchedRowBgColor: N,
  businessInfo: T,
}) {
  const [f, c] = te.useState({}),
    [m, g] = te.useState({}),
    [w, C] = te.useState(''),
    [S, _] = te.useState('all'),
    F = (h, j) => {
      c((P) => {
        var I;
        return {
          ...P,
          [h]: { ...(P[h] || {}), [j]: !((I = P[h]) != null && I[j]) },
        };
      });
    },
    A = (h, j) => {
      g((P) => ({ ...P, [h]: j }));
    },
    W = [
      'PDF Created At',
      'ID',
      'PDF ID',
      'Excel Name',
      'Created At',
      'PDF Name',
      'Report Company',
      'Report Tax Form',
      'Source ID',
    ],
    de =
      e && e.length > 0
        ? [
            ...new Set([
              ...Object.keys(e[0].rowBL),
              ...Object.keys(e[0].rowQAA),
            ]),
          ].filter((h) => h !== 'Status' && !W.includes(h))
        : [],
    we = (h) => {
      const j = h.filter((R) => !W.includes(R)),
        P = [
          'Invoice No',
          'Date',
          'ref_doc',
          'Doc Type',
          'Vendor Name',
          'Tax ID',
          'Branch',
          'Net Amount',
          'VAT Amount',
          'Grand Total',
          'PDF Name',
          'PDF Path',
        ],
        I = j
          .filter((R) => P.includes(R))
          .sort((R, $) => P.indexOf(R) - P.indexOf($)),
        z = j.filter((R) => !P.includes(R)).sort();
      return [...I, ...z];
    },
    Ge = (h) => {
      const j = Object.keys(h.rowBL).filter((z) => !W.includes(z)),
        P = Object.keys(h.rowQAA)
          .filter((z) => !W.includes(z))
          .map((z) => z.replace(/^PDF /, '')),
        I = [...new Set([...j, ...P])];
      return we(I);
    },
    Pe = (h, j) => {
      if (h[j] !== void 0) return h[j];
      if (h[`PDF ${j}`] !== void 0) return h[`PDF ${j}`];
    },
    ke = te.useMemo(
      () =>
        !e || e.length === 0
          ? []
          : w
            ? e.filter((h) => {
                const j = w.toLowerCase();
                if (S === 'all')
                  return [...Object.values(h.rowBL), ...Object.values(h.rowQAA)]
                    .map((I) => String(I).toLowerCase())
                    .some((I) => I.includes(j));
                {
                  const P = String(h.rowBL[S] || '').toLowerCase(),
                    I = String(h.rowQAA[S] || '').toLowerCase();
                  return P.includes(j) || I.includes(j);
                }
              })
            : e,
      [e, w, S]
    ),
    Ye = () => {
      Pp(t, u, d, l, n, m);
    },
    D = (h, j) =>
      h === 'Status'
        ? null
        : h === 'PDF Path' || h === 'Path'
          ? i.jsx(Fp, { filePath: j })
          : h.includes('VAT') || h.includes('Net') || h.includes('Total')
            ? j
              ? Sp(j)
              : '-'
            : j || '-',
    O = (h) => {
      switch (n) {
        case 'alternating':
          return h.map((j, P) =>
            i.jsxs(
              te.Fragment,
              {
                children: [
                  j !== 'PDF Path' &&
                    i.jsx('th', {
                      className: `px-1 md:px-2 py-2 md:py-3 text-left font-semibold text-[10px] md:text-xs border border-gray-200 ${
                        P === 0 ? 'border-l-4' : ''
                      }`,
                      style: {
                        color: v,
                        borderLeftColor: P === 0 ? x : void 0,
                      },
                      children: i.jsxs('div', {
                        className: 'flex flex-col',
                        children: [
                          i.jsx('span', {
                            className:
                              'opacity-70 text-[8px] md:text-[10px] hidden md:block',
                            children: u,
                          }),
                          i.jsx('span', {
                            className: 'truncate max-w-[80px] md:max-w-none',
                            children: j,
                          }),
                        ],
                      }),
                    }),
                  i.jsx('th', {
                    className:
                      'px-1 md:px-2 py-2 md:py-3 text-left font-semibold text-[10px] md:text-xs border border-gray-200 border-r-[3px] border-r-black',
                    style: { color: p },
                    children: i.jsxs('div', {
                      className: 'flex flex-col',
                      children: [
                        i.jsx('span', {
                          className:
                            'opacity-70 text-[8px] md:text-[10px] hidden md:block',
                          children: d,
                        }),
                        i.jsx('span', {
                          className: 'truncate max-w-[80px] md:max-w-none',
                          children: j,
                        }),
                      ],
                    }),
                  }),
                ],
              },
              j
            )
          );
        case 'paired':
          return i.jsxs(i.Fragment, {
            children: [
              h
                .filter((j) => j !== 'PDF Path')
                .map((j, P) =>
                  i.jsx(
                    'th',
                    {
                      className: `px-2 py-3 text-left font-semibold text-xs border border-gray-200 ${
                        P === 0 ? 'border-l-4' : ''
                      }`,
                      style: {
                        color: v,
                        borderLeftColor: P === 0 ? x : void 0,
                      },
                      children: j,
                    },
                    `s1-${j}`
                  )
                ),
              h.map((j, P) =>
                i.jsx(
                  'th',
                  {
                    className: `px-2 py-3 text-left font-semibold text-xs border border-gray-200 ${
                      P === 0 ? 'border-l-4' : ''
                    }`,
                    style: { color: p, borderLeftColor: P === 0 ? y : void 0 },
                    children: j,
                  },
                  `s2-${j}`
                )
              ),
            ],
          });
        case 'separated':
          return i.jsxs(i.Fragment, {
            children: [
              i.jsx('th', {
                className:
                  'px-2 py-3 text-left font-semibold text-xs text-gray-700 bg-gray-100 border border-gray-200',
                children: 'Section',
              }),
              h.map((j) =>
                i.jsx(
                  'th',
                  {
                    className:
                      'px-2 py-3 text-left font-semibold text-xs text-gray-700 bg-gray-100 border border-gray-200',
                    children: j,
                  },
                  `s1-${j}`
                )
              ),
            ],
          });
        default:
          return null;
      }
    },
    M = (h, j) => {
      switch (n) {
        case 'alternating':
          return j.map((P, I) => {
            if (P === 'Status') return null;
            const z =
                !h.isIdentical && h.differences.some((Q) => Q.field === P),
              R = Pe(h.rowBL, P),
              $ = Pe(h.rowQAA, P);
            return i.jsxs(
              te.Fragment,
              {
                children: [
                  P !== 'PDF Path' &&
                    i.jsx('td', {
                      className: `px-1 md:px-2 py-1 md:py-2 text-[10px] md:text-xs border border-gray-200 ${
                        I === 0 ? 'border-l-4' : ''
                      } ${Yt(h, P)}`,
                      style: {
                        ...Xt(h, P, z),
                        borderLeftColor: I === 0 ? (z ? '#ef4444' : x) : void 0,
                      },
                      children:
                        P === 'PDF Path'
                          ? D(P, R)
                          : i.jsx('span', {
                              className:
                                'truncate block max-w-[100px] md:max-w-none',
                              children: D(P, R),
                            }),
                    }),
                  i.jsx('td', {
                    className: `px-1 md:px-2 py-1 md:py-2 text-[10px] md:text-xs border border-gray-200 border-r-[3px] border-r-black ${Yt(
                      h,
                      P
                    )}`,
                    style: Xt(h, P, z),
                    children:
                      P === 'PDF Path'
                        ? D(P, $)
                        : i.jsx('span', {
                            className:
                              'truncate block max-w-[100px] md:max-w-none',
                            children: D(P, $),
                          }),
                  }),
                ],
              },
              P
            );
          });
        case 'paired':
          return i.jsxs(i.Fragment, {
            children: [
              j
                .filter((P) => P !== 'PDF Path')
                .map((P, I) => {
                  if (P === 'Status') return null;
                  const z =
                    !h.isIdentical && h.differences.some((R) => R.field === P);
                  return i.jsx(
                    'td',
                    {
                      className: `px-2 py-2 text-xs border border-gray-200 ${
                        I === 0 ? 'border-l-4' : ''
                      } ${Yt(h, P)}`,
                      style: {
                        ...Xt(h, P, z),
                        borderLeftColor: I === 0 ? v : void 0,
                      },
                      children: D(P, Pe(h.rowBL, P)),
                    },
                    `s1-${P}`
                  );
                }),
              j.map((P, I) => {
                if (P === 'Status') return null;
                const z =
                    !h.isIdentical && h.differences.some(($) => $.field === P),
                  R = P === 'PDF Path';
                return i.jsx(
                  'td',
                  {
                    className: `px-2 py-2 text-xs border border-gray-200 ${
                      I === 0 ? 'border-l-4' : ''
                    } ${Yt(h, P)} ${R ? 'overflow-visible' : ''}`,
                    style: {
                      ...Xt(h, P, z),
                      borderLeftColor: I === 0 ? p : void 0,
                    },
                    children: D(P, Pe(h.rowQAA, P)),
                  },
                  `s2-${P}`
                );
              }),
            ],
          });
        default:
          return null;
      }
    };
  return i.jsxs('div', {
    className:
      'bg-white rounded-2xl shadow-md border border-gray-200 overflow-visible',
    children: [
      i.jsxs('div', {
        className:
          'px-3 md:px-6 py-3 md:py-4 border-b border-gray-200 flex flex-row justify-between items-center gap-3 md:gap-4 bg-gray-50 rounded-t-2xl overflow-hidden',
        children: [
          i.jsx('div', {
            className: 'flex-1',
            children:
              T &&
              (T.businessName || T.businessCode || T.taxNumber) &&
              i.jsxs('div', {
                className:
                  'flex items-center gap-3 md:gap-6 text-sm md:text-base',
                children: [
                  T.businessName &&
                    i.jsxs('div', {
                      className: 'flex items-center gap-2',
                      children: [
                        i.jsx('span', {
                          className: 'text-gray-700',
                          children: 'Business Name:',
                        }),
                        i.jsx('span', {
                          className:
                            'text-gray-900 font-bold whitespace-nowrap',
                          children: T.businessName,
                        }),
                      ],
                    }),
                  T.businessCode &&
                    i.jsxs('div', {
                      className: 'flex items-center gap-2',
                      children: [
                        i.jsx('span', {
                          className: 'text-gray-700',
                          children: 'Code:',
                        }),
                        i.jsx('span', {
                          className:
                            'text-gray-900 font-bold whitespace-nowrap',
                          children: T.businessCode,
                        }),
                      ],
                    }),
                  T.taxNumber &&
                    i.jsxs('div', {
                      className: 'flex items-center gap-2',
                      children: [
                        i.jsx('span', {
                          className: 'text-gray-700',
                          children: 'Tax Number:',
                        }),
                        i.jsx('span', {
                          className:
                            'text-gray-900 font-bold whitespace-nowrap',
                          children: T.taxNumber,
                        }),
                      ],
                    }),
                ],
              }),
          }),
          i.jsxs('div', {
            className: 'flex flex-wrap items-center gap-2 md:gap-3',
            children: [
              i.jsxs('select', {
                value: S,
                onChange: (h) => _(h.target.value),
                className:
                  'px-2 md:px-3 py-1.5 md:py-2 text-xs font-medium border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
                children: [
                  i.jsx('option', { value: 'all', children: 'All Columns' }),
                  de.map((h) => i.jsx('option', { value: h, children: h }, h)),
                ],
              }),
              i.jsx('input', {
                type: 'text',
                placeholder: 'Search...',
                value: w,
                onChange: (h) => C(h.target.value),
                className:
                  'px-3 md:px-4 py-1.5 md:py-2 text-xs border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 md:w-48',
              }),
              i.jsx('div', {
                className: 'h-6 w-px bg-gray-300 mx-1 hidden lg:block',
              }),
              i.jsxs('div', {
                className:
                  'bg-white rounded-lg border border-gray-200 p-0.5 md:p-1 flex',
                children: [
                  i.jsxs('button', {
                    onClick: () => r('alternating'),
                    className: `px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                      n === 'alternating'
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`,
                    children: [
                      i.jsx(ml, { className: 'w-3 h-3' }),
                      ' ',
                      i.jsx('span', {
                        className: 'hidden sm:inline',
                        children: 'Split',
                      }),
                    ],
                  }),
                  i.jsxs('button', {
                    onClick: () => r('paired'),
                    className: `px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                      n === 'paired'
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`,
                    children: [
                      i.jsx(ml, { className: 'w-3 h-3' }),
                      ' ',
                      i.jsx('span', {
                        className: 'hidden sm:inline',
                        children: 'Paired',
                      }),
                    ],
                  }),
                  i.jsxs('button', {
                    onClick: () => r('separated'),
                    className: `px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                      n === 'separated'
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`,
                    children: [
                      i.jsx(xp, { className: 'w-3 h-3' }),
                      ' ',
                      i.jsx('span', {
                        className: 'hidden sm:inline',
                        children: 'Rows',
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs('button', {
                onClick: Ye,
                className:
                  'flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs font-semibold shadow-sm transition-colors',
                children: [
                  i.jsx(Fc, { className: 'w-3 h-3' }),
                  i.jsx('span', {
                    className: 'hidden sm:inline',
                    children: 'Export CSV',
                  }),
                  i.jsx('span', { className: 'sm:hidden', children: 'Export' }),
                ],
              }),
            ],
          }),
        ],
      }),
      ke.length > 0
        ? i.jsx('div', {
            className:
              'overflow-x-auto overflow-y-visible custom-scrollbar rounded-b-2xl',
            children: i.jsxs('table', {
              className:
                'w-full text-left border-collapse border border-gray-200 relative',
              style: { minWidth: '800px' },
              children: [
                i.jsx('thead', {
                  className: 'bg-gray-100 sticky top-0 z-20 shadow-sm',
                  children: i.jsxs('tr', {
                    children: [
                      i.jsx('th', {
                        className:
                          'px-1 md:px-2 py-2 md:py-3 font-semibold text-gray-600 text-[10px] md:text-xs uppercase tracking-wider sticky left-0 bg-gray-100 z-30 border border-gray-200 w-8 md:w-12 text-center',
                        children: '#',
                      }),
                      n !== 'separated' &&
                        i.jsx('th', {
                          className:
                            'px-1 md:px-2 py-2 md:py-3 font-semibold text-gray-600 text-[10px] md:text-xs uppercase tracking-wider border border-gray-200 text-center w-8 md:w-10',
                          children: i.jsx(ua, { className: 'w-3 h-3 mx-auto' }),
                        }),
                      O(
                        n === 'separated'
                          ? Ge(ke[0])
                          : we([
                              ...new Set([
                                ...Object.keys(ke[0].rowBL),
                                ...Object.keys(ke[0].rowQAA),
                              ]),
                            ])
                      ),
                      i.jsx('th', {
                        className:
                          'px-1 md:px-2 py-2 md:py-3 font-semibold text-gray-600 text-[10px] md:text-xs uppercase tracking-wider border border-gray-200 text-center',
                        children: 'Status',
                      }),
                      i.jsx('th', {
                        className:
                          'px-1 md:px-2 py-2 md:py-3 font-semibold text-gray-600 text-[10px] md:text-xs uppercase tracking-wider border border-gray-200 text-center',
                        children: 'Notes',
                      }),
                      i.jsx('th', {
                        className:
                          'px-1 md:px-2 py-2 md:py-3 border border-gray-200 w-6 md:w-8',
                      }),
                    ],
                  }),
                }),
                i.jsx('tbody', {
                  className: 'bg-white',
                  children: ke.map((h) => {
                    const j = o === h.index,
                      P = Object.keys(h.rowBL),
                      I = Object.keys(h.rowQAA);
                    let z = [...new Set([...P, ...I])];
                    (z = we(z)), z.push('Status');
                    let R = n === 'separated' ? Ge(h) : z;
                    return (
                      n === 'separated' && R.push('Status'),
                      h.hasDataIssue,
                      h.hasDataIssue &&
                        [
                          h.dataset1Empty ? 'Dataset 1 has no data' : null,
                          h.dataset2Empty ? 'Dataset 2 has no data' : null,
                        ].filter(Boolean),
                      h.dataset1Empty,
                      h.dataset2Empty,
                      n === 'separated'
                        ? i.jsxs(
                            te.Fragment,
                            {
                              children: [
                                i.jsxs('tr', {
                                  className:
                                    'hover:bg-gray-50 transition-colors',
                                  style: {
                                    backgroundColor: h.isIdentical ? k : N,
                                  },
                                  children: [
                                    i.jsxs('td', {
                                      className:
                                        'px-2 py-2 text-center text-xs font-bold text-gray-500 sticky left-0 z-10 bg-inherit border border-gray-200',
                                      rowSpan: 2,
                                      children: [
                                        h.index + 1,
                                        i.jsx('div', {
                                          className: 'mt-1',
                                          children: h.isIdentical
                                            ? i.jsx(rt, {
                                                className:
                                                  'w-4 h-4 text-green-500 mx-auto',
                                              })
                                            : i.jsx(eo, {
                                                className:
                                                  'w-4 h-4 text-red-500 mx-auto',
                                              }),
                                        }),
                                      ],
                                    }),
                                    i.jsx('td', {
                                      className:
                                        'px-2 py-2 text-xs font-bold border border-gray-200',
                                      style: { color: v },
                                      children: u,
                                    }),
                                    R.filter(($) => $ !== 'Status').map(($) => {
                                      const Q =
                                          !h.isIdentical &&
                                          h.differences.some(
                                            (bt) => bt.field === $
                                          ),
                                        Se = Pe(h.rowBL, $);
                                      return $ === 'Path'
                                        ? i.jsx(
                                            'td',
                                            {
                                              className:
                                                'px-2 py-2 text-xs border border-gray-200 bg-gray-50',
                                              children: '-',
                                            },
                                            `s1-${$}`
                                          )
                                        : i.jsx(
                                            'td',
                                            {
                                              className: `px-2 py-2 text-xs whitespace-nowrap border border-gray-200 ${Yt(
                                                h,
                                                $
                                              )}`,
                                              style: Xt(h, $, Q),
                                              children: D($, Se),
                                            },
                                            `s1-${$}`
                                          );
                                    }),
                                    i.jsx(fa, {
                                      comparison: h,
                                      rowIndex: h.index,
                                      dismissedIssues: f,
                                      onDismissIssue: F,
                                      rowSpan: 2,
                                    }),
                                    i.jsx(pa, {
                                      rowIndex: h.index,
                                      notes: m,
                                      onNotesChange: A,
                                      rowSpan: 2,
                                    }),
                                    i.jsx('td', {
                                      className:
                                        'px-2 py-2 text-center border border-gray-200',
                                      rowSpan: 2,
                                      children:
                                        !h.isIdentical &&
                                        i.jsx('button', {
                                          onClick: () => a(j ? null : h.index),
                                          className:
                                            'p-1 hover:bg-black/10 rounded-full transition-colors',
                                          children: j
                                            ? i.jsx(oa, {
                                                className: 'w-4 h-4',
                                              })
                                            : i.jsx(qs, {
                                                className: 'w-4 h-4',
                                              }),
                                        }),
                                    }),
                                  ],
                                }),
                                i.jsxs('tr', {
                                  className: `hover:bg-gray-50 transition-colors ${
                                    j ? '' : 'border-b-[3px] border-black'
                                  }`,
                                  style: {
                                    backgroundColor: h.isIdentical ? k : N,
                                  },
                                  children: [
                                    i.jsx('td', {
                                      className:
                                        'px-2 py-2 text-xs font-bold border border-gray-200',
                                      style: { color: p },
                                      children: d,
                                    }),
                                    R.filter(($) => $ !== 'Status').map(($) => {
                                      const Q =
                                          !h.isIdentical &&
                                          h.differences.some(
                                            (bt) => bt.field === $
                                          ),
                                        Se = Pe(h.rowQAA, $);
                                      return i.jsx(
                                        'td',
                                        {
                                          className: `px-2 py-2 text-xs whitespace-nowrap border border-gray-200 ${Yt(
                                            h,
                                            $
                                          )}`,
                                          style: Xt(h, $, Q),
                                          children: D($, Se),
                                        },
                                        `s2-${$}`
                                      );
                                    }),
                                  ],
                                }),
                                j &&
                                  !h.isIdentical &&
                                  i.jsx('tr', {
                                    className: 'border-b-[3px] border-black',
                                    children: i.jsx('td', {
                                      colSpan: R.length + 4,
                                      className:
                                        'px-6 py-4 bg-red-50/50 border-t border-red-100 shadow-inner',
                                      children: i.jsxs('div', {
                                        className: 'flex items-start gap-3',
                                        children: [
                                          i.jsx(Js, {
                                            className:
                                              'w-5 h-5 text-red-600 mt-0.5',
                                          }),
                                          i.jsxs('div', {
                                            className: 'w-full',
                                            children: [
                                              i.jsxs('p', {
                                                className:
                                                  'font-bold text-red-800 text-sm mb-3',
                                                children: [
                                                  'Found ',
                                                  h.differences.length,
                                                  ' discrepancies:',
                                                ],
                                              }),
                                              i.jsx('div', {
                                                className:
                                                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3',
                                                children: h.differences.map(
                                                  ($, Q) =>
                                                    i.jsxs(
                                                      'div',
                                                      {
                                                        className:
                                                          'bg-white p-3 rounded-lg border border-red-100 shadow-sm text-xs',
                                                        children: [
                                                          i.jsx('div', {
                                                            className:
                                                              'font-bold text-gray-700 mb-2 pb-1 border-b border-gray-100',
                                                            children: $.field,
                                                          }),
                                                          i.jsxs('div', {
                                                            className:
                                                              'grid grid-cols-[auto_1fr] gap-2',
                                                            children: [
                                                              i.jsx('span', {
                                                                className:
                                                                  'text-gray-400 text-[10px] uppercase font-bold self-center',
                                                                children:
                                                                  'Human:',
                                                              }),
                                                              i.jsx('span', {
                                                                className:
                                                                  'font-mono text-gray-800 bg-gray-50 px-1.5 py-0.5 rounded',
                                                                children:
                                                                  $.valueBL ||
                                                                  '(empty)',
                                                              }),
                                                              i.jsx('span', {
                                                                className:
                                                                  'text-gray-400 text-[10px] uppercase font-bold self-center',
                                                                children: 'AI:',
                                                              }),
                                                              i.jsx('span', {
                                                                className:
                                                                  'font-mono text-gray-800 bg-gray-50 px-1.5 py-0.5 rounded',
                                                                children:
                                                                  $.valueQAA ||
                                                                  '(empty)',
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      },
                                                      Q
                                                    )
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                              ],
                            },
                            h.index
                          )
                        : i.jsxs(
                            te.Fragment,
                            {
                              children: [
                                i.jsxs('tr', {
                                  className:
                                    'hover:bg-gray-50 transition-colors group',
                                  style: {
                                    backgroundColor: h.isIdentical ? k : N,
                                  },
                                  children: [
                                    i.jsx('td', {
                                      className:
                                        'px-1 md:px-2 py-2 md:py-3 text-center text-[10px] md:text-xs font-bold text-gray-500 sticky left-0 bg-inherit border border-gray-200 group-hover:bg-gray-100 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]',
                                      children: h.index + 1,
                                    }),
                                    i.jsx('td', {
                                      className:
                                        'px-1 md:px-2 py-2 md:py-3 text-center border border-gray-200',
                                      children: h.isIdentical
                                        ? i.jsx(rt, {
                                            className:
                                              'w-3 h-3 md:w-4 md:h-4 text-green-500 mx-auto',
                                          })
                                        : i.jsx(eo, {
                                            className:
                                              'w-3 h-3 md:w-4 md:h-4 text-red-500 mx-auto',
                                          }),
                                    }),
                                    M(h, z),
                                    i.jsx(fa, {
                                      comparison: h,
                                      rowIndex: h.index,
                                      dismissedIssues: f,
                                      onDismissIssue: F,
                                    }),
                                    i.jsx(pa, {
                                      rowIndex: h.index,
                                      notes: m,
                                      onNotesChange: A,
                                    }),
                                    i.jsx('td', {
                                      className:
                                        'px-1 md:px-2 py-2 md:py-3 text-center border border-gray-200',
                                      children:
                                        !h.isIdentical &&
                                        i.jsx('button', {
                                          onClick: () => a(j ? null : h.index),
                                          className:
                                            'p-0.5 md:p-1 hover:bg-black/10 rounded-full transition-colors text-gray-600',
                                          children: j
                                            ? i.jsx(oa, {
                                                className:
                                                  'w-3 h-3 md:w-4 md:h-4',
                                              })
                                            : i.jsx(qs, {
                                                className:
                                                  'w-3 h-3 md:w-4 md:h-4',
                                              }),
                                        }),
                                    }),
                                  ],
                                }),
                                j &&
                                  !h.isIdentical &&
                                  i.jsx('tr', {
                                    children: i.jsx('td', {
                                      colSpan: z.length * 2 + 6,
                                      className:
                                        'px-6 py-4 bg-red-50/50 border-y border-red-100 shadow-inner',
                                      children: i.jsxs('div', {
                                        className: 'flex items-start gap-3',
                                        children: [
                                          i.jsx(Js, {
                                            className:
                                              'w-5 h-5 text-red-600 mt-0.5',
                                          }),
                                          i.jsxs('div', {
                                            className: 'w-full',
                                            children: [
                                              i.jsxs('p', {
                                                className:
                                                  'font-bold text-red-800 text-sm mb-3',
                                                children: [
                                                  'Found ',
                                                  h.differences.length,
                                                  ' discrepancies:',
                                                ],
                                              }),
                                              i.jsx('div', {
                                                className:
                                                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3',
                                                children: h.differences.map(
                                                  ($, Q) =>
                                                    i.jsxs(
                                                      'div',
                                                      {
                                                        className:
                                                          'bg-white p-3 rounded-lg border border-red-200 shadow-sm text-xs relative overflow-hidden',
                                                        children: [
                                                          i.jsx('div', {
                                                            className:
                                                              'absolute top-0 left-0 w-1 h-full bg-red-400',
                                                          }),
                                                          i.jsx('div', {
                                                            className:
                                                              'font-bold text-gray-700 mb-2 pb-1 border-b border-gray-100 pl-2',
                                                            children: $.field,
                                                          }),
                                                          i.jsxs('div', {
                                                            className:
                                                              'grid grid-cols-[auto_1fr] gap-2 pl-2',
                                                            children: [
                                                              i.jsx('span', {
                                                                className:
                                                                  'text-gray-400 text-[10px] uppercase font-bold self-center',
                                                                children:
                                                                  'Human:',
                                                              }),
                                                              i.jsx('span', {
                                                                className:
                                                                  'font-mono text-red-700 bg-red-50 px-1.5 py-0.5 rounded break-all',
                                                                children:
                                                                  $.valueBL ||
                                                                  '∅',
                                                              }),
                                                              i.jsx('span', {
                                                                className:
                                                                  'text-gray-400 text-[10px] uppercase font-bold self-center',
                                                                children: 'AI:',
                                                              }),
                                                              i.jsx('span', {
                                                                className:
                                                                  'font-mono text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded break-all',
                                                                children:
                                                                  $.valueQAA ||
                                                                  '∅',
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      },
                                                      Q
                                                    )
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                              ],
                            },
                            h.index
                          )
                    );
                  }),
                }),
              ],
            }),
          })
        : i.jsxs('div', {
            className:
              'p-16 text-center flex flex-col items-center rounded-b-2xl overflow-hidden',
            children: [
              i.jsx('div', {
                className:
                  'w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4',
                children: i.jsx(ua, { className: 'w-10 h-10 text-gray-300' }),
              }),
              i.jsx('h3', {
                className: 'text-lg font-bold text-gray-900',
                children: 'No records found',
              }),
              i.jsx('p', {
                className: 'text-gray-500 max-w-sm mt-1',
                children:
                  'Try adjusting your filters or uploading a different file.',
              }),
              i.jsx('button', {
                onClick: () => s('all'),
                className:
                  'mt-4 text-blue-600 text-sm font-medium hover:underline',
                children: 'Clear Filters',
              }),
            ],
          }),
    ],
  });
}
const Lp = () => {
    const [e, t] = B.useState(null),
      [n, r] = B.useState(null),
      [l, s] = B.useState(!1),
      [o, a] = B.useState(null),
      [u, d] = B.useState(null),
      [v, x] = B.useState('all'),
      [p, y] = B.useState('alternating'),
      [k, N] = B.useState(0),
      [T, f] = B.useState(16),
      [c, m] = B.useState(16),
      [g, w] = B.useState(29),
      [C, S] = B.useState(!1),
      [_, F] = B.useState('Excel Data'),
      [A, W] = B.useState('PDF Data'),
      [de, we] = B.useState('#eff6ff'),
      [Ge, Pe] = B.useState('#1d4ed8'),
      [ke, Ye] = B.useState('#f5f3ff'),
      [D, O] = B.useState('#6b21a8'),
      [M, h] = B.useState('#fef9c3'),
      [j, P] = B.useState('#fee2e2'),
      [I, z] = B.useState(''),
      [R, $] = B.useState(''),
      [Q, Se] = B.useState(''),
      [bt, Ll] = B.useState('ยังไม่มีข้อมูล'),
      [Kt, Lc] = B.useState(!1),
      [Tc, Ic] = B.useState(null),
      [zc, Rc] = B.useState(null),
      [Ac, $c] = B.useState(null),
      [Oc, Mc] = B.useState({
        businessName: '',
        businessCode: '',
        taxNumber: '',
      });
    return {
      file: e,
      setFile: t,
      comparison: n,
      setComparison: r,
      loading: l,
      setLoading: s,
      error: o,
      setError: a,
      expandedRow: u,
      setExpandedRow: d,
      filterMode: v,
      setFilterMode: x,
      displayMode: p,
      setDisplayMode: y,
      sectionBLStart: k,
      setSectionBLStart: N,
      sectionBLEnd: T,
      setSectionBLEnd: f,
      sectionQAAStart: c,
      setSectionQAAStart: m,
      sectionQAAEnd: g,
      setSectionQAAEnd: w,
      showSettings: C,
      setShowSettings: S,
      section1Name: _,
      setSection1Name: F,
      section2Name: A,
      setSection2Name: W,
      s1BgColor: de,
      setS1BgColor: we,
      s1TextColor: Ge,
      setS1TextColor: Pe,
      s2BgColor: ke,
      setS2BgColor: Ye,
      s2TextColor: D,
      setS2TextColor: O,
      matchedRowBgColor: M,
      setMatchedRowBgColor: h,
      mismatchedRowBgColor: j,
      setMismatchedRowBgColor: P,
      excelFolder: I,
      setExcelFolder: z,
      pdfFolder: R,
      setPdfFolder: $,
      outputCsvName: Q,
      setOutputCsvName: Se,
      driveOutput: bt,
      setDriveOutput: Ll,
      driveLoading: Kt,
      setDriveLoading: Lc,
      driveError: Tc,
      setDriveError: Ic,
      selectedField: zc,
      setSelectedField: Rc,
      activeCard: Ac,
      setActiveCard: $c,
      businessInfo: Oc,
      setBusinessInfo: Mc,
    };
  },
  ma = (e) => (e ? Object.values(e).every((t) => !t || t === '') : !0),
  ha = {
    invoice_status: { field: 'Doc Type', label: 'Doc Type mismatch' },
    buyer_vat_info_status: {
      field: 'Doc Type',
      label: 'Doc Type misinformation',
    },
    invoice_number_status: {
      field: 'Invoice No',
      label: 'Invoice No mismatch',
    },
    date_raw_status: { field: 'Date', label: 'Date mismatch' },
    vendor_name_status: { field: 'Vendor Name', label: 'Vendor Name mismatch' },
    vendor_vat_id_status: { field: 'Tax ID', label: 'Tax ID mismatch' },
    vendor_vat_id_info_status: {
      field: 'Tax ID',
      label: 'Tax ID misinformation',
    },
    vendor_branch_status: { field: 'Branch', label: 'Branch mismatch' },
    net_amount_status: { field: 'Net Amount', label: 'Net Amount mismatch' },
    vat_amount_status: { field: 'VAT Amount', label: 'VAT Amount mismatch' },
    grand_total_status: { field: 'Grand Total', label: 'Grand Total mismatch' },
    vat_calculation_status: {
      field: 'VAT Amount',
      label: 'VAT miscalculation',
    },
    grand_total_calculation_status: {
      field: 'Grand Total',
      label: 'Grand Total miscalculation',
    },
  },
  Tp = (e, t, n, r, l = {}) => {
    const s = [],
      o = (k) => l[k],
      a = o('missing_in_pdf'),
      u = o('missing_in_excel'),
      d = a !== void 0 && e[a] && e[a].toString().toUpperCase() === 'TRUE';
    u !== void 0 &&
      e[u] &&
      e[u].toString().toUpperCase() === 'TRUE' &&
      s.push({
        field: 'EXCEL missing',
        valueBL: '',
        valueQAA: '',
        statusColumn: 'Excel missing',
      }),
      d &&
        s.push({
          field: 'PDF missing',
          valueBL: '',
          valueQAA: '',
          statusColumn: 'PDF missing',
        }),
      Object.keys(ha).forEach((k) => {
        const N = ha[k],
          T = o(k);
        if (T !== void 0) {
          const f = e[T];
          f &&
            f.toString().toUpperCase() === 'FALSE' &&
            s.push({
              field: N.field,
              valueBL: t[N.field] || '',
              valueQAA: n[N.field] || '',
              statusColumn: N.label,
            });
        }
      });
    const x = ma(t),
      p = ma(n),
      y = x || p;
    return {
      index: r,
      rowBL: t,
      rowQAA: n,
      differences: s,
      isIdentical: s.length === 0 && !y,
      hasDataIssue: y,
      dataset1Empty: x,
      dataset2Empty: p,
    };
  },
  ga = {
    id: 'ID',
    invoice_number: 'Invoice No',
    date_raw: 'Date',
    ref_doc: 'ref_doc',
    doc_title: 'Doc Type',
    vendor_name: 'Vendor Name',
    vendor_vat_id: 'Tax ID',
    vendor_branch: 'Branch',
    net_amount: 'Net Amount',
    vat_amount: 'VAT Amount',
    grand_total: 'Grand Total',
    report_company_name: 'Report Company',
    report_tax_form_id: 'Report Tax Form',
    source_id: 'Source ID',
    created_at: 'Created At',
    excel_name: 'Excel Name',
    pdf_id: 'PDF ID',
    pdf_invoice_number: 'PDF Invoice No',
    pdf_date_raw: 'PDF Date',
    pdf_doc_title: 'PDF Doc Type',
    pdf_vendor_name: 'PDF Vendor Name',
    pdf_vendor_vat_id: 'PDF Tax ID',
    pdf_vendor_branch: 'PDF Branch',
    pdf_net_amount: 'PDF Net Amount',
    pdf_vat_amount: 'PDF VAT Amount',
    pdf_grand_total: 'PDF Grand Total',
    pdf_name: 'PDF Name',
    pdf_path: 'PDF Path',
    pdf_created_at: 'PDF Created At',
    invoice_status: 'invoice_status',
    buyer_vat_info_status: 'buyer_vat_info_status',
    invoice_number_status: 'invoice_number_status',
    date_raw_status: 'date_raw_status',
    vendor_name_status: 'vendor_name_status',
    vendor_vat_id_status: 'vendor_vat_id_status',
    vendor_vat_id_info_status: 'vendor_vat_id_info_status',
    vendor_branch_status: 'vendor_branch_status',
    net_amount_status: 'net_amount_status',
    vat_amount_status: 'vat_amount_status',
    grand_total_status: 'grand_total_status',
    vat_calculation_status: 'vat_calculation_status',
    grand_total_calculation_status: 'grand_total_calculation_status',
    missing_in_pdf: 'missing_in_pdf',
    missing_in_excel: 'missing_in_excel',
  },
  Ip = (e) => {
    const t = {};
    return (
      e.forEach((n, r) => {
        const l = n.toLowerCase().trim();
        ga[l] && (t[ga[l]] = r);
      }),
      t
    );
  },
  zp = (e, t, n, r, l) => ({
    processCSVText: (o) => {
      try {
        const a = kp(o);
        if (!a || a.length === 0) throw new Error('ไม่พบข้อมูลในไฟล์');
        const u = a[0],
          d = Ip(u),
          v = d['Report Company'],
          x = d['Report Tax Form'],
          p = d['Source ID'];
        if (a.length > 1 && l) {
          const T = a[1];
          l({
            businessName: (v !== void 0 && T[v]) || '',
            businessCode: (x !== void 0 && T[x]) || '',
            taxNumber: (p !== void 0 && T[p]) || '',
          });
        }
        const y = [
            'ID',
            'Invoice No',
            'Date',
            'ref_doc',
            'Doc Type',
            'Vendor Name',
            'Tax ID',
            'Branch',
            'Net Amount',
            'VAT Amount',
            'Grand Total',
            'Report Company',
            'Report Tax Form',
            'Source ID',
            'Created At',
            'Excel Name',
          ],
          k = [
            'PDF ID',
            'PDF Invoice No',
            'PDF Date',
            'PDF Doc Type',
            'PDF Vendor Name',
            'PDF Tax ID',
            'PDF Branch',
            'PDF Net Amount',
            'PDF VAT Amount',
            'PDF Grand Total',
            'PDF Name',
            'PDF Path',
            'PDF Created At',
          ],
          N = [];
        for (let T = 1; T < a.length; T++) {
          const f = a[T];
          if (!f || f.length === 0) continue;
          const c = {};
          for (const S of y) {
            const _ = d[S];
            if (_ !== void 0) {
              let F = f[_] || '';
              (S === 'Net Amount' ||
                S === 'VAT Amount' ||
                S === 'Grand Total') &&
                (F = to(F)),
                (c[S] = F);
            } else c[S] = '';
          }
          const m = {};
          for (const S of k) {
            const _ = d[S];
            if (_ !== void 0) {
              let F = f[_] || '';
              (S === 'PDF Net Amount' ||
                S === 'PDF VAT Amount' ||
                S === 'PDF Grand Total') &&
                (F = to(F)),
                (m[S] = F);
            } else m[S] = '';
          }
          const g = Object.values(c).some((S) => S !== ''),
            w = Object.values(m).some((S) => S !== '');
          if (!g && !w) continue;
          const C = Tp(f, c, m, T - 1, d);
          (C.csvRowNumber = T + 1), N.push(C);
        }
        if (N.length === 0)
          throw new Error('ไม่พบข้อมูลที่ถูกต้องตามช่วงคอลัมน์ที่กำหนด');
        e(N), r('all');
      } catch (a) {
        t(a.message || 'เกิดข้อผิดพลาดในการประมวลผล'), e(null);
      } finally {
        n(!1);
      }
    },
  });
function Rp() {
  const e = Lp(),
    { processCSVText: t } = zp(
      e.setComparison,
      e.setError,
      e.setLoading,
      e.setFilterMode,
      e.setBusinessInfo
    ),
    n = async (p) => {
      const y = p.target.files[0];
      if (!y) return;
      if (
        (e.setFile(y),
        e.setLoading(!0),
        e.setError(null),
        e.setComparison(null),
        y.name.split('.').pop().toLowerCase() !== 'csv')
      ) {
        e.setError('รองรับเฉพาะไฟล์ .csv'), e.setLoading(!1);
        return;
      }
      const N = await y.text();
      t(N);
    },
    r = (p) => {
      console.log('Paths selected:', p);
    },
    l = () => {
      e.setLoading(!0), e.setError(null);
      const M = `id,inv,date,type,vendor,tax,branch,net,vat,total,excel_name,pdf_id,pdf_inv,pdf_date,pdf_type,pdf_vendor,pdf_tax,pdf_branch,pdf_net,pdf_vat,pdf_total,name,path,created,sid,sinvid,sinvnum,svat,sbranch,status
1,INV001,01/01/2025,Tax Inv,Vendor A,1234567890123,HQ,1000,70,1070,file.xlsx,1,INV001,01/01/2025,Tax Inv,Vendor A,1234567890123,HQ,1000,70,1070,,,,,,,,,,ข้อมูลถูกต้อง
2,INV002,02/01/2025,Tax Inv,Vendor B,999888777,00001,500.00,35.00,535.00,file.xlsx,2,INV002,02/01/2025,Tax Inv,Vendor B,999888777,00001,500.50,35.00,535.50,,,,,,,,,,ข้อมูลไม่ถูกต้อง
3,INV003,03/01/2025,Tax Inv,Vendor C,111222333,00002,750.00,52.50,802.50,file.xlsx,,,,,,,,,,,,,,,,,,,,ไม่มีใบกำกับภาษีใน PDF`;
      e.setFile({ name: 'sample_data_v5_with_missing.csv' }),
        setTimeout(() => t(M), 500);
    },
    s = B.useMemo(() => {
      if (
        (console.log('=== filteredComparison recalculating ==='),
        console.log('activeCard:', e.activeCard),
        console.log('selectedField:', e.selectedField),
        console.log('filterMode:', e.filterMode),
        !e.comparison)
      )
        return null;
      let p = e.comparison;
      if ((console.log('Total comparison rows:', p.length), e.selectedField))
        console.log('Filtering by field:', e.selectedField),
          e.selectedField === 'Dataset Missing'
            ? (p = p.filter((y) => y.hasDataIssue))
            : (p = p.filter(
                (y) =>
                  !y.isIdentical &&
                  y.differences.some((k) => k.field === e.selectedField)
              )),
          console.log('After field filter:', p.length);
      else if (e.activeCard === 'identical')
        (p = p.filter((y) => y.isIdentical)),
          console.log('After identical filter:', p.length);
      else if (e.activeCard === 'discrepancies')
        (p = p.filter((y) => !y.isIdentical)),
          console.log('After discrepancies filter:', p.length);
      else if (e.activeCard === 'total')
        console.log('Showing all records (total)');
      else
        switch (e.filterMode) {
          case 'identical':
            p = p.filter((y) => y.isIdentical);
            break;
          case 'different':
            p = p.filter((y) => !y.isIdentical);
            break;
        }
      return console.log('Final filtered count:', p.length), p;
    }, [e.comparison, e.filterMode, e.selectedField, e.activeCard]),
    o = e.comparison ? e.comparison.filter((p) => p.isIdentical).length : 0,
    a = e.comparison ? e.comparison.filter((p) => !p.isIdentical).length : 0,
    u = e.comparison ? e.comparison.length : 0,
    d = (p, y) => {
      if (!y || y.length === 0) return [];
      {
        const k = {};
        let N = 0;
        y.filter((f) => !f.isIdentical).forEach((f) => {
          f.differences.forEach((c) => {
            k[c.field] = (k[c.field] || 0) + 1;
          }),
            f.hasDataIssue && N++;
        });
        const T = Object.entries(k)
          .map(([f, c]) => ({ name: f, count: c }))
          .sort((f, c) => c.count - f.count);
        return N > 0 && T.unshift({ name: 'Dataset Missing', count: N }), T;
      }
    },
    v = (p) => {
      e.activeCard === p
        ? (e.setActiveCard(null), e.setSelectedField(null))
        : (e.setActiveCard(p), e.setSelectedField(null));
    },
    x = (p) => {
      console.log('handleFieldSelect called with:', p),
        console.log('Current activeCard:', e.activeCard),
        console.log('Current selectedField:', e.selectedField),
        e.setSelectedField(p),
        e.activeCard === 'discrepancies' && e.setFilterMode('different'),
        console.log('After setting - selectedField should be:', p);
    };
  return (
    B.useEffect(() => {
      e.filterMode === 'identical' &&
        e.selectedField &&
        e.setSelectedField(null);
    }, [e.filterMode]),
    i.jsxs('div', {
      className:
        'min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans text-gray-800',
      children: [
        i.jsx(vp, {
          section1Name: e.section1Name,
          section2Name: e.section2Name,
          showSettings: e.showSettings,
          setShowSettings: e.setShowSettings,
        }),
        i.jsxs('div', {
          className:
            'max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-8 space-y-4 md:space-y-8',
          children: [
            i.jsx(Np, {
              showSettings: e.showSettings,
              section1Name: e.section1Name,
              setSection1Name: e.setSection1Name,
              section2Name: e.section2Name,
              setSection2Name: e.setSection2Name,
              sectionBLStart: e.sectionBLStart,
              setSectionBLStart: e.setSectionBLStart,
              sectionBLEnd: e.sectionBLEnd,
              setSectionBLEnd: e.setSectionBLEnd,
              sectionQAAStart: e.sectionQAAStart,
              setSectionQAAStart: e.setSectionQAAStart,
              sectionQAAEnd: e.sectionQAAEnd,
              setSectionQAAEnd: e.setSectionQAAEnd,
              s1BgColor: e.s1BgColor,
              setS1BgColor: e.setS1BgColor,
              s1TextColor: e.s1TextColor,
              setS1TextColor: e.setS1TextColor,
              s2BgColor: e.s2BgColor,
              setS2BgColor: e.setS2BgColor,
              s2TextColor: e.s2TextColor,
              setS2TextColor: e.setS2TextColor,
              matchedRowBgColor: e.matchedRowBgColor,
              setMatchedRowBgColor: e.setMatchedRowBgColor,
              mismatchedRowBgColor: e.mismatchedRowBgColor,
              setMismatchedRowBgColor: e.setMismatchedRowBgColor,
            }),
            i.jsx(jp, {
              excelFolder: e.excelFolder,
              setExcelFolder: e.setExcelFolder,
              pdfFolder: e.pdfFolder,
              setPdfFolder: e.setPdfFolder,
              outputCsvName: e.outputCsvName,
              setOutputCsvName: e.setOutputCsvName,
              onStart: r,
            }),
            i.jsx(Cp, {
              file: e.file,
              loading: e.loading,
              error: e.error,
              handleFileUpload: n,
              loadSampleData: l,
              outputCsvName: e.outputCsvName,
            }),
            e.comparison &&
              i.jsx('div', {
                className:
                  'animate-in fade-in slide-in-from-bottom-8 duration-500',
                children: i.jsxs('div', {
                  className: 'mb-6',
                  children: [
                    i.jsx('h2', {
                      className:
                        'text-xl md:text-2xl font-bold text-gray-900 mb-4',
                      children: 'Dashboard',
                    }),
                    i.jsx('div', {
                      className: 'relative',
                      children: i.jsx(Ep, {
                        totalCount: u,
                        identicalCount: o,
                        differentCount: a,
                        onCardClick: v,
                        activeCard: e.activeCard,
                        availableFields: d('discrepancies', e.comparison),
                        selectedField: e.selectedField,
                        onFieldSelect: x,
                        onCloseDropdown: () => {},
                      }),
                    }),
                  ],
                }),
              }),
          ],
        }),
        e.comparison &&
          i.jsx('div', {
            className:
              'px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-8 animate-in fade-in slide-in-from-bottom-8 duration-500',
            children: i.jsx(Dp, {
              filteredComparison: s,
              fullComparison: e.comparison,
              displayMode: e.displayMode,
              setDisplayMode: e.setDisplayMode,
              filterMode: e.filterMode,
              setFilterMode: e.setFilterMode,
              expandedRow: e.expandedRow,
              setExpandedRow: e.setExpandedRow,
              section1Name: e.section1Name,
              section2Name: e.section2Name,
              s1TextColor: e.s1TextColor,
              s1BgColor: e.s1BgColor,
              s2TextColor: e.s2TextColor,
              s2BgColor: e.s2BgColor,
              matchedRowBgColor: e.matchedRowBgColor,
              mismatchedRowBgColor: e.mismatchedRowBgColor,
              businessInfo: e.businessInfo,
            }),
          }),
      ],
    })
  );
}
ss.createRoot(document.getElementById('root')).render(
  i.jsx(te.StrictMode, { children: i.jsx(Rp, {}) })
);
