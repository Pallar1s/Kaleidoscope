(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Lc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pa={exports:{}},So={},ma={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),Dc=Symbol.for("react.portal"),jc=Symbol.for("react.fragment"),Oc=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),Uc=Symbol.for("react.context"),Ac=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Bc=Symbol.for("react.memo"),Vc=Symbol.for("react.lazy"),qi=Symbol.iterator;function Wc(e){return e===null||typeof e!="object"?null:(e=qi&&e[qi]||e["@@iterator"],typeof e=="function"?e:null)}var va={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ha=Object.assign,ya={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=ya,this.updater=n||va}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ga(){}ga.prototype=Fn.prototype;function ri(e,t,n){this.props=e,this.context=t,this.refs=ya,this.updater=n||va}var oi=ri.prototype=new ga;oi.constructor=ri;ha(oi,Fn.prototype);oi.isPureReactComponent=!0;var Zi=Array.isArray,Sa=Object.prototype.hasOwnProperty,li={current:null},Fa={key:!0,ref:!0,__self:!0,__source:!0};function _a(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Sa.call(t,r)&&!Fa.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:dr,type:e,key:l,ref:i,props:o,_owner:li.current}}function $c(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ii(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function Xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function Mo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xc(""+e.key):t.toString(36)}function Mr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case dr:case Dc:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Mo(i,0):r,Zi(o)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Mr(o,t,n,"",function(c){return c})):o!=null&&(ii(o)&&(o=$c(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(eu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Zi(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+Mo(l,u);i+=Mr(l,t,n,a,o)}else if(a=Wc(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+Mo(l,u++),i+=Mr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Sr(e,t,n){if(e==null)return e;var r=[],o=0;return Mr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Hc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Ir={transition:null},Yc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:li};function xa(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Sr,forEach:function(e,t,n){Sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sr(e,function(){t++}),t},toArray:function(e){return Sr(e,function(t){return t})||[]},only:function(e){if(!ii(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Fn;D.Fragment=jc;D.Profiler=Mc;D.PureComponent=ri;D.StrictMode=Oc;D.Suspense=Jc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yc;D.act=xa;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ha({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=li.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Sa.call(t,a)&&!Fa.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:dr,type:e.type,key:o,ref:l,props:r,_owner:i}};D.createContext=function(e){return e={$$typeof:Uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ic,_context:e},e.Consumer=e};D.createElement=_a;D.createFactory=function(e){var t=_a.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Ac,render:e}};D.isValidElement=ii;D.lazy=function(e){return{$$typeof:Vc,_payload:{_status:-1,_result:e},_init:Hc}};D.memo=function(e,t){return{$$typeof:Bc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};D.unstable_act=xa;D.useCallback=function(e,t){return me.current.useCallback(e,t)};D.useContext=function(e){return me.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return me.current.useDeferredValue(e)};D.useEffect=function(e,t){return me.current.useEffect(e,t)};D.useId=function(){return me.current.useId()};D.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return me.current.useMemo(e,t)};D.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};D.useRef=function(e){return me.current.useRef(e)};D.useState=function(e){return me.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return me.current.useTransition()};D.version="18.3.1";ma.exports=D;var z=ma.exports;const Qc=Lc(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc=z,bc=Symbol.for("react.element"),Kc=Symbol.for("react.fragment"),qc=Object.prototype.hasOwnProperty,Zc=Gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ef={key:!0,ref:!0,__self:!0,__source:!0};function Ca(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)qc.call(t,r)&&!ef.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:bc,type:e,key:l,ref:i,props:o,_owner:Zc.current}}So.Fragment=Kc;So.jsx=Ca;So.jsxs=Ca;pa.exports=So;var T=pa.exports,al={},wa={exports:{}},ze={},Ea={exports:{}},ka={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var L=C.length;C.push(P);e:for(;0<L;){var X=L-1>>>1,b=C[X];if(0<o(b,P))C[X]=P,C[L]=b,L=X;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],L=C.pop();if(L!==P){C[0]=L;e:for(var X=0,b=C.length,Ke=b>>>1;X<Ke;){var $e=2*(X+1)-1,Rt=C[$e],he=$e+1,Nt=C[he];if(0>o(Rt,L))he<b&&0>o(Nt,Rt)?(C[X]=Nt,C[he]=L,X=he):(C[X]=Rt,C[$e]=L,X=$e);else if(he<b&&0>o(Nt,L))C[X]=Nt,C[he]=L,X=he;else break e}}return P}function o(C,P){var L=C.sortIndex-P.sortIndex;return L!==0?L:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var a=[],c=[],m=1,p=null,v=3,S=!1,h=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=C)r(c),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(c)}}function y(C){if(_=!1,d(C),!h)if(n(a)!==null)h=!0,st(g);else{var P=n(c);P!==null&&be(y,P.startTime-C)}}function g(C,P){h=!1,_&&(_=!1,f(w),w=-1),S=!0;var L=v;try{for(d(P),p=n(a);p!==null&&(!(p.expirationTime>P)||C&&!fe());){var X=p.callback;if(typeof X=="function"){p.callback=null,v=p.priorityLevel;var b=X(p.expirationTime<=P);P=e.unstable_now(),typeof b=="function"?p.callback=b:p===n(a)&&r(a),d(P)}else r(a);p=n(a)}if(p!==null)var Ke=!0;else{var $e=n(c);$e!==null&&be(y,$e.startTime-P),Ke=!1}return Ke}finally{p=null,v=L,S=!1}}var x=!1,k=null,w=-1,M=5,N=-1;function fe(){return!(e.unstable_now()-N<M)}function Ve(){if(k!==null){var C=e.unstable_now();N=C;var P=!0;try{P=k(!0,C)}finally{P?We():(x=!1,k=null)}}else x=!1}var We;if(typeof s=="function")We=function(){s(Ve)};else if(typeof MessageChannel<"u"){var Cn=new MessageChannel,wn=Cn.port2;Cn.port1.onmessage=Ve,We=function(){wn.postMessage(null)}}else We=function(){R(Ve,0)};function st(C){k=C,x||(x=!0,We())}function be(C,P){w=R(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){h||S||(h=!0,st(g))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(v){case 1:case 2:case 3:var P=3;break;default:P=v}var L=v;v=P;try{return C()}finally{v=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=v;v=C;try{return P()}finally{v=L}},e.unstable_scheduleCallback=function(C,P,L){var X=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,C){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=L+b,C={id:m++,callback:P,priorityLevel:C,startTime:L,expirationTime:b,sortIndex:-1},L>X?(C.sortIndex=L,t(c,C),n(a)===null&&C===n(c)&&(_?(f(w),w=-1):_=!0,be(y,L-X))):(C.sortIndex=b,t(a,C),h||S||(h=!0,st(g))),C},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(C){var P=v;return function(){var L=v;v=P;try{return C.apply(this,arguments)}finally{v=L}}}})(ka);Ea.exports=ka;var tf=Ea.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=z,ke=tf;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var za=new Set,Gn={};function Xt(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)za.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,rf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function of(e){return sl.call(nu,e)?!0:sl.call(tu,e)?!1:rf.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function lf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uf(e,t,n,r){if(t===null||typeof t>"u"||lf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ui=/[\-:]([a-z])/g;function ai(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ui,ai);ie[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ui,ai);ie[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ui,ai);ie[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function si(e,t,n,r){var o=ie.hasOwnProperty(t)?ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uf(t,n,o,r)&&(n=null),r||o===null?of(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var at=nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),ci=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),Ta=Symbol.for("react.provider"),Pa=Symbol.for("react.context"),fi=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),di=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Ra=Symbol.for("react.offscreen"),ru=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Io;function Mn(e){if(Io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||""}return`
`+Io+e}var Uo=!1;function Ao(e,t){if(!e||Uo)return"";Uo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,u=l.length-1;1<=i&&0<=u&&o[i]!==l[u];)u--;for(;1<=i&&0<=u;i--,u--)if(o[i]!==l[u]){if(i!==1||u!==1)do if(i--,u--,0>u||o[i]!==l[u]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=u);break}}}finally{Uo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function af(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Qt:return"Portal";case cl:return"Profiler";case ci:return"StrictMode";case fl:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pa:return(e.displayName||"Context")+".Consumer";case Ta:return(e._context.displayName||"Context")+".Provider";case fi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case di:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function sf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===ci?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Na(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cf(e){var t=Na(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=cf(e))}function La(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Na(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Da(e,t){t=t.checked,t!=null&&si(e,"checked",t,!1)}function vl(e,t){Da(e,t);var n=Et(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function iu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(In(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function ja(e,t){var n=Et(t.value),r=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function uu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Oa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Oa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Ma=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ff=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){ff.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function Ia(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function Ua(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ia(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var df=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(df[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function pi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,an=null,sn=null;function au(e){if(e=vr(e)){if(typeof xl!="function")throw Error(F(280));var t=e.stateNode;t&&(t=wo(t),xl(e.stateNode,e.type,t))}}function Aa(e){an?sn?sn.push(e):sn=[e]:an=e}function Ja(){if(an){var e=an,t=sn;if(sn=an=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function Ba(e,t){return e(t)}function Va(){}var Jo=!1;function Wa(e,t,n){if(Jo)return e(t,n);Jo=!0;try{return Ba(e,t,n)}finally{Jo=!1,(an!==null||sn!==null)&&(Va(),Ja())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var Cl=!1;if(ot)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Cl=!1}function pf(e,t,n,r,o,l,i,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Bn=!1,Gr=null,br=!1,wl=null,mf={onError:function(e){Bn=!0,Gr=e}};function vf(e,t,n,r,o,l,i,u,a){Bn=!1,Gr=null,pf.apply(mf,arguments)}function hf(e,t,n,r,o,l,i,u,a){if(vf.apply(this,arguments),Bn){if(Bn){var c=Gr;Bn=!1,Gr=null}else throw Error(F(198));br||(br=!0,wl=c)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $a(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(Ht(e)!==e)throw Error(F(188))}function yf(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return su(o),e;if(l===r)return su(o),t;l=l.sibling}throw Error(F(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i){for(u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Xa(e){return e=yf(e),e!==null?Ha(e):null}function Ha(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ha(e);if(t!==null)return t;e=e.sibling}return null}var Ya=ke.unstable_scheduleCallback,cu=ke.unstable_cancelCallback,gf=ke.unstable_shouldYield,Sf=ke.unstable_requestPaint,K=ke.unstable_now,Ff=ke.unstable_getCurrentPriorityLevel,mi=ke.unstable_ImmediatePriority,Qa=ke.unstable_UserBlockingPriority,Kr=ke.unstable_NormalPriority,_f=ke.unstable_LowPriority,Ga=ke.unstable_IdlePriority,Fo=null,Qe=null;function xf(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Fo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Ef,Cf=Math.log,wf=Math.LN2;function Ef(e){return e>>>=0,e===0?32:31-(Cf(e)/wf|0)|0}var Cr=64,wr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~o;u!==0?r=Un(u):(l&=i,l!==0&&(r=Un(l)))}else i=n&~o,i!==0?r=Un(i):l!==0&&(r=Un(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),o=1<<n,r|=e[n],t&=~o;return r}function kf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ae(l),u=1<<i,a=o[i];a===-1?(!(u&n)||u&r)&&(o[i]=kf(u,t)):a<=t&&(e.expiredLanes|=u),l&=~u}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ba(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function Tf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ae(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function vi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var I=0;function Ka(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qa,hi,Za,es,ts,kl=!1,Er=[],yt=null,gt=null,St=null,qn=new Map,Zn=new Map,pt=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function Rn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=vr(t),t!==null&&hi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Rf(e,t,n,r,o){switch(t){case"focusin":return yt=Rn(yt,e,t,n,r,o),!0;case"dragenter":return gt=Rn(gt,e,t,n,r,o),!0;case"mouseover":return St=Rn(St,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return qn.set(l,Rn(qn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Zn.set(l,Rn(Zn.get(l)||null,e,t,n,r,o)),!0}return!1}function ns(e){var t=Ot(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=$a(n),t!==null){e.blockedOn=t,ts(e.priority,function(){Za(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_l=r,n.target.dispatchEvent(r),_l=null}else return t=vr(n),t!==null&&hi(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){Ur(e)&&n.delete(t)}function Nf(){kl=!1,yt!==null&&Ur(yt)&&(yt=null),gt!==null&&Ur(gt)&&(gt=null),St!==null&&Ur(St)&&(St=null),qn.forEach(du),Zn.forEach(du)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Nf)))}function er(e){function t(o){return Nn(o,e)}if(0<Er.length){Nn(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&Nn(yt,e),gt!==null&&Nn(gt,e),St!==null&&Nn(St,e),qn.forEach(t),Zn.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)ns(n),n.blockedOn===null&&pt.shift()}var cn=at.ReactCurrentBatchConfig,Zr=!0;function Lf(e,t,n,r){var o=I,l=cn.transition;cn.transition=null;try{I=1,yi(e,t,n,r)}finally{I=o,cn.transition=l}}function Df(e,t,n,r){var o=I,l=cn.transition;cn.transition=null;try{I=4,yi(e,t,n,r)}finally{I=o,cn.transition=l}}function yi(e,t,n,r){if(Zr){var o=zl(e,t,n,r);if(o===null)Ko(e,t,r,eo,n),fu(e,r);else if(Rf(o,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<Pf.indexOf(e)){for(;o!==null;){var l=vr(o);if(l!==null&&qa(l),l=zl(e,t,n,r),l===null&&Ko(e,t,r,eo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Ko(e,t,r,null,n)}}var eo=null;function zl(e,t,n,r){if(eo=null,e=pi(r),e=Ot(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$a(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function rs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case mi:return 1;case Qa:return 4;case Kr:case _f:return 16;case Ga:return 536870912;default:return 16}default:return 16}}var vt=null,gi=null,Ar=null;function os(){if(Ar)return Ar;var e,t=gi,n=t.length,r,o="value"in vt?vt.value:vt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Ar=o.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function pu(){return!1}function Te(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?kr:pu,this.isPropagationStopped=pu,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Si=Te(_n),mr=Q({},_n,{view:0,detail:0}),jf=Te(mr),Vo,Wo,Ln,_o=Q({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Vo=e.screenX-Ln.screenX,Wo=e.screenY-Ln.screenY):Wo=Vo=0,Ln=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),mu=Te(_o),Of=Q({},_o,{dataTransfer:0}),Mf=Te(Of),If=Q({},mr,{relatedTarget:0}),$o=Te(If),Uf=Q({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),Af=Te(Uf),Jf=Q({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bf=Te(Jf),Vf=Q({},_n,{data:0}),vu=Te(Vf),Wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$f={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xf[e])?!!t[e]:!1}function Fi(){return Hf}var Yf=Q({},mr,{key:function(e){if(e.key){var t=Wf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$f[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fi,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qf=Te(Yf),Gf=Q({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=Te(Gf),bf=Q({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fi}),Kf=Te(bf),qf=Q({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zf=Te(qf),e0=Q({},_o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Te(e0),n0=[9,13,27,32],_i=ot&&"CompositionEvent"in window,Vn=null;ot&&"documentMode"in document&&(Vn=document.documentMode);var r0=ot&&"TextEvent"in window&&!Vn,ls=ot&&(!_i||Vn&&8<Vn&&11>=Vn),yu=String.fromCharCode(32),gu=!1;function is(e,t){switch(e){case"keyup":return n0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function us(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function o0(e,t){switch(e){case"compositionend":return us(t);case"keypress":return t.which!==32?null:(gu=!0,yu);case"textInput":return e=t.data,e===yu&&gu?null:e;default:return null}}function l0(e,t){if(bt)return e==="compositionend"||!_i&&is(e,t)?(e=os(),Ar=gi=vt=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ls&&t.locale!=="ko"?null:t.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i0[e.type]:t==="textarea"}function as(e,t,n,r){Aa(r),t=to(t,"onChange"),0<t.length&&(n=new Si("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,tr=null;function u0(e){Ss(e,0)}function xo(e){var t=Zt(e);if(La(t))return e}function a0(e,t){if(e==="change")return t}var ss=!1;if(ot){var Xo;if(ot){var Ho="oninput"in document;if(!Ho){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),Ho=typeof Fu.oninput=="function"}Xo=Ho}else Xo=!1;ss=Xo&&(!document.documentMode||9<document.documentMode)}function _u(){Wn&&(Wn.detachEvent("onpropertychange",cs),tr=Wn=null)}function cs(e){if(e.propertyName==="value"&&xo(tr)){var t=[];as(t,tr,e,pi(e)),Wa(u0,t)}}function s0(e,t,n){e==="focusin"?(_u(),Wn=t,tr=n,Wn.attachEvent("onpropertychange",cs)):e==="focusout"&&_u()}function c0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(tr)}function f0(e,t){if(e==="click")return xo(t)}function d0(e,t){if(e==="input"||e==="change")return xo(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:p0;function nr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!sl.call(t,o)||!Be(e[o],t[o]))return!1}return!0}function xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,t){var n=xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xu(n)}}function fs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ds(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function m0(e){var t=ds(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fs(n.ownerDocument.documentElement,n)){if(r!==null&&xi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Cu(n,l);var i=Cu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var v0=ot&&"documentMode"in document&&11>=document.documentMode,Kt=null,Tl=null,$n=null,Pl=!1;function wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||Kt==null||Kt!==Qr(r)||(r=Kt,"selectionStart"in r&&xi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&nr($n,r)||($n=r,r=to(Tl,"onSelect"),0<r.length&&(t=new Si("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},Yo={},ps={};ot&&(ps=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function Co(e){if(Yo[e])return Yo[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ps)return Yo[e]=t[n];return e}var ms=Co("animationend"),vs=Co("animationiteration"),hs=Co("animationstart"),ys=Co("transitionend"),gs=new Map,Eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){gs.set(e,t),Xt(t,[e])}for(var Qo=0;Qo<Eu.length;Qo++){var Go=Eu[Qo],h0=Go.toLowerCase(),y0=Go[0].toUpperCase()+Go.slice(1);zt(h0,"on"+y0)}zt(ms,"onAnimationEnd");zt(vs,"onAnimationIteration");zt(hs,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(ys,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hf(r,t,void 0,e),e.currentTarget=null}function Ss(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==l&&o.isPropagationStopped())break e;ku(o,u,c),l=a}else for(i=0;i<r.length;i++){if(u=r[i],a=u.instance,c=u.currentTarget,u=u.listener,a!==l&&o.isPropagationStopped())break e;ku(o,u,c),l=a}}}if(br)throw e=wl,br=!1,wl=null,e}function B(e,t){var n=t[jl];n===void 0&&(n=t[jl]=new Set);var r=e+"__bubble";n.has(r)||(Fs(t,e,2,!1),n.add(r))}function bo(e,t,n){var r=0;t&&(r|=4),Fs(n,e,r,t)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Tr]){e[Tr]=!0,za.forEach(function(n){n!=="selectionchange"&&(g0.has(n)||bo(n,!1,e),bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tr]||(t[Tr]=!0,bo("selectionchange",!1,t))}}function Fs(e,t,n,r){switch(rs(t)){case 1:var o=Lf;break;case 4:o=Df;break;default:o=yi}n=o.bind(null,t,n,e),o=void 0,!Cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ko(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;u!==null;){if(i=Ot(u),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}u=u.parentNode}}r=r.return}Wa(function(){var c=l,m=pi(n),p=[];e:{var v=gs.get(e);if(v!==void 0){var S=Si,h=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":S=Qf;break;case"focusin":h="focus",S=$o;break;case"focusout":h="blur",S=$o;break;case"beforeblur":case"afterblur":S=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Kf;break;case ms:case vs:case hs:S=Af;break;case ys:S=Zf;break;case"scroll":S=jf;break;case"wheel":S=t0;break;case"copy":case"cut":case"paste":S=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=hu}var _=(t&4)!==0,R=!_&&e==="scroll",f=_?v!==null?v+"Capture":null:v;_=[];for(var s=c,d;s!==null;){d=s;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=Kn(s,f),y!=null&&_.push(or(s,y,d)))),R)break;s=s.return}0<_.length&&(v=new S(v,h,null,n,m),p.push({event:v,listeners:_}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&n!==_l&&(h=n.relatedTarget||n.fromElement)&&(Ot(h)||h[lt]))break e;if((S||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,S?(h=n.relatedTarget||n.toElement,S=c,h=h?Ot(h):null,h!==null&&(R=Ht(h),h!==R||h.tag!==5&&h.tag!==6)&&(h=null)):(S=null,h=c),S!==h)){if(_=mu,y="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(_=hu,y="onPointerLeave",f="onPointerEnter",s="pointer"),R=S==null?v:Zt(S),d=h==null?v:Zt(h),v=new _(y,s+"leave",S,n,m),v.target=R,v.relatedTarget=d,y=null,Ot(m)===c&&(_=new _(f,s+"enter",h,n,m),_.target=d,_.relatedTarget=R,y=_),R=y,S&&h)t:{for(_=S,f=h,s=0,d=_;d;d=Yt(d))s++;for(d=0,y=f;y;y=Yt(y))d++;for(;0<s-d;)_=Yt(_),s--;for(;0<d-s;)f=Yt(f),d--;for(;s--;){if(_===f||f!==null&&_===f.alternate)break t;_=Yt(_),f=Yt(f)}_=null}else _=null;S!==null&&zu(p,v,S,_,!1),h!==null&&R!==null&&zu(p,R,h,_,!0)}}e:{if(v=c?Zt(c):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var g=a0;else if(Su(v))if(ss)g=d0;else{g=c0;var x=s0}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(g=f0);if(g&&(g=g(e,c))){as(p,g,n,m);break e}x&&x(e,v,c),e==="focusout"&&(x=v._wrapperState)&&x.controlled&&v.type==="number"&&hl(v,"number",v.value)}switch(x=c?Zt(c):window,e){case"focusin":(Su(x)||x.contentEditable==="true")&&(Kt=x,Tl=c,$n=null);break;case"focusout":$n=Tl=Kt=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,wu(p,n,m);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":wu(p,n,m)}var k;if(_i)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else bt?is(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(ls&&n.locale!=="ko"&&(bt||w!=="onCompositionStart"?w==="onCompositionEnd"&&bt&&(k=os()):(vt=m,gi="value"in vt?vt.value:vt.textContent,bt=!0)),x=to(c,w),0<x.length&&(w=new vu(w,e,null,n,m),p.push({event:w,listeners:x}),k?w.data=k:(k=us(n),k!==null&&(w.data=k)))),(k=r0?o0(e,n):l0(e,n))&&(c=to(c,"onBeforeInput"),0<c.length&&(m=new vu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=k))}Ss(p,t)})}function or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Kn(e,n),l!=null&&r.unshift(or(e,l,o)),l=Kn(e,t),l!=null&&r.push(or(e,l,o))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,o?(a=Kn(n,l),a!=null&&i.unshift(or(n,a,u))):o||(a=Kn(n,l),a!=null&&i.push(or(n,a,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var S0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function Tu(e){return(typeof e=="string"?e:""+e).replace(S0,`
`).replace(F0,"")}function Pr(e,t,n){if(t=Tu(t),Tu(e)!==t&&n)throw Error(F(425))}function no(){}var Rl=null,Nl=null;function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(C0)}:Dl;function C0(e){setTimeout(function(){throw e})}function qo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);er(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+xn,lr="__reactProps$"+xn,lt="__reactContainer$"+xn,jl="__reactEvents$"+xn,w0="__reactListeners$"+xn,E0="__reactHandles$"+xn;function Ot(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ru(e);e!==null;){if(n=e[Ye])return n;e=Ru(e)}return t}e=n,n=e.parentNode}return null}function vr(e){return e=e[Ye]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function wo(e){return e[lr]||null}var Ol=[],en=-1;function Tt(e){return{current:e}}function V(e){0>en||(e.current=Ol[en],Ol[en]=null,en--)}function A(e,t){en++,Ol[en]=e.current,e.current=t}var kt={},ce=Tt(kt),Se=Tt(!1),Jt=kt;function mn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function ro(){V(Se),V(ce)}function Nu(e,t,n){if(ce.current!==kt)throw Error(F(168));A(ce,t),A(Se,n)}function _s(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(F(108,sf(e)||"Unknown",o));return Q({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Jt=ce.current,A(ce,e),A(Se,Se.current),!0}function Lu(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=_s(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,V(Se),V(ce),A(ce,e)):V(Se),A(Se,n)}var Ze=null,Eo=!1,Zo=!1;function xs(e){Ze===null?Ze=[e]:Ze.push(e)}function k0(e){Eo=!0,xs(e)}function Pt(){if(!Zo&&Ze!==null){Zo=!0;var e=0,t=I;try{var n=Ze;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,Eo=!1}catch(o){throw Ze!==null&&(Ze=Ze.slice(e+1)),Ya(mi,Pt),o}finally{I=t,Zo=!1}}return null}var tn=[],nn=0,lo=null,io=0,Pe=[],Re=0,Bt=null,tt=1,nt="";function Lt(e,t){tn[nn++]=io,tn[nn++]=lo,lo=e,io=t}function Cs(e,t,n){Pe[Re++]=tt,Pe[Re++]=nt,Pe[Re++]=Bt,Bt=e;var r=tt;e=nt;var o=32-Ae(r)-1;r&=~(1<<o),n+=1;var l=32-Ae(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,tt=1<<32-Ae(t)+o|n<<o|r,nt=l+e}else tt=1<<l|n<<o|r,nt=e}function Ci(e){e.return!==null&&(Lt(e,1),Cs(e,1,0))}function wi(e){for(;e===lo;)lo=tn[--nn],tn[nn]=null,io=tn[--nn],tn[nn]=null;for(;e===Bt;)Bt=Pe[--Re],Pe[Re]=null,nt=Pe[--Re],Pe[Re]=null,tt=Pe[--Re],Pe[Re]=null}var Ee=null,we=null,$=!1,Ue=null;function ws(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,we=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,we=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Il(e){if($){var t=we;if(t){var n=t;if(!Du(e,t)){if(Ml(e))throw Error(F(418));t=Ft(n.nextSibling);var r=Ee;t&&Du(e,t)?ws(r,n):(e.flags=e.flags&-4097|2,$=!1,Ee=e)}}else{if(Ml(e))throw Error(F(418));e.flags=e.flags&-4097|2,$=!1,Ee=e}}}function ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Rr(e){if(e!==Ee)return!1;if(!$)return ju(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ll(e.type,e.memoizedProps)),t&&(t=we)){if(Ml(e))throw Es(),Error(F(418));for(;t;)ws(e,t),t=Ft(t.nextSibling)}if(ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=Ee?Ft(e.stateNode.nextSibling):null;return!0}function Es(){for(var e=we;e;)e=Ft(e.nextSibling)}function vn(){we=Ee=null,$=!1}function Ei(e){Ue===null?Ue=[e]:Ue.push(e)}var z0=at.ReactCurrentBatchConfig;function Dn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var u=o.refs;i===null?delete u[l]:u[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Nr(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ou(e){var t=e._init;return t(e._payload)}function ks(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function o(f,s){return f=wt(f,s),f.index=0,f.sibling=null,f}function l(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,s,d,y){return s===null||s.tag!==6?(s=il(d,f.mode,y),s.return=f,s):(s=o(s,d),s.return=f,s)}function a(f,s,d,y){var g=d.type;return g===Gt?m(f,s,d.props.children,y,d.key):s!==null&&(s.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ft&&Ou(g)===s.type)?(y=o(s,d.props),y.ref=Dn(f,s,d),y.return=f,y):(y=Yr(d.type,d.key,d.props,null,f.mode,y),y.ref=Dn(f,s,d),y.return=f,y)}function c(f,s,d,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=ul(d,f.mode,y),s.return=f,s):(s=o(s,d.children||[]),s.return=f,s)}function m(f,s,d,y,g){return s===null||s.tag!==7?(s=At(d,f.mode,y,g),s.return=f,s):(s=o(s,d),s.return=f,s)}function p(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=il(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Fr:return d=Yr(s.type,s.key,s.props,null,f.mode,d),d.ref=Dn(f,null,s),d.return=f,d;case Qt:return s=ul(s,f.mode,d),s.return=f,s;case ft:var y=s._init;return p(f,y(s._payload),d)}if(In(s)||Tn(s))return s=At(s,f.mode,d,null),s.return=f,s;Nr(f,s)}return null}function v(f,s,d,y){var g=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return g!==null?null:u(f,s,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fr:return d.key===g?a(f,s,d,y):null;case Qt:return d.key===g?c(f,s,d,y):null;case ft:return g=d._init,v(f,s,g(d._payload),y)}if(In(d)||Tn(d))return g!==null?null:m(f,s,d,y,null);Nr(f,d)}return null}function S(f,s,d,y,g){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,u(s,f,""+y,g);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fr:return f=f.get(y.key===null?d:y.key)||null,a(s,f,y,g);case Qt:return f=f.get(y.key===null?d:y.key)||null,c(s,f,y,g);case ft:var x=y._init;return S(f,s,d,x(y._payload),g)}if(In(y)||Tn(y))return f=f.get(d)||null,m(s,f,y,g,null);Nr(s,y)}return null}function h(f,s,d,y){for(var g=null,x=null,k=s,w=s=0,M=null;k!==null&&w<d.length;w++){k.index>w?(M=k,k=null):M=k.sibling;var N=v(f,k,d[w],y);if(N===null){k===null&&(k=M);break}e&&k&&N.alternate===null&&t(f,k),s=l(N,s,w),x===null?g=N:x.sibling=N,x=N,k=M}if(w===d.length)return n(f,k),$&&Lt(f,w),g;if(k===null){for(;w<d.length;w++)k=p(f,d[w],y),k!==null&&(s=l(k,s,w),x===null?g=k:x.sibling=k,x=k);return $&&Lt(f,w),g}for(k=r(f,k);w<d.length;w++)M=S(k,f,w,d[w],y),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?w:M.key),s=l(M,s,w),x===null?g=M:x.sibling=M,x=M);return e&&k.forEach(function(fe){return t(f,fe)}),$&&Lt(f,w),g}function _(f,s,d,y){var g=Tn(d);if(typeof g!="function")throw Error(F(150));if(d=g.call(d),d==null)throw Error(F(151));for(var x=g=null,k=s,w=s=0,M=null,N=d.next();k!==null&&!N.done;w++,N=d.next()){k.index>w?(M=k,k=null):M=k.sibling;var fe=v(f,k,N.value,y);if(fe===null){k===null&&(k=M);break}e&&k&&fe.alternate===null&&t(f,k),s=l(fe,s,w),x===null?g=fe:x.sibling=fe,x=fe,k=M}if(N.done)return n(f,k),$&&Lt(f,w),g;if(k===null){for(;!N.done;w++,N=d.next())N=p(f,N.value,y),N!==null&&(s=l(N,s,w),x===null?g=N:x.sibling=N,x=N);return $&&Lt(f,w),g}for(k=r(f,k);!N.done;w++,N=d.next())N=S(k,f,w,N.value,y),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?w:N.key),s=l(N,s,w),x===null?g=N:x.sibling=N,x=N);return e&&k.forEach(function(Ve){return t(f,Ve)}),$&&Lt(f,w),g}function R(f,s,d,y){if(typeof d=="object"&&d!==null&&d.type===Gt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Fr:e:{for(var g=d.key,x=s;x!==null;){if(x.key===g){if(g=d.type,g===Gt){if(x.tag===7){n(f,x.sibling),s=o(x,d.props.children),s.return=f,f=s;break e}}else if(x.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ft&&Ou(g)===x.type){n(f,x.sibling),s=o(x,d.props),s.ref=Dn(f,x,d),s.return=f,f=s;break e}n(f,x);break}else t(f,x);x=x.sibling}d.type===Gt?(s=At(d.props.children,f.mode,y,d.key),s.return=f,f=s):(y=Yr(d.type,d.key,d.props,null,f.mode,y),y.ref=Dn(f,s,d),y.return=f,f=y)}return i(f);case Qt:e:{for(x=d.key;s!==null;){if(s.key===x)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=o(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=ul(d,f.mode,y),s.return=f,f=s}return i(f);case ft:return x=d._init,R(f,s,x(d._payload),y)}if(In(d))return h(f,s,d,y);if(Tn(d))return _(f,s,d,y);Nr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=o(s,d),s.return=f,f=s):(n(f,s),s=il(d,f.mode,y),s.return=f,f=s),i(f)):n(f,s)}return R}var hn=ks(!0),zs=ks(!1),uo=Tt(null),ao=null,rn=null,ki=null;function zi(){ki=rn=ao=null}function Ti(e){var t=uo.current;V(uo),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){ao=e,ki=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(ki!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(ao===null)throw Error(F(308));rn=e,ao.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Mt=null;function Pi(e){Mt===null?Mt=[e]:Mt.push(e)}function Ts(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Pi(t)):(n.next=o.next,o.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function Ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ps(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,it(e,n)}return o=r.interleaved,o===null?(t.next=t,Pi(r)):(t.next=o.next,o.next=t),r.interleaved=t,it(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vi(e,n)}}function Mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var o=e.updateQueue;dt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var a=u,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==i&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=a))}if(l!==null){var p=o.baseState;i=0,m=c=a=null,u=l;do{var v=u.lane,S=u.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:S,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var h=e,_=u;switch(v=t,S=n,_.tag){case 1:if(h=_.payload,typeof h=="function"){p=h.call(S,p,v);break e}p=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=_.payload,v=typeof h=="function"?h.call(S,p,v):h,v==null)break e;p=Q({},p,v);break e;case 2:dt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[u]:v.push(u))}else S={eventTime:S,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=S,a=p):m=m.next=S,i|=v;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;v=u,u=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(1);if(m===null&&(a=p),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Wt|=i,e.lanes=i,e.memoizedState=p}}function Iu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(F(191,o));o.call(r)}}}var hr={},Ge=Tt(hr),ir=Tt(hr),ur=Tt(hr);function It(e){if(e===hr)throw Error(F(174));return e}function Ni(e,t){switch(A(ur,t),A(ir,e),A(Ge,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}V(Ge),A(Ge,t)}function yn(){V(Ge),V(ir),V(ur)}function Rs(e){It(ur.current);var t=It(Ge.current),n=gl(t,e.type);t!==n&&(A(ir,e),A(Ge,n))}function Li(e){ir.current===e&&(V(Ge),V(ir))}var H=Tt(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function Di(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Vr=at.ReactCurrentDispatcher,tl=at.ReactCurrentBatchConfig,Vt=0,Y=null,Z=null,te=null,fo=!1,Xn=!1,ar=0,T0=0;function ue(){throw Error(F(321))}function ji(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Oi(e,t,n,r,o,l){if(Vt=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?L0:D0,e=n(r,o),Xn){l=0;do{if(Xn=!1,ar=0,25<=l)throw Error(F(301));l+=1,te=Z=null,t.updateQueue=null,Vr.current=j0,e=n(r,o)}while(Xn)}if(Vr.current=po,t=Z!==null&&Z.next!==null,Vt=0,te=Z=Y=null,fo=!1,t)throw Error(F(300));return e}function Mi(){var e=ar!==0;return ar=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?Y.memoizedState=te=e:te=te.next=e,te}function je(){if(Z===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=te===null?Y.memoizedState:te.next;if(t!==null)te=t,Z=e;else{if(e===null)throw Error(F(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?Y.memoizedState=te=e:te=te.next=e}return te}function sr(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=je(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Z,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var u=i=null,a=null,c=l;do{var m=c.lane;if((Vt&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=p,i=r):a=a.next=p,Y.lanes|=m,Wt|=m}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=u,Be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Y.lanes|=l,Wt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=je(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Be(l,t.memoizedState)||(ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ns(){}function Ls(e,t){var n=Y,r=je(),o=t(),l=!Be(r.memoizedState,o);if(l&&(r.memoizedState=o,ge=!0),r=r.queue,Ii(Os.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,cr(9,js.bind(null,n,r,o,t),void 0,null),ne===null)throw Error(F(349));Vt&30||Ds(n,t,o)}return o}function Ds(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function js(e,t,n,r){t.value=n,t.getSnapshot=r,Ms(t)&&Is(e)}function Os(e,t,n){return n(function(){Ms(t)&&Is(e)})}function Ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Is(e){var t=it(e,1);t!==null&&Je(t,e,1,-1)}function Uu(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=N0.bind(null,Y,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Us(){return je().memoizedState}function Wr(e,t,n,r){var o=He();Y.flags|=e,o.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var o=je();r=r===void 0?null:r;var l=void 0;if(Z!==null){var i=Z.memoizedState;if(l=i.destroy,r!==null&&ji(r,i.deps)){o.memoizedState=cr(t,n,l,r);return}}Y.flags|=e,o.memoizedState=cr(1|t,n,l,r)}function Au(e,t){return Wr(8390656,8,e,t)}function Ii(e,t){return ko(2048,8,e,t)}function As(e,t){return ko(4,2,e,t)}function Js(e,t){return ko(4,4,e,t)}function Bs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vs(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,Bs.bind(null,t,e),n)}function Ui(){}function Ws(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ji(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $s(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ji(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xs(e,t,n){return Vt&21?(Be(n,t)||(n=ba(),Y.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function P0(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{I=n,tl.transition=r}}function Hs(){return je().memoizedState}function R0(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ys(e))Qs(t,n);else if(n=Ts(e,t,n,r),n!==null){var o=pe();Je(n,e,r,o),Gs(n,t,r)}}function N0(e,t,n){var r=Ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ys(e))Qs(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,u=l(i,n);if(o.hasEagerState=!0,o.eagerState=u,Be(u,i)){var a=t.interleaved;a===null?(o.next=o,Pi(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Ts(e,t,o,r),n!==null&&(o=pe(),Je(n,e,r,o),Gs(n,t,r))}}function Ys(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Qs(e,t){Xn=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vi(e,n)}}var po={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},L0={readContext:De,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Au,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,Bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=R0.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Uu,useDebugValue:Ui,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Uu(!1),t=e[0];return e=P0.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=He();if($){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),ne===null)throw Error(F(349));Vt&30||Ds(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Au(Os.bind(null,r,l,e),[e]),r.flags|=2048,cr(9,js.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=He(),t=ne.identifierPrefix;if($){var n=nt,r=tt;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=T0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},D0={readContext:De,useCallback:Ws,useContext:De,useEffect:Ii,useImperativeHandle:Vs,useInsertionEffect:As,useLayoutEffect:Js,useMemo:$s,useReducer:nl,useRef:Us,useState:function(){return nl(sr)},useDebugValue:Ui,useDeferredValue:function(e){var t=je();return Xs(t,Z.memoizedState,e)},useTransition:function(){var e=nl(sr)[0],t=je().memoizedState;return[e,t]},useMutableSource:Ns,useSyncExternalStore:Ls,useId:Hs,unstable_isNewReconciler:!1},j0={readContext:De,useCallback:Ws,useContext:De,useEffect:Ii,useImperativeHandle:Vs,useInsertionEffect:As,useLayoutEffect:Js,useMemo:$s,useReducer:rl,useRef:Us,useState:function(){return rl(sr)},useDebugValue:Ui,useDeferredValue:function(e){var t=je();return Z===null?t.memoizedState=e:Xs(t,Z.memoizedState,e)},useTransition:function(){var e=rl(sr)[0],t=je().memoizedState;return[e,t]},useMutableSource:Ns,useSyncExternalStore:Ls,useId:Hs,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),o=Ct(e),l=rt(r,o);l.payload=t,n!=null&&(l.callback=n),t=_t(e,l,o),t!==null&&(Je(t,e,o,r),Br(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),o=Ct(e),l=rt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=_t(e,l,o),t!==null&&(Je(t,e,o,r),Br(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Ct(e),o=rt(n,r);o.tag=2,t!=null&&(o.callback=t),t=_t(e,o,r),t!==null&&(Je(t,e,r,n),Br(t,e,r))}};function Ju(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(o,l):!0}function bs(e,t,n){var r=!1,o=kt,l=t.contextType;return typeof l=="object"&&l!==null?l=De(l):(o=Fe(t)?Jt:ce.current,r=t.contextTypes,l=(r=r!=null)?mn(e,o):kt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function Jl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ri(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=De(l):(l=Fe(t)?Jt:ce.current,o.context=mn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Al(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zo.enqueueReplaceState(o,o.state,null),so(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=af(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function Ks(e,t,n){n=rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,Kl=r),Bl(e,t)},n}function qs(e,t,n){n=rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new O0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=G0.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $u(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var M0=at.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?zs(t,null,n,r):hn(t,e.child,n,r)}function Xu(e,t,n,r,o){n=n.render;var l=t.ref;return fn(t,o),r=Oi(e,t,n,r,l,o),n=Mi(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ut(e,t,o)):($&&n&&Ci(t),t.flags|=1,de(e,t,r,o),t.child)}function Hu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Hi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Zs(e,t,l,r,o)):(e=Yr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(i,r)&&e.ref===t.ref)return ut(e,t,o)}return t.flags|=1,e=wt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Zs(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(nr(l,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,ut(e,t,o)}return Vl(e,t,n,r,o)}function ec(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(ln,Ce),Ce|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(ln,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,A(ln,Ce),Ce|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,A(ln,Ce),Ce|=r;return de(e,t,o,n),t.child}function tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,o){var l=Fe(n)?Jt:ce.current;return l=mn(t,l),fn(t,o),n=Oi(e,t,n,r,l,o),r=Mi(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ut(e,t,o)):($&&r&&Ci(t),t.flags|=1,de(e,t,n,o),t.child)}function Yu(e,t,n,r,o){if(Fe(n)){var l=!0;oo(t)}else l=!1;if(fn(t,o),t.stateNode===null)$r(e,t),bs(t,n,r),Jl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=Fe(n)?Jt:ce.current,c=mn(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Bu(t,i,r,c),dt=!1;var v=t.memoizedState;i.state=v,so(t,r,i,o),a=t.memoizedState,u!==r||v!==a||Se.current||dt?(typeof m=="function"&&(Al(t,n,m,r),a=t.memoizedState),(u=dt||Ju(t,n,u,r,v,a,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ps(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Me(t.type,u),i.props=c,p=t.pendingProps,v=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=De(a):(a=Fe(n)?Jt:ce.current,a=mn(t,a));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==p||v!==a)&&Bu(t,i,r,a),dt=!1,v=t.memoizedState,i.state=v,so(t,r,i,o);var h=t.memoizedState;u!==p||v!==h||Se.current||dt?(typeof S=="function"&&(Al(t,n,S,r),h=t.memoizedState),(c=dt||Ju(t,n,c,r,v,h,a)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,h,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,h,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,l,o)}function Wl(e,t,n,r,o,l){tc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Lu(t,n,!1),ut(e,t,l);r=t.stateNode,M0.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=hn(t,e.child,null,l),t.child=hn(t,null,u,l)):de(e,t,u,l),t.memoizedState=r.state,o&&Lu(t,n,!0),t.child}function nc(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),Ni(e,t.containerInfo)}function Qu(e,t,n,r,o){return vn(),Ei(o),t.flags|=256,de(e,t,n,r),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function rc(e,t,n){var r=t.pendingProps,o=H.current,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),A(H,o&1),e===null)return Il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ro(i,r,0,null),e=At(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Xl(n),t.memoizedState=$l,e):Ai(t,i));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return I0(e,t,i,r,u,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,u=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=wt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?l=wt(u,l):(l=At(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Xl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=$l,r}return l=e.child,e=l.sibling,r=wt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ai(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lr(e,t,n,r){return r!==null&&Ei(r),hn(t,e.child,null,n),e=Ai(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function I0(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(F(422))),Lr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ro({mode:"visible",children:r.children},o,0,null),l=At(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&hn(t,e.child,null,i),t.child.memoizedState=Xl(i),t.memoizedState=$l,l);if(!(t.mode&1))return Lr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(F(419)),r=ol(l,r,void 0),Lr(e,t,i,r)}if(u=(i&e.childLanes)!==0,ge||u){if(r=ne,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,it(e,o),Je(r,e,o,-1))}return Xi(),r=ol(Error(F(421))),Lr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=b0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,we=Ft(o.nextSibling),Ee=t,$=!0,Ue=null,e!==null&&(Pe[Re++]=tt,Pe[Re++]=nt,Pe[Re++]=Bt,tt=e.id,nt=e.overflow,Bt=t),t=Ai(t,r.children),t.flags|=4096,t)}function Gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function ll(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function oc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(de(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,n,t);else if(e.tag===19)Gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(H,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ll(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&co(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ll(t,!0,n,null,l);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function U0(e,t,n){switch(t.tag){case 3:nc(t),vn();break;case 5:Rs(t);break;case 1:Fe(t.type)&&oo(t);break;case 4:Ni(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;A(uo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?rc(e,t,n):(A(H,H.current&1),e=ut(e,t,n),e!==null?e.sibling:null);A(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return oc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),A(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,ec(e,t,n)}return ut(e,t,n)}var lc,Hl,ic,uc;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};ic=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,It(Ge.current);var l=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),l=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),l=[];break;case"textarea":o=yl(e,o),r=yl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}Sl(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(u=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&B("scroll",e),l||u===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function jn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function A0(e,t,n){var r=t.pendingProps;switch(wi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return Fe(t.type)&&ro(),ae(t),null;case 3:return r=t.stateNode,yn(),V(Se),V(ce),Di(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(ei(Ue),Ue=null))),Hl(e,t),ae(t),null;case 5:Li(t);var o=It(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)ic(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return ae(t),null}if(e=It(Ge.current),Rr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ye]=t,r[lr]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<An.length;o++)B(An[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ou(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":iu(r,l),B("invalid",r)}Sl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Pr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Pr(r.textContent,u,e),o=["children",""+u]):Gn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":_r(r),lu(r,l,!0);break;case"textarea":_r(r),uu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=no)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Oa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ye]=t,e[lr]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Fl(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<An.length;o++)B(An[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":ou(e,r),o=ml(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),B("invalid",e);break;case"textarea":iu(e,r),o=yl(e,r),B("invalid",e);break;default:o=r}Sl(n,o),u=o;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?Ua(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ma(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&bn(e,a):typeof a=="number"&&bn(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Gn.hasOwnProperty(l)?a!=null&&l==="onScroll"&&B("scroll",e):a!=null&&si(e,l,a,i))}switch(n){case"input":_r(e),lu(e,r,!1);break;case"textarea":_r(e),uu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?un(e,!!r.multiple,l,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=no)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=It(ur.current),It(Ge.current),Rr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(l=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return ae(t),null;case 13:if(V(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&we!==null&&t.mode&1&&!(t.flags&128))Es(),vn(),t.flags|=98560,l=!1;else if(l=Rr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(F(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(F(317));l[Ye]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),l=!1}else Ue!==null&&(ei(Ue),Ue=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?ee===0&&(ee=3):Xi())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return yn(),Hl(e,t),e===null&&rr(t.stateNode.containerInfo),ae(t),null;case 10:return Ti(t.type._context),ae(t),null;case 17:return Fe(t.type)&&ro(),ae(t),null;case 19:if(V(H),l=t.memoizedState,l===null)return ae(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)jn(l,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=co(e),i!==null){for(t.flags|=128,jn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&K()>Sn&&(t.flags|=128,r=!0,jn(l,!1),t.lanes=4194304)}else{if(!r)if(e=co(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!$)return ae(t),null}else 2*K()-l.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,jn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=K(),t.sibling=null,n=H.current,A(H,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return $i(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function J0(e,t){switch(wi(t),t.tag){case 1:return Fe(t.type)&&ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),V(Se),V(ce),Di(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Li(t),null;case 13:if(V(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(H),null;case 4:return yn(),null;case 10:return Ti(t.type._context),null;case 22:case 23:return $i(),null;case 24:return null;default:return null}}var Dr=!1,se=!1,B0=typeof WeakSet=="function"?WeakSet:Set,E=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){G(e,t,r)}}var bu=!1;function V0(e,t){if(Rl=Zr,e=ds(),xi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,u=-1,a=-1,c=0,m=0,p=e,v=null;t:for(;;){for(var S;p!==n||o!==0&&p.nodeType!==3||(u=i+o),p!==l||r!==0&&p.nodeType!==3||(a=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(S=p.firstChild)!==null;)v=p,p=S;for(;;){if(p===e)break t;if(v===n&&++c===o&&(u=i),v===l&&++m===r&&(a=i),(S=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=S}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nl={focusedElem:e,selectionRange:n},Zr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var _=h.memoizedProps,R=h.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?_:Me(t.type,_),R);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(y){G(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return h=bu,bu=!1,h}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Yl(t,n,l)}o=o.next}while(o!==r)}}function To(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ac(e){var t=e.alternate;t!==null&&(e.alternate=null,ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[lr],delete t[jl],delete t[w0],delete t[E0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sc(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}var oe=null,Ie=!1;function ct(e,t,n){for(n=n.child;n!==null;)cc(e,t,n),n=n.sibling}function cc(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Fo,n)}catch{}switch(n.tag){case 5:se||on(n,t);case 6:var r=oe,o=Ie;oe=null,ct(e,t,n),oe=r,Ie=o,oe!==null&&(Ie?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ie?(e=oe,n=n.stateNode,e.nodeType===8?qo(e.parentNode,n):e.nodeType===1&&qo(e,n),er(e)):qo(oe,n.stateNode));break;case 4:r=oe,o=Ie,oe=n.stateNode.containerInfo,Ie=!0,ct(e,t,n),oe=r,Ie=o;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Yl(n,t,i),o=o.next}while(o!==r)}ct(e,t,n);break;case 1:if(!se&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){G(n,t,u)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,ct(e,t,n),se=r):ct(e,t,n);break;default:ct(e,t,n)}}function qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new B0),t.forEach(function(r){var o=K0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:oe=u.stateNode,Ie=!1;break e;case 3:oe=u.stateNode.containerInfo,Ie=!0;break e;case 4:oe=u.stateNode.containerInfo,Ie=!0;break e}u=u.return}if(oe===null)throw Error(F(160));cc(l,i,o),oe=null,Ie=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){G(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Xe(e),r&4){try{Hn(3,e,e.return),To(3,e)}catch(_){G(e,e.return,_)}try{Hn(5,e,e.return)}catch(_){G(e,e.return,_)}}break;case 1:Oe(t,e),Xe(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(Oe(t,e),Xe(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var o=e.stateNode;try{bn(o,"")}catch(_){G(e,e.return,_)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Da(o,l),Fl(u,i);var c=Fl(u,l);for(i=0;i<a.length;i+=2){var m=a[i],p=a[i+1];m==="style"?Ua(o,p):m==="dangerouslySetInnerHTML"?Ma(o,p):m==="children"?bn(o,p):si(o,m,p,c)}switch(u){case"input":vl(o,l);break;case"textarea":ja(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?un(o,!!l.multiple,S,!1):v!==!!l.multiple&&(l.defaultValue!=null?un(o,!!l.multiple,l.defaultValue,!0):un(o,!!l.multiple,l.multiple?[]:"",!1))}o[lr]=l}catch(_){G(e,e.return,_)}}break;case 6:if(Oe(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(F(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(_){G(e,e.return,_)}}break;case 3:if(Oe(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(_){G(e,e.return,_)}break;case 4:Oe(t,e),Xe(e);break;case 13:Oe(t,e),Xe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Vi=K())),r&4&&qu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(se=(c=se)||m,Oe(t,e),se=c):Oe(t,e),Xe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(p=E=m;E!==null;){switch(v=E,S=v.child,v.tag){case 0:case 11:case 14:case 15:Hn(4,v,v.return);break;case 1:on(v,v.return);var h=v.stateNode;if(typeof h.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(_){G(r,n,_)}}break;case 5:on(v,v.return);break;case 22:if(v.memoizedState!==null){ea(p);continue}}S!==null?(S.return=v,E=S):ea(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=p.stateNode,a=p.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Ia("display",i))}catch(_){G(e,e.return,_)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(_){G(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Oe(t,e),Xe(e),r&4&&qu(e);break;case 21:break;default:Oe(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sc(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(bn(o,""),r.flags&=-33);var l=Ku(e);bl(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Ku(e);Gl(e,u,i);break;default:throw Error(F(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W0(e,t,n){E=e,dc(e)}function dc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Dr;if(!i){var u=o.alternate,a=u!==null&&u.memoizedState!==null||se;u=Dr;var c=se;if(Dr=i,(se=a)&&!c)for(E=o;E!==null;)i=E,a=i.child,i.tag===22&&i.memoizedState!==null?ta(o):a!==null?(a.return=i,E=a):ta(o);for(;l!==null;)E=l,dc(l),l=l.sibling;E=o,Dr=u,se=c}Zu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,E=l):Zu(e)}}function Zu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||To(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Iu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Iu(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&er(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}se||t.flags&512&&Ql(t)}catch(v){G(t,t.return,v)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function ea(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function ta(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{To(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){G(t,o,a)}}var l=t.return;try{Ql(t)}catch(a){G(t,l,a)}break;case 5:var i=t.return;try{Ql(t)}catch(a){G(t,i,a)}}}catch(a){G(t,t.return,a)}if(t===e){E=null;break}var u=t.sibling;if(u!==null){u.return=t.return,E=u;break}E=t.return}}var $0=Math.ceil,mo=at.ReactCurrentDispatcher,Ji=at.ReactCurrentOwner,Le=at.ReactCurrentBatchConfig,O=0,ne=null,q=null,le=0,Ce=0,ln=Tt(0),ee=0,fr=null,Wt=0,Po=0,Bi=0,Yn=null,ye=null,Vi=0,Sn=1/0,qe=null,vo=!1,Kl=null,xt=null,jr=!1,ht=null,ho=0,Qn=0,ql=null,Xr=-1,Hr=0;function pe(){return O&6?K():Xr!==-1?Xr:Xr=K()}function Ct(e){return e.mode&1?O&2&&le!==0?le&-le:z0.transition!==null?(Hr===0&&(Hr=ba()),Hr):(e=I,e!==0||(e=window.event,e=e===void 0?16:rs(e.type)),e):1}function Je(e,t,n,r){if(50<Qn)throw Qn=0,ql=null,Error(F(185));pr(e,n,r),(!(O&2)||e!==ne)&&(e===ne&&(!(O&2)&&(Po|=n),ee===4&&mt(e,le)),_e(e,r),n===1&&O===0&&!(t.mode&1)&&(Sn=K()+500,Eo&&Pt()))}function _e(e,t){var n=e.callbackNode;zf(e,t);var r=qr(e,e===ne?le:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?k0(na.bind(null,e)):xs(na.bind(null,e)),x0(function(){!(O&6)&&Pt()}),n=null;else{switch(Ka(r)){case 1:n=mi;break;case 4:n=Qa;break;case 16:n=Kr;break;case 536870912:n=Ga;break;default:n=Kr}n=Fc(n,pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pc(e,t){if(Xr=-1,Hr=0,O&6)throw Error(F(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=qr(e,e===ne?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yo(e,r);else{t=r;var o=O;O|=2;var l=vc();(ne!==e||le!==t)&&(qe=null,Sn=K()+500,Ut(e,t));do try{Y0();break}catch(u){mc(e,u)}while(1);zi(),mo.current=l,O=o,q!==null?t=0:(ne=null,le=0,t=ee)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=Zl(e,o))),t===1)throw n=fr,Ut(e,0),mt(e,r),_e(e,K()),n;if(t===6)mt(e,r);else{if(o=e.current.alternate,!(r&30)&&!X0(o)&&(t=yo(e,r),t===2&&(l=El(e),l!==0&&(r=l,t=Zl(e,l))),t===1))throw n=fr,Ut(e,0),mt(e,r),_e(e,K()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:Dt(e,ye,qe);break;case 3:if(mt(e,r),(r&130023424)===r&&(t=Vi+500-K(),10<t)){if(qr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Dl(Dt.bind(null,e,ye,qe),t);break}Dt(e,ye,qe);break;case 4:if(mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ae(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$0(r/1960))-r,10<r){e.timeoutHandle=Dl(Dt.bind(null,e,ye,qe),r);break}Dt(e,ye,qe);break;case 5:Dt(e,ye,qe);break;default:throw Error(F(329))}}}return _e(e,K()),e.callbackNode===n?pc.bind(null,e):null}function Zl(e,t){var n=Yn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=yo(e,t),e!==2&&(t=ye,ye=n,t!==null&&ei(t)),e}function ei(e){ye===null?ye=e:ye.push.apply(ye,e)}function X0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Be(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~Bi,t&=~Po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function na(e){if(O&6)throw Error(F(327));dn();var t=qr(e,0);if(!(t&1))return _e(e,K()),null;var n=yo(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=Zl(e,r))}if(n===1)throw n=fr,Ut(e,0),mt(e,t),_e(e,K()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,ye,qe),_e(e,K()),null}function Wi(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Sn=K()+500,Eo&&Pt())}}function $t(e){ht!==null&&ht.tag===0&&!(O&6)&&dn();var t=O;O|=1;var n=Le.transition,r=I;try{if(Le.transition=null,I=1,e)return e()}finally{I=r,Le.transition=n,O=t,!(O&6)&&Pt()}}function $i(){Ce=ln.current,V(ln)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_0(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(wi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:yn(),V(Se),V(ce),Di();break;case 5:Li(r);break;case 4:yn();break;case 13:V(H);break;case 19:V(H);break;case 10:Ti(r.type._context);break;case 22:case 23:$i()}n=n.return}if(ne=e,q=e=wt(e.current,null),le=Ce=t,ee=0,fr=null,Bi=Po=Wt=0,ye=Yn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Mt=null}return e}function mc(e,t){do{var n=q;try{if(zi(),Vr.current=po,fo){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}fo=!1}if(Vt=0,te=Z=Y=null,Xn=!1,ar=0,Ji.current=null,n===null||n.return===null){ee=1,fr=t,q=null;break}e:{var l=e,i=n.return,u=n,a=t;if(t=le,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=u,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Wu(i);if(S!==null){S.flags&=-257,$u(S,i,u,l,t),S.mode&1&&Vu(l,c,t),t=S,a=c;var h=t.updateQueue;if(h===null){var _=new Set;_.add(a),t.updateQueue=_}else h.add(a);break e}else{if(!(t&1)){Vu(l,c,t),Xi();break e}a=Error(F(426))}}else if($&&u.mode&1){var R=Wu(i);if(R!==null){!(R.flags&65536)&&(R.flags|=256),$u(R,i,u,l,t),Ei(gn(a,u));break e}}l=a=gn(a,u),ee!==4&&(ee=2),Yn===null?Yn=[l]:Yn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ks(l,a,t);Mu(l,f);break e;case 1:u=a;var s=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xt===null||!xt.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=qs(l,u,t);Mu(l,y);break e}}l=l.return}while(l!==null)}yc(n)}catch(g){t=g,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function vc(){var e=mo.current;return mo.current=po,e===null?po:e}function Xi(){(ee===0||ee===3||ee===2)&&(ee=4),ne===null||!(Wt&268435455)&&!(Po&268435455)||mt(ne,le)}function yo(e,t){var n=O;O|=2;var r=vc();(ne!==e||le!==t)&&(qe=null,Ut(e,t));do try{H0();break}catch(o){mc(e,o)}while(1);if(zi(),O=n,mo.current=r,q!==null)throw Error(F(261));return ne=null,le=0,ee}function H0(){for(;q!==null;)hc(q)}function Y0(){for(;q!==null&&!gf();)hc(q)}function hc(e){var t=Sc(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?yc(e):q=t,Ji.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=J0(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(n=A0(n,t,Ce),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ee===0&&(ee=5)}function Dt(e,t,n){var r=I,o=Le.transition;try{Le.transition=null,I=1,Q0(e,t,n,r)}finally{Le.transition=o,I=r}return null}function Q0(e,t,n,r){do dn();while(ht!==null);if(O&6)throw Error(F(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Tf(e,l),e===ne&&(q=ne=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,Fc(Kr,function(){return dn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Le.transition,Le.transition=null;var i=I;I=1;var u=O;O|=4,Ji.current=null,V0(e,n),fc(n,e),m0(Nl),Zr=!!Rl,Nl=Rl=null,e.current=n,W0(n),Sf(),O=u,I=i,Le.transition=l}else e.current=n;if(jr&&(jr=!1,ht=e,ho=o),l=e.pendingLanes,l===0&&(xt=null),xf(n.stateNode),_e(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,e=Kl,Kl=null,e;return ho&1&&e.tag!==0&&dn(),l=e.pendingLanes,l&1?e===ql?Qn++:(Qn=0,ql=e):Qn=0,Pt(),null}function dn(){if(ht!==null){var e=Ka(ho),t=Le.transition,n=I;try{if(Le.transition=null,I=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,ho=0,O&6)throw Error(F(331));var o=O;for(O|=4,E=e.current;E!==null;){var l=E,i=l.child;if(E.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(E=c;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Hn(8,m,l)}var p=m.child;if(p!==null)p.return=m,E=p;else for(;E!==null;){m=E;var v=m.sibling,S=m.return;if(ac(m),m===c){E=null;break}if(v!==null){v.return=S,E=v;break}E=S}}}var h=l.alternate;if(h!==null){var _=h.child;if(_!==null){h.child=null;do{var R=_.sibling;_.sibling=null,_=R}while(_!==null)}}E=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,E=i;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Hn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,E=f;break e}E=l.return}}var s=e.current;for(E=s;E!==null;){i=E;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,E=d;else e:for(i=s;E!==null;){if(u=E,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:To(9,u)}}catch(g){G(u,u.return,g)}if(u===i){E=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,E=y;break e}E=u.return}}if(O=o,Pt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Fo,e)}catch{}r=!0}return r}finally{I=n,Le.transition=t}}return!1}function ra(e,t,n){t=gn(n,t),t=Ks(e,t,1),e=_t(e,t,1),t=pe(),e!==null&&(pr(e,1,t),_e(e,t))}function G(e,t,n){if(e.tag===3)ra(e,e,n);else for(;t!==null;){if(t.tag===3){ra(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=gn(n,e),e=qs(t,e,1),t=_t(t,e,1),e=pe(),t!==null&&(pr(t,1,e),_e(t,e));break}}t=t.return}}function G0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(le&n)===n&&(ee===4||ee===3&&(le&130023424)===le&&500>K()-Vi?Ut(e,0):Bi|=n),_e(e,t)}function gc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=pe();e=it(e,t),e!==null&&(pr(e,t,n),_e(e,n))}function b0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gc(e,n)}function K0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),gc(e,n)}var Sc;Sc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,U0(e,t,n);ge=!!(e.flags&131072)}else ge=!1,$&&t.flags&1048576&&Cs(t,io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$r(e,t),e=t.pendingProps;var o=mn(t,ce.current);fn(t,n),o=Oi(null,t,r,e,o,n);var l=Mi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(l=!0,oo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ri(t),o.updater=zo,t.stateNode=o,o._reactInternals=t,Jl(t,r,e,n),t=Wl(null,t,r,!0,l,n)):(t.tag=0,$&&l&&Ci(t),de(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch($r(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Z0(r),e=Me(r,e),o){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=Yu(null,t,r,e,n);break e;case 11:t=Xu(null,t,r,e,n);break e;case 14:t=Hu(null,t,r,Me(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Vl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Yu(e,t,r,o,n);case 3:e:{if(nc(t),e===null)throw Error(F(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Ps(e,t),so(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=gn(Error(F(423)),t),t=Qu(e,t,r,n,o);break e}else if(r!==o){o=gn(Error(F(424)),t),t=Qu(e,t,r,n,o);break e}else for(we=Ft(t.stateNode.containerInfo.firstChild),Ee=t,$=!0,Ue=null,n=zs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===o){t=ut(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Rs(t),e===null&&Il(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ll(r,o)?i=null:l!==null&&Ll(r,l)&&(t.flags|=32),tc(e,t),de(e,t,i,n),t.child;case 6:return e===null&&Il(t),null;case 13:return rc(e,t,n);case 4:return Ni(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Xu(e,t,r,o,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,A(uo,r._currentValue),r._currentValue=i,l!==null)if(Be(l.value,i)){if(l.children===o.children&&!Se.current){t=ut(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){i=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=rt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ul(l.return,n,t),u.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(F(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ul(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}de(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fn(t,n),o=De(o),r=r(o),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,o=Me(r,t.pendingProps),o=Me(r.type,o),Hu(e,t,r,o,n);case 15:return Zs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),$r(e,t),t.tag=1,Fe(r)?(e=!0,oo(t)):e=!1,fn(t,n),bs(t,r,o),Jl(t,r,o,n),Wl(null,t,r,!0,e,n);case 19:return oc(e,t,n);case 22:return ec(e,t,n)}throw Error(F(156,t.tag))};function Fc(e,t){return Ya(e,t)}function q0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new q0(e,t,n,r)}function Hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Z0(e){if(typeof e=="function")return Hi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fi)return 11;if(e===di)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Hi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Gt:return At(n.children,o,l,t);case ci:i=8,o|=8;break;case cl:return e=Ne(12,n,t,o|2),e.elementType=cl,e.lanes=l,e;case fl:return e=Ne(13,n,t,o),e.elementType=fl,e.lanes=l,e;case dl:return e=Ne(19,n,t,o),e.elementType=dl,e.lanes=l,e;case Ra:return Ro(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ta:i=10;break e;case Pa:i=9;break e;case fi:i=11;break e;case di:i=14;break e;case ft:i=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Ne(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function At(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Ro(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Ra,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ed(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Yi(e,t,n,r,o,l,i,u,a){return e=new ed(e,t,n,u,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ne(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ri(l),e}function td(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _c(e){if(!e)return kt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(Fe(n))return _s(e,n,t)}return t}function xc(e,t,n,r,o,l,i,u,a){return e=Yi(n,r,!0,e,o,l,i,u,a),e.context=_c(null),n=e.current,r=pe(),o=Ct(n),l=rt(r,o),l.callback=t??null,_t(n,l,o),e.current.lanes=o,pr(e,o,r),_e(e,r),e}function No(e,t,n,r){var o=t.current,l=pe(),i=Ct(o);return n=_c(n),t.context===null?t.context=n:t.pendingContext=n,t=rt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(o,t,i),e!==null&&(Je(e,o,i,l),Br(e,o,i)),i}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qi(e,t){oa(e,t),(e=e.alternate)&&oa(e,t)}function nd(){return null}var Cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gi(e){this._internalRoot=e}Lo.prototype.render=Gi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));No(e,t,null,null)};Lo.prototype.unmount=Gi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){No(null,e,null,null)}),t[lt]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=es();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&ns(e)}};function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function la(){}function rd(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=go(i);l.call(c)}}var i=xc(t,r,e,0,null,!1,!1,"",la);return e._reactRootContainer=i,e[lt]=i.current,rr(e.nodeType===8?e.parentNode:e),$t(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=go(a);u.call(c)}}var a=Yi(e,0,!1,null,null,!1,!1,"",la);return e._reactRootContainer=a,e[lt]=a.current,rr(e.nodeType===8?e.parentNode:e),$t(function(){No(t,a,n,r)}),a}function jo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var u=o;o=function(){var a=go(i);u.call(a)}}No(t,i,e,o)}else i=rd(n,t,e,o,r);return go(i)}qa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(vi(t,n|1),_e(t,K()),!(O&6)&&(Sn=K()+500,Pt()))}break;case 13:$t(function(){var r=it(e,1);if(r!==null){var o=pe();Je(r,e,1,o)}}),Qi(e,1)}};hi=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=pe();Je(t,e,134217728,n)}Qi(e,134217728)}};Za=function(e){if(e.tag===13){var t=Ct(e),n=it(e,t);if(n!==null){var r=pe();Je(n,e,t,r)}Qi(e,t)}};es=function(){return I};ts=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};xl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=wo(r);if(!o)throw Error(F(90));La(r),vl(r,o)}}}break;case"textarea":ja(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Ba=Wi;Va=$t;var od={usingClientEntryPoint:!1,Events:[vr,Zt,wo,Aa,Ja,Wi]},On={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ld={bundleType:On.bundleType,version:On.version,rendererPackageName:On.rendererPackageName,rendererConfig:On.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xa(e),e===null?null:e.stateNode},findFiberByHostInstance:On.findFiberByHostInstance||nd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Fo=Or.inject(ld),Qe=Or}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=od;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bi(t))throw Error(F(200));return td(e,t,null,n)};ze.createRoot=function(e,t){if(!bi(e))throw Error(F(299));var n=!1,r="",o=Cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Yi(e,1,!1,null,null,n,!1,r,o),e[lt]=t.current,rr(e.nodeType===8?e.parentNode:e),new Gi(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Xa(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return $t(e)};ze.hydrate=function(e,t,n){if(!Do(t))throw Error(F(200));return jo(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!bi(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Cc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=xc(t,null,e,1,n??null,o,!1,l,i),e[lt]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Lo(t)};ze.render=function(e,t,n){if(!Do(t))throw Error(F(200));return jo(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Do(e))throw Error(F(40));return e._reactRootContainer?($t(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};ze.unstable_batchedUpdates=Wi;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Do(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return jo(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wc)}catch(e){console.error(e)}}wc(),wa.exports=ze;var id=wa.exports,ia=id;al.createRoot=ia.createRoot,al.hydrateRoot=ia.hydrateRoot;const ud="_panel_qdj28_1",ad="_title_qdj28_17",sd="_setting_qdj28_26",cd="_toggle_qdj28_36",fd="_toggleSlider_qdj28_49",dd="_label_qdj28_81",pd="_playPauseButton_qdj28_86",md="_select_qdj28_108",vd="_slider_qdj28_130",U={panel:ud,title:ad,setting:sd,toggle:cd,toggleSlider:fd,label:dd,playPauseButton:pd,select:md,slider:vd};function hd({visible:e,isPaused:t,onTogglePause:n,shaderEnabled:r,onToggleShader:o,jointsEnabled:l,onToggleJoints:i,trailEnabled:u,onToggleTrail:a,effect:c,onEffectChange:m,speedMultiplier:p,onSpeedChange:v,presetNames:S,selectedPreset:h,onPresetChange:_,shaderNames:R,resolutionScale:f,onResolutionScaleChange:s,trailWidth:d,onTrailWidthChange:y}){return e?T.jsxs("div",{className:U.panel,children:[T.jsx("h2",{className:U.title,children:"Settings"}),T.jsxs("div",{className:U.setting,children:[T.jsx("span",{className:U.label,children:"Joint preset"}),T.jsx("select",{className:U.select,value:h,onChange:g=>_(parseInt(g.target.value)),children:S.map((g,x)=>T.jsx("option",{value:x,children:g},x))})]}),T.jsxs("div",{className:U.setting,children:[T.jsx("span",{className:U.label,children:"Shader effect"}),T.jsx("select",{className:U.select,value:c,onChange:g=>m(g.target.value),children:R.map(g=>T.jsx("option",{value:g,children:g},g))})]}),T.jsx("div",{className:U.setting,children:T.jsx("button",{onClick:n,className:U.playPauseButton,title:t?"Play":"Pause",children:t?"▶":"⏸"})}),T.jsxs("div",{className:U.setting,children:[T.jsxs("span",{className:U.label,children:["Speed: ",p.toFixed(1)]}),T.jsx("input",{type:"range",min:"0",max:"10",step:"0.1",value:p,disabled:t,onChange:g=>v(parseFloat(g.target.value))})]}),T.jsxs("div",{className:U.setting,children:[T.jsxs("label",{className:U.toggle,children:[T.jsx("input",{type:"checkbox",checked:r,onChange:g=>o(g.target.checked)}),T.jsx("span",{className:U.toggleSlider})]}),T.jsx("span",{className:U.label,children:"Shader Effect"})]}),T.jsxs("div",{className:U.setting,children:[T.jsxs("label",{className:U.toggle,children:[T.jsx("input",{type:"checkbox",checked:l,onChange:g=>i(g.target.checked)}),T.jsx("span",{className:U.toggleSlider})]}),T.jsx("span",{className:U.label,children:"Joints"})]}),T.jsxs("div",{className:U.setting,children:[T.jsxs("label",{className:U.toggle,children:[T.jsx("input",{type:"checkbox",checked:u,onChange:g=>a(g.target.checked)}),T.jsx("span",{className:U.toggleSlider})]}),T.jsx("span",{className:U.label,children:"Trail"})]}),T.jsxs("div",{className:U.setting,children:[T.jsxs("span",{className:U.label,children:["Trail Width: ",d]}),T.jsx("input",{type:"range",min:"1",max:"50",step:"1",value:d,onChange:g=>y(parseFloat(g.target.value))})]}),T.jsxs("div",{className:U.setting,children:[T.jsxs("span",{className:U.label,children:["Resolution: ",f.toFixed(2),"x"]}),T.jsx("input",{type:"range",min:"0.25",max:"4",step:"0.25",value:f,onChange:g=>s(parseFloat(g.target.value))})]})]}):null}const yd=[{Name:"Mr Pi",Joints:[{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF0000"},{Size:100,Speed:31415,Enabled:!0,JointColor:"#FF00FF00"}]},{Name:"Simple-dimple",Joints:[{Size:10,Speed:1110,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e3,Enabled:!0,JointColor:"#FF00FFFF"},{Size:90,Speed:3330,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Porky",Joints:[{Size:100,Speed:3e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:90,Speed:2e3,Enabled:!0,JointColor:"#FF800080"}]},{Name:"Flower",Joints:[{Size:100,Speed:3200,Enabled:!0,JointColor:"#FFFF1493"},{Size:90,Speed:2e3,Enabled:!0,JointColor:"#FF00FF7F"}]},{Name:"Flower longer",Joints:[{Size:100,Speed:3200,Enabled:!0,JointColor:"#FFFF1493"},{Size:90,Speed:1100,Enabled:!0,JointColor:"#FF00FF7F"}]},{Name:"Triada",Joints:[{Size:5,Speed:1e4,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:10,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:3e4,Enabled:!0,JointColor:"#FF0000FF"}]},{Name:"Grannies' Pie",Joints:[{Size:22,Speed:1e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:150,Speed:1,Enabled:!0,JointColor:"#FFFF4500"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FFFF1493"},{Size:40,Speed:1e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Diabotical",Joints:[{Size:22,Speed:1e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:1,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:60,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"}]},{Name:"Pie revert",Joints:[{Size:22,Speed:1e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:1,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:60,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"}]},{Name:"Medal",Joints:[{Size:60,Speed:-1e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:300,Speed:3,Enabled:!0,JointColor:"#FFC0C0C0"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FFB87333"},{Size:200,Speed:-2e4,Enabled:!0,JointColor:"#FFFFD700"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFC0C0C0"}]},{Name:"Krishna",Joints:[{Size:60,Speed:-8e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:5e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:-5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:-2e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e3,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Love story",Joints:[{Size:70,Speed:-8e3,Enabled:!0,JointColor:"#FFFF1493"},{Size:330,Speed:5e3,Enabled:!0,JointColor:"#FFFF69B4"},{Size:100,Speed:2e3,Enabled:!0,JointColor:"#FFFFB6C1"},{Size:120,Speed:-3e3,Enabled:!0,JointColor:"#FFFF1493"},{Size:90,Speed:1e3,Enabled:!0,JointColor:"#FFFF69B4"}]},{Name:"Mickey Mouse",Joints:[{Size:20,Speed:-1e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:3,Enabled:!0,JointColor:"#FFFF0000"},{Size:120,Speed:5e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FFFF0000"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF0000"}]},{Name:"Cross",Joints:[{Size:20,Speed:5e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-5e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:120,Speed:5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Hush",Joints:[{Size:20,Speed:8e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-8e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:120,Speed:-4e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:4e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:4e3,Enabled:!0,JointColor:"#FFFF00FF"},{Size:100,Speed:-4e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Shuriken",Joints:[{Size:20,Speed:7e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-5e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:120,Speed:5e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FF00FF00"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FF0000FF"}]},{Name:"Inception",Joints:[{Size:70,Speed:2e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Vaze",Joints:[{Size:70,Speed:2e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FFFF00FF"},{Size:250,Speed:8e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Triumph",Joints:[{Size:70,Speed:2e3,Enabled:!1,JointColor:"#FFFFD700"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FFB87333"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:70,Speed:9e3,Enabled:!0,JointColor:"#FFC0C0C0"},{Size:250,Speed:-8e3,Enabled:!0,JointColor:"#FFB87333"}]},{Name:"Zombie",Joints:[{Size:70,Speed:3500,Enabled:!1,JointColor:"#FF00FF00"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:5e3,Enabled:!0,JointColor:"#FF008F00"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FF00FF00"}]},{Name:"Pizza",Joints:[{Size:70,Speed:3500,Enabled:!0,JointColor:"#FFFF4500"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FFFF4500"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FFFF4500"}]},{Name:"Prism",Joints:[{Size:20,Speed:5e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-4e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:120,Speed:8e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Infinity",Joints:[{Size:70,Speed:2e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:200,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:400,Speed:-3e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:700,Speed:4e3,Enabled:!0,JointColor:"#FFFF00FF"},{Size:250,Speed:-3e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Soothing",Joints:[{Size:185,Speed:11e3,Enabled:!1,JointColor:"#FF000000"},{Size:110,Speed:-16e3,Enabled:!0,JointColor:"#FF00C7FF"},{Size:474,Speed:2e3,Enabled:!0,JointColor:"#FFFC9200"},{Size:20,Speed:0,Enabled:!0,JointColor:"#FFFF0000"}]},{Name:"Uber-Flower",Joints:[{Size:220,Speed:-5e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:260,Speed:-9e3,Enabled:!1,JointColor:"#FFFFFFFF"},{Size:325,Speed:18e3,Enabled:!0,JointColor:"#FF00FFF9"},{Size:405,Speed:-9e3,Enabled:!0,JointColor:"#FFFF0000"}]},{Name:"Poo",Joints:[{Size:130,Speed:-2e3,Enabled:!1,JointColor:"#FF8F5C00"},{Size:185,Speed:4e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:50,Speed:19e3,Enabled:!0,JointColor:"#FFBA7800"}]},{Name:"Happy new year",Joints:[{Size:355,Speed:-14e3,Enabled:!1,JointColor:"#FFC02F26"},{Size:35,Speed:4e3,Enabled:!1,JointColor:"#FF99F3A2"},{Size:415,Speed:11e3,Enabled:!1,JointColor:"#FFCE153F"},{Size:405,Speed:11e3,Enabled:!0,JointColor:"#FF1DCA74"},{Size:15,Speed:13e3,Enabled:!0,JointColor:"#FF49EEA0"}]},{Name:"Atomic duet",Joints:[{Size:110,Speed:-8e3,Enabled:!1,JointColor:"#FF3E5A35"},{Size:135,Speed:18e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:250,Speed:-1e4,Enabled:!0,JointColor:"#FFFFFF00"}]},{Name:"Cloud connected",Joints:[{Size:55,Speed:-17e3,Enabled:!1,JointColor:"#FF550914"},{Size:35,Speed:3e3,Enabled:!1,JointColor:"#FF49BB0E"},{Size:330,Speed:13e3,Enabled:!0,JointColor:"#FF00FFF9"}]},{Name:"Nirvana baby",Joints:[{Size:375,Speed:-2e3,Enabled:!1,JointColor:"#FF1DC129"},{Size:280,Speed:4e3,Enabled:!1,JointColor:"#FF2F8260"},{Size:360,Speed:6e3,Enabled:!0,JointColor:"#FFFFFFFF"},{Size:180,Speed:-19e3,Enabled:!0,JointColor:"#FFFFAAAA"}]},{Name:"Pearl",Joints:[{Size:215,Speed:17e3,Enabled:!0,JointColor:"#FFFFFFFF"},{Size:295,Speed:-19e3,Enabled:!1,JointColor:"#FF1C8A97"},{Size:380,Speed:-19e3,Enabled:!1,JointColor:"#FF573A4C"},{Size:260,Speed:3e3,Enabled:!0,JointColor:"#FF1EEFC0"}]},{Name:"Elephant",Joints:[{Size:40,Speed:5e3,Enabled:!0,JointColor:"#FF019439"},{Size:355,Speed:-4e3,Enabled:!1,JointColor:"#FF8C1561"},{Size:115,Speed:2e3,Enabled:!0,JointColor:"#FF195CB3"},{Size:475,Speed:-5e3,Enabled:!0,JointColor:"#FF4F60A6"}]},{Name:"Trajectory",Joints:[{Size:90,Speed:-8e3,Enabled:!0,JointColor:"#FF3AD1C9"},{Size:5,Speed:-9e3,Enabled:!1,JointColor:"#FF7A0705"},{Size:20,Speed:17e3,Enabled:!1,JointColor:"#FF1C288A"},{Size:370,Speed:6e3,Enabled:!0,JointColor:"#FFDA21DA"}]},{Name:"Airplane",Joints:[{Size:25,Speed:1e4,Enabled:!1,JointColor:"#FF008000"},{Size:25,Speed:-6e3,Enabled:!1,JointColor:"#FFFFFFFF"},{Size:25,Speed:-3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:500,Speed:-3e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:500,Speed:3e3,Enabled:!0,JointColor:"#FFFF0000"}]}];class et{constructor(t=1,n=0,r=0,o=1,l=0,i=0){this.m11=t,this.m12=n,this.m21=r,this.m22=o,this.m31=l,this.m32=i}static identity(){return new et}static createRotation(t){const n=Math.cos(t),r=Math.sin(t);return new et(n,r,-r,n,0,0)}static createTranslation(t,n){return new et(1,0,0,1,t,n)}static createScale(t,n){return new et(t,0,0,n,0,0)}multiply(t){return new et(this.m11*t.m11+this.m12*t.m21,this.m11*t.m12+this.m12*t.m22,this.m21*t.m11+this.m22*t.m21,this.m21*t.m12+this.m22*t.m22,this.m31*t.m11+this.m32*t.m21+t.m31,this.m31*t.m12+this.m32*t.m22+t.m32)}getTranslation(){return{x:this.m31,y:this.m32}}}class gd{constructor(){this.jointsEnabled=!0,this.shaderEnabled=!0,this.presets=yd,this.joints=[],this.currentPresetIndex=-1}loadPreset(t){if(t<0||t>=this.presets.length)return;const n=this.presets[t],r=n.Joints.reduce((o,l)=>o+l.Size,0);this.joints=n.Joints.map(o=>({lengthRatio:o.Size/r,rotation:0,speed:o.Speed,enabled:o.Enabled,color:o.JointColor})),this.currentPresetIndex=t}getPresetNames(){return this.presets.map(t=>t.Name)}updateJoints(t,n=1){this.joints.forEach(r=>{r.rotation+=r.speed*(t/1e5)*n,r.rotation=r.rotation%360})}getTotalRotation(){return this.joints.reduce((t,n)=>t+n.rotation,0)%360}calculateJoints(t,n){const r=this.joints.reduce((p,v)=>p+v.lengthRatio*100,0),o=Math.min(t,n)/2,l=window.devicePixelRatio||1,i=t/2*l,u=n/2*l;let a=et.createTranslation(i,u),c={x:i,y:u};const m=[];return this.joints.forEach(p=>{const v=p.rotation*Math.PI/180,S=o*(100*p.lengthRatio/r),h=et.createRotation(v);a=et.createTranslation(0,S).multiply(h).multiply(a);const R=a.getTranslation();m.push({startX:c.x,startY:c.y,endX:R.x,endY:R.y,length:S,angleRad:v,enabled:p.enabled,color:p.color}),c=R}),m}}const Sd=`
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
`,Fd=Object.freeze(Object.defineProperty({__proto__:null,artFragmentShader:Sd},Symbol.toStringTag,{value:"Module"})),_d=`
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
`,xd=`
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
`,Cd=`
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
`,wd=`
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
`,Ed={buffera:{iChannel0:"self"},bufferb:{iChannel0:"buffera",iChannel1:"self"},bufferc:{iChannel0:"self"},image:{iChannel0:"buffera",iChannel1:"bufferb",iChannel2:"bufferc"}},kd=Object.freeze(Object.defineProperty({__proto__:null,bufferAFragmentShader:_d,bufferBFragmentShader:xd,bufferCFragmentShader:Cd,channels:Ed,imageFragmentShader:wd},Symbol.toStringTag,{value:"Module"})),zd=`
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
`,Td=Object.freeze(Object.defineProperty({__proto__:null,discoSunFragmentShader:zd},Symbol.toStringTag,{value:"Module"})),Pd=`
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
`,Rd=Object.freeze(Object.defineProperty({__proto__:null,edgesFragmentShader:Pd},Symbol.toStringTag,{value:"Module"})),Nd=`
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
`,Ld=Object.freeze(Object.defineProperty({__proto__:null,fire2FragmentShader:Nd},Symbol.toStringTag,{value:"Module"})),Dd=`
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
`,jd=Object.freeze(Object.defineProperty({__proto__:null,firePlasmaFragmentShader:Dd},Symbol.toStringTag,{value:"Module"})),Od=`
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
`,Md=`
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
`,Id=`
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
`,Ud=`
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
`,Ad=`
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
`,Jd=`
uniform sampler2D iChannel0;
uniform vec2 u_resolution;

void main() {
    vec4 col = textureLod(iChannel0, gl_FragCoord.xy/u_resolution.xy, 0.);
    if (gl_FragCoord.y < 1. || gl_FragCoord.y >= (u_resolution.y-1.))
        col = vec4(0);
    gl_FragColor = col;
}
`,Bd={buffera:{iChannel0:"bufferc"},bufferb:{iChannel0:"buffera"},bufferc:{iChannel0:"bufferb"},bufferd:{iChannel0:"buffera",iChannel1:"bufferd"},image:{iChannel0:"bufferd"}},Vd=Object.freeze(Object.defineProperty({__proto__:null,bufferAFragmentShader:Md,bufferBFragmentShader:Id,bufferCFragmentShader:Ud,bufferDFragmentShader:Ad,channels:Bd,common:Od,imageFragmentShader:Jd},Symbol.toStringTag,{value:"Module"})),Wd=`
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
`,$d=`
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
`,Xd={buffera:{iChannel0:"self"},image:{iChannel0:"buffera",iChannel1:"self"}},Hd=Object.freeze(Object.defineProperty({__proto__:null,bufferAFragmentShader:Wd,channels:Xd,imageFragmentShader:$d},Symbol.toStringTag,{value:"Module"})),Yd=`
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
`,Qd=Object.freeze(Object.defineProperty({__proto__:null,matrixFragmentShader:Yd},Symbol.toStringTag,{value:"Module"})),Gd={iChannel0:"trail"},bd=`
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
`,Kd=Object.freeze(Object.defineProperty({__proto__:null,channelSources:Gd,nightSeaFragmentShader:bd},Symbol.toStringTag,{value:"Module"})),qd={iChannel0:"trail"},Zd=`
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
`,ep=Object.freeze(Object.defineProperty({__proto__:null,channelSources:qd,rainFragmentShader:Zd},Symbol.toStringTag,{value:"Module"})),tp=`
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
`,np=Object.freeze(Object.defineProperty({__proto__:null,relaxPlasmaFragmentShader:tp},Symbol.toStringTag,{value:"Module"})),rp=`
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
`,op=Object.freeze(Object.defineProperty({__proto__:null,starleidoscopeFragmentShader:rp},Symbol.toStringTag,{value:"Module"})),lp={iChannel0:"trail"},ip=`
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
`,up=Object.freeze(Object.defineProperty({__proto__:null,channelSources:lp,trailEffectFragmentShader:ip},Symbol.toStringTag,{value:"Module"})),ap=`
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
`,sp=Object.freeze(Object.defineProperty({__proto__:null,warpFragmentShader:ap},Symbol.toStringTag,{value:"Module"})),cp=`
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
`,fp=Object.freeze(Object.defineProperty({__proto__:null,wavesFragmentShader:cp},Symbol.toStringTag,{value:"Module"})),dp=5,pp=10,mp=1,vp=`#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,ua=Object.assign({"./shaders/art.js":Fd,"./shaders/balls.js":kd,"./shaders/discoSun.js":Td,"./shaders/edges.js":Rd,"./shaders/fire2.js":Ld,"./shaders/firePlasma.js":jd,"./shaders/fluidSim.js":Vd,"./shaders/fluidSimGasoline.js":Hd,"./shaders/matrix.js":Qd,"./shaders/nightSea.js":Kd,"./shaders/rain.js":ep,"./shaders/relaxPlasma.js":np,"./shaders/starleidoscope.js":op,"./shaders/trailEffect.js":up,"./shaders/warp.js":sp,"./shaders/waves.js":fp});function hp(e){if(!e||e.length!==9)return{r:255,g:255,b:255,a:255};const t=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16),o=parseInt(e.substring(7,9),16);return{r:n,g:r,b:o,a:t}}function aa(e,t,n,r="unknown"){const o=e.createShader(t);return e.shaderSource(o,n),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(console.error(`Shader error (${r}):`,e.getShaderInfoLog(o)),e.deleteShader(o),null)}function yp(e,t,n){const r=e.createProgram();return e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?r:(console.error(e.getProgramInfoLog(r)),e.deleteProgram(r),null)}function sa(e,t,n=!1,r="unknown"){const o=aa(e,e.VERTEX_SHADER,vp,r+"_vertex");let l=t.trim();n&&(l=l.replace(/gl_FragColor/g,"fragColor"),l=l.replace(/texture2D\(/g,"texture("),l.includes("out vec4 fragColor")||(l.startsWith("#version")?(l.includes("precision highp float")?l.match(/precision\s+highp\s+float\s*;/)||(l=l.replace("precision highp float","precision highp float;")):l=l.replace("#version",`#version
precision highp float;`),l.includes("out vec4 fragColor")||(l=l.replace("precision highp float;",`precision highp float;
out vec4 fragColor;`))):l=`#version 300 es
precision highp float;
out vec4 fragColor;

`+l.replace(/^\s*precision\s+highp\s+float\s*;\s*/m,"")));const i=aa(e,e.FRAGMENT_SHADER,l,r+"_fragment");if(!o||!i)return null;const u=yp(e,o,i);if(!u)return null;const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const c=e.getAttribLocation(u,"a_position");e.enableVertexAttribArray(c),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0);const m=e.getError();return m!==e.NO_ERROR&&console.error("WebGL error after creating program:",m),u}function ca(e,t){return{u_time:e.getUniformLocation(t,"u_time"),u_resolution:e.getUniformLocation(t,"u_resolution"),u_emitterX:e.getUniformLocation(t,"u_emitterX"),u_emitterY:e.getUniformLocation(t,"u_emitterY"),u_emitter:e.getUniformLocation(t,"u_emitter"),u_emitterVelX:e.getUniformLocation(t,"u_emitterVelX"),u_emitterVelY:e.getUniformLocation(t,"u_emitterVelY"),u_mouse:e.getUniformLocation(t,"u_mouse"),u_timeDelta:e.getUniformLocation(t,"u_timeDelta"),u_frameRate:e.getUniformLocation(t,"u_frameRate"),u_frame:e.getUniformLocation(t,"u_frame"),u_sampleRate:e.getUniformLocation(t,"u_sampleRate"),iChannel0:e.getUniformLocation(t,"iChannel0"),iChannel1:e.getUniformLocation(t,"iChannel1"),iChannel2:e.getUniformLocation(t,"iChannel2"),iChannel3:e.getUniformLocation(t,"iChannel3")}}function fa(e,t,n){const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,t,n,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const o=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{texture:r,framebuffer:o}}function gp(e,t,n){return{ping:fa(e,t,n),pong:fa(e,t,n),current:0}}const ti=["buffera","bufferb","bufferc","bufferd"],Sp={buffera:{iChannel0:"self",iChannel1:"noise"},bufferb:{iChannel0:"buffera",iChannel1:"noise"},bufferc:{iChannel0:"bufferb",iChannel1:"noise"},bufferd:{iChannel0:"bufferc",iChannel1:"noise"}};function Fp(e,t=256){const n=new Uint8Array(t*t*4);for(let o=0;o<n.length;o+=4)n[o]=Math.random()*256,n[o+1]=Math.random()*256,n[o+2]=Math.random()*256,n[o+3]=255;const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,t,0,e.RGBA,e.UNSIGNED_BYTE,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),r}function _p(){const e=[];for(const t in ua){const n=ua[t],r=t.split("/").pop().replace(".js",""),o=Object.keys(n).filter(l=>l.endsWith("FragmentShader"));if(o.length>1){const l=n.common||"",i=n.channels||{},u={};for(const a of o){const c=a.replace("FragmentShader","").toLowerCase();let m=i[c]||{};if(Object.keys(m).length===0){for(const p of Object.keys(i))if(p.toLowerCase()===c){m=i[p];break}}u[c]={fragmentShader:l+n[a],channels:m}}e.push({name:r,type:"multi",passes:u})}else o.length===1&&e.push({name:r,type:"single",fragmentShader:n[o[0]],channelSources:n.channelSources||{}})}return e}const Ec=_p();function xp(e,t){const n=e.getContext("webgl2");if(!n)return null;n.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not supported, multipass shaders may not work correctly");const o={},l=Fp(n),i={buffera:{ping:null,pong:null,current:0},bufferb:{ping:null,pong:null,current:0},bufferc:{ping:null,pong:null,current:0},bufferd:{ping:null,pong:null,current:0}};for(const m of Ec)if(m.type==="multi"){o[m.name]={name:m.name,type:"multi",passes:{}};for(const[p,v]of Object.entries(m.passes)){const S=sa(n,v.fragmentShader,!0,`${m.name}_${p}`);S&&(o[m.name].passes[p]={program:S,uniforms:ca(n,S),channels:v.channels})}}else{const p=sa(n,m.fragmentShader,!0,m.name);p&&(o[m.name]={name:m.name,type:"single",program:p,uniforms:ca(n,p),channelSources:m.channelSources||{}})}const u=t.getContext("2d");let a=n.createTexture();function c(){n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.bindTexture(n.TEXTURE_2D,a),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.generateMipmap(n.TEXTURE_2D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1)}return{gl:n,shaderPrograms:o,noiseTexture:l,fbos:i,trailCtx:u,trailCanvas:t,trailTexture:a,updateTrailTexture:c}}function Cp(e,t,n,r,o,l){const i=t;i.u_time&&e.uniform1f(i.u_time,o*.001),i.u_resolution&&e.uniform2f(i.u_resolution,n,r),i.u_timeDelta&&l.timeDelta&&e.uniform1f(i.u_timeDelta,l.timeDelta),i.u_frameRate&&l.frameRate&&e.uniform1f(i.u_frameRate,l.frameRate),i.u_frame&&e.uniform1i(i.u_frame,l.frame||0),i.u_sampleRate&&e.uniform1f(i.u_sampleRate,44100),i.u_emitterX&&l.emitterX!==void 0&&e.uniform1f(i.u_emitterX,l.emitterX),i.u_emitterY&&l.emitterY!==void 0&&e.uniform1f(i.u_emitterY,l.emitterY),i.u_emitter&&l.emitterX!==void 0&&l.emitterY!==void 0&&e.uniform2f(i.u_emitter,l.emitterX,l.emitterY),i.u_emitterVelX&&l.emitterVelX!==void 0&&e.uniform1f(i.u_emitterVelX,l.emitterVelX),i.u_emitterVelY&&l.emitterVelY!==void 0&&e.uniform1f(i.u_emitterVelY,l.emitterVelY),i.u_mouse&&e.uniform4f(i.u_mouse,l.emitterX||0,l.emitterY||0,l.mouseZ||0,l.mouseZ||0)}function jt(e,t,n,r,o){const l=t[n];l!=null&&r&&(e.activeTexture(e.TEXTURE0+o),e.bindTexture(e.TEXTURE_2D,r),e.uniform1i(l,o))}function ni(e,t,n,r,o,l){Cp(e,t,n,r,o,l),e.drawArrays(e.TRIANGLES,0,6)}function kc(e,t,n,r){for(const o of ti){const l=t[o];l.ping&&(e.deleteTexture(l.ping.texture),e.deleteFramebuffer(l.ping.framebuffer),e.deleteTexture(l.pong.texture),e.deleteFramebuffer(l.pong.framebuffer)),t[o]=gp(e,n,r)}}function zc(e,t){if(!t||t==="self")return null;const n=e[t];return!n||!n.ping?null:n.current===0?n.ping.texture:n.pong.texture}function wp(e,t,n,r,o,l,i,u,a){const c=t.passes[n];if(!c)return null;const m=r[n],p=m.current===0?m.ping:m.pong,v=m.current===0?m.pong:m.ping;e.bindFramebuffer(e.FRAMEBUFFER,v.framebuffer),e.viewport(0,0,l,i),e.disable(e.BLEND),e.useProgram(c.program);const S=Sp[n]||{},h=c.channels||{},_=Object.keys(h).length>0?{...S,...h}:S;for(let R=0;R<4;R++){const f=`iChannel${R}`,s=_[f],d=c.uniforms[f];if(s&&d!==null&&d!==void 0){let y=o;s==="self"||s===n?y=p.texture:s!=="noise"&&(y=zc(r,s)||o),y&&jt(e,c.uniforms,f,y,R)}}return ni(e,c.uniforms,l,i,u,a),v.texture}function Ep(e,t,n,r,o,l,i,u=.016,a=0){const{gl:c,shaderPrograms:m,noiseTexture:p,fbos:v}=e;c.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT),c.enable(c.BLEND),c.blendFunc(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA),m._frameCounters||(m._frameCounters={}),m._frameCounters[n]||(m._frameCounters[n]=0),m._frameCounters[n]++;const S={emitterX:r,emitterY:o,emitterVelX:l,emitterVelY:i,timeDelta:u,frameRate:u>0?1/u:60,frame:m._frameCounters[n],mouseZ:a},h=m[n];if(!h)return;const _=c.canvas.width,R=c.canvas.height;if(h.type==="single"){const f=h.channelSources||{};if(c.useProgram(h.program),h.uniforms.iChannel0!==null&&h.uniforms.iChannel0!==void 0){const s=f.iChannel0||"noise",d=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),jt(c,h.uniforms,"iChannel0",d,0)}if(h.uniforms.iChannel1!==null&&h.uniforms.iChannel1!==void 0){const s=f.iChannel1||"noise",d=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),jt(c,h.uniforms,"iChannel1",d,1)}if(h.uniforms.iChannel2!==null&&h.uniforms.iChannel2!==void 0){const s=f.iChannel2||"noise",d=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),jt(c,h.uniforms,"iChannel2",d,2)}if(h.uniforms.iChannel3!==null&&h.uniforms.iChannel3!==void 0){const s=f.iChannel3||"noise",d=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),jt(c,h.uniforms,"iChannel3",d,3)}ni(c,h.uniforms,_,R,t,S)}else{v.buffera.ping||kc(c,v,_,R);let f=null;for(let s=0;s<mp;s++)for(const d of ti)h.passes[d]&&(f=wp(c,h,d,v,p,_,R,t,S));for(const s of ti)v[s]&&(v[s].current=1-v[s].current);if(c.bindFramebuffer(c.FRAMEBUFFER,null),c.viewport(0,0,_,R),c.enable(c.BLEND),h.passes.image){const s=h.passes.image.channels||{};c.useProgram(h.passes.image.program);const y={...{},...s};for(const[g,x]of Object.entries(y)){if(!g.startsWith("iChannel"))continue;const k=parseInt(g.replace("iChannel",""));let w=null;x==="trail"?e&&e.trailTexture&&(e.updateTrailTexture(),w=e.trailTexture):x==="noise"?w=p:x==="final"||!x||x==="self"?w=f||p:w=zc(v,x)||p;const M=h.passes.image.uniforms[g];w&&M!==null&&M!==void 0&&jt(c,h.passes.image.uniforms,g,w,k)}for(let g=0;g<4;g++){const x=`iChannel${g}`;!y[x]&&h.passes.image.uniforms[x]!==null&&h.passes.image.uniforms[x]!==void 0&&jt(c,h.passes.image.uniforms,x,g===0&&f||p,g)}ni(c,h.passes.image.uniforms,_,R,t,S)}}}function kp(e,t,n,r=2){const{trailCtx:o}=e;!o||!t||!n||(o.lineWidth=r,t.forEach((l,i)=>{if(l.enabled&&n[i]){const u=hp(l.color);o.strokeStyle=`rgba(${u.r}, ${u.g}, ${u.b}, ${u.a/255})`,o.beginPath(),o.moveTo(n[i].endX,n[i].endY),o.lineTo(l.endX,l.endY),o.stroke()}}))}function da(e,t=null,n=1){const r=window.devicePixelRatio||1;e.width=window.innerWidth*r*n,e.height=window.innerHeight*r*n,t&&t.viewport(0,0,e.width,e.height)}function zp(e,t=1){const n=window.devicePixelRatio||1;e.width=window.innerWidth*n*t,e.height=window.innerHeight*n*t}function Tp(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),t.forEach(n=>{e.strokeStyle="#00ff00",e.lineWidth=dp,e.beginPath(),e.moveTo(n.startX,n.startY),e.lineTo(n.endX,n.endY),e.stroke(),e.fillStyle="#ff0000",e.beginPath(),e.arc(n.endX,n.endY,pp/2,0,Math.PI*2),e.fill()})}const Pp=30;function Rp(){const[e,t]=z.useState(0),[n,r]=z.useState(!0),[o,l]=z.useState(!0),i=z.useRef([]),[u,a]=z.useState(!0),[c,m]=z.useState(!0),[p,v]=z.useState(!0),[S,h]=z.useState("plasma"),[_,R]=z.useState(1),[f,s]=z.useState(0),[d,y]=z.useState(1),[g,x]=z.useState(2),k=z.useRef(_),w=z.useRef(null),M=z.useRef(null),N=z.useRef(null),fe=z.useRef(null),Ve=z.useRef(null),We=z.useRef(0),Cn=z.useRef(.016),wn=z.useRef(null),st=z.useRef(null),be=z.useRef(new gd),C=z.useRef(1),P=z.useRef(!0),L=z.useRef(!0),X=z.useRef(!0),b=z.useRef("plasma"),Ke=z.useRef(1),$e=z.useRef(2),Rt=z.useRef(!1),he=z.useRef({x:0,y:0,pressed:!1});z.useEffect(()=>{C.current=_},[_]),z.useEffect(()=>{Ke.current=d},[d]),z.useEffect(()=>{$e.current=g},[g]),z.useEffect(()=>{P.current=u},[u]),z.useEffect(()=>{L.current=c},[c]),z.useEffect(()=>{X.current=p},[p]),z.useEffect(()=>{b.current=S},[S]),z.useEffect(()=>{o?(k.current=C.current,C.current=0):C.current=k.current||1},[o]),z.useEffect(()=>{const j=()=>{document.hidden?Rt.current=!0:We.current=0};return document.addEventListener("visibilitychange",j),()=>{document.removeEventListener("visibilitychange",j)}},[]);const Nt=z.useCallback(()=>{const j=w.current,J=M.current;if(!j||!J)return;const re=xp(j,J);re&&(fe.current=re)},[]),En=z.useCallback(()=>{const j=w.current,J=fe.current;j&&J&&(da(j,J.gl,Ke.current),kc(J.gl,J.fbos,j.width,j.height));const re=M.current;re&&zp(re,Ke.current);const xe=N.current;xe&&da(xe,null,Ke.current)},[]);z.useEffect(()=>{En()},[d,En]);const Ki=z.useCallback(()=>{const j=M.current;j&&j.getContext("2d").clearRect(0,0,j.width,j.height)},[]),Tc=z.useCallback(j=>{be.current.loadPreset(j),wn.current=null,Ki(),s(j)},[Ki]),Oo=z.useCallback(j=>{const J=fe.current,re=w.current;if(We.current>0&&!Rt.current){const W=j-We.current;Cn.current=W/1e3,be.current.updateJoints(W,C.current);const yr=1e3/W;i.current.push(yr),i.current.length>Pp&&i.current.shift();const gr=i.current.reduce((kn,zn)=>kn+zn,0)/i.current.length;t(Math.round(gr))}We.current=j,Rt.current=!1;const xe=be.current.calculateJoints(window.innerWidth,window.innerHeight);if(J&&re&&P.current){const W=xe.length>0?xe[xe.length-1]:null;let yr=0,gr=0;W&&st.current&&(yr=W.endX-st.current.x,gr=W.endY-st.current.y);const kn=he.current,zn=kn.pressed,Pc=zn?kn.x:W?W.endX:null,Rc=zn?kn.y:W?W.endY:null,Nc=zn?2:0;Ep(J,j,b.current,Pc,Rc,yr,gr,Cn.current,Nc),W&&(st.current={x:W.endX,y:W.endY})}if(J&&kp(J,xe,wn.current,$e.current),L.current&&N.current){const W=N.current.getContext("2d");Tp(W,xe)}else if(N.current){const W=N.current.getContext("2d");W.clearRect(0,0,W.canvas.width,W.canvas.height)}wn.current=xe,Ve.current=requestAnimationFrame(Oo)},[]);return z.useEffect(()=>{be.current.loadPreset(0),Nt(),En();const j=()=>En();return window.addEventListener("resize",j),Ve.current=requestAnimationFrame(Oo),()=>{window.removeEventListener("resize",j),Ve.current&&cancelAnimationFrame(Ve.current)}},[Nt,En,Oo]),T.jsxs(T.Fragment,{children:[T.jsx("div",{style:{display:u?"none":"block",width:"100vw",height:"100vh",background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"}}),T.jsxs("div",{style:{position:"fixed",top:10,left:10,color:"white",fontFamily:"monospace",fontSize:"14px",background:"rgba(0,0,0,0.5)",padding:"4px 8px",borderRadius:"4px",zIndex:1e3},children:[e," FPS"]}),T.jsx("canvas",{ref:w,style:{display:u?"block":"none",position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1},onMouseDown:j=>{const J=w.current;if(!J)return;const re=J.getBoundingClientRect(),xe=(j.clientX-re.left)*(J.width/re.width),W=(j.clientY-re.top)*(J.height/re.height);he.current={x:xe,y:J.height-W,pressed:!0}},onMouseMove:j=>{const J=w.current;if(!J)return;const re=J.getBoundingClientRect(),xe=(j.clientX-re.left)*(J.width/re.width),W=(j.clientY-re.top)*(J.height/re.height);he.current={...he.current,x:xe,y:J.height-W}},onMouseUp:()=>{he.current.pressed=!1},onMouseLeave:()=>{he.current.pressed=!1}}),T.jsx("canvas",{ref:M,style:{display:p?"block":"none",position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:2}}),T.jsx("canvas",{ref:N,style:{display:c?"block":"none",position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:3}}),T.jsx(hd,{visible:n,isPaused:o,onTogglePause:()=>l(!o),shaderEnabled:u,onToggleShader:a,jointsEnabled:c,onToggleJoints:m,trailEnabled:p,onToggleTrail:v,effect:S,onEffectChange:h,speedMultiplier:o?0:_,onSpeedChange:R,presetNames:be.current.getPresetNames(),selectedPreset:f,onPresetChange:Tc,shaderNames:Ec.map(j=>j.name),resolutionScale:d,onResolutionScaleChange:y,trailWidth:g,onTrailWidthChange:x}),T.jsx("button",{onClick:()=>r(!n),style:{position:"fixed",top:10,right:10,width:40,height:40,background:"rgba(0,0,0,0.5)",border:"none",borderRadius:"4px",color:"white",fontSize:"20px",cursor:"pointer",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center"},title:"Settings",children:"⚙"})]})}al.createRoot(document.getElementById("root")).render(T.jsx(Qc.StrictMode,{children:T.jsx(Rp,{})}));
