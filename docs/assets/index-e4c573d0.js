(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fa={exports:{}},go={},da={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Rc=Symbol.for("react.portal"),Nc=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),Oc=Symbol.for("react.provider"),jc=Symbol.for("react.context"),Mc=Symbol.for("react.forward_ref"),Ic=Symbol.for("react.suspense"),Uc=Symbol.for("react.memo"),Ac=Symbol.for("react.lazy"),Ki=Symbol.iterator;function Jc(e){return e===null||typeof e!="object"?null:(e=Ki&&e[Ki]||e["@@iterator"],typeof e=="function"?e:null)}var pa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ma=Object.assign,va={};function _n(e,t,n){this.props=e,this.context=t,this.refs=va,this.updater=n||pa}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ha(){}ha.prototype=_n.prototype;function ni(e,t,n){this.props=e,this.context=t,this.refs=va,this.updater=n||pa}var ri=ni.prototype=new ha;ri.constructor=ni;ma(ri,_n.prototype);ri.isPureReactComponent=!0;var bi=Array.isArray,ya=Object.prototype.hasOwnProperty,oi={current:null},ga={key:!0,ref:!0,__self:!0,__source:!0};function Sa(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)ya.call(t,r)&&!ga.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:cr,type:e,key:l,ref:i,props:o,_owner:oi.current}}function Bc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function li(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Vc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zi=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vc(""+e.key):t.toString(36)}function jr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case cr:case Rc:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+jo(i,0):r,bi(o)?(n="",e!=null&&(n=e.replace(Zi,"$&/")+"/"),jr(o,t,n,"",function(c){return c})):o!=null&&(li(o)&&(o=Bc(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Zi,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",bi(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+jo(l,u);i+=jr(l,t,n,a,o)}else if(a=Jc(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+jo(l,u++),i+=jr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function gr(e,t,n){if(e==null)return e;var r=[],o=0;return jr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Mr={transition:null},$c={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:oi};function Fa(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=_n;D.Fragment=Nc;D.Profiler=Dc;D.PureComponent=ni;D.StrictMode=Lc;D.Suspense=Ic;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$c;D.act=Fa;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ma({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=oi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)ya.call(t,a)&&!ga.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:cr,type:e.type,key:o,ref:l,props:r,_owner:i}};D.createContext=function(e){return e={$$typeof:jc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Oc,_context:e},e.Consumer=e};D.createElement=Sa;D.createFactory=function(e){var t=Sa.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Mc,render:e}};D.isValidElement=li;D.lazy=function(e){return{$$typeof:Ac,_payload:{_status:-1,_result:e},_init:Wc}};D.memo=function(e,t){return{$$typeof:Uc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};D.unstable_act=Fa;D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.3.1";da.exports=D;var z=da.exports;const Xc=Pc(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=z,Yc=Symbol.for("react.element"),Qc=Symbol.for("react.fragment"),Gc=Object.prototype.hasOwnProperty,Kc=Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bc={key:!0,ref:!0,__self:!0,__source:!0};function _a(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Gc.call(t,r)&&!bc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Yc,type:e,key:l,ref:i,props:o,_owner:Kc.current}}go.Fragment=Qc;go.jsx=_a;go.jsxs=_a;fa.exports=go;var N=fa.exports,ul={},xa={exports:{}},we={},Ca={exports:{}},wa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var R=C.length;C.push(T);e:for(;0<R;){var V=R-1>>>1,Y=C[V];if(0<o(Y,T))C[V]=T,C[R]=Y,R=V;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],R=C.pop();if(R!==T){C[0]=R;e:for(var V=0,Y=C.length,Ht=Y>>>1;V<Ht;){var Je=2*(V+1)-1,Qe=C[Je],Be=Je+1,Yt=C[Be];if(0>o(Qe,R))Be<Y&&0>o(Yt,Qe)?(C[V]=Yt,C[Be]=R,V=Be):(C[V]=Qe,C[Je]=R,V=Je);else if(Be<Y&&0>o(Yt,R))C[V]=Yt,C[Be]=R,V=Be;else break e}}return T}function o(C,T){var R=C.sortIndex-T.sortIndex;return R!==0?R:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var a=[],c=[],m=1,p=null,v=3,g=!1,h=!1,F=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=C)r(c),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(c)}}function y(C){if(F=!1,f(C),!h)if(n(a)!==null)h=!0,$t(_);else{var T=n(c);T!==null&&Xt(y,T.startTime-C)}}function _(C,T){h=!1,F&&(F=!1,d(k),k=-1),g=!0;var R=v;try{for(f(T),p=n(a);p!==null&&(!(p.expirationTime>T)||C&&!pe());){var V=p.callback;if(typeof V=="function"){p.callback=null,v=p.priorityLevel;var Y=V(p.expirationTime<=T);T=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(a)&&r(a),f(T)}else r(a);p=n(a)}if(p!==null)var Ht=!0;else{var Je=n(c);Je!==null&&Xt(y,Je.startTime-T),Ht=!1}return Ht}finally{p=null,v=R,g=!1}}var x=!1,E=null,k=-1,j=5,L=-1;function pe(){return!(e.unstable_now()-L<j)}function Ye(){if(E!==null){var C=e.unstable_now();L=C;var T=!0;try{T=E(!0,C)}finally{T?Ae():(x=!1,E=null)}}else x=!1}var Ae;if(typeof s=="function")Ae=function(){s(Ye)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,vr=ut.port2;ut.port1.onmessage=Ye,Ae=function(){vr.postMessage(null)}}else Ae=function(){P(Ye,0)};function $t(C){E=C,x||(x=!0,Ae())}function Xt(C,T){k=P(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,$t(_))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(v){case 1:case 2:case 3:var T=3;break;default:T=v}var R=v;v=T;try{return C()}finally{v=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=v;v=C;try{return T()}finally{v=R}},e.unstable_scheduleCallback=function(C,T,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,C={id:m++,callback:T,priorityLevel:C,startTime:R,expirationTime:Y,sortIndex:-1},R>V?(C.sortIndex=R,t(c,C),n(a)===null&&C===n(c)&&(F?(d(k),k=-1):F=!0,Xt(y,R-V))):(C.sortIndex=Y,t(a,C),h||g||(h=!0,$t(_))),C},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(C){var T=v;return function(){var R=v;v=T;try{return C.apply(this,arguments)}finally{v=R}}}})(wa);Ca.exports=wa;var Zc=Ca.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=z,Ce=Zc;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ea=new Set,Yn={};function Vt(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)Ea.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=Object.prototype.hasOwnProperty,ef=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qi={},eu={};function tf(e){return al.call(eu,e)?!0:al.call(qi,e)?!1:ef.test(e)?eu[e]=!0:(qi[e]=!0,!1)}function nf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rf(e,t,n,r){if(t===null||typeof t>"u"||nf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var ii=/[\-:]([a-z])/g;function ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ii,ui);oe[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ii,ui);oe[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ii,ui);oe[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ai(e,t,n,r){var o=oe.hasOwnProperty(t)?oe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rf(t,n,o,r)&&(n=null),r||o===null?tf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),si=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),ka=Symbol.for("react.provider"),za=Symbol.for("react.context"),ci=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),fi=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Ta=Symbol.for("react.offscreen"),tu=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Mo;function On(e){if(Mo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mo=t&&t[1]||""}return`
`+Mo+e}var Io=!1;function Uo(e,t){if(!e||Io)return"";Io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,u=l.length-1;1<=i&&0<=u&&o[i]!==l[u];)u--;for(;1<=i&&0<=u;i--,u--)if(o[i]!==l[u]){if(i!==1||u!==1)do if(i--,u--,0>u||o[i]!==l[u]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=u);break}}}finally{Io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function of(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=Uo(e.type,!1),e;case 11:return e=Uo(e.type.render,!1),e;case 1:return e=Uo(e.type,!0),e;default:return""}}function dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Gt:return"Portal";case sl:return"Profiler";case si:return"StrictMode";case cl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case za:return(e.displayName||"Context")+".Consumer";case ka:return(e._context.displayName||"Context")+".Provider";case ci:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fi:return t=e.displayName||null,t!==null?t:dl(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return dl(e(t))}catch{}}return null}function lf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(t);case 8:return t===si?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uf(e){var t=Pa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){e._valueTracker||(e._valueTracker=uf(e))}function Ra(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Na(e,t){t=t.checked,t!=null&&ai(e,"checked",t,!1)}function ml(e,t){Na(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ru(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(jn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function La(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Da(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Da(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,Oa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},af=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){af.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function ja(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function Ma(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ja(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var sf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(sf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,sn=null,cn=null;function iu(e){if(e=pr(e)){if(typeof _l!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Co(t),_l(e.stateNode,e.type,t))}}function Ia(e){sn?cn?cn.push(e):cn=[e]:sn=e}function Ua(){if(sn){var e=sn,t=cn;if(cn=sn=null,iu(e),t)for(e=0;e<t.length;e++)iu(t[e])}}function Aa(e,t){return e(t)}function Ja(){}var Ao=!1;function Ba(e,t,n){if(Ao)return e(t,n);Ao=!0;try{return Aa(e,t,n)}finally{Ao=!1,(sn!==null||cn!==null)&&(Ja(),Ua())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var xl=!1;if(nt)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){xl=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{xl=!1}function cf(e,t,n,r,o,l,i,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var An=!1,Qr=null,Gr=!1,Cl=null,ff={onError:function(e){An=!0,Qr=e}};function df(e,t,n,r,o,l,i,u,a){An=!1,Qr=null,cf.apply(ff,arguments)}function pf(e,t,n,r,o,l,i,u,a){if(df.apply(this,arguments),An){if(An){var c=Qr;An=!1,Qr=null}else throw Error(S(198));Gr||(Gr=!0,Cl=c)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Va(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uu(e){if(Wt(e)!==e)throw Error(S(188))}function mf(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return uu(o),e;if(l===r)return uu(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i){for(u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Wa(e){return e=mf(e),e!==null?$a(e):null}function $a(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$a(e);if(t!==null)return t;e=e.sibling}return null}var Xa=Ce.unstable_scheduleCallback,au=Ce.unstable_cancelCallback,vf=Ce.unstable_shouldYield,hf=Ce.unstable_requestPaint,G=Ce.unstable_now,yf=Ce.unstable_getCurrentPriorityLevel,pi=Ce.unstable_ImmediatePriority,Ha=Ce.unstable_UserBlockingPriority,Kr=Ce.unstable_NormalPriority,gf=Ce.unstable_LowPriority,Ya=Ce.unstable_IdlePriority,So=null,Xe=null;function Sf(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:xf,Ff=Math.log,_f=Math.LN2;function xf(e){return e>>>=0,e===0?32:31-(Ff(e)/_f|0)|0}var xr=64,Cr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~o;u!==0?r=Mn(u):(l&=i,l!==0&&(r=Mn(l)))}else i=n&~o,i!==0?r=Mn(i):l!==0&&(r=Mn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),o=1<<n,r|=e[n],t&=~o;return r}function Cf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Me(l),u=1<<i,a=o[i];a===-1?(!(u&n)||u&r)&&(o[i]=Cf(u,t)):a<=t&&(e.expiredLanes|=u),l&=~u}}function wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qa(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function Ef(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Me(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function mi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function Ga(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ka,vi,ba,Za,qa,El=!1,wr=[],vt=null,ht=null,yt=null,Kn=new Map,bn=new Map,ft=[],kf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function su(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function Tn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&vi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zf(e,t,n,r,o){switch(t){case"focusin":return vt=Tn(vt,e,t,n,r,o),!0;case"dragenter":return ht=Tn(ht,e,t,n,r,o),!0;case"mouseover":return yt=Tn(yt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Kn.set(l,Tn(Kn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,bn.set(l,Tn(bn.get(l)||null,e,t,n,r,o)),!0}return!1}function es(e){var t=Lt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=Va(n),t!==null){e.blockedOn=t,qa(e.priority,function(){ba(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=pr(n),t!==null&&vi(t),e.blockedOn=n,!1;t.shift()}return!0}function cu(e,t,n){Ir(e)&&n.delete(t)}function Tf(){El=!1,vt!==null&&Ir(vt)&&(vt=null),ht!==null&&Ir(ht)&&(ht=null),yt!==null&&Ir(yt)&&(yt=null),Kn.forEach(cu),bn.forEach(cu)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,El||(El=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Tf)))}function Zn(e){function t(o){return Pn(o,e)}if(0<wr.length){Pn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&Pn(vt,e),ht!==null&&Pn(ht,e),yt!==null&&Pn(yt,e),Kn.forEach(t),bn.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)es(n),n.blockedOn===null&&ft.shift()}var fn=it.ReactCurrentBatchConfig,Zr=!0;function Pf(e,t,n,r){var o=M,l=fn.transition;fn.transition=null;try{M=1,hi(e,t,n,r)}finally{M=o,fn.transition=l}}function Rf(e,t,n,r){var o=M,l=fn.transition;fn.transition=null;try{M=4,hi(e,t,n,r)}finally{M=o,fn.transition=l}}function hi(e,t,n,r){if(Zr){var o=kl(e,t,n,r);if(o===null)Ko(e,t,r,qr,n),su(e,r);else if(zf(o,e,t,n,r))r.stopPropagation();else if(su(e,r),t&4&&-1<kf.indexOf(e)){for(;o!==null;){var l=pr(o);if(l!==null&&Ka(l),l=kl(e,t,n,r),l===null&&Ko(e,t,r,qr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Ko(e,t,r,null,n)}}var qr=null;function kl(e,t,n,r){if(qr=null,e=di(r),e=Lt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Va(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function ts(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yf()){case pi:return 1;case Ha:return 4;case Kr:case gf:return 16;case Ya:return 536870912;default:return 16}default:return 16}}var pt=null,yi=null,Ur=null;function ns(){if(Ur)return Ur;var e,t=yi,n=t.length,r,o="value"in pt?pt.value:pt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Ur=o.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function fu(){return!1}function Ee(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Er:fu,this.isPropagationStopped=fu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=Ee(xn),dr=H({},xn,{view:0,detail:0}),Nf=Ee(dr),Bo,Vo,Rn,Fo=H({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(Bo=e.screenX-Rn.screenX,Vo=e.screenY-Rn.screenY):Vo=Bo=0,Rn=e),Bo)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),du=Ee(Fo),Lf=H({},Fo,{dataTransfer:0}),Df=Ee(Lf),Of=H({},dr,{relatedTarget:0}),Wo=Ee(Of),jf=H({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mf=Ee(jf),If=H({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uf=Ee(If),Af=H({},xn,{data:0}),pu=Ee(Af),Jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vf[e])?!!t[e]:!1}function Si(){return Wf}var $f=H({},dr,{key:function(e){if(e.key){var t=Jf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Si,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xf=Ee($f),Hf=H({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=Ee(Hf),Yf=H({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Si}),Qf=Ee(Yf),Gf=H({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kf=Ee(Gf),bf=H({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=Ee(bf),qf=[9,13,27,32],Fi=nt&&"CompositionEvent"in window,Jn=null;nt&&"documentMode"in document&&(Jn=document.documentMode);var e0=nt&&"TextEvent"in window&&!Jn,rs=nt&&(!Fi||Jn&&8<Jn&&11>=Jn),vu=String.fromCharCode(32),hu=!1;function os(e,t){switch(e){case"keyup":return qf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ls(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function t0(e,t){switch(e){case"compositionend":return ls(t);case"keypress":return t.which!==32?null:(hu=!0,vu);case"textInput":return e=t.data,e===vu&&hu?null:e;default:return null}}function n0(e,t){if(bt)return e==="compositionend"||!Fi&&os(e,t)?(e=ns(),Ur=yi=pt=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rs&&t.locale!=="ko"?null:t.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r0[e.type]:t==="textarea"}function is(e,t,n,r){Ia(r),t=eo(t,"onChange"),0<t.length&&(n=new gi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,qn=null;function o0(e){ys(e,0)}function _o(e){var t=en(e);if(Ra(t))return e}function l0(e,t){if(e==="change")return t}var us=!1;if(nt){var $o;if(nt){var Xo="oninput"in document;if(!Xo){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),Xo=typeof gu.oninput=="function"}$o=Xo}else $o=!1;us=$o&&(!document.documentMode||9<document.documentMode)}function Su(){Bn&&(Bn.detachEvent("onpropertychange",as),qn=Bn=null)}function as(e){if(e.propertyName==="value"&&_o(qn)){var t=[];is(t,qn,e,di(e)),Ba(o0,t)}}function i0(e,t,n){e==="focusin"?(Su(),Bn=t,qn=n,Bn.attachEvent("onpropertychange",as)):e==="focusout"&&Su()}function u0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _o(qn)}function a0(e,t){if(e==="click")return _o(t)}function s0(e,t){if(e==="input"||e==="change")return _o(t)}function c0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:c0;function er(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!al.call(t,o)||!Ue(e[o],t[o]))return!1}return!0}function Fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,t){var n=Fu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fu(n)}}function ss(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ss(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cs(){for(var e=window,t=Yr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yr(e.document)}return t}function _i(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function f0(e){var t=cs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ss(n.ownerDocument.documentElement,n)){if(r!==null&&_i(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=_u(n,l);var i=_u(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var d0=nt&&"documentMode"in document&&11>=document.documentMode,Zt=null,zl=null,Vn=null,Tl=!1;function xu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||Zt==null||Zt!==Yr(r)||(r=Zt,"selectionStart"in r&&_i(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vn&&er(Vn,r)||(Vn=r,r=eo(zl,"onSelect"),0<r.length&&(t=new gi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Ho={},fs={};nt&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function xo(e){if(Ho[e])return Ho[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fs)return Ho[e]=t[n];return e}var ds=xo("animationend"),ps=xo("animationiteration"),ms=xo("animationstart"),vs=xo("transitionend"),hs=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){hs.set(e,t),Vt(t,[e])}for(var Yo=0;Yo<Cu.length;Yo++){var Qo=Cu[Yo],p0=Qo.toLowerCase(),m0=Qo[0].toUpperCase()+Qo.slice(1);Et(p0,"on"+m0)}Et(ds,"onAnimationEnd");Et(ps,"onAnimationIteration");Et(ms,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(vs,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pf(r,t,void 0,e),e.currentTarget=null}function ys(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==l&&o.isPropagationStopped())break e;wu(o,u,c),l=a}else for(i=0;i<r.length;i++){if(u=r[i],a=u.instance,c=u.currentTarget,u=u.listener,a!==l&&o.isPropagationStopped())break e;wu(o,u,c),l=a}}}if(Gr)throw e=Cl,Gr=!1,Cl=null,e}function J(e,t){var n=t[Dl];n===void 0&&(n=t[Dl]=new Set);var r=e+"__bubble";n.has(r)||(gs(t,e,2,!1),n.add(r))}function Go(e,t,n){var r=0;t&&(r|=4),gs(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[zr]){e[zr]=!0,Ea.forEach(function(n){n!=="selectionchange"&&(v0.has(n)||Go(n,!1,e),Go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,Go("selectionchange",!1,t))}}function gs(e,t,n,r){switch(ts(t)){case 1:var o=Pf;break;case 4:o=Rf;break;default:o=hi}n=o.bind(null,t,n,e),o=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ko(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;u!==null;){if(i=Lt(u),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}u=u.parentNode}}r=r.return}Ba(function(){var c=l,m=di(n),p=[];e:{var v=hs.get(e);if(v!==void 0){var g=gi,h=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":g=Xf;break;case"focusin":h="focus",g=Wo;break;case"focusout":h="blur",g=Wo;break;case"beforeblur":case"afterblur":g=Wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Qf;break;case ds:case ps:case ms:g=Mf;break;case vs:g=Kf;break;case"scroll":g=Nf;break;case"wheel":g=Zf;break;case"copy":case"cut":case"paste":g=Uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mu}var F=(t&4)!==0,P=!F&&e==="scroll",d=F?v!==null?v+"Capture":null:v;F=[];for(var s=c,f;s!==null;){f=s;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Gn(s,d),y!=null&&F.push(nr(s,y,f)))),P)break;s=s.return}0<F.length&&(v=new g(v,h,null,n,m),p.push({event:v,listeners:F}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",v&&n!==Fl&&(h=n.relatedTarget||n.fromElement)&&(Lt(h)||h[rt]))break e;if((g||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,g?(h=n.relatedTarget||n.toElement,g=c,h=h?Lt(h):null,h!==null&&(P=Wt(h),h!==P||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=c),g!==h)){if(F=du,y="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(F=mu,y="onPointerLeave",d="onPointerEnter",s="pointer"),P=g==null?v:en(g),f=h==null?v:en(h),v=new F(y,s+"leave",g,n,m),v.target=P,v.relatedTarget=f,y=null,Lt(m)===c&&(F=new F(d,s+"enter",h,n,m),F.target=f,F.relatedTarget=P,y=F),P=y,g&&h)t:{for(F=g,d=h,s=0,f=F;f;f=Qt(f))s++;for(f=0,y=d;y;y=Qt(y))f++;for(;0<s-f;)F=Qt(F),s--;for(;0<f-s;)d=Qt(d),f--;for(;s--;){if(F===d||d!==null&&F===d.alternate)break t;F=Qt(F),d=Qt(d)}F=null}else F=null;g!==null&&Eu(p,v,g,F,!1),h!==null&&P!==null&&Eu(p,P,h,F,!0)}}e:{if(v=c?en(c):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var _=l0;else if(yu(v))if(us)_=s0;else{_=u0;var x=i0}else(g=v.nodeName)&&g.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(_=a0);if(_&&(_=_(e,c))){is(p,_,n,m);break e}x&&x(e,v,c),e==="focusout"&&(x=v._wrapperState)&&x.controlled&&v.type==="number"&&vl(v,"number",v.value)}switch(x=c?en(c):window,e){case"focusin":(yu(x)||x.contentEditable==="true")&&(Zt=x,zl=c,Vn=null);break;case"focusout":Vn=zl=Zt=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,xu(p,n,m);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":xu(p,n,m)}var E;if(Fi)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else bt?os(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(rs&&n.locale!=="ko"&&(bt||k!=="onCompositionStart"?k==="onCompositionEnd"&&bt&&(E=ns()):(pt=m,yi="value"in pt?pt.value:pt.textContent,bt=!0)),x=eo(c,k),0<x.length&&(k=new pu(k,e,null,n,m),p.push({event:k,listeners:x}),E?k.data=E:(E=ls(n),E!==null&&(k.data=E)))),(E=e0?t0(e,n):n0(e,n))&&(c=eo(c,"onBeforeInput"),0<c.length&&(m=new pu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=E))}ys(p,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Gn(e,n),l!=null&&r.unshift(nr(e,l,o)),l=Gn(e,t),l!=null&&r.push(nr(e,l,o))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,o?(a=Gn(n,l),a!=null&&i.unshift(nr(n,a,u))):o||(a=Gn(n,l),a!=null&&i.push(nr(n,a,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var h0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function ku(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(y0,"")}function Tr(e,t,n){if(t=ku(t),ku(e)!==t&&n)throw Error(S(425))}function to(){}var Pl=null,Rl=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,zu=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof zu<"u"?function(e){return zu.resolve(null).then(e).catch(F0)}:Ll;function F0(e){setTimeout(function(){throw e})}function bo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Zn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),$e="__reactFiber$"+Cn,rr="__reactProps$"+Cn,rt="__reactContainer$"+Cn,Dl="__reactEvents$"+Cn,_0="__reactListeners$"+Cn,x0="__reactHandles$"+Cn;function Lt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tu(e);e!==null;){if(n=e[$e])return n;e=Tu(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[$e]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Co(e){return e[rr]||null}var Ol=[],tn=-1;function kt(e){return{current:e}}function B(e){0>tn||(e.current=Ol[tn],Ol[tn]=null,tn--)}function A(e,t){tn++,Ol[tn]=e.current,e.current=t}var wt={},ae=kt(wt),he=kt(!1),It=wt;function vn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ye(e){return e=e.childContextTypes,e!=null}function no(){B(he),B(ae)}function Pu(e,t,n){if(ae.current!==wt)throw Error(S(168));A(ae,t),A(he,n)}function Ss(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,lf(e)||"Unknown",o));return H({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,It=ae.current,A(ae,e),A(he,he.current),!0}function Ru(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ss(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,B(he),B(ae),A(ae,e)):B(he),A(he,n)}var be=null,wo=!1,Zo=!1;function Fs(e){be===null?be=[e]:be.push(e)}function C0(e){wo=!0,Fs(e)}function zt(){if(!Zo&&be!==null){Zo=!0;var e=0,t=M;try{var n=be;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}be=null,wo=!1}catch(o){throw be!==null&&(be=be.slice(e+1)),Xa(pi,zt),o}finally{M=t,Zo=!1}}return null}var nn=[],rn=0,oo=null,lo=0,ke=[],ze=0,Ut=null,qe=1,et="";function Pt(e,t){nn[rn++]=lo,nn[rn++]=oo,oo=e,lo=t}function _s(e,t,n){ke[ze++]=qe,ke[ze++]=et,ke[ze++]=Ut,Ut=e;var r=qe;e=et;var o=32-Me(r)-1;r&=~(1<<o),n+=1;var l=32-Me(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,qe=1<<32-Me(t)+o|n<<o|r,et=l+e}else qe=1<<l|n<<o|r,et=e}function xi(e){e.return!==null&&(Pt(e,1),_s(e,1,0))}function Ci(e){for(;e===oo;)oo=nn[--rn],nn[rn]=null,lo=nn[--rn],nn[rn]=null;for(;e===Ut;)Ut=ke[--ze],ke[ze]=null,et=ke[--ze],ke[ze]=null,qe=ke[--ze],ke[ze]=null}var xe=null,_e=null,W=!1,je=null;function xs(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,_e=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:qe,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,_e=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(W){var t=_e;if(t){var n=t;if(!Nu(e,t)){if(jl(e))throw Error(S(418));t=gt(n.nextSibling);var r=xe;t&&Nu(e,t)?xs(r,n):(e.flags=e.flags&-4097|2,W=!1,xe=e)}}else{if(jl(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,xe=e}}}function Lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Pr(e){if(e!==xe)return!1;if(!W)return Lu(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=_e)){if(jl(e))throw Cs(),Error(S(418));for(;t;)xs(e,t),t=gt(t.nextSibling)}if(Lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=xe?gt(e.stateNode.nextSibling):null;return!0}function Cs(){for(var e=_e;e;)e=gt(e.nextSibling)}function hn(){_e=xe=null,W=!1}function wi(e){je===null?je=[e]:je.push(e)}var w0=it.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var u=o.refs;i===null?delete u[l]:u[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function ws(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function o(d,s){return d=xt(d,s),d.index=0,d.sibling=null,d}function l(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,s,f,y){return s===null||s.tag!==6?(s=ll(f,d.mode,y),s.return=d,s):(s=o(s,f),s.return=d,s)}function a(d,s,f,y){var _=f.type;return _===Kt?m(d,s,f.props.children,y,f.key):s!==null&&(s.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===st&&Du(_)===s.type)?(y=o(s,f.props),y.ref=Nn(d,s,f),y.return=d,y):(y=Hr(f.type,f.key,f.props,null,d.mode,y),y.ref=Nn(d,s,f),y.return=d,y)}function c(d,s,f,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=il(f,d.mode,y),s.return=d,s):(s=o(s,f.children||[]),s.return=d,s)}function m(d,s,f,y,_){return s===null||s.tag!==7?(s=Mt(f,d.mode,y,_),s.return=d,s):(s=o(s,f),s.return=d,s)}function p(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=ll(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Sr:return f=Hr(s.type,s.key,s.props,null,d.mode,f),f.ref=Nn(d,null,s),f.return=d,f;case Gt:return s=il(s,d.mode,f),s.return=d,s;case st:var y=s._init;return p(d,y(s._payload),f)}if(jn(s)||kn(s))return s=Mt(s,d.mode,f,null),s.return=d,s;Rr(d,s)}return null}function v(d,s,f,y){var _=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:u(d,s,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sr:return f.key===_?a(d,s,f,y):null;case Gt:return f.key===_?c(d,s,f,y):null;case st:return _=f._init,v(d,s,_(f._payload),y)}if(jn(f)||kn(f))return _!==null?null:m(d,s,f,y,null);Rr(d,f)}return null}function g(d,s,f,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,u(s,d,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sr:return d=d.get(y.key===null?f:y.key)||null,a(s,d,y,_);case Gt:return d=d.get(y.key===null?f:y.key)||null,c(s,d,y,_);case st:var x=y._init;return g(d,s,f,x(y._payload),_)}if(jn(y)||kn(y))return d=d.get(f)||null,m(s,d,y,_,null);Rr(s,y)}return null}function h(d,s,f,y){for(var _=null,x=null,E=s,k=s=0,j=null;E!==null&&k<f.length;k++){E.index>k?(j=E,E=null):j=E.sibling;var L=v(d,E,f[k],y);if(L===null){E===null&&(E=j);break}e&&E&&L.alternate===null&&t(d,E),s=l(L,s,k),x===null?_=L:x.sibling=L,x=L,E=j}if(k===f.length)return n(d,E),W&&Pt(d,k),_;if(E===null){for(;k<f.length;k++)E=p(d,f[k],y),E!==null&&(s=l(E,s,k),x===null?_=E:x.sibling=E,x=E);return W&&Pt(d,k),_}for(E=r(d,E);k<f.length;k++)j=g(E,d,k,f[k],y),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?k:j.key),s=l(j,s,k),x===null?_=j:x.sibling=j,x=j);return e&&E.forEach(function(pe){return t(d,pe)}),W&&Pt(d,k),_}function F(d,s,f,y){var _=kn(f);if(typeof _!="function")throw Error(S(150));if(f=_.call(f),f==null)throw Error(S(151));for(var x=_=null,E=s,k=s=0,j=null,L=f.next();E!==null&&!L.done;k++,L=f.next()){E.index>k?(j=E,E=null):j=E.sibling;var pe=v(d,E,L.value,y);if(pe===null){E===null&&(E=j);break}e&&E&&pe.alternate===null&&t(d,E),s=l(pe,s,k),x===null?_=pe:x.sibling=pe,x=pe,E=j}if(L.done)return n(d,E),W&&Pt(d,k),_;if(E===null){for(;!L.done;k++,L=f.next())L=p(d,L.value,y),L!==null&&(s=l(L,s,k),x===null?_=L:x.sibling=L,x=L);return W&&Pt(d,k),_}for(E=r(d,E);!L.done;k++,L=f.next())L=g(E,d,k,L.value,y),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?k:L.key),s=l(L,s,k),x===null?_=L:x.sibling=L,x=L);return e&&E.forEach(function(Ye){return t(d,Ye)}),W&&Pt(d,k),_}function P(d,s,f,y){if(typeof f=="object"&&f!==null&&f.type===Kt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Sr:e:{for(var _=f.key,x=s;x!==null;){if(x.key===_){if(_=f.type,_===Kt){if(x.tag===7){n(d,x.sibling),s=o(x,f.props.children),s.return=d,d=s;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===st&&Du(_)===x.type){n(d,x.sibling),s=o(x,f.props),s.ref=Nn(d,x,f),s.return=d,d=s;break e}n(d,x);break}else t(d,x);x=x.sibling}f.type===Kt?(s=Mt(f.props.children,d.mode,y,f.key),s.return=d,d=s):(y=Hr(f.type,f.key,f.props,null,d.mode,y),y.ref=Nn(d,s,f),y.return=d,d=y)}return i(d);case Gt:e:{for(x=f.key;s!==null;){if(s.key===x)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),s=o(s,f.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=il(f,d.mode,y),s.return=d,d=s}return i(d);case st:return x=f._init,P(d,s,x(f._payload),y)}if(jn(f))return h(d,s,f,y);if(kn(f))return F(d,s,f,y);Rr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),s=o(s,f),s.return=d,d=s):(n(d,s),s=ll(f,d.mode,y),s.return=d,d=s),i(d)):n(d,s)}return P}var yn=ws(!0),Es=ws(!1),io=kt(null),uo=null,on=null,Ei=null;function ki(){Ei=on=uo=null}function zi(e){var t=io.current;B(io),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){uo=e,Ei=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(uo===null)throw Error(S(308));on=e,uo.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Dt=null;function Ti(e){Dt===null?Dt=[e]:Dt.push(e)}function ks(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ti(t)):(n.next=o.next,o.next=n),t.interleaved=n,ot(e,r)}function ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function Pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ot(e,n)}return o=r.interleaved,o===null?(t.next=t,Ti(r)):(t.next=o.next,o.next=t),r.interleaved=t,ot(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mi(e,n)}}function Ou(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ao(e,t,n,r){var o=e.updateQueue;ct=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var a=u,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==i&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=a))}if(l!==null){var p=o.baseState;i=0,m=c=a=null,u=l;do{var v=u.lane,g=u.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var h=e,F=u;switch(v=t,g=n,F.tag){case 1:if(h=F.payload,typeof h=="function"){p=h.call(g,p,v);break e}p=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=F.payload,v=typeof h=="function"?h.call(g,p,v):h,v==null)break e;p=H({},p,v);break e;case 2:ct=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[u]:v.push(u))}else g={eventTime:g,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=g,a=p):m=m.next=g,i|=v;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;v=u,u=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(1);if(m===null&&(a=p),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Jt|=i,e.lanes=i,e.memoizedState=p}}function ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var mr={},He=kt(mr),or=kt(mr),lr=kt(mr);function Ot(e){if(e===mr)throw Error(S(174));return e}function Ri(e,t){switch(A(lr,t),A(or,e),A(He,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yl(t,e)}B(He),A(He,t)}function gn(){B(He),B(or),B(lr)}function Ts(e){Ot(lr.current);var t=Ot(He.current),n=yl(t,e.type);t!==n&&(A(or,e),A(He,n))}function Ni(e){or.current===e&&(B(He),B(or))}var $=kt(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=[];function Li(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var Br=it.ReactCurrentDispatcher,el=it.ReactCurrentBatchConfig,At=0,X=null,Z=null,ee=null,co=!1,Wn=!1,ir=0,E0=0;function le(){throw Error(S(321))}function Di(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Oi(e,t,n,r,o,l){if(At=l,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?P0:R0,e=n(r,o),Wn){l=0;do{if(Wn=!1,ir=0,25<=l)throw Error(S(301));l+=1,ee=Z=null,t.updateQueue=null,Br.current=N0,e=n(r,o)}while(Wn)}if(Br.current=fo,t=Z!==null&&Z.next!==null,At=0,ee=Z=X=null,co=!1,t)throw Error(S(300));return e}function ji(){var e=ir!==0;return ir=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?X.memoizedState=ee=e:ee=ee.next=e,ee}function Ne(){if(Z===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?X.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(S(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?X.memoizedState=ee=e:ee=ee.next=e}return ee}function ur(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Z,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var u=i=null,a=null,c=l;do{var m=c.lane;if((At&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=p,i=r):a=a.next=p,X.lanes|=m,Jt|=m}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=u,Ue(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,X.lanes|=l,Jt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ue(l,t.memoizedState)||(ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ps(){}function Rs(e,t){var n=X,r=Ne(),o=t(),l=!Ue(r.memoizedState,o);if(l&&(r.memoizedState=o,ve=!0),r=r.queue,Mi(Ds.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ar(9,Ls.bind(null,n,r,o,t),void 0,null),te===null)throw Error(S(349));At&30||Ns(n,t,o)}return o}function Ns(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ls(e,t,n,r){t.value=n,t.getSnapshot=r,Os(t)&&js(e)}function Ds(e,t,n){return n(function(){Os(t)&&js(e)})}function Os(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function js(e){var t=ot(e,1);t!==null&&Ie(t,e,1,-1)}function Mu(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=T0.bind(null,X,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ms(){return Ne().memoizedState}function Vr(e,t,n,r){var o=We();X.flags|=e,o.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function Eo(e,t,n,r){var o=Ne();r=r===void 0?null:r;var l=void 0;if(Z!==null){var i=Z.memoizedState;if(l=i.destroy,r!==null&&Di(r,i.deps)){o.memoizedState=ar(t,n,l,r);return}}X.flags|=e,o.memoizedState=ar(1|t,n,l,r)}function Iu(e,t){return Vr(8390656,8,e,t)}function Mi(e,t){return Eo(2048,8,e,t)}function Is(e,t){return Eo(4,2,e,t)}function Us(e,t){return Eo(4,4,e,t)}function As(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Js(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4,4,As.bind(null,t,e),n)}function Ii(){}function Bs(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vs(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ws(e,t,n){return At&21?(Ue(n,t)||(n=Qa(),X.lanes|=n,Jt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function k0(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{M=n,el.transition=r}}function $s(){return Ne().memoizedState}function z0(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xs(e))Hs(t,n);else if(n=ks(e,t,n,r),n!==null){var o=ce();Ie(n,e,r,o),Ys(n,t,r)}}function T0(e,t,n){var r=_t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xs(e))Hs(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,u=l(i,n);if(o.hasEagerState=!0,o.eagerState=u,Ue(u,i)){var a=t.interleaved;a===null?(o.next=o,Ti(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=ks(e,t,o,r),n!==null&&(o=ce(),Ie(n,e,r,o),Ys(n,t,r))}}function Xs(e){var t=e.alternate;return e===X||t!==null&&t===X}function Hs(e,t){Wn=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ys(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mi(e,n)}}var fo={readContext:Re,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},P0={readContext:Re,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,As.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=z0.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Mu,useDebugValue:Ii,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Mu(!1),t=e[0];return e=k0.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=We();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),te===null)throw Error(S(349));At&30||Ns(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Iu(Ds.bind(null,r,l,e),[e]),r.flags|=2048,ar(9,Ls.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if(W){var n=et,r=qe;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=E0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},R0={readContext:Re,useCallback:Bs,useContext:Re,useEffect:Mi,useImperativeHandle:Js,useInsertionEffect:Is,useLayoutEffect:Us,useMemo:Vs,useReducer:tl,useRef:Ms,useState:function(){return tl(ur)},useDebugValue:Ii,useDeferredValue:function(e){var t=Ne();return Ws(t,Z.memoizedState,e)},useTransition:function(){var e=tl(ur)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Ps,useSyncExternalStore:Rs,useId:$s,unstable_isNewReconciler:!1},N0={readContext:Re,useCallback:Bs,useContext:Re,useEffect:Mi,useImperativeHandle:Js,useInsertionEffect:Is,useLayoutEffect:Us,useMemo:Vs,useReducer:nl,useRef:Ms,useState:function(){return nl(ur)},useDebugValue:Ii,useDeferredValue:function(e){var t=Ne();return Z===null?t.memoizedState=e:Ws(t,Z.memoizedState,e)},useTransition:function(){var e=nl(ur)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Ps,useSyncExternalStore:Rs,useId:$s,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),o=_t(e),l=tt(r,o);l.payload=t,n!=null&&(l.callback=n),t=St(e,l,o),t!==null&&(Ie(t,e,o,r),Jr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),o=_t(e),l=tt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=St(e,l,o),t!==null&&(Ie(t,e,o,r),Jr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=_t(e),o=tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=St(e,o,r),t!==null&&(Ie(t,e,r,n),Jr(t,e,r))}};function Uu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(o,l):!0}function Qs(e,t,n){var r=!1,o=wt,l=t.contextType;return typeof l=="object"&&l!==null?l=Re(l):(o=ye(t)?It:ae.current,r=t.contextTypes,l=(r=r!=null)?vn(e,o):wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Au(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function Al(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Pi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Re(l):(l=ye(t)?It:ae.current,o.context=vn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ul(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ko.enqueueReplaceState(o,o.state,null),ao(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Sn(e,t){try{var n="",r=t;do n+=of(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var L0=typeof WeakMap=="function"?WeakMap:Map;function Gs(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mo||(mo=!0,Kl=r),Jl(e,t)},n}function Ks(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new L0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=H0.bind(null,e,t,n),t.then(e,e))}function Bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var D0=it.ReactCurrentOwner,ve=!1;function se(e,t,n,r){t.child=e===null?Es(t,null,n,r):yn(t,e.child,n,r)}function Wu(e,t,n,r,o){n=n.render;var l=t.ref;return dn(t,o),r=Oi(e,t,n,r,l,o),n=ji(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(W&&n&&xi(t),t.flags|=1,se(e,t,r,o),t.child)}function $u(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Xi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,bs(e,t,l,r,o)):(e=Hr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(i,r)&&e.ref===t.ref)return lt(e,t,o)}return t.flags|=1,e=xt(l,r),e.ref=t.ref,e.return=t,t.child=e}function bs(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(er(l,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,lt(e,t,o)}return Bl(e,t,n,r,o)}function Zs(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(un,Fe),Fe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(un,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,A(un,Fe),Fe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,A(un,Fe),Fe|=r;return se(e,t,o,n),t.child}function qs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bl(e,t,n,r,o){var l=ye(n)?It:ae.current;return l=vn(t,l),dn(t,o),n=Oi(e,t,n,r,l,o),r=ji(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(W&&r&&xi(t),t.flags|=1,se(e,t,n,o),t.child)}function Xu(e,t,n,r,o){if(ye(n)){var l=!0;ro(t)}else l=!1;if(dn(t,o),t.stateNode===null)Wr(e,t),Qs(t,n,r),Al(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Re(c):(c=ye(n)?It:ae.current,c=vn(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Au(t,i,r,c),ct=!1;var v=t.memoizedState;i.state=v,ao(t,r,i,o),a=t.memoizedState,u!==r||v!==a||he.current||ct?(typeof m=="function"&&(Ul(t,n,m,r),a=t.memoizedState),(u=ct||Uu(t,n,u,r,v,a,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,zs(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:De(t.type,u),i.props=c,p=t.pendingProps,v=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Re(a):(a=ye(n)?It:ae.current,a=vn(t,a));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==p||v!==a)&&Au(t,i,r,a),ct=!1,v=t.memoizedState,i.state=v,ao(t,r,i,o);var h=t.memoizedState;u!==p||v!==h||he.current||ct?(typeof g=="function"&&(Ul(t,n,g,r),h=t.memoizedState),(c=ct||Uu(t,n,c,r,v,h,a)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,h,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,h,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,l,o)}function Vl(e,t,n,r,o,l){qs(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ru(t,n,!1),lt(e,t,l);r=t.stateNode,D0.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=yn(t,e.child,null,l),t.child=yn(t,null,u,l)):se(e,t,u,l),t.memoizedState=r.state,o&&Ru(t,n,!0),t.child}function ec(e){var t=e.stateNode;t.pendingContext?Pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pu(e,t.context,!1),Ri(e,t.containerInfo)}function Hu(e,t,n,r,o){return hn(),wi(o),t.flags|=256,se(e,t,n,r),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function tc(e,t,n){var r=t.pendingProps,o=$.current,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),A($,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Po(i,r,0,null),e=Mt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=$l(n),t.memoizedState=Wl,e):Ui(t,i));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return O0(e,t,i,r,u,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,u=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=xt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?l=xt(u,l):(l=Mt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?$l(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Wl,r}return l=e.child,e=l.sibling,r=xt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ui(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&wi(r),yn(t,e.child,null,n),e=Ui(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function O0(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(S(422))),Nr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Po({mode:"visible",children:r.children},o,0,null),l=Mt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&yn(t,e.child,null,i),t.child.memoizedState=$l(i),t.memoizedState=Wl,l);if(!(t.mode&1))return Nr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(S(419)),r=rl(l,r,void 0),Nr(e,t,i,r)}if(u=(i&e.childLanes)!==0,ve||u){if(r=te,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ot(e,o),Ie(r,e,o,-1))}return $i(),r=rl(Error(S(421))),Nr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Y0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,_e=gt(o.nextSibling),xe=t,W=!0,je=null,e!==null&&(ke[ze++]=qe,ke[ze++]=et,ke[ze++]=Ut,qe=e.id,et=e.overflow,Ut=t),t=Ui(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function ol(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function nc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(se(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A($,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ol(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&so(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ol(t,!0,n,null,l);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function j0(e,t,n){switch(t.tag){case 3:ec(t),hn();break;case 5:Ts(t);break;case 1:ye(t.type)&&ro(t);break;case 4:Ri(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;A(io,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A($,$.current&1),t.flags|=128,null):n&t.child.childLanes?tc(e,t,n):(A($,$.current&1),e=lt(e,t,n),e!==null?e.sibling:null);A($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),A($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Zs(e,t,n)}return lt(e,t,n)}var rc,Xl,oc,lc;rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xl=function(){};oc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ot(He.current);var l=null;switch(n){case"input":o=pl(e,o),r=pl(e,r),l=[];break;case"select":o=H({},o,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":o=hl(e,o),r=hl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}gl(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(u=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&J("scroll",e),l||u===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};lc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function M0(e,t,n){var r=t.pendingProps;switch(Ci(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ye(t.type)&&no(),ie(t),null;case 3:return r=t.stateNode,gn(),B(he),B(ae),Li(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(ql(je),je=null))),Xl(e,t),ie(t),null;case 5:Ni(t);var o=Ot(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ie(t),null}if(e=Ot(He.current),Pr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[$e]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<In.length;o++)J(In[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":nu(r,l),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},J("invalid",r);break;case"textarea":ou(r,l),J("invalid",r)}gl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Tr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Tr(r.textContent,u,e),o=["children",""+u]):Yn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&J("scroll",r)}switch(n){case"input":Fr(r),ru(r,l,!0);break;case"textarea":Fr(r),lu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=to)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Da(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[$e]=t,e[rr]=r,rc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Sl(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<In.length;o++)J(In[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":nu(e,r),o=pl(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=H({},r,{value:void 0}),J("invalid",e);break;case"textarea":ou(e,r),o=hl(e,r),J("invalid",e);break;default:o=r}gl(n,o),u=o;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?Ma(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Oa(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Qn(e,a):typeof a=="number"&&Qn(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?a!=null&&l==="onScroll"&&J("scroll",e):a!=null&&ai(e,l,a,i))}switch(n){case"input":Fr(e),ru(e,r,!1);break;case"textarea":Fr(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?an(e,!!r.multiple,l,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)lc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ot(lr.current),Ot(He.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(l=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return ie(t),null;case 13:if(B($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&_e!==null&&t.mode&1&&!(t.flags&128))Cs(),hn(),t.flags|=98560,l=!1;else if(l=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[$e]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),l=!1}else je!==null&&(ql(je),je=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?q===0&&(q=3):$i())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return gn(),Xl(e,t),e===null&&tr(t.stateNode.containerInfo),ie(t),null;case 10:return zi(t.type._context),ie(t),null;case 17:return ye(t.type)&&no(),ie(t),null;case 19:if(B($),l=t.memoizedState,l===null)return ie(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Ln(l,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=so(e),i!==null){for(t.flags|=128,Ln(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A($,$.current&1|2),t.child}e=e.sibling}l.tail!==null&&G()>Fn&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304)}else{if(!r)if(e=so(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return ie(t),null}else 2*G()-l.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=G(),t.sibling=null,n=$.current,A($,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Wi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function I0(e,t){switch(Ci(t),t.tag){case 1:return ye(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),B(he),B(ae),Li(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ni(t),null;case 13:if(B($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B($),null;case 4:return gn(),null;case 10:return zi(t.type._context),null;case 22:case 23:return Wi(),null;case 24:return null;default:return null}}var Lr=!1,ue=!1,U0=typeof WeakSet=="function"?WeakSet:Set,w=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Hl(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Qu=!1;function A0(e,t){if(Pl=Zr,e=cs(),_i(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,u=-1,a=-1,c=0,m=0,p=e,v=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(u=i+o),p!==l||r!==0&&p.nodeType!==3||(a=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(g=p.firstChild)!==null;)v=p,p=g;for(;;){if(p===e)break t;if(v===n&&++c===o&&(u=i),v===l&&++m===r&&(a=i),(g=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=g}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},Zr=!1,w=t;w!==null;)if(t=w,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,w=e;else for(;w!==null;){t=w;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var F=h.memoizedProps,P=h.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?F:De(t.type,F),P);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,w=e;break}w=t.return}return h=Qu,Qu=!1,h}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Hl(t,n,l)}o=o.next}while(o!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ic(e){var t=e.alternate;t!==null&&(e.alternate=null,ic(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[rr],delete t[Dl],delete t[_0],delete t[x0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e){return e.tag===5||e.tag===3||e.tag===4}function Gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var ne=null,Oe=!1;function at(e,t,n){for(n=n.child;n!==null;)ac(e,t,n),n=n.sibling}function ac(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:ue||ln(n,t);case 6:var r=ne,o=Oe;ne=null,at(e,t,n),ne=r,Oe=o,ne!==null&&(Oe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Oe?(e=ne,n=n.stateNode,e.nodeType===8?bo(e.parentNode,n):e.nodeType===1&&bo(e,n),Zn(e)):bo(ne,n.stateNode));break;case 4:r=ne,o=Oe,ne=n.stateNode.containerInfo,Oe=!0,at(e,t,n),ne=r,Oe=o;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Hl(n,t,i),o=o.next}while(o!==r)}at(e,t,n);break;case 1:if(!ue&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Q(n,t,u)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,at(e,t,n),ue=r):at(e,t,n);break;default:at(e,t,n)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new U0),t.forEach(function(r){var o=Q0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:ne=u.stateNode,Oe=!1;break e;case 3:ne=u.stateNode.containerInfo,Oe=!0;break e;case 4:ne=u.stateNode.containerInfo,Oe=!0;break e}u=u.return}if(ne===null)throw Error(S(160));ac(l,i,o),ne=null,Oe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){Q(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sc(t,e),t=t.sibling}function sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Ve(e),r&4){try{$n(3,e,e.return),zo(3,e)}catch(F){Q(e,e.return,F)}try{$n(5,e,e.return)}catch(F){Q(e,e.return,F)}}break;case 1:Le(t,e),Ve(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Le(t,e),Ve(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var o=e.stateNode;try{Qn(o,"")}catch(F){Q(e,e.return,F)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Na(o,l),Sl(u,i);var c=Sl(u,l);for(i=0;i<a.length;i+=2){var m=a[i],p=a[i+1];m==="style"?Ma(o,p):m==="dangerouslySetInnerHTML"?Oa(o,p):m==="children"?Qn(o,p):ai(o,m,p,c)}switch(u){case"input":ml(o,l);break;case"textarea":La(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?an(o,!!l.multiple,g,!1):v!==!!l.multiple&&(l.defaultValue!=null?an(o,!!l.multiple,l.defaultValue,!0):an(o,!!l.multiple,l.multiple?[]:"",!1))}o[rr]=l}catch(F){Q(e,e.return,F)}}break;case 6:if(Le(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(F){Q(e,e.return,F)}}break;case 3:if(Le(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(F){Q(e,e.return,F)}break;case 4:Le(t,e),Ve(e);break;case 13:Le(t,e),Ve(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Bi=G())),r&4&&Ku(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(c=ue)||m,Le(t,e),ue=c):Le(t,e),Ve(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(w=e,m=e.child;m!==null;){for(p=w=m;w!==null;){switch(v=w,g=v.child,v.tag){case 0:case 11:case 14:case 15:$n(4,v,v.return);break;case 1:ln(v,v.return);var h=v.stateNode;if(typeof h.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(F){Q(r,n,F)}}break;case 5:ln(v,v.return);break;case 22:if(v.memoizedState!==null){Zu(p);continue}}g!==null?(g.return=v,w=g):Zu(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=p.stateNode,a=p.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=ja("display",i))}catch(F){Q(e,e.return,F)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(F){Q(e,e.return,F)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Le(t,e),Ve(e),r&4&&Ku(e);break;case 21:break;default:Le(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qn(o,""),r.flags&=-33);var l=Gu(e);Gl(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Gu(e);Ql(e,u,i);break;default:throw Error(S(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function J0(e,t,n){w=e,cc(e)}function cc(e,t,n){for(var r=(e.mode&1)!==0;w!==null;){var o=w,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Lr;if(!i){var u=o.alternate,a=u!==null&&u.memoizedState!==null||ue;u=Lr;var c=ue;if(Lr=i,(ue=a)&&!c)for(w=o;w!==null;)i=w,a=i.child,i.tag===22&&i.memoizedState!==null?qu(o):a!==null?(a.return=i,w=a):qu(o);for(;l!==null;)w=l,cc(l),l=l.sibling;w=o,Lr=u,ue=c}bu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,w=l):bu(e)}}function bu(e){for(;w!==null;){var t=w;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ju(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ju(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Zn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ue||t.flags&512&&Yl(t)}catch(v){Q(t,t.return,v)}}if(t===e){w=null;break}if(n=t.sibling,n!==null){n.return=t.return,w=n;break}w=t.return}}function Zu(e){for(;w!==null;){var t=w;if(t===e){w=null;break}var n=t.sibling;if(n!==null){n.return=t.return,w=n;break}w=t.return}}function qu(e){for(;w!==null;){var t=w;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(a){Q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){Q(t,o,a)}}var l=t.return;try{Yl(t)}catch(a){Q(t,l,a)}break;case 5:var i=t.return;try{Yl(t)}catch(a){Q(t,i,a)}}}catch(a){Q(t,t.return,a)}if(t===e){w=null;break}var u=t.sibling;if(u!==null){u.return=t.return,w=u;break}w=t.return}}var B0=Math.ceil,po=it.ReactCurrentDispatcher,Ai=it.ReactCurrentOwner,Pe=it.ReactCurrentBatchConfig,O=0,te=null,b=null,re=0,Fe=0,un=kt(0),q=0,sr=null,Jt=0,To=0,Ji=0,Xn=null,me=null,Bi=0,Fn=1/0,Ke=null,mo=!1,Kl=null,Ft=null,Dr=!1,mt=null,vo=0,Hn=0,bl=null,$r=-1,Xr=0;function ce(){return O&6?G():$r!==-1?$r:$r=G()}function _t(e){return e.mode&1?O&2&&re!==0?re&-re:w0.transition!==null?(Xr===0&&(Xr=Qa()),Xr):(e=M,e!==0||(e=window.event,e=e===void 0?16:ts(e.type)),e):1}function Ie(e,t,n,r){if(50<Hn)throw Hn=0,bl=null,Error(S(185));fr(e,n,r),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(To|=n),q===4&&dt(e,re)),ge(e,r),n===1&&O===0&&!(t.mode&1)&&(Fn=G()+500,wo&&zt()))}function ge(e,t){var n=e.callbackNode;wf(e,t);var r=br(e,e===te?re:0);if(r===0)n!==null&&au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&au(n),t===1)e.tag===0?C0(ea.bind(null,e)):Fs(ea.bind(null,e)),S0(function(){!(O&6)&&zt()}),n=null;else{switch(Ga(r)){case 1:n=pi;break;case 4:n=Ha;break;case 16:n=Kr;break;case 536870912:n=Ya;break;default:n=Kr}n=gc(n,fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fc(e,t){if($r=-1,Xr=0,O&6)throw Error(S(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=br(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ho(e,r);else{t=r;var o=O;O|=2;var l=pc();(te!==e||re!==t)&&(Ke=null,Fn=G()+500,jt(e,t));do try{$0();break}catch(u){dc(e,u)}while(1);ki(),po.current=l,O=o,b!==null?t=0:(te=null,re=0,t=q)}if(t!==0){if(t===2&&(o=wl(e),o!==0&&(r=o,t=Zl(e,o))),t===1)throw n=sr,jt(e,0),dt(e,r),ge(e,G()),n;if(t===6)dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!V0(o)&&(t=ho(e,r),t===2&&(l=wl(e),l!==0&&(r=l,t=Zl(e,l))),t===1))throw n=sr,jt(e,0),dt(e,r),ge(e,G()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Rt(e,me,Ke);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=Bi+500-G(),10<t)){if(br(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ll(Rt.bind(null,e,me,Ke),t);break}Rt(e,me,Ke);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Me(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*B0(r/1960))-r,10<r){e.timeoutHandle=Ll(Rt.bind(null,e,me,Ke),r);break}Rt(e,me,Ke);break;case 5:Rt(e,me,Ke);break;default:throw Error(S(329))}}}return ge(e,G()),e.callbackNode===n?fc.bind(null,e):null}function Zl(e,t){var n=Xn;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=ho(e,t),e!==2&&(t=me,me=n,t!==null&&ql(t)),e}function ql(e){me===null?me=e:me.push.apply(me,e)}function V0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ue(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~Ji,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function ea(e){if(O&6)throw Error(S(327));pn();var t=br(e,0);if(!(t&1))return ge(e,G()),null;var n=ho(e,t);if(e.tag!==0&&n===2){var r=wl(e);r!==0&&(t=r,n=Zl(e,r))}if(n===1)throw n=sr,jt(e,0),dt(e,t),ge(e,G()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,me,Ke),ge(e,G()),null}function Vi(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Fn=G()+500,wo&&zt())}}function Bt(e){mt!==null&&mt.tag===0&&!(O&6)&&pn();var t=O;O|=1;var n=Pe.transition,r=M;try{if(Pe.transition=null,M=1,e)return e()}finally{M=r,Pe.transition=n,O=t,!(O&6)&&zt()}}function Wi(){Fe=un.current,B(un)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,g0(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(Ci(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:gn(),B(he),B(ae),Li();break;case 5:Ni(r);break;case 4:gn();break;case 13:B($);break;case 19:B($);break;case 10:zi(r.type._context);break;case 22:case 23:Wi()}n=n.return}if(te=e,b=e=xt(e.current,null),re=Fe=t,q=0,sr=null,Ji=To=Jt=0,me=Xn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Dt=null}return e}function dc(e,t){do{var n=b;try{if(ki(),Br.current=fo,co){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}co=!1}if(At=0,ee=Z=X=null,Wn=!1,ir=0,Ai.current=null,n===null||n.return===null){q=1,sr=t,b=null;break}e:{var l=e,i=n.return,u=n,a=t;if(t=re,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=u,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=Bu(i);if(g!==null){g.flags&=-257,Vu(g,i,u,l,t),g.mode&1&&Ju(l,c,t),t=g,a=c;var h=t.updateQueue;if(h===null){var F=new Set;F.add(a),t.updateQueue=F}else h.add(a);break e}else{if(!(t&1)){Ju(l,c,t),$i();break e}a=Error(S(426))}}else if(W&&u.mode&1){var P=Bu(i);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Vu(P,i,u,l,t),wi(Sn(a,u));break e}}l=a=Sn(a,u),q!==4&&(q=2),Xn===null?Xn=[l]:Xn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Gs(l,a,t);Ou(l,d);break e;case 1:u=a;var s=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ft===null||!Ft.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=Ks(l,u,t);Ou(l,y);break e}}l=l.return}while(l!==null)}vc(n)}catch(_){t=_,b===n&&n!==null&&(b=n=n.return);continue}break}while(1)}function pc(){var e=po.current;return po.current=fo,e===null?fo:e}function $i(){(q===0||q===3||q===2)&&(q=4),te===null||!(Jt&268435455)&&!(To&268435455)||dt(te,re)}function ho(e,t){var n=O;O|=2;var r=pc();(te!==e||re!==t)&&(Ke=null,jt(e,t));do try{W0();break}catch(o){dc(e,o)}while(1);if(ki(),O=n,po.current=r,b!==null)throw Error(S(261));return te=null,re=0,q}function W0(){for(;b!==null;)mc(b)}function $0(){for(;b!==null&&!vf();)mc(b)}function mc(e){var t=yc(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?vc(e):b=t,Ai.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=I0(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,b=null;return}}else if(n=M0(n,t,Fe),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);q===0&&(q=5)}function Rt(e,t,n){var r=M,o=Pe.transition;try{Pe.transition=null,M=1,X0(e,t,n,r)}finally{Pe.transition=o,M=r}return null}function X0(e,t,n,r){do pn();while(mt!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Ef(e,l),e===te&&(b=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dr||(Dr=!0,gc(Kr,function(){return pn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var i=M;M=1;var u=O;O|=4,Ai.current=null,A0(e,n),sc(n,e),f0(Rl),Zr=!!Pl,Rl=Pl=null,e.current=n,J0(n),hf(),O=u,M=i,Pe.transition=l}else e.current=n;if(Dr&&(Dr=!1,mt=e,vo=o),l=e.pendingLanes,l===0&&(Ft=null),Sf(n.stateNode),ge(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(mo)throw mo=!1,e=Kl,Kl=null,e;return vo&1&&e.tag!==0&&pn(),l=e.pendingLanes,l&1?e===bl?Hn++:(Hn=0,bl=e):Hn=0,zt(),null}function pn(){if(mt!==null){var e=Ga(vo),t=Pe.transition,n=M;try{if(Pe.transition=null,M=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,vo=0,O&6)throw Error(S(331));var o=O;for(O|=4,w=e.current;w!==null;){var l=w,i=l.child;if(w.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(w=c;w!==null;){var m=w;switch(m.tag){case 0:case 11:case 15:$n(8,m,l)}var p=m.child;if(p!==null)p.return=m,w=p;else for(;w!==null;){m=w;var v=m.sibling,g=m.return;if(ic(m),m===c){w=null;break}if(v!==null){v.return=g,w=v;break}w=g}}}var h=l.alternate;if(h!==null){var F=h.child;if(F!==null){h.child=null;do{var P=F.sibling;F.sibling=null,F=P}while(F!==null)}}w=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,w=i;else e:for(;w!==null;){if(l=w,l.flags&2048)switch(l.tag){case 0:case 11:case 15:$n(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,w=d;break e}w=l.return}}var s=e.current;for(w=s;w!==null;){i=w;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,w=f;else e:for(i=s;w!==null;){if(u=w,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:zo(9,u)}}catch(_){Q(u,u.return,_)}if(u===i){w=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,w=y;break e}w=u.return}}if(O=o,zt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{M=n,Pe.transition=t}}return!1}function ta(e,t,n){t=Sn(n,t),t=Gs(e,t,1),e=St(e,t,1),t=ce(),e!==null&&(fr(e,1,t),ge(e,t))}function Q(e,t,n){if(e.tag===3)ta(e,e,n);else for(;t!==null;){if(t.tag===3){ta(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Sn(n,e),e=Ks(t,e,1),t=St(t,e,1),e=ce(),t!==null&&(fr(t,1,e),ge(t,e));break}}t=t.return}}function H0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>G()-Bi?jt(e,0):Ji|=n),ge(e,t)}function hc(e,t){t===0&&(e.mode&1?(t=Cr,Cr<<=1,!(Cr&130023424)&&(Cr=4194304)):t=1);var n=ce();e=ot(e,t),e!==null&&(fr(e,t,n),ge(e,n))}function Y0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hc(e,n)}function Q0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),hc(e,n)}var yc;yc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,j0(e,t,n);ve=!!(e.flags&131072)}else ve=!1,W&&t.flags&1048576&&_s(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var o=vn(t,ae.current);dn(t,n),o=Oi(null,t,r,e,o,n);var l=ji();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(l=!0,ro(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Pi(t),o.updater=ko,t.stateNode=o,o._reactInternals=t,Al(t,r,e,n),t=Vl(null,t,r,!0,l,n)):(t.tag=0,W&&l&&xi(t),se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=K0(r),e=De(r,e),o){case 0:t=Bl(null,t,r,e,n);break e;case 1:t=Xu(null,t,r,e,n);break e;case 11:t=Wu(null,t,r,e,n);break e;case 14:t=$u(null,t,r,De(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:De(r,o),Bl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:De(r,o),Xu(e,t,r,o,n);case 3:e:{if(ec(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,zs(e,t),ao(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Sn(Error(S(423)),t),t=Hu(e,t,r,n,o);break e}else if(r!==o){o=Sn(Error(S(424)),t),t=Hu(e,t,r,n,o);break e}else for(_e=gt(t.stateNode.containerInfo.firstChild),xe=t,W=!0,je=null,n=Es(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===o){t=lt(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Ts(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Nl(r,o)?i=null:l!==null&&Nl(r,l)&&(t.flags|=32),qs(e,t),se(e,t,i,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return tc(e,t,n);case 4:return Ri(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:De(r,o),Wu(e,t,r,o,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,A(io,r._currentValue),r._currentValue=i,l!==null)if(Ue(l.value,i)){if(l.children===o.children&&!he.current){t=lt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){i=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=tt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Il(l.return,n,t),u.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Il(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dn(t,n),o=Re(o),r=r(o),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,o=De(r,t.pendingProps),o=De(r.type,o),$u(e,t,r,o,n);case 15:return bs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:De(r,o),Wr(e,t),t.tag=1,ye(r)?(e=!0,ro(t)):e=!1,dn(t,n),Qs(t,r,o),Al(t,r,o,n),Vl(null,t,r,!0,e,n);case 19:return nc(e,t,n);case 22:return Zs(e,t,n)}throw Error(S(156,t.tag))};function gc(e,t){return Xa(e,t)}function G0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new G0(e,t,n,r)}function Xi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function K0(e){if(typeof e=="function")return Xi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ci)return 11;if(e===fi)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Xi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Kt:return Mt(n.children,o,l,t);case si:i=8,o|=8;break;case sl:return e=Te(12,n,t,o|2),e.elementType=sl,e.lanes=l,e;case cl:return e=Te(13,n,t,o),e.elementType=cl,e.lanes=l,e;case fl:return e=Te(19,n,t,o),e.elementType=fl,e.lanes=l,e;case Ta:return Po(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ka:i=10;break e;case za:i=9;break e;case ci:i=11;break e;case fi:i=14;break e;case st:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Te(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Mt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Ta,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hi(e,t,n,r,o,l,i,u,a){return e=new b0(e,t,n,u,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Te(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pi(l),e}function Z0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sc(e){if(!e)return wt;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ye(n))return Ss(e,n,t)}return t}function Fc(e,t,n,r,o,l,i,u,a){return e=Hi(n,r,!0,e,o,l,i,u,a),e.context=Sc(null),n=e.current,r=ce(),o=_t(n),l=tt(r,o),l.callback=t??null,St(n,l,o),e.current.lanes=o,fr(e,o,r),ge(e,r),e}function Ro(e,t,n,r){var o=t.current,l=ce(),i=_t(o);return n=Sc(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(o,t,i),e!==null&&(Ie(e,o,i,l),Jr(e,o,i)),i}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function na(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yi(e,t){na(e,t),(e=e.alternate)&&na(e,t)}function q0(){return null}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qi(e){this._internalRoot=e}No.prototype.render=Qi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ro(e,t,null,null)};No.prototype.unmount=Qi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){Ro(null,e,null,null)}),t[rt]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=Za();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&es(e)}};function Gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ra(){}function ed(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=yo(i);l.call(c)}}var i=Fc(t,r,e,0,null,!1,!1,"",ra);return e._reactRootContainer=i,e[rt]=i.current,tr(e.nodeType===8?e.parentNode:e),Bt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=yo(a);u.call(c)}}var a=Hi(e,0,!1,null,null,!1,!1,"",ra);return e._reactRootContainer=a,e[rt]=a.current,tr(e.nodeType===8?e.parentNode:e),Bt(function(){Ro(t,a,n,r)}),a}function Do(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var u=o;o=function(){var a=yo(i);u.call(a)}}Ro(t,i,e,o)}else i=ed(n,t,e,o,r);return yo(i)}Ka=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(mi(t,n|1),ge(t,G()),!(O&6)&&(Fn=G()+500,zt()))}break;case 13:Bt(function(){var r=ot(e,1);if(r!==null){var o=ce();Ie(r,e,1,o)}}),Yi(e,1)}};vi=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var n=ce();Ie(t,e,134217728,n)}Yi(e,134217728)}};ba=function(e){if(e.tag===13){var t=_t(e),n=ot(e,t);if(n!==null){var r=ce();Ie(n,e,t,r)}Yi(e,t)}};Za=function(){return M};qa=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};_l=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Co(r);if(!o)throw Error(S(90));Ra(r),ml(r,o)}}}break;case"textarea":La(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Aa=Vi;Ja=Bt;var td={usingClientEntryPoint:!1,Events:[pr,en,Co,Ia,Ua,Vi]},Dn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nd={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wa(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{So=Or.inject(nd),Xe=Or}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=td;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gi(t))throw Error(S(200));return Z0(e,t,null,n)};we.createRoot=function(e,t){if(!Gi(e))throw Error(S(299));var n=!1,r="",o=_c;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hi(e,1,!1,null,null,n,!1,r,o),e[rt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Qi(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Wa(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Bt(e)};we.hydrate=function(e,t,n){if(!Lo(t))throw Error(S(200));return Do(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Gi(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=_c;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Fc(t,null,e,1,n??null,o,!1,l,i),e[rt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new No(t)};we.render=function(e,t,n){if(!Lo(t))throw Error(S(200));return Do(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(S(40));return e._reactRootContainer?(Bt(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};we.unstable_batchedUpdates=Vi;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Do(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function xc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xc)}catch(e){console.error(e)}}xc(),xa.exports=we;var rd=xa.exports,oa=rd;ul.createRoot=oa.createRoot,ul.hydrateRoot=oa.hydrateRoot;const od="_panel_7zyns_1",ld="_title_7zyns_17",id="_setting_7zyns_26",ud="_toggle_7zyns_36",ad="_toggleSlider_7zyns_49",sd="_label_7zyns_81",cd="_select_7zyns_86",fd="_slider_7zyns_108",U={panel:od,title:ld,setting:id,toggle:ud,toggleSlider:ad,label:sd,select:cd,slider:fd};function dd({visible:e,shaderEnabled:t,onToggleShader:n,jointsEnabled:r,onToggleJoints:o,trailEnabled:l,onToggleTrail:i,effect:u,onEffectChange:a,speedMultiplier:c,onSpeedChange:m,presetNames:p,selectedPreset:v,onPresetChange:g,shaderNames:h,resolutionScale:F,onResolutionScaleChange:P,trailWidth:d,onTrailWidthChange:s}){return e?N.jsxs("div",{className:U.panel,children:[N.jsx("h2",{className:U.title,children:"Settings"}),N.jsxs("div",{className:U.setting,children:[N.jsx("span",{className:U.label,children:"Joint preset"}),N.jsx("select",{className:U.select,value:v,onChange:f=>g(parseInt(f.target.value)),children:p.map((f,y)=>N.jsx("option",{value:y,children:f},y))})]}),N.jsxs("div",{className:U.setting,children:[N.jsx("span",{className:U.label,children:"Shader effect"}),N.jsx("select",{className:U.select,value:u,onChange:f=>a(f.target.value),children:h.map(f=>N.jsx("option",{value:f,children:f},f))})]}),N.jsxs("div",{className:U.setting,children:[N.jsxs("label",{className:U.toggle,children:[N.jsx("input",{type:"checkbox",checked:t,onChange:f=>n(f.target.checked)}),N.jsx("span",{className:U.toggleSlider})]}),N.jsx("span",{className:U.label,children:"Shader Effect"})]}),N.jsxs("div",{className:U.setting,children:[N.jsxs("label",{className:U.toggle,children:[N.jsx("input",{type:"checkbox",checked:r,onChange:f=>o(f.target.checked)}),N.jsx("span",{className:U.toggleSlider})]}),N.jsx("span",{className:U.label,children:"Joints"})]}),N.jsxs("div",{className:U.setting,children:[N.jsxs("label",{className:U.toggle,children:[N.jsx("input",{type:"checkbox",checked:l,onChange:f=>i(f.target.checked)}),N.jsx("span",{className:U.toggleSlider})]}),N.jsx("span",{className:U.label,children:"Trail"})]}),N.jsxs("div",{className:U.setting,children:[N.jsxs("span",{className:U.label,children:["Speed: ",c.toFixed(1)]}),N.jsx("input",{type:"range",min:"0",max:"10",step:"0.1",value:c,onChange:f=>m(parseFloat(f.target.value))})]}),N.jsxs("div",{className:U.setting,children:[N.jsxs("span",{className:U.label,children:["Trail Width: ",d]}),N.jsx("input",{type:"range",min:"1",max:"50",step:"1",value:d,onChange:f=>s(parseFloat(f.target.value))})]}),N.jsxs("div",{className:U.setting,children:[N.jsxs("span",{className:U.label,children:["Resolution: ",F.toFixed(2),"x"]}),N.jsx("input",{type:"range",min:"0.25",max:"4",step:"0.25",value:F,onChange:f=>P(parseFloat(f.target.value))})]})]}):null}const pd=[{Name:"Mr Pi",Joints:[{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF0000"},{Size:100,Speed:31415,Enabled:!0,JointColor:"#FF00FF00"}]},{Name:"Simple-dimple",Joints:[{Size:10,Speed:1110,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e3,Enabled:!0,JointColor:"#FF00FFFF"},{Size:90,Speed:3330,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Porky",Joints:[{Size:100,Speed:3e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:90,Speed:2e3,Enabled:!0,JointColor:"#FF800080"}]},{Name:"Flower",Joints:[{Size:100,Speed:3200,Enabled:!0,JointColor:"#FFFF1493"},{Size:90,Speed:2e3,Enabled:!0,JointColor:"#FF00FF7F"}]},{Name:"Flower longer",Joints:[{Size:100,Speed:3200,Enabled:!0,JointColor:"#FFFF1493"},{Size:90,Speed:1100,Enabled:!0,JointColor:"#FF00FF7F"}]},{Name:"Triada",Joints:[{Size:5,Speed:1e4,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:10,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:3e4,Enabled:!0,JointColor:"#FF0000FF"}]},{Name:"Grannies' Pie",Joints:[{Size:22,Speed:1e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:150,Speed:1,Enabled:!0,JointColor:"#FFFF4500"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FFFF1493"},{Size:40,Speed:1e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Diabotical",Joints:[{Size:22,Speed:1e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:1,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:60,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"}]},{Name:"Pie revert",Joints:[{Size:22,Speed:1e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:1,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:60,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"}]},{Name:"Medal",Joints:[{Size:60,Speed:-1e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:300,Speed:3,Enabled:!0,JointColor:"#FFC0C0C0"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FFB87333"},{Size:200,Speed:-2e4,Enabled:!0,JointColor:"#FFFFD700"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFC0C0C0"}]},{Name:"Krishna",Joints:[{Size:60,Speed:-8e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:5e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:-5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:-2e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e3,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Love story",Joints:[{Size:70,Speed:-8e3,Enabled:!0,JointColor:"#FFFF1493"},{Size:330,Speed:5e3,Enabled:!0,JointColor:"#FFFF69B4"},{Size:100,Speed:2e3,Enabled:!0,JointColor:"#FFFFB6C1"},{Size:120,Speed:-3e3,Enabled:!0,JointColor:"#FFFF1493"},{Size:90,Speed:1e3,Enabled:!0,JointColor:"#FFFF69B4"}]},{Name:"Mickey Mouse",Joints:[{Size:20,Speed:-1e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:3,Enabled:!0,JointColor:"#FFFF0000"},{Size:120,Speed:5e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FFFF0000"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF0000"}]},{Name:"Cross",Joints:[{Size:20,Speed:5e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-5e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:120,Speed:5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Hush",Joints:[{Size:20,Speed:8e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-8e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:120,Speed:-4e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:4e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:4e3,Enabled:!0,JointColor:"#FFFF00FF"},{Size:100,Speed:-4e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Shuriken",Joints:[{Size:20,Speed:7e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-5e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:120,Speed:5e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FF00FF00"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FF0000FF"}]},{Name:"Inception",Joints:[{Size:70,Speed:2e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Vaze",Joints:[{Size:70,Speed:2e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FFFF00FF"},{Size:250,Speed:8e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Triumph",Joints:[{Size:70,Speed:2e3,Enabled:!1,JointColor:"#FFFFD700"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FFB87333"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:70,Speed:9e3,Enabled:!0,JointColor:"#FFC0C0C0"},{Size:250,Speed:-8e3,Enabled:!0,JointColor:"#FFB87333"}]},{Name:"Zombie",Joints:[{Size:70,Speed:3500,Enabled:!1,JointColor:"#FF00FF00"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:5e3,Enabled:!0,JointColor:"#FF008F00"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FF00FF00"}]},{Name:"Pizza",Joints:[{Size:70,Speed:3500,Enabled:!0,JointColor:"#FFFF4500"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FFFF4500"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FFFF4500"}]},{Name:"Prism",Joints:[{Size:20,Speed:5e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-4e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:120,Speed:8e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Infinity",Joints:[{Size:70,Speed:2e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:200,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:400,Speed:-3e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:700,Speed:4e3,Enabled:!0,JointColor:"#FFFF00FF"},{Size:250,Speed:-3e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Soothing",Joints:[{Size:185,Speed:11e3,Enabled:!1,JointColor:"#FF000000"},{Size:110,Speed:-16e3,Enabled:!0,JointColor:"#FF00C7FF"},{Size:474,Speed:2e3,Enabled:!0,JointColor:"#FFFC9200"},{Size:20,Speed:0,Enabled:!0,JointColor:"#FFFF0000"}]},{Name:"Uber-Flower",Joints:[{Size:220,Speed:-5e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:260,Speed:-9e3,Enabled:!1,JointColor:"#FFFFFFFF"},{Size:325,Speed:18e3,Enabled:!0,JointColor:"#FF00FFF9"},{Size:405,Speed:-9e3,Enabled:!0,JointColor:"#FFFF0000"}]},{Name:"Poo",Joints:[{Size:130,Speed:-2e3,Enabled:!1,JointColor:"#FF8F5C00"},{Size:185,Speed:4e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:50,Speed:19e3,Enabled:!0,JointColor:"#FFBA7800"}]},{Name:"Happy new year",Joints:[{Size:355,Speed:-14e3,Enabled:!1,JointColor:"#FFC02F26"},{Size:35,Speed:4e3,Enabled:!1,JointColor:"#FF99F3A2"},{Size:415,Speed:11e3,Enabled:!1,JointColor:"#FFCE153F"},{Size:405,Speed:11e3,Enabled:!0,JointColor:"#FF1DCA74"},{Size:15,Speed:13e3,Enabled:!0,JointColor:"#FF49EEA0"}]},{Name:"Atomic duet",Joints:[{Size:110,Speed:-8e3,Enabled:!1,JointColor:"#FF3E5A35"},{Size:135,Speed:18e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:250,Speed:-1e4,Enabled:!0,JointColor:"#FFFFFF00"}]},{Name:"Cloud connected",Joints:[{Size:55,Speed:-17e3,Enabled:!1,JointColor:"#FF550914"},{Size:35,Speed:3e3,Enabled:!1,JointColor:"#FF49BB0E"},{Size:330,Speed:13e3,Enabled:!0,JointColor:"#FF00FFF9"}]},{Name:"Nirvana baby",Joints:[{Size:375,Speed:-2e3,Enabled:!1,JointColor:"#FF1DC129"},{Size:280,Speed:4e3,Enabled:!1,JointColor:"#FF2F8260"},{Size:360,Speed:6e3,Enabled:!0,JointColor:"#FFFFFFFF"},{Size:180,Speed:-19e3,Enabled:!0,JointColor:"#FFFFAAAA"}]},{Name:"Pearl",Joints:[{Size:215,Speed:17e3,Enabled:!0,JointColor:"#FFFFFFFF"},{Size:295,Speed:-19e3,Enabled:!1,JointColor:"#FF1C8A97"},{Size:380,Speed:-19e3,Enabled:!1,JointColor:"#FF573A4C"},{Size:260,Speed:3e3,Enabled:!0,JointColor:"#FF1EEFC0"}]},{Name:"Elephant",Joints:[{Size:40,Speed:5e3,Enabled:!0,JointColor:"#FF019439"},{Size:355,Speed:-4e3,Enabled:!1,JointColor:"#FF8C1561"},{Size:115,Speed:2e3,Enabled:!0,JointColor:"#FF195CB3"},{Size:475,Speed:-5e3,Enabled:!0,JointColor:"#FF4F60A6"}]},{Name:"Trajectory",Joints:[{Size:90,Speed:-8e3,Enabled:!0,JointColor:"#FF3AD1C9"},{Size:5,Speed:-9e3,Enabled:!1,JointColor:"#FF7A0705"},{Size:20,Speed:17e3,Enabled:!1,JointColor:"#FF1C288A"},{Size:370,Speed:6e3,Enabled:!0,JointColor:"#FFDA21DA"}]},{Name:"Airplane",Joints:[{Size:25,Speed:1e4,Enabled:!1,JointColor:"#FF008000"},{Size:25,Speed:-6e3,Enabled:!1,JointColor:"#FFFFFFFF"},{Size:25,Speed:-3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:500,Speed:-3e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:500,Speed:3e3,Enabled:!0,JointColor:"#FFFF0000"}]}];class Ze{constructor(t=1,n=0,r=0,o=1,l=0,i=0){this.m11=t,this.m12=n,this.m21=r,this.m22=o,this.m31=l,this.m32=i}static identity(){return new Ze}static createRotation(t){const n=Math.cos(t),r=Math.sin(t);return new Ze(n,r,-r,n,0,0)}static createTranslation(t,n){return new Ze(1,0,0,1,t,n)}static createScale(t,n){return new Ze(t,0,0,n,0,0)}multiply(t){return new Ze(this.m11*t.m11+this.m12*t.m21,this.m11*t.m12+this.m12*t.m22,this.m21*t.m11+this.m22*t.m21,this.m21*t.m12+this.m22*t.m22,this.m31*t.m11+this.m32*t.m21+t.m31,this.m31*t.m12+this.m32*t.m22+t.m32)}getTranslation(){return{x:this.m31,y:this.m32}}}class md{constructor(){this.jointsEnabled=!0,this.shaderEnabled=!0,this.presets=pd,this.joints=[],this.currentPresetIndex=-1}loadPreset(t){if(t<0||t>=this.presets.length)return;const n=this.presets[t],r=n.Joints.reduce((o,l)=>o+l.Size,0);this.joints=n.Joints.map(o=>({lengthRatio:o.Size/r,rotation:0,speed:o.Speed,enabled:o.Enabled,color:o.JointColor})),this.currentPresetIndex=t}getPresetNames(){return this.presets.map(t=>t.Name)}updateJoints(t,n=1){this.joints.forEach(r=>{r.rotation+=r.speed*(t/1e5)*n,r.rotation=r.rotation%360})}getTotalRotation(){return this.joints.reduce((t,n)=>t+n.rotation,0)%360}calculateJoints(t,n){const r=this.joints.reduce((p,v)=>p+v.lengthRatio*100,0),o=Math.min(t,n)/2,l=window.devicePixelRatio||1,i=t/2*l,u=n/2*l;let a=Ze.createTranslation(i,u),c={x:i,y:u};const m=[];return this.joints.forEach(p=>{const v=p.rotation*Math.PI/180,g=o*(100*p.lengthRatio/r),h=Ze.createRotation(v);a=Ze.createTranslation(0,g).multiply(h).multiply(a);const P=a.getTranslation();m.push({startX:c.x,startY:c.y,endX:P.x,endY:P.y,length:g,angleRad:v,enabled:p.enabled,color:p.color}),c=P}),m}}const vd=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263, 0.416, 0.557);

    return a + b * cos(6.28318 * (c * t + d));
  }
  
  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 4.0; i++) {
      uv = fract(uv * 1.5) - 0.5;

      float d = length(uv) * exp(-length(uv0));

      vec3 col = palette(length(uv0) + i * 0.4 + u_time * 0.4);

      d = sin(d * 8.0 + u_time) / 8.0;
      d = abs(d);

      d = pow(0.01 / d, 1.2);

      finalColor += col * d;
    }
        
    gl_FragColor = vec4(finalColor, 1.0);
  }
`,hd=Object.freeze(Object.defineProperty({__proto__:null,artFragmentShader:vd},Symbol.toStringTag,{value:"Module"})),yd=`
  const int ballscount = 200;
  
  float getRadius(int i) {
      return i==0 ? 0.1 : (0.14-fract(float(i-1)/10.0)/10.0)/1.5;
  }
  
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform int u_frame;
  uniform vec2 u_emitter;
  uniform sampler2D iChannel0;
  
  // Pseudo-random
  vec2 rand2(int seed) {
      vec2 result;
      result.x = fract(sin(float(seed) * 12.9898) * 43758.5453);
      result.y = fract(sin(float(seed) * 78.233 + result.x) * 43758.5453);
      return result;
  }
  
  void main() {
    float ballId = gl_FragCoord.x;
    
    if (u_frame <= 1) {
      vec2 m = vec2(u_resolution.x, u_resolution.y)/min(u_resolution.x, u_resolution.y);
      gl_FragColor = vec4((rand2(int(ballId))-0.5)*vec2(m)*1.0, 0.0, 0.0);
      
    } else {
      vec4 ball = texelFetch(iChannel0, ivec2(int(ballId), 0), 0);
      vec4 ball0 = ball;
      
      if (int(ballId) == 0) {
		vec2 u_emitter2 = vec2(u_emitter.x, u_resolution.y - u_emitter.y);
        vec2 mv = (u_emitter2 * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        gl_FragColor = vec4(mv.xy, mv.xy-ball0.xy);
        return;
      }
      
      ball.zw *= 1.0;
      ball.xy += ball.zw;
      
      for (int i = 0; i <= ballscount; i++) {
        if (i != int(ballId)) {
          vec4 ball1 = texelFetch(iChannel0, ivec2(i, 0), 0);
          
          vec2 delta = ball1.xy - ball0.xy;
          float dist = length(delta);
          float minDist = getRadius(int(ballId)) + getRadius(i);
          
          if (dist < minDist && dist > 0.0) {
            vec2 n = delta / dist;
            float overlap = minDist - dist;
            float k = (i==0 ? 1.0 : 0.5);
            vec2 separation = n * overlap * k;
            ball.xy -= separation;
            ball.zw -= separation * 0.5;
          }
        }
      }
      
      vec2 border = u_resolution.xy/min(u_resolution.x, u_resolution.y) - getRadius(int(ballId));
      if (ball.x < -border.x) {
        ball.x = -border.x;
        ball.z = -ball.z * 0.5;
      } else if (ball.x > border.x) {
        ball.x = border.x;
        ball.z = -ball.z * 0.5;
      }
      if (ball.y < -border.y) {
        ball.y = -border.y;
        ball.w = -ball.w * 0.5;
      } else if (ball.y > border.y) {
        ball.y = border.y;
        ball.w = -ball.w * 0.5;
      }
      
      gl_FragColor = ball;
    }
  }
`,gd=`
  const int ballscount = 200;
  
  float getRadius(int i) {
      return i==0 ? 0.1 : (0.14-fract(float(i-1)/10.0)/10.0)/1.5;
  }
  
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform int u_frame;
  uniform vec4 u_mouse;
  uniform sampler2D iChannel0;
  uniform sampler2D iChannel1;
  
  void main() {
    float ballId = gl_FragCoord.x;
    
    if (u_frame <= 1 || int(ballId) == 0) {
      gl_FragColor = vec4(0.0);
      
    } else {
      vec4 ball0 = texelFetch(iChannel0, ivec2(int(ballId), 0), 0);
      vec4 ballR = texelFetch(iChannel1, ivec2(int(ballId), 0), 0);
      
      ballR.y *= 0.95;
      ballR.x += ballR.y;
      
      for (int i = 0; i <= ballscount; i++) {
        if (i != int(ballId)) {
          vec4 ball1 = texelFetch(iChannel0, ivec2(i, 0), 0);
          
          vec4 delta = ball1 - ball0;
          float dist = length(delta.xy);
          float minDist = getRadius(int(ballId)) + getRadius(i);
          
          if (dist < minDist && dist > 0.0) {
            float a1 = atan(delta.y, delta.x);
            float a2 = atan(delta.w, delta.z);
            ballR.y += sin(a1 - a2) * length(delta.wz);
          }
        }
      }
      
      vec2 border = u_resolution.xy/min(u_resolution.x, u_resolution.y) - getRadius(int(ballId));
      if (abs(ball0.x) > border.x || abs(ball0.x) > border.x) ballR.y /= 2.0;
      
      gl_FragColor = ballR;
    }
  }
`,Sd=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform int u_frame;
  uniform sampler2D iChannel0;
  
  float sdPentagram(in vec2 p, in float r ) {
      const float k1x = 0.809016994;
      const float k2x = 0.309016994;
      const float k1y = 0.587785252;
      const float k2y = 0.951056516;
      const float k1z = 0.726542528;
      const vec2  v1  = vec2( k1x,-k1y);
      const vec2  v2  = vec2(-k1x,-k1y);
      const vec2  v3  = vec2( k2x,-k1y);
      
      p.x = abs(p.x);
      p -= 2.0*max(dot(v1,p),0.0)*v1;
      p -= 2.0*max(dot(v2,p),0.0)*v2;
      p.x = abs(p.x);
      p.y -= r;
      return length(p-v3*clamp(dot(p,v3),0.0,k1z*r))
             * sign(p.y*v3.x-p.x*v3.y);
  }
  
  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec4 prev = texture(iChannel0, fragCoord/u_resolution.xy);
    
    if (u_frame <= 1 || int(prev.w) != int(min(u_resolution.x, u_resolution.y))) {
      vec2 uv = (fragCoord - u_resolution.xy/2.0)/u_resolution.xy * 2.05;
      float alias = min(u_resolution.x, u_resolution.y)/16.0;
      vec4 col = vec4(1.0);
      col *= clamp(-(length(uv)-1.01)*alias, 0.0, 1.0);
      col *= clamp(clamp(-(length(uv)-0.8)*alias, 0.0, 0.65) + vec4(0.25, 1.0, 0.75, 1.0), 0.0, 1.0);
      col *= vec4(clamp(sdPentagram(uv, 0.6)*alias, 0.0, 1.0));
      col.w = min(u_resolution.x, u_resolution.y);
      gl_FragColor = col;
    } else {
      gl_FragColor = prev;
    }
  }
`,Fd=`
  const int ballscount = 200;
  
  float getRadius(int i) {
      return i==0 ? 0.1 : (0.14-fract(float(i-1)/10.0)/10.0)/1.5;
  }
  
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform int u_frame;
  uniform sampler2D iChannel0;
  uniform sampler2D iChannel1;
  uniform sampler2D iChannel2;
  uniform sampler2D iChannel3;
  
  #define rot(a) mat2(cos(a), -sin(a), sin(a), cos(a))
  
  vec3 rotateColor(vec3 color, float angle) {
      float cosA = cos(angle);
      float sinA = sin(angle);
      float a = 0.333 + 0.667 * cosA;
      float b = 0.333 - 0.333 * cosA;
      float c = 0.577 * sinA;
      return mat3(a,b+c,b-c,b-c,a,b+c,b+c,b-c,a) * color;
  }
  
  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    
    float alias = min(u_resolution.x, u_resolution.y)/2.0;
    vec2 uv = (fragCoord * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    // Black background
    vec4 result = vec4(0.2, 0.4, 0.5, 1.0);
    
    for (int i = 0; i <= ballscount; i++) {
      vec2 coord = texelFetch(iChannel0, ivec2(i, 0), 0).xy;
      vec2 angle = texelFetch(iChannel1, ivec2(i, 0), 0).xy;
      
      vec2 uvc = (uv - coord) * rot(angle.x);
      vec3 puck = texture(iChannel2, uvc/getRadius(i)/2.0 + 0.5).xyz;
      puck = (i == 0) ? (1.0 - puck) : rotateColor(puck, float(i));
      
      float sd = length(uv - coord) - getRadius(i);
      result.xyz = mix(result.xyz, puck, clamp(result.xyz - sd * alias, 0.0, 1.0));
    }
    
    gl_FragColor = result;
  }
`,_d={buffera:{iChannel0:"self"},bufferb:{iChannel0:"buffera",iChannel1:"self"},bufferc:{iChannel0:"self"},image:{iChannel0:"buffera",iChannel1:"bufferb",iChannel2:"bufferc"}},xd=Object.freeze(Object.defineProperty({__proto__:null,bufferAFragmentShader:yd,bufferBFragmentShader:gd,bufferCFragmentShader:Sd,channels:_d,imageFragmentShader:Fd},Symbol.toStringTag,{value:"Module"})),Cd=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  mat2 rotz(float a) {
    return mat2(cos(a), -sin(a), sin(a), cos(a));
  }

  vec3 palette(float i){
    const vec3 a = vec3(0.50, 0.38, 0.26);
    const vec3 b = vec3(0.50, 0.35, 0.25);
    const vec3 c = vec3(1.00);
    const vec3 d = vec3(0.00, 0.12, 0.25);
    return a + b * cos(6.2831853 * (c * i + d));
  }

  vec3 palette2(float i){
    const vec3 a = vec3(0.742702, 0.908877, 0.959831);
    const vec3 b = vec3(-0.711000, 0.275000, -0.052000);
    const vec3 c = vec3(1.000000, 1.855000, 1.000000);
    const vec3 d = vec3(0.180000, 0.091000, 0.380000);
    return a + b * cos(6.2831853 * (c * i + d));
  }

  void main() {
    vec2 u = gl_FragCoord.xy;
    vec2 uv = (u - 0.5 * u_resolution.xy + 0.5) / u_resolution.y;
    
    float t = mod(u_time, 6.283185);
    
    vec3 p;
    vec3 d = normalize(vec3(2.0 * u - u_resolution.xy, u_resolution.y));
    
    p.z = t;
    
    vec4 col = vec4(0.0);
    float i;
    
    for (i = 0.0; i < 20.0; i++) {
      p.xy *= rotz(-p.z * 0.01 - t * 0.05);
      
      float s = 0.6;
      s = max(s, 4.0 * (-length(p.xy) + 10.0));
      
      s += abs(
        p.y * 0.004 +
        sin(t - p.x * 0.5) * 0.9 +
        1.0
      );
      
      p += d * s;
      
      col += 1.0 / (s * 0.2);
    }
    
    col *= vec4(palette(length(p) / (abs(sin(u_time * 0.02) * 50.0) + 6.0)), 1.0);
    
    float shimmer = 20.0 * smoothstep(
      0.001,
      abs(sin(u_time * 5.0)),
      0.7 - length(sin(uv * 200.0) / 1.5) - abs(uv.y) + 0.2
    );
    col -= shimmer;
    
    col /= 0.5e2;
    
    float l = length(uv);
    col *= 1.2 - l;
    
    col = mix(col, vec4(palette(l - 0.23).rgb, 1.0), 1.0 - smoothstep(0.01, 0.95, l));
    
    col = col / (col + vec4(1.0));
    
    gl_FragColor = clamp(col, 0.0, 1.0);
  }
`,wd=Object.freeze(Object.defineProperty({__proto__:null,discoSunFragmentShader:Cd},Symbol.toStringTag,{value:"Module"})),Ed=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  #define S(a, b, t) smoothstep(a, b, t)
  #define NUM_LAYERS 4.0
  
  float N21(vec2 p) {
    vec3 a = fract(vec3(p.xyx) * vec3(213.897, 653.453, 253.098));
    a += dot(a, a.yzx + 79.76);
    return fract((a.x + a.y) * a.z);
  }
  
  vec2 GetPos(vec2 id, vec2 offs, float t) {
    float n = N21(id + offs);
    float n1 = fract(n * 10.0);
    float n2 = fract(n * 100.0);
    float a = t + n;
    return offs + vec2(sin(a * n1), cos(a * n2)) * 0.4;
  }
  
  float df_line(vec2 a, vec2 b, vec2 p) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
  }
  
  float line(vec2 a, vec2 b, vec2 uv) {
    float r1 = 0.04;
    float r2 = 0.01;
    float d = df_line(a, b, uv);
    float d2 = length(a - b);
    float fade = S(1.5, 0.5, d2);
    fade += S(0.05, 0.02, abs(d2 - 0.75));
    return S(r1, r2, d) * fade;
  }
  
  float NetLayer(vec2 st, float n, float t) {
    vec2 id = floor(st) + n;
    st = fract(st) - 0.5;
   
    vec2 p0 = GetPos(id, vec2(-1.0, -1.0), t);
    vec2 p1 = GetPos(id, vec2(0.0, -1.0), t);
    vec2 p2 = GetPos(id, vec2(1.0, -1.0), t);
    vec2 p3 = GetPos(id, vec2(-1.0, 0.0), t);
    vec2 p4 = GetPos(id, vec2(0.0, 0.0), t);
    vec2 p5 = GetPos(id, vec2(1.0, 0.0), t);
    vec2 p6 = GetPos(id, vec2(-1.0, 1.0), t);
    vec2 p7 = GetPos(id, vec2(0.0, 1.0), t);
    vec2 p8 = GetPos(id, vec2(1.0, 1.0), t);
    
    float m = 0.0;
    float sparkle = 0.0;
    
    vec2 center = p4;
    
    for (int i = 0; i < 9; i++) {
      vec2 pt = p0;
      if (i == 1) pt = p1;
      else if (i == 2) pt = p2;
      else if (i == 3) pt = p3;
      else if (i == 4) pt = p4;
      else if (i == 5) pt = p5;
      else if (i == 6) pt = p6;
      else if (i == 7) pt = p7;
      else if (i == 8) pt = p8;
      
      m += line(center, pt, st);
      float d = length(st - pt);
      float s = 0.005 / (d * d);
      s *= S(1.0, 0.7, d);
      float pulse = sin((fract(pt.x) + fract(pt.y) + t) * 5.0) * 0.4 + 0.6;
      pulse = pow(pulse, 20.0);
      s *= pulse;
      sparkle += s;
    }
    
    m += line(p1, p3, st);
    m += line(p1, p5, st);
    m += line(p7, p5, st);
    m += line(p7, p3, st);
    
    float sPhase = (sin(t + n) + sin(t * 0.1)) * 0.25 + 0.5;
    sPhase += pow(sin(t * 0.1) * 0.5 + 0.5, 50.0) * 5.0;
    m += sparkle * sPhase;
    
    return m;
  }
  
  void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.y;
    
    float t = u_time * 0.1;
    
    float s = sin(t);
    float c = cos(t);
    mat2 rot = mat2(c, -s, s, c);
    vec2 st = uv * rot;
    
    float m = 0.0;
    for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYERS) {
      float z = fract(t + i);
      float size = mix(15.0, 1.0, z);
      float fade = S(0.0, 0.6, z) * S(1.0, 0.8, z);
      m += fade * NetLayer(st * size, i, t);
    }
    
    float glow = 0.2 * sin(t * 2.0) + 0.3;
    
    vec3 baseCol = vec3(s, cos(t * 0.4), -sin(t * 0.24)) * 0.4 + 0.6;
    vec3 col = baseCol * m;
    col += baseCol * glow;
    
    col *= 1.0 - dot(uv, uv);
    
    gl_FragColor = vec4(col, 1.0);
  }
`,kd=Object.freeze(Object.defineProperty({__proto__:null,edgesFragmentShader:Ed},Symbol.toStringTag,{value:"Module"})),zd=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_emitterX;
  uniform float u_emitterY;
  
  float rand(vec2 n) {
    return fract(sin(cos(dot(n, vec2(12.9898, 12.1414)))) * 83758.5453);
  }

  float noise(vec2 n) {
    const vec2 d = vec2(0.0, 1.0);
    vec2 b = floor(n);
    vec2 f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
    return mix(
      mix(rand(b), rand(b + d.yx), f.x),
      mix(rand(b + d.xy), rand(b + d.yy), f.x),
      f.y
    );
  }

  float fbm(vec2 n) {
    float total = 0.0;
    float amplitude = 1.0;
    for (int i = 0; i < 5; i++) {
      total += noise(n) * amplitude;
      n += n * 1.7;
      amplitude *= 0.47;
    }
    return total;
  }

  void main() {
    const vec3 c1 = vec3(0.5, 0.0, 0.1);
    const vec3 c2 = vec3(0.9, 0.1, 0.0);
    const vec3 c3 = vec3(0.2, 0.1, 0.7);
    const vec3 c4 = vec3(1.0, 0.9, 0.1);
    const vec3 c5 = vec3(0.1);
    const vec3 c6 = vec3(0.9);

    vec2 speed = vec2(0.1, 0.9);
    float shift = 1.327 + sin(u_time * 2.0) / 2.4;
    float alpha = 1.0;
    
    float dist = 3.5 - sin(u_time * 0.4) / 1.89;
    
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 p = gl_FragCoord.xy * dist / vec2(u_resolution.x, u_resolution.x);
    p += sin(p.yx * 4.0 + vec2(.2, -.3) * u_time) * 0.04;
    p += sin(p.yx * 8.0 + vec2(.6, +.1) * u_time) * 0.01;
    
    p.x -= u_time / 1.1;
    float q = fbm(p - u_time * 0.3 + 1.0 * sin(u_time + 0.5) / 2.0);
    float qb = fbm(p - u_time * 0.4 + 0.1 * cos(u_time) / 2.0);
    float q2 = fbm(p - u_time * 0.44 - 5.0 * cos(u_time) / 2.0) - 6.0;
    float q3 = fbm(p - u_time * 0.9 - 10.0 * cos(u_time) / 15.0) - 4.0;
    float q4 = fbm(p - u_time * 1.4 - 20.0 * sin(u_time) / 14.0) + 2.0;
    q = (q + qb - .4 * q2 - 2.0 * q3 + .6 * q4) / 3.8;
    vec2 r = vec2(
      fbm(p + q / 2.0 + u_time * speed.x - p.x - p.y),
      fbm(p + q - u_time * speed.y)
    );
    vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);
    vec3 color = vec3(1.0 / (pow(c + 1.61, vec3(4.0))) * cos(shift * gl_FragCoord.y / u_resolution.y));
    
    color = vec3(1.0, .2, .05) / (pow((r.y + r.y) * max(.0, p.y) + 0.1, 4.0));
    color += vec3(.7, .5, .2) * mix(vec3(.9, .4, .3), vec3(.7, .5, .2), uv.y);
    color = color / (1.0 + max(vec3(0.0), color));
    
    gl_FragColor = vec4(color, alpha);
  }
`,Td=Object.freeze(Object.defineProperty({__proto__:null,fire2FragmentShader:zd},Symbol.toStringTag,{value:"Module"})),Pd=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  vec3 firePalette(float i){
    float T = 1400. + 1300.*i;
    vec3 L = vec3(7.4, 5.6, 4.4);
    L = pow(L, vec3(5.0)) * (exp(1.43876719683e5/(T*L)) - 1.0);
    return 1.0 - exp(-5e8/L);
  }

  vec3 hash33(vec3 p){ 
    float n = sin(dot(p, vec3(7.0, 157.0, 113.0)));    
    return fract(vec3(2097152.0, 262144.0, 32768.0)*n); 
  }

  float voronoi(vec3 p){
    vec3 b, r, g = floor(p);
    p = fract(p);
    
    float d = 1.; 
    for(int j = -1; j <= 1; j++) {
      for(int i = -1; i <= 1; i++) {
        b = vec3(float(i), float(j), -1.0);
        r = b - p + hash33(g+b);
        d = min(d, dot(r,r));
        
        b.z = 0.0;
        r = b - p + hash33(g+b);
        d = min(d, dot(r,r));
        
        b.z = 1.0;
        r = b - p + hash33(g+b);
        d = min(d, dot(r,r));
      }
    }
    return d;
  }

  float noiseLayers(in vec3 p) {
    vec3 t = vec3(0.0, 0.0, p.z + u_time * 1.5);
    const int iter = 5;
    float tot = 0.0, sum = 0.0, amp = 1.0;
    for (int i = 0; i < iter; i++) {
      tot += voronoi(p + t) * amp;
      p *= 2.0;
      t *= 1.5;
      sum += amp;
      amp *= 0.5;
    }
    return tot / sum;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution.xy * 0.5) / u_resolution.y;
    
    uv += vec2(sin(u_time * 0.5) * 0.25, cos(u_time * 0.5) * 0.125);
    
    vec3 rd = normalize(vec3(uv.x, uv.y, 3.1415926535898 / 8.0));
    
    float cs = cos(u_time * 0.25), si = sin(u_time * 0.25);
    rd.xy = rd.xy * mat2(cs, -si, si, cs); 
    
    float c = noiseLayers(rd * 2.0);
    c = max(c + dot(hash33(rd) * 2.0 - 1.0, vec3(0.015)), 0.0);
    
    c *= sqrt(c) * 1.5;
    vec3 col = firePalette(c);
    col = mix(col, col.zyx * 0.15 + c * 0.85, min(pow(dot(rd.xy, rd.xy) * 1.2, 1.5), 1.0));
    col = pow(col, vec3(1.25));
    
    gl_FragColor = vec4(sqrt(clamp(col, 0.0, 1.0)), 1.0);
  }
`,Rd=Object.freeze(Object.defineProperty({__proto__:null,firePlasmaFragmentShader:Pd},Symbol.toStringTag,{value:"Module"})),Nd=`
#define dt 0.15
#define USE_VORTICITY_CONFINEMENT
#define VORTICITY_AMOUNT 0.11
//#define MOUSE_ONLY

float mag2(vec2 p){return dot(p,p);}
vec2 point1(float t) {
    t *= 0.62;
    return vec2(0.12,0.5 + sin(t)*0.2);
}
vec2 point2(float t) {
    t *= 0.62;
    return vec2(0.88,0.5 + cos(t + 1.5708)*0.2);
}

vec4 solveFluid(sampler2D smp, vec2 uv, vec2 w, float time, vec3 mouse, vec3 lastMouse)
{
    const float K = 0.2;
    const float v = 0.55;
    
    vec4 data = textureLod(smp, uv, 0.0);
    vec4 tr = textureLod(smp, uv + vec2(w.x , 0), 0.0);
    vec4 tl = textureLod(smp, uv - vec2(w.x , 0), 0.0);
    vec4 tu = textureLod(smp, uv + vec2(0 , w.y), 0.0);
    vec4 td = textureLod(smp, uv - vec2(0 , w.y), 0.0);
    
    vec3 dx = (tr.xyz - tl.xyz)*0.5;
    vec3 dy = (tu.xyz - td.xyz)*0.5;
    vec2 densDif = vec2(dx.z ,dy.z);
    
    data.z -= dt*dot(vec3(densDif, dx.x + dy.y) ,data.xyz);
    vec2 laplacian = tu.xy + td.xy + tr.xy + tl.xy - 4.0*data.xy;
    vec2 viscForce = vec2(v)*laplacian;
    data.xyw = textureLod(smp, uv - dt*data.xy*w, 0.).xyw;
    
    vec2 newForce = vec2(0);
    #ifndef MOUSE_ONLY
    #if 1
    newForce.xy += 0.75*vec2(.0003, 0.00015)/(mag2(uv-point1(time))+0.0001);
    newForce.xy -= 0.75*vec2(.0003, 0.00015)/(mag2(uv-point2(time))+0.0001);
    #else
    newForce.xy += 0.9*vec2(.0003, 0.00015)/(mag2(uv-point1(time))+0.0002);
    newForce.xy -= 0.9*vec2(.0003, 0.00015)/(mag2(uv-point2(time))+0.0002);
    #endif
    #endif
    
    if (mouse.z > 1. && lastMouse.z > 1.)
    {
        vec2 vv = clamp(vec2(mouse.xy*w - lastMouse.xy*w)*400., -6., 6.);
        newForce.xy += .001/(mag2(uv - mouse.xy*w)+0.001)*vv;
    }
    
    data.xy += dt*(viscForce.xy - K/dt*densDif + newForce);
    data.xy = max(vec2(0), abs(data.xy)-1e-4)*sign(data.xy);
    
    #ifdef USE_VORTICITY_CONFINEMENT
    data.w = (tr.y - tl.y - tu.x + td.x);
    vec2 vort = vec2(abs(tu.w) - abs(td.w), abs(tl.w) - abs(tr.w));
    vort *= VORTICITY_AMOUNT/length(vort + 1e-9)*data.w;
    data.xy += vort;
    #endif
    
    data.y *= smoothstep(.5,.48,abs(uv.y-0.5));
    
    data = clamp(data, vec4(vec2(-10), 0.5 , -10.), vec4(vec2(10), 3.0 , 10.));
    
    return data;
}
`,Ld=`
precision highp float;
uniform sampler2D iChannel0;
uniform vec2 u_resolution;
uniform float u_time;
uniform int u_frame;
uniform vec4 u_mouse;

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec2 w = 1.0/u_resolution.xy;
    
    vec4 lastMouse = texelFetch(iChannel0, ivec2(0,0), 0);
    vec4 data = solveFluid(iChannel0, uv, w, u_time, u_mouse.xyz, lastMouse.xyz);
    
    if (u_frame < 20)
    {
        data = vec4(0.5,0,0,0);
    }
    
    if (gl_FragCoord.y < 1.)
        data = u_mouse;
    
    gl_FragColor = data;
}
`,Dd=`
precision highp float;
uniform sampler2D iChannel0;
uniform vec2 u_resolution;
uniform float u_time;
uniform int u_frame;
uniform vec4 u_mouse;

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec2 w = 1.0/u_resolution.xy;
    
    vec4 lastMouse = texelFetch(iChannel0, ivec2(0,0), 0);
    vec4 data = solveFluid(iChannel0, uv, w, u_time, u_mouse.xyz, lastMouse.xyz);
    
    if (u_frame < 20)
    {
        data = vec4(0.5,0,0,0);
    }
    
    if (gl_FragCoord.y < 1.)
        data = u_mouse;
    
    gl_FragColor = data;
}
`,Od=`
precision highp float;
uniform sampler2D iChannel0;
uniform vec2 u_resolution;
uniform float u_time;
uniform int u_frame;
uniform vec4 u_mouse;

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec2 w = 1.0/u_resolution.xy;
    
    vec4 lastMouse = texelFetch(iChannel0, ivec2(0,0), 0);
    vec4 data = solveFluid(iChannel0, uv, w, u_time, u_mouse.xyz, lastMouse.xyz);
    
    if (u_frame < 20)
    {
        data = vec4(0.5,0,0,0);
    }
    
    if (gl_FragCoord.y < 1.)
        data = u_mouse;
    
    gl_FragColor = data;
}
`,jd=`
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform vec2 u_resolution;
uniform float u_time;
uniform int u_frame;
uniform vec4 u_mouse;

vec3 getPalette(float x, vec3 c1, vec3 c2, vec3 p1, vec3 p2)
{
    float x2 = fract(x/2.0);
    x = fract(x);   
    mat3 m = mat3(c1, p1, c2);
    mat3 m2 = mat3(c2, p2, c1);
    float omx = 1.0-x;
    vec3 pws = vec3(omx*omx, 2.0*omx*x, x*x);
    return clamp(mix(m*pws, m2*pws, step(x2,0.5)),0.,1.);
}

vec4 pal(float x)
{
    vec3 p = getPalette(-x, vec3(0.2, 0.5, .7), vec3(.9, 0.4, 0.1), vec3(1., 1.2, .5), vec3(1., -0.4, -.0));
    return vec4(p, 1.);
}

vec4 pal2(float x)
{
    vec3 p = getPalette(-x, vec3(0.4, 0.3, .5), vec3(.9, 0.75, 0.4), vec3(.1, .8, 1.3), vec3(1.25, -0.1, .1));
    return vec4(p, 1.);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mo = u_mouse.xy / u_resolution.xy;
    vec2 w = 1.0/u_resolution.xy;
    
    vec2 velo = textureLod(iChannel0, uv, 0.).xy;
    vec4 col = textureLod(iChannel1, uv - dt*velo*w*3., 0.);
    
    if (gl_FragCoord.y < 1. && gl_FragCoord.x < 1.)
        col = vec4(0);
    
    vec4 lastMouse = texelFetch(iChannel1, ivec2(0,0), 0).xyzw;
    
    if (u_mouse.z > 1. && lastMouse.z > 1.)
    {
        float str = smoothstep(-.5,1.,length(mo - lastMouse.xy/u_resolution.xy));   
        col += str*0.0009/(pow(length(uv - mo),1.7)+0.002)*pal2(-u_time*0.7);
    }
    
    col += .0025/(0.0005+pow(length(uv - point1(u_time)),1.75))*dt*0.12*pal(u_time*0.05 - .0);
    col += .0025/(0.0005+pow(length(uv - point2(u_time)),1.75))*dt*0.12*pal2(u_time*0.05 + 0.675);
    
    if (u_frame < 20)
    {
        col = vec4(0.);
    }
    
    col = clamp(col, 0.,5.);
    col = max(col - (0.0001 + col*0.004)*0.5, 0.);
    
    if (gl_FragCoord.y < 1. && gl_FragCoord.x < 1.)
        col = u_mouse;

    gl_FragColor = col;
}
`,Md=`
uniform sampler2D iChannel0;
uniform vec2 u_resolution;

void main() {
    vec4 col = textureLod(iChannel0, gl_FragCoord.xy/u_resolution.xy, 0.);
    if (gl_FragCoord.y < 1. || gl_FragCoord.y >= (u_resolution.y-1.))
        col = vec4(0);
    gl_FragColor = col;
}
`,Id={buffera:{iChannel0:"bufferc"},bufferb:{iChannel0:"buffera"},bufferc:{iChannel0:"bufferb"},bufferd:{iChannel0:"buffera",iChannel1:"bufferd"},image:{iChannel0:"bufferd"}},Ud=Object.freeze(Object.defineProperty({__proto__:null,bufferAFragmentShader:Ld,bufferBFragmentShader:Dd,bufferCFragmentShader:Od,bufferDFragmentShader:jd,channels:Id,common:Nd,imageFragmentShader:Md},Symbol.toStringTag,{value:"Module"})),Ad=`
#version 300 es
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform int u_frame;
uniform vec4 u_mouse;
uniform sampler2D iChannel0;

#define iTime u_time
#define iResolution u_resolution
#define iFrame u_frame

/* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */
vec3 random3(vec3 c) {
	float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
	vec3 r;
	r.z = fract(512.0*j);
	j *= .125;
	r.x = fract(512.0*j);
	j *= .125;
	r.y = fract(512.0*j);
	return r-0.5;
}

/* skew constants for 3d simplex functions */
const float F3 =  0.3333333;
const float G3 =  0.1666667;

/* 3d simplex noise */
float simplex3d(vec3 p) {
	 /* 1. find current tetrahedron T and it's four vertices */
	 /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */
	 /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/
	 
	 /* calculate s and x */
	 vec3 s = floor(p + dot(p, vec3(F3)));
	 vec3 x = p - s + dot(s, vec3(G3));
	 
	 /* calculate i1 and i2 */
	 vec3 e = step(vec3(0.0), x - x.yzx);
	 vec3 i1 = e*(1.0 - e.zxy);
	 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
	 	
	 /* x1, x2, x3 */
	 vec3 x1 = x - i1 + G3;
	 vec3 x2 = x - i2 + 2.0*G3;
	 vec3 x3 = x - 1.0 + 3.0*G3;
	 
	 /* 2. find four surflets and store them in d */
	 vec4 w, d;
	 
	 /* calculate surflet weights */
	 w.x = dot(x, x);
	 w.y = dot(x1, x1);
	 w.z = dot(x2, x2);
	 w.w = dot(x3, x3);
	 
	 /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */
	 w = max(0.6 - w, 0.0);
	 
	 /* calculate surflet components */
	 d.x = dot(random3(s), x);
	 d.y = dot(random3(s + i1), x1);
	 d.z = dot(random3(s + i2), x2);
	 d.w = dot(random3(s + 1.0), x3);
	 
	 /* multiply d by w^4 */
	 w *= w;
	 w *= w;
	 d *= w;
	 
	 /* 3. return the sum of the four surflets */
	 return dot(d, vec4(52.0));
}

/*****************************************************************************/


vec2 pen(float t) {
    t *= 0.05;
    return 0.5 * iResolution.xy *
        vec2(simplex3d(vec3(t,0,0)) + 1.,
             simplex3d(vec3(0,t,0)) + 1.);
}


#define T(p) texture(iChannel0,(p)/iResolution.xy)
#define length2(p) dot(p,p)

#define dt 0.15
#define K 0.2
#define nu 0.4
#define kappa 1.68

void main() {
    vec2 p = gl_FragCoord.xy;

    if(iFrame < 10) {
        gl_FragColor = vec4(0,0,1,0);
        return;
    }
    
    vec4 c = T(p);
    
    vec4 n = T(p + vec2(0,1));
    vec4 e = T(p + vec2(1,0));
    vec4 s = T(p - vec2(0,1));
    vec4 w = T(p - vec2(1,0));
    
    vec4 laplacian = (n + e + s + w - 4.*c);
    
    vec4 dx = (e - w)/2.;
    vec4 dy = (n - s)/2.;
    
    // velocity field divergence
    float div = dx.x + dy.y;
    
    // mass conservation, Euler method step
    c.z -= dt*(dx.z * c.x + dy.z * c.y + div * c.z);
    
    // semi-Langrangian advection
    c.xyw = T(p - dt*c.xy).xyw;
    
    // viscosity/diffusion
    c.xyw += dt * vec3(nu,nu,kappa) * laplacian.xyw;
    
    // nullify divergence with pressure field gradient
    c.xy -= K * vec2(dx.z,dy.z);
    
    // external source
    vec2 m = pen(iTime);
    c.xyw += dt * exp(-length2(p - m)/50.) * vec3(m - pen(iTime-0.1), 1);
    
    // dissipation
    c.w -= dt*0.0005;
    
    c.xyzw = clamp(c.xyzw, vec4(-5,-5,0.5,0), vec4(5,5,3,5));
    gl_FragColor = c;
}
`,Jd=`
uniform vec2 u_resolution;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
#define iResolution u_resolution
#define PI 3.141592653589793

void main() {
    vec2 p = gl_FragCoord.xy;
    vec4 c = texture(iChannel0, p.xy / iResolution.xy);
    
    // Noise background
    vec4 noise = texture(iChannel1, p.xy / iResolution.xy);
    
    vec4 o;
    o.rgb = .6 + .6 * cos(6.3 * atan(c.y,c.x)/(2.*PI) + vec3(0,23,21));
    o.rgb *= c.w/5.;
    o.rgb += clamp(c.z - 1., 0., 1.)/10.;
    
    // Mix noise background with shader effect
    o.rgb = mix(noise.rgb * 0.3, o.rgb, 0.7);
    o.a = 1.;
    gl_FragColor = o;
}
`,Bd={buffera:{iChannel0:"self"},image:{iChannel0:"buffera",iChannel1:"self"}},Vd=Object.freeze(Object.defineProperty({__proto__:null,bufferAFragmentShader:Ad,channels:Bd,imageFragmentShader:Jd},Symbol.toStringTag,{value:"Module"})),Wd=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  float random(float seed) {
    return fract(sin(seed * 1234.5) * 43758.5453);
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time * 0.5;
    
    float cols = 20.0;
    float col = floor(uv.x * cols) / cols;
    float speed = random(col) * 0.5 + 0.1;
    float offset = random(col + 1.0) * 0.5;
    
    float y = fract(uv.y + t * speed + offset);
    float brightness = pow(y, 10.0);
    
    float glow = sin(uv.y * 50.0 - t * speed * 10.0) * 0.1 + 0.9;
    
    vec3 color = vec3(0.0, brightness * glow * 0.7, 0.0);
    
    gl_FragColor = vec4(color, 1.0);
  }
`,$d=Object.freeze(Object.defineProperty({__proto__:null,matrixFragmentShader:Wd},Symbol.toStringTag,{value:"Module"})),Xd={iChannel0:"trail"},Hd=`
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D iChannel0;

float cnoise(in vec2 uv)
{
    const mat2 r = mat2(-0.1288, -0.9917, 0.9917, -0.1288);

    vec2 s0 = cos(uv);
    vec2 s1 = cos(uv * 2.5 * r);
    vec2 s2 = cos(uv * 4.0 * r * r);

    vec2 s = s0 * s1 * s2;

    return (s.x + s.y) * 0.25 + 0.5;
}

#define S(x) (smoothstep(0.0, 1.0, (x)))

float fin(in vec2 uv)
{
    uv.x += S(S(S(abs(1.0 - 2.0 * fract(u_time * 0.02))))) - 0.5;
    
    uv *= vec2(sign(abs(1.0 - 2.0 * fract(u_time * 0.02 + 0.25)) - 0.5), 1.0) * 3.5;

    float d = smoothstep(1.5/u_resolution.y, 0.0,
                         uv.y
                         + 2.0 * uv.x * uv.x
                         + max(0.0, -(uv.y + 0.3) * (uv.y + 0.3) + uv.x * 3.0) * 5.0);

    return 1.0 - d * smoothstep(-0.4, -0.4 + 3.0/u_resolution.y,
                                uv.y + sin(u_time * 4.0 - uv.x * 16.0) / 100.0);
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (fragCoord - 0.5 * u_resolution.xy)
                / u_resolution.y;
    vec2 uv2 = fragCoord.xy / u_resolution.xy;
    
    // Trail background
    vec4 trail = texture(iChannel0, uv2);

    float dy = (smoothstep(0.0, -1.0, uv.y) * 40.0 + 1.5)
                / u_resolution.y;

    vec3 disp0 = vec3(0.5, 20.0, 8.0);
    vec3 disp1 = vec3(2.5, 60.0, 4.0);
    vec3 disp2 = vec3(5.0, 80.0, 2.0);
    vec3 disp3 = vec3(10.0, 20.0, 2.0);

    float avg = 0.0;
    avg += cnoise(uv * disp0.xy + u_time) * disp0.z - disp0.z * 0.5;
    avg += cnoise(uv * disp1.xy + u_time) * disp1.z - disp1.z * 0.5;
    avg += cnoise(uv * disp2.xy + u_time) * disp2.z - disp2.z * 0.5;
    avg += cnoise(uv * disp3.xy + u_time) * disp3.z - disp3.z * 0.5;
    avg /= 4.0;

    vec2 st = vec2(uv.x,
                   uv.y + clamp(avg * smoothstep(0.1, -1.0, uv.y), -0.1, 0.1));

    vec3 effect = mix(vec3(0.85, 0.55, 0.0),
                        vec3(0.90, 0.40, 0.0),
                        sqrt(abs(st.y * st.y * st.y)) * 28.0) * fin(uv)
                        * smoothstep(0.25 + dy, 0.25, length(st))
                        + smoothstep(2.0, 0.5, length(uv)) * 0.1;

    // Mix trail background with effect
    float centerRadius = 0.5;
    float distFromCenter = length(uv);
    float mixCoeff = mix(1.0, 0.0, smoothstep(centerRadius * 0.5, centerRadius, distFromCenter));

    vec3 color = mix(trail.rgb, effect, mixCoeff);

    gl_FragColor = vec4(color, 1.0);
}
`,Yd=Object.freeze(Object.defineProperty({__proto__:null,channelSources:Xd,nightSeaFragmentShader:Hd},Symbol.toStringTag,{value:"Module"})),Qd={iChannel0:"trail"},Gd=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec4 u_mouse;
  uniform sampler2D iChannel0;
  
  #define S(a, b, t) smoothstep(a, b, t)
  #define USE_POST_PROCESSING
  
  vec3 N13(float p) {
     vec3 p3 = fract(vec3(p) * vec3(.1031,.11369,.13787));
     p3 += dot(p3, p3.yzx + 19.19);
     return fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
  }

  vec4 N14(float t) {
    return fract(sin(t*vec4(123., 1024., 1456., 264.))*vec4(6547., 345., 8799., 1564.));
  }
  
  float N(float t) {
      return fract(sin(t*12345.564)*7658.76);
  }

  float Saw(float b, float t) {
    return S(0., b, t)*S(1., b, t);
  }


  vec2 DropLayer2(vec2 uv, float t) {
      vec2 UV = uv;
      
      uv.y += t*0.75;
      vec2 a = vec2(6., 1.);
      vec2 grid = a*2.;
      vec2 id = floor(uv*grid);
      
      float colShift = N(id.x); 
      uv.y += colShift;
      
      id = floor(uv*grid);
      vec3 n = N13(id.x*35.2+id.y*2376.1);
      vec2 st = fract(uv*grid)-vec2(.5, 0);
      
      float x = n.x-.5;
      
      float y = UV.y*20.;
      float wiggle = sin(y+sin(y));
      x += wiggle*(.5-abs(x))*(n.z-.5);
      x *= .7;
      float ti = fract(t+n.z);
      y = (Saw(.85, ti)-.5)*.9+.5;
      vec2 p = vec2(x, y);
      
      float d = length((st-p)*a.yx);
      
      float mainDrop = S(.4, .0, d);
      
      float r = sqrt(S(1., y, st.y));
      float cd = abs(st.x-x);
      float trail = S(.23*r, .15*r*r, cd);
      float trailFront = S(-.02, .02, st.y-y);
      trail *= trailFront*r*r;
      
      y = UV.y;
      float trail2 = S(.2*r, .0, cd);
      float droplets = max(0., (sin(y*(1.-y)*120.)-st.y))*trail2*trailFront*n.z;
      y = fract(y*10.)+(st.y-.5);
      float dd = length(st-vec2(x, y));
      droplets = S(.3, 0., dd);
      float m = mainDrop+droplets*r*trailFront;
      
      return vec2(m, trail);
  }

  float StaticDrops(vec2 uv, float t) {
    uv *= 40.;
      
      vec2 id = floor(uv);
      uv = fract(uv)-.5;
      vec3 n = N13(id.x*107.45+id.y*3543.654);
      vec2 p = (n.xy-.5)*.7;
      float d = length(uv-p);
      
      float fade = Saw(.025, fract(t+n.z));
      float c = S(.3, 0., d)*fract(n.z*10.)*fade;
      return c;
  }

  vec2 Drops(vec2 uv, float t, float l0, float l1, float l2) {
      float s = StaticDrops(uv, t)*l0; 
      vec2 m1 = DropLayer2(uv, t)*l1;
      vec2 m2 = DropLayer2(uv*1.85, t)*l2;
      
      float c = s+m1.x+m2.x;
      c = S(.3, 1., c);
      
      return vec2(c, max(m1.y*l0, m2.y*l1));
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
    vec2 UV = gl_FragCoord.xy / u_resolution.xy;
    vec3 M = vec3(1.0) / vec3(u_resolution.xy, u_resolution.x);
    float T = u_time + M.x * 2.0;
    
    float t = T * 0.2;
    
    float rainAmount = sin(T * 0.05) * 0.3 + 0.7;
    
    float maxBlur = mix(2.0, 4.0, rainAmount);
    float minBlur = 1.0;
    
    float story = 0.0;
    
    float zoom = -cos(T * 0.2);
    uv *= 0.7 + zoom * 0.3;
    UV = (UV - 0.5) * (0.9 + zoom * 0.1) + 0.5;
    
    float staticDrops = S(-0.5, 1.0, rainAmount) * 2.0;
    float layer1 = S(0.25, 0.75, rainAmount);
    float layer2 = S(0.0, 0.5, rainAmount);
    
    vec2 c = Drops(uv, t, staticDrops, layer1, layer2);
    
    vec2 e = vec2(0.001, 0.0);
    float cx = Drops(uv + e, t, staticDrops, layer1, layer2).x;
    float cy = Drops(uv + e.yx, t, staticDrops, layer1, layer2).x;
    vec2 n = vec2(cx - c.x, cy - c.x);

    float focus = mix(maxBlur - c.y, minBlur, S(0.1, 0.2, c.x));
    vec3 col = textureLod(iChannel0, UV + n, focus).rgb;
    //vec3 col = texture(iChannel0, UV + n).rgb;
    
    // Stacked blur - multiple passes with increasing radius
    vec3 blur = vec3(0.0);
    float totalWeight = 0.0;
    
    for (int pass = 1; pass <= 5; pass++) {
      float radius = float(pass) * (2.0 + zoom) * 0.002;
      float weight = 4.0 / float(pass);
      
      blur += texture(iChannel0, UV + n + vec2(radius, 0.0)).rgb * weight;
      blur += texture(iChannel0, UV + n - vec2(radius, 0.0)).rgb * weight;
      blur += texture(iChannel0, UV + n + vec2(0.0, radius)).rgb * weight;
      blur += texture(iChannel0, UV + n - vec2(0.0, radius)).rgb * weight;
      blur += texture(iChannel0, UV + n).rgb * weight;
      
      totalWeight += weight * 4.0;
    }
    
    blur /= totalWeight;
    col = mix(col, blur, 0.6);
    
#ifdef USE_POST_PROCESSING
    t = (T + 3.0) * 0.5;
    float colFade = sin(t * 0.2) * 0.5 + 0.5 + story;
    col *= mix(vec3(1.0), vec3(0.8, 0.9, 1.3), colFade);
    float fade = S(0.0, 10.0, T);
    float lightning = sin(t * sin(t * 10.0));
    lightning *= pow(max(0.0, sin(t + sin(t))), 10.0);
    col *= 1.0 + lightning * fade * mix(1.0, 0.1, story * story);
    col *= 1.0 - dot(UV - 0.5, UV - 0.5);
    col *= fade;
#endif

    gl_FragColor = vec4(col, 1.0);
  }
`,Kd=Object.freeze(Object.defineProperty({__proto__:null,channelSources:Qd,rainFragmentShader:Gd},Symbol.toStringTag,{value:"Module"})),bd=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  void main() {
    float k = 0.0;
    vec2 uv = gl_FragCoord.xy / u_resolution - 0.5;
    vec3 d = vec3(uv, 1.0);
    vec3 o = d;
    vec3 c = k * d;
    vec3 p;
    
    for (int i = 0; i < 99; i++) {
      p = o + sin(u_time * 0.1);
      for (int j = 0; j < 10; j++) {
        p = abs(p.zyx - 0.4) - 0.7;
        k += exp(-6.0 * abs(dot(p, o)));
      }
      
      k /= 3.0;
      o += d * 0.05 * k;
      c = 0.97 * c + 0.1 * k * vec3(k * k, k, 1.0);
    }
    
    c = 0.4 * log(1.0 + c);
    
    gl_FragColor = vec4(c, 1.0);
  }
`,Zd=Object.freeze(Object.defineProperty({__proto__:null,relaxPlasmaFragmentShader:bd},Symbol.toStringTag,{value:"Module"})),qd=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  #define NUM_LAYERS 10.0
  
  mat2 Rot(float a) {
    float c = cos(a), s = sin(a);
    return mat2(c, -s, s, c);
  }

  float Star(vec2 uv, float flare) {
    float col = 0.0;
    float d = length(uv);
    float m = 0.02 / d;
    
    float rays = max(0.0, 1.0 - abs(uv.x * uv.y * 1000.0));
    m += rays * flare;
    uv *= Rot(3.1415 / 4.0);
    rays = max(0.0, 1.0 - abs(uv.x * uv.y * 1000.0));
    m += rays * 0.3 * flare;
    
    m *= smoothstep(1.0, 0.2, d);

    return m;
  }

  float Hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  vec3 StarLayer(vec2 uv) {
    vec3 col = vec3(0.0);
    
    vec2 gv = fract(uv) - 0.5;
    vec2 id = floor(uv);
    
    for (int y = -1; y <= 1; y++) {
      for (int x = -1; x <= 1; x++) {
        vec2 offs = vec2(float(x), float(y));

        float n = Hash21(id + offs);
        float size = fract(n * 345.32);
        
        vec2 p = vec2(n, fract(n * 34.0));
        
        float star = Star(gv - offs - p + 0.5, smoothstep(0.8, 1.0, size) * 0.6);
        
        float hueShift = fract(n * 2345.2 + dot(uv / 420.0, vec2(0.5, 0.3))) * 0.2 + fract(u_time * 0.1) * 0.3;
        vec3 hueShift3 = vec3(0.2, 0.3, 0.9) * hueShift * 123.2;

        vec3 color = sin(hueShift3) * 0.5 + 0.5;
        color = color * vec3(1.0, 0.25, 1.0 + size);

        star *= sin(u_time * 0.003 + n * 6.2831) * 0.4 + 1.0;
        col += star * size * color;
      }
    }
    
    return col;
  }

  vec2 N(float angle) {
    return vec2(sin(angle), cos(angle));
  }

  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
    float t = u_time * 0.01;
    
    uv.x = abs(uv.x);
    uv.y += tan((5.0 / 6.0) * 3.1415) * 0.5;

    vec2 n = N((5.0 / 6.0) * 3.1415);
    float d = dot(uv - vec2(0.5, 0.0), n);
    uv -= n * max(0.0, d) * 2.0;

    n = N((2.0 / 3.0) * 3.1415);
    float scale = 1.0;
    uv.x += 1.5 / 1.25;
    for (int i = 0; i < 5; i++) {
      scale *= 1.25;
      uv *= 1.25;
      uv.x -= 1.5;

      uv.x = abs(uv.x);
      uv.x -= 0.5;
      uv -= n * min(0.0, dot(uv, n)) * 2.0;
    }

    uv *= Rot(t);
    vec3 col = vec3(0.0);
    
    for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYERS) {
      float depth = fract(i + t);
      float sc = mix(20.0, 0.5, depth);
      float fade = depth * smoothstep(1.0, 0.9, depth);
      col += StarLayer(uv * sc + i * 453.2) * fade;
    }

    gl_FragColor = vec4(col, 1.0);
  }
`,ep=Object.freeze(Object.defineProperty({__proto__:null,starleidoscopeFragmentShader:qd},Symbol.toStringTag,{value:"Module"})),tp={iChannel0:"trail"},np=`
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D iChannel0;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec4 trail = texture(iChannel0, uv);
  
  // Boost brightness
  vec3 color = trail.rgb * 1.5;
  
  // Add subtle color shift based on time
  float shift = sin(u_time * 0.5) * 0.1;
  color.r += shift;
  color.b -= shift;
  
  // Add slight glow effect
  color += trail.rgb * 0.2;
  
  gl_FragColor = vec4(color, 1.0);
}
`,rp=Object.freeze(Object.defineProperty({__proto__:null,channelSources:tp,trailEffectFragmentShader:np},Symbol.toStringTag,{value:"Module"})),op=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  void main() {
    vec3 c;
    float l;
    float t = u_time;
    vec2 r = u_resolution.xy;
    vec2 fragCoord = gl_FragCoord.xy;
    
    for(int i = 0; i < 3; i++) {
      vec2 uv;
      vec2 p = fragCoord.xy / r;
      uv = p;
      p -= 0.5;
      p.x *= r.x / r.y;
      t += 0.07;
      l = length(p);
      uv += p / l * (sin(t) + 1.0) * abs(sin(l * 9.0 - t - t));
      c[i] = 0.01 / length(mod(uv, 1.0) - 0.5);
    }
    
    vec4 outColor = vec4(c / l, u_time);
    gl_FragColor = outColor;
  }
`,lp=Object.freeze(Object.defineProperty({__proto__:null,warpFragmentShader:op},Symbol.toStringTag,{value:"Module"})),ip=`
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  const float overallSpeed = 0.2;
  const float gridSmoothWidth = 0.015;
  const float axisWidth = 0.05;
  const float majorLineWidth = 0.025;
  const float minorLineWidth = 0.0125;
  const float majorLineFrequency = 5.0;
  const float minorLineFrequency = 1.0;
  const vec4 gridColor = vec4(0.5);
  const float scale = 5.0;
  const vec4 lineColor = vec4(0.25, 0.5, 1.0, 1.0);
  const float minLineWidth = 0.02;
  const float maxLineWidth = 0.5;
  const float lineSpeed = 1.0 * overallSpeed;
  const float lineAmplitude = 1.0;
  const float lineFrequency = 0.2;
  const float warpSpeed = 0.2 * overallSpeed;
  const float warpFrequency = 0.5;
  const float warpAmplitude = 1.0;
  const float offsetFrequency = 0.5;
  const float offsetSpeed = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.6;
  const float maxOffsetSpread = 2.0;
  const int linesPerGroup = 16;

  #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
  #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))

  float drawGridLines(float axis) {
    return drawCrispLine(0.0, axisWidth, axis)
         + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)
         + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);
  }

  float drawGrid(vec2 space) {
    return min(1.0, drawGridLines(space.x) + drawGridLines(space.y));
  }

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float horizontalFade, float offset) {
    return random(x * lineFrequency + u_time * lineSpeed) * horizontalFade * lineAmplitude + offset;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 space = (gl_FragCoord.xy - u_resolution / 2.0) / u_resolution.x * 2.0 * scale;
    
    float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
    float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);

    space.y += random(space.x * warpFrequency + u_time * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
    space.x += random(space.y * warpFrequency + u_time * warpSpeed + 2.0) * warpAmplitude * horizontalFade;
    
    vec4 lines = vec4(0.0);
    
    for (int l = 0; l < linesPerGroup; l++) {
      float normalizedLineIndex = float(l) / float(linesPerGroup);
      float offsetTime = u_time * offsetSpeed;
      float offsetPosition = float(l) + space.x * offsetFrequency;
      float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
      float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
      float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
      float linePosition = getPlasmaY(space.x, horizontalFade, offset);
      float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);
      
      float circleX = mod(float(l) + u_time * lineSpeed, 25.0) - 12.0;
      vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
      float circle = drawCircle(circlePosition, 0.01, space) * 4.0;
      
      line = line + circle;
      lines += line * lineColor * rand;
    }
    
    vec4 bgColor = mix(lineColor * 0.5, lineColor - vec4(0.2, 0.2, 0.7, 1.0), uv.x);
    bgColor *= verticalFade;
    bgColor.a = 1.0;
    bgColor += lines;
    
    gl_FragColor = bgColor;
  }
`,up=Object.freeze(Object.defineProperty({__proto__:null,wavesFragmentShader:ip},Symbol.toStringTag,{value:"Module"})),ap=5,sp=10,cp=1,fp=`#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,la=Object.assign({"./shaders/art.js":hd,"./shaders/balls.js":xd,"./shaders/discoSun.js":wd,"./shaders/edges.js":kd,"./shaders/fire2.js":Td,"./shaders/firePlasma.js":Rd,"./shaders/fluidSim.js":Ud,"./shaders/fluidSimGasoline.js":Vd,"./shaders/matrix.js":$d,"./shaders/nightSea.js":Yd,"./shaders/rain.js":Kd,"./shaders/relaxPlasma.js":Zd,"./shaders/starleidoscope.js":ep,"./shaders/trailEffect.js":rp,"./shaders/warp.js":lp,"./shaders/waves.js":up});function dp(e){if(!e||e.length!==9)return{r:255,g:255,b:255,a:255};const t=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16),o=parseInt(e.substring(7,9),16);return{r:n,g:r,b:o,a:t}}function ia(e,t,n,r="unknown"){const o=e.createShader(t);return e.shaderSource(o,n),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(console.error(`Shader error (${r}):`,e.getShaderInfoLog(o)),e.deleteShader(o),null)}function pp(e,t,n){const r=e.createProgram();return e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?r:(console.error(e.getProgramInfoLog(r)),e.deleteProgram(r),null)}function ua(e,t,n=!1,r="unknown"){const o=ia(e,e.VERTEX_SHADER,fp,r+"_vertex");let l=t.trim();n&&(l=l.replace(/gl_FragColor/g,"fragColor"),l=l.replace(/texture2D\(/g,"texture("),l.includes("out vec4 fragColor")||(l.startsWith("#version")?(l.includes("precision highp float")?l.match(/precision\s+highp\s+float\s*;/)||(l=l.replace("precision highp float","precision highp float;")):l=l.replace("#version",`#version
precision highp float;`),l.includes("out vec4 fragColor")||(l=l.replace("precision highp float;",`precision highp float;
out vec4 fragColor;`))):l=`#version 300 es
precision highp float;
out vec4 fragColor;

`+l.replace(/^\s*precision\s+highp\s+float\s*;\s*/m,"")));const i=ia(e,e.FRAGMENT_SHADER,l,r+"_fragment");if(!o||!i)return null;const u=pp(e,o,i);if(!u)return null;const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const c=e.getAttribLocation(u,"a_position");e.enableVertexAttribArray(c),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0);const m=e.getError();return m!==e.NO_ERROR&&console.error("WebGL error after creating program:",m),u}function aa(e,t){return{u_time:e.getUniformLocation(t,"u_time"),u_resolution:e.getUniformLocation(t,"u_resolution"),u_emitterX:e.getUniformLocation(t,"u_emitterX"),u_emitterY:e.getUniformLocation(t,"u_emitterY"),u_emitter:e.getUniformLocation(t,"u_emitter"),u_emitterVelX:e.getUniformLocation(t,"u_emitterVelX"),u_emitterVelY:e.getUniformLocation(t,"u_emitterVelY"),u_mouse:e.getUniformLocation(t,"u_mouse"),u_timeDelta:e.getUniformLocation(t,"u_timeDelta"),u_frameRate:e.getUniformLocation(t,"u_frameRate"),u_frame:e.getUniformLocation(t,"u_frame"),u_sampleRate:e.getUniformLocation(t,"u_sampleRate"),iChannel0:e.getUniformLocation(t,"iChannel0"),iChannel1:e.getUniformLocation(t,"iChannel1"),iChannel2:e.getUniformLocation(t,"iChannel2"),iChannel3:e.getUniformLocation(t,"iChannel3")}}function sa(e,t,n){const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,t,n,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const o=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{texture:r,framebuffer:o}}function mp(e,t,n){return{ping:sa(e,t,n),pong:sa(e,t,n),current:0}}const ei=["buffera","bufferb","bufferc","bufferd"],vp={buffera:{iChannel0:"self",iChannel1:"noise"},bufferb:{iChannel0:"buffera",iChannel1:"noise"},bufferc:{iChannel0:"bufferb",iChannel1:"noise"},bufferd:{iChannel0:"bufferc",iChannel1:"noise"}};function hp(e,t=256){const n=new Uint8Array(t*t*4);for(let o=0;o<n.length;o+=4)n[o]=Math.random()*256,n[o+1]=Math.random()*256,n[o+2]=Math.random()*256,n[o+3]=255;const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,t,0,e.RGBA,e.UNSIGNED_BYTE,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),r}function yp(){const e=[];for(const t in la){const n=la[t],r=t.split("/").pop().replace(".js",""),o=Object.keys(n).filter(l=>l.endsWith("FragmentShader"));if(o.length>1){const l=n.common||"",i=n.channels||{},u={};for(const a of o){const c=a.replace("FragmentShader","").toLowerCase();let m=i[c]||{};if(Object.keys(m).length===0){for(const p of Object.keys(i))if(p.toLowerCase()===c){m=i[p];break}}u[c]={fragmentShader:l+n[a],channels:m}}e.push({name:r,type:"multi",passes:u})}else o.length===1&&e.push({name:r,type:"single",fragmentShader:n[o[0]],channelSources:n.channelSources||{}})}return e}const Cc=yp();function gp(e,t){const n=e.getContext("webgl2");if(!n)return null;n.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not supported, multipass shaders may not work correctly");const o={},l=hp(n),i={buffera:{ping:null,pong:null,current:0},bufferb:{ping:null,pong:null,current:0},bufferc:{ping:null,pong:null,current:0},bufferd:{ping:null,pong:null,current:0}};for(const m of Cc)if(m.type==="multi"){o[m.name]={name:m.name,type:"multi",passes:{}};for(const[p,v]of Object.entries(m.passes)){const g=ua(n,v.fragmentShader,!0,`${m.name}_${p}`);g&&(o[m.name].passes[p]={program:g,uniforms:aa(n,g),channels:v.channels})}}else{const p=ua(n,m.fragmentShader,!0,m.name);p&&(o[m.name]={name:m.name,type:"single",program:p,uniforms:aa(n,p),channelSources:m.channelSources||{}})}const u=t.getContext("2d");let a=n.createTexture();function c(){n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.bindTexture(n.TEXTURE_2D,a),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.generateMipmap(n.TEXTURE_2D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1)}return{gl:n,shaderPrograms:o,noiseTexture:l,fbos:i,trailCtx:u,trailCanvas:t,trailTexture:a,updateTrailTexture:c}}function Sp(e,t,n,r,o,l){const i=t;i.u_time&&e.uniform1f(i.u_time,o*.001),i.u_resolution&&e.uniform2f(i.u_resolution,n,r),i.u_timeDelta&&l.timeDelta&&e.uniform1f(i.u_timeDelta,l.timeDelta),i.u_frameRate&&l.frameRate&&e.uniform1f(i.u_frameRate,l.frameRate),i.u_frame&&e.uniform1i(i.u_frame,l.frame||0),i.u_sampleRate&&e.uniform1f(i.u_sampleRate,44100),i.u_emitterX&&l.emitterX!==void 0&&e.uniform1f(i.u_emitterX,l.emitterX),i.u_emitterY&&l.emitterY!==void 0&&e.uniform1f(i.u_emitterY,l.emitterY),i.u_emitter&&l.emitterX!==void 0&&l.emitterY!==void 0&&e.uniform2f(i.u_emitter,l.emitterX,l.emitterY),i.u_emitterVelX&&l.emitterVelX!==void 0&&e.uniform1f(i.u_emitterVelX,l.emitterVelX),i.u_emitterVelY&&l.emitterVelY!==void 0&&e.uniform1f(i.u_emitterVelY,l.emitterVelY),i.u_mouse&&e.uniform4f(i.u_mouse,l.emitterX||0,l.emitterY||0,l.mouseZ||0,l.mouseZ||0)}function Nt(e,t,n,r,o){const l=t[n];l!=null&&r&&(e.activeTexture(e.TEXTURE0+o),e.bindTexture(e.TEXTURE_2D,r),e.uniform1i(l,o))}function ti(e,t,n,r,o,l){Sp(e,t,n,r,o,l),e.drawArrays(e.TRIANGLES,0,6)}function wc(e,t,n,r){for(const o of ei){const l=t[o];l.ping&&(e.deleteTexture(l.ping.texture),e.deleteFramebuffer(l.ping.framebuffer),e.deleteTexture(l.pong.texture),e.deleteFramebuffer(l.pong.framebuffer)),t[o]=mp(e,n,r)}}function Ec(e,t){if(!t||t==="self")return null;const n=e[t];return!n||!n.ping?null:n.current===0?n.ping.texture:n.pong.texture}function Fp(e,t,n,r,o,l,i,u,a){const c=t.passes[n];if(!c)return null;const m=r[n],p=m.current===0?m.ping:m.pong,v=m.current===0?m.pong:m.ping;e.bindFramebuffer(e.FRAMEBUFFER,v.framebuffer),e.viewport(0,0,l,i),e.disable(e.BLEND),e.useProgram(c.program);const g=vp[n]||{},h=c.channels||{},F=Object.keys(h).length>0?{...g,...h}:g;for(let P=0;P<4;P++){const d=`iChannel${P}`,s=F[d],f=c.uniforms[d];if(s&&f!==null&&f!==void 0){let y=o;s==="self"||s===n?y=p.texture:s!=="noise"&&(y=Ec(r,s)||o),y&&Nt(e,c.uniforms,d,y,P)}}return ti(e,c.uniforms,l,i,u,a),v.texture}function _p(e,t,n,r,o,l,i,u=.016,a=0){const{gl:c,shaderPrograms:m,noiseTexture:p,fbos:v}=e;c.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT),c.enable(c.BLEND),c.blendFunc(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA),m._frameCounters||(m._frameCounters={}),m._frameCounters[n]||(m._frameCounters[n]=0),m._frameCounters[n]++;const g={emitterX:r,emitterY:o,emitterVelX:l,emitterVelY:i,timeDelta:u,frameRate:u>0?1/u:60,frame:m._frameCounters[n],mouseZ:a},h=m[n];if(!h)return;const F=c.canvas.width,P=c.canvas.height;if(h.type==="single"){const d=h.channelSources||{};if(c.useProgram(h.program),h.uniforms.iChannel0!==null&&h.uniforms.iChannel0!==void 0){const s=d.iChannel0||"noise",f=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),Nt(c,h.uniforms,"iChannel0",f,0)}if(h.uniforms.iChannel1!==null&&h.uniforms.iChannel1!==void 0){const s=d.iChannel1||"noise",f=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),Nt(c,h.uniforms,"iChannel1",f,1)}if(h.uniforms.iChannel2!==null&&h.uniforms.iChannel2!==void 0){const s=d.iChannel2||"noise",f=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),Nt(c,h.uniforms,"iChannel2",f,2)}if(h.uniforms.iChannel3!==null&&h.uniforms.iChannel3!==void 0){const s=d.iChannel3||"noise",f=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),Nt(c,h.uniforms,"iChannel3",f,3)}ti(c,h.uniforms,F,P,t,g)}else{v.buffera.ping||wc(c,v,F,P);let d=null;for(let s=0;s<cp;s++)for(const f of ei)h.passes[f]&&(d=Fp(c,h,f,v,p,F,P,t,g));for(const s of ei)v[s]&&(v[s].current=1-v[s].current);if(c.bindFramebuffer(c.FRAMEBUFFER,null),c.viewport(0,0,F,P),c.enable(c.BLEND),h.passes.image){const s=h.passes.image.channels||{};c.useProgram(h.passes.image.program);const y={...{},...s};for(const[_,x]of Object.entries(y)){if(!_.startsWith("iChannel"))continue;const E=parseInt(_.replace("iChannel",""));let k=null;x==="trail"?e&&e.trailTexture&&(e.updateTrailTexture(),k=e.trailTexture):x==="noise"?k=p:x==="final"||!x||x==="self"?k=d||p:k=Ec(v,x)||p;const j=h.passes.image.uniforms[_];k&&j!==null&&j!==void 0&&Nt(c,h.passes.image.uniforms,_,k,E)}for(let _=0;_<4;_++){const x=`iChannel${_}`;!y[x]&&h.passes.image.uniforms[x]!==null&&h.passes.image.uniforms[x]!==void 0&&Nt(c,h.passes.image.uniforms,x,_===0&&d||p,_)}ti(c,h.passes.image.uniforms,F,P,t,g)}}}function xp(e,t,n,r=2){const{trailCtx:o}=e;!o||!t||!n||(o.lineWidth=r,t.forEach((l,i)=>{if(l.enabled&&n[i]){const u=dp(l.color);o.strokeStyle=`rgba(${u.r}, ${u.g}, ${u.b}, ${u.a/255})`,o.beginPath(),o.moveTo(n[i].endX,n[i].endY),o.lineTo(l.endX,l.endY),o.stroke()}}))}function ca(e,t=null,n=1){const r=window.devicePixelRatio||1;e.width=window.innerWidth*r*n,e.height=window.innerHeight*r*n,t&&t.viewport(0,0,e.width,e.height)}function Cp(e,t=1){const n=window.devicePixelRatio||1;e.width=window.innerWidth*n*t,e.height=window.innerHeight*n*t}function wp(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),t.forEach(n=>{e.strokeStyle="#00ff00",e.lineWidth=ap,e.beginPath(),e.moveTo(n.startX,n.startY),e.lineTo(n.endX,n.endY),e.stroke(),e.fillStyle="#ff0000",e.beginPath(),e.arc(n.endX,n.endY,sp/2,0,Math.PI*2),e.fill()})}const Ep=30;function kp(){const[e,t]=z.useState(0),[n,r]=z.useState(!0),o=z.useRef([]),[l,i]=z.useState(!0),[u,a]=z.useState(!0),[c,m]=z.useState(!0),[p,v]=z.useState("plasma"),[g,h]=z.useState(1),[F,P]=z.useState(0),[d,s]=z.useState(1),[f,y]=z.useState(2),_=z.useRef(null),x=z.useRef(null),E=z.useRef(null),k=z.useRef(null),j=z.useRef(null),L=z.useRef(0),pe=z.useRef(.016),Ye=z.useRef(null),Ae=z.useRef(null),ut=z.useRef(new md),vr=z.useRef(1),$t=z.useRef(!0),Xt=z.useRef(!0),C=z.useRef(!0),T=z.useRef("plasma"),R=z.useRef(1),V=z.useRef(2),Y=z.useRef(!1),Ht=z.useRef({x:0,y:0,pressed:!1});z.useEffect(()=>{vr.current=g},[g]),z.useEffect(()=>{R.current=d},[d]),z.useEffect(()=>{V.current=f},[f]),z.useEffect(()=>{$t.current=l},[l]),z.useEffect(()=>{Xt.current=u},[u]),z.useEffect(()=>{C.current=c},[c]),z.useEffect(()=>{T.current=p},[p]),z.useEffect(()=>{const I=()=>{document.hidden?Y.current=!0:L.current=0};return document.addEventListener("visibilitychange",I),()=>{document.removeEventListener("visibilitychange",I)}},[]);const Je=z.useCallback(()=>{const I=_.current,Se=x.current;if(!I||!Se)return;const Tt=gp(I,Se);Tt&&(k.current=Tt)},[]),Qe=z.useCallback(()=>{const I=_.current,Se=k.current;I&&Se&&(ca(I,Se.gl,R.current),wc(Se.gl,Se.fbos,I.width,I.height));const Tt=x.current;Tt&&Cp(Tt,R.current);const Ge=E.current;Ge&&ca(Ge,null,R.current)},[]);z.useEffect(()=>{Qe()},[d,Qe]);const Be=z.useCallback(()=>{const I=x.current;I&&I.getContext("2d").clearRect(0,0,I.width,I.height)},[]),Yt=z.useCallback(I=>{ut.current.loadPreset(I),Ye.current=null,Be(),P(I)},[Be]),Oo=z.useCallback(I=>{const Se=k.current,Tt=_.current;if(L.current>0&&!Y.current){const K=I-L.current;pe.current=K/1e3,ut.current.updateJoints(K,vr.current);const hr=1e3/K;o.current.push(hr),o.current.length>Ep&&o.current.shift();const yr=o.current.reduce((wn,En)=>wn+En,0)/o.current.length;t(Math.round(yr))}L.current=I,Y.current=!1;const Ge=ut.current.calculateJoints(window.innerWidth,window.innerHeight);if(Se&&Tt&&$t.current){const K=Ge.length>0?Ge[Ge.length-1]:null;let hr=0,yr=0;K&&Ae.current&&(hr=K.endX-Ae.current.x,yr=K.endY-Ae.current.y);const wn=Ht.current,En=wn.pressed,kc=En?wn.x:K?K.endX:null,zc=En?wn.y:K?K.endY:null,Tc=En?2:0;_p(Se,I,T.current,kc,zc,hr,yr,pe.current,Tc),K&&(Ae.current={x:K.endX,y:K.endY})}if(Se&&xp(Se,Ge,Ye.current,V.current),Xt.current&&E.current){const K=E.current.getContext("2d");wp(K,Ge)}else if(E.current){const K=E.current.getContext("2d");K.clearRect(0,0,K.canvas.width,K.canvas.height)}Ye.current=Ge,j.current=requestAnimationFrame(Oo)},[]);return z.useEffect(()=>{ut.current.loadPreset(0),Je(),Qe();const I=()=>Qe();return window.addEventListener("resize",I),j.current=requestAnimationFrame(Oo),()=>{window.removeEventListener("resize",I),j.current&&cancelAnimationFrame(j.current)}},[Je,Qe,Oo]),N.jsxs(N.Fragment,{children:[N.jsx("div",{style:{display:l?"none":"block",width:"100vw",height:"100vh",background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"}}),N.jsxs("div",{style:{position:"fixed",top:10,left:10,color:"white",fontFamily:"monospace",fontSize:"14px",background:"rgba(0,0,0,0.5)",padding:"4px 8px",borderRadius:"4px",zIndex:1e3},children:[e," FPS"]}),N.jsx(dd,{visible:n,shaderEnabled:l,onToggleShader:i,jointsEnabled:u,onToggleJoints:a,trailEnabled:c,onToggleTrail:m,effect:p,onEffectChange:v,speedMultiplier:g,onSpeedChange:h,presetNames:ut.current.getPresetNames(),selectedPreset:F,onPresetChange:Yt,shaderNames:Cc.map(I=>I.name),resolutionScale:d,onResolutionScaleChange:s,trailWidth:f,onTrailWidthChange:y}),N.jsx("button",{onClick:()=>r(!n),style:{position:"fixed",top:10,right:10,width:40,height:40,background:"rgba(0,0,0,0.5)",border:"none",borderRadius:"4px",color:"white",fontSize:"20px",cursor:"pointer",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center"},title:"Settings",children:"⚙"})]})}ul.createRoot(document.getElementById("root")).render(N.jsx(Xc.StrictMode,{children:N.jsx(kp,{})}));
