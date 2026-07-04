(function() {
  const Y=document.createElement("link").relList; if(Y&&Y.supports&&Y.supports("modulepreload")) return; for(const R of document.querySelectorAll('link[rel="modulepreload"]')) b(R); new MutationObserver(R=> {
    for(const G of R) if(G.type==="childList") for(const W of G.addedNodes) W.tagName==="LINK" &&W.rel==="modulepreload" &&b(W)
  })
  .observe(document, {
    childList:!0, subtree:!0
  });
  function B(R) {
    const G= {
    };
    return R.integrity&&(G.integrity=R.integrity), R.referrerPolicy&&(G.referrerPolicy=R.referrerPolicy), R.crossOrigin==="use-credentials" ?G.credentials="include" :R.crossOrigin==="anonymous" ?G.credentials="omit" :G.credentials="same-origin", G
  }
  function b(R) {
    if(R.ep) return; R.ep=!0; const G=B(R); fetch(R.href, G)
  }
})
(); var is= {
  exports: {
  }
},
Sn= {
};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var gd; function ih() {
  if(gd) return Sn; gd=1; var T=Symbol.for("react.transitional.element"), Y=Symbol.for("react.fragment"); function B(b, R, G) {
    var W=null; if(G!==void 0&&(W="" +G), R.key!==void 0&&(W="" +R.key), "key" in R) {
      G= {
      };
      for(var ve in R) ve!=="key" &&(G[ve]=R[ve])
    } else
    G=R; return R=G.ref, {
      $$typeof:T, type:b, key:W, ref:R!==void 0?R:null, props:G
    }
  }
  return Sn.Fragment=Y, Sn.jsx=B, Sn.jsxs=B, Sn
}
var vd; function ch() {
  return vd||(vd=1, is.exports=ih()), is.exports
}
var c=ch(), cs= {
  exports: {
  }
},
q= {
};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var yd; function sh() {
  if(yd) return q; yd=1; var T=Symbol.for("react.transitional.element"), Y=Symbol.for("react.portal"), B=Symbol.for("react.fragment"), b=Symbol.for("react.strict_mode"), R=Symbol.for("react.profiler"), G=Symbol.for("react.consumer"), W=Symbol.for("react.context"), ve=Symbol.for("react.forward_ref"), D=Symbol.for("react.suspense"), z=Symbol.for("react.memo"), P=Symbol.for("react.lazy"), C=Symbol.for("react.activity"), ne=Symbol.iterator; function Ce(d) {
    return d===null||typeof d!="object" ?null:(d=ne&&d[ne]||d["@@iterator"], typeof d=="function" ?d:null)
  }
  var Oe= {
    isMounted:function() {
      return!1
    },
    enqueueForceUpdate:function() {
    },
    enqueueReplaceState:function() {
    },
    enqueueSetState:function() {
    }
  },
  _e=Object.assign, et= {
  };
  function De(d, N, A) {
    this.props=d, this.context=N, this.refs=et, this.updater=A||Oe
  }
  De.prototype.isReactComponent= {
  },
  De.prototype.setState=function(d, N) {
    if(typeof d!="object" &&typeof d!="function" &&d!=null) throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, d, N, "setState")
  },
  De.prototype.forceUpdate=function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate")
  };
  function Tt() {
  }
  Tt.prototype=De.prototype; function ke(d, N, A) {
    this.props=d, this.context=N, this.refs=et, this.updater=A||Oe
  }
  var Xe=ke.prototype=new Tt; Xe.constructor=ke, _e(Xe, De.prototype), Xe.isPureReactComponent=!0; var tt=Array.isArray; function He() {
  }
  var Z= {
    H:null, A:null, T:null, S:null
  },
  de=Object.prototype.hasOwnProperty; function Le(d, N, A) {
    var x=A.ref; return {
      $$typeof:T, type:d, key:N, ref:x!==void 0?x:null, props:A
    }
  }
  function Pt(d, N) {
    return Le(d.type, N, d.props)
  }
  function lt(d) {
    return typeof d=="object" &&d!==null&&d.$$typeof===T
  }
  function Re(d) {
    var N= {
      "=" :"=0", ":" :"=2"
    };
    return"$" +d.replace(/[=:]/g, function(A) {
      return N[A]
    })
  }
  var Mt=/\/+/g; function ht(d, N) {
    return typeof d=="object" &&d!==null&&d.key!=null?Re("" +d.key) :N.toString(36)
  }
  function at(d) {
    switch(d.status) {
      case"fulfilled" :return d.value; case"rejected" :throw d.reason; default:switch(typeof d.status=="string" ?d.then(He, He) :(d.status="pending", d.then(function(N) {
        d.status==="pending" &&(d.status="fulfilled", d.value=N)
      },
      function(N) {
        d.status==="pending" &&(d.status="rejected", d.reason=N)
      })),
      d.status) {
        case"fulfilled" :return d.value; case"rejected" :throw d.reason
      }
    }
    throw d
  }
  function y(d, N, A, x, _) {
    var w=typeof d;(w==="undefined" ||w==="boolean") &&(d=null); var L=!1; if(d===null) L=!0; else switch(w) {
      case"bigint" :case"string" :case"number" :L=!0; break; case"object" :switch(d.$$typeof) {
        case T:case Y:L=!0; break; case P:return L=d._init, y(L(d._payload), N, A, x, _)
      }
    }
    if(L) return _=_(d), L=x==="" ?"." +ht(d, 0) :x, tt(_) ?(A="", L!=null&&(A=L.replace(Mt, "$&/") +"/"), y(_, N, A, "", function(Ot) {
      return Ot
    }))
    :_!=null&&(lt(_) &&(_=Pt(_, A+(_.key==null||d&&d.key===_.key?"" :("" +_.key).replace(Mt, "$&/") +"/") +L)), N.push(_)), 1; L=0; var ye=x==="" ?"." :x+":"; if(tt(d)) for(var oe=0; oe<d.length; oe++) x=d[oe], w=ye+ht(x, oe), L+=y(x, N, A, w, _); else if(oe=Ce(d), typeof oe=="function") for(d=oe.call(d), oe=0; !(x=d.next()).done;) x=x.value, w=ye+ht(x, oe++), L+=y(x, N, A, w, _); else if(w==="object") {
      if(typeof d.then=="function") return y(at(d), N, A, x, _); throw N=String(d), Error("Objects are not valid as a React child (found: " +(N==="[object Object]" ?"object with keys {" +Object.keys(d).join(", ") +"}" :N) +"). If you meant to render a collection of children, use an array instead.")
    }
    return L
  }
  function E(d, N, A) {
    if(d==null) return d; var x=[], _=0; return y(d, x, "", "", function(w) {
      return N.call(A, w, _++)
    }),
    x
  }
  function H(d) {
    if(d._status===-1) {
      var N=d._result; N=N(), N.then(function(A) {
        (d._status===0||d._status===-1) &&(d._status=1, d._result=A)
      },
      function(A) {
        (d._status===0||d._status===-1) &&(d._status=2, d._result=A)
      }),
      d._status===-1&&(d._status=0, d._result=N)
    }
    if(d._status===1) return d._result.default; throw d._result
  }
  var le=typeof reportError=="function" ?reportError:function(d) {
    if(typeof window=="object" &&typeof window.ErrorEvent=="function") {
      var N=new window.ErrorEvent("error", {
        bubbles:!0, cancelable:!0, message:typeof d=="object" &&d!==null&&typeof d.message=="string" ?String(d.message) :String(d), error:d
      });
      if(!window.dispatchEvent(N)) return
    } else
    if(typeof process=="object" &&typeof process.emit=="function") {
      process.emit("uncaughtException", d); return
    }
    console.error(d)
  },
  F= {
    map:E, forEach:function(d, N, A) {
      E(d, function() {
        N.apply(this, arguments)
      },
      A)
    },
    count:function(d) {
      var N=0; return E(d, function() {
        N++
      }),
      N
    },
    toArray:function(d) {
      return E(d, function(N) {
        return N
      })
      ||[]
    },
    only:function(d) {
      if(!lt(d)) throw Error("React.Children.only expected to receive a single React element child."); return d
    }
  };
  return q.Activity=C, q.Children=F, q.Component=De, q.Fragment=B, q.Profiler=R, q.PureComponent=ke, q.StrictMode=b, q.Suspense=D, q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z, q.__COMPILER_RUNTIME= {
    __proto__:null, c:function(d) {
      return Z.H.useMemoCache(d)
    }
  },
  q.cache=function(d) {
    return function() {
      return d.apply(null, arguments)
    }
  },
  q.cacheSignal=function() {
    return null
  },
  q.cloneElement=function(d, N, A) {
    if(d==null) throw Error("The argument must be a React element, but you passed " +d+"."); var x=_e({
    },
    d.props), _=d.key; if(N!=null) for(w in N.key!==void 0&&(_="" +N.key), N) !de.call(N, w) ||w==="key" ||w==="__self" ||w==="__source" ||w==="ref" &&N.ref===void 0||(x[w]=N[w]); var w=arguments.length-2; if(w===1) x.children=A; else if(1<w) {
      for(var L=Array(w), ye=0; ye<w; ye++) L[ye]=arguments[ye+2]; x.children=L
    }
    return Le(d.type, _, x)
  },
  q.createContext=function(d) {
    return d= {
      $$typeof:W, _currentValue:d, _currentValue2:d, _threadCount:0, Provider:null, Consumer:null
    },
    d.Provider=d, d.Consumer= {
      $$typeof:G, _context:d
    },
    d
  },
  q.createElement=function(d, N, A) {
    var x, _= {
    },
    w=null; if(N!=null) for(x in N.key!==void 0&&(w="" +N.key), N) de.call(N, x) &&x!=="key" &&x!=="__self" &&x!=="__source" &&(_[x]=N[x]); var L=arguments.length-2; if(L===1) _.children=A; else if(1<L) {
      for(var ye=Array(L), oe=0; oe<L; oe++) ye[oe]=arguments[oe+2]; _.children=ye
    }
    if(d&&d.defaultProps) for(x in L=d.defaultProps, L) _[x]===void 0&&(_[x]=L[x]); return Le(d, w, _)
  },
  q.createRef=function() {
    return {
      current:null
    }
  },
  q.forwardRef=function(d) {
    return {
      $$typeof:ve, render:d
    }
  },
  q.isValidElement=lt, q.lazy=function(d) {
    return {
      $$typeof:P, _payload: {
        _status:-1, _result:d
      },
      _init:H
    }
  },
  q.memo=function(d, N) {
    return {
      $$typeof:z, type:d, compare:N===void 0?null:N
    }
  },
  q.startTransition=function(d) {
    var N=Z.T, A= {
    };
    Z.T=A; try {
      var x=d(), _=Z.S; _!==null&&_(A, x), typeof x=="object" &&x!==null&&typeof x.then=="function" &&x.then(He, le)
    } catch
    (w) {
      le(w)
    } finally
    {
      N!==null&&A.types!==null&&(N.types=A.types), Z.T=N
    }
  },
  q.unstable_useCacheRefresh=function() {
    return Z.H.useCacheRefresh()
  },
  q.use=function(d) {
    return Z.H.use(d)
  },
  q.useActionState=function(d, N, A) {
    return Z.H.useActionState(d, N, A)
  },
  q.useCallback=function(d, N) {
    return Z.H.useCallback(d, N)
  },
  q.useContext=function(d) {
    return Z.H.useContext(d)
  },
  q.useDebugValue=function() {
  },
  q.useDeferredValue=function(d, N) {
    return Z.H.useDeferredValue(d, N)
  },
  q.useEffect=function(d, N) {
    return Z.H.useEffect(d, N)
  },
  q.useEffectEvent=function(d) {
    return Z.H.useEffectEvent(d)
  },
  q.useId=function() {
    return Z.H.useId()
  },
  q.useImperativeHandle=function(d, N, A) {
    return Z.H.useImperativeHandle(d, N, A)
  },
  q.useInsertionEffect=function(d, N) {
    return Z.H.useInsertionEffect(d, N)
  },
  q.useLayoutEffect=function(d, N) {
    return Z.H.useLayoutEffect(d, N)
  },
  q.useMemo=function(d, N) {
    return Z.H.useMemo(d, N)
  },
  q.useOptimistic=function(d, N) {
    return Z.H.useOptimistic(d, N)
  },
  q.useReducer=function(d, N, A) {
    return Z.H.useReducer(d, N, A)
  },
  q.useRef=function(d) {
    return Z.H.useRef(d)
  },
  q.useState=function(d) {
    return Z.H.useState(d)
  },
  q.useSyncExternalStore=function(d, N, A) {
    return Z.H.useSyncExternalStore(d, N, A)
  },
  q.useTransition=function() {
    return Z.H.useTransition()
  },
  q.version="19.2.7", q
}
var pd; function hs() {
  return pd||(pd=1, cs.exports=sh()), cs.exports
}
var xe=hs(), ss= {
  exports: {
  }
},
jn= {
},
fs= {
  exports: {
  }
},
rs= {
};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sd; function fh() {
  return Sd||(Sd=1, (function(T) {
    function Y(y, E) {
      var H=y.length; y.push(E); e:for(; 0<H;) {
        var le=H-1>>>1, F=y[le]; if(0<R(F, E)) y[le]=E, y[H]=F, H=le; else break e
      }
    }
    function B(y) {
      return y.length===0?null:y[0]
    }
    function b(y) {
      if(y.length===0) return null; var E=y[0], H=y.pop(); if(H!==E) {
        y[0]=H; e:for(var le=0, F=y.length, d=F>>>1; le<d;) {
          var N=2*(le+1) -1, A=y[N], x=N+1, _=y[x]; if(0>R(A, H)) x<F&&0>R(_, A) ?(y[le]=_, y[x]=H, le=x) :(y[le]=A, y[N]=H, le=N); else if(x<F&&0>R(_, H)) y[le]=_, y[x]=H, le=x; else break e
        }
      }
      return E
    }
    function R(y, E) {
      var H=y.sortIndex-E.sortIndex; return H!==0?H:y.id-E.id
    }
    if(T.unstable_now=void 0, typeof performance=="object" &&typeof performance.now=="function") {
      var G=performance; T.unstable_now=function() {
        return G.now()
      }
    } else
    {
      var W=Date, ve=W.now(); T.unstable_now=function() {
        return W.now() -ve
      }
    }
    var D=[], z=[], P=1, C=null, ne=3, Ce=!1, Oe=!1, _e=!1, et=!1, De=typeof setTimeout=="function" ?setTimeout:null, Tt=typeof clearTimeout=="function" ?clearTimeout:null, ke=typeof setImmediate<"u" ?setImmediate:null; function Xe(y) {
      for(var E=B(z); E!==null;) {
        if(E.callback===null) b(z); else if(E.startTime<=y) b(z), E.sortIndex=E.expirationTime, Y(D, E); else break; E=B(z)
      }
    }
    function tt(y) {
      if(_e=!1, Xe(y), !Oe) if(B(D) !==null) Oe=!0, He||(He=!0, Re()); else {
        var E=B(z); E!==null&&at(tt, E.startTime-y)
      }
    }
    var He=!1, Z=-1, de=5, Le=-1; function Pt() {
      return et?!0:!(T.unstable_now() -Le<de)
    }
    function lt() {
      if(et=!1, He) {
        var y=T.unstable_now(); Le=y; var E=!0; try {
          e: {
            Oe=!1, _e&&(_e=!1, Tt(Z), Z=-1), Ce=!0; var H=ne; try {
              t: {
                for(Xe(y), C=B(D); C!==null&&!(C.expirationTime>y&&Pt());) {
                  var le=C.callback; if(typeof le=="function") {
                    C.callback=null, ne=C.priorityLevel; var F=le(C.expirationTime<=y); if(y=T.unstable_now(), typeof F=="function") {
                      C.callback=F, Xe(y), E=!0; break t
                    }
                    C===B(D) &&b(D), Xe(y)
                  } else
                  b(D); C=B(D)
                }
                if(C!==null) E=!0; else {
                  var d=B(z); d!==null&&at(tt, d.startTime-y), E=!1
                }
              }
              break e
            } finally
            {
              C=null, ne=H, Ce=!1
            }
            E=void 0
          }
        } finally
        {
          E?Re() :He=!1
        }
      }
    }
    var Re; if(typeof ke=="function") Re=function() {
      ke(lt)
    };
    else if(typeof MessageChannel<"u") {
      var Mt=new MessageChannel, ht=Mt.port2; Mt.port1.onmessage=lt, Re=function() {
        ht.postMessage(null)
      }
    } else
    Re=function() {
      De(lt, 0)
    };
    function at(y, E) {
      Z=De(function() {
        y(T.unstable_now())
      },
      E)
    }
    T.unstable_IdlePriority=5, T.unstable_ImmediatePriority=1, T.unstable_LowPriority=4, T.unstable_NormalPriority=3, T.unstable_Profiling=null, T.unstable_UserBlockingPriority=2, T.unstable_cancelCallback=function(y) {
      y.callback=null
    },
    T.unstable_forceFrameRate=function(y) {
      0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") :de=0<y?Math.floor(1e3 / y) :5
    },
    T.unstable_getCurrentPriorityLevel=function() {
      return ne
    },
    T.unstable_next=function(y) {
      switch(ne) {
        case 1:case 2:case 3:var E=3; break; default:E=ne
      }
      var H=ne; ne=E; try {
        return y()
      } finally
      {
        ne=H
      }
    },
    T.unstable_requestPaint=function() {
      et=!0
    },
    T.unstable_runWithPriority=function(y, E) {
      switch(y) {
        case 1:case 2:case 3:case 4:case 5:break; default:y=3
      }
      var H=ne; ne=y; try {
        return E()
      } finally
      {
        ne=H
      }
    },
    T.unstable_scheduleCallback=function(y, E, H) {
      var le=T.unstable_now(); switch(typeof H=="object" &&H!==null?(H=H.delay, H=typeof H=="number" &&0<H?le+H:le) :H=le, y) {
        case 1:var F=-1; break; case 2:F=250; break; case 5:F=1073741823; break; case 4:F=1e4; break; default:F=5e3
      }
      return F=H+F, y= {
        id:P++, callback:E, priorityLevel:y, startTime:H, expirationTime:F, sortIndex:-1
      },
      H>le?(y.sortIndex=H, Y(z, y), B(D) ===null&&y===B(z) &&(_e?(Tt(Z), Z=-1) :_e=!0, at(tt, H-le))) :(y.sortIndex=F, Y(D, y), Oe||Ce||(Oe=!0, He||(He=!0, Re()))), y
    },
    T.unstable_shouldYield=Pt, T.unstable_wrapCallback=function(y) {
      var E=ne; return function() {
        var H=ne; ne=E; try {
          return y.apply(this, arguments)
        } finally
        {
          ne=H
        }
      }
    }
  })
  (rs)), rs
}
var jd; function rh() {
  return jd||(jd=1, fs.exports=fh()), fs.exports
}
var ds= {
  exports: {
  }
},
Ze= {
};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Nd; function dh() {
  if(Nd) return Ze; Nd=1; var T=hs(); function Y(D) {
    var z="https://react.dev/errors/" +D; if(1<arguments.length) {
      z+="?args[]=" +encodeURIComponent(arguments[1]); for(var P=2; P<arguments.length; P++) z+="&args[]=" +encodeURIComponent(arguments[P])
    }
    return"Minified React error #" +D+"; visit " +z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function B() {
  }
  var b= {
    d: {
      f:B, r:function() {
        throw Error(Y(522))
      },
      D:B, C:B, L:B, m:B, X:B, S:B, M:B
    },
    p:0, findDOMNode:null
  },
  R=Symbol.for("react.portal"); function G(D, z, P) {
    var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null; return {
      $$typeof:R, key:C==null?null:"" +C, children:D, containerInfo:z, implementation:P
    }
  }
  var W=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function ve(D, z) {
    if(D==="font") return""; if(typeof z=="string") return z==="use-credentials" ?z:""
  }
  return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b, Ze.createPortal=function(D, z) {
    var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null; if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11) throw Error(Y(299)); return G(D, z, null, P)
  },
  Ze.flushSync=function(D) {
    var z=W.T, P=b.p; try {
      if(W.T=null, b.p=2, D) return D()
    } finally
    {
      W.T=z, b.p=P, b.d.f()
    }
  },
  Ze.preconnect=function(D, z) {
    typeof D=="string" &&(z?(z=z.crossOrigin, z=typeof z=="string" ?z==="use-credentials" ?z:"" :void 0) :z=null, b.d.C(D, z))
  },
  Ze.prefetchDNS=function(D) {
    typeof D=="string" &&b.d.D(D)
  },
  Ze.preinit=function(D, z) {
    if(typeof D=="string" &&z&&typeof z.as=="string") {
      var P=z.as, C=ve(P, z.crossOrigin), ne=typeof z.integrity=="string" ?z.integrity:void 0, Ce=typeof z.fetchPriority=="string" ?z.fetchPriority:void 0; P==="style" ?b.d.S(D, typeof z.precedence=="string" ?z.precedence:void 0, {
        crossOrigin:C, integrity:ne, fetchPriority:Ce
      })
      :P==="script" &&b.d.X(D, {
        crossOrigin:C, integrity:ne, fetchPriority:Ce, nonce:typeof z.nonce=="string" ?z.nonce:void 0
      })
    }
  },
  Ze.preinitModule=function(D, z) {
    if(typeof D=="string") if(typeof z=="object" &&z!==null) {
      if(z.as==null||z.as==="script") {
        var P=ve(z.as, z.crossOrigin); b.d.M(D, {
          crossOrigin:P, integrity:typeof z.integrity=="string" ?z.integrity:void 0, nonce:typeof z.nonce=="string" ?z.nonce:void 0
        })
      }
    } else
    z==null&&b.d.M(D)
  },
  Ze.preload=function(D, z) {
    if(typeof D=="string" &&typeof z=="object" &&z!==null&&typeof z.as=="string") {
      var P=z.as, C=ve(P, z.crossOrigin); b.d.L(D, P, {
        crossOrigin:C, integrity:typeof z.integrity=="string" ?z.integrity:void 0, nonce:typeof z.nonce=="string" ?z.nonce:void 0, type:typeof z.type=="string" ?z.type:void 0, fetchPriority:typeof z.fetchPriority=="string" ?z.fetchPriority:void 0, referrerPolicy:typeof z.referrerPolicy=="string" ?z.referrerPolicy:void 0, imageSrcSet:typeof z.imageSrcSet=="string" ?z.imageSrcSet:void 0, imageSizes:typeof z.imageSizes=="string" ?z.imageSizes:void 0, media:typeof z.media=="string" ?z.media:void 0
      })
    }
  },
  Ze.preloadModule=function(D, z) {
    if(typeof D=="string") if(z) {
      var P=ve(z.as, z.crossOrigin); b.d.m(D, {
        as:typeof z.as=="string" &&z.as!=="script" ?z.as:void 0, crossOrigin:P, integrity:typeof z.integrity=="string" ?z.integrity:void 0
      })
    } else
    b.d.m(D)
  },
  Ze.requestFormReset=function(D) {
    b.d.r(D)
  },
  Ze.unstable_batchedUpdates=function(D, z) {
    return D(z)
  },
  Ze.useFormState=function(D, z, P) {
    return W.H.useFormState(D, z, P)
  },
  Ze.useFormStatus=function() {
    return W.H.useHostTransitionStatus()
  },
  Ze.version="19.2.7", Ze
}
var zd; function oh() {
  if(zd) return ds.exports; zd=1; function T() {
    if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u" ||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)
    } catch
    (Y) {
      console.error(Y)
    }
  }
  return T(), ds.exports=dh(), ds.exports
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
var Td; function mh() {
  if(Td) return jn; Td=1; var T=rh(), Y=hs(), B=oh(); function b(e) {
    var t="https://react.dev/errors/" +e; if(1<arguments.length) {
      t+="?args[]=" +encodeURIComponent(arguments[1]); for(var l=2; l<arguments.length; l++) t+="&args[]=" +encodeURIComponent(arguments[l])
    }
    return"Minified React error #" +e+"; visit " +t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function R(e) {
    return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)
  }
  function G(e) {
    var t=e, l=e; if(e.alternate) for(; t.return;) t=t.return; else {
      e=t; do t=e, (t.flags&4098) !==0&&(l=t.return), e=t.return; while(e)
    }
    return t.tag===3?l:null
  }
  function W(e) {
    if(e.tag===13) {
      var t=e.memoizedState; if(t===null&&(e=e.alternate, e!==null&&(t=e.memoizedState)), t!==null) return t.dehydrated
    }
    return null
  }
  function ve(e) {
    if(e.tag===31) {
      var t=e.memoizedState; if(t===null&&(e=e.alternate, e!==null&&(t=e.memoizedState)), t!==null) return t.dehydrated
    }
    return null
  }
  function D(e) {
    if(G(e) !==e) throw Error(b(188))
  }
  function z(e) {
    var t=e.alternate; if(!t) {
      if(t=G(e), t===null) throw Error(b(188)); return t!==e?null:e
    }
    for(var l=e, a=t;;) {
      var n=l.return; if(n===null) break; var u=n.alternate; if(u===null) {
        if(a=n.return, a!==null) {
          l=a; continue
        }
        break
      }
      if(n.child===u.child) {
        for(u=n.child; u;) {
          if(u===l) return D(n), e; if(u===a) return D(n), t; u=u.sibling
        }
        throw Error(b(188))
      }
      if(l.return!==a.return) l=n, a=u; else {
        for(var i=!1, s=n.child; s;) {
          if(s===l) {
            i=!0, l=n, a=u; break
          }
          if(s===a) {
            i=!0, a=n, l=u; break
          }
          s=s.sibling
        }
        if(!i) {
          for(s=u.child; s;) {
            if(s===l) {
              i=!0, l=u, a=n; break
            }
            if(s===a) {
              i=!0, a=u, l=n; break
            }
            s=s.sibling
          }
          if(!i) throw Error(b(189))
        }
      }
      if(l.alternate!==a) throw Error(b(190))
    }
    if(l.tag!==3) throw Error(b(188)); return l.stateNode.current===l?e:t
  }
  function P(e) {
    var t=e.tag; if(t===5||t===26||t===27||t===6) return e; for(e=e.child; e!==null;) {
      if(t=P(e), t!==null) return t; e=e.sibling
    }
    return null
  }
  var C=Object.assign, ne=Symbol.for("react.element"), Ce=Symbol.for("react.transitional.element"), Oe=Symbol.for("react.portal"), _e=Symbol.for("react.fragment"), et=Symbol.for("react.strict_mode"), De=Symbol.for("react.profiler"), Tt=Symbol.for("react.consumer"), ke=Symbol.for("react.context"), Xe=Symbol.for("react.forward_ref"), tt=Symbol.for("react.suspense"), He=Symbol.for("react.suspense_list"), Z=Symbol.for("react.memo"), de=Symbol.for("react.lazy"), Le=Symbol.for("react.activity"), Pt=Symbol.for("react.memo_cache_sentinel"), lt=Symbol.iterator; function Re(e) {
    return e===null||typeof e!="object" ?null:(e=lt&&e[lt]||e["@@iterator"], typeof e=="function" ?e:null)
  }
  var Mt=Symbol.for("react.client.reference"); function ht(e) {
    if(e==null) return null; if(typeof e=="function") return e.$$typeof===Mt?null:e.displayName||e.name||null; if(typeof e=="string") return e; switch(e) {
      case _e:return"Fragment"; case De:return"Profiler"; case et:return"StrictMode"; case tt:return"Suspense"; case He:return"SuspenseList"; case Le:return"Activity"
    }
    if(typeof e=="object") switch(e.$$typeof) {
      case Oe:return"Portal"; case ke:return e.displayName||"Context"; case Tt:return(e._context.displayName||"Context") +".Consumer"; case Xe:var t=e.render; return e=e.displayName, e||(e=t.displayName||t.name||"", e=e!=="" ?"ForwardRef(" +e+")" :"ForwardRef"), e; case Z:return t=e.displayName||null, t!==null?t:ht(e.type) ||"Memo"; case de:t=e._payload, e=e._init; try {
        return ht(e(t))
      } catch
      {
      }
    }
    return null
  }
  var at=Array.isArray, y=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E=B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H= {
    pending:!1, data:null, method:null, action:null
  },
  le=[], F=-1; function d(e) {
    return {
      current:e
    }
  }
  function N(e) {
    0>F||(e.current=le[F], le[F]=null, F--)
  }
  function A(e, t) {
    F++, le[F]=e.current, e.current=t
  }
  var x=d(null), _=d(null), w=d(null), L=d(null); function ye(e, t) {
    switch(A(w, t), A(_, e), A(x, null), t.nodeType) {
      case 9:case 11:e=(e=t.documentElement) &&(e=e.namespaceURI) ?Y0(e) :0; break; default:if(e=t.tagName, t=t.namespaceURI) t=Y0(t), e=G0(t, e); else switch(e) {
        case"svg" :e=1; break; case"math" :e=2; break; default:e=0
      }
    }
    N(x), A(x, e)
  }
  function oe() {
    N(x), N(_), N(w)
  }
  function Ot(e) {
    e.memoizedState!==null&&A(L, e); var t=x.current, l=G0(t, e.type); t!==l&&(A(_, e), A(x, l))
  }
  function Nn(e) {
    _.current===e&&(N(x), N(_)), L.current===e&&(N(L), gn._currentValue=H)
  }
  var Qu, bs; function Tl(e) {
    if(Qu===void 0) try {
      throw Error()
    } catch
    (l) {
      var t=l.stack.trim().match(/\n( *(at )?)/); Qu=t&&t[1]||"", bs=-1<l.stack.indexOf(`
    at`) ?" (<anonymous>)" :-1<l.stack.indexOf("@") ?"@unknown:0:0" :""
    }
    return`
` +Qu+e+bs
  }
  var Xu=!1; function Lu(e, t) {
    if(!e||Xu) return""; Xu=!0; var l=Error.prepareStackTrace; Error.prepareStackTrace=void 0; try {
      var a= {
        DetermineComponentFrameRoot:function() {
          try {
            if(t) {
              var j=function() {
                throw Error()
              };
              if(Object.defineProperty(j.prototype, "props", {
                set:function() {
                  throw Error()
                }
              }),
              typeof Reflect=="object" &&Reflect.construct) {
                try {
                  Reflect.construct(j, [])
                } catch
                (v) {
                  var g=v
                }
                Reflect.construct(e, [], j)
              } else
              {
                try {
                  j.call()
                } catch
                (v) {
                  g=v
                }
                e.call(j.prototype)
              }
            } else
            {
              try {
                throw Error()
              } catch
              (v) {
                g=v
              }
              (j=e()) &&typeof j.catch=="function" &&j.catch(function() {
              })
            }
          } catch
          (v) {
            if(v&&g&&typeof v.stack=="string") return[v.stack, g.stack]
          }
          return[null, null]
        }
      };
      a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot"; var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name"); n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value:"DetermineComponentFrameRoot"
      });
      var u=a.DetermineComponentFrameRoot(), i=u[0], s=u[1]; if(i&&s) {
        var f=i.split(`
`), h=s.split(`
`); for(n=a=0; a<f.length&&!f[a].includes("DetermineComponentFrameRoot");) a++; for(; n<h.length&&!h[n].includes("DetermineComponentFrameRoot");) n++; if(a===f.length||n===h.length) for(a=f.length-1, n=h.length-1; 1<=a&&0<=n&&f[a]!==h[n];) n--; for(; 1<=a&&0<=n; a--, n--) if(f[a]!==h[n]) {
          if(a!==1||n!==1) do if(a--, n--, 0>n||f[a]!==h[n]) {
            var p=`
` +f[a].replace(" at new ", " at "); return e.displayName&&p.includes("<anonymous>") &&(p=p.replace("<anonymous>", e.displayName)), p
          } while
          (1<=a&&0<=n); break
        }
      }
    } finally
    {
      Xu=!1, Error.prepareStackTrace=l
    }
    return(l=e?e.displayName||e.name:"") ?Tl(l) :""
  }
  function Hd(e, t) {
    switch(e.tag) {
      case 26:case 27:case 5:return Tl(e.type); case 16:return Tl("Lazy"); case 13:return e.child!==t&&t!==null?Tl("Suspense Fallback") :Tl("Suspense"); case 19:return Tl("SuspenseList"); case 0:case 15:return Lu(e.type, !1); case 11:return Lu(e.type.render, !1); case 1:return Lu(e.type, !0); case 31:return Tl("Activity"); default:return""
    }
  }
  function xs(e) {
    try {
      var t="", l=null; do t+=Hd(e, l), l=e, e=e.return; while(e); return t
    } catch
    (a) {
      return`
Error generating stack: ` +a.message+`
` +a.stack
    }
  }
  var Zu=Object.prototype.hasOwnProperty, Vu=T.unstable_scheduleCallback, Ku=T.unstable_cancelCallback, Rd=T.unstable_shouldYield, qd=T.unstable_requestPaint, nt=T.unstable_now, Bd=T.unstable_getCurrentPriorityLevel, gs=T.unstable_ImmediatePriority, vs=T.unstable_UserBlockingPriority, zn=T.unstable_NormalPriority, Yd=T.unstable_LowPriority, ys=T.unstable_IdlePriority, Gd=T.log, Qd=T.unstable_setDisableYieldValue, _a=null, ut=null; function el(e) {
    if(typeof Gd=="function" &&Qd(e), ut&&typeof ut.setStrictMode=="function") try {
      ut.setStrictMode(_a, e)
    } catch
    {
    }
  }
  var it=Math.clz32?Math.clz32:Zd, Xd=Math.log, Ld=Math.LN2; function Zd(e) {
    return e>>>=0, e===0?32:31-(Xd(e) / Ld|0) |0
  }
  var Tn=256, En=262144, An=4194304; function El(e) {
    var t=e&42; if(t!==0) return t; switch(e&-e) {
      case 1:return 1; case 2:return 2; case 4:return 4; case 8:return 8; case 16:return 16; case 32:return 32; case 64:return 64; case 128:return 128; case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888; case 262144:case 524288:case 1048576:case 2097152:return e&3932160; case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560; case 67108864:return 67108864; case 134217728:return 134217728; case 268435456:return 268435456; case 536870912:return 536870912; case 1073741824:return 0; default:return e
    }
  }
  function _n(e, t, l) {
    var a=e.pendingLanes; if(a===0) return 0; var n=0, u=e.suspendedLanes, i=e.pingedLanes; e=e.warmLanes; var s=a&134217727; return s!==0?(a=s&~u, a!==0?n=El(a) :(i&=s, i!==0?n=El(i) :l||(l=s&~e, l!==0&&(n=El(l))))) :(s=a&~u, s!==0?n=El(s) :i!==0?n=El(i) :l||(l=a&~e, l!==0&&(n=El(l)))), n===0?0:t!==0&&t!==n&&(t&u) ===0&&(u=n&-n, l=t&-t, u>=l||u===32&&(l&4194048) !==0) ?t:n
  }
  function Ma(e, t) {
    return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes) &t) ===0
  }
  function Vd(e, t) {
    switch(e) {
      case 1:case 2:case 4:case 8:case 64:return t+250; case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3; case 4194304:case 8388608:case 16777216:case 33554432:return-1; case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1; default:return-1
    }
  }
  function ps() {
    var e=An; return An<<=1, (An&62914560) ===0&&(An=4194304), e
  }
  function Ju(e) {
    for(var t=[], l=0; 31>l; l++) t.push(e); return t
  }
  function Oa(e, t) {
    e.pendingLanes|=t, t!==268435456&&(e.suspendedLanes=0, e.pingedLanes=0, e.warmLanes=0)
  }
  function Kd(e, t, l, a, n, u) {
    var i=e.pendingLanes; e.pendingLanes=l, e.suspendedLanes=0, e.pingedLanes=0, e.warmLanes=0, e.expiredLanes&=l, e.entangledLanes&=l, e.errorRecoveryDisabledLanes&=l, e.shellSuspendCounter=0; var s=e.entanglements, f=e.expirationTimes, h=e.hiddenUpdates; for(l=i&~l; 0<l;) {
      var p=31-it(l), j=1<<p; s[p]=0, f[p]=-1; var g=h[p]; if(g!==null) for(h[p]=null, p=0; p<g.length; p++) {
        var v=g[p]; v!==null&&(v.lane&=-536870913)
      }
      l&=~j
    }
    a!==0&&Ss(e, a, 0), u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))
  }
  function Ss(e, t, l) {
    e.pendingLanes|=t, e.suspendedLanes&=~t; var a=31-it(t); e.entangledLanes|=t, e.entanglements[a]=e.entanglements[a]|1073741824|l&261930
  }
  function js(e, t) {
    var l=e.entangledLanes|=t; for(e=e.entanglements; l;) {
      var a=31-it(l), n=1<<a; n&t|e[a]&t&&(e[a]|=t), l&=~n
    }
  }
  function Ns(e, t) {
    var l=t&-t; return l=(l&42) !==0?1:$u(l), (l&(e.suspendedLanes|t)) !==0?0:l
  }
  function $u(e) {
    switch(e) {
      case 2:e=1; break; case 8:e=4; break; case 32:e=16; break; case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128; break; case 268435456:e=134217728; break; default:e=0
    }
    return e
  }
  function Wu(e) {
    return e&=-e, 2<e?8<e?(e&134217727) !==0?32:268435456:8:2
  }
  function zs() {
    var e=E.p; return e!==0?e:(e=window.event, e===void 0?32:rd(e.type))
  }
  function Ts(e, t) {
    var l=E.p; try {
      return E.p=e, t()
    } finally
    {
      E.p=l
    }
  }
  var tl=Math.random().toString(36).slice(2), qe="__reactFiber$" +tl, Ke="__reactProps$" +tl, Ll="__reactContainer$" +tl, Fu="__reactEvents$" +tl, Jd="__reactListeners$" +tl, $d="__reactHandles$" +tl, Es="__reactResources$" +tl, Da="__reactMarker$" +tl; function Iu(e) {
    delete e[qe], delete e[Ke], delete e[Fu], delete e[Jd], delete e[$d]
  }
  function Zl(e) {
    var t=e[qe]; if(t) return t; for(var l=e.parentNode; l;) {
      if(t=l[Ll]||l[qe]) {
        if(l=t.alternate, t.child!==null||l!==null&&l.child!==null) for(e=J0(e); e!==null;) {
          if(l=e[qe]) return l; e=J0(e)
        }
        return t
      }
      e=l, l=e.parentNode
    }
    return null
  }
  function Vl(e) {
    if(e=e[qe]||e[Ll]) {
      var t=e.tag; if(t===5||t===6||t===13||t===31||t===26||t===27||t===3) return e
    }
    return null
  }
  function ka(e) {
    var t=e.tag; if(t===5||t===26||t===27||t===6) return e.stateNode; throw Error(b(33))
  }
  function Kl(e) {
    var t=e[Es]; return t||(t=e[Es]= {
      hoistableStyles:new Map, hoistableScripts:new Map
    }),
    t
  }
  function we(e) {
    e[Da]=!0
  }
  var As=new Set, _s= {
  };
  function Al(e, t) {
    Jl(e, t), Jl(e+"Capture", t)
  }
  function Jl(e, t) {
    for(_s[e]=t, e=0; e<t.length; e++) As.add(t[e])
  }
  var Wd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ms= {
  },
  Os= {
  };
  function Fd(e) {
    return Zu.call(Os, e) ?!0:Zu.call(Ms, e) ?!1:Wd.test(e) ?Os[e]=!0:(Ms[e]=!0, !1)
  }
  function Mn(e, t, l) {
    if(Fd(t)) if(l===null) e.removeAttribute(t); else {
      switch(typeof l) {
        case"undefined" :case"function" :case"symbol" :e.removeAttribute(t); return; case"boolean" :var a=t.toLowerCase().slice(0, 5); if(a!=="data-" &&a!=="aria-") {
          e.removeAttribute(t); return
        }
      }
      e.setAttribute(t, "" +l)
    }
  }
  function On(e, t, l) {
    if(l===null) e.removeAttribute(t); else {
      switch(typeof l) {
        case"undefined" :case"function" :case"symbol" :case"boolean" :e.removeAttribute(t); return
      }
      e.setAttribute(t, "" +l)
    }
  }
  function Ct(e, t, l, a) {
    if(a===null) e.removeAttribute(l); else {
      switch(typeof a) {
        case"undefined" :case"function" :case"symbol" :case"boolean" :e.removeAttribute(l); return
      }
      e.setAttributeNS(t, l, "" +a)
    }
  }
  function bt(e) {
    switch(typeof e) {
      case"bigint" :case"boolean" :case"number" :case"string" :case"undefined" :return e; case"object" :return e; default:return""
    }
  }
  function Ds(e) {
    var t=e.type; return(e=e.nodeName) &&e.toLowerCase() ==="input" &&(t==="checkbox" ||t==="radio")
  }
  function Id(e, t, l) {
    var a=Object.getOwnPropertyDescriptor(e.constructor.prototype, t); if(!e.hasOwnProperty(t) &&typeof a<"u" &&typeof a.get=="function" &&typeof a.set=="function") {
      var n=a.get, u=a.set; return Object.defineProperty(e, t, {
        configurable:!0, get:function() {
          return n.call(this)
        },
        set:function(i) {
          l="" +i, u.call(this, i)
        }
      }),
      Object.defineProperty(e, t, {
        enumerable:a.enumerable
      }),
      {
        getValue:function() {
          return l
        },
        setValue:function(i) {
          l="" +i
        },
        stopTracking:function() {
          e._valueTracker=null, delete e[t]
        }
      }
    }
  }
  function Pu(e) {
    if(!e._valueTracker) {
      var t=Ds(e) ?"checked" :"value"; e._valueTracker=Id(e, t, "" +e[t])
    }
  }
  function ks(e) {
    if(!e) return!1; var t=e._valueTracker; if(!t) return!0; var l=t.getValue(), a=""; return e&&(a=Ds(e) ?e.checked?"true" :"false" :e.value), e=a, e!==l?(t.setValue(e), !0) :!1
  }
  function Dn(e) {
    if(e=e||(typeof document<"u" ?document:void 0), typeof e>"u") return null; try {
      return e.activeElement||e.body
    } catch
    {
      return e.body
    }
  }
  var Pd=/[\n"\\]/g; function xt(e) {
    return e.replace(Pd, function(t) {
      return"\\" +t.charCodeAt(0).toString(16) +" "
    })
  }
  function ei(e, t, l, a, n, u, i, s) {
    e.name="", i!=null&&typeof i!="function" &&typeof i!="symbol" &&typeof i!="boolean" ?e.type=i:e.removeAttribute("type"), t!=null?i==="number" ?(t===0&&e.value==="" ||e.value!=t) &&(e.value="" +bt(t)) :e.value!=="" +bt(t) &&(e.value="" +bt(t)) :i!=="submit" &&i!=="reset" ||e.removeAttribute("value"), t!=null?ti(e, i, bt(t)) :l!=null?ti(e, i, bt(l)) :a!=null&&e.removeAttribute("value"), n==null&&u!=null&&(e.defaultChecked=!!u), n!=null&&(e.checked=n&&typeof n!="function" &&typeof n!="symbol"), s!=null&&typeof s!="function" &&typeof s!="symbol" &&typeof s!="boolean" ?e.name="" +bt(s) :e.removeAttribute("name")
  }
  function ws(e, t, l, a, n, u, i, s) {
    if(u!=null&&typeof u!="function" &&typeof u!="symbol" &&typeof u!="boolean" &&(e.type=u), t!=null||l!=null) {
      if(!(u!=="submit" &&u!=="reset" ||t!=null)) {
        Pu(e); return
      }
      l=l!=null?"" +bt(l) :"", t=t!=null?"" +bt(t) :l, s||t===e.value||(e.value=t), e.defaultValue=t
    }
    a=a??n, a=typeof a!="function" &&typeof a!="symbol" &&!!a, e.checked=s?e.checked:!!a, e.defaultChecked=!!a, i!=null&&typeof i!="function" &&typeof i!="symbol" &&typeof i!="boolean" &&(e.name=i), Pu(e)
  }
  function ti(e, t, l) {
    t==="number" &&Dn(e.ownerDocument) ===e||e.defaultValue==="" +l||(e.defaultValue="" +l)
  }
  function $l(e, t, l, a) {
    if(e=e.options, t) {
      t= {
      };
      for(var n=0; n<l.length; n++) t["$" +l[n]]=!0; for(l=0; l<e.length; l++) n=t.hasOwnProperty("$" +e[l].value), e[l].selected!==n&&(e[l].selected=n), n&&a&&(e[l].defaultSelected=!0)
    } else
    {
      for(l="" +bt(l), t=null, n=0; n<e.length; n++) {
        if(e[n].value===l) {
          e[n].selected=!0, a&&(e[n].defaultSelected=!0); return
        }
        t!==null||e[n].disabled||(t=e[n])
      }
      t!==null&&(t.selected=!0)
    }
  }
  function Us(e, t, l) {
    if(t!=null&&(t="" +bt(t), t!==e.value&&(e.value=t), l==null)) {
      e.defaultValue!==t&&(e.defaultValue=t); return
    }
    e.defaultValue=l!=null?"" +bt(l) :""
  }
  function Cs(e, t, l, a) {
    if(t==null) {
      if(a!=null) {
        if(l!=null) throw Error(b(92)); if(at(a)) {
          if(1<a.length) throw Error(b(93)); a=a[0]
        }
        l=a
      }
      l==null&&(l=""), t=l
    }
    l=bt(t), e.defaultValue=l, a=e.textContent, a===l&&a!=="" &&a!==null&&(e.value=a), Pu(e)
  }
  function Wl(e, t) {
    if(t) {
      var l=e.firstChild; if(l&&l===e.lastChild&&l.nodeType===3) {
        l.nodeValue=t; return
      }
    }
    e.textContent=t
  }
  var eo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")); function Hs(e, t, l) {
    var a=t.indexOf("--") ===0; l==null||typeof l=="boolean" ||l==="" ?a?e.setProperty(t, "") :t==="float" ?e.cssFloat="" :e[t]="" :a?e.setProperty(t, l) :typeof l!="number" ||l===0||eo.has(t) ?t==="float" ?e.cssFloat=l:e[t]=("" +l).trim() :e[t]=l+"px"
  }
  function Rs(e, t, l) {
    if(t!=null&&typeof t!="object") throw Error(b(62)); if(e=e.style, l!=null) {
      for(var a in l) !l.hasOwnProperty(a) ||t!=null&&t.hasOwnProperty(a) ||(a.indexOf("--") ===0?e.setProperty(a, "") :a==="float" ?e.cssFloat="" :e[a]=""); for(var n in t) a=t[n], t.hasOwnProperty(n) &&l[n]!==a&&Hs(e, n, a)
    } else
    for(var u in t) t.hasOwnProperty(u) &&Hs(e, u, t[u])
  }
  function li(e) {
    if(e.indexOf("-") ===-1) return!1; switch(e) {
      case"annotation-xml" :case"color-profile" :case"font-face" :case"font-face-src" :case"font-face-uri" :case"font-face-format" :case"font-face-name" :case"missing-glyph" :return!1; default:return!0
    }
  }
  var to=new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), lo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i; function kn(e) {
    return lo.test("" +e) ?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" :e
  }
  function Ht() {
  }
  var ai=null; function ni(e) {
    return e=e.target||e.srcElement||window, e.correspondingUseElement&&(e=e.correspondingUseElement), e.nodeType===3?e.parentNode:e
  }
  var Fl=null, Il=null; function qs(e) {
    var t=Vl(e); if(t&&(e=t.stateNode)) {
      var l=e[Ke]||null; e:switch(e=t.stateNode, t.type) {
        case"input" :if(ei(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t=l.name, l.type==="radio" &&t!=null) {
          for(l=e; l.parentNode;) l=l.parentNode; for(l=l.querySelectorAll('input[name="' +xt("" +t) +'"][type="radio"]'), t=0; t<l.length; t++) {
            var a=l[t]; if(a!==e&&a.form===e.form) {
              var n=a[Ke]||null; if(!n) throw Error(b(90)); ei(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
            }
          }
          for(t=0; t<l.length; t++) a=l[t], a.form===e.form&&ks(a)
        }
        break e; case"textarea" :Us(e, l.value, l.defaultValue); break e; case"select" :t=l.value, t!=null&&$l(e, !!l.multiple, t, !1)
      }
    }
  }
  var ui=!1; function Bs(e, t, l) {
    if(ui) return e(t, l); ui=!0; try {
      var a=e(t); return a
    } finally
    {
      if(ui=!1, (Fl!==null||Il!==null) &&(yu(), Fl&&(t=Fl, e=Il, Il=Fl=null, qs(t), e))) for(t=0; t<e.length; t++) qs(e[t])
    }
  }
  function wa(e, t) {
    var l=e.stateNode; if(l===null) return null; var a=l[Ke]||null; if(a===null) return null; l=a[t]; e:switch(t) {
      case"onClick" :case"onClickCapture" :case"onDoubleClick" :case"onDoubleClickCapture" :case"onMouseDown" :case"onMouseDownCapture" :case"onMouseMove" :case"onMouseMoveCapture" :case"onMouseUp" :case"onMouseUpCapture" :case"onMouseEnter" :(a=!a.disabled) ||(e=e.type, a=!(e==="button" ||e==="input" ||e==="select" ||e==="textarea")), e=!a; break e; default:e=!1
    }
    if(e) return null; if(l&&typeof l!="function") throw Error(b(231, t, typeof l)); return l
  }
  var Rt=!(typeof window>"u" ||typeof window.document>"u" ||typeof window.document.createElement>"u"), ii=!1; if(Rt) try {
    var Ua= {
    };
    Object.defineProperty(Ua, "passive", {
      get:function() {
        ii=!0
      }
    }),
    window.addEventListener("test", Ua, Ua), window.removeEventListener("test", Ua, Ua)
  } catch
  {
    ii=!1
  }
  var ll=null, ci=null, wn=null; function Ys() {
    if(wn) return wn; var e, t=ci, l=t.length, a, n="value" in ll?ll.value:ll.textContent, u=n.length; for(e=0; e<l&&t[e]===n[e]; e++); var i=l-e; for(a=1; a<=i&&t[l-a]===n[u-a]; a++); return wn=n.slice(e, 1<a?1-a:void 0)
  }
  function Un(e) {
    var t=e.keyCode; return"charCode" in e?(e=e.charCode, e===0&&t===13&&(e=13)) :e=t, e===10&&(e=13), 32<=e||e===13?e:0
  }
  function Cn() {
    return!0
  }
  function Gs() {
    return!1
  }
  function Je(e) {
    function t(l, a, n, u, i) {
      this._reactName=l, this._targetInst=n, this.type=a, this.nativeEvent=u, this.target=i, this.currentTarget=null; for(var s in e) e.hasOwnProperty(s) &&(l=e[s], this[s]=l?l(u) :u[s]); return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1) ?Cn:Gs, this.isPropagationStopped=Gs, this
    }
    return C(t.prototype, {
      preventDefault:function() {
        this.defaultPrevented=!0; var l=this.nativeEvent; l&&(l.preventDefault?l.preventDefault() :typeof l.returnValue!="unknown" &&(l.returnValue=!1), this.isDefaultPrevented=Cn)
      },
      stopPropagation:function() {
        var l=this.nativeEvent; l&&(l.stopPropagation?l.stopPropagation() :typeof l.cancelBubble!="unknown" &&(l.cancelBubble=!0), this.isPropagationStopped=Cn)
      },
      persist:function() {
      },
      isPersistent:Cn
    }),
    t
  }
  var _l= {
    eventPhase:0, bubbles:0, cancelable:0, timeStamp:function(e) {
      return e.timeStamp||Date.now()
    },
    defaultPrevented:0, isTrusted:0
  },
  Hn=Je(_l), Ca=C({
  },
  _l, {
    view:0, detail:0
  }),
  ao=Je(Ca), si, fi, Ha, Rn=C({
  },
  Ca, {
    screenX:0, screenY:0, clientX:0, clientY:0, pageX:0, pageY:0, ctrlKey:0, shiftKey:0, altKey:0, metaKey:0, getModifierState:di, button:0, buttons:0, relatedTarget:function(e) {
      return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget
    },
    movementX:function(e) {
      return"movementX" in e?e.movementX:(e!==Ha&&(Ha&&e.type==="mousemove" ?(si=e.screenX-Ha.screenX, fi=e.screenY-Ha.screenY) :fi=si=0, Ha=e), si)
    },
    movementY:function(e) {
      return"movementY" in e?e.movementY:fi
    }
  }),
  Qs=Je(Rn), no=C({
  },
  Rn, {
    dataTransfer:0
  }),
  uo=Je(no), io=C({
  },
  Ca, {
    relatedTarget:0
  }),
  ri=Je(io), co=C({
  },
  _l, {
    animationName:0, elapsedTime:0, pseudoElement:0
  }),
  so=Je(co), fo=C({
  },
  _l, {
    clipboardData:function(e) {
      return"clipboardData" in e?e.clipboardData:window.clipboardData
    }
  }),
  ro=Je(fo), oo=C({
  },
  _l, {
    data:0
  }),
  Xs=Je(oo), mo= {
    Esc:"Escape", Spacebar:" ", Left:"ArrowLeft", Up:"ArrowUp", Right:"ArrowRight", Down:"ArrowDown", Del:"Delete", Win:"OS", Menu:"ContextMenu", Apps:"ContextMenu", Scroll:"ScrollLock", MozPrintableKey:"Unidentified"
  },
  ho= {
    8:"Backspace", 9:"Tab", 12:"Clear", 13:"Enter", 16:"Shift", 17:"Control", 18:"Alt", 19:"Pause", 20:"CapsLock", 27:"Escape", 32:" ", 33:"PageUp", 34:"PageDown", 35:"End", 36:"Home", 37:"ArrowLeft", 38:"ArrowUp", 39:"ArrowRight", 40:"ArrowDown", 45:"Insert", 46:"Delete", 112:"F1", 113:"F2", 114:"F3", 115:"F4", 116:"F5", 117:"F6", 118:"F7", 119:"F8", 120:"F9", 121:"F10", 122:"F11", 123:"F12", 144:"NumLock", 145:"ScrollLock", 224:"Meta"
  },
  bo= {
    Alt:"altKey", Control:"ctrlKey", Meta:"metaKey", Shift:"shiftKey"
  };
  function xo(e) {
    var t=this.nativeEvent; return t.getModifierState?t.getModifierState(e) :(e=bo[e]) ?!!t[e]:!1
  }
  function di() {
    return xo
  }
  var go=C({
  },
  Ca, {
    key:function(e) {
      if(e.key) {
        var t=mo[e.key]||e.key; if(t!=="Unidentified") return t
      }
      return e.type==="keypress" ?(e=Un(e), e===13?"Enter" :String.fromCharCode(e)) :e.type==="keydown" ||e.type==="keyup" ?ho[e.keyCode]||"Unidentified" :""
    },
    code:0, location:0, ctrlKey:0, shiftKey:0, altKey:0, metaKey:0, repeat:0, locale:0, getModifierState:di, charCode:function(e) {
      return e.type==="keypress" ?Un(e) :0
    },
    keyCode:function(e) {
      return e.type==="keydown" ||e.type==="keyup" ?e.keyCode:0
    },
    which:function(e) {
      return e.type==="keypress" ?Un(e) :e.type==="keydown" ||e.type==="keyup" ?e.keyCode:0
    }
  }),
  vo=Je(go), yo=C({
  },
  Rn, {
    pointerId:0, width:0, height:0, pressure:0, tangentialPressure:0, tiltX:0, tiltY:0, twist:0, pointerType:0, isPrimary:0
  }),
  Ls=Je(yo), po=C({
  },
  Ca, {
    touches:0, targetTouches:0, changedTouches:0, altKey:0, metaKey:0, ctrlKey:0, shiftKey:0, getModifierState:di
  }),
  So=Je(po), jo=C({
  },
  _l, {
    propertyName:0, elapsedTime:0, pseudoElement:0
  }),
  No=Je(jo), zo=C({
  },
  Rn, {
    deltaX:function(e) {
      return"deltaX" in e?e.deltaX:"wheelDeltaX" in e?-e.wheelDeltaX:0
    },
    deltaY:function(e) {
      return"deltaY" in e?e.deltaY:"wheelDeltaY" in e?-e.wheelDeltaY:"wheelDelta" in e?-e.wheelDelta:0
    },
    deltaZ:0, deltaMode:0
  }),
  To=Je(zo), Eo=C({
  },
  _l, {
    newState:0, oldState:0
  }),
  Ao=Je(Eo), _o=[9, 13, 27, 32], oi=Rt&&"CompositionEvent" in window, Ra=null; Rt&&"documentMode" in document&&(Ra=document.documentMode); var Mo=Rt&&"TextEvent" in window&&!Ra, Zs=Rt&&(!oi||Ra&&8<Ra&&11>=Ra), Vs=" ", Ks=!1; function Js(e, t) {
    switch(e) {
      case"keyup" :return _o.indexOf(t.keyCode) !==-1; case"keydown" :return t.keyCode!==229; case"keypress" :case"mousedown" :case"focusout" :return!0; default:return!1
    }
  }
  function $s(e) {
    return e=e.detail, typeof e=="object" &&"data" in e?e.data:null
  }
  var Pl=!1; function Oo(e, t) {
    switch(e) {
      case"compositionend" :return $s(t); case"keypress" :return t.which!==32?null:(Ks=!0, Vs); case"textInput" :return e=t.data, e===Vs&&Ks?null:e; default:return null
    }
  }
  function Do(e, t) {
    if(Pl) return e==="compositionend" ||!oi&&Js(e, t) ?(e=Ys(), wn=ci=ll=null, Pl=!1, e) :null; switch(e) {
      case"paste" :return null; case"keypress" :if(!(t.ctrlKey||t.altKey||t.metaKey) ||t.ctrlKey&&t.altKey) {
        if(t.char&&1<t.char.length) return t.char; if(t.which) return String.fromCharCode(t.which)
      }
      return null; case"compositionend" :return Zs&&t.locale!=="ko" ?null:t.data; default:return null
    }
  }
  var ko= {
    color:!0, date:!0, datetime:!0, "datetime-local" :!0, email:!0, month:!0, number:!0, password:!0, range:!0, search:!0, tel:!0, text:!0, time:!0, url:!0, week:!0
  };
  function Ws(e) {
    var t=e&&e.nodeName&&e.nodeName.toLowerCase(); return t==="input" ?!!ko[e.type]:t==="textarea"
  }
  function Fs(e, t, l, a) {
    Fl?Il?Il.push(a) :Il=[a]:Fl=a, t=Eu(t, "onChange"), 0<t.length&&(l=new Hn("onChange", "change", null, l, a), e.push({
      event:l, listeners:t
    }))
  }
  var qa=null, Ba=null; function wo(e) {
    U0(e, 0)
  }
  function qn(e) {
    var t=ka(e); if(ks(t)) return e
  }
  function Is(e, t) {
    if(e==="change") return t
  }
  var Ps=!1; if(Rt) {
    var mi; if(Rt) {
      var hi="oninput" in document; if(!hi) {
        var ef=document.createElement("div"); ef.setAttribute("oninput", "return;"), hi=typeof ef.oninput=="function"
      }
      mi=hi
    } else
    mi=!1; Ps=mi&&(!document.documentMode||9<document.documentMode)
  }
  function tf() {
    qa&&(qa.detachEvent("onpropertychange", lf), Ba=qa=null)
  }
  function lf(e) {
    if(e.propertyName==="value" &&qn(Ba)) {
      var t=[]; Fs(t, Ba, e, ni(e)), Bs(wo, t)
    }
  }
  function Uo(e, t, l) {
    e==="focusin" ?(tf(), qa=t, Ba=l, qa.attachEvent("onpropertychange", lf)) :e==="focusout" &&tf()
  }
  function Co(e) {
    if(e==="selectionchange" ||e==="keyup" ||e==="keydown") return qn(Ba)
  }
  function Ho(e, t) {
    if(e==="click") return qn(t)
  }
  function Ro(e, t) {
    if(e==="input" ||e==="change") return qn(t)
  }
  function qo(e, t) {
    return e===t&&(e!==0||1 / e===1 / t) ||e!==e&&t!==t
  }
  var ct=typeof Object.is=="function" ?Object.is:qo; function Ya(e, t) {
    if(ct(e, t)) return!0; if(typeof e!="object" ||e===null||typeof t!="object" ||t===null) return!1; var l=Object.keys(e), a=Object.keys(t); if(l.length!==a.length) return!1; for(a=0; a<l.length; a++) {
      var n=l[a]; if(!Zu.call(t, n) ||!ct(e[n], t[n])) return!1
    }
    return!0
  }
  function af(e) {
    for(; e&&e.firstChild;) e=e.firstChild; return e
  }
  function nf(e, t) {
    var l=af(e); e=0; for(var a; l;) {
      if(l.nodeType===3) {
        if(a=e+l.textContent.length, e<=t&&a>=t) return {
          node:l, offset:t-e
        };
        e=a
      }
      e: {
        for(; l;) {
          if(l.nextSibling) {
            l=l.nextSibling; break e
          }
          l=l.parentNode
        }
        l=void 0
      }
      l=af(l)
    }
  }
  function uf(e, t) {
    return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uf(e, t.parentNode) :"contains" in e?e.contains(t) :e.compareDocumentPosition?!!(e.compareDocumentPosition(t) &16) :!1:!1
  }
  function cf(e) {
    e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window; for(var t=Dn(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var l=typeof t.contentWindow.location.href=="string"
      } catch
      {
        l=!1
      }
      if(l) e=t.contentWindow; else break; t=Dn(e.document)
    }
    return t
  }
  function bi(e) {
    var t=e&&e.nodeName&&e.nodeName.toLowerCase(); return t&&(t==="input" &&(e.type==="text" ||e.type==="search" ||e.type==="tel" ||e.type==="url" ||e.type==="password") ||t==="textarea" ||e.contentEditable==="true")
  }
  var Bo=Rt&&"documentMode" in document&&11>=document.documentMode, ea=null, xi=null, Ga=null, gi=!1; function sf(e, t, l) {
    var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument; gi||ea==null||ea!==Dn(a) ||(a=ea, "selectionStart" in a&&bi(a) ?a= {
      start:a.selectionStart, end:a.selectionEnd
    }
    :(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(), a= {
      anchorNode:a.anchorNode, anchorOffset:a.anchorOffset, focusNode:a.focusNode, focusOffset:a.focusOffset
    }),
    Ga&&Ya(Ga, a) ||(Ga=a, a=Eu(xi, "onSelect"), 0<a.length&&(t=new Hn("onSelect", "select", null, t, l), e.push({
      event:t, listeners:a
    }),
    t.target=ea)))
  }
  function Ml(e, t) {
    var l= {
    };
    return l[e.toLowerCase()]=t.toLowerCase(), l["Webkit" +e]="webkit" +t, l["Moz" +e]="moz" +t, l
  }
  var ta= {
    animationend:Ml("Animation", "AnimationEnd"), animationiteration:Ml("Animation", "AnimationIteration"), animationstart:Ml("Animation", "AnimationStart"), transitionrun:Ml("Transition", "TransitionRun"), transitionstart:Ml("Transition", "TransitionStart"), transitioncancel:Ml("Transition", "TransitionCancel"), transitionend:Ml("Transition", "TransitionEnd")
  },
  vi= {
  },
  ff= {
  };
  Rt&&(ff=document.createElement("div").style, "AnimationEvent" in window||(delete ta.animationend.animation, delete ta.animationiteration.animation, delete ta.animationstart.animation), "TransitionEvent" in window||delete ta.transitionend.transition); function Ol(e) {
    if(vi[e]) return vi[e]; if(!ta[e]) return e; var t=ta[e], l; for(l in t) if(t.hasOwnProperty(l) &&l in ff) return vi[e]=t[l]; return e
  }
  var rf=Ol("animationend"), df=Ol("animationiteration"), of=Ol("animationstart"), Yo=Ol("transitionrun"), Go=Ol("transitionstart"), Qo=Ol("transitioncancel"), mf=Ol("transitionend"), hf=new Map, yi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); yi.push("scrollEnd"); function Et(e, t) {
    hf.set(e, t), Al(t, [e])
  }
  var Bn=typeof reportError=="function" ?reportError:function(e) {
    if(typeof window=="object" &&typeof window.ErrorEvent=="function") {
      var t=new window.ErrorEvent("error", {
        bubbles:!0, cancelable:!0, message:typeof e=="object" &&e!==null&&typeof e.message=="string" ?String(e.message) :String(e), error:e
      });
      if(!window.dispatchEvent(t)) return
    } else
    if(typeof process=="object" &&typeof process.emit=="function") {
      process.emit("uncaughtException", e); return
    }
    console.error(e)
  },
  gt=[], la=0, pi=0; function Yn() {
    for(var e=la, t=pi=la=0; t<e;) {
      var l=gt[t]; gt[t++]=null; var a=gt[t]; gt[t++]=null; var n=gt[t]; gt[t++]=null; var u=gt[t]; if(gt[t++]=null, a!==null&&n!==null) {
        var i=a.pending; i===null?n.next=n:(n.next=i.next, i.next=n), a.pending=n
      }
      u!==0&&bf(l, n, u)
    }
  }
  function Gn(e, t, l, a) {
    gt[la++]=e, gt[la++]=t, gt[la++]=l, gt[la++]=a, pi|=a, e.lanes|=a, e=e.alternate, e!==null&&(e.lanes|=a)
  }
  function Si(e, t, l, a) {
    return Gn(e, t, l, a), Qn(e)
  }
  function Dl(e, t) {
    return Gn(e, null, null, t), Qn(e)
  }
  function bf(e, t, l) {
    e.lanes|=l; var a=e.alternate; a!==null&&(a.lanes|=l); for(var n=!1, u=e.return; u!==null;) u.childLanes|=l, a=u.alternate, a!==null&&(a.childLanes|=l), u.tag===22&&(e=u.stateNode, e===null||e._visibility&1||(n=!0)), e=u, u=u.return; return e.tag===3?(u=e.stateNode, n&&t!==null&&(n=31-it(l), e=u.hiddenUpdates, a=e[n], a===null?e[n]=[t]:a.push(t), t.lane=l|536870912), u) :null
  }
  function Qn(e) {
    if(50<rn) throw rn=0, Oc=null, Error(b(185)); for(var t=e.return; t!==null;) e=t, t=e.return; return e.tag===3?e.stateNode:null
  }
  var aa= {
  };
  function Xo(e, t, l, a) {
    this.tag=e, this.key=l, this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null, this.index=0, this.refCleanup=this.ref=null, this.pendingProps=t, this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null, this.mode=a, this.subtreeFlags=this.flags=0, this.deletions=null, this.childLanes=this.lanes=0, this.alternate=null
  }
  function st(e, t, l, a) {
    return new Xo(e, t, l, a)
  }
  function ji(e) {
    return e=e.prototype, !(!e||!e.isReactComponent)
  }
  function qt(e, t) {
    var l=e.alternate; return l===null?(l=st(e.tag, t, e.key, e.mode), l.elementType=e.elementType, l.type=e.type, l.stateNode=e.stateNode, l.alternate=e, e.alternate=l) :(l.pendingProps=t, l.type=e.type, l.flags=0, l.subtreeFlags=0, l.deletions=null), l.flags=e.flags&65011712, l.childLanes=e.childLanes, l.lanes=e.lanes, l.child=e.child, l.memoizedProps=e.memoizedProps, l.memoizedState=e.memoizedState, l.updateQueue=e.updateQueue, t=e.dependencies, l.dependencies=t===null?null: {
      lanes:t.lanes, firstContext:t.firstContext
    },
    l.sibling=e.sibling, l.index=e.index, l.ref=e.ref, l.refCleanup=e.refCleanup, l
  }
  function xf(e, t) {
    e.flags&=65011714; var l=e.alternate; return l===null?(e.childLanes=0, e.lanes=t, e.child=null, e.subtreeFlags=0, e.memoizedProps=null, e.memoizedState=null, e.updateQueue=null, e.dependencies=null, e.stateNode=null) :(e.childLanes=l.childLanes, e.lanes=l.lanes, e.child=l.child, e.subtreeFlags=0, e.deletions=null, e.memoizedProps=l.memoizedProps, e.memoizedState=l.memoizedState, e.updateQueue=l.updateQueue, e.type=l.type, t=l.dependencies, e.dependencies=t===null?null: {
      lanes:t.lanes, firstContext:t.firstContext
    }),
    e
  }
  function Xn(e, t, l, a, n, u) {
    var i=0; if(a=e, typeof e=="function") ji(e) &&(i=1); else if(typeof e=="string") i=Jm(e, l, x.current) ?26:e==="html" ||e==="head" ||e==="body" ?27:5; else e:switch(e) {
      case Le:return e=st(31, l, t, n), e.elementType=Le, e.lanes=u, e; case _e:return kl(l.children, n, u, t); case et:i=8, n|=24; break; case De:return e=st(12, l, t, n|2), e.elementType=De, e.lanes=u, e; case tt:return e=st(13, l, t, n), e.elementType=tt, e.lanes=u, e; case He:return e=st(19, l, t, n), e.elementType=He, e.lanes=u, e; default:if(typeof e=="object" &&e!==null) switch(e.$$typeof) {
        case ke:i=10; break e; case Tt:i=9; break e; case Xe:i=11; break e; case Z:i=14; break e; case de:i=16, a=null; break e
      }
      i=29, l=Error(b(130, e===null?"null" :typeof e, "")), a=null
    }
    return t=st(i, l, t, n), t.elementType=e, t.type=a, t.lanes=u, t
  }
  function kl(e, t, l, a) {
    return e=st(7, e, a, t), e.lanes=l, e
  }
  function Ni(e, t, l) {
    return e=st(6, e, null, t), e.lanes=l, e
  }
  function gf(e) {
    var t=st(18, null, null, 0); return t.stateNode=e, t
  }
  function zi(e, t, l) {
    return t=st(4, e.children!==null?e.children:[], e.key, t), t.lanes=l, t.stateNode= {
      containerInfo:e.containerInfo, pendingChildren:null, implementation:e.implementation
    },
    t
  }
  var vf=new WeakMap; function vt(e, t) {
    if(typeof e=="object" &&e!==null) {
      var l=vf.get(e); return l!==void 0?l:(t= {
        value:e, source:t, stack:xs(t)
      },
      vf.set(e, t), t)
    }
    return {
      value:e, source:t, stack:xs(t)
    }
  }
  var na=[], ua=0, Ln=null, Qa=0, yt=[], pt=0, al=null, Dt=1, kt=""; function Bt(e, t) {
    na[ua++]=Qa, na[ua++]=Ln, Ln=e, Qa=t
  }
  function yf(e, t, l) {
    yt[pt++]=Dt, yt[pt++]=kt, yt[pt++]=al, al=e; var a=Dt; e=kt; var n=32-it(a) -1; a&=~(1<<n), l+=1; var u=32-it(t) +n; if(30<u) {
      var i=n-n%5; u=(a&(1<<i) -1).toString(32), a>>=i, n-=i, Dt=1<<32-it(t) +n|l<<n|a, kt=u+e
    } else
    Dt=1<<u|l<<n|a, kt=e
  }
  function Ti(e) {
    e.return!==null&&(Bt(e, 1), yf(e, 1, 0))
  }
  function Ei(e) {
    for(; e===Ln;) Ln=na[--ua], na[ua]=null, Qa=na[--ua], na[ua]=null; for(; e===al;) al=yt[--pt], yt[pt]=null, kt=yt[--pt], yt[pt]=null, Dt=yt[--pt], yt[pt]=null
  }
  function pf(e, t) {
    yt[pt++]=Dt, yt[pt++]=kt, yt[pt++]=al, Dt=t.id, kt=t.overflow, al=e
  }
  var Be=null, he=null, I=!1, nl=null, St=!1, Ai=Error(b(519)); function ul(e) {
    var t=Error(b(418, 1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text" :"HTML", "")); throw Xa(vt(t, e)), Ai
  }
  function Sf(e) {
    var t=e.stateNode, l=e.type, a=e.memoizedProps; switch(t[qe]=e, t[Ke]=a, l) {
      case"dialog" :K("cancel", t), K("close", t); break; case"iframe" :case"object" :case"embed" :K("load", t); break; case"video" :case"audio" :for(l=0; l<on.length; l++) K(on[l], t); break; case"source" :K("error", t); break; case"img" :case"image" :case"link" :K("error", t), K("load", t); break; case"details" :K("toggle", t); break; case"input" :K("invalid", t), ws(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0); break; case"select" :K("invalid", t); break; case"textarea" :K("invalid", t), Cs(t, a.value, a.defaultValue, a.children)
    }
    l=a.children, typeof l!="string" &&typeof l!="number" &&typeof l!="bigint" ||t.textContent==="" +l||a.suppressHydrationWarning===!0||q0(t.textContent, l) ?(a.popover!=null&&(K("beforetoggle", t), K("toggle", t)), a.onScroll!=null&&K("scroll", t), a.onScrollEnd!=null&&K("scrollend", t), a.onClick!=null&&(t.onclick=Ht), t=!0) :t=!1, t||ul(e, !0)
  }
  function jf(e) {
    for(Be=e.return; Be;) switch(Be.tag) {
      case 5:case 31:case 13:St=!1; return; case 27:case 3:St=!0; return; default:Be=Be.return
    }
  }
  function ia(e) {
    if(e!==Be) return!1; if(!I) return jf(e), I=!0, !1; var t=e.tag, l; if((l=t!==3&&t!==27) &&((l=t===5) &&(l=e.type, l=!(l!=="form" &&l!=="button") ||Zc(e.type, e.memoizedProps)), l=!l), l&&he&&ul(e), jf(e), t===13) {
      if(e=e.memoizedState, e=e!==null?e.dehydrated:null, !e) throw Error(b(317)); he=K0(e)
    } else
    if(t===31) {
      if(e=e.memoizedState, e=e!==null?e.dehydrated:null, !e) throw Error(b(317)); he=K0(e)
    } else
    t===27?(t=he, yl(e.type) ?(e=Wc, Wc=null, he=e) :he=t) :he=Be?Nt(e.stateNode.nextSibling) :null; return!0
  }
  function wl() {
    he=Be=null, I=!1
  }
  function _i() {
    var e=nl; return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie, e), nl=null), e
  }
  function Xa(e) {
    nl===null?nl=[e]:nl.push(e)
  }
  var Mi=d(null), Ul=null, Yt=null; function il(e, t, l) {
    A(Mi, t._currentValue), t._currentValue=l
  }
  function Gt(e) {
    e._currentValue=Mi.current, N(Mi)
  }
  function Oi(e, t, l) {
    for(; e!==null;) {
      var a=e.alternate; if((e.childLanes&t) !==t?(e.childLanes|=t, a!==null&&(a.childLanes|=t)) :a!==null&&(a.childLanes&t) !==t&&(a.childLanes|=t), e===l) break; e=e.return
    }
  }
  function Di(e, t, l, a) {
    var n=e.child; for(n!==null&&(n.return=e); n!==null;) {
      var u=n.dependencies; if(u!==null) {
        var i=n.child; u=u.firstContext; e:for(; u!==null;) {
          var s=u; u=n; for(var f=0; f<t.length; f++) if(s.context===t[f]) {
            u.lanes|=l, s=u.alternate, s!==null&&(s.lanes|=l), Oi(u.return, l, e), a||(i=null); break e
          }
          u=s.next
        }
      } else
      if(n.tag===18) {
        if(i=n.return, i===null) throw Error(b(341)); i.lanes|=l, u=i.alternate, u!==null&&(u.lanes|=l), Oi(i, l, e), i=null
      } else
      i=n.child; if(i!==null) i.return=n; else for(i=n; i!==null;) {
        if(i===e) {
          i=null; break
        }
        if(n=i.sibling, n!==null) {
          n.return=i.return, i=n; break
        }
        i=i.return
      }
      n=i
    }
  }
  function ca(e, t, l, a) {
    e=null; for(var n=t, u=!1; n!==null;) {
      if(!u) {
        if((n.flags&524288) !==0) u=!0; else if((n.flags&262144) !==0) break
      }
      if(n.tag===10) {
        var i=n.alternate; if(i===null) throw Error(b(387)); if(i=i.memoizedProps, i!==null) {
          var s=n.type; ct(n.pendingProps.value, i.value) ||(e!==null?e.push(s) :e=[s])
        }
      } else
      if(n===L.current) {
        if(i=n.alternate, i===null) throw Error(b(387)); i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(gn) :e=[gn])
      }
      n=n.return
    }
    e!==null&&Di(t, e, l, a), t.flags|=262144
  }
  function Zn(e) {
    for(e=e.firstContext; e!==null;) {
      if(!ct(e.context._currentValue, e.memoizedValue)) return!0; e=e.next
    }
    return!1
  }
  function Cl(e) {
    Ul=e, Yt=null, e=e.dependencies, e!==null&&(e.firstContext=null)
  }
  function Ye(e) {
    return Nf(Ul, e)
  }
  function Vn(e, t) {
    return Ul===null&&Cl(e), Nf(e, t)
  }
  function Nf(e, t) {
    var l=t._currentValue; if(t= {
      context:t, memoizedValue:l, next:null
    },
    Yt===null) {
      if(e===null) throw Error(b(308)); Yt=t, e.dependencies= {
        lanes:0, firstContext:t
      },
      e.flags|=524288
    } else
    Yt=Yt.next=t; return l
  }
  var Lo=typeof AbortController<"u" ?AbortController:function() {
    var e=[], t=this.signal= {
      aborted:!1, addEventListener:function(l, a) {
        e.push(a)
      }
    };
    this.abort=function() {
      t.aborted=!0, e.forEach(function(l) {
        return l()
      })
    }
  },
  Zo=T.unstable_scheduleCallback, Vo=T.unstable_NormalPriority, ze= {
    $$typeof:ke, Consumer:null, Provider:null, _currentValue:null, _currentValue2:null, _threadCount:0
  };
  function ki() {
    return {
      controller:new Lo, data:new Map, refCount:0
    }
  }
  function La(e) {
    e.refCount--, e.refCount===0&&Zo(Vo, function() {
      e.controller.abort()
    })
  }
  var Za=null, wi=0, sa=0, fa=null; function Ko(e, t) {
    if(Za===null) {
      var l=Za=[]; wi=0, sa=Hc(), fa= {
        status:"pending", value:void 0, then:function(a) {
          l.push(a)
        }
      }
    }
    return wi++, t.then(zf, zf), t
  }
  function zf() {
    if(--wi===0&&Za!==null) {
      fa!==null&&(fa.status="fulfilled"); var e=Za; Za=null, sa=0, fa=null; for(var t=0; t<e.length; t++)(0, e[t])()
    }
  }
  function Jo(e, t) {
    var l=[], a= {
      status:"pending", value:null, reason:null, then:function(n) {
        l.push(n)
      }
    };
    return e.then(function() {
      a.status="fulfilled", a.value=t; for(var n=0; n<l.length; n++)(0, l[n])(t)
    },
    function(n) {
      for(a.status="rejected", a.reason=n, n=0; n<l.length; n++)(0, l[n])(void 0)
    }),
    a
  }
  var Tf=y.S; y.S=function(e, t) {
    s0=nt(), typeof t=="object" &&t!==null&&typeof t.then=="function" &&Ko(e, t), Tf!==null&&Tf(e, t)
  };
  var Hl=d(null); function Ui() {
    var e=Hl.current; return e!==null?e:re.pooledCache
  }
  function Kn(e, t) {
    t===null?A(Hl, Hl.current) :A(Hl, t.pool)
  }
  function Ef() {
    var e=Ui(); return e===null?null: {
      parent:ze._currentValue, pool:e
    }
  }
  var ra=Error(b(460)), Ci=Error(b(474)), Jn=Error(b(542)), $n= {
    then:function() {
    }
  };
  function Af(e) {
    return e=e.status, e==="fulfilled" ||e==="rejected"
  }
  function _f(e, t, l) {
    switch(l=e[l], l===void 0?e.push(t) :l!==t&&(t.then(Ht, Ht), t=l), t.status) {
      case"fulfilled" :return t.value; case"rejected" :throw e=t.reason, Of(e), e; default:if(typeof t.status=="string") t.then(Ht, Ht); else {
        if(e=re, e!==null&&100<e.shellSuspendCounter) throw Error(b(482)); e=t, e.status="pending", e.then(function(a) {
          if(t.status==="pending") {
            var n=t; n.status="fulfilled", n.value=a
          }
        },
        function(a) {
          if(t.status==="pending") {
            var n=t; n.status="rejected", n.reason=a
          }
        })
      }
      switch(t.status) {
        case"fulfilled" :return t.value; case"rejected" :throw e=t.reason, Of(e), e
      }
      throw ql=t, ra
    }
  }
  function Rl(e) {
    try {
      var t=e._init; return t(e._payload)
    } catch
    (l) {
      throw l!==null&&typeof l=="object" &&typeof l.then=="function" ?(ql=l, ra) :l
    }
  }
  var ql=null; function Mf() {
    if(ql===null) throw Error(b(459)); var e=ql; return ql=null, e
  }
  function Of(e) {
    if(e===ra||e===Jn) throw Error(b(483))
  }
  var da=null, Va=0; function Wn(e) {
    var t=Va; return Va+=1, da===null&&(da=[]), _f(da, e, t)
  }
  function Ka(e, t) {
    t=t.props.ref, e.ref=t!==void 0?t:null
  }
  function Fn(e, t) {
    throw t.$$typeof===ne?Error(b(525)) :(e=Object.prototype.toString.call(t), Error(b(31, e==="[object Object]" ?"object with keys {" +Object.keys(t).join(", ") +"}" :e)))
  }
  function Df(e) {
    function t(o, r) {
      if(e) {
        var m=o.deletions; m===null?(o.deletions=[r], o.flags|=16) :m.push(r)
      }
    }
    function l(o, r) {
      if(!e) return null; for(; r!==null;) t(o, r), r=r.sibling; return null
    }
    function a(o) {
      for(var r=new Map; o!==null;) o.key!==null?r.set(o.key, o) :r.set(o.index, o), o=o.sibling; return r
    }
    function n(o, r) {
      return o=qt(o, r), o.index=0, o.sibling=null, o
    }
    function u(o, r, m) {
      return o.index=m, e?(m=o.alternate, m!==null?(m=m.index, m<r?(o.flags|=67108866, r) :m) :(o.flags|=67108866, r)) :(o.flags|=1048576, r)
    }
    function i(o) {
      return e&&o.alternate===null&&(o.flags|=67108866), o
    }
    function s(o, r, m, S) {
      return r===null||r.tag!==6?(r=Ni(m, o.mode, S), r.return=o, r) :(r=n(r, m), r.return=o, r)
    }
    function f(o, r, m, S) {
      var k=m.type; return k===_e?p(o, r, m.props.children, S, m.key) :r!==null&&(r.elementType===k||typeof k=="object" &&k!==null&&k.$$typeof===de&&Rl(k) ===r.type) ?(r=n(r, m.props), Ka(r, m), r.return=o, r) :(r=Xn(m.type, m.key, m.props, null, o.mode, S), Ka(r, m), r.return=o, r)
    }
    function h(o, r, m, S) {
      return r===null||r.tag!==4||r.stateNode.containerInfo!==m.containerInfo||r.stateNode.implementation!==m.implementation?(r=zi(m, o.mode, S), r.return=o, r) :(r=n(r, m.children||[]), r.return=o, r)
    }
    function p(o, r, m, S, k) {
      return r===null||r.tag!==7?(r=kl(m, o.mode, S, k), r.return=o, r) :(r=n(r, m), r.return=o, r)
    }
    function j(o, r, m) {
      if(typeof r=="string" &&r!=="" ||typeof r=="number" ||typeof r=="bigint") return r=Ni("" +r, o.mode, m), r.return=o, r; if(typeof r=="object" &&r!==null) {
        switch(r.$$typeof) {
          case Ce:return m=Xn(r.type, r.key, r.props, null, o.mode, m), Ka(m, r), m.return=o, m; case Oe:return r=zi(r, o.mode, m), r.return=o, r; case de:return r=Rl(r), j(o, r, m)
        }
        if(at(r) ||Re(r)) return r=kl(r, o.mode, m, null), r.return=o, r; if(typeof r.then=="function") return j(o, Wn(r), m); if(r.$$typeof===ke) return j(o, Vn(o, r), m); Fn(o, r)
      }
      return null
    }
    function g(o, r, m, S) {
      var k=r!==null?r.key:null; if(typeof m=="string" &&m!=="" ||typeof m=="number" ||typeof m=="bigint") return k!==null?null:s(o, r, "" +m, S); if(typeof m=="object" &&m!==null) {
        switch(m.$$typeof) {
          case Ce:return m.key===k?f(o, r, m, S) :null; case Oe:return m.key===k?h(o, r, m, S) :null; case de:return m=Rl(m), g(o, r, m, S)
        }
        if(at(m) ||Re(m)) return k!==null?null:p(o, r, m, S, null); if(typeof m.then=="function") return g(o, r, Wn(m), S); if(m.$$typeof===ke) return g(o, r, Vn(o, m), S); Fn(o, m)
      }
      return null
    }
    function v(o, r, m, S, k) {
      if(typeof S=="string" &&S!=="" ||typeof S=="number" ||typeof S=="bigint") return o=o.get(m) ||null, s(r, o, "" +S, k); if(typeof S=="object" &&S!==null) {
        switch(S.$$typeof) {
          case Ce:return o=o.get(S.key===null?m:S.key) ||null, f(r, o, S, k); case Oe:return o=o.get(S.key===null?m:S.key) ||null, h(r, o, S, k); case de:return S=Rl(S), v(o, r, m, S, k)
        }
        if(at(S) ||Re(S)) return o=o.get(m) ||null, p(r, o, S, k, null); if(typeof S.then=="function") return v(o, r, m, Wn(S), k); if(S.$$typeof===ke) return v(o, r, m, Vn(r, S), k); Fn(r, S)
      }
      return null
    }
    function M(o, r, m, S) {
      for(var k=null, ee=null, O=r, X=r=0, $=null; O!==null&&X<m.length; X++) {
        O.index>X?($=O, O=null) :$=O.sibling; var te=g(o, O, m[X], S); if(te===null) {
          O===null&&(O=$); break
        }
        e&&O&&te.alternate===null&&t(o, O), r=u(te, r, X), ee===null?k=te:ee.sibling=te, ee=te, O=$
      }
      if(X===m.length) return l(o, O), I&&Bt(o, X), k; if(O===null) {
        for(; X<m.length; X++) O=j(o, m[X], S), O!==null&&(r=u(O, r, X), ee===null?k=O:ee.sibling=O, ee=O); return I&&Bt(o, X), k
      }
      for(O=a(O); X<m.length; X++) $=v(O, o, X, m[X], S), $!==null&&(e&&$.alternate!==null&&O.delete($.key===null?X:$.key), r=u($, r, X), ee===null?k=$:ee.sibling=$, ee=$); return e&&O.forEach(function(zl) {
        return t(o, zl)
      }),
      I&&Bt(o, X), k
    }
    function U(o, r, m, S) {
      if(m==null) throw Error(b(151)); for(var k=null, ee=null, O=r, X=r=0, $=null, te=m.next(); O!==null&&!te.done; X++, te=m.next()) {
        O.index>X?($=O, O=null) :$=O.sibling; var zl=g(o, O, te.value, S); if(zl===null) {
          O===null&&(O=$); break
        }
        e&&O&&zl.alternate===null&&t(o, O), r=u(zl, r, X), ee===null?k=zl:ee.sibling=zl, ee=zl, O=$
      }
      if(te.done) return l(o, O), I&&Bt(o, X), k; if(O===null) {
        for(; !te.done; X++, te=m.next()) te=j(o, te.value, S), te!==null&&(r=u(te, r, X), ee===null?k=te:ee.sibling=te, ee=te); return I&&Bt(o, X), k
      }
      for(O=a(O); !te.done; X++, te=m.next()) te=v(O, o, X, te.value, S), te!==null&&(e&&te.alternate!==null&&O.delete(te.key===null?X:te.key), r=u(te, r, X), ee===null?k=te:ee.sibling=te, ee=te); return e&&O.forEach(function(uh) {
        return t(o, uh)
      }),
      I&&Bt(o, X), k
    }
    function fe(o, r, m, S) {
      if(typeof m=="object" &&m!==null&&m.type===_e&&m.key===null&&(m=m.props.children), typeof m=="object" &&m!==null) {
        switch(m.$$typeof) {
          case Ce:e: {
            for(var k=m.key; r!==null;) {
              if(r.key===k) {
                if(k=m.type, k===_e) {
                  if(r.tag===7) {
                    l(o, r.sibling), S=n(r, m.props.children), S.return=o, o=S; break e
                  }
                } else
                if(r.elementType===k||typeof k=="object" &&k!==null&&k.$$typeof===de&&Rl(k) ===r.type) {
                  l(o, r.sibling), S=n(r, m.props), Ka(S, m), S.return=o, o=S; break e
                }
                l(o, r); break
              } else
              t(o, r); r=r.sibling
            }
            m.type===_e?(S=kl(m.props.children, o.mode, S, m.key), S.return=o, o=S) :(S=Xn(m.type, m.key, m.props, null, o.mode, S), Ka(S, m), S.return=o, o=S)
          }
          return i(o); case Oe:e: {
            for(k=m.key; r!==null;) {
              if(r.key===k) if(r.tag===4&&r.stateNode.containerInfo===m.containerInfo&&r.stateNode.implementation===m.implementation) {
                l(o, r.sibling), S=n(r, m.children||[]), S.return=o, o=S; break e
              } else
              {
                l(o, r); break
              } else
              t(o, r); r=r.sibling
            }
            S=zi(m, o.mode, S), S.return=o, o=S
          }
          return i(o); case de:return m=Rl(m), fe(o, r, m, S)
        }
        if(at(m)) return M(o, r, m, S); if(Re(m)) {
          if(k=Re(m), typeof k!="function") throw Error(b(150)); return m=k.call(m), U(o, r, m, S)
        }
        if(typeof m.then=="function") return fe(o, r, Wn(m), S); if(m.$$typeof===ke) return fe(o, r, Vn(o, m), S); Fn(o, m)
      }
      return typeof m=="string" &&m!=="" ||typeof m=="number" ||typeof m=="bigint" ?(m="" +m, r!==null&&r.tag===6?(l(o, r.sibling), S=n(r, m), S.return=o, o=S) :(l(o, r), S=Ni(m, o.mode, S), S.return=o, o=S), i(o)) :l(o, r)
    }
    return function(o, r, m, S) {
      try {
        Va=0; var k=fe(o, r, m, S); return da=null, k
      } catch
      (O) {
        if(O===ra||O===Jn) throw O; var ee=st(29, O, null, o.mode); return ee.lanes=S, ee.return=o, ee
      } finally
      {
      }
    }
  }
  var Bl=Df(!0), kf=Df(!1), cl=!1; function Hi(e) {
    e.updateQueue= {
      baseState:e.memoizedState, firstBaseUpdate:null, lastBaseUpdate:null, shared: {
        pending:null, lanes:0, hiddenCallbacks:null
      },
      callbacks:null
    }
  }
  function Ri(e, t) {
    e=e.updateQueue, t.updateQueue===e&&(t.updateQueue= {
      baseState:e.baseState, firstBaseUpdate:e.firstBaseUpdate, lastBaseUpdate:e.lastBaseUpdate, shared:e.shared, callbacks:null
    })
  }
  function sl(e) {
    return {
      lane:e, tag:0, payload:null, callback:null, next:null
    }
  }
  function fl(e, t, l) {
    var a=e.updateQueue; if(a===null) return null; if(a=a.shared, (ae&2) !==0) {
      var n=a.pending; return n===null?t.next=t:(t.next=n.next, n.next=t), a.pending=t, t=Qn(e), bf(e, null, l), t
    }
    return Gn(e, a, t, l), Qn(e)
  }
  function Ja(e, t, l) {
    if(t=t.updateQueue, t!==null&&(t=t.shared, (l&4194048) !==0)) {
      var a=t.lanes; a&=e.pendingLanes, l|=a, t.lanes=l, js(e, l)
    }
  }
  function qi(e, t) {
    var l=e.updateQueue, a=e.alternate; if(a!==null&&(a=a.updateQueue, l===a)) {
      var n=null, u=null; if(l=l.firstBaseUpdate, l!==null) {
        do {
          var i= {
            lane:l.lane, tag:l.tag, payload:l.payload, callback:null, next:null
          };
          u===null?n=u=i:u=u.next=i, l=l.next
        } while
        (l!==null); u===null?n=u=t:u=u.next=t
      } else
      n=u=t; l= {
        baseState:a.baseState, firstBaseUpdate:n, lastBaseUpdate:u, shared:a.shared, callbacks:a.callbacks
      },
      e.updateQueue=l; return
    }
    e=l.lastBaseUpdate, e===null?l.firstBaseUpdate=t:e.next=t, l.lastBaseUpdate=t
  }
  var Bi=!1; function $a() {
    if(Bi) {
      var e=fa; if(e!==null) throw e
    }
  }
  function Wa(e, t, l, a) {
    Bi=!1; var n=e.updateQueue; cl=!1; var u=n.firstBaseUpdate, i=n.lastBaseUpdate, s=n.shared.pending; if(s!==null) {
      n.shared.pending=null; var f=s, h=f.next; f.next=null, i===null?u=h:i.next=h, i=f; var p=e.alternate; p!==null&&(p=p.updateQueue, s=p.lastBaseUpdate, s!==i&&(s===null?p.firstBaseUpdate=h:s.next=h, p.lastBaseUpdate=f))
    }
    if(u!==null) {
      var j=n.baseState; i=0, p=h=f=null, s=u; do {
        var g=s.lane&-536870913, v=g!==s.lane; if(v?(J&g) ===g:(a&g) ===g) {
          g!==0&&g===sa&&(Bi=!0), p!==null&&(p=p.next= {
            lane:0, tag:s.tag, payload:s.payload, callback:null, next:null
          });
          e: {
            var M=e, U=s; g=t; var fe=l; switch(U.tag) {
              case 1:if(M=U.payload, typeof M=="function") {
                j=M.call(fe, j, g); break e
              }
              j=M; break e; case 3:M.flags=M.flags&-65537|128; case 0:if(M=U.payload, g=typeof M=="function" ?M.call(fe, j, g) :M, g==null) break e; j=C({
              },
              j, g); break e; case 2:cl=!0
            }
          }
          g=s.callback, g!==null&&(e.flags|=64, v&&(e.flags|=8192), v=n.callbacks, v===null?n.callbacks=[g]:v.push(g))
        } else
        v= {
          lane:g, tag:s.tag, payload:s.payload, callback:s.callback, next:null
        },
        p===null?(h=p=v, f=j) :p=p.next=v, i|=g; if(s=s.next, s===null) {
          if(s=n.shared.pending, s===null) break; v=s, s=v.next, v.next=null, n.lastBaseUpdate=v, n.shared.pending=null
        }
      } while
      (!0); p===null&&(f=j), n.baseState=f, n.firstBaseUpdate=h, n.lastBaseUpdate=p, u===null&&(n.shared.lanes=0), hl|=i, e.lanes=i, e.memoizedState=j
    }
  }
  function wf(e, t) {
    if(typeof e!="function") throw Error(b(191, e)); e.call(t)
  }
  function Uf(e, t) {
    var l=e.callbacks; if(l!==null) for(e.callbacks=null, e=0; e<l.length; e++) wf(l[e], t)
  }
  var oa=d(null), In=d(0); function Cf(e, t) {
    e=Wt, A(In, e), A(oa, t), Wt=e|t.baseLanes
  }
  function Yi() {
    A(In, Wt), A(oa, oa.current)
  }
  function Gi() {
    Wt=In.current, N(oa), N(In)
  }
  var ft=d(null), jt=null; function rl(e) {
    var t=e.alternate; A(je, je.current&1), A(ft, e), jt===null&&(t===null||oa.current!==null||t.memoizedState!==null) &&(jt=e)
  }
  function Qi(e) {
    A(je, je.current), A(ft, e), jt===null&&(jt=e)
  }
  function Hf(e) {
    e.tag===22?(A(je, je.current), A(ft, e), jt===null&&(jt=e)) :dl()
  }
  function dl() {
    A(je, je.current), A(ft, ft.current)
  }
  function rt(e) {
    N(ft), jt===e&&(jt=null), N(je)
  }
  var je=d(0); function Pn(e) {
    for(var t=e; t!==null;) {
      if(t.tag===13) {
        var l=t.memoizedState; if(l!==null&&(l=l.dehydrated, l===null||Jc(l) ||$c(l))) return t
      } else
      if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards" ||t.memoizedProps.revealOrder==="backwards" ||t.memoizedProps.revealOrder==="unstable_legacy-backwards" ||t.memoizedProps.revealOrder==="together")) {
        if((t.flags&128) !==0) return t
      } else
      if(t.child!==null) {
        t.child.return=t, t=t.child; continue
      }
      if(t===e) break; for(; t.sibling===null;) {
        if(t.return===null||t.return===e) return null; t=t.return
      }
      t.sibling.return=t.return, t=t.sibling
    }
    return null
  }
  var Qt=0, Q=null, ce=null, Te=null, eu=!1, ma=!1, Yl=!1, tu=0, Fa=0, ha=null, $o=0; function pe() {
    throw Error(b(321))
  }
  function Xi(e, t) {
    if(t===null) return!1; for(var l=0; l<t.length&&l<e.length; l++) if(!ct(e[l], t[l])) return!1; return!0
  }
  function Li(e, t, l, a, n, u) {
    return Qt=u, Q=t, t.memoizedState=null, t.updateQueue=null, t.lanes=0, y.H=e===null||e.memoizedState===null?yr:uc, Yl=!1, u=l(a, n), Yl=!1, ma&&(u=qf(t, l, a, n)), Rf(e), u
  }
  function Rf(e) {
    y.H=en; var t=ce!==null&&ce.next!==null; if(Qt=0, Te=ce=Q=null, eu=!1, Fa=0, ha=null, t) throw Error(b(300)); e===null||Ee||(e=e.dependencies, e!==null&&Zn(e) &&(Ee=!0))
  }
  function qf(e, t, l, a) {
    Q=e; var n=0; do {
      if(ma&&(ha=null), Fa=0, ma=!1, 25<=n) throw Error(b(301)); if(n+=1, Te=ce=null, e.updateQueue!=null) {
        var u=e.updateQueue; u.lastEffect=null, u.events=null, u.stores=null, u.memoCache!=null&&(u.memoCache.index=0)
      }
      y.H=pr, u=t(l, a)
    } while
    (ma); return u
  }
  function Wo() {
    var e=y.H, t=e.useState() [0]; return t=typeof t.then=="function" ?Ia(t) :t, e=e.useState() [0], (ce!==null?ce.memoizedState:null) !==e&&(Q.flags|=1024), t
  }
  function Zi() {
    var e=tu!==0; return tu=0, e
  }
  function Vi(e, t, l) {
    t.updateQueue=e.updateQueue, t.flags&=-2053, e.lanes&=~l
  }
  function Ki(e) {
    if(eu) {
      for(e=e.memoizedState; e!==null;) {
        var t=e.queue; t!==null&&(t.pending=null), e=e.next
      }
      eu=!1
    }
    Qt=0, Te=ce=Q=null, ma=!1, Fa=tu=0, ha=null
  }
  function Ve() {
    var e= {
      memoizedState:null, baseState:null, baseQueue:null, queue:null, next:null
    };
    return Te===null?Q.memoizedState=Te=e:Te=Te.next=e, Te
  }
  function Ne() {
    if(ce===null) {
      var e=Q.alternate; e=e!==null?e.memoizedState:null
    } else
    e=ce.next; var t=Te===null?Q.memoizedState:Te.next; if(t!==null) Te=t, ce=e; else {
      if(e===null) throw Q.alternate===null?Error(b(467)) :Error(b(310)); ce=e, e= {
        memoizedState:ce.memoizedState, baseState:ce.baseState, baseQueue:ce.baseQueue, queue:ce.queue, next:null
      },
      Te===null?Q.memoizedState=Te=e:Te=Te.next=e
    }
    return Te
  }
  function lu() {
    return {
      lastEffect:null, events:null, stores:null, memoCache:null
    }
  }
  function Ia(e) {
    var t=Fa; return Fa+=1, ha===null&&(ha=[]), e=_f(ha, e, t), t=Q, (Te===null?t.memoizedState:Te.next) ===null&&(t=t.alternate, y.H=t===null||t.memoizedState===null?yr:uc), e
  }
  function au(e) {
    if(e!==null&&typeof e=="object") {
      if(typeof e.then=="function") return Ia(e); if(e.$$typeof===ke) return Ye(e)
    }
    throw Error(b(438, String(e)))
  }
  function Ji(e) {
    var t=null, l=Q.updateQueue; if(l!==null&&(t=l.memoCache), t==null) {
      var a=Q.alternate; a!==null&&(a=a.updateQueue, a!==null&&(a=a.memoCache, a!=null&&(t= {
        data:a.data.map(function(n) {
          return n.slice()
        }),
        index:0
      })))
    }
    if(t==null&&(t= {
      data:[], index:0
    }),
    l===null&&(l=lu(), Q.updateQueue=l), l.memoCache=t, l=t.data[t.index], l===void 0) for(l=t.data[t.index]=Array(e), a=0; a<e; a++) l[a]=Pt; return t.index++, l
  }
  function Xt(e, t) {
    return typeof t=="function" ?t(e) :t
  }
  function nu(e) {
    var t=Ne(); return $i(t, ce, e)
  }
  function $i(e, t, l) {
    var a=e.queue; if(a===null) throw Error(b(311)); a.lastRenderedReducer=l; var n=e.baseQueue, u=a.pending; if(u!==null) {
      if(n!==null) {
        var i=n.next; n.next=u.next, u.next=i
      }
      t.baseQueue=n=u, a.pending=null
    }
    if(u=e.baseState, n===null) e.memoizedState=u; else {
      t=n.next; var s=i=null, f=null, h=t, p=!1; do {
        var j=h.lane&-536870913; if(j!==h.lane?(J&j) ===j:(Qt&j) ===j) {
          var g=h.revertLane; if(g===0) f!==null&&(f=f.next= {
            lane:0, revertLane:0, gesture:null, action:h.action, hasEagerState:h.hasEagerState, eagerState:h.eagerState, next:null
          }),
          j===sa&&(p=!0); else if((Qt&g) ===g) {
            h=h.next, g===sa&&(p=!0); continue
          } else
          j= {
            lane:0, revertLane:h.revertLane, gesture:null, action:h.action, hasEagerState:h.hasEagerState, eagerState:h.eagerState, next:null
          },
          f===null?(s=f=j, i=u) :f=f.next=j, Q.lanes|=g, hl|=g; j=h.action, Yl&&l(u, j), u=h.hasEagerState?h.eagerState:l(u, j)
        } else
        g= {
          lane:j, revertLane:h.revertLane, gesture:h.gesture, action:h.action, hasEagerState:h.hasEagerState, eagerState:h.eagerState, next:null
        },
        f===null?(s=f=g, i=u) :f=f.next=g, Q.lanes|=j, hl|=j; h=h.next
      } while
      (h!==null&&h!==t); if(f===null?i=u:f.next=s, !ct(u, e.memoizedState) &&(Ee=!0, p&&(l=fa, l!==null))) throw l; e.memoizedState=u, e.baseState=i, e.baseQueue=f, a.lastRenderedState=u
    }
    return n===null&&(a.lanes=0), [e.memoizedState, a.dispatch]
  }
  function Wi(e) {
    var t=Ne(), l=t.queue; if(l===null) throw Error(b(311)); l.lastRenderedReducer=e; var a=l.dispatch, n=l.pending, u=t.memoizedState; if(n!==null) {
      l.pending=null; var i=n=n.next; do u=e(u, i.action), i=i.next; while(i!==n); ct(u, t.memoizedState) ||(Ee=!0), t.memoizedState=u, t.baseQueue===null&&(t.baseState=u), l.lastRenderedState=u
    }
    return[u, a]
  }
  function Bf(e, t, l) {
    var a=Q, n=Ne(), u=I; if(u) {
      if(l===void 0) throw Error(b(407)); l=l()
    } else
    l=t(); var i=!ct((ce||n).memoizedState, l); if(i&&(n.memoizedState=l, Ee=!0), n=n.queue, Pi(Qf.bind(null, a, n, e), [e]), n.getSnapshot!==t||i||Te!==null&&Te.memoizedState.tag&1) {
      if(a.flags|=2048, ba(9, {
        destroy:void 0
      },
      Gf.bind(null, a, n, l, t), null), re===null) throw Error(b(349)); u||(Qt&127) !==0||Yf(a, t, l)
    }
    return l
  }
  function Yf(e, t, l) {
    e.flags|=16384, e= {
      getSnapshot:t, value:l
    },
    t=Q.updateQueue, t===null?(t=lu(), Q.updateQueue=t, t.stores=[e]) :(l=t.stores, l===null?t.stores=[e]:l.push(e))
  }
  function Gf(e, t, l, a) {
    t.value=l, t.getSnapshot=a, Xf(t) &&Lf(e)
  }
  function Qf(e, t, l) {
    return l(function() {
      Xf(t) &&Lf(e)
    })
  }
  function Xf(e) {
    var t=e.getSnapshot; e=e.value; try {
      var l=t(); return!ct(e, l)
    } catch
    {
      return!0
    }
  }
  function Lf(e) {
    var t=Dl(e, 2); t!==null&&Pe(t, e, 2)
  }
  function Fi(e) {
    var t=Ve(); if(typeof e=="function") {
      var l=e; if(e=l(), Yl) {
        el(!0); try {
          l()
        } finally
        {
          el(!1)
        }
      }
    }
    return t.memoizedState=t.baseState=e, t.queue= {
      pending:null, lanes:0, dispatch:null, lastRenderedReducer:Xt, lastRenderedState:e
    },
    t
  }
  function Zf(e, t, l, a) {
    return e.baseState=l, $i(e, ce, typeof a=="function" ?a:Xt)
  }
  function Fo(e, t, l, a, n) {
    if(cu(e)) throw Error(b(485)); if(e=t.action, e!==null) {
      var u= {
        payload:n, action:e, next:null, isTransition:!0, status:"pending", value:null, reason:null, listeners:[], then:function(i) {
          u.listeners.push(i)
        }
      };
      y.T!==null?l(!0) :u.isTransition=!1, a(u), l=t.pending, l===null?(u.next=t.pending=u, Vf(t, u)) :(u.next=l.next, t.pending=l.next=u)
    }
  }
  function Vf(e, t) {
    var l=t.action, a=t.payload, n=e.state; if(t.isTransition) {
      var u=y.T, i= {
      };
      y.T=i; try {
        var s=l(n, a), f=y.S; f!==null&&f(i, s), Kf(e, t, s)
      } catch
      (h) {
        Ii(e, t, h)
      } finally
      {
        u!==null&&i.types!==null&&(u.types=i.types), y.T=u
      }
    } else
    try {
      u=l(n, a), Kf(e, t, u)
    } catch
    (h) {
      Ii(e, t, h)
    }
  }
  function Kf(e, t, l) {
    l!==null&&typeof l=="object" &&typeof l.then=="function" ?l.then(function(a) {
      Jf(e, t, a)
    },
    function(a) {
      return Ii(e, t, a)
    })
    :Jf(e, t, l)
  }
  function Jf(e, t, l) {
    t.status="fulfilled", t.value=l, $f(t), e.state=l, t=e.pending, t!==null&&(l=t.next, l===t?e.pending=null:(l=l.next, t.next=l, Vf(e, l)))
  }
  function Ii(e, t, l) {
    var a=e.pending; if(e.pending=null, a!==null) {
      a=a.next; do t.status="rejected", t.reason=l, $f(t), t=t.next; while(t!==a)
    }
    e.action=null
  }
  function $f(e) {
    e=e.listeners; for(var t=0; t<e.length; t++)(0, e[t])()
  }
  function Wf(e, t) {
    return t
  }
  function Ff(e, t) {
    if(I) {
      var l=re.formState; if(l!==null) {
        e: {
          var a=Q; if(I) {
            if(he) {
              t: {
                for(var n=he, u=St; n.nodeType!==8;) {
                  if(!u) {
                    n=null; break t
                  }
                  if(n=Nt(n.nextSibling), n===null) {
                    n=null; break t
                  }
                }
                u=n.data, n=u==="F!" ||u==="F" ?n:null
              }
              if(n) {
                he=Nt(n.nextSibling), a=n.data==="F!"; break e
              }
            }
            ul(a)
          }
          a=!1
        }
        a&&(t=l[0])
      }
    }
    return l=Ve(), l.memoizedState=l.baseState=t, a= {
      pending:null, lanes:0, dispatch:null, lastRenderedReducer:Wf, lastRenderedState:t
    },
    l.queue=a, l=xr.bind(null, Q, a), a.dispatch=l, a=Fi(!1), u=nc.bind(null, Q, !1, a.queue), a=Ve(), n= {
      state:t, dispatch:null, action:e, pending:null
    },
    a.queue=n, l=Fo.bind(null, Q, n, u, l), n.dispatch=l, a.memoizedState=e, [t, l, !1]
  }
  function If(e) {
    var t=Ne(); return Pf(t, ce, e)
  }
  function Pf(e, t, l) {
    if(t=$i(e, t, Wf) [0], e=nu(Xt) [0], typeof t=="object" &&t!==null&&typeof t.then=="function") try {
      var a=Ia(t)
    } catch
    (i) {
      throw i===ra?Jn:i
    } else
    a=t; t=Ne(); var n=t.queue, u=n.dispatch; return l!==t.memoizedState&&(Q.flags|=2048, ba(9, {
      destroy:void 0
    },
    Io.bind(null, n, l), null)), [a, u, e]
  }
  function Io(e, t) {
    e.action=t
  }
  function er(e) {
    var t=Ne(), l=ce; if(l!==null) return Pf(t, l, e); Ne(), t=t.memoizedState, l=Ne(); var a=l.queue.dispatch; return l.memoizedState=e, [t, a, !1]
  }
  function ba(e, t, l, a) {
    return e= {
      tag:e, create:l, deps:a, inst:t, next:null
    },
    t=Q.updateQueue, t===null&&(t=lu(), Q.updateQueue=t), l=t.lastEffect, l===null?t.lastEffect=e.next=e:(a=l.next, l.next=e, e.next=a, t.lastEffect=e), e
  }
  function tr() {
    return Ne().memoizedState
  }
  function uu(e, t, l, a) {
    var n=Ve(); Q.flags|=e, n.memoizedState=ba(1|t, {
      destroy:void 0
    },
    l, a===void 0?null:a)
  }
  function iu(e, t, l, a) {
    var n=Ne(); a=a===void 0?null:a; var u=n.memoizedState.inst; ce!==null&&a!==null&&Xi(a, ce.memoizedState.deps) ?n.memoizedState=ba(t, u, l, a) :(Q.flags|=e, n.memoizedState=ba(1|t, u, l, a))
  }
  function lr(e, t) {
    uu(8390656, 8, e, t)
  }
  function Pi(e, t) {
    iu(2048, 8, e, t)
  }
  function Po(e) {
    Q.flags|=4; var t=Q.updateQueue; if(t===null) t=lu(), Q.updateQueue=t, t.events=[e]; else {
      var l=t.events; l===null?t.events=[e]:l.push(e)
    }
  }
  function ar(e) {
    var t=Ne().memoizedState; return Po({
      ref:t, nextImpl:e
    }),
    function() {
      if((ae&2) !==0) throw Error(b(440)); return t.impl.apply(void 0, arguments)
    }
  }
  function nr(e, t) {
    return iu(4, 2, e, t)
  }
  function ur(e, t) {
    return iu(4, 4, e, t)
  }
  function ir(e, t) {
    if(typeof t=="function") {
      e=e(); var l=t(e); return function() {
        typeof l=="function" ?l() :t(null)
      }
    }
    if(t!=null) return e=e(), t.current=e, function() {
      t.current=null
    }
  }
  function cr(e, t, l) {
    l=l!=null?l.concat([e]) :null, iu(4, 4, ir.bind(null, t, e), l)
  }
  function ec() {
  }
  function sr(e, t) {
    var l=Ne(); t=t===void 0?null:t; var a=l.memoizedState; return t!==null&&Xi(t, a[1]) ?a[0]:(l.memoizedState=[e, t], e)
  }
  function fr(e, t) {
    var l=Ne(); t=t===void 0?null:t; var a=l.memoizedState; if(t!==null&&Xi(t, a[1])) return a[0]; if(a=e(), Yl) {
      el(!0); try {
        e()
      } finally
      {
        el(!1)
      }
    }
    return l.memoizedState=[a, t], a
  }
  function tc(e, t, l) {
    return l===void 0||(Qt&1073741824) !==0&&(J&261930) ===0?e.memoizedState=t:(e.memoizedState=l, e=r0(), Q.lanes|=e, hl|=e, l)
  }
  function rr(e, t, l, a) {
    return ct(l, t) ?l:oa.current!==null?(e=tc(e, l, a), ct(e, t) ||(Ee=!0), e) :(Qt&42) ===0||(Qt&1073741824) !==0&&(J&261930) ===0?(Ee=!0, e.memoizedState=l) :(e=r0(), Q.lanes|=e, hl|=e, t)
  }
  function dr(e, t, l, a, n) {
    var u=E.p; E.p=u!==0&&8>u?u:8; var i=y.T, s= {
    };
    y.T=s, nc(e, !1, t, l); try {
      var f=n(), h=y.S; if(h!==null&&h(s, f), f!==null&&typeof f=="object" &&typeof f.then=="function") {
        var p=Jo(f, a); Pa(e, t, p, mt(e))
      } else
      Pa(e, t, a, mt(e))
    } catch
    (j) {
      Pa(e, t, {
        then:function() {
        },
        status:"rejected", reason:j
      },
      mt())
    } finally
    {
      E.p=u, i!==null&&s.types!==null&&(i.types=s.types), y.T=i
    }
  }
  function em() {
  }
  function lc(e, t, l, a) {
    if(e.tag!==5) throw Error(b(476)); var n=or(e).queue; dr(e, n, t, H, l===null?em:function() {
      return mr(e), l(a)
    })
  }
  function or(e) {
    var t=e.memoizedState; if(t!==null) return t; t= {
      memoizedState:H, baseState:H, baseQueue:null, queue: {
        pending:null, lanes:0, dispatch:null, lastRenderedReducer:Xt, lastRenderedState:H
      },
      next:null
    };
    var l= {
    };
    return t.next= {
      memoizedState:l, baseState:l, baseQueue:null, queue: {
        pending:null, lanes:0, dispatch:null, lastRenderedReducer:Xt, lastRenderedState:l
      },
      next:null
    },
    e.memoizedState=t, e=e.alternate, e!==null&&(e.memoizedState=t), t
  }
  function mr(e) {
    var t=or(e); t.next===null&&(t=e.alternate.memoizedState), Pa(e, t.next.queue, {
    },
    mt())
  }
  function ac() {
    return Ye(gn)
  }
  function hr() {
    return Ne().memoizedState
  }
  function br() {
    return Ne().memoizedState
  }
  function tm(e) {
    for(var t=e.return; t!==null;) {
      switch(t.tag) {
        case 24:case 3:var l=mt(); e=sl(l); var a=fl(t, e, l); a!==null&&(Pe(a, t, l), Ja(a, t, l)), t= {
          cache:ki()
        },
        e.payload=t; return
      }
      t=t.return
    }
  }
  function lm(e, t, l) {
    var a=mt(); l= {
      lane:a, revertLane:0, gesture:null, action:l, hasEagerState:!1, eagerState:null, next:null
    },
    cu(e) ?gr(t, l) :(l=Si(e, t, l, a), l!==null&&(Pe(l, e, a), vr(l, t, a)))
  }
  function xr(e, t, l) {
    var a=mt(); Pa(e, t, l, a)
  }
  function Pa(e, t, l, a) {
    var n= {
      lane:a, revertLane:0, gesture:null, action:l, hasEagerState:!1, eagerState:null, next:null
    };
    if(cu(e)) gr(t, n); else {
      var u=e.alternate; if(e.lanes===0&&(u===null||u.lanes===0) &&(u=t.lastRenderedReducer, u!==null)) try {
        var i=t.lastRenderedState, s=u(i, l); if(n.hasEagerState=!0, n.eagerState=s, ct(s, i)) return Gn(e, t, n, 0), re===null&&Yn(), !1
      } catch
      {
      } finally
      {
      }
      if(l=Si(e, t, n, a), l!==null) return Pe(l, e, a), vr(l, t, a), !0
    }
    return!1
  }
  function nc(e, t, l, a) {
    if(a= {
      lane:2, revertLane:Hc(), gesture:null, action:a, hasEagerState:!1, eagerState:null, next:null
    },
    cu(e)) {
      if(t) throw Error(b(479))
    } else
    t=Si(e, l, a, 2), t!==null&&Pe(t, e, 2)
  }
  function cu(e) {
    var t=e.alternate; return e===Q||t!==null&&t===Q
  }
  function gr(e, t) {
    ma=eu=!0; var l=e.pending; l===null?t.next=t:(t.next=l.next, l.next=t), e.pending=t
  }
  function vr(e, t, l) {
    if((l&4194048) !==0) {
      var a=t.lanes; a&=e.pendingLanes, l|=a, t.lanes=l, js(e, l)
    }
  }
  var en= {
    readContext:Ye, use:au, useCallback:pe, useContext:pe, useEffect:pe, useImperativeHandle:pe, useLayoutEffect:pe, useInsertionEffect:pe, useMemo:pe, useReducer:pe, useRef:pe, useState:pe, useDebugValue:pe, useDeferredValue:pe, useTransition:pe, useSyncExternalStore:pe, useId:pe, useHostTransitionStatus:pe, useFormState:pe, useActionState:pe, useOptimistic:pe, useMemoCache:pe, useCacheRefresh:pe
  };
  en.useEffectEvent=pe; var yr= {
    readContext:Ye, use:au, useCallback:function(e, t) {
      return Ve().memoizedState=[e, t===void 0?null:t], e
    },
    useContext:Ye, useEffect:lr, useImperativeHandle:function(e, t, l) {
      l=l!=null?l.concat([e]) :null, uu(4194308, 4, ir.bind(null, t, e), l)
    },
    useLayoutEffect:function(e, t) {
      return uu(4194308, 4, e, t)
    },
    useInsertionEffect:function(e, t) {
      uu(4, 2, e, t)
    },
    useMemo:function(e, t) {
      var l=Ve(); t=t===void 0?null:t; var a=e(); if(Yl) {
        el(!0); try {
          e()
        } finally
        {
          el(!1)
        }
      }
      return l.memoizedState=[a, t], a
    },
    useReducer:function(e, t, l) {
      var a=Ve(); if(l!==void 0) {
        var n=l(t); if(Yl) {
          el(!0); try {
            l(t)
          } finally
          {
            el(!1)
          }
        }
      } else
      n=t; return a.memoizedState=a.baseState=n, e= {
        pending:null, lanes:0, dispatch:null, lastRenderedReducer:e, lastRenderedState:n
      },
      a.queue=e, e=e.dispatch=lm.bind(null, Q, e), [a.memoizedState, e]
    },
    useRef:function(e) {
      var t=Ve(); return e= {
        current:e
      },
      t.memoizedState=e
    },
    useState:function(e) {
      e=Fi(e); var t=e.queue, l=xr.bind(null, Q, t); return t.dispatch=l, [e.memoizedState, l]
    },
    useDebugValue:ec, useDeferredValue:function(e, t) {
      var l=Ve(); return tc(l, e, t)
    },
    useTransition:function() {
      var e=Fi(!1); return e=dr.bind(null, Q, e.queue, !0, !1), Ve().memoizedState=e, [!1, e]
    },
    useSyncExternalStore:function(e, t, l) {
      var a=Q, n=Ve(); if(I) {
        if(l===void 0) throw Error(b(407)); l=l()
      } else
      {
        if(l=t(), re===null) throw Error(b(349));(J&127) !==0||Yf(a, t, l)
      }
      n.memoizedState=l; var u= {
        value:l, getSnapshot:t
      };
      return n.queue=u, lr(Qf.bind(null, a, u, e), [e]), a.flags|=2048, ba(9, {
        destroy:void 0
      },
      Gf.bind(null, a, u, l, t), null), l
    },
    useId:function() {
      var e=Ve(), t=re.identifierPrefix; if(I) {
        var l=kt, a=Dt; l=(a&~(1<<32-it(a) -1)).toString(32) +l, t="_" +t+"R_" +l, l=tu++, 0<l&&(t+="H" +l.toString(32)), t+="_"
      } else
      l=$o++, t="_" +t+"r_" +l.toString(32) +"_"; return e.memoizedState=t
    },
    useHostTransitionStatus:ac, useFormState:Ff, useActionState:Ff, useOptimistic:function(e) {
      var t=Ve(); t.memoizedState=t.baseState=e; var l= {
        pending:null, lanes:0, dispatch:null, lastRenderedReducer:null, lastRenderedState:null
      };
      return t.queue=l, t=nc.bind(null, Q, !0, l), l.dispatch=t, [e, t]
    },
    useMemoCache:Ji, useCacheRefresh:function() {
      return Ve().memoizedState=tm.bind(null, Q)
    },
    useEffectEvent:function(e) {
      var t=Ve(), l= {
        impl:e
      };
      return t.memoizedState=l, function() {
        if((ae&2) !==0) throw Error(b(440)); return l.impl.apply(void 0, arguments)
      }
    }
  },
  uc= {
    readContext:Ye, use:au, useCallback:sr, useContext:Ye, useEffect:Pi, useImperativeHandle:cr, useInsertionEffect:nr, useLayoutEffect:ur, useMemo:fr, useReducer:nu, useRef:tr, useState:function() {
      return nu(Xt)
    },
    useDebugValue:ec, useDeferredValue:function(e, t) {
      var l=Ne(); return rr(l, ce.memoizedState, e, t)
    },
    useTransition:function() {
      var e=nu(Xt) [0], t=Ne().memoizedState; return[typeof e=="boolean" ?e:Ia(e), t]
    },
    useSyncExternalStore:Bf, useId:hr, useHostTransitionStatus:ac, useFormState:If, useActionState:If, useOptimistic:function(e, t) {
      var l=Ne(); return Zf(l, ce, e, t)
    },
    useMemoCache:Ji, useCacheRefresh:br
  };
  uc.useEffectEvent=ar; var pr= {
    readContext:Ye, use:au, useCallback:sr, useContext:Ye, useEffect:Pi, useImperativeHandle:cr, useInsertionEffect:nr, useLayoutEffect:ur, useMemo:fr, useReducer:Wi, useRef:tr, useState:function() {
      return Wi(Xt)
    },
    useDebugValue:ec, useDeferredValue:function(e, t) {
      var l=Ne(); return ce===null?tc(l, e, t) :rr(l, ce.memoizedState, e, t)
    },
    useTransition:function() {
      var e=Wi(Xt) [0], t=Ne().memoizedState; return[typeof e=="boolean" ?e:Ia(e), t]
    },
    useSyncExternalStore:Bf, useId:hr, useHostTransitionStatus:ac, useFormState:er, useActionState:er, useOptimistic:function(e, t) {
      var l=Ne(); return ce!==null?Zf(l, ce, e, t) :(l.baseState=e, [e, l.queue.dispatch])
    },
    useMemoCache:Ji, useCacheRefresh:br
  };
  pr.useEffectEvent=ar; function ic(e, t, l, a) {
    t=e.memoizedState, l=l(a, t), l=l==null?t:C({
    },
    t, l), e.memoizedState=l, e.lanes===0&&(e.updateQueue.baseState=l)
  }
  var cc= {
    enqueueSetState:function(e, t, l) {
      e=e._reactInternals; var a=mt(), n=sl(a); n.payload=t, l!=null&&(n.callback=l), t=fl(e, n, a), t!==null&&(Pe(t, e, a), Ja(t, e, a))
    },
    enqueueReplaceState:function(e, t, l) {
      e=e._reactInternals; var a=mt(), n=sl(a); n.tag=1, n.payload=t, l!=null&&(n.callback=l), t=fl(e, n, a), t!==null&&(Pe(t, e, a), Ja(t, e, a))
    },
    enqueueForceUpdate:function(e, t) {
      e=e._reactInternals; var l=mt(), a=sl(l); a.tag=2, t!=null&&(a.callback=t), t=fl(e, a, l), t!==null&&(Pe(t, e, l), Ja(t, e, l))
    }
  };
  function Sr(e, t, l, a, n, u, i) {
    return e=e.stateNode, typeof e.shouldComponentUpdate=="function" ?e.shouldComponentUpdate(a, u, i) :t.prototype&&t.prototype.isPureReactComponent?!Ya(l, a) ||!Ya(n, u) :!0
  }
  function jr(e, t, l, a) {
    e=t.state, typeof t.componentWillReceiveProps=="function" &&t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps=="function" &&t.UNSAFE_componentWillReceiveProps(l, a), t.state!==e&&cc.enqueueReplaceState(t, t.state, null)
  }
  function Gl(e, t) {
    var l=t; if("ref" in t) {
      l= {
      };
      for(var a in t) a!=="ref" &&(l[a]=t[a])
    }
    if(e=e.defaultProps) {
      l===t&&(l=C({
      },
      l)); for(var n in e) l[n]===void 0&&(l[n]=e[n])
    }
    return l
  }
  function Nr(e) {
    Bn(e)
  }
  function zr(e) {
    console.error(e)
  }
  function Tr(e) {
    Bn(e)
  }
  function su(e, t) {
    try {
      var l=e.onUncaughtError; l(t.value, {
        componentStack:t.stack
      })
    } catch
    (a) {
      setTimeout(function() {
        throw a
      })
    }
  }
  function Er(e, t, l) {
    try {
      var a=e.onCaughtError; a(l.value, {
        componentStack:l.stack, errorBoundary:t.tag===1?t.stateNode:null
      })
    } catch
    (n) {
      setTimeout(function() {
        throw n
      })
    }
  }
  function sc(e, t, l) {
    return l=sl(l), l.tag=3, l.payload= {
      element:null
    },
    l.callback=function() {
      su(e, t)
    },
    l
  }
  function Ar(e) {
    return e=sl(e), e.tag=3, e
  }
  function _r(e, t, l, a) {
    var n=l.type.getDerivedStateFromError; if(typeof n=="function") {
      var u=a.value; e.payload=function() {
        return n(u)
      },
      e.callback=function() {
        Er(t, l, a)
      }
    }
    var i=l.stateNode; i!==null&&typeof i.componentDidCatch=="function" &&(e.callback=function() {
      Er(t, l, a), typeof n!="function" &&(bl===null?bl=new Set([this]) :bl.add(this)); var s=a.stack; this.componentDidCatch(a.value, {
        componentStack:s!==null?s:""
      })
    })
  }
  function am(e, t, l, a, n) {
    if(l.flags|=32768, a!==null&&typeof a=="object" &&typeof a.then=="function") {
      if(t=l.alternate, t!==null&&ca(t, l, n, !0), l=ft.current, l!==null) {
        switch(l.tag) {
          case 31:case 13:return jt===null?pu() :l.alternate===null&&Se===0&&(Se=3), l.flags&=-257, l.flags|=65536, l.lanes=n, a===$n?l.flags|=16384:(t=l.updateQueue, t===null?l.updateQueue=new Set([a]) :t.add(a), wc(e, a, n)), !1; case 22:return l.flags|=65536, a===$n?l.flags|=16384:(t=l.updateQueue, t===null?(t= {
            transitions:null, markerInstances:null, retryQueue:new Set([a])
          },
          l.updateQueue=t) :(l=t.retryQueue, l===null?t.retryQueue=new Set([a]) :l.add(a)), wc(e, a, n)), !1
        }
        throw Error(b(435, l.tag))
      }
      return wc(e, a, n), pu(), !1
    }
    if(I) return t=ft.current, t!==null?((t.flags&65536) ===0&&(t.flags|=256), t.flags|=65536, t.lanes=n, a!==Ai&&(e=Error(b(422), {
      cause:a
    }),
    Xa(vt(e, l)))) :(a!==Ai&&(t=Error(b(423), {
      cause:a
    }),
    Xa(vt(t, l))), e=e.current.alternate, e.flags|=65536, n&=-n, e.lanes|=n, a=vt(a, l), n=sc(e.stateNode, a, n), qi(e, n), Se!==4&&(Se=2)), !1; var u=Error(b(520), {
      cause:a
    });
    if(u=vt(u, l), fn===null?fn=[u]:fn.push(u), Se!==4&&(Se=2), t===null) return!0; a=vt(a, l), l=t; do {
      switch(l.tag) {
        case 3:return l.flags|=65536, e=n&-n, l.lanes|=e, e=sc(l.stateNode, a, e), qi(l, e), !1; case 1:if(t=l.type, u=l.stateNode, (l.flags&128) ===0&&(typeof t.getDerivedStateFromError=="function" ||u!==null&&typeof u.componentDidCatch=="function" &&(bl===null||!bl.has(u)))) return l.flags|=65536, n&=-n, l.lanes|=n, n=Ar(n), _r(n, e, l, a), qi(l, n), !1
      }
      l=l.return
    } while
    (l!==null); return!1
  }
  var fc=Error(b(461)), Ee=!1; function Ge(e, t, l, a) {
    t.child=e===null?kf(t, null, l, a) :Bl(t, e.child, l, a)
  }
  function Mr(e, t, l, a, n) {
    l=l.render; var u=t.ref; if("ref" in a) {
      var i= {
      };
      for(var s in a) s!=="ref" &&(i[s]=a[s])
    } else
    i=a; return Cl(t), a=Li(e, t, l, i, u, n), s=Zi(), e!==null&&!Ee?(Vi(e, t, n), Lt(e, t, n)) :(I&&s&&Ti(t), t.flags|=1, Ge(e, t, a, n), t.child)
  }
  function Or(e, t, l, a, n) {
    if(e===null) {
      var u=l.type; return typeof u=="function" &&!ji(u) &&u.defaultProps===void 0&&l.compare===null?(t.tag=15, t.type=u, Dr(e, t, u, a, n)) :(e=Xn(l.type, null, a, t, t.mode, n), e.ref=t.ref, e.return=t, t.child=e)
    }
    if(u=e.child, !gc(e, n)) {
      var i=u.memoizedProps; if(l=l.compare, l=l!==null?l:Ya, l(i, a) &&e.ref===t.ref) return Lt(e, t, n)
    }
    return t.flags|=1, e=qt(u, a), e.ref=t.ref, e.return=t, t.child=e
  }
  function Dr(e, t, l, a, n) {
    if(e!==null) {
      var u=e.memoizedProps; if(Ya(u, a) &&e.ref===t.ref) if(Ee=!1, t.pendingProps=a=u, gc(e, n))(e.flags&131072) !==0&&(Ee=!0); else return t.lanes=e.lanes, Lt(e, t, n)
    }
    return rc(e, t, l, a, n)
  }
  function kr(e, t, l, a) {
    var n=a.children, u=e!==null?e.memoizedState:null; if(e===null&&t.stateNode===null&&(t.stateNode= {
      _visibility:1, _pendingMarkers:null, _retryCache:null, _transitions:null
    }),
    a.mode==="hidden") {
      if((t.flags&128) !==0) {
        if(u=u!==null?u.baseLanes|l:l, e!==null) {
          for(a=t.child=e.child, n=0; a!==null;) n=n|a.lanes|a.childLanes, a=a.sibling; a=n&~u
        } else
        a=0, t.child=null; return wr(e, t, u, l, a)
      }
      if((l&536870912) !==0) t.memoizedState= {
        baseLanes:0, cachePool:null
      },
      e!==null&&Kn(t, u!==null?u.cachePool:null), u!==null?Cf(t, u) :Yi(), Hf(t); else return a=t.lanes=536870912, wr(e, t, u!==null?u.baseLanes|l:l, l, a)
    } else
    u!==null?(Kn(t, u.cachePool), Cf(t, u), dl(), t.memoizedState=null) :(e!==null&&Kn(t, null), Yi(), dl()); return Ge(e, t, n, l), t.child
  }
  function tn(e, t) {
    return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode= {
      _visibility:1, _pendingMarkers:null, _retryCache:null, _transitions:null
    }),
    t.sibling
  }
  function wr(e, t, l, a, n) {
    var u=Ui(); return u=u===null?null: {
      parent:ze._currentValue, pool:u
    },
    t.memoizedState= {
      baseLanes:l, cachePool:u
    },
    e!==null&&Kn(t, null), Yi(), Hf(t), e!==null&&ca(e, t, a, !0), t.childLanes=n, null
  }
  function fu(e, t) {
    return t=du({
      mode:t.mode, children:t.children
    },
    e.mode), t.ref=e.ref, e.child=t, t.return=e, t
  }
  function Ur(e, t, l) {
    return Bl(t, e.child, null, l), e=fu(t, t.pendingProps), e.flags|=2, rt(t), t.memoizedState=null, e
  }
  function nm(e, t, l) {
    var a=t.pendingProps, n=(t.flags&128) !==0; if(t.flags&=-129, e===null) {
      if(I) {
        if(a.mode==="hidden") return e=fu(t, a), t.lanes=536870912, tn(null, e); if(Qi(t), (e=he) ?(e=V0(e, St), e=e!==null&&e.data==="&" ?e:null, e!==null&&(t.memoizedState= {
          dehydrated:e, treeContext:al!==null? {
            id:Dt, overflow:kt
          }
          :null, retryLane:536870912, hydrationErrors:null
        },
        l=gf(e), l.return=t, t.child=l, Be=t, he=null)) :e=null, e===null) throw ul(t); return t.lanes=536870912, null
      }
      return fu(t, a)
    }
    var u=e.memoizedState; if(u!==null) {
      var i=u.dehydrated; if(Qi(t), n) if(t.flags&256) t.flags&=-257, t=Ur(e, t, l); else if(t.memoizedState!==null) t.child=e.child, t.flags|=128, t=null; else throw Error(b(558)); else if(Ee||ca(e, t, l, !1), n=(l&e.childLanes) !==0, Ee||n) {
        if(a=re, a!==null&&(i=Ns(a, l), i!==0&&i!==u.retryLane)) throw u.retryLane=i, Dl(e, i), Pe(a, e, i), fc; pu(), t=Ur(e, t, l)
      } else
      e=u.treeContext, he=Nt(i.nextSibling), Be=t, I=!0, nl=null, St=!1, e!==null&&pf(t, e), t=fu(t, a), t.flags|=4096; return t
    }
    return e=qt(e.child, {
      mode:a.mode, children:a.children
    }),
    e.ref=t.ref, t.child=e, e.return=t, e
  }
  function ru(e, t) {
    var l=t.ref; if(l===null) e!==null&&e.ref!==null&&(t.flags|=4194816); else {
      if(typeof l!="function" &&typeof l!="object") throw Error(b(284));(e===null||e.ref!==l) &&(t.flags|=4194816)
    }
  }
  function rc(e, t, l, a, n) {
    return Cl(t), l=Li(e, t, l, a, void 0, n), a=Zi(), e!==null&&!Ee?(Vi(e, t, n), Lt(e, t, n)) :(I&&a&&Ti(t), t.flags|=1, Ge(e, t, l, n), t.child)
  }
  function Cr(e, t, l, a, n, u) {
    return Cl(t), t.updateQueue=null, l=qf(t, a, l, n), Rf(e), a=Zi(), e!==null&&!Ee?(Vi(e, t, u), Lt(e, t, u)) :(I&&a&&Ti(t), t.flags|=1, Ge(e, t, l, u), t.child)
  }
  function Hr(e, t, l, a, n) {
    if(Cl(t), t.stateNode===null) {
      var u=aa, i=l.contextType; typeof i=="object" &&i!==null&&(u=Ye(i)), u=new l(a, u), t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null, u.updater=cc, t.stateNode=u, u._reactInternals=t, u=t.stateNode, u.props=a, u.state=t.memoizedState, u.refs= {
      },
      Hi(t), i=l.contextType, u.context=typeof i=="object" &&i!==null?Ye(i) :aa, u.state=t.memoizedState, i=l.getDerivedStateFromProps, typeof i=="function" &&(ic(t, l, i, a), u.state=t.memoizedState), typeof l.getDerivedStateFromProps=="function" ||typeof u.getSnapshotBeforeUpdate=="function" ||typeof u.UNSAFE_componentWillMount!="function" &&typeof u.componentWillMount!="function" ||(i=u.state, typeof u.componentWillMount=="function" &&u.componentWillMount(), typeof u.UNSAFE_componentWillMount=="function" &&u.UNSAFE_componentWillMount(), i!==u.state&&cc.enqueueReplaceState(u, u.state, null), Wa(t, a, u, n), $a(), u.state=t.memoizedState), typeof u.componentDidMount=="function" &&(t.flags|=4194308), a=!0
    } else
    if(e===null) {
      u=t.stateNode; var s=t.memoizedProps, f=Gl(l, s); u.props=f; var h=u.context, p=l.contextType; i=aa, typeof p=="object" &&p!==null&&(i=Ye(p)); var j=l.getDerivedStateFromProps; p=typeof j=="function" ||typeof u.getSnapshotBeforeUpdate=="function", s=t.pendingProps!==s, p||typeof u.UNSAFE_componentWillReceiveProps!="function" &&typeof u.componentWillReceiveProps!="function" ||(s||h!==i) &&jr(t, u, a, i), cl=!1; var g=t.memoizedState; u.state=g, Wa(t, a, u, n), $a(), h=t.memoizedState, s||g!==h||cl?(typeof j=="function" &&(ic(t, l, j, a), h=t.memoizedState), (f=cl||Sr(t, l, f, a, g, h, i)) ?(p||typeof u.UNSAFE_componentWillMount!="function" &&typeof u.componentWillMount!="function" ||(typeof u.componentWillMount=="function" &&u.componentWillMount(), typeof u.UNSAFE_componentWillMount=="function" &&u.UNSAFE_componentWillMount()), typeof u.componentDidMount=="function" &&(t.flags|=4194308)) :(typeof u.componentDidMount=="function" &&(t.flags|=4194308), t.memoizedProps=a, t.memoizedState=h), u.props=a, u.state=h, u.context=i, a=f) :(typeof u.componentDidMount=="function" &&(t.flags|=4194308), a=!1)
    } else
    {
      u=t.stateNode, Ri(e, t), i=t.memoizedProps, p=Gl(l, i), u.props=p, j=t.pendingProps, g=u.context, h=l.contextType, f=aa, typeof h=="object" &&h!==null&&(f=Ye(h)), s=l.getDerivedStateFromProps, (h=typeof s=="function" ||typeof u.getSnapshotBeforeUpdate=="function") ||typeof u.UNSAFE_componentWillReceiveProps!="function" &&typeof u.componentWillReceiveProps!="function" ||(i!==j||g!==f) &&jr(t, u, a, f), cl=!1, g=t.memoizedState, u.state=g, Wa(t, a, u, n), $a(); var v=t.memoizedState; i!==j||g!==v||cl||e!==null&&e.dependencies!==null&&Zn(e.dependencies) ?(typeof s=="function" &&(ic(t, l, s, a), v=t.memoizedState), (p=cl||Sr(t, l, p, a, g, v, f) ||e!==null&&e.dependencies!==null&&Zn(e.dependencies)) ?(h||typeof u.UNSAFE_componentWillUpdate!="function" &&typeof u.componentWillUpdate!="function" ||(typeof u.componentWillUpdate=="function" &&u.componentWillUpdate(a, v, f), typeof u.UNSAFE_componentWillUpdate=="function" &&u.UNSAFE_componentWillUpdate(a, v, f)), typeof u.componentDidUpdate=="function" &&(t.flags|=4), typeof u.getSnapshotBeforeUpdate=="function" &&(t.flags|=1024)) :(typeof u.componentDidUpdate!="function" ||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4), typeof u.getSnapshotBeforeUpdate!="function" ||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024), t.memoizedProps=a, t.memoizedState=v), u.props=a, u.state=v, u.context=f, a=p) :(typeof u.componentDidUpdate!="function" ||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4), typeof u.getSnapshotBeforeUpdate!="function" ||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024), a=!1)
    }
    return u=a, ru(e, t), a=(t.flags&128) !==0, u||a?(u=t.stateNode, l=a&&typeof l.getDerivedStateFromError!="function" ?null:u.render(), t.flags|=1, e!==null&&a?(t.child=Bl(t, e.child, null, n), t.child=Bl(t, null, l, n)) :Ge(e, t, l, n), t.memoizedState=u.state, e=t.child) :e=Lt(e, t, n), e
  }
  function Rr(e, t, l, a) {
    return wl(), t.flags|=256, Ge(e, t, l, a), t.child
  }
  var dc= {
    dehydrated:null, treeContext:null, retryLane:0, hydrationErrors:null
  };
  function oc(e) {
    return {
      baseLanes:e, cachePool:Ef()
    }
  }
  function mc(e, t, l) {
    return e=e!==null?e.childLanes&~l:0, t&&(e|=ot), e
  }
  function qr(e, t, l) {
    var a=t.pendingProps, n=!1, u=(t.flags&128) !==0, i; if((i=u) ||(i=e!==null&&e.memoizedState===null?!1:(je.current&2) !==0), i&&(n=!0, t.flags&=-129), i=(t.flags&32) !==0, t.flags&=-33, e===null) {
      if(I) {
        if(n?rl(t) :dl(), (e=he) ?(e=V0(e, St), e=e!==null&&e.data!=="&" ?e:null, e!==null&&(t.memoizedState= {
          dehydrated:e, treeContext:al!==null? {
            id:Dt, overflow:kt
          }
          :null, retryLane:536870912, hydrationErrors:null
        },
        l=gf(e), l.return=t, t.child=l, Be=t, he=null)) :e=null, e===null) throw ul(t); return $c(e) ?t.lanes=32:t.lanes=536870912, null
      }
      var s=a.children; return a=a.fallback, n?(dl(), n=t.mode, s=du({
        mode:"hidden", children:s
      },
      n), a=kl(a, n, l, null), s.return=t, a.return=t, s.sibling=a, t.child=s, a=t.child, a.memoizedState=oc(l), a.childLanes=mc(e, i, l), t.memoizedState=dc, tn(null, a)) :(rl(t), hc(t, s))
    }
    var f=e.memoizedState; if(f!==null&&(s=f.dehydrated, s!==null)) {
      if(u) t.flags&256?(rl(t), t.flags&=-257, t=bc(e, t, l)) :t.memoizedState!==null?(dl(), t.child=e.child, t.flags|=128, t=null) :(dl(), s=a.fallback, n=t.mode, a=du({
        mode:"visible", children:a.children
      },
      n), s=kl(s, n, l, null), s.flags|=2, a.return=t, s.return=t, a.sibling=s, t.child=a, Bl(t, e.child, null, l), a=t.child, a.memoizedState=oc(l), a.childLanes=mc(e, i, l), t.memoizedState=dc, t=tn(null, a)); else if(rl(t), $c(s)) {
        if(i=s.nextSibling&&s.nextSibling.dataset, i) var h=i.dgst; i=h, a=Error(b(419)), a.stack="", a.digest=i, Xa({
          value:a, source:null, stack:null
        }),
        t=bc(e, t, l)
      } else
      if(Ee||ca(e, t, l, !1), i=(l&e.childLanes) !==0, Ee||i) {
        if(i=re, i!==null&&(a=Ns(i, l), a!==0&&a!==f.retryLane)) throw f.retryLane=a, Dl(e, a), Pe(i, e, a), fc; Jc(s) ||pu(), t=bc(e, t, l)
      } else
      Jc(s) ?(t.flags|=192, t.child=e.child, t=null) :(e=f.treeContext, he=Nt(s.nextSibling), Be=t, I=!0, nl=null, St=!1, e!==null&&pf(t, e), t=hc(t, a.children), t.flags|=4096); return t
    }
    return n?(dl(), s=a.fallback, n=t.mode, f=e.child, h=f.sibling, a=qt(f, {
      mode:"hidden", children:a.children
    }),
    a.subtreeFlags=f.subtreeFlags&65011712, h!==null?s=qt(h, s) :(s=kl(s, n, l, null), s.flags|=2), s.return=t, a.return=t, a.sibling=s, t.child=a, tn(null, a), a=t.child, s=e.child.memoizedState, s===null?s=oc(l) :(n=s.cachePool, n!==null?(f=ze._currentValue, n=n.parent!==f? {
      parent:f, pool:f
    }
    :n) :n=Ef(), s= {
      baseLanes:s.baseLanes|l, cachePool:n
    }),
    a.memoizedState=s, a.childLanes=mc(e, i, l), t.memoizedState=dc, tn(e.child, a)) :(rl(t), l=e.child, e=l.sibling, l=qt(l, {
      mode:"visible", children:a.children
    }),
    l.return=t, l.sibling=null, e!==null&&(i=t.deletions, i===null?(t.deletions=[e], t.flags|=16) :i.push(e)), t.child=l, t.memoizedState=null, l)
  }
  function hc(e, t) {
    return t=du({
      mode:"visible", children:t
    },
    e.mode), t.return=e, e.child=t
  }
  function du(e, t) {
    return e=st(22, e, null, t), e.lanes=0, e
  }
  function bc(e, t, l) {
    return Bl(t, e.child, null, l), e=hc(t, t.pendingProps.children), e.flags|=2, t.memoizedState=null, e
  }
  function Br(e, t, l) {
    e.lanes|=t; var a=e.alternate; a!==null&&(a.lanes|=t), Oi(e.return, t, l)
  }
  function xc(e, t, l, a, n, u) {
    var i=e.memoizedState; i===null?e.memoizedState= {
      isBackwards:t, rendering:null, renderingStartTime:0, last:a, tail:l, tailMode:n, treeForkCount:u
    }
    :(i.isBackwards=t, i.rendering=null, i.renderingStartTime=0, i.last=a, i.tail=l, i.tailMode=n, i.treeForkCount=u)
  }
  function Yr(e, t, l) {
    var a=t.pendingProps, n=a.revealOrder, u=a.tail; a=a.children; var i=je.current, s=(i&2) !==0; if(s?(i=i&1|2, t.flags|=128) :i&=1, A(je, i), Ge(e, t, a, l), a=I?Qa:0, !s&&e!==null&&(e.flags&128) !==0) e:for(e=t.child; e!==null;) {
      if(e.tag===13) e.memoizedState!==null&&Br(e, l, t); else if(e.tag===19) Br(e, l, t); else if(e.child!==null) {
        e.child.return=e, e=e.child; continue
      }
      if(e===t) break e; for(; e.sibling===null;) {
        if(e.return===null||e.return===t) break e; e=e.return
      }
      e.sibling.return=e.return, e=e.sibling
    }
    switch(n) {
      case"forwards" :for(l=t.child, n=null; l!==null;) e=l.alternate, e!==null&&Pn(e) ===null&&(n=l), l=l.sibling; l=n, l===null?(n=t.child, t.child=null) :(n=l.sibling, l.sibling=null), xc(t, !1, n, l, u, a); break; case"backwards" :case"unstable_legacy-backwards" :for(l=null, n=t.child, t.child=null; n!==null;) {
        if(e=n.alternate, e!==null&&Pn(e) ===null) {
          t.child=n; break
        }
        e=n.sibling, n.sibling=l, l=n, n=e
      }
      xc(t, !0, l, null, u, a); break; case"together" :xc(t, !1, null, null, void 0, a); break; default:t.memoizedState=null
    }
    return t.child
  }
  function Lt(e, t, l) {
    if(e!==null&&(t.dependencies=e.dependencies), hl|=t.lanes, (l&t.childLanes) ===0) if(e!==null) {
      if(ca(e, t, l, !1), (l&t.childLanes) ===0) return null
    } else
    return null; if(e!==null&&t.child!==e.child) throw Error(b(153)); if(t.child!==null) {
      for(e=t.child, l=qt(e, e.pendingProps), t.child=l, l.return=t; e.sibling!==null;) e=e.sibling, l=l.sibling=qt(e, e.pendingProps), l.return=t; l.sibling=null
    }
    return t.child
  }
  function gc(e, t) {
    return(e.lanes&t) !==0?!0:(e=e.dependencies, !!(e!==null&&Zn(e)))
  }
  function um(e, t, l) {
    switch(t.tag) {
      case 3:ye(t, t.stateNode.containerInfo), il(t, ze, e.memoizedState.cache), wl(); break; case 27:case 5:Ot(t); break; case 4:ye(t, t.stateNode.containerInfo); break; case 10:il(t, t.type, t.memoizedProps.value); break; case 31:if(t.memoizedState!==null) return t.flags|=128, Qi(t), null; break; case 13:var a=t.memoizedState; if(a!==null) return a.dehydrated!==null?(rl(t), t.flags|=128, null) :(l&t.child.childLanes) !==0?qr(e, t, l) :(rl(t), e=Lt(e, t, l), e!==null?e.sibling:null); rl(t); break; case 19:var n=(e.flags&128) !==0; if(a=(l&t.childLanes) !==0, a||(ca(e, t, l, !1), a=(l&t.childLanes) !==0), n) {
        if(a) return Yr(e, t, l); t.flags|=128
      }
      if(n=t.memoizedState, n!==null&&(n.rendering=null, n.tail=null, n.lastEffect=null), A(je, je.current), a) break; return null; case 22:return t.lanes=0, kr(e, t, l, t.pendingProps); case 24:il(t, ze, e.memoizedState.cache)
    }
    return Lt(e, t, l)
  }
  function Gr(e, t, l) {
    if(e!==null) if(e.memoizedProps!==t.pendingProps) Ee=!0; else {
      if(!gc(e, l) &&(t.flags&128) ===0) return Ee=!1, um(e, t, l); Ee=(e.flags&131072) !==0
    } else
    Ee=!1, I&&(t.flags&1048576) !==0&&yf(t, Qa, t.index); switch(t.lanes=0, t.tag) {
      case 16:e: {
        var a=t.pendingProps; if(e=Rl(t.elementType), t.type=e, typeof e=="function") ji(e) ?(a=Gl(e, a), t.tag=1, t=Hr(null, t, e, a, l)) :(t.tag=0, t=rc(null, t, e, a, l)); else {
          if(e!=null) {
            var n=e.$$typeof; if(n===Xe) {
              t.tag=11, t=Mr(null, t, e, a, l); break e
            } else
            if(n===Z) {
              t.tag=14, t=Or(null, t, e, a, l); break e
            }
          }
          throw t=ht(e) ||e, Error(b(306, t, ""))
        }
      }
      return t; case 0:return rc(e, t, t.type, t.pendingProps, l); case 1:return a=t.type, n=Gl(a, t.pendingProps), Hr(e, t, a, n, l); case 3:e: {
        if(ye(t, t.stateNode.containerInfo), e===null) throw Error(b(387)); a=t.pendingProps; var u=t.memoizedState; n=u.element, Ri(e, t), Wa(t, a, null, l); var i=t.memoizedState; if(a=i.cache, il(t, ze, a), a!==u.cache&&Di(t, [ze], l, !0), $a(), a=i.element, u.isDehydrated) if(u= {
          element:a, isDehydrated:!1, cache:i.cache
        },
        t.updateQueue.baseState=u, t.memoizedState=u, t.flags&256) {
          t=Rr(e, t, a, l); break e
        } else
        if(a!==n) {
          n=vt(Error(b(424)), t), Xa(n), t=Rr(e, t, a, l); break e
        } else
        {
          switch(e=t.stateNode.containerInfo, e.nodeType) {
            case 9:e=e.body; break; default:e=e.nodeName==="HTML" ?e.ownerDocument.body:e
          }
          for(he=Nt(e.firstChild), Be=t, I=!0, nl=null, St=!0, l=kf(t, null, a, l), t.child=l; l;) l.flags=l.flags&-3|4096, l=l.sibling
        } else
        {
          if(wl(), a===n) {
            t=Lt(e, t, l); break e
          }
          Ge(e, t, a, l)
        }
        t=t.child
      }
      return t; case 26:return ru(e, t), e===null?(l=I0(t.type, null, t.pendingProps, null)) ?t.memoizedState=l:I||(l=t.type, e=t.pendingProps, a=Au(w.current).createElement(l), a[qe]=t, a[Ke]=e, Qe(a, l, e), we(a), t.stateNode=a) :t.memoizedState=I0(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null; case 27:return Ot(t), e===null&&I&&(a=t.stateNode=$0(t.type, t.pendingProps, w.current), Be=t, St=!0, n=he, yl(t.type) ?(Wc=n, he=Nt(a.firstChild)) :he=n), Ge(e, t, t.pendingProps.children, l), ru(e, t), e===null&&(t.flags|=4194304), t.child; case 5:return e===null&&I&&((n=a=he) &&(a=Cm(a, t.type, t.pendingProps, St), a!==null?(t.stateNode=a, Be=t, he=Nt(a.firstChild), St=!1, n=!0) :n=!1), n||ul(t)), Ot(t), n=t.type, u=t.pendingProps, i=e!==null?e.memoizedProps:null, a=u.children, Zc(n, u) ?a=null:i!==null&&Zc(n, i) &&(t.flags|=32), t.memoizedState!==null&&(n=Li(e, t, Wo, null, null, l), gn._currentValue=n), ru(e, t), Ge(e, t, a, l), t.child; case 6:return e===null&&I&&((e=l=he) &&(l=Hm(l, t.pendingProps, St), l!==null?(t.stateNode=l, Be=t, he=null, e=!0) :e=!1), e||ul(t)), null; case 13:return qr(e, t, l); case 4:return ye(t, t.stateNode.containerInfo), a=t.pendingProps, e===null?t.child=Bl(t, null, a, l) :Ge(e, t, a, l), t.child; case 11:return Mr(e, t, t.type, t.pendingProps, l); case 7:return Ge(e, t, t.pendingProps, l), t.child; case 8:return Ge(e, t, t.pendingProps.children, l), t.child; case 12:return Ge(e, t, t.pendingProps.children, l), t.child; case 10:return a=t.pendingProps, il(t, t.type, a.value), Ge(e, t, a.children, l), t.child; case 9:return n=t.type._context, a=t.pendingProps.children, Cl(t), n=Ye(n), a=a(n), t.flags|=1, Ge(e, t, a, l), t.child; case 14:return Or(e, t, t.type, t.pendingProps, l); case 15:return Dr(e, t, t.type, t.pendingProps, l); case 19:return Yr(e, t, l); case 31:return nm(e, t, l); case 22:return kr(e, t, l, t.pendingProps); case 24:return Cl(t), a=Ye(ze), e===null?(n=Ui(), n===null&&(n=re, u=ki(), n.pooledCache=u, u.refCount++, u!==null&&(n.pooledCacheLanes|=l), n=u), t.memoizedState= {
        parent:a, cache:n
      },
      Hi(t), il(t, ze, n)) :((e.lanes&l) !==0&&(Ri(e, t), Wa(t, null, null, l), $a()), n=e.memoizedState, u=t.memoizedState, n.parent!==a?(n= {
        parent:a, cache:a
      },
      t.memoizedState=n, t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n), il(t, ze, a)) :(a=u.cache, il(t, ze, a), a!==n.cache&&Di(t, [ze], l, !0))), Ge(e, t, t.pendingProps.children, l), t.child; case 29:throw t.pendingProps
    }
    throw Error(b(156, t.tag))
  }
  function Zt(e) {
    e.flags|=4
  }
  function vc(e, t, l, a, n) {
    if((t=(e.mode&32) !==0) &&(t=!1), t) {
      if(e.flags|=16777216, (n&335544128) ===n) if(e.stateNode.complete) e.flags|=8192; else if(h0()) e.flags|=8192; else throw ql=$n, Ci
    } else
    e.flags&=-16777217
  }
  function Qr(e, t) {
    if(t.type!=="stylesheet" ||(t.state.loading&4) !==0) e.flags&=-16777217; else if(e.flags|=16777216, !ad(t)) if(h0()) e.flags|=8192; else throw ql=$n, Ci
  }
  function ou(e, t) {
    t!==null&&(e.flags|=4), e.flags&16384&&(t=e.tag!==22?ps() :536870912, e.lanes|=t, ya|=t)
  }
  function ln(e, t) {
    if(!I) switch(e.tailMode) {
      case"hidden" :t=e.tail; for(var l=null; t!==null;) t.alternate!==null&&(l=t), t=t.sibling; l===null?e.tail=null:l.sibling=null; break; case"collapsed" :l=e.tail; for(var a=null; l!==null;) l.alternate!==null&&(a=l), l=l.sibling; a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null
    }
  }
  function be(e) {
    var t=e.alternate!==null&&e.alternate.child===e.child, l=0, a=0; if(t) for(var n=e.child; n!==null;) l|=n.lanes|n.childLanes, a|=n.subtreeFlags&65011712, a|=n.flags&65011712, n.return=e, n=n.sibling; else for(n=e.child; n!==null;) l|=n.lanes|n.childLanes, a|=n.subtreeFlags, a|=n.flags, n.return=e, n=n.sibling; return e.subtreeFlags|=a, e.childLanes=l, t
  }
  function im(e, t, l) {
    var a=t.pendingProps; switch(Ei(t), t.tag) {
      case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t), null; case 1:return be(t), null; case 3:return l=t.stateNode, a=null, e!==null&&(a=e.memoizedState.cache), t.memoizedState.cache!==a&&(t.flags|=2048), Gt(ze), oe(), l.pendingContext&&(l.context=l.pendingContext, l.pendingContext=null), (e===null||e.child===null) &&(ia(t) ?Zt(t) :e===null||e.memoizedState.isDehydrated&&(t.flags&256) ===0||(t.flags|=1024, _i())), be(t), null; case 26:var n=t.type, u=t.memoizedState; return e===null?(Zt(t), u!==null?(be(t), Qr(t, u)) :(be(t), vc(t, n, null, a, l))) :u?u!==e.memoizedState?(Zt(t), be(t), Qr(t, u)) :(be(t), t.flags&=-16777217) :(e=e.memoizedProps, e!==a&&Zt(t), be(t), vc(t, n, e, a, l)), null; case 27:if(Nn(t), l=w.current, n=t.type, e!==null&&t.stateNode!=null) e.memoizedProps!==a&&Zt(t); else {
        if(!a) {
          if(t.stateNode===null) throw Error(b(166)); return be(t), null
        }
        e=x.current, ia(t) ?Sf(t) :(e=$0(n, a, l), t.stateNode=e, Zt(t))
      }
      return be(t), null; case 5:if(Nn(t), n=t.type, e!==null&&t.stateNode!=null) e.memoizedProps!==a&&Zt(t); else {
        if(!a) {
          if(t.stateNode===null) throw Error(b(166)); return be(t), null
        }
        if(u=x.current, ia(t)) Sf(t); else {
          var i=Au(w.current); switch(u) {
            case 1:u=i.createElementNS("http://www.w3.org/2000/svg", n); break; case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML", n); break; default:switch(n) {
              case"svg" :u=i.createElementNS("http://www.w3.org/2000/svg", n); break; case"math" :u=i.createElementNS("http://www.w3.org/1998/Math/MathML", n); break; case"script" :u=i.createElement("div"), u.innerHTML="<script><\/script>", u=u.removeChild(u.firstChild); break; case"select" :u=typeof a.is=="string" ?i.createElement("select", {
                is:a.is
              })
              :i.createElement("select"), a.multiple?u.multiple=!0:a.size&&(u.size=a.size); break; default:u=typeof a.is=="string" ?i.createElement(n, {
                is:a.is
              })
              :i.createElement(n)
            }
          }
          u[qe]=t, u[Ke]=a; e:for(i=t.child; i!==null;) {
            if(i.tag===5||i.tag===6) u.appendChild(i.stateNode); else if(i.tag!==4&&i.tag!==27&&i.child!==null) {
              i.child.return=i, i=i.child; continue
            }
            if(i===t) break e; for(; i.sibling===null;) {
              if(i.return===null||i.return===t) break e; i=i.return
            }
            i.sibling.return=i.return, i=i.sibling
          }
          t.stateNode=u; e:switch(Qe(u, n, a), n) {
            case"button" :case"input" :case"select" :case"textarea" :a=!!a.autoFocus; break e; case"img" :a=!0; break e; default:a=!1
          }
          a&&Zt(t)
        }
      }
      return be(t), vc(t, t.type, e===null?null:e.memoizedProps, t.pendingProps, l), null; case 6:if(e&&t.stateNode!=null) e.memoizedProps!==a&&Zt(t); else {
        if(typeof a!="string" &&t.stateNode===null) throw Error(b(166)); if(e=w.current, ia(t)) {
          if(e=t.stateNode, l=t.memoizedProps, a=null, n=Be, n!==null) switch(n.tag) {
            case 27:case 5:a=n.memoizedProps
          }
          e[qe]=t, e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||q0(e.nodeValue, l)), e||ul(t, !0)
        } else
        e=Au(e).createTextNode(a), e[qe]=t, t.stateNode=e
      }
      return be(t), null; case 31:if(l=t.memoizedState, e===null||e.memoizedState!==null) {
        if(a=ia(t), l!==null) {
          if(e===null) {
            if(!a) throw Error(b(318)); if(e=t.memoizedState, e=e!==null?e.dehydrated:null, !e) throw Error(b(557)); e[qe]=t
          } else
          wl(), (t.flags&128) ===0&&(t.memoizedState=null), t.flags|=4; be(t), e=!1
        } else
        l=_i(), e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l), e=!0; if(!e) return t.flags&256?(rt(t), t) :(rt(t), null); if((t.flags&128) !==0) throw Error(b(558))
      }
      return be(t), null; case 13:if(a=t.memoizedState, e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null) {
        if(n=ia(t), a!==null&&a.dehydrated!==null) {
          if(e===null) {
            if(!n) throw Error(b(318)); if(n=t.memoizedState, n=n!==null?n.dehydrated:null, !n) throw Error(b(317)); n[qe]=t
          } else
          wl(), (t.flags&128) ===0&&(t.memoizedState=null), t.flags|=4; be(t), n=!1
        } else
        n=_i(), e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n), n=!0; if(!n) return t.flags&256?(rt(t), t) :(rt(t), null)
      }
      return rt(t), (t.flags&128) !==0?(t.lanes=l, t) :(l=a!==null, e=e!==null&&e.memoizedState!==null, l&&(a=t.child, n=null, a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool), u=null, a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool), u!==n&&(a.flags|=2048)), l!==e&&l&&(t.child.flags|=8192), ou(t, t.updateQueue), be(t), null); case 4:return oe(), e===null&&Yc(t.stateNode.containerInfo), be(t), null; case 10:return Gt(t.type), be(t), null; case 19:if(N(je), a=t.memoizedState, a===null) return be(t), null; if(n=(t.flags&128) !==0, u=a.rendering, u===null) if(n) ln(a, !1); else {
        if(Se!==0||e!==null&&(e.flags&128) !==0) for(e=t.child; e!==null;) {
          if(u=Pn(e), u!==null) {
            for(t.flags|=128, ln(a, !1), e=u.updateQueue, t.updateQueue=e, ou(t, e), t.subtreeFlags=0, e=l, l=t.child; l!==null;) xf(l, e), l=l.sibling; return A(je, je.current&1|2), I&&Bt(t, a.treeForkCount), t.child
          }
          e=e.sibling
        }
        a.tail!==null&&nt() >gu&&(t.flags|=128, n=!0, ln(a, !1), t.lanes=4194304)
      } else
      {
        if(!n) if(e=Pn(u), e!==null) {
          if(t.flags|=128, n=!0, e=e.updateQueue, t.updateQueue=e, ou(t, e), ln(a, !0), a.tail===null&&a.tailMode==="hidden" &&!u.alternate&&!I) return be(t), null
        } else
        2*nt() -a.renderingStartTime>gu&&l!==536870912&&(t.flags|=128, n=!0, ln(a, !1), t.lanes=4194304); a.isBackwards?(u.sibling=t.child, t.child=u) :(e=a.last, e!==null?e.sibling=u:t.child=u, a.last=u)
      }
      return a.tail!==null?(e=a.tail, a.rendering=e, a.tail=e.sibling, a.renderingStartTime=nt(), e.sibling=null, l=je.current, A(je, n?l&1|2:l&1), I&&Bt(t, a.treeForkCount), e) :(be(t), null); case 22:case 23:return rt(t), Gi(), a=t.memoizedState!==null, e!==null?e.memoizedState!==null!==a&&(t.flags|=8192) :a&&(t.flags|=8192), a?(l&536870912) !==0&&(t.flags&128) ===0&&(be(t), t.subtreeFlags&6&&(t.flags|=8192)) :be(t), l=t.updateQueue, l!==null&&ou(t, l.retryQueue), l=null, e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool), a=null, t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool), a!==l&&(t.flags|=2048), e!==null&&N(Hl), null; case 24:return l=null, e!==null&&(l=e.memoizedState.cache), t.memoizedState.cache!==l&&(t.flags|=2048), Gt(ze), be(t), null; case 25:return null; case 30:return null
    }
    throw Error(b(156, t.tag))
  }
  function cm(e, t) {
    switch(Ei(t), t.tag) {
      case 1:return e=t.flags, e&65536?(t.flags=e&-65537|128, t) :null; case 3:return Gt(ze), oe(), e=t.flags, (e&65536) !==0&&(e&128) ===0?(t.flags=e&-65537|128, t) :null; case 26:case 27:case 5:return Nn(t), null; case 31:if(t.memoizedState!==null) {
        if(rt(t), t.alternate===null) throw Error(b(340)); wl()
      }
      return e=t.flags, e&65536?(t.flags=e&-65537|128, t) :null; case 13:if(rt(t), e=t.memoizedState, e!==null&&e.dehydrated!==null) {
        if(t.alternate===null) throw Error(b(340)); wl()
      }
      return e=t.flags, e&65536?(t.flags=e&-65537|128, t) :null; case 19:return N(je), null; case 4:return oe(), null; case 10:return Gt(t.type), null; case 22:case 23:return rt(t), Gi(), e!==null&&N(Hl), e=t.flags, e&65536?(t.flags=e&-65537|128, t) :null; case 24:return Gt(ze), null; case 25:return null; default:return null
    }
  }
  function Xr(e, t) {
    switch(Ei(t), t.tag) {
      case 3:Gt(ze), oe(); break; case 26:case 27:case 5:Nn(t); break; case 4:oe(); break; case 31:t.memoizedState!==null&&rt(t); break; case 13:rt(t); break; case 19:N(je); break; case 10:Gt(t.type); break; case 22:case 23:rt(t), Gi(), e!==null&&N(Hl); break; case 24:Gt(ze)
    }
  }
  function an(e, t) {
    try {
      var l=t.updateQueue, a=l!==null?l.lastEffect:null; if(a!==null) {
        var n=a.next; l=n; do {
          if((l.tag&e) ===e) {
            a=void 0; var u=l.create, i=l.inst; a=u(), i.destroy=a
          }
          l=l.next
        } while
        (l!==n)
      }
    } catch
    (s) {
      ie(t, t.return, s)
    }
  }
  function ol(e, t, l) {
    try {
      var a=t.updateQueue, n=a!==null?a.lastEffect:null; if(n!==null) {
        var u=n.next; a=u; do {
          if((a.tag&e) ===e) {
            var i=a.inst, s=i.destroy; if(s!==void 0) {
              i.destroy=void 0, n=t; var f=l, h=s; try {
                h()
              } catch
              (p) {
                ie(n, f, p)
              }
            }
          }
          a=a.next
        } while
        (a!==u)
      }
    } catch
    (p) {
      ie(t, t.return, p)
    }
  }
  function Lr(e) {
    var t=e.updateQueue; if(t!==null) {
      var l=e.stateNode; try {
        Uf(t, l)
      } catch
      (a) {
        ie(e, e.return, a)
      }
    }
  }
  function Zr(e, t, l) {
    l.props=Gl(e.type, e.memoizedProps), l.state=e.memoizedState; try {
      l.componentWillUnmount()
    } catch
    (a) {
      ie(e, t, a)
    }
  }
  function nn(e, t) {
    try {
      var l=e.ref; if(l!==null) {
        switch(e.tag) {
          case 26:case 27:case 5:var a=e.stateNode; break; case 30:a=e.stateNode; break; default:a=e.stateNode
        }
        typeof l=="function" ?e.refCleanup=l(a) :l.current=a
      }
    } catch
    (n) {
      ie(e, t, n)
    }
  }
  function wt(e, t) {
    var l=e.ref, a=e.refCleanup; if(l!==null) if(typeof a=="function") try {
      a()
    } catch
    (n) {
      ie(e, t, n)
    } finally
    {
      e.refCleanup=null, e=e.alternate, e!=null&&(e.refCleanup=null)
    } else
    if(typeof l=="function") try {
      l(null)
    } catch
    (n) {
      ie(e, t, n)
    } else
    l.current=null
  }
  function Vr(e) {
    var t=e.type, l=e.memoizedProps, a=e.stateNode; try {
      e:switch(t) {
        case"button" :case"input" :case"select" :case"textarea" :l.autoFocus&&a.focus(); break e; case"img" :l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)
      }
    } catch
    (n) {
      ie(e, e.return, n)
    }
  }
  function yc(e, t, l) {
    try {
      var a=e.stateNode; Mm(a, e.type, l, t), a[Ke]=t
    } catch
    (n) {
      ie(e, e.return, n)
    }
  }
  function Kr(e) {
    return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yl(e.type) ||e.tag===4
  }
  function pc(e) {
    e:for(;;) {
      for(; e.sibling===null;) {
        if(e.return===null||Kr(e.return)) return null; e=e.return
      }
      for(e.sibling.return=e.return, e=e.sibling; e.tag!==5&&e.tag!==6&&e.tag!==18;) {
        if(e.tag===27&&yl(e.type) ||e.flags&2||e.child===null||e.tag===4) continue e; e.child.return=e, e=e.child
      }
      if(!(e.flags&2)) return e.stateNode
    }
  }
  function Sc(e, t, l) {
    var a=e.tag; if(a===5||a===6) e=e.stateNode, t?(l.nodeType===9?l.body:l.nodeName==="HTML" ?l.ownerDocument.body:l).insertBefore(e, t) :(t=l.nodeType===9?l.body:l.nodeName==="HTML" ?l.ownerDocument.body:l, t.appendChild(e), l=l._reactRootContainer, l!=null||t.onclick!==null||(t.onclick=Ht)); else if(a!==4&&(a===27&&yl(e.type) &&(l=e.stateNode, t=null), e=e.child, e!==null)) for(Sc(e, t, l), e=e.sibling; e!==null;) Sc(e, t, l), e=e.sibling
  }
  function mu(e, t, l) {
    var a=e.tag; if(a===5||a===6) e=e.stateNode, t?l.insertBefore(e, t) :l.appendChild(e); else if(a!==4&&(a===27&&yl(e.type) &&(l=e.stateNode), e=e.child, e!==null)) for(mu(e, t, l), e=e.sibling; e!==null;) mu(e, t, l), e=e.sibling
  }
  function Jr(e) {
    var t=e.stateNode, l=e.memoizedProps; try {
      for(var a=e.type, n=t.attributes; n.length;) t.removeAttributeNode(n[0]); Qe(t, a, l), t[qe]=e, t[Ke]=l
    } catch
    (u) {
      ie(e, e.return, u)
    }
  }
  var Vt=!1, Ae=!1, jc=!1, $r=typeof WeakSet=="function" ?WeakSet:Set, Ue=null; function sm(e, t) {
    if(e=e.containerInfo, Xc=Uu, e=cf(e), bi(e)) {
      if("selectionStart" in e) var l= {
        start:e.selectionStart, end:e.selectionEnd
      };
      else e: {
        l=(l=e.ownerDocument) &&l.defaultView||window; var a=l.getSelection&&l.getSelection(); if(a&&a.rangeCount!==0) {
          l=a.anchorNode; var n=a.anchorOffset, u=a.focusNode; a=a.focusOffset; try {
            l.nodeType, u.nodeType
          } catch
          {
            l=null; break e
          }
          var i=0, s=-1, f=-1, h=0, p=0, j=e, g=null; t:for(;;) {
            for(var v; j!==l||n!==0&&j.nodeType!==3||(s=i+n), j!==u||a!==0&&j.nodeType!==3||(f=i+a), j.nodeType===3&&(i+=j.nodeValue.length), (v=j.firstChild) !==null;) g=j, j=v; for(;;) {
              if(j===e) break t; if(g===l&&++h===n&&(s=i), g===u&&++p===a&&(f=i), (v=j.nextSibling) !==null) break; j=g, g=j.parentNode
            }
            j=v
          }
          l=s===-1||f===-1?null: {
            start:s, end:f
          }
        } else
        l=null
      }
      l=l|| {
        start:0, end:0
      }
    } else
    l=null; for(Lc= {
      focusedElem:e, selectionRange:l
    },
    Uu=!1, Ue=t; Ue!==null;) if(t=Ue, e=t.child, (t.subtreeFlags&1028) !==0&&e!==null) e.return=t, Ue=e; else for(; Ue!==null;) {
      switch(t=Ue, u=t.alternate, e=t.flags, t.tag) {
        case 0:if((e&4) !==0&&(e=t.updateQueue, e=e!==null?e.events:null, e!==null)) for(l=0; l<e.length; l++) n=e[l], n.ref.impl=n.nextImpl; break; case 11:case 15:break; case 1:if((e&1024) !==0&&u!==null) {
          e=void 0, l=t, n=u.memoizedProps, u=u.memoizedState, a=l.stateNode; try {
            var M=Gl(l.type, n); e=a.getSnapshotBeforeUpdate(M, u), a.__reactInternalSnapshotBeforeUpdate=e
          } catch
          (U) {
            ie(l, l.return, U)
          }
        }
        break; case 3:if((e&1024) !==0) {
          if(e=t.stateNode.containerInfo, l=e.nodeType, l===9) Kc(e); else if(l===1) switch(e.nodeName) {
            case"HEAD" :case"HTML" :case"BODY" :Kc(e); break; default:e.textContent=""
          }
        }
        break; case 5:case 26:case 27:case 6:case 4:case 17:break; default:if((e&1024) !==0) throw Error(b(163))
      }
      if(e=t.sibling, e!==null) {
        e.return=t.return, Ue=e; break
      }
      Ue=t.return
    }
  }
  function Wr(e, t, l) {
    var a=l.flags; switch(l.tag) {
      case 0:case 11:case 15:Jt(e, l), a&4&&an(5, l); break; case 1:if(Jt(e, l), a&4) if(e=l.stateNode, t===null) try {
        e.componentDidMount()
      } catch
      (i) {
        ie(l, l.return, i)
      } else
      {
        var n=Gl(l.type, t.memoizedProps); t=t.memoizedState; try {
          e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
        } catch
        (i) {
          ie(l, l.return, i)
        }
      }
      a&64&&Lr(l), a&512&&nn(l, l.return); break; case 3:if(Jt(e, l), a&64&&(e=l.updateQueue, e!==null)) {
        if(t=null, l.child!==null) switch(l.child.tag) {
          case 27:case 5:t=l.child.stateNode; break; case 1:t=l.child.stateNode
        }
        try {
          Uf(e, t)
        } catch
        (i) {
          ie(l, l.return, i)
        }
      }
      break; case 27:t===null&&a&4&&Jr(l); case 26:case 5:Jt(e, l), t===null&&a&4&&Vr(l), a&512&&nn(l, l.return); break; case 12:Jt(e, l); break; case 31:Jt(e, l), a&4&&Pr(e, l); break; case 13:Jt(e, l), a&4&&e0(e, l), a&64&&(e=l.memoizedState, e!==null&&(e=e.dehydrated, e!==null&&(l=gm.bind(null, l), Rm(e, l)))); break; case 22:if(a=l.memoizedState!==null||Vt, !a) {
        t=t!==null&&t.memoizedState!==null||Ae, n=Vt; var u=Ae; Vt=a, (Ae=t) &&!u?$t(e, l, (l.subtreeFlags&8772) !==0) :Jt(e, l), Vt=n, Ae=u
      }
      break; case 30:break; default:Jt(e, l)
    }
  }
  function Fr(e) {
    var t=e.alternate; t!==null&&(e.alternate=null, Fr(t)), e.child=null, e.deletions=null, e.sibling=null, e.tag===5&&(t=e.stateNode, t!==null&&Iu(t)), e.stateNode=null, e.return=null, e.dependencies=null, e.memoizedProps=null, e.memoizedState=null, e.pendingProps=null, e.stateNode=null, e.updateQueue=null
  }
  var ge=null, $e=!1; function Kt(e, t, l) {
    for(l=l.child; l!==null;) Ir(e, t, l), l=l.sibling
  }
  function Ir(e, t, l) {
    if(ut&&typeof ut.onCommitFiberUnmount=="function") try {
      ut.onCommitFiberUnmount(_a, l)
    } catch
    {
    }
    switch(l.tag) {
      case 26:Ae||wt(l, t), Kt(e, t, l), l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode, l.parentNode.removeChild(l)); break; case 27:Ae||wt(l, t); var a=ge, n=$e; yl(l.type) &&(ge=l.stateNode, $e=!1), Kt(e, t, l), hn(l.stateNode), ge=a, $e=n; break; case 5:Ae||wt(l, t); case 6:if(a=ge, n=$e, ge=null, Kt(e, t, l), ge=a, $e=n, ge!==null) if($e) try {
        (ge.nodeType===9?ge.body:ge.nodeName==="HTML" ?ge.ownerDocument.body:ge).removeChild(l.stateNode)
      } catch
      (u) {
        ie(l, t, u)
      } else
      try {
        ge.removeChild(l.stateNode)
      } catch
      (u) {
        ie(l, t, u)
      }
      break; case 18:ge!==null&&($e?(e=ge, L0(e.nodeType===9?e.body:e.nodeName==="HTML" ?e.ownerDocument.body:e, l.stateNode), Aa(e)) :L0(ge, l.stateNode)); break; case 4:a=ge, n=$e, ge=l.stateNode.containerInfo, $e=!0, Kt(e, t, l), ge=a, $e=n; break; case 0:case 11:case 14:case 15:ol(2, l, t), Ae||ol(4, l, t), Kt(e, t, l); break; case 1:Ae||(wt(l, t), a=l.stateNode, typeof a.componentWillUnmount=="function" &&Zr(l, t, a)), Kt(e, t, l); break; case 21:Kt(e, t, l); break; case 22:Ae=(a=Ae) ||l.memoizedState!==null, Kt(e, t, l), Ae=a; break; default:Kt(e, t, l)
    }
  }
  function Pr(e, t) {
    if(t.memoizedState===null&&(e=t.alternate, e!==null&&(e=e.memoizedState, e!==null))) {
      e=e.dehydrated; try {
        Aa(e)
      } catch
      (l) {
        ie(t, t.return, l)
      }
    }
  }
  function e0(e, t) {
    if(t.memoizedState===null&&(e=t.alternate, e!==null&&(e=e.memoizedState, e!==null&&(e=e.dehydrated, e!==null)))) try {
      Aa(e)
    } catch
    (l) {
      ie(t, t.return, l)
    }
  }
  function fm(e) {
    switch(e.tag) {
      case 31:case 13:case 19:var t=e.stateNode; return t===null&&(t=e.stateNode=new $r), t; case 22:return e=e.stateNode, t=e._retryCache, t===null&&(t=e._retryCache=new $r), t; default:throw Error(b(435, e.tag))
    }
  }
  function hu(e, t) {
    var l=fm(e); t.forEach(function(a) {
      if(!l.has(a)) {
        l.add(a); var n=vm.bind(null, e, a); a.then(n, n)
      }
    })
  }
  function We(e, t) {
    var l=t.deletions; if(l!==null) for(var a=0; a<l.length; a++) {
      var n=l[a], u=e, i=t, s=i; e:for(; s!==null;) {
        switch(s.tag) {
          case 27:if(yl(s.type)) {
            ge=s.stateNode, $e=!1; break e
          }
          break; case 5:ge=s.stateNode, $e=!1; break e; case 3:case 4:ge=s.stateNode.containerInfo, $e=!0; break e
        }
        s=s.return
      }
      if(ge===null) throw Error(b(160)); Ir(u, i, n), ge=null, $e=!1, u=n.alternate, u!==null&&(u.return=null), n.return=null
    }
    if(t.subtreeFlags&13886) for(t=t.child; t!==null;) t0(t, e), t=t.sibling
  }
  var At=null; function t0(e, t) {
    var l=e.alternate, a=e.flags; switch(e.tag) {
      case 0:case 11:case 14:case 15:We(t, e), Fe(e), a&4&&(ol(3, e, e.return), an(3, e), ol(5, e, e.return)); break; case 1:We(t, e), Fe(e), a&512&&(Ae||l===null||wt(l, l.return)), a&64&&Vt&&(e=e.updateQueue, e!==null&&(a=e.callbacks, a!==null&&(l=e.shared.hiddenCallbacks, e.shared.hiddenCallbacks=l===null?a:l.concat(a)))); break; case 26:var n=At; if(We(t, e), Fe(e), a&512&&(Ae||l===null||wt(l, l.return)), a&4) {
        var u=l!==null?l.memoizedState:null; if(a=e.memoizedState, l===null) if(a===null) if(e.stateNode===null) {
          e: {
            a=e.type, l=e.memoizedProps, n=n.ownerDocument||n; t:switch(a) {
              case"title" :u=n.getElementsByTagName("title") [0], (!u||u[Da]||u[qe]||u.namespaceURI==="http://www.w3.org/2000/svg" ||u.hasAttribute("itemprop")) &&(u=n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Qe(u, a, l), u[qe]=e, we(u), a=u; break e; case"link" :var i=td("link", "href", n).get(a+(l.href||"")); if(i) {
                for(var s=0; s<i.length; s++) if(u=i[s], u.getAttribute("href") ===(l.href==null||l.href==="" ?null:l.href) &&u.getAttribute("rel") ===(l.rel==null?null:l.rel) &&u.getAttribute("title") ===(l.title==null?null:l.title) &&u.getAttribute("crossorigin") ===(l.crossOrigin==null?null:l.crossOrigin)) {
                  i.splice(s, 1); break t
                }
              }
              u=n.createElement(a), Qe(u, a, l), n.head.appendChild(u); break; case"meta" :if(i=td("meta", "content", n).get(a+(l.content||""))) {
                for(s=0; s<i.length; s++) if(u=i[s], u.getAttribute("content") ===(l.content==null?null:"" +l.content) &&u.getAttribute("name") ===(l.name==null?null:l.name) &&u.getAttribute("property") ===(l.property==null?null:l.property) &&u.getAttribute("http-equiv") ===(l.httpEquiv==null?null:l.httpEquiv) &&u.getAttribute("charset") ===(l.charSet==null?null:l.charSet)) {
                  i.splice(s, 1); break t
                }
              }
              u=n.createElement(a), Qe(u, a, l), n.head.appendChild(u); break; default:throw Error(b(468, a))
            }
            u[qe]=e, we(u), a=u
          }
          e.stateNode=a
        } else
        ld(n, e.type, e.stateNode); else e.stateNode=ed(n, a, e.memoizedProps); else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode, l.parentNode.removeChild(l)) :u.count--, a===null?ld(n, e.type, e.stateNode) :ed(n, a, e.memoizedProps)) :a===null&&e.stateNode!==null&&yc(e, e.memoizedProps, l.memoizedProps)
      }
      break; case 27:We(t, e), Fe(e), a&512&&(Ae||l===null||wt(l, l.return)), l!==null&&a&4&&yc(e, e.memoizedProps, l.memoizedProps); break; case 5:if(We(t, e), Fe(e), a&512&&(Ae||l===null||wt(l, l.return)), e.flags&32) {
        n=e.stateNode; try {
          Wl(n, "")
        } catch
        (M) {
          ie(e, e.return, M)
        }
      }
      a&4&&e.stateNode!=null&&(n=e.memoizedProps, yc(e, n, l!==null?l.memoizedProps:n)), a&1024&&(jc=!0); break; case 6:if(We(t, e), Fe(e), a&4) {
        if(e.stateNode===null) throw Error(b(162)); a=e.memoizedProps, l=e.stateNode; try {
          l.nodeValue=a
        } catch
        (M) {
          ie(e, e.return, M)
        }
      }
      break; case 3:if(Ou=null, n=At, At=_u(t.containerInfo), We(t, e), At=n, Fe(e), a&4&&l!==null&&l.memoizedState.isDehydrated) try {
        Aa(t.containerInfo)
      } catch
      (M) {
        ie(e, e.return, M)
      }
      jc&&(jc=!1, l0(e)); break; case 4:a=At, At=_u(e.stateNode.containerInfo), We(t, e), Fe(e), At=a; break; case 12:We(t, e), Fe(e); break; case 31:We(t, e), Fe(e), a&4&&(a=e.updateQueue, a!==null&&(e.updateQueue=null, hu(e, a))); break; case 13:We(t, e), Fe(e), e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null) &&(xu=nt()), a&4&&(a=e.updateQueue, a!==null&&(e.updateQueue=null, hu(e, a))); break; case 22:n=e.memoizedState!==null; var f=l!==null&&l.memoizedState!==null, h=Vt, p=Ae; if(Vt=h||n, Ae=p||f, We(t, e), Ae=p, Vt=h, Fe(e), a&8192) e:for(t=e.stateNode, t._visibility=n?t._visibility&-2:t._visibility|1, n&&(l===null||f||Vt||Ae||Ql(e)), l=null, t=e;;) {
        if(t.tag===5||t.tag===26) {
          if(l===null) {
            f=l=t; try {
              if(u=f.stateNode, n) i=u.style, typeof i.setProperty=="function" ?i.setProperty("display", "none", "important") :i.display="none"; else {
                s=f.stateNode; var j=f.memoizedProps.style, g=j!=null&&j.hasOwnProperty("display") ?j.display:null; s.style.display=g==null||typeof g=="boolean" ?"" :("" +g).trim()
              }
            } catch
            (M) {
              ie(f, f.return, M)
            }
          }
        } else
        if(t.tag===6) {
          if(l===null) {
            f=t; try {
              f.stateNode.nodeValue=n?"" :f.memoizedProps
            } catch
            (M) {
              ie(f, f.return, M)
            }
          }
        } else
        if(t.tag===18) {
          if(l===null) {
            f=t; try {
              var v=f.stateNode; n?Z0(v, !0) :Z0(f.stateNode, !1)
            } catch
            (M) {
              ie(f, f.return, M)
            }
          }
        } else
        if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e) &&t.child!==null) {
          t.child.return=t, t=t.child; continue
        }
        if(t===e) break e; for(; t.sibling===null;) {
          if(t.return===null||t.return===e) break e; l===t&&(l=null), t=t.return
        }
        l===t&&(l=null), t.sibling.return=t.return, t=t.sibling
      }
      a&4&&(a=e.updateQueue, a!==null&&(l=a.retryQueue, l!==null&&(a.retryQueue=null, hu(e, l)))); break; case 19:We(t, e), Fe(e), a&4&&(a=e.updateQueue, a!==null&&(e.updateQueue=null, hu(e, a))); break; case 30:break; case 21:break; default:We(t, e), Fe(e)
    }
  }
  function Fe(e) {
    var t=e.flags; if(t&2) {
      try {
        for(var l, a=e.return; a!==null;) {
          if(Kr(a)) {
            l=a; break
          }
          a=a.return
        }
        if(l==null) throw Error(b(160)); switch(l.tag) {
          case 27:var n=l.stateNode, u=pc(e); mu(e, u, n); break; case 5:var i=l.stateNode; l.flags&32&&(Wl(i, ""), l.flags&=-33); var s=pc(e); mu(e, s, i); break; case 3:case 4:var f=l.stateNode.containerInfo, h=pc(e); Sc(e, h, f); break; default:throw Error(b(161))
        }
      } catch
      (p) {
        ie(e, e.return, p)
      }
      e.flags&=-3
    }
    t&4096&&(e.flags&=-4097)
  }
  function l0(e) {
    if(e.subtreeFlags&1024) for(e=e.child; e!==null;) {
      var t=e; l0(t), t.tag===5&&t.flags&1024&&t.stateNode.reset(), e=e.sibling
    }
  }
  function Jt(e, t) {
    if(t.subtreeFlags&8772) for(t=t.child; t!==null;) Wr(e, t.alternate, t), t=t.sibling
  }
  function Ql(e) {
    for(e=e.child; e!==null;) {
      var t=e; switch(t.tag) {
        case 0:case 11:case 14:case 15:ol(4, t, t.return), Ql(t); break; case 1:wt(t, t.return); var l=t.stateNode; typeof l.componentWillUnmount=="function" &&Zr(t, t.return, l), Ql(t); break; case 27:hn(t.stateNode); case 26:case 5:wt(t, t.return), Ql(t); break; case 22:t.memoizedState===null&&Ql(t); break; case 30:Ql(t); break; default:Ql(t)
      }
      e=e.sibling
    }
  }
  function $t(e, t, l) {
    for(l=l&&(t.subtreeFlags&8772) !==0, t=t.child; t!==null;) {
      var a=t.alternate, n=e, u=t, i=u.flags; switch(u.tag) {
        case 0:case 11:case 15:$t(n, u, l), an(4, u); break; case 1:if($t(n, u, l), a=u, n=a.stateNode, typeof n.componentDidMount=="function") try {
          n.componentDidMount()
        } catch
        (h) {
          ie(a, a.return, h)
        }
        if(a=u, n=a.updateQueue, n!==null) {
          var s=a.stateNode; try {
            var f=n.shared.hiddenCallbacks; if(f!==null) for(n.shared.hiddenCallbacks=null, n=0; n<f.length; n++) wf(f[n], s)
          } catch
          (h) {
            ie(a, a.return, h)
          }
        }
        l&&i&64&&Lr(u), nn(u, u.return); break; case 27:Jr(u); case 26:case 5:$t(n, u, l), l&&a===null&&i&4&&Vr(u), nn(u, u.return); break; case 12:$t(n, u, l); break; case 31:$t(n, u, l), l&&i&4&&Pr(n, u); break; case 13:$t(n, u, l), l&&i&4&&e0(n, u); break; case 22:u.memoizedState===null&&$t(n, u, l), nn(u, u.return); break; case 30:break; default:$t(n, u, l)
      }
      t=t.sibling
    }
  }
  function Nc(e, t) {
    var l=null; e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool), e=null, t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool), e!==l&&(e!=null&&e.refCount++, l!=null&&La(l))
  }
  function zc(e, t) {
    e=null, t.alternate!==null&&(e=t.alternate.memoizedState.cache), t=t.memoizedState.cache, t!==e&&(t.refCount++, e!=null&&La(e))
  }
  function _t(e, t, l, a) {
    if(t.subtreeFlags&10256) for(t=t.child; t!==null;) a0(e, t, l, a), t=t.sibling
  }
  function a0(e, t, l, a) {
    var n=t.flags; switch(t.tag) {
      case 0:case 11:case 15:_t(e, t, l, a), n&2048&&an(9, t); break; case 1:_t(e, t, l, a); break; case 3:_t(e, t, l, a), n&2048&&(e=null, t.alternate!==null&&(e=t.alternate.memoizedState.cache), t=t.memoizedState.cache, t!==e&&(t.refCount++, e!=null&&La(e))); break; case 12:if(n&2048) {
        _t(e, t, l, a), e=t.stateNode; try {
          var u=t.memoizedProps, i=u.id, s=u.onPostCommit; typeof s=="function" &&s(i, t.alternate===null?"mount" :"update", e.passiveEffectDuration, -0)
        } catch
        (f) {
          ie(t, t.return, f)
        }
      } else
      _t(e, t, l, a); break; case 31:_t(e, t, l, a); break; case 13:_t(e, t, l, a); break; case 23:break; case 22:u=t.stateNode, i=t.alternate, t.memoizedState!==null?u._visibility&2?_t(e, t, l, a) :un(e, t) :u._visibility&2?_t(e, t, l, a) :(u._visibility|=2, xa(e, t, l, a, (t.subtreeFlags&10256) !==0||!1)), n&2048&&Nc(i, t); break; case 24:_t(e, t, l, a), n&2048&&zc(t.alternate, t); break; default:_t(e, t, l, a)
    }
  }
  function xa(e, t, l, a, n) {
    for(n=n&&((t.subtreeFlags&10256) !==0||!1), t=t.child; t!==null;) {
      var u=e, i=t, s=l, f=a, h=i.flags; switch(i.tag) {
        case 0:case 11:case 15:xa(u, i, s, f, n), an(8, i); break; case 23:break; case 22:var p=i.stateNode; i.memoizedState!==null?p._visibility&2?xa(u, i, s, f, n) :un(u, i) :(p._visibility|=2, xa(u, i, s, f, n)), n&&h&2048&&Nc(i.alternate, i); break; case 24:xa(u, i, s, f, n), n&&h&2048&&zc(i.alternate, i); break; default:xa(u, i, s, f, n)
      }
      t=t.sibling
    }
  }
  function un(e, t) {
    if(t.subtreeFlags&10256) for(t=t.child; t!==null;) {
      var l=e, a=t, n=a.flags; switch(a.tag) {
        case 22:un(l, a), n&2048&&Nc(a.alternate, a); break; case 24:un(l, a), n&2048&&zc(a.alternate, a); break; default:un(l, a)
      }
      t=t.sibling
    }
  }
  var cn=8192; function ga(e, t, l) {
    if(e.subtreeFlags&cn) for(e=e.child; e!==null;) n0(e, t, l), e=e.sibling
  }
  function n0(e, t, l) {
    switch(e.tag) {
      case 26:ga(e, t, l), e.flags&cn&&e.memoizedState!==null&&$m(l, At, e.memoizedState, e.memoizedProps); break; case 5:ga(e, t, l); break; case 3:case 4:var a=At; At=_u(e.stateNode.containerInfo), ga(e, t, l), At=a; break; case 22:e.memoizedState===null&&(a=e.alternate, a!==null&&a.memoizedState!==null?(a=cn, cn=16777216, ga(e, t, l), cn=a) :ga(e, t, l)); break; default:ga(e, t, l)
    }
  }
  function u0(e) {
    var t=e.alternate; if(t!==null&&(e=t.child, e!==null)) {
      t.child=null; do t=e.sibling, e.sibling=null, e=t; while(e!==null)
    }
  }
  function sn(e) {
    var t=e.deletions; if((e.flags&16) !==0) {
      if(t!==null) for(var l=0; l<t.length; l++) {
        var a=t[l]; Ue=a, c0(a, e)
      }
      u0(e)
    }
    if(e.subtreeFlags&10256) for(e=e.child; e!==null;) i0(e), e=e.sibling
  }
  function i0(e) {
    switch(e.tag) {
      case 0:case 11:case 15:sn(e), e.flags&2048&&ol(9, e, e.return); break; case 3:sn(e); break; case 12:sn(e); break; case 22:var t=e.stateNode; e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13) ?(t._visibility&=-3, bu(e)) :sn(e); break; default:sn(e)
    }
  }
  function bu(e) {
    var t=e.deletions; if((e.flags&16) !==0) {
      if(t!==null) for(var l=0; l<t.length; l++) {
        var a=t[l]; Ue=a, c0(a, e)
      }
      u0(e)
    }
    for(e=e.child; e!==null;) {
      switch(t=e, t.tag) {
        case 0:case 11:case 15:ol(8, t, t.return), bu(t); break; case 22:l=t.stateNode, l._visibility&2&&(l._visibility&=-3, bu(t)); break; default:bu(t)
      }
      e=e.sibling
    }
  }
  function c0(e, t) {
    for(; Ue!==null;) {
      var l=Ue; switch(l.tag) {
        case 0:case 11:case 15:ol(8, l, t); break; case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null) {
          var a=l.memoizedState.cachePool.pool; a!=null&&a.refCount++
        }
        break; case 24:La(l.memoizedState.cache)
      }
      if(a=l.child, a!==null) a.return=l, Ue=a; else e:for(l=e; Ue!==null;) {
        a=Ue; var n=a.sibling, u=a.return; if(Fr(a), a===l) {
          Ue=null; break e
        }
        if(n!==null) {
          n.return=u, Ue=n; break e
        }
        Ue=u
      }
    }
  }
  var rm= {
    getCacheForType:function(e) {
      var t=Ye(ze), l=t.data.get(e); return l===void 0&&(l=e(), t.data.set(e, l)), l
    },
    cacheSignal:function() {
      return Ye(ze).controller.signal
    }
  },
  dm=typeof WeakMap=="function" ?WeakMap:Map, ae=0, re=null, V=null, J=0, ue=0, dt=null, ml=!1, va=!1, Tc=!1, Wt=0, Se=0, hl=0, Xl=0, Ec=0, ot=0, ya=0, fn=null, Ie=null, Ac=!1, xu=0, s0=0, gu=1 / 0, vu=null, bl=null, Me=0, xl=null, pa=null, Ft=0, _c=0, Mc=null, f0=null, rn=0, Oc=null; function mt() {
    return(ae&2) !==0&&J!==0?J&-J:y.T!==null?Hc() :zs()
  }
  function r0() {
    if(ot===0) if((J&536870912) ===0||I) {
      var e=En; En<<=1, (En&3932160) ===0&&(En=262144), ot=e
    } else
    ot=536870912; return e=ft.current, e!==null&&(e.flags|=32), ot
  }
  function Pe(e, t, l) {
    (e===re&&(ue===2||ue===9) ||e.cancelPendingCommit!==null) &&(Sa(e, 0), gl(e, J, ot, !1)), Oa(e, l), ((ae&2) ===0||e!==re) &&(e===re&&((ae&2) ===0&&(Xl|=l), Se===4&&gl(e, J, ot, !1)), Ut(e))
  }
  function d0(e, t, l) {
    if((ae&6) !==0) throw Error(b(327)); var a=!l&&(t&127) ===0&&(t&e.expiredLanes) ===0||Ma(e, t), n=a?hm(e, t) :kc(e, t, !0), u=a; do {
      if(n===0) {
        va&&!a&&gl(e, t, 0, !1); break
      } else
      {
        if(l=e.current.alternate, u&&!om(l)) {
          n=kc(e, t, !1), u=!1; continue
        }
        if(n===2) {
          if(u=t, e.errorRecoveryDisabledLanes&u) var i=0; else i=e.pendingLanes&-536870913, i=i!==0?i:i&536870912?536870912:0; if(i!==0) {
            t=i; e: {
              var s=e; n=fn; var f=s.current.memoizedState.isDehydrated; if(f&&(Sa(s, i).flags|=256), i=kc(s, i, !1), i!==2) {
                if(Tc&&!f) {
                  s.errorRecoveryDisabledLanes|=u, Xl|=u, n=4; break e
                }
                u=Ie, Ie=n, u!==null&&(Ie===null?Ie=u:Ie.push.apply(Ie, u))
              }
              n=i
            }
            if(u=!1, n!==2) continue
          }
        }
        if(n===1) {
          Sa(e, 0), gl(e, t, 0, !0); break
        }
        e: {
          switch(a=e, u=n, u) {
            case 0:case 1:throw Error(b(345)); case 4:if((t&4194048) !==t) break; case 6:gl(a, t, ot, !ml); break e; case 2:Ie=null; break; case 3:case 5:break; default:throw Error(b(329))
          }
          if((t&62914560) ===t&&(n=xu+300-nt(), 10<n)) {
            if(gl(a, t, ot, !ml), _n(a, 0, !0) !==0) break e; Ft=t, a.timeoutHandle=Q0(o0.bind(null, a, l, Ie, vu, Ac, t, ot, Xl, ya, ml, u, "Throttled", -0, 0), n); break e
          }
          o0(a, l, Ie, vu, Ac, t, ot, Xl, ya, ml, u, null, -0, 0)
        }
      }
      break
    } while
    (!0); Ut(e)
  }
  function o0(e, t, l, a, n, u, i, s, f, h, p, j, g, v) {
    if(e.timeoutHandle=-1, j=t.subtreeFlags, j&8192||(j&16785408) ===16785408) {
      j= {
        stylesheets:null, count:0, imgCount:0, imgBytes:0, suspenseyImages:[], waitingForImages:!0, waitingForViewTransition:!1, unsuspend:Ht
      },
      n0(t, u, j); var M=(u&62914560) ===u?xu-nt() :(u&4194048) ===u?s0-nt() :0; if(M=Wm(j, M), M!==null) {
        Ft=u, e.cancelPendingCommit=M(p0.bind(null, e, t, u, l, a, n, i, s, f, p, j, null, g, v)), gl(e, u, i, !h); return
      }
    }
    p0(e, t, u, l, a, n, i, s, f)
  }
  function om(e) {
    for(var t=e;;) {
      var l=t.tag; if((l===0||l===11||l===15) &&t.flags&16384&&(l=t.updateQueue, l!==null&&(l=l.stores, l!==null))) for(var a=0; a<l.length; a++) {
        var n=l[a], u=n.getSnapshot; n=n.value; try {
          if(!ct(u(), n)) return!1
        } catch
        {
          return!1
        }
      }
      if(l=t.child, t.subtreeFlags&16384&&l!==null) l.return=t, t=l; else {
        if(t===e) break; for(; t.sibling===null;) {
          if(t.return===null||t.return===e) return!0; t=t.return
        }
        t.sibling.return=t.return, t=t.sibling
      }
    }
    return!0
  }
  function gl(e, t, l, a) {
    t&=~Ec, t&=~Xl, e.suspendedLanes|=t, e.pingedLanes&=~t, a&&(e.warmLanes|=t), a=e.expirationTimes; for(var n=t; 0<n;) {
      var u=31-it(n), i=1<<u; a[u]=-1, n&=~i
    }
    l!==0&&Ss(e, l, t)
  }
  function yu() {
    return(ae&6) ===0?(dn(0), !1) :!0
  }
  function Dc() {
    if(V!==null) {
      if(ue===0) var e=V.return; else e=V, Yt=Ul=null, Ki(e), da=null, Va=0, e=V; for(; e!==null;) Xr(e.alternate, e), e=e.return; V=null
    }
  }
  function Sa(e, t) {
    var l=e.timeoutHandle; l!==-1&&(e.timeoutHandle=-1, km(l)), l=e.cancelPendingCommit, l!==null&&(e.cancelPendingCommit=null, l()), Ft=0, Dc(), re=e, V=l=qt(e.current, null), J=t, ue=0, dt=null, ml=!1, va=Ma(e, t), Tc=!1, ya=ot=Ec=Xl=hl=Se=0, Ie=fn=null, Ac=!1, (t&8) !==0&&(t|=t&32); var a=e.entangledLanes; if(a!==0) for(e=e.entanglements, a&=t; 0<a;) {
      var n=31-it(a), u=1<<n; t|=e[n], a&=~u
    }
    return Wt=t, Yn(), l
  }
  function m0(e, t) {
    Q=null, y.H=en, t===ra||t===Jn?(t=Mf(), ue=3) :t===Ci?(t=Mf(), ue=4) :ue=t===fc?8:t!==null&&typeof t=="object" &&typeof t.then=="function" ?6:1, dt=t, V===null&&(Se=1, su(e, vt(t, e.current)))
  }
  function h0() {
    var e=ft.current; return e===null?!0:(J&4194048) ===J?jt===null:(J&62914560) ===J||(J&536870912) !==0?e===jt:!1
  }
  function b0() {
    var e=y.H; return y.H=en, e===null?en:e
  }
  function x0() {
    var e=y.A; return y.A=rm, e
  }
  function pu() {
    Se=4, ml||(J&4194048) !==J&&ft.current!==null||(va=!0), (hl&134217727) ===0&&(Xl&134217727) ===0||re===null||gl(re, J, ot, !1)
  }
  function kc(e, t, l) {
    var a=ae; ae|=2; var n=b0(), u=x0();(re!==e||J!==t) &&(vu=null, Sa(e, t)), t=!1; var i=Se; e:do try {
      if(ue!==0&&V!==null) {
        var s=V, f=dt; switch(ue) {
          case 8:Dc(), i=6; break e; case 3:case 2:case 9:case 6:ft.current===null&&(t=!0); var h=ue; if(ue=0, dt=null, ja(e, s, f, h), l&&va) {
            i=0; break e
          }
          break; default:h=ue, ue=0, dt=null, ja(e, s, f, h)
        }
      }
      mm(), i=Se; break
    } catch
    (p) {
      m0(e, p)
    } while
    (!0); return t&&e.shellSuspendCounter++, Yt=Ul=null, ae=a, y.H=n, y.A=u, V===null&&(re=null, J=0, Yn()), i
  }
  function mm() {
    for(; V!==null;) g0(V)
  }
  function hm(e, t) {
    var l=ae; ae|=2; var a=b0(), n=x0(); re!==e||J!==t?(vu=null, gu=nt() +500, Sa(e, t)) :va=Ma(e, t); e:do try {
      if(ue!==0&&V!==null) {
        t=V; var u=dt; t:switch(ue) {
          case 1:ue=0, dt=null, ja(e, t, u, 1); break; case 2:case 9:if(Af(u)) {
            ue=0, dt=null, v0(t); break
          }
          t=function() {
            ue!==2&&ue!==9||re!==e||(ue=7), Ut(e)
          },
          u.then(t, t); break e; case 3:ue=7; break e; case 4:ue=5; break e; case 7:Af(u) ?(ue=0, dt=null, v0(t)) :(ue=0, dt=null, ja(e, t, u, 7)); break; case 5:var i=null; switch(V.tag) {
            case 26:i=V.memoizedState; case 5:case 27:var s=V; if(i?ad(i) :s.stateNode.complete) {
              ue=0, dt=null; var f=s.sibling; if(f!==null) V=f; else {
                var h=s.return; h!==null?(V=h, Su(h)) :V=null
              }
              break t
            }
          }
          ue=0, dt=null, ja(e, t, u, 5); break; case 6:ue=0, dt=null, ja(e, t, u, 6); break; case 8:Dc(), Se=6; break e; default:throw Error(b(462))
        }
      }
      bm(); break
    } catch
    (p) {
      m0(e, p)
    } while
    (!0); return Yt=Ul=null, y.H=a, y.A=n, ae=l, V!==null?0:(re=null, J=0, Yn(), Se)
  }
  function bm() {
    for(; V!==null&&!Rd();) g0(V)
  }
  function g0(e) {
    var t=Gr(e.alternate, e, Wt); e.memoizedProps=e.pendingProps, t===null?Su(e) :V=t
  }
  function v0(e) {
    var t=e, l=t.alternate; switch(t.tag) {
      case 15:case 0:t=Cr(l, t, t.pendingProps, t.type, void 0, J); break; case 11:t=Cr(l, t, t.pendingProps, t.type.render, t.ref, J); break; case 5:Ki(t); default:Xr(l, t), t=V=xf(t, Wt), t=Gr(l, t, Wt)
    }
    e.memoizedProps=e.pendingProps, t===null?Su(e) :V=t
  }
  function ja(e, t, l, a) {
    Yt=Ul=null, Ki(t), da=null, Va=0; var n=t.return; try {
      if(am(e, n, t, l, J)) {
        Se=1, su(e, vt(l, e.current)), V=null; return
      }
    } catch
    (u) {
      if(n!==null) throw V=n, u; Se=1, su(e, vt(l, e.current)), V=null; return
    }
    t.flags&32768?(I||a===1?e=!0:va||(J&536870912) !==0?e=!1:(ml=e=!0, (a===2||a===9||a===3||a===6) &&(a=ft.current, a!==null&&a.tag===13&&(a.flags|=16384))), y0(t, e)) :Su(t)
  }
  function Su(e) {
    var t=e; do {
      if((t.flags&32768) !==0) {
        y0(t, ml); return
      }
      e=t.return; var l=im(t.alternate, t, Wt); if(l!==null) {
        V=l; return
      }
      if(t=t.sibling, t!==null) {
        V=t; return
      }
      V=t=e
    } while
    (t!==null); Se===0&&(Se=5)
  }
  function y0(e, t) {
    do {
      var l=cm(e.alternate, e); if(l!==null) {
        l.flags&=32767, V=l; return
      }
      if(l=e.return, l!==null&&(l.flags|=32768, l.subtreeFlags=0, l.deletions=null), !t&&(e=e.sibling, e!==null)) {
        V=e; return
      }
      V=e=l
    } while
    (e!==null); Se=6, V=null
  }
  function p0(e, t, l, a, n, u, i, s, f) {
    e.cancelPendingCommit=null; do ju(); while(Me!==0); if((ae&6) !==0) throw Error(b(327)); if(t!==null) {
      if(t===e.current) throw Error(b(177)); if(u=t.lanes|t.childLanes, u|=pi, Kd(e, l, u, i, s, f), e===re&&(V=re=null, J=0), pa=t, xl=e, Ft=l, _c=u, Mc=n, f0=a, (t.subtreeFlags&10256) !==0||(t.flags&10256) !==0?(e.callbackNode=null, e.callbackPriority=0, ym(zn, function() {
        return T0(), null
      }))
      :(e.callbackNode=null, e.callbackPriority=0), a=(t.flags&13878) !==0, (t.subtreeFlags&13878) !==0||a) {
        a=y.T, y.T=null, n=E.p, E.p=2, i=ae, ae|=4; try {
          sm(e, t, l)
        } finally
        {
          ae=i, E.p=n, y.T=a
        }
      }
      Me=1, S0(), j0(), N0()
    }
  }
  function S0() {
    if(Me===1) {
      Me=0; var e=xl, t=pa, l=(t.flags&13878) !==0; if((t.subtreeFlags&13878) !==0||l) {
        l=y.T, y.T=null; var a=E.p; E.p=2; var n=ae; ae|=4; try {
          t0(t, e); var u=Lc, i=cf(e.containerInfo), s=u.focusedElem, f=u.selectionRange; if(i!==s&&s&&s.ownerDocument&&uf(s.ownerDocument.documentElement, s)) {
            if(f!==null&&bi(s)) {
              var h=f.start, p=f.end; if(p===void 0&&(p=h), "selectionStart" in s) s.selectionStart=h, s.selectionEnd=Math.min(p, s.value.length); else {
                var j=s.ownerDocument||document, g=j&&j.defaultView||window; if(g.getSelection) {
                  var v=g.getSelection(), M=s.textContent.length, U=Math.min(f.start, M), fe=f.end===void 0?U:Math.min(f.end, M); !v.extend&&U>fe&&(i=fe, fe=U, U=i); var o=nf(s, U), r=nf(s, fe); if(o&&r&&(v.rangeCount!==1||v.anchorNode!==o.node||v.anchorOffset!==o.offset||v.focusNode!==r.node||v.focusOffset!==r.offset)) {
                    var m=j.createRange(); m.setStart(o.node, o.offset), v.removeAllRanges(), U>fe?(v.addRange(m), v.extend(r.node, r.offset)) :(m.setEnd(r.node, r.offset), v.addRange(m))
                  }
                }
              }
            }
            for(j=[], v=s; v=v.parentNode;) v.nodeType===1&&j.push({
              element:v, left:v.scrollLeft, top:v.scrollTop
            });
            for(typeof s.focus=="function" &&s.focus(), s=0; s<j.length; s++) {
              var S=j[s]; S.element.scrollLeft=S.left, S.element.scrollTop=S.top
            }
          }
          Uu=!!Xc, Lc=Xc=null
        } finally
        {
          ae=n, E.p=a, y.T=l
        }
      }
      e.current=t, Me=2
    }
  }
  function j0() {
    if(Me===2) {
      Me=0; var e=xl, t=pa, l=(t.flags&8772) !==0; if((t.subtreeFlags&8772) !==0||l) {
        l=y.T, y.T=null; var a=E.p; E.p=2; var n=ae; ae|=4; try {
          Wr(e, t.alternate, t)
        } finally
        {
          ae=n, E.p=a, y.T=l
        }
      }
      Me=3
    }
  }
  function N0() {
    if(Me===4||Me===3) {
      Me=0, qd(); var e=xl, t=pa, l=Ft, a=f0;(t.subtreeFlags&10256) !==0||(t.flags&10256) !==0?Me=5:(Me=0, pa=xl=null, z0(e, e.pendingLanes)); var n=e.pendingLanes; if(n===0&&(bl=null), Wu(l), t=t.stateNode, ut&&typeof ut.onCommitFiberRoot=="function") try {
        ut.onCommitFiberRoot(_a, t, void 0, (t.current.flags&128) ===128)
      } catch
      {
      }
      if(a!==null) {
        t=y.T, n=E.p, E.p=2, y.T=null; try {
          for(var u=e.onRecoverableError, i=0; i<a.length; i++) {
            var s=a[i]; u(s.value, {
              componentStack:s.stack
            })
          }
        } finally
        {
          y.T=t, E.p=n
        }
      }
      (Ft&3) !==0&&ju(), Ut(e), n=e.pendingLanes, (l&261930) !==0&&(n&42) !==0?e===Oc?rn++:(rn=0, Oc=e) :rn=0, dn(0)
    }
  }
  function z0(e, t) {
    (e.pooledCacheLanes&=t) ===0&&(t=e.pooledCache, t!=null&&(e.pooledCache=null, La(t)))
  }
  function ju() {
    return S0(), j0(), N0(), T0()
  }
  function T0() {
    if(Me!==5) return!1; var e=xl, t=_c; _c=0; var l=Wu(Ft), a=y.T, n=E.p; try {
      E.p=32>l?32:l, y.T=null, l=Mc, Mc=null; var u=xl, i=Ft; if(Me=0, pa=xl=null, Ft=0, (ae&6) !==0) throw Error(b(331)); var s=ae; if(ae|=4, i0(u.current), a0(u, u.current, i, l), ae=s, dn(0, !1), ut&&typeof ut.onPostCommitFiberRoot=="function") try {
        ut.onPostCommitFiberRoot(_a, u)
      } catch
      {
      }
      return!0
    } finally
    {
      E.p=n, y.T=a, z0(e, t)
    }
  }
  function E0(e, t, l) {
    t=vt(l, t), t=sc(e.stateNode, t, 2), e=fl(e, t, 2), e!==null&&(Oa(e, 2), Ut(e))
  }
  function ie(e, t, l) {
    if(e.tag===3) E0(e, e, l); else for(; t!==null;) {
      if(t.tag===3) {
        E0(t, e, l); break
      } else
      if(t.tag===1) {
        var a=t.stateNode; if(typeof t.type.getDerivedStateFromError=="function" ||typeof a.componentDidCatch=="function" &&(bl===null||!bl.has(a))) {
          e=vt(l, e), l=Ar(2), a=fl(t, l, 2), a!==null&&(_r(l, a, t, e), Oa(a, 2), Ut(a)); break
        }
      }
      t=t.return
    }
  }
  function wc(e, t, l) {
    var a=e.pingCache; if(a===null) {
      a=e.pingCache=new dm; var n=new Set; a.set(t, n)
    } else
    n=a.get(t), n===void 0&&(n=new Set, a.set(t, n)); n.has(l) ||(Tc=!0, n.add(l), e=xm.bind(null, e, t, l), t.then(e, e))
  }
  function xm(e, t, l) {
    var a=e.pingCache; a!==null&&a.delete(t), e.pingedLanes|=e.suspendedLanes&l, e.warmLanes&=~l, re===e&&(J&l) ===l&&(Se===4||Se===3&&(J&62914560) ===J&&300>nt() -xu?(ae&2) ===0&&Sa(e, 0) :Ec|=l, ya===J&&(ya=0)), Ut(e)
  }
  function A0(e, t) {
    t===0&&(t=ps()), e=Dl(e, t), e!==null&&(Oa(e, t), Ut(e))
  }
  function gm(e) {
    var t=e.memoizedState, l=0; t!==null&&(l=t.retryLane), A0(e, l)
  }
  function vm(e, t) {
    var l=0; switch(e.tag) {
      case 31:case 13:var a=e.stateNode, n=e.memoizedState; n!==null&&(l=n.retryLane); break; case 19:a=e.stateNode; break; case 22:a=e.stateNode._retryCache; break; default:throw Error(b(314))
    }
    a!==null&&a.delete(t), A0(e, l)
  }
  function ym(e, t) {
    return Vu(e, t)
  }
  var Nu=null, Na=null, Uc=!1, zu=!1, Cc=!1, vl=0; function Ut(e) {
    e!==Na&&e.next===null&&(Na===null?Nu=Na=e:Na=Na.next=e), zu=!0, Uc||(Uc=!0, Sm())
  }
  function dn(e, t) {
    if(!Cc&&zu) {
      Cc=!0; do for(var l=!1, a=Nu; a!==null;) {
        if(e!==0) {
          var n=a.pendingLanes; if(n===0) var u=0; else {
            var i=a.suspendedLanes, s=a.pingedLanes; u=(1<<31-it(42|e) +1) -1, u&=n&~(i&~s), u=u&201326741?u&201326741|1:u?u|2:0
          }
          u!==0&&(l=!0, D0(a, u))
        } else
        u=J, u=_n(a, a===re?u:0, a.cancelPendingCommit!==null||a.timeoutHandle!==-1), (u&3) ===0||Ma(a, u) ||(l=!0, D0(a, u)); a=a.next
      } while
      (l); Cc=!1
    }
  }
  function pm() {
    _0()
  }
  function _0() {
    zu=Uc=!1; var e=0; vl!==0&&Dm() &&(e=vl); for(var t=nt(), l=null, a=Nu; a!==null;) {
      var n=a.next, u=M0(a, t); u===0?(a.next=null, l===null?Nu=n:l.next=n, n===null&&(Na=l)) :(l=a, (e!==0||(u&3) !==0) &&(zu=!0)), a=n
    }
    Me!==0&&Me!==5||dn(e), vl!==0&&(vl=0)
  }
  function M0(e, t) {
    for(var l=e.suspendedLanes, a=e.pingedLanes, n=e.expirationTimes, u=e.pendingLanes&-62914561; 0<u;) {
      var i=31-it(u), s=1<<i, f=n[i]; f===-1?((s&l) ===0||(s&a) !==0) &&(n[i]=Vd(s, t)) :f<=t&&(e.expiredLanes|=s), u&=~s
    }
    if(t=re, l=J, l=_n(e, e===t?l:0, e.cancelPendingCommit!==null||e.timeoutHandle!==-1), a=e.callbackNode, l===0||e===t&&(ue===2||ue===9) ||e.cancelPendingCommit!==null) return a!==null&&a!==null&&Ku(a), e.callbackNode=null, e.callbackPriority=0; if((l&3) ===0||Ma(e, l)) {
      if(t=l&-l, t===e.callbackPriority) return t; switch(a!==null&&Ku(a), Wu(l)) {
        case 2:case 8:l=vs; break; case 32:l=zn; break; case 268435456:l=ys; break; default:l=zn
      }
      return a=O0.bind(null, e), l=Vu(l, a), e.callbackPriority=t, e.callbackNode=l, t
    }
    return a!==null&&a!==null&&Ku(a), e.callbackPriority=2, e.callbackNode=null, 2
  }
  function O0(e, t) {
    if(Me!==0&&Me!==5) return e.callbackNode=null, e.callbackPriority=0, null; var l=e.callbackNode; if(ju() &&e.callbackNode!==l) return null; var a=J; return a=_n(e, e===re?a:0, e.cancelPendingCommit!==null||e.timeoutHandle!==-1), a===0?null:(d0(e, a, t), M0(e, nt()), e.callbackNode!=null&&e.callbackNode===l?O0.bind(null, e) :null)
  }
  function D0(e, t) {
    if(ju()) return null; d0(e, t, !0)
  }
  function Sm() {
    wm(function() {
      (ae&6) !==0?Vu(gs, pm) :_0()
    })
  }
  function Hc() {
    if(vl===0) {
      var e=sa; e===0&&(e=Tn, Tn<<=1, (Tn&261888) ===0&&(Tn=256)), vl=e
    }
    return vl
  }
  function k0(e) {
    return e==null||typeof e=="symbol" ||typeof e=="boolean" ?null:typeof e=="function" ?e:kn("" +e)
  }
  function w0(e, t) {
    var l=t.ownerDocument.createElement("input"); return l.name=t.name, l.value=t.value, e.id&&l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e=new FormData(e), l.parentNode.removeChild(l), e
  }
  function jm(e, t, l, a, n) {
    if(t==="submit" &&l&&l.stateNode===n) {
      var u=k0((n[Ke]||null).action), i=a.submitter; i&&(t=(t=i[Ke]||null) ?k0(t.formAction) :i.getAttribute("formAction"), t!==null&&(u=t, i=null)); var s=new Hn("action", "action", null, a, n); e.push({
        event:s, listeners:[{
          instance:null, listener:function() {
            if(a.defaultPrevented) {
              if(vl!==0) {
                var f=i?w0(n, i) :new FormData(n); lc(l, {
                  pending:!0, data:f, method:n.method, action:u
                },
                null, f)
              }
            } else
            typeof u=="function" &&(s.preventDefault(), f=i?w0(n, i) :new FormData(n), lc(l, {
              pending:!0, data:f, method:n.method, action:u
            },
            u, f))
          },
          currentTarget:n
        }
        ]
      })
    }
  }
  for(var Rc=0; Rc<yi.length; Rc++) {
    var qc=yi[Rc], Nm=qc.toLowerCase(), zm=qc[0].toUpperCase() +qc.slice(1); Et(Nm, "on" +zm)
  }
  Et(rf, "onAnimationEnd"), Et(df, "onAnimationIteration"), Et(of, "onAnimationStart"), Et("dblclick", "onDoubleClick"), Et("focusin", "onFocus"), Et("focusout", "onBlur"), Et(Yo, "onTransitionRun"), Et(Go, "onTransitionStart"), Et(Qo, "onTransitionCancel"), Et(mf, "onTransitionEnd"), Jl("onMouseEnter", ["mouseout", "mouseover"]), Jl("onMouseLeave", ["mouseout", "mouseover"]), Jl("onPointerEnter", ["pointerout", "pointerover"]), Jl("onPointerLeave", ["pointerout", "pointerover"]), Al("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Al("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Al("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Al("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Al("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Al("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var on="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Tm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(on)); function U0(e, t) {
    t=(t&4) !==0; for(var l=0; l<e.length; l++) {
      var a=e[l], n=a.event; a=a.listeners; e: {
        var u=void 0; if(t) for(var i=a.length-1; 0<=i; i--) {
          var s=a[i], f=s.instance, h=s.currentTarget; if(s=s.listener, f!==u&&n.isPropagationStopped()) break e; u=s, n.currentTarget=h; try {
            u(n)
          } catch
          (p) {
            Bn(p)
          }
          n.currentTarget=null, u=f
        } else
        for(i=0; i<a.length; i++) {
          if(s=a[i], f=s.instance, h=s.currentTarget, s=s.listener, f!==u&&n.isPropagationStopped()) break e; u=s, n.currentTarget=h; try {
            u(n)
          } catch
          (p) {
            Bn(p)
          }
          n.currentTarget=null, u=f
        }
      }
    }
  }
  function K(e, t) {
    var l=t[Fu]; l===void 0&&(l=t[Fu]=new Set); var a=e+"__bubble"; l.has(a) ||(C0(t, e, 2, !1), l.add(a))
  }
  function Bc(e, t, l) {
    var a=0; t&&(a|=4), C0(l, e, a, t)
  }
  var Tu="_reactListening" +Math.random().toString(36).slice(2); function Yc(e) {
    if(!e[Tu]) {
      e[Tu]=!0, As.forEach(function(l) {
        l!=="selectionchange" &&(Tm.has(l) ||Bc(l, !1, e), Bc(l, !0, e))
      });
      var t=e.nodeType===9?e:e.ownerDocument; t===null||t[Tu]||(t[Tu]=!0, Bc("selectionchange", !1, t))
    }
  }
  function C0(e, t, l, a) {
    switch(rd(t)) {
      case 2:var n=Pm; break; case 8:n=eh; break; default:n=ts
    }
    l=n.bind(null, t, l, e), n=void 0, !ii||t!=="touchstart" &&t!=="touchmove" &&t!=="wheel" ||(n=!0), a?n!==void 0?e.addEventListener(t, l, {
      capture:!0, passive:n
    })
    :e.addEventListener(t, l, !0) :n!==void 0?e.addEventListener(t, l, {
      passive:n
    })
    :e.addEventListener(t, l, !1)
  }
  function Gc(e, t, l, a, n) {
    var u=a; if((t&1) ===0&&(t&2) ===0&&a!==null) e:for(;;) {
      if(a===null) return; var i=a.tag; if(i===3||i===4) {
        var s=a.stateNode.containerInfo; if(s===n) break; if(i===4) for(i=a.return; i!==null;) {
          var f=i.tag; if((f===3||f===4) &&i.stateNode.containerInfo===n) return; i=i.return
        }
        for(; s!==null;) {
          if(i=Zl(s), i===null) return; if(f=i.tag, f===5||f===6||f===26||f===27) {
            a=u=i; continue e
          }
          s=s.parentNode
        }
      }
      a=a.return
    }
    Bs(function() {
      var h=u, p=ni(l), j=[]; e: {
        var g=hf.get(e); if(g!==void 0) {
          var v=Hn, M=e; switch(e) {
            case"keypress" :if(Un(l) ===0) break e; case"keydown" :case"keyup" :v=vo; break; case"focusin" :M="focus", v=ri; break; case"focusout" :M="blur", v=ri; break; case"beforeblur" :case"afterblur" :v=ri; break; case"click" :if(l.button===2) break e; case"auxclick" :case"dblclick" :case"mousedown" :case"mousemove" :case"mouseup" :case"mouseout" :case"mouseover" :case"contextmenu" :v=Qs; break; case"drag" :case"dragend" :case"dragenter" :case"dragexit" :case"dragleave" :case"dragover" :case"dragstart" :case"drop" :v=uo; break; case"touchcancel" :case"touchend" :case"touchmove" :case"touchstart" :v=So; break; case rf:case df:case of:v=so; break; case mf:v=No; break; case"scroll" :case"scrollend" :v=ao; break; case"wheel" :v=To; break; case"copy" :case"cut" :case"paste" :v=ro; break; case"gotpointercapture" :case"lostpointercapture" :case"pointercancel" :case"pointerdown" :case"pointermove" :case"pointerout" :case"pointerover" :case"pointerup" :v=Ls; break; case"toggle" :case"beforetoggle" :v=Ao
          }
          var U=(t&4) !==0, fe=!U&&(e==="scroll" ||e==="scrollend"), o=U?g!==null?g+"Capture" :null:g; U=[]; for(var r=h, m; r!==null;) {
            var S=r; if(m=S.stateNode, S=S.tag, S!==5&&S!==26&&S!==27||m===null||o===null||(S=wa(r, o), S!=null&&U.push(mn(r, S, m))), fe) break; r=r.return
          }
          0<U.length&&(g=new v(g, M, null, l, p), j.push({
            event:g, listeners:U
          }))
        }
      }
      if((t&7) ===0) {
        e: {
          if(g=e==="mouseover" ||e==="pointerover", v=e==="mouseout" ||e==="pointerout", g&&l!==ai&&(M=l.relatedTarget||l.fromElement) &&(Zl(M) ||M[Ll])) break e; if((v||g) &&(g=p.window===p?p:(g=p.ownerDocument) ?g.defaultView||g.parentWindow:window, v?(M=l.relatedTarget||l.toElement, v=h, M=M?Zl(M) :null, M!==null&&(fe=G(M), U=M.tag, M!==fe||U!==5&&U!==27&&U!==6) &&(M=null)) :(v=null, M=h), v!==M)) {
            if(U=Qs, S="onMouseLeave", o="onMouseEnter", r="mouse", (e==="pointerout" ||e==="pointerover") &&(U=Ls, S="onPointerLeave", o="onPointerEnter", r="pointer"), fe=v==null?g:ka(v), m=M==null?g:ka(M), g=new U(S, r+"leave", v, l, p), g.target=fe, g.relatedTarget=m, S=null, Zl(p) ===h&&(U=new U(o, r+"enter", M, l, p), U.target=m, U.relatedTarget=fe, S=U), fe=S, v&&M) t: {
              for(U=Em, o=v, r=M, m=0, S=o; S; S=U(S)) m++; S=0; for(var k=r; k; k=U(k)) S++; for(; 0<m-S;) o=U(o), m--; for(; 0<S-m;) r=U(r), S--; for(; m--;) {
                if(o===r||r!==null&&o===r.alternate) {
                  U=o; break t
                }
                o=U(o), r=U(r)
              }
              U=null
            } else
            U=null; v!==null&&H0(j, g, v, U, !1), M!==null&&fe!==null&&H0(j, fe, M, U, !0)
          }
        }
        e: {
          if(g=h?ka(h) :window, v=g.nodeName&&g.nodeName.toLowerCase(), v==="select" ||v==="input" &&g.type==="file") var ee=Is; else if(Ws(g)) if(Ps) ee=Ro; else {
            ee=Co; var O=Uo
          } else
          v=g.nodeName, !v||v.toLowerCase() !=="input" ||g.type!=="checkbox" &&g.type!=="radio" ?h&&li(h.elementType) &&(ee=Is) :ee=Ho; if(ee&&(ee=ee(e, h))) {
            Fs(j, ee, l, p); break e
          }
          O&&O(e, g, h), e==="focusout" &&h&&g.type==="number" &&h.memoizedProps.value!=null&&ti(g, "number", g.value)
        }
        switch(O=h?ka(h) :window, e) {
          case"focusin" :(Ws(O) ||O.contentEditable==="true") &&(ea=O, xi=h, Ga=null); break; case"focusout" :Ga=xi=ea=null; break; case"mousedown" :gi=!0; break; case"contextmenu" :case"mouseup" :case"dragend" :gi=!1, sf(j, l, p); break; case"selectionchange" :if(Bo) break; case"keydown" :case"keyup" :sf(j, l, p)
        }
        var X; if(oi) e: {
          switch(e) {
            case"compositionstart" :var $="onCompositionStart"; break e; case"compositionend" :$="onCompositionEnd"; break e; case"compositionupdate" :$="onCompositionUpdate"; break e
          }
          $=void 0
        } else
        Pl?Js(e, l) &&($="onCompositionEnd") :e==="keydown" &&l.keyCode===229&&($="onCompositionStart"); $&&(Zs&&l.locale!=="ko" &&(Pl||$!=="onCompositionStart" ?$==="onCompositionEnd" &&Pl&&(X=Ys()) :(ll=p, ci="value" in ll?ll.value:ll.textContent, Pl=!0)), O=Eu(h, $), 0<O.length&&($=new Xs($, e, null, l, p), j.push({
          event:$, listeners:O
        }),
        X?$.data=X:(X=$s(l), X!==null&&($.data=X)))), (X=Mo?Oo(e, l) :Do(e, l)) &&($=Eu(h, "onBeforeInput"), 0<$.length&&(O=new Xs("onBeforeInput", "beforeinput", null, l, p), j.push({
          event:O, listeners:$
        }),
        O.data=X)), jm(j, e, h, l, p)
      }
      U0(j, t)
    })
  }
  function mn(e, t, l) {
    return {
      instance:e, listener:t, currentTarget:l
    }
  }
  function Eu(e, t) {
    for(var l=t+"Capture", a=[]; e!==null;) {
      var n=e, u=n.stateNode; if(n=n.tag, n!==5&&n!==26&&n!==27||u===null||(n=wa(e, l), n!=null&&a.unshift(mn(e, n, u)), n=wa(e, t), n!=null&&a.push(mn(e, n, u))), e.tag===3) return a; e=e.return
    }
    return[]
  }
  function Em(e) {
    if(e===null) return null; do e=e.return; while(e&&e.tag!==5&&e.tag!==27); return e||null
  }
  function H0(e, t, l, a, n) {
    for(var u=t._reactName, i=[]; l!==null&&l!==a;) {
      var s=l, f=s.alternate, h=s.stateNode; if(s=s.tag, f!==null&&f===a) break; s!==5&&s!==26&&s!==27||h===null||(f=h, n?(h=wa(l, u), h!=null&&i.unshift(mn(l, h, f))) :n||(h=wa(l, u), h!=null&&i.push(mn(l, h, f)))), l=l.return
    }
    i.length!==0&&e.push({
      event:t, listeners:i
    })
  }
  var Am=/\r\n?/g, _m=/\u0000|\uFFFD/g; function R0(e) {
    return(typeof e=="string" ?e:"" +e).replace(Am, `
`).replace(_m, "")
  }
  function q0(e, t) {
    return t=R0(t), R0(e) ===t
  }
  function se(e, t, l, a, n, u) {
    switch(l) {
      case"children" :typeof a=="string" ?t==="body" ||t==="textarea" &&a==="" ||Wl(e, a) :(typeof a=="number" ||typeof a=="bigint") &&t!=="body" &&Wl(e, "" +a); break; case"className" :On(e, "class", a); break; case"tabIndex" :On(e, "tabindex", a); break; case"dir" :case"role" :case"viewBox" :case"width" :case"height" :On(e, l, a); break; case"style" :Rs(e, a, u); break; case"data" :if(t!=="object") {
        On(e, "data", a); break
      }
      case"src" :case"href" :if(a==="" &&(t!=="a" ||l!=="href")) {
        e.removeAttribute(l); break
      }
      if(a==null||typeof a=="function" ||typeof a=="symbol" ||typeof a=="boolean") {
        e.removeAttribute(l); break
      }
      a=kn("" +a), e.setAttribute(l, a); break; case"action" :case"formAction" :if(typeof a=="function") {
        e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"); break
      } else
      typeof u=="function" &&(l==="formAction" ?(t!=="input" &&se(e, t, "name", n.name, n, null), se(e, t, "formEncType", n.formEncType, n, null), se(e, t, "formMethod", n.formMethod, n, null), se(e, t, "formTarget", n.formTarget, n, null)) :(se(e, t, "encType", n.encType, n, null), se(e, t, "method", n.method, n, null), se(e, t, "target", n.target, n, null))); if(a==null||typeof a=="symbol" ||typeof a=="boolean") {
        e.removeAttribute(l); break
      }
      a=kn("" +a), e.setAttribute(l, a); break; case"onClick" :a!=null&&(e.onclick=Ht); break; case"onScroll" :a!=null&&K("scroll", e); break; case"onScrollEnd" :a!=null&&K("scrollend", e); break; case"dangerouslySetInnerHTML" :if(a!=null) {
        if(typeof a!="object" ||!("__html" in a)) throw Error(b(61)); if(l=a.__html, l!=null) {
          if(n.children!=null) throw Error(b(60)); e.innerHTML=l
        }
      }
      break; case"multiple" :e.multiple=a&&typeof a!="function" &&typeof a!="symbol"; break; case"muted" :e.muted=a&&typeof a!="function" &&typeof a!="symbol"; break; case"suppressContentEditableWarning" :case"suppressHydrationWarning" :case"defaultValue" :case"defaultChecked" :case"innerHTML" :case"ref" :break; case"autoFocus" :break; case"xlinkHref" :if(a==null||typeof a=="function" ||typeof a=="boolean" ||typeof a=="symbol") {
        e.removeAttribute("xlink:href"); break
      }
      l=kn("" +a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l); break; case"contentEditable" :case"spellCheck" :case"draggable" :case"value" :case"autoReverse" :case"externalResourcesRequired" :case"focusable" :case"preserveAlpha" :a!=null&&typeof a!="function" &&typeof a!="symbol" ?e.setAttribute(l, "" +a) :e.removeAttribute(l); break; case"inert" :case"allowFullScreen" :case"async" :case"autoPlay" :case"controls" :case"default" :case"defer" :case"disabled" :case"disablePictureInPicture" :case"disableRemotePlayback" :case"formNoValidate" :case"hidden" :case"loop" :case"noModule" :case"noValidate" :case"open" :case"playsInline" :case"readOnly" :case"required" :case"reversed" :case"scoped" :case"seamless" :case"itemScope" :a&&typeof a!="function" &&typeof a!="symbol" ?e.setAttribute(l, "") :e.removeAttribute(l); break; case"capture" :case"download" :a===!0?e.setAttribute(l, "") :a!==!1&&a!=null&&typeof a!="function" &&typeof a!="symbol" ?e.setAttribute(l, a) :e.removeAttribute(l); break; case"cols" :case"rows" :case"size" :case"span" :a!=null&&typeof a!="function" &&typeof a!="symbol" &&!isNaN(a) &&1<=a?e.setAttribute(l, a) :e.removeAttribute(l); break; case"rowSpan" :case"start" :a==null||typeof a=="function" ||typeof a=="symbol" ||isNaN(a) ?e.removeAttribute(l) :e.setAttribute(l, a); break; case"popover" :K("beforetoggle", e), K("toggle", e), Mn(e, "popover", a); break; case"xlinkActuate" :Ct(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a); break; case"xlinkArcrole" :Ct(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a); break; case"xlinkRole" :Ct(e, "http://www.w3.org/1999/xlink", "xlink:role", a); break; case"xlinkShow" :Ct(e, "http://www.w3.org/1999/xlink", "xlink:show", a); break; case"xlinkTitle" :Ct(e, "http://www.w3.org/1999/xlink", "xlink:title", a); break; case"xlinkType" :Ct(e, "http://www.w3.org/1999/xlink", "xlink:type", a); break; case"xmlBase" :Ct(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a); break; case"xmlLang" :Ct(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a); break; case"xmlSpace" :Ct(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a); break; case"is" :Mn(e, "is", a); break; case"innerText" :case"textContent" :break; default:(!(2<l.length) ||l[0]!=="o" &&l[0]!=="O" ||l[1]!=="n" &&l[1]!=="N") &&(l=to.get(l) ||l, Mn(e, l, a))
    }
  }
  function Qc(e, t, l, a, n, u) {
    switch(l) {
      case"style" :Rs(e, a, u); break; case"dangerouslySetInnerHTML" :if(a!=null) {
        if(typeof a!="object" ||!("__html" in a)) throw Error(b(61)); if(l=a.__html, l!=null) {
          if(n.children!=null) throw Error(b(60)); e.innerHTML=l
        }
      }
      break; case"children" :typeof a=="string" ?Wl(e, a) :(typeof a=="number" ||typeof a=="bigint") &&Wl(e, "" +a); break; case"onScroll" :a!=null&&K("scroll", e); break; case"onScrollEnd" :a!=null&&K("scrollend", e); break; case"onClick" :a!=null&&(e.onclick=Ht); break; case"suppressContentEditableWarning" :case"suppressHydrationWarning" :case"innerHTML" :case"ref" :break; case"innerText" :case"textContent" :break; default:if(!_s.hasOwnProperty(l)) e: {
        if(l[0]==="o" &&l[1]==="n" &&(n=l.endsWith("Capture"), t=l.slice(2, n?l.length-7:void 0), u=e[Ke]||null, u=u!=null?u[l]:null, typeof u=="function" &&e.removeEventListener(t, u, n), typeof a=="function")) {
          typeof u!="function" &&u!==null&&(l in e?e[l]=null:e.hasAttribute(l) &&e.removeAttribute(l)), e.addEventListener(t, a, n); break e
        }
        l in e?e[l]=a:a===!0?e.setAttribute(l, "") :Mn(e, l, a)
      }
    }
  }
  function Qe(e, t, l) {
    switch(t) {
      case"div" :case"span" :case"svg" :case"path" :case"a" :case"g" :case"p" :case"li" :break; case"img" :K("error", e), K("load", e); var a=!1, n=!1, u; for(u in l) if(l.hasOwnProperty(u)) {
        var i=l[u]; if(i!=null) switch(u) {
          case"src" :a=!0; break; case"srcSet" :n=!0; break; case"children" :case"dangerouslySetInnerHTML" :throw Error(b(137, t)); default:se(e, t, u, i, l, null)
        }
      }
      n&&se(e, t, "srcSet", l.srcSet, l, null), a&&se(e, t, "src", l.src, l, null); return; case"input" :K("invalid", e); var s=u=i=n=null, f=null, h=null; for(a in l) if(l.hasOwnProperty(a)) {
        var p=l[a]; if(p!=null) switch(a) {
          case"name" :n=p; break; case"type" :i=p; break; case"checked" :f=p; break; case"defaultChecked" :h=p; break; case"value" :u=p; break; case"defaultValue" :s=p; break; case"children" :case"dangerouslySetInnerHTML" :if(p!=null) throw Error(b(137, t)); break; default:se(e, t, a, p, l, null)
        }
      }
      ws(e, u, s, f, h, i, n, !1); return; case"select" :K("invalid", e), a=i=u=null; for(n in l) if(l.hasOwnProperty(n) &&(s=l[n], s!=null)) switch(n) {
        case"value" :u=s; break; case"defaultValue" :i=s; break; case"multiple" :a=s; default:se(e, t, n, s, l, null)
      }
      t=u, l=i, e.multiple=!!a, t!=null?$l(e, !!a, t, !1) :l!=null&&$l(e, !!a, l, !0); return; case"textarea" :K("invalid", e), u=n=a=null; for(i in l) if(l.hasOwnProperty(i) &&(s=l[i], s!=null)) switch(i) {
        case"value" :a=s; break; case"defaultValue" :n=s; break; case"children" :u=s; break; case"dangerouslySetInnerHTML" :if(s!=null) throw Error(b(91)); break; default:se(e, t, i, s, l, null)
      }
      Cs(e, a, n, u); return; case"option" :for(f in l) if(l.hasOwnProperty(f) &&(a=l[f], a!=null)) switch(f) {
        case"selected" :e.selected=a&&typeof a!="function" &&typeof a!="symbol"; break; default:se(e, t, f, a, l, null)
      }
      return; case"dialog" :K("beforetoggle", e), K("toggle", e), K("cancel", e), K("close", e); break; case"iframe" :case"object" :K("load", e); break; case"video" :case"audio" :for(a=0; a<on.length; a++) K(on[a], e); break; case"image" :K("error", e), K("load", e); break; case"details" :K("toggle", e); break; case"embed" :case"source" :case"link" :K("error", e), K("load", e); case"area" :case"base" :case"br" :case"col" :case"hr" :case"keygen" :case"meta" :case"param" :case"track" :case"wbr" :case"menuitem" :for(h in l) if(l.hasOwnProperty(h) &&(a=l[h], a!=null)) switch(h) {
        case"children" :case"dangerouslySetInnerHTML" :throw Error(b(137, t)); default:se(e, t, h, a, l, null)
      }
      return; default:if(li(t)) {
        for(p in l) l.hasOwnProperty(p) &&(a=l[p], a!==void 0&&Qc(e, t, p, a, l, void 0)); return
      }
    }
    for(s in l) l.hasOwnProperty(s) &&(a=l[s], a!=null&&se(e, t, s, a, l, null))
  }
  function Mm(e, t, l, a) {
    switch(t) {
      case"div" :case"span" :case"svg" :case"path" :case"a" :case"g" :case"p" :case"li" :break; case"input" :var n=null, u=null, i=null, s=null, f=null, h=null, p=null; for(v in l) {
        var j=l[v]; if(l.hasOwnProperty(v) &&j!=null) switch(v) {
          case"checked" :break; case"value" :break; case"defaultValue" :f=j; default:a.hasOwnProperty(v) ||se(e, t, v, null, a, j)
        }
      }
      for(var g in a) {
        var v=a[g]; if(j=l[g], a.hasOwnProperty(g) &&(v!=null||j!=null)) switch(g) {
          case"type" :u=v; break; case"name" :n=v; break; case"checked" :h=v; break; case"defaultChecked" :p=v; break; case"value" :i=v; break; case"defaultValue" :s=v; break; case"children" :case"dangerouslySetInnerHTML" :if(v!=null) throw Error(b(137, t)); break; default:v!==j&&se(e, t, g, v, a, j)
        }
      }
      ei(e, i, s, f, h, p, u, n); return; case"select" :v=i=s=g=null; for(u in l) if(f=l[u], l.hasOwnProperty(u) &&f!=null) switch(u) {
        case"value" :break; case"multiple" :v=f; default:a.hasOwnProperty(u) ||se(e, t, u, null, a, f)
      }
      for(n in a) if(u=a[n], f=l[n], a.hasOwnProperty(n) &&(u!=null||f!=null)) switch(n) {
        case"value" :g=u; break; case"defaultValue" :s=u; break; case"multiple" :i=u; default:u!==f&&se(e, t, n, u, a, f)
      }
      t=s, l=i, a=v, g!=null?$l(e, !!l, g, !1) :!!a!=!!l&&(t!=null?$l(e, !!l, t, !0) :$l(e, !!l, l?[]:"", !1)); return; case"textarea" :v=g=null; for(s in l) if(n=l[s], l.hasOwnProperty(s) &&n!=null&&!a.hasOwnProperty(s)) switch(s) {
        case"value" :break; case"children" :break; default:se(e, t, s, null, a, n)
      }
      for(i in a) if(n=a[i], u=l[i], a.hasOwnProperty(i) &&(n!=null||u!=null)) switch(i) {
        case"value" :g=n; break; case"defaultValue" :v=n; break; case"children" :break; case"dangerouslySetInnerHTML" :if(n!=null) throw Error(b(91)); break; default:n!==u&&se(e, t, i, n, a, u)
      }
      Us(e, g, v); return; case"option" :for(var M in l) if(g=l[M], l.hasOwnProperty(M) &&g!=null&&!a.hasOwnProperty(M)) switch(M) {
        case"selected" :e.selected=!1; break; default:se(e, t, M, null, a, g)
      }
      for(f in a) if(g=a[f], v=l[f], a.hasOwnProperty(f) &&g!==v&&(g!=null||v!=null)) switch(f) {
        case"selected" :e.selected=g&&typeof g!="function" &&typeof g!="symbol"; break; default:se(e, t, f, g, a, v)
      }
      return; case"img" :case"link" :case"area" :case"base" :case"br" :case"col" :case"embed" :case"hr" :case"keygen" :case"meta" :case"param" :case"source" :case"track" :case"wbr" :case"menuitem" :for(var U in l) g=l[U], l.hasOwnProperty(U) &&g!=null&&!a.hasOwnProperty(U) &&se(e, t, U, null, a, g); for(h in a) if(g=a[h], v=l[h], a.hasOwnProperty(h) &&g!==v&&(g!=null||v!=null)) switch(h) {
        case"children" :case"dangerouslySetInnerHTML" :if(g!=null) throw Error(b(137, t)); break; default:se(e, t, h, g, a, v)
      }
      return; default:if(li(t)) {
        for(var fe in l) g=l[fe], l.hasOwnProperty(fe) &&g!==void 0&&!a.hasOwnProperty(fe) &&Qc(e, t, fe, void 0, a, g); for(p in a) g=a[p], v=l[p], !a.hasOwnProperty(p) ||g===v||g===void 0&&v===void 0||Qc(e, t, p, g, a, v); return
      }
    }
    for(var o in l) g=l[o], l.hasOwnProperty(o) &&g!=null&&!a.hasOwnProperty(o) &&se(e, t, o, null, a, g); for(j in a) g=a[j], v=l[j], !a.hasOwnProperty(j) ||g===v||g==null&&v==null||se(e, t, j, g, a, v)
  }
  function B0(e) {
    switch(e) {
      case"css" :case"script" :case"font" :case"img" :case"image" :case"input" :case"link" :return!0; default:return!1
    }
  }
  function Om() {
    if(typeof performance.getEntriesByType=="function") {
      for(var e=0, t=0, l=performance.getEntriesByType("resource"), a=0; a<l.length; a++) {
        var n=l[a], u=n.transferSize, i=n.initiatorType, s=n.duration; if(u&&s&&B0(i)) {
          for(i=0, s=n.responseEnd, a+=1; a<l.length; a++) {
            var f=l[a], h=f.startTime; if(h>s) break; var p=f.transferSize, j=f.initiatorType; p&&B0(j) &&(f=f.responseEnd, i+=p*(f<s?1:(s-h) /(f-h)))
          }
          if(--a, t+=8*(u+i) /(n.duration / 1e3), e++, 10<e) break
        }
      }
      if(0<e) return t / e / 1e6
    }
    return navigator.connection&&(e=navigator.connection.downlink, typeof e=="number") ?e:5
  }
  var Xc=null, Lc=null; function Au(e) {
    return e.nodeType===9?e:e.ownerDocument
  }
  function Y0(e) {
    switch(e) {
      case"http://www.w3.org/2000/svg" :return 1; case"http://www.w3.org/1998/Math/MathML" :return 2; default:return 0
    }
  }
  function G0(e, t) {
    if(e===0) switch(t) {
      case"svg" :return 1; case"math" :return 2; default:return 0
    }
    return e===1&&t==="foreignObject" ?0:e
  }
  function Zc(e, t) {
    return e==="textarea" ||e==="noscript" ||typeof t.children=="string" ||typeof t.children=="number" ||typeof t.children=="bigint" ||typeof t.dangerouslySetInnerHTML=="object" &&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null
  }
  var Vc=null; function Dm() {
    var e=window.event; return e&&e.type==="popstate" ?e===Vc?!1:(Vc=e, !0) :(Vc=null, !1)
  }
  var Q0=typeof setTimeout=="function" ?setTimeout:void 0, km=typeof clearTimeout=="function" ?clearTimeout:void 0, X0=typeof Promise=="function" ?Promise:void 0, wm=typeof queueMicrotask=="function" ?queueMicrotask:typeof X0<"u" ?function(e) {
    return X0.resolve(null).then(e).catch(Um)
  }
  :Q0; function Um(e) {
    setTimeout(function() {
      throw e
    })
  }
  function yl(e) {
    return e==="head"
  }
  function L0(e, t) {
    var l=t, a=0; do {
      var n=l.nextSibling; if(e.removeChild(l), n&&n.nodeType===8) if(l=n.data, l==="/$" ||l==="/&") {
        if(a===0) {
          e.removeChild(n), Aa(t); return
        }
        a--
      } else
      if(l==="$" ||l==="$?" ||l==="$~" ||l==="$!" ||l==="&") a++; else if(l==="html") hn(e.ownerDocument.documentElement); else if(l==="head") {
        l=e.ownerDocument.head, hn(l); for(var u=l.firstChild; u;) {
          var i=u.nextSibling, s=u.nodeName; u[Da]||s==="SCRIPT" ||s==="STYLE" ||s==="LINK" &&u.rel.toLowerCase() ==="stylesheet" ||l.removeChild(u), u=i
        }
      } else
      l==="body" &&hn(e.ownerDocument.body); l=n
    } while
    (l); Aa(t)
  }
  function Z0(e, t) {
    var l=e; e=0; do {
      var a=l.nextSibling; if(l.nodeType===1?t?(l._stashedDisplay=l.style.display, l.style.display="none") :(l.style.display=l._stashedDisplay||"", l.getAttribute("style") ==="" &&l.removeAttribute("style")) :l.nodeType===3&&(t?(l._stashedText=l.nodeValue, l.nodeValue="") :l.nodeValue=l._stashedText||""), a&&a.nodeType===8) if(l=a.data, l==="/$") {
        if(e===0) break; e--
      } else
      l!=="$" &&l!=="$?" &&l!=="$~" &&l!=="$!" ||e++; l=a
    } while
    (l)
  }
  function Kc(e) {
    var t=e.firstChild; for(t&&t.nodeType===10&&(t=t.nextSibling); t;) {
      var l=t; switch(t=t.nextSibling, l.nodeName) {
        case"HTML" :case"HEAD" :case"BODY" :Kc(l), Iu(l); continue; case"SCRIPT" :case"STYLE" :continue; case"LINK" :if(l.rel.toLowerCase() ==="stylesheet") continue
      }
      e.removeChild(l)
    }
  }
  function Cm(e, t, l, a) {
    for(; e.nodeType===1;) {
      var n=l; if(e.nodeName.toLowerCase() !==t.toLowerCase()) {
        if(!a&&(e.nodeName!=="INPUT" ||e.type!=="hidden")) break
      } else
      if(a) {
        if(!e[Da]) switch(t) {
          case"meta" :if(!e.hasAttribute("itemprop")) break; return e; case"link" :if(u=e.getAttribute("rel"), u==="stylesheet" &&e.hasAttribute("data-precedence")) break; if(u!==n.rel||e.getAttribute("href") !==(n.href==null||n.href==="" ?null:n.href) ||e.getAttribute("crossorigin") !==(n.crossOrigin==null?null:n.crossOrigin) ||e.getAttribute("title") !==(n.title==null?null:n.title)) break; return e; case"style" :if(e.hasAttribute("data-precedence")) break; return e; case"script" :if(u=e.getAttribute("src"), (u!==(n.src==null?null:n.src) ||e.getAttribute("type") !==(n.type==null?null:n.type) ||e.getAttribute("crossorigin") !==(n.crossOrigin==null?null:n.crossOrigin)) &&u&&e.hasAttribute("async") &&!e.hasAttribute("itemprop")) break; return e; default:return e
        }
      } else
      if(t==="input" &&e.type==="hidden") {
        var u=n.name==null?null:"" +n.name; if(n.type==="hidden" &&e.getAttribute("name") ===u) return e
      } else
      return e; if(e=Nt(e.nextSibling), e===null) break
    }
    return null
  }
  function Hm(e, t, l) {
    if(t==="") return null; for(; e.nodeType!==3;) if((e.nodeType!==1||e.nodeName!=="INPUT" ||e.type!=="hidden") &&!l||(e=Nt(e.nextSibling), e===null)) return null; return e
  }
  function V0(e, t) {
    for(; e.nodeType!==8;) if((e.nodeType!==1||e.nodeName!=="INPUT" ||e.type!=="hidden") &&!t||(e=Nt(e.nextSibling), e===null)) return null; return e
  }
  function Jc(e) {
    return e.data==="$?" ||e.data==="$~"
  }
  function $c(e) {
    return e.data==="$!" ||e.data==="$?" &&e.ownerDocument.readyState!=="loading"
  }
  function Rm(e, t) {
    var l=e.ownerDocument; if(e.data==="$~") e._reactRetry=t; else if(e.data!=="$?" ||l.readyState!=="loading") t(); else {
      var a=function() {
        t(), l.removeEventListener("DOMContentLoaded", a)
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry=a
    }
  }
  function Nt(e) {
    for(; e!=null; e=e.nextSibling) {
      var t=e.nodeType; if(t===1||t===3) break; if(t===8) {
        if(t=e.data, t==="$" ||t==="$!" ||t==="$?" ||t==="$~" ||t==="&" ||t==="F!" ||t==="F") break; if(t==="/$" ||t==="/&") return null
      }
    }
    return e
  }
  var Wc=null; function K0(e) {
    e=e.nextSibling; for(var t=0; e;) {
      if(e.nodeType===8) {
        var l=e.data; if(l==="/$" ||l==="/&") {
          if(t===0) return Nt(e.nextSibling); t--
        } else
        l!=="$" &&l!=="$!" &&l!=="$?" &&l!=="$~" &&l!=="&" ||t++
      }
      e=e.nextSibling
    }
    return null
  }
  function J0(e) {
    e=e.previousSibling; for(var t=0; e;) {
      if(e.nodeType===8) {
        var l=e.data; if(l==="$" ||l==="$!" ||l==="$?" ||l==="$~" ||l==="&") {
          if(t===0) return e; t--
        } else
        l!=="/$" &&l!=="/&" ||t++
      }
      e=e.previousSibling
    }
    return null
  }
  function $0(e, t, l) {
    switch(t=Au(l), e) {
      case"html" :if(e=t.documentElement, !e) throw Error(b(452)); return e; case"head" :if(e=t.head, !e) throw Error(b(453)); return e; case"body" :if(e=t.body, !e) throw Error(b(454)); return e; default:throw Error(b(451))
    }
  }
  function hn(e) {
    for(var t=e.attributes; t.length;) e.removeAttributeNode(t[0]); Iu(e)
  }
  var zt=new Map, W0=new Set; function _u(e) {
    return typeof e.getRootNode=="function" ?e.getRootNode() :e.nodeType===9?e:e.ownerDocument
  }
  var It=E.d; E.d= {
    f:qm, r:Bm, D:Ym, C:Gm, L:Qm, m:Xm, X:Zm, S:Lm, M:Vm
  };
  function qm() {
    var e=It.f(), t=yu(); return e||t
  }
  function Bm(e) {
    var t=Vl(e); t!==null&&t.tag===5&&t.type==="form" ?mr(t) :It.r(e)
  }
  var za=typeof document>"u" ?null:document; function F0(e, t, l) {
    var a=za; if(a&&typeof t=="string" &&t) {
      var n=xt(t); n='link[rel="' +e+'"][href="' +n+'"]', typeof l=="string" &&(n+='[crossorigin="' +l+'"]'), W0.has(n) ||(W0.add(n), e= {
        rel:e, crossOrigin:l, href:t
      },
      a.querySelector(n) ===null&&(t=a.createElement("link"), Qe(t, "link", e), we(t), a.head.appendChild(t)))
    }
  }
  function Ym(e) {
    It.D(e), F0("dns-prefetch", e, null)
  }
  function Gm(e, t) {
    It.C(e, t), F0("preconnect", e, t)
  }
  function Qm(e, t, l) {
    It.L(e, t, l); var a=za; if(a&&e&&t) {
      var n='link[rel="preload"][as="' +xt(t) +'"]'; t==="image" &&l&&l.imageSrcSet?(n+='[imagesrcset="' +xt(l.imageSrcSet) +'"]', typeof l.imageSizes=="string" &&(n+='[imagesizes="' +xt(l.imageSizes) +'"]')) :n+='[href="' +xt(e) +'"]'; var u=n; switch(t) {
        case"style" :u=Ta(e); break; case"script" :u=Ea(e)
      }
      zt.has(u) ||(e=C({
        rel:"preload", href:t==="image" &&l&&l.imageSrcSet?void 0:e, as:t
      },
      l), zt.set(u, e), a.querySelector(n) !==null||t==="style" &&a.querySelector(bn(u)) ||t==="script" &&a.querySelector(xn(u)) ||(t=a.createElement("link"), Qe(t, "link", e), we(t), a.head.appendChild(t)))
    }
  }
  function Xm(e, t) {
    It.m(e, t); var l=za; if(l&&e) {
      var a=t&&typeof t.as=="string" ?t.as:"script", n='link[rel="modulepreload"][as="' +xt(a) +'"][href="' +xt(e) +'"]', u=n; switch(a) {
        case"audioworklet" :case"paintworklet" :case"serviceworker" :case"sharedworker" :case"worker" :case"script" :u=Ea(e)
      }
      if(!zt.has(u) &&(e=C({
        rel:"modulepreload", href:e
      },
      t), zt.set(u, e), l.querySelector(n) ===null)) {
        switch(a) {
          case"audioworklet" :case"paintworklet" :case"serviceworker" :case"sharedworker" :case"worker" :case"script" :if(l.querySelector(xn(u))) return
        }
        a=l.createElement("link"), Qe(a, "link", e), we(a), l.head.appendChild(a)
      }
    }
  }
  function Lm(e, t, l) {
    It.S(e, t, l); var a=za; if(a&&e) {
      var n=Kl(a).hoistableStyles, u=Ta(e); t=t||"default"; var i=n.get(u); if(!i) {
        var s= {
          loading:0, preload:null
        };
        if(i=a.querySelector(bn(u))) s.loading=5; else {
          e=C({
            rel:"stylesheet", href:e, "data-precedence" :t
          },
          l), (l=zt.get(u)) &&Fc(e, l); var f=i=a.createElement("link"); we(f), Qe(f, "link", e), f._p=new Promise(function(h, p) {
            f.onload=h, f.onerror=p
          }),
          f.addEventListener("load", function() {
            s.loading|=1
          }),
          f.addEventListener("error", function() {
            s.loading|=2
          }),
          s.loading|=4, Mu(i, t, a)
        }
        i= {
          type:"stylesheet", instance:i, count:1, state:s
        },
        n.set(u, i)
      }
    }
  }
  function Zm(e, t) {
    It.X(e, t); var l=za; if(l&&e) {
      var a=Kl(l).hoistableScripts, n=Ea(e), u=a.get(n); u||(u=l.querySelector(xn(n)), u||(e=C({
        src:e, async:!0
      },
      t), (t=zt.get(n)) &&Ic(e, t), u=l.createElement("script"), we(u), Qe(u, "link", e), l.head.appendChild(u)), u= {
        type:"script", instance:u, count:1, state:null
      },
      a.set(n, u))
    }
  }
  function Vm(e, t) {
    It.M(e, t); var l=za; if(l&&e) {
      var a=Kl(l).hoistableScripts, n=Ea(e), u=a.get(n); u||(u=l.querySelector(xn(n)), u||(e=C({
        src:e, async:!0, type:"module"
      },
      t), (t=zt.get(n)) &&Ic(e, t), u=l.createElement("script"), we(u), Qe(u, "link", e), l.head.appendChild(u)), u= {
        type:"script", instance:u, count:1, state:null
      },
      a.set(n, u))
    }
  }
  function I0(e, t, l, a) {
    var n=(n=w.current) ?_u(n) :null; if(!n) throw Error(b(446)); switch(e) {
      case"meta" :case"title" :return null; case"style" :return typeof l.precedence=="string" &&typeof l.href=="string" ?(t=Ta(l.href), l=Kl(n).hoistableStyles, a=l.get(t), a||(a= {
        type:"style", instance:null, count:0, state:null
      },
      l.set(t, a)), a) : {
        type:"void", instance:null, count:0, state:null
      };
      case"link" :if(l.rel==="stylesheet" &&typeof l.href=="string" &&typeof l.precedence=="string") {
        e=Ta(l.href); var u=Kl(n).hoistableStyles, i=u.get(e); if(i||(n=n.ownerDocument||n, i= {
          type:"stylesheet", instance:null, count:0, state: {
            loading:0, preload:null
          }
        },
        u.set(e, i), (u=n.querySelector(bn(e))) &&!u._p&&(i.instance=u, i.state.loading=5), zt.has(e) ||(l= {
          rel:"preload", as:"style", href:l.href, crossOrigin:l.crossOrigin, integrity:l.integrity, media:l.media, hrefLang:l.hrefLang, referrerPolicy:l.referrerPolicy
        },
        zt.set(e, l), u||Km(n, e, l, i.state))), t&&a===null) throw Error(b(528, "")); return i
      }
      if(t&&a!==null) throw Error(b(529, "")); return null; case"script" :return t=l.async, l=l.src, typeof l=="string" &&t&&typeof t!="function" &&typeof t!="symbol" ?(t=Ea(l), l=Kl(n).hoistableScripts, a=l.get(t), a||(a= {
        type:"script", instance:null, count:0, state:null
      },
      l.set(t, a)), a) : {
        type:"void", instance:null, count:0, state:null
      };
      default:throw Error(b(444, e))
    }
  }
  function Ta(e) {
    return'href="' +xt(e) +'"'
  }
  function bn(e) {
    return'link[rel="stylesheet"][' +e+"]"
  }
  function P0(e) {
    return C({
    },
    e, {
      "data-precedence" :e.precedence, precedence:null
    })
  }
  function Km(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' +t+"]") ?a.loading=1:(t=e.createElement("link"), a.preload=t, t.addEventListener("load", function() {
      return a.loading|=1
    }),
    t.addEventListener("error", function() {
      return a.loading|=2
    }),
    Qe(t, "link", l), we(t), e.head.appendChild(t))
  }
  function Ea(e) {
    return'[src="' +xt(e) +'"]'
  }
  function xn(e) {
    return"script[async]" +e
  }
  function ed(e, t, l) {
    if(t.count++, t.instance===null) switch(t.type) {
      case"style" :var a=e.querySelector('style[data-href~="' +xt(l.href) +'"]'); if(a) return t.instance=a, we(a), a; var n=C({
      },
      l, {
        "data-href" :l.href, "data-precedence" :l.precedence, href:null, precedence:null
      });
      return a=(e.ownerDocument||e).createElement("style"), we(a), Qe(a, "style", n), Mu(a, l.precedence, e), t.instance=a; case"stylesheet" :n=Ta(l.href); var u=e.querySelector(bn(n)); if(u) return t.state.loading|=4, t.instance=u, we(u), u; a=P0(l), (n=zt.get(n)) &&Fc(a, n), u=(e.ownerDocument||e).createElement("link"), we(u); var i=u; return i._p=new Promise(function(s, f) {
        i.onload=s, i.onerror=f
      }),
      Qe(u, "link", a), t.state.loading|=4, Mu(u, l.precedence, e), t.instance=u; case"script" :return u=Ea(l.src), (n=e.querySelector(xn(u))) ?(t.instance=n, we(n), n) :(a=l, (n=zt.get(u)) &&(a=C({
      },
      l), Ic(a, n)), e=e.ownerDocument||e, n=e.createElement("script"), we(n), Qe(n, "link", a), e.head.appendChild(n), t.instance=n); case"void" :return null; default:throw Error(b(443, t.type))
    } else
    t.type==="stylesheet" &&(t.state.loading&4) ===0&&(a=t.instance, t.state.loading|=4, Mu(a, l.precedence, e)); return t.instance
  }
  function Mu(e, t, l) {
    for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n=a.length?a[a.length-1]:null, u=n, i=0; i<a.length; i++) {
      var s=a[i]; if(s.dataset.precedence===t) u=s; else if(u!==n) break
    }
    u?u.parentNode.insertBefore(e, u.nextSibling) :(t=l.nodeType===9?l.head:l, t.insertBefore(e, t.firstChild))
  }
  function Fc(e, t) {
    e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin), e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy), e.title==null&&(e.title=t.title)
  }
  function Ic(e, t) {
    e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin), e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy), e.integrity==null&&(e.integrity=t.integrity)
  }
  var Ou=null; function td(e, t, l) {
    if(Ou===null) {
      var a=new Map, n=Ou=new Map; n.set(l, a)
    } else
    n=Ou, a=n.get(l), a||(a=new Map, n.set(l, a)); if(a.has(e)) return a; for(a.set(e, null), l=l.getElementsByTagName(e), n=0; n<l.length; n++) {
      var u=l[n]; if(!(u[Da]||u[qe]||e==="link" &&u.getAttribute("rel") ==="stylesheet") &&u.namespaceURI!=="http://www.w3.org/2000/svg") {
        var i=u.getAttribute(t) ||""; i=e+i; var s=a.get(i); s?s.push(u) :a.set(i, [u])
      }
    }
    return a
  }
  function ld(e, t, l) {
    e=e.ownerDocument||e, e.head.insertBefore(l, t==="title" ?e.querySelector("head > title") :null)
  }
  function Jm(e, t, l) {
    if(l===1||t.itemProp!=null) return!1; switch(e) {
      case"meta" :case"title" :return!0; case"style" :if(typeof t.precedence!="string" ||typeof t.href!="string" ||t.href==="") break; return!0; case"link" :if(typeof t.rel!="string" ||typeof t.href!="string" ||t.href==="" ||t.onLoad||t.onError) break; switch(t.rel) {
        case"stylesheet" :return e=t.disabled, typeof t.precedence=="string" &&e==null; default:return!0
      }
      case"script" :if(t.async&&typeof t.async!="function" &&typeof t.async!="symbol" &&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string") return!0
    }
    return!1
  }
  function ad(e) {
    return!(e.type==="stylesheet" &&(e.state.loading&3) ===0)
  }
  function $m(e, t, l, a) {
    if(l.type==="stylesheet" &&(typeof a.media!="string" ||matchMedia(a.media).matches!==!1) &&(l.state.loading&4) ===0) {
      if(l.instance===null) {
        var n=Ta(a.href), u=t.querySelector(bn(n)); if(u) {
          t=u._p, t!==null&&typeof t=="object" &&typeof t.then=="function" &&(e.count++, e=Du.bind(e), t.then(e, e)), l.state.loading|=4, l.instance=u, we(u); return
        }
        u=t.ownerDocument||t, a=P0(a), (n=zt.get(n)) &&Fc(a, n), u=u.createElement("link"), we(u); var i=u; i._p=new Promise(function(s, f) {
          i.onload=s, i.onerror=f
        }),
        Qe(u, "link", a), l.instance=u
      }
      e.stylesheets===null&&(e.stylesheets=new Map), e.stylesheets.set(l, t), (t=l.state.preload) &&(l.state.loading&3) ===0&&(e.count++, l=Du.bind(e), t.addEventListener("load", l), t.addEventListener("error", l))
    }
  }
  var Pc=0; function Wm(e, t) {
    return e.stylesheets&&e.count===0&&wu(e, e.stylesheets), 0<e.count||0<e.imgCount?function(l) {
      var a=setTimeout(function() {
        if(e.stylesheets&&wu(e, e.stylesheets), e.unsuspend) {
          var u=e.unsuspend; e.unsuspend=null, u()
        }
      },
      6e4+t); 0<e.imgBytes&&Pc===0&&(Pc=62500*Om()); var n=setTimeout(function() {
        if(e.waitingForImages=!1, e.count===0&&(e.stylesheets&&wu(e, e.stylesheets), e.unsuspend)) {
          var u=e.unsuspend; e.unsuspend=null, u()
        }
      },
      (e.imgBytes>Pc?50:800) +t); return e.unsuspend=l, function() {
        e.unsuspend=null, clearTimeout(a), clearTimeout(n)
      }
    }
    :null
  }
  function Du() {
    if(this.count--, this.count===0&&(this.imgCount===0||!this.waitingForImages)) {
      if(this.stylesheets) wu(this, this.stylesheets); else if(this.unsuspend) {
        var e=this.unsuspend; this.unsuspend=null, e()
      }
    }
  }
  var ku=null; function wu(e, t) {
    e.stylesheets=null, e.unsuspend!==null&&(e.count++, ku=new Map, t.forEach(Fm, e), ku=null, Du.call(e))
  }
  function Fm(e, t) {
    if(!(t.state.loading&4)) {
      var l=ku.get(e); if(l) var a=l.get(null); else {
        l=new Map, ku.set(e, l); for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"), u=0; u<n.length; u++) {
          var i=n[u];(i.nodeName==="LINK" ||i.getAttribute("media") !=="not all") &&(l.set(i.dataset.precedence, i), a=i)
        }
        a&&l.set(null, a)
      }
      n=t.instance, i=n.getAttribute("data-precedence"), u=l.get(i) ||a, u===a&&l.set(null, n), l.set(i, n), this.count++, a=Du.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u?u.parentNode.insertBefore(n, u.nextSibling) :(e=e.nodeType===9?e.head:e, e.insertBefore(n, e.firstChild)), t.state.loading|=4
    }
  }
  var gn= {
    $$typeof:ke, Provider:null, Consumer:null, _currentValue:H, _currentValue2:H, _threadCount:0
  };
  function Im(e, t, l, a, n, u, i, s, f) {
    this.tag=1, this.containerInfo=e, this.pingCache=this.current=this.pendingChildren=null, this.timeoutHandle=-1, this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null, this.callbackPriority=0, this.expirationTimes=Ju(-1), this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0, this.entanglements=Ju(0), this.hiddenUpdates=Ju(null), this.identifierPrefix=a, this.onUncaughtError=n, this.onCaughtError=u, this.onRecoverableError=i, this.pooledCache=null, this.pooledCacheLanes=0, this.formState=f, this.incompleteTransitions=new Map
  }
  function nd(e, t, l, a, n, u, i, s, f, h, p, j) {
    return e=new Im(e, t, l, i, f, h, p, j, s), t=1, u===!0&&(t|=24), u=st(3, null, null, t), e.current=u, u.stateNode=e, t=ki(), t.refCount++, e.pooledCache=t, t.refCount++, u.memoizedState= {
      element:a, isDehydrated:l, cache:t
    },
    Hi(u), e
  }
  function ud(e) {
    return e?(e=aa, e) :aa
  }
  function id(e, t, l, a, n, u) {
    n=ud(n), a.context===null?a.context=n:a.pendingContext=n, a=sl(t), a.payload= {
      element:l
    },
    u=u===void 0?null:u, u!==null&&(a.callback=u), l=fl(e, a, t), l!==null&&(Pe(l, e, t), Ja(l, e, t))
  }
  function cd(e, t) {
    if(e=e.memoizedState, e!==null&&e.dehydrated!==null) {
      var l=e.retryLane; e.retryLane=l!==0&&l<t?l:t
    }
  }
  function es(e, t) {
    cd(e, t), (e=e.alternate) &&cd(e, t)
  }
  function sd(e) {
    if(e.tag===13||e.tag===31) {
      var t=Dl(e, 67108864); t!==null&&Pe(t, e, 67108864), es(e, 67108864)
    }
  }
  function fd(e) {
    if(e.tag===13||e.tag===31) {
      var t=mt(); t=$u(t); var l=Dl(e, t); l!==null&&Pe(l, e, t), es(e, t)
    }
  }
  var Uu=!0; function Pm(e, t, l, a) {
    var n=y.T; y.T=null; var u=E.p; try {
      E.p=2, ts(e, t, l, a)
    } finally
    {
      E.p=u, y.T=n
    }
  }
  function eh(e, t, l, a) {
    var n=y.T; y.T=null; var u=E.p; try {
      E.p=8, ts(e, t, l, a)
    } finally
    {
      E.p=u, y.T=n
    }
  }
  function ts(e, t, l, a) {
    if(Uu) {
      var n=ls(a); if(n===null) Gc(e, t, a, Cu, l), dd(e, a); else if(lh(n, e, t, l, a)) a.stopPropagation(); else if(dd(e, a), t&4&&-1<th.indexOf(e)) {
        for(; n!==null;) {
          var u=Vl(n); if(u!==null) switch(u.tag) {
            case 3:if(u=u.stateNode, u.current.memoizedState.isDehydrated) {
              var i=El(u.pendingLanes); if(i!==0) {
                var s=u; for(s.pendingLanes|=2, s.entangledLanes|=2; i;) {
                  var f=1<<31-it(i); s.entanglements[1]|=f, i&=~f
                }
                Ut(u), (ae&6) ===0&&(gu=nt() +500, dn(0))
              }
            }
            break; case 31:case 13:s=Dl(u, 2), s!==null&&Pe(s, u, 2), yu(), es(u, 2)
          }
          if(u=ls(a), u===null&&Gc(e, t, a, Cu, l), u===n) break; n=u
        }
        n!==null&&a.stopPropagation()
      } else
      Gc(e, t, a, null, l)
    }
  }
  function ls(e) {
    return e=ni(e), as(e)
  }
  var Cu=null; function as(e) {
    if(Cu=null, e=Zl(e), e!==null) {
      var t=G(e); if(t===null) e=null; else {
        var l=t.tag; if(l===13) {
          if(e=W(t), e!==null) return e; e=null
        } else
        if(l===31) {
          if(e=ve(t), e!==null) return e; e=null
        } else
        if(l===3) {
          if(t.stateNode.current.memoizedState.isDehydrated) return t.tag===3?t.stateNode.containerInfo:null; e=null
        } else
        t!==e&&(e=null)
      }
    }
    return Cu=e, null
  }
  function rd(e) {
    switch(e) {
      case"beforetoggle" :case"cancel" :case"click" :case"close" :case"contextmenu" :case"copy" :case"cut" :case"auxclick" :case"dblclick" :case"dragend" :case"dragstart" :case"drop" :case"focusin" :case"focusout" :case"input" :case"invalid" :case"keydown" :case"keypress" :case"keyup" :case"mousedown" :case"mouseup" :case"paste" :case"pause" :case"play" :case"pointercancel" :case"pointerdown" :case"pointerup" :case"ratechange" :case"reset" :case"resize" :case"seeked" :case"submit" :case"toggle" :case"touchcancel" :case"touchend" :case"touchstart" :case"volumechange" :case"change" :case"selectionchange" :case"textInput" :case"compositionstart" :case"compositionend" :case"compositionupdate" :case"beforeblur" :case"afterblur" :case"beforeinput" :case"blur" :case"fullscreenchange" :case"focus" :case"hashchange" :case"popstate" :case"select" :case"selectstart" :return 2; case"drag" :case"dragenter" :case"dragexit" :case"dragleave" :case"dragover" :case"mousemove" :case"mouseout" :case"mouseover" :case"pointermove" :case"pointerout" :case"pointerover" :case"scroll" :case"touchmove" :case"wheel" :case"mouseenter" :case"mouseleave" :case"pointerenter" :case"pointerleave" :return 8; case"message" :switch(Bd()) {
        case gs:return 2; case vs:return 8; case zn:case Yd:return 32; case ys:return 268435456; default:return 32
      }
      default:return 32
    }
  }
  var ns=!1, pl=null, Sl=null, jl=null, vn=new Map, yn=new Map, Nl=[], th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "); function dd(e, t) {
    switch(e) {
      case"focusin" :case"focusout" :pl=null; break; case"dragenter" :case"dragleave" :Sl=null; break; case"mouseover" :case"mouseout" :jl=null; break; case"pointerover" :case"pointerout" :vn.delete(t.pointerId); break; case"gotpointercapture" :case"lostpointercapture" :yn.delete(t.pointerId)
    }
  }
  function pn(e, t, l, a, n, u) {
    return e===null||e.nativeEvent!==u?(e= {
      blockedOn:t, domEventName:l, eventSystemFlags:a, nativeEvent:u, targetContainers:[n]
    },
    t!==null&&(t=Vl(t), t!==null&&sd(t)), e) :(e.eventSystemFlags|=a, t=e.targetContainers, n!==null&&t.indexOf(n) ===-1&&t.push(n), e)
  }
  function lh(e, t, l, a, n) {
    switch(t) {
      case"focusin" :return pl=pn(pl, e, t, l, a, n), !0; case"dragenter" :return Sl=pn(Sl, e, t, l, a, n), !0; case"mouseover" :return jl=pn(jl, e, t, l, a, n), !0; case"pointerover" :var u=n.pointerId; return vn.set(u, pn(vn.get(u) ||null, e, t, l, a, n)), !0; case"gotpointercapture" :return u=n.pointerId, yn.set(u, pn(yn.get(u) ||null, e, t, l, a, n)), !0
    }
    return!1
  }
  function od(e) {
    var t=Zl(e.target); if(t!==null) {
      var l=G(t); if(l!==null) {
        if(t=l.tag, t===13) {
          if(t=W(l), t!==null) {
            e.blockedOn=t, Ts(e.priority, function() {
              fd(l)
            });
            return
          }
        } else
        if(t===31) {
          if(t=ve(l), t!==null) {
            e.blockedOn=t, Ts(e.priority, function() {
              fd(l)
            });
            return
          }
        } else
        if(t===3&&l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn=l.tag===3?l.stateNode.containerInfo:null; return
        }
      }
    }
    e.blockedOn=null
  }
  function Hu(e) {
    if(e.blockedOn!==null) return!1; for(var t=e.targetContainers; 0<t.length;) {
      var l=ls(e.nativeEvent); if(l===null) {
        l=e.nativeEvent; var a=new l.constructor(l.type, l); ai=a, l.target.dispatchEvent(a), ai=null
      } else
      return t=Vl(l), t!==null&&sd(t), e.blockedOn=l, !1; t.shift()
    }
    return!0
  }
  function md(e, t, l) {
    Hu(e) &&l.delete(t)
  }
  function ah() {
    ns=!1, pl!==null&&Hu(pl) &&(pl=null), Sl!==null&&Hu(Sl) &&(Sl=null), jl!==null&&Hu(jl) &&(jl=null), vn.forEach(md), yn.forEach(md)
  }
  function Ru(e, t) {
    e.blockedOn===t&&(e.blockedOn=null, ns||(ns=!0, T.unstable_scheduleCallback(T.unstable_NormalPriority, ah)))
  }
  var qu=null; function hd(e) {
    qu!==e&&(qu=e, T.unstable_scheduleCallback(T.unstable_NormalPriority, function() {
      qu===e&&(qu=null); for(var t=0; t<e.length; t+=3) {
        var l=e[t], a=e[t+1], n=e[t+2]; if(typeof a!="function") {
          if(as(a||l) ===null) continue; break
        }
        var u=Vl(l); u!==null&&(e.splice(t, 3), t-=3, lc(u, {
          pending:!0, data:n, method:l.method, action:a
        },
        a, n))
      }
    }))
  }
  function Aa(e) {
    function t(f) {
      return Ru(f, e)
    }
    pl!==null&&Ru(pl, e), Sl!==null&&Ru(Sl, e), jl!==null&&Ru(jl, e), vn.forEach(t), yn.forEach(t); for(var l=0; l<Nl.length; l++) {
      var a=Nl[l]; a.blockedOn===e&&(a.blockedOn=null)
    }
    for(; 0<Nl.length&&(l=Nl[0], l.blockedOn===null);) od(l), l.blockedOn===null&&Nl.shift(); if(l=(e.ownerDocument||e).$$reactFormReplay, l!=null) for(a=0; a<l.length; a+=3) {
      var n=l[a], u=l[a+1], i=n[Ke]||null; if(typeof u=="function") i||hd(l); else if(i) {
        var s=null; if(u&&u.hasAttribute("formAction")) {
          if(n=u, i=u[Ke]||null) s=i.formAction; else if(as(n) !==null) continue
        } else
        s=i.action; typeof s=="function" ?l[a+1]=s:(l.splice(a, 3), a-=3), hd(l)
      }
    }
  }
  function bd() {
    function e(u) {
      u.canIntercept&&u.info==="react-transition" &&u.intercept({
        handler:function() {
          return new Promise(function(i) {
            return n=i
          })
        },
        focusReset:"manual", scroll:"manual"
      })
    }
    function t() {
      n!==null&&(n(), n=null), a||setTimeout(l, 20)
    }
    function l() {
      if(!a&&!navigation.transition) {
        var u=navigation.currentEntry; u&&u.url!=null&&navigation.navigate(u.url, {
          state:u.getState(), info:"react-transition", history:"replace"
        })
      }
    }
    if(typeof navigation=="object") {
      var a=!1, n=null; return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        a=!0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n!==null&&(n(), n=null)
      }
    }
  }
  function us(e) {
    this._internalRoot=e
  }
  Bu.prototype.render=us.prototype.render=function(e) {
    var t=this._internalRoot; if(t===null) throw Error(b(409)); var l=t.current, a=mt(); id(l, a, e, t, null, null)
  },
  Bu.prototype.unmount=us.prototype.unmount=function() {
    var e=this._internalRoot; if(e!==null) {
      this._internalRoot=null; var t=e.containerInfo; id(e.current, 2, null, e, null, null), yu(), t[Ll]=null
    }
  };
  function Bu(e) {
    this._internalRoot=e
  }
  Bu.prototype.unstable_scheduleHydration=function(e) {
    if(e) {
      var t=zs(); e= {
        blockedOn:null, target:e, priority:t
      };
      for(var l=0; l<Nl.length&&t!==0&&t<Nl[l].priority; l++); Nl.splice(l, 0, e), l===0&&od(e)
    }
  };
  var xd=Y.version; if(xd!=="19.2.7") throw Error(b(527, xd, "19.2.7")); E.findDOMNode=function(e) {
    var t=e._reactInternals; if(t===void 0) throw typeof e.render=="function" ?Error(b(188)) :(e=Object.keys(e).join(","), Error(b(268, e))); return e=z(t), e=e!==null?P(e) :null, e=e===null?null:e.stateNode, e
  };
  var nh= {
    bundleType:0, version:"19.2.7", rendererPackageName:"react-dom", currentDispatcherRef:y, reconcilerVersion:"19.2.7"
  };
  if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u") {
    var Yu=__REACT_DEVTOOLS_GLOBAL_HOOK__; if(!Yu.isDisabled&&Yu.supportsFiber) try {
      _a=Yu.inject(nh), ut=Yu
    } catch
    {
    }
  }
  return jn.createRoot=function(e, t) {
    if(!R(e)) throw Error(b(299)); var l=!1, a="", n=Nr, u=zr, i=Tr; return t!=null&&(t.unstable_strictMode===!0&&(l=!0), t.identifierPrefix!==void 0&&(a=t.identifierPrefix), t.onUncaughtError!==void 0&&(n=t.onUncaughtError), t.onCaughtError!==void 0&&(u=t.onCaughtError), t.onRecoverableError!==void 0&&(i=t.onRecoverableError)), t=nd(e, 1, !1, null, null, l, a, null, n, u, i, bd), e[Ll]=t.current, Yc(e), new us(t)
  },
  jn.hydrateRoot=function(e, t, l) {
    if(!R(e)) throw Error(b(299)); var a=!1, n="", u=Nr, i=zr, s=Tr, f=null; return l!=null&&(l.unstable_strictMode===!0&&(a=!0), l.identifierPrefix!==void 0&&(n=l.identifierPrefix), l.onUncaughtError!==void 0&&(u=l.onUncaughtError), l.onCaughtError!==void 0&&(i=l.onCaughtError), l.onRecoverableError!==void 0&&(s=l.onRecoverableError), l.formState!==void 0&&(f=l.formState)), t=nd(e, 1, !0, t, l??null, a, n, f, u, i, s, bd), t.context=ud(null), l=t.current, a=mt(), a=$u(a), n=sl(a), n.callback=null, fl(l, n, a), l=a, t.current.lanes=l, Oa(t, l), Ut(t), e[Ll]=t.current, Yc(e), new Bu(t)
  },
  jn.version="19.2.7", jn
}
var Ed; function hh() {
  if(Ed) return ss.exports; Ed=1; function T() {
    if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u" ||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)
    } catch
    (Y) {
      console.error(Y)
    }
  }
  return T(), ss.exports=mh(), ss.exports
}
var bh=hh(); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xh=T=>T.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gh=T=>T.replace(/^([A-Z])|[\s-_]+(\w)/g, (Y, B, b) =>b?b.toUpperCase() :B.toLowerCase()), Ad=T=> {
  const Y=gh(T); return Y.charAt(0).toUpperCase() +Y.slice(1)
},
Cd=(...T) =>T.filter((Y, B, b) =>!!Y&&Y.trim() !=="" &&b.indexOf(Y) ===B).join(" ").trim(), vh=T=> {
  for(const Y in T) if(Y.startsWith("aria-") ||Y==="role" ||Y==="title") return!0
};
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var yh= {
  xmlns:"http://www.w3.org/2000/svg", width:24, height:24, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round"
};
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ph=xe.forwardRef(({
  color:T="currentColor", size:Y=24, strokeWidth:B=2, absoluteStrokeWidth:b, className:R="", children:G, iconNode:W, ...ve
},
D) =>xe.createElement("svg", {
  ref:D, ...yh, width:Y, height:Y, stroke:T, strokeWidth:b?Number(B) *24 / Number(Y) :B, className:Cd("lucide", R), ...!G&&!vh(ve) && {
    "aria-hidden" :"true"
  },
  ...ve
},
[...W.map(([z, P]) =>xe.createElement(z, P)), ...Array.isArray(G) ?G:[G]])); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me=(T, Y) => {
  const B=xe.forwardRef(({
    className:b, ...R
  },
  G) =>xe.createElement(ph, {
    ref:G, iconNode:Y, className:Cd(`lucide-${xh(Ad(T))}`, `lucide-${T}`, b), ...R
  }));
  return B.displayName=Ad(T), B
};
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sh=[["path", {
  d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key:"169zse"
}
]], jh=me("activity", Sh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nh=[["path", {
  d:"M7 7h10v10", key:"1tivn9"
}
], ["path", {
  d:"M7 17 17 7", key:"1vkiza"
}
]], zh=me("arrow-up-right", Nh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Th=[["path", {
  d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526", key:"1yiouv"
}
], ["circle", {
  cx:"12", cy:"8", r:"6", key:"1vp47v"
}
]], Eh=me("award", Th); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ah=[["path", {
  d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key:"jecpp"
}
], ["rect", {
  width:"20", height:"14", x:"2", y:"6", rx:"2", key:"i6l2r4"
}
]], _h=me("briefcase", Ah); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mh=[["path", {
  d:"m9 18 6-6-6-6", key:"mthhwq"
}
]], Oh=me("chevron-right", Mh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dh=[["path", {
  d:"M21.801 10A10 10 0 1 1 17 3.335", key:"yps3ct"
}
], ["path", {
  d:"m9 11 3 3L22 4", key:"1pflzl"
}
]], kh=me("circle-check-big", Dh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh=[["path", {
  d:"m18 16 4-4-4-4", key:"1inbqp"
}
], ["path", {
  d:"m6 8-4 4 4 4", key:"15zrgr"
}
], ["path", {
  d:"m14.5 4-5 16", key:"e7oirm"
}
]], os=me("code-xml", wh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uh=[["path", {
  d:"M12 15V3", key:"m9g1x1"
}
], ["path", {
  d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key:"ih7n3h"
}
], ["path", {
  d:"m7 10 5 5 5-5", key:"brsn70"
}
]], Ch=me("download", Uh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hh=[["path", {
  d:"M15 3h6v6", key:"1q9fwt"
}
], ["path", {
  d:"M10 14 21 3", key:"gplh6r"
}
], ["path", {
  d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key:"a6xqqp"
}
]], Rh=me("external-link", Hh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh=[["path", {
  d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4", key:"tonef"
}
], ["path", {
  d:"M9 18c-4.51 2-5-2-7-2", key:"9comsn"
}
]], _d=me("github", qh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bh=[["path", {
  d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key:"zw3jo"
}
], ["path", {
  d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key:"1wduqc"
}
], ["path", {
  d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key:"kqbvx6"
}
]], Md=me("layers", Bh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh=[["path", {
  d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", key:"c2jq9f"
}
], ["rect", {
  width:"4", height:"12", x:"2", y:"9", key:"mk3on5"
}
], ["circle", {
  cx:"4", cy:"4", r:"2", key:"bt5ra8"
}
]], Gh=me("linkedin", Yh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qh=[["path", {
  d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key:"132q7q"
}
], ["rect", {
  x:"2", y:"4", width:"20", height:"16", rx:"2", key:"izxlao"
}
]], Od=me("mail", Qh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh=[["path", {
  d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key:"1r0f0z"
}
], ["circle", {
  cx:"12", cy:"10", r:"3", key:"ilqhr7"
}
]], Lh=me("map-pin", Xh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh=[["path", {
  d:"M4 5h16", key:"1tepv9"
}
], ["path", {
  d:"M4 12h16", key:"1lakjw"
}
], ["path", {
  d:"M4 19h16", key:"1djgab"
}
]], Vh=me("menu", Zh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kh=[["rect", {
  width:"20", height:"14", x:"2", y:"3", rx:"2", key:"48i651"
}
], ["line", {
  x1:"8", x2:"16", y1:"21", y2:"21", key:"1svkeh"
}
], ["line", {
  x1:"12", x2:"12", y1:"17", y2:"21", key:"vw1qmm"
}
]], Jh=me("monitor", Kh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $h=[["path", {
  d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401", key:"kfwtm"
}
]], Dd=me("moon", $h); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wh=[["path", {
  d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384", key:"9njp5v"
}
]], Fh=me("phone", Wh); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih=[["path", {
  d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key:"1ffxy3"
}
], ["path", {
  d:"m21.854 2.147-10.94 10.939", key:"12cjpa"
}
]], Ph=me("send", Ih); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e1=[["path", {
  d:"M16 10a4 4 0 0 1-8 0", key:"1ltviw"
}
], ["path", {
  d:"M3.103 6.034h17.794", key:"awc11p"
}
], ["path", {
  d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z", key:"o988cm"
}
]], ms=me("shopping-bag", e1); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1=[["path", {
  d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", key:"1s2grr"
}
], ["path", {
  d:"M20 2v4", key:"1rf3ol"
}
], ["path", {
  d:"M22 4h-4", key:"gwowj6"
}
], ["circle", {
  cx:"4", cy:"20", r:"2", key:"6kqj1y"
}
]], Gu=me("sparkles", t1); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1=[["circle", {
  cx:"12", cy:"12", r:"4", key:"4exip2"
}
], ["path", {
  d:"M12 2v2", key:"tus03m"
}
], ["path", {
  d:"M12 20v2", key:"1lh1kg"
}
], ["path", {
  d:"m4.93 4.93 1.41 1.41", key:"149t6j"
}
], ["path", {
  d:"m17.66 17.66 1.41 1.41", key:"ptbguv"
}
], ["path", {
  d:"M2 12h2", key:"1t8f8n"
}
], ["path", {
  d:"M20 12h2", key:"1q8mjw"
}
], ["path", {
  d:"m6.34 17.66-1.41 1.41", key:"1m8zz5"
}
], ["path", {
  d:"m19.07 4.93-1.41 1.41", key:"1shlcs"
}
]], kd=me("sun", l1); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1=[["path", {
  d:"M12 19h8", key:"baeox8"
}
], ["path", {
  d:"m4 17 6-6-6-6", key:"1yngyt"
}
]], n1=me("terminal", a1); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1=[["path", {
  d:"M16 7h6v6", key:"box55l"
}
], ["path", {
  d:"m22 7-8.5 8.5-5-5L2 17", key:"1t1m79"
}
]], wd=me("trending-up", u1); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1=[["path", {
  d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z", key:"pff0z6"
}
]], c1=me("twitter", i1); /**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1=[["path", {
  d:"M18 6 6 18", key:"1bl5f8"
}
], ["path", {
  d:"m6 6 12 12", key:"d8bk6v"
}
]], Ud=me("x", s1); function f1() {
  const[T, Y]=xe.useState("home"), [B, b]=xe.useState(!1), [R, G]=xe.useState("dark"), [W, ve]=xe.useState(null), [D, z]=xe.useState("1M"), [P, C]=xe.useState(0), [ne, Ce]=xe.useState("blue"), [Oe, _e]=xe.useState("healthy"), [et, De]=xe.useState(24), [Tt, ke]=xe.useState("Abstract crystal shards, deep blue neon glow, floating in void"), [Xe, tt]=xe.useState(!1), [He, Z]=xe.useState(1), [de, Le]=xe.useState({
    name:"", email:"", subject:"", message:""
  }),
  [Pt, lt]=xe.useState(!1), [Re, Mt]=xe.useState(!1), ht=[{
    id:"fintech-dashboard", title:"Apex Wealth Terminal", subtitle:"Premium Wealth Management Suite", category:"web", desc:"High-performance glassmorphic fintech dashboard designed for dynamic portfolio analysis, real-time asset tracking, and smart rebalancing.", longDesc:"Apex Wealth Terminal is a state-of-the-art wealth management platform. It combines rich vector data visualization, lightweight canvas charts, and instant transaction feeds. Developed for family offices and active investors who require high-density telemetry alongside beautiful visual balance. Built using advanced React layout systems, optimizing render speeds even under rapid data updates.", technologies:["React 19", "TypeScript", "Tailwind CSS v4", "Recharts", "Framer Motion"], metrics:[{
      label:"Asset Latency", value:"< 12ms"
    },
    {
      label:"Transaction Speed", value:"Instant"
    },
    {
      label:"Client Retention", value:"99.4%"
    }
    ], accentColor:"#3b82f6"
  },
  {
    id:"saas-analytics", title:"PulseTelemetry", subtitle:"Real-time Server Analytics", category:"saas", desc:"Real-time infrastructure performance monitor displaying active metrics, network load patterns, and memory usage details in a sleek dashboard.", longDesc:"PulseTelemetry is an infrastructure monitoring tool tailored for DevOps teams looking to escape heavy, outdated administrative layouts. By using custom-designed SVG graphs and lightweight state management, PulseTelemetry visualizes server cluster status in a beautifully clean, highly informative dashboard. It supports multiple node clusters, alert system overrides, and rapid performance reporting.", technologies:["React 19", "Tailwind CSS v4", "WebSockets", "D3.js", "TypeScript"], metrics:[{
      label:"Bundle Size", value:"32KB Gzipped"
    },
    {
      label:"Max Concurrency", value:"10k+ nodes"
    },
    {
      label:"Setup Time", value:"3 Minutes"
    }
    ], accentColor:"#00d2ff"
  },
  {
    id:"ecommerce", title:"Veloce Atelier", subtitle:"High-End Headless E-Commerce", category:"web", desc:"Ultra-fast luxury e-commerce platform with elegant hover micro-interactions, responsive filters, and frictionless custom checkout flows.", longDesc:"Veloce Atelier is a luxury boutique concept built on a headless commerce architecture. It prioritizes stunning visual feedback, utilizing responsive grid structures, beautiful aspect ratio frames, and elegant micro-animations. From fluidly updating cart tallies to responsive product image cards, the entire experience is designed to feel highly exclusive, lightweight, and ultra-premium.", technologies:["Next.js", "React 19", "Tailwind CSS v4", "Stripe API", "GraphQL"], metrics:[{
      label:"Lighthouse Score", value:"100/100"
    },
    {
      label:"Conversion Lift", value:"+24.6%"
    },
    {
      label:"Load Time", value:"0.4s"
    }
    ], accentColor:"#6366f1"
  },
  {
    id:"ai-art-generator", title:"Synthetix AI", subtitle:"Creative Generative Canvas", category:"ui-ux", desc:"A futuristic design system for a generative AI platform, featuring dark immersive views, glowing neon panels, and premium inputs.", longDesc:"Synthetix AI represents an immersive design system constructed for next-generation generative creative suites. This project details a futuristic control cabin with highly specialized glass panels, neon sliders, dynamic prompt optimization, and fluid model configuration trees. It is styled with specialized dark tones, vivid blue and purple highlights, and micro-hover glows.", technologies:["React 19", "Tailwind CSS", "Framer Motion", "WebGL", "Tailwind v4"], metrics:[{
      label:"Generation Time", value:"1.8s"
    },
    {
      label:"Creative Accuracy", value:"98.2%"
    },
    {
      label:"Active Creators", value:"140k+"
    }
    ], accentColor:"#8b5cf6"
  }
  ], at=[{
    year:"2026", role:"Software Developer", company:"Freelance / Project-Based", desc:"Merancang dan mengembangkan solusi perangkat lunak berbasis web & mobile, mengelola arsitektur sistem, serta melakukan optimasi performa backend untuk mendukung skalabilitas bisnis klien.", type:"experience"
},
{
  year:"2025", role:"Security Researcher (Bug Bounty)", company:"Independent Platform", desc:"Melakukan identifikasi dan pelaporan kerentanan keamanan (vulnerability assessment) pada aplikasi web dan mobile, dengan fokus pada celah OWASP Top 10 serta mitigasi risiko bagi tim pengembang.", type:"experience"
},
{
  year:"2024", role:"Automation & Bot Developer", company:"Freelance (UMKM)", desc:"Membangun sistem otomatisasi bisnis berbasis WhatsApp menggunakan library Baileys, mencakup fitur auto-reply, broadcast pesan, dan integrasi database inventaris untuk meningkatkan efisiensi operasional UMKM.", type:"experience"
  }
  ], [y, E]=xe.useState("all"), H=y==="all" ?ht:ht.filter(x=>x.category===y); xe.useEffect(() => {
    const x=localStorage.getItem("theme"), _=window.matchMedia("(prefers-color-scheme: dark)").matches, w=x||(_?"dark" :"light"); G(w), document.documentElement.classList.toggle("dark", w==="dark"); const L=window.matchMedia("(prefers-color-scheme: dark)"), ye=oe=> {
      if(!localStorage.getItem("theme")) {
        const Ot=oe.matches?"dark" :"light"; G(Ot), document.documentElement.classList.toggle("dark", Ot==="dark")
      }
    };
    return L.addEventListener("change", ye), () =>L.removeEventListener("change", ye)
  },
  []); const le=() => {
    const x=R==="dark" ?"light" :"dark"; G(x), localStorage.setItem("theme", x), document.documentElement.classList.toggle("dark", x==="dark")
  },
  F=x=> {
    Y(x), b(!1); const _=document.getElementById(x); _&&_.scrollIntoView({
      behavior:"smooth", block:"start"
    })
  };
  xe.useEffect(() => {
    const x=() => {
      const _=["home", "about", "skills", "projects", "contact"], w=window.scrollY+200; for(const L of _) {
        const ye=document.getElementById(L); if(ye) {
          const oe=ye.offsetTop, Ot=ye.offsetHeight; if(w>=oe&&w<oe+Ot) {
            Y(L); break
          }
        }
      }
    };
    return window.addEventListener("scroll", x), () =>window.removeEventListener("scroll", x)
  },
  []), xe.useEffect(() => {
    const x=setInterval(() => {
      De(_=> {
        const w=Math.floor(Math.random() *7) -3, L=_+w; return Math.max(14, Math.min(42, L))
      })
    },
    1200); return() =>clearInterval(x)
  },
  []); const d=x=> {
    x.preventDefault(), !(!de.name||!de.email||!de.message) &&(Mt(!0), setTimeout(() => {
      Mt(!1), lt(!0), Le({
        name:"", email:"", subject:"", message:""
      }),
      setTimeout(() =>lt(!1), 5e3)
    },
    1500))
  },
  N=() => {
    if(Xe) return"animate-pulse bg-gradient-to-tr from-blue-900/40 via-purple-900/40 to-slate-900/40"; switch(He) {
      case 1:return"bg-gradient-to-tr from-blue-950/80 via-[#0a1128] to-indigo-950/80 border border-blue-500/20"; case 2:return"bg-gradient-to-br from-[#0c0f1d] via-[#1a0f30] to-[#0c0f1d] border border-purple-500/20"; case 3:return"bg-gradient-to-r from-cyan-950/80 via-[#031525] to-emerald-950/80 border border-emerald-500/20"; default:return"bg-slate-950"
    }
  },
  A=() => {
    tt(!0), setTimeout(() => {
      tt(!1), Z(x=>x%3+1)
    },
    2e3)
  };
  return c.jsxs("div", {
    className:`min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${R==="dark"?"bg-[#050505] text-white":"bg-[#f4f7fa] text-slate-900"}`, children:[c.jsx("div", {
      className:"absolute top-[-100px] right-[-100px] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-slate-200/50 dark:bg-white/5 rounded-full blur-[80px] md:blur-[140px] pointer-events-none z-0"
    }),
    c.jsx("div", {
      className:"absolute top-[800px] left-[-150px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-slate-200/50 dark:bg-white/3 rounded-full blur-[70px] md:blur-[120px] pointer-events-none z-0"
    }),
    c.jsx("div", {
      className:"absolute bottom-[200px] right-[-100px] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-slate-100/80 dark:bg-white/2 rounded-full blur-[90px] md:blur-[160px] pointer-events-none z-0"
    }),
    c.jsx("nav", {
      id:"navbar", className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/2 backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-sm", children:c.jsxs("div", {
        className:"max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center", children:[c.jsxs("div", {
          onClick:() =>F("home"), className:"flex items-center gap-3 group cursor-pointer", id:"nav-logo", children:[c.jsx("div", {
            className:"w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300", children:c.jsx("span", {
              className:"font-extrabold text-[11px] tracking-tighter text-white", children:"AZX"
            })
          }),
          c.jsxs("span", {
            className:"text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-blue-600 dark:from-white dark:via-slate-200 dark:to-blue-400 bg-clip-text text-transparent", children:["AZAM", c.jsx("span", {
              className:"text-blue-500", children:".DEV"
            })
            ]
          })
          ]
        }),
        c.jsxs("div", {
          className:"hidden md:flex gap-8 items-center text-sm font-semibold", children:[["home", "about", "skills", "projects", "contact"].map(x=>c.jsxs("button", {
            onClick:() =>F(x), className:`relative py-2 capitalize transition-colors duration-300 ${T===x?"text-blue-600 dark:text-blue-400":"text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`, id:`nav-link-${x}`, children:[x, T===x&&c.jsx("span", {
              className:"absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full animate-fade-in"
            })
            ]
          },
          x)), c.jsx("div", {
            className:"h-4 w-[1px] bg-slate-200 dark:bg-neutral-800 mx-2"
          }),
          c.jsx("button", {
            onClick:le, className:"p-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center cursor-pointer", title:"Toggle theme", id:"theme-toggle", children:R==="dark" ?c.jsx(kd, {
              size:18, className:"text-amber-400"
            })
            :c.jsx(Dd, {
              size:18
            })
          }),
          c.jsx("button", {
            onClick:() =>F("contact"), className:"px-5 py-2.5 bg-blue-600 hover:bg-blue-500 hover:scale-102 hover:shadow-lg hover:shadow-blue-600/20 active:scale-98 text-white rounded-xl text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer", id:"nav-action-btn", children:"Let's Talk"
          })
          ]
        }),
        c.jsxs("div", {
          className:"flex md:hidden items-center gap-3", children:[c.jsx("button", {
            onClick:le, className:"p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300", id:"mobile-theme-toggle", children:R==="dark" ?c.jsx(kd, {
              size:18, className:"text-amber-400"
            })
            :c.jsx(Dd, {
              size:18
            })
          }),
          c.jsx("button", {
            onClick:() =>b(!B), className:"p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300", id:"mobile-menu-toggle", children:B?c.jsx(Ud, {
              size:22
            })
            :c.jsx(Vh, {
              size:22
            })
          })
          ]
        })
        ]
      })
    }),
    c.jsxs("div", {
      className:`fixed inset-0 z-40 md:hidden transition-all duration-300 ${B?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`, id:"mobile-menu-drawer", children:[c.jsx("div", {
        className:"absolute inset-0 bg-black/60 backdrop-blur-sm", onClick:() =>b(!1)
      }),
      c.jsxs("div", {
        className:`absolute top-20 right-4 left-4 p-6 rounded-2xl bg-white/95 dark:bg-[#0c0c0f]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 flex flex-col gap-5 shadow-2xl transition-all duration-300 ${B?"translate-y-0 scale-100":"-translate-y-4 scale-95"}`, children:[c.jsx("div", {
          className:"flex flex-col gap-3", children:["home", "about", "skills", "projects", "contact"].map(x=>c.jsx("button", {
            onClick:() =>F(x), className:`w-full py-3 px-4 text-left rounded-xl capitalize font-semibold transition-colors ${T===x?"bg-blue-600 text-white":"text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"}`, id:`mobile-nav-link-${x}`, children:x
          },
          x))
        }),
        c.jsx("div", {
          className:"h-[1px] bg-slate-200 dark:bg-white/10"
        }),
        c.jsx("button", {
          onClick:() =>F("contact"), className:"w-full py-3 bg-blue-600 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-blue-600/15", id:"mobile-nav-action", children:"Let's Talk"
        })
        ]
      })
      ]
    }),
    c.jsxs("main", {
      className:"max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-20 relative z-10 flex flex-col gap-32", children:[c.jsxs("section", {
        id:"home", className:"min-h-[80vh] flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center pt-2 pb-12 md:pt-4 md:pb-16", children:[c.jsxs("div", {
          className:"lg:col-span-7 flex flex-col gap-6 md:gap-8 items-start animate-fade-in-up", children:[c.jsxs("div", {
            className:"w-full relative overflow-hidden rounded-[32px] py-14 px-8 sm:py-20 sm:px-10 md:py-24 md:px-12 lg:py-26 border border-slate-200/30 dark:border-white/10 shadow-[0_20px_50px_rgba(59,130,246,0.15)] dark:shadow-[0_20px_50px_rgba(59,130,246,0.08)] group transition-all duration-500 hover:scale-[1.01] hover:border-blue-500/30 dark:hover:border-blue-400/20", children:[c.jsx("div", {
              className:"absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]", style: {
                backgroundImage:"url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80')"
              }
            }),
            c.jsx("div", {
              className:"absolute inset-0 bg-gradient-to-br from-white/80 via-slate-50/85 to-blue-50/80 dark:from-slate-950/90 dark:via-neutral-900/85 dark:to-blue-950/90 backdrop-blur-[12px]"
            }),
            c.jsx("div", {
              className:"absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
            }),
            c.jsx("div", {
              className:"absolute -top-12 -left-12 w-48 h-48 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-1000"
            }),
            c.jsx("div", {
              className:"relative z-10 flex flex-col justify-center", children:c.jsxs("h1", {
                className:"font-display leading-[1.3] tracking-tight", children:[c.jsx("span", {
                  className:"font-light text-slate-500 dark:text-white/60 block text-lg sm:text-xl md:text-2xl mb-1", children:"Membangun"
                }),
                c.jsx("span", {
                  className:"inline-block font-black text-2xl sm:text-3xl md:text-4xl my-1 bg-gradient-to-r from-slate-900 via-slate-700 to-blue-600 dark:from-white dark:via-slate-300 dark:to-blue-400 bg-clip-text text-transparent filter drop-shadow-sm", children:"Pengalaman Digital"
                }),
                c.jsx("span", {
                  className:"font-extrabold text-xl sm:text-2xl md:text-3xl block mt-1 text-slate-800 dark:text-slate-100", children:"Dengan Presisi."
                })
                ]
              })
            })
            ]
          }),
          c.jsxs("p", {
            className:"text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed", children:["Halo, saya ", c.jsx("span", {
              className:"font-bold text-slate-900 dark:text-white", children:"azam"
            }),
            ". Seorang fullatack developer yang berspesialisasi dalam membangun antarmuka dan sistem modern berkinerja tinggi, interaksi halus, dan arsitektur kode yang bersih dan sistem yang bersih dan aman."]
          }),
          c.jsxs("div", {
            className:"flex flex-wrap gap-4 mt-2 w-full sm:w-auto", children:[c.jsxs("button", {
              onClick:() =>F("projects"), className:"w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold tracking-wide hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group", id:"hero-primary-btn", children:["Lihat Portofolio", c.jsx(Oh, {
                size:18, className:"group-hover:translate-x-1 transition-transform"
              })
              ]
            }),
            c.jsx("button", {
              onClick:() =>F("contact"), className:"w-full sm:w-auto px-8 py-4 bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-blue-500/40 rounded-2xl font-bold tracking-wide hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer", id:"hero-secondary-btn", children:"Hubungi Saya"
            })
            ]
          })
          ]
        }),
        c.jsxs("div", {
          className:"lg:col-span-5 grid grid-cols-2 gap-4 w-full h-fit py-0 animate-fade-in-up-delay", children:[c.jsxs("div", {
            className:"col-span-2 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group shadow-sm", children:[c.jsxs("div", {
              className:"flex justify-between items-start mb-6", children:[c.jsx("div", {
                className:"w-12 h-12 rounded-2xl bg-slate-100 dark:bg-neutral-900 flex items-center justify-center border border-slate-200/50 dark:border-white/5 text-slate-700 dark:text-slate-300 group-hover:scale-105 transition-transform duration-300", children:c.jsx(os, {
                  size:24
                })
              }),
              c.jsx("span", {
                className:"text-xs text-slate-400 dark:text-neutral-500 font-mono tracking-wider", children:"01 / Sofware Developer"
              })
              ]
            }),
            c.jsxs("div", {
              children:[c.jsx("h3", {
                className:"text-xl md:text-2xl font-bold text-slate-900 dark:text-white", children:"Pengembang Ahli"
              }),
              c.jsx("p", {
                className:"text-sm text-slate-500 dark:text-neutral-400 mt-2 leading-relaxed", children:"Profesional di bidang rekayasa perangkat lunak dengan penguasaan mendalam terhadap berbagai bahasa pemrograman, meliputi JavaScript, TypeScript, Python, Golang, Dart, Kotlin, hingga PHP. Berpengalaman dalam mengembangkan solusi digital menggunakan framework modern seperti React, Next.js, dan Laravel. Saat ini aktif menekuni pengembangan web dan aplikasi mobile, serta memiliki kompetensi tambahan di bidang keamanan informasi, khususnya dalam pengoperasian dan pengembangan tools untuk pemindaian kerentanan (vulnerability scanning) pada sistem berbasis website dan mobile."
              })
              ]
            })
            ]
          }),
          c.jsxs("div", {
            className:"bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-sm flex flex-col justify-between group", children:[c.jsx("span", {
              className:"text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:scale-105 transition-transform duration-300 origin-left", children:"30+"
            }),
            c.jsxs("div", {
              children:[c.jsx("h4", {
                className:"text-xs text-slate-400 dark:text-neutral-500 uppercase font-mono tracking-widest mt-2", children:"Proyek Selesai"
              }),
              c.jsx("p", {
                className:"text-[10px] text-slate-400 dark:text-neutral-500 mt-1", children:"Skala menengah hingga besar"
              })
              ]
            })
            ]
          }),
          c.jsxs("div", {
            className:"bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-sm flex flex-col justify-between group", children:[c.jsx("span", {
              className:"text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:scale-105 transition-transform duration-300 origin-left", children:"1+"
            }),
            c.jsxs("div", {
              children:[c.jsx("h4", {
                className:"text-xs text-slate-400 dark:text-neutral-500 uppercase font-mono tracking-widest mt-2", children:"Tahun Pengalaman"
              }),
              c.jsx("p", {
                className:"text-[10px] text-slate-400 dark:text-neutral-500 mt-1", children:"Di fullstack dan cyber securty"
              })
              ]
            })
            ]
          })
          ]
        })
        ]
      }),
      c.jsx("section", {
        id:"about", className:"py-12 border-t border-slate-200/50 dark:border-white/5", children:c.jsxs("div", {
          className:"grid lg:grid-cols-12 gap-12", children:[c.jsxs("div", {
            className:"lg:col-span-4 lg:sticky lg:top-28 h-fit flex flex-col gap-5 items-start", children:[c.jsxs("div", {
              className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10", children:[c.jsx(Gu, {
                size:14, className:"text-blue-500"
              }),
              c.jsx("span", {
                className:"text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest", children:"Tentang Saya"
              })
              ]
            }),
            c.jsx("h2", {
              className:"font-display text-3xl md:text-4xl font-extrabold tracking-tight", children:"Kisah Karir & Pendidikan"
            }),
            c.jsx("p", {
              className:"text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base", children:"Fokus utama saya adalah menjembatani jarak antara estetika visual visual yang memukau dan keandalan kode rekayasa perangkat lunak. Saya merancang interaksi yang bermakna bagi pengguna sekaligus menjaga kebersihan basis kode."
            }),
            c.jsxs("div", {
              className:"w-full mt-2 bg-white/30 dark:bg-white/2 backdrop-blur-md border border-slate-200/50 dark:border-white/5 rounded-2xl p-4 flex items-center justify-between gap-4", children:[c.jsxs("div", {
                className:"flex items-center gap-3", children:[c.jsx("div", {
                  className:"w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300", children:c.jsx(Eh, {
                    size:20
                  })
                }),
                c.jsxs("div", {
                  children:[c.jsx("h4", {
                    className:"text-xs font-bold text-slate-900 dark:text-white", children:"CV / Portfolio PDF"
                  }),
                  c.jsx("p", {
                    className:"text-[10px] text-slate-400 dark:text-neutral-500", children:"Terbaru diupdate Juni 2026"
                  })
                  ]
                })
                ]
              }),
              c.jsx("button", {
                onClick:() =>alert("Mengunduh resume... (Simulator)"), className:"p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300 flex items-center justify-center cursor-pointer", title:"Unduh CV", children:c.jsx(Ch, {
                  size:16
                })
              })
              ]
            })
            ]
          }),
          c.jsxs("div", {
            className:"lg:col-span-8 flex flex-col gap-6", children:[c.jsx("div", {
              className:"flex gap-4 border-b border-slate-200/50 dark:border-white/5 pb-4 mb-4", children:c.jsxs("h3", {
                className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2", children:[c.jsx(_h, {
                  size:18, className:"text-blue-500"
                }),
                "Pengalaman Kerja & Studi"]
              })
            }),
            c.jsx("div", {
              className:"relative pl-6 border-l border-slate-200 dark:border-neutral-800 flex flex-col gap-8", children:at.map((x, _) =>c.jsxs("div", {
                className:"relative group", id:`timeline-item-${_}`, children:[c.jsx("span", {
                  className:"absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#050505] group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center", children:c.jsx("span", {
                    className:"w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-neutral-800 group-hover:bg-blue-500 transition-colors"
                  })
                }),
                c.jsxs("div", {
                  className:"bg-white/40 dark:bg-white/3 backdrop-blur-md border border-slate-200/50 dark:border-white/5 rounded-2xl p-5 md:p-6 hover:border-blue-500/20 dark:hover:border-blue-500/25 transition-all duration-300 shadow-sm flex flex-col gap-3", children:[c.jsxs("div", {
                    className:"flex flex-col md:flex-row md:justify-between md:items-start gap-1", children:[c.jsxs("div", {
                      children:[c.jsx("h4", {
                        className:"text-base md:text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children:x.role
                      }),
                      c.jsx("p", {
                        className:"text-xs md:text-sm text-slate-500 dark:text-neutral-400 font-medium", children:x.company
                      })
                      ]
                    }),
                    c.jsx("span", {
                      className:"inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 text-slate-600 dark:text-slate-300 text-[10px] md:text-xs font-mono font-bold w-fit", children:x.year
                    })
                    ]
                  }),
                  c.jsx("p", {
                    className:"text-xs md:text-sm text-slate-500 dark:text-neutral-400 leading-relaxed", children:x.desc
                  })
                  ]
                })
                ]
              },
              _))
            })
            ]
          })
          ]
        })
      }),
      c.jsxs("section", {
        id:"skills", className:"py-12 border-t border-slate-200/50 dark:border-white/5", children:[c.jsxs("div", {
          className:"flex flex-col items-center gap-4 text-center mb-12", children:[c.jsxs("div", {
            className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10", children:[c.jsx(os, {
              size:14, className:"text-blue-500"
            }),
            c.jsx("span", {
              className:"text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest", children:"Keahlian"
            })
            ]
          }),
          c.jsx("h2", {
            className:"font-display text-3xl md:text-4xl font-extrabold tracking-tight", children:"Eksplorasi Tech Stack Utama"
          }),
          c.jsx("p", {
            className:"text-sm md:text-base text-slate-500 dark:text-neutral-400 max-w-xl leading-relaxed", children:"Daftar teknologi dan alat desain yang saya gunakan secara profesional untuk merealisasikan ide menjadi produk nyata berkecepatan tinggi."
          })
          ]
        }),
        c.jsxs("div", {
          className:"grid md:grid-cols-2 lg:grid-cols-12 gap-6", children:[c.jsxs("div", {
            className:"lg:col-span-8 bg-white/40 dark:bg-white/3 backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl p-6 md:p-8 hover:border-blue-500/25 transition-all duration-300 shadow-sm flex flex-col gap-6", children:[c.jsxs("div", {
              className:"flex items-center gap-3", children:[c.jsx("div", {
                className:"w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300", children:c.jsx(os, {
                  size:20
                })
              }),
              c.jsxs("div", {
                children:[c.jsx("h3", {
                  className:"text-lg font-bold text-slate-900 dark:text-white", children:"Frontend Engineering"
                }),
                c.jsx("p", {
                  className:"text-xs text-slate-400 dark:text-neutral-500", children:"Membangun UI interaktif berkecepatan tinggi"
                })
                ]
              })
              ]
            }),
            c.jsx("div", {
              className:"grid sm:grid-cols-2 gap-4", children:[{
                name:"React 19 & Next.js", percent:95
              },
              {
                name:"TypeScript", percent:90
              },
              {
                name:"Tailwind CSS v4 & PostCSS", percent:95
              },
              {
                name:"State Management (Zustand, Redux)", percent:85
              },
              {
                name:"Single Page Applications (Vite)", percent:92
              },
              {
                name:"API Integrations & REST/GraphQL", percent:88
              }
              ].map((x, _) =>c.jsxs("div", {
                className:"flex flex-col gap-2", children:[c.jsxs("div", {
                  className:"flex justify-between items-center text-xs", children:[c.jsx("span", {
                    className:"font-semibold text-slate-700 dark:text-slate-300", children:x.name
                  }),
                  c.jsxs("span", {
                    className:"font-mono text-slate-900 dark:text-white font-bold", children:[x.percent, "%"]
                  })
                  ]
                }),
                c.jsx("div", {
                  className:"h-2 bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden", children:c.jsx("div", {
                    className:"skill-bar-fill h-full bg-slate-900 dark:bg-white rounded-full transition-all duration-1000 ease-out shadow-sm", style: {
                      width:`${x.percent}%`
                    }
                  })
                })
                ]
              },
              _))
            })
            ]
          }),
          c.jsxs("div", {
            className:"lg:col-span-4 bg-white/40 dark:bg-white/3 backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl p-6 md:p-8 hover:border-blue-500/25 transition-all duration-300 shadow-sm flex flex-col justify-between gap-6", children:[c.jsxs("div", {
              className:"flex flex-col gap-4", children:[c.jsxs("div", {
                className:"flex items-center gap-3", children:[c.jsx("div", {
                  className:"w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300", children:c.jsx(Md, {
                    size:20
                  })
                }),
                c.jsxs("div", {
                  children:[c.jsx("h3", {
                    className:"text-lg font-bold text-slate-900 dark:text-white", children:"Design & Craft"
                  }),
                  c.jsx("p", {
                    className:"text-xs text-slate-400 dark:text-neutral-500", children:"Menciptakan visual & maket navigasi"
                  })
                  ]
                })
                ]
              }),
              c.jsx("div", {
                className:"flex flex-wrap gap-2.5 mt-2", children:["Figma", "UI Glassmorphism", "Atomic Design", "Vector Assets", "Design Systems", "Wireframing", "Micro-interactions", "Responsive Grids", "Rhythm & Space"].map((x, _) =>c.jsx("span", {
                  className:"px-3.5 py-2 text-xs font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 hover:border-blue-500/40 dark:hover:border-blue-500/30 text-slate-600 dark:text-slate-300 rounded-xl transition-all duration-300 cursor-default hover:scale-102 hover:text-blue-600 dark:hover:text-blue-400", children:x
                },
                _))
              })
              ]
            }),
            c.jsxs("div", {
              className:"p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex gap-2", children:[c.jsx(Gu, {
                size:16, className:"shrink-0 mt-0.5"
              }),
              c.jsx("span", {
                children:"Konsisten menerapkan prinsip tipografi presisi, porsi negatif, dan kenyamanan kontras mata."
              })
              ]
            })
            ]
          }),
          c.jsxs("div", {
            className:"lg:col-span-12 bg-white/40 dark:bg-white/3 backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl p-6 md:p-8 hover:border-blue-500/25 transition-all duration-300 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6", children:[c.jsxs("div", {
              className:"flex items-center gap-4", children:[c.jsx("div", {
                className:"w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0", children:c.jsx(Jh, {
                  size:22
                })
              }),
              c.jsxs("div", {
                children:[c.jsx("h3", {
                  className:"text-base md:text-lg font-bold text-slate-900 dark:text-white", children:"Sisi Server & Integrasi Pendukung"
                }),
                c.jsx("p", {
                  className:"text-xs text-slate-400 dark:text-neutral-500 max-w-xl", children:"Melengkapi fungsionalitas visual dengan keandalan server modern untuk performa transfer data maksimal."
                })
                ]
              })
              ]
            }),
            c.jsx("div", {
              className:"flex flex-wrap gap-2 md:gap-3 w-full md:w-auto", children:["Node.js", "Express", "PostgreSQL", "Firebase Auth", "Git & CI/CD", "Vercel / Docker"].map((x, _) =>c.jsx("span", {
                className:"px-4 py-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200/30 dark:border-white/5 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-mono font-bold", children:x
              },
              _))
            })
            ]
          })
          ]
        })
        ]
      }),
      c.jsxs("section", {
        id:"projects", className:"py-12 border-t border-slate-200/50 dark:border-white/5", children:[c.jsxs("div", {
          className:"flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12", children:[c.jsxs("div", {
            className:"flex flex-col gap-4 items-start", children:[c.jsxs("div", {
              className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10", children:[c.jsx(Md, {
                size:14, className:"text-blue-500"
              }),
              c.jsx("span", {
                className:"text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest", children:"Portofolio"
              })
              ]
            }),
            c.jsx("h2", {
              className:"font-display text-3xl md:text-4xl font-extrabold tracking-tight", children:"Hasil Karya Unggulan"
            }),
            c.jsx("p", {
              className:"text-sm text-slate-500 dark:text-neutral-400 max-w-xl", children:"Daftar proyek terpilih yang menunjukkan integrasi sempurna antara rekayasa performa tinggi dan tampilan visual premium."
            })
            ]
          }),
          c.jsx("div", {
            className:"flex gap-2 p-1 bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-2xl w-fit shrink-0 self-start md:self-auto", children:[{
              id:"all", label:"Semua"
            },
            {
              id:"web", label:"Web"
            },
            {
              id:"saas", label:"SaaS"
            },
            {
              id:"ui-ux", label:"UI/UX"
            }
            ].map(x=>c.jsx("button", {
              onClick:() =>E(x.id), className:`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all duration-300 cursor-pointer ${y===x.id?"bg-blue-600 text-white shadow-md shadow-blue-600/15":"text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`, id:`project-filter-${x.id}`, children:x.label
            },
            x.id))
          })
          ]
        }),
        c.jsx("div", {
          className:"grid md:grid-cols-2 gap-8", id:"projects-grid", children:H.map(x=>c.jsxs("div", {
            onClick:() =>ve(x), className:"group bg-white/40 dark:bg-white/3 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col justify-between cursor-pointer relative overflow-hidden", id:`project-card-${x.id}`, style: {
              "--project-accent" :x.accentColor
            },
            children:[c.jsx("div", {
              className:"absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none", style: {
                backgroundColor:x.accentColor
              }
            }),
            c.jsxs("div", {
              className:"flex justify-between items-start mb-6", children:[c.jsxs("div", {
                children:[c.jsxs("div", {
                  className:"flex items-center gap-2", children:[c.jsx("span", {
                    className:"text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300", children:x.category==="web" ?"Web Application" :x.category==="saas" ?"SaaS System" :"Creative Design"
                  }),
                  c.jsx("span", {
                    className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                  })
                  ]
                }),
                c.jsx("h3", {
                  className:"text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-1", children:x.title
                }),
                c.jsx("p", {
                  className:"text-xs text-slate-400 dark:text-neutral-500 mt-0.5", children:x.subtitle
                })
                ]
              }),
              c.jsx("div", {
                className:"w-10 h-10 rounded-full border border-slate-200/60 dark:border-white/10 group-hover:border-blue-500 group-hover:bg-blue-500/10 text-slate-400 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center transition-all duration-300 shrink-0", children:c.jsx(zh, {
                  size:18, className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                })
              })
              ]
            }),
            c.jsxs("div", {
              className:"w-full h-44 bg-slate-100/80 dark:bg-slate-950/40 rounded-2xl border border-slate-200/40 dark:border-white/5 mb-6 overflow-hidden flex items-center justify-center relative p-4 group-hover:border-blue-500/20 transition-all duration-300", children:[c.jsx("div", {
                className:"absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"
              }),
              x.id==="fintech-dashboard" &&c.jsxs("div", {
                className:"w-full h-full flex flex-col justify-between", children:[c.jsxs("div", {
                  className:"flex justify-between items-center text-[10px] font-mono text-neutral-500 dark:text-neutral-400", children:[c.jsxs("span", {
                    className:"flex items-center gap-1 font-bold", children:[c.jsx(wd, {
                      size:12, className:"text-blue-500"
                    }),
                    " APEX PORTFOLIO"]
                  }),
                  c.jsx("span", {
                    className:"text-emerald-500 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-0.5 animate-pulse", children:"+14.2%"
                  })
                  ]
                }),
                c.jsxs("div", {
                  className:"relative flex-1 h-20 my-2 flex items-end", children:[c.jsxs("svg", {
                    className:"w-full h-full text-blue-500 dark:text-blue-400 drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]", viewBox:"0 0 100 40", preserveAspectRatio:"none", children:[c.jsx("defs", {
                      children:c.jsxs("linearGradient", {
                        id:"fintechCardGrad", x1:"0", y1:"0", x2:"0", y2:"1", children:[c.jsx("stop", {
                          offset:"0%", stopColor:"#3b82f6"
                        }),
                        c.jsx("stop", {
                          offset:"100%", stopColor:"#3b82f6", stopOpacity:"0"
                        })
                        ]
                      })
                    }),
                    c.jsx("path", {
                      d:"M0,35 Q10,20 20,25 T40,15 T60,25 T80,8 T100,2", fill:"none", stroke:"currentColor", strokeWidth:"2.5", className:"animate-pulse"
                    }),
                    c.jsx("path", {
                      d:"M0,35 Q10,20 20,25 T40,15 T60,25 T80,8 T100,2 L100,40 L0,40 Z", fill:"url(#fintechCardGrad)", opacity:"0.1"
                    }),
                    c.jsx("line", {
                      x1:"80", y1:"0", x2:"80", y2:"40", stroke:"currentColor", strokeWidth:"0.5", strokeDasharray:"2,2", opacity:"0.5"
                    }),
                    c.jsx("circle", {
                      cx:"80", cy:"8", r:"3", fill:"#3b82f6", className:"animate-ping"
                    }),
                    c.jsx("circle", {
                      cx:"80", cy:"8", r:"2", fill:"#3b82f6"
                    })
                    ]
                  }),
                  c.jsxs("div", {
                    className:"absolute top-1 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white text-[8px] font-mono px-2 py-0.5 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md", children:["$142,482 ", c.jsx("span", {
                      className:"text-emerald-400 font-bold", children:"+$2.1K"
                    })
                    ]
                  })
                  ]
                }),
                c.jsxs("div", {
                  className:"flex justify-between text-[8px] font-mono text-neutral-400 dark:text-neutral-500", children:[c.jsx("span", {
                    children:"LIVE TELEMETRY FEED"
                  }),
                  c.jsx("span", {
                    className:"text-blue-500 dark:text-blue-400 animate-pulse", children:"● FEED ONLINE"
                  })
                  ]
                })
                ]
              }),
              x.id==="saas-analytics" &&c.jsxs("div", {
                className:"w-full h-full flex flex-col justify-between p-1", children:[c.jsxs("div", {
                  className:"flex justify-between items-center", children:[c.jsxs("span", {
                    className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1 font-bold", children:[c.jsx(jh, {
                      size:12, className:"text-cyan-400 animate-pulse"
                    }),
                    " CLUSTER-A-EAST"]
                  }),
                  c.jsxs("span", {
                    className:"text-[9px] font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-1", children:[c.jsx("span", {
                      className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"
                    }),
                    " LIVE"]
                  })
                  ]
                }),
                c.jsxs("div", {
                  className:"my-2 flex items-center justify-between gap-4", children:[c.jsxs("div", {
                    className:"flex flex-col", children:[c.jsxs("span", {
                      className:"text-2xl font-mono font-bold tracking-tight text-slate-800 dark:text-cyan-400", children:[et, "ms"]
                    }),
                    c.jsx("span", {
                      className:"text-[8px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-mono", children:"Response Time"
                    })
                    ]
                  }),
                  c.jsx("div", {
                    className:"grid grid-cols-4 gap-1 bg-slate-200/50 dark:bg-neutral-900/60 p-2 rounded-xl border border-slate-300/30 dark:border-white/5", children:[...Array(8)].map((_, w) =>c.jsx("div", {
                      className:`w-2.5 h-2.5 rounded-sm transition-all duration-300 ${w===3&&et>30?"bg-amber-500":w===6?"bg-rose-500 animate-pulse":"bg-emerald-500 hover:bg-emerald-400"}`, style: {
                        animationDelay:`${w*150}ms`
                      }
                    },
                    w))
                  })
                  ]
                }),
                c.jsxs("div", {
                  className:"flex gap-2 justify-between items-center text-[8px] font-mono text-neutral-400 dark:text-neutral-500 border-t border-slate-200/40 dark:border-white/5 pt-1", children:[c.jsx("span", {
                    children:"CPU: 12.4%"
                  }),
                  c.jsx("span", {
                    className:"text-cyan-400 animate-pulse font-bold", children:"MEM: 4.1GB/16GB"
                  }),
                  c.jsx("span", {
                    children:"SYS_UP: 99.9%"
                  })
                  ]
                })
                ]
              }),
              x.id==="ecommerce" &&c.jsxs("div", {
                className:"w-full h-full flex items-center justify-between gap-4", children:[c.jsxs("div", {
                  className:"w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-indigo-500/10 border border-indigo-500/10 dark:border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 relative overflow-hidden group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 shadow-lg", children:[c.jsx("div", {
                    className:"absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  }),
                  c.jsx(ms, {
                    size:36, className:"group-hover:scale-110 transition-transform duration-500 text-indigo-500 dark:text-indigo-400 drop-shadow-[0_4px_12px_rgba(99,102,241,0.4)]"
                  })
                  ]
                }),
                c.jsxs("div", {
                  className:"flex-1 flex flex-col gap-1.5", children:[c.jsxs("div", {
                    className:"flex items-center justify-between", children:[c.jsx("span", {
                      className:"text-[10px] font-mono font-bold text-slate-800 dark:text-neutral-300", children:"VELOCE ATELIER"
                    }),
                    c.jsx("span", {
                      className:"text-[9px] font-mono text-indigo-500 dark:text-indigo-400 font-bold bg-indigo-500/10 px-1.5 py-0.5 rounded", children:"$295.00"
                    })
                    ]
                  }),
                  c.jsx("div", {
                    className:"h-1.5 bg-slate-200 dark:bg-neutral-800 rounded-full w-full overflow-hidden", children:c.jsx("div", {
                      className:"h-full bg-indigo-500 w-3/4 rounded-full group-hover:w-full transition-all duration-1000"
                    })
                  }),
                  c.jsx("p", {
                    className:"text-[8px] text-slate-400 dark:text-neutral-500 font-mono", children:"Frictionless Checkout Core"
                  }),
                  c.jsxs("div", {
                    className:"flex gap-1.5 mt-0.5", children:[c.jsx("span", {
                      className:"w-3 h-3 rounded-full bg-blue-500 ring-2 ring-white dark:ring-neutral-900 ring-offset-1 ring-offset-blue-500 shadow-sm"
                    }),
                    c.jsx("span", {
                      className:"w-3 h-3 rounded-full bg-neutral-900 border border-white/20"
                    }),
                    c.jsx("span", {
                      className:"w-3 h-3 rounded-full bg-amber-100"
                    }),
                    c.jsx("span", {
                      className:"text-[8px] font-mono text-slate-400 dark:text-neutral-500 ml-1 mt-0.5", children:"+4 Options"
                    })
                    ]
                  })
                  ]
                })
                ]
              }),
              x.id==="ai-art-generator" &&c.jsxs("div", {
                className:"w-full h-full rounded-xl flex items-center justify-center text-center relative overflow-hidden bg-gradient-to-r from-purple-950/60 via-indigo-950/40 to-purple-950/60 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-500 shadow-inner", children:[c.jsxs("div", {
                  className:"absolute top-2 right-2 flex gap-1", children:[c.jsx("span", {
                    className:"w-1.5 h-1.5 rounded-full bg-purple-500"
                  }),
                  c.jsx("span", {
                    className:"w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping"
                  })
                  ]
                }),
                c.jsx("div", {
                  className:"absolute inset-0 opacity-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] group-hover:scale-110 transition-transform duration-700"
                }),
                c.jsxs("div", {
                  className:"flex flex-col gap-1 items-center z-10 p-2", children:[c.jsx(Gu, {
                    size:30, className:"text-purple-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_4px_12px_rgba(139,92,246,0.5)]"
                  }),
                  c.jsx("span", {
                    className:"text-[10px] font-mono text-neutral-300 mt-1 bg-purple-950/80 border border-purple-500/30 px-2 py-0.5 rounded-md backdrop-blur-sm", children:'Prompt: "crystal neon void"'
                  }),
                  c.jsx("span", {
                    className:"text-[8px] text-purple-400/80 font-mono animate-pulse mt-0.5", children:"READY TO GENERATE"
                  })
                  ]
                })
                ]
              })
              ]
            }),
            c.jsxs("div", {
              className:"flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-white/5", children:[c.jsxs("div", {
                className:"flex flex-wrap gap-1.5", children:[x.technologies.slice(0, 3).map((_, w) =>c.jsx("span", {
                  className:"px-2.5 py-1 text-[10px] font-mono font-bold bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded-lg border border-slate-200/30 dark:border-white/5", children:_
                },
                w)), x.technologies.length>3&&c.jsxs("span", {
                  className:"px-2 py-1 text-[10px] font-mono font-bold bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-lg border border-blue-500/10", children:["+", x.technologies.length-3]
                })
                ]
              }),
              c.jsxs("div", {
                className:"flex flex-col items-end shrink-0", children:[c.jsx("span", {
                  className:"text-[8px] font-mono text-slate-400 dark:text-neutral-500 uppercase tracking-wider", children:x.metrics[0].label
                }),
                c.jsx("span", {
                  className:"text-xs font-mono font-extrabold text-slate-800 dark:text-white mt-0.5 bg-slate-100 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 px-2 py-0.5 rounded-md", children:x.metrics[0].value
                })
                ]
              })
              ]
            })
            ]
          },
          x.id))
        })
        ]
      }),
      c.jsx("section", {
        id:"contact", className:"py-12 border-t border-slate-200/50 dark:border-white/5", children:c.jsxs("div", {
          className:"grid lg:grid-cols-12 gap-12", children:[c.jsxs("div", {
            className:"lg:col-span-5 flex flex-col gap-6 items-start", children:[c.jsxs("div", {
              className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10", children:[c.jsx(Od, {
                size:14, className:"text-blue-500"
              }),
              c.jsx("span", {
                className:"text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest", children:"Kontak"
              })
              ]
            }),
            c.jsx("h2", {
              className:"font-display text-3xl md:text-4xl font-extrabold tracking-tight", children:"Ayo Mulai Kolaborasi!"
            }),
            c.jsx("p", {
              className:"text-sm md:text-base text-slate-500 dark:text-neutral-400 max-w-md leading-relaxed", children:"Ada ide proyek yang menarik, penawaran kerja, atau sekadar ingin berdiskusi santai? Hubungi saya kapan saja dan saya akan merespon sesegera mungkin."
            }),
            c.jsxs("div", {
              className:"flex flex-col gap-4 w-full mt-2", children:[c.jsxs("div", {
                className:"flex items-center gap-4 p-4 rounded-2xl bg-white/30 dark:bg-white/2 border border-slate-200/40 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-sm group", children:[c.jsx("div", {
                  className:"w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0", children:c.jsx(Od, {
                    size:18
                  })
                }),
                c.jsxs("div", {
                  children:[c.jsx("h4", {
                    className:"text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-wider", children:"Email Utama"
                  }),
                  c.jsx("p", {
                    className:"text-sm font-bold text-slate-800 dark:text-white mt-0.5", children:"azx.gov@gmail.com"
                  })
                  ]
                })
                ]
              }),
              c.jsxs("div", {
                className:"flex items-center gap-4 p-4 rounded-2xl bg-white/30 dark:bg-white/2 border border-slate-200/40 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-sm group", children:[c.jsx("div", {
                  className:"w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0", children:c.jsx(Fh, {
                    size:18
                  })
                }),
                c.jsxs("div", {
                  children:[c.jsx("h4", {
                    className:"text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-wider", children:"No. Telepon"
                  }),
                  c.jsx("p", {
                    className:"text-sm font-bold text-slate-800 dark:text-white mt-0.5", children:"tidak tersedia"
                  })
                  ]
                })
                ]
              }),
              c.jsxs("div", {
                className:"flex items-center gap-4 p-4 rounded-2xl bg-white/30 dark:bg-white/2 border border-slate-200/40 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-sm group", children:[c.jsx("div", {
                  className:"w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0", children:c.jsx(Lh, {
                    size:18
                  })
                }),
                c.jsxs("div", {
                  children:[c.jsx("h4", {
                    className:"text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-wider", children:"Lokasi"
                  }),
                  c.jsx("p", {
                    className:"text-sm font-bold text-slate-800 dark:text-white mt-0.5", children:"bandar lampung, Indonesia"
                  })
                  ]
                })
                ]
              })
              ]
            })
            ]
          }),
          c.jsx("div", {
            className:"lg:col-span-7", children:c.jsx("div", {
              className:"bg-white/40 dark:bg-white/3 backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-md", children:Pt?c.jsxs("div", {
                className:"py-12 flex flex-col items-center text-center gap-4 animate-fade-in", children:[c.jsx("div", {
                  className:"w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-2", children:c.jsx(kh, {
                    size:32
                  })
                }),
                c.jsx("h3", {
                  className:"text-2xl font-bold text-slate-900 dark:text-white", children:"Pesan Terkirim Sukses!"
                }),
                c.jsx("p", {
                  className:"text-sm text-slate-500 dark:text-neutral-400 max-w-sm leading-relaxed", children:"Terima kasih sudah menghubungi saya. Saya telah menerima pesan Anda dan akan segera menghubungi kembali dalam waktu 24 jam."
                })
                ]
              })
              :c.jsxs("form", {
                onSubmit:d, className:"flex flex-col gap-5", children:[c.jsxs("div", {
                  className:"grid sm:grid-cols-2 gap-5", children:[c.jsxs("div", {
                    className:"flex flex-col gap-2", children:[c.jsx("label", {
                      className:"text-xs font-bold text-slate-600 dark:text-slate-400", children:"Nama Lengkap *"
                    }),
                    c.jsx("input", {
                      type:"text", required:!0, value:de.name, onChange:x=>Le({
                        ...de, name:x.target.value
                      }),
                      placeholder:"Masukkan nama Anda", className:"px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-sm outline-none text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-600 transition-all duration-300"
                    })
                    ]
                  }),
                  c.jsxs("div", {
                    className:"flex flex-col gap-2", children:[c.jsx("label", {
                      className:"text-xs font-bold text-slate-600 dark:text-slate-400", children:"Alamat Email *"
                    }),
                    c.jsx("input", {
                      type:"email", required:!0, value:de.email, onChange:x=>Le({
                        ...de, email:x.target.value
                      }),
                      placeholder:"nama@email.com", className:"px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-sm outline-none text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-600 transition-all duration-300"
                    })
                    ]
                  })
                  ]
                }),
                c.jsxs("div", {
                  className:"flex flex-col gap-2", children:[c.jsx("label", {
                    className:"text-xs font-bold text-slate-600 dark:text-slate-400", children:"Subjek"
                  }),
                  c.jsx("input", {
                    type:"text", value:de.subject, onChange:x=>Le({
                      ...de, subject:x.target.value
                    }),
                    placeholder:"Kerja sama, proyek baru, atau penawaran kerja", className:"px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-sm outline-none text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-600 transition-all duration-300"
                  })
                  ]
                }),
                c.jsxs("div", {
                  className:"flex flex-col gap-2", children:[c.jsx("label", {
                    className:"text-xs font-bold text-slate-600 dark:text-slate-400", children:"Isi Pesan *"
                  }),
                  c.jsx("textarea", {
                    required:!0, rows:4, value:de.message, onChange:x=>Le({
                      ...de, message:x.target.value
                    }),
                    placeholder:"Tuliskan detail pesan Anda di sini...", className:"px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-sm outline-none text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-600 transition-all duration-300 resize-none"
                  })
                  ]
                }),
                c.jsx("button", {
                  type:"submit", disabled:Re, className:"px-6 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700 text-white rounded-2xl font-bold tracking-wide shadow-lg hover:shadow-xl shadow-blue-600/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2", children:Re?c.jsxs(c.Fragment, {
                    children:[c.jsx("div", {
                      className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    }),
                    c.jsx("span", {
                      children:"Mengirim..."
                    })
                    ]
                  })
                  :c.jsxs(c.Fragment, {
                    children:[c.jsx(Ph, {
                      size:18
                    }),
                    c.jsx("span", {
                      children:"Kirim Pesan"
                    })
                    ]
                  })
                })
                ]
              })
            })
          })
          ]
        })
      })
      ]
    }),
    c.jsx("footer", {
      className:"border-t border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-white/2 backdrop-blur-md relative z-10 py-12", children:c.jsxs("div", {
        className:"max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:justify-between md:items-center gap-8", children:[c.jsxs("div", {
          className:"flex flex-col gap-3", children:[c.jsxs("div", {
            className:"flex items-center gap-3", children:[c.jsx("div", {
              className:"w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center", children:c.jsx("span", {
                className:"font-extrabold text-[9px] tracking-tighter text-white", children:"AZX"
              })
            }),
            c.jsx("span", {
              className:"text-lg font-bold tracking-tight text-slate-900 dark:text-white", children:"AZAM.DEV"
            })
            ]
          }),
          c.jsx("p", {
            className:"text-xs text-slate-400 dark:text-neutral-500 max-w-sm leading-relaxed", children:"Didesain dan dikembangkan sendiri dengan presisi visual modern dan performa optimal."
          })
          ]
        }),
        c.jsxs("div", {
          className:"flex items-center gap-6", children:[c.jsxs("div", {
            className:"flex gap-3", children:[c.jsx("a", {
              href:"https://github.com/zax-universe", target:"_blank", rel:"noreferrer", className:"w-9 h-9 rounded-full border border-slate-200/80 dark:border-white/15 flex items-center justify-center text-slate-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-500/5", children:c.jsx(_d, {
                size:18
              })
            }),
            c.jsx("a", {
              href:"https://linkedin.com", target:"_blank", rel:"noreferrer", className:"w-9 h-9 rounded-full border border-slate-200/80 dark:border-white/15 flex items-center justify-center text-slate-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-500/5", children:c.jsx(Gh, {
                size:18
              })
            }),
            c.jsx("a", {
              href:"https://twitter.com", target:"_blank", rel:"noreferrer", className:"w-9 h-9 rounded-full border border-slate-200/80 dark:border-white/15 flex items-center justify-center text-slate-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-500/5", children:c.jsx(c1, {
                size:18
              })
            })
            ]
          }),
          c.jsx("span", {
            className:"text-xs font-mono text-slate-400 dark:text-neutral-500", children:"© 2026 azx.web.id"
          })
          ]
        })
        ]
      })
    }),
    W&&c.jsxs("div", {
      className:"fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6", id:"project-details-modal", children:[c.jsx("div", {
        className:"absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in", onClick:() =>ve(null)
      }),
      c.jsxs("div", {
        className:"relative bg-white dark:bg-[#0c0c0f] border border-slate-200 dark:border-white/10 rounded-3xl w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[85vh] overflow-y-auto shadow-2xl animate-scale-up-fade flex flex-col md:grid md:grid-cols-12 gap-6 p-6 md:p-8 z-10", children:[c.jsx("button", {
          onClick:() =>ve(null), className:"absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 z-20 cursor-pointer", id:"close-modal-btn", children:c.jsx(Ud, {
            size:18
          })
        }),
        c.jsxs("div", {
          className:"md:col-span-6 flex flex-col gap-4", children:[c.jsxs("div", {
            className:"flex items-center gap-2", children:[c.jsx("span", {
              className:"w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"
            }),
            c.jsx("span", {
              className:"text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500", children:"Interactive Live Sandbox Simulation"
            })
            ]
          }),
          c.jsxs("div", {
            className:"w-full h-64 md:h-80 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-white/5 flex flex-col justify-between overflow-hidden relative p-4 shadow-inner", children:[W.id==="fintech-dashboard" &&c.jsxs("div", {
              className:"w-full h-full flex flex-col justify-between", children:[c.jsxs("div", {
                className:"flex justify-between items-center border-b border-slate-200/50 dark:border-white/5 pb-2", children:[c.jsxs("div", {
                  className:"flex items-center gap-1.5", children:[c.jsx(wd, {
                    size:14, className:"text-blue-500"
                  }),
                  c.jsx("span", {
                    className:"text-xs font-mono font-bold text-slate-800 dark:text-white", children:"APEX_TELEMETRY"
                  })
                  ]
                }),
                c.jsx("div", {
                  className:"flex gap-1 bg-slate-200 dark:bg-white/5 p-0.5 rounded-lg border border-slate-300/30 dark:border-white/5", children:["1W", "1M", "1Y"].map(x=>c.jsx("button", {
                    onClick:() =>z(x), className:`px-2 py-0.5 text-[9px] font-mono font-bold rounded ${D===x?"bg-blue-600 text-white":"text-slate-400 hover:text-slate-900 dark:hover:text-white"}`, children:x
                  },
                  x))
                })
                ]
              }),
              c.jsxs("div", {
                className:"flex-1 flex items-center justify-center relative mt-2", children:[D==="1W" ?c.jsxs("svg", {
                  className:"w-full h-32 text-blue-500", viewBox:"0 0 100 40", children:[c.jsx("path", {
                    d:"M0,35 Q15,20 30,30 T60,10 T90,5 T100,2", fill:"none", stroke:"currentColor", strokeWidth:"2", className:"animate-pulse"
                  }),
                  c.jsx("path", {
                    d:"M0,35 Q15,20 30,30 T60,10 T90,5 T100,2 L100,40 L0,40 Z", fill:"url(#fintechGrad)", opacity:"0.1"
                  })
                  ]
                })
                :D==="1M" ?c.jsxs("svg", {
                  className:"w-full h-32 text-blue-500", viewBox:"0 0 100 40", children:[c.jsx("path", {
                    d:"M0,30 Q20,10 40,25 T80,5 T100,12", fill:"none", stroke:"currentColor", strokeWidth:"2"
                  }),
                  c.jsx("path", {
                    d:"M0,30 Q20,10 40,25 T80,5 T100,12 L100,40 L0,40 Z", fill:"url(#fintechGrad)", opacity:"0.1"
                  })
                  ]
                })
                :c.jsxs("svg", {
                  className:"w-full h-32 text-blue-500", viewBox:"0 0 100 40", children:[c.jsx("path", {
                    d:"M0,38 Q25,30 50,15 T90,2 T100,0", fill:"none", stroke:"currentColor", strokeWidth:"2"
                  }),
                  c.jsx("path", {
                    d:"M0,38 Q25,30 50,15 T90,2 T100,0 L100,40 L0,40 Z", fill:"url(#fintechGrad)", opacity:"0.1"
                  })
                  ]
                }),
                c.jsx("defs", {
                  children:c.jsxs("linearGradient", {
                    id:"fintechGrad", x1:"0", y1:"0", x2:"0", y2:"1", children:[c.jsx("stop", {
                      offset:"0%", stopColor:"#3b82f6"
                    }),
                    c.jsx("stop", {
                      offset:"100%", stopColor:"#3b82f6", stopOpacity:"0"
                    })
                    ]
                  })
                })
                ]
              }),
              c.jsxs("div", {
                className:"grid grid-cols-3 gap-2 text-center border-t border-slate-200/50 dark:border-white/5 pt-2 text-[10px] font-mono", children:[c.jsxs("div", {
                  children:[c.jsx("span", {
                    className:"text-slate-400", children:"Portfolio"
                  }),
                  c.jsx("p", {
                    className:"font-bold text-slate-800 dark:text-white", children:"$142,482.00"
                  })
                  ]
                }),
                c.jsxs("div", {
                  children:[c.jsx("span", {
                    className:"text-slate-400", children:"Net Profit"
                  }),
                  c.jsx("p", {
                    className:"font-bold text-emerald-500", children:"+24.8%"
                  })
                  ]
                }),
                c.jsxs("div", {
                  children:[c.jsx("span", {
                    className:"text-slate-400", children:"Risk Factor"
                  }),
                  c.jsx("p", {
                    className:"font-bold text-slate-800 dark:text-white", children:"Low"
                  })
                  ]
                })
                ]
              })
              ]
            }),
            W.id==="saas-analytics" &&c.jsxs("div", {
              className:"w-full h-full flex flex-col justify-between", children:[c.jsxs("div", {
                className:"flex justify-between items-center border-b border-slate-200/50 dark:border-white/5 pb-2", children:[c.jsxs("span", {
                  className:"text-xs font-mono font-bold text-slate-800 dark:text-white flex items-center gap-1", children:[c.jsx(n1, {
                    size:14, className:"text-cyan-400"
                  }),
                  "PULSE_NODE_MANAGER"]
                }),
                c.jsxs("div", {
                  className:"flex gap-2", children:[c.jsx("span", {
                    className:`w-2.5 h-2.5 rounded-full ${Oe==="healthy"?"bg-emerald-500":Oe==="warning"?"bg-amber-500":"bg-rose-500"} animate-pulse`
                  }),
                  c.jsx("span", {
                    className:"text-[9px] font-mono uppercase text-slate-400", children:Oe
                  })
                  ]
                })
                ]
              }),
              c.jsxs("div", {
                className:"my-3 flex flex-col items-center justify-center", children:[c.jsxs("span", {
                  className:"text-3xl md:text-4xl font-mono font-bold text-cyan-400 animate-pulse", children:[et, "ms"]
                }),
                c.jsx("span", {
                  className:"text-[10px] text-neutral-400 font-mono mt-1", children:"Live Host Latency"
                })
                ]
              }),
              c.jsxs("div", {
                className:"flex gap-2 border-t border-slate-200/50 dark:border-white/5 pt-3", children:[c.jsx("button", {
                  onClick:() => {
                    _e("healthy"), De(18)
                  },
                  className:"flex-1 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold", children:"Set Normal"
                }),
                c.jsx("button", {
                  onClick:() => {
                    _e("warning"), De(45)
                  },
                  className:"flex-1 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold", children:"Simulate Load"
                }),
                c.jsx("button", {
                  onClick:() => {
                    _e("error"), De(120)
                  },
                  className:"flex-1 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-bold", children:"Trigger Alert"
                })
                ]
              })
              ]
            }),
            W.id==="ecommerce" &&c.jsxs("div", {
              className:"w-full h-full flex flex-col justify-between", children:[c.jsxs("div", {
                className:"flex justify-between items-center border-b border-slate-200/50 dark:border-white/5 pb-2", children:[c.jsx("span", {
                  className:"text-xs font-mono font-bold text-slate-800 dark:text-white", children:"VELOCE_STORE"
                }),
                c.jsxs("div", {
                  className:"relative text-indigo-400 flex items-center gap-1 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20", children:[c.jsx(ms, {
                    size:12
                  }),
                  c.jsxs("span", {
                    className:"text-[9px] font-mono font-bold", children:[P, " items"]
                  })
                  ]
                })
                ]
              }),
              c.jsxs("div", {
                className:"flex-1 flex gap-4 items-center my-3", children:[c.jsx("div", {
                  className:`w-24 h-24 rounded-2xl flex items-center justify-center transition-colors duration-500 ${ne==="blue"?"bg-blue-600/20 border border-blue-500/30 text-blue-400":ne==="black"?"bg-slate-900 border border-slate-700 text-white":"bg-slate-100 border border-slate-300 text-slate-800"}`, children:c.jsx(ms, {
                    size:36
                  })
                }),
                c.jsxs("div", {
                  className:"flex-1 flex flex-col gap-2", children:[c.jsx("h4", {
                    className:"text-xs font-bold text-slate-900 dark:text-white", children:"Minimalist Leather Tote"
                  }),
                  c.jsx("p", {
                    className:"text-[10px] text-slate-400", children:"$295.00"
                  }),
                  c.jsxs("div", {
                    className:"flex gap-2 items-center mt-1", children:[c.jsx("span", {
                      className:"text-[9px] text-neutral-400 font-mono", children:"Color:"
                    }),
                    c.jsx("button", {
                      onClick:() =>Ce("blue"), className:`w-3.5 h-3.5 rounded-full bg-blue-500 border-2 ${ne==="blue"?"border-white":"border-transparent"}`
                    }),
                    c.jsx("button", {
                      onClick:() =>Ce("black"), className:`w-3.5 h-3.5 rounded-full bg-black border-2 ${ne==="black"?"border-white":"border-transparent"}`
                    }),
                    c.jsx("button", {
                      onClick:() =>Ce("white"), className:`w-3.5 h-3.5 rounded-full bg-slate-200 border-2 ${ne==="white"?"border-white":"border-transparent"}`
                    })
                    ]
                  })
                  ]
                })
                ]
              }),
              c.jsx("button", {
                onClick:() =>C(x=>x+1), className:"w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[10px] font-bold", children:"Add to Shopping Cart"
              })
              ]
            }),
            W.id==="ai-art-generator" &&c.jsxs("div", {
              className:"w-full h-full flex flex-col justify-between", children:[c.jsxs("div", {
                className:"flex justify-between items-center border-b border-slate-200/50 dark:border-white/5 pb-2", children:[c.jsxs("span", {
                  className:"text-xs font-mono font-bold text-slate-800 dark:text-white flex items-center gap-1", children:[c.jsx(Gu, {
                    size:12, className:"text-purple-400 animate-pulse"
                  }),
                  " SYNTHETIX_CORE"]
                }),
                c.jsxs("span", {
                  className:"text-[8px] font-mono text-neutral-400", children:["SEED: ", He]
                })
                ]
              }),
              c.jsx("div", {
                className:`flex-1 rounded-xl my-2 flex items-center justify-center transition-all duration-700 relative overflow-hidden ${N()}`, children:Xe?c.jsxs("div", {
                  className:"flex flex-col items-center gap-2 text-purple-400 z-10 text-center px-4", children:[c.jsx("div", {
                    className:"w-6 h-6 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin"
                  }),
                  c.jsx("span", {
                    className:"text-[10px] font-mono animate-pulse", children:"Rendering abstract vector lattices..."
                  })
                  ]
                })
                :c.jsx("div", {
                  className:"text-center z-10 px-4 text-white", children:c.jsxs("p", {
                    className:"text-[9px] font-mono opacity-65 italic", children:['"', Tt, '"']
                  })
                })
              }),
              c.jsxs("div", {
                className:"flex gap-2", children:[c.jsx("input", {
                  type:"text", value:Tt, onChange:x=>ke(x.target.value), placeholder:"Ubah deskripsi seni...", className:"flex-1 px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/15 rounded-lg text-[9px] outline-none text-slate-800 dark:text-white"
                }),
                c.jsx("button", {
                  onClick:A, disabled:Xe, className:"px-4 py-1.5 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-700 text-white rounded-lg text-[9px] font-bold", children:"Generate"
                })
                ]
              })
              ]
            })
            ]
          }),
          c.jsx("div", {
            className:"flex flex-wrap gap-2", children:W.technologies.map((x, _) =>c.jsx("span", {
              className:"px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-mono font-bold", children:x
            },
            _))
          })
          ]
        }),
        c.jsxs("div", {
          className:"md:col-span-6 flex flex-col justify-between gap-6", children:[c.jsxs("div", {
            className:"flex flex-col gap-4", children:[c.jsxs("div", {
              children:[c.jsxs("span", {
                className:"text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300", children:["Proyek Terpilih / ", W.category.toUpperCase()]
              }),
              c.jsx("h3", {
                className:"text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1", children:W.title
              }),
              c.jsx("p", {
                className:"text-xs text-slate-400 dark:text-neutral-500", children:W.subtitle
              })
              ]
            }),
            c.jsx("p", {
              className:"text-sm text-slate-600 dark:text-slate-400 leading-relaxed", children:W.longDesc
            }),
            c.jsx("div", {
              className:"grid grid-cols-3 gap-3 border-t border-b border-slate-200/50 dark:border-white/5 py-4", children:W.metrics.map((x, _) =>c.jsxs("div", {
                className:"flex flex-col gap-0.5", children:[c.jsx("span", {
                  className:"text-[10px] text-slate-400 dark:text-neutral-500 uppercase tracking-wider font-mono", children:x.label
                }),
                c.jsx("span", {
                  className:"text-sm font-extrabold text-blue-600 dark:text-blue-400", children:x.value
                })
                ]
              },
              _))
            })
            ]
          }),
          c.jsxs("div", {
            className:"flex gap-4", children:[c.jsxs("button", {
              onClick:() =>alert("Demo Langsung: Link simulasi demo dipicu! (Simulator)"), className:"flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-500 hover:scale-101 text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer", children:[c.jsx(Rh, {
                size:14
              }),
              "Buka Demo Langsung"]
            }),
            c.jsx("button", {
              onClick:() =>alert("Membuka basis kode repositori... (Simulator)"), className:"px-4 py-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer", children:c.jsx(_d, {
                size:14
              })
            })
            ]
          })
          ]
        })
        ]
      })
      ]
    })
    ]
  })
}
bh.createRoot(document.getElementById("root")).render(c.jsx(xe.StrictMode, {
  children:c.jsx(f1, {
  })
}));
