(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) u(r);
    new MutationObserver(r => {
        for (const p of r)
            if (p.type === "childList")
                for (const g of p.addedNodes) g.tagName === "LINK" && g.rel === "modulepreload" && u(g)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function o(r) {
        const p = {};
        return r.integrity && (p.integrity = r.integrity), r.referrerPolicy && (p.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? p.credentials = "include" : r.crossOrigin === "anonymous" ? p.credentials = "omit" : p.credentials = "same-origin", p
    }

    function u(r) {
        if (r.ep) return;
        r.ep = !0;
        const p = o(r);
        fetch(r.href, p)
    }
})();
var Uo = {
        exports: {}
    },
    Zl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wf;

function yh() {
    if (Wf) return Zl;
    Wf = 1;
    var c = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.fragment");

    function o(u, r, p) {
        var g = null;
        if (p !== void 0 && (g = "" + p), r.key !== void 0 && (g = "" + r.key), "key" in r) {
            p = {};
            for (var b in r) b !== "key" && (p[b] = r[b])
        } else p = r;
        return r = p.ref, {
            $$typeof: c,
            type: u,
            key: g,
            ref: r !== void 0 ? r : null,
            props: p
        }
    }
    return Zl.Fragment = n, Zl.jsx = o, Zl.jsxs = o, Zl
}
var If;

function Sh() {
    return If || (If = 1, Uo.exports = yh()), Uo.exports
}
var d = Sh(),
    ko = {
        exports: {}
    },
    ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp;

function jh() {
    if (tp) return ot;
    tp = 1;
    var c = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        r = Symbol.for("react.profiler"),
        p = Symbol.for("react.consumer"),
        g = Symbol.for("react.context"),
        b = Symbol.for("react.forward_ref"),
        v = Symbol.for("react.suspense"),
        h = Symbol.for("react.memo"),
        N = Symbol.for("react.lazy"),
        T = Symbol.iterator;

    function R(S) {
        return S === null || typeof S != "object" ? null : (S = T && S[T] || S["@@iterator"], typeof S == "function" ? S : null)
    }
    var z = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        D = Object.assign,
        H = {};

    function G(S, X, it) {
        this.props = S, this.context = X, this.refs = H, this.updater = it || z
    }
    G.prototype.isReactComponent = {}, G.prototype.setState = function(S, X) {
        if (typeof S != "object" && typeof S != "function" && S != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, X, "setState")
    }, G.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate")
    };

    function U() {}
    U.prototype = G.prototype;

    function k(S, X, it) {
        this.props = S, this.context = X, this.refs = H, this.updater = it || z
    }
    var w = k.prototype = new U;
    w.constructor = k, D(w, G.prototype), w.isPureReactComponent = !0;
    var K = Array.isArray,
        Z = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        _ = Object.prototype.hasOwnProperty;

    function B(S, X, it, et, $, mt) {
        return it = mt.ref, {
            $$typeof: c,
            type: S,
            key: X,
            ref: it !== void 0 ? it : null,
            props: mt
        }
    }

    function I(S, X) {
        return B(S.type, X, void 0, void 0, void 0, S.props)
    }

    function V(S) {
        return typeof S == "object" && S !== null && S.$$typeof === c
    }

    function tt(S) {
        var X = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + S.replace(/[=:]/g, function(it) {
            return X[it]
        })
    }
    var zt = /\/+/g;

    function Q(S, X) {
        return typeof S == "object" && S !== null && S.key != null ? tt("" + S.key) : X.toString(36)
    }

    function Nt() {}

    function le(S) {
        switch (S.status) {
            case "fulfilled":
                return S.value;
            case "rejected":
                throw S.reason;
            default:
                switch (typeof S.status == "string" ? S.then(Nt, Nt) : (S.status = "pending", S.then(function(X) {
                    S.status === "pending" && (S.status = "fulfilled", S.value = X)
                }, function(X) {
                    S.status === "pending" && (S.status = "rejected", S.reason = X)
                })), S.status) {
                    case "fulfilled":
                        return S.value;
                    case "rejected":
                        throw S.reason
                }
        }
        throw S
    }

    function Zt(S, X, it, et, $) {
        var mt = typeof S;
        (mt === "undefined" || mt === "boolean") && (S = null);
        var ut = !1;
        if (S === null) ut = !0;
        else switch (mt) {
            case "bigint":
            case "string":
            case "number":
                ut = !0;
                break;
            case "object":
                switch (S.$$typeof) {
                    case c:
                    case n:
                        ut = !0;
                        break;
                    case N:
                        return ut = S._init, Zt(ut(S._payload), X, it, et, $)
                }
        }
        if (ut) return $ = $(S), ut = et === "" ? "." + Q(S, 0) : et, K($) ? (it = "", ut != null && (it = ut.replace(zt, "$&/") + "/"), Zt($, X, it, "", function(Ut) {
            return Ut
        })) : $ != null && (V($) && ($ = I($, it + ($.key == null || S && S.key === $.key ? "" : ("" + $.key).replace(zt, "$&/") + "/") + ut)), X.push($)), 1;
        ut = 0;
        var te = et === "" ? "." : et + ":";
        if (K(S))
            for (var bt = 0; bt < S.length; bt++) et = S[bt], mt = te + Q(et, bt), ut += Zt(et, X, it, mt, $);
        else if (bt = R(S), typeof bt == "function")
            for (S = bt.call(S), bt = 0; !(et = S.next()).done;) et = et.value, mt = te + Q(et, bt++), ut += Zt(et, X, it, mt, $);
        else if (mt === "object") {
            if (typeof S.then == "function") return Zt(le(S), X, it, et, $);
            throw X = String(S), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ut
    }

    function J(S, X, it) {
        if (S == null) return S;
        var et = [],
            $ = 0;
        return Zt(S, et, "", "", function(mt) {
            return X.call(it, mt, $++)
        }), et
    }

    function st(S) {
        if (S._status === -1) {
            var X = S._result;
            X = X(), X.then(function(it) {
                (S._status === 0 || S._status === -1) && (S._status = 1, S._result = it)
            }, function(it) {
                (S._status === 0 || S._status === -1) && (S._status = 2, S._result = it)
            }), S._status === -1 && (S._status = 0, S._result = X)
        }
        if (S._status === 1) return S._result.default;
        throw S._result
    }
    var lt = typeof reportError == "function" ? reportError : function(S) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var X = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
                error: S
            });
            if (!window.dispatchEvent(X)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", S);
            return
        }
        console.error(S)
    };

    function At() {}
    return ot.Children = {
        map: J,
        forEach: function(S, X, it) {
            J(S, function() {
                X.apply(this, arguments)
            }, it)
        },
        count: function(S) {
            var X = 0;
            return J(S, function() {
                X++
            }), X
        },
        toArray: function(S) {
            return J(S, function(X) {
                return X
            }) || []
        },
        only: function(S) {
            if (!V(S)) throw Error("React.Children.only expected to receive a single React element child.");
            return S
        }
    }, ot.Component = G, ot.Fragment = o, ot.Profiler = r, ot.PureComponent = k, ot.StrictMode = u, ot.Suspense = v, ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, ot.act = function() {
        throw Error("act(...) is not supported in production builds of React.")
    }, ot.cache = function(S) {
        return function() {
            return S.apply(null, arguments)
        }
    }, ot.cloneElement = function(S, X, it) {
        if (S == null) throw Error("The argument must be a React element, but you passed " + S + ".");
        var et = D({}, S.props),
            $ = S.key,
            mt = void 0;
        if (X != null)
            for (ut in X.ref !== void 0 && (mt = void 0), X.key !== void 0 && ($ = "" + X.key), X) !_.call(X, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && X.ref === void 0 || (et[ut] = X[ut]);
        var ut = arguments.length - 2;
        if (ut === 1) et.children = it;
        else if (1 < ut) {
            for (var te = Array(ut), bt = 0; bt < ut; bt++) te[bt] = arguments[bt + 2];
            et.children = te
        }
        return B(S.type, $, void 0, void 0, mt, et)
    }, ot.createContext = function(S) {
        return S = {
            $$typeof: g,
            _currentValue: S,
            _currentValue2: S,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, S.Provider = S, S.Consumer = {
            $$typeof: p,
            _context: S
        }, S
    }, ot.createElement = function(S, X, it) {
        var et, $ = {},
            mt = null;
        if (X != null)
            for (et in X.key !== void 0 && (mt = "" + X.key), X) _.call(X, et) && et !== "key" && et !== "__self" && et !== "__source" && ($[et] = X[et]);
        var ut = arguments.length - 2;
        if (ut === 1) $.children = it;
        else if (1 < ut) {
            for (var te = Array(ut), bt = 0; bt < ut; bt++) te[bt] = arguments[bt + 2];
            $.children = te
        }
        if (S && S.defaultProps)
            for (et in ut = S.defaultProps, ut) $[et] === void 0 && ($[et] = ut[et]);
        return B(S, mt, void 0, void 0, null, $)
    }, ot.createRef = function() {
        return {
            current: null
        }
    }, ot.forwardRef = function(S) {
        return {
            $$typeof: b,
            render: S
        }
    }, ot.isValidElement = V, ot.lazy = function(S) {
        return {
            $$typeof: N,
            _payload: {
                _status: -1,
                _result: S
            },
            _init: st
        }
    }, ot.memo = function(S, X) {
        return {
            $$typeof: h,
            type: S,
            compare: X === void 0 ? null : X
        }
    }, ot.startTransition = function(S) {
        var X = Z.T,
            it = {};
        Z.T = it;
        try {
            var et = S(),
                $ = Z.S;
            $ !== null && $(it, et), typeof et == "object" && et !== null && typeof et.then == "function" && et.then(At, lt)
        } catch (mt) {
            lt(mt)
        } finally {
            Z.T = X
        }
    }, ot.unstable_useCacheRefresh = function() {
        return Z.H.useCacheRefresh()
    }, ot.use = function(S) {
        return Z.H.use(S)
    }, ot.useActionState = function(S, X, it) {
        return Z.H.useActionState(S, X, it)
    }, ot.useCallback = function(S, X) {
        return Z.H.useCallback(S, X)
    }, ot.useContext = function(S) {
        return Z.H.useContext(S)
    }, ot.useDebugValue = function() {}, ot.useDeferredValue = function(S, X) {
        return Z.H.useDeferredValue(S, X)
    }, ot.useEffect = function(S, X) {
        return Z.H.useEffect(S, X)
    }, ot.useId = function() {
        return Z.H.useId()
    }, ot.useImperativeHandle = function(S, X, it) {
        return Z.H.useImperativeHandle(S, X, it)
    }, ot.useInsertionEffect = function(S, X) {
        return Z.H.useInsertionEffect(S, X)
    }, ot.useLayoutEffect = function(S, X) {
        return Z.H.useLayoutEffect(S, X)
    }, ot.useMemo = function(S, X) {
        return Z.H.useMemo(S, X)
    }, ot.useOptimistic = function(S, X) {
        return Z.H.useOptimistic(S, X)
    }, ot.useReducer = function(S, X, it) {
        return Z.H.useReducer(S, X, it)
    }, ot.useRef = function(S) {
        return Z.H.useRef(S)
    }, ot.useState = function(S) {
        return Z.H.useState(S)
    }, ot.useSyncExternalStore = function(S, X, it) {
        return Z.H.useSyncExternalStore(S, X, it)
    }, ot.useTransition = function() {
        return Z.H.useTransition()
    }, ot.version = "19.0.0", ot
}
var ep;

function Fo() {
    return ep || (ep = 1, ko.exports = jh()), ko.exports
}
var y = Fo(),
    qo = {
        exports: {}
    },
    Kl = {},
    Ho = {
        exports: {}
    },
    Bo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap;

function Nh() {
    return ap || (ap = 1, function(c) {
        function n(J, st) {
            var lt = J.length;
            J.push(st);
            t: for (; 0 < lt;) {
                var At = lt - 1 >>> 1,
                    S = J[At];
                if (0 < r(S, st)) J[At] = st, J[lt] = S, lt = At;
                else break t
            }
        }

        function o(J) {
            return J.length === 0 ? null : J[0]
        }

        function u(J) {
            if (J.length === 0) return null;
            var st = J[0],
                lt = J.pop();
            if (lt !== st) {
                J[0] = lt;
                t: for (var At = 0, S = J.length, X = S >>> 1; At < X;) {
                    var it = 2 * (At + 1) - 1,
                        et = J[it],
                        $ = it + 1,
                        mt = J[$];
                    if (0 > r(et, lt)) $ < S && 0 > r(mt, et) ? (J[At] = mt, J[$] = lt, At = $) : (J[At] = et, J[it] = lt, At = it);
                    else if ($ < S && 0 > r(mt, lt)) J[At] = mt, J[$] = lt, At = $;
                    else break t
                }
            }
            return st
        }

        function r(J, st) {
            var lt = J.sortIndex - st.sortIndex;
            return lt !== 0 ? lt : J.id - st.id
        }
        if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var p = performance;
            c.unstable_now = function() {
                return p.now()
            }
        } else {
            var g = Date,
                b = g.now();
            c.unstable_now = function() {
                return g.now() - b
            }
        }
        var v = [],
            h = [],
            N = 1,
            T = null,
            R = 3,
            z = !1,
            D = !1,
            H = !1,
            G = typeof setTimeout == "function" ? setTimeout : null,
            U = typeof clearTimeout == "function" ? clearTimeout : null,
            k = typeof setImmediate < "u" ? setImmediate : null;

        function w(J) {
            for (var st = o(h); st !== null;) {
                if (st.callback === null) u(h);
                else if (st.startTime <= J) u(h), st.sortIndex = st.expirationTime, n(v, st);
                else break;
                st = o(h)
            }
        }

        function K(J) {
            if (H = !1, w(J), !D)
                if (o(v) !== null) D = !0, le();
                else {
                    var st = o(h);
                    st !== null && Zt(K, st.startTime - J)
                }
        }
        var Z = !1,
            _ = -1,
            B = 5,
            I = -1;

        function V() {
            return !(c.unstable_now() - I < B)
        }

        function tt() {
            if (Z) {
                var J = c.unstable_now();
                I = J;
                var st = !0;
                try {
                    t: {
                        D = !1,
                        H && (H = !1, U(_), _ = -1),
                        z = !0;
                        var lt = R;
                        try {
                            e: {
                                for (w(J), T = o(v); T !== null && !(T.expirationTime > J && V());) {
                                    var At = T.callback;
                                    if (typeof At == "function") {
                                        T.callback = null, R = T.priorityLevel;
                                        var S = At(T.expirationTime <= J);
                                        if (J = c.unstable_now(), typeof S == "function") {
                                            T.callback = S, w(J), st = !0;
                                            break e
                                        }
                                        T === o(v) && u(v), w(J)
                                    } else u(v);
                                    T = o(v)
                                }
                                if (T !== null) st = !0;
                                else {
                                    var X = o(h);
                                    X !== null && Zt(K, X.startTime - J), st = !1
                                }
                            }
                            break t
                        }
                        finally {
                            T = null, R = lt, z = !1
                        }
                        st = void 0
                    }
                }
                finally {
                    st ? zt() : Z = !1
                }
            }
        }
        var zt;
        if (typeof k == "function") zt = function() {
            k(tt)
        };
        else if (typeof MessageChannel < "u") {
            var Q = new MessageChannel,
                Nt = Q.port2;
            Q.port1.onmessage = tt, zt = function() {
                Nt.postMessage(null)
            }
        } else zt = function() {
            G(tt, 0)
        };

        function le() {
            Z || (Z = !0, zt())
        }

        function Zt(J, st) {
            _ = G(function() {
                J(c.unstable_now())
            }, st)
        }
        c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(J) {
            J.callback = null
        }, c.unstable_continueExecution = function() {
            D || z || (D = !0, le())
        }, c.unstable_forceFrameRate = function(J) {
            0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < J ? Math.floor(1e3 / J) : 5
        }, c.unstable_getCurrentPriorityLevel = function() {
            return R
        }, c.unstable_getFirstCallbackNode = function() {
            return o(v)
        }, c.unstable_next = function(J) {
            switch (R) {
                case 1:
                case 2:
                case 3:
                    var st = 3;
                    break;
                default:
                    st = R
            }
            var lt = R;
            R = st;
            try {
                return J()
            } finally {
                R = lt
            }
        }, c.unstable_pauseExecution = function() {}, c.unstable_requestPaint = function() {}, c.unstable_runWithPriority = function(J, st) {
            switch (J) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    J = 3
            }
            var lt = R;
            R = J;
            try {
                return st()
            } finally {
                R = lt
            }
        }, c.unstable_scheduleCallback = function(J, st, lt) {
            var At = c.unstable_now();
            switch (typeof lt == "object" && lt !== null ? (lt = lt.delay, lt = typeof lt == "number" && 0 < lt ? At + lt : At) : lt = At, J) {
                case 1:
                    var S = -1;
                    break;
                case 2:
                    S = 250;
                    break;
                case 5:
                    S = 1073741823;
                    break;
                case 4:
                    S = 1e4;
                    break;
                default:
                    S = 5e3
            }
            return S = lt + S, J = {
                id: N++,
                callback: st,
                priorityLevel: J,
                startTime: lt,
                expirationTime: S,
                sortIndex: -1
            }, lt > At ? (J.sortIndex = lt, n(h, J), o(v) === null && J === o(h) && (H ? (U(_), _ = -1) : H = !0, Zt(K, lt - At))) : (J.sortIndex = S, n(v, J), D || z || (D = !0, le())), J
        }, c.unstable_shouldYield = V, c.unstable_wrapCallback = function(J) {
            var st = R;
            return function() {
                var lt = R;
                R = st;
                try {
                    return J.apply(this, arguments)
                } finally {
                    R = lt
                }
            }
        }
    }(Bo)), Bo
}
var ip;

function Ah() {
    return ip || (ip = 1, Ho.exports = Nh()), Ho.exports
}
var Yo = {
        exports: {}
    },
    Wt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp;

function wh() {
    if (lp) return Wt;
    lp = 1;
    var c = Fo();

    function n(v) {
        var h = "https://react.dev/errors/" + v;
        if (1 < arguments.length) {
            h += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var N = 2; N < arguments.length; N++) h += "&args[]=" + encodeURIComponent(arguments[N])
        }
        return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function o() {}
    var u = {
            d: {
                f: o,
                r: function() {
                    throw Error(n(522))
                },
                D: o,
                C: o,
                L: o,
                m: o,
                X: o,
                S: o,
                M: o
            },
            p: 0,
            findDOMNode: null
        },
        r = Symbol.for("react.portal");

    function p(v, h, N) {
        var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: r,
            key: T == null ? null : "" + T,
            children: v,
            containerInfo: h,
            implementation: N
        }
    }
    var g = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function b(v, h) {
        if (v === "font") return "";
        if (typeof h == "string") return h === "use-credentials" ? h : ""
    }
    return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, Wt.createPortal = function(v, h) {
        var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(n(299));
        return p(v, h, null, N)
    }, Wt.flushSync = function(v) {
        var h = g.T,
            N = u.p;
        try {
            if (g.T = null, u.p = 2, v) return v()
        } finally {
            g.T = h, u.p = N, u.d.f()
        }
    }, Wt.preconnect = function(v, h) {
        typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, u.d.C(v, h))
    }, Wt.prefetchDNS = function(v) {
        typeof v == "string" && u.d.D(v)
    }, Wt.preinit = function(v, h) {
        if (typeof v == "string" && h && typeof h.as == "string") {
            var N = h.as,
                T = b(N, h.crossOrigin),
                R = typeof h.integrity == "string" ? h.integrity : void 0,
                z = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
            N === "style" ? u.d.S(v, typeof h.precedence == "string" ? h.precedence : void 0, {
                crossOrigin: T,
                integrity: R,
                fetchPriority: z
            }) : N === "script" && u.d.X(v, {
                crossOrigin: T,
                integrity: R,
                fetchPriority: z,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0
            })
        }
    }, Wt.preinitModule = function(v, h) {
        if (typeof v == "string")
            if (typeof h == "object" && h !== null) {
                if (h.as == null || h.as === "script") {
                    var N = b(h.as, h.crossOrigin);
                    u.d.M(v, {
                        crossOrigin: N,
                        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                        nonce: typeof h.nonce == "string" ? h.nonce : void 0
                    })
                }
            } else h == null && u.d.M(v)
    }, Wt.preload = function(v, h) {
        if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
            var N = h.as,
                T = b(N, h.crossOrigin);
            u.d.L(v, N, {
                crossOrigin: T,
                integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0,
                type: typeof h.type == "string" ? h.type : void 0,
                fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
                referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
                imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
                imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
                media: typeof h.media == "string" ? h.media : void 0
            })
        }
    }, Wt.preloadModule = function(v, h) {
        if (typeof v == "string")
            if (h) {
                var N = b(h.as, h.crossOrigin);
                u.d.m(v, {
                    as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
                    crossOrigin: N,
                    integrity: typeof h.integrity == "string" ? h.integrity : void 0
                })
            } else u.d.m(v)
    }, Wt.requestFormReset = function(v) {
        u.d.r(v)
    }, Wt.unstable_batchedUpdates = function(v, h) {
        return v(h)
    }, Wt.useFormState = function(v, h, N) {
        return g.H.useFormState(v, h, N)
    }, Wt.useFormStatus = function() {
        return g.H.useHostTransitionStatus()
    }, Wt.version = "19.0.0", Wt
}
var sp;

function Eh() {
    if (sp) return Yo.exports;
    sp = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (n) {
            console.error(n)
        }
    }
    return c(), Yo.exports = wh(), Yo.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np;

function Th() {
    if (np) return Kl;
    np = 1;
    var c = Ah(),
        n = Fo(),
        o = Eh();

    function u(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) e += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function r(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    var p = Symbol.for("react.element"),
        g = Symbol.for("react.transitional.element"),
        b = Symbol.for("react.portal"),
        v = Symbol.for("react.fragment"),
        h = Symbol.for("react.strict_mode"),
        N = Symbol.for("react.profiler"),
        T = Symbol.for("react.provider"),
        R = Symbol.for("react.consumer"),
        z = Symbol.for("react.context"),
        D = Symbol.for("react.forward_ref"),
        H = Symbol.for("react.suspense"),
        G = Symbol.for("react.suspense_list"),
        U = Symbol.for("react.memo"),
        k = Symbol.for("react.lazy"),
        w = Symbol.for("react.offscreen"),
        K = Symbol.for("react.memo_cache_sentinel"),
        Z = Symbol.iterator;

    function _(t) {
        return t === null || typeof t != "object" ? null : (t = Z && t[Z] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var B = Symbol.for("react.client.reference");

    function I(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === B ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case v:
                return "Fragment";
            case b:
                return "Portal";
            case N:
                return "Profiler";
            case h:
                return "StrictMode";
            case H:
                return "Suspense";
            case G:
                return "SuspenseList"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case z:
                return (t.displayName || "Context") + ".Provider";
            case R:
                return (t._context.displayName || "Context") + ".Consumer";
            case D:
                var e = t.render;
                return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case U:
                return e = t.displayName || null, e !== null ? e : I(t.type) || "Memo";
            case k:
                e = t._payload, t = t._init;
                try {
                    return I(t(e))
                } catch {}
        }
        return null
    }
    var V = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        tt = Object.assign,
        zt, Q;

    function Nt(t) {
        if (zt === void 0) try {
            throw Error()
        } catch (a) {
            var e = a.stack.trim().match(/\n( *(at )?)/);
            zt = e && e[1] || "", Q = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + zt + t + Q
    }
    var le = !1;

    function Zt(t, e) {
        if (!t || le) return "";
        le = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var Y = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Y.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Y, [])
                                } catch (M) {
                                    var O = M
                                }
                                Reflect.construct(t, [], Y)
                            } else {
                                try {
                                    Y.call()
                                } catch (M) {
                                    O = M
                                }
                                t.call(Y.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (M) {
                                O = M
                            }(Y = t()) && typeof Y.catch == "function" && Y.catch(function() {})
                        }
                    } catch (M) {
                        if (M && O && typeof M.stack == "string") return [M.stack, O.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var l = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            l && l.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var s = i.DetermineComponentFrameRoot(),
                f = s[0],
                m = s[1];
            if (f && m) {
                var x = f.split(`
`),
                    A = m.split(`
`);
                for (l = i = 0; i < x.length && !x[i].includes("DetermineComponentFrameRoot");) i++;
                for (; l < A.length && !A[l].includes("DetermineComponentFrameRoot");) l++;
                if (i === x.length || l === A.length)
                    for (i = x.length - 1, l = A.length - 1; 1 <= i && 0 <= l && x[i] !== A[l];) l--;
                for (; 1 <= i && 0 <= l; i--, l--)
                    if (x[i] !== A[l]) {
                        if (i !== 1 || l !== 1)
                            do
                                if (i--, l--, 0 > l || x[i] !== A[l]) {
                                    var L = `
` + x[i].replace(" at new ", " at ");
                                    return t.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", t.displayName)), L
                                }
                        while (1 <= i && 0 <= l);
                        break
                    }
            }
        } finally {
            le = !1, Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? Nt(a) : ""
    }

    function J(t) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Nt(t.type);
            case 16:
                return Nt("Lazy");
            case 13:
                return Nt("Suspense");
            case 19:
                return Nt("SuspenseList");
            case 0:
            case 15:
                return t = Zt(t.type, !1), t;
            case 11:
                return t = Zt(t.type.render, !1), t;
            case 1:
                return t = Zt(t.type, !0), t;
            default:
                return ""
        }
    }

    function st(t) {
        try {
            var e = "";
            do e += J(t), t = t.return; while (t);
            return e
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }

    function lt(t) {
        var e = t,
            a = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            t = e;
            do e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return; while (t)
        }
        return e.tag === 3 ? a : null
    }

    function At(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function S(t) {
        if (lt(t) !== t) throw Error(u(188))
    }

    function X(t) {
        var e = t.alternate;
        if (!e) {
            if (e = lt(t), e === null) throw Error(u(188));
            return e !== t ? null : t
        }
        for (var a = t, i = e;;) {
            var l = a.return;
            if (l === null) break;
            var s = l.alternate;
            if (s === null) {
                if (i = l.return, i !== null) {
                    a = i;
                    continue
                }
                break
            }
            if (l.child === s.child) {
                for (s = l.child; s;) {
                    if (s === a) return S(l), t;
                    if (s === i) return S(l), e;
                    s = s.sibling
                }
                throw Error(u(188))
            }
            if (a.return !== i.return) a = l, i = s;
            else {
                for (var f = !1, m = l.child; m;) {
                    if (m === a) {
                        f = !0, a = l, i = s;
                        break
                    }
                    if (m === i) {
                        f = !0, i = l, a = s;
                        break
                    }
                    m = m.sibling
                }
                if (!f) {
                    for (m = s.child; m;) {
                        if (m === a) {
                            f = !0, a = s, i = l;
                            break
                        }
                        if (m === i) {
                            f = !0, i = s, a = l;
                            break
                        }
                        m = m.sibling
                    }
                    if (!f) throw Error(u(189))
                }
            }
            if (a.alternate !== i) throw Error(u(190))
        }
        if (a.tag !== 3) throw Error(u(188));
        return a.stateNode.current === a ? t : e
    }

    function it(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null;) {
            if (e = it(t), e !== null) return e;
            t = t.sibling
        }
        return null
    }
    var et = Array.isArray,
        $ = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        mt = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ut = [],
        te = -1;

    function bt(t) {
        return {
            current: t
        }
    }

    function Ut(t) {
        0 > te || (t.current = ut[te], ut[te] = null, te--)
    }

    function Tt(t, e) {
        te++, ut[te] = t.current, t.current = e
    }
    var Le = bt(null),
        $i = bt(null),
        ca = bt(null),
        es = bt(null);

    function as(t, e) {
        switch (Tt(ca, e), Tt($i, t), Tt(Le, null), t = e.nodeType, t) {
            case 9:
            case 11:
                e = (e = e.documentElement) && (e = e.namespaceURI) ? Tf(e) : 0;
                break;
            default:
                if (t = t === 8 ? e.parentNode : e, e = t.tagName, t = t.namespaceURI) t = Tf(t), e = Rf(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        Ut(Le), Tt(Le, e)
    }

    function li() {
        Ut(Le), Ut($i), Ut(ca)
    }

    function En(t) {
        t.memoizedState !== null && Tt(es, t);
        var e = Le.current,
            a = Rf(e, t.type);
        e !== a && (Tt($i, t), Tt(Le, a))
    }

    function is(t) {
        $i.current === t && (Ut(Le), Ut($i)), es.current === t && (Ut(es), Yl._currentValue = mt)
    }
    var Tn = Object.prototype.hasOwnProperty,
        Rn = c.unstable_scheduleCallback,
        Cn = c.unstable_cancelCallback,
        Wp = c.unstable_shouldYield,
        Ip = c.unstable_requestPaint,
        Ue = c.unstable_now,
        tm = c.unstable_getCurrentPriorityLevel,
        vu = c.unstable_ImmediatePriority,
        hu = c.unstable_UserBlockingPriority,
        ls = c.unstable_NormalPriority,
        em = c.unstable_LowPriority,
        gu = c.unstable_IdlePriority,
        am = c.log,
        im = c.unstable_setDisableYieldValue,
        Fi = null,
        oe = null;

    function lm(t) {
        if (oe && typeof oe.onCommitFiberRoot == "function") try {
            oe.onCommitFiberRoot(Fi, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
    }

    function ra(t) {
        if (typeof am == "function" && im(t), oe && typeof oe.setStrictMode == "function") try {
            oe.setStrictMode(Fi, t)
        } catch {}
    }
    var ue = Math.clz32 ? Math.clz32 : dm,
        sm = Math.log,
        nm = Math.LN2;

    function dm(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (sm(t) / nm | 0) | 0
    }
    var ss = 128,
        ns = 4194304;

    function Ua(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
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
                return 64;
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
                return t & 4194176;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function ds(t, e) {
        var a = t.pendingLanes;
        if (a === 0) return 0;
        var i = 0,
            l = t.suspendedLanes,
            s = t.pingedLanes,
            f = t.warmLanes;
        t = t.finishedLanes !== 0;
        var m = a & 134217727;
        return m !== 0 ? (a = m & ~l, a !== 0 ? i = Ua(a) : (s &= m, s !== 0 ? i = Ua(s) : t || (f = m & ~f, f !== 0 && (i = Ua(f))))) : (m = a & ~l, m !== 0 ? i = Ua(m) : s !== 0 ? i = Ua(s) : t || (f = a & ~f, f !== 0 && (i = Ua(f)))), i === 0 ? 0 : e !== 0 && e !== i && (e & l) === 0 && (l = i & -i, f = e & -e, l >= f || l === 32 && (f & 4194176) !== 0) ? e : i
    }

    function Pi(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }

    function om(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
                return e + 250;
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
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function bu() {
        var t = ss;
        return ss <<= 1, (ss & 4194176) === 0 && (ss = 128), t
    }

    function xu() {
        var t = ns;
        return ns <<= 1, (ns & 62914560) === 0 && (ns = 4194304), t
    }

    function On(t) {
        for (var e = [], a = 0; 31 > a; a++) e.push(t);
        return e
    }

    function Wi(t, e) {
        t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function um(t, e, a, i, l, s) {
        var f = t.pendingLanes;
        t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
        var m = t.entanglements,
            x = t.expirationTimes,
            A = t.hiddenUpdates;
        for (a = f & ~a; 0 < a;) {
            var L = 31 - ue(a),
                Y = 1 << L;
            m[L] = 0, x[L] = -1;
            var O = A[L];
            if (O !== null)
                for (A[L] = null, L = 0; L < O.length; L++) {
                    var M = O[L];
                    M !== null && (M.lane &= -536870913)
                }
            a &= ~Y
        }
        i !== 0 && yu(t, i, 0), s !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(f & ~e))
    }

    function yu(t, e, a) {
        t.pendingLanes |= e, t.suspendedLanes &= ~e;
        var i = 31 - ue(e);
        t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | a & 4194218
    }

    function Su(t, e) {
        var a = t.entangledLanes |= e;
        for (t = t.entanglements; a;) {
            var i = 31 - ue(a),
                l = 1 << i;
            l & e | t[i] & e && (t[i] |= e), a &= ~l
        }
    }

    function ju(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Nu() {
        var t = $.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Zf(t.type))
    }

    function cm(t, e) {
        var a = $.p;
        try {
            return $.p = t, e()
        } finally {
            $.p = a
        }
    }
    var fa = Math.random().toString(36).slice(2),
        Ft = "__reactFiber$" + fa,
        se = "__reactProps$" + fa,
        si = "__reactContainer$" + fa,
        Dn = "__reactEvents$" + fa,
        rm = "__reactListeners$" + fa,
        fm = "__reactHandles$" + fa,
        Au = "__reactResources$" + fa,
        Ii = "__reactMarker$" + fa;

    function _n(t) {
        delete t[Ft], delete t[se], delete t[Dn], delete t[rm], delete t[fm]
    }

    function ka(t) {
        var e = t[Ft];
        if (e) return e;
        for (var a = t.parentNode; a;) {
            if (e = a[si] || a[Ft]) {
                if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
                    for (t = Df(t); t !== null;) {
                        if (a = t[Ft]) return a;
                        t = Df(t)
                    }
                return e
            }
            t = a, a = t.parentNode
        }
        return null
    }

    function ni(t) {
        if (t = t[Ft] || t[si]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t
        }
        return null
    }

    function tl(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(u(33))
    }

    function di(t) {
        var e = t[Au];
        return e || (e = t[Au] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), e
    }

    function Gt(t) {
        t[Ii] = !0
    }
    var wu = new Set,
        Eu = {};

    function qa(t, e) {
        oi(t, e), oi(t + "Capture", e)
    }

    function oi(t, e) {
        for (Eu[t] = e, t = 0; t < e.length; t++) wu.add(e[t])
    }
    var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        pm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Tu = {},
        Ru = {};

    function mm(t) {
        return Tn.call(Ru, t) ? !0 : Tn.call(Tu, t) ? !1 : pm.test(t) ? Ru[t] = !0 : (Tu[t] = !0, !1)
    }

    function os(t, e, a) {
        if (mm(e))
            if (a === null) t.removeAttribute(e);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var i = e.toLowerCase().slice(0, 5);
                        if (i !== "data-" && i !== "aria-") {
                            t.removeAttribute(e);
                            return
                        }
                }
                t.setAttribute(e, "" + a)
            }
    }

    function us(t, e, a) {
        if (a === null) t.removeAttribute(e);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return
            }
            t.setAttribute(e, "" + a)
        }
    }

    function Qe(t, e, a, i) {
        if (i === null) t.removeAttribute(a);
        else {
            switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(a);
                    return
            }
            t.setAttributeNS(e, a, "" + i)
        }
    }

    function ve(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function Cu(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }

    function vm(t) {
        var e = Cu(t) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            i = "" + t[e];
        if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var l = a.get,
                s = a.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(f) {
                    i = "" + f, s.call(this, f)
                }
            }), Object.defineProperty(t, e, {
                enumerable: a.enumerable
            }), {
                getValue: function() {
                    return i
                },
                setValue: function(f) {
                    i = "" + f
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[e]
                }
            }
        }
    }

    function cs(t) {
        t._valueTracker || (t._valueTracker = vm(t))
    }

    function Ou(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var a = e.getValue(),
            i = "";
        return t && (i = Cu(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== a ? (e.setValue(t), !0) : !1
    }

    function rs(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var hm = /[\n"\\]/g;

    function he(t) {
        return t.replace(hm, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function Mn(t, e, a, i, l, s, f, m) {
        t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ve(e)) : t.value !== "" + ve(e) && (t.value = "" + ve(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? zn(t, f, ve(e)) : a != null ? zn(t, f, ve(a)) : i != null && t.removeAttribute("value"), l == null && s != null && (t.defaultChecked = !!s), l != null && (t.checked = l && typeof l != "function" && typeof l != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + ve(m) : t.removeAttribute("name")
    }

    function Du(t, e, a, i, l, s, f, m) {
        if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || a != null) {
            if (!(s !== "submit" && s !== "reset" || e != null)) return;
            a = a != null ? "" + ve(a) : "", e = e != null ? "" + ve(e) : a, m || e === t.value || (t.value = e), t.defaultValue = e
        }
        i = i ?? l, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = m ? t.checked : !!i, t.defaultChecked = !!i, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f)
    }

    function zn(t, e, a) {
        e === "number" && rs(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }

    function ui(t, e, a, i) {
        if (t = t.options, e) {
            e = {};
            for (var l = 0; l < a.length; l++) e["$" + a[l]] = !0;
            for (a = 0; a < t.length; a++) l = e.hasOwnProperty("$" + t[a].value), t[a].selected !== l && (t[a].selected = l), l && i && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + ve(a), e = null, l = 0; l < t.length; l++) {
                if (t[l].value === a) {
                    t[l].selected = !0, i && (t[l].defaultSelected = !0);
                    return
                }
                e !== null || t[l].disabled || (e = t[l])
            }
            e !== null && (e.selected = !0)
        }
    }

    function _u(t, e, a) {
        if (e != null && (e = "" + ve(e), e !== t.value && (t.value = e), a == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = a != null ? "" + ve(a) : ""
    }

    function Mu(t, e, a, i) {
        if (e == null) {
            if (i != null) {
                if (a != null) throw Error(u(92));
                if (et(i)) {
                    if (1 < i.length) throw Error(u(93));
                    i = i[0]
                }
                a = i
            }
            a == null && (a = ""), e = a
        }
        a = ve(e), t.defaultValue = a, i = t.textContent, i === a && i !== "" && i !== null && (t.value = i)
    }

    function ci(t, e) {
        if (e) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var gm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function zu(t, e, a) {
        var i = e.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, a) : typeof a != "number" || a === 0 || gm.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px"
    }

    function Lu(t, e, a) {
        if (e != null && typeof e != "object") throw Error(u(62));
        if (t = t.style, a != null) {
            for (var i in a) !a.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
            for (var l in e) i = e[l], e.hasOwnProperty(l) && a[l] !== i && zu(t, l, i)
        } else
            for (var s in e) e.hasOwnProperty(s) && zu(t, s, e[s])
    }

    function Ln(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
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
                return !0
        }
    }
    var bm = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        xm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function fs(t) {
        return xm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var Un = null;

    function kn(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var ri = null,
        fi = null;

    function Uu(t) {
        var e = ni(t);
        if (e && (t = e.stateNode)) {
            var a = t[se] || null;
            t: switch (t = e.stateNode, e.type) {
                case "input":
                    if (Mn(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), e = a.name, a.type === "radio" && e != null) {
                        for (a = t; a.parentNode;) a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + he("" + e) + '"][type="radio"]'), e = 0; e < a.length; e++) {
                            var i = a[e];
                            if (i !== t && i.form === t.form) {
                                var l = i[se] || null;
                                if (!l) throw Error(u(90));
                                Mn(i, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name)
                            }
                        }
                        for (e = 0; e < a.length; e++) i = a[e], i.form === t.form && Ou(i)
                    }
                    break t;
                case "textarea":
                    _u(t, a.value, a.defaultValue);
                    break t;
                case "select":
                    e = a.value, e != null && ui(t, !!a.multiple, e, !1)
            }
        }
    }
    var qn = !1;

    function ku(t, e, a) {
        if (qn) return t(e, a);
        qn = !0;
        try {
            var i = t(e);
            return i
        } finally {
            if (qn = !1, (ri !== null || fi !== null) && ($s(), ri && (e = ri, t = fi, fi = ri = null, Uu(e), t)))
                for (e = 0; e < t.length; e++) Uu(t[e])
        }
    }

    function el(t, e) {
        var a = t.stateNode;
        if (a === null) return null;
        var i = a[se] || null;
        if (i === null) return null;
        a = i[e];
        t: switch (e) {
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
                (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (a && typeof a != "function") throw Error(u(231, e, typeof a));
        return a
    }
    var Hn = !1;
    if (Xe) try {
        var al = {};
        Object.defineProperty(al, "passive", {
            get: function() {
                Hn = !0
            }
        }), window.addEventListener("test", al, al), window.removeEventListener("test", al, al)
    } catch {
        Hn = !1
    }
    var pa = null,
        Bn = null,
        ps = null;

    function qu() {
        if (ps) return ps;
        var t, e = Bn,
            a = e.length,
            i, l = "value" in pa ? pa.value : pa.textContent,
            s = l.length;
        for (t = 0; t < a && e[t] === l[t]; t++);
        var f = a - t;
        for (i = 1; i <= f && e[a - i] === l[s - i]; i++);
        return ps = l.slice(t, 1 < i ? 1 - i : void 0)
    }

    function ms(t) {
        var e = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function vs() {
        return !0
    }

    function Hu() {
        return !1
    }

    function ne(t) {
        function e(a, i, l, s, f) {
            this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
            for (var m in t) t.hasOwnProperty(m) && (a = t[m], this[m] = a ? a(s) : s[m]);
            return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? vs : Hu, this.isPropagationStopped = Hu, this
        }
        return tt(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vs)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vs)
            },
            persist: function() {},
            isPersistent: vs
        }), e
    }
    var Ha = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        hs = ne(Ha),
        il = tt({}, Ha, {
            view: 0,
            detail: 0
        }),
        ym = ne(il),
        Yn, Gn, ll, gs = tt({}, il, {
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
            getModifierState: Qn,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== ll && (ll && t.type === "mousemove" ? (Yn = t.screenX - ll.screenX, Gn = t.screenY - ll.screenY) : Gn = Yn = 0, ll = t), Yn)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : Gn
            }
        }),
        Bu = ne(gs),
        Sm = tt({}, gs, {
            dataTransfer: 0
        }),
        jm = ne(Sm),
        Nm = tt({}, il, {
            relatedTarget: 0
        }),
        Xn = ne(Nm),
        Am = tt({}, Ha, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        wm = ne(Am),
        Em = tt({}, Ha, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        Tm = ne(Em),
        Rm = tt({}, Ha, {
            data: 0
        }),
        Yu = ne(Rm),
        Cm = {
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
            MozPrintableKey: "Unidentified"
        },
        Om = {
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
            224: "Meta"
        },
        Dm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function _m(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = Dm[t]) ? !!e[t] : !1
    }

    function Qn() {
        return _m
    }
    var Mm = tt({}, il, {
            key: function(t) {
                if (t.key) {
                    var e = Cm[t.key] || t.key;
                    if (e !== "Unidentified") return e
                }
                return t.type === "keypress" ? (t = ms(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Om[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Qn,
            charCode: function(t) {
                return t.type === "keypress" ? ms(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? ms(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        zm = ne(Mm),
        Lm = tt({}, gs, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Gu = ne(Lm),
        Um = tt({}, il, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Qn
        }),
        km = ne(Um),
        qm = tt({}, Ha, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Hm = ne(qm),
        Bm = tt({}, gs, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Ym = ne(Bm),
        Gm = tt({}, Ha, {
            newState: 0,
            oldState: 0
        }),
        Xm = ne(Gm),
        Qm = [9, 13, 27, 32],
        Vn = Xe && "CompositionEvent" in window,
        sl = null;
    Xe && "documentMode" in document && (sl = document.documentMode);
    var Vm = Xe && "TextEvent" in window && !sl,
        Xu = Xe && (!Vn || sl && 8 < sl && 11 >= sl),
        Qu = " ",
        Vu = !1;

    function Zu(t, e) {
        switch (t) {
            case "keyup":
                return Qm.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Ku(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var pi = !1;

    function Zm(t, e) {
        switch (t) {
            case "compositionend":
                return Ku(e);
            case "keypress":
                return e.which !== 32 ? null : (Vu = !0, Qu);
            case "textInput":
                return t = e.data, t === Qu && Vu ? null : t;
            default:
                return null
        }
    }

    function Km(t, e) {
        if (pi) return t === "compositionend" || !Vn && Zu(t, e) ? (t = qu(), ps = Bn = pa = null, pi = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "compositionend":
                return Xu && e.locale !== "ko" ? null : e.data;
            default:
                return null
        }
    }
    var Jm = {
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
        week: !0
    };

    function Ju(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!Jm[t.type] : e === "textarea"
    }

    function $u(t, e, a, i) {
        ri ? fi ? fi.push(i) : fi = [i] : ri = i, e = tn(e, "onChange"), 0 < e.length && (a = new hs("onChange", "change", null, a, i), t.push({
            event: a,
            listeners: e
        }))
    }
    var nl = null,
        dl = null;

    function $m(t) {
        jf(t, 0)
    }

    function bs(t) {
        var e = tl(t);
        if (Ou(e)) return t
    }

    function Fu(t, e) {
        if (t === "change") return e
    }
    var Pu = !1;
    if (Xe) {
        var Zn;
        if (Xe) {
            var Kn = "oninput" in document;
            if (!Kn) {
                var Wu = document.createElement("div");
                Wu.setAttribute("oninput", "return;"), Kn = typeof Wu.oninput == "function"
            }
            Zn = Kn
        } else Zn = !1;
        Pu = Zn && (!document.documentMode || 9 < document.documentMode)
    }

    function Iu() {
        nl && (nl.detachEvent("onpropertychange", tc), dl = nl = null)
    }

    function tc(t) {
        if (t.propertyName === "value" && bs(dl)) {
            var e = [];
            $u(e, dl, t, kn(t)), ku($m, e)
        }
    }

    function Fm(t, e, a) {
        t === "focusin" ? (Iu(), nl = e, dl = a, nl.attachEvent("onpropertychange", tc)) : t === "focusout" && Iu()
    }

    function Pm(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return bs(dl)
    }

    function Wm(t, e) {
        if (t === "click") return bs(e)
    }

    function Im(t, e) {
        if (t === "input" || t === "change") return bs(e)
    }

    function tv(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var ce = typeof Object.is == "function" ? Object.is : tv;

    function ol(t, e) {
        if (ce(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
        var a = Object.keys(t),
            i = Object.keys(e);
        if (a.length !== i.length) return !1;
        for (i = 0; i < a.length; i++) {
            var l = a[i];
            if (!Tn.call(e, l) || !ce(t[l], e[l])) return !1
        }
        return !0
    }

    function ec(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function ac(t, e) {
        var a = ec(t);
        t = 0;
        for (var i; a;) {
            if (a.nodeType === 3) {
                if (i = t + a.textContent.length, t <= e && i >= e) return {
                    node: a,
                    offset: e - t
                };
                t = i
            }
            t: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break t
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = ec(a)
        }
    }

    function ic(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? ic(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }

    function lc(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = rs(t.document); e instanceof t.HTMLIFrameElement;) {
            try {
                var a = typeof e.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) t = e.contentWindow;
            else break;
            e = rs(t.document)
        }
        return e
    }

    function Jn(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }

    function ev(t, e) {
        var a = lc(e);
        e = t.focusedElem;
        var i = t.selectionRange;
        if (a !== e && e && e.ownerDocument && ic(e.ownerDocument.documentElement, e)) {
            if (i !== null && Jn(e)) {
                if (t = i.start, a = i.end, a === void 0 && (a = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(a, e.value.length);
                else if (a = (t = e.ownerDocument || document) && t.defaultView || window, a.getSelection) {
                    a = a.getSelection();
                    var l = e.textContent.length,
                        s = Math.min(i.start, l);
                    i = i.end === void 0 ? s : Math.min(i.end, l), !a.extend && s > i && (l = i, i = s, s = l), l = ac(e, s);
                    var f = ac(e, i);
                    l && f && (a.rangeCount !== 1 || a.anchorNode !== l.node || a.anchorOffset !== l.offset || a.focusNode !== f.node || a.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), a.removeAllRanges(), s > i ? (a.addRange(t), a.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), a.addRange(t)))
                }
            }
            for (t = [], a = e; a = a.parentNode;) a.nodeType === 1 && t.push({
                element: a,
                left: a.scrollLeft,
                top: a.scrollTop
            });
            for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++) a = t[e], a.element.scrollLeft = a.left, a.element.scrollTop = a.top
        }
    }
    var av = Xe && "documentMode" in document && 11 >= document.documentMode,
        mi = null,
        $n = null,
        ul = null,
        Fn = !1;

    function sc(t, e, a) {
        var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Fn || mi == null || mi !== rs(i) || (i = mi, "selectionStart" in i && Jn(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }), ul && ol(ul, i) || (ul = i, i = tn($n, "onSelect"), 0 < i.length && (e = new hs("onSelect", "select", null, e, a), t.push({
            event: e,
            listeners: i
        }), e.target = mi)))
    }

    function Ba(t, e) {
        var a = {};
        return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a
    }
    var vi = {
            animationend: Ba("Animation", "AnimationEnd"),
            animationiteration: Ba("Animation", "AnimationIteration"),
            animationstart: Ba("Animation", "AnimationStart"),
            transitionrun: Ba("Transition", "TransitionRun"),
            transitionstart: Ba("Transition", "TransitionStart"),
            transitioncancel: Ba("Transition", "TransitionCancel"),
            transitionend: Ba("Transition", "TransitionEnd")
        },
        Pn = {},
        nc = {};
    Xe && (nc = document.createElement("div").style, "AnimationEvent" in window || (delete vi.animationend.animation, delete vi.animationiteration.animation, delete vi.animationstart.animation), "TransitionEvent" in window || delete vi.transitionend.transition);

    function Ya(t) {
        if (Pn[t]) return Pn[t];
        if (!vi[t]) return t;
        var e = vi[t],
            a;
        for (a in e)
            if (e.hasOwnProperty(a) && a in nc) return Pn[t] = e[a];
        return t
    }
    var dc = Ya("animationend"),
        oc = Ya("animationiteration"),
        uc = Ya("animationstart"),
        iv = Ya("transitionrun"),
        lv = Ya("transitionstart"),
        sv = Ya("transitioncancel"),
        cc = Ya("transitionend"),
        rc = new Map,
        fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");

    function Re(t, e) {
        rc.set(t, e), qa(e, [t])
    }
    var ge = [],
        hi = 0,
        Wn = 0;

    function xs() {
        for (var t = hi, e = Wn = hi = 0; e < t;) {
            var a = ge[e];
            ge[e++] = null;
            var i = ge[e];
            ge[e++] = null;
            var l = ge[e];
            ge[e++] = null;
            var s = ge[e];
            if (ge[e++] = null, i !== null && l !== null) {
                var f = i.pending;
                f === null ? l.next = l : (l.next = f.next, f.next = l), i.pending = l
            }
            s !== 0 && pc(a, l, s)
        }
    }

    function ys(t, e, a, i) {
        ge[hi++] = t, ge[hi++] = e, ge[hi++] = a, ge[hi++] = i, Wn |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i)
    }

    function In(t, e, a, i) {
        return ys(t, e, a, i), Ss(t)
    }

    function ma(t, e) {
        return ys(t, null, null, e), Ss(t)
    }

    function pc(t, e, a) {
        t.lanes |= a;
        var i = t.alternate;
        i !== null && (i.lanes |= a);
        for (var l = !1, s = t.return; s !== null;) s.childLanes |= a, i = s.alternate, i !== null && (i.childLanes |= a), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (l = !0)), t = s, s = s.return;
        l && e !== null && t.tag === 3 && (s = t.stateNode, l = 31 - ue(a), s = s.hiddenUpdates, t = s[l], t === null ? s[l] = [e] : t.push(e), e.lane = a | 536870912)
    }

    function Ss(t) {
        if (50 < zl) throw zl = 0, so = null, Error(u(185));
        for (var e = t.return; e !== null;) t = e, e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var gi = {},
        mc = new WeakMap;

    function be(t, e) {
        if (typeof t == "object" && t !== null) {
            var a = mc.get(t);
            return a !== void 0 ? a : (e = {
                value: t,
                source: e,
                stack: st(e)
            }, mc.set(t, e), e)
        }
        return {
            value: t,
            source: e,
            stack: st(e)
        }
    }
    var bi = [],
        xi = 0,
        js = null,
        Ns = 0,
        xe = [],
        ye = 0,
        Ga = null,
        Ve = 1,
        Ze = "";

    function Xa(t, e) {
        bi[xi++] = Ns, bi[xi++] = js, js = t, Ns = e
    }

    function vc(t, e, a) {
        xe[ye++] = Ve, xe[ye++] = Ze, xe[ye++] = Ga, Ga = t;
        var i = Ve;
        t = Ze;
        var l = 32 - ue(i) - 1;
        i &= ~(1 << l), a += 1;
        var s = 32 - ue(e) + l;
        if (30 < s) {
            var f = l - l % 5;
            s = (i & (1 << f) - 1).toString(32), i >>= f, l -= f, Ve = 1 << 32 - ue(e) + l | a << l | i, Ze = s + t
        } else Ve = 1 << s | a << l | i, Ze = t
    }

    function td(t) {
        t.return !== null && (Xa(t, 1), vc(t, 1, 0))
    }

    function ed(t) {
        for (; t === js;) js = bi[--xi], bi[xi] = null, Ns = bi[--xi], bi[xi] = null;
        for (; t === Ga;) Ga = xe[--ye], xe[ye] = null, Ze = xe[--ye], xe[ye] = null, Ve = xe[--ye], xe[ye] = null
    }
    var ee = null,
        Kt = null,
        ht = !1,
        Ce = null,
        ke = !1,
        ad = Error(u(519));

    function Qa(t) {
        var e = Error(u(418, ""));
        throw fl(be(e, t)), ad
    }

    function hc(t) {
        var e = t.stateNode,
            a = t.type,
            i = t.memoizedProps;
        switch (e[Ft] = t, e[se] = i, a) {
            case "dialog":
                pt("cancel", e), pt("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                pt("load", e);
                break;
            case "video":
            case "audio":
                for (a = 0; a < Ul.length; a++) pt(Ul[a], e);
                break;
            case "source":
                pt("error", e);
                break;
            case "img":
            case "image":
            case "link":
                pt("error", e), pt("load", e);
                break;
            case "details":
                pt("toggle", e);
                break;
            case "input":
                pt("invalid", e), Du(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0), cs(e);
                break;
            case "select":
                pt("invalid", e);
                break;
            case "textarea":
                pt("invalid", e), Mu(e, i.value, i.defaultValue, i.children), cs(e)
        }
        a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || i.suppressHydrationWarning === !0 || Ef(e.textContent, a) ? (i.popover != null && (pt("beforetoggle", e), pt("toggle", e)), i.onScroll != null && pt("scroll", e), i.onScrollEnd != null && pt("scrollend", e), i.onClick != null && (e.onclick = en), e = !0) : e = !1, e || Qa(t)
    }

    function gc(t) {
        for (ee = t.return; ee;) switch (ee.tag) {
            case 3:
            case 27:
                ke = !0;
                return;
            case 5:
            case 13:
                ke = !1;
                return;
            default:
                ee = ee.return
        }
    }

    function cl(t) {
        if (t !== ee) return !1;
        if (!ht) return gc(t), ht = !0, !1;
        var e = !1,
            a;
        if ((a = t.tag !== 3 && t.tag !== 27) && ((a = t.tag === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || No(t.type, t.memoizedProps)), a = !a), a && (e = !0), e && Kt && Qa(t), gc(t), t.tag === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
            t: {
                for (t = t.nextSibling, e = 0; t;) {
                    if (t.nodeType === 8)
                        if (a = t.data, a === "/$") {
                            if (e === 0) {
                                Kt = De(t.nextSibling);
                                break t
                            }
                            e--
                        } else a !== "$" && a !== "$!" && a !== "$?" || e++;
                    t = t.nextSibling
                }
                Kt = null
            }
        } else Kt = ee ? De(t.stateNode.nextSibling) : null;
        return !0
    }

    function rl() {
        Kt = ee = null, ht = !1
    }

    function fl(t) {
        Ce === null ? Ce = [t] : Ce.push(t)
    }
    var pl = Error(u(460)),
        bc = Error(u(474)),
        id = {
            then: function() {}
        };

    function xc(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function As() {}

    function yc(t, e, a) {
        switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(As, As), e = a), e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason, t === pl ? Error(u(483)) : t;
            default:
                if (typeof e.status == "string") e.then(As, As);
                else {
                    if (t = wt, t !== null && 100 < t.shellSuspendCounter) throw Error(u(482));
                    t = e, t.status = "pending", t.then(function(i) {
                        if (e.status === "pending") {
                            var l = e;
                            l.status = "fulfilled", l.value = i
                        }
                    }, function(i) {
                        if (e.status === "pending") {
                            var l = e;
                            l.status = "rejected", l.reason = i
                        }
                    })
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw t = e.reason, t === pl ? Error(u(483)) : t
                }
                throw ml = e, pl
        }
    }
    var ml = null;

    function Sc() {
        if (ml === null) throw Error(u(459));
        var t = ml;
        return ml = null, t
    }
    var yi = null,
        vl = 0;

    function ws(t) {
        var e = vl;
        return vl += 1, yi === null && (yi = []), yc(yi, t, e)
    }

    function hl(t, e) {
        e = e.props.ref, t.ref = e !== void 0 ? e : null
    }

    function Es(t, e) {
        throw e.$$typeof === p ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }

    function jc(t) {
        var e = t._init;
        return e(t._payload)
    }

    function Nc(t) {
        function e(E, j) {
            if (t) {
                var C = E.deletions;
                C === null ? (E.deletions = [j], E.flags |= 16) : C.push(j)
            }
        }

        function a(E, j) {
            if (!t) return null;
            for (; j !== null;) e(E, j), j = j.sibling;
            return null
        }

        function i(E) {
            for (var j = new Map; E !== null;) E.key !== null ? j.set(E.key, E) : j.set(E.index, E), E = E.sibling;
            return j
        }

        function l(E, j) {
            return E = Ea(E, j), E.index = 0, E.sibling = null, E
        }

        function s(E, j, C) {
            return E.index = C, t ? (C = E.alternate, C !== null ? (C = C.index, C < j ? (E.flags |= 33554434, j) : C) : (E.flags |= 33554434, j)) : (E.flags |= 1048576, j)
        }

        function f(E) {
            return t && E.alternate === null && (E.flags |= 33554434), E
        }

        function m(E, j, C, q) {
            return j === null || j.tag !== 6 ? (j = Pd(C, E.mode, q), j.return = E, j) : (j = l(j, C), j.return = E, j)
        }

        function x(E, j, C, q) {
            var F = C.type;
            return F === v ? L(E, j, C.props.children, q, C.key) : j !== null && (j.elementType === F || typeof F == "object" && F !== null && F.$$typeof === k && jc(F) === j.type) ? (j = l(j, C.props), hl(j, C), j.return = E, j) : (j = Qs(C.type, C.key, C.props, null, E.mode, q), hl(j, C), j.return = E, j)
        }

        function A(E, j, C, q) {
            return j === null || j.tag !== 4 || j.stateNode.containerInfo !== C.containerInfo || j.stateNode.implementation !== C.implementation ? (j = Wd(C, E.mode, q), j.return = E, j) : (j = l(j, C.children || []), j.return = E, j)
        }

        function L(E, j, C, q, F) {
            return j === null || j.tag !== 7 ? (j = ti(C, E.mode, q, F), j.return = E, j) : (j = l(j, C), j.return = E, j)
        }

        function Y(E, j, C) {
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return j = Pd("" + j, E.mode, C), j.return = E, j;
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case g:
                        return C = Qs(j.type, j.key, j.props, null, E.mode, C), hl(C, j), C.return = E, C;
                    case b:
                        return j = Wd(j, E.mode, C), j.return = E, j;
                    case k:
                        var q = j._init;
                        return j = q(j._payload), Y(E, j, C)
                }
                if (et(j) || _(j)) return j = ti(j, E.mode, C, null), j.return = E, j;
                if (typeof j.then == "function") return Y(E, ws(j), C);
                if (j.$$typeof === z) return Y(E, Ys(E, j), C);
                Es(E, j)
            }
            return null
        }

        function O(E, j, C, q) {
            var F = j !== null ? j.key : null;
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return F !== null ? null : m(E, j, "" + C, q);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case g:
                        return C.key === F ? x(E, j, C, q) : null;
                    case b:
                        return C.key === F ? A(E, j, C, q) : null;
                    case k:
                        return F = C._init, C = F(C._payload), O(E, j, C, q)
                }
                if (et(C) || _(C)) return F !== null ? null : L(E, j, C, q, null);
                if (typeof C.then == "function") return O(E, j, ws(C), q);
                if (C.$$typeof === z) return O(E, j, Ys(E, C), q);
                Es(E, C)
            }
            return null
        }

        function M(E, j, C, q, F) {
            if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return E = E.get(C) || null, m(j, E, "" + q, F);
            if (typeof q == "object" && q !== null) {
                switch (q.$$typeof) {
                    case g:
                        return E = E.get(q.key === null ? C : q.key) || null, x(j, E, q, F);
                    case b:
                        return E = E.get(q.key === null ? C : q.key) || null, A(j, E, q, F);
                    case k:
                        var rt = q._init;
                        return q = rt(q._payload), M(E, j, C, q, F)
                }
                if (et(q) || _(q)) return E = E.get(C) || null, L(j, E, q, F, null);
                if (typeof q.then == "function") return M(E, j, C, ws(q), F);
                if (q.$$typeof === z) return M(E, j, C, Ys(j, q), F);
                Es(j, q)
            }
            return null
        }

        function P(E, j, C, q) {
            for (var F = null, rt = null, W = j, at = j = 0, Vt = null; W !== null && at < C.length; at++) {
                W.index > at ? (Vt = W, W = null) : Vt = W.sibling;
                var gt = O(E, W, C[at], q);
                if (gt === null) {
                    W === null && (W = Vt);
                    break
                }
                t && W && gt.alternate === null && e(E, W), j = s(gt, j, at), rt === null ? F = gt : rt.sibling = gt, rt = gt, W = Vt
            }
            if (at === C.length) return a(E, W), ht && Xa(E, at), F;
            if (W === null) {
                for (; at < C.length; at++) W = Y(E, C[at], q), W !== null && (j = s(W, j, at), rt === null ? F = W : rt.sibling = W, rt = W);
                return ht && Xa(E, at), F
            }
            for (W = i(W); at < C.length; at++) Vt = M(W, E, at, C[at], q), Vt !== null && (t && Vt.alternate !== null && W.delete(Vt.key === null ? at : Vt.key), j = s(Vt, j, at), rt === null ? F = Vt : rt.sibling = Vt, rt = Vt);
            return t && W.forEach(function(Ma) {
                return e(E, Ma)
            }), ht && Xa(E, at), F
        }

        function dt(E, j, C, q) {
            if (C == null) throw Error(u(151));
            for (var F = null, rt = null, W = j, at = j = 0, Vt = null, gt = C.next(); W !== null && !gt.done; at++, gt = C.next()) {
                W.index > at ? (Vt = W, W = null) : Vt = W.sibling;
                var Ma = O(E, W, gt.value, q);
                if (Ma === null) {
                    W === null && (W = Vt);
                    break
                }
                t && W && Ma.alternate === null && e(E, W), j = s(Ma, j, at), rt === null ? F = Ma : rt.sibling = Ma, rt = Ma, W = Vt
            }
            if (gt.done) return a(E, W), ht && Xa(E, at), F;
            if (W === null) {
                for (; !gt.done; at++, gt = C.next()) gt = Y(E, gt.value, q), gt !== null && (j = s(gt, j, at), rt === null ? F = gt : rt.sibling = gt, rt = gt);
                return ht && Xa(E, at), F
            }
            for (W = i(W); !gt.done; at++, gt = C.next()) gt = M(W, E, at, gt.value, q), gt !== null && (t && gt.alternate !== null && W.delete(gt.key === null ? at : gt.key), j = s(gt, j, at), rt === null ? F = gt : rt.sibling = gt, rt = gt);
            return t && W.forEach(function(xh) {
                return e(E, xh)
            }), ht && Xa(E, at), F
        }

        function Mt(E, j, C, q) {
            if (typeof C == "object" && C !== null && C.type === v && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case g:
                        t: {
                            for (var F = C.key; j !== null;) {
                                if (j.key === F) {
                                    if (F = C.type, F === v) {
                                        if (j.tag === 7) {
                                            a(E, j.sibling), q = l(j, C.props.children), q.return = E, E = q;
                                            break t
                                        }
                                    } else if (j.elementType === F || typeof F == "object" && F !== null && F.$$typeof === k && jc(F) === j.type) {
                                        a(E, j.sibling), q = l(j, C.props), hl(q, C), q.return = E, E = q;
                                        break t
                                    }
                                    a(E, j);
                                    break
                                } else e(E, j);
                                j = j.sibling
                            }
                            C.type === v ? (q = ti(C.props.children, E.mode, q, C.key), q.return = E, E = q) : (q = Qs(C.type, C.key, C.props, null, E.mode, q), hl(q, C), q.return = E, E = q)
                        }
                        return f(E);
                    case b:
                        t: {
                            for (F = C.key; j !== null;) {
                                if (j.key === F)
                                    if (j.tag === 4 && j.stateNode.containerInfo === C.containerInfo && j.stateNode.implementation === C.implementation) {
                                        a(E, j.sibling), q = l(j, C.children || []), q.return = E, E = q;
                                        break t
                                    } else {
                                        a(E, j);
                                        break
                                    }
                                else e(E, j);
                                j = j.sibling
                            }
                            q = Wd(C, E.mode, q),
                            q.return = E,
                            E = q
                        }
                        return f(E);
                    case k:
                        return F = C._init, C = F(C._payload), Mt(E, j, C, q)
                }
                if (et(C)) return P(E, j, C, q);
                if (_(C)) {
                    if (F = _(C), typeof F != "function") throw Error(u(150));
                    return C = F.call(C), dt(E, j, C, q)
                }
                if (typeof C.then == "function") return Mt(E, j, ws(C), q);
                if (C.$$typeof === z) return Mt(E, j, Ys(E, C), q);
                Es(E, C)
            }
            return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, j !== null && j.tag === 6 ? (a(E, j.sibling), q = l(j, C), q.return = E, E = q) : (a(E, j), q = Pd(C, E.mode, q), q.return = E, E = q), f(E)) : a(E, j)
        }
        return function(E, j, C, q) {
            try {
                vl = 0;
                var F = Mt(E, j, C, q);
                return yi = null, F
            } catch (W) {
                if (W === pl) throw W;
                var rt = Ae(29, W, null, E.mode);
                return rt.lanes = q, rt.return = E, rt
            } finally {}
        }
    }
    var Va = Nc(!0),
        Ac = Nc(!1),
        Si = bt(null),
        Ts = bt(0);

    function wc(t, e) {
        t = ia, Tt(Ts, t), Tt(Si, e), ia = t | e.baseLanes
    }

    function ld() {
        Tt(Ts, ia), Tt(Si, Si.current)
    }

    function sd() {
        ia = Ts.current, Ut(Si), Ut(Ts)
    }
    var Se = bt(null),
        qe = null;

    function va(t) {
        var e = t.alternate;
        Tt(Bt, Bt.current & 1), Tt(Se, t), qe === null && (e === null || Si.current !== null || e.memoizedState !== null) && (qe = t)
    }

    function Ec(t) {
        if (t.tag === 22) {
            if (Tt(Bt, Bt.current), Tt(Se, t), qe === null) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (qe = t)
            }
        } else ha()
    }

    function ha() {
        Tt(Bt, Bt.current), Tt(Se, Se.current)
    }

    function Ke(t) {
        Ut(Se), qe === t && (qe = null), Ut(Bt)
    }
    var Bt = bt(0);

    function Rs(t) {
        for (var e = t; e !== null;) {
            if (e.tag === 13) {
                var a = e.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!")) return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0) return e
            } else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }
    var nv = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                e = this.signal = {
                    aborted: !1,
                    addEventListener: function(a, i) {
                        t.push(i)
                    }
                };
            this.abort = function() {
                e.aborted = !0, t.forEach(function(a) {
                    return a()
                })
            }
        },
        dv = c.unstable_scheduleCallback,
        ov = c.unstable_NormalPriority,
        Yt = {
            $$typeof: z,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function nd() {
        return {
            controller: new nv,
            data: new Map,
            refCount: 0
        }
    }

    function gl(t) {
        t.refCount--, t.refCount === 0 && dv(ov, function() {
            t.controller.abort()
        })
    }
    var bl = null,
        dd = 0,
        ji = 0,
        Ni = null;

    function uv(t, e) {
        if (bl === null) {
            var a = bl = [];
            dd = 0, ji = mo(), Ni = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    a.push(i)
                }
            }
        }
        return dd++, e.then(Tc, Tc), e
    }

    function Tc() {
        if (--dd === 0 && bl !== null) {
            Ni !== null && (Ni.status = "fulfilled");
            var t = bl;
            bl = null, ji = 0, Ni = null;
            for (var e = 0; e < t.length; e++)(0, t[e])()
        }
    }

    function cv(t, e) {
        var a = [],
            i = {
                status: "pending",
                value: null,
                reason: null,
                then: function(l) {
                    a.push(l)
                }
            };
        return t.then(function() {
            i.status = "fulfilled", i.value = e;
            for (var l = 0; l < a.length; l++)(0, a[l])(e)
        }, function(l) {
            for (i.status = "rejected", i.reason = l, l = 0; l < a.length; l++)(0, a[l])(void 0)
        }), i
    }
    var Rc = V.S;
    V.S = function(t, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && uv(t, e), Rc !== null && Rc(t, e)
    };
    var Za = bt(null);

    function od() {
        var t = Za.current;
        return t !== null ? t : wt.pooledCache
    }

    function Cs(t, e) {
        e === null ? Tt(Za, Za.current) : Tt(Za, e.pool)
    }

    function Cc() {
        var t = od();
        return t === null ? null : {
            parent: Yt._currentValue,
            pool: t
        }
    }
    var ga = 0,
        ct = null,
        yt = null,
        kt = null,
        Os = !1,
        Ai = !1,
        Ka = !1,
        Ds = 0,
        xl = 0,
        wi = null,
        rv = 0;

    function Lt() {
        throw Error(u(321))
    }

    function ud(t, e) {
        if (e === null) return !1;
        for (var a = 0; a < e.length && a < t.length; a++)
            if (!ce(t[a], e[a])) return !1;
        return !0
    }

    function cd(t, e, a, i, l, s) {
        return ga = s, ct = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, V.H = t === null || t.memoizedState === null ? Ja : ba, Ka = !1, s = a(i, l), Ka = !1, Ai && (s = Dc(e, a, i, l)), Oc(t), s
    }

    function Oc(t) {
        V.H = He;
        var e = yt !== null && yt.next !== null;
        if (ga = 0, kt = yt = ct = null, Os = !1, xl = 0, wi = null, e) throw Error(u(300));
        t === null || Xt || (t = t.dependencies, t !== null && Bs(t) && (Xt = !0))
    }

    function Dc(t, e, a, i) {
        ct = t;
        var l = 0;
        do {
            if (Ai && (wi = null), xl = 0, Ai = !1, 25 <= l) throw Error(u(301));
            if (l += 1, kt = yt = null, t.updateQueue != null) {
                var s = t.updateQueue;
                s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0)
            }
            V.H = $a, s = e(a, i)
        } while (Ai);
        return s
    }

    function fv() {
        var t = V.H,
            e = t.useState()[0];
        return e = typeof e.then == "function" ? yl(e) : e, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (ct.flags |= 1024), e
    }

    function rd() {
        var t = Ds !== 0;
        return Ds = 0, t
    }

    function fd(t, e, a) {
        e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a
    }

    function pd(t) {
        if (Os) {
            for (t = t.memoizedState; t !== null;) {
                var e = t.queue;
                e !== null && (e.pending = null), t = t.next
            }
            Os = !1
        }
        ga = 0, kt = yt = ct = null, Ai = !1, xl = Ds = 0, wi = null
    }

    function de() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return kt === null ? ct.memoizedState = kt = t : kt = kt.next = t, kt
    }

    function qt() {
        if (yt === null) {
            var t = ct.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = yt.next;
        var e = kt === null ? ct.memoizedState : kt.next;
        if (e !== null) kt = e, yt = t;
        else {
            if (t === null) throw ct.alternate === null ? Error(u(467)) : Error(u(310));
            yt = t, t = {
                memoizedState: yt.memoizedState,
                baseState: yt.baseState,
                baseQueue: yt.baseQueue,
                queue: yt.queue,
                next: null
            }, kt === null ? ct.memoizedState = kt = t : kt = kt.next = t
        }
        return kt
    }
    var _s;
    _s = function() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    };

    function yl(t) {
        var e = xl;
        return xl += 1, wi === null && (wi = []), t = yc(wi, t, e), e = ct, (kt === null ? e.memoizedState : kt.next) === null && (e = e.alternate, V.H = e === null || e.memoizedState === null ? Ja : ba), t
    }

    function Ms(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return yl(t);
            if (t.$$typeof === z) return Pt(t)
        }
        throw Error(u(438, String(t)))
    }

    function md(t) {
        var e = null,
            a = ct.updateQueue;
        if (a !== null && (e = a.memoCache), e == null) {
            var i = ct.alternate;
            i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
                data: i.data.map(function(l) {
                    return l.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
                data: [],
                index: 0
            }), a === null && (a = _s(), ct.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
            for (a = e.data[e.index] = Array(t), i = 0; i < t; i++) a[i] = K;
        return e.index++, a
    }

    function Je(t, e) {
        return typeof e == "function" ? e(t) : e
    }

    function zs(t) {
        var e = qt();
        return vd(e, yt, t)
    }

    function vd(t, e, a) {
        var i = t.queue;
        if (i === null) throw Error(u(311));
        i.lastRenderedReducer = a;
        var l = t.baseQueue,
            s = i.pending;
        if (s !== null) {
            if (l !== null) {
                var f = l.next;
                l.next = s.next, s.next = f
            }
            e.baseQueue = l = s, i.pending = null
        }
        if (s = t.baseState, l === null) t.memoizedState = s;
        else {
            e = l.next;
            var m = f = null,
                x = null,
                A = e,
                L = !1;
            do {
                var Y = A.lane & -536870913;
                if (Y !== A.lane ? (vt & Y) === Y : (ga & Y) === Y) {
                    var O = A.revertLane;
                    if (O === 0) x !== null && (x = x.next = {
                        lane: 0,
                        revertLane: 0,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }), Y === ji && (L = !0);
                    else if ((ga & O) === O) {
                        A = A.next, O === ji && (L = !0);
                        continue
                    } else Y = {
                        lane: 0,
                        revertLane: A.revertLane,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }, x === null ? (m = x = Y, f = s) : x = x.next = Y, ct.lanes |= O, Ta |= O;
                    Y = A.action, Ka && a(s, Y), s = A.hasEagerState ? A.eagerState : a(s, Y)
                } else O = {
                    lane: Y,
                    revertLane: A.revertLane,
                    action: A.action,
                    hasEagerState: A.hasEagerState,
                    eagerState: A.eagerState,
                    next: null
                }, x === null ? (m = x = O, f = s) : x = x.next = O, ct.lanes |= Y, Ta |= Y;
                A = A.next
            } while (A !== null && A !== e);
            if (x === null ? f = s : x.next = m, !ce(s, t.memoizedState) && (Xt = !0, L && (a = Ni, a !== null))) throw a;
            t.memoizedState = s, t.baseState = f, t.baseQueue = x, i.lastRenderedState = s
        }
        return l === null && (i.lanes = 0), [t.memoizedState, i.dispatch]
    }

    function hd(t) {
        var e = qt(),
            a = e.queue;
        if (a === null) throw Error(u(311));
        a.lastRenderedReducer = t;
        var i = a.dispatch,
            l = a.pending,
            s = e.memoizedState;
        if (l !== null) {
            a.pending = null;
            var f = l = l.next;
            do s = t(s, f.action), f = f.next; while (f !== l);
            ce(s, e.memoizedState) || (Xt = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), a.lastRenderedState = s
        }
        return [s, i]
    }

    function _c(t, e, a) {
        var i = ct,
            l = qt(),
            s = ht;
        if (s) {
            if (a === void 0) throw Error(u(407));
            a = a()
        } else a = e();
        var f = !ce((yt || l).memoizedState, a);
        if (f && (l.memoizedState = a, Xt = !0), l = l.queue, xd(Lc.bind(null, i, l, t), [t]), l.getSnapshot !== e || f || kt !== null && kt.memoizedState.tag & 1) {
            if (i.flags |= 2048, Ei(9, zc.bind(null, i, l, a, e), {
                    destroy: void 0
                }, null), wt === null) throw Error(u(349));
            s || (ga & 60) !== 0 || Mc(i, e, a)
        }
        return a
    }

    function Mc(t, e, a) {
        t.flags |= 16384, t = {
            getSnapshot: e,
            value: a
        }, e = ct.updateQueue, e === null ? (e = _s(), ct.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t))
    }

    function zc(t, e, a, i) {
        e.value = a, e.getSnapshot = i, Uc(e) && kc(t)
    }

    function Lc(t, e, a) {
        return a(function() {
            Uc(e) && kc(t)
        })
    }

    function Uc(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var a = e();
            return !ce(t, a)
        } catch {
            return !0
        }
    }

    function kc(t) {
        var e = ma(t, 2);
        e !== null && ae(e, t, 2)
    }

    function gd(t) {
        var e = de();
        if (typeof t == "function") {
            var a = t;
            if (t = a(), Ka) {
                ra(!0);
                try {
                    a()
                } finally {
                    ra(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t, e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Je,
            lastRenderedState: t
        }, e
    }

    function qc(t, e, a, i) {
        return t.baseState = a, vd(t, yt, typeof i == "function" ? i : Je)
    }

    function pv(t, e, a, i, l) {
        if (ks(t)) throw Error(u(485));
        if (t = e.action, t !== null) {
            var s = {
                payload: l,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(f) {
                    s.listeners.push(f)
                }
            };
            V.T !== null ? a(!0) : s.isTransition = !1, i(s), a = e.pending, a === null ? (s.next = e.pending = s, Hc(e, s)) : (s.next = a.next, e.pending = a.next = s)
        }
    }

    function Hc(t, e) {
        var a = e.action,
            i = e.payload,
            l = t.state;
        if (e.isTransition) {
            var s = V.T,
                f = {};
            V.T = f;
            try {
                var m = a(l, i),
                    x = V.S;
                x !== null && x(f, m), Bc(t, e, m)
            } catch (A) {
                bd(t, e, A)
            } finally {
                V.T = s
            }
        } else try {
            s = a(l, i), Bc(t, e, s)
        } catch (A) {
            bd(t, e, A)
        }
    }

    function Bc(t, e, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(i) {
            Yc(t, e, i)
        }, function(i) {
            return bd(t, e, i)
        }) : Yc(t, e, a)
    }

    function Yc(t, e, a) {
        e.status = "fulfilled", e.value = a, Gc(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Hc(t, a)))
    }

    function bd(t, e, a) {
        var i = t.pending;
        if (t.pending = null, i !== null) {
            i = i.next;
            do e.status = "rejected", e.reason = a, Gc(e), e = e.next; while (e !== i)
        }
        t.action = null
    }

    function Gc(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)(0, t[e])()
    }

    function Xc(t, e) {
        return e
    }

    function Qc(t, e) {
        if (ht) {
            var a = wt.formState;
            if (a !== null) {
                t: {
                    var i = ct;
                    if (ht) {
                        if (Kt) {
                            e: {
                                for (var l = Kt, s = ke; l.nodeType !== 8;) {
                                    if (!s) {
                                        l = null;
                                        break e
                                    }
                                    if (l = De(l.nextSibling), l === null) {
                                        l = null;
                                        break e
                                    }
                                }
                                s = l.data,
                                l = s === "F!" || s === "F" ? l : null
                            }
                            if (l) {
                                Kt = De(l.nextSibling), i = l.data === "F!";
                                break t
                            }
                        }
                        Qa(i)
                    }
                    i = !1
                }
                i && (e = a[0])
            }
        }
        return a = de(), a.memoizedState = a.baseState = e, i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xc,
            lastRenderedState: e
        }, a.queue = i, a = or.bind(null, ct, i), i.dispatch = a, i = gd(!1), s = Ad.bind(null, ct, !1, i.queue), i = de(), l = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        }, i.queue = l, a = pv.bind(null, ct, l, s, a), l.dispatch = a, i.memoizedState = t, [e, a, !1]
    }

    function Vc(t) {
        var e = qt();
        return Zc(e, yt, t)
    }

    function Zc(t, e, a) {
        e = vd(t, e, Xc)[0], t = zs(Je)[0], e = typeof e == "object" && e !== null && typeof e.then == "function" ? yl(e) : e;
        var i = qt(),
            l = i.queue,
            s = l.dispatch;
        return a !== i.memoizedState && (ct.flags |= 2048, Ei(9, mv.bind(null, l, a), {
            destroy: void 0
        }, null)), [e, s, t]
    }

    function mv(t, e) {
        t.action = e
    }

    function Kc(t) {
        var e = qt(),
            a = yt;
        if (a !== null) return Zc(e, a, t);
        qt(), e = e.memoizedState, a = qt();
        var i = a.queue.dispatch;
        return a.memoizedState = t, [e, i, !1]
    }

    function Ei(t, e, a, i) {
        return t = {
            tag: t,
            create: e,
            inst: a,
            deps: i,
            next: null
        }, e = ct.updateQueue, e === null && (e = _s(), ct.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (i = a.next, a.next = t, t.next = i, e.lastEffect = t), t
    }

    function Jc() {
        return qt().memoizedState
    }

    function Ls(t, e, a, i) {
        var l = de();
        ct.flags |= t, l.memoizedState = Ei(1 | e, a, {
            destroy: void 0
        }, i === void 0 ? null : i)
    }

    function Us(t, e, a, i) {
        var l = qt();
        i = i === void 0 ? null : i;
        var s = l.memoizedState.inst;
        yt !== null && i !== null && ud(i, yt.memoizedState.deps) ? l.memoizedState = Ei(e, a, s, i) : (ct.flags |= t, l.memoizedState = Ei(1 | e, a, s, i))
    }

    function $c(t, e) {
        Ls(8390656, 8, t, e)
    }

    function xd(t, e) {
        Us(2048, 8, t, e)
    }

    function Fc(t, e) {
        return Us(4, 2, t, e)
    }

    function Pc(t, e) {
        return Us(4, 4, t, e)
    }

    function Wc(t, e) {
        if (typeof e == "function") {
            t = t();
            var a = e(t);
            return function() {
                typeof a == "function" ? a() : e(null)
            }
        }
        if (e != null) return t = t(), e.current = t,
            function() {
                e.current = null
            }
    }

    function Ic(t, e, a) {
        a = a != null ? a.concat([t]) : null, Us(4, 4, Wc.bind(null, e, t), a)
    }

    function yd() {}

    function tr(t, e) {
        var a = qt();
        e = e === void 0 ? null : e;
        var i = a.memoizedState;
        return e !== null && ud(e, i[1]) ? i[0] : (a.memoizedState = [t, e], t)
    }

    function er(t, e) {
        var a = qt();
        e = e === void 0 ? null : e;
        var i = a.memoizedState;
        if (e !== null && ud(e, i[1])) return i[0];
        if (i = t(), Ka) {
            ra(!0);
            try {
                t()
            } finally {
                ra(!1)
            }
        }
        return a.memoizedState = [i, e], i
    }

    function Sd(t, e, a) {
        return a === void 0 || (ga & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = a, t = lf(), ct.lanes |= t, Ta |= t, a)
    }

    function ar(t, e, a, i) {
        return ce(a, e) ? a : Si.current !== null ? (t = Sd(t, a, i), ce(t, e) || (Xt = !0), t) : (ga & 42) === 0 ? (Xt = !0, t.memoizedState = a) : (t = lf(), ct.lanes |= t, Ta |= t, e)
    }

    function ir(t, e, a, i, l) {
        var s = $.p;
        $.p = s !== 0 && 8 > s ? s : 8;
        var f = V.T,
            m = {};
        V.T = m, Ad(t, !1, e, a);
        try {
            var x = l(),
                A = V.S;
            if (A !== null && A(m, x), x !== null && typeof x == "object" && typeof x.then == "function") {
                var L = cv(x, i);
                Sl(t, e, L, me(t))
            } else Sl(t, e, i, me(t))
        } catch (Y) {
            Sl(t, e, {
                then: function() {},
                status: "rejected",
                reason: Y
            }, me())
        } finally {
            $.p = s, V.T = f
        }
    }

    function vv() {}

    function jd(t, e, a, i) {
        if (t.tag !== 5) throw Error(u(476));
        var l = lr(t).queue;
        ir(t, l, e, mt, a === null ? vv : function() {
            return sr(t), a(i)
        })
    }

    function lr(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: mt,
            baseState: mt,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Je,
                lastRenderedState: mt
            },
            next: null
        };
        var a = {};
        return e.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Je,
                lastRenderedState: a
            },
            next: null
        }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
    }

    function sr(t) {
        var e = lr(t).next.queue;
        Sl(t, e, {}, me())
    }

    function Nd() {
        return Pt(Yl)
    }

    function nr() {
        return qt().memoizedState
    }

    function dr() {
        return qt().memoizedState
    }

    function hv(t) {
        for (var e = t.return; e !== null;) {
            switch (e.tag) {
                case 24:
                case 3:
                    var a = me();
                    t = Sa(a);
                    var i = ja(e, t, a);
                    i !== null && (ae(i, e, a), Al(i, e, a)), e = {
                        cache: nd()
                    }, t.payload = e;
                    return
            }
            e = e.return
        }
    }

    function gv(t, e, a) {
        var i = me();
        a = {
            lane: i,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, ks(t) ? ur(e, a) : (a = In(t, e, a, i), a !== null && (ae(a, t, i), cr(a, e, i)))
    }

    function or(t, e, a) {
        var i = me();
        Sl(t, e, a, i)
    }

    function Sl(t, e, a, i) {
        var l = {
            lane: i,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ks(t)) ur(e, l);
        else {
            var s = t.alternate;
            if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
                var f = e.lastRenderedState,
                    m = s(f, a);
                if (l.hasEagerState = !0, l.eagerState = m, ce(m, f)) return ys(t, e, l, 0), wt === null && xs(), !1
            } catch {} finally {}
            if (a = In(t, e, l, i), a !== null) return ae(a, t, i), cr(a, e, i), !0
        }
        return !1
    }

    function Ad(t, e, a, i) {
        if (i = {
                lane: 2,
                revertLane: mo(),
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ks(t)) {
            if (e) throw Error(u(479))
        } else e = In(t, a, i, 2), e !== null && ae(e, t, 2)
    }

    function ks(t) {
        var e = t.alternate;
        return t === ct || e !== null && e === ct
    }

    function ur(t, e) {
        Ai = Os = !0;
        var a = t.pending;
        a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e
    }

    function cr(t, e, a) {
        if ((a & 4194176) !== 0) {
            var i = e.lanes;
            i &= t.pendingLanes, a |= i, e.lanes = a, Su(t, a)
        }
    }
    var He = {
        readContext: Pt,
        use: Ms,
        useCallback: Lt,
        useContext: Lt,
        useEffect: Lt,
        useImperativeHandle: Lt,
        useLayoutEffect: Lt,
        useInsertionEffect: Lt,
        useMemo: Lt,
        useReducer: Lt,
        useRef: Lt,
        useState: Lt,
        useDebugValue: Lt,
        useDeferredValue: Lt,
        useTransition: Lt,
        useSyncExternalStore: Lt,
        useId: Lt
    };
    He.useCacheRefresh = Lt, He.useMemoCache = Lt, He.useHostTransitionStatus = Lt, He.useFormState = Lt, He.useActionState = Lt, He.useOptimistic = Lt;
    var Ja = {
        readContext: Pt,
        use: Ms,
        useCallback: function(t, e) {
            return de().memoizedState = [t, e === void 0 ? null : e], t
        },
        useContext: Pt,
        useEffect: $c,
        useImperativeHandle: function(t, e, a) {
            a = a != null ? a.concat([t]) : null, Ls(4194308, 4, Wc.bind(null, e, t), a)
        },
        useLayoutEffect: function(t, e) {
            return Ls(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            Ls(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var a = de();
            e = e === void 0 ? null : e;
            var i = t();
            if (Ka) {
                ra(!0);
                try {
                    t()
                } finally {
                    ra(!1)
                }
            }
            return a.memoizedState = [i, e], i
        },
        useReducer: function(t, e, a) {
            var i = de();
            if (a !== void 0) {
                var l = a(e);
                if (Ka) {
                    ra(!0);
                    try {
                        a(e)
                    } finally {
                        ra(!1)
                    }
                }
            } else l = e;
            return i.memoizedState = i.baseState = l, t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: l
            }, i.queue = t, t = t.dispatch = gv.bind(null, ct, t), [i.memoizedState, t]
        },
        useRef: function(t) {
            var e = de();
            return t = {
                current: t
            }, e.memoizedState = t
        },
        useState: function(t) {
            t = gd(t);
            var e = t.queue,
                a = or.bind(null, ct, e);
            return e.dispatch = a, [t.memoizedState, a]
        },
        useDebugValue: yd,
        useDeferredValue: function(t, e) {
            var a = de();
            return Sd(a, t, e)
        },
        useTransition: function() {
            var t = gd(!1);
            return t = ir.bind(null, ct, t.queue, !0, !1), de().memoizedState = t, [!1, t]
        },
        useSyncExternalStore: function(t, e, a) {
            var i = ct,
                l = de();
            if (ht) {
                if (a === void 0) throw Error(u(407));
                a = a()
            } else {
                if (a = e(), wt === null) throw Error(u(349));
                (vt & 60) !== 0 || Mc(i, e, a)
            }
            l.memoizedState = a;
            var s = {
                value: a,
                getSnapshot: e
            };
            return l.queue = s, $c(Lc.bind(null, i, s, t), [t]), i.flags |= 2048, Ei(9, zc.bind(null, i, s, a, e), {
                destroy: void 0
            }, null), a
        },
        useId: function() {
            var t = de(),
                e = wt.identifierPrefix;
            if (ht) {
                var a = Ze,
                    i = Ve;
                a = (i & ~(1 << 32 - ue(i) - 1)).toString(32) + a, e = ":" + e + "R" + a, a = Ds++, 0 < a && (e += "H" + a.toString(32)), e += ":"
            } else a = rv++, e = ":" + e + "r" + a.toString(32) + ":";
            return t.memoizedState = e
        },
        useCacheRefresh: function() {
            return de().memoizedState = hv.bind(null, ct)
        }
    };
    Ja.useMemoCache = md, Ja.useHostTransitionStatus = Nd, Ja.useFormState = Qc, Ja.useActionState = Qc, Ja.useOptimistic = function(t) {
        var e = de();
        e.memoizedState = e.baseState = t;
        var a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
        };
        return e.queue = a, e = Ad.bind(null, ct, !0, a), a.dispatch = e, [t, e]
    };
    var ba = {
        readContext: Pt,
        use: Ms,
        useCallback: tr,
        useContext: Pt,
        useEffect: xd,
        useImperativeHandle: Ic,
        useInsertionEffect: Fc,
        useLayoutEffect: Pc,
        useMemo: er,
        useReducer: zs,
        useRef: Jc,
        useState: function() {
            return zs(Je)
        },
        useDebugValue: yd,
        useDeferredValue: function(t, e) {
            var a = qt();
            return ar(a, yt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = zs(Je)[0],
                e = qt().memoizedState;
            return [typeof t == "boolean" ? t : yl(t), e]
        },
        useSyncExternalStore: _c,
        useId: nr
    };
    ba.useCacheRefresh = dr, ba.useMemoCache = md, ba.useHostTransitionStatus = Nd, ba.useFormState = Vc, ba.useActionState = Vc, ba.useOptimistic = function(t, e) {
        var a = qt();
        return qc(a, yt, t, e)
    };
    var $a = {
        readContext: Pt,
        use: Ms,
        useCallback: tr,
        useContext: Pt,
        useEffect: xd,
        useImperativeHandle: Ic,
        useInsertionEffect: Fc,
        useLayoutEffect: Pc,
        useMemo: er,
        useReducer: hd,
        useRef: Jc,
        useState: function() {
            return hd(Je)
        },
        useDebugValue: yd,
        useDeferredValue: function(t, e) {
            var a = qt();
            return yt === null ? Sd(a, t, e) : ar(a, yt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = hd(Je)[0],
                e = qt().memoizedState;
            return [typeof t == "boolean" ? t : yl(t), e]
        },
        useSyncExternalStore: _c,
        useId: nr
    };
    $a.useCacheRefresh = dr, $a.useMemoCache = md, $a.useHostTransitionStatus = Nd, $a.useFormState = Kc, $a.useActionState = Kc, $a.useOptimistic = function(t, e) {
        var a = qt();
        return yt !== null ? qc(a, yt, t, e) : (a.baseState = t, [t, a.queue.dispatch])
    };

    function wd(t, e, a, i) {
        e = t.memoizedState, a = a(i, e), a = a == null ? e : tt({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var Ed = {
        isMounted: function(t) {
            return (t = t._reactInternals) ? lt(t) === t : !1
        },
        enqueueSetState: function(t, e, a) {
            t = t._reactInternals;
            var i = me(),
                l = Sa(i);
            l.payload = e, a != null && (l.callback = a), e = ja(t, l, i), e !== null && (ae(e, t, i), Al(e, t, i))
        },
        enqueueReplaceState: function(t, e, a) {
            t = t._reactInternals;
            var i = me(),
                l = Sa(i);
            l.tag = 1, l.payload = e, a != null && (l.callback = a), e = ja(t, l, i), e !== null && (ae(e, t, i), Al(e, t, i))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var a = me(),
                i = Sa(a);
            i.tag = 2, e != null && (i.callback = e), e = ja(t, i, a), e !== null && (ae(e, t, a), Al(e, t, a))
        }
    };

    function rr(t, e, a, i, l, s, f) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, f) : e.prototype && e.prototype.isPureReactComponent ? !ol(a, i) || !ol(l, s) : !0
    }

    function fr(t, e, a, i) {
        t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, i), e.state !== t && Ed.enqueueReplaceState(e, e.state, null)
    }

    function Fa(t, e) {
        var a = e;
        if ("ref" in e) {
            a = {};
            for (var i in e) i !== "ref" && (a[i] = e[i])
        }
        if (t = t.defaultProps) {
            a === e && (a = tt({}, a));
            for (var l in t) a[l] === void 0 && (a[l] = t[l])
        }
        return a
    }
    var qs = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    };

    function pr(t) {
        qs(t)
    }

    function mr(t) {
        console.error(t)
    }

    function vr(t) {
        qs(t)
    }

    function Hs(t, e) {
        try {
            var a = t.onUncaughtError;
            a(e.value, {
                componentStack: e.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }

    function hr(t, e, a) {
        try {
            var i = t.onCaughtError;
            i(a.value, {
                componentStack: a.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }

    function Td(t, e, a) {
        return a = Sa(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function() {
            Hs(t, e)
        }, a
    }

    function gr(t) {
        return t = Sa(t), t.tag = 3, t
    }

    function br(t, e, a, i) {
        var l = a.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var s = i.value;
            t.payload = function() {
                return l(s)
            }, t.callback = function() {
                hr(e, a, i)
            }
        }
        var f = a.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
            hr(e, a, i), typeof l != "function" && (Ra === null ? Ra = new Set([this]) : Ra.add(this));
            var m = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: m !== null ? m : ""
            })
        })
    }

    function bv(t, e, a, i, l) {
        if (a.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
            if (e = a.alternate, e !== null && Nl(e, a, l, !0), a = Se.current, a !== null) {
                switch (a.tag) {
                    case 13:
                        return qe === null ? uo() : a.alternate === null && _t === 0 && (_t = 3), a.flags &= -257, a.flags |= 65536, a.lanes = l, i === id ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = new Set([i]) : e.add(i), ro(t, i, l)), !1;
                    case 22:
                        return a.flags |= 65536, i === id ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([i])
                        }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = new Set([i]) : a.add(i)), ro(t, i, l)), !1
                }
                throw Error(u(435, a.tag))
            }
            return ro(t, i, l), uo(), !1
        }
        if (ht) return e = Se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = l, i !== ad && (t = Error(u(422), {
            cause: i
        }), fl(be(t, a)))) : (i !== ad && (e = Error(u(423), {
            cause: i
        }), fl(be(e, a))), t = t.current.alternate, t.flags |= 65536, l &= -l, t.lanes |= l, i = be(i, a), l = Td(t.stateNode, i, l), Gd(t, l), _t !== 4 && (_t = 2)), !1;
        var s = Error(u(520), {
            cause: i
        });
        if (s = be(s, a), _l === null ? _l = [s] : _l.push(s), _t !== 4 && (_t = 2), e === null) return !0;
        i = be(i, a), a = e;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536, t = l & -l, a.lanes |= t, t = Td(a.stateNode, i, t), Gd(a, t), !1;
                case 1:
                    if (e = a.type, s = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Ra === null || !Ra.has(s)))) return a.flags |= 65536, l &= -l, a.lanes |= l, l = gr(l), br(l, t, a, i), Gd(a, l), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var xr = Error(u(461)),
        Xt = !1;

    function Jt(t, e, a, i) {
        e.child = t === null ? Ac(e, null, a, i) : Va(e, t.child, a, i)
    }

    function yr(t, e, a, i, l) {
        a = a.render;
        var s = e.ref;
        if ("ref" in i) {
            var f = {};
            for (var m in i) m !== "ref" && (f[m] = i[m])
        } else f = i;
        return Wa(e), i = cd(t, e, a, f, s, l), m = rd(), t !== null && !Xt ? (fd(t, e, l), $e(t, e, l)) : (ht && m && td(e), e.flags |= 1, Jt(t, e, i, l), e.child)
    }

    function Sr(t, e, a, i, l) {
        if (t === null) {
            var s = a.type;
            return typeof s == "function" && !Fd(s) && s.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = s, jr(t, e, s, i, l)) : (t = Qs(a.type, null, i, e, e.mode, l), t.ref = e.ref, t.return = e, e.child = t)
        }
        if (s = t.child, !Ud(t, l)) {
            var f = s.memoizedProps;
            if (a = a.compare, a = a !== null ? a : ol, a(f, i) && t.ref === e.ref) return $e(t, e, l)
        }
        return e.flags |= 1, t = Ea(s, i), t.ref = e.ref, t.return = e, e.child = t
    }

    function jr(t, e, a, i, l) {
        if (t !== null) {
            var s = t.memoizedProps;
            if (ol(s, i) && t.ref === e.ref)
                if (Xt = !1, e.pendingProps = i = s, Ud(t, l))(t.flags & 131072) !== 0 && (Xt = !0);
                else return e.lanes = t.lanes, $e(t, e, l)
        }
        return Rd(t, e, a, i, l)
    }

    function Nr(t, e, a) {
        var i = e.pendingProps,
            l = i.children,
            s = (e.stateNode._pendingVisibility & 2) !== 0,
            f = t !== null ? t.memoizedState : null;
        if (jl(t, e), i.mode === "hidden" || s) {
            if ((e.flags & 128) !== 0) {
                if (i = f !== null ? f.baseLanes | a : a, t !== null) {
                    for (l = e.child = t.child, s = 0; l !== null;) s = s | l.lanes | l.childLanes, l = l.sibling;
                    e.childLanes = s & ~i
                } else e.childLanes = 0, e.child = null;
                return Ar(t, e, i, a)
            }
            if ((a & 536870912) !== 0) e.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && Cs(e, f !== null ? f.cachePool : null), f !== null ? wc(e, f) : ld(), Ec(e);
            else return e.lanes = e.childLanes = 536870912, Ar(t, e, f !== null ? f.baseLanes | a : a, a)
        } else f !== null ? (Cs(e, f.cachePool), wc(e, f), ha(), e.memoizedState = null) : (t !== null && Cs(e, null), ld(), ha());
        return Jt(t, e, l, a), e.child
    }

    function Ar(t, e, a, i) {
        var l = od();
        return l = l === null ? null : {
            parent: Yt._currentValue,
            pool: l
        }, e.memoizedState = {
            baseLanes: a,
            cachePool: l
        }, t !== null && Cs(e, null), ld(), Ec(e), t !== null && Nl(t, e, i, !0), null
    }

    function jl(t, e) {
        var a = e.ref;
        if (a === null) t !== null && t.ref !== null && (e.flags |= 2097664);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(u(284));
            (t === null || t.ref !== a) && (e.flags |= 2097664)
        }
    }

    function Rd(t, e, a, i, l) {
        return Wa(e), a = cd(t, e, a, i, void 0, l), i = rd(), t !== null && !Xt ? (fd(t, e, l), $e(t, e, l)) : (ht && i && td(e), e.flags |= 1, Jt(t, e, a, l), e.child)
    }

    function wr(t, e, a, i, l, s) {
        return Wa(e), e.updateQueue = null, a = Dc(e, i, a, l), Oc(t), i = rd(), t !== null && !Xt ? (fd(t, e, s), $e(t, e, s)) : (ht && i && td(e), e.flags |= 1, Jt(t, e, a, s), e.child)
    }

    function Er(t, e, a, i, l) {
        if (Wa(e), e.stateNode === null) {
            var s = gi,
                f = a.contextType;
            typeof f == "object" && f !== null && (s = Pt(f)), s = new a(i, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Ed, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = i, s.state = e.memoizedState, s.refs = {}, Bd(e), f = a.contextType, s.context = typeof f == "object" && f !== null ? Pt(f) : gi, s.state = e.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (wd(e, a, f, i), s.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (f = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), f !== s.state && Ed.enqueueReplaceState(s, s.state, null), El(e, i, s, l), wl(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = !0
        } else if (t === null) {
            s = e.stateNode;
            var m = e.memoizedProps,
                x = Fa(a, m);
            s.props = x;
            var A = s.context,
                L = a.contextType;
            f = gi, typeof L == "object" && L !== null && (f = Pt(L));
            var Y = a.getDerivedStateFromProps;
            L = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, L || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m || A !== f) && fr(e, s, i, f), ya = !1;
            var O = e.memoizedState;
            s.state = O, El(e, i, s, l), wl(), A = e.memoizedState, m || O !== A || ya ? (typeof Y == "function" && (wd(e, a, Y, i), A = e.memoizedState), (x = ya || rr(e, a, x, i, O, A, f)) ? (L || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = A), s.props = i, s.state = A, s.context = f, i = x) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = !1)
        } else {
            s = e.stateNode, Yd(t, e), f = e.memoizedProps, L = Fa(a, f), s.props = L, Y = e.pendingProps, O = s.context, A = a.contextType, x = gi, typeof A == "object" && A !== null && (x = Pt(A)), m = a.getDerivedStateFromProps, (A = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== Y || O !== x) && fr(e, s, i, x), ya = !1, O = e.memoizedState, s.state = O, El(e, i, s, l), wl();
            var M = e.memoizedState;
            f !== Y || O !== M || ya || t !== null && t.dependencies !== null && Bs(t.dependencies) ? (typeof m == "function" && (wd(e, a, m, i), M = e.memoizedState), (L = ya || rr(e, a, L, i, O, M, x) || t !== null && t.dependencies !== null && Bs(t.dependencies)) ? (A || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, M, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, M, x)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || f === t.memoizedProps && O === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && O === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = M), s.props = i, s.state = M, s.context = x, i = L) : (typeof s.componentDidUpdate != "function" || f === t.memoizedProps && O === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && O === t.memoizedState || (e.flags |= 1024), i = !1)
        }
        return s = i, jl(t, e), i = (e.flags & 128) !== 0, s || i ? (s = e.stateNode, a = i && typeof a.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && i ? (e.child = Va(e, t.child, null, l), e.child = Va(e, null, a, l)) : Jt(t, e, a, l), e.memoizedState = s.state, t = e.child) : t = $e(t, e, l), t
    }

    function Tr(t, e, a, i) {
        return rl(), e.flags |= 256, Jt(t, e, a, i), e.child
    }
    var Cd = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function Od(t) {
        return {
            baseLanes: t,
            cachePool: Cc()
        }
    }

    function Dd(t, e, a) {
        return t = t !== null ? t.childLanes & ~a : 0, e && (t |= we), t
    }

    function Rr(t, e, a) {
        var i = e.pendingProps,
            l = !1,
            s = (e.flags & 128) !== 0,
            f;
        if ((f = s) || (f = t !== null && t.memoizedState === null ? !1 : (Bt.current & 2) !== 0), f && (l = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
            if (ht) {
                if (l ? va(e) : ha(), ht) {
                    var m = Kt,
                        x;
                    if (x = m) {
                        t: {
                            for (x = m, m = ke; x.nodeType !== 8;) {
                                if (!m) {
                                    m = null;
                                    break t
                                }
                                if (x = De(x.nextSibling), x === null) {
                                    m = null;
                                    break t
                                }
                            }
                            m = x
                        }
                        m !== null ? (e.memoizedState = {
                            dehydrated: m,
                            treeContext: Ga !== null ? {
                                id: Ve,
                                overflow: Ze
                            } : null,
                            retryLane: 536870912
                        }, x = Ae(18, null, null, 0), x.stateNode = m, x.return = e, e.child = x, ee = e, Kt = null, x = !0) : x = !1
                    }
                    x || Qa(e)
                }
                if (m = e.memoizedState, m !== null && (m = m.dehydrated, m !== null)) return m.data === "$!" ? e.lanes = 16 : e.lanes = 536870912, null;
                Ke(e)
            }
            return m = i.children, i = i.fallback, l ? (ha(), l = e.mode, m = Md({
                mode: "hidden",
                children: m
            }, l), i = ti(i, l, a, null), m.return = e, i.return = e, m.sibling = i, e.child = m, l = e.child, l.memoizedState = Od(a), l.childLanes = Dd(t, f, a), e.memoizedState = Cd, i) : (va(e), _d(e, m))
        }
        if (x = t.memoizedState, x !== null && (m = x.dehydrated, m !== null)) {
            if (s) e.flags & 256 ? (va(e), e.flags &= -257, e = zd(t, e, a)) : e.memoizedState !== null ? (ha(), e.child = t.child, e.flags |= 128, e = null) : (ha(), l = i.fallback, m = e.mode, i = Md({
                mode: "visible",
                children: i.children
            }, m), l = ti(l, m, a, null), l.flags |= 2, i.return = e, l.return = e, i.sibling = l, e.child = i, Va(e, t.child, null, a), i = e.child, i.memoizedState = Od(a), i.childLanes = Dd(t, f, a), e.memoizedState = Cd, e = l);
            else if (va(e), m.data === "$!") {
                if (f = m.nextSibling && m.nextSibling.dataset, f) var A = f.dgst;
                f = A, i = Error(u(419)), i.stack = "", i.digest = f, fl({
                    value: i,
                    source: null,
                    stack: null
                }), e = zd(t, e, a)
            } else if (Xt || Nl(t, e, a, !1), f = (a & t.childLanes) !== 0, Xt || f) {
                if (f = wt, f !== null) {
                    if (i = a & -a, (i & 42) !== 0) i = 1;
                    else switch (i) {
                        case 2:
                            i = 1;
                            break;
                        case 8:
                            i = 4;
                            break;
                        case 32:
                            i = 16;
                            break;
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
                            i = 64;
                            break;
                        case 268435456:
                            i = 134217728;
                            break;
                        default:
                            i = 0
                    }
                    if (i = (i & (f.suspendedLanes | a)) !== 0 ? 0 : i, i !== 0 && i !== x.retryLane) throw x.retryLane = i, ma(t, i), ae(f, t, i), xr
                }
                m.data === "$?" || uo(), e = zd(t, e, a)
            } else m.data === "$?" ? (e.flags |= 128, e.child = t.child, e = Mv.bind(null, t), m._reactRetry = e, e = null) : (t = x.treeContext, Kt = De(m.nextSibling), ee = e, ht = !0, Ce = null, ke = !1, t !== null && (xe[ye++] = Ve, xe[ye++] = Ze, xe[ye++] = Ga, Ve = t.id, Ze = t.overflow, Ga = e), e = _d(e, i.children), e.flags |= 4096);
            return e
        }
        return l ? (ha(), l = i.fallback, m = e.mode, x = t.child, A = x.sibling, i = Ea(x, {
            mode: "hidden",
            children: i.children
        }), i.subtreeFlags = x.subtreeFlags & 31457280, A !== null ? l = Ea(A, l) : (l = ti(l, m, a, null), l.flags |= 2), l.return = e, i.return = e, i.sibling = l, e.child = i, i = l, l = e.child, m = t.child.memoizedState, m === null ? m = Od(a) : (x = m.cachePool, x !== null ? (A = Yt._currentValue, x = x.parent !== A ? {
            parent: A,
            pool: A
        } : x) : x = Cc(), m = {
            baseLanes: m.baseLanes | a,
            cachePool: x
        }), l.memoizedState = m, l.childLanes = Dd(t, f, a), e.memoizedState = Cd, i) : (va(e), a = t.child, t = a.sibling, a = Ea(a, {
            mode: "visible",
            children: i.children
        }), a.return = e, a.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = a, e.memoizedState = null, a)
    }

    function _d(t, e) {
        return e = Md({
            mode: "visible",
            children: e
        }, t.mode), e.return = t, t.child = e
    }

    function Md(t, e) {
        return tf(t, e, 0, null)
    }

    function zd(t, e, a) {
        return Va(e, t.child, null, a), t = _d(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
    }

    function Cr(t, e, a) {
        t.lanes |= e;
        var i = t.alternate;
        i !== null && (i.lanes |= e), qd(t.return, e, a)
    }

    function Ld(t, e, a, i, l) {
        var s = t.memoizedState;
        s === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: a,
            tailMode: l
        } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l)
    }

    function Or(t, e, a) {
        var i = e.pendingProps,
            l = i.revealOrder,
            s = i.tail;
        if (Jt(t, e, i.children, a), i = Bt.current, (i & 2) !== 0) i = i & 1 | 2, e.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && Cr(t, a, e);
                else if (t.tag === 19) Cr(t, a, e);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break t;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) break t;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            i &= 1
        }
        switch (Tt(Bt, i), l) {
            case "forwards":
                for (a = e.child, l = null; a !== null;) t = a.alternate, t !== null && Rs(t) === null && (l = a), a = a.sibling;
                a = l, a === null ? (l = e.child, e.child = null) : (l = a.sibling, a.sibling = null), Ld(e, !1, l, a, s);
                break;
            case "backwards":
                for (a = null, l = e.child, e.child = null; l !== null;) {
                    if (t = l.alternate, t !== null && Rs(t) === null) {
                        e.child = l;
                        break
                    }
                    t = l.sibling, l.sibling = a, a = l, l = t
                }
                Ld(e, !0, a, null, s);
                break;
            case "together":
                Ld(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function $e(t, e, a) {
        if (t !== null && (e.dependencies = t.dependencies), Ta |= e.lanes, (a & e.childLanes) === 0)
            if (t !== null) {
                if (Nl(t, e, a, !1), (a & e.childLanes) === 0) return null
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(u(153));
        if (e.child !== null) {
            for (t = e.child, a = Ea(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null;) t = t.sibling, a = a.sibling = Ea(t, t.pendingProps), a.return = e;
            a.sibling = null
        }
        return e.child
    }

    function Ud(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Bs(t)))
    }

    function xv(t, e, a) {
        switch (e.tag) {
            case 3:
                as(e, e.stateNode.containerInfo), xa(e, Yt, t.memoizedState.cache), rl();
                break;
            case 27:
            case 5:
                En(e);
                break;
            case 4:
                as(e, e.stateNode.containerInfo);
                break;
            case 10:
                xa(e, e.type, e.memoizedProps.value);
                break;
            case 13:
                var i = e.memoizedState;
                if (i !== null) return i.dehydrated !== null ? (va(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Rr(t, e, a) : (va(e), t = $e(t, e, a), t !== null ? t.sibling : null);
                va(e);
                break;
            case 19:
                var l = (t.flags & 128) !== 0;
                if (i = (a & e.childLanes) !== 0, i || (Nl(t, e, a, !1), i = (a & e.childLanes) !== 0), l) {
                    if (i) return Or(t, e, a);
                    e.flags |= 128
                }
                if (l = e.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Tt(Bt, Bt.current), i) break;
                return null;
            case 22:
            case 23:
                return e.lanes = 0, Nr(t, e, a);
            case 24:
                xa(e, Yt, t.memoizedState.cache)
        }
        return $e(t, e, a)
    }

    function Dr(t, e, a) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) Xt = !0;
            else {
                if (!Ud(t, a) && (e.flags & 128) === 0) return Xt = !1, xv(t, e, a);
                Xt = (t.flags & 131072) !== 0
            }
        else Xt = !1, ht && (e.flags & 1048576) !== 0 && vc(e, Ns, e.index);
        switch (e.lanes = 0, e.tag) {
            case 16:
                t: {
                    t = e.pendingProps;
                    var i = e.elementType,
                        l = i._init;
                    if (i = l(i._payload), e.type = i, typeof i == "function") Fd(i) ? (t = Fa(i, t), e.tag = 1, e = Er(null, e, i, t, a)) : (e.tag = 0, e = Rd(null, e, i, t, a));
                    else {
                        if (i != null) {
                            if (l = i.$$typeof, l === D) {
                                e.tag = 11, e = yr(null, e, i, t, a);
                                break t
                            } else if (l === U) {
                                e.tag = 14, e = Sr(null, e, i, t, a);
                                break t
                            }
                        }
                        throw e = I(i) || i, Error(u(306, e, ""))
                    }
                }
                return e;
            case 0:
                return Rd(t, e, e.type, e.pendingProps, a);
            case 1:
                return i = e.type, l = Fa(i, e.pendingProps), Er(t, e, i, l, a);
            case 3:
                t: {
                    if (as(e, e.stateNode.containerInfo), t === null) throw Error(u(387));
                    var s = e.pendingProps;l = e.memoizedState,
                    i = l.element,
                    Yd(t, e),
                    El(e, s, null, a);
                    var f = e.memoizedState;
                    if (s = f.cache, xa(e, Yt, s), s !== l.cache && Hd(e, [Yt], a, !0), wl(), s = f.element, l.isDehydrated)
                        if (l = {
                                element: s,
                                isDehydrated: !1,
                                cache: f.cache
                            }, e.updateQueue.baseState = l, e.memoizedState = l, e.flags & 256) {
                            e = Tr(t, e, s, a);
                            break t
                        } else if (s !== i) {
                        i = be(Error(u(424)), e), fl(i), e = Tr(t, e, s, a);
                        break t
                    } else
                        for (Kt = De(e.stateNode.containerInfo.firstChild), ee = e, ht = !0, Ce = null, ke = !0, a = Ac(e, null, s, a), e.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
                    else {
                        if (rl(), s === i) {
                            e = $e(t, e, a);
                            break t
                        }
                        Jt(t, e, s, a)
                    }
                    e = e.child
                }
                return e;
            case 26:
                return jl(t, e), t === null ? (a = Lf(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : ht || (a = e.type, t = e.pendingProps, i = an(ca.current).createElement(a), i[Ft] = e, i[se] = t, $t(i, a, t), Gt(i), e.stateNode = i) : e.memoizedState = Lf(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
            case 27:
                return En(e), t === null && ht && (i = e.stateNode = _f(e.type, e.pendingProps, ca.current), ee = e, ke = !0, Kt = De(i.firstChild)), i = e.pendingProps.children, t !== null || ht ? Jt(t, e, i, a) : e.child = Va(e, null, i, a), jl(t, e), e.child;
            case 5:
                return t === null && ht && ((l = i = Kt) && (i = $v(i, e.type, e.pendingProps, ke), i !== null ? (e.stateNode = i, ee = e, Kt = De(i.firstChild), ke = !1, l = !0) : l = !1), l || Qa(e)), En(e), l = e.type, s = e.pendingProps, f = t !== null ? t.memoizedProps : null, i = s.children, No(l, s) ? i = null : f !== null && No(l, f) && (e.flags |= 32), e.memoizedState !== null && (l = cd(t, e, fv, null, null, a), Yl._currentValue = l), jl(t, e), Jt(t, e, i, a), e.child;
            case 6:
                return t === null && ht && ((t = a = Kt) && (a = Fv(a, e.pendingProps, ke), a !== null ? (e.stateNode = a, ee = e, Kt = null, t = !0) : t = !1), t || Qa(e)), null;
            case 13:
                return Rr(t, e, a);
            case 4:
                return as(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = Va(e, null, i, a) : Jt(t, e, i, a), e.child;
            case 11:
                return yr(t, e, e.type, e.pendingProps, a);
            case 7:
                return Jt(t, e, e.pendingProps, a), e.child;
            case 8:
                return Jt(t, e, e.pendingProps.children, a), e.child;
            case 12:
                return Jt(t, e, e.pendingProps.children, a), e.child;
            case 10:
                return i = e.pendingProps, xa(e, e.type, i.value), Jt(t, e, i.children, a), e.child;
            case 9:
                return l = e.type._context, i = e.pendingProps.children, Wa(e), l = Pt(l), i = i(l), e.flags |= 1, Jt(t, e, i, a), e.child;
            case 14:
                return Sr(t, e, e.type, e.pendingProps, a);
            case 15:
                return jr(t, e, e.type, e.pendingProps, a);
            case 19:
                return Or(t, e, a);
            case 22:
                return Nr(t, e, a);
            case 24:
                return Wa(e), i = Pt(Yt), t === null ? (l = od(), l === null && (l = wt, s = nd(), l.pooledCache = s, s.refCount++, s !== null && (l.pooledCacheLanes |= a), l = s), e.memoizedState = {
                    parent: i,
                    cache: l
                }, Bd(e), xa(e, Yt, l)) : ((t.lanes & a) !== 0 && (Yd(t, e), El(e, null, null, a), wl()), l = t.memoizedState, s = e.memoizedState, l.parent !== i ? (l = {
                    parent: i,
                    cache: i
                }, e.memoizedState = l, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = l), xa(e, Yt, i)) : (i = s.cache, xa(e, Yt, i), i !== l.cache && Hd(e, [Yt], a, !0))), Jt(t, e, e.pendingProps.children, a), e.child;
            case 29:
                throw e.pendingProps
        }
        throw Error(u(156, e.tag))
    }
    var kd = bt(null),
        Pa = null,
        Fe = null;

    function xa(t, e, a) {
        Tt(kd, e._currentValue), e._currentValue = a
    }

    function Pe(t) {
        t._currentValue = kd.current, Ut(kd)
    }

    function qd(t, e, a) {
        for (; t !== null;) {
            var i = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === a) break;
            t = t.return
        }
    }

    function Hd(t, e, a, i) {
        var l = t.child;
        for (l !== null && (l.return = t); l !== null;) {
            var s = l.dependencies;
            if (s !== null) {
                var f = l.child;
                s = s.firstContext;
                t: for (; s !== null;) {
                    var m = s;
                    s = l;
                    for (var x = 0; x < e.length; x++)
                        if (m.context === e[x]) {
                            s.lanes |= a, m = s.alternate, m !== null && (m.lanes |= a), qd(s.return, a, t), i || (f = null);
                            break t
                        }
                    s = m.next
                }
            } else if (l.tag === 18) {
                if (f = l.return, f === null) throw Error(u(341));
                f.lanes |= a, s = f.alternate, s !== null && (s.lanes |= a), qd(f, a, t), f = null
            } else f = l.child;
            if (f !== null) f.return = l;
            else
                for (f = l; f !== null;) {
                    if (f === t) {
                        f = null;
                        break
                    }
                    if (l = f.sibling, l !== null) {
                        l.return = f.return, f = l;
                        break
                    }
                    f = f.return
                }
            l = f
        }
    }

    function Nl(t, e, a, i) {
        t = null;
        for (var l = e, s = !1; l !== null;) {
            if (!s) {
                if ((l.flags & 524288) !== 0) s = !0;
                else if ((l.flags & 262144) !== 0) break
            }
            if (l.tag === 10) {
                var f = l.alternate;
                if (f === null) throw Error(u(387));
                if (f = f.memoizedProps, f !== null) {
                    var m = l.type;
                    ce(l.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m])
                }
            } else if (l === es.current) {
                if (f = l.alternate, f === null) throw Error(u(387));
                f.memoizedState.memoizedState !== l.memoizedState.memoizedState && (t !== null ? t.push(Yl) : t = [Yl])
            }
            l = l.return
        }
        t !== null && Hd(e, t, a, i), e.flags |= 262144
    }

    function Bs(t) {
        for (t = t.firstContext; t !== null;) {
            if (!ce(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function Wa(t) {
        Pa = t, Fe = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function Pt(t) {
        return _r(Pa, t)
    }

    function Ys(t, e) {
        return Pa === null && Wa(t), _r(t, e)
    }

    function _r(t, e) {
        var a = e._currentValue;
        if (e = {
                context: e,
                memoizedValue: a,
                next: null
            }, Fe === null) {
            if (t === null) throw Error(u(308));
            Fe = e, t.dependencies = {
                lanes: 0,
                firstContext: e
            }, t.flags |= 524288
        } else Fe = Fe.next = e;
        return a
    }
    var ya = !1;

    function Bd(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Yd(t, e) {
        t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function Sa(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function ja(t, e, a) {
        var i = t.updateQueue;
        if (i === null) return null;
        if (i = i.shared, (Ot & 2) !== 0) {
            var l = i.pending;
            return l === null ? e.next = e : (e.next = l.next, l.next = e), i.pending = e, e = Ss(t), pc(t, null, a), e
        }
        return ys(t, i, e, a), Ss(t)
    }

    function Al(t, e, a) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194176) !== 0)) {
            var i = e.lanes;
            i &= t.pendingLanes, a |= i, e.lanes = a, Su(t, a)
        }
    }

    function Gd(t, e) {
        var a = t.updateQueue,
            i = t.alternate;
        if (i !== null && (i = i.updateQueue, a === i)) {
            var l = null,
                s = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var f = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    s === null ? l = s = f : s = s.next = f, a = a.next
                } while (a !== null);
                s === null ? l = s = e : s = s.next = e
            } else l = s = e;
            a = {
                baseState: i.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: s,
                shared: i.shared,
                callbacks: i.callbacks
            }, t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e
    }
    var Xd = !1;

    function wl() {
        if (Xd) {
            var t = Ni;
            if (t !== null) throw t
        }
    }

    function El(t, e, a, i) {
        Xd = !1;
        var l = t.updateQueue;
        ya = !1;
        var s = l.firstBaseUpdate,
            f = l.lastBaseUpdate,
            m = l.shared.pending;
        if (m !== null) {
            l.shared.pending = null;
            var x = m,
                A = x.next;
            x.next = null, f === null ? s = A : f.next = A, f = x;
            var L = t.alternate;
            L !== null && (L = L.updateQueue, m = L.lastBaseUpdate, m !== f && (m === null ? L.firstBaseUpdate = A : m.next = A, L.lastBaseUpdate = x))
        }
        if (s !== null) {
            var Y = l.baseState;
            f = 0, L = A = x = null, m = s;
            do {
                var O = m.lane & -536870913,
                    M = O !== m.lane;
                if (M ? (vt & O) === O : (i & O) === O) {
                    O !== 0 && O === ji && (Xd = !0), L !== null && (L = L.next = {
                        lane: 0,
                        tag: m.tag,
                        payload: m.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var P = t,
                            dt = m;O = e;
                        var Mt = a;
                        switch (dt.tag) {
                            case 1:
                                if (P = dt.payload, typeof P == "function") {
                                    Y = P.call(Mt, Y, O);
                                    break t
                                }
                                Y = P;
                                break t;
                            case 3:
                                P.flags = P.flags & -65537 | 128;
                            case 0:
                                if (P = dt.payload, O = typeof P == "function" ? P.call(Mt, Y, O) : P, O == null) break t;
                                Y = tt({}, Y, O);
                                break t;
                            case 2:
                                ya = !0
                        }
                    }
                    O = m.callback, O !== null && (t.flags |= 64, M && (t.flags |= 8192), M = l.callbacks, M === null ? l.callbacks = [O] : M.push(O))
                } else M = {
                    lane: O,
                    tag: m.tag,
                    payload: m.payload,
                    callback: m.callback,
                    next: null
                }, L === null ? (A = L = M, x = Y) : L = L.next = M, f |= O;
                if (m = m.next, m === null) {
                    if (m = l.shared.pending, m === null) break;
                    M = m, m = M.next, M.next = null, l.lastBaseUpdate = M, l.shared.pending = null
                }
            } while (!0);
            L === null && (x = Y), l.baseState = x, l.firstBaseUpdate = A, l.lastBaseUpdate = L, s === null && (l.shared.lanes = 0), Ta |= f, t.lanes = f, t.memoizedState = Y
        }
    }

    function Mr(t, e) {
        if (typeof t != "function") throw Error(u(191, t));
        t.call(e)
    }

    function zr(t, e) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null, t = 0; t < a.length; t++) Mr(a[t], e)
    }

    function Tl(t, e) {
        try {
            var a = e.updateQueue,
                i = a !== null ? a.lastEffect : null;
            if (i !== null) {
                var l = i.next;
                a = l;
                do {
                    if ((a.tag & t) === t) {
                        i = void 0;
                        var s = a.create,
                            f = a.inst;
                        i = s(), f.destroy = i
                    }
                    a = a.next
                } while (a !== l)
            }
        } catch (m) {
            jt(e, e.return, m)
        }
    }

    function Na(t, e, a) {
        try {
            var i = e.updateQueue,
                l = i !== null ? i.lastEffect : null;
            if (l !== null) {
                var s = l.next;
                i = s;
                do {
                    if ((i.tag & t) === t) {
                        var f = i.inst,
                            m = f.destroy;
                        if (m !== void 0) {
                            f.destroy = void 0, l = e;
                            var x = a;
                            try {
                                m()
                            } catch (A) {
                                jt(l, x, A)
                            }
                        }
                    }
                    i = i.next
                } while (i !== s)
            }
        } catch (A) {
            jt(e, e.return, A)
        }
    }

    function Lr(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var a = t.stateNode;
            try {
                zr(e, a)
            } catch (i) {
                jt(t, t.return, i)
            }
        }
    }

    function Ur(t, e, a) {
        a.props = Fa(t.type, t.memoizedProps), a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (i) {
            jt(t, e, i)
        }
    }

    function Ia(t, e) {
        try {
            var a = t.ref;
            if (a !== null) {
                var i = t.stateNode;
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = i;
                        break;
                    default:
                        l = i
                }
                typeof a == "function" ? t.refCleanup = a(l) : a.current = l
            }
        } catch (s) {
            jt(t, e, s)
        }
    }

    function re(t, e) {
        var a = t.ref,
            i = t.refCleanup;
        if (a !== null)
            if (typeof i == "function") try {
                i()
            } catch (l) {
                jt(t, e, l)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (l) {
                jt(t, e, l)
            } else a.current = null
    }

    function kr(t) {
        var e = t.type,
            a = t.memoizedProps,
            i = t.stateNode;
        try {
            t: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && i.focus();
                    break t;
                case "img":
                    a.src ? i.src = a.src : a.srcSet && (i.srcset = a.srcSet)
            }
        }
        catch (l) {
            jt(t, t.return, l)
        }
    }

    function qr(t, e, a) {
        try {
            var i = t.stateNode;
            Qv(i, t.type, a, e), i[se] = e
        } catch (l) {
            jt(t, t.return, l)
        }
    }

    function Hr(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    }

    function Qd(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || Hr(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;) {
                if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function Vd(t, e, a) {
        var i = t.tag;
        if (i === 5 || i === 6) t = t.stateNode, e ? a.nodeType === 8 ? a.parentNode.insertBefore(t, e) : a.insertBefore(t, e) : (a.nodeType === 8 ? (e = a.parentNode, e.insertBefore(t, a)) : (e = a, e.appendChild(t)), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = en));
        else if (i !== 4 && i !== 27 && (t = t.child, t !== null))
            for (Vd(t, e, a), t = t.sibling; t !== null;) Vd(t, e, a), t = t.sibling
    }

    function Gs(t, e, a) {
        var i = t.tag;
        if (i === 5 || i === 6) t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
        else if (i !== 4 && i !== 27 && (t = t.child, t !== null))
            for (Gs(t, e, a), t = t.sibling; t !== null;) Gs(t, e, a), t = t.sibling
    }
    var We = !1,
        Dt = !1,
        Zd = !1,
        Br = typeof WeakSet == "function" ? WeakSet : Set,
        Qt = null,
        Yr = !1;

    function yv(t, e) {
        if (t = t.containerInfo, So = un, t = lc(t), Jn(t)) {
            if ("selectionStart" in t) var a = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                a = (a = t.ownerDocument) && a.defaultView || window;
                var i = a.getSelection && a.getSelection();
                if (i && i.rangeCount !== 0) {
                    a = i.anchorNode;
                    var l = i.anchorOffset,
                        s = i.focusNode;
                    i = i.focusOffset;
                    try {
                        a.nodeType, s.nodeType
                    } catch {
                        a = null;
                        break t
                    }
                    var f = 0,
                        m = -1,
                        x = -1,
                        A = 0,
                        L = 0,
                        Y = t,
                        O = null;
                    e: for (;;) {
                        for (var M; Y !== a || l !== 0 && Y.nodeType !== 3 || (m = f + l), Y !== s || i !== 0 && Y.nodeType !== 3 || (x = f + i), Y.nodeType === 3 && (f += Y.nodeValue.length), (M = Y.firstChild) !== null;) O = Y, Y = M;
                        for (;;) {
                            if (Y === t) break e;
                            if (O === a && ++A === l && (m = f), O === s && ++L === i && (x = f), (M = Y.nextSibling) !== null) break;
                            Y = O, O = Y.parentNode
                        }
                        Y = M
                    }
                    a = m === -1 || x === -1 ? null : {
                        start: m,
                        end: x
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (jo = {
                focusedElem: t,
                selectionRange: a
            }, un = !1, Qt = e; Qt !== null;)
            if (e = Qt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Qt = t;
            else
                for (; Qt !== null;) {
                    switch (e = Qt, s = e.alternate, t = e.flags, e.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && s !== null) {
                                t = void 0, a = e, l = s.memoizedProps, s = s.memoizedState, i = a.stateNode;
                                try {
                                    var P = Fa(a.type, l, a.elementType === a.type);
                                    t = i.getSnapshotBeforeUpdate(P, s), i.__reactInternalSnapshotBeforeUpdate = t
                                } catch (dt) {
                                    jt(a, a.return, dt)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9) Eo(t);
                                else if (a === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Eo(t);
                                        break;
                                    default:
                                        t.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(u(163))
                    }
                    if (t = e.sibling, t !== null) {
                        t.return = e.return, Qt = t;
                        break
                    }
                    Qt = e.return
                }
        return P = Yr, Yr = !1, P
    }

    function Gr(t, e, a) {
        var i = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ta(t, a), i & 4 && Tl(5, a);
                break;
            case 1:
                if (ta(t, a), i & 4)
                    if (t = a.stateNode, e === null) try {
                        t.componentDidMount()
                    } catch (m) {
                        jt(a, a.return, m)
                    } else {
                        var l = Fa(a.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (m) {
                            jt(a, a.return, m)
                        }
                    }
                i & 64 && Lr(a), i & 512 && Ia(a, a.return);
                break;
            case 3:
                if (ta(t, a), i & 64 && (i = a.updateQueue, i !== null)) {
                    if (t = null, a.child !== null) switch (a.child.tag) {
                        case 27:
                        case 5:
                            t = a.child.stateNode;
                            break;
                        case 1:
                            t = a.child.stateNode
                    }
                    try {
                        zr(i, t)
                    } catch (m) {
                        jt(a, a.return, m)
                    }
                }
                break;
            case 26:
                ta(t, a), i & 512 && Ia(a, a.return);
                break;
            case 27:
            case 5:
                ta(t, a), e === null && i & 4 && kr(a), i & 512 && Ia(a, a.return);
                break;
            case 12:
                ta(t, a);
                break;
            case 13:
                ta(t, a), i & 4 && Vr(t, a);
                break;
            case 22:
                if (l = a.memoizedState !== null || We, !l) {
                    e = e !== null && e.memoizedState !== null || Dt;
                    var s = We,
                        f = Dt;
                    We = l, (Dt = e) && !f ? Aa(t, a, (a.subtreeFlags & 8772) !== 0) : ta(t, a), We = s, Dt = f
                }
                i & 512 && (a.memoizedProps.mode === "manual" ? Ia(a, a.return) : re(a, a.return));
                break;
            default:
                ta(t, a)
        }
    }

    function Xr(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null, Xr(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && _n(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var Ht = null,
        fe = !1;

    function Ie(t, e, a) {
        for (a = a.child; a !== null;) Qr(t, e, a), a = a.sibling
    }

    function Qr(t, e, a) {
        if (oe && typeof oe.onCommitFiberUnmount == "function") try {
            oe.onCommitFiberUnmount(Fi, a)
        } catch {}
        switch (a.tag) {
            case 26:
                Dt || re(a, e), Ie(t, e, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                break;
            case 27:
                Dt || re(a, e);
                var i = Ht,
                    l = fe;
                for (Ht = a.stateNode, Ie(t, e, a), a = a.stateNode, e = a.attributes; e.length;) a.removeAttributeNode(e[0]);
                _n(a), Ht = i, fe = l;
                break;
            case 5:
                Dt || re(a, e);
            case 6:
                l = Ht;
                var s = fe;
                if (Ht = null, Ie(t, e, a), Ht = l, fe = s, Ht !== null)
                    if (fe) try {
                        t = Ht, i = a.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(i) : t.removeChild(i)
                    } catch (f) {
                        jt(a, e, f)
                    } else try {
                        Ht.removeChild(a.stateNode)
                    } catch (f) {
                        jt(a, e, f)
                    }
                break;
            case 18:
                Ht !== null && (fe ? (e = Ht, a = a.stateNode, e.nodeType === 8 ? wo(e.parentNode, a) : e.nodeType === 1 && wo(e, a), Vl(e)) : wo(Ht, a.stateNode));
                break;
            case 4:
                i = Ht, l = fe, Ht = a.stateNode.containerInfo, fe = !0, Ie(t, e, a), Ht = i, fe = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Dt || Na(2, a, e), Dt || Na(4, a, e), Ie(t, e, a);
                break;
            case 1:
                Dt || (re(a, e), i = a.stateNode, typeof i.componentWillUnmount == "function" && Ur(a, e, i)), Ie(t, e, a);
                break;
            case 21:
                Ie(t, e, a);
                break;
            case 22:
                Dt || re(a, e), Dt = (i = Dt) || a.memoizedState !== null, Ie(t, e, a), Dt = i;
                break;
            default:
                Ie(t, e, a)
        }
    }

    function Vr(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            Vl(t)
        } catch (a) {
            jt(e, e.return, a)
        }
    }

    function Sv(t) {
        switch (t.tag) {
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new Br), e;
            case 22:
                return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Br), e;
            default:
                throw Error(u(435, t.tag))
        }
    }

    function Kd(t, e) {
        var a = Sv(t);
        e.forEach(function(i) {
            var l = zv.bind(null, t, i);
            a.has(i) || (a.add(i), i.then(l, l))
        })
    }

    function je(t, e) {
        var a = e.deletions;
        if (a !== null)
            for (var i = 0; i < a.length; i++) {
                var l = a[i],
                    s = t,
                    f = e,
                    m = f;
                t: for (; m !== null;) {
                    switch (m.tag) {
                        case 27:
                        case 5:
                            Ht = m.stateNode, fe = !1;
                            break t;
                        case 3:
                            Ht = m.stateNode.containerInfo, fe = !0;
                            break t;
                        case 4:
                            Ht = m.stateNode.containerInfo, fe = !0;
                            break t
                    }
                    m = m.return
                }
                if (Ht === null) throw Error(u(160));
                Qr(s, f, l), Ht = null, fe = !1, s = l.alternate, s !== null && (s.return = null), l.return = null
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null;) Zr(e, t), e = e.sibling
    }
    var Oe = null;

    function Zr(t, e) {
        var a = t.alternate,
            i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                je(e, t), Ne(t), i & 4 && (Na(3, t, t.return), Tl(3, t), Na(5, t, t.return));
                break;
            case 1:
                je(e, t), Ne(t), i & 512 && (Dt || a === null || re(a, a.return)), i & 64 && We && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
                break;
            case 26:
                var l = Oe;
                if (je(e, t), Ne(t), i & 512 && (Dt || a === null || re(a, a.return)), i & 4) {
                    var s = a !== null ? a.memoizedState : null;
                    if (i = t.memoizedState, a === null)
                        if (i === null)
                            if (t.stateNode === null) {
                                t: {
                                    i = t.type,
                                    a = t.memoizedProps,
                                    l = l.ownerDocument || l;e: switch (i) {
                                        case "title":
                                            s = l.getElementsByTagName("title")[0], (!s || s[Ii] || s[Ft] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = l.createElement(i), l.head.insertBefore(s, l.querySelector("head > title"))), $t(s, i, a), s[Ft] = t, Gt(s), i = s;
                                            break t;
                                        case "link":
                                            var f = qf("link", "href", l).get(i + (a.href || ""));
                                            if (f) {
                                                for (var m = 0; m < f.length; m++)
                                                    if (s = f[m], s.getAttribute("href") === (a.href == null ? null : a.href) && s.getAttribute("rel") === (a.rel == null ? null : a.rel) && s.getAttribute("title") === (a.title == null ? null : a.title) && s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        f.splice(m, 1);
                                                        break e
                                                    }
                                            }
                                            s = l.createElement(i), $t(s, i, a), l.head.appendChild(s);
                                            break;
                                        case "meta":
                                            if (f = qf("meta", "content", l).get(i + (a.content || ""))) {
                                                for (m = 0; m < f.length; m++)
                                                    if (s = f[m], s.getAttribute("content") === (a.content == null ? null : "" + a.content) && s.getAttribute("name") === (a.name == null ? null : a.name) && s.getAttribute("property") === (a.property == null ? null : a.property) && s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && s.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        f.splice(m, 1);
                                                        break e
                                                    }
                                            }
                                            s = l.createElement(i), $t(s, i, a), l.head.appendChild(s);
                                            break;
                                        default:
                                            throw Error(u(468, i))
                                    }
                                    s[Ft] = t,
                                    Gt(s),
                                    i = s
                                }
                                t.stateNode = i
                            }
                    else Hf(l, t.type, t.stateNode);
                    else t.stateNode = kf(l, i, t.memoizedProps);
                    else s !== i ? (s === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : s.count--, i === null ? Hf(l, t.type, t.stateNode) : kf(l, i, t.memoizedProps)) : i === null && t.stateNode !== null && qr(t, t.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                if (i & 4 && t.alternate === null) {
                    l = t.stateNode, s = t.memoizedProps;
                    try {
                        for (var x = l.firstChild; x;) {
                            var A = x.nextSibling,
                                L = x.nodeName;
                            x[Ii] || L === "HEAD" || L === "BODY" || L === "SCRIPT" || L === "STYLE" || L === "LINK" && x.rel.toLowerCase() === "stylesheet" || l.removeChild(x), x = A
                        }
                        for (var Y = t.type, O = l.attributes; O.length;) l.removeAttributeNode(O[0]);
                        $t(l, Y, s), l[Ft] = t, l[se] = s
                    } catch (P) {
                        jt(t, t.return, P)
                    }
                }
            case 5:
                if (je(e, t), Ne(t), i & 512 && (Dt || a === null || re(a, a.return)), t.flags & 32) {
                    l = t.stateNode;
                    try {
                        ci(l, "")
                    } catch (P) {
                        jt(t, t.return, P)
                    }
                }
                i & 4 && t.stateNode != null && (l = t.memoizedProps, qr(t, l, a !== null ? a.memoizedProps : l)), i & 1024 && (Zd = !0);
                break;
            case 6:
                if (je(e, t), Ne(t), i & 4) {
                    if (t.stateNode === null) throw Error(u(162));
                    i = t.memoizedProps, a = t.stateNode;
                    try {
                        a.nodeValue = i
                    } catch (P) {
                        jt(t, t.return, P)
                    }
                }
                break;
            case 3:
                if (nn = null, l = Oe, Oe = ln(e.containerInfo), je(e, t), Oe = l, Ne(t), i & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    Vl(e.containerInfo)
                } catch (P) {
                    jt(t, t.return, P)
                }
                Zd && (Zd = !1, Kr(t));
                break;
            case 4:
                i = Oe, Oe = ln(t.stateNode.containerInfo), je(e, t), Ne(t), Oe = i;
                break;
            case 12:
                je(e, t), Ne(t);
                break;
            case 13:
                je(e, t), Ne(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ao = Ue()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, Kd(t, i)));
                break;
            case 22:
                if (i & 512 && (Dt || a === null || re(a, a.return)), x = t.memoizedState !== null, A = a !== null && a.memoizedState !== null, L = We, Y = Dt, We = L || x, Dt = Y || A, je(e, t), Dt = Y, We = L, Ne(t), e = t.stateNode, e._current = t, e._visibility &= -3, e._visibility |= e._pendingVisibility & 2, i & 8192 && (e._visibility = x ? e._visibility & -2 : e._visibility | 1, x && (e = We || Dt, a === null || A || e || Ti(t)), t.memoizedProps === null || t.memoizedProps.mode !== "manual")) t: for (a = null, e = t;;) {
                    if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
                        if (a === null) {
                            A = a = e;
                            try {
                                if (l = A.stateNode, x) s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                                else {
                                    f = A.stateNode, m = A.memoizedProps.style;
                                    var M = m != null && m.hasOwnProperty("display") ? m.display : null;
                                    f.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim()
                                }
                            } catch (P) {
                                jt(A, A.return, P)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (a === null) {
                            A = e;
                            try {
                                A.stateNode.nodeValue = x ? "" : A.memoizedProps
                            } catch (P) {
                                jt(A, A.return, P)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break t;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) break t;
                        a === e && (a = null), e = e.return
                    }
                    a === e && (a = null), e.sibling.return = e.return, e = e.sibling
                }
                i & 4 && (i = t.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, Kd(t, a))));
                break;
            case 19:
                je(e, t), Ne(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, Kd(t, i)));
                break;
            case 21:
                break;
            default:
                je(e, t), Ne(t)
        }
    }

    function Ne(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                if (t.tag !== 27) {
                    t: {
                        for (var a = t.return; a !== null;) {
                            if (Hr(a)) {
                                var i = a;
                                break t
                            }
                            a = a.return
                        }
                        throw Error(u(160))
                    }
                    switch (i.tag) {
                        case 27:
                            var l = i.stateNode,
                                s = Qd(t);
                            Gs(t, s, l);
                            break;
                        case 5:
                            var f = i.stateNode;
                            i.flags & 32 && (ci(f, ""), i.flags &= -33);
                            var m = Qd(t);
                            Gs(t, m, f);
                            break;
                        case 3:
                        case 4:
                            var x = i.stateNode.containerInfo,
                                A = Qd(t);
                            Vd(t, A, x);
                            break;
                        default:
                            throw Error(u(161))
                    }
                }
            } catch (L) {
                jt(t, t.return, L)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }

    function Kr(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var e = t;
                Kr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
            }
    }

    function ta(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null;) Gr(t, e.alternate, e), e = e.sibling
    }

    function Ti(t) {
        for (t = t.child; t !== null;) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Na(4, e, e.return), Ti(e);
                    break;
                case 1:
                    re(e, e.return);
                    var a = e.stateNode;
                    typeof a.componentWillUnmount == "function" && Ur(e, e.return, a), Ti(e);
                    break;
                case 26:
                case 27:
                case 5:
                    re(e, e.return), Ti(e);
                    break;
                case 22:
                    re(e, e.return), e.memoizedState === null && Ti(e);
                    break;
                default:
                    Ti(e)
            }
            t = t.sibling
        }
    }

    function Aa(t, e, a) {
        for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
            var i = e.alternate,
                l = t,
                s = e,
                f = s.flags;
            switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    Aa(l, s, a), Tl(4, s);
                    break;
                case 1:
                    if (Aa(l, s, a), i = s, l = i.stateNode, typeof l.componentDidMount == "function") try {
                        l.componentDidMount()
                    } catch (A) {
                        jt(i, i.return, A)
                    }
                    if (i = s, l = i.updateQueue, l !== null) {
                        var m = i.stateNode;
                        try {
                            var x = l.shared.hiddenCallbacks;
                            if (x !== null)
                                for (l.shared.hiddenCallbacks = null, l = 0; l < x.length; l++) Mr(x[l], m)
                        } catch (A) {
                            jt(i, i.return, A)
                        }
                    }
                    a && f & 64 && Lr(s), Ia(s, s.return);
                    break;
                case 26:
                case 27:
                case 5:
                    Aa(l, s, a), a && i === null && f & 4 && kr(s), Ia(s, s.return);
                    break;
                case 12:
                    Aa(l, s, a);
                    break;
                case 13:
                    Aa(l, s, a), a && f & 4 && Vr(l, s);
                    break;
                case 22:
                    s.memoizedState === null && Aa(l, s, a), Ia(s, s.return);
                    break;
                default:
                    Aa(l, s, a)
            }
            e = e.sibling
        }
    }

    function Jd(t, e) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && gl(a))
    }

    function $d(t, e) {
        t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && gl(t))
    }

    function wa(t, e, a, i) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) Jr(t, e, a, i), e = e.sibling
    }

    function Jr(t, e, a, i) {
        var l = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                wa(t, e, a, i), l & 2048 && Tl(9, e);
                break;
            case 3:
                wa(t, e, a, i), l & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && gl(t)));
                break;
            case 12:
                if (l & 2048) {
                    wa(t, e, a, i), t = e.stateNode;
                    try {
                        var s = e.memoizedProps,
                            f = s.id,
                            m = s.onPostCommit;
                        typeof m == "function" && m(f, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (x) {
                        jt(e, e.return, x)
                    }
                } else wa(t, e, a, i);
                break;
            case 23:
                break;
            case 22:
                s = e.stateNode, e.memoizedState !== null ? s._visibility & 4 ? wa(t, e, a, i) : Rl(t, e) : s._visibility & 4 ? wa(t, e, a, i) : (s._visibility |= 4, Ri(t, e, a, i, (e.subtreeFlags & 10256) !== 0)), l & 2048 && Jd(e.alternate, e);
                break;
            case 24:
                wa(t, e, a, i), l & 2048 && $d(e.alternate, e);
                break;
            default:
                wa(t, e, a, i)
        }
    }

    function Ri(t, e, a, i, l) {
        for (l = l && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null;) {
            var s = t,
                f = e,
                m = a,
                x = i,
                A = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    Ri(s, f, m, x, l), Tl(8, f);
                    break;
                case 23:
                    break;
                case 22:
                    var L = f.stateNode;
                    f.memoizedState !== null ? L._visibility & 4 ? Ri(s, f, m, x, l) : Rl(s, f) : (L._visibility |= 4, Ri(s, f, m, x, l)), l && A & 2048 && Jd(f.alternate, f);
                    break;
                case 24:
                    Ri(s, f, m, x, l), l && A & 2048 && $d(f.alternate, f);
                    break;
                default:
                    Ri(s, f, m, x, l)
            }
            e = e.sibling
        }
    }

    function Rl(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) {
                var a = t,
                    i = e,
                    l = i.flags;
                switch (i.tag) {
                    case 22:
                        Rl(a, i), l & 2048 && Jd(i.alternate, i);
                        break;
                    case 24:
                        Rl(a, i), l & 2048 && $d(i.alternate, i);
                        break;
                    default:
                        Rl(a, i)
                }
                e = e.sibling
            }
    }
    var Cl = 8192;

    function Ci(t) {
        if (t.subtreeFlags & Cl)
            for (t = t.child; t !== null;) $r(t), t = t.sibling
    }

    function $r(t) {
        switch (t.tag) {
            case 26:
                Ci(t), t.flags & Cl && t.memoizedState !== null && uh(Oe, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                Ci(t);
                break;
            case 3:
            case 4:
                var e = Oe;
                Oe = ln(t.stateNode.containerInfo), Ci(t), Oe = e;
                break;
            case 22:
                t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Cl, Cl = 16777216, Ci(t), Cl = e) : Ci(t));
                break;
            default:
                Ci(t)
        }
    }

    function Fr(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child, t !== null)) {
            e.child = null;
            do e = t.sibling, t.sibling = null, t = e; while (t !== null)
        }
    }

    function Ol(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var i = e[a];
                    Qt = i, Wr(i, t)
                }
            Fr(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Pr(t), t = t.sibling
    }

    function Pr(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Ol(t), t.flags & 2048 && Na(9, t, t.return);
                break;
            case 3:
                Ol(t);
                break;
            case 12:
                Ol(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -5, Xs(t)) : Ol(t);
                break;
            default:
                Ol(t)
        }
    }

    function Xs(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var i = e[a];
                    Qt = i, Wr(i, t)
                }
            Fr(t)
        }
        for (t = t.child; t !== null;) {
            switch (e = t, e.tag) {
                case 0:
                case 11:
                case 15:
                    Na(8, e, e.return), Xs(e);
                    break;
                case 22:
                    a = e.stateNode, a._visibility & 4 && (a._visibility &= -5, Xs(e));
                    break;
                default:
                    Xs(e)
            }
            t = t.sibling
        }
    }

    function Wr(t, e) {
        for (; Qt !== null;) {
            var a = Qt;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    Na(8, a, e);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var i = a.memoizedState.cachePool.pool;
                        i != null && i.refCount++
                    }
                    break;
                case 24:
                    gl(a.memoizedState.cache)
            }
            if (i = a.child, i !== null) i.return = a, Qt = i;
            else t: for (a = t; Qt !== null;) {
                i = Qt;
                var l = i.sibling,
                    s = i.return;
                if (Xr(i), i === a) {
                    Qt = null;
                    break t
                }
                if (l !== null) {
                    l.return = s, Qt = l;
                    break t
                }
                Qt = s
            }
        }
    }

    function jv(t, e, a, i) {
        this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Ae(t, e, a, i) {
        return new jv(t, e, a, i)
    }

    function Fd(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function Ea(t, e) {
        var a = t.alternate;
        return a === null ? (a = Ae(t.tag, e, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 31457280, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a
    }

    function Ir(t, e) {
        t.flags &= 31457282;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }), t
    }

    function Qs(t, e, a, i, l, s) {
        var f = 0;
        if (i = t, typeof t == "function") Fd(t) && (f = 1);
        else if (typeof t == "string") f = dh(t, a, Le.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case v:
                return ti(a.children, l, s, e);
            case h:
                f = 8, l |= 24;
                break;
            case N:
                return t = Ae(12, a, e, l | 2), t.elementType = N, t.lanes = s, t;
            case H:
                return t = Ae(13, a, e, l), t.elementType = H, t.lanes = s, t;
            case G:
                return t = Ae(19, a, e, l), t.elementType = G, t.lanes = s, t;
            case w:
                return tf(a, l, s, e);
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case T:
                    case z:
                        f = 10;
                        break t;
                    case R:
                        f = 9;
                        break t;
                    case D:
                        f = 11;
                        break t;
                    case U:
                        f = 14;
                        break t;
                    case k:
                        f = 16, i = null;
                        break t
                }
                f = 29, a = Error(u(130, t === null ? "null" : typeof t, "")), i = null
        }
        return e = Ae(f, a, e, l), e.elementType = t, e.type = i, e.lanes = s, e
    }

    function ti(t, e, a, i) {
        return t = Ae(7, t, i, e), t.lanes = a, t
    }

    function tf(t, e, a, i) {
        t = Ae(22, t, i, e), t.elementType = w, t.lanes = a;
        var l = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function() {
                var s = l._current;
                if (s === null) throw Error(u(456));
                if ((l._pendingVisibility & 2) === 0) {
                    var f = ma(s, 2);
                    f !== null && (l._pendingVisibility |= 2, ae(f, s, 2))
                }
            },
            attach: function() {
                var s = l._current;
                if (s === null) throw Error(u(456));
                if ((l._pendingVisibility & 2) !== 0) {
                    var f = ma(s, 2);
                    f !== null && (l._pendingVisibility &= -3, ae(f, s, 2))
                }
            }
        };
        return t.stateNode = l, t
    }

    function Pd(t, e, a) {
        return t = Ae(6, t, null, e), t.lanes = a, t
    }

    function Wd(t, e, a) {
        return e = Ae(4, t.children !== null ? t.children : [], t.key, e), e.lanes = a, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }

    function ea(t) {
        t.flags |= 4
    }

    function ef(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !Bf(e)) {
            if (e = Se.current, e !== null && ((vt & 4194176) === vt ? qe !== null : (vt & 62914560) !== vt && (vt & 536870912) === 0 || e !== qe)) throw ml = id, bc;
            t.flags |= 8192
        }
    }

    function Vs(t, e) {
        e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? xu() : 536870912, t.lanes |= e, Di |= e)
    }

    function Dl(t, e) {
        if (!ht) switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var a = null; e !== null;) e.alternate !== null && (a = e), e = e.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var i = null; a !== null;) a.alternate !== null && (i = a), a = a.sibling;
                i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
        }
    }

    function Ct(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            a = 0,
            i = 0;
        if (e)
            for (var l = t.child; l !== null;) a |= l.lanes | l.childLanes, i |= l.subtreeFlags & 31457280, i |= l.flags & 31457280, l.return = t, l = l.sibling;
        else
            for (l = t.child; l !== null;) a |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = t, l = l.sibling;
        return t.subtreeFlags |= i, t.childLanes = a, e
    }

    function Nv(t, e, a) {
        var i = e.pendingProps;
        switch (ed(e), e.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ct(e), null;
            case 1:
                return Ct(e), null;
            case 3:
                return a = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), Pe(Yt), li(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (cl(e) ? ea(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ce !== null && (no(Ce), Ce = null))), Ct(e), null;
            case 26:
                return a = e.memoizedState, t === null ? (ea(e), a !== null ? (Ct(e), ef(e, a)) : (Ct(e), e.flags &= -16777217)) : a ? a !== t.memoizedState ? (ea(e), Ct(e), ef(e, a)) : (Ct(e), e.flags &= -16777217) : (t.memoizedProps !== i && ea(e), Ct(e), e.flags &= -16777217), null;
            case 27:
                is(e), a = ca.current;
                var l = e.type;
                if (t !== null && e.stateNode != null) t.memoizedProps !== i && ea(e);
                else {
                    if (!i) {
                        if (e.stateNode === null) throw Error(u(166));
                        return Ct(e), null
                    }
                    t = Le.current, cl(e) ? hc(e) : (t = _f(l, i, a), e.stateNode = t, ea(e))
                }
                return Ct(e), null;
            case 5:
                if (is(e), a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && ea(e);
                else {
                    if (!i) {
                        if (e.stateNode === null) throw Error(u(166));
                        return Ct(e), null
                    }
                    if (t = Le.current, cl(e)) hc(e);
                    else {
                        switch (l = an(ca.current), t) {
                            case 1:
                                t = l.createElementNS("http://www.w3.org/2000/svg", a);
                                break;
                            case 2:
                                t = l.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                break;
                            default:
                                switch (a) {
                                    case "svg":
                                        t = l.createElementNS("http://www.w3.org/2000/svg", a);
                                        break;
                                    case "math":
                                        t = l.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                        break;
                                    case "script":
                                        t = l.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                                        break;
                                    case "select":
                                        t = typeof i.is == "string" ? l.createElement("select", {
                                            is: i.is
                                        }) : l.createElement("select"), i.multiple ? t.multiple = !0 : i.size && (t.size = i.size);
                                        break;
                                    default:
                                        t = typeof i.is == "string" ? l.createElement(a, {
                                            is: i.is
                                        }) : l.createElement(a)
                                }
                        }
                        t[Ft] = e, t[se] = i;
                        t: for (l = e.child; l !== null;) {
                            if (l.tag === 5 || l.tag === 6) t.appendChild(l.stateNode);
                            else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                                l.child.return = l, l = l.child;
                                continue
                            }
                            if (l === e) break t;
                            for (; l.sibling === null;) {
                                if (l.return === null || l.return === e) break t;
                                l = l.return
                            }
                            l.sibling.return = l.return, l = l.sibling
                        }
                        e.stateNode = t;
                        t: switch ($t(t, a, i), a) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                t = !!i.autoFocus;
                                break t;
                            case "img":
                                t = !0;
                                break t;
                            default:
                                t = !1
                        }
                        t && ea(e)
                    }
                }
                return Ct(e), e.flags &= -16777217, null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== i && ea(e);
                else {
                    if (typeof i != "string" && e.stateNode === null) throw Error(u(166));
                    if (t = ca.current, cl(e)) {
                        if (t = e.stateNode, a = e.memoizedProps, i = null, l = ee, l !== null) switch (l.tag) {
                            case 27:
                            case 5:
                                i = l.memoizedProps
                        }
                        t[Ft] = e, t = !!(t.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Ef(t.nodeValue, a)), t || Qa(e)
                    } else t = an(t).createTextNode(i), t[Ft] = e, e.stateNode = t
                }
                return Ct(e), null;
            case 13:
                if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (l = cl(e), i !== null && i.dehydrated !== null) {
                        if (t === null) {
                            if (!l) throw Error(u(318));
                            if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(u(317));
                            l[Ft] = e
                        } else rl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        Ct(e), l = !1
                    } else Ce !== null && (no(Ce), Ce = null), l = !0;
                    if (!l) return e.flags & 256 ? (Ke(e), e) : (Ke(e), null)
                }
                if (Ke(e), (e.flags & 128) !== 0) return e.lanes = a, e;
                if (a = i !== null, t = t !== null && t.memoizedState !== null, a) {
                    i = e.child, l = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (l = i.alternate.memoizedState.cachePool.pool);
                    var s = null;
                    i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== l && (i.flags |= 2048)
                }
                return a !== t && a && (e.child.flags |= 8192), Vs(e, e.updateQueue), Ct(e), null;
            case 4:
                return li(), t === null && bo(e.stateNode.containerInfo), Ct(e), null;
            case 10:
                return Pe(e.type), Ct(e), null;
            case 19:
                if (Ut(Bt), l = e.memoizedState, l === null) return Ct(e), null;
                if (i = (e.flags & 128) !== 0, s = l.rendering, s === null)
                    if (i) Dl(l, !1);
                    else {
                        if (_t !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = e.child; t !== null;) {
                                if (s = Rs(t), s !== null) {
                                    for (e.flags |= 128, Dl(l, !1), t = s.updateQueue, e.updateQueue = t, Vs(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null;) Ir(a, t), a = a.sibling;
                                    return Tt(Bt, Bt.current & 1 | 2), e.child
                                }
                                t = t.sibling
                            }
                        l.tail !== null && Ue() > Zs && (e.flags |= 128, i = !0, Dl(l, !1), e.lanes = 4194304)
                    }
                else {
                    if (!i)
                        if (t = Rs(s), t !== null) {
                            if (e.flags |= 128, i = !0, t = t.updateQueue, e.updateQueue = t, Vs(e, t), Dl(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !ht) return Ct(e), null
                        } else 2 * Ue() - l.renderingStartTime > Zs && a !== 536870912 && (e.flags |= 128, i = !0, Dl(l, !1), e.lanes = 4194304);
                    l.isBackwards ? (s.sibling = e.child, e.child = s) : (t = l.last, t !== null ? t.sibling = s : e.child = s, l.last = s)
                }
                return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ue(), e.sibling = null, t = Bt.current, Tt(Bt, i ? t & 1 | 2 : t & 1), e) : (Ct(e), null);
            case 22:
            case 23:
                return Ke(e), sd(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ct(e), a = e.updateQueue, a !== null && Vs(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== a && (e.flags |= 2048), t !== null && Ut(Za), null;
            case 24:
                return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Pe(Yt), Ct(e), null;
            case 25:
                return null
        }
        throw Error(u(156, e.tag))
    }

    function Av(t, e) {
        switch (ed(e), e.tag) {
            case 1:
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 3:
                return Pe(Yt), li(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
            case 26:
            case 27:
            case 5:
                return is(e), null;
            case 13:
                if (Ke(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                    if (e.alternate === null) throw Error(u(340));
                    rl()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 19:
                return Ut(Bt), null;
            case 4:
                return li(), null;
            case 10:
                return Pe(e.type), null;
            case 22:
            case 23:
                return Ke(e), sd(), t !== null && Ut(Za), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 24:
                return Pe(Yt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function af(t, e) {
        switch (ed(e), e.tag) {
            case 3:
                Pe(Yt), li();
                break;
            case 26:
            case 27:
            case 5:
                is(e);
                break;
            case 4:
                li();
                break;
            case 13:
                Ke(e);
                break;
            case 19:
                Ut(Bt);
                break;
            case 10:
                Pe(e.type);
                break;
            case 22:
            case 23:
                Ke(e), sd(), t !== null && Ut(Za);
                break;
            case 24:
                Pe(Yt)
        }
    }
    var wv = {
            getCacheForType: function(t) {
                var e = Pt(Yt),
                    a = e.data.get(t);
                return a === void 0 && (a = t(), e.data.set(t, a)), a
            }
        },
        Ev = typeof WeakMap == "function" ? WeakMap : Map,
        Ot = 0,
        wt = null,
        ft = null,
        vt = 0,
        Et = 0,
        pe = null,
        aa = !1,
        Oi = !1,
        Id = !1,
        ia = 0,
        _t = 0,
        Ta = 0,
        ei = 0,
        to = 0,
        we = 0,
        Di = 0,
        _l = null,
        Be = null,
        eo = !1,
        ao = 0,
        Zs = 1 / 0,
        Ks = null,
        Ra = null,
        Js = !1,
        ai = null,
        Ml = 0,
        io = 0,
        lo = null,
        zl = 0,
        so = null;

    function me() {
        if ((Ot & 2) !== 0 && vt !== 0) return vt & -vt;
        if (V.T !== null) {
            var t = ji;
            return t !== 0 ? t : mo()
        }
        return Nu()
    }

    function lf() {
        we === 0 && (we = (vt & 536870912) === 0 || ht ? bu() : 536870912);
        var t = Se.current;
        return t !== null && (t.flags |= 32), we
    }

    function ae(t, e, a) {
        (t === wt && Et === 2 || t.cancelPendingCommit !== null) && (_i(t, 0), la(t, vt, we, !1)), Wi(t, a), ((Ot & 2) === 0 || t !== wt) && (t === wt && ((Ot & 2) === 0 && (ei |= a), _t === 4 && la(t, vt, we, !1)), Ye(t))
    }

    function sf(t, e, a) {
        if ((Ot & 6) !== 0) throw Error(u(327));
        var i = !a && (e & 60) === 0 && (e & t.expiredLanes) === 0 || Pi(t, e),
            l = i ? Cv(t, e) : co(t, e, !0),
            s = i;
        do {
            if (l === 0) {
                Oi && !i && la(t, e, 0, !1);
                break
            } else if (l === 6) la(t, e, 0, !aa);
            else {
                if (a = t.current.alternate, s && !Tv(a)) {
                    l = co(t, e, !1), s = !1;
                    continue
                }
                if (l === 2) {
                    if (s = e, t.errorRecoveryDisabledLanes & s) var f = 0;
                    else f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        e = f;
                        t: {
                            var m = t;l = _l;
                            var x = m.current.memoizedState.isDehydrated;
                            if (x && (_i(m, f).flags |= 256), f = co(m, f, !1), f !== 2) {
                                if (Id && !x) {
                                    m.errorRecoveryDisabledLanes |= s, ei |= s, l = 4;
                                    break t
                                }
                                s = Be, Be = l, s !== null && no(s)
                            }
                            l = f
                        }
                        if (s = !1, l !== 2) continue
                    }
                }
                if (l === 1) {
                    _i(t, 0), la(t, e, 0, !0);
                    break
                }
                t: {
                    switch (i = t, l) {
                        case 0:
                        case 1:
                            throw Error(u(345));
                        case 4:
                            if ((e & 4194176) === e) {
                                la(i, e, we, !aa);
                                break t
                            }
                            break;
                        case 2:
                            Be = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(u(329))
                    }
                    if (i.finishedWork = a, i.finishedLanes = e, (e & 62914560) === e && (s = ao + 300 - Ue(), 10 < s)) {
                        if (la(i, e, we, !aa), ds(i, 0) !== 0) break t;
                        i.timeoutHandle = Cf(nf.bind(null, i, a, Be, Ks, eo, e, we, ei, Di, aa, 2, -0, 0), s);
                        break t
                    }
                    nf(i, a, Be, Ks, eo, e, we, ei, Di, aa, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ye(t)
    }

    function no(t) {
        Be === null ? Be = t : Be.push.apply(Be, t)
    }

    function nf(t, e, a, i, l, s, f, m, x, A, L, Y, O) {
        var M = e.subtreeFlags;
        if ((M & 8192 || (M & 16785408) === 16785408) && (Bl = {
                stylesheets: null,
                count: 0,
                unsuspend: oh
            }, $r(e), e = ch(), e !== null)) {
            t.cancelPendingCommit = e(pf.bind(null, t, a, i, l, f, m, x, 1, Y, O)), la(t, s, f, !A);
            return
        }
        pf(t, a, i, l, f, m, x, L, Y, O)
    }

    function Tv(t) {
        for (var e = t;;) {
            var a = e.tag;
            if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var i = 0; i < a.length; i++) {
                    var l = a[i],
                        s = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!ce(s(), l)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = e.child, e.subtreeFlags & 16384 && a !== null) a.return = e, e = a;
            else {
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return !0
    }

    function la(t, e, a, i) {
        e &= ~to, e &= ~ei, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
        for (var l = e; 0 < l;) {
            var s = 31 - ue(l),
                f = 1 << s;
            i[s] = -1, l &= ~f
        }
        a !== 0 && yu(t, a, e)
    }

    function $s() {
        return (Ot & 6) === 0 ? (Ll(0), !1) : !0
    }

    function oo() {
        if (ft !== null) {
            if (Et === 0) var t = ft.return;
            else t = ft, Fe = Pa = null, pd(t), yi = null, vl = 0, t = ft;
            for (; t !== null;) af(t.alternate, t), t = t.return;
            ft = null
        }
    }

    function _i(t, e) {
        t.finishedWork = null, t.finishedLanes = 0;
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1, Zv(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), oo(), wt = t, ft = a = Ea(t.current, null), vt = e, Et = 0, pe = null, aa = !1, Oi = Pi(t, e), Id = !1, Di = we = to = ei = Ta = _t = 0, Be = _l = null, eo = !1, (e & 8) !== 0 && (e |= e & 32);
        var i = t.entangledLanes;
        if (i !== 0)
            for (t = t.entanglements, i &= e; 0 < i;) {
                var l = 31 - ue(i),
                    s = 1 << l;
                e |= t[l], i &= ~s
            }
        return ia = e, xs(), a
    }

    function df(t, e) {
        ct = null, V.H = He, e === pl ? (e = Sc(), Et = 3) : e === bc ? (e = Sc(), Et = 4) : Et = e === xr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, pe = e, ft === null && (_t = 1, Hs(t, be(e, t.current)))
    }

    function of () {
        var t = V.H;
        return V.H = He, t === null ? He : t
    }

    function uf() {
        var t = V.A;
        return V.A = wv, t
    }

    function uo() {
        _t = 4, aa || (vt & 4194176) !== vt && Se.current !== null || (Oi = !0), (Ta & 134217727) === 0 && (ei & 134217727) === 0 || wt === null || la(wt, vt, we, !1)
    }

    function co(t, e, a) {
        var i = Ot;
        Ot |= 2;
        var l = of (),
            s = uf();
        (wt !== t || vt !== e) && (Ks = null, _i(t, e)), e = !1;
        var f = _t;
        t: do try {
                if (Et !== 0 && ft !== null) {
                    var m = ft,
                        x = pe;
                    switch (Et) {
                        case 8:
                            oo(), f = 6;
                            break t;
                        case 3:
                        case 2:
                        case 6:
                            Se.current === null && (e = !0);
                            var A = Et;
                            if (Et = 0, pe = null, Mi(t, m, x, A), a && Oi) {
                                f = 0;
                                break t
                            }
                            break;
                        default:
                            A = Et, Et = 0, pe = null, Mi(t, m, x, A)
                    }
                }
                Rv(), f = _t;
                break
            } catch (L) {
                df(t, L)
            }
            while (!0);
            return e && t.shellSuspendCounter++, Fe = Pa = null, Ot = i, V.H = l, V.A = s, ft === null && (wt = null, vt = 0, xs()), f
    }

    function Rv() {
        for (; ft !== null;) cf(ft)
    }

    function Cv(t, e) {
        var a = Ot;
        Ot |= 2;
        var i = of (),
            l = uf();
        wt !== t || vt !== e ? (Ks = null, Zs = Ue() + 500, _i(t, e)) : Oi = Pi(t, e);
        t: do try {
                if (Et !== 0 && ft !== null) {
                    e = ft;
                    var s = pe;
                    e: switch (Et) {
                        case 1:
                            Et = 0, pe = null, Mi(t, e, s, 1);
                            break;
                        case 2:
                            if (xc(s)) {
                                Et = 0, pe = null, rf(e);
                                break
                            }
                            e = function() {
                                Et === 2 && wt === t && (Et = 7), Ye(t)
                            }, s.then(e, e);
                            break t;
                        case 3:
                            Et = 7;
                            break t;
                        case 4:
                            Et = 5;
                            break t;
                        case 7:
                            xc(s) ? (Et = 0, pe = null, rf(e)) : (Et = 0, pe = null, Mi(t, e, s, 7));
                            break;
                        case 5:
                            var f = null;
                            switch (ft.tag) {
                                case 26:
                                    f = ft.memoizedState;
                                case 5:
                                case 27:
                                    var m = ft;
                                    if (!f || Bf(f)) {
                                        Et = 0, pe = null;
                                        var x = m.sibling;
                                        if (x !== null) ft = x;
                                        else {
                                            var A = m.return;
                                            A !== null ? (ft = A, Fs(A)) : ft = null
                                        }
                                        break e
                                    }
                            }
                            Et = 0, pe = null, Mi(t, e, s, 5);
                            break;
                        case 6:
                            Et = 0, pe = null, Mi(t, e, s, 6);
                            break;
                        case 8:
                            oo(), _t = 6;
                            break t;
                        default:
                            throw Error(u(462))
                    }
                }
                Ov();
                break
            } catch (L) {
                df(t, L)
            }
            while (!0);
            return Fe = Pa = null, V.H = i, V.A = l, Ot = a, ft !== null ? 0 : (wt = null, vt = 0, xs(), _t)
    }

    function Ov() {
        for (; ft !== null && !Wp();) cf(ft)
    }

    function cf(t) {
        var e = Dr(t.alternate, t, ia);
        t.memoizedProps = t.pendingProps, e === null ? Fs(t) : ft = e
    }

    function rf(t) {
        var e = t,
            a = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = wr(a, e, e.pendingProps, e.type, void 0, vt);
                break;
            case 11:
                e = wr(a, e, e.pendingProps, e.type.render, e.ref, vt);
                break;
            case 5:
                pd(e);
            default:
                af(a, e), e = ft = Ir(e, ia), e = Dr(a, e, ia)
        }
        t.memoizedProps = t.pendingProps, e === null ? Fs(t) : ft = e
    }

    function Mi(t, e, a, i) {
        Fe = Pa = null, pd(e), yi = null, vl = 0;
        var l = e.return;
        try {
            if (bv(t, l, e, a, vt)) {
                _t = 1, Hs(t, be(a, t.current)), ft = null;
                return
            }
        } catch (s) {
            if (l !== null) throw ft = l, s;
            _t = 1, Hs(t, be(a, t.current)), ft = null;
            return
        }
        e.flags & 32768 ? (ht || i === 1 ? t = !0 : Oi || (vt & 536870912) !== 0 ? t = !1 : (aa = t = !0, (i === 2 || i === 3 || i === 6) && (i = Se.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ff(e, t)) : Fs(e)
    }

    function Fs(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                ff(e, aa);
                return
            }
            t = e.return;
            var a = Nv(e.alternate, e, ia);
            if (a !== null) {
                ft = a;
                return
            }
            if (e = e.sibling, e !== null) {
                ft = e;
                return
            }
            ft = e = t
        } while (e !== null);
        _t === 0 && (_t = 5)
    }

    function ff(t, e) {
        do {
            var a = Av(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767, ft = a;
                return
            }
            if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
                ft = t;
                return
            }
            ft = t = a
        } while (t !== null);
        _t = 6, ft = null
    }

    function pf(t, e, a, i, l, s, f, m, x, A) {
        var L = V.T,
            Y = $.p;
        try {
            $.p = 2, V.T = null, Dv(t, e, a, i, Y, l, s, f, m, x, A)
        } finally {
            V.T = L, $.p = Y
        }
    }

    function Dv(t, e, a, i, l, s, f, m) {
        do zi(); while (ai !== null);
        if ((Ot & 6) !== 0) throw Error(u(327));
        var x = t.finishedWork;
        if (i = t.finishedLanes, x === null) return null;
        if (t.finishedWork = null, t.finishedLanes = 0, x === t.current) throw Error(u(177));
        t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
        var A = x.lanes | x.childLanes;
        if (A |= Wn, um(t, i, A, s, f, m), t === wt && (ft = wt = null, vt = 0), (x.subtreeFlags & 10256) === 0 && (x.flags & 10256) === 0 || Js || (Js = !0, io = A, lo = a, Lv(ls, function() {
                return zi(), null
            })), a = (x.flags & 15990) !== 0, (x.subtreeFlags & 15990) !== 0 || a ? (a = V.T, V.T = null, s = $.p, $.p = 2, f = Ot, Ot |= 4, yv(t, x), Zr(x, t), ev(jo, t.containerInfo), un = !!So, jo = So = null, t.current = x, Gr(t, x.alternate, x), Ip(), Ot = f, $.p = s, V.T = a) : t.current = x, Js ? (Js = !1, ai = t, Ml = i) : mf(t, A), A = t.pendingLanes, A === 0 && (Ra = null), lm(x.stateNode), Ye(t), e !== null)
            for (l = t.onRecoverableError, x = 0; x < e.length; x++) A = e[x], l(A.value, {
                componentStack: A.stack
            });
        return (Ml & 3) !== 0 && zi(), A = t.pendingLanes, (i & 4194218) !== 0 && (A & 42) !== 0 ? t === so ? zl++ : (zl = 0, so = t) : zl = 0, Ll(0), null
    }

    function mf(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, gl(e)))
    }

    function zi() {
        if (ai !== null) {
            var t = ai,
                e = io;
            io = 0;
            var a = ju(Ml),
                i = V.T,
                l = $.p;
            try {
                if ($.p = 32 > a ? 32 : a, V.T = null, ai === null) var s = !1;
                else {
                    a = lo, lo = null;
                    var f = ai,
                        m = Ml;
                    if (ai = null, Ml = 0, (Ot & 6) !== 0) throw Error(u(331));
                    var x = Ot;
                    if (Ot |= 4, Pr(f.current), Jr(f, f.current, m, a), Ot = x, Ll(0, !1), oe && typeof oe.onPostCommitFiberRoot == "function") try {
                        oe.onPostCommitFiberRoot(Fi, f)
                    } catch {}
                    s = !0
                }
                return s
            } finally {
                $.p = l, V.T = i, mf(t, e)
            }
        }
        return !1
    }

    function vf(t, e, a) {
        e = be(a, e), e = Td(t.stateNode, e, 2), t = ja(t, e, 2), t !== null && (Wi(t, 2), Ye(t))
    }

    function jt(t, e, a) {
        if (t.tag === 3) vf(t, t, a);
        else
            for (; e !== null;) {
                if (e.tag === 3) {
                    vf(e, t, a);
                    break
                } else if (e.tag === 1) {
                    var i = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Ra === null || !Ra.has(i))) {
                        t = be(a, t), a = gr(2), i = ja(e, a, 2), i !== null && (br(a, i, e, t), Wi(i, 2), Ye(i));
                        break
                    }
                }
                e = e.return
            }
    }

    function ro(t, e, a) {
        var i = t.pingCache;
        if (i === null) {
            i = t.pingCache = new Ev;
            var l = new Set;
            i.set(e, l)
        } else l = i.get(e), l === void 0 && (l = new Set, i.set(e, l));
        l.has(a) || (Id = !0, l.add(a), t = _v.bind(null, t, e, a), e.then(t, t))
    }

    function _v(t, e, a) {
        var i = t.pingCache;
        i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, wt === t && (vt & a) === a && (_t === 4 || _t === 3 && (vt & 62914560) === vt && 300 > Ue() - ao ? (Ot & 2) === 0 && _i(t, 0) : to |= a, Di === vt && (Di = 0)), Ye(t)
    }

    function hf(t, e) {
        e === 0 && (e = xu()), t = ma(t, e), t !== null && (Wi(t, e), Ye(t))
    }

    function Mv(t) {
        var e = t.memoizedState,
            a = 0;
        e !== null && (a = e.retryLane), hf(t, a)
    }

    function zv(t, e) {
        var a = 0;
        switch (t.tag) {
            case 13:
                var i = t.stateNode,
                    l = t.memoizedState;
                l !== null && (a = l.retryLane);
                break;
            case 19:
                i = t.stateNode;
                break;
            case 22:
                i = t.stateNode._retryCache;
                break;
            default:
                throw Error(u(314))
        }
        i !== null && i.delete(e), hf(t, a)
    }

    function Lv(t, e) {
        return Rn(t, e)
    }
    var Ps = null,
        Li = null,
        fo = !1,
        Ws = !1,
        po = !1,
        ii = 0;

    function Ye(t) {
        t !== Li && t.next === null && (Li === null ? Ps = Li = t : Li = Li.next = t), Ws = !0, fo || (fo = !0, kv(Uv))
    }

    function Ll(t, e) {
        if (!po && Ws) {
            po = !0;
            do
                for (var a = !1, i = Ps; i !== null;) {
                    if (t !== 0) {
                        var l = i.pendingLanes;
                        if (l === 0) var s = 0;
                        else {
                            var f = i.suspendedLanes,
                                m = i.pingedLanes;
                            s = (1 << 31 - ue(42 | t) + 1) - 1, s &= l & ~(f & ~m), s = s & 201326677 ? s & 201326677 | 1 : s ? s | 2 : 0
                        }
                        s !== 0 && (a = !0, xf(i, s))
                    } else s = vt, s = ds(i, i === wt ? s : 0), (s & 3) === 0 || Pi(i, s) || (a = !0, xf(i, s));
                    i = i.next
                }
            while (a);
            po = !1
        }
    }

    function Uv() {
        Ws = fo = !1;
        var t = 0;
        ii !== 0 && (Vv() && (t = ii), ii = 0);
        for (var e = Ue(), a = null, i = Ps; i !== null;) {
            var l = i.next,
                s = gf(i, e);
            s === 0 ? (i.next = null, a === null ? Ps = l : a.next = l, l === null && (Li = a)) : (a = i, (t !== 0 || (s & 3) !== 0) && (Ws = !0)), i = l
        }
        Ll(t)
    }

    function gf(t, e) {
        for (var a = t.suspendedLanes, i = t.pingedLanes, l = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s;) {
            var f = 31 - ue(s),
                m = 1 << f,
                x = l[f];
            x === -1 ? ((m & a) === 0 || (m & i) !== 0) && (l[f] = om(m, e)) : x <= e && (t.expiredLanes |= m), s &= ~m
        }
        if (e = wt, a = vt, a = ds(t, t === e ? a : 0), i = t.callbackNode, a === 0 || t === e && Et === 2 || t.cancelPendingCommit !== null) return i !== null && i !== null && Cn(i), t.callbackNode = null, t.callbackPriority = 0;
        if ((a & 3) === 0 || Pi(t, a)) {
            if (e = a & -a, e === t.callbackPriority) return e;
            switch (i !== null && Cn(i), ju(a)) {
                case 2:
                case 8:
                    a = hu;
                    break;
                case 32:
                    a = ls;
                    break;
                case 268435456:
                    a = gu;
                    break;
                default:
                    a = ls
            }
            return i = bf.bind(null, t), a = Rn(a, i), t.callbackPriority = e, t.callbackNode = a, e
        }
        return i !== null && i !== null && Cn(i), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function bf(t, e) {
        var a = t.callbackNode;
        if (zi() && t.callbackNode !== a) return null;
        var i = vt;
        return i = ds(t, t === wt ? i : 0), i === 0 ? null : (sf(t, i, e), gf(t, Ue()), t.callbackNode != null && t.callbackNode === a ? bf.bind(null, t) : null)
    }

    function xf(t, e) {
        if (zi()) return null;
        sf(t, e, !0)
    }

    function kv(t) {
        Kv(function() {
            (Ot & 6) !== 0 ? Rn(vu, t) : t()
        })
    }

    function mo() {
        return ii === 0 && (ii = bu()), ii
    }

    function yf(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : fs("" + t)
    }

    function Sf(t, e) {
        var a = e.ownerDocument.createElement("input");
        return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t
    }

    function qv(t, e, a, i, l) {
        if (e === "submit" && a && a.stateNode === l) {
            var s = yf((l[se] || null).action),
                f = i.submitter;
            f && (e = (e = f[se] || null) ? yf(e.formAction) : f.getAttribute("formAction"), e !== null && (s = e, f = null));
            var m = new hs("action", "action", null, i, l);
            t.push({
                event: m,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (ii !== 0) {
                                var x = f ? Sf(l, f) : new FormData(l);
                                jd(a, {
                                    pending: !0,
                                    data: x,
                                    method: l.method,
                                    action: s
                                }, null, x)
                            }
                        } else typeof s == "function" && (m.preventDefault(), x = f ? Sf(l, f) : new FormData(l), jd(a, {
                            pending: !0,
                            data: x,
                            method: l.method,
                            action: s
                        }, s, x))
                    },
                    currentTarget: l
                }]
            })
        }
    }
    for (var vo = 0; vo < fc.length; vo++) {
        var ho = fc[vo],
            Hv = ho.toLowerCase(),
            Bv = ho[0].toUpperCase() + ho.slice(1);
        Re(Hv, "on" + Bv)
    }
    Re(dc, "onAnimationEnd"), Re(oc, "onAnimationIteration"), Re(uc, "onAnimationStart"), Re("dblclick", "onDoubleClick"), Re("focusin", "onFocus"), Re("focusout", "onBlur"), Re(iv, "onTransitionRun"), Re(lv, "onTransitionStart"), Re(sv, "onTransitionCancel"), Re(cc, "onTransitionEnd"), oi("onMouseEnter", ["mouseout", "mouseover"]), oi("onMouseLeave", ["mouseout", "mouseover"]), oi("onPointerEnter", ["pointerout", "pointerover"]), oi("onPointerLeave", ["pointerout", "pointerover"]), qa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), qa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), qa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), qa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), qa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), qa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ul = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Yv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));

    function jf(t, e) {
        e = (e & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var i = t[a],
                l = i.event;
            i = i.listeners;
            t: {
                var s = void 0;
                if (e)
                    for (var f = i.length - 1; 0 <= f; f--) {
                        var m = i[f],
                            x = m.instance,
                            A = m.currentTarget;
                        if (m = m.listener, x !== s && l.isPropagationStopped()) break t;
                        s = m, l.currentTarget = A;
                        try {
                            s(l)
                        } catch (L) {
                            qs(L)
                        }
                        l.currentTarget = null, s = x
                    } else
                        for (f = 0; f < i.length; f++) {
                            if (m = i[f], x = m.instance, A = m.currentTarget, m = m.listener, x !== s && l.isPropagationStopped()) break t;
                            s = m, l.currentTarget = A;
                            try {
                                s(l)
                            } catch (L) {
                                qs(L)
                            }
                            l.currentTarget = null, s = x
                        }
            }
        }
    }

    function pt(t, e) {
        var a = e[Dn];
        a === void 0 && (a = e[Dn] = new Set);
        var i = t + "__bubble";
        a.has(i) || (Nf(e, t, 2, !1), a.add(i))
    }

    function go(t, e, a) {
        var i = 0;
        e && (i |= 4), Nf(a, t, i, e)
    }
    var Is = "_reactListening" + Math.random().toString(36).slice(2);

    function bo(t) {
        if (!t[Is]) {
            t[Is] = !0, wu.forEach(function(a) {
                a !== "selectionchange" && (Yv.has(a) || go(a, !1, t), go(a, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Is] || (e[Is] = !0, go("selectionchange", !1, e))
        }
    }

    function Nf(t, e, a, i) {
        switch (Zf(e)) {
            case 2:
                var l = ph;
                break;
            case 8:
                l = mh;
                break;
            default:
                l = Do
        }
        a = l.bind(null, e, a, t), l = void 0, !Hn || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (l = !0), i ? l !== void 0 ? t.addEventListener(e, a, {
            capture: !0,
            passive: l
        }) : t.addEventListener(e, a, !0) : l !== void 0 ? t.addEventListener(e, a, {
            passive: l
        }) : t.addEventListener(e, a, !1)
    }

    function xo(t, e, a, i, l) {
        var s = i;
        if ((e & 1) === 0 && (e & 2) === 0 && i !== null) t: for (;;) {
            if (i === null) return;
            var f = i.tag;
            if (f === 3 || f === 4) {
                var m = i.stateNode.containerInfo;
                if (m === l || m.nodeType === 8 && m.parentNode === l) break;
                if (f === 4)
                    for (f = i.return; f !== null;) {
                        var x = f.tag;
                        if ((x === 3 || x === 4) && (x = f.stateNode.containerInfo, x === l || x.nodeType === 8 && x.parentNode === l)) return;
                        f = f.return
                    }
                for (; m !== null;) {
                    if (f = ka(m), f === null) return;
                    if (x = f.tag, x === 5 || x === 6 || x === 26 || x === 27) {
                        i = s = f;
                        continue t
                    }
                    m = m.parentNode
                }
            }
            i = i.return
        }
        ku(function() {
            var A = s,
                L = kn(a),
                Y = [];
            t: {
                var O = rc.get(t);
                if (O !== void 0) {
                    var M = hs,
                        P = t;
                    switch (t) {
                        case "keypress":
                            if (ms(a) === 0) break t;
                        case "keydown":
                        case "keyup":
                            M = zm;
                            break;
                        case "focusin":
                            P = "focus", M = Xn;
                            break;
                        case "focusout":
                            P = "blur", M = Xn;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            M = Xn;
                            break;
                        case "click":
                            if (a.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            M = Bu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            M = jm;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            M = km;
                            break;
                        case dc:
                        case oc:
                        case uc:
                            M = wm;
                            break;
                        case cc:
                            M = Hm;
                            break;
                        case "scroll":
                        case "scrollend":
                            M = ym;
                            break;
                        case "wheel":
                            M = Ym;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            M = Tm;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            M = Gu;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            M = Xm
                    }
                    var dt = (e & 4) !== 0,
                        Mt = !dt && (t === "scroll" || t === "scrollend"),
                        E = dt ? O !== null ? O + "Capture" : null : O;
                    dt = [];
                    for (var j = A, C; j !== null;) {
                        var q = j;
                        if (C = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || C === null || E === null || (q = el(j, E), q != null && dt.push(kl(j, q, C))), Mt) break;
                        j = j.return
                    }
                    0 < dt.length && (O = new M(O, P, null, a, L), Y.push({
                        event: O,
                        listeners: dt
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (O = t === "mouseover" || t === "pointerover", M = t === "mouseout" || t === "pointerout", O && a !== Un && (P = a.relatedTarget || a.fromElement) && (ka(P) || P[si])) break t;
                    if ((M || O) && (O = L.window === L ? L : (O = L.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? (P = a.relatedTarget || a.toElement, M = A, P = P ? ka(P) : null, P !== null && (Mt = lt(P), dt = P.tag, P !== Mt || dt !== 5 && dt !== 27 && dt !== 6) && (P = null)) : (M = null, P = A), M !== P)) {
                        if (dt = Bu, q = "onMouseLeave", E = "onMouseEnter", j = "mouse", (t === "pointerout" || t === "pointerover") && (dt = Gu, q = "onPointerLeave", E = "onPointerEnter", j = "pointer"), Mt = M == null ? O : tl(M), C = P == null ? O : tl(P), O = new dt(q, j + "leave", M, a, L), O.target = Mt, O.relatedTarget = C, q = null, ka(L) === A && (dt = new dt(E, j + "enter", P, a, L), dt.target = C, dt.relatedTarget = Mt, q = dt), Mt = q, M && P) e: {
                            for (dt = M, E = P, j = 0, C = dt; C; C = Ui(C)) j++;
                            for (C = 0, q = E; q; q = Ui(q)) C++;
                            for (; 0 < j - C;) dt = Ui(dt),
                            j--;
                            for (; 0 < C - j;) E = Ui(E),
                            C--;
                            for (; j--;) {
                                if (dt === E || E !== null && dt === E.alternate) break e;
                                dt = Ui(dt), E = Ui(E)
                            }
                            dt = null
                        }
                        else dt = null;
                        M !== null && Af(Y, O, M, dt, !1), P !== null && Mt !== null && Af(Y, Mt, P, dt, !0)
                    }
                }
                t: {
                    if (O = A ? tl(A) : window, M = O.nodeName && O.nodeName.toLowerCase(), M === "select" || M === "input" && O.type === "file") var F = Fu;
                    else if (Ju(O))
                        if (Pu) F = Im;
                        else {
                            F = Pm;
                            var rt = Fm
                        }
                    else M = O.nodeName,
                    !M || M.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? A && Ln(A.elementType) && (F = Fu) : F = Wm;
                    if (F && (F = F(t, A))) {
                        $u(Y, F, a, L);
                        break t
                    }
                    rt && rt(t, O, A),
                    t === "focusout" && A && O.type === "number" && A.memoizedProps.value != null && zn(O, "number", O.value)
                }
                switch (rt = A ? tl(A) : window, t) {
                    case "focusin":
                        (Ju(rt) || rt.contentEditable === "true") && (mi = rt, $n = A, ul = null);
                        break;
                    case "focusout":
                        ul = $n = mi = null;
                        break;
                    case "mousedown":
                        Fn = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Fn = !1, sc(Y, a, L);
                        break;
                    case "selectionchange":
                        if (av) break;
                    case "keydown":
                    case "keyup":
                        sc(Y, a, L)
                }
                var W;
                if (Vn) t: {
                    switch (t) {
                        case "compositionstart":
                            var at = "onCompositionStart";
                            break t;
                        case "compositionend":
                            at = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            at = "onCompositionUpdate";
                            break t
                    }
                    at = void 0
                }
                else pi ? Zu(t, a) && (at = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (at = "onCompositionStart");at && (Xu && a.locale !== "ko" && (pi || at !== "onCompositionStart" ? at === "onCompositionEnd" && pi && (W = qu()) : (pa = L, Bn = "value" in pa ? pa.value : pa.textContent, pi = !0)), rt = tn(A, at), 0 < rt.length && (at = new Yu(at, t, null, a, L), Y.push({
                    event: at,
                    listeners: rt
                }), W ? at.data = W : (W = Ku(a), W !== null && (at.data = W)))),
                (W = Vm ? Zm(t, a) : Km(t, a)) && (at = tn(A, "onBeforeInput"), 0 < at.length && (rt = new Yu("onBeforeInput", "beforeinput", null, a, L), Y.push({
                    event: rt,
                    listeners: at
                }), rt.data = W)),
                qv(Y, t, A, a, L)
            }
            jf(Y, e)
        })
    }

    function kl(t, e, a) {
        return {
            instance: t,
            listener: e,
            currentTarget: a
        }
    }

    function tn(t, e) {
        for (var a = e + "Capture", i = []; t !== null;) {
            var l = t,
                s = l.stateNode;
            l = l.tag, l !== 5 && l !== 26 && l !== 27 || s === null || (l = el(t, a), l != null && i.unshift(kl(t, l, s)), l = el(t, e), l != null && i.push(kl(t, l, s))), t = t.return
        }
        return i
    }

    function Ui(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function Af(t, e, a, i, l) {
        for (var s = e._reactName, f = []; a !== null && a !== i;) {
            var m = a,
                x = m.alternate,
                A = m.stateNode;
            if (m = m.tag, x !== null && x === i) break;
            m !== 5 && m !== 26 && m !== 27 || A === null || (x = A, l ? (A = el(a, s), A != null && f.unshift(kl(a, A, x))) : l || (A = el(a, s), A != null && f.push(kl(a, A, x)))), a = a.return
        }
        f.length !== 0 && t.push({
            event: e,
            listeners: f
        })
    }
    var Gv = /\r\n?/g,
        Xv = /\u0000|\uFFFD/g;

    function wf(t) {
        return (typeof t == "string" ? t : "" + t).replace(Gv, `
`).replace(Xv, "")
    }

    function Ef(t, e) {
        return e = wf(e), wf(t) === e
    }

    function en() {}

    function St(t, e, a, i, l, s) {
        switch (a) {
            case "children":
                typeof i == "string" ? e === "body" || e === "textarea" && i === "" || ci(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && ci(t, "" + i);
                break;
            case "className":
                us(t, "class", i);
                break;
            case "tabIndex":
                us(t, "tabindex", i);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                us(t, a, i);
                break;
            case "style":
                Lu(t, i, s);
                break;
            case "data":
                if (e !== "object") {
                    us(t, "data", i);
                    break
                }
            case "src":
            case "href":
                if (i === "" && (e !== "a" || a !== "href")) {
                    t.removeAttribute(a);
                    break
                }
                if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                i = fs("" + i), t.setAttribute(a, i);
                break;
            case "action":
            case "formAction":
                if (typeof i == "function") {
                    t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof s == "function" && (a === "formAction" ? (e !== "input" && St(t, e, "name", l.name, l, null), St(t, e, "formEncType", l.formEncType, l, null), St(t, e, "formMethod", l.formMethod, l, null), St(t, e, "formTarget", l.formTarget, l, null)) : (St(t, e, "encType", l.encType, l, null), St(t, e, "method", l.method, l, null), St(t, e, "target", l.target, l, null)));
                if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                i = fs("" + i), t.setAttribute(a, i);
                break;
            case "onClick":
                i != null && (t.onclick = en);
                break;
            case "onScroll":
                i != null && pt("scroll", t);
                break;
            case "onScrollEnd":
                i != null && pt("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (i != null) {
                    if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
                    if (a = i.__html, a != null) {
                        if (l.children != null) throw Error(u(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "multiple":
                t.multiple = i && typeof i != "function" && typeof i != "symbol";
                break;
            case "muted":
                t.muted = i && typeof i != "function" && typeof i != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                a = fs("" + i), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(a, "" + i) : t.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
                break;
            case "capture":
            case "download":
                i === !0 ? t.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(a, i) : t.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(a, i) : t.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(a) : t.setAttribute(a, i);
                break;
            case "popover":
                pt("beforetoggle", t), pt("toggle", t), os(t, "popover", i);
                break;
            case "xlinkActuate":
                Qe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
                break;
            case "xlinkArcrole":
                Qe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
                break;
            case "xlinkRole":
                Qe(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
                break;
            case "xlinkShow":
                Qe(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
                break;
            case "xlinkTitle":
                Qe(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
                break;
            case "xlinkType":
                Qe(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
                break;
            case "xmlBase":
                Qe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
                break;
            case "xmlLang":
                Qe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
                break;
            case "xmlSpace":
                Qe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
                break;
            case "is":
                os(t, "is", i);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = bm.get(a) || a, os(t, a, i))
        }
    }

    function yo(t, e, a, i, l, s) {
        switch (a) {
            case "style":
                Lu(t, i, s);
                break;
            case "dangerouslySetInnerHTML":
                if (i != null) {
                    if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
                    if (a = i.__html, a != null) {
                        if (l.children != null) throw Error(u(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof i == "string" ? ci(t, i) : (typeof i == "number" || typeof i == "bigint") && ci(t, "" + i);
                break;
            case "onScroll":
                i != null && pt("scroll", t);
                break;
            case "onScrollEnd":
                i != null && pt("scrollend", t);
                break;
            case "onClick":
                i != null && (t.onclick = en);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Eu.hasOwnProperty(a)) t: {
                    if (a[0] === "o" && a[1] === "n" && (l = a.endsWith("Capture"), e = a.slice(2, l ? a.length - 7 : void 0), s = t[se] || null, s = s != null ? s[a] : null, typeof s == "function" && t.removeEventListener(e, s, l), typeof i == "function")) {
                        typeof s != "function" && s !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, i, l);
                        break t
                    }
                    a in t ? t[a] = i : i === !0 ? t.setAttribute(a, "") : os(t, a, i)
                }
        }
    }

    function $t(t, e, a) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                pt("error", t), pt("load", t);
                var i = !1,
                    l = !1,
                    s;
                for (s in a)
                    if (a.hasOwnProperty(s)) {
                        var f = a[s];
                        if (f != null) switch (s) {
                            case "src":
                                i = !0;
                                break;
                            case "srcSet":
                                l = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(u(137, e));
                            default:
                                St(t, e, s, f, a, null)
                        }
                    }
                l && St(t, e, "srcSet", a.srcSet, a, null), i && St(t, e, "src", a.src, a, null);
                return;
            case "input":
                pt("invalid", t);
                var m = s = f = l = null,
                    x = null,
                    A = null;
                for (i in a)
                    if (a.hasOwnProperty(i)) {
                        var L = a[i];
                        if (L != null) switch (i) {
                            case "name":
                                l = L;
                                break;
                            case "type":
                                f = L;
                                break;
                            case "checked":
                                x = L;
                                break;
                            case "defaultChecked":
                                A = L;
                                break;
                            case "value":
                                s = L;
                                break;
                            case "defaultValue":
                                m = L;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (L != null) throw Error(u(137, e));
                                break;
                            default:
                                St(t, e, i, L, a, null)
                        }
                    }
                Du(t, s, m, x, A, f, l, !1), cs(t);
                return;
            case "select":
                pt("invalid", t), i = f = s = null;
                for (l in a)
                    if (a.hasOwnProperty(l) && (m = a[l], m != null)) switch (l) {
                        case "value":
                            s = m;
                            break;
                        case "defaultValue":
                            f = m;
                            break;
                        case "multiple":
                            i = m;
                        default:
                            St(t, e, l, m, a, null)
                    }
                e = s, a = f, t.multiple = !!i, e != null ? ui(t, !!i, e, !1) : a != null && ui(t, !!i, a, !0);
                return;
            case "textarea":
                pt("invalid", t), s = l = i = null;
                for (f in a)
                    if (a.hasOwnProperty(f) && (m = a[f], m != null)) switch (f) {
                        case "value":
                            i = m;
                            break;
                        case "defaultValue":
                            l = m;
                            break;
                        case "children":
                            s = m;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (m != null) throw Error(u(91));
                            break;
                        default:
                            St(t, e, f, m, a, null)
                    }
                Mu(t, i, l, s), cs(t);
                return;
            case "option":
                for (x in a)
                    if (a.hasOwnProperty(x) && (i = a[x], i != null)) switch (x) {
                        case "selected":
                            t.selected = i && typeof i != "function" && typeof i != "symbol";
                            break;
                        default:
                            St(t, e, x, i, a, null)
                    }
                return;
            case "dialog":
                pt("cancel", t), pt("close", t);
                break;
            case "iframe":
            case "object":
                pt("load", t);
                break;
            case "video":
            case "audio":
                for (i = 0; i < Ul.length; i++) pt(Ul[i], t);
                break;
            case "image":
                pt("error", t), pt("load", t);
                break;
            case "details":
                pt("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                pt("error", t), pt("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (A in a)
                    if (a.hasOwnProperty(A) && (i = a[A], i != null)) switch (A) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(u(137, e));
                        default:
                            St(t, e, A, i, a, null)
                    }
                return;
            default:
                if (Ln(e)) {
                    for (L in a) a.hasOwnProperty(L) && (i = a[L], i !== void 0 && yo(t, e, L, i, a, void 0));
                    return
                }
        }
        for (m in a) a.hasOwnProperty(m) && (i = a[m], i != null && St(t, e, m, i, a, null))
    }

    function Qv(t, e, a, i) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var l = null,
                    s = null,
                    f = null,
                    m = null,
                    x = null,
                    A = null,
                    L = null;
                for (M in a) {
                    var Y = a[M];
                    if (a.hasOwnProperty(M) && Y != null) switch (M) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            x = Y;
                        default:
                            i.hasOwnProperty(M) || St(t, e, M, null, i, Y)
                    }
                }
                for (var O in i) {
                    var M = i[O];
                    if (Y = a[O], i.hasOwnProperty(O) && (M != null || Y != null)) switch (O) {
                        case "type":
                            s = M;
                            break;
                        case "name":
                            l = M;
                            break;
                        case "checked":
                            A = M;
                            break;
                        case "defaultChecked":
                            L = M;
                            break;
                        case "value":
                            f = M;
                            break;
                        case "defaultValue":
                            m = M;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (M != null) throw Error(u(137, e));
                            break;
                        default:
                            M !== Y && St(t, e, O, M, i, Y)
                    }
                }
                Mn(t, f, m, x, A, L, s, l);
                return;
            case "select":
                M = f = m = O = null;
                for (s in a)
                    if (x = a[s], a.hasOwnProperty(s) && x != null) switch (s) {
                        case "value":
                            break;
                        case "multiple":
                            M = x;
                        default:
                            i.hasOwnProperty(s) || St(t, e, s, null, i, x)
                    }
                for (l in i)
                    if (s = i[l], x = a[l], i.hasOwnProperty(l) && (s != null || x != null)) switch (l) {
                        case "value":
                            O = s;
                            break;
                        case "defaultValue":
                            m = s;
                            break;
                        case "multiple":
                            f = s;
                        default:
                            s !== x && St(t, e, l, s, i, x)
                    }
                e = m, a = f, i = M, O != null ? ui(t, !!a, O, !1) : !!i != !!a && (e != null ? ui(t, !!a, e, !0) : ui(t, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                M = O = null;
                for (m in a)
                    if (l = a[m], a.hasOwnProperty(m) && l != null && !i.hasOwnProperty(m)) switch (m) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            St(t, e, m, null, i, l)
                    }
                for (f in i)
                    if (l = i[f], s = a[f], i.hasOwnProperty(f) && (l != null || s != null)) switch (f) {
                        case "value":
                            O = l;
                            break;
                        case "defaultValue":
                            M = l;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (l != null) throw Error(u(91));
                            break;
                        default:
                            l !== s && St(t, e, f, l, i, s)
                    }
                _u(t, O, M);
                return;
            case "option":
                for (var P in a)
                    if (O = a[P], a.hasOwnProperty(P) && O != null && !i.hasOwnProperty(P)) switch (P) {
                        case "selected":
                            t.selected = !1;
                            break;
                        default:
                            St(t, e, P, null, i, O)
                    }
                for (x in i)
                    if (O = i[x], M = a[x], i.hasOwnProperty(x) && O !== M && (O != null || M != null)) switch (x) {
                        case "selected":
                            t.selected = O && typeof O != "function" && typeof O != "symbol";
                            break;
                        default:
                            St(t, e, x, O, i, M)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var dt in a) O = a[dt], a.hasOwnProperty(dt) && O != null && !i.hasOwnProperty(dt) && St(t, e, dt, null, i, O);
                for (A in i)
                    if (O = i[A], M = a[A], i.hasOwnProperty(A) && O !== M && (O != null || M != null)) switch (A) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (O != null) throw Error(u(137, e));
                            break;
                        default:
                            St(t, e, A, O, i, M)
                    }
                return;
            default:
                if (Ln(e)) {
                    for (var Mt in a) O = a[Mt], a.hasOwnProperty(Mt) && O !== void 0 && !i.hasOwnProperty(Mt) && yo(t, e, Mt, void 0, i, O);
                    for (L in i) O = i[L], M = a[L], !i.hasOwnProperty(L) || O === M || O === void 0 && M === void 0 || yo(t, e, L, O, i, M);
                    return
                }
        }
        for (var E in a) O = a[E], a.hasOwnProperty(E) && O != null && !i.hasOwnProperty(E) && St(t, e, E, null, i, O);
        for (Y in i) O = i[Y], M = a[Y], !i.hasOwnProperty(Y) || O === M || O == null && M == null || St(t, e, Y, O, i, M)
    }
    var So = null,
        jo = null;

    function an(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function Tf(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Rf(t, e) {
        if (t === 0) switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && e === "foreignObject" ? 0 : t
    }

    function No(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Ao = null;

    function Vv() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Ao ? !1 : (Ao = t, !0) : (Ao = null, !1)
    }
    var Cf = typeof setTimeout == "function" ? setTimeout : void 0,
        Zv = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Of = typeof Promise == "function" ? Promise : void 0,
        Kv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Of < "u" ? function(t) {
            return Of.resolve(null).then(t).catch(Jv)
        } : Cf;

    function Jv(t) {
        setTimeout(function() {
            throw t
        })
    }

    function wo(t, e) {
        var a = e,
            i = 0;
        do {
            var l = a.nextSibling;
            if (t.removeChild(a), l && l.nodeType === 8)
                if (a = l.data, a === "/$") {
                    if (i === 0) {
                        t.removeChild(l), Vl(e);
                        return
                    }
                    i--
                } else a !== "$" && a !== "$?" && a !== "$!" || i++;
            a = l
        } while (a);
        Vl(e)
    }

    function Eo(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
            var a = e;
            switch (e = e.nextSibling, a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Eo(a), _n(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(a)
        }
    }

    function $v(t, e, a, i) {
        for (; t.nodeType === 1;) {
            var l = a;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (i) {
                if (!t[Ii]) switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (s !== l.rel || t.getAttribute("href") !== (l.href == null ? null : l.href) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || t.getAttribute("title") !== (l.title == null ? null : l.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (s = t.getAttribute("src"), (s !== (l.src == null ? null : l.src) || t.getAttribute("type") !== (l.type == null ? null : l.type) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (e === "input" && t.type === "hidden") {
                var s = l.name == null ? null : "" + l.name;
                if (l.type === "hidden" && t.getAttribute("name") === s) return t
            } else return t;
            if (t = De(t.nextSibling), t === null) break
        }
        return null
    }

    function Fv(t, e, a) {
        if (e === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = De(t.nextSibling), t === null)) return null;
        return t
    }

    function De(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
                if (e === "/$") return null
            }
        }
        return t
    }

    function Df(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (e === 0) return t;
                    e--
                } else a === "/$" && e++
            }
            t = t.previousSibling
        }
        return null
    }

    function _f(t, e, a) {
        switch (e = an(a), t) {
            case "html":
                if (t = e.documentElement, !t) throw Error(u(452));
                return t;
            case "head":
                if (t = e.head, !t) throw Error(u(453));
                return t;
            case "body":
                if (t = e.body, !t) throw Error(u(454));
                return t;
            default:
                throw Error(u(451))
        }
    }
    var Ee = new Map,
        Mf = new Set;

    function ln(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.ownerDocument
    }
    var sa = $.d;
    $.d = {
        f: Pv,
        r: Wv,
        D: Iv,
        C: th,
        L: eh,
        m: ah,
        X: lh,
        S: ih,
        M: sh
    };

    function Pv() {
        var t = sa.f(),
            e = $s();
        return t || e
    }

    function Wv(t) {
        var e = ni(t);
        e !== null && e.tag === 5 && e.type === "form" ? sr(e) : sa.r(t)
    }
    var ki = typeof document > "u" ? null : document;

    function zf(t, e, a) {
        var i = ki;
        if (i && typeof e == "string" && e) {
            var l = he(e);
            l = 'link[rel="' + t + '"][href="' + l + '"]', typeof a == "string" && (l += '[crossorigin="' + a + '"]'), Mf.has(l) || (Mf.add(l), t = {
                rel: t,
                crossOrigin: a,
                href: e
            }, i.querySelector(l) === null && (e = i.createElement("link"), $t(e, "link", t), Gt(e), i.head.appendChild(e)))
        }
    }

    function Iv(t) {
        sa.D(t), zf("dns-prefetch", t, null)
    }

    function th(t, e) {
        sa.C(t, e), zf("preconnect", t, e)
    }

    function eh(t, e, a) {
        sa.L(t, e, a);
        var i = ki;
        if (i && t && e) {
            var l = 'link[rel="preload"][as="' + he(e) + '"]';
            e === "image" && a && a.imageSrcSet ? (l += '[imagesrcset="' + he(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (l += '[imagesizes="' + he(a.imageSizes) + '"]')) : l += '[href="' + he(t) + '"]';
            var s = l;
            switch (e) {
                case "style":
                    s = qi(t);
                    break;
                case "script":
                    s = Hi(t)
            }
            Ee.has(s) || (t = tt({
                rel: "preload",
                href: e === "image" && a && a.imageSrcSet ? void 0 : t,
                as: e
            }, a), Ee.set(s, t), i.querySelector(l) !== null || e === "style" && i.querySelector(ql(s)) || e === "script" && i.querySelector(Hl(s)) || (e = i.createElement("link"), $t(e, "link", t), Gt(e), i.head.appendChild(e)))
        }
    }

    function ah(t, e) {
        sa.m(t, e);
        var a = ki;
        if (a && t) {
            var i = e && typeof e.as == "string" ? e.as : "script",
                l = 'link[rel="modulepreload"][as="' + he(i) + '"][href="' + he(t) + '"]',
                s = l;
            switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    s = Hi(t)
            }
            if (!Ee.has(s) && (t = tt({
                    rel: "modulepreload",
                    href: t
                }, e), Ee.set(s, t), a.querySelector(l) === null)) {
                switch (i) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(Hl(s))) return
                }
                i = a.createElement("link"), $t(i, "link", t), Gt(i), a.head.appendChild(i)
            }
        }
    }

    function ih(t, e, a) {
        sa.S(t, e, a);
        var i = ki;
        if (i && t) {
            var l = di(i).hoistableStyles,
                s = qi(t);
            e = e || "default";
            var f = l.get(s);
            if (!f) {
                var m = {
                    loading: 0,
                    preload: null
                };
                if (f = i.querySelector(ql(s))) m.loading = 5;
                else {
                    t = tt({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, a), (a = Ee.get(s)) && To(t, a);
                    var x = f = i.createElement("link");
                    Gt(x), $t(x, "link", t), x._p = new Promise(function(A, L) {
                        x.onload = A, x.onerror = L
                    }), x.addEventListener("load", function() {
                        m.loading |= 1
                    }), x.addEventListener("error", function() {
                        m.loading |= 2
                    }), m.loading |= 4, sn(f, e, i)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: m
                }, l.set(s, f)
            }
        }
    }

    function lh(t, e) {
        sa.X(t, e);
        var a = ki;
        if (a && t) {
            var i = di(a).hoistableScripts,
                l = Hi(t),
                s = i.get(l);
            s || (s = a.querySelector(Hl(l)), s || (t = tt({
                src: t,
                async: !0
            }, e), (e = Ee.get(l)) && Ro(t, e), s = a.createElement("script"), Gt(s), $t(s, "link", t), a.head.appendChild(s)), s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            }, i.set(l, s))
        }
    }

    function sh(t, e) {
        sa.M(t, e);
        var a = ki;
        if (a && t) {
            var i = di(a).hoistableScripts,
                l = Hi(t),
                s = i.get(l);
            s || (s = a.querySelector(Hl(l)), s || (t = tt({
                src: t,
                async: !0,
                type: "module"
            }, e), (e = Ee.get(l)) && Ro(t, e), s = a.createElement("script"), Gt(s), $t(s, "link", t), a.head.appendChild(s)), s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            }, i.set(l, s))
        }
    }

    function Lf(t, e, a, i) {
        var l = (l = ca.current) ? ln(l) : null;
        if (!l) throw Error(u(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (e = qi(a.href), a = di(l).hoistableStyles, i = a.get(e), i || (i = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(e, i)), i) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    t = qi(a.href);
                    var s = di(l).hoistableStyles,
                        f = s.get(t);
                    if (f || (l = l.ownerDocument || l, f = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, s.set(t, f), (s = l.querySelector(ql(t))) && !s._p && (f.instance = s, f.state.loading = 5), Ee.has(t) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, Ee.set(t, a), s || nh(l, t, a, f.state))), e && i === null) throw Error(u(528, ""));
                    return f
                }
                if (e && i !== null) throw Error(u(529, ""));
                return null;
            case "script":
                return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Hi(a), a = di(l).hoistableScripts, i = a.get(e), i || (i = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(e, i)), i) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(u(444, t))
        }
    }

    function qi(t) {
        return 'href="' + he(t) + '"'
    }

    function ql(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function Uf(t) {
        return tt({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function nh(t, e, a, i) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
            return i.loading |= 1
        }), e.addEventListener("error", function() {
            return i.loading |= 2
        }), $t(e, "link", a), Gt(e), t.head.appendChild(e))
    }

    function Hi(t) {
        return '[src="' + he(t) + '"]'
    }

    function Hl(t) {
        return "script[async]" + t
    }

    function kf(t, e, a) {
        if (e.count++, e.instance === null) switch (e.type) {
            case "style":
                var i = t.querySelector('style[data-href~="' + he(a.href) + '"]');
                if (i) return e.instance = i, Gt(i), i;
                var l = tt({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return i = (t.ownerDocument || t).createElement("style"), Gt(i), $t(i, "style", l), sn(i, a.precedence, t), e.instance = i;
            case "stylesheet":
                l = qi(a.href);
                var s = t.querySelector(ql(l));
                if (s) return e.state.loading |= 4, e.instance = s, Gt(s), s;
                i = Uf(a), (l = Ee.get(l)) && To(i, l), s = (t.ownerDocument || t).createElement("link"), Gt(s);
                var f = s;
                return f._p = new Promise(function(m, x) {
                    f.onload = m, f.onerror = x
                }), $t(s, "link", i), e.state.loading |= 4, sn(s, a.precedence, t), e.instance = s;
            case "script":
                return s = Hi(a.src), (l = t.querySelector(Hl(s))) ? (e.instance = l, Gt(l), l) : (i = a, (l = Ee.get(s)) && (i = tt({}, a), Ro(i, l)), t = t.ownerDocument || t, l = t.createElement("script"), Gt(l), $t(l, "link", i), t.head.appendChild(l), e.instance = l);
            case "void":
                return null;
            default:
                throw Error(u(443, e.type))
        } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, sn(i, a.precedence, t));
        return e.instance
    }

    function sn(t, e, a) {
        for (var i = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = i.length ? i[i.length - 1] : null, s = l, f = 0; f < i.length; f++) {
            var m = i[f];
            if (m.dataset.precedence === e) s = m;
            else if (s !== l) break
        }
        s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild))
    }

    function To(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
    }

    function Ro(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
    }
    var nn = null;

    function qf(t, e, a) {
        if (nn === null) {
            var i = new Map,
                l = nn = new Map;
            l.set(a, i)
        } else l = nn, i = l.get(a), i || (i = new Map, l.set(a, i));
        if (i.has(t)) return i;
        for (i.set(t, null), a = a.getElementsByTagName(t), l = 0; l < a.length; l++) {
            var s = a[l];
            if (!(s[Ii] || s[Ft] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = s.getAttribute(e) || "";
                f = t + f;
                var m = i.get(f);
                m ? m.push(s) : i.set(f, [s])
            }
        }
        return i
    }

    function Hf(t, e, a) {
        t = t.ownerDocument || t, t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null)
    }

    function dh(t, e, a) {
        if (a === 1 || e.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                return !0;
            case "link":
                if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                switch (e.rel) {
                    case "stylesheet":
                        return t = e.disabled, typeof e.precedence == "string" && t == null;
                    default:
                        return !0
                }
            case "script":
                if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
        }
        return !1
    }

    function Bf(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var Bl = null;

    function oh() {}

    function uh(t, e, a) {
        if (Bl === null) throw Error(u(475));
        var i = Bl;
        if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var l = qi(a.href),
                    s = t.querySelector(ql(l));
                if (s) {
                    t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (i.count++, i = dn.bind(i), t.then(i, i)), e.state.loading |= 4, e.instance = s, Gt(s);
                    return
                }
                s = t.ownerDocument || t, a = Uf(a), (l = Ee.get(l)) && To(a, l), s = s.createElement("link"), Gt(s);
                var f = s;
                f._p = new Promise(function(m, x) {
                    f.onload = m, f.onerror = x
                }), $t(s, "link", a), e.instance = s
            }
            i.stylesheets === null && (i.stylesheets = new Map), i.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (i.count++, e = dn.bind(i), t.addEventListener("load", e), t.addEventListener("error", e))
        }
    }

    function ch() {
        if (Bl === null) throw Error(u(475));
        var t = Bl;
        return t.stylesheets && t.count === 0 && Co(t, t.stylesheets), 0 < t.count ? function(e) {
            var a = setTimeout(function() {
                if (t.stylesheets && Co(t, t.stylesheets), t.unsuspend) {
                    var i = t.unsuspend;
                    t.unsuspend = null, i()
                }
            }, 6e4);
            return t.unsuspend = e,
                function() {
                    t.unsuspend = null, clearTimeout(a)
                }
        } : null
    }

    function dn() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Co(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var on = null;

    function Co(t, e) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, on = new Map, e.forEach(rh, t), on = null, dn.call(t))
    }

    function rh(t, e) {
        if (!(e.state.loading & 4)) {
            var a = on.get(t);
            if (a) var i = a.get(null);
            else {
                a = new Map, on.set(t, a);
                for (var l = t.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < l.length; s++) {
                    var f = l[s];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), i = f)
                }
                i && a.set(null, i)
            }
            l = e.instance, f = l.getAttribute("data-precedence"), s = a.get(f) || i, s === i && a.set(null, l), a.set(f, l), this.count++, i = dn.bind(this), l.addEventListener("load", i), l.addEventListener("error", i), s ? s.parentNode.insertBefore(l, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(l, t.firstChild)), e.state.loading |= 4
        }
    }
    var Yl = {
        $$typeof: z,
        Provider: null,
        Consumer: null,
        _currentValue: mt,
        _currentValue2: mt,
        _threadCount: 0
    };

    function fh(t, e, a, i, l, s, f, m) {
        this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = On(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = On(0), this.hiddenUpdates = On(null), this.identifierPrefix = i, this.onUncaughtError = l, this.onCaughtError = s, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map
    }

    function Yf(t, e, a, i, l, s, f, m, x, A, L, Y) {
        return t = new fh(t, e, a, f, m, x, A, Y), e = 1, s === !0 && (e |= 24), s = Ae(3, null, null, e), t.current = s, s.stateNode = t, e = nd(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
            element: i,
            isDehydrated: a,
            cache: e
        }, Bd(s), t
    }

    function Gf(t) {
        return t ? (t = gi, t) : gi
    }

    function Xf(t, e, a, i, l, s) {
        l = Gf(l), i.context === null ? i.context = l : i.pendingContext = l, i = Sa(e), i.payload = {
            element: a
        }, s = s === void 0 ? null : s, s !== null && (i.callback = s), a = ja(t, i, e), a !== null && (ae(a, t, e), Al(a, t, e))
    }

    function Qf(t, e) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < e ? a : e
        }
    }

    function Oo(t, e) {
        Qf(t, e), (t = t.alternate) && Qf(t, e)
    }

    function Vf(t) {
        if (t.tag === 13) {
            var e = ma(t, 67108864);
            e !== null && ae(e, t, 67108864), Oo(t, 67108864)
        }
    }
    var un = !0;

    function ph(t, e, a, i) {
        var l = V.T;
        V.T = null;
        var s = $.p;
        try {
            $.p = 2, Do(t, e, a, i)
        } finally {
            $.p = s, V.T = l
        }
    }

    function mh(t, e, a, i) {
        var l = V.T;
        V.T = null;
        var s = $.p;
        try {
            $.p = 8, Do(t, e, a, i)
        } finally {
            $.p = s, V.T = l
        }
    }

    function Do(t, e, a, i) {
        if (un) {
            var l = _o(i);
            if (l === null) xo(t, e, i, cn, a), Kf(t, i);
            else if (hh(l, t, e, a, i)) i.stopPropagation();
            else if (Kf(t, i), e & 4 && -1 < vh.indexOf(t)) {
                for (; l !== null;) {
                    var s = ni(l);
                    if (s !== null) switch (s.tag) {
                        case 3:
                            if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                                var f = Ua(s.pendingLanes);
                                if (f !== 0) {
                                    var m = s;
                                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f;) {
                                        var x = 1 << 31 - ue(f);
                                        m.entanglements[1] |= x, f &= ~x
                                    }
                                    Ye(s), (Ot & 6) === 0 && (Zs = Ue() + 500, Ll(0))
                                }
                            }
                            break;
                        case 13:
                            m = ma(s, 2), m !== null && ae(m, s, 2), $s(), Oo(s, 2)
                    }
                    if (s = _o(i), s === null && xo(t, e, i, cn, a), s === l) break;
                    l = s
                }
                l !== null && i.stopPropagation()
            } else xo(t, e, i, null, a)
        }
    }

    function _o(t) {
        return t = kn(t), Mo(t)
    }
    var cn = null;

    function Mo(t) {
        if (cn = null, t = ka(t), t !== null) {
            var e = lt(t);
            if (e === null) t = null;
            else {
                var a = e.tag;
                if (a === 13) {
                    if (t = At(e), t !== null) return t;
                    t = null
                } else if (a === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else e !== t && (t = null)
            }
        }
        return cn = t, null
    }

    function Zf(t) {
        switch (t) {
            case "beforetoggle":
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
            case "toggle":
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
                return 2;
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
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (tm()) {
                    case vu:
                        return 2;
                    case hu:
                        return 8;
                    case ls:
                    case em:
                        return 32;
                    case gu:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var zo = !1,
        Ca = null,
        Oa = null,
        Da = null,
        Gl = new Map,
        Xl = new Map,
        _a = [],
        vh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Kf(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                Ca = null;
                break;
            case "dragenter":
            case "dragleave":
                Oa = null;
                break;
            case "mouseover":
            case "mouseout":
                Da = null;
                break;
            case "pointerover":
            case "pointerout":
                Gl.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Xl.delete(e.pointerId)
        }
    }

    function Ql(t, e, a, i, l, s) {
        return t === null || t.nativeEvent !== s ? (t = {
            blockedOn: e,
            domEventName: a,
            eventSystemFlags: i,
            nativeEvent: s,
            targetContainers: [l]
        }, e !== null && (e = ni(e), e !== null && Vf(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, l !== null && e.indexOf(l) === -1 && e.push(l), t)
    }

    function hh(t, e, a, i, l) {
        switch (e) {
            case "focusin":
                return Ca = Ql(Ca, t, e, a, i, l), !0;
            case "dragenter":
                return Oa = Ql(Oa, t, e, a, i, l), !0;
            case "mouseover":
                return Da = Ql(Da, t, e, a, i, l), !0;
            case "pointerover":
                var s = l.pointerId;
                return Gl.set(s, Ql(Gl.get(s) || null, t, e, a, i, l)), !0;
            case "gotpointercapture":
                return s = l.pointerId, Xl.set(s, Ql(Xl.get(s) || null, t, e, a, i, l)), !0
        }
        return !1
    }

    function Jf(t) {
        var e = ka(t.target);
        if (e !== null) {
            var a = lt(e);
            if (a !== null) {
                if (e = a.tag, e === 13) {
                    if (e = At(a), e !== null) {
                        t.blockedOn = e, cm(t.priority, function() {
                            if (a.tag === 13) {
                                var i = me(),
                                    l = ma(a, i);
                                l !== null && ae(l, a, i), Oo(a, i)
                            }
                        });
                        return
                    }
                } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function rn(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length;) {
            var a = _o(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var i = new a.constructor(a.type, a);
                Un = i, a.target.dispatchEvent(i), Un = null
            } else return e = ni(a), e !== null && Vf(e), t.blockedOn = a, !1;
            e.shift()
        }
        return !0
    }

    function $f(t, e, a) {
        rn(t) && a.delete(e)
    }

    function gh() {
        zo = !1, Ca !== null && rn(Ca) && (Ca = null), Oa !== null && rn(Oa) && (Oa = null), Da !== null && rn(Da) && (Da = null), Gl.forEach($f), Xl.forEach($f)
    }

    function fn(t, e) {
        t.blockedOn === e && (t.blockedOn = null, zo || (zo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, gh)))
    }
    var pn = null;

    function Ff(t) {
        pn !== t && (pn = t, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
            pn === t && (pn = null);
            for (var e = 0; e < t.length; e += 3) {
                var a = t[e],
                    i = t[e + 1],
                    l = t[e + 2];
                if (typeof i != "function") {
                    if (Mo(i || a) === null) continue;
                    break
                }
                var s = ni(a);
                s !== null && (t.splice(e, 3), e -= 3, jd(s, {
                    pending: !0,
                    data: l,
                    method: a.method,
                    action: i
                }, i, l))
            }
        }))
    }

    function Vl(t) {
        function e(x) {
            return fn(x, t)
        }
        Ca !== null && fn(Ca, t), Oa !== null && fn(Oa, t), Da !== null && fn(Da, t), Gl.forEach(e), Xl.forEach(e);
        for (var a = 0; a < _a.length; a++) {
            var i = _a[a];
            i.blockedOn === t && (i.blockedOn = null)
        }
        for (; 0 < _a.length && (a = _a[0], a.blockedOn === null);) Jf(a), a.blockedOn === null && _a.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
            for (i = 0; i < a.length; i += 3) {
                var l = a[i],
                    s = a[i + 1],
                    f = l[se] || null;
                if (typeof s == "function") f || Ff(a);
                else if (f) {
                    var m = null;
                    if (s && s.hasAttribute("formAction")) {
                        if (l = s, f = s[se] || null) m = f.formAction;
                        else if (Mo(l) !== null) continue
                    } else m = f.action;
                    typeof m == "function" ? a[i + 1] = m : (a.splice(i, 3), i -= 3), Ff(a)
                }
            }
    }

    function Lo(t) {
        this._internalRoot = t
    }
    mn.prototype.render = Lo.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null) throw Error(u(409));
        var a = e.current,
            i = me();
        Xf(a, i, t, e, null, null)
    }, mn.prototype.unmount = Lo.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            t.tag === 0 && zi(), Xf(t.current, 2, null, t, null, null), $s(), e[si] = null
        }
    };

    function mn(t) {
        this._internalRoot = t
    }
    mn.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = Nu();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var a = 0; a < _a.length && e !== 0 && e < _a[a].priority; a++);
            _a.splice(a, 0, t), a === 0 && Jf(t)
        }
    };
    var Pf = n.version;
    if (Pf !== "19.0.0") throw Error(u(527, Pf, "19.0.0"));
    $.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0) throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
        return t = X(e), t = t !== null ? it(t) : null, t = t === null ? null : t.stateNode, t
    };
    var bh = {
        bundleType: 0,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: V,
        findFiberByHostInstance: ka,
        reconcilerVersion: "19.0.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var vn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vn.isDisabled && vn.supportsFiber) try {
            Fi = vn.inject(bh), oe = vn
        } catch {}
    }
    return Kl.createRoot = function(t, e) {
        if (!r(t)) throw Error(u(299));
        var a = !1,
            i = "",
            l = pr,
            s = mr,
            f = vr,
            m = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (l = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (m = e.unstable_transitionCallbacks)), e = Yf(t, 1, !1, null, null, a, i, l, s, f, m, null), t[si] = e.current, bo(t.nodeType === 8 ? t.parentNode : t), new Lo(e)
    }, Kl.hydrateRoot = function(t, e, a) {
        if (!r(t)) throw Error(u(299));
        var i = !1,
            l = "",
            s = pr,
            f = mr,
            m = vr,
            x = null,
            A = null;
        return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (l = a.identifierPrefix), a.onUncaughtError !== void 0 && (s = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (m = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (x = a.unstable_transitionCallbacks), a.formState !== void 0 && (A = a.formState)), e = Yf(t, 1, !0, e, a ?? null, i, l, s, f, m, x, A), e.context = Gf(null), a = e.current, i = me(), l = Sa(i), l.callback = null, ja(a, l, i), e.current.lanes = i, Wi(e, i), Ye(e), t[si] = e.current, bo(t), new mn(e)
    }, Kl.version = "19.0.0", Kl
}
var dp;

function Rh() {
    if (dp) return qo.exports;
    dp = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (n) {
            console.error(n)
        }
    }
    return c(), qo.exports = Th(), qo.exports
}
var Ch = Rh(),
    Jl = {},
    op;

function Oh() {
    if (op) return Jl;
    op = 1, Object.defineProperty(Jl, "__esModule", {
        value: !0
    }), Jl.parse = g, Jl.serialize = h;
    const c = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
        n = /^[\u0021-\u003A\u003C-\u007E]*$/,
        o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        u = /^[\u0020-\u003A\u003D-\u007E]*$/,
        r = Object.prototype.toString,
        p = (() => {
            const R = function() {};
            return R.prototype = Object.create(null), R
        })();

    function g(R, z) {
        const D = new p,
            H = R.length;
        if (H < 2) return D;
        const G = (z == null ? void 0 : z.decode) || N;
        let U = 0;
        do {
            const k = R.indexOf("=", U);
            if (k === -1) break;
            const w = R.indexOf(";", U),
                K = w === -1 ? H : w;
            if (k > K) {
                U = R.lastIndexOf(";", k - 1) + 1;
                continue
            }
            const Z = b(R, U, k),
                _ = v(R, k, Z),
                B = R.slice(Z, _);
            if (D[B] === void 0) {
                let I = b(R, k + 1, K),
                    V = v(R, K, I);
                const tt = G(R.slice(I, V));
                D[B] = tt
            }
            U = K + 1
        } while (U < H);
        return D
    }

    function b(R, z, D) {
        do {
            const H = R.charCodeAt(z);
            if (H !== 32 && H !== 9) return z
        } while (++z < D);
        return D
    }

    function v(R, z, D) {
        for (; z > D;) {
            const H = R.charCodeAt(--z);
            if (H !== 32 && H !== 9) return z + 1
        }
        return D
    }

    function h(R, z, D) {
        const H = (D == null ? void 0 : D.encode) || encodeURIComponent;
        if (!c.test(R)) throw new TypeError(`argument name is invalid: ${R}`);
        const G = H(z);
        if (!n.test(G)) throw new TypeError(`argument val is invalid: ${z}`);
        let U = R + "=" + G;
        if (!D) return U;
        if (D.maxAge !== void 0) {
            if (!Number.isInteger(D.maxAge)) throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);
            U += "; Max-Age=" + D.maxAge
        }
        if (D.domain) {
            if (!o.test(D.domain)) throw new TypeError(`option domain is invalid: ${D.domain}`);
            U += "; Domain=" + D.domain
        }
        if (D.path) {
            if (!u.test(D.path)) throw new TypeError(`option path is invalid: ${D.path}`);
            U += "; Path=" + D.path
        }
        if (D.expires) {
            if (!T(D.expires) || !Number.isFinite(D.expires.valueOf())) throw new TypeError(`option expires is invalid: ${D.expires}`);
            U += "; Expires=" + D.expires.toUTCString()
        }
        if (D.httpOnly && (U += "; HttpOnly"), D.secure && (U += "; Secure"), D.partitioned && (U += "; Partitioned"), D.priority) switch (typeof D.priority == "string" ? D.priority.toLowerCase() : void 0) {
            case "low":
                U += "; Priority=Low";
                break;
            case "medium":
                U += "; Priority=Medium";
                break;
            case "high":
                U += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${D.priority}`)
        }
        if (D.sameSite) switch (typeof D.sameSite == "string" ? D.sameSite.toLowerCase() : D.sameSite) {
            case !0:
            case "strict":
                U += "; SameSite=Strict";
                break;
            case "lax":
                U += "; SameSite=Lax";
                break;
            case "none":
                U += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)
        }
        return U
    }

    function N(R) {
        if (R.indexOf("%") === -1) return R;
        try {
            return decodeURIComponent(R)
        } catch {
            return R
        }
    }

    function T(R) {
        return r.call(R) === "[object Date]"
    }
    return Jl
}
Oh();
/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var up = "popstate";

function Dh(c = {}) {
    function n(u, r) {
        let {
            pathname: p,
            search: g,
            hash: b
        } = u.location;
        return Vo("", {
            pathname: p,
            search: g,
            hash: b
        }, r.state && r.state.usr || null, r.state && r.state.key || "default")
    }

    function o(u, r) {
        return typeof r == "string" ? r : Fl(r)
    }
    return Mh(n, o, null, c)
}

function Rt(c, n) {
    if (c === !1 || c === null || typeof c > "u") throw new Error(n)
}

function Me(c, n) {
    if (!c) {
        typeof console < "u" && console.warn(n);
        try {
            throw new Error(n)
        } catch {}
    }
}

function _h() {
    return Math.random().toString(36).substring(2, 10)
}

function cp(c, n) {
    return {
        usr: c.state,
        key: c.key,
        idx: n
    }
}

function Vo(c, n, o = null, u) {
    return {
        pathname: typeof c == "string" ? c : c.pathname,
        search: "",
        hash: "",
        ...typeof n == "string" ? Vi(n) : n,
        state: o,
        key: n && n.key || u || _h()
    }
}

function Fl({
    pathname: c = "/",
    search: n = "",
    hash: o = ""
}) {
    return n && n !== "?" && (c += n.charAt(0) === "?" ? n : "?" + n), o && o !== "#" && (c += o.charAt(0) === "#" ? o : "#" + o), c
}

function Vi(c) {
    let n = {};
    if (c) {
        let o = c.indexOf("#");
        o >= 0 && (n.hash = c.substring(o), c = c.substring(0, o));
        let u = c.indexOf("?");
        u >= 0 && (n.search = c.substring(u), c = c.substring(0, u)), c && (n.pathname = c)
    }
    return n
}

function Mh(c, n, o, u = {}) {
    let {
        window: r = document.defaultView,
        v5Compat: p = !1
    } = u, g = r.history, b = "POP", v = null, h = N();
    h == null && (h = 0, g.replaceState({ ...g.state,
        idx: h
    }, ""));

    function N() {
        return (g.state || {
            idx: null
        }).idx
    }

    function T() {
        b = "POP";
        let G = N(),
            U = G == null ? null : G - h;
        h = G, v && v({
            action: b,
            location: H.location,
            delta: U
        })
    }

    function R(G, U) {
        b = "PUSH";
        let k = Vo(H.location, G, U);
        h = N() + 1;
        let w = cp(k, h),
            K = H.createHref(k);
        try {
            g.pushState(w, "", K)
        } catch (Z) {
            if (Z instanceof DOMException && Z.name === "DataCloneError") throw Z;
            r.location.assign(K)
        }
        p && v && v({
            action: b,
            location: H.location,
            delta: 1
        })
    }

    function z(G, U) {
        b = "REPLACE";
        let k = Vo(H.location, G, U);
        h = N();
        let w = cp(k, h),
            K = H.createHref(k);
        g.replaceState(w, "", K), p && v && v({
            action: b,
            location: H.location,
            delta: 0
        })
    }

    function D(G) {
        let U = r.location.origin !== "null" ? r.location.origin : r.location.href,
            k = typeof G == "string" ? G : Fl(G);
        return k = k.replace(/ $/, "%20"), Rt(U, `No window.location.(origin|href) available to create URL for href: ${k}`), new URL(k, U)
    }
    let H = {
        get action() {
            return b
        },
        get location() {
            return c(r, g)
        },
        listen(G) {
            if (v) throw new Error("A history only accepts one active listener");
            return r.addEventListener(up, T), v = G, () => {
                r.removeEventListener(up, T), v = null
            }
        },
        createHref(G) {
            return n(r, G)
        },
        createURL: D,
        encodeLocation(G) {
            let U = D(G);
            return {
                pathname: U.pathname,
                search: U.search,
                hash: U.hash
            }
        },
        push: R,
        replace: z,
        go(G) {
            return g.go(G)
        }
    };
    return H
}

function Np(c, n, o = "/") {
    return zh(c, n, o, !1)
}

function zh(c, n, o, u) {
    let r = typeof n == "string" ? Vi(n) : n,
        p = da(r.pathname || "/", o);
    if (p == null) return null;
    let g = Ap(c);
    Lh(g);
    let b = null;
    for (let v = 0; b == null && v < g.length; ++v) {
        let h = Zh(p);
        b = Qh(g[v], h, u)
    }
    return b
}

function Ap(c, n = [], o = [], u = "") {
    let r = (p, g, b) => {
        let v = {
            relativePath: b === void 0 ? p.path || "" : b,
            caseSensitive: p.caseSensitive === !0,
            childrenIndex: g,
            route: p
        };
        v.relativePath.startsWith("/") && (Rt(v.relativePath.startsWith(u), `Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), v.relativePath = v.relativePath.slice(u.length));
        let h = na([u, v.relativePath]),
            N = o.concat(v);
        p.children && p.children.length > 0 && (Rt(p.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${h}".`), Ap(p.children, n, N, h)), !(p.path == null && !p.index) && n.push({
            path: h,
            score: Gh(h, p.index),
            routesMeta: N
        })
    };
    return c.forEach((p, g) => {
        var b;
        if (p.path === "" || !((b = p.path) != null && b.includes("?"))) r(p, g);
        else
            for (let v of wp(p.path)) r(p, g, v)
    }), n
}

function wp(c) {
    let n = c.split("/");
    if (n.length === 0) return [];
    let [o, ...u] = n, r = o.endsWith("?"), p = o.replace(/\?$/, "");
    if (u.length === 0) return r ? [p, ""] : [p];
    let g = wp(u.join("/")),
        b = [];
    return b.push(...g.map(v => v === "" ? p : [p, v].join("/"))), r && b.push(...g), b.map(v => c.startsWith("/") && v === "" ? "/" : v)
}

function Lh(c) {
    c.sort((n, o) => n.score !== o.score ? o.score - n.score : Xh(n.routesMeta.map(u => u.childrenIndex), o.routesMeta.map(u => u.childrenIndex)))
}
var Uh = /^:[\w-]+$/,
    kh = 3,
    qh = 2,
    Hh = 1,
    Bh = 10,
    Yh = -2,
    rp = c => c === "*";

function Gh(c, n) {
    let o = c.split("/"),
        u = o.length;
    return o.some(rp) && (u += Yh), n && (u += qh), o.filter(r => !rp(r)).reduce((r, p) => r + (Uh.test(p) ? kh : p === "" ? Hh : Bh), u)
}

function Xh(c, n) {
    return c.length === n.length && c.slice(0, -1).every((u, r) => u === n[r]) ? c[c.length - 1] - n[n.length - 1] : 0
}

function Qh(c, n, o = !1) {
    let {
        routesMeta: u
    } = c, r = {}, p = "/", g = [];
    for (let b = 0; b < u.length; ++b) {
        let v = u[b],
            h = b === u.length - 1,
            N = p === "/" ? n : n.slice(p.length) || "/",
            T = yn({
                path: v.relativePath,
                caseSensitive: v.caseSensitive,
                end: h
            }, N),
            R = v.route;
        if (!T && h && o && !u[u.length - 1].route.index && (T = yn({
                path: v.relativePath,
                caseSensitive: v.caseSensitive,
                end: !1
            }, N)), !T) return null;
        Object.assign(r, T.params), g.push({
            params: r,
            pathname: na([p, T.pathname]),
            pathnameBase: Fh(na([p, T.pathnameBase])),
            route: R
        }), T.pathnameBase !== "/" && (p = na([p, T.pathnameBase]))
    }
    return g
}

function yn(c, n) {
    typeof c == "string" && (c = {
        path: c,
        caseSensitive: !1,
        end: !0
    });
    let [o, u] = Vh(c.path, c.caseSensitive, c.end), r = n.match(o);
    if (!r) return null;
    let p = r[0],
        g = p.replace(/(.)\/+$/, "$1"),
        b = r.slice(1);
    return {
        params: u.reduce((h, {
            paramName: N,
            isOptional: T
        }, R) => {
            if (N === "*") {
                let D = b[R] || "";
                g = p.slice(0, p.length - D.length).replace(/(.)\/+$/, "$1")
            }
            const z = b[R];
            return T && !z ? h[N] = void 0 : h[N] = (z || "").replace(/%2F/g, "/"), h
        }, {}),
        pathname: p,
        pathnameBase: g,
        pattern: c
    }
}

function Vh(c, n = !1, o = !0) {
    Me(c === "*" || !c.endsWith("*") || c.endsWith("/*"), `Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);
    let u = [],
        r = "^" + c.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (g, b, v) => (u.push({
            paramName: b,
            isOptional: v != null
        }), v ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return c.endsWith("*") ? (u.push({
        paramName: "*"
    }), r += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? r += "\\/*$" : c !== "" && c !== "/" && (r += "(?:(?=\\/|$))"), [new RegExp(r, n ? void 0 : "i"), u]
}

function Zh(c) {
    try {
        return c.split("/").map(n => decodeURIComponent(n).replace(/\//g, "%2F")).join("/")
    } catch (n) {
        return Me(!1, `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`), c
    }
}

function da(c, n) {
    if (n === "/") return c;
    if (!c.toLowerCase().startsWith(n.toLowerCase())) return null;
    let o = n.endsWith("/") ? n.length - 1 : n.length,
        u = c.charAt(o);
    return u && u !== "/" ? null : c.slice(o) || "/"
}

function Kh(c, n = "/") {
    let {
        pathname: o,
        search: u = "",
        hash: r = ""
    } = typeof c == "string" ? Vi(c) : c;
    return {
        pathname: o ? o.startsWith("/") ? o : Jh(o, n) : n,
        search: Ph(u),
        hash: Wh(r)
    }
}

function Jh(c, n) {
    let o = n.replace(/\/+$/, "").split("/");
    return c.split("/").forEach(r => {
        r === ".." ? o.length > 1 && o.pop() : r !== "." && o.push(r)
    }), o.length > 1 ? o.join("/") : "/"
}

function Go(c, n, o, u) {
    return `Cannot include a '${c}' character in a manually specified \`to.${n}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function $h(c) {
    return c.filter((n, o) => o === 0 || n.route.path && n.route.path.length > 0)
}

function Po(c) {
    let n = $h(c);
    return n.map((o, u) => u === n.length - 1 ? o.pathname : o.pathnameBase)
}

function Wo(c, n, o, u = !1) {
    let r;
    typeof c == "string" ? r = Vi(c) : (r = { ...c
    }, Rt(!r.pathname || !r.pathname.includes("?"), Go("?", "pathname", "search", r)), Rt(!r.pathname || !r.pathname.includes("#"), Go("#", "pathname", "hash", r)), Rt(!r.search || !r.search.includes("#"), Go("#", "search", "hash", r)));
    let p = c === "" || r.pathname === "",
        g = p ? "/" : r.pathname,
        b;
    if (g == null) b = o;
    else {
        let T = n.length - 1;
        if (!u && g.startsWith("..")) {
            let R = g.split("/");
            for (; R[0] === "..";) R.shift(), T -= 1;
            r.pathname = R.join("/")
        }
        b = T >= 0 ? n[T] : "/"
    }
    let v = Kh(r, b),
        h = g && g !== "/" && g.endsWith("/"),
        N = (p || g === ".") && o.endsWith("/");
    return !v.pathname.endsWith("/") && (h || N) && (v.pathname += "/"), v
}
var na = c => c.join("/").replace(/\/\/+/g, "/"),
    Fh = c => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Ph = c => !c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c,
    Wh = c => !c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c;

function Ih(c) {
    return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data" in c
}
var Ep = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ep);
var t0 = ["GET", ...Ep];
new Set(t0);
var Zi = y.createContext(null);
Zi.displayName = "DataRouter";
var jn = y.createContext(null);
jn.displayName = "DataRouterState";
var Tp = y.createContext({
    isTransitioning: !1
});
Tp.displayName = "ViewTransition";
var e0 = y.createContext(new Map);
e0.displayName = "Fetchers";
var a0 = y.createContext(null);
a0.displayName = "Await";
var ze = y.createContext(null);
ze.displayName = "Navigation";
var Pl = y.createContext(null);
Pl.displayName = "Location";
var Te = y.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Te.displayName = "Route";
var Io = y.createContext(null);
Io.displayName = "RouteError";

function i0(c, {
    relative: n
} = {}) {
    Rt(Ki(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: o,
        navigator: u
    } = y.useContext(ze), {
        hash: r,
        pathname: p,
        search: g
    } = Wl(c, {
        relative: n
    }), b = p;
    return o !== "/" && (b = p === "/" ? o : na([o, p])), u.createHref({
        pathname: b,
        search: g,
        hash: r
    })
}

function Ki() {
    return y.useContext(Pl) != null
}

function oa() {
    return Rt(Ki(), "useLocation() may be used only in the context of a <Router> component."), y.useContext(Pl).location
}
var Rp = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function Cp(c) {
    y.useContext(ze).static || y.useLayoutEffect(c)
}

function Nn() {
    let {
        isDataRoute: c
    } = y.useContext(Te);
    return c ? x0() : l0()
}

function l0() {
    Rt(Ki(), "useNavigate() may be used only in the context of a <Router> component.");
    let c = y.useContext(Zi),
        {
            basename: n,
            navigator: o
        } = y.useContext(ze),
        {
            matches: u
        } = y.useContext(Te),
        {
            pathname: r
        } = oa(),
        p = JSON.stringify(Po(u)),
        g = y.useRef(!1);
    return Cp(() => {
        g.current = !0
    }), y.useCallback((v, h = {}) => {
        if (Me(g.current, Rp), !g.current) return;
        if (typeof v == "number") {
            o.go(v);
            return
        }
        let N = Wo(v, JSON.parse(p), r, h.relative === "path");
        c == null && n !== "/" && (N.pathname = N.pathname === "/" ? n : na([n, N.pathname])), (h.replace ? o.replace : o.push)(N, h.state, h)
    }, [n, o, p, r, c])
}
var s0 = y.createContext(null);

function n0(c) {
    let n = y.useContext(Te).outlet;
    return n && y.createElement(s0.Provider, {
        value: c
    }, n)
}

function d0() {
    let {
        matches: c
    } = y.useContext(Te), n = c[c.length - 1];
    return n ? n.params : {}
}

function Wl(c, {
    relative: n
} = {}) {
    let {
        matches: o
    } = y.useContext(Te), {
        pathname: u
    } = oa(), r = JSON.stringify(Po(o));
    return y.useMemo(() => Wo(c, JSON.parse(r), u, n === "path"), [c, r, u, n])
}

function o0(c, n) {
    return Op(c, n)
}

function Op(c, n, o, u) {
    var k;
    Rt(Ki(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: r,
        static: p
    } = y.useContext(ze), {
        matches: g
    } = y.useContext(Te), b = g[g.length - 1], v = b ? b.params : {}, h = b ? b.pathname : "/", N = b ? b.pathnameBase : "/", T = b && b.route; {
        let w = T && T.path || "";
        Dp(h, !T || w.endsWith("*") || w.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)
    }
    let R = oa(),
        z;
    if (n) {
        let w = typeof n == "string" ? Vi(n) : n;
        Rt(N === "/" || ((k = w.pathname) == null ? void 0 : k.startsWith(N)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${w.pathname}" was given in the \`location\` prop.`), z = w
    } else z = R;
    let D = z.pathname || "/",
        H = D;
    if (N !== "/") {
        let w = N.replace(/^\//, "").split("/");
        H = "/" + D.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let G = !p && o && o.matches && o.matches.length > 0 ? o.matches : Np(c, {
        pathname: H
    });
    Me(T || G != null, `No routes matched location "${z.pathname}${z.search}${z.hash}" `), Me(G == null || G[G.length - 1].route.element !== void 0 || G[G.length - 1].route.Component !== void 0 || G[G.length - 1].route.lazy !== void 0, `Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let U = p0(G && G.map(w => Object.assign({}, w, {
        params: Object.assign({}, v, w.params),
        pathname: na([N, r.encodeLocation ? r.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? N : na([N, r.encodeLocation ? r.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), g, o, u);
    return n && U ? y.createElement(Pl.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...z
            },
            navigationType: "POP"
        }
    }, U) : U
}

function u0() {
    let c = b0(),
        n = Ih(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c),
        o = c instanceof Error ? c.stack : null,
        u = "rgba(200,200,200, 0.5)",
        r = {
            padding: "0.5rem",
            backgroundColor: u
        },
        p = {
            padding: "2px 4px",
            backgroundColor: u
        },
        g = null;
    return console.error("Error handled by React Router default ErrorBoundary:", c), g = y.createElement(y.Fragment, null, y.createElement("p", null, "💿 Hey developer 👋"), y.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", y.createElement("code", {
        style: p
    }, "ErrorBoundary"), " or", " ", y.createElement("code", {
        style: p
    }, "errorElement"), " prop on your route.")), y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, n), o ? y.createElement("pre", {
        style: r
    }, o) : null, g)
}
var c0 = y.createElement(u0, null),
    r0 = class extends y.Component {
        constructor(c) {
            super(c), this.state = {
                location: c.location,
                revalidation: c.revalidation,
                error: c.error
            }
        }
        static getDerivedStateFromError(c) {
            return {
                error: c
            }
        }
        static getDerivedStateFromProps(c, n) {
            return n.location !== c.location || n.revalidation !== "idle" && c.revalidation === "idle" ? {
                error: c.error,
                location: c.location,
                revalidation: c.revalidation
            } : {
                error: c.error !== void 0 ? c.error : n.error,
                location: n.location,
                revalidation: c.revalidation || n.revalidation
            }
        }
        componentDidCatch(c, n) {
            console.error("React Router caught the following error during render", c, n)
        }
        render() {
            return this.state.error !== void 0 ? y.createElement(Te.Provider, {
                value: this.props.routeContext
            }, y.createElement(Io.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function f0({
    routeContext: c,
    match: n,
    children: o
}) {
    let u = y.useContext(Zi);
    return u && u.static && u.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = n.route.id), y.createElement(Te.Provider, {
        value: c
    }, o)
}

function p0(c, n = [], o = null, u = null) {
    if (c == null) {
        if (!o) return null;
        if (o.errors) c = o.matches;
        else if (n.length === 0 && !o.initialized && o.matches.length > 0) c = o.matches;
        else return null
    }
    let r = c,
        p = o == null ? void 0 : o.errors;
    if (p != null) {
        let v = r.findIndex(h => h.route.id && (p == null ? void 0 : p[h.route.id]) !== void 0);
        Rt(v >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`), r = r.slice(0, Math.min(r.length, v + 1))
    }
    let g = !1,
        b = -1;
    if (o)
        for (let v = 0; v < r.length; v++) {
            let h = r[v];
            if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (b = v), h.route.id) {
                let {
                    loaderData: N,
                    errors: T
                } = o, R = h.route.loader && !N.hasOwnProperty(h.route.id) && (!T || T[h.route.id] === void 0);
                if (h.route.lazy || R) {
                    g = !0, b >= 0 ? r = r.slice(0, b + 1) : r = [r[0]];
                    break
                }
            }
        }
    return r.reduceRight((v, h, N) => {
        let T, R = !1,
            z = null,
            D = null;
        o && (T = p && h.route.id ? p[h.route.id] : void 0, z = h.route.errorElement || c0, g && (b < 0 && N === 0 ? (Dp("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), R = !0, D = null) : b === N && (R = !0, D = h.route.hydrateFallbackElement || null)));
        let H = n.concat(r.slice(0, N + 1)),
            G = () => {
                let U;
                return T ? U = z : R ? U = D : h.route.Component ? U = y.createElement(h.route.Component, null) : h.route.element ? U = h.route.element : U = v, y.createElement(f0, {
                    match: h,
                    routeContext: {
                        outlet: v,
                        matches: H,
                        isDataRoute: o != null
                    },
                    children: U
                })
            };
        return o && (h.route.ErrorBoundary || h.route.errorElement || N === 0) ? y.createElement(r0, {
            location: o.location,
            revalidation: o.revalidation,
            component: z,
            error: T,
            children: G(),
            routeContext: {
                outlet: null,
                matches: H,
                isDataRoute: !0
            }
        }) : G()
    }, null)
}

function tu(c) {
    return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function m0(c) {
    let n = y.useContext(Zi);
    return Rt(n, tu(c)), n
}

function v0(c) {
    let n = y.useContext(jn);
    return Rt(n, tu(c)), n
}

function h0(c) {
    let n = y.useContext(Te);
    return Rt(n, tu(c)), n
}

function eu(c) {
    let n = h0(c),
        o = n.matches[n.matches.length - 1];
    return Rt(o.route.id, `${c} can only be used on routes that contain a unique "id"`), o.route.id
}

function g0() {
    return eu("useRouteId")
}

function b0() {
    var u;
    let c = y.useContext(Io),
        n = v0("useRouteError"),
        o = eu("useRouteError");
    return c !== void 0 ? c : (u = n.errors) == null ? void 0 : u[o]
}

function x0() {
    let {
        router: c
    } = m0("useNavigate"), n = eu("useNavigate"), o = y.useRef(!1);
    return Cp(() => {
        o.current = !0
    }), y.useCallback(async (r, p = {}) => {
        Me(o.current, Rp), o.current && (typeof r == "number" ? c.navigate(r) : await c.navigate(r, {
            fromRouteId: n,
            ...p
        }))
    }, [c, n])
}
var fp = {};

function Dp(c, n, o) {
    !n && !fp[c] && (fp[c] = !0, Me(!1, o))
}
y.memo(y0);

function y0({
    routes: c,
    future: n,
    state: o
}) {
    return Op(c, void 0, o, n)
}

function pp({
    to: c,
    replace: n,
    state: o,
    relative: u
}) {
    Rt(Ki(), "<Navigate> may be used only in the context of a <Router> component.");
    let {
        static: r
    } = y.useContext(ze);
    Me(!r, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let {
        matches: p
    } = y.useContext(Te), {
        pathname: g
    } = oa(), b = Nn(), v = Wo(c, Po(p), g, u === "path"), h = JSON.stringify(v);
    return y.useEffect(() => {
        b(JSON.parse(h), {
            replace: n,
            state: o,
            relative: u
        })
    }, [b, h, u, n, o]), null
}

function S0(c) {
    return n0(c.context)
}

function It(c) {
    Rt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function j0({
    basename: c = "/",
    children: n = null,
    location: o,
    navigationType: u = "POP",
    navigator: r,
    static: p = !1
}) {
    Rt(!Ki(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let g = c.replace(/^\/*/, "/"),
        b = y.useMemo(() => ({
            basename: g,
            navigator: r,
            static: p,
            future: {}
        }), [g, r, p]);
    typeof o == "string" && (o = Vi(o));
    let {
        pathname: v = "/",
        search: h = "",
        hash: N = "",
        state: T = null,
        key: R = "default"
    } = o, z = y.useMemo(() => {
        let D = da(v, g);
        return D == null ? null : {
            location: {
                pathname: D,
                search: h,
                hash: N,
                state: T,
                key: R
            },
            navigationType: u
        }
    }, [g, v, h, N, T, R, u]);
    return Me(z != null, `<Router basename="${g}"> is not able to match the URL "${v}${h}${N}" because it does not start with the basename, so the <Router> won't render anything.`), z == null ? null : y.createElement(ze.Provider, {
        value: b
    }, y.createElement(Pl.Provider, {
        children: n,
        value: z
    }))
}

function N0({
    children: c,
    location: n
}) {
    return o0(Zo(c), n)
}

function Zo(c, n = []) {
    let o = [];
    return y.Children.forEach(c, (u, r) => {
        if (!y.isValidElement(u)) return;
        let p = [...n, r];
        if (u.type === y.Fragment) {
            o.push.apply(o, Zo(u.props.children, p));
            return
        }
        Rt(u.type === It, `[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Rt(!u.props.index || !u.props.children, "An index route cannot have child routes.");
        let g = {
            id: u.props.id || p.join("-"),
            caseSensitive: u.props.caseSensitive,
            element: u.props.element,
            Component: u.props.Component,
            index: u.props.index,
            path: u.props.path,
            loader: u.props.loader,
            action: u.props.action,
            hydrateFallbackElement: u.props.hydrateFallbackElement,
            HydrateFallback: u.props.HydrateFallback,
            errorElement: u.props.errorElement,
            ErrorBoundary: u.props.ErrorBoundary,
            hasErrorBoundary: u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null,
            shouldRevalidate: u.props.shouldRevalidate,
            handle: u.props.handle,
            lazy: u.props.lazy
        };
        u.props.children && (g.children = Zo(u.props.children, p)), o.push(g)
    }), o
}
var bn = "get",
    xn = "application/x-www-form-urlencoded";

function An(c) {
    return c != null && typeof c.tagName == "string"
}

function A0(c) {
    return An(c) && c.tagName.toLowerCase() === "button"
}

function w0(c) {
    return An(c) && c.tagName.toLowerCase() === "form"
}

function E0(c) {
    return An(c) && c.tagName.toLowerCase() === "input"
}

function T0(c) {
    return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey)
}

function R0(c, n) {
    return c.button === 0 && (!n || n === "_self") && !T0(c)
}
var hn = null;

function C0() {
    if (hn === null) try {
        new FormData(document.createElement("form"), 0), hn = !1
    } catch {
        hn = !0
    }
    return hn
}
var O0 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Xo(c) {
    return c != null && !O0.has(c) ? (Me(!1, `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xn}"`), null) : c
}

function D0(c, n) {
    let o, u, r, p, g;
    if (w0(c)) {
        let b = c.getAttribute("action");
        u = b ? da(b, n) : null, o = c.getAttribute("method") || bn, r = Xo(c.getAttribute("enctype")) || xn, p = new FormData(c)
    } else if (A0(c) || E0(c) && (c.type === "submit" || c.type === "image")) {
        let b = c.form;
        if (b == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let v = c.getAttribute("formaction") || b.getAttribute("action");
        if (u = v ? da(v, n) : null, o = c.getAttribute("formmethod") || b.getAttribute("method") || bn, r = Xo(c.getAttribute("formenctype")) || Xo(b.getAttribute("enctype")) || xn, p = new FormData(b, c), !C0()) {
            let {
                name: h,
                type: N,
                value: T
            } = c;
            if (N === "image") {
                let R = h ? `${h}.` : "";
                p.append(`${R}x`, "0"), p.append(`${R}y`, "0")
            } else h && p.append(h, T)
        }
    } else {
        if (An(c)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        o = bn, u = null, r = xn, g = c
    }
    return p && r === "text/plain" && (g = p, p = void 0), {
        action: u,
        method: o.toLowerCase(),
        encType: r,
        formData: p,
        body: g
    }
}

function au(c, n) {
    if (c === !1 || c === null || typeof c > "u") throw new Error(n)
}
async function _0(c, n) {
    if (c.id in n) return n[c.id];
    try {
        let o = await
        import (c.module);
        return n[c.id] = o, o
    } catch (o) {
        return console.error(`Error loading route module \`${c.module}\`, reloading page...`), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function M0(c) {
    return c == null ? !1 : c.href == null ? c.rel === "preload" && typeof c.imageSrcSet == "string" && typeof c.imageSizes == "string" : typeof c.rel == "string" && typeof c.href == "string"
}
async function z0(c, n, o) {
    let u = await Promise.all(c.map(async r => {
        let p = n.routes[r.route.id];
        if (p) {
            let g = await _0(p, o);
            return g.links ? g.links() : []
        }
        return []
    }));
    return q0(u.flat(1).filter(M0).filter(r => r.rel === "stylesheet" || r.rel === "preload").map(r => r.rel === "stylesheet" ? { ...r,
        rel: "prefetch",
        as: "style"
    } : { ...r,
        rel: "prefetch"
    }))
}

function mp(c, n, o, u, r, p) {
    let g = (v, h) => o[h] ? v.route.id !== o[h].route.id : !0,
        b = (v, h) => {
            var N;
            return o[h].pathname !== v.pathname || ((N = o[h].route.path) == null ? void 0 : N.endsWith("*")) && o[h].params["*"] !== v.params["*"]
        };
    return p === "assets" ? n.filter((v, h) => g(v, h) || b(v, h)) : p === "data" ? n.filter((v, h) => {
        var T;
        let N = u.routes[v.route.id];
        if (!N || !N.hasLoader) return !1;
        if (g(v, h) || b(v, h)) return !0;
        if (v.route.shouldRevalidate) {
            let R = v.route.shouldRevalidate({
                currentUrl: new URL(r.pathname + r.search + r.hash, window.origin),
                currentParams: ((T = o[0]) == null ? void 0 : T.params) || {},
                nextUrl: new URL(c, window.origin),
                nextParams: v.params,
                defaultShouldRevalidate: !0
            });
            if (typeof R == "boolean") return R
        }
        return !0
    }) : []
}

function L0(c, n, {
    includeHydrateFallback: o
} = {}) {
    return U0(c.map(u => {
        let r = n.routes[u.route.id];
        if (!r) return [];
        let p = [r.module];
        return r.clientActionModule && (p = p.concat(r.clientActionModule)), r.clientLoaderModule && (p = p.concat(r.clientLoaderModule)), o && r.hydrateFallbackModule && (p = p.concat(r.hydrateFallbackModule)), r.imports && (p = p.concat(r.imports)), p
    }).flat(1))
}

function U0(c) {
    return [...new Set(c)]
}

function k0(c) {
    let n = {},
        o = Object.keys(c).sort();
    for (let u of o) n[u] = c[u];
    return n
}

function q0(c, n) {
    let o = new Set;
    return new Set(n), c.reduce((u, r) => {
        let p = JSON.stringify(k0(r));
        return o.has(p) || (o.add(p), u.push({
            key: p,
            link: r
        })), u
    }, [])
}

function H0(c, n) {
    let o = typeof c == "string" ? new URL(c, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : c;
    return o.pathname === "/" ? o.pathname = "_root.data" : n && da(o.pathname, n) === "/" ? o.pathname = `${n.replace(/\/$/,"")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/,"")}.data`, o
}

function _p() {
    let c = y.useContext(Zi);
    return au(c, "You must render this element inside a <DataRouterContext.Provider> element"), c
}

function B0() {
    let c = y.useContext(jn);
    return au(c, "You must render this element inside a <DataRouterStateContext.Provider> element"), c
}
var iu = y.createContext(void 0);
iu.displayName = "FrameworkContext";

function Mp() {
    let c = y.useContext(iu);
    return au(c, "You must render this element inside a <HydratedRouter> element"), c
}

function Y0(c, n) {
    let o = y.useContext(iu),
        [u, r] = y.useState(!1),
        [p, g] = y.useState(!1),
        {
            onFocus: b,
            onBlur: v,
            onMouseEnter: h,
            onMouseLeave: N,
            onTouchStart: T
        } = n,
        R = y.useRef(null);
    y.useEffect(() => {
        if (c === "render" && g(!0), c === "viewport") {
            let H = U => {
                    U.forEach(k => {
                        g(k.isIntersecting)
                    })
                },
                G = new IntersectionObserver(H, {
                    threshold: .5
                });
            return R.current && G.observe(R.current), () => {
                G.disconnect()
            }
        }
    }, [c]), y.useEffect(() => {
        if (u) {
            let H = setTimeout(() => {
                g(!0)
            }, 100);
            return () => {
                clearTimeout(H)
            }
        }
    }, [u]);
    let z = () => {
            r(!0)
        },
        D = () => {
            r(!1), g(!1)
        };
    return o ? c !== "intent" ? [p, R, {}] : [p, R, {
        onFocus: $l(b, z),
        onBlur: $l(v, D),
        onMouseEnter: $l(h, z),
        onMouseLeave: $l(N, D),
        onTouchStart: $l(T, z)
    }] : [!1, R, {}]
}

function $l(c, n) {
    return o => {
        c && c(o), o.defaultPrevented || n(o)
    }
}

function G0({
    page: c,
    ...n
}) {
    let {
        router: o
    } = _p(), u = y.useMemo(() => Np(o.routes, c, o.basename), [o.routes, c, o.basename]);
    return u ? y.createElement(Q0, {
        page: c,
        matches: u,
        ...n
    }) : null
}

function X0(c) {
    let {
        manifest: n,
        routeModules: o
    } = Mp(), [u, r] = y.useState([]);
    return y.useEffect(() => {
        let p = !1;
        return z0(c, n, o).then(g => {
            p || r(g)
        }), () => {
            p = !0
        }
    }, [c, n, o]), u
}

function Q0({
    page: c,
    matches: n,
    ...o
}) {
    let u = oa(),
        {
            manifest: r,
            routeModules: p
        } = Mp(),
        {
            basename: g
        } = _p(),
        {
            loaderData: b,
            matches: v
        } = B0(),
        h = y.useMemo(() => mp(c, n, v, r, u, "data"), [c, n, v, r, u]),
        N = y.useMemo(() => mp(c, n, v, r, u, "assets"), [c, n, v, r, u]),
        T = y.useMemo(() => {
            if (c === u.pathname + u.search + u.hash) return [];
            let D = new Set,
                H = !1;
            if (n.forEach(U => {
                    var w;
                    let k = r.routes[U.route.id];
                    !k || !k.hasLoader || (!h.some(K => K.route.id === U.route.id) && U.route.id in b && ((w = p[U.route.id]) != null && w.shouldRevalidate) || k.hasClientLoader ? H = !0 : D.add(U.route.id))
                }), D.size === 0) return [];
            let G = H0(c, g);
            return H && D.size > 0 && G.searchParams.set("_routes", n.filter(U => D.has(U.route.id)).map(U => U.route.id).join(",")), [G.pathname + G.search]
        }, [g, b, u, r, h, n, c, p]),
        R = y.useMemo(() => L0(N, r), [N, r]),
        z = X0(N);
    return y.createElement(y.Fragment, null, T.map(D => y.createElement("link", {
        key: D,
        rel: "prefetch",
        as: "fetch",
        href: D,
        ...o
    })), R.map(D => y.createElement("link", {
        key: D,
        rel: "modulepreload",
        href: D,
        ...o
    })), z.map(({
        key: D,
        link: H
    }) => y.createElement("link", {
        key: D,
        ...H
    })))
}

function V0(...c) {
    return n => {
        c.forEach(o => {
            typeof o == "function" ? o(n) : o != null && (o.current = n)
        })
    }
}
var zp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    zp && (window.__reactRouterVersion = "7.3.0")
} catch {}

function Z0({
    basename: c,
    children: n,
    window: o
}) {
    let u = y.useRef();
    u.current == null && (u.current = Dh({
        window: o,
        v5Compat: !0
    }));
    let r = u.current,
        [p, g] = y.useState({
            action: r.action,
            location: r.location
        }),
        b = y.useCallback(v => {
            y.startTransition(() => g(v))
        }, [g]);
    return y.useLayoutEffect(() => r.listen(b), [r, b]), y.createElement(j0, {
        basename: c,
        children: n,
        location: p.location,
        navigationType: p.action,
        navigator: r
    })
}
var Lp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    La = y.forwardRef(function({
        onClick: n,
        discover: o = "render",
        prefetch: u = "none",
        relative: r,
        reloadDocument: p,
        replace: g,
        state: b,
        target: v,
        to: h,
        preventScrollReset: N,
        viewTransition: T,
        ...R
    }, z) {
        let {
            basename: D
        } = y.useContext(ze), H = typeof h == "string" && Lp.test(h), G, U = !1;
        if (typeof h == "string" && H && (G = h, zp)) try {
            let V = new URL(window.location.href),
                tt = h.startsWith("//") ? new URL(V.protocol + h) : new URL(h),
                zt = da(tt.pathname, D);
            tt.origin === V.origin && zt != null ? h = zt + tt.search + tt.hash : U = !0
        } catch {
            Me(!1, `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let k = i0(h, {
                relative: r
            }),
            [w, K, Z] = Y0(u, R),
            _ = $0(h, {
                replace: g,
                state: b,
                target: v,
                preventScrollReset: N,
                relative: r,
                viewTransition: T
            });

        function B(V) {
            n && n(V), V.defaultPrevented || _(V)
        }
        let I = y.createElement("a", { ...R,
            ...Z,
            href: G || k,
            onClick: U || p ? n : B,
            ref: V0(z, K),
            target: v,
            "data-discover": !H && o === "render" ? "true" : void 0
        });
        return w && !H ? y.createElement(y.Fragment, null, I, y.createElement(G0, {
            page: k
        })) : I
    });
La.displayName = "Link";
var Ko = y.forwardRef(function({
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: u = "",
    end: r = !1,
    style: p,
    to: g,
    viewTransition: b,
    children: v,
    ...h
}, N) {
    let T = Wl(g, {
            relative: h.relative
        }),
        R = oa(),
        z = y.useContext(jn),
        {
            navigator: D,
            basename: H
        } = y.useContext(ze),
        G = z != null && tg(T) && b === !0,
        U = D.encodeLocation ? D.encodeLocation(T).pathname : T.pathname,
        k = R.pathname,
        w = z && z.navigation && z.navigation.location ? z.navigation.location.pathname : null;
    o || (k = k.toLowerCase(), w = w ? w.toLowerCase() : null, U = U.toLowerCase()), w && H && (w = da(w, H) || w);
    const K = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
    let Z = k === U || !r && k.startsWith(U) && k.charAt(K) === "/",
        _ = w != null && (w === U || !r && w.startsWith(U) && w.charAt(U.length) === "/"),
        B = {
            isActive: Z,
            isPending: _,
            isTransitioning: G
        },
        I = Z ? n : void 0,
        V;
    typeof u == "function" ? V = u(B) : V = [u, Z ? "active" : null, _ ? "pending" : null, G ? "transitioning" : null].filter(Boolean).join(" ");
    let tt = typeof p == "function" ? p(B) : p;
    return y.createElement(La, { ...h,
        "aria-current": I,
        className: V,
        ref: N,
        style: tt,
        to: g,
        viewTransition: b
    }, typeof v == "function" ? v(B) : v)
});
Ko.displayName = "NavLink";
var K0 = y.forwardRef(({
    discover: c = "render",
    fetcherKey: n,
    navigate: o,
    reloadDocument: u,
    replace: r,
    state: p,
    method: g = bn,
    action: b,
    onSubmit: v,
    relative: h,
    preventScrollReset: N,
    viewTransition: T,
    ...R
}, z) => {
    let D = W0(),
        H = I0(b, {
            relative: h
        }),
        G = g.toLowerCase() === "get" ? "get" : "post",
        U = typeof b == "string" && Lp.test(b),
        k = w => {
            if (v && v(w), w.defaultPrevented) return;
            w.preventDefault();
            let K = w.nativeEvent.submitter,
                Z = (K == null ? void 0 : K.getAttribute("formmethod")) || g;
            D(K || w.currentTarget, {
                fetcherKey: n,
                method: Z,
                navigate: o,
                replace: r,
                state: p,
                relative: h,
                preventScrollReset: N,
                viewTransition: T
            })
        };
    return y.createElement("form", {
        ref: z,
        method: G,
        action: H,
        onSubmit: u ? v : k,
        ...R,
        "data-discover": !U && c === "render" ? "true" : void 0
    })
});
K0.displayName = "Form";

function J0(c) {
    return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Up(c) {
    let n = y.useContext(Zi);
    return Rt(n, J0(c)), n
}

function $0(c, {
    target: n,
    replace: o,
    state: u,
    preventScrollReset: r,
    relative: p,
    viewTransition: g
} = {}) {
    let b = Nn(),
        v = oa(),
        h = Wl(c, {
            relative: p
        });
    return y.useCallback(N => {
        if (R0(N, n)) {
            N.preventDefault();
            let T = o !== void 0 ? o : Fl(v) === Fl(h);
            b(c, {
                replace: T,
                state: u,
                preventScrollReset: r,
                relative: p,
                viewTransition: g
            })
        }
    }, [v, b, h, o, u, n, c, r, p, g])
}
var F0 = 0,
    P0 = () => `__${String(++F0)}__`;

function W0() {
    let {
        router: c
    } = Up("useSubmit"), {
        basename: n
    } = y.useContext(ze), o = g0();
    return y.useCallback(async (u, r = {}) => {
        let {
            action: p,
            method: g,
            encType: b,
            formData: v,
            body: h
        } = D0(u, n);
        if (r.navigate === !1) {
            let N = r.fetcherKey || P0();
            await c.fetch(N, o, r.action || p, {
                preventScrollReset: r.preventScrollReset,
                formData: v,
                body: h,
                formMethod: r.method || g,
                formEncType: r.encType || b,
                flushSync: r.flushSync
            })
        } else await c.navigate(r.action || p, {
            preventScrollReset: r.preventScrollReset,
            formData: v,
            body: h,
            formMethod: r.method || g,
            formEncType: r.encType || b,
            replace: r.replace,
            state: r.state,
            fromRouteId: o,
            flushSync: r.flushSync,
            viewTransition: r.viewTransition
        })
    }, [c, n, o])
}

function I0(c, {
    relative: n
} = {}) {
    let {
        basename: o
    } = y.useContext(ze), u = y.useContext(Te);
    Rt(u, "useFormAction must be used inside a RouteContext");
    let [r] = u.matches.slice(-1), p = { ...Wl(c || ".", {
            relative: n
        })
    }, g = oa();
    if (c == null) {
        p.search = g.search;
        let b = new URLSearchParams(p.search),
            v = b.getAll("index");
        if (v.some(N => N === "")) {
            b.delete("index"), v.filter(T => T).forEach(T => b.append("index", T));
            let N = b.toString();
            p.search = N ? `?${N}` : ""
        }
    }
    return (!c || c === ".") && r.route.index && (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (p.pathname = p.pathname === "/" ? o : na([o, p.pathname])), Fl(p)
}

function tg(c, n = {}) {
    let o = y.useContext(Tp);
    Rt(o != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: u
    } = Up("useViewTransitionState"), r = Wl(c, {
        relative: n.relative
    });
    if (!o.isTransitioning) return !1;
    let p = da(o.currentLocation.pathname, u) || o.currentLocation.pathname,
        g = da(o.nextLocation.pathname, u) || o.nextLocation.pathname;
    return yn(r.pathname, g) != null || yn(r.pathname, p) != null
}
new TextEncoder;
class ie extends Error {
    constructor(n) {
        var o, u, r, p;
        super("ClientResponseError"), this.url = "", this.status = 0, this.response = {}, this.isAbort = !1, this.originalError = null, Object.setPrototypeOf(this, ie.prototype), n !== null && typeof n == "object" && (this.originalError = n.originalError, this.url = typeof n.url == "string" ? n.url : "", this.status = typeof n.status == "number" ? n.status : 0, this.isAbort = !!n.isAbort || n.name === "AbortError" || n.message === "Aborted", n.response !== null && typeof n.response == "object" ? this.response = n.response : n.data !== null && typeof n.data == "object" ? this.response = n.data : this.response = {}), this.originalError || n instanceof ie || (this.originalError = n), this.name = "ClientResponseError " + this.status, this.message = (o = this.response) == null ? void 0 : o.message, this.message || (this.isAbort ? this.message = "The request was aborted (most likely autocancelled; you can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation)." : (p = (r = (u = this.originalError) == null ? void 0 : u.cause) == null ? void 0 : r.message) != null && p.includes("ECONNREFUSED ::1") ? this.message = "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : this.message = "Something went wrong."), this.cause = this.originalError
    }
    get data() {
        return this.response
    }
    toJSON() {
        return { ...this
        }
    }
}
const gn = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

function eg(c, n) {
    const o = {};
    if (typeof c != "string") return o;
    const u = Object.assign({}, {}).decode || ag;
    let r = 0;
    for (; r < c.length;) {
        const p = c.indexOf("=", r);
        if (p === -1) break;
        let g = c.indexOf(";", r);
        if (g === -1) g = c.length;
        else if (g < p) {
            r = c.lastIndexOf(";", p - 1) + 1;
            continue
        }
        const b = c.slice(r, p).trim();
        if (o[b] === void 0) {
            let v = c.slice(p + 1, g).trim();
            v.charCodeAt(0) === 34 && (v = v.slice(1, -1));
            try {
                o[b] = u(v)
            } catch {
                o[b] = v
            }
        }
        r = g + 1
    }
    return o
}

function vp(c, n, o) {
    const u = Object.assign({}, o || {}),
        r = u.encode || ig;
    if (!gn.test(c)) throw new TypeError("argument name is invalid");
    const p = r(n);
    if (p && !gn.test(p)) throw new TypeError("argument val is invalid");
    let g = c + "=" + p;
    if (u.maxAge != null) {
        const b = u.maxAge - 0;
        if (isNaN(b) || !isFinite(b)) throw new TypeError("option maxAge is invalid");
        g += "; Max-Age=" + Math.floor(b)
    }
    if (u.domain) {
        if (!gn.test(u.domain)) throw new TypeError("option domain is invalid");
        g += "; Domain=" + u.domain
    }
    if (u.path) {
        if (!gn.test(u.path)) throw new TypeError("option path is invalid");
        g += "; Path=" + u.path
    }
    if (u.expires) {
        if (! function(v) {
                return Object.prototype.toString.call(v) === "[object Date]" || v instanceof Date
            }(u.expires) || isNaN(u.expires.valueOf())) throw new TypeError("option expires is invalid");
        g += "; Expires=" + u.expires.toUTCString()
    }
    if (u.httpOnly && (g += "; HttpOnly"), u.secure && (g += "; Secure"), u.priority) switch (typeof u.priority == "string" ? u.priority.toLowerCase() : u.priority) {
        case "low":
            g += "; Priority=Low";
            break;
        case "medium":
            g += "; Priority=Medium";
            break;
        case "high":
            g += "; Priority=High";
            break;
        default:
            throw new TypeError("option priority is invalid")
    }
    if (u.sameSite) switch (typeof u.sameSite == "string" ? u.sameSite.toLowerCase() : u.sameSite) {
        case !0:
            g += "; SameSite=Strict";
            break;
        case "lax":
            g += "; SameSite=Lax";
            break;
        case "strict":
            g += "; SameSite=Strict";
            break;
        case "none":
            g += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
    }
    return g
}

function ag(c) {
    return c.indexOf("%") !== -1 ? decodeURIComponent(c) : c
}

function ig(c) {
    return encodeURIComponent(c)
}
const lg = typeof navigator < "u" && navigator.product === "ReactNative" || typeof global < "u" && global.HermesInternal;
let kp;

function Bi(c) {
    if (c) try {
        const n = decodeURIComponent(kp(c.split(".")[1]).split("").map(function(o) {
            return "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2)
        }).join(""));
        return JSON.parse(n) || {}
    } catch {}
    return {}
}

function qp(c, n = 0) {
    let o = Bi(c);
    return !(Object.keys(o).length > 0 && (!o.exp || o.exp - n > Date.now() / 1e3))
}
kp = typeof atob != "function" || lg ? c => {
    let n = String(c).replace(/=+$/, "");
    if (n.length % 4 == 1) throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    for (var o, u, r = 0, p = 0, g = ""; u = n.charAt(p++); ~u && (o = r % 4 ? 64 * o + u : u, r++ % 4) ? g += String.fromCharCode(255 & o >> (-2 * r & 6)) : 0) u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(u);
    return g
} : atob;
const hp = "pb_auth";
class lu {
    constructor() {
        this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = []
    }
    get token() {
        return this.baseToken
    }
    get record() {
        return this.baseModel
    }
    get model() {
        return this.baseModel
    }
    get isValid() {
        return !qp(this.token)
    }
    get isSuperuser() {
        var o, u;
        let n = Bi(this.token);
        return n.type == "auth" && (((o = this.record) == null ? void 0 : o.collectionName) == "_superusers" || !((u = this.record) != null && u.collectionName) && n.collectionId == "pbc_3142635823")
    }
    get isAdmin() {
        return console.warn("Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"), this.isSuperuser
    }
    get isAuthRecord() {
        return console.warn("Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"), Bi(this.token).type == "auth" && !this.isSuperuser
    }
    save(n, o) {
        this.baseToken = n || "", this.baseModel = o || null, this.triggerChange()
    }
    clear() {
        this.baseToken = "", this.baseModel = null, this.triggerChange()
    }
    loadFromCookie(n, o = hp) {
        const u = eg(n || "")[o] || "";
        let r = {};
        try {
            r = JSON.parse(u), (typeof r === null || typeof r != "object" || Array.isArray(r)) && (r = {})
        } catch {}
        this.save(r.token || "", r.record || r.model || null)
    }
    exportToCookie(n, o = hp) {
        var v, h;
        const u = {
                secure: !0,
                sameSite: !0,
                httpOnly: !0,
                path: "/"
            },
            r = Bi(this.token);
        u.expires = r != null && r.exp ? new Date(1e3 * r.exp) : new Date("1970-01-01"), n = Object.assign({}, u, n);
        const p = {
            token: this.token,
            record: this.record ? JSON.parse(JSON.stringify(this.record)) : null
        };
        let g = vp(o, JSON.stringify(p), n);
        const b = typeof Blob < "u" ? new Blob([g]).size : g.length;
        if (p.record && b > 4096) {
            p.record = {
                id: (v = p.record) == null ? void 0 : v.id,
                email: (h = p.record) == null ? void 0 : h.email
            };
            const N = ["collectionId", "collectionName", "verified"];
            for (const T in this.record) N.includes(T) && (p.record[T] = this.record[T]);
            g = vp(o, JSON.stringify(p), n)
        }
        return g
    }
    onChange(n, o = !1) {
        return this._onChangeCallbacks.push(n), o && n(this.token, this.record), () => {
            for (let u = this._onChangeCallbacks.length - 1; u >= 0; u--)
                if (this._onChangeCallbacks[u] == n) return delete this._onChangeCallbacks[u], void this._onChangeCallbacks.splice(u, 1)
        }
    }
    triggerChange() {
        for (const n of this._onChangeCallbacks) n && n(this.token, this.record)
    }
}
class sg extends lu {
    constructor(n = "pocketbase_auth") {
        super(), this.storageFallback = {}, this.storageKey = n, this._bindStorageEvent()
    }
    get token() {
        return (this._storageGet(this.storageKey) || {}).token || ""
    }
    get record() {
        const n = this._storageGet(this.storageKey) || {};
        return n.record || n.model || null
    }
    get model() {
        return this.record
    }
    save(n, o) {
        this._storageSet(this.storageKey, {
            token: n,
            record: o
        }), super.save(n, o)
    }
    clear() {
        this._storageRemove(this.storageKey), super.clear()
    }
    _storageGet(n) {
        if (typeof window < "u" && (window != null && window.localStorage)) {
            const o = window.localStorage.getItem(n) || "";
            try {
                return JSON.parse(o)
            } catch {
                return o
            }
        }
        return this.storageFallback[n]
    }
    _storageSet(n, o) {
        if (typeof window < "u" && (window != null && window.localStorage)) {
            let u = o;
            typeof o != "string" && (u = JSON.stringify(o)), window.localStorage.setItem(n, u)
        } else this.storageFallback[n] = o
    }
    _storageRemove(n) {
        var o;
        typeof window < "u" && (window != null && window.localStorage) && ((o = window.localStorage) == null || o.removeItem(n)), delete this.storageFallback[n]
    }
    _bindStorageEvent() {
        typeof window < "u" && (window != null && window.localStorage) && window.addEventListener && window.addEventListener("storage", n => {
            if (n.key != this.storageKey) return;
            const o = this._storageGet(this.storageKey) || {};
            super.save(o.token || "", o.record || o.model || null)
        })
    }
}
class ua {
    constructor(n) {
        this.client = n
    }
}
class ng extends ua {
    async getAll(n) {
        return n = Object.assign({
            method: "GET"
        }, n), this.client.send("/api/settings", n)
    }
    async update(n, o) {
        return o = Object.assign({
            method: "PATCH",
            body: n
        }, o), this.client.send("/api/settings", o)
    }
    async testS3(n = "storage", o) {
        return o = Object.assign({
            method: "POST",
            body: {
                filesystem: n
            }
        }, o), this.client.send("/api/settings/test/s3", o).then(() => !0)
    }
    async testEmail(n, o, u, r) {
        return r = Object.assign({
            method: "POST",
            body: {
                email: o,
                template: u,
                collection: n
            }
        }, r), this.client.send("/api/settings/test/email", r).then(() => !0)
    }
    async generateAppleClientSecret(n, o, u, r, p, g) {
        return g = Object.assign({
            method: "POST",
            body: {
                clientId: n,
                teamId: o,
                keyId: u,
                privateKey: r,
                duration: p
            }
        }, g), this.client.send("/api/settings/apple/generate-client-secret", g)
    }
}
const dg = ["requestKey", "$cancelKey", "$autoCancel", "fetch", "headers", "body", "query", "params", "cache", "credentials", "headers", "integrity", "keepalive", "method", "mode", "redirect", "referrer", "referrerPolicy", "signal", "window"];

function su(c) {
    if (c) {
        c.query = c.query || {};
        for (let n in c) dg.includes(n) || (c.query[n] = c[n], delete c[n])
    }
}

function nu(c) {
    const n = [];
    for (const o in c) {
        const u = encodeURIComponent(o),
            r = Array.isArray(c[o]) ? c[o] : [c[o]];
        for (let p of r) p = og(p), p !== null && n.push(u + "=" + p)
    }
    return n.join("&")
}

function og(c) {
    return c == null ? null : c instanceof Date ? encodeURIComponent(c.toISOString().replace("T", " ")) : encodeURIComponent(typeof c == "object" ? JSON.stringify(c) : c)
}
class Hp extends ua {
    constructor() {
        super(...arguments), this.clientId = "", this.eventSource = null, this.subscriptions = {}, this.lastSentSubscriptions = [], this.maxConnectTimeout = 15e3, this.reconnectAttempts = 0, this.maxReconnectAttempts = 1 / 0, this.predefinedReconnectIntervals = [200, 300, 500, 1e3, 1200, 1500, 2e3], this.pendingConnects = []
    }
    get isConnected() {
        return !!this.eventSource && !!this.clientId && !this.pendingConnects.length
    }
    async subscribe(n, o, u) {
        var g;
        if (!n) throw new Error("topic must be set.");
        let r = n;
        if (u) {
            su(u = Object.assign({}, u));
            const b = "options=" + encodeURIComponent(JSON.stringify({
                query: u.query,
                headers: u.headers
            }));
            r += (r.includes("?") ? "&" : "?") + b
        }
        const p = function(b) {
            const v = b;
            let h;
            try {
                h = JSON.parse(v == null ? void 0 : v.data)
            } catch {}
            o(h || {})
        };
        return this.subscriptions[r] || (this.subscriptions[r] = []), this.subscriptions[r].push(p), this.isConnected ? this.subscriptions[r].length === 1 ? await this.submitSubscriptions() : (g = this.eventSource) == null || g.addEventListener(r, p) : await this.connect(), async () => this.unsubscribeByTopicAndListener(n, p)
    }
    async unsubscribe(n) {
        var u;
        let o = !1;
        if (n) {
            const r = this.getSubscriptionsByTopic(n);
            for (let p in r)
                if (this.hasSubscriptionListeners(p)) {
                    for (let g of this.subscriptions[p])(u = this.eventSource) == null || u.removeEventListener(p, g);
                    delete this.subscriptions[p], o || (o = !0)
                }
        } else this.subscriptions = {};
        this.hasSubscriptionListeners() ? o && await this.submitSubscriptions() : this.disconnect()
    }
    async unsubscribeByPrefix(n) {
        var u;
        let o = !1;
        for (let r in this.subscriptions)
            if ((r + "?").startsWith(n)) {
                o = !0;
                for (let p of this.subscriptions[r])(u = this.eventSource) == null || u.removeEventListener(r, p);
                delete this.subscriptions[r]
            }
        o && (this.hasSubscriptionListeners() ? await this.submitSubscriptions() : this.disconnect())
    }
    async unsubscribeByTopicAndListener(n, o) {
        var p;
        let u = !1;
        const r = this.getSubscriptionsByTopic(n);
        for (let g in r) {
            if (!Array.isArray(this.subscriptions[g]) || !this.subscriptions[g].length) continue;
            let b = !1;
            for (let v = this.subscriptions[g].length - 1; v >= 0; v--) this.subscriptions[g][v] === o && (b = !0, delete this.subscriptions[g][v], this.subscriptions[g].splice(v, 1), (p = this.eventSource) == null || p.removeEventListener(g, o));
            b && (this.subscriptions[g].length || delete this.subscriptions[g], u || this.hasSubscriptionListeners(g) || (u = !0))
        }
        this.hasSubscriptionListeners() ? u && await this.submitSubscriptions() : this.disconnect()
    }
    hasSubscriptionListeners(n) {
        var o, u;
        if (this.subscriptions = this.subscriptions || {}, n) return !!((o = this.subscriptions[n]) != null && o.length);
        for (let r in this.subscriptions)
            if ((u = this.subscriptions[r]) != null && u.length) return !0;
        return !1
    }
    async submitSubscriptions() {
        if (this.clientId) return this.addAllSubscriptionListeners(), this.lastSentSubscriptions = this.getNonEmptySubscriptionKeys(), this.client.send("/api/realtime", {
            method: "POST",
            body: {
                clientId: this.clientId,
                subscriptions: this.lastSentSubscriptions
            },
            requestKey: this.getSubscriptionsCancelKey()
        }).catch(n => {
            if (!(n != null && n.isAbort)) throw n
        })
    }
    getSubscriptionsCancelKey() {
        return "realtime_" + this.clientId
    }
    getSubscriptionsByTopic(n) {
        const o = {};
        n = n.includes("?") ? n : n + "?";
        for (let u in this.subscriptions)(u + "?").startsWith(n) && (o[u] = this.subscriptions[u]);
        return o
    }
    getNonEmptySubscriptionKeys() {
        const n = [];
        for (let o in this.subscriptions) this.subscriptions[o].length && n.push(o);
        return n
    }
    addAllSubscriptionListeners() {
        if (this.eventSource) {
            this.removeAllSubscriptionListeners();
            for (let n in this.subscriptions)
                for (let o of this.subscriptions[n]) this.eventSource.addEventListener(n, o)
        }
    }
    removeAllSubscriptionListeners() {
        if (this.eventSource)
            for (let n in this.subscriptions)
                for (let o of this.subscriptions[n]) this.eventSource.removeEventListener(n, o)
    }
    async connect() {
        if (!(this.reconnectAttempts > 0)) return new Promise((n, o) => {
            this.pendingConnects.push({
                resolve: n,
                reject: o
            }), this.pendingConnects.length > 1 || this.initConnect()
        })
    }
    initConnect() {
        this.disconnect(!0), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(() => {
            this.connectErrorHandler(new Error("EventSource connect took too long."))
        }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildURL("/api/realtime")), this.eventSource.onerror = n => {
            this.connectErrorHandler(new Error("Failed to establish realtime connection."))
        }, this.eventSource.addEventListener("PB_CONNECT", n => {
            const o = n;
            this.clientId = o == null ? void 0 : o.lastEventId, this.submitSubscriptions().then(async () => {
                let u = 3;
                for (; this.hasUnsentSubscriptions() && u > 0;) u--, await this.submitSubscriptions()
            }).then(() => {
                for (let r of this.pendingConnects) r.resolve();
                this.pendingConnects = [], this.reconnectAttempts = 0, clearTimeout(this.reconnectTimeoutId), clearTimeout(this.connectTimeoutId);
                const u = this.getSubscriptionsByTopic("PB_CONNECT");
                for (let r in u)
                    for (let p of u[r]) p(n)
            }).catch(u => {
                this.clientId = "", this.connectErrorHandler(u)
            })
        })
    }
    hasUnsentSubscriptions() {
        const n = this.getNonEmptySubscriptionKeys();
        if (n.length != this.lastSentSubscriptions.length) return !0;
        for (const o of n)
            if (!this.lastSentSubscriptions.includes(o)) return !0;
        return !1
    }
    connectErrorHandler(n) {
        if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
            for (let u of this.pendingConnects) u.reject(new ie(n));
            return this.pendingConnects = [], void this.disconnect()
        }
        this.disconnect(!0);
        const o = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
        this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(() => {
            this.initConnect()
        }, o)
    }
    disconnect(n = !1) {
        var o;
        if (this.clientId && this.onDisconnect && this.onDisconnect(Object.keys(this.subscriptions)), clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), this.client.cancelRequest(this.getSubscriptionsCancelKey()), (o = this.eventSource) == null || o.close(), this.eventSource = null, this.clientId = "", !n) {
            this.reconnectAttempts = 0;
            for (let u of this.pendingConnects) u.resolve();
            this.pendingConnects = []
        }
    }
}
class Bp extends ua {
    decode(n) {
        return n
    }
    async getFullList(n, o) {
        if (typeof n == "number") return this._getFullList(n, o);
        let u = 1e3;
        return (o = Object.assign({}, n, o)).batch && (u = o.batch, delete o.batch), this._getFullList(u, o)
    }
    async getList(n = 1, o = 30, u) {
        return (u = Object.assign({
            method: "GET"
        }, u)).query = Object.assign({
            page: n,
            perPage: o
        }, u.query), this.client.send(this.baseCrudPath, u).then(r => {
            var p;
            return r.items = ((p = r.items) == null ? void 0 : p.map(g => this.decode(g))) || [], r
        })
    }
    async getFirstListItem(n, o) {
        return (o = Object.assign({
            requestKey: "one_by_filter_" + this.baseCrudPath + "_" + n
        }, o)).query = Object.assign({
            filter: n,
            skipTotal: 1
        }, o.query), this.getList(1, 1, o).then(u => {
            var r;
            if (!((r = u == null ? void 0 : u.items) != null && r.length)) throw new ie({
                status: 404,
                response: {
                    code: 404,
                    message: "The requested resource wasn't found.",
                    data: {}
                }
            });
            return u.items[0]
        })
    }
    async getOne(n, o) {
        if (!n) throw new ie({
            url: this.client.buildURL(this.baseCrudPath + "/"),
            status: 404,
            response: {
                code: 404,
                message: "Missing required record id.",
                data: {}
            }
        });
        return o = Object.assign({
            method: "GET"
        }, o), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(n), o).then(u => this.decode(u))
    }
    async create(n, o) {
        return o = Object.assign({
            method: "POST",
            body: n
        }, o), this.client.send(this.baseCrudPath, o).then(u => this.decode(u))
    }
    async update(n, o, u) {
        return u = Object.assign({
            method: "PATCH",
            body: o
        }, u), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(n), u).then(r => this.decode(r))
    }
    async delete(n, o) {
        return o = Object.assign({
            method: "DELETE"
        }, o), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(n), o).then(() => !0)
    }
    _getFullList(n = 1e3, o) {
        (o = o || {}).query = Object.assign({
            skipTotal: 1
        }, o.query);
        let u = [],
            r = async p => this.getList(p, n || 1e3, o).then(g => {
                const b = g.items;
                return u = u.concat(b), b.length == g.perPage ? r(p + 1) : u
            });
        return r(1)
    }
}

function za(c, n, o, u) {
    const r = u !== void 0;
    return r || o !== void 0 ? r ? (console.warn(c), n.body = Object.assign({}, n.body, o), n.query = Object.assign({}, n.query, u), n) : Object.assign(n, o) : n
}

function Qo(c) {
    var n;
    (n = c._resetAutoRefresh) == null || n.call(c)
}
class ug extends Bp {
    constructor(n, o) {
        super(n), this.collectionIdOrName = o
    }
    get baseCrudPath() {
        return this.baseCollectionPath + "/records"
    }
    get baseCollectionPath() {
        return "/api/collections/" + encodeURIComponent(this.collectionIdOrName)
    }
    get isSuperusers() {
        return this.collectionIdOrName == "_superusers" || this.collectionIdOrName == "_pbc_2773867675"
    }
    async subscribe(n, o, u) {
        if (!n) throw new Error("Missing topic.");
        if (!o) throw new Error("Missing subscription callback.");
        return this.client.realtime.subscribe(this.collectionIdOrName + "/" + n, o, u)
    }
    async unsubscribe(n) {
        return n ? this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + n) : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)
    }
    async getFullList(n, o) {
        if (typeof n == "number") return super.getFullList(n, o);
        const u = Object.assign({}, n, o);
        return super.getFullList(u)
    }
    async getList(n = 1, o = 30, u) {
        return super.getList(n, o, u)
    }
    async getFirstListItem(n, o) {
        return super.getFirstListItem(n, o)
    }
    async getOne(n, o) {
        return super.getOne(n, o)
    }
    async create(n, o) {
        return super.create(n, o)
    }
    async update(n, o, u) {
        return super.update(n, o, u).then(r => {
            var p, g, b;
            if (((p = this.client.authStore.record) == null ? void 0 : p.id) === (r == null ? void 0 : r.id) && (((g = this.client.authStore.record) == null ? void 0 : g.collectionId) === this.collectionIdOrName || ((b = this.client.authStore.record) == null ? void 0 : b.collectionName) === this.collectionIdOrName)) {
                let v = Object.assign({}, this.client.authStore.record.expand),
                    h = Object.assign({}, this.client.authStore.record, r);
                v && (h.expand = Object.assign(v, r.expand)), this.client.authStore.save(this.client.authStore.token, h)
            }
            return r
        })
    }
    async delete(n, o) {
        return super.delete(n, o).then(u => {
            var r, p, g;
            return !u || ((r = this.client.authStore.record) == null ? void 0 : r.id) !== n || ((p = this.client.authStore.record) == null ? void 0 : p.collectionId) !== this.collectionIdOrName && ((g = this.client.authStore.record) == null ? void 0 : g.collectionName) !== this.collectionIdOrName || this.client.authStore.clear(), u
        })
    }
    authResponse(n) {
        const o = this.decode((n == null ? void 0 : n.record) || {});
        return this.client.authStore.save(n == null ? void 0 : n.token, o), Object.assign({}, n, {
            token: (n == null ? void 0 : n.token) || "",
            record: o
        })
    }
    async listAuthMethods(n) {
        return n = Object.assign({
            method: "GET",
            fields: "mfa,otp,password,oauth2"
        }, n), this.client.send(this.baseCollectionPath + "/auth-methods", n)
    }
    async authWithPassword(n, o, u) {
        let r;
        u = Object.assign({
            method: "POST",
            body: {
                identity: n,
                password: o
            }
        }, u), this.isSuperusers && (r = u.autoRefreshThreshold, delete u.autoRefreshThreshold, u.autoRefresh || Qo(this.client));
        let p = await this.client.send(this.baseCollectionPath + "/auth-with-password", u);
        return p = this.authResponse(p), r && this.isSuperusers && function(b, v, h, N) {
            Qo(b);
            const T = b.beforeSend,
                R = b.authStore.record,
                z = b.authStore.onChange((D, H) => {
                    (!D || (H == null ? void 0 : H.id) != (R == null ? void 0 : R.id) || (H != null && H.collectionId || R != null && R.collectionId) && (H == null ? void 0 : H.collectionId) != (R == null ? void 0 : R.collectionId)) && Qo(b)
                });
            b._resetAutoRefresh = function() {
                z(), b.beforeSend = T, delete b._resetAutoRefresh
            }, b.beforeSend = async (D, H) => {
                var w;
                const G = b.authStore.token;
                if ((w = H.query) != null && w.autoRefresh) return T ? T(D, H) : {
                    url: D,
                    sendOptions: H
                };
                let U = b.authStore.isValid;
                if (U && qp(b.authStore.token, v)) try {
                    await h()
                } catch {
                    U = !1
                }
                U || await N();
                const k = H.headers || {};
                for (let K in k)
                    if (K.toLowerCase() == "authorization" && G == k[K] && b.authStore.token) {
                        k[K] = b.authStore.token;
                        break
                    }
                return H.headers = k, T ? T(D, H) : {
                    url: D,
                    sendOptions: H
                }
            }
        }(this.client, r, () => this.authRefresh({
            autoRefresh: !0
        }), () => this.authWithPassword(n, o, Object.assign({
            autoRefresh: !0
        }, u))), p
    }
    async authWithOAuth2Code(n, o, u, r, p, g, b) {
        let v = {
            method: "POST",
            body: {
                provider: n,
                code: o,
                codeVerifier: u,
                redirectURL: r,
                createData: p
            }
        };
        return v = za("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).", v, g, b), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", v).then(h => this.authResponse(h))
    }
    authWithOAuth2(...n) {
        if (n.length > 1 || typeof(n == null ? void 0 : n[0]) == "string") return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."), this.authWithOAuth2Code((n == null ? void 0 : n[0]) || "", (n == null ? void 0 : n[1]) || "", (n == null ? void 0 : n[2]) || "", (n == null ? void 0 : n[3]) || "", (n == null ? void 0 : n[4]) || {}, (n == null ? void 0 : n[5]) || {}, (n == null ? void 0 : n[6]) || {});
        const o = (n == null ? void 0 : n[0]) || {};
        let u = null;
        o.urlCallback || (u = gp(void 0));
        const r = new Hp(this.client);

        function p() {
            u == null || u.close(), r.unsubscribe()
        }
        const g = {},
            b = o.requestKey;
        return b && (g.requestKey = b), this.listAuthMethods(g).then(v => {
            const h = v.oauth2.providers.find(T => T.name === o.provider);
            if (!h) throw new ie(new Error(`Missing or invalid provider "${o.provider}".`));
            const N = this.client.buildURL("/api/oauth2-redirect");
            return new Promise(async (T, R) => {
                var D, H, G;
                const z = b ? (D = this.client.cancelControllers) == null ? void 0 : D[b] : void 0;
                z && (z.signal.onabort = () => {
                    p(), R(new ie({
                        isAbort: !0,
                        message: "manually cancelled"
                    }))
                }), r.onDisconnect = U => {
                    U.length && R && (p(), R(new ie(new Error("realtime connection interrupted"))))
                };
                try {
                    await r.subscribe("@oauth2", async K => {
                        var _;
                        const Z = r.clientId;
                        try {
                            if (!K.state || Z !== K.state) throw new Error("State parameters don't match.");
                            if (K.error || !K.code) throw new Error("OAuth2 redirect error or missing code: " + K.error);
                            const B = Object.assign({}, o);
                            delete B.provider, delete B.scopes, delete B.createData, delete B.urlCallback, (_ = z == null ? void 0 : z.signal) != null && _.onabort && (z.signal.onabort = null);
                            const I = await this.authWithOAuth2Code(h.name, K.code, h.codeVerifier, N, o.createData, B);
                            T(I)
                        } catch (B) {
                            R(new ie(B))
                        }
                        p()
                    });
                    const U = {
                        state: r.clientId
                    };
                    (H = o.scopes) != null && H.length && (U.scope = o.scopes.join(" "));
                    const k = this._replaceQueryParams(h.authURL + N, U);
                    await (o.urlCallback || function(K) {
                        u ? u.location.href = K : u = gp(K)
                    })(k)
                } catch (U) {
                    (G = z == null ? void 0 : z.signal) != null && G.onabort && (z.signal.onabort = null), p(), R(new ie(U))
                }
            })
        }).catch(v => {
            throw p(), v
        })
    }
    async authRefresh(n, o) {
        let u = {
            method: "POST"
        };
        return u = za("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", u, n, o), this.client.send(this.baseCollectionPath + "/auth-refresh", u).then(r => this.authResponse(r))
    }
    async requestPasswordReset(n, o, u) {
        let r = {
            method: "POST",
            body: {
                email: n
            }
        };
        return r = za("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", r, o, u), this.client.send(this.baseCollectionPath + "/request-password-reset", r).then(() => !0)
    }
    async confirmPasswordReset(n, o, u, r, p) {
        let g = {
            method: "POST",
            body: {
                token: n,
                password: o,
                passwordConfirm: u
            }
        };
        return g = za("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).", g, r, p), this.client.send(this.baseCollectionPath + "/confirm-password-reset", g).then(() => !0)
    }
    async requestVerification(n, o, u) {
        let r = {
            method: "POST",
            body: {
                email: n
            }
        };
        return r = za("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).", r, o, u), this.client.send(this.baseCollectionPath + "/request-verification", r).then(() => !0)
    }
    async confirmVerification(n, o, u) {
        let r = {
            method: "POST",
            body: {
                token: n
            }
        };
        return r = za("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).", r, o, u), this.client.send(this.baseCollectionPath + "/confirm-verification", r).then(() => {
            const p = Bi(n),
                g = this.client.authStore.record;
            return g && !g.verified && g.id === p.id && g.collectionId === p.collectionId && (g.verified = !0, this.client.authStore.save(this.client.authStore.token, g)), !0
        })
    }
    async requestEmailChange(n, o, u) {
        let r = {
            method: "POST",
            body: {
                newEmail: n
            }
        };
        return r = za("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).", r, o, u), this.client.send(this.baseCollectionPath + "/request-email-change", r).then(() => !0)
    }
    async confirmEmailChange(n, o, u, r) {
        let p = {
            method: "POST",
            body: {
                token: n,
                password: o
            }
        };
        return p = za("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).", p, u, r), this.client.send(this.baseCollectionPath + "/confirm-email-change", p).then(() => {
            const g = Bi(n),
                b = this.client.authStore.record;
            return b && b.id === g.id && b.collectionId === g.collectionId && this.client.authStore.clear(), !0
        })
    }
    async listExternalAuths(n, o) {
        return this.client.collection("_externalAuths").getFullList(Object.assign({}, o, {
            filter: this.client.filter("recordRef = {:id}", {
                id: n
            })
        }))
    }
    async unlinkExternalAuth(n, o, u) {
        const r = await this.client.collection("_externalAuths").getFirstListItem(this.client.filter("recordRef = {:recordId} && provider = {:provider}", {
            recordId: n,
            provider: o
        }));
        return this.client.collection("_externalAuths").delete(r.id, u).then(() => !0)
    }
    async requestOTP(n, o) {
        return o = Object.assign({
            method: "POST",
            body: {
                email: n
            }
        }, o), this.client.send(this.baseCollectionPath + "/request-otp", o)
    }
    async authWithOTP(n, o, u) {
        return u = Object.assign({
            method: "POST",
            body: {
                otpId: n,
                password: o
            }
        }, u), this.client.send(this.baseCollectionPath + "/auth-with-otp", u).then(r => this.authResponse(r))
    }
    async impersonate(n, o, u) {
        (u = Object.assign({
            method: "POST",
            body: {
                duration: o
            }
        }, u)).headers = u.headers || {}, u.headers.Authorization || (u.headers.Authorization = this.client.authStore.token);
        const r = new Yp(this.client.baseURL, new lu, this.client.lang),
            p = await r.send(this.baseCollectionPath + "/impersonate/" + encodeURIComponent(n), u);
        return r.authStore.save(p == null ? void 0 : p.token, this.decode((p == null ? void 0 : p.record) || {})), r
    }
    _replaceQueryParams(n, o = {}) {
        let u = n,
            r = "";
        n.indexOf("?") >= 0 && (u = n.substring(0, n.indexOf("?")), r = n.substring(n.indexOf("?") + 1));
        const p = {},
            g = r.split("&");
        for (const b of g) {
            if (b == "") continue;
            const v = b.split("=");
            p[decodeURIComponent(v[0].replace(/\+/g, " "))] = decodeURIComponent((v[1] || "").replace(/\+/g, " "))
        }
        for (let b in o) o.hasOwnProperty(b) && (o[b] == null ? delete p[b] : p[b] = o[b]);
        r = "";
        for (let b in p) p.hasOwnProperty(b) && (r != "" && (r += "&"), r += encodeURIComponent(b.replace(/%20/g, "+")) + "=" + encodeURIComponent(p[b].replace(/%20/g, "+")));
        return r != "" ? u + "?" + r : u
    }
}

function gp(c) {
    if (typeof window > "u" || !(window != null && window.open)) throw new ie(new Error("Not in a browser context - please pass a custom urlCallback function."));
    let n = 1024,
        o = 768,
        u = window.innerWidth,
        r = window.innerHeight;
    n = n > u ? u : n, o = o > r ? r : o;
    let p = u / 2 - n / 2,
        g = r / 2 - o / 2;
    return window.open(c, "popup_window", "width=" + n + ",height=" + o + ",top=" + g + ",left=" + p + ",resizable,menubar=no")
}
class cg extends Bp {
    get baseCrudPath() {
        return "/api/collections"
    }
    async
    import (n, o = !1, u) {
        return u = Object.assign({
            method: "PUT",
            body: {
                collections: n,
                deleteMissing: o
            }
        }, u), this.client.send(this.baseCrudPath + "/import", u).then(() => !0)
    }
    async getScaffolds(n) {
        return n = Object.assign({
            method: "GET"
        }, n), this.client.send(this.baseCrudPath + "/meta/scaffolds", n)
    }
    async truncate(n, o) {
        return o = Object.assign({
            method: "DELETE"
        }, o), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(n) + "/truncate", o).then(() => !0)
    }
}
class rg extends ua {
    async getList(n = 1, o = 30, u) {
        return (u = Object.assign({
            method: "GET"
        }, u)).query = Object.assign({
            page: n,
            perPage: o
        }, u.query), this.client.send("/api/logs", u)
    }
    async getOne(n, o) {
        if (!n) throw new ie({
            url: this.client.buildURL("/api/logs/"),
            status: 404,
            response: {
                code: 404,
                message: "Missing required log id.",
                data: {}
            }
        });
        return o = Object.assign({
            method: "GET"
        }, o), this.client.send("/api/logs/" + encodeURIComponent(n), o)
    }
    async getStats(n) {
        return n = Object.assign({
            method: "GET"
        }, n), this.client.send("/api/logs/stats", n)
    }
}
class fg extends ua {
    async check(n) {
        return n = Object.assign({
            method: "GET"
        }, n), this.client.send("/api/health", n)
    }
}
class pg extends ua {
    getUrl(n, o, u = {}) {
        return console.warn("Please replace pb.files.getUrl() with pb.files.getURL()"), this.getURL(n, o, u)
    }
    getURL(n, o, u = {}) {
        if (!o || !(n != null && n.id) || !(n != null && n.collectionId) && !(n != null && n.collectionName)) return "";
        const r = [];
        r.push("api"), r.push("files"), r.push(encodeURIComponent(n.collectionId || n.collectionName)), r.push(encodeURIComponent(n.id)), r.push(encodeURIComponent(o));
        let p = this.client.buildURL(r.join("/"));
        u.download === !1 && delete u.download;
        const g = nu(u);
        return g && (p += (p.includes("?") ? "&" : "?") + g), p
    }
    async getToken(n) {
        return n = Object.assign({
            method: "POST"
        }, n), this.client.send("/api/files/token", n).then(o => (o == null ? void 0 : o.token) || "")
    }
}
class mg extends ua {
    async getFullList(n) {
        return n = Object.assign({
            method: "GET"
        }, n), this.client.send("/api/backups", n)
    }
    async create(n, o) {
        return o = Object.assign({
            method: "POST",
            body: {
                name: n
            }
        }, o), this.client.send("/api/backups", o).then(() => !0)
    }
    async upload(n, o) {
        return o = Object.assign({
            method: "POST",
            body: n
        }, o), this.client.send("/api/backups/upload", o).then(() => !0)
    }
    async delete(n, o) {
        return o = Object.assign({
            method: "DELETE"
        }, o), this.client.send(`/api/backups/${encodeURIComponent(n)}`, o).then(() => !0)
    }
    async restore(n, o) {
        return o = Object.assign({
            method: "POST"
        }, o), this.client.send(`/api/backups/${encodeURIComponent(n)}/restore`, o).then(() => !0)
    }
    getDownloadUrl(n, o) {
        return console.warn("Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()"), this.getDownloadURL(n, o)
    }
    getDownloadURL(n, o) {
        return this.client.buildURL(`/api/backups/${encodeURIComponent(o)}?token=${encodeURIComponent(n)}`)
    }
}
class vg extends ua {
    async getFullList(n) {
        return n = Object.assign({
            method: "GET"
        }, n), this.client.send("/api/crons", n)
    }
    async run(n, o) {
        return o = Object.assign({
            method: "POST"
        }, o), this.client.send(`/api/crons/${encodeURIComponent(n)}`, o).then(() => !0)
    }
}

function Jo(c) {
    return typeof Blob < "u" && c instanceof Blob || typeof File < "u" && c instanceof File || c !== null && typeof c == "object" && c.uri && (typeof navigator < "u" && navigator.product === "ReactNative" || typeof global < "u" && global.HermesInternal)
}

function $o(c) {
    var n;
    return c && (((n = c.constructor) == null ? void 0 : n.name) === "FormData" || typeof FormData < "u" && c instanceof FormData)
}

function bp(c) {
    for (const n in c) {
        const o = Array.isArray(c[n]) ? c[n] : [c[n]];
        for (const u of o)
            if (Jo(u)) return !0
    }
    return !1
}
const hg = /^[\-\.\d]+$/;

function xp(c) {
    if (typeof c != "string") return c;
    if (c == "true") return !0;
    if (c == "false") return !1;
    if ((c[0] === "-" || c[0] >= "0" && c[0] <= "9") && hg.test(c)) {
        let n = +c;
        if ("" + n === c) return n
    }
    return c
}
class gg extends ua {
    constructor() {
        super(...arguments), this.requests = [], this.subs = {}
    }
    collection(n) {
        return this.subs[n] || (this.subs[n] = new bg(this.requests, n)), this.subs[n]
    }
    async send(n) {
        const o = new FormData,
            u = [];
        for (let r = 0; r < this.requests.length; r++) {
            const p = this.requests[r];
            if (u.push({
                    method: p.method,
                    url: p.url,
                    headers: p.headers,
                    body: p.json
                }), p.files)
                for (let g in p.files) {
                    const b = p.files[g] || [];
                    for (let v of b) o.append("requests." + r + "." + g, v)
                }
        }
        return o.append("@jsonPayload", JSON.stringify({
            requests: u
        })), n = Object.assign({
            method: "POST",
            body: o
        }, n), this.client.send("/api/batch", n)
    }
}
class bg {
    constructor(n, o) {
        this.requests = [], this.requests = n, this.collectionIdOrName = o
    }
    upsert(n, o) {
        o = Object.assign({
            body: n || {}
        }, o);
        const u = {
            method: "PUT",
            url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records"
        };
        this.prepareRequest(u, o), this.requests.push(u)
    }
    create(n, o) {
        o = Object.assign({
            body: n || {}
        }, o);
        const u = {
            method: "POST",
            url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records"
        };
        this.prepareRequest(u, o), this.requests.push(u)
    }
    update(n, o, u) {
        u = Object.assign({
            body: o || {}
        }, u);
        const r = {
            method: "PATCH",
            url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records/" + encodeURIComponent(n)
        };
        this.prepareRequest(r, u), this.requests.push(r)
    }
    delete(n, o) {
        o = Object.assign({}, o);
        const u = {
            method: "DELETE",
            url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records/" + encodeURIComponent(n)
        };
        this.prepareRequest(u, o), this.requests.push(u)
    }
    prepareRequest(n, o) {
        if (su(o), n.headers = o.headers, n.json = {}, n.files = {}, o.query !== void 0) {
            const r = nu(o.query);
            r && (n.url += (n.url.includes("?") ? "&" : "?") + r)
        }
        let u = o.body;
        $o(u) && (u = function(p) {
            let g = {};
            return p.forEach((b, v) => {
                if (v === "@jsonPayload" && typeof b == "string") try {
                    let h = JSON.parse(b);
                    Object.assign(g, h)
                } catch (h) {
                    console.warn("@jsonPayload error:", h)
                } else g[v] !== void 0 ? (Array.isArray(g[v]) || (g[v] = [g[v]]), g[v].push(xp(b))) : g[v] = xp(b)
            }), g
        }(u));
        for (const r in u) {
            const p = u[r];
            if (Jo(p)) n.files[r] = n.files[r] || [], n.files[r].push(p);
            else if (Array.isArray(p)) {
                const g = [],
                    b = [];
                for (const v of p) Jo(v) ? g.push(v) : b.push(v);
                if (g.length > 0 && g.length == p.length) {
                    n.files[r] = n.files[r] || [];
                    for (let v of g) n.files[r].push(v)
                } else if (n.json[r] = b, g.length > 0) {
                    let v = r;
                    r.startsWith("+") || r.endsWith("+") || (v += "+"), n.files[v] = n.files[v] || [];
                    for (let h of g) n.files[v].push(h)
                }
            } else n.json[r] = p
        }
    }
}
class Yp {
    get baseUrl() {
        return this.baseURL
    }
    set baseUrl(n) {
        this.baseURL = n
    }
    constructor(n = "/", o, u = "en-US") {
        this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = !0, this.baseURL = n, this.lang = u, o ? this.authStore = o : typeof window < "u" && window.Deno ? this.authStore = new lu : this.authStore = new sg, this.collections = new cg(this), this.files = new pg(this), this.logs = new rg(this), this.settings = new ng(this), this.realtime = new Hp(this), this.health = new fg(this), this.backups = new mg(this), this.crons = new vg(this)
    }
    get admins() {
        return this.collection("_superusers")
    }
    createBatch() {
        return new gg(this)
    }
    collection(n) {
        return this.recordServices[n] || (this.recordServices[n] = new ug(this, n)), this.recordServices[n]
    }
    autoCancellation(n) {
        return this.enableAutoCancellation = !!n, this
    }
    cancelRequest(n) {
        return this.cancelControllers[n] && (this.cancelControllers[n].abort(), delete this.cancelControllers[n]), this
    }
    cancelAllRequests() {
        for (let n in this.cancelControllers) this.cancelControllers[n].abort();
        return this.cancelControllers = {}, this
    }
    filter(n, o) {
        if (!o) return n;
        for (let u in o) {
            let r = o[u];
            switch (typeof r) {
                case "boolean":
                case "number":
                    r = "" + r;
                    break;
                case "string":
                    r = "'" + r.replace(/'/g, "\\'") + "'";
                    break;
                default:
                    r = r === null ? "null" : r instanceof Date ? "'" + r.toISOString().replace("T", " ") + "'" : "'" + JSON.stringify(r).replace(/'/g, "\\'") + "'"
            }
            n = n.replaceAll("{:" + u + "}", r)
        }
        return n
    }
    getFileUrl(n, o, u = {}) {
        return console.warn("Please replace pb.getFileUrl() with pb.files.getURL()"), this.files.getURL(n, o, u)
    }
    buildUrl(n) {
        return console.warn("Please replace pb.buildUrl() with pb.buildURL()"), this.buildURL(n)
    }
    buildURL(n) {
        var u;
        let o = this.baseURL;
        return typeof window > "u" || !window.location || o.startsWith("https://") || o.startsWith("http://") || (o = (u = window.location.origin) != null && u.endsWith("/") ? window.location.origin.substring(0, window.location.origin.length - 1) : window.location.origin || "", this.baseURL.startsWith("/") || (o += window.location.pathname || "/", o += o.endsWith("/") ? "" : "/"), o += this.baseURL), n && (o += o.endsWith("/") ? "" : "/", o += n.startsWith("/") ? n.substring(1) : n), o
    }
    async send(n, o) {
        o = this.initSendOptions(n, o);
        let u = this.buildURL(n);
        if (this.beforeSend) {
            const r = Object.assign({}, await this.beforeSend(u, o));
            r.url !== void 0 || r.options !== void 0 ? (u = r.url || u, o = r.options || o) : Object.keys(r).length && (o = r, console != null && console.warn && console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))
        }
        if (o.query !== void 0) {
            const r = nu(o.query);
            r && (u += (u.includes("?") ? "&" : "?") + r), delete o.query
        }
        return this.getHeader(o.headers, "Content-Type") == "application/json" && o.body && typeof o.body != "string" && (o.body = JSON.stringify(o.body)), (o.fetch || fetch)(u, o).then(async r => {
            var g;
            let p = {};
            try {
                p = await r.json()
            } catch (b) {
                if ((g = o.signal) != null && g.aborted || (b == null ? void 0 : b.name) == "AbortError" || (b == null ? void 0 : b.message) == "Aborted") throw b
            }
            if (this.afterSend && (p = await this.afterSend(r, p, o)), r.status >= 400) throw new ie({
                url: r.url,
                status: r.status,
                data: p
            });
            return p
        }).catch(r => {
            throw new ie(r)
        })
    }
    initSendOptions(n, o) {
        if ((o = Object.assign({
                method: "GET"
            }, o)).body = function(r) {
                if (typeof FormData > "u" || r === void 0 || typeof r != "object" || r === null || $o(r) || !bp(r)) return r;
                const p = new FormData;
                for (const g in r) {
                    const b = r[g];
                    if (b !== void 0)
                        if (typeof b != "object" || bp({
                                data: b
                            })) {
                            const v = Array.isArray(b) ? b : [b];
                            for (let h of v) p.append(g, h)
                        } else {
                            let v = {};
                            v[g] = b, p.append("@jsonPayload", JSON.stringify(v))
                        }
                }
                return p
            }(o.body), su(o), o.query = Object.assign({}, o.params, o.query), o.requestKey === void 0 && (o.$autoCancel === !1 || o.query.$autoCancel === !1 ? o.requestKey = null : (o.$cancelKey || o.query.$cancelKey) && (o.requestKey = o.$cancelKey || o.query.$cancelKey)), delete o.$autoCancel, delete o.query.$autoCancel, delete o.$cancelKey, delete o.query.$cancelKey, this.getHeader(o.headers, "Content-Type") !== null || $o(o.body) || (o.headers = Object.assign({}, o.headers, {
                "Content-Type": "application/json"
            })), this.getHeader(o.headers, "Accept-Language") === null && (o.headers = Object.assign({}, o.headers, {
                "Accept-Language": this.lang
            })), this.authStore.token && this.getHeader(o.headers, "Authorization") === null && (o.headers = Object.assign({}, o.headers, {
                Authorization: this.authStore.token
            })), this.enableAutoCancellation && o.requestKey !== null) {
            const u = o.requestKey || (o.method || "GET") + n;
            delete o.requestKey, this.cancelRequest(u);
            const r = new AbortController;
            this.cancelControllers[u] = r, o.signal = r.signal
        }
        return o
    }
    getHeader(n, o) {
        n = n || {}, o = o.toLowerCase();
        for (let u in n)
            if (u.toLowerCase() == o) return n[u];
        return null
    }
}
const nt = new Yp("https://vc719307994676.coderick.net"),
    Gp = y.createContext(null);

function xg({
    children: c
}) {
    const [n, o] = y.useState(null), [u, r] = y.useState(!0);
    y.useEffect(() => {
        (async () => {
            if (nt.authStore.isValid) try {
                const {
                    record: v
                } = await nt.collection("users").authRefresh({
                    requestKey: null
                });
                o({
                    id: v.id,
                    email: v.email,
                    name: v.name,
                    role: v.role,
                    specialty: v.specialty
                })
            } catch {
                nt.authStore.clear()
            }
            r(!1)
        })()
    }, []);
    const p = async (b, v) => {
            const {
                record: h
            } = await nt.collection("users").authWithPassword(b, v);
            o({
                id: h.id,
                email: h.email,
                name: h.name,
                role: h.role,
                specialty: h.specialty
            })
        },
        g = () => {
            nt.authStore.clear(), o(null)
        };
    return d.jsx(Gp.Provider, {
        value: {
            user: n,
            login: p,
            logout: g,
            isLoading: u
        },
        "data-visual-edit-loc": "src/contexts/AuthContext.tsx:63:4",
        "data-visual-edit-editable": "false",
        children: c
    })
}

function wn() {
    const c = y.useContext(Gp);
    if (!c) throw new Error("useAuth must be used within AuthProvider");
    return c
}

function Gi() {
    return d.jsx("header", {
        className: "bg-gradient-to-r from-header via-[#3a4a5a] to-header text-white shadow-xl",
        "data-visual-edit-loc": "src/components/Header.tsx:5:4",
        "data-visual-edit-component": "header",
        "data-visual-edit-editable": "false",
        children: d.jsxs("div", {
            className: "max-w-7xl mx-auto flex items-center justify-between px-6 py-4",
            "data-visual-edit-loc": "src/components/Header.tsx:6:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("div", {
                className: "flex items-center gap-2",
                "data-visual-edit-loc": "src/components/Header.tsx:7:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsx("img", {
                    src: "/public_6711_8857aa42456144569d6f70b38832361e.png",
                    alt: "Logo Fundación Corazón Down",
                    className: "h-16 object-contain drop-shadow-lg",
                    "data-visual-edit-loc": "src/components/Header.tsx:8:10",
                    "data-visual-edit-component": "img",
                    "data-visual-edit-editable": "true"
                })
            }), d.jsx("img", {
                src: "/public_73e1_c4f17ac7ff324460a7e586e3318e5fb1.png",
                alt: "F.C.D. Quotes",
                className: "h-14 rounded-xl object-contain shadow-md",
                "data-visual-edit-loc": "src/components/Header.tsx:14:8",
                "data-visual-edit-component": "img",
                "data-visual-edit-editable": "true"
            }), d.jsxs("div", {
                className: "text-right",
                "data-visual-edit-loc": "src/components/Header.tsx:19:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("p", {
                    className: "text-base sm:text-lg font-bold tracking-wide leading-tight",
                    "data-visual-edit-loc": "src/components/Header.tsx:20:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "SISTEMA DE REGISTRO DE CITAS"
                }), d.jsx("p", {
                    className: "text-xs sm:text-sm font-medium opacity-80 tracking-wider",
                    "data-visual-edit-loc": "src/components/Header.tsx:23:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "(FUNDACIÓN CORAZÓN DOWN)"
                })]
            })]
        })
    })
}

function Xi() {
    return d.jsx("footer", {
        className: "bg-gradient-to-r from-danger-700 via-danger-600 to-danger-700 text-white mt-auto",
        "data-visual-edit-loc": "src/components/Footer.tsx:5:4",
        "data-visual-edit-component": "footer",
        "data-visual-edit-editable": "false",
        children: d.jsxs("div", {
            className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-5 gap-4",
            "data-visual-edit-loc": "src/components/Footer.tsx:6:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                className: "flex items-center gap-4",
                "data-visual-edit-loc": "src/components/Footer.tsx:7:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("img", {
                    src: "/public_6711_8857aa42456144569d6f70b38832361e.png",
                    alt: "Logo FCD",
                    className: "h-12 object-contain drop-shadow-md",
                    "data-visual-edit-loc": "src/components/Footer.tsx:8:10",
                    "data-visual-edit-component": "img",
                    "data-visual-edit-editable": "true"
                }), d.jsx("span", {
                    className: "text-sm italic opacity-90 hidden sm:inline font-medium",
                    "data-visual-edit-loc": "src/components/Footer.tsx:13:10",
                    "data-visual-edit-component": "span",
                    "data-visual-edit-editable": "true",
                    children: "«juntos nos fortalecemos»"
                })]
            }), d.jsxs("div", {
                className: "flex items-center gap-5",
                "data-visual-edit-loc": "src/components/Footer.tsx:17:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("a", {
                    href: "https://www.facebook.com/share/1ApRjj6E5P/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-lg",
                    "aria-label": "Facebook",
                    "data-visual-edit-loc": "src/components/Footer.tsx:18:10",
                    "data-visual-edit-component": "a",
                    "data-visual-edit-editable": "false",
                    children: d.jsx("svg", {
                        className: "w-5 h-5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "data-visual-edit-loc": "src/components/Footer.tsx:25:12",
                        "data-visual-edit-component": "svg",
                        "data-visual-edit-editable": "false",
                        children: d.jsx("path", {
                            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                            "data-visual-edit-loc": "src/components/Footer.tsx:26:14",
                            "data-visual-edit-component": "path",
                            "data-visual-edit-editable": "false"
                        })
                    })
                }), d.jsx("a", {
                    href: "https://x.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-lg",
                    "aria-label": "X",
                    "data-visual-edit-loc": "src/components/Footer.tsx:29:10",
                    "data-visual-edit-component": "a",
                    "data-visual-edit-editable": "false",
                    children: d.jsx("svg", {
                        className: "w-5 h-5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "data-visual-edit-loc": "src/components/Footer.tsx:36:12",
                        "data-visual-edit-component": "svg",
                        "data-visual-edit-editable": "false",
                        children: d.jsx("path", {
                            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                            "data-visual-edit-loc": "src/components/Footer.tsx:37:14",
                            "data-visual-edit-component": "path",
                            "data-visual-edit-editable": "false"
                        })
                    })
                }), d.jsx("a", {
                    href: "https://www.instagram.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-11 h-11 bg-white rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg",
                    "aria-label": "Instagram",
                    "data-visual-edit-loc": "src/components/Footer.tsx:40:10",
                    "data-visual-edit-component": "a",
                    "data-visual-edit-editable": "false",
                    children: d.jsx("svg", {
                        className: "w-5 h-5 text-pink-600",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "data-visual-edit-loc": "src/components/Footer.tsx:47:12",
                        "data-visual-edit-component": "svg",
                        "data-visual-edit-editable": "false",
                        children: d.jsx("path", {
                            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                            "data-visual-edit-loc": "src/components/Footer.tsx:48:14",
                            "data-visual-edit-component": "path",
                            "data-visual-edit-editable": "false"
                        })
                    })
                }), d.jsx("a", {
                    href: "https://www.tiktok.com/@corazndown",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-lg",
                    "aria-label": "TikTok",
                    "data-visual-edit-loc": "src/components/Footer.tsx:51:10",
                    "data-visual-edit-component": "a",
                    "data-visual-edit-editable": "false",
                    children: d.jsx("svg", {
                        className: "w-5 h-5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "data-visual-edit-loc": "src/components/Footer.tsx:58:12",
                        "data-visual-edit-component": "svg",
                        "data-visual-edit-editable": "false",
                        children: d.jsx("path", {
                            d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
                            "data-visual-edit-loc": "src/components/Footer.tsx:59:14",
                            "data-visual-edit-component": "path",
                            "data-visual-edit-editable": "false"
                        })
                    })
                })]
            })]
        })
    })
}
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = c => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Xp = (...c) => c.filter((n, o, u) => !!n && n.trim() !== "" && u.indexOf(n) === o).join(" ").trim();
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sg = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = y.forwardRef(({
    color: c = "currentColor",
    size: n = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: u,
    className: r = "",
    children: p,
    iconNode: g,
    ...b
}, v) => y.createElement("svg", {
    ref: v,
    ...Sg,
    width: n,
    height: n,
    stroke: c,
    strokeWidth: u ? Number(o) * 24 / Number(n) : o,
    className: Xp("lucide", r),
    ...b
}, [...g.map(([h, N]) => y.createElement(h, N)), ...Array.isArray(p) ? p : [p]]));
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = (c, n) => {
    const o = y.forwardRef(({
        className: u,
        ...r
    }, p) => y.createElement(jg, {
        ref: p,
        iconNode: n,
        className: Xp(`lucide-${yg(c)}`, u),
        ...r
    }));
    return o.displayName = `${c}`, o
};
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = [
        ["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }],
        ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]
    ],
    Ag = xt("ArrowLeft", Ng);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = [
        ["path", {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }],
        ["circle", {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }]
    ],
    Eg = xt("Award", wg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tg = [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ],
    Ge = xt("Calendar", Tg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = [
        ["path", {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }],
        ["path", {
            d: "M18 17V9",
            key: "2bz60n"
        }],
        ["path", {
            d: "M13 17V5",
            key: "1frdt8"
        }],
        ["path", {
            d: "M8 17v-3",
            key: "17ska0"
        }]
    ],
    du = xt("ChartColumn", Rg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = [
        ["path", {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }],
        ["path", {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }]
    ],
    Qp = xt("CircleCheckBig", Cg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }],
        ["path", {
            d: "m9 9 6 6",
            key: "z0biqf"
        }]
    ],
    Vp = xt("CircleX", Og);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1",
            key: "tgr4d6"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }],
        ["path", {
            d: "m9 14 2 2 4-4",
            key: "df797q"
        }]
    ],
    _g = xt("ClipboardCheck", Dg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1",
            key: "tgr4d6"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }],
        ["path", {
            d: "M12 11h4",
            key: "1jrz19"
        }],
        ["path", {
            d: "M12 16h4",
            key: "n85exb"
        }],
        ["path", {
            d: "M8 11h.01",
            key: "1dfujw"
        }],
        ["path", {
            d: "M8 16h.01",
            key: "18s6g9"
        }]
    ],
    zg = xt("ClipboardList", Mg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lg = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }]
    ],
    Zp = xt("Clock", Lg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = [
        ["path", {
            d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",
            key: "1pvr1r"
        }],
        ["path", {
            d: "M20 16a8 8 0 1 0-16 0",
            key: "1pa543"
        }],
        ["path", {
            d: "M12 4v4",
            key: "1bq03y"
        }],
        ["path", {
            d: "M10 4h4",
            key: "1xpv9s"
        }]
    ],
    kg = xt("ConciergeBell", Ug);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qg = [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22",
            key: "7eqyqh"
        }],
        ["path", {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }]
    ],
    ou = xt("DollarSign", qg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = [
        ["path", {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f"
        }],
        ["path", {
            d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
            key: "151rxh"
        }],
        ["path", {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a"
        }],
        ["path", {
            d: "m2 2 20 20",
            key: "1ooewy"
        }]
    ],
    Bg = xt("EyeOff", Hg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yg = [
        ["path", {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ],
    Gg = xt("Eye", Yg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xg = [
        ["polygon", {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
            key: "1yg77f"
        }]
    ],
    Qg = xt("Filter", Xg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = [
        ["rect", {
            width: "7",
            height: "9",
            x: "3",
            y: "3",
            rx: "1",
            key: "10lvy0"
        }],
        ["rect", {
            width: "7",
            height: "5",
            x: "14",
            y: "3",
            rx: "1",
            key: "16une8"
        }],
        ["rect", {
            width: "7",
            height: "9",
            x: "14",
            y: "12",
            rx: "1",
            key: "1hutg5"
        }],
        ["rect", {
            width: "7",
            height: "5",
            x: "3",
            y: "16",
            rx: "1",
            key: "ldoo1y"
        }]
    ],
    Kp = xt("LayoutDashboard", Vg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zg = [
        ["path", {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }],
        ["polyline", {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }],
        ["line", {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }]
    ],
    yp = xt("LogOut", Zg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kg = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }]
    ],
    Il = xt("Plus", Kg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jg = [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }],
        ["path", {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }]
    ],
    uu = xt("Search", Jg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = [
        ["path", {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ],
    Jp = xt("Settings", $g);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ],
    Pg = xt("ShieldCheck", Fg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = [
        ["path", {
            d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",
            key: "1uzm8b"
        }],
        ["path", {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }]
    ],
    Ig = xt("SquareCheckBig", Wg);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tb = [
        ["path", {
            d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1m0v6g"
        }],
        ["path", {
            d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
            key: "ohrbg2"
        }]
    ],
    $p = xt("SquarePen", tb);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eb = [
        ["path", {
            d: "M11 2v2",
            key: "1539x4"
        }],
        ["path", {
            d: "M5 2v2",
            key: "1yf1q8"
        }],
        ["path", {
            d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
            key: "rb5t3r"
        }],
        ["path", {
            d: "M8 15a6 6 0 0 0 12 0v-3",
            key: "x18d4x"
        }],
        ["circle", {
            cx: "20",
            cy: "10",
            r: "2",
            key: "ts1r5v"
        }]
    ],
    ab = xt("Stethoscope", eb);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ib = [
        ["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }],
        ["path", {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }],
        ["path", {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }]
    ],
    cu = xt("Trash2", ib);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lb = [
        ["polyline", {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }],
        ["polyline", {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }]
    ],
    sb = xt("TrendingUp", lb);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nb = [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["line", {
            x1: "19",
            x2: "19",
            y1: "8",
            y2: "14",
            key: "1bvyxn"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11",
            key: "1shjgl"
        }]
    ],
    ru = xt("UserPlus", nb);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const db = [
        ["path", {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }],
        ["circle", {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }]
    ],
    ob = xt("User", db);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ub = [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["path", {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }]
    ],
    ts = xt("Users", ub);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cb = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    rb = xt("X", cb),
    Qi = {
        psicologia: "Psicología",
        fisioterapia: "Fisioterapia",
        lenguaje: "Lenguaje",
        lecto_escritura: "Lecto-Escritura"
    },
    _e = {
        psicologia: "Psicología",
        fisioterapia: "Fisioterapia",
        lenguaje: "Lenguaje",
        lecto_escritura: "Lecto-Escritura"
    },
    Yi = {
        programada: "Programada",
        completada: "Completada",
        cancelada: "Cancelada",
        no_asistio: "No Asistió"
    },
    fu = {
        programada: "bg-blue-100 text-blue-800",
        completada: "bg-green-100 text-green-800",
        cancelada: "bg-red-100 text-red-800",
        no_asistio: "bg-amber-100 text-amber-800"
    },
    fb = {
        psicologia: "bg-blue-500",
        fisioterapia: "bg-green-500",
        lenguaje: "bg-purple-500",
        lecto_escritura: "bg-orange-500"
    },
    Sp = {
        pendiente: "Pendiente",
        pagado: "Pagado",
        parcial: "Parcial"
    },
    pb = {
        pendiente: "bg-red-100 text-red-800",
        pagado: "bg-green-100 text-green-800",
        parcial: "bg-amber-100 text-amber-800"
    },
    Sn = {
        masculino: "Masculino",
        femenino: "Femenino",
        otro: "Otro"
    },
    Fp = {
        admin: "Administrador",
        receptionist: "Recepcionista",
        therapist: "Terapeuta"
    },
    pu = ["08:00", "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

function mu(c) {
    return c ? new Date(c).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "short",
        day: "numeric"
    }) : ""
}

function Pp() {
    return new Date().toISOString().split("T")[0]
}
const mb = [{
        path: "/admin",
        label: "Panel Principal",
        icon: Kp,
        end: !0
    }, {
        path: "/admin/registro-citas",
        label: "Registro de Citas",
        icon: Ge,
        end: !1
    }, {
        path: "/admin/gestion-citas",
        label: "Gestión de Citas",
        icon: Jp,
        end: !1
    }, {
        path: "/admin/estadisticas",
        label: "Estadísticas",
        icon: du,
        end: !1
    }, {
        path: "/admin/pacientes",
        label: "Pacientes",
        icon: ts,
        end: !1
    }, {
        path: "/admin/terapeutas",
        label: "Terapeutas",
        icon: ru,
        end: !1
    }],
    vb = [{
        path: "/recepcion",
        label: "Panel Principal",
        icon: Kp,
        end: !0
    }, {
        path: "/recepcion/asistencia",
        label: "Gestionar Asistencia",
        icon: Ig,
        end: !1
    }, {
        path: "/recepcion/adeudos",
        label: "Adeudos",
        icon: ou,
        end: !1
    }, {
        path: "/recepcion/citas",
        label: "Registro de Citas",
        icon: Ge,
        end: !1
    }],
    hb = [{
        path: "/terapeuta",
        label: "Mis Citas",
        icon: zg,
        end: !0
    }];

function gb() {
    const {
        user: c,
        logout: n,
        isLoading: o
    } = wn(), u = oa();
    if (o) return d.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100",
        "data-visual-edit-loc": "src/components/Layout.tsx:35:6",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: d.jsxs("div", {
            className: "flex flex-col items-center gap-4",
            "data-visual-edit-loc": "src/components/Layout.tsx:36:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("div", {
                className: "w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
                "data-visual-edit-loc": "src/components/Layout.tsx:37:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false"
            }), d.jsx("p", {
                className: "text-primary-700 font-medium animate-pulse",
                "data-visual-edit-loc": "src/components/Layout.tsx:38:10",
                "data-visual-edit-component": "p",
                "data-visual-edit-editable": "true",
                children: "Cargando..."
            })]
        })
    });
    if (!c) return d.jsx(pp, {
        to: "/",
        replace: !0,
        "data-visual-edit-loc": "src/components/Layout.tsx:44:20",
        "data-visual-edit-component": "Navigate",
        "data-visual-edit-editable": "false"
    });
    if (!c.role) return d.jsxs("div", {
        className: "min-h-screen flex flex-col",
        "data-visual-edit-loc": "src/components/Layout.tsx:48:6",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsx(Gi, {
            "data-visual-edit-loc": "src/components/Layout.tsx:49:8",
            "data-visual-edit-component": "Header",
            "data-visual-edit-editable": "false"
        }), d.jsx("div", {
            className: "flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100",
            "data-visual-edit-loc": "src/components/Layout.tsx:50:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: d.jsxs("div", {
                className: "text-center p-10 bg-white rounded-3xl shadow-xl max-w-sm border border-gray-100",
                "data-visual-edit-loc": "src/components/Layout.tsx:51:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4",
                    "data-visual-edit-loc": "src/components/Layout.tsx:52:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(ts, {
                        size: 28,
                        className: "text-accent-600",
                        "data-visual-edit-loc": "src/components/Layout.tsx:53:14",
                        "data-visual-edit-component": "Users",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("p", {
                    className: "text-gray-600 mb-6",
                    "data-visual-edit-loc": "src/components/Layout.tsx:55:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "Tu cuenta no tiene un rol asignado. Contacta al administrador."
                }), d.jsx("button", {
                    onClick: n,
                    className: "px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300",
                    "data-visual-edit-loc": "src/components/Layout.tsx:56:12",
                    "data-visual-edit-component": "button",
                    "data-visual-edit-editable": "true",
                    children: "Cerrar Sesión"
                })]
            })
        }), d.jsx(Xi, {
            "data-visual-edit-loc": "src/components/Layout.tsx:61:8",
            "data-visual-edit-component": "Footer",
            "data-visual-edit-editable": "false"
        })]
    });
    const p = {
        admin: "/admin",
        receptionist: "/recepcion",
        therapist: "/terapeuta"
    }[c.role];
    if (p && !u.pathname.startsWith(p)) return d.jsx(pp, {
        to: p,
        replace: !0,
        "data-visual-edit-loc": "src/components/Layout.tsx:70:11",
        "data-visual-edit-component": "Navigate",
        "data-visual-edit-editable": "false"
    });
    const g = c.role === "admin" ? mb : c.role === "receptionist" ? vb : hb;
    return d.jsxs("div", {
        className: "flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30",
        "data-visual-edit-loc": "src/components/Layout.tsx:76:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsx(Gi, {
            "data-visual-edit-loc": "src/components/Layout.tsx:77:6",
            "data-visual-edit-component": "Header",
            "data-visual-edit-editable": "false"
        }), d.jsxs("div", {
            className: "flex flex-1",
            "data-visual-edit-loc": "src/components/Layout.tsx:78:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("aside", {
                className: "hidden lg:flex w-60 bg-white/80 backdrop-blur-md shadow-xl flex-col shrink-0 border-r border-gray-100",
                "data-visual-edit-loc": "src/components/Layout.tsx:79:8",
                "data-visual-edit-component": "aside",
                "data-visual-edit-editable": "false",
                children: [d.jsx("nav", {
                    className: "flex-1 p-4 space-y-1.5",
                    "data-visual-edit-loc": "src/components/Layout.tsx:80:10",
                    "data-visual-edit-component": "nav",
                    "data-visual-edit-editable": "false",
                    children: g.map(b => d.jsxs(Ko, {
                        to: b.path,
                        end: b.end,
                        className: ({
                            isActive: v
                        }) => `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${v?"bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-600/30 scale-[1.02]":"text-gray-600 hover:bg-primary-50 hover:text-primary-700"}`,
                        "data-visual-edit-loc": "src/components/Layout.tsx:82:14",
                        "data-visual-edit-component": "NavLink",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx(b.icon, {
                            size: 20,
                            "data-visual-edit-loc": "src/components/Layout.tsx:94:16",
                            "data-visual-edit-editable": "false"
                        }), b.label]
                    }, b.path))
                }), d.jsxs("div", {
                    className: "p-4 border-t border-gray-100 bg-gradient-to-t from-gray-50/80",
                    "data-visual-edit-loc": "src/components/Layout.tsx:99:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsxs("div", {
                        className: "mb-3 px-3 py-2 bg-primary-50 rounded-xl",
                        "data-visual-edit-loc": "src/components/Layout.tsx:100:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("p", {
                            className: "text-sm font-bold text-primary-900 truncate",
                            "data-visual-edit-loc": "src/components/Layout.tsx:101:14",
                            "data-visual-edit-component": "p",
                            "data-visual-edit-editable": "false",
                            children: c.name || c.email
                        }), d.jsxs("p", {
                            className: "text-xs text-primary-600 font-medium",
                            "data-visual-edit-loc": "src/components/Layout.tsx:102:14",
                            "data-visual-edit-component": "p",
                            "data-visual-edit-editable": "false",
                            children: [Fp[c.role] || c.role, c.specialty ? ` · ${Qi[c.specialty]}` : ""]
                        })]
                    }), d.jsxs("button", {
                        onClick: n,
                        className: "flex items-center gap-2.5 px-4 py-2.5 text-sm text-danger-600 hover:bg-danger-50 rounded-xl w-full transition-all duration-300 font-semibold",
                        "data-visual-edit-loc": "src/components/Layout.tsx:107:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "true",
                        children: [d.jsx(yp, {
                            size: 18,
                            "data-visual-edit-loc": "src/components/Layout.tsx:111:14",
                            "data-visual-edit-component": "LogOut",
                            "data-visual-edit-editable": "false"
                        }), " Cerrar Sesión"]
                    })]
                })]
            }), d.jsxs("main", {
                className: "flex-1 min-w-0 p-4 sm:p-6 lg:p-8",
                "data-visual-edit-loc": "src/components/Layout.tsx:116:8",
                "data-visual-edit-component": "main",
                "data-visual-edit-editable": "false",
                children: [d.jsxs("div", {
                    className: "lg:hidden flex items-center justify-between mb-5 bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-sm",
                    "data-visual-edit-loc": "src/components/Layout.tsx:117:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("div", {
                        className: "flex gap-1.5 flex-wrap",
                        "data-visual-edit-loc": "src/components/Layout.tsx:118:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: g.map(b => d.jsx(Ko, {
                            to: b.path,
                            end: b.end,
                            className: ({
                                isActive: v
                            }) => `px-3 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${v?"bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                            "data-visual-edit-loc": "src/components/Layout.tsx:120:16",
                            "data-visual-edit-component": "NavLink",
                            "data-visual-edit-editable": "false",
                            children: b.label
                        }, b.path))
                    }), d.jsx("button", {
                        onClick: n,
                        className: "text-danger-500 hover:text-danger-700 ml-2 p-2 hover:bg-danger-50 rounded-xl transition",
                        "data-visual-edit-loc": "src/components/Layout.tsx:136:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "false",
                        children: d.jsx(yp, {
                            size: 18,
                            "data-visual-edit-loc": "src/components/Layout.tsx:137:14",
                            "data-visual-edit-component": "LogOut",
                            "data-visual-edit-editable": "false"
                        })
                    })]
                }), d.jsx(S0, {
                    "data-visual-edit-loc": "src/components/Layout.tsx:140:10",
                    "data-visual-edit-component": "Outlet",
                    "data-visual-edit-editable": "false"
                })]
            })]
        }), d.jsx(Xi, {
            "data-visual-edit-loc": "src/components/Layout.tsx:143:6",
            "data-visual-edit-component": "Footer",
            "data-visual-edit-editable": "false"
        })]
    })
}
const bb = [{
    key: "admin",
    label: "ADMINISTRADOR",
    icon: Pg,
    gradient: "from-green-100 to-green-50",
    border: "border-green-300 hover:border-green-500",
    iconColor: "text-green-700",
    shadow: "hover:shadow-green-200/60"
}, {
    key: "receptionist",
    label: "RECEPCIÓN",
    icon: kg,
    gradient: "from-blue-100 to-blue-50",
    border: "border-blue-300 hover:border-blue-500",
    iconColor: "text-blue-700",
    shadow: "hover:shadow-blue-200/60"
}, {
    key: "therapist",
    label: "TERAPEUTA",
    icon: ab,
    gradient: "from-amber-100 to-amber-50",
    border: "border-amber-300 hover:border-amber-500",
    iconColor: "text-amber-700",
    shadow: "hover:shadow-amber-200/60"
}];

function xb() {
    const {
        user: c
    } = wn(), n = Nn();
    return y.useEffect(() => {
        c && n({
            admin: "/admin",
            receptionist: "/recepcion",
            therapist: "/terapeuta"
        }[c.role] || "/admin", {
            replace: !0
        })
    }, [c, n]), d.jsxs("div", {
        className: "min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-primary-50/20",
        "data-visual-edit-loc": "src/pages/RoleSelect.tsx:50:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsx(Gi, {
            "data-visual-edit-loc": "src/pages/RoleSelect.tsx:51:6",
            "data-visual-edit-component": "Header",
            "data-visual-edit-editable": "false"
        }), d.jsxs("main", {
            className: "flex-1 flex flex-col items-center justify-center px-4 py-16",
            "data-visual-edit-loc": "src/pages/RoleSelect.tsx:52:6",
            "data-visual-edit-component": "main",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                className: "text-center mb-12",
                "data-visual-edit-loc": "src/pages/RoleSelect.tsx:53:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h1", {
                    className: "text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary-800 via-primary-600 to-accent-500 bg-clip-text text-transparent tracking-wide",
                    "data-visual-edit-loc": "src/pages/RoleSelect.tsx:54:10",
                    "data-visual-edit-component": "h1",
                    "data-visual-edit-editable": "true",
                    children: "BIENVENIDO/(A)"
                }), d.jsx("p", {
                    className: "text-gray-500 mt-3 text-sm font-medium tracking-wider",
                    "data-visual-edit-loc": "src/pages/RoleSelect.tsx:57:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "Selecciona tu tipo de acceso"
                })]
            }), d.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full",
                "data-visual-edit-loc": "src/pages/RoleSelect.tsx:59:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: bb.map(o => d.jsxs(La, {
                    to: `/login/${o.key}`,
                    className: `group flex flex-col items-center justify-center p-10 rounded-3xl border-2 bg-gradient-to-br ${o.gradient} ${o.border} ${o.shadow} transition-all duration-500 hover:scale-105 hover:shadow-2xl`,
                    "data-visual-edit-loc": "src/pages/RoleSelect.tsx:61:12",
                    "data-visual-edit-component": "Link",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("div", {
                        className: "w-24 h-24 rounded-3xl bg-white/80 shadow-inner flex items-center justify-center group-hover:shadow-lg transition-all duration-500 group-hover:scale-110",
                        "data-visual-edit-loc": "src/pages/RoleSelect.tsx:66:14",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: d.jsx(o.icon, {
                            size: 48,
                            className: `${o.iconColor} transition-transform duration-500`,
                            strokeWidth: 1.5,
                            "data-visual-edit-loc": "src/pages/RoleSelect.tsx:67:16",
                            "data-visual-edit-editable": "false"
                        })
                    }), d.jsx("span", {
                        className: `mt-5 font-extrabold text-sm tracking-[0.2em] ${o.iconColor}`,
                        "data-visual-edit-loc": "src/pages/RoleSelect.tsx:69:14",
                        "data-visual-edit-component": "span",
                        "data-visual-edit-editable": "false",
                        children: o.label
                    })]
                }, o.key))
            })]
        }), d.jsx(Xi, {
            "data-visual-edit-loc": "src/pages/RoleSelect.tsx:76:6",
            "data-visual-edit-component": "Footer",
            "data-visual-edit-editable": "false"
        })]
    })
}

function yb() {
    const {
        role: c
    } = d0(), [n, o] = y.useState(!1), [u, r] = y.useState(""), [p, g] = y.useState(""), [b, v] = y.useState(""), [h, N] = y.useState(!1), [T, R] = y.useState(""), [z, D] = y.useState(!1), {
        user: H,
        login: G
    } = wn(), U = Nn(), k = c && ["admin", "receptionist", "therapist"].includes(c), w = k ? Fp[c] : "Usuario";
    if (y.useEffect(() => {
            H && U({
                admin: "/admin",
                receptionist: "/recepcion",
                therapist: "/terapeuta"
            }[H.role] || "/admin", {
                replace: !0
            })
        }, [H, U]), !k) return d.jsxs("div", {
        className: "min-h-screen flex flex-col",
        "data-visual-edit-loc": "src/pages/Login.tsx:34:6",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsx(Gi, {
            "data-visual-edit-loc": "src/pages/Login.tsx:35:8",
            "data-visual-edit-component": "Header",
            "data-visual-edit-editable": "false"
        }), d.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            "data-visual-edit-loc": "src/pages/Login.tsx:36:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: d.jsxs("div", {
                className: "text-center bg-white p-10 rounded-3xl shadow-lg",
                "data-visual-edit-loc": "src/pages/Login.tsx:37:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("p", {
                    className: "text-gray-500 mb-4 text-lg",
                    "data-visual-edit-loc": "src/pages/Login.tsx:38:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "Rol no válido"
                }), d.jsx(La, {
                    to: "/",
                    className: "text-primary-600 hover:underline font-semibold",
                    "data-visual-edit-loc": "src/pages/Login.tsx:39:12",
                    "data-visual-edit-component": "Link",
                    "data-visual-edit-editable": "true",
                    children: "Volver al inicio"
                })]
            })
        }), d.jsx(Xi, {
            "data-visual-edit-loc": "src/pages/Login.tsx:42:8",
            "data-visual-edit-component": "Footer",
            "data-visual-edit-editable": "false"
        })]
    });
    const K = async Z => {
        Z.preventDefault(), R(""), D(!0);
        try {
            n && c === "admin" && await nt.collection("users").create({
                email: u,
                password: p,
                passwordConfirm: p,
                name: b,
                role: "admin"
            }), await G(u, p)
        } catch (_) {
            console.error(_), R(n ? "Error al crear la cuenta. Verifica los datos." : "Credenciales incorrectas. Intenta de nuevo.")
        }
        D(!1)
    };
    return d.jsxs("div", {
        className: "min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-primary-50/20",
        "data-visual-edit-loc": "src/pages/Login.tsx:66:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsx(Gi, {
            "data-visual-edit-loc": "src/pages/Login.tsx:67:6",
            "data-visual-edit-component": "Header",
            "data-visual-edit-editable": "false"
        }), d.jsx("main", {
            className: "flex-1 flex items-center justify-center px-4 py-12",
            "data-visual-edit-loc": "src/pages/Login.tsx:68:6",
            "data-visual-edit-component": "main",
            "data-visual-edit-editable": "false",
            children: d.jsxs("div", {
                className: "w-full max-w-md",
                "data-visual-edit-loc": "src/pages/Login.tsx:69:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsxs(La, {
                    to: "/",
                    className: "inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 mb-8 transition font-semibold group",
                    "data-visual-edit-loc": "src/pages/Login.tsx:70:10",
                    "data-visual-edit-component": "Link",
                    "data-visual-edit-editable": "true",
                    children: [d.jsx(Ag, {
                        size: 18,
                        className: "group-hover:-translate-x-1 transition-transform",
                        "data-visual-edit-loc": "src/pages/Login.tsx:71:12",
                        "data-visual-edit-component": "ArrowLeft",
                        "data-visual-edit-editable": "false"
                    }), " Volver al inicio"]
                }), d.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-10 border border-gray-100",
                    "data-visual-edit-loc": "src/pages/Login.tsx:74:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("p", {
                        className: "text-xs font-bold text-primary-600 tracking-[0.3em] mb-2",
                        "data-visual-edit-loc": "src/pages/Login.tsx:75:12",
                        "data-visual-edit-component": "p",
                        "data-visual-edit-editable": "true",
                        children: "LOGIN"
                    }), d.jsx("p", {
                        className: "text-2xl font-extrabold text-gray-900 mb-6",
                        "data-visual-edit-loc": "src/pages/Login.tsx:76:12",
                        "data-visual-edit-component": "p",
                        "data-visual-edit-editable": "false",
                        children: w
                    }), d.jsx("div", {
                        className: "flex justify-center mb-8",
                        "data-visual-edit-loc": "src/pages/Login.tsx:78:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: d.jsx("div", {
                            className: "w-24 h-24 rounded-full border-4 border-accent-500 flex items-center justify-center bg-gradient-to-br from-accent-50 to-accent-100 shadow-lg shadow-accent-200/50",
                            "data-visual-edit-loc": "src/pages/Login.tsx:79:14",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: d.jsx(ob, {
                                size: 44,
                                className: "text-accent-600",
                                "data-visual-edit-loc": "src/pages/Login.tsx:80:16",
                                "data-visual-edit-component": "User",
                                "data-visual-edit-editable": "false"
                            })
                        })
                    }), c === "admin" && d.jsxs("div", {
                        className: "flex mb-6 bg-gray-100 rounded-2xl p-1.5",
                        "data-visual-edit-loc": "src/pages/Login.tsx:85:14",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("button", {
                            onClick: () => {
                                o(!1), R("")
                            },
                            className: `flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${n?"text-gray-500 hover:text-gray-700":"bg-white shadow-md text-primary-800"}`,
                            "data-visual-edit-loc": "src/pages/Login.tsx:86:16",
                            "data-visual-edit-component": "button",
                            "data-visual-edit-editable": "true",
                            children: "Iniciar Sesión"
                        }), d.jsx("button", {
                            onClick: () => {
                                o(!0), R("")
                            },
                            className: `flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${n?"bg-white shadow-md text-primary-800":"text-gray-500 hover:text-gray-700"}`,
                            "data-visual-edit-loc": "src/pages/Login.tsx:92:16",
                            "data-visual-edit-component": "button",
                            "data-visual-edit-editable": "true",
                            children: "Registro Inicial"
                        })]
                    }), d.jsxs("form", {
                        onSubmit: K,
                        className: "space-y-5",
                        "data-visual-edit-loc": "src/pages/Login.tsx:101:12",
                        "data-visual-edit-component": "form",
                        "data-visual-edit-editable": "false",
                        children: [n && d.jsxs("div", {
                            "data-visual-edit-loc": "src/pages/Login.tsx:103:16",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("label", {
                                className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                                "data-visual-edit-loc": "src/pages/Login.tsx:104:18",
                                "data-visual-edit-component": "label",
                                "data-visual-edit-editable": "true",
                                children: "NOMBRE COMPLETO"
                            }), d.jsx("input", {
                                type: "text",
                                value: b,
                                onChange: Z => v(Z.target.value),
                                required: !0,
                                className: "w-full px-5 py-3.5 border-2 border-success-400 rounded-xl text-sm focus:ring-4 focus:ring-success-100 focus:border-success-500 outline-none transition-all font-medium",
                                placeholder: "Ingresa tu nombre",
                                "data-visual-edit-loc": "src/pages/Login.tsx:105:18",
                                "data-visual-edit-component": "input",
                                "data-visual-edit-editable": "false"
                            })]
                        }), d.jsxs("div", {
                            "data-visual-edit-loc": "src/pages/Login.tsx:112:14",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("label", {
                                className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                                "data-visual-edit-loc": "src/pages/Login.tsx:113:16",
                                "data-visual-edit-component": "label",
                                "data-visual-edit-editable": "true",
                                children: "USUARIO"
                            }), d.jsx("input", {
                                type: "email",
                                value: u,
                                onChange: Z => r(Z.target.value),
                                required: !0,
                                className: "w-full px-5 py-3.5 border-2 border-success-400 rounded-xl text-sm focus:ring-4 focus:ring-success-100 focus:border-success-500 outline-none transition-all font-medium",
                                placeholder: "correo@ejemplo.com",
                                "data-visual-edit-loc": "src/pages/Login.tsx:114:16",
                                "data-visual-edit-component": "input",
                                "data-visual-edit-editable": "false"
                            })]
                        }), d.jsxs("div", {
                            "data-visual-edit-loc": "src/pages/Login.tsx:120:14",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("label", {
                                className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                                "data-visual-edit-loc": "src/pages/Login.tsx:121:16",
                                "data-visual-edit-component": "label",
                                "data-visual-edit-editable": "true",
                                children: "CONTRASEÑA"
                            }), d.jsxs("div", {
                                className: "relative",
                                "data-visual-edit-loc": "src/pages/Login.tsx:122:16",
                                "data-visual-edit-component": "div",
                                "data-visual-edit-editable": "false",
                                children: [d.jsx("input", {
                                    type: h ? "text" : "password",
                                    value: p,
                                    onChange: Z => g(Z.target.value),
                                    required: !0,
                                    minLength: 8,
                                    className: "w-full px-5 py-3.5 pr-12 border-2 border-success-400 rounded-xl text-sm focus:ring-4 focus:ring-success-100 focus:border-success-500 outline-none transition-all font-medium",
                                    placeholder: "Mínimo 8 caracteres",
                                    "data-visual-edit-loc": "src/pages/Login.tsx:123:18",
                                    "data-visual-edit-component": "input",
                                    "data-visual-edit-editable": "false"
                                }), d.jsx("button", {
                                    type: "button",
                                    onClick: () => N(!h),
                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                                    "data-visual-edit-loc": "src/pages/Login.tsx:128:18",
                                    "data-visual-edit-component": "button",
                                    "data-visual-edit-editable": "false",
                                    children: h ? d.jsx(Bg, {
                                        size: 18,
                                        "data-visual-edit-loc": "src/pages/Login.tsx:129:36",
                                        "data-visual-edit-component": "EyeOff",
                                        "data-visual-edit-editable": "false"
                                    }) : d.jsx(Gg, {
                                        size: 18,
                                        "data-visual-edit-loc": "src/pages/Login.tsx:129:59",
                                        "data-visual-edit-component": "Eye",
                                        "data-visual-edit-editable": "false"
                                    })
                                })]
                            })]
                        }), T && d.jsx("div", {
                            className: "bg-danger-50 border-2 border-danger-200 text-danger-700 text-sm rounded-xl p-4 font-medium",
                            "data-visual-edit-loc": "src/pages/Login.tsx:134:16",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: T
                        }), d.jsx("div", {
                            className: "flex justify-center pt-2",
                            "data-visual-edit-loc": "src/pages/Login.tsx:138:14",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: d.jsx("button", {
                                type: "submit",
                                disabled: z,
                                className: "px-12 py-3.5 bg-gradient-to-r from-danger-500 to-danger-600 hover:from-danger-600 hover:to-danger-700 text-white font-extrabold rounded-xl text-sm transition-all duration-300 disabled:opacity-50 tracking-[0.2em] shadow-lg shadow-danger-500/30 hover:shadow-xl hover:shadow-danger-500/40 hover:scale-105",
                                "data-visual-edit-loc": "src/pages/Login.tsx:139:16",
                                "data-visual-edit-component": "button",
                                "data-visual-edit-editable": "false",
                                children: z ? d.jsxs("span", {
                                    className: "flex items-center gap-2",
                                    "data-visual-edit-loc": "src/pages/Login.tsx:144:20",
                                    "data-visual-edit-component": "span",
                                    "data-visual-edit-editable": "true",
                                    children: [d.jsx("span", {
                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                                        "data-visual-edit-loc": "src/pages/Login.tsx:145:22",
                                        "data-visual-edit-component": "span",
                                        "data-visual-edit-editable": "false"
                                    }), "Cargando..."]
                                }) : n ? "CREAR CUENTA" : "INICIAR SESIÓN"
                            })
                        })]
                    })]
                })]
            })
        }), d.jsx(Xi, {
            "data-visual-edit-loc": "src/pages/Login.tsx:155:6",
            "data-visual-edit-component": "Footer",
            "data-visual-edit-editable": "false"
        })]
    })
}

function Sb() {
    return d.jsxs("div", {
        className: "min-h-screen flex flex-col",
        "data-visual-edit-loc": "src/pages/NotFound.tsx:8:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsx(Gi, {
            "data-visual-edit-loc": "src/pages/NotFound.tsx:9:6",
            "data-visual-edit-component": "Header",
            "data-visual-edit-editable": "false"
        }), d.jsx("div", {
            className: "flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50/20",
            "data-visual-edit-loc": "src/pages/NotFound.tsx:10:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: d.jsxs("div", {
                className: "text-center",
                "data-visual-edit-loc": "src/pages/NotFound.tsx:11:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h1", {
                    className: "text-8xl font-black bg-gradient-to-r from-primary-800 to-primary-500 bg-clip-text text-transparent mb-4",
                    "data-visual-edit-loc": "src/pages/NotFound.tsx:12:10",
                    "data-visual-edit-component": "h1",
                    "data-visual-edit-editable": "true",
                    children: "404"
                }), d.jsx("p", {
                    className: "text-gray-500 mb-8 text-lg font-medium",
                    "data-visual-edit-loc": "src/pages/NotFound.tsx:13:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "Página no encontrada"
                }), d.jsx(La, {
                    to: "/",
                    className: "px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300",
                    "data-visual-edit-loc": "src/pages/NotFound.tsx:14:10",
                    "data-visual-edit-component": "Link",
                    "data-visual-edit-editable": "true",
                    children: "Volver al inicio"
                })]
            })
        }), d.jsx(Xi, {
            "data-visual-edit-loc": "src/pages/NotFound.tsx:19:6",
            "data-visual-edit-component": "Footer",
            "data-visual-edit-editable": "false"
        })]
    })
}
const jb = [{
    to: "/admin/registro-citas",
    label: "REGISTRO DE CITAS",
    desc: "Programar nuevas citas",
    icon: Ge,
    gradient: "from-orange-400 to-orange-500",
    shadow: "shadow-orange-500/30"
}, {
    to: "/admin/gestion-citas",
    label: "GESTIÓN DE CITAS",
    desc: "Editar y administrar",
    icon: Jp,
    gradient: "from-red-500 to-blue-600",
    shadow: "shadow-blue-500/30"
}, {
    to: "/admin/estadisticas",
    label: "ESTADÍSTICAS",
    desc: "Reportes y métricas",
    icon: du,
    gradient: "from-emerald-400 to-emerald-600",
    shadow: "shadow-emerald-500/30"
}, {
    to: "/admin/pacientes",
    label: "PACIENTES",
    desc: "Gestionar pacientes",
    icon: ts,
    gradient: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-500/30"
}, {
    to: "/admin/terapeutas",
    label: "TERAPEUTAS",
    desc: "Gestionar terapeutas",
    icon: ru,
    gradient: "from-purple-400 to-purple-600",
    shadow: "shadow-purple-500/30"
}];

function Nb() {
    const [c, n] = y.useState({
        patients: 0,
        therapists: 0,
        appointments: 0,
        todayAppts: 0
    });
    return y.useEffect(() => {
        (async () => {
            try {
                const u = new Date().toISOString().split("T")[0],
                    [r, p, g, b] = await Promise.all([nt.collection("patients").getList(1, 1, {
                        requestKey: null
                    }), nt.collection("users").getList(1, 1, {
                        filter: "role = 'therapist'",
                        requestKey: null
                    }), nt.collection("appointments").getList(1, 1, {
                        requestKey: null
                    }), nt.collection("appointments").getList(1, 1, {
                        filter: nt.filter("date >= {:start} && date <= {:end}", {
                            start: u + " 00:00:00",
                            end: u + " 23:59:59"
                        }),
                        requestKey: null
                    })]);
                n({
                    patients: r.totalItems,
                    therapists: p.totalItems,
                    appointments: g.totalItems,
                    todayAppts: b.totalItems
                })
            } catch (u) {
                console.error(u)
            }
        })()
    }, []), d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:37:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "mb-8",
            "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:38:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("h1", {
                className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:39:8",
                "data-visual-edit-component": "h1",
                "data-visual-edit-editable": "true",
                children: "Panel de Administrador"
            }), d.jsx("p", {
                className: "text-gray-500 mt-1 font-medium",
                "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:40:8",
                "data-visual-edit-component": "p",
                "data-visual-edit-editable": "true",
                children: "Gestiona tu fundación desde aquí"
            })]
        }), d.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8",
            "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:43:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [{
                label: "Pacientes",
                value: c.patients,
                color: "text-blue-600",
                bg: "bg-blue-50 border-blue-100"
            }, {
                label: "Terapeutas",
                value: c.therapists,
                color: "text-purple-600",
                bg: "bg-purple-50 border-purple-100"
            }, {
                label: "Citas Hoy",
                value: c.todayAppts,
                color: "text-orange-600",
                bg: "bg-orange-50 border-orange-100"
            }, {
                label: "Total Citas",
                value: c.appointments,
                color: "text-emerald-600",
                bg: "bg-emerald-50 border-emerald-100"
            }].map(o => d.jsxs("div", {
                className: `${o.bg} border-2 rounded-2xl p-5 text-center transition-all hover:scale-105 duration-300`,
                "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:50:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("p", {
                    className: `text-3xl font-black ${o.color}`,
                    "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:51:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: o.value
                }), d.jsx("p", {
                    className: "text-xs font-bold text-gray-500 mt-1 tracking-wider",
                    "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:52:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: o.label
                })]
            }, o.label))
        }), d.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
            "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:57:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: jb.map(o => d.jsxs(La, {
                to: o.to,
                className: `group bg-gradient-to-br ${o.gradient} rounded-3xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl ${o.shadow} flex flex-col items-center justify-center gap-3 min-h-[180px] hover:shadow-2xl`,
                "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:59:10",
                "data-visual-edit-component": "Link",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                    "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:64:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(o.icon, {
                        size: 32,
                        strokeWidth: 1.5,
                        "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:65:14",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("span", {
                    className: "font-extrabold text-lg tracking-wider text-center",
                    "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:67:12",
                    "data-visual-edit-component": "span",
                    "data-visual-edit-editable": "false",
                    children: o.label
                }), d.jsx("span", {
                    className: "text-xs opacity-80 font-medium",
                    "data-visual-edit-loc": "src/pages/admin/Dashboard.tsx:68:12",
                    "data-visual-edit-component": "span",
                    "data-visual-edit-editable": "false",
                    children: o.desc
                })]
            }, o.to))
        })]
    })
}

function Ji({
    isOpen: c,
    onClose: n,
    title: o,
    children: u,
    wide: r
}) {
    return y.useEffect(() => (c ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
        document.body.style.overflow = ""
    }), [c]), c ? d.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        "data-visual-edit-loc": "src/components/Modal.tsx:22:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsx("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm animate-fade-in",
            onClick: n,
            "data-visual-edit-loc": "src/components/Modal.tsx:23:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false"
        }), d.jsxs("div", {
            className: `relative bg-white rounded-3xl shadow-2xl w-full ${r?"max-w-2xl":"max-w-lg"} max-h-[90vh] overflow-y-auto animate-scale-in`,
            "data-visual-edit-loc": "src/components/Modal.tsx:24:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                className: "sticky top-0 bg-gradient-to-r from-primary-700 to-primary-800 text-white flex items-center justify-between p-6 rounded-t-3xl z-10",
                "data-visual-edit-loc": "src/components/Modal.tsx:25:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h2", {
                    className: "text-lg font-bold tracking-wide",
                    "data-visual-edit-loc": "src/components/Modal.tsx:26:10",
                    "data-visual-edit-component": "h2",
                    "data-visual-edit-editable": "false",
                    children: o
                }), d.jsx("button", {
                    onClick: n,
                    className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition",
                    "data-visual-edit-loc": "src/components/Modal.tsx:27:10",
                    "data-visual-edit-component": "button",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(rb, {
                        size: 18,
                        "data-visual-edit-loc": "src/components/Modal.tsx:28:12",
                        "data-visual-edit-component": "X",
                        "data-visual-edit-editable": "false"
                    })
                })]
            }), d.jsx("div", {
                className: "p-6",
                "data-visual-edit-loc": "src/components/Modal.tsx:31:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: u
            })]
        }), d.jsx("style", {
            "data-visual-edit-loc": "src/components/Modal.tsx:33:6",
            "data-visual-edit-component": "style",
            "data-visual-edit-editable": "false",
            children: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
      `
        })]
    }) : null
}

function Ab() {
    const [c, n] = y.useState([]), [o, u] = y.useState([]), [r, p] = y.useState([]), [g, b] = y.useState(!0), [v, h] = y.useState(!1), [N, T] = y.useState({
        patient: "",
        therapist: "",
        date: "",
        time_slot: "08:00",
        therapy_type: "psicologia",
        status: "programada",
        notes: ""
    }), [R, z] = y.useState(!1), [D, H] = y.useState(""), G = async () => {
        try {
            const [w, K, Z] = await Promise.all([nt.collection("appointments").getFullList({
                expand: "patient,therapist",
                sort: "-date,time_slot",
                requestKey: null
            }), nt.collection("patients").getFullList({
                sort: "name",
                requestKey: null
            }), nt.collection("users").getFullList({
                filter: "role = 'therapist'",
                sort: "name",
                requestKey: null
            })]);
            n(w), u(K), p(Z)
        } catch (w) {
            console.error(w)
        }
        b(!1)
    };
    y.useEffect(() => {
        G()
    }, []);
    const U = r.filter(w => !N.therapy_type || w.specialty === N.therapy_type),
        k = async w => {
            w.preventDefault(), z(!0), H("");
            try {
                await nt.collection("appointments").create(N), h(!1), T({
                    patient: "",
                    therapist: "",
                    date: "",
                    time_slot: "08:00",
                    therapy_type: "psicologia",
                    status: "programada",
                    notes: ""
                }), G()
            } catch (K) {
                console.error(K), H("Error al registrar la cita.")
            }
            z(!1)
        };
    return g ? d.jsx("div", {
        className: "flex justify-center py-20",
        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:53:6",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: d.jsxs("div", {
            className: "flex flex-col items-center gap-3",
            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:54:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("div", {
                className: "w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:55:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false"
            }), d.jsx("p", {
                className: "text-sm text-gray-500 font-medium",
                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:56:10",
                "data-visual-edit-component": "p",
                "data-visual-edit-editable": "true",
                children: "Cargando citas..."
            })]
        })
    }) : d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:63:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "flex justify-between items-center mb-6",
            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:64:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:65:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h1", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:66:10",
                    "data-visual-edit-component": "h1",
                    "data-visual-edit-editable": "true",
                    children: "Registro de Citas"
                }), d.jsxs("p", {
                    className: "text-gray-500 text-sm font-medium mt-1",
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:67:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: [c.length, " cita(s) registrada(s)"]
                })]
            }), d.jsxs("button", {
                onClick: () => {
                    h(!0), H("")
                },
                className: "flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:scale-105",
                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:69:8",
                "data-visual-edit-component": "button",
                "data-visual-edit-editable": "true",
                children: [d.jsx(Il, {
                    size: 20,
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:70:10",
                    "data-visual-edit-component": "Plus",
                    "data-visual-edit-editable": "false"
                }), " Nueva Cita"]
            })]
        }), d.jsx("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden border border-gray-100",
            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:74:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: c.length === 0 ? d.jsxs("div", {
                className: "p-20 text-center",
                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:76:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4",
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:77:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(Ge, {
                        size: 40,
                        className: "text-gray-300",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:78:14",
                        "data-visual-edit-component": "Calendar",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("p", {
                    className: "text-gray-400 font-semibold text-lg",
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:80:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "No hay citas registradas"
                }), d.jsx("p", {
                    className: "text-gray-300 text-sm mt-1",
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:81:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "Comienza creando una nueva cita"
                })]
            }) : d.jsx("div", {
                className: "overflow-x-auto",
                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:84:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsxs("table", {
                    className: "w-full",
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:85:12",
                    "data-visual-edit-component": "table",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("thead", {
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:86:14",
                        "data-visual-edit-component": "thead",
                        "data-visual-edit-editable": "false",
                        children: d.jsxs("tr", {
                            className: "bg-gradient-to-r from-primary-700 to-primary-800 text-white",
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:87:16",
                            "data-visual-edit-component": "tr",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:88:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Nombre del paciente"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:89:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Área terapéutica"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:90:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Terapeuta"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:91:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Horario"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:92:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Observaciones"
                            })]
                        })
                    }), d.jsx("tbody", {
                        className: "divide-y divide-gray-50",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:95:14",
                        "data-visual-edit-component": "tbody",
                        "data-visual-edit-editable": "false",
                        children: c.map((w, K) => {
                            var Z, _, B, I;
                            return d.jsxs("tr", {
                                className: `${K%2===0?"bg-white":"bg-primary-50/30"} hover:bg-primary-50 transition-colors`,
                                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:97:18",
                                "data-visual-edit-component": "tr",
                                "data-visual-edit-editable": "false",
                                children: [d.jsx("td", {
                                    className: "px-5 py-4 text-sm font-semibold text-gray-900",
                                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:98:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: ((_ = (Z = w.expand) == null ? void 0 : Z.patient) == null ? void 0 : _.name) || "—"
                                }), d.jsx("td", {
                                    className: "px-5 py-4",
                                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:99:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: d.jsx("span", {
                                        className: "inline-block px-3 py-1.5 text-xs font-bold rounded-full bg-primary-100 text-primary-700",
                                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:100:22",
                                        "data-visual-edit-component": "span",
                                        "data-visual-edit-editable": "false",
                                        children: _e[w.therapy_type] || w.therapy_type
                                    })
                                }), d.jsx("td", {
                                    className: "px-5 py-4 text-sm text-gray-700 font-medium",
                                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:104:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: ((I = (B = w.expand) == null ? void 0 : B.therapist) == null ? void 0 : I.name) || "—"
                                }), d.jsxs("td", {
                                    className: "px-5 py-4 text-sm font-bold text-primary-800",
                                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:105:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: [mu(w.date), " · ", w.time_slot]
                                }), d.jsx("td", {
                                    className: "px-5 py-4 text-sm text-gray-500 max-w-[200px] truncate",
                                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:106:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: w.notes || "—"
                                })]
                            }, w.id)
                        })
                    })]
                })
            })
        }), d.jsx(Ji, {
            isOpen: v,
            onClose: () => h(!1),
            title: "Nueva Cita",
            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:115:6",
            "data-visual-edit-component": "Modal",
            "data-visual-edit-editable": "false",
            children: d.jsxs("form", {
                onSubmit: k,
                className: "space-y-5",
                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:116:8",
                "data-visual-edit-component": "form",
                "data-visual-edit-editable": "false",
                children: [d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:117:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:118:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "PACIENTE *"
                    }), d.jsxs("select", {
                        required: !0,
                        value: N.patient,
                        onChange: w => T({ ...N,
                            patient: w.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all font-medium",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:119:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("option", {
                            value: "",
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:120:14",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "true",
                            children: "Seleccionar paciente"
                        }), o.map(w => d.jsx("option", {
                            value: w.id,
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:121:35",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: w.name
                        }, w.id))]
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:124:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:125:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "ÁREA TERAPÉUTICA *"
                    }), d.jsx("select", {
                        required: !0,
                        value: N.therapy_type,
                        onChange: w => T({ ...N,
                            therapy_type: w.target.value,
                            therapist: ""
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all font-medium",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:126:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: Object.entries(_e).map(([w, K]) => d.jsx("option", {
                            value: w,
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:127:62",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: K
                        }, w))
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:130:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:131:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "TERAPEUTA *"
                    }), d.jsxs("select", {
                        required: !0,
                        value: N.therapist,
                        onChange: w => T({ ...N,
                            therapist: w.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all font-medium",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:132:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("option", {
                            value: "",
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:133:14",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "true",
                            children: "Seleccionar terapeuta"
                        }), U.map(w => d.jsxs("option", {
                            value: w.id,
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:134:45",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: [w.name, " — ", Qi[w.specialty]]
                        }, w.id))]
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:137:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:138:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:139:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "FECHA *"
                        }), d.jsx("input", {
                            type: "date",
                            required: !0,
                            value: N.date,
                            onChange: w => T({ ...N,
                                date: w.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all font-medium",
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:140:14",
                            "data-visual-edit-component": "input",
                            "data-visual-edit-editable": "false"
                        })]
                    }), d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:142:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:143:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "HORA *"
                        }), d.jsx("select", {
                            required: !0,
                            value: N.time_slot,
                            onChange: w => T({ ...N,
                                time_slot: w.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all font-medium",
                            "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:144:14",
                            "data-visual-edit-component": "select",
                            "data-visual-edit-editable": "false",
                            children: pu.map(w => d.jsx("option", {
                                value: w,
                                "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:145:39",
                                "data-visual-edit-component": "option",
                                "data-visual-edit-editable": "false",
                                children: w
                            }, w))
                        })]
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:149:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:150:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "OBSERVACIONES"
                    }), d.jsx("textarea", {
                        value: N.notes,
                        onChange: w => T({ ...N,
                            notes: w.target.value
                        }),
                        rows: 2,
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all font-medium resize-none",
                        placeholder: "Notas adicionales...",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:151:12",
                        "data-visual-edit-component": "textarea",
                        "data-visual-edit-editable": "false"
                    })]
                }), D && d.jsx("div", {
                    className: "bg-danger-50 border-2 border-danger-200 text-danger-700 text-sm rounded-xl p-4 font-medium",
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:153:20",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: D
                }), d.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:154:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("button", {
                        type: "button",
                        onClick: () => h(!1),
                        className: "flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:155:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "true",
                        children: "Cancelar"
                    }), d.jsx("button", {
                        type: "submit",
                        disabled: R,
                        className: "flex-1 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl text-sm font-bold hover:shadow-lg disabled:opacity-50 transition-all",
                        "data-visual-edit-loc": "src/pages/admin/RegisterAppointments.tsx:156:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "false",
                        children: R ? "Registrando..." : "Registrar Cita"
                    })]
                })]
            })
        })]
    })
}

function wb() {
    const [c, n] = y.useState([]), [o, u] = y.useState([]), [r, p] = y.useState([]), [g, b] = y.useState(!0), [v, h] = y.useState(!1), [N, T] = y.useState(null), [R, z] = y.useState({
        patient: "",
        therapist: "",
        date: "",
        time_slot: "08:00",
        therapy_type: "psicologia",
        status: "programada",
        notes: ""
    }), [D, H] = y.useState(!1), [G, U] = y.useState(""), [k, w] = y.useState(""), [K, Z] = y.useState(""), _ = async () => {
        try {
            const [Q, Nt, le] = await Promise.all([nt.collection("appointments").getFullList({
                expand: "patient,therapist",
                sort: "-date,time_slot",
                requestKey: null
            }), nt.collection("patients").getFullList({
                sort: "name",
                requestKey: null
            }), nt.collection("users").getFullList({
                filter: "role = 'therapist'",
                sort: "name",
                requestKey: null
            })]);
            n(Q), u(Nt), p(le)
        } catch (Q) {
            console.error(Q)
        }
        b(!1)
    };
    y.useEffect(() => {
        _()
    }, []);
    const B = r.filter(Q => !R.therapy_type || Q.specialty === R.therapy_type),
        I = Q => {
            T(Q), z({
                patient: Q.patient,
                therapist: Q.therapist,
                date: Q.date ? Q.date.split("T")[0].split(" ")[0] : "",
                time_slot: Q.time_slot,
                therapy_type: Q.therapy_type,
                status: Q.status,
                notes: Q.notes || ""
            }), U(""), h(!0)
        },
        V = async Q => {
            Q.preventDefault(), H(!0), U("");
            try {
                N && await nt.collection("appointments").update(N.id, R), h(!1), _()
            } catch (Nt) {
                console.error(Nt), U("Error al guardar.")
            }
            H(!1)
        },
        tt = async Q => {
            if (confirm("¿Eliminar esta cita?")) try {
                await nt.collection("appointments").delete(Q), _()
            } catch (Nt) {
                console.error(Nt)
            }
        },
        zt = c.filter(Q => !(k && Q.therapy_type !== k || K && Q.status !== K));
    return g ? d.jsx("div", {
        className: "flex justify-center py-20",
        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:66:11",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: d.jsx("div", {
            className: "w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:66:54",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false"
        })
    }) : d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:70:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsx("h1", {
            className: "text-3xl font-extrabold text-gray-900 tracking-tight mb-6",
            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:71:6",
            "data-visual-edit-component": "h1",
            "data-visual-edit-editable": "true",
            children: "Gestión de Citas"
        }), d.jsxs("div", {
            className: "bg-white rounded-2xl shadow-sm p-5 mb-5 flex flex-wrap gap-3 items-center border border-gray-100",
            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:73:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("select", {
                value: k,
                onChange: Q => w(Q.target.value),
                className: "px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:74:8",
                "data-visual-edit-component": "select",
                "data-visual-edit-editable": "false",
                children: [d.jsx("option", {
                    value: "",
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:75:10",
                    "data-visual-edit-component": "option",
                    "data-visual-edit-editable": "true",
                    children: "Todas las terapias"
                }), Object.entries(_e).map(([Q, Nt]) => d.jsx("option", {
                    value: Q,
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:76:58",
                    "data-visual-edit-component": "option",
                    "data-visual-edit-editable": "false",
                    children: Nt
                }, Q))]
            }), d.jsxs("select", {
                value: K,
                onChange: Q => Z(Q.target.value),
                className: "px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:78:8",
                "data-visual-edit-component": "select",
                "data-visual-edit-editable": "false",
                children: [d.jsx("option", {
                    value: "",
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:79:10",
                    "data-visual-edit-component": "option",
                    "data-visual-edit-editable": "true",
                    children: "Todos los estados"
                }), Object.entries(Yi).map(([Q, Nt]) => d.jsx("option", {
                    value: Q,
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:80:57",
                    "data-visual-edit-component": "option",
                    "data-visual-edit-editable": "false",
                    children: Nt
                }, Q))]
            }), (k || K) && d.jsx("button", {
                onClick: () => {
                    w(""), Z("")
                },
                className: "text-sm text-primary-600 hover:text-primary-800 font-bold px-3 py-2 hover:bg-primary-50 rounded-xl transition-all",
                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:83:10",
                "data-visual-edit-component": "button",
                "data-visual-edit-editable": "true",
                children: "✕ Limpiar"
            }), d.jsxs("span", {
                className: "ml-auto text-sm text-gray-400 font-medium",
                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:85:8",
                "data-visual-edit-component": "span",
                "data-visual-edit-editable": "false",
                children: [zt.length, " resultado(s)"]
            })]
        }), d.jsx("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden border border-gray-100",
            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:88:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: zt.length === 0 ? d.jsxs("div", {
                className: "p-20 text-center",
                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:90:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4",
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:91:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(Ge, {
                        size: 40,
                        className: "text-gray-300",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:92:14",
                        "data-visual-edit-component": "Calendar",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("p", {
                    className: "text-gray-400 font-semibold text-lg",
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:94:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "No se encontraron citas"
                })]
            }) : d.jsx("div", {
                className: "overflow-x-auto",
                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:97:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsxs("table", {
                    className: "w-full",
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:98:12",
                    "data-visual-edit-component": "table",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("thead", {
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:99:14",
                        "data-visual-edit-component": "thead",
                        "data-visual-edit-editable": "false",
                        children: d.jsxs("tr", {
                            className: "bg-gradient-to-r from-primary-700 to-primary-800 text-white",
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:100:16",
                            "data-visual-edit-component": "tr",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:101:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Paciente"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:102:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Área Terapéutica"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:103:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Terapeuta"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:104:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Fecha"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:105:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Resumen"
                            }), d.jsx("th", {
                                className: "text-right px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:106:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Acciones"
                            })]
                        })
                    }), d.jsx("tbody", {
                        className: "divide-y divide-gray-50",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:109:14",
                        "data-visual-edit-component": "tbody",
                        "data-visual-edit-editable": "false",
                        children: zt.map((Q, Nt) => {
                            var le, Zt, J, st;
                            return d.jsxs("tr", {
                                className: `${Nt%2===0?"bg-white":"bg-primary-50/30"} hover:bg-primary-50 transition-colors`,
                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:111:18",
                                "data-visual-edit-component": "tr",
                                "data-visual-edit-editable": "false",
                                children: [d.jsx("td", {
                                    className: "px-5 py-4 text-sm font-semibold text-gray-900",
                                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:112:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: ((Zt = (le = Q.expand) == null ? void 0 : le.patient) == null ? void 0 : Zt.name) || "—"
                                }), d.jsx("td", {
                                    className: "px-5 py-4",
                                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:113:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: d.jsx("span", {
                                        className: "inline-block px-3 py-1.5 text-xs font-bold rounded-full bg-primary-100 text-primary-700",
                                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:114:22",
                                        "data-visual-edit-component": "span",
                                        "data-visual-edit-editable": "false",
                                        children: _e[Q.therapy_type] || Q.therapy_type
                                    })
                                }), d.jsx("td", {
                                    className: "px-5 py-4 text-sm text-gray-700 font-medium",
                                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:118:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: ((st = (J = Q.expand) == null ? void 0 : J.therapist) == null ? void 0 : st.name) || "—"
                                }), d.jsxs("td", {
                                    className: "px-5 py-4 text-sm font-bold text-primary-800",
                                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:119:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: [mu(Q.date), " · ", Q.time_slot]
                                }), d.jsx("td", {
                                    className: "px-5 py-4",
                                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:120:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: d.jsx("span", {
                                        className: `inline-block px-3 py-1.5 text-xs font-bold rounded-full ${fu[Q.status]}`,
                                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:121:22",
                                        "data-visual-edit-component": "span",
                                        "data-visual-edit-editable": "false",
                                        children: Yi[Q.status]
                                    })
                                }), d.jsx("td", {
                                    className: "px-5 py-4 text-right",
                                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:125:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: d.jsxs("div", {
                                        className: "flex items-center justify-end gap-2",
                                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:126:22",
                                        "data-visual-edit-component": "div",
                                        "data-visual-edit-editable": "false",
                                        children: [d.jsx("button", {
                                            onClick: () => I(Q),
                                            className: "w-8 h-8 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 flex items-center justify-center transition-all",
                                            title: "Editar",
                                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:127:24",
                                            "data-visual-edit-component": "button",
                                            "data-visual-edit-editable": "false",
                                            children: d.jsx($p, {
                                                size: 15,
                                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:127:206",
                                                "data-visual-edit-component": "Edit",
                                                "data-visual-edit-editable": "false"
                                            })
                                        }), d.jsx("button", {
                                            onClick: () => tt(Q.id),
                                            className: "w-8 h-8 rounded-lg bg-danger-50 text-danger-500 hover:bg-danger-100 flex items-center justify-center transition-all",
                                            title: "Eliminar",
                                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:128:24",
                                            "data-visual-edit-component": "button",
                                            "data-visual-edit-editable": "false",
                                            children: d.jsx(cu, {
                                                size: 15,
                                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:128:212",
                                                "data-visual-edit-component": "Trash2",
                                                "data-visual-edit-editable": "false"
                                            })
                                        })]
                                    })
                                })]
                            }, Q.id)
                        })
                    })]
                })
            })
        }), d.jsx(Ji, {
            isOpen: v,
            onClose: () => h(!1),
            title: "Editar Cita",
            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:139:6",
            "data-visual-edit-component": "Modal",
            "data-visual-edit-editable": "false",
            children: d.jsxs("form", {
                onSubmit: V,
                className: "space-y-5",
                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:140:8",
                "data-visual-edit-component": "form",
                "data-visual-edit-editable": "false",
                children: [d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:141:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:142:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "PACIENTE *"
                    }), d.jsxs("select", {
                        required: !0,
                        value: R.patient,
                        onChange: Q => z({ ...R,
                            patient: Q.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:143:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("option", {
                            value: "",
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:144:14",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "true",
                            children: "Seleccionar"
                        }), o.map(Q => d.jsx("option", {
                            value: Q.id,
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:145:35",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: Q.name
                        }, Q.id))]
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:148:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:149:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "ÁREA TERAPÉUTICA *"
                    }), d.jsx("select", {
                        required: !0,
                        value: R.therapy_type,
                        onChange: Q => z({ ...R,
                            therapy_type: Q.target.value,
                            therapist: ""
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:150:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: Object.entries(_e).map(([Q, Nt]) => d.jsx("option", {
                            value: Q,
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:151:62",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: Nt
                        }, Q))
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:154:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:155:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "TERAPEUTA *"
                    }), d.jsxs("select", {
                        required: !0,
                        value: R.therapist,
                        onChange: Q => z({ ...R,
                            therapist: Q.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:156:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("option", {
                            value: "",
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:157:14",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "true",
                            children: "Seleccionar"
                        }), B.map(Q => d.jsxs("option", {
                            value: Q.id,
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:158:45",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: [Q.name, " — ", Qi[Q.specialty]]
                        }, Q.id))]
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:161:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:162:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:163:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "FECHA *"
                        }), d.jsx("input", {
                            type: "date",
                            required: !0,
                            value: R.date,
                            onChange: Q => z({ ...R,
                                date: Q.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:164:14",
                            "data-visual-edit-component": "input",
                            "data-visual-edit-editable": "false"
                        })]
                    }), d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:166:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:167:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "HORA *"
                        }), d.jsx("select", {
                            required: !0,
                            value: R.time_slot,
                            onChange: Q => z({ ...R,
                                time_slot: Q.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:168:14",
                            "data-visual-edit-component": "select",
                            "data-visual-edit-editable": "false",
                            children: pu.map(Q => d.jsx("option", {
                                value: Q,
                                "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:169:39",
                                "data-visual-edit-component": "option",
                                "data-visual-edit-editable": "false",
                                children: Q
                            }, Q))
                        })]
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:173:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:174:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "ESTADO"
                    }), d.jsx("select", {
                        value: R.status,
                        onChange: Q => z({ ...R,
                            status: Q.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:175:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: Object.entries(Yi).map(([Q, Nt]) => d.jsx("option", {
                            value: Q,
                            "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:176:61",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: Nt
                        }, Q))
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:179:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:180:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "NOTAS"
                    }), d.jsx("textarea", {
                        value: R.notes,
                        onChange: Q => z({ ...R,
                            notes: Q.target.value
                        }),
                        rows: 2,
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium resize-none transition-all",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:181:12",
                        "data-visual-edit-component": "textarea",
                        "data-visual-edit-editable": "false"
                    })]
                }), G && d.jsx("div", {
                    className: "bg-danger-50 border-2 border-danger-200 text-danger-700 text-sm rounded-xl p-4 font-medium",
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:183:20",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: G
                }), d.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:184:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("button", {
                        type: "button",
                        onClick: () => h(!1),
                        className: "flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:185:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "true",
                        children: "Cancelar"
                    }), d.jsx("button", {
                        type: "submit",
                        disabled: D,
                        className: "flex-1 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl text-sm font-bold hover:shadow-lg disabled:opacity-50 transition-all",
                        "data-visual-edit-loc": "src/pages/admin/ManageAppointments.tsx:186:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "false",
                        children: D ? "Guardando..." : "Guardar Cambios"
                    })]
                })]
            })
        })]
    })
}
const jp = {
    name: "",
    date_of_birth: "",
    diagnosis: "",
    gender: "",
    guardian_name: "",
    guardian_phone: "",
    guardian_email: "",
    notes: ""
};

function Eb() {
    const [c, n] = y.useState([]), [o, u] = y.useState(""), [r, p] = y.useState(!0), [g, b] = y.useState(!1), [v, h] = y.useState(null), [N, T] = y.useState(jp), [R, z] = y.useState(!1), [D, H] = y.useState(""), G = async () => {
        try {
            const _ = await nt.collection("patients").getFullList({
                sort: "name",
                requestKey: null
            });
            n(_)
        } catch (_) {
            console.error(_)
        }
        p(!1)
    };
    y.useEffect(() => {
        G()
    }, []);
    const U = () => {
            h(null), T(jp), H(""), b(!0)
        },
        k = _ => {
            h(_), T({
                name: _.name,
                date_of_birth: _.date_of_birth ? _.date_of_birth.split("T")[0].split(" ")[0] : "",
                diagnosis: _.diagnosis || "",
                gender: _.gender || "",
                guardian_name: _.guardian_name,
                guardian_phone: _.guardian_phone || "",
                guardian_email: _.guardian_email || "",
                notes: _.notes || ""
            }), H(""), b(!0)
        },
        w = async _ => {
            _.preventDefault(), z(!0), H("");
            try {
                v ? await nt.collection("patients").update(v.id, N) : await nt.collection("patients").create(N), b(!1), G()
            } catch (B) {
                console.error(B), H("Error al guardar.")
            }
            z(!1)
        },
        K = async _ => {
            if (confirm("¿Eliminar este paciente?")) try {
                await nt.collection("patients").delete(_), G()
            } catch (B) {
                console.error(B)
            }
        },
        Z = c.filter(_ => _.name.toLowerCase().includes(o.toLowerCase()) || _.guardian_name.toLowerCase().includes(o.toLowerCase()));
    return r ? d.jsx("div", {
        className: "flex justify-center py-20",
        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:58:11",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: d.jsx("div", {
            className: "w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:58:54",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false"
        })
    }) : d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:62:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:63:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:64:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h1", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:65:10",
                    "data-visual-edit-component": "h1",
                    "data-visual-edit-editable": "true",
                    children: "Pacientes"
                }), d.jsxs("p", {
                    className: "text-gray-500 text-sm font-medium mt-1",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:66:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: [c.length, " paciente(s) registrado(s)"]
                })]
            }), d.jsxs("button", {
                onClick: U,
                className: "flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105",
                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:68:8",
                "data-visual-edit-component": "button",
                "data-visual-edit-editable": "true",
                children: [d.jsx(Il, {
                    size: 20,
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:69:10",
                    "data-visual-edit-component": "Plus",
                    "data-visual-edit-editable": "false"
                }), " Nuevo Paciente"]
            })]
        }), d.jsxs("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100",
            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:73:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("div", {
                className: "p-5 border-b border-gray-100",
                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:74:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsxs("div", {
                    className: "relative",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:75:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx(uu, {
                        size: 18,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:76:12",
                        "data-visual-edit-component": "Search",
                        "data-visual-edit-editable": "false"
                    }), d.jsx("input", {
                        type: "text",
                        placeholder: "Buscar por nombre o tutor...",
                        value: o,
                        onChange: _ => u(_.target.value),
                        className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:77:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                })
            }), Z.length === 0 ? d.jsxs("div", {
                className: "p-20 text-center",
                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:82:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:83:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(ts, {
                        size: 40,
                        className: "text-gray-300",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:84:14",
                        "data-visual-edit-component": "Users",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("p", {
                    className: "text-gray-400 font-semibold text-lg",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:86:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "No se encontraron pacientes"
                })]
            }) : d.jsx("div", {
                className: "overflow-x-auto",
                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:89:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsxs("table", {
                    className: "w-full",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:90:12",
                    "data-visual-edit-component": "table",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("thead", {
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:91:14",
                        "data-visual-edit-component": "thead",
                        "data-visual-edit-editable": "false",
                        children: d.jsxs("tr", {
                            className: "bg-gradient-to-r from-primary-700 to-primary-800 text-white",
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:92:16",
                            "data-visual-edit-component": "tr",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:93:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Nombre"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:94:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Diagnóstico"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:95:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Género"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:96:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Tutor"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:97:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Teléfono"
                            }), d.jsx("th", {
                                className: "text-right px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:98:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Acciones"
                            })]
                        })
                    }), d.jsx("tbody", {
                        className: "divide-y divide-gray-50",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:101:14",
                        "data-visual-edit-component": "tbody",
                        "data-visual-edit-editable": "false",
                        children: Z.map((_, B) => d.jsxs("tr", {
                            className: `${B%2===0?"bg-white":"bg-primary-50/30"} hover:bg-primary-50 transition-colors`,
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:103:18",
                            "data-visual-edit-component": "tr",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("td", {
                                className: "px-5 py-4 text-sm font-semibold text-gray-900",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:104:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: _.name
                            }), d.jsx("td", {
                                className: "px-5 py-4 text-sm text-gray-600",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:105:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: _.diagnosis || "—"
                            }), d.jsx("td", {
                                className: "px-5 py-4 text-sm text-gray-600",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:106:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: Sn[_.gender] || "—"
                            }), d.jsx("td", {
                                className: "px-5 py-4 text-sm text-gray-600 font-medium",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:107:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: _.guardian_name
                            }), d.jsx("td", {
                                className: "px-5 py-4 text-sm text-gray-600",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:108:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: _.guardian_phone || "—"
                            }), d.jsx("td", {
                                className: "px-5 py-4 text-right",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:109:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: d.jsxs("div", {
                                    className: "flex items-center justify-end gap-2",
                                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:110:22",
                                    "data-visual-edit-component": "div",
                                    "data-visual-edit-editable": "false",
                                    children: [d.jsx("button", {
                                        onClick: () => k(_),
                                        className: "w-8 h-8 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 flex items-center justify-center transition-all",
                                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:111:24",
                                        "data-visual-edit-component": "button",
                                        "data-visual-edit-editable": "false",
                                        children: d.jsx($p, {
                                            size: 15,
                                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:111:191",
                                            "data-visual-edit-component": "Edit",
                                            "data-visual-edit-editable": "false"
                                        })
                                    }), d.jsx("button", {
                                        onClick: () => K(_.id),
                                        className: "w-8 h-8 rounded-lg bg-danger-50 text-danger-500 hover:bg-danger-100 flex items-center justify-center transition-all",
                                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:112:24",
                                        "data-visual-edit-component": "button",
                                        "data-visual-edit-editable": "false",
                                        children: d.jsx(cu, {
                                            size: 15,
                                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:112:195",
                                            "data-visual-edit-component": "Trash2",
                                            "data-visual-edit-editable": "false"
                                        })
                                    })]
                                })
                            })]
                        }, _.id))
                    })]
                })
            })]
        }), d.jsx(Ji, {
            isOpen: g,
            onClose: () => b(!1),
            title: v ? "Editar Paciente" : "Nuevo Paciente",
            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:123:6",
            "data-visual-edit-component": "Modal",
            "data-visual-edit-editable": "false",
            children: d.jsxs("form", {
                onSubmit: w,
                className: "space-y-5",
                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:124:8",
                "data-visual-edit-component": "form",
                "data-visual-edit-editable": "false",
                children: [d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:125:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:126:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "NOMBRE COMPLETO *"
                    }), d.jsx("input", {
                        type: "text",
                        required: !0,
                        value: N.name,
                        onChange: _ => T({ ...N,
                            name: _.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:127:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:129:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:130:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:131:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "FECHA DE NACIMIENTO"
                        }), d.jsx("input", {
                            type: "date",
                            value: N.date_of_birth,
                            onChange: _ => T({ ...N,
                                date_of_birth: _.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:132:14",
                            "data-visual-edit-component": "input",
                            "data-visual-edit-editable": "false"
                        })]
                    }), d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:134:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:135:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "GÉNERO"
                        }), d.jsxs("select", {
                            value: N.gender,
                            onChange: _ => T({ ...N,
                                gender: _.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:136:14",
                            "data-visual-edit-component": "select",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("option", {
                                value: "",
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:137:16",
                                "data-visual-edit-component": "option",
                                "data-visual-edit-editable": "true",
                                children: "Seleccionar"
                            }), Object.entries(Sn).map(([_, B]) => d.jsx("option", {
                                value: _,
                                "data-visual-edit-loc": "src/pages/admin/Patients.tsx:138:63",
                                "data-visual-edit-component": "option",
                                "data-visual-edit-editable": "false",
                                children: B
                            }, _))]
                        })]
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:142:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:143:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "DIAGNÓSTICO"
                    }), d.jsx("input", {
                        type: "text",
                        value: N.diagnosis,
                        onChange: _ => T({ ...N,
                            diagnosis: _.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:144:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:146:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:147:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "NOMBRE DEL TUTOR *"
                    }), d.jsx("input", {
                        type: "text",
                        required: !0,
                        value: N.guardian_name,
                        onChange: _ => T({ ...N,
                            guardian_name: _.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:148:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:150:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:151:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:152:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "TELÉFONO"
                        }), d.jsx("input", {
                            type: "tel",
                            value: N.guardian_phone,
                            onChange: _ => T({ ...N,
                                guardian_phone: _.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:153:14",
                            "data-visual-edit-component": "input",
                            "data-visual-edit-editable": "false"
                        })]
                    }), d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:155:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:156:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "EMAIL"
                        }), d.jsx("input", {
                            type: "email",
                            value: N.guardian_email,
                            onChange: _ => T({ ...N,
                                guardian_email: _.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                            "data-visual-edit-loc": "src/pages/admin/Patients.tsx:157:14",
                            "data-visual-edit-component": "input",
                            "data-visual-edit-editable": "false"
                        })]
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:160:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:161:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "NOTAS"
                    }), d.jsx("textarea", {
                        value: N.notes,
                        onChange: _ => T({ ...N,
                            notes: _.target.value
                        }),
                        rows: 2,
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium resize-none transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:162:12",
                        "data-visual-edit-component": "textarea",
                        "data-visual-edit-editable": "false"
                    })]
                }), D && d.jsx("div", {
                    className: "bg-danger-50 border-2 border-danger-200 text-danger-700 text-sm rounded-xl p-4 font-medium",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:164:20",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: D
                }), d.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    "data-visual-edit-loc": "src/pages/admin/Patients.tsx:165:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("button", {
                        type: "button",
                        onClick: () => b(!1),
                        className: "flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:166:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "true",
                        children: "Cancelar"
                    }), d.jsx("button", {
                        type: "submit",
                        disabled: R,
                        className: "flex-1 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl text-sm font-bold hover:shadow-lg disabled:opacity-50 transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Patients.tsx:167:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "false",
                        children: R ? "Guardando..." : "Guardar"
                    })]
                })]
            })
        })]
    })
}
const Tb = {
    psicologia: "bg-blue-100 text-blue-700",
    fisioterapia: "bg-green-100 text-green-700",
    lenguaje: "bg-purple-100 text-purple-700",
    lecto_escritura: "bg-orange-100 text-orange-700"
};

function Rb() {
    const [c, n] = y.useState([]), [o, u] = y.useState(!0), [r, p] = y.useState(!1), [g, b] = y.useState({
        name: "",
        email: "",
        password: "",
        specialty: "psicologia"
    }), [v, h] = y.useState(!1), [N, T] = y.useState(""), [R, z] = y.useState(""), D = async () => {
        try {
            const k = await nt.collection("users").getFullList({
                filter: "role = 'therapist'",
                sort: "name",
                requestKey: null
            });
            n(k)
        } catch (k) {
            console.error(k)
        }
        u(!1)
    };
    y.useEffect(() => {
        D()
    }, []);
    const H = async k => {
            k.preventDefault(), h(!0), T("");
            try {
                await nt.collection("users").create({
                    email: g.email,
                    password: g.password,
                    passwordConfirm: g.password,
                    name: g.name,
                    role: "therapist",
                    specialty: g.specialty
                }), p(!1), b({
                    name: "",
                    email: "",
                    password: "",
                    specialty: "psicologia"
                }), D()
            } catch (w) {
                console.error(w), T("Error al crear terapeuta. Verifica que el email no esté en uso y la contraseña tenga mínimo 8 caracteres.")
            }
            h(!1)
        },
        G = async k => {
            if (confirm("¿Eliminar este terapeuta?")) try {
                await nt.collection("users").delete(k), D()
            } catch (w) {
                console.error(w)
            }
        },
        U = c.filter(k => (k.name || "").toLowerCase().includes(R.toLowerCase()) || (k.email || "").toLowerCase().includes(R.toLowerCase()));
    return o ? d.jsx("div", {
        className: "flex justify-center py-20",
        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:56:11",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: d.jsx("div", {
            className: "w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
            "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:56:54",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false"
        })
    }) : d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:60:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
            "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:61:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:62:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h1", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:63:10",
                    "data-visual-edit-component": "h1",
                    "data-visual-edit-editable": "true",
                    children: "Terapeutas"
                }), d.jsxs("p", {
                    className: "text-gray-500 text-sm font-medium mt-1",
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:64:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: [c.length, " terapeuta(s) registrado(s)"]
                })]
            }), d.jsxs("button", {
                onClick: () => {
                    p(!0), T("")
                },
                className: "flex items-center gap-2.5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105",
                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:66:8",
                "data-visual-edit-component": "button",
                "data-visual-edit-editable": "true",
                children: [d.jsx(Il, {
                    size: 20,
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:67:10",
                    "data-visual-edit-component": "Plus",
                    "data-visual-edit-editable": "false"
                }), " Nuevo Terapeuta"]
            })]
        }), d.jsxs("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100",
            "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:71:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("div", {
                className: "p-5 border-b border-gray-100",
                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:72:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsxs("div", {
                    className: "relative",
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:73:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx(uu, {
                        size: 18,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:74:12",
                        "data-visual-edit-component": "Search",
                        "data-visual-edit-editable": "false"
                    }), d.jsx("input", {
                        type: "text",
                        placeholder: "Buscar terapeutas...",
                        value: R,
                        onChange: k => z(k.target.value),
                        className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:75:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                })
            }), U.length === 0 ? d.jsxs("div", {
                className: "p-20 text-center",
                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:80:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4",
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:81:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(ru, {
                        size: 40,
                        className: "text-gray-300",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:82:14",
                        "data-visual-edit-component": "UserPlus",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("p", {
                    className: "text-gray-400 font-semibold text-lg",
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:84:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "No se encontraron terapeutas"
                })]
            }) : d.jsx("div", {
                className: "overflow-x-auto",
                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:87:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsxs("table", {
                    className: "w-full",
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:88:12",
                    "data-visual-edit-component": "table",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("thead", {
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:89:14",
                        "data-visual-edit-component": "thead",
                        "data-visual-edit-editable": "false",
                        children: d.jsxs("tr", {
                            className: "bg-gradient-to-r from-primary-700 to-primary-800 text-white",
                            "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:90:16",
                            "data-visual-edit-component": "tr",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:91:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Nombre"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:92:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Email"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:93:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Especialidad"
                            }), d.jsx("th", {
                                className: "text-right px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:94:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Acciones"
                            })]
                        })
                    }), d.jsx("tbody", {
                        className: "divide-y divide-gray-50",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:97:14",
                        "data-visual-edit-component": "tbody",
                        "data-visual-edit-editable": "false",
                        children: U.map((k, w) => d.jsxs("tr", {
                            className: `${w%2===0?"bg-white":"bg-primary-50/30"} hover:bg-primary-50 transition-colors`,
                            "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:99:18",
                            "data-visual-edit-component": "tr",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("td", {
                                className: "px-5 py-4 text-sm font-semibold text-gray-900",
                                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:100:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: k.name || "—"
                            }), d.jsx("td", {
                                className: "px-5 py-4 text-sm text-gray-600",
                                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:101:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: k.email
                            }), d.jsx("td", {
                                className: "px-5 py-4",
                                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:102:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: d.jsx("span", {
                                    className: `inline-block px-3.5 py-1.5 text-xs font-bold rounded-full ${Tb[k.specialty]||"bg-gray-100 text-gray-600"}`,
                                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:103:22",
                                    "data-visual-edit-component": "span",
                                    "data-visual-edit-editable": "false",
                                    children: Qi[k.specialty] || "—"
                                })
                            }), d.jsx("td", {
                                className: "px-5 py-4 text-right",
                                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:107:20",
                                "data-visual-edit-component": "td",
                                "data-visual-edit-editable": "false",
                                children: d.jsx("button", {
                                    onClick: () => G(k.id),
                                    className: "w-8 h-8 rounded-lg bg-danger-50 text-danger-500 hover:bg-danger-100 flex items-center justify-center transition-all ml-auto",
                                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:108:22",
                                    "data-visual-edit-component": "button",
                                    "data-visual-edit-editable": "false",
                                    children: d.jsx(cu, {
                                        size: 15,
                                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:108:201",
                                        "data-visual-edit-component": "Trash2",
                                        "data-visual-edit-editable": "false"
                                    })
                                })
                            })]
                        }, k.id))
                    })]
                })
            })]
        }), d.jsx(Ji, {
            isOpen: r,
            onClose: () => p(!1),
            title: "Nuevo Terapeuta",
            "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:118:6",
            "data-visual-edit-component": "Modal",
            "data-visual-edit-editable": "false",
            children: d.jsxs("form", {
                onSubmit: H,
                className: "space-y-5",
                "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:119:8",
                "data-visual-edit-component": "form",
                "data-visual-edit-editable": "false",
                children: [d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:120:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:121:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "NOMBRE COMPLETO *"
                    }), d.jsx("input", {
                        type: "text",
                        required: !0,
                        value: g.name,
                        onChange: k => b({ ...g,
                            name: k.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:122:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:124:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:125:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "CORREO ELECTRÓNICO *"
                    }), d.jsx("input", {
                        type: "email",
                        required: !0,
                        value: g.email,
                        onChange: k => b({ ...g,
                            email: k.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:126:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:128:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:129:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "CONTRASEÑA *"
                    }), d.jsx("input", {
                        type: "password",
                        required: !0,
                        minLength: 8,
                        value: g.password,
                        onChange: k => b({ ...g,
                            password: k.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        placeholder: "Mínimo 8 caracteres",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:130:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:132:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:133:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "ESPECIALIDAD *"
                    }), d.jsx("select", {
                        required: !0,
                        value: g.specialty,
                        onChange: k => b({ ...g,
                            specialty: k.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:134:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: Object.entries(Qi).map(([k, w]) => d.jsx("option", {
                            value: k,
                            "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:135:64",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: w
                        }, k))
                    })]
                }), N && d.jsx("div", {
                    className: "bg-danger-50 border-2 border-danger-200 text-danger-700 text-sm rounded-xl p-4 font-medium",
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:138:20",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: N
                }), d.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:139:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("button", {
                        type: "button",
                        onClick: () => p(!1),
                        className: "flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:140:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "true",
                        children: "Cancelar"
                    }), d.jsx("button", {
                        type: "submit",
                        disabled: v,
                        className: "flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl text-sm font-bold hover:shadow-lg disabled:opacity-50 transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Therapists.tsx:141:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "false",
                        children: v ? "Creando..." : "Crear Terapeuta"
                    })]
                })]
            })
        })]
    })
}

function Cb() {
    const [c, n] = y.useState([]), [o, u] = y.useState([]), [r, p] = y.useState(0), [g, b] = y.useState(!0), [v, h] = y.useState(""), [N, T] = y.useState(""), [R, z] = y.useState("");
    if (y.useEffect(() => {
            (async () => {
                try {
                    const [B, I, V] = await Promise.all([nt.collection("appointments").getFullList({
                        expand: "patient",
                        requestKey: null
                    }), nt.collection("patients").getFullList({
                        requestKey: null
                    }), nt.collection("users").getList(1, 1, {
                        filter: "role = 'therapist'",
                        requestKey: null
                    })]);
                    n(B), u(I), p(V.totalItems)
                } catch (B) {
                    console.error(B)
                }
                b(!1)
            })()
        }, []), g) return d.jsx("div", {
        className: "flex justify-center py-20",
        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:34:11",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: d.jsx("div", {
            className: "w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:34:54",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false"
        })
    });
    const D = c.filter(_ => {
            var B;
            return !(v && _.date < v || N && _.date > N + " 23:59:59" || R && ((B = _.expand) != null && B.patient) && _.expand.patient.gender !== R)
        }),
        H = {},
        G = {};
    for (const _ of D) H[_.therapy_type] = (H[_.therapy_type] || 0) + 1, G[_.status] = (G[_.status] || 0) + 1;
    const U = {};
    for (const _ of o) {
        const B = _.gender || "sin_especificar";
        U[B] = (U[B] || 0) + 1
    }
    const k = Math.max(...Object.values(H), 1),
        w = D.length > 0 ? Math.round((G.completada || 0) / D.length * 100) : 0,
        K = ["#3b82f6", "#22c55e", "#ef4444", "#f59e0b"],
        Z = {
            masculino: "bg-blue-500",
            femenino: "bg-pink-500",
            otro: "bg-purple-500",
            sin_especificar: "bg-gray-400"
        };
    return d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:66:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "mb-6",
            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:67:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("h1", {
                className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:68:8",
                "data-visual-edit-component": "h1",
                "data-visual-edit-editable": "true",
                children: "Estadísticas"
            }), d.jsx("p", {
                className: "text-gray-500 text-sm font-medium mt-1",
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:69:8",
                "data-visual-edit-component": "p",
                "data-visual-edit-editable": "true",
                children: "Análisis y reportes del sistema"
            })]
        }), d.jsxs("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-6 mb-6 border border-gray-100",
            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:72:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                className: "flex items-center gap-3 mb-5",
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:73:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:74:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(Qg, {
                        size: 20,
                        className: "text-primary-600",
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:75:12",
                        "data-visual-edit-component": "Filter",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("span", {
                    className: "font-bold text-gray-800 text-lg",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:77:10",
                    "data-visual-edit-component": "span",
                    "data-visual-edit-editable": "true",
                    children: "Filtrar Datos"
                })]
            }), d.jsxs("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:79:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:80:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:81:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "DE"
                    }), d.jsx("input", {
                        type: "date",
                        value: v,
                        onChange: _ => h(_.target.value),
                        className: "w-full px-4 py-3 border-2 border-success-400 rounded-xl text-sm outline-none focus:ring-4 focus:ring-success-100 focus:border-success-500 font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:82:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:84:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:85:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "A"
                    }), d.jsx("input", {
                        type: "date",
                        value: N,
                        onChange: _ => T(_.target.value),
                        className: "w-full px-4 py-3 border-2 border-success-400 rounded-xl text-sm outline-none focus:ring-4 focus:ring-success-100 focus:border-success-500 font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:86:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:88:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:89:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "GÉNERO"
                    }), d.jsxs("select", {
                        value: R,
                        onChange: _ => z(_.target.value),
                        className: "w-full px-4 py-3 border-2 border-success-400 rounded-xl text-sm outline-none focus:ring-4 focus:ring-success-100 focus:border-success-500 font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:90:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("option", {
                            value: "",
                            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:91:14",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "true",
                            children: "Todos"
                        }), Object.entries(Sn).map(([_, B]) => d.jsx("option", {
                            value: _,
                            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:92:61",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: B
                        }, _))]
                    })]
                }), d.jsx("div", {
                    className: "flex items-end",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:95:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx("button", {
                        onClick: () => {
                            h(""), T(""), z("")
                        },
                        className: "w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold text-gray-600 transition-all",
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:96:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "true",
                        children: "Limpiar Filtros"
                    })
                })]
            })]
        }), d.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",
            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:101:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [{
                label: "Pacientes",
                value: o.length,
                icon: ts,
                color: "text-blue-600",
                bg: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
            }, {
                label: "Terapeutas",
                value: r,
                icon: Eg,
                color: "text-purple-600",
                bg: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
            }, {
                label: "% Asistencia",
                value: `${w}%`,
                icon: sb,
                color: "text-emerald-600",
                bg: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200"
            }, {
                label: "Total Citas",
                value: D.length,
                icon: Ge,
                color: "text-orange-600",
                bg: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
            }].map(_ => d.jsxs("div", {
                className: `${_.bg} border-2 rounded-3xl p-6 text-center transition-all hover:scale-105 duration-300 hover:shadow-lg`,
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:108:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx(_.icon, {
                    size: 24,
                    className: `${_.color} mx-auto mb-2 opacity-60`,
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:109:12",
                    "data-visual-edit-editable": "false"
                }), d.jsx("p", {
                    className: `text-3xl font-black ${_.color}`,
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:110:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: _.value
                }), d.jsx("p", {
                    className: "text-xs font-bold text-gray-500 mt-1 tracking-wider",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:111:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: _.label
                })]
            }, _.label))
        }), D.length === 0 ? d.jsxs("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-20 text-center border border-gray-100",
            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:117:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("div", {
                className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4",
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:118:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsx(du, {
                    size: 40,
                    className: "text-gray-300",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:119:12",
                    "data-visual-edit-component": "BarChart3",
                    "data-visual-edit-editable": "false"
                })
            }), d.jsx("p", {
                className: "text-gray-400 font-semibold text-lg",
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:121:10",
                "data-visual-edit-component": "p",
                "data-visual-edit-editable": "true",
                children: "No hay datos para los filtros seleccionados"
            })]
        }) : d.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:124:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-7 border border-gray-100",
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:125:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h2", {
                    className: "text-lg font-extrabold text-gray-900 mb-6",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:126:12",
                    "data-visual-edit-component": "h2",
                    "data-visual-edit-editable": "true",
                    children: "Citas por Terapia"
                }), d.jsx("div", {
                    className: "flex items-end gap-4 h-52",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:127:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: Object.entries(_e).map(([_, B]) => {
                        const I = H[_] || 0,
                            V = k > 0 ? I / k * 100 : 0;
                        return d.jsxs("div", {
                            className: "flex-1 flex flex-col items-center group",
                            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:132:18",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("span", {
                                className: "text-sm font-black text-gray-700 mb-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:133:20",
                                "data-visual-edit-component": "span",
                                "data-visual-edit-editable": "false",
                                children: I
                            }), d.jsx("div", {
                                className: "w-full rounded-2xl overflow-hidden bg-gray-100 flex flex-col justify-end",
                                style: {
                                    height: "100%"
                                },
                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:134:20",
                                "data-visual-edit-component": "div",
                                "data-visual-edit-editable": "false",
                                children: d.jsx("div", {
                                    className: `${fb[_]} rounded-2xl transition-all duration-700 ease-out group-hover:opacity-90`,
                                    style: {
                                        height: `${Math.max(V,8)}%`
                                    },
                                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:135:22",
                                    "data-visual-edit-component": "div",
                                    "data-visual-edit-editable": "false",
                                    children: d.jsx("div", {
                                        className: "text-center py-2 text-white font-bold text-sm",
                                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:136:24",
                                        "data-visual-edit-component": "div",
                                        "data-visual-edit-editable": "false",
                                        children: I
                                    })
                                })
                            }), d.jsx("span", {
                                className: "text-[10px] font-bold text-gray-500 mt-3 text-center leading-tight tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:139:20",
                                "data-visual-edit-component": "span",
                                "data-visual-edit-editable": "false",
                                children: B
                            })]
                        }, _)
                    })
                })]
            }), d.jsxs("div", {
                className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-7 border border-gray-100",
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:146:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h2", {
                    className: "text-lg font-extrabold text-gray-900 mb-6",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:147:12",
                    "data-visual-edit-component": "h2",
                    "data-visual-edit-editable": "true",
                    children: "Distribución por Estado"
                }), d.jsxs("div", {
                    className: "flex items-center gap-8",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:148:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("div", {
                        className: "w-40 h-40 rounded-full relative shrink-0 shadow-inner",
                        style: {
                            background: `conic-gradient(${Object.entries(G).map(([,_],B)=>{const I=D.length,V=Object.values(G).slice(0,B).reduce((zt,Q)=>zt+Q,0)/I*100,tt=V+_/I*100;return`${K[B%K.length]} ${V}% ${tt}%`}).join(", ")})`
                        },
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:149:14",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: d.jsx("div", {
                            className: "absolute inset-5 bg-white rounded-full shadow-md flex items-center justify-center",
                            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:157:16",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: d.jsx("span", {
                                className: "text-xl font-black text-gray-800",
                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:158:18",
                                "data-visual-edit-component": "span",
                                "data-visual-edit-editable": "false",
                                children: D.length
                            })
                        })
                    }), d.jsx("div", {
                        className: "space-y-3 flex-1",
                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:161:14",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: Object.entries(Yi).map(([_, B], I) => {
                            const V = G[_] || 0,
                                tt = D.length > 0 ? Math.round(V / D.length * 100) : 0;
                            return d.jsxs("div", {
                                className: "flex items-center gap-3",
                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:166:20",
                                "data-visual-edit-component": "div",
                                "data-visual-edit-editable": "false",
                                children: [d.jsx("div", {
                                    className: "w-4 h-4 rounded-full shadow-sm",
                                    style: {
                                        backgroundColor: K[I % K.length]
                                    },
                                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:167:22",
                                    "data-visual-edit-component": "div",
                                    "data-visual-edit-editable": "false"
                                }), d.jsx("div", {
                                    className: "flex-1",
                                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:168:22",
                                    "data-visual-edit-component": "div",
                                    "data-visual-edit-editable": "false",
                                    children: d.jsxs("div", {
                                        className: "flex justify-between text-sm",
                                        "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:169:24",
                                        "data-visual-edit-component": "div",
                                        "data-visual-edit-editable": "false",
                                        children: [d.jsx("span", {
                                            className: "font-semibold text-gray-700",
                                            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:170:26",
                                            "data-visual-edit-component": "span",
                                            "data-visual-edit-editable": "false",
                                            children: B
                                        }), d.jsxs("span", {
                                            className: "font-bold text-gray-900",
                                            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:171:26",
                                            "data-visual-edit-component": "span",
                                            "data-visual-edit-editable": "false",
                                            children: [V, " ", d.jsxs("span", {
                                                className: "text-gray-400 text-xs",
                                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:171:76",
                                                "data-visual-edit-component": "span",
                                                "data-visual-edit-editable": "false",
                                                children: ["(", tt, "%)"]
                                            })]
                                        })]
                                    })
                                })]
                            }, _)
                        })
                    })]
                })]
            }), d.jsxs("div", {
                className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-7 lg:col-span-2 border border-gray-100",
                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:181:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h2", {
                    className: "text-lg font-extrabold text-gray-900 mb-6",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:182:12",
                    "data-visual-edit-component": "h2",
                    "data-visual-edit-editable": "true",
                    children: "Pacientes por Género"
                }), d.jsx("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
                    "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:183:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: Object.entries({ ...Sn,
                        sin_especificar: "Sin especificar"
                    }).map(([_, B]) => {
                        const I = U[_] || 0,
                            V = o.length || 1,
                            tt = Math.round(I / V * 100);
                        return d.jsxs("div", {
                            className: "bg-gray-50 rounded-2xl p-5 text-center hover:shadow-md transition-all duration-300 border border-gray-100",
                            "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:189:18",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("div", {
                                className: `w-8 h-8 ${Z[_]||"bg-gray-400"} rounded-full mx-auto mb-3 opacity-70`,
                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:190:20",
                                "data-visual-edit-component": "div",
                                "data-visual-edit-editable": "false"
                            }), d.jsx("p", {
                                className: "text-3xl font-black text-gray-800",
                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:191:20",
                                "data-visual-edit-component": "p",
                                "data-visual-edit-editable": "false",
                                children: I
                            }), d.jsx("p", {
                                className: "text-xs font-bold text-gray-500 mt-1 tracking-wider",
                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:192:20",
                                "data-visual-edit-component": "p",
                                "data-visual-edit-editable": "false",
                                children: B
                            }), d.jsxs("p", {
                                className: "text-xs text-gray-400 font-semibold",
                                "data-visual-edit-loc": "src/pages/admin/Statistics.tsx:193:20",
                                "data-visual-edit-component": "p",
                                "data-visual-edit-editable": "false",
                                children: [tt, "%"]
                            })]
                        }, _)
                    })
                })]
            })]
        })]
    })
}
const Ob = [{
    to: "/recepcion/asistencia",
    label: "Gestionar Asistencia",
    desc: "Marcar asistencia diaria",
    icon: _g,
    gradient: "from-orange-400 to-orange-500",
    shadow: "shadow-orange-500/30"
}, {
    to: "/recepcion/adeudos",
    label: "Adeudos",
    desc: "Control de pagos",
    icon: ou,
    gradient: "from-sky-400 to-sky-500",
    shadow: "shadow-sky-500/30"
}, {
    to: "/recepcion/citas",
    label: "Registro de Citas",
    desc: "Programar citas",
    icon: Ge,
    gradient: "from-emerald-400 to-emerald-500",
    shadow: "shadow-emerald-500/30"
}];

function Db() {
    return d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:13:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "mb-8",
            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:14:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("h1", {
                className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:15:8",
                "data-visual-edit-component": "h1",
                "data-visual-edit-editable": "true",
                children: "Panel de Recepción"
            }), d.jsx("p", {
                className: "text-gray-500 mt-1 font-medium",
                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:16:8",
                "data-visual-edit-component": "p",
                "data-visual-edit-editable": "true",
                children: "Gestiona asistencia, adeudos y citas"
            })]
        }), d.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:18:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: Ob.map(c => d.jsxs(La, {
                to: c.to,
                className: `group bg-gradient-to-br ${c.gradient} rounded-3xl p-10 text-white hover:scale-105 transition-all duration-300 shadow-xl ${c.shadow} flex flex-col items-center justify-center gap-4 min-h-[200px] hover:shadow-2xl`,
                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:20:10",
                "data-visual-edit-component": "Link",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-18 h-18 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-4",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:25:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(c.icon, {
                        size: 40,
                        strokeWidth: 1.5,
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:26:14",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("span", {
                    className: "font-extrabold text-xl tracking-wider text-center",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:28:12",
                    "data-visual-edit-component": "span",
                    "data-visual-edit-editable": "false",
                    children: c.label
                }), d.jsx("span", {
                    className: "text-xs opacity-80 font-medium",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistDashboard.tsx:29:12",
                    "data-visual-edit-component": "span",
                    "data-visual-edit-editable": "false",
                    children: c.desc
                })]
            }, c.to))
        })]
    })
}

function _b() {
    const [c, n] = y.useState([]), [o, u] = y.useState(!0), [r, p] = y.useState(Pp()), g = async () => {
        u(!0);
        try {
            const v = r ? nt.filter("date >= {:start} && date <= {:end}", {
                    start: r + " 00:00:00",
                    end: r + " 23:59:59"
                }) : "",
                h = await nt.collection("appointments").getFullList({
                    filter: v,
                    expand: "patient,therapist",
                    sort: "time_slot",
                    requestKey: null
                });
            n(h)
        } catch (v) {
            console.error(v)
        }
        u(!1)
    };
    y.useEffect(() => {
        g()
    }, [r]);
    const b = async (v, h) => {
        try {
            await nt.collection("appointments").update(v, {
                status: h
            }), g()
        } catch (N) {
            console.error(N)
        }
    };
    return d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:32:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
            "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:33:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:34:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h1", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                    "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:35:10",
                    "data-visual-edit-component": "h1",
                    "data-visual-edit-editable": "true",
                    children: "Gestionar Asistencia"
                }), d.jsxs("p", {
                    className: "text-gray-500 text-sm font-medium mt-1",
                    "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:36:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: [c.length, " cita(s) para esta fecha"]
                })]
            }), d.jsx("input", {
                type: "date",
                value: r,
                onChange: v => p(v.target.value),
                className: "px-5 py-3 border-2 border-success-400 rounded-xl text-sm focus:ring-4 focus:ring-success-100 focus:border-success-500 outline-none font-medium transition-all",
                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:38:8",
                "data-visual-edit-component": "input",
                "data-visual-edit-editable": "false"
            })]
        }), o ? d.jsx("div", {
            className: "flex justify-center py-20",
            "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:43:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: d.jsx("div", {
                className: "w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:43:51",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false"
            })
        }) : c.length === 0 ? d.jsxs("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-20 text-center border border-gray-100",
            "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:45:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("div", {
                className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4",
                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:46:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsx(Ge, {
                    size: 40,
                    className: "text-gray-300",
                    "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:47:12",
                    "data-visual-edit-component": "Calendar",
                    "data-visual-edit-editable": "false"
                })
            }), d.jsx("p", {
                className: "text-gray-400 font-semibold text-lg",
                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:49:10",
                "data-visual-edit-component": "p",
                "data-visual-edit-editable": "true",
                children: "No hay citas para esta fecha"
            })]
        }) : d.jsx("div", {
            className: "space-y-4",
            "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:52:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: c.map(v => {
                var h, N, T, R;
                return d.jsx("div", {
                    className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl transition-all duration-300 border border-gray-100",
                    "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:54:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsxs("div", {
                        className: "flex flex-col sm:flex-row justify-between items-start gap-4",
                        "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:55:14",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsxs("div", {
                            className: "flex-1",
                            "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:56:16",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: [d.jsxs("div", {
                                className: "flex items-center gap-3 mb-2",
                                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:57:18",
                                "data-visual-edit-component": "div",
                                "data-visual-edit-editable": "false",
                                children: [d.jsx("span", {
                                    className: "text-xl font-black text-primary-800 bg-primary-50 px-4 py-1.5 rounded-xl",
                                    "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:58:20",
                                    "data-visual-edit-component": "span",
                                    "data-visual-edit-editable": "false",
                                    children: v.time_slot
                                }), d.jsx("span", {
                                    className: `px-3 py-1.5 text-xs font-bold rounded-full ${fu[v.status]}`,
                                    "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:59:20",
                                    "data-visual-edit-component": "span",
                                    "data-visual-edit-editable": "false",
                                    children: Yi[v.status]
                                })]
                            }), d.jsx("p", {
                                className: "text-base font-bold text-gray-900",
                                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:63:18",
                                "data-visual-edit-component": "p",
                                "data-visual-edit-editable": "false",
                                children: ((N = (h = v.expand) == null ? void 0 : h.patient) == null ? void 0 : N.name) || "—"
                            }), d.jsxs("p", {
                                className: "text-sm text-gray-500 font-medium",
                                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:64:18",
                                "data-visual-edit-component": "p",
                                "data-visual-edit-editable": "false",
                                children: [_e[v.therapy_type], " — ", ((R = (T = v.expand) == null ? void 0 : T.therapist) == null ? void 0 : R.name) || "—"]
                            })]
                        }), v.status === "programada" && d.jsxs("div", {
                            className: "flex flex-wrap gap-2.5",
                            "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:67:18",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: [d.jsxs("button", {
                                onClick: () => b(v.id, "completada"),
                                className: "flex items-center gap-2 px-5 py-2.5 bg-success-50 text-success-700 rounded-xl text-sm font-bold hover:bg-success-100 hover:scale-105 transition-all duration-300 border border-success-200",
                                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:68:20",
                                "data-visual-edit-component": "button",
                                "data-visual-edit-editable": "true",
                                children: [d.jsx(Qp, {
                                    size: 16,
                                    "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:69:22",
                                    "data-visual-edit-component": "CheckCircle",
                                    "data-visual-edit-editable": "false"
                                }), " Asistió"]
                            }), d.jsxs("button", {
                                onClick: () => b(v.id, "no_asistio"),
                                className: "flex items-center gap-2 px-5 py-2.5 bg-accent-50 text-accent-600 rounded-xl text-sm font-bold hover:bg-accent-100 hover:scale-105 transition-all duration-300 border border-accent-200",
                                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:71:20",
                                "data-visual-edit-component": "button",
                                "data-visual-edit-editable": "true",
                                children: [d.jsx(Zp, {
                                    size: 16,
                                    "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:72:22",
                                    "data-visual-edit-component": "Clock",
                                    "data-visual-edit-editable": "false"
                                }), " No Asistió"]
                            }), d.jsxs("button", {
                                onClick: () => b(v.id, "cancelada"),
                                className: "flex items-center gap-2 px-5 py-2.5 bg-danger-50 text-danger-600 rounded-xl text-sm font-bold hover:bg-danger-100 hover:scale-105 transition-all duration-300 border border-danger-200",
                                "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:74:20",
                                "data-visual-edit-component": "button",
                                "data-visual-edit-editable": "true",
                                children: [d.jsx(Vp, {
                                    size: 16,
                                    "data-visual-edit-loc": "src/pages/receptionist/Attendance.tsx:75:22",
                                    "data-visual-edit-component": "XCircle",
                                    "data-visual-edit-editable": "false"
                                }), " Cancelar"]
                            })]
                        })]
                    })
                }, v.id)
            })
        })]
    })
}

function Mb() {
    const [c, n] = y.useState([]), [o, u] = y.useState([]), [r, p] = y.useState(!0), [g, b] = y.useState(!1), [v, h] = y.useState({
        patient: "",
        amount: "",
        status: "pendiente",
        notes: "",
        payment_date: ""
    }), [N, T] = y.useState(!1), [R, z] = y.useState(""), [D, H] = y.useState(""), [G, U] = y.useState(""), k = async () => {
        try {
            const [B, I] = await Promise.all([nt.collection("payments").getFullList({
                expand: "patient",
                sort: "-created",
                requestKey: null
            }), nt.collection("patients").getFullList({
                sort: "name",
                requestKey: null
            })]);
            n(B), u(I)
        } catch (B) {
            console.error(B)
        }
        p(!1)
    };
    y.useEffect(() => {
        k()
    }, []);
    const w = async B => {
            B.preventDefault(), T(!0), z("");
            try {
                await nt.collection("payments").create({ ...v,
                    amount: parseFloat(v.amount)
                }), b(!1), h({
                    patient: "",
                    amount: "",
                    status: "pendiente",
                    notes: "",
                    payment_date: ""
                }), k()
            } catch (I) {
                console.error(I), z("Error al registrar.")
            }
            T(!1)
        },
        K = async B => {
            try {
                await nt.collection("payments").update(B, {
                    status: "pagado",
                    payment_date: new Date().toISOString()
                }), k()
            } catch (I) {
                console.error(I)
            }
        },
        Z = c.filter(B => {
            var I, V;
            return !(G && B.status !== G || D && !(((V = (I = B.expand) == null ? void 0 : I.patient) == null ? void 0 : V.name) || "").toLowerCase().includes(D.toLowerCase()))
        }),
        _ = c.filter(B => B.status === "pendiente").reduce((B, I) => B + I.amount, 0);
    return r ? d.jsx("div", {
        className: "flex justify-center py-20",
        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:56:11",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: d.jsx("div", {
            className: "w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
            "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:56:54",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false"
        })
    }) : d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:60:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
            "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:61:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:62:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h1", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:63:10",
                    "data-visual-edit-component": "h1",
                    "data-visual-edit-editable": "true",
                    children: "Adeudos"
                }), d.jsxs("p", {
                    className: "text-sm text-gray-500 font-medium mt-1",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:64:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: ["Total pendiente: ", d.jsxs("span", {
                        className: "font-black text-danger-600 text-lg",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:65:29",
                        "data-visual-edit-component": "span",
                        "data-visual-edit-editable": "false",
                        children: ["$", _.toFixed(2)]
                    })]
                })]
            }), d.jsxs("button", {
                onClick: () => {
                    b(!0), z("")
                },
                className: "flex items-center gap-2.5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:scale-105",
                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:68:8",
                "data-visual-edit-component": "button",
                "data-visual-edit-editable": "true",
                children: [d.jsx(Il, {
                    size: 20,
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:69:10",
                    "data-visual-edit-component": "Plus",
                    "data-visual-edit-editable": "false"
                }), " Nuevo Adeudo"]
            })]
        }), d.jsxs("div", {
            className: "bg-white rounded-2xl shadow-sm p-5 mb-5 flex flex-wrap gap-3 items-center border border-gray-100",
            "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:73:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                className: "relative flex-1 min-w-[200px]",
                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:74:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx(uu, {
                    size: 18,
                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:75:10",
                    "data-visual-edit-component": "Search",
                    "data-visual-edit-editable": "false"
                }), d.jsx("input", {
                    type: "text",
                    placeholder: "Buscar paciente...",
                    value: D,
                    onChange: B => H(B.target.value),
                    className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 font-medium transition-all",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:76:10",
                    "data-visual-edit-component": "input",
                    "data-visual-edit-editable": "false"
                })]
            }), d.jsxs("select", {
                value: G,
                onChange: B => U(B.target.value),
                className: "px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 font-medium transition-all",
                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:78:8",
                "data-visual-edit-component": "select",
                "data-visual-edit-editable": "false",
                children: [d.jsx("option", {
                    value: "",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:79:10",
                    "data-visual-edit-component": "option",
                    "data-visual-edit-editable": "true",
                    children: "Todos"
                }), Object.entries(Sp).map(([B, I]) => d.jsx("option", {
                    value: B,
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:80:65",
                    "data-visual-edit-component": "option",
                    "data-visual-edit-editable": "false",
                    children: I
                }, B))]
            })]
        }), d.jsx("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden border border-gray-100",
            "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:84:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: Z.length === 0 ? d.jsxs("div", {
                className: "p-20 text-center",
                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:86:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:87:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(ou, {
                        size: 40,
                        className: "text-gray-300",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:88:14",
                        "data-visual-edit-component": "DollarSign",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("p", {
                    className: "text-gray-400 font-semibold text-lg",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:90:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "No hay adeudos registrados"
                })]
            }) : d.jsx("div", {
                className: "overflow-x-auto",
                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:93:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsxs("table", {
                    className: "w-full",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:94:12",
                    "data-visual-edit-component": "table",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("thead", {
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:95:14",
                        "data-visual-edit-component": "thead",
                        "data-visual-edit-editable": "false",
                        children: d.jsxs("tr", {
                            className: "bg-gradient-to-r from-primary-700 to-primary-800 text-white",
                            "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:96:16",
                            "data-visual-edit-component": "tr",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:97:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Paciente"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:98:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Monto"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:99:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Estado"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:100:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Notas"
                            }), d.jsx("th", {
                                className: "text-right px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:101:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Acciones"
                            })]
                        })
                    }), d.jsx("tbody", {
                        className: "divide-y divide-gray-50",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:104:14",
                        "data-visual-edit-component": "tbody",
                        "data-visual-edit-editable": "false",
                        children: Z.map((B, I) => {
                            var V, tt;
                            return d.jsxs("tr", {
                                className: `${I%2===0?"bg-white":"bg-primary-50/30"} hover:bg-primary-50 transition-colors`,
                                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:106:18",
                                "data-visual-edit-component": "tr",
                                "data-visual-edit-editable": "false",
                                children: [d.jsx("td", {
                                    className: "px-5 py-4 text-sm font-semibold text-gray-900",
                                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:107:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: ((tt = (V = B.expand) == null ? void 0 : V.patient) == null ? void 0 : tt.name) || "—"
                                }), d.jsxs("td", {
                                    className: "px-5 py-4 text-sm font-black text-gray-900",
                                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:108:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: ["$", B.amount.toFixed(2)]
                                }), d.jsx("td", {
                                    className: "px-5 py-4",
                                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:109:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: d.jsx("span", {
                                        className: `inline-block px-3.5 py-1.5 text-xs font-bold rounded-full ${pb[B.status]}`,
                                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:110:22",
                                        "data-visual-edit-component": "span",
                                        "data-visual-edit-editable": "false",
                                        children: Sp[B.status]
                                    })
                                }), d.jsx("td", {
                                    className: "px-5 py-4 text-sm text-gray-500",
                                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:114:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: B.notes || "—"
                                }), d.jsx("td", {
                                    className: "px-5 py-4 text-right",
                                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:115:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: B.status !== "pagado" && d.jsx("button", {
                                        onClick: () => K(B.id),
                                        className: "text-xs bg-success-100 text-success-700 px-4 py-2 rounded-xl font-bold hover:bg-success-200 transition-all hover:scale-105 border border-success-200",
                                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:117:24",
                                        "data-visual-edit-component": "button",
                                        "data-visual-edit-editable": "true",
                                        children: "✓ Marcar Pagado"
                                    })
                                })]
                            }, B.id)
                        })
                    })]
                })
            })
        }), d.jsx(Ji, {
            isOpen: g,
            onClose: () => b(!1),
            title: "Nuevo Adeudo",
            "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:130:6",
            "data-visual-edit-component": "Modal",
            "data-visual-edit-editable": "false",
            children: d.jsxs("form", {
                onSubmit: w,
                className: "space-y-5",
                "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:131:8",
                "data-visual-edit-component": "form",
                "data-visual-edit-editable": "false",
                children: [d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:132:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:133:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "PACIENTE *"
                    }), d.jsxs("select", {
                        required: !0,
                        value: v.patient,
                        onChange: B => h({ ...v,
                            patient: B.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:134:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("option", {
                            value: "",
                            "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:135:14",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "true",
                            children: "Seleccionar"
                        }), o.map(B => d.jsx("option", {
                            value: B.id,
                            "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:136:35",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: B.name
                        }, B.id))]
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:139:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:140:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "MONTO *"
                    }), d.jsx("input", {
                        type: "number",
                        required: !0,
                        min: "0",
                        step: "0.01",
                        value: v.amount,
                        onChange: B => h({ ...v,
                            amount: B.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium transition-all",
                        placeholder: "$0.00",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:141:12",
                        "data-visual-edit-component": "input",
                        "data-visual-edit-editable": "false"
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:143:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:144:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "NOTAS"
                    }), d.jsx("textarea", {
                        value: v.notes,
                        onChange: B => h({ ...v,
                            notes: B.target.value
                        }),
                        rows: 2,
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none font-medium resize-none transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:145:12",
                        "data-visual-edit-component": "textarea",
                        "data-visual-edit-editable": "false"
                    })]
                }), R && d.jsx("div", {
                    className: "bg-danger-50 border-2 border-danger-200 text-danger-700 text-sm rounded-xl p-4 font-medium",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:147:20",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: R
                }), d.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:148:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("button", {
                        type: "button",
                        onClick: () => b(!1),
                        className: "flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:149:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "true",
                        children: "Cancelar"
                    }), d.jsx("button", {
                        type: "submit",
                        disabled: N,
                        className: "flex-1 px-4 py-3 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-xl text-sm font-bold hover:shadow-lg disabled:opacity-50 transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/Debts.tsx:150:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "false",
                        children: N ? "Guardando..." : "Registrar"
                    })]
                })]
            })
        })]
    })
}

function zb() {
    const [c, n] = y.useState([]), [o, u] = y.useState([]), [r, p] = y.useState([]), [g, b] = y.useState(!0), [v, h] = y.useState(!1), [N, T] = y.useState({
        patient: "",
        therapist: "",
        date: "",
        time_slot: "08:00",
        therapy_type: "psicologia",
        status: "programada",
        notes: ""
    }), [R, z] = y.useState(!1), [D, H] = y.useState(""), G = async () => {
        try {
            const [w, K, Z] = await Promise.all([nt.collection("appointments").getFullList({
                expand: "patient,therapist",
                sort: "-date,time_slot",
                requestKey: null
            }), nt.collection("patients").getFullList({
                sort: "name",
                requestKey: null
            }), nt.collection("users").getFullList({
                filter: "role = 'therapist'",
                sort: "name",
                requestKey: null
            })]);
            n(w), u(K), p(Z)
        } catch (w) {
            console.error(w)
        }
        b(!1)
    };
    y.useEffect(() => {
        G()
    }, []);
    const U = r.filter(w => !N.therapy_type || w.specialty === N.therapy_type),
        k = async w => {
            w.preventDefault(), z(!0), H("");
            try {
                await nt.collection("appointments").create(N), h(!1), T({
                    patient: "",
                    therapist: "",
                    date: "",
                    time_slot: "08:00",
                    therapy_type: "psicologia",
                    status: "programada",
                    notes: ""
                }), G()
            } catch (K) {
                console.error(K), H("Error al registrar.")
            }
            z(!1)
        };
    return g ? d.jsx("div", {
        className: "flex justify-center py-20",
        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:46:11",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: d.jsx("div", {
            className: "w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:46:54",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false"
        })
    }) : d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:50:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "flex justify-between items-center mb-6",
            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:51:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:52:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h1", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:53:10",
                    "data-visual-edit-component": "h1",
                    "data-visual-edit-editable": "true",
                    children: "Registro de Citas"
                }), d.jsxs("p", {
                    className: "text-gray-500 text-sm font-medium mt-1",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:54:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: [c.length, " cita(s)"]
                })]
            }), d.jsxs("button", {
                onClick: () => {
                    h(!0), H("")
                },
                className: "flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105",
                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:56:8",
                "data-visual-edit-component": "button",
                "data-visual-edit-editable": "true",
                children: [d.jsx(Il, {
                    size: 20,
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:57:10",
                    "data-visual-edit-component": "Plus",
                    "data-visual-edit-editable": "false"
                }), " Nueva Cita"]
            })]
        }), d.jsx("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden border border-gray-100",
            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:61:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: c.length === 0 ? d.jsxs("div", {
                className: "p-20 text-center",
                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:63:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("div", {
                    className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:64:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsx(Ge, {
                        size: 40,
                        className: "text-gray-300",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:65:14",
                        "data-visual-edit-component": "Calendar",
                        "data-visual-edit-editable": "false"
                    })
                }), d.jsx("p", {
                    className: "text-gray-400 font-semibold text-lg",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:67:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "No hay citas"
                })]
            }) : d.jsx("div", {
                className: "overflow-x-auto",
                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:70:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsxs("table", {
                    className: "w-full",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:71:12",
                    "data-visual-edit-component": "table",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("thead", {
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:72:14",
                        "data-visual-edit-component": "thead",
                        "data-visual-edit-editable": "false",
                        children: d.jsxs("tr", {
                            className: "bg-gradient-to-r from-primary-700 to-primary-800 text-white",
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:73:16",
                            "data-visual-edit-component": "tr",
                            "data-visual-edit-editable": "false",
                            children: [d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:74:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Paciente"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:75:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Terapia"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:76:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Terapeuta"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:77:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Fecha / Hora"
                            }), d.jsx("th", {
                                className: "text-left px-5 py-4 text-xs font-bold uppercase tracking-wider",
                                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:78:18",
                                "data-visual-edit-component": "th",
                                "data-visual-edit-editable": "true",
                                children: "Notas"
                            })]
                        })
                    }), d.jsx("tbody", {
                        className: "divide-y divide-gray-50",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:81:14",
                        "data-visual-edit-component": "tbody",
                        "data-visual-edit-editable": "false",
                        children: c.map((w, K) => {
                            var Z, _, B, I;
                            return d.jsxs("tr", {
                                className: `${K%2===0?"bg-white":"bg-primary-50/30"} hover:bg-primary-50 transition-colors`,
                                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:83:18",
                                "data-visual-edit-component": "tr",
                                "data-visual-edit-editable": "false",
                                children: [d.jsx("td", {
                                    className: "px-5 py-4 text-sm font-semibold text-gray-900",
                                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:84:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: ((_ = (Z = w.expand) == null ? void 0 : Z.patient) == null ? void 0 : _.name) || "—"
                                }), d.jsx("td", {
                                    className: "px-5 py-4",
                                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:85:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: d.jsx("span", {
                                        className: "inline-block px-3 py-1.5 text-xs font-bold rounded-full bg-primary-100 text-primary-700",
                                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:86:22",
                                        "data-visual-edit-component": "span",
                                        "data-visual-edit-editable": "false",
                                        children: _e[w.therapy_type]
                                    })
                                }), d.jsx("td", {
                                    className: "px-5 py-4 text-sm text-gray-700 font-medium",
                                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:90:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: ((I = (B = w.expand) == null ? void 0 : B.therapist) == null ? void 0 : I.name) || "—"
                                }), d.jsxs("td", {
                                    className: "px-5 py-4 text-sm font-bold text-primary-800",
                                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:91:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: [mu(w.date), " · ", w.time_slot]
                                }), d.jsx("td", {
                                    className: "px-5 py-4 text-sm text-gray-500",
                                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:92:20",
                                    "data-visual-edit-component": "td",
                                    "data-visual-edit-editable": "false",
                                    children: w.notes || "—"
                                })]
                            }, w.id)
                        })
                    })]
                })
            })
        }), d.jsx(Ji, {
            isOpen: v,
            onClose: () => h(!1),
            title: "Nueva Cita",
            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:101:6",
            "data-visual-edit-component": "Modal",
            "data-visual-edit-editable": "false",
            children: d.jsxs("form", {
                onSubmit: k,
                className: "space-y-5",
                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:102:8",
                "data-visual-edit-component": "form",
                "data-visual-edit-editable": "false",
                children: [d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:103:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:104:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "PACIENTE *"
                    }), d.jsxs("select", {
                        required: !0,
                        value: N.patient,
                        onChange: w => T({ ...N,
                            patient: w.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:105:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("option", {
                            value: "",
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:106:14",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "true",
                            children: "Seleccionar"
                        }), o.map(w => d.jsx("option", {
                            value: w.id,
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:107:35",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: w.name
                        }, w.id))]
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:110:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:111:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "TERAPIA *"
                    }), d.jsx("select", {
                        required: !0,
                        value: N.therapy_type,
                        onChange: w => T({ ...N,
                            therapy_type: w.target.value,
                            therapist: ""
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:112:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: Object.entries(_e).map(([w, K]) => d.jsx("option", {
                            value: w,
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:113:62",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: K
                        }, w))
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:116:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:117:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "TERAPEUTA *"
                    }), d.jsxs("select", {
                        required: !0,
                        value: N.therapist,
                        onChange: w => T({ ...N,
                            therapist: w.target.value
                        }),
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 font-medium transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:118:12",
                        "data-visual-edit-component": "select",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("option", {
                            value: "",
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:119:14",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "true",
                            children: "Seleccionar"
                        }), U.map(w => d.jsxs("option", {
                            value: w.id,
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:120:45",
                            "data-visual-edit-component": "option",
                            "data-visual-edit-editable": "false",
                            children: [w.name, " — ", Qi[w.specialty]]
                        }, w.id))]
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:123:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:124:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:125:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "FECHA *"
                        }), d.jsx("input", {
                            type: "date",
                            required: !0,
                            value: N.date,
                            onChange: w => T({ ...N,
                                date: w.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 font-medium transition-all",
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:126:14",
                            "data-visual-edit-component": "input",
                            "data-visual-edit-editable": "false"
                        })]
                    }), d.jsxs("div", {
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:128:12",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsx("label", {
                            className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:129:14",
                            "data-visual-edit-component": "label",
                            "data-visual-edit-editable": "true",
                            children: "HORA *"
                        }), d.jsx("select", {
                            required: !0,
                            value: N.time_slot,
                            onChange: w => T({ ...N,
                                time_slot: w.target.value
                            }),
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 font-medium transition-all",
                            "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:130:14",
                            "data-visual-edit-component": "select",
                            "data-visual-edit-editable": "false",
                            children: pu.map(w => d.jsx("option", {
                                value: w,
                                "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:131:39",
                                "data-visual-edit-component": "option",
                                "data-visual-edit-editable": "false",
                                children: w
                            }, w))
                        })]
                    })]
                }), d.jsxs("div", {
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:135:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("label", {
                        className: "block text-xs font-bold text-gray-500 mb-2 tracking-wider",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:136:12",
                        "data-visual-edit-component": "label",
                        "data-visual-edit-editable": "true",
                        children: "NOTAS"
                    }), d.jsx("textarea", {
                        value: N.notes,
                        onChange: w => T({ ...N,
                            notes: w.target.value
                        }),
                        rows: 2,
                        className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 font-medium resize-none transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:137:12",
                        "data-visual-edit-component": "textarea",
                        "data-visual-edit-editable": "false"
                    })]
                }), D && d.jsx("div", {
                    className: "bg-danger-50 border-2 border-danger-200 text-danger-700 text-sm rounded-xl p-4 font-medium",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:139:20",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: D
                }), d.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:140:10",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: [d.jsx("button", {
                        type: "button",
                        onClick: () => h(!1),
                        className: "flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:141:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "true",
                        children: "Cancelar"
                    }), d.jsx("button", {
                        type: "submit",
                        disabled: R,
                        className: "flex-1 px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl text-sm font-bold hover:shadow-lg disabled:opacity-50 transition-all",
                        "data-visual-edit-loc": "src/pages/receptionist/ReceptionistAppointments.tsx:142:12",
                        "data-visual-edit-component": "button",
                        "data-visual-edit-editable": "false",
                        children: R ? "Guardando..." : "Registrar"
                    })]
                })]
            })
        })]
    })
}

function Lb() {
    const {
        user: c
    } = wn(), [n, o] = y.useState([]), [u, r] = y.useState(!0), [p, g] = y.useState(Pp()), b = y.useCallback(async () => {
        if (c) {
            r(!0);
            try {
                const T = p ? nt.filter("therapist = {:id} && date >= {:start} && date <= {:end}", {
                        id: c.id,
                        start: p + " 00:00:00",
                        end: p + " 23:59:59"
                    }) : nt.filter("therapist = {:id}", {
                        id: c.id
                    }),
                    R = await nt.collection("appointments").getFullList({
                        filter: T,
                        expand: "patient",
                        sort: "time_slot",
                        requestKey: null
                    });
                o(R)
            } catch (T) {
                console.error(T)
            }
            r(!1)
        }
    }, [c, p]);
    y.useEffect(() => {
        b()
    }, [b]);
    const v = async (T, R) => {
            try {
                await nt.collection("appointments").update(T, {
                    status: R
                }), b()
            } catch (z) {
                console.error(z)
            }
        },
        h = n.filter(T => T.status === "completada").length,
        N = n.filter(T => T.status === "programada").length;
    return d.jsxs("div", {
        "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:38:4",
        "data-visual-edit-component": "div",
        "data-visual-edit-editable": "false",
        children: [d.jsxs("div", {
            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
            "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:39:6",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:40:8",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("h1", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:41:10",
                    "data-visual-edit-component": "h1",
                    "data-visual-edit-editable": "true",
                    children: "Mis Citas"
                }), d.jsx("p", {
                    className: "text-sm text-gray-500 font-medium mt-1",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:42:10",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: _e[(c == null ? void 0 : c.specialty) || ""] || "Terapeuta"
                })]
            }), d.jsx("input", {
                type: "date",
                value: p,
                onChange: T => g(T.target.value),
                className: "px-5 py-3 border-2 border-success-400 rounded-xl text-sm focus:ring-4 focus:ring-success-100 focus:border-success-500 outline-none font-medium transition-all",
                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:44:8",
                "data-visual-edit-component": "input",
                "data-visual-edit-editable": "false"
            })]
        }), !u && n.length > 0 && d.jsxs("div", {
            className: "grid grid-cols-3 gap-4 mb-6",
            "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:49:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsxs("div", {
                className: "bg-primary-50 border-2 border-primary-100 rounded-2xl p-4 text-center",
                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:50:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("p", {
                    className: "text-2xl font-black text-primary-700",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:51:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: n.length
                }), d.jsx("p", {
                    className: "text-xs font-bold text-gray-500",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:52:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "Total"
                })]
            }), d.jsxs("div", {
                className: "bg-success-50 border-2 border-success-100 rounded-2xl p-4 text-center",
                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:54:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("p", {
                    className: "text-2xl font-black text-success-600",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:55:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: h
                }), d.jsx("p", {
                    className: "text-xs font-bold text-gray-500",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:56:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "Completadas"
                })]
            }), d.jsxs("div", {
                className: "bg-accent-50 border-2 border-accent-100 rounded-2xl p-4 text-center",
                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:58:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: [d.jsx("p", {
                    className: "text-2xl font-black text-accent-600",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:59:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "false",
                    children: N
                }), d.jsx("p", {
                    className: "text-xs font-bold text-gray-500",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:60:12",
                    "data-visual-edit-component": "p",
                    "data-visual-edit-editable": "true",
                    children: "Pendientes"
                })]
            })]
        }), u ? d.jsx("div", {
            className: "flex justify-center py-20",
            "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:66:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: d.jsx("div", {
                className: "w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin",
                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:66:51",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false"
            })
        }) : n.length === 0 ? d.jsxs("div", {
            className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-20 text-center border border-gray-100",
            "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:68:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: [d.jsx("div", {
                className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4",
                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:69:10",
                "data-visual-edit-component": "div",
                "data-visual-edit-editable": "false",
                children: d.jsx(Ge, {
                    size: 40,
                    className: "text-gray-300",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:70:12",
                    "data-visual-edit-component": "Calendar",
                    "data-visual-edit-editable": "false"
                })
            }), d.jsx("p", {
                className: "text-gray-400 font-semibold text-lg",
                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:72:10",
                "data-visual-edit-component": "p",
                "data-visual-edit-editable": "true",
                children: "No tienes citas para esta fecha"
            })]
        }) : d.jsx("div", {
            className: "space-y-4",
            "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:75:8",
            "data-visual-edit-component": "div",
            "data-visual-edit-editable": "false",
            children: n.map(T => {
                var R, z;
                return d.jsx("div", {
                    className: "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl transition-all duration-300 border border-gray-100",
                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:77:12",
                    "data-visual-edit-component": "div",
                    "data-visual-edit-editable": "false",
                    children: d.jsxs("div", {
                        className: "flex flex-col sm:flex-row justify-between items-start gap-4",
                        "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:78:14",
                        "data-visual-edit-component": "div",
                        "data-visual-edit-editable": "false",
                        children: [d.jsxs("div", {
                            className: "flex-1",
                            "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:79:16",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: [d.jsxs("div", {
                                className: "flex items-center gap-3 mb-2",
                                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:80:18",
                                "data-visual-edit-component": "div",
                                "data-visual-edit-editable": "false",
                                children: [d.jsx("span", {
                                    className: "text-xl font-black text-primary-800 bg-primary-50 px-4 py-1.5 rounded-xl",
                                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:81:20",
                                    "data-visual-edit-component": "span",
                                    "data-visual-edit-editable": "false",
                                    children: T.time_slot
                                }), d.jsx("span", {
                                    className: `px-3 py-1.5 text-xs font-bold rounded-full ${fu[T.status]}`,
                                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:82:20",
                                    "data-visual-edit-component": "span",
                                    "data-visual-edit-editable": "false",
                                    children: Yi[T.status]
                                })]
                            }), d.jsx("p", {
                                className: "text-base font-bold text-gray-900",
                                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:86:18",
                                "data-visual-edit-component": "p",
                                "data-visual-edit-editable": "false",
                                children: ((z = (R = T.expand) == null ? void 0 : R.patient) == null ? void 0 : z.name) || "Paciente"
                            }), d.jsx("p", {
                                className: "text-sm text-gray-500 font-medium",
                                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:87:18",
                                "data-visual-edit-component": "p",
                                "data-visual-edit-editable": "false",
                                children: _e[T.therapy_type]
                            }), T.notes && d.jsx("p", {
                                className: "text-xs text-gray-400 mt-2 italic bg-gray-50 rounded-lg px-3 py-2",
                                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:88:30",
                                "data-visual-edit-component": "p",
                                "data-visual-edit-editable": "false",
                                children: T.notes
                            })]
                        }), T.status === "programada" && d.jsxs("div", {
                            className: "flex flex-wrap gap-2.5",
                            "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:91:18",
                            "data-visual-edit-component": "div",
                            "data-visual-edit-editable": "false",
                            children: [d.jsxs("button", {
                                onClick: () => v(T.id, "completada"),
                                className: "flex items-center gap-2 px-5 py-2.5 bg-success-50 text-success-700 rounded-xl text-sm font-bold hover:bg-success-100 hover:scale-105 transition-all duration-300 border border-success-200",
                                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:92:20",
                                "data-visual-edit-component": "button",
                                "data-visual-edit-editable": "true",
                                children: [d.jsx(Qp, {
                                    size: 16,
                                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:93:22",
                                    "data-visual-edit-component": "CheckCircle",
                                    "data-visual-edit-editable": "false"
                                }), " Completada"]
                            }), d.jsxs("button", {
                                onClick: () => v(T.id, "no_asistio"),
                                className: "flex items-center gap-2 px-5 py-2.5 bg-accent-50 text-accent-600 rounded-xl text-sm font-bold hover:bg-accent-100 hover:scale-105 transition-all duration-300 border border-accent-200",
                                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:95:20",
                                "data-visual-edit-component": "button",
                                "data-visual-edit-editable": "true",
                                children: [d.jsx(Zp, {
                                    size: 16,
                                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:96:22",
                                    "data-visual-edit-component": "Clock",
                                    "data-visual-edit-editable": "false"
                                }), " No Asistió"]
                            }), d.jsxs("button", {
                                onClick: () => v(T.id, "cancelada"),
                                className: "flex items-center gap-2 px-5 py-2.5 bg-danger-50 text-danger-600 rounded-xl text-sm font-bold hover:bg-danger-100 hover:scale-105 transition-all duration-300 border border-danger-200",
                                "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:98:20",
                                "data-visual-edit-component": "button",
                                "data-visual-edit-editable": "true",
                                children: [d.jsx(Vp, {
                                    size: 16,
                                    "data-visual-edit-loc": "src/pages/therapist/TherapistDashboard.tsx:99:22",
                                    "data-visual-edit-component": "XCircle",
                                    "data-visual-edit-editable": "false"
                                }), " Cancelar"]
                            })]
                        })]
                    })
                }, T.id)
            })
        })]
    })
}
const Ub = () => d.jsx(Z0, {
    "data-visual-edit-loc": "src/App.tsx:20:2",
    "data-visual-edit-component": "BrowserRouter",
    "data-visual-edit-editable": "false",
    children: d.jsx(xg, {
        "data-visual-edit-loc": "src/App.tsx:21:4",
        "data-visual-edit-component": "AuthProvider",
        "data-visual-edit-editable": "false",
        children: d.jsxs(N0, {
            "data-visual-edit-loc": "src/App.tsx:22:6",
            "data-visual-edit-component": "Routes",
            "data-visual-edit-editable": "false",
            children: [d.jsx(It, {
                path: "/",
                element: d.jsx(xb, {
                    "data-visual-edit-loc": "src/App.tsx:23:33",
                    "data-visual-edit-component": "RoleSelect",
                    "data-visual-edit-editable": "false"
                }),
                "data-visual-edit-loc": "src/App.tsx:23:8",
                "data-visual-edit-component": "Route",
                "data-visual-edit-editable": "false"
            }), d.jsx(It, {
                path: "/login/:role",
                element: d.jsx(yb, {
                    "data-visual-edit-loc": "src/App.tsx:24:44",
                    "data-visual-edit-component": "Login",
                    "data-visual-edit-editable": "false"
                }),
                "data-visual-edit-loc": "src/App.tsx:24:8",
                "data-visual-edit-component": "Route",
                "data-visual-edit-editable": "false"
            }), d.jsxs(It, {
                element: d.jsx(gb, {
                    "data-visual-edit-loc": "src/App.tsx:25:24",
                    "data-visual-edit-component": "Layout",
                    "data-visual-edit-editable": "false"
                }),
                "data-visual-edit-loc": "src/App.tsx:25:8",
                "data-visual-edit-component": "Route",
                "data-visual-edit-editable": "false",
                children: [d.jsx(It, {
                    path: "/admin",
                    element: d.jsx(Nb, {
                        "data-visual-edit-loc": "src/App.tsx:26:40",
                        "data-visual-edit-component": "Dashboard",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:26:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/admin/registro-citas",
                    element: d.jsx(Ab, {
                        "data-visual-edit-loc": "src/App.tsx:27:55",
                        "data-visual-edit-component": "RegisterAppointments",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:27:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/admin/gestion-citas",
                    element: d.jsx(wb, {
                        "data-visual-edit-loc": "src/App.tsx:28:54",
                        "data-visual-edit-component": "ManageAppointments",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:28:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/admin/pacientes",
                    element: d.jsx(Eb, {
                        "data-visual-edit-loc": "src/App.tsx:29:50",
                        "data-visual-edit-component": "Patients",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:29:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/admin/terapeutas",
                    element: d.jsx(Rb, {
                        "data-visual-edit-loc": "src/App.tsx:30:51",
                        "data-visual-edit-component": "Therapists",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:30:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/admin/estadisticas",
                    element: d.jsx(Cb, {
                        "data-visual-edit-loc": "src/App.tsx:31:53",
                        "data-visual-edit-component": "Statistics",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:31:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/recepcion",
                    element: d.jsx(Db, {
                        "data-visual-edit-loc": "src/App.tsx:32:44",
                        "data-visual-edit-component": "ReceptionistDashboard",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:32:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/recepcion/asistencia",
                    element: d.jsx(_b, {
                        "data-visual-edit-loc": "src/App.tsx:33:55",
                        "data-visual-edit-component": "Attendance",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:33:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/recepcion/adeudos",
                    element: d.jsx(Mb, {
                        "data-visual-edit-loc": "src/App.tsx:34:52",
                        "data-visual-edit-component": "Debts",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:34:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/recepcion/citas",
                    element: d.jsx(zb, {
                        "data-visual-edit-loc": "src/App.tsx:35:50",
                        "data-visual-edit-component": "ReceptionistAppointments",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:35:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                }), d.jsx(It, {
                    path: "/terapeuta",
                    element: d.jsx(Lb, {
                        "data-visual-edit-loc": "src/App.tsx:36:44",
                        "data-visual-edit-component": "TherapistDashboard",
                        "data-visual-edit-editable": "false"
                    }),
                    "data-visual-edit-loc": "src/App.tsx:36:10",
                    "data-visual-edit-component": "Route",
                    "data-visual-edit-editable": "false"
                })]
            }), d.jsx(It, {
                path: "*",
                element: d.jsx(Sb, {
                    "data-visual-edit-loc": "src/App.tsx:38:33",
                    "data-visual-edit-component": "NotFound",
                    "data-visual-edit-editable": "false"
                }),
                "data-visual-edit-loc": "src/App.tsx:38:8",
                "data-visual-edit-component": "Route",
                "data-visual-edit-editable": "false"
            })]
        })
    })
});
Ch.createRoot(document.getElementById("root")).render(d.jsx(y.StrictMode, {
    "data-visual-edit-loc": "src/main.tsx:7:2",
    "data-visual-edit-component": "StrictMode",
    "data-visual-edit-editable": "false",
    children: d.jsx(Ub, {
        "data-visual-edit-loc": "src/main.tsx:8:4",
        "data-visual-edit-component": "App",
        "data-visual-edit-editable": "false"
    })
}));