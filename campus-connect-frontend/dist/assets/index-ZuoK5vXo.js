function uv(n, o) {
  for (var s = 0; s < o.length; s++) {
    const a = o[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const u in a)
        if (u !== "default" && !(u in n)) {
          const d = Object.getOwnPropertyDescriptor(a, u);
          d &&
            Object.defineProperty(
              n,
              u,
              d.get ? d : { enumerable: !0, get: () => a[u] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const d of u)
      if (d.type === "childList")
        for (const p of d.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && a(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(u) {
    const d = {};
    return (
      u.integrity && (d.integrity = u.integrity),
      u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const d = s(u);
    fetch(u.href, d);
  }
})();
function mp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Il = { exports: {} },
  Go = {},
  zl = { exports: {} },
  we = {};
var hf;
function cv() {
  if (hf) return we;
  hf = 1;
  var n = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function b(P) {
    return P === null || typeof P != "object"
      ? null
      : ((P = (w && P[w]) || P["@@iterator"]),
        typeof P == "function" ? P : null);
  }
  var y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    C = {};
  function k(P, _, Y) {
    (this.props = P),
      (this.context = _),
      (this.refs = C),
      (this.updater = Y || y);
  }
  (k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (P, _) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, P, _, "setState");
    }),
    (k.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    });
  function A() {}
  A.prototype = k.prototype;
  function L(P, _, Y) {
    (this.props = P),
      (this.context = _),
      (this.refs = C),
      (this.updater = Y || y);
  }
  var D = (L.prototype = new A());
  (D.constructor = L), T(D, k.prototype), (D.isPureReactComponent = !0);
  var F = Array.isArray,
    V = Object.prototype.hasOwnProperty,
    K = { current: null },
    q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(P, _, Y) {
    var J,
      ue = {},
      ve = null,
      ie = null;
    if (_ != null)
      for (J in (_.ref !== void 0 && (ie = _.ref),
      _.key !== void 0 && (ve = "" + _.key),
      _))
        V.call(_, J) && !q.hasOwnProperty(J) && (ue[J] = _[J]);
    var Se = arguments.length - 2;
    if (Se === 1) ue.children = Y;
    else if (1 < Se) {
      for (var ke = Array(Se), He = 0; He < Se; He++)
        ke[He] = arguments[He + 2];
      ue.children = ke;
    }
    if (P && P.defaultProps)
      for (J in ((Se = P.defaultProps), Se))
        ue[J] === void 0 && (ue[J] = Se[J]);
    return {
      $$typeof: n,
      type: P,
      key: ve,
      ref: ie,
      props: ue,
      _owner: K.current,
    };
  }
  function ge(P, _) {
    return {
      $$typeof: n,
      type: P.type,
      key: _,
      ref: P.ref,
      props: P.props,
      _owner: P._owner,
    };
  }
  function pe(P) {
    return typeof P == "object" && P !== null && P.$$typeof === n;
  }
  function xe(P) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      P.replace(/[=:]/g, function (Y) {
        return _[Y];
      })
    );
  }
  var Z = /\/+/g;
  function he(P, _) {
    return typeof P == "object" && P !== null && P.key != null
      ? xe("" + P.key)
      : _.toString(36);
  }
  function G(P, _, Y, J, ue) {
    var ve = typeof P;
    (ve === "undefined" || ve === "boolean") && (P = null);
    var ie = !1;
    if (P === null) ie = !0;
    else
      switch (ve) {
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (P.$$typeof) {
            case n:
            case o:
              ie = !0;
          }
      }
    if (ie)
      return (
        (ie = P),
        (ue = ue(ie)),
        (P = J === "" ? "." + he(ie, 0) : J),
        F(ue)
          ? ((Y = ""),
            P != null && (Y = P.replace(Z, "$&/") + "/"),
            G(ue, _, Y, "", function (He) {
              return He;
            }))
          : ue != null &&
            (pe(ue) &&
              (ue = ge(
                ue,
                Y +
                  (!ue.key || (ie && ie.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(Z, "$&/") + "/") +
                  P
              )),
            _.push(ue)),
        1
      );
    if (((ie = 0), (J = J === "" ? "." : J + ":"), F(P)))
      for (var Se = 0; Se < P.length; Se++) {
        ve = P[Se];
        var ke = J + he(ve, Se);
        ie += G(ve, _, Y, ke, ue);
      }
    else if (((ke = b(P)), typeof ke == "function"))
      for (P = ke.call(P), Se = 0; !(ve = P.next()).done; )
        (ve = ve.value), (ke = J + he(ve, Se++)), (ie += G(ve, _, Y, ke, ue));
    else if (ve === "object")
      throw (
        ((_ = String(P)),
        Error(
          "Objects are not valid as a React child (found: " +
            (_ === "[object Object]"
              ? "object with keys {" + Object.keys(P).join(", ") + "}"
              : _) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ie;
  }
  function me(P, _, Y) {
    if (P == null) return P;
    var J = [],
      ue = 0;
    return (
      G(P, J, "", "", function (ve) {
        return _.call(Y, ve, ue++);
      }),
      J
    );
  }
  function se(P) {
    if (P._status === -1) {
      var _ = P._result;
      (_ = _()),
        _.then(
          function (Y) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 1), (P._result = Y));
          },
          function (Y) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 2), (P._result = Y));
          }
        ),
        P._status === -1 && ((P._status = 0), (P._result = _));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var re = { current: null },
    I = { transition: null },
    z = {
      ReactCurrentDispatcher: re,
      ReactCurrentBatchConfig: I,
      ReactCurrentOwner: K,
    };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (we.Children = {
      map: me,
      forEach: function (P, _, Y) {
        me(
          P,
          function () {
            _.apply(this, arguments);
          },
          Y
        );
      },
      count: function (P) {
        var _ = 0;
        return (
          me(P, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (P) {
        return (
          me(P, function (_) {
            return _;
          }) || []
        );
      },
      only: function (P) {
        if (!pe(P))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return P;
      },
    }),
    (we.Component = k),
    (we.Fragment = s),
    (we.Profiler = u),
    (we.PureComponent = L),
    (we.StrictMode = a),
    (we.Suspense = g),
    (we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
    (we.act = H),
    (we.cloneElement = function (P, _, Y) {
      if (P == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            P +
            "."
        );
      var J = T({}, P.props),
        ue = P.key,
        ve = P.ref,
        ie = P._owner;
      if (_ != null) {
        if (
          (_.ref !== void 0 && ((ve = _.ref), (ie = K.current)),
          _.key !== void 0 && (ue = "" + _.key),
          P.type && P.type.defaultProps)
        )
          var Se = P.type.defaultProps;
        for (ke in _)
          V.call(_, ke) &&
            !q.hasOwnProperty(ke) &&
            (J[ke] = _[ke] === void 0 && Se !== void 0 ? Se[ke] : _[ke]);
      }
      var ke = arguments.length - 2;
      if (ke === 1) J.children = Y;
      else if (1 < ke) {
        Se = Array(ke);
        for (var He = 0; He < ke; He++) Se[He] = arguments[He + 2];
        J.children = Se;
      }
      return {
        $$typeof: n,
        type: P.type,
        key: ue,
        ref: ve,
        props: J,
        _owner: ie,
      };
    }),
    (we.createContext = function (P) {
      return (
        (P = {
          $$typeof: p,
          _currentValue: P,
          _currentValue2: P,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (P.Provider = { $$typeof: d, _context: P }),
        (P.Consumer = P)
      );
    }),
    (we.createElement = ce),
    (we.createFactory = function (P) {
      var _ = ce.bind(null, P);
      return (_.type = P), _;
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (P) {
      return { $$typeof: h, render: P };
    }),
    (we.isValidElement = pe),
    (we.lazy = function (P) {
      return { $$typeof: x, _payload: { _status: -1, _result: P }, _init: se };
    }),
    (we.memo = function (P, _) {
      return { $$typeof: v, type: P, compare: _ === void 0 ? null : _ };
    }),
    (we.startTransition = function (P) {
      var _ = I.transition;
      I.transition = {};
      try {
        P();
      } finally {
        I.transition = _;
      }
    }),
    (we.unstable_act = H),
    (we.useCallback = function (P, _) {
      return re.current.useCallback(P, _);
    }),
    (we.useContext = function (P) {
      return re.current.useContext(P);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (P) {
      return re.current.useDeferredValue(P);
    }),
    (we.useEffect = function (P, _) {
      return re.current.useEffect(P, _);
    }),
    (we.useId = function () {
      return re.current.useId();
    }),
    (we.useImperativeHandle = function (P, _, Y) {
      return re.current.useImperativeHandle(P, _, Y);
    }),
    (we.useInsertionEffect = function (P, _) {
      return re.current.useInsertionEffect(P, _);
    }),
    (we.useLayoutEffect = function (P, _) {
      return re.current.useLayoutEffect(P, _);
    }),
    (we.useMemo = function (P, _) {
      return re.current.useMemo(P, _);
    }),
    (we.useReducer = function (P, _, Y) {
      return re.current.useReducer(P, _, Y);
    }),
    (we.useRef = function (P) {
      return re.current.useRef(P);
    }),
    (we.useState = function (P) {
      return re.current.useState(P);
    }),
    (we.useSyncExternalStore = function (P, _, Y) {
      return re.current.useSyncExternalStore(P, _, Y);
    }),
    (we.useTransition = function () {
      return re.current.useTransition();
    }),
    (we.version = "18.3.1"),
    we
  );
}
var mf;
function Vi() {
  return mf || ((mf = 1), (zl.exports = cv())), zl.exports;
}
var gf;
function dv() {
  if (gf) return Go;
  gf = 1;
  var n = Vi(),
    o = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, g, v) {
    var x,
      w = {},
      b = null,
      y = null;
    v !== void 0 && (b = "" + v),
      g.key !== void 0 && (b = "" + g.key),
      g.ref !== void 0 && (y = g.ref);
    for (x in g) a.call(g, x) && !d.hasOwnProperty(x) && (w[x] = g[x]);
    if (h && h.defaultProps)
      for (x in ((g = h.defaultProps), g)) w[x] === void 0 && (w[x] = g[x]);
    return {
      $$typeof: o,
      type: h,
      key: b,
      ref: y,
      props: w,
      _owner: u.current,
    };
  }
  return (Go.Fragment = s), (Go.jsx = p), (Go.jsxs = p), Go;
}
var vf;
function fv() {
  return vf || ((vf = 1), (Il.exports = dv())), Il.exports;
}
var f = fv(),
  bi = {},
  Fl = { exports: {} },
  yt = {},
  Ul = { exports: {} },
  Bl = {};
var yf;
function pv() {
  return (
    yf ||
      ((yf = 1),
      (function (n) {
        function o(I, z) {
          var H = I.length;
          I.push(z);
          e: for (; 0 < H; ) {
            var P = (H - 1) >>> 1,
              _ = I[P];
            if (0 < u(_, z)) (I[P] = z), (I[H] = _), (H = P);
            else break e;
          }
        }
        function s(I) {
          return I.length === 0 ? null : I[0];
        }
        function a(I) {
          if (I.length === 0) return null;
          var z = I[0],
            H = I.pop();
          if (H !== z) {
            I[0] = H;
            e: for (var P = 0, _ = I.length, Y = _ >>> 1; P < Y; ) {
              var J = 2 * (P + 1) - 1,
                ue = I[J],
                ve = J + 1,
                ie = I[ve];
              if (0 > u(ue, H))
                ve < _ && 0 > u(ie, ue)
                  ? ((I[P] = ie), (I[ve] = H), (P = ve))
                  : ((I[P] = ue), (I[J] = H), (P = J));
              else if (ve < _ && 0 > u(ie, H))
                (I[P] = ie), (I[ve] = H), (P = ve);
              else break e;
            }
          }
          return z;
        }
        function u(I, z) {
          var H = I.sortIndex - z.sortIndex;
          return H !== 0 ? H : I.id - z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var p = Date,
            h = p.now();
          n.unstable_now = function () {
            return p.now() - h;
          };
        }
        var g = [],
          v = [],
          x = 1,
          w = null,
          b = 3,
          y = !1,
          T = !1,
          C = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function D(I) {
          for (var z = s(v); z !== null; ) {
            if (z.callback === null) a(v);
            else if (z.startTime <= I)
              a(v), (z.sortIndex = z.expirationTime), o(g, z);
            else break;
            z = s(v);
          }
        }
        function F(I) {
          if (((C = !1), D(I), !T))
            if (s(g) !== null) (T = !0), se(V);
            else {
              var z = s(v);
              z !== null && re(F, z.startTime - I);
            }
        }
        function V(I, z) {
          (T = !1), C && ((C = !1), A(ce), (ce = -1)), (y = !0);
          var H = b;
          try {
            for (
              D(z), w = s(g);
              w !== null && (!(w.expirationTime > z) || (I && !xe()));

            ) {
              var P = w.callback;
              if (typeof P == "function") {
                (w.callback = null), (b = w.priorityLevel);
                var _ = P(w.expirationTime <= z);
                (z = n.unstable_now()),
                  typeof _ == "function"
                    ? (w.callback = _)
                    : w === s(g) && a(g),
                  D(z);
              } else a(g);
              w = s(g);
            }
            if (w !== null) var Y = !0;
            else {
              var J = s(v);
              J !== null && re(F, J.startTime - z), (Y = !1);
            }
            return Y;
          } finally {
            (w = null), (b = H), (y = !1);
          }
        }
        var K = !1,
          q = null,
          ce = -1,
          ge = 5,
          pe = -1;
        function xe() {
          return !(n.unstable_now() - pe < ge);
        }
        function Z() {
          if (q !== null) {
            var I = n.unstable_now();
            pe = I;
            var z = !0;
            try {
              z = q(!0, I);
            } finally {
              z ? he() : ((K = !1), (q = null));
            }
          } else K = !1;
        }
        var he;
        if (typeof L == "function")
          he = function () {
            L(Z);
          };
        else if (typeof MessageChannel < "u") {
          var G = new MessageChannel(),
            me = G.port2;
          (G.port1.onmessage = Z),
            (he = function () {
              me.postMessage(null);
            });
        } else
          he = function () {
            k(Z, 0);
          };
        function se(I) {
          (q = I), K || ((K = !0), he());
        }
        function re(I, z) {
          ce = k(function () {
            I(n.unstable_now());
          }, z);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (I) {
            I.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            T || y || ((T = !0), se(V));
          }),
          (n.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ge = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(g);
          }),
          (n.unstable_next = function (I) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var z = 3;
                break;
              default:
                z = b;
            }
            var H = b;
            b = z;
            try {
              return I();
            } finally {
              b = H;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (I, z) {
            switch (I) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                I = 3;
            }
            var H = b;
            b = I;
            try {
              return z();
            } finally {
              b = H;
            }
          }),
          (n.unstable_scheduleCallback = function (I, z, H) {
            var P = n.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? P + H : P))
                : (H = P),
              I)
            ) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return (
              (_ = H + _),
              (I = {
                id: x++,
                callback: z,
                priorityLevel: I,
                startTime: H,
                expirationTime: _,
                sortIndex: -1,
              }),
              H > P
                ? ((I.sortIndex = H),
                  o(v, I),
                  s(g) === null &&
                    I === s(v) &&
                    (C ? (A(ce), (ce = -1)) : (C = !0), re(F, H - P)))
                : ((I.sortIndex = _), o(g, I), T || y || ((T = !0), se(V))),
              I
            );
          }),
          (n.unstable_shouldYield = xe),
          (n.unstable_wrapCallback = function (I) {
            var z = b;
            return function () {
              var H = b;
              b = z;
              try {
                return I.apply(this, arguments);
              } finally {
                b = H;
              }
            };
          });
      })(Bl)),
    Bl
  );
}
var xf;
function hv() {
  return xf || ((xf = 1), (Ul.exports = pv())), Ul.exports;
}
var wf;
function mv() {
  if (wf) return yt;
  wf = 1;
  var n = Vi(),
    o = hv();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var a = new Set(),
    u = {};
  function d(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    g = Object.prototype.hasOwnProperty,
    v =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    x = {},
    w = {};
  function b(e) {
    return g.call(w, e)
      ? !0
      : g.call(x, e)
      ? !1
      : v.test(e)
      ? (w[e] = !0)
      : ((x[e] = !0), !1);
  }
  function y(e, t, r, i) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, r, i) {
    if (t === null || typeof t > "u" || y(e, t, r, i)) return !0;
    if (i) return !1;
    if (r !== null)
      switch (r.type) {
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
  function C(e, t, r, i, l, c, m) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = l),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = m);
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      k[e] = new C(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      k[t] = new C(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      k[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      k[e] = new C(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        k[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      k[e] = new C(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      k[e] = new C(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      k[e] = new C(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      k[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var A = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(A, L);
      k[t] = new C(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(A, L);
        k[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(A, L);
      k[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      k[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (k.xlinkHref = new C(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      k[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function D(e, t, r, i) {
    var l = k.hasOwnProperty(t) ? k[t] : null;
    (l !== null
      ? l.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, r, l, i) && (r = null),
      i || l === null
        ? b(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : l.mustUseProperty
        ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r)
        : ((t = l.attributeName),
          (i = l.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r),
              i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
  }
  var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    V = Symbol.for("react.element"),
    K = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    ce = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    pe = Symbol.for("react.provider"),
    xe = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    G = Symbol.for("react.suspense_list"),
    me = Symbol.for("react.memo"),
    se = Symbol.for("react.lazy"),
    re = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var H = Object.assign,
    P;
  function _(e) {
    if (P === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        P = (t && t[1]) || "";
      }
    return (
      `
` +
      P +
      e
    );
  }
  var Y = !1;
  function J(e, t) {
    if (!e || Y) return "";
    Y = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (M) {
            var i = M;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (M) {
            i = M;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (M) {
          i = M;
        }
        e();
      }
    } catch (M) {
      if (M && i && typeof M.stack == "string") {
        for (
          var l = M.stack.split(`
`),
            c = i.stack.split(`
`),
            m = l.length - 1,
            E = c.length - 1;
          1 <= m && 0 <= E && l[m] !== c[E];

        )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (l[m] !== c[E]) {
            if (m !== 1 || E !== 1)
              do
                if ((m--, E--, 0 > E || l[m] !== c[E])) {
                  var N =
                    `
` + l[m].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      (Y = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? _(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return _(e.type);
      case 16:
        return _("Lazy");
      case 13:
        return _("Suspense");
      case 19:
        return _("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = J(e.type, !1)), e;
      case 11:
        return (e = J(e.type.render, !1)), e;
      case 1:
        return (e = J(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case q:
        return "Fragment";
      case K:
        return "Portal";
      case ge:
        return "Profiler";
      case ce:
        return "StrictMode";
      case he:
        return "Suspense";
      case G:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case xe:
          return (e.displayName || "Context") + ".Consumer";
        case pe:
          return (e._context.displayName || "Context") + ".Provider";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case me:
          return (
            (t = e.displayName || null), t !== null ? t : ve(e.type) || "Memo"
          );
        case se:
          (t = e._payload), (e = e._init);
          try {
            return ve(e(t));
          } catch {}
      }
    return null;
  }
  function ie(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ve(t);
      case 8:
        return t === ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Se(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ke(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function He(e) {
    var t = ke(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var l = r.get,
        c = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (m) {
            (i = "" + m), c.call(this, m);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (m) {
            i = "" + m;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function bt(e) {
    e._valueTracker || (e._valueTracker = He(e));
  }
  function jn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      i = "";
    return (
      e && (i = ke(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function jt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ao(e, t) {
    var r = t.checked;
    return H({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function fs(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked;
    (r = Se(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function lo(e, t) {
    (t = t.checked), t != null && D(e, "checked", t, !1);
  }
  function uo(e, t) {
    lo(e, t);
    var r = Se(t.value),
      i = t.type;
    if (r != null)
      i === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? co(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && co(e, t.type, Se(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Er(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (
        !(
          (i !== "submit" && i !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function co(e, t, r) {
    (t !== "number" || jt(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Pn = Array.isArray;
  function Pt(e, t, r, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
      for (r = 0; r < e.length; r++)
        (l = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== l && (e[r].selected = l),
          l && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Se(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          (e[l].selected = !0), i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Cr(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return H({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Xt(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(s(92));
        if (Pn(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Se(r) };
  }
  function ps(e, t) {
    var r = Se(t.value),
      i = Se(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      i != null && (e.defaultValue = "" + i);
  }
  function hs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function it(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Zt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? it(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var kr,
    ms = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, i, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, i, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          kr = kr || document.createElement("div"),
            kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = kr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Jt(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var nr = {
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
    gs = ["Webkit", "ms", "Moz", "O"];
  Object.keys(nr).forEach(function (e) {
    gs.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nr[t] = nr[e]);
    });
  });
  function Nr(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (nr.hasOwnProperty(e) && nr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function pn(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var i = r.indexOf("--") === 0,
          l = Nr(r, t[r], i);
        r === "float" && (r = "cssFloat"), i ? e.setProperty(r, l) : (e[r] = l);
      }
  }
  var vs = H(
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
  function en(e, t) {
    if (t) {
      if (vs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function fo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var po = null;
  function br(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var jr = null,
    Tn = null,
    tn = null;
  function Dt(e) {
    if ((e = Ao(e))) {
      if (typeof jr != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Bs(t)), jr(e.stateNode, e.type, t));
    }
  }
  function ys(e) {
    Tn ? (tn ? tn.push(e) : (tn = [e])) : (Tn = e);
  }
  function fe() {
    if (Tn) {
      var e = Tn,
        t = tn;
      if (((tn = Tn = null), Dt(e), t)) for (e = 0; e < t.length; e++) Dt(t[e]);
    }
  }
  function be(e, t) {
    return e(t);
  }
  function Pe() {}
  var at = !1;
  function dt(e, t, r) {
    if (at) return e(t, r);
    at = !0;
    try {
      return be(e, t, r);
    } finally {
      (at = !1), (Tn !== null || tn !== null) && (Pe(), fe());
    }
  }
  function ft(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = Bs(r);
    if (i === null) return null;
    r = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(s(231, t, typeof r));
    return r;
  }
  var It = !1;
  if (h)
    try {
      var Je = {};
      Object.defineProperty(Je, "passive", {
        get: function () {
          It = !0;
        },
      }),
        window.addEventListener("test", Je, Je),
        window.removeEventListener("test", Je, Je);
    } catch {
      It = !1;
    }
  function nn(e, t, r, i, l, c, m, E, N) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, M);
    } catch (B) {
      this.onError(B);
    }
  }
  var ho = !1,
    xs = null,
    ws = !1,
    na = null,
    gm = {
      onError: function (e) {
        (ho = !0), (xs = e);
      },
    };
  function vm(e, t, r, i, l, c, m, E, N) {
    (ho = !1), (xs = null), nn.apply(gm, arguments);
  }
  function ym(e, t, r, i, l, c, m, E, N) {
    if ((vm.apply(this, arguments), ho)) {
      if (ho) {
        var M = xs;
        (ho = !1), (xs = null);
      } else throw Error(s(198));
      ws || ((ws = !0), (na = M));
    }
  }
  function rr(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Du(e) {
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
  function Iu(e) {
    if (rr(e) !== e) throw Error(s(188));
  }
  function xm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = rr(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var l = r.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (((i = l.return), i !== null)) {
          r = i;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c; ) {
          if (c === r) return Iu(l), e;
          if (c === i) return Iu(l), t;
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== i.return) (r = l), (i = c);
      else {
        for (var m = !1, E = l.child; E; ) {
          if (E === r) {
            (m = !0), (r = l), (i = c);
            break;
          }
          if (E === i) {
            (m = !0), (i = l), (r = c);
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = c.child; E; ) {
            if (E === r) {
              (m = !0), (r = c), (i = l);
              break;
            }
            if (E === i) {
              (m = !0), (i = c), (r = l);
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(s(189));
        }
      }
      if (r.alternate !== i) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function zu(e) {
    return (e = xm(e)), e !== null ? Fu(e) : null;
  }
  function Fu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Fu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Uu = o.unstable_scheduleCallback,
    Bu = o.unstable_cancelCallback,
    wm = o.unstable_shouldYield,
    Sm = o.unstable_requestPaint,
    Be = o.unstable_now,
    Em = o.unstable_getCurrentPriorityLevel,
    ra = o.unstable_ImmediatePriority,
    $u = o.unstable_UserBlockingPriority,
    Ss = o.unstable_NormalPriority,
    Cm = o.unstable_LowPriority,
    Hu = o.unstable_IdlePriority,
    Es = null,
    rn = null;
  function km(e) {
    if (rn && typeof rn.onCommitFiberRoot == "function")
      try {
        rn.onCommitFiberRoot(Es, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var zt = Math.clz32 ? Math.clz32 : jm,
    Nm = Math.log,
    bm = Math.LN2;
  function jm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Nm(e) / bm) | 0)) | 0;
  }
  var Cs = 64,
    ks = 4194304;
  function mo(e) {
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
  function Ns(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0,
      l = e.suspendedLanes,
      c = e.pingedLanes,
      m = r & 268435455;
    if (m !== 0) {
      var E = m & ~l;
      E !== 0 ? (i = mo(E)) : ((c &= m), c !== 0 && (i = mo(c)));
    } else (m = r & ~l), m !== 0 ? (i = mo(m)) : c !== 0 && (i = mo(c));
    if (i === 0) return 0;
    if (
      t !== 0 &&
      t !== i &&
      (t & l) === 0 &&
      ((l = i & -i), (c = t & -t), l >= c || (l === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((i & 4) !== 0 && (i |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        (r = 31 - zt(t)), (l = 1 << r), (i |= e[r]), (t &= ~l);
    return i;
  }
  function Pm(e, t) {
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
  function Tm(e, t) {
    for (
      var r = e.suspendedLanes,
        i = e.pingedLanes,
        l = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var m = 31 - zt(c),
        E = 1 << m,
        N = l[m];
      N === -1
        ? ((E & r) === 0 || (E & i) !== 0) && (l[m] = Pm(E, t))
        : N <= t && (e.expiredLanes |= E),
        (c &= ~E);
    }
  }
  function oa(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Vu() {
    var e = Cs;
    return (Cs <<= 1), (Cs & 4194240) === 0 && (Cs = 64), e;
  }
  function sa(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function go(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - zt(t)),
      (e[t] = r);
  }
  function Rm(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var l = 31 - zt(r),
        c = 1 << l;
      (t[l] = 0), (i[l] = -1), (e[l] = -1), (r &= ~c);
    }
  }
  function ia(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var i = 31 - zt(r),
        l = 1 << i;
      (l & t) | (e[i] & t) && (e[i] |= t), (r &= ~l);
    }
  }
  var je = 0;
  function Wu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Qu,
    aa,
    Ku,
    Gu,
    qu,
    la = !1,
    bs = [],
    Rn = null,
    On = null,
    Mn = null,
    vo = new Map(),
    yo = new Map(),
    An = [],
    Om =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Yu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rn = null;
        break;
      case "dragenter":
      case "dragleave":
        On = null;
        break;
      case "mouseover":
      case "mouseout":
        Mn = null;
        break;
      case "pointerover":
      case "pointerout":
        vo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yo.delete(t.pointerId);
    }
  }
  function xo(e, t, r, i, l, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [l],
        }),
        t !== null && ((t = Ao(t)), t !== null && aa(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Mm(e, t, r, i, l) {
    switch (t) {
      case "focusin":
        return (Rn = xo(Rn, e, t, r, i, l)), !0;
      case "dragenter":
        return (On = xo(On, e, t, r, i, l)), !0;
      case "mouseover":
        return (Mn = xo(Mn, e, t, r, i, l)), !0;
      case "pointerover":
        var c = l.pointerId;
        return vo.set(c, xo(vo.get(c) || null, e, t, r, i, l)), !0;
      case "gotpointercapture":
        return (
          (c = l.pointerId), yo.set(c, xo(yo.get(c) || null, e, t, r, i, l)), !0
        );
    }
    return !1;
  }
  function Xu(e) {
    var t = or(e.target);
    if (t !== null) {
      var r = rr(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Du(r)), t !== null)) {
            (e.blockedOn = t),
              qu(e.priority, function () {
                Ku(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function js(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        (po = i), r.target.dispatchEvent(i), (po = null);
      } else return (t = Ao(r)), t !== null && aa(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Zu(e, t, r) {
    js(e) && r.delete(t);
  }
  function Am() {
    (la = !1),
      Rn !== null && js(Rn) && (Rn = null),
      On !== null && js(On) && (On = null),
      Mn !== null && js(Mn) && (Mn = null),
      vo.forEach(Zu),
      yo.forEach(Zu);
  }
  function wo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      la ||
        ((la = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, Am)));
  }
  function So(e) {
    function t(l) {
      return wo(l, e);
    }
    if (0 < bs.length) {
      wo(bs[0], e);
      for (var r = 1; r < bs.length; r++) {
        var i = bs[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (
      Rn !== null && wo(Rn, e),
        On !== null && wo(On, e),
        Mn !== null && wo(Mn, e),
        vo.forEach(t),
        yo.forEach(t),
        r = 0;
      r < An.length;
      r++
    )
      (i = An[r]), i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < An.length && ((r = An[0]), r.blockedOn === null); )
      Xu(r), r.blockedOn === null && An.shift();
  }
  var Pr = F.ReactCurrentBatchConfig,
    Ps = !0;
  function _m(e, t, r, i) {
    var l = je,
      c = Pr.transition;
    Pr.transition = null;
    try {
      (je = 1), ua(e, t, r, i);
    } finally {
      (je = l), (Pr.transition = c);
    }
  }
  function Lm(e, t, r, i) {
    var l = je,
      c = Pr.transition;
    Pr.transition = null;
    try {
      (je = 4), ua(e, t, r, i);
    } finally {
      (je = l), (Pr.transition = c);
    }
  }
  function ua(e, t, r, i) {
    if (Ps) {
      var l = ca(e, t, r, i);
      if (l === null) ja(e, t, i, Ts, r), Yu(e, i);
      else if (Mm(l, e, t, r, i)) i.stopPropagation();
      else if ((Yu(e, i), t & 4 && -1 < Om.indexOf(e))) {
        for (; l !== null; ) {
          var c = Ao(l);
          if (
            (c !== null && Qu(c),
            (c = ca(e, t, r, i)),
            c === null && ja(e, t, i, Ts, r),
            c === l)
          )
            break;
          l = c;
        }
        l !== null && i.stopPropagation();
      } else ja(e, t, i, null, r);
    }
  }
  var Ts = null;
  function ca(e, t, r, i) {
    if (((Ts = null), (e = br(i)), (e = or(e)), e !== null))
      if (((t = rr(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Du(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ts = e), null;
  }
  function Ju(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Em()) {
          case ra:
            return 1;
          case $u:
            return 4;
          case Ss:
          case Cm:
            return 16;
          case Hu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var _n = null,
    da = null,
    Rs = null;
  function ec() {
    if (Rs) return Rs;
    var e,
      t = da,
      r = t.length,
      i,
      l = "value" in _n ? _n.value : _n.textContent,
      c = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++);
    var m = r - e;
    for (i = 1; i <= m && t[r - i] === l[c - i]; i++);
    return (Rs = l.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Os(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ms() {
    return !0;
  }
  function tc() {
    return !1;
  }
  function wt(e) {
    function t(r, i, l, c, m) {
      (this._reactName = r),
        (this._targetInst = l),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = m),
        (this.currentTarget = null);
      for (var E in e)
        e.hasOwnProperty(E) && ((r = e[E]), (this[E] = r ? r(c) : c[E]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Ms
          : tc),
        (this.isPropagationStopped = tc),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Ms));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ms));
        },
        persist: function () {},
        isPersistent: Ms,
      }),
      t
    );
  }
  var Tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    fa = wt(Tr),
    Eo = H({}, Tr, { view: 0, detail: 0 }),
    Dm = wt(Eo),
    pa,
    ha,
    Co,
    As = H({}, Eo, {
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
      getModifierState: ga,
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
        return "movementX" in e
          ? e.movementX
          : (e !== Co &&
              (Co && e.type === "mousemove"
                ? ((pa = e.screenX - Co.screenX), (ha = e.screenY - Co.screenY))
                : (ha = pa = 0),
              (Co = e)),
            pa);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ha;
      },
    }),
    nc = wt(As),
    Im = H({}, As, { dataTransfer: 0 }),
    zm = wt(Im),
    Fm = H({}, Eo, { relatedTarget: 0 }),
    ma = wt(Fm),
    Um = H({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bm = wt(Um),
    $m = H({}, Tr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hm = wt($m),
    Vm = H({}, Tr, { data: 0 }),
    rc = wt(Vm),
    Wm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Qm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Km = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Gm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Km[e])
      ? !!t[e]
      : !1;
  }
  function ga() {
    return Gm;
  }
  var qm = H({}, Eo, {
      key: function (e) {
        if (e.key) {
          var t = Wm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Os(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Qm[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ga,
      charCode: function (e) {
        return e.type === "keypress" ? Os(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Os(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Ym = wt(qm),
    Xm = H({}, As, {
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
    oc = wt(Xm),
    Zm = H({}, Eo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ga,
    }),
    Jm = wt(Zm),
    eg = H({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tg = wt(eg),
    ng = H({}, As, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    rg = wt(ng),
    og = [9, 13, 27, 32],
    va = h && "CompositionEvent" in window,
    ko = null;
  h && "documentMode" in document && (ko = document.documentMode);
  var sg = h && "TextEvent" in window && !ko,
    sc = h && (!va || (ko && 8 < ko && 11 >= ko)),
    ic = " ",
    ac = !1;
  function lc(e, t) {
    switch (e) {
      case "keyup":
        return og.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function uc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Rr = !1;
  function ig(e, t) {
    switch (e) {
      case "compositionend":
        return uc(t);
      case "keypress":
        return t.which !== 32 ? null : ((ac = !0), ic);
      case "textInput":
        return (e = t.data), e === ic && ac ? null : e;
      default:
        return null;
    }
  }
  function ag(e, t) {
    if (Rr)
      return e === "compositionend" || (!va && lc(e, t))
        ? ((e = ec()), (Rs = da = _n = null), (Rr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return sc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
  function cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lg[e.type] : t === "textarea";
  }
  function dc(e, t, r, i) {
    ys(i),
      (t = zs(t, "onChange")),
      0 < t.length &&
        ((r = new fa("onChange", "change", null, r, i)),
        e.push({ event: r, listeners: t }));
  }
  var No = null,
    bo = null;
  function ug(e) {
    Tc(e, 0);
  }
  function _s(e) {
    var t = Lr(e);
    if (jn(t)) return e;
  }
  function cg(e, t) {
    if (e === "change") return t;
  }
  var fc = !1;
  if (h) {
    var ya;
    if (h) {
      var xa = "oninput" in document;
      if (!xa) {
        var pc = document.createElement("div");
        pc.setAttribute("oninput", "return;"),
          (xa = typeof pc.oninput == "function");
      }
      ya = xa;
    } else ya = !1;
    fc = ya && (!document.documentMode || 9 < document.documentMode);
  }
  function hc() {
    No && (No.detachEvent("onpropertychange", mc), (bo = No = null));
  }
  function mc(e) {
    if (e.propertyName === "value" && _s(bo)) {
      var t = [];
      dc(t, bo, e, br(e)), dt(ug, t);
    }
  }
  function dg(e, t, r) {
    e === "focusin"
      ? (hc(), (No = t), (bo = r), No.attachEvent("onpropertychange", mc))
      : e === "focusout" && hc();
  }
  function fg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return _s(bo);
  }
  function pg(e, t) {
    if (e === "click") return _s(t);
  }
  function hg(e, t) {
    if (e === "input" || e === "change") return _s(t);
  }
  function mg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ft = typeof Object.is == "function" ? Object.is : mg;
  function jo(e, t) {
    if (Ft(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var l = r[i];
      if (!g.call(t, l) || !Ft(e[l], t[l])) return !1;
    }
    return !0;
  }
  function gc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function vc(e, t) {
    var r = gc(e);
    e = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (((i = e + r.textContent.length), e <= t && i >= t))
          return { node: r, offset: t - e };
        e = i;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = gc(r);
    }
  }
  function yc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? yc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function xc() {
    for (var e = window, t = jt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = jt(e.document);
    }
    return t;
  }
  function wa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function gg(e) {
    var t = xc(),
      r = e.focusedElem,
      i = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      yc(r.ownerDocument.documentElement, r)
    ) {
      if (i !== null && wa(r)) {
        if (
          ((t = i.start),
          (e = i.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = r.textContent.length,
            c = Math.min(i.start, l);
          (i = i.end === void 0 ? c : Math.min(i.end, l)),
            !e.extend && c > i && ((l = i), (i = c), (c = l)),
            (l = vc(r, c));
          var m = vc(r, i);
          l &&
            m &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== m.node ||
              e.focusOffset !== m.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            c > i
              ? (e.addRange(t), e.extend(m.node, m.offset))
              : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var vg = h && "documentMode" in document && 11 >= document.documentMode,
    Or = null,
    Sa = null,
    Po = null,
    Ea = !1;
  function wc(e, t, r) {
    var i =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Ea ||
      Or == null ||
      Or !== jt(i) ||
      ((i = Or),
      "selectionStart" in i && wa(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Po && jo(Po, i)) ||
        ((Po = i),
        (i = zs(Sa, "onSelect")),
        0 < i.length &&
          ((t = new fa("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: i }),
          (t.target = Or))));
  }
  function Ls(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Mr = {
      animationend: Ls("Animation", "AnimationEnd"),
      animationiteration: Ls("Animation", "AnimationIteration"),
      animationstart: Ls("Animation", "AnimationStart"),
      transitionend: Ls("Transition", "TransitionEnd"),
    },
    Ca = {},
    Sc = {};
  h &&
    ((Sc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Mr.animationend.animation,
      delete Mr.animationiteration.animation,
      delete Mr.animationstart.animation),
    "TransitionEvent" in window || delete Mr.transitionend.transition);
  function Ds(e) {
    if (Ca[e]) return Ca[e];
    if (!Mr[e]) return e;
    var t = Mr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Sc) return (Ca[e] = t[r]);
    return e;
  }
  var Ec = Ds("animationend"),
    Cc = Ds("animationiteration"),
    kc = Ds("animationstart"),
    Nc = Ds("transitionend"),
    bc = new Map(),
    jc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ln(e, t) {
    bc.set(e, t), d(t, [e]);
  }
  for (var ka = 0; ka < jc.length; ka++) {
    var Na = jc[ka],
      yg = Na.toLowerCase(),
      xg = Na[0].toUpperCase() + Na.slice(1);
    Ln(yg, "on" + xg);
  }
  Ln(Ec, "onAnimationEnd"),
    Ln(Cc, "onAnimationIteration"),
    Ln(kc, "onAnimationStart"),
    Ln("dblclick", "onDoubleClick"),
    Ln("focusin", "onFocus"),
    Ln("focusout", "onBlur"),
    Ln(Nc, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var To =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    wg = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(To)
    );
  function Pc(e, t, r) {
    var i = e.type || "unknown-event";
    (e.currentTarget = r), ym(i, t, void 0, e), (e.currentTarget = null);
  }
  function Tc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r],
        l = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var m = i.length - 1; 0 <= m; m--) {
            var E = i[m],
              N = E.instance,
              M = E.currentTarget;
            if (((E = E.listener), N !== c && l.isPropagationStopped()))
              break e;
            Pc(l, E, M), (c = N);
          }
        else
          for (m = 0; m < i.length; m++) {
            if (
              ((E = i[m]),
              (N = E.instance),
              (M = E.currentTarget),
              (E = E.listener),
              N !== c && l.isPropagationStopped())
            )
              break e;
            Pc(l, E, M), (c = N);
          }
      }
    }
    if (ws) throw ((e = na), (ws = !1), (na = null), e);
  }
  function Me(e, t) {
    var r = t[Aa];
    r === void 0 && (r = t[Aa] = new Set());
    var i = e + "__bubble";
    r.has(i) || (Rc(t, e, 2, !1), r.add(i));
  }
  function ba(e, t, r) {
    var i = 0;
    t && (i |= 4), Rc(r, e, i, t);
  }
  var Is = "_reactListening" + Math.random().toString(36).slice(2);
  function Ro(e) {
    if (!e[Is]) {
      (e[Is] = !0),
        a.forEach(function (r) {
          r !== "selectionchange" && (wg.has(r) || ba(r, !1, e), ba(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Is] || ((t[Is] = !0), ba("selectionchange", !1, t));
    }
  }
  function Rc(e, t, r, i) {
    switch (Ju(t)) {
      case 1:
        var l = _m;
        break;
      case 4:
        l = Lm;
        break;
      default:
        l = ua;
    }
    (r = l.bind(null, t, r, e)),
      (l = void 0),
      !It ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      i
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
        ? e.addEventListener(t, r, { passive: l })
        : e.addEventListener(t, r, !1);
  }
  function ja(e, t, r, i, l) {
    var c = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var E = i.stateNode.containerInfo;
          if (E === l || (E.nodeType === 8 && E.parentNode === l)) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var N = m.tag;
              if (
                (N === 3 || N === 4) &&
                ((N = m.stateNode.containerInfo),
                N === l || (N.nodeType === 8 && N.parentNode === l))
              )
                return;
              m = m.return;
            }
          for (; E !== null; ) {
            if (((m = or(E)), m === null)) return;
            if (((N = m.tag), N === 5 || N === 6)) {
              i = c = m;
              continue e;
            }
            E = E.parentNode;
          }
        }
        i = i.return;
      }
    dt(function () {
      var M = c,
        B = br(r),
        $ = [];
      e: {
        var U = bc.get(e);
        if (U !== void 0) {
          var X = fa,
            te = e;
          switch (e) {
            case "keypress":
              if (Os(r) === 0) break e;
            case "keydown":
            case "keyup":
              X = Ym;
              break;
            case "focusin":
              (te = "focus"), (X = ma);
              break;
            case "focusout":
              (te = "blur"), (X = ma);
              break;
            case "beforeblur":
            case "afterblur":
              X = ma;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = nc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = zm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = Jm;
              break;
            case Ec:
            case Cc:
            case kc:
              X = Bm;
              break;
            case Nc:
              X = tg;
              break;
            case "scroll":
              X = Dm;
              break;
            case "wheel":
              X = rg;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = Hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = oc;
          }
          var ne = (t & 4) !== 0,
            $e = !ne && e === "scroll",
            R = ne ? (U !== null ? U + "Capture" : null) : U;
          ne = [];
          for (var j = M, O; j !== null; ) {
            O = j;
            var W = O.stateNode;
            if (
              (O.tag === 5 &&
                W !== null &&
                ((O = W),
                R !== null &&
                  ((W = ft(j, R)), W != null && ne.push(Oo(j, W, O)))),
              $e)
            )
              break;
            j = j.return;
          }
          0 < ne.length &&
            ((U = new X(U, te, null, r, B)),
            $.push({ event: U, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((U = e === "mouseover" || e === "pointerover"),
            (X = e === "mouseout" || e === "pointerout"),
            U &&
              r !== po &&
              (te = r.relatedTarget || r.fromElement) &&
              (or(te) || te[hn]))
          )
            break e;
          if (
            (X || U) &&
            ((U =
              B.window === B
                ? B
                : (U = B.ownerDocument)
                ? U.defaultView || U.parentWindow
                : window),
            X
              ? ((te = r.relatedTarget || r.toElement),
                (X = M),
                (te = te ? or(te) : null),
                te !== null &&
                  (($e = rr(te)),
                  te !== $e || (te.tag !== 5 && te.tag !== 6)) &&
                  (te = null))
              : ((X = null), (te = M)),
            X !== te)
          ) {
            if (
              ((ne = nc),
              (W = "onMouseLeave"),
              (R = "onMouseEnter"),
              (j = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ne = oc),
                (W = "onPointerLeave"),
                (R = "onPointerEnter"),
                (j = "pointer")),
              ($e = X == null ? U : Lr(X)),
              (O = te == null ? U : Lr(te)),
              (U = new ne(W, j + "leave", X, r, B)),
              (U.target = $e),
              (U.relatedTarget = O),
              (W = null),
              or(B) === M &&
                ((ne = new ne(R, j + "enter", te, r, B)),
                (ne.target = O),
                (ne.relatedTarget = $e),
                (W = ne)),
              ($e = W),
              X && te)
            )
              t: {
                for (ne = X, R = te, j = 0, O = ne; O; O = Ar(O)) j++;
                for (O = 0, W = R; W; W = Ar(W)) O++;
                for (; 0 < j - O; ) (ne = Ar(ne)), j--;
                for (; 0 < O - j; ) (R = Ar(R)), O--;
                for (; j--; ) {
                  if (ne === R || (R !== null && ne === R.alternate)) break t;
                  (ne = Ar(ne)), (R = Ar(R));
                }
                ne = null;
              }
            else ne = null;
            X !== null && Oc($, U, X, ne, !1),
              te !== null && $e !== null && Oc($, $e, te, ne, !0);
          }
        }
        e: {
          if (
            ((U = M ? Lr(M) : window),
            (X = U.nodeName && U.nodeName.toLowerCase()),
            X === "select" || (X === "input" && U.type === "file"))
          )
            var oe = cg;
          else if (cc(U))
            if (fc) oe = hg;
            else {
              oe = fg;
              var ae = dg;
            }
          else
            (X = U.nodeName) &&
              X.toLowerCase() === "input" &&
              (U.type === "checkbox" || U.type === "radio") &&
              (oe = pg);
          if (oe && (oe = oe(e, M))) {
            dc($, oe, r, B);
            break e;
          }
          ae && ae(e, U, M),
            e === "focusout" &&
              (ae = U._wrapperState) &&
              ae.controlled &&
              U.type === "number" &&
              co(U, "number", U.value);
        }
        switch (((ae = M ? Lr(M) : window), e)) {
          case "focusin":
            (cc(ae) || ae.contentEditable === "true") &&
              ((Or = ae), (Sa = M), (Po = null));
            break;
          case "focusout":
            Po = Sa = Or = null;
            break;
          case "mousedown":
            Ea = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ea = !1), wc($, r, B);
            break;
          case "selectionchange":
            if (vg) break;
          case "keydown":
          case "keyup":
            wc($, r, B);
        }
        var le;
        if (va)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          Rr
            ? lc(e, r) && (de = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (de = "onCompositionStart");
        de &&
          (sc &&
            r.locale !== "ko" &&
            (Rr || de !== "onCompositionStart"
              ? de === "onCompositionEnd" && Rr && (le = ec())
              : ((_n = B),
                (da = "value" in _n ? _n.value : _n.textContent),
                (Rr = !0))),
          (ae = zs(M, de)),
          0 < ae.length &&
            ((de = new rc(de, e, null, r, B)),
            $.push({ event: de, listeners: ae }),
            le
              ? (de.data = le)
              : ((le = uc(r)), le !== null && (de.data = le)))),
          (le = sg ? ig(e, r) : ag(e, r)) &&
            ((M = zs(M, "onBeforeInput")),
            0 < M.length &&
              ((B = new rc("onBeforeInput", "beforeinput", null, r, B)),
              $.push({ event: B, listeners: M }),
              (B.data = le)));
      }
      Tc($, t);
    });
  }
  function Oo(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function zs(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var l = e,
        c = l.stateNode;
      l.tag === 5 &&
        c !== null &&
        ((l = c),
        (c = ft(e, r)),
        c != null && i.unshift(Oo(e, c, l)),
        (c = ft(e, t)),
        c != null && i.push(Oo(e, c, l))),
        (e = e.return);
    }
    return i;
  }
  function Ar(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Oc(e, t, r, i, l) {
    for (var c = t._reactName, m = []; r !== null && r !== i; ) {
      var E = r,
        N = E.alternate,
        M = E.stateNode;
      if (N !== null && N === i) break;
      E.tag === 5 &&
        M !== null &&
        ((E = M),
        l
          ? ((N = ft(r, c)), N != null && m.unshift(Oo(r, N, E)))
          : l || ((N = ft(r, c)), N != null && m.push(Oo(r, N, E)))),
        (r = r.return);
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Sg = /\r\n?/g,
    Eg = /\u0000|\uFFFD/g;
  function Mc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Sg,
        `
`
      )
      .replace(Eg, "");
  }
  function Fs(e, t, r) {
    if (((t = Mc(t)), Mc(e) !== t && r)) throw Error(s(425));
  }
  function Us() {}
  var Pa = null,
    Ta = null;
  function Ra(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Oa = typeof setTimeout == "function" ? setTimeout : void 0,
    Cg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ac = typeof Promise == "function" ? Promise : void 0,
    kg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ac < "u"
        ? function (e) {
            return Ac.resolve(null).then(e).catch(Ng);
          }
        : Oa;
  function Ng(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ma(e, t) {
    var r = t,
      i = 0;
    do {
      var l = r.nextSibling;
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === "/$")) {
          if (i === 0) {
            e.removeChild(l), So(t);
            return;
          }
          i--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || i++;
      r = l;
    } while (r);
    So(t);
  }
  function Dn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function _c(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var _r = Math.random().toString(36).slice(2),
    on = "__reactFiber$" + _r,
    Mo = "__reactProps$" + _r,
    hn = "__reactContainer$" + _r,
    Aa = "__reactEvents$" + _r,
    bg = "__reactListeners$" + _r,
    jg = "__reactHandles$" + _r;
  function or(e) {
    var t = e[on];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[hn] || r[on])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = _c(e); e !== null; ) {
            if ((r = e[on])) return r;
            e = _c(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Ao(e) {
    return (
      (e = e[on] || e[hn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Bs(e) {
    return e[Mo] || null;
  }
  var _a = [],
    Dr = -1;
  function In(e) {
    return { current: e };
  }
  function Ae(e) {
    0 > Dr || ((e.current = _a[Dr]), (_a[Dr] = null), Dr--);
  }
  function Oe(e, t) {
    Dr++, (_a[Dr] = e.current), (e.current = t);
  }
  var zn = {},
    nt = In(zn),
    pt = In(!1),
    sr = zn;
  function Ir(e, t) {
    var r = e.type.contextTypes;
    if (!r) return zn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      c;
    for (c in r) l[c] = t[c];
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function ht(e) {
    return (e = e.childContextTypes), e != null;
  }
  function $s() {
    Ae(pt), Ae(nt);
  }
  function Lc(e, t, r) {
    if (nt.current !== zn) throw Error(s(168));
    Oe(nt, t), Oe(pt, r);
  }
  function Dc(e, t, r) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return r;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(s(108, ie(e) || "Unknown", l));
    return H({}, r, i);
  }
  function Hs(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        zn),
      (sr = nt.current),
      Oe(nt, e),
      Oe(pt, pt.current),
      !0
    );
  }
  function Ic(e, t, r) {
    var i = e.stateNode;
    if (!i) throw Error(s(169));
    r
      ? ((e = Dc(e, t, sr)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        Ae(pt),
        Ae(nt),
        Oe(nt, e))
      : Ae(pt),
      Oe(pt, r);
  }
  var mn = null,
    Vs = !1,
    La = !1;
  function zc(e) {
    mn === null ? (mn = [e]) : mn.push(e);
  }
  function Pg(e) {
    (Vs = !0), zc(e);
  }
  function Fn() {
    if (!La && mn !== null) {
      La = !0;
      var e = 0,
        t = je;
      try {
        var r = mn;
        for (je = 1; e < r.length; e++) {
          var i = r[e];
          do i = i(!0);
          while (i !== null);
        }
        (mn = null), (Vs = !1);
      } catch (l) {
        throw (mn !== null && (mn = mn.slice(e + 1)), Uu(ra, Fn), l);
      } finally {
        (je = t), (La = !1);
      }
    }
    return null;
  }
  var zr = [],
    Fr = 0,
    Ws = null,
    Qs = 0,
    Tt = [],
    Rt = 0,
    ir = null,
    gn = 1,
    vn = "";
  function ar(e, t) {
    (zr[Fr++] = Qs), (zr[Fr++] = Ws), (Ws = e), (Qs = t);
  }
  function Fc(e, t, r) {
    (Tt[Rt++] = gn), (Tt[Rt++] = vn), (Tt[Rt++] = ir), (ir = e);
    var i = gn;
    e = vn;
    var l = 32 - zt(i) - 1;
    (i &= ~(1 << l)), (r += 1);
    var c = 32 - zt(t) + l;
    if (30 < c) {
      var m = l - (l % 5);
      (c = (i & ((1 << m) - 1)).toString(32)),
        (i >>= m),
        (l -= m),
        (gn = (1 << (32 - zt(t) + l)) | (r << l) | i),
        (vn = c + e);
    } else (gn = (1 << c) | (r << l) | i), (vn = e);
  }
  function Da(e) {
    e.return !== null && (ar(e, 1), Fc(e, 1, 0));
  }
  function Ia(e) {
    for (; e === Ws; )
      (Ws = zr[--Fr]), (zr[Fr] = null), (Qs = zr[--Fr]), (zr[Fr] = null);
    for (; e === ir; )
      (ir = Tt[--Rt]),
        (Tt[Rt] = null),
        (vn = Tt[--Rt]),
        (Tt[Rt] = null),
        (gn = Tt[--Rt]),
        (Tt[Rt] = null);
  }
  var St = null,
    Et = null,
    De = !1,
    Ut = null;
  function Uc(e, t) {
    var r = _t(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Bc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (St = e), (Et = Dn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (St = e), (Et = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = ir !== null ? { id: gn, overflow: vn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = _t(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (St = e),
              (Et = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function za(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Fa(e) {
    if (De) {
      var t = Et;
      if (t) {
        var r = t;
        if (!Bc(e, t)) {
          if (za(e)) throw Error(s(418));
          t = Dn(r.nextSibling);
          var i = St;
          t && Bc(e, t)
            ? Uc(i, r)
            : ((e.flags = (e.flags & -4097) | 2), (De = !1), (St = e));
        }
      } else {
        if (za(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (De = !1), (St = e);
      }
    }
  }
  function $c(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    St = e;
  }
  function Ks(e) {
    if (e !== St) return !1;
    if (!De) return $c(e), (De = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ra(e.type, e.memoizedProps))),
      t && (t = Et))
    ) {
      if (za(e)) throw (Hc(), Error(s(418)));
      for (; t; ) Uc(e, t), (t = Dn(t.nextSibling));
    }
    if (($c(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                Et = Dn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Et = null;
      }
    } else Et = St ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Hc() {
    for (var e = Et; e; ) e = Dn(e.nextSibling);
  }
  function Ur() {
    (Et = St = null), (De = !1);
  }
  function Ua(e) {
    Ut === null ? (Ut = [e]) : Ut.push(e);
  }
  var Tg = F.ReactCurrentBatchConfig;
  function _o(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(s(309));
          var i = r.stateNode;
        }
        if (!i) throw Error(s(147, e));
        var l = i,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (m) {
              var E = l.refs;
              m === null ? delete E[c] : (E[c] = m);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!r._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Gs(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Vc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wc(e) {
    function t(R, j) {
      if (e) {
        var O = R.deletions;
        O === null ? ((R.deletions = [j]), (R.flags |= 16)) : O.push(j);
      }
    }
    function r(R, j) {
      if (!e) return null;
      for (; j !== null; ) t(R, j), (j = j.sibling);
      return null;
    }
    function i(R, j) {
      for (R = new Map(); j !== null; )
        j.key !== null ? R.set(j.key, j) : R.set(j.index, j), (j = j.sibling);
      return R;
    }
    function l(R, j) {
      return (R = Kn(R, j)), (R.index = 0), (R.sibling = null), R;
    }
    function c(R, j, O) {
      return (
        (R.index = O),
        e
          ? ((O = R.alternate),
            O !== null
              ? ((O = O.index), O < j ? ((R.flags |= 2), j) : O)
              : ((R.flags |= 2), j))
          : ((R.flags |= 1048576), j)
      );
    }
    function m(R) {
      return e && R.alternate === null && (R.flags |= 2), R;
    }
    function E(R, j, O, W) {
      return j === null || j.tag !== 6
        ? ((j = Ol(O, R.mode, W)), (j.return = R), j)
        : ((j = l(j, O)), (j.return = R), j);
    }
    function N(R, j, O, W) {
      var oe = O.type;
      return oe === q
        ? B(R, j, O.props.children, W, O.key)
        : j !== null &&
          (j.elementType === oe ||
            (typeof oe == "object" &&
              oe !== null &&
              oe.$$typeof === se &&
              Vc(oe) === j.type))
        ? ((W = l(j, O.props)), (W.ref = _o(R, j, O)), (W.return = R), W)
        : ((W = yi(O.type, O.key, O.props, null, R.mode, W)),
          (W.ref = _o(R, j, O)),
          (W.return = R),
          W);
    }
    function M(R, j, O, W) {
      return j === null ||
        j.tag !== 4 ||
        j.stateNode.containerInfo !== O.containerInfo ||
        j.stateNode.implementation !== O.implementation
        ? ((j = Ml(O, R.mode, W)), (j.return = R), j)
        : ((j = l(j, O.children || [])), (j.return = R), j);
    }
    function B(R, j, O, W, oe) {
      return j === null || j.tag !== 7
        ? ((j = mr(O, R.mode, W, oe)), (j.return = R), j)
        : ((j = l(j, O)), (j.return = R), j);
    }
    function $(R, j, O) {
      if ((typeof j == "string" && j !== "") || typeof j == "number")
        return (j = Ol("" + j, R.mode, O)), (j.return = R), j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case V:
            return (
              (O = yi(j.type, j.key, j.props, null, R.mode, O)),
              (O.ref = _o(R, null, j)),
              (O.return = R),
              O
            );
          case K:
            return (j = Ml(j, R.mode, O)), (j.return = R), j;
          case se:
            var W = j._init;
            return $(R, W(j._payload), O);
        }
        if (Pn(j) || z(j))
          return (j = mr(j, R.mode, O, null)), (j.return = R), j;
        Gs(R, j);
      }
      return null;
    }
    function U(R, j, O, W) {
      var oe = j !== null ? j.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return oe !== null ? null : E(R, j, "" + O, W);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case V:
            return O.key === oe ? N(R, j, O, W) : null;
          case K:
            return O.key === oe ? M(R, j, O, W) : null;
          case se:
            return (oe = O._init), U(R, j, oe(O._payload), W);
        }
        if (Pn(O) || z(O)) return oe !== null ? null : B(R, j, O, W, null);
        Gs(R, O);
      }
      return null;
    }
    function X(R, j, O, W, oe) {
      if ((typeof W == "string" && W !== "") || typeof W == "number")
        return (R = R.get(O) || null), E(j, R, "" + W, oe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case V:
            return (
              (R = R.get(W.key === null ? O : W.key) || null), N(j, R, W, oe)
            );
          case K:
            return (
              (R = R.get(W.key === null ? O : W.key) || null), M(j, R, W, oe)
            );
          case se:
            var ae = W._init;
            return X(R, j, O, ae(W._payload), oe);
        }
        if (Pn(W) || z(W)) return (R = R.get(O) || null), B(j, R, W, oe, null);
        Gs(j, W);
      }
      return null;
    }
    function te(R, j, O, W) {
      for (
        var oe = null, ae = null, le = j, de = (j = 0), Xe = null;
        le !== null && de < O.length;
        de++
      ) {
        le.index > de ? ((Xe = le), (le = null)) : (Xe = le.sibling);
        var Ne = U(R, le, O[de], W);
        if (Ne === null) {
          le === null && (le = Xe);
          break;
        }
        e && le && Ne.alternate === null && t(R, le),
          (j = c(Ne, j, de)),
          ae === null ? (oe = Ne) : (ae.sibling = Ne),
          (ae = Ne),
          (le = Xe);
      }
      if (de === O.length) return r(R, le), De && ar(R, de), oe;
      if (le === null) {
        for (; de < O.length; de++)
          (le = $(R, O[de], W)),
            le !== null &&
              ((j = c(le, j, de)),
              ae === null ? (oe = le) : (ae.sibling = le),
              (ae = le));
        return De && ar(R, de), oe;
      }
      for (le = i(R, le); de < O.length; de++)
        (Xe = X(le, R, de, O[de], W)),
          Xe !== null &&
            (e &&
              Xe.alternate !== null &&
              le.delete(Xe.key === null ? de : Xe.key),
            (j = c(Xe, j, de)),
            ae === null ? (oe = Xe) : (ae.sibling = Xe),
            (ae = Xe));
      return (
        e &&
          le.forEach(function (Gn) {
            return t(R, Gn);
          }),
        De && ar(R, de),
        oe
      );
    }
    function ne(R, j, O, W) {
      var oe = z(O);
      if (typeof oe != "function") throw Error(s(150));
      if (((O = oe.call(O)), O == null)) throw Error(s(151));
      for (
        var ae = (oe = null), le = j, de = (j = 0), Xe = null, Ne = O.next();
        le !== null && !Ne.done;
        de++, Ne = O.next()
      ) {
        le.index > de ? ((Xe = le), (le = null)) : (Xe = le.sibling);
        var Gn = U(R, le, Ne.value, W);
        if (Gn === null) {
          le === null && (le = Xe);
          break;
        }
        e && le && Gn.alternate === null && t(R, le),
          (j = c(Gn, j, de)),
          ae === null ? (oe = Gn) : (ae.sibling = Gn),
          (ae = Gn),
          (le = Xe);
      }
      if (Ne.done) return r(R, le), De && ar(R, de), oe;
      if (le === null) {
        for (; !Ne.done; de++, Ne = O.next())
          (Ne = $(R, Ne.value, W)),
            Ne !== null &&
              ((j = c(Ne, j, de)),
              ae === null ? (oe = Ne) : (ae.sibling = Ne),
              (ae = Ne));
        return De && ar(R, de), oe;
      }
      for (le = i(R, le); !Ne.done; de++, Ne = O.next())
        (Ne = X(le, R, de, Ne.value, W)),
          Ne !== null &&
            (e &&
              Ne.alternate !== null &&
              le.delete(Ne.key === null ? de : Ne.key),
            (j = c(Ne, j, de)),
            ae === null ? (oe = Ne) : (ae.sibling = Ne),
            (ae = Ne));
      return (
        e &&
          le.forEach(function (lv) {
            return t(R, lv);
          }),
        De && ar(R, de),
        oe
      );
    }
    function $e(R, j, O, W) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === q &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case V:
            e: {
              for (var oe = O.key, ae = j; ae !== null; ) {
                if (ae.key === oe) {
                  if (((oe = O.type), oe === q)) {
                    if (ae.tag === 7) {
                      r(R, ae.sibling),
                        (j = l(ae, O.props.children)),
                        (j.return = R),
                        (R = j);
                      break e;
                    }
                  } else if (
                    ae.elementType === oe ||
                    (typeof oe == "object" &&
                      oe !== null &&
                      oe.$$typeof === se &&
                      Vc(oe) === ae.type)
                  ) {
                    r(R, ae.sibling),
                      (j = l(ae, O.props)),
                      (j.ref = _o(R, ae, O)),
                      (j.return = R),
                      (R = j);
                    break e;
                  }
                  r(R, ae);
                  break;
                } else t(R, ae);
                ae = ae.sibling;
              }
              O.type === q
                ? ((j = mr(O.props.children, R.mode, W, O.key)),
                  (j.return = R),
                  (R = j))
                : ((W = yi(O.type, O.key, O.props, null, R.mode, W)),
                  (W.ref = _o(R, j, O)),
                  (W.return = R),
                  (R = W));
            }
            return m(R);
          case K:
            e: {
              for (ae = O.key; j !== null; ) {
                if (j.key === ae)
                  if (
                    j.tag === 4 &&
                    j.stateNode.containerInfo === O.containerInfo &&
                    j.stateNode.implementation === O.implementation
                  ) {
                    r(R, j.sibling),
                      (j = l(j, O.children || [])),
                      (j.return = R),
                      (R = j);
                    break e;
                  } else {
                    r(R, j);
                    break;
                  }
                else t(R, j);
                j = j.sibling;
              }
              (j = Ml(O, R.mode, W)), (j.return = R), (R = j);
            }
            return m(R);
          case se:
            return (ae = O._init), $e(R, j, ae(O._payload), W);
        }
        if (Pn(O)) return te(R, j, O, W);
        if (z(O)) return ne(R, j, O, W);
        Gs(R, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          j !== null && j.tag === 6
            ? (r(R, j.sibling), (j = l(j, O)), (j.return = R), (R = j))
            : (r(R, j), (j = Ol(O, R.mode, W)), (j.return = R), (R = j)),
          m(R))
        : r(R, j);
    }
    return $e;
  }
  var Br = Wc(!0),
    Qc = Wc(!1),
    qs = In(null),
    Ys = null,
    $r = null,
    Ba = null;
  function $a() {
    Ba = $r = Ys = null;
  }
  function Ha(e) {
    var t = qs.current;
    Ae(qs), (e._currentValue = t);
  }
  function Va(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Hr(e, t) {
    (Ys = e),
      (Ba = $r = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (mt = !0), (e.firstContext = null));
  }
  function Ot(e) {
    var t = e._currentValue;
    if (Ba !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), $r === null)) {
        if (Ys === null) throw Error(s(308));
        ($r = e), (Ys.dependencies = { lanes: 0, firstContext: e });
      } else $r = $r.next = e;
    return t;
  }
  var lr = null;
  function Wa(e) {
    lr === null ? (lr = [e]) : lr.push(e);
  }
  function Kc(e, t, r, i) {
    var l = t.interleaved;
    return (
      l === null ? ((r.next = r), Wa(t)) : ((r.next = l.next), (l.next = r)),
      (t.interleaved = r),
      yn(e, i)
    );
  }
  function yn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var Un = !1;
  function Qa(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Gc(e, t) {
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
  function xn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Bn(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Ce & 2) !== 0)) {
      var l = i.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (i.pending = t),
        yn(e, r)
      );
    }
    return (
      (l = i.interleaved),
      l === null ? ((t.next = t), Wa(i)) : ((t.next = l.next), (l.next = t)),
      (i.interleaved = t),
      yn(e, r)
    );
  }
  function Xs(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), ia(e, r);
    }
  }
  function qc(e, t) {
    var r = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), r === i)) {
      var l = null,
        c = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var m = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          c === null ? (l = c = m) : (c = c.next = m), (r = r.next);
        } while (r !== null);
        c === null ? (l = c = t) : (c = c.next = t);
      } else l = c = t;
      (r = {
        baseState: i.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: c,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function Zs(e, t, r, i) {
    var l = e.updateQueue;
    Un = !1;
    var c = l.firstBaseUpdate,
      m = l.lastBaseUpdate,
      E = l.shared.pending;
    if (E !== null) {
      l.shared.pending = null;
      var N = E,
        M = N.next;
      (N.next = null), m === null ? (c = M) : (m.next = M), (m = N);
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (E = B.lastBaseUpdate),
        E !== m &&
          (E === null ? (B.firstBaseUpdate = M) : (E.next = M),
          (B.lastBaseUpdate = N)));
    }
    if (c !== null) {
      var $ = l.baseState;
      (m = 0), (B = M = N = null), (E = c);
      do {
        var U = E.lane,
          X = E.eventTime;
        if ((i & U) === U) {
          B !== null &&
            (B = B.next =
              {
                eventTime: X,
                lane: 0,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null,
              });
          e: {
            var te = e,
              ne = E;
            switch (((U = t), (X = r), ne.tag)) {
              case 1:
                if (((te = ne.payload), typeof te == "function")) {
                  $ = te.call(X, $, U);
                  break e;
                }
                $ = te;
                break e;
              case 3:
                te.flags = (te.flags & -65537) | 128;
              case 0:
                if (
                  ((te = ne.payload),
                  (U = typeof te == "function" ? te.call(X, $, U) : te),
                  U == null)
                )
                  break e;
                $ = H({}, $, U);
                break e;
              case 2:
                Un = !0;
            }
          }
          E.callback !== null &&
            E.lane !== 0 &&
            ((e.flags |= 64),
            (U = l.effects),
            U === null ? (l.effects = [E]) : U.push(E));
        } else
          (X = {
            eventTime: X,
            lane: U,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            B === null ? ((M = B = X), (N = $)) : (B = B.next = X),
            (m |= U);
        if (((E = E.next), E === null)) {
          if (((E = l.shared.pending), E === null)) break;
          (U = E),
            (E = U.next),
            (U.next = null),
            (l.lastBaseUpdate = U),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (B === null && (N = $),
        (l.baseState = N),
        (l.firstBaseUpdate = M),
        (l.lastBaseUpdate = B),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (m |= l.lane), (l = l.next);
        while (l !== t);
      } else c === null && (l.shared.lanes = 0);
      (dr |= m), (e.lanes = m), (e.memoizedState = $);
    }
  }
  function Yc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          l = i.callback;
        if (l !== null) {
          if (((i.callback = null), (i = r), typeof l != "function"))
            throw Error(s(191, l));
          l.call(i);
        }
      }
  }
  var Lo = {},
    sn = In(Lo),
    Do = In(Lo),
    Io = In(Lo);
  function ur(e) {
    if (e === Lo) throw Error(s(174));
    return e;
  }
  function Ka(e, t) {
    switch ((Oe(Io, t), Oe(Do, e), Oe(sn, Lo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Zt(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Zt(t, e));
    }
    Ae(sn), Oe(sn, t);
  }
  function Vr() {
    Ae(sn), Ae(Do), Ae(Io);
  }
  function Xc(e) {
    ur(Io.current);
    var t = ur(sn.current),
      r = Zt(t, e.type);
    t !== r && (Oe(Do, e), Oe(sn, r));
  }
  function Ga(e) {
    Do.current === e && (Ae(sn), Ae(Do));
  }
  var ze = In(0);
  function Js(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
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
  var qa = [];
  function Ya() {
    for (var e = 0; e < qa.length; e++)
      qa[e]._workInProgressVersionPrimary = null;
    qa.length = 0;
  }
  var ei = F.ReactCurrentDispatcher,
    Xa = F.ReactCurrentBatchConfig,
    cr = 0,
    Fe = null,
    Qe = null,
    qe = null,
    ti = !1,
    zo = !1,
    Fo = 0,
    Rg = 0;
  function rt() {
    throw Error(s(321));
  }
  function Za(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Ft(e[r], t[r])) return !1;
    return !0;
  }
  function Ja(e, t, r, i, l, c) {
    if (
      ((cr = c),
      (Fe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ei.current = e === null || e.memoizedState === null ? _g : Lg),
      (e = r(i, l)),
      zo)
    ) {
      c = 0;
      do {
        if (((zo = !1), (Fo = 0), 25 <= c)) throw Error(s(301));
        (c += 1),
          (qe = Qe = null),
          (t.updateQueue = null),
          (ei.current = Dg),
          (e = r(i, l));
      } while (zo);
    }
    if (
      ((ei.current = oi),
      (t = Qe !== null && Qe.next !== null),
      (cr = 0),
      (qe = Qe = Fe = null),
      (ti = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function el() {
    var e = Fo !== 0;
    return (Fo = 0), e;
  }
  function an() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return qe === null ? (Fe.memoizedState = qe = e) : (qe = qe.next = e), qe;
  }
  function Mt() {
    if (Qe === null) {
      var e = Fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = qe === null ? Fe.memoizedState : qe.next;
    if (t !== null) (qe = t), (Qe = e);
    else {
      if (e === null) throw Error(s(310));
      (Qe = e),
        (e = {
          memoizedState: Qe.memoizedState,
          baseState: Qe.baseState,
          baseQueue: Qe.baseQueue,
          queue: Qe.queue,
          next: null,
        }),
        qe === null ? (Fe.memoizedState = qe = e) : (qe = qe.next = e);
    }
    return qe;
  }
  function Uo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function tl(e) {
    var t = Mt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var i = Qe,
      l = i.baseQueue,
      c = r.pending;
    if (c !== null) {
      if (l !== null) {
        var m = l.next;
        (l.next = c.next), (c.next = m);
      }
      (i.baseQueue = l = c), (r.pending = null);
    }
    if (l !== null) {
      (c = l.next), (i = i.baseState);
      var E = (m = null),
        N = null,
        M = c;
      do {
        var B = M.lane;
        if ((cr & B) === B)
          N !== null &&
            (N = N.next =
              {
                lane: 0,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null,
              }),
            (i = M.hasEagerState ? M.eagerState : e(i, M.action));
        else {
          var $ = {
            lane: B,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          };
          N === null ? ((E = N = $), (m = i)) : (N = N.next = $),
            (Fe.lanes |= B),
            (dr |= B);
        }
        M = M.next;
      } while (M !== null && M !== c);
      N === null ? (m = i) : (N.next = E),
        Ft(i, t.memoizedState) || (mt = !0),
        (t.memoizedState = i),
        (t.baseState = m),
        (t.baseQueue = N),
        (r.lastRenderedState = i);
    }
    if (((e = r.interleaved), e !== null)) {
      l = e;
      do (c = l.lane), (Fe.lanes |= c), (dr |= c), (l = l.next);
      while (l !== e);
    } else l === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function nl(e) {
    var t = Mt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch,
      l = r.pending,
      c = t.memoizedState;
    if (l !== null) {
      r.pending = null;
      var m = (l = l.next);
      do (c = e(c, m.action)), (m = m.next);
      while (m !== l);
      Ft(c, t.memoizedState) || (mt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (r.lastRenderedState = c);
    }
    return [c, i];
  }
  function Zc() {}
  function Jc(e, t) {
    var r = Fe,
      i = Mt(),
      l = t(),
      c = !Ft(i.memoizedState, l);
    if (
      (c && ((i.memoizedState = l), (mt = !0)),
      (i = i.queue),
      rl(nd.bind(null, r, i, e), [e]),
      i.getSnapshot !== t || c || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Bo(9, td.bind(null, r, i, l, t), void 0, null),
        Ye === null)
      )
        throw Error(s(349));
      (cr & 30) !== 0 || ed(r, t, l);
    }
    return l;
  }
  function ed(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Fe.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function td(e, t, r, i) {
    (t.value = r), (t.getSnapshot = i), rd(t) && od(e);
  }
  function nd(e, t, r) {
    return r(function () {
      rd(t) && od(e);
    });
  }
  function rd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Ft(e, r);
    } catch {
      return !0;
    }
  }
  function od(e) {
    var t = yn(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function sd(e) {
    var t = an();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Uo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ag.bind(null, Fe, e)),
      [t.memoizedState, e]
    );
  }
  function Bo(e, t, r, i) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: i, next: null }),
      (t = Fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Fe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((i = r.next), (r.next = e), (e.next = i), (t.lastEffect = e))),
      e
    );
  }
  function id() {
    return Mt().memoizedState;
  }
  function ni(e, t, r, i) {
    var l = an();
    (Fe.flags |= e),
      (l.memoizedState = Bo(1 | t, r, void 0, i === void 0 ? null : i));
  }
  function ri(e, t, r, i) {
    var l = Mt();
    i = i === void 0 ? null : i;
    var c = void 0;
    if (Qe !== null) {
      var m = Qe.memoizedState;
      if (((c = m.destroy), i !== null && Za(i, m.deps))) {
        l.memoizedState = Bo(t, r, c, i);
        return;
      }
    }
    (Fe.flags |= e), (l.memoizedState = Bo(1 | t, r, c, i));
  }
  function ad(e, t) {
    return ni(8390656, 8, e, t);
  }
  function rl(e, t) {
    return ri(2048, 8, e, t);
  }
  function ld(e, t) {
    return ri(4, 2, e, t);
  }
  function ud(e, t) {
    return ri(4, 4, e, t);
  }
  function cd(e, t) {
    if (typeof t == "function")
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
  function dd(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), ri(4, 4, cd.bind(null, t, e), r)
    );
  }
  function ol() {}
  function fd(e, t) {
    var r = Mt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && Za(t, i[1])
      ? i[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function pd(e, t) {
    var r = Mt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && Za(t, i[1])
      ? i[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function hd(e, t, r) {
    return (cr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (mt = !0)), (e.memoizedState = r))
      : (Ft(r, t) ||
          ((r = Vu()), (Fe.lanes |= r), (dr |= r), (e.baseState = !0)),
        t);
  }
  function Og(e, t) {
    var r = je;
    (je = r !== 0 && 4 > r ? r : 4), e(!0);
    var i = Xa.transition;
    Xa.transition = {};
    try {
      e(!1), t();
    } finally {
      (je = r), (Xa.transition = i);
    }
  }
  function md() {
    return Mt().memoizedState;
  }
  function Mg(e, t, r) {
    var i = Wn(e);
    if (
      ((r = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gd(e))
    )
      vd(t, r);
    else if (((r = Kc(e, t, r, i)), r !== null)) {
      var l = ut();
      Vt(r, e, i, l), yd(r, t, i);
    }
  }
  function Ag(e, t, r) {
    var i = Wn(e),
      l = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (gd(e)) vd(t, l);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var m = t.lastRenderedState,
            E = c(m, r);
          if (((l.hasEagerState = !0), (l.eagerState = E), Ft(E, m))) {
            var N = t.interleaved;
            N === null
              ? ((l.next = l), Wa(t))
              : ((l.next = N.next), (N.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (r = Kc(e, t, l, i)),
        r !== null && ((l = ut()), Vt(r, e, i, l), yd(r, t, i));
    }
  }
  function gd(e) {
    var t = e.alternate;
    return e === Fe || (t !== null && t === Fe);
  }
  function vd(e, t) {
    zo = ti = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function yd(e, t, r) {
    if ((r & 4194240) !== 0) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), ia(e, r);
    }
  }
  var oi = {
      readContext: Ot,
      useCallback: rt,
      useContext: rt,
      useEffect: rt,
      useImperativeHandle: rt,
      useInsertionEffect: rt,
      useLayoutEffect: rt,
      useMemo: rt,
      useReducer: rt,
      useRef: rt,
      useState: rt,
      useDebugValue: rt,
      useDeferredValue: rt,
      useTransition: rt,
      useMutableSource: rt,
      useSyncExternalStore: rt,
      useId: rt,
      unstable_isNewReconciler: !1,
    },
    _g = {
      readContext: Ot,
      useCallback: function (e, t) {
        return (an().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ot,
      useEffect: ad,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          ni(4194308, 4, cd.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return ni(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ni(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = an();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var i = an();
        return (
          (t = r !== void 0 ? r(t) : t),
          (i.memoizedState = i.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (i.queue = e),
          (e = e.dispatch = Mg.bind(null, Fe, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = an();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: sd,
      useDebugValue: ol,
      useDeferredValue: function (e) {
        return (an().memoizedState = e);
      },
      useTransition: function () {
        var e = sd(!1),
          t = e[0];
        return (e = Og.bind(null, e[1])), (an().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var i = Fe,
          l = an();
        if (De) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), Ye === null)) throw Error(s(349));
          (cr & 30) !== 0 || ed(i, t, r);
        }
        l.memoizedState = r;
        var c = { value: r, getSnapshot: t };
        return (
          (l.queue = c),
          ad(nd.bind(null, i, c, e), [e]),
          (i.flags |= 2048),
          Bo(9, td.bind(null, i, c, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = an(),
          t = Ye.identifierPrefix;
        if (De) {
          var r = vn,
            i = gn;
          (r = (i & ~(1 << (32 - zt(i) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Fo++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = Rg++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Lg = {
      readContext: Ot,
      useCallback: fd,
      useContext: Ot,
      useEffect: rl,
      useImperativeHandle: dd,
      useInsertionEffect: ld,
      useLayoutEffect: ud,
      useMemo: pd,
      useReducer: tl,
      useRef: id,
      useState: function () {
        return tl(Uo);
      },
      useDebugValue: ol,
      useDeferredValue: function (e) {
        var t = Mt();
        return hd(t, Qe.memoizedState, e);
      },
      useTransition: function () {
        var e = tl(Uo)[0],
          t = Mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Zc,
      useSyncExternalStore: Jc,
      useId: md,
      unstable_isNewReconciler: !1,
    },
    Dg = {
      readContext: Ot,
      useCallback: fd,
      useContext: Ot,
      useEffect: rl,
      useImperativeHandle: dd,
      useInsertionEffect: ld,
      useLayoutEffect: ud,
      useMemo: pd,
      useReducer: nl,
      useRef: id,
      useState: function () {
        return nl(Uo);
      },
      useDebugValue: ol,
      useDeferredValue: function (e) {
        var t = Mt();
        return Qe === null ? (t.memoizedState = e) : hd(t, Qe.memoizedState, e);
      },
      useTransition: function () {
        var e = nl(Uo)[0],
          t = Mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Zc,
      useSyncExternalStore: Jc,
      useId: md,
      unstable_isNewReconciler: !1,
    };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      (t = H({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function sl(e, t, r, i) {
    (t = e.memoizedState),
      (r = r(i, t)),
      (r = r == null ? t : H({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var si = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? rr(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var i = ut(),
        l = Wn(e),
        c = xn(i, l);
      (c.payload = t),
        r != null && (c.callback = r),
        (t = Bn(e, c, l)),
        t !== null && (Vt(t, e, l, i), Xs(t, e, l));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var i = ut(),
        l = Wn(e),
        c = xn(i, l);
      (c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = Bn(e, c, l)),
        t !== null && (Vt(t, e, l, i), Xs(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = ut(),
        i = Wn(e),
        l = xn(r, i);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Bn(e, l, i)),
        t !== null && (Vt(t, e, i, r), Xs(t, e, i));
    },
  };
  function xd(e, t, r, i, l, c, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, c, m)
        : t.prototype && t.prototype.isPureReactComponent
        ? !jo(r, i) || !jo(l, c)
        : !0
    );
  }
  function wd(e, t, r) {
    var i = !1,
      l = zn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = Ot(c))
        : ((l = ht(t) ? sr : nt.current),
          (i = t.contextTypes),
          (c = (i = i != null) ? Ir(e, l) : zn)),
      (t = new t(r, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = si),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function Sd(e, t, r, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, i),
      t.state !== e && si.enqueueReplaceState(t, t.state, null);
  }
  function il(e, t, r, i) {
    var l = e.stateNode;
    (l.props = r), (l.state = e.memoizedState), (l.refs = {}), Qa(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (l.context = Ot(c))
      : ((c = ht(t) ? sr : nt.current), (l.context = Ir(e, c))),
      (l.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (sl(e, t, c, r), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && si.enqueueReplaceState(l, l.state, null),
        Zs(e, r, l, i),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Wr(e, t) {
    try {
      var r = "",
        i = t;
      do (r += ue(i)), (i = i.return);
      while (i);
      var l = r;
    } catch (c) {
      l =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function al(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function ll(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Ig = typeof WeakMap == "function" ? WeakMap : Map;
  function Ed(e, t, r) {
    (r = xn(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var i = t.value;
    return (
      (r.callback = function () {
        fi || ((fi = !0), (Cl = i)), ll(e, t);
      }),
      r
    );
  }
  function Cd(e, t, r) {
    (r = xn(-1, r)), (r.tag = 3);
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      (r.payload = function () {
        return i(l);
      }),
        (r.callback = function () {
          ll(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (r.callback = function () {
          ll(e, t),
            typeof i != "function" &&
              (Hn === null ? (Hn = new Set([this])) : Hn.add(this));
          var m = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: m !== null ? m : "",
          });
        }),
      r
    );
  }
  function kd(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Ig();
      var l = new Set();
      i.set(t, l);
    } else (l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l));
    l.has(r) || (l.add(r), (e = Xg.bind(null, e, t, r)), t.then(e, e));
  }
  function Nd(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function bd(e, t, r, i, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = xn(-1, 1)), (t.tag = 2), Bn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var zg = F.ReactCurrentOwner,
    mt = !1;
  function lt(e, t, r, i) {
    t.child = e === null ? Qc(t, null, r, i) : Br(t, e.child, r, i);
  }
  function jd(e, t, r, i, l) {
    r = r.render;
    var c = t.ref;
    return (
      Hr(t, l),
      (i = Ja(e, t, r, i, c, l)),
      (r = el()),
      e !== null && !mt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          wn(e, t, l))
        : (De && r && Da(t), (t.flags |= 1), lt(e, t, i, l), t.child)
    );
  }
  function Pd(e, t, r, i, l) {
    if (e === null) {
      var c = r.type;
      return typeof c == "function" &&
        !Rl(c) &&
        c.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), Td(e, t, c, i, l))
        : ((e = yi(r.type, null, i, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), (e.lanes & l) === 0)) {
      var m = c.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : jo), r(m, i) && e.ref === t.ref)
      )
        return wn(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Kn(c, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Td(e, t, r, i, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (jo(c, i) && e.ref === t.ref)
        if (((mt = !1), (t.pendingProps = i = c), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (mt = !0);
        else return (t.lanes = e.lanes), wn(e, t, l);
    }
    return ul(e, t, r, i, l);
  }
  function Rd(e, t, r) {
    var i = t.pendingProps,
      l = i.children,
      c = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Oe(Kr, Ct),
          (Ct |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Oe(Kr, Ct),
            (Ct |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = c !== null ? c.baseLanes : r),
          Oe(Kr, Ct),
          (Ct |= i);
      }
    else
      c !== null ? ((i = c.baseLanes | r), (t.memoizedState = null)) : (i = r),
        Oe(Kr, Ct),
        (Ct |= i);
    return lt(e, t, l, r), t.child;
  }
  function Od(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ul(e, t, r, i, l) {
    var c = ht(r) ? sr : nt.current;
    return (
      (c = Ir(t, c)),
      Hr(t, l),
      (r = Ja(e, t, r, i, c, l)),
      (i = el()),
      e !== null && !mt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          wn(e, t, l))
        : (De && i && Da(t), (t.flags |= 1), lt(e, t, r, l), t.child)
    );
  }
  function Md(e, t, r, i, l) {
    if (ht(r)) {
      var c = !0;
      Hs(t);
    } else c = !1;
    if ((Hr(t, l), t.stateNode === null))
      ai(e, t), wd(t, r, i), il(t, r, i, l), (i = !0);
    else if (e === null) {
      var m = t.stateNode,
        E = t.memoizedProps;
      m.props = E;
      var N = m.context,
        M = r.contextType;
      typeof M == "object" && M !== null
        ? (M = Ot(M))
        : ((M = ht(r) ? sr : nt.current), (M = Ir(t, M)));
      var B = r.getDerivedStateFromProps,
        $ =
          typeof B == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function";
      $ ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((E !== i || N !== M) && Sd(t, m, i, M)),
        (Un = !1);
      var U = t.memoizedState;
      (m.state = U),
        Zs(t, i, m, l),
        (N = t.memoizedState),
        E !== i || U !== N || pt.current || Un
          ? (typeof B == "function" && (sl(t, r, B, i), (N = t.memoizedState)),
            (E = Un || xd(t, r, E, i, U, N, M))
              ? ($ ||
                  (typeof m.UNSAFE_componentWillMount != "function" &&
                    typeof m.componentWillMount != "function") ||
                  (typeof m.componentWillMount == "function" &&
                    m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == "function" &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof m.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = N)),
            (m.props = i),
            (m.state = N),
            (m.context = M),
            (i = E))
          : (typeof m.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (m = t.stateNode),
        Gc(e, t),
        (E = t.memoizedProps),
        (M = t.type === t.elementType ? E : Bt(t.type, E)),
        (m.props = M),
        ($ = t.pendingProps),
        (U = m.context),
        (N = r.contextType),
        typeof N == "object" && N !== null
          ? (N = Ot(N))
          : ((N = ht(r) ? sr : nt.current), (N = Ir(t, N)));
      var X = r.getDerivedStateFromProps;
      (B =
        typeof X == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function") ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((E !== $ || U !== N) && Sd(t, m, i, N)),
        (Un = !1),
        (U = t.memoizedState),
        (m.state = U),
        Zs(t, i, m, l);
      var te = t.memoizedState;
      E !== $ || U !== te || pt.current || Un
        ? (typeof X == "function" && (sl(t, r, X, i), (te = t.memoizedState)),
          (M = Un || xd(t, r, M, i, U, te, N) || !1)
            ? (B ||
                (typeof m.UNSAFE_componentWillUpdate != "function" &&
                  typeof m.componentWillUpdate != "function") ||
                (typeof m.componentWillUpdate == "function" &&
                  m.componentWillUpdate(i, te, N),
                typeof m.UNSAFE_componentWillUpdate == "function" &&
                  m.UNSAFE_componentWillUpdate(i, te, N)),
              typeof m.componentDidUpdate == "function" && (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof m.componentDidUpdate != "function" ||
                (E === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != "function" ||
                (E === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = te)),
          (m.props = i),
          (m.state = te),
          (m.context = N),
          (i = M))
        : (typeof m.componentDidUpdate != "function" ||
            (E === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != "function" ||
            (E === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return cl(e, t, r, i, c, l);
  }
  function cl(e, t, r, i, l, c) {
    Od(e, t);
    var m = (t.flags & 128) !== 0;
    if (!i && !m) return l && Ic(t, r, !1), wn(e, t, c);
    (i = t.stateNode), (zg.current = t);
    var E =
      m && typeof r.getDerivedStateFromError != "function" ? null : i.render();
    return (
      (t.flags |= 1),
      e !== null && m
        ? ((t.child = Br(t, e.child, null, c)), (t.child = Br(t, null, E, c)))
        : lt(e, t, E, c),
      (t.memoizedState = i.state),
      l && Ic(t, r, !0),
      t.child
    );
  }
  function Ad(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Lc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Lc(e, t.context, !1),
      Ka(e, t.containerInfo);
  }
  function _d(e, t, r, i, l) {
    return Ur(), Ua(l), (t.flags |= 256), lt(e, t, r, i), t.child;
  }
  var dl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ld(e, t, r) {
    var i = t.pendingProps,
      l = ze.current,
      c = !1,
      m = (t.flags & 128) !== 0,
      E;
    if (
      ((E = m) ||
        (E = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      E
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Oe(ze, l & 1),
      e === null)
    )
      return (
        Fa(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((m = i.children),
            (e = i.fallback),
            c
              ? ((i = t.mode),
                (c = t.child),
                (m = { mode: "hidden", children: m }),
                (i & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = m))
                  : (c = xi(m, i, 0, null)),
                (e = mr(e, i, r, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = fl(r)),
                (t.memoizedState = dl),
                e)
              : pl(t, m))
      );
    if (((l = e.memoizedState), l !== null && ((E = l.dehydrated), E !== null)))
      return Fg(e, t, m, i, E, l, r);
    if (c) {
      (c = i.fallback), (m = t.mode), (l = e.child), (E = l.sibling);
      var N = { mode: "hidden", children: i.children };
      return (
        (m & 1) === 0 && t.child !== l
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = N),
            (t.deletions = null))
          : ((i = Kn(l, N)), (i.subtreeFlags = l.subtreeFlags & 14680064)),
        E !== null ? (c = Kn(E, c)) : ((c = mr(c, m, r, null)), (c.flags |= 2)),
        (c.return = t),
        (i.return = t),
        (i.sibling = c),
        (t.child = i),
        (i = c),
        (c = t.child),
        (m = e.child.memoizedState),
        (m =
          m === null
            ? fl(r)
            : {
                baseLanes: m.baseLanes | r,
                cachePool: null,
                transitions: m.transitions,
              }),
        (c.memoizedState = m),
        (c.childLanes = e.childLanes & ~r),
        (t.memoizedState = dl),
        i
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (i = Kn(c, { mode: "visible", children: i.children })),
      (t.mode & 1) === 0 && (i.lanes = r),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    );
  }
  function pl(e, t) {
    return (
      (t = xi({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ii(e, t, r, i) {
    return (
      i !== null && Ua(i),
      Br(t, e.child, null, r),
      (e = pl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Fg(e, t, r, i, l, c, m) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (i = al(Error(s(422)))), ii(e, t, m, i))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = i.fallback),
          (l = t.mode),
          (i = xi({ mode: "visible", children: i.children }, l, 0, null)),
          (c = mr(c, l, m, null)),
          (c.flags |= 2),
          (i.return = t),
          (c.return = t),
          (i.sibling = c),
          (t.child = i),
          (t.mode & 1) !== 0 && Br(t, e.child, null, m),
          (t.child.memoizedState = fl(m)),
          (t.memoizedState = dl),
          c);
    if ((t.mode & 1) === 0) return ii(e, t, m, null);
    if (l.data === "$!") {
      if (((i = l.nextSibling && l.nextSibling.dataset), i)) var E = i.dgst;
      return (
        (i = E), (c = Error(s(419))), (i = al(c, i, void 0)), ii(e, t, m, i)
      );
    }
    if (((E = (m & e.childLanes) !== 0), mt || E)) {
      if (((i = Ye), i !== null)) {
        switch (m & -m) {
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
        (l = (l & (i.suspendedLanes | m)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== c.retryLane &&
            ((c.retryLane = l), yn(e, l), Vt(i, e, l, -1));
      }
      return Tl(), (i = al(Error(s(421)))), ii(e, t, m, i);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Zg.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (Et = Dn(l.nextSibling)),
        (St = t),
        (De = !0),
        (Ut = null),
        e !== null &&
          ((Tt[Rt++] = gn),
          (Tt[Rt++] = vn),
          (Tt[Rt++] = ir),
          (gn = e.id),
          (vn = e.overflow),
          (ir = t)),
        (t = pl(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function Dd(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Va(e.return, t, r);
  }
  function hl(e, t, r, i, l) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: r,
          tailMode: l,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = i),
        (c.tail = r),
        (c.tailMode = l));
  }
  function Id(e, t, r) {
    var i = t.pendingProps,
      l = i.revealOrder,
      c = i.tail;
    if ((lt(e, t, i.children, r), (i = ze.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Dd(e, r, t);
          else if (e.tag === 19) Dd(e, r, t);
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
      i &= 1;
    }
    if ((Oe(ze, i), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (r = t.child, l = null; r !== null; )
            (e = r.alternate),
              e !== null && Js(e) === null && (l = r),
              (r = r.sibling);
          (r = l),
            r === null
              ? ((l = t.child), (t.child = null))
              : ((l = r.sibling), (r.sibling = null)),
            hl(t, !1, l, r, c);
          break;
        case "backwards":
          for (r = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Js(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = r), (r = l), (l = e);
          }
          hl(t, !0, r, null, c);
          break;
        case "together":
          hl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ai(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function wn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (dr |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Kn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Kn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Ug(e, t, r) {
    switch (t.tag) {
      case 3:
        Ad(t), Ur();
        break;
      case 5:
        Xc(t);
        break;
      case 1:
        ht(t.type) && Hs(t);
        break;
      case 4:
        Ka(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context,
          l = t.memoizedProps.value;
        Oe(qs, i._currentValue), (i._currentValue = l);
        break;
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (Oe(ze, ze.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? Ld(e, t, r)
            : (Oe(ze, ze.current & 1),
              (e = wn(e, t, r)),
              e !== null ? e.sibling : null);
        Oe(ze, ze.current & 1);
        break;
      case 19:
        if (((i = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (i) return Id(e, t, r);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Oe(ze, ze.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Rd(e, t, r);
    }
    return wn(e, t, r);
  }
  var zd, ml, Fd, Ud;
  (zd = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (ml = function () {}),
    (Fd = function (e, t, r, i) {
      var l = e.memoizedProps;
      if (l !== i) {
        (e = t.stateNode), ur(sn.current);
        var c = null;
        switch (r) {
          case "input":
            (l = ao(e, l)), (i = ao(e, i)), (c = []);
            break;
          case "select":
            (l = H({}, l, { value: void 0 })),
              (i = H({}, i, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (l = Cr(e, l)), (i = Cr(e, i)), (c = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = Us);
        }
        en(r, i);
        var m;
        r = null;
        for (M in l)
          if (!i.hasOwnProperty(M) && l.hasOwnProperty(M) && l[M] != null)
            if (M === "style") {
              var E = l[M];
              for (m in E) E.hasOwnProperty(m) && (r || (r = {}), (r[m] = ""));
            } else
              M !== "dangerouslySetInnerHTML" &&
                M !== "children" &&
                M !== "suppressContentEditableWarning" &&
                M !== "suppressHydrationWarning" &&
                M !== "autoFocus" &&
                (u.hasOwnProperty(M)
                  ? c || (c = [])
                  : (c = c || []).push(M, null));
        for (M in i) {
          var N = i[M];
          if (
            ((E = l?.[M]),
            i.hasOwnProperty(M) && N !== E && (N != null || E != null))
          )
            if (M === "style")
              if (E) {
                for (m in E)
                  !E.hasOwnProperty(m) ||
                    (N && N.hasOwnProperty(m)) ||
                    (r || (r = {}), (r[m] = ""));
                for (m in N)
                  N.hasOwnProperty(m) &&
                    E[m] !== N[m] &&
                    (r || (r = {}), (r[m] = N[m]));
              } else r || (c || (c = []), c.push(M, r)), (r = N);
            else
              M === "dangerouslySetInnerHTML"
                ? ((N = N ? N.__html : void 0),
                  (E = E ? E.__html : void 0),
                  N != null && E !== N && (c = c || []).push(M, N))
                : M === "children"
                ? (typeof N != "string" && typeof N != "number") ||
                  (c = c || []).push(M, "" + N)
                : M !== "suppressContentEditableWarning" &&
                  M !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(M)
                    ? (N != null && M === "onScroll" && Me("scroll", e),
                      c || E === N || (c = []))
                    : (c = c || []).push(M, N));
        }
        r && (c = c || []).push("style", r);
        var M = c;
        (t.updateQueue = M) && (t.flags |= 4);
      }
    }),
    (Ud = function (e, t, r, i) {
      r !== i && (t.flags |= 4);
    });
  function $o(e, t) {
    if (!De)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var i = null; r !== null; )
            r.alternate !== null && (i = r), (r = r.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      i = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags & 14680064),
          (i |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags),
          (i |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = r), t;
  }
  function Bg(e, t, r) {
    var i = t.pendingProps;
    switch ((Ia(t), t.tag)) {
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
        return ot(t), null;
      case 1:
        return ht(t.type) && $s(), ot(t), null;
      case 3:
        return (
          (i = t.stateNode),
          Vr(),
          Ae(pt),
          Ae(nt),
          Ya(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ks(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ut !== null && (bl(Ut), (Ut = null)))),
          ml(e, t),
          ot(t),
          null
        );
      case 5:
        Ga(t);
        var l = ur(Io.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          Fd(e, t, r, i, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(s(166));
            return ot(t), null;
          }
          if (((e = ur(sn.current)), Ks(t))) {
            (i = t.stateNode), (r = t.type);
            var c = t.memoizedProps;
            switch (((i[on] = t), (i[Mo] = c), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Me("cancel", i), Me("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Me("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < To.length; l++) Me(To[l], i);
                break;
              case "source":
                Me("error", i);
                break;
              case "img":
              case "image":
              case "link":
                Me("error", i), Me("load", i);
                break;
              case "details":
                Me("toggle", i);
                break;
              case "input":
                fs(i, c), Me("invalid", i);
                break;
              case "select":
                (i._wrapperState = { wasMultiple: !!c.multiple }),
                  Me("invalid", i);
                break;
              case "textarea":
                Xt(i, c), Me("invalid", i);
            }
            en(r, c), (l = null);
            for (var m in c)
              if (c.hasOwnProperty(m)) {
                var E = c[m];
                m === "children"
                  ? typeof E == "string"
                    ? i.textContent !== E &&
                      (c.suppressHydrationWarning !== !0 &&
                        Fs(i.textContent, E, e),
                      (l = ["children", E]))
                    : typeof E == "number" &&
                      i.textContent !== "" + E &&
                      (c.suppressHydrationWarning !== !0 &&
                        Fs(i.textContent, E, e),
                      (l = ["children", "" + E]))
                  : u.hasOwnProperty(m) &&
                    E != null &&
                    m === "onScroll" &&
                    Me("scroll", i);
              }
            switch (r) {
              case "input":
                bt(i), Er(i, c, !0);
                break;
              case "textarea":
                bt(i), hs(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (i.onclick = Us);
            }
            (i = l), (t.updateQueue = i), i !== null && (t.flags |= 4);
          } else {
            (m = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = it(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = m.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == "string"
                  ? (e = m.createElement(r, { is: i.is }))
                  : ((e = m.createElement(r)),
                    r === "select" &&
                      ((m = e),
                      i.multiple
                        ? (m.multiple = !0)
                        : i.size && (m.size = i.size)))
                : (e = m.createElementNS(e, r)),
              (e[on] = t),
              (e[Mo] = i),
              zd(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((m = fo(r, i)), r)) {
                case "dialog":
                  Me("cancel", e), Me("close", e), (l = i);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Me("load", e), (l = i);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < To.length; l++) Me(To[l], e);
                  l = i;
                  break;
                case "source":
                  Me("error", e), (l = i);
                  break;
                case "img":
                case "image":
                case "link":
                  Me("error", e), Me("load", e), (l = i);
                  break;
                case "details":
                  Me("toggle", e), (l = i);
                  break;
                case "input":
                  fs(e, i), (l = ao(e, i)), Me("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!i.multiple }),
                    (l = H({}, i, { value: void 0 })),
                    Me("invalid", e);
                  break;
                case "textarea":
                  Xt(e, i), (l = Cr(e, i)), Me("invalid", e);
                  break;
                default:
                  l = i;
              }
              en(r, l), (E = l);
              for (c in E)
                if (E.hasOwnProperty(c)) {
                  var N = E[c];
                  c === "style"
                    ? pn(e, N)
                    : c === "dangerouslySetInnerHTML"
                    ? ((N = N ? N.__html : void 0), N != null && ms(e, N))
                    : c === "children"
                    ? typeof N == "string"
                      ? (r !== "textarea" || N !== "") && Jt(e, N)
                      : typeof N == "number" && Jt(e, "" + N)
                    : c !== "suppressContentEditableWarning" &&
                      c !== "suppressHydrationWarning" &&
                      c !== "autoFocus" &&
                      (u.hasOwnProperty(c)
                        ? N != null && c === "onScroll" && Me("scroll", e)
                        : N != null && D(e, c, N, m));
                }
              switch (r) {
                case "input":
                  bt(e), Er(e, i, !1);
                  break;
                case "textarea":
                  bt(e), hs(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + Se(i.value));
                  break;
                case "select":
                  (e.multiple = !!i.multiple),
                    (c = i.value),
                    c != null
                      ? Pt(e, !!i.multiple, c, !1)
                      : i.defaultValue != null &&
                        Pt(e, !!i.multiple, i.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Us);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return ot(t), null;
      case 6:
        if (e && t.stateNode != null) Ud(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = ur(Io.current)), ur(sn.current), Ks(t))) {
            if (
              ((i = t.stateNode),
              (r = t.memoizedProps),
              (i[on] = t),
              (c = i.nodeValue !== r) && ((e = St), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Fs(i.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Fs(i.nodeValue, r, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i)),
              (i[on] = t),
              (t.stateNode = i);
        }
        return ot(t), null;
      case 13:
        if (
          (Ae(ze),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (De && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Hc(), Ur(), (t.flags |= 98560), (c = !1);
          else if (((c = Ks(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(s(317));
              c[on] = t;
            } else
              Ur(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ot(t), (c = !1);
          } else Ut !== null && (bl(Ut), (Ut = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ze.current & 1) !== 0
                  ? Ke === 0 && (Ke = 3)
                  : Tl())),
            t.updateQueue !== null && (t.flags |= 4),
            ot(t),
            null);
      case 4:
        return (
          Vr(),
          ml(e, t),
          e === null && Ro(t.stateNode.containerInfo),
          ot(t),
          null
        );
      case 10:
        return Ha(t.type._context), ot(t), null;
      case 17:
        return ht(t.type) && $s(), ot(t), null;
      case 19:
        if ((Ae(ze), (c = t.memoizedState), c === null)) return ot(t), null;
        if (((i = (t.flags & 128) !== 0), (m = c.rendering), m === null))
          if (i) $o(c, !1);
          else {
            if (Ke !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((m = Js(e)), m !== null)) {
                  for (
                    t.flags |= 128,
                      $o(c, !1),
                      i = m.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = r,
                      r = t.child;
                    r !== null;

                  )
                    (c = r),
                      (e = i),
                      (c.flags &= 14680066),
                      (m = c.alternate),
                      m === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = m.childLanes),
                          (c.lanes = m.lanes),
                          (c.child = m.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = m.memoizedProps),
                          (c.memoizedState = m.memoizedState),
                          (c.updateQueue = m.updateQueue),
                          (c.type = m.type),
                          (e = m.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Oe(ze, (ze.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Be() > Gr &&
              ((t.flags |= 128), (i = !0), $o(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Js(m)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                $o(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !m.alternate &&
                  !De)
              )
                return ot(t), null;
            } else
              2 * Be() - c.renderingStartTime > Gr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (i = !0), $o(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((m.sibling = t.child), (t.child = m))
            : ((r = c.last),
              r !== null ? (r.sibling = m) : (t.child = m),
              (c.last = m));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Be()),
            (t.sibling = null),
            (r = ze.current),
            Oe(ze, i ? (r & 1) | 2 : r & 1),
            t)
          : (ot(t), null);
      case 22:
      case 23:
        return (
          Pl(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && (t.mode & 1) !== 0
            ? (Ct & 1073741824) !== 0 &&
              (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ot(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function $g(e, t) {
    switch ((Ia(t), t.tag)) {
      case 1:
        return (
          ht(t.type) && $s(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Vr(),
          Ae(pt),
          Ae(nt),
          Ya(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Ga(t), null;
      case 13:
        if (
          (Ae(ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Ur();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ae(ze), null;
      case 4:
        return Vr(), null;
      case 10:
        return Ha(t.type._context), null;
      case 22:
      case 23:
        return Pl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var li = !1,
    st = !1,
    Hg = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function Qr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (i) {
          Ue(e, t, i);
        }
      else r.current = null;
  }
  function gl(e, t, r) {
    try {
      r();
    } catch (i) {
      Ue(e, t, i);
    }
  }
  var Bd = !1;
  function Vg(e, t) {
    if (((Pa = Ps), (e = xc()), wa(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var l = i.anchorOffset,
              c = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType, c.nodeType;
            } catch {
              r = null;
              break e;
            }
            var m = 0,
              E = -1,
              N = -1,
              M = 0,
              B = 0,
              $ = e,
              U = null;
            t: for (;;) {
              for (
                var X;
                $ !== r || (l !== 0 && $.nodeType !== 3) || (E = m + l),
                  $ !== c || (i !== 0 && $.nodeType !== 3) || (N = m + i),
                  $.nodeType === 3 && (m += $.nodeValue.length),
                  (X = $.firstChild) !== null;

              )
                (U = $), ($ = X);
              for (;;) {
                if ($ === e) break t;
                if (
                  (U === r && ++M === l && (E = m),
                  U === c && ++B === i && (N = m),
                  (X = $.nextSibling) !== null)
                )
                  break;
                ($ = U), (U = $.parentNode);
              }
              $ = X;
            }
            r = E === -1 || N === -1 ? null : { start: E, end: N };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Ta = { focusedElem: e, selectionRange: r }, Ps = !1, ee = t;
      ee !== null;

    )
      if (
        ((t = ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (ee = e);
      else
        for (; ee !== null; ) {
          t = ee;
          try {
            var te = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (te !== null) {
                    var ne = te.memoizedProps,
                      $e = te.memoizedState,
                      R = t.stateNode,
                      j = R.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ne : Bt(t.type, ne),
                        $e
                      );
                    R.__reactInternalSnapshotBeforeUpdate = j;
                  }
                  break;
                case 3:
                  var O = t.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (W) {
            Ue(t, t.return, W);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ee = e);
            break;
          }
          ee = t.return;
        }
    return (te = Bd), (Bd = !1), te;
  }
  function Ho(e, t, r) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var l = (i = i.next);
      do {
        if ((l.tag & e) === e) {
          var c = l.destroy;
          (l.destroy = void 0), c !== void 0 && gl(t, r, c);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function ui(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var i = r.create;
          r.destroy = i();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function vl(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function $d(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), $d(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[on],
          delete t[Mo],
          delete t[Aa],
          delete t[bg],
          delete t[jg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Hd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hd(e.return)) return null;
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
  function yl(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Us));
    else if (i !== 4 && ((e = e.child), e !== null))
      for (yl(e, t, r), e = e.sibling; e !== null; )
        yl(e, t, r), (e = e.sibling);
  }
  function xl(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && ((e = e.child), e !== null))
      for (xl(e, t, r), e = e.sibling; e !== null; )
        xl(e, t, r), (e = e.sibling);
  }
  var et = null,
    $t = !1;
  function $n(e, t, r) {
    for (r = r.child; r !== null; ) Wd(e, t, r), (r = r.sibling);
  }
  function Wd(e, t, r) {
    if (rn && typeof rn.onCommitFiberUnmount == "function")
      try {
        rn.onCommitFiberUnmount(Es, r);
      } catch {}
    switch (r.tag) {
      case 5:
        st || Qr(r, t);
      case 6:
        var i = et,
          l = $t;
        (et = null),
          $n(e, t, r),
          (et = i),
          ($t = l),
          et !== null &&
            ($t
              ? ((e = et),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : et.removeChild(r.stateNode));
        break;
      case 18:
        et !== null &&
          ($t
            ? ((e = et),
              (r = r.stateNode),
              e.nodeType === 8
                ? Ma(e.parentNode, r)
                : e.nodeType === 1 && Ma(e, r),
              So(e))
            : Ma(et, r.stateNode));
        break;
      case 4:
        (i = et),
          (l = $t),
          (et = r.stateNode.containerInfo),
          ($t = !0),
          $n(e, t, r),
          (et = i),
          ($t = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !st &&
          ((i = r.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          l = i = i.next;
          do {
            var c = l,
              m = c.destroy;
            (c = c.tag),
              m !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && gl(r, t, m),
              (l = l.next);
          } while (l !== i);
        }
        $n(e, t, r);
        break;
      case 1:
        if (
          !st &&
          (Qr(r, t),
          (i = r.stateNode),
          typeof i.componentWillUnmount == "function")
        )
          try {
            (i.props = r.memoizedProps),
              (i.state = r.memoizedState),
              i.componentWillUnmount();
          } catch (E) {
            Ue(r, t, E);
          }
        $n(e, t, r);
        break;
      case 21:
        $n(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((st = (i = st) || r.memoizedState !== null), $n(e, t, r), (st = i))
          : $n(e, t, r);
        break;
      default:
        $n(e, t, r);
    }
  }
  function Qd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Hg()),
        t.forEach(function (i) {
          var l = Jg.bind(null, e, i);
          r.has(i) || (r.add(i), i.then(l, l));
        });
    }
  }
  function Ht(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var l = r[i];
        try {
          var c = e,
            m = t,
            E = m;
          e: for (; E !== null; ) {
            switch (E.tag) {
              case 5:
                (et = E.stateNode), ($t = !1);
                break e;
              case 3:
                (et = E.stateNode.containerInfo), ($t = !0);
                break e;
              case 4:
                (et = E.stateNode.containerInfo), ($t = !0);
                break e;
            }
            E = E.return;
          }
          if (et === null) throw Error(s(160));
          Wd(c, m, l), (et = null), ($t = !1);
          var N = l.alternate;
          N !== null && (N.return = null), (l.return = null);
        } catch (M) {
          Ue(l, t, M);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Kd(t, e), (t = t.sibling);
  }
  function Kd(e, t) {
    var r = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ht(t, e), ln(e), i & 4)) {
          try {
            Ho(3, e, e.return), ui(3, e);
          } catch (ne) {
            Ue(e, e.return, ne);
          }
          try {
            Ho(5, e, e.return);
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        }
        break;
      case 1:
        Ht(t, e), ln(e), i & 512 && r !== null && Qr(r, r.return);
        break;
      case 5:
        if (
          (Ht(t, e),
          ln(e),
          i & 512 && r !== null && Qr(r, r.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Jt(l, "");
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        }
        if (i & 4 && ((l = e.stateNode), l != null)) {
          var c = e.memoizedProps,
            m = r !== null ? r.memoizedProps : c,
            E = e.type,
            N = e.updateQueue;
          if (((e.updateQueue = null), N !== null))
            try {
              E === "input" && c.type === "radio" && c.name != null && lo(l, c),
                fo(E, m);
              var M = fo(E, c);
              for (m = 0; m < N.length; m += 2) {
                var B = N[m],
                  $ = N[m + 1];
                B === "style"
                  ? pn(l, $)
                  : B === "dangerouslySetInnerHTML"
                  ? ms(l, $)
                  : B === "children"
                  ? Jt(l, $)
                  : D(l, B, $, M);
              }
              switch (E) {
                case "input":
                  uo(l, c);
                  break;
                case "textarea":
                  ps(l, c);
                  break;
                case "select":
                  var U = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!c.multiple;
                  var X = c.value;
                  X != null
                    ? Pt(l, !!c.multiple, X, !1)
                    : U !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Pt(l, !!c.multiple, c.defaultValue, !0)
                        : Pt(l, !!c.multiple, c.multiple ? [] : "", !1));
              }
              l[Mo] = c;
            } catch (ne) {
              Ue(e, e.return, ne);
            }
        }
        break;
      case 6:
        if ((Ht(t, e), ln(e), i & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.stateNode), (c = e.memoizedProps);
          try {
            l.nodeValue = c;
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          (Ht(t, e), ln(e), i & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            So(t.containerInfo);
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        break;
      case 4:
        Ht(t, e), ln(e);
        break;
      case 13:
        Ht(t, e),
          ln(e),
          (l = e.child),
          l.flags & 8192 &&
            ((c = l.memoizedState !== null),
            (l.stateNode.isHidden = c),
            !c ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (El = Be())),
          i & 4 && Qd(e);
        break;
      case 22:
        if (
          ((B = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((st = (M = st) || B), Ht(t, e), (st = M)) : Ht(t, e),
          ln(e),
          i & 8192)
        ) {
          if (
            ((M = e.memoizedState !== null),
            (e.stateNode.isHidden = M) && !B && (e.mode & 1) !== 0)
          )
            for (ee = e, B = e.child; B !== null; ) {
              for ($ = ee = B; ee !== null; ) {
                switch (((U = ee), (X = U.child), U.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ho(4, U, U.return);
                    break;
                  case 1:
                    Qr(U, U.return);
                    var te = U.stateNode;
                    if (typeof te.componentWillUnmount == "function") {
                      (i = U), (r = U.return);
                      try {
                        (t = i),
                          (te.props = t.memoizedProps),
                          (te.state = t.memoizedState),
                          te.componentWillUnmount();
                      } catch (ne) {
                        Ue(i, r, ne);
                      }
                    }
                    break;
                  case 5:
                    Qr(U, U.return);
                    break;
                  case 22:
                    if (U.memoizedState !== null) {
                      Yd($);
                      continue;
                    }
                }
                X !== null ? ((X.return = U), (ee = X)) : Yd($);
              }
              B = B.sibling;
            }
          e: for (B = null, $ = e; ; ) {
            if ($.tag === 5) {
              if (B === null) {
                B = $;
                try {
                  (l = $.stateNode),
                    M
                      ? ((c = l.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((E = $.stateNode),
                        (N = $.memoizedProps.style),
                        (m =
                          N != null && N.hasOwnProperty("display")
                            ? N.display
                            : null),
                        (E.style.display = Nr("display", m)));
                } catch (ne) {
                  Ue(e, e.return, ne);
                }
              }
            } else if ($.tag === 6) {
              if (B === null)
                try {
                  $.stateNode.nodeValue = M ? "" : $.memoizedProps;
                } catch (ne) {
                  Ue(e, e.return, ne);
                }
            } else if (
              (($.tag !== 22 && $.tag !== 23) ||
                $.memoizedState === null ||
                $ === e) &&
              $.child !== null
            ) {
              ($.child.return = $), ($ = $.child);
              continue;
            }
            if ($ === e) break e;
            for (; $.sibling === null; ) {
              if ($.return === null || $.return === e) break e;
              B === $ && (B = null), ($ = $.return);
            }
            B === $ && (B = null),
              ($.sibling.return = $.return),
              ($ = $.sibling);
          }
        }
        break;
      case 19:
        Ht(t, e), ln(e), i & 4 && Qd(e);
        break;
      case 21:
        break;
      default:
        Ht(t, e), ln(e);
    }
  }
  function ln(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Hd(r)) {
              var i = r;
              break e;
            }
            r = r.return;
          }
          throw Error(s(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && (Jt(l, ""), (i.flags &= -33));
            var c = Vd(e);
            xl(e, c, l);
            break;
          case 3:
          case 4:
            var m = i.stateNode.containerInfo,
              E = Vd(e);
            yl(e, E, m);
            break;
          default:
            throw Error(s(161));
        }
      } catch (N) {
        Ue(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wg(e, t, r) {
    (ee = e), Gd(e);
  }
  function Gd(e, t, r) {
    for (var i = (e.mode & 1) !== 0; ee !== null; ) {
      var l = ee,
        c = l.child;
      if (l.tag === 22 && i) {
        var m = l.memoizedState !== null || li;
        if (!m) {
          var E = l.alternate,
            N = (E !== null && E.memoizedState !== null) || st;
          E = li;
          var M = st;
          if (((li = m), (st = N) && !M))
            for (ee = l; ee !== null; )
              (m = ee),
                (N = m.child),
                m.tag === 22 && m.memoizedState !== null
                  ? Xd(l)
                  : N !== null
                  ? ((N.return = m), (ee = N))
                  : Xd(l);
          for (; c !== null; ) (ee = c), Gd(c), (c = c.sibling);
          (ee = l), (li = E), (st = M);
        }
        qd(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && c !== null
          ? ((c.return = l), (ee = c))
          : qd(e);
    }
  }
  function qd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                st || ui(5, t);
                break;
              case 1:
                var i = t.stateNode;
                if (t.flags & 4 && !st)
                  if (r === null) i.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Bt(t.type, r.memoizedProps);
                    i.componentDidUpdate(
                      l,
                      r.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var c = t.updateQueue;
                c !== null && Yc(t, c, i);
                break;
              case 3:
                var m = t.updateQueue;
                if (m !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Yc(t, m, r);
                }
                break;
              case 5:
                var E = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = E;
                  var N = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && r.focus();
                      break;
                    case "img":
                      N.src && (r.src = N.src);
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
                  var M = t.alternate;
                  if (M !== null) {
                    var B = M.memoizedState;
                    if (B !== null) {
                      var $ = B.dehydrated;
                      $ !== null && So($);
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
                throw Error(s(163));
            }
          st || (t.flags & 512 && vl(t));
        } catch (U) {
          Ue(t, t.return, U);
        }
      }
      if (t === e) {
        ee = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (ee = r);
        break;
      }
      ee = t.return;
    }
  }
  function Yd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if (t === e) {
        ee = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (ee = r);
        break;
      }
      ee = t.return;
    }
  }
  function Xd(e) {
    for (; ee !== null; ) {
      var t = ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              ui(4, t);
            } catch (N) {
              Ue(t, r, N);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (N) {
                Ue(t, l, N);
              }
            }
            var c = t.return;
            try {
              vl(t);
            } catch (N) {
              Ue(t, c, N);
            }
            break;
          case 5:
            var m = t.return;
            try {
              vl(t);
            } catch (N) {
              Ue(t, m, N);
            }
        }
      } catch (N) {
        Ue(t, t.return, N);
      }
      if (t === e) {
        ee = null;
        break;
      }
      var E = t.sibling;
      if (E !== null) {
        (E.return = t.return), (ee = E);
        break;
      }
      ee = t.return;
    }
  }
  var Qg = Math.ceil,
    ci = F.ReactCurrentDispatcher,
    wl = F.ReactCurrentOwner,
    At = F.ReactCurrentBatchConfig,
    Ce = 0,
    Ye = null,
    Ve = null,
    tt = 0,
    Ct = 0,
    Kr = In(0),
    Ke = 0,
    Vo = null,
    dr = 0,
    di = 0,
    Sl = 0,
    Wo = null,
    gt = null,
    El = 0,
    Gr = 1 / 0,
    Sn = null,
    fi = !1,
    Cl = null,
    Hn = null,
    pi = !1,
    Vn = null,
    hi = 0,
    Qo = 0,
    kl = null,
    mi = -1,
    gi = 0;
  function ut() {
    return (Ce & 6) !== 0 ? Be() : mi !== -1 ? mi : (mi = Be());
  }
  function Wn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ce & 2) !== 0 && tt !== 0
      ? tt & -tt
      : Tg.transition !== null
      ? (gi === 0 && (gi = Vu()), gi)
      : ((e = je),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ju(e.type))),
        e);
  }
  function Vt(e, t, r, i) {
    if (50 < Qo) throw ((Qo = 0), (kl = null), Error(s(185)));
    go(e, r, i),
      ((Ce & 2) === 0 || e !== Ye) &&
        (e === Ye && ((Ce & 2) === 0 && (di |= r), Ke === 4 && Qn(e, tt)),
        vt(e, i),
        r === 1 &&
          Ce === 0 &&
          (t.mode & 1) === 0 &&
          ((Gr = Be() + 500), Vs && Fn()));
  }
  function vt(e, t) {
    var r = e.callbackNode;
    Tm(e, t);
    var i = Ns(e, e === Ye ? tt : 0);
    if (i === 0)
      r !== null && Bu(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((r != null && Bu(r), t === 1))
        e.tag === 0 ? Pg(Jd.bind(null, e)) : zc(Jd.bind(null, e)),
          kg(function () {
            (Ce & 6) === 0 && Fn();
          }),
          (r = null);
      else {
        switch (Wu(i)) {
          case 1:
            r = ra;
            break;
          case 4:
            r = $u;
            break;
          case 16:
            r = Ss;
            break;
          case 536870912:
            r = Hu;
            break;
          default:
            r = Ss;
        }
        r = lf(r, Zd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Zd(e, t) {
    if (((mi = -1), (gi = 0), (Ce & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (qr() && e.callbackNode !== r) return null;
    var i = Ns(e, e === Ye ? tt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = vi(e, i);
    else {
      t = i;
      var l = Ce;
      Ce |= 2;
      var c = tf();
      (Ye !== e || tt !== t) && ((Sn = null), (Gr = Be() + 500), pr(e, t));
      do
        try {
          qg();
          break;
        } catch (E) {
          ef(e, E);
        }
      while (!0);
      $a(),
        (ci.current = c),
        (Ce = l),
        Ve !== null ? (t = 0) : ((Ye = null), (tt = 0), (t = Ke));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = oa(e)), l !== 0 && ((i = l), (t = Nl(e, l)))),
        t === 1)
      )
        throw ((r = Vo), pr(e, 0), Qn(e, i), vt(e, Be()), r);
      if (t === 6) Qn(e, i);
      else {
        if (
          ((l = e.current.alternate),
          (i & 30) === 0 &&
            !Kg(l) &&
            ((t = vi(e, i)),
            t === 2 && ((c = oa(e)), c !== 0 && ((i = c), (t = Nl(e, c)))),
            t === 1))
        )
          throw ((r = Vo), pr(e, 0), Qn(e, i), vt(e, Be()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            hr(e, gt, Sn);
            break;
          case 3:
            if (
              (Qn(e, i),
              (i & 130023424) === i && ((t = El + 500 - Be()), 10 < t))
            ) {
              if (Ns(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & i) !== i)) {
                ut(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Oa(hr.bind(null, e, gt, Sn), t);
              break;
            }
            hr(e, gt, Sn);
            break;
          case 4:
            if ((Qn(e, i), (i & 4194240) === i)) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var m = 31 - zt(i);
              (c = 1 << m), (m = t[m]), m > l && (l = m), (i &= ~c);
            }
            if (
              ((i = l),
              (i = Be() - i),
              (i =
                (120 > i
                  ? 120
                  : 480 > i
                  ? 480
                  : 1080 > i
                  ? 1080
                  : 1920 > i
                  ? 1920
                  : 3e3 > i
                  ? 3e3
                  : 4320 > i
                  ? 4320
                  : 1960 * Qg(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = Oa(hr.bind(null, e, gt, Sn), i);
              break;
            }
            hr(e, gt, Sn);
            break;
          case 5:
            hr(e, gt, Sn);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return vt(e, Be()), e.callbackNode === r ? Zd.bind(null, e) : null;
  }
  function Nl(e, t) {
    var r = Wo;
    return (
      e.current.memoizedState.isDehydrated && (pr(e, t).flags |= 256),
      (e = vi(e, t)),
      e !== 2 && ((t = gt), (gt = r), t !== null && bl(t)),
      e
    );
  }
  function bl(e) {
    gt === null ? (gt = e) : gt.push.apply(gt, e);
  }
  function Kg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var i = 0; i < r.length; i++) {
            var l = r[i],
              c = l.getSnapshot;
            l = l.value;
            try {
              if (!Ft(c(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
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
  function Qn(e, t) {
    for (
      t &= ~Sl,
        t &= ~di,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - zt(t),
        i = 1 << r;
      (e[r] = -1), (t &= ~i);
    }
  }
  function Jd(e) {
    if ((Ce & 6) !== 0) throw Error(s(327));
    qr();
    var t = Ns(e, 0);
    if ((t & 1) === 0) return vt(e, Be()), null;
    var r = vi(e, t);
    if (e.tag !== 0 && r === 2) {
      var i = oa(e);
      i !== 0 && ((t = i), (r = Nl(e, i)));
    }
    if (r === 1) throw ((r = Vo), pr(e, 0), Qn(e, t), vt(e, Be()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      hr(e, gt, Sn),
      vt(e, Be()),
      null
    );
  }
  function jl(e, t) {
    var r = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      (Ce = r), Ce === 0 && ((Gr = Be() + 500), Vs && Fn());
    }
  }
  function fr(e) {
    Vn !== null && Vn.tag === 0 && (Ce & 6) === 0 && qr();
    var t = Ce;
    Ce |= 1;
    var r = At.transition,
      i = je;
    try {
      if (((At.transition = null), (je = 1), e)) return e();
    } finally {
      (je = i), (At.transition = r), (Ce = t), (Ce & 6) === 0 && Fn();
    }
  }
  function Pl() {
    (Ct = Kr.current), Ae(Kr);
  }
  function pr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Cg(r)), Ve !== null))
      for (r = Ve.return; r !== null; ) {
        var i = r;
        switch ((Ia(i), i.tag)) {
          case 1:
            (i = i.type.childContextTypes), i != null && $s();
            break;
          case 3:
            Vr(), Ae(pt), Ae(nt), Ya();
            break;
          case 5:
            Ga(i);
            break;
          case 4:
            Vr();
            break;
          case 13:
            Ae(ze);
            break;
          case 19:
            Ae(ze);
            break;
          case 10:
            Ha(i.type._context);
            break;
          case 22:
          case 23:
            Pl();
        }
        r = r.return;
      }
    if (
      ((Ye = e),
      (Ve = e = Kn(e.current, null)),
      (tt = Ct = t),
      (Ke = 0),
      (Vo = null),
      (Sl = di = dr = 0),
      (gt = Wo = null),
      lr !== null)
    ) {
      for (t = 0; t < lr.length; t++)
        if (((r = lr[t]), (i = r.interleaved), i !== null)) {
          r.interleaved = null;
          var l = i.next,
            c = r.pending;
          if (c !== null) {
            var m = c.next;
            (c.next = l), (i.next = m);
          }
          r.pending = i;
        }
      lr = null;
    }
    return e;
  }
  function ef(e, t) {
    do {
      var r = Ve;
      try {
        if (($a(), (ei.current = oi), ti)) {
          for (var i = Fe.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), (i = i.next);
          }
          ti = !1;
        }
        if (
          ((cr = 0),
          (qe = Qe = Fe = null),
          (zo = !1),
          (Fo = 0),
          (wl.current = null),
          r === null || r.return === null)
        ) {
          (Ke = 1), (Vo = t), (Ve = null);
          break;
        }
        e: {
          var c = e,
            m = r.return,
            E = r,
            N = t;
          if (
            ((t = tt),
            (E.flags |= 32768),
            N !== null && typeof N == "object" && typeof N.then == "function")
          ) {
            var M = N,
              B = E,
              $ = B.tag;
            if ((B.mode & 1) === 0 && ($ === 0 || $ === 11 || $ === 15)) {
              var U = B.alternate;
              U
                ? ((B.updateQueue = U.updateQueue),
                  (B.memoizedState = U.memoizedState),
                  (B.lanes = U.lanes))
                : ((B.updateQueue = null), (B.memoizedState = null));
            }
            var X = Nd(m);
            if (X !== null) {
              (X.flags &= -257),
                bd(X, m, E, c, t),
                X.mode & 1 && kd(c, M, t),
                (t = X),
                (N = M);
              var te = t.updateQueue;
              if (te === null) {
                var ne = new Set();
                ne.add(N), (t.updateQueue = ne);
              } else te.add(N);
              break e;
            } else {
              if ((t & 1) === 0) {
                kd(c, M, t), Tl();
                break e;
              }
              N = Error(s(426));
            }
          } else if (De && E.mode & 1) {
            var $e = Nd(m);
            if ($e !== null) {
              ($e.flags & 65536) === 0 && ($e.flags |= 256),
                bd($e, m, E, c, t),
                Ua(Wr(N, E));
              break e;
            }
          }
          (c = N = Wr(N, E)),
            Ke !== 4 && (Ke = 2),
            Wo === null ? (Wo = [c]) : Wo.push(c),
            (c = m);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var R = Ed(c, N, t);
                qc(c, R);
                break e;
              case 1:
                E = N;
                var j = c.type,
                  O = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof j.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (Hn === null || !Hn.has(O))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var W = Cd(c, E, t);
                  qc(c, W);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        rf(r);
      } catch (oe) {
        (t = oe), Ve === r && r !== null && (Ve = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function tf() {
    var e = ci.current;
    return (ci.current = oi), e === null ? oi : e;
  }
  function Tl() {
    (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
      Ye === null ||
        ((dr & 268435455) === 0 && (di & 268435455) === 0) ||
        Qn(Ye, tt);
  }
  function vi(e, t) {
    var r = Ce;
    Ce |= 2;
    var i = tf();
    (Ye !== e || tt !== t) && ((Sn = null), pr(e, t));
    do
      try {
        Gg();
        break;
      } catch (l) {
        ef(e, l);
      }
    while (!0);
    if (($a(), (Ce = r), (ci.current = i), Ve !== null)) throw Error(s(261));
    return (Ye = null), (tt = 0), Ke;
  }
  function Gg() {
    for (; Ve !== null; ) nf(Ve);
  }
  function qg() {
    for (; Ve !== null && !wm(); ) nf(Ve);
  }
  function nf(e) {
    var t = af(e.alternate, e, Ct);
    (e.memoizedProps = e.pendingProps),
      t === null ? rf(e) : (Ve = t),
      (wl.current = null);
  }
  function rf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Bg(r, t, Ct)), r !== null)) {
          Ve = r;
          return;
        }
      } else {
        if (((r = $g(r, t)), r !== null)) {
          (r.flags &= 32767), (Ve = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ke = 6), (Ve = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ve = t;
        return;
      }
      Ve = t = e;
    } while (t !== null);
    Ke === 0 && (Ke = 5);
  }
  function hr(e, t, r) {
    var i = je,
      l = At.transition;
    try {
      (At.transition = null), (je = 1), Yg(e, t, r, i);
    } finally {
      (At.transition = l), (je = i);
    }
    return null;
  }
  function Yg(e, t, r, i) {
    do qr();
    while (Vn !== null);
    if ((Ce & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var l = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = r.lanes | r.childLanes;
    if (
      (Rm(e, c),
      e === Ye && ((Ve = Ye = null), (tt = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        pi ||
        ((pi = !0),
        lf(Ss, function () {
          return qr(), null;
        })),
      (c = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || c)
    ) {
      (c = At.transition), (At.transition = null);
      var m = je;
      je = 1;
      var E = Ce;
      (Ce |= 4),
        (wl.current = null),
        Vg(e, r),
        Kd(r, e),
        gg(Ta),
        (Ps = !!Pa),
        (Ta = Pa = null),
        (e.current = r),
        Wg(r),
        Sm(),
        (Ce = E),
        (je = m),
        (At.transition = c);
    } else e.current = r;
    if (
      (pi && ((pi = !1), (Vn = e), (hi = l)),
      (c = e.pendingLanes),
      c === 0 && (Hn = null),
      km(r.stateNode),
      vt(e, Be()),
      t !== null)
    )
      for (i = e.onRecoverableError, r = 0; r < t.length; r++)
        (l = t[r]), i(l.value, { componentStack: l.stack, digest: l.digest });
    if (fi) throw ((fi = !1), (e = Cl), (Cl = null), e);
    return (
      (hi & 1) !== 0 && e.tag !== 0 && qr(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === kl ? Qo++ : ((Qo = 0), (kl = e))) : (Qo = 0),
      Fn(),
      null
    );
  }
  function qr() {
    if (Vn !== null) {
      var e = Wu(hi),
        t = At.transition,
        r = je;
      try {
        if (((At.transition = null), (je = 16 > e ? 16 : e), Vn === null))
          var i = !1;
        else {
          if (((e = Vn), (Vn = null), (hi = 0), (Ce & 6) !== 0))
            throw Error(s(331));
          var l = Ce;
          for (Ce |= 4, ee = e.current; ee !== null; ) {
            var c = ee,
              m = c.child;
            if ((ee.flags & 16) !== 0) {
              var E = c.deletions;
              if (E !== null) {
                for (var N = 0; N < E.length; N++) {
                  var M = E[N];
                  for (ee = M; ee !== null; ) {
                    var B = ee;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ho(8, B, c);
                    }
                    var $ = B.child;
                    if ($ !== null) ($.return = B), (ee = $);
                    else
                      for (; ee !== null; ) {
                        B = ee;
                        var U = B.sibling,
                          X = B.return;
                        if (($d(B), B === M)) {
                          ee = null;
                          break;
                        }
                        if (U !== null) {
                          (U.return = X), (ee = U);
                          break;
                        }
                        ee = X;
                      }
                  }
                }
                var te = c.alternate;
                if (te !== null) {
                  var ne = te.child;
                  if (ne !== null) {
                    te.child = null;
                    do {
                      var $e = ne.sibling;
                      (ne.sibling = null), (ne = $e);
                    } while (ne !== null);
                  }
                }
                ee = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && m !== null)
              (m.return = c), (ee = m);
            else
              e: for (; ee !== null; ) {
                if (((c = ee), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(9, c, c.return);
                  }
                var R = c.sibling;
                if (R !== null) {
                  (R.return = c.return), (ee = R);
                  break e;
                }
                ee = c.return;
              }
          }
          var j = e.current;
          for (ee = j; ee !== null; ) {
            m = ee;
            var O = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && O !== null)
              (O.return = m), (ee = O);
            else
              e: for (m = j; ee !== null; ) {
                if (((E = ee), (E.flags & 2048) !== 0))
                  try {
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ui(9, E);
                    }
                  } catch (oe) {
                    Ue(E, E.return, oe);
                  }
                if (E === m) {
                  ee = null;
                  break e;
                }
                var W = E.sibling;
                if (W !== null) {
                  (W.return = E.return), (ee = W);
                  break e;
                }
                ee = E.return;
              }
          }
          if (
            ((Ce = l),
            Fn(),
            rn && typeof rn.onPostCommitFiberRoot == "function")
          )
            try {
              rn.onPostCommitFiberRoot(Es, e);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (je = r), (At.transition = t);
      }
    }
    return !1;
  }
  function of(e, t, r) {
    (t = Wr(r, t)),
      (t = Ed(e, t, 1)),
      (e = Bn(e, t, 1)),
      (t = ut()),
      e !== null && (go(e, 1, t), vt(e, t));
  }
  function Ue(e, t, r) {
    if (e.tag === 3) of(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          of(t, e, r);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Hn === null || !Hn.has(i)))
          ) {
            (e = Wr(r, e)),
              (e = Cd(t, e, 1)),
              (t = Bn(t, e, 1)),
              (e = ut()),
              t !== null && (go(t, 1, e), vt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Xg(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (t = ut()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Ye === e &&
        (tt & r) === r &&
        (Ke === 4 || (Ke === 3 && (tt & 130023424) === tt && 500 > Be() - El)
          ? pr(e, 0)
          : (Sl |= r)),
      vt(e, t);
  }
  function sf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = ks), (ks <<= 1), (ks & 130023424) === 0 && (ks = 4194304)));
    var r = ut();
    (e = yn(e, t)), e !== null && (go(e, t, r), vt(e, r));
  }
  function Zg(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), sf(e, r);
  }
  function Jg(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          l = e.memoizedState;
        l !== null && (r = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    i !== null && i.delete(t), sf(e, r);
  }
  var af;
  af = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || pt.current) mt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (mt = !1), Ug(e, t, r);
        mt = (e.flags & 131072) !== 0;
      }
    else (mt = !1), De && (t.flags & 1048576) !== 0 && Fc(t, Qs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type;
        ai(e, t), (e = t.pendingProps);
        var l = Ir(t, nt.current);
        Hr(t, r), (l = Ja(null, t, i, e, l, r));
        var c = el();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ht(i) ? ((c = !0), Hs(t)) : (c = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Qa(t),
              (l.updater = si),
              (t.stateNode = l),
              (l._reactInternals = t),
              il(t, i, e, r),
              (t = cl(null, t, i, !0, c, r)))
            : ((t.tag = 0), De && c && Da(t), lt(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        i = t.elementType;
        e: {
          switch (
            (ai(e, t),
            (e = t.pendingProps),
            (l = i._init),
            (i = l(i._payload)),
            (t.type = i),
            (l = t.tag = tv(i)),
            (e = Bt(i, e)),
            l)
          ) {
            case 0:
              t = ul(null, t, i, e, r);
              break e;
            case 1:
              t = Md(null, t, i, e, r);
              break e;
            case 11:
              t = jd(null, t, i, e, r);
              break e;
            case 14:
              t = Pd(null, t, i, Bt(i.type, e), r);
              break e;
          }
          throw Error(s(306, i, ""));
        }
        return t;
      case 0:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Bt(i, l)),
          ul(e, t, i, l, r)
        );
      case 1:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Bt(i, l)),
          Md(e, t, i, l, r)
        );
      case 3:
        e: {
          if ((Ad(t), e === null)) throw Error(s(387));
          (i = t.pendingProps),
            (c = t.memoizedState),
            (l = c.element),
            Gc(e, t),
            Zs(t, i, null, r);
          var m = t.memoizedState;
          if (((i = m.element), c.isDehydrated))
            if (
              ((c = {
                element: i,
                isDehydrated: !1,
                cache: m.cache,
                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                transitions: m.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (l = Wr(Error(s(423)), t)), (t = _d(e, t, i, r, l));
              break e;
            } else if (i !== l) {
              (l = Wr(Error(s(424)), t)), (t = _d(e, t, i, r, l));
              break e;
            } else
              for (
                Et = Dn(t.stateNode.containerInfo.firstChild),
                  St = t,
                  De = !0,
                  Ut = null,
                  r = Qc(t, null, i, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Ur(), i === l)) {
              t = wn(e, t, r);
              break e;
            }
            lt(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Xc(t),
          e === null && Fa(t),
          (i = t.type),
          (l = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (m = l.children),
          Ra(i, l) ? (m = null) : c !== null && Ra(i, c) && (t.flags |= 32),
          Od(e, t),
          lt(e, t, m, r),
          t.child
        );
      case 6:
        return e === null && Fa(t), null;
      case 13:
        return Ld(e, t, r);
      case 4:
        return (
          Ka(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = Br(t, null, i, r)) : lt(e, t, i, r),
          t.child
        );
      case 11:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Bt(i, l)),
          jd(e, t, i, l, r)
        );
      case 7:
        return lt(e, t, t.pendingProps, r), t.child;
      case 8:
        return lt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return lt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((i = t.type._context),
            (l = t.pendingProps),
            (c = t.memoizedProps),
            (m = l.value),
            Oe(qs, i._currentValue),
            (i._currentValue = m),
            c !== null)
          )
            if (Ft(c.value, m)) {
              if (c.children === l.children && !pt.current) {
                t = wn(e, t, r);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var E = c.dependencies;
                if (E !== null) {
                  m = c.child;
                  for (var N = E.firstContext; N !== null; ) {
                    if (N.context === i) {
                      if (c.tag === 1) {
                        (N = xn(-1, r & -r)), (N.tag = 2);
                        var M = c.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var B = M.pending;
                          B === null
                            ? (N.next = N)
                            : ((N.next = B.next), (B.next = N)),
                            (M.pending = N);
                        }
                      }
                      (c.lanes |= r),
                        (N = c.alternate),
                        N !== null && (N.lanes |= r),
                        Va(c.return, r, t),
                        (E.lanes |= r);
                      break;
                    }
                    N = N.next;
                  }
                } else if (c.tag === 10) m = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((m = c.return), m === null)) throw Error(s(341));
                  (m.lanes |= r),
                    (E = m.alternate),
                    E !== null && (E.lanes |= r),
                    Va(m, r, t),
                    (m = c.sibling);
                } else m = c.child;
                if (m !== null) m.return = c;
                else
                  for (m = c; m !== null; ) {
                    if (m === t) {
                      m = null;
                      break;
                    }
                    if (((c = m.sibling), c !== null)) {
                      (c.return = m.return), (m = c);
                      break;
                    }
                    m = m.return;
                  }
                c = m;
              }
          lt(e, t, l.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (i = t.pendingProps.children),
          Hr(t, r),
          (l = Ot(l)),
          (i = i(l)),
          (t.flags |= 1),
          lt(e, t, i, r),
          t.child
        );
      case 14:
        return (
          (i = t.type),
          (l = Bt(i, t.pendingProps)),
          (l = Bt(i.type, l)),
          Pd(e, t, i, l, r)
        );
      case 15:
        return Td(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Bt(i, l)),
          ai(e, t),
          (t.tag = 1),
          ht(i) ? ((e = !0), Hs(t)) : (e = !1),
          Hr(t, r),
          wd(t, i, l),
          il(t, i, l, r),
          cl(null, t, i, !0, e, r)
        );
      case 19:
        return Id(e, t, r);
      case 22:
        return Rd(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function lf(e, t) {
    return Uu(e, t);
  }
  function ev(e, t, r, i) {
    (this.tag = e),
      (this.key = r),
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
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function _t(e, t, r, i) {
    return new ev(e, t, r, i);
  }
  function Rl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function tv(e) {
    if (typeof e == "function") return Rl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Z)) return 11;
      if (e === me) return 14;
    }
    return 2;
  }
  function Kn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = _t(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function yi(e, t, r, i, l, c) {
    var m = 2;
    if (((i = e), typeof e == "function")) Rl(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else
      e: switch (e) {
        case q:
          return mr(r.children, l, c, t);
        case ce:
          (m = 8), (l |= 8);
          break;
        case ge:
          return (
            (e = _t(12, r, t, l | 2)), (e.elementType = ge), (e.lanes = c), e
          );
        case he:
          return (e = _t(13, r, t, l)), (e.elementType = he), (e.lanes = c), e;
        case G:
          return (e = _t(19, r, t, l)), (e.elementType = G), (e.lanes = c), e;
        case re:
          return xi(r, l, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case pe:
                m = 10;
                break e;
              case xe:
                m = 9;
                break e;
              case Z:
                m = 11;
                break e;
              case me:
                m = 14;
                break e;
              case se:
                (m = 16), (i = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = _t(m, r, t, l)), (t.elementType = e), (t.type = i), (t.lanes = c), t
    );
  }
  function mr(e, t, r, i) {
    return (e = _t(7, e, i, t)), (e.lanes = r), e;
  }
  function xi(e, t, r, i) {
    return (
      (e = _t(22, e, i, t)),
      (e.elementType = re),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ol(e, t, r) {
    return (e = _t(6, e, null, t)), (e.lanes = r), e;
  }
  function Ml(e, t, r) {
    return (
      (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function nv(e, t, r, i, l) {
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
      (this.eventTimes = sa(0)),
      (this.expirationTimes = sa(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = sa(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Al(e, t, r, i, l, c, m, E, N) {
    return (
      (e = new nv(e, t, r, E, N)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = _t(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: i,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Qa(c),
      e
    );
  }
  function rv(e, t, r) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: K,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function uf(e) {
    if (!e) return zn;
    e = e._reactInternals;
    e: {
      if (rr(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ht(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (ht(r)) return Dc(e, r, t);
    }
    return t;
  }
  function cf(e, t, r, i, l, c, m, E, N) {
    return (
      (e = Al(r, i, !0, e, l, c, m, E, N)),
      (e.context = uf(null)),
      (r = e.current),
      (i = ut()),
      (l = Wn(r)),
      (c = xn(i, l)),
      (c.callback = t ?? null),
      Bn(r, c, l),
      (e.current.lanes = l),
      go(e, l, i),
      vt(e, i),
      e
    );
  }
  function wi(e, t, r, i) {
    var l = t.current,
      c = ut(),
      m = Wn(l);
    return (
      (r = uf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = xn(c, m)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = Bn(l, t, m)),
      e !== null && (Vt(e, l, m, c), Xs(e, l, m)),
      m
    );
  }
  function Si(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function df(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function _l(e, t) {
    df(e, t), (e = e.alternate) && df(e, t);
  }
  function ov() {
    return null;
  }
  var ff =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ll(e) {
    this._internalRoot = e;
  }
  (Ei.prototype.render = Ll.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      wi(e, t, null, null);
    }),
    (Ei.prototype.unmount = Ll.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fr(function () {
            wi(null, e, null, null);
          }),
            (t[hn] = null);
        }
      });
  function Ei(e) {
    this._internalRoot = e;
  }
  Ei.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < An.length && t !== 0 && t < An[r].priority; r++);
      An.splice(r, 0, e), r === 0 && Xu(e);
    }
  };
  function Dl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ci(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function pf() {}
  function sv(e, t, r, i, l) {
    if (l) {
      if (typeof i == "function") {
        var c = i;
        i = function () {
          var M = Si(m);
          c.call(M);
        };
      }
      var m = cf(t, i, e, 0, null, !1, !1, "", pf);
      return (
        (e._reactRootContainer = m),
        (e[hn] = m.current),
        Ro(e.nodeType === 8 ? e.parentNode : e),
        fr(),
        m
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof i == "function") {
      var E = i;
      i = function () {
        var M = Si(N);
        E.call(M);
      };
    }
    var N = Al(e, 0, !1, null, null, !1, !1, "", pf);
    return (
      (e._reactRootContainer = N),
      (e[hn] = N.current),
      Ro(e.nodeType === 8 ? e.parentNode : e),
      fr(function () {
        wi(t, N, r, i);
      }),
      N
    );
  }
  function ki(e, t, r, i, l) {
    var c = r._reactRootContainer;
    if (c) {
      var m = c;
      if (typeof l == "function") {
        var E = l;
        l = function () {
          var N = Si(m);
          E.call(N);
        };
      }
      wi(t, m, e, l);
    } else m = sv(r, t, e, l, i);
    return Si(m);
  }
  (Qu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = mo(t.pendingLanes);
          r !== 0 &&
            (ia(t, r | 1),
            vt(t, Be()),
            (Ce & 6) === 0 && ((Gr = Be() + 500), Fn()));
        }
        break;
      case 13:
        fr(function () {
          var i = yn(e, 1);
          if (i !== null) {
            var l = ut();
            Vt(i, e, 1, l);
          }
        }),
          _l(e, 1);
    }
  }),
    (aa = function (e) {
      if (e.tag === 13) {
        var t = yn(e, 134217728);
        if (t !== null) {
          var r = ut();
          Vt(t, e, 134217728, r);
        }
        _l(e, 134217728);
      }
    }),
    (Ku = function (e) {
      if (e.tag === 13) {
        var t = Wn(e),
          r = yn(e, t);
        if (r !== null) {
          var i = ut();
          Vt(r, e, t, i);
        }
        _l(e, t);
      }
    }),
    (Gu = function () {
      return je;
    }),
    (qu = function (e, t) {
      var r = je;
      try {
        return (je = e), t();
      } finally {
        je = r;
      }
    }),
    (jr = function (e, t, r) {
      switch (t) {
        case "input":
          if ((uo(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var i = r[t];
              if (i !== e && i.form === e.form) {
                var l = Bs(i);
                if (!l) throw Error(s(90));
                jn(i), uo(i, l);
              }
            }
          }
          break;
        case "textarea":
          ps(e, r);
          break;
        case "select":
          (t = r.value), t != null && Pt(e, !!r.multiple, t, !1);
      }
    }),
    (be = jl),
    (Pe = fr);
  var iv = { usingClientEntryPoint: !1, Events: [Ao, Lr, Bs, ys, fe, jl] },
    Ko = {
      findFiberByHostInstance: or,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    av = {
      bundleType: Ko.bundleType,
      version: Ko.version,
      rendererPackageName: Ko.rendererPackageName,
      rendererConfig: Ko.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: F.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = zu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ko.findFiberByHostInstance || ov,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ni.isDisabled && Ni.supportsFiber)
      try {
        (Es = Ni.inject(av)), (rn = Ni);
      } catch {}
  }
  return (
    (yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iv),
    (yt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Dl(t)) throw Error(s(200));
      return rv(e, t, null, r);
    }),
    (yt.createRoot = function (e, t) {
      if (!Dl(e)) throw Error(s(299));
      var r = !1,
        i = "",
        l = ff;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Al(e, 1, !1, null, null, r, !1, i, l)),
        (e[hn] = t.current),
        Ro(e.nodeType === 8 ? e.parentNode : e),
        new Ll(t)
      );
    }),
    (yt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = zu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (yt.flushSync = function (e) {
      return fr(e);
    }),
    (yt.hydrate = function (e, t, r) {
      if (!Ci(t)) throw Error(s(200));
      return ki(null, e, t, !0, r);
    }),
    (yt.hydrateRoot = function (e, t, r) {
      if (!Dl(e)) throw Error(s(405));
      var i = (r != null && r.hydratedSources) || null,
        l = !1,
        c = "",
        m = ff;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (m = r.onRecoverableError)),
        (t = cf(t, null, e, 1, r ?? null, l, !1, c, m)),
        (e[hn] = t.current),
        Ro(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          (r = i[e]),
            (l = r._getVersion),
            (l = l(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, l])
              : t.mutableSourceEagerHydrationData.push(r, l);
      return new Ei(t);
    }),
    (yt.render = function (e, t, r) {
      if (!Ci(t)) throw Error(s(200));
      return ki(null, e, t, !1, r);
    }),
    (yt.unmountComponentAtNode = function (e) {
      if (!Ci(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (fr(function () {
            ki(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[hn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (yt.unstable_batchedUpdates = jl),
    (yt.unstable_renderSubtreeIntoContainer = function (e, t, r, i) {
      if (!Ci(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return ki(e, t, r, !1, i);
    }),
    (yt.version = "18.3.1-next-f1338f8080-20240426"),
    yt
  );
}
var Sf;
function gp() {
  if (Sf) return Fl.exports;
  Sf = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), (Fl.exports = mv()), Fl.exports;
}
var Ef;
function gv() {
  if (Ef) return bi;
  Ef = 1;
  var n = gp();
  return (bi.createRoot = n.createRoot), (bi.hydrateRoot = n.hydrateRoot), bi;
}
var vv = gv(),
  S = Vi();
const Q = mp(S),
  vp = uv({ __proto__: null, default: Q }, [S]),
  yv = 1,
  xv = 1e6;
let $l = 0;
function wv() {
  return ($l = ($l + 1) % Number.MAX_SAFE_INTEGER), $l.toString();
}
const Hl = new Map(),
  Cf = (n) => {
    if (Hl.has(n)) return;
    const o = setTimeout(() => {
      Hl.delete(n), Xo({ type: "REMOVE_TOAST", toastId: n });
    }, xv);
    Hl.set(n, o);
  },
  Sv = (n, o) => {
    switch (o.type) {
      case "ADD_TOAST":
        return { ...n, toasts: [o.toast, ...n.toasts].slice(0, yv) };
      case "UPDATE_TOAST":
        return {
          ...n,
          toasts: n.toasts.map((s) =>
            s.id === o.toast.id ? { ...s, ...o.toast } : s
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: s } = o;
        return (
          s
            ? Cf(s)
            : n.toasts.forEach((a) => {
                Cf(a.id);
              }),
          {
            ...n,
            toasts: n.toasts.map((a) =>
              a.id === s || s === void 0 ? { ...a, open: !1 } : a
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return o.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((s) => s.id !== o.toastId) };
    }
  },
  Mi = [];
let Ai = { toasts: [] };
function Xo(n) {
  (Ai = Sv(Ai, n)),
    Mi.forEach((o) => {
      o(Ai);
    });
}
function Ev({ ...n }) {
  const o = wv(),
    s = (u) => Xo({ type: "UPDATE_TOAST", toast: { ...u, id: o } }),
    a = () => Xo({ type: "DISMISS_TOAST", toastId: o });
  return (
    Xo({
      type: "ADD_TOAST",
      toast: {
        ...n,
        id: o,
        open: !0,
        onOpenChange: (u) => {
          u || a();
        },
      },
    }),
    { id: o, dismiss: a, update: s }
  );
}
function Cv() {
  const [n, o] = S.useState(Ai);
  return (
    S.useEffect(
      () => (
        Mi.push(o),
        () => {
          const s = Mi.indexOf(o);
          s > -1 && Mi.splice(s, 1);
        }
      ),
      [n]
    ),
    {
      ...n,
      toast: Ev,
      dismiss: (s) => Xo({ type: "DISMISS_TOAST", toastId: s }),
    }
  );
}
var Wi = gp();
const yp = mp(Wi);
function Ge(n, o, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (u) {
    if ((n?.(u), s === !1 || !u.defaultPrevented)) return o?.(u);
  };
}
function kf(n, o) {
  if (typeof n == "function") return n(o);
  n != null && (n.current = o);
}
function xp(...n) {
  return (o) => {
    let s = !1;
    const a = n.map((u) => {
      const d = kf(u, o);
      return !s && typeof d == "function" && (s = !0), d;
    });
    if (s)
      return () => {
        for (let u = 0; u < a.length; u++) {
          const d = a[u];
          typeof d == "function" ? d() : kf(n[u], null);
        }
      };
  };
}
function Kt(...n) {
  return S.useCallback(xp(...n), n);
}
function as(n, o = []) {
  let s = [];
  function a(d, p) {
    const h = S.createContext(p),
      g = s.length;
    s = [...s, p];
    const v = (w) => {
      const { scope: b, children: y, ...T } = w,
        C = b?.[n]?.[g] || h,
        k = S.useMemo(() => T, Object.values(T));
      return f.jsx(C.Provider, { value: k, children: y });
    };
    v.displayName = d + "Provider";
    function x(w, b) {
      const y = b?.[n]?.[g] || h,
        T = S.useContext(y);
      if (T) return T;
      if (p !== void 0) return p;
      throw new Error(`\`${w}\` must be used within \`${d}\``);
    }
    return [v, x];
  }
  const u = () => {
    const d = s.map((p) => S.createContext(p));
    return function (h) {
      const g = h?.[n] || d;
      return S.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: g } }), [h, g]);
    };
  };
  return (u.scopeName = n), [a, kv(u, ...o)];
}
function kv(...n) {
  const o = n[0];
  if (n.length === 1) return o;
  const s = () => {
    const a = n.map((u) => ({ useScope: u(), scopeName: u.scopeName }));
    return function (d) {
      const p = a.reduce((h, { useScope: g, scopeName: v }) => {
        const w = g(d)[`__scope${v}`];
        return { ...h, ...w };
      }, {});
      return S.useMemo(() => ({ [`__scope${o.scopeName}`]: p }), [p]);
    };
  };
  return (s.scopeName = o.scopeName), s;
}
function Li(n) {
  const o = bv(n),
    s = S.forwardRef((a, u) => {
      const { children: d, ...p } = a,
        h = S.Children.toArray(d),
        g = h.find(Pv);
      if (g) {
        const v = g.props.children,
          x = h.map((w) =>
            w === g
              ? S.Children.count(v) > 1
                ? S.Children.only(null)
                : S.isValidElement(v)
                ? v.props.children
                : null
              : w
          );
        return f.jsx(o, {
          ...p,
          ref: u,
          children: S.isValidElement(v) ? S.cloneElement(v, void 0, x) : null,
        });
      }
      return f.jsx(o, { ...p, ref: u, children: d });
    });
  return (s.displayName = `${n}.Slot`), s;
}
var Nv = Li("Slot");
function bv(n) {
  const o = S.forwardRef((s, a) => {
    const { children: u, ...d } = s;
    if (S.isValidElement(u)) {
      const p = Rv(u),
        h = Tv(d, u.props);
      return (
        u.type !== S.Fragment && (h.ref = a ? xp(a, p) : p),
        S.cloneElement(u, h)
      );
    }
    return S.Children.count(u) > 1 ? S.Children.only(null) : null;
  });
  return (o.displayName = `${n}.SlotClone`), o;
}
var wp = Symbol("radix.slottable");
function jv(n) {
  const o = ({ children: s }) => f.jsx(f.Fragment, { children: s });
  return (o.displayName = `${n}.Slottable`), (o.__radixId = wp), o;
}
function Pv(n) {
  return (
    S.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === wp
  );
}
function Tv(n, o) {
  const s = { ...o };
  for (const a in o) {
    const u = n[a],
      d = o[a];
    /^on[A-Z]/.test(a)
      ? u && d
        ? (s[a] = (...h) => {
            const g = d(...h);
            return u(...h), g;
          })
        : u && (s[a] = u)
      : a === "style"
      ? (s[a] = { ...u, ...d })
      : a === "className" && (s[a] = [u, d].filter(Boolean).join(" "));
  }
  return { ...n, ...s };
}
function Rv(n) {
  let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    s = o && "isReactWarning" in o && o.isReactWarning;
  return s
    ? n.ref
    : ((o = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (s = o && "isReactWarning" in o && o.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
function Ov(n) {
  const o = n + "CollectionProvider",
    [s, a] = as(o),
    [u, d] = s(o, { collectionRef: { current: null }, itemMap: new Map() }),
    p = (C) => {
      const { scope: k, children: A } = C,
        L = Q.useRef(null),
        D = Q.useRef(new Map()).current;
      return f.jsx(u, { scope: k, itemMap: D, collectionRef: L, children: A });
    };
  p.displayName = o;
  const h = n + "CollectionSlot",
    g = Li(h),
    v = Q.forwardRef((C, k) => {
      const { scope: A, children: L } = C,
        D = d(h, A),
        F = Kt(k, D.collectionRef);
      return f.jsx(g, { ref: F, children: L });
    });
  v.displayName = h;
  const x = n + "CollectionItemSlot",
    w = "data-radix-collection-item",
    b = Li(x),
    y = Q.forwardRef((C, k) => {
      const { scope: A, children: L, ...D } = C,
        F = Q.useRef(null),
        V = Kt(k, F),
        K = d(x, A);
      return (
        Q.useEffect(
          () => (
            K.itemMap.set(F, { ref: F, ...D }), () => void K.itemMap.delete(F)
          )
        ),
        f.jsx(b, { [w]: "", ref: V, children: L })
      );
    });
  y.displayName = x;
  function T(C) {
    const k = d(n + "CollectionConsumer", C);
    return Q.useCallback(() => {
      const L = k.collectionRef.current;
      if (!L) return [];
      const D = Array.from(L.querySelectorAll(`[${w}]`));
      return Array.from(k.itemMap.values()).sort(
        (K, q) => D.indexOf(K.ref.current) - D.indexOf(q.ref.current)
      );
    }, [k.collectionRef, k.itemMap]);
  }
  return [{ Provider: p, Slot: v, ItemSlot: y }, T, a];
}
var Mv = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ze = Mv.reduce((n, o) => {
    const s = Li(`Primitive.${o}`),
      a = S.forwardRef((u, d) => {
        const { asChild: p, ...h } = u,
          g = p ? s : o;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          f.jsx(g, { ...h, ref: d })
        );
      });
    return (a.displayName = `Primitive.${o}`), { ...n, [o]: a };
  }, {});
function Sp(n, o) {
  n && Wi.flushSync(() => n.dispatchEvent(o));
}
function kn(n) {
  const o = S.useRef(n);
  return (
    S.useEffect(() => {
      o.current = n;
    }),
    S.useMemo(
      () =>
        (...s) =>
          o.current?.(...s),
      []
    )
  );
}
function Av(n, o = globalThis?.document) {
  const s = kn(n);
  S.useEffect(() => {
    const a = (u) => {
      u.key === "Escape" && s(u);
    };
    return (
      o.addEventListener("keydown", a, { capture: !0 }),
      () => o.removeEventListener("keydown", a, { capture: !0 })
    );
  }, [s, o]);
}
var _v = "DismissableLayer",
  Jl = "dismissableLayer.update",
  Lv = "dismissableLayer.pointerDownOutside",
  Dv = "dismissableLayer.focusOutside",
  Nf,
  Ep = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  mu = S.forwardRef((n, o) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: u,
        onFocusOutside: d,
        onInteractOutside: p,
        onDismiss: h,
        ...g
      } = n,
      v = S.useContext(Ep),
      [x, w] = S.useState(null),
      b = x?.ownerDocument ?? globalThis?.document,
      [, y] = S.useState({}),
      T = Kt(o, (q) => w(q)),
      C = Array.from(v.layers),
      [k] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1),
      A = C.indexOf(k),
      L = x ? C.indexOf(x) : -1,
      D = v.layersWithOutsidePointerEventsDisabled.size > 0,
      F = L >= A,
      V = zv((q) => {
        const ce = q.target,
          ge = [...v.branches].some((pe) => pe.contains(ce));
        !F || ge || (u?.(q), p?.(q), q.defaultPrevented || h?.());
      }, b),
      K = Fv((q) => {
        const ce = q.target;
        [...v.branches].some((pe) => pe.contains(ce)) ||
          (d?.(q), p?.(q), q.defaultPrevented || h?.());
      }, b);
    return (
      Av((q) => {
        L === v.layers.size - 1 &&
          (a?.(q), !q.defaultPrevented && h && (q.preventDefault(), h()));
      }, b),
      S.useEffect(() => {
        if (x)
          return (
            s &&
              (v.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Nf = b.body.style.pointerEvents),
                (b.body.style.pointerEvents = "none")),
              v.layersWithOutsidePointerEventsDisabled.add(x)),
            v.layers.add(x),
            bf(),
            () => {
              s &&
                v.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (b.body.style.pointerEvents = Nf);
            }
          );
      }, [x, b, s, v]),
      S.useEffect(
        () => () => {
          x &&
            (v.layers.delete(x),
            v.layersWithOutsidePointerEventsDisabled.delete(x),
            bf());
        },
        [x, v]
      ),
      S.useEffect(() => {
        const q = () => y({});
        return (
          document.addEventListener(Jl, q),
          () => document.removeEventListener(Jl, q)
        );
      }, []),
      f.jsx(Ze.div, {
        ...g,
        ref: T,
        style: {
          pointerEvents: D ? (F ? "auto" : "none") : void 0,
          ...n.style,
        },
        onFocusCapture: Ge(n.onFocusCapture, K.onFocusCapture),
        onBlurCapture: Ge(n.onBlurCapture, K.onBlurCapture),
        onPointerDownCapture: Ge(
          n.onPointerDownCapture,
          V.onPointerDownCapture
        ),
      })
    );
  });
mu.displayName = _v;
var Iv = "DismissableLayerBranch",
  Cp = S.forwardRef((n, o) => {
    const s = S.useContext(Ep),
      a = S.useRef(null),
      u = Kt(o, a);
    return (
      S.useEffect(() => {
        const d = a.current;
        if (d)
          return (
            s.branches.add(d),
            () => {
              s.branches.delete(d);
            }
          );
      }, [s.branches]),
      f.jsx(Ze.div, { ...n, ref: u })
    );
  });
Cp.displayName = Iv;
function zv(n, o = globalThis?.document) {
  const s = kn(n),
    a = S.useRef(!1),
    u = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const d = (h) => {
          if (h.target && !a.current) {
            let g = function () {
              kp(Lv, s, v, { discrete: !0 });
            };
            const v = { originalEvent: h };
            h.pointerType === "touch"
              ? (o.removeEventListener("click", u.current),
                (u.current = g),
                o.addEventListener("click", u.current, { once: !0 }))
              : g();
          } else o.removeEventListener("click", u.current);
          a.current = !1;
        },
        p = window.setTimeout(() => {
          o.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(p),
          o.removeEventListener("pointerdown", d),
          o.removeEventListener("click", u.current);
      };
    }, [o, s]),
    { onPointerDownCapture: () => (a.current = !0) }
  );
}
function Fv(n, o = globalThis?.document) {
  const s = kn(n),
    a = S.useRef(!1);
  return (
    S.useEffect(() => {
      const u = (d) => {
        d.target &&
          !a.current &&
          kp(Dv, s, { originalEvent: d }, { discrete: !1 });
      };
      return (
        o.addEventListener("focusin", u),
        () => o.removeEventListener("focusin", u)
      );
    }, [o, s]),
    {
      onFocusCapture: () => (a.current = !0),
      onBlurCapture: () => (a.current = !1),
    }
  );
}
function bf() {
  const n = new CustomEvent(Jl);
  document.dispatchEvent(n);
}
function kp(n, o, s, { discrete: a }) {
  const u = s.originalEvent.target,
    d = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: s });
  o && u.addEventListener(n, o, { once: !0 }),
    a ? Sp(u, d) : u.dispatchEvent(d);
}
var Uv = mu,
  Bv = Cp,
  Gt = globalThis?.document ? S.useLayoutEffect : () => {},
  $v = "Portal",
  Np = S.forwardRef((n, o) => {
    const { container: s, ...a } = n,
      [u, d] = S.useState(!1);
    Gt(() => d(!0), []);
    const p = s || (u && globalThis?.document?.body);
    return p ? yp.createPortal(f.jsx(Ze.div, { ...a, ref: o }), p) : null;
  });
Np.displayName = $v;
function Hv(n, o) {
  return S.useReducer((s, a) => o[s][a] ?? s, n);
}
var gu = (n) => {
  const { present: o, children: s } = n,
    a = Vv(o),
    u =
      typeof s == "function" ? s({ present: a.isPresent }) : S.Children.only(s),
    d = Kt(a.ref, Wv(u));
  return typeof s == "function" || a.isPresent
    ? S.cloneElement(u, { ref: d })
    : null;
};
gu.displayName = "Presence";
function Vv(n) {
  const [o, s] = S.useState(),
    a = S.useRef(null),
    u = S.useRef(n),
    d = S.useRef("none"),
    p = n ? "mounted" : "unmounted",
    [h, g] = Hv(p, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const v = ji(a.current);
      d.current = h === "mounted" ? v : "none";
    }, [h]),
    Gt(() => {
      const v = a.current,
        x = u.current;
      if (x !== n) {
        const b = d.current,
          y = ji(v);
        n
          ? g("MOUNT")
          : y === "none" || v?.display === "none"
          ? g("UNMOUNT")
          : g(x && b !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          (u.current = n);
      }
    }, [n, g]),
    Gt(() => {
      if (o) {
        let v;
        const x = o.ownerDocument.defaultView ?? window,
          w = (y) => {
            const C = ji(a.current).includes(y.animationName);
            if (y.target === o && C && (g("ANIMATION_END"), !u.current)) {
              const k = o.style.animationFillMode;
              (o.style.animationFillMode = "forwards"),
                (v = x.setTimeout(() => {
                  o.style.animationFillMode === "forwards" &&
                    (o.style.animationFillMode = k);
                }));
            }
          },
          b = (y) => {
            y.target === o && (d.current = ji(a.current));
          };
        return (
          o.addEventListener("animationstart", b),
          o.addEventListener("animationcancel", w),
          o.addEventListener("animationend", w),
          () => {
            x.clearTimeout(v),
              o.removeEventListener("animationstart", b),
              o.removeEventListener("animationcancel", w),
              o.removeEventListener("animationend", w);
          }
        );
      } else g("ANIMATION_END");
    }, [o, g]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: S.useCallback((v) => {
        (a.current = v ? getComputedStyle(v) : null), s(v);
      }, []),
    }
  );
}
function ji(n) {
  return n?.animationName || "none";
}
function Wv(n) {
  let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    s = o && "isReactWarning" in o && o.isReactWarning;
  return s
    ? n.ref
    : ((o = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (s = o && "isReactWarning" in o && o.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
var Qv = vp[" useInsertionEffect ".trim().toString()] || Gt;
function Kv({ prop: n, defaultProp: o, onChange: s = () => {}, caller: a }) {
  const [u, d, p] = Gv({ defaultProp: o, onChange: s }),
    h = n !== void 0,
    g = h ? n : u;
  {
    const x = S.useRef(n !== void 0);
    S.useEffect(() => {
      const w = x.current;
      w !== h &&
        console.warn(
          `${a} is changing from ${w ? "controlled" : "uncontrolled"} to ${
            h ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (x.current = h);
    }, [h, a]);
  }
  const v = S.useCallback(
    (x) => {
      if (h) {
        const w = qv(x) ? x(n) : x;
        w !== n && p.current?.(w);
      } else d(x);
    },
    [h, n, d, p]
  );
  return [g, v];
}
function Gv({ defaultProp: n, onChange: o }) {
  const [s, a] = S.useState(n),
    u = S.useRef(s),
    d = S.useRef(o);
  return (
    Qv(() => {
      d.current = o;
    }, [o]),
    S.useEffect(() => {
      u.current !== s && (d.current?.(s), (u.current = s));
    }, [s, u]),
    [s, a, d]
  );
}
function qv(n) {
  return typeof n == "function";
}
var Yv = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Xv = "VisuallyHidden",
  Qi = S.forwardRef((n, o) =>
    f.jsx(Ze.span, { ...n, ref: o, style: { ...Yv, ...n.style } })
  );
Qi.displayName = Xv;
var Zv = Qi,
  vu = "ToastProvider",
  [yu, Jv, ey] = Ov("Toast"),
  [bp] = as("Toast", [ey]),
  [ty, Ki] = bp(vu),
  jp = (n) => {
    const {
        __scopeToast: o,
        label: s = "Notification",
        duration: a = 5e3,
        swipeDirection: u = "right",
        swipeThreshold: d = 50,
        children: p,
      } = n,
      [h, g] = S.useState(null),
      [v, x] = S.useState(0),
      w = S.useRef(!1),
      b = S.useRef(!1);
    return (
      s.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${vu}\`. Expected non-empty \`string\`.`
        ),
      f.jsx(yu.Provider, {
        scope: o,
        children: f.jsx(ty, {
          scope: o,
          label: s,
          duration: a,
          swipeDirection: u,
          swipeThreshold: d,
          toastCount: v,
          viewport: h,
          onViewportChange: g,
          onToastAdd: S.useCallback(() => x((y) => y + 1), []),
          onToastRemove: S.useCallback(() => x((y) => y - 1), []),
          isFocusedToastEscapeKeyDownRef: w,
          isClosePausedRef: b,
          children: p,
        }),
      })
    );
  };
jp.displayName = vu;
var Pp = "ToastViewport",
  ny = ["F8"],
  eu = "toast.viewportPause",
  tu = "toast.viewportResume",
  Tp = S.forwardRef((n, o) => {
    const {
        __scopeToast: s,
        hotkey: a = ny,
        label: u = "Notifications ({hotkey})",
        ...d
      } = n,
      p = Ki(Pp, s),
      h = Jv(s),
      g = S.useRef(null),
      v = S.useRef(null),
      x = S.useRef(null),
      w = S.useRef(null),
      b = Kt(o, w, p.onViewportChange),
      y = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      T = p.toastCount > 0;
    S.useEffect(() => {
      const k = (A) => {
        a.length !== 0 &&
          a.every((D) => A[D] || A.code === D) &&
          w.current?.focus();
      };
      return (
        document.addEventListener("keydown", k),
        () => document.removeEventListener("keydown", k)
      );
    }, [a]),
      S.useEffect(() => {
        const k = g.current,
          A = w.current;
        if (T && k && A) {
          const L = () => {
              if (!p.isClosePausedRef.current) {
                const K = new CustomEvent(eu);
                A.dispatchEvent(K), (p.isClosePausedRef.current = !0);
              }
            },
            D = () => {
              if (p.isClosePausedRef.current) {
                const K = new CustomEvent(tu);
                A.dispatchEvent(K), (p.isClosePausedRef.current = !1);
              }
            },
            F = (K) => {
              !k.contains(K.relatedTarget) && D();
            },
            V = () => {
              k.contains(document.activeElement) || D();
            };
          return (
            k.addEventListener("focusin", L),
            k.addEventListener("focusout", F),
            k.addEventListener("pointermove", L),
            k.addEventListener("pointerleave", V),
            window.addEventListener("blur", L),
            window.addEventListener("focus", D),
            () => {
              k.removeEventListener("focusin", L),
                k.removeEventListener("focusout", F),
                k.removeEventListener("pointermove", L),
                k.removeEventListener("pointerleave", V),
                window.removeEventListener("blur", L),
                window.removeEventListener("focus", D);
            }
          );
        }
      }, [T, p.isClosePausedRef]);
    const C = S.useCallback(
      ({ tabbingDirection: k }) => {
        const L = h().map((D) => {
          const F = D.ref.current,
            V = [F, ...my(F)];
          return k === "forwards" ? V : V.reverse();
        });
        return (k === "forwards" ? L.reverse() : L).flat();
      },
      [h]
    );
    return (
      S.useEffect(() => {
        const k = w.current;
        if (k) {
          const A = (L) => {
            const D = L.altKey || L.ctrlKey || L.metaKey;
            if (L.key === "Tab" && !D) {
              const V = document.activeElement,
                K = L.shiftKey;
              if (L.target === k && K) {
                v.current?.focus();
                return;
              }
              const ge = C({ tabbingDirection: K ? "backwards" : "forwards" }),
                pe = ge.findIndex((xe) => xe === V);
              Vl(ge.slice(pe + 1))
                ? L.preventDefault()
                : K
                ? v.current?.focus()
                : x.current?.focus();
            }
          };
          return (
            k.addEventListener("keydown", A),
            () => k.removeEventListener("keydown", A)
          );
        }
      }, [h, C]),
      f.jsxs(Bv, {
        ref: g,
        role: "region",
        "aria-label": u.replace("{hotkey}", y),
        tabIndex: -1,
        style: { pointerEvents: T ? void 0 : "none" },
        children: [
          T &&
            f.jsx(nu, {
              ref: v,
              onFocusFromOutsideViewport: () => {
                const k = C({ tabbingDirection: "forwards" });
                Vl(k);
              },
            }),
          f.jsx(yu.Slot, {
            scope: s,
            children: f.jsx(Ze.ol, { tabIndex: -1, ...d, ref: b }),
          }),
          T &&
            f.jsx(nu, {
              ref: x,
              onFocusFromOutsideViewport: () => {
                const k = C({ tabbingDirection: "backwards" });
                Vl(k);
              },
            }),
        ],
      })
    );
  });
Tp.displayName = Pp;
var Rp = "ToastFocusProxy",
  nu = S.forwardRef((n, o) => {
    const { __scopeToast: s, onFocusFromOutsideViewport: a, ...u } = n,
      d = Ki(Rp, s);
    return f.jsx(Qi, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...u,
      ref: o,
      style: { position: "fixed" },
      onFocus: (p) => {
        const h = p.relatedTarget;
        !d.viewport?.contains(h) && a();
      },
    });
  });
nu.displayName = Rp;
var ls = "Toast",
  ry = "toast.swipeStart",
  oy = "toast.swipeMove",
  sy = "toast.swipeCancel",
  iy = "toast.swipeEnd",
  Op = S.forwardRef((n, o) => {
    const { forceMount: s, open: a, defaultOpen: u, onOpenChange: d, ...p } = n,
      [h, g] = Kv({ prop: a, defaultProp: u ?? !0, onChange: d, caller: ls });
    return f.jsx(gu, {
      present: s || h,
      children: f.jsx(uy, {
        open: h,
        ...p,
        ref: o,
        onClose: () => g(!1),
        onPause: kn(n.onPause),
        onResume: kn(n.onResume),
        onSwipeStart: Ge(n.onSwipeStart, (v) => {
          v.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Ge(n.onSwipeMove, (v) => {
          const { x, y: w } = v.detail.delta;
          v.currentTarget.setAttribute("data-swipe", "move"),
            v.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${x}px`
            ),
            v.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${w}px`
            );
        }),
        onSwipeCancel: Ge(n.onSwipeCancel, (v) => {
          v.currentTarget.setAttribute("data-swipe", "cancel"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Ge(n.onSwipeEnd, (v) => {
          const { x, y: w } = v.detail.delta;
          v.currentTarget.setAttribute("data-swipe", "end"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            v.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${x}px`
            ),
            v.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${w}px`
            ),
            g(!1);
        }),
      }),
    });
  });
Op.displayName = ls;
var [ay, ly] = bp(ls, { onClose() {} }),
  uy = S.forwardRef((n, o) => {
    const {
        __scopeToast: s,
        type: a = "foreground",
        duration: u,
        open: d,
        onClose: p,
        onEscapeKeyDown: h,
        onPause: g,
        onResume: v,
        onSwipeStart: x,
        onSwipeMove: w,
        onSwipeCancel: b,
        onSwipeEnd: y,
        ...T
      } = n,
      C = Ki(ls, s),
      [k, A] = S.useState(null),
      L = Kt(o, (G) => A(G)),
      D = S.useRef(null),
      F = S.useRef(null),
      V = u || C.duration,
      K = S.useRef(0),
      q = S.useRef(V),
      ce = S.useRef(0),
      { onToastAdd: ge, onToastRemove: pe } = C,
      xe = kn(() => {
        k?.contains(document.activeElement) && C.viewport?.focus(), p();
      }),
      Z = S.useCallback(
        (G) => {
          !G ||
            G === 1 / 0 ||
            (window.clearTimeout(ce.current),
            (K.current = new Date().getTime()),
            (ce.current = window.setTimeout(xe, G)));
        },
        [xe]
      );
    S.useEffect(() => {
      const G = C.viewport;
      if (G) {
        const me = () => {
            Z(q.current), v?.();
          },
          se = () => {
            const re = new Date().getTime() - K.current;
            (q.current = q.current - re),
              window.clearTimeout(ce.current),
              g?.();
          };
        return (
          G.addEventListener(eu, se),
          G.addEventListener(tu, me),
          () => {
            G.removeEventListener(eu, se), G.removeEventListener(tu, me);
          }
        );
      }
    }, [C.viewport, V, g, v, Z]),
      S.useEffect(() => {
        d && !C.isClosePausedRef.current && Z(V);
      }, [d, V, C.isClosePausedRef, Z]),
      S.useEffect(() => (ge(), () => pe()), [ge, pe]);
    const he = S.useMemo(() => (k ? zp(k) : null), [k]);
    return C.viewport
      ? f.jsxs(f.Fragment, {
          children: [
            he &&
              f.jsx(cy, {
                __scopeToast: s,
                role: "status",
                "aria-live": a === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: he,
              }),
            f.jsx(ay, {
              scope: s,
              onClose: xe,
              children: Wi.createPortal(
                f.jsx(yu.ItemSlot, {
                  scope: s,
                  children: f.jsx(Uv, {
                    asChild: !0,
                    onEscapeKeyDown: Ge(h, () => {
                      C.isFocusedToastEscapeKeyDownRef.current || xe(),
                        (C.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: f.jsx(Ze.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": d ? "open" : "closed",
                      "data-swipe-direction": C.swipeDirection,
                      ...T,
                      ref: L,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...n.style,
                      },
                      onKeyDown: Ge(n.onKeyDown, (G) => {
                        G.key === "Escape" &&
                          (h?.(G.nativeEvent),
                          G.nativeEvent.defaultPrevented ||
                            ((C.isFocusedToastEscapeKeyDownRef.current = !0),
                            xe()));
                      }),
                      onPointerDown: Ge(n.onPointerDown, (G) => {
                        G.button === 0 &&
                          (D.current = { x: G.clientX, y: G.clientY });
                      }),
                      onPointerMove: Ge(n.onPointerMove, (G) => {
                        if (!D.current) return;
                        const me = G.clientX - D.current.x,
                          se = G.clientY - D.current.y,
                          re = !!F.current,
                          I = ["left", "right"].includes(C.swipeDirection),
                          z = ["left", "up"].includes(C.swipeDirection)
                            ? Math.min
                            : Math.max,
                          H = I ? z(0, me) : 0,
                          P = I ? 0 : z(0, se),
                          _ = G.pointerType === "touch" ? 10 : 2,
                          Y = { x: H, y: P },
                          J = { originalEvent: G, delta: Y };
                        re
                          ? ((F.current = Y), Pi(oy, w, J, { discrete: !1 }))
                          : jf(Y, C.swipeDirection, _)
                          ? ((F.current = Y),
                            Pi(ry, x, J, { discrete: !1 }),
                            G.target.setPointerCapture(G.pointerId))
                          : (Math.abs(me) > _ || Math.abs(se) > _) &&
                            (D.current = null);
                      }),
                      onPointerUp: Ge(n.onPointerUp, (G) => {
                        const me = F.current,
                          se = G.target;
                        if (
                          (se.hasPointerCapture(G.pointerId) &&
                            se.releasePointerCapture(G.pointerId),
                          (F.current = null),
                          (D.current = null),
                          me)
                        ) {
                          const re = G.currentTarget,
                            I = { originalEvent: G, delta: me };
                          jf(me, C.swipeDirection, C.swipeThreshold)
                            ? Pi(iy, y, I, { discrete: !0 })
                            : Pi(sy, b, I, { discrete: !0 }),
                            re.addEventListener(
                              "click",
                              (z) => z.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                C.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  cy = (n) => {
    const { __scopeToast: o, children: s, ...a } = n,
      u = Ki(ls, o),
      [d, p] = S.useState(!1),
      [h, g] = S.useState(!1);
    return (
      py(() => p(!0)),
      S.useEffect(() => {
        const v = window.setTimeout(() => g(!0), 1e3);
        return () => window.clearTimeout(v);
      }, []),
      h
        ? null
        : f.jsx(Np, {
            asChild: !0,
            children: f.jsx(Qi, {
              ...a,
              children:
                d && f.jsxs(f.Fragment, { children: [u.label, " ", s] }),
            }),
          })
    );
  },
  dy = "ToastTitle",
  Mp = S.forwardRef((n, o) => {
    const { __scopeToast: s, ...a } = n;
    return f.jsx(Ze.div, { ...a, ref: o });
  });
Mp.displayName = dy;
var fy = "ToastDescription",
  Ap = S.forwardRef((n, o) => {
    const { __scopeToast: s, ...a } = n;
    return f.jsx(Ze.div, { ...a, ref: o });
  });
Ap.displayName = fy;
var _p = "ToastAction",
  Lp = S.forwardRef((n, o) => {
    const { altText: s, ...a } = n;
    return s.trim()
      ? f.jsx(Ip, {
          altText: s,
          asChild: !0,
          children: f.jsx(xu, { ...a, ref: o }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${_p}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Lp.displayName = _p;
var Dp = "ToastClose",
  xu = S.forwardRef((n, o) => {
    const { __scopeToast: s, ...a } = n,
      u = ly(Dp, s);
    return f.jsx(Ip, {
      asChild: !0,
      children: f.jsx(Ze.button, {
        type: "button",
        ...a,
        ref: o,
        onClick: Ge(n.onClick, u.onClose),
      }),
    });
  });
xu.displayName = Dp;
var Ip = S.forwardRef((n, o) => {
  const { __scopeToast: s, altText: a, ...u } = n;
  return f.jsx(Ze.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": a || void 0,
    ...u,
    ref: o,
  });
});
function zp(n) {
  const o = [];
  return (
    Array.from(n.childNodes).forEach((a) => {
      if (
        (a.nodeType === a.TEXT_NODE && a.textContent && o.push(a.textContent),
        hy(a))
      ) {
        const u = a.ariaHidden || a.hidden || a.style.display === "none",
          d = a.dataset.radixToastAnnounceExclude === "";
        if (!u)
          if (d) {
            const p = a.dataset.radixToastAnnounceAlt;
            p && o.push(p);
          } else o.push(...zp(a));
      }
    }),
    o
  );
}
function Pi(n, o, s, { discrete: a }) {
  const u = s.originalEvent.currentTarget,
    d = new CustomEvent(n, { bubbles: !0, cancelable: !0, detail: s });
  o && u.addEventListener(n, o, { once: !0 }),
    a ? Sp(u, d) : u.dispatchEvent(d);
}
var jf = (n, o, s = 0) => {
  const a = Math.abs(n.x),
    u = Math.abs(n.y),
    d = a > u;
  return o === "left" || o === "right" ? d && a > s : !d && u > s;
};
function py(n = () => {}) {
  const o = kn(n);
  Gt(() => {
    let s = 0,
      a = 0;
    return (
      (s = window.requestAnimationFrame(
        () => (a = window.requestAnimationFrame(o))
      )),
      () => {
        window.cancelAnimationFrame(s), window.cancelAnimationFrame(a);
      }
    );
  }, [o]);
}
function hy(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function my(n) {
  const o = [],
    s = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (a) => {
        const u = a.tagName === "INPUT" && a.type === "hidden";
        return a.disabled || a.hidden || u
          ? NodeFilter.FILTER_SKIP
          : a.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) o.push(s.currentNode);
  return o;
}
function Vl(n) {
  const o = document.activeElement;
  return n.some((s) =>
    s === o ? !0 : (s.focus(), document.activeElement !== o)
  );
}
var gy = jp,
  Fp = Tp,
  Up = Op,
  Bp = Mp,
  $p = Ap,
  Hp = Lp,
  Vp = xu;
function Wp(n) {
  var o,
    s,
    a = "";
  if (typeof n == "string" || typeof n == "number") a += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var u = n.length;
      for (o = 0; o < u; o++)
        n[o] && (s = Wp(n[o])) && (a && (a += " "), (a += s));
    } else for (s in n) n[s] && (a && (a += " "), (a += s));
  return a;
}
function Qp() {
  for (var n, o, s = 0, a = "", u = arguments.length; s < u; s++)
    (n = arguments[s]) && (o = Wp(n)) && (a && (a += " "), (a += o));
  return a;
}
const Pf = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  Tf = Qp,
  wu = (n, o) => (s) => {
    var a;
    if (o?.variants == null) return Tf(n, s?.class, s?.className);
    const { variants: u, defaultVariants: d } = o,
      p = Object.keys(u).map((v) => {
        const x = s?.[v],
          w = d?.[v];
        if (x === null) return null;
        const b = Pf(x) || Pf(w);
        return u[v][b];
      }),
      h =
        s &&
        Object.entries(s).reduce((v, x) => {
          let [w, b] = x;
          return b === void 0 || (v[w] = b), v;
        }, {}),
      g =
        o == null || (a = o.compoundVariants) === null || a === void 0
          ? void 0
          : a.reduce((v, x) => {
              let { class: w, className: b, ...y } = x;
              return Object.entries(y).every((T) => {
                let [C, k] = T;
                return Array.isArray(k)
                  ? k.includes({ ...d, ...h }[C])
                  : { ...d, ...h }[C] === k;
              })
                ? [...v, w, b]
                : v;
            }, []);
    return Tf(n, p, g, s?.class, s?.className);
  };
const vy = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Kp = (...n) =>
    n
      .filter((o, s, a) => !!o && o.trim() !== "" && a.indexOf(o) === s)
      .join(" ")
      .trim();
var yy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const xy = S.forwardRef(
  (
    {
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: u = "",
      children: d,
      iconNode: p,
      ...h
    },
    g
  ) =>
    S.createElement(
      "svg",
      {
        ref: g,
        ...yy,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: a ? (Number(s) * 24) / Number(o) : s,
        className: Kp("lucide", u),
        ...h,
      },
      [
        ...p.map(([v, x]) => S.createElement(v, x)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
const Ee = (n, o) => {
  const s = S.forwardRef(({ className: a, ...u }, d) =>
    S.createElement(xy, {
      ref: d,
      iconNode: o,
      className: Kp(`lucide-${vy(n)}`, a),
      ...u,
    })
  );
  return (s.displayName = `${n}`), s;
};
const wy = Ee("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
const Gp = Ee("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
const qp = Ee("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
const Sy = Ee("Building", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
]);
const Ey = Ee("Car", [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen",
    },
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }],
]);
const Cy = Ee("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
const Rf = Ee("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
const ky = Ee("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
]);
const Ny = Ee("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
const Zo = Ee("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
const Wl = Ee("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
const by = Ee("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
const ru = Ee("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
const jy = Ee("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
const Py = Ee("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
const Ty = Ee("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
const Ry = Ee("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
const us = Ee("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
const Oy = Ee("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
const Jo = Ee("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
const Of = Ee("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
const My = Ee("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
const es = Ee("ShoppingBag", [
  [
    "path",
    { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" },
  ],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
]);
const Ay = Ee("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
const _y = Ee("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2",
    },
  ],
]);
const Yp = Ee("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
const Ly = Ee("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0",
    },
  ],
  [
    "circle",
    { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
  ],
]);
const Dy = Ee("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
const Iy = Ee("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
const Xp = Ee("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
const zy = Ee("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
const Fy = Ee("Video", [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec",
    },
  ],
  [
    "rect",
    { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
  ],
]);
const Uy = Ee("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
]);
const Zp = Ee("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Su = "-",
  By = (n) => {
    const o = Hy(n),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: a } = n;
    return {
      getClassGroupId: (p) => {
        const h = p.split(Su);
        return h[0] === "" && h.length !== 1 && h.shift(), Jp(h, o) || $y(p);
      },
      getConflictingClassGroupIds: (p, h) => {
        const g = s[p] || [];
        return h && a[p] ? [...g, ...a[p]] : g;
      },
    };
  },
  Jp = (n, o) => {
    if (n.length === 0) return o.classGroupId;
    const s = n[0],
      a = o.nextPart.get(s),
      u = a ? Jp(n.slice(1), a) : void 0;
    if (u) return u;
    if (o.validators.length === 0) return;
    const d = n.join(Su);
    return o.validators.find(({ validator: p }) => p(d))?.classGroupId;
  },
  Mf = /^\[(.+)\]$/,
  $y = (n) => {
    if (Mf.test(n)) {
      const o = Mf.exec(n)[1],
        s = o?.substring(0, o.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  Hy = (n) => {
    const { theme: o, prefix: s } = n,
      a = { nextPart: new Map(), validators: [] };
    return (
      Wy(Object.entries(n.classGroups), s).forEach(([d, p]) => {
        ou(p, a, d, o);
      }),
      a
    );
  },
  ou = (n, o, s, a) => {
    n.forEach((u) => {
      if (typeof u == "string") {
        const d = u === "" ? o : Af(o, u);
        d.classGroupId = s;
        return;
      }
      if (typeof u == "function") {
        if (Vy(u)) {
          ou(u(a), o, s, a);
          return;
        }
        o.validators.push({ validator: u, classGroupId: s });
        return;
      }
      Object.entries(u).forEach(([d, p]) => {
        ou(p, Af(o, d), s, a);
      });
    });
  },
  Af = (n, o) => {
    let s = n;
    return (
      o.split(Su).forEach((a) => {
        s.nextPart.has(a) ||
          s.nextPart.set(a, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(a));
      }),
      s
    );
  },
  Vy = (n) => n.isThemeGetter,
  Wy = (n, o) =>
    o
      ? n.map(([s, a]) => {
          const u = a.map((d) =>
            typeof d == "string"
              ? o + d
              : typeof d == "object"
              ? Object.fromEntries(
                  Object.entries(d).map(([p, h]) => [o + p, h])
                )
              : d
          );
          return [s, u];
        })
      : n,
  Qy = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      s = new Map(),
      a = new Map();
    const u = (d, p) => {
      s.set(d, p), o++, o > n && ((o = 0), (a = s), (s = new Map()));
    };
    return {
      get(d) {
        let p = s.get(d);
        if (p !== void 0) return p;
        if ((p = a.get(d)) !== void 0) return u(d, p), p;
      },
      set(d, p) {
        s.has(d) ? s.set(d, p) : u(d, p);
      },
    };
  },
  eh = "!",
  Ky = (n) => {
    const { separator: o, experimentalParseClassName: s } = n,
      a = o.length === 1,
      u = o[0],
      d = o.length,
      p = (h) => {
        const g = [];
        let v = 0,
          x = 0,
          w;
        for (let k = 0; k < h.length; k++) {
          let A = h[k];
          if (v === 0) {
            if (A === u && (a || h.slice(k, k + d) === o)) {
              g.push(h.slice(x, k)), (x = k + d);
              continue;
            }
            if (A === "/") {
              w = k;
              continue;
            }
          }
          A === "[" ? v++ : A === "]" && v--;
        }
        const b = g.length === 0 ? h : h.substring(x),
          y = b.startsWith(eh),
          T = y ? b.substring(1) : b,
          C = w && w > x ? w - x : void 0;
        return {
          modifiers: g,
          hasImportantModifier: y,
          baseClassName: T,
          maybePostfixModifierPosition: C,
        };
      };
    return s ? (h) => s({ className: h, parseClassName: p }) : p;
  },
  Gy = (n) => {
    if (n.length <= 1) return n;
    const o = [];
    let s = [];
    return (
      n.forEach((a) => {
        a[0] === "[" ? (o.push(...s.sort(), a), (s = [])) : s.push(a);
      }),
      o.push(...s.sort()),
      o
    );
  },
  qy = (n) => ({ cache: Qy(n.cacheSize), parseClassName: Ky(n), ...By(n) }),
  Yy = /\s+/,
  Xy = (n, o) => {
    const {
        parseClassName: s,
        getClassGroupId: a,
        getConflictingClassGroupIds: u,
      } = o,
      d = [],
      p = n.trim().split(Yy);
    let h = "";
    for (let g = p.length - 1; g >= 0; g -= 1) {
      const v = p[g],
        {
          modifiers: x,
          hasImportantModifier: w,
          baseClassName: b,
          maybePostfixModifierPosition: y,
        } = s(v);
      let T = !!y,
        C = a(T ? b.substring(0, y) : b);
      if (!C) {
        if (!T) {
          h = v + (h.length > 0 ? " " + h : h);
          continue;
        }
        if (((C = a(b)), !C)) {
          h = v + (h.length > 0 ? " " + h : h);
          continue;
        }
        T = !1;
      }
      const k = Gy(x).join(":"),
        A = w ? k + eh : k,
        L = A + C;
      if (d.includes(L)) continue;
      d.push(L);
      const D = u(C, T);
      for (let F = 0; F < D.length; ++F) {
        const V = D[F];
        d.push(A + V);
      }
      h = v + (h.length > 0 ? " " + h : h);
    }
    return h;
  };
function Zy() {
  let n = 0,
    o,
    s,
    a = "";
  for (; n < arguments.length; )
    (o = arguments[n++]) && (s = th(o)) && (a && (a += " "), (a += s));
  return a;
}
const th = (n) => {
  if (typeof n == "string") return n;
  let o,
    s = "";
  for (let a = 0; a < n.length; a++)
    n[a] && (o = th(n[a])) && (s && (s += " "), (s += o));
  return s;
};
function Jy(n, ...o) {
  let s,
    a,
    u,
    d = p;
  function p(g) {
    const v = o.reduce((x, w) => w(x), n());
    return (s = qy(v)), (a = s.cache.get), (u = s.cache.set), (d = h), h(g);
  }
  function h(g) {
    const v = a(g);
    if (v) return v;
    const x = Xy(g, s);
    return u(g, x), x;
  }
  return function () {
    return d(Zy.apply(null, arguments));
  };
}
const _e = (n) => {
    const o = (s) => s[n] || [];
    return (o.isThemeGetter = !0), o;
  },
  nh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  e0 = /^\d+\/\d+$/,
  t0 = new Set(["px", "full", "screen"]),
  n0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  r0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  o0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  s0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  i0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  En = (n) => Yr(n) || t0.has(n) || e0.test(n),
  qn = (n) => to(n, "length", h0),
  Yr = (n) => !!n && !Number.isNaN(Number(n)),
  Ql = (n) => to(n, "number", Yr),
  qo = (n) => !!n && Number.isInteger(Number(n)),
  a0 = (n) => n.endsWith("%") && Yr(n.slice(0, -1)),
  ye = (n) => nh.test(n),
  Yn = (n) => n0.test(n),
  l0 = new Set(["length", "size", "percentage"]),
  u0 = (n) => to(n, l0, rh),
  c0 = (n) => to(n, "position", rh),
  d0 = new Set(["image", "url"]),
  f0 = (n) => to(n, d0, g0),
  p0 = (n) => to(n, "", m0),
  Yo = () => !0,
  to = (n, o, s) => {
    const a = nh.exec(n);
    return a
      ? a[1]
        ? typeof o == "string"
          ? a[1] === o
          : o.has(a[1])
        : s(a[2])
      : !1;
  },
  h0 = (n) => r0.test(n) && !o0.test(n),
  rh = () => !1,
  m0 = (n) => s0.test(n),
  g0 = (n) => i0.test(n),
  v0 = () => {
    const n = _e("colors"),
      o = _e("spacing"),
      s = _e("blur"),
      a = _e("brightness"),
      u = _e("borderColor"),
      d = _e("borderRadius"),
      p = _e("borderSpacing"),
      h = _e("borderWidth"),
      g = _e("contrast"),
      v = _e("grayscale"),
      x = _e("hueRotate"),
      w = _e("invert"),
      b = _e("gap"),
      y = _e("gradientColorStops"),
      T = _e("gradientColorStopPositions"),
      C = _e("inset"),
      k = _e("margin"),
      A = _e("opacity"),
      L = _e("padding"),
      D = _e("saturate"),
      F = _e("scale"),
      V = _e("sepia"),
      K = _e("skew"),
      q = _e("space"),
      ce = _e("translate"),
      ge = () => ["auto", "contain", "none"],
      pe = () => ["auto", "hidden", "clip", "visible", "scroll"],
      xe = () => ["auto", ye, o],
      Z = () => [ye, o],
      he = () => ["", En, qn],
      G = () => ["auto", Yr, ye],
      me = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      se = () => ["solid", "dashed", "dotted", "double", "none"],
      re = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      I = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      z = () => ["", "0", ye],
      H = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      P = () => [Yr, ye];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Yo],
        spacing: [En, qn],
        blur: ["none", "", Yn, ye],
        brightness: P(),
        borderColor: [n],
        borderRadius: ["none", "", "full", Yn, ye],
        borderSpacing: Z(),
        borderWidth: he(),
        contrast: P(),
        grayscale: z(),
        hueRotate: P(),
        invert: z(),
        gap: Z(),
        gradientColorStops: [n],
        gradientColorStopPositions: [a0, qn],
        inset: xe(),
        margin: xe(),
        opacity: P(),
        padding: Z(),
        saturate: P(),
        scale: P(),
        sepia: z(),
        skew: P(),
        space: Z(),
        translate: Z(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ye] }],
        container: ["container"],
        columns: [{ columns: [Yn] }],
        "break-after": [{ "break-after": H() }],
        "break-before": [{ "break-before": H() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...me(), ye] }],
        overflow: [{ overflow: pe() }],
        "overflow-x": [{ "overflow-x": pe() }],
        "overflow-y": [{ "overflow-y": pe() }],
        overscroll: [{ overscroll: ge() }],
        "overscroll-x": [{ "overscroll-x": ge() }],
        "overscroll-y": [{ "overscroll-y": ge() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [C] }],
        "inset-x": [{ "inset-x": [C] }],
        "inset-y": [{ "inset-y": [C] }],
        start: [{ start: [C] }],
        end: [{ end: [C] }],
        top: [{ top: [C] }],
        right: [{ right: [C] }],
        bottom: [{ bottom: [C] }],
        left: [{ left: [C] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", qo, ye] }],
        basis: [{ basis: xe() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ye] }],
        grow: [{ grow: z() }],
        shrink: [{ shrink: z() }],
        order: [{ order: ["first", "last", "none", qo, ye] }],
        "grid-cols": [{ "grid-cols": [Yo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", qo, ye] }, ye] }],
        "col-start": [{ "col-start": G() }],
        "col-end": [{ "col-end": G() }],
        "grid-rows": [{ "grid-rows": [Yo] }],
        "row-start-end": [{ row: ["auto", { span: [qo, ye] }, ye] }],
        "row-start": [{ "row-start": G() }],
        "row-end": [{ "row-end": G() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ye] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ye] }],
        gap: [{ gap: [b] }],
        "gap-x": [{ "gap-x": [b] }],
        "gap-y": [{ "gap-y": [b] }],
        "justify-content": [{ justify: ["normal", ...I()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...I(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...I(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [L] }],
        px: [{ px: [L] }],
        py: [{ py: [L] }],
        ps: [{ ps: [L] }],
        pe: [{ pe: [L] }],
        pt: [{ pt: [L] }],
        pr: [{ pr: [L] }],
        pb: [{ pb: [L] }],
        pl: [{ pl: [L] }],
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        "space-x": [{ "space-x": [q] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [q] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ye, o] }],
        "min-w": [{ "min-w": [ye, o, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ye,
              o,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Yn] },
              Yn,
            ],
          },
        ],
        h: [{ h: [ye, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ye, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ye, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ye, o, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Yn, qn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ql,
            ],
          },
        ],
        "font-family": [{ font: [Yo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ye,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Yr, Ql] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              En,
              ye,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ye] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ye] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [n] }],
        "placeholder-opacity": [{ "placeholder-opacity": [A] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [n] }],
        "text-opacity": [{ "text-opacity": [A] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...se(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", En, qn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", En, ye] }],
        "text-decoration-color": [{ decoration: [n] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ye,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ye] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [A] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...me(), c0] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", u0] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              f0,
            ],
          },
        ],
        "bg-color": [{ bg: [n] }],
        "gradient-from-pos": [{ from: [T] }],
        "gradient-via-pos": [{ via: [T] }],
        "gradient-to-pos": [{ to: [T] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [d] }],
        "rounded-s": [{ "rounded-s": [d] }],
        "rounded-e": [{ "rounded-e": [d] }],
        "rounded-t": [{ "rounded-t": [d] }],
        "rounded-r": [{ "rounded-r": [d] }],
        "rounded-b": [{ "rounded-b": [d] }],
        "rounded-l": [{ "rounded-l": [d] }],
        "rounded-ss": [{ "rounded-ss": [d] }],
        "rounded-se": [{ "rounded-se": [d] }],
        "rounded-ee": [{ "rounded-ee": [d] }],
        "rounded-es": [{ "rounded-es": [d] }],
        "rounded-tl": [{ "rounded-tl": [d] }],
        "rounded-tr": [{ "rounded-tr": [d] }],
        "rounded-br": [{ "rounded-br": [d] }],
        "rounded-bl": [{ "rounded-bl": [d] }],
        "border-w": [{ border: [h] }],
        "border-w-x": [{ "border-x": [h] }],
        "border-w-y": [{ "border-y": [h] }],
        "border-w-s": [{ "border-s": [h] }],
        "border-w-e": [{ "border-e": [h] }],
        "border-w-t": [{ "border-t": [h] }],
        "border-w-r": [{ "border-r": [h] }],
        "border-w-b": [{ "border-b": [h] }],
        "border-w-l": [{ "border-l": [h] }],
        "border-opacity": [{ "border-opacity": [A] }],
        "border-style": [{ border: [...se(), "hidden"] }],
        "divide-x": [{ "divide-x": [h] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [h] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [A] }],
        "divide-style": [{ divide: se() }],
        "border-color": [{ border: [u] }],
        "border-color-x": [{ "border-x": [u] }],
        "border-color-y": [{ "border-y": [u] }],
        "border-color-s": [{ "border-s": [u] }],
        "border-color-e": [{ "border-e": [u] }],
        "border-color-t": [{ "border-t": [u] }],
        "border-color-r": [{ "border-r": [u] }],
        "border-color-b": [{ "border-b": [u] }],
        "border-color-l": [{ "border-l": [u] }],
        "divide-color": [{ divide: [u] }],
        "outline-style": [{ outline: ["", ...se()] }],
        "outline-offset": [{ "outline-offset": [En, ye] }],
        "outline-w": [{ outline: [En, qn] }],
        "outline-color": [{ outline: [n] }],
        "ring-w": [{ ring: he() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [n] }],
        "ring-opacity": [{ "ring-opacity": [A] }],
        "ring-offset-w": [{ "ring-offset": [En, qn] }],
        "ring-offset-color": [{ "ring-offset": [n] }],
        shadow: [{ shadow: ["", "inner", "none", Yn, p0] }],
        "shadow-color": [{ shadow: [Yo] }],
        opacity: [{ opacity: [A] }],
        "mix-blend": [
          { "mix-blend": [...re(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": re() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [s] }],
        brightness: [{ brightness: [a] }],
        contrast: [{ contrast: [g] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Yn, ye] }],
        grayscale: [{ grayscale: [v] }],
        "hue-rotate": [{ "hue-rotate": [x] }],
        invert: [{ invert: [w] }],
        saturate: [{ saturate: [D] }],
        sepia: [{ sepia: [V] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [s] }],
        "backdrop-brightness": [{ "backdrop-brightness": [a] }],
        "backdrop-contrast": [{ "backdrop-contrast": [g] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [v] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [x] }],
        "backdrop-invert": [{ "backdrop-invert": [w] }],
        "backdrop-opacity": [{ "backdrop-opacity": [A] }],
        "backdrop-saturate": [{ "backdrop-saturate": [D] }],
        "backdrop-sepia": [{ "backdrop-sepia": [V] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [p] }],
        "border-spacing-x": [{ "border-spacing-x": [p] }],
        "border-spacing-y": [{ "border-spacing-y": [p] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ye,
            ],
          },
        ],
        duration: [{ duration: P() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ye] }],
        delay: [{ delay: P() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ye] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [F] }],
        "scale-x": [{ "scale-x": [F] }],
        "scale-y": [{ "scale-y": [F] }],
        rotate: [{ rotate: [qo, ye] }],
        "translate-x": [{ "translate-x": [ce] }],
        "translate-y": [{ "translate-y": [ce] }],
        "skew-x": [{ "skew-x": [K] }],
        "skew-y": [{ "skew-y": [K] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ye,
            ],
          },
        ],
        accent: [{ accent: ["auto", n] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ye,
            ],
          },
        ],
        "caret-color": [{ caret: [n] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Z() }],
        "scroll-mx": [{ "scroll-mx": Z() }],
        "scroll-my": [{ "scroll-my": Z() }],
        "scroll-ms": [{ "scroll-ms": Z() }],
        "scroll-me": [{ "scroll-me": Z() }],
        "scroll-mt": [{ "scroll-mt": Z() }],
        "scroll-mr": [{ "scroll-mr": Z() }],
        "scroll-mb": [{ "scroll-mb": Z() }],
        "scroll-ml": [{ "scroll-ml": Z() }],
        "scroll-p": [{ "scroll-p": Z() }],
        "scroll-px": [{ "scroll-px": Z() }],
        "scroll-py": [{ "scroll-py": Z() }],
        "scroll-ps": [{ "scroll-ps": Z() }],
        "scroll-pe": [{ "scroll-pe": Z() }],
        "scroll-pt": [{ "scroll-pt": Z() }],
        "scroll-pr": [{ "scroll-pr": Z() }],
        "scroll-pb": [{ "scroll-pb": Z() }],
        "scroll-pl": [{ "scroll-pl": Z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ye] },
        ],
        fill: [{ fill: [n, "none"] }],
        "stroke-w": [{ stroke: [En, qn, Ql] }],
        stroke: [{ stroke: [n, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  y0 = Jy(v0);
function Re(...n) {
  return y0(Qp(n));
}
const x0 = gy,
  oh = S.forwardRef(({ className: n, ...o }, s) =>
    f.jsx(Fp, {
      ref: s,
      className: Re(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        n
      ),
      ...o,
    })
  );
oh.displayName = Fp.displayName;
const w0 = wu(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  sh = S.forwardRef(({ className: n, variant: o, ...s }, a) =>
    f.jsx(Up, { ref: a, className: Re(w0({ variant: o }), n), ...s })
  );
sh.displayName = Up.displayName;
const S0 = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx(Hp, {
    ref: s,
    className: Re(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      n
    ),
    ...o,
  })
);
S0.displayName = Hp.displayName;
const ih = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx(Vp, {
    ref: s,
    className: Re(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      n
    ),
    "toast-close": "",
    ...o,
    children: f.jsx(Zp, { className: "h-4 w-4" }),
  })
);
ih.displayName = Vp.displayName;
const ah = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx(Bp, { ref: s, className: Re("text-sm font-semibold", n), ...o })
);
ah.displayName = Bp.displayName;
const lh = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx($p, { ref: s, className: Re("text-sm opacity-90", n), ...o })
);
lh.displayName = $p.displayName;
function E0() {
  const { toasts: n } = Cv();
  return f.jsxs(x0, {
    children: [
      n.map(function ({ id: o, title: s, description: a, action: u, ...d }) {
        return f.jsxs(
          sh,
          {
            ...d,
            children: [
              f.jsxs("div", {
                className: "grid gap-1",
                children: [
                  s && f.jsx(ah, { children: s }),
                  a && f.jsx(lh, { children: a }),
                ],
              }),
              u,
              f.jsx(ih, {}),
            ],
          },
          o
        );
      }),
      f.jsx(oh, {}),
    ],
  });
}
var _f = ["light", "dark"],
  C0 = "(prefers-color-scheme: dark)",
  k0 = S.createContext(void 0),
  N0 = { setTheme: (n) => {}, themes: [] },
  b0 = () => {
    var n;
    return (n = S.useContext(k0)) != null ? n : N0;
  };
S.memo(
  ({
    forcedTheme: n,
    storageKey: o,
    attribute: s,
    enableSystem: a,
    enableColorScheme: u,
    defaultTheme: d,
    value: p,
    attrs: h,
    nonce: g,
  }) => {
    let v = d === "system",
      x =
        s === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${h
              .map((T) => `'${T}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${s}',s='setAttribute';`,
      w = u
        ? _f.includes(d) && d
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${d}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      b = (T, C = !1, k = !0) => {
        let A = p ? p[T] : T,
          L = C ? T + "|| ''" : `'${A}'`,
          D = "";
        return (
          u &&
            k &&
            !C &&
            _f.includes(T) &&
            (D += `d.style.colorScheme = '${T}';`),
          s === "class"
            ? C || A
              ? (D += `c.add(${L})`)
              : (D += "null")
            : A && (D += `d[s](n,${L})`),
          D
        );
      },
      y = n
        ? `!function(){${x}${b(n)}}()`
        : a
        ? `!function(){try{${x}var e=localStorage.getItem('${o}');if('system'===e||(!e&&${v})){var t='${C0}',m=window.matchMedia(t);if(m.media!==t||m.matches){${b(
            "dark"
          )}}else{${b("light")}}}else if(e){${
            p ? `var x=${JSON.stringify(p)};` : ""
          }${b(p ? "x[e]" : "e", !0)}}${
            v ? "" : "else{" + b(d, !1, !1) + "}"
          }${w}}catch(e){}}()`
        : `!function(){try{${x}var e=localStorage.getItem('${o}');if(e){${
            p ? `var x=${JSON.stringify(p)};` : ""
          }${b(p ? "x[e]" : "e", !0)}}else{${b(
            d,
            !1,
            !1
          )};}${w}}catch(t){}}();`;
    return S.createElement("script", {
      nonce: g,
      dangerouslySetInnerHTML: { __html: y },
    });
  }
);
var j0 = (n) => {
    switch (n) {
      case "success":
        return R0;
      case "info":
        return M0;
      case "warning":
        return O0;
      case "error":
        return A0;
      default:
        return null;
    }
  },
  P0 = Array(12).fill(0),
  T0 = ({ visible: n, className: o }) =>
    Q.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", o].filter(Boolean).join(" "),
        "data-visible": n,
      },
      Q.createElement(
        "div",
        { className: "sonner-spinner" },
        P0.map((s, a) =>
          Q.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${a}`,
          })
        )
      )
    ),
  R0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  O0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  M0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  A0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  _0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    Q.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    Q.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  L0 = () => {
    let [n, o] = Q.useState(document.hidden);
    return (
      Q.useEffect(() => {
        let s = () => {
          o(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => window.removeEventListener("visibilitychange", s)
        );
      }, []),
      n
    );
  },
  su = 1,
  D0 = class {
    constructor() {
      (this.subscribe = (n) => (
        this.subscribers.push(n),
        () => {
          let o = this.subscribers.indexOf(n);
          this.subscribers.splice(o, 1);
        }
      )),
        (this.publish = (n) => {
          this.subscribers.forEach((o) => o(n));
        }),
        (this.addToast = (n) => {
          this.publish(n), (this.toasts = [...this.toasts, n]);
        }),
        (this.create = (n) => {
          var o;
          let { message: s, ...a } = n,
            u =
              typeof n?.id == "number" ||
              ((o = n.id) == null ? void 0 : o.length) > 0
                ? n.id
                : su++,
            d = this.toasts.find((h) => h.id === u),
            p = n.dismissible === void 0 ? !0 : n.dismissible;
          return (
            this.dismissedToasts.has(u) && this.dismissedToasts.delete(u),
            d
              ? (this.toasts = this.toasts.map((h) =>
                  h.id === u
                    ? (this.publish({ ...h, ...n, id: u, title: s }),
                      { ...h, ...n, id: u, dismissible: p, title: s })
                    : h
                ))
              : this.addToast({ title: s, ...a, dismissible: p, id: u }),
            u
          );
        }),
        (this.dismiss = (n) => (
          this.dismissedToasts.add(n),
          n ||
            this.toasts.forEach((o) => {
              this.subscribers.forEach((s) => s({ id: o.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((o) => o({ id: n, dismiss: !0 })),
          n
        )),
        (this.message = (n, o) => this.create({ ...o, message: n })),
        (this.error = (n, o) =>
          this.create({ ...o, message: n, type: "error" })),
        (this.success = (n, o) =>
          this.create({ ...o, type: "success", message: n })),
        (this.info = (n, o) => this.create({ ...o, type: "info", message: n })),
        (this.warning = (n, o) =>
          this.create({ ...o, type: "warning", message: n })),
        (this.loading = (n, o) =>
          this.create({ ...o, type: "loading", message: n })),
        (this.promise = (n, o) => {
          if (!o) return;
          let s;
          o.loading !== void 0 &&
            (s = this.create({
              ...o,
              promise: n,
              type: "loading",
              message: o.loading,
              description:
                typeof o.description != "function" ? o.description : void 0,
            }));
          let a = n instanceof Promise ? n : n(),
            u = s !== void 0,
            d,
            p = a
              .then(async (g) => {
                if (((d = ["resolve", g]), Q.isValidElement(g)))
                  (u = !1), this.create({ id: s, type: "default", message: g });
                else if (z0(g) && !g.ok) {
                  u = !1;
                  let v =
                      typeof o.error == "function"
                        ? await o.error(`HTTP error! status: ${g.status}`)
                        : o.error,
                    x =
                      typeof o.description == "function"
                        ? await o.description(`HTTP error! status: ${g.status}`)
                        : o.description;
                  this.create({
                    id: s,
                    type: "error",
                    message: v,
                    description: x,
                  });
                } else if (o.success !== void 0) {
                  u = !1;
                  let v =
                      typeof o.success == "function"
                        ? await o.success(g)
                        : o.success,
                    x =
                      typeof o.description == "function"
                        ? await o.description(g)
                        : o.description;
                  this.create({
                    id: s,
                    type: "success",
                    message: v,
                    description: x,
                  });
                }
              })
              .catch(async (g) => {
                if (((d = ["reject", g]), o.error !== void 0)) {
                  u = !1;
                  let v =
                      typeof o.error == "function" ? await o.error(g) : o.error,
                    x =
                      typeof o.description == "function"
                        ? await o.description(g)
                        : o.description;
                  this.create({
                    id: s,
                    type: "error",
                    message: v,
                    description: x,
                  });
                }
              })
              .finally(() => {
                var g;
                u && (this.dismiss(s), (s = void 0)),
                  (g = o.finally) == null || g.call(o);
              }),
            h = () =>
              new Promise((g, v) =>
                p.then(() => (d[0] === "reject" ? v(d[1]) : g(d[1]))).catch(v)
              );
          return typeof s != "string" && typeof s != "number"
            ? { unwrap: h }
            : Object.assign(s, { unwrap: h });
        }),
        (this.custom = (n, o) => {
          let s = o?.id || su++;
          return this.create({ jsx: n(s), id: s, ...o }), s;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((n) => !this.dismissedToasts.has(n.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  xt = new D0(),
  I0 = (n, o) => {
    let s = o?.id || su++;
    return xt.addToast({ title: n, ...o, id: s }), s;
  },
  z0 = (n) =>
    n &&
    typeof n == "object" &&
    "ok" in n &&
    typeof n.ok == "boolean" &&
    "status" in n &&
    typeof n.status == "number",
  F0 = I0,
  U0 = () => xt.toasts,
  B0 = () => xt.getActiveToasts();
Object.assign(
  F0,
  {
    success: xt.success,
    info: xt.info,
    warning: xt.warning,
    error: xt.error,
    custom: xt.custom,
    message: xt.message,
    promise: xt.promise,
    dismiss: xt.dismiss,
    loading: xt.loading,
  },
  { getHistory: U0, getToasts: B0 }
);
function $0(n, { insertAt: o } = {}) {
  if (typeof document > "u") return;
  let s = document.head || document.getElementsByTagName("head")[0],
    a = document.createElement("style");
  (a.type = "text/css"),
    o === "top" && s.firstChild
      ? s.insertBefore(a, s.firstChild)
      : s.appendChild(a),
    a.styleSheet
      ? (a.styleSheet.cssText = n)
      : a.appendChild(document.createTextNode(n));
}
$0(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ti(n) {
  return n.label !== void 0;
}
var H0 = 3,
  V0 = "32px",
  W0 = "16px",
  Lf = 4e3,
  Q0 = 356,
  K0 = 14,
  G0 = 20,
  q0 = 200;
function Wt(...n) {
  return n.filter(Boolean).join(" ");
}
function Y0(n) {
  let [o, s] = n.split("-"),
    a = [];
  return o && a.push(o), s && a.push(s), a;
}
var X0 = (n) => {
  var o, s, a, u, d, p, h, g, v, x, w;
  let {
      invert: b,
      toast: y,
      unstyled: T,
      interacting: C,
      setHeights: k,
      visibleToasts: A,
      heights: L,
      index: D,
      toasts: F,
      expanded: V,
      removeToast: K,
      defaultRichColors: q,
      closeButton: ce,
      style: ge,
      cancelButtonStyle: pe,
      actionButtonStyle: xe,
      className: Z = "",
      descriptionClassName: he = "",
      duration: G,
      position: me,
      gap: se,
      loadingIcon: re,
      expandByDefault: I,
      classNames: z,
      icons: H,
      closeButtonAriaLabel: P = "Close toast",
      pauseWhenPageIsHidden: _,
    } = n,
    [Y, J] = Q.useState(null),
    [ue, ve] = Q.useState(null),
    [ie, Se] = Q.useState(!1),
    [ke, He] = Q.useState(!1),
    [bt, jn] = Q.useState(!1),
    [jt, ao] = Q.useState(!1),
    [fs, lo] = Q.useState(!1),
    [uo, Er] = Q.useState(0),
    [co, Pn] = Q.useState(0),
    Pt = Q.useRef(y.duration || G || Lf),
    Cr = Q.useRef(null),
    Xt = Q.useRef(null),
    ps = D === 0,
    hs = D + 1 <= A,
    it = y.type,
    Zt = y.dismissible !== !1,
    kr = y.className || "",
    ms = y.descriptionClassName || "",
    Jt = Q.useMemo(
      () => L.findIndex((fe) => fe.toastId === y.id) || 0,
      [L, y.id]
    ),
    nr = Q.useMemo(() => {
      var fe;
      return (fe = y.closeButton) != null ? fe : ce;
    }, [y.closeButton, ce]),
    gs = Q.useMemo(() => y.duration || G || Lf, [y.duration, G]),
    Nr = Q.useRef(0),
    pn = Q.useRef(0),
    vs = Q.useRef(0),
    en = Q.useRef(null),
    [fo, po] = me.split("-"),
    br = Q.useMemo(
      () => L.reduce((fe, be, Pe) => (Pe >= Jt ? fe : fe + be.height), 0),
      [L, Jt]
    ),
    jr = L0(),
    Tn = y.invert || b,
    tn = it === "loading";
  (pn.current = Q.useMemo(() => Jt * se + br, [Jt, br])),
    Q.useEffect(() => {
      Pt.current = gs;
    }, [gs]),
    Q.useEffect(() => {
      Se(!0);
    }, []),
    Q.useEffect(() => {
      let fe = Xt.current;
      if (fe) {
        let be = fe.getBoundingClientRect().height;
        return (
          Pn(be),
          k((Pe) => [
            { toastId: y.id, height: be, position: y.position },
            ...Pe,
          ]),
          () => k((Pe) => Pe.filter((at) => at.toastId !== y.id))
        );
      }
    }, [k, y.id]),
    Q.useLayoutEffect(() => {
      if (!ie) return;
      let fe = Xt.current,
        be = fe.style.height;
      fe.style.height = "auto";
      let Pe = fe.getBoundingClientRect().height;
      (fe.style.height = be),
        Pn(Pe),
        k((at) =>
          at.find((dt) => dt.toastId === y.id)
            ? at.map((dt) => (dt.toastId === y.id ? { ...dt, height: Pe } : dt))
            : [{ toastId: y.id, height: Pe, position: y.position }, ...at]
        );
    }, [ie, y.title, y.description, k, y.id]);
  let Dt = Q.useCallback(() => {
    He(!0),
      Er(pn.current),
      k((fe) => fe.filter((be) => be.toastId !== y.id)),
      setTimeout(() => {
        K(y);
      }, q0);
  }, [y, K, k, pn]);
  Q.useEffect(() => {
    if (
      (y.promise && it === "loading") ||
      y.duration === 1 / 0 ||
      y.type === "loading"
    )
      return;
    let fe;
    return (
      V || C || (_ && jr)
        ? (() => {
            if (vs.current < Nr.current) {
              let be = new Date().getTime() - Nr.current;
              Pt.current = Pt.current - be;
            }
            vs.current = new Date().getTime();
          })()
        : Pt.current !== 1 / 0 &&
          ((Nr.current = new Date().getTime()),
          (fe = setTimeout(() => {
            var be;
            (be = y.onAutoClose) == null || be.call(y, y), Dt();
          }, Pt.current))),
      () => clearTimeout(fe)
    );
  }, [V, C, y, it, _, jr, Dt]),
    Q.useEffect(() => {
      y.delete && Dt();
    }, [Dt, y.delete]);
  function ys() {
    var fe, be, Pe;
    return H != null && H.loading
      ? Q.createElement(
          "div",
          {
            className: Wt(
              z?.loader,
              (fe = y?.classNames) == null ? void 0 : fe.loader,
              "sonner-loader"
            ),
            "data-visible": it === "loading",
          },
          H.loading
        )
      : re
      ? Q.createElement(
          "div",
          {
            className: Wt(
              z?.loader,
              (be = y?.classNames) == null ? void 0 : be.loader,
              "sonner-loader"
            ),
            "data-visible": it === "loading",
          },
          re
        )
      : Q.createElement(T0, {
          className: Wt(
            z?.loader,
            (Pe = y?.classNames) == null ? void 0 : Pe.loader
          ),
          visible: it === "loading",
        });
  }
  return Q.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Xt,
      className: Wt(
        Z,
        kr,
        z?.toast,
        (o = y?.classNames) == null ? void 0 : o.toast,
        z?.default,
        z?.[it],
        (s = y?.classNames) == null ? void 0 : s[it]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (a = y.richColors) != null ? a : q,
      "data-styled": !(y.jsx || y.unstyled || T),
      "data-mounted": ie,
      "data-promise": !!y.promise,
      "data-swiped": fs,
      "data-removed": ke,
      "data-visible": hs,
      "data-y-position": fo,
      "data-x-position": po,
      "data-index": D,
      "data-front": ps,
      "data-swiping": bt,
      "data-dismissible": Zt,
      "data-type": it,
      "data-invert": Tn,
      "data-swipe-out": jt,
      "data-swipe-direction": ue,
      "data-expanded": !!(V || (I && ie)),
      style: {
        "--index": D,
        "--toasts-before": D,
        "--z-index": F.length - D,
        "--offset": `${ke ? uo : pn.current}px`,
        "--initial-height": I ? "auto" : `${co}px`,
        ...ge,
        ...y.style,
      },
      onDragEnd: () => {
        jn(!1), J(null), (en.current = null);
      },
      onPointerDown: (fe) => {
        tn ||
          !Zt ||
          ((Cr.current = new Date()),
          Er(pn.current),
          fe.target.setPointerCapture(fe.pointerId),
          fe.target.tagName !== "BUTTON" &&
            (jn(!0), (en.current = { x: fe.clientX, y: fe.clientY })));
      },
      onPointerUp: () => {
        var fe, be, Pe, at;
        if (jt || !Zt) return;
        en.current = null;
        let dt = Number(
            ((fe = Xt.current) == null
              ? void 0
              : fe.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          ft = Number(
            ((be = Xt.current) == null
              ? void 0
              : be.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          It =
            new Date().getTime() -
            ((Pe = Cr.current) == null ? void 0 : Pe.getTime()),
          Je = Y === "x" ? dt : ft,
          nn = Math.abs(Je) / It;
        if (Math.abs(Je) >= G0 || nn > 0.11) {
          Er(pn.current),
            (at = y.onDismiss) == null || at.call(y, y),
            ve(
              Y === "x" ? (dt > 0 ? "right" : "left") : ft > 0 ? "down" : "up"
            ),
            Dt(),
            ao(!0),
            lo(!1);
          return;
        }
        jn(!1), J(null);
      },
      onPointerMove: (fe) => {
        var be, Pe, at, dt;
        if (
          !en.current ||
          !Zt ||
          ((be = window.getSelection()) == null
            ? void 0
            : be.toString().length) > 0
        )
          return;
        let ft = fe.clientY - en.current.y,
          It = fe.clientX - en.current.x,
          Je = (Pe = n.swipeDirections) != null ? Pe : Y0(me);
        !Y &&
          (Math.abs(It) > 1 || Math.abs(ft) > 1) &&
          J(Math.abs(It) > Math.abs(ft) ? "x" : "y");
        let nn = { x: 0, y: 0 };
        Y === "y"
          ? (Je.includes("top") || Je.includes("bottom")) &&
            ((Je.includes("top") && ft < 0) ||
              (Je.includes("bottom") && ft > 0)) &&
            (nn.y = ft)
          : Y === "x" &&
            (Je.includes("left") || Je.includes("right")) &&
            ((Je.includes("left") && It < 0) ||
              (Je.includes("right") && It > 0)) &&
            (nn.x = It),
          (Math.abs(nn.x) > 0 || Math.abs(nn.y) > 0) && lo(!0),
          (at = Xt.current) == null ||
            at.style.setProperty("--swipe-amount-x", `${nn.x}px`),
          (dt = Xt.current) == null ||
            dt.style.setProperty("--swipe-amount-y", `${nn.y}px`);
      },
    },
    nr && !y.jsx
      ? Q.createElement(
          "button",
          {
            "aria-label": P,
            "data-disabled": tn,
            "data-close-button": !0,
            onClick:
              tn || !Zt
                ? () => {}
                : () => {
                    var fe;
                    Dt(), (fe = y.onDismiss) == null || fe.call(y, y);
                  },
            className: Wt(
              z?.closeButton,
              (u = y?.classNames) == null ? void 0 : u.closeButton
            ),
          },
          (d = H?.close) != null ? d : _0
        )
      : null,
    y.jsx || S.isValidElement(y.title)
      ? y.jsx
        ? y.jsx
        : typeof y.title == "function"
        ? y.title()
        : y.title
      : Q.createElement(
          Q.Fragment,
          null,
          it || y.icon || y.promise
            ? Q.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Wt(
                    z?.icon,
                    (p = y?.classNames) == null ? void 0 : p.icon
                  ),
                },
                y.promise || (y.type === "loading" && !y.icon)
                  ? y.icon || ys()
                  : null,
                y.type !== "loading" ? y.icon || H?.[it] || j0(it) : null
              )
            : null,
          Q.createElement(
            "div",
            {
              "data-content": "",
              className: Wt(
                z?.content,
                (h = y?.classNames) == null ? void 0 : h.content
              ),
            },
            Q.createElement(
              "div",
              {
                "data-title": "",
                className: Wt(
                  z?.title,
                  (g = y?.classNames) == null ? void 0 : g.title
                ),
              },
              typeof y.title == "function" ? y.title() : y.title
            ),
            y.description
              ? Q.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Wt(
                      he,
                      ms,
                      z?.description,
                      (v = y?.classNames) == null ? void 0 : v.description
                    ),
                  },
                  typeof y.description == "function"
                    ? y.description()
                    : y.description
                )
              : null
          ),
          S.isValidElement(y.cancel)
            ? y.cancel
            : y.cancel && Ti(y.cancel)
            ? Q.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: y.cancelButtonStyle || pe,
                  onClick: (fe) => {
                    var be, Pe;
                    Ti(y.cancel) &&
                      Zt &&
                      ((Pe = (be = y.cancel).onClick) == null ||
                        Pe.call(be, fe),
                      Dt());
                  },
                  className: Wt(
                    z?.cancelButton,
                    (x = y?.classNames) == null ? void 0 : x.cancelButton
                  ),
                },
                y.cancel.label
              )
            : null,
          S.isValidElement(y.action)
            ? y.action
            : y.action && Ti(y.action)
            ? Q.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: y.actionButtonStyle || xe,
                  onClick: (fe) => {
                    var be, Pe;
                    Ti(y.action) &&
                      ((Pe = (be = y.action).onClick) == null ||
                        Pe.call(be, fe),
                      !fe.defaultPrevented && Dt());
                  },
                  className: Wt(
                    z?.actionButton,
                    (w = y?.classNames) == null ? void 0 : w.actionButton
                  ),
                },
                y.action.label
              )
            : null
        )
  );
};
function Df() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n
    ? window.getComputedStyle(document.documentElement).direction
    : n;
}
function Z0(n, o) {
  let s = {};
  return (
    [n, o].forEach((a, u) => {
      let d = u === 1,
        p = d ? "--mobile-offset" : "--offset",
        h = d ? W0 : V0;
      function g(v) {
        ["top", "right", "bottom", "left"].forEach((x) => {
          s[`${p}-${x}`] = typeof v == "number" ? `${v}px` : v;
        });
      }
      typeof a == "number" || typeof a == "string"
        ? g(a)
        : typeof a == "object"
        ? ["top", "right", "bottom", "left"].forEach((v) => {
            a[v] === void 0
              ? (s[`${p}-${v}`] = h)
              : (s[`${p}-${v}`] = typeof a[v] == "number" ? `${a[v]}px` : a[v]);
          })
        : g(h);
    }),
    s
  );
}
var J0 = S.forwardRef(function (n, o) {
  let {
      invert: s,
      position: a = "bottom-right",
      hotkey: u = ["altKey", "KeyT"],
      expand: d,
      closeButton: p,
      className: h,
      offset: g,
      mobileOffset: v,
      theme: x = "light",
      richColors: w,
      duration: b,
      style: y,
      visibleToasts: T = H0,
      toastOptions: C,
      dir: k = Df(),
      gap: A = K0,
      loadingIcon: L,
      icons: D,
      containerAriaLabel: F = "Notifications",
      pauseWhenPageIsHidden: V,
    } = n,
    [K, q] = Q.useState([]),
    ce = Q.useMemo(
      () =>
        Array.from(
          new Set(
            [a].concat(K.filter((_) => _.position).map((_) => _.position))
          )
        ),
      [K, a]
    ),
    [ge, pe] = Q.useState([]),
    [xe, Z] = Q.useState(!1),
    [he, G] = Q.useState(!1),
    [me, se] = Q.useState(
      x !== "system"
        ? x
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    re = Q.useRef(null),
    I = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    z = Q.useRef(null),
    H = Q.useRef(!1),
    P = Q.useCallback((_) => {
      q((Y) => {
        var J;
        return (
          ((J = Y.find((ue) => ue.id === _.id)) != null && J.delete) ||
            xt.dismiss(_.id),
          Y.filter(({ id: ue }) => ue !== _.id)
        );
      });
    }, []);
  return (
    Q.useEffect(
      () =>
        xt.subscribe((_) => {
          if (_.dismiss) {
            q((Y) => Y.map((J) => (J.id === _.id ? { ...J, delete: !0 } : J)));
            return;
          }
          setTimeout(() => {
            yp.flushSync(() => {
              q((Y) => {
                let J = Y.findIndex((ue) => ue.id === _.id);
                return J !== -1
                  ? [...Y.slice(0, J), { ...Y[J], ..._ }, ...Y.slice(J + 1)]
                  : [_, ...Y];
              });
            });
          });
        }),
      []
    ),
    Q.useEffect(() => {
      if (x !== "system") {
        se(x);
        return;
      }
      if (
        (x === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? se("dark")
            : se("light")),
        typeof window > "u")
      )
        return;
      let _ = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        _.addEventListener("change", ({ matches: Y }) => {
          se(Y ? "dark" : "light");
        });
      } catch {
        _.addListener(({ matches: J }) => {
          try {
            se(J ? "dark" : "light");
          } catch (ue) {
            console.error(ue);
          }
        });
      }
    }, [x]),
    Q.useEffect(() => {
      K.length <= 1 && Z(!1);
    }, [K]),
    Q.useEffect(() => {
      let _ = (Y) => {
        var J, ue;
        u.every((ve) => Y[ve] || Y.code === ve) &&
          (Z(!0), (J = re.current) == null || J.focus()),
          Y.code === "Escape" &&
            (document.activeElement === re.current ||
              ((ue = re.current) != null &&
                ue.contains(document.activeElement))) &&
            Z(!1);
      };
      return (
        document.addEventListener("keydown", _),
        () => document.removeEventListener("keydown", _)
      );
    }, [u]),
    Q.useEffect(() => {
      if (re.current)
        return () => {
          z.current &&
            (z.current.focus({ preventScroll: !0 }),
            (z.current = null),
            (H.current = !1));
        };
    }, [re.current]),
    Q.createElement(
      "section",
      {
        ref: o,
        "aria-label": `${F} ${I}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      ce.map((_, Y) => {
        var J;
        let [ue, ve] = _.split("-");
        return K.length
          ? Q.createElement(
              "ol",
              {
                key: _,
                dir: k === "auto" ? Df() : k,
                tabIndex: -1,
                ref: re,
                className: h,
                "data-sonner-toaster": !0,
                "data-theme": me,
                "data-y-position": ue,
                "data-lifted": xe && K.length > 1 && !d,
                "data-x-position": ve,
                style: {
                  "--front-toast-height": `${
                    ((J = ge[0]) == null ? void 0 : J.height) || 0
                  }px`,
                  "--width": `${Q0}px`,
                  "--gap": `${A}px`,
                  ...y,
                  ...Z0(g, v),
                },
                onBlur: (ie) => {
                  H.current &&
                    !ie.currentTarget.contains(ie.relatedTarget) &&
                    ((H.current = !1),
                    z.current &&
                      (z.current.focus({ preventScroll: !0 }),
                      (z.current = null)));
                },
                onFocus: (ie) => {
                  (ie.target instanceof HTMLElement &&
                    ie.target.dataset.dismissible === "false") ||
                    H.current ||
                    ((H.current = !0), (z.current = ie.relatedTarget));
                },
                onMouseEnter: () => Z(!0),
                onMouseMove: () => Z(!0),
                onMouseLeave: () => {
                  he || Z(!1);
                },
                onDragEnd: () => Z(!1),
                onPointerDown: (ie) => {
                  (ie.target instanceof HTMLElement &&
                    ie.target.dataset.dismissible === "false") ||
                    G(!0);
                },
                onPointerUp: () => G(!1),
              },
              K.filter(
                (ie) => (!ie.position && Y === 0) || ie.position === _
              ).map((ie, Se) => {
                var ke, He;
                return Q.createElement(X0, {
                  key: ie.id,
                  icons: D,
                  index: Se,
                  toast: ie,
                  defaultRichColors: w,
                  duration: (ke = C?.duration) != null ? ke : b,
                  className: C?.className,
                  descriptionClassName: C?.descriptionClassName,
                  invert: s,
                  visibleToasts: T,
                  closeButton: (He = C?.closeButton) != null ? He : p,
                  interacting: he,
                  position: _,
                  style: C?.style,
                  unstyled: C?.unstyled,
                  classNames: C?.classNames,
                  cancelButtonStyle: C?.cancelButtonStyle,
                  actionButtonStyle: C?.actionButtonStyle,
                  removeToast: P,
                  toasts: K.filter((bt) => bt.position == ie.position),
                  heights: ge.filter((bt) => bt.position == ie.position),
                  setHeights: pe,
                  expandByDefault: d,
                  gap: A,
                  loadingIcon: L,
                  expanded: xe,
                  pauseWhenPageIsHidden: V,
                  swipeDirections: n.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const ex = ({ ...n }) => {
    const { theme: o = "system" } = b0();
    return f.jsx(J0, {
      theme: o,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...n,
    });
  },
  tx = ["top", "right", "bottom", "left"],
  er = Math.min,
  kt = Math.max,
  Di = Math.round,
  Ri = Math.floor,
  cn = (n) => ({ x: n, y: n }),
  nx = { left: "right", right: "left", bottom: "top", top: "bottom" },
  rx = { start: "end", end: "start" };
function iu(n, o, s) {
  return kt(n, er(o, s));
}
function Nn(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function bn(n) {
  return n.split("-")[0];
}
function no(n) {
  return n.split("-")[1];
}
function Eu(n) {
  return n === "x" ? "y" : "x";
}
function Cu(n) {
  return n === "y" ? "height" : "width";
}
const ox = new Set(["top", "bottom"]);
function un(n) {
  return ox.has(bn(n)) ? "y" : "x";
}
function ku(n) {
  return Eu(un(n));
}
function sx(n, o, s) {
  s === void 0 && (s = !1);
  const a = no(n),
    u = ku(n),
    d = Cu(u);
  let p =
    u === "x"
      ? a === (s ? "end" : "start")
        ? "right"
        : "left"
      : a === "start"
      ? "bottom"
      : "top";
  return o.reference[d] > o.floating[d] && (p = Ii(p)), [p, Ii(p)];
}
function ix(n) {
  const o = Ii(n);
  return [au(n), o, au(o)];
}
function au(n) {
  return n.replace(/start|end/g, (o) => rx[o]);
}
const If = ["left", "right"],
  zf = ["right", "left"],
  ax = ["top", "bottom"],
  lx = ["bottom", "top"];
function ux(n, o, s) {
  switch (n) {
    case "top":
    case "bottom":
      return s ? (o ? zf : If) : o ? If : zf;
    case "left":
    case "right":
      return o ? ax : lx;
    default:
      return [];
  }
}
function cx(n, o, s, a) {
  const u = no(n);
  let d = ux(bn(n), s === "start", a);
  return (
    u && ((d = d.map((p) => p + "-" + u)), o && (d = d.concat(d.map(au)))), d
  );
}
function Ii(n) {
  return n.replace(/left|right|bottom|top/g, (o) => nx[o]);
}
function dx(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function uh(n) {
  return typeof n != "number"
    ? dx(n)
    : { top: n, right: n, bottom: n, left: n };
}
function zi(n) {
  const { x: o, y: s, width: a, height: u } = n;
  return {
    width: a,
    height: u,
    top: s,
    left: o,
    right: o + a,
    bottom: s + u,
    x: o,
    y: s,
  };
}
function Ff(n, o, s) {
  let { reference: a, floating: u } = n;
  const d = un(o),
    p = ku(o),
    h = Cu(p),
    g = bn(o),
    v = d === "y",
    x = a.x + a.width / 2 - u.width / 2,
    w = a.y + a.height / 2 - u.height / 2,
    b = a[h] / 2 - u[h] / 2;
  let y;
  switch (g) {
    case "top":
      y = { x, y: a.y - u.height };
      break;
    case "bottom":
      y = { x, y: a.y + a.height };
      break;
    case "right":
      y = { x: a.x + a.width, y: w };
      break;
    case "left":
      y = { x: a.x - u.width, y: w };
      break;
    default:
      y = { x: a.x, y: a.y };
  }
  switch (no(o)) {
    case "start":
      y[p] -= b * (s && v ? -1 : 1);
      break;
    case "end":
      y[p] += b * (s && v ? -1 : 1);
      break;
  }
  return y;
}
const fx = async (n, o, s) => {
  const {
      placement: a = "bottom",
      strategy: u = "absolute",
      middleware: d = [],
      platform: p,
    } = s,
    h = d.filter(Boolean),
    g = await (p.isRTL == null ? void 0 : p.isRTL(o));
  let v = await p.getElementRects({ reference: n, floating: o, strategy: u }),
    { x, y: w } = Ff(v, a, g),
    b = a,
    y = {},
    T = 0;
  for (let C = 0; C < h.length; C++) {
    const { name: k, fn: A } = h[C],
      {
        x: L,
        y: D,
        data: F,
        reset: V,
      } = await A({
        x,
        y: w,
        initialPlacement: a,
        placement: b,
        strategy: u,
        middlewareData: y,
        rects: v,
        platform: p,
        elements: { reference: n, floating: o },
      });
    (x = L ?? x),
      (w = D ?? w),
      (y = { ...y, [k]: { ...y[k], ...F } }),
      V &&
        T <= 50 &&
        (T++,
        typeof V == "object" &&
          (V.placement && (b = V.placement),
          V.rects &&
            (v =
              V.rects === !0
                ? await p.getElementRects({
                    reference: n,
                    floating: o,
                    strategy: u,
                  })
                : V.rects),
          ({ x, y: w } = Ff(v, b, g))),
        (C = -1));
  }
  return { x, y: w, placement: b, strategy: u, middlewareData: y };
};
async function ts(n, o) {
  var s;
  o === void 0 && (o = {});
  const { x: a, y: u, platform: d, rects: p, elements: h, strategy: g } = n,
    {
      boundary: v = "clippingAncestors",
      rootBoundary: x = "viewport",
      elementContext: w = "floating",
      altBoundary: b = !1,
      padding: y = 0,
    } = Nn(o, n),
    T = uh(y),
    k = h[b ? (w === "floating" ? "reference" : "floating") : w],
    A = zi(
      await d.getClippingRect({
        element:
          (s = await (d.isElement == null ? void 0 : d.isElement(k))) == null ||
          s
            ? k
            : k.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(h.floating))),
        boundary: v,
        rootBoundary: x,
        strategy: g,
      })
    ),
    L =
      w === "floating"
        ? { x: a, y: u, width: p.floating.width, height: p.floating.height }
        : p.reference,
    D = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(h.floating)),
    F = (await (d.isElement == null ? void 0 : d.isElement(D)))
      ? (await (d.getScale == null ? void 0 : d.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    V = zi(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: L,
            offsetParent: D,
            strategy: g,
          })
        : L
    );
  return {
    top: (A.top - V.top + T.top) / F.y,
    bottom: (V.bottom - A.bottom + T.bottom) / F.y,
    left: (A.left - V.left + T.left) / F.x,
    right: (V.right - A.right + T.right) / F.x,
  };
}
const px = (n) => ({
    name: "arrow",
    options: n,
    async fn(o) {
      const {
          x: s,
          y: a,
          placement: u,
          rects: d,
          platform: p,
          elements: h,
          middlewareData: g,
        } = o,
        { element: v, padding: x = 0 } = Nn(n, o) || {};
      if (v == null) return {};
      const w = uh(x),
        b = { x: s, y: a },
        y = ku(u),
        T = Cu(y),
        C = await p.getDimensions(v),
        k = y === "y",
        A = k ? "top" : "left",
        L = k ? "bottom" : "right",
        D = k ? "clientHeight" : "clientWidth",
        F = d.reference[T] + d.reference[y] - b[y] - d.floating[T],
        V = b[y] - d.reference[y],
        K = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(v));
      let q = K ? K[D] : 0;
      (!q || !(await (p.isElement == null ? void 0 : p.isElement(K)))) &&
        (q = h.floating[D] || d.floating[T]);
      const ce = F / 2 - V / 2,
        ge = q / 2 - C[T] / 2 - 1,
        pe = er(w[A], ge),
        xe = er(w[L], ge),
        Z = pe,
        he = q - C[T] - xe,
        G = q / 2 - C[T] / 2 + ce,
        me = iu(Z, G, he),
        se =
          !g.arrow &&
          no(u) != null &&
          G !== me &&
          d.reference[T] / 2 - (G < Z ? pe : xe) - C[T] / 2 < 0,
        re = se ? (G < Z ? G - Z : G - he) : 0;
      return {
        [y]: b[y] + re,
        data: {
          [y]: me,
          centerOffset: G - me - re,
          ...(se && { alignmentOffset: re }),
        },
        reset: se,
      };
    },
  }),
  hx = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "flip",
        options: n,
        async fn(o) {
          var s, a;
          const {
              placement: u,
              middlewareData: d,
              rects: p,
              initialPlacement: h,
              platform: g,
              elements: v,
            } = o,
            {
              mainAxis: x = !0,
              crossAxis: w = !0,
              fallbackPlacements: b,
              fallbackStrategy: y = "bestFit",
              fallbackAxisSideDirection: T = "none",
              flipAlignment: C = !0,
              ...k
            } = Nn(n, o);
          if ((s = d.arrow) != null && s.alignmentOffset) return {};
          const A = bn(u),
            L = un(h),
            D = bn(h) === h,
            F = await (g.isRTL == null ? void 0 : g.isRTL(v.floating)),
            V = b || (D || !C ? [Ii(h)] : ix(h)),
            K = T !== "none";
          !b && K && V.push(...cx(h, C, T, F));
          const q = [h, ...V],
            ce = await ts(o, k),
            ge = [];
          let pe = ((a = d.flip) == null ? void 0 : a.overflows) || [];
          if ((x && ge.push(ce[A]), w)) {
            const G = sx(u, p, F);
            ge.push(ce[G[0]], ce[G[1]]);
          }
          if (
            ((pe = [...pe, { placement: u, overflows: ge }]),
            !ge.every((G) => G <= 0))
          ) {
            var xe, Z;
            const G = (((xe = d.flip) == null ? void 0 : xe.index) || 0) + 1,
              me = q[G];
            if (
              me &&
              (!(w === "alignment" ? L !== un(me) : !1) ||
                pe.every((I) => I.overflows[0] > 0 && un(I.placement) === L))
            )
              return {
                data: { index: G, overflows: pe },
                reset: { placement: me },
              };
            let se =
              (Z = pe
                .filter((re) => re.overflows[0] <= 0)
                .sort((re, I) => re.overflows[1] - I.overflows[1])[0]) == null
                ? void 0
                : Z.placement;
            if (!se)
              switch (y) {
                case "bestFit": {
                  var he;
                  const re =
                    (he = pe
                      .filter((I) => {
                        if (K) {
                          const z = un(I.placement);
                          return z === L || z === "y";
                        }
                        return !0;
                      })
                      .map((I) => [
                        I.placement,
                        I.overflows
                          .filter((z) => z > 0)
                          .reduce((z, H) => z + H, 0),
                      ])
                      .sort((I, z) => I[1] - z[1])[0]) == null
                      ? void 0
                      : he[0];
                  re && (se = re);
                  break;
                }
                case "initialPlacement":
                  se = h;
                  break;
              }
            if (u !== se) return { reset: { placement: se } };
          }
          return {};
        },
      }
    );
  };
function Uf(n, o) {
  return {
    top: n.top - o.height,
    right: n.right - o.width,
    bottom: n.bottom - o.height,
    left: n.left - o.width,
  };
}
function Bf(n) {
  return tx.some((o) => n[o] >= 0);
}
const mx = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "hide",
        options: n,
        async fn(o) {
          const { rects: s } = o,
            { strategy: a = "referenceHidden", ...u } = Nn(n, o);
          switch (a) {
            case "referenceHidden": {
              const d = await ts(o, { ...u, elementContext: "reference" }),
                p = Uf(d, s.reference);
              return {
                data: { referenceHiddenOffsets: p, referenceHidden: Bf(p) },
              };
            }
            case "escaped": {
              const d = await ts(o, { ...u, altBoundary: !0 }),
                p = Uf(d, s.floating);
              return { data: { escapedOffsets: p, escaped: Bf(p) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  ch = new Set(["left", "top"]);
async function gx(n, o) {
  const { placement: s, platform: a, elements: u } = n,
    d = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
    p = bn(s),
    h = no(s),
    g = un(s) === "y",
    v = ch.has(p) ? -1 : 1,
    x = d && g ? -1 : 1,
    w = Nn(o, n);
  let {
    mainAxis: b,
    crossAxis: y,
    alignmentAxis: T,
  } = typeof w == "number"
    ? { mainAxis: w, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: w.mainAxis || 0,
        crossAxis: w.crossAxis || 0,
        alignmentAxis: w.alignmentAxis,
      };
  return (
    h && typeof T == "number" && (y = h === "end" ? T * -1 : T),
    g ? { x: y * x, y: b * v } : { x: b * v, y: y * x }
  );
}
const vx = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: "offset",
        options: n,
        async fn(o) {
          var s, a;
          const { x: u, y: d, placement: p, middlewareData: h } = o,
            g = await gx(o, n);
          return p === ((s = h.offset) == null ? void 0 : s.placement) &&
            (a = h.arrow) != null &&
            a.alignmentOffset
            ? {}
            : { x: u + g.x, y: d + g.y, data: { ...g, placement: p } };
        },
      }
    );
  },
  yx = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "shift",
        options: n,
        async fn(o) {
          const { x: s, y: a, placement: u } = o,
            {
              mainAxis: d = !0,
              crossAxis: p = !1,
              limiter: h = {
                fn: (k) => {
                  let { x: A, y: L } = k;
                  return { x: A, y: L };
                },
              },
              ...g
            } = Nn(n, o),
            v = { x: s, y: a },
            x = await ts(o, g),
            w = un(bn(u)),
            b = Eu(w);
          let y = v[b],
            T = v[w];
          if (d) {
            const k = b === "y" ? "top" : "left",
              A = b === "y" ? "bottom" : "right",
              L = y + x[k],
              D = y - x[A];
            y = iu(L, y, D);
          }
          if (p) {
            const k = w === "y" ? "top" : "left",
              A = w === "y" ? "bottom" : "right",
              L = T + x[k],
              D = T - x[A];
            T = iu(L, T, D);
          }
          const C = h.fn({ ...o, [b]: y, [w]: T });
          return {
            ...C,
            data: { x: C.x - s, y: C.y - a, enabled: { [b]: d, [w]: p } },
          };
        },
      }
    );
  },
  xx = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(o) {
          const { x: s, y: a, placement: u, rects: d, middlewareData: p } = o,
            { offset: h = 0, mainAxis: g = !0, crossAxis: v = !0 } = Nn(n, o),
            x = { x: s, y: a },
            w = un(u),
            b = Eu(w);
          let y = x[b],
            T = x[w];
          const C = Nn(h, o),
            k =
              typeof C == "number"
                ? { mainAxis: C, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...C };
          if (g) {
            const D = b === "y" ? "height" : "width",
              F = d.reference[b] - d.floating[D] + k.mainAxis,
              V = d.reference[b] + d.reference[D] - k.mainAxis;
            y < F ? (y = F) : y > V && (y = V);
          }
          if (v) {
            var A, L;
            const D = b === "y" ? "width" : "height",
              F = ch.has(bn(u)),
              V =
                d.reference[w] -
                d.floating[D] +
                ((F && ((A = p.offset) == null ? void 0 : A[w])) || 0) +
                (F ? 0 : k.crossAxis),
              K =
                d.reference[w] +
                d.reference[D] +
                (F ? 0 : ((L = p.offset) == null ? void 0 : L[w]) || 0) -
                (F ? k.crossAxis : 0);
            T < V ? (T = V) : T > K && (T = K);
          }
          return { [b]: y, [w]: T };
        },
      }
    );
  },
  wx = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "size",
        options: n,
        async fn(o) {
          var s, a;
          const { placement: u, rects: d, platform: p, elements: h } = o,
            { apply: g = () => {}, ...v } = Nn(n, o),
            x = await ts(o, v),
            w = bn(u),
            b = no(u),
            y = un(u) === "y",
            { width: T, height: C } = d.floating;
          let k, A;
          w === "top" || w === "bottom"
            ? ((k = w),
              (A =
                b ===
                ((await (p.isRTL == null ? void 0 : p.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((A = w), (k = b === "end" ? "top" : "bottom"));
          const L = C - x.top - x.bottom,
            D = T - x.left - x.right,
            F = er(C - x[k], L),
            V = er(T - x[A], D),
            K = !o.middlewareData.shift;
          let q = F,
            ce = V;
          if (
            ((s = o.middlewareData.shift) != null && s.enabled.x && (ce = D),
            (a = o.middlewareData.shift) != null && a.enabled.y && (q = L),
            K && !b)
          ) {
            const pe = kt(x.left, 0),
              xe = kt(x.right, 0),
              Z = kt(x.top, 0),
              he = kt(x.bottom, 0);
            y
              ? (ce =
                  T -
                  2 * (pe !== 0 || xe !== 0 ? pe + xe : kt(x.left, x.right)))
              : (q =
                  C - 2 * (Z !== 0 || he !== 0 ? Z + he : kt(x.top, x.bottom)));
          }
          await g({ ...o, availableWidth: ce, availableHeight: q });
          const ge = await p.getDimensions(h.floating);
          return T !== ge.width || C !== ge.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Gi() {
  return typeof window < "u";
}
function ro(n) {
  return dh(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Nt(n) {
  var o;
  return (
    (n == null || (o = n.ownerDocument) == null ? void 0 : o.defaultView) ||
    window
  );
}
function fn(n) {
  var o;
  return (o = (dh(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : o.documentElement;
}
function dh(n) {
  return Gi() ? n instanceof Node || n instanceof Nt(n).Node : !1;
}
function qt(n) {
  return Gi() ? n instanceof Element || n instanceof Nt(n).Element : !1;
}
function dn(n) {
  return Gi() ? n instanceof HTMLElement || n instanceof Nt(n).HTMLElement : !1;
}
function $f(n) {
  return !Gi() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof Nt(n).ShadowRoot;
}
const Sx = new Set(["inline", "contents"]);
function cs(n) {
  const { overflow: o, overflowX: s, overflowY: a, display: u } = Yt(n);
  return /auto|scroll|overlay|hidden|clip/.test(o + a + s) && !Sx.has(u);
}
const Ex = new Set(["table", "td", "th"]);
function Cx(n) {
  return Ex.has(ro(n));
}
const kx = [":popover-open", ":modal"];
function qi(n) {
  return kx.some((o) => {
    try {
      return n.matches(o);
    } catch {
      return !1;
    }
  });
}
const Nx = ["transform", "translate", "scale", "rotate", "perspective"],
  bx = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  jx = ["paint", "layout", "strict", "content"];
function Nu(n) {
  const o = bu(),
    s = qt(n) ? Yt(n) : n;
  return (
    Nx.some((a) => (s[a] ? s[a] !== "none" : !1)) ||
    (s.containerType ? s.containerType !== "normal" : !1) ||
    (!o && (s.backdropFilter ? s.backdropFilter !== "none" : !1)) ||
    (!o && (s.filter ? s.filter !== "none" : !1)) ||
    bx.some((a) => (s.willChange || "").includes(a)) ||
    jx.some((a) => (s.contain || "").includes(a))
  );
}
function Px(n) {
  let o = tr(n);
  for (; dn(o) && !Zr(o); ) {
    if (Nu(o)) return o;
    if (qi(o)) return null;
    o = tr(o);
  }
  return null;
}
function bu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Tx = new Set(["html", "body", "#document"]);
function Zr(n) {
  return Tx.has(ro(n));
}
function Yt(n) {
  return Nt(n).getComputedStyle(n);
}
function Yi(n) {
  return qt(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function tr(n) {
  if (ro(n) === "html") return n;
  const o = n.assignedSlot || n.parentNode || ($f(n) && n.host) || fn(n);
  return $f(o) ? o.host : o;
}
function fh(n) {
  const o = tr(n);
  return Zr(o)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : dn(o) && cs(o)
    ? o
    : fh(o);
}
function ns(n, o, s) {
  var a;
  o === void 0 && (o = []), s === void 0 && (s = !0);
  const u = fh(n),
    d = u === ((a = n.ownerDocument) == null ? void 0 : a.body),
    p = Nt(u);
  if (d) {
    const h = lu(p);
    return o.concat(
      p,
      p.visualViewport || [],
      cs(u) ? u : [],
      h && s ? ns(h) : []
    );
  }
  return o.concat(u, ns(u, [], s));
}
function lu(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function ph(n) {
  const o = Yt(n);
  let s = parseFloat(o.width) || 0,
    a = parseFloat(o.height) || 0;
  const u = dn(n),
    d = u ? n.offsetWidth : s,
    p = u ? n.offsetHeight : a,
    h = Di(s) !== d || Di(a) !== p;
  return h && ((s = d), (a = p)), { width: s, height: a, $: h };
}
function ju(n) {
  return qt(n) ? n : n.contextElement;
}
function Xr(n) {
  const o = ju(n);
  if (!dn(o)) return cn(1);
  const s = o.getBoundingClientRect(),
    { width: a, height: u, $: d } = ph(o);
  let p = (d ? Di(s.width) : s.width) / a,
    h = (d ? Di(s.height) : s.height) / u;
  return (
    (!p || !Number.isFinite(p)) && (p = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: p, y: h }
  );
}
const Rx = cn(0);
function hh(n) {
  const o = Nt(n);
  return !bu() || !o.visualViewport
    ? Rx
    : { x: o.visualViewport.offsetLeft, y: o.visualViewport.offsetTop };
}
function Ox(n, o, s) {
  return o === void 0 && (o = !1), !s || (o && s !== Nt(n)) ? !1 : o;
}
function yr(n, o, s, a) {
  o === void 0 && (o = !1), s === void 0 && (s = !1);
  const u = n.getBoundingClientRect(),
    d = ju(n);
  let p = cn(1);
  o && (a ? qt(a) && (p = Xr(a)) : (p = Xr(n)));
  const h = Ox(d, s, a) ? hh(d) : cn(0);
  let g = (u.left + h.x) / p.x,
    v = (u.top + h.y) / p.y,
    x = u.width / p.x,
    w = u.height / p.y;
  if (d) {
    const b = Nt(d),
      y = a && qt(a) ? Nt(a) : a;
    let T = b,
      C = lu(T);
    for (; C && a && y !== T; ) {
      const k = Xr(C),
        A = C.getBoundingClientRect(),
        L = Yt(C),
        D = A.left + (C.clientLeft + parseFloat(L.paddingLeft)) * k.x,
        F = A.top + (C.clientTop + parseFloat(L.paddingTop)) * k.y;
      (g *= k.x),
        (v *= k.y),
        (x *= k.x),
        (w *= k.y),
        (g += D),
        (v += F),
        (T = Nt(C)),
        (C = lu(T));
    }
  }
  return zi({ width: x, height: w, x: g, y: v });
}
function Pu(n, o) {
  const s = Yi(n).scrollLeft;
  return o ? o.left + s : yr(fn(n)).left + s;
}
function mh(n, o, s) {
  s === void 0 && (s = !1);
  const a = n.getBoundingClientRect(),
    u = a.left + o.scrollLeft - (s ? 0 : Pu(n, a)),
    d = a.top + o.scrollTop;
  return { x: u, y: d };
}
function Mx(n) {
  let { elements: o, rect: s, offsetParent: a, strategy: u } = n;
  const d = u === "fixed",
    p = fn(a),
    h = o ? qi(o.floating) : !1;
  if (a === p || (h && d)) return s;
  let g = { scrollLeft: 0, scrollTop: 0 },
    v = cn(1);
  const x = cn(0),
    w = dn(a);
  if (
    (w || (!w && !d)) &&
    ((ro(a) !== "body" || cs(p)) && (g = Yi(a)), dn(a))
  ) {
    const y = yr(a);
    (v = Xr(a)), (x.x = y.x + a.clientLeft), (x.y = y.y + a.clientTop);
  }
  const b = p && !w && !d ? mh(p, g, !0) : cn(0);
  return {
    width: s.width * v.x,
    height: s.height * v.y,
    x: s.x * v.x - g.scrollLeft * v.x + x.x + b.x,
    y: s.y * v.y - g.scrollTop * v.y + x.y + b.y,
  };
}
function Ax(n) {
  return Array.from(n.getClientRects());
}
function _x(n) {
  const o = fn(n),
    s = Yi(n),
    a = n.ownerDocument.body,
    u = kt(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth),
    d = kt(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
  let p = -s.scrollLeft + Pu(n);
  const h = -s.scrollTop;
  return (
    Yt(a).direction === "rtl" && (p += kt(o.clientWidth, a.clientWidth) - u),
    { width: u, height: d, x: p, y: h }
  );
}
function Lx(n, o) {
  const s = Nt(n),
    a = fn(n),
    u = s.visualViewport;
  let d = a.clientWidth,
    p = a.clientHeight,
    h = 0,
    g = 0;
  if (u) {
    (d = u.width), (p = u.height);
    const v = bu();
    (!v || (v && o === "fixed")) && ((h = u.offsetLeft), (g = u.offsetTop));
  }
  return { width: d, height: p, x: h, y: g };
}
const Dx = new Set(["absolute", "fixed"]);
function Ix(n, o) {
  const s = yr(n, !0, o === "fixed"),
    a = s.top + n.clientTop,
    u = s.left + n.clientLeft,
    d = dn(n) ? Xr(n) : cn(1),
    p = n.clientWidth * d.x,
    h = n.clientHeight * d.y,
    g = u * d.x,
    v = a * d.y;
  return { width: p, height: h, x: g, y: v };
}
function Hf(n, o, s) {
  let a;
  if (o === "viewport") a = Lx(n, s);
  else if (o === "document") a = _x(fn(n));
  else if (qt(o)) a = Ix(o, s);
  else {
    const u = hh(n);
    a = { x: o.x - u.x, y: o.y - u.y, width: o.width, height: o.height };
  }
  return zi(a);
}
function gh(n, o) {
  const s = tr(n);
  return s === o || !qt(s) || Zr(s)
    ? !1
    : Yt(s).position === "fixed" || gh(s, o);
}
function zx(n, o) {
  const s = o.get(n);
  if (s) return s;
  let a = ns(n, [], !1).filter((h) => qt(h) && ro(h) !== "body"),
    u = null;
  const d = Yt(n).position === "fixed";
  let p = d ? tr(n) : n;
  for (; qt(p) && !Zr(p); ) {
    const h = Yt(p),
      g = Nu(p);
    !g && h.position === "fixed" && (u = null),
      (
        d
          ? !g && !u
          : (!g && h.position === "static" && !!u && Dx.has(u.position)) ||
            (cs(p) && !g && gh(n, p))
      )
        ? (a = a.filter((x) => x !== p))
        : (u = h),
      (p = tr(p));
  }
  return o.set(n, a), a;
}
function Fx(n) {
  let { element: o, boundary: s, rootBoundary: a, strategy: u } = n;
  const p = [
      ...(s === "clippingAncestors"
        ? qi(o)
          ? []
          : zx(o, this._c)
        : [].concat(s)),
      a,
    ],
    h = p[0],
    g = p.reduce((v, x) => {
      const w = Hf(o, x, u);
      return (
        (v.top = kt(w.top, v.top)),
        (v.right = er(w.right, v.right)),
        (v.bottom = er(w.bottom, v.bottom)),
        (v.left = kt(w.left, v.left)),
        v
      );
    }, Hf(o, h, u));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top,
  };
}
function Ux(n) {
  const { width: o, height: s } = ph(n);
  return { width: o, height: s };
}
function Bx(n, o, s) {
  const a = dn(o),
    u = fn(o),
    d = s === "fixed",
    p = yr(n, !0, d, o);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const g = cn(0);
  function v() {
    g.x = Pu(u);
  }
  if (a || (!a && !d))
    if (((ro(o) !== "body" || cs(u)) && (h = Yi(o)), a)) {
      const y = yr(o, !0, d, o);
      (g.x = y.x + o.clientLeft), (g.y = y.y + o.clientTop);
    } else u && v();
  d && !a && u && v();
  const x = u && !a && !d ? mh(u, h) : cn(0),
    w = p.left + h.scrollLeft - g.x - x.x,
    b = p.top + h.scrollTop - g.y - x.y;
  return { x: w, y: b, width: p.width, height: p.height };
}
function Kl(n) {
  return Yt(n).position === "static";
}
function Vf(n, o) {
  if (!dn(n) || Yt(n).position === "fixed") return null;
  if (o) return o(n);
  let s = n.offsetParent;
  return fn(n) === s && (s = s.ownerDocument.body), s;
}
function vh(n, o) {
  const s = Nt(n);
  if (qi(n)) return s;
  if (!dn(n)) {
    let u = tr(n);
    for (; u && !Zr(u); ) {
      if (qt(u) && !Kl(u)) return u;
      u = tr(u);
    }
    return s;
  }
  let a = Vf(n, o);
  for (; a && Cx(a) && Kl(a); ) a = Vf(a, o);
  return a && Zr(a) && Kl(a) && !Nu(a) ? s : a || Px(n) || s;
}
const $x = async function (n) {
  const o = this.getOffsetParent || vh,
    s = this.getDimensions,
    a = await s(n.floating);
  return {
    reference: Bx(n.reference, await o(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: a.width, height: a.height },
  };
};
function Hx(n) {
  return Yt(n).direction === "rtl";
}
const Vx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mx,
  getDocumentElement: fn,
  getClippingRect: Fx,
  getOffsetParent: vh,
  getElementRects: $x,
  getClientRects: Ax,
  getDimensions: Ux,
  getScale: Xr,
  isElement: qt,
  isRTL: Hx,
};
function yh(n, o) {
  return (
    n.x === o.x && n.y === o.y && n.width === o.width && n.height === o.height
  );
}
function Wx(n, o) {
  let s = null,
    a;
  const u = fn(n);
  function d() {
    var h;
    clearTimeout(a), (h = s) == null || h.disconnect(), (s = null);
  }
  function p(h, g) {
    h === void 0 && (h = !1), g === void 0 && (g = 1), d();
    const v = n.getBoundingClientRect(),
      { left: x, top: w, width: b, height: y } = v;
    if ((h || o(), !b || !y)) return;
    const T = Ri(w),
      C = Ri(u.clientWidth - (x + b)),
      k = Ri(u.clientHeight - (w + y)),
      A = Ri(x),
      D = {
        rootMargin: -T + "px " + -C + "px " + -k + "px " + -A + "px",
        threshold: kt(0, er(1, g)) || 1,
      };
    let F = !0;
    function V(K) {
      const q = K[0].intersectionRatio;
      if (q !== g) {
        if (!F) return p();
        q
          ? p(!1, q)
          : (a = setTimeout(() => {
              p(!1, 1e-7);
            }, 1e3));
      }
      q === 1 && !yh(v, n.getBoundingClientRect()) && p(), (F = !1);
    }
    try {
      s = new IntersectionObserver(V, { ...D, root: u.ownerDocument });
    } catch {
      s = new IntersectionObserver(V, D);
    }
    s.observe(n);
  }
  return p(!0), d;
}
function Qx(n, o, s, a) {
  a === void 0 && (a = {});
  const {
      ancestorScroll: u = !0,
      ancestorResize: d = !0,
      elementResize: p = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: g = !1,
    } = a,
    v = ju(n),
    x = u || d ? [...(v ? ns(v) : []), ...ns(o)] : [];
  x.forEach((A) => {
    u && A.addEventListener("scroll", s, { passive: !0 }),
      d && A.addEventListener("resize", s);
  });
  const w = v && h ? Wx(v, s) : null;
  let b = -1,
    y = null;
  p &&
    ((y = new ResizeObserver((A) => {
      let [L] = A;
      L &&
        L.target === v &&
        y &&
        (y.unobserve(o),
        cancelAnimationFrame(b),
        (b = requestAnimationFrame(() => {
          var D;
          (D = y) == null || D.observe(o);
        }))),
        s();
    })),
    v && !g && y.observe(v),
    y.observe(o));
  let T,
    C = g ? yr(n) : null;
  g && k();
  function k() {
    const A = yr(n);
    C && !yh(C, A) && s(), (C = A), (T = requestAnimationFrame(k));
  }
  return (
    s(),
    () => {
      var A;
      x.forEach((L) => {
        u && L.removeEventListener("scroll", s),
          d && L.removeEventListener("resize", s);
      }),
        w?.(),
        (A = y) == null || A.disconnect(),
        (y = null),
        g && cancelAnimationFrame(T);
    }
  );
}
const Kx = vx,
  Gx = yx,
  qx = hx,
  Yx = wx,
  Xx = mx,
  Wf = px,
  Zx = xx,
  Jx = (n, o, s) => {
    const a = new Map(),
      u = { platform: Vx, ...s },
      d = { ...u.platform, _c: a };
    return fx(n, o, { ...u, platform: d });
  };
var ew = typeof document < "u",
  tw = function () {},
  _i = ew ? S.useLayoutEffect : tw;
function Fi(n, o) {
  if (n === o) return !0;
  if (typeof n != typeof o) return !1;
  if (typeof n == "function" && n.toString() === o.toString()) return !0;
  let s, a, u;
  if (n && o && typeof n == "object") {
    if (Array.isArray(n)) {
      if (((s = n.length), s !== o.length)) return !1;
      for (a = s; a-- !== 0; ) if (!Fi(n[a], o[a])) return !1;
      return !0;
    }
    if (((u = Object.keys(n)), (s = u.length), s !== Object.keys(o).length))
      return !1;
    for (a = s; a-- !== 0; ) if (!{}.hasOwnProperty.call(o, u[a])) return !1;
    for (a = s; a-- !== 0; ) {
      const d = u[a];
      if (!(d === "_owner" && n.$$typeof) && !Fi(n[d], o[d])) return !1;
    }
    return !0;
  }
  return n !== n && o !== o;
}
function xh(n) {
  return typeof window > "u"
    ? 1
    : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qf(n, o) {
  const s = xh(n);
  return Math.round(o * s) / s;
}
function Gl(n) {
  const o = S.useRef(n);
  return (
    _i(() => {
      o.current = n;
    }),
    o
  );
}
function nw(n) {
  n === void 0 && (n = {});
  const {
      placement: o = "bottom",
      strategy: s = "absolute",
      middleware: a = [],
      platform: u,
      elements: { reference: d, floating: p } = {},
      transform: h = !0,
      whileElementsMounted: g,
      open: v,
    } = n,
    [x, w] = S.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: o,
      middlewareData: {},
      isPositioned: !1,
    }),
    [b, y] = S.useState(a);
  Fi(b, a) || y(a);
  const [T, C] = S.useState(null),
    [k, A] = S.useState(null),
    L = S.useCallback((I) => {
      I !== K.current && ((K.current = I), C(I));
    }, []),
    D = S.useCallback((I) => {
      I !== q.current && ((q.current = I), A(I));
    }, []),
    F = d || T,
    V = p || k,
    K = S.useRef(null),
    q = S.useRef(null),
    ce = S.useRef(x),
    ge = g != null,
    pe = Gl(g),
    xe = Gl(u),
    Z = Gl(v),
    he = S.useCallback(() => {
      if (!K.current || !q.current) return;
      const I = { placement: o, strategy: s, middleware: b };
      xe.current && (I.platform = xe.current),
        Jx(K.current, q.current, I).then((z) => {
          const H = { ...z, isPositioned: Z.current !== !1 };
          G.current &&
            !Fi(ce.current, H) &&
            ((ce.current = H),
            Wi.flushSync(() => {
              w(H);
            }));
        });
    }, [b, o, s, xe, Z]);
  _i(() => {
    v === !1 &&
      ce.current.isPositioned &&
      ((ce.current.isPositioned = !1), w((I) => ({ ...I, isPositioned: !1 })));
  }, [v]);
  const G = S.useRef(!1);
  _i(
    () => (
      (G.current = !0),
      () => {
        G.current = !1;
      }
    ),
    []
  ),
    _i(() => {
      if ((F && (K.current = F), V && (q.current = V), F && V)) {
        if (pe.current) return pe.current(F, V, he);
        he();
      }
    }, [F, V, he, pe, ge]);
  const me = S.useMemo(
      () => ({ reference: K, floating: q, setReference: L, setFloating: D }),
      [L, D]
    ),
    se = S.useMemo(() => ({ reference: F, floating: V }), [F, V]),
    re = S.useMemo(() => {
      const I = { position: s, left: 0, top: 0 };
      if (!se.floating) return I;
      const z = Qf(se.floating, x.x),
        H = Qf(se.floating, x.y);
      return h
        ? {
            ...I,
            transform: "translate(" + z + "px, " + H + "px)",
            ...(xh(se.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: s, left: z, top: H };
    }, [s, h, se.floating, x.x, x.y]);
  return S.useMemo(
    () => ({ ...x, update: he, refs: me, elements: se, floatingStyles: re }),
    [x, he, me, se, re]
  );
}
const rw = (n) => {
    function o(s) {
      return {}.hasOwnProperty.call(s, "current");
    }
    return {
      name: "arrow",
      options: n,
      fn(s) {
        const { element: a, padding: u } = typeof n == "function" ? n(s) : n;
        return a && o(a)
          ? a.current != null
            ? Wf({ element: a.current, padding: u }).fn(s)
            : {}
          : a
          ? Wf({ element: a, padding: u }).fn(s)
          : {};
      },
    };
  },
  ow = (n, o) => ({ ...Kx(n), options: [n, o] }),
  sw = (n, o) => ({ ...Gx(n), options: [n, o] }),
  iw = (n, o) => ({ ...Zx(n), options: [n, o] }),
  aw = (n, o) => ({ ...qx(n), options: [n, o] }),
  lw = (n, o) => ({ ...Yx(n), options: [n, o] }),
  uw = (n, o) => ({ ...Xx(n), options: [n, o] }),
  cw = (n, o) => ({ ...rw(n), options: [n, o] });
var dw = "Arrow",
  wh = S.forwardRef((n, o) => {
    const { children: s, width: a = 10, height: u = 5, ...d } = n;
    return f.jsx(Ze.svg, {
      ...d,
      ref: o,
      width: a,
      height: u,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? s : f.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
wh.displayName = dw;
var fw = wh;
function pw(n) {
  const [o, s] = S.useState(void 0);
  return (
    Gt(() => {
      if (n) {
        s({ width: n.offsetWidth, height: n.offsetHeight });
        const a = new ResizeObserver((u) => {
          if (!Array.isArray(u) || !u.length) return;
          const d = u[0];
          let p, h;
          if ("borderBoxSize" in d) {
            const g = d.borderBoxSize,
              v = Array.isArray(g) ? g[0] : g;
            (p = v.inlineSize), (h = v.blockSize);
          } else (p = n.offsetWidth), (h = n.offsetHeight);
          s({ width: p, height: h });
        });
        return a.observe(n, { box: "border-box" }), () => a.unobserve(n);
      } else s(void 0);
    }, [n]),
    o
  );
}
var Sh = "Popper",
  [Eh, Ch] = as(Sh),
  [q2, kh] = Eh(Sh),
  Nh = "PopperAnchor",
  bh = S.forwardRef((n, o) => {
    const { __scopePopper: s, virtualRef: a, ...u } = n,
      d = kh(Nh, s),
      p = S.useRef(null),
      h = Kt(o, p);
    return (
      S.useEffect(() => {
        d.onAnchorChange(a?.current || p.current);
      }),
      a ? null : f.jsx(Ze.div, { ...u, ref: h })
    );
  });
bh.displayName = Nh;
var Tu = "PopperContent",
  [hw, mw] = Eh(Tu),
  jh = S.forwardRef((n, o) => {
    const {
        __scopePopper: s,
        side: a = "bottom",
        sideOffset: u = 0,
        align: d = "center",
        alignOffset: p = 0,
        arrowPadding: h = 0,
        avoidCollisions: g = !0,
        collisionBoundary: v = [],
        collisionPadding: x = 0,
        sticky: w = "partial",
        hideWhenDetached: b = !1,
        updatePositionStrategy: y = "optimized",
        onPlaced: T,
        ...C
      } = n,
      k = kh(Tu, s),
      [A, L] = S.useState(null),
      D = Kt(o, (ie) => L(ie)),
      [F, V] = S.useState(null),
      K = pw(F),
      q = K?.width ?? 0,
      ce = K?.height ?? 0,
      ge = a + (d !== "center" ? "-" + d : ""),
      pe =
        typeof x == "number"
          ? x
          : { top: 0, right: 0, bottom: 0, left: 0, ...x },
      xe = Array.isArray(v) ? v : [v],
      Z = xe.length > 0,
      he = { padding: pe, boundary: xe.filter(vw), altBoundary: Z },
      {
        refs: G,
        floatingStyles: me,
        placement: se,
        isPositioned: re,
        middlewareData: I,
      } = nw({
        strategy: "fixed",
        placement: ge,
        whileElementsMounted: (...ie) =>
          Qx(...ie, { animationFrame: y === "always" }),
        elements: { reference: k.anchor },
        middleware: [
          ow({ mainAxis: u + ce, alignmentAxis: p }),
          g &&
            sw({
              mainAxis: !0,
              crossAxis: !1,
              limiter: w === "partial" ? iw() : void 0,
              ...he,
            }),
          g && aw({ ...he }),
          lw({
            ...he,
            apply: ({
              elements: ie,
              rects: Se,
              availableWidth: ke,
              availableHeight: He,
            }) => {
              const { width: bt, height: jn } = Se.reference,
                jt = ie.floating.style;
              jt.setProperty("--radix-popper-available-width", `${ke}px`),
                jt.setProperty("--radix-popper-available-height", `${He}px`),
                jt.setProperty("--radix-popper-anchor-width", `${bt}px`),
                jt.setProperty("--radix-popper-anchor-height", `${jn}px`);
            },
          }),
          F && cw({ element: F, padding: h }),
          yw({ arrowWidth: q, arrowHeight: ce }),
          b && uw({ strategy: "referenceHidden", ...he }),
        ],
      }),
      [z, H] = Rh(se),
      P = kn(T);
    Gt(() => {
      re && P?.();
    }, [re, P]);
    const _ = I.arrow?.x,
      Y = I.arrow?.y,
      J = I.arrow?.centerOffset !== 0,
      [ue, ve] = S.useState();
    return (
      Gt(() => {
        A && ve(window.getComputedStyle(A).zIndex);
      }, [A]),
      f.jsx("div", {
        ref: G.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...me,
          transform: re ? me.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ue,
          "--radix-popper-transform-origin": [
            I.transformOrigin?.x,
            I.transformOrigin?.y,
          ].join(" "),
          ...(I.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: n.dir,
        children: f.jsx(hw, {
          scope: s,
          placedSide: z,
          onArrowChange: V,
          arrowX: _,
          arrowY: Y,
          shouldHideArrow: J,
          children: f.jsx(Ze.div, {
            "data-side": z,
            "data-align": H,
            ...C,
            ref: D,
            style: { ...C.style, animation: re ? void 0 : "none" },
          }),
        }),
      })
    );
  });
jh.displayName = Tu;
var Ph = "PopperArrow",
  gw = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Th = S.forwardRef(function (o, s) {
    const { __scopePopper: a, ...u } = o,
      d = mw(Ph, a),
      p = gw[d.placedSide];
    return f.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [p]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: f.jsx(fw, {
        ...u,
        ref: s,
        style: { ...u.style, display: "block" },
      }),
    });
  });
Th.displayName = Ph;
function vw(n) {
  return n !== null;
}
var yw = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(o) {
    const { placement: s, rects: a, middlewareData: u } = o,
      p = u.arrow?.centerOffset !== 0,
      h = p ? 0 : n.arrowWidth,
      g = p ? 0 : n.arrowHeight,
      [v, x] = Rh(s),
      w = { start: "0%", center: "50%", end: "100%" }[x],
      b = (u.arrow?.x ?? 0) + h / 2,
      y = (u.arrow?.y ?? 0) + g / 2;
    let T = "",
      C = "";
    return (
      v === "bottom"
        ? ((T = p ? w : `${b}px`), (C = `${-g}px`))
        : v === "top"
        ? ((T = p ? w : `${b}px`), (C = `${a.floating.height + g}px`))
        : v === "right"
        ? ((T = `${-g}px`), (C = p ? w : `${y}px`))
        : v === "left" &&
          ((T = `${a.floating.width + g}px`), (C = p ? w : `${y}px`)),
      { data: { x: T, y: C } }
    );
  },
});
function Rh(n) {
  const [o, s = "center"] = n.split("-");
  return [o, s];
}
var xw = bh,
  ww = jh,
  Sw = Th,
  [Xi] = as("Tooltip", [Ch]),
  Ru = Ch(),
  Oh = "TooltipProvider",
  Ew = 700,
  Kf = "tooltip.open",
  [Cw, Mh] = Xi(Oh),
  Ah = (n) => {
    const {
        __scopeTooltip: o,
        delayDuration: s = Ew,
        skipDelayDuration: a = 300,
        disableHoverableContent: u = !1,
        children: d,
      } = n,
      p = S.useRef(!0),
      h = S.useRef(!1),
      g = S.useRef(0);
    return (
      S.useEffect(() => {
        const v = g.current;
        return () => window.clearTimeout(v);
      }, []),
      f.jsx(Cw, {
        scope: o,
        isOpenDelayedRef: p,
        delayDuration: s,
        onOpen: S.useCallback(() => {
          window.clearTimeout(g.current), (p.current = !1);
        }, []),
        onClose: S.useCallback(() => {
          window.clearTimeout(g.current),
            (g.current = window.setTimeout(() => (p.current = !0), a));
        }, [a]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: S.useCallback((v) => {
          h.current = v;
        }, []),
        disableHoverableContent: u,
        children: d,
      })
    );
  };
Ah.displayName = Oh;
var _h = "Tooltip",
  [Y2, Zi] = Xi(_h),
  uu = "TooltipTrigger",
  kw = S.forwardRef((n, o) => {
    const { __scopeTooltip: s, ...a } = n,
      u = Zi(uu, s),
      d = Mh(uu, s),
      p = Ru(s),
      h = S.useRef(null),
      g = Kt(o, h, u.onTriggerChange),
      v = S.useRef(!1),
      x = S.useRef(!1),
      w = S.useCallback(() => (v.current = !1), []);
    return (
      S.useEffect(
        () => () => document.removeEventListener("pointerup", w),
        [w]
      ),
      f.jsx(xw, {
        asChild: !0,
        ...p,
        children: f.jsx(Ze.button, {
          "aria-describedby": u.open ? u.contentId : void 0,
          "data-state": u.stateAttribute,
          ...a,
          ref: g,
          onPointerMove: Ge(n.onPointerMove, (b) => {
            b.pointerType !== "touch" &&
              !x.current &&
              !d.isPointerInTransitRef.current &&
              (u.onTriggerEnter(), (x.current = !0));
          }),
          onPointerLeave: Ge(n.onPointerLeave, () => {
            u.onTriggerLeave(), (x.current = !1);
          }),
          onPointerDown: Ge(n.onPointerDown, () => {
            u.open && u.onClose(),
              (v.current = !0),
              document.addEventListener("pointerup", w, { once: !0 });
          }),
          onFocus: Ge(n.onFocus, () => {
            v.current || u.onOpen();
          }),
          onBlur: Ge(n.onBlur, u.onClose),
          onClick: Ge(n.onClick, u.onClose),
        }),
      })
    );
  });
kw.displayName = uu;
var Nw = "TooltipPortal",
  [X2, bw] = Xi(Nw, { forceMount: void 0 }),
  Jr = "TooltipContent",
  Lh = S.forwardRef((n, o) => {
    const s = bw(Jr, n.__scopeTooltip),
      { forceMount: a = s.forceMount, side: u = "top", ...d } = n,
      p = Zi(Jr, n.__scopeTooltip);
    return f.jsx(gu, {
      present: a || p.open,
      children: p.disableHoverableContent
        ? f.jsx(Dh, { side: u, ...d, ref: o })
        : f.jsx(jw, { side: u, ...d, ref: o }),
    });
  }),
  jw = S.forwardRef((n, o) => {
    const s = Zi(Jr, n.__scopeTooltip),
      a = Mh(Jr, n.__scopeTooltip),
      u = S.useRef(null),
      d = Kt(o, u),
      [p, h] = S.useState(null),
      { trigger: g, onClose: v } = s,
      x = u.current,
      { onPointerInTransitChange: w } = a,
      b = S.useCallback(() => {
        h(null), w(!1);
      }, [w]),
      y = S.useCallback(
        (T, C) => {
          const k = T.currentTarget,
            A = { x: T.clientX, y: T.clientY },
            L = Mw(A, k.getBoundingClientRect()),
            D = Aw(A, L),
            F = _w(C.getBoundingClientRect()),
            V = Dw([...D, ...F]);
          h(V), w(!0);
        },
        [w]
      );
    return (
      S.useEffect(() => () => b(), [b]),
      S.useEffect(() => {
        if (g && x) {
          const T = (k) => y(k, x),
            C = (k) => y(k, g);
          return (
            g.addEventListener("pointerleave", T),
            x.addEventListener("pointerleave", C),
            () => {
              g.removeEventListener("pointerleave", T),
                x.removeEventListener("pointerleave", C);
            }
          );
        }
      }, [g, x, y, b]),
      S.useEffect(() => {
        if (p) {
          const T = (C) => {
            const k = C.target,
              A = { x: C.clientX, y: C.clientY },
              L = g?.contains(k) || x?.contains(k),
              D = !Lw(A, p);
            L ? b() : D && (b(), v());
          };
          return (
            document.addEventListener("pointermove", T),
            () => document.removeEventListener("pointermove", T)
          );
        }
      }, [g, x, p, v, b]),
      f.jsx(Dh, { ...n, ref: d })
    );
  }),
  [Pw, Tw] = Xi(_h, { isInside: !1 }),
  Rw = jv("TooltipContent"),
  Dh = S.forwardRef((n, o) => {
    const {
        __scopeTooltip: s,
        children: a,
        "aria-label": u,
        onEscapeKeyDown: d,
        onPointerDownOutside: p,
        ...h
      } = n,
      g = Zi(Jr, s),
      v = Ru(s),
      { onClose: x } = g;
    return (
      S.useEffect(
        () => (
          document.addEventListener(Kf, x),
          () => document.removeEventListener(Kf, x)
        ),
        [x]
      ),
      S.useEffect(() => {
        if (g.trigger) {
          const w = (b) => {
            b.target?.contains(g.trigger) && x();
          };
          return (
            window.addEventListener("scroll", w, { capture: !0 }),
            () => window.removeEventListener("scroll", w, { capture: !0 })
          );
        }
      }, [g.trigger, x]),
      f.jsx(mu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: p,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: x,
        children: f.jsxs(ww, {
          "data-state": g.stateAttribute,
          ...v,
          ...h,
          ref: o,
          style: {
            ...h.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            f.jsx(Rw, { children: a }),
            f.jsx(Pw, {
              scope: s,
              isInside: !0,
              children: f.jsx(Zv, {
                id: g.contentId,
                role: "tooltip",
                children: u || a,
              }),
            }),
          ],
        }),
      })
    );
  });
Lh.displayName = Jr;
var Ih = "TooltipArrow",
  Ow = S.forwardRef((n, o) => {
    const { __scopeTooltip: s, ...a } = n,
      u = Ru(s);
    return Tw(Ih, s).isInside ? null : f.jsx(Sw, { ...u, ...a, ref: o });
  });
Ow.displayName = Ih;
function Mw(n, o) {
  const s = Math.abs(o.top - n.y),
    a = Math.abs(o.bottom - n.y),
    u = Math.abs(o.right - n.x),
    d = Math.abs(o.left - n.x);
  switch (Math.min(s, a, u, d)) {
    case d:
      return "left";
    case u:
      return "right";
    case s:
      return "top";
    case a:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Aw(n, o, s = 5) {
  const a = [];
  switch (o) {
    case "top":
      a.push({ x: n.x - s, y: n.y + s }, { x: n.x + s, y: n.y + s });
      break;
    case "bottom":
      a.push({ x: n.x - s, y: n.y - s }, { x: n.x + s, y: n.y - s });
      break;
    case "left":
      a.push({ x: n.x + s, y: n.y - s }, { x: n.x + s, y: n.y + s });
      break;
    case "right":
      a.push({ x: n.x - s, y: n.y - s }, { x: n.x - s, y: n.y + s });
      break;
  }
  return a;
}
function _w(n) {
  const { top: o, right: s, bottom: a, left: u } = n;
  return [
    { x: u, y: o },
    { x: s, y: o },
    { x: s, y: a },
    { x: u, y: a },
  ];
}
function Lw(n, o) {
  const { x: s, y: a } = n;
  let u = !1;
  for (let d = 0, p = o.length - 1; d < o.length; p = d++) {
    const h = o[d],
      g = o[p],
      v = h.x,
      x = h.y,
      w = g.x,
      b = g.y;
    x > a != b > a && s < ((w - v) * (a - x)) / (b - x) + v && (u = !u);
  }
  return u;
}
function Dw(n) {
  const o = n.slice();
  return (
    o.sort((s, a) =>
      s.x < a.x ? -1 : s.x > a.x ? 1 : s.y < a.y ? -1 : s.y > a.y ? 1 : 0
    ),
    Iw(o)
  );
}
function Iw(n) {
  if (n.length <= 1) return n.slice();
  const o = [];
  for (let a = 0; a < n.length; a++) {
    const u = n[a];
    for (; o.length >= 2; ) {
      const d = o[o.length - 1],
        p = o[o.length - 2];
      if ((d.x - p.x) * (u.y - p.y) >= (d.y - p.y) * (u.x - p.x)) o.pop();
      else break;
    }
    o.push(u);
  }
  o.pop();
  const s = [];
  for (let a = n.length - 1; a >= 0; a--) {
    const u = n[a];
    for (; s.length >= 2; ) {
      const d = s[s.length - 1],
        p = s[s.length - 2];
      if ((d.x - p.x) * (u.y - p.y) >= (d.y - p.y) * (u.x - p.x)) s.pop();
      else break;
    }
    s.push(u);
  }
  return (
    s.pop(),
    o.length === 1 && s.length === 1 && o[0].x === s[0].x && o[0].y === s[0].y
      ? o
      : o.concat(s)
  );
}
var zw = Ah,
  zh = Lh;
const Fw = zw,
  Uw = S.forwardRef(({ className: n, sideOffset: o = 4, ...s }, a) =>
    f.jsx(zh, {
      ref: a,
      sideOffset: o,
      className: Re(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n
      ),
      ...s,
    })
  );
Uw.displayName = zh.displayName;
var Ji = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          this.listeners.delete(n), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ea = typeof window > "u" || "Deno" in globalThis;
function Qt() {}
function Bw(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function $w(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function Hw(n, o) {
  return Math.max(n + (o || 0) - Date.now(), 0);
}
function cu(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function Vw(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function Gf(n, o) {
  const {
    type: s = "all",
    exact: a,
    fetchStatus: u,
    predicate: d,
    queryKey: p,
    stale: h,
  } = n;
  if (p) {
    if (a) {
      if (o.queryHash !== Ou(p, o.options)) return !1;
    } else if (!os(o.queryKey, p)) return !1;
  }
  if (s !== "all") {
    const g = o.isActive();
    if ((s === "active" && !g) || (s === "inactive" && g)) return !1;
  }
  return !(
    (typeof h == "boolean" && o.isStale() !== h) ||
    (u && u !== o.state.fetchStatus) ||
    (d && !d(o))
  );
}
function qf(n, o) {
  const { exact: s, status: a, predicate: u, mutationKey: d } = n;
  if (d) {
    if (!o.options.mutationKey) return !1;
    if (s) {
      if (rs(o.options.mutationKey) !== rs(d)) return !1;
    } else if (!os(o.options.mutationKey, d)) return !1;
  }
  return !((a && o.state.status !== a) || (u && !u(o)));
}
function Ou(n, o) {
  return (o?.queryKeyHashFn || rs)(n);
}
function rs(n) {
  return JSON.stringify(n, (o, s) =>
    du(s)
      ? Object.keys(s)
          .sort()
          .reduce((a, u) => ((a[u] = s[u]), a), {})
      : s
  );
}
function os(n, o) {
  return n === o
    ? !0
    : typeof n != typeof o
    ? !1
    : n && o && typeof n == "object" && typeof o == "object"
    ? Object.keys(o).every((s) => os(n[s], o[s]))
    : !1;
}
function Fh(n, o) {
  if (n === o) return n;
  const s = Yf(n) && Yf(o);
  if (s || (du(n) && du(o))) {
    const a = s ? n : Object.keys(n),
      u = a.length,
      d = s ? o : Object.keys(o),
      p = d.length,
      h = s ? [] : {},
      g = new Set(a);
    let v = 0;
    for (let x = 0; x < p; x++) {
      const w = s ? x : d[x];
      ((!s && g.has(w)) || s) && n[w] === void 0 && o[w] === void 0
        ? ((h[w] = void 0), v++)
        : ((h[w] = Fh(n[w], o[w])), h[w] === n[w] && n[w] !== void 0 && v++);
    }
    return u === p && v === u ? n : h;
  }
  return o;
}
function Yf(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function du(n) {
  if (!Xf(n)) return !1;
  const o = n.constructor;
  if (o === void 0) return !0;
  const s = o.prototype;
  return !(
    !Xf(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function Xf(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ww(n) {
  return new Promise((o) => {
    setTimeout(o, n);
  });
}
function Qw(n, o, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(n, o)
    : s.structuralSharing !== !1
    ? Fh(n, o)
    : o;
}
function Kw(n, o, s = 0) {
  const a = [...n, o];
  return s && a.length > s ? a.slice(1) : a;
}
function Gw(n, o, s = 0) {
  const a = [o, ...n];
  return s && a.length > s ? a.slice(0, -1) : a;
}
var Mu = Symbol();
function Uh(n, o) {
  return !n.queryFn && o?.initialPromise
    ? () => o.initialPromise
    : !n.queryFn || n.queryFn === Mu
    ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
    : n.queryFn;
}
var qw = class extends Ji {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!ea && window.addEventListener) {
            const o = () => n();
            return (
              window.addEventListener("visibilitychange", o, !1),
              () => {
                window.removeEventListener("visibilitychange", o);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n),
        this.#t?.(),
        (this.#t = n((o) => {
          typeof o == "boolean" ? this.setFocused(o) : this.onFocus();
        }));
    }
    setFocused(n) {
      this.#e !== n && ((this.#e = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((o) => {
        o(n);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Bh = new qw(),
  Yw = class extends Ji {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!ea && window.addEventListener) {
            const o = () => n(!0),
              s = () => n(!1);
            return (
              window.addEventListener("online", o, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", o),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n), this.#t?.(), (this.#t = n(this.setOnline.bind(this)));
    }
    setOnline(n) {
      this.#e !== n &&
        ((this.#e = n),
        this.listeners.forEach((s) => {
          s(n);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  Ui = new Yw();
function Xw() {
  let n, o;
  const s = new Promise((u, d) => {
    (n = u), (o = d);
  });
  (s.status = "pending"), s.catch(() => {});
  function a(u) {
    Object.assign(s, u), delete s.resolve, delete s.reject;
  }
  return (
    (s.resolve = (u) => {
      a({ status: "fulfilled", value: u }), n(u);
    }),
    (s.reject = (u) => {
      a({ status: "rejected", reason: u }), o(u);
    }),
    s
  );
}
function Zw(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function $h(n) {
  return (n ?? "online") === "online" ? Ui.isOnline() : !0;
}
var Hh = class extends Error {
  constructor(n) {
    super("CancelledError"),
      (this.revert = n?.revert),
      (this.silent = n?.silent);
  }
};
function ql(n) {
  return n instanceof Hh;
}
function Vh(n) {
  let o = !1,
    s = 0,
    a = !1,
    u;
  const d = Xw(),
    p = (C) => {
      a || (b(new Hh(C)), n.abort?.());
    },
    h = () => {
      o = !0;
    },
    g = () => {
      o = !1;
    },
    v = () =>
      Bh.isFocused() &&
      (n.networkMode === "always" || Ui.isOnline()) &&
      n.canRun(),
    x = () => $h(n.networkMode) && n.canRun(),
    w = (C) => {
      a || ((a = !0), n.onSuccess?.(C), u?.(), d.resolve(C));
    },
    b = (C) => {
      a || ((a = !0), n.onError?.(C), u?.(), d.reject(C));
    },
    y = () =>
      new Promise((C) => {
        (u = (k) => {
          (a || v()) && C(k);
        }),
          n.onPause?.();
      }).then(() => {
        (u = void 0), a || n.onContinue?.();
      }),
    T = () => {
      if (a) return;
      let C;
      const k = s === 0 ? n.initialPromise : void 0;
      try {
        C = k ?? n.fn();
      } catch (A) {
        C = Promise.reject(A);
      }
      Promise.resolve(C)
        .then(w)
        .catch((A) => {
          if (a) return;
          const L = n.retry ?? (ea ? 0 : 3),
            D = n.retryDelay ?? Zw,
            F = typeof D == "function" ? D(s, A) : D,
            V =
              L === !0 ||
              (typeof L == "number" && s < L) ||
              (typeof L == "function" && L(s, A));
          if (o || !V) {
            b(A);
            return;
          }
          s++,
            n.onFail?.(s, A),
            Ww(F)
              .then(() => (v() ? void 0 : y()))
              .then(() => {
                o ? b(A) : T();
              });
        });
    };
  return {
    promise: d,
    cancel: p,
    continue: () => (u?.(), d),
    cancelRetry: h,
    continueRetry: g,
    canStart: x,
    start: () => (x() ? T() : y().then(T), d),
  };
}
var Jw = (n) => setTimeout(n, 0);
function e1() {
  let n = [],
    o = 0,
    s = (h) => {
      h();
    },
    a = (h) => {
      h();
    },
    u = Jw;
  const d = (h) => {
      o
        ? n.push(h)
        : u(() => {
            s(h);
          });
    },
    p = () => {
      const h = n;
      (n = []),
        h.length &&
          u(() => {
            a(() => {
              h.forEach((g) => {
                s(g);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let g;
      o++;
      try {
        g = h();
      } finally {
        o--, o || p();
      }
      return g;
    },
    batchCalls:
      (h) =>
      (...g) => {
        d(() => {
          h(...g);
        });
      },
    schedule: d,
    setNotifyFunction: (h) => {
      s = h;
    },
    setBatchNotifyFunction: (h) => {
      a = h;
    },
    setScheduler: (h) => {
      u = h;
    },
  };
}
var ct = e1(),
  Wh = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        $w(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(n) {
      this.gcTime = Math.max(this.gcTime || 0, n ?? (ea ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  t1 = class extends Wh {
    #e;
    #t;
    #n;
    #o;
    #r;
    #i;
    #a;
    constructor(n) {
      super(),
        (this.#a = !1),
        (this.#i = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.#o = n.client),
        (this.#n = this.#o.getQueryCache()),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.#e = r1(this.options)),
        (this.state = n.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(n) {
      (this.options = { ...this.#i, ...n }),
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(n, o) {
      const s = Qw(this.state.data, n, this.options);
      return (
        this.#s({
          data: s,
          type: "success",
          dataUpdatedAt: o?.updatedAt,
          manual: o?.manual,
        }),
        s
      );
    }
    setState(n, o) {
      this.#s({ type: "setState", state: n, setStateOptions: o });
    }
    cancel(n) {
      const o = this.#r?.promise;
      return this.#r?.cancel(n), o ? o.then(Qt).catch(Qt) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((n) => Vw(n.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Mu ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => cu(n.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => n.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(n = 0) {
      return this.state.data === void 0
        ? !0
        : n === "static"
        ? !1
        : this.state.isInvalidated
        ? !0
        : !Hw(this.state.dataUpdatedAt, n);
    }
    onFocus() {
      this.observers
        .find((o) => o.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    onOnline() {
      this.observers
        .find((o) => o.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    addObserver(n) {
      this.observers.includes(n) ||
        (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: n }));
    }
    removeObserver(n) {
      this.observers.includes(n) &&
        ((this.observers = this.observers.filter((o) => o !== n)),
        this.observers.length ||
          (this.#r &&
            (this.#a ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: n }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: "invalidate" });
    }
    fetch(n, o) {
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && o?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
      }
      if ((n && this.setOptions(n), !this.options.queryFn)) {
        const g = this.observers.find((v) => v.options.queryFn);
        g && this.setOptions(g.options);
      }
      const s = new AbortController(),
        a = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => ((this.#a = !0), s.signal),
          });
        },
        u = () => {
          const g = Uh(this.options, o),
            x = (() => {
              const w = {
                client: this.#o,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return a(w), w;
            })();
          return (
            (this.#a = !1),
            this.options.persister ? this.options.persister(g, x, this) : g(x)
          );
        },
        p = (() => {
          const g = {
            fetchOptions: o,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#o,
            state: this.state,
            fetchFn: u,
          };
          return a(g), g;
        })();
      this.options.behavior?.onFetch(p, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== p.fetchOptions?.meta) &&
          this.#s({ type: "fetch", meta: p.fetchOptions?.meta });
      const h = (g) => {
        (ql(g) && g.silent) || this.#s({ type: "error", error: g }),
          ql(g) ||
            (this.#n.config.onError?.(g, this),
            this.#n.config.onSettled?.(this.state.data, g, this)),
          this.scheduleGc();
      };
      return (
        (this.#r = Vh({
          initialPromise: o?.initialPromise,
          fn: p.fetchFn,
          abort: s.abort.bind(s),
          onSuccess: (g) => {
            if (g === void 0) {
              h(new Error(`${this.queryHash} data is undefined`));
              return;
            }
            try {
              this.setData(g);
            } catch (v) {
              h(v);
              return;
            }
            this.#n.config.onSuccess?.(g, this),
              this.#n.config.onSettled?.(g, this.state.error, this),
              this.scheduleGc();
          },
          onError: h,
          onFail: (g, v) => {
            this.#s({ type: "failed", failureCount: g, error: v });
          },
          onPause: () => {
            this.#s({ type: "pause" });
          },
          onContinue: () => {
            this.#s({ type: "continue" });
          },
          retry: p.options.retry,
          retryDelay: p.options.retryDelay,
          networkMode: p.options.networkMode,
          canRun: () => !0,
        })),
        this.#r.start()
      );
    }
    #s(n) {
      const o = (s) => {
        switch (n.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...n1(s.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            return (
              (this.#t = void 0),
              {
                ...s,
                data: n.data,
                dataUpdateCount: s.dataUpdateCount + 1,
                dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!n.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const a = n.error;
            return ql(a) && a.revert && this.#t
              ? { ...this.#t, fetchStatus: "idle" }
              : {
                  ...s,
                  error: a,
                  errorUpdateCount: s.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: s.fetchFailureCount + 1,
                  fetchFailureReason: a,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...n.state };
        }
      };
      (this.state = o(this.state)),
        ct.batch(() => {
          this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: n });
        });
    }
  };
function n1(n, o) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: $h(o.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function r1(n) {
  const o =
      typeof n.initialData == "function" ? n.initialData() : n.initialData,
    s = o !== void 0,
    a = s
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: o,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? a ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var o1 = class extends Ji {
    constructor(n = {}) {
      super(), (this.config = n), (this.#e = new Map());
    }
    #e;
    build(n, o, s) {
      const a = o.queryKey,
        u = o.queryHash ?? Ou(a, o);
      let d = this.get(u);
      return (
        d ||
          ((d = new t1({
            client: n,
            queryKey: a,
            queryHash: u,
            options: n.defaultQueryOptions(o),
            state: s,
            defaultOptions: n.getQueryDefaults(a),
          })),
          this.add(d)),
        d
      );
    }
    add(n) {
      this.#e.has(n.queryHash) ||
        (this.#e.set(n.queryHash, n), this.notify({ type: "added", query: n }));
    }
    remove(n) {
      const o = this.#e.get(n.queryHash);
      o &&
        (n.destroy(),
        o === n && this.#e.delete(n.queryHash),
        this.notify({ type: "removed", query: n }));
    }
    clear() {
      ct.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#e.get(n);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(n) {
      const o = { exact: !0, ...n };
      return this.getAll().find((s) => Gf(o, s));
    }
    findAll(n = {}) {
      const o = this.getAll();
      return Object.keys(n).length > 0 ? o.filter((s) => Gf(n, s)) : o;
    }
    notify(n) {
      ct.batch(() => {
        this.listeners.forEach((o) => {
          o(n);
        });
      });
    }
    onFocus() {
      ct.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      ct.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  s1 = class extends Wh {
    #e;
    #t;
    #n;
    constructor(n) {
      super(),
        (this.mutationId = n.mutationId),
        (this.#t = n.mutationCache),
        (this.#e = []),
        (this.state = n.state || i1()),
        this.setOptions(n.options),
        this.scheduleGc();
    }
    setOptions(n) {
      (this.options = n), this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(n) {
      this.#e.includes(n) ||
        (this.#e.push(n),
        this.clearGcTimeout(),
        this.#t.notify({ type: "observerAdded", mutation: this, observer: n }));
    }
    removeObserver(n) {
      (this.#e = this.#e.filter((o) => o !== n)),
        this.scheduleGc(),
        this.#t.notify({
          type: "observerRemoved",
          mutation: this,
          observer: n,
        });
    }
    optionalRemove() {
      this.#e.length ||
        (this.state.status === "pending"
          ? this.scheduleGc()
          : this.#t.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(n) {
      const o = () => {
        this.#o({ type: "continue" });
      };
      this.#n = Vh({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(n)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (u, d) => {
          this.#o({ type: "failed", failureCount: u, error: d });
        },
        onPause: () => {
          this.#o({ type: "pause" });
        },
        onContinue: o,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#t.canRun(this),
      });
      const s = this.state.status === "pending",
        a = !this.#n.canStart();
      try {
        if (s) o();
        else {
          this.#o({ type: "pending", variables: n, isPaused: a }),
            await this.#t.config.onMutate?.(n, this);
          const d = await this.options.onMutate?.(n);
          d !== this.state.context &&
            this.#o({ type: "pending", context: d, variables: n, isPaused: a });
        }
        const u = await this.#n.start();
        return (
          await this.#t.config.onSuccess?.(u, n, this.state.context, this),
          await this.options.onSuccess?.(u, n, this.state.context),
          await this.#t.config.onSettled?.(
            u,
            null,
            this.state.variables,
            this.state.context,
            this
          ),
          await this.options.onSettled?.(u, null, n, this.state.context),
          this.#o({ type: "success", data: u }),
          u
        );
      } catch (u) {
        try {
          throw (
            (await this.#t.config.onError?.(u, n, this.state.context, this),
            await this.options.onError?.(u, n, this.state.context),
            await this.#t.config.onSettled?.(
              void 0,
              u,
              this.state.variables,
              this.state.context,
              this
            ),
            await this.options.onSettled?.(void 0, u, n, this.state.context),
            u)
          );
        } finally {
          this.#o({ type: "error", error: u });
        }
      } finally {
        this.#t.runNext(this);
      }
    }
    #o(n) {
      const o = (s) => {
        switch (n.type) {
          case "failed":
            return {
              ...s,
              failureCount: n.failureCount,
              failureReason: n.error,
            };
          case "pause":
            return { ...s, isPaused: !0 };
          case "continue":
            return { ...s, isPaused: !1 };
          case "pending":
            return {
              ...s,
              context: n.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: n.isPaused,
              status: "pending",
              variables: n.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...s,
              data: n.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...s,
              data: void 0,
              error: n.error,
              failureCount: s.failureCount + 1,
              failureReason: n.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = o(this.state)),
        ct.batch(() => {
          this.#e.forEach((s) => {
            s.onMutationUpdate(n);
          }),
            this.#t.notify({ mutation: this, type: "updated", action: n });
        });
    }
  };
function i1() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var a1 = class extends Ji {
  constructor(n = {}) {
    super(),
      (this.config = n),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(n, o, s) {
    const a = new s1({
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(o),
      state: s,
    });
    return this.add(a), a;
  }
  add(n) {
    this.#e.add(n);
    const o = Oi(n);
    if (typeof o == "string") {
      const s = this.#t.get(o);
      s ? s.push(n) : this.#t.set(o, [n]);
    }
    this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    if (this.#e.delete(n)) {
      const o = Oi(n);
      if (typeof o == "string") {
        const s = this.#t.get(o);
        if (s)
          if (s.length > 1) {
            const a = s.indexOf(n);
            a !== -1 && s.splice(a, 1);
          } else s[0] === n && this.#t.delete(o);
      }
    }
    this.notify({ type: "removed", mutation: n });
  }
  canRun(n) {
    const o = Oi(n);
    if (typeof o == "string") {
      const a = this.#t.get(o)?.find((u) => u.state.status === "pending");
      return !a || a === n;
    } else return !0;
  }
  runNext(n) {
    const o = Oi(n);
    return typeof o == "string"
      ? this.#t
          .get(o)
          ?.find((a) => a !== n && a.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    ct.batch(() => {
      this.#e.forEach((n) => {
        this.notify({ type: "removed", mutation: n });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(n) {
    const o = { exact: !0, ...n };
    return this.getAll().find((s) => qf(o, s));
  }
  findAll(n = {}) {
    return this.getAll().filter((o) => qf(n, o));
  }
  notify(n) {
    ct.batch(() => {
      this.listeners.forEach((o) => {
        o(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((o) => o.state.isPaused);
    return ct.batch(() => Promise.all(n.map((o) => o.continue().catch(Qt))));
  }
};
function Oi(n) {
  return n.options.scope?.id;
}
function Zf(n) {
  return {
    onFetch: (o, s) => {
      const a = o.options,
        u = o.fetchOptions?.meta?.fetchMore?.direction,
        d = o.state.data?.pages || [],
        p = o.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        g = 0;
      const v = async () => {
        let x = !1;
        const w = (T) => {
            Object.defineProperty(T, "signal", {
              enumerable: !0,
              get: () => (
                o.signal.aborted
                  ? (x = !0)
                  : o.signal.addEventListener("abort", () => {
                      x = !0;
                    }),
                o.signal
              ),
            });
          },
          b = Uh(o.options, o.fetchOptions),
          y = async (T, C, k) => {
            if (x) return Promise.reject();
            if (C == null && T.pages.length) return Promise.resolve(T);
            const L = (() => {
                const K = {
                  client: o.client,
                  queryKey: o.queryKey,
                  pageParam: C,
                  direction: k ? "backward" : "forward",
                  meta: o.options.meta,
                };
                return w(K), K;
              })(),
              D = await b(L),
              { maxPages: F } = o.options,
              V = k ? Gw : Kw;
            return {
              pages: V(T.pages, D, F),
              pageParams: V(T.pageParams, C, F),
            };
          };
        if (u && d.length) {
          const T = u === "backward",
            C = T ? l1 : Jf,
            k = { pages: d, pageParams: p },
            A = C(a, k);
          h = await y(k, A, T);
        } else {
          const T = n ?? d.length;
          do {
            const C = g === 0 ? p[0] ?? a.initialPageParam : Jf(a, h);
            if (g > 0 && C == null) break;
            (h = await y(h, C)), g++;
          } while (g < T);
        }
        return h;
      };
      o.options.persister
        ? (o.fetchFn = () =>
            o.options.persister?.(
              v,
              {
                client: o.client,
                queryKey: o.queryKey,
                meta: o.options.meta,
                signal: o.signal,
              },
              s
            ))
        : (o.fetchFn = v);
    },
  };
}
function Jf(n, { pages: o, pageParams: s }) {
  const a = o.length - 1;
  return o.length > 0 ? n.getNextPageParam(o[a], o, s[a], s) : void 0;
}
function l1(n, { pages: o, pageParams: s }) {
  return o.length > 0 ? n.getPreviousPageParam?.(o[0], o, s[0], s) : void 0;
}
var u1 = class {
    #e;
    #t;
    #n;
    #o;
    #r;
    #i;
    #a;
    #s;
    constructor(n = {}) {
      (this.#e = n.queryCache || new o1()),
        (this.#t = n.mutationCache || new a1()),
        (this.#n = n.defaultOptions || {}),
        (this.#o = new Map()),
        (this.#r = new Map()),
        (this.#i = 0);
    }
    mount() {
      this.#i++,
        this.#i === 1 &&
          ((this.#a = Bh.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = Ui.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#i--,
        this.#i === 0 &&
          (this.#a?.(), (this.#a = void 0), this.#s?.(), (this.#s = void 0));
    }
    isFetching(n) {
      return this.#e.findAll({ ...n, fetchStatus: "fetching" }).length;
    }
    isMutating(n) {
      return this.#t.findAll({ ...n, status: "pending" }).length;
    }
    getQueryData(n) {
      const o = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(o.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const o = this.defaultQueryOptions(n),
        s = this.#e.build(this, o),
        a = s.state.data;
      return a === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale &&
            s.isStaleByTime(cu(o.staleTime, s)) &&
            this.prefetchQuery(o),
          Promise.resolve(a));
    }
    getQueriesData(n) {
      return this.#e.findAll(n).map(({ queryKey: o, state: s }) => {
        const a = s.data;
        return [o, a];
      });
    }
    setQueryData(n, o, s) {
      const a = this.defaultQueryOptions({ queryKey: n }),
        d = this.#e.get(a.queryHash)?.state.data,
        p = Bw(o, d);
      if (p !== void 0)
        return this.#e.build(this, a).setData(p, { ...s, manual: !0 });
    }
    setQueriesData(n, o, s) {
      return ct.batch(() =>
        this.#e
          .findAll(n)
          .map(({ queryKey: a }) => [a, this.setQueryData(a, o, s)])
      );
    }
    getQueryState(n) {
      const o = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(o.queryHash)?.state;
    }
    removeQueries(n) {
      const o = this.#e;
      ct.batch(() => {
        o.findAll(n).forEach((s) => {
          o.remove(s);
        });
      });
    }
    resetQueries(n, o) {
      const s = this.#e;
      return ct.batch(
        () => (
          s.findAll(n).forEach((a) => {
            a.reset();
          }),
          this.refetchQueries({ type: "active", ...n }, o)
        )
      );
    }
    cancelQueries(n, o = {}) {
      const s = { revert: !0, ...o },
        a = ct.batch(() => this.#e.findAll(n).map((u) => u.cancel(s)));
      return Promise.all(a).then(Qt).catch(Qt);
    }
    invalidateQueries(n, o = {}) {
      return ct.batch(
        () => (
          this.#e.findAll(n).forEach((s) => {
            s.invalidate();
          }),
          n?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...n, type: n?.refetchType ?? n?.type ?? "active" },
                o
              )
        )
      );
    }
    refetchQueries(n, o = {}) {
      const s = { ...o, cancelRefetch: o.cancelRefetch ?? !0 },
        a = ct.batch(() =>
          this.#e
            .findAll(n)
            .filter((u) => !u.isDisabled() && !u.isStatic())
            .map((u) => {
              let d = u.fetch(void 0, s);
              return (
                s.throwOnError || (d = d.catch(Qt)),
                u.state.fetchStatus === "paused" ? Promise.resolve() : d
              );
            })
        );
      return Promise.all(a).then(Qt);
    }
    fetchQuery(n) {
      const o = this.defaultQueryOptions(n);
      o.retry === void 0 && (o.retry = !1);
      const s = this.#e.build(this, o);
      return s.isStaleByTime(cu(o.staleTime, s))
        ? s.fetch(o)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(Qt).catch(Qt);
    }
    fetchInfiniteQuery(n) {
      return (n.behavior = Zf(n.pages)), this.fetchQuery(n);
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(Qt).catch(Qt);
    }
    ensureInfiniteQueryData(n) {
      return (n.behavior = Zf(n.pages)), this.ensureQueryData(n);
    }
    resumePausedMutations() {
      return Ui.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, o) {
      this.#o.set(rs(n), { queryKey: n, defaultOptions: o });
    }
    getQueryDefaults(n) {
      const o = [...this.#o.values()],
        s = {};
      return (
        o.forEach((a) => {
          os(n, a.queryKey) && Object.assign(s, a.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(n, o) {
      this.#r.set(rs(n), { mutationKey: n, defaultOptions: o });
    }
    getMutationDefaults(n) {
      const o = [...this.#r.values()],
        s = {};
      return (
        o.forEach((a) => {
          os(n, a.mutationKey) && Object.assign(s, a.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const o = {
        ...this.#n.queries,
        ...this.getQueryDefaults(n.queryKey),
        ...n,
        _defaulted: !0,
      };
      return (
        o.queryHash || (o.queryHash = Ou(o.queryKey, o)),
        o.refetchOnReconnect === void 0 &&
          (o.refetchOnReconnect = o.networkMode !== "always"),
        o.throwOnError === void 0 && (o.throwOnError = !!o.suspense),
        !o.networkMode && o.persister && (o.networkMode = "offlineFirst"),
        o.queryFn === Mu && (o.enabled = !1),
        o
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  c1 = S.createContext(void 0),
  d1 = ({ client: n, children: o }) => (
    S.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    f.jsx(c1.Provider, { value: n, children: o })
  );
function ss() {
  return (
    (ss = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var s = arguments[o];
            for (var a in s)
              Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a]);
          }
          return n;
        }),
    ss.apply(this, arguments)
  );
}
var Zn;
(function (n) {
  (n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE");
})(Zn || (Zn = {}));
const ep = "popstate";
function f1(n) {
  n === void 0 && (n = {});
  function o(a, u) {
    let { pathname: d, search: p, hash: h } = a.location;
    return fu(
      "",
      { pathname: d, search: p, hash: h },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || "default"
    );
  }
  function s(a, u) {
    return typeof u == "string" ? u : Bi(u);
  }
  return h1(o, s, null, n);
}
function We(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o);
}
function Qh(n, o) {
  if (!n) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function p1() {
  return Math.random().toString(36).substr(2, 8);
}
function tp(n, o) {
  return { usr: n.state, key: n.key, idx: o };
}
function fu(n, o, s, a) {
  return (
    s === void 0 && (s = null),
    ss(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof o == "string" ? oo(o) : o,
      { state: s, key: (o && o.key) || a || p1() }
    )
  );
}
function Bi(n) {
  let { pathname: o = "/", search: s = "", hash: a = "" } = n;
  return (
    s && s !== "?" && (o += s.charAt(0) === "?" ? s : "?" + s),
    a && a !== "#" && (o += a.charAt(0) === "#" ? a : "#" + a),
    o
  );
}
function oo(n) {
  let o = {};
  if (n) {
    let s = n.indexOf("#");
    s >= 0 && ((o.hash = n.substr(s)), (n = n.substr(0, s)));
    let a = n.indexOf("?");
    a >= 0 && ((o.search = n.substr(a)), (n = n.substr(0, a))),
      n && (o.pathname = n);
  }
  return o;
}
function h1(n, o, s, a) {
  a === void 0 && (a = {});
  let { window: u = document.defaultView, v5Compat: d = !1 } = a,
    p = u.history,
    h = Zn.Pop,
    g = null,
    v = x();
  v == null && ((v = 0), p.replaceState(ss({}, p.state, { idx: v }), ""));
  function x() {
    return (p.state || { idx: null }).idx;
  }
  function w() {
    h = Zn.Pop;
    let k = x(),
      A = k == null ? null : k - v;
    (v = k), g && g({ action: h, location: C.location, delta: A });
  }
  function b(k, A) {
    h = Zn.Push;
    let L = fu(C.location, k, A);
    v = x() + 1;
    let D = tp(L, v),
      F = C.createHref(L);
    try {
      p.pushState(D, "", F);
    } catch (V) {
      if (V instanceof DOMException && V.name === "DataCloneError") throw V;
      u.location.assign(F);
    }
    d && g && g({ action: h, location: C.location, delta: 1 });
  }
  function y(k, A) {
    h = Zn.Replace;
    let L = fu(C.location, k, A);
    v = x();
    let D = tp(L, v),
      F = C.createHref(L);
    p.replaceState(D, "", F),
      d && g && g({ action: h, location: C.location, delta: 0 });
  }
  function T(k) {
    let A = u.location.origin !== "null" ? u.location.origin : u.location.href,
      L = typeof k == "string" ? k : Bi(k);
    return (
      (L = L.replace(/ $/, "%20")),
      We(
        A,
        "No window.location.(origin|href) available to create URL for href: " +
          L
      ),
      new URL(L, A)
    );
  }
  let C = {
    get action() {
      return h;
    },
    get location() {
      return n(u, p);
    },
    listen(k) {
      if (g) throw new Error("A history only accepts one active listener");
      return (
        u.addEventListener(ep, w),
        (g = k),
        () => {
          u.removeEventListener(ep, w), (g = null);
        }
      );
    },
    createHref(k) {
      return o(u, k);
    },
    createURL: T,
    encodeLocation(k) {
      let A = T(k);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: b,
    replace: y,
    go(k) {
      return p.go(k);
    },
  };
  return C;
}
var np;
(function (n) {
  (n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error");
})(np || (np = {}));
function m1(n, o, s) {
  return s === void 0 && (s = "/"), g1(n, o, s);
}
function g1(n, o, s, a) {
  let u = typeof o == "string" ? oo(o) : o,
    d = Au(u.pathname || "/", s);
  if (d == null) return null;
  let p = Kh(n);
  v1(p);
  let h = null;
  for (let g = 0; h == null && g < p.length; ++g) {
    let v = T1(d);
    h = b1(p[g], v);
  }
  return h;
}
function Kh(n, o, s, a) {
  o === void 0 && (o = []), s === void 0 && (s = []), a === void 0 && (a = "");
  let u = (d, p, h) => {
    let g = {
      relativePath: h === void 0 ? d.path || "" : h,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: p,
      route: d,
    };
    g.relativePath.startsWith("/") &&
      (We(
        g.relativePath.startsWith(a),
        'Absolute route path "' +
          g.relativePath +
          '" nested under path ' +
          ('"' + a + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (g.relativePath = g.relativePath.slice(a.length)));
    let v = Jn([a, g.relativePath]),
      x = s.concat(g);
    d.children &&
      d.children.length > 0 &&
      (We(
        d.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + v + '".')
      ),
      Kh(d.children, o, x, v)),
      !(d.path == null && !d.index) &&
        o.push({ path: v, score: k1(v, d.index), routesMeta: x });
  };
  return (
    n.forEach((d, p) => {
      var h;
      if (d.path === "" || !((h = d.path) != null && h.includes("?"))) u(d, p);
      else for (let g of Gh(d.path)) u(d, p, g);
    }),
    o
  );
}
function Gh(n) {
  let o = n.split("/");
  if (o.length === 0) return [];
  let [s, ...a] = o,
    u = s.endsWith("?"),
    d = s.replace(/\?$/, "");
  if (a.length === 0) return u ? [d, ""] : [d];
  let p = Gh(a.join("/")),
    h = [];
  return (
    h.push(...p.map((g) => (g === "" ? d : [d, g].join("/")))),
    u && h.push(...p),
    h.map((g) => (n.startsWith("/") && g === "" ? "/" : g))
  );
}
function v1(n) {
  n.sort((o, s) =>
    o.score !== s.score
      ? s.score - o.score
      : N1(
          o.routesMeta.map((a) => a.childrenIndex),
          s.routesMeta.map((a) => a.childrenIndex)
        )
  );
}
const y1 = /^:[\w-]+$/,
  x1 = 3,
  w1 = 2,
  S1 = 1,
  E1 = 10,
  C1 = -2,
  rp = (n) => n === "*";
function k1(n, o) {
  let s = n.split("/"),
    a = s.length;
  return (
    s.some(rp) && (a += C1),
    o && (a += w1),
    s
      .filter((u) => !rp(u))
      .reduce((u, d) => u + (y1.test(d) ? x1 : d === "" ? S1 : E1), a)
  );
}
function N1(n, o) {
  return n.length === o.length && n.slice(0, -1).every((a, u) => a === o[u])
    ? n[n.length - 1] - o[o.length - 1]
    : 0;
}
function b1(n, o, s) {
  let { routesMeta: a } = n,
    u = {},
    d = "/",
    p = [];
  for (let h = 0; h < a.length; ++h) {
    let g = a[h],
      v = h === a.length - 1,
      x = d === "/" ? o : o.slice(d.length) || "/",
      w = j1(
        { path: g.relativePath, caseSensitive: g.caseSensitive, end: v },
        x
      ),
      b = g.route;
    if (!w) return null;
    Object.assign(u, w.params),
      p.push({
        params: u,
        pathname: Jn([d, w.pathname]),
        pathnameBase: A1(Jn([d, w.pathnameBase])),
        route: b,
      }),
      w.pathnameBase !== "/" && (d = Jn([d, w.pathnameBase]));
  }
  return p;
}
function j1(n, o) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [s, a] = P1(n.path, n.caseSensitive, n.end),
    u = o.match(s);
  if (!u) return null;
  let d = u[0],
    p = d.replace(/(.)\/+$/, "$1"),
    h = u.slice(1);
  return {
    params: a.reduce((v, x, w) => {
      let { paramName: b, isOptional: y } = x;
      if (b === "*") {
        let C = h[w] || "";
        p = d.slice(0, d.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const T = h[w];
      return (
        y && !T ? (v[b] = void 0) : (v[b] = (T || "").replace(/%2F/g, "/")), v
      );
    }, {}),
    pathname: d,
    pathnameBase: p,
    pattern: n,
  };
}
function P1(n, o, s) {
  o === void 0 && (o = !1),
    s === void 0 && (s = !0),
    Qh(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".')
    );
  let a = [],
    u =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, h, g) => (
            a.push({ paramName: h, isOptional: g != null }),
            g ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (a.push({ paramName: "*" }),
        (u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (u += "\\/*$")
      : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u, o ? void 0 : "i"), a]
  );
}
function T1(n) {
  try {
    return n
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      Qh(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + o + ").")
      ),
      n
    );
  }
}
function Au(n, o) {
  if (o === "/") return n;
  if (!n.toLowerCase().startsWith(o.toLowerCase())) return null;
  let s = o.endsWith("/") ? o.length - 1 : o.length,
    a = n.charAt(s);
  return a && a !== "/" ? null : n.slice(s) || "/";
}
function R1(n, o) {
  o === void 0 && (o = "/");
  let {
    pathname: s,
    search: a = "",
    hash: u = "",
  } = typeof n == "string" ? oo(n) : n;
  return {
    pathname: s ? (s.startsWith("/") ? s : O1(s, o)) : o,
    search: _1(a),
    hash: L1(u),
  };
}
function O1(n, o) {
  let s = o.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((u) => {
      u === ".." ? s.length > 1 && s.pop() : u !== "." && s.push(u);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Yl(n, o, s, a) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ("`to." +
      o +
      "` field [" +
      JSON.stringify(a) +
      "].  Please separate it out to the ") +
    ("`to." + s + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function M1(n) {
  return n.filter(
    (o, s) => s === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function qh(n, o) {
  let s = M1(n);
  return o
    ? s.map((a, u) => (u === s.length - 1 ? a.pathname : a.pathnameBase))
    : s.map((a) => a.pathnameBase);
}
function Yh(n, o, s, a) {
  a === void 0 && (a = !1);
  let u;
  typeof n == "string"
    ? (u = oo(n))
    : ((u = ss({}, n)),
      We(
        !u.pathname || !u.pathname.includes("?"),
        Yl("?", "pathname", "search", u)
      ),
      We(
        !u.pathname || !u.pathname.includes("#"),
        Yl("#", "pathname", "hash", u)
      ),
      We(!u.search || !u.search.includes("#"), Yl("#", "search", "hash", u)));
  let d = n === "" || u.pathname === "",
    p = d ? "/" : u.pathname,
    h;
  if (p == null) h = s;
  else {
    let w = o.length - 1;
    if (!a && p.startsWith("..")) {
      let b = p.split("/");
      for (; b[0] === ".."; ) b.shift(), (w -= 1);
      u.pathname = b.join("/");
    }
    h = w >= 0 ? o[w] : "/";
  }
  let g = R1(u, h),
    v = p && p !== "/" && p.endsWith("/"),
    x = (d || p === ".") && s.endsWith("/");
  return !g.pathname.endsWith("/") && (v || x) && (g.pathname += "/"), g;
}
const Jn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  A1 = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  _1 = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  L1 = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function D1(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const Xh = ["post", "put", "patch", "delete"];
new Set(Xh);
const I1 = ["get", ...Xh];
new Set(I1);
function is() {
  return (
    (is = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var s = arguments[o];
            for (var a in s)
              Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a]);
          }
          return n;
        }),
    is.apply(this, arguments)
  );
}
const _u = S.createContext(null),
  z1 = S.createContext(null),
  wr = S.createContext(null),
  ta = S.createContext(null),
  Sr = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Zh = S.createContext(null);
function F1(n, o) {
  let { relative: s } = o === void 0 ? {} : o;
  ds() || We(!1);
  let { basename: a, navigator: u } = S.useContext(wr),
    { hash: d, pathname: p, search: h } = em(n, { relative: s }),
    g = p;
  return (
    a !== "/" && (g = p === "/" ? a : Jn([a, p])),
    u.createHref({ pathname: g, search: h, hash: d })
  );
}
function ds() {
  return S.useContext(ta) != null;
}
function so() {
  return ds() || We(!1), S.useContext(ta).location;
}
function Jh(n) {
  S.useContext(wr).static || S.useLayoutEffect(n);
}
function U1() {
  let { isDataRoute: n } = S.useContext(Sr);
  return n ? J1() : B1();
}
function B1() {
  ds() || We(!1);
  let n = S.useContext(_u),
    { basename: o, future: s, navigator: a } = S.useContext(wr),
    { matches: u } = S.useContext(Sr),
    { pathname: d } = so(),
    p = JSON.stringify(qh(u, s.v7_relativeSplatPath)),
    h = S.useRef(!1);
  return (
    Jh(() => {
      h.current = !0;
    }),
    S.useCallback(
      function (v, x) {
        if ((x === void 0 && (x = {}), !h.current)) return;
        if (typeof v == "number") {
          a.go(v);
          return;
        }
        let w = Yh(v, JSON.parse(p), d, x.relative === "path");
        n == null &&
          o !== "/" &&
          (w.pathname = w.pathname === "/" ? o : Jn([o, w.pathname])),
          (x.replace ? a.replace : a.push)(w, x.state, x);
      },
      [o, a, p, d, n]
    )
  );
}
function em(n, o) {
  let { relative: s } = o === void 0 ? {} : o,
    { future: a } = S.useContext(wr),
    { matches: u } = S.useContext(Sr),
    { pathname: d } = so(),
    p = JSON.stringify(qh(u, a.v7_relativeSplatPath));
  return S.useMemo(() => Yh(n, JSON.parse(p), d, s === "path"), [n, p, d, s]);
}
function $1(n, o) {
  return H1(n, o);
}
function H1(n, o, s, a) {
  ds() || We(!1);
  let { navigator: u } = S.useContext(wr),
    { matches: d } = S.useContext(Sr),
    p = d[d.length - 1],
    h = p ? p.params : {};
  p && p.pathname;
  let g = p ? p.pathnameBase : "/";
  p && p.route;
  let v = so(),
    x;
  if (o) {
    var w;
    let k = typeof o == "string" ? oo(o) : o;
    g === "/" || ((w = k.pathname) != null && w.startsWith(g)) || We(!1),
      (x = k);
  } else x = v;
  let b = x.pathname || "/",
    y = b;
  if (g !== "/") {
    let k = g.replace(/^\//, "").split("/");
    y = "/" + b.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let T = m1(n, { pathname: y }),
    C = G1(
      T &&
        T.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, h, k.params),
            pathname: Jn([
              g,
              u.encodeLocation
                ? u.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? g
                : Jn([
                    g,
                    u.encodeLocation
                      ? u.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      d,
      s,
      a
    );
  return o && C
    ? S.createElement(
        ta.Provider,
        {
          value: {
            location: is(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              x
            ),
            navigationType: Zn.Pop,
          },
        },
        C
      )
    : C;
}
function V1() {
  let n = Z1(),
    o = D1(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    s = n instanceof Error ? n.stack : null,
    u = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, o),
    s ? S.createElement("pre", { style: u }, s) : null,
    null
  );
}
const W1 = S.createElement(V1, null);
class Q1 extends S.Component {
  constructor(o) {
    super(o),
      (this.state = {
        location: o.location,
        revalidation: o.revalidation,
        error: o.error,
      });
  }
  static getDerivedStateFromError(o) {
    return { error: o };
  }
  static getDerivedStateFromProps(o, s) {
    return s.location !== o.location ||
      (s.revalidation !== "idle" && o.revalidation === "idle")
      ? { error: o.error, location: o.location, revalidation: o.revalidation }
      : {
          error: o.error !== void 0 ? o.error : s.error,
          location: s.location,
          revalidation: o.revalidation || s.revalidation,
        };
  }
  componentDidCatch(o, s) {
    console.error(
      "React Router caught the following error during render",
      o,
      s
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          Sr.Provider,
          { value: this.props.routeContext },
          S.createElement(Zh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function K1(n) {
  let { routeContext: o, match: s, children: a } = n,
    u = S.useContext(_u);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = s.route.id),
    S.createElement(Sr.Provider, { value: o }, a)
  );
}
function G1(n, o, s, a) {
  var u;
  if (
    (o === void 0 && (o = []),
    s === void 0 && (s = null),
    a === void 0 && (a = null),
    n == null)
  ) {
    var d;
    if (!s) return null;
    if (s.errors) n = s.matches;
    else if (
      (d = a) != null &&
      d.v7_partialHydration &&
      o.length === 0 &&
      !s.initialized &&
      s.matches.length > 0
    )
      n = s.matches;
    else return null;
  }
  let p = n,
    h = (u = s) == null ? void 0 : u.errors;
  if (h != null) {
    let x = p.findIndex((w) => w.route.id && h?.[w.route.id] !== void 0);
    x >= 0 || We(!1), (p = p.slice(0, Math.min(p.length, x + 1)));
  }
  let g = !1,
    v = -1;
  if (s && a && a.v7_partialHydration)
    for (let x = 0; x < p.length; x++) {
      let w = p[x];
      if (
        ((w.route.HydrateFallback || w.route.hydrateFallbackElement) && (v = x),
        w.route.id)
      ) {
        let { loaderData: b, errors: y } = s,
          T =
            w.route.loader &&
            b[w.route.id] === void 0 &&
            (!y || y[w.route.id] === void 0);
        if (w.route.lazy || T) {
          (g = !0), v >= 0 ? (p = p.slice(0, v + 1)) : (p = [p[0]]);
          break;
        }
      }
    }
  return p.reduceRight((x, w, b) => {
    let y,
      T = !1,
      C = null,
      k = null;
    s &&
      ((y = h && w.route.id ? h[w.route.id] : void 0),
      (C = w.route.errorElement || W1),
      g &&
        (v < 0 && b === 0
          ? (e2("route-fallback"), (T = !0), (k = null))
          : v === b &&
            ((T = !0), (k = w.route.hydrateFallbackElement || null))));
    let A = o.concat(p.slice(0, b + 1)),
      L = () => {
        let D;
        return (
          y
            ? (D = C)
            : T
            ? (D = k)
            : w.route.Component
            ? (D = S.createElement(w.route.Component, null))
            : w.route.element
            ? (D = w.route.element)
            : (D = x),
          S.createElement(K1, {
            match: w,
            routeContext: { outlet: x, matches: A, isDataRoute: s != null },
            children: D,
          })
        );
      };
    return s && (w.route.ErrorBoundary || w.route.errorElement || b === 0)
      ? S.createElement(Q1, {
          location: s.location,
          revalidation: s.revalidation,
          component: C,
          error: y,
          children: L(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
        })
      : L();
  }, null);
}
var tm = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      n
    );
  })(tm || {}),
  nm = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseLoaderData = "useLoaderData"),
      (n.UseActionData = "useActionData"),
      (n.UseRouteError = "useRouteError"),
      (n.UseNavigation = "useNavigation"),
      (n.UseRouteLoaderData = "useRouteLoaderData"),
      (n.UseMatches = "useMatches"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      (n.UseRouteId = "useRouteId"),
      n
    );
  })(nm || {});
function q1(n) {
  let o = S.useContext(_u);
  return o || We(!1), o;
}
function Y1(n) {
  let o = S.useContext(z1);
  return o || We(!1), o;
}
function X1(n) {
  let o = S.useContext(Sr);
  return o || We(!1), o;
}
function rm(n) {
  let o = X1(),
    s = o.matches[o.matches.length - 1];
  return s.route.id || We(!1), s.route.id;
}
function Z1() {
  var n;
  let o = S.useContext(Zh),
    s = Y1(),
    a = rm();
  return o !== void 0 ? o : (n = s.errors) == null ? void 0 : n[a];
}
function J1() {
  let { router: n } = q1(tm.UseNavigateStable),
    o = rm(nm.UseNavigateStable),
    s = S.useRef(!1);
  return (
    Jh(() => {
      s.current = !0;
    }),
    S.useCallback(
      function (u, d) {
        d === void 0 && (d = {}),
          s.current &&
            (typeof u == "number"
              ? n.navigate(u)
              : n.navigate(u, is({ fromRouteId: o }, d)));
      },
      [n, o]
    )
  );
}
const op = {};
function e2(n, o, s) {
  op[n] || (op[n] = !0);
}
function t2(n, o) {
  n?.v7_startTransition, n?.v7_relativeSplatPath;
}
function Cn(n) {
  We(!1);
}
function n2(n) {
  let {
    basename: o = "/",
    children: s = null,
    location: a,
    navigationType: u = Zn.Pop,
    navigator: d,
    static: p = !1,
    future: h,
  } = n;
  ds() && We(!1);
  let g = o.replace(/^\/*/, "/"),
    v = S.useMemo(
      () => ({
        basename: g,
        navigator: d,
        static: p,
        future: is({ v7_relativeSplatPath: !1 }, h),
      }),
      [g, h, d, p]
    );
  typeof a == "string" && (a = oo(a));
  let {
      pathname: x = "/",
      search: w = "",
      hash: b = "",
      state: y = null,
      key: T = "default",
    } = a,
    C = S.useMemo(() => {
      let k = Au(x, g);
      return k == null
        ? null
        : {
            location: { pathname: k, search: w, hash: b, state: y, key: T },
            navigationType: u,
          };
    }, [g, x, w, b, y, T, u]);
  return C == null
    ? null
    : S.createElement(
        wr.Provider,
        { value: v },
        S.createElement(ta.Provider, { children: s, value: C })
      );
}
function r2(n) {
  let { children: o, location: s } = n;
  return $1(pu(o), s);
}
new Promise(() => {});
function pu(n, o) {
  o === void 0 && (o = []);
  let s = [];
  return (
    S.Children.forEach(n, (a, u) => {
      if (!S.isValidElement(a)) return;
      let d = [...o, u];
      if (a.type === S.Fragment) {
        s.push.apply(s, pu(a.props.children, d));
        return;
      }
      a.type !== Cn && We(!1), !a.props.index || !a.props.children || We(!1);
      let p = {
        id: a.props.id || d.join("-"),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        loader: a.props.loader,
        action: a.props.action,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary:
          a.props.ErrorBoundary != null || a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy,
      };
      a.props.children && (p.children = pu(a.props.children, d)), s.push(p);
    }),
    s
  );
}
function hu() {
  return (
    (hu = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var s = arguments[o];
            for (var a in s)
              Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a]);
          }
          return n;
        }),
    hu.apply(this, arguments)
  );
}
function o2(n, o) {
  if (n == null) return {};
  var s = {},
    a = Object.keys(n),
    u,
    d;
  for (d = 0; d < a.length; d++)
    (u = a[d]), !(o.indexOf(u) >= 0) && (s[u] = n[u]);
  return s;
}
function s2(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function i2(n, o) {
  return n.button === 0 && (!o || o === "_self") && !s2(n);
}
const a2 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  l2 = "6";
try {
  window.__reactRouterVersion = l2;
} catch {}
const u2 = "startTransition",
  sp = vp[u2];
function c2(n) {
  let { basename: o, children: s, future: a, window: u } = n,
    d = S.useRef();
  d.current == null && (d.current = f1({ window: u, v5Compat: !0 }));
  let p = d.current,
    [h, g] = S.useState({ action: p.action, location: p.location }),
    { v7_startTransition: v } = a || {},
    x = S.useCallback(
      (w) => {
        v && sp ? sp(() => g(w)) : g(w);
      },
      [g, v]
    );
  return (
    S.useLayoutEffect(() => p.listen(x), [p, x]),
    S.useEffect(() => t2(a), [a]),
    S.createElement(n2, {
      basename: o,
      children: s,
      location: h.location,
      navigationType: h.action,
      navigator: p,
      future: a,
    })
  );
}
const d2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  f2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Xn = S.forwardRef(function (o, s) {
    let {
        onClick: a,
        relative: u,
        reloadDocument: d,
        replace: p,
        state: h,
        target: g,
        to: v,
        preventScrollReset: x,
        viewTransition: w,
      } = o,
      b = o2(o, a2),
      { basename: y } = S.useContext(wr),
      T,
      C = !1;
    if (typeof v == "string" && f2.test(v) && ((T = v), d2))
      try {
        let D = new URL(window.location.href),
          F = v.startsWith("//") ? new URL(D.protocol + v) : new URL(v),
          V = Au(F.pathname, y);
        F.origin === D.origin && V != null
          ? (v = V + F.search + F.hash)
          : (C = !0);
      } catch {}
    let k = F1(v, { relative: u }),
      A = p2(v, {
        replace: p,
        state: h,
        target: g,
        preventScrollReset: x,
        relative: u,
        viewTransition: w,
      });
    function L(D) {
      a && a(D), D.defaultPrevented || A(D);
    }
    return S.createElement(
      "a",
      hu({}, b, { href: T || k, onClick: C || d ? a : L, ref: s, target: g })
    );
  });
var ip;
(function (n) {
  (n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmit = "useSubmit"),
    (n.UseSubmitFetcher = "useSubmitFetcher"),
    (n.UseFetcher = "useFetcher"),
    (n.useViewTransitionState = "useViewTransitionState");
})(ip || (ip = {}));
var ap;
(function (n) {
  (n.UseFetcher = "useFetcher"),
    (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration");
})(ap || (ap = {}));
function p2(n, o) {
  let {
      target: s,
      replace: a,
      state: u,
      preventScrollReset: d,
      relative: p,
      viewTransition: h,
    } = o === void 0 ? {} : o,
    g = U1(),
    v = so(),
    x = em(n, { relative: p });
  return S.useCallback(
    (w) => {
      if (i2(w, s)) {
        w.preventDefault();
        let b = a !== void 0 ? a : Bi(v) === Bi(x);
        g(n, {
          replace: b,
          state: u,
          preventScrollReset: d,
          relative: p,
          viewTransition: h,
        });
      }
    },
    [v, g, x, a, u, s, n, d, p, h]
  );
}
const h2 = wu(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-card active:scale-[0.98]",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft",
          outline:
            "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-secondary hover:text-secondary-foreground",
          link: "text-primary underline-offset-4 hover:underline",
          accent:
            "bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft hover:shadow-card active:scale-[0.98]",
          hero: "gradient-primary text-primary-foreground shadow-glow hover:shadow-card active:scale-[0.98] font-semibold",
          "hero-outline":
            "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-12 rounded-lg px-8 text-base",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Te = S.forwardRef(
    ({ className: n, variant: o, size: s, asChild: a = !1, ...u }, d) => {
      const p = a ? Nv : "button";
      return f.jsx(p, {
        className: Re(h2({ variant: o, size: s, className: n })),
        ref: d,
        ...u,
      });
    }
  );
Te.displayName = "Button";
const lp = [
  { to: "/", label: "Home", icon: ru },
  { to: "/marketplace", label: "Marketplace", icon: es },
  { to: "/notes", label: "Notes", icon: Zo },
  { to: "/accommodation", label: "Accommodation", icon: qp },
  { to: "/chat", label: "Chat", icon: us },
  { to: "/profile", label: "Profile", icon: Xp },
];
function m2() {
  const [n, o] = S.useState(!1),
    s = so();
  return f.jsxs("nav", {
    className:
      "sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80",
    children: [
      f.jsxs("div", {
        className: "container flex h-16 items-center justify-between",
        children: [
          f.jsxs(Xn, {
            to: "/",
            className: "flex items-center gap-2",
            children: [
              f.jsx("div", {
                className:
                  "flex h-9 w-9 items-center justify-center rounded-lg gradient-primary",
                children: f.jsx("span", {
                  className: "text-lg font-bold text-primary-foreground",
                  children: "C",
                }),
              }),
              f.jsxs("span", {
                className: "text-xl font-bold tracking-tight",
                children: [
                  "Campus",
                  f.jsx("span", {
                    className: "text-primary",
                    children: "Connect",
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: "hidden md:flex items-center gap-1",
            children: lp.map((a) => {
              const u = a.icon,
                d = s.pathname === a.to;
              return f.jsx(
                Xn,
                {
                  to: a.to,
                  children: f.jsxs(Te, {
                    variant: d ? "secondary" : "ghost",
                    size: "sm",
                    className: Re("gap-2", d && "bg-primary/10 text-primary"),
                    children: [f.jsx(u, { className: "h-4 w-4" }), a.label],
                  }),
                },
                a.to
              );
            }),
          }),
          f.jsx(Te, {
            variant: "ghost",
            size: "icon",
            className: "md:hidden",
            onClick: () => o(!n),
            children: n
              ? f.jsx(Zp, { className: "h-5 w-5" })
              : f.jsx(Ry, { className: "h-5 w-5" }),
          }),
        ],
      }),
      n &&
        f.jsx("div", {
          className: "md:hidden border-t bg-card animate-slide-up",
          children: f.jsx("div", {
            className: "container py-4 space-y-1",
            children: lp.map((a) => {
              const u = a.icon,
                d = s.pathname === a.to;
              return f.jsx(
                Xn,
                {
                  to: a.to,
                  onClick: () => o(!1),
                  children: f.jsxs(Te, {
                    variant: d ? "secondary" : "ghost",
                    className: Re(
                      "w-full justify-start gap-3",
                      d && "bg-primary/10 text-primary"
                    ),
                    children: [f.jsx(u, { className: "h-5 w-5" }), a.label],
                  }),
                },
                a.to
              );
            }),
          }),
        }),
    ],
  });
}
const Le = S.forwardRef(({ className: n, variant: o = "default", ...s }, a) => {
  const u = {
    default: "bg-card text-card-foreground shadow-soft",
    elevated: "bg-card text-card-foreground shadow-card",
    interactive:
      "bg-card text-card-foreground shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer",
    glass:
      "bg-card/80 backdrop-blur-sm text-card-foreground shadow-soft border-border/50",
  };
  return f.jsx("div", {
    ref: a,
    className: Re("rounded-xl border", u[o], n),
    ...s,
  });
});
Le.displayName = "Card";
const gr = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx("div", {
    ref: s,
    className: Re("flex flex-col space-y-1.5 p-6", n),
    ...o,
  })
);
gr.displayName = "CardHeader";
const vr = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx("h3", {
    ref: s,
    className: Re("text-xl font-semibold leading-none tracking-tight", n),
    ...o,
  })
);
vr.displayName = "CardTitle";
const g2 = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx("p", {
    ref: s,
    className: Re("text-sm text-muted-foreground", n),
    ...o,
  })
);
g2.displayName = "CardDescription";
const Ie = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx("div", { ref: s, className: Re("p-6 pt-0", n), ...o })
);
Ie.displayName = "CardContent";
const v2 = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx("div", { ref: s, className: Re("flex items-center p-6 pt-0", n), ...o })
);
v2.displayName = "CardFooter";
function io({ children: n, className: o }) {
  return f.jsx("main", {
    className: Re("container py-8 animate-fade-in", o),
    children: n,
  });
}
const y2 = [
    {
      to: "/marketplace",
      icon: es,
      title: "Marketplace",
      description: "Buy & sell notes, books, electronics",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      to: "/notes",
      icon: Zo,
      title: "Notes Repository",
      description: "Access study materials by course",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      to: "/accommodation",
      icon: qp,
      title: "Accommodation",
      description: "Find PG, flats & roommates",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      to: "/chat",
      icon: us,
      title: "Peer Chat",
      description: "Connect with fellow students",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ],
  x2 = [
    {
      type: "event",
      title: "Hackathon 2025",
      subtitle: "Registration open until Dec 15",
    },
    {
      type: "trending",
      title: "DSA Notes Pack",
      subtitle: "50+ downloads this week",
    },
    { type: "new", title: "3 new PG listings", subtitle: "Near NSEC Campus" },
  ];
function w2() {
  return f.jsxs(io, {
    children: [
      f.jsxs("section", {
        className:
          "relative mb-12 overflow-hidden rounded-2xl gradient-hero p-8 md:p-12",
        children: [
          f.jsxs("div", {
            className: "relative z-10 max-w-2xl",
            children: [
              f.jsxs("div", {
                className:
                  "mb-4 inline-flex items-center gap-2 rounded-full bg-background/20 px-3 py-1 text-sm text-primary-foreground backdrop-blur-sm",
                children: [
                  f.jsx(Ay, { className: "h-4 w-4" }),
                  "Your Campus Companion",
                ],
              }),
              f.jsx("h1", {
                className:
                  "mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl",
                children: "Connect. Learn. Thrive.",
              }),
              f.jsx("p", {
                className: "mb-6 text-lg text-primary-foreground/90",
                children:
                  "Everything you need for campus life — peer connections, marketplace, notes sharing, and accommodation finder.",
              }),
              f.jsxs("div", {
                className: "flex flex-wrap gap-3",
                children: [
                  f.jsx(Xn, {
                    to: "/marketplace",
                    children: f.jsxs(Te, {
                      variant: "accent",
                      size: "lg",
                      className: "gap-2",
                      children: [
                        f.jsx(es, { className: "h-5 w-5" }),
                        "Browse Marketplace",
                      ],
                    }),
                  }),
                  f.jsx(Xn, {
                    to: "/notes",
                    children: f.jsxs(Te, {
                      variant: "hero-outline",
                      size: "lg",
                      className:
                        "gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
                      children: [
                        f.jsx(Gp, { className: "h-5 w-5" }),
                        "Explore Notes",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className:
              "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-background/10 blur-3xl",
          }),
          f.jsx("div", {
            className:
              "absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl",
          }),
        ],
      }),
      f.jsxs("div", {
        className: "grid gap-8 lg:grid-cols-3",
        children: [
          f.jsxs("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
              f.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  f.jsx("h2", {
                    className: "text-2xl font-semibold",
                    children: "Quick Access",
                  }),
                  f.jsx(Xn, {
                    to: "/profile",
                    className:
                      "text-sm text-muted-foreground hover:text-primary transition-colors",
                    children: "View all →",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "grid gap-4 sm:grid-cols-2",
                children: y2.map((n) => {
                  const o = n.icon;
                  return f.jsx(
                    Xn,
                    {
                      to: n.to,
                      children: f.jsx(Le, {
                        variant: "interactive",
                        className: "h-full",
                        children: f.jsxs(Ie, {
                          className: "flex items-start gap-4 p-5",
                          children: [
                            f.jsx("div", {
                              className: `rounded-lg p-3 ${n.bg}`,
                              children: f.jsx(o, {
                                className: `h-6 w-6 ${n.color}`,
                              }),
                            }),
                            f.jsxs("div", {
                              className: "flex-1",
                              children: [
                                f.jsx("h3", {
                                  className: "font-semibold mb-1",
                                  children: n.title,
                                }),
                                f.jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: n.description,
                                }),
                              ],
                            }),
                            f.jsx(wy, {
                              className:
                                "h-5 w-5 text-muted-foreground/50 transition-transform group-hover:translate-x-1",
                            }),
                          ],
                        }),
                      }),
                    },
                    n.to
                  );
                }),
              }),
              f.jsx(Le, {
                variant: "elevated",
                children: f.jsx(Ie, {
                  className: "p-6",
                  children: f.jsxs("div", {
                    className: "grid grid-cols-3 gap-4 text-center",
                    children: [
                      f.jsxs("div", {
                        children: [
                          f.jsx("div", {
                            className: "text-3xl font-bold text-primary",
                            children: "2.5k+",
                          }),
                          f.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Active Students",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("div", {
                            className: "text-3xl font-bold text-accent",
                            children: "850+",
                          }),
                          f.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Notes Shared",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("div", {
                            className: "text-3xl font-bold text-primary",
                            children: "10+",
                          }),
                          f.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Colleges",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          f.jsxs("aside", {
            className: "space-y-6",
            children: [
              f.jsxs(Le, {
                variant: "elevated",
                children: [
                  f.jsx(gr, {
                    children: f.jsxs(vr, {
                      className: "flex items-center gap-2",
                      children: [
                        f.jsx(Dy, { className: "h-5 w-5 text-primary" }),
                        "Campus Feed",
                      ],
                    }),
                  }),
                  f.jsx(Ie, {
                    className: "space-y-4",
                    children: x2.map((n, o) =>
                      f.jsxs(
                        "div",
                        {
                          className:
                            "flex items-start gap-3 rounded-lg bg-secondary/50 p-3",
                          children: [
                            f.jsx("div", {
                              className: `mt-0.5 h-2 w-2 rounded-full ${
                                n.type === "event"
                                  ? "bg-primary"
                                  : n.type === "trending"
                                  ? "bg-accent"
                                  : "bg-muted-foreground"
                              }`,
                            }),
                            f.jsxs("div", {
                              children: [
                                f.jsx("div", {
                                  className: "font-medium text-sm",
                                  children: n.title,
                                }),
                                f.jsx("div", {
                                  className: "text-xs text-muted-foreground",
                                  children: n.subtitle,
                                }),
                              ],
                            }),
                          ],
                        },
                        o
                      )
                    ),
                  }),
                ],
              }),
              f.jsx(Le, {
                variant: "glass",
                children: f.jsxs(Ie, {
                  className: "p-6 text-center",
                  children: [
                    f.jsx(zy, {
                      className: "mx-auto mb-3 h-10 w-10 text-primary",
                    }),
                    f.jsx("h4", {
                      className: "font-semibold mb-2",
                      children: "Join the Community",
                    }),
                    f.jsx("p", {
                      className: "text-sm text-muted-foreground mb-4",
                      children:
                        "Connect with peers from your college and beyond.",
                    }),
                    f.jsx(Xn, {
                      to: "/profile",
                      children: f.jsx(Te, {
                        variant: "hero",
                        className: "w-full",
                        children: "Get Started",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const eo = S.forwardRef(({ className: n, type: o, ...s }, a) =>
  f.jsx("input", {
    type: o,
    className: Re(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      n
    ),
    ref: a,
    ...s,
  })
);
eo.displayName = "Input";
const S2 = wu(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function xr({ className: n, variant: o, ...s }) {
  return f.jsx("div", { className: Re(S2({ variant: o }), n), ...s });
}
const E2 = [
    {
      id: "1",
      title: "Engineering Mathematics Textbook",
      price: "₹350",
      description:
        "Like new condition, all chapters included. Perfect for 1st year students.",
      category: "Books",
      seller: "Rahul A.",
      college: "NSEC Garia",
      image: "/marketplace/notes.jpg",
    },
    {
      id: "2",
      title: "Scientific Calculator (Casio FX-991)",
      price: "₹800",
      description: "Barely used, comes with original case. Great for exams.",
      category: "Electronics",
      seller: "Priya M.",
      college: "Heritage Kolkata",
      image: "/marketplace/calculator.jpg",
    },
    {
      id: "3",
      title: "Data Structures Notes Bundle",
      price: "₹150",
      description:
        "Handwritten notes covering all topics. Helped me score 9+ CGPA.",
      category: "Notes",
      seller: "Amit K.",
      college: "IEM Kolkata",
      image: "/marketplace/dsa.jpg",
    },
    {
      id: "4",
      title: "Study Lamp with USB Charging",
      price: "₹450",
      description:
        "LED lamp with adjustable brightness. Perfect for late night study sessions.",
      category: "Electronics",
      seller: "Sneha R.",
      college: "AEC Asansol",
      image: "/marketplace/lamp.jpg",
    },
  ],
  C2 = ["All", "Books", "Notes", "Electronics", "Clothing", "Other"];
function k2() {
  const [n, o] = S.useState(""),
    [s, a] = S.useState("All"),
    u = E2.filter((d) => {
      const p =
          d.title.toLowerCase().includes(n.toLowerCase()) ||
          d.description.toLowerCase().includes(n.toLowerCase()),
        h = s === "All" || d.category === s;
      return p && h;
    });
  return f.jsxs(io, {
    children: [
      f.jsxs("div", {
        className: "mb-8",
        children: [
          f.jsx("h1", {
            className: "text-3xl font-bold mb-2",
            children: "Student Marketplace",
          }),
          f.jsx("p", {
            className: "text-muted-foreground",
            children:
              "Buy and sell books, notes, electronics, and more from verified students.",
          }),
        ],
      }),
      f.jsx(Le, {
        variant: "elevated",
        className: "mb-6",
        children: f.jsx(Ie, {
          className: "p-4",
          children: f.jsxs("div", {
            className: "flex flex-col gap-4 md:flex-row md:items-center",
            children: [
              f.jsxs("div", {
                className: "relative flex-1",
                children: [
                  f.jsx(Jo, {
                    className:
                      "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
                  }),
                  f.jsx(eo, {
                    placeholder: "Search listings...",
                    value: n,
                    onChange: (d) => o(d.target.value),
                    className: "pl-10",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "flex gap-2 overflow-x-auto pb-2 md:pb-0",
                children: C2.map((d) =>
                  f.jsx(
                    Te,
                    {
                      variant: s === d ? "default" : "outline",
                      size: "sm",
                      onClick: () => a(d),
                      children: d,
                    },
                    d
                  )
                ),
              }),
            ],
          }),
        }),
      }),
      f.jsx("div", {
        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        children: u.map((d) =>
          f.jsxs(
            Le,
            {
              variant: "interactive",
              children: [
                f.jsx("div", {
                  className: "h-48 rounded-t-xl overflow-hidden bg-secondary",
                  children: d.image
                    ? f.jsx("img", {
                        src: d.image,
                        alt: d.title,
                        className: "h-full w-full object-fit",
                      })
                    : f.jsx("div", {
                        className: "flex h-full items-center justify-center",
                        children: f.jsx(Ly, {
                          className: "h-12 w-12 text-muted-foreground/30",
                        }),
                      }),
                }),
                f.jsxs(Ie, {
                  className: "p-5",
                  children: [
                    f.jsxs("div", {
                      className: "flex items-start justify-between mb-3",
                      children: [
                        f.jsxs("div", {
                          children: [
                            f.jsx(xr, {
                              variant: "secondary",
                              className: "mb-2",
                              children: d.category,
                            }),
                            f.jsx("h3", {
                              className: "font-semibold line-clamp-1",
                              children: d.title,
                            }),
                          ],
                        }),
                        f.jsx("span", {
                          className: "text-lg font-bold text-primary",
                          children: d.price,
                        }),
                      ],
                    }),
                    f.jsx("p", {
                      className:
                        "text-sm text-muted-foreground mb-4 line-clamp-2",
                      children: d.description,
                    }),
                    f.jsxs("div", {
                      className:
                        "flex items-center justify-between text-sm text-muted-foreground mb-4",
                      children: [
                        f.jsx("span", { children: d.seller }),
                        f.jsx("span", { children: d.college }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        f.jsxs(Te, {
                          variant: "default",
                          className: "flex-1 gap-2",
                          children: [
                            f.jsx(us, { className: "h-4 w-4" }),
                            "Contact Seller",
                          ],
                        }),
                        f.jsx(Te, {
                          variant: "outline",
                          size: "icon",
                          children: f.jsx(by, { className: "h-4 w-4" }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            d.id
          )
        ),
      }),
      u.length === 0 &&
        f.jsx(Le, {
          variant: "glass",
          className: "text-center py-12",
          children: f.jsxs(Ie, {
            children: [
              f.jsx(Jo, {
                className: "mx-auto h-12 w-12 text-muted-foreground/30 mb-4",
              }),
              f.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "No listings found",
              }),
              f.jsx("p", {
                className: "text-muted-foreground",
                children: "Try adjusting your search or filters.",
              }),
            ],
          }),
        }),
      f.jsx(Le, {
        variant: "elevated",
        className: "mt-8",
        children: f.jsxs(Ie, {
          className: "p-6 text-center",
          children: [
            f.jsx("h3", {
              className: "text-lg font-semibold mb-2",
              children: "Have something to sell?",
            }),
            f.jsx("p", {
              className: "text-muted-foreground mb-4",
              children:
                "List your items and reach thousands of students on campus.",
            }),
            f.jsx(Te, { variant: "hero", children: "Create Listing" }),
          ],
        }),
      }),
    ],
  });
}
const N2 = [
    {
      id: "1",
      title: "Complete Data Structures Notes",
      course: "CS201",
      semester: "3rd Sem",
      uploaderName: "Ankit Sharma",
      college: "NSEC Garia",
      downloads: 234,
      rating: 4.8,
    },
    {
      id: "2",
      title: "Digital Electronics Handwritten",
      course: "EC301",
      semester: "5th Sem",
      uploaderName: "Priya Patel",
      college: "IEM Kolkata",
      downloads: 156,
      rating: 4.5,
    },
    {
      id: "3",
      title: "Operating Systems - Complete Guide",
      course: "CS302",
      semester: "5th Sem",
      uploaderName: "Rohit Kumar",
      college: "NIT kolkata",
      downloads: 312,
      rating: 4.9,
    },
    {
      id: "4",
      title: "Thermodynamics Solved Problems",
      course: "ME201",
      semester: "3rd Sem",
      uploaderName: "Kavita Singh",
      college: "TMSL Kolkata ",
      downloads: 89,
      rating: 4.3,
    },
    {
      id: "5",
      title: "Machine Learning Fundamentals",
      course: "CS401",
      semester: "7th Sem",
      uploaderName: "Vikram Reddy",
      college: "Heritage Kolkata",
      downloads: 445,
      rating: 4.7,
    },
  ],
  b2 = [
    "All",
    "1st Sem",
    "2nd Sem",
    "3rd Sem",
    "4th Sem",
    "5th Sem",
    "6th Sem",
    "7th Sem",
    "8th Sem",
  ];
function j2() {
  const [n, o] = S.useState(""),
    [s, a] = S.useState("All"),
    u = N2.filter((d) => {
      const p =
          d.title.toLowerCase().includes(n.toLowerCase()) ||
          d.course.toLowerCase().includes(n.toLowerCase()),
        h = s === "All" || d.semester === s;
      return p && h;
    });
  return f.jsxs(io, {
    children: [
      f.jsxs("div", {
        className: "mb-8",
        children: [
          f.jsx("h1", {
            className: "text-3xl font-bold mb-2",
            children: "Notes Repository",
          }),
          f.jsx("p", {
            className: "text-muted-foreground",
            children:
              "Access and share study materials by college, course, and semester.",
          }),
        ],
      }),
      f.jsx(Le, {
        variant: "elevated",
        className: "mb-6",
        children: f.jsx(Ie, {
          className: "p-4",
          children: f.jsxs("div", {
            className: "flex flex-col gap-4 lg:flex-row lg:items-center",
            children: [
              f.jsxs("div", {
                className: "relative flex-1",
                children: [
                  f.jsx(Jo, {
                    className:
                      "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
                  }),
                  f.jsx(eo, {
                    placeholder: "Search notes by title or course code...",
                    value: n,
                    onChange: (d) => o(d.target.value),
                    className: "pl-10",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "flex gap-2 overflow-x-auto pb-2 lg:pb-0",
                children: b2
                  .slice(0, 5)
                  .map((d) =>
                    f.jsx(
                      Te,
                      {
                        variant: s === d ? "default" : "outline",
                        size: "sm",
                        onClick: () => a(d),
                        children: d,
                      },
                      d
                    )
                  ),
              }),
            ],
          }),
        }),
      }),
      f.jsx("div", {
        className: "space-y-4",
        children: u.map((d) =>
          f.jsx(
            Le,
            {
              variant: "interactive",
              children: f.jsx(Ie, {
                className: "p-5",
                children: f.jsxs("div", {
                  className:
                    "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                  children: [
                    f.jsxs("div", {
                      className: "flex items-start gap-4",
                      children: [
                        f.jsx("div", {
                          className: "rounded-lg bg-primary/10 p-3",
                          children: f.jsx(Zo, {
                            className: "h-6 w-6 text-primary",
                          }),
                        }),
                        f.jsxs("div", {
                          children: [
                            f.jsxs("div", {
                              className:
                                "flex flex-wrap items-center gap-2 mb-1",
                              children: [
                                f.jsx("h3", {
                                  className: "font-semibold",
                                  children: d.title,
                                }),
                                f.jsx(xr, {
                                  variant: "secondary",
                                  children: d.course,
                                }),
                                f.jsx(xr, {
                                  variant: "outline",
                                  children: d.semester,
                                }),
                              ],
                            }),
                            f.jsxs("div", {
                              className:
                                "flex flex-wrap items-center gap-3 text-sm text-muted-foreground",
                              children: [
                                f.jsxs("span", {
                                  children: ["by ", d.uploaderName],
                                }),
                                f.jsx("span", { children: "•" }),
                                f.jsx("span", { children: d.college }),
                                f.jsx("span", { children: "•" }),
                                f.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    f.jsx(Yp, {
                                      className:
                                        "h-3 w-3 fill-accent text-accent",
                                    }),
                                    d.rating,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        f.jsxs("div", {
                          className:
                            "text-sm text-muted-foreground flex items-center gap-1",
                          children: [
                            f.jsx(Rf, { className: "h-4 w-4" }),
                            d.downloads,
                          ],
                        }),
                        f.jsxs(Te, {
                          variant: "outline",
                          size: "sm",
                          className: "gap-2",
                          children: [
                            f.jsx(Ny, { className: "h-4 w-4" }),
                            "Preview",
                          ],
                        }),
                        f.jsxs(Te, {
                          size: "sm",
                          className: "gap-2",
                          children: [
                            f.jsx(Rf, { className: "h-4 w-4" }),
                            "Download",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            d.id
          )
        ),
      }),
      u.length === 0 &&
        f.jsx(Le, {
          variant: "glass",
          className: "text-center py-12",
          children: f.jsxs(Ie, {
            children: [
              f.jsx(Gp, {
                className: "mx-auto h-12 w-12 text-muted-foreground/30 mb-4",
              }),
              f.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "No notes found",
              }),
              f.jsx("p", {
                className: "text-muted-foreground",
                children: "Try adjusting your search or semester filter.",
              }),
            ],
          }),
        }),
      f.jsx(Le, {
        variant: "elevated",
        className: "mt-8",
        children: f.jsxs(Ie, {
          className:
            "p-6 flex flex-col md:flex-row items-center justify-between gap-4",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("h3", {
                  className: "text-lg font-semibold mb-1",
                  children: "Share Your Knowledge",
                }),
                f.jsx("p", {
                  className: "text-muted-foreground",
                  children:
                    "Help fellow students by uploading your notes and study materials.",
                }),
              ],
            }),
            f.jsxs(Te, {
              variant: "hero",
              className: "gap-2 whitespace-nowrap",
              children: [f.jsx(Iy, { className: "h-4 w-4" }), "Upload Notes"],
            }),
          ],
        }),
      }),
    ],
  });
}
const P2 = [
    {
      id: "1",
      title: "Spacious 2BHK Near Dhalai Bridge",
      location: "Garia Station",
      rent: "₹9,000/month",
      type: "Flat",
      amenities: ["WiFi", "Parking", "Furnished"],
      details:
        "Fully furnished flat with AC in both rooms. Looking for 1 Flatmate. Girls preferred.",
      postedBy: "Neha G.",
      distance: "1.2km from campus",
      mapUrl: "https://www.google.com/maps?q=Garia+Station+Rd&output=embed",
    },
    {
      id: "2",
      title: "PG with Meals Included",
      location: "Howrah, Kolkata",
      rent: "₹10,000/month",
      type: "PG",
      amenities: ["WiFi", "Meals", "Laundry"],
      details:
        "Single occupancy room available. 3 meals included. AC and geyser in room.",
      postedBy: "Aditya k.",
      distance: "25km from campus",
      mapUrl:
        "https://www.google.com/maps?q=Howrah+Station+Kolkata&output=embed",
    },
    {
      id: "3",
      title: "Looking for Flatmate - 3BHK",
      location: "ballygunge, Kolkata",
      rent: "₹14,000/month",
      type: "Shared",
      amenities: ["WiFi", "Gym", "Parking"],
      details:
        "One room available in 3BHK. Society has gym and pool. Near metro station.",
      postedBy: "Ujjawal K.",
      distance: "8km from campus",
      mapUrl: "https://www.google.com/maps?q=Ashutosh+ballygunge&output=embed",
    },
    {
      id: "4",
      title: "Studio Apartment - Perfect for Students",
      location: "Kavi Shubhash, Garia",
      rent: "₹8,000/month",
      type: "Flat",
      amenities: ["WiFi", "Furnished"],
      details:
        "Compact studio apartment ideal for single occupancy. Quiet neighborhood.",
      postedBy: "Govind K.",
      distance: "3km from campus",
      mapUrl: "https://www.google.com/maps?q=kavi+shubhash+garia&output=embed",
    },
  ],
  T2 = ["All", "PG", "Flat", "Shared", "Hostel"];
function R2() {
  const [n, o] = S.useState(""),
    [s, a] = S.useState("All"),
    u = P2.filter((p) => {
      const h =
          p.title.toLowerCase().includes(n.toLowerCase()) ||
          p.location.toLowerCase().includes(n.toLowerCase()),
        g = s === "All" || p.type === s;
      return h && g;
    }),
    d = (p) => {
      switch (p.toLowerCase()) {
        case "wifi":
          return f.jsx(Uy, { className: "h-3 w-3" });
        case "parking":
          return f.jsx(Ey, { className: "h-3 w-3" });
        default:
          return null;
      }
    };
  return f.jsxs(io, {
    children: [
      f.jsxs("div", {
        className: "mb-8",
        children: [
          f.jsx("h1", {
            className: "text-3xl font-bold mb-2",
            children: "Find Accommodation",
          }),
          f.jsx("p", {
            className: "text-muted-foreground",
            children:
              "Discover PGs, flats, and find roommates near your campus.",
          }),
        ],
      }),
      f.jsx(Le, {
        variant: "elevated",
        className: "mb-6",
        children: f.jsx(Ie, {
          className: "p-4",
          children: f.jsxs("div", {
            className: "flex flex-col gap-4 md:flex-row md:items-center",
            children: [
              f.jsxs("div", {
                className: "relative flex-1",
                children: [
                  f.jsx(Jo, {
                    className:
                      "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
                  }),
                  f.jsx(eo, {
                    placeholder: "Search by location or title...",
                    value: n,
                    onChange: (p) => o(p.target.value),
                    className: "pl-10",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "flex gap-2 overflow-x-auto pb-2 md:pb-0",
                children: T2.map((p) =>
                  f.jsx(
                    Te,
                    {
                      variant: s === p ? "default" : "outline",
                      size: "sm",
                      onClick: () => a(p),
                      children: p,
                    },
                    p
                  )
                ),
              }),
            ],
          }),
        }),
      }),
      f.jsx("div", {
        className: "grid gap-6 md:grid-cols-2",
        children: u.map((p) =>
          f.jsxs(
            Le,
            {
              variant: "interactive",
              children: [
                f.jsx("div", {
                  className: "h-40 rounded-t-xl overflow-hidden",
                  children: f.jsx("iframe", {
                    src: p.mapUrl,
                    className: "w-full h-full border-0",
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade",
                  }),
                }),
                f.jsxs(Ie, {
                  className: "p-5",
                  children: [
                    f.jsxs("div", {
                      className: "flex items-start justify-between mb-3",
                      children: [
                        f.jsxs("div", {
                          children: [
                            f.jsx(xr, {
                              variant: "secondary",
                              className: "mb-2",
                              children: p.type,
                            }),
                            f.jsx("h3", {
                              className: "font-semibold",
                              children: p.title,
                            }),
                          ],
                        }),
                        f.jsx("div", {
                          className: "text-right",
                          children: f.jsx("span", {
                            className: "text-lg font-bold text-primary",
                            children: p.rent,
                          }),
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className:
                        "flex items-center gap-1 text-sm text-muted-foreground mb-3",
                      children: [
                        f.jsx(Ty, { className: "h-4 w-4" }),
                        p.location,
                      ],
                    }),
                    f.jsx("p", {
                      className:
                        "text-sm text-muted-foreground mb-4 line-clamp-2",
                      children: p.details,
                    }),
                    f.jsx("div", {
                      className: "flex flex-wrap gap-2 mb-4",
                      children: p.amenities.map((h) =>
                        f.jsxs(
                          xr,
                          {
                            variant: "outline",
                            className: "gap-1",
                            children: [d(h), h],
                          },
                          h
                        )
                      ),
                    }),
                    f.jsxs("div", {
                      className:
                        "flex items-center justify-between pt-4 border-t",
                      children: [
                        f.jsxs("span", {
                          className: "text-sm text-muted-foreground",
                          children: ["Posted by ", p.postedBy],
                        }),
                        f.jsxs(Te, {
                          className: "gap-2",
                          children: [
                            f.jsx(us, { className: "h-4 w-4" }),
                            "Contact",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            p.id
          )
        ),
      }),
      u.length === 0 &&
        f.jsx(Le, {
          variant: "glass",
          className: "text-center py-12",
          children: f.jsxs(Ie, {
            children: [
              f.jsx(ru, {
                className: "mx-auto h-12 w-12 text-muted-foreground/30 mb-4",
              }),
              f.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "No listings found",
              }),
              f.jsx("p", {
                className: "text-muted-foreground",
                children: "Try adjusting your search or filters.",
              }),
            ],
          }),
        }),
      f.jsx(Le, {
        variant: "elevated",
        className: "mt-8",
        children: f.jsxs(Ie, {
          className:
            "p-6 flex flex-col md:flex-row items-center justify-between gap-4",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("h3", {
                  className: "text-lg font-semibold mb-1",
                  children: "Have a Room to Rent?",
                }),
                f.jsx("p", {
                  className: "text-muted-foreground",
                  children:
                    "List your PG, flat, or find a roommate through our platform.",
                }),
              ],
            }),
            f.jsxs(Te, {
              variant: "hero",
              className: "gap-2 whitespace-nowrap",
              children: [f.jsx(ru, { className: "h-4 w-4" }), "Post Listing"],
            }),
          ],
        }),
      }),
    ],
  });
}
var Xl = { exports: {} },
  Zl = {};
var up;
function O2() {
  if (up) return Zl;
  up = 1;
  var n = Vi();
  function o(w, b) {
    return (w === b && (w !== 0 || 1 / w === 1 / b)) || (w !== w && b !== b);
  }
  var s = typeof Object.is == "function" ? Object.is : o,
    a = n.useState,
    u = n.useEffect,
    d = n.useLayoutEffect,
    p = n.useDebugValue;
  function h(w, b) {
    var y = b(),
      T = a({ inst: { value: y, getSnapshot: b } }),
      C = T[0].inst,
      k = T[1];
    return (
      d(
        function () {
          (C.value = y), (C.getSnapshot = b), g(C) && k({ inst: C });
        },
        [w, y, b]
      ),
      u(
        function () {
          return (
            g(C) && k({ inst: C }),
            w(function () {
              g(C) && k({ inst: C });
            })
          );
        },
        [w]
      ),
      p(y),
      y
    );
  }
  function g(w) {
    var b = w.getSnapshot;
    w = w.value;
    try {
      var y = b();
      return !s(w, y);
    } catch {
      return !0;
    }
  }
  function v(w, b) {
    return b();
  }
  var x =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? v
      : h;
  return (
    (Zl.useSyncExternalStore =
      n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : x),
    Zl
  );
}
var cp;
function M2() {
  return cp || ((cp = 1), (Xl.exports = O2())), Xl.exports;
}
var A2 = M2();
function _2() {
  return A2.useSyncExternalStore(
    L2,
    () => !0,
    () => !1
  );
}
function L2() {
  return () => {};
}
var Lu = "Avatar",
  [D2] = as(Lu),
  [I2, om] = D2(Lu),
  sm = S.forwardRef((n, o) => {
    const { __scopeAvatar: s, ...a } = n,
      [u, d] = S.useState("idle");
    return f.jsx(I2, {
      scope: s,
      imageLoadingStatus: u,
      onImageLoadingStatusChange: d,
      children: f.jsx(Ze.span, { ...a, ref: o }),
    });
  });
sm.displayName = Lu;
var im = "AvatarImage",
  am = S.forwardRef((n, o) => {
    const {
        __scopeAvatar: s,
        src: a,
        onLoadingStatusChange: u = () => {},
        ...d
      } = n,
      p = om(im, s),
      h = z2(a, d),
      g = kn((v) => {
        u(v), p.onImageLoadingStatusChange(v);
      });
    return (
      Gt(() => {
        h !== "idle" && g(h);
      }, [h, g]),
      h === "loaded" ? f.jsx(Ze.img, { ...d, ref: o, src: a }) : null
    );
  });
am.displayName = im;
var lm = "AvatarFallback",
  um = S.forwardRef((n, o) => {
    const { __scopeAvatar: s, delayMs: a, ...u } = n,
      d = om(lm, s),
      [p, h] = S.useState(a === void 0);
    return (
      S.useEffect(() => {
        if (a !== void 0) {
          const g = window.setTimeout(() => h(!0), a);
          return () => window.clearTimeout(g);
        }
      }, [a]),
      p && d.imageLoadingStatus !== "loaded"
        ? f.jsx(Ze.span, { ...u, ref: o })
        : null
    );
  });
um.displayName = lm;
function dp(n, o) {
  return n
    ? o
      ? (n.src !== o && (n.src = o),
        n.complete && n.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function z2(n, { referrerPolicy: o, crossOrigin: s }) {
  const a = _2(),
    u = S.useRef(null),
    d = a ? (u.current || (u.current = new window.Image()), u.current) : null,
    [p, h] = S.useState(() => dp(d, n));
  return (
    Gt(() => {
      h(dp(d, n));
    }, [d, n]),
    Gt(() => {
      const g = (w) => () => {
        h(w);
      };
      if (!d) return;
      const v = g("loaded"),
        x = g("error");
      return (
        d.addEventListener("load", v),
        d.addEventListener("error", x),
        o && (d.referrerPolicy = o),
        typeof s == "string" && (d.crossOrigin = s),
        () => {
          d.removeEventListener("load", v), d.removeEventListener("error", x);
        }
      );
    }, [d, s, o]),
    p
  );
}
var cm = sm,
  dm = am,
  fm = um;
const $i = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx(cm, {
    ref: s,
    className: Re(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      n
    ),
    ...o,
  })
);
$i.displayName = cm.displayName;
const F2 = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx(dm, { ref: s, className: Re("aspect-square h-full w-full", n), ...o })
);
F2.displayName = dm.displayName;
const Hi = S.forwardRef(({ className: n, ...o }, s) =>
  f.jsx(fm, {
    ref: s,
    className: Re(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      n
    ),
    ...o,
  })
);
Hi.displayName = fm.displayName;
const fp = [
    { id: "1", name: "Rahul Sharma", college: "IIT Delhi", online: !0 },
    { id: "2", name: "Priya Patel", college: "DTU", online: !0 },
    {
      id: "3",
      name: "Amit Kumar",
      college: "BITS Pilani",
      online: !1,
      lastSeen: "2 hours ago",
    },
    {
      id: "4",
      name: "Sneha Reddy",
      college: "IIT Bombay",
      online: !1,
      lastSeen: "Yesterday",
    },
    { id: "5", name: "Vikram Singh", college: "NIT Trichy", online: !0 },
  ],
  U2 = [
    {
      id: "1",
      text: "Hey! I saw your listing for the Data Structures notes",
      fromMe: !0,
      timestamp: new Date(Date.now() - 36e5),
    },
    {
      id: "2",
      text: "Hi! Yes, they're still available. Interested?",
      fromMe: !1,
      timestamp: new Date(Date.now() - 35e5),
    },
    {
      id: "3",
      text: "Definitely! Are they handwritten or typed?",
      fromMe: !0,
      timestamp: new Date(Date.now() - 34e5),
    },
    {
      id: "4",
      text: "Handwritten with diagrams and examples. I scored 9.5 in that course!",
      fromMe: !1,
      timestamp: new Date(Date.now() - 33e5),
    },
    {
      id: "5",
      text: "Perfect! Can we meet at the library tomorrow?",
      fromMe: !0,
      timestamp: new Date(Date.now() - 32e5),
    },
  ];
function pp() {
  const [n, o] = S.useState(fp[0]),
    [s, a] = S.useState(U2),
    [u, d] = S.useState(""),
    [p, h] = S.useState(""),
    g = S.useRef(null),
    v = () => {
      g.current?.scrollIntoView({ behavior: "smooth" });
    };
  S.useEffect(() => {
    v();
  }, [s]);
  const x = () => {
      if (!u.trim()) return;
      const y = {
        id: Date.now().toString(),
        text: u,
        fromMe: !0,
        timestamp: new Date(),
      };
      a([...s, y]), d("");
    },
    w = (y) => {
      y.key === "Enter" && !y.shiftKey && (y.preventDefault(), x());
    },
    b = fp.filter((y) => y.name.toLowerCase().includes(p.toLowerCase()));
  return f.jsx(io, {
    className: "h-[calc(100vh-8rem)]",
    children: f.jsxs("div", {
      className: "grid h-full gap-6 lg:grid-cols-[320px,1fr]",
      children: [
        f.jsxs(Le, {
          variant: "elevated",
          className: "flex flex-col overflow-hidden",
          children: [
            f.jsxs(gr, {
              className: "pb-4",
              children: [
                f.jsx(vr, { className: "text-lg", children: "Messages" }),
                f.jsxs("div", {
                  className: "relative mt-2",
                  children: [
                    f.jsx(Jo, {
                      className:
                        "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
                    }),
                    f.jsx(eo, {
                      placeholder: "Search conversations...",
                      value: p,
                      onChange: (y) => h(y.target.value),
                      className: "pl-10",
                    }),
                  ],
                }),
              ],
            }),
            f.jsx(Ie, {
              className: "flex-1 overflow-y-auto p-0",
              children: f.jsx("div", {
                className: "space-y-1 px-3 pb-3",
                children: b.map((y) =>
                  f.jsxs(
                    "button",
                    {
                      onClick: () => o(y),
                      className: Re(
                        "w-full flex items-center gap-3 rounded-lg p-3 text-left transition-colors",
                        n?.id === y.id
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-secondary"
                      ),
                      children: [
                        f.jsxs("div", {
                          className: "relative",
                          children: [
                            f.jsx($i, {
                              children: f.jsx(Hi, {
                                className: "bg-primary/10 text-primary",
                                children: y.name
                                  .split(" ")
                                  .map((T) => T[0])
                                  .join(""),
                              }),
                            }),
                            y.online &&
                              f.jsx(Cy, {
                                className:
                                  "absolute -bottom-0.5 -right-0.5 h-3 w-3 fill-green-500 text-green-500",
                              }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            f.jsx("div", {
                              className: "font-medium truncate",
                              children: y.name,
                            }),
                            f.jsx("div", {
                              className:
                                "text-xs text-muted-foreground truncate",
                              children: y.online ? "Online" : y.lastSeen,
                            }),
                          ],
                        }),
                      ],
                    },
                    y.id
                  )
                ),
              }),
            }),
          ],
        }),
        f.jsx(Le, {
          variant: "elevated",
          className: "flex flex-col overflow-hidden",
          children: n
            ? f.jsxs(f.Fragment, {
                children: [
                  f.jsxs("div", {
                    className: "flex items-center justify-between border-b p-4",
                    children: [
                      f.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          f.jsx($i, {
                            children: f.jsx(Hi, {
                              className: "bg-primary/10 text-primary",
                              children: n.name
                                .split(" ")
                                .map((y) => y[0])
                                .join(""),
                            }),
                          }),
                          f.jsxs("div", {
                            children: [
                              f.jsx("div", {
                                className: "font-semibold",
                                children: n.name,
                              }),
                              f.jsx("div", {
                                className: "text-xs text-muted-foreground",
                                children: n.college,
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          f.jsx(Te, {
                            variant: "ghost",
                            size: "icon",
                            children: f.jsx(Oy, { className: "h-4 w-4" }),
                          }),
                          f.jsx(Te, {
                            variant: "ghost",
                            size: "icon",
                            children: f.jsx(Fy, { className: "h-4 w-4" }),
                          }),
                          f.jsx(Te, {
                            variant: "ghost",
                            size: "icon",
                            children: f.jsx(ky, { className: "h-4 w-4" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-4",
                    children: [
                      s.map((y) =>
                        f.jsx(
                          "div",
                          {
                            className: Re(
                              "flex",
                              y.fromMe ? "justify-end" : "justify-start"
                            ),
                            children: f.jsxs("div", {
                              className: Re(
                                "max-w-[70%] rounded-2xl px-4 py-2",
                                y.fromMe
                                  ? "bg-primary text-primary-foreground rounded-br-md"
                                  : "bg-secondary rounded-bl-md"
                              ),
                              children: [
                                f.jsx("p", {
                                  className: "text-sm",
                                  children: y.text,
                                }),
                                f.jsx("p", {
                                  className: Re(
                                    "text-xs mt-1",
                                    y.fromMe
                                      ? "text-primary-foreground/70"
                                      : "text-muted-foreground"
                                  ),
                                  children: y.timestamp.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }),
                                }),
                              ],
                            }),
                          },
                          y.id
                        )
                      ),
                      f.jsx("div", { ref: g }),
                    ],
                  }),
                  f.jsx("div", {
                    className: "border-t p-4",
                    children: f.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        f.jsx(eo, {
                          placeholder: "Type a message...",
                          value: u,
                          onChange: (y) => d(y.target.value),
                          onKeyPress: w,
                          className: "flex-1",
                        }),
                        f.jsxs(Te, {
                          onClick: x,
                          className: "gap-2",
                          children: [
                            f.jsx(Of, { className: "h-4 w-4" }),
                            "Send",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : f.jsx("div", {
                className: "flex-1 flex items-center justify-center",
                children: f.jsxs("div", {
                  className: "text-center",
                  children: [
                    f.jsx("div", {
                      className:
                        "mx-auto mb-4 h-16 w-16 rounded-full bg-secondary flex items-center justify-center",
                      children: f.jsx(Of, {
                        className: "h-8 w-8 text-muted-foreground",
                      }),
                    }),
                    f.jsx("h3", {
                      className: "font-semibold mb-1",
                      children: "Select a conversation",
                    }),
                    f.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "Choose a peer to start chatting",
                    }),
                  ],
                }),
              }),
        }),
      ],
    }),
  });
}
var B2 = "Separator",
  hp = "horizontal",
  $2 = ["horizontal", "vertical"],
  pm = S.forwardRef((n, o) => {
    const { decorative: s, orientation: a = hp, ...u } = n,
      d = H2(a) ? a : hp,
      h = s
        ? { role: "none" }
        : {
            "aria-orientation": d === "vertical" ? d : void 0,
            role: "separator",
          };
    return f.jsx(Ze.div, { "data-orientation": d, ...h, ...u, ref: o });
  });
pm.displayName = B2;
function H2(n) {
  return $2.includes(n);
}
var hm = pm;
const mm = S.forwardRef(
  (
    { className: n, orientation: o = "horizontal", decorative: s = !0, ...a },
    u
  ) =>
    f.jsx(hm, {
      ref: u,
      decorative: s,
      orientation: o,
      className: Re(
        "shrink-0 bg-border",
        o === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        n
      ),
      ...a,
    })
);
mm.displayName = hm.displayName;
const Lt = {
    name: "Mister Agarwal",
    email: "misteragarwal2002@gmail.com",
    college: "Netaji Subhash Engineering college",
    course: "B.Tech Information Technology",
    year: "4th Year",
    bio: "Full Stack Developer, Building Scalable Systems. Always looking to connect with fellow tech enthusiasts!",
    stats: { listings: 5, notes: 8, connections: 48 },
    badges: ["Top Contributor", "Admin"],
  },
  V2 = [
    { type: "note", title: "Uploaded 'OS Complete Notes'", time: "2 days ago" },
    { type: "listing", title: "Listed 'Laptop table'", time: "1 week ago" },
    { type: "chat", title: "Connected with Priya P.", time: "1 week ago" },
  ];
function W2() {
  return f.jsx(io, {
    children: f.jsxs("div", {
      className: "grid gap-6 lg:grid-cols-3",
      children: [
        f.jsxs("div", {
          className: "lg:col-span-2 space-y-6",
          children: [
            f.jsx(Le, {
              variant: "elevated",
              children: f.jsx(Ie, {
                className: "p-6",
                children: f.jsxs("div", {
                  className: "flex flex-col sm:flex-row items-start gap-6",
                  children: [
                    f.jsx($i, {
                      className: "h-24 w-24",
                      children: f.jsx(Hi, {
                        className:
                          "bg-primary text-primary-foreground text-2xl",
                        children: Lt.name
                          .split(" ")
                          .map((n) => n[0])
                          .join(""),
                      }),
                    }),
                    f.jsxs("div", {
                      className: "flex-1",
                      children: [
                        f.jsxs("div", {
                          className:
                            "flex flex-wrap items-start justify-between gap-4 mb-3",
                          children: [
                            f.jsxs("div", {
                              children: [
                                f.jsx("h1", {
                                  className: "text-2xl font-bold",
                                  children: Lt.name,
                                }),
                                f.jsx("p", {
                                  className: "text-muted-foreground",
                                  children: Lt.email,
                                }),
                              ],
                            }),
                            f.jsxs(Te, {
                              variant: "outline",
                              className: "gap-2",
                              children: [
                                f.jsx(_y, { className: "h-4 w-4" }),
                                "Edit Profile",
                              ],
                            }),
                          ],
                        }),
                        f.jsx("div", {
                          className: "flex flex-wrap gap-2 mb-4",
                          children: Lt.badges.map((n) =>
                            f.jsxs(
                              xr,
                              {
                                variant: "secondary",
                                className: "gap-1",
                                children: [
                                  f.jsx(Yp, { className: "h-3 w-3" }),
                                  n,
                                ],
                              },
                              n
                            )
                          ),
                        }),
                        f.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: Lt.bio,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            f.jsxs(Le, {
              variant: "elevated",
              children: [
                f.jsx(gr, {
                  children: f.jsxs(vr, {
                    className: "flex items-center gap-2",
                    children: [
                      f.jsx(Wl, { className: "h-5 w-5 text-primary" }),
                      "Academic Details",
                    ],
                  }),
                }),
                f.jsx(Ie, {
                  className: "space-y-4",
                  children: f.jsxs("div", {
                    className: "grid gap-4 sm:grid-cols-2",
                    children: [
                      f.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          f.jsx("label", {
                            className:
                              "text-sm font-medium text-muted-foreground",
                            children: "College",
                          }),
                          f.jsxs("div", {
                            className:
                              "flex items-center gap-2 rounded-lg bg-secondary p-3",
                            children: [
                              f.jsx(Sy, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              f.jsx("span", { children: Lt.college }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          f.jsx("label", {
                            className:
                              "text-sm font-medium text-muted-foreground",
                            children: "Course",
                          }),
                          f.jsxs("div", {
                            className:
                              "flex items-center gap-2 rounded-lg bg-secondary p-3",
                            children: [
                              f.jsx(Wl, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              f.jsx("span", { children: Lt.course }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          f.jsx("label", {
                            className:
                              "text-sm font-medium text-muted-foreground",
                            children: "Year",
                          }),
                          f.jsxs("div", {
                            className:
                              "flex items-center gap-2 rounded-lg bg-secondary p-3",
                            children: [
                              f.jsx(Xp, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              f.jsx("span", { children: Lt.year }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          f.jsx("label", {
                            className:
                              "text-sm font-medium text-muted-foreground",
                            children: "Email",
                          }),
                          f.jsxs("div", {
                            className:
                              "flex items-center gap-2 rounded-lg bg-secondary p-3",
                            children: [
                              f.jsx(Py, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              f.jsx("span", {
                                className: "truncate",
                                children: Lt.email,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            f.jsxs(Le, {
              variant: "elevated",
              children: [
                f.jsx(gr, {
                  children: f.jsx(vr, { children: "Recent Activity" }),
                }),
                f.jsx(Ie, {
                  children: f.jsx("div", {
                    className: "space-y-4",
                    children: V2.map((n, o) =>
                      f.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-4",
                          children: [
                            f.jsxs("div", {
                              className: `rounded-lg p-2 ${
                                n.type === "note"
                                  ? "bg-primary/10"
                                  : n.type === "listing"
                                  ? "bg-accent/10"
                                  : "bg-secondary"
                              }`,
                              children: [
                                n.type === "note" &&
                                  f.jsx(Zo, {
                                    className: "h-4 w-4 text-primary",
                                  }),
                                n.type === "listing" &&
                                  f.jsx(es, {
                                    className: "h-4 w-4 text-accent",
                                  }),
                                n.type === "chat" &&
                                  f.jsx(us, {
                                    className: "h-4 w-4 text-muted-foreground",
                                  }),
                              ],
                            }),
                            f.jsxs("div", {
                              className: "flex-1",
                              children: [
                                f.jsx("p", {
                                  className: "text-sm font-medium",
                                  children: n.title,
                                }),
                                f.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: n.time,
                                }),
                              ],
                            }),
                          ],
                        },
                        o
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
        f.jsxs("aside", {
          className: "space-y-6",
          children: [
            f.jsxs(Le, {
              variant: "elevated",
              children: [
                f.jsx(gr, {
                  children: f.jsx(vr, {
                    className: "text-lg",
                    children: "Your Stats",
                  }),
                }),
                f.jsx(Ie, {
                  children: f.jsxs("div", {
                    className: "grid grid-cols-3 gap-4 text-center",
                    children: [
                      f.jsxs("div", {
                        children: [
                          f.jsx("div", {
                            className: "text-2xl font-bold text-primary",
                            children: Lt.stats.listings,
                          }),
                          f.jsx("div", {
                            className: "text-xs text-muted-foreground",
                            children: "Listings",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("div", {
                            className: "text-2xl font-bold text-accent",
                            children: Lt.stats.notes,
                          }),
                          f.jsx("div", {
                            className: "text-xs text-muted-foreground",
                            children: "Notes",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("div", {
                            className: "text-2xl font-bold text-primary",
                            children: Lt.stats.connections,
                          }),
                          f.jsx("div", {
                            className: "text-xs text-muted-foreground",
                            children: "Peers",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            f.jsxs(Le, {
              variant: "elevated",
              children: [
                f.jsx(gr, {
                  children: f.jsx(vr, {
                    className: "text-lg",
                    children: "Quick Actions",
                  }),
                }),
                f.jsxs(Ie, {
                  className: "space-y-2",
                  children: [
                    f.jsxs(Te, {
                      variant: "outline",
                      className: "w-full justify-start gap-3",
                      children: [
                        f.jsx(es, { className: "h-4 w-4" }),
                        "My Listings",
                      ],
                    }),
                    f.jsxs(Te, {
                      variant: "outline",
                      className: "w-full justify-start gap-3",
                      children: [
                        f.jsx(Zo, { className: "h-4 w-4" }),
                        "My Notes",
                      ],
                    }),
                    f.jsxs(Te, {
                      variant: "outline",
                      className: "w-full justify-start gap-3",
                      children: [
                        f.jsx(My, { className: "h-4 w-4" }),
                        "Settings",
                      ],
                    }),
                    f.jsx(mm, { className: "my-2" }),
                    f.jsxs(Te, {
                      variant: "ghost",
                      className:
                        "w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10",
                      children: [
                        f.jsx(jy, { className: "h-4 w-4" }),
                        "Log Out",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            f.jsx(Le, {
              variant: "glass",
              children: f.jsxs(Ie, {
                className: "p-5 text-center",
                children: [
                  f.jsx("div", {
                    className:
                      "mx-auto mb-3 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center",
                    children: f.jsx(Wl, { className: "h-6 w-6 text-primary" }),
                  }),
                  f.jsx("h4", {
                    className: "font-semibold mb-1",
                    children: "Verified Student",
                  }),
                  f.jsx("p", {
                    className: "text-xs text-muted-foreground mb-3",
                    children: "Your college email has been verified",
                  }),
                  f.jsx(xr, {
                    className: "bg-primary/10 text-primary hover:bg-primary/20",
                    children: "✓ NSEC Garia",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const Q2 = () => {
    const n = so();
    return (
      S.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          n.pathname
        );
      }, [n.pathname]),
      f.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: f.jsxs("div", {
          className: "text-center",
          children: [
            f.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            f.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            f.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  K2 = new u1(),
  G2 = () =>
    f.jsx(d1, {
      client: K2,
      children: f.jsxs(Fw, {
        children: [
          f.jsx(E0, {}),
          f.jsx(ex, {}),
          f.jsx(c2, {
            children: f.jsxs("div", {
              className: "min-h-screen bg-background",
              children: [
                f.jsx(m2, {}),
                f.jsxs(r2, {
                  children: [
                    f.jsx(Cn, { path: "/", element: f.jsx(w2, {}) }),
                    f.jsx(Cn, { path: "/marketplace", element: f.jsx(k2, {}) }),
                    f.jsx(Cn, { path: "/notes", element: f.jsx(j2, {}) }),
                    f.jsx(Cn, {
                      path: "/accommodation",
                      element: f.jsx(R2, {}),
                    }),
                    f.jsx(Cn, { path: "/chat", element: f.jsx(pp, {}) }),
                    f.jsx(Cn, {
                      path: "/chat/:peerId",
                      element: f.jsx(pp, {}),
                    }),
                    f.jsx(Cn, { path: "/profile", element: f.jsx(W2, {}) }),
                    f.jsx(Cn, { path: "*", element: f.jsx(Q2, {}) }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
vv.createRoot(document.getElementById("root")).render(f.jsx(G2, {}));
