(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function zc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sa={exports:{}},yo={},ca={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Tc=Symbol.for("react.portal"),Pc=Symbol.for("react.fragment"),Rc=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Lc=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Oc=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Mc=Symbol.for("react.memo"),Ic=Symbol.for("react.lazy"),Qi=Symbol.iterator;function Uc(e){return e===null||typeof e!="object"?null:(e=Qi&&e[Qi]||e["@@iterator"],typeof e=="function"?e:null)}var fa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},da=Object.assign,pa={};function yn(e,t,n){this.props=e,this.context=t,this.refs=pa,this.updater=n||fa}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ma(){}ma.prototype=yn.prototype;function ei(e,t,n){this.props=e,this.context=t,this.refs=pa,this.updater=n||fa}var ti=ei.prototype=new ma;ti.constructor=ei;da(ti,yn.prototype);ti.isPureReactComponent=!0;var Gi=Array.isArray,va=Object.prototype.hasOwnProperty,ni={current:null},ha={key:!0,ref:!0,__self:!0,__source:!0};function ya(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)va.call(t,r)&&!ha.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:sr,type:e,key:l,ref:i,props:o,_owner:ni.current}}function Ac(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ri(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Jc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ki=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jc(""+e.key):t.toString(36)}function Or(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case sr:case Tc:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Do(i,0):r,Gi(o)?(n="",e!=null&&(n=e.replace(Ki,"$&/")+"/"),Or(o,t,n,"",function(c){return c})):o!=null&&(ri(o)&&(o=Ac(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ki,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Gi(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+Do(l,u);i+=Or(l,t,n,a,o)}else if(a=Uc(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+Do(l,u++),i+=Or(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function yr(e,t,n){if(e==null)return e;var r=[],o=0;return Or(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Bc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},jr={transition:null},Vc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:jr,ReactCurrentOwner:ni};function ga(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!ri(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=yn;O.Fragment=Pc;O.Profiler=Nc;O.PureComponent=ei;O.StrictMode=Rc;O.Suspense=jc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vc;O.act=ga;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=da({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ni.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)va.call(t,a)&&!ha.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:sr,type:e.type,key:o,ref:l,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:Dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lc,_context:e},e.Consumer=e};O.createElement=ya;O.createFactory=function(e){var t=ya.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Oc,render:e}};O.isValidElement=ri;O.lazy=function(e){return{$$typeof:Ic,_payload:{_status:-1,_result:e},_init:Bc}};O.memo=function(e,t){return{$$typeof:Mc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};O.unstable_act=ga;O.useCallback=function(e,t){return me.current.useCallback(e,t)};O.useContext=function(e){return me.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return me.current.useDeferredValue(e)};O.useEffect=function(e,t){return me.current.useEffect(e,t)};O.useId=function(){return me.current.useId()};O.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return me.current.useMemo(e,t)};O.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};O.useRef=function(e){return me.current.useRef(e)};O.useState=function(e){return me.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return me.current.useTransition()};O.version="18.3.1";ca.exports=O;var z=ca.exports;const Wc=zc(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=z,Xc=Symbol.for("react.element"),Hc=Symbol.for("react.fragment"),Yc=Object.prototype.hasOwnProperty,Qc=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gc={key:!0,ref:!0,__self:!0,__source:!0};function Sa(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Yc.call(t,r)&&!Gc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Xc,type:e,key:l,ref:i,props:o,_owner:Qc.current}}yo.Fragment=Hc;yo.jsx=Sa;yo.jsxs=Sa;sa.exports=yo;var N=sa.exports,ll={},Fa={exports:{}},ke={},_a={exports:{}},xa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var R=C.length;C.push(P);e:for(;0<R;){var I=R-1>>>1,K=C[I];if(0<o(K,P))C[I]=P,C[R]=K,R=I;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],R=C.pop();if(R!==P){C[0]=R;e:for(var I=0,K=C.length,We=K>>>1;I<We;){var $e=2*(I+1)-1,xn=C[$e],je=$e+1,D=C[je];if(0>o(xn,R))je<K&&0>o(D,xn)?(C[I]=D,C[je]=R,I=je):(C[I]=xn,C[$e]=R,I=$e);else if(je<K&&0>o(D,R))C[I]=D,C[je]=R,I=je;else break e}}return P}function o(C,P){var R=C.sortIndex-P.sortIndex;return R!==0?R:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var a=[],c=[],m=1,p=null,v=3,g=!1,h=!1,F=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=C)r(c),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(c)}}function y(C){if(F=!1,d(C),!h)if(n(a)!==null)h=!0,_n(_);else{var P=n(c);P!==null&&Wt(y,P.startTime-C)}}function _(C,P){h=!1,F&&(F=!1,f(w),w=-1),g=!0;var R=v;try{for(d(P),p=n(a);p!==null&&(!(p.expirationTime>P)||C&&!ue());){var I=p.callback;if(typeof I=="function"){p.callback=null,v=p.priorityLevel;var K=I(p.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(a)&&r(a),d(P)}else r(a);p=n(a)}if(p!==null)var We=!0;else{var $e=n(c);$e!==null&&Wt(y,$e.startTime-P),We=!1}return We}finally{p=null,v=R,g=!1}}var x=!1,k=null,w=-1,U=5,L=-1;function ue(){return!(e.unstable_now()-L<U)}function Oe(){if(k!==null){var C=e.unstable_now();L=C;var P=!0;try{P=k(!0,C)}finally{P?ut():(x=!1,k=null)}}else x=!1}var ut;if(typeof s=="function")ut=function(){s(Oe)};else if(typeof MessageChannel<"u"){var Fn=new MessageChannel,mr=Fn.port2;Fn.port1.onmessage=Oe,ut=function(){mr.postMessage(null)}}else ut=function(){T(Oe,0)};function _n(C){k=C,x||(x=!0,ut())}function Wt(C,P){w=T(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,_n(_))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(v){case 1:case 2:case 3:var P=3;break;default:P=v}var R=v;v=P;try{return C()}finally{v=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=v;v=C;try{return P()}finally{v=R}},e.unstable_scheduleCallback=function(C,P,R){var I=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?I+R:I):R=I,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=R+K,C={id:m++,callback:P,priorityLevel:C,startTime:R,expirationTime:K,sortIndex:-1},R>I?(C.sortIndex=R,t(c,C),n(a)===null&&C===n(c)&&(F?(f(w),w=-1):F=!0,Wt(y,R-I))):(C.sortIndex=K,t(a,C),h||g||(h=!0,_n(_))),C},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(C){var P=v;return function(){var R=v;v=P;try{return C.apply(this,arguments)}finally{v=R}}}})(xa);_a.exports=xa;var Kc=_a.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=z,Ee=Kc;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ca=new Set,Hn={};function Bt(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Hn[e]=t,e=0;e<t.length;e++)Ca.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),il=Object.prototype.hasOwnProperty,Zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bi={},Zi={};function qc(e){return il.call(Zi,e)?!0:il.call(bi,e)?!1:Zc.test(e)?Zi[e]=!0:(bi[e]=!0,!1)}function ef(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tf(e,t,n,r){if(t===null||typeof t>"u"||ef(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var oi=/[\-:]([a-z])/g;function li(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oi,li);ie[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oi,li);ie[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oi,li);ie[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ii(e,t,n,r){var o=ie.hasOwnProperty(t)?ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tf(t,n,o,r)&&(n=null),r||o===null?qc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),ui=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),wa=Symbol.for("react.provider"),Ea=Symbol.for("react.context"),ai=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),si=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),ka=Symbol.for("react.offscreen"),qi=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=qi&&e[qi]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Oo;function Dn(e){if(Oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var jo=!1;function Mo(e,t){if(!e||jo)return"";jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,u=l.length-1;1<=i&&0<=u&&o[i]!==l[u];)u--;for(;1<=i&&0<=u;i--,u--)if(o[i]!==l[u]){if(i!==1||u!==1)do if(i--,u--,0>u||o[i]!==l[u]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=u);break}}}finally{jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function nf(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=Mo(e.type,!1),e;case 11:return e=Mo(e.type.render,!1),e;case 1:return e=Mo(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Xt:return"Portal";case ul:return"Profiler";case ui:return"StrictMode";case al:return"Suspense";case sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ea:return(e.displayName||"Context")+".Consumer";case wa:return(e._context.displayName||"Context")+".Provider";case ai:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case si:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===ui?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function za(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function of(e){var t=za(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=of(e))}function Ta(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=za(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pa(e,t){t=t.checked,t!=null&&ii(e,"checked",t,!1)}function dl(e,t){Pa(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&pl(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pl(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(On(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function Ra(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Na(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Na(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,La=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lf=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){lf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function Da(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Oa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Da(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var uf=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(e,t){if(t){if(uf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function ci(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,on=null,ln=null;function ou(e){if(e=dr(e)){if(typeof Sl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=xo(t),Sl(e.stateNode,e.type,t))}}function ja(e){on?ln?ln.push(e):ln=[e]:on=e}function Ma(){if(on){var e=on,t=ln;if(ln=on=null,ou(e),t)for(e=0;e<t.length;e++)ou(t[e])}}function Ia(e,t){return e(t)}function Ua(){}var Io=!1;function Aa(e,t,n){if(Io)return e(t,n);Io=!0;try{return Ia(e,t,n)}finally{Io=!1,(on!==null||ln!==null)&&(Ua(),Ma())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Fl=!1;if(nt)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Fl=!1}function af(e,t,n,r,o,l,i,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Un=!1,Yr=null,Qr=!1,_l=null,sf={onError:function(e){Un=!0,Yr=e}};function cf(e,t,n,r,o,l,i,u,a){Un=!1,Yr=null,af.apply(sf,arguments)}function ff(e,t,n,r,o,l,i,u,a){if(cf.apply(this,arguments),Un){if(Un){var c=Yr;Un=!1,Yr=null}else throw Error(S(198));Qr||(Qr=!0,_l=c)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ja(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(Vt(e)!==e)throw Error(S(188))}function df(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return lu(o),e;if(l===r)return lu(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i){for(u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Ba(e){return e=df(e),e!==null?Va(e):null}function Va(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Va(e);if(t!==null)return t;e=e.sibling}return null}var Wa=Ee.unstable_scheduleCallback,iu=Ee.unstable_cancelCallback,pf=Ee.unstable_shouldYield,mf=Ee.unstable_requestPaint,b=Ee.unstable_now,vf=Ee.unstable_getCurrentPriorityLevel,fi=Ee.unstable_ImmediatePriority,$a=Ee.unstable_UserBlockingPriority,Gr=Ee.unstable_NormalPriority,hf=Ee.unstable_LowPriority,Xa=Ee.unstable_IdlePriority,go=null,Qe=null;function yf(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Ff,gf=Math.log,Sf=Math.LN2;function Ff(e){return e>>>=0,e===0?32:31-(gf(e)/Sf|0)|0}var _r=64,xr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~o;u!==0?r=jn(u):(l&=i,l!==0&&(r=jn(l)))}else i=n&~o,i!==0?r=jn(i):l!==0&&(r=jn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function _f(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Je(l),u=1<<i,a=o[i];a===-1?(!(u&n)||u&r)&&(o[i]=_f(u,t)):a<=t&&(e.expiredLanes|=u),l&=~u}}function xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ha(){var e=_r;return _r<<=1,!(_r&4194240)&&(_r=64),e}function Uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Cf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function di(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function Ya(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qa,pi,Ga,Ka,ba,Cl=!1,Cr=[],vt=null,ht=null,yt=null,Gn=new Map,Kn=new Map,ft=[],wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function zn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=dr(t),t!==null&&pi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ef(e,t,n,r,o){switch(t){case"focusin":return vt=zn(vt,e,t,n,r,o),!0;case"dragenter":return ht=zn(ht,e,t,n,r,o),!0;case"mouseover":return yt=zn(yt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Gn.set(l,zn(Gn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Kn.set(l,zn(Kn.get(l)||null,e,t,n,r,o)),!0}return!1}function Za(e){var t=Nt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ja(n),t!==null){e.blockedOn=t,ba(e.priority,function(){Ga(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=dr(n),t!==null&&pi(t),e.blockedOn=n,!1;t.shift()}return!0}function au(e,t,n){Mr(e)&&n.delete(t)}function kf(){Cl=!1,vt!==null&&Mr(vt)&&(vt=null),ht!==null&&Mr(ht)&&(ht=null),yt!==null&&Mr(yt)&&(yt=null),Gn.forEach(au),Kn.forEach(au)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,kf)))}function bn(e){function t(o){return Tn(o,e)}if(0<Cr.length){Tn(Cr[0],e);for(var n=1;n<Cr.length;n++){var r=Cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&Tn(vt,e),ht!==null&&Tn(ht,e),yt!==null&&Tn(yt,e),Gn.forEach(t),Kn.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)Za(n),n.blockedOn===null&&ft.shift()}var un=it.ReactCurrentBatchConfig,br=!0;function zf(e,t,n,r){var o=M,l=un.transition;un.transition=null;try{M=1,mi(e,t,n,r)}finally{M=o,un.transition=l}}function Tf(e,t,n,r){var o=M,l=un.transition;un.transition=null;try{M=4,mi(e,t,n,r)}finally{M=o,un.transition=l}}function mi(e,t,n,r){if(br){var o=wl(e,t,n,r);if(o===null)Qo(e,t,r,Zr,n),uu(e,r);else if(Ef(o,e,t,n,r))r.stopPropagation();else if(uu(e,r),t&4&&-1<wf.indexOf(e)){for(;o!==null;){var l=dr(o);if(l!==null&&Qa(l),l=wl(e,t,n,r),l===null&&Qo(e,t,r,Zr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Qo(e,t,r,null,n)}}var Zr=null;function wl(e,t,n,r){if(Zr=null,e=ci(r),e=Nt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ja(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function qa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vf()){case fi:return 1;case $a:return 4;case Gr:case hf:return 16;case Xa:return 536870912;default:return 16}default:return 16}}var pt=null,vi=null,Ir=null;function es(){if(Ir)return Ir;var e,t=vi,n=t.length,r,o="value"in pt?pt.value:pt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Ir=o.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function su(){return!1}function ze(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wr:su,this.isPropagationStopped=su,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hi=ze(gn),fr=Q({},gn,{view:0,detail:0}),Pf=ze(fr),Ao,Jo,Pn,So=Q({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Ao=e.screenX-Pn.screenX,Jo=e.screenY-Pn.screenY):Jo=Ao=0,Pn=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),cu=ze(So),Rf=Q({},So,{dataTransfer:0}),Nf=ze(Rf),Lf=Q({},fr,{relatedTarget:0}),Bo=ze(Lf),Df=Q({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Of=ze(Df),jf=Q({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=ze(jf),If=Q({},gn,{data:0}),fu=ze(If),Uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jf[e])?!!t[e]:!1}function yi(){return Bf}var Vf=Q({},fr,{key:function(e){if(e.key){var t=Uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yi,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wf=ze(Vf),$f=Q({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=ze($f),Xf=Q({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yi}),Hf=ze(Xf),Yf=Q({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=ze(Yf),Gf=Q({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kf=ze(Gf),bf=[9,13,27,32],gi=nt&&"CompositionEvent"in window,An=null;nt&&"documentMode"in document&&(An=document.documentMode);var Zf=nt&&"TextEvent"in window&&!An,ts=nt&&(!gi||An&&8<An&&11>=An),pu=String.fromCharCode(32),mu=!1;function ns(e,t){switch(e){case"keyup":return bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function qf(e,t){switch(e){case"compositionend":return rs(t);case"keypress":return t.which!==32?null:(mu=!0,pu);case"textInput":return e=t.data,e===pu&&mu?null:e;default:return null}}function e0(e,t){if(Yt)return e==="compositionend"||!gi&&ns(e,t)?(e=es(),Ir=vi=pt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ts&&t.locale!=="ko"?null:t.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!t0[e.type]:t==="textarea"}function os(e,t,n,r){ja(r),t=qr(t,"onChange"),0<t.length&&(n=new hi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,Zn=null;function n0(e){vs(e,0)}function Fo(e){var t=Kt(e);if(Ta(t))return e}function r0(e,t){if(e==="change")return t}var ls=!1;if(nt){var Vo;if(nt){var Wo="oninput"in document;if(!Wo){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),Wo=typeof hu.oninput=="function"}Vo=Wo}else Vo=!1;ls=Vo&&(!document.documentMode||9<document.documentMode)}function yu(){Jn&&(Jn.detachEvent("onpropertychange",is),Zn=Jn=null)}function is(e){if(e.propertyName==="value"&&Fo(Zn)){var t=[];os(t,Zn,e,ci(e)),Aa(n0,t)}}function o0(e,t,n){e==="focusin"?(yu(),Jn=t,Zn=n,Jn.attachEvent("onpropertychange",is)):e==="focusout"&&yu()}function l0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(Zn)}function i0(e,t){if(e==="click")return Fo(t)}function u0(e,t){if(e==="input"||e==="change")return Fo(t)}function a0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:a0;function qn(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!il.call(t,o)||!Ve(e[o],t[o]))return!1}return!0}function gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Su(e,t){var n=gu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gu(n)}}function us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function as(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function Si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s0(e){var t=as(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&us(n.ownerDocument.documentElement,n)){if(r!==null&&Si(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Su(n,l);var i=Su(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var c0=nt&&"documentMode"in document&&11>=document.documentMode,Qt=null,El=null,Bn=null,kl=!1;function Fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kl||Qt==null||Qt!==Hr(r)||(r=Qt,"selectionStart"in r&&Si(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&qn(Bn,r)||(Bn=r,r=qr(El,"onSelect"),0<r.length&&(t=new hi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},$o={},ss={};nt&&(ss=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function _o(e){if($o[e])return $o[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ss)return $o[e]=t[n];return e}var cs=_o("animationend"),fs=_o("animationiteration"),ds=_o("animationstart"),ps=_o("transitionend"),ms=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){ms.set(e,t),Bt(t,[e])}for(var Xo=0;Xo<_u.length;Xo++){var Ho=_u[Xo],f0=Ho.toLowerCase(),d0=Ho[0].toUpperCase()+Ho.slice(1);Et(f0,"on"+d0)}Et(cs,"onAnimationEnd");Et(fs,"onAnimationIteration");Et(ds,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(ps,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ff(r,t,void 0,e),e.currentTarget=null}function vs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==l&&o.isPropagationStopped())break e;xu(o,u,c),l=a}else for(i=0;i<r.length;i++){if(u=r[i],a=u.instance,c=u.currentTarget,u=u.listener,a!==l&&o.isPropagationStopped())break e;xu(o,u,c),l=a}}}if(Qr)throw e=_l,Qr=!1,_l=null,e}function B(e,t){var n=t[Nl];n===void 0&&(n=t[Nl]=new Set);var r=e+"__bubble";n.has(r)||(hs(t,e,2,!1),n.add(r))}function Yo(e,t,n){var r=0;t&&(r|=4),hs(n,e,r,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[kr]){e[kr]=!0,Ca.forEach(function(n){n!=="selectionchange"&&(p0.has(n)||Yo(n,!1,e),Yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,Yo("selectionchange",!1,t))}}function hs(e,t,n,r){switch(qa(t)){case 1:var o=zf;break;case 4:o=Tf;break;default:o=mi}n=o.bind(null,t,n,e),o=void 0,!Fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Qo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;u!==null;){if(i=Nt(u),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}u=u.parentNode}}r=r.return}Aa(function(){var c=l,m=ci(n),p=[];e:{var v=ms.get(e);if(v!==void 0){var g=hi,h=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":g=Wf;break;case"focusin":h="focus",g=Bo;break;case"focusout":h="blur",g=Bo;break;case"beforeblur":case"afterblur":g=Bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Hf;break;case cs:case fs:case ds:g=Of;break;case ps:g=Qf;break;case"scroll":g=Pf;break;case"wheel":g=Kf;break;case"copy":case"cut":case"paste":g=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=du}var F=(t&4)!==0,T=!F&&e==="scroll",f=F?v!==null?v+"Capture":null:v;F=[];for(var s=c,d;s!==null;){d=s;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=Qn(s,f),y!=null&&F.push(tr(s,y,d)))),T)break;s=s.return}0<F.length&&(v=new g(v,h,null,n,m),p.push({event:v,listeners:F}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",v&&n!==gl&&(h=n.relatedTarget||n.fromElement)&&(Nt(h)||h[rt]))break e;if((g||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,g?(h=n.relatedTarget||n.toElement,g=c,h=h?Nt(h):null,h!==null&&(T=Vt(h),h!==T||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=c),g!==h)){if(F=cu,y="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(F=du,y="onPointerLeave",f="onPointerEnter",s="pointer"),T=g==null?v:Kt(g),d=h==null?v:Kt(h),v=new F(y,s+"leave",g,n,m),v.target=T,v.relatedTarget=d,y=null,Nt(m)===c&&(F=new F(f,s+"enter",h,n,m),F.target=d,F.relatedTarget=T,y=F),T=y,g&&h)t:{for(F=g,f=h,s=0,d=F;d;d=$t(d))s++;for(d=0,y=f;y;y=$t(y))d++;for(;0<s-d;)F=$t(F),s--;for(;0<d-s;)f=$t(f),d--;for(;s--;){if(F===f||f!==null&&F===f.alternate)break t;F=$t(F),f=$t(f)}F=null}else F=null;g!==null&&Cu(p,v,g,F,!1),h!==null&&T!==null&&Cu(p,T,h,F,!0)}}e:{if(v=c?Kt(c):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var _=r0;else if(vu(v))if(ls)_=u0;else{_=l0;var x=o0}else(g=v.nodeName)&&g.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(_=i0);if(_&&(_=_(e,c))){os(p,_,n,m);break e}x&&x(e,v,c),e==="focusout"&&(x=v._wrapperState)&&x.controlled&&v.type==="number"&&pl(v,"number",v.value)}switch(x=c?Kt(c):window,e){case"focusin":(vu(x)||x.contentEditable==="true")&&(Qt=x,El=c,Bn=null);break;case"focusout":Bn=El=Qt=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,Fu(p,n,m);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":Fu(p,n,m)}var k;if(gi)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Yt?ns(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(ts&&n.locale!=="ko"&&(Yt||w!=="onCompositionStart"?w==="onCompositionEnd"&&Yt&&(k=es()):(pt=m,vi="value"in pt?pt.value:pt.textContent,Yt=!0)),x=qr(c,w),0<x.length&&(w=new fu(w,e,null,n,m),p.push({event:w,listeners:x}),k?w.data=k:(k=rs(n),k!==null&&(w.data=k)))),(k=Zf?qf(e,n):e0(e,n))&&(c=qr(c,"onBeforeInput"),0<c.length&&(m=new fu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=k))}vs(p,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Qn(e,n),l!=null&&r.unshift(tr(e,l,o)),l=Qn(e,t),l!=null&&r.push(tr(e,l,o))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,o?(a=Qn(n,l),a!=null&&i.unshift(tr(n,a,u))):o||(a=Qn(n,l),a!=null&&i.push(tr(n,a,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var m0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function wu(e){return(typeof e=="string"?e:""+e).replace(m0,`
`).replace(v0,"")}function zr(e,t,n){if(t=wu(t),wu(e)!==t&&n)throw Error(S(425))}function eo(){}var zl=null,Tl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,Eu=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Eu<"u"?function(e){return Eu.resolve(null).then(e).catch(g0)}:Rl;function g0(e){setTimeout(function(){throw e})}function Go(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);bn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Sn,nr="__reactProps$"+Sn,rt="__reactContainer$"+Sn,Nl="__reactEvents$"+Sn,S0="__reactListeners$"+Sn,F0="__reactHandles$"+Sn;function Nt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ku(e);e!==null;){if(n=e[Ye])return n;e=ku(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[Ye]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function xo(e){return e[nr]||null}var Ll=[],bt=-1;function kt(e){return{current:e}}function V(e){0>bt||(e.current=Ll[bt],Ll[bt]=null,bt--)}function A(e,t){bt++,Ll[bt]=e.current,e.current=t}var wt={},fe=kt(wt),ge=kt(!1),Mt=wt;function fn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function to(){V(ge),V(fe)}function zu(e,t,n){if(fe.current!==wt)throw Error(S(168));A(fe,t),A(ge,n)}function ys(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,rf(e)||"Unknown",o));return Q({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Mt=fe.current,A(fe,e),A(ge,ge.current),!0}function Tu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=ys(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,V(ge),V(fe),A(fe,e)):V(ge),A(ge,n)}var be=null,Co=!1,Ko=!1;function gs(e){be===null?be=[e]:be.push(e)}function _0(e){Co=!0,gs(e)}function zt(){if(!Ko&&be!==null){Ko=!0;var e=0,t=M;try{var n=be;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}be=null,Co=!1}catch(o){throw be!==null&&(be=be.slice(e+1)),Wa(fi,zt),o}finally{M=t,Ko=!1}}return null}var Zt=[],qt=0,ro=null,oo=0,Te=[],Pe=0,It=null,qe=1,et="";function Tt(e,t){Zt[qt++]=oo,Zt[qt++]=ro,ro=e,oo=t}function Ss(e,t,n){Te[Pe++]=qe,Te[Pe++]=et,Te[Pe++]=It,It=e;var r=qe;e=et;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var l=32-Je(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,qe=1<<32-Je(t)+o|n<<o|r,et=l+e}else qe=1<<l|n<<o|r,et=e}function Fi(e){e.return!==null&&(Tt(e,1),Ss(e,1,0))}function _i(e){for(;e===ro;)ro=Zt[--qt],Zt[qt]=null,oo=Zt[--qt],Zt[qt]=null;for(;e===It;)It=Te[--Pe],Te[Pe]=null,et=Te[--Pe],Te[Pe]=null,qe=Te[--Pe],Te[Pe]=null}var we=null,Ce=null,X=!1,Ae=null;function Fs(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,Ce=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:qe,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,Ce=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(X){var t=Ce;if(t){var n=t;if(!Pu(e,t)){if(Dl(e))throw Error(S(418));t=gt(n.nextSibling);var r=we;t&&Pu(e,t)?Fs(r,n):(e.flags=e.flags&-4097|2,X=!1,we=e)}}else{if(Dl(e))throw Error(S(418));e.flags=e.flags&-4097|2,X=!1,we=e}}}function Ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Tr(e){if(e!==we)return!1;if(!X)return Ru(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=Ce)){if(Dl(e))throw _s(),Error(S(418));for(;t;)Fs(e,t),t=gt(t.nextSibling)}if(Ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=we?gt(e.stateNode.nextSibling):null;return!0}function _s(){for(var e=Ce;e;)e=gt(e.nextSibling)}function dn(){Ce=we=null,X=!1}function xi(e){Ae===null?Ae=[e]:Ae.push(e)}var x0=it.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var u=o.refs;i===null?delete u[l]:u[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Pr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nu(e){var t=e._init;return t(e._payload)}function xs(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function o(f,s){return f=xt(f,s),f.index=0,f.sibling=null,f}function l(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,s,d,y){return s===null||s.tag!==6?(s=rl(d,f.mode,y),s.return=f,s):(s=o(s,d),s.return=f,s)}function a(f,s,d,y){var _=d.type;return _===Ht?m(f,s,d.props.children,y,d.key):s!==null&&(s.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===st&&Nu(_)===s.type)?(y=o(s,d.props),y.ref=Rn(f,s,d),y.return=f,y):(y=Xr(d.type,d.key,d.props,null,f.mode,y),y.ref=Rn(f,s,d),y.return=f,y)}function c(f,s,d,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=ol(d,f.mode,y),s.return=f,s):(s=o(s,d.children||[]),s.return=f,s)}function m(f,s,d,y,_){return s===null||s.tag!==7?(s=jt(d,f.mode,y,_),s.return=f,s):(s=o(s,d),s.return=f,s)}function p(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=rl(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case gr:return d=Xr(s.type,s.key,s.props,null,f.mode,d),d.ref=Rn(f,null,s),d.return=f,d;case Xt:return s=ol(s,f.mode,d),s.return=f,s;case st:var y=s._init;return p(f,y(s._payload),d)}if(On(s)||En(s))return s=jt(s,f.mode,d,null),s.return=f,s;Pr(f,s)}return null}function v(f,s,d,y){var _=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:u(f,s,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:return d.key===_?a(f,s,d,y):null;case Xt:return d.key===_?c(f,s,d,y):null;case st:return _=d._init,v(f,s,_(d._payload),y)}if(On(d)||En(d))return _!==null?null:m(f,s,d,y,null);Pr(f,d)}return null}function g(f,s,d,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,u(s,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gr:return f=f.get(y.key===null?d:y.key)||null,a(s,f,y,_);case Xt:return f=f.get(y.key===null?d:y.key)||null,c(s,f,y,_);case st:var x=y._init;return g(f,s,d,x(y._payload),_)}if(On(y)||En(y))return f=f.get(d)||null,m(s,f,y,_,null);Pr(s,y)}return null}function h(f,s,d,y){for(var _=null,x=null,k=s,w=s=0,U=null;k!==null&&w<d.length;w++){k.index>w?(U=k,k=null):U=k.sibling;var L=v(f,k,d[w],y);if(L===null){k===null&&(k=U);break}e&&k&&L.alternate===null&&t(f,k),s=l(L,s,w),x===null?_=L:x.sibling=L,x=L,k=U}if(w===d.length)return n(f,k),X&&Tt(f,w),_;if(k===null){for(;w<d.length;w++)k=p(f,d[w],y),k!==null&&(s=l(k,s,w),x===null?_=k:x.sibling=k,x=k);return X&&Tt(f,w),_}for(k=r(f,k);w<d.length;w++)U=g(k,f,w,d[w],y),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?w:U.key),s=l(U,s,w),x===null?_=U:x.sibling=U,x=U);return e&&k.forEach(function(ue){return t(f,ue)}),X&&Tt(f,w),_}function F(f,s,d,y){var _=En(d);if(typeof _!="function")throw Error(S(150));if(d=_.call(d),d==null)throw Error(S(151));for(var x=_=null,k=s,w=s=0,U=null,L=d.next();k!==null&&!L.done;w++,L=d.next()){k.index>w?(U=k,k=null):U=k.sibling;var ue=v(f,k,L.value,y);if(ue===null){k===null&&(k=U);break}e&&k&&ue.alternate===null&&t(f,k),s=l(ue,s,w),x===null?_=ue:x.sibling=ue,x=ue,k=U}if(L.done)return n(f,k),X&&Tt(f,w),_;if(k===null){for(;!L.done;w++,L=d.next())L=p(f,L.value,y),L!==null&&(s=l(L,s,w),x===null?_=L:x.sibling=L,x=L);return X&&Tt(f,w),_}for(k=r(f,k);!L.done;w++,L=d.next())L=g(k,f,w,L.value,y),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?w:L.key),s=l(L,s,w),x===null?_=L:x.sibling=L,x=L);return e&&k.forEach(function(Oe){return t(f,Oe)}),X&&Tt(f,w),_}function T(f,s,d,y){if(typeof d=="object"&&d!==null&&d.type===Ht&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:e:{for(var _=d.key,x=s;x!==null;){if(x.key===_){if(_=d.type,_===Ht){if(x.tag===7){n(f,x.sibling),s=o(x,d.props.children),s.return=f,f=s;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===st&&Nu(_)===x.type){n(f,x.sibling),s=o(x,d.props),s.ref=Rn(f,x,d),s.return=f,f=s;break e}n(f,x);break}else t(f,x);x=x.sibling}d.type===Ht?(s=jt(d.props.children,f.mode,y,d.key),s.return=f,f=s):(y=Xr(d.type,d.key,d.props,null,f.mode,y),y.ref=Rn(f,s,d),y.return=f,f=y)}return i(f);case Xt:e:{for(x=d.key;s!==null;){if(s.key===x)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=o(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=ol(d,f.mode,y),s.return=f,f=s}return i(f);case st:return x=d._init,T(f,s,x(d._payload),y)}if(On(d))return h(f,s,d,y);if(En(d))return F(f,s,d,y);Pr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=o(s,d),s.return=f,f=s):(n(f,s),s=rl(d,f.mode,y),s.return=f,f=s),i(f)):n(f,s)}return T}var pn=xs(!0),Cs=xs(!1),lo=kt(null),io=null,en=null,Ci=null;function wi(){Ci=en=io=null}function Ei(e){var t=lo.current;V(lo),e._currentValue=t}function jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){io=e,Ci=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(io===null)throw Error(S(308));en=e,io.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Lt=null;function ki(e){Lt===null?Lt=[e]:Lt.push(e)}function ws(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ki(t)):(n.next=o.next,o.next=n),t.interleaved=n,ot(e,r)}function ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Es(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ot(e,n)}return o=r.interleaved,o===null?(t.next=t,ki(r)):(t.next=o.next,o.next=t),r.interleaved=t,ot(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,di(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var o=e.updateQueue;ct=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var a=u,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==i&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=a))}if(l!==null){var p=o.baseState;i=0,m=c=a=null,u=l;do{var v=u.lane,g=u.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var h=e,F=u;switch(v=t,g=n,F.tag){case 1:if(h=F.payload,typeof h=="function"){p=h.call(g,p,v);break e}p=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=F.payload,v=typeof h=="function"?h.call(g,p,v):h,v==null)break e;p=Q({},p,v);break e;case 2:ct=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[u]:v.push(u))}else g={eventTime:g,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=g,a=p):m=m.next=g,i|=v;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;v=u,u=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(1);if(m===null&&(a=p),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);At|=i,e.lanes=i,e.memoizedState=p}}function Du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var pr={},Ge=kt(pr),rr=kt(pr),or=kt(pr);function Dt(e){if(e===pr)throw Error(S(174));return e}function Ti(e,t){switch(A(or,t),A(rr,e),A(Ge,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vl(t,e)}V(Ge),A(Ge,t)}function mn(){V(Ge),V(rr),V(or)}function ks(e){Dt(or.current);var t=Dt(Ge.current),n=vl(t,e.type);t!==n&&(A(rr,e),A(Ge,n))}function Pi(e){rr.current===e&&(V(Ge),V(rr))}var H=kt(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bo=[];function Ri(){for(var e=0;e<bo.length;e++)bo[e]._workInProgressVersionPrimary=null;bo.length=0}var Jr=it.ReactCurrentDispatcher,Zo=it.ReactCurrentBatchConfig,Ut=0,Y=null,q=null,te=null,so=!1,Vn=!1,lr=0,C0=0;function ae(){throw Error(S(321))}function Ni(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function Li(e,t,n,r,o,l){if(Ut=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jr.current=e===null||e.memoizedState===null?z0:T0,e=n(r,o),Vn){l=0;do{if(Vn=!1,lr=0,25<=l)throw Error(S(301));l+=1,te=q=null,t.updateQueue=null,Jr.current=P0,e=n(r,o)}while(Vn)}if(Jr.current=co,t=q!==null&&q.next!==null,Ut=0,te=q=Y=null,so=!1,t)throw Error(S(300));return e}function Di(){var e=lr!==0;return lr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?Y.memoizedState=te=e:te=te.next=e,te}function De(){if(q===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=te===null?Y.memoizedState:te.next;if(t!==null)te=t,q=e;else{if(e===null)throw Error(S(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},te===null?Y.memoizedState=te=e:te=te.next=e}return te}function ir(e,t){return typeof t=="function"?t(e):t}function qo(e){var t=De(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=q,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var u=i=null,a=null,c=l;do{var m=c.lane;if((Ut&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=p,i=r):a=a.next=p,Y.lanes|=m,At|=m}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=u,Ve(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Y.lanes|=l,At|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=De(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ve(l,t.memoizedState)||(ye=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function zs(){}function Ts(e,t){var n=Y,r=De(),o=t(),l=!Ve(r.memoizedState,o);if(l&&(r.memoizedState=o,ye=!0),r=r.queue,Oi(Ns.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,ur(9,Rs.bind(null,n,r,o,t),void 0,null),ne===null)throw Error(S(349));Ut&30||Ps(n,t,o)}return o}function Ps(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rs(e,t,n,r){t.value=n,t.getSnapshot=r,Ls(t)&&Ds(e)}function Ns(e,t,n){return n(function(){Ls(t)&&Ds(e)})}function Ls(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Ds(e){var t=ot(e,1);t!==null&&Be(t,e,1,-1)}function Ou(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=k0.bind(null,Y,e),[t.memoizedState,e]}function ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Os(){return De().memoizedState}function Br(e,t,n,r){var o=He();Y.flags|=e,o.memoizedState=ur(1|t,n,void 0,r===void 0?null:r)}function wo(e,t,n,r){var o=De();r=r===void 0?null:r;var l=void 0;if(q!==null){var i=q.memoizedState;if(l=i.destroy,r!==null&&Ni(r,i.deps)){o.memoizedState=ur(t,n,l,r);return}}Y.flags|=e,o.memoizedState=ur(1|t,n,l,r)}function ju(e,t){return Br(8390656,8,e,t)}function Oi(e,t){return wo(2048,8,e,t)}function js(e,t){return wo(4,2,e,t)}function Ms(e,t){return wo(4,4,e,t)}function Is(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Us(e,t,n){return n=n!=null?n.concat([e]):null,wo(4,4,Is.bind(null,t,e),n)}function ji(){}function As(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ni(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Js(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ni(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bs(e,t,n){return Ut&21?(Ve(n,t)||(n=Ha(),Y.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function w0(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Zo.transition;Zo.transition={};try{e(!1),t()}finally{M=n,Zo.transition=r}}function Vs(){return De().memoizedState}function E0(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ws(e))$s(t,n);else if(n=ws(e,t,n,r),n!==null){var o=pe();Be(n,e,r,o),Xs(n,t,r)}}function k0(e,t,n){var r=_t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ws(e))$s(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,u=l(i,n);if(o.hasEagerState=!0,o.eagerState=u,Ve(u,i)){var a=t.interleaved;a===null?(o.next=o,ki(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=ws(e,t,o,r),n!==null&&(o=pe(),Be(n,e,r,o),Xs(n,t,r))}}function Ws(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function $s(e,t){Vn=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,di(e,n)}}var co={readContext:Le,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},z0={readContext:Le,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Is.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=E0.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Ou,useDebugValue:ji,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Ou(!1),t=e[0];return e=w0.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=He();if(X){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ne===null)throw Error(S(349));Ut&30||Ps(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,ju(Ns.bind(null,r,l,e),[e]),r.flags|=2048,ur(9,Rs.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=He(),t=ne.identifierPrefix;if(X){var n=et,r=qe;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=C0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},T0={readContext:Le,useCallback:As,useContext:Le,useEffect:Oi,useImperativeHandle:Us,useInsertionEffect:js,useLayoutEffect:Ms,useMemo:Js,useReducer:qo,useRef:Os,useState:function(){return qo(ir)},useDebugValue:ji,useDeferredValue:function(e){var t=De();return Bs(t,q.memoizedState,e)},useTransition:function(){var e=qo(ir)[0],t=De().memoizedState;return[e,t]},useMutableSource:zs,useSyncExternalStore:Ts,useId:Vs,unstable_isNewReconciler:!1},P0={readContext:Le,useCallback:As,useContext:Le,useEffect:Oi,useImperativeHandle:Us,useInsertionEffect:js,useLayoutEffect:Ms,useMemo:Js,useReducer:el,useRef:Os,useState:function(){return el(ir)},useDebugValue:ji,useDeferredValue:function(e){var t=De();return q===null?t.memoizedState=e:Bs(t,q.memoizedState,e)},useTransition:function(){var e=el(ir)[0],t=De().memoizedState;return[e,t]},useMutableSource:zs,useSyncExternalStore:Ts,useId:Vs,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),o=_t(e),l=tt(r,o);l.payload=t,n!=null&&(l.callback=n),t=St(e,l,o),t!==null&&(Be(t,e,o,r),Ar(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),o=_t(e),l=tt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=St(e,l,o),t!==null&&(Be(t,e,o,r),Ar(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=_t(e),o=tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=St(e,o,r),t!==null&&(Be(t,e,r,n),Ar(t,e,r))}};function Mu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(o,l):!0}function Hs(e,t,n){var r=!1,o=wt,l=t.contextType;return typeof l=="object"&&l!==null?l=Le(l):(o=Se(t)?Mt:fe.current,r=t.contextTypes,l=(r=r!=null)?fn(e,o):wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Il(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},zi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Le(l):(l=Se(t)?Mt:fe.current,o.context=fn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ml(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Eo.enqueueReplaceState(o,o.state,null),uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=nf(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var R0=typeof WeakMap=="function"?WeakMap:Map;function Ys(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){po||(po=!0,Ql=r),Ul(e,t)},n}function Qs(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ul(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ul(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new R0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$0.bind(null,e,t,n),t.then(e,e))}function Au(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ju(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var N0=it.ReactCurrentOwner,ye=!1;function de(e,t,n,r){t.child=e===null?Cs(t,null,n,r):pn(t,e.child,n,r)}function Bu(e,t,n,r,o){n=n.render;var l=t.ref;return an(t,o),r=Li(e,t,n,r,l,o),n=Di(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(X&&n&&Fi(t),t.flags|=1,de(e,t,r,o),t.child)}function Vu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Wi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Gs(e,t,l,r,o)):(e=Xr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(i,r)&&e.ref===t.ref)return lt(e,t,o)}return t.flags|=1,e=xt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Gs(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(qn(l,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,lt(e,t,o)}return Al(e,t,n,r,o)}function Ks(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(nn,xe),xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(nn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,A(nn,xe),xe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,A(nn,xe),xe|=r;return de(e,t,o,n),t.child}function bs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,n,r,o){var l=Se(n)?Mt:fe.current;return l=fn(t,l),an(t,o),n=Li(e,t,n,r,l,o),r=Di(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(X&&r&&Fi(t),t.flags|=1,de(e,t,n,o),t.child)}function Wu(e,t,n,r,o){if(Se(n)){var l=!0;no(t)}else l=!1;if(an(t,o),t.stateNode===null)Vr(e,t),Hs(t,n,r),Il(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=Se(n)?Mt:fe.current,c=fn(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Iu(t,i,r,c),ct=!1;var v=t.memoizedState;i.state=v,uo(t,r,i,o),a=t.memoizedState,u!==r||v!==a||ge.current||ct?(typeof m=="function"&&(Ml(t,n,m,r),a=t.memoizedState),(u=ct||Mu(t,n,u,r,v,a,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Es(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Ie(t.type,u),i.props=c,p=t.pendingProps,v=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Le(a):(a=Se(n)?Mt:fe.current,a=fn(t,a));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==p||v!==a)&&Iu(t,i,r,a),ct=!1,v=t.memoizedState,i.state=v,uo(t,r,i,o);var h=t.memoizedState;u!==p||v!==h||ge.current||ct?(typeof g=="function"&&(Ml(t,n,g,r),h=t.memoizedState),(c=ct||Mu(t,n,c,r,v,h,a)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,h,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,h,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Jl(e,t,n,r,l,o)}function Jl(e,t,n,r,o,l){bs(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Tu(t,n,!1),lt(e,t,l);r=t.stateNode,N0.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=pn(t,e.child,null,l),t.child=pn(t,null,u,l)):de(e,t,u,l),t.memoizedState=r.state,o&&Tu(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zu(e,t.context,!1),Ti(e,t.containerInfo)}function $u(e,t,n,r,o){return dn(),xi(o),t.flags|=256,de(e,t,n,r),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0};function Vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qs(e,t,n){var r=t.pendingProps,o=H.current,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),A(H,o&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=To(i,r,0,null),e=jt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Vl(n),t.memoizedState=Bl,e):Mi(t,i));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return L0(e,t,i,r,u,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,u=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=xt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?l=xt(u,l):(l=jt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Vl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Bl,r}return l=e.child,e=l.sibling,r=xt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mi(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&xi(r),pn(t,e.child,null,n),e=Mi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function L0(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(S(422))),Rr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=To({mode:"visible",children:r.children},o,0,null),l=jt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&pn(t,e.child,null,i),t.child.memoizedState=Vl(i),t.memoizedState=Bl,l);if(!(t.mode&1))return Rr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(S(419)),r=tl(l,r,void 0),Rr(e,t,i,r)}if(u=(i&e.childLanes)!==0,ye||u){if(r=ne,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ot(e,o),Be(r,e,o,-1))}return Vi(),r=tl(Error(S(421))),Rr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=X0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ce=gt(o.nextSibling),we=t,X=!0,Ae=null,e!==null&&(Te[Pe++]=qe,Te[Pe++]=et,Te[Pe++]=It,qe=e.id,et=e.overflow,It=t),t=Mi(t,r.children),t.flags|=4096,t)}function Xu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jl(e.return,t,n)}function nl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function ec(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(de(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xu(e,n,t);else if(e.tag===19)Xu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(H,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),nl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ao(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}nl(t,!0,n,null,l);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function D0(e,t,n){switch(t.tag){case 3:Zs(t),dn();break;case 5:ks(t);break;case 1:Se(t.type)&&no(t);break;case 4:Ti(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;A(lo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?qs(e,t,n):(A(H,H.current&1),e=lt(e,t,n),e!==null?e.sibling:null);A(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ec(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),A(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Ks(e,t,n)}return lt(e,t,n)}var tc,Wl,nc,rc;tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wl=function(){};nc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dt(Ge.current);var l=null;switch(n){case"input":o=fl(e,o),r=fl(e,r),l=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),l=[];break;case"textarea":o=ml(e,o),r=ml(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}hl(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(u=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&B("scroll",e),l||u===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};rc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function O0(e,t,n){var r=t.pendingProps;switch(_i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return Se(t.type)&&to(),se(t),null;case 3:return r=t.stateNode,mn(),V(ge),V(fe),Ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(bl(Ae),Ae=null))),Wl(e,t),se(t),null;case 5:Pi(t);var o=Dt(or.current);if(n=t.type,e!==null&&t.stateNode!=null)nc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return se(t),null}if(e=Dt(Ge.current),Tr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ye]=t,r[nr]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Mn.length;o++)B(Mn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":eu(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":nu(r,l),B("invalid",r)}hl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,u,e),o=["children",""+u]):Hn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":Sr(r),tu(r,l,!0);break;case"textarea":Sr(r),ru(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=eo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Na(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ye]=t,e[nr]=r,tc(e,t,!1,!1),t.stateNode=e;e:{switch(i=yl(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mn.length;o++)B(Mn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":eu(e,r),o=fl(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),B("invalid",e);break;case"textarea":nu(e,r),o=ml(e,r),B("invalid",e);break;default:o=r}hl(n,o),u=o;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?Oa(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&La(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Yn(e,a):typeof a=="number"&&Yn(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Hn.hasOwnProperty(l)?a!=null&&l==="onScroll"&&B("scroll",e):a!=null&&ii(e,l,a,i))}switch(n){case"input":Sr(e),tu(e,r,!1);break;case"textarea":Sr(e),ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?rn(e,!!r.multiple,l,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)rc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Dt(or.current),Dt(Ge.current),Tr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(l=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return se(t),null;case 13:if(V(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ce!==null&&t.mode&1&&!(t.flags&128))_s(),dn(),t.flags|=98560,l=!1;else if(l=Tr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Ye]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),l=!1}else Ae!==null&&(bl(Ae),Ae=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?ee===0&&(ee=3):Vi())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return mn(),Wl(e,t),e===null&&er(t.stateNode.containerInfo),se(t),null;case 10:return Ei(t.type._context),se(t),null;case 17:return Se(t.type)&&to(),se(t),null;case 19:if(V(H),l=t.memoizedState,l===null)return se(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Nn(l,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ao(e),i!==null){for(t.flags|=128,Nn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&b()>hn&&(t.flags|=128,r=!0,Nn(l,!1),t.lanes=4194304)}else{if(!r)if(e=ao(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!X)return se(t),null}else 2*b()-l.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=b(),t.sibling=null,n=H.current,A(H,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Bi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function j0(e,t){switch(_i(t),t.tag){case 1:return Se(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),V(ge),V(fe),Ri(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pi(t),null;case 13:if(V(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(H),null;case 4:return mn(),null;case 10:return Ei(t.type._context),null;case 22:case 23:return Bi(),null;case 24:return null;default:return null}}var Nr=!1,ce=!1,M0=typeof WeakSet=="function"?WeakSet:Set,E=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function $l(e,t,n){try{n()}catch(r){G(e,t,r)}}var Hu=!1;function I0(e,t){if(zl=br,e=as(),Si(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,u=-1,a=-1,c=0,m=0,p=e,v=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(u=i+o),p!==l||r!==0&&p.nodeType!==3||(a=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(g=p.firstChild)!==null;)v=p,p=g;for(;;){if(p===e)break t;if(v===n&&++c===o&&(u=i),v===l&&++m===r&&(a=i),(g=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=g}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},br=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var F=h.memoizedProps,T=h.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?F:Ie(t.type,F),T);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){G(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return h=Hu,Hu=!1,h}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&$l(t,n,l)}o=o.next}while(o!==r)}}function ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function oc(e){var t=e.alternate;t!==null&&(e.alternate=null,oc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[nr],delete t[Nl],delete t[S0],delete t[F0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lc(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var oe=null,Ue=!1;function at(e,t,n){for(n=n.child;n!==null;)ic(e,t,n),n=n.sibling}function ic(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:ce||tn(n,t);case 6:var r=oe,o=Ue;oe=null,at(e,t,n),oe=r,Ue=o,oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?Go(e.parentNode,n):e.nodeType===1&&Go(e,n),bn(e)):Go(oe,n.stateNode));break;case 4:r=oe,o=Ue,oe=n.stateNode.containerInfo,Ue=!0,at(e,t,n),oe=r,Ue=o;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&$l(n,t,i),o=o.next}while(o!==r)}at(e,t,n);break;case 1:if(!ce&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){G(n,t,u)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,at(e,t,n),ce=r):at(e,t,n);break;default:at(e,t,n)}}function Qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new M0),t.forEach(function(r){var o=H0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:oe=u.stateNode,Ue=!1;break e;case 3:oe=u.stateNode.containerInfo,Ue=!0;break e;case 4:oe=u.stateNode.containerInfo,Ue=!0;break e}u=u.return}if(oe===null)throw Error(S(160));ic(l,i,o),oe=null,Ue=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){G(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uc(t,e),t=t.sibling}function uc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Xe(e),r&4){try{Wn(3,e,e.return),ko(3,e)}catch(F){G(e,e.return,F)}try{Wn(5,e,e.return)}catch(F){G(e,e.return,F)}}break;case 1:Me(t,e),Xe(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Me(t,e),Xe(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var o=e.stateNode;try{Yn(o,"")}catch(F){G(e,e.return,F)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Pa(o,l),yl(u,i);var c=yl(u,l);for(i=0;i<a.length;i+=2){var m=a[i],p=a[i+1];m==="style"?Oa(o,p):m==="dangerouslySetInnerHTML"?La(o,p):m==="children"?Yn(o,p):ii(o,m,p,c)}switch(u){case"input":dl(o,l);break;case"textarea":Ra(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?rn(o,!!l.multiple,g,!1):v!==!!l.multiple&&(l.defaultValue!=null?rn(o,!!l.multiple,l.defaultValue,!0):rn(o,!!l.multiple,l.multiple?[]:"",!1))}o[nr]=l}catch(F){G(e,e.return,F)}}break;case 6:if(Me(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(F){G(e,e.return,F)}}break;case 3:if(Me(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(F){G(e,e.return,F)}break;case 4:Me(t,e),Xe(e);break;case 13:Me(t,e),Xe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ai=b())),r&4&&Qu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(c=ce)||m,Me(t,e),ce=c):Me(t,e),Xe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(p=E=m;E!==null;){switch(v=E,g=v.child,v.tag){case 0:case 11:case 14:case 15:Wn(4,v,v.return);break;case 1:tn(v,v.return);var h=v.stateNode;if(typeof h.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(F){G(r,n,F)}}break;case 5:tn(v,v.return);break;case 22:if(v.memoizedState!==null){Ku(p);continue}}g!==null?(g.return=v,E=g):Ku(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=p.stateNode,a=p.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Da("display",i))}catch(F){G(e,e.return,F)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(F){G(e,e.return,F)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(t,e),Xe(e),r&4&&Qu(e);break;case 21:break;default:Me(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yn(o,""),r.flags&=-33);var l=Yu(e);Yl(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Yu(e);Hl(e,u,i);break;default:throw Error(S(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function U0(e,t,n){E=e,ac(e)}function ac(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Nr;if(!i){var u=o.alternate,a=u!==null&&u.memoizedState!==null||ce;u=Nr;var c=ce;if(Nr=i,(ce=a)&&!c)for(E=o;E!==null;)i=E,a=i.child,i.tag===22&&i.memoizedState!==null?bu(o):a!==null?(a.return=i,E=a):bu(o);for(;l!==null;)E=l,ac(l),l=l.sibling;E=o,Nr=u,ce=c}Gu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,E=l):Gu(e)}}function Gu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Du(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Du(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&bn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ce||t.flags&512&&Xl(t)}catch(v){G(t,t.return,v)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Ku(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function bu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ko(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){G(t,o,a)}}var l=t.return;try{Xl(t)}catch(a){G(t,l,a)}break;case 5:var i=t.return;try{Xl(t)}catch(a){G(t,i,a)}}}catch(a){G(t,t.return,a)}if(t===e){E=null;break}var u=t.sibling;if(u!==null){u.return=t.return,E=u;break}E=t.return}}var A0=Math.ceil,fo=it.ReactCurrentDispatcher,Ii=it.ReactCurrentOwner,Ne=it.ReactCurrentBatchConfig,j=0,ne=null,Z=null,le=0,xe=0,nn=kt(0),ee=0,ar=null,At=0,zo=0,Ui=0,$n=null,he=null,Ai=0,hn=1/0,Ke=null,po=!1,Ql=null,Ft=null,Lr=!1,mt=null,mo=0,Xn=0,Gl=null,Wr=-1,$r=0;function pe(){return j&6?b():Wr!==-1?Wr:Wr=b()}function _t(e){return e.mode&1?j&2&&le!==0?le&-le:x0.transition!==null?($r===0&&($r=Ha()),$r):(e=M,e!==0||(e=window.event,e=e===void 0?16:qa(e.type)),e):1}function Be(e,t,n,r){if(50<Xn)throw Xn=0,Gl=null,Error(S(185));cr(e,n,r),(!(j&2)||e!==ne)&&(e===ne&&(!(j&2)&&(zo|=n),ee===4&&dt(e,le)),Fe(e,r),n===1&&j===0&&!(t.mode&1)&&(hn=b()+500,Co&&zt()))}function Fe(e,t){var n=e.callbackNode;xf(e,t);var r=Kr(e,e===ne?le:0);if(r===0)n!==null&&iu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&iu(n),t===1)e.tag===0?_0(Zu.bind(null,e)):gs(Zu.bind(null,e)),y0(function(){!(j&6)&&zt()}),n=null;else{switch(Ya(r)){case 1:n=fi;break;case 4:n=$a;break;case 16:n=Gr;break;case 536870912:n=Xa;break;default:n=Gr}n=hc(n,sc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sc(e,t){if(Wr=-1,$r=0,j&6)throw Error(S(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Kr(e,e===ne?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var o=j;j|=2;var l=fc();(ne!==e||le!==t)&&(Ke=null,hn=b()+500,Ot(e,t));do try{V0();break}catch(u){cc(e,u)}while(1);wi(),fo.current=l,j=o,Z!==null?t=0:(ne=null,le=0,t=ee)}if(t!==0){if(t===2&&(o=xl(e),o!==0&&(r=o,t=Kl(e,o))),t===1)throw n=ar,Ot(e,0),dt(e,r),Fe(e,b()),n;if(t===6)dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!J0(o)&&(t=vo(e,r),t===2&&(l=xl(e),l!==0&&(r=l,t=Kl(e,l))),t===1))throw n=ar,Ot(e,0),dt(e,r),Fe(e,b()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Pt(e,he,Ke);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=Ai+500-b(),10<t)){if(Kr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(Pt.bind(null,e,he,Ke),t);break}Pt(e,he,Ke);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Je(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*A0(r/1960))-r,10<r){e.timeoutHandle=Rl(Pt.bind(null,e,he,Ke),r);break}Pt(e,he,Ke);break;case 5:Pt(e,he,Ke);break;default:throw Error(S(329))}}}return Fe(e,b()),e.callbackNode===n?sc.bind(null,e):null}function Kl(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=vo(e,t),e!==2&&(t=he,he=n,t!==null&&bl(t)),e}function bl(e){he===null?he=e:he.push.apply(he,e)}function J0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ve(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~Ui,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Zu(e){if(j&6)throw Error(S(327));sn();var t=Kr(e,0);if(!(t&1))return Fe(e,b()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=xl(e);r!==0&&(t=r,n=Kl(e,r))}if(n===1)throw n=ar,Ot(e,0),dt(e,t),Fe(e,b()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,he,Ke),Fe(e,b()),null}function Ji(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(hn=b()+500,Co&&zt())}}function Jt(e){mt!==null&&mt.tag===0&&!(j&6)&&sn();var t=j;j|=1;var n=Ne.transition,r=M;try{if(Ne.transition=null,M=1,e)return e()}finally{M=r,Ne.transition=n,j=t,!(j&6)&&zt()}}function Bi(){xe=nn.current,V(nn)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,h0(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:mn(),V(ge),V(fe),Ri();break;case 5:Pi(r);break;case 4:mn();break;case 13:V(H);break;case 19:V(H);break;case 10:Ei(r.type._context);break;case 22:case 23:Bi()}n=n.return}if(ne=e,Z=e=xt(e.current,null),le=xe=t,ee=0,ar=null,Ui=zo=At=0,he=$n=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Lt=null}return e}function cc(e,t){do{var n=Z;try{if(wi(),Jr.current=co,so){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}so=!1}if(Ut=0,te=q=Y=null,Vn=!1,lr=0,Ii.current=null,n===null||n.return===null){ee=1,ar=t,Z=null;break}e:{var l=e,i=n.return,u=n,a=t;if(t=le,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=u,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=Au(i);if(g!==null){g.flags&=-257,Ju(g,i,u,l,t),g.mode&1&&Uu(l,c,t),t=g,a=c;var h=t.updateQueue;if(h===null){var F=new Set;F.add(a),t.updateQueue=F}else h.add(a);break e}else{if(!(t&1)){Uu(l,c,t),Vi();break e}a=Error(S(426))}}else if(X&&u.mode&1){var T=Au(i);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ju(T,i,u,l,t),xi(vn(a,u));break e}}l=a=vn(a,u),ee!==4&&(ee=2),$n===null?$n=[l]:$n.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ys(l,a,t);Lu(l,f);break e;case 1:u=a;var s=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ft===null||!Ft.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=Qs(l,u,t);Lu(l,y);break e}}l=l.return}while(l!==null)}pc(n)}catch(_){t=_,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function fc(){var e=fo.current;return fo.current=co,e===null?co:e}function Vi(){(ee===0||ee===3||ee===2)&&(ee=4),ne===null||!(At&268435455)&&!(zo&268435455)||dt(ne,le)}function vo(e,t){var n=j;j|=2;var r=fc();(ne!==e||le!==t)&&(Ke=null,Ot(e,t));do try{B0();break}catch(o){cc(e,o)}while(1);if(wi(),j=n,fo.current=r,Z!==null)throw Error(S(261));return ne=null,le=0,ee}function B0(){for(;Z!==null;)dc(Z)}function V0(){for(;Z!==null&&!pf();)dc(Z)}function dc(e){var t=vc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?pc(e):Z=t,Ii.current=null}function pc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=j0(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,Z=null;return}}else if(n=O0(n,t,xe),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ee===0&&(ee=5)}function Pt(e,t,n){var r=M,o=Ne.transition;try{Ne.transition=null,M=1,W0(e,t,n,r)}finally{Ne.transition=o,M=r}return null}function W0(e,t,n,r){do sn();while(mt!==null);if(j&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Cf(e,l),e===ne&&(Z=ne=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,hc(Gr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ne.transition,Ne.transition=null;var i=M;M=1;var u=j;j|=4,Ii.current=null,I0(e,n),uc(n,e),s0(Tl),br=!!zl,Tl=zl=null,e.current=n,U0(n),mf(),j=u,M=i,Ne.transition=l}else e.current=n;if(Lr&&(Lr=!1,mt=e,mo=o),l=e.pendingLanes,l===0&&(Ft=null),yf(n.stateNode),Fe(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(po)throw po=!1,e=Ql,Ql=null,e;return mo&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===Gl?Xn++:(Xn=0,Gl=e):Xn=0,zt(),null}function sn(){if(mt!==null){var e=Ya(mo),t=Ne.transition,n=M;try{if(Ne.transition=null,M=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,mo=0,j&6)throw Error(S(331));var o=j;for(j|=4,E=e.current;E!==null;){var l=E,i=l.child;if(E.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(E=c;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Wn(8,m,l)}var p=m.child;if(p!==null)p.return=m,E=p;else for(;E!==null;){m=E;var v=m.sibling,g=m.return;if(oc(m),m===c){E=null;break}if(v!==null){v.return=g,E=v;break}E=g}}}var h=l.alternate;if(h!==null){var F=h.child;if(F!==null){h.child=null;do{var T=F.sibling;F.sibling=null,F=T}while(F!==null)}}E=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,E=i;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Wn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,E=f;break e}E=l.return}}var s=e.current;for(E=s;E!==null;){i=E;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,E=d;else e:for(i=s;E!==null;){if(u=E,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ko(9,u)}}catch(_){G(u,u.return,_)}if(u===i){E=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,E=y;break e}E=u.return}}if(j=o,zt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(go,e)}catch{}r=!0}return r}finally{M=n,Ne.transition=t}}return!1}function qu(e,t,n){t=vn(n,t),t=Ys(e,t,1),e=St(e,t,1),t=pe(),e!==null&&(cr(e,1,t),Fe(e,t))}function G(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=vn(n,e),e=Qs(t,e,1),t=St(t,e,1),e=pe(),t!==null&&(cr(t,1,e),Fe(t,e));break}}t=t.return}}function $0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(le&n)===n&&(ee===4||ee===3&&(le&130023424)===le&&500>b()-Ai?Ot(e,0):Ui|=n),Fe(e,t)}function mc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=pe();e=ot(e,t),e!==null&&(cr(e,t,n),Fe(e,n))}function X0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mc(e,n)}function H0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),mc(e,n)}var vc;vc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,D0(e,t,n);ye=!!(e.flags&131072)}else ye=!1,X&&t.flags&1048576&&Ss(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vr(e,t),e=t.pendingProps;var o=fn(t,fe.current);an(t,n),o=Li(null,t,r,e,o,n);var l=Di();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(l=!0,no(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zi(t),o.updater=Eo,t.stateNode=o,o._reactInternals=t,Il(t,r,e,n),t=Jl(null,t,r,!0,l,n)):(t.tag=0,X&&l&&Fi(t),de(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Q0(r),e=Ie(r,e),o){case 0:t=Al(null,t,r,e,n);break e;case 1:t=Wu(null,t,r,e,n);break e;case 11:t=Bu(null,t,r,e,n);break e;case 14:t=Vu(null,t,r,Ie(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Al(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Wu(e,t,r,o,n);case 3:e:{if(Zs(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Es(e,t),uo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=vn(Error(S(423)),t),t=$u(e,t,r,n,o);break e}else if(r!==o){o=vn(Error(S(424)),t),t=$u(e,t,r,n,o);break e}else for(Ce=gt(t.stateNode.containerInfo.firstChild),we=t,X=!0,Ae=null,n=Cs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===o){t=lt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return ks(t),e===null&&Ol(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Pl(r,o)?i=null:l!==null&&Pl(r,l)&&(t.flags|=32),bs(e,t),de(e,t,i,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return qs(e,t,n);case 4:return Ti(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Bu(e,t,r,o,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,A(lo,r._currentValue),r._currentValue=i,l!==null)if(Ve(l.value,i)){if(l.children===o.children&&!ge.current){t=lt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){i=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=tt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),jl(l.return,n,t),u.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),jl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}de(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,an(t,n),o=Le(o),r=r(o),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,o=Ie(r,t.pendingProps),o=Ie(r.type,o),Vu(e,t,r,o,n);case 15:return Gs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Vr(e,t),t.tag=1,Se(r)?(e=!0,no(t)):e=!1,an(t,n),Hs(t,r,o),Il(t,r,o,n),Jl(null,t,r,!0,e,n);case 19:return ec(e,t,n);case 22:return Ks(e,t,n)}throw Error(S(156,t.tag))};function hc(e,t){return Wa(e,t)}function Y0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Y0(e,t,n,r)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q0(e){if(typeof e=="function")return Wi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ai)return 11;if(e===si)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Wi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ht:return jt(n.children,o,l,t);case ui:i=8,o|=8;break;case ul:return e=Re(12,n,t,o|2),e.elementType=ul,e.lanes=l,e;case al:return e=Re(13,n,t,o),e.elementType=al,e.lanes=l,e;case sl:return e=Re(19,n,t,o),e.elementType=sl,e.lanes=l,e;case ka:return To(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wa:i=10;break e;case Ea:i=9;break e;case ai:i=11;break e;case si:i=14;break e;case st:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Re(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function jt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=Re(22,e,r,t),e.elementType=ka,e.lanes=n,e.stateNode={isHidden:!1},e}function rl(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function ol(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function G0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function $i(e,t,n,r,o,l,i,u,a){return e=new G0(e,t,n,u,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Re(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(l),e}function K0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yc(e){if(!e)return wt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Se(n))return ys(e,n,t)}return t}function gc(e,t,n,r,o,l,i,u,a){return e=$i(n,r,!0,e,o,l,i,u,a),e.context=yc(null),n=e.current,r=pe(),o=_t(n),l=tt(r,o),l.callback=t??null,St(n,l,o),e.current.lanes=o,cr(e,o,r),Fe(e,r),e}function Po(e,t,n,r){var o=t.current,l=pe(),i=_t(o);return n=yc(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(o,t,i),e!==null&&(Be(e,o,i,l),Ar(e,o,i)),i}function ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ea(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xi(e,t){ea(e,t),(e=e.alternate)&&ea(e,t)}function b0(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hi(e){this._internalRoot=e}Ro.prototype.render=Hi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Po(e,t,null,null)};Ro.prototype.unmount=Hi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jt(function(){Po(null,e,null,null)}),t[rt]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ka();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&Za(e)}};function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ta(){}function Z0(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=ho(i);l.call(c)}}var i=gc(t,r,e,0,null,!1,!1,"",ta);return e._reactRootContainer=i,e[rt]=i.current,er(e.nodeType===8?e.parentNode:e),Jt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=ho(a);u.call(c)}}var a=$i(e,0,!1,null,null,!1,!1,"",ta);return e._reactRootContainer=a,e[rt]=a.current,er(e.nodeType===8?e.parentNode:e),Jt(function(){Po(t,a,n,r)}),a}function Lo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var u=o;o=function(){var a=ho(i);u.call(a)}}Po(t,i,e,o)}else i=Z0(n,t,e,o,r);return ho(i)}Qa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(di(t,n|1),Fe(t,b()),!(j&6)&&(hn=b()+500,zt()))}break;case 13:Jt(function(){var r=ot(e,1);if(r!==null){var o=pe();Be(r,e,1,o)}}),Xi(e,1)}};pi=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var n=pe();Be(t,e,134217728,n)}Xi(e,134217728)}};Ga=function(e){if(e.tag===13){var t=_t(e),n=ot(e,t);if(n!==null){var r=pe();Be(n,e,t,r)}Xi(e,t)}};Ka=function(){return M};ba=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Sl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=xo(r);if(!o)throw Error(S(90));Ta(r),dl(r,o)}}}break;case"textarea":Ra(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};Ia=Ji;Ua=Jt;var q0={usingClientEntryPoint:!1,Events:[dr,Kt,xo,ja,Ma,Ji]},Ln={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ed={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ba(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||b0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{go=Dr.inject(ed),Qe=Dr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q0;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yi(t))throw Error(S(200));return K0(e,t,null,n)};ke.createRoot=function(e,t){if(!Yi(e))throw Error(S(299));var n=!1,r="",o=Sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=$i(e,1,!1,null,null,n,!1,r,o),e[rt]=t.current,er(e.nodeType===8?e.parentNode:e),new Hi(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Ba(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Jt(e)};ke.hydrate=function(e,t,n){if(!No(t))throw Error(S(200));return Lo(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Yi(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Sc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=gc(t,null,e,1,n??null,o,!1,l,i),e[rt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ro(t)};ke.render=function(e,t,n){if(!No(t))throw Error(S(200));return Lo(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!No(e))throw Error(S(40));return e._reactRootContainer?(Jt(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};ke.unstable_batchedUpdates=Ji;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!No(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Lo(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function Fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc)}catch(e){console.error(e)}}Fc(),Fa.exports=ke;var td=Fa.exports,na=td;ll.createRoot=na.createRoot,ll.hydrateRoot=na.hydrateRoot;const nd="_panel_7zyns_1",rd="_title_7zyns_17",od="_setting_7zyns_26",ld="_toggle_7zyns_36",id="_toggleSlider_7zyns_49",ud="_label_7zyns_81",ad="_select_7zyns_86",sd="_slider_7zyns_108",$={panel:nd,title:rd,setting:od,toggle:ld,toggleSlider:id,label:ud,select:ad,slider:sd};function cd({shaderEnabled:e,onToggleShader:t,jointsEnabled:n,onToggleJoints:r,trailEnabled:o,onToggleTrail:l,effect:i,onEffectChange:u,speedMultiplier:a,onSpeedChange:c,presetNames:m,selectedPreset:p,onPresetChange:v,shaderNames:g,resolutionScale:h,onResolutionScaleChange:F,trailWidth:T,onTrailWidthChange:f}){return N.jsxs("div",{className:$.panel,children:[N.jsx("h2",{className:$.title,children:"Settings"}),N.jsx("div",{className:$.setting,children:N.jsx("select",{className:$.select,value:p,onChange:s=>v(parseInt(s.target.value)),children:m.map((s,d)=>N.jsx("option",{value:d,children:s},d))})}),N.jsx("div",{className:$.setting,children:N.jsx("select",{className:$.select,value:i,onChange:s=>u(s.target.value),children:g.map(s=>N.jsx("option",{value:s,children:s},s))})}),N.jsxs("div",{className:$.setting,children:[N.jsxs("label",{className:$.toggle,children:[N.jsx("input",{type:"checkbox",checked:e,onChange:s=>t(s.target.checked)}),N.jsx("span",{className:$.toggleSlider})]}),N.jsx("span",{className:$.label,children:"Shader Effect"})]}),N.jsxs("div",{className:$.setting,children:[N.jsxs("label",{className:$.toggle,children:[N.jsx("input",{type:"checkbox",checked:n,onChange:s=>r(s.target.checked)}),N.jsx("span",{className:$.toggleSlider})]}),N.jsx("span",{className:$.label,children:"Joints"})]}),N.jsxs("div",{className:$.setting,children:[N.jsxs("label",{className:$.toggle,children:[N.jsx("input",{type:"checkbox",checked:o,onChange:s=>l(s.target.checked)}),N.jsx("span",{className:$.toggleSlider})]}),N.jsx("span",{className:$.label,children:"Trail"})]}),N.jsxs("div",{className:$.setting,children:[N.jsxs("span",{className:$.label,children:["Speed: ",a.toFixed(1)]}),N.jsx("input",{type:"range",min:"0",max:"10",step:"0.1",value:a,onChange:s=>c(parseFloat(s.target.value))})]}),N.jsxs("div",{className:$.setting,children:[N.jsxs("span",{className:$.label,children:["Trail Width: ",T]}),N.jsx("input",{type:"range",min:"1",max:"50",step:"1",value:T,onChange:s=>f(parseFloat(s.target.value))})]}),N.jsxs("div",{className:$.setting,children:[N.jsxs("span",{className:$.label,children:["Resolution: ",h.toFixed(2),"x"]}),N.jsx("input",{type:"range",min:"0.25",max:"4",step:"0.25",value:h,onChange:s=>F(parseFloat(s.target.value))})]})]})}const fd=[{Name:"Mr Pi",Joints:[{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF0000"},{Size:100,Speed:31415,Enabled:!0,JointColor:"#FF00FF00"}]},{Name:"Simple-dimple",Joints:[{Size:10,Speed:1110,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e3,Enabled:!0,JointColor:"#FF00FFFF"},{Size:90,Speed:3330,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Porky",Joints:[{Size:100,Speed:3e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:90,Speed:2e3,Enabled:!0,JointColor:"#FF800080"}]},{Name:"Flower",Joints:[{Size:100,Speed:3200,Enabled:!0,JointColor:"#FFFF1493"},{Size:90,Speed:2e3,Enabled:!0,JointColor:"#FF00FF7F"}]},{Name:"Flower longer",Joints:[{Size:100,Speed:3200,Enabled:!0,JointColor:"#FFFF1493"},{Size:90,Speed:1100,Enabled:!0,JointColor:"#FF00FF7F"}]},{Name:"Triada",Joints:[{Size:5,Speed:1e4,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:10,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:3e4,Enabled:!0,JointColor:"#FF0000FF"}]},{Name:"Grannies' Pie",Joints:[{Size:22,Speed:1e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:150,Speed:1,Enabled:!0,JointColor:"#FFFF4500"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FFFF1493"},{Size:40,Speed:1e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Diabotical",Joints:[{Size:22,Speed:1e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:1,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:60,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"}]},{Name:"Pie revert",Joints:[{Size:22,Speed:1e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:1,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:60,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"}]},{Name:"Medal",Joints:[{Size:60,Speed:-1e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:300,Speed:3,Enabled:!0,JointColor:"#FFC0C0C0"},{Size:90,Speed:5e3,Enabled:!0,JointColor:"#FFB87333"},{Size:200,Speed:-2e4,Enabled:!0,JointColor:"#FFFFD700"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFC0C0C0"}]},{Name:"Krishna",Joints:[{Size:60,Speed:-8e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:5e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:90,Speed:-5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:-2e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e3,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Love story",Joints:[{Size:70,Speed:-8e3,Enabled:!0,JointColor:"#FFFF1493"},{Size:330,Speed:5e3,Enabled:!0,JointColor:"#FFFF69B4"},{Size:100,Speed:2e3,Enabled:!0,JointColor:"#FFFFB6C1"},{Size:120,Speed:-3e3,Enabled:!0,JointColor:"#FFFF1493"},{Size:90,Speed:1e3,Enabled:!0,JointColor:"#FFFF69B4"}]},{Name:"Mickey Mouse",Joints:[{Size:20,Speed:-1e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:3,Enabled:!0,JointColor:"#FFFF0000"},{Size:120,Speed:5e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FFFF0000"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF0000"}]},{Name:"Cross",Joints:[{Size:20,Speed:5e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-5e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:120,Speed:5e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Hush",Joints:[{Size:20,Speed:8e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-8e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:120,Speed:-4e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:4e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:4e3,Enabled:!0,JointColor:"#FFFF00FF"},{Size:100,Speed:-4e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Shuriken",Joints:[{Size:20,Speed:7e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-5e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:120,Speed:5e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FF00FF00"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FF0000FF"}]},{Name:"Inception",Joints:[{Size:70,Speed:2e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Vaze",Joints:[{Size:70,Speed:2e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FFFF00FF"},{Size:250,Speed:8e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Triumph",Joints:[{Size:70,Speed:2e3,Enabled:!1,JointColor:"#FFFFD700"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FFB87333"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:70,Speed:9e3,Enabled:!0,JointColor:"#FFC0C0C0"},{Size:250,Speed:-8e3,Enabled:!0,JointColor:"#FFB87333"}]},{Name:"Zombie",Joints:[{Size:70,Speed:3500,Enabled:!1,JointColor:"#FF00FF00"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:5e3,Enabled:!0,JointColor:"#FF008F00"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FF00FF00"}]},{Name:"Pizza",Joints:[{Size:70,Speed:3500,Enabled:!0,JointColor:"#FFFF4500"},{Size:300,Speed:-3e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FFFF4500"},{Size:40,Speed:-3e3,Enabled:!0,JointColor:"#FFFFD700"},{Size:70,Speed:-9e3,Enabled:!0,JointColor:"#FFFF4500"}]},{Name:"Prism",Joints:[{Size:20,Speed:5e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:300,Speed:-4e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:120,Speed:8e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:100,Speed:-2e4,Enabled:!0,JointColor:"#FFFFFF00"},{Size:100,Speed:1e4,Enabled:!0,JointColor:"#FFFF00FF"}]},{Name:"Infinity",Joints:[{Size:70,Speed:2e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:200,Speed:-3e3,Enabled:!0,JointColor:"#FF00FF00"},{Size:150,Speed:3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:400,Speed:-3e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:700,Speed:4e3,Enabled:!0,JointColor:"#FFFF00FF"},{Size:250,Speed:-3e3,Enabled:!0,JointColor:"#FF00FFFF"}]},{Name:"Soothing",Joints:[{Size:185,Speed:11e3,Enabled:!1,JointColor:"#FF000000"},{Size:110,Speed:-16e3,Enabled:!0,JointColor:"#FF00C7FF"},{Size:474,Speed:2e3,Enabled:!0,JointColor:"#FFFC9200"},{Size:20,Speed:0,Enabled:!0,JointColor:"#FFFF0000"}]},{Name:"Uber-Flower",Joints:[{Size:220,Speed:-5e3,Enabled:!0,JointColor:"#FFFFFF00"},{Size:260,Speed:-9e3,Enabled:!1,JointColor:"#FFFFFFFF"},{Size:325,Speed:18e3,Enabled:!0,JointColor:"#FF00FFF9"},{Size:405,Speed:-9e3,Enabled:!0,JointColor:"#FFFF0000"}]},{Name:"Poo",Joints:[{Size:130,Speed:-2e3,Enabled:!1,JointColor:"#FF8F5C00"},{Size:185,Speed:4e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:50,Speed:19e3,Enabled:!0,JointColor:"#FFBA7800"}]},{Name:"Happy new year",Joints:[{Size:355,Speed:-14e3,Enabled:!1,JointColor:"#FFC02F26"},{Size:35,Speed:4e3,Enabled:!1,JointColor:"#FF99F3A2"},{Size:415,Speed:11e3,Enabled:!1,JointColor:"#FFCE153F"},{Size:405,Speed:11e3,Enabled:!0,JointColor:"#FF1DCA74"},{Size:15,Speed:13e3,Enabled:!0,JointColor:"#FF49EEA0"}]},{Name:"Atomic duet",Joints:[{Size:110,Speed:-8e3,Enabled:!1,JointColor:"#FF3E5A35"},{Size:135,Speed:18e3,Enabled:!0,JointColor:"#FFFF0000"},{Size:250,Speed:-1e4,Enabled:!0,JointColor:"#FFFFFF00"}]},{Name:"Cloud connected",Joints:[{Size:55,Speed:-17e3,Enabled:!1,JointColor:"#FF550914"},{Size:35,Speed:3e3,Enabled:!1,JointColor:"#FF49BB0E"},{Size:330,Speed:13e3,Enabled:!0,JointColor:"#FF00FFF9"}]},{Name:"Nirvana baby",Joints:[{Size:375,Speed:-2e3,Enabled:!1,JointColor:"#FF1DC129"},{Size:280,Speed:4e3,Enabled:!1,JointColor:"#FF2F8260"},{Size:360,Speed:6e3,Enabled:!0,JointColor:"#FFFFFFFF"},{Size:180,Speed:-19e3,Enabled:!0,JointColor:"#FFFFAAAA"}]},{Name:"Pearl",Joints:[{Size:215,Speed:17e3,Enabled:!0,JointColor:"#FFFFFFFF"},{Size:295,Speed:-19e3,Enabled:!1,JointColor:"#FF1C8A97"},{Size:380,Speed:-19e3,Enabled:!1,JointColor:"#FF573A4C"},{Size:260,Speed:3e3,Enabled:!0,JointColor:"#FF1EEFC0"}]},{Name:"Elephant",Joints:[{Size:40,Speed:5e3,Enabled:!0,JointColor:"#FF019439"},{Size:355,Speed:-4e3,Enabled:!1,JointColor:"#FF8C1561"},{Size:115,Speed:2e3,Enabled:!0,JointColor:"#FF195CB3"},{Size:475,Speed:-5e3,Enabled:!0,JointColor:"#FF4F60A6"}]},{Name:"Trajectory",Joints:[{Size:90,Speed:-8e3,Enabled:!0,JointColor:"#FF3AD1C9"},{Size:5,Speed:-9e3,Enabled:!1,JointColor:"#FF7A0705"},{Size:20,Speed:17e3,Enabled:!1,JointColor:"#FF1C288A"},{Size:370,Speed:6e3,Enabled:!0,JointColor:"#FFDA21DA"}]},{Name:"Airplane",Joints:[{Size:25,Speed:1e4,Enabled:!1,JointColor:"#FF008000"},{Size:25,Speed:-6e3,Enabled:!1,JointColor:"#FFFFFFFF"},{Size:25,Speed:-3e3,Enabled:!0,JointColor:"#FF0000FF"},{Size:500,Speed:-3e3,Enabled:!0,JointColor:"#FFFFA500"},{Size:500,Speed:3e3,Enabled:!0,JointColor:"#FFFF0000"}]}];class Ze{constructor(t=1,n=0,r=0,o=1,l=0,i=0){this.m11=t,this.m12=n,this.m21=r,this.m22=o,this.m31=l,this.m32=i}static identity(){return new Ze}static createRotation(t){const n=Math.cos(t),r=Math.sin(t);return new Ze(n,r,-r,n,0,0)}static createTranslation(t,n){return new Ze(1,0,0,1,t,n)}static createScale(t,n){return new Ze(t,0,0,n,0,0)}multiply(t){return new Ze(this.m11*t.m11+this.m12*t.m21,this.m11*t.m12+this.m12*t.m22,this.m21*t.m11+this.m22*t.m21,this.m21*t.m12+this.m22*t.m22,this.m31*t.m11+this.m32*t.m21+t.m31,this.m31*t.m12+this.m32*t.m22+t.m32)}getTranslation(){return{x:this.m31,y:this.m32}}}class dd{constructor(){this.jointsEnabled=!0,this.shaderEnabled=!0,this.presets=fd,this.joints=[],this.currentPresetIndex=-1}loadPreset(t){if(t<0||t>=this.presets.length)return;const n=this.presets[t],r=n.Joints.reduce((o,l)=>o+l.Size,0);this.joints=n.Joints.map(o=>({lengthRatio:o.Size/r,rotation:0,speed:o.Speed,enabled:o.Enabled,color:o.JointColor})),this.currentPresetIndex=t}getPresetNames(){return this.presets.map(t=>t.Name)}updateJoints(t,n=1){this.joints.forEach(r=>{r.rotation+=r.speed*(t/1e5)*n,r.rotation=r.rotation%360})}getTotalRotation(){return this.joints.reduce((t,n)=>t+n.rotation,0)%360}calculateJoints(t,n){const r=this.joints.reduce((p,v)=>p+v.lengthRatio*100,0),o=Math.min(t,n)/2,l=window.devicePixelRatio||1,i=t/2*l,u=n/2*l;let a=Ze.createTranslation(i,u),c={x:i,y:u};const m=[];return this.joints.forEach(p=>{const v=p.rotation*Math.PI/180,g=o*(100*p.lengthRatio/r),h=Ze.createRotation(v);a=Ze.createTranslation(0,g).multiply(h).multiply(a);const T=a.getTranslation();m.push({startX:c.x,startY:c.y,endX:T.x,endY:T.y,length:g,angleRad:v,enabled:p.enabled,color:p.color}),c=T}),m}}const pd=`
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
`,md=Object.freeze(Object.defineProperty({__proto__:null,artFragmentShader:pd},Symbol.toStringTag,{value:"Module"})),vd=`
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
`,hd=`
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
`,yd=`
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
`,gd=`
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
`,Sd={buffera:{iChannel0:"self"},bufferb:{iChannel0:"buffera",iChannel1:"self"},bufferc:{iChannel0:"self"},image:{iChannel0:"buffera",iChannel1:"bufferb",iChannel2:"bufferc"}},Fd=Object.freeze(Object.defineProperty({__proto__:null,bufferAFragmentShader:vd,bufferBFragmentShader:hd,bufferCFragmentShader:yd,channels:Sd,imageFragmentShader:gd},Symbol.toStringTag,{value:"Module"})),_d=`
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
`,xd=Object.freeze(Object.defineProperty({__proto__:null,discoSunFragmentShader:_d},Symbol.toStringTag,{value:"Module"})),Cd=`
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
`,wd=Object.freeze(Object.defineProperty({__proto__:null,edgesFragmentShader:Cd},Symbol.toStringTag,{value:"Module"})),Ed=`
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
`,kd=Object.freeze(Object.defineProperty({__proto__:null,fire2FragmentShader:Ed},Symbol.toStringTag,{value:"Module"})),zd=`
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
`,Td=Object.freeze(Object.defineProperty({__proto__:null,firePlasmaFragmentShader:zd},Symbol.toStringTag,{value:"Module"})),Pd=`
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
`,Rd=`
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
`,Nd=`
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
`,Od=`
uniform sampler2D iChannel0;
uniform vec2 u_resolution;

void main() {
    vec4 col = textureLod(iChannel0, gl_FragCoord.xy/u_resolution.xy, 0.);
    if (gl_FragCoord.y < 1. || gl_FragCoord.y >= (u_resolution.y-1.))
        col = vec4(0);
    gl_FragColor = col;
}
`,jd={buffera:{iChannel0:"bufferc"},bufferb:{iChannel0:"buffera"},bufferc:{iChannel0:"bufferb"},bufferd:{iChannel0:"buffera",iChannel1:"bufferd"},image:{iChannel0:"bufferd"}},Md=Object.freeze(Object.defineProperty({__proto__:null,bufferAFragmentShader:Rd,bufferBFragmentShader:Nd,bufferCFragmentShader:Ld,bufferDFragmentShader:Dd,channels:jd,common:Pd,imageFragmentShader:Od},Symbol.toStringTag,{value:"Module"})),Id=`
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
`,Ud=`
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
`,Ad={buffera:{iChannel0:"self"},image:{iChannel0:"buffera",iChannel1:"self"}},Jd=Object.freeze(Object.defineProperty({__proto__:null,bufferAFragmentShader:Id,channels:Ad,imageFragmentShader:Ud},Symbol.toStringTag,{value:"Module"})),Bd=`
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
`,Vd=Object.freeze(Object.defineProperty({__proto__:null,matrixFragmentShader:Bd},Symbol.toStringTag,{value:"Module"})),Wd={iChannel0:"trail"},$d=`
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
`,Xd=Object.freeze(Object.defineProperty({__proto__:null,channelSources:Wd,nightSeaFragmentShader:$d},Symbol.toStringTag,{value:"Module"})),Hd={iChannel0:"trail"},Yd=`
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
`,Qd=Object.freeze(Object.defineProperty({__proto__:null,channelSources:Hd,rainFragmentShader:Yd},Symbol.toStringTag,{value:"Module"})),Gd=`
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
`,Kd=Object.freeze(Object.defineProperty({__proto__:null,relaxPlasmaFragmentShader:Gd},Symbol.toStringTag,{value:"Module"})),bd=`
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
`,Zd=Object.freeze(Object.defineProperty({__proto__:null,starleidoscopeFragmentShader:bd},Symbol.toStringTag,{value:"Module"})),qd={iChannel0:"trail"},ep=`
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
`,tp=Object.freeze(Object.defineProperty({__proto__:null,channelSources:qd,trailEffectFragmentShader:ep},Symbol.toStringTag,{value:"Module"})),np=`
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
`,rp=Object.freeze(Object.defineProperty({__proto__:null,warpFragmentShader:np},Symbol.toStringTag,{value:"Module"})),op=`
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
`,lp=Object.freeze(Object.defineProperty({__proto__:null,wavesFragmentShader:op},Symbol.toStringTag,{value:"Module"})),ip=5,up=10,ap=1,sp=`#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,ra=Object.assign({"./shaders/art.js":md,"./shaders/balls.js":Fd,"./shaders/discoSun.js":xd,"./shaders/edges.js":wd,"./shaders/fire2.js":kd,"./shaders/firePlasma.js":Td,"./shaders/fluidSim.js":Md,"./shaders/fluidSimGasoline.js":Jd,"./shaders/matrix.js":Vd,"./shaders/nightSea.js":Xd,"./shaders/rain.js":Qd,"./shaders/relaxPlasma.js":Kd,"./shaders/starleidoscope.js":Zd,"./shaders/trailEffect.js":tp,"./shaders/warp.js":rp,"./shaders/waves.js":lp});function cp(e){if(!e||e.length!==9)return{r:255,g:255,b:255,a:255};const t=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16),o=parseInt(e.substring(7,9),16);return{r:n,g:r,b:o,a:t}}function oa(e,t,n,r="unknown"){const o=e.createShader(t);return e.shaderSource(o,n),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(console.error(`Shader error (${r}):`,e.getShaderInfoLog(o)),e.deleteShader(o),null)}function fp(e,t,n){const r=e.createProgram();return e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?r:(console.error(e.getProgramInfoLog(r)),e.deleteProgram(r),null)}function la(e,t,n=!1,r="unknown"){const o=oa(e,e.VERTEX_SHADER,sp,r+"_vertex");let l=t.trim();n&&(l=l.replace(/gl_FragColor/g,"fragColor"),l=l.replace(/texture2D\(/g,"texture("),l.includes("out vec4 fragColor")||(l.startsWith("#version")?(l.includes("precision highp float")?l.match(/precision\s+highp\s+float\s*;/)||(l=l.replace("precision highp float","precision highp float;")):l=l.replace("#version",`#version
precision highp float;`),l.includes("out vec4 fragColor")||(l=l.replace("precision highp float;",`precision highp float;
out vec4 fragColor;`))):l=`#version 300 es
precision highp float;
out vec4 fragColor;

`+l.replace(/^\s*precision\s+highp\s+float\s*;\s*/m,"")));const i=oa(e,e.FRAGMENT_SHADER,l,r+"_fragment");if(!o||!i)return null;const u=fp(e,o,i);if(!u)return null;const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const c=e.getAttribLocation(u,"a_position");e.enableVertexAttribArray(c),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0);const m=e.getError();return m!==e.NO_ERROR&&console.error("WebGL error after creating program:",m),u}function ia(e,t){return{u_time:e.getUniformLocation(t,"u_time"),u_resolution:e.getUniformLocation(t,"u_resolution"),u_emitterX:e.getUniformLocation(t,"u_emitterX"),u_emitterY:e.getUniformLocation(t,"u_emitterY"),u_emitter:e.getUniformLocation(t,"u_emitter"),u_emitterVelX:e.getUniformLocation(t,"u_emitterVelX"),u_emitterVelY:e.getUniformLocation(t,"u_emitterVelY"),u_mouse:e.getUniformLocation(t,"u_mouse"),u_timeDelta:e.getUniformLocation(t,"u_timeDelta"),u_frameRate:e.getUniformLocation(t,"u_frameRate"),u_frame:e.getUniformLocation(t,"u_frame"),u_sampleRate:e.getUniformLocation(t,"u_sampleRate"),iChannel0:e.getUniformLocation(t,"iChannel0"),iChannel1:e.getUniformLocation(t,"iChannel1"),iChannel2:e.getUniformLocation(t,"iChannel2"),iChannel3:e.getUniformLocation(t,"iChannel3")}}function ua(e,t,n){const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,t,n,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const o=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{texture:r,framebuffer:o}}function dp(e,t,n){return{ping:ua(e,t,n),pong:ua(e,t,n),current:0}}const Zl=["buffera","bufferb","bufferc","bufferd"],pp={buffera:{iChannel0:"self",iChannel1:"noise"},bufferb:{iChannel0:"buffera",iChannel1:"noise"},bufferc:{iChannel0:"bufferb",iChannel1:"noise"},bufferd:{iChannel0:"bufferc",iChannel1:"noise"}};function mp(e,t=256){const n=new Uint8Array(t*t*4);for(let o=0;o<n.length;o+=4)n[o]=Math.random()*256,n[o+1]=Math.random()*256,n[o+2]=Math.random()*256,n[o+3]=255;const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,t,0,e.RGBA,e.UNSIGNED_BYTE,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),r}function vp(){const e=[];for(const t in ra){const n=ra[t],r=t.split("/").pop().replace(".js",""),o=Object.keys(n).filter(l=>l.endsWith("FragmentShader"));if(o.length>1){const l=n.common||"",i=n.channels||{},u={};for(const a of o){const c=a.replace("FragmentShader","").toLowerCase();let m=i[c]||{};if(Object.keys(m).length===0){for(const p of Object.keys(i))if(p.toLowerCase()===c){m=i[p];break}}u[c]={fragmentShader:l+n[a],channels:m}}e.push({name:r,type:"multi",passes:u})}else o.length===1&&e.push({name:r,type:"single",fragmentShader:n[o[0]],channelSources:n.channelSources||{}})}return e}const _c=vp();function hp(e,t){const n=e.getContext("webgl2");if(!n)return null;n.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not supported, multipass shaders may not work correctly");const o={},l=mp(n),i={buffera:{ping:null,pong:null,current:0},bufferb:{ping:null,pong:null,current:0},bufferc:{ping:null,pong:null,current:0},bufferd:{ping:null,pong:null,current:0}};for(const m of _c)if(m.type==="multi"){o[m.name]={name:m.name,type:"multi",passes:{}};for(const[p,v]of Object.entries(m.passes)){const g=la(n,v.fragmentShader,!0,`${m.name}_${p}`);g&&(o[m.name].passes[p]={program:g,uniforms:ia(n,g),channels:v.channels})}}else{const p=la(n,m.fragmentShader,!0,m.name);p&&(o[m.name]={name:m.name,type:"single",program:p,uniforms:ia(n,p),channelSources:m.channelSources||{}})}const u=t.getContext("2d");let a=n.createTexture();function c(){n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.bindTexture(n.TEXTURE_2D,a),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.generateMipmap(n.TEXTURE_2D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1)}return{gl:n,shaderPrograms:o,noiseTexture:l,fbos:i,trailCtx:u,trailCanvas:t,trailTexture:a,updateTrailTexture:c}}function yp(e,t,n,r,o,l){const i=t;i.u_time&&e.uniform1f(i.u_time,o*.001),i.u_resolution&&e.uniform2f(i.u_resolution,n,r),i.u_timeDelta&&l.timeDelta&&e.uniform1f(i.u_timeDelta,l.timeDelta),i.u_frameRate&&l.frameRate&&e.uniform1f(i.u_frameRate,l.frameRate),i.u_frame&&e.uniform1i(i.u_frame,l.frame||0),i.u_sampleRate&&e.uniform1f(i.u_sampleRate,44100),i.u_emitterX&&l.emitterX!==void 0&&e.uniform1f(i.u_emitterX,l.emitterX),i.u_emitterY&&l.emitterY!==void 0&&e.uniform1f(i.u_emitterY,l.emitterY),i.u_emitter&&l.emitterX!==void 0&&l.emitterY!==void 0&&e.uniform2f(i.u_emitter,l.emitterX,l.emitterY),i.u_emitterVelX&&l.emitterVelX!==void 0&&e.uniform1f(i.u_emitterVelX,l.emitterVelX),i.u_emitterVelY&&l.emitterVelY!==void 0&&e.uniform1f(i.u_emitterVelY,l.emitterVelY),i.u_mouse&&e.uniform4f(i.u_mouse,l.emitterX||0,l.emitterY||0,l.mouseZ||0,l.mouseZ||0)}function Rt(e,t,n,r,o){const l=t[n];l!=null&&r&&(e.activeTexture(e.TEXTURE0+o),e.bindTexture(e.TEXTURE_2D,r),e.uniform1i(l,o))}function ql(e,t,n,r,o,l){yp(e,t,n,r,o,l),e.drawArrays(e.TRIANGLES,0,6)}function xc(e,t,n,r){for(const o of Zl){const l=t[o];l.ping&&(e.deleteTexture(l.ping.texture),e.deleteFramebuffer(l.ping.framebuffer),e.deleteTexture(l.pong.texture),e.deleteFramebuffer(l.pong.framebuffer)),t[o]=dp(e,n,r)}}function Cc(e,t){if(!t||t==="self")return null;const n=e[t];return!n||!n.ping?null:n.current===0?n.ping.texture:n.pong.texture}function gp(e,t,n,r,o,l,i,u,a){const c=t.passes[n];if(!c)return null;const m=r[n],p=m.current===0?m.ping:m.pong,v=m.current===0?m.pong:m.ping;e.bindFramebuffer(e.FRAMEBUFFER,v.framebuffer),e.viewport(0,0,l,i),e.disable(e.BLEND),e.useProgram(c.program);const g=pp[n]||{},h=c.channels||{},F=Object.keys(h).length>0?{...g,...h}:g;for(let T=0;T<4;T++){const f=`iChannel${T}`,s=F[f],d=c.uniforms[f];if(s&&d!==null&&d!==void 0){let y=o;s==="self"||s===n?y=p.texture:s!=="noise"&&(y=Cc(r,s)||o),y&&Rt(e,c.uniforms,f,y,T)}}return ql(e,c.uniforms,l,i,u,a),v.texture}function Sp(e,t,n,r,o,l,i,u=.016,a=0){const{gl:c,shaderPrograms:m,noiseTexture:p,fbos:v}=e;c.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT),c.enable(c.BLEND),c.blendFunc(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA),m._frameCounters||(m._frameCounters={}),m._frameCounters[n]||(m._frameCounters[n]=0),m._frameCounters[n]++;const g={emitterX:r,emitterY:o,emitterVelX:l,emitterVelY:i,timeDelta:u,frameRate:u>0?1/u:60,frame:m._frameCounters[n],mouseZ:a},h=m[n];if(!h)return;const F=c.canvas.width,T=c.canvas.height;if(h.type==="single"){const f=h.channelSources||{};if(c.useProgram(h.program),h.uniforms.iChannel0!==null&&h.uniforms.iChannel0!==void 0){const s=f.iChannel0||"noise",d=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),Rt(c,h.uniforms,"iChannel0",d,0)}if(h.uniforms.iChannel1!==null&&h.uniforms.iChannel1!==void 0){const s=f.iChannel1||"noise",d=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),Rt(c,h.uniforms,"iChannel1",d,1)}if(h.uniforms.iChannel2!==null&&h.uniforms.iChannel2!==void 0){const s=f.iChannel2||"noise",d=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),Rt(c,h.uniforms,"iChannel2",d,2)}if(h.uniforms.iChannel3!==null&&h.uniforms.iChannel3!==void 0){const s=f.iChannel3||"noise",d=s==="trail"?e.trailTexture:s==="self"?null:p;s==="trail"&&e.updateTrailTexture(),Rt(c,h.uniforms,"iChannel3",d,3)}ql(c,h.uniforms,F,T,t,g)}else{v.buffera.ping||xc(c,v,F,T);let f=null;for(let s=0;s<ap;s++)for(const d of Zl)h.passes[d]&&(f=gp(c,h,d,v,p,F,T,t,g));for(const s of Zl)v[s]&&(v[s].current=1-v[s].current);if(c.bindFramebuffer(c.FRAMEBUFFER,null),c.viewport(0,0,F,T),c.enable(c.BLEND),h.passes.image){const s=h.passes.image.channels||{};c.useProgram(h.passes.image.program);const y={...{},...s};for(const[_,x]of Object.entries(y)){if(!_.startsWith("iChannel"))continue;const k=parseInt(_.replace("iChannel",""));let w=null;x==="trail"?e&&e.trailTexture&&(e.updateTrailTexture(),w=e.trailTexture):x==="noise"?w=p:x==="final"||!x||x==="self"?w=f||p:w=Cc(v,x)||p;const U=h.passes.image.uniforms[_];w&&U!==null&&U!==void 0&&Rt(c,h.passes.image.uniforms,_,w,k)}for(let _=0;_<4;_++){const x=`iChannel${_}`;!y[x]&&h.passes.image.uniforms[x]!==null&&h.passes.image.uniforms[x]!==void 0&&Rt(c,h.passes.image.uniforms,x,_===0&&f||p,_)}ql(c,h.passes.image.uniforms,F,T,t,g)}}}function Fp(e,t,n,r=2){const{trailCtx:o}=e;!o||!t||!n||(o.lineWidth=r,t.forEach((l,i)=>{if(l.enabled&&n[i]){const u=cp(l.color);o.strokeStyle=`rgba(${u.r}, ${u.g}, ${u.b}, ${u.a/255})`,o.beginPath(),o.moveTo(n[i].endX,n[i].endY),o.lineTo(l.endX,l.endY),o.stroke()}}))}function aa(e,t=null,n=1){const r=window.devicePixelRatio||1;e.width=window.innerWidth*r*n,e.height=window.innerHeight*r*n,t&&t.viewport(0,0,e.width,e.height)}function _p(e,t=1){const n=window.devicePixelRatio||1;e.width=window.innerWidth*n*t,e.height=window.innerHeight*n*t}function xp(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),t.forEach(n=>{e.strokeStyle="#00ff00",e.lineWidth=ip,e.beginPath(),e.moveTo(n.startX,n.startY),e.lineTo(n.endX,n.endY),e.stroke(),e.fillStyle="#ff0000",e.beginPath(),e.arc(n.endX,n.endY,up/2,0,Math.PI*2),e.fill()})}const Cp=30;function wp(){const[e,t]=z.useState(0),n=z.useRef([]),[r,o]=z.useState(!0),[l,i]=z.useState(!0),[u,a]=z.useState(!0),[c,m]=z.useState("plasma"),[p,v]=z.useState(1),[g,h]=z.useState(0),[F,T]=z.useState(1),[f,s]=z.useState(2),d=z.useRef(null),y=z.useRef(null),_=z.useRef(null),x=z.useRef(null),k=z.useRef(null),w=z.useRef(0),U=z.useRef(.016),L=z.useRef(null),ue=z.useRef(null),Oe=z.useRef(new dd),ut=z.useRef(1),Fn=z.useRef(!0),mr=z.useRef(!0),_n=z.useRef(!0),Wt=z.useRef("plasma"),C=z.useRef(1),P=z.useRef(2),R=z.useRef(!1),I=z.useRef({x:0,y:0,pressed:!1});z.useEffect(()=>{ut.current=p},[p]),z.useEffect(()=>{C.current=F},[F]),z.useEffect(()=>{P.current=f},[f]),z.useEffect(()=>{Fn.current=r},[r]),z.useEffect(()=>{mr.current=l},[l]),z.useEffect(()=>{_n.current=u},[u]),z.useEffect(()=>{Wt.current=c},[c]),z.useEffect(()=>{const D=()=>{document.hidden?R.current=!0:w.current=0};return document.addEventListener("visibilitychange",D),()=>{document.removeEventListener("visibilitychange",D)}},[]);const K=z.useCallback(()=>{const D=d.current,J=y.current;if(!D||!J)return;const re=hp(D,J);re&&(x.current=re)},[]),We=z.useCallback(()=>{const D=d.current,J=x.current;D&&J&&(aa(D,J.gl,C.current),xc(J.gl,J.fbos,D.width,D.height));const re=y.current;re&&_p(re,C.current);const _e=_.current;_e&&aa(_e,null,C.current)},[]);z.useEffect(()=>{We()},[F,We]);const $e=z.useCallback(()=>{const D=y.current;D&&D.getContext("2d").clearRect(0,0,D.width,D.height)},[]),xn=z.useCallback(D=>{Oe.current.loadPreset(D),L.current=null,$e(),h(D)},[$e]),je=z.useCallback(D=>{const J=x.current,re=d.current;if(w.current>0&&!R.current){const W=D-w.current;U.current=W/1e3,Oe.current.updateJoints(W,ut.current);const vr=1e3/W;n.current.push(vr),n.current.length>Cp&&n.current.shift();const hr=n.current.reduce((Cn,wn)=>Cn+wn,0)/n.current.length;t(Math.round(hr))}w.current=D,R.current=!1;const _e=Oe.current.calculateJoints(window.innerWidth,window.innerHeight);if(J&&re&&Fn.current){const W=_e.length>0?_e[_e.length-1]:null;let vr=0,hr=0;W&&ue.current&&(vr=W.endX-ue.current.x,hr=W.endY-ue.current.y);const Cn=I.current,wn=Cn.pressed,wc=wn?Cn.x:W?W.endX:null,Ec=wn?Cn.y:W?W.endY:null,kc=wn?2:0;Sp(J,D,Wt.current,wc,Ec,vr,hr,U.current,kc),W&&(ue.current={x:W.endX,y:W.endY})}if(J&&Fp(J,_e,L.current,P.current),mr.current&&_.current){const W=_.current.getContext("2d");xp(W,_e)}else if(_.current){const W=_.current.getContext("2d");W.clearRect(0,0,W.canvas.width,W.canvas.height)}L.current=_e,k.current=requestAnimationFrame(je)},[]);return z.useEffect(()=>{Oe.current.loadPreset(0),K(),We();const D=()=>We();return window.addEventListener("resize",D),k.current=requestAnimationFrame(je),()=>{window.removeEventListener("resize",D),k.current&&cancelAnimationFrame(k.current)}},[K,We,je]),N.jsxs(N.Fragment,{children:[N.jsx("div",{style:{display:r?"none":"block",width:"100vw",height:"100vh",background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"}}),N.jsxs("div",{style:{position:"fixed",top:10,left:10,color:"white",fontFamily:"monospace",fontSize:"14px",background:"rgba(0,0,0,0.5)",padding:"4px 8px",borderRadius:"4px",zIndex:1e3},children:[e," FPS"]}),N.jsx("canvas",{ref:d,style:{display:r?"block":"none",position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1},onMouseDown:D=>{const J=d.current;if(!J)return;const re=J.getBoundingClientRect(),_e=(D.clientX-re.left)*(J.width/re.width),W=(D.clientY-re.top)*(J.height/re.height);I.current={x:_e,y:J.height-W,pressed:!0}},onMouseMove:D=>{const J=d.current;if(!J)return;const re=J.getBoundingClientRect(),_e=(D.clientX-re.left)*(J.width/re.width),W=(D.clientY-re.top)*(J.height/re.height);I.current={...I.current,x:_e,y:J.height-W}},onMouseUp:()=>{I.current.pressed=!1},onMouseLeave:()=>{I.current.pressed=!1}}),N.jsx("canvas",{ref:y,style:{display:u?"block":"none",position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:2}}),N.jsx("canvas",{ref:_,style:{display:l?"block":"none",position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:3}}),N.jsx(cd,{shaderEnabled:r,onToggleShader:o,jointsEnabled:l,onToggleJoints:i,trailEnabled:u,onToggleTrail:a,effect:c,onEffectChange:m,speedMultiplier:p,onSpeedChange:v,presetNames:Oe.current.getPresetNames(),selectedPreset:g,onPresetChange:xn,shaderNames:_c.map(D=>D.name),resolutionScale:F,onResolutionScaleChange:T,trailWidth:f,onTrailWidthChange:s})]})}ll.createRoot(document.getElementById("root")).render(N.jsx(Wc.StrictMode,{children:N.jsx(wp,{})}));
