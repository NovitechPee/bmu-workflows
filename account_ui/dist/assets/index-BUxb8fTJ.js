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
function $c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var ha = { exports: {} },
  hl = {},
  ga = { exports: {} },
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
  Mc = Symbol.for('react.portal'),
  Bc = Symbol.for('react.fragment'),
  Vc = Symbol.for('react.strict_mode'),
  Uc = Symbol.for('react.profiler'),
  Qc = Symbol.for('react.provider'),
  Hc = Symbol.for('react.context'),
  Wc = Symbol.for('react.forward_ref'),
  bc = Symbol.for('react.suspense'),
  Kc = Symbol.for('react.memo'),
  Gc = Symbol.for('react.lazy'),
  Zo = Symbol.iterator;
function Yc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Zo && e[Zo]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var xa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ya = Object.assign,
  va = {};
function Nn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = va),
    (this.updater = n || xa);
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
function wa() {}
wa.prototype = Nn.prototype;
function no(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = va),
    (this.updater = n || xa);
}
var ro = (no.prototype = new wa());
ro.constructor = no;
ya(ro, Nn.prototype);
ro.isPureReactComponent = !0;
var Jo = Array.isArray,
  ka = Object.prototype.hasOwnProperty,
  lo = { current: null },
  Sa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Na(e, t, n) {
  var r,
    l = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = '' + t.key),
    t))
      ka.call(t, r) && !Sa.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), f = 0; f < a; f++) u[f] = arguments[f + 2];
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
function Xc(e, t) {
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
function Zc(e) {
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
    ? Zc('' + e.key)
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
          case Mc:
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
          Tr(l, t, n, '', function (f) {
            return f;
          }))
        : l != null &&
          (so(l) &&
            (l = Xc(
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
  else if (((u = Yc(e)), typeof u == 'function'))
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
function Jc(e) {
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
var ke = { current: null },
  Ir = { transition: null },
  qc = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: lo,
  };
function ja() {
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
V.Fragment = Bc;
V.Profiler = Uc;
V.PureComponent = no;
V.StrictMode = Vc;
V.Suspense = bc;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qc;
V.act = ja;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = ya({}, e.props),
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
      ka.call(t, u) &&
        !Sa.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var f = 0; f < u; f++) a[f] = arguments[f + 2];
    r.children = a;
  }
  return { $$typeof: cr, type: e.type, key: l, ref: s, props: r, _owner: o };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Hc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qc, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Na;
V.createFactory = function (e) {
  var t = Na.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Wc, render: e };
};
V.isValidElement = so;
V.lazy = function (e) {
  return { $$typeof: Gc, _payload: { _status: -1, _result: e }, _init: Jc };
};
V.memo = function (e, t) {
  return { $$typeof: Kc, type: e, compare: t === void 0 ? null : t };
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
V.unstable_act = ja;
V.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
V.useContext = function (e) {
  return ke.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
V.useId = function () {
  return ke.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return ke.current.useRef(e);
};
V.useState = function (e) {
  return ke.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return ke.current.useTransition();
};
V.version = '18.3.1';
ga.exports = V;
var B = ga.exports;
const ne = $c(B);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed = B,
  td = Symbol.for('react.element'),
  nd = Symbol.for('react.fragment'),
  rd = Object.prototype.hasOwnProperty,
  ld = ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ca(e, t, n) {
  var r,
    l = {},
    s = null,
    o = null;
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) rd.call(t, r) && !sd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: td,
    type: e,
    key: s,
    ref: o,
    props: l,
    _owner: ld.current,
  };
}
hl.Fragment = nd;
hl.jsx = Ca;
hl.jsxs = Ca;
ha.exports = hl;
var i = ha.exports,
  ss = {},
  Ea = { exports: {} },
  ze = {},
  _a = { exports: {} },
  Pa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, $) {
    var M = P.length;
    P.push($);
    e: for (; 0 < M; ) {
      var h = (M - 1) >>> 1,
        N = P[h];
      if (0 < l(N, $)) (P[h] = $), (P[M] = N), (M = h);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var $ = P[0],
      M = P.pop();
    if (M !== $) {
      P[0] = M;
      e: for (var h = 0, N = P.length, E = N >>> 1; h < E; ) {
        var T = 2 * (h + 1) - 1,
          I = P[T],
          z = T + 1,
          R = P[z];
        if (0 > l(I, M))
          z < N && 0 > l(R, I)
            ? ((P[h] = R), (P[z] = M), (h = z))
            : ((P[h] = I), (P[T] = M), (h = T));
        else if (z < N && 0 > l(R, M)) (P[h] = R), (P[z] = M), (h = z);
        else break e;
      }
    }
    return $;
  }
  function l(P, $) {
    var M = P.sortIndex - $.sortIndex;
    return M !== 0 ? M : P.id - $.id;
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
    f = [],
    y = 1,
    x = null,
    p = 3,
    v = !1,
    w = !1,
    j = !1,
    A = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var $ = n(f); $ !== null; ) {
      if ($.callback === null) r(f);
      else if ($.startTime <= P)
        r(f), ($.sortIndex = $.expirationTime), t(u, $);
      else break;
      $ = n(f);
    }
  }
  function g(P) {
    if (((j = !1), d(P), !w))
      if (n(u) !== null) (w = !0), Ne(k);
      else {
        var $ = n(f);
        $ !== null && Ye(g, $.startTime - P);
      }
  }
  function k(P, $) {
    (w = !1), j && ((j = !1), m(F), (F = -1)), (v = !0);
    var M = p;
    try {
      for (
        d($), x = n(u);
        x !== null && (!(x.expirationTime > $) || (P && !Y()));

      ) {
        var h = x.callback;
        if (typeof h == 'function') {
          (x.callback = null), (p = x.priorityLevel);
          var N = h(x.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof N == 'function' ? (x.callback = N) : x === n(u) && r(u),
            d($);
        } else r(u);
        x = n(u);
      }
      if (x !== null) var E = !0;
      else {
        var T = n(f);
        T !== null && Ye(g, T.startTime - $), (E = !1);
      }
      return E;
    } finally {
      (x = null), (p = M), (v = !1);
    }
  }
  var _ = !1,
    S = null,
    F = -1,
    D = 5,
    O = -1;
  function Y() {
    return !(e.unstable_now() - O < D);
  }
  function W() {
    if (S !== null) {
      var P = e.unstable_now();
      O = P;
      var $ = !0;
      try {
        $ = S(!0, P);
      } finally {
        $ ? ie() : ((_ = !1), (S = null));
      }
    } else _ = !1;
  }
  var ie;
  if (typeof c == 'function')
    ie = function () {
      c(W);
    };
  else if (typeof MessageChannel < 'u') {
    var ae = new MessageChannel(),
      le = ae.port2;
    (ae.port1.onmessage = W),
      (ie = function () {
        le.postMessage(null);
      });
  } else
    ie = function () {
      A(W, 0);
    };
  function Ne(P) {
    (S = P), _ || ((_ = !0), ie());
  }
  function Ye(P, $) {
    F = A(function () {
      P(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), Ne(k));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (D = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = p;
      }
      var M = p;
      p = $;
      try {
        return P();
      } finally {
        p = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, $) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var M = p;
      p = P;
      try {
        return $();
      } finally {
        p = M;
      }
    }),
    (e.unstable_scheduleCallback = function (P, $, M) {
      var h = e.unstable_now();
      switch (
        (typeof M == 'object' && M !== null
          ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? h + M : h))
          : (M = h),
        P)
      ) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return (
        (N = M + N),
        (P = {
          id: y++,
          callback: $,
          priorityLevel: P,
          startTime: M,
          expirationTime: N,
          sortIndex: -1,
        }),
        M > h
          ? ((P.sortIndex = M),
            t(f, P),
            n(u) === null &&
              P === n(f) &&
              (j ? (m(F), (F = -1)) : (j = !0), Ye(g, M - h)))
          : ((P.sortIndex = N), t(u, P), w || v || ((w = !0), Ne(k))),
        P
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (P) {
      var $ = p;
      return function () {
        var M = p;
        p = $;
        try {
          return P.apply(this, arguments);
        } finally {
          p = M;
        }
      };
    });
})(Pa);
_a.exports = Pa;
var od = _a.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id = B,
  Ie = od;
function C(e) {
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
var Fa = new Set(),
  Kn = {};
function Ht(e, t) {
  gn(e, t), gn(e + 'Capture', t);
}
function gn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Fa.add(t[e]);
}
var it = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  os = Object.prototype.hasOwnProperty,
  ad =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ei = {},
  ti = {};
function ud(e) {
  return os.call(ti, e)
    ? !0
    : os.call(ei, e)
      ? !1
      : ad.test(e)
        ? (ti[e] = !0)
        : ((ei[e] = !0), !1);
}
function cd(e, t, n, r) {
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
function dd(e, t, n, r) {
  if (t === null || typeof t > 'u' || cd(e, t, n, r)) return !0;
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
function Se(e, t, n, r, l, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var pe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    pe[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  pe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  pe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    pe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  pe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  pe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  pe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  pe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oo = /[\-:]([a-z])/g;
function io(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(oo, io);
    pe[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(oo, io);
    pe[t] = new Se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(oo, io);
  pe[t] = new Se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Se(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ao(e, t, n, r) {
  var l = pe.hasOwnProperty(t) ? pe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (dd(t, n, l, r) && (n = null),
    r || l === null
      ? ud(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var dt = id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for('react.element'),
  Zt = Symbol.for('react.portal'),
  Jt = Symbol.for('react.fragment'),
  uo = Symbol.for('react.strict_mode'),
  is = Symbol.for('react.profiler'),
  La = Symbol.for('react.provider'),
  Da = Symbol.for('react.context'),
  co = Symbol.for('react.forward_ref'),
  as = Symbol.for('react.suspense'),
  us = Symbol.for('react.suspense_list'),
  fo = Symbol.for('react.memo'),
  pt = Symbol.for('react.lazy'),
  Ta = Symbol.for('react.offscreen'),
  ni = Symbol.iterator;
function En(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ni && e[ni]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var q = Object.assign,
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == 'string') {
      for (
        var l = f.stack.split(`
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
function fd(e) {
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
      case Da:
        return (e.displayName || 'Context') + '.Consumer';
      case La:
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
function pd(e) {
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
function _t(e) {
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
function Ia(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function md(e) {
  var t = Ia(e) ? 'checked' : 'value',
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
  e._valueTracker || (e._valueTracker = md(e));
}
function za(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ia(e) ? (e.checked ? 'true' : 'false') : e.value),
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
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ri(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = _t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Ra(e, t) {
  (t = t.checked), t != null && ao(e, 'checked', t, !1);
}
function fs(e, t) {
  Ra(e, t);
  var n = _t(t.value),
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
    : t.hasOwnProperty('defaultValue') && ps(e, t.type, _t(t.defaultValue)),
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
    for (n = '' + _t(n), t = null, l = 0; l < e.length; l++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function si(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: _t(n) };
}
function Aa(e, t) {
  var n = _t(t.value),
    r = _t(t.defaultValue);
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
function Oa(e) {
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
    ? Oa(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var yr,
  $a = (function (e) {
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
var $n = {
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
  hd = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys($n).forEach(function (e) {
  hd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($n[t] = $n[e]);
  });
});
function Ma(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || ($n.hasOwnProperty(e) && $n[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Ba(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ma(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var gd = q(
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
    if (gd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62));
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
    if (typeof vs != 'function') throw Error(C(280));
    var t = e.stateNode;
    t && ((t = wl(t)), vs(e.stateNode, e.type, t));
  }
}
function Va(e) {
  dn ? (fn ? fn.push(e) : (fn = [e])) : (dn = e);
}
function Ua() {
  if (dn) {
    var e = dn,
      t = fn;
    if (((fn = dn = null), ii(e), t)) for (e = 0; e < t.length; e++) ii(t[e]);
  }
}
function Qa(e, t) {
  return e(t);
}
function Ha() {}
var Al = !1;
function Wa(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return Qa(e, t, n);
  } finally {
    (Al = !1), (dn !== null || fn !== null) && (Ha(), Ua());
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
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n));
  return n;
}
var ws = !1;
if (it)
  try {
    var _n = {};
    Object.defineProperty(_n, 'passive', {
      get: function () {
        ws = !0;
      },
    }),
      window.addEventListener('test', _n, _n),
      window.removeEventListener('test', _n, _n);
  } catch {
    ws = !1;
  }
function xd(e, t, n, r, l, s, o, a, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (y) {
    this.onError(y);
  }
}
var Mn = !1,
  Wr = null,
  br = !1,
  ks = null,
  yd = {
    onError: function (e) {
      (Mn = !0), (Wr = e);
    },
  };
function vd(e, t, n, r, l, s, o, a, u) {
  (Mn = !1), (Wr = null), xd.apply(yd, arguments);
}
function wd(e, t, n, r, l, s, o, a, u) {
  if ((vd.apply(this, arguments), Mn)) {
    if (Mn) {
      var f = Wr;
      (Mn = !1), (Wr = null);
    } else throw Error(C(198));
    br || ((br = !0), (ks = f));
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
function ba(e) {
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
  if (Wt(e) !== e) throw Error(C(188));
}
function kd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wt(e)), t === null)) throw Error(C(188));
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
      throw Error(C(188));
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
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Ka(e) {
  return (e = kd(e)), e !== null ? Ga(e) : null;
}
function Ga(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ga(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ya = Ie.unstable_scheduleCallback,
  ui = Ie.unstable_cancelCallback,
  Sd = Ie.unstable_shouldYield,
  Nd = Ie.unstable_requestPaint,
  te = Ie.unstable_now,
  jd = Ie.unstable_getCurrentPriorityLevel,
  mo = Ie.unstable_ImmediatePriority,
  Xa = Ie.unstable_UserBlockingPriority,
  Kr = Ie.unstable_NormalPriority,
  Cd = Ie.unstable_LowPriority,
  Za = Ie.unstable_IdlePriority,
  gl = null,
  qe = null;
function Ed(e) {
  if (qe && typeof qe.onCommitFiberRoot == 'function')
    try {
      qe.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var be = Math.clz32 ? Math.clz32 : Fd,
  _d = Math.log,
  Pd = Math.LN2;
function Fd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_d(e) / Pd) | 0)) | 0;
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
      (n = 31 - be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ld(e, t) {
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
function Dd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - be(s),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = Ld(a, t))
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
function Ja() {
  var e = vr;
  return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - be(t)),
    (e[t] = n);
}
function Td(e, t) {
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
    var l = 31 - be(n),
      s = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
  }
}
function ho(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var H = 0;
function qa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var eu,
  go,
  tu,
  nu,
  ru,
  Ns = !1,
  kr = [],
  vt = null,
  wt = null,
  kt = null,
  Xn = new Map(),
  Zn = new Map(),
  ht = [],
  Id =
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
function zd(e, t, n, r, l) {
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
function lu(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ba(n)), t !== null)) {
          (e.blockedOn = t),
            ru(e.priority, function () {
              tu(n);
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
function Rd() {
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
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Rd)));
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
    lu(n), n.blockedOn === null && ht.shift();
}
var pn = dt.ReactCurrentBatchConfig,
  Yr = !0;
function Ad(e, t, n, r) {
  var l = H,
    s = pn.transition;
  pn.transition = null;
  try {
    (H = 1), xo(e, t, n, r);
  } finally {
    (H = l), (pn.transition = s);
  }
}
function Od(e, t, n, r) {
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
    else if (zd(l, e, t, n, r)) r.stopPropagation();
    else if ((ci(e, r), t & 4 && -1 < Id.indexOf(e))) {
      for (; l !== null; ) {
        var s = pr(l);
        if (
          (s !== null && eu(s),
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
      if (((e = ba(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xr = e), null;
}
function su(e) {
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
      switch (jd()) {
        case mo:
          return 1;
        case Xa:
          return 4;
        case Kr:
        case Cd:
          return 16;
        case Za:
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
function ou() {
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
function Re(e) {
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
    q(t.prototype, {
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
  vo = Re(jn),
  fr = q({}, jn, { view: 0, detail: 0 }),
  $d = Re(fr),
  $l,
  Ml,
  Ln,
  xl = q({}, fr, {
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
        : (e !== Ln &&
            (Ln && e.type === 'mousemove'
              ? (($l = e.screenX - Ln.screenX), (Ml = e.screenY - Ln.screenY))
              : (Ml = $l = 0),
            (Ln = e)),
          $l);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ml;
    },
  }),
  pi = Re(xl),
  Md = q({}, xl, { dataTransfer: 0 }),
  Bd = Re(Md),
  Vd = q({}, fr, { relatedTarget: 0 }),
  Bl = Re(Vd),
  Ud = q({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qd = Re(Ud),
  Hd = q({}, jn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wd = Re(Hd),
  bd = q({}, jn, { data: 0 }),
  mi = Re(bd),
  Kd = {
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
  Gd = {
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
  Yd = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Xd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yd[e]) ? !!t[e] : !1;
}
function wo() {
  return Xd;
}
var Zd = q({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = Kd[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ar(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Gd[e.keyCode] || 'Unidentified'
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
  Jd = Re(Zd),
  qd = q({}, xl, {
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
  hi = Re(qd),
  ef = q({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wo,
  }),
  tf = Re(ef),
  nf = q({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rf = Re(nf),
  lf = q({}, xl, {
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
  sf = Re(lf),
  of = [9, 13, 27, 32],
  ko = it && 'CompositionEvent' in window,
  Bn = null;
it && 'documentMode' in document && (Bn = document.documentMode);
var af = it && 'TextEvent' in window && !Bn,
  iu = it && (!ko || (Bn && 8 < Bn && 11 >= Bn)),
  gi = ' ',
  xi = !1;
function au(e, t) {
  switch (e) {
    case 'keyup':
      return of.indexOf(t.keyCode) !== -1;
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
function uu(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var qt = !1;
function uf(e, t) {
  switch (e) {
    case 'compositionend':
      return uu(t);
    case 'keypress':
      return t.which !== 32 ? null : ((xi = !0), gi);
    case 'textInput':
      return (e = t.data), e === gi && xi ? null : e;
    default:
      return null;
  }
}
function cf(e, t) {
  if (qt)
    return e === 'compositionend' || (!ko && au(e, t))
      ? ((e = ou()), (Rr = yo = xt = null), (qt = !1), e)
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
      return iu && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var df = {
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
  return t === 'input' ? !!df[e.type] : t === 'textarea';
}
function cu(e, t, n, r) {
  Va(r),
    (t = Zr(t, 'onChange')),
    0 < t.length &&
      ((n = new vo('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vn = null,
  qn = null;
function ff(e) {
  ku(e, 0);
}
function yl(e) {
  var t = nn(e);
  if (za(t)) return e;
}
function pf(e, t) {
  if (e === 'change') return t;
}
var du = !1;
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
  du = Vl && (!document.documentMode || 9 < document.documentMode);
}
function wi() {
  Vn && (Vn.detachEvent('onpropertychange', fu), (qn = Vn = null));
}
function fu(e) {
  if (e.propertyName === 'value' && yl(qn)) {
    var t = [];
    cu(t, qn, e, po(e)), Wa(ff, t);
  }
}
function mf(e, t, n) {
  e === 'focusin'
    ? (wi(), (Vn = t), (qn = n), Vn.attachEvent('onpropertychange', fu))
    : e === 'focusout' && wi();
}
function hf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return yl(qn);
}
function gf(e, t) {
  if (e === 'click') return yl(t);
}
function xf(e, t) {
  if (e === 'input' || e === 'change') return yl(t);
}
function yf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == 'function' ? Object.is : yf;
function er(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!os.call(t, l) || !Ge(e[l], t[l])) return !1;
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
function pu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? pu(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function mu() {
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
function vf(e) {
  var t = mu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pu(n.ownerDocument.documentElement, n)
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
var wf = it && 'documentMode' in document && 11 >= document.documentMode,
  en = null,
  Cs = null,
  Un = null,
  Es = !1;
function Ni(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Es ||
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
  hu = {};
it &&
  ((hu = document.createElement('div').style),
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
  for (n in t) if (t.hasOwnProperty(n) && n in hu) return (Ql[e] = t[n]);
  return e;
}
var gu = vl('animationend'),
  xu = vl('animationiteration'),
  yu = vl('animationstart'),
  vu = vl('transitionend'),
  wu = new Map(),
  ji =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Ft(e, t) {
  wu.set(e, t), Ht(t, [e]);
}
for (var Hl = 0; Hl < ji.length; Hl++) {
  var Wl = ji[Hl],
    kf = Wl.toLowerCase(),
    Sf = Wl[0].toUpperCase() + Wl.slice(1);
  Ft(kf, 'on' + Sf);
}
Ft(gu, 'onAnimationEnd');
Ft(xu, 'onAnimationIteration');
Ft(yu, 'onAnimationStart');
Ft('dblclick', 'onDoubleClick');
Ft('focusin', 'onFocus');
Ft('focusout', 'onBlur');
Ft(vu, 'onTransitionEnd');
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
var On =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Nf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(On));
function Ci(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), wd(r, t, void 0, e), (e.currentTarget = null);
}
function ku(e, t) {
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
            f = a.currentTarget;
          if (((a = a.listener), u !== s && l.isPropagationStopped())) break e;
          Ci(l, a, f), (s = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (f = a.currentTarget),
            (a = a.listener),
            u !== s && l.isPropagationStopped())
          )
            break e;
          Ci(l, a, f), (s = u);
        }
    }
  }
  if (br) throw ((e = ks), (br = !1), (ks = null), e);
}
function K(e, t) {
  var n = t[Ds];
  n === void 0 && (n = t[Ds] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Su(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), Su(n, e, r, t);
}
var jr = '_reactListening' + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[jr]) {
    (e[jr] = !0),
      Fa.forEach(function (n) {
        n !== 'selectionchange' && (Nf.has(n) || bl(n, !1, e), bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jr] || ((t[jr] = !0), bl('selectionchange', !1, t));
  }
}
function Su(e, t, n, r) {
  switch (su(t)) {
    case 1:
      var l = Ad;
      break;
    case 4:
      l = Od;
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
  Wa(function () {
    var f = s,
      y = po(n),
      x = [];
    e: {
      var p = wu.get(e);
      if (p !== void 0) {
        var v = vo,
          w = e;
        switch (e) {
          case 'keypress':
            if (Ar(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = Jd;
            break;
          case 'focusin':
            (w = 'focus'), (v = Bl);
            break;
          case 'focusout':
            (w = 'blur'), (v = Bl);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Bl;
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
            v = pi;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Bd;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = tf;
            break;
          case gu:
          case xu:
          case yu:
            v = Qd;
            break;
          case vu:
            v = rf;
            break;
          case 'scroll':
            v = $d;
            break;
          case 'wheel':
            v = sf;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = Wd;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = hi;
        }
        var j = (t & 4) !== 0,
          A = !j && e === 'scroll',
          m = j ? (p !== null ? p + 'Capture' : null) : p;
        j = [];
        for (var c = f, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              m !== null && ((g = Yn(c, m)), g != null && j.push(nr(c, g, d)))),
            A)
          )
            break;
          c = c.return;
        }
        0 < j.length &&
          ((p = new v(p, w, null, n, y)), x.push({ event: p, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== ys &&
            (w = n.relatedTarget || n.fromElement) &&
            (zt(w) || w[at]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            y.window === y
              ? y
              : (p = y.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = f),
              (w = w ? zt(w) : null),
              w !== null &&
                ((A = Wt(w)), w !== A || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = f)),
          v !== w)
        ) {
          if (
            ((j = pi),
            (g = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((j = hi),
              (g = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (c = 'pointer')),
            (A = v == null ? p : nn(v)),
            (d = w == null ? p : nn(w)),
            (p = new j(g, c + 'leave', v, n, y)),
            (p.target = A),
            (p.relatedTarget = d),
            (g = null),
            zt(y) === f &&
              ((j = new j(m, c + 'enter', w, n, y)),
              (j.target = d),
              (j.relatedTarget = A),
              (g = j)),
            (A = g),
            v && w)
          )
            t: {
              for (j = v, m = w, c = 0, d = j; d; d = Gt(d)) c++;
              for (d = 0, g = m; g; g = Gt(g)) d++;
              for (; 0 < c - d; ) (j = Gt(j)), c--;
              for (; 0 < d - c; ) (m = Gt(m)), d--;
              for (; c--; ) {
                if (j === m || (m !== null && j === m.alternate)) break t;
                (j = Gt(j)), (m = Gt(m));
              }
              j = null;
            }
          else j = null;
          v !== null && Ei(x, p, v, j, !1),
            w !== null && A !== null && Ei(x, A, w, j, !0);
        }
      }
      e: {
        if (
          ((p = f ? nn(f) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && p.type === 'file'))
        )
          var k = pf;
        else if (yi(p))
          if (du) k = xf;
          else {
            k = hf;
            var _ = mf;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (k = gf);
        if (k && (k = k(e, f))) {
          cu(x, k, n, y);
          break e;
        }
        _ && _(e, p, f),
          e === 'focusout' &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === 'number' &&
            ps(p, 'number', p.value);
      }
      switch (((_ = f ? nn(f) : window), e)) {
        case 'focusin':
          (yi(_) || _.contentEditable === 'true') &&
            ((en = _), (Cs = f), (Un = null));
          break;
        case 'focusout':
          Un = Cs = en = null;
          break;
        case 'mousedown':
          Es = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Es = !1), Ni(x, n, y);
          break;
        case 'selectionchange':
          if (wf) break;
        case 'keydown':
        case 'keyup':
          Ni(x, n, y);
      }
      var S;
      if (ko)
        e: {
          switch (e) {
            case 'compositionstart':
              var F = 'onCompositionStart';
              break e;
            case 'compositionend':
              F = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              F = 'onCompositionUpdate';
              break e;
          }
          F = void 0;
        }
      else
        qt
          ? au(e, n) && (F = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (F = 'onCompositionStart');
      F &&
        (iu &&
          n.locale !== 'ko' &&
          (qt || F !== 'onCompositionStart'
            ? F === 'onCompositionEnd' && qt && (S = ou())
            : ((xt = y),
              (yo = 'value' in xt ? xt.value : xt.textContent),
              (qt = !0))),
        (_ = Zr(f, F)),
        0 < _.length &&
          ((F = new mi(F, e, null, n, y)),
          x.push({ event: F, listeners: _ }),
          S ? (F.data = S) : ((S = uu(n)), S !== null && (F.data = S)))),
        (S = af ? uf(e, n) : cf(e, n)) &&
          ((f = Zr(f, 'onBeforeInput')),
          0 < f.length &&
            ((y = new mi('onBeforeInput', 'beforeinput', null, n, y)),
            x.push({ event: y, listeners: f }),
            (y.data = S)));
    }
    ku(x, t);
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
function Ei(e, t, n, r, l) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      f = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      f !== null &&
      ((a = f),
      l
        ? ((u = Yn(n, s)), u != null && o.unshift(nr(n, u, a)))
        : l || ((u = Yn(n, s)), u != null && o.push(nr(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var jf = /\r\n?/g,
  Cf = /\u0000|\uFFFD/g;
function _i(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      jf,
      `
`
    )
    .replace(Cf, '');
}
function Cr(e, t, n) {
  if (((t = _i(t)), _i(e) !== t && n)) throw Error(C(425));
}
function Jr() {}
var _s = null,
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
var Ls = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ef = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Pi = typeof Promise == 'function' ? Promise : void 0,
  _f =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Pi < 'u'
        ? function (e) {
            return Pi.resolve(null).then(e).catch(Pf);
          }
        : Ls;
function Pf(e) {
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
  Ds = '__reactEvents$' + Cn,
  Ff = '__reactListeners$' + Cn,
  Lf = '__reactHandles$' + Cn;
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
  throw Error(C(33));
}
function wl(e) {
  return e[rr] || null;
}
var Ts = [],
  rn = -1;
function Lt(e) {
  return { current: e };
}
function G(e) {
  0 > rn || ((e.current = Ts[rn]), (Ts[rn] = null), rn--);
}
function b(e, t) {
  rn++, (Ts[rn] = e.current), (e.current = t);
}
var Pt = {},
  ye = Lt(Pt),
  _e = Lt(!1),
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
function Pe(e) {
  return (e = e.childContextTypes), e != null;
}
function qr() {
  G(_e), G(ye);
}
function Li(e, t, n) {
  if (ye.current !== Pt) throw Error(C(168));
  b(ye, t), b(_e, n);
}
function Nu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, pd(e) || 'Unknown', l));
  return q({}, n, r);
}
function el(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pt),
    (Mt = ye.current),
    b(ye, e),
    b(_e, _e.current),
    !0
  );
}
function Di(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Nu(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(_e),
      G(ye),
      b(ye, e))
    : G(_e),
    b(_e, n);
}
var nt = null,
  kl = !1,
  Yl = !1;
function ju(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
function Df(e) {
  (kl = !0), ju(e);
}
function Dt() {
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
      throw (nt !== null && (nt = nt.slice(e + 1)), Ya(mo, Dt), l);
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
  Ae = [],
  Oe = 0,
  Bt = null,
  lt = 1,
  st = '';
function Tt(e, t) {
  (ln[sn++] = nl), (ln[sn++] = tl), (tl = e), (nl = t);
}
function Cu(e, t, n) {
  (Ae[Oe++] = lt), (Ae[Oe++] = st), (Ae[Oe++] = Bt), (Bt = e);
  var r = lt;
  e = st;
  var l = 32 - be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var s = 32 - be(t) + l;
  if (30 < s) {
    var o = l - (l % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (lt = (1 << (32 - be(t) + l)) | (n << l) | r),
      (st = s + e);
  } else (lt = (1 << s) | (n << l) | r), (st = e);
}
function No(e) {
  e.return !== null && (Tt(e, 1), Cu(e, 1, 0));
}
function jo(e) {
  for (; e === tl; )
    (tl = ln[--sn]), (ln[sn] = null), (nl = ln[--sn]), (ln[sn] = null);
  for (; e === Bt; )
    (Bt = Ae[--Oe]),
      (Ae[Oe] = null),
      (st = Ae[--Oe]),
      (Ae[Oe] = null),
      (lt = Ae[--Oe]),
      (Ae[Oe] = null);
}
var Te = null,
  De = null,
  X = !1,
  We = null;
function Eu(e, t) {
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
          ? ((e.stateNode = t), (Te = e), (De = St(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (De = null), !0) : !1
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
            (Te = e),
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
  if (X) {
    var t = De;
    if (t) {
      var n = t;
      if (!Ti(e, t)) {
        if (Is(e)) throw Error(C(418));
        t = St(n.nextSibling);
        var r = Te;
        t && Ti(e, t)
          ? Eu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Te = e));
      }
    } else {
      if (Is(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (Te = e);
    }
  }
}
function Ii(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Te = e;
}
function Er(e) {
  if (e !== Te) return !1;
  if (!X) return Ii(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Fs(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (Is(e)) throw (_u(), Error(C(418)));
    for (; t; ) Eu(e, t), (t = St(t.nextSibling));
  }
  if ((Ii(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
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
  } else De = Te ? St(e.stateNode.nextSibling) : null;
  return !0;
}
function _u() {
  for (var e = De; e; ) e = St(e.nextSibling);
}
function yn() {
  (De = Te = null), (X = !1);
}
function Co(e) {
  We === null ? (We = [e]) : We.push(e);
}
var Tf = dt.ReactCurrentBatchConfig;
function Dn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
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
    if (typeof e != 'string') throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function _r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
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
function Pu(e) {
  function t(m, c) {
    if (e) {
      var d = m.deletions;
      d === null ? ((m.deletions = [c]), (m.flags |= 16)) : d.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) t(m, c), (c = c.sibling);
    return null;
  }
  function r(m, c) {
    for (m = new Map(); c !== null; )
      c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling);
    return m;
  }
  function l(m, c) {
    return (m = Et(m, c)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, c, d) {
    return (
      (m.index = d),
      e
        ? ((d = m.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((m.flags |= 2), c) : d)
            : ((m.flags |= 2), c))
        : ((m.flags |= 1048576), c)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, c, d, g) {
    return c === null || c.tag !== 6
      ? ((c = ns(d, m.mode, g)), (c.return = m), c)
      : ((c = l(c, d)), (c.return = m), c);
  }
  function u(m, c, d, g) {
    var k = d.type;
    return k === Jt
      ? y(m, c, d.props.children, g, d.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == 'object' &&
              k !== null &&
              k.$$typeof === pt &&
              zi(k) === c.type))
        ? ((g = l(c, d.props)), (g.ref = Dn(m, c, d)), (g.return = m), g)
        : ((g = Qr(d.type, d.key, d.props, null, m.mode, g)),
          (g.ref = Dn(m, c, d)),
          (g.return = m),
          g);
  }
  function f(m, c, d, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = rs(d, m.mode, g)), (c.return = m), c)
      : ((c = l(c, d.children || [])), (c.return = m), c);
  }
  function y(m, c, d, g, k) {
    return c === null || c.tag !== 7
      ? ((c = $t(d, m.mode, g, k)), (c.return = m), c)
      : ((c = l(c, d)), (c.return = m), c);
  }
  function x(m, c, d) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = ns('' + c, m.mode, d)), (c.return = m), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case gr:
          return (
            (d = Qr(c.type, c.key, c.props, null, m.mode, d)),
            (d.ref = Dn(m, null, c)),
            (d.return = m),
            d
          );
        case Zt:
          return (c = rs(c, m.mode, d)), (c.return = m), c;
        case pt:
          var g = c._init;
          return x(m, g(c._payload), d);
      }
      if (Rn(c) || En(c))
        return (c = $t(c, m.mode, d, null)), (c.return = m), c;
      _r(m, c);
    }
    return null;
  }
  function p(m, c, d, g) {
    var k = c !== null ? c.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return k !== null ? null : a(m, c, '' + d, g);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case gr:
          return d.key === k ? u(m, c, d, g) : null;
        case Zt:
          return d.key === k ? f(m, c, d, g) : null;
        case pt:
          return (k = d._init), p(m, c, k(d._payload), g);
      }
      if (Rn(d) || En(d)) return k !== null ? null : y(m, c, d, g, null);
      _r(m, d);
    }
    return null;
  }
  function v(m, c, d, g, k) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (m = m.get(d) || null), a(c, m, '' + g, k);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case gr:
          return (m = m.get(g.key === null ? d : g.key) || null), u(c, m, g, k);
        case Zt:
          return (m = m.get(g.key === null ? d : g.key) || null), f(c, m, g, k);
        case pt:
          var _ = g._init;
          return v(m, c, d, _(g._payload), k);
      }
      if (Rn(g) || En(g)) return (m = m.get(d) || null), y(c, m, g, k, null);
      _r(c, g);
    }
    return null;
  }
  function w(m, c, d, g) {
    for (
      var k = null, _ = null, S = c, F = (c = 0), D = null;
      S !== null && F < d.length;
      F++
    ) {
      S.index > F ? ((D = S), (S = null)) : (D = S.sibling);
      var O = p(m, S, d[F], g);
      if (O === null) {
        S === null && (S = D);
        break;
      }
      e && S && O.alternate === null && t(m, S),
        (c = s(O, c, F)),
        _ === null ? (k = O) : (_.sibling = O),
        (_ = O),
        (S = D);
    }
    if (F === d.length) return n(m, S), X && Tt(m, F), k;
    if (S === null) {
      for (; F < d.length; F++)
        (S = x(m, d[F], g)),
          S !== null &&
            ((c = s(S, c, F)), _ === null ? (k = S) : (_.sibling = S), (_ = S));
      return X && Tt(m, F), k;
    }
    for (S = r(m, S); F < d.length; F++)
      (D = v(S, m, F, d[F], g)),
        D !== null &&
          (e && D.alternate !== null && S.delete(D.key === null ? F : D.key),
          (c = s(D, c, F)),
          _ === null ? (k = D) : (_.sibling = D),
          (_ = D));
    return (
      e &&
        S.forEach(function (Y) {
          return t(m, Y);
        }),
      X && Tt(m, F),
      k
    );
  }
  function j(m, c, d, g) {
    var k = En(d);
    if (typeof k != 'function') throw Error(C(150));
    if (((d = k.call(d)), d == null)) throw Error(C(151));
    for (
      var _ = (k = null), S = c, F = (c = 0), D = null, O = d.next();
      S !== null && !O.done;
      F++, O = d.next()
    ) {
      S.index > F ? ((D = S), (S = null)) : (D = S.sibling);
      var Y = p(m, S, O.value, g);
      if (Y === null) {
        S === null && (S = D);
        break;
      }
      e && S && Y.alternate === null && t(m, S),
        (c = s(Y, c, F)),
        _ === null ? (k = Y) : (_.sibling = Y),
        (_ = Y),
        (S = D);
    }
    if (O.done) return n(m, S), X && Tt(m, F), k;
    if (S === null) {
      for (; !O.done; F++, O = d.next())
        (O = x(m, O.value, g)),
          O !== null &&
            ((c = s(O, c, F)), _ === null ? (k = O) : (_.sibling = O), (_ = O));
      return X && Tt(m, F), k;
    }
    for (S = r(m, S); !O.done; F++, O = d.next())
      (O = v(S, m, F, O.value, g)),
        O !== null &&
          (e && O.alternate !== null && S.delete(O.key === null ? F : O.key),
          (c = s(O, c, F)),
          _ === null ? (k = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        S.forEach(function (W) {
          return t(m, W);
        }),
      X && Tt(m, F),
      k
    );
  }
  function A(m, c, d, g) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Jt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case gr:
          e: {
            for (var k = d.key, _ = c; _ !== null; ) {
              if (_.key === k) {
                if (((k = d.type), k === Jt)) {
                  if (_.tag === 7) {
                    n(m, _.sibling),
                      (c = l(_, d.props.children)),
                      (c.return = m),
                      (m = c);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === pt &&
                    zi(k) === _.type)
                ) {
                  n(m, _.sibling),
                    (c = l(_, d.props)),
                    (c.ref = Dn(m, _, d)),
                    (c.return = m),
                    (m = c);
                  break e;
                }
                n(m, _);
                break;
              } else t(m, _);
              _ = _.sibling;
            }
            d.type === Jt
              ? ((c = $t(d.props.children, m.mode, g, d.key)),
                (c.return = m),
                (m = c))
              : ((g = Qr(d.type, d.key, d.props, null, m.mode, g)),
                (g.ref = Dn(m, c, d)),
                (g.return = m),
                (m = g));
          }
          return o(m);
        case Zt:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(m, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = m),
                    (m = c);
                  break e;
                } else {
                  n(m, c);
                  break;
                }
              else t(m, c);
              c = c.sibling;
            }
            (c = rs(d, m.mode, g)), (c.return = m), (m = c);
          }
          return o(m);
        case pt:
          return (_ = d._init), A(m, c, _(d._payload), g);
      }
      if (Rn(d)) return w(m, c, d, g);
      if (En(d)) return j(m, c, d, g);
      _r(m, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = l(c, d)), (c.return = m), (m = c))
          : (n(m, c), (c = ns(d, m.mode, g)), (c.return = m), (m = c)),
        o(m))
      : n(m, c);
  }
  return A;
}
var vn = Pu(!0),
  Fu = Pu(!1),
  rl = Lt(null),
  ll = null,
  on = null,
  Eo = null;
function _o() {
  Eo = on = ll = null;
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
    (Eo = on = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Eo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), on === null)) {
      if (ll === null) throw Error(C(308));
      (on = e), (ll.dependencies = { lanes: 0, firstContext: e });
    } else on = on.next = e;
  return t;
}
var Rt = null;
function Fo(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function Lu(e, t, n, r) {
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
function Lo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Du(e, t) {
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
function Or(e, t, n) {
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
      f = u.next;
    (u.next = null), o === null ? (s = f) : (o.next = f), (o = u);
    var y = e.alternate;
    y !== null &&
      ((y = y.updateQueue),
      (a = y.lastBaseUpdate),
      a !== o &&
        (a === null ? (y.firstBaseUpdate = f) : (a.next = f),
        (y.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var x = l.baseState;
    (o = 0), (y = f = u = null), (a = s);
    do {
      var p = a.lane,
        v = a.eventTime;
      if ((r & p) === p) {
        y !== null &&
          (y = y.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            j = a;
          switch (((p = t), (v = n), j.tag)) {
            case 1:
              if (((w = j.payload), typeof w == 'function')) {
                x = w.call(v, x, p);
                break e;
              }
              x = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = j.payload),
                (p = typeof w == 'function' ? w.call(v, x, p) : w),
                p == null)
              )
                break e;
              x = q({}, x, p);
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
        (v = {
          eventTime: v,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          y === null ? ((f = y = v), (u = x)) : (y = y.next = v),
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
      (y === null && (u = x),
      (l.baseState = u),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = y),
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
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var mr = {},
  et = Lt(mr),
  lr = Lt(mr),
  sr = Lt(mr);
function At(e) {
  if (e === mr) throw Error(C(174));
  return e;
}
function Do(e, t) {
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
function Tu(e) {
  At(sr.current);
  var t = At(et.current),
    n = hs(t, e.type);
  t !== n && (b(lr, e), b(et, n));
}
function To(e) {
  lr.current === e && (G(et), G(lr));
}
var Z = Lt(0);
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
var $r = dt.ReactCurrentDispatcher,
  Zl = dt.ReactCurrentBatchConfig,
  Vt = 0,
  J = null,
  se = null,
  ue = null,
  il = !1,
  Qn = !1,
  or = 0,
  If = 0;
function he() {
  throw Error(C(321));
}
function zo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function Ro(e, t, n, r, l, s) {
  if (
    ((Vt = s),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($r.current = e === null || e.memoizedState === null ? Of : $f),
    (e = n(r, l)),
    Qn)
  ) {
    s = 0;
    do {
      if (((Qn = !1), (or = 0), 25 <= s)) throw Error(C(301));
      (s += 1),
        (ue = se = null),
        (t.updateQueue = null),
        ($r.current = Mf),
        (e = n(r, l));
    } while (Qn);
  }
  if (
    (($r.current = al),
    (t = se !== null && se.next !== null),
    (Vt = 0),
    (ue = se = J = null),
    (il = !1),
    t)
  )
    throw Error(C(300));
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
  return ue === null ? (J.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Ve() {
  if (se === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ue === null ? J.memoizedState : ue.next;
  if (t !== null) (ue = t), (se = e);
  else {
    if (e === null) throw Error(C(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ue === null ? (J.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function ir(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Jl(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = se,
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
      f = s;
    do {
      var y = f.lane;
      if ((Vt & y) === y)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var x = {
          lane: y,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        u === null ? ((a = u = x), (o = r)) : (u = u.next = x),
          (J.lanes |= y),
          (Ut |= y);
      }
      f = f.next;
    } while (f !== null && f !== s);
    u === null ? (o = r) : (u.next = a),
      Ge(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (s = l.lane), (J.lanes |= s), (Ut |= s), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ql(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== l);
    Ge(s, t.memoizedState) || (Ee = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Iu() {}
function zu(e, t) {
  var n = J,
    r = Ve(),
    l = t(),
    s = !Ge(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (Ee = !0)),
    (r = r.queue),
    Oo(Ou.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ar(9, Au.bind(null, n, r, l, t), void 0, null),
      ce === null)
    )
      throw Error(C(349));
    Vt & 30 || Ru(n, t, l);
  }
  return l;
}
function Ru(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Au(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $u(t) && Mu(e);
}
function Ou(e, t, n) {
  return n(function () {
    $u(t) && Mu(e);
  });
}
function $u(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function Mu(e) {
  var t = ut(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function Oi(e) {
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
    (e = e.dispatch = Af.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Bu() {
  return Ve().memoizedState;
}
function Mr(e, t, n, r) {
  var l = Ze();
  (J.flags |= e),
    (l.memoizedState = ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function Sl(e, t, n, r) {
  var l = Ve();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (se !== null) {
    var o = se.memoizedState;
    if (((s = o.destroy), r !== null && zo(r, o.deps))) {
      l.memoizedState = ar(t, n, s, r);
      return;
    }
  }
  (J.flags |= e), (l.memoizedState = ar(1 | t, n, s, r));
}
function $i(e, t) {
  return Mr(8390656, 8, e, t);
}
function Oo(e, t) {
  return Sl(2048, 8, e, t);
}
function Vu(e, t) {
  return Sl(4, 2, e, t);
}
function Uu(e, t) {
  return Sl(4, 4, e, t);
}
function Qu(e, t) {
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
function Hu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Sl(4, 4, Qu.bind(null, t, e), n)
  );
}
function $o() {}
function Wu(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function bu(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ku(e, t, n) {
  return Vt & 21
    ? (Ge(n, t) || ((n = Ja()), (J.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function zf(e, t) {
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
function Gu() {
  return Ve().memoizedState;
}
function Rf(e, t, n) {
  var r = Ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yu(e))
  )
    Xu(t, n);
  else if (((n = Lu(e, t, n, r)), n !== null)) {
    var l = we();
    Ke(n, e, r, l), Zu(n, t, r);
  }
}
function Af(e, t, n) {
  var r = Ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yu(e)) Xu(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = a), Ge(a, o))) {
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
    (n = Lu(e, t, l, r)),
      n !== null && ((l = we()), Ke(n, e, r, l), Zu(n, t, r));
  }
}
function Yu(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function Xu(e, t) {
  Qn = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Zu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n);
  }
}
var al = {
    readContext: Be,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Of = {
    readContext: Be,
    useCallback: function (e, t) {
      return (Ze().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: $i,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mr(4194308, 4, Qu.bind(null, t, e), n)
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
        (e = e.dispatch = Rf.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ze();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Oi,
    useDebugValue: $o,
    useDeferredValue: function (e) {
      return (Ze().memoizedState = e);
    },
    useTransition: function () {
      var e = Oi(!1),
        t = e[0];
      return (e = zf.bind(null, e[1])), (Ze().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        l = Ze();
      if (X) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(C(349));
        Vt & 30 || Ru(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        $i(Ou.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ar(9, Au.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ze(),
        t = ce.identifierPrefix;
      if (X) {
        var n = st,
          r = lt;
        (n = (r & ~(1 << (32 - be(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = or++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = If++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $f = {
    readContext: Be,
    useCallback: Wu,
    useContext: Be,
    useEffect: Oo,
    useImperativeHandle: Hu,
    useInsertionEffect: Vu,
    useLayoutEffect: Uu,
    useMemo: bu,
    useReducer: Jl,
    useRef: Bu,
    useState: function () {
      return Jl(ir);
    },
    useDebugValue: $o,
    useDeferredValue: function (e) {
      var t = Ve();
      return Ku(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(ir)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: zu,
    useId: Gu,
    unstable_isNewReconciler: !1,
  },
  Mf = {
    readContext: Be,
    useCallback: Wu,
    useContext: Be,
    useEffect: Oo,
    useImperativeHandle: Hu,
    useInsertionEffect: Vu,
    useLayoutEffect: Uu,
    useMemo: bu,
    useReducer: ql,
    useRef: Bu,
    useState: function () {
      return ql(ir);
    },
    useDebugValue: $o,
    useDeferredValue: function (e) {
      var t = Ve();
      return se === null ? (t.memoizedState = e) : Ku(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = ql(ir)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: zu,
    useId: Gu,
    unstable_isNewReconciler: !1,
  };
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function As(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Ct(e),
      s = ot(r, l);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Nt(e, s, l)),
      t !== null && (Ke(t, e, l, r), Or(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Ct(e),
      s = ot(r, l);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Nt(e, s, l)),
      t !== null && (Ke(t, e, l, r), Or(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Ct(e),
      l = ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Nt(e, l, r)),
      t !== null && (Ke(t, e, r, n), Or(t, e, r));
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
function Ju(e, t, n) {
  var r = !1,
    l = Pt,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Be(s))
      : ((l = Pe(t) ? Mt : ye.current),
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
function Os(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Lo(e);
  var s = t.contextType;
  typeof s == 'object' && s !== null
    ? (l.context = Be(s))
    : ((s = Pe(t) ? Mt : ye.current), (l.context = xn(e, s))),
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
    do (n += fd(r)), (r = r.return);
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
function $s(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Bf = typeof WeakMap == 'function' ? WeakMap : Map;
function qu(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      cl || ((cl = !0), (Gs = r)), $s(e, t);
    }),
    n
  );
}
function ec(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        $s(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        $s(e, t),
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
    r = e.pingCache = new Bf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ep.bind(null, e, t, n)), t.then(e, e));
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
var Vf = dt.ReactCurrentOwner,
  Ee = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Fu(t, null, n, r) : vn(t, e.child, n, r);
}
function Hi(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    mn(t, l),
    (r = Ro(e, t, n, r, s, l)),
    (n = Ao()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (X && n && No(t), (t.flags |= 1), ve(e, t, r, l), t.child)
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
      ? ((t.tag = 15), (t.type = s), tc(e, t, s, r, l))
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
    (e = Et(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tc(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (er(s, r) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ee = !0);
      else return (t.lanes = e.lanes), ct(e, t, l);
  }
  return Ms(e, t, n, r, l);
}
function nc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(un, Le),
        (Le |= n);
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
          b(un, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        b(un, Le),
        (Le |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(un, Le),
      (Le |= r);
  return ve(e, t, l, n), t.child;
}
function rc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ms(e, t, n, r, l) {
  var s = Pe(n) ? Mt : ye.current;
  return (
    (s = xn(t, s)),
    mn(t, l),
    (n = Ro(e, t, n, r, s, l)),
    (r = Ao()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (X && r && No(t), (t.flags |= 1), ve(e, t, n, l), t.child)
  );
}
function bi(e, t, n, r, l) {
  if (Pe(n)) {
    var s = !0;
    el(t);
  } else s = !1;
  if ((mn(t, l), t.stateNode === null))
    Br(e, t), Ju(t, n, r), Os(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      f = n.contextType;
    typeof f == 'object' && f !== null
      ? (f = Be(f))
      : ((f = Pe(n) ? Mt : ye.current), (f = xn(t, f)));
    var y = n.getDerivedStateFromProps,
      x =
        typeof y == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    x ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== f) && Bi(t, o, r, f)),
      (mt = !1);
    var p = t.memoizedState;
    (o.state = p),
      sl(t, r, o, l),
      (u = t.memoizedState),
      a !== r || p !== u || _e.current || mt
        ? (typeof y == 'function' && (As(t, n, y, r), (u = t.memoizedState)),
          (a = mt || Mi(t, n, a, r, p, u, f))
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
          (o.context = f),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Du(e, t),
      (a = t.memoizedProps),
      (f = t.type === t.elementType ? a : Qe(t.type, a)),
      (o.props = f),
      (x = t.pendingProps),
      (p = o.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = Be(u))
        : ((u = Pe(n) ? Mt : ye.current), (u = xn(t, u)));
    var v = n.getDerivedStateFromProps;
    (y =
      typeof v == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== x || p !== u) && Bi(t, o, r, u)),
      (mt = !1),
      (p = t.memoizedState),
      (o.state = p),
      sl(t, r, o, l);
    var w = t.memoizedState;
    a !== x || p !== w || _e.current || mt
      ? (typeof v == 'function' && (As(t, n, v, r), (w = t.memoizedState)),
        (f = mt || Mi(t, n, f, r, p, w, u) || !1)
          ? (y ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = f))
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
  rc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Di(t, n, !1), ct(e, t, s);
  (r = t.stateNode), (Vf.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = vn(t, e.child, null, s)), (t.child = vn(t, null, a, s)))
      : ve(e, t, a, s),
    (t.memoizedState = r.state),
    l && Di(t, n, !0),
    t.child
  );
}
function lc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Li(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Li(e, t.context, !1),
    Do(e, t.containerInfo);
}
function Ki(e, t, n, r, l) {
  return yn(), Co(l), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var Vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Us(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sc(e, t, n) {
  var r = t.pendingProps,
    l = Z.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(Z, l & 1),
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
                : (s = El(o, r, 0, null)),
              (e = $t(e, r, n, null)),
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
    return Uf(e, t, o, r, a, l, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Et(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (s = Et(a, s)) : ((s = $t(s, o, n, null)), (s.flags |= 2)),
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
    (r = Et(s, { mode: 'visible', children: r.children })),
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
    (t = El({ mode: 'visible', children: t }, e.mode, 0, null)),
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
function Uf(e, t, n, r, l, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = es(Error(C(422)))), Pr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (l = t.mode),
          (r = El({ mode: 'visible', children: r.children }, l, 0, null)),
          (s = $t(s, l, o, null)),
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
    return (r = a), (s = Error(C(419))), (r = es(s, r, void 0)), Pr(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ee || a)) {
    if (((r = ce), r !== null)) {
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
          ((s.retryLane = l), ut(e, l), Ke(r, e, l, -1));
    }
    return Wo(), (r = es(Error(C(421)))), Pr(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = tp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (De = St(l.nextSibling)),
      (Te = t),
      (X = !0),
      (We = null),
      e !== null &&
        ((Ae[Oe++] = lt),
        (Ae[Oe++] = st),
        (Ae[Oe++] = Bt),
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
function oc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((ve(e, t, r.children, n), (r = Z.current), r & 2))
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
  if ((b(Z, r), !(t.mode & 1))) t.memoizedState = null;
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
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Et(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Qf(e, t, n) {
  switch (t.tag) {
    case 3:
      lc(t), yn();
      break;
    case 5:
      Tu(t);
      break;
    case 1:
      Pe(t.type) && el(t);
      break;
    case 4:
      Do(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(rl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? sc(e, t, n)
            : (b(Z, Z.current & 1),
              (e = ct(e, t, n)),
              e !== null ? e.sibling : null);
      b(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return oc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nc(e, t, n);
  }
  return ct(e, t, n);
}
var ic, Qs, ac, uc;
ic = function (e, t) {
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
ac = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), At(et.current);
    var s = null;
    switch (n) {
      case 'input':
        (l = ds(e, l)), (r = ds(e, r)), (s = []);
        break;
      case 'select':
        (l = q({}, l, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
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
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === 'style') {
          var a = l[f];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          f !== 'dangerouslySetInnerHTML' &&
            f !== 'children' &&
            f !== 'suppressContentEditableWarning' &&
            f !== 'suppressHydrationWarning' &&
            f !== 'autoFocus' &&
            (Kn.hasOwnProperty(f)
              ? s || (s = [])
              : (s = s || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (
        ((a = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && u !== a && (u != null || a != null))
      )
        if (f === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (s || (s = []), s.push(f, n)), (n = u);
        else
          f === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (s = s || []).push(f, u))
            : f === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (s = s || []).push(f, '' + u)
              : f !== 'suppressContentEditableWarning' &&
                f !== 'suppressHydrationWarning' &&
                (Kn.hasOwnProperty(f)
                  ? (u != null && f === 'onScroll' && K('scroll', e),
                    s || a === u || (s = []))
                  : (s = s || []).push(f, u));
    }
    n && (s = s || []).push('style', n);
    var f = s;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
uc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!X)
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
function ge(e) {
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
function Hf(e, t, n) {
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
      return ge(t), null;
    case 1:
      return Pe(t.type) && qr(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wn(),
        G(_e),
        G(ye),
        Io(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Er(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (Zs(We), (We = null)))),
        Qs(e, t),
        ge(t),
        null
      );
    case 5:
      To(t);
      var l = At(sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ac(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ge(t), null;
        }
        if (((e = At(et.current)), Er(t))) {
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
              for (l = 0; l < On.length; l++) K(On[l], r);
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
            e === 'http://www.w3.org/1999/xhtml' && (e = Oa(n)),
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
            ic(e, t, !1, !1),
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
                for (l = 0; l < On.length; l++) K(On[l], e);
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
                  (l = q({}, r, { value: void 0 })),
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
                  ? Ba(e, u)
                  : s === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && $a(e, u))
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
                r.value != null && e.setAttribute('value', '' + _t(r.value));
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
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) uc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166));
        if (((n = At(sr.current)), At(et.current), Er(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (s = r.nodeValue !== n) && ((e = Te), e !== null))
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
      return ge(t), null;
    case 13:
      if (
        (G(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && De !== null && t.mode & 1 && !(t.flags & 128))
          _u(), yn(), (t.flags |= 98560), (s = !1);
        else if (((s = Er(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[Je] = t;
          } else
            yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (s = !1);
        } else We !== null && (Zs(We), (We = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? oe === 0 && (oe = 3) : Wo())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        wn(), Qs(e, t), e === null && tr(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return Po(t.type._context), ge(t), null;
    case 17:
      return Pe(t.type) && qr(), ge(t), null;
    case 19:
      if ((G(Z), (s = t.memoizedState), s === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Tn(s, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
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
                return b(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            te() > Sn &&
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
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !X)
            )
              return ge(t), null;
          } else
            2 * te() - s.renderingStartTime > Sn &&
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
          (s.renderingStartTime = te()),
          (t.sibling = null),
          (n = Z.current),
          b(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Ho(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Wf(e, t) {
  switch ((jo(t), t.tag)) {
    case 1:
      return (
        Pe(t.type) && qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wn(),
        G(_e),
        G(ye),
        Io(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return To(t), null;
    case 13:
      if ((G(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(Z), null;
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
  xe = !1,
  bf = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ee(e, t, r);
      }
    else n.current = null;
}
function Hs(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var Yi = !1;
function Kf(e, t) {
  if (((_s = Yr), (e = mu()), So(e))) {
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
            f = 0,
            y = 0,
            x = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              x !== n || (l !== 0 && x.nodeType !== 3) || (a = o + l),
                x !== s || (r !== 0 && x.nodeType !== 3) || (u = o + r),
                x.nodeType === 3 && (o += x.nodeValue.length),
                (v = x.firstChild) !== null;

            )
              (p = x), (x = v);
            for (;;) {
              if (x === e) break t;
              if (
                (p === n && ++f === l && (a = o),
                p === s && ++y === r && (u = o),
                (v = x.nextSibling) !== null)
              )
                break;
              (x = p), (p = x.parentNode);
            }
            x = v;
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
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var j = w.memoizedProps,
                    A = w.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? j : Qe(t.type, j),
                      A
                    );
                  m.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (g) {
          ee(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (w = Yi), (Yi = !1), w;
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
function cc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[rr], delete t[Ds], delete t[Ff], delete t[Lf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xi(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dc(e.return)) return null;
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
var de = null,
  He = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) fc(e, t, n), (n = n.sibling);
}
function fc(e, t, n) {
  if (qe && typeof qe.onCommitFiberUnmount == 'function')
    try {
      qe.onCommitFiberUnmount(gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || an(n, t);
    case 6:
      var r = de,
        l = He;
      (de = null),
        ft(e, t, n),
        (de = r),
        (He = l),
        de !== null &&
          (He
            ? ((e = de),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null &&
        (He
          ? ((e = de),
            (n = n.stateNode),
            e.nodeType === 8
              ? Gl(e.parentNode, n)
              : e.nodeType === 1 && Gl(e, n),
            Jn(e))
          : Gl(de, n.stateNode));
      break;
    case 4:
      (r = de),
        (l = He),
        (de = n.stateNode.containerInfo),
        (He = !0),
        ft(e, t, n),
        (de = r),
        (He = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
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
        !xe &&
        (an(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ee(n, t, a);
        }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), ft(e, t, n), (xe = r))
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
    n === null && (n = e.stateNode = new bf()),
      t.forEach(function (r) {
        var l = np.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ue(e, t) {
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
              (de = a.stateNode), (He = !1);
              break e;
            case 3:
              (de = a.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (de = a.stateNode.containerInfo), (He = !0);
              break e;
          }
          a = a.return;
        }
        if (de === null) throw Error(C(160));
        fc(s, o, l), (de = null), (He = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (f) {
        ee(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) pc(t, e), (t = t.sibling);
}
function pc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Xe(e), r & 4)) {
        try {
          Hn(3, e, e.return), jl(3, e);
        } catch (j) {
          ee(e, e.return, j);
        }
        try {
          Hn(5, e, e.return);
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 1:
      Ue(t, e), Xe(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Xe(e),
        r & 512 && n !== null && an(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Gn(l, '');
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && Ra(l, s),
              xs(a, o);
            var f = xs(a, s);
            for (o = 0; o < u.length; o += 2) {
              var y = u[o],
                x = u[o + 1];
              y === 'style'
                ? Ba(l, x)
                : y === 'dangerouslySetInnerHTML'
                  ? $a(l, x)
                  : y === 'children'
                    ? Gn(l, x)
                    : ao(l, y, x, f);
            }
            switch (a) {
              case 'input':
                fs(l, s);
                break;
              case 'textarea':
                Aa(l, s);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? cn(l, !!s.multiple, v, !1)
                  : p !== !!s.multiple &&
                    (s.defaultValue != null
                      ? cn(l, !!s.multiple, s.defaultValue, !0)
                      : cn(l, !!s.multiple, s.multiple ? [] : '', !1));
            }
            l[rr] = s;
          } catch (j) {
            ee(e, e.return, j);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Xe(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (s = e.memoizedProps);
        try {
          l.nodeValue = s;
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (j) {
          ee(e, e.return, j);
        }
      break;
    case 4:
      Ue(t, e), Xe(e);
      break;
    case 13:
      Ue(t, e),
        Xe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Uo = te())),
        r & 4 && Zi(e);
      break;
    case 22:
      if (
        ((y = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (f = xe) || y), Ue(t, e), (xe = f)) : Ue(t, e),
        Xe(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !y && e.mode & 1)
        )
          for (L = e, y = e.child; y !== null; ) {
            for (x = L = y; L !== null; ) {
              switch (((p = L), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hn(4, p, p.return);
                  break;
                case 1:
                  an(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (j) {
                      ee(r, n, j);
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
              v !== null ? ((v.return = p), (L = v)) : qi(x);
            }
            y = y.sibling;
          }
        e: for (y = null, x = e; ; ) {
          if (x.tag === 5) {
            if (y === null) {
              y = x;
              try {
                (l = x.stateNode),
                  f
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
                      (a.style.display = Ma('display', o)));
              } catch (j) {
                ee(e, e.return, j);
              }
            }
          } else if (x.tag === 6) {
            if (y === null)
              try {
                x.stateNode.nodeValue = f ? '' : x.memoizedProps;
              } catch (j) {
                ee(e, e.return, j);
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
            y === x && (y = null), (x = x.return);
          }
          y === x && (y = null), (x.sibling.return = x.return), (x = x.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Xe(e), r & 4 && Zi(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
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
          throw Error(C(161));
      }
    } catch (u) {
      ee(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gf(e, t, n) {
  (L = e), mc(e);
}
function mc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var l = L,
      s = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Fr;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || xe;
        a = Fr;
        var f = xe;
        if (((Fr = o), (xe = u) && !f))
          for (L = l; L !== null; )
            (o = L),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ea(l)
                : u !== null
                  ? ((u.return = o), (L = u))
                  : ea(l);
        for (; s !== null; ) (L = s), mc(s), (s = s.sibling);
        (L = l), (Fr = a), (xe = f);
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
              xe || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
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
                var f = t.alternate;
                if (f !== null) {
                  var y = f.memoizedState;
                  if (y !== null) {
                    var x = y.dehydrated;
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
              throw Error(C(163));
          }
        xe || (t.flags & 512 && Ws(t));
      } catch (p) {
        ee(t, t.return, p);
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
            ee(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ee(t, l, u);
            }
          }
          var s = t.return;
          try {
            Ws(t);
          } catch (u) {
            ee(t, s, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ws(t);
          } catch (u) {
            ee(t, o, u);
          }
      }
    } catch (u) {
      ee(t, t.return, u);
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
var Yf = Math.ceil,
  ul = dt.ReactCurrentDispatcher,
  Bo = dt.ReactCurrentOwner,
  Me = dt.ReactCurrentBatchConfig,
  U = 0,
  ce = null,
  re = null,
  fe = 0,
  Le = 0,
  un = Lt(0),
  oe = 0,
  ur = null,
  Ut = 0,
  Cl = 0,
  Vo = 0,
  Wn = null,
  Ce = null,
  Uo = 0,
  Sn = 1 / 0,
  tt = null,
  cl = !1,
  Gs = null,
  jt = null,
  Lr = !1,
  yt = null,
  dl = 0,
  bn = 0,
  Ys = null,
  Vr = -1,
  Ur = 0;
function we() {
  return U & 6 ? te() : Vr !== -1 ? Vr : (Vr = te());
}
function Ct(e) {
  return e.mode & 1
    ? U & 2 && fe !== 0
      ? fe & -fe
      : Tf.transition !== null
        ? (Ur === 0 && (Ur = Ja()), Ur)
        : ((e = H),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : su(e.type))),
          e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < bn) throw ((bn = 0), (Ys = null), Error(C(185)));
  dr(e, n, r),
    (!(U & 2) || e !== ce) &&
      (e === ce && (!(U & 2) && (Cl |= n), oe === 4 && gt(e, fe)),
      Fe(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((Sn = te() + 500), kl && Dt()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  Dd(e, t);
  var r = Gr(e, e === ce ? fe : 0);
  if (r === 0)
    n !== null && ui(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ui(n), t === 1))
      e.tag === 0 ? Df(ta.bind(null, e)) : ju(ta.bind(null, e)),
        _f(function () {
          !(U & 6) && Dt();
        }),
        (n = null);
    else {
      switch (qa(r)) {
        case 1:
          n = mo;
          break;
        case 4:
          n = Xa;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = Za;
          break;
        default:
          n = Kr;
      }
      n = Sc(n, hc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function hc(e, t) {
  if (((Vr = -1), (Ur = 0), U & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (hn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === ce ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var s = xc();
    (ce !== e || fe !== t) && ((tt = null), (Sn = te() + 500), Ot(e, t));
    do
      try {
        Jf();
        break;
      } catch (a) {
        gc(e, a);
      }
    while (!0);
    _o(),
      (ul.current = s),
      (U = l),
      re !== null ? (t = 0) : ((ce = null), (fe = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ss(e)), l !== 0 && ((r = l), (t = Xs(e, l)))), t === 1)
    )
      throw ((n = ur), Ot(e, 0), gt(e, r), Fe(e, te()), n);
    if (t === 6) gt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Xf(l) &&
          ((t = fl(e, r)),
          t === 2 && ((s = Ss(e)), s !== 0 && ((r = s), (t = Xs(e, s)))),
          t === 1))
      )
        throw ((n = ur), Ot(e, 0), gt(e, r), Fe(e, te()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          It(e, Ce, tt);
          break;
        case 3:
          if (
            (gt(e, r), (r & 130023424) === r && ((t = Uo + 500 - te()), 10 < t))
          ) {
            if (Gr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ls(It.bind(null, e, Ce, tt), t);
            break;
          }
          It(e, Ce, tt);
          break;
        case 4:
          if ((gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - be(r);
            (s = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~s);
          }
          if (
            ((r = l),
            (r = te() - r),
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
                          : 1960 * Yf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ls(It.bind(null, e, Ce, tt), r);
            break;
          }
          It(e, Ce, tt);
          break;
        case 5:
          It(e, Ce, tt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Fe(e, te()), e.callbackNode === n ? hc.bind(null, e) : null;
}
function Xs(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && Zs(t)),
    e
  );
}
function Zs(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function Xf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!Ge(s(), l)) return !1;
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
    var n = 31 - be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ta(e) {
  if (U & 6) throw Error(C(327));
  hn();
  var t = Gr(e, 0);
  if (!(t & 1)) return Fe(e, te()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ss(e);
    r !== 0 && ((t = r), (n = Xs(e, r)));
  }
  if (n === 1) throw ((n = ur), Ot(e, 0), gt(e, t), Fe(e, te()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, Ce, tt),
    Fe(e, te()),
    null
  );
}
function Qo(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((Sn = te() + 500), kl && Dt());
  }
}
function Qt(e) {
  yt !== null && yt.tag === 0 && !(U & 6) && hn();
  var t = U;
  U |= 1;
  var n = Me.transition,
    r = H;
  try {
    if (((Me.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (Me.transition = n), (U = t), !(U & 6) && Dt();
  }
}
function Ho() {
  (Le = un.current), G(un);
}
function Ot(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ef(n)), re !== null))
    for (n = re.return; n !== null; ) {
      var r = n;
      switch ((jo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qr();
          break;
        case 3:
          wn(), G(_e), G(ye), Io();
          break;
        case 5:
          To(r);
          break;
        case 4:
          wn();
          break;
        case 13:
          G(Z);
          break;
        case 19:
          G(Z);
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
    ((ce = e),
    (re = e = Et(e.current, null)),
    (fe = Le = t),
    (oe = 0),
    (ur = null),
    (Vo = Cl = Ut = 0),
    (Ce = Wn = null),
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
function gc(e, t) {
  do {
    var n = re;
    try {
      if ((_o(), ($r.current = al), il)) {
        for (var r = J.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Vt = 0),
        (ue = se = J = null),
        (Qn = !1),
        (or = 0),
        (Bo.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (ur = t), (re = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = fe),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var f = u,
            y = a,
            x = y.tag;
          if (!(y.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var p = y.alternate;
            p
              ? ((y.updateQueue = p.updateQueue),
                (y.memoizedState = p.memoizedState),
                (y.lanes = p.lanes))
              : ((y.updateQueue = null), (y.memoizedState = null));
          }
          var v = Ui(o);
          if (v !== null) {
            (v.flags &= -257),
              Qi(v, o, a, s, t),
              v.mode & 1 && Vi(s, f, t),
              (t = v),
              (u = f);
            var w = t.updateQueue;
            if (w === null) {
              var j = new Set();
              j.add(u), (t.updateQueue = j);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Vi(s, f, t), Wo();
              break e;
            }
            u = Error(C(426));
          }
        } else if (X && a.mode & 1) {
          var A = Ui(o);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              Qi(A, o, a, s, t),
              Co(kn(u, a));
            break e;
          }
        }
        (s = u = kn(u, a)),
          oe !== 4 && (oe = 2),
          Wn === null ? (Wn = [s]) : Wn.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = qu(s, u, t);
              Ri(s, m);
              break e;
            case 1:
              a = u;
              var c = s.type,
                d = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (jt === null || !jt.has(d))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var g = ec(s, a, t);
                Ri(s, g);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      vc(n);
    } catch (k) {
      (t = k), re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xc() {
  var e = ul.current;
  return (ul.current = al), e === null ? al : e;
}
function Wo() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ce === null || (!(Ut & 268435455) && !(Cl & 268435455)) || gt(ce, fe);
}
function fl(e, t) {
  var n = U;
  U |= 2;
  var r = xc();
  (ce !== e || fe !== t) && ((tt = null), Ot(e, t));
  do
    try {
      Zf();
      break;
    } catch (l) {
      gc(e, l);
    }
  while (!0);
  if ((_o(), (U = n), (ul.current = r), re !== null)) throw Error(C(261));
  return (ce = null), (fe = 0), oe;
}
function Zf() {
  for (; re !== null; ) yc(re);
}
function Jf() {
  for (; re !== null && !Sd(); ) yc(re);
}
function yc(e) {
  var t = kc(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? vc(e) : (re = t),
    (Bo.current = null);
}
function vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Wf(n, t)), n !== null)) {
        (n.flags &= 32767), (re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (re = null);
        return;
      }
    } else if (((n = Hf(n, t, Le)), n !== null)) {
      re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function It(e, t, n) {
  var r = H,
    l = Me.transition;
  try {
    (Me.transition = null), (H = 1), qf(e, t, n, r);
  } finally {
    (Me.transition = l), (H = r);
  }
  return null;
}
function qf(e, t, n, r) {
  do hn();
  while (yt !== null);
  if (U & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Td(e, s),
    e === ce && ((re = ce = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lr ||
      ((Lr = !0),
      Sc(Kr, function () {
        return hn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Me.transition), (Me.transition = null);
    var o = H;
    H = 1;
    var a = U;
    (U |= 4),
      (Bo.current = null),
      Kf(e, n),
      pc(n, e),
      vf(Ps),
      (Yr = !!_s),
      (Ps = _s = null),
      (e.current = n),
      Gf(n),
      Nd(),
      (U = a),
      (H = o),
      (Me.transition = s);
  } else e.current = n;
  if (
    (Lr && ((Lr = !1), (yt = e), (dl = l)),
    (s = e.pendingLanes),
    s === 0 && (jt = null),
    Ed(n.stateNode),
    Fe(e, te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw ((cl = !1), (e = Gs), (Gs = null), e);
  return (
    dl & 1 && e.tag !== 0 && hn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ys ? bn++ : ((bn = 0), (Ys = e))) : (bn = 0),
    Dt(),
    null
  );
}
function hn() {
  if (yt !== null) {
    var e = qa(dl),
      t = Me.transition,
      n = H;
    try {
      if (((Me.transition = null), (H = 16 > e ? 16 : e), yt === null))
        var r = !1;
      else {
        if (((e = yt), (yt = null), (dl = 0), U & 6)) throw Error(C(331));
        var l = U;
        for (U |= 4, L = e.current; L !== null; ) {
          var s = L,
            o = s.child;
          if (L.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var f = a[u];
                for (L = f; L !== null; ) {
                  var y = L;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hn(8, y, s);
                  }
                  var x = y.child;
                  if (x !== null) (x.return = y), (L = x);
                  else
                    for (; L !== null; ) {
                      y = L;
                      var p = y.sibling,
                        v = y.return;
                      if ((cc(y), y === f)) {
                        L = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (L = p);
                        break;
                      }
                      L = v;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var j = w.child;
                if (j !== null) {
                  w.child = null;
                  do {
                    var A = j.sibling;
                    (j.sibling = null), (j = A);
                  } while (j !== null);
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
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (L = m);
                break e;
              }
              L = s.return;
            }
        }
        var c = e.current;
        for (L = c; L !== null; ) {
          o = L;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (L = d);
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
                } catch (k) {
                  ee(a, a.return, k);
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
          ((U = l), Dt(), qe && typeof qe.onPostCommitFiberRoot == 'function')
        )
          try {
            qe.onPostCommitFiberRoot(gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (Me.transition = t);
    }
  }
  return !1;
}
function na(e, t, n) {
  (t = kn(n, t)),
    (t = qu(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = we()),
    e !== null && (dr(e, 1, t), Fe(e, t));
}
function ee(e, t, n) {
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
            (e = ec(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = we()),
            t !== null && (dr(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ep(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (fe & n) === n &&
      (oe === 4 || (oe === 3 && (fe & 130023424) === fe && 500 > te() - Uo)
        ? Ot(e, 0)
        : (Vo |= n)),
    Fe(e, t);
}
function wc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = we();
  (e = ut(e, t)), e !== null && (dr(e, t, n), Fe(e, n));
}
function tp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), wc(e, n);
}
function np(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), wc(e, n);
}
var kc;
kc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), Qf(e, t, n);
      Ee = !!(e.flags & 131072);
    }
  else (Ee = !1), X && t.flags & 1048576 && Cu(t, nl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Br(e, t), (e = t.pendingProps);
      var l = xn(t, ye.current);
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
            Pe(r) ? ((s = !0), el(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Lo(t),
            (l.updater = Nl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Os(t, r, e, n),
            (t = Bs(null, t, r, !0, s, n)))
          : ((t.tag = 0), X && s && No(t), ve(null, t, l, n), (t = t.child)),
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
          (l = t.tag = lp(r)),
          (e = Qe(r, e)),
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
            t = Wi(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        Ms(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        bi(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((lc(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          Du(e, t),
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
            (l = kn(Error(C(423)), t)), (t = Ki(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = kn(Error(C(424)), t)), (t = Ki(e, t, r, n, l));
            break e;
          } else
            for (
              De = St(t.stateNode.containerInfo.firstChild),
                Te = t,
                X = !0,
                We = null,
                n = Fu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Tu(t),
        e === null && zs(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Fs(r, l) ? (o = null) : s !== null && Fs(r, s) && (t.flags |= 32),
        rc(e, t),
        ve(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && zs(t), null;
    case 13:
      return sc(e, t, n);
    case 4:
      return (
        Do(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        Hi(e, t, r, l, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
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
          if (Ge(s.value, o)) {
            if (s.children === l.children && !_e.current) {
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
                      var f = s.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var y = f.pending;
                        y === null
                          ? (u.next = u)
                          : ((u.next = y.next), (y.next = u)),
                          (f.pending = u);
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
                if (((o = s.return), o === null)) throw Error(C(341));
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
        ve(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        mn(t, n),
        (l = Be(l)),
        (r = r(l)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Qe(r, t.pendingProps)),
        (l = Qe(r.type, l)),
        Wi(e, t, r, l, n)
      );
    case 15:
      return tc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        Br(e, t),
        (t.tag = 1),
        Pe(r) ? ((e = !0), el(t)) : (e = !1),
        mn(t, n),
        Ju(t, r, l),
        Os(t, r, l, n),
        Bs(null, t, r, !0, e, n)
      );
    case 19:
      return oc(e, t, n);
    case 22:
      return nc(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Sc(e, t) {
  return Ya(e, t);
}
function rp(e, t, n, r) {
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
  return new rp(e, t, n, r);
}
function bo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function lp(e) {
  if (typeof e == 'function') return bo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === co)) return 11;
    if (e === fo) return 14;
  }
  return 2;
}
function Et(e, t) {
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
        return $t(n.children, l, s, t);
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
      case Ta:
        return El(n, l, s, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case La:
              o = 10;
              break e;
            case Da:
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
        throw Error(C(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = $e(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function $t(e, t, n, r) {
  return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function El(e, t, n, r) {
  return (
    (e = $e(22, e, r, t)),
    (e.elementType = Ta),
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
function sp(e, t, n, r, l) {
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
    (this.eventTimes = Ol(0)),
    (this.expirationTimes = Ol(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ol(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ko(e, t, n, r, l, s, o, a, u) {
  return (
    (e = new sp(e, t, n, a, u)),
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
    Lo(s),
    e
  );
}
function op(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Nc(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return Nu(e, n, t);
  }
  return t;
}
function jc(e, t, n, r, l, s, o, a, u) {
  return (
    (e = Ko(n, r, !0, e, l, s, o, a, u)),
    (e.context = Nc(null)),
    (n = e.current),
    (r = we()),
    (l = Ct(n)),
    (s = ot(r, l)),
    (s.callback = t ?? null),
    Nt(n, s, l),
    (e.current.lanes = l),
    dr(e, l, r),
    Fe(e, r),
    e
  );
}
function _l(e, t, n, r) {
  var l = t.current,
    s = we(),
    o = Ct(l);
  return (
    (n = Nc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(l, t, o)),
    e !== null && (Ke(e, l, o, s), Or(e, l, o)),
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
function ip() {
  return null;
}
var Cc =
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
  if (t === null) throw Error(C(409));
  _l(e, t, null, null);
};
Pl.prototype.unmount = Yo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function () {
      _l(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++);
    ht.splice(n, 0, e), n === 0 && lu(e);
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
function ap(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var f = pl(o);
        s.call(f);
      };
    }
    var o = jc(t, r, e, 0, null, !1, !1, '', la);
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
      var f = pl(u);
      a.call(f);
    };
  }
  var u = Ko(e, 0, !1, null, null, !1, !1, '', la);
  return (
    (e._reactRootContainer = u),
    (e[at] = u.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    Qt(function () {
      _l(t, u, n, r);
    }),
    u
  );
}
function Ll(e, t, n, r, l) {
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
    _l(t, o, e, l);
  } else o = ap(n, t, e, l, r);
  return pl(o);
}
eu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 &&
          (ho(t, n | 1), Fe(t, te()), !(U & 6) && ((Sn = te() + 500), Dt()));
      }
      break;
    case 13:
      Qt(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var l = we();
          Ke(r, e, 1, l);
        }
      }),
        Go(e, 1);
  }
};
go = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = we();
      Ke(t, e, 134217728, n);
    }
    Go(e, 134217728);
  }
};
tu = function (e) {
  if (e.tag === 13) {
    var t = Ct(e),
      n = ut(e, t);
    if (n !== null) {
      var r = we();
      Ke(n, e, t, r);
    }
    Go(e, t);
  }
};
nu = function () {
  return H;
};
ru = function (e, t) {
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
            if (!l) throw Error(C(90));
            za(r), fs(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Aa(e, n);
      break;
    case 'select':
      (t = n.value), t != null && cn(e, !!n.multiple, t, !1);
  }
};
Qa = Qo;
Ha = Qt;
var up = { usingClientEntryPoint: !1, Events: [pr, nn, wl, Va, Ua, Qo] },
  In = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  cp = {
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
      return (e = Ka(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance || ip,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dr.isDisabled && Dr.supportsFiber)
    try {
      (gl = Dr.inject(cp)), (qe = Dr);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xo(t)) throw Error(C(200));
  return op(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!Xo(e)) throw Error(C(299));
  var n = !1,
    r = '',
    l = Cc;
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
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(C(188))
      : ((e = Object.keys(e).join(',')), Error(C(268, e)));
  return (e = Ka(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return Qt(e);
};
ze.hydrate = function (e, t, n) {
  if (!Fl(t)) throw Error(C(200));
  return Ll(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!Xo(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = '',
    o = Cc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = jc(t, null, e, 1, n ?? null, l, !1, s, o)),
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
ze.render = function (e, t, n) {
  if (!Fl(t)) throw Error(C(200));
  return Ll(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!Fl(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Qt(function () {
        Ll(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = Qo;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fl(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Ll(e, t, n, !1, r);
};
ze.version = '18.3.1-next-f1338f8080-20240426';
function Ec() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ec);
    } catch (e) {
      console.error(e);
    }
}
Ec(), (Ea.exports = ze);
var dp = Ea.exports,
  sa = dp;
(ss.createRoot = sa.createRoot), (ss.hydrateRoot = sa.hydrateRoot);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var fp = {
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
 */ const pp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  me = (e, t) => {
    const n = B.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: o,
          className: a = '',
          children: u,
          ...f
        },
        y
      ) =>
        B.createElement(
          'svg',
          {
            ref: y,
            ...fp,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? (Number(s) * 24) / Number(l) : s,
            className: ['lucide', `lucide-${pp(e)}`, a].join(' '),
            ...f,
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
 */ const Js = me('AlertCircle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rt = me('CheckCircle', [
  ['path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', key: 'g774vq' }],
  ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qs = me('ChevronDown', [
  ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oa = me('ChevronUp', [
  ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ml = me('Columns', [
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
 */ const _c = me('Download', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
  ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ia = me('FileSpreadsheet', [
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
 */ const aa = me('FileText', [
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
 */ const ua = me('Filter', [
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
 */ const ls = me('Folder', [
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
 */ const mp = me('GitCompare', [
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
 */ const hp = me('Layout', [
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
 */ const ca = me('Loader', [
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
 */ const gp = me('Package', [
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
 */ const Pc = me('Settings', [
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
 */ const da = me('Upload', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ['polyline', { points: '17 8 12 3 7 8', key: 't8dd8p' }],
  ['line', { x1: '12', x2: '12', y1: '3', y2: '15', key: 'widbto' }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eo = me('XCircle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
  ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
]);
function xp({
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
                children: i.jsx(mp, {
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
              i.jsx(Pc, { className: 'w-3 h-3 md:w-4 md:h-4' }),
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
const yp = (e) => {
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
  vp = (e) =>
    e
      .split(/\r?\n/)
      .filter((n) => n.trim())
      .map((n) => yp(n)),
  to = (e) => (e ? String(e).replace(/,/g, '').trim() : ''),
  wp = (e) => {
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
function kp({
  showSettings: e,
  section1Name: t,
  setSection1Name: n,
  section2Name: r,
  setSection2Name: l,
  sectionBLStart: s,
  setSectionBLStart: o,
  sectionBLEnd: a,
  setSectionBLEnd: u,
  sectionQAAStart: f,
  setSectionQAAStart: y,
  sectionQAAEnd: x,
  setSectionQAAEnd: p,
  s1BgColor: v,
  setS1BgColor: w,
  s1TextColor: j,
  setS1TextColor: A,
  s2BgColor: m,
  setS2BgColor: c,
  s2TextColor: d,
  setS2TextColor: g,
  matchedRowBgColor: k,
  setMatchedRowBgColor: _,
  mismatchedRowBgColor: S,
  setMismatchedRowBgColor: F,
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
              i.jsx(Pc, { className: 'w-5 h-5 text-blue-600' }),
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
                style: { backgroundColor: v, borderColor: j + '40' },
                children: [
                  i.jsxs('h3', {
                    className: 'font-bold mb-4 flex items-center gap-2',
                    style: { color: j },
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
                        onChange: (D) => n(D.target.value),
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
                                onChange: (D) =>
                                  o(parseInt(D.target.value) || 0),
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
                                onChange: (D) =>
                                  u(parseInt(D.target.value) || s + 1),
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
                            value: v,
                            onChange: (D) => w(D.target.value),
                            className: 'h-8 w-8 rounded cursor-pointer',
                          }),
                          i.jsx('input', {
                            type: 'color',
                            value: j,
                            onChange: (D) => A(D.target.value),
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
                style: { backgroundColor: m, borderColor: d + '40' },
                children: [
                  i.jsxs('h3', {
                    className: 'font-bold mb-4 flex items-center gap-2',
                    style: { color: d },
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
                        onChange: (D) => l(D.target.value),
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
                                value: f,
                                onChange: (D) =>
                                  y(parseInt(D.target.value) || 0),
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
                                min: f + 1,
                                value: x,
                                onChange: (D) =>
                                  p(parseInt(D.target.value) || f + 1),
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
                            value: m,
                            onChange: (D) => c(D.target.value),
                            className: 'h-8 w-8 rounded cursor-pointer',
                          }),
                          i.jsx('input', {
                            type: 'color',
                            value: d,
                            onChange: (D) => g(D.target.value),
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
                        value: k,
                        onChange: (D) => _(D.target.value),
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
                        onChange: (D) => F(D.target.value),
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
function Sp({
  excelFolder: e,
  setExcelFolder: t,
  pdfFolder: n,
  setPdfFolder: r,
  outputCsvName: l,
  setOutputCsvName: s,
  onStart: o,
}) {
  const [a, u] = ne.useState({ name: '', path: '' }),
    [f, y] = ne.useState({ name: '', path: '' }),
    [x, p] = ne.useState({ name: '', path: '' }),
    [v, w] = ne.useState(''),
    [j, A] = ne.useState(''),
    [m, c] = ne.useState(!1),
    [d, g] = ne.useState(0),
    [k, _] = ne.useState(!1),
    [S, F] = ne.useState(!1),
    D = () => {
      const h = new Date(),
        N = String(h.getFullYear()).slice(-2),
        E = String(h.getMonth() + 1).padStart(2, '0'),
        T = String(h.getDate()).padStart(2, '0'),
        I = String(h.getHours()).padStart(2, '0'),
        z = String(h.getMinutes()).padStart(2, '0');
      return `${N}${E}${T}_${I}${z}.csv`;
    },
    O = async () => {
      var h;
      (h = document.getElementById('excel-file-input')) == null || h.click();
    },
    Y = async () => {
      var h;
      (h = document.getElementById('excel-folder-input')) == null || h.click();
    },
    W = async () => {
      var h;
      (h = document.getElementById('pdf-folder-input')) == null || h.click();
    },
    ie = async () => {
      var h;
      try {
        if ('showSaveFilePicker' in window) {
          const N = D(),
            E = await window.showSaveFilePicker({
              types: [
                { description: 'CSV Files', accept: { 'text/csv': ['.csv'] } },
              ],
              suggestedName: N,
            }),
            T = n ? `${n}/${E.name}` : E.name;
          p({ name: E.name, path: T }), s(T);
        } else
          (h = document.getElementById('output-csv-input')) == null ||
            h.click();
      } catch {
        console.log('File save dialog cancelled');
      }
    },
    ae = (h) => {
      const N = h.target.files;
      if (N && N.length > 0) {
        const z = (N[0].webkitRelativePath || '')
          .split('/')
          .slice(0, -1)
          .join('\\');
        w(z), console.log('Excel Folder Path:', z);
      }
    },
    le = (h) => {
      var E;
      const N = (E = h.target.files) == null ? void 0 : E[0];
      if (N) {
        const T = N.name;
        A(T);
        let I = T;
        v && (I = `${v}\\${T}`);
        const z = I.split(/[\\\/]/).filter((Kt) => Kt.length > 0),
          R = z.findIndex((Kt) => Kt === 'n8n-files');
        let Q;
        R !== -1 && R < z.length - 1
          ? (Q = `/home/node/.n8n-files/${z.slice(R + 1).join('/')}`)
          : (Q = `/home/node/.n8n-files/${z.join('/')}`);
        const Dl = `${Q.split('/').slice(0, -1).join('/')}/**/*.xlsx`;
        console.log('=== Excel File Debug ==='),
          console.log('fileName:', T),
          console.log('excelFolderPath (from step 1):', v),
          console.log('Merged Path (Windows):', I),
          console.log('Converted Linux Path:', Q),
          console.log('Excel Folder Pattern:', Dl),
          console.log('======================='),
          u({ name: T, path: Q }),
          t(Q);
      }
    },
    Ne = (h) => {
      const N = h.target.files;
      if (N && N.length > 0) {
        const E = N[0];
        let T = '';
        E.path
          ? (T = E.path
              .split(/[\/\\]/)
              .slice(0, -1)
              .join('\\'))
          : E.webkitRelativePath &&
            (T = E.webkitRelativePath.split('/').slice(0, -1).join('\\')),
          T || (T = E.name);
        const I = T.split(/[\/\\]/).pop() || 'Folder';
        console.log('PDF Folder - Windows Path:', T),
          console.log('PDF Folder - Folder Name:', I);
        const z = T.split(/[\\\/]/).filter((je) => je.length > 0),
          R = z.findIndex((je) => je === 'n8n-files');
        let Q;
        R !== -1 && R < z.length - 1
          ? (Q = `/home/node/.n8n-files/${z.slice(R + 1).join('/')}`)
          : (Q = `/home/node/.n8n-files/${z.join('/')}`),
          console.log('PDF Folder - Converted Linux Path:', Q),
          y({ name: I, path: Q }),
          (l === '' || l === n) && s(Q),
          r(Q);
      }
    },
    Ye = (h) => {
      var E;
      const N = (E = h.target.files) == null ? void 0 : E[0];
      if (N) {
        const T = N.path || N.name;
        p({ name: N.name, path: T }), s(T);
      }
    },
    P = e && n && l,
    $ = ne.useCallback(async () => {
      if (!e || !n) {
        console.error('Excel folder or PDF folder not selected');
        return;
      }
      _(!0);
      let h = e;
      e.startsWith('/') || (h = `/home/node/.n8n-files/${e}`);
      let N = n;
      n.startsWith('/') || (N = `/home/node/.n8n-files/${n}`);
      const I = `${h.split('/').slice(0, -1).join('/')}/**/*.xlsx`,
        z = N;
      console.log('Excel Path (original):', e),
        console.log('Excel Path (converted):', h),
        console.log('Excel Folder Pattern:', I),
        console.log('PDF Path (original):', n),
        console.log('PDF Path (converted):', N),
        console.log('Schema Pattern:', z);
      const R = { excelFolder: I, schema: z };
      try {
        const Q = await fetch('http://localhost:5678/webhook/compare', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(R),
        });
        if (!Q.ok) throw new Error('Comparison failed');
        const je = await Q.json();
        console.log('Comparison Result:', je), F(!0), _(!1);
      } catch (Q) {
        console.error('Comparison Error:', Q), _(!1);
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
      const N = `${h}/**/*.pdf`;
      console.log('=== PDF Folder Debug ==='),
        console.log('pdfFolder (original):', n),
        console.log('fullPath (converted):', h),
        console.log('Final pdfFolderPattern:', N),
        console.log('======================');
      let E = { excelFolder: e, schema: N };
      try {
        const T = await fetch('http://localhost:5678/webhook/insert', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(E),
        });
        if (!T.ok) throw new Error('OCR processing failed');
        const I = await T.json();
        console.log('OCR Result:', I),
          console.log(
            'OCR Result Type:',
            typeof I,
            'Is Array:',
            Array.isArray(I)
          );
        let z = !1;
        if (
          (Array.isArray(I) && I.length > 0
            ? (console.log('First item:', I[0]),
              'success' in I[0] ? (z = I[0].success === !0) : (z = !0))
            : I && typeof I == 'object' && (z = I.success !== !1),
          console.log('Is Success:', z),
          z)
        )
          console.log('Transitioning to comparison...'), c(!1), await $();
        else
          throw (
            (console.error('OCR returned unsuccessful result:', I),
            new Error('OCR returned unsuccessful result'))
          );
        o && o({ excelFile: e, pdfFolder: n, resultFile: l, ocrResult: I });
      } catch (T) {
        console.error('OCR Error:', T), c(!1);
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
        onChange: ae,
        className: 'hidden',
      }),
      i.jsx('input', {
        id: 'excel-file-input',
        type: 'file',
        accept: '.xlsx,.xls',
        onChange: le,
        className: 'hidden',
      }),
      i.jsx('input', {
        id: 'pdf-folder-input',
        type: 'file',
        webkitdirectory: 'true',
        directory: 'true',
        onChange: Ne,
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
                    onClick: Y,
                    className: `border-2 border-dashed rounded-lg p-2 text-center transition-all cursor-pointer group ${
                      v
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                    }`,
                    title: v,
                    children: i.jsxs('div', {
                      className: 'pointer-events-none flex items-center gap-2',
                      children: [
                        v
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
                            v &&
                              i.jsx('span', {
                                className:
                                  'text-xs font-medium text-blue-700 truncate block',
                                children: v,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx('div', {
                    onClick: O,
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
                  onClick: W,
                  className: `border-2 border-dashed rounded-lg p-2 md:p-3 text-center transition-all cursor-pointer group relative h-full flex items-center justify-center ${
                    n
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-purple-500 hover:bg-purple-50'
                  }`,
                  title: f.path,
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
                                children: f.name || 'Folder selected',
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
                  onClick: ie,
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
              disabled: !P || m || k || S,
              className: `px-6 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                S
                  ? 'bg-green-600 text-white cursor-default'
                  : k
                    ? 'bg-orange-600 text-white cursor-wait animate-pulse'
                    : m
                      ? 'bg-purple-600 text-white cursor-wait animate-pulse'
                      : P
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
                : k
                  ? i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(ca, { className: 'w-4 h-4 animate-spin' }),
                        i.jsx('span', { children: 'Comparisioning' }),
                      ],
                    })
                  : m
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
function Np({
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
function jp({
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
function Cp({
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
  const [f, y] = B.useState(!1),
    x = (w) => {
      l === w ? (r(null), y(!1)) : (r(w), y(!0));
    },
    p = () => {
      y(!1);
    },
    v = (w) => {
      a(o === w ? null : w);
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
                i.jsx(gp, {
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
              children: i.jsx(jp, {
                isVisible: l === 'discrepancies',
                fields: s || [],
                selectedField: o,
                onFieldSelect: v,
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
  Ep = (e, t, n, r, l = 'paired', s = {}) => {
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
      f = (d) => {
        const g = d.filter((F) => !u.includes(F)),
          k = [
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
          _ = g
            .filter((F) => k.includes(F))
            .sort((F, D) => k.indexOf(F) - k.indexOf(D)),
          S = g.filter((F) => !k.includes(F)).sort();
        return [..._, ...S];
      },
      y = (d) => {
        const g = Object.keys(d.rowBL).filter((S) => !u.includes(S)),
          k = Object.keys(d.rowQAA)
            .filter((S) => !u.includes(S))
            .map((S) => S.replace(/^PDF /, '')),
          _ = [...new Set([...g, ...k])];
        return f(_);
      },
      x = (d, g) => {
        if (d[g] !== void 0) return d[g];
        if (d[`PDF ${g}`] !== void 0) return d[`PDF ${g}`];
      },
      p = f([...new Set([...o, ...a])]),
      v = p.filter((d) => d !== 'PDF Path'),
      w = y(e[0]).filter((d) => d !== 'Path');
    let j;
    if (l === 'alternating') {
      const d = ['ลำดับ', 'สถานะ'];
      p.forEach((g) => {
        g !== 'PDF Path' && d.push(`${t}-${g}`), d.push(`${n}-${g}`);
      }),
        d.push('ฟิลด์ที่แตกต่าง'),
        d.push('Notes'),
        (j = [
          d.join(','),
          ...e.map((g) => {
            const k = [g.index + 1, g.isIdentical ? 'เหมือนกัน' : 'แตกต่าง'];
            p.forEach((S) => {
              S !== 'PDF Path' && k.push(`"${g.rowBL[S] || ''}"`),
                k.push(`"${g.rowQAA[S] || ''}"`);
            });
            const _ =
              g.differences.length > 0
                ? g.differences.map((S) => `• ${S.field}`).join(`
`)
                : 'ข้อมูลถูกต้อง';
            return (
              k.push(`"${_}"`), k.push(`"${s[g.index] || ''}"`), k.join(',')
            );
          }),
        ].join(`
`));
    } else if (l === 'paired') {
      const d = ['ลำดับ', 'สถานะ'];
      v.forEach((g) => {
        d.push(`${t}-${g}`);
      }),
        p.forEach((g) => {
          d.push(`${n}-${g}`);
        }),
        d.push('ฟิลด์ที่แตกต่าง'),
        d.push('Notes'),
        (j = [
          d.join(','),
          ...e.map((g) => {
            const k = [g.index + 1, g.isIdentical ? 'เหมือนกัน' : 'แตกต่าง'];
            v.forEach((S) => {
              k.push(`"${g.rowBL[S] || ''}"`);
            }),
              p.forEach((S) => {
                k.push(`"${g.rowQAA[S] || ''}"`);
              });
            const _ =
              g.differences.length > 0
                ? g.differences.map((S) => `• ${S.field}`).join(`
`)
                : 'ข้อมูลถูกต้อง';
            return (
              k.push(`"${_}"`), k.push(`"${s[g.index] || ''}"`), k.join(',')
            );
          }),
        ].join(`
`));
    } else if (l === 'separated') {
      const d = ['ลำดับ', 'แหล่งข้อมูล'];
      w.forEach((k) => {
        d.push(k);
      }),
        d.push('ฟิลด์ที่แตกต่าง'),
        d.push('Notes');
      const g = [];
      g.push(d.join(',')),
        e.forEach((k) => {
          const _ = [k.index + 1, `"${t}"`];
          w.forEach((D) => {
            const O = x(k.rowBL, D);
            _.push(`"${O || ''}"`);
          });
          const S =
            k.differences.length > 0
              ? k.differences.map((D) => `• ${D.field}`).join(`
`)
              : 'ข้อมูลถูกต้อง';
          _.push(`"${S}"`),
            _.push(`"${s[k.index] || ''}"`),
            g.push(_.join(','));
          const F = ['', `"${n}"`];
          w.forEach((D) => {
            const O = x(k.rowQAA, D);
            F.push(`"${O || ''}"`);
          }),
            F.push(''),
            F.push(''),
            g.push(F.join(','));
        }),
        (j = g.join(`
`));
    } else {
      const d = ['ลำดับ', 'สถานะ'];
      v.forEach((g) => {
        d.push(`${t}-${g}`);
      }),
        p.forEach((g) => {
          d.push(`${n}-${g}`);
        }),
        d.push('ฟิลด์ที่แตกต่าง'),
        d.push('Notes'),
        (j = [
          d.join(','),
          ...e.map((g) => {
            const k = [g.index + 1, g.isIdentical ? 'เหมือนกัน' : 'แตกต่าง'];
            v.forEach((S) => {
              k.push(`"${g.rowBL[S] || ''}"`);
            }),
              p.forEach((S) => {
                k.push(`"${g.rowQAA[S] || ''}"`);
              });
            const _ =
              g.differences.length > 0
                ? g.differences.map((S) => `• ${S.field}`).join(`
`)
                : 'ข้อมูลถูกต้อง';
            return (
              k.push(`"${_}"`), k.push(`"${s[g.index] || ''}"`), k.join(',')
            );
          }),
        ].join(`
`));
    }
    const A = new Blob(['\uFEFF' + j], { type: 'text/csv;charset=utf-8;' }),
      m = document.createElement('a');
    m.href = URL.createObjectURL(A);
    const c = r === 'all' ? 'all' : r === 'identical' ? 'matched' : 'different';
    (m.download = `vat_comparison_${l}_${c}.csv`), m.click();
  };
function fa({
  comparison: e,
  rowIndex: t,
  dismissedIssues: n,
  onDismissIssue: r,
  rowSpan: l,
}) {
  var v;
  const s = [];
  e.dataset1Empty &&
    s.push({ key: 'data-dataset1', text: 'Dataset 1 missing' }),
    e.dataset2Empty &&
      s.push({ key: 'data-dataset2', text: 'Dataset 2 missing' }),
    (v = e.differences) == null ||
      v.forEach((w) => {
        s.push({ key: `diff-${w.field}`, text: `${w.field} mismatch` });
      });
  const o = n[t] || {},
    a = s.filter((w) => !o[w.key]);
  let u = '',
    f = '';
  s.length === 0
    ? ((u = ''), (f = ''))
    : a.length === 0
      ? ((u = 'bg-green-50'), (f = ''))
      : ((u = 'bg-red-600'), (f = 'text-white'));
  const [y, x] = B.useState(!1),
    p = () => x(!y);
  return i.jsx('td', {
    className: `px-2 py-2 text-xs border border-gray-200 ${u} ${f}`,
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
                    i.jsx('span', { children: y ? '▲' : '▼' }),
                  ],
                }),
                y &&
                  i.jsx('div', {
                    className: 'space-y-1 mt-2',
                    children: s.map((w) => {
                      const j = o[w.key];
                      return i.jsxs(
                        'label',
                        {
                          className: 'flex items-center gap-2 cursor-pointer',
                          children: [
                            i.jsx('input', {
                              type: 'checkbox',
                              checked: j || !1,
                              onChange: () => r(t, w.key),
                              className: 'w-3 h-3 cursor-pointer',
                            }),
                            i.jsx('span', {
                              className: j
                                ? 'line-through text-gray-300'
                                : a.length > 0
                                  ? 'text-white'
                                  : '',
                              children: w.text,
                            }),
                          ],
                        },
                        w.key
                      );
                    }),
                  }),
              ],
            }),
  });
}
function pa({ rowIndex: e, notes: t, onNotesChange: n, rowSpan: r }) {
  const [l, s] = B.useState(!1),
    o = (y) => {
      n(e, y.target.value);
    },
    a = t[e] || '',
    f =
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
        f &&
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
function _p({ filePath: e }) {
  const [t, n] = B.useState(!1),
    [r, l] = B.useState(!1);
  if (!e || e.trim() === '')
    return i.jsx('span', { className: 'text-gray-400', children: '-' });
  const s = (p) => {
      const v = p.replace(/\\/g, '/').split('/');
      return v[v.length - 1] || p;
    },
    o = (p) => s(p).split('.').pop().toLowerCase(),
    a = s(e),
    u = o(e),
    f = (p) =>
      /^[A-Za-z]:\\/.test(p) || (p.startsWith('/') && !p.startsWith('//')),
    y = () => {
      if (f(e)) {
        const p = encodeURIComponent(e);
        window.open(`/api/file?path=${p}`, '_blank');
      } else window.open(e, '_blank');
    },
    x = () => {
      if (!t) return null;
      const p = u === 'pdf',
        v = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(u);
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
                  src: f(e) ? `/api/file?path=${encodeURIComponent(e)}` : e,
                  className: 'w-full h-full border-0',
                  title: a,
                  onError: (w) => {
                    (w.target.style.display = 'none'),
                      (w.target.parentElement.innerHTML =
                        '<div class="h-full flex flex-col items-center justify-center text-center"><svg class="w-12 h-12 text-red-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><p class="text-xs text-gray-600">Failed to load PDF</p></div>');
                  },
                }),
              })
            : v
              ? i.jsx('div', {
                  className: 'bg-gray-100 rounded overflow-hidden',
                  children: i.jsx('img', {
                    src: f(e) ? `/api/file?path=${encodeURIComponent(e)}` : e,
                    alt: a,
                    className: 'max-h-64 max-w-md object-contain',
                    onError: (w) => {
                      (w.target.style.display = 'none'),
                        (w.target.parentElement.innerHTML =
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
                      onClick: y,
                      className:
                        'flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700',
                      children: [i.jsx(_c, { className: 'w-3 h-3' }), 'Open'],
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
        onClick: y,
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
function Pp({
  filteredComparison: e,
  fullComparison: t,
  displayMode: n,
  setDisplayMode: r,
  filterMode: l,
  setFilterMode: s,
  expandedRow: o,
  setExpandedRow: a,
  section1Name: u,
  section2Name: f,
  s1TextColor: y,
  s1BgColor: x,
  s2TextColor: p,
  s2BgColor: v,
  matchedRowBgColor: w,
  mismatchedRowBgColor: j,
  businessInfo: A,
}) {
  const [m, c] = ne.useState({}),
    [d, g] = ne.useState({}),
    [k, _] = ne.useState(''),
    [S, F] = ne.useState('all'),
    D = (h, N) => {
      c((E) => {
        var T;
        return {
          ...E,
          [h]: { ...(E[h] || {}), [N]: !((T = E[h]) != null && T[N]) },
        };
      });
    },
    O = (h, N) => {
      g((E) => ({ ...E, [h]: N }));
    },
    Y = [
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
    W =
      e && e.length > 0
        ? [
            ...new Set([
              ...Object.keys(e[0].rowBL),
              ...Object.keys(e[0].rowQAA),
            ]),
          ].filter((h) => h !== 'Status' && !Y.includes(h))
        : [],
    ie = (h) => {
      const N = h.filter((z) => !Y.includes(z)),
        E = [
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
        T = N.filter((z) => E.includes(z)).sort(
          (z, R) => E.indexOf(z) - E.indexOf(R)
        ),
        I = N.filter((z) => !E.includes(z)).sort();
      return [...T, ...I];
    },
    ae = (h) => {
      const N = Object.keys(h.rowBL).filter((I) => !Y.includes(I)),
        E = Object.keys(h.rowQAA)
          .filter((I) => !Y.includes(I))
          .map((I) => I.replace(/^PDF /, '')),
        T = [...new Set([...N, ...E])];
      return ie(T);
    },
    le = (h, N) => {
      if (h[N] !== void 0) return h[N];
      if (h[`PDF ${N}`] !== void 0) return h[`PDF ${N}`];
    },
    Ne = ne.useMemo(
      () =>
        !e || e.length === 0
          ? []
          : k
            ? e.filter((h) => {
                const N = k.toLowerCase();
                if (S === 'all')
                  return [...Object.values(h.rowBL), ...Object.values(h.rowQAA)]
                    .map((T) => String(T).toLowerCase())
                    .some((T) => T.includes(N));
                {
                  const E = String(h.rowBL[S] || '').toLowerCase(),
                    T = String(h.rowQAA[S] || '').toLowerCase();
                  return E.includes(N) || T.includes(N);
                }
              })
            : e,
      [e, k, S]
    ),
    Ye = () => {
      Ep(t, u, f, l, n, d);
    },
    P = (h, N) =>
      h === 'Status'
        ? null
        : h === 'PDF Path' || h === 'Path'
          ? i.jsx(_p, { filePath: N })
          : h.includes('VAT') || h.includes('Net') || h.includes('Total')
            ? N
              ? wp(N)
              : '-'
            : N || '-',
    $ = (h) => {
      switch (n) {
        case 'alternating':
          return h.map((N, E) =>
            i.jsxs(
              ne.Fragment,
              {
                children: [
                  N !== 'PDF Path' &&
                    i.jsx('th', {
                      className: `px-1 md:px-2 py-2 md:py-3 text-left font-semibold text-[10px] md:text-xs border border-gray-200 ${
                        E === 0 ? 'border-l-4' : ''
                      }`,
                      style: {
                        color: y,
                        borderLeftColor: E === 0 ? x : void 0,
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
                            children: N,
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
                          children: f,
                        }),
                        i.jsx('span', {
                          className: 'truncate max-w-[80px] md:max-w-none',
                          children: N,
                        }),
                      ],
                    }),
                  }),
                ],
              },
              N
            )
          );
        case 'paired':
          return i.jsxs(i.Fragment, {
            children: [
              h
                .filter((N) => N !== 'PDF Path')
                .map((N, E) =>
                  i.jsx(
                    'th',
                    {
                      className: `px-2 py-3 text-left font-semibold text-xs border border-gray-200 ${
                        E === 0 ? 'border-l-4' : ''
                      }`,
                      style: {
                        color: y,
                        borderLeftColor: E === 0 ? x : void 0,
                      },
                      children: N,
                    },
                    `s1-${N}`
                  )
                ),
              h.map((N, E) =>
                i.jsx(
                  'th',
                  {
                    className: `px-2 py-3 text-left font-semibold text-xs border border-gray-200 ${
                      E === 0 ? 'border-l-4' : ''
                    }`,
                    style: { color: p, borderLeftColor: E === 0 ? v : void 0 },
                    children: N,
                  },
                  `s2-${N}`
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
              h.map((N) =>
                i.jsx(
                  'th',
                  {
                    className:
                      'px-2 py-3 text-left font-semibold text-xs text-gray-700 bg-gray-100 border border-gray-200',
                    children: N,
                  },
                  `s1-${N}`
                )
              ),
            ],
          });
        default:
          return null;
      }
    },
    M = (h, N) => {
      switch (n) {
        case 'alternating':
          return N.map((E, T) => {
            if (E === 'Status') return null;
            const I =
                !h.isIdentical && h.differences.some((Q) => Q.field === E),
              z = h.rowBL[E],
              R = h.rowQAA[E];
            return i.jsxs(
              ne.Fragment,
              {
                children: [
                  E !== 'PDF Path' &&
                    i.jsx('td', {
                      className: `px-1 md:px-2 py-1 md:py-2 text-[10px] md:text-xs border border-gray-200 ${
                        T === 0 ? 'border-l-4' : ''
                      } ${Yt(h, E)}`,
                      style: {
                        ...Xt(h, E, I),
                        borderLeftColor: T === 0 ? (I ? '#ef4444' : x) : void 0,
                      },
                      children:
                        E === 'PDF Path'
                          ? P(E, z)
                          : i.jsx('span', {
                              className:
                                'truncate block max-w-[100px] md:max-w-none',
                              children: P(E, z),
                            }),
                    }),
                  i.jsx('td', {
                    className: `px-1 md:px-2 py-1 md:py-2 text-[10px] md:text-xs border border-gray-200 border-r-[3px] border-r-black ${Yt(
                      h,
                      E
                    )}`,
                    style: Xt(h, E, I),
                    children:
                      E === 'PDF Path'
                        ? P(E, R)
                        : i.jsx('span', {
                            className:
                              'truncate block max-w-[100px] md:max-w-none',
                            children: P(E, R),
                          }),
                  }),
                ],
              },
              E
            );
          });
        case 'paired':
          return i.jsxs(i.Fragment, {
            children: [
              N.filter((E) => E !== 'PDF Path').map((E, T) => {
                if (E === 'Status') return null;
                const I =
                  !h.isIdentical && h.differences.some((z) => z.field === E);
                return i.jsx(
                  'td',
                  {
                    className: `px-2 py-2 text-xs border border-gray-200 ${
                      T === 0 ? 'border-l-4' : ''
                    } ${Yt(h, E)}`,
                    style: {
                      ...Xt(h, E, I),
                      borderLeftColor: T === 0 ? y : void 0,
                    },
                    children: P(E, h.rowBL[E]),
                  },
                  `s1-${E}`
                );
              }),
              N.map((E, T) => {
                if (E === 'Status') return null;
                const I =
                    !h.isIdentical && h.differences.some((R) => R.field === E),
                  z = E === 'PDF Path';
                return i.jsx(
                  'td',
                  {
                    className: `px-2 py-2 text-xs border border-gray-200 ${
                      T === 0 ? 'border-l-4' : ''
                    } ${Yt(h, E)} ${z ? 'overflow-visible' : ''}`,
                    style: {
                      ...Xt(h, E, I),
                      borderLeftColor: T === 0 ? p : void 0,
                    },
                    children: P(E, h.rowQAA[E]),
                  },
                  `s2-${E}`
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
              A &&
              (A.businessName || A.businessCode || A.taxNumber) &&
              i.jsxs('div', {
                className:
                  'flex items-center gap-3 md:gap-6 text-sm md:text-base',
                children: [
                  A.businessName &&
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
                          children: A.businessName,
                        }),
                      ],
                    }),
                  A.businessCode &&
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
                          children: A.businessCode,
                        }),
                      ],
                    }),
                  A.taxNumber &&
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
                          children: A.taxNumber,
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
                onChange: (h) => F(h.target.value),
                className:
                  'px-2 md:px-3 py-1.5 md:py-2 text-xs font-medium border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
                children: [
                  i.jsx('option', { value: 'all', children: 'All Columns' }),
                  W.map((h) => i.jsx('option', { value: h, children: h }, h)),
                ],
              }),
              i.jsx('input', {
                type: 'text',
                placeholder: 'Search...',
                value: k,
                onChange: (h) => _(h.target.value),
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
                      i.jsx(hp, { className: 'w-3 h-3' }),
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
                  i.jsx(_c, { className: 'w-3 h-3' }),
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
      Ne.length > 0
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
                      $(
                        n === 'separated'
                          ? ae(Ne[0])
                          : ie([
                              ...new Set([
                                ...Object.keys(Ne[0].rowBL),
                                ...Object.keys(Ne[0].rowQAA),
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
                  children: Ne.map((h) => {
                    const N = o === h.index,
                      E = Object.keys(h.rowBL),
                      T = Object.keys(h.rowQAA);
                    let I = [...new Set([...E, ...T])];
                    (I = ie(I)), I.push('Status');
                    let z = n === 'separated' ? ae(h) : I;
                    return (
                      n === 'separated' && z.push('Status'),
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
                            ne.Fragment,
                            {
                              children: [
                                i.jsxs('tr', {
                                  className:
                                    'hover:bg-gray-50 transition-colors',
                                  style: {
                                    backgroundColor: h.isIdentical ? w : j,
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
                                      style: { color: y },
                                      children: u,
                                    }),
                                    z
                                      .filter((R) => R !== 'Status')
                                      .map((R) => {
                                        const Q =
                                            !h.isIdentical &&
                                            h.differences.some(
                                              (bt) => bt.field === R
                                            ),
                                          je = le(h.rowBL, R);
                                        return R === 'Path'
                                          ? i.jsx(
                                              'td',
                                              {
                                                className:
                                                  'px-2 py-2 text-xs border border-gray-200 bg-gray-50',
                                                children: '-',
                                              },
                                              `s1-${R}`
                                            )
                                          : i.jsx(
                                              'td',
                                              {
                                                className: `px-2 py-2 text-xs whitespace-nowrap border border-gray-200 ${Yt(
                                                  h,
                                                  R
                                                )}`,
                                                style: Xt(h, R, Q),
                                                children: P(R, je),
                                              },
                                              `s1-${R}`
                                            );
                                      }),
                                    i.jsx(fa, {
                                      comparison: h,
                                      rowIndex: h.index,
                                      dismissedIssues: m,
                                      onDismissIssue: D,
                                      rowSpan: 2,
                                    }),
                                    i.jsx(pa, {
                                      rowIndex: h.index,
                                      notes: d,
                                      onNotesChange: O,
                                      rowSpan: 2,
                                    }),
                                    i.jsx('td', {
                                      className:
                                        'px-2 py-2 text-center border border-gray-200',
                                      rowSpan: 2,
                                      children:
                                        !h.isIdentical &&
                                        i.jsx('button', {
                                          onClick: () => a(N ? null : h.index),
                                          className:
                                            'p-1 hover:bg-black/10 rounded-full transition-colors',
                                          children: N
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
                                    N ? '' : 'border-b-[3px] border-black'
                                  }`,
                                  style: {
                                    backgroundColor: h.isIdentical ? w : j,
                                  },
                                  children: [
                                    i.jsx('td', {
                                      className:
                                        'px-2 py-2 text-xs font-bold border border-gray-200',
                                      style: { color: p },
                                      children: f,
                                    }),
                                    z
                                      .filter((R) => R !== 'Status')
                                      .map((R) => {
                                        const Q =
                                            !h.isIdentical &&
                                            h.differences.some(
                                              (bt) => bt.field === R
                                            ),
                                          je = le(h.rowQAA, R);
                                        return i.jsx(
                                          'td',
                                          {
                                            className: `px-2 py-2 text-xs whitespace-nowrap border border-gray-200 ${Yt(
                                              h,
                                              R
                                            )}`,
                                            style: Xt(h, R, Q),
                                            children: P(R, je),
                                          },
                                          `s2-${R}`
                                        );
                                      }),
                                  ],
                                }),
                                N &&
                                  !h.isIdentical &&
                                  i.jsx('tr', {
                                    className: 'border-b-[3px] border-black',
                                    children: i.jsx('td', {
                                      colSpan: z.length + 4,
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
                                                  (R, Q) =>
                                                    i.jsxs(
                                                      'div',
                                                      {
                                                        className:
                                                          'bg-white p-3 rounded-lg border border-red-100 shadow-sm text-xs',
                                                        children: [
                                                          i.jsx('div', {
                                                            className:
                                                              'font-bold text-gray-700 mb-2 pb-1 border-b border-gray-100',
                                                            children: R.field,
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
                                                                  R.valueBL ||
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
                                                                  R.valueQAA ||
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
                            ne.Fragment,
                            {
                              children: [
                                i.jsxs('tr', {
                                  className:
                                    'hover:bg-gray-50 transition-colors group',
                                  style: {
                                    backgroundColor: h.isIdentical ? w : j,
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
                                    M(h, I),
                                    i.jsx(fa, {
                                      comparison: h,
                                      rowIndex: h.index,
                                      dismissedIssues: m,
                                      onDismissIssue: D,
                                    }),
                                    i.jsx(pa, {
                                      rowIndex: h.index,
                                      notes: d,
                                      onNotesChange: O,
                                    }),
                                    i.jsx('td', {
                                      className:
                                        'px-1 md:px-2 py-2 md:py-3 text-center border border-gray-200',
                                      children:
                                        !h.isIdentical &&
                                        i.jsx('button', {
                                          onClick: () => a(N ? null : h.index),
                                          className:
                                            'p-0.5 md:p-1 hover:bg-black/10 rounded-full transition-colors text-gray-600',
                                          children: N
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
                                N &&
                                  !h.isIdentical &&
                                  i.jsx('tr', {
                                    children: i.jsx('td', {
                                      colSpan: I.length * 2 + 6,
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
                                                  (R, Q) =>
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
                                                            children: R.field,
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
                                                                  R.valueBL ||
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
                                                                  R.valueQAA ||
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
const Fp = () => {
    const [e, t] = B.useState(null),
      [n, r] = B.useState(null),
      [l, s] = B.useState(!1),
      [o, a] = B.useState(null),
      [u, f] = B.useState(null),
      [y, x] = B.useState('all'),
      [p, v] = B.useState('alternating'),
      [w, j] = B.useState(0),
      [A, m] = B.useState(16),
      [c, d] = B.useState(16),
      [g, k] = B.useState(29),
      [_, S] = B.useState(!1),
      [F, D] = B.useState('Excel Data'),
      [O, Y] = B.useState('PDF Data'),
      [W, ie] = B.useState('#eff6ff'),
      [ae, le] = B.useState('#1d4ed8'),
      [Ne, Ye] = B.useState('#f5f3ff'),
      [P, $] = B.useState('#6b21a8'),
      [M, h] = B.useState('#fef9c3'),
      [N, E] = B.useState('#fee2e2'),
      [T, I] = B.useState(''),
      [z, R] = B.useState(''),
      [Q, je] = B.useState(''),
      [bt, Dl] = B.useState('ยังไม่มีข้อมูล'),
      [Kt, Fc] = B.useState(!1),
      [Lc, Dc] = B.useState(null),
      [Tc, Ic] = B.useState(null),
      [zc, Rc] = B.useState(null),
      [Ac, Oc] = B.useState({
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
      setExpandedRow: f,
      filterMode: y,
      setFilterMode: x,
      displayMode: p,
      setDisplayMode: v,
      sectionBLStart: w,
      setSectionBLStart: j,
      sectionBLEnd: A,
      setSectionBLEnd: m,
      sectionQAAStart: c,
      setSectionQAAStart: d,
      sectionQAAEnd: g,
      setSectionQAAEnd: k,
      showSettings: _,
      setShowSettings: S,
      section1Name: F,
      setSection1Name: D,
      section2Name: O,
      setSection2Name: Y,
      s1BgColor: W,
      setS1BgColor: ie,
      s1TextColor: ae,
      setS1TextColor: le,
      s2BgColor: Ne,
      setS2BgColor: Ye,
      s2TextColor: P,
      setS2TextColor: $,
      matchedRowBgColor: M,
      setMatchedRowBgColor: h,
      mismatchedRowBgColor: N,
      setMismatchedRowBgColor: E,
      excelFolder: T,
      setExcelFolder: I,
      pdfFolder: z,
      setPdfFolder: R,
      outputCsvName: Q,
      setOutputCsvName: je,
      driveOutput: bt,
      setDriveOutput: Dl,
      driveLoading: Kt,
      setDriveLoading: Fc,
      driveError: Lc,
      setDriveError: Dc,
      selectedField: Tc,
      setSelectedField: Ic,
      activeCard: zc,
      setActiveCard: Rc,
      businessInfo: Ac,
      setBusinessInfo: Oc,
    };
  },
  ma = (e) => (e ? Object.values(e).every((t) => !t || t === '') : !0),
  Lp = (e, t, n, r) => {
    const l = [],
      s = [
        { csvIndex: 28, field: 'Doc Type', label: 'AC:invoice_status' },
        { csvIndex: 29, field: 'Tax ID', label: 'AD:buyer_vat_info_status' },
        {
          csvIndex: 30,
          field: 'Invoice No',
          label: 'AE:invoice_number_status',
        },
        { csvIndex: 31, field: 'Date', label: 'AF:date_raw_status' },
        { csvIndex: 32, field: 'Vendor Name', label: 'AG:vendor_name_status' },
        { csvIndex: 33, field: 'Tax ID', label: 'AH:vendor_vat_id_status' },
        {
          csvIndex: 34,
          field: 'Tax ID',
          label: 'AI:vendor_vat_id_info_status',
        },
        { csvIndex: 35, field: 'Branch', label: 'AJ:vendor_branch_status' },
        { csvIndex: 36, field: 'Net Amount', label: 'AK:net_amount_status' },
        { csvIndex: 37, field: 'VAT Amount', label: 'AL:vat_amount_status' },
        { csvIndex: 38, field: 'Grand Total', label: 'AM:grand_total_status' },
      ],
      o = new Set();
    s.forEach((y) => {
      e[y.csvIndex] === 'FALSE' &&
        (o.has(y.field) ||
          (l.push({
            field: y.field,
            valueBL: t[y.field] || '',
            valueQAA: n[y.field] || '',
            statusColumn: y.label,
          }),
          o.add(y.field)));
    });
    const a = ma(t),
      u = ma(n),
      f = a || u;
    return {
      index: r,
      rowBL: t,
      rowQAA: n,
      differences: l,
      isIdentical: l.length === 0 && !f,
      hasDataIssue: f,
      dataset1Empty: a,
      dataset2Empty: u,
    };
  },
  Dp = (e, t, n, r, l, s, o, a, u) => ({
    processCSVText: (y) => {
      try {
        const x = vp(y);
        if (!x || x.length === 0) throw new Error('ไม่พบข้อมูลในไฟล์');
        const p = x[0],
          v = p.indexOf('report_company_name'),
          w = p.indexOf('report_tax_form_id'),
          j = p.indexOf('source_id');
        if (x.length > 1 && u) {
          const d = x[1];
          u({
            businessName: d[v] || '',
            businessCode: d[w] || '',
            taxNumber: d[j] || '',
          });
        }
        const A = [
            'ID',
            'Invoice No',
            'Date',
            'Ref Doc',
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
          m = [
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
          c = [];
        for (let d = 1; d < x.length; d++) {
          const g = x[d];
          if (!g || g.length === 0) continue;
          const k = {},
            _ = Math.min(A.length, s - l);
          for (let W = 0; W < _; W++) {
            const ie = l + W;
            let ae = g[ie] || '';
            const le = A[W];
            (le === 'Net Amount' ||
              le === 'VAT Amount' ||
              le === 'Grand Total') &&
              (ae = to(ae)),
              (k[le] = ae);
          }
          const S = {},
            F = Math.min(m.length, a - o);
          for (let W = 0; W < F; W++) {
            const ie = o + W;
            let ae = g[ie] || '';
            const le = m[W];
            (le === 'PDF Net Amount' ||
              le === 'PDF VAT Amount' ||
              le === 'PDF Grand Total') &&
              (ae = to(ae)),
              (S[le] = ae);
          }
          const D = Object.values(k).some((W) => W !== ''),
            O = Object.values(S).some((W) => W !== '');
          if (!D && !O) continue;
          const Y = Lp(g, k, S, d - 1);
          (Y.csvRowNumber = d + 1), c.push(Y);
        }
        if (c.length === 0)
          throw new Error('ไม่พบข้อมูลที่ถูกต้องตามช่วงคอลัมน์ที่กำหนด');
        e(c), r('all');
      } catch (x) {
        t(x.message || 'เกิดข้อผิดพลาดในการประมวลผล'), e(null);
      } finally {
        n(!1);
      }
    },
  });
function Tp() {
  const e = Fp(),
    { processCSVText: t } = Dp(
      e.setComparison,
      e.setError,
      e.setLoading,
      e.setFilterMode,
      e.sectionBLStart,
      e.sectionBLEnd,
      e.sectionQAAStart,
      e.sectionQAAEnd,
      e.setBusinessInfo
    ),
    n = async (p) => {
      const v = p.target.files[0];
      if (!v) return;
      if (
        (e.setFile(v),
        e.setLoading(!0),
        e.setError(null),
        e.setComparison(null),
        v.name.split('.').pop().toLowerCase() !== 'csv')
      ) {
        e.setError('รองรับเฉพาะไฟล์ .csv'), e.setLoading(!1);
        return;
      }
      const j = await v.text();
      t(j);
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
            ? (p = p.filter((v) => v.hasDataIssue))
            : (p = p.filter(
                (v) =>
                  !v.isIdentical &&
                  v.differences.some((w) => w.field === e.selectedField)
              )),
          console.log('After field filter:', p.length);
      else if (e.activeCard === 'identical')
        (p = p.filter((v) => v.isIdentical)),
          console.log('After identical filter:', p.length);
      else if (e.activeCard === 'discrepancies')
        (p = p.filter((v) => !v.isIdentical)),
          console.log('After discrepancies filter:', p.length);
      else if (e.activeCard === 'total')
        console.log('Showing all records (total)');
      else
        switch (e.filterMode) {
          case 'identical':
            p = p.filter((v) => v.isIdentical);
            break;
          case 'different':
            p = p.filter((v) => !v.isIdentical);
            break;
        }
      return console.log('Final filtered count:', p.length), p;
    }, [e.comparison, e.filterMode, e.selectedField, e.activeCard]),
    o = e.comparison ? e.comparison.filter((p) => p.isIdentical).length : 0,
    a = e.comparison ? e.comparison.filter((p) => !p.isIdentical).length : 0,
    u = e.comparison ? e.comparison.length : 0,
    f = (p, v) => {
      if (!v || v.length === 0) return [];
      {
        const w = {};
        let j = 0;
        v.filter((m) => !m.isIdentical).forEach((m) => {
          m.differences.forEach((c) => {
            w[c.field] = (w[c.field] || 0) + 1;
          }),
            m.hasDataIssue && j++;
        });
        const A = Object.entries(w)
          .map(([m, c]) => ({ name: m, count: c }))
          .sort((m, c) => c.count - m.count);
        return j > 0 && A.unshift({ name: 'Dataset Missing', count: j }), A;
      }
    },
    y = (p) => {
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
        i.jsx(xp, {
          section1Name: e.section1Name,
          section2Name: e.section2Name,
          showSettings: e.showSettings,
          setShowSettings: e.setShowSettings,
        }),
        i.jsxs('div', {
          className:
            'max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-8 space-y-4 md:space-y-8',
          children: [
            i.jsx(kp, {
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
            i.jsx(Sp, {
              excelFolder: e.excelFolder,
              setExcelFolder: e.setExcelFolder,
              pdfFolder: e.pdfFolder,
              setPdfFolder: e.setPdfFolder,
              outputCsvName: e.outputCsvName,
              setOutputCsvName: e.setOutputCsvName,
              onStart: r,
            }),
            i.jsx(Np, {
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
                      children: i.jsx(Cp, {
                        totalCount: u,
                        identicalCount: o,
                        differentCount: a,
                        onCardClick: y,
                        activeCard: e.activeCard,
                        availableFields: f('discrepancies', e.comparison),
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
            children: i.jsx(Pp, {
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
  i.jsx(ne.StrictMode, { children: i.jsx(Tp, {}) })
);
