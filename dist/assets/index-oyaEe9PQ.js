function Jh(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const a=Object.getOwnPropertyDescriptor(n,i);a&&Object.defineProperty(t,i,a.get?a:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function Zh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _d={exports:{}},ls={},kd={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),em=Symbol.for("react.portal"),tm=Symbol.for("react.fragment"),rm=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),am=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),om=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),cm=Symbol.for("react.lazy"),Lc=Symbol.iterator;function um(t){return t===null||typeof t!="object"?null:(t=Lc&&t[Lc]||t["@@iterator"],typeof t=="function"?t:null)}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jd=Object.assign,Sd={};function Fn(t,e,r){this.props=t,this.context=e,this.refs=Sd,this.updater=r||Nd}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pd(){}Pd.prototype=Fn.prototype;function wl(t,e,r){this.props=t,this.context=e,this.refs=Sd,this.updater=r||Nd}var bl=wl.prototype=new Pd;bl.constructor=wl;jd(bl,Fn.prototype);bl.isPureReactComponent=!0;var Uc=Array.isArray,Id=Object.prototype.hasOwnProperty,_l={current:null},Cd={key:!0,ref:!0,__self:!0,__source:!0};function Ed(t,e,r){var n,i={},a=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)Id.call(e,n)&&!Cd.hasOwnProperty(n)&&(i[n]=e[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Gi,type:t,key:a,ref:s,props:i,_owner:_l.current}}function dm(t,e){return{$$typeof:Gi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gi}function pm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Bc=/\/+/g;function Is(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pm(""+t.key):e.toString(36)}function ma(t,e,r,n,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Gi:case em:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+Is(s,0):n,Uc(i)?(r="",t!=null&&(r=t.replace(Bc,"$&/")+"/"),ma(i,e,r,"",function(u){return u})):i!=null&&(kl(i)&&(i=dm(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Bc,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",Uc(t))for(var l=0;l<t.length;l++){a=t[l];var c=n+Is(a,l);s+=ma(a,e,r,c,i)}else if(c=um(t),typeof c=="function")for(t=c.call(t),l=0;!(a=t.next()).done;)a=a.value,c=n+Is(a,l++),s+=ma(a,e,r,c,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function qi(t,e,r){if(t==null)return t;var n=[],i=0;return ma(t,n,"","",function(a){return e.call(r,a,i++)}),n}function fm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},ga={transition:null},hm={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ga,ReactCurrentOwner:_l};function Ad(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:qi,forEach:function(t,e,r){qi(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return qi(t,function(){e++}),e},toArray:function(t){return qi(t,function(e){return e})||[]},only:function(t){if(!kl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};O.Component=Fn;O.Fragment=tm;O.Profiler=nm;O.PureComponent=wl;O.StrictMode=rm;O.Suspense=om;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;O.act=Ad;O.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=jd({},t.props),i=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=_l.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Id.call(e,c)&&!Cd.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Gi,type:t.type,key:i,ref:a,props:n,_owner:s}};O.createContext=function(t){return t={$$typeof:am,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:im,_context:t},t.Consumer=t};O.createElement=Ed;O.createFactory=function(t){var e=Ed.bind(null,t);return e.type=t,e};O.createRef=function(){return{current:null}};O.forwardRef=function(t){return{$$typeof:sm,render:t}};O.isValidElement=kl;O.lazy=function(t){return{$$typeof:cm,_payload:{_status:-1,_result:t},_init:fm}};O.memo=function(t,e){return{$$typeof:lm,type:t,compare:e===void 0?null:e}};O.startTransition=function(t){var e=ga.transition;ga.transition={};try{t()}finally{ga.transition=e}};O.unstable_act=Ad;O.useCallback=function(t,e){return Oe.current.useCallback(t,e)};O.useContext=function(t){return Oe.current.useContext(t)};O.useDebugValue=function(){};O.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};O.useEffect=function(t,e){return Oe.current.useEffect(t,e)};O.useId=function(){return Oe.current.useId()};O.useImperativeHandle=function(t,e,r){return Oe.current.useImperativeHandle(t,e,r)};O.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};O.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};O.useMemo=function(t,e){return Oe.current.useMemo(t,e)};O.useReducer=function(t,e,r){return Oe.current.useReducer(t,e,r)};O.useRef=function(t){return Oe.current.useRef(t)};O.useState=function(t){return Oe.current.useState(t)};O.useSyncExternalStore=function(t,e,r){return Oe.current.useSyncExternalStore(t,e,r)};O.useTransition=function(){return Oe.current.useTransition()};O.version="18.3.1";kd.exports=O;var S=kd.exports;const Td=Zh(S),mm=Jh({__proto__:null,default:Td},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm=S,xm=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),ym=Object.prototype.hasOwnProperty,wm=gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bm={key:!0,ref:!0,__self:!0,__source:!0};function Md(t,e,r){var n,i={},a=null,s=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)ym.call(e,n)&&!bm.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:xm,type:t,key:a,ref:s,props:i,_owner:wm.current}}ls.Fragment=vm;ls.jsx=Md;ls.jsxs=Md;_d.exports=ls;var o=_d.exports,Rd={exports:{}},it={},Od={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,M){var R=C.length;C.push(M);e:for(;0<R;){var W=R-1>>>1,H=C[W];if(0<i(H,M))C[W]=M,C[R]=H,R=W;else break e}}function r(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var M=C[0],R=C.pop();if(R!==M){C[0]=R;e:for(var W=0,H=C.length,Pr=H>>>1;W<Pr;){var be=2*(W+1)-1,mt=C[be],Ir=be+1,Qi=C[Ir];if(0>i(mt,R))Ir<H&&0>i(Qi,mt)?(C[W]=Qi,C[Ir]=R,W=Ir):(C[W]=mt,C[be]=R,W=be);else if(Ir<H&&0>i(Qi,R))C[W]=Qi,C[Ir]=R,W=Ir;else break e}}return M}function i(C,M){var R=C.sortIndex-M.sortIndex;return R!==0?R:C.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,m=3,v=!1,y=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(C){for(var M=r(u);M!==null;){if(M.callback===null)n(u);else if(M.startTime<=C)n(u),M.sortIndex=M.expirationTime,e(c,M);else break;M=r(u)}}function b(C){if(g=!1,x(C),!y)if(r(c)!==null)y=!0,K(_);else{var M=r(u);M!==null&&se(b,M.startTime-C)}}function _(C,M){y=!1,g&&(g=!1,h(j),j=-1),v=!0;var R=m;try{for(x(M),p=r(c);p!==null&&(!(p.expirationTime>M)||C&&!D());){var W=p.callback;if(typeof W=="function"){p.callback=null,m=p.priorityLevel;var H=W(p.expirationTime<=M);M=t.unstable_now(),typeof H=="function"?p.callback=H:p===r(c)&&n(c),x(M)}else n(c);p=r(c)}if(p!==null)var Pr=!0;else{var be=r(u);be!==null&&se(b,be.startTime-M),Pr=!1}return Pr}finally{p=null,m=R,v=!1}}var k=!1,N=null,j=-1,P=5,E=-1;function D(){return!(t.unstable_now()-E<P)}function L(){if(N!==null){var C=t.unstable_now();E=C;var M=!0;try{M=N(!0,C)}finally{M?U():(k=!1,N=null)}}else k=!1}var U;if(typeof f=="function")U=function(){f(L)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,fe=pe.port2;pe.port1.onmessage=L,U=function(){fe.postMessage(null)}}else U=function(){w(L,0)};function K(C){N=C,k||(k=!0,U())}function se(C,M){j=w(function(){C(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,K(_))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(C){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var R=m;m=M;try{return C()}finally{m=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,M){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=m;m=C;try{return M()}finally{m=R}},t.unstable_scheduleCallback=function(C,M,R){var W=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,C){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=R+H,C={id:d++,callback:M,priorityLevel:C,startTime:R,expirationTime:H,sortIndex:-1},R>W?(C.sortIndex=R,e(u,C),r(c)===null&&C===r(u)&&(g?(h(j),j=-1):g=!0,se(b,R-W))):(C.sortIndex=H,e(c,C),y||v||(y=!0,K(_))),C},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(C){var M=m;return function(){var R=m;m=M;try{return C.apply(this,arguments)}finally{m=R}}}})(Dd);Od.exports=Dd;var _m=Od.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=S,tt=_m;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zd=new Set,vi={};function Kr(t,e){jn(t,e),jn(t+"Capture",e)}function jn(t,e){for(vi[t]=e,t=0;t<e.length;t++)zd.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=Object.prototype.hasOwnProperty,Nm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wc={},Vc={};function jm(t){return co.call(Vc,t)?!0:co.call(Wc,t)?!1:Nm.test(t)?Vc[t]=!0:(Wc[t]=!0,!1)}function Sm(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pm(t,e,r,n){if(e===null||typeof e>"u"||Sm(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,r,n,i,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function jl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nl,jl);je[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nl,jl);je[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nl,jl);je[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sl(t,e,r,n){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pm(e,r,i,n)&&(r=null),n||i===null?jm(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var Xt=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),tn=Symbol.for("react.portal"),rn=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),uo=Symbol.for("react.profiler"),Fd=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),po=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),Cl=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Ud=Symbol.for("react.offscreen"),Gc=Symbol.iterator;function Vn(t){return t===null||typeof t!="object"?null:(t=Gc&&t[Gc]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Cs;function Zn(t){if(Cs===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Cs=e&&e[1]||""}return`
`+Cs+t}var Es=!1;function As(t,e){if(!t||Es)return"";Es=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),s=i.length-1,l=a.length-1;1<=s&&0<=l&&i[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==a[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{Es=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Zn(t):""}function Im(t){switch(t.tag){case 5:return Zn(t.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return t=As(t.type,!1),t;case 11:return t=As(t.type.render,!1),t;case 1:return t=As(t.type,!0),t;default:return""}}function ho(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rn:return"Fragment";case tn:return"Portal";case uo:return"Profiler";case Pl:return"StrictMode";case po:return"Suspense";case fo:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ld:return(t.displayName||"Context")+".Consumer";case Fd:return(t._context.displayName||"Context")+".Provider";case Il:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cl:return e=t.displayName||null,e!==null?e:ho(t.type)||"Memo";case Qt:e=t._payload,t=t._init;try{return ho(t(e))}catch{}}return null}function Cm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ho(e);case 8:return e===Pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Em(t){var e=Bd(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zi(t){t._valueTracker||(t._valueTracker=Em(t))}function Wd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Bd(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mo(t,e){var r=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Hc(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=xr(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vd(t,e){e=e.checked,e!=null&&Sl(t,"checked",e,!1)}function go(t,e){Vd(t,e);var r=xr(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xo(t,e.type,r):e.hasOwnProperty("defaultValue")&&xo(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $c(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function xo(t,e,r){(e!=="number"||Ea(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var ei=Array.isArray;function gn(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+xr(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vo(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xc(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(I(92));if(ei(r)){if(1<r.length)throw Error(I(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:xr(r)}}function Gd(t,e){var r=xr(e.value),n=xr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Yc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yo(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ea,$d=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yi(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Am=["Webkit","ms","Moz","O"];Object.keys(si).forEach(function(t){Am.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),si[e]=si[t]})});function Xd(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||si.hasOwnProperty(t)&&si[t]?(""+e).trim():e+"px"}function Yd(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Xd(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var Tm=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wo(t,e){if(e){if(Tm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function bo(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _o=null;function El(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ko=null,xn=null,vn=null;function Kc(t){if(t=Xi(t)){if(typeof ko!="function")throw Error(I(280));var e=t.stateNode;e&&(e=fs(e),ko(t.stateNode,t.type,e))}}function Kd(t){xn?vn?vn.push(t):vn=[t]:xn=t}function Qd(){if(xn){var t=xn,e=vn;if(vn=xn=null,Kc(t),e)for(t=0;t<e.length;t++)Kc(e[t])}}function qd(t,e){return t(e)}function Jd(){}var Ts=!1;function Zd(t,e,r){if(Ts)return t(e,r);Ts=!0;try{return qd(t,e,r)}finally{Ts=!1,(xn!==null||vn!==null)&&(Jd(),Qd())}}function wi(t,e){var r=t.stateNode;if(r===null)return null;var n=fs(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(I(231,e,typeof r));return r}var No=!1;if(Bt)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){No=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{No=!1}function Mm(t,e,r,n,i,a,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(d){this.onError(d)}}var oi=!1,Aa=null,Ta=!1,jo=null,Rm={onError:function(t){oi=!0,Aa=t}};function Om(t,e,r,n,i,a,s,l,c){oi=!1,Aa=null,Mm.apply(Rm,arguments)}function Dm(t,e,r,n,i,a,s,l,c){if(Om.apply(this,arguments),oi){if(oi){var u=Aa;oi=!1,Aa=null}else throw Error(I(198));Ta||(Ta=!0,jo=u)}}function Qr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function ep(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qc(t){if(Qr(t)!==t)throw Error(I(188))}function zm(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Qc(i),t;if(a===n)return Qc(i),e;a=a.sibling}throw Error(I(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=a;break}if(l===n){s=!0,n=i,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,n=i;break}if(l===n){s=!0,n=a,r=i;break}l=l.sibling}if(!s)throw Error(I(189))}}if(r.alternate!==n)throw Error(I(190))}if(r.tag!==3)throw Error(I(188));return r.stateNode.current===r?t:e}function tp(t){return t=zm(t),t!==null?rp(t):null}function rp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rp(t);if(e!==null)return e;t=t.sibling}return null}var np=tt.unstable_scheduleCallback,qc=tt.unstable_cancelCallback,Fm=tt.unstable_shouldYield,Lm=tt.unstable_requestPaint,ue=tt.unstable_now,Um=tt.unstable_getCurrentPriorityLevel,Al=tt.unstable_ImmediatePriority,ip=tt.unstable_UserBlockingPriority,Ma=tt.unstable_NormalPriority,Bm=tt.unstable_LowPriority,ap=tt.unstable_IdlePriority,cs=null,Et=null;function Wm(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(cs,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Hm,Vm=Math.log,Gm=Math.LN2;function Hm(t){return t>>>=0,t===0?32:31-(Vm(t)/Gm|0)|0}var ta=64,ra=4194304;function ti(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ra(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,a=t.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=ti(l):(a&=s,a!==0&&(n=ti(a)))}else s=r&~i,s!==0?n=ti(s):a!==0&&(n=ti(a));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-wt(e),i=1<<r,n|=t[r],e&=~i;return n}function $m(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xm(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-wt(a),l=1<<s,c=i[s];c===-1?(!(l&r)||l&n)&&(i[s]=$m(l,e)):c<=e&&(t.expiredLanes|=l),a&=~l}}function So(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sp(){var t=ta;return ta<<=1,!(ta&4194240)&&(ta=64),t}function Ms(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Hi(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=r}function Ym(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-wt(r),a=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~a}}function Tl(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-wt(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var B=0;function op(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lp,Ml,cp,up,dp,Po=!1,na=[],sr=null,or=null,lr=null,bi=new Map,_i=new Map,Jt=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jc(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(e.pointerId)}}function Hn(t,e,r,n,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},e!==null&&(e=Xi(e),e!==null&&Ml(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Qm(t,e,r,n,i){switch(e){case"focusin":return sr=Hn(sr,t,e,r,n,i),!0;case"dragenter":return or=Hn(or,t,e,r,n,i),!0;case"mouseover":return lr=Hn(lr,t,e,r,n,i),!0;case"pointerover":var a=i.pointerId;return bi.set(a,Hn(bi.get(a)||null,t,e,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,_i.set(a,Hn(_i.get(a)||null,t,e,r,n,i)),!0}return!1}function pp(t){var e=Rr(t.target);if(e!==null){var r=Qr(e);if(r!==null){if(e=r.tag,e===13){if(e=ep(r),e!==null){t.blockedOn=e,dp(t.priority,function(){cp(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Io(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);_o=n,r.target.dispatchEvent(n),_o=null}else return e=Xi(r),e!==null&&Ml(e),t.blockedOn=r,!1;e.shift()}return!0}function Zc(t,e,r){xa(t)&&r.delete(e)}function qm(){Po=!1,sr!==null&&xa(sr)&&(sr=null),or!==null&&xa(or)&&(or=null),lr!==null&&xa(lr)&&(lr=null),bi.forEach(Zc),_i.forEach(Zc)}function $n(t,e){t.blockedOn===e&&(t.blockedOn=null,Po||(Po=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,qm)))}function ki(t){function e(i){return $n(i,t)}if(0<na.length){$n(na[0],t);for(var r=1;r<na.length;r++){var n=na[r];n.blockedOn===t&&(n.blockedOn=null)}}for(sr!==null&&$n(sr,t),or!==null&&$n(or,t),lr!==null&&$n(lr,t),bi.forEach(e),_i.forEach(e),r=0;r<Jt.length;r++)n=Jt[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<Jt.length&&(r=Jt[0],r.blockedOn===null);)pp(r),r.blockedOn===null&&Jt.shift()}var yn=Xt.ReactCurrentBatchConfig,Oa=!0;function Jm(t,e,r,n){var i=B,a=yn.transition;yn.transition=null;try{B=1,Rl(t,e,r,n)}finally{B=i,yn.transition=a}}function Zm(t,e,r,n){var i=B,a=yn.transition;yn.transition=null;try{B=4,Rl(t,e,r,n)}finally{B=i,yn.transition=a}}function Rl(t,e,r,n){if(Oa){var i=Io(t,e,r,n);if(i===null)Vs(t,e,n,Da,r),Jc(t,n);else if(Qm(i,t,e,r,n))n.stopPropagation();else if(Jc(t,n),e&4&&-1<Km.indexOf(t)){for(;i!==null;){var a=Xi(i);if(a!==null&&lp(a),a=Io(t,e,r,n),a===null&&Vs(t,e,n,Da,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else Vs(t,e,n,null,r)}}var Da=null;function Io(t,e,r,n){if(Da=null,t=El(n),t=Rr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=ep(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Da=t,null}function fp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case Al:return 1;case ip:return 4;case Ma:case Bm:return 16;case ap:return 536870912;default:return 16}default:return 16}}var er=null,Ol=null,va=null;function hp(){if(va)return va;var t,e=Ol,r=e.length,n,i="value"in er?er.value:er.textContent,a=i.length;for(t=0;t<r&&e[t]===i[t];t++);var s=r-t;for(n=1;n<=s&&e[r-n]===i[a-n];n++);return va=i.slice(t,1<n?1-n:void 0)}function ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function eu(){return!1}function at(t){function e(r,n,i,a,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ia:eu,this.isPropagationStopped=eu,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=at(Ln),$i=ae({},Ln,{view:0,detail:0}),eg=at($i),Rs,Os,Xn,us=ae({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xn&&(Xn&&t.type==="mousemove"?(Rs=t.screenX-Xn.screenX,Os=t.screenY-Xn.screenY):Os=Rs=0,Xn=t),Rs)},movementY:function(t){return"movementY"in t?t.movementY:Os}}),tu=at(us),tg=ae({},us,{dataTransfer:0}),rg=at(tg),ng=ae({},$i,{relatedTarget:0}),Ds=at(ng),ig=ae({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=at(ig),sg=ae({},Ln,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),og=at(sg),lg=ae({},Ln,{data:0}),ru=at(lg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dg[t])?!!e[t]:!1}function zl(){return pg}var fg=ae({},$i,{key:function(t){if(t.key){var e=cg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hg=at(fg),mg=ae({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=at(mg),gg=ae({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),xg=at(gg),vg=ae({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),yg=at(vg),wg=ae({},us,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=at(wg),_g=[9,13,27,32],Fl=Bt&&"CompositionEvent"in window,li=null;Bt&&"documentMode"in document&&(li=document.documentMode);var kg=Bt&&"TextEvent"in window&&!li,mp=Bt&&(!Fl||li&&8<li&&11>=li),iu=" ",au=!1;function gp(t,e){switch(t){case"keyup":return _g.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nn=!1;function Ng(t,e){switch(t){case"compositionend":return xp(e);case"keypress":return e.which!==32?null:(au=!0,iu);case"textInput":return t=e.data,t===iu&&au?null:t;default:return null}}function jg(t,e){if(nn)return t==="compositionend"||!Fl&&gp(t,e)?(t=hp(),va=Ol=er=null,nn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mp&&e.locale!=="ko"?null:e.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sg[t.type]:e==="textarea"}function vp(t,e,r,n){Kd(n),e=za(e,"onChange"),0<e.length&&(r=new Dl("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var ci=null,Ni=null;function Pg(t){Cp(t,0)}function ds(t){var e=on(t);if(Wd(e))return t}function Ig(t,e){if(t==="change")return e}var yp=!1;if(Bt){var zs;if(Bt){var Fs="oninput"in document;if(!Fs){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),Fs=typeof ou.oninput=="function"}zs=Fs}else zs=!1;yp=zs&&(!document.documentMode||9<document.documentMode)}function lu(){ci&&(ci.detachEvent("onpropertychange",wp),Ni=ci=null)}function wp(t){if(t.propertyName==="value"&&ds(Ni)){var e=[];vp(e,Ni,t,El(t)),Zd(Pg,e)}}function Cg(t,e,r){t==="focusin"?(lu(),ci=e,Ni=r,ci.attachEvent("onpropertychange",wp)):t==="focusout"&&lu()}function Eg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ds(Ni)}function Ag(t,e){if(t==="click")return ds(e)}function Tg(t,e){if(t==="input"||t==="change")return ds(e)}function Mg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _t=typeof Object.is=="function"?Object.is:Mg;function ji(t,e){if(_t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!co.call(e,i)||!_t(t[i],e[i]))return!1}return!0}function cu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uu(t,e){var r=cu(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cu(r)}}function bp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _p(){for(var t=window,e=Ea();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ea(t.document)}return e}function Ll(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rg(t){var e=_p(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&bp(r.ownerDocument.documentElement,r)){if(n!==null&&Ll(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!t.extend&&a>n&&(i=n,n=a,a=i),i=uu(r,a);var s=uu(r,n);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Og=Bt&&"documentMode"in document&&11>=document.documentMode,an=null,Co=null,ui=null,Eo=!1;function du(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Eo||an==null||an!==Ea(n)||(n=an,"selectionStart"in n&&Ll(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ui&&ji(ui,n)||(ui=n,n=za(Co,"onSelect"),0<n.length&&(e=new Dl("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=an)))}function aa(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var sn={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Ls={},kp={};Bt&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),"TransitionEvent"in window||delete sn.transitionend.transition);function ps(t){if(Ls[t])return Ls[t];if(!sn[t])return t;var e=sn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in kp)return Ls[t]=e[r];return t}var Np=ps("animationend"),jp=ps("animationiteration"),Sp=ps("animationstart"),Pp=ps("transitionend"),Ip=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){Ip.set(t,e),Kr(e,[t])}for(var Us=0;Us<pu.length;Us++){var Bs=pu[Us],Dg=Bs.toLowerCase(),zg=Bs[0].toUpperCase()+Bs.slice(1);_r(Dg,"on"+zg)}_r(Np,"onAnimationEnd");_r(jp,"onAnimationIteration");_r(Sp,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Pp,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function fu(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,Dm(n,e,void 0,t),t.currentTarget=null}function Cp(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var a=void 0;if(e)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;fu(i,l,u),a=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;fu(i,l,u),a=c}}}if(Ta)throw t=jo,Ta=!1,jo=null,t}function X(t,e){var r=e[Oo];r===void 0&&(r=e[Oo]=new Set);var n=t+"__bubble";r.has(n)||(Ep(e,t,2,!1),r.add(n))}function Ws(t,e,r){var n=0;e&&(n|=4),Ep(r,t,n,e)}var sa="_reactListening"+Math.random().toString(36).slice(2);function Si(t){if(!t[sa]){t[sa]=!0,zd.forEach(function(r){r!=="selectionchange"&&(Fg.has(r)||Ws(r,!1,t),Ws(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sa]||(e[sa]=!0,Ws("selectionchange",!1,e))}}function Ep(t,e,r,n){switch(fp(e)){case 1:var i=Jm;break;case 4:i=Zm;break;default:i=Rl}r=i.bind(null,e,r,t),i=void 0,!No||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Vs(t,e,r,n,i){var a=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Rr(l),s===null)return;if(c=s.tag,c===5||c===6){n=a=s;continue e}l=l.parentNode}}n=n.return}Zd(function(){var u=a,d=El(r),p=[];e:{var m=Ip.get(t);if(m!==void 0){var v=Dl,y=t;switch(t){case"keypress":if(ya(r)===0)break e;case"keydown":case"keyup":v=hg;break;case"focusin":y="focus",v=Ds;break;case"focusout":y="blur",v=Ds;break;case"beforeblur":case"afterblur":v=Ds;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xg;break;case Np:case jp:case Sp:v=ag;break;case Pp:v=yg;break;case"scroll":v=eg;break;case"wheel":v=bg;break;case"copy":case"cut":case"paste":v=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=nu}var g=(e&4)!==0,w=!g&&t==="scroll",h=g?m!==null?m+"Capture":null:m;g=[];for(var f=u,x;f!==null;){x=f;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,h!==null&&(b=wi(f,h),b!=null&&g.push(Pi(f,b,x)))),w)break;f=f.return}0<g.length&&(m=new v(m,y,null,r,d),p.push({event:m,listeners:g}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&r!==_o&&(y=r.relatedTarget||r.fromElement)&&(Rr(y)||y[Wt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=u,y=y?Rr(y):null,y!==null&&(w=Qr(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(g=tu,b="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(g=nu,b="onPointerLeave",h="onPointerEnter",f="pointer"),w=v==null?m:on(v),x=y==null?m:on(y),m=new g(b,f+"leave",v,r,d),m.target=w,m.relatedTarget=x,b=null,Rr(d)===u&&(g=new g(h,f+"enter",y,r,d),g.target=x,g.relatedTarget=w,b=g),w=b,v&&y)t:{for(g=v,h=y,f=0,x=g;x;x=Zr(x))f++;for(x=0,b=h;b;b=Zr(b))x++;for(;0<f-x;)g=Zr(g),f--;for(;0<x-f;)h=Zr(h),x--;for(;f--;){if(g===h||h!==null&&g===h.alternate)break t;g=Zr(g),h=Zr(h)}g=null}else g=null;v!==null&&hu(p,m,v,g,!1),y!==null&&w!==null&&hu(p,w,y,g,!0)}}e:{if(m=u?on(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var _=Ig;else if(su(m))if(yp)_=Tg;else{_=Eg;var k=Cg}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Ag);if(_&&(_=_(t,u))){vp(p,_,r,d);break e}k&&k(t,m,u),t==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&xo(m,"number",m.value)}switch(k=u?on(u):window,t){case"focusin":(su(k)||k.contentEditable==="true")&&(an=k,Co=u,ui=null);break;case"focusout":ui=Co=an=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,du(p,r,d);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":du(p,r,d)}var N;if(Fl)e:{switch(t){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else nn?gp(t,r)&&(j="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(mp&&r.locale!=="ko"&&(nn||j!=="onCompositionStart"?j==="onCompositionEnd"&&nn&&(N=hp()):(er=d,Ol="value"in er?er.value:er.textContent,nn=!0)),k=za(u,j),0<k.length&&(j=new ru(j,t,null,r,d),p.push({event:j,listeners:k}),N?j.data=N:(N=xp(r),N!==null&&(j.data=N)))),(N=kg?Ng(t,r):jg(t,r))&&(u=za(u,"onBeforeInput"),0<u.length&&(d=new ru("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:u}),d.data=N))}Cp(p,e)})}function Pi(t,e,r){return{instance:t,listener:e,currentTarget:r}}function za(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=wi(t,r),a!=null&&n.unshift(Pi(t,a,i)),a=wi(t,e),a!=null&&n.push(Pi(t,a,i))),t=t.return}return n}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hu(t,e,r,n,i){for(var a=e._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=wi(r,a),c!=null&&s.unshift(Pi(r,c,l))):i||(c=wi(r,a),c!=null&&s.push(Pi(r,c,l)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var Lg=/\r\n?/g,Ug=/\u0000|\uFFFD/g;function mu(t){return(typeof t=="string"?t:""+t).replace(Lg,`
`).replace(Ug,"")}function oa(t,e,r){if(e=mu(e),mu(t)!==e&&r)throw Error(I(425))}function Fa(){}var Ao=null,To=null;function Mo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ro=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(t){return gu.resolve(null).then(t).catch(Vg)}:Ro;function Vg(t){setTimeout(function(){throw t})}function Gs(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),ki(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);ki(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Un=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Un,Ii="__reactProps$"+Un,Wt="__reactContainer$"+Un,Oo="__reactEvents$"+Un,Gg="__reactListeners$"+Un,Hg="__reactHandles$"+Un;function Rr(t){var e=t[Pt];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Wt]||r[Pt]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=xu(t);t!==null;){if(r=t[Pt])return r;t=xu(t)}return e}t=r,r=t.parentNode}return null}function Xi(t){return t=t[Pt]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function on(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function fs(t){return t[Ii]||null}var Do=[],ln=-1;function kr(t){return{current:t}}function Y(t){0>ln||(t.current=Do[ln],Do[ln]=null,ln--)}function $(t,e){ln++,Do[ln]=t.current,t.current=e}var vr={},Ae=kr(vr),Le=kr(!1),Gr=vr;function Sn(t,e){var r=t.type.contextTypes;if(!r)return vr;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=e[a];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function La(){Y(Le),Y(Ae)}function vu(t,e,r){if(Ae.current!==vr)throw Error(I(168));$(Ae,e),$(Le,r)}function Ap(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(I(108,Cm(t)||"Unknown",i));return ae({},r,n)}function Ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Gr=Ae.current,$(Ae,t),$(Le,Le.current),!0}function yu(t,e,r){var n=t.stateNode;if(!n)throw Error(I(169));r?(t=Ap(t,e,Gr),n.__reactInternalMemoizedMergedChildContext=t,Y(Le),Y(Ae),$(Ae,t)):Y(Le),$(Le,r)}var Ot=null,hs=!1,Hs=!1;function Tp(t){Ot===null?Ot=[t]:Ot.push(t)}function $g(t){hs=!0,Tp(t)}function Nr(){if(!Hs&&Ot!==null){Hs=!0;var t=0,e=B;try{var r=Ot;for(B=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}Ot=null,hs=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(t+1)),np(Al,Nr),i}finally{B=e,Hs=!1}}return null}var cn=[],un=0,Ba=null,Wa=0,ot=[],lt=0,Hr=null,zt=1,Ft="";function Ar(t,e){cn[un++]=Wa,cn[un++]=Ba,Ba=t,Wa=e}function Mp(t,e,r){ot[lt++]=zt,ot[lt++]=Ft,ot[lt++]=Hr,Hr=t;var n=zt;t=Ft;var i=32-wt(n)-1;n&=~(1<<i),r+=1;var a=32-wt(e)+i;if(30<a){var s=i-i%5;a=(n&(1<<s)-1).toString(32),n>>=s,i-=s,zt=1<<32-wt(e)+i|r<<i|n,Ft=a+t}else zt=1<<a|r<<i|n,Ft=t}function Ul(t){t.return!==null&&(Ar(t,1),Mp(t,1,0))}function Bl(t){for(;t===Ba;)Ba=cn[--un],cn[un]=null,Wa=cn[--un],cn[un]=null;for(;t===Hr;)Hr=ot[--lt],ot[lt]=null,Ft=ot[--lt],ot[lt]=null,zt=ot[--lt],ot[lt]=null}var Ze=null,Qe=null,Q=!1,yt=null;function Rp(t,e){var r=ct(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function wu(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Qe=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Hr!==null?{id:zt,overflow:Ft}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=ct(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ze=t,Qe=null,!0):!1;default:return!1}}function zo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fo(t){if(Q){var e=Qe;if(e){var r=e;if(!wu(t,e)){if(zo(t))throw Error(I(418));e=cr(r.nextSibling);var n=Ze;e&&wu(t,e)?Rp(n,r):(t.flags=t.flags&-4097|2,Q=!1,Ze=t)}}else{if(zo(t))throw Error(I(418));t.flags=t.flags&-4097|2,Q=!1,Ze=t}}}function bu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function la(t){if(t!==Ze)return!1;if(!Q)return bu(t),Q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mo(t.type,t.memoizedProps)),e&&(e=Qe)){if(zo(t))throw Op(),Error(I(418));for(;e;)Rp(t,e),e=cr(e.nextSibling)}if(bu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Qe=cr(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Ze?cr(t.stateNode.nextSibling):null;return!0}function Op(){for(var t=Qe;t;)t=cr(t.nextSibling)}function Pn(){Qe=Ze=null,Q=!1}function Wl(t){yt===null?yt=[t]:yt.push(t)}var Xg=Xt.ReactCurrentBatchConfig;function Yn(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(I(309));var n=r.stateNode}if(!n)throw Error(I(147,t));var i=n,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var l=i.refs;s===null?delete l[a]:l[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(I(284));if(!r._owner)throw Error(I(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _u(t){var e=t._init;return e(t._payload)}function Dp(t){function e(h,f){if(t){var x=h.deletions;x===null?(h.deletions=[f],h.flags|=16):x.push(f)}}function r(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function n(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=fr(h,f),h.index=0,h.sibling=null,h}function a(h,f,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<f?(h.flags|=2,f):x):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,f,x,b){return f===null||f.tag!==6?(f=Js(x,h.mode,b),f.return=h,f):(f=i(f,x),f.return=h,f)}function c(h,f,x,b){var _=x.type;return _===rn?d(h,f,x.props.children,b,x.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Qt&&_u(_)===f.type)?(b=i(f,x.props),b.ref=Yn(h,f,x),b.return=h,b):(b=Sa(x.type,x.key,x.props,null,h.mode,b),b.ref=Yn(h,f,x),b.return=h,b)}function u(h,f,x,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Zs(x,h.mode,b),f.return=h,f):(f=i(f,x.children||[]),f.return=h,f)}function d(h,f,x,b,_){return f===null||f.tag!==7?(f=Lr(x,h.mode,b,_),f.return=h,f):(f=i(f,x),f.return=h,f)}function p(h,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Js(""+f,h.mode,x),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ji:return x=Sa(f.type,f.key,f.props,null,h.mode,x),x.ref=Yn(h,null,f),x.return=h,x;case tn:return f=Zs(f,h.mode,x),f.return=h,f;case Qt:var b=f._init;return p(h,b(f._payload),x)}if(ei(f)||Vn(f))return f=Lr(f,h.mode,x,null),f.return=h,f;ca(h,f)}return null}function m(h,f,x,b){var _=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return _!==null?null:l(h,f,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ji:return x.key===_?c(h,f,x,b):null;case tn:return x.key===_?u(h,f,x,b):null;case Qt:return _=x._init,m(h,f,_(x._payload),b)}if(ei(x)||Vn(x))return _!==null?null:d(h,f,x,b,null);ca(h,x)}return null}function v(h,f,x,b,_){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(x)||null,l(f,h,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ji:return h=h.get(b.key===null?x:b.key)||null,c(f,h,b,_);case tn:return h=h.get(b.key===null?x:b.key)||null,u(f,h,b,_);case Qt:var k=b._init;return v(h,f,x,k(b._payload),_)}if(ei(b)||Vn(b))return h=h.get(x)||null,d(f,h,b,_,null);ca(f,b)}return null}function y(h,f,x,b){for(var _=null,k=null,N=f,j=f=0,P=null;N!==null&&j<x.length;j++){N.index>j?(P=N,N=null):P=N.sibling;var E=m(h,N,x[j],b);if(E===null){N===null&&(N=P);break}t&&N&&E.alternate===null&&e(h,N),f=a(E,f,j),k===null?_=E:k.sibling=E,k=E,N=P}if(j===x.length)return r(h,N),Q&&Ar(h,j),_;if(N===null){for(;j<x.length;j++)N=p(h,x[j],b),N!==null&&(f=a(N,f,j),k===null?_=N:k.sibling=N,k=N);return Q&&Ar(h,j),_}for(N=n(h,N);j<x.length;j++)P=v(N,h,j,x[j],b),P!==null&&(t&&P.alternate!==null&&N.delete(P.key===null?j:P.key),f=a(P,f,j),k===null?_=P:k.sibling=P,k=P);return t&&N.forEach(function(D){return e(h,D)}),Q&&Ar(h,j),_}function g(h,f,x,b){var _=Vn(x);if(typeof _!="function")throw Error(I(150));if(x=_.call(x),x==null)throw Error(I(151));for(var k=_=null,N=f,j=f=0,P=null,E=x.next();N!==null&&!E.done;j++,E=x.next()){N.index>j?(P=N,N=null):P=N.sibling;var D=m(h,N,E.value,b);if(D===null){N===null&&(N=P);break}t&&N&&D.alternate===null&&e(h,N),f=a(D,f,j),k===null?_=D:k.sibling=D,k=D,N=P}if(E.done)return r(h,N),Q&&Ar(h,j),_;if(N===null){for(;!E.done;j++,E=x.next())E=p(h,E.value,b),E!==null&&(f=a(E,f,j),k===null?_=E:k.sibling=E,k=E);return Q&&Ar(h,j),_}for(N=n(h,N);!E.done;j++,E=x.next())E=v(N,h,j,E.value,b),E!==null&&(t&&E.alternate!==null&&N.delete(E.key===null?j:E.key),f=a(E,f,j),k===null?_=E:k.sibling=E,k=E);return t&&N.forEach(function(L){return e(h,L)}),Q&&Ar(h,j),_}function w(h,f,x,b){if(typeof x=="object"&&x!==null&&x.type===rn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ji:e:{for(var _=x.key,k=f;k!==null;){if(k.key===_){if(_=x.type,_===rn){if(k.tag===7){r(h,k.sibling),f=i(k,x.props.children),f.return=h,h=f;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Qt&&_u(_)===k.type){r(h,k.sibling),f=i(k,x.props),f.ref=Yn(h,k,x),f.return=h,h=f;break e}r(h,k);break}else e(h,k);k=k.sibling}x.type===rn?(f=Lr(x.props.children,h.mode,b,x.key),f.return=h,h=f):(b=Sa(x.type,x.key,x.props,null,h.mode,b),b.ref=Yn(h,f,x),b.return=h,h=b)}return s(h);case tn:e:{for(k=x.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){r(h,f.sibling),f=i(f,x.children||[]),f.return=h,h=f;break e}else{r(h,f);break}else e(h,f);f=f.sibling}f=Zs(x,h.mode,b),f.return=h,h=f}return s(h);case Qt:return k=x._init,w(h,f,k(x._payload),b)}if(ei(x))return y(h,f,x,b);if(Vn(x))return g(h,f,x,b);ca(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(r(h,f.sibling),f=i(f,x),f.return=h,h=f):(r(h,f),f=Js(x,h.mode,b),f.return=h,h=f),s(h)):r(h,f)}return w}var In=Dp(!0),zp=Dp(!1),Va=kr(null),Ga=null,dn=null,Vl=null;function Gl(){Vl=dn=Ga=null}function Hl(t){var e=Va.current;Y(Va),t._currentValue=e}function Lo(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function wn(t,e){Ga=t,Vl=dn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function ft(t){var e=t._currentValue;if(Vl!==t)if(t={context:t,memoizedValue:e,next:null},dn===null){if(Ga===null)throw Error(I(308));dn=t,Ga.dependencies={lanes:0,firstContext:t}}else dn=dn.next=t;return e}var Or=null;function $l(t){Or===null?Or=[t]:Or.push(t)}function Fp(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,$l(e)):(r.next=i.next,i.next=r),e.interleaved=r,Vt(t,n)}function Vt(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var qt=!1;function Xl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ut(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,F&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,Vt(t,r)}return i=n.interleaved,i===null?(e.next=e,$l(n)):(e.next=i.next,i.next=e),n.interleaved=e,Vt(t,r)}function wa(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Tl(t,r)}}function ku(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?i=a=e:a=a.next=e}else i=a=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Ha(t,e,r,n){var i=t.updateQueue;qt=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?a=u:s.next=u,s=c;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;s=0,d=u=c=null,l=a;do{var m=l.lane,v=l.eventTime;if((n&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,g=l;switch(m=e,v=r,g.tag){case 1:if(y=g.payload,typeof y=="function"){p=y.call(v,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,m=typeof y=="function"?y.call(v,p,m):y,m==null)break e;p=ae({},p,m);break e;case 2:qt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=p):d=d.next=v,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);Xr|=s,t.lanes=s,t.memoizedState=p}}function Nu(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(I(191,i));i.call(n)}}}var Yi={},At=kr(Yi),Ci=kr(Yi),Ei=kr(Yi);function Dr(t){if(t===Yi)throw Error(I(174));return t}function Yl(t,e){switch($(Ei,e),$(Ci,t),$(At,Yi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yo(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yo(e,t)}Y(At),$(At,e)}function Cn(){Y(At),Y(Ci),Y(Ei)}function Up(t){Dr(Ei.current);var e=Dr(At.current),r=yo(e,t.type);e!==r&&($(Ci,t),$(At,r))}function Kl(t){Ci.current===t&&(Y(At),Y(Ci))}var te=kr(0);function $a(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $s=[];function Ql(){for(var t=0;t<$s.length;t++)$s[t]._workInProgressVersionPrimary=null;$s.length=0}var ba=Xt.ReactCurrentDispatcher,Xs=Xt.ReactCurrentBatchConfig,$r=0,ie=null,ge=null,ve=null,Xa=!1,di=!1,Ai=0,Yg=0;function Se(){throw Error(I(321))}function ql(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!_t(t[r],e[r]))return!1;return!0}function Jl(t,e,r,n,i,a){if($r=a,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?Jg:Zg,t=r(n,i),di){a=0;do{if(di=!1,Ai=0,25<=a)throw Error(I(301));a+=1,ve=ge=null,e.updateQueue=null,ba.current=e0,t=r(n,i)}while(di)}if(ba.current=Ya,e=ge!==null&&ge.next!==null,$r=0,ve=ge=ie=null,Xa=!1,e)throw Error(I(300));return t}function Zl(){var t=Ai!==0;return Ai=0,t}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ie.memoizedState=ve=t:ve=ve.next=t,ve}function ht(){if(ge===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=ve===null?ie.memoizedState:ve.next;if(e!==null)ve=e,ge=t;else{if(t===null)throw Error(I(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ve===null?ie.memoizedState=ve=t:ve=ve.next=t}return ve}function Ti(t,e){return typeof e=="function"?e(t):e}function Ys(t){var e=ht(),r=e.queue;if(r===null)throw Error(I(311));r.lastRenderedReducer=t;var n=ge,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if(($r&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=n):c=c.next=p,ie.lanes|=d,Xr|=d}u=u.next}while(u!==null&&u!==a);c===null?s=n:c.next=l,_t(n,e.memoizedState)||(Fe=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=c,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do a=i.lane,ie.lanes|=a,Xr|=a,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Ks(t){var e=ht(),r=e.queue;if(r===null)throw Error(I(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,a=e.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do a=t(a,s.action),s=s.next;while(s!==i);_t(a,e.memoizedState)||(Fe=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,n]}function Bp(){}function Wp(t,e){var r=ie,n=ht(),i=e(),a=!_t(n.memoizedState,i);if(a&&(n.memoizedState=i,Fe=!0),n=n.queue,ec(Hp.bind(null,r,n,t),[t]),n.getSnapshot!==e||a||ve!==null&&ve.memoizedState.tag&1){if(r.flags|=2048,Mi(9,Gp.bind(null,r,n,i,e),void 0,null),ye===null)throw Error(I(349));$r&30||Vp(r,e,i)}return i}function Vp(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Gp(t,e,r,n){e.value=r,e.getSnapshot=n,$p(e)&&Xp(t)}function Hp(t,e,r){return r(function(){$p(e)&&Xp(t)})}function $p(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!_t(t,r)}catch{return!0}}function Xp(t){var e=Vt(t,1);e!==null&&bt(e,t,1,-1)}function ju(t){var e=jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:t},e.queue=t,t=t.dispatch=qg.bind(null,ie,t),[e.memoizedState,t]}function Mi(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function Yp(){return ht().memoizedState}function _a(t,e,r,n){var i=jt();ie.flags|=t,i.memoizedState=Mi(1|e,r,void 0,n===void 0?null:n)}function ms(t,e,r,n){var i=ht();n=n===void 0?null:n;var a=void 0;if(ge!==null){var s=ge.memoizedState;if(a=s.destroy,n!==null&&ql(n,s.deps)){i.memoizedState=Mi(e,r,a,n);return}}ie.flags|=t,i.memoizedState=Mi(1|e,r,a,n)}function Su(t,e){return _a(8390656,8,t,e)}function ec(t,e){return ms(2048,8,t,e)}function Kp(t,e){return ms(4,2,t,e)}function Qp(t,e){return ms(4,4,t,e)}function qp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jp(t,e,r){return r=r!=null?r.concat([t]):null,ms(4,4,qp.bind(null,e,t),r)}function tc(){}function Zp(t,e){var r=ht();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&ql(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function ef(t,e){var r=ht();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&ql(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function tf(t,e,r){return $r&21?(_t(r,e)||(r=sp(),ie.lanes|=r,Xr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=r)}function Kg(t,e){var r=B;B=r!==0&&4>r?r:4,t(!0);var n=Xs.transition;Xs.transition={};try{t(!1),e()}finally{B=r,Xs.transition=n}}function rf(){return ht().memoizedState}function Qg(t,e,r){var n=pr(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},nf(t))af(e,r);else if(r=Fp(t,e,r,n),r!==null){var i=Re();bt(r,t,n,i),sf(r,e,n)}}function qg(t,e,r){var n=pr(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(nf(t))af(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,l=a(s,r);if(i.hasEagerState=!0,i.eagerState=l,_t(l,s)){var c=e.interleaved;c===null?(i.next=i,$l(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}r=Fp(t,e,i,n),r!==null&&(i=Re(),bt(r,t,n,i),sf(r,e,n))}}function nf(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function af(t,e){di=Xa=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function sf(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Tl(t,r)}}var Ya={readContext:ft,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Jg={readContext:ft,useCallback:function(t,e){return jt().memoizedState=[t,e===void 0?null:e],t},useContext:ft,useEffect:Su,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,_a(4194308,4,qp.bind(null,e,t),r)},useLayoutEffect:function(t,e){return _a(4194308,4,t,e)},useInsertionEffect:function(t,e){return _a(4,2,t,e)},useMemo:function(t,e){var r=jt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=jt();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=Qg.bind(null,ie,t),[n.memoizedState,t]},useRef:function(t){var e=jt();return t={current:t},e.memoizedState=t},useState:ju,useDebugValue:tc,useDeferredValue:function(t){return jt().memoizedState=t},useTransition:function(){var t=ju(!1),e=t[0];return t=Kg.bind(null,t[1]),jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=ie,i=jt();if(Q){if(r===void 0)throw Error(I(407));r=r()}else{if(r=e(),ye===null)throw Error(I(349));$r&30||Vp(n,e,r)}i.memoizedState=r;var a={value:r,getSnapshot:e};return i.queue=a,Su(Hp.bind(null,n,a,t),[t]),n.flags|=2048,Mi(9,Gp.bind(null,n,a,r,e),void 0,null),r},useId:function(){var t=jt(),e=ye.identifierPrefix;if(Q){var r=Ft,n=zt;r=(n&~(1<<32-wt(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=Ai++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Yg++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Zg={readContext:ft,useCallback:Zp,useContext:ft,useEffect:ec,useImperativeHandle:Jp,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:ef,useReducer:Ys,useRef:Yp,useState:function(){return Ys(Ti)},useDebugValue:tc,useDeferredValue:function(t){var e=ht();return tf(e,ge.memoizedState,t)},useTransition:function(){var t=Ys(Ti)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Bp,useSyncExternalStore:Wp,useId:rf,unstable_isNewReconciler:!1},e0={readContext:ft,useCallback:Zp,useContext:ft,useEffect:ec,useImperativeHandle:Jp,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:ef,useReducer:Ks,useRef:Yp,useState:function(){return Ks(Ti)},useDebugValue:tc,useDeferredValue:function(t){var e=ht();return ge===null?e.memoizedState=t:tf(e,ge.memoizedState,t)},useTransition:function(){var t=Ks(Ti)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Bp,useSyncExternalStore:Wp,useId:rf,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Uo(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:ae({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var gs={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Re(),i=pr(t),a=Ut(n,i);a.payload=e,r!=null&&(a.callback=r),e=ur(t,a,i),e!==null&&(bt(e,t,i,n),wa(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Re(),i=pr(t),a=Ut(n,i);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=ur(t,a,i),e!==null&&(bt(e,t,i,n),wa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Re(),n=pr(t),i=Ut(r,n);i.tag=2,e!=null&&(i.callback=e),e=ur(t,i,n),e!==null&&(bt(e,t,n,r),wa(e,t,n))}};function Pu(t,e,r,n,i,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,a,s):e.prototype&&e.prototype.isPureReactComponent?!ji(r,n)||!ji(i,a):!0}function of(t,e,r){var n=!1,i=vr,a=e.contextType;return typeof a=="object"&&a!==null?a=ft(a):(i=Ue(e)?Gr:Ae.current,n=e.contextTypes,a=(n=n!=null)?Sn(t,i):vr),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gs,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function Iu(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&gs.enqueueReplaceState(e,e.state,null)}function Bo(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Xl(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=ft(a):(a=Ue(e)?Gr:Ae.current,i.context=Sn(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Uo(t,e,a,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gs.enqueueReplaceState(i,i.state,null),Ha(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function En(t,e){try{var r="",n=e;do r+=Im(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function Qs(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Wo(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function lf(t,e,r){r=Ut(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Qa||(Qa=!0,Jo=n),Wo(t,e)},r}function cf(t,e,r){r=Ut(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){Wo(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Wo(t,e),typeof n!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function Cu(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new t0;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=m0.bind(null,t,e,r),e.then(t,t))}function Eu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Au(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Ut(-1,1),e.tag=2,ur(r,e,1))),r.lanes|=1),t)}var r0=Xt.ReactCurrentOwner,Fe=!1;function Te(t,e,r,n){e.child=t===null?zp(e,null,r,n):In(e,t.child,r,n)}function Tu(t,e,r,n,i){r=r.render;var a=e.ref;return wn(e,i),n=Jl(t,e,r,n,a,i),r=Zl(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(Q&&r&&Ul(e),e.flags|=1,Te(t,e,n,i),e.child)}function Mu(t,e,r,n,i){if(t===null){var a=r.type;return typeof a=="function"&&!cc(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,uf(t,e,a,n,i)):(t=Sa(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:ji,r(s,n)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=fr(a,n),t.ref=e.ref,t.return=e,e.child=t}function uf(t,e,r,n,i){if(t!==null){var a=t.memoizedProps;if(ji(a,n)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=n=a,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return Vo(t,e,r,n,i)}function df(t,e,r){var n=e.pendingProps,i=n.children,a=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(fn,Xe),Xe|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(fn,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,$(fn,Xe),Xe|=n}else a!==null?(n=a.baseLanes|r,e.memoizedState=null):n=r,$(fn,Xe),Xe|=n;return Te(t,e,i,r),e.child}function pf(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Vo(t,e,r,n,i){var a=Ue(r)?Gr:Ae.current;return a=Sn(e,a),wn(e,i),r=Jl(t,e,r,n,a,i),n=Zl(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(Q&&n&&Ul(e),e.flags|=1,Te(t,e,r,i),e.child)}function Ru(t,e,r,n,i){if(Ue(r)){var a=!0;Ua(e)}else a=!1;if(wn(e,i),e.stateNode===null)ka(t,e),of(e,r,n),Bo(e,r,n,i),n=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=Ue(r)?Gr:Ae.current,u=Sn(e,u));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Iu(e,s,n,u),qt=!1;var m=e.memoizedState;s.state=m,Ha(e,n,s,i),c=e.memoizedState,l!==n||m!==c||Le.current||qt?(typeof d=="function"&&(Uo(e,r,d,n),c=e.memoizedState),(l=qt||Pu(e,r,l,n,m,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),s.props=n,s.state=c,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,Lp(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:xt(e.type,l),s.props=u,p=e.pendingProps,m=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=ft(c):(c=Ue(r)?Gr:Ae.current,c=Sn(e,c));var v=r.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==c)&&Iu(e,s,n,c),qt=!1,m=e.memoizedState,s.state=m,Ha(e,n,s,i);var y=e.memoizedState;l!==p||m!==y||Le.current||qt?(typeof v=="function"&&(Uo(e,r,v,n),y=e.memoizedState),(u=qt||Pu(e,r,u,n,m,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),s.props=n,s.state=y,s.context=c,n=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),n=!1)}return Go(t,e,r,n,a,i)}function Go(t,e,r,n,i,a){pf(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return i&&yu(e,r,!1),Gt(t,e,a);n=e.stateNode,r0.current=e;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=In(e,t.child,null,a),e.child=In(e,null,l,a)):Te(t,e,l,a),e.memoizedState=n.state,i&&yu(e,r,!0),e.child}function ff(t){var e=t.stateNode;e.pendingContext?vu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vu(t,e.context,!1),Yl(t,e.containerInfo)}function Ou(t,e,r,n,i){return Pn(),Wl(i),e.flags|=256,Te(t,e,r,n),e.child}var Ho={dehydrated:null,treeContext:null,retryLane:0};function $o(t){return{baseLanes:t,cachePool:null,transitions:null}}function hf(t,e,r){var n=e.pendingProps,i=te.current,a=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(te,i&1),t===null)return Fo(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,a?(n=e.mode,a=e.child,s={mode:"hidden",children:s},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=ys(s,n,0,null),t=Lr(t,n,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=$o(r),e.memoizedState=Ho,t):rc(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return n0(t,e,s,n,l,i,r);if(a){a=n.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=fr(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=fr(l,a):(a=Lr(a,s,r,null),a.flags|=2),a.return=e,n.return=e,n.sibling=a,e.child=n,n=a,a=e.child,s=t.child.memoizedState,s=s===null?$o(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~r,e.memoizedState=Ho,n}return a=t.child,t=a.sibling,n=fr(a,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function rc(t,e){return e=ys({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ua(t,e,r,n){return n!==null&&Wl(n),In(e,t.child,null,r),t=rc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function n0(t,e,r,n,i,a,s){if(r)return e.flags&256?(e.flags&=-257,n=Qs(Error(I(422))),ua(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=n.fallback,i=e.mode,n=ys({mode:"visible",children:n.children},i,0,null),a=Lr(a,i,s,null),a.flags|=2,n.return=e,a.return=e,n.sibling=a,e.child=n,e.mode&1&&In(e,t.child,null,s),e.child.memoizedState=$o(s),e.memoizedState=Ho,a);if(!(e.mode&1))return ua(t,e,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,a=Error(I(419)),n=Qs(a,n,void 0),ua(t,e,s,n)}if(l=(s&t.childLanes)!==0,Fe||l){if(n=ye,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Vt(t,i),bt(n,t,i,-1))}return lc(),n=Qs(Error(I(421))),ua(t,e,s,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=g0.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,Qe=cr(i.nextSibling),Ze=e,Q=!0,yt=null,t!==null&&(ot[lt++]=zt,ot[lt++]=Ft,ot[lt++]=Hr,zt=t.id,Ft=t.overflow,Hr=e),e=rc(e,n.children),e.flags|=4096,e)}function Du(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Lo(t.return,e,r)}function qs(t,e,r,n,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function mf(t,e,r){var n=e.pendingProps,i=n.revealOrder,a=n.tail;if(Te(t,e,n.children,r),n=te.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Du(t,r,e);else if(t.tag===19)Du(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if($(te,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&$a(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),qs(e,!1,i,r,a);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$a(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}qs(e,!0,r,null,a);break;case"together":qs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,r=fr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=fr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function i0(t,e,r){switch(e.tag){case 3:ff(e),Pn();break;case 5:Up(e);break;case 1:Ue(e.type)&&Ua(e);break;case 4:Yl(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;$(Va,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?($(te,te.current&1),e.flags|=128,null):r&e.child.childLanes?hf(t,e,r):($(te,te.current&1),t=Gt(t,e,r),t!==null?t.sibling:null);$(te,te.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return mf(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(te,te.current),n)break;return null;case 22:case 23:return e.lanes=0,df(t,e,r)}return Gt(t,e,r)}var gf,Xo,xf,vf;gf=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Xo=function(){};xf=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,Dr(At.current);var a=null;switch(r){case"input":i=mo(t,i),n=mo(t,n),a=[];break;case"select":i=ae({},i,{value:void 0}),n=ae({},n,{value:void 0}),a=[];break;case"textarea":i=vo(t,i),n=vo(t,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Fa)}wo(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(a||(a=[]),a.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&X("scroll",t),a||l===c||(a=[])):(a=a||[]).push(u,c))}r&&(a=a||[]).push("style",r);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};vf=function(t,e,r,n){r!==n&&(e.flags|=4)};function Kn(t,e){if(!Q)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function a0(t,e,r){var n=e.pendingProps;switch(Bl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ue(e.type)&&La(),Pe(e),null;case 3:return n=e.stateNode,Cn(),Y(Le),Y(Ae),Ql(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(la(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yt!==null&&(tl(yt),yt=null))),Xo(t,e),Pe(e),null;case 5:Kl(e);var i=Dr(Ei.current);if(r=e.type,t!==null&&e.stateNode!=null)xf(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(I(166));return Pe(e),null}if(t=Dr(At.current),la(e)){n=e.stateNode,r=e.type;var a=e.memoizedProps;switch(n[Pt]=e,n[Ii]=a,t=(e.mode&1)!==0,r){case"dialog":X("cancel",n),X("close",n);break;case"iframe":case"object":case"embed":X("load",n);break;case"video":case"audio":for(i=0;i<ri.length;i++)X(ri[i],n);break;case"source":X("error",n);break;case"img":case"image":case"link":X("error",n),X("load",n);break;case"details":X("toggle",n);break;case"input":Hc(n,a),X("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},X("invalid",n);break;case"textarea":Xc(n,a),X("invalid",n)}wo(r,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?n.textContent!==l&&(a.suppressHydrationWarning!==!0&&oa(n.textContent,l,t),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&oa(n.textContent,l,t),i=["children",""+l]):vi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&X("scroll",n)}switch(r){case"input":Zi(n),$c(n,a,!0);break;case"textarea":Zi(n),Yc(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Fa)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hd(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(r,{is:n.is}):(t=s.createElement(r),r==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,r),t[Pt]=e,t[Ii]=n,gf(t,e,!1,!1),e.stateNode=t;e:{switch(s=bo(r,n),r){case"dialog":X("cancel",t),X("close",t),i=n;break;case"iframe":case"object":case"embed":X("load",t),i=n;break;case"video":case"audio":for(i=0;i<ri.length;i++)X(ri[i],t);i=n;break;case"source":X("error",t),i=n;break;case"img":case"image":case"link":X("error",t),X("load",t),i=n;break;case"details":X("toggle",t),i=n;break;case"input":Hc(t,n),i=mo(t,n),X("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=ae({},n,{value:void 0}),X("invalid",t);break;case"textarea":Xc(t,n),i=vo(t,n),X("invalid",t);break;default:i=n}wo(r,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Yd(t,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$d(t,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&yi(t,c):typeof c=="number"&&yi(t,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(vi.hasOwnProperty(a)?c!=null&&a==="onScroll"&&X("scroll",t):c!=null&&Sl(t,a,c,s))}switch(r){case"input":Zi(t),$c(t,n,!1);break;case"textarea":Zi(t),Yc(t);break;case"option":n.value!=null&&t.setAttribute("value",""+xr(n.value));break;case"select":t.multiple=!!n.multiple,a=n.value,a!=null?gn(t,!!n.multiple,a,!1):n.defaultValue!=null&&gn(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fa)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)vf(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(I(166));if(r=Dr(Ei.current),Dr(At.current),la(e)){if(n=e.stateNode,r=e.memoizedProps,n[Pt]=e,(a=n.nodeValue!==r)&&(t=Ze,t!==null))switch(t.tag){case 3:oa(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(n.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Pt]=e,e.stateNode=n}return Pe(e),null;case 13:if(Y(te),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Q&&Qe!==null&&e.mode&1&&!(e.flags&128))Op(),Pn(),e.flags|=98560,a=!1;else if(a=la(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(I(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(I(317));a[Pt]=e}else Pn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),a=!1}else yt!==null&&(tl(yt),yt=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?xe===0&&(xe=3):lc())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return Cn(),Xo(t,e),t===null&&Si(e.stateNode.containerInfo),Pe(e),null;case 10:return Hl(e.type._context),Pe(e),null;case 17:return Ue(e.type)&&La(),Pe(e),null;case 19:if(Y(te),a=e.memoizedState,a===null)return Pe(e),null;if(n=(e.flags&128)!==0,s=a.rendering,s===null)if(n)Kn(a,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=$a(t),s!==null){for(e.flags|=128,Kn(a,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)a=r,t=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return $(te,te.current&1|2),e.child}t=t.sibling}a.tail!==null&&ue()>An&&(e.flags|=128,n=!0,Kn(a,!1),e.lanes=4194304)}else{if(!n)if(t=$a(s),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Kn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Q)return Pe(e),null}else 2*ue()-a.renderingStartTime>An&&r!==1073741824&&(e.flags|=128,n=!0,Kn(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(r=a.last,r!==null?r.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ue(),e.sibling=null,r=te.current,$(te,n?r&1|2:r&1),e):(Pe(e),null);case 22:case 23:return oc(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Xe&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function s0(t,e){switch(Bl(e),e.tag){case 1:return Ue(e.type)&&La(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cn(),Y(Le),Y(Ae),Ql(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kl(e),null;case 13:if(Y(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Pn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(te),null;case 4:return Cn(),null;case 10:return Hl(e.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var da=!1,Ie=!1,o0=typeof WeakSet=="function"?WeakSet:Set,A=null;function pn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){oe(t,e,n)}else r.current=null}function Yo(t,e,r){try{r()}catch(n){oe(t,e,n)}}var zu=!1;function l0(t,e){if(Ao=Oa,t=_p(),Ll(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=t,m=null;t:for(;;){for(var v;p!==r||i!==0&&p.nodeType!==3||(l=s+i),p!==a||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===r&&++u===i&&(l=s),m===a&&++d===n&&(c=s),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(To={focusedElem:t,selectionRange:r},Oa=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,w=y.memoizedState,h=e.stateNode,f=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:xt(e.type,g),w);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(b){oe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return y=zu,zu=!1,y}function pi(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&Yo(e,r,a)}i=i.next}while(i!==n)}}function xs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function Ko(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function yf(t){var e=t.alternate;e!==null&&(t.alternate=null,yf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pt],delete e[Ii],delete e[Oo],delete e[Gg],delete e[Hg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wf(t){return t.tag===5||t.tag===3||t.tag===4}function Fu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qo(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Fa));else if(n!==4&&(t=t.child,t!==null))for(Qo(t,e,r),t=t.sibling;t!==null;)Qo(t,e,r),t=t.sibling}function qo(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(qo(t,e,r),t=t.sibling;t!==null;)qo(t,e,r),t=t.sibling}var _e=null,vt=!1;function Kt(t,e,r){for(r=r.child;r!==null;)bf(t,e,r),r=r.sibling}function bf(t,e,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(cs,r)}catch{}switch(r.tag){case 5:Ie||pn(r,e);case 6:var n=_e,i=vt;_e=null,Kt(t,e,r),_e=n,vt=i,_e!==null&&(vt?(t=_e,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):_e.removeChild(r.stateNode));break;case 18:_e!==null&&(vt?(t=_e,r=r.stateNode,t.nodeType===8?Gs(t.parentNode,r):t.nodeType===1&&Gs(t,r),ki(t)):Gs(_e,r.stateNode));break;case 4:n=_e,i=vt,_e=r.stateNode.containerInfo,vt=!0,Kt(t,e,r),_e=n,vt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Yo(r,e,s),i=i.next}while(i!==n)}Kt(t,e,r);break;case 1:if(!Ie&&(pn(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){oe(r,e,l)}Kt(t,e,r);break;case 21:Kt(t,e,r);break;case 22:r.mode&1?(Ie=(n=Ie)||r.memoizedState!==null,Kt(t,e,r),Ie=n):Kt(t,e,r);break;default:Kt(t,e,r)}}function Lu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new o0),e.forEach(function(n){var i=x0.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function gt(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,vt=!1;break e;case 3:_e=l.stateNode.containerInfo,vt=!0;break e;case 4:_e=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(_e===null)throw Error(I(160));bf(a,s,i),_e=null,vt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_f(e,t),e=e.sibling}function _f(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gt(e,t),kt(t),n&4){try{pi(3,t,t.return),xs(3,t)}catch(g){oe(t,t.return,g)}try{pi(5,t,t.return)}catch(g){oe(t,t.return,g)}}break;case 1:gt(e,t),kt(t),n&512&&r!==null&&pn(r,r.return);break;case 5:if(gt(e,t),kt(t),n&512&&r!==null&&pn(r,r.return),t.flags&32){var i=t.stateNode;try{yi(i,"")}catch(g){oe(t,t.return,g)}}if(n&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,s=r!==null?r.memoizedProps:a,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Vd(i,a),bo(l,s);var u=bo(l,a);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];d==="style"?Yd(i,p):d==="dangerouslySetInnerHTML"?$d(i,p):d==="children"?yi(i,p):Sl(i,d,p,u)}switch(l){case"input":go(i,a);break;case"textarea":Gd(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?gn(i,!!a.multiple,v,!1):m!==!!a.multiple&&(a.defaultValue!=null?gn(i,!!a.multiple,a.defaultValue,!0):gn(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ii]=a}catch(g){oe(t,t.return,g)}}break;case 6:if(gt(e,t),kt(t),n&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(g){oe(t,t.return,g)}}break;case 3:if(gt(e,t),kt(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ki(e.containerInfo)}catch(g){oe(t,t.return,g)}break;case 4:gt(e,t),kt(t);break;case 13:gt(e,t),kt(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ac=ue())),n&4&&Lu(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||d,gt(e,t),Ie=u):gt(e,t),kt(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(p=A=d;A!==null;){switch(m=A,v=m.child,m.tag){case 0:case 11:case 14:case 15:pi(4,m,m.return);break;case 1:pn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){n=m,r=m.return;try{e=n,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(g){oe(n,r,g)}}break;case 5:pn(m,m.return);break;case 22:if(m.memoizedState!==null){Bu(p);continue}}v!==null?(v.return=m,A=v):Bu(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Xd("display",s))}catch(g){oe(t,t.return,g)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){oe(t,t.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gt(e,t),kt(t),n&4&&Lu(t);break;case 21:break;default:gt(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(wf(r)){var n=r;break e}r=r.return}throw Error(I(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(yi(i,""),n.flags&=-33);var a=Fu(t);qo(t,a,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=Fu(t);Qo(t,l,s);break;default:throw Error(I(161))}}catch(c){oe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function c0(t,e,r){A=t,kf(t)}function kf(t,e,r){for(var n=(t.mode&1)!==0;A!==null;){var i=A,a=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||da;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ie;l=da;var u=Ie;if(da=s,(Ie=c)&&!u)for(A=i;A!==null;)s=A,c=s.child,s.tag===22&&s.memoizedState!==null?Wu(i):c!==null?(c.return=s,A=c):Wu(i);for(;a!==null;)A=a,kf(a),a=a.sibling;A=i,da=l,Ie=u}Uu(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,A=a):Uu(t)}}function Uu(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||xs(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Ie)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:xt(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Nu(e,a,n);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Nu(e,s,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ki(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ie||e.flags&512&&Ko(e)}catch(m){oe(e,e.return,m)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function Bu(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function Wu(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{xs(4,e)}catch(c){oe(e,r,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(c){oe(e,i,c)}}var a=e.return;try{Ko(e)}catch(c){oe(e,a,c)}break;case 5:var s=e.return;try{Ko(e)}catch(c){oe(e,s,c)}}}catch(c){oe(e,e.return,c)}if(e===t){A=null;break}var l=e.sibling;if(l!==null){l.return=e.return,A=l;break}A=e.return}}var u0=Math.ceil,Ka=Xt.ReactCurrentDispatcher,nc=Xt.ReactCurrentOwner,pt=Xt.ReactCurrentBatchConfig,F=0,ye=null,me=null,ke=0,Xe=0,fn=kr(0),xe=0,Ri=null,Xr=0,vs=0,ic=0,fi=null,ze=null,ac=0,An=1/0,Mt=null,Qa=!1,Jo=null,dr=null,pa=!1,tr=null,qa=0,hi=0,Zo=null,Na=-1,ja=0;function Re(){return F&6?ue():Na!==-1?Na:Na=ue()}function pr(t){return t.mode&1?F&2&&ke!==0?ke&-ke:Xg.transition!==null?(ja===0&&(ja=sp()),ja):(t=B,t!==0||(t=window.event,t=t===void 0?16:fp(t.type)),t):1}function bt(t,e,r,n){if(50<hi)throw hi=0,Zo=null,Error(I(185));Hi(t,r,n),(!(F&2)||t!==ye)&&(t===ye&&(!(F&2)&&(vs|=r),xe===4&&Zt(t,ke)),Be(t,n),r===1&&F===0&&!(e.mode&1)&&(An=ue()+500,hs&&Nr()))}function Be(t,e){var r=t.callbackNode;Xm(t,e);var n=Ra(t,t===ye?ke:0);if(n===0)r!==null&&qc(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&qc(r),e===1)t.tag===0?$g(Vu.bind(null,t)):Tp(Vu.bind(null,t)),Wg(function(){!(F&6)&&Nr()}),r=null;else{switch(op(n)){case 1:r=Al;break;case 4:r=ip;break;case 16:r=Ma;break;case 536870912:r=ap;break;default:r=Ma}r=Af(r,Nf.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Nf(t,e){if(Na=-1,ja=0,F&6)throw Error(I(327));var r=t.callbackNode;if(bn()&&t.callbackNode!==r)return null;var n=Ra(t,t===ye?ke:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Ja(t,n);else{e=n;var i=F;F|=2;var a=Sf();(ye!==t||ke!==e)&&(Mt=null,An=ue()+500,Fr(t,e));do try{f0();break}catch(l){jf(t,l)}while(!0);Gl(),Ka.current=a,F=i,me!==null?e=0:(ye=null,ke=0,e=xe)}if(e!==0){if(e===2&&(i=So(t),i!==0&&(n=i,e=el(t,i))),e===1)throw r=Ri,Fr(t,0),Zt(t,n),Be(t,ue()),r;if(e===6)Zt(t,n);else{if(i=t.current.alternate,!(n&30)&&!d0(i)&&(e=Ja(t,n),e===2&&(a=So(t),a!==0&&(n=a,e=el(t,a))),e===1))throw r=Ri,Fr(t,0),Zt(t,n),Be(t,ue()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(I(345));case 2:Tr(t,ze,Mt);break;case 3:if(Zt(t,n),(n&130023424)===n&&(e=ac+500-ue(),10<e)){if(Ra(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ro(Tr.bind(null,t,ze,Mt),e);break}Tr(t,ze,Mt);break;case 4:if(Zt(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var s=31-wt(n);a=1<<s,s=e[s],s>i&&(i=s),n&=~a}if(n=i,n=ue()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*u0(n/1960))-n,10<n){t.timeoutHandle=Ro(Tr.bind(null,t,ze,Mt),n);break}Tr(t,ze,Mt);break;case 5:Tr(t,ze,Mt);break;default:throw Error(I(329))}}}return Be(t,ue()),t.callbackNode===r?Nf.bind(null,t):null}function el(t,e){var r=fi;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=Ja(t,e),t!==2&&(e=ze,ze=r,e!==null&&tl(e)),t}function tl(t){ze===null?ze=t:ze.push.apply(ze,t)}function d0(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!_t(a(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zt(t,e){for(e&=~ic,e&=~vs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-wt(e),n=1<<r;t[r]=-1,e&=~n}}function Vu(t){if(F&6)throw Error(I(327));bn();var e=Ra(t,0);if(!(e&1))return Be(t,ue()),null;var r=Ja(t,e);if(t.tag!==0&&r===2){var n=So(t);n!==0&&(e=n,r=el(t,n))}if(r===1)throw r=Ri,Fr(t,0),Zt(t,e),Be(t,ue()),r;if(r===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,ze,Mt),Be(t,ue()),null}function sc(t,e){var r=F;F|=1;try{return t(e)}finally{F=r,F===0&&(An=ue()+500,hs&&Nr())}}function Yr(t){tr!==null&&tr.tag===0&&!(F&6)&&bn();var e=F;F|=1;var r=pt.transition,n=B;try{if(pt.transition=null,B=1,t)return t()}finally{B=n,pt.transition=r,F=e,!(F&6)&&Nr()}}function oc(){Xe=fn.current,Y(fn)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Bg(r)),me!==null)for(r=me.return;r!==null;){var n=r;switch(Bl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&La();break;case 3:Cn(),Y(Le),Y(Ae),Ql();break;case 5:Kl(n);break;case 4:Cn();break;case 13:Y(te);break;case 19:Y(te);break;case 10:Hl(n.type._context);break;case 22:case 23:oc()}r=r.return}if(ye=t,me=t=fr(t.current,null),ke=Xe=e,xe=0,Ri=null,ic=vs=Xr=0,ze=fi=null,Or!==null){for(e=0;e<Or.length;e++)if(r=Or[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var s=a.next;a.next=i,n.next=s}r.pending=n}Or=null}return t}function jf(t,e){do{var r=me;try{if(Gl(),ba.current=Ya,Xa){for(var n=ie.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Xa=!1}if($r=0,ve=ge=ie=null,di=!1,Ai=0,nc.current=null,r===null||r.return===null){xe=1,Ri=e,me=null;break}e:{var a=t,s=r.return,l=r,c=e;if(e=ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Eu(s);if(v!==null){v.flags&=-257,Au(v,s,l,a,e),v.mode&1&&Cu(a,u,e),e=v,c=u;var y=e.updateQueue;if(y===null){var g=new Set;g.add(c),e.updateQueue=g}else y.add(c);break e}else{if(!(e&1)){Cu(a,u,e),lc();break e}c=Error(I(426))}}else if(Q&&l.mode&1){var w=Eu(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Au(w,s,l,a,e),Wl(En(c,l));break e}}a=c=En(c,l),xe!==4&&(xe=2),fi===null?fi=[a]:fi.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var h=lf(a,c,e);ku(a,h);break e;case 1:l=c;var f=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(dr===null||!dr.has(x)))){a.flags|=65536,e&=-e,a.lanes|=e;var b=cf(a,l,e);ku(a,b);break e}}a=a.return}while(a!==null)}If(r)}catch(_){e=_,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function Sf(){var t=Ka.current;return Ka.current=Ya,t===null?Ya:t}function lc(){(xe===0||xe===3||xe===2)&&(xe=4),ye===null||!(Xr&268435455)&&!(vs&268435455)||Zt(ye,ke)}function Ja(t,e){var r=F;F|=2;var n=Sf();(ye!==t||ke!==e)&&(Mt=null,Fr(t,e));do try{p0();break}catch(i){jf(t,i)}while(!0);if(Gl(),F=r,Ka.current=n,me!==null)throw Error(I(261));return ye=null,ke=0,xe}function p0(){for(;me!==null;)Pf(me)}function f0(){for(;me!==null&&!Fm();)Pf(me)}function Pf(t){var e=Ef(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?If(t):me=e,nc.current=null}function If(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=s0(r,e),r!==null){r.flags&=32767,me=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,me=null;return}}else if(r=a0(r,e,Xe),r!==null){me=r;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);xe===0&&(xe=5)}function Tr(t,e,r){var n=B,i=pt.transition;try{pt.transition=null,B=1,h0(t,e,r,n)}finally{pt.transition=i,B=n}return null}function h0(t,e,r,n){do bn();while(tr!==null);if(F&6)throw Error(I(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(Ym(t,a),t===ye&&(me=ye=null,ke=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||pa||(pa=!0,Af(Ma,function(){return bn(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=pt.transition,pt.transition=null;var s=B;B=1;var l=F;F|=4,nc.current=null,l0(t,r),_f(r,t),Rg(To),Oa=!!Ao,To=Ao=null,t.current=r,c0(r),Lm(),F=l,B=s,pt.transition=a}else t.current=r;if(pa&&(pa=!1,tr=t,qa=i),a=t.pendingLanes,a===0&&(dr=null),Wm(r.stateNode),Be(t,ue()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Qa)throw Qa=!1,t=Jo,Jo=null,t;return qa&1&&t.tag!==0&&bn(),a=t.pendingLanes,a&1?t===Zo?hi++:(hi=0,Zo=t):hi=0,Nr(),null}function bn(){if(tr!==null){var t=op(qa),e=pt.transition,r=B;try{if(pt.transition=null,B=16>t?16:t,tr===null)var n=!1;else{if(t=tr,tr=null,qa=0,F&6)throw Error(I(331));var i=F;for(F|=4,A=t.current;A!==null;){var a=A,s=a.child;if(A.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:pi(8,d,a)}var p=d.child;if(p!==null)p.return=d,A=p;else for(;A!==null;){d=A;var m=d.sibling,v=d.return;if(yf(d),d===u){A=null;break}if(m!==null){m.return=v,A=m;break}A=v}}}var y=a.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}A=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,A=s;else e:for(;A!==null;){if(a=A,a.flags&2048)switch(a.tag){case 0:case 11:case 15:pi(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,A=h;break e}A=a.return}}var f=t.current;for(A=f;A!==null;){s=A;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,A=x;else e:for(s=f;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xs(9,l)}}catch(_){oe(l,l.return,_)}if(l===s){A=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,A=b;break e}A=l.return}}if(F=i,Nr(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(cs,t)}catch{}n=!0}return n}finally{B=r,pt.transition=e}}return!1}function Gu(t,e,r){e=En(r,e),e=lf(t,e,1),t=ur(t,e,1),e=Re(),t!==null&&(Hi(t,1,e),Be(t,e))}function oe(t,e,r){if(t.tag===3)Gu(t,t,r);else for(;e!==null;){if(e.tag===3){Gu(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(dr===null||!dr.has(n))){t=En(r,t),t=cf(e,t,1),e=ur(e,t,1),t=Re(),e!==null&&(Hi(e,1,t),Be(e,t));break}}e=e.return}}function m0(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&r,ye===t&&(ke&r)===r&&(xe===4||xe===3&&(ke&130023424)===ke&&500>ue()-ac?Fr(t,0):ic|=r),Be(t,e)}function Cf(t,e){e===0&&(t.mode&1?(e=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):e=1);var r=Re();t=Vt(t,e),t!==null&&(Hi(t,e,r),Be(t,r))}function g0(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Cf(t,r)}function x0(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(I(314))}n!==null&&n.delete(e),Cf(t,r)}var Ef;Ef=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Le.current)Fe=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Fe=!1,i0(t,e,r);Fe=!!(t.flags&131072)}else Fe=!1,Q&&e.flags&1048576&&Mp(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;ka(t,e),t=e.pendingProps;var i=Sn(e,Ae.current);wn(e,r),i=Jl(null,e,n,t,i,r);var a=Zl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(n)?(a=!0,Ua(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xl(e),i.updater=gs,e.stateNode=i,i._reactInternals=e,Bo(e,n,t,r),e=Go(null,e,n,!0,a,r)):(e.tag=0,Q&&a&&Ul(e),Te(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(ka(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=y0(n),t=xt(n,t),i){case 0:e=Vo(null,e,n,t,r);break e;case 1:e=Ru(null,e,n,t,r);break e;case 11:e=Tu(null,e,n,t,r);break e;case 14:e=Mu(null,e,n,xt(n.type,t),r);break e}throw Error(I(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:xt(n,i),Vo(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:xt(n,i),Ru(t,e,n,i,r);case 3:e:{if(ff(e),t===null)throw Error(I(387));n=e.pendingProps,a=e.memoizedState,i=a.element,Lp(t,e),Ha(e,n,null,r);var s=e.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=En(Error(I(423)),e),e=Ou(t,e,n,r,i);break e}else if(n!==i){i=En(Error(I(424)),e),e=Ou(t,e,n,r,i);break e}else for(Qe=cr(e.stateNode.containerInfo.firstChild),Ze=e,Q=!0,yt=null,r=zp(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pn(),n===i){e=Gt(t,e,r);break e}Te(t,e,n,r)}e=e.child}return e;case 5:return Up(e),t===null&&Fo(e),n=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,s=i.children,Mo(n,i)?s=null:a!==null&&Mo(n,a)&&(e.flags|=32),pf(t,e),Te(t,e,s,r),e.child;case 6:return t===null&&Fo(e),null;case 13:return hf(t,e,r);case 4:return Yl(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=In(e,null,n,r):Te(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:xt(n,i),Tu(t,e,n,i,r);case 7:return Te(t,e,e.pendingProps,r),e.child;case 8:return Te(t,e,e.pendingProps.children,r),e.child;case 12:return Te(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,a=e.memoizedProps,s=i.value,$(Va,n._currentValue),n._currentValue=s,a!==null)if(_t(a.value,s)){if(a.children===i.children&&!Le.current){e=Gt(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(a.tag===1){c=Ut(-1,r&-r),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Lo(a.return,r,e),l.lanes|=r;break}c=c.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(I(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Lo(s,r,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Te(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,wn(e,r),i=ft(i),n=n(i),e.flags|=1,Te(t,e,n,r),e.child;case 14:return n=e.type,i=xt(n,e.pendingProps),i=xt(n.type,i),Mu(t,e,n,i,r);case 15:return uf(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:xt(n,i),ka(t,e),e.tag=1,Ue(n)?(t=!0,Ua(e)):t=!1,wn(e,r),of(e,n,i),Bo(e,n,i,r),Go(null,e,n,!0,t,r);case 19:return mf(t,e,r);case 22:return df(t,e,r)}throw Error(I(156,e.tag))};function Af(t,e){return np(t,e)}function v0(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,r,n){return new v0(t,e,r,n)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function y0(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Il)return 11;if(t===Cl)return 14}return 2}function fr(t,e){var r=t.alternate;return r===null?(r=ct(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Sa(t,e,r,n,i,a){var s=2;if(n=t,typeof t=="function")cc(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case rn:return Lr(r.children,i,a,e);case Pl:s=8,i|=8;break;case uo:return t=ct(12,r,e,i|2),t.elementType=uo,t.lanes=a,t;case po:return t=ct(13,r,e,i),t.elementType=po,t.lanes=a,t;case fo:return t=ct(19,r,e,i),t.elementType=fo,t.lanes=a,t;case Ud:return ys(r,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fd:s=10;break e;case Ld:s=9;break e;case Il:s=11;break e;case Cl:s=14;break e;case Qt:s=16,n=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=ct(s,r,e,i),e.elementType=t,e.type=n,e.lanes=a,e}function Lr(t,e,r,n){return t=ct(7,t,n,e),t.lanes=r,t}function ys(t,e,r,n){return t=ct(22,t,n,e),t.elementType=Ud,t.lanes=r,t.stateNode={isHidden:!1},t}function Js(t,e,r){return t=ct(6,t,null,e),t.lanes=r,t}function Zs(t,e,r){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function w0(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ms(0),this.expirationTimes=Ms(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ms(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uc(t,e,r,n,i,a,s,l,c){return t=new w0(t,e,r,l,c),e===1?(e=1,a===!0&&(e|=8)):e=0,a=ct(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(a),t}function b0(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tn,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function Tf(t){if(!t)return vr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var r=t.type;if(Ue(r))return Ap(t,r,e)}return e}function Mf(t,e,r,n,i,a,s,l,c){return t=uc(r,n,!0,t,i,a,s,l,c),t.context=Tf(null),r=t.current,n=Re(),i=pr(r),a=Ut(n,i),a.callback=e??null,ur(r,a,i),t.current.lanes=i,Hi(t,i,n),Be(t,n),t}function ws(t,e,r,n){var i=e.current,a=Re(),s=pr(i);return r=Tf(r),e.context===null?e.context=r:e.pendingContext=r,e=Ut(a,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=ur(i,e,s),t!==null&&(bt(t,i,s,a),wa(t,i,s)),s}function Za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function dc(t,e){Hu(t,e),(t=t.alternate)&&Hu(t,e)}function _0(){return null}var Rf=typeof reportError=="function"?reportError:function(t){console.error(t)};function pc(t){this._internalRoot=t}bs.prototype.render=pc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));ws(t,e,null,null)};bs.prototype.unmount=pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){ws(null,t,null,null)}),e[Wt]=null}};function bs(t){this._internalRoot=t}bs.prototype.unstable_scheduleHydration=function(t){if(t){var e=up();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Jt.length&&e!==0&&e<Jt[r].priority;r++);Jt.splice(r,0,t),r===0&&pp(t)}};function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $u(){}function k0(t,e,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var u=Za(s);a.call(u)}}var s=Mf(e,n,t,0,null,!1,!1,"",$u);return t._reactRootContainer=s,t[Wt]=s.current,Si(t.nodeType===8?t.parentNode:t),Yr(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=Za(c);l.call(u)}}var c=uc(t,0,!1,null,null,!1,!1,"",$u);return t._reactRootContainer=c,t[Wt]=c.current,Si(t.nodeType===8?t.parentNode:t),Yr(function(){ws(e,c,r,n)}),c}function ks(t,e,r,n,i){var a=r._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var l=i;i=function(){var c=Za(s);l.call(c)}}ws(e,s,t,i)}else s=k0(r,e,t,i,n);return Za(s)}lp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=ti(e.pendingLanes);r!==0&&(Tl(e,r|1),Be(e,ue()),!(F&6)&&(An=ue()+500,Nr()))}break;case 13:Yr(function(){var n=Vt(t,1);if(n!==null){var i=Re();bt(n,t,1,i)}}),dc(t,1)}};Ml=function(t){if(t.tag===13){var e=Vt(t,134217728);if(e!==null){var r=Re();bt(e,t,134217728,r)}dc(t,134217728)}};cp=function(t){if(t.tag===13){var e=pr(t),r=Vt(t,e);if(r!==null){var n=Re();bt(r,t,e,n)}dc(t,e)}};up=function(){return B};dp=function(t,e){var r=B;try{return B=t,e()}finally{B=r}};ko=function(t,e,r){switch(e){case"input":if(go(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=fs(n);if(!i)throw Error(I(90));Wd(n),go(n,i)}}}break;case"textarea":Gd(t,r);break;case"select":e=r.value,e!=null&&gn(t,!!r.multiple,e,!1)}};qd=sc;Jd=Yr;var N0={usingClientEntryPoint:!1,Events:[Xi,on,fs,Kd,Qd,sc]},Qn={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Qn.bundleType,version:Qn.version,rendererPackageName:Qn.rendererPackageName,rendererConfig:Qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tp(t),t===null?null:t.stateNode},findFiberByHostInstance:Qn.findFiberByHostInstance||_0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{cs=fa.inject(j0),Et=fa}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0;it.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(e))throw Error(I(200));return b0(t,e,null,r)};it.createRoot=function(t,e){if(!fc(t))throw Error(I(299));var r=!1,n="",i=Rf;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=uc(t,1,!1,null,null,r,!1,n,i),t[Wt]=e.current,Si(t.nodeType===8?t.parentNode:t),new pc(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=tp(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return Yr(t)};it.hydrate=function(t,e,r){if(!_s(e))throw Error(I(200));return ks(null,t,e,!0,r)};it.hydrateRoot=function(t,e,r){if(!fc(t))throw Error(I(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",s=Rf;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=Mf(e,null,t,1,r??null,i,!1,a,s),t[Wt]=e.current,Si(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new bs(e)};it.render=function(t,e,r){if(!_s(e))throw Error(I(200));return ks(null,t,e,!1,r)};it.unmountComponentAtNode=function(t){if(!_s(t))throw Error(I(40));return t._reactRootContainer?(Yr(function(){ks(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};it.unstable_batchedUpdates=sc;it.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!_s(r))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return ks(t,e,r,!1,n)};it.version="18.3.1-next-f1338f8080-20240426";function Of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of)}catch(t){console.error(t)}}Of(),Rd.exports=it;var S0=Rd.exports,Df,Xu=S0;Df=Xu.createRoot,Xu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Oi.apply(this,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const Yu="popstate";function P0(t){t===void 0&&(t={});function e(n,i){let{pathname:a,search:s,hash:l}=n.location;return rl("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:es(i)}return C0(e,r,null,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function I0(){return Math.random().toString(36).substr(2,8)}function Ku(t,e){return{usr:t.state,key:t.key,idx:e}}function rl(t,e,r,n){return r===void 0&&(r=null),Oi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bn(e):e,{state:r,key:e&&e.key||n||I0()})}function es(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Bn(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function C0(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:a=!1}=n,s=i.history,l=rr.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(Oi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){l=rr.Pop;let w=d(),h=w==null?null:w-u;u=w,c&&c({action:l,location:g.location,delta:h})}function m(w,h){l=rr.Push;let f=rl(g.location,w,h);u=d()+1;let x=Ku(f,u),b=g.createHref(f);try{s.pushState(x,"",b)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(b)}a&&c&&c({action:l,location:g.location,delta:1})}function v(w,h){l=rr.Replace;let f=rl(g.location,w,h);u=d();let x=Ku(f,u),b=g.createHref(f);s.replaceState(x,"",b),a&&c&&c({action:l,location:g.location,delta:0})}function y(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:es(w);return f=f.replace(/ $/,"%20"),de(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let g={get action(){return l},get location(){return t(i,s)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Yu,p),c=w,()=>{i.removeEventListener(Yu,p),c=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let h=y(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(w){return s.go(w)}};return g}var Qu;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qu||(Qu={}));function E0(t,e,r){return r===void 0&&(r="/"),A0(t,e,r)}function A0(t,e,r,n){let i=typeof e=="string"?Bn(e):e,a=mc(i.pathname||"/",r);if(a==null)return null;let s=zf(t);T0(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=G0(a);l=B0(s[c],u)}return l}function zf(t,e,r,n){e===void 0&&(e=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(a,s,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(de(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=hr([n,c.relativePath]),d=r.concat(c);a.children&&a.children.length>0&&(de(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zf(a.children,e,d,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:L0(u,a.index),routesMeta:d})};return t.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,s);else for(let c of Ff(a.path))i(a,s,c)}),e}function Ff(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let s=Ff(n.join("/")),l=[];return l.push(...s.map(c=>c===""?a:[a,c].join("/"))),i&&l.push(...s),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function T0(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:U0(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const M0=/^:[\w-]+$/,R0=3,O0=2,D0=1,z0=10,F0=-2,qu=t=>t==="*";function L0(t,e){let r=t.split("/"),n=r.length;return r.some(qu)&&(n+=F0),e&&(n+=O0),r.filter(i=>!qu(i)).reduce((i,a)=>i+(M0.test(a)?R0:a===""?D0:z0),n)}function U0(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===e[i])?t[t.length-1]-e[e.length-1]:0}function B0(t,e,r){let{routesMeta:n}=t,i={},a="/",s=[];for(let l=0;l<n.length;++l){let c=n[l],u=l===n.length-1,d=a==="/"?e:e.slice(a.length)||"/",p=W0({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),m=c.route;if(!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:hr([a,p.pathname]),pathnameBase:K0(hr([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=hr([a,p.pathnameBase]))}return s}function W0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=V0(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((u,d,p)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let g=l[p]||"";s=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}const y=l[p];return v&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:t}}function V0(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),hc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function G0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}const H0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$0=t=>H0.test(t);function X0(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?Bn(t):t,a;if(r)if($0(r))a=r;else{if(r.includes("//")){let s=r;r=r.replace(/\/\/+/g,"/"),hc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?a=Ju(r.substring(1),"/"):a=Ju(r,e)}else a=e;return{pathname:a,search:Q0(n),hash:q0(i)}}function Ju(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function eo(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y0(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function gc(t,e){let r=Y0(t);return e?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function xc(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=Bn(t):(i=Oi({},t),de(!i.pathname||!i.pathname.includes("?"),eo("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),eo("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),eo("#","search","hash",i)));let a=t===""||i.pathname==="",s=a?"/":i.pathname,l;if(s==null)l=r;else{let p=e.length-1;if(!n&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let c=X0(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(a||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),K0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Q0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,q0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function J0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Lf=["post","put","patch","delete"];new Set(Lf);const Z0=["get",...Lf];new Set(Z0);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Di.apply(this,arguments)}const vc=S.createContext(null),ex=S.createContext(null),jr=S.createContext(null),Ns=S.createContext(null),Yt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Uf=S.createContext(null);function tx(t,e){let{relative:r}=e===void 0?{}:e;Wn()||de(!1);let{basename:n,navigator:i}=S.useContext(jr),{hash:a,pathname:s,search:l}=Vf(t,{relative:r}),c=s;return n!=="/"&&(c=s==="/"?n:hr([n,s])),i.createHref({pathname:c,search:l,hash:a})}function Wn(){return S.useContext(Ns)!=null}function qr(){return Wn()||de(!1),S.useContext(Ns).location}function Bf(t){S.useContext(jr).static||S.useLayoutEffect(t)}function yc(){let{isDataRoute:t}=S.useContext(Yt);return t?hx():rx()}function rx(){Wn()||de(!1);let t=S.useContext(vc),{basename:e,future:r,navigator:n}=S.useContext(jr),{matches:i}=S.useContext(Yt),{pathname:a}=qr(),s=JSON.stringify(gc(i,r.v7_relativeSplatPath)),l=S.useRef(!1);return Bf(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=xc(u,JSON.parse(s),a,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:hr([e,p.pathname])),(d.replace?n.replace:n.push)(p,d.state,d)},[e,n,s,a,t])}function Wf(){let{matches:t}=S.useContext(Yt),e=t[t.length-1];return e?e.params:{}}function Vf(t,e){let{relative:r}=e===void 0?{}:e,{future:n}=S.useContext(jr),{matches:i}=S.useContext(Yt),{pathname:a}=qr(),s=JSON.stringify(gc(i,n.v7_relativeSplatPath));return S.useMemo(()=>xc(t,JSON.parse(s),a,r==="path"),[t,s,a,r])}function nx(t,e){return ix(t,e)}function ix(t,e,r,n){Wn()||de(!1);let{navigator:i}=S.useContext(jr),{matches:a}=S.useContext(Yt),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=qr(),d;if(e){var p;let w=typeof e=="string"?Bn(e):e;c==="/"||(p=w.pathname)!=null&&p.startsWith(c)||de(!1),d=w}else d=u;let m=d.pathname||"/",v=m;if(c!=="/"){let w=c.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=E0(t,{pathname:v}),g=cx(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:hr([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:hr([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,r,n);return e&&g?S.createElement(Ns.Provider,{value:{location:Di({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:rr.Pop}},g):g}function ax(){let t=fx(),e=J0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),r?S.createElement("pre",{style:i},r):null,null)}const sx=S.createElement(ax,null);class ox extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?S.createElement(Yt.Provider,{value:this.props.routeContext},S.createElement(Uf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lx(t){let{routeContext:e,match:r,children:n}=t,i=S.useContext(vc);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(Yt.Provider,{value:e},n)}function cx(t,e,r,n){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),t==null){var a;if(!r)return null;if(r.errors)t=r.matches;else if((a=n)!=null&&a.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let s=t,l=(i=r)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||de(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:v}=r,y=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,p,m)=>{let v,y=!1,g=null,w=null;r&&(v=l&&p.route.id?l[p.route.id]:void 0,g=p.route.errorElement||sx,c&&(u<0&&m===0?(mx("route-fallback"),y=!0,w=null):u===m&&(y=!0,w=p.route.hydrateFallbackElement||null)));let h=e.concat(s.slice(0,m+1)),f=()=>{let x;return v?x=g:y?x=w:p.route.Component?x=S.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,S.createElement(lx,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:r!=null},children:x})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?S.createElement(ox,{location:r.location,revalidation:r.revalidation,component:g,error:v,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Gf=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Gf||{}),Hf=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hf||{});function ux(t){let e=S.useContext(vc);return e||de(!1),e}function dx(t){let e=S.useContext(ex);return e||de(!1),e}function px(t){let e=S.useContext(Yt);return e||de(!1),e}function $f(t){let e=px(),r=e.matches[e.matches.length-1];return r.route.id||de(!1),r.route.id}function fx(){var t;let e=S.useContext(Uf),r=dx(),n=$f();return e!==void 0?e:(t=r.errors)==null?void 0:t[n]}function hx(){let{router:t}=ux(Gf.UseNavigateStable),e=$f(Hf.UseNavigateStable),r=S.useRef(!1);return Bf(()=>{r.current=!0}),S.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Di({fromRouteId:e},a)))},[t,e])}const Zu={};function mx(t,e,r){Zu[t]||(Zu[t]=!0)}function gx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Xf(t){let{to:e,replace:r,state:n,relative:i}=t;Wn()||de(!1);let{future:a,static:s}=S.useContext(jr),{matches:l}=S.useContext(Yt),{pathname:c}=qr(),u=yc(),d=xc(e,gc(l,a.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(p),{replace:r,state:n,relative:i}),[u,p,i,r,n]),null}function J(t){de(!1)}function xx(t){let{basename:e="/",children:r=null,location:n,navigationType:i=rr.Pop,navigator:a,static:s=!1,future:l}=t;Wn()&&de(!1);let c=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:a,static:s,future:Di({v7_relativeSplatPath:!1},l)}),[c,l,a,s]);typeof n=="string"&&(n=Bn(n));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:y="default"}=n,g=S.useMemo(()=>{let w=mc(d,c);return w==null?null:{location:{pathname:w,search:p,hash:m,state:v,key:y},navigationType:i}},[c,d,p,m,v,y,i]);return g==null?null:S.createElement(jr.Provider,{value:u},S.createElement(Ns.Provider,{children:r,value:g}))}function vx(t){let{children:e,location:r}=t;return nx(nl(e),r)}new Promise(()=>{});function nl(t,e){e===void 0&&(e=[]);let r=[];return S.Children.forEach(t,(n,i)=>{if(!S.isValidElement(n))return;let a=[...e,i];if(n.type===S.Fragment){r.push.apply(r,nl(n.props.children,a));return}n.type!==J&&de(!1),!n.props.index||!n.props.children||de(!1);let s={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=nl(n.props.children,a)),r.push(s)}),r}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},il.apply(this,arguments)}function yx(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function wx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bx(t,e){return t.button===0&&(!e||e==="_self")&&!wx(t)}function al(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,r)=>{let n=t[r];return e.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function _x(t,e){let r=al(t);return e&&e.forEach((n,i)=>{r.has(i)||e.getAll(i).forEach(a=>{r.append(i,a)})}),r}const kx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nx="6";try{window.__reactRouterVersion=Nx}catch{}const jx="startTransition",ed=mm[jx];function Sx(t){let{basename:e,children:r,future:n,window:i}=t,a=S.useRef();a.current==null&&(a.current=P0({window:i,v5Compat:!0}));let s=a.current,[l,c]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},d=S.useCallback(p=>{u&&ed?ed(()=>c(p)):c(p)},[c,u]);return S.useLayoutEffect(()=>s.listen(d),[s,d]),S.useEffect(()=>gx(n),[n]),S.createElement(xx,{basename:e,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}const Px=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ix=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z=S.forwardRef(function(e,r){let{onClick:n,relative:i,reloadDocument:a,replace:s,state:l,target:c,to:u,preventScrollReset:d,viewTransition:p}=e,m=yx(e,kx),{basename:v}=S.useContext(jr),y,g=!1;if(typeof u=="string"&&Ix.test(u)&&(y=u,Px))try{let x=new URL(window.location.href),b=u.startsWith("//")?new URL(x.protocol+u):new URL(u),_=mc(b.pathname,v);b.origin===x.origin&&_!=null?u=_+b.search+b.hash:g=!0}catch{}let w=tx(u,{relative:i}),h=Cx(u,{replace:s,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:p});function f(x){n&&n(x),x.defaultPrevented||h(x)}return S.createElement("a",il({},m,{href:y||w,onClick:g||a?n:f,ref:r,target:c}))});var td;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(td||(td={}));var rd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rd||(rd={}));function Cx(t,e){let{target:r,replace:n,state:i,preventScrollReset:a,relative:s,viewTransition:l}=e===void 0?{}:e,c=yc(),u=qr(),d=Vf(t,{relative:s});return S.useCallback(p=>{if(bx(p,r)){p.preventDefault();let m=n!==void 0?n:es(u)===es(d);c(t,{replace:m,state:i,preventScrollReset:a,relative:s,viewTransition:l})}},[u,c,d,n,i,r,t,a,s,l])}function Ex(t){let e=S.useRef(al(t)),r=S.useRef(!1),n=qr(),i=S.useMemo(()=>_x(n.search,r.current?null:e.current),[n.search]),a=yc(),s=S.useCallback((l,c)=>{const u=al(typeof l=="function"?l(i):l);r.current=!0,a("?"+u,c)},[a,i]);return[i,s]}const Yf=S.createContext();function Ax({children:t}){const[e,r]=S.useState(!1),n=()=>r(!0),i=()=>r(!1);return o.jsx(Yf.Provider,{value:{isOpen:e,openModal:n,closeModal:i},children:t})}function wc(){const t=S.useContext(Yf);if(!t)throw new Error("useContact must be used within ContactProvider");return t}function Tx(){const{openModal:t}=wc(),[e,r]=S.useState(!1),[n,i]=S.useState(!1),a=()=>r(!1);return S.useEffect(()=>{const s=()=>i(window.scrollY>6);return s(),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),S.useEffect(()=>{document.documentElement.style.overflow=e?"hidden":""},[e]),o.jsxs("header",{className:`site-header shadow-on-scroll ${n?"is-scrolled":""}`,children:[o.jsxs("div",{className:"container nav-wrap",children:[o.jsx(Z,{className:"brand",to:"/","aria-label":"Home",children:o.jsx("img",{src:"/pictures/headerlogo.png",alt:"Robustrix logo"})}),o.jsxs("nav",{className:"nav-desktop","aria-label":"Primary",children:[o.jsx("div",{className:"nav-item",children:o.jsx(Z,{className:"nav-link",to:"/",children:"Home"})}),o.jsx("div",{className:"nav-item",children:o.jsx(Z,{className:"nav-link",to:"/products",children:"Products"})}),o.jsx("div",{className:"nav-item",children:o.jsx(Z,{className:"nav-link",to:"/solutions",children:"AI Platforms"})}),o.jsx("div",{className:"nav-item",children:o.jsx(Z,{className:"nav-link",to:"/windows-11-analysis",children:"Windows 11 Analysis"})}),o.jsx("div",{className:"nav-item",children:o.jsx("button",{className:"nav-link",onClick:t,children:"Contact Us"})}),o.jsx("div",{className:"nav-item",children:o.jsx(Z,{className:"nav-link",to:"/about",children:"About"})})]}),o.jsxs("div",{className:"nav-actions",children:[o.jsx("a",{className:"btn btn-primary",href:"https://wa.me/919090020245",target:"_blank",rel:"noopener noreferrer",children:"Contact Sales"}),o.jsxs("button",{className:`hamburger ${e?"is-open":""}`,"aria-label":"Toggle Menu",onClick:()=>r(s=>!s),children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]})]}),o.jsx("div",{className:`mobile-drawer ${e?"is-open":""}`,"aria-hidden":!e,children:o.jsxs("nav",{className:"mobile-nav",children:[o.jsx(Z,{to:"/",className:"mobile-link",onClick:a,children:"Home"}),o.jsx(Z,{to:"/products",className:"mobile-link",onClick:a,children:"Products"}),o.jsx(Z,{to:"/solutions",className:"mobile-link",onClick:a,children:"AI Platforms"}),o.jsx(Z,{to:"/windows-11-analysis",className:"mobile-link",onClick:a,children:"Windows 11 Analysis"}),o.jsx("button",{className:"mobile-link",onClick:()=>{a(),t()},children:"Contact Us"}),o.jsx(Z,{to:"/about",className:"mobile-link",onClick:a,children:"About"}),o.jsx("a",{href:"https://wa.me/919090020245",target:"_blank",rel:"noopener noreferrer",className:"mobile-link accent",onClick:a,children:"Contact Sales"})]})}),o.jsx("style",{children:`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          /* Use a solid color matching the header logo background for better blend */
          background: #000000;
          color: var(--color-ink-900);
        }
        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 88px;
          gap: 16px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
          font-weight: 900;
          letter-spacing: .02em;
        }
        .brand img { height: 56px; width: auto; display: block; }
        .brand-text {
          font-size: 1.1rem;
          color: var(--color-ink-900);
        }
        .nav-desktop {
          display: none;
          gap: 22px;
          align-items: center;
        }
        .nav-item { position: relative; }
        .nav-link {
          background: transparent;
          border: 0;
          cursor: pointer;
          font-weight: 700;
          color: var(--color-ink-700);
          padding: 8px 4px;
        }
        .nav-item:hover .mega {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .mega {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 8px);
          top: calc(100% + 6px);
          background: var(--color-bg-alt);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          display: grid;
          grid-template-columns: repeat(3, minmax(180px, 1fr));
          gap: 16px 32px;
          padding: 20px 24px;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition), transform var(--transition);
        }
        .mega-col { min-width: 180px; }
        .mega-title {
          font-weight: 800;
          font-size: 0.86rem;
          color: var(--color-ink-500);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .mega-link {
          display: block;
          color: var(--color-ink-700);
          text-decoration: none;
          padding: 6px 0;
        }
        .mega-link:hover { color: var(--color-brand-primary-dark); }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .icon-btn {
          display: inline-grid;
          place-items: center;
          width: 36px; height: 36px;
          border-radius: 999px;
          border: 1px solid var(--color-ink-200);
          background: var(--color-bg);
          cursor: pointer;
          transition: border-color var(--transition), transform var(--transition);
        }
        .icon-btn:hover { border-color: var(--color-brand-primary-dark); transform: translateY(-1px); }
        .hamburger {
          display: inline-flex;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 8px;
        }
        .hamburger span {
          width: 22px; height: 2px; background: var(--color-ink-900);
          transition: transform var(--transition), opacity var(--transition);
        }
        .hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.is-open span:nth-child(2) { opacity: 0; }
        .hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-drawer {
          position: fixed;
          inset: 88px 0 0 0; /* Match nav-wrap height */
          background: var(--color-bg);
          transform: translateY(-2px);
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition), transform var(--transition);
          padding: 16px;
        }
        .mobile-drawer.is-open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .mobile-nav {
          display: grid;
          gap: 8px;
        }
        .mobile-link {
          display: block;
          padding: 12px 10px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: var(--color-ink-900);
          border: 1px solid var(--color-ink-200);
          background: transparent;
          font: inherit;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }
        .mobile-link:hover { border-color: var(--color-brand-primary-dark); color: var(--color-brand-primary-dark); }
        .mobile-link.accent {
          border-color: transparent;
          background: var(--color-brand-primary);
          color: var(--color-ink-900);
          text-align: center;
          font-weight: 800;
        }

        @media (min-width: 1024px) {
          .nav-desktop { display: flex; }
          .hamburger { display: none; }
          .mobile-drawer { display: none; }
        }

        @media (max-width: 719px) {
          .nav-wrap { height: 72px; }
          .brand img { height: 48px; }
          .mobile-drawer { inset: 72px 0 0 0; transform: translateY(-2px); }
        }
      `})]})}function Mx(){return o.jsxs("footer",{className:"site-footer",children:[o.jsxs("div",{className:"container grid",children:[o.jsxs("div",{className:"col",children:[o.jsx("a",{className:"brand",href:"/",children:o.jsx("img",{src:"/pictures/icon.png",width:"28",height:"28",alt:""})}),o.jsx("p",{className:"copy",children:"Industrial computing solutions for edge AI, embedded, and IoT applications."})]}),o.jsxs("nav",{className:"col",children:[o.jsx("p",{className:"col-title",children:"Products"}),o.jsx("a",{href:"#",children:"Boards"}),o.jsx("a",{href:"#",children:"Systems"}),o.jsx("a",{href:"#",children:"Networking"}),o.jsx("a",{href:"#",children:"Accessories"})]}),o.jsxs("nav",{className:"col",children:[o.jsx("p",{className:"col-title",children:"Solutions"}),o.jsx("a",{href:"#",children:"Manufacturing"}),o.jsx("a",{href:"#",children:"Retail"}),o.jsx("a",{href:"#",children:"Transportation"}),o.jsx("a",{href:"#",children:"Energy"})]}),o.jsxs("nav",{className:"col",children:[o.jsx("p",{className:"col-title",children:"Company"}),o.jsx("a",{href:"#",children:"About"}),o.jsx("a",{href:"/#blog-articles",children:"News"}),o.jsx("a",{href:"#",children:"Contact"}),o.jsx("a",{href:"#",children:"Support"})]})]}),o.jsxs("div",{className:"container legal",children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," Robustrix. All rights reserved. This is a non-affiliated demo."]}),o.jsxs("div",{className:"links",children:[o.jsx("a",{href:"#",children:"Privacy"}),o.jsx("a",{href:"#",children:"Terms"}),o.jsx("a",{href:"#",children:"Cookies"})]})]}),o.jsx("style",{children:`
        .site-footer {
          margin-top: 60px;
          background: var(--color-bg);
          color: var(--color-ink-900);
          border-top: 1px solid var(--color-ink-200);
        }
        .grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 20px;
          padding-block: 40px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 900;
          letter-spacing: .02em;
          color: inherit;
          text-decoration: none;
        }
        .copy { color: var(--color-ink-700); margin-top: 10px; }
        .col { display: grid; align-content: start; gap: 8px; }
        .col-title {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: var(--color-ink-700);
          margin-bottom: 8px;
        }
        .col a { color: var(--color-ink-700); text-decoration: none; }
        .col a:hover { color: var(--color-brand-primary); }
        .legal {
          padding-block: 16px;
          border-top: 1px solid var(--color-ink-200);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: var(--color-ink-700);
          font-size: 0.92rem;
        }
        .links { display: flex; gap: 14px; }
        .links a { color: var(--color-ink-700); text-decoration: none; }
        .links a:hover { color: var(--color-brand-primary-dark); }
        @media (max-width: 1023px) {
          .grid { grid-template-columns: 1fr 1fr; }
          .legal { flex-direction: column; align-items: start; }
        }
      `})]})}function Rx({isOpen:t,onClose:e}){const[r,n]=S.useState({name:"",phone:"",email:"",message:""});S.useEffect(()=>(t?document.documentElement.style.overflow="hidden":document.documentElement.style.overflow="",()=>{document.documentElement.style.overflow=""}),[t]);const i=l=>{n({...r,[l.target.name]:l.target.value})},a=l=>{l.preventDefault();const c="info@therobustrix.com",u=encodeURIComponent(`Contact Form Submission from ${r.name}`),d=encodeURIComponent(`Name: ${r.name}
Phone Number: ${r.phone}
Email: ${r.email}

Message:
${r.message}`),p=`mailto:${c}?subject=${u}&body=${d}`;window.location.href=p,alert("Thank you for contacting us! Your email client will open with the message pre-filled."),n({name:"",phone:"",email:"",message:""}),e()},s=l=>{l.target===l.currentTarget&&e()};return t?o.jsxs("div",{className:"contact-modal-overlay",onClick:s,children:[o.jsxs("div",{className:"contact-modal",onClick:l=>l.stopPropagation(),children:[o.jsx("div",{className:"contact-modal-accent","aria-hidden":"true"}),o.jsx("button",{className:"contact-modal-close",onClick:e,"aria-label":"Close",children:o.jsx("span",{className:"contact-modal-close-icon",children:"×"})}),o.jsxs("div",{className:"contact-modal-content",children:[o.jsxs("div",{className:"contact-modal-header",children:[o.jsx("span",{className:"contact-modal-overline",children:"Get in touch"}),o.jsx("h2",{className:"contact-modal-title",children:"Contact Us"}),o.jsx("p",{className:"contact-modal-tagline",children:"Edge AI · Embedded · Industrial compute"})]}),o.jsxs("form",{className:"contact-form",onSubmit:a,children:[o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"contact-name",children:"Name"}),o.jsx("input",{type:"text",id:"contact-name",name:"name",value:r.name,onChange:i,required:!0,placeholder:"Your name",autoComplete:"name"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"contact-phone",children:"Phone"}),o.jsx("input",{type:"tel",id:"contact-phone",name:"phone",value:r.phone,onChange:i,required:!0,placeholder:"+91 …",autoComplete:"tel"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"contact-email",children:"Email"}),o.jsx("input",{type:"email",id:"contact-email",name:"email",value:r.email,onChange:i,required:!0,placeholder:"you@company.com",autoComplete:"email"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"contact-message",children:"Message"}),o.jsx("textarea",{id:"contact-message",name:"message",value:r.message,onChange:i,required:!0,rows:"4",placeholder:"Tell us about your project or inquiry…"})]}),o.jsxs("button",{type:"submit",className:"contact-submit",children:[o.jsx("span",{className:"contact-submit-text",children:"Send message"}),o.jsx("span",{className:"contact-submit-arrow",children:"→"})]})]})]})]}),o.jsx("style",{children:`
        .contact-modal-overlay {
          --contact-cyan: #02C4F9;
          --contact-cyan-dim: rgba(2, 196, 249, 0.4);
          --contact-purple: #8A3FFC;
          --contact-bg: rgba(3, 31, 39, 0.25);
          --contact-border: rgba(2, 196, 249, 0.2);
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(2, 44, 54, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          animation: contactOverlayIn 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes contactOverlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .contact-modal {
          position: relative;
          width: 100%;
          max-width: 520px;
          max-height: 90vh;
          overflow: hidden;
          background: var(--contact-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--contact-border);
          border-radius: 20px;
          box-shadow:
            0 0 0 1px rgba(2, 196, 249, 0.08),
            0 24px 64px rgba(0, 0, 0, 0.5),
            0 0 80px rgba(2, 196, 249, 0.08);
          animation: contactModalIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes contactModalIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(16px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .contact-modal-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(
            180deg,
            var(--contact-cyan) 0%,
            var(--contact-purple) 100%
          );
          box-shadow: 0 0 20px var(--contact-cyan-dim);
        }

        .contact-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border: 1px solid var(--contact-border);
          border-radius: 50%;
          background: rgba(2, 44, 54, 0.25);
          color: var(--color-ink-700, #B5BABB);
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          z-index: 2;
        }
        .contact-modal-close:hover {
          color: var(--contact-cyan);
          border-color: var(--contact-cyan);
          box-shadow: 0 0 20px var(--contact-cyan-dim);
          transform: scale(1.05);
        }
        .contact-modal-close-icon {
          font-size: 22px;
          line-height: 1;
          font-weight: 300;
        }

        .contact-modal-content {
          position: relative;
          padding: 40px 36px 36px 40px;
          overflow-y: auto;
          max-height: calc(90vh - 0px);
        }

        .contact-modal-header {
          margin-bottom: 28px;
        }
        .contact-modal-overline {
          display: block;
          color: var(--contact-cyan);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
          margin-bottom: 8px;
        }
        .contact-modal-title {
          font-size: clamp(26px, 4vw, 32px);
          font-weight: 800;
          color: #fff;
          font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
        }
        .contact-modal-tagline {
          font-size: 0.9rem;
          color: var(--color-ink-500, #9BA2A3);
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-ink-700, #B5BABB);
          font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid rgba(2, 196, 249, 0.15);
          border-radius: 10px;
          font-size: 1rem;
          font-family: inherit;
          background: rgba(2, 44, 54, 0.2);
          color: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--color-ink-300, #7E888A);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--contact-cyan);
          box-shadow: 0 0 0 3px rgba(2, 196, 249, 0.15);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 110px;
        }

        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          margin-top: 8px;
          padding: 16px 24px;
          font-size: 1rem;
          font-weight: 700;
          font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
          color: #022C36;
          background: linear-gradient(135deg, var(--contact-cyan) 0%, #15E3FF 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
        }
        .contact-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(2, 196, 249, 0.4);
        }
        .contact-submit:active {
          transform: translateY(0);
        }
        .contact-submit-arrow {
          font-size: 1.1em;
          transition: transform 0.2s;
        }
        .contact-submit:hover .contact-submit-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 640px) {
          .contact-modal {
            max-width: 100%;
            border-radius: 20px 20px 0 0;
          }
          .contact-modal-content {
            padding: 32px 24px 28px 28px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-modal-close {
            top: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
        }
      `})]}):null}function Rt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Kf(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var et={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tn={duration:.5,overwrite:!1,delay:0},bc,Ne,q,ut=1e8,G=1/ut,sl=Math.PI*2,Ox=sl/4,Dx=0,Qf=Math.sqrt,zx=Math.cos,Fx=Math.sin,we=function(e){return typeof e=="string"},le=function(e){return typeof e=="function"},Ht=function(e){return typeof e=="number"},_c=function(e){return typeof e>"u"},Tt=function(e){return typeof e=="object"},We=function(e){return e!==!1},kc=function(){return typeof window<"u"},ha=function(e){return le(e)||we(e)},qf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ee=Array.isArray,Lx=/random\([^)]+\)/g,Ux=/,\s*/g,nd=/(?:-?\.?\d|\.)+/gi,Jf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,to=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zf=/[+-]=-?[.\d]+/,Bx=/[^,'"\[\]\s]+/gi,Wx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,re,St,ol,Nc,rt={},ts={},eh,th=function(e){return(ts=Mn(e,rt))&&$e},jc=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},zi=function(e,r){return!r&&console.warn(e)},rh=function(e,r){return e&&(rt[e]=r)&&ts&&(ts[e]=r)||rt},Fi=function(){return 0},Vx={suppressEvents:!0,isStart:!0,kill:!1},Pa={suppressEvents:!0,kill:!1},Gx={suppressEvents:!0},Sc={},mr=[],ll={},nh,Ye={},ro={},id=30,Ia=[],Pc="",Ic=function(e){var r=e[0],n,i;if(Tt(r)||le(r)||(e=[e]),!(n=(r._gsap||{}).harness)){for(i=Ia.length;i--&&!Ia[i].targetTest(r););n=Ia[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ph(e[i],n)))||e.splice(i,1);return e},Ur=function(e){return e._gsap||Ic(dt(e))[0]._gsap},ih=function(e,r,n){return(n=e[r])&&le(n)?e[r]():_c(n)&&e.getAttribute&&e.getAttribute(r)||n},Ve=function(e,r){return(e=e.split(",")).forEach(r)||e},ce=function(e){return Math.round(e*1e5)/1e5||0},ee=function(e){return Math.round(e*1e7)/1e7||0},_n=function(e,r){var n=r.charAt(0),i=parseFloat(r.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Hx=function(e,r){for(var n=r.length,i=0;e.indexOf(r[i])<0&&++i<n;);return i<n},rs=function(){var e=mr.length,r=mr.slice(0),n,i;for(ll={},mr.length=0,n=0;n<e;n++)i=r[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cc=function(e){return!!(e._initted||e._startAt||e.add)},ah=function(e,r,n,i){mr.length&&!Ne&&rs(),e.render(r,n,!!(Ne&&r<0&&Cc(e))),mr.length&&!Ne&&rs()},sh=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(Bx).length<2?r:we(e)?e.trim():e},oh=function(e){return e},nt=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},$x=function(e){return function(r,n){for(var i in n)i in r||i==="duration"&&e||i==="ease"||(r[i]=n[i])}},Mn=function(e,r){for(var n in r)e[n]=r[n];return e},ad=function t(e,r){for(var n in r)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Tt(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},ns=function(e,r){var n={},i;for(i in e)i in r||(n[i]=e[i]);return n},mi=function(e){var r=e.parent||re,n=e.keyframes?$x(Ee(e.keyframes)):nt;if(We(e.inherit))for(;r;)n(e,r.vars.defaults),r=r.parent||r._dp;return e},Xx=function(e,r){for(var n=e.length,i=n===r.length;i&&n--&&e[n]===r[n];);return n<0},lh=function(e,r,n,i,a){var s=e[i],l;if(a)for(l=r[a];s&&s[a]>l;)s=s._prev;return s?(r._next=s._next,s._next=r):(r._next=e[n],e[n]=r),r._next?r._next._prev=r:e[i]=r,r._prev=s,r.parent=r._dp=e,r},js=function(e,r,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=r._prev,s=r._next;a?a._next=s:e[n]===r&&(e[n]=s),s?s._prev=a:e[i]===r&&(e[i]=a),r._next=r._prev=r.parent=null},yr=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Br=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Yx=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},cl=function(e,r,n,i){return e._startAt&&(Ne?e._startAt.revert(Pa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,i))},Kx=function t(e){return!e||e._ts&&t(e.parent)},sd=function(e){return e._repeat?Rn(e._tTime,e=e.duration()+e._rDelay)*e:0},Rn=function(e,r){var n=Math.floor(e=ee(e/r));return e&&n===e?n-1:n},is=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Ss=function(e){return e._end=ee(e._start+(e._tDur/Math.abs(e._ts||e._rts||G)||0))},Ps=function(e,r){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ee(n._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),Ss(e),n._dirty||Br(n,e)),e},ch=function(e,r){var n;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(n=is(e.rawTime(),r),(!r._dur||Ki(0,r.totalDuration(),n)-r._tTime>G)&&r.render(n,!0)),Br(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-G}},It=function(e,r,n,i){return r.parent&&yr(r),r._start=ee((Ht(n)?n:n||e!==re?st(e,n,r):e._time)+r._delay),r._end=ee(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),lh(e,r,"_first","_last",e._sort?"_start":0),ul(r)||(e._recent=r),i||ch(e,r),e._ts<0&&Ps(e,e._tTime),e},uh=function(e,r){return(rt.ScrollTrigger||jc("scrollTrigger",r))&&rt.ScrollTrigger.create(r,e)},dh=function(e,r,n,i,a){if(Ac(e,r,a),!e._initted)return 1;if(!n&&e._pt&&!Ne&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&nh!==Ke.frame)return mr.push(e),e._lazy=[a,i],1},Qx=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},ul=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},qx=function(e,r,n,i){var a=e.ratio,s=r<0||!r&&(!e._start&&Qx(e)&&!(!e._initted&&ul(e))||(e._ts<0||e._dp._ts<0)&&!ul(e))?0:1,l=e._rDelay,c=0,u,d,p;if(l&&e._repeat&&(c=Ki(0,e._tDur,r),d=Rn(c,l),e._yoyo&&d&1&&(s=1-s),d!==Rn(e._tTime,l)&&(a=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==a||Ne||i||e._zTime===G||!r&&e._zTime){if(!e._initted&&dh(e,r,i,n,c))return;for(p=e._zTime,e._zTime=r||(n?G:0),n||(n=r&&!p),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,u=e._pt;u;)u.r(s,u.d),u=u._next;r<0&&cl(e,r,n,!0),e._onUpdate&&!n&&qe(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&qe(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===s&&(s&&yr(e,1),!n&&!Ne&&(qe(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},Jx=function(e,r,n){var i;if(n>r)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},On=function(e,r,n,i){var a=e._repeat,s=ee(r)||0,l=e._tTime/e._tDur;return l&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=a?a<0?1e10:ee(s*(a+1)+e._rDelay*a):s,l>0&&!i&&Ps(e,e._tTime=e._tDur*l),e.parent&&Ss(e),n||Br(e.parent,e),e},od=function(e){return e instanceof Me?Br(e):On(e,e._dur)},Zx={_start:0,endTime:Fi,totalDuration:Fi},st=function t(e,r,n){var i=e.labels,a=e._recent||Zx,s=e.duration()>=ut?a.endTime(!1):e._dur,l,c,u;return we(r)&&(isNaN(r)||r in i)?(c=r.charAt(0),u=r.substr(-1)==="%",l=r.indexOf("="),c==="<"||c===">"?(l>=0&&(r=r.replace(/=/,"")),(c==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(r.substr(1))||0)*(u?(l<0?a:n).totalDuration()/100:1)):l<0?(r in i||(i[r]=s),i[r]):(c=parseFloat(r.charAt(l-1)+r.substr(l+1)),u&&n&&(c=c/100*(Ee(n)?n[0]:n).totalDuration()),l>1?t(e,r.substr(0,l-1),n)+c:s+c)):r==null?s:+r},gi=function(e,r,n){var i=Ht(r[1]),a=(i?2:1)+(e<2?0:1),s=r[a],l,c;if(i&&(s.duration=r[1]),s.parent=n,e){for(l=s,c=n;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=We(c.vars.inherit)&&c.parent;s.immediateRender=We(l.immediateRender),e<2?s.runBackwards=1:s.startAt=r[a-1]}return new he(r[0],s,r[a+1])},Sr=function(e,r){return e||e===0?r(e):r},Ki=function(e,r,n){return n<e?e:n>r?r:n},Ce=function(e,r){return!we(e)||!(r=Wx.exec(e))?"":r[1]},ev=function(e,r,n){return Sr(n,function(i){return Ki(e,r,i)})},dl=[].slice,ph=function(e,r){return e&&Tt(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&Tt(e[0]))&&!e.nodeType&&e!==St},tv=function(e,r,n){return n===void 0&&(n=[]),e.forEach(function(i){var a;return we(i)&&!r||ph(i,1)?(a=n).push.apply(a,dt(i)):n.push(i)})||n},dt=function(e,r,n){return q&&!r&&q.selector?q.selector(e):we(e)&&!n&&(ol||!Dn())?dl.call((r||Nc).querySelectorAll(e),0):Ee(e)?tv(e,n):ph(e)?dl.call(e,0):e?[e]:[]},pl=function(e){return e=dt(e)[0]||zi("Invalid scope")||{},function(r){var n=e.current||e.nativeElement||e;return dt(r,n.querySelectorAll?n:n===e?zi("Invalid scope")||Nc.createElement("div"):e)}},fh=function(e){return e.sort(function(){return .5-Math.random()})},hh=function(e){if(le(e))return e;var r=Tt(e)?e:{each:e},n=Wr(r.ease),i=r.from||0,a=parseFloat(r.base)||0,s={},l=i>0&&i<1,c=isNaN(i)||l,u=r.axis,d=i,p=i;return we(i)?d=p={center:.5,edges:.5,end:1}[i]||0:!l&&c&&(d=i[0],p=i[1]),function(m,v,y){var g=(y||r).length,w=s[g],h,f,x,b,_,k,N,j,P;if(!w){if(P=r.grid==="auto"?0:(r.grid||[1,ut])[1],!P){for(N=-ut;N<(N=y[P++].getBoundingClientRect().left)&&P<g;);P<g&&P--}for(w=s[g]=[],h=c?Math.min(P,g)*d-.5:i%P,f=P===ut?0:c?g*p/P-.5:i/P|0,N=0,j=ut,k=0;k<g;k++)x=k%P-h,b=f-(k/P|0),w[k]=_=u?Math.abs(u==="y"?b:x):Qf(x*x+b*b),_>N&&(N=_),_<j&&(j=_);i==="random"&&fh(w),w.max=N-j,w.min=j,w.v=g=(parseFloat(r.amount)||parseFloat(r.each)*(P>g?g-1:u?u==="y"?g/P:P:Math.max(P,g/P))||0)*(i==="edges"?-1:1),w.b=g<0?a-g:a,w.u=Ce(r.amount||r.each)||0,n=n&&g<0?Nh(n):n}return g=(w[m]-w.min)/w.max||0,ee(w.b+(n?n(g):g)*w.v)+w.u}},fl=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ee(Math.round(parseFloat(n)/e)*e*r);return(i-i%1)/r+(Ht(n)?0:Ce(n))}},mh=function(e,r){var n=Ee(e),i,a;return!n&&Tt(e)&&(i=n=e.radius||ut,e.values?(e=dt(e.values),(a=!Ht(e[0]))&&(i*=i)):e=fl(e.increment)),Sr(r,n?le(e)?function(s){return a=e(s),Math.abs(a-s)<=i?a:s}:function(s){for(var l=parseFloat(a?s.x:s),c=parseFloat(a?s.y:0),u=ut,d=0,p=e.length,m,v;p--;)a?(m=e[p].x-l,v=e[p].y-c,m=m*m+v*v):m=Math.abs(e[p]-l),m<u&&(u=m,d=p);return d=!i||u<=i?e[d]:s,a||d===s||Ht(s)?d:d+Ce(s)}:fl(e))},gh=function(e,r,n,i){return Sr(Ee(e)?!r:n===!0?!!(n=0):!i,function(){return Ee(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(r-e+n*.99))/n)*n*i)/i})},rv=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduce(function(a,s){return s(a)},i)}},nv=function(e,r){return function(n){return e(parseFloat(n))+(r||Ce(n))}},iv=function(e,r,n){return vh(e,r,0,1,n)},xh=function(e,r,n){return Sr(n,function(i){return e[~~r(i)]})},av=function t(e,r,n){var i=r-e;return Ee(e)?xh(e,t(0,e.length),r):Sr(n,function(a){return(i+(a-e)%i)%i+e})},sv=function t(e,r,n){var i=r-e,a=i*2;return Ee(e)?xh(e,t(0,e.length-1),r):Sr(n,function(s){return s=(a+(s-e)%a)%a||0,e+(s>i?a-s:s)})},Li=function(e){return e.replace(Lx,function(r){var n=r.indexOf("[")+1,i=r.substring(n||7,n?r.indexOf("]"):r.length-1).split(Ux);return gh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},vh=function(e,r,n,i,a){var s=r-e,l=i-n;return Sr(a,function(c){return n+((c-e)/s*l||0)})},ov=function t(e,r,n,i){var a=isNaN(e+r)?0:function(v){return(1-v)*e+v*r};if(!a){var s=we(e),l={},c,u,d,p,m;if(n===!0&&(i=1)&&(n=null),s)e={p:e},r={p:r};else if(Ee(e)&&!Ee(r)){for(d=[],p=e.length,m=p-2,u=1;u<p;u++)d.push(t(e[u-1],e[u]));p--,a=function(y){y*=p;var g=Math.min(m,~~y);return d[g](y-g)},n=r}else i||(e=Mn(Ee(e)?[]:{},e));if(!d){for(c in r)Ec.call(l,e,c,"get",r[c]);a=function(y){return Rc(y,l)||(s?e.p:e)}}}return Sr(n,a)},ld=function(e,r,n){var i=e.labels,a=ut,s,l,c;for(s in i)l=i[s]-r,l<0==!!n&&l&&a>(l=Math.abs(l))&&(c=s,a=l);return c},qe=function(e,r,n){var i=e.vars,a=i[r],s=q,l=e._ctx,c,u,d;if(a)return c=i[r+"Params"],u=i.callbackScope||e,n&&mr.length&&rs(),l&&(q=l),d=c?a.apply(u,c):a.call(u),q=s,d},ni=function(e){return yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ne),e.progress()<1&&qe(e,"onInterrupt"),e},mn,yh=[],wh=function(e){if(e)if(e=!e.name&&e.default||e,kc()||e.headless){var r=e.name,n=le(e),i=r&&!n&&e.init?function(){this._props=[]}:e,a={init:Fi,render:Rc,add:Ec,kill:kv,modifier:_v,rawVars:0},s={targetTest:0,get:0,getSetter:Mc,aliases:{},register:0};if(Dn(),e!==i){if(Ye[r])return;nt(i,nt(ns(e,a),s)),Mn(i.prototype,Mn(a,ns(e,s))),Ye[i.prop=r]=i,e.targetTest&&(Ia.push(i),Sc[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}rh(r,i),e.register&&e.register($e,i,Ge)}else yh.push(e)},V=255,ii={aqua:[0,V,V],lime:[0,V,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,V],navy:[0,0,128],white:[V,V,V],olive:[128,128,0],yellow:[V,V,0],orange:[V,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[V,0,0],pink:[V,192,203],cyan:[0,V,V],transparent:[V,V,V,0]},no=function(e,r,n){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(n-r)*e*6:e<.5?n:e*3<2?r+(n-r)*(2/3-e)*6:r)*V+.5|0},bh=function(e,r,n){var i=e?Ht(e)?[e>>16,e>>8&V,e&V]:0:ii.black,a,s,l,c,u,d,p,m,v,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ii[e])i=ii[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),s=e.charAt(2),l=e.charAt(3),e="#"+a+a+s+s+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&V,i&V,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&V,e&V]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(nd),!r)c=+i[0]%360/360,u=+i[1]/100,d=+i[2]/100,s=d<=.5?d*(u+1):d+u-d*u,a=d*2-s,i.length>3&&(i[3]*=1),i[0]=no(c+1/3,a,s),i[1]=no(c,a,s),i[2]=no(c-1/3,a,s);else if(~e.indexOf("="))return i=e.match(Jf),n&&i.length<4&&(i[3]=1),i}else i=e.match(nd)||ii.transparent;i=i.map(Number)}return r&&!y&&(a=i[0]/V,s=i[1]/V,l=i[2]/V,p=Math.max(a,s,l),m=Math.min(a,s,l),d=(p+m)/2,p===m?c=u=0:(v=p-m,u=d>.5?v/(2-p-m):v/(p+m),c=p===a?(s-l)/v+(s<l?6:0):p===s?(l-a)/v+2:(a-s)/v+4,c*=60),i[0]=~~(c+.5),i[1]=~~(u*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},_h=function(e){var r=[],n=[],i=-1;return e.split(gr).forEach(function(a){var s=a.match(hn)||[];r.push.apply(r,s),n.push(i+=s.length+1)}),r.c=n,r},cd=function(e,r,n){var i="",a=(e+i).match(gr),s=r?"hsla(":"rgba(",l=0,c,u,d,p;if(!a)return e;if(a=a.map(function(m){return(m=bh(m,r,1))&&s+(r?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(d=_h(e),c=n.c,c.join(i)!==d.c.join(i)))for(u=e.replace(gr,"1").split(hn),p=u.length-1;l<p;l++)i+=u[l]+(~c.indexOf(l)?a.shift()||s+"0,0,0,0)":(d.length?d:a.length?a:n).shift());if(!u)for(u=e.split(gr),p=u.length-1;l<p;l++)i+=u[l]+a[l];return i+u[p]},gr=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ii)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),lv=/hsl[a]?\(/,kh=function(e){var r=e.join(" "),n;if(gr.lastIndex=0,gr.test(r))return n=lv.test(r),e[1]=cd(e[1],n),e[0]=cd(e[0],n,_h(e[1])),!0},Ui,Ke=function(){var t=Date.now,e=500,r=33,n=t(),i=n,a=1e3/240,s=a,l=[],c,u,d,p,m,v,y=function g(w){var h=t()-i,f=w===!0,x,b,_,k;if((h>e||h<0)&&(n+=h-r),i+=h,_=i-n,x=_-s,(x>0||f)&&(k=++p.frame,m=_-p.time*1e3,p.time=_=_/1e3,s+=x+(x>=a?4:a-x),b=1),f||(c=u(g)),b)for(v=0;v<l.length;v++)l[v](_,m,k,w)};return p={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(w){return m/(1e3/(w||60))},wake:function(){eh&&(!ol&&kc()&&(St=ol=window,Nc=St.document||{},rt.gsap=$e,(St.gsapVersions||(St.gsapVersions=[])).push($e.version),th(ts||St.GreenSockGlobals||!St.gsap&&St||{}),yh.forEach(wh)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),u=d||function(w){return setTimeout(w,s-p.time*1e3+1|0)},Ui=1,y(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),Ui=0,u=Fi},lagSmoothing:function(w,h){e=w||1/0,r=Math.min(h||33,e)},fps:function(w){a=1e3/(w||240),s=p.time*1e3+a},add:function(w,h,f){var x=h?function(b,_,k,N){w(b,_,k,N),p.remove(x)}:w;return p.remove(w),l[f?"unshift":"push"](x),Dn(),x},remove:function(w,h){~(h=l.indexOf(w))&&l.splice(h,1)&&v>=h&&v--},_listeners:l},p}(),Dn=function(){return!Ui&&Ke.wake()},z={},cv=/^[\d.\-M][\d.\-,\s]/,uv=/["']/g,dv=function(e){for(var r={},n=e.substr(1,e.length-3).split(":"),i=n[0],a=1,s=n.length,l,c,u;a<s;a++)c=n[a],l=a!==s-1?c.lastIndexOf(","):c.length,u=c.substr(0,l),r[i]=isNaN(u)?u.replace(uv,"").trim():+u,i=c.substr(l+1).trim();return r},pv=function(e){var r=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",r);return e.substring(r,~i&&i<n?e.indexOf(")",n+1):n)},fv=function(e){var r=(e+"").split("("),n=z[r[0]];return n&&r.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[dv(r[1])]:pv(e).split(",").map(sh)):z._CE&&cv.test(e)?z._CE("",e):n},Nh=function(e){return function(r){return 1-e(1-r)}},jh=function t(e,r){for(var n=e._first,i;n;)n instanceof Me?t(n,r):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==r&&(n.timeline?t(n.timeline,r):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=r)),n=n._next},Wr=function(e,r){return e&&(le(e)?e:z[e]||fv(e))||r},Jr=function(e,r,n,i){n===void 0&&(n=function(c){return 1-r(1-c)}),i===void 0&&(i=function(c){return c<.5?r(c*2)/2:1-r((1-c)*2)/2});var a={easeIn:r,easeOut:n,easeInOut:i},s;return Ve(e,function(l){z[l]=rt[l]=a,z[s=l.toLowerCase()]=n;for(var c in a)z[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=z[l+"."+c]=a[c]}),a},Sh=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},io=function t(e,r,n){var i=r>=1?r:1,a=(n||(e?.3:.45))/(r<1?r:1),s=a/sl*(Math.asin(1/i)||0),l=function(d){return d===1?1:i*Math.pow(2,-10*d)*Fx((d-s)*a)+1},c=e==="out"?l:e==="in"?function(u){return 1-l(1-u)}:Sh(l);return a=sl/a,c.config=function(u,d){return t(e,u,d)},c},ao=function t(e,r){r===void 0&&(r=1.70158);var n=function(s){return s?--s*s*((r+1)*s+r)+1:0},i=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:Sh(n);return i.config=function(a){return t(e,a)},i};Ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Jr(t+",Power"+(r-1),e?function(n){return Math.pow(n,r)}:function(n){return n},function(n){return 1-Math.pow(1-n,r)},function(n){return n<.5?Math.pow(n*2,r)/2:1-Math.pow((1-n)*2,r)/2})});z.Linear.easeNone=z.none=z.Linear.easeIn;Jr("Elastic",io("in"),io("out"),io());(function(t,e){var r=1/e,n=2*r,i=2.5*r,a=function(l){return l<r?t*l*l:l<n?t*Math.pow(l-1.5/e,2)+.75:l<i?t*(l-=2.25/e)*l+.9375:t*Math.pow(l-2.625/e,2)+.984375};Jr("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);Jr("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Jr("Circ",function(t){return-(Qf(1-t*t)-1)});Jr("Sine",function(t){return t===1?1:-zx(t*Ox)+1});Jr("Back",ao("in"),ao("out"),ao());z.SteppedEase=z.steps=rt.SteppedEase={config:function(e,r){e===void 0&&(e=1);var n=1/e,i=e+(r?0:1),a=r?1:0,s=1-G;return function(l){return((i*Ki(0,s,l)|0)+a)*n}}};Tn.ease=z["quad.out"];Ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Pc+=t+","+t+"Params,"});var Ph=function(e,r){this.id=Dx++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:ih,this.set=r?r.getSetter:Mc},Bi=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,On(this,+r.duration,1,1),this.data=r.data,q&&(this._ctx=q,q.data.push(this)),Ui||Ke.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,On(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Dn(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Ps(this,n),!a._dp||a.parent||ch(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&It(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===G||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ah(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,i):this._repeat?Rn(this._tTime,a)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-G?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?is(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-G?0:this._rts,this.totalTime(Ki(-Math.abs(this._delay),this.totalDuration(),a),i!==!1),Ss(this),Yx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==G&&(this._tTime-=G)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=ee(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&It(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(We(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?is(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Gx);var i=Ne;return Ne=n,Cc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ne=i,this},e.globalTime=function(n){for(var i=this,a=arguments.length?n:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,od(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,od(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(st(this,n),We(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,We(i)),this._dur||(this._zTime=-G),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-G:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-G,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=i&&a<this.endTime(!0)-G)},e.eventCallback=function(n,i,a){var s=this.vars;return arguments.length>1?(i?(s[n]=i,a&&(s[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this,a=i._prom;return new Promise(function(s){var l=le(n)?n:oh,c=function(){var d=i.then;i.then=null,a&&a(),le(l)&&(l=l(i))&&(l.then||l===i)&&(i.then=d),s(l),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){ni(this)},t}();nt(Bi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-G,_prom:0,_ps:!1,_rts:1});var Me=function(t){Kf(e,t);function e(n,i){var a;return n===void 0&&(n={}),a=t.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=We(n.sortChildren),re&&It(n.parent||re,Rt(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&uh(Rt(a),n.scrollTrigger),a}var r=e.prototype;return r.to=function(i,a,s){return gi(0,arguments,this),this},r.from=function(i,a,s){return gi(1,arguments,this),this},r.fromTo=function(i,a,s,l){return gi(2,arguments,this),this},r.set=function(i,a,s){return a.duration=0,a.parent=this,mi(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new he(i,a,st(this,s),1),this},r.call=function(i,a,s){return It(this,he.delayedCall(0,i,a),s)},r.staggerTo=function(i,a,s,l,c,u,d){return s.duration=a,s.stagger=s.stagger||l,s.onComplete=u,s.onCompleteParams=d,s.parent=this,new he(i,s,st(this,c)),this},r.staggerFrom=function(i,a,s,l,c,u,d){return s.runBackwards=1,mi(s).immediateRender=We(s.immediateRender),this.staggerTo(i,a,s,l,c,u,d)},r.staggerFromTo=function(i,a,s,l,c,u,d,p){return l.startAt=s,mi(l).immediateRender=We(l.immediateRender),this.staggerTo(i,a,l,c,u,d,p)},r.render=function(i,a,s){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,d=i<=0?0:ee(i),p=this._zTime<0!=i<0&&(this._initted||!u),m,v,y,g,w,h,f,x,b,_,k,N;if(this!==re&&d>c&&i>=0&&(d=c),d!==this._tTime||s||p){if(l!==this._time&&u&&(d+=this._time-l,i+=this._time-l),m=d,b=this._start,x=this._ts,h=!x,p&&(u||(l=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(k=this._yoyo,w=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(w*100+i,a,s);if(m=ee(d%w),d===c?(g=this._repeat,m=u):(_=ee(d/w),g=~~_,g&&g===_&&(m=u,g--),m>u&&(m=u)),_=Rn(this._tTime,w),!l&&this._tTime&&_!==g&&this._tTime-_*w-this._dur<=0&&(_=g),k&&g&1&&(m=u-m,N=1),g!==_&&!this._lock){var j=k&&_&1,P=j===(k&&g&1);if(g<_&&(j=!j),l=j?0:d%u?u:d,this._lock=1,this.render(l||(N?0:ee(g*w)),a,!u)._lock=0,this._tTime=d,!a&&this.parent&&qe(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1,_=g),l&&l!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,P&&(this._lock=2,l=j?u:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;jh(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(f=Jx(this,ee(l),ee(m)),f&&(d-=m-(m=f._start))),this._tTime=d,this._time=m,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,l=0),!l&&d&&u&&!a&&!_&&(qe(this,"onStart"),this._tTime!==d))return this;if(m>=l&&i>=0)for(v=this._first;v;){if(y=v._next,(v._act||m>=v._start)&&v._ts&&f!==v){if(v.parent!==this)return this.render(i,a,s);if(v.render(v._ts>0?(m-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(m-v._start)*v._ts,a,s),m!==this._time||!this._ts&&!h){f=0,y&&(d+=this._zTime=-G);break}}v=y}else{v=this._last;for(var E=i<0?i:m;v;){if(y=v._prev,(v._act||E<=v._end)&&v._ts&&f!==v){if(v.parent!==this)return this.render(i,a,s);if(v.render(v._ts>0?(E-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(E-v._start)*v._ts,a,s||Ne&&Cc(v)),m!==this._time||!this._ts&&!h){f=0,y&&(d+=this._zTime=E?-G:G);break}}v=y}}if(f&&!a&&(this.pause(),f.render(m>=l?0:-G)._zTime=m>=l?1:-1,this._ts))return this._start=b,Ss(this),this.render(i,a,s);this._onUpdate&&!a&&qe(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&l)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(d===c&&this._ts>0||!d&&this._ts<0)&&yr(this,1),!a&&!(i<0&&!l)&&(d||l||!c)&&(qe(this,d===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,a){var s=this;if(Ht(a)||(a=st(this,a,i)),!(i instanceof Bi)){if(Ee(i))return i.forEach(function(l){return s.add(l,a)}),this;if(we(i))return this.addLabel(i,a);if(le(i))i=he.delayedCall(0,i);else return this}return this!==i?It(this,i,a):this},r.getChildren=function(i,a,s,l){i===void 0&&(i=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),l===void 0&&(l=-ut);for(var c=[],u=this._first;u;)u._start>=l&&(u instanceof he?a&&c.push(u):(s&&c.push(u),i&&c.push.apply(c,u.getChildren(!0,a,s)))),u=u._next;return c},r.getById=function(i){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===i)return a[s]},r.remove=function(i){return we(i)?this.removeLabel(i):le(i)?this.killTweensOf(i):(i.parent===this&&js(this,i),i===this._recent&&(this._recent=this._last),Br(this))},r.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ee(Ke.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},r.addLabel=function(i,a){return this.labels[i]=st(this,a),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,a,s){var l=he.delayedCall(0,a||Fi,s);return l.data="isPause",this._hasPause=1,It(this,l,st(this,i))},r.removePause=function(i){var a=this._first;for(i=st(this,i);a;)a._start===i&&a.data==="isPause"&&yr(a),a=a._next},r.killTweensOf=function(i,a,s){for(var l=this.getTweensOf(i,s),c=l.length;c--;)nr!==l[c]&&l[c].kill(i,a);return this},r.getTweensOf=function(i,a){for(var s=[],l=dt(i),c=this._first,u=Ht(a),d;c;)c instanceof he?Hx(c._targets,l)&&(u?(!nr||c._initted&&c._ts)&&c.globalTime(0)<=a&&c.globalTime(c.totalDuration())>a:!a||c.isActive())&&s.push(c):(d=c.getTweensOf(l,a)).length&&s.push.apply(s,d),c=c._next;return s},r.tweenTo=function(i,a){a=a||{};var s=this,l=st(s,i),c=a,u=c.startAt,d=c.onStart,p=c.onStartParams,m=c.immediateRender,v,y=he.to(s,nt({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:a.duration||Math.abs((l-(u&&"time"in u?u.time:s._time))/s.timeScale())||G,onStart:function(){if(s.pause(),!v){var w=a.duration||Math.abs((l-(u&&"time"in u?u.time:s._time))/s.timeScale());y._dur!==w&&On(y,w,0,1).render(y._time,!0,!0),v=1}d&&d.apply(y,p||[])}},a));return m?y.render(0):y},r.tweenFromTo=function(i,a,s){return this.tweenTo(a,nt({startAt:{time:st(this,i)}},s))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),ld(this,st(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),ld(this,st(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+G)},r.shiftChildren=function(i,a,s){s===void 0&&(s=0);var l=this._first,c=this.labels,u;for(i=ee(i);l;)l._start>=s&&(l._start+=i,l._end+=i),l=l._next;if(a)for(u in c)c[u]>=s&&(c[u]+=i);return Br(this)},r.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return t.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Br(this)},r.totalDuration=function(i){var a=0,s=this,l=s._last,c=ut,u,d,p;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(p=s.parent;l;)u=l._prev,l._dirty&&l.totalDuration(),d=l._start,d>c&&s._sort&&l._ts&&!s._lock?(s._lock=1,It(s,l,d-l._delay,1)._lock=0):c=d,d<0&&l._ts&&(a-=d,(!p&&!s._dp||p&&p.smoothChildTiming)&&(s._start+=ee(d/s._ts),s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),c=0),l._end>a&&l._ts&&(a=l._end),l=u;On(s,s===re&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(re._ts&&(ah(re,is(i,re)),nh=Ke.frame),Ke.frame>=id){id+=et.autoSleep||120;var a=re._first;if((!a||!a._ts)&&et.autoSleep&&Ke._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Ke.sleep()}}},e}(Bi);nt(Me.prototype,{_lock:0,_hasPause:0,_forcing:0});var hv=function(e,r,n,i,a,s,l){var c=new Ge(this._pt,e,r,0,1,Mh,null,a),u=0,d=0,p,m,v,y,g,w,h,f;for(c.b=n,c.e=i,n+="",i+="",(h=~i.indexOf("random("))&&(i=Li(i)),s&&(f=[n,i],s(f,e,r),n=f[0],i=f[1]),m=n.match(to)||[];p=to.exec(i);)y=p[0],g=i.substring(u,p.index),v?v=(v+1)%5:g.substr(-5)==="rgba("&&(v=1),y!==m[d++]&&(w=parseFloat(m[d-1])||0,c._pt={_next:c._pt,p:g||d===1?g:",",s:w,c:y.charAt(1)==="="?_n(w,y)-w:parseFloat(y)-w,m:v&&v<4?Math.round:0},u=to.lastIndex);return c.c=u<i.length?i.substring(u,i.length):"",c.fp=l,(Zf.test(i)||h)&&(c.e=0),this._pt=c,c},Ec=function(e,r,n,i,a,s,l,c,u,d){le(i)&&(i=i(a||0,e,s));var p=e[r],m=n!=="get"?n:le(p)?u?e[r.indexOf("set")||!le(e["get"+r.substr(3)])?r:"get"+r.substr(3)](u):e[r]():p,v=le(p)?u?yv:Ah:Tc,y;if(we(i)&&(~i.indexOf("random(")&&(i=Li(i)),i.charAt(1)==="="&&(y=_n(m,i)+(Ce(m)||0),(y||y===0)&&(i=y))),!d||m!==i||hl)return!isNaN(m*i)&&i!==""?(y=new Ge(this._pt,e,r,+m||0,i-(m||0),typeof p=="boolean"?bv:Th,0,v),u&&(y.fp=u),l&&y.modifier(l,this,e),this._pt=y):(!p&&!(r in e)&&jc(r,i),hv.call(this,e,r,m,i,v,c||et.stringFilter,u))},mv=function(e,r,n,i,a){if(le(e)&&(e=xi(e,a,r,n,i)),!Tt(e)||e.style&&e.nodeType||Ee(e)||qf(e))return we(e)?xi(e,a,r,n,i):e;var s={},l;for(l in e)s[l]=xi(e[l],a,r,n,i);return s},Ih=function(e,r,n,i,a,s){var l,c,u,d;if(Ye[e]&&(l=new Ye[e]).init(a,l.rawVars?r[e]:mv(r[e],i,a,s,n),n,i,s)!==!1&&(n._pt=c=new Ge(n._pt,a,e,0,1,l.render,l,0,l.priority),n!==mn))for(u=n._ptLookup[n._targets.indexOf(a)],d=l._props.length;d--;)u[l._props[d]]=c;return l},nr,hl,Ac=function t(e,r,n){var i=e.vars,a=i.ease,s=i.startAt,l=i.immediateRender,c=i.lazy,u=i.onUpdate,d=i.runBackwards,p=i.yoyoEase,m=i.keyframes,v=i.autoRevert,y=e._dur,g=e._startAt,w=e._targets,h=e.parent,f=h&&h.data==="nested"?h.vars.targets:w,x=e._overwrite==="auto"&&!bc,b=e.timeline,_,k,N,j,P,E,D,L,U,pe,fe,K,se;if(b&&(!m||!a)&&(a="none"),e._ease=Wr(a,Tn.ease),e._yEase=p?Nh(Wr(p===!0?a:p,Tn.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!b&&!!i.runBackwards,!b||m&&!i.stagger){if(L=w[0]?Ur(w[0]).harness:0,K=L&&i[L.prop],_=ns(i,Sc),g&&(g._zTime<0&&g.progress(1),r<0&&d&&l&&!v?g.render(-1,!0):g.revert(d&&y?Pa:Vx),g._lazy=0),s){if(yr(e._startAt=he.set(w,nt({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&We(c),startAt:null,delay:0,onUpdate:u&&function(){return qe(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Ne||!l&&!v)&&e._startAt.revert(Pa),l&&y&&r<=0&&n<=0){r&&(e._zTime=r);return}}else if(d&&y&&!g){if(r&&(l=!1),N=nt({overwrite:!1,data:"isFromStart",lazy:l&&!g&&We(c),immediateRender:l,stagger:0,parent:h},_),K&&(N[L.prop]=K),yr(e._startAt=he.set(w,N)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Ne?e._startAt.revert(Pa):e._startAt.render(-1,!0)),e._zTime=r,!l)t(e._startAt,G,G);else if(!r)return}for(e._pt=e._ptCache=0,c=y&&We(c)||c&&!y,k=0;k<w.length;k++){if(P=w[k],D=P._gsap||Ic(w)[k]._gsap,e._ptLookup[k]=pe={},ll[D.id]&&mr.length&&rs(),fe=f===w?k:f.indexOf(P),L&&(U=new L).init(P,K||_,e,fe,f)!==!1&&(e._pt=j=new Ge(e._pt,P,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(C){pe[C]=j}),U.priority&&(E=1)),!L||K)for(N in _)Ye[N]&&(U=Ih(N,_,e,fe,P,f))?U.priority&&(E=1):pe[N]=j=Ec.call(e,P,N,"get",_[N],fe,f,0,i.stringFilter);e._op&&e._op[k]&&e.kill(P,e._op[k]),x&&e._pt&&(nr=e,re.killTweensOf(P,pe,e.globalTime(r)),se=!e.parent,nr=0),e._pt&&c&&(ll[D.id]=1)}E&&Rh(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!se,m&&r<=0&&b.render(ut,!0,!0)},gv=function(e,r,n,i,a,s,l,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[r],d,p,m,v;if(!u)for(u=e._ptCache[r]=[],m=e._ptLookup,v=e._targets.length;v--;){if(d=m[v][r],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==r&&d.fp!==r;)d=d._next;if(!d)return hl=1,e.vars[r]="+=0",Ac(e,l),hl=0,c?zi(r+" not eligible for reset"):1;u.push(d)}for(v=u.length;v--;)p=u[v],d=p._pt||p,d.s=(i||i===0)&&!a?i:d.s+(i||0)+s*d.c,d.c=n-d.s,p.e&&(p.e=ce(n)+Ce(p.e)),p.b&&(p.b=d.s+Ce(p.b))},xv=function(e,r){var n=e[0]?Ur(e[0]).harness:0,i=n&&n.aliases,a,s,l,c;if(!i)return r;a=Mn({},r);for(s in i)if(s in a)for(c=i[s].split(","),l=c.length;l--;)a[c[l]]=a[s];return a},vv=function(e,r,n,i){var a=r.ease||i||"power1.inOut",s,l;if(Ee(r))l=n[e]||(n[e]=[]),r.forEach(function(c,u){return l.push({t:u/(r.length-1)*100,v:c,e:a})});else for(s in r)l=n[s]||(n[s]=[]),s==="ease"||l.push({t:parseFloat(e),v:r[s],e:a})},xi=function(e,r,n,i,a){return le(e)?e.call(r,n,i,a):we(e)&&~e.indexOf("random(")?Li(e):e},Ch=Pc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Eh={};Ve(Ch+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Eh[t]=1});var he=function(t){Kf(e,t);function e(n,i,a,s){var l;typeof i=="number"&&(a.duration=i,i=a,a=null),l=t.call(this,s?i:mi(i))||this;var c=l.vars,u=c.duration,d=c.delay,p=c.immediateRender,m=c.stagger,v=c.overwrite,y=c.keyframes,g=c.defaults,w=c.scrollTrigger,h=c.yoyoEase,f=i.parent||re,x=(Ee(n)||qf(n)?Ht(n[0]):"length"in i)?[n]:dt(n),b,_,k,N,j,P,E,D;if(l._targets=x.length?Ic(x):zi("GSAP target "+n+" not found. https://gsap.com",!et.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=v,y||m||ha(u)||ha(d)){if(i=l.vars,b=l.timeline=new Me({data:"nested",defaults:g||{},targets:f&&f.data==="nested"?f.vars.targets:x}),b.kill(),b.parent=b._dp=Rt(l),b._start=0,m||ha(u)||ha(d)){if(N=x.length,E=m&&hh(m),Tt(m))for(j in m)~Ch.indexOf(j)&&(D||(D={}),D[j]=m[j]);for(_=0;_<N;_++)k=ns(i,Eh),k.stagger=0,h&&(k.yoyoEase=h),D&&Mn(k,D),P=x[_],k.duration=+xi(u,Rt(l),_,P,x),k.delay=(+xi(d,Rt(l),_,P,x)||0)-l._delay,!m&&N===1&&k.delay&&(l._delay=d=k.delay,l._start+=d,k.delay=0),b.to(P,k,E?E(_,P,x):0),b._ease=z.none;b.duration()?u=d=0:l.timeline=0}else if(y){mi(nt(b.vars.defaults,{ease:"none"})),b._ease=Wr(y.ease||i.ease||"none");var L=0,U,pe,fe;if(Ee(y))y.forEach(function(K){return b.to(x,K,">")}),b.duration();else{k={};for(j in y)j==="ease"||j==="easeEach"||vv(j,y[j],k,y.easeEach);for(j in k)for(U=k[j].sort(function(K,se){return K.t-se.t}),L=0,_=0;_<U.length;_++)pe=U[_],fe={ease:pe.e,duration:(pe.t-(_?U[_-1].t:0))/100*u},fe[j]=pe.v,b.to(x,fe,L),L+=fe.duration;b.duration()<u&&b.to({},{duration:u-b.duration()})}}u||l.duration(u=b.duration())}else l.timeline=0;return v===!0&&!bc&&(nr=Rt(l),re.killTweensOf(x),nr=0),It(f,Rt(l),a),i.reversed&&l.reverse(),i.paused&&l.paused(!0),(p||!u&&!y&&l._start===ee(f._time)&&We(p)&&Kx(Rt(l))&&f.data!=="nested")&&(l._tTime=-G,l.render(Math.max(0,-d)||0)),w&&uh(Rt(l),w),l}var r=e.prototype;return r.render=function(i,a,s){var l=this._time,c=this._tDur,u=this._dur,d=i<0,p=i>c-G&&!d?c:i<G?0:i,m,v,y,g,w,h,f,x,b;if(!u)qx(this,i,a,s);else if(p!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(m=p,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+i,a,s);if(m=ee(p%g),p===c?(y=this._repeat,m=u):(w=ee(p/g),y=~~w,y&&y===w?(m=u,y--):m>u&&(m=u)),h=this._yoyo&&y&1,h&&(b=this._yEase,m=u-m),w=Rn(this._tTime,g),m===l&&!s&&this._initted&&y===w)return this._tTime=p,this;y!==w&&(x&&this._yEase&&jh(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&m!==g&&this._initted&&(this._lock=s=1,this.render(ee(g*y),!0).invalidate()._lock=0))}if(!this._initted){if(dh(this,d?i:m,s,a,p))return this._tTime=0,this;if(l!==this._time&&!(s&&this.vars.repeatRefresh&&y!==w))return this;if(u!==this._dur)return this.render(i,a,s)}if(this._tTime=p,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=f=(b||this._ease)(m/u),this._from&&(this.ratio=f=1-f),!l&&p&&!a&&!w&&(qe(this,"onStart"),this._tTime!==p))return this;for(v=this._pt;v;)v.r(f,v.d),v=v._next;x&&x.render(i<0?i:x._dur*x._ease(m/this._dur),a,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(d&&cl(this,i,a,s),qe(this,"onUpdate")),this._repeat&&y!==w&&this.vars.onRepeat&&!a&&this.parent&&qe(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&cl(this,i,!0,!0),(i||!u)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&yr(this,1),!a&&!(d&&!l)&&(p||l||h)&&(qe(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},r.resetTo=function(i,a,s,l,c){Ui||Ke.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Ac(this,u),d=this._ease(u/this._dur),gv(this,i,a,s,l,d,u,c)?this.resetTo(i,a,s,l,1):(Ps(this,0),this.parent||lh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?ni(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ne),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,nr&&nr.vars.overwrite!==!0)._first||ni(this),this.parent&&s!==this.timeline.totalDuration()&&On(this,this._dur*this.timeline._tDur/s,0,1),this}var l=this._targets,c=i?dt(i):l,u=this._ptLookup,d=this._pt,p,m,v,y,g,w,h;if((!a||a==="all")&&Xx(l,c))return a==="all"&&(this._pt=0),ni(this);for(p=this._op=this._op||[],a!=="all"&&(we(a)&&(g={},Ve(a,function(f){return g[f]=1}),a=g),a=xv(l,a)),h=l.length;h--;)if(~c.indexOf(l[h])){m=u[h],a==="all"?(p[h]=a,y=m,v={}):(v=p[h]=p[h]||{},y=a);for(g in y)w=m&&m[g],w&&((!("kill"in w.d)||w.d.kill(g)===!0)&&js(this,w,"_pt"),delete m[g]),v!=="all"&&(v[g]=1)}return this._initted&&!this._pt&&d&&ni(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return gi(1,arguments)},e.delayedCall=function(i,a,s,l){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:l})},e.fromTo=function(i,a,s){return gi(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,s){return re.killTweensOf(i,a,s)},e}(Bi);nt(he.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ve("staggerTo,staggerFrom,staggerFromTo",function(t){he[t]=function(){var e=new Me,r=dl.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var Tc=function(e,r,n){return e[r]=n},Ah=function(e,r,n){return e[r](n)},yv=function(e,r,n,i){return e[r](i.fp,n)},wv=function(e,r,n){return e.setAttribute(r,n)},Mc=function(e,r){return le(e[r])?Ah:_c(e[r])&&e.setAttribute?wv:Tc},Th=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},bv=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},Mh=function(e,r){var n=r._pt,i="";if(!e&&r.b)i=r.b;else if(e===1&&r.e)i=r.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=r.c}r.set(r.t,r.p,i,r)},Rc=function(e,r){for(var n=r._pt;n;)n.r(e,n.d),n=n._next},_v=function(e,r,n,i){for(var a=this._pt,s;a;)s=a._next,a.p===i&&a.modifier(e,r,n),a=s},kv=function(e){for(var r=this._pt,n,i;r;)i=r._next,r.p===e&&!r.op||r.op===e?js(this,r,"_pt"):r.dep||(n=1),r=i;return!n},Nv=function(e,r,n,i){i.mSet(e,r,i.m.call(i.tween,n,i.mt),i)},Rh=function(e){for(var r=e._pt,n,i,a,s;r;){for(n=r._next,i=a;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:s)?r._prev._next=r:a=r,(r._next=i)?i._prev=r:s=r,r=n}e._pt=a},Ge=function(){function t(r,n,i,a,s,l,c,u,d){this.t=n,this.s=a,this.c=s,this.p=i,this.r=l||Th,this.d=c||this,this.set=u||Tc,this.pr=d||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(n,i,a){this.mSet=this.mSet||this.set,this.set=Nv,this.m=n,this.mt=a,this.tween=i},t}();Ve(Pc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return Sc[t]=1});rt.TweenMax=rt.TweenLite=he;rt.TimelineLite=rt.TimelineMax=Me;re=new Me({sortChildren:!1,defaults:Tn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});et.stringFilter=kh;var Vr=[],Ca={},jv=[],ud=0,Sv=0,so=function(e){return(Ca[e]||jv).map(function(r){return r()})},ml=function(){var e=Date.now(),r=[];e-ud>2&&(so("matchMediaInit"),Vr.forEach(function(n){var i=n.queries,a=n.conditions,s,l,c,u;for(l in i)s=St.matchMedia(i[l]).matches,s&&(c=1),s!==a[l]&&(a[l]=s,u=1);u&&(n.revert(),c&&r.push(n))}),so("matchMediaRevert"),r.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ud=e,so("matchMedia"))},Oh=function(){function t(r,n){this.selector=n&&pl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Sv++,r&&this.add(r)}var e=t.prototype;return e.add=function(n,i,a){le(n)&&(a=i,i=n,n=le);var s=this,l=function(){var u=q,d=s.selector,p;return u&&u!==s&&u.data.push(s),a&&(s.selector=pl(a)),q=s,p=i.apply(s,arguments),le(p)&&s._r.push(p),q=u,s.selector=d,s.isReverted=!1,p};return s.last=l,n===le?l(s,function(c){return s.add(null,c)}):n?s[n]=l:l},e.ignore=function(n){var i=q;q=null,n(this),q=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof t?n.push.apply(n,i.getTweens()):i instanceof he&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var a=this;if(n?function(){for(var l=a.getTweens(),c=a.data.length,u;c--;)u=a.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(d){return l.splice(l.indexOf(d),1)}));for(l.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,p){return p.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=a.data.length;c--;)u=a.data[c],u instanceof Me?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof he)&&u.revert&&u.revert(n);a._r.forEach(function(d){return d(n,a)}),a.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),i)for(var s=Vr.length;s--;)Vr[s].id===this.id&&Vr.splice(s,1)},e.revert=function(n){this.kill(n||{})},t}(),Pv=function(){function t(r){this.contexts=[],this.scope=r,q&&q.data.push(this)}var e=t.prototype;return e.add=function(n,i,a){Tt(n)||(n={matches:n});var s=new Oh(0,a||this.scope),l=s.conditions={},c,u,d;q&&!s.selector&&(s.selector=q.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(u in n)u==="all"?d=1:(c=St.matchMedia(n[u]),c&&(Vr.indexOf(s)<0&&Vr.push(s),(l[u]=c.matches)&&(d=1),c.addListener?c.addListener(ml):c.addEventListener("change",ml)));return d&&i(s,function(p){return s.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},t}(),as={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(function(i){return wh(i)})},timeline:function(e){return new Me(e)},getTweensOf:function(e,r){return re.getTweensOf(e,r)},getProperty:function(e,r,n,i){we(e)&&(e=dt(e)[0]);var a=Ur(e||{}).get,s=n?oh:sh;return n==="native"&&(n=""),e&&(r?s((Ye[r]&&Ye[r].get||a)(e,r,n,i)):function(l,c,u){return s((Ye[l]&&Ye[l].get||a)(e,l,c,u))})},quickSetter:function(e,r,n){if(e=dt(e),e.length>1){var i=e.map(function(d){return $e.quickSetter(d,r,n)}),a=i.length;return function(d){for(var p=a;p--;)i[p](d)}}e=e[0]||{};var s=Ye[r],l=Ur(e),c=l.harness&&(l.harness.aliases||{})[r]||r,u=s?function(d){var p=new s;mn._pt=0,p.init(e,n?d+n:d,mn,0,[e]),p.render(1,p),mn._pt&&Rc(1,mn)}:l.set(e,c);return s?u:function(d){return u(e,c,n?d+n:d,l,1)}},quickTo:function(e,r,n){var i,a=$e.to(e,nt((i={},i[r]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),s=function(c,u,d){return a.resetTo(r,c,u,d)};return s.tween=a,s},isTweening:function(e){return re.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wr(e.ease,Tn.ease)),ad(Tn,e||{})},config:function(e){return ad(et,e||{})},registerEffect:function(e){var r=e.name,n=e.effect,i=e.plugins,a=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(l){return l&&!Ye[l]&&!rt[l]&&zi(r+" effect requires "+l+" plugin.")}),ro[r]=function(l,c,u){return n(dt(l),nt(c||{},a),u)},s&&(Me.prototype[r]=function(l,c,u){return this.add(ro[r](l,Tt(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,r){z[e]=Wr(r)},parseEase:function(e,r){return arguments.length?Wr(e,r):z},getById:function(e){return re.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var n=new Me(e),i,a;for(n.smoothChildTiming=We(e.smoothChildTiming),re.remove(n),n._dp=0,n._time=n._tTime=re._time,i=re._first;i;)a=i._next,(r||!(!i._dur&&i instanceof he&&i.vars.onComplete===i._targets[0]))&&It(n,i,i._start-i._delay),i=a;return It(re,n,0),n},context:function(e,r){return e?new Oh(e,r):q},matchMedia:function(e){return new Pv(e)},matchMediaRefresh:function(){return Vr.forEach(function(e){var r=e.conditions,n,i;for(i in r)r[i]&&(r[i]=!1,n=1);n&&e.revert()})||ml()},addEventListener:function(e,r){var n=Ca[e]||(Ca[e]=[]);~n.indexOf(r)||n.push(r)},removeEventListener:function(e,r){var n=Ca[e],i=n&&n.indexOf(r);i>=0&&n.splice(i,1)},utils:{wrap:av,wrapYoyo:sv,distribute:hh,random:gh,snap:mh,normalize:iv,getUnit:Ce,clamp:ev,splitColor:bh,toArray:dt,selector:pl,mapRange:vh,pipe:rv,unitize:nv,interpolate:ov,shuffle:fh},install:th,effects:ro,ticker:Ke,updateRoot:Me.updateRoot,plugins:Ye,globalTimeline:re,core:{PropTween:Ge,globals:rh,Tween:he,Timeline:Me,Animation:Bi,getCache:Ur,_removeLinkedListItem:js,reverting:function(){return Ne},context:function(e){return e&&q&&(q.data.push(e),e._ctx=q),q},suppressOverwrites:function(e){return bc=e}}};Ve("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return as[t]=he[t]});Ke.add(Me.updateRoot);mn=as.to({},{duration:0});var Iv=function(e,r){for(var n=e._pt;n&&n.p!==r&&n.op!==r&&n.fp!==r;)n=n._next;return n},Cv=function(e,r){var n=e._targets,i,a,s;for(i in r)for(a=n.length;a--;)s=e._ptLookup[a][i],s&&(s=s.d)&&(s._pt&&(s=Iv(s,i)),s&&s.modifier&&s.modifier(r[i],e,n[a],i))},oo=function(e,r){return{name:e,headless:1,rawVars:1,init:function(i,a,s){s._onInit=function(l){var c,u;if(we(a)&&(c={},Ve(a,function(d){return c[d]=1}),a=c),r){c={};for(u in a)c[u]=r(a[u]);a=c}Cv(l,a)}}}},$e=as.registerPlugin({name:"attr",init:function(e,r,n,i,a){var s,l,c;this.tween=n;for(s in r)c=e.getAttribute(s)||"",l=this.add(e,"setAttribute",(c||0)+"",r[s],i,a,0,0,s),l.op=s,l.b=c,this._props.push(s)},render:function(e,r){for(var n=r._pt;n;)Ne?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,r){for(var n=r.length;n--;)this.add(e,n,e[n]||0,r[n],0,0,0,0,0,1)}},oo("roundProps",fl),oo("modifiers"),oo("snap",mh))||as;he.version=Me.version=$e.version="3.14.2";eh=1;kc()&&Dn();z.Power0;z.Power1;z.Power2;z.Power3;z.Power4;z.Linear;z.Quad;z.Cubic;z.Quart;z.Quint;z.Strong;z.Elastic;z.Back;z.SteppedEase;z.Bounce;z.Sine;z.Expo;z.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dd,ir,kn,Oc,zr,pd,Dc,Ev=function(){return typeof window<"u"},$t={},Mr=180/Math.PI,Nn=Math.PI/180,en=Math.atan2,fd=1e8,zc=/([A-Z])/g,Av=/(left|right|width|margin|padding|x)/i,Tv=/[\s,\(]\S/,Ct={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gl=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},Mv=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},Rv=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},Ov=function(e,r){return r.set(r.t,r.p,e===1?r.e:e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},Dv=function(e,r){var n=r.s+r.c*e;r.set(r.t,r.p,~~(n+(n<0?-.5:.5))+r.u,r)},Dh=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},zh=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},zv=function(e,r,n){return e.style[r]=n},Fv=function(e,r,n){return e.style.setProperty(r,n)},Lv=function(e,r,n){return e._gsap[r]=n},Uv=function(e,r,n){return e._gsap.scaleX=e._gsap.scaleY=n},Bv=function(e,r,n,i,a){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(a,s)},Wv=function(e,r,n,i,a){var s=e._gsap;s[r]=n,s.renderTransform(a,s)},ne="transform",He=ne+"Origin",Vv=function t(e,r){var n=this,i=this.target,a=i.style,s=i._gsap;if(e in $t&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Ct[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=Dt(i,l)}):this.tfm[e]=s.x?s[e]:Dt(i,e),e===He&&(this.tfm.zOrigin=s.zOrigin);else return Ct.transform.split(",").forEach(function(l){return t.call(n,l,r)});if(this.props.indexOf(ne)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(He,r,"")),e=ne}(a||r)&&this.props.push(e,r,a[e])},Fh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Gv=function(){var e=this.props,r=this.target,n=r.style,i=r._gsap,a,s;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?r[e[a]](e[a+2]):r[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(zc,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),a=Dc(),(!a||!a.isStart)&&!n[ne]&&(Fh(n),i.zOrigin&&n[He]&&(n[He]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lh=function(e,r){var n={target:e,props:[],revert:Gv,save:Vv};return e._gsap||$e.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(i){return n.save(i)}),n},Uh,xl=function(e,r){var n=ir.createElementNS?ir.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ir.createElement(e);return n&&n.style?n:ir.createElement(e)},Je=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(zc,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,zn(r)||r,1)||""},hd="O,Moz,ms,Ms,Webkit".split(","),zn=function(e,r,n){var i=r||zr,a=i.style,s=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(hd[s]+e in a););return s<0?null:(s===3?"ms":s>=0?hd[s]:"")+e},vl=function(){Ev()&&window.document&&(dd=window,ir=dd.document,kn=ir.documentElement,zr=xl("div")||{style:{}},xl("div"),ne=zn(ne),He=ne+"Origin",zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Uh=!!zn("perspective"),Dc=$e.core.reverting,Oc=1)},md=function(e){var r=e.ownerSVGElement,n=xl("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),a;i.style.display="block",n.appendChild(i),kn.appendChild(n);try{a=i.getBBox()}catch{}return n.removeChild(i),kn.removeChild(n),a},gd=function(e,r){for(var n=r.length;n--;)if(e.hasAttribute(r[n]))return e.getAttribute(r[n])},Bh=function(e){var r,n;try{r=e.getBBox()}catch{r=md(e),n=1}return r&&(r.width||r.height)||n||(r=md(e)),r&&!r.width&&!r.x&&!r.y?{x:+gd(e,["x","cx","x1"])||0,y:+gd(e,["y","cy","y1"])||0,width:0,height:0}:r},Wh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Bh(e))},wr=function(e,r){if(r){var n=e.style,i;r in $t&&r!==He&&(r=ne),n.removeProperty?(i=r.substr(0,2),(i==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),n.removeProperty(i==="--"?r:r.replace(zc,"-$1").toLowerCase())):n.removeAttribute(r)}},ar=function(e,r,n,i,a,s){var l=new Ge(e._pt,r,n,0,1,s?zh:Dh);return e._pt=l,l.b=i,l.e=a,e._props.push(n),l},xd={deg:1,rad:1,turn:1},Hv={grid:1,flex:1},br=function t(e,r,n,i){var a=parseFloat(n)||0,s=(n+"").trim().substr((a+"").length)||"px",l=zr.style,c=Av.test(r),u=e.tagName.toLowerCase()==="svg",d=(u?"client":"offset")+(c?"Width":"Height"),p=100,m=i==="px",v=i==="%",y,g,w,h;if(i===s||!a||xd[i]||xd[s])return a;if(s!=="px"&&!m&&(a=t(e,r,n,"px")),h=e.getCTM&&Wh(e),(v||s==="%")&&($t[r]||~r.indexOf("adius")))return y=h?e.getBBox()[c?"width":"height"]:e[d],ce(v?a/y*p:a/100*y);if(l[c?"width":"height"]=p+(m?s:i),g=i!=="rem"&&~r.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ir||!g.appendChild)&&(g=ir.body),w=g._gsap,w&&v&&w.width&&c&&w.time===Ke.time&&!w.uncache)return ce(a/w.width*p);if(v&&(r==="height"||r==="width")){var f=e.style[r];e.style[r]=p+i,y=e[d],f?e.style[r]=f:wr(e,r)}else(v||s==="%")&&!Hv[Je(g,"display")]&&(l.position=Je(e,"position")),g===e&&(l.position="static"),g.appendChild(zr),y=zr[d],g.removeChild(zr),l.position="absolute";return c&&v&&(w=Ur(g),w.time=Ke.time,w.width=g[d]),ce(m?y*a/p:y&&a?p/y*a:0)},Dt=function(e,r,n,i){var a;return Oc||vl(),r in Ct&&r!=="transform"&&(r=Ct[r],~r.indexOf(",")&&(r=r.split(",")[0])),$t[r]&&r!=="transform"?(a=Vi(e,i),a=r!=="transformOrigin"?a[r]:a.svg?a.origin:os(Je(e,He))+" "+a.zOrigin+"px"):(a=e.style[r],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=ss[r]&&ss[r](e,r,n)||Je(e,r)||ih(e,r)||(r==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?br(e,r,a,n)+n:a},$v=function(e,r,n,i){if(!n||n==="none"){var a=zn(r,e,1),s=a&&Je(e,a,1);s&&s!==n?(r=a,n=s):r==="borderColor"&&(n=Je(e,"borderTopColor"))}var l=new Ge(this._pt,e.style,r,0,1,Mh),c=0,u=0,d,p,m,v,y,g,w,h,f,x,b,_;if(l.b=n,l.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Je(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[r],e.style[r]=i,i=Je(e,r)||i,g?e.style[r]=g:wr(e,r)),d=[n,i],kh(d),n=d[0],i=d[1],m=n.match(hn)||[],_=i.match(hn)||[],_.length){for(;p=hn.exec(i);)w=p[0],f=i.substring(c,p.index),y?y=(y+1)%5:(f.substr(-5)==="rgba("||f.substr(-5)==="hsla(")&&(y=1),w!==(g=m[u++]||"")&&(v=parseFloat(g)||0,b=g.substr((v+"").length),w.charAt(1)==="="&&(w=_n(v,w)+b),h=parseFloat(w),x=w.substr((h+"").length),c=hn.lastIndex-x.length,x||(x=x||et.units[r]||b,c===i.length&&(i+=x,l.e+=x)),b!==x&&(v=br(e,r,g,x)||0),l._pt={_next:l._pt,p:f||u===1?f:",",s:v,c:h-v,m:y&&y<4||r==="zIndex"?Math.round:0});l.c=c<i.length?i.substring(c,i.length):""}else l.r=r==="display"&&i==="none"?zh:Dh;return Zf.test(i)&&(l.e=0),this._pt=l,l},vd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xv=function(e){var r=e.split(" "),n=r[0],i=r[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),r[0]=vd[n]||n,r[1]=vd[i]||i,r.join(" ")},Yv=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var n=r.t,i=n.style,a=r.u,s=n._gsap,l,c,u;if(a==="all"||a===!0)i.cssText="",c=1;else for(a=a.split(","),u=a.length;--u>-1;)l=a[u],$t[l]&&(c=1,l=l==="transformOrigin"?He:ne),wr(n,l);c&&(wr(n,ne),s&&(s.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Vi(n,1),s.uncache=1,Fh(i)))}},ss={clearProps:function(e,r,n,i,a){if(a.data!=="isFromStart"){var s=e._pt=new Ge(e._pt,r,n,0,0,Yv);return s.u=i,s.pr=-10,s.tween=a,e._props.push(n),1}}},Wi=[1,0,0,1,0,0],Vh={},Gh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yd=function(e){var r=Je(e,ne);return Gh(r)?Wi:r.substr(7).match(Jf).map(ce)},Fc=function(e,r){var n=e._gsap||Ur(e),i=e.style,a=yd(e),s,l,c,u;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,a=[c.a,c.b,c.c,c.d,c.e,c.f],a.join(",")==="1,0,0,1,0,0"?Wi:a):(a===Wi&&!e.offsetParent&&e!==kn&&!n.svg&&(c=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,l=e.nextElementSibling,kn.appendChild(e)),a=yd(e),c?i.display=c:wr(e,"display"),u&&(l?s.insertBefore(e,l):s?s.appendChild(e):kn.removeChild(e))),r&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},yl=function(e,r,n,i,a,s){var l=e._gsap,c=a||Fc(e,!0),u=l.xOrigin||0,d=l.yOrigin||0,p=l.xOffset||0,m=l.yOffset||0,v=c[0],y=c[1],g=c[2],w=c[3],h=c[4],f=c[5],x=r.split(" "),b=parseFloat(x[0])||0,_=parseFloat(x[1])||0,k,N,j,P;n?c!==Wi&&(N=v*w-y*g)&&(j=b*(w/N)+_*(-g/N)+(g*f-w*h)/N,P=b*(-y/N)+_*(v/N)-(v*f-y*h)/N,b=j,_=P):(k=Bh(e),b=k.x+(~x[0].indexOf("%")?b/100*k.width:b),_=k.y+(~(x[1]||x[0]).indexOf("%")?_/100*k.height:_)),i||i!==!1&&l.smooth?(h=b-u,f=_-d,l.xOffset=p+(h*v+f*g)-h,l.yOffset=m+(h*y+f*w)-f):l.xOffset=l.yOffset=0,l.xOrigin=b,l.yOrigin=_,l.smooth=!!i,l.origin=r,l.originIsAbsolute=!!n,e.style[He]="0px 0px",s&&(ar(s,l,"xOrigin",u,b),ar(s,l,"yOrigin",d,_),ar(s,l,"xOffset",p,l.xOffset),ar(s,l,"yOffset",m,l.yOffset)),e.setAttribute("data-svg-origin",b+" "+_)},Vi=function(e,r){var n=e._gsap||new Ph(e);if("x"in n&&!r&&!n.uncache)return n;var i=e.style,a=n.scaleX<0,s="px",l="deg",c=getComputedStyle(e),u=Je(e,He)||"0",d,p,m,v,y,g,w,h,f,x,b,_,k,N,j,P,E,D,L,U,pe,fe,K,se,C,M,R,W,H,Pr,be,mt;return d=p=m=g=w=h=f=x=b=0,v=y=1,n.svg=!!(e.getCTM&&Wh(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ne]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ne]!=="none"?c[ne]:"")),i.scale=i.rotate=i.translate="none"),N=Fc(e,n.svg),n.svg&&(n.uncache?(C=e.getBBox(),u=n.xOrigin-C.x+"px "+(n.yOrigin-C.y)+"px",se=""):se=!r&&e.getAttribute("data-svg-origin"),yl(e,se||u,!!se||n.originIsAbsolute,n.smooth!==!1,N)),_=n.xOrigin||0,k=n.yOrigin||0,N!==Wi&&(D=N[0],L=N[1],U=N[2],pe=N[3],d=fe=N[4],p=K=N[5],N.length===6?(v=Math.sqrt(D*D+L*L),y=Math.sqrt(pe*pe+U*U),g=D||L?en(L,D)*Mr:0,f=U||pe?en(U,pe)*Mr+g:0,f&&(y*=Math.abs(Math.cos(f*Nn))),n.svg&&(d-=_-(_*D+k*U),p-=k-(_*L+k*pe))):(mt=N[6],Pr=N[7],R=N[8],W=N[9],H=N[10],be=N[11],d=N[12],p=N[13],m=N[14],j=en(mt,H),w=j*Mr,j&&(P=Math.cos(-j),E=Math.sin(-j),se=fe*P+R*E,C=K*P+W*E,M=mt*P+H*E,R=fe*-E+R*P,W=K*-E+W*P,H=mt*-E+H*P,be=Pr*-E+be*P,fe=se,K=C,mt=M),j=en(-U,H),h=j*Mr,j&&(P=Math.cos(-j),E=Math.sin(-j),se=D*P-R*E,C=L*P-W*E,M=U*P-H*E,be=pe*E+be*P,D=se,L=C,U=M),j=en(L,D),g=j*Mr,j&&(P=Math.cos(j),E=Math.sin(j),se=D*P+L*E,C=fe*P+K*E,L=L*P-D*E,K=K*P-fe*E,D=se,fe=C),w&&Math.abs(w)+Math.abs(g)>359.9&&(w=g=0,h=180-h),v=ce(Math.sqrt(D*D+L*L+U*U)),y=ce(Math.sqrt(K*K+mt*mt)),j=en(fe,K),f=Math.abs(j)>2e-4?j*Mr:0,b=be?1/(be<0?-be:be):0),n.svg&&(se=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Gh(Je(e,ne)),se&&e.setAttribute("transform",se))),Math.abs(f)>90&&Math.abs(f)<270&&(a?(v*=-1,f+=g<=0?180:-180,g+=g<=0?180:-180):(y*=-1,f+=f<=0?180:-180)),r=r||n.uncache,n.x=d-((n.xPercent=d&&(!r&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=p-((n.yPercent=p&&(!r&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=m+s,n.scaleX=ce(v),n.scaleY=ce(y),n.rotation=ce(g)+l,n.rotationX=ce(w)+l,n.rotationY=ce(h)+l,n.skewX=f+l,n.skewY=x+l,n.transformPerspective=b+s,(n.zOrigin=parseFloat(u.split(" ")[2])||!r&&n.zOrigin||0)&&(i[He]=os(u)),n.xOffset=n.yOffset=0,n.force3D=et.force3D,n.renderTransform=n.svg?Qv:Uh?Hh:Kv,n.uncache=0,n},os=function(e){return(e=e.split(" "))[0]+" "+e[1]},lo=function(e,r,n){var i=Ce(r);return ce(parseFloat(r)+parseFloat(br(e,"x",n+"px",i)))+i},Kv=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,Hh(e,r)},Cr="0deg",qn="0px",Er=") ",Hh=function(e,r){var n=r||this,i=n.xPercent,a=n.yPercent,s=n.x,l=n.y,c=n.z,u=n.rotation,d=n.rotationY,p=n.rotationX,m=n.skewX,v=n.skewY,y=n.scaleX,g=n.scaleY,w=n.transformPerspective,h=n.force3D,f=n.target,x=n.zOrigin,b="",_=h==="auto"&&e&&e!==1||h===!0;if(x&&(p!==Cr||d!==Cr)){var k=parseFloat(d)*Nn,N=Math.sin(k),j=Math.cos(k),P;k=parseFloat(p)*Nn,P=Math.cos(k),s=lo(f,s,N*P*-x),l=lo(f,l,-Math.sin(k)*-x),c=lo(f,c,j*P*-x+x)}w!==qn&&(b+="perspective("+w+Er),(i||a)&&(b+="translate("+i+"%, "+a+"%) "),(_||s!==qn||l!==qn||c!==qn)&&(b+=c!==qn||_?"translate3d("+s+", "+l+", "+c+") ":"translate("+s+", "+l+Er),u!==Cr&&(b+="rotate("+u+Er),d!==Cr&&(b+="rotateY("+d+Er),p!==Cr&&(b+="rotateX("+p+Er),(m!==Cr||v!==Cr)&&(b+="skew("+m+", "+v+Er),(y!==1||g!==1)&&(b+="scale("+y+", "+g+Er),f.style[ne]=b||"translate(0, 0)"},Qv=function(e,r){var n=r||this,i=n.xPercent,a=n.yPercent,s=n.x,l=n.y,c=n.rotation,u=n.skewX,d=n.skewY,p=n.scaleX,m=n.scaleY,v=n.target,y=n.xOrigin,g=n.yOrigin,w=n.xOffset,h=n.yOffset,f=n.forceCSS,x=parseFloat(s),b=parseFloat(l),_,k,N,j,P;c=parseFloat(c),u=parseFloat(u),d=parseFloat(d),d&&(d=parseFloat(d),u+=d,c+=d),c||u?(c*=Nn,u*=Nn,_=Math.cos(c)*p,k=Math.sin(c)*p,N=Math.sin(c-u)*-m,j=Math.cos(c-u)*m,u&&(d*=Nn,P=Math.tan(u-d),P=Math.sqrt(1+P*P),N*=P,j*=P,d&&(P=Math.tan(d),P=Math.sqrt(1+P*P),_*=P,k*=P)),_=ce(_),k=ce(k),N=ce(N),j=ce(j)):(_=p,j=m,k=N=0),(x&&!~(s+"").indexOf("px")||b&&!~(l+"").indexOf("px"))&&(x=br(v,"x",s,"px"),b=br(v,"y",l,"px")),(y||g||w||h)&&(x=ce(x+y-(y*_+g*N)+w),b=ce(b+g-(y*k+g*j)+h)),(i||a)&&(P=v.getBBox(),x=ce(x+i/100*P.width),b=ce(b+a/100*P.height)),P="matrix("+_+","+k+","+N+","+j+","+x+","+b+")",v.setAttribute("transform",P),f&&(v.style[ne]=P)},qv=function(e,r,n,i,a){var s=360,l=we(a),c=parseFloat(a)*(l&&~a.indexOf("rad")?Mr:1),u=c-i,d=i+u+"deg",p,m;return l&&(p=a.split("_")[1],p==="short"&&(u%=s,u!==u%(s/2)&&(u+=u<0?s:-s)),p==="cw"&&u<0?u=(u+s*fd)%s-~~(u/s)*s:p==="ccw"&&u>0&&(u=(u-s*fd)%s-~~(u/s)*s)),e._pt=m=new Ge(e._pt,r,n,i,u,Mv),m.e=d,m.u="deg",e._props.push(n),m},wd=function(e,r){for(var n in r)e[n]=r[n];return e},Jv=function(e,r,n){var i=wd({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=n.style,l,c,u,d,p,m,v,y;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),s[ne]=r,l=Vi(n,1),wr(n,ne),n.setAttribute("transform",u)):(u=getComputedStyle(n)[ne],s[ne]=r,l=Vi(n,1),s[ne]=u);for(c in $t)u=i[c],d=l[c],u!==d&&a.indexOf(c)<0&&(v=Ce(u),y=Ce(d),p=v!==y?br(n,c,u,y):parseFloat(u),m=parseFloat(d),e._pt=new Ge(e._pt,l,c,p,m-p,gl),e._pt.u=y||0,e._props.push(c));wd(l,i)};Ve("padding,margin,Width,Radius",function(t,e){var r="Top",n="Right",i="Bottom",a="Left",s=(e<3?[r,n,i,a]:[r+a,r+n,i+n,i+a]).map(function(l){return e<2?t+l:"border"+l+t});ss[e>1?"border"+t:t]=function(l,c,u,d,p){var m,v;if(arguments.length<4)return m=s.map(function(y){return Dt(l,y,u)}),v=m.join(" "),v.split(m[0]).length===5?m[0]:v;m=(d+"").split(" "),v={},s.forEach(function(y,g){return v[y]=m[g]=m[g]||m[(g-1)/2|0]}),l.init(c,v,p)}});var $h={name:"css",register:vl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,n,i,a){var s=this._props,l=e.style,c=n.vars.startAt,u,d,p,m,v,y,g,w,h,f,x,b,_,k,N,j,P;Oc||vl(),this.styles=this.styles||Lh(e),j=this.styles.props,this.tween=n;for(g in r)if(g!=="autoRound"&&(d=r[g],!(Ye[g]&&Ih(g,r,n,i,e,a)))){if(v=typeof d,y=ss[g],v==="function"&&(d=d.call(n,i,e,a),v=typeof d),v==="string"&&~d.indexOf("random(")&&(d=Li(d)),y)y(this,e,g,d,n)&&(N=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),d+="",gr.lastIndex=0,gr.test(u)||(w=Ce(u),h=Ce(d),h?w!==h&&(u=br(e,g,u,h)+h):w&&(d+=w)),this.add(l,"setProperty",u,d,i,a,0,0,g),s.push(g),j.push(g,0,l[g]);else if(v!=="undefined"){if(c&&g in c?(u=typeof c[g]=="function"?c[g].call(n,i,e,a):c[g],we(u)&&~u.indexOf("random(")&&(u=Li(u)),Ce(u+"")||u==="auto"||(u+=et.units[g]||Ce(Dt(e,g))||""),(u+"").charAt(1)==="="&&(u=Dt(e,g))):u=Dt(e,g),m=parseFloat(u),f=v==="string"&&d.charAt(1)==="="&&d.substr(0,2),f&&(d=d.substr(2)),p=parseFloat(d),g in Ct&&(g==="autoAlpha"&&(m===1&&Dt(e,"visibility")==="hidden"&&p&&(m=0),j.push("visibility",0,l.visibility),ar(this,l,"visibility",m?"inherit":"hidden",p?"inherit":"hidden",!p)),g!=="scale"&&g!=="transform"&&(g=Ct[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in $t,x){if(this.styles.save(g),P=d,v==="string"&&d.substring(0,6)==="var(--"){if(d=Je(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=d,d=Je(e,"perspective"),E?e.style.perspective=E:wr(e,"perspective")}p=parseFloat(d)}if(b||(_=e._gsap,_.renderTransform&&!r.parseTransform||Vi(e,r.parseTransform),k=r.smoothOrigin!==!1&&_.smooth,b=this._pt=new Ge(this._pt,l,ne,0,1,_.renderTransform,_,0,-1),b.dep=1),g==="scale")this._pt=new Ge(this._pt,_,"scaleY",_.scaleY,(f?_n(_.scaleY,f+p):p)-_.scaleY||0,gl),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){j.push(He,0,l[He]),d=Xv(d),_.svg?yl(e,d,0,k,0,this):(h=parseFloat(d.split(" ")[2])||0,h!==_.zOrigin&&ar(this,_,"zOrigin",_.zOrigin,h),ar(this,l,g,os(u),os(d)));continue}else if(g==="svgOrigin"){yl(e,d,1,k,0,this);continue}else if(g in Vh){qv(this,_,g,m,f?_n(m,f+d):d);continue}else if(g==="smoothOrigin"){ar(this,_,"smooth",_.smooth,d);continue}else if(g==="force3D"){_[g]=d;continue}else if(g==="transform"){Jv(this,d,e);continue}}else g in l||(g=zn(g)||g);if(x||(p||p===0)&&(m||m===0)&&!Tv.test(d)&&g in l)w=(u+"").substr((m+"").length),p||(p=0),h=Ce(d)||(g in et.units?et.units[g]:w),w!==h&&(m=br(e,g,u,h)),this._pt=new Ge(this._pt,x?_:l,g,m,(f?_n(m,f+p):p)-m,!x&&(h==="px"||g==="zIndex")&&r.autoRound!==!1?Dv:gl),this._pt.u=h||0,x&&P!==d?(this._pt.b=u,this._pt.e=P,this._pt.r=Ov):w!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=Rv);else if(g in l)$v.call(this,e,g,u,f?f+d:d);else if(g in e)this.add(e,g,u||e[g],f?f+d:d,i,a);else if(g!=="parseTransform"){jc(g,d);continue}x||(g in l?j.push(g,0,l[g]):typeof e[g]=="function"?j.push(g,2,e[g]()):j.push(g,1,u||e[g])),s.push(g)}}N&&Rh(this)},render:function(e,r){if(r.tween._time||!Dc())for(var n=r._pt;n;)n.r(e,n.d),n=n._next;else r.styles.revert()},get:Dt,aliases:Ct,getSetter:function(e,r,n){var i=Ct[r];return i&&i.indexOf(",")<0&&(r=i),r in $t&&r!==He&&(e._gsap.x||Dt(e,"x"))?n&&pd===n?r==="scale"?Uv:Lv:(pd=n||{})&&(r==="scale"?Bv:Wv):e.style&&!_c(e.style[r])?zv:~r.indexOf("-")?Fv:Mc(e,r)},core:{_removeProperty:wr,_getMatrix:Fc}};$e.utils.checkPrefix=zn;$e.core.getStyleSaver=Lh;(function(t,e,r,n){var i=Ve(t+","+e+","+r,function(a){$t[a]=1});Ve(e,function(a){et.units[a]="deg",Vh[a]=1}),Ct[i[13]]=t+","+e,Ve(n,function(a){var s=a.split(":");Ct[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){et.units[t]="px"});$e.registerPlugin($h);var ai=$e.registerPlugin($h)||$e;ai.core.Tween;const Zv="_introContainer_1kxc1_12",e1="_gridOverlay_1kxc1_30",t1="_scanLine_1kxc1_55",r1="_gradientBackground_1kxc1_90",n1="_noiseOverlay_1kxc1_127",i1="_lightSweep_1kxc1_161",a1="_contentWrapper_1kxc1_198",s1="_brandContainer_1kxc1_216",o1="_letter_1kxc1_242",l1="_tagline_1kxc1_262",Nt={introContainer:Zv,gridOverlay:e1,scanLine:t1,gradientBackground:r1,noiseOverlay:n1,lightSweep:i1,contentWrapper:a1,brandContainer:s1,letter:o1,tagline:l1},c1=({onComplete:t})=>{const e=S.useRef(null),r=S.useRef(null),n=S.useRef(null),i=S.useRef([]),a=S.useRef(null),s=S.useRef(!1),l="ROBUSTRIX",c="Science in the Machine";return S.useEffect(()=>{const u=requestAnimationFrame(()=>{const d=e.current,p=r.current,m=n.current,v=i.current.filter(Boolean);if(!d||!p||!m||v.length===0){console.warn("IntroAnimation: Refs not ready, animation skipped");return}if(s.current)return;s.current=!0;const y=ai.timeline({onComplete:()=>{setTimeout(()=>{t==null||t()},300)}});ai.set(d,{opacity:1});const g=Math.floor(v.length/2);v.forEach((h,f)=>{let x=0;f<g?x=-500:f>g?x=500:x=0,ai.set(h,{opacity:0,scale:.3,x,y:0,transformOrigin:"center center"})}),ai.set(m,{opacity:0,letterSpacing:"1em",y:30,scale:.8}),v.forEach((h,f)=>{let x=.3;f<g?x=.3+f*.12:f>g?x=.3+(v.length-1-f)*.12:x=.3+(g-1)*.12+.06,y.to(h,{opacity:1,scale:1,x:0,y:0,duration:.8,ease:"power2.out"},x)});const w=.3+(g-1)*.12+.8;y.to(p,{scale:1.08,duration:.4,ease:"power2.out"},w+.2),y.to(m,{opacity:1,letterSpacing:"0.15em",y:0,scale:1,duration:.6,ease:"power2.out"},"-=0.3"),y.to({},{duration:.8}),y.to([p,m],{scale:1.15,duration:.5,ease:"power2.out"},"-=0.4").to([p,m],{opacity:0,scale:.95,y:-20,duration:.5,ease:"power2.in"},"-=0.2"),y.to(d,{opacity:0,duration:.4,ease:"power2.in"},"-=0.3"),a.current=y});return()=>{cancelAnimationFrame(u),a.current&&a.current.kill()}},[t]),o.jsxs("div",{ref:e,className:Nt.introContainer,children:[o.jsx("div",{className:Nt.gridOverlay,"aria-hidden":"true"}),o.jsx("div",{className:Nt.scanLine,"aria-hidden":"true"}),o.jsx("div",{className:Nt.noiseOverlay,"aria-hidden":"true"}),o.jsx("div",{className:Nt.gradientBackground,"aria-hidden":"true"}),o.jsx("div",{className:Nt.lightSweep,"aria-hidden":"true"}),o.jsxs("div",{className:Nt.contentWrapper,children:[o.jsx("div",{ref:r,className:Nt.brandContainer,children:l.split("").map((u,d)=>o.jsx("span",{ref:p=>{p&&(i.current[d]=p)},className:Nt.letter,style:{display:"inline-block"},children:u===" "?" ":u},`letter-${d}-${u}`))}),o.jsx("div",{ref:n,className:Nt.tagline,children:c})]})]})},Xh=[{id:"ai-vision",title:"AI Vision Systems",image:"/pictures/aiplatforms.jpg",bullets:["Advanced defect detection and automated quality control.","AI-driven neural networks to enhance line efficiency.","High-speed image processing for real-time analysis.","Integration with smart cameras for automation."],body:["Machine vision on the factory floor has moved from rule-based templates to models that learn from production data. Robustrix edge platforms pair low-latency inference with industrial I/O so cameras, lights, and reject mechanisms stay synchronized with the line.","Defect detection benefits from consistent imaging: fixed focal length, controlled lighting, and deterministic trigger timing. Our fanless systems are specified for 24/7 operation with storage and networking suited to buffering frames during upstream outages.","Beyond inspection, vision guides robots for pick-and-place, guides AGVs with fiducials, and supports safety zones when combined with certified sensors. The same hardware stack can host multiple pipelines when workloads are sized with your integrator.","Whether you standardize on a single vendor’s SDK or mix OpenVINO, TensorRT, and custom CUDA paths, the goal is the same: repeatable quality signals that operations trusts—and that engineering can audit."]},{id:"autonomous-robotics",title:"Autonomous Robotics",image:"/products/ROBO_AI_30000.png",bullets:["Self-navigating AGVs for warehouse automation.","High-precision robotic welding solutions.","AI-powered drones for logistics and inspection.","Robotic arms for handling and assembly."],body:["Autonomous systems depend on tight loops between perception, planning, and actuation. Edge computers near the robot reduce round-trip latency to the cloud and keep critical functions running when WAN links degrade.","AGVs and AMRs typically fuse lidar, cameras, and wheel odometry. That fusion needs deterministic USB/Ethernet paths, isolated power for motor noise, and storage that survives vibration per IEC/MIL profiles where required.","Welding and assembly cells add requirements: extended temperature, metal dust, and long cable runs to teach pendants or PLCs. Fanless industrial PCs reduce maintenance while providing PCIe or MXM headroom for accelerators when models grow.","From warehouse aisles to outdoor yards, Robustrix focuses on platforms that integrators can qualify once and replicate across sites—so your fleet software stack stays consistent as you scale."]},{id:"smart-infrastructure",title:"Smart Infrastructure",image:"/products/iotsystems.png",bullets:["AI-driven traffic management and urban planning.","Robotic waste sorting for greener cities.","Intelligent solar farm management.","AI-driven HVAC and smart grid solutions."],body:["Smart infrastructure spans roadside cabinets, substation huts, and building mechanical rooms—environments with heat, dust, and imperfect power. Edge nodes must ingest telemetry, run analytics, and forward summaries without drowning wide-area links.","Traffic and mobility use cases blend camera analytics, radar interfaces, and RS-485/serial legacy devices. A single rugged PC can consolidate protocol conversion, local dashboards, and encrypted backhaul.","Renewables and grid edge applications emphasize wide DC input, galvanic isolation, and timestamps aligned to PTP or GNSS when regulations require it. Storage and RAM choices should match historian retention and model footprint.","Robustrix supplies industrial-grade compute so municipalities and operators can deploy AI-assisted monitoring with hardware that matches maintenance windows and environmental ratings—not consumer timelines."]},{id:"healthcare-4",title:"Healthcare 4.0",image:"/pictures/home1.png",bullets:["Surgical robotics for precision care.","AI-powered diagnostics for early detection.","Automated drug dispensing systems.","AI-based patient monitoring."],body:["Healthcare 4.0 connects imaging, robotics, and clinical workflows with stricter expectations for reliability, hygiene, and data handling. Edge systems often sit inside equipment carts, procedure suites, or clean-adjacent closets.","Diagnostic assistance models may run next to modalities to preprocess or triage, reducing motion for staff and preserving bandwidth for PACS integration. Hardware must match vendor validation lists and EMI budgets.","Dispensing and lab automation emphasize long uptimes, serial/device control, and audit logs. Fanless designs reduce airborne particle disturbance in sensitive zones while maintaining thermal headroom for sustained inference.","Robustrix works with integrators who map regulatory pathways; our role is dependable industrial compute that matches shock, vibration, and thermal specs—so clinical engineering can focus on patient outcomes."]}];function u1(t){return Xh.find(e=>e.id===t)??null}const Jn=[{id:"s1",title:"AI Platforms",subtitle:"Powering vision, inference, and analytics at the edge",ctaPrimary:"Explore AI Platforms",ctaSecondary:"View All Products",image:"/pictures/roboi.jpeg",variant:"full"},{id:"s3",title:"Intel Processor",subtitle:"Performance and reliability for modern industrial computing",ctaPrimary:"Explore Intel",ctaSecondary:"View Specs",image:"/pictures/INTEL.png",variant:"full"},{id:"s4",title:"Fanless CPU Systems",subtitle:"Silent, rugged, and thermally-optimized for harsh environments",ctaPrimary:"Explore Fanless",ctaSecondary:"Contact Sales",image:"/pictures/cpu.png",variant:"full"},{id:"s5",title:"AI Robo Dog",subtitle:"Next-generation AI-powered robotic companion with autonomous intelligence",ctaSecondary:"Coming Soon",image:"/products/robodog.jpeg",variant:"full",bgPosition:"center center"},{id:"s6",title:"AI HUMANOID Robot",ctaSecondary:"Coming Soon",image:"/products/airobot.png",variant:"full",bgPosition:"center top"}];function d1(){const[t,e]=S.useState(0),r=S.useRef(null),n=S.useRef(!1),i=S.useRef(0),a=S.useRef(0);S.useEffect(()=>(s(),l),[]);function s(){l(),r.current=setInterval(()=>{n.current||e(h=>(h+1)%Jn.length)},5e3)}function l(){r.current&&clearInterval(r.current)}function c(){n.current=!0}function u(){n.current=!1}function d(h){e((h+Jn.length)%Jn.length)}function p(){d(t+1)}function m(){d(t-1)}function v(h){i.current=h.touches[0].clientX,a.current=0}function y(h){a.current=h.touches[0].clientX-i.current}function g(){const h=a.current;Math.abs(h)>40&&(h<0?p():m())}function w(h,f){const x="/pictures/fanlesscpu.png";h.currentTarget.src=x}return o.jsxs("section",{className:"hero",onMouseEnter:c,onMouseLeave:u,children:[o.jsx("div",{className:"slider-viewport",children:o.jsx("div",{className:"slider",style:{transform:`translateX(-${t*100}%)`},onTouchStart:v,onTouchMove:y,onTouchEnd:g,role:"region","aria-label":"Featured",children:Jn.map((h,f)=>o.jsx("article",{className:`slide ${h.variant==="full"?"full-bleed":""}`,"data-slide-id":h.id,"aria-hidden":f!==t,children:h.variant==="full"?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"bg-full",style:{backgroundImage:`url(${h.image})`,backgroundPosition:h.bgPosition||"center 70%"}}),o.jsx("div",{className:"overlay-full"}),o.jsx("div",{className:"container slide-inner full-inner",children:o.jsxs("div",{className:"copy",children:[o.jsx("h2",{className:"h2",children:h.title}),o.jsx("p",{className:"subtle",children:h.subtitle}),o.jsxs("div",{className:"cta-row",children:[h.ctaPrimary&&o.jsx(Z,{to:"/products",className:"btn btn-primary",children:h.ctaPrimary}),h.ctaSecondary&&(h.ctaSecondary.includes("Contact")?o.jsx("a",{href:"https://wa.me/919090020245",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:h.ctaSecondary}):o.jsx(Z,{to:"/products",className:"btn btn-outline",children:h.ctaSecondary}))]})]})})]}):o.jsxs("div",{className:"container slide-inner",children:[o.jsxs("div",{className:"copy",children:[o.jsx("h2",{className:"h2",children:h.title}),o.jsx("p",{className:"subtle",children:h.subtitle}),o.jsxs("div",{className:"cta-row",children:[o.jsx(Z,{to:"/products",className:"btn btn-primary",children:h.ctaPrimary}),h.ctaSecondary.includes("Contact")?o.jsx("a",{href:"https://wa.me/919090020245",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:h.ctaSecondary}):o.jsx(Z,{to:"/products",className:"btn btn-outline",children:h.ctaSecondary})]})]}),o.jsx("div",{className:"visual",children:o.jsx("img",{src:h.image,alt:h.title,loading:f===t?"eager":"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:x=>w(x)})})]})},h.id))})}),o.jsxs("div",{className:"controls",children:[o.jsx("div",{className:"dots",role:"tablist","aria-label":"Slides",children:Jn.map((h,f)=>o.jsx("button",{className:`dot ${f===t?"is-active":""}`,"aria-label":`Go to slide ${f+1}`,"aria-selected":f===t,onClick:()=>d(f)},h.id))}),o.jsxs("div",{className:"arrows",children:[o.jsx("button",{className:"arrow","aria-label":"Previous",onClick:m,children:o.jsx("span",{children:"‹"})}),o.jsx("button",{className:"arrow","aria-label":"Next",onClick:p,children:o.jsx("span",{children:"›"})})]})]}),o.jsx("style",{children:`
        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(1200px 480px at 80% 100%, rgba(228, 30, 43, 0.08), transparent 60%),
            linear-gradient(180deg, #f7f9ff 0%, #ffffff 100%);
        }
        .slider-viewport {
          overflow: hidden; /* Prevent horizontal scroll from wide carousel track */
          width: 100%;
        }
        .slider {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 100%;
          transition: transform var(--transition-slow);
        }
        .slide {
          display: grid;
          place-items: center;
          min-height: clamp(420px, 60vw, 640px);
          position: relative;
        }
        .slide::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(600px 200px at 20% 0%, rgba(30, 74, 168, 0.10), transparent 60%);
        }
        /* Full-bleed fanless slide */
        .slide.full-bleed {
          min-height: clamp(560px, 72vw, 820px);
        }
        .bg-full {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center center;
          transform: none;
        }
        .slide[data-slide-id="s5"] .bg-full {
          background-position: center center;
          background-size: cover;
        }
        .slide[data-slide-id="s6"] .bg-full {
          background-position: center top;
          background-size: cover;
        }
        .slide[aria-hidden="false"].full-bleed .bg-full { transform: none; }
        .overlay-full {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }
        .full-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          min-height: 100%;
          padding-top: 24px;
          padding-bottom: clamp(70px, 12vw, 160px);
        }
        .copy {
          max-width: min(720px, 92vw);
          color: #ffffff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }
        .copy .h2 { 
          color: #ffffff; 
          font-size: clamp(34px, 5.6vw, 64px); 
          line-height: 1.1; 
          font-weight: 800;
        }
        .copy .subtle { 
          color: #ffffff; 
          font-size: clamp(16px, 2.8vw, 22px); 
          margin-top: 12px;
        }
        .slide-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(20px, 4vw, 40px);
          align-items: center;
          width: 100%;
          padding-block: clamp(40px, 8vw, 80px);
        }
        .copy .cta-row {
          display: flex;
          gap: 12px;
          margin-top: 18px;
          flex-wrap: wrap;
        }
        .visual img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 40px rgba(18, 28, 45, 0.18));
          transform: translateZ(0);
          transition: transform var(--transition);
        }
        .slide[aria-hidden="false"] .visual img {
          transform: translateY(0);
        }

        .controls {
          position: absolute;
          inset-inline: 0;
          bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding-inline: var(--container-pad);
        }
        .dots {
          display: flex;
          gap: 10px;
        }
        .dot {
          width: 10px; height: 10px;
          border-radius: 999px;
          border: 2px solid var(--color-ink-300);
          background: white;
          cursor: pointer;
          transition: border-color var(--transition), background var(--transition), transform var(--transition);
        }
        .dot.is-active {
          background: var(--color-brand-primary);
          border-color: var(--color-brand-primary);
          transform: scale(1.1);
        }
        .arrows { display: flex; gap: 8px; }
        .arrow {
          width: 40px; height: 40px;
          border-radius: 999px;
          border: 1px solid var(--color-ink-200);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: saturate(160%) blur(6px);
          cursor: pointer;
          transition: transform var(--transition), border-color var(--transition), background var(--transition);
        }
        .arrow:hover { transform: translateY(-1px); border-color: var(--color-brand-primary-dark); }
        .arrow span { display: grid; place-items: center; font-size: 22px; color: var(--color-ink-700); }

        @media (max-width: 1023px) {
          .slide-inner { grid-template-columns: 1fr; }
          /* Keep controls overlayed on the hero (prevents layout shift + gutter) */
          .controls { position: absolute; bottom: 16px; padding-block: 0; }
          .arrows { margin-left: auto; }
        }

        @media (max-width: 719px) {
          /* Reduce vertical heaviness on small phones */
          .slide { min-height: clamp(320px, 64vw, 470px); }
          .slide.full-bleed { min-height: clamp(380px, 72vw, 600px); }

          /* Ensure overlay controls have breathing room */
          .full-inner { padding-bottom: clamp(56px, 10vh, 120px); }

          .dot { width: 9px; height: 9px; }
          .arrow { width: 36px; height: 36px; }

          /* Lift controls to avoid clipping and respect iOS safe area */
          .controls { bottom: calc(18px + env(safe-area-inset-bottom)); }
        }
      `})]})}function T(t={}){const e=S.useRef(null);return S.useEffect(()=>{const r=e.current;if(!r)return;const n=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting?(r.classList.add("is-inview"),t.once!==!1&&n.unobserve(r)):t.once===!1&&r.classList.remove("is-inview")})},{rootMargin:t.rootMargin??"0px 0px 0px 0px",threshold:t.threshold??0});return n.observe(r),()=>n.disconnect()},[t.threshold,t.once,t.rootMargin]),e}function Lt({overline:t,title:e,subtitle:r}){const n=T();return o.jsxs("header",{ref:n,className:"fade-in-up",children:[t&&o.jsx("p",{className:"overline",children:t}),e&&o.jsx("h2",{className:"h2",children:e}),r&&o.jsx("p",{className:"subtle",children:r})]})}const bd=[{id:"ai",title:"AI Solutions",src:"/products/aisolutions.png",fallback:"https://source.unsplash.com/400x240/?ai,edge",link:"/ai-solutions"},{id:"compute",title:"Computing Systems",src:"/products/computingsystem.png",fallback:"https://source.unsplash.com/400x240/?industrial,pc",link:"/computing-systems"},{id:"embedded",title:"Embedded Boards",src:"/products/embeddedboards.png",fallback:"https://source.unsplash.com/400x240/?embedded,board,pcb",link:"/embedded-boards"},{id:"network",title:"Network Solutions",src:"/products/networksolutions.png",fallback:"https://source.unsplash.com/400x240/?network,appliance",link:"/network"},{id:"up",title:"UP Boards and UP Systems",src:"/products/upboards.png",fallback:"https://source.unsplash.com/400x240/?single-board,computer",link:"/up"},{id:"iot",title:"IoT Gateways",src:"/products/iotsystems.png",fallback:"https://source.unsplash.com/400x240/?iot,gateway",link:"/iot-gateways"},{id:"panel",title:"Panel PCs",src:"/products/panelpc.png",fallback:"https://source.unsplash.com/400x240/?panel,pc,touch",link:"/panel-pcs"}];function Yh(){const t=T();function e(r,n){const i=bd.find(a=>a.id===n);i!=null&&i.fallback&&(r.currentTarget.src=i.fallback)}return o.jsxs("div",{ref:t,className:"solutions fade-in-up",children:[bd.map(r=>{const n=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"thumb",children:o.jsx("img",{src:r.src,alt:r.title,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:i=>e(i,r.id)})}),o.jsx("div",{className:"label",children:r.title})]});return r.link?o.jsx(Z,{to:r.link,className:"sol-item",children:n},r.id):o.jsx("a",{href:"#",className:"sol-item",children:n},r.id)}),o.jsx("style",{children:`
        .solutions {
          display: grid;
          /* Mobile: 2 tiles per row */
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 16px;
          margin-top: 10px;
          align-items: start;
          width: 100%;
          overflow-x: hidden; /* keep grid from creating horizontal overflow */
        }
        @media (min-width: 720px) {
          .solutions { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .solutions { grid-template-columns: repeat(7, 1fr); }
        }
        .sol-item {
          text-decoration: none;
          color: inherit;
          display: grid;
          justify-items: center;
          gap: 12px;
          padding: 10px 6px 12px 6px;
          border-radius: var(--radius-sm);
          transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
        }
        .sol-item:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .thumb {
          display: grid;
          place-items: center;
          width: 100%;
          height: 110px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
        }
        .thumb img {
          max-width: 130px;
          max-height: 90px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 3px 10px rgba(18, 28, 45, 0.08));
        }
        .label { text-align: center; font-weight: 800; color: var(--color-ink-700); }
      `})]})}const Kh=[{id:"n1",title:"Unlocking Smart Connectivity: SIM-Enabled Industrial PCs by Robustrix",date:"May 8, 2025",meta:"0 Comments · admin",image:"/pictures/home1.png",excerpt:"In today’s fast-paced industrial world, smart connectivity isn’t just a luxury—it’s a necessity. With industries leaning heavily on real-time...",body:["In today’s fast-paced industrial world, smart connectivity isn’t just a luxury—it’s a necessity. Plants, utilities, and logistics networks depend on data that moves reliably between edge devices and central systems—even when wired LAN is unavailable, congested, or too costly to extend.","SIM-enabled industrial PCs bridge that gap. By integrating cellular modems (4G/5G/LTE) into fanless, rugged enclosures, Robustrix platforms allow SCADA updates, remote diagnostics, firmware rollouts, and telemetry to continue without a fixed line. That matters for mobile equipment, temporary sites, distributed substations, and any deployment where “always on” matters more than “always cabled.”","Security and manageability remain central. Industrial SIM solutions work best when paired with hardened OS images, VPN or private APN options, and clear separation between operational traffic and guest or IT networks. Robustrix systems are specified with wide-temperature components, isolated I/O where needed, and power designs suited to vehicle and cabinet installs.","Whether you are modernizing a brownfield line or rolling out a greenfield edge cluster, SIM-capable industrial PCs reduce time-to-operation and give your team a practical path to monitor and service equipment from anywhere—without compromising the durability expectations of the factory floor."]},{id:"n2",title:"Introduction to Fanless PCs: The Future of Industrial Computing",date:"June 12, 2024",meta:"0 Comments · admin",image:"/pictures/fanlesscpu.png",excerpt:"In today’s rapidly evolving industrial landscape, computing solutions must meet the increasing demands of durability, efficiency, and reliability...",body:["Fanless industrial PCs replace rotating fans with passive cooling—typically extruded or bonded heatsinks that move heat to the chassis and then to the surrounding air. Removing the fan eliminates a common failure mode: bearing wear, dust clogging, and noise that can interfere with precision environments.","Without forced airflow, the enclosure can be sealed or filtered more effectively against dust, metal fines, and humidity. That makes fanless designs a natural fit for food adjacent areas, woodworking, mining prep rooms, and outdoor kiosks where particulate control is part of the specification.","Thermal design is engineering, not magic. Robustrix matches processor TDP, chassis mass, and surface area so sustained workloads stay within safe junction temperatures across the rated ambient range. The result is predictable performance for vision pipelines, PLC gateways, and HMI workloads that run 24/7.","Fanless does not mean “low power only.” With the right platform—industrial chipsets, wide-input power, and validated storage—you can run demanding edge AI and multi-display setups while keeping maintenance cycles focused on software and application health, not filter changes and fan replacements."]},{id:"n3",title:"Exploring the Power of All-in-One PCs with Robustrix IT Solutions",date:"June 12, 2024",meta:"0 Comments · admin",image:"/pictures/aiplatforms.jpg",excerpt:"In today’s fast-paced digital world, businesses require solutions that are efficient, space‑saving, and powerful. All‑in‑One PCs...",body:["All-in-One (AiO) industrial systems combine display, computing, and often touch input in a single assembly. For control rooms, machine HMI, and customer-facing kiosks, that integration reduces cable clutter, shortens install time, and presents a cleaner surface for cleaning and sealing.","Space at the operator station is almost always constrained. An AiO mount—panel, VESA arm, or embedded cutout—lets teams place the UI where it is ergonomically correct without stacking a small box, separate monitor, and bundle of adapters behind the panel.","Industrial AiO differs from consumer designs: brighter panels for plant lighting, glove-friendly touch options, wide-temperature electronics, and I/O positioned for maintenance access. Robustrix focuses on long-life panels and chipsets so you are not forced into yearly refreshes driven by consumer SKU churn.","When specification calls for vision overlays, MES terminals, or energy dashboards, a well-chosen AiO becomes the visible front end to your digital thread—while the heavy inference or historian workloads can still live on dedicated edge servers when the architecture demands it."]},{id:"n4",title:"Why do we use Fanless PC Instead of Regular PC?",date:"June 12, 2024",meta:"0 Comments · admin",image:"/pictures/intelprocrssros.png",excerpt:"In industrial and mission‑critical environments, choosing the right computing solution is essential for reliability, durability, and performance...",body:["Regular office PCs are optimized for climate-controlled spaces, short duty cycles, and occasional dust. Industrial sites introduce vibration, voltage fluctuation, oil mist, and temperature swings that accelerate fan failure and conductive dust buildup on motherboards.","A fanless industrial PC trades the moving part for thermal mass and careful airflow geometry through the chassis itself. Maintenance teams spend less time opening cabinets to clean filters, and there is no sudden thermal trip because a fan stalled overnight.","Mission-critical does not forgive unplanned downtime. Predictable thermals and sealed or filtered enclosures directly support higher mean time between failures (MTBF) for the platform as a whole—especially when paired with industrial SSDs and wide-range power supplies.","Cost is not only purchase price. Fanless industrial designs often win on total cost of ownership: fewer truck rolls, fewer spare fans on the shelf, and less risk of foreign object damage inside the chassis. When the application is safety-adjacent or revenue-linked, that reliability margin is the reason teams choose industrial over regular PCs."]}];function p1(t){return Kh.find(e=>e.id===t)??null}const f1=Kh.map(({id:t,title:e,date:r,meta:n,image:i,excerpt:a})=>({id:t,title:e,date:r,meta:n,image:i,excerpt:a}));function h1(){const t=T();function e(r,n){const i={n1:"/pictures/home1.png",n2:"/pictures/fanlesscpu.png",n3:"/pictures/aiplatforms.jpg",n4:"/pictures/intelprocrssros.png"};r.currentTarget.src=i[n]||"/assets/news-1.svg"}return o.jsxs("div",{ref:t,className:"news fade-in-up",children:[f1.map(r=>o.jsxs(Z,{to:`/blog/${r.id}`,className:"card news-card",children:[o.jsx("img",{className:"thumb",src:r.image,alt:r.title,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:n=>e(n,r.id)}),o.jsxs("div",{className:"body",children:[o.jsxs("p",{className:"date",children:[r.date,r.meta?` · ${r.meta}`:""]}),o.jsx("h3",{className:"title",children:r.title}),r.excerpt&&o.jsx("p",{className:"excerpt",children:r.excerpt}),o.jsx("span",{className:"link",children:"Read More..."})]})]},r.id)),o.jsx("style",{children:`
        .news {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        .news-card { text-decoration: none; color: inherit; overflow: hidden; }
        .thumb { width: 100%; height: 160px; object-fit: cover; background: var(--color-bg-alt); }
        .body { padding: 14px 16px 16px 16px; display: grid; gap: 8px; }
        .date { font-size: 0.86rem; color: var(--color-ink-500); }
        .title { font-size: 1.02rem; line-height: 1.3; font-weight: 800; }
        .excerpt { color: var(--color-ink-700); }

        @media (max-width: 1023px) {
          .news { grid-template-columns: 1fr; }
          .thumb { height: 180px; }
        }
      `})]})}const Qh=[{id:"p1",name:"Robo AI Industrial Pro",brand:"Robustrix",series:"EVS-3000",image:"/products/ROBO%20AI%20INDUSTRIAL%20PRO.png",useCases:["Autonomous Robotics","Public Security","Machine Vision"],highlights:["Intel® Core 12th/13th/14th Gen (up to 65W) on Intel R680E chipset","DDR5 SO‑DIMM up to 96GB (ECC/Non‑ECC), 2 slots","Intel UHD 770/730 iGPU (Xe) with MXM support up to 115W","Up to 7 independent displays (HDMI 2.1 x2, DP x1, + up to 4 via MXM)",'Storage: SATAIII x2 (RAID 0/1), 2x 2.5" front trays, rich M.2 (M/B/E)',"I/O: 2x COM RS‑232/422/485 (ESD 8kV), 4x USB 3.2 Gen2 Type‑A, 1x USB 3.2 Gen2x2 Type‑C","Isolated DIO 32 (16DI/16DO), External SIM (5G/4G/LTE/GPRS/UMTS)","Realtek ALC888S‑VD 7.1 HD Audio (Mic‑in, Line‑out)","Networking: Intel I226 2.5GbE with TSN x2","Power: DC 9–55V, 16‑mode ignition control, 200W budget for GPUs","OOB: Nuvoton NUC980 MCU via RJ45 (10/100Mb) for remote Pwr/Reset/Cycle","TPM 2.0 (Infineon SLB9670, SPI)","Wide environmental tolerance (‑25°C to 55°C)* and MIL/IEC shock & vibration"],models:[{model:"EVS-3100",note:"Fanless, compact; 280x90x215mm; 5.0kg"},{model:"EVS-3200",note:"Fanless; added PCIe x4 Gen4; 280x114x215mm; 5.6kg"},{model:"EVS-3300",note:"Fanless; 2x front M.2 trays; 280x130x215mm; 6.2kg"},{model:"EVS-3400",note:"Fanless; 3x PCIe x4 Gen4; 280x152x215mm; 6.8kg"},{model:"EVS-3100F",note:"With fan; MXM 60–115W; 280x97x215mm; 5.1kg"},{model:"EVS-3200F",note:"With fan; added PCIe; 280x121x215mm; 5.7kg"},{model:"EVS-3300F",note:"With fan; 2x M.2 trays; 280x137x215mm; 6.3kg"},{model:"EVS-3400F",note:"With fan; 3x PCIe; 280x159x215mm; 6.9kg"}]},{id:"p2",name:"ROBO-AI-3000",brand:"Robustrix",series:"Small Form Factor Industrial PC",image:"/products/ROBO_AI_30000.png",useCases:["Edge AI","Factory Automation","Kiosk/Vision"],highlights:["LGA1700 socket — Intel® Core 12th/13th/14th Gen support","Compact, fanless industrial chassis with extruded fin heatsink","EDGEBoost modular I/O bays; multiple add‑on options","Rich I/O front/rear: USB 3.x, COM, Isolated DIO, DP/HDMI","Multiple RJ45 LAN (incl. OOB) and optional PoE/10GbE modules","M.2 expansion: Key M (NVMe x4), Key E, Key B options","Wide‑range DC input with industrial protections"],models:[{model:"Base",note:"Wall/Panel mount ready; configurable EDGEBoost bays"}]},{id:"p3",name:'21.5" Digital LCD Monitor',brand:"Robustrix",series:"CH-L215-TI",image:"/products/21.5%20Digital%20LCD%20Monitor.png",useCases:["HMI","Control Room","Kiosk"],highlights:['21.45" TFT LCD, 1920x1080, 17:9, 75Hz, 280 cd/m², 3000:1 contrast',"178°/178° viewing, 6.5ms response, 16.7M colors","Inputs: VGA x1, HDMI x1, DP x1; Audio‑out + built‑in speaker","VESA 75x75; Desktop base / Wall‑mount options","Operating: 0~50°C; Storage: ‑20~60°C; Humidity: 5–90%","Power: DC 12V; ≤20W (≤1W standby); External adapter","Metal + ABS housing; 550x343x105mm; 2.9kg; Black","3D comb filter & noise reduction; Low power design"],models:[{model:"CH-L215-TI",note:"All‑in‑one HMI display solution"}]}];function qh(){const t=T(),e=T(),r=[{id:"p1",name:"Robo AI Industrial Pro",brand:"Robustrix",series:"EVS-3000",useCases:["Autonomous Robotics","Public Security","Machine Vision"],highlights:["Intel® Core 12th/13th/14th Gen (up to 65W) on Intel R680E chipset","DDR5 SO‑DIMM up to 96GB (ECC/Non‑ECC), 2 slots","Intel UHD 770/730 iGPU (Xe) with MXM support up to 115W","Up to 7 independent displays (HDMI 2.1 x2, DP x1, + up to 4 via MXM)",'Storage: SATAIII x2 (RAID 0/1), 2x 2.5" front trays, rich M.2 (M/B/E)',"I/O: 2x COM RS‑232/422/485 (ESD 8kV), 4x USB 3.2 Gen2 Type‑A, 1x USB 3.2 Gen2x2 Type‑C","Isolated DIO 32 (16DI/16DO), External SIM (5G/4G/LTE/GPRS/UMTS)","Realtek ALC888S‑VD 7.1 HD Audio (Mic‑in, Line‑out)","Networking: Intel I226 2.5GbE with TSN x2","Power: DC 9–55V, 16‑mode ignition control, 200W budget for GPUs","OOB: Nuvoton NUC980 MCU via RJ45 (10/100Mb) for remote Pwr/Reset/Cycle","TPM 2.0 (Infineon SLB9670, SPI)","Wide environmental tolerance (‑25°C to 55°C)* and MIL/IEC shock & vibration"],models:[{model:"EVS-3100",note:"Fanless, compact; 280x90x215mm; 5.0kg"},{model:"EVS-3200",note:"Fanless; added PCIe x4 Gen4; 280x114x215mm; 5.6kg"},{model:"EVS-3300",note:"Fanless; 2x front M.2 trays; 280x130x215mm; 6.2kg"},{model:"EVS-3400",note:"Fanless; 3x PCIe x4 Gen4; 280x152x215mm; 6.8kg"},{model:"EVS-3100F",note:"With fan; MXM 60–115W; 280x97x215mm; 5.1kg"},{model:"EVS-3200F",note:"With fan; added PCIe; 280x121x215mm; 5.7kg"},{model:"EVS-3300F",note:"With fan; 2x M.2 trays; 280x137x215mm; 6.3kg"},{model:"EVS-3400F",note:"With fan; 3x PCIe; 280x159x215mm; 6.9kg"}]},{id:"p2",name:"ROBO-AI-3000",brand:"Robustrix",series:"Small Form Factor Industrial PC",useCases:["Edge AI","Factory Automation","Kiosk/Vision"],highlights:["LGA1700 socket — Intel® Core 12th/13th/14th Gen support","Compact, fanless industrial chassis with extruded fin heatsink","EDGEBoost modular I/O bays; multiple add‑on options","Rich I/O front/rear: USB 3.x, COM, Isolated DIO, DP/HDMI","Multiple RJ45 LAN (incl. OOB) and optional PoE/10GbE modules","M.2 expansion: Key M (NVMe x4), Key E, Key B options","Wide‑range DC input with industrial protections"],models:[{model:"Base",note:"Wall/Panel mount ready; configurable EDGEBoost bays"}]},{id:"p3",name:'21.5" Digital LCD Monitor',brand:"Robustrix",series:"CH-L215-TI",useCases:["HMI","Control Room","Kiosk"],highlights:['21.45" TFT LCD, 1920x1080, 17:9, 75Hz, 280 cd/m², 3000:1 contrast',"178°/178° viewing, 6.5ms response, 16.7M colors","Inputs: VGA x1, HDMI x1, DP x1; Audio‑out + built‑in speaker","VESA 75x75; Desktop base / Wall‑mount options","Operating: 0~50°C; Storage: ‑20~60°C; Humidity: 5–90%","Power: DC 12V; ≤20W (≤1W standby); External adapter","Metal + ABS housing; 550x343x105mm; 2.9kg; Black","3D comb filter & noise reduction; Low power design"],models:[{model:"CH-L215-TI",note:"All‑in‑one HMI display solution"}]}];return o.jsxs("section",{className:"container section-spacing",children:[o.jsxs("header",{ref:t,className:"fade-in-up",children:[o.jsx("p",{className:"overline mp-overline",children:"Our Main Products"}),o.jsx("h2",{className:"h2",children:"Featured Industrial Platforms"}),o.jsx("p",{className:"subtle",children:"Key platforms engineered for demanding edge AI and industrial applications."})]}),o.jsx("div",{ref:e,className:"mp-grid fade-in-up-stagger",children:(Qh||r).map(n=>{var i,a;return o.jsxs("article",{className:"card mp-card",children:[o.jsx("span",{className:"mp-badge",children:"Main"}),n.image?o.jsx("div",{className:"mp-media",children:o.jsx("img",{src:n.image,alt:n.name,loading:"lazy",decoding:"async"})}):null,o.jsxs("div",{className:"mp-head",children:[o.jsx("h3",{className:"mp-title",children:n.name}),o.jsxs("p",{className:"mp-meta",children:[n.brand,n.series?` · ${n.series}`:""]}),(i=n.useCases)!=null&&i.length?o.jsx("p",{className:"mp-tags",children:n.useCases.join(" · ")}):null]}),o.jsx("ul",{className:"mp-highlights",children:n.highlights.map((s,l)=>o.jsx("li",{children:s},l))}),(a=n.models)!=null&&a.length?o.jsx("div",{className:"mp-actions",children:o.jsx(Z,{to:`/products?product=${n.id}`,className:"btn btn-outline",children:"Models & options"})}):null]},n.id)})}),o.jsx("style",{children:`
        .mp-grid {
          display: grid;
          /* Default: 2 products per row on mobile */
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-top: 20px;
          align-items: stretch;
          grid-auto-rows: auto;
        }
        @media (max-width: 360px) {
          .mp-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 1024px) {
          .mp-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .mp-card {
          position: relative;
          display: grid;
          gap: 10px;
          padding: 16px;
          height: auto;
          grid-template-rows: auto auto 1fr auto;
        }
        .mp-overline {
          font-size: clamp(20px, 2.8vw, 32px);
          letter-spacing: .18em;
        }
        .mp-media { width: 100%; height: 200px; border-radius: 10px; overflow: hidden; background: var(--color-bg-alt); }
        .mp-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .mp-badge {
          position: absolute;
          top: 10px; left: 10px;
          background: var(--color-brand-primary-dark);
          color: var(--color-ink-900);
          border-radius: 999px;
          padding: 2px 8px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: .05em;
        }
        .mp-head { display: grid; gap: 4px; }
        .mp-title { font-weight: 900; font-size: 1.05rem; }
        .mp-meta { color: var(--color-ink-700); word-break: break-word; }
        .mp-tags { color: var(--color-brand-primary); font-weight: 700; word-break: break-word; }
        .mp-highlights {
          display: grid;
          gap: 6px;
          list-style: disc;
          color: var(--color-ink-900);
          overflow-y: auto;
          overflow-x: hidden;
          padding: 0 4px 0 18px;
          margin: 0;
          max-height: 210px; /* keep cards from becoming massive on mobile */
        }
        .mp-actions { margin-top: 6px; }

        @media (max-width: 719px) {
          .mp-card { padding: 14px; }
          .mp-media { height: 180px; }
          .mp-highlights { max-height: 220px; }
          .mp-actions .btn { width: 100%; justify-content: center; }
        }
      `})]})}function m1({words:t,className:e="",typingSpeedMs:r=65,deletingSpeedMs:n=38,holdMs:i=900,startDelayMs:a=200}){const s=S.useMemo(()=>Array.isArray(t)?t.filter(Boolean):[],[t]),[l,c]=S.useState(0),[u,d]=S.useState(""),[p,m]=S.useState(!1);return S.useEffect(()=>{if(s.length===0)return;const v=s[l%s.length],y=!p&&u===v,g=p&&u.length===0;let w=p?n:r;y&&(w=i),g&&(w=Math.max(50,a));const h=setTimeout(()=>{if(y){m(!0);return}if(g){m(!1),c(x=>(x+1)%s.length);return}const f=p?v.slice(0,Math.max(0,u.length-1)):v.slice(0,Math.min(v.length,u.length+1));d(f)},w);return()=>clearTimeout(h)},[s,l,u,p,r,n,i,a]),s.length===0?null:o.jsxs("span",{className:e,"aria-live":"polite",children:[u,o.jsx("span",{className:"tw-caret","aria-hidden":"true"})]})}function g1(){const{openModal:t}=wc(),e=T(),r=T(),n=T(),i=T(),a=T(),s=T(),l=T(),c=T();return S.useEffect(()=>{const u=requestAnimationFrame(()=>{document.documentElement.classList.add("app-mounted")});return()=>cancelAnimationFrame(u)},[]),S.useEffect(()=>{if(sessionStorage.getItem("robustrix-contact-shown"))return;const d=setTimeout(()=>{t(),sessionStorage.setItem("robustrix-contact-shown","true")},8e3);return()=>clearTimeout(d)},[t]),o.jsx(o.Fragment,{children:o.jsxs("main",{className:"home-theme",children:[o.jsx(d1,{}),o.jsxs("section",{className:"container section-spacing section-solutions",children:[o.jsxs("div",{className:"home-intro",children:[o.jsx("p",{className:"overline home-intro-brand",children:"Robustrix IT Solutions"}),o.jsx("p",{className:"subtle home-intro-typed",children:o.jsx(m1,{words:["AI-driven edge computing","fanless industrial PCs","robotics & automation","machine vision","harsh Indian environments"],typingSpeedMs:62,deletingSpeedMs:36,holdMs:900})}),o.jsx("h2",{className:"h2 home-intro-heading",children:"Leading the Future of Industrial Innovation in India"}),o.jsx("p",{className:"subtle home-intro-body",children:"Welcome to Robustrix IT Solutions, where cutting-edge technology meets industrial resilience. We are not just building machines—we are engineering the future of AI-driven industrial computing. Our expertise lies in fanless AI industrial embedded PCs designed to operate seamlessly in India’s toughest environments, ensuring unmatched reliability, silence, and high-performance computing."})]}),o.jsx("style",{children:`
            .home-intro {
              position: relative;
              z-index: 5;
              margin-top: clamp(18px, 3vw, 42px);
              background: linear-gradient(135deg, rgba(2, 196, 249, 0.10), rgba(138, 63, 252, 0.08));
              border: 1px solid rgba(255,255,255,0.08);
              border-radius: 16px;
              padding: clamp(18px, 3vw, 28px);
              box-shadow: 0 18px 46px rgba(0,0,0,0.35);
              animation: homeIntroIn 520ms var(--transition-slow) both;
              color: #fff;
            }
            @keyframes homeIntroIn {
              from { opacity: 0; transform: translateY(18px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .home-intro-brand {
              color: #fff;
              font-size: clamp(20px, 2.6vw, 26px);
              letter-spacing: .10em;
              text-transform: uppercase;
              margin-bottom: 6px;
            }
            .home-intro-typed {
              margin-top: 6px;
              font-size: clamp(16px, 2.2vw, 20px);
              font-weight: 800;
              color: rgba(255,255,255,0.92);
            }
            .home-intro-heading {
              margin-top: 10px;
              font-size: clamp(32px, 4.4vw, 46px);
              color: #fff;
            }
            .home-intro-body {
              margin-top: 12px;
              font-size: clamp(16px, 2.2vw, 19px);
              color: rgba(255,255,255,0.88);
            }
            .home-intro .tw-caret {
              display: inline-block;
              width: 10px;
              height: 1.1em;
              margin-left: 6px;
              transform: translateY(2px);
              background: currentColor;
              opacity: 0.85;
              animation: twBlink 1s steps(2, end) infinite;
              border-radius: 2px;
            }
            @keyframes twBlink {
              0%, 45% { opacity: 0.95; }
              46%, 100% { opacity: 0; }
            }
          `})]}),o.jsxs("section",{className:"container section-spacing section-solutions",children:[o.jsx(Lt,{overline:"Solutions",title:"",subtitle:"Explore platforms by solution category."}),o.jsx(Yh,{})]}),o.jsx(qh,{}),o.jsxs("section",{className:"container section-spacing home-specs-wrap",children:[o.jsxs("div",{ref:c,className:"home-specs-showcase fade-in-up",children:[o.jsxs("header",{className:"home-specs-header",children:[o.jsx("p",{className:"overline",children:"Technical specs"}),o.jsx("h2",{className:"h2",children:"Engineering in focus"}),o.jsx("p",{className:"subtle home-specs-lead",children:"Documentation and drawings the way we build—precise, industrial, and ready for integration teams."})]}),o.jsxs("div",{className:"home-specs-grid","aria-label":"Product showcases and specification sheets",children:[o.jsxs("div",{className:"home-specs-hero",children:[o.jsx("img",{src:"/pictures/pc.jpeg",alt:"Robustrix industrial PC showcase",loading:"lazy",decoding:"async"}),o.jsx("div",{className:"home-specs-hero-overlay","aria-hidden":"true"}),o.jsxs("div",{className:"home-specs-hero-copy",children:[o.jsx("p",{className:"overline",children:"Our Main Products"}),o.jsx("h2",{className:"h2",children:"Engineered for rugged, AI-ready deployments"})]})]}),o.jsx("figure",{className:"home-specs-panel",children:o.jsx("img",{src:"/specs/1.jpeg",alt:"Robustrix product specification overview",loading:"lazy",decoding:"async"})}),o.jsx("figure",{className:"home-specs-panel",children:o.jsx("img",{src:"/specs/2.jpeg",alt:"Robustrix product specification detail",loading:"lazy",decoding:"async"})}),o.jsx("figure",{className:"home-specs-panel",children:o.jsx("img",{src:"/specs/3.jpeg",alt:"Robustrix product specification diagram",loading:"lazy",decoding:"async"})})]})]}),o.jsx("style",{children:`
            .home-specs-wrap {
              position: relative;
              overflow-x: clip;
            }
            .home-specs-wrap::before {
              content: '';
              pointer-events: none;
              position: absolute;
              inset: -32px -6vw 0;
              background:
                radial-gradient(ellipse 85% 55% at 15% 20%, rgba(2, 196, 249, 0.16), transparent 52%),
                radial-gradient(ellipse 55% 45% at 92% 75%, rgba(138, 63, 252, 0.12), transparent 48%);
              z-index: 0;
            }
            .home-specs-showcase {
              position: relative;
              z-index: 1;
              display: grid;
              gap: clamp(22px, 4vw, 38px);
              width: 100%;
            }
            .home-specs-header {
              max-width: 54ch;
              width: 100%;
            }
            .home-specs-header .h2 {
              line-height: 1.15;
            }
            .home-specs-lead {
              margin-top: 10px;
              font-size: clamp(15px, 1.85vw, 18px);
              line-height: 1.55;
            }
            .home-specs-hero {
              position: relative;
              display: grid;
              grid-template: 1fr / 1fr;
              aspect-ratio: 4 / 3;
              min-height: clamp(200px, 38vw, 320px);
              border-radius: clamp(14px, 2vw, 22px);
              overflow: hidden;
              border: 1px solid rgba(2, 196, 249, 0.32);
              background: var(--home-section-dark, #031f27);
            }
            .home-specs-hero:hover {
              border-color: rgba(21, 227, 255, 0.85);
            }
            .home-specs-hero > img {
              grid-area: 1 / 1;
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
              display: block;
            }
            .home-specs-hero-overlay {
              grid-area: 1 / 1;
              z-index: 1;
              background: linear-gradient(120deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.25));
              pointer-events: none;
            }
            .home-specs-hero-copy {
              grid-area: 1 / 1;
              z-index: 2;
              display: grid;
              align-content: center;
              padding: clamp(18px, 4vw, 28px);
              gap: 8px;
              color: #fff;
              text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
              pointer-events: none;
            }
            .home-specs-grid {
              display: grid;
              gap: clamp(14px, 2.4vw, 22px);
              grid-template-columns: 1fr;
              width: 100%;
            }
            .home-specs-grid > * {
              min-width: 0;
            }
            @media (min-width: 768px) {
              .home-specs-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                align-items: stretch;
              }
            }
            .home-specs-panel {
              position: relative;
              display: grid;
              grid-template: 1fr / 1fr;
              aspect-ratio: 4 / 3;
              min-height: clamp(200px, 38vw, 320px);
              margin: 0;
              padding: 0;
              border-radius: clamp(14px, 2vw, 22px);
              background: var(--home-section-dark, #031f27);
              border: 1px solid rgba(2, 196, 249, 0.32);
              box-shadow:
                0 0 0 1px rgba(255, 255, 255, 0.06) inset,
                0 22px 50px rgba(0, 0, 0, 0.4),
                0 0 40px rgba(2, 196, 249, 0.07);
              overflow: hidden;
            }
            .home-specs-panel:hover {
              border-color: rgba(21, 227, 255, 0.85);
            }
            .home-specs-panel > img {
              grid-area: 1 / 1;
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
              display: block;
            }

            @media (max-width: 767px) {
              section.home-specs-wrap.container {
                padding-left: max(var(--container-pad), env(safe-area-inset-left, 0px));
                padding-right: max(var(--container-pad), env(safe-area-inset-right, 0px));
              }
              section.home-specs-wrap.section-spacing {
                padding-block: clamp(32px, 7vw, 64px);
              }
              .home-specs-wrap::before {
                inset: -16px 0 0;
              }
              .home-specs-showcase {
                gap: clamp(14px, 4vw, 22px);
              }
              .home-specs-header .h2 {
                font-size: clamp(1.35rem, 6.2vw, 1.85rem);
              }
              .home-specs-lead {
                font-size: clamp(14px, 3.8vw, 16px);
                line-height: 1.5;
              }
              .home-specs-hero {
                min-height: clamp(168px, 52vw, 260px);
                border-radius: 12px;
              }
              .home-specs-hero > img {
                object-position: center;
              }
              .home-specs-hero-copy {
                padding: 14px 14px 16px;
                align-content: end;
                justify-items: start;
              }
              .home-specs-hero-copy .overline {
                font-size: 0.68rem;
                letter-spacing: 0.1em;
              }
              .home-specs-hero-copy .h2 {
                font-size: clamp(1rem, 4.8vw, 1.28rem);
                line-height: 1.22;
                max-width: 20ch;
              }
              .home-specs-grid {
                gap: 12px;
              }
              .home-specs-panel {
                border-radius: 12px;
                min-height: clamp(160px, 52vw, 260px);
                box-shadow:
                  0 0 0 1px rgba(255, 255, 255, 0.06) inset,
                  0 12px 28px rgba(0, 0, 0, 0.35),
                  0 0 28px rgba(2, 196, 249, 0.06);
              }
            }

            @media (max-width: 380px) {
              .home-specs-grid {
                gap: 10px;
              }
              .home-specs-hero {
                min-height: min(200px, 58vw);
              }
              .home-specs-panel {
                min-height: min(200px, 58vw);
              }
              .home-specs-hero-copy .h2 {
                max-width: none;
              }
            }
          `})]}),o.jsxs("section",{className:"container section-spacing",children:[o.jsxs("div",{ref:e,className:"about-top fade-in-up",children:[o.jsxs("div",{className:"about-copy",children:[o.jsx("p",{className:"stars","aria-label":"5 Star Rating",children:"★★★★★"}),o.jsx("p",{className:"overline",children:"More About US"}),o.jsx("h2",{className:"h2",children:"Why Choose Robustrix IT Solutions?"}),o.jsx("p",{className:"subtle",children:"At Robustrix IT Solutions, we redefine industrial computing by integrating AI-ready, fanless embedded PCs that power next-generation automation, robotics, and machine vision."}),o.jsxs("ul",{className:"why",children:[o.jsxs("li",{children:[o.jsx("b",{children:"Uncompromising Durability"})," — Military-grade toughness for extreme industrial conditions."]}),o.jsxs("li",{children:[o.jsx("b",{children:"AI-Powered Performance"})," — High-speed processing for robotics, smart factories, and ML applications."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Silence & Efficiency"})," — Fanless cooling systems for dust-proof, noise-free operation."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Seamless Integration"})," — Easy deployment without complex modifications."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Industry 4.0 Ready"})," — Built for the evolving needs of industrial automation."]})]})]}),o.jsx("div",{className:"about-visual",children:o.jsx("img",{src:"/pictures/home1.png",alt:"Industrial AI computing",loading:"lazy",decoding:"async"})})]}),o.jsxs("div",{ref:r,className:"who fade-in-up",children:[o.jsx("h3",{className:"h2",children:"Who We Are"}),o.jsx("p",{className:"subtle",children:"We are global pioneers in AI-driven industrial computing. Our Fanless Embedded PCs are transforming industries with machine vision, robotics, and AI automation—setting new standards in high-performance, resilient computing. Our mission is to empower India’s industries with AI-ready solutions that turn factories into intelligent hubs and machines into collaborative assets."})]}),o.jsxs("div",{ref:n,className:"apps fade-in-up",id:"ai-applications",children:[o.jsx("h3",{className:"h2",children:"Applications of Our AI-Driven Solutions"}),o.jsx("div",{ref:i,className:"app-grid fade-in-up-stagger",children:Xh.map(u=>o.jsxs("article",{className:"card app-card",children:[o.jsx("h4",{children:u.title}),o.jsx("ul",{children:u.bullets.map((d,p)=>o.jsx("li",{children:d},p))}),o.jsx(Z,{className:"link",to:`/applications/${u.id}`,children:"Learn More"})]},u.id))})]}),o.jsxs("div",{ref:a,className:"bharat fade-in-up",children:[o.jsx("h3",{className:"h2",children:"Our Commitment to Bharat"}),o.jsxs("ul",{className:"why",children:[o.jsxs("li",{children:[o.jsx("b",{children:"Skill India"})," — Training engineers in edge computing, AI, and robotics."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Sustainable Innovation"})," — Energy-efficient solutions supporting green initiatives."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Make in India"})," — Local assembly hubs to strengthen India’s tech independence."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Industry Collaboration"})," — Partnerships with manufacturers and researchers."]}),o.jsxs("li",{children:[o.jsx("b",{children:"AI Research & Development"})," — Continuous innovation for state-of-the-art solutions."]})]})]}),o.jsx("style",{children:`
            .about-top {
              display: grid; gap: 24px; grid-template-columns: 1fr;
              align-items: center;
              margin-bottom: 64px; /* add more space before "Who We Are" */
            }
            @media (min-width: 1024px) {
              .about-top { grid-template-columns: 1.1fr 0.9fr; }
            }
            .about-visual img {
              width: 100%; height: auto; border-radius: 12px; box-shadow: var(--shadow-md);
            }
            .stars { color: #f8b400; font-size: 22px; letter-spacing: 2px; margin-bottom: 6px; }
            .why { margin-top: 12px; display: grid; gap: 8px; }
            .who {
              margin-top: 64px; /* add more vertical separation */
              margin-bottom: 64px; /* consistent gap below */
              background: var(--color-brand-primary-dark); /* primary dark background */
              color: var(--home-text-white, #FFFFFF);
              padding: 24px;
              border-radius: 14px;
              box-shadow: var(--shadow-md);
            }
            .who .subtle { color: var(--home-text-white, #FFFFFF); }
            .apps { margin-top: 64px; margin-bottom: 64px; }
            .app-grid { display: grid; gap: 24px; grid-template-columns: repeat(1, 1fr); }
            @media (min-width: 1024px) {
              .app-grid { grid-template-columns: repeat(4, 1fr); }
            }
            .app-card { padding: 16px; display: grid; gap: 10px; }
            .app-card h4 { font-weight: 900; }
            .app-card ul { display: grid; gap: 6px; color: var(--home-text-white, #FFFFFF); }
            .bharat { margin-top: 64px; margin-bottom: 64px; }
          `})]}),o.jsxs("section",{className:"container section-spacing",id:"blog-articles",children:[o.jsx(Lt,{overline:"Latest",title:"Latest Blog & Articles",subtitle:"Insights on industrial AI, fanless computing, and edge systems from Robustrix."}),o.jsx(h1,{})]}),o.jsxs("section",{className:"container section-spacing",children:[o.jsxs("div",{ref:s,className:"coming-soon-section fade-in-up",children:[o.jsxs("div",{className:"coming-soon-content",children:[o.jsx("p",{className:"overline",children:"Coming Soon"}),o.jsx("h2",{className:"h2",children:"Robotic AI Dog"}),o.jsx("p",{className:"subtle",children:"Experience the future of autonomous robotics with our revolutionary AI-powered robotic dog. Designed with cutting-edge artificial intelligence and precision engineering, this advanced companion brings together the power of machine learning, computer vision, and autonomous navigation to deliver unprecedented capabilities."}),o.jsxs("div",{className:"coming-soon-features",children:[o.jsxs("div",{className:"feature-item",children:[o.jsx("h4",{children:"🤖 Advanced AI Intelligence"}),o.jsx("p",{children:"Powered by next-generation AI algorithms for intelligent decision-making and adaptive behavior."})]}),o.jsxs("div",{className:"feature-item",children:[o.jsx("h4",{children:"👁️ Computer Vision"}),o.jsx("p",{children:"State-of-the-art vision systems for object recognition, navigation, and real-time environment mapping."})]}),o.jsxs("div",{className:"feature-item",children:[o.jsx("h4",{children:"🚀 Autonomous Navigation"}),o.jsx("p",{children:"Self-navigating capabilities with obstacle avoidance and path planning for seamless operation."})]}),o.jsxs("div",{className:"feature-item",children:[o.jsx("h4",{children:"🔋 Long-lasting Performance"}),o.jsx("p",{children:"Optimized power management for extended operational hours with efficient battery technology."})]})]}),o.jsx("p",{className:"coming-soon-note",children:"Stay tuned for the official launch of our Robotic AI Dog. Be among the first to experience the next generation of intelligent robotics solutions."})]}),o.jsxs("div",{className:"coming-soon-visual",children:[o.jsx("img",{src:"/products/robodog.jpeg",alt:"Robotic AI Dog - Coming Soon",loading:"lazy",decoding:"async"}),o.jsx("div",{className:"coming-soon-badge",children:"Coming Soon"})]})]}),o.jsx("style",{children:`
            .coming-soon-section {
              display: grid;
              gap: 32px;
              grid-template-columns: 1fr;
              align-items: center;
              margin-bottom: 48px;
              background: var(--home-section-dark);
              padding: 32px;
              border-radius: 16px;
              box-shadow: 0 10px 40px rgba(0,0,0,.3);
              border: 1px solid rgba(2, 196, 249, 0.1);
            }
            @media (min-width: 1024px) {
              .coming-soon-section {
                grid-template-columns: 1fr 1fr;
                gap: 48px;
                padding: 48px;
              }
            }
            .coming-soon-content {
              display: grid;
              gap: 16px;
            }
            .coming-soon-features {
              display: grid;
              gap: 16px;
              margin-top: 24px;
            }
            .feature-item {
              padding: 16px;
              background: rgba(2, 196, 249, 0.05);
              border-radius: 8px;
              border-left: 3px solid var(--home-accent-blue);
            }
            .feature-item h4 {
              font-size: 18px;
              font-weight: 700;
              color: var(--home-accent-blue);
              margin-bottom: 8px;
              font-family: 'Orbitron', ui-sans-serif, system-ui;
            }
            .feature-item p {
              color: var(--home-text-gray);
              font-size: 14px;
              line-height: 1.6;
            }
            .coming-soon-note {
              margin-top: 24px;
              padding: 16px;
              background: rgba(2, 196, 249, 0.1);
              border-radius: 8px;
              color: var(--home-text-white);
              font-style: italic;
              border: 1px solid rgba(2, 196, 249, 0.2);
            }
            .coming-soon-visual {
              position: relative;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0,0,0,.4);
            }
            .coming-soon-visual img {
              width: 100%;
              height: auto;
              display: block;
              border-radius: 12px;
            }
            .coming-soon-badge {
              position: absolute;
              top: 20px;
              right: 20px;
              background: var(--home-button-blue);
              color: var(--home-text-white);
              padding: 8px 16px;
              border-radius: 20px;
              font-weight: 700;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 1px;
              box-shadow: 0 4px 12px rgba(0, 201, 255, 0.4);
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.9; transform: scale(1.05); }
            }
          `})]}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx(Lt,{overline:"Contact",title:"Let's Connect",subtitle:"+91 9090020245 • info@therobustrix.com • Dwarka Sector-12, New Delhi"}),o.jsxs("div",{ref:l,className:"home-contact-grid fade-in-up",children:[o.jsxs("div",{className:"home-contact-card",children:[o.jsxs("p",{children:[o.jsx("b",{children:"Phone:"})," ",o.jsx("a",{className:"link",href:"tel:+919090020245",children:"+91 9090020245"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"Email:"})," ",o.jsx("a",{className:"link",href:"mailto:info@therobustrix.com",children:"info@therobustrix.com"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"Address:"}),o.jsx("br",{}),"212, City Centre Mall, Dwarka Sector-12, New Delhi"]})]}),o.jsx("div",{className:"home-map-wrap",children:o.jsx("iframe",{title:"Robustrix IT Solutions - Map (Home)",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",src:"https://www.google.com/maps?q=212%2C%20City%20Centre%20Mall%2C%20Dwarka%20Sector-12%2C%20New%20Delhi&output=embed"})})]}),o.jsx("style",{children:`
            .home-contact-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
            @media (min-width: 1024px) { .home-contact-grid { grid-template-columns: 1fr 1.6fr; } }
            .home-contact-card {
              background: #fff; border-radius: 12px; box-shadow: var(--shadow-sm);
              padding: 16px; display: grid; gap: 8px;
            }
            .home-map-wrap iframe { width: 100%; height: 360px; border: 0; border-radius: 12px; box-shadow: var(--shadow-sm); }
          `})]}),o.jsx("style",{children:`
          /* Home page theme variables from requested palette */
          .home-theme {
            --home-primary: #02C4F9;
            --home-primary-dark: #0099C4;
            --home-accent-blue: #15E3FF;
            --home-bg-dark: #022C36;
            --home-bg-black: #000000;
            --home-section-dark: #031F27;
            --home-text-white: #FFFFFF;
            --home-text-gray: #B5BABB;
            --home-highlight-cyan: #29D5FF;
            --home-button-blue: #00C9FF;
            --home-button-blue-hover: #00A3D6;
            --home-contact-purple: #8A3FFC;
            background: var(--home-bg-dark);
            color: var(--home-text-white);
          }

          /* Typography */
          .home-theme .overline { color: var(--home-accent-blue); }
          .home-theme .h2 { color: var(--home-text-white); }
          .home-theme .subtle { color: var(--home-text-gray); }
          .home-theme .link { color: var(--home-highlight-cyan); }

          /* Buttons */
          .home-theme .btn {
            --btn-glow: rgba(0, 201, 255, 0.45);
            --btn-glow-strong: rgba(21, 227, 255, 0.72);
          }
          .home-theme .btn-primary {
            background: linear-gradient(120deg, var(--home-button-blue) 0%, var(--home-accent-blue) 50%, var(--home-button-blue-hover) 100%);
            background-size: 220% 220%;
            border-color: rgba(0, 201, 255, 0.55);
            color: var(--home-text-white);
            box-shadow:
              0 12px 32px rgba(0, 0, 0, 0.35),
              0 0 0 1px rgba(0, 201, 255, 0.28),
              0 16px 44px rgba(0, 201, 255, 0.55);
          }
          .home-theme .btn-primary:hover {
            background-position: 100% 0;
            box-shadow:
              0 14px 36px rgba(0, 0, 0, 0.38),
              0 0 0 1px rgba(0, 201, 255, 0.4),
              0 18px 52px rgba(0, 201, 255, 0.65);
          }
          .home-theme .btn-outline {
            background: rgba(0, 201, 255, 0.08);
            border-color: rgba(21, 227, 255, 0.45);
            color: var(--home-accent-blue);
            box-shadow:
              0 10px 28px rgba(0, 0, 0, 0.28),
              0 0 0 1px rgba(21, 227, 255, 0.22),
              0 14px 40px rgba(0, 201, 255, 0.4);
          }
          .home-theme .btn-outline:hover {
            border-color: rgba(41, 213, 255, 0.75);
            color: var(--home-highlight-cyan);
            background: rgba(0, 201, 255, 0.15);
            box-shadow:
              0 12px 32px rgba(0, 0, 0, 0.32),
              0 0 0 1px rgba(41, 213, 255, 0.35),
              0 16px 46px rgba(0, 201, 255, 0.48);
          }

          /* Cards and surfaces */
          .home-theme .card,
          .home-theme .home-contact-card,
          .home-theme .app-card {
            background: var(--home-section-dark);
            color: var(--home-text-white);
            box-shadow: 0 10px 30px rgba(0,0,0,.25);
            border: 1px solid rgba(255,255,255,0.06);
          }

          /* Solutions tiles */
          .home-theme .solutions .thumb { background: var(--home-section-dark); }
          .home-theme .solutions .label { color: var(--home-text-white); }

          /* News */
          .home-theme .news-card .date { color: var(--home-text-gray); }

          /* Contact card & map */
          .home-theme .home-map-wrap iframe { box-shadow: 0 10px 30px rgba(0,0,0,.35); }
        `})]})})}const x1=[{title:"AI@Edge Board with NVIDIA® Jetson T5000™",model:"BOXER-8741AI"},{title:"AI@Edge Compact Fanless Embedded AI System",model:"BOXER-8651AI-PLUS"},{title:"AI@Edge Fanless Embedded AI System with NVIDIA®",model:"BOXER-8642AI"},{title:"AI@Edge Fanless PoE Embedded AI System with NVIDIA® Jetson Orin™ NX",model:"BOXER-8658AI"},{title:"AI@Edge Fanless Embedded AI System with NVIDIA® Jetson AGX Orin™",model:"BOXER-8645AI"},{title:"AI@Edge Fanless PoE Embedded AI System with NVIDIA® Jetson AGX Orin™",model:"BOXER-8646AI"},{title:"AI@Edge Compact Fanless Embedded BOX PC with NVIDIA AGX Orin",model:"BOXER-8641AI"},{title:"AI@Edge Fanless Embedded Box PC with NVIDIA Jetson AGX Orin 32GB",model:"BOXER-8640AI"},{title:"AI@Edge Compact Fanless Embedded AI System with NVIDIA Orin NX",model:"BOXER-8653AI"},{title:"AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin™ NX",model:"BOXER-8652AI"},{title:"AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin NX",model:"BOXER-8651AI"},{title:"AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin Nano™",model:"BOXER-8623AI"},{title:"AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin Nano™ with Super Mode",model:"BOXER-8622AI"},{title:"AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin Nano™ with Super Mode",model:"BOXER-8621AI"},{title:"Embedded Box PC with Nvidia Jetson AGX Xavier",model:"BOXER-8240AI"},{title:"AI@Edge Fanless Embedded AI System with NVIDIA Jetson Xavier NX, HDMI Input x4",model:"BOXER-8256AI"},{title:"AI@Edge Compact Fanless Embedded BOX PC with NVIDIA® Jetson Xavier™ NX",model:"BOXER-8253AI"},{title:"Embedded Box PC with NVIDIA Xavier NX",model:"BOXER-8251AI"},{title:"AI@Edge Embedded System with NVIDIA® Jetson Nano™",model:"BOXER-8224AI"},{title:"AI@Edge Compact Fanless Embedded BOX PC",model:"BOXER-8221AI"},{title:"AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Nano™",model:"BOXER-8223AI"},{title:"AI@Edge Fanless Embedded AI System with NVIDIA® Jetson Orin NX",model:"BOXER-8655AI"},{title:"AI System with NVIDIA® Jetson AGX Orin™",model:"BOXER-8641AI-PLUS"},{title:"AI@Edge Embedded board with NVIDIA® Jetson Orin™ NX",model:"BOXER-8654AI-KIT"},{title:"AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin™ NX",model:"BOXER-8653AI-PLUS"}],v1=["/products/21.5 Digital LCD Monitor.png","/products/aisolutions.png","/products/computingsystem.png","/products/embeddedboards.png","/products/iotsystems.png","/products/networksolutions.png","/products/panelpc.png","/products/ROBO AI INDUSTRIAL PRO.png","/products/ROBO_AI_30000.png","/products/upboards.png"];function y1(){const t=T(),e=T(),r=S.useMemo(()=>{const i=[...v1].sort(()=>Math.random()-.5);return x1.map((a,s)=>({...a,modelView:a.model.replace(/^BOXER/gi,"ROBO"),image:i[s%i.length]}))},[]);function n(i){i.currentTarget.src="/pictures/aiplatforms.jpg"}return o.jsxs("main",{children:[o.jsx("section",{ref:t,className:"ai-hero fade-in-up",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"NVIDIA® AI Solutions"}),o.jsx("p",{className:"ai-sub",children:"As an industrial AI hardware pioneer, Robustrix continually works to bring its customers the most advanced AI edge computing platforms featuring the NVIDIA Jetson™ line of SoCs. Robustrix’s embedded AI systems range utilizes the full spectrum of NVIDIA SoMs, from the cost‑efficient NVIDIA Jetson Nano™ all the way to the exceptionally powerful NVIDIA® Jetson Thor™."})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{ref:e,className:"ai-grid fade-in-up-stagger",children:r.map(i=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:i.image,alt:i.modelView,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:n})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:i.title}),o.jsx("p",{className:"ai-card-model",children:i.modelView})]}),o.jsx("div",{className:"ai-card-actions",children:o.jsx("a",{href:"https://drive.google.com/file/d/1V2lWp_aqRs0okhO3mNIL0uzBgqL3GxUZ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:"Datasheet"})})]},i.model))})}),o.jsx("style",{children:`
        .ai-hero {
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-ink-100);
          padding-block: clamp(28px, 6vw, 48px);
        }
        .ai-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 900;
          line-height: 1.1;
          color: var(--color-ink-900);
        }
        .ai-sub {
          margin-top: 10px;
          color: var(--color-ink-700);
          max-width: 900px;
        }
        .ai-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1023px) {
          .ai-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 719px) {
          .ai-grid { grid-template-columns: 1fr; }
        }
        .ai-card {
          display: grid;
          gap: 10px;
          padding: 16px;
        }
        .ai-thumb {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
          padding: 10px;
          box-sizing: border-box;
        }
        .ai-thumb img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .ai-card-title {
          font-size: 1.02rem;
          font-weight: 800;
          line-height: 1.3;
        }
        .ai-card-model {
          color: var(--color-brand-primary);
          font-weight: 900;
          letter-spacing: .02em;
        }
        .ai-card-actions {
          display: flex;
          gap: 8px;
          margin-top: 6px;
        }
      `})]})}const w1="Featuring a blend of both efficiency and power-focused processing options such as the Intel® Processor N-Series (formerly Alder Lake-N) and Intel® Core™ Processors (formerly Alder Lake-P) alongside extensive I/O support, Robustrix’s DIN Rail Box PC range is tailored for easy installation and convenient use, with vertical orientation making access to connectors immediate while DIN rail mounted.",b1="From factory automation to robot controller applications, Robustrix’s DIN Rail Box PCs represent the perfect blend of industrial features, interfaces, and deployment ease, making them an attractive choice for discreet installation in harsh settings.",_1=[{title:"DIN Rail Mount Embedded BOX PC with Intel Atom®",model:"BOXER-6711-ADN",sub:"Intel Atom® x7211E / Intel® Processor N-Series"},{title:"DIN Rail Fanless Embedded BOX PC with 12th Generation Intel® Core™ Processors",model:"BOXER-6751-ADP",sub:"12th Gen Intel® Core™"},{title:"Din Rail Mount Embedded BOX PC with Intel® Atom™",model:"BOXER-6710",sub:"Intel® Atom™ Processor N4200 or N3350"}];function k1(){const t=T(),e=T(),r=S.useMemo(()=>_1.map((i,a)=>({...i,modelView:i.model.replace(/^BOXER/gi,"ROBO"),image:`https://source.unsplash.com/640x360/?din,rail,industrial,pc,intel&sig=${a}`})),[]);function n(i){i.currentTarget.src="/products/computingsystem.png"}return o.jsxs("main",{children:[o.jsx("section",{ref:t,className:"ai-hero fade-in-up",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"Computing Systems — DIN Rail Box PCs"}),o.jsx("p",{className:"ai-sub",children:w1}),o.jsx("p",{className:"ai-sub",children:b1})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{ref:e,className:"ai-grid fade-in-up-stagger",children:r.map(i=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:i.image,alt:i.modelView,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:n})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:i.title}),o.jsx("p",{className:"ai-card-sub",children:i.sub}),o.jsx("p",{className:"ai-card-model",children:i.modelView})]}),o.jsx("div",{className:"ai-card-actions",children:o.jsx("a",{href:"https://drive.google.com/file/d/1V2lWp_aqRs0okhO3mNIL0uzBgqL3GxUZ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:"Datasheet"})})]},i.model))})}),o.jsx("style",{children:`
        .ai-hero {
          background: linear-gradient(180deg, #f4f7ff 0%, #ffffff 100%);
          border-bottom: 1px solid var(--color-ink-100);
          padding-block: clamp(28px, 6vw, 48px);
        }
        .ai-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 900;
          line-height: 1.1;
        }
        .ai-sub {
          margin-top: 10px;
          color: var(--color-ink-600, #3d4656);
          max-width: 900px;
        }
        .ai-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1023px) {
          .ai-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 719px) {
          .ai-grid { grid-template-columns: 1fr; }
        }
        .ai-card {
          display: grid;
          gap: 10px;
          padding: 16px;
        }
        .ai-thumb {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
          padding: 10px;
          box-sizing: border-box;
        }
        .ai-thumb img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .ai-card-title {
          font-size: 1.02rem;
          font-weight: 800;
          line-height: 1.3;
        }
        .ai-card-sub { color: var(--color-ink-600, #3d4656); }
        .ai-card-model {
          color: var(--color-brand-primary);
          font-weight: 900;
          letter-spacing: .02em;
        }
        .ai-card-actions {
          display: flex;
          gap: 8px;
          margin-top: 6px;
        }
      `})]})}function N1(){const t=T(),e=T(),r=[{id:"sbc",title:"Embedded Single Board Computers",img:"/products/embeddedboards.png"},{id:"com",title:"Computer-on-Modules",img:"/products/embeddedboards.png"},{id:"mb",title:"Industrial Motherboards",img:"/products/embeddedboards.png"},{id:"risc",title:"RISC Single Board Computers",img:"/products/embeddedboards.png"}];function n(i){i.currentTarget.src="/products/embeddedboards.png"}return o.jsxs("main",{children:[o.jsx("section",{ref:t,className:"ai-hero fade-in-up",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"Embedded Boards"}),o.jsx("p",{className:"ai-sub",children:"Robustrix is a leading manufacturer of embedded boards, providing top‑quality products for a variety of applications. Our embedded boards are designed to be compact, reliable, and highly customizable, making them the perfect solution for a range of environments."}),o.jsx("p",{className:"ai-sub",children:"One of the key advantages of Robustrix's embedded boards is their versatility. With a wide range of processor options and numerous connectivity options, our embedded boards can be tailored to meet the specific needs of your project. Whether you need a board for a simple application or a more complex system, Robustrix has an embedded board that can handle it."}),o.jsx("p",{className:"ai-sub",children:"In addition to their versatility, Robustrix's embedded boards are also known for their reliability. Our boards are built to withstand harsh environments, making them ideal for use in industrial settings or other challenging conditions. With a long lifespan and low failure rate, our embedded boards can help you reduce downtime and increase productivity."}),o.jsx("p",{className:"ai-sub",children:"Robustrix's embedded boards are also easy to use, with a range of development tools and resources available to help you get your project up and running quickly. Whether you're a seasoned developer or new to the world of embedded systems, Robustrix's embedded boards are a great choice."})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{ref:e,className:"eb-grid fade-in-up-stagger",children:r.map(i=>o.jsxs("article",{className:"card eb-card",children:[o.jsx("div",{className:"eb-thumb",children:o.jsx("img",{src:i.img,alt:i.title,loading:"lazy",decoding:"async",onError:n})}),o.jsx("h3",{className:"eb-title",children:i.title})]},i.id))})}),o.jsx("style",{children:`
        .ai-hero {
          background: linear-gradient(180deg, #f4f7ff 0%, #ffffff 100%);
          border-bottom: 1px solid var(--color-ink-100);
          padding-block: clamp(28px, 6vw, 48px);
        }
        .ai-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 900;
          line-height: 1.1;
        }
        .ai-sub {
          margin-top: 10px;
          color: var(--color-ink-600, #3d4656);
          max-width: 900px;
        }
        .eb-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 1024px) {
          .eb-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .eb-card {
          text-decoration: none;
          color: inherit;
          display: grid;
          justify-items: center;
          gap: 12px;
          padding: 14px 8px 18px 8px;
          border-radius: var(--radius-sm);
          transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
        }
        .eb-card:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .eb-thumb {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
          padding: 10px;
          box-sizing: border-box;
        }
        .eb-thumb img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .eb-title {
          text-align: center;
          font-weight: 800;
          color: var(--color-ink-700);
        }
      `})]})}const j1="As one of the leading manufacture of advanced hardware platform for network computing and security solutions, Robustrix's full range of network appliances empowers SD-WAN, SDN, NFV, Wireless Gateway, NGFW, Intrusion Detection/Prevention, WAN Optimization, Network Access Control, Load Balancing, Web Content Filtering, Unified Threat Management, and Wireless Network Security for the most versatile and cost-effective networking solution on the market.",S1="Offering x86-based platforms from Intel® Atom™ all the way to Intel® Xeon processors, and in desktop, 1U and 2U form factors, Robustrix's team of experienced network engineers have helped dozens of companies deploy reliable network appliances around the globe with faster time-to-market and lower development costs based on state-of-the-art hardware platforms, unmatched service quality and long-term support.",P1=[{id:"desktop",title:"Desktop Network Appliance",to:"/network/desktop",img:"/products/networksolutions.png"},{id:"rack",title:"Rackmount Network Appliance",to:"/network/rackmount",img:"/products/networksolutions.png"},{id:"industrial",title:"Industrial Cyber Security Appliance",to:"/network/industrial-security",img:"/products/networksolutions.png"},{id:"modules",title:"Network Interface Module",to:"/network/modules",img:"/products/networksolutions.png"}];function I1(){const t=T(),e=T();function r(n){n.currentTarget.src="/products/networksolutions.png"}return o.jsxs("main",{children:[o.jsx("section",{ref:t,className:"ai-hero fade-in-up",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"Network Appliance"}),o.jsx("p",{className:"ai-sub",children:j1}),o.jsx("p",{className:"ai-sub",children:S1}),o.jsx("p",{className:"ai-sub",children:o.jsx("a",{className:"link",href:"#",target:"_blank",rel:"noreferrer",children:"Click to Download or View the latest Network Appliances brochure"})})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{ref:e,className:"eb-grid fade-in-up-stagger",children:P1.map(n=>o.jsxs(Z,{to:n.to,className:"card eb-card",children:[o.jsx("div",{className:"eb-thumb",children:o.jsx("img",{src:n.img,alt:n.title,loading:"lazy",decoding:"async",onError:r})}),o.jsx("h3",{className:"eb-title",children:n.title})]},n.id))})}),o.jsx("style",{children:`
        .ai-hero {
          background: linear-gradient(180deg, #f4f7ff 0%, #ffffff 100%);
          border-bottom: 1px solid var(--color-ink-100);
          padding-block: clamp(28px, 6vw, 48px);
        }
        .ai-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 900;
          line-height: 1.1;
        }
        .ai-sub {
          margin-top: 10px;
          color: var(--color-ink-600, #3d4656);
          max-width: 900px;
        }
        .eb-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 1024px) {
          .eb-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .eb-card {
          text-decoration: none;
          color: inherit;
          display: grid;
          justify-items: center;
          gap: 12px;
          padding: 14px 8px 18px 8px;
          border-radius: var(--radius-sm);
          transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
        }
        .eb-card:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .eb-thumb {
          display: grid;
          place-items: center;
          width: 100%;
          height: 120px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
          overflow: hidden;
        }
        .eb-thumb img {
          max-width: 160px;
          max-height: 110px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .eb-title {
          text-align: center;
          font-weight: 800;
          color: var(--color-ink-700);
        }
      `})]})}const C1=[{title:"FWS-2292 | Intel® Processor N-series",model:"FWS-2292",sub:"FWS-2292 | Network Appliance with Intel® Processor N-series"},{title:"FWS-2291 | Intel® Alder lake N / Amston lake",model:"FWS-2291",sub:"FWS-2291 | Network Appliance with Intel® Alder lake N / Amston lake SoC Processor"},{title:"FWS-2370 | Intel Atom® Processor C Series",model:"FWS-2370",sub:"Network Appliance with Intel Atom® Processor C Series/Intel Atom® Processor P Series"},{title:"FWS-2290 | Intel® Processor N-series SoC",model:"FWS-2290",sub:"FWS-2290 | Network Appliance with Intel® Processor N-series"},{title:"Desktop Network Appliance with Intel Apollo Lake",model:"FWS-2277",sub:"Compact Desktop Network Appliance with Intel® Apollo Lake Processor | Robustrix FWS-2277"},{title:"Intel Elkhart lake Desktop Network Appliance",model:"FWS-2280",sub:"Flexiwan Certified | Intel Elkhart lake | Desktop Network Appliance with Atom x6000E | FWS-2280 | SD-WAN suitable"},{title:"FWS-2365 | Desktop Network Appliance",model:"FWS-2365",sub:"FlexiWan certified | Desktop Network Appliance with Intel® Atom® Processor C3000 series | Robustrix SD-WAN FWS-2365"},{title:"Desktop 3 LAN Ports Network Appliance",model:"FWS-2275",sub:"FWS-2275 | Desktop 3 LAN Ports Network Appliance with Intel Celeron Processor N3350"},{title:"Desktop 4 LAN Ports Network Appliance",model:"FWS-2276",sub:"Desktop 4 LAN Ports Network Appliance with Intel® Celeron® Processor N3350"},{title:"Desktop Network Appliance with Intel® Atom™ Proc",model:"FWS-2360",sub:"FWS-2360 - Network Appliances"},{title:"Desktop 6 LAN Ports Network Appliance with Intel",model:"FWS-2273",sub:"Desktop 6 LAN Ports Network Appliance with Intel® Celeron® N3350 | FWS-2273"},{title:"Desktop 4 LAN Ports Network Appliance with Intel",model:"FWS-2272",sub:"FWS-2272, Desktop Network Security Appliance"},{title:"Desktop 6 LAN Ports Network Appliance Intel® Ato",model:"FWS-2271",sub:"FWS-2271 - Network Appliances"}];function E1(){const t=C1.map((r,n)=>({...r,modelView:r.model.replace(/^FWS/gi,"ROBO"),image:`https://source.unsplash.com/600x340/?network,desktop,appliance&sig=${n}`}));function e(r){r.currentTarget.src="/products/networksolutions.png"}return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title ai-blue",children:"Desktop Network Appliance"}),o.jsx("p",{className:"ai-sub",children:"x86 platforms from Intel® Atom™ to Intel® Xeon in compact desktop chassis, ideal for SD-WAN, NGFW, and UTM."})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{className:"ai-grid",children:t.map(r=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:r.image,alt:r.title,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:e})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:r.title}),o.jsx("p",{className:"ai-card-sub",children:r.sub}),o.jsx("p",{className:"ai-card-model",children:r.modelView})]}),o.jsx("div",{className:"ai-card-actions",children:o.jsx("a",{href:"https://drive.google.com/file/d/1V2lWp_aqRs0okhO3mNIL0uzBgqL3GxUZ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:"Datasheet"})})]},r.model))})}),o.jsx("style",{children:`
        .ai-blue { color: var(--color-brand-primary); }
        .ai-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1023px) {
          .ai-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 719px) {
          .ai-grid { grid-template-columns: 1fr; }
        }
        .ai-thumb {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
          padding: 10px;
          box-sizing: border-box;
        }
        .ai-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .ai-card-title { font-weight: 800; }
        .ai-card-sub { color: var(--color-ink-600, #3d4656); }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `})]})}const A1="AAEON’s Rackmount Network Appliances come with enterprise-grade 1U and 2U rackmounts along with a diverse selection of processors. Designed for scalability and flexible configurations, the appliances are secure and reliable systems that will consolidate demanding network applications. All Rackmount Network Appliances come with various combinations of Ethernet modules, including GbE and SFP Fiber LAN, PCI-E Bus expansion slots, and LCM with keypad control.",T1="Built to streamline security management in unmanned and harsh environments, all Appliances provide secure deployment for mission-critical frameworks and are designed to supplement existing network platforms in industrial environments with minimal configuration.",M1=[{title:"FWS-7370 | Rackmount Network Appliance",model:"FWS-7370",sub:"FWS-7370 | Network Appliance with Intel Atom® Processor P5300 Series"},{title:"FWS-7850 | 1U Rackmount Network Appliance",model:"FWS-7850",sub:"FWS-7850 | 1U Rackmount Network Appliance with 12th/13th Generation Intel® Core™ Processors"},{title:"1U Rackmount Network Appliance with 12th/13th Generation Intel® Core™ Processors",model:"FWS-7851",sub:"1U Rackmount Network Appliance with 12th/13th Generation Intel® Core™ Processors"},{title:"FWS-7541",model:"FWS-7541",sub:"FWS-7541 | 1U Rackmount Network Appliance with Intel® Xeon® D-1700 & D-1800 Processors"},{title:"1U Rackmount Comet Lake Platform Network Appliance",model:"FWS-7840",sub:"1U Rackmount Comet Lake Platform Network Appliance"},{title:"2U Rackmount Network Appliance with Dual 2nd Gen Intel® Xeon® Scalable Processors",model:"FWS-8600",sub:"FWS-8600 | 2U Rackmount Network Appliance with Dual 2nd Gen Intel® Xeon® Scalable Processors"},{title:"1U Rackmount Intel® 8th Generation Platform Network Appliance | Robustrix FWS-7831",model:"FWS-7831",sub:"1U Rackmount Intel® 8th Generation Platform Network Appliance | Robustrix FWS-7831"},{title:"FWS-7830 | 1U Rackmount Intel® 8th Generation Platform Network Appliance",model:"FWS-7830",sub:"FWS-7830 | 1U Rackmount Intel® 8th Generation Platform Network Appliance"},{title:"1U Rackmount 7 LAN Network Appliance",model:"FWS-7360",sub:"1U Rackmount 7 LAN Network Appliance with Intel® Atom™ C3758 SoC Processor"}];function R1(){const t=M1.map((r,n)=>({...r,modelView:r.model.replace(/^FWS/gi,"ROBO"),image:`https://source.unsplash.com/600x340/?rackmount,network,appliance&sig=${n}`}));function e(r){r.currentTarget.src="/products/networksolutions.png"}return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title ai-blue",children:"Rackmount Network Appliance"}),o.jsx("p",{className:"ai-sub",children:A1}),o.jsx("p",{className:"ai-sub",children:T1})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{className:"ai-grid",children:t.map(r=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:r.image,alt:r.title,loading:"lazy",decoding:"async",onError:e,referrerPolicy:"no-referrer"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:r.title}),o.jsx("p",{className:"ai-card-sub",children:r.sub}),o.jsx("p",{className:"ai-card-model",children:r.modelView})]}),o.jsx("div",{className:"ai-card-actions",children:o.jsx("a",{href:"https://drive.google.com/file/d/1V2lWp_aqRs0okhO3mNIL0uzBgqL3GxUZ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:"Datasheet"})})]},r.model))})}),o.jsx("style",{children:`
        .ai-blue { color: var(--color-brand-primary); }
        .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 1023px) { .ai-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 719px) { .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06); padding: 10px; box-sizing: border-box; }
        .ai-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .ai-card-title { font-weight: 800; }
        .ai-card-sub { color: var(--color-ink-600, #3d4656); }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `})]})}const O1="Built to protect the integrity and usability of industrial control systems and SCADA, Robustrix's Industrial Cyber Security (ICS) product series PC is designed for industrial resiliency, bringing superior reliability and supercomputing capabilities to harsh environments such as energy, manufacturing, and oil and gas industries. The ICS product series is reinforced by a tough steel casing and an aluminum heatsink to provide maximum thermal control, affording maximum reliability and interoperability within critical infrastructure and spaces. LAN bypass function is also supported, availing the user of a multitude of options such as cybersecurity, PLC protection and firewall management.",D1=[{title:"DIN Rail Industrial-Grade Network Appliance with Intel Atom® Processor X Series",model:"ICS-6280"},{title:"Industrial-Grade Network Appliance",model:"ICS-6270"}];function z1(){function t(e){e.currentTarget.src="/products/networksolutions.png"}return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title ai-blue",children:"Industrial Cyber Security Appliance"}),o.jsx("p",{className:"ai-sub",children:O1})]})}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("div",{className:"ai-grid",children:D1.map((e,r)=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:`https://source.unsplash.com/600x340/?industrial,security,ics&sig=${r}`,alt:e.title,onError:t,loading:"lazy",decoding:"async"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:e.title}),o.jsx("p",{className:"ai-card-model",children:e.model})]})]},e.model))}),o.jsx("div",{className:"impact-grid",style:{marginTop:"18px"},children:o.jsxs("article",{children:[o.jsx("h4",{children:"Applications"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Industrial Cyber Security"}),o.jsx("li",{children:"Critical Infrastructure Protection"}),o.jsx("li",{children:"Industrial Control System Security"})]})]})})]}),o.jsx("style",{children:`
        .ai-blue { color: var(--color-brand-primary); }
        .ai-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (max-width: 719px) { .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06); padding: 10px; box-sizing: border-box; }
        .ai-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .ai-card-title { font-weight: 800; }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `})]})}const F1="A major developer of Industry 4.0 computing solutions, AAEON launches the diverse Network Interface Module family, which feature PCI-Express host interfaces and offer a multitude of solutions tailored for virtual network deployment and management, supporting a wide range of virtual machine devices. Built to efficiently optimize the distribution and management of virtual workloads, the Network Interface Modules provide maximum scalability and reduce bottleneck impediments to the bare minimum. Configured for the deployment of virtual machine device queues, these modules are ideally suited for the consolidation of virtual network traffic, and are easily integrated into existing hardware and architecture.",L1=[{title:"NIM-S13E",model:"NIM-S13E",sub:"Intel® 82580EB (i350-AM4; Optional by request) PCI-Express 1G Copper Ethernet 4 Ports Module"},{title:"NIM-C13D",model:"NIM-C13D",sub:"Intel® 82580EB (i350-AM4; Optional by request) PCI-Express 1G Copper Ethernet 4 Ports Module"},{title:"NIM-S13D",model:"NIM-S13D",sub:"Intel® 82580EB (i350-AM4; Optional by request) PCI-Express 1G Copper Ethernet 4 Ports Module"},{title:"NIM-S13B",model:"NIM-S13B",sub:"Intel® 82580EB (i350-AM4; Optional by request)"},{title:"NIM-S26C",model:"NIM-S26C",sub:"Intel® Fortville XL710 PCI-Express 40G QSFP 2 Ports Module"},{title:"NIM-S26B",model:"NIM-S26B",sub:"Intel® 82580EB (i350-AM4; Optional by request)"},{title:"NIM-C13B",model:"NIM-C13B",sub:"Intel® 82580EB (i350-AM4; Optional by request)"}];function U1(){const t=L1.map((r,n)=>({...r,modelView:r.model.replace(/^NIM/gi,"ROBO"),image:`https://source.unsplash.com/600x340/?nic,module,network&sig=${n}`}));function e(r){r.currentTarget.src="/products/networksolutions.png"}return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title ai-blue",children:"Network Interface Module"}),o.jsx("p",{className:"ai-sub",children:F1})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{className:"ai-grid",children:t.map(r=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:r.image,alt:r.title,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:e})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:r.title}),o.jsx("p",{className:"ai-card-sub",children:r.sub}),o.jsx("p",{className:"ai-card-model",children:r.modelView})]})]},r.model))})}),o.jsx("style",{children:`
        .ai-blue { color: var(--color-brand-primary); }
        .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 1023px) { .ai-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 719px) { .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06); padding: 10px; box-sizing: border-box; }
        .ai-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .ai-card-title { font-weight: 800; }
        .ai-card-sub { color: var(--color-ink-600, #3d4656); }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `})]})}function B1(){const[t,e]=S.useState({name:"",phone:"",email:"",message:""}),[r,n]=S.useState(!1),i=T(),a=T(),s=T(),l=T(),c=T(),u=T(),d=T(),p=T(),m=T(),v=T(),y=T(),g=T();function w(f){const{name:x,value:b}=f.target;e(_=>({..._,[x]:b}))}function h(f){if(f.preventDefault(),!t.name||!t.email||!t.message){alert("Please fill name, email, and message.");return}n(!0),setTimeout(()=>n(!1),4e3),e({name:"",phone:"",email:"",message:""})}return o.jsxs("main",{children:[o.jsx("section",{ref:i,className:"ai-hero about-hero fade-in-up",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"About Us"}),o.jsx("h2",{className:"ai-kicker",children:"Engineering the Future of Industrial AI Computing"}),o.jsx("p",{className:"ai-sub",children:"At Robustrix IT Solutions, we are redefining the landscape of industrial computing with cutting-edge Fanless AI Embedded PCs. Our mission is simple yet ambitious: to build resilient, AI-powered solutions that empower industries to embrace the future of automation, robotics, and machine vision. Designed for India’s harshest industrial environments, our technology thrives where others fail, ensuring unparalleled durability, efficiency, and performance."}),o.jsx("p",{className:"ai-sub",children:"With a vision to make industrial computing smarter, stronger, and more sustainable, Robustrix IT Solutions is at the forefront of Industry 4.0, delivering AI-driven solutions that transform machines into intelligent collaborators and factories into innovation hubs."})]})}),o.jsxs("section",{ref:a,className:"container section-spacing fade-in-up story-section",children:[o.jsx("h3",{className:"h2",children:"Our Story"}),o.jsx("p",{className:"ai-sub",children:"Born from the need for high-performance, industrial-grade computing, Robustrix IT Solutions was founded to bridge the gap between AI-driven innovation and industrial reliability. We recognized that traditional computing systems were ill-equipped to handle the rigorous demands of manufacturing, automation, and edge AI applications. So, we set out to engineer something different—technology that’s not just powerful, but also silent, fanless, and built to last."}),o.jsx("p",{className:"ai-sub",children:"As we launch our cutting-edge solutions across India’s industrial sector, our goal is clear: to revolutionize the way businesses integrate AI into their operations. From smart manufacturing to autonomous robotics, we are shaping the future of industrial technology, one fanless AI PC at a time."})]}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("div",{ref:s,className:"fade-in-up",children:o.jsx("h3",{className:"h2",children:"What Makes Us Different?"})}),o.jsxs("div",{ref:l,className:"about-grid fade-in-up-stagger",children:[o.jsxs("article",{className:"about-card",children:[o.jsx("h4",{children:"AI-Driven Industrial Computing"}),o.jsx("p",{children:"We design and manufacture AI-ready, fanless embedded PCs that power a wide range of industrial applications, including machine vision, smart automation, and autonomous robotics."})]}),o.jsxs("article",{className:"about-card",children:[o.jsx("h4",{children:"Silent, Fanless, and Maintenance-Free"}),o.jsx("p",{children:"By eliminating fans and moving parts, we deliver ultra-durable, noiseless computing solutions that require minimal maintenance while delivering maximum efficiency."})]}),o.jsxs("article",{className:"about-card",children:[o.jsx("h4",{children:"Built for the Harshest Conditions"}),o.jsx("p",{children:"Our fanless industrial PCs are engineered to function flawlessly in dusty, high-temperature, and vibration-heavy environments, ensuring maximum reliability in extreme conditions."})]}),o.jsxs("article",{className:"about-card",children:[o.jsx("h4",{children:"Energy-Efficient & Sustainable"}),o.jsx("p",{children:"We believe in sustainable innovation. Our low-power AI computing solutions help industries reduce energy consumption and move towards a greener future."})]}),o.jsxs("article",{className:"about-card",children:[o.jsx("h4",{children:"Industry 4.0-Ready Solutions"}),o.jsx("p",{children:"We help businesses adopt smart automation, predictive maintenance, and real-time analytics to optimize performance and reduce downtime."})]}),o.jsxs("article",{className:"about-card",children:[o.jsx("h4",{children:"Committed to 'Make in India'"}),o.jsx("p",{children:"We are setting up local assembly hubs and collaborating with Indian engineers to drive domestic manufacturing and strengthen India's technological independence."})]})]})]}),o.jsxs("section",{ref:c,className:"container section-spacing fade-in-up",children:[o.jsx("h3",{className:"h2",children:"Our Core Values"}),o.jsxs("ul",{className:"list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"Innovation"})," – We push the boundaries of AI-driven industrial computing."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Reliability"})," – Built to withstand the toughest conditions."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Sustainability"})," – Energy-efficient designs for greener automation."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Collaboration"})," – Partnering with businesses and researchers."]})]})]}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("div",{ref:u,className:"fade-in-up",children:o.jsx("h3",{className:"h2",children:"Where Our Technology is Making an Impact"})}),o.jsxs("div",{ref:d,className:"impact-grid fade-in-up-stagger",children:[o.jsxs("article",{children:[o.jsx("h4",{children:"AI Vision Systems"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Automating defect detection in manufacturing and quality control."}),o.jsx("li",{children:"AI-powered real-time image processing for enhanced production efficiency."}),o.jsx("li",{children:"Machine learning algorithms for predictive maintenance and inspection."})]})]}),o.jsxs("article",{children:[o.jsx("h4",{children:"Autonomous Robotics"}),o.jsxs("ul",{children:[o.jsx("li",{children:"AI-driven AGVs and warehouse drones for logistics automation."}),o.jsx("li",{children:"Precision welding robots to ensure flawless manufacturing."}),o.jsx("li",{children:"Smart robotic arms that streamline assembly-line operations."})]})]}),o.jsxs("article",{children:[o.jsx("h4",{children:"Smart Infrastructure"}),o.jsxs("ul",{children:[o.jsx("li",{children:"AI-driven AGVs and warehouse drones for logistics automation."}),o.jsx("li",{children:"Precision welding robots to ensure flawless manufacturing."}),o.jsx("li",{children:"Smart robotic arms that streamline assembly-line operations."})]})]}),o.jsxs("article",{children:[o.jsx("h4",{children:"Healthcare 4.0"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Surgical robotics enhancing precision in medical procedures."}),o.jsx("li",{children:"AI-powered medical diagnostics ensuring quicker, precise evaluations."}),o.jsx("li",{children:"Automated drug dispensing to reduce human errors."})]})]})]})]}),o.jsxs("section",{ref:p,className:"container section-spacing fade-in-up",children:[o.jsx("h3",{className:"h2",children:"Our Commitment to Bharat"}),o.jsxs("ul",{className:"list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"Skill India"})," – Training programs in edge computing and AI automation."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Make in India"})," – Domestic production and assembly hubs."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Sustainable Growth"})," – Energy-efficient solutions minimizing carbon footprints."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Industrial Innovation"})," – Partnerships for next-gen AI-powered solutions."]})]})]}),o.jsx("section",{ref:m,className:"ai-cta fade-in-up",children:o.jsxs("div",{className:"container",children:[o.jsx("h3",{className:"h2",children:"Join the Silent, Smart Revolution"}),o.jsx("p",{className:"ai-sub",children:"We invite you to be a part of this transformation. Whether you are an industrial manufacturer, automation expert, or AI researcher, Robustrix IT Solutions is your trusted partner."})]})}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("div",{ref:v,className:"fade-in-up",children:o.jsx("h3",{className:"h2",children:"Contact Us"})}),o.jsxs("form",{className:"contact",onSubmit:h,children:[o.jsxs("div",{className:"row",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{name:"name",value:t.name,onChange:w,placeholder:"Name"})]}),o.jsxs("div",{className:"row",children:[o.jsx("label",{children:"Phone Number"}),o.jsx("input",{name:"phone",value:t.phone,onChange:w,placeholder:"Phone Number"})]}),o.jsxs("div",{className:"row",children:[o.jsx("label",{children:"Email"}),o.jsx("input",{name:"email",type:"email",value:t.email,onChange:w,placeholder:"Email"})]}),o.jsxs("div",{className:"row",children:[o.jsx("label",{children:"Message"}),o.jsx("textarea",{name:"message",rows:"4",value:t.message,onChange:w,placeholder:"Message"})]}),o.jsx("button",{className:"btn btn-primary",type:"submit",children:"Submit"}),r&&o.jsx("p",{className:"ok",children:"Thanks! We’ll reach out shortly."})]})]}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("div",{ref:y,className:"fade-in-up",children:o.jsx("h3",{className:"h2",children:"Find Us"})}),o.jsxs("div",{ref:g,className:"contact-grid fade-in-up",children:[o.jsxs("div",{className:"contact-card",children:[o.jsxs("p",{children:[o.jsx("b",{children:"Phone:"})," ",o.jsx("a",{className:"link",href:"tel:+919090020245",children:"+91 9090020245"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"Email:"})," ",o.jsx("a",{className:"link",href:"mailto:info@therobustrix.com",children:"info@therobustrix.com"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"Address:"}),o.jsx("br",{}),"212, City Centre Mall, Dwarka Sector-12, New Delhi"]})]}),o.jsx("div",{className:"map-wrap",children:o.jsx("iframe",{title:"Robustrix IT Solutions - Map",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",src:"https://www.google.com/maps?q=212%2C%20City%20Centre%20Mall%2C%20Dwarka%20Sector-12%2C%20New%20Delhi&output=embed"})})]})]}),o.jsx("style",{children:`
        .ai-hero {
          background: linear-gradient(180deg, #f4f7ff 0%, #ffffff 100%);
          border-bottom: 1px solid var(--color-ink-100);
          padding-block: clamp(28px, 6vw, 48px);
        }
        .about-hero {
          background:
            linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.15)),
            url('https://source.unsplash.com/1600x600/?industrial,robotics,factory') center/cover no-repeat;
          color: #fff;
        }
        .about-hero .ai-kicker, .about-hero .ai-sub, .about-hero .ai-title { color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,.35); }
        .ai-title { font-size: clamp(28px, 5vw, 42px); font-weight: 900; line-height: 1.1; }
        .ai-kicker { color: var(--color-brand-primary); margin-top: 8px; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600, #3d4656); max-width: 920px; }
        /* Ensure the About hero text stays white, overriding later generic rules */
        .about-hero .ai-title, .about-hero .ai-kicker, .about-hero .ai-sub { color: #fff !important; }
        /* Story section white text */
        .story-section { color: #fff; }
        .story-section .h2 { color: #fff; }
        .story-section .ai-sub { color: #fff !important; }
        .about-grid {
          display: grid; gap: 16px;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .about-card {
          background: var(--color-bg-alt); border-radius: 12px; box-shadow: var(--shadow-sm);
          padding: 14px; display: grid; gap: 8px; color: var(--color-ink-900);
        }
        .impact-grid { display: grid; gap: 16px; grid-template-columns: repeat(1, 1fr); }
        @media (min-width: 1024px) { .impact-grid { grid-template-columns: repeat(2, 1fr); } }
        .list { margin-top: 10px; display: grid; gap: 6px; }
        .ai-cta { background: linear-gradient(90deg, var(--color-bg-alt), var(--color-bg)); border-top: 1px solid var(--color-ink-200); border-bottom: 1px solid var(--color-ink-200); padding-block: 24px; }
        .contact { display: grid; gap: 12px; max-width: 640px; }
        .row { display: grid; gap: 6px; }
        .row label {
          color: var(--color-ink-900);
          font-weight: 600;
        }
        input, textarea {
          background: var(--color-bg-alt);
          color: var(--color-ink-900);
          border: 1px solid var(--color-ink-200); 
          border-radius: 10px; 
          padding: 10px;
          outline: none; 
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        input::placeholder, textarea::placeholder {
          color: var(--color-ink-500);
        }
        input:focus, textarea:focus { 
          border-color: var(--color-brand-primary); 
          box-shadow: 0 0 0 3px rgba(2, 196, 249, 0.2); 
        }
        .ok { color: var(--color-brand-primary); margin-top: 8px; font-weight: 700; }
        .contact-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
        @media (min-width: 1024px) { .contact-grid { grid-template-columns: 1fr 1.6fr; } }
        .contact-card {
          background: var(--color-bg-alt); border-radius: 12px; box-shadow: var(--shadow-sm);
          padding: 16px; display: grid; gap: 8px; color: var(--color-ink-900);
        }
        .map-wrap iframe {
          width: 100%; height: 360px; border: 0; border-radius: 12px; box-shadow: var(--shadow-sm);
        }
        
      `})]})}const W1=[{id:"boards",title:"UP Boards",to:"/up/boards",img:"/products/upboards.png"},{id:"systems",title:"UP Systems",to:"/up/systems",img:"/products/upboards.png"},{id:"kit",title:"UP Edge Computing Kit",to:"/up/edge-computing-kit",img:"/products/upboards.png"},{id:"toolkit",title:"UP Edge AI Toolkit",to:"/up/edge-ai-toolkit",img:"/products/upboards.png"}];function V1(){function t(e){e.currentTarget.src="/products/upboards.png"}return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsx("div",{className:"container",children:o.jsx("h1",{className:"ai-title",children:"UP Boards and UP Systems"})})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{className:"eb-grid",children:W1.map(e=>o.jsxs(Z,{className:"card eb-card",to:e.to,children:[o.jsx("div",{className:"eb-thumb",children:o.jsx("img",{src:e.img,alt:e.title,onError:t,loading:"lazy",decoding:"async"})}),o.jsx("h3",{className:"eb-title",children:e.title})]},e.id))})}),o.jsx("style",{children:`
        .ai-hero { background: linear-gradient(180deg, #f4f7ff, #fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px, 6vw, 48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .eb-grid { display: grid; gap: 16px; grid-template-columns: repeat(2,1fr); }
        @media (min-width: 1024px) { .eb-grid { grid-template-columns: repeat(4,1fr); } }
        .eb-card { display: grid; justify-items: center; gap: 12px; padding: 14px 8px 18px; border-radius: var(--radius-sm); transition: transform var(--transition), box-shadow var(--transition), background var(--transition); color: inherit; text-decoration: none; }
        .eb-card:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .eb-thumb { display: grid; place-items: center; width: 100%; height: 120px; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); overflow: hidden; }
        .eb-thumb img { max-width: 160px; max-height: 110px; object-fit: contain; }
        .eb-title { font-weight: 800; color: var(--color-ink-700); text-align: center; }
      `})]})}function G1(){function t(r){r.currentTarget.src="/products/upboards.png"}const e=[{id:"dev",title:"UP Developer Boards",img:"/products/upboards.png"},{id:"exp",title:"UP Expansion Modules",img:"/products/upboards.png"},{id:"ai",title:"UP AI Modules",img:"/products/upboards.png"}];return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"UP Boards"}),o.jsx("p",{className:"ai-sub",children:"Designed to provide a nimble and nifty experience for the user, the architecture of our UP line is built for quick assimilation with existing systems, and supports all current OS – Linux, Android, and Windows 10 operating systems."}),o.jsx("p",{className:"ai-sub",children:"It is ideal for uses in robotics, drones, machine vision, smart homes, e-education, digital signage, intelligent vehicles, and the Internet of Things, and is built to address space restraints that are usually a key concern for clients who need to plan every square inch."}),o.jsxs("p",{className:"ai-sub",children:[o.jsx("b",{children:"Free Edge AI Toolkit"})," — streamline object detection, benchmarking, and AI model conversion to accelerate your AI projects on UP platforms."]})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{className:"eb-grid",children:e.map(r=>o.jsxs("article",{className:"card eb-card",children:[o.jsx("div",{className:"eb-thumb",children:o.jsx("img",{src:r.img,alt:r.title,onError:t,loading:"lazy",decoding:"async"})}),o.jsx("h3",{className:"eb-title",children:r.title})]},r.id))})}),o.jsx("style",{children:`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600, #3d4656); max-width: 920px; }
        .eb-grid { display: grid; gap: 16px; grid-template-columns: repeat(3,1fr); }
        @media (max-width: 1023px) { .eb-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 719px) { .eb-grid { grid-template-columns: 1fr; } }
        .eb-card { display: grid; justify-items: center; gap: 12px; padding: 14px 8px 18px; border-radius: var(--radius-sm); transition: transform var(--transition), box-shadow var(--transition), background var(--transition); }
        .eb-card:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .eb-thumb { display: grid; place-items: center; width: 100%; height: 120px; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); overflow: hidden; }
        .eb-thumb img { max-width: 160px; max-height: 110px; object-fit: contain; }
        .eb-title { font-weight: 800; color: var(--color-ink-700); text-align: center; }
      `})]})}function H1(){function t(r){r.currentTarget.src="/products/upboards.png"}const e=[{t:"UP Edge Industrial Computer",m:"UP Edge System Product Line - Industrial Computer"},{t:"UP Xtreme ARL Edge | Arrow Lake IPC with 97 TOPS",m:"UP XTREME ARL EDGE"},{t:"UP Xtreme ARL Edge | Industrial AI Edge System with Intel® Core™ Ultra 5/7 Processors",m:""},{t:"Intelli i14 Edge | Rugged AI Edge Computer with Intel® Core™ i9 & NVIDIA RTX™ MXM",m:"INTELLI I14 EDGE"},{t:"UP Squared Pro TWL Edge | AI-Ready Industrial System with Intel® N-series",m:"UP SQUARED PRO TWL EDGE"},{t:"UP Squared TWL Edge | AI-Ready System with Intel® N-series & Triple 4K Display",m:"UP SQUARED TWL EDGE"},{t:"UP TWLS Edge | Slim System with Wi-Fi, RS-232/422/485 & Intel® N-series SoC",m:"UP TWLS EDGE"},{t:"UP TWL Edge | Compact System with GPIO & Intel® Processor N-series for Edge IoT",m:"UP TWL EDGE"},{t:"UP Xtreme 7100 Edge | Fanless system powered by Intel® Processor N-series & Intel® Core™ i3-N305 Processor",m:"UP XTREME 7100 EDGE"},{t:"UP Xtreme i14 Edge | Industrial Mini AI PC with Intel® Core™ Ultra Processor",m:"UP XTREME I14 EDGE"},{t:"UP Xtreme i12 Edge | AI-ready system with 12th Gen Intel Core",m:"UP XTREME I12 EDGE"},{t:"UP Xtreme EDGE i11 Computing System",m:"UP XTREME I11 EDGE"},{t:"UP Squared Pro 710H Edge | Intel AI solution with Hailo module",m:"UP SQUARED PRO 710H EDGE"},{t:"UP Squared Pro 7000 Edge | Intel Atom® x7000E Series, Intel® Processor N-series, and Intel® Core™ i3-N305 Processor",m:"UP SQUARED PRO 7000 EDGE"},{t:"UPN-Edge Pro | UP Squared Pro Edge System with Intel® Pentium® N4200/ Celeron® N3350/ Atom™ E3950 Processor SoC",m:"UPN-EDGE PRO"},{t:"UP Squared 7100 Edge | Industrial Computer with Intel® Processor N-series SoC",m:"UP SQUARED 7100 EDGE"},{t:"UP Squared i12 Edge | UP system with 12th generation Intel® Core™ i7/i5/i3/Celeron® Processor SoC (Alder Lake-P)",m:"UP SQUARED I12 EDGE"},{t:"UP Squared V2 System with Intel® Pentium® Celeron® Processor SoC",m:"UP SQUARED V2 EDGE"},{t:"UPS-GWS01 | Tiny UP Squared IoT Gateway System",m:"UPS-GWS01"},{t:"UP 710S Edge | Smallest Mini PC with Intel® Processor N-series",m:"UP 710S EDGE"},{t:"UP 7000 Edge | Compact Alder Lake-N Computing Platform for Edge AI",m:"UP 7000 EDGE"},{t:"UP 4000 Edge | Compact Apollo Lake Computing Platform for Edge AI & Industrial IoT",m:"UP 4000 EDGE"}];return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"UP Systems"}),o.jsx("p",{className:"ai-sub",children:"All the strength and utility of the UP board range in a compact edge system form. UP systems offer an industrial computer solution that enables users to bring projects to market faster without sacrificing quality."}),o.jsx("p",{className:"ai-sub",children:"UP systems ensure the key facets of their board-level counterparts—such as the latest Intel® processors and inference modeling platforms—are easily harnessed via precisely designed hardware, allowing developers to concentrate on implementing their ideas more efficiently."}),o.jsxs("p",{className:"ai-sub",children:[o.jsx("b",{children:"Free Edge AI Toolkit"})," — streamline object detection, benchmarking, and model conversion to accelerate your AI projects on UP platforms."]})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{className:"ai-grid",children:e.map((r,n)=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:`https://source.unsplash.com/640x360/?edge,mini,pc,intel&sig=${n}`,alt:r.t,onError:t,loading:"lazy",decoding:"async"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:r.t}),r.m&&o.jsx("p",{className:"ai-card-model",children:r.m})]})]},`${r.m}-${n}`))})}),o.jsx("style",{children:`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600,#3d4656); max-width: 920px; }
        .ai-grid { display: grid; gap: 16px; grid-template-columns: repeat(3,1fr); }
        @media (max-width:1023px){ .ai-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width:719px){ .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); padding: 10px; box-sizing: border-box; }
        .ai-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .ai-card-title { font-weight: 800; }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `})]})}function $1(){function t(i){i.currentTarget.src="/products/upboards.png"}const e="Designed to provide a more streamlined development experience for customers, AAEON’s UP Edge Computing Kit range is comprised of Ubuntu certified industrial turnkey solutions geared towards making AI edge deployment more accessible and faster to market.",r="Bridging the gap between bespoke and universal, the UP Edge Computing Kit range features plug and play-ready kits which can be deployed across vertical markets. With all products in the range preinstalled with the Intel® OpenVINO™ toolkit, the UP Edge Computing Kit range provides a simplified platform for creativity to take over, making it easier to develop the ideal application for your business.",n=[{t:"11th Generation Intel® Core™ i7/i5 Processor SoC",m:"UP XTREME I11 EDGE ENABLING KIT"},{t:"11th Generation Intel® Core™ i7/i5 Processor SoC (formerly Tiger Lake UP3)",m:"UP XTREME I11 EDGE ENABLING KIT"}];return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"UP Edge Computing Kit"}),o.jsx("p",{className:"ai-sub",children:e}),o.jsx("p",{className:"ai-sub",children:r})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{className:"ai-grid",children:n.map((i,a)=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:`https://source.unsplash.com/640x360/?edge,kit,intel&sig=${a}`,alt:i.t,onError:t,loading:"lazy",decoding:"async"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:i.t}),o.jsx("p",{className:"ai-card-model",children:i.m})]})]},`${i.m}-${a}`))})}),o.jsx("style",{children:`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600,#3d4656); max-width: 920px; }
        .ai-grid { display: grid; gap: 16px; grid-template-columns: repeat(2,1fr); }
        @media (max-width:719px){ .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); padding: 10px; box-sizing: border-box; }
        .ai-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .ai-card-title { font-weight: 800; }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `})]})}function X1(){const t=[{h:"One-Click Runtime Environment Setup",p:"A unified bundle across Intel, NVIDIA, and Hailo platforms gives you a platform-agnostic runtime in one click."},{h:"Accessible, Embedded Performance Benchmarking",p:"Evaluate models on the same hardware, measuring latency, throughput, power, and thermals across platforms."},{h:"Unified, Cross-Platform Model Conversion",p:"Convert pre-trained models optimized for UP hardware with OpenVINO, HailoRT, and CUDA toolkits."},{h:"Integrated Edge AI Sizing Tool",p:"Simulate workloads with zero-code configuration to determine scalability before committing resources."}];function e(r){r.currentTarget.src="/products/upboards.png"}return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"UP Edge AI Toolkit"}),o.jsx("h2",{className:"ai-kicker",children:"First Step: What You Can Do with the UP Edge AI Toolkit"})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{className:"about-grid",children:t.map((r,n)=>o.jsxs("article",{className:"about-card",children:[o.jsx("img",{src:`https://source.unsplash.com/640x360/?ai,toolkit,edge&sig=${n}`,alt:r.h,onError:e,loading:"lazy",decoding:"async"}),o.jsx("h4",{children:r.h}),o.jsx("p",{children:r.p})]},r.h))})}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("h3",{className:"h2",children:"Next Step: Select the Hardware Platform for Your Project"}),o.jsx("p",{className:"ai-sub",children:"With the UP Edge AI Toolkit, all of the pain points are gone. Build, experiment, and get creative across Intel, NVIDIA, and Hailo platforms with just a few clicks to establish proof of concept faster, whatever your project."}),o.jsxs("div",{className:"ai-grid",children:[o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:"https://source.unsplash.com/640x360/?hailo,intel,edge&sig=101",alt:"Intel + Hailo",onError:e,loading:"lazy",decoding:"async"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:"Intel + Hailo"}),o.jsx("p",{className:"ai-card-sub",children:"UP Squared Pro 710H Edge with Hailo-8™ for efficient AI inference."})]})]}),o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:"https://source.unsplash.com/640x360/?arrow,lake,intel,edge&sig=102",alt:"Arrow Lake",onError:e,loading:"lazy",decoding:"async"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:"Arrow Lake"}),o.jsx("p",{className:"ai-card-sub",children:"UP Xtreme ARL with Intel® Core™ Ultra 200H, up to 97 TOPS of AI."})]})]}),o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:"https://source.unsplash.com/640x360/?intel,nvidia,rtx,edge&sig=103",alt:"Intel + Nvidia",onError:e,loading:"lazy",decoding:"async"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:"Intel + Nvidia"}),o.jsx("p",{className:"ai-card-sub",children:"Intelli i14 Edge with 14th Gen Intel® Core™ + NVIDIA® RTX™ MXM."})]})]})]})]}),o.jsx("style",{children:`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-kicker { color: var(--color-brand-primary); margin-top: 8px; }
        .about-grid { display: grid; gap: 16px; grid-template-columns: repeat(1,1fr); }
        @media (min-width:1024px){ .about-grid { grid-template-columns: repeat(2,1fr); } }
        .about-card { background: #fff; border-radius: 12px; box-shadow: var(--shadow-sm); padding: 14px; display: grid; gap: 8px; }
        .about-card img { width: 100%; height: auto; display: block; object-fit: contain; border-radius: 8px; }
        .ai-grid { display: grid; gap: 16px; grid-template-columns: repeat(3,1fr); }
        @media (max-width:1023px){ .ai-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width:719px){ .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); padding: 10px; box-sizing: border-box; }
        .ai-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .ai-card-title { font-weight: 800; }
        .ai-card-sub { color: var(--color-ink-600,#3d4656); }
      `})]})}function Y1(){const t="Robustrix is a trusted edge AI solution provider, dedicated to helping industry users build open, secure, and seamless IoT solutions. Robustrix’s series of IoT gateways are designed for users wishing to implement the IoT concept in various indoor and outdoor environments. From the inside of a control room to a moving vehicle, IoT can be made available to anyone, anywhere.",e="Based on Arm architecture, Robustrix’s AIOT gateways feature TI AM62x series, NXP i.MX9, and i.MX8M Plus series Arm CPUs and RISC processors, providing high performance and reliability.",r="With plug-and-play tools, development kits, and comprehensive systems, Robustrix enables developers to accelerate innovation, reduce time-to-market, and enhance IoT device management and security.",i=[{title:"Standard RISC Gateway Board With Broadcom BCM2711 Quad-Core Cortex-A72 SoC @ 1.5GHz",model:"SRG-CM4"},{title:"Standard RISC Gateway with TI AM62x Sitara™ Processors",model:"SRG-AM62"},{title:"Standard RISC Gateway with ARM i.MX8M Plus Quad-Core Cortex-A53 1.6GHz Processor",model:"SRG-IMX8PL"},{title:"Standard IoT Gateway with ARM i.MX8M Plus Quad-Core Cortex-A53 1.6GHz Processor",model:"SRG-IMX8P"},{title:"AI IoT Video Analysis Gateway | Intel movidius",model:"AIOT-AIVD"},{title:"Industrial Automation IoT Gateway",model:"AIOT-IGWS01"}].map((s,l)=>({...s,modelView:s.model.replace(/^AIOT/gi,"ROBO"),image:`https://source.unsplash.com/640x360/?iot,gateway,edge&sig=${l}`}));function a(s){s.currentTarget.src="/products/iotsystems.png"}return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("h1",{className:"ai-title",children:"IoT Gateway & Protocol Expansion"}),o.jsx("p",{className:"ai-sub",children:t}),o.jsx("p",{className:"ai-sub",children:e}),o.jsx("p",{className:"ai-sub",children:r})]})}),o.jsx("section",{className:"container section-spacing",children:o.jsx("div",{className:"ai-grid",children:i.map(s=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:s.image,alt:s.title,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:a})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:s.title}),o.jsx("p",{className:"ai-card-model",children:s.modelView})]})]},s.model))})}),o.jsx("style",{children:`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600,#3d4656); max-width: 920px; }
        .ai-grid { display: grid; gap: 16px; grid-template-columns: repeat(3,1fr); }
        @media (max-width:1023px){ .ai-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width:719px){ .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); padding: 10px; box-sizing: border-box; }
        .ai-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .ai-card-title { font-weight: 800; }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `})]})}function K1(){function t(c){c.currentTarget.src="/products/panelpc.png"}const e=[{t:"10” WXGA Multi Touch Panel PC With Intel® Processor N-series Processors",m:"ACP-2106"},{t:"7” WSVGA Multi Touch Panel PC With Intel® Processor N-series Processors",m:"ACP-2076"},{t:"7” WSVGA Android Based Panel PC with Rockchip™ RK3568",m:"ACP-1078"},{t:"10.1” WXGA Android Based Panel PC with Rockchip™ RK3568",m:"ACP-1108"},{t:"7” WSVGA Open-frame Panel PC with PICO-APL3",m:"ACP-1075"},{t:"10.1” WXGA Multi-Touch Panel PC With Intel® Pentium® N4200/ Celeron® N3350 Processor, 4 GB RAM",m:"ACP-1106"},{t:"7” WSVGA Multi-Touch Panel PC With Intel® Pentium® N4200/ Celeron® N3350 Processor, 4 GB RAM",m:"ACP-1076"},{t:"7” WSVGA Ultra-slim Fanless Multi Touch Panel PC with Intel® Celeron® J1900/ N2807 Processor, 2GB RAM",m:"ACP-1074"},{t:"10.1” WXGA Ultra-slim Fanless Multi Touch Panel PC With Intel® Celeron® J1900/ N2807 Processor, 2GB RAM",m:"ACP-1104"}].map((c,u)=>({...c,mv:c.m.replace(/^ACP/gi,"ROBO"),img:`https://source.unsplash.com/640x360/?panel,pc,touch&sig=${u}`})),r=[{t:"21.5” Modular HMI Panel PC With Intel® Processor N-series Processors",m:"OMNI-2215-ADN"},{t:"15.6” Modular HMI Panel PC With Intel® Processor N-series Processors",m:"OMNI-2155-ADN"},{t:"15” Modular HMI Panel PC With Intel® Processor N-series Processors",m:"OMNI-3155-ADN"},{t:"12.1” Modular HMI Panel PC With Intel® Processor N-series Processors",m:"OMNI-3125-ADN"},{t:"10.4” Modular HMI Panel PC With Intel® Processor N-series Processors",m:"OMNI-3105-ADN"},{t:"OMNI Series Panel PC with Intel® Processor N-series Processors",m:"OMNI-ADN_CPU-BOX_KIT"}],n=[{t:"27” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-2275-ADP"},{t:"23.8” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-2245-ADP"},{t:"21.5” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-2215-ADP"},{t:"15.6” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-2155-ADP"},{t:"19” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-3195-ADP"},{t:"17” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-3175-ADP"},{t:"15” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-3155-ADP"},{t:"12.1” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-3125-ADP"},{t:"10.4” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-3105-ADP"},{t:"OMNI Series Panel PC with 12th Generation Intel® Core™/Celeron® Processors",m:"OMNI-ADP CPU-BOX KIT"}],i=[{t:"21.5” Touch Display, DC 12~30V",m:"OMNI-221M"},{t:"15.6” Touch Display, DC 12~30V",m:"OMNI-215M"},{t:"19” Touch Display, DC 12~30V",m:"OMNI-319M"},{t:"17” Touch Display, DC 12~30V",m:"OMNI-317M"},{t:"15” Touch Display, DC 12~30V",m:"OMNI-315M"},{t:"12.1” Touch Display, DC 12~30V",m:"OMNI-312M"},{t:"10.4” Touch Display, DC 12~30V",m:"OMNI-310M"},{t:"Display BOX Kit, DC 12~30V",m:"OMNI MODULES- DISPLAY BOX KIT"},{t:"OMNI Series Modules- CPU BOX Kit",m:"OMNI SERIES MODULES- CPU BOX KIT"},{t:"OMNI Series Modules- Panels",m:"OMNI SERIES MODULES- PANELS"},{t:"OMNI Series Modules- I/O Modules",m:"OMNI SERIES MODULES- I/O MODULES"}],a=[{t:"21.5” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor",m:"OMNI-2215-SKU"},{t:"19” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor",m:"OMNI-3195-SKU"},{t:"17” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor",m:"OMNI-3175-SKU"},{t:"15” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor",m:"OMNI-3155-SKU"},{t:"12.1” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor",m:"OMNI-3125-SKU"},{t:"15.6” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor",m:"OMNI-2155-BT"},{t:"19” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor",m:"OMNI-3195-BT"},{t:"15” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor",m:"OMNI-3155-BT"},{t:"12.1” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor",m:"OMNI-3125-BT"},{t:"10.4” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor",m:"OMNI-3105-BT"}],s=[...r,...n,...i,...a].map((c,u)=>({...c,mv:c.m.replace(/^OMNI/gi,"ROBO"),img:`https://source.unsplash.com/640x360/?hmi,panel,pc&sig=${u}`})),l=[{t:"15.6”Full HD 1920 x 1080 AI Panel PC with NVIDIA® Jetson Orin™ NX",m:"NIKY-2155-NX"}].map((c,u)=>({...c,mv:c.m.replace(/^NIKY/gi,"ROBO"),img:`https://source.unsplash.com/640x360/?ai,panel,pc&sig=${u}`}));return o.jsxs("main",{children:[o.jsx("section",{className:"ai-hero",children:o.jsx("div",{className:"container",children:o.jsx("h1",{className:"ai-title",children:"Panel PC"})})}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("h2",{className:"h2",children:"All in One Panel PC"}),o.jsx("p",{className:"ai-sub",children:"AAEON's All in One Panel PCs are designed to seamlessly integrate into various industrial environments, offering a robust and versatile solution across energy, manufacturing, healthcare, and transportation sectors. IP65-rated aluminum front panel and latest Intel CPUs provide durability and performance with dynamic I/O options for connectivity and expandability."}),o.jsx("div",{className:"ai-grid",children:e.map((c,u)=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:c.img,alt:c.t,onError:t,loading:"lazy",decoding:"async"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:c.t}),o.jsx("p",{className:"ai-card-model",children:c.mv})]})]},`aoi-${u}`))})]}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("h2",{className:"h2",children:"Modular HMI Panel PC / Display"}),o.jsx("p",{className:"ai-sub",children:"AAEON's Modular HMI Panel PCs, the OMNI series, are notable for modular design allowing integration of numerous modules to enhance capabilities. This adaptability ensures businesses can customize solutions to specific operational needs."}),o.jsx("div",{className:"ai-grid",children:s.map((c,u)=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:c.img,alt:c.t,onError:t,loading:"lazy",decoding:"async"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:c.t}),o.jsx("p",{className:"ai-card-model",children:c.mv})]})]},`omni-${u}`))})]}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("h2",{className:"h2",children:"AI Panel PC Solutions"}),o.jsx("div",{className:"ai-grid",children:l.map((c,u)=>o.jsxs("article",{className:"card ai-card",children:[o.jsx("div",{className:"ai-thumb",children:o.jsx("img",{src:c.img,alt:c.t,onError:t,loading:"lazy",decoding:"async"})}),o.jsxs("div",{className:"ai-card-body",children:[o.jsx("h3",{className:"ai-card-title",children:c.t}),o.jsx("p",{className:"ai-card-model",children:c.mv})]})]},`ai-${u}`))})]}),o.jsx("style",{children:`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600,#3d4656); max-width: 920px; }
        .ai-grid { display: grid; gap: 16px; grid-template-columns: repeat(3,1fr); }
        @media (max-width:1023px){ .ai-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width:719px){ .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); padding: 10px; box-sizing: border-box; }
        .ai-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .ai-card-title { font-weight: 800; }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `})]})}function Q1(){var n,i;const[t]=Ex(),e=t.get("product"),r=Qh.find(a=>a.id===e);return o.jsx("main",{children:r?o.jsxs("section",{className:"container section-spacing",children:[o.jsx(Lt,{overline:"Products",title:`Models & options — ${r.name}`,subtitle:`${r.brand}${r.series?` · ${r.series}`:""}`}),o.jsxs("article",{className:"card pd-card",children:[o.jsxs("div",{className:"pd-head",children:[o.jsx("p",{className:"pd-tags",children:(n=r.useCases)==null?void 0:n.join(" · ")}),o.jsx("ul",{className:"pd-highlights",children:r.highlights.map((a,s)=>o.jsx("li",{children:a},s))})]}),(i=r.models)!=null&&i.length?o.jsxs("div",{className:"pd-models",children:[o.jsx("h3",{className:"pd-title",children:"Models"}),o.jsx("ul",{children:r.models.map((a,s)=>o.jsxs("li",{children:[o.jsx("b",{children:a.model}),a.note?` — ${a.note}`:""]},s))})]}):null]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("section",{className:"container section-spacing",children:[o.jsx(Lt,{overline:"Solutions",title:"",subtitle:"Explore platforms by solution category."}),o.jsx(Yh,{})]}),o.jsx(qh,{})]})})}const q1=[{id:"brahamand",name:"brahamand.ai",href:"https://brahamand.ai",blurb:"AI multi‑purpose chatbot with news, stocks, PDF summarization, and Kundli insights.",image:"/aiwebsites/brahamandai.png"},{id:"subvivah",name:"subvivah.com",href:"https://subvivah.com",blurb:"AI‑based matrimony platform focused on compatibility and intelligent matching.",image:"/aiwebsites/subvivah.png"},{id:"connectflow",name:"connectflow.co.in",href:"https://connectflow.co.in",blurb:"A LinkedIn‑style professional network tailored for collaboration and hiring.",image:"/aiwebsites/connectflow.png"},{id:"tutorbuddy",name:"tutorbuddy.co",href:"https://tutorbuddy.co",blurb:"AI‑powered learning platform with personalized study plans and practice.",image:"/aiwebsites/tutobuddy.png"},{id:"foodfly",name:"foodfly.co",href:"https://foodfly.co",blurb:"Modern food delivery experience optimized for speed, ratings, and offers.",image:"/aiwebsites/foodfly.png"}];function J1(){const t=T(),e=T();function r(n,i){n.currentTarget.style.display="none"}return o.jsxs("main",{children:[o.jsxs("section",{className:"container section-spacing",children:[o.jsxs("header",{ref:t,className:"fade-in-up",children:[o.jsx("p",{className:"overline",children:"Solutions"}),o.jsx("h2",{className:"h2",children:"Showcase"}),o.jsx("p",{className:"subtle",children:"Explore partner projects and platforms built with AI at the core."})]}),o.jsx("div",{ref:e,className:"site-grid fade-in-up-stagger",children:q1.map(n=>o.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:"card site-card",children:[n.image&&o.jsx("div",{className:"site-card-image",children:o.jsx("img",{src:n.image,alt:`${n.name} preview`,loading:"lazy",decoding:"async",onError:i=>r(i,n.id)})}),o.jsxs("div",{className:"site-card-body",children:[o.jsx("h3",{className:"site-title",children:n.name}),o.jsx("p",{className:"site-blurb",children:n.blurb}),o.jsx("span",{className:"link",children:"Visit"})]})]},n.id))})]}),o.jsx("style",{children:`
        .site-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
          margin-top: 16px;
        }
        @media (min-width: 768px) {
          .site-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1200px) {
          .site-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .site-card {
          text-decoration: none;
          display: grid;
          overflow: hidden;
        }
        .site-card-image {
          width: 100%;
          height: 200px;
          background: var(--color-bg-alt);
          overflow: hidden;
          display: grid;
          place-items: center;
        }
        .site-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .site-card-body {
          display: grid;
          gap: 10px;
          padding: 18px;
        }
        .site-title {
          font-weight: 900;
          font-size: 1.05rem;
        }
        .site-blurb {
          color: var(--color-ink-700);
        }
      `})]})}function Z1(){const t=T(),e=T(),r=T(),n=T(),i=T(),a=T(),s=T(),l=T(),c=T();return o.jsxs("main",{children:[o.jsx("section",{ref:t,className:"win11-hero fade-in-up",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"win11-hero-content",children:[o.jsx("h1",{className:"win11-title",children:"Windows 11 Analysis"}),o.jsx("h2",{className:"win11-subtitle",children:"The Future of Computing is Here"}),o.jsx("p",{className:"win11-intro",children:"Windows 11 represents a significant leap forward in operating system design, engineered to leverage the full power of modern hardware. Discover why Windows 11 is the ideal choice for your business and how Robustrix hardware maximizes its potential."})]}),o.jsxs("div",{className:"win11-badge",children:[o.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M3 12L9 2L15 12L9 22L3 12Z",fill:"currentColor"})}),o.jsx("span",{children:"Optimized for Windows 11"})]})]})}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("div",{ref:e,className:"fade-in-up",children:o.jsx(Lt,{overline:"Why Windows 11?",title:"A Modern Operating System Built for Today's Hardware",subtitle:"Windows 11 delivers enhanced performance, security, and productivity features that take full advantage of modern processors, graphics, and display technologies."})}),o.jsxs("div",{ref:r,className:"win11-features-grid fade-in-up-stagger",children:[o.jsxs("article",{className:"card feature-card",children:[o.jsx("div",{className:"feature-icon",children:"⚡"}),o.jsx("h3",{className:"feature-title",children:"Enhanced Performance"}),o.jsx("p",{className:"feature-desc",children:"Windows 11 is optimized for modern multi-core processors, delivering faster boot times, improved multitasking, and better overall system responsiveness. DirectStorage and Auto HDR leverage modern hardware for gaming and multimedia."})]}),o.jsxs("article",{className:"card feature-card",children:[o.jsx("div",{className:"feature-icon",children:"🔒"}),o.jsx("h3",{className:"feature-title",children:"Advanced Security"}),o.jsx("p",{className:"feature-desc",children:"Built-in hardware-based security with TPM 2.0 support, Windows Hello biometric authentication, and Microsoft Defender Antivirus. Secure Boot ensures your system starts with trusted software only."})]}),o.jsxs("article",{className:"card feature-card",children:[o.jsx("div",{className:"feature-icon",children:"🎨"}),o.jsx("h3",{className:"feature-title",children:"Modern UI & UX"}),o.jsx("p",{className:"feature-desc",children:"Redesigned interface with rounded corners, simplified Start menu, and Snap Layouts for improved productivity. Dark mode and improved accessibility features enhance user experience."})]}),o.jsxs("article",{className:"card feature-card",children:[o.jsx("div",{className:"feature-icon",children:"🌐"}),o.jsx("h3",{className:"feature-title",children:"Microsoft Teams Integration"}),o.jsx("p",{className:"feature-desc",children:"Seamless communication with built-in Microsoft Teams, making collaboration effortless for remote and hybrid work environments. Direct integration with Windows 11 interface."})]}),o.jsxs("article",{className:"card feature-card",children:[o.jsx("div",{className:"feature-icon",children:"⚙️"}),o.jsx("h3",{className:"feature-title",children:"Better Resource Management"}),o.jsx("p",{className:"feature-desc",children:"Improved memory management and CPU scheduling optimize system resources, resulting in better battery life for laptops and more efficient power consumption overall."})]}),o.jsxs("article",{className:"card feature-card",children:[o.jsx("div",{className:"feature-icon",children:"🔄"}),o.jsx("h3",{className:"feature-title",children:"Future-Ready Platform"}),o.jsx("p",{className:"feature-desc",children:"Regular updates and new features keep your system current. Support for latest APIs, frameworks, and emerging technologies ensures long-term compatibility."})]})]})]}),o.jsx("section",{className:"win11-hardware-section",children:o.jsxs("div",{className:"container section-spacing",children:[o.jsx("div",{ref:n,className:"fade-in-up",children:o.jsx(Lt,{overline:"Hardware Optimization",title:"How Windows 11 Leverages Modern Hardware",subtitle:"Windows 11 is specifically designed to unlock the full potential of today's advanced hardware components, delivering superior performance and efficiency."})}),o.jsxs("div",{ref:i,className:"win11-hardware-grid fade-in-up-stagger",children:[o.jsxs("div",{className:"hardware-item",children:[o.jsxs("div",{className:"hardware-header",children:[o.jsx("h3",{children:"Multi-Core Processors"}),o.jsx("span",{className:"hardware-badge",children:"CPU"})]}),o.jsx("p",{children:"Windows 11 features improved thread scheduling that efficiently distributes workloads across all CPU cores. Support for Intel 12th Gen and newer processors with hybrid architecture (Performance and Efficiency cores) ensures optimal performance for both single-threaded and multi-threaded applications."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Better utilization of high-core-count processors"}),o.jsx("li",{children:"Optimized for Intel's Thread Director technology"}),o.jsx("li",{children:"Enhanced performance for productivity and creative workloads"})]})]}),o.jsxs("div",{className:"hardware-item",children:[o.jsxs("div",{className:"hardware-header",children:[o.jsx("h3",{children:"Modern Graphics & Displays"}),o.jsx("span",{className:"hardware-badge",children:"GPU"})]}),o.jsx("p",{children:"DirectStorage API enables faster game loading by allowing GPUs to directly access NVMe SSDs. Auto HDR automatically enhances SDR content for HDR displays, providing richer colors and better contrast. Improved multi-monitor support with better scaling."}),o.jsxs("ul",{children:[o.jsx("li",{children:"DirectStorage for NVMe SSD acceleration"}),o.jsx("li",{children:"Auto HDR for compatible displays"}),o.jsx("li",{children:"Better support for high-resolution and multi-monitor setups"})]})]}),o.jsxs("div",{className:"hardware-item",children:[o.jsxs("div",{className:"hardware-header",children:[o.jsx("h3",{children:"Fast Storage Solutions"}),o.jsx("span",{className:"hardware-badge",children:"Storage"})]}),o.jsx("p",{children:"Optimized for NVMe SSDs with better I/O prioritization and reduced latency. Windows 11 can boot faster and launch applications more quickly on modern SSD storage."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Faster boot times with NVMe SSDs"}),o.jsx("li",{children:"Improved application launch speeds"}),o.jsx("li",{children:"Better file system performance"})]})]}),o.jsxs("div",{className:"hardware-item",children:[o.jsxs("div",{className:"hardware-header",children:[o.jsx("h3",{children:"Memory Management"}),o.jsx("span",{className:"hardware-badge",children:"RAM"})]}),o.jsx("p",{children:"Enhanced memory compression reduces RAM usage while maintaining performance. Better page file management and improved memory allocation for applications."}),o.jsxs("ul",{children:[o.jsx("li",{children:"More efficient RAM utilization"}),o.jsx("li",{children:"Better handling of large applications"}),o.jsx("li",{children:"Improved multitasking capabilities"})]})]}),o.jsxs("div",{className:"hardware-item",children:[o.jsxs("div",{className:"hardware-header",children:[o.jsx("h3",{children:"Security Hardware"}),o.jsx("span",{className:"hardware-badge",children:"TPM 2.0"})]}),o.jsx("p",{children:"Hardware-based security with TPM 2.0 is required for Windows 11, providing encryption keys, secure boot, and protection against firmware attacks. Windows Hello uses dedicated hardware for biometric authentication."}),o.jsxs("ul",{children:[o.jsx("li",{children:"TPM 2.0 requirement ensures hardware-level security"}),o.jsx("li",{children:"Secure Boot protection"}),o.jsx("li",{children:"BitLocker encryption acceleration"})]})]}),o.jsxs("div",{className:"hardware-item",children:[o.jsxs("div",{className:"hardware-header",children:[o.jsx("h3",{children:"Connectivity & I/O"}),o.jsx("span",{className:"hardware-badge",children:"USB/Thunderbolt"})]}),o.jsx("p",{children:"Native support for USB 4 and Thunderbolt 4 with improved power delivery and data transfer speeds. Better Wi-Fi 6/6E support for faster wireless connectivity."}),o.jsxs("ul",{children:[o.jsx("li",{children:"USB 4 and Thunderbolt 4 support"}),o.jsx("li",{children:"Wi-Fi 6E for faster wireless networks"}),o.jsx("li",{children:"Improved peripheral device management"})]})]})]})]})}),o.jsxs("section",{className:"container section-spacing",children:[o.jsx("div",{ref:a,className:"fade-in-up",children:o.jsx(Lt,{overline:"Robustrix Hardware",title:"Why Our PCs & Monitors are Perfect for Windows 11",subtitle:"Robustrix industrial PCs and monitors are engineered to meet and exceed Windows 11 requirements, ensuring optimal performance and reliability."})}),o.jsxs("div",{ref:s,className:"robustrix-advantages fade-in-up-stagger",children:[o.jsxs("article",{className:"advantage-card",children:[o.jsx("div",{className:"advantage-icon",children:"💻"}),o.jsx("h3",{children:"Windows 11 Ready"}),o.jsx("p",{children:"All our modern PCs come with TPM 2.0 support, UEFI firmware, and compatible processors that meet Windows 11 requirements. Pre-configured systems ensure seamless installation and optimization."})]}),o.jsxs("article",{className:"advantage-card",children:[o.jsx("div",{className:"advantage-icon",children:"🚀"}),o.jsx("h3",{children:"Powerful Processors"}),o.jsx("p",{children:"Our systems feature Intel Core 12th/13th/14th Gen processors and Intel Processor N-Series, perfectly matched with Windows 11's multi-core optimizations. Ideal for demanding productivity and AI workloads."})]}),o.jsxs("article",{className:"advantage-card",children:[o.jsx("div",{className:"advantage-icon",children:"💾"}),o.jsx("h3",{children:"Fast NVMe Storage"}),o.jsx("p",{children:"Multiple M.2 NVMe SSD slots enable lightning-fast boot times and application launches. DirectStorage support for gaming and content creation applications."})]}),o.jsxs("article",{className:"advantage-card",children:[o.jsx("div",{className:"advantage-icon",children:"🖥️"}),o.jsx("h3",{children:"High-Quality Displays"}),o.jsx("p",{children:`Our 21.5" Digital LCD Monitors feature Full HD resolution, excellent color accuracy, and support for Windows 11's HDR features. Perfect for professional work and multimedia applications.`})]}),o.jsxs("article",{className:"advantage-card",children:[o.jsx("div",{className:"advantage-icon",children:"🔐"}),o.jsx("h3",{children:"Enterprise Security"}),o.jsx("p",{children:"TPM 2.0 standard across all models ensures hardware-level security for Windows 11. Secure Boot support and encryption capabilities for sensitive business data."})]}),o.jsxs("article",{className:"advantage-card",children:[o.jsx("div",{className:"advantage-icon",children:"⚡"}),o.jsx("h3",{children:"Durability & Reliability"}),o.jsx("p",{children:"Fanless designs and industrial-grade components ensure long-term reliability. Wide operating temperature ranges and shock/vibration resistance for demanding environments."})]}),o.jsxs("article",{className:"advantage-card",children:[o.jsx("div",{className:"advantage-icon",children:"🔌"}),o.jsx("h3",{children:"Modern Connectivity"}),o.jsx("p",{children:"Multiple USB 3.2 Gen2 ports, Thunderbolt support, and high-speed networking options. Perfect for Windows 11's enhanced peripheral and connectivity features."})]}),o.jsxs("article",{className:"advantage-card",children:[o.jsx("div",{className:"advantage-icon",children:"🛠️"}),o.jsx("h3",{children:"Easy Deployment"}),o.jsx("p",{children:"Pre-installed Windows 11 or easy upgrade paths. Comprehensive documentation and support for enterprise deployment scenarios."})]})]})]}),o.jsx("section",{className:"container section-spacing",children:o.jsxs("div",{ref:l,className:"win11-decision-section fade-in-up",children:[o.jsx(Lt,{overline:"Making the Right Choice",title:"How This Helps Your Buying Decision",subtitle:"Understanding Windows 11 compatibility and hardware requirements ensures you make an informed investment."}),o.jsxs("div",{className:"decision-grid",children:[o.jsxs("div",{className:"decision-card",children:[o.jsx("h3",{children:"✅ Future-Proof Investment"}),o.jsx("p",{children:"Windows 11 is Microsoft's latest operating system with long-term support until 2031. Investing in Windows 11-compatible hardware ensures your systems remain current and supported for years to come. Avoid costly upgrades and compatibility issues later."})]}),o.jsxs("div",{className:"decision-card",children:[o.jsx("h3",{children:"⚙️ Performance Optimization"}),o.jsx("p",{children:"Windows 11 delivers better performance on modern hardware. Pairing it with Robustrix PCs featuring latest processors and fast storage maximizes your productivity and workflow efficiency. Get the most out of your hardware investment."})]}),o.jsxs("div",{className:"decision-card",children:[o.jsx("h3",{children:"🔒 Enhanced Security Posture"}),o.jsx("p",{children:"Windows 11's security improvements, combined with Robustrix hardware featuring TPM 2.0 and secure boot capabilities, provide enterprise-grade protection. Essential for businesses handling sensitive data and maintaining compliance standards."})]}),o.jsxs("div",{className:"decision-card",children:[o.jsx("h3",{children:"💰 Cost Efficiency"}),o.jsx("p",{children:"Our industrial PCs offer exceptional value with Windows 11 compatibility built-in. No need for separate upgrades or additional security hardware. Long-lasting fanless designs reduce maintenance costs and extend system lifespans."})]}),o.jsxs("div",{className:"decision-card",children:[o.jsx("h3",{children:"📈 Productivity Boost"}),o.jsx("p",{children:"Windows 11's improved UI, better multitasking, and modern features combined with Robustrix hardware deliver a superior user experience. Faster boot times, smoother application performance, and better resource management increase daily productivity."})]}),o.jsxs("div",{className:"decision-card",children:[o.jsx("h3",{children:"🌐 Seamless Integration"}),o.jsx("p",{children:"Windows 11 integrates seamlessly with Microsoft 365, Teams, and Azure services. Robustrix hardware ensures reliable connectivity and performance for cloud-based workflows and remote collaboration tools."})]})]})]})}),o.jsx("section",{ref:c,className:"win11-cta-section fade-in-up",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"win11-cta-content",children:[o.jsx("h2",{className:"win11-cta-title",children:"Ready to Upgrade to Windows 11?"}),o.jsx("p",{className:"win11-cta-text",children:"Explore our Windows 11-ready PCs and monitors designed for optimal performance, security, and reliability. Contact our team to find the perfect solution for your needs."}),o.jsxs("div",{className:"win11-cta-buttons",children:[o.jsx("a",{href:"/products",className:"btn btn-primary",children:"View Products"}),o.jsx("a",{href:"https://wa.me/919090020245",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:"Contact Sales"})]})]})})}),o.jsx("style",{children:`
        /* Hero Section */
        .win11-hero {
          background: linear-gradient(135deg, #0078d4 0%, #106ebe 50%, #005a9e 100%);
          color: #ffffff;
          padding-block: clamp(60px, 10vw, 120px);
          position: relative;
          overflow: hidden;
        }
        .win11-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        .win11-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }
        .win11-title {
          font-size: clamp(42px, 6vw, 64px);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 16px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .win11-subtitle {
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 700;
          margin-bottom: 24px;
          opacity: 0.95;
        }
        .win11-intro {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.6;
          opacity: 0.9;
          max-width: 800px;
        }
        .win11-badge {
          position: absolute;
          top: 40px;
          right: var(--container-pad);
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          padding: 12px 20px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .win11-badge svg {
          width: 20px;
          height: 20px;
        }

        /* Features Grid */
        .win11-features-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (min-width: 768px) {
          .win11-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .win11-features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .feature-card {
          padding: 32px;
          display: grid;
          gap: 16px;
          text-align: center;
        }
        .feature-icon {
          font-size: 48px;
          margin-bottom: 8px;
        }
        .feature-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-ink-900);
        }
        .feature-desc {
          color: var(--color-ink-700);
          line-height: 1.6;
        }

        /* Hardware Section */
        .win11-hardware-section {
          background: var(--color-bg-alt);
        }
        .win11-hardware-section .container {
          background: transparent;
        }
        .win11-hardware-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (min-width: 1024px) {
          .win11-hardware-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .hardware-item {
          background: var(--color-bg);
          padding: 32px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          text-align: center;
        }
        .hardware-header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .hardware-header h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-ink-900);
        }
        .hardware-badge {
          background: var(--color-brand-primary);
          color: var(--color-ink-900);
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .hardware-item p {
          color: var(--color-ink-700);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .hardware-item ul {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 8px;
          text-align: left;
          max-width: fit-content;
          margin: 0 auto;
        }
        .hardware-item ul li {
          color: var(--color-ink-700);
          padding-left: 24px;
          position: relative;
        }
        .hardware-item ul li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-brand-primary);
          font-weight: 800;
        }

        /* Robustrix Advantages */
        .robustrix-advantages {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (min-width: 768px) {
          .robustrix-advantages {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .robustrix-advantages {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .advantage-card {
          background: var(--color-bg-alt);
          padding: 28px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          text-align: center;
          display: grid;
          gap: 12px;
          border: 2px solid transparent;
          transition: border-color var(--transition), transform var(--transition);
        }
        .advantage-card:hover {
          border-color: var(--color-brand-primary);
          transform: translateY(-4px);
        }
        .advantage-icon {
          font-size: 40px;
          margin-bottom: 8px;
        }
        .advantage-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-ink-900);
        }
        .advantage-card p {
          color: var(--color-ink-700);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Decision Section */
        .win11-decision-section {
          background: linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
          padding: 48px 0;
          border-radius: var(--radius-lg);
        }
        .decision-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (min-width: 768px) {
          .decision-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .decision-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .decision-card {
          background: var(--color-bg);
          padding: 32px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--color-brand-primary);
        }
        .decision-card h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-ink-900);
          margin-bottom: 16px;
        }
        .decision-card p {
          color: var(--color-ink-700);
          line-height: 1.7;
        }

        /* CTA Section */
        .win11-cta-section {
          background: linear-gradient(135deg, var(--color-brand-primary-dark) 0%, var(--color-brand-primary) 100%);
          color: #ffffff;
          padding-block: clamp(60px, 8vw, 100px);
          margin-top: 48px;
        }
        .win11-cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        .win11-cta-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 900;
          margin-bottom: 24px;
        }
        .win11-cta-text {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.6;
          margin-bottom: 32px;
          opacity: 0.95;
        }
        .win11-cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .win11-cta-section .btn {
          --btn-glow: rgba(255, 255, 255, 0.38);
          --btn-glow-strong: rgba(255, 255, 255, 0.65);
        }
        .win11-cta-section .btn-primary {
          border-color: rgba(255,255,255,0.35);
          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.22),
            0 16px 44px rgba(255, 255, 255, 0.45);
        }
        .win11-cta-section .btn-outline {
          border-color: rgba(255,255,255,0.45);
          color: #ffffff;
          background: rgba(255,255,255,0.06);
          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.32),
            0 0 0 1px rgba(255, 255, 255, 0.22),
            0 16px 42px rgba(255, 255, 255, 0.35);
        }
        .win11-cta-section .btn-outline:hover {
          border-color: #ffffff;
          background: rgba(255,255,255,0.14);
          box-shadow:
            0 14px 36px rgba(0, 0, 0, 0.34),
            0 0 0 1px rgba(255, 255, 255, 0.32),
            0 18px 48px rgba(255, 255, 255, 0.45);
        }

        @media (max-width: 1023px) {
          .win11-badge {
            position: static;
            margin-top: 24px;
            display: inline-flex;
          }
        }
      `})]})}function ey(){const{id:t}=Wf(),e=t?p1(t):null,r=T(),n=T();return e?o.jsxs("main",{className:"news-article-page",children:[o.jsxs("section",{ref:r,className:"news-article-hero fade-in-up",children:[o.jsxs("div",{className:"news-article-hero-media",children:[o.jsx("img",{src:e.image,alt:e.title,decoding:"async"}),o.jsx("div",{className:"news-article-hero-scrim","aria-hidden":"true"})]}),o.jsxs("div",{className:"container news-article-hero-inner",children:[o.jsx(Z,{className:"news-article-back link",to:"/#blog-articles",children:"← Back to Blog & Articles"}),o.jsxs("p",{className:"news-article-meta overline",children:[e.date,e.meta?` · ${e.meta}`:""]}),o.jsx("h1",{className:"news-article-title h2",children:e.title})]})]}),o.jsx("article",{ref:n,className:"container section-spacing news-article-body fade-in-up",children:e.body.map((i,a)=>o.jsx("p",{className:"news-article-p subtle",children:i},a))}),o.jsx("style",{children:`
        .news-article-page {
          background: var(--color-bg);
          color: var(--color-ink-900);
        }
        .news-article-hero {
          position: relative;
          min-height: clamp(220px, 38vw, 360px);
          display: grid;
          align-items: end;
        }
        .news-article-hero-media {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .news-article-hero-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .news-article-hero-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(2, 44, 54, 0.2) 0%,
            rgba(2, 44, 54, 0.75) 55%,
            rgba(2, 44, 54, 0.92) 100%
          );
        }
        .news-article-hero-inner {
          position: relative;
          z-index: 1;
          padding-block: clamp(28px, 5vw, 48px);
          max-width: 900px;
        }
        .news-article-back {
          display: inline-block;
          margin-bottom: 14px;
          font-weight: 700;
        }
        .news-article-meta {
          margin-bottom: 8px;
        }
        .news-article-title {
          font-size: clamp(1.35rem, 4vw, 2.25rem);
          line-height: 1.2;
          font-weight: 900;
        }
        .news-article-body {
          max-width: 70ch;
          display: grid;
          gap: 1.1rem;
          padding-bottom: clamp(48px, 10vw, 96px);
        }
        .news-article-p {
          font-size: clamp(1rem, 2.2vw, 1.08rem);
          line-height: 1.65;
        }
      `})]}):o.jsx(Xf,{to:"/",replace:!0})}function ty(){const{id:t}=Wf(),e=t?u1(t):null,r=T(),n=T();return e?o.jsxs("main",{className:"app-area-page",children:[o.jsxs("section",{ref:r,className:"app-area-hero fade-in-up",children:[o.jsxs("div",{className:"app-area-hero-media",children:[o.jsx("img",{src:e.image,alt:e.title,decoding:"async"}),o.jsx("div",{className:"app-area-hero-scrim","aria-hidden":"true"})]}),o.jsxs("div",{className:"container app-area-hero-inner",children:[o.jsx(Z,{className:"app-area-back link",to:"/#ai-applications",children:"← Applications of Our AI-Driven Solutions"}),o.jsx("p",{className:"app-area-kicker overline",children:"Application area"}),o.jsx("h1",{className:"app-area-title h2",children:e.title})]})]}),o.jsxs("div",{ref:n,className:"container section-spacing app-area-layout fade-in-up",children:[o.jsxs("aside",{className:"app-area-aside card",children:[o.jsx("h2",{className:"app-area-aside-title",children:"At a glance"}),o.jsx("ul",{className:"app-area-bullets",children:e.bullets.map((i,a)=>o.jsx("li",{children:i},a))})]}),o.jsx("article",{className:"app-area-body",children:e.body.map((i,a)=>o.jsx("p",{className:"app-area-p subtle",children:i},a))})]}),o.jsx("style",{children:`
        .app-area-page {
          background: var(--color-bg);
          color: var(--color-ink-900);
        }
        .app-area-hero {
          position: relative;
          min-height: clamp(220px, 38vw, 360px);
          display: grid;
          align-items: end;
        }
        .app-area-hero-media {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .app-area-hero-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .app-area-hero-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(2, 44, 54, 0.2) 0%,
            rgba(2, 44, 54, 0.75) 55%,
            rgba(2, 44, 54, 0.92) 100%
          );
        }
        .app-area-hero-inner {
          position: relative;
          z-index: 1;
          padding-block: clamp(28px, 5vw, 48px);
          max-width: 900px;
        }
        .app-area-back {
          display: inline-block;
          margin-bottom: 14px;
          font-weight: 700;
        }
        .app-area-kicker {
          margin-bottom: 8px;
        }
        .app-area-title {
          font-size: clamp(1.35rem, 4vw, 2.25rem);
          line-height: 1.2;
          font-weight: 900;
        }
        .app-area-layout {
          display: grid;
          gap: clamp(20px, 4vw, 32px);
          grid-template-columns: 1fr;
          align-items: start;
          padding-bottom: clamp(48px, 10vw, 96px);
        }
        @media (min-width: 900px) {
          .app-area-layout {
            grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
          }
        }
        .app-area-aside {
          padding: 18px 20px;
          display: grid;
          gap: 12px;
        }
        .app-area-aside-title {
          font-size: 0.95rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-brand-primary);
        }
        .app-area-bullets {
          margin: 0;
          padding-left: 1.15rem;
          display: grid;
          gap: 8px;
          color: var(--color-ink-700);
          font-size: 0.95rem;
          line-height: 1.45;
        }
        .app-area-body {
          display: grid;
          gap: 1.1rem;
          max-width: 65ch;
        }
        .app-area-p {
          font-size: clamp(1rem, 2.2vw, 1.08rem);
          line-height: 1.65;
        }
      `})]}):o.jsx(Xf,{to:"/",replace:!0})}function ry(){const{isOpen:t,closeModal:e}=wc(),[r,n]=S.useState(!1),a=qr().pathname==="/";S.useEffect(()=>{n(!0);const l=requestAnimationFrame(()=>{document.documentElement.classList.add("app-mounted")});return()=>cancelAnimationFrame(l)},[]);const s=()=>{n(!1)};return o.jsxs(o.Fragment,{children:[r&&o.jsx(c1,{onComplete:s}),o.jsx(Tx,{}),o.jsxs(vx,{children:[o.jsx(J,{path:"/",element:o.jsx(g1,{})}),o.jsx(J,{path:"/ai-solutions",element:o.jsx(y1,{})}),o.jsx(J,{path:"/computing-systems",element:o.jsx(k1,{})}),o.jsx(J,{path:"/embedded-boards",element:o.jsx(N1,{})}),o.jsx(J,{path:"/network",element:o.jsx(I1,{})}),o.jsx(J,{path:"/network/desktop",element:o.jsx(E1,{})}),o.jsx(J,{path:"/network/rackmount",element:o.jsx(R1,{})}),o.jsx(J,{path:"/network/industrial-security",element:o.jsx(z1,{})}),o.jsx(J,{path:"/network/modules",element:o.jsx(U1,{})}),o.jsx(J,{path:"/about",element:o.jsx(B1,{})}),o.jsx(J,{path:"/up",element:o.jsx(V1,{})}),o.jsx(J,{path:"/up/boards",element:o.jsx(G1,{})}),o.jsx(J,{path:"/up/systems",element:o.jsx(H1,{})}),o.jsx(J,{path:"/up/edge-computing-kit",element:o.jsx($1,{})}),o.jsx(J,{path:"/up/edge-ai-toolkit",element:o.jsx(X1,{})}),o.jsx(J,{path:"/iot-gateways",element:o.jsx(Y1,{})}),o.jsx(J,{path:"/panel-pcs",element:o.jsx(K1,{})}),o.jsx(J,{path:"/products",element:o.jsx(Q1,{})}),o.jsx(J,{path:"/solutions",element:o.jsx(J1,{})}),o.jsx(J,{path:"/windows-11-analysis",element:o.jsx(Z1,{})}),o.jsx(J,{path:"/blog/:id",element:o.jsx(ey,{})}),o.jsx(J,{path:"/applications/:id",element:o.jsx(ty,{})})]}),a&&o.jsx(Mx,{}),o.jsx(Rx,{isOpen:t,onClose:e})]})}function ny(){return o.jsx(Ax,{children:o.jsx(ry,{})})}const iy=document.getElementById("root"),ay=Df(iy);ay.render(o.jsx(Td.StrictMode,{children:o.jsx(Sx,{children:o.jsx(ny,{})})}));
